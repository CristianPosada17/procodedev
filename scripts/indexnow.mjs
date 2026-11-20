// ============================================================
// IndexNow: avisar a Bing (y a los buscadores que comparten IndexNow:
// Yandex, Seznam, Naver…) que hay páginas nuevas o cambiadas (nov 2026).
// ------------------------------------------------------------
// La búsqueda de ChatGPT se apoya en el índice de Bing; sin aviso, una
// página nueva puede tardar días o semanas en aparecer. Google NO usa
// IndexNow: para Google, «Solicitar indexación» en Search Console.
//
// La clave vive en public/<clave>.txt y se publica con el sitio; el script
// comprueba que esté en línea antes de enviar nada.
//
// Uso (después de que el despliegue haya terminado):
//   npm run indexnow -- /marketing-digital-durango/ /precios/
//   npm run indexnow -- --all        (todas las URLs del sitemap publicado)
//
// Envía solo las URLs que cambiaron: mandar todo el sitio en cada cambio
// no ayuda y los buscadores lo toman como ruido.
// ============================================================

const HOST = "procodedev.com";
const SITE = `https://${HOST}`;
const KEY = "fa9318d6bc6dec89d12329bd44d63d5e";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const args = process.argv.slice(2);
if (!args.length) {
  console.log("Uso: npm run indexnow -- <ruta o URL> [...]   |   npm run indexnow -- --all");
  process.exit(1);
}

// 1. La clave tiene que estar publicada: IndexNow la descarga para validar.
const keyRes = await fetch(KEY_LOCATION);
const keyText = keyRes.ok ? (await keyRes.text()).trim() : "";
if (keyText !== KEY) {
  console.error(`La clave no está en línea todavía (${KEY_LOCATION} → ${keyRes.status}). ¿Terminó el despliegue?`);
  process.exit(1);
}

// 2. Lista de URLs.
let urls;
if (args.includes("--all")) {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
} else {
  urls = args.map((a) => (a.startsWith("http") ? a : `${SITE}${a.startsWith("/") ? "" : "/"}${a}`));
}
urls = [...new Set(urls)].filter((u) => new URL(u).host === HOST);
if (!urls.length) {
  console.error("No hay URLs de", HOST, "para enviar.");
  process.exit(1);
}

// 3. Envío (hasta 10 000 URLs por petición).
const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }),
});
const body = await res.text();
console.log(`IndexNow → ${res.status} ${res.statusText}${body ? ` · ${body}` : ""}`);
console.log(`${urls.length} URL(s):\n  ${urls.join("\n  ")}`);
// 200 = recibido · 202 = recibido, la clave se validará después.
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
