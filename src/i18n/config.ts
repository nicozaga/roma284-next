/**
 * Configurazione i18n centrale — 11 lingue.
 * IT è la lingua default servita sulla root `/`. Le altre su `/{lang}/`.
 */

export const DEFAULT_LOCALE = "it" as const;

export const LOCALES = [
  "it",
  "en",
  "fr",
  "es",
  "pt",
  "de",
  "nl",
  "sv",
  "pl",
  "ja",
  "zh-cn",
] as const;

export type Locale = (typeof LOCALES)[number];

export interface LocaleMeta {
  /** Tag BCP-47 completo per html lang / hreflang / og:locale */
  htmlLang: string;
  ogLocale: string;
  /** Nome nativo per il language switcher */
  label: string;
  dir: "ltr" | "rtl";
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  it: { htmlLang: "it-IT", ogLocale: "it_IT", label: "Italiano", dir: "ltr" },
  en: { htmlLang: "en-GB", ogLocale: "en_GB", label: "English", dir: "ltr" },
  fr: { htmlLang: "fr-FR", ogLocale: "fr_FR", label: "Français", dir: "ltr" },
  es: { htmlLang: "es-ES", ogLocale: "es_ES", label: "Español", dir: "ltr" },
  pt: { htmlLang: "pt-PT", ogLocale: "pt_PT", label: "Português", dir: "ltr" },
  de: { htmlLang: "de-DE", ogLocale: "de_DE", label: "Deutsch", dir: "ltr" },
  nl: { htmlLang: "nl-NL", ogLocale: "nl_NL", label: "Nederlands", dir: "ltr" },
  sv: { htmlLang: "sv-SE", ogLocale: "sv_SE", label: "Svenska", dir: "ltr" },
  pl: { htmlLang: "pl-PL", ogLocale: "pl_PL", label: "Polski", dir: "ltr" },
  ja: { htmlLang: "ja-JP", ogLocale: "ja_JP", label: "日本語", dir: "ltr" },
  "zh-cn": { htmlLang: "zh-CN", ogLocale: "zh_CN", label: "中文", dir: "ltr" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
