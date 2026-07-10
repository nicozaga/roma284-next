# Roma284 — Master Prompt per ricostruzione completa del sito

> **Come usare questo documento**: copia tutto il contenuto sotto il separatore "---" come PRIMO messaggio in una nuova chat Claude (Opus 4.8 consigliato) in Cowork desktop, con la cartella `roma284-next/` selezionata come workspace. Tutto il contesto necessario è incluso. Procedi seguendo la roadmap nella sezione finale.

---

# PROMPT: Costruisci Roma284-Next, il nuovo sito di Roma284

Ciao Claude. Sei stato incaricato di costruire da zero il nuovo sito di **Roma284**, un appartamento per affitti brevi nel centro storico di Piacenza. Il sito esistente (`www.roma284.it`) è tecnicamente decente ma genera traffico SEO insufficiente: 57 clic in 6 mesi su Google Search Console. Il rifacimento è l'occasione per partire con un'architettura corretta dal primo file scritto.

Questo prompt contiene **tutto il contesto, le decisioni già prese, le specifiche tecniche e il piano**. Non rinegoziare scelte già confermate (stack, lingue, hosting, widget di prenotazione). Procedi.

---

## 1. Identità del progetto

**Nome**: Roma284
**Cos'è**: Appartamento bilocale (50 mq, 1 camera + soggiorno con poltrone letto, 1 bagno, cucina open, patio privato) nel centro storico di Piacenza, Italia, gestito da una famiglia per affitti brevi.
**Indirizzo**: Via Roma 284, 29121 Piacenza (PC), Emilia-Romagna, Italia
**Coordinate**: 45.052236, 9.692582
**Posizionamento strategico**: 33 minuti da Milano Centrale in Frecciarossa, 900 m dalla stazione di Piacenza (9 min a piedi), 350 m da Piazza Cavalli e Duomo (5 min a piedi).
**Target principali**: turisti, viaggiatori business in trasferta a Milano, partecipanti a fiere Rho/eventi Milano, smart worker, coppie e piccoli gruppi (max 4 persone).
**Owner**: Nicolò Zaganelli — email `viaroma284@gmail.com` — tel `+39 347 810 4634`.
**Rating attuali**: Airbnb 4,97/5 su 30 recensioni; Booking 9,6/10.
**Listing esistenti**:
- Airbnb: https://www.airbnb.it/rooms/1471705900396377710
- Booking: https://www.booking.com/hotel/it/via-roma-284-apt-centro.it.html

**Mission del nuovo sito**: aumentare drasticamente le **prenotazioni dirette** (no commissioni OTA), essere trovato sia dai motori di ricerca tradizionali sia dagli AI agent (ChatGPT, Claude, Perplexity, Gemini, Copilot), e convertire più visite in prenotazioni con un design moderno, elegante e funzionale.

---

## 2. Perché stiamo rifacendo (sintesi dell'analisi GSC)

**Diagnostic ultimi 6 mesi (Dec 2025 – May 2026):**
- 57 clic totali / 848 impressioni / CTR 6,7%
- Trend mensile oscillante senza crescita strutturale
- Mobile: 45 clic/489 imp/CTR 9,2% — Desktop: 9 clic/346 imp/CTR 2,6%

**Problemi identificati (da risolvere alla base nel nuovo sito):**

1. **Keyword sbagliate**: il sito posiziona su query navigazionali ("casa via roma", "autobus roma piacenza") invece che commerciali ("appartamento Piacenza centro", "dormire vicino Milano", "smart working Piacenza"). Zero impressioni sulle keyword di valore.

2. **Versioni linguistiche non commerciali**: `/en/` ha 77 impressioni e **0 clic** in 6 mesi (idem `/pt/`, `/zh-cn/`). Probabilmente traduzioni automatiche o duplicati. Va costruita ogni lingua con HTML statico tradotto e adattato all'intento di ricerca locale.

3. **Nessuna landing page dedicata**: tutto è concentrato in una sola home page. Manca la superficie indicizzabile per la SEO long-tail.

4. **Mercati anglofoni perdono**: USA/Canada/UK 0 clic nonostante impressioni → titoli/description non vendono in EN.

5. **Performance immagini**: gallery con file da 2-6 MB rallenta tutto.

Il nuovo sito risolve **tutti questi problemi** dal day 1.

---

## 3. Decisioni già prese (NON rinegoziabili)

| Decisione | Scelta | Note |
|---|---|---|
| Framework | **Astro 5** + TypeScript | Output HTML statico, zero JS dove non serve |
| CSS | **Tailwind CSS 4** | utility-first, performante |
| Hosting | **Vercel** | utente lo usa già per altri progetti |
| Repository | Git separato da quello vecchio | repo `roma284-next` |
| Booking widget | **Lodgify** (identico all'attuale) | rental-id `742039`, website-id `624345`, slug `roma284` |
| Analytics | **Google Analytics 4** (`G-ZWPPWW0T50`) | mantenere ID esistente |
| Search Console | Già configurato sul dominio attuale | resettare proprietà se cambia struttura URL |
| Lingue | **11**: IT (default), EN, FR, ES, PT, DE, NL, SV, PL, JA, ZH-CN | tutte HTML statico tradotto, NO Google Translate widget |
| Dominio produzione | `www.roma284.it` (al lancio) | staging su URL auto-generato Vercel `*.vercel.app` |
| Email contatto | `viaroma284@gmail.com` | |

---

## 4. Stack tecnico dettagliato

- **Framework**: Astro 5 con output `static`
- **Linguaggio**: TypeScript ovunque possibile
- **Styling**: Tailwind CSS 4 + variabili CSS custom per palette
- **i18n**: routing nativo Astro + **Paraglide.js** (oppure `astro-i18n`) per traduzioni type-safe
- **Image optimization**: `astro:assets` (Sharp) → AVIF + WebP + fallback JPEG, varianti responsive con `srcset`
- **Font**: self-hosted in `/public/fonts/` con `font-display: swap` e `<link rel="preload">`
- **Icone**: SVG inline (NO librerie come Boxicons — pesano troppo)
- **Mappe**: immagine statica + click-to-load iframe (NO iframe Google Maps caricato direttamente)
- **Analytics**: `@vercel/analytics` + GA4 con script async + Microsoft Clarity (gratis, heatmap)
- **Sitemap**: `@astrojs/sitemap` (auto-generation)
- **Hreflang**: generati automaticamente da Paraglide / astro-i18n
- **Schema.org**: componente `<JsonLd>` riusabile + dati strutturati per ogni tipo pagina
- **View Transitions**: Astro 5 native (transizioni fluide tra pagine)
- **Form contatti**: serverless function Vercel + invio email via Resend o EmailJS
- **Deploy**: GitHub → Vercel (auto-deploy su push)

**File `package.json` keywords iniziali**: `astro`, `@astrojs/sitemap`, `@astrojs/tailwind`, `@astrojs/vercel`, `tailwindcss`, `sharp`, `@inlang/paraglide-js`.

---

## 5. Architettura URL e i18n

**Lingue (11)**:

| Codice | Lingua | Locale | Mercato |
|---|---|---|---|
| `it` | Italiano | `it-IT` | Default, Italia |
| `en` | English | `en-GB` | UK, USA, EU non-native, internazionale |
| `fr` | Français | `fr-FR` | Francia, Belgio FR, Svizzera FR |
| `es` | Español | `es-ES` | Spagna, LatAm |
| `pt` | Português | `pt-PT` | Portogallo, Brasile |
| `de` | Deutsch | `de-DE` | Germania, Austria, Svizzera DE |
| `nl` | Nederlands | `nl-NL` | Paesi Bassi, Belgio NL |
| `sv` | Svenska | `sv-SE` | Svezia |
| `pl` | Polski | `pl-PL` | Polonia |
| `ja` | 日本語 | `ja-JP` | Giappone |
| `zh-cn` | 中文 | `zh-CN` | Cina |

**Default lingua**: italiano servito sulla root `/`. Le altre su `/{lang}/`. Detection automatica via `Accept-Language` solo per redirect "soft" (no redirect forzato che danneggia SEO).

**Slug tradotti per lingua** (mantenere coerenza concettuale):

| Pagina (IT) | EN | FR | DE | ES | PT | NL | SV | PL | JA | ZH |
|---|---|---|---|---|---|---|---|---|---|---|
| `/appartamento` | `/the-apartment` | `/appartement` | `/wohnung` | `/apartamento` | `/apartamento` | `/appartement` | `/lagenheten` | `/apartament` | `/apartment` | `/gongyu` |
| `/quartiere` | `/area` | `/quartier` | `/umgebung` | `/zona` | `/bairro` | `/buurt` | `/omradet` | `/okolica` | `/area` | `/quyu` |
| `/come-arrivare` | `/getting-here` | `/comment-venir` | `/anreise` | `/como-llegar` | `/como-chegar` | `/route` | `/hitta-hit` | `/jak-dojechac` | `/access` | `/jiaotong` |
| `/dormire-vicino-milano` | `/stay-near-milan` | `/dormir-pres-de-milan` | `/uebernachten-bei-mailand` | `/dormir-cerca-milan` | `/dormir-perto-milao` | `/slapen-bij-milaan` | `/bo-nara-milano` | `/nocleg-blisko-mediolanu` | `/milan-near-stay` | `/milan-zhusu` |
| `/smart-working` | `/smart-working` | `/teletravail` | `/remote-arbeit` | `/teletrabajo` | `/trabalho-remoto` | `/thuiswerken` | `/distansarbete` | `/praca-zdalna` | `/remote-work` | `/yuancheng` |
| `/fiere-milano` | `/milan-fairs` | `/foires-milan` | `/milan-messen` | `/ferias-milan` | `/feiras-milao` | `/milaan-beurzen` | `/milano-massor` | `/targi-mediolan` | `/milan-fair` | `/milan-zhanhui` |
| `/eventi-milano` | `/milan-events` | `/evenements-milan` | `/milan-events` | `/eventos-milan` | `/eventos-milao` | `/milaan-events` | `/milano-event` | `/wydarzenia-mediolan` | `/milan-event` | `/milan-huodong` |
| `/visitare-piacenza` | `/visit-piacenza` | `/visiter-piacenza` | `/piacenza-besuchen` | `/visitar-piacenza` | `/visitar-piacenza` | `/piacenza-bezoeken` | `/besoka-piacenza` | `/zwiedzac-piacenza` | `/visit-piacenza` | `/piacenza-lvyou` |
| `/chi-siamo` | `/about` | `/a-propos` | `/ueber-uns` | `/sobre-nosotros` | `/sobre-nos` | `/over-ons` | `/om-oss` | `/o-nas` | `/about` | `/guanyu` |
| `/contatti` | `/contact` | `/contact` | `/kontakt` | `/contacto` | `/contato` | `/contact` | `/kontakt` | `/kontakt` | `/contact` | `/lianxi` |
| `/prenota` | `/book` | `/reserver` | `/buchen` | `/reservar` | `/reservar` | `/boeken` | `/boka` | `/zarezerwuj` | `/book` | `/yuding` |
| `/faq` | `/faq` | `/faq` | `/faq` | `/faq` | `/faq` | `/faq` | `/vanliga-fragor` | `/faq` | `/faq` | `/changjian-wenti` |
| `/blog` | `/blog` | `/blog` | `/blog` | `/blog` | `/blog` | `/blog` | `/blogg` | `/blog` | `/blog` | `/boke` |

Lo slug `/blog/` mantiene URL post identico per lingua (slug-based), traduzione del titolo nei front-matter.

**Totale pagine indicizzabili**: ~14 pagine × 11 lingue = **154 pagine**.

---

## 6. Pagine del sito (specifiche per pagina)

### 6.1 Home page (`/`)

**Scopo**: prima impressione + conversion.

**Keyword target (IT)**: "appartamento Piacenza centro", "affitto breve Piacenza", "Roma284", "dormire vicino Milano".

**Sezioni in ordine**:

1. **Hero**
   - Immagine pieno schermo (foto patio o salotto, ottimizzata)
   - H1: "Roma284 — Appartamento nel cuore di Piacenza"
   - Sub-headline: "La tua base elegante per Milano. 33 minuti in Frecciarossa, infinite possibilità."
   - 2 CTA: primario "Verifica disponibilità" (scroll a #book), secondario "Scopri l'appartamento" (scroll a #apartment)
   - Indicatore scroll animato

2. **Trust strip**
   - Sfondo crema, barra orizzontale
   - "Valutato 4,97/5 su Airbnb · 9,6/10 su Booking · 30+ recensioni verificate"
   - Loghi piattaforme

3. **USP cards** (4 card)
   - WiFi 1 Gbit/s — "Lavora come in ufficio"
   - 33 min da Milano — "Frecciarossa a 900 m"
   - Centro storico — "Tutto a piedi"
   - Patio privato — "Il tuo spazio all'aperto"

4. **Gallery scroll** (orizzontale, scroll-snap CSS puro, no JS)
   - 10 foto ottimizzate, click → lightbox
   - Caption descrittive (alt text dense di keyword naturali)

5. **L'appartamento — anteprima**
   - 2 colonne: descrizione + amenities
   - CTA "Vedi tutti i dettagli" → `/appartamento`

6. **Posizione strategica**
   - Mappa statica + overlay info
   - Lista collegamenti Milano (orari treni, durata)
   - Punti di interesse a piedi
   - CTA "Come arrivare" → `/come-arrivare`

7. **FAQ visibili** (8-10 domande, no accordion al primo livello)
   - Q&A scritte in modo citation-friendly per AI
   - Schema FAQPage

8. **Recensioni testuali** (4-6 testimonial in-page)
   - Nome ospite, data, fonte (Airbnb/Booking), 2-3 frasi
   - NON solo link esterni
   - Schema Review con autori

9. **Perché prenotare diretto** (3 vantaggi NON monetari)
   - Check-in flessibile su richiesta
   - Contatto diretto con i proprietari
   - Conferma immediata via WhatsApp/email

10. **Booking widget Lodgify** (vedi sezione 13)

11. **Final CTA**: "Hai domande? Scrivici su WhatsApp"

12. **Footer**: contatti, lingue, link a tutte le landing, social, sitemap, privacy.

### 6.2 L'appartamento (`/appartamento`)

**Scopo**: dettaglio completo per chi vuole sapere tutto prima di prenotare.

**Sezioni**:
- Gallery completa
- Planimetria (se disponibile)
- Descrizione lunga
- Amenities raggruppate (Comfort, Tecnologia, Cucina, Lavanderia, Spazi)
- Specifiche tecniche (50 mq, 1 camera, 1 bagno, max 4 persone, no animali, no fumatori)
- Schema Apartment dettagliato
- CTA prenotazione

### 6.3 Quartiere (`/quartiere`)

**Scopo**: contesto locale, attrazioni vicine, suggerimenti.

**Sezioni**:
- Introduzione al centro storico di Piacenza
- Cosa c'è a piedi (Duomo, Piazza Cavalli, zona pedonale)
- Lista ristoranti consigliati (mantenere dal sito vecchio: Tosello, Pizzikotto, Pizzium, Vecchia Piacenza, La Pireina, Osteria d'una volta, Crudo, Izakaya, Sosushi, Eataly)
- Supermercati e farmacie
- Schema Place per ogni POI

### 6.4 Come arrivare (`/come-arrivare`)

**Scopo**: chi cerca "come arrivare a Piacenza da Milano/Malpensa/Linate".

**Sezioni**:
- Da Milano Centrale (Frecciarossa, 33 min, 46+ treni/giorno)
- Da Malpensa (treno + cambio, ~2h)
- Da Linate (taxi + treno o auto, ~1h30)
- Da Bergamo Orio al Serio
- In auto (autostrada A1, parcheggi vicini)
- Dall'aeroporto di Bologna
- Schema HowTo con passi numerati

### 6.5 Landing — Dormire vicino Milano (`/dormire-vicino-milano`)

**Keyword target IT**: "dormire vicino Milano", "alloggio economico Milano", "alternativa hotel Milano", "appartamento vicino Milano".
**EN equivalents**: "stay near Milan", "affordable accommodation Milan", "Milan alternative hotel".

**Sezioni**:
- Perché Piacenza è la base intelligente per Milano
- Confronto: tempi e collegamenti
- Tariffe treni indicative
- Vantaggi vs hotel Milano (NO menzione prezzi specifici)
- Esempi di itinerari (giornaliero a Milano)
- FAQ specifiche
- CTA prenotazione

### 6.6 Landing — Smart working (`/smart-working`)

**Sezioni**:
- WiFi 1 Gbit/s con speed test screenshot
- Postazione di lavoro (tavolo, luce, comfort)
- Stanza tranquilla, no rumori
- Caffè di qualità in casa
- Coworking vicini se serve varietà
- Esempio giornata tipo
- Recensioni di chi ha lavorato da remoto da qui

### 6.7 Landing — Fiere Milano (`/fiere-milano`)

**Sezioni**:
- Fiera Rho: come arrivare da Piacenza (Frecciarossa + M1)
- Calendario fiere principali aggiornabile (Salone del Mobile, MICAM, MIDO, ecc.)
- Vantaggi rispetto a hotel in zona fiera durante eventi
- Schema Event per le fiere ricorrenti

### 6.8 Landing — Eventi Milano (`/eventi-milano`)

**Sezioni**:
- San Siro (Inter, Milan, concerti)
- Forum di Assago
- Ippodromo Snai
- Teatri (Scala, Arcimboldi)
- Come tornare la sera (ultimo treno 23:52)

### 6.9 Landing — Visitare Piacenza (`/visitare-piacenza`)

**Sezioni**:
- Cosa vedere in 1 giorno / weekend / 3 giorni
- Palazzo Farnese, Duomo, Piazza Cavalli, Galleria Ricci-Oddi
- Eventi stagionali
- Cucina piacentina

### 6.10 Chi siamo (`/chi-siamo`)

- Storia della gestione familiare
- Foto della famiglia
- Filosofia ospitalità
- Schema Person + Organization

### 6.11 Contatti (`/contatti`)

- Form contatto (serverless Vercel + Resend)
- Email, telefono, WhatsApp
- Indirizzo + mappa
- Orari risposta
- Schema ContactPage

### 6.12 Prenota (`/prenota`)

- Widget Lodgify a tutta pagina
- Sopra: trust signal + "Perché prenotare diretto"
- Sotto: FAQ specifiche su prenotazione

### 6.13 FAQ (`/faq`)

- 25-30 domande organizzate per categoria (Prenotazione, Check-in, Servizi, Posizione, Pagamenti, Cancellazione)
- Schema FAQPage completo
- Search/filter client-side

### 6.14 Blog (`/blog`)

**Indice blog** + categorie. Articoli iniziali (almeno 6, scritti in IT, tradotti):
1. "Da Piacenza a Milano: la guida completa al Frecciarossa"
2. "10 ristoranti piacentini secondo i locals"
3. "Eventi a Milano 2026: tutto quello che devi sapere"
4. "Piacenza in 48 ore: itinerario perfetto"
5. "Smart working in Italia: perché Piacenza è la scelta giusta"
6. "Cosa portare per un soggiorno a Piacenza"

Articoli successivi: 1-2 al mese, evergreen + stagionali.

---

## 7. AI SEO (Generative Engine Optimization)

Questa è la sezione critica e poco coperta dalla SEO tradizionale. Implementare TUTTO quanto segue.

### 7.1 `/llms.txt` nella root

Standard llmstxt.org. Markdown compatto con link diretti ai contenuti chiave. Esempio struttura:

```markdown
# Roma284

> Boutique apartment in the historic center of Piacenza, Italy. 33 minutes from Milan Centrale by Frecciarossa high-speed train. 1 Gbit/s WiFi, private patio, fully equipped kitchen. Ideal for business travelers, smart workers, and tourists exploring Milan and Northern Italy.

## Key facts
- Location: Via Roma 284, 29121 Piacenza, Italy
- Coordinates: 45.052236, 9.692582
- Distance to Milan Centrale: 33 min by Frecciarossa
- Distance to Piacenza station: 900 m (9 min walk)
- Capacity: up to 4 guests
- WiFi: 1 Gbit/s fiber
- Rating: 4.97/5 (Airbnb), 9.6/10 (Booking.com)

## Pages
- [Home](/): overview
- [The apartment](/en/the-apartment): full details
- [Getting here](/en/getting-here): transport from Milan, airports
- [Stay near Milan](/en/stay-near-milan): why Piacenza beats Milan hotels
- [Smart working](/en/smart-working): remote work setup
- [Book direct](/en/book): direct booking with best benefits
- [FAQ](/en/faq): common questions
- [Contact](/en/contact)

## Optional
- [Blog](/en/blog): travel guides for Piacenza and Milan
```

### 7.2 `/llms-full.txt`

Versione estesa con TUTTI i contenuti del sito convertiti in markdown puro. Generato in build time da Astro.

### 7.3 Schema.org esaustivo

Ogni tipo di pagina ha il proprio JSON-LD strutturato. Implementare componente `<JsonLd>` riusabile.

**Tipi obbligatori**:

- `LodgingBusiness` (home, mantenuto da sito vecchio + estensioni)
- `Apartment` (pagina appartamento)
- `FAQPage` (home + faq + ogni landing con FAQ)
- `Review` con `author`, `datePublished`, `reviewBody`, `reviewRating` (estrarre 10-15 recensioni reali da Airbnb/Booking e inserire in pagina home + reviews dedicata)
- `AggregateRating` (mantenere 4.97 con conteggio aggiornato)
- `HowTo` (pagina "Come arrivare", step numerati)
- `Article` + `BlogPosting` (ogni post blog con `author`, `datePublished`, `image`, `articleBody`)
- `Place` per ogni POI nella pagina quartiere
- `BreadcrumbList` su ogni pagina interna
- `ImageObject` con `caption`, `creator`, `license`
- `Speakable` su FAQ e key facts (per voice assistant)
- `Organization` (footer) con `sameAs` linkando Airbnb listing, Booking listing, Google Business, Instagram, Facebook

**`sameAs` critico** (aiuta AI a riconciliare l'entità):
```json
"sameAs": [
  "https://www.airbnb.it/rooms/1471705900396377710",
  "https://www.booking.com/hotel/it/via-roma-284-apt-centro.it.html",
  "https://www.google.com/maps/place/Via+Roma+284,+Piacenza"
]
```

### 7.4 `robots.txt` esplicito per AI crawlers

```
User-agent: *
Allow: /
Sitemap: https://www.roma284.it/sitemap-index.xml

# AI crawlers — esplicitamente abilitati
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: claude-web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: CCBot
Allow: /

User-agent: Diffbot
Allow: /

User-agent: FacebookBot
Allow: /
```

### 7.5 Contenuti citation-friendly

Regole di scrittura per OGNI pagina:

1. **Frasi auto-contenute**: ogni paragrafo deve fare senso da solo. "Roma284 è un appartamento di 50 mq nel centro storico di Piacenza, a 33 minuti da Milano Centrale in treno Frecciarossa." Non "L'appartamento ha 50 mq."

2. **Dati numerici esatti** ogni volta che possibile:
   - 33 minuti (non "circa mezz'ora")
   - 900 metri / 9 minuti a piedi
   - 1 Gbit/s
   - 4,97/5 su 30 recensioni
   - 46-52 treni diretti al giorno
   - prima corsa 06:07, ultima 23:52

3. **Domande come H2/H3** con risposta immediata sotto.

4. **Definizioni esplicite all'inizio** di ogni sezione: "Cos'è la Frecciarossa? Il treno ad alta velocità Trenitalia che collega Milano a Roma fermando a Piacenza."

5. **Liste numerate** per processi (come arrivare, come prenotare).

6. **Headings descrittivi**: "Come arrivare da Milano Centrale in 33 minuti" non "Trasporti".

### 7.6 Versione markdown delle pagine

Ogni pagina ha un'alternativa `.md` accessibile via URL (es. `/en/about.md`). Gli LLM la preferiscono perché è più pulita. Astro la genera in build time.

Implementazione: endpoint dinamico `[...slug].md.ts` che serve il content collection in markdown puro con front-matter.

### 7.7 Meta tag aggiuntivi

```html
<meta name="ai-content-declaration" content="human-written">
<meta name="citation_title" content="...">
<meta name="citation_author" content="Roma284">
<meta name="citation_publisher" content="Roma284">
<link rel="alternate" type="text/markdown" href="/llms.txt">
<link rel="alternate" type="text/markdown" href="/llms-full.txt">
```

### 7.8 Open Graph + Twitter Cards perfetti

Ogni singola pagina ha OG e Twitter Card personalizzati: titolo, descrizione, immagine specifica (1200x630), locale corretto per lingua.

---

## 8. SEO tradizionale

### 8.1 Title e description (regole)

- **Title**: max 60 caratteri, keyword primaria all'inizio, brand alla fine. Esempio EN: "Apartment in Piacenza, 33 min from Milan | Roma284"
- **Description**: max 155 caratteri, include keyword secondaria + CTA. Esempio: "Boutique apartment in Piacenza historic center. 33 min from Milan by train. 1 Gbit/s WiFi, private patio. Book direct for best rates."
- **Univoci per ogni pagina × ogni lingua** (154 title diversi)
- **Scritti per lingua**, NON tradotti letteralmente da IT

### 8.2 Internal linking

- Footer linka tutte le landing principali
- Ogni landing linka 3-4 landing affini + home
- Blog post linkano home + landing pertinenti
- Breadcrumb visibili su ogni pagina interna

### 8.3 Hreflang

Generati automaticamente. Ogni pagina dichiara TUTTE le sue varianti linguistiche + `x-default` (IT).

### 8.4 Sitemap

- `sitemap-index.xml` che linka:
  - `sitemap-pages.xml` (tutte le pagine statiche)
  - `sitemap-blog.xml` (articoli)
  - `sitemap-images.xml` (gallery + foto in-page)
- Priority differenziate (home 1.0, landing 0.9, blog 0.7)
- `lastmod` aggiornato in build time

### 8.5 Canonical

Ogni pagina punta a sé stessa. Versioni linguistiche NON puntano a IT.

---

## 9. Design system

### 9.1 Palette colori

```css
/* Tailwind config — colori brand */
:root {
  --terracotta: #C67557;        /* primario - CTA, accenti */
  --terracotta-dark: #A85C47;   /* hover, dark variants */
  --terracotta-light: #D4927A;  /* highlights */
  --verde-salvia: #8A9A7B;      /* secondario */
  --verde-salvia-dark: #6B7A5E;
  --crema: #FAF5EE;             /* base/sfondo */
  --avorio: #F5EFE6;            /* alternativo sfondo */
  --antracite: #1A1A1A;         /* testi principali */
  --grigio: #6B6B6B;            /* testi secondari */
}
```

Mantenere coerenza con palette già esistente (terracotta + verde salvia).

### 9.2 Tipografia

- **Headline (H1, H2)**: **Fraunces** (serif elegante moderna) o **Cormorant Garamond** — peso 400/500/600, italic disponibile
- **Body**: **Inter** o **Manrope** — pesi 300/400/500/600 — già usato in sito vecchio
- **Mix consigliato**: Fraunces per headline e quote, Inter per tutto il resto
- Self-hosted in `/public/fonts/`, preload del woff2 critico

### 9.3 Spacing e layout

- Mobile-first, breakpoint Tailwind standard (sm 640, md 768, lg 1024, xl 1280)
- Container max 1280px, padding generoso
- Sezioni con padding verticale ampio (py-20 lg:py-32)
- White space generoso, no compressione

### 9.4 Direzione design

**Stile**: elegante mediterraneo moderno. Sobrio, fotografico, premium ma accessibile.

**Riferimenti visivi** (non copiare, ispirarsi):
- Sites di boutique hotel italiani moderni
- Airbnb Plus listings con sito proprio
- Studio Twentyseven Inn
- estetica "slow living" con foto grandi e tipografia raffinata

### 9.5 Micro-interazioni

- Hover sottili (translate y, opacity, scale 1.02)
- Scroll reveal leggero (fade-in + slight up) — usare Intersection Observer, no librerie esterne
- View Transitions API per navigazione tra pagine
- Loading state minimale, no spinner aggressivi
- Niente parallax pesanti che danneggiano performance

---

## 10. Conversion features

Tutte le seguenti sono **persistenti** sul sito, non solo home.

### 10.1 Sticky mobile CTA
- Bottone fisso in basso su mobile: "Verifica disponibilità"
- Indica se ci sono date selezionate
- Scroll a `#book` o apre widget Lodgify

### 10.2 WhatsApp floating button
- Bottone tondo in basso a destra (desktop + mobile)
- Click → apre WhatsApp con messaggio precompilato: "Ciao, vorrei info su Roma284"
- Numero: `+39 347 810 4634`

### 10.3 Mini-widget date in navbar (desktop)
- Input compatti check-in/check-out
- Salva date in localStorage per pre-compilare Lodgify dopo

### 10.4 Trust signal sopra il booking widget
- Mostra rating + recensioni proprio prima del calendario

### 10.5 "Perché prenotare diretto" (NON parlare di prezzi)
- 3 card con vantaggi non-monetari:
  1. **Check-in flessibile**: orari su misura per il tuo viaggio
  2. **Contatto diretto con i proprietari**: risposte immediate, niente intermediari
  3. **Conferma immediata**: prenoti ora, sai subito che è confermato

### 10.6 Exit-intent modal (solo desktop, una volta a sessione)
- Quando il cursore esce dalla viewport in alto
- "Hai domande prima di prenotare? Scrivici su WhatsApp"
- NON aggressive popup

### 10.7 Email capture (nice-to-have)
- "Ricevi consigli per il tuo viaggio a Piacenza" (newsletter futura)
- In footer, no popup invasivi

### 10.8 Recensioni testuali in-page
- 4-6 testimonial estratti da Airbnb/Booking con nome, data, fonte
- NON solo link esterni (perdi gli utenti)

---

## 11. Performance target

**Lighthouse**: 95+ Performance, 100 SEO, 100 Best Practices, 100 Accessibility.

**Core Web Vitals**:
- LCP < 1.5s
- CLS < 0.05
- INP < 100ms

**Come ottenerli**:
- HTML statico (Astro)
- Zero JS sulla home eccetto carousel CSS scroll-snap + widget Lodgify (lazy load on scroll)
- CSS critico inline, resto async
- Font self-hosted woff2 + preload + `font-display: swap`
- Immagini AVIF + WebP fallback, lazy + dimensioni esplicite
- Mappa: immagine statica + click-to-load
- Icone SVG inline (no Boxicons)
- Cloudflare/Vercel edge caching

Test obbligatori prima del lancio:
- PageSpeed Insights (mobile + desktop)
- WebPageTest
- Lighthouse CI in pipeline Vercel

---

## 12. Asset esistenti da riutilizzare

Dalla cartella `Roma284/` originale, copiare in `roma284-next/src/assets/`:

- **Cartella `gallery/`** intera (10+ foto appartamento) → da ottimizzare con `astro:assets`
- **`IMG_4058-*.{jpg,webp}`** (hero image, varianti responsive) → ricomprimere
- **`icon.svg`** (favicon)
- **`gallery/chi-siamo.jpg`** (foto chi siamo)

**Contenuti testuali** (NON copiare HTML, riscrivere): estrarre da `Roma284/index.html` le descrizioni di:
- Appartamento (sezione "L'Appartamento")
- Zona notte e soggiorno, cucina, comfort, patio
- Quartiere (collegamenti Milano, info Piacenza)
- Ristoranti (Tosello, Pizzikotto, Pizzium, Vecchia Piacenza, La Pireina, Osteria d'una volta, Crudo, Izakaya, Sosushi, Eataly + indirizzi e descrizioni)
- Supermercati (Sigma, Esselunga, Eataly)
- Chi siamo

Questi diventano la base IT, da rielaborare e arricchire con keyword target, poi tradurre.

**Configurazioni da mantenere**:
- Lodgify: `data-rental-id="742039" data-website-id="624345" data-slug="roma284"`
- Google Analytics: `G-ZWPPWW0T50`
- Email contatto: `viaroma284@gmail.com`
- Telefono: `+39 347 810 4634`
- Coordinate GPS: `45.052236, 9.692582`

---

## 13. Widget Lodgify (CRITICO — non modificare)

Mantenere identico al sito vecchio. Configurazione:

```html
<div
  id="lodgify-book-now-box"
  data-rental-id="742039"
  data-website-id="624345"
  data-slug="roma284"
  data-language-code="it"  <!-- cambiare per lingua -->
  data-new-tab="true"
  data-version="stable"
  data-has-guests-breakdown
></div>
<script src="https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js" defer></script>
```

CSS variables Lodgify per matchare il design (palette terracotta):

```css
:root {
  --ldg-bnb-background: #ffffff;
  --ldg-bnb-border-radius: 16px;
  --ldg-bnb-box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.15);
  --ldg-bnb-padding: 24px;
  --ldg-bnb-input-background: #f8f8f8;
  --ldg-bnb-button-border-radius: 50px;
  --ldg-bnb-color-primary: #C67557;
  --ldg-bnb-color-primary-lighter: #d4927a;
  --ldg-bnb-color-primary-darker: #A85C47;
  --ldg-bnb-color-primary-contrast: #ffffff;
  --ldg-component-calendar-cell-selection-bg-color: #C67557;
  --ldg-component-calendar-cell-selection-color: #ffffff;
  --ldg-component-calendar-cell-selected-bg-color: #d4927a;
  --ldg-component-calendar-cell-selected-color: #ffffff;
  --ldg-bnb-font-family: inherit;
}
```

**Implementare**:
- Caricamento lazy (Intersection Observer) per non bloccare LCP
- `data-language-code` dinamico per lingua corrente
- Labels tradotti via prop `data-*-label` per lingua
- Componente Astro `<BookingWidget locale="..." />`

---

## 14. Anti-pattern (cosa NON fare)

- **NON usare Google Translate widget** — danneggia SEO, contenuti duplicati
- **NON tradurre letteralmente** da IT → ogni lingua deve essere localizzata per intento di ricerca
- **NON usare Boxicons** (200 KB per icone non usate) → SVG inline
- **NON caricare Google Maps iframe direttamente** → immagine statica + click-to-load
- **NON usare librerie animation pesanti** (GSAP, Framer Motion full) → CSS + Intersection Observer
- **NON inserire prezzi nel sito** (la richiesta dell'owner è esplicita: zero menzioni di prezzi)
- **NON spingere troppo verso Airbnb/Booking** nelle CTA → l'obiettivo è la prenotazione diretta
- **NON aggiungere popup invasivi** (cookie banner ok, exit-intent leggero ok, no chatbot popup aggressivi)
- **NON usare `<div>` per tutto** → semantic HTML (`<article>`, `<section>`, `<nav>`, `<aside>`, `<main>`)
- **NON dimenticare `alt` text descrittivi** su ogni immagine
- **NON lasciare title/description duplicati** tra pagine
- **NON usare lazy loading sulla hero image** (deve essere LCP veloce)
- **NON mettere JS bloccante in `<head>`**
- **NON usare cookie/storage senza consenso** (GDPR)
- **NON dimenticare il widget Lodgify** in `/prenota` e nella home
- **NON inserire link spam o keyword stuffing**

---

## 15. Tracking & misurazione

### 15.1 Google Analytics 4 (`G-ZWPPWW0T50`)

Eventi custom obbligatori:
- `booking_widget_view` (widget Lodgify entra in viewport)
- `booking_widget_interact` (utente clicca dentro)
- `whatsapp_click`
- `email_click`
- `lang_switch` (con da/a)
- `cta_click` (con label CTA)
- `scroll_depth_50` / `scroll_depth_75` / `scroll_depth_100`
- `gallery_open`
- `faq_open` (con domanda)

### 15.2 Microsoft Clarity (gratis)

Setup script. Heatmap + session recording per capire dove gli utenti si bloccano.

### 15.3 Vercel Analytics

Per Core Web Vitals reali (RUM).

### 15.4 Google Search Console

Sitemap inviata, monitoraggio settimanale query.

---

## 16. Roadmap step-by-step

Procedere settimana per settimana. Non saltare step.

### Settimana 1 — Foundations
1. Inizializzare progetto Astro: `npm create astro@latest roma284-next -- --template minimal --typescript strict`
2. Installare dipendenze: Tailwind, sitemap, vercel adapter, sharp, paraglide
3. Configurare `astro.config.mjs` con i18n, sitemap, integrations
4. Setup repository Git + connessione Vercel (deploy auto)
5. Creare design tokens (colori, font, spacing) in Tailwind config
6. Creare layout base `Layout.astro` con `<head>` SEO-complete
7. Setup componente `<JsonLd>` riusabile
8. Setup componente `<SEO>` (title, description, OG, hreflang)
9. Setup font self-hosted (Fraunces + Inter)
10. Copiare asset da `Roma284/` (gallery, hero, icon)

### Settimana 2 — Home page IT
1. Sviluppare home page IT completa con tutte le 12 sezioni della 6.1
2. Componenti: Hero, TrustStrip, USPCards, GalleryScroll, ApartmentPreview, LocationSection, FAQ, Testimonials, WhyBookDirect, BookingWidget, FinalCTA, Footer
3. Implementare sticky mobile CTA + WhatsApp button
4. Schema.org completo (LodgingBusiness, FAQPage, Organization, AggregateRating, Review × 4-6, BreadcrumbList)
5. Test Lighthouse → target 95+ subito

### Settimana 3 — Pagine interne IT + landing IT
1. `/appartamento`, `/quartiere`, `/come-arrivare`, `/chi-siamo`, `/contatti`, `/prenota`, `/faq`
2. Landing: `/dormire-vicino-milano`, `/smart-working`, `/fiere-milano`, `/eventi-milano`, `/visitare-piacenza`
3. Blog index `/blog` + 2 articoli seed in IT
4. Form contatti con serverless function + Resend
5. llms.txt + llms-full.txt

### Settimana 4 — Traduzioni Tier 1 + Tier 2
1. EN, FR, DE, ES (Tier 1 — qualità massima, revisione consigliata)
2. PT, NL, PL, SV (Tier 2 — buona qualità)
3. JA, ZH-CN (Tier 2 — buona qualità, attenzione registro)
4. Generare hreflang automatico
5. Verificare slug tradotti per lingua

### Settimana 5 — Polish, blog, lancio
1. Completare 6 articoli blog iniziali in tutte le lingue
2. Ottimizzazione immagini finale
3. Test cross-browser + cross-device
4. Test accessibility (WCAG 2.1 AA)
5. Test Lighthouse mobile + desktop
6. Setup redirect 301 da URL vecchi a nuovi (lista nel file `vercel.json`)
7. Submit sitemap a GSC e Bing Webmaster
8. Setup Microsoft Clarity
9. Test widget Lodgify in tutte le lingue
10. Deploy in produzione su `www.roma284.it`
11. Monitoraggio post-lancio 4-6 settimane

---

## 17. Definition of Done

Il sito è pronto per il lancio quando:

- [ ] 154 pagine indicizzabili (14 × 11 lingue)
- [ ] Lighthouse 95+ Performance / 100 SEO / 100 Best Practices / 100 Accessibility (mobile + desktop)
- [ ] Core Web Vitals tutti verdi
- [ ] Schema.org valida su [validator.schema.org](https://validator.schema.org/) e [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Hreflang validi su [hreflang.org test](https://hreflang.org/)
- [ ] llms.txt e llms-full.txt accessibili
- [ ] robots.txt completo con tutti gli AI crawler
- [ ] Sitemap-index.xml generato e accessibile
- [ ] Widget Lodgify funzionante in tutte le 11 lingue
- [ ] GA4 + Clarity + Vercel Analytics attivi
- [ ] Form contatti testato (email arriva)
- [ ] WhatsApp button apre chat corretta
- [ ] Sticky CTA mobile funzionante
- [ ] Tutte le immagini hanno alt text descrittivi
- [ ] Tutti i title/description sono univoci per pagina × lingua
- [ ] Redirect 301 dai URL vecchi configurati in `vercel.json`
- [ ] Test cross-browser (Safari, Chrome, Firefox, Edge)
- [ ] Test mobile (iOS Safari, Android Chrome)
- [ ] Accessibility: navigazione da tastiera completa, screen reader testato
- [ ] GDPR cookie banner conforme (se uso cookie analitici)
- [ ] Privacy policy e termini accessibili (riprendere dal sito vecchio)
- [ ] Dominio collegato, HTTPS attivo, www → no-www redirect deciso e impostato

---

## 18. Note finali per Claude

- Procedi **iterativamente**, settimana per settimana. Non cercare di fare tutto subito.
- **Chiedi sempre** prima di prendere decisioni che cambiano l'architettura o aggiungono dipendenze pesanti.
- Quando scrivi contenuti, scrivi in **italiano nativo prima**, poi traduci/adatta. Mai partire da una traduzione.
- **Test Lighthouse frequenti**: dopo ogni componente nuovo, non solo a fine progetto.
- **Commit Git** frequenti con messaggi chiari, una feature per commit.
- **Preview deploy automatico** su Vercel per ogni branch.
- Se trovi conflitti tra specifiche di questo documento e best practice tecniche correnti, **segnala il conflitto** e proponi una soluzione, non procedere senza confermare.
- L'owner si chiama **Nicolò** e preferisce risposte sintetiche, dirette, in italiano. Niente preamboli. Niente riepiloghi finali ridondanti.

Procedi con la **Settimana 1 — Foundations**. Inizia inizializzando il progetto Astro e setup di base. Buon lavoro.
