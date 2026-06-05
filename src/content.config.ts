import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
    // ID univoco basato sul percorso (cartella lingua inclusa): evita collisioni
    // tra file con lo stesso nome in lingue diverse (es. en/ e fr/ frecciarossa…).
    generateId: ({ entry }) => entry.replace(/\.mdx?$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default("Guide"),
    /** Lingua del post. */
    lang: z.string().default("it"),
    /** Chiave condivisa fra le versioni tradotte dello stesso articolo (per hreflang). */
    translationKey: z.string().optional(),
    /** Slug "pulito" del post (senza prefisso lingua/cartella). Se assente si deriva dall'id. */
    slug: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
