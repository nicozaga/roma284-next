# Roma284 — Contesto sito (tecnico + contenutistico)

> File di riferimento per integrare il sito da una pipeline esterna. Aggiornato al 2026-06-28, verificato sul codice (branch `main`, ultimo commit `275b1dc`). Repo: `github.com/nicozaga/roma284-next`. Dominio canonico: **https://www.roma284.it** (con `www`).

---

## 1. Cos'è il sito (business + contenuto)

Sito di **Roma284**: un appartamento per affitti brevi in **Via Roma 284, 29121 Piacenza** (Emilia-Romagna, Italia). Owner: Nicolò Zaganelli; host operativa: **Romina** (Superhost, risposta entro un'ora, response rate 100%).

**Posizionamento**: appartamento boutique nel centro storico di Piacenza, a **33 minuti da Milano Centrale** in Frecciarossa (stazione a 900 m / ~9 min a piedi, fino a 52 treni diretti/giorno). Target: business traveler e fiere (Milano/Piacenza/Parma), smart worker (WiFi fibra 1 Gbit/s), turisti che esplorano il Nord Italia, e — pagina dedicata — chi fa **sosta sull'autostrada A1**.

**Dati immobile** (`src/lib/site.ts`, single source of truth):
- 50 m², 2 locali, max **4 ospiti**; patio privato; cucina attrezzata.
- **Pet-friendly**: animali sempre ammessi **gratis** (valorizzato in amenities/FAQ/schema `petsAllowed:true`).
- Check-in **15:00 self check-in con smart lock** (ingresso autonomo), check-out **10:00**.
- Rating: **Airbnb 4.97/5 (38 recensioni)**, **Booking 9.6/10**.

**Contatti** (in `site.ts`): email `viaroma284@gmail.com`, telefono/WhatsApp `+39 347 810 4634`. **Nessun form di contatto** (rimosso): la pagina contatti ha solo CTA WhatsApp + mailto + tel. → sito **100% statico, nessuna funzione serverless**.

**Leva commerciale chiave**: prenotando in diretta si risparmia (no commissioni piattaforme, "fino al 15% in meno"). Wording soft, **mai nominare Airbnb/Booking** nei messaggi del sito, mai cifre in euro né garanzie. Banner in `WhyBookDirect.astro` (home + pagina prenota) e nelle FAQ.

**Recensioni reali** in `src/data/reviews.ts` (`REVIEWS_VERIFIED=true`, scala /10, fonte Booking: Daniele 10, Edyta 10, Francesco 10, Ugo 9) → emesse come schema.org `Review`. L'owner incolla nuovi testi, non apre il `.ts`.

---

## 2. Stack tecnico

| Componente | Scelta |
|---|---|
| Framework | **Astro 5** (`output: "static"`) + **TypeScript strict** |
| CSS | **Tailwind 4** via `@tailwindcss/vite` (NON `@astrojs/tailwind`, deprecato) |
| Immagini | `astro:assets` + **Sharp** → AVIF/WebP/JPEG responsive. `imageService:false` sull'adapter Vercel (build locale con Sharp). |
| Font | Self-hosted in `public/fonts/` (**Fraunces** display + **Inter** testo), via `@fontsource-variable/*` |
| Hosting | **Vercel** (`@astrojs/vercel`), `webAnalytics.enabled:true` |
| Sitemap | `@astrojs/sitemap` con mappa i18n locali → tag BCP-47 |
| Booking | Widget **Lodgify Portable Search Bar** (vedi §7) |

Config in `astro.config.mjs`. Path alias TS in `tsconfig.json`: `@/*`, `@components/*`, `@layouts/*`, `@i18n/*`, `@lib/*`, `@data/*`, `@assets/*`.

Build attuale: **274 file HTML**, **sitemap 231 URL**. `npm run build` (= `astro build`); type-check con `npx astro check`.

---

## 3. Internazionalizzazione (il cuore dell'architettura)

**11 lingue**, i18n nativo Astro + dizionari TS (NON Paraglide/astro-i18n). IT è default servito sulla **root** `/`, le altre con prefisso `/{lang}/`.

`it, en, fr, es, pt, de, nl, sv, pl, ja, zh-cn` — tutte COMPLETE (pagine + blog).

File chiave in `src/i18n/`:

- **`config.ts`** — `LOCALES`, `DEFAULT_LOCALE="it"`, `type Locale`, `LOCALE_META` (htmlLang, ogLocale, label nativa, dir). Tutte LTR.
- **`slugs.ts`** — `type PageKey` (15 chiavi, vedi §4) + `SLUGS: Record<PageKey, Record<Locale, string>>`. Slug **tradotti e ottimizzati per intento di ricerca locale**, non letterali (es. `apartment` → it `appartamento`, de `wohnung`, "zh-cn" `gongyu`). `home` = slug vuoto `""`.
- **`available.ts`** — **source of truth della disponibilità lingua/pagina**. Mappa `READY: Partial<Record<Locale, PageKey[]>>`. Governa hreflang, language switcher e generazione route. Helper `localesForPage(page)`, `pageHasLocale(page, locale)`. Costanti `ALL_EXCEPT_BLOG` e `NO_A1` (la pagina `a1-stopover` non è tradotta in JA/ZH).
- **`utils.ts`** — funzioni di routing: `localizedPath(page, locale)`, `localizedUrl(...)` (assoluto), `getLocaleFromUrl(url)`, `getAlternates(page)` (varianti + `x-default`=IT), `switchLocale`, **`bestPath(page, locale)`** (lingua se disponibile, altrimenti IT → niente link rotti).
- **`ui.ts`** — dizionari stringhe UI (nav, CTA, footer) con `type UIKey`. IT sorgente, fallback `locale → en → it`.

**Per pubblicare una lingua su una pagina**: aggiungerla in `READY` di `available.ts` (solo dopo che il contenuto è pronto e la build è verde). hreflang e switcher si aggiornano da soli.

---

## 4. Pagine e routing

15 `PageKey` canoniche (indipendenti dalla lingua):

`home, apartment, area, getting-here, stay-near-milan, smart-working, fairs, milan-events, visit-piacenza, about, contact, book, faq, blog, a1-stopover`

**Routing**:
- **IT** = file `.astro` diretti in `src/pages/` (es. `appartamento.astro`, `quartiere.astro`, `prenota.astro`, `sosta-a1-piacenza.astro`).
- **Non-IT** = dispatcher: `src/pages/[lang]/index.astro` (home) + `src/pages/[lang]/[slug].astro` (mappa `pageKey → componente`). ⚠️ `getStaticPaths` NON può referenziare const della frontmatter (TDZ) → array pagine definito INLINE.
- **Blog**: `src/pages/blog/` (IT) + `src/pages/[lang]/blog/index.astro` e `[lang]/blog/[...slug].astro`.

**Pattern pagina locale-aware**: `const CMAP = {it:{...}, en:{...}, ...}; const C = CMAP[locale as keyof typeof CMAP] ?? CMAP.it;` — i cast usano `keyof typeof` → auto-adattivi, non serve allargarli per lingua nuova. Stesso per `TMAP` nei componenti home.

---

## 5. Modello dati dei contenuti

Contenuti in `src/data/*.ts`, tutti **locale-aware** come `Partial<Record<Locale, T>>` (o `Record` it+...), con helper `pick(rec, locale)`:

| File | Contenuto |
|---|---|
| `content.ts` | testi home: `USP` (4 carte: WiFi 1Gbit, 33min Milano, centro storico, patio), + altri blocchi home |
| `amenities.ts` | dotazioni appartamento |
| `faq.ts` | FAQ home (ridotte) |
| `faqFull.ts` | FAQ pagina `/faq` completa (~30 Q&A, ricerca client-side) |
| `gallery.ts` | metadati galleria (immagini in `src/assets/gallery/`) |
| `neighborhood.ts` | quartiere: `Eatery`/`Shop`/`NamedNote` con `address`, `dist` (a piedi, **approssimata**), `query` per link Google Maps. Indirizzi verificati via web (giu 2026) |
| `transport.ts` | `ROUTES` per origine → alimenta lo schema **HowTo** + UI di `/come-arrivare` |
| `reviews.ts` | recensioni reali (vedi §1) |

Immagini sorgente in `src/assets/` (`gallery/`, `hero/`). Hero: `IMG_4058` (cucina). OG images pre-generate in `public/og/` (`default.jpg` + dedicate: `apartment`, `stay-near-milan`, `smart-working`, `visit-piacenza`, `sosta-a1`).

---

## 6. Blog (content collection)

`src/content.config.ts` — collection `blog` con glob loader. **`generateId` include la cartella lingua** (fix collisione: file omonimi in lingue diverse si sovrascrivevano).

Frontmatter (Zod schema): `title`, `description`, `pubDate`, `updatedDate?`, `category` (default "Guide"), **`lang`** (default "it"), **`translationKey`** (lega le versioni tradotte per hreflang), **`slug?`** (pulito, localizzato), `draft` (default false).

**6 articoli × 11 lingue**. File in `src/content/blog/` (IT in root) e `src/content/blog/<lang>/`. I 6 `translationKey`: `piacenza-48h`, `frecciarossa`, `milan-fairs-stay`, `remote-working`, `food-piacenza`, `milan-day-trip`. Solo l'articolo `frecciarossa` ha CTA finale (link allo slug `book` localizzato).

---

## 7. Booking widget (Lodgify) — ATTENZIONE

Componente `BookingWidget.astro` = `<div id="lodgify-search-bar">` + script `renderPortableSearchBar.js`. IDs in `site.ts`: `rentalId 742039`, `websiteId 624345`, `slug roma284`. Usa `data-website-id` (NON rental-id). Label via `data-*` per lingua (`LABELS` nel componente).

⚠️ **Due gotcha critici per una pipeline**:
1. **View Transitions**: lo script Lodgify non si riesegue sulle navigazioni client-side Astro. Init centralizzata in `Layout.astro` legata a `astro:page-load`: se `#lodgify-search-bar` è vuoto, rimuove e ri-appende lo script. NON rimettere lo script dentro il componente.
2. **Attribuzione prenotazioni / `data-checkout-page-url`**: **NON modificarlo** (un tentativo `?ref=roma284it` è stato revertito — commit `178e18a` — perché rompeva il flusso). Per misurare l'intento di prenotazione usare l'evento GA4 **`booking_widget_interact`**, non l'URL di checkout.

---

## 8. SEO + ottimizzazione per AI agent

Obiettivo dichiarato: prenotazioni dirette + essere trovati da motori **e da AI agent**.

- **JSON-LD** (`src/lib/schema.ts`, serializzato da `<JsonLd>`): helper `organization`, **`lodgingBusiness`** (con `review[]` + `aggregateRating` + `petsAllowed` + geo/address), `apartment`, `howTo`, `place`, `contactPage`, **`blogPosting`** (con image), `webPage` (+ `Speakable`), `breadcrumb`, **`faqPage`**.
- **`robots.txt`** (`public/`): allow totale + **whitelist esplicita di AI crawler** (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-User, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Amazonbot, CCBot, ecc.). Sitemap dichiarata.
- **`llms.txt`** (statica EN, in `public/`) + **`llms-full.txt`** (dinamica, `src/pages/llms-full.txt.ts`): riassunto sito + elenco pagine/articoli per LLM.
- **hreflang reciproci** + `x-default` (IT) su tutte le pagine, generati da `getAlternates`. `canonical` su `www`.
- **`IndexNow`** (`scripts/indexnow.mjs`, Node no-deps): notifica Bing/Yandex/Naver/Seznam/Yep. Key file in `public/1fc62e1afbcd4069589dda31bf909a6b.txt`. **Da lanciare a sito online** dopo ogni pubblicazione importante: `node scripts/indexnow.mjs`. (Google = sitemap+GSC, non usa IndexNow.)
- **`vercel.json`**: redirect 301 dal vecchio sito single-page (es. `/index.html`→`/`, `/home`→`/`, `privacy-policy.html`→`/privacy-policy`) + redirect dai vecchi slug `fiere-milano`→`fiere` per ogni lingua.

---

## 9. Analytics, tracking, consenso (GDPR)

Tutto orchestrato in `Layout.astro`:
- **GA4** `G-ZWPPWW0T50` con **Consent Mode** (`denied` di default; `granted` solo se `localStorage["r284-consent"]==="granted"`). `anonymize_ip:true`.
- Helper globale **`window.track(name, params)`** + dispatcher centrale (delega su `document`, sopravvive a View Transitions) che legge attributi `data-evt` / `data-evt-view`. ~10 eventi custom: `cta_click`, `whatsapp_click`, `booking_widget_view`, **`booking_widget_interact`**, `email_click`, `lang_switch` (from/to), `scroll_depth_50/75/100`, `gallery_open`, `faq_open`.
- **Vercel Web Analytics** (iniettato dall'adapter) + **Speed Insights** (`/_vercel/speed-insights/script.js`) — cookieless, no consenso.
- **Microsoft Clarity** `x279p1twk6` — caricato solo dopo consenso (`SITE.clarityId`; vuoto = off).
- **`CookieBanner.astro`** — GDPR (Accetta/Rifiuta), `localStorage["r284-consent"]`, Google Consent Mode, evento `r284:consent`, `window.openCookieSettings`.

---

## 10. Componenti

- **Chrome**: `Layout.astro`, `Header.astro` (nav + language switcher), `Footer.astro`, `WhatsAppButton.astro`, `StickyMobileCta.astro`, `CookieBanner.astro`, `SEO.astro`, `JsonLd.astro`.
- **Home** (`src/components/home/`): `Hero`, `TrustStrip`, `UspCards`, `ApartmentPreview`, `GalleryScroll` (button + dialog `aria-modal`, Esc/frecce), `LocationSection` (mappa iframe lazy), `WhyBookDirect` (banner risparmio), `Testimonials`, `Faq`, `FinalCta`.
- **Interni**: `PageHero`, `Breadcrumbs`, `ContentSection`, `RelatedLinks`, `Icon`.

---

## 11. Deploy e vincoli operativi (rilevanti per una pipeline agentica)

- **Deploy**: Vercel, progetto `prj_MQXMCwbnkqkMgSxyQnpsxUoWWMKH`. Push su `main` → build automatica. Working tree attualmente **pulito**.
- ⚠️ **Limite sandbox git (strutturale)**: in ambienti sandbox con il repo montato, la bash **non può fare unlink/commit/rm nel mount** (limite del mount, non del disco). Conseguenza: **build di verifica in `/tmp`** (copia del repo), e **commit/push a mano dall'owner**. Una pipeline che gira in sandbox deve produrre le modifiche e lasciare il commit all'owner, oppure operare fuori dal mount.
- **Task notturno** `roma284-traduzioni-notturne` esiste ma è **idle** (i18n completo, niente più da tradurre).
- **Decisione brand chiusa**: contrasto bianco su terracotta `#c67557` (~3.45:1) resta così per scelta — **non riproporre** il fix accessibilità. Lighthouse Accessibility non a 100, accettato.
- **Niente prezzi in euro** da nessuna parte (regola di `site.ts`); l'unica leva prezzo ammessa è il messaggio soft "fino al 15% in meno" prenotando diretto.

---

## 12. Checklist: aggiungere una nuova pagina multilingua

1. `slugs.ts` → nuova `PageKey` + slug per le 11 lingue.
2. `available.ts` → aggiungere la `PageKey` alle lingue pronte in `READY` (e a `ALL_EXCEPT_BLOG`/`NO_A1` se serve).
3. Pagina IT `.astro` in `src/pages/` + voce nel dispatcher `[lang]/[slug].astro` (mappa pageKey→componente, con pattern `CMAP`).
4. Stringhe nav in `ui.ts` (`UIKey`) + link in `Header`/`Footer` (usando `bestPath`).
5. Dati in `src/data/` se servono (come `Partial<Record<Locale,T>>`).
6. OG image in `public/og/` (opzionale, altrimenti `default.jpg`) + prop `image`.
7. Build di verifica in `/tmp`; commit a mano.

---

### Riferimenti rapidi
- Repo: `github.com/nicozaga/roma284-next` (branch `main`)
- Dominio: `https://www.roma284.it`
- Spec originale completa: `PROMPT_MASTER.md` (nel repo)
- Single source of truth dati: `src/lib/site.ts`
- Source of truth i18n: `src/i18n/available.ts` (READY) + `slugs.ts`
