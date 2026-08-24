// ============================================================
// PROCODE DEV — Configuración de medición
// IDs, agrupación de contenido y regiones con consentimiento previo.
// Todo lo que dependa de una cuenta externa vive aquí, no en los
// componentes: si cambia un ID, se cambia en un solo lugar.
// ============================================================

import type { PageKey } from "../i18n/ui";

export const MEASUREMENT = {
  /** Google Analytics 4 */
  ga4: "G-LPJ6DT1WZZ",
  /** Meta (Facebook) Pixel */
  metaPixel: "1741784446953946",
  /**
   * Search Console ya está verificado por otro método (DNS / propiedad de
   * GA4). Se deja el hueco por si algún día hay que reverificar con meta.
   */
  gscVerification: "",
} as const;

/**
 * Países donde hay que pedir consentimiento ANTES de medir (RGPD + Reino
 * Unido + Suiza). Fuera de esta lista —que es donde está el público real de
 * ProCode, EE. UU. y México— la medición arranca concedida y el banner sirve
 * de aviso, no de barrera. Consent Mode v2 acepta esta lista como `region`.
 */
export const CONSENT_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
] as const;

/**
 * Agrupación de contenido de GA4 (`content_group`). Es lo que permite
 * preguntarle al informe «cómo va el blog» o «cómo van las cinco páginas de
 * giro» sin tener que sumar URLs a mano.
 */
export type ContentGroup =
  | "home"
  | "servicios"
  | "giros"
  | "portafolio"
  | "precios"
  | "contacto"
  | "blog"
  | "legal"
  | "otro";

const GROUP_BY_PAGE: Record<PageKey, ContentGroup> = {
  home: "home",
  services: "servicios",
  sectors: "giros",
  contractors: "giros",
  health: "giros",
  professional: "giros",
  realEstate: "giros",
  accounting: "giros",
  portfolio: "portafolio",
  pricing: "precios",
  contact: "contacto",
  privacy: "legal",
  terms: "legal",
};

export function contentGroupFor(page: PageKey | "blog"): ContentGroup {
  if (page === "blog") return "blog";
  return GROUP_BY_PAGE[page] ?? "otro";
}
