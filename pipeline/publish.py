"""Orchestratore settimanale roma284.

Per ogni run (lunedì mattina):
  1) fino a N grandi eventi INTERNAZIONALI nuovi → articolo pieno in 11 lingue
     (con rotazione della caratteristica appartamento in primo piano);
  2) un ROUNDUP "Il prossimo weekend a Piacenza" (solo IT, URL evergreen) con gli
     eventi locali del periodo (i minori confluiscono qui, non diventano articoli singoli).

Uso:
  python -m pipeline.publish --event-file pipeline/_out/events.json [--dry-run] [--out DIR] [--cap 3]
"""
from __future__ import annotations
import argparse
import json
from datetime import date, datetime, timedelta
from pathlib import Path

from pipeline import config
from pipeline.common import state as state_mod
from pipeline.common.events import dedup, future_only, sort_for_selection, sort_for_big_selection
from pipeline.common.site_facts import FEATURES_ROTATION
from pipeline.llm.client import get_backend
from pipeline.writer.run import build_article_set, translation_key_for, _eligible
from pipeline.writer.roundup import build_roundup, ROUNDUP_TKEY

ROUNDUP_WINDOW_DAYS = 16  # eventi che iniziano entro ~2 weekend
ROUNDUP_MAX_EVENTS = 15   # tetto segnalazioni nel roundup (prompt/tempi sotto controllo)


def _near(ev: dict, days: int) -> bool:
    try:
        start = datetime.fromisoformat(ev["start_date"]).date()
        end = datetime.fromisoformat(ev["end_date"]).date()
    except (ValueError, KeyError, TypeError):
        return False
    today = date.today()
    return end >= today and start <= today + timedelta(days=days)


def run_weekly(event_file: str, engine: str, model: str, dry_run: bool,
               out: str, cap_big: int) -> int:
    events = json.loads(Path(event_file).read_text(encoding="utf-8"))
    if isinstance(events, dict):
        events = [events]
    events = sort_for_selection(future_only(dedup(events)))

    state = state_mod.load_state(config.STATE_FILE)
    backend = get_backend(engine, model)
    today = date.today().isoformat()
    base = Path(out) if dry_run else config.BLOG_DIR
    print(f"Engine={engine} model={model} | eventi={len(events)} | "
          f"output={'(dry-run) ' if dry_run else ''}{base} | cap grandi={cap_big}\n")

    written, skipped = 0, 0

    # 1) Grandi eventi internazionali nuovi (11 lingue, focus a rotazione).
    # Ordine SEO: a parità di rilevanza, prima gli eventi con lead più lungo
    # (la pagina ha settimane per indicizzarsi e posizionarsi prima dell'evento).
    big = []
    for ev in sort_for_big_selection(events):
        if ev.get("tier") != "international":
            continue
        ok, _why = _eligible(ev, state)
        if ok:
            big.append(ev)
        if len(big) >= cap_big:
            break

    big_keys = set()
    for ev in big:
        focus = state_mod.next_focus(state, FEATURES_ROTATION)
        try:
            tkey, pub_date, results, errors = build_article_set(backend, ev, focus_feature=focus)
        except Exception as e:  # noqa: BLE001
            print(f"✗ grande «{ev.get('title','?')}»: {e}")
            skipped += 1
            continue
        if errors:
            print(f"✗ grande «{ev.get('title','?')}» NON scritto: {errors[:6]}")
            skipped += 1
            continue
        for _loc, rel, content, _slug in results:
            (base / rel).parent.mkdir(parents=True, exist_ok=True)
            (base / rel).write_text(content, encoding="utf-8")
        big_keys.add(tkey)
        if not dry_run:
            state_mod.mark_published(state, tkey, ev.get("id", ""),
                                     {"title": ev.get("title"), "tier": "international"})
        written += 1
        print(f"✓ GRANDE «{ev.get('title','?')}» — 11 lingue (focus: {focus})")

    # 2) Roundup settimanale (solo IT) dagli eventi locali vicini
    near = [e for e in events if _near(e, ROUNDUP_WINDOW_DAYS)
            and translation_key_for(e) not in big_keys][:ROUNDUP_MAX_EVENTS]
    if near:
        try:
            rel, content, errors = build_roundup(backend, near, "i prossimi giorni", today)
        except Exception as e:  # noqa: BLE001  (es. timeout) — non far fallire l'intero run
            print(f"✗ roundup errore: {e}")
            rel, content, errors = None, None, ["roundup non generato"]
        if errors:
            print(f"✗ roundup NON scritto: {errors[:6]}")
            skipped += 1
        else:
            (base / rel).parent.mkdir(parents=True, exist_ok=True)
            (base / rel).write_text(content, encoding="utf-8")
            if not dry_run:
                state_mod.mark_published(state, ROUNDUP_TKEY, "roundup",
                                         {"title": "weekend roundup", "refreshed": today})
            written += 1
            print(f"✓ ROUNDUP «Il prossimo weekend a Piacenza» — {len(near)} segnalazioni")
    else:
        print("• roundup saltato: nessun evento locale nella finestra")

    if not dry_run and written:
        state_mod.save_state(config.STATE_FILE, state)
    print(f"\nFatto. Scritti: {written} | saltati: {skipped}")
    # Verde se abbiamo prodotto qualcosa (gli skip sono warning, non fanno fallire il run);
    # rosso solo se c'erano candidati ma non è uscito NULLA.
    return 0 if (written > 0 or (not big and not near)) else 1


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Orchestratore settimanale roma284")
    ap.add_argument("--event-file", required=True)
    ap.add_argument("--engine", default=config.LLM_ENGINE, choices=["claude_code", "api", "mock"])
    ap.add_argument("--model", default=config.LLM_MODEL)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--out", default="pipeline/_out")
    ap.add_argument("--cap", type=int, default=int(__import__("os").environ.get("MAX_BIG_PER_RUN", "3")))
    args = ap.parse_args(argv)
    return run_weekly(args.event_file, args.engine, args.model, args.dry_run, args.out, args.cap)


if __name__ == "__main__":
    raise SystemExit(main())
