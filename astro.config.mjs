// @ts-check
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

const SITE = "https://www.roma284.it";

/**
 * Mappa URL articolo -> lastmod REALE (updatedDate o pubDate dal frontmatter).
 * SEO: un lastmod identico su tutti gli URL a ogni build è un segnale che Google
 * impara a ignorare; con le date vere capisce subito cosa è nuovo e lo prioritizza.
 */
function blogLastmods() {
  /** @type {Map<string, string>} */
  const map = new Map();
  const base = "src/content/blog";
  let files;
  try {
    files = readdirSync(base, { recursive: true });
  } catch {
    return map;
  }
  for (const f of files) {
    const rel = String(f).replaceAll("\\", "/");
    if (!rel.endsWith(".md")) continue;
    const fm = readFileSync(join(base, rel), "utf-8").split("---")[1] ?? "";
    const date = (fm.match(/updatedDate:\s*"?(\d{4}-\d{2}-\d{2})/) ??
      fm.match(/pubDate:\s*"?(\d{4}-\d{2}-\d{2})/))?.[1];
    if (!date) continue;
    const parts = rel.split("/");
    const basename = (parts.at(-1) ?? "").replace(/\.md$/, "");
    const slug = fm.match(/^slug:\s*"?([a-z0-9-]+)"?/m)?.[1] ?? basename;
    const lang = parts.length > 1 ? parts[0] : "it";
    const path = lang === "it" ? `/blog/${slug}/` : `/${lang}/blog/${slug}/`;
    map.set(`${SITE}${path}`, date);
  }
  return map;
}
const BLOG_LASTMOD = blogLastmods();

// 11 lingue. IT default servito sulla root, le altre con prefisso /{lang}/.
const LOCALES = ["it", "en", "fr", "es", "pt", "de", "nl", "sv", "pl", "ja", "zh-cn"];

export default defineConfig({
  site: SITE,
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: false,
  }),
  i18n: {
    defaultLocale: "it",
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  image: {
    // astro:assets con Sharp → AVIF/WebP/JPEG responsive
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "it",
        locales: {
          it: "it-IT",
          en: "en-GB",
          fr: "fr-FR",
          es: "es-ES",
          pt: "pt-PT",
          de: "de-DE",
          nl: "nl-NL",
          sv: "sv-SE",
          pl: "pl-PL",
          ja: "ja-JP",
          "zh-cn": "zh-CN",
        },
      },
      changefreq: "weekly",
      // lastmod SOLO dove è reale (articoli, da frontmatter); niente date finte altrove.
      serialize(item) {
        const lastmod = BLOG_LASTMOD.get(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  vite: {
    // Cast: skew di tipi tra @tailwindcss/vite e i tipi Vite pinnati da Astro.
    // Solo type-check, runtime corretto.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
