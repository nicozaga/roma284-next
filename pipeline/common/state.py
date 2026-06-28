"""Stato di dedup: quali eventi/articoli sono già stati pubblicati.

File JSON committato nel repo (niente DB). Chiave = translationKey.
"""
from __future__ import annotations
import json
from pathlib import Path
from datetime import date


def load_state(path: Path) -> dict:
    if not path.exists():
        return {"published": {}}
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return {"published": {}}


def is_published(state: dict, translation_key: str) -> bool:
    return translation_key in state.get("published", {})


def mark_published(state: dict, translation_key: str, event_id: str, meta: dict | None = None) -> None:
    state.setdefault("published", {})[translation_key] = {
        "event_id": event_id,
        "date": date.today().isoformat(),
        **(meta or {}),
    }


def next_focus(state: dict, options: list[str]) -> str:
    """Round-robin: ritorna la prossima caratteristica da mettere in primo piano e
    avanza l'indice nello stato (così su N articoli le copri tutte a turno)."""
    if not options:
        return ""
    i = int(state.get("focus_index", 0)) % len(options)
    state["focus_index"] = (i + 1) % len(options)
    return options[i]


def save_state(path: Path, state: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
