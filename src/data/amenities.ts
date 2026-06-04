/** Servizi raggruppati — fonte: annuncio Airbnb reale (40 servizi). */
export interface AmenityGroup {
  title: string;
  items: string[];
}

export const AMENITIES_IT: AmenityGroup[] = [
  {
    title: "Comfort",
    items: [
      "Climatizzazione caldo/freddo in tutto l'appartamento",
      "Riscaldamento autonomo",
      "Letto matrimoniale (152×203) separabile in due singoli",
      "2 poltrone letto singolo in soggiorno",
      "Lenzuola di qualità e topper in memory foam",
    ],
  },
  {
    title: "Tecnologia",
    items: [
      "Wi-Fi in fibra 1 Gbit/s",
      "Smart TV 55\" con Netflix e YouTube",
      "Spazio di lavoro dedicato",
    ],
  },
  {
    title: "Cucina",
    items: [
      "Piano cottura a induzione 4 fuochi",
      "Forno combinato (ventilato + microonde)",
      "Lavastoviglie",
      "Frigorifero capiente con freezer",
      "Macchina caffè Nespresso con cialde omaggio",
      "Tavolo da pranzo",
    ],
  },
  {
    title: "Lavanderia",
    items: ["Lavasciuga multifunzione", "Stendibiancheria"],
  },
  {
    title: "Spazi",
    items: [
      "Patio privato arredato sul cortile interno",
      "Ingresso al piano terra, nessuna scala",
      "Parcheggio gratuito in strada",
    ],
  },
  {
    title: "Pet-friendly",
    items: [
      "Animali domestici sempre benvenuti, gratuitamente",
      "Patio privato comodo anche per chi viaggia con il cane",
    ],
  },
];
