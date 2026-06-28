"""Backend LLM intercambiabili per il Writer.

- ClaudeCodeBackend: via CLI `claude` (auth = Max OAuth token o API key dall'ambiente). PRIMARIO.
- ApiBackend: via SDK Anthropic (solo API key). FALLBACK.
- MockBackend: nessuna chiamata, output fittizio per test struttura.

Auth (Route A): esporta CLAUDE_CODE_OAUTH_TOKEN (pesca dal piano Max).
Auth (Route B/fallback): esporta ANTHROPIC_API_KEY (fattura l'API). Se ci sono
entrambe, l'API key ha la precedenza — quindi per restare su Max NON impostare l'API key.
"""
from __future__ import annotations
import json
import os
import re
import subprocess

# Alias modello -> id API completo (per ApiBackend). Claude Code accetta gli alias diretti.
API_MODEL_IDS = {
    "sonnet": "claude-sonnet-4-6",
    "opus": "claude-opus-4-8",
    "haiku": "claude-haiku-4-5-20251001",
}


def parse_json(text: str) -> dict:
    """Estrae un oggetto JSON da una risposta del modello (tollerante ai code-fence)."""
    if not text:
        raise ValueError("risposta vuota dal modello")
    t = text.strip()
    t = re.sub(r"^```(?:json)?\s*|\s*```$", "", t, flags=re.S)
    start = t.find("{")
    end = t.rfind("}")
    if start == -1 or end == -1:
        raise ValueError(f"nessun JSON nella risposta: {text[:200]}")
    return json.loads(t[start:end + 1])


class ModelBackend:
    is_mock = False

    def complete(self, system: str, user: str) -> str:
        raise NotImplementedError


class ClaudeCodeBackend(ModelBackend):
    """Esegue il modello via CLI Claude Code in modalità headless (-p)."""

    def __init__(self, model: str = "sonnet", timeout: int = 240):
        self.model = model
        self.timeout = timeout
        # Flag CLI sovrascrivibili se la versione installata differisce.
        self.bin = os.environ.get("CLAUDE_BIN", "claude")

    def complete(self, system: str, user: str) -> str:
        cmd = [
            self.bin, "-p", user,
            "--model", self.model,
            "--output-format", "json",
            "--append-system-prompt", system,
        ]
        # stdin=DEVNULL: evita l'attesa di 3s su stdin in ambienti non interattivi (CI).
        proc = subprocess.run(cmd, capture_output=True, text=True,
                              timeout=self.timeout, stdin=subprocess.DEVNULL)
        out = (proc.stdout or "").strip()
        # Claude Code -p --output-format json mette il testo in "result" e segnala
        # gli errori (es. "Not logged in") con is_error=true NELLO STDOUT (non stderr).
        try:
            env = json.loads(out)
        except json.JSONDecodeError:
            env = None
        if isinstance(env, dict):
            if env.get("is_error") or env.get("subtype") not in (None, "success"):
                raise RuntimeError(f"claude: {env.get('result') or 'errore sconosciuto'}")
            return env.get("result", "")
        if proc.returncode != 0:
            msg = (proc.stderr or out or "nessun output")[:500]
            raise RuntimeError(f"claude CLI fallita ({proc.returncode}): {msg}")
        return out


class ApiBackend(ModelBackend):
    """Via SDK Anthropic. Richiede ANTHROPIC_API_KEY. Fattura l'API."""

    def __init__(self, model: str = "sonnet", max_tokens: int = 4096):
        self.model_id = API_MODEL_IDS.get(model, model)
        self.max_tokens = max_tokens

    def complete(self, system: str, user: str) -> str:
        from anthropic import Anthropic  # import lazy
        client = Anthropic()  # legge ANTHROPIC_API_KEY dall'ambiente
        msg = client.messages.create(
            model=self.model_id,
            max_tokens=self.max_tokens,
            system=system,
            messages=[{"role": "user", "content": user}],
        )
        return "".join(b.text for b in msg.content if getattr(b, "type", "") == "text")


class MockBackend(ModelBackend):
    """Output deterministico fittizio per testare assemblaggio/validazione senza auth."""
    is_mock = True

    def mock_master(self, event: dict) -> dict:
        title = f"{event['title']}: dormire a Piacenza durante l'evento"
        return {
            "title": title[:70],
            "description": (
                f"{event['title']} a {event.get('city','')}: perché fare base a Piacenza "
                "e raggiungere l'evento comodamente. Guida pratica al soggiorno."
            )[:160],
            "slug": "",  # forziamo la derivazione dal titolo nel codice
            "category_key": "fiere" if event.get("type") == "fair" else "eventi",
            "body": (
                f"In occasione di **{event['title']}** conviene fare base a Piacenza.\n\n"
                f"## Cos'è {event['title']}\n\n"
                f"Si tiene a **{event.get('venue','')}** ({event.get('city','')}) "
                f"dal **{event.get('start_date','')}** al **{event.get('end_date','')}**.\n\n"
                "## Perché dormire a Piacenza\n\n"
                "Un intero appartamento nel centro storico, silenzioso, con **patio privato**, "
                "pet-friendly gratis e self check-in con smart lock. Milano a 33 minuti in treno.\n\n"
                "## Come arrivare\n\n"
                "Dettagli su collegamenti e orari nella pagina [Come arrivare]({{GETTING_HERE_URL}}) "
                "e altre idee nella sezione [Fiere]({{FAIRS_URL}}).\n\n"
                "## In sintesi\n\n"
                f"- **Evento:** {event['title']}\n"
                f"- **Dove:** {event.get('venue','')}, {event.get('city','')}\n"
                "- **Base consigliata:** Piacenza, centro storico\n\n"
                "Vuoi una base tranquilla per l'evento? [Verifica la disponibilità]({{BOOK_URL}})."
            ),
        }

    def mock_translations(self, event: dict, master: dict, locales: list[str]) -> dict:
        out = {}
        for loc in locales:
            out[loc] = {
                "title": f"[{loc}] {master['title']}",
                "description": f"[{loc}] {master['description']}",
                "slug": "",  # derivazione nel codice -> fallback su slug EN
                "body": master["body"],
            }
        return out


def get_backend(engine: str, model: str = "sonnet") -> ModelBackend:
    if engine == "claude_code":
        return ClaudeCodeBackend(model=model)
    if engine == "api":
        return ApiBackend(model=model)
    if engine == "mock":
        return MockBackend()
    raise ValueError(f"engine sconosciuto: {engine}")
