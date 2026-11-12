// ============================================================
// Enlazado interno por página — Ola 1 del plan de interlinking (12 nov 2026)
// ------------------------------------------------------------
// Sale del export de Search Console (últimos 3 meses) cruzado con los enlaces
// que ya había en el sitio. Estas páginas no tenían ningún enlace, dentro del
// contenido, hacia las guías del blog ni hacia las páginas de mercado que
// Google ya muestra entre las posiciones 5 y 20. Se les añade un bloque de
// relacionados con texto de enlace descriptivo, sacado de búsquedas reales
// del export («spanish speaking web designer texas», «páginas web en
// california», «diseño de sitios web responsive en california»…).
//
// Cada página aparece una sola vez. Un bloque aquí sustituye al bloque de
// relacionados que la plantilla ya tuviera (Desarrollo Web) o se añade antes
// del cierre de agenda (giros y mercados, que no tenían ninguno).
// Plan completo: F:\ProCode SEO\Interlinking-procodedev.com-2026-11-12.xlsx
// ============================================================

import type { Lang, PageKey, RelatedBlock } from "./ui";

export const contextBlocks: Record<Lang, Partial<Record<PageKey, RelatedBlock>>> = {
  es: {
    // Desarrollo Web compartía bloque con el hub /servicios/, así que no
    // podía enlazarlo sin que el hub se enlazara a sí mismo.
    webDev: {
      eyebrow: "// las entradas al servicio",
      title: "Los dos servicios y sus tres entradas",
      body:
        "El desarrollo web es uno de los dos servicios de ProCode Systems. Además de este proyecto completo, hay tres entradas distintas: dos al mismo trabajo y una al SEO, que se contrata aparte.",
      items: [
        {
          label: "Servicios de desarrollo web y marketing digital",
          href: "/servicios/",
          hint: "Los dos servicios lado a lado y por cuál conviene empezar",
        },
        {
          label: "Diseño de landing pages",
          href: "/servicios/landing-pages/",
          hint: "Una página, un objetivo, desde $349 USD",
        },
        {
          label: "Servicio de SEO",
          href: "/servicios/seo/",
          hint: "Auditoría, keyword research y trabajo mensual",
        },
        {
          label: "Mantenimiento web",
          href: "/servicios/mantenimiento-web/",
          hint: "Actualizaciones, respaldos y soporte desde $79 al mes",
        },
      ],
    },
    contractors: {
      eyebrow: "// para seguir leyendo",
      title: "Guías para contratistas hispanos en EE. UU.",
      body:
        "Lo que conviene leer antes de decidir: cómo se consiguen clientes en este giro, qué cambia por estado y cómo salir en el mapa de Google.",
      items: [
        {
          label: "Marketing digital para contratistas hispanos",
          href: "/blog/marketing-digital-para-contratistas-hispanos-estados-unidos/",
          hint: "La guía completa: Google, reseñas, página web y seguimiento",
        },
        {
          label: "Páginas web para contratistas en Texas",
          href: "/diseno-web-texas/",
          hint: "Qué necesita un negocio de construcción que atiende en Texas",
        },
        {
          label: "Cómo poner tu negocio en Google Maps",
          href: "/blog/como-aparecer-en-google-maps-negocio/",
          hint: "El Perfil de Empresa paso a paso, sin local a la calle",
        },
      ],
    },
    landscaping: {
      eyebrow: "// para seguir leyendo",
      title: "Más allá de la página web",
      body:
        "La web es una pieza. Estas guías explican las otras: cómo llegan los clientes a un negocio de jardinería y qué puede hacer Google por las ciudades que atiendes.",
      items: [
        {
          label: "Cómo conseguir clientes como contratista hispano en EE. UU.",
          href: "/blog/marketing-digital-para-contratistas-hispanos-estados-unidos/",
          hint: "Google, reseñas, web y seguimiento, en un solo plan",
        },
        {
          label: "Diseño de sitios web en California",
          href: "/diseno-web-california/",
          hint: "Donde trabajamos el caso de Trejos Landscaping, en Salinas",
        },
        {
          label: "Zona de servicio en Google para varios condados",
          href: "/blog/zona-de-servicio-google-varios-condados-texas-florida/",
          hint: "Qué hace y qué no hace la zona de servicio del Perfil de Empresa",
        },
      ],
    },
    florida: {
      eyebrow: "// para seguir leyendo",
      title: "Guías para negocios hispanos en Florida",
      body:
        "Tres lecturas que responden las dudas más comunes de un negocio de servicios en Florida antes de hacer su página.",
      items: [
        {
          label: "Marketing para contratistas latinos en Estados Unidos",
          href: "/blog/marketing-digital-para-contratistas-hispanos-estados-unidos/",
          hint: "Cómo se consiguen clientes en obra, remodelación y jardinería",
        },
        {
          label: "Página web bilingüe en español e inglés",
          href: "/blog/pagina-web-bilingue-espanol-ingles-estados-unidos/",
          hint: "Cuándo conviene y cómo se hace bien",
        },
        {
          label: "Zona de servicio en Google para varios condados",
          href: "/blog/zona-de-servicio-google-varios-condados-texas-florida/",
          hint: "Miami-Dade, Broward, Palm Beach: qué hace y qué no hace la zona de servicio",
        },
      ],
    },
  },
  en: {},
};
