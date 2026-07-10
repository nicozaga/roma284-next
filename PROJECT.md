# PROJECT.md — Roma284: sito + pipeline autoblog (documento master A-Z)

> **Unico documento di riferimento del progetto.** Scritto per essere comprensibile da zero, anche da un assistente AI senza alcuna memoria pregressa. Aggiornato al **2026-07-10**, verificato sul codice (branch `main`, commit `6c3a72b`).
> Sostituisce i vecchi file di contesto, archiviati in `docs/archive/` (PROMPT_MASTER.md = spec di costruzione iniziale, SETUP_INSTRUCTIONS.md = setup one-off, SITE_CONTEXT.md = contesto sito al 2026-06-28).

---

## 0. Il progetto in una frase

**roma284.it** è il sito di prenotazione diretta di un appartamento per affitti brevi a Piacenza; il progetto comprende **(a)** il sito statico multilingua (Astro 5 su Vercel) e **(b)** una **pipeline agentica di auto-blogging SEO** (Python + GitHub Actions) che genera e pubblica articoli in 11 lingue ogni settimana, in autonomia. Obiettivo: ridurre la dipendenza dalle OTA (Airbnb/Booking) facendo del sito la fonte primaria di prenotazioni, tramite crescita SEO.

---

## 1. Dove vive tutto

| Cosa | Dove |
|---|---|
| Repo (codice sito + pipeline, tutto insieme) | `github.com/nicozaga/roma284-next`, branch `main` |
| Clone locale sul Mac | `~/Documents/Coding/roma284-next` |
| Dominio canonico | `https://www.roma284.it` (con `www`) |
| Hosting/deploy | Vercel, progetto `prj_MQXMCwbnkqkMgSxyQnpsxUoWWMKH` — push su `main` → build automatica |
| Automazione | GitHub Actions: `.github/workflows/autoblog.yml` (schedule **attiva** dal 2026-07-02: ogni lunedì 05:00 UTC) |
| Cartella progetto Cowork/Claude sul Mac | `~/CLAUDE/Projects/Agenti Roma284.it` — contiene **solo questo documento**; il codice sta esclusivamente nel repo |

Nota storica: fino a luglio 2026 esistevano due "progetti" (Sito Roma284 e Agenti Roma284.it) con file duplicati. Sono stati unificati: **il repo è l'unica source of truth**; la pipeline è dentro il repo in `pipeline/`.

---

## 2. Business e contenuto

Appartamento **Roma284**, Via Roma 284, 29121 Piacenza (Emilia-Romagna). Owner: Nicolò Zaganelli; host operativa: **Romina** (Superhost, risposta entro un'ora, response rate 100%).

**Posizionamento**: boutique apartment nel centro storico, a **33 minuti da Milano Centrale** in Frecciarossa (stazione a 900 m, fino a 52 treni diretti/giorno). Target: business traveler e fiere (Milano/Piacenza/Parma), smart worker (fibra 1 Gbit/s), turisti del Nord Italia e — pagina dedicata — chi fa **sosta sull'autostrada A1**.

**Dati immobile** (source of truth: `src/lib/site.ts`):
- 50 m², 2 locali, max **4 ospiti**, patio privato, cucina attrezzata.
- **Pet-friendly**: animali sempre ammessi **gratis** (`petsAllowed:true` nello schema).
- Check-in **15:00 self check-in con smart lock**, check-out **10:00**.
- Rating: Airbnb 4.97/5 (38 recensioni), Booking 9.6/10.
- Contatti: `viaroma284@gmail.com`, tel/WhatsApp `+39 347 810 4634`. **Nessun form di contatto**: solo CTA WhatsApp + mailto + tel → sito 100% statico, zero serverless.

**Regole editoriali vincolanti** (valgono per umani e per la pipeline):
- **Mai nominare Airbnb/Booking** nei testi del sito; leva commerciale soft: prenotando diretto si risparmia «fino al 15% in meno». Mai cifre in euro, mai garanzie.
- **Niente prezzi in euro** da nessuna parte.
- Tono morbido sul collegamento con Milano (non ripetere ovunque il claim "33 min" — commit `a6b33b7`).
- Recensioni reali in `src/data/reviews.ts` (scala /10, fonte Booking) → emesse come schema.org `Review`. L'owner incolla i testi nuovi, non modifica il `.ts` da solo.

---

## 3. Stack tecnico

| Componente | Scelta |
|---|---|
| Framework | **Astro 5** (`output:"static"`) + TypeScript strict |
| CSS | **Tailwind 4** via `@tailwindcss/vite` (NON `@astrojs/tailwind`, deprecato) |
| Immagini | `astro:assets` + Sharp → AVIF/WebP/JPEG responsive; `imageService:false` sull'adapter Vercel |
| Font | Self-hosted in `public/fonts/`: **Fraunces** (display) + **Inter** (testo), via `@fontsource-variable/*` |
| Hosting | Vercel (`@astrojs/vercel`), `webAnalytics.enabled:true` |
| Sitemap | `@astrojs/sitemap` con mappa i18n → tag BCP-47 |
| Booking | Widget **Lodgify Portable Search Bar** (vedi §8) |
| Pipeline | Python 3.12, zero framework; LLM via CLI Claude Code o SDK Anthropic |

Config in `astro.config.mjs` (legge anche `redirects.json`, vedi §9). Alias TS: `@/*`, `@components/*`, `@layouts/*`, `@i18n/*`, `@lib/*`, `@data/*`, `@assets/*`.
Comandi: `npm run build` (= `astro build`), type-check `npx astro check`. Build: ~274 file HTML, sitemap ~231 URL (in crescita con l'autoblog).

---

## 4. Internazionalizzazione (cuore dell'architettura)

**11 lingue**, i18n nativo Astro + dizionari TS (NON Paraglide/astro-i18n). IT default sulla root `/`, le altre con prefisso `/{lang}/`:
`it, en, fr, es, pt, de, nl, sv, pl, ja, zh-cn` — tutte complete (pagine + blog).

File chiave in `src/i18n/`:
- **`config.ts`** — `LOCALES`, `DEFAULT_LOCALE="it"`, `type Locale`, `LOCALE_META` (htmlLang, ogLocale, label nativa, dir; tutte LTR).
- **`slugs.ts`** — `type PageKey` (15 chiavi) + `SLUGS`: slug **tradotti e ottimizzati per intento di ricerca locale**, non letterali (es. `apartment` → it `appartamento`, de `wohnung`, zh-cn `gongyu`). `home` = slug vuoto.
- **`available.ts`** — **source of truth disponibilità lingua/pagina**: mappa `READY`. Governa hreflang, language switcher e route. Helper `localesForPage`, `pageHasLocale`; costanti `ALL_EXCEPT_BLOG`, `NO_A1` (la pagina `a1-stopover` non esiste in JA/ZH).
- **`utils.ts`** — `localizedPath`, `localizedUrl`, `getLocaleFromUrl`, `getAlternates` (hreflang + `x-default`=IT), `switchLocale`, `bestPath` (fallback a IT → niente link rotti).
- **`ui.ts`** — dizionari UI (nav, CTA, footer), fallback `locale → en → it`.

**Per pubblicare una lingua su una pagina**: aggiungerla in `READY` (solo a contenuto pronto e build verde); hreflang e switcher si aggiornano da soli.

---

## 5. Pagine e routing

15 `PageKey`: `home, apartment, area, getting-here, stay-near-milan, smart-working, fairs, milan-events, visit-piacenza, about, contact, book, faq, blog, a1-stopover`.

- **IT** = file `.astro` diretti in `src/pages/` (es. `appartamento.astro`, `prenota.astro`, `sosta-a1-piacenza.astro`).
- **Non-IT** = dispatcher: `src/pages/[lang]/index.astro` + `src/pages/[lang]/[slug].astro` (mappa `pageKey → componente`). ⚠️ `getStaticPaths` NON può referenziare const della frontmatter (TDZ) → array pagine definito INLINE.
- **Blog**: `src/pages/blog/` (IT) + `[lang]/blog/index.astro` e `[lang]/blog/[...slug].astro`.
- Pattern pagina locale-aware: `const CMAP = {it:{...}, ...}; const C = CMAP[locale as keyof typeof CMAP] ?? CMAP.it;` — cast auto-adattivi.

---

## 6. Modello dati

Contenuti in `src/data/*.ts`, tutti locale-aware (`Partial<Record<Locale,T>>` + helper `pick`):
`content.ts` (testi home, 4 USP: WiFi 1Gbit, 33min Milano, centro storico, patio), `amenities.ts`, `faq.ts` (home) e `faqFull.ts` (~30 Q&A con ricerca client-side), `gallery.ts`, `neighborhood.ts` (indirizzi verificati giu 2026, distanze a piedi approssimate, link Google Maps), `transport.ts` (`ROUTES` → schema HowTo + UI `/come-arrivare`), `reviews.ts`.

Immagini sorgente in `src/assets/` (`gallery/`, `hero/` — hero: `IMG_4058`, cucina). OG images pre-generate in `public/og/` (`default.jpg` + dedicate).

---

## 7. Blog (content collection)

`src/content.config.ts` — collection `blog` con glob loader. **`generateId` include la cartella lingua** (fix collisione file omonimi tra lingue).

Frontmatter (Zod): `title`, `description`, `pubDate`, `updatedDate?`, `category` (default "Guide"), **`lang`** (default "it"), **`translationKey`** (lega le traduzioni per hreflang), **`slug?`** (pulito, localizzato), `draft` (default false). Contratto completo per la pipeline: `pipeline/docs/FRONTMATTER_SPEC.md`.

File in `src/content/blog/` (IT in root, altre lingue in `<lang>/`). Al 2026-07-10: **~122 file .md** (il numero cresce a ogni run dell'autoblog e cala col lifecycle), tra cui i 6 evergreen originali (`piacenza-48h`, `frecciarossa`, `milan-fairs-stay`, `remote-working`, `food-piacenza`, `milan-day-trip`), gli articoli evento generati dall'autoblog (es. `geofluid-2026`, `max-forever-san-siro`) e il roundup `weekend-a-piacenza` (solo IT, si riscrive ogni settimana). Solo `frecciarossa` ha CTA finale al `book` localizzato.

In homepage la sezione **"Ultimi dal blog"** (`src/components/home/LatestPosts.astro`) linka gli ultimi 3 articoli della lingua corrente → indicizzazione rapida dei nuovi articoli.

---

## 8. Booking widget (Lodgify) — ATTENZIONE

`BookingWidget.astro` = `<div id="lodgify-search-bar">` + script `renderPortableSearchBar.js`. IDs in `site.ts`: `rentalId 742039`, `websiteId 624345`, `slug roma284`. Usa `data-website-id` (NON rental-id). Label localizzate via `data-*` (`LABELS` nel componente).

⚠️ **Due gotcha critici**:
1. **View Transitions**: lo script Lodgify non si riesegue sulle navigazioni client-side. Init centralizzata in `Layout.astro` su `astro:page-load` (se `#lodgify-search-bar` è vuoto, rimuove e ri-appende lo script). NON rimettere lo script nel componente.
2. **`data-checkout-page-url`: NON modificarlo** (tentativo `?ref=roma284it` revertito, commit `178e18a`: rompeva il flusso). Per misurare l'intento di prenotazione usare l'evento GA4 `booking_widget_interact`.

---

## 9. SEO + ottimizzazione per AI agent

- **JSON-LD** (`src/lib/schema.ts` + `<JsonLd>`): `organization`, `lodgingBusiness` (review + aggregateRating + petsAllowed + geo), `apartment`, `howTo`, `place`, `contactPage`, `blogPosting`, `webPage` (+Speakable), `breadcrumb`, `faqPage`.
- **`robots.txt`**: allow totale + whitelist esplicita AI crawler (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, ecc.).
- **`llms.txt`** (statica EN) + **`llms-full.txt`** (dinamica, `src/pages/llms-full.txt.ts`).
- **hreflang reciproci** + `x-default` (IT) ovunque; canonical su `www`; **lastmod reali** in sitemap; **feed RSS** (commit `8ddb409`).
- **IndexNow** (`scripts/indexnow.mjs`, key file in `public/1fc62e1afbcd4069589dda31bf909a6b.txt`): ping Bing/Yandex/Naver/Seznam dopo ogni pubblicazione (`node scripts/indexnow.mjs`); la pipeline lo fa da sola. Google = sitemap + GSC.
- **Redirect**: `vercel.json` (301 dal vecchio sito single-page + vecchi slug) **+ `redirects.json`** in radice: redirect 301 generati dal **lifecycle della pipeline** (§11), letti da `astro.config.mjs` a ogni build. Non editare a mano se non serve.

---

## 10. Analytics, tracking, GDPR

Tutto in `Layout.astro`:
- **GA4** `G-ZWPPWW0T50` con Consent Mode (`denied` di default; `granted` solo se `localStorage["r284-consent"]==="granted"`), `anonymize_ip:true`.
- Helper globale `window.track(name, params)` + dispatcher centrale (delega su `document`, sopravvive alle View Transitions), attributi `data-evt`/`data-evt-view`. Eventi: `cta_click`, `whatsapp_click`, `booking_widget_view`, `booking_widget_interact`, `email_click`, `lang_switch`, `scroll_depth_50/75/100`, `gallery_open`, `faq_open`.
- **Vercel Web Analytics** + **Speed Insights** (cookieless, no consenso). **Microsoft Clarity** `x279p1twk6` solo dopo consenso.
- `CookieBanner.astro`: Accetta/Rifiuta, `localStorage["r284-consent"]`, Google Consent Mode, evento `r284:consent`, `window.openCookieSettings`.

---

## 11. Pipeline autoblog (la parte "agentica")

Catena multi-agente in `pipeline/` (Python), orchestrata da `.github/workflows/autoblog.yml`:

```
Scout → Writer → (verifica build astro) → commit/push → Vercel build → IndexNow
(eventi)  (.md AI, 11 lingue)   (in Actions)      (git)       (auto)      (ping)
```

**Struttura** (`pipeline/README.md` per i dettagli):
- `config.py` — impostazioni via env: `LLM_ENGINE` (default `claude_code`), `LLM_MODEL` (default `sonnet`), `MAX_ARTICLES_PER_RUN` (3), `EVENT_LOOKAHEAD_DAYS` (120), `EVENT_MIN_LEAD_DAYS` (21: sotto ~3 settimane Google non fa in tempo a indicizzare; l'evento resta coperto dal roundup).
- `scout/` — raccolta eventi: sorgenti `aefi` (fiere Piacenza/Parma), `ticketmaster` (concerti, key opzionale), `seed` (`data/seed_events.json`: fiere-faro Milano curate a mano — Fiera Milano/Rho non è coperta da AEFI), `rss_local` (disattivate di default).
- `writer/` — `run.py` (eventi → .md nelle 11 lingue, con validazione frontmatter), `prompts.py`, `roundup.py` (pagina evergreen IT `/blog/weekend-a-piacenza/` riscritta ogni settimana, translationKey e slug fissi).
- `llm/client.py` — backend: `claude_code` (CLI, auth Max) | `api` (SDK) | `mock` (test).
- `publisher/run.py` — ping IndexNow degli URL nuovi.
- `lifecycle.py` — **ciclo di vita articoli evento** (policy 2026-07-02): concerti/one-off rimossi 7 giorni dopo l'evento con 301 all'hub `eventi-milano` localizzato; fiere rimosse quando esce l'articolo dell'edizione successiva con 301 al nuovo; roundup mai toccato. Doppia copertura slash/no-slash: 301 in `redirects.json` + stub meta-refresh in `public/blog/`.
- `state/published.json` — stato/dedup degli eventi già pubblicati (committato dal workflow).
- `common/` — frontmatter+validazione, i18n, fatti brand (`site_facts.py`), url, eventi, stato.
- `tests/test_offline.py` — suite offline (no rete/LLM): `python -m pipeline.tests.test_offline`.

**Workflow GitHub Actions** (`autoblog.yml`):
- **Schedule ATTIVA**: cron `0 5 * * 1` (lunedì 05:00 UTC ≈ 07:00 IT). Avvio manuale (workflow_dispatch) con input `max_big` (default 3) e `dry_run` (default `true` per gli avvii manuali; lo schedule pubblica).
- Il run committa `src/content/blog`, `pipeline/state`, `redirects.json`, `public/blog` → il push innesca la build Vercel → ping IndexNow.
- **Auth, due route**: Route A (default, costo $0) = `CLAUDE_CODE_OAUTH_TOKEN` (generato con `claude setup-token`, usa l'abbonamento Max); Route B (fallback a consumo) = `ANTHROPIC_API_KEY` (~$0,07–0,37/articolo). Secret `TICKETMASTER_API_KEY` opzionale. Tutto il resto è gratis (Actions su repo pubblico, Vercel, IndexNow).

**Esecuzione locale** (dalla radice del repo):
```bash
python -m pipeline.tests.test_offline                                        # test offline
python -m pipeline.scout.run --out pipeline/_out/events.json                 # scout
python -m pipeline.writer.run --event-file pipeline/examples/events.sample.json --engine mock --dry-run
python -m pipeline.publisher.run --files src/content/blog/foo.md --dry-run
```

---

## 12. Deploy e vincoli operativi

- Push su `main` → build Vercel automatica. Ogni pubblicazione autoblog è un commit → **revertibile**.
- ⚠️ **Limite sandbox (per assistenti AI in Cowork/Claude Code con repo montato)**: la bash nel mount può *creare* file ma **non può fare unlink/rm/commit**. Conseguenze pratiche: build di verifica in `/tmp` (copia del repo); cancellazioni tramite il permesso file-delete di Cowork; **commit/push a mano dall'owner** (o da GitHub Actions, che non ha questo limite).
- **Decisione brand chiusa**: contrasto bianco su terracotta `#c67557` (~3.45:1) resta così — **non riproporre** il fix accessibilità; Lighthouse Accessibility non a 100, accettato.
- Task notturno `roma284-traduzioni-notturne`: esiste ma **idle** (i18n completo).
- Palette/naming CSS ricorrenti: `terracotta`, `antracite`, `grigio`, `avorio`; font display `font-display` (Fraunces).

---

## 13. Operazioni ricorrenti

**Aggiungere una pagina multilingua**: 1) `slugs.ts` nuova `PageKey` + 11 slug; 2) `available.ts` → `READY` (e `ALL_EXCEPT_BLOG`/`NO_A1` se serve); 3) pagina IT `.astro` + voce nel dispatcher `[lang]/[slug].astro` (pattern CMAP); 4) stringhe in `ui.ts` + link Header/Footer via `bestPath`; 5) dati in `src/data/` se servono; 6) OG image opzionale; 7) build di verifica, commit.

**Aggiungere una recensione**: incollare il testo → aggiornare `src/data/reviews.ts` (scala /10, `REVIEWS_VERIFIED=true`).

**Lanciare la pipeline a mano**: GitHub → Actions → "Roma284 Autoblog" → Run workflow (`dry_run:true` per prova; scaricare l'artifact `generated-articles` e controllare i `.md`).

**Controllare cosa ha pubblicato l'autoblog**: `git log --oneline` (commit `autoblog: ...`) + `pipeline/state/published.json`.

---

## 14. Storia e stato (al 2026-07-10)

- **Giu 2026**: rifacimento completo del sito (il vecchio single-page faceva 57 clic in 6 mesi da GSC). Spec iniziale: `docs/archive/PROMPT_MASTER.md`.
- **Fine giu 2026**: sito completo (11 lingue, 274 pagine); progettata e costruita la pipeline autoblog.
- **2026-07-01**: primi articoli pubblicati dall'autoblog. **2026-07-02**: schedule attivata (commit `8ddb409`) + lifecycle articoli evento (commit `6c3a72b`).
- **2026-07-06**: primo run completamente automatico da schedule, riuscito (commit `fd911e5`).
- **Oggi**: pipeline operativa ogni lunedì; ~122 file .md nel blog; da monitorare: qualità output multilingua, impatto SEO (GSC), conversioni dirette (GA4 `booking_widget_interact`).

**Roadmap aperta**: monitoraggio SEO/conversioni man mano che i contenuti scalano; eventuale attivazione sorgenti RSS locali dopo verifica; valutare nuove pagine landing per intenti specifici.

---

### Riferimenti rapidi
- Source of truth dati immobile: `src/lib/site.ts` · i18n: `src/i18n/available.ts` + `slugs.ts` · frontmatter blog: `pipeline/docs/FRONTMATTER_SPEC.md`
- Repo: `github.com/nicozaga/roma284-next` · Dominio: `https://www.roma284.it` · Vercel: `prj_MQXMCwbnkqkMgSxyQnpsxUoWWMKH`
- GA4 `G-ZWPPWW0T50` · Clarity `x279p1twk6` · Lodgify `websiteId 624345` / `rentalId 742039`
- Archivio storico: `docs/archive/`
