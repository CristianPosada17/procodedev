// ============================================================
// Copy del aviso de cookies / consentimiento (ES / EN)
// Vive aparte de ui.ts porque no es copy de venta: es un texto legal
// corto que se toca con otro criterio y en otro momento.
// ============================================================
import type { Lang } from "./ui";

export const CONSENT_COPY: Record<
  Lang,
  {
    title: string;
    body: string;
    accept: string;
    reject: string;
    policy: string;
    aria: string;
  }
> = {
  es: {
    title: "Cookies y medición",
    body: "Usamos cookies propias y de Google y Meta para entender qué partes del sitio funcionan y mejorar lo que no. Puedes aceptarlas o rechazarlas; el sitio funciona igual en ambos casos.",
    accept: "Aceptar",
    reject: "Rechazar",
    policy: "Aviso de privacidad",
    aria: "Aviso de cookies",
  },
  en: {
    title: "Cookies and analytics",
    body: "We use our own cookies plus Google's and Meta's to understand which parts of the site work and improve the ones that don't. You can accept or decline; the site works the same either way.",
    accept: "Accept",
    reject: "Decline",
    policy: "Privacy policy",
    aria: "Cookie notice",
  },
};
