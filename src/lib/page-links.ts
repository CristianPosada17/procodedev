// ============================================================
// Enlace a cualquier página del sitio a partir de su PageKey (oct 2026)
// ------------------------------------------------------------
// Lo usa el bloque «Páginas relacionadas» del blog: cada artículo declara en
// su frontmatter (`related`) a qué páginas comerciales debe empujar, y aquí
// se resuelve el texto visible y la URL en el idioma del artículo. Así el
// enlace del blog hacia servicios, giros y estados sale con el mismo nombre
// que esa página usa en el menú, y no con un texto escrito a mano en cada
// artículo que se desactualiza.
// ============================================================

import { PAGES, translations, isNiche, type Lang, type PageKey } from "../i18n/ui";
import { getSegment, segments } from "../i18n/segments";
import { serviceLines, SERVICE_KEYS } from "../i18n/services";
import { subservices, SUBSERVICE_KEYS } from "../i18n/subservices";
import { audit } from "../i18n/audit";
import { markets, marketsHub, MARKET_KEYS } from "../i18n/markets";

export interface PageLink {
  href: string;
  label: string;
  hint: string;
}

const has = (list: readonly string[], key: string) => list.includes(key);

/** Textos de las páginas que no tienen etiqueta propia en su módulo. */
const FIXED: Record<Lang, Partial<Record<PageKey, { label: string; hint: string }>>> = {
  es: {
    pricing: { label: "Precios", hint: "Todos los paquetes con su precio base en USD." },
    portfolio: { label: "Portafolio", hint: "Proyectos reales que puedes abrir y revisar." },
    contact: { label: "Llamada gratis de 20 minutos", hint: "Te digo qué le falta a tu negocio hoy." },
    services: { label: "Servicios", hint: "Desarrollo web y marketing digital." },
    sectors: { label: "Páginas web por giro", hint: "Qué cambia según el tipo de negocio." },
  },
  en: {
    pricing: { label: "Pricing", hint: "Every package with its base price in USD." },
    portfolio: { label: "Portfolio", hint: "Real projects you can open and review." },
    contact: { label: "Free 20-minute call", hint: "I'll tell you what your business is missing." },
    services: { label: "Services", hint: "Web development and digital marketing." },
    sectors: { label: "Websites by industry", hint: "What changes for each type of business." },
  },
};

export function pageLink(key: PageKey, lang: Lang): PageLink | undefined {
  const href = PAGES[key]?.[lang];
  if (!href) return undefined;

  if (has(SERVICE_KEYS, key)) {
    const s = serviceLines[lang][key as (typeof SERVICE_KEYS)[number]];
    return { href, label: s.navLabel, hint: s.navHint };
  }
  if (has(SUBSERVICE_KEYS, key)) {
    const s = subservices[lang][key as (typeof SUBSERVICE_KEYS)[number]];
    return { href, label: s.navLabel, hint: s.navHint };
  }
  if (key === "audit") {
    return { href, label: audit[lang].navLabel, hint: audit[lang].navHint };
  }
  if (isNiche(key) || key in segments[lang]) {
    const s = getSegment(lang, key as Parameters<typeof getSegment>[1]);
    return { href, label: `${s.heroTitleA} ${s.heroHighlight}`, hint: s.navHint };
  }
  if (has(MARKET_KEYS, key)) {
    const m = markets[lang][key as (typeof MARKET_KEYS)[number]];
    return { href, label: m.meta.heroTitleA, hint: m.navHint };
  }
  if (key === "markets") {
    const h = marketsHub[lang].meta;
    return { href, label: `${h.heroTitleA} ${h.heroHighlight}`, hint: h.heroSubtitle };
  }
  const fixed = FIXED[lang][key];
  if (fixed) return { href, ...fixed };
  return { href, label: translations[lang].nav.home, hint: "" };
}

/** Resuelve una lista de claves del frontmatter, ignorando las que no existen. */
export function pageLinks(keys: readonly string[], lang: Lang): PageLink[] {
  return keys
    .filter((k): k is PageKey => k in PAGES)
    .map((k) => pageLink(k, lang))
    .filter((l): l is PageLink => Boolean(l));
}
