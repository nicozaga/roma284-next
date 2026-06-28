"""Fonte 'seed' — eventi curati a mano (file JSON nel repo).

Serve a coprire ciò che non si automatizza in modo affidabile, in primis le
**fiere-faro di Fiera Milano (Rho)** (EICMA, Salone del Mobile, ecc.): il loro
sito è in JS e non è quartiere AEFI. L'owner aggiorna il file ~1 volta l'anno.

File: pipeline/data/seed_events.json (lista di eventi).
Voci con "_disabled": true vengono ignorate (utile per bozze/esempi).
"""
from __future__ import annotations
import json
from pathlib import Path

from pipeline.common.events import make_event

SEED_FILE = Path(__file__).resolve().parents[2] / "data" / "seed_events.json"


def _load(path: Path) -> list[dict]:
    if not path.exists():
        return []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception as e:  # noqa: BLE001
        print(f"[seed] JSON non valido in {path}: {e}")
        return []
    return data if isinstance(data, list) else []


def parse(data: list[dict]) -> list[dict]:
    out = []
    for row in data:
        if row.get("_disabled"):
            continue
        if not (row.get("title") and row.get("start_date")):
            continue
        out.append(make_event(
            id=row.get("id"), title=row["title"], type=row.get("type", "fair"),
            venue=row.get("venue", ""), city=row.get("city", ""),
            start_date=row["start_date"], end_date=row.get("end_date"),
            url=row.get("url", ""), description=row.get("description", ""),
            source=row.get("source", "seed"),
        ))
    return out


def collect(path: Path | None = None) -> list[dict]:
    return parse(_load(path or SEED_FILE))
