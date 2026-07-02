"""Configurazione centrale della pipeline.

Override possibili via variabili d'ambiente (utile in GitHub Actions).
"""
from __future__ import annotations
import os
from pathlib import Path

# Radice del repo del SITO (roma284-next). In locale qui è la cartella di staging;
# in produzione è la root del repo. Override con REPO_ROOT.
REPO_ROOT = Path(os.environ.get("REPO_ROOT", ".")).resolve()

# Dove vivono gli articoli (content collection del sito)
BLOG_DIR = REPO_ROOT / "src" / "content" / "blog"

# Redirect 301 gestiti dal lifecycle (letti da astro.config.mjs a ogni build)
REDIRECTS_FILE = REPO_ROOT / "redirects.json"
# Stub statici meta-refresh per gli URL rimossi (variante con slash finale)
PUBLIC_DIR = REPO_ROOT / "public"

# Stato pipeline (dedup). Vive nella cartella pipeline/ del repo.
STATE_FILE = Path(os.environ.get(
    "STATE_FILE", str(REPO_ROOT / "pipeline" / "state" / "published.json")
))

# --- Engine LLM del Writer ---
# "claude_code" = via CLI Claude Code (auth Max OAuth o API key) — DEFAULT
# "api"         = via SDK Anthropic (solo API key)
# "mock"        = nessuna chiamata reale, output fittizio per test struttura
LLM_ENGINE = os.environ.get("LLM_ENGINE", "claude_code")

# Modello: alias accettati da Claude Code ("sonnet"/"opus"/"haiku") o id API completo.
LLM_MODEL = os.environ.get("LLM_MODEL", "sonnet")

# --- Volume ---
# Volume dinamico ma con tetto di sicurezza per run (costo/quota prevedibili).
MAX_ARTICLES_PER_RUN = int(os.environ.get("MAX_ARTICLES_PER_RUN", "3"))

# Finestra temporale eventi da considerare (giorni nel futuro)
EVENT_LOOKAHEAD_DAYS = int(os.environ.get("EVENT_LOOKAHEAD_DAYS", "120"))
# Scarta eventi troppo vicini: sotto ~3 settimane Google non ha tempo di
# indicizzare e posizionare la pagina prima dell'evento (l'evento resta comunque
# coperto dal roundup settimanale, che ha URL evergreen già indicizzato).
EVENT_MIN_LEAD_DAYS = int(os.environ.get("EVENT_MIN_LEAD_DAYS", "21"))

# Lingue target (tutte per default)
from pipeline.common.i18n import LOCALES  # noqa: E402
TARGET_LOCALES = LOCALES
