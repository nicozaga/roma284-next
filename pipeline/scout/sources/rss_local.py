"""Fonte RSS locale (Piacenza) — scaffold, disattivato di default.

Le RSS di cronaca (ilpiacenza, collipiacentini) NON sono strutturate come eventi:
spesso manca una data evento affidabile. Per non iniettare rumore, questa fonte
è OFF finché non si confermano i feed e si valida l'estrazione data.

Per attivarla: popola FEEDS con {"url","city","type"} verificati.
Emette un evento SOLO se trova una data futura plausibile nel titolo/descrizione.
"""
from __future__ import annotations
import re
from xml.etree import ElementTree as ET

from pipeline.common.events import make_event, parse_it_date

# Vuoto = fonte disattivata. Esempi (da verificare prima di abilitare):
#   {"url": "https://www.ilpiacenza.it/eventi/rss/", "city": "Piacenza", "type": "event"},
#   {"url": "https://collipiacentini.it/eventi/feed/", "city": "Piacenza", "type": "event"},
FEEDS: list[dict] = []

_DATE_IT = re.compile(r"\b(\d{1,2}\s+(?:gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|"
                      r"agosto|settembre|ottobre|novembre|dicembre)\s+\d{4})\b", re.I)


def _strip(t: str) -> str:
    return re.sub(r"<[^>]+>", " ", t or "")


def parse_feed(xml_text: str, city: str, etype: str) -> list[dict]:
    out = []
    try:
        root = ET.fromstring(xml_text)
    except ET.ParseError:
        return out
    for item in root.iter("item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        desc = _strip(item.findtext("description") or "")
        m = _DATE_IT.search(f"{title} {desc}")
        if not (title and m):
            continue  # niente data evento affidabile -> salta
        d = parse_it_date(m.group(1))
        if not d:
            continue
        out.append(make_event(title=title, type=etype, city=city,
                              start_date=d, url=link, description=desc[:300], source="rss"))
    return out


def collect() -> list[dict]:
    if not FEEDS:
        return []
    import requests  # import lazy
    out = []
    for f in FEEDS:
        try:
            r = requests.get(f["url"], timeout=30, headers={"User-Agent": "roma284-scout/1.0"})
            if r.status_code == 200:
                out += parse_feed(r.text, f.get("city", ""), f.get("type", "event"))
        except Exception as e:  # noqa: BLE001
            print(f"[rss] {f.get('url')}: errore ({e})")
    return out
