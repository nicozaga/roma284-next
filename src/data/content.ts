/** Contenuti IT della home — frasi auto-contenute, dati esatti (AI/SEO). */

export const USP_IT = [
  {
    icon: "wifi",
    title: "WiFi 1 Gbit/s",
    text: "Fibra ultraveloce e spazio di lavoro dedicato: lavora come in ufficio.",
  },
  {
    icon: "train",
    title: "33 min da Milano",
    text: "Frecciarossa dalla stazione a 900 metri, fino a 52 treni diretti al giorno.",
  },
  {
    icon: "walk",
    title: "Centro storico",
    text: "Piazza Cavalli e il Duomo a 5 minuti a piedi. Tutto raggiungibile a piedi.",
  },
  {
    icon: "leaf",
    title: "Patio privato",
    text: "Il tuo angolo all'aperto sul cortile interno, per colazioni e aperitivi.",
  },
] as const;

export const APARTMENT_INTRO_IT =
  "Roma284 è un elegante bilocale di 50 m² al piano terra, nel centro storico di Piacenza. Unisce i comfort moderni a un contesto storico autentico: cucina open space completamente attrezzata, Wi-Fi in fibra da 1 Gbit/s e un patio privato sul cortile interno. Ospita fino a 4 persone, con ingresso diretto senza scale.";

/** Collegamenti con Milano e dintorni — dati per la sezione posizione. */
export const CONNECTIONS_IT = [
  { from: "Milano Centrale", mode: "Frecciarossa", time: "33 min" },
  { from: "Stazione di Piacenza", mode: "a piedi", time: "9 min · 900 m" },
  { from: "Piazza Cavalli e Duomo", mode: "a piedi", time: "5 min · 350 m" },
  { from: "Fiera Milano Rho", mode: "Frecciarossa + M1", time: "~1 h" },
];

/** Punti di interesse a piedi. */
export const POI_IT = [
  "Piazza Cavalli e i cavalli del Mochi",
  "Duomo di Piacenza",
  "Palazzo Farnese",
  "Galleria d'Arte Moderna Ricci Oddi",
  "Zona pedonale e Corso Vittorio Emanuele",
];

export const WHY_DIRECT_IT = [
  {
    icon: "clock",
    title: "Check-in flessibile",
    text: "Concordiamo gli orari su misura per il tuo viaggio, senza vincoli rigidi.",
  },
  {
    icon: "chat",
    title: "Contatto diretto con noi",
    text: "Parli direttamente con chi gestisce la casa: risposte rapide, niente intermediari.",
  },
  {
    icon: "check",
    title: "Conferma immediata",
    text: "Prenoti ora e ricevi subito la conferma via WhatsApp o email.",
  },
] as const;
