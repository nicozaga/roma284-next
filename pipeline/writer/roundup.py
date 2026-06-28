"""Roundup settimanale "Il prossimo weekend a Piacenza" — solo IT, URL evergreen.

Una sola pagina `/blog/weekend-a-piacenza/` che si riscrive ogni settimana con le
segnalazioni del periodo. translationKey e slug fissi → stesso file sovrascritto.
"""
from __future__ import annotations

from pipeline.common.frontmatter import assemble_article, validate_article
from pipeline.llm.client import parse_json
from pipeline.writer.prompts import build_roundup_prompt

ROUNDUP_TKEY = "weekend-a-piacenza"
ROUNDUP_SLUG = "weekend-a-piacenza"

_TYPE_LABEL = {
    "concert": "Concerti e musica", "fair": "Fiere", "event": "Cultura ed eventi",
}


def _mock_roundup(events: list[dict], week_label: str) -> dict:
    by: dict[str, list] = {}
    for e in events:
        by.setdefault(e.get("type", "event"), []).append(e)
    lines = [f"Gli appuntamenti da non perdere a Piacenza e dintorni per {week_label}.\n"]
    for t, evs in by.items():
        lines.append(f"\n## {_TYPE_LABEL.get(t, 'Eventi')}\n")
        for e in evs:
            lines.append(f"- **{e.get('title','')}** — {e.get('start_date','')}, {e.get('city','')}.")
    lines.append(
        "\n\n## Una base comoda\n\nRoma284 è nel centro storico, a 9 minuti dalla stazione: "
        "perfetto per girare gli eventi senza pensieri. [Verifica la disponibilità]({{BOOK_URL}})."
    )
    return {
        "title": "Il prossimo weekend a Piacenza",
        "description": ("Cosa fare a Piacenza e dintorni nei prossimi giorni: concerti, "
                        "cultura, fiere e sagre. La guida aggiornata di Roma284."),
        "category_key": "eventi",
        "body": "\n".join(lines),
    }


def generate_roundup(backend, events: list[dict], week_label: str) -> dict:
    if backend.is_mock:
        return _mock_roundup(events, week_label)
    return parse_json(backend.complete(*build_roundup_prompt(events, week_label)))


def build_roundup(backend, events: list[dict], week_label: str, pub_date: str):
    """Ritorna (relpath, content, errors)."""
    data = generate_roundup(backend, events, week_label)
    for k in ("title", "description", "body"):
        data.setdefault(k, "")
    rel, content = assemble_article(
        locale="it", title=data["title"], description=data["description"],
        body_md=data["body"], slug=ROUNDUP_SLUG, translation_key=ROUNDUP_TKEY,
        pub_date=pub_date, category_key=data.get("category_key") or "eventi",
    )
    errs = validate_article(content, locale="it", translation_key=ROUNDUP_TKEY,
                           pub_date=pub_date, expected_slug=ROUNDUP_SLUG)
    return rel, content, errs
