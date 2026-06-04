/** Come arrivare — passi per origine (alimenta HowTo schema + UI). */

export interface Route {
  id: string;
  from: string;
  duration: string;
  summary: string;
  steps: { name: string; text: string }[];
}

export const ROUTES_IT: Route[] = [
  {
    id: "milano-centrale",
    from: "Da Milano Centrale",
    duration: "33 min",
    summary:
      "Il treno Frecciarossa collega Milano Centrale a Piacenza in 33 minuti, con fino a 52 corse dirette al giorno (prima 06:07, ultima 23:52).",
    steps: [
      { name: "Prendi la Frecciarossa", text: "A Milano Centrale sali sulla Frecciarossa diretta a Piacenza: il viaggio dura 33 minuti." },
      { name: "Scendi a Piacenza", text: "Scendi alla stazione di Piacenza, capolinea comodo nel centro città." },
      { name: "Raggiungi Roma284 a piedi", text: "Da Piacenza l'appartamento è a 900 metri, circa 9 minuti a piedi lungo il centro." },
    ],
  },
  {
    id: "malpensa",
    from: "Dall'aeroporto di Malpensa",
    duration: "~2 h",
    summary:
      "Da Malpensa si raggiunge Piacenza in circa 2 ore con il Malpensa Express fino a Milano e poi il treno per Piacenza.",
    steps: [
      { name: "Malpensa Express", text: "Prendi il Malpensa Express fino a Milano Centrale (circa 50 minuti)." },
      { name: "Treno per Piacenza", text: "A Milano Centrale prendi il treno per Piacenza (33-50 minuti)." },
      { name: "A piedi fino a Roma284", text: "Dalla stazione di Piacenza raggiungi l'appartamento in 9 minuti a piedi." },
    ],
  },
  {
    id: "linate",
    from: "Dall'aeroporto di Linate",
    duration: "~1 h 30",
    summary:
      "Da Linate si arriva a Piacenza in circa un'ora e mezza usando la metro M4 fino a Milano e poi il treno.",
    steps: [
      { name: "Metro M4", text: "Dalla M4 di Linate raggiungi il centro di Milano e Milano Centrale." },
      { name: "Treno per Piacenza", text: "Prendi il treno diretto a Piacenza (33-50 minuti)." },
      { name: "Arrivo a Roma284", text: "Dalla stazione di Piacenza, 9 minuti a piedi fino all'appartamento." },
    ],
  },
  {
    id: "auto",
    from: "In auto (Autostrada A1)",
    duration: "uscita Piacenza Sud/Ovest",
    summary:
      "Piacenza è sull'Autostrada del Sole A1, a circa un'ora da Milano in auto. In centro è disponibile parcheggio gratuito in strada.",
    steps: [
      { name: "Esci dall'A1", text: "Prendi l'uscita Piacenza Sud o Piacenza Ovest e segui per il centro storico." },
      { name: "Arriva in Via Roma", text: "Raggiungi Via Roma 284, nel cuore del centro." },
      { name: "Parcheggia gratis", text: "Trovi parcheggio gratuito in strada nelle vicinanze; l'ingresso è al piano terra." },
    ],
  },
  {
    id: "bergamo-bologna",
    from: "Da Bergamo Orio al Serio e Bologna",
    duration: "~1 h 30 – 2 h",
    summary:
      "Da Bergamo Orio al Serio e dall'aeroporto di Bologna si raggiunge Piacenza in treno con un cambio, in circa 1h30-2h.",
    steps: [
      { name: "Raggiungi la stazione", text: "Da Orio al Serio usa il bus per Bergamo; da Bologna parti dalla stazione centrale." },
      { name: "Treno per Piacenza", text: "Prendi il treno per Piacenza, con eventuale cambio a Milano o Bologna." },
      { name: "A piedi fino a Roma284", text: "Dalla stazione di Piacenza, 9 minuti a piedi." },
    ],
  },
];
