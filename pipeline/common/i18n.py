"""i18n — specchio di src/i18n/{config,slugs}.ts del sito.

Tenuto in sync a mano con il repo. Serve a costruire link interni
localizzati corretti (CTA + interlinking) senza fidarsi dell'LLM per i path.
"""
from __future__ import annotations
import re
import unicodedata

DEFAULT_LOCALE = "it"

# Ordine = src/i18n/config.ts
LOCALES = ["it", "en", "fr", "es", "pt", "de", "nl", "sv", "pl", "ja", "zh-cn"]

# BCP-47 per riferimento (da LOCALE_META)
HTML_LANG = {
    "it": "it-IT", "en": "en-GB", "fr": "fr-FR", "es": "es-ES", "pt": "pt-PT",
    "de": "de-DE", "nl": "nl-NL", "sv": "sv-SE", "pl": "pl-PL", "ja": "ja-JP",
    "zh-cn": "zh-CN",
}

# Specchio di SLUGS in src/i18n/slugs.ts (PageKey -> locale -> slug)
SLUGS = {
    "home": {l: "" for l in LOCALES},
    "apartment": {
        "it": "appartamento", "en": "the-apartment", "fr": "appartement", "es": "apartamento",
        "pt": "apartamento", "de": "wohnung", "nl": "appartement", "sv": "lagenheten",
        "pl": "apartament", "ja": "apartment", "zh-cn": "gongyu",
    },
    "area": {
        "it": "quartiere", "en": "area", "fr": "quartier", "es": "zona", "pt": "bairro",
        "de": "umgebung", "nl": "buurt", "sv": "omradet", "pl": "okolica", "ja": "area", "zh-cn": "quyu",
    },
    "getting-here": {
        "it": "come-arrivare", "en": "getting-here", "fr": "comment-venir", "es": "como-llegar",
        "pt": "como-chegar", "de": "anreise", "nl": "route", "sv": "hitta-hit",
        "pl": "jak-dojechac", "ja": "access", "zh-cn": "jiaotong",
    },
    "stay-near-milan": {
        "it": "dormire-vicino-milano", "en": "stay-near-milan", "fr": "dormir-pres-de-milan",
        "es": "dormir-cerca-milan", "pt": "dormir-perto-milao", "de": "uebernachten-bei-mailand",
        "nl": "slapen-bij-milaan", "sv": "bo-nara-milano", "pl": "nocleg-blisko-mediolanu",
        "ja": "milan-near-stay", "zh-cn": "milan-zhusu",
    },
    "smart-working": {
        "it": "smart-working", "en": "smart-working", "fr": "teletravail", "es": "teletrabajo",
        "pt": "trabalho-remoto", "de": "remote-arbeit", "nl": "thuiswerken", "sv": "distansarbete",
        "pl": "praca-zdalna", "ja": "remote-work", "zh-cn": "yuancheng",
    },
    "fairs": {
        "it": "fiere", "en": "trade-fairs", "fr": "foires", "es": "ferias",
        "pt": "feiras", "de": "messen", "nl": "beurzen", "sv": "massor",
        "pl": "targi", "ja": "trade-fairs", "zh-cn": "zhanhui",
    },
    "milan-events": {
        "it": "eventi-milano", "en": "milan-events", "fr": "evenements-milan", "es": "eventos-milan",
        "pt": "eventos-milao", "de": "milan-events", "nl": "milaan-events", "sv": "milano-event",
        "pl": "wydarzenia-mediolan", "ja": "milan-event", "zh-cn": "milan-huodong",
    },
    "visit-piacenza": {
        "it": "visitare-piacenza", "en": "visit-piacenza", "fr": "visiter-piacenza",
        "es": "visitar-piacenza", "pt": "visitar-piacenza", "de": "piacenza-besuchen",
        "nl": "piacenza-bezoeken", "sv": "besoka-piacenza", "pl": "zwiedzac-piacenza",
        "ja": "visit-piacenza", "zh-cn": "piacenza-lvyou",
    },
    "about": {
        "it": "chi-siamo", "en": "about", "fr": "a-propos", "es": "sobre-nosotros", "pt": "sobre-nos",
        "de": "ueber-uns", "nl": "over-ons", "sv": "om-oss", "pl": "o-nas", "ja": "about", "zh-cn": "guanyu",
    },
    "contact": {
        "it": "contatti", "en": "contact", "fr": "contact", "es": "contacto", "pt": "contato",
        "de": "kontakt", "nl": "contact", "sv": "kontakt", "pl": "kontakt", "ja": "contact", "zh-cn": "lianxi",
    },
    "book": {
        "it": "prenota", "en": "book", "fr": "reserver", "es": "reservar", "pt": "reservar",
        "de": "buchen", "nl": "boeken", "sv": "boka", "pl": "zarezerwuj", "ja": "book", "zh-cn": "yuding",
    },
    "faq": {
        "it": "faq", "en": "faq", "fr": "faq", "es": "faq", "pt": "faq", "de": "faq", "nl": "faq",
        "sv": "vanliga-fragor", "pl": "faq", "ja": "faq", "zh-cn": "changjian-wenti",
    },
    "blog": {l: "blog" if l != "sv" else "blog" for l in LOCALES},
    "a1-stopover": {
        "it": "sosta-a1-piacenza", "en": "a1-stopover-piacenza", "fr": "etape-autoroute-a1",
        "es": "parada-autopista-a1", "pt": "paragem-a1-piacenza", "de": "zwischenstopp-a1",
        "nl": "tussenstop-a1", "sv": "mellanstopp-a1", "pl": "przystanek-a1",
        "ja": "a1-stopover", "zh-cn": "a1-stopover",
    },
}

# Categorie blog localizzate (key interna -> locale -> label)
CATEGORIES = {
    "eventi": {
        "it": "Eventi", "en": "Events", "fr": "Événements", "es": "Eventos", "pt": "Eventos",
        "de": "Veranstaltungen", "nl": "Evenementen", "sv": "Evenemang", "pl": "Wydarzenia",
        "ja": "イベント", "zh-cn": "活动",
    },
    "fiere": {
        "it": "Fiere", "en": "Fairs", "fr": "Salons", "es": "Ferias", "pt": "Feiras",
        "de": "Messen", "nl": "Beurzen", "sv": "Mässor", "pl": "Targi",
        "ja": "見本市", "zh-cn": "展会",
    },
    "trasporti": {
        "it": "Trasporti", "en": "Transport", "fr": "Transport", "es": "Transporte", "pt": "Transporte",
        "de": "Anreise", "nl": "Vervoer", "sv": "Transport", "pl": "Transport",
        "ja": "交通", "zh-cn": "交通",
    },
    "itinerari": {
        "it": "Itinerari", "en": "Itineraries", "fr": "Itinéraires", "es": "Itinerarios", "pt": "Itinerários",
        "de": "Reiserouten", "nl": "Routes", "sv": "Resvägar", "pl": "Trasy",
        "ja": "旅程", "zh-cn": "行程",
    },
    "guide": {l: "Guide" for l in LOCALES},
}


def localized_path(page_key: str, locale: str) -> str:
    """Path assoluto localizzato con slash iniziale e finale.
    IT senza prefisso lingua; non-IT con /<locale>/.
    home -> '/' (it) o '/<locale>/'.
    """
    slug = SLUGS[page_key][locale]
    if locale == DEFAULT_LOCALE:
        return "/" if slug == "" else f"/{slug}/"
    return f"/{locale}/" if slug == "" else f"/{locale}/{slug}/"


def category_label(cat_key: str, locale: str) -> str:
    cat = CATEGORIES.get(cat_key, CATEGORIES["guide"])
    return cat.get(locale, cat.get("en", "Guide"))


def slugify(text: str) -> str:
    """ASCII-fold + kebab-case. CJK viene rimosso (gestire fallback a monte)."""
    t = unicodedata.normalize("NFKD", text)
    t = t.encode("ascii", "ignore").decode("ascii").lower()
    t = re.sub(r"[^a-z0-9]+", "-", t).strip("-")
    return t
