// ============================================================
// Sobre nosotros (/sobre-nosotros/, /en/about/) — 12 de noviembre de 2026
// ------------------------------------------------------------
// Sale de la auditoría SEO del 12 nov 2026: el sitio no tenía página de
// «Sobre nosotros», una de las señales de confianza (E-E-A-T) que revisa
// Google y que los asistentes con IA usan para describir a una empresa.
//
// Regla de contenido: SOLO datos ya publicados en el sitio o confirmados por
// Cristian (fundador, 5 años, mercados, idiomas, precios, plazo de respuesta,
// capacidad, sede en Durango). No añadir cifras, clientes ni premios sin
// confirmar. Si cambia un dato aquí, revisar también public/llms.txt.
//
// Redacción «citable»: el párrafo del hero responde qué es la empresa con
// sujeto explícito, y los encabezados son la pregunta que alguien haría.
//
// Enlaces: en `story.paragraphs` y `principles.items[].body` se puede escribir
// [texto](/ruta/); AboutPage.astro lo convierte en un enlace dentro del texto.
// ============================================================

import type { Lang } from "./ui";

export interface AboutCopy {
  meta: { title: string; description: string; keywords: string };
  breadcrumb: string;
  hero: {
    eyebrow: string;
    titleA: string;
    highlight: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badgeRole: string;
    badgeReply: string;
    badgeReplyNote: string;
    badgeLocation: string;
  };
  stats: readonly { value: string; label: string }[];
  story: {
    eyebrow: string;
    title: string;
    quote: string;
    paragraphs: readonly string[];
    signature: string;
    signatureRole: string;
  };
  options: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cols: readonly {
      name: string;
      tag?: string;
      featured?: boolean;
      points: readonly { ok: boolean; text: string }[];
    }[];
  };
  principles: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly { title: string; body: string }[];
  };
  base: {
    eyebrow: string;
    title: string;
    body: string;
    hq: string;
    hqNote: string;
    marketsLabel: string;
    languages: string;
  };
  form: { eyebrow: string; titleA: string; highlight: string; subtitle: string };
}

export const about: Record<Lang, AboutCopy> = {
  es: {
    meta: {
      title: "Sobre Nosotros: Quién Está Detrás | ProCode Systems",
      description:
        "ProCode Systems es una agencia de diseño web y marketing digital con sede en Durango, México, dirigida por Cristian Posada. Atiende EE. UU. y México.",
      keywords:
        "sobre ProCode Systems, quién es ProCode Systems, Cristian Posada desarrollador web, agencia de diseño web en Durango, agencia de diseño web en español, agencia de páginas web para negocios latinos",
    },
    breadcrumb: "Sobre nosotros",
    hero: {
      eyebrow: "Sobre nosotros",
      titleA: "Pequeños a propósito.",
      highlight: "Responsables de principio a fin.",
      lead:
        "ProCode Systems es una agencia de diseño web y marketing digital con sede en Durango, México, fundada y dirigida por Cristian Posada. Diseña y programa páginas web a la medida para negocios de servicios y pymes en Estados Unidos y México, y las conecta con Google, WhatsApp y la agenda de citas, en español y en inglés.",
      ctaPrimary: "Agendar Revisión Express",
      ctaSecondary: "Ver proyectos reales",
      badgeRole: "Fundador y desarrollador",
      badgeReply: "< 24 h",
      badgeReplyNote: "para responder cualquier mensaje",
      badgeLocation: "Durango, México",
    },
    stats: [
      { value: "5 años", label: "desarrollando sitios web" },
      { value: "4", label: "proyectos nuevos al mes, como máximo" },
      { value: "< 24 h", label: "para responder cualquier mensaje" },
      { value: "$349", label: "USD, precio base de una landing page" },
    ],
    story: {
      eyebrow: "Nuestra historia",
      title: "¿Por qué existe ProCode Systems?",
      quote:
        "Quien contesta tu mensaje, construye tu sitio y lo mantiene es siempre la misma persona.",
      paragraphs: [
        "ProCode Systems nació para llevar a los negocios de servicios el mismo estándar de desarrollo web con el que trabajan las empresas internacionales. Antes de fundarla, Cristian Posada pasó 5 años como desarrollador web trabajando con empresas internacionales.",
        "Un negocio pequeño suele tener que elegir entre una agencia grande, cara y con ejecutivos de cuenta, o un freelance que desaparece al entregar. ProCode Systems es una tercera opción: una agencia dirigida por su fundador, con precios publicados, un solo responsable y dos servicios: [desarrollo web para pymes y marketing digital](/servicios/).",
        "El objetivo de cada proyecto no es entregar una página bonita, sino un sistema que convierta visitas en clientes: sitio, presencia en Google, formularios y agenda de citas, conectados entre sí.",
      ],
      signature: "Cristian Posada",
      signatureRole: "Fundador de ProCode Systems",
    },
    options: {
      eyebrow: "La tercera opción",
      title: "¿Qué cambia frente a una agencia grande o un freelance?",
      subtitle:
        "Las dos opciones de siempre tienen su lugar. ProCode Systems existe para el negocio que no encaja en ninguna.",
      cols: [
        {
          name: "Agencia grande",
          points: [
            { ok: true, text: "Equipo amplio y procesos formales" },
            { ok: false, text: "Ejecutivos de cuenta entre tú y quien hace el trabajo" },
            { ok: false, text: "Precios que solo conoces tras una llamada de ventas" },
            { ok: false, text: "Contratos largos para empezar" },
          ],
        },
        {
          name: "ProCode Systems",
          tag: "Dirigida por su fundador",
          featured: true,
          points: [
            { ok: true, text: "Hablas siempre con quien diseña y programa tu sitio" },
            { ok: true, text: "Precios base publicados, sin contratos de 12 meses" },
            { ok: true, text: "Sitio, Google, formularios y agenda conectados" },
            { ok: true, text: "Seguimiento después del lanzamiento, en español e inglés" },
          ],
        },
        {
          name: "Freelance",
          points: [
            { ok: true, text: "Precio de entrada bajo" },
            { ok: false, text: "Difícil de localizar después de entregar" },
            { ok: false, text: "La página se entrega sola, sin estrategia de captación" },
            { ok: false, text: "Sin medición de llamadas, mensajes ni citas" },
          ],
        },
      ],
    },
    principles: {
      eyebrow: "Cómo trabajamos",
      title: "¿Cómo trabaja ProCode Systems?",
      subtitle: "Cinco compromisos que se cumplen en todos los proyectos, sin importar su tamaño.",
      items: [
        {
          title: "Un solo responsable",
          body: "Cristian Posada dirige cada proyecto de principio a fin: estrategia, diseño, desarrollo, SEO y campañas. Sin intermediarios ni cambios de interlocutor.",
        },
        {
          title: "Precios a la vista",
          body: "Los precios base están publicados. No hace falta una llamada de ventas para conocerlos y no hay contratos de 12 meses. Quien necesita un diagnóstico a fondo antes de decidir tiene la [auditoría estratégica integral](/servicios/auditoria/).",
        },
        {
          title: "Código a la medida",
          body: "Cada sitio se programa con Astro y Tailwind CSS, sin plantillas ni constructores: HTML estático, rápido y fácil de posicionar en Google.",
        },
        {
          title: "Bilingüe de verdad",
          body: "Atención y sitios en español y en inglés, con una URL por idioma, para negocios latinos en Estados Unidos y para México.",
        },
        {
          title: "Respuesta en menos de 24 horas",
          body: "Cualquier mensaje recibe respuesta en menos de 24 horas. Es un plazo de respuesta, no de entrega, y sigue vigente después del lanzamiento.",
        },
      ],
    },
    base: {
      eyebrow: "Dónde estamos",
      title: "Desde Durango, para negocios de Estados Unidos y México",
      body:
        "ProCode Systems tiene su sede en Durango, México, y trabaja en remoto con negocios de todo Estados Unidos y México. Las reuniones son por videollamada y el día a día va por WhatsApp, en tu horario.",
      hq: "Durango, DGO, México",
      hqNote: "Sede de ProCode Systems",
      marketsLabel: "Mercados que atendemos",
      languages: "Atención en español e inglés",
    },
    form: {
      eyebrow: "Hablemos",
      titleA: "¿Quieres saber si",
      highlight: "podemos ayudarte?",
      subtitle: "Déjame tu nombre y tu correo, y te respondo en menos de 24 horas.",
    },
  },
  en: {
    meta: {
      title: "About Us: Who Is Behind the Work | ProCode Systems",
      description:
        "ProCode Systems is a web design and digital marketing agency based in Durango, Mexico, led by founder Cristian Posada. Serving the US and Mexico.",
      keywords:
        "about ProCode Systems, who is ProCode Systems, Cristian Posada web developer, bilingual web design agency, Spanish-speaking web designer, web design agency for Latino businesses",
    },
    breadcrumb: "About",
    hero: {
      eyebrow: "About us",
      titleA: "Small on purpose.",
      highlight: "Accountable from start to finish.",
      lead:
        "ProCode Systems is a web design and digital marketing agency based in Durango, Mexico, founded and led by Cristian Posada. It designs and hand-codes websites for service businesses and small companies in the United States and Mexico, and connects them to Google, WhatsApp and online booking, in English and Spanish.",
      ctaPrimary: "Book my Express Review",
      ctaSecondary: "See real projects",
      badgeRole: "Founder and developer",
      badgeReply: "< 24 h",
      badgeReplyNote: "to reply to any message",
      badgeLocation: "Durango, Mexico",
    },
    stats: [
      { value: "5 years", label: "building websites" },
      { value: "4", label: "new projects per month, at most" },
      { value: "< 24 h", label: "to reply to any message" },
      { value: "$349", label: "USD, base price of a landing page" },
    ],
    story: {
      eyebrow: "Our story",
      title: "Why does ProCode Systems exist?",
      quote:
        "The person who answers your message, builds your site and maintains it is always the same person.",
      paragraphs: [
        "ProCode Systems was founded to bring service businesses the same web development standard that international companies work with. Before starting it, Cristian Posada spent 5 years as a web developer working with international companies.",
        "A small business usually has to choose between a large, expensive agency with account managers, or a freelancer who disappears after delivery. ProCode Systems is a third option: a founder-led agency with published prices, one person accountable and two services: [web development and digital marketing for small businesses](/en/services/).",
        "The goal of every project is not a pretty website, but a system that turns visits into clients: website, Google presence, forms and booking, all connected.",
      ],
      signature: "Cristian Posada",
      signatureRole: "Founder of ProCode Systems",
    },
    options: {
      eyebrow: "The third option",
      title: "What's different from a big agency or a freelancer?",
      subtitle:
        "Both usual options have their place. ProCode Systems exists for the business that fits neither.",
      cols: [
        {
          name: "Large agency",
          points: [
            { ok: true, text: "Large team and formal processes" },
            { ok: false, text: "Account managers between you and the people doing the work" },
            { ok: false, text: "Prices you only learn after a sales call" },
            { ok: false, text: "Long contracts to get started" },
          ],
        },
        {
          name: "ProCode Systems",
          tag: "Founder-led",
          featured: true,
          points: [
            { ok: true, text: "You always talk to the person who designs and codes your site" },
            { ok: true, text: "Published base prices, no 12-month contracts" },
            { ok: true, text: "Website, Google, forms and booking connected" },
            { ok: true, text: "Follow-up after launch, in English and Spanish" },
          ],
        },
        {
          name: "Freelancer",
          points: [
            { ok: true, text: "Low entry price" },
            { ok: false, text: "Hard to reach after delivery" },
            { ok: false, text: "A page on its own, with no lead strategy" },
            { ok: false, text: "No tracking of calls, messages or bookings" },
          ],
        },
      ],
    },
    principles: {
      eyebrow: "How we work",
      title: "How does ProCode Systems work?",
      subtitle: "Five commitments that apply to every project, regardless of size.",
      items: [
        {
          title: "One person accountable",
          body: "Cristian Posada leads every project from start to finish: strategy, design, development, SEO and campaigns. No middlemen, no hand-offs.",
        },
        {
          title: "Prices in the open",
          body: "Base prices are published. You don't need a sales call to see them, and there are no 12-month contracts. If you need an in-depth diagnosis before deciding, there is the [strategic business audit](/en/services/audit/).",
        },
        {
          title: "Hand-coded websites",
          body: "Every site is built with Astro and Tailwind CSS, with no templates or page builders: static HTML that is fast and easy to rank on Google.",
        },
        {
          title: "Truly bilingual",
          body: "Service and websites in English and Spanish, with one URL per language, for Latino businesses in the US and for Mexico.",
        },
        {
          title: "Replies in under 24 hours",
          body: "Every message gets a reply in under 24 hours. It's a response time, not a delivery time, and it still applies after launch.",
        },
      ],
    },
    base: {
      eyebrow: "Where we are",
      title: "From Durango, for businesses in the US and Mexico",
      body:
        "ProCode Systems is based in Durango, Mexico, and works remotely with businesses across the United States and Mexico. Meetings happen over video call and day-to-day work runs on WhatsApp, on your schedule.",
      hq: "Durango, DGO, Mexico",
      hqNote: "ProCode Systems headquarters",
      marketsLabel: "Markets we serve",
      languages: "Service in English and Spanish",
    },
    form: {
      eyebrow: "Let's talk",
      titleA: "Want to know if",
      highlight: "we can help?",
      subtitle: "Leave your name and email, and I'll reply in under 24 hours.",
    },
  },
};
