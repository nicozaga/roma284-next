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
  | "nav.stay_near_milan"
  | "nav.smart_working"
  | "nav.fairs"
  | "nav.milan_events"
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
  "nav.stay_near_milan": "Dormire vicino Milano",
  "nav.smart_working": "Smart working",
  "nav.fairs": "Fiere",
  "nav.milan_events": "Eventi Milano",
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
  "nav.stay_near_milan": "Stay near Milan",
  "nav.smart_working": "Smart working",
  "nav.fairs": "Trade fairs",
  "nav.milan_events": "Milan events",
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

const fr: Dict = {
  "nav.apartment": "L'appartement",
  "nav.area": "Le quartier",
  "nav.getting_here": "Comment venir",
  "nav.visit": "Visiter Plaisance",
  "nav.about": "À propos",
  "nav.contact": "Contact",
  "nav.faq": "FAQ",
  "nav.blog": "Blog",
  "nav.stay_near_milan": "Dormir près de Milan",
  "nav.smart_working": "Télétravail",
  "nav.fairs": "Foires",
  "nav.milan_events": "Événements à Milan",
  "cta.check_availability": "Vérifier les disponibilités",
  "cta.discover_apartment": "Découvrir l'appartement",
  "cta.book_direct": "Réserver en direct",
  "cta.whatsapp": "Écrivez-nous sur WhatsApp",
  "cta.see_details": "Voir tous les détails",
  "cta.getting_here": "Comment venir",
  "common.skip_to_content": "Aller au contenu",
  "common.menu": "Menu",
  "common.close": "Fermer",
  "common.language": "Langue",
  "footer.tagline":
    "Appartement dans le centre historique de Plaisance, à 33 minutes de Milan en Frecciarossa.",
  "footer.rights": "Tous droits réservés.",
};

const de: Dict = {
  "nav.apartment": "Die Wohnung",
  "nav.area": "Das Viertel",
  "nav.getting_here": "Anreise",
  "nav.visit": "Piacenza entdecken",
  "nav.about": "Über uns",
  "nav.contact": "Kontakt",
  "nav.faq": "FAQ",
  "nav.blog": "Blog",
  "nav.stay_near_milan": "Übernachten bei Mailand",
  "nav.smart_working": "Homeoffice",
  "nav.fairs": "Messen",
  "nav.milan_events": "Events in Mailand",
  "cta.check_availability": "Verfügbarkeit prüfen",
  "cta.discover_apartment": "Die Wohnung entdecken",
  "cta.book_direct": "Direkt buchen",
  "cta.whatsapp": "Schreiben Sie uns auf WhatsApp",
  "cta.see_details": "Alle Details ansehen",
  "cta.getting_here": "Anreise",
  "common.skip_to_content": "Zum Inhalt springen",
  "common.menu": "Menü",
  "common.close": "Schließen",
  "common.language": "Sprache",
  "footer.tagline":
    "Wohnung im historischen Zentrum von Piacenza, 33 Minuten von Mailand mit dem Frecciarossa.",
  "footer.rights": "Alle Rechte vorbehalten.",
};

const es: Dict = {
  "nav.apartment": "El apartamento",
  "nav.area": "El barrio",
  "nav.getting_here": "Cómo llegar",
  "nav.visit": "Visitar Piacenza",
  "nav.about": "Quiénes somos",
  "nav.contact": "Contacto",
  "nav.faq": "FAQ",
  "nav.blog": "Blog",
  "nav.stay_near_milan": "Dormir cerca de Milán",
  "nav.smart_working": "Teletrabajo",
  "nav.fairs": "Ferias",
  "nav.milan_events": "Eventos en Milán",
  "cta.check_availability": "Comprobar disponibilidad",
  "cta.discover_apartment": "Descubre el apartamento",
  "cta.book_direct": "Reserva directa",
  "cta.whatsapp": "Escríbenos por WhatsApp",
  "cta.see_details": "Ver todos los detalles",
  "cta.getting_here": "Cómo llegar",
  "common.skip_to_content": "Ir al contenido",
  "common.menu": "Menú",
  "common.close": "Cerrar",
  "common.language": "Idioma",
  "footer.tagline":
    "Apartamento en el centro histórico de Piacenza, a 33 minutos de Milán en Frecciarossa.",
  "footer.rights": "Todos los derechos reservados.",
};

const pt: Dict = {
  "nav.apartment": "O apartamento",
  "nav.area": "O bairro",
  "nav.getting_here": "Como chegar",
  "nav.visit": "Visitar Piacenza",
  "nav.about": "Quem somos",
  "nav.contact": "Contactos",
  "nav.faq": "FAQ",
  "nav.blog": "Blog",
  "nav.stay_near_milan": "Dormir perto de Milão",
  "nav.smart_working": "Teletrabalho",
  "nav.fairs": "Feiras",
  "nav.milan_events": "Eventos em Milão",
  "cta.check_availability": "Verificar disponibilidade",
  "cta.discover_apartment": "Descubra o apartamento",
  "cta.book_direct": "Reservar diretamente",
  "cta.whatsapp": "Escreva-nos no WhatsApp",
  "cta.see_details": "Ver todos os detalhes",
  "cta.getting_here": "Como chegar",
  "common.skip_to_content": "Ir para o conteúdo",
  "common.menu": "Menu",
  "common.close": "Fechar",
  "common.language": "Idioma",
  "footer.tagline":
    "Apartamento no centro histórico de Piacenza, a 33 minutos de Milão de Frecciarossa.",
  "footer.rights": "Todos os direitos reservados.",
};

const nl: Dict = {
  "nav.apartment": "Het appartement",
  "nav.area": "De buurt",
  "nav.getting_here": "Hoe te komen",
  "nav.visit": "Piacenza bezoeken",
  "nav.about": "Over ons",
  "nav.contact": "Contact",
  "nav.faq": "FAQ",
  "nav.blog": "Blog",
  "nav.stay_near_milan": "Slapen bij Milaan",
  "nav.smart_working": "Thuiswerken",
  "nav.fairs": "Beurzen",
  "nav.milan_events": "Evenementen in Milaan",
  "cta.check_availability": "Beschikbaarheid bekijken",
  "cta.discover_apartment": "Ontdek het appartement",
  "cta.book_direct": "Direct boeken",
  "cta.whatsapp": "Schrijf ons op WhatsApp",
  "cta.see_details": "Bekijk alle details",
  "cta.getting_here": "Hoe te komen",
  "common.skip_to_content": "Ga naar de inhoud",
  "common.menu": "Menu",
  "common.close": "Sluiten",
  "common.language": "Taal",
  "footer.tagline":
    "Appartement in het historische centrum van Piacenza, op 33 minuten van Milaan met de Frecciarossa.",
  "footer.rights": "Alle rechten voorbehouden.",
};

const pl: Dict = {
  "nav.apartment": "Apartament",
  "nav.area": "Okolica",
  "nav.getting_here": "Jak dojechać",
  "nav.visit": "Zwiedzanie Piacenzy",
  "nav.about": "O nas",
  "nav.contact": "Kontakt",
  "nav.faq": "FAQ",
  "nav.blog": "Blog",
  "nav.stay_near_milan": "Nocleg blisko Mediolanu",
  "nav.smart_working": "Praca zdalna",
  "nav.fairs": "Targi",
  "nav.milan_events": "Wydarzenia w Mediolanie",
  "cta.check_availability": "Sprawdź dostępność",
  "cta.discover_apartment": "Poznaj apartament",
  "cta.book_direct": "Zarezerwuj bezpośrednio",
  "cta.whatsapp": "Napisz do nas na WhatsApp",
  "cta.see_details": "Zobacz wszystkie szczegóły",
  "cta.getting_here": "Jak dojechać",
  "common.skip_to_content": "Przejdź do treści",
  "common.menu": "Menu",
  "common.close": "Zamknij",
  "common.language": "Język",
  "footer.tagline":
    "Apartament w historycznym centrum Piacenzy, 33 minuty od Mediolanu Frecciarossą.",
  "footer.rights": "Wszelkie prawa zastrzeżone.",
};

const sv: Dict = {
  "nav.apartment": "Lägenheten",
  "nav.area": "Området",
  "nav.getting_here": "Hitta hit",
  "nav.visit": "Besök Piacenza",
  "nav.about": "Om oss",
  "nav.contact": "Kontakt",
  "nav.faq": "FAQ",
  "nav.blog": "Blogg",
  "nav.stay_near_milan": "Bo nära Milano",
  "nav.smart_working": "Distansarbete",
  "nav.fairs": "Mässor",
  "nav.milan_events": "Evenemang i Milano",
  "cta.check_availability": "Kontrollera tillgänglighet",
  "cta.discover_apartment": "Upptäck lägenheten",
  "cta.book_direct": "Boka direkt",
  "cta.whatsapp": "Skriv till oss på WhatsApp",
  "cta.see_details": "Se alla detaljer",
  "cta.getting_here": "Hitta hit",
  "common.skip_to_content": "Hoppa till innehållet",
  "common.menu": "Meny",
  "common.close": "Stäng",
  "common.language": "Språk",
  "footer.tagline":
    "Lägenhet i Piacenzas historiska centrum, 33 minuter från Milano med Frecciarossa.",
  "footer.rights": "Alla rättigheter förbehållna.",
};

const ja: Dict = {
  "nav.apartment": "アパートメント",
  "nav.area": "周辺エリア",
  "nav.getting_here": "アクセス",
  "nav.visit": "ピアチェンツァを訪れる",
  "nav.about": "私たちについて",
  "nav.contact": "お問い合わせ",
  "nav.faq": "よくある質問",
  "nav.blog": "ブログ",
  "nav.stay_near_milan": "ミラノ近郊に泊まる",
  "nav.smart_working": "リモートワーク",
  "nav.fairs": "見本市",
  "nav.milan_events": "ミラノのイベント",
  "cta.check_availability": "空き状況を確認",
  "cta.discover_apartment": "アパートメントを見る",
  "cta.book_direct": "直接予約する",
  "cta.whatsapp": "WhatsAppでご連絡ください",
  "cta.see_details": "すべての詳細を見る",
  "cta.getting_here": "アクセス",
  "common.skip_to_content": "本文へ進む",
  "common.menu": "メニュー",
  "common.close": "閉じる",
  "common.language": "言語",
  "footer.tagline":
    "ピアチェンツァ歴史地区のアパートメント、フレッチャロッサでミラノから33分。",
  "footer.rights": "無断複製・転載を禁じます。",
};

const zhCn: Dict = {
  "nav.apartment": "公寓",
  "nav.area": "周边区域",
  "nav.getting_here": "如何到达",
  "nav.visit": "游览皮亚琴察",
  "nav.about": "关于我们",
  "nav.contact": "联系我们",
  "nav.faq": "常见问题",
  "nav.blog": "博客",
  "nav.stay_near_milan": "住在米兰附近",
  "nav.smart_working": "远程办公",
  "nav.fairs": "展会",
  "nav.milan_events": "米兰活动",
  "cta.check_availability": "查询空房",
  "cta.discover_apartment": "了解公寓",
  "cta.book_direct": "直接预订",
  "cta.whatsapp": "通过WhatsApp联系我们",
  "cta.see_details": "查看全部详情",
  "cta.getting_here": "如何到达",
  "common.skip_to_content": "跳到正文",
  "common.menu": "菜单",
  "common.close": "关闭",
  "common.language": "语言",
  "footer.tagline":
    "位于皮亚琴察历史中心区的公寓，乘红箭高铁距米兰33分钟。",
  "footer.rights": "保留所有权利。",
};

// Lingue Settimana 4: dizionari vuoti per ora → fallback a en/it.
const UI: Record<Locale, Dict> = {
  it,
  en,
  fr,
  es,
  pt,
  de,
  nl,
  sv,
  pl,
  ja,
  "zh-cn": zhCn,
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
