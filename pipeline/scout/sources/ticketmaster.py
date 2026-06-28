"""Fonte Ticketmaster Discovery API — concerti/spettacoli a Milano e zona Piacenza.

Gratuita (key da developer.ticketmaster.com). Richiede env TICKETMASTER_API_KEY.
Se la key manca, la fonte si disattiva senza errori.
"""
from __future__ import annotations
import os
from datetime import date, datetime, timedelta

from pipeline.common.events import make_event

API = "https://app.ticketmaster.com/discovery/v2/events.json"

# Centri di ricerca (lat, lon, raggio km)
GEO = [
    {"name": "Milano", "latlong": "45.4642,9.1900", "radius": 35},
    {"name": "Piacenza", "latlong": "45.0526,9.6930", "radius": 45},
]

# segment Ticketmaster -> tipo evento nostro
_SEGMENT_TYPE = {"Music": "concert", "Arts & Theatre": "event"}


def _map_event(e: dict) -> dict | None:
    name = e.get("name")
    dates = (e.get("dates") or {}).get("start") or {}
    start = dates.get("localDate")
    if not (name and start):
        return None
    end = ((e.get("dates") or {}).get("end") or {}).get("localDate") or start
    seg = ""
    cls = e.get("classifications") or []
    if cls:
        seg = ((cls[0].get("segment") or {}).get("name")) or ""
    etype = _SEGMENT_TYPE.get(seg)
    if etype is None:
        return None  # salta Sport/Film/Misc
    venue, city = "", ""
    emb = (e.get("_embedded") or {}).get("venues") or []
    if emb:
        venue = emb[0].get("name", "") or ""
        city = ((emb[0].get("city") or {}).get("name")) or ""
    return make_event(
        id="tm-" + str(e.get("id", "")), title=name, type=etype, venue=venue, city=city,
        start_date=start, end_date=end, url=e.get("url", ""),
        description=(e.get("info") or "")[:300], source="ticketmaster",
    )


def parse_response(payload: dict) -> list[dict]:
    """Estrae eventi da una risposta Discovery (testabile offline)."""
    events = ((payload or {}).get("_embedded") or {}).get("events") or []
    out = []
    for e in events:
        ev = _map_event(e)
        if ev:
            out.append(ev)
    return out


def collect(lookahead_days: int = 120, max_pages: int = 2) -> list[dict]:
    key = os.environ.get("TICKETMASTER_API_KEY")
    if not key:
        print("[ticketmaster] TICKETMASTER_API_KEY assente: fonte disattivata")
        return []
    import requests  # import lazy
    start = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
    end = (datetime.utcnow() + timedelta(days=lookahead_days)).strftime("%Y-%m-%dT%H:%M:%SZ")
    out, seen = [], set()
    for g in GEO:
        for page in range(max_pages):
            params = {
                "apikey": key, "countryCode": "IT", "latlong": g["latlong"],
                "radius": g["radius"], "unit": "km", "locale": "*",
                "startDateTime": start, "endDateTime": end,
                "size": 100, "page": page, "sort": "date,asc",
            }
            try:
                r = requests.get(API, params=params, timeout=30)
            except Exception as e:  # noqa: BLE001
                print(f"[ticketmaster] {g['name']} errore: {e}")
                break
            if r.status_code != 200:
                print(f"[ticketmaster] {g['name']} HTTP {r.status_code}")
                break
            evs = parse_response(r.json())
            new = [e for e in evs if e["id"] not in seen]
            for e in new:
                seen.add(e["id"])
            out.extend(new)
            if len(evs) < 100:
                break
    return out
