"""Test offline della pipeline (no rete, no LLM, no auth).

Esegui:  python -m pipeline.tests.test_offline
Copre: date IT, parser AEFI (testo+HTML), Ticketmaster, seed, aggregatore Scout,
e il Writer end-to-end col backend mock (11 lingue, validazione).
"""
from __future__ import annotations
import datetime
from pathlib import Path

from pipeline.common.events import (
    parse_it_date, future_only, dedup, sort_for_selection, relevance_score,
)
from pipeline.scout.sources import aefi, ticketmaster, seed
from pipeline.scout import run as scout
from pipeline.llm.client import get_backend
from pipeline.writer.run import build_article_set
from pipeline.common.urls import blog_file_to_url

ROOT = Path(__file__).resolve().parents[2]
FIXTURE = ROOT / "pipeline" / "tests" / "fixtures" / "aefi_piacenza_2026.txt"
TODAY = datetime.date.today().isoformat()

_passed = 0


def check(name, cond):
    global _passed
    print(("  ✓ " if cond else "  ✗ ") + name)
    assert cond, f"FALLITO: {name}"
    _passed += 1


def test_dates():
    check("parse_it_date base", parse_it_date("23 gennaio 2026") == "2026-01-23")
    check("parse_it_date 2 cifre", parse_it_date("04 febbraio 2026") == "2026-02-04")
    check("parse_it_date invalida", parse_it_date("32 pippo 2026") is None)


def test_aefi():
    txt = FIXTURE.read_text(encoding="utf-8")
    evs = aefi.parse_text(txt, "Piacenza Expo", "Piacenza")
    check("aefi parse_text conta", len(evs) == 7)
    check("aefi date ISO", all(e["start_date"] and e["end_date"] for e in evs))
    check("aefi id da slug", any(e["id"] == "apimell-2026" for e in evs))
    html = ('<a href="https://www.aefi.it/it/manifestazione/cibus-tec-2026">'
            '<strong>CIBUS TEC</strong> dal 27 ottobre 2026 al 30 ottobre 2026 '
            'FIERE DI PARMA S.P.A. Parma (PR)</a>')
    h = aefi.parse_html(html, "Fiere di Parma", "Parma")
    check("aefi parse_html", len(h) == 1 and h[0]["title"] == "CIBUS TEC" and h[0]["end_date"] == "2026-10-30")


def test_ticketmaster():
    sample = {"_embedded": {"events": [
        {"id": "a1", "name": "Concerto autunno", "url": "https://tm/x",
         "dates": {"start": {"localDate": "2026-09-20"}},
         "classifications": [{"segment": {"name": "Music"}}],
         "_embedded": {"venues": [{"name": "Forum", "city": {"name": "Milano"}}]}},
        {"id": "sport", "name": "Partita", "dates": {"start": {"localDate": "2026-09-25"}},
         "classifications": [{"segment": {"name": "Sports"}}]},
    ]}}
    evs = ticketmaster.parse_response(sample)
    check("tm salta Sports", len(evs) == 1)
    check("tm mappa concerto", evs[0]["type"] == "concert" and evs[0]["city"] == "Milano")
    check("tm collect senza key", ticketmaster.collect() == [])


def test_seed():
    rows = [
        {"id": "eicma-2026", "title": "EICMA", "type": "fair", "venue": "Fiera Milano",
         "city": "Milano", "start_date": "2026-11-05", "end_date": "2026-11-08"},
        {"_disabled": True, "title": "Bozza", "start_date": "2026-12-01"},
    ]
    check("seed ignora _disabled", len(seed.parse(rows)) == 1)
    check("seed file reale vuoto", seed.collect() == [])


def test_scout_aggregate():
    txt = FIXTURE.read_text(encoding="utf-8")
    tm = {"_embedded": {"events": [
        {"id": "c1", "name": "Concerto futuro", "dates": {"start": {"localDate": "2026-09-20"}},
         "classifications": [{"segment": {"name": "Music"}}],
         "_embedded": {"venues": [{"name": "Forum", "city": {"name": "Milano"}}]}},
        {"id": "c0", "name": "Concerto passato", "dates": {"start": {"localDate": "2026-01-10"}},
         "classifications": [{"segment": {"name": "Music"}}],
         "_embedded": {"venues": [{"name": "X", "city": {"name": "Milano"}}]}},
    ]}}
    rows = [{"id": "eicma-2026", "title": "EICMA", "type": "fair", "city": "Milano",
             "venue": "Fiera Milano", "start_date": "2026-11-05", "end_date": "2026-11-08"}]
    collectors = [
        ("aefi", lambda: aefi.parse_text(txt, "Piacenza Expo", "Piacenza")),
        ("ticketmaster", lambda: ticketmaster.parse_response(tm)),
        ("seed", lambda: seed.parse(rows)),
        ("rss_local", lambda: []),
    ]
    events = scout.run(str(ROOT / "pipeline" / "_out" / "events.json"), 2026, 0, collectors=collectors)
    check("scout: solo futuri", all(e["end_date"] >= TODAY for e in events))
    check("scout: niente passato (concerto gennaio escluso)", all(e["id"] != "c0" for e in events))
    check("scout: include EICMA + concerto futuro", {"eicma-2026", "tm-c1"} <= {e["id"] for e in events})
    check("scout: ordinato per rilevanza", events == sort_for_selection(events))


def test_writer_mock():
    event = {"id": "evento-test-2026", "title": "Evento Test", "type": "fair",
             "venue": "Fiere di Parma", "city": "Parma",
             "start_date": "2026-10-03", "end_date": "2026-10-11"}
    backend = get_backend("mock")
    tkey, pub_date, results, errors = build_article_set(backend, event)
    check("writer: 11 lingue", len(results) == 11)
    check("writer: zero errori validazione", errors == [])
    locs = {loc for loc, _, _, _ in results}
    check("writer: tutte le lingue", locs == {"it", "en", "fr", "es", "pt", "de", "nl", "sv", "pl", "ja", "zh-cn"})
    it = next(c for loc, _, c, _ in results if loc == "it")
    check("writer: IT ha CTA /prenota/", "/prenota/" in it)
    check("writer: pubDate = oggi", pub_date == TODAY)


def test_publisher_urls():
    check("url IT (radice)",
          blog_file_to_url("src/content/blog/cosa-mangiare-piacenza.md")
          == "https://www.roma284.it/blog/cosa-mangiare-piacenza/")
    check("url EN (cartella lingua)",
          blog_file_to_url("src/content/blog/en/frecciarossa-piacenza-milan.md")
          == "https://www.roma284.it/en/blog/frecciarossa-piacenza-milan/")
    check("url JA",
          blog_file_to_url("src/content/blog/ja/milan-higaeri.md")
          == "https://www.roma284.it/ja/blog/milan-higaeri/")


def main():
    for fn in (test_dates, test_aefi, test_ticketmaster, test_seed,
               test_scout_aggregate, test_writer_mock, test_publisher_urls):
        print(f"\n[{fn.__name__}]")
        fn()
    print(f"\n=== {_passed} check superati — TUTTO VERDE ✅ ===")


if __name__ == "__main__":
    main()
