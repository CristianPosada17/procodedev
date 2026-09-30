/*
  Base de conocimiento del asistente (septiembre de 2026, 30).

  Genera en el build /chatbot/es.json y /chatbot/en.json con dos tipos de
  entradas, todas sacadas de contenido YA publicado en el sitio:

  1. Preguntas frecuentes: home, precios, servicios, subservicios,
     auditoría, industrias y mercados.
  2. Fichas de cada servicio, industria y mercado: precio publicado, qué
     incluye y para quién, más las palabras clave de su página. Cubren lo
     que las FAQ no preguntan tal cual («¿cuánto cuesta el mantenimiento?»,
     «página para mi consultorio»).

  La lee el servidor, no el navegador: public/api/chat.php la añade como
  contexto a cada pregunta que se envía a la IA, así que no pesa en la
  carga de ninguna página. Regla: la IA solo contesta con lo que dice el
  propio sitio. Si una respuesta cambia en su página,
  cambia aquí en el siguiente build; no hay una segunda copia que mantener.
*/
import type { APIRoute, GetStaticPaths } from "astro";
import { translations, PAGES, SEGMENT_KEYS, type Lang, type PageKey } from "../../i18n/ui";
import { serviceDetails, serviceLines, servicesHub, SERVICE_KEYS } from "../../i18n/services";
import { subservices, SUBSERVICE_KEYS } from "../../i18n/subservices";
import { audit } from "../../i18n/audit";
import { segments } from "../../i18n/segments";
import { markets, marketsHub, MARKET_KEYS } from "../../i18n/markets";

type QA = { question: string; answer: string };
export interface KbEntry {
  q: string;
  a: string;
  /** Página donde está publicada la respuesta, para «ver más». */
  url: string;
  /** Nombre corto de esa página. */
  src: string;
  /** 1 = respuesta general del sitio; 0 = de un giro o un mercado concreto
      (el asistente solo la prefiere si la pregunta nombra ese giro o lugar). */
  g: 0 | 1;
  /** Palabras clave de la página: cuentan como parte de la pregunta y
      como «nombre» del giro o mercado. */
  k?: string;
}

export const getStaticPaths: GetStaticPaths = () => [
  { params: { lang: "es" } },
  { params: { lang: "en" } },
];

export const GET: APIRoute = ({ params }) => {
  const lang = params.lang as Lang;
  const es = lang === "es";
  const t = translations[lang];
  const out: KbEntry[] = [];
  const seen = new Set<string>();
  const add = (items: readonly QA[], page: PageKey, src: string, g: 0 | 1 = 1) => {
    for (const it of items) {
      const key = it.question.trim().toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ q: it.question, a: it.answer, url: PAGES[page][lang], src, g });
    }
  };
  const list = (xs: readonly string[]) => xs.filter(Boolean).join(", ");
  const priceOf = (pkgs: readonly { price: string; quoteLabel?: string; pricePrefix: string; currency: string; priceNote: string }[]) => {
    const p = pkgs.find((x) => x.price && !x.quoteLabel);
    if (p) return `${p.pricePrefix} $${p.price} ${p.currency} (${p.priceNote})`;
    return pkgs[0]?.quoteLabel ?? "";
  };

  // ── 1 · Preguntas frecuentes publicadas ──
  add(t.homeFaq.items, "home", t.nav.home);
  add(t.faq.items, "pricing", t.nav.pricing);
  add(servicesHub[lang].faq.items, "services", t.nav.services);
  for (const k of SERVICE_KEYS) add(serviceDetails[lang][k].faq.items, k, serviceDetails[lang][k].meta.heroTitleA);
  for (const k of SUBSERVICE_KEYS) add(subservices[lang][k].faq.items, k, subservices[lang][k].navLabel);
  add(audit[lang].faq.items, "audit", audit[lang].navLabel);
  for (const k of SEGMENT_KEYS) add(segments[lang][k].faq, k, segments[lang][k].navLabel, 0);
  add(marketsHub[lang].faq.items, "markets", t.nav.markets);
  for (const k of MARKET_KEYS) add(markets[lang][k].faq.items, k, markets[lang][k].name, 0);

  // ── 2 · Fichas de servicio, industria y mercado ──
  const priceWord = es ? "precio cuánto cuesta qué incluye" : "price how much cost what is included";
  for (const key of SERVICE_KEYS) {
    const line = serviceLines[lang][key];
    const d = serviceDetails[lang][key];
    const price = line.priceQuote ? line.priceQuote : `${es ? "Desde" : "From"} $${line.price} USD (${line.priceNote})`;
    out.push({
      q: `${line.title}: ${line.tagline}`,
      a: `${line.summary} ${es ? "Inversión" : "Investment"}: ${price}. ${es ? "Plazo" : "Timeline"}: ${line.timeline}.`,
      url: PAGES[key][lang],
      src: line.title,
      g: 1,
      k: `${line.title} ${priceWord} ${d.meta.keywords}`,
    });
  }
  for (const key of SUBSERVICE_KEYS) {
    const d = subservices[lang][key];
    out.push({
      q: `${d.navLabel}: ${d.navHint}`,
      a: `${d.intro.lead} ${es ? "Inversión" : "Investment"}: ${priceOf(d.packages.items)}. ${es ? "Incluye" : "Includes"}: ${list(d.capabilities.items.map((c) => c.title))}.`,
      url: PAGES[key][lang],
      src: d.navLabel,
      g: 1,
      k: `${d.navLabel} ${priceWord} ${d.meta.keywords}`,
    });
  }
  {
    const a = audit[lang];
    out.push({
      q: `${a.navLabel}: ${a.navHint}`,
      a: `${a.navHint} ${es ? "Inversión" : "Investment"}: ${a.priceQuote} (${a.priceNote}). ${es ? "Entrega" : "Delivery"}: ${a.timeline}.`,
      url: PAGES.audit[lang],
      src: a.navLabel,
      g: 1,
      k: `${a.navLabel} ${priceWord} ${a.meta.keywords}`,
    });
  }
  for (const key of SEGMENT_KEYS) {
    const s = segments[lang][key];
    out.push({
      q: `${es ? "Página web para" : "Website for"} ${s.navLabel}: ${s.navHint}`,
      a: `${s.intro} ${es ? "Precios base publicados: landing page desde $349 USD." : "Published base pricing: landing page from $349 USD."}`,
      url: PAGES[key][lang],
      src: s.navLabel,
      g: 0,
      k: `${s.navLabel} ${s.meta.keywords}`,
    });
  }
  for (const key of MARKET_KEYS) {
    const m = markets[lang][key];
    out.push({
      q: `${es ? "Diseño web en" : "Web design in"} ${m.name}: ${m.navHint}`,
      a: `${m.meta.description}`,
      url: PAGES[key][lang],
      src: m.name,
      g: 0,
      k: `${m.name} ${list(m.cities.map((c) => c.name))} ${m.meta.keywords}`,
    });
  }

  return new Response(JSON.stringify(out), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
