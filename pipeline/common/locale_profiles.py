"""Profili lingua per tipo di contenuto pubblicato dalla pipeline.

Decisione 2026-09 (dati GSC giugno–agosto 2026): gli articoli-concerto tradotti
in ja/zh-cn/sv/pl hanno prodotto 1–8 impressioni e 0 clic in tre mesi. Il
fan-out a 11 lingue viene quindi ridotto SOLO per i concerti (IT+EN); le fiere
restano invariate, perché il pubblico fieristico è realmente internazionale.

`tier` (in common/events.py) resta il criterio di SELEZIONE — se un evento
merita un articolo dedicato invece del solo roundup. `type` è il criterio di
FAN-OUT linguistico. I due assi sono indipendenti.
"""
from __future__ import annotations

from pipeline.common.i18n import DEFAULT_LOCALE, LOCALES

# Concerti/one-off: il grosso della domanda è italiana, più inglese per i turisti.
CONCERT_LOCALES = [DEFAULT_LOCALE, "en"]

LOCALE_PROFILE_BY_EVENT_TYPE: dict[str, list[str]] = {
    "concert": CONCERT_LOCALES,
    "fair": LOCALES,
    "event": LOCALES,
}


def locales_for_event(event: dict) -> list[str]:
    """Lingue target per un evento. Fallback conservativo: tutte le 11.

    Un tipo non mappato (o assente) mantiene il comportamento storico, così un
    nuovo tipo di evento non perde silenziosamente le traduzioni.
    """
    return LOCALE_PROFILE_BY_EVENT_TYPE.get(event.get("type"), LOCALES)
