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

/** Páginas revisadas después de la fecha general. */
const PAGE_REVIEWED: Partial<Record<PageKey, string>> = {
  home: OCT_2026_NICHES,
  services: OCT_2026_NICHES,
  sectors: OCT_2026_NICHES,
  health: OCT_2026_NICHES,
  professional: OCT_2026_NICHES,
  realEstate: OCT_2026_NICHES,
  accounting: OCT_2026_NICHES,
  taxPreparers: OCT_2026_NICHES,
  dentists: OCT_2026_NICHES,
  psychologists: OCT_2026_NICHES,
  doctors: OCT_2026_NICHES,
  nutritionists: OCT_2026_NICHES,
  gyms: OCT_2026_NICHES,
  lawyers: OCT_2026_NICHES,
  insuranceAgents: OCT_2026_NICHES,
  realtors: OCT_2026_NICHES,
  landscaping: OCT_2026_NICHES,
};

export const reviewedOn = (page: PageKey): string =>
  PAGE_REVIEWED[page] ?? CONTENT_REVIEWED;
