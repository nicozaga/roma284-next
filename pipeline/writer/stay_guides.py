"""Guide evergreen "Dove dormire per X" — intento ALLOGGIO, non evento.

Stesso pattern del roundup: URL fisso per topic, contenuto riscritto ogni tanto.
A differenza degli articoli-evento, qui gli slug NON li propone il modello ma sono
PINNATI in `pipeline/data/stay_guide_topics.json`. Motivo: queste guide si
rigenerano con lo stesso translationKey, e uno slug diverso al refresh creerebbe
un file nuovo senza cancellare il vecchio (il lifecycle non le copre), lasciando
duplicati orfani in silenzio.

Ogni topic dichiara le lingue che gli servono davvero e la pagina commerciale a
cui rimandare: la guida cede link equity alla money page invece di competerci.
"""
from __future__ import annotations

import json
from datetime import date
from pathlib import Path

from pipeline.common.frontmatter import assemble_article, validate_article
from pipeline.common.i18n import DEFAULT_LOCALE, LOCALES, slugify
from pipeline.llm.client import parse_json
from pipeline.writer.prompts import (
    build_stay_guide_master_prompt,
    build_stay_guide_translation_prompt,
)

TOPICS_FILE = Path(__file__).resolve().parents[1] / "data" / "stay_guide_topics.json"
TKEY_PREFIX = "stay-guide-"
REQ_KEYS = ("title", "description", "body")


def load_topics(path: Path | None = None) -> list[dict]:
    return json.loads((path or TOPICS_FILE).read_text(encoding="utf-8"))


def topic_locales(topic: dict) -> list[str]:
    """Lingue del topic, con IT sempre in testa. 'ALL' = tutte."""
    tl = topic.get("target_locales") or [DEFAULT_LOCALE]
    if tl == "ALL":
        tl = LOCALES
    return list(dict.fromkeys([DEFAULT_LOCALE, *tl]))


def translation_key_for_topic(topic: dict) -> str:
    return f"{TKEY_PREFIX}{slugify(topic['key'])}"


def slug_for(topic: dict, locale: str) -> str:
    """Slug pinnato nel file dati; fallback sull'IT, poi sulla chiave del topic."""
    slugs = topic.get("slugs") or {}
    raw = slugs.get(locale) or slugs.get(DEFAULT_LOCALE) or topic["key"]
    return slugify(raw)


def _gen_master(backend, topic: dict) -> dict:
    if backend.is_mock:
        return backend.mock_stay_guide_master(topic)
    return parse_json(backend.complete(*build_stay_guide_master_prompt(topic)))


def _gen_translations(backend, topic: dict, master: dict, locales: list[str]) -> dict:
    if not locales:
        return {}
    if backend.is_mock:
        return backend.mock_stay_guide_translations(topic, master, locales)
    data = parse_json(backend.complete(
        *build_stay_guide_translation_prompt(topic, master, locales)))
    return data if isinstance(data, dict) else {}


def build_stay_guide_set(backend, topic: dict, pub_date: str | None = None):
    """Ritorna (tkey, pub_date, results[(locale, relpath, content, slug)], errors).

    Come per gli articoli-evento, o escono tutte le lingue del topic o nessuna:
    il chiamante scrive solo se `errors` è vuota.
    """
    tkey = translation_key_for_topic(topic)
    pub_date = pub_date or date.today().isoformat()
    target = topic_locales(topic)
    category_key = topic.get("category_key") or "guide"
    errors: list[str] = []

    master = _gen_master(backend, topic)
    for k in REQ_KEYS:
        master.setdefault(k, "")
    if not all(master.get(k) for k in REQ_KEYS):
        return tkey, pub_date, [], ["master incompleto (title/description/body)"]

    other = [loc for loc in target if loc != DEFAULT_LOCALE]
    trans = _gen_translations(backend, topic, master, other)

    results = []
    for loc in target:
        data = master if loc == DEFAULT_LOCALE else (trans.get(loc) or {})
        if not all(data.get(k) for k in REQ_KEYS):
            errors.append(f"{loc}: traduzione mancante/incompleta")
            continue
        slug = slug_for(topic, loc)
        rel, content = assemble_article(
            locale=loc, title=data["title"], description=data["description"],
            body_md=data["body"], slug=slug, translation_key=tkey,
            pub_date=pub_date, category_key=category_key,
        )
        errors += [f"{loc}: {e}" for e in validate_article(
            content, locale=loc, translation_key=tkey, pub_date=pub_date,
            expected_slug=slug)]
        results.append((loc, rel, content, slug))

    if len(results) != len(target):
        errors.append(f"lingue prodotte {len(results)}/{len(target)}")
    return tkey, pub_date, results, errors
