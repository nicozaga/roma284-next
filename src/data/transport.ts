import type { Locale } from "@i18n/config";

/** Come arrivare — passi per origine (alimenta HowTo schema + UI). */
export interface Route {
  id: string;
  from: string;
  duration: string;
  summary: string;
  steps: { name: string; text: string }[];
}

export const ROUTES: Partial<Record<Locale, Route[]>> = {
  it: [
    {
      id: "milano-centrale", from: "Da Milano Centrale", duration: "33 min",
      summary: "Il treno Frecciarossa collega Milano Centrale a Piacenza in 33 minuti, con fino a 52 corse dirette al giorno (prima 06:07, ultima 23:52).",
      steps: [
        { name: "Prendi la Frecciarossa", text: "A Milano Centrale sali sulla Frecciarossa diretta a Piacenza: il viaggio dura 33 minuti." },
        { name: "Scendi a Piacenza", text: "Scendi alla stazione di Piacenza, capolinea comodo nel centro città." },
        { name: "Raggiungi Roma284 a piedi", text: "Da Piacenza l'appartamento è a 900 metri, circa 9 minuti a piedi lungo il centro." },
      ],
    },
    {
      id: "malpensa", from: "Dall'aeroporto di Malpensa", duration: "~2 h",
      summary: "Da Malpensa si raggiunge Piacenza in circa 2 ore con il Malpensa Express fino a Milano e poi il treno per Piacenza.",
      steps: [
        { name: "Malpensa Express", text: "Prendi il Malpensa Express fino a Milano Centrale (circa 50 minuti)." },
        { name: "Treno per Piacenza", text: "A Milano Centrale prendi il treno per Piacenza (33-50 minuti)." },
        { name: "A piedi fino a Roma284", text: "Dalla stazione di Piacenza raggiungi l'appartamento in 9 minuti a piedi." },
      ],
    },
    {
      id: "linate", from: "Dall'aeroporto di Linate", duration: "~1 h 30",
      summary: "Da Linate si arriva a Piacenza in circa un'ora e mezza usando la metro M4 fino a Milano e poi il treno.",
      steps: [
        { name: "Metro M4", text: "Dalla M4 di Linate raggiungi il centro di Milano e Milano Centrale." },
        { name: "Treno per Piacenza", text: "Prendi il treno diretto a Piacenza (33-50 minuti)." },
        { name: "Arrivo a Roma284", text: "Dalla stazione di Piacenza, 9 minuti a piedi fino all'appartamento." },
      ],
    },
    {
      id: "auto", from: "In auto (Autostrada A1)", duration: "uscita Piacenza Sud/Ovest",
      summary: "Piacenza è sull'Autostrada del Sole A1, a circa un'ora da Milano in auto. In Via Roma il parcheggio è su strisce blu; in alternativa c'è un parcheggio custodito a 300 metri a piedi.",
      steps: [
        { name: "Esci dall'A1", text: "Prendi l'uscita Piacenza Sud o Piacenza Ovest e segui per il centro storico." },
        { name: "Arriva in Via Roma", text: "Raggiungi Via Roma 284, nel cuore del centro." },
        { name: "Parcheggia", text: "In Via Roma il parcheggio è su strisce blu; in alternativa il parcheggio custodito Urban Center, a soli 4 € al giorno e 300 metri a piedi. L'ingresso all'appartamento è al piano terra." },
      ],
    },
    {
      id: "bergamo-bologna", from: "Da Bergamo Orio al Serio e Bologna", duration: "~1 h 30 – 2 h",
      summary: "Da Bergamo Orio al Serio e dall'aeroporto di Bologna si raggiunge Piacenza in treno con un cambio, in circa 1h30-2h.",
      steps: [
        { name: "Raggiungi la stazione", text: "Da Orio al Serio usa il bus per Bergamo; da Bologna parti dalla stazione centrale." },
        { name: "Treno per Piacenza", text: "Prendi il treno per Piacenza, con eventuale cambio a Milano o Bologna." },
        { name: "A piedi fino a Roma284", text: "Dalla stazione di Piacenza, 9 minuti a piedi." },
      ],
    },
  ],
  en: [
    {
      id: "milano-centrale", from: "From Milan Centrale", duration: "33 min",
      summary: "The Frecciarossa train links Milan Centrale to Piacenza in 33 minutes, with up to 52 direct services a day (first 06:07, last 23:52).",
      steps: [
        { name: "Take the Frecciarossa", text: "At Milan Centrale board the Frecciarossa to Piacenza: the journey takes 33 minutes." },
        { name: "Get off at Piacenza", text: "Get off at Piacenza station, a convenient terminus in the city centre." },
        { name: "Walk to Roma284", text: "From Piacenza the apartment is 900 metres away, about a 9-minute walk through the centre." },
      ],
    },
    {
      id: "malpensa", from: "From Malpensa airport", duration: "~2 h",
      summary: "From Malpensa you reach Piacenza in about 2 hours with the Malpensa Express to Milan and then the train to Piacenza.",
      steps: [
        { name: "Malpensa Express", text: "Take the Malpensa Express to Milan Centrale (about 50 minutes)." },
        { name: "Train to Piacenza", text: "At Milan Centrale take the train to Piacenza (33-50 minutes)." },
        { name: "Walk to Roma284", text: "From Piacenza station, reach the apartment in a 9-minute walk." },
      ],
    },
    {
      id: "linate", from: "From Linate airport", duration: "~1 h 30",
      summary: "From Linate you reach Piacenza in about an hour and a half using metro M4 to Milan and then the train.",
      steps: [
        { name: "Metro M4", text: "From Linate's M4 reach central Milan and Milan Centrale." },
        { name: "Train to Piacenza", text: "Take the direct train to Piacenza (33-50 minutes)." },
        { name: "Arrive at Roma284", text: "From Piacenza station, a 9-minute walk to the apartment." },
      ],
    },
    {
      id: "auto", from: "By car (A1 motorway)", duration: "Piacenza Sud/Ovest exit",
      summary: "Piacenza is on the A1 motorway, about an hour from Milan by car. On Via Roma parking is on blue lines; alternatively there's a guarded car park a 300-metre walk away.",
      steps: [
        { name: "Exit the A1", text: "Take the Piacenza Sud or Piacenza Ovest exit and follow signs for the historic centre." },
        { name: "Reach Via Roma", text: "Reach Via Roma 284, in the heart of the centre." },
        { name: "Park", text: "On Via Roma parking is on blue lines; alternatively the guarded Urban Center car park, just €4 a day and a 300-metre walk. The apartment entrance is on the ground floor." },
      ],
    },
    {
      id: "bergamo-bologna", from: "From Bergamo Orio al Serio and Bologna", duration: "~1 h 30 – 2 h",
      summary: "From Bergamo Orio al Serio and Bologna airport you reach Piacenza by train with one change, in about 1h30-2h.",
      steps: [
        { name: "Reach the station", text: "From Orio al Serio take the bus to Bergamo; from Bologna start at the central station." },
        { name: "Train to Piacenza", text: "Take the train to Piacenza, with a possible change in Milan or Bologna." },
        { name: "Walk to Roma284", text: "From Piacenza station, a 9-minute walk." },
      ],
    },
  ],
};
