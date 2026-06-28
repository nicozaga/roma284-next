"""Assemblaggio e validazione dei file .md degli articoli.

Divisione netta: l'LLM produce il CONTENUTO (titolo/descrizione/corpo per lingua);
qui il CODICE costruisce frontmatter, slug e path interni in modo deterministico
e valida tutto contro FRONTMATTER_SPEC.md.
"""
from __future__ import annotations
import re
from datetime import date

from pipeline.common.i18n import (
    DEFAULT_LOCALE, LOCALES, localized_path, category_label, slugify,
)

# Placeholder che l'LLM usa nel corpo al posto dei link interni.
# Il codice li sostituisce col path localizzato corretto (niente path sbagliati dal modello).
LINK_PLACEHOLDERS = {
    "{{BOOK_URL}}": "book",
    "{{FAIRS_URL}}": "fairs",
    "{{EVENTS_URL}}": "milan-events",
    "{{GETTING_HERE_URL}}": "getting-here",
    "{{VISIT_PIACENZA_URL}}": "visit-piacenza",
    "{{STAY_NEAR_MILAN_URL}}": "stay-near-milan",
    "{{BLOG_URL}}": "blog",
}


def yaml_quote(s: str) -> str:
    """Stringa YAML tra doppi apici, sicura."""
    s = (s or "").replace("\\", "\\\\").replace('"', '\\"')
    s = s.replace("\n", " ").replace("\r", " ").strip()
    return f'"{s}"'


def finalize_slug(proposed: str, fallback_en: str, locale: str) -> str:
    """Slug ASCII kebab definitivo. Se il proposto svanisce (es. CJK), usa il fallback EN."""
    s = slugify(proposed or "")
    if len(s) < 3:
        s = slugify(fallback_en or "")
    return s


def resolve_links(body: str, locale: str) -> str:
    for token, page_key in LINK_PLACEHOLDERS.items():
        body = body.replace(token, localized_path(page_key, locale))
    return body


def relpath_for(locale: str, slug: str) -> str:
    """Percorso relativo a src/content/blog/."""
    if locale == DEFAULT_LOCALE:
        return f"{slug}.md"
    return f"{locale}/{slug}.md"


def assemble_article(
    *,
    locale: str,
    title: str,
    description: str,
    body_md: str,
    slug: str,
    translation_key: str,
    pub_date: str,
    category_key: str,
) -> tuple[str, str]:
    """Ritorna (relpath, contenuto_md)."""
    lines = ["---"]
    lines.append(f"title: {yaml_quote(title)}")
    lines.append(f"description: {yaml_quote(description)}")
    lines.append(f"pubDate: {pub_date}")
    lines.append(f"category: {yaml_quote(category_label(category_key, locale))}")
    lines.append(f'lang: "{locale}"')
    lines.append(f"translationKey: {yaml_quote(translation_key)}")
    if locale != DEFAULT_LOCALE:
        lines.append(f"slug: {yaml_quote(slug)}")
    lines.append("---")
    fm = "\n".join(lines)

    body = resolve_links(body_md.strip(), locale)
    content = f"{fm}\n\n{body}\n"
    return relpath_for(locale, slug), content


def validate_article(content: str, *, locale: str, translation_key: str,
                     pub_date: str, expected_slug: str) -> list[str]:
    errs: list[str] = []
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", content, re.S)
    if not m:
        return ["frontmatter assente/malformato"]
    fm_raw, body = m.group(1), m.group(2)
    fm = {}
    for line in fm_raw.splitlines():
        k, _, v = line.partition(":")
        v = v.strip()
        if len(v) >= 2 and v[0] == v[-1] == '"':
            v = v[1:-1]
        fm[k.strip()] = v

    for req in ("title", "description", "pubDate", "category", "lang", "translationKey"):
        if not fm.get(req):
            errs.append(f"campo mancante: {req}")
    if fm.get("lang") != locale:
        errs.append(f"lang {fm.get('lang')} != {locale}")
    if locale not in LOCALES:
        errs.append(f"locale non valido: {locale}")
    if fm.get("pubDate") != pub_date:
        errs.append("pubDate non coerente")
    else:
        try:
            date.fromisoformat(fm["pubDate"])
        except ValueError:
            errs.append(f"pubDate non ISO: {fm.get('pubDate')}")
    if fm.get("translationKey") != translation_key:
        errs.append("translationKey non coerente")

    if locale == DEFAULT_LOCALE:
        if "slug" in fm:
            errs.append("IT non deve avere slug")
    else:
        if fm.get("slug") != expected_slug:
            errs.append(f"slug '{fm.get('slug')}' != atteso '{expected_slug}'")
    if not re.fullmatch(r"[a-z0-9-]+", expected_slug or ""):
        errs.append(f"slug non ascii-kebab: {expected_slug}")

    if re.search(r"(?m)^#\s", body):
        errs.append("H1 nel corpo")
    # Solo i BRAND delle piattaforme (non la parola inglese generica "booking"/"book").
    if re.search(r"\bairbnb\b|booking\.(?:com|it)", body, re.I):
        errs.append("nome brand vietato nel corpo (Airbnb/Booking.com)")
    # Solo PREZZI in euro (cifra + valuta) o simbolo €; un semplice "euro" testuale è ammesso.
    if "€" in body or re.search(r"\d[\d.,]*\s?(?:€|eur|euro)\b", body, re.I):
        errs.append("prezzo in euro nel corpo")
    if "{{" in body or "}}" in body:
        errs.append("placeholder link non risolto")
    if not body.strip():
        errs.append("corpo vuoto")
    return errs
