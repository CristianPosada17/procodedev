// ============================================================
// Identidad visual por giro
// ------------------------------------------------------------
// Las cinco páginas de giro comparten plantilla, y eso se notaba: el hero
// era idéntico salvo el texto. Cada giro tiene ahora su propio color de
// acento y su propia escena de fondo (ver SegmentHeroArt.astro), para que
// al abrir dos páginas seguidas se vea que son sitios distintos y no el
// mismo molde relleno con otro nombre.
// ============================================================
import type { SegmentKey } from "../i18n/ui";

export interface SegmentTheme {
  /** Color de acento del giro sobre fondo oscuro (hex). */
  accent: string;
  /** Segundo color del degradado del hero, sobre fondo oscuro. */
  accent2: string;
  /** El mismo acento, oscurecido para leerse sobre blanco. */
  accentLight: string;
  /** El segundo color, oscurecido para el tema claro. */
  accent2Light: string;
  /** Etiqueta corta que se dibuja en la esquina de la escena. */
  tag: string;
}

export const SEGMENT_THEME: Record<SegmentKey, SegmentTheme> = {
  contractors: { accent: "#f59e0b", accent2: "#f97316", accentLight: "#b45309", accent2Light: "#c2410c", tag: "BUILD" },
  health: { accent: "#34d399", accent2: "#06b6d4", accentLight: "#047857", accent2Light: "#0e7490", tag: "CARE" },
  professional: { accent: "#a78bfa", accent2: "#6366f1", accentLight: "#6d28d9", accent2Light: "#4338ca", tag: "TRUST" },
  realEstate: { accent: "#fb7185", accent2: "#f59e0b", accentLight: "#be123c", accent2Light: "#b45309", tag: "HOME" },
  accounting: { accent: "#22d3ee", accent2: "#38bdf8", accentLight: "#0e7490", accent2Light: "#0369a1", tag: "NUMBERS" },
};
