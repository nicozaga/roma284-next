import type { Locale } from "@i18n/config";

/**
 * Descrizioni gallery — abbinate alle foto reali (verificate guardando le immagini).
 * 1 cucina+pranzo · 2 patio · 3 soggiorno con porta-finestra · 4 dettaglio cucina/tavolo
 * 5 camera · 6 camera con TV/armadio · 7 letto (dettaglio) · 8 bagno · 9 doccia walk-in
 * 10 angolo relax con poltrona letto.
 */
export const GALLERY_ALT: Partial<Record<Locale, Record<string, string>>> = {
  it: {
    "1": "Cucina open space con ante verde salvia e zona pranzo con tavolo rotondo, nel bilocale Roma284 a Piacenza",
    "2": "Patio privato arredato con tavolo e sedie sul tranquillo cortile interno",
    "3": "Soggiorno luminoso con grande porta-finestra che si apre sul patio privato",
    "4": "Dettaglio della cucina con piano a induzione e tavolo da pranzo apparecchiato",
    "5": "Camera da letto con letto matrimoniale, testiera verde e travi a vista",
    "6": "Camera da letto con Smart TV 55\", poltrona letto gialla e zona armadio",
    "7": "Letto matrimoniale con testiera verde e vassoio per la colazione",
    "8": "Bagno moderno con mobile sospeso, specchio tondo e pavimento in terrazzo",
    "9": "Ampia doccia walk-in con piatto a filo pavimento e scaldasalviette",
    "10": "Angolo relax del soggiorno con poltrona letto gialla e luce naturale",
  },
  en: {
    "1": "Open-plan kitchen with sage-green units and dining area with round table at the Roma284 apartment in Piacenza",
    "2": "Furnished private patio with table and chairs on the quiet inner courtyard",
    "3": "Bright living room with a large French door opening onto the private patio",
    "4": "Detail of the kitchen with induction hob and the laid dining table",
    "5": "Bedroom with double bed, green headboard and exposed beams",
    "6": "Bedroom with 55\" Smart TV, yellow sofa bed and wardrobe area",
    "7": "Double bed with green headboard and breakfast tray",
    "8": "Modern bathroom with wall-hung vanity, round mirror and terrazzo floor",
    "9": "Spacious walk-in shower with flush tray and heated towel rail",
    "10": "Living-room relaxation corner with a yellow sofa bed and natural light",
  },
  fr: {
    "1": "Cuisine ouverte aux façades vert sauge et coin repas avec table ronde, dans le deux-pièces Roma284 à Plaisance",
    "2": "Patio privé meublé avec table et chaises sur la cour intérieure tranquille",
    "3": "Séjour lumineux avec une grande porte-fenêtre ouvrant sur le patio privé",
    "4": "Détail de la cuisine avec plaque à induction et table à manger dressée",
    "5": "Chambre avec lit double, tête de lit verte et poutres apparentes",
    "6": "Chambre avec Smart TV 55\", fauteuil-lit jaune et espace dressing",
    "7": "Lit double avec tête de lit verte et plateau de petit-déjeuner",
    "8": "Salle de bain moderne avec meuble suspendu, miroir rond et sol en terrazzo",
    "9": "Grande douche à l'italienne avec receveur extra-plat et sèche-serviettes",
    "10": "Coin détente du séjour avec un fauteuil-lit jaune et lumière naturelle",
  },
  de: {
    "1": "Offene Küche mit salbeigrünen Fronten und Essbereich mit rundem Tisch in der Zweizimmerwohnung Roma284 in Piacenza",
    "2": "Möblierter privater Patio mit Tisch und Stühlen am ruhigen Innenhof",
    "3": "Helles Wohnzimmer mit großer Terrassentür, die sich zum privaten Patio öffnet",
    "4": "Detail der Küche mit Induktionskochfeld und gedecktem Esstisch",
    "5": "Schlafzimmer mit Doppelbett, grünem Kopfteil und sichtbaren Holzbalken",
    "6": "Schlafzimmer mit 55\"-Smart-TV, gelbem Schlafsessel und Schrankbereich",
    "7": "Doppelbett mit grünem Kopfteil und Frühstückstablett",
    "8": "Modernes Bad mit Hängewaschtisch, rundem Spiegel und Terrazzoboden",
    "9": "Geräumige bodengleiche Dusche mit flacher Duschwanne und Handtuchheizkörper",
    "10": "Entspannungsecke im Wohnzimmer mit gelbem Schlafsessel und Tageslicht",
  },
  es: {
    "1": "Cocina abierta con frentes verde salvia y zona de comedor con mesa redonda, en el apartamento Roma284 de Piacenza",
    "2": "Patio privado amueblado con mesa y sillas en el tranquilo patio interior",
    "3": "Salón luminoso con una gran puerta-ventana que se abre al patio privado",
    "4": "Detalle de la cocina con placa de inducción y la mesa de comedor puesta",
    "5": "Dormitorio con cama de matrimonio, cabecero verde y vigas a la vista",
    "6": "Dormitorio con Smart TV de 55\", sillón cama amarillo y zona de armario",
    "7": "Cama de matrimonio con cabecero verde y bandeja de desayuno",
    "8": "Baño moderno con mueble suspendido, espejo redondo y suelo de terrazo",
    "9": "Amplia ducha walk-in con plato enrasado y toallero calefactable",
    "10": "Rincón de descanso del salón con un sillón cama amarillo y luz natural",
  },
  pt: {
    "1": "Cozinha aberta com frentes verde sálvia e zona de refeições com mesa redonda, no apartamento T1 Roma284 em Piacenza",
    "2": "Pátio privado mobilado com mesa e cadeiras no tranquilo pátio interior",
    "3": "Sala luminosa com uma grande porta-janela que abre para o pátio privado",
    "4": "Pormenor da cozinha com placa de indução e a mesa de jantar posta",
    "5": "Quarto com cama de casal, cabeceira verde e vigas à vista",
    "6": "Quarto com Smart TV de 55\", cadeirão-cama amarelo e zona de roupeiro",
    "7": "Cama de casal com cabeceira verde e tabuleiro de pequeno-almoço",
    "8": "Casa de banho moderna com móvel suspenso, espelho redondo e pavimento em terrazzo",
    "9": "Ampla base de duche walk-in com base à face do pavimento e toalheiro aquecido",
    "10": "Recanto de descanso da sala com um cadeirão-cama amarelo e luz natural",
  },
};
