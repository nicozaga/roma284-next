"""Scout — aggrega gli eventi dalle fonti approvate e scrive events.json.

Uso:
  python -m pipeline.scout.run --out events.json
  python -m pipeline.scout.run --out events.json --max 20 --year 2026

Output = lista Event (vedi common/events.py), deduplicata, solo futuri,
ordinata per rilevanza. È l'input del Writer.
"""
from __future__ import annotations
import argparse
import json
from datetime import date
from pathlib import Path

from pipeline import config
from pipeline.common.events import dedup, future_only, sort_for_selection, relevance_score
from pipeline.scout.sources import aefi, ticketmaster, seed, rss_local


def aggregate(collectors):
    """collectors = lista di (nome, callable->list[event]). Ritorna (eventi, conteggi)."""
    all_ev, counts = [], {}
    for name, fn in collectors:
        try:
            evs = fn() or []
        except Exception as e:  # noqa: BLE001
            print(f"[{name}] errore: {e}")
            evs = []
        counts[name] = len(evs)
        all_ev += evs
    return all_ev, counts


def default_collectors(year: int, lookahead: int):
    # AEFI: anno corrente + successivo (eventi a cavallo d'anno entro la finestra)
    return [
        ("aefi", lambda: aefi.collect(year) + aefi.collect(year + 1)),
        ("ticketmaster", lambda: ticketmaster.collect(lookahead_days=lookahead)),
        ("seed", lambda: seed.collect()),
        ("rss_local", lambda: rss_local.collect()),
    ]


def run(out_path: str, year: int, max_events: int, collectors=None) -> list[dict]:
    collectors = collectors or default_collectors(year, config.EVENT_LOOKAHEAD_DAYS)
    raw, counts = aggregate(collectors)
    events = sort_for_selection(future_only(dedup(raw)))
    if max_events > 0:
        events = events[:max_events]
    Path(out_path).parent.mkdir(parents=True, exist_ok=True)
    Path(out_path).write_text(json.dumps(events, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print("Fonti:", ", ".join(f"{k}={v}" for k, v in counts.items()))
    print(f"Totale grezzo={sum(counts.values())} → dopo dedup/futuri/sort={len(events)} → scritti in {out_path}")
    for e in events[:8]:
        print(f"  [{relevance_score(e)}] {e['start_date']} {e['city']:8} {e['type']:7} {e['title'][:48]}")
    return events


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Scout roma284 — raccolta eventi -> events.json")
    ap.add_argument("--out", default="events.json")
    ap.add_argument("--year", type=int, default=date.today().year)
    ap.add_argument("--max", type=int, default=0, help="0 = nessun limite (il Writer applica il suo cap)")
    args = ap.parse_args(argv)
    run(args.out, args.year, args.max)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
