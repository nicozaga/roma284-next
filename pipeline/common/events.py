"""Modello evento normalizzato + utility (date IT, dedup, rilevanza).

Contratto Event (dict) — è anche l'input del Writer:
  id, title, type(fair|concert|event), venue, city, start_date(YYYY-MM-DD),
  end_date, url, description, source
"""
from __future__ import annotations
import hashlib
import re
from datetime import date, datetime

IT_MONTHS = {
    "gennaio": 1, "febbraio": 2, "marzo": 3, "aprile": 4, "maggio": 5, "giugno": 6,
    "luglio": 7, "agosto": 8, "settembre": 9, "ottobre": 10, "novembre": 11, "dicembre": 12,
}

# Punteggio rilevanza per città/tipo (target roma284: Milano + Piacenza in testa)
_CITY_SCORE = {"milano": 3, "piacenza": 3, "parma": 2}
_TYPE_SCORE = {"fair": 3, "concert": 2, "event": 1}


def parse_it_date(s: str) -> str | None:
    """'23 gennaio 2026' -> '2026-01-23'."""
    if not s:
        return None
    m = re.match(r"\s*(\d{1,2})\s+([A-Za-zÀ-ÿ]+)\s+(\d{4})", s.strip())
    if not m:
        return None
    day, mon, year = int(m.group(1)), IT_MONTHS.get(m.group(2).lower()), int(m.group(3))
    if not mon:
        return None
    try:
        return date(year, mon, day).isoformat()
    except ValueError:
        return None


def _hash(*parts) -> str:
    return hashlib.md5("|".join(str(p) for p in parts).encode("utf-8")).hexdigest()[:12]


def make_event(*, id: str | None = None, title: str, type: str = "event", venue: str = "",
               city: str = "", start_date: str, end_date: str | None = None, url: str = "",
               description: str = "", source: str = "") -> dict:
    title = (title or "").strip()
    eid = id or _hash(title, start_date, city)
    return {
        "id": eid, "title": title, "type": type, "venue": venue, "city": city,
        "start_date": start_date, "end_date": end_date or start_date,
        "url": url, "description": description, "source": source,
    }


def relevance_score(ev: dict) -> int:
    return _CITY_SCORE.get((ev.get("city") or "").lower(), 1) + _TYPE_SCORE.get(ev.get("type"), 1)


def dedup(events: list[dict]) -> list[dict]:
    seen, out = set(), []
    for ev in events:
        if ev["id"] in seen:
            continue
        seen.add(ev["id"])
        out.append(ev)
    return out


def future_only(events: list[dict], today: date | None = None) -> list[dict]:
    today = today or date.today()
    out = []
    for ev in events:
        try:
            end = datetime.fromisoformat(ev["end_date"]).date()
        except (ValueError, KeyError, TypeError):
            continue
        if end >= today:
            out.append(ev)
    return out


def sort_for_selection(events: list[dict]) -> list[dict]:
    """Più rilevanti prima; a parità, quelli che iniziano prima."""
    return sorted(events, key=lambda e: (-relevance_score(e), e.get("start_date", "9999")))
