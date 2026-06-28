# Frontmatter Spec — articoli blog roma284-next

> Contratto che il **Writer** deve rispettare per generare `.md` che superano la build Astro al primo colpo.
> Verificato sui file reali del repo (`src/content.config.ts`, `src/i18n/slugs.ts`, articoli `frecciarossa` IT/EN).

## 1. Schema (da `src/content.config.ts`)

```ts
schema: z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.string().default("Guide"),
  lang: z.string().default("it"),
  translationKey: z.string().optional(),
  slug: z.string().optional(),
  draft: z.boolean().default(false),
})
```

## 2. Campi — regole esatte

| Campo | Obblig. | Formato | Note |
|---|---|---|---|
| `title` | sì | stringa tra **doppi apici**, `"` interni come `\"` | ≤ ~60 caratteri per la SERP. Apostrofi ok dentro i doppi apici. |
| `description` | sì | stringa tra doppi apici | meta description, 150–160 caratteri. |
| `pubDate` | sì | `YYYY-MM-DD` **senza apici** | = data di generazione. Identica in tutte e 11 le lingue dello stesso articolo. |
| `category` | sì | stringa tra doppi apici | dalla mappa §6. Localizzata per lingua. |
| `lang` | sì | `"it"`, `"en"`, … | una delle 11 di `LOCALES`. |
| `translationKey` | sì | kebab-case tra apici | **identica** nelle 11 versioni; **univoca** vs articoli esistenti e già pubblicati (dedup). |
| `slug` | solo **non-IT** | stringa tra apici | = nome file senza cartella/estensione. **Assente sull'IT.** |
| `updatedDate` | no | `YYYY-MM-DD` | solo se si aggiorna un articolo esistente. |
| `draft` | no | bool | omesso ⇒ `false`. La pipeline pubblica direttamente. |

## 3. IT (master) vs non-IT

**IT** — file in `src/content/blog/<it-slug>.md` (radice, niente cartella lingua):

```yaml
---
title: "Da Piacenza a Milano: la guida completa al Frecciarossa"
description: "Quanto dura, quanti treni ci sono e come muoversi: la guida pratica per andare da Piacenza a Milano in Frecciarossa in 33 minuti."
pubDate: 2026-05-20
category: "Trasporti"
lang: "it"
translationKey: "frecciarossa"
---
```
→ niente campo `slug`; l'URL è `/blog/<nome-file>/`.

**non-IT** — file in `src/content/blog/<lang>/<lang-slug>.md`:

```yaml
---
title: "From Piacenza to Milan: the complete Frecciarossa guide"
description: "How long it takes, how many trains run and how to get around…"
pubDate: 2026-05-20
category: "Transport"
lang: "en"
translationKey: "frecciarossa"
slug: "frecciarossa-piacenza-milan"
---
```
→ `slug` **presente** e **uguale al nome file** (senza cartella). L'URL è `/<lang>/blog/<slug>/`.

## 4. Nome file e slug — regole critiche

- **ASCII puro, kebab-case**, niente diacritici. Lo si vede negli slug del sito: sv `bo-nara-milano` (non *närа*), de `uebernachten-bei-mailand`.
- **ja / zh-cn**: lo slug NON è in scrittura nativa ma in **romaji / pinyin o inglese** (es. ja `trade-fairs`, zh-cn `zhanhui`). Il titolo resta in lingua nativa, lo slug no.
- Slug localizzato e **ottimizzato per l'intento di ricerca locale**, non traduzione letterale.
- non-IT: `basename(file) == slug`. IT: `basename(file) == slug-IT-desiderato`.
- L'`id` di collection include la cartella lingua (anti-collisione): file omonimi in lingue diverse non si sovrascrivono.

## 5. Corpo dell'articolo (Markdown)

Struttura osservata: paragrafo intro → sezioni `##` → **grassetto** sui dati chiave → lista finale "In sintesi" (opzionale) → CTA.

- Niente `#` H1 nel corpo (il titolo viene dal frontmatter).
- Link interni **localizzati**, sempre con slash iniziale e finale:
  - IT: `/prenota/`, `/fiere/`, `/come-arrivare/`
  - non-IT: `/<lang>/<slug-localizzato>/` es. `/en/book/`, `/fr/foires/`
  - Slug pagine da `src/i18n/slugs.ts` (la pipeline ne tiene una copia).
- **CTA**: gli articoli evento/fiera chiudono con un invito soft alla pagina `book` localizzata (è la leva prenotazione diretta). Es. IT `[Verifica la disponibilità](/prenota/).`
- Tono del brand: **mai** nominare Airbnb/Booking, **nessun prezzo in euro**, unica leva prezzo ammessa "fino al 15% in meno" prenotando diretto. Valorizzare: 33 min da Milano, pet-friendly gratis, patio privato, self check-in con smart lock, WiFi 1 Gbit.

## 6. Mappa categorie (localizzata)

Riusare quelle esistenti dove pertinente; le due nuove per la pipeline sono **Eventi** e **Fiere**.

| key | it | en | fr | es | pt | de | nl | sv | pl | ja | zh-cn |
|---|---|---|---|---|---|---|---|---|---|---|---|
| eventi | Eventi | Events | Événements | Eventos | Eventos | Veranstaltungen | Evenementen | Evenemang | Wydarzenia | イベント | 活动 |
| fiere | Fiere | Fairs | Salons | Ferias | Feiras | Messen | Beurzen | Mässor | Targi | 見本市 | 展会 |
| trasporti | Trasporti | Transport | Transport | Transporte | Transporte | Anreise | Vervoer | Transport | Transport | 交通 | 交通 |
| itinerari | Itinerari | Itineraries | Itinéraires | Itinerarios | Itinerários | Reiserouten | Routes | Resvägar | Trasy | 旅程 | 行程 |

(Default schema = `"Guide"` se nessuna combacia.)

## 7. Checklist di validità (il Writer deve garantirla)

- [ ] `pubDate` formato data, identica fra le 11 lingue.
- [ ] `translationKey` identica fra le 11 lingue, univoca a livello di sito.
- [ ] `slug` presente su tutte le non-IT, assente sull'IT; `basename == slug`.
- [ ] slug ASCII kebab-case (romaji/pinyin per ja/zh).
- [ ] `title`/`description` con doppi apici, `"` interni escapati.
- [ ] file IT in radice, non-IT in `<lang>/`.
- [ ] link interni localizzati con slash iniziale+finale.
- [ ] nessun H1 nel corpo; niente Airbnb/Booking; nessun prezzo €.
- [ ] `npx astro check` + `astro build` verdi.
