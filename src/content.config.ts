import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default("Guide"),
    /** Lingua del post (per ora solo it; Settimana 4 aggiunge le altre). */
    lang: z.string().default("it"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
