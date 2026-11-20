// ============================================================
// Fechas de revisión del contenido (octubre de 2026)
// ------------------------------------------------------------
// Antes había una sola fecha para todo el sitio dentro de Layout.astro, y el
// sitemap se escribía a mano con esa misma fecha en cada URL. Un <lastmod>
// que es igual en todas las páginas no le dice nada a Google, y uno que no
// cambia cuando la página cambia, menos. Aquí vive la fecha por página: la
// leen el JSON-LD y Open Graph (Layout.astro) y el sitemap generado
// (src/pages/sitemap.xml.ts).
//
// Regla: cuando cambia el contenido de una página, se actualiza su fecha aquí.
// ============================================================

import type { PageKey } from "../i18n/ui";

/** Revisión editorial general del sitio. */
export const CONTENT_REVIEWED = "2026-09-29";

const OCT_2026_NICHES = "2026-10-13";
/** Paquetes de redes sociales y landing de Durango. */
const NOV_2026_SOCIAL = "2026-11-20";
/** Landings con identidad propia y oficios fusionados en su giro. */
const OCT_2026_IDENTITY = "2026-10-14";

/** Páginas revisadas después de la fecha general. */
const PAGE_REVIEWED: Partial<Record<PageKey, string>> = {
  // 12 nov 2026: propuesta de valor reescrita como respuesta directa.
  // 20 nov 2026: marketing digital desde $185 (paquetes de redes) en el
  // resumen de servicios del inicio y del hub.
  home: NOV_2026_SOCIAL,
  services: NOV_2026_SOCIAL,
  // 20 nov 2026: paquetes de redes sociales y publicaciones semanales en
  // Google en Crecimiento+ (marketing, precios y mantenimiento).
  digitalMarketing: NOV_2026_SOCIAL,
  pricing: NOV_2026_SOCIAL,
  maintenance: NOV_2026_SOCIAL,
  sectors: OCT_2026_IDENTITY,
  contractors: OCT_2026_IDENTITY,
  health: OCT_2026_IDENTITY,
  professional: OCT_2026_IDENTITY,
  realEstate: OCT_2026_IDENTITY,
  accounting: OCT_2026_IDENTITY,
  taxPreparers: OCT_2026_IDENTITY,
  landscaping: OCT_2026_IDENTITY,
  // Páginas de estado reenfocadas a «páginas web en <estado>».
  markets: OCT_2026_NICHES,
  // 20 nov 2026: Durango entre las zonas, con enlace a su landing.
  mexico: NOV_2026_SOCIAL,
  texas: OCT_2026_IDENTITY,
  florida: OCT_2026_IDENTITY,
  california: OCT_2026_IDENTITY,
  // Página nueva tras la auditoría SEO del 12 nov 2026.
  about: "2026-11-12",
  // Landing local de marketing en Durango (precios en MXN).
  durango: NOV_2026_SOCIAL,
};

export const reviewedOn = (page: PageKey): string =>
  PAGE_REVIEWED[page] ?? CONTENT_REVIEWED;
