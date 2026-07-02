/**
 * Feed RSS del blog (articoli IT, i più recenti).
 *
 * Scopo SEO: canale di scoperta aggiuntivo per Google e per gli aggregatori —
 * i nuovi articoli della pipeline autoblog vengono visti appena il feed cambia.
 * Nessuna dipendenza esterna: XML generato a mano (come scripts/indexnow.mjs).
 */
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "@lib/site";

const MAX_ITEMS = 20;

const esc = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export const GET: APIRoute = async () => {
  const posts = (await getCollection("blog", (p) => !p.data.draft && p.data.lang === "it"))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .slice(0, MAX_ITEMS);

  const items = posts
    .map((p) => {
      const slug = p.data.slug ?? p.id.split("/").pop()!;
      const url = `${SITE.url}/blog/${slug}/`;
      const date = (p.data.updatedDate ?? p.data.pubDate).toUTCString();
      return (
        `<item><title>${esc(p.data.title)}</title>` +
        `<link>${url}</link><guid isPermaLink="true">${url}</guid>` +
        `<pubDate>${date}</pubDate>` +
        `<description>${esc(p.data.description)}</description></item>`
      );
    })
    .join("\n");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<rss version="2.0"><channel>` +
    `<title>Blog Roma284</title>` +
    `<link>${SITE.url}/blog/</link>` +
    `<description>Guide, eventi e consigli su Piacenza e Milano dal blog di Roma284.</description>` +
    `<language>it</language>\n${items}\n</channel></rss>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
