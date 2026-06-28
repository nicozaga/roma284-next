"""Modello evento normalizzato + utility (date IT, tier, dedup, rilevanza).

Contratto Event (dict) — è anche l'input del Writer:
  id, title, type(fair|concert|event), venue, city, start_date(YYYY-MM-DD),
  end_date, url, description, source, tier(international|local)
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

# --- Tiering: international (→ 11 lingue) vs local (→ solo IT) ---
# Sedi a richiamo internazionale (grandi concerti/eventi).
_INTL_VENUES = [
    "san siro", "giuseppe meazza", "mediolanum forum", "unipol forum", "ippodromo snai",
    "ippodromo la maura", "allianz cloud", "fiera milano", "rho fiera", "fieramilano",
    "u-power stadium", "stadio", "arena",
]
# Fiere a richiamo internazionale (nome manifestazione).
_INTL_FAIRS = [
    "eicma", "salone del mobile", "salone internazionale", "micam", "lineapelle",
    "tuttofood", "host", "bit ", "mido", "homi", "mercanteinfiera", "cibus",
    "artigianato in fiera",
]


def classify_tier(title: str = "", venue: str = "", city: str = "", type: str = "event") -> str:
    text = f"{title} {venue} {city}".lower()
    if any(k in text for k in _INTL_VENUES):
        return "international"
    if type == "fair" and ((city or "").lower() == "milano" or any(k in text for k in _INTL_FAIRS)):
        return "international"
    return "local"  # default conservativo: nel dubbio, solo IT


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
               description: str = "", source: str = "", tier: str | None = None) -> dict:
    title = (title or "").strip()
    eid = id or _hash(title, start_date, city)
    return {
        "id": eid, "title": title, "type": type, "venue": venue, "city": city,
        "start_date": start_date, "end_date": end_date or start_date,
        "url": url, "description": description, "source": source,
        "tier": tier or classify_tier(title, venue, city, type),
    }


def relevance_score(ev: dict) -> int:
    s = _CITY_SCORE.get((ev.get("city") or "").lower(), 1) + _TYPE_SCORE.get(ev.get("type"), 1)
    if ev.get("tier") == "international":
        s += 3
    return s


def _norm_title(t: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", (t or "").lower())[:40]


def dedup(events: list[dict]) -> list[dict]:
    """Rimuove duplicati per id E per (titolo normalizzato + data inizio):
    lo stesso evento può arrivare da più fonti con id diversi."""
    seen_ids, seen_fuzzy, out = set(), set(), []
    for ev in events:
        fid = (_norm_title(ev.get("title", "")), ev.get("start_date", ""))
        if ev.get("id") in seen_ids or fid in seen_fuzzy:
            continue
        seen_ids.add(ev.get("id"))
        seen_fuzzy.add(fid)
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
