/**
 * ⚠️ RECENSIONI — CONTENUTO PLACEHOLDER ⚠️
 *
 * Questi testi NON sono recensioni reali verbatim: sono rappresentativi
 * dei temi ricorrenti reali dell'annuncio (pulizia, posizione, ospitalità,
 * spazi, check-in). Servono solo a completare il design.
 *
 * PRIMA DEL LANCIO: Nicolò sostituisce `body`, `author`, `date` con i testi
 * reali presi dalla dashboard Airbnb/Booking, poi imposta VERIFIED = true.
 * Finché VERIFIED = false, lo schema.org Review NON viene emesso
 * (vietato marcare come reali recensioni inventate — policy Google).
 */
export const REVIEWS_VERIFIED = false;

export interface Review {
  author: string;
  date: string; // ISO YYYY-MM-DD
  source: "Airbnb" | "Booking";
  rating: number; // su 5
  body: string;
}

export const REVIEWS_IT: Review[] = [
  {
    author: "[Nome ospite]",
    date: "2026-05-01",
    source: "Airbnb",
    rating: 5,
    body: "[Placeholder] Posizione perfetta nel centro di Piacenza, tutto raggiungibile a piedi. Appartamento pulitissimo e curato nei dettagli. Torneremo.",
  },
  {
    author: "[Nome ospite]",
    date: "2026-04-12",
    source: "Booking",
    rating: 5,
    body: "[Placeholder] Base ideale per Milano: in mezz'ora di treno eravamo in centro. Wi-Fi velocissimo, ho potuto lavorare senza problemi.",
  },
  {
    author: "[Nome ospite]",
    date: "2026-03-20",
    source: "Airbnb",
    rating: 5,
    body: "[Placeholder] Accoglienza impeccabile e risposte rapidissime. Il patio è un piccolo gioiello per la colazione al mattino.",
  },
  {
    author: "[Nome ospite]",
    date: "2026-02-28",
    source: "Airbnb",
    rating: 5,
    body: "[Placeholder] Cucina super attrezzata e letto comodissimo. Check-in semplice e appartamento esattamente come nelle foto.",
  },
];
