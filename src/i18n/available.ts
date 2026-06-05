import { DEFAULT_LOCALE, type Locale } from "./config";
import { PAGE_KEYS, type PageKey } from "./slugs";

/**
 * Disponibilità lingue per pagina — single source of truth.
 * Governa hreflang, language switcher e generazione route.
 *
 * IT ha sempre tutte le pagine. Per le altre lingue: aggiungere la lingua
 * alla mappa READY SOLO quando il contenuto è completo e la build è verde,
 * così non si creano mai link rotti né alternate verso pagine inesistenti.
 *
 * Il blog resta IT-only (routing collection dedicato), quindi è escluso.
 */
const ALL_EXCEPT_BLOG: PageKey[] = PAGE_KEYS.filter((p) => p !== "blog");

// Lingue tradotte e PUBBLICATE (oltre a IT). Ogni voce = elenco pagine pronte.
// Il task notturno aggiunge qui una riga per lingua quando finisce, es. fr: ALL_EXCEPT_BLOG.
const READY: Partial<Record<Locale, PageKey[]>> = {
  // Lingue con anche il blog tradotto (articoli in src/content/blog/<lang>/)
  en: [...ALL_EXCEPT_BLOG, "blog"],
  fr: [...ALL_EXCEPT_BLOG, "blog"],
  de: [...ALL_EXCEPT_BLOG, "blog"],
  es: [...ALL_EXCEPT_BLOG, "blog"],
  pt: [...ALL_EXCEPT_BLOG, "blog"],
};

export const PAGE_LOCALES: Record<PageKey, Locale[]> = Object.fromEntries(
  PAGE_KEYS.map((p) => {
    const locs: Locale[] = [DEFAULT_LOCALE];
    for (const [loc, pages] of Object.entries(READY)) {
      if (loc !== DEFAULT_LOCALE && pages?.includes(p)) locs.push(loc as Locale);
    }
    return [p, locs];
  }),
) as Record<PageKey, Locale[]>;

export function localesForPage(page: PageKey): Locale[] {
  return PAGE_LOCALES[page] ?? [DEFAULT_LOCALE];
}

export function pageHasLocale(page: PageKey, locale: Locale): boolean {
  return localesForPage(page).includes(locale);
}
