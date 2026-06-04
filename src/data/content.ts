import type { Locale } from "@i18n/config";

/** Contenuti home locale-aware — frasi auto-contenute, dati esatti (AI/SEO). */

type Usp = { icon: string; title: string; text: string };
export const USP: Partial<Record<Locale, Usp[]>> = {
  it: [
    { icon: "wifi", title: "WiFi 1 Gbit/s", text: "Fibra ultraveloce e spazio di lavoro dedicato: lavora come in ufficio." },
    { icon: "train", title: "33 min da Milano", text: "Frecciarossa dalla stazione a 900 metri, fino a 52 treni diretti al giorno." },
    { icon: "walk", title: "Centro storico", text: "Piazza Cavalli e il Duomo a 5 minuti a piedi. Tutto raggiungibile a piedi." },
    { icon: "leaf", title: "Patio privato", text: "Il tuo angolo all'aperto sul cortile interno, per colazioni e aperitivi." },
  ],
  en: [
    { icon: "wifi", title: "1 Gbit/s Wi-Fi", text: "Ultra-fast fibre and a dedicated workspace: work as if you were in the office." },
    { icon: "train", title: "33 min from Milan", text: "Frecciarossa from the station 900 m away, up to 52 direct trains a day." },
    { icon: "walk", title: "Historic centre", text: "Piazza Cavalli and the Cathedral are a 5-minute walk. Everything on foot." },
    { icon: "leaf", title: "Private patio", text: "Your outdoor corner on the inner courtyard, for breakfast and aperitifs." },
  ],
};

export const APARTMENT_INTRO: Partial<Record<Locale, string>> = {
  it: "Roma284 è un elegante bilocale di 50 m² al piano terra, nel centro storico di Piacenza. Unisce i comfort moderni a un contesto storico autentico: cucina open space completamente attrezzata, Wi-Fi in fibra da 1 Gbit/s e un patio privato sul cortile interno. Ospita fino a 4 persone, con ingresso diretto senza scale.",
  en: "Roma284 is an elegant 50 m² one-bedroom apartment on the ground floor, in the historic centre of Piacenza. It blends modern comforts with an authentic historic setting: a fully equipped open-plan kitchen, 1 Gbit/s fibre Wi-Fi and a private patio on the inner courtyard. It hosts up to 4 guests, with step-free direct access.",
};

type Conn = { from: string; mode: string; time: string };
export const CONNECTIONS: Partial<Record<Locale, Conn[]>> = {
  it: [
    { from: "Milano Centrale", mode: "Frecciarossa", time: "33 min" },
    { from: "Stazione di Piacenza", mode: "a piedi", time: "9 min · 900 m" },
    { from: "Piazza Cavalli e Duomo", mode: "a piedi", time: "5 min · 350 m" },
    { from: "Fiera Milano Rho", mode: "Frecciarossa + M1", time: "~1 h" },
  ],
  en: [
    { from: "Milan Centrale", mode: "Frecciarossa", time: "33 min" },
    { from: "Piacenza station", mode: "on foot", time: "9 min · 900 m" },
    { from: "Piazza Cavalli & Cathedral", mode: "on foot", time: "5 min · 350 m" },
    { from: "Fiera Milano Rho", mode: "Frecciarossa + M1", time: "~1 h" },
  ],
};

export const POI: Partial<Record<Locale, string[]>> = {
  it: [
    "Piazza Cavalli e i cavalli del Mochi",
    "Duomo di Piacenza",
    "Palazzo Farnese",
    "Galleria d'Arte Moderna Ricci Oddi",
    "Zona pedonale e Corso Vittorio Emanuele",
  ],
  en: [
    "Piazza Cavalli and the Mochi horse statues",
    "Piacenza Cathedral",
    "Palazzo Farnese",
    "Ricci Oddi Modern Art Gallery",
    "Pedestrian area and Corso Vittorio Emanuele",
  ],
};

type Why = { icon: string; title: string; text: string };
export const WHY_DIRECT: Partial<Record<Locale, Why[]>> = {
  it: [
    { icon: "clock", title: "Check-in flessibile", text: "Concordiamo gli orari su misura per il tuo viaggio, senza vincoli rigidi." },
    { icon: "chat", title: "Contatto diretto con noi", text: "Parli direttamente con chi gestisce la casa: risposte rapide, niente intermediari." },
    { icon: "check", title: "Conferma immediata", text: "Prenoti ora e ricevi subito la conferma via WhatsApp o email." },
  ],
  en: [
    { icon: "clock", title: "Flexible check-in", text: "We arrange times tailored to your trip, with no rigid constraints." },
    { icon: "chat", title: "Direct contact with us", text: "You speak directly with the people who run the home: fast replies, no middlemen." },
    { icon: "check", title: "Instant confirmation", text: "Book now and get immediate confirmation by WhatsApp or email." },
  ],
};

/** Helper con fallback IT. */
export const pick = <T,>(rec: Partial<Record<Locale, T>>, locale: Locale): T =>
  (rec[locale] ?? rec.it) as T;
