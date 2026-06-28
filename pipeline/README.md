# Pipeline SEO autoblog — roma284.it

Catena multi-agente che genera articoli blog SEO localizzati (11 lingue) e li pubblica,
in automatico, ogni ~72h via GitHub Actions.

```
Scout  →  Writer  →  (verifica build)  →  commit/push  →  Vercel build  →  IndexNow
(eventi)  (.md AI)        (astro)          (git)          (auto)          (ping)
```

## Struttura

```
pipeline/
  config.py              impostazioni (engine, modello, cap, finestre date)
  common/                i18n (slug/locali), fatti brand, frontmatter+validazione, eventi, url, stato
  scout/                 raccolta eventi
    run.py               aggregatore -> events.json
    sources/             aefi, ticketmaster, seed, rss_local
  writer/                generazione articoli
    run.py               eventi -> .md (11 lingue) con validazione
    prompts.py           prompt master + localizzazione
  llm/client.py          backend: claude_code (Max) | api | mock
  publisher/run.py       ping IndexNow degli URL nuovi
  data/seed_events.json  fiere-faro Milano (curate a mano)
  docs/FRONTMATTER_SPEC.md  contratto del frontmatter
  tests/test_offline.py  suite offline (no rete/LLM)
.github/workflows/autoblog.yml   orchestrazione
```

## Installazione (nel repo roma284-next)

1. Copia `pipeline/` nella radice del repo e `.github/workflows/autoblog.yml` in `.github/workflows/`.
2. Aggiungi i **GitHub Actions secrets** (Settings → Secrets and variables → Actions):
   - `CLAUDE_CODE_OAUTH_TOKEN` — **Route A (usa il tuo Max, costo $0)**. Generalo in locale con
     `claude setup-token` e incolla il valore. Per restare sul Max **non** impostare l'API key.
   - `ANTHROPIC_API_KEY` — *opzionale*, fallback Route B (fattura l'API). Se presente ha la precedenza
     sul token Max; impostala solo se vuoi staccarti dall'account personale.
   - `TICKETMASTER_API_KEY` — *opzionale*, per i concerti (gratis da developer.ticketmaster.com).
3. (Opzionale) Metti le fiere-faro di Milano in `pipeline/data/seed_events.json` (vedi `*.example.json`).
4. **Rodaggio sicuro:** lo `schedule` nel workflow è **commentato** (nessuna esecuzione automatica). Si lancia solo a mano (**Run workflow**) e parte in **dry-run** (genera e verifica, non pubblica). Per pubblicare davvero: avvio manuale con `dry_run: false`. Per andare operativi ogni ~72h: scommenta il blocco `schedule` e fai push su `main`.

## Auth: Route A vs B

| | engine | secret | costo |
|---|---|---|---|
| **A (default)** | `claude_code` | `CLAUDE_CODE_OAUTH_TOKEN` | $0 (dal tuo Max) |
| **B (fallback)** | `claude_code` o `api` | `ANTHROPIC_API_KEY` | ~$0,07–0,37/articolo |

Il workflow, se trova il token Max, **disattiva l'API key** per quel run così le chiamate vanno sul Max.

## Esecuzione locale

```bash
# Test (niente rete, niente LLM, niente chiavi):
python -m pipeline.tests.test_offline

# Scout (richiede rete; Ticketmaster richiede la key):
python -m pipeline.scout.run --out pipeline/_out/events.json

# Writer in prova, senza scrivere nel blog:
python -m pipeline.writer.run --event-file pipeline/examples/events.sample.json --engine mock --dry-run

# Publisher in prova:
python -m pipeline.publisher.run --files src/content/blog/foo.md --dry-run
```

## Costi

Unico costo a consumo: i token Anthropic, e **solo in Route B**. In Route A (Max) è incluso nell'abbonamento.
Tutto il resto è gratis: GitHub Actions (repo pubblico = illimitato), build Vercel, IndexNow, Ticketmaster, scraping.

## Limiti noti (gestiti)

- **Fiera Milano (Rho)** non è quartiere AEFI e il sito è in JS → coperta dal file `seed_events.json`.
- **RSS locali** disattivati di default (cronaca senza date evento affidabili) → si abilitano dopo verifica.
- I **flag della CLI `claude`** (in `llm/client.py`) vanno confermati sulla versione installata al primo run reale.

## Rollout sicuro a tappe

1. `pipeline/` + workflow su `main` (push). Nulla parte da solo: site invariato.
2. Secret `CLAUDE_CODE_OAUTH_TOKEN` impostato.
3. **Run workflow** manuale **in dry-run** (`max_articles: 1`, `dry_run: true`): genera + verifica build, **non pubblica**. Scarica l'artifact `generated-articles` e controlla i `.md`.
4. Se i contenuti convincono → **Run workflow** con `dry_run: false`: pubblica 1 articolo (11 lingue), build Vercel, IndexNow. Articolo online e **revertibile** (è un commit).
5. Quando sei soddisfatto → scommenta `schedule` nel workflow e push: operativo ogni ~72h.
