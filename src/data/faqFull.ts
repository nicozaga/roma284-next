import type { Locale } from "@i18n/config";

/** FAQ complete per categoria — alimentano la pagina /faq e lo schema FAQPage. */
export interface FaqCategory {
  category: string;
  items: { q: string; a: string }[];
}

export const FAQ_FULL: Partial<Record<Locale, FaqCategory[]>> = {
  it: [
    { category: "Prenotazione", items: [
      { q: "Come prenoto Roma284?", a: "Puoi prenotare direttamente dal sito nella pagina Prenota, scegliendo le date sul calendario. Ricevi la conferma immediata via email." },
      { q: "Perché conviene prenotare in diretta?", a: "Prenotando in diretta hai contatto diretto con noi, check-in flessibile su richiesta e conferma immediata, senza intermediari." },
      { q: "Posso prenotare per una sola notte?", a: "La durata minima del soggiorno può variare in base al periodo. Scrivici su WhatsApp e verifichiamo subito la disponibilità per le tue date." },
      { q: "Quante persone posso ospitare?", a: "L'appartamento ospita fino a 4 persone: letto matrimoniale (separabile in due singoli) e due poltrone letto singolo in soggiorno." },
      { q: "Posso portare il mio animale domestico?", a: "Sì, gli animali domestici sono sempre benvenuti a Roma284, senza costi aggiuntivi." },
    ] },
    { category: "Check-in e check-out", items: [
      { q: "A che ora posso fare il check-in?", a: "Il check-in è dalle 15:00. Prenotando in diretta possiamo concordare orari flessibili in base al tuo arrivo." },
      { q: "A che ora devo lasciare l'appartamento?", a: "Il check-out è entro le 10:00. Per esigenze particolari scrivici e cerchiamo una soluzione." },
      { q: "Come funziona l'ingresso?", a: "L'appartamento è al piano terra, con ingresso diretto e senza scale. Ti forniamo tutte le istruzioni prima dell'arrivo." },
      { q: "Posso lasciare i bagagli prima del check-in?", a: "Contattaci in anticipo: dove possibile cerchiamo di venire incontro alle esigenze di deposito bagagli." },
    ] },
    { category: "Servizi e comfort", items: [
      { q: "Com'è la connessione Wi-Fi?", a: "L'appartamento ha Wi-Fi in fibra da 1 Gbit/s con uno spazio di lavoro dedicato: perfetto per videochiamate e smart working." },
      { q: "La cucina è attrezzata?", a: "Sì, la cucina open space ha piano a induzione, forno combinato, lavastoviglie, frigorifero con freezer e macchina caffè Nespresso con cialde omaggio." },
      { q: "C'è l'aria condizionata?", a: "Sì, l'appartamento ha climatizzazione caldo/freddo e riscaldamento autonomo." },
      { q: "Ci sono lavatrice e asciugatrice?", a: "Sì, è disponibile una lavasciuga multifunzione." },
      { q: "C'è uno spazio all'aperto?", a: "Sì, un patio privato arredato sul tranquillo cortile interno, perfetto per la colazione o un aperitivo." },
      { q: "Sono forniti lenzuola e asciugamani?", a: "Sì, sono inclusi biancheria da letto di qualità con topper in memory foam e asciugamani." },
    ] },
    { category: "Posizione e trasporti", items: [
      { q: "Dove si trova esattamente l'appartamento?", a: "In Via Roma 284, nel centro storico di Piacenza. Piazza Cavalli e il Duomo sono a 350 metri (5 minuti a piedi)." },
      { q: "Quanto dista la stazione?", a: "La stazione di Piacenza è a 900 metri, circa 9 minuti a piedi." },
      { q: "Quanto ci vuole per Milano?", a: "Milano Centrale è a 33 minuti in Frecciarossa, con fino a 52 treni diretti al giorno (prima 06:07, ultima 23:52)." },
      { q: "Come raggiungo la Fiera di Rho?", a: "Con la Frecciarossa fino a Milano e poi la metro M1 fino a Rho Fiera, in circa un'ora complessiva." },
      { q: "C'è parcheggio?", a: "Sì, è disponibile parcheggio gratuito in strada nelle vicinanze." },
    ] },
    { category: "Pagamenti", items: [
      { q: "Come posso pagare?", a: "Il pagamento avviene in modo sicuro tramite il sistema di prenotazione del sito." },
      { q: "Servono prezzi o preventivi?", a: "Le tariffe sono mostrate nel calendario di prenotazione in base alle date scelte. Per richieste particolari scrivici." },
      { q: "È richiesta una cauzione?", a: "Eventuali dettagli su cauzione e condizioni vengono comunicati in fase di prenotazione." },
    ] },
    { category: "Cancellazione", items: [
      { q: "Posso cancellare la prenotazione?", a: "Le condizioni di cancellazione dipendono dalle date e dalla tariffa scelta e sono indicate al momento della prenotazione." },
      { q: "Cosa succede se devo modificare le date?", a: "Contattaci il prima possibile: dove c'è disponibilità cerchiamo sempre di venirti incontro." },
    ] },
  ],
  en: [
    { category: "Booking", items: [
      { q: "How do I book Roma284?", a: "You can book directly on the site from the Book page, choosing your dates on the calendar. You get instant confirmation by email." },
      { q: "Why is booking direct better?", a: "Booking direct, you get direct contact with us, flexible check-in on request and instant confirmation, with no middlemen." },
      { q: "Can I book for a single night?", a: "The minimum stay can vary by season. Message us on WhatsApp and we'll check availability for your dates right away." },
      { q: "How many people can I host?", a: "The apartment hosts up to 4 people: a double bed (splittable into two singles) and two single sofa beds in the living room." },
      { q: "Can I bring my pet?", a: "Yes, pets are always welcome at Roma284, at no extra cost." },
    ] },
    { category: "Check-in and check-out", items: [
      { q: "What time can I check in?", a: "Check-in is from 15:00. Booking direct, we can arrange flexible times around your arrival." },
      { q: "What time do I have to leave?", a: "Check-out is by 10:00. For special needs, write to us and we'll look for a solution." },
      { q: "How does the entrance work?", a: "The apartment is on the ground floor, with direct, step-free access. We provide all instructions before arrival." },
      { q: "Can I drop off luggage before check-in?", a: "Contact us in advance: where possible we try to accommodate luggage storage needs." },
    ] },
    { category: "Amenities and comfort", items: [
      { q: "What is the Wi-Fi like?", a: "The apartment has 1 Gbit/s fibre Wi-Fi with a dedicated workspace: perfect for video calls and remote work." },
      { q: "Is the kitchen equipped?", a: "Yes, the open-plan kitchen has an induction hob, combi oven, dishwasher, fridge with freezer and a Nespresso coffee machine with complimentary capsules." },
      { q: "Is there air conditioning?", a: "Yes, the apartment has hot/cold air conditioning and independent heating." },
      { q: "Are there a washer and dryer?", a: "Yes, a multifunction washer-dryer is available." },
      { q: "Is there an outdoor space?", a: "Yes, a furnished private patio on the quiet inner courtyard, perfect for breakfast or an aperitif." },
      { q: "Are linens and towels provided?", a: "Yes, quality bed linen with a memory-foam topper and towels are included." },
    ] },
    { category: "Location and transport", items: [
      { q: "Where exactly is the apartment?", a: "At Via Roma 284, in the historic centre of Piacenza. Piazza Cavalli and the Cathedral are 350 metres away (5-minute walk)." },
      { q: "How far is the station?", a: "Piacenza station is 900 metres away, about a 9-minute walk." },
      { q: "How long to Milan?", a: "Milan Centrale is 33 minutes away by Frecciarossa, with up to 52 direct trains a day (first 06:07, last 23:52)." },
      { q: "How do I reach the Rho fairground?", a: "By Frecciarossa to Milan and then metro M1 to Rho Fiera, in about an hour overall." },
      { q: "Is there parking?", a: "Yes, free on-street parking is available nearby." },
    ] },
    { category: "Payments", items: [
      { q: "How can I pay?", a: "Payment is handled securely through the site's booking system." },
      { q: "Do you provide prices or quotes?", a: "Rates are shown in the booking calendar based on your chosen dates. For special requests, write to us." },
      { q: "Is a deposit required?", a: "Any details on deposit and conditions are communicated at the time of booking." },
    ] },
    { category: "Cancellation", items: [
      { q: "Can I cancel my booking?", a: "Cancellation terms depend on your dates and chosen rate and are shown at the time of booking." },
      { q: "What if I need to change my dates?", a: "Contact us as soon as possible: where there's availability, we always try to accommodate you." },
    ] },
  ],
};
