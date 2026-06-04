/**
 * Recensioni reali degli ospiti (fonte: Booking.com, scala /10).
 * VERIFIED = true → lo schema.org Review viene emesso.
 * Per aggiungerne altre: copia il blocco e rispetta i campi.
 */
export const REVIEWS_VERIFIED = true;

export interface Review {
  author: string;
  title: string;
  /** Punteggio nella scala della fonte. */
  score: number;
  /** Massimo della scala (Booking = 10). */
  scale: number;
  source: "Booking" | "Airbnb";
  body: string;
}

export const REVIEWS_IT: Review[] = [
  {
    author: "Daniele",
    title: "Tutto perfetto! Ritorneremo sicuramente",
    score: 10,
    scale: 10,
    source: "Booking",
    body: "Struttura accogliente, moderna e con tutti i comfort necessari per trascorrere un soggiorno piacevole, sia in coppia sia in famiglia accompagnati dai propri amici animali. Addirittura erano presenti dei giochi in scatola!",
  },
  {
    author: "Edyta",
    title: "Eccezionale",
    score: 10,
    scale: 10,
    source: "Booking",
    body: "Un posto meraviglioso, poco distante dalla stazione ferroviaria di Piacenza e raggiungibile comodamente a piedi. Struttura molto accogliente, pulitissima, ben arredata: frigorifero, TV, letto comodo, aria condizionata, riscaldamento. Appartamento al piano terra. Ritornerò sicuramente.",
  },
  {
    author: "Francesco",
    title: "Ottimo",
    score: 10,
    scale: 10,
    source: "Booking",
    body: "Appartamento arredato con gusto e grande attenzione ai dettagli. La pulizia è impeccabile e la cucina è completa di tutto il necessario, perfettamente attrezzata. L'ambiente è caldo e accogliente: mi sono sentito subito a casa. Esperienza decisamente positiva, consigliato.",
  },
  {
    author: "Ugo",
    title: "Come essere a casa",
    score: 9,
    scale: 10,
    source: "Booking",
    body: "Siamo stati bene nell'appartamento, molto accogliente, funzionale e attrezzato di tutto. Come essere a casa. Lo consiglio vivamente.",
  },
];

/** Punteggio convertito in stelle su 5 (per la UI). */
export function toStars(r: Review): number {
  return Math.round((r.score / r.scale) * 5);
}
