"""Ciclo di vita degli articoli evento (policy decisa 2026-07-02).

- CONCERTI / eventi one-off: 7 giorni dopo la fine dell'evento l'articolo viene
  rimosso (tutte le lingue) e ogni URL fa redirect 301 alla pagina hub
  "eventi-milano" localizzata (l'autorità del link torna al sito, niente 404).
- FIERE: l'articolo resta finché lo Scout trova l'edizione successiva; quando
  viene pubblicato il nuovo articolo, il vecchio viene rimosso con 301 verso
  il nuovo (le informazioni risultano "aggiornate" e l'autorità si trasferisce).
- ROUNDUP: evergreen, mai toccato.

Doppia copertura per ogni URL rimosso (i canonici finiscono con "/", ma la
route redirect di Astro/Vercel matcha solo la variante senza slash):
1. `redirects.json` (root repo) -> astro.config.mjs -> 301 Vercel (URL senza slash);
2. stub HTML con meta-refresh 0 + canonical in `public/<path>/index.html`
   (URL con slash: Google lo tratta come redirect permanente).

Lo stato per-articolo vive in published.json: servono i campi `kind`
("concert"|"fair"), `end_date`, `paths` (file sotto src/content/blog),
`urls` ({locale: path}) e, per le fiere, `fair_key` (nome normalizzato senza
anno, per riconoscere l'edizione successiva). `cleaned` marca il lavoro fatto.
"""
from __future__ import annotations

import json
import os
import re
from datetime import date, datetime, timedelta
from pathlib import Path

from pipeline.common.i18n import localized_path

CONCERT_TTL_DAYS = int(os.environ.get("CONCERT_TTL_DAYS", "7"))


# ---------------------------------------------------------------- redirects --

def load_redirects(path: Path) -> dict:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return {}


def save_redirects(path: Path, redirects: dict) -> None:
    path.write_text(json.dumps(redirects, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
                    encoding="utf-8")


# ------------------------------------------------------------------- helper --

def fair_key(title: str) -> str:
    """Nome-fiera normalizzato senza anno: 'GEOFLUID 2026' -> 'geofluid'.
    Serve a riconoscere l'edizione successiva della stessa fiera."""
    t = re.sub(r"\b(19|20)\d{2}\b", " ", (title or "").lower())
    t = re.sub(r"[^a-z0-9]+", " ", t).strip()
    return re.sub(r"\s+", "-", t)


def article_kind(event: dict) -> str:
    return "fair" if (event.get("type") == "fair") else "concert"


def event_meta(event: dict, results: list) -> dict:
    """Meta per published.json a partire da evento + risultati del Writer.
    `results` = lista (locale, relpath, content, slug)."""
    kind = article_kind(event)
    urls = {}
    for loc, rel, _content, slug in results:
        urls[loc] = f"/blog/{slug}/" if loc == "it" else f"/{loc}/blog/{slug}/"
    meta = {
        "kind": kind,
        "end_date": event.get("end_date") or event.get("start_date") or "",
        "paths": [rel for _loc, rel, _c, _s in results],
        "urls": urls,
    }
    if kind == "fair":
        meta["fair_key"] = fair_key(event.get("title", ""))
    return meta


def _remove_article_files(meta: dict, blog_dir: Path) -> int:
    removed = 0
    for rel in meta.get("paths", []):
        f = blog_dir / rel
        if f.exists():
            f.unlink()
            removed += 1
    return removed


SITE_URL = "https://www.roma284.it"


def _write_stub(public_dir: Path, url_path: str, target: str) -> None:
    """Stub statico servito all'URL con slash finale: meta-refresh 0 + canonical
    verso la destinazione = segnale di redirect permanente per Google."""
    dest = public_dir / url_path.strip("/") / "index.html"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(
        "<!doctype html><html><head><meta charset=\"utf-8\">"
        f"<meta http-equiv=\"refresh\" content=\"0;url={target}\">"
        f"<link rel=\"canonical\" href=\"{SITE_URL}{target}\">"
        "<meta name=\"robots\" content=\"noindex\">"
        f"<title>Redirect</title></head><body><a href=\"{target}\">{target}</a>"
        "</body></html>\n",
        encoding="utf-8",
    )


def _redirect_all(meta: dict, targets: dict | str, redirects: dict, public_dir: Path) -> None:
    """Registra redirect (json) + stub per ogni URL dell'articolo rimosso.
    `targets` = path unico oppure dict {locale: path}."""
    for loc, url in meta.get("urls", {}).items():
        target = targets if isinstance(targets, str) else targets.get(loc) or targets.get("it", "/")
        redirects[url] = target
        _write_stub(public_dir, url, target)


# ------------------------------------------------------------------- policy --

def cleanup_expired_concerts(state: dict, *, blog_dir: Path, redirects_file: Path,
                             public_dir: Path, today: date | None = None) -> int:
    """Concerti finiti da più di CONCERT_TTL_DAYS: rimuovi articolo + 301 all'hub."""
    today = today or date.today()
    redirects = load_redirects(redirects_file)
    handled = 0
    for _tkey, meta in state.get("published", {}).items():
        if meta.get("cleaned") or meta.get("kind") != "concert":
            continue
        try:
            end = datetime.fromisoformat(meta["end_date"]).date()
        except (KeyError, ValueError, TypeError):
            continue
        if end + timedelta(days=CONCERT_TTL_DAYS) >= today:
            continue
        _remove_article_files(meta, blog_dir)
        hubs = {loc: localized_path("milan-events", loc) for loc in meta.get("urls", {})}
        _redirect_all(meta, hubs, redirects, public_dir)
        meta["cleaned"] = today.isoformat()
        handled += 1
        print(f"♻ lifecycle: concerto scaduto «{meta.get('title', '?')}» → rimosso + 301 hub")
    if handled:
        save_redirects(redirects_file, redirects)
    return handled


def supersede_old_fairs(state: dict, new_tkey: str, *, blog_dir: Path,
                        redirects_file: Path, public_dir: Path) -> int:
    """Appena pubblicata l'edizione nuova di una fiera, la vecchia viene
    rimossa con 301 per-lingua verso l'articolo nuovo."""
    new_meta = state.get("published", {}).get(new_tkey) or {}
    fkey = new_meta.get("fair_key")
    if not fkey:
        return 0
    redirects = load_redirects(redirects_file)
    handled = 0
    for tkey, meta in state.get("published", {}).items():
        if (tkey == new_tkey or meta.get("cleaned")
                or meta.get("kind") != "fair" or meta.get("fair_key") != fkey):
            continue
        _remove_article_files(meta, blog_dir)
        _redirect_all(meta, new_meta.get("urls", {}), redirects, public_dir)
        meta["cleaned"] = date.today().isoformat()
        meta["superseded_by"] = new_tkey
        handled += 1
        print(f"♻ lifecycle: fiera «{meta.get('title', '?')}» sostituita da «{new_tkey}» → 301")
    if handled:
        save_redirects(redirects_file, redirects)
    return handled
