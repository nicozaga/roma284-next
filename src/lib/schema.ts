import { SITE, SAME_AS } from "./site";

/**
 * Helper schema.org riutilizzabili. Ritornano oggetti plain JSON-LD
 * che il componente <JsonLd> serializza. Senza @context (lo aggiunge JsonLd).
 */

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: SAME_AS,
  };
}

export interface ReviewInput {
  author: string;
  title: string;
  score: number;
  scale: number;
  body: string;
}

export function lodgingBusinessSchema(opts: {
  lang: string;
  reviews?: ReviewInput[];
}) {
  const review =
    opts.reviews && opts.reviews.length > 0
      ? opts.reviews.map((r) => ({
          "@type": "Review",
          name: r.title,
          author: { "@type": "Person", name: r.author },
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.score,
            bestRating: r.scale,
            worstRating: 1,
          },
          reviewBody: r.body,
        }))
      : undefined;
  return {
    ...(review ? { review } : {}),
    "@type": "LodgingBusiness",
    "@id": `${SITE.url}/#lodging`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    inLanguage: opts.lang,
    petsAllowed: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.airbnb,
      reviewCount: SITE.rating.airbnbCount,
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: SAME_AS,
  };
}

export interface Crumb {
  name: string;
  url: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}
