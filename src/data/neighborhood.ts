import type { Locale } from "@i18n/config";

/**
 * Quartiere — ristoranti, supermercati e POI vicini.
 * Indirizzi verificati via ricerca web (giu 2026). Le distanze sono
 * APPROSSIMATIVE a piedi da Via Roma 284; il link Maps dà il dato esatto.
 * `query` è la stringa di ricerca per il link Google Maps (lingua-neutra).
 */
export interface Eatery {
  name: string;
  type: string;
  note: string;
  address: string;
  dist: string;
  query: string;
}
export interface Shop {
  name: string;
  note: string;
  address: string;
  dist: string;
  query: string;
}
export interface NamedNote { name: string; note: string }

interface Neighborhood {
  restaurants: Eatery[];
  supermarkets: Shop[];
  sights: NamedNote[];
}

const Q = {
  tosello: "Pizzeria Tosello, Via Francesco Daveri 10, Piacenza",
  marechiaro: "Ristorante Pizzeria Marechiaro, Corso Vittorio Emanuele II 168, Piacenza",
  pireina: "Trattoria La Pireina, Via Borghetto 137, Piacenza",
  osteria: "Osteria d'una Volta, Via San Giovanni 36, Piacenza",
  angelo: "Antica Trattoria dell'Angelo, Via Tibini 14, Piacenza",
  vecchia: "Ristorante Vecchia Piacenza, Via San Bernardo 1, Piacenza",
  pizzikotto: "Pizzikotto, Via Emilia Parmense 21, Piacenza",
  crudo: "Crudo, Via Alessandro Bolzoni 17, Piacenza",
  izakaya: "Izakaya by Domechan, Viale Dante Alighieri 37, Piacenza",
  sosushi: "Sosushi, Corso Vittorio Emanuele II 229, Piacenza",
  eataly: "Eataly Piacenza, Stradone Farnese 39, Piacenza",
  sigma: "Sigma, Via Caduti sul Lavoro 12, Piacenza",
  esselunga: "Esselunga, Via della Conciliazione, Piacenza",
};

export const NEIGHBORHOOD: Partial<Record<Locale, Neighborhood>> = {
  it: {
    restaurants: [
      { name: "Tosello", type: "Pizzeria storica", note: "Una delle pizzerie più amate di Piacenza, sempre piena: meglio prenotare.", address: "Via Francesco Daveri 10", dist: "~600 m a piedi", query: Q.tosello },
      { name: "Marechiaro", type: "Pizzeria napoletana", note: "Pizzeria storica dal 1963, vera pizza napoletana cotta nel forno a legna.", address: "Corso Vittorio Emanuele II 168", dist: "~700 m a piedi", query: Q.marechiaro },
      { name: "La Pireina", type: "Trattoria tipica", note: "Piatti piacentini autentici vicino alle antiche mura.", address: "Via Borghetto 137", dist: "~950 m a piedi", query: Q.pireina },
      { name: "Osteria d'una Volta", type: "Osteria", note: "Atmosfera storica e cucina del territorio, nel cuore del centro.", address: "Via San Giovanni 36", dist: "~550 m a piedi", query: Q.osteria },
      { name: "Antica Trattoria dell'Angelo", type: "Trattoria storica", note: "Bottega storica: da oltre 200 anni cucina e vini piacentini tra queste mura.", address: "Via Tibini 14", dist: "~700 m a piedi", query: Q.angelo },
      { name: "Vecchia Piacenza", type: "Ristorante", note: "Specialità emiliane nel settecentesco Palazzo Scotti, angolo Via Taverna.", address: "Via San Bernardo 1", dist: "~650 m a piedi", query: Q.vecchia },
      { name: "Pizzikotto", type: "Pizzeria & Lifferia", note: "Pizza artigianale e lifferie; comodo anche per l'asporto e il delivery.", address: "Via Emilia Parmense 21", dist: "~2,5 km (in auto)", query: Q.pizzikotto },
      { name: "Crudo", type: "Pesce & sushi", note: "Crudi di pesce, sushi e proposte fusion in centro.", address: "Via Alessandro Bolzoni 17", dist: "~700 m a piedi", query: Q.crudo },
      { name: "Izakaya by Domechan", type: "Giapponese", note: "Cucina giapponese in stile izakaya; chiuso domenica e lunedì.", address: "Viale Dante Alighieri 37", dist: "~1,2 km a piedi", query: Q.izakaya },
      { name: "Sosushi", type: "Sushi", note: "Sushi e cucina fusion sul Corso, all you can eat e à la carte.", address: "Corso Vittorio Emanuele II 229", dist: "~750 m a piedi", query: Q.sosushi },
      { name: "Eataly", type: "Gastronomia & market", note: "Ristorante, pizzeria e prodotti italiani di qualità, a due passi da casa.", address: "Stradone Farnese 39", dist: "~300 m a piedi", query: Q.eataly },
    ],
    supermarkets: [
      { name: "Eataly", note: "Spesa di qualità e gastronomia italiana, vicinissimo all'appartamento.", address: "Stradone Farnese 39", dist: "~300 m a piedi", query: Q.eataly },
      { name: "Esselunga", note: "Grande supermercato per la spesa completa.", address: "Via della Conciliazione", dist: "~1,5 km (in auto)", query: Q.esselunga },
      { name: "Sigma", note: "Supermercato per la spesa di tutti i giorni.", address: "Via Caduti sul Lavoro 12", dist: "~1,3 km", query: Q.sigma },
    ],
    sights: [
      { name: "Piazza Cavalli", note: "Il salotto di Piacenza, con i celebri cavalli in bronzo del Mochi." },
      { name: "Duomo di Piacenza", note: "Cattedrale romanica del XII secolo, a 5 minuti a piedi." },
      { name: "Palazzo Farnese", note: "Imponente palazzo rinascimentale con i Musei Civici." },
      { name: "Galleria Ricci Oddi", note: "Galleria d'arte moderna con opere dell'Otto-Novecento." },
      { name: "Zona pedonale", note: "Vie dello shopping e dei caffè nel cuore storico." },
    ],
  },
  en: {
    restaurants: [
      { name: "Tosello", type: "Historic pizzeria", note: "One of Piacenza's best-loved pizzerias, always busy: booking is recommended.", address: "Via Francesco Daveri 10", dist: "~600 m walk", query: Q.tosello },
      { name: "Marechiaro", type: "Neapolitan pizzeria", note: "Historic pizzeria since 1963, true Neapolitan pizza from a wood-fired oven.", address: "Corso Vittorio Emanuele II 168", dist: "~700 m walk", query: Q.marechiaro },
      { name: "La Pireina", type: "Traditional trattoria", note: "Authentic Piacenza dishes near the ancient city walls.", address: "Via Borghetto 137", dist: "~950 m walk", query: Q.pireina },
      { name: "Osteria d'una Volta", type: "Osteria", note: "Historic atmosphere and regional cooking, in the heart of the centre.", address: "Via San Giovanni 36", dist: "~550 m walk", query: Q.osteria },
      { name: "Antica Trattoria dell'Angelo", type: "Historic trattoria", note: "A historic spot: over 200 years of Piacenza food and wine within these walls.", address: "Via Tibini 14", dist: "~700 m walk", query: Q.angelo },
      { name: "Vecchia Piacenza", type: "Restaurant", note: "Emilian specialities in the 18th-century Palazzo Scotti, corner of Via Taverna.", address: "Via San Bernardo 1", dist: "~650 m walk", query: Q.vecchia },
      { name: "Pizzikotto", type: "Pizzeria & Lifferia", note: "Artisan pizza; also handy for takeaway and delivery.", address: "Via Emilia Parmense 21", dist: "~2.5 km (by car)", query: Q.pizzikotto },
      { name: "Crudo", type: "Fish & sushi", note: "Raw fish, sushi and fusion dishes in the centre.", address: "Via Alessandro Bolzoni 17", dist: "~700 m walk", query: Q.crudo },
      { name: "Izakaya by Domechan", type: "Japanese", note: "Japanese izakaya-style cooking; closed Sunday and Monday.", address: "Viale Dante Alighieri 37", dist: "~1.2 km walk", query: Q.izakaya },
      { name: "Sosushi", type: "Sushi", note: "Sushi and fusion on the Corso, all-you-can-eat and à la carte.", address: "Corso Vittorio Emanuele II 229", dist: "~750 m walk", query: Q.sosushi },
      { name: "Eataly", type: "Deli & market", note: "Restaurant, pizzeria and quality Italian products, a short walk from home.", address: "Stradone Farnese 39", dist: "~300 m walk", query: Q.eataly },
    ],
    supermarkets: [
      { name: "Eataly", note: "Quality groceries and Italian deli, very close to the apartment.", address: "Stradone Farnese 39", dist: "~300 m walk", query: Q.eataly },
      { name: "Esselunga", note: "Large supermarket for the full shop.", address: "Via della Conciliazione", dist: "~1.5 km (by car)", query: Q.esselunga },
      { name: "Sigma", note: "Supermarket for everyday shopping.", address: "Via Caduti sul Lavoro 12", dist: "~1.3 km", query: Q.sigma },
    ],
    sights: [
      { name: "Piazza Cavalli", note: "Piacenza's living room, with Mochi's famous bronze horse statues." },
      { name: "Piacenza Cathedral", note: "12th-century Romanesque cathedral, a 5-minute walk away." },
      { name: "Palazzo Farnese", note: "Imposing Renaissance palace housing the Civic Museums." },
      { name: "Ricci Oddi Gallery", note: "Modern art gallery with 19th–20th-century works." },
      { name: "Pedestrian area", note: "Shopping streets and cafés in the historic heart." },
    ],
  },
};
