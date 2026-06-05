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
    { title: "Bagno", items: [
      "Ampia doccia walk-in",
      "Shampoo, docciaschiuma e sapone per le mani inclusi",
      "Asciugamani e set di cortesia",
    ] },
    { title: "Lavanderia", items: ["Lavasciuga multifunzione", "Stendibiancheria"] },
    { title: "Spazi", items: [
      "Patio privato arredato sul cortile interno",
      "Ingresso al piano terra, nessuna scala",
      "Parcheggio in strada (strisce blu, gratis dopo le 19)",
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
    { title: "Bathroom", items: [
      "Spacious walk-in shower",
      "Shampoo, body wash and hand soap included",
      "Towels and courtesy set",
    ] },
    { title: "Laundry", items: ["Multifunction washer-dryer", "Clothes airer"] },
    { title: "Spaces", items: [
      "Furnished private patio on the inner courtyard",
      "Ground-floor entrance, no stairs",
      "On-street parking (blue lines, free after 7pm)",
    ] },
    { title: "Pet-friendly", items: [
      "Pets always welcome, free of charge",
      "Private patio handy for those travelling with a dog",
    ] },
  ],
  fr: [
    { title: "Confort", items: [
      "Climatisation chaud/froid dans tout l'appartement",
      "Chauffage indépendant",
      "Lit double (152×203) séparable en deux lits simples",
      "2 fauteuils-lits simples dans le séjour",
      "Linge de qualité et surmatelas à mémoire de forme",
    ] },
    { title: "Technologie", items: [
      "Wi-Fi fibre 1 Gbit/s",
      "Smart TV 55\" avec Netflix et YouTube",
      "Espace de travail dédié",
    ] },
    { title: "Cuisine", items: [
      "Plaque à induction 4 feux",
      "Four combiné (chaleur tournante + micro-ondes)",
      "Lave-vaisselle",
      "Grand réfrigérateur avec congélateur",
      "Machine à café Nespresso avec capsules offertes",
      "Table à manger",
    ] },
    { title: "Salle de bain", items: [
      "Grande douche à l'italienne",
      "Shampooing, gel douche et savon pour les mains inclus",
      "Serviettes et set de courtoisie",
    ] },
    { title: "Buanderie", items: ["Lave-linge séchant multifonction", "Étendoir à linge"] },
    { title: "Espaces", items: [
      "Patio privé meublé sur la cour intérieure",
      "Entrée de plain-pied, sans escaliers",
      "Stationnement dans la rue (lignes bleues, gratuit après 19h)",
    ] },
    { title: "Animaux acceptés", items: [
      "Animaux toujours les bienvenus, gratuitement",
      "Patio privé pratique pour ceux qui voyagent avec un chien",
    ] },
  ],
  de: [
    { title: "Komfort", items: [
      "Klimaanlage mit Heiz-/Kühlfunktion in der gesamten Wohnung",
      "Autonome Heizung",
      "Doppelbett (152×203) in zwei Einzelbetten teilbar",
      "2 Einzel-Schlafsessel im Wohnzimmer",
      "Hochwertige Bettwäsche und Memory-Foam-Topper",
    ] },
    { title: "Technik", items: [
      "Glasfaser-WLAN 1 Gbit/s",
      "55\"-Smart-TV mit Netflix und YouTube",
      "Eigener Arbeitsplatz",
    ] },
    { title: "Küche", items: [
      "Induktionskochfeld mit 4 Platten",
      "Kombi-Backofen (Umluft + Mikrowelle)",
      "Geschirrspüler",
      "Großer Kühlschrank mit Gefrierfach",
      "Nespresso-Kaffeemaschine mit Gratis-Kapseln",
      "Esstisch",
    ] },
    { title: "Bad", items: [
      "Geräumige bodengleiche Dusche",
      "Shampoo, Duschgel und Handseife inklusive",
      "Handtücher und Kosmetikset",
    ] },
    { title: "Wäsche", items: ["Multifunktionaler Waschtrockner", "Wäscheständer"] },
    { title: "Bereiche", items: [
      "Möblierter privater Patio am Innenhof",
      "Ebenerdiger Eingang, keine Treppen",
      "Parken auf der Straße (blaue Linien, ab 19 Uhr kostenlos)",
    ] },
    { title: "Haustierfreundlich", items: [
      "Haustiere jederzeit willkommen, kostenlos",
      "Privater Patio auch praktisch für Reisende mit Hund",
    ] },
  ],
  es: [
    { title: "Confort", items: [
      "Climatización frío/calor en todo el apartamento",
      "Calefacción autónoma",
      "Cama de matrimonio (152×203) separable en dos individuales",
      "2 sillones cama individuales en el salón",
      "Ropa de cama de calidad y topper de espuma viscoelástica",
    ] },
    { title: "Tecnología", items: [
      "Wi-Fi de fibra 1 Gbit/s",
      "Smart TV de 55\" con Netflix y YouTube",
      "Espacio de trabajo dedicado",
    ] },
    { title: "Cocina", items: [
      "Placa de inducción de 4 fuegos",
      "Horno combinado (ventilado + microondas)",
      "Lavavajillas",
      "Frigorífico amplio con congelador",
      "Cafetera Nespresso con cápsulas de regalo",
      "Mesa de comedor",
    ] },
    { title: "Baño", items: [
      "Amplia ducha walk-in",
      "Champú, gel de ducha y jabón de manos incluidos",
      "Toallas y set de cortesía",
    ] },
    { title: "Lavandería", items: ["Lavadora-secadora multifunción", "Tendedero"] },
    { title: "Espacios", items: [
      "Patio privado amueblado en el patio interior",
      "Entrada en planta baja, sin escaleras",
      "Aparcamiento en la calle (línea azul, gratis a partir de las 19)",
    ] },
    { title: "Admite mascotas", items: [
      "Mascotas siempre bienvenidas, de forma gratuita",
      "Patio privado cómodo también para quienes viajan con perro",
    ] },
  ],
  pt: [
    { title: "Conforto", items: [
      "Climatização quente/frio em todo o apartamento",
      "Aquecimento autónomo",
      "Cama de casal (152×203) separável em duas individuais",
      "2 cadeirões-cama individuais na sala",
      "Roupa de cama de qualidade e topper em espuma viscoelástica",
    ] },
    { title: "Tecnologia", items: [
      "Wi-Fi de fibra 1 Gbit/s",
      "Smart TV de 55\" com Netflix e YouTube",
      "Espaço de trabalho dedicado",
    ] },
    { title: "Cozinha", items: [
      "Placa de indução de 4 zonas",
      "Forno combinado (ventilado + micro-ondas)",
      "Máquina de lavar loiça",
      "Frigorífico amplo com congelador",
      "Máquina de café Nespresso com cápsulas oferecidas",
      "Mesa de jantar",
    ] },
    { title: "Casa de banho", items: [
      "Ampla base de duche walk-in",
      "Champô, gel de banho e sabonete para as mãos incluídos",
      "Toalhas e kit de cortesia",
    ] },
    { title: "Lavandaria", items: ["Máquina de lavar e secar multifunções", "Estendal"] },
    { title: "Espaços", items: [
      "Pátio privado mobilado no pátio interior",
      "Entrada no rés-do-chão, sem escadas",
      "Estacionamento na rua (linhas azuis, gratuito após as 19h)",
    ] },
    { title: "Aceita animais", items: [
      "Animais de estimação sempre bem-vindos, gratuitamente",
      "Pátio privado prático também para quem viaja com cão",
    ] },
  ],
};
