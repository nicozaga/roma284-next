// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

const SITE = "https://www.roma284.it";

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
      lastmod: new Date(),
    }),
  ],
  vite: {
    // Cast: skew di tipi tra @tailwindcss/vite e i tipi Vite pinnati da Astro.
    // Solo type-check, runtime corretto.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
