"""Fonte AEFI — fiere dei quartieri associati (Piacenza Expo, Fiere di Parma).

NB: Fiera Milano (Rho) NON è quartiere AEFI → le fiere-faro di Milano arrivano dal
file seed (vedi sources/seed.py), non da qui.

Robustezza: il parser lavora su testo (tag rimossi), quindi è poco sensibile ai
cambi di markup. `parse_html` è la via di produzione; `parse_text` serve ai test
su fixture e accetta il testo "pulito" (link markdown).
"""
from __future__ import annotations
import re

from pipeline.common.events import parse_it_date, make_event

CENTERS = {
    "piacenza-expo": {"uuid": "88c4983b-f829-419c-9196-7fda4b0e6557", "venue": "Piacenza Expo", "city": "Piacenza"},
    "fiere-parma": {"uuid": "17d16d27-5ffa-4cd3-b731-0082b52f32f3", "venue": "Fiere di Parma", "city": "Parma"},
}

# "TITOLO dal GG mese AAAA al GG mese AAAA ..."
_INNER = re.compile(
    r"(?P<title>.+?)\s+dal\s+(?P<d1>\d{1,2}\s+[A-Za-zÀ-ÿ]+\s+\d{4})"
    r"\s+al\s+(?P<d2>\d{1,2}\s+[A-Za-zÀ-ÿ]+\s+\d{4})"
)
_LINK = re.compile(r"\[(?P<text>.+?)\]\((?P<url>https?://[^)]*manifestazione/[^)]+)\)")
_ANCHOR = re.compile(
    r'<a[^>]+href="(?P<url>[^"]*manifestazione/[^"]+)"[^>]*>(?P<inner>.*?)</a>', re.S | re.I)
_TAGS = re.compile(r"<[^>]+>")


def _slug(url: str) -> str:
    return url.rstrip("/").split("/")[-1]


def _parse_blob(text: str, url: str, venue: str, city: str) -> dict | None:
    text = re.sub(r"\s+", " ", text.replace("**", "")).strip()
    m = _INNER.search(text)
    if not m:
        return None
    title = m.group("title").strip(" -–—|·")
    d1, d2 = parse_it_date(m.group("d1")), parse_it_date(m.group("d2"))
    if not (title and d1 and d2):
        return None
    return make_event(id=_slug(url), title=title, type="fair", venue=venue, city=city,
                      start_date=d1, end_date=d2, url=url, source="aefi")


def parse_text(text: str, venue: str, city: str) -> list[dict]:
    out = []
    for m in _LINK.finditer(text):
        ev = _parse_blob(m.group("text"), m.group("url"), venue, city)
        if ev:
            out.append(ev)
    return out


def parse_html(html: str, venue: str, city: str) -> list[dict]:
    out = []
    for m in _ANCHOR.finditer(html):
        inner = _TAGS.sub(" ", m.group("inner"))
        ev = _parse_blob(inner, m.group("url"), venue, city)
        if ev:
            out.append(ev)
    return out


def fetch_center(center_key: str, year: int, max_pages: int = 6) -> list[dict]:
    """PRODUZIONE: scarica e parsa tutte le pagine di un quartiere. Usa requests."""
    import requests  # import lazy: in sandbox non si fanno richieste reali
    c = CENTERS[center_key]
    events, seen = [], set()
    for page in range(1, max_pages + 1):
        url = (f"https://www.aefi.it/it/calendario/?expo_center_uuid={c['uuid']}"
               f"&fair_year={year}&page_nr={page}&page_size=20")
        r = requests.get(url, timeout=30, headers={"User-Agent": "roma284-scout/1.0"})
        if r.status_code != 200:
            break
        page_events = parse_html(r.text, c["venue"], c["city"])
        new = [e for e in page_events if e["id"] not in seen]
        if not new:
            break
        for e in new:
            seen.add(e["id"])
        events.extend(new)
    return events


def collect(year: int, centers: list[str] | None = None) -> list[dict]:
    centers = centers or list(CENTERS)
    out = []
    for ck in centers:
        try:
            out += fetch_center(ck, year)
        except Exception as e:  # noqa: BLE001
            print(f"[aefi] {ck}: errore fetch ({e})")
    return out
