// ============================================================
// Sitemap generado en cada build (octubre de 2026)
// ------------------------------------------------------------
// Antes vivía en public/sitemap.xml, escrito a mano: cada página nueva o
// artículo publicado desde /admin había que añadirlo a mano, y las fechas
// eran todas iguales. Ahora sale de PAGES (todas las páginas del sitio, con
// su par de idioma para hreflang) y de la colección del blog, con la fecha
// de revisión de cada una (src/lib/content-dates.ts y el frontmatter).
//
// No hay <priority> ni <changefreq>: Google declaró que los ignora.
// ============================================================
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { PAGES, type PageKey } from "../i18n/ui";
import { reviewedOn } from "../lib/content-dates";

const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const isoDay = (d: Date) => d.toISOString().slice(0, 10);

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL("https://procodedev.com");
  const abs = (path: string) => new URL(path, base).toString();

  const entries: string[] = [];
  const url = (loc: string, lastmod: string, alternates?: { es: string; en: string }) => {
    const alt = alternates
      ? [
          `    <xhtml:link rel="alternate" hreflang="es" href="${xmlEscape(alternates.es)}" />`,
          `    <xhtml:link rel="alternate" hreflang="en" href="${xmlEscape(alternates.en)}" />`,
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(alternates.es)}" />`,
        ].join("\n") + "\n"
      : "";
    entries.push(
      `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alt}  </url>`,
    );
  };

  // Páginas del sitio: una entrada por idioma, cada una con su par.
  for (const key of Object.keys(PAGES) as PageKey[]) {
    const { es, en } = PAGES[key];
    const lastmod = reviewedOn(key);
    if (es === en) {
      // Solo existe en un idioma (p. ej. /revision-express/): sin hreflang.
      url(abs(es), lastmod);
      continue;
    }
    const alternates = { es: abs(es), en: abs(en) };
    url(alternates.es, lastmod, alternates);
    url(alternates.en, lastmod, alternates);
  }

  // Blog (solo en español).
  const posts = await getCollection("blog");
  const newest = posts.reduce<Date | undefined>((acc, p) => {
    const d = p.data.updatedDate ?? p.data.pubDate;
    return !acc || d > acc ? d : acc;
  }, undefined);
  if (newest) url(abs("/blog/"), isoDay(newest));
  for (const post of posts.sort((a, b) => +b.data.pubDate - +a.data.pubDate)) {
    url(abs(`/blog/${post.id}/`), isoDay(post.data.updatedDate ?? post.data.pubDate));
  }

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    entries.join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
