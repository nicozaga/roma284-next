"""Template di prompt per il Writer (master IT + localizzazioni)."""
from __future__ import annotations
import json

from pipeline.common.site_facts import BRAND_FACTS, BRAND_RULES, ARTICLE_STYLE

_LINK_HELP = """\
LINK INTERNI: usa SOLO questi placeholder (il codice li sostituisce col path giusto per lingua):
- {{BOOK_URL}}  (pagina prenotazione — usalo nella CTA finale)
- {{FAIRS_URL}}, {{EVENTS_URL}}, {{GETTING_HERE_URL}}, {{VISIT_PIACENZA_URL}}, {{STAY_NEAR_MILAN_URL}}
Non scrivere mai URL reali a mano. Inserisci 1–2 link interni pertinenti nel corpo, oltre alla CTA.
"""

_MASTER_SYSTEM = f"""\
Sei l'editor SEO di Roma284. Scrivi articoli di blog brevi, pratici e localizzati
che portano traffico organico e prenotazioni dirette.

{BRAND_FACTS}
{BRAND_RULES}
{ARTICLE_STYLE}
{_LINK_HELP}
Rispondi SOLO con JSON valido, senza prosa né code-fence."""

_TRANS_SYSTEM = f"""\
Sei un traduttore-localizzatore SEO madrelingua per Roma284.
Localizzi (NON traduci alla lettera) mantenendo intatte struttura, dati e placeholder.

{BRAND_RULES}
{_LINK_HELP}
Per ogni lingua: titolo e descrizione naturali e ottimizzati per la ricerca locale;
slug ASCII in kebab-case (per giapponese e cinese usa romaji/pinyin o inglese, MAI scrittura nativa).
Mantieni i placeholder {{...}} esattamente come sono.
Rispondi SOLO con JSON valido, senza prosa né code-fence."""


def build_master_prompt(event: dict) -> tuple[str, str]:
    user = f"""\
Scrivi l'articolo MASTER in ITALIANO per questo evento.

EVENTO:
{json.dumps(event, ensure_ascii=False, indent=2)}

Restituisci questo JSON:
{{
  "title": "titolo ≤60 caratteri",
  "description": "meta description 150-160 caratteri",
  "slug": "slug-italiano-ascii-kebab ottimizzato per la ricerca",
  "category_key": "fiere | eventi | itinerari | trasporti | guide",
  "body": "corpo in Markdown: niente H1, sezioni ##, grassetto sui dati, lista '## In sintesi', CTA finale con {{BOOK_URL}}"
}}"""
    return _MASTER_SYSTEM, user


def build_translation_prompt(event: dict, master: dict, locales: list[str]) -> tuple[str, str]:
    user = f"""\
Localizza l'articolo nelle lingue: {", ".join(locales)}.

DATI EVENTO (per contesto fattuale):
{json.dumps(event, ensure_ascii=False, indent=2)}

MASTER ITALIANO:
{json.dumps(master, ensure_ascii=False, indent=2)}

Restituisci un JSON con una chiave per lingua, ognuna:
{{
  "<locale>": {{
    "title": "...",
    "description": "...",
    "slug": "slug-ascii-kebab localizzato",
    "body": "corpo Markdown localizzato, stessa struttura e stessi placeholder del master"
  }}
}}
Includi esattamente queste lingue: {", ".join(locales)}."""
    return _TRANS_SYSTEM, user
