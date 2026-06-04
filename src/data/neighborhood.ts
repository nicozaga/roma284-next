import type { Locale } from "@i18n/config";

/** Quartiere — ristoranti, supermercati e POI vicini. */
export interface Eatery { name: string; type: string; note: string }
export interface NamedNote { name: string; note: string }

interface Neighborhood {
  restaurants: Eatery[];
  supermarkets: NamedNote[];
  sights: NamedNote[];
}

export const NEIGHBORHOOD: Partial<Record<Locale, Neighborhood>> = {
  it: {
    restaurants: [
      { name: "Tosello", type: "Cucina piacentina", note: "Tradizione locale a pochi passi dall'appartamento." },
      { name: "La Pireina", type: "Trattoria tipica", note: "Piatti piacentini autentici in centro." },
      { name: "Osteria d'una volta", type: "Osteria", note: "Atmosfera storica e cucina del territorio." },
      { name: "Vecchia Piacenza", type: "Ristorante", note: "Specialità emiliane in pieno centro." },
      { name: "Pizzikotto", type: "Pizzeria", note: "Pizza napoletana, ottima per una serata informale." },
      { name: "Pizzium", type: "Pizzeria", note: "Pizza gourmet con ingredienti selezionati." },
      { name: "Crudo", type: "Pesce & sushi", note: "Crudi di pesce e proposte di mare." },
      { name: "Izakaya", type: "Giapponese", note: "Cucina giapponese in stile izakaya." },
      { name: "Sosushi", type: "Sushi", note: "Sushi e cucina fusion." },
      { name: "Eataly", type: "Gastronomia & market", note: "Ristorante e prodotti italiani di qualità." },
    ],
    supermarkets: [
      { name: "Sigma", note: "Supermercato di vicinato, a pochi minuti a piedi." },
      { name: "Esselunga", note: "Grande supermercato per la spesa completa." },
      { name: "Eataly", note: "Prodotti italiani di qualità in centro." },
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
      { name: "Tosello", type: "Piacenza cuisine", note: "Local tradition a few steps from the apartment." },
      { name: "La Pireina", type: "Traditional trattoria", note: "Authentic Piacenza dishes in the centre." },
      { name: "Osteria d'una volta", type: "Osteria", note: "Historic atmosphere and regional cooking." },
      { name: "Vecchia Piacenza", type: "Restaurant", note: "Emilian specialities right in the centre." },
      { name: "Pizzikotto", type: "Pizzeria", note: "Neapolitan pizza, great for a casual evening." },
      { name: "Pizzium", type: "Pizzeria", note: "Gourmet pizza with selected ingredients." },
      { name: "Crudo", type: "Fish & sushi", note: "Raw fish and seafood dishes." },
      { name: "Izakaya", type: "Japanese", note: "Japanese izakaya-style cooking." },
      { name: "Sosushi", type: "Sushi", note: "Sushi and fusion cuisine." },
      { name: "Eataly", type: "Deli & market", note: "Restaurant and quality Italian products." },
    ],
    supermarkets: [
      { name: "Sigma", note: "Neighbourhood supermarket, a few minutes' walk away." },
      { name: "Esselunga", note: "Large supermarket for the full shop." },
      { name: "Eataly", note: "Quality Italian products in the centre." },
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
