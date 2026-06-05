/**
 * Costanti globali del progetto. Single source of truth per dati di
 * contatto, coordinate, rating, listing OTA. NON inserire prezzi.
 */
export const SITE = {
  name: "Roma284",
  url: "https://www.roma284.it",
  email: "viaroma284@gmail.com",
  phone: "+39 347 810 4634",
  phoneIntl: "+393478104634",
  whatsapp: "393478104634",
  ga4: "G-ZWPPWW0T50",
  /** ID progetto Microsoft Clarity. Lascia "" per disattivarlo (l'owner lo incolla qui). */
  clarityId: "",
  address: {
    street: "Via Roma 284",
    postalCode: "29121",
    city: "Piacenza",
    region: "Emilia-Romagna",
    countryCode: "IT",
  },
  geo: { lat: 45.048520, lng: 9.704401 },
  rating: { airbnb: "4.97", airbnbCount: 38, booking: "9.6" },
  host: { name: "Romina", responseRate: "100%", responseTime: "entro un'ora" },
  stay: { checkIn: "15:00", checkOut: "10:00", maxGuests: 4, sizeSqm: 50 },
  lodgify: { rentalId: "742039", websiteId: "624345", slug: "roma284" },
  social: {
    airbnb: "https://www.airbnb.it/rooms/1471705900396377710",
    booking: "https://www.booking.com/hotel/it/via-roma-284-apt-centro.it.html",
    maps: "https://www.google.com/maps/place/Via+Roma+284,+Piacenza",
  },
} as const;

/** Tutti gli URL esterni dell'entità per schema.org sameAs. */
export const SAME_AS = [
  SITE.social.airbnb,
  SITE.social.booking,
  SITE.social.maps,
];
