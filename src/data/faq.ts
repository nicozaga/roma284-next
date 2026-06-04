import type { Locale } from "@i18n/config";

/**
 * FAQ home — citation-friendly (frasi auto-contenute, dati esatti).
 * Alimentano sia la sezione visibile sia lo schema FAQPage.
 */
export interface FaqEntry {
  q: string;
  a: string;
}

export const FAQ_HOME: Partial<Record<Locale, FaqEntry[]>> = {
  it: [
    { q: "Dove si trova esattamente Roma284?", a: "Roma284 è in Via Roma 284, nel centro storico di Piacenza. Piazza Cavalli e il Duomo sono a 350 metri (5 minuti a piedi) e la stazione di Piacenza a 900 metri (9 minuti a piedi)." },
    { q: "Quanto dista Milano da Roma284?", a: "Milano Centrale è a 33 minuti con il treno Frecciarossa dalla stazione di Piacenza. Ogni giorno ci sono 46-52 treni diretti, dalla prima corsa delle 06:07 all'ultima delle 23:52." },
    { q: "Quante persone può ospitare l'appartamento?", a: "L'appartamento ospita fino a 4 persone: un letto matrimoniale (separabile in due singoli su richiesta) in camera e due poltrone letto singolo in soggiorno." },
    { q: "Com'è la connessione internet per lo smart working?", a: "L'appartamento ha Wi-Fi in fibra da 1 Gbit/s e uno spazio di lavoro dedicato. È pensato per chi lavora da remoto: videochiamate stabili e download veloci senza interruzioni." },
    { q: "C'è un parcheggio?", a: "Sì, è disponibile il parcheggio gratuito in strada nelle vicinanze. L'ingresso all'appartamento è al piano terra, senza scale." },
    { q: "Posso portare il mio animale domestico?", a: "Sì, gli animali domestici sono sempre benvenuti a Roma284, senza costi aggiuntivi. Il patio privato sul cortile interno è comodo anche per chi viaggia con il cane." },
    { q: "A che ora sono il check-in e il check-out?", a: "Il check-in è dalle 15:00 e il check-out entro le 10:00. Prenotando in diretta possiamo concordare orari flessibili in base al tuo viaggio." },
    { q: "L'appartamento ha una cucina attrezzata?", a: "Sì, la cucina open space è completamente attrezzata: piano a induzione a 4 fuochi, forno combinato, lavastoviglie, frigorifero con freezer e macchina caffè Nespresso con cialde omaggio." },
    { q: "C'è uno spazio all'aperto?", a: "Sì, l'appartamento ha un patio privato arredato con tavolo e sedie sul tranquillo cortile interno, perfetto per la colazione al sole o un aperitivo la sera." },
    { q: "Perché conviene prenotare direttamente sul sito?", a: "Prenotando in diretta hai contatto diretto con noi, check-in flessibile su richiesta e conferma immediata via WhatsApp o email, senza intermediari." },
    { q: "Roma284 è adatto a chi viaggia per lavoro o per le fiere di Milano?", a: "Sì. Con la Frecciarossa raggiungi Milano Centrale in 33 minuti e la Fiera di Rho con la metro M1. È una base tranquilla e ben collegata per trasferte di lavoro ed eventi." },
  ],
  en: [
    { q: "Where exactly is Roma284?", a: "Roma284 is at Via Roma 284, in the historic centre of Piacenza. Piazza Cavalli and the Cathedral are 350 metres away (5-minute walk) and Piacenza station is 900 metres away (9-minute walk)." },
    { q: "How far is Milan from Roma284?", a: "Milan Centrale is 33 minutes away on the Frecciarossa high-speed train from Piacenza station. There are 46-52 direct trains a day, from the first at 06:07 to the last at 23:52." },
    { q: "How many people can the apartment host?", a: "The apartment hosts up to 4 people: a double bed (splittable into two singles on request) in the bedroom and two single sofa beds in the living room." },
    { q: "What is the internet connection like for remote work?", a: "The apartment has 1 Gbit/s fibre Wi-Fi and a dedicated workspace. It is designed for remote workers: stable video calls and fast downloads without interruptions." },
    { q: "Is there parking?", a: "Yes, free on-street parking is available nearby. The apartment entrance is on the ground floor, with no stairs." },
    { q: "Can I bring my pet?", a: "Yes, pets are always welcome at Roma284, at no extra cost. The private patio on the inner courtyard is handy for those travelling with a dog too." },
    { q: "What are the check-in and check-out times?", a: "Check-in is from 15:00 and check-out by 10:00. When you book direct, we can arrange flexible times around your trip." },
    { q: "Does the apartment have a fully equipped kitchen?", a: "Yes, the open-plan kitchen is fully equipped: 4-ring induction hob, combi oven, dishwasher, fridge with freezer and a Nespresso coffee machine with complimentary capsules." },
    { q: "Is there an outdoor space?", a: "Yes, the apartment has a furnished private patio with table and chairs on the quiet inner courtyard, perfect for breakfast in the sun or an evening aperitif." },
    { q: "Why is it better to book directly on the website?", a: "Booking direct, you get direct contact with us, flexible check-in on request and instant confirmation by WhatsApp or email, with no middlemen." },
    { q: "Is Roma284 suitable for business trips or the Milan fairs?", a: "Yes. The Frecciarossa reaches Milan Centrale in 33 minutes and the Rho fairground via metro M1. It is a quiet, well-connected base for business trips and events." },
  ],
};
