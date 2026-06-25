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
      "Self check-in con smart lock (arrivo autonomo dalle 15:00)",
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
      "Self check-in with smart lock (independent arrival from 15:00)",
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
      "Self check-in avec serrure connectée (arrivée autonome dès 15h00)",
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
      "Self check-in mit Smart Lock (selbstständige Ankunft ab 15:00 Uhr)",
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
      "Self check-in con cerradura inteligente (llegada autónoma desde las 15:00)",
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
      "Self check-in com fechadura inteligente (chegada autónoma a partir das 15:00)",
      "Entrada no rés-do-chão, sem escadas",
      "Estacionamento na rua (linhas azuis, gratuito após as 19h)",
    ] },
    { title: "Aceita animais", items: [
      "Animais de estimação sempre bem-vindos, gratuitamente",
      "Pátio privado prático também para quem viaja com cão",
    ] },
  ],
  nl: [
    { title: "Comfort", items: [
      "Airconditioning warm/koud in het hele appartement",
      "Eigen verwarming",
      "Tweepersoonsbed (152×203) te splitsen in twee eenpersoonsbedden",
      "2 eenpersoons slaapfauteuils in de woonkamer",
      "Kwaliteitslinnengoed en memory-foam topper",
    ] },
    { title: "Technologie", items: [
      "Glasvezel-wifi 1 Gbit/s",
      "Smart-tv 55\" met Netflix en YouTube",
      "Eigen werkplek",
    ] },
    { title: "Keuken", items: [
      "Inductiekookplaat met 4 pitten",
      "Combi-oven (hetelucht + magnetron)",
      "Vaatwasser",
      "Ruime koelkast met vriesvak",
      "Nespresso-koffiemachine met gratis capsules",
      "Eettafel",
    ] },
    { title: "Badkamer", items: [
      "Ruime inloopdouche",
      "Shampoo, douchegel en handzeep inbegrepen",
      "Handdoeken en welkomstset",
    ] },
    { title: "Wasruimte", items: ["Multifunctionele was-droogcombinatie", "Wasrek"] },
    { title: "Ruimtes", items: [
      "Gemeubileerde privépatio aan de binnenplaats",
      "Self check-in met smart lock (zelfstandige aankomst vanaf 15:00 uur)",
      "Ingang op de begane grond, geen trappen",
      "Parkeren op straat (blauwe lijnen, gratis na 19 uur)",
    ] },
    { title: "Huisdiervriendelijk", items: [
      "Huisdieren altijd welkom, gratis",
      "Privépatio ook handig voor wie met een hond reist",
    ] },
  ],
  pl: [
    { title: "Komfort", items: [
      "Klimatyzacja grzanie/chłodzenie w całym apartamencie",
      "Niezależne ogrzewanie",
      "Łóżko podwójne (152×203) rozdzielane na dwa pojedyncze",
      "2 pojedyncze fotele rozkładane w salonie",
      "Wysokiej jakości pościel i nakładka z pianki memory",
    ] },
    { title: "Technologia", items: [
      "Światłowodowe Wi-Fi 1 Gb/s",
      "Smart TV 55\" z Netflixem i YouTube",
      "Wydzielone miejsce do pracy",
    ] },
    { title: "Kuchnia", items: [
      "4-polowa płyta indukcyjna",
      "Piekarnik kombinowany (z termoobiegiem + mikrofala)",
      "Zmywarka",
      "Pojemna lodówka z zamrażalnikiem",
      "Ekspres Nespresso z kapsułkami gratis",
      "Stół jadalny",
    ] },
    { title: "Łazienka", items: [
      "Przestronny prysznic typu walk-in",
      "Szampon, żel pod prysznic i mydło do rąk w zestawie",
      "Ręczniki i zestaw kosmetyków",
    ] },
    { title: "Pranie", items: ["Wielofunkcyjna pralko-suszarka", "Suszarka na pranie"] },
    { title: "Przestrzenie", items: [
      "Umeblowane prywatne patio na wewnętrznym dziedzińcu",
      "Self check-in z inteligentnym zamkiem (samodzielny przyjazd od 15:00)",
      "Wejście na parterze, bez schodów",
      "Parkowanie na ulicy (niebieska strefa, bezpłatne po 19:00)",
    ] },
    { title: "Przyjazny zwierzętom", items: [
      "Zwierzęta zawsze mile widziane, bezpłatnie",
      "Prywatne patio wygodne także dla podróżujących z psem",
    ] },
  ],
  sv: [
    { title: "Komfort", items: [
      "Luftkonditionering värme/kyla i hela lägenheten",
      "Egen uppvärmning",
      "Dubbelsäng (152×203) delbar i två enkelsängar",
      "2 enkla bäddfåtöljer i vardagsrummet",
      "Sänglinne av hög kvalitet och memory foam-bäddmadrass",
    ] },
    { title: "Teknik", items: [
      "Fiber-Wi-Fi 1 Gbit/s",
      "Smart-TV 55\" med Netflix och YouTube",
      "Egen arbetsplats",
    ] },
    { title: "Kök", items: [
      "Induktionshäll med 4 zoner",
      "Kombiugn (varmluft + mikro)",
      "Diskmaskin",
      "Rymligt kylskåp med frys",
      "Nespresso-kaffemaskin med kapslar utan kostnad",
      "Matbord",
    ] },
    { title: "Badrum", items: [
      "Rymlig walk-in-dusch",
      "Schampo, duschtvål och handtvål ingår",
      "Handdukar och välkomstset",
    ] },
    { title: "Tvätt", items: ["Kombinerad tvätt- och torkmaskin", "Torkställning"] },
    { title: "Utrymmen", items: [
      "Möblerad privat uteplats mot den inre gården",
      "Self check-in med smart lås (självständig ankomst från 15:00)",
      "Entré i bottenvåningen, inga trappor",
      "Gatuparkering (blå zon, gratis efter 19)",
    ] },
    { title: "Husdjursvänligt", items: [
      "Husdjur alltid välkomna, utan kostnad",
      "Privat uteplats praktisk även för den som reser med hund",
    ] },
  ],
  ja: [
    { title: "快適性", items: [
      "アパート全体に冷暖房エアコン",
      "独立した暖房",
      "ダブルベッド（152×203）シングル2台に分割可能",
      "リビングにシングルのソファベッド2台",
      "上質なリネンとメモリーフォームのトッパー",
    ] },
    { title: "テクノロジー", items: [
      "光Wi-Fi 1Gbps",
      "55インチスマートTV（NetflixとYouTube対応）",
      "専用ワークスペース",
    ] },
    { title: "キッチン", items: [
      "4口IHコンロ",
      "コンビオーブン（ファン + 電子レンジ）",
      "食器洗い機",
      "冷凍庫付きの大型冷蔵庫",
      "無料カプセル付きネスプレッソコーヒーマシン",
      "ダイニングテーブル",
    ] },
    { title: "バスルーム", items: [
      "広々としたウォークインシャワー",
      "シャンプー、ボディソープ、ハンドソープ付き",
      "タオルとアメニティセット",
    ] },
    { title: "ランドリー", items: ["多機能洗濯乾燥機", "物干し"] },
    { title: "スペース", items: [
      "内庭に面した家具付き専用パティオ",
      "スマートロックでセルフチェックイン（15:00以降は自分で入室）",
      "1階の入口、階段なし",
      "路上駐車（青線ゾーン、19時以降無料）",
    ] },
    { title: "ペット可", items: [
      "ペットはいつでも無料で歓迎",
      "犬を連れた旅行にも便利な専用パティオ",
    ] },
  ],
  "zh-cn": [
    { title: "舒适", items: [
      "全屋冷暖空调",
      "独立供暖",
      "双人床（152×203）可分为两张单人床",
      "客厅2张单人沙发床",
      "优质床品和记忆棉床垫",
    ] },
    { title: "科技", items: [
      "光纤Wi-Fi 1 Gbit/s",
      "55英寸智能电视，支持Netflix和YouTube",
      "专属工作区",
    ] },
    { title: "厨房", items: [
      "4灶电磁炉",
      "组合烤箱（热风 + 微波）",
      "洗碗机",
      "带冷冻室的大冰箱",
      "附赠胶囊的Nespresso咖啡机",
      "餐桌",
    ] },
    { title: "浴室", items: [
      "宽敞的步入式淋浴",
      "含洗发水、沐浴露和洗手液",
      "毛巾和迎宾套装",
    ] },
    { title: "洗衣", items: ["多功能洗烘一体机", "晾衣架"] },
    { title: "空间", items: [
      "面向内庭的带家具私人庭院",
      "智能门锁自助入住（15:00后自主入住）",
      "一楼入口，无台阶",
      "路边停车（蓝线区，19点后免费）",
    ] },
    { title: "宠物友好", items: [
      "宠物始终免费欢迎",
      "私人庭院对携犬出行的客人也很方便",
    ] },
  ],
};
