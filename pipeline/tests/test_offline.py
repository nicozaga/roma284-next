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
import json
from pipeline.common.events import classify_tier, make_event
from pipeline.common.state import next_focus
from pipeline.writer.roundup import build_roundup
from pipeline import publish

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


def test_tiering():
    check("tier San Siro = international",
          classify_tier("Concerto", "Stadio San Siro", "Milano", "concert") == "international")
    check("tier fiera Milano = international",
          classify_tier("Salone del Mobile", "Fiera Milano", "Milano", "fair") == "international")
    check("tier sagra Piacenza = local",
          classify_tier("Sagra del tortello", "", "Piacenza", "event") == "local")
    check("tier fiera Piacenza = local",
          classify_tier("GEOFLUID", "Piacenza Expo", "Piacenza", "fair") == "local")


def test_focus_rotation():
    st = {}
    got = [next_focus(st, ["a", "b", "c"]) for _ in range(4)]
    check("focus round-robin con wrap", got == ["a", "b", "c", "a"])
    check("focus salva l'indice nello stato", st.get("focus_index") == 1)


def test_roundup_mock():
    evs = [
        {"title": "Sagra del tortello", "type": "event", "city": "Piacenza",
         "start_date": "2026-07-10", "end_date": "2026-07-10"},
        {"title": "Concerto in piazza", "type": "concert", "city": "Piacenza",
         "start_date": "2026-07-11", "end_date": "2026-07-11"},
    ]
    rel, content, errors = build_roundup(get_backend("mock"), evs, "i prossimi giorni", TODAY)
    fm = content.split("---")[1]
    check("roundup file evergreen", rel == "weekend-a-piacenza.md")
    check("roundup zero errori", errors == [])
    check("roundup CTA /prenota/", "/prenota/" in content)
    check("roundup IT senza slug", "slug:" not in fm)


def test_local_only_languages():
    ev = {"id": "loc1", "title": "Evento locale", "type": "event", "city": "Piacenza",
          "start_date": "2026-10-03", "end_date": "2026-10-03"}
    _t, _p, results, errors = build_article_set(get_backend("mock"), ev, target_locales=["it"])
    check("local = solo IT", len(results) == 1 and results[0][0] == "it")
    check("local zero errori", errors == [])


def test_orchestrator_mock():
    out = ROOT / "pipeline" / "_out" / "orch"
    evfile = ROOT / "pipeline" / "_out" / "orch_events.json"
    evfile.parent.mkdir(parents=True, exist_ok=True)
    t = datetime.date.today()
    days = datetime.timedelta
    big = make_event(title="Concertone internazionale", type="concert", venue="Stadio San Siro",
                     city="Milano", start_date=(t + days(30)).isoformat())
    near = make_event(title="Sagra del tortello", type="event", city="Piacenza",
                      start_date=(t + days(5)).isoformat())
    evfile.write_text(json.dumps([big, near], ensure_ascii=False), encoding="utf-8")
    check("orchestratore: big classificato international", big["tier"] == "international")
    rc = publish.run_weekly(str(evfile), engine="mock", model="sonnet",
                            dry_run=True, out=str(out), cap_big=3)
    check("orchestratore rc=0", rc == 0)
    check("orchestratore: roundup scritto", (out / "weekend-a-piacenza.md").exists())
    check("orchestratore: grande evento in 11 lingue", len(list(out.rglob("*.md"))) >= 12)


def test_web_llm_extract():
    from pipeline.scout.sources import web_llm
    site = {"name": "test", "url": "https://x", "city": "Piacenza", "type": "event"}

    class _FB:  # backend finto: ritorna un array JSON di eventi
        is_mock = False
        def complete(self, system, user):
            return ('[{"title":"Mostra Klimt","type":"event","venue":"XNL",'
                    '"start_date":"2026-07-10","end_date":"2026-07-20","description":"d"}]')

    class _FBnone:
        is_mock = False
        def complete(self, system, user):
            return "nessun evento in pagina"

    evs = web_llm.extract(_FB(), "testo pagina", site)
    check("web_llm estrae 1 evento", len(evs) == 1)
    check("web_llm city default dal sito", evs[0]["city"] == "Piacenza")
    check("web_llm source = nome sito", evs[0]["source"] == "test")
    check("web_llm senza JSON -> []", web_llm.extract(_FBnone(), "x", site) == [])


def test_parse_json_robust():
    from pipeline.llm.client import parse_json
    obj = parse_json('{"title":"x","body":"y"}\n\nEcco fatto!')  # caso reale "Extra data"
    check("parse_json ignora testo extra dopo il JSON", obj.get("title") == "x")
    obj2 = parse_json('```json\n{"a":1}\n```')
    check("parse_json toglie i code-fence", obj2.get("a") == 1)


def test_translations_batched():
    from pipeline.writer.run import _gen_translations

    class _FBtrans:  # ritorna 4 lingue in un'unica risposta
        is_mock = False
        calls = 0
        def complete(self, system, user):
            self.calls += 1
            obj = {loc: {"title": "t", "description": "d", "slug": "s", "body": "b"}
                   for loc in ("en", "fr", "de", "es")}
            return json.dumps(obj)

    fb = _FBtrans()
    out = _gen_translations(fb, {}, {}, ["en", "fr", "de", "es"])
    check("batch: 4 lingue in 1 sola chiamata", len(out) == 4 and fb.calls == 1)


def main():
    for fn in (test_dates, test_aefi, test_ticketmaster, test_seed,
               test_scout_aggregate, test_writer_mock, test_publisher_urls,
               test_tiering, test_focus_rotation, test_roundup_mock,
               test_local_only_languages, test_orchestrator_mock, test_web_llm_extract,
               test_parse_json_robust, test_translations_batched):
        print(f"\n[{fn.__name__}]")
        fn()
    print(f"\n=== {_passed} check superati — TUTTO VERDE ✅ ===")


if __name__ == "__main__":
    main()
