"""Fonte generica via LLM-extraction.

Le fonti culturali/gastronomiche locali sono HTML disordinato senza date pulite:
qui lo Scout scarica la pagina, la ripulisce e chiede a Claude di estrarre gli
eventi in JSON. Robusto ai cambi di layout. Una chiamata LLM per sito.

`extract()` è testabile offline (passando un backend finto); `collect()` fa il
fetch reale (requests) e va in CI.
"""
from __future__ import annotations
import json
import re

from pipeline import config
from pipeline.common.events import make_event
from pipeline.llm.client import get_backend

# Siti culturali/eventi locali (l'owner può aggiungerne/togliere).
SITES = [
    {"name": "teatri-piacenza", "url": "https://teatripiacenza.it/calendario/", "city": "Piacenza", "type": "concert"},
    {"name": "fondazione-pc-vigevano", "url": "https://www.fondazionepiacenzavigevano.it/eventi-promossi-e-sostenuti", "city": "Piacenza", "type": "event"},
    {"name": "collipiacentini", "url": "https://collipiacentini.it/eventi/", "city": "Piacenza", "type": "event"},
    {"name": "comune-piacenza", "url": "https://www.comune.piacenza.it/it/eventi", "city": "Piacenza", "type": "event"},
    {"name": "venerdi-piacentini", "url": "https://www.venerdipiacentini.it/", "city": "Piacenza", "type": "event"},
    {"name": "ilpod", "url": "https://www.ilpod.it/", "city": "Piacenza", "type": "event"},
]

_SYSTEM = (
    "Sei un estrattore di eventi. Dato il testo di una pagina web, restituisci SOLO un "
    "array JSON di eventi, ognuno: {title, type(concert|fair|event), venue, city, "
    "start_date 'YYYY-MM-DD', end_date 'YYYY-MM-DD', url, description}. "
    "Includi SOLO eventi con una data certa nei prossimi ~4 mesi. Ignora voci di menu, "
    "news senza data, contenuti non-evento. Se una data non è chiara, ometti l'evento. "
    "Niente prosa, niente code-fence: solo l'array JSON."
)


def _strip_html(html: str) -> str:
    html = re.sub(r"(?is)<(script|style).*?</\1>", " ", html)
    text = re.sub(r"<[^>]+>", " ", html)
    return re.sub(r"\s+", " ", text).strip()


def _user(text: str, site: dict) -> str:
    return (f"Sito: {site['name']} — {site['url']}\nCittà di default: {site.get('city','')}.\n\n"
            f"TESTO PAGINA:\n{text[:12000]}\n\nRestituisci l'array JSON degli eventi.")


def _parse_array(raw: str) -> list:
    t = (raw or "").strip()
    t = re.sub(r"^```(?:json)?\s*|\s*```$", "", t, flags=re.S)
    a, b = t.find("["), t.rfind("]")
    if a == -1 or b == -1:
        return []
    try:
        data = json.loads(t[a:b + 1])
        return data if isinstance(data, list) else []
    except json.JSONDecodeError:
        return []


def _to_events(rows: list, site: dict) -> list[dict]:
    out = []
    for r in rows:
        if not isinstance(r, dict) or not r.get("title") or not r.get("start_date"):
            continue
        out.append(make_event(
            title=r["title"], type=r.get("type") or site.get("type", "event"),
            venue=r.get("venue", ""), city=r.get("city") or site.get("city", ""),
            start_date=r["start_date"], end_date=r.get("end_date"),
            url=r.get("url") or site.get("url", ""),
            description=(r.get("description") or "")[:300], source=site["name"],
        ))
    return out


def extract(backend, text: str, site: dict) -> list[dict]:
    """Estrae eventi dal testo di una pagina via LLM. Testabile offline."""
    try:
        raw = backend.complete(_SYSTEM, _user(text, site))
    except Exception as e:  # noqa: BLE001
        print(f"[web_llm] {site['name']}: errore LLM ({e})")
        return []
    return _to_events(_parse_array(raw), site)


def collect(backend=None) -> list[dict]:
    """PRODUZIONE: fetch dei siti + estrazione LLM."""
    import requests  # import lazy
    backend = backend or get_backend(config.LLM_ENGINE, config.LLM_MODEL)
    out = []
    for site in SITES:
        if site.get("disabled"):
            continue
        try:
            r = requests.get(site["url"], timeout=30, headers={"User-Agent": "roma284-scout/1.0"})
            if r.status_code != 200:
                print(f"[web_llm] {site['name']}: HTTP {r.status_code}")
                continue
            out += extract(backend, _strip_html(r.text), site)
        except Exception as e:  # noqa: BLE001
            print(f"[web_llm] {site['name']}: errore fetch ({e})")
    return out
