/** FAQ complete per categoria — alimentano la pagina /faq e lo schema FAQPage. */
export interface FaqCategory {
  category: string;
  items: { q: string; a: string }[];
}

export const FAQ_FULL_IT: FaqCategory[] = [
  {
    category: "Prenotazione",
    items: [
      { q: "Come prenoto Roma284?", a: "Puoi prenotare direttamente dal sito nella pagina Prenota, scegliendo le date sul calendario. Ricevi la conferma immediata via email." },
      { q: "Perché conviene prenotare in diretta?", a: "Prenotando in diretta hai contatto diretto con noi, check-in flessibile su richiesta e conferma immediata, senza intermediari." },
      { q: "Posso prenotare per una sola notte?", a: "La durata minima del soggiorno può variare in base al periodo. Scrivici su WhatsApp e verifichiamo subito la disponibilità per le tue date." },
      { q: "Quante persone posso ospitare?", a: "L'appartamento ospita fino a 4 persone: letto matrimoniale (separabile in due singoli) e due poltrone letto singolo in soggiorno." },
      { q: "Posso portare il mio animale domestico?", a: "Sì, gli animali domestici sono sempre benvenuti a Roma284, senza costi aggiuntivi." },
    ],
  },
  {
    category: "Check-in e check-out",
    items: [
      { q: "A che ora posso fare il check-in?", a: "Il check-in è dalle 15:00. Prenotando in diretta possiamo concordare orari flessibili in base al tuo arrivo." },
      { q: "A che ora devo lasciare l'appartamento?", a: "Il check-out è entro le 10:00. Per esigenze particolari scrivici e cerchiamo una soluzione." },
      { q: "Come funziona l'ingresso?", a: "L'appartamento è al piano terra, con ingresso diretto e senza scale. Ti forniamo tutte le istruzioni prima dell'arrivo." },
      { q: "Posso lasciare i bagagli prima del check-in?", a: "Contattaci in anticipo: dove possibile cerchiamo di venire incontro alle esigenze di deposito bagagli." },
    ],
  },
  {
    category: "Servizi e comfort",
    items: [
      { q: "Com'è la connessione Wi-Fi?", a: "L'appartamento ha Wi-Fi in fibra da 1 Gbit/s con uno spazio di lavoro dedicato: perfetto per videochiamate e smart working." },
      { q: "La cucina è attrezzata?", a: "Sì, la cucina open space ha piano a induzione, forno combinato, lavastoviglie, frigorifero con freezer e macchina caffè Nespresso con cialde omaggio." },
      { q: "C'è l'aria condizionata?", a: "Sì, l'appartamento ha climatizzazione caldo/freddo e riscaldamento autonomo." },
      { q: "Ci sono lavatrice e asciugatrice?", a: "Sì, è disponibile una lavasciuga multifunzione." },
      { q: "C'è uno spazio all'aperto?", a: "Sì, un patio privato arredato sul tranquillo cortile interno, perfetto per la colazione o un aperitivo." },
      { q: "Sono forniti lenzuola e asciugamani?", a: "Sì, sono inclusi biancheria da letto di qualità con topper in memory foam e asciugamani." },
    ],
  },
  {
    category: "Posizione e trasporti",
    items: [
      { q: "Dove si trova esattamente l'appartamento?", a: "In Via Roma 284, nel centro storico di Piacenza. Piazza Cavalli e il Duomo sono a 350 metri (5 minuti a piedi)." },
      { q: "Quanto dista la stazione?", a: "La stazione di Piacenza è a 900 metri, circa 9 minuti a piedi." },
      { q: "Quanto ci vuole per Milano?", a: "Milano Centrale è a 33 minuti in Frecciarossa, con fino a 52 treni diretti al giorno (prima 06:07, ultima 23:52)." },
      { q: "Come raggiungo la Fiera di Rho?", a: "Con la Frecciarossa fino a Milano e poi la metro M1 fino a Rho Fiera, in circa un'ora complessiva." },
      { q: "C'è parcheggio?", a: "Sì, è disponibile parcheggio gratuito in strada nelle vicinanze." },
    ],
  },
  {
    category: "Pagamenti",
    items: [
      { q: "Come posso pagare?", a: "Il pagamento avviene in modo sicuro tramite il sistema di prenotazione del sito." },
      { q: "Servono prezzi o preventivi?", a: "Le tariffe sono mostrate nel calendario di prenotazione in base alle date scelte. Per richieste particolari scrivici." },
      { q: "È richiesta una cauzione?", a: "Eventuali dettagli su cauzione e condizioni vengono comunicati in fase di prenotazione." },
    ],
  },
  {
    category: "Cancellazione",
    items: [
      { q: "Posso cancellare la prenotazione?", a: "Le condizioni di cancellazione dipendono dalle date e dalla tariffa scelta e sono indicate al momento della prenotazione." },
      { q: "Cosa succede se devo modificare le date?", a: "Contattaci il prima possibile: dove c'è disponibilità cerchiamo sempre di venirti incontro." },
    ],
  },
];

export const FAQ_FULL_FLAT_IT = FAQ_FULL_IT.flatMap((c) => c.items);
