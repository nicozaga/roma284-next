/** Quartiere — ristoranti, supermercati e POI vicini (dati dal sito esistente). */

export interface Eatery {
  name: string;
  type: string;
  note: string;
}

export const RESTAURANTS_IT: Eatery[] = [
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
];

export const SUPERMARKETS_IT = [
  { name: "Sigma", note: "Supermercato di vicinato, a pochi minuti a piedi." },
  { name: "Esselunga", note: "Grande supermercato per la spesa completa." },
  { name: "Eataly", note: "Prodotti italiani di qualità in centro." },
];

export const SIGHTS_IT = [
  { name: "Piazza Cavalli", note: "Il salotto di Piacenza, con i celebri cavalli in bronzo del Mochi." },
  { name: "Duomo di Piacenza", note: "Cattedrale romanica del XII secolo, a 5 minuti a piedi." },
  { name: "Palazzo Farnese", note: "Imponente palazzo rinascimentale con i Musei Civici." },
  { name: "Galleria Ricci Oddi", note: "Galleria d'arte moderna con opere dell'Otto-Novecento." },
  { name: "Zona pedonale", note: "Vie dello shopping e dei caffè nel cuore storico." },
];
