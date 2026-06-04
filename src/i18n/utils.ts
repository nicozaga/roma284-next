import { DEFAULT_LOCALE, LOCALES, LOCALE_META, isLocale, type Locale } from "./config";
import { SLUGS, type PageKey } from "./slugs";

const SITE = "https://www.roma284.it";

/**
 * Costruisce il path localizzato per una pagina.
 * IT (default) → root senza prefisso. Altre lingue → /{locale}/.
 * Es: localizedPath("apartment","it") = "/appartamento/"
 *     localizedPath("apartment","en") = "/en/the-apartment/"
 *     localizedPath("home","en")      = "/en/"
 */
export function localizedPath(page: PageKey, locale: Locale): string {
  const slug = SLUGS[page][locale];
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  if (slug === "") {
    return prefix === "" ? "/" : `${prefix}/`;
  }
  return `${prefix}/${slug}/`;
}

/** URL assoluto (per canonical, OG, hreflang, sitemap). */
export function localizedUrl(page: PageKey, locale: Locale): string {
  return SITE + localizedPath(page, locale);
}

/** Estrae il locale dal pathname; default IT se nessun prefisso. */
export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split("/").filter(Boolean)[0];
  if (seg && isLocale(seg)) return seg;
  return DEFAULT_LOCALE;
}

export interface Alternate {
  locale: Locale;
  hreflang: string;
  href: string;
}

/**
 * Tutte le varianti linguistiche di una pagina + x-default (IT).
 * Usato per generare i tag <link rel="alternate" hreflang>.
 */
export function getAlternates(page: PageKey): Alternate[] {
  const alts: Alternate[] = LOCALES.map((loc) => ({
    locale: loc,
    hreflang: LOCALE_META[loc].htmlLang.toLowerCase(),
    href: localizedUrl(page, loc),
  }));
  alts.push({
    locale: DEFAULT_LOCALE,
    hreflang: "x-default",
    href: localizedUrl(page, DEFAULT_LOCALE),
  });
  return alts;
}

/** Per il language switcher: stesso contenuto, lingua diversa. */
export function switchLocale(page: PageKey, target: Locale): string {
  return localizedPath(page, target);
}

export { SITE };
