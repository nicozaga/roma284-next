import { DEFAULT_LOCALE, type Locale } from "./config";

/**
 * Dizionari stringhe UI (nav, CTA, label comuni).
 * IT è la sorgente di verità; EN seed completo. Le altre lingue
 * vengono aggiunte nella Settimana 4 — fino ad allora c'è fallback
 * automatico (locale → en → it), così nessuna stringa appare vuota.
 */
export type UIKey =
  | "nav.apartment"
  | "nav.area"
  | "nav.getting_here"
  | "nav.visit"
  | "nav.about"
  | "nav.contact"
  | "nav.faq"
  | "nav.blog"
  | "cta.check_availability"
  | "cta.discover_apartment"
  | "cta.book_direct"
  | "cta.whatsapp"
  | "cta.see_details"
  | "cta.getting_here"
  | "common.skip_to_content"
  | "common.menu"
  | "common.close"
  | "common.language"
  | "footer.tagline"
  | "footer.rights";

type Dict = Partial<Record<UIKey, string>>;

const it: Record<UIKey, string> = {
  "nav.apartment": "Appartamento",
  "nav.area": "Quartiere",
  "nav.getting_here": "Come arrivare",
  "nav.visit": "Visitare Piacenza",
  "nav.about": "Chi siamo",
  "nav.contact": "Contatti",
  "nav.faq": "FAQ",
  "nav.blog": "Blog",
  "cta.check_availability": "Verifica disponibilità",
  "cta.discover_apartment": "Scopri l'appartamento",
  "cta.book_direct": "Prenota diretto",
  "cta.whatsapp": "Scrivici su WhatsApp",
  "cta.see_details": "Vedi tutti i dettagli",
  "cta.getting_here": "Come arrivare",
  "common.skip_to_content": "Vai al contenuto",
  "common.menu": "Menu",
  "common.close": "Chiudi",
  "common.language": "Lingua",
  "footer.tagline":
    "Appartamento nel centro storico di Piacenza, a 33 minuti da Milano in Frecciarossa.",
  "footer.rights": "Tutti i diritti riservati.",
};

const en: Dict = {
  "nav.apartment": "The apartment",
  "nav.area": "Area",
  "nav.getting_here": "Getting here",
  "nav.visit": "Visit Piacenza",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.faq": "FAQ",
  "nav.blog": "Blog",
  "cta.check_availability": "Check availability",
  "cta.discover_apartment": "Discover the apartment",
  "cta.book_direct": "Book direct",
  "cta.whatsapp": "Message us on WhatsApp",
  "cta.see_details": "See all details",
  "cta.getting_here": "Getting here",
  "common.skip_to_content": "Skip to content",
  "common.menu": "Menu",
  "common.close": "Close",
  "common.language": "Language",
  "footer.tagline":
    "Apartment in the historic center of Piacenza, 33 minutes from Milan by Frecciarossa.",
  "footer.rights": "All rights reserved.",
};

// Lingue Settimana 4: dizionari vuoti per ora → fallback a en/it.
const UI: Record<Locale, Dict> = {
  it,
  en,
  fr: {},
  es: {},
  pt: {},
  de: {},
  nl: {},
  sv: {},
  pl: {},
  ja: {},
  "zh-cn": {},
};

/**
 * Restituisce t(key) con catena di fallback: locale → en → it.
 */
export function useTranslations(locale: Locale) {
  const primary = UI[locale] ?? {};
  return function t(key: UIKey): string {
    return primary[key] ?? UI.en[key] ?? UI[DEFAULT_LOCALE][key] ?? key;
  };
}
