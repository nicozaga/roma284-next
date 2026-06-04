import { DEFAULT_LOCALE, type Locale } from "./config";
import { PAGE_KEYS, type PageKey } from "./slugs";

/**
 * Disponibilità lingue per pagina — single source of truth.
 * Governa hreflang, language switcher e generazione route.
 * Aggiungere una lingua a una pagina QUI quando il contenuto è pronto,
 * così non si creano mai link rotti né alternate verso pagine inesistenti.
 *
 * Fase 1 (Settimana 4): IT completo + EN su home e pagine commerciali chiave.
 */
const EN_READY: PageKey[] = [
  "home",
  "apartment",
  "stay-near-milan",
  "smart-working",
  "contact",
  "book",
];

export const PAGE_LOCALES: Record<PageKey, Locale[]> = Object.fromEntries(
  PAGE_KEYS.map((p) => [p, EN_READY.includes(p) ? ["it", "en"] : ["it"]]),
) as Record<PageKey, Locale[]>;

export function localesForPage(page: PageKey): Locale[] {
  return PAGE_LOCALES[page] ?? [DEFAULT_LOCALE];
}

export function pageHasLocale(page: PageKey, locale: Locale): boolean {
  return localesForPage(page).includes(locale);
}
