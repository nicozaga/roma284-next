"""Template di prompt per il Writer (master IT + localizzazioni)."""
from __future__ import annotations
import json

from pipeline.common.site_facts import (
    BRAND_FACTS, BRAND_RULES, ARTICLE_STYLE, ROUNDUP_STYLE, STAY_GUIDE_STYLE,
)

_LINK_HELP = """\
LINK INTERNI: usa SOLO questi placeholder (il codice li sostituisce col path giusto per lingua):
- {{BOOK_URL}}  (pagina prenotazione — usalo nella CTA finale)
- {{FAIRS_URL}}, {{EVENTS_URL}}, {{GETTING_HERE_URL}}, {{VISIT_PIACENZA_URL}}, {{STAY_NEAR_MILAN_URL}}
REGOLA OBBLIGATORIA: ogni placeholder va SEMPRE dentro un link Markdown con ancora testuale.
  Giusto: "consulta la guida su [come arrivare]({{GETTING_HERE_URL}})" — "[prenota il soggiorno]({{BOOK_URL}})"
  Sbagliato: "consulta la guida su {{GETTING_HERE_URL}}" (placeholder nudo nel testo)
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


def build_master_prompt(event: dict, focus_feature: str = "") -> tuple[str, str]:
    focus_line = (
        f"\nIn questo articolo metti in PRIMO PIANO, dove pertinente e senza forzature, "
        f"questa caratteristica dell'appartamento: {focus_feature}.\n"
        if focus_feature else ""
    )
    user = f"""\
Scrivi l'articolo MASTER in ITALIANO per questo evento.
{focus_line}
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


_ROUNDUP_SYSTEM = f"""\
Sei l'editor SEO di Roma284. Scrivi il roundup settimanale degli eventi a Piacenza e dintorni.

{BRAND_FACTS}
{BRAND_RULES}
{ROUNDUP_STYLE}
{_LINK_HELP}
Rispondi SOLO con JSON valido, senza prosa né code-fence."""


def build_roundup_prompt(events: list[dict], week_label: str) -> tuple[str, str]:
    user = f"""\
Scrivi il roundup "Il prossimo weekend a Piacenza" in ITALIANO. Periodo: {week_label}.

EVENTI DELLA SETTIMANA (usa SOLO questi, raggruppali per tipo):
{json.dumps(events, ensure_ascii=False, indent=2)}

Restituisci questo JSON:
{{
  "title": "titolo accattivante ≤60 caratteri sul tema 'weekend a Piacenza'",
  "description": "meta description 150-160 caratteri con i 2-3 eventi clou",
  "category_key": "eventi",
  "body": "corpo Markdown: intro breve, sezioni ## per tipo con le segnalazioni, CTA finale con il placeholder del link prenotazione"
}}"""
    return _ROUNDUP_SYSTEM, user


# --- Guide evergreen "Dove dormire per X" ------------------------------------

_PAGE_PLACEHOLDER = {
    "fairs": "{{FAIRS_URL}}",
    "milan-events": "{{EVENTS_URL}}",
    "stay-near-milan": "{{STAY_NEAR_MILAN_URL}}",
    "a1-stopover": "{{A1_STOPOVER_URL}}",
    "getting-here": "{{GETTING_HERE_URL}}",
    "visit-piacenza": "{{VISIT_PIACENZA_URL}}",
}


def page_placeholder(page_key: str) -> str:
    """Placeholder di link per la pagina commerciale di riferimento di un topic."""
    return _PAGE_PLACEHOLDER.get(page_key, "{{BOOK_URL}}")


_STAY_GUIDE_SYSTEM = f"""\
Sei l'editor SEO di Roma284. Scrivi guide evergreen per chi sta cercando DOVE DORMIRE
in una situazione precisa (una fiera, un concerto, un viaggio in auto). Il lettore ha
gia' un motivo per venire: il tuo compito e' aiutarlo a decidere dove passare la notte.

{BRAND_FACTS}
{BRAND_RULES}
{STAY_GUIDE_STYLE}
{_LINK_HELP}
Rispondi SOLO con JSON valido, senza prosa ne' code-fence."""


def build_stay_guide_master_prompt(topic: dict) -> tuple[str, str]:
    ph = page_placeholder(topic.get("primary_link_page_key", ""))
    user = f"""\
Scrivi la guida MASTER in ITALIANO su questo tema.

TEMA: {topic.get('topic_it', '')}

ANGOLO DA TENERE (importante, definisce il taglio del pezzo):
{topic.get('angle', '')}

LINK OBBLIGATORIO: nel corpo inserisci il placeholder {ph} dentro un link Markdown,
con un'ancora testuale naturale, rimandando li' per l'approfondimento. In chiusura usa
{{{{BOOK_URL}}}} per la CTA. Non usare altri placeholder se non servono davvero.

Restituisci questo JSON:
{{
  "title": "titolo <=60 caratteri, deve contenere l'intento 'dove dormire' o equivalente",
  "description": "meta description 150-160 caratteri",
  "body": "corpo in Markdown: niente H1, sezioni ##, lista '## In sintesi', CTA finale"
}}"""
    return _STAY_GUIDE_SYSTEM, user


def build_stay_guide_translation_prompt(topic: dict, master: dict,
                                        locales: list[str]) -> tuple[str, str]:
    user = f"""\
Localizza questa guida nelle lingue: {", ".join(locales)}.

TEMA: {topic.get('topic_it', '')}

MASTER ITALIANO:
{json.dumps(master, ensure_ascii=False, indent=2)}

Adatta i riferimenti al lettore di ogni lingua (chi arriva dalla Germania o dai Paesi Bassi
ha un viaggio diverso da un italiano). Mantieni struttura e placeholder identici.
NON produrre lo slug: lo decide il codice.

Restituisci un JSON con una chiave per lingua, ognuna:
{{
  "<locale>": {{ "title": "...", "description": "...", "body": "..." }}
}}
Includi esattamente queste lingue: {", ".join(locales)}."""
    return _TRANS_SYSTEM, user
