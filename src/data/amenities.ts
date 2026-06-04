import type { Locale } from "@i18n/config";

/** Servizi raggruppati — fonte: annuncio Airbnb reale (40 servizi). */
export interface AmenityGroup {
  title: string;
  items: string[];
}

export const AMENITIES: Partial<Record<Locale, AmenityGroup[]>> = {
  it: [
    { title: "Comfort", items: [
      "Climatizzazione caldo/freddo in tutto l'appartamento",
      "Riscaldamento autonomo",
      "Letto matrimoniale (152×203) separabile in due singoli",
      "2 poltrone letto singolo in soggiorno",
      "Lenzuola di qualità e topper in memory foam",
    ] },
    { title: "Tecnologia", items: [
      "Wi-Fi in fibra 1 Gbit/s",
      "Smart TV 55\" con Netflix e YouTube",
      "Spazio di lavoro dedicato",
    ] },
    { title: "Cucina", items: [
      "Piano cottura a induzione 4 fuochi",
      "Forno combinato (ventilato + microonde)",
      "Lavastoviglie",
      "Frigorifero capiente con freezer",
      "Macchina caffè Nespresso con cialde omaggio",
      "Tavolo da pranzo",
    ] },
    { title: "Lavanderia", items: ["Lavasciuga multifunzione", "Stendibiancheria"] },
    { title: "Spazi", items: [
      "Patio privato arredato sul cortile interno",
      "Ingresso al piano terra, nessuna scala",
      "Parcheggio gratuito in strada",
    ] },
    { title: "Pet-friendly", items: [
      "Animali domestici sempre benvenuti, gratuitamente",
      "Patio privato comodo anche per chi viaggia con il cane",
    ] },
  ],
  en: [
    { title: "Comfort", items: [
      "Hot/cold air conditioning throughout the apartment",
      "Independent heating",
      "Double bed (152×203) splittable into two singles",
      "2 single sofa beds in the living room",
      "Quality linens and memory-foam topper",
    ] },
    { title: "Technology", items: [
      "1 Gbit/s fibre Wi-Fi",
      "55\" Smart TV with Netflix and YouTube",
      "Dedicated workspace",
    ] },
    { title: "Kitchen", items: [
      "4-ring induction hob",
      "Combi oven (fan + microwave)",
      "Dishwasher",
      "Large fridge with freezer",
      "Nespresso coffee machine with complimentary capsules",
      "Dining table",
    ] },
    { title: "Laundry", items: ["Multifunction washer-dryer", "Clothes airer"] },
    { title: "Spaces", items: [
      "Furnished private patio on the inner courtyard",
      "Ground-floor entrance, no stairs",
      "Free on-street parking",
    ] },
    { title: "Pet-friendly", items: [
      "Pets always welcome, free of charge",
      "Private patio handy for those travelling with a dog",
    ] },
  ],
};
