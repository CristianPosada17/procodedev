// ============================================================
// Etiqueta corta de cada landing (septiembre de 2026)
// ------------------------------------------------------------
// Cada landing tiene su propio visual en el hero (hero-visuals/), pero
// TODAS usan la paleta de ProCode: azul de marca, cyan de acento y blanco.
// La identidad de cada página sale del visual y de su contenido, no de un
// color distinto. Aquí solo vive la etiqueta que se dibuja en el visual.
// ============================================================
import type { PageKey } from "../i18n/ui";

export const LANDING_TAG: Partial<Record<PageKey, string>> = {
  contractors: "BUILD",
  health: "CARE",
  professional: "TRUST",
  realEstate: "HOME",
  accounting: "NUMBERS",
  landingPages: "CONVERT",
  seo: "RANK",
  maintenance: "UPTIME",
  audit: "AUDIT",
  markets: "USA",
  mexico: "MX",
  texas: "TX",
  florida: "FL",
  california: "CA",
};
