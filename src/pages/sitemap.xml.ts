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

  // Blog: español en /blog/, inglés en /en/blog/ (oct 2026). Los artículos
  // con `translationOf` llevan el par hreflang; el resto va solo.
  const [posts, enPosts] = await Promise.all([getCollection("blog"), getCollection("blogEn")]);
  const lastOf = (p: { data: { pubDate: Date; updatedDate?: Date } }) => p.data.updatedDate ?? p.data.pubDate;
  const newestOf = (list: { data: { pubDate: Date; updatedDate?: Date } }[]) =>
    list.reduce<Date | undefined>((acc, p) => (!acc || lastOf(p) > acc ? lastOf(p) : acc), undefined);
  const blogIndex = { es: abs("/blog/"), en: abs("/en/blog/") };
  const newestEs = newestOf(posts);
  const newestEn = newestOf(enPosts);
  if (newestEs) url(blogIndex.es, isoDay(newestEs), newestEn ? blogIndex : undefined);
  if (newestEn) url(blogIndex.en, isoDay(newestEn), newestEs ? blogIndex : undefined);

  const esIds = new Set(posts.map((p) => p.id));
  const pairOf = new Map(
    enPosts
      .filter((p) => p.data.translationOf && esIds.has(p.data.translationOf))
      .map((p) => [p.data.translationOf as string, p.id]),
  );
  for (const post of posts.sort((a, b) => +b.data.pubDate - +a.data.pubDate)) {
    const en = pairOf.get(post.id);
    const alt = en ? { es: abs(`/blog/${post.id}/`), en: abs(`/en/blog/${en}/`) } : undefined;
    url(abs(`/blog/${post.id}/`), isoDay(lastOf(post)), alt);
  }
  for (const post of enPosts.sort((a, b) => +b.data.pubDate - +a.data.pubDate)) {
    const es = post.data.translationOf;
    const alt = es && esIds.has(es) ? { es: abs(`/blog/${es}/`), en: abs(`/en/blog/${post.id}/`) } : undefined;
    url(abs(`/en/blog/${post.id}/`), isoDay(lastOf(post)), alt);
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
