#!/usr/bin/env node
/**
 * IndexNow — notifica istantanea a Bing, Yandex, Naver, Seznam, Yep.
 * (Google NON usa IndexNow: per Google basta la sitemap in Search Console.)
 *
 * Cosa fa: scarica la sitemap del sito live, estrae tutti gli URL e li
 * invia in un'unica richiesta all'endpoint IndexNow. Una submission si
 * propaga automaticamente a tutti i motori del consorzio.
 *
 * USO (dopo il deploy, quando il sito è online):
 *   node scripts/indexnow.mjs
 *
 * Va rilanciato quando pubblichi/aggiorni pagine importanti (es. nuove lingue,
 * nuovi articoli). Non serve dopo ogni piccola modifica.
 */

const HOST = "www.roma284.it";
const KEY = "1fc62e1afbcd4069589dda31bf909a6b";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_INDEX = `https://${HOST}/sitemap-index.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} su ${url}`);
  return res.text();
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  // 1) sitemap-index → singole sitemap → URL
  const indexXml = await fetchText(SITEMAP_INDEX);
  const sitemaps = extractLocs(indexXml);
  const urlSet = new Set();
  for (const sm of sitemaps) {
    const xml = await fetchText(sm);
    for (const u of extractLocs(xml)) urlSet.add(u);
  }
  const urlList = [...urlSet];
  if (urlList.length === 0) throw new Error("Nessun URL trovato nella sitemap.");
  console.log(`Trovati ${urlList.length} URL. Invio a IndexNow…`);

  // 2) POST unico (max 10.000 URL)
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  console.log(`Risposta IndexNow: ${res.status} ${res.statusText}`);
  // 200/202 = accettato. 403 = key file non raggiungibile. 422 = URL non del dominio.
  if (res.status === 403) {
    console.error(`ATTENZIONE: verifica che ${KEY_LOCATION} sia online e contenga la chiave.`);
  }
}

main().catch((e) => {
  console.error("Errore:", e.message);
  process.exit(1);
});
