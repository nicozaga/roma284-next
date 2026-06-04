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
};
