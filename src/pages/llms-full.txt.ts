import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "@lib/site";
import { APARTMENT_INTRO, USP } from "@data/content";
import { AMENITIES } from "@data/amenities";

import { ROUTES } from "@data/transport";
import { NEIGHBORHOOD } from "@data/neighborhood";
import { FAQ_FULL } from "@data/faqFull";
import { REVIEWS_IT } from "@data/reviews";

const APARTMENT_INTRO_IT = APARTMENT_INTRO.it!;
const USP_IT = USP.it!;
const AMENITIES_IT = AMENITIES.it!;
const ROUTES_IT = ROUTES.it!;
const RESTAURANTS_IT = NEIGHBORHOOD.it!.restaurants;
const SIGHTS_IT = NEIGHBORHOOD.it!.sights;
const FAQ_FULL_IT = FAQ_FULL.it!;

export const GET: APIRoute = async () => {
  const posts = (await getCollection("blog", (p) => !p.data.draft && p.data.lang === "it")).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  const lines: string[] = [];
  const p = (s = "") => lines.push(s);

  p("# Roma284 — guida completa");
  p();
  p("> " + APARTMENT_INTRO_IT);
  p();
  p("## Fatti chiave");
  p(`- Indirizzo: ${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}, Italia`);
  p(`- Coordinate: ${SITE.geo.lat}, ${SITE.geo.lng}`);
  p("- Milano Centrale: 33 minuti in Frecciarossa (fino a 52 treni diretti/giorno, 06:07–23:52)");
  p("- Stazione di Piacenza: 900 m (9 minuti a piedi)");
  p("- Piazza Cavalli e Duomo: 350 m (5 minuti a piedi)");
  p(`- Capienza: fino a ${SITE.stay.maxGuests} ospiti · ${SITE.stay.sizeSqm} m²`);
  p("- Wi-Fi: fibra 1 Gbit/s · Animali: sempre benvenuti, gratis");
  p(`- Valutazioni: ${SITE.rating.airbnb}/5 (Airbnb, ${SITE.rating.airbnbCount} recensioni), ${SITE.rating.booking}/10 (Booking)`);
  p(`- Check-in dalle ${SITE.stay.checkIn} · check-out entro le ${SITE.stay.checkOut}`);
  p(`- Contatti: ${SITE.email} · ${SITE.phone} (anche WhatsApp)`);
  p();
  p("## Punti di forza");
  for (const u of USP_IT) p(`- ${u.title}: ${u.text}`);
  p();
  p("## Servizi");
  for (const g of AMENITIES_IT) p(`### ${g.title}\n` + g.items.map((i) => `- ${i}`).join("\n"));
  p();
  p("## Come arrivare");
  for (const r of ROUTES_IT) {
    p(`### ${r.from} (${r.duration})`);
    p(r.summary);
    r.steps.forEach((s, i) => p(`${i + 1}. ${s.name}: ${s.text}`));
    p();
  }
  p("## Quartiere — cosa vedere");
  for (const s of SIGHTS_IT) p(`- ${s.name}: ${s.note}`);
  p();
  p("## Dove mangiare");
  for (const r of RESTAURANTS_IT) p(`- ${r.name} (${r.type}, ${r.address}, ${r.dist}): ${r.note}`);
  p();
  p("## Domande frequenti");
  for (const cat of FAQ_FULL_IT) {
    p(`### ${cat.category}`);
    for (const f of cat.items) p(`**${f.q}**\n${f.a}\n`);
  }
  p("## Recensioni");
  for (const r of REVIEWS_IT) p(`- ${r.author} (${r.source}, ${r.score}/${r.scale}) — "${r.title}": ${r.body}`);
  p();
  p("## Blog");
  for (const post of posts) p(`- ${post.data.title}: ${post.data.description} (${SITE.url}/blog/${post.id}/)`);
  p();
  p("## Pagine principali");
  p(`- Home: ${SITE.url}/`);
  p(`- Appartamento: ${SITE.url}/appartamento/`);
  p(`- Quartiere: ${SITE.url}/quartiere/`);
  p(`- Come arrivare: ${SITE.url}/come-arrivare/`);
  p(`- Dormire vicino Milano: ${SITE.url}/dormire-vicino-milano/`);
  p(`- Smart working: ${SITE.url}/smart-working/`);
  p(`- Fiere Milano: ${SITE.url}/fiere-milano/`);
  p(`- Eventi Milano: ${SITE.url}/eventi-milano/`);
  p(`- Visitare Piacenza: ${SITE.url}/visitare-piacenza/`);
  p(`- Prenota: ${SITE.url}/prenota/`);
  p(`- FAQ: ${SITE.url}/faq/`);
  p(`- Contatti: ${SITE.url}/contatti/`);

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
