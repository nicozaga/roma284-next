/**
 * FAQ home — scritte citation-friendly (frasi auto-contenute, dati esatti).
 * Alimentano sia la sezione visibile sia lo schema FAQPage.
 */
export interface FaqEntry {
  q: string;
  a: string;
}

export const FAQ_HOME_IT: FaqEntry[] = [
  {
    q: "Dove si trova esattamente Roma284?",
    a: "Roma284 è in Via Roma 284, nel centro storico di Piacenza. Piazza Cavalli e il Duomo sono a 350 metri (5 minuti a piedi) e la stazione di Piacenza a 900 metri (9 minuti a piedi).",
  },
  {
    q: "Quanto dista Milano da Roma284?",
    a: "Milano Centrale è a 33 minuti con il treno Frecciarossa dalla stazione di Piacenza. Ogni giorno ci sono 46-52 treni diretti, dalla prima corsa delle 06:07 all'ultima delle 23:52.",
  },
  {
    q: "Quante persone può ospitare l'appartamento?",
    a: "L'appartamento ospita fino a 4 persone: un letto matrimoniale (separabile in due singoli su richiesta) in camera e due poltrone letto singolo in soggiorno.",
  },
  {
    q: "Com'è la connessione internet per lo smart working?",
    a: "L'appartamento ha Wi-Fi in fibra da 1 Gbit/s e uno spazio di lavoro dedicato. È pensato per chi lavora da remoto: videochiamate stabili e download veloci senza interruzioni.",
  },
  {
    q: "C'è un parcheggio?",
    a: "Sì, è disponibile il parcheggio gratuito in strada nelle vicinanze. L'ingresso all'appartamento è al piano terra, senza scale.",
  },
  {
    q: "A che ora sono il check-in e il check-out?",
    a: "Il check-in è dalle 15:00 e il check-out entro le 10:00. Prenotando in diretta possiamo concordare orari flessibili in base al tuo viaggio.",
  },
  {
    q: "L'appartamento ha una cucina attrezzata?",
    a: "Sì, la cucina open space è completamente attrezzata: piano a induzione a 4 fuochi, forno combinato, lavastoviglie, frigorifero con freezer e macchina caffè Nespresso con cialde omaggio.",
  },
  {
    q: "C'è uno spazio all'aperto?",
    a: "Sì, l'appartamento ha un patio privato arredato con tavolo e sedie sul tranquillo cortile interno, perfetto per la colazione al sole o un aperitivo la sera.",
  },
  {
    q: "Perché conviene prenotare direttamente sul sito?",
    a: "Prenotando in diretta hai contatto diretto con noi, check-in flessibile su richiesta e conferma immediata via WhatsApp o email, senza intermediari.",
  },
  {
    q: "Roma284 è adatto a chi viaggia per lavoro o per le fiere di Milano?",
    a: "Sì. Con la Frecciarossa raggiungi Milano Centrale in 33 minuti e la Fiera di Rho con la metro M1. È una base tranquilla e ben collegata per trasferte di lavoro ed eventi.",
  },
];
