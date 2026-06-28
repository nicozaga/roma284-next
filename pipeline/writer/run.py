"""Writer — da eventi (Scout) a articoli .md in 11 lingue.

Uso:
  python -m pipeline.writer.run --event-file pipeline/examples/events.sample.json --engine mock --dry-run
  python -m pipeline.writer.run --event-file events.json            # produzione (engine da config)

Divisione: l'LLM produce il contenuto; il codice costruisce frontmatter/slug/link e VALIDA.
Scrive un articolo solo se TUTTE le 11 lingue passano la validazione (niente output parziale).
"""
from __future__ import annotations
import argparse
import json
import sys
from datetime import date, datetime
from pathlib import Path

from pipeline import config
from pipeline.common import state as state_mod
from pipeline.common.i18n import DEFAULT_LOCALE, slugify
from pipeline.common.frontmatter import assemble_article, validate_article, finalize_slug
from pipeline.llm.client import get_backend, parse_json
from pipeline.writer.prompts import build_master_prompt, build_translation_prompt

REQ_KEYS = ("title", "description", "body")


def _gen_master(backend, event: dict) -> dict:
    if backend.is_mock:
        return backend.mock_master(event)
    sys_p, usr_p = build_master_prompt(event)
    return parse_json(backend.complete(sys_p, usr_p))


def _gen_translations(backend, event: dict, master: dict, locales: list[str]) -> dict:
    if backend.is_mock:
        return backend.mock_translations(event, master, locales)
    sys_p, usr_p = build_translation_prompt(event, master, locales)
    return parse_json(backend.complete(sys_p, usr_p))


def translation_key_for(event: dict) -> str:
    if event.get("id"):
        return slugify(event["id"])
    base = slugify(event.get("title", ""))
    yr = (event.get("start_date") or "")[:4]
    return f"{base}-{yr}".strip("-")


def build_article_set(backend, event: dict):
    """Ritorna (tkey, pub_date, results[list of (locale, relpath, content, slug)], errors)."""
    tkey = translation_key_for(event)
    pub_date = date.today().isoformat()
    errors: list[str] = []

    master = _gen_master(backend, event)
    for k in (*REQ_KEYS, "slug", "category_key"):
        master.setdefault(k, "")
    if not all(master.get(k) for k in REQ_KEYS):
        return tkey, pub_date, [], ["master incompleto (title/description/body)"]

    other = [l for l in config.TARGET_LOCALES if l != DEFAULT_LOCALE]
    trans = _gen_translations(backend, event, master, other)

    en = trans.get("en", {}) or {}
    en_slug = finalize_slug(
        en.get("slug", "") or en.get("title", ""),
        slugify(en.get("title", "") or master.get("title", "")),
        "en",
    )

    results = []
    # IT master (radice, niente slug nel frontmatter)
    it_slug = finalize_slug(master.get("slug", "") or master.get("title", ""),
                            en_slug or slugify(master.get("title", "")), DEFAULT_LOCALE)
    rel, content = assemble_article(
        locale=DEFAULT_LOCALE, title=master["title"], description=master["description"],
        body_md=master["body"], slug=it_slug, translation_key=tkey, pub_date=pub_date,
        category_key=master.get("category_key") or "guide",
    )
    errors += [f"it: {e}" for e in validate_article(
        content, locale=DEFAULT_LOCALE, translation_key=tkey, pub_date=pub_date, expected_slug=it_slug)]
    results.append((DEFAULT_LOCALE, rel, content, it_slug))

    for loc in other:
        t = trans.get(loc)
        if not t or not all(t.get(k) for k in REQ_KEYS):
            errors.append(f"{loc}: traduzione mancante/incompleta")
            continue
        slug = finalize_slug(t.get("slug", "") or t.get("title", ""), en_slug, loc)
        rel, content = assemble_article(
            locale=loc, title=t["title"], description=t["description"], body_md=t["body"],
            slug=slug, translation_key=tkey, pub_date=pub_date,
            category_key=master.get("category_key") or "guide",
        )
        errors += [f"{loc}: {e}" for e in validate_article(
            content, locale=loc, translation_key=tkey, pub_date=pub_date, expected_slug=slug)]
        results.append((loc, rel, content, slug))

    if len(results) != len(config.TARGET_LOCALES):
        errors.append(f"lingue prodotte {len(results)}/{len(config.TARGET_LOCALES)}")
    return tkey, pub_date, results, errors


def _eligible(event: dict, state: dict) -> tuple[bool, str]:
    tkey = translation_key_for(event)
    if state_mod.is_published(state, tkey):
        return False, "già pubblicato"
    sd = event.get("start_date")
    if not sd:
        return False, "senza start_date"
    try:
        start = datetime.fromisoformat(sd).date()
    except ValueError:
        return False, f"start_date non valida: {sd}"
    lead = (start - date.today()).days
    if lead < config.EVENT_MIN_LEAD_DAYS:
        return False, f"troppo vicino/passato (lead {lead}g)"
    if lead > config.EVENT_LOOKAHEAD_DAYS:
        return False, f"troppo lontano (lead {lead}g)"
    return True, "ok"


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Writer roma284 — eventi -> articoli .md")
    ap.add_argument("--event-file", required=True, help="JSON: lista eventi (o singolo evento)")
    ap.add_argument("--engine", default=config.LLM_ENGINE, choices=["claude_code", "api", "mock"])
    ap.add_argument("--model", default=config.LLM_MODEL)
    ap.add_argument("--dry-run", action="store_true", help="non scrive nel blog né aggiorna lo stato")
    ap.add_argument("--out", default="pipeline/_out", help="cartella output in dry-run")
    ap.add_argument("--max", type=int, default=config.MAX_ARTICLES_PER_RUN)
    ap.add_argument("--no-filter", action="store_true", help="ignora filtro date/dedup (debug)")
    args = ap.parse_args(argv)

    events = json.loads(Path(args.event_file).read_text(encoding="utf-8"))
    if isinstance(events, dict):
        events = [events]

    state = state_mod.load_state(config.STATE_FILE)
    backend = get_backend(args.engine, args.model)

    # Selezione
    selected = []
    for ev in events:
        if args.no_filter:
            selected.append(ev)
            continue
        ok, why = _eligible(ev, state)
        if ok:
            selected.append(ev)
        else:
            print(f"  skip «{ev.get('title','?')}»: {why}")
        if len(selected) >= args.max:
            break
    selected = selected[: args.max]

    base = Path(args.out) if args.dry_run else config.BLOG_DIR
    print(f"\nEngine={args.engine} model={args.model} | candidati={len(selected)} | "
          f"output={'(dry-run) ' if args.dry_run else ''}{base}\n")

    written, skipped = 0, 0
    for ev in selected:
        title = ev.get("title", "?")
        try:
            tkey, pub_date, results, errors = build_article_set(backend, ev)
        except Exception as e:  # noqa: BLE001
            print(f"✗ «{title}»: errore generazione: {e}")
            skipped += 1
            continue
        if errors:
            print(f"✗ «{title}» [{tkey}] NON scritto — {len(errors)} problemi:")
            for e in errors[:12]:
                print(f"    - {e}")
            skipped += 1
            continue
        for _loc, rel, content, _slug in results:
            dest = base / rel
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_text(content, encoding="utf-8")
        if not args.dry_run:
            state_mod.mark_published(state, tkey, ev.get("id", ""),
                                     {"title": title, "pubDate": pub_date})
        written += 1
        print(f"✓ «{title}» [{tkey}] — {len(results)} lingue, slug IT '{results[0][3]}'")

    if not args.dry_run and written:
        state_mod.save_state(config.STATE_FILE, state)

    print(f"\nFatto. Articoli scritti: {written} | saltati: {skipped}")
    return 0 if skipped == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
