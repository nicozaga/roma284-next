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
  fr: {
    restaurants: [
      { name: "Tosello", type: "Pizzeria historique", note: "L'une des pizzerias les plus appréciées de Plaisance, toujours pleine : mieux vaut réserver.", address: "Via Francesco Daveri 10", dist: "~600 m à pied", query: Q.tosello },
      { name: "Marechiaro", type: "Pizzeria napolitaine", note: "Pizzeria historique depuis 1963, véritable pizza napolitaine cuite au feu de bois.", address: "Corso Vittorio Emanuele II 168", dist: "~700 m à pied", query: Q.marechiaro },
      { name: "La Pireina", type: "Trattoria typique", note: "Plats authentiques de Plaisance près des anciens remparts.", address: "Via Borghetto 137", dist: "~950 m à pied", query: Q.pireina },
      { name: "Osteria d'una Volta", type: "Osteria", note: "Atmosphère historique et cuisine du terroir, au cœur du centre.", address: "Via San Giovanni 36", dist: "~550 m à pied", query: Q.osteria },
      { name: "Antica Trattoria dell'Angelo", type: "Trattoria historique", note: "Adresse historique : depuis plus de 200 ans, cuisine et vins de Plaisance entre ces murs.", address: "Via Tibini 14", dist: "~700 m à pied", query: Q.angelo },
      { name: "Vecchia Piacenza", type: "Restaurant", note: "Spécialités émiliennes dans le Palazzo Scotti du XVIIIe siècle, à l'angle de la Via Taverna.", address: "Via San Bernardo 1", dist: "~650 m à pied", query: Q.vecchia },
      { name: "Pizzikotto", type: "Pizzeria & Lifferia", note: "Pizza artisanale ; pratique aussi pour l'emporter et la livraison.", address: "Via Emilia Parmense 21", dist: "~2,5 km (en voiture)", query: Q.pizzikotto },
      { name: "Crudo", type: "Poisson & sushi", note: "Poissons crus, sushi et plats fusion dans le centre.", address: "Via Alessandro Bolzoni 17", dist: "~700 m à pied", query: Q.crudo },
      { name: "Izakaya by Domechan", type: "Japonais", note: "Cuisine japonaise façon izakaya ; fermé dimanche et lundi.", address: "Viale Dante Alighieri 37", dist: "~1,2 km à pied", query: Q.izakaya },
      { name: "Sosushi", type: "Sushi", note: "Sushi et cuisine fusion sur le Corso, à volonté et à la carte.", address: "Corso Vittorio Emanuele II 229", dist: "~750 m à pied", query: Q.sosushi },
      { name: "Eataly", type: "Épicerie fine & marché", note: "Restaurant, pizzeria et produits italiens de qualité, à deux pas de la maison.", address: "Stradone Farnese 39", dist: "~300 m à pied", query: Q.eataly },
    ],
    supermarkets: [
      { name: "Eataly", note: "Courses de qualité et épicerie fine italienne, tout près de l'appartement.", address: "Stradone Farnese 39", dist: "~300 m à pied", query: Q.eataly },
      { name: "Esselunga", note: "Grand supermarché pour faire toutes les courses.", address: "Via della Conciliazione", dist: "~1,5 km (en voiture)", query: Q.esselunga },
      { name: "Sigma", note: "Supermarché pour les courses de tous les jours.", address: "Via Caduti sul Lavoro 12", dist: "~1,3 km", query: Q.sigma },
    ],
    sights: [
      { name: "Piazza Cavalli", note: "Le salon de Plaisance, avec les célèbres chevaux en bronze du Mochi." },
      { name: "Cathédrale de Plaisance", note: "Cathédrale romane du XIIe siècle, à 5 minutes à pied." },
      { name: "Palazzo Farnese", note: "Imposant palais Renaissance abritant les Musées municipaux." },
      { name: "Galerie Ricci Oddi", note: "Galerie d'art moderne avec des œuvres des XIXe et XXe siècles." },
      { name: "Zone piétonne", note: "Rues commerçantes et cafés dans le cœur historique." },
    ],
  },
  de: {
    restaurants: [
      { name: "Tosello", type: "Traditionelle Pizzeria", note: "Eine der beliebtesten Pizzerien von Piacenza, immer voll: am besten reservieren.", address: "Via Francesco Daveri 10", dist: "~600 m zu Fuß", query: Q.tosello },
      { name: "Marechiaro", type: "Neapolitanische Pizzeria", note: "Traditionelle Pizzeria seit 1963, echte neapolitanische Pizza aus dem Holzofen.", address: "Corso Vittorio Emanuele II 168", dist: "~700 m zu Fuß", query: Q.marechiaro },
      { name: "La Pireina", type: "Typische Trattoria", note: "Authentische Gerichte aus Piacenza nahe der alten Stadtmauer.", address: "Via Borghetto 137", dist: "~950 m zu Fuß", query: Q.pireina },
      { name: "Osteria d'una Volta", type: "Osteria", note: "Historisches Ambiente und regionale Küche, im Herzen des Zentrums.", address: "Via San Giovanni 36", dist: "~550 m zu Fuß", query: Q.osteria },
      { name: "Antica Trattoria dell'Angelo", type: "Historische Trattoria", note: "Traditionslokal: seit über 200 Jahren Küche und Weine aus Piacenza in diesen Mauern.", address: "Via Tibini 14", dist: "~700 m zu Fuß", query: Q.angelo },
      { name: "Vecchia Piacenza", type: "Restaurant", note: "Emilianische Spezialitäten im Palazzo Scotti aus dem 18. Jahrhundert, Ecke Via Taverna.", address: "Via San Bernardo 1", dist: "~650 m zu Fuß", query: Q.vecchia },
      { name: "Pizzikotto", type: "Pizzeria & Lifferia", note: "Handwerklich gemachte Pizza; auch praktisch für Take-away und Lieferung.", address: "Via Emilia Parmense 21", dist: "~2,5 km (mit dem Auto)", query: Q.pizzikotto },
      { name: "Crudo", type: "Fisch & Sushi", note: "Roher Fisch, Sushi und Fusion-Gerichte im Zentrum.", address: "Via Alessandro Bolzoni 17", dist: "~700 m zu Fuß", query: Q.crudo },
      { name: "Izakaya by Domechan", type: "Japanisch", note: "Japanische Küche im Izakaya-Stil; sonntags und montags geschlossen.", address: "Viale Dante Alighieri 37", dist: "~1,2 km zu Fuß", query: Q.izakaya },
      { name: "Sosushi", type: "Sushi", note: "Sushi und Fusion-Küche am Corso, All-you-can-eat und à la carte.", address: "Corso Vittorio Emanuele II 229", dist: "~750 m zu Fuß", query: Q.sosushi },
      { name: "Eataly", type: "Feinkost & Markt", note: "Restaurant, Pizzeria und hochwertige italienische Produkte, nur wenige Schritte entfernt.", address: "Stradone Farnese 39", dist: "~300 m zu Fuß", query: Q.eataly },
    ],
    supermarkets: [
      { name: "Eataly", note: "Hochwertige Lebensmittel und italienische Feinkost, ganz in der Nähe der Wohnung.", address: "Stradone Farnese 39", dist: "~300 m zu Fuß", query: Q.eataly },
      { name: "Esselunga", note: "Großer Supermarkt für den kompletten Einkauf.", address: "Via della Conciliazione", dist: "~1,5 km (mit dem Auto)", query: Q.esselunga },
      { name: "Sigma", note: "Supermarkt für den täglichen Einkauf.", address: "Via Caduti sul Lavoro 12", dist: "~1,3 km", query: Q.sigma },
    ],
    sights: [
      { name: "Piazza Cavalli", note: "Der Salon von Piacenza, mit den berühmten Bronzepferden des Mochi." },
      { name: "Dom von Piacenza", note: "Romanische Kathedrale aus dem 12. Jahrhundert, 5 Gehminuten entfernt." },
      { name: "Palazzo Farnese", note: "Imposanter Renaissance-Palast mit den Städtischen Museen." },
      { name: "Galerie Ricci Oddi", note: "Galerie für moderne Kunst mit Werken des 19. und 20. Jahrhunderts." },
      { name: "Fußgängerzone", note: "Einkaufsstraßen und Cafés im historischen Herzen." },
    ],
  },
  es: {
    restaurants: [
      { name: "Tosello", type: "Pizzería histórica", note: "Una de las pizzerías más queridas de Piacenza, siempre llena: mejor reservar.", address: "Via Francesco Daveri 10", dist: "~600 m a pie", query: Q.tosello },
      { name: "Marechiaro", type: "Pizzería napolitana", note: "Pizzería histórica desde 1963, auténtica pizza napolitana cocida en horno de leña.", address: "Corso Vittorio Emanuele II 168", dist: "~700 m a pie", query: Q.marechiaro },
      { name: "La Pireina", type: "Trattoria típica", note: "Platos auténticos de Piacenza cerca de las antiguas murallas.", address: "Via Borghetto 137", dist: "~950 m a pie", query: Q.pireina },
      { name: "Osteria d'una Volta", type: "Osteria", note: "Ambiente histórico y cocina del territorio, en el corazón del centro.", address: "Via San Giovanni 36", dist: "~550 m a pie", query: Q.osteria },
      { name: "Antica Trattoria dell'Angelo", type: "Trattoria histórica", note: "Local histórico: desde hace más de 200 años, cocina y vinos de Piacenza entre estos muros.", address: "Via Tibini 14", dist: "~700 m a pie", query: Q.angelo },
      { name: "Vecchia Piacenza", type: "Restaurante", note: "Especialidades emilianas en el Palazzo Scotti del siglo XVIII, esquina con Via Taverna.", address: "Via San Bernardo 1", dist: "~650 m a pie", query: Q.vecchia },
      { name: "Pizzikotto", type: "Pizzería & Lifferia", note: "Pizza artesanal; también práctico para llevar y a domicilio.", address: "Via Emilia Parmense 21", dist: "~2,5 km (en coche)", query: Q.pizzikotto },
      { name: "Crudo", type: "Pescado & sushi", note: "Crudos de pescado, sushi y propuestas fusión en el centro.", address: "Via Alessandro Bolzoni 17", dist: "~700 m a pie", query: Q.crudo },
      { name: "Izakaya by Domechan", type: "Japonés", note: "Cocina japonesa estilo izakaya; cerrado domingos y lunes.", address: "Viale Dante Alighieri 37", dist: "~1,2 km a pie", query: Q.izakaya },
      { name: "Sosushi", type: "Sushi", note: "Sushi y cocina fusión en el Corso, all you can eat y a la carta.", address: "Corso Vittorio Emanuele II 229", dist: "~750 m a pie", query: Q.sosushi },
      { name: "Eataly", type: "Gastronomía & market", note: "Restaurante, pizzería y productos italianos de calidad, a un paso de casa.", address: "Stradone Farnese 39", dist: "~300 m a pie", query: Q.eataly },
    ],
    supermarkets: [
      { name: "Eataly", note: "Compra de calidad y gastronomía italiana, muy cerca del apartamento.", address: "Stradone Farnese 39", dist: "~300 m a pie", query: Q.eataly },
      { name: "Esselunga", note: "Gran supermercado para la compra completa.", address: "Via della Conciliazione", dist: "~1,5 km (en coche)", query: Q.esselunga },
      { name: "Sigma", note: "Supermercado para la compra de cada día.", address: "Via Caduti sul Lavoro 12", dist: "~1,3 km", query: Q.sigma },
    ],
    sights: [
      { name: "Piazza Cavalli", note: "El salón de Piacenza, con los célebres caballos de bronce del Mochi." },
      { name: "Duomo de Piacenza", note: "Catedral románica del siglo XII, a 5 minutos a pie." },
      { name: "Palazzo Farnese", note: "Imponente palacio renacentista que alberga los Museos Cívicos." },
      { name: "Galería Ricci Oddi", note: "Galería de arte moderno con obras de los siglos XIX y XX." },
      { name: "Zona peatonal", note: "Calles comerciales y cafés en el corazón histórico." },
    ],
  },
  pt: {
    restaurants: [
      { name: "Tosello", type: "Pizzaria histórica", note: "Uma das pizzarias mais queridas de Piacenza, sempre cheia: é melhor reservar.", address: "Via Francesco Daveri 10", dist: "~600 m a pé", query: Q.tosello },
      { name: "Marechiaro", type: "Pizzaria napolitana", note: "Pizzaria histórica desde 1963, verdadeira pizza napolitana cozida em forno a lenha.", address: "Corso Vittorio Emanuele II 168", dist: "~700 m a pé", query: Q.marechiaro },
      { name: "La Pireina", type: "Trattoria típica", note: "Pratos autênticos de Piacenza junto às antigas muralhas.", address: "Via Borghetto 137", dist: "~950 m a pé", query: Q.pireina },
      { name: "Osteria d'una Volta", type: "Osteria", note: "Ambiente histórico e cozinha da região, no coração do centro.", address: "Via San Giovanni 36", dist: "~550 m a pé", query: Q.osteria },
      { name: "Antica Trattoria dell'Angelo", type: "Trattoria histórica", note: "Casa histórica: há mais de 200 anos, cozinha e vinhos de Piacenza entre estas paredes.", address: "Via Tibini 14", dist: "~700 m a pé", query: Q.angelo },
      { name: "Vecchia Piacenza", type: "Restaurante", note: "Especialidades da Emília no Palazzo Scotti do século XVIII, esquina com a Via Taverna.", address: "Via San Bernardo 1", dist: "~650 m a pé", query: Q.vecchia },
      { name: "Pizzikotto", type: "Pizzaria & Lifferia", note: "Pizza artesanal; prático também para levar e entrega ao domicílio.", address: "Via Emilia Parmense 21", dist: "~2,5 km (de carro)", query: Q.pizzikotto },
      { name: "Crudo", type: "Peixe & sushi", note: "Peixe cru, sushi e propostas fusão no centro.", address: "Via Alessandro Bolzoni 17", dist: "~700 m a pé", query: Q.crudo },
      { name: "Izakaya by Domechan", type: "Japonês", note: "Cozinha japonesa ao estilo izakaya; encerrado domingo e segunda.", address: "Viale Dante Alighieri 37", dist: "~1,2 km a pé", query: Q.izakaya },
      { name: "Sosushi", type: "Sushi", note: "Sushi e cozinha fusão no Corso, all you can eat e à la carte.", address: "Corso Vittorio Emanuele II 229", dist: "~750 m a pé", query: Q.sosushi },
      { name: "Eataly", type: "Gastronomia & mercado", note: "Restaurante, pizzaria e produtos italianos de qualidade, a dois passos de casa.", address: "Stradone Farnese 39", dist: "~300 m a pé", query: Q.eataly },
    ],
    supermarkets: [
      { name: "Eataly", note: "Compras de qualidade e gastronomia italiana, muito perto do apartamento.", address: "Stradone Farnese 39", dist: "~300 m a pé", query: Q.eataly },
      { name: "Esselunga", note: "Grande supermercado para as compras completas.", address: "Via della Conciliazione", dist: "~1,5 km (de carro)", query: Q.esselunga },
      { name: "Sigma", note: "Supermercado para as compras do dia a dia.", address: "Via Caduti sul Lavoro 12", dist: "~1,3 km", query: Q.sigma },
    ],
    sights: [
      { name: "Piazza Cavalli", note: "A sala de visitas de Piacenza, com os célebres cavalos de bronze do Mochi." },
      { name: "Duomo de Piacenza", note: "Catedral românica do século XII, a 5 minutos a pé." },
      { name: "Palazzo Farnese", note: "Imponente palácio renascentista que alberga os Museus Cívicos." },
      { name: "Galeria Ricci Oddi", note: "Galeria de arte moderna com obras dos séculos XIX e XX." },
      { name: "Zona pedonal", note: "Ruas comerciais e cafés no coração histórico." },
    ],
  },
};
