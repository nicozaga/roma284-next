import type { Locale } from "./config";

/**
 * Chiavi pagina canoniche (indipendenti dalla lingua).
 * "home" mappa alla root (segmento vuoto).
 */
export type PageKey =
  | "home"
  | "apartment"
  | "area"
  | "getting-here"
  | "stay-near-milan"
  | "smart-working"
  | "milan-fairs"
  | "milan-events"
  | "visit-piacenza"
  | "about"
  | "contact"
  | "book"
  | "faq"
  | "blog";

/**
 * Slug tradotti per lingua. Coerenza concettuale, ottimizzati per
 * l'intento di ricerca locale (NON traduzioni letterali).
 * Fonte: PROMPT_MASTER sez. 5.
 */
export const SLUGS: Record<PageKey, Record<Locale, string>> = {
  home: {
    it: "", en: "", fr: "", es: "", pt: "", de: "", nl: "", sv: "", pl: "", ja: "", "zh-cn": "",
  },
  apartment: {
    it: "appartamento", en: "the-apartment", fr: "appartement", es: "apartamento",
    pt: "apartamento", de: "wohnung", nl: "appartement", sv: "lagenheten",
    pl: "apartament", ja: "apartment", "zh-cn": "gongyu",
  },
  area: {
    it: "quartiere", en: "area", fr: "quartier", es: "zona", pt: "bairro",
    de: "umgebung", nl: "buurt", sv: "omradet", pl: "okolica", ja: "area", "zh-cn": "quyu",
  },
  "getting-here": {
    it: "come-arrivare", en: "getting-here", fr: "comment-venir", es: "como-llegar",
    pt: "como-chegar", de: "anreise", nl: "route", sv: "hitta-hit",
    pl: "jak-dojechac", ja: "access", "zh-cn": "jiaotong",
  },
  "stay-near-milan": {
    it: "dormire-vicino-milano", en: "stay-near-milan", fr: "dormir-pres-de-milan",
    es: "dormir-cerca-milan", pt: "dormir-perto-milao", de: "uebernachten-bei-mailand",
    nl: "slapen-bij-milaan", sv: "bo-nara-milano", pl: "nocleg-blisko-mediolanu",
    ja: "milan-near-stay", "zh-cn": "milan-zhusu",
  },
  "smart-working": {
    it: "smart-working", en: "smart-working", fr: "teletravail", es: "teletrabajo",
    pt: "trabalho-remoto", de: "remote-arbeit", nl: "thuiswerken", sv: "distansarbete",
    pl: "praca-zdalna", ja: "remote-work", "zh-cn": "yuancheng",
  },
  "milan-fairs": {
    it: "fiere-milano", en: "milan-fairs", fr: "foires-milan", es: "ferias-milan",
    pt: "feiras-milao", de: "milan-messen", nl: "milaan-beurzen", sv: "milano-massor",
    pl: "targi-mediolan", ja: "milan-fair", "zh-cn": "milan-zhanhui",
  },
  "milan-events": {
    it: "eventi-milano", en: "milan-events", fr: "evenements-milan", es: "eventos-milan",
    pt: "eventos-milao", de: "milan-events", nl: "milaan-events", sv: "milano-event",
    pl: "wydarzenia-mediolan", ja: "milan-event", "zh-cn": "milan-huodong",
  },
  "visit-piacenza": {
    it: "visitare-piacenza", en: "visit-piacenza", fr: "visiter-piacenza",
    es: "visitar-piacenza", pt: "visitar-piacenza", de: "piacenza-besuchen",
    nl: "piacenza-bezoeken", sv: "besoka-piacenza", pl: "zwiedzac-piacenza",
    ja: "visit-piacenza", "zh-cn": "piacenza-lvyou",
  },
  about: {
    it: "chi-siamo", en: "about", fr: "a-propos", es: "sobre-nosotros", pt: "sobre-nos",
    de: "ueber-uns", nl: "over-ons", sv: "om-oss", pl: "o-nas", ja: "about", "zh-cn": "guanyu",
  },
  contact: {
    it: "contatti", en: "contact", fr: "contact", es: "contacto", pt: "contato",
    de: "kontakt", nl: "contact", sv: "kontakt", pl: "kontakt", ja: "contact", "zh-cn": "lianxi",
  },
  book: {
    it: "prenota", en: "book", fr: "reserver", es: "reservar", pt: "reservar",
    de: "buchen", nl: "boeken", sv: "boka", pl: "zarezerwuj", ja: "book", "zh-cn": "yuding",
  },
  faq: {
    it: "faq", en: "faq", fr: "faq", es: "faq", pt: "faq", de: "faq", nl: "faq",
    sv: "vanliga-fragor", pl: "faq", ja: "faq", "zh-cn": "changjian-wenti",
  },
  blog: {
    it: "blog", en: "blog", fr: "blog", es: "blog", pt: "blog", de: "blog", nl: "blog",
    sv: "blogg", pl: "blog", ja: "blog", "zh-cn": "boke",
  },
};

export const PAGE_KEYS = Object.keys(SLUGS) as PageKey[];
