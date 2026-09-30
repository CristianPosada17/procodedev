// ============================================================
// PROCODE DEV — Sistema bilingüe (ES/EN)
// Todo el copy vive aquí. Los componentes leen `t = translations[lang]`.
// ES es el idioma por defecto (raíz "/"); EN vive bajo "/en/".
// ============================================================

export type Lang = "es" | "en";

export const DEFAULT_LANG: Lang = "es";
export const LANGS: Lang[] = ["es", "en"];

// Rutas equivalentes por página (para nav, hreflang y toggle de idioma).
//
// Arquitectura de contenido (reposicionamiento de agosto de 2026, revisado):
//   /negocios · /en/industries → hub de giros
//   └── 5 páginas de segmento colgando del hub, una por giro. Cada una
//       existe porque el dueño de negocio se busca a sí mismo por su oficio
//       («página web para contratistas», «real estate agent website»), no
//       por la categoría genérica «pequeño negocio».
//
//   Las 14 URLs del nicho fiscal anterior (impuestos, cpas, bookkeepers,
//   enrolled-agents, resolucion-fiscal, despachos-contables y equivalentes
//   en inglés) redirigen a /contabilidad-e-impuestos, que ahora es un giro
//   más entre cinco y no el eje del sitio.
export type PageKey =
  | "home"
  | "services"
  | "webDev"
  | "digitalMarketing"
  // Subservicios (sep 2026): tres intenciones comerciales con URL propia
  // que colgaban de Desarrollo Web. No son líneas de servicio nuevas.
  // Ver src/i18n/subservices.ts.
  | "landingPages"
  | "seo"
  | "maintenance"
  // La Auditoría Estratégica cuelga de /servicios/ pero NO es una tercera línea
  // de servicio: es el producto de entrada de pago. Por eso tiene PageKey y
  // ruta propias, y NO está en SERVICE_KEYS. Ver src/i18n/audit.ts.
  | "audit"
  | "sectors"
  | "contractors"
  | "health"
  | "professional"
  | "realEstate"
  | "accounting"
  | "markets"
  | "mexico"
  | "texas"
  | "florida"
  | "california"
  | "portfolio"
  | "pricing"
  | "contact"
  | "privacy"
  | "terms"
  // Landing de captación aislada (sep 2026): /revision-express/. Reutiliza
  // el nombre y el Calendly ya establecidos en `common.ctaPrimary` y
  // `CONTACT.calendly` — no es una oferta nueva, es su puerta de entrada
  // propia para tráfico de redes, WhatsApp y campañas. Solo existe en
  // español por ahora (ver PAGES.expressReview más abajo).
  | "expressReview";

// Las rutas llevan barra final a propósito: Astro genera `/contacto/index.html`,
// así que la canónica del sitio es la versión CON barra. Enlazar sin barra hacía
// que el servidor redirigiera y que Search Console acumulara diez URLs en
// «Descubierta: actualmente sin indexar» (revisión del 24 ago 2026).
export const PAGES: Record<PageKey, Record<Lang, string>> = {
  home: { es: "/", en: "/en/" },
  services: { es: "/servicios/", en: "/en/services/" },
  // Las dos líneas de servicio cuelgan del hub /servicios/ (septiembre 2026).
  // Ver src/i18n/services.ts para el porqué de la especialización.
  webDev: {
    es: "/servicios/desarrollo-web/",
    en: "/en/services/web-development/",
  },
  digitalMarketing: {
    es: "/servicios/marketing-digital/",
    en: "/en/services/digital-marketing/",
  },
  landingPages: {
    es: "/servicios/landing-pages/",
    en: "/en/services/landing-pages/",
  },
  seo: {
    es: "/servicios/seo/",
    en: "/en/services/seo/",
  },
  maintenance: {
    es: "/servicios/mantenimiento-web/",
    en: "/en/services/website-maintenance/",
  },
  audit: { es: "/servicios/auditoria/", en: "/en/services/audit/" },
  sectors: { es: "/negocios/", en: "/en/industries/" },
  contractors: { es: "/contratistas/", en: "/en/contractors/" },
  health: { es: "/salud-y-bienestar/", en: "/en/health-and-wellness/" },
  professional: {
    es: "/servicios-profesionales/",
    en: "/en/professional-services/",
  },
  realEstate: { es: "/inmobiliarias/", en: "/en/real-estate/" },
  accounting: { es: "/contabilidad-e-impuestos/", en: "/en/accounting-and-tax/" },
  // Páginas de mercado (7 sep 2026): el eje geográfico con el que rankean
  // todos los competidores que capturan al negocio hispano en EE. UU.
  // Ver src/i18n/markets.ts para el razonamiento y las reglas.
  markets: {
    es: "/diseno-web-estados-unidos/",
    en: "/en/web-design-united-states/",
  },
  // México (30 sep 2026): primera del menú «Dónde trabajo».
  mexico: { es: "/diseno-web-mexico/", en: "/en/web-design-mexico/" },
  texas: { es: "/diseno-web-texas/", en: "/en/web-design-texas/" },
  florida: { es: "/diseno-web-florida/", en: "/en/web-design-florida/" },
  california: { es: "/diseno-web-california/", en: "/en/web-design-california/" },
  portfolio: { es: "/portafolio/", en: "/en/portfolio/" },
  pricing: { es: "/precios/", en: "/en/pricing/" },
  contact: { es: "/contacto/", en: "/en/contact/" },
  privacy: { es: "/aviso-de-privacidad/", en: "/en/privacy-policy/" },
  terms: { es: "/terminos-y-condiciones/", en: "/en/terms-of-service/" },
  // Sin versión en inglés todavía (prioridad: que la española quede
  // impecable primero). `en` apunta a la misma URL a propósito, para que
  // Layout.astro pueda seguir generando su hreflang sin necesitar una rama
  // especial; cuando exista /en/express-review/, cambiar solo esta línea.
  expressReview: { es: "/revision-express/", en: "/revision-express/" },
};

/** Giros que cuelgan del hub (orden del menú desplegable). */
export const SEGMENT_KEYS = [
  "contractors",
  "health",
  "professional",
  "realEstate",
  "accounting",
] as const;
export type SegmentKey = (typeof SEGMENT_KEYS)[number];

export function getAltPath(page: PageKey, lang: Lang): string {
  const other: Lang = lang === "es" ? "en" : "es";
  return PAGES[page][other];
}
// Datos de contacto compartidos (no cambian por idioma).
export const CONTACT = {
  whatsapp: "526142414255",
  whatsappDisplay: "+52 614 241 4255",
  email: "info@procodedev.com",
  calendly: "https://calendly.com/procodedev/revision-express",
  // Formularios «Más información» de Hostinger Reach, uno por área: cada uno
  // tiene su etiqueta, su segmento y su correo automático en Reach. LeadForm
  // y RevisionExpressForm conservan su diseño y envían nombre y correo a la
  // API del que toque (ver reachFormFor / reachSubmitUrl).
  reachForms: {
    general: "70202881-d369-407e-a501-bd3e4a141f8a",
    webDev: "4e2f4487-9154-46ca-82c8-ef8dd559d62d",
    marketing: "44f76c7b-6635-4697-a3fd-f2d57fbc5ff3",
  },
  instagram: "https://www.instagram.com/procode.systems/",
  linkedin: "https://www.linkedin.com/in/cristian-posada-891401291/",
  facebook: "https://www.facebook.com/ProCodeSystems",
  city: "Estados Unidos y México",
  cityFull: "Estados Unidos y México · atención remota en español",
  founderName: "Cristian Posada",
  founderPhoto: "/images/cristian-posada.jpg",
};

// Qué formulario de Reach usa cada página: las de desarrollo web y las de
// marketing tienen el suyo; el resto (inicio, contacto, hub de servicios,
// auditoría, industrias, mercados, Revisión Express) usa el general.
export function reachFormFor(page: PageKey): string {
  if (page === "webDev" || page === "landingPages" || page === "maintenance") {
    return CONTACT.reachForms.webDev;
  }
  if (page === "digitalMarketing" || page === "seo") {
    return CONTACT.reachForms.marketing;
  }
  return CONTACT.reachForms.general;
}

// Endpoint de envío de un formulario de Reach (el mismo que usa su iframe;
// acepta CORS desde cualquier origen y responde 2xx si guardó el contacto).
export const reachSubmitUrl = (formId: string) =>
  `https://reach.hostinger.com/api/v1/forms/${formId}/submit`;

export const translations = {
  es: {
    langName: "ES",
    otherLangName: "EN",
    nav: {
      home: "Inicio",
      services: "Servicios",
      servicesOverview: "Ver los dos servicios",
      servicesMenuNote: "Dos servicios, no una lista de veinte.",
      markets: "Dónde trabajo",
      marketsOverview: "Ver cómo funciona en remoto",
      marketsMenuNote: "Trabajo remoto con negocios de México y Estados Unidos.",
      sectors: "Industrias",
      sectorsOverview: "Ver todas las industrias",
      sectorsMenuNote: "Una página por industria, con lo que cada negocio necesita.",
      portfolio: "Portafolio",
      pricing: "Precios",
      blog: "Blog",
      contact: "Contacto",
      cta: "Revisión Express",
      themeToLight: "Cambiar a modo claro",
      themeToDark: "Cambiar a modo oscuro",
    },
    common: {
      // Una sola oferta de entrada y un solo nombre en todo el sitio, el
      // Calendly y los correos: la Revisión Express. El paso de pago que
      // sigue es la Auditoría Estratégica, que tiene landing propia en
      // /servicios/auditoria/ y NO se acredita a un proyecto posterior.
      ctaPrimary: "Agendar Revisión Express",
      free: "Gratis · 20 min por videollamada · 3 prioridades claras",
      viewServices: "Ver servicios",
      // Diferenciador principal. Va pegado a cada botón de agenda vía
      // <OfferNote />.
      guarantee: "Respondo cualquier mensaje en menos de 24 horas.",
      // Sustituye a la fecha límite fiscal: la escasez ahora es de agenda,
      // no de calendario. Si cambias el número, cámbialo también en el EN.
      deadline:
        "Tomo 4 proyectos al mes para que cada uno reciba atención real.",
    },
    // ── Posicionamiento (agosto 2026) ──────────────────────────────
    // ProCode no vende «páginas web». Una página es un entregable; el
    // problema del cliente es el sistema completo con el que consigue,
    // recibe, atiende y retiene clientes. La categoría es «sistemas
    // digitales de crecimiento para dueños de negocio», y todo el copy del
    // sitio cuelga de esa frase. El giro (contratista, clínica, despacho)
    // cambia los ejemplos, no la promesa.
    brand: {
      line: "Digital Growth Systems for Small Businesses",
      lineEs: "Sistemas digitales de crecimiento para dueños de negocio",
      stack:
        "Sitio web · Captación · Contacto · Agenda · Analítica",
      audience:
        "Contratistas · Clínicas y consultorios · Servicios profesionales · Inmobiliarias · Contadores y despachos",
    },
    hero: {
      eyebrow: "// sistemas digitales de crecimiento",
      titleA: "Agencia de diseño web y marketing digital",
      titleHighlight: "en Estados Unidos y México",
      titleB: "",
      subtitle: "Te encuentran. Te entienden. Te escriben.",
      badges: [
        "Precios base publicados",
        "Sin contratos de 12 meses",
        "Bilingüe inglés/español",
      ],
    },
    // Las seis capacidades que forman el sistema. Es la traducción visual
    // de la frase de marca: Websites + Client Acquisition + Intake +
    // Automation + Follow-Up + Analytics.
    values: {
      eyebrow: "// el sistema, por partes",
      items: [
        {
          icon: "layout",
          title: "Sitio web",
          description: "Una página por cada servicio.",
        },
        {
          icon: "target",
          title: "Captación",
          description: "Que te encuentren en Google.",
        },
        {
          icon: "clipboard-check",
          title: "Contacto",
          description: "Formularios que califican al cliente.",
        },
        {
          icon: "workflow",
          title: "Agenda",
          description: "Sistema de citas en línea automático.",
        },
        {
          icon: "repeat",
          title: "Bilingüe",
          description: "Español e inglés, con URLs separadas.",
        },
        {
          icon: "trending-up",
          title: "Analítica",
          description: "Formularios, clics y citas, no visitas.",
        },
      ],
    },
    // ── El recorrido del cliente de un negocio ───────────────────
    // La diferenciación #1: diseñamos alrededor del recorrido del cliente,
    // no alrededor de una lista de páginas.
    system: {
      eyebrow: "// cómo lo pensamos",
      titleA: "No diseñamos páginas. Diseñamos el",
      titleHighlight: "recorrido de tu cliente",
      subtitle:
        "Un sistema de captación de clientes en cinco etapas. Cada pieza resuelve un punto donde hoy pierdes clientes.",
      stages: [
        {
          icon: "search",
          step: "01",
          name: "Te encuentran",
          summary: "Apareces donde ya te buscan.",
        },
        {
          icon: "shield",
          step: "02",
          name: "Te creen",
          summary: "Trabajos, reseñas y respaldo visibles.",
        },
        {
          icon: "clipboard-check",
          step: "03",
          name: "Te contactan",
          summary: "Formularios que hacen las preguntas.",
        },
        {
          icon: "calendar",
          step: "04",
          name: "Te agendan",
          summary: "Sistema de agenda de citas automático.",
        },
        {
          icon: "repeat",
          step: "05",
          name: "Se quedan",
          summary: "Recompra, reseñas y referidos.",
        },
      ],
    },
    // ── DOS SERVICIOS (septiembre 2026) ────────────────────────────
    // El detalle vive en src/i18n/services.ts. Aquí solo queda el
    // encabezado de la sección, que es lo que cambia por página.
    services: {
      eyebrow: "// lo que hago",
      titleA: "Desarrollo web y marketing digital",
      titleHighlight: "para negocios que quieren crecer",
      titleB: "",
      subtitle:
        "Desarrollo web y marketing digital para negocios y pequeñas empresas. Empieza por el que necesitas hoy; el otro sigue aquí cuando toque.",
      detailTitle:
        "Servicios de desarrollo web y marketing digital para negocios",
      homeCta: "Ver los dos servicios a fondo",
    },
    process: {
      eyebrow: "// cómo trabajo",
      titleA: "Un proceso claro, enfocado en",
      titleHighlight: "resultados",
      subtitle: "Cinco pasos, sin vueltas y con fechas claras: así corre el servicio de creación de páginas web, de la primera llamada a la publicación.",
      steps: [
        {
          number: "01",
          title: "Descubrimiento",
          description: "Entiendo tu negocio y tus objetivos.",
        },
        {
          number: "02",
          title: "Estrategia",
          description: "Definimos estructura, mensaje y flujo.",
        },
        {
          number: "03",
          title: "Diseño y desarrollo",
          description: "Construyo el sitio y el sistema.",
        },
        {
          number: "04",
          title: "Integración y lanzamiento",
          description: "Conecto formularios y agenda, pruebo y publico.",
        },
        {
          number: "05",
          title: "Soporte inicial",
          description: "Ajustes tras publicar. La mejora mensual es un plan aparte.",
        },
      ],
    },
    // Las cinco capas de diferenciación. Sustituyen a seis afirmaciones que
    // podría firmar cualquier estudio de diseño («velocidad», «móvil»,
    // «mensajes claros»). Estas cinco solo las puede sostener alguien que
    // trabaja con negocios reales y ve sus números cada mes.
    why: {
      eyebrow: "// por qué ProCode Dev",
      titleA: "Technology + Growth + Operations",
      titleHighlight: "para dueños de negocio",
      titleB: "",
      subtitle:
        "Cualquiera puede hacerte una página. Los sitios web para captar clientes se construyen distinto, y esto es lo que cambia cuando quien los arma entiende cómo factura un negocio.",
      items: [
        {
          icon: "search",
          title: "Diseñado alrededor de cómo compra tu cliente",
          description: "Cada sección responde una duda que hoy te cuesta trabajos.",
        },
        {
          icon: "workflow",
          title: "Marketing conectado con tu operación",
          description: "Formularios que hacen las preguntas correctas antes de la primera conversación.",
        },
        {
          icon: "repeat",
          title: "De trabajo suelto a cliente recurrente",
          description: "Mantenimiento, segundas etapas y referidos, presentados a tiempo.",
        },
        {
          icon: "bar-chart",
          title: "Medimos negocio, no visitas",
          description: "Clics a WhatsApp o a llamar, formularios y citas, y de dónde vino cada uno.",
        },
        {
          icon: "globe",
          title: "Bilingüe de verdad",
          description: "Captación y experiencia completas en inglés y español.",
        },
      ],
    },
    // ── Proyecto destacado ────────────────────────────────────────
    // El bloque existía pero no destacaba ningún proyecto: describía «lo que
    // lleva dentro un sitio que vende» sin nombrar uno solo. Ahora es un caso
    // real, abierto y verificable. Sin cifras: no hay analítica publicable de
    // este proyecto y una métrica inventada resta más de lo que suma.
    caseStudy: {
      // 23 sep 2026: el caso destacado pasa a ser Mi Conta Universal (cliente
      // real de contabilidad e impuestos). Se usa en /portafolio (completo) y
      // en el home (variant="home", título y resumen propios para no duplicar).
      projectId: "miconta",
      segmentPage: "accounting",
      eyebrow: "// caso de éxito de diseño web · contabilidad",
      titleA: "Caso de éxito: página web para un",
      titleHighlight: "despacho contable bilingüe",
      homeEyebrow: "// proyecto destacado",
      homeTitleA: "Página web para",
      homeHighlight: "un despacho contable en Ohio",
      homeSummary:
        "Sitio web bilingüe para un despacho de contabilidad y bookkeeping en Cincinnati, Ohio. Ábrelo y júzgalo tú: así se ve una página web para contadores que trabaja por el despacho.",
      name: "Mi Conta Universal",
      badge: "Contabilidad e impuestos · Cincinnati, Ohio",
      url: "https://micontau.com/",
      urlLabel: "micontau.com",
      image: "/images/proyecto-miconta.jpg",
      imageAlt: "Página de inicio del sitio web de Mi Conta Universal, despacho de contabilidad en Cincinnati, Ohio",
      summary:
        "Un despacho de contabilidad, bookkeeping y nómina para pequeños negocios en Cincinnati y todo Ohio, en español y en inglés. Hoy su sitio explica cada servicio, resuelve las dudas del giro y lleva al cliente a WhatsApp o a una consulta.",
      challengeTitle: "El reto",
      challengeBody:
        "El dueño de un negocio pequeño no busca «contabilidad»: busca quién le lleve la nómina, le ayude a registrar su LLC o a sacar una licencia, y que se lo explique en su idioma. El sitio tenía que resolver eso antes de la primera llamada.",
      solutionTitle: "Qué construí",
      solution: [
        "Ocho servicios con su propia ficha —bookkeeping, payroll, reportes financieros, organización para impuestos, auditorías, registro de negocios, licencias y permisos, asesoría— para que cada cliente encuentre su trámite en segundos.",
        "Sitio bilingüe español / inglés con selector de idioma, pensado para el dueño de negocio hispano en Estados Unidos que quiere entender sus números sin tecnicismos.",
        "Tres caminos de contacto sin fricción: WhatsApp directo, llamada y un formulario que pregunta qué servicio necesita el cliente antes de la primera conversación.",
        "Una guía gratuita para pequeños negocios como imán de prospectos: nombre y correo a cambio de un recurso útil, para seguir la conversación por email.",
        "Preguntas frecuentes «Pregúntale a Micont@U» con las dudas reales del giro —LLC en Ohio, EIN sin Seguro Social, vendor's license, 1099— y marcado FAQPage para Google.",
        "SEO local para Cincinnati y todo Ohio: metadatos, Open Graph y JSON-LD de servicio profesional con dirección, horario y teléfono.",
      ],
      stackTitle: "Con qué está hecho",
      stack: ["Astro", "Diseño bilingüe ES/EN", "SEO local", "Datos estructurados", "Captación por WhatsApp"],
      segmentLinkLabel: "Ver cómo hago el diseño web para contadores",
      factsTitle: "En números",
      facts: [
        { value: "8", label: "servicios con ficha propia" },
        { value: "2", label: "idiomas: español e inglés" },
        { value: "9", label: "preguntas frecuentes con marcado para Google" },
      ],
      visit: "Visitar el sitio",
      cta: "Quiero un sitio así para mi negocio",
    },
    portfolio: {
      eyebrow: "// portafolio",
      titleA: "Proyectos reales,",
      titleHighlight: "en vivo y verificables",
      subtitle:
        "Una selección de sitios que construí para negocios que querían verse más profesionales y captar mejor. Haz clic para verlos en vivo.",
      viewProject: "Ver proyecto",
      resultLabel: "Resultado",
      challengeLabel: "Necesidad",
      workLabel: "Trabajo de ProCode",
      imageAltPrefix: "Captura del sitio web de",
      cta: "Quiero una página web para mi negocio",
      clientsTitle: "Clientes reales",
      clientsNote: "Ejemplos de sitios web para negocios que están en vivo: casos de sitios web pymes con clientes atendiendo por ellos hoy.",
      demosTitle: "Demos y conceptos",
      demosNote:
        "Diseño web para negocios locales que construí por mi cuenta para mostrar lo que se puede hacer en cada sector. No son clientes: los marco como demo para que no haya confusión.",
      projects: [
        {
          id: "miconta",
          name: "Mi Conta Universal — Contabilidad y bookkeeping",
          kind: "client",
          result: "",
          url: "https://micontau.com/",
          image: "/images/proyecto-miconta.jpg",
          badge: "Contabilidad e impuestos",
          description:
            "Sitio bilingüe para un despacho de contabilidad y bookkeeping en Cincinnati, Ohio: ocho servicios, guía gratuita, WhatsApp directo y SEO local para pequeños negocios.",
          challenge: "Explicar cada trámite a dueños de negocio hispanos, en su idioma, antes de la primera llamada.",
          work: "Desarrollo del sitio bilingüe: ocho servicios con ficha, guía gratuita, WhatsApp, preguntas frecuentes y SEO local.",
          tags: ["Sitio web", "Contabilidad", "Bilingüe"],
        },
        {
          id: "izcalli",
          name: "Constructora Izcalli",
          kind: "client",
          result: "",
          url: "https://constructoraizcalli.com/",
          image: "/images/proyecto-izcalli.jpg",
          badge: "Contratistas & construcción",
          description:
            "Sitio institucional para una constructora en Durango: nueve obras construidas con ficha propia, capacidades de ingeniería y ejecución, y datos formales a la vista.",
          challenge: "Mostrar años de obra entregada que solo existían en fotos sueltas.",
          work: "Primero, correo profesional, automatizaciones y soporte técnico. Después, el sitio institucional con nueve obras con ficha propia.",
          tags: ["Sitio web", "Construcción", "Portafolio de obra"],
        },
        {
          id: "fersilva",
          name: "Fernanda Silva — Nutrióloga",
          kind: "client",
          result: "",
          url: "https://fersilvanutricion.com/",
          image: "/images/proyecto-fersilva.jpg",
          badge: "Salud & bienestar",
          description:
            "Sitio profesional que comunica sus servicios, transmite confianza y facilita que nuevos pacientes agenden su consulta.",
          challenge: "Dejar de explicar su servicio por mensaje una y otra vez.",
          work: "Sitio web con los servicios explicados y agenda de citas en línea.",
          tags: ["Sitio web", "Salud", "Captación"],
        },
        {
          id: "cristian-posada",
          name: "Cristian Posada — Marca personal",
          kind: "own",
          result: "",
          url: "https://cristianposada.com/",
          image: "/images/proyecto-cristian-posada.jpg",
          badge: "Marca personal",
          description:
            "Sitio de marca personal enfocado en posicionar autoridad, mostrar proyectos y convertir visitantes en contactos reales.",
          challenge: "Reunir trayectoria y proyectos en un solo lugar.",
          work: "Sitio propio del fundador: no es un proyecto de cliente.",
          tags: ["Marca personal", "Branding", "Conversión"],
        },
        {
          id: "trejo",
          name: "Trejo Landscaping",
          kind: "client",
          result: "",
          url: "https://tj-landscaping.com/",
          image: "/images/proyecto-trejo-landscaping.jpg",
          badge: "Servicios locales",
          description:
            "Sitio de servicios que destaca su trabajo, transmite profesionalismo y capta solicitudes de cotización.",
          challenge: "Recibir solicitudes de cotización sin tener que perseguir a cada cliente.",
          work: "Sitio de servicios con captación de solicitudes de cotización.",
          tags: ["Sitio web", "Servicios", "Negocio local"],
        },
        {
          id: "demo-inmobiliaria",
          name: "Mariana Cervantes — Asesora Inmobiliaria",
          kind: "demo",
          result: "",
          url: "https://demoinmobiliaria.procodedev.com/",
          image: "/images/demo-inmobiliaria.jpg",
          badge: "Inmobiliaria · Demo",
          description:
            "Sitio inmobiliario con catálogo de propiedades, fichas detalladas, agenda de llamadas y captación directa por WhatsApp.",
          challenge: "Concepto para mostrar qué necesita un asesor inmobiliario. No es cliente.",
          work: "Demo con catálogo de propiedades, fichas, agenda de llamadas y WhatsApp.",
          tags: ["Sitio web", "Inmobiliaria", "Catálogo"],
        },
        {
          id: "demo-taxpro",
          name: "Herrera Tax & Advisory — TaxPro",
          kind: "demo",
          result: "",
          url: "https://demo-taxpro.procodedev.com/",
          image: "/images/demo-taxpro.jpg",
          badge: "Contabilidad e impuestos · Demo",
          description:
            "Sitio bilingüe para un despacho contable y fiscal en EE. UU.: servicios, agenda de consulta gratuita y captación enfocada en confianza.",
          challenge: "Concepto para mostrar qué necesita un despacho contable y fiscal. No es cliente.",
          work: "Demo bilingüe con servicios, agenda de consulta y captación.",
          tags: ["Sitio web", "Bilingüe", "Servicios profesionales"],
        },
      ],
    },
    pricing: {
      eyebrow: "// precios",
      titleA: "Elige el punto de partida y deja que tu web",
      titleHighlight: "venda por ti.",
      titleB: "",
      subtitle:
        "Precios base publicados en dólares, sin llamada de ventas para conocerlos y sin contratos de 12 meses. Elige por dónde empezar; confirmamos el alcance y la inversión antes de iniciar.",
      popular: "Más elegido",
      finePrintTitle: "Letra pequeña",
      currencyNoteUsd: "Todos los importes están en dólares estadounidenses (USD). Los proyectos web son de pago único; Soporte Web se cobra mes a mes. Dominio, hosting, correo y herramientas con suscripción se pagan aparte, directo a cada proveedor y a tu nombre.",
      // ── Auditoría Estratégica Integral · el producto de entrada ──
      // Septiembre de 2026: el Diagnóstico de $149 se acreditaba entero al
      // proyecto, así que era un paso de venta disfrazado de producto. La
      // auditoría se paga aparte y no se acredita: eso es lo que permite
      // recomendar «no toques nada» sin perder dinero. El 15 de septiembre
      // pasó de nueve áreas técnicas a doce que empiezan por el negocio, y
      // el precio dejó de publicarse: el alcance cambia demasiado de un
      // negocio a otro, y quien llega por un servicio la recibe como primera
      // fase del proyecto. No volver a poner cifras aquí.
      // La landing completa está en /servicios/auditoria/ y su copy en
      // src/i18n/audit.ts.
      advisory: {
        badge: "Producto de entrada · se paga aparte",
        name: "Auditoría Estratégica Integral",
        priceQuote: "A cotizar",
        priceNote: "según el alcance de tu negocio",
        hook: "Cuando sabes que algo no funciona pero no cuál de todas las piezas.",
        forWho: "Para cuando algo no funciona y no sabes qué pieza es",
        billing: "pago único",
        description:
          "Empieza por tu negocio y revisa doce áreas con acceso a tus datos reales, de la web y el SEO a los anuncios y la medición. Recibes hallazgos con evidencia, una estrategia priorizada con roadmap 30/60/90, un vídeo y una llamada. Si contratas desarrollo web, SEO o marketing, el diagnóstico que necesita ese servicio va dentro del proyecto y su alcance se define en la propuesta.",
        homeEyebrow: "// el siguiente paso",
        homeTitle: "¿Quieres el plan completo por escrito?",
        prereq:
          "Si nunca hemos hablado, empieza por la Revisión Express: es gratis y a mucha gente le basta.",
        viewPricing: "Ver todos los precios",
        waText:
          "Hola Cristian, Me interesa la Auditoría Estratégica Integral. Quiero saber qué está frenando mi negocio y en qué orden resolverlo.",
        stepsTitle: "Cómo funciona (3 fases)",
        steps: [
          {
            name: "Fase 1 · Negocio y accesos",
            description:
              "Qué vendes, a quién, en qué zona y qué resultado quieres. Más los accesos de solo lectura: Analytics, Search Console, tu Perfil de Empresa y tus cuentas de anuncios si las hay.",
          },
          {
            name: "Fase 2 · Auditoría del sistema completo",
            description:
              "Las doce áreas, una por una, con tus datos delante, el keyword research hecho y comparándote con quienes salen antes que tú en tu ciudad. Cada hallazgo con su evidencia.",
          },
          {
            name: "Fase 3 · Estrategia y roadmap",
            description:
              "Hallazgos clasificados por impacto, esfuerzo, urgencia y dependencia, estrategia priorizada y roadmap 30/60/90. Más el vídeo y la llamada de 30 a 45 minutos.",
          },
        ],
        cta: "Ver la Auditoría Estratégica",
      },
      extrasTitle: "Servicios adicionales",
      extrasSubtitle:
        "Complementos para mantener tu sitio creciendo y actualizado.",
      note: "Los precios publicados corresponden al alcance base de cada servicio. El total puede variar según páginas, idiomas, contenido, integraciones o complejidad. Confirmamos el alcance y la inversión antes de iniciar. Crecimiento+, Marketing Digital y la Auditoría Estratégica se cotizan tras la reunión inicial, porque dependen del estado de tu negocio.",
      baseNote: "Los precios publicados corresponden al alcance base de cada servicio. El total puede variar según páginas, idiomas, contenido, integraciones o complejidad. Confirmamos el alcance y la inversión antes de iniciar.",
      quotedScopeNote:
        "En los planes a cotizar, la cantidad, la frecuencia, las plataformas y los entregables se definen en la propuesta aprobada. Los honorarios de gestión no incluyen la inversión publicitaria, que pagas directo a Google o a Meta, ni herramientas externas con suscripción.",
      summaryTitle: "Desarrollo web",
      summarySubtitle:
        "Pago único por construir tu sitio. Precio base, para quién es y qué incluye; el detalle completo está en la página de cada servicio.",
      monthlySummaryTitle: "Servicios mensuales",
      forWhoLabel: "Para quién",
      detailsLabel: "Ver qué incluye",
      auditTitle: "Auditoría Estratégica",
      auditSubtitle:
        "No es un paquete web: es un diagnóstico independiente para decidir qué hacer primero.",
      termsTitle: "Condiciones generales",
      terms: [
        "Los precios publicados corresponden al alcance base de cada servicio. El total puede variar según páginas, idiomas, contenido, integraciones o complejidad. Confirmamos el alcance y la inversión antes de iniciar.",
        "Los plazos cuentan desde que recibo textos, fotos, accesos y aprobaciones: landing de 1 a 2 semanas, sitio de 4 a 6 páginas de 2 a 4 semanas y de 8 a 12 páginas de 4 a 6 semanas.",
        "Cada proyecto incluye rondas de revisión sobre el alcance acordado y soporte inicial tras el lanzamiento. Lo que añade páginas o funciones nuevas se cotiza antes de hacerlo.",
        "Dominio, hosting, correo y herramientas con suscripción se pagan aparte, directo al proveedor, y se renuevan según cada proveedor.",
        "Soporte Web y Crecimiento+ no tienen permanencia. Marketing Digital pide un mínimo de 3 meses.",
      ],
      // ── Escalera mensual: soporte → crecimiento → todo incluido ──
      // Sustituye al bloque único de mantenimiento. El objetivo del análisis de
      // mercado era crear techo de expansión: un cliente de $79 puede subir a
      // $349 y de ahí a $1,100 sin cambiar de proveedor.
      monthlyTitle: "Planes mensuales: mantenimiento web y SEO local",
      monthlySubtitle:
        "El mantenimiento web mensual tiene precio publicado. Crecimiento+ y Marketing Digital se cotizan a tu negocio: primero una reunión inicial para conocerlo y un diagnóstico, y de ahí sale el alcance y el número.",
      monthlyNote:
        "Permanencia: ninguna en Soporte Web ni en Crecimiento+ — subes, bajas o cancelas de un mes a otro. Marketing Digital pide un mínimo de 3 meses y, cumplido ese plazo, se cancela igual.",
      monthly: [
        {
          badge: "Base · Continuidad",
          name: "Soporte Web",
          pricePrefix: "Desde",
          price: "79",
          quoteLabel: "",
          currency: "USD / mes",
          currencyMonth: true,
          priceNote: "mensual · según el tamaño de tu sitio",
          forWho: "Para un sitio publicado que no quieres mantener tú",
          href: "maintenance",
          commitmentNote: "",
          tagline: "Tu página siempre al día",
          description:
            "No pagas «por si algo se rompe». Yo mantengo tu sitio rápido, seguro y actualizado, te hago los cambios que necesites y cada mes te digo cómo trabajó tu página.",
          features: [
            "Reporte mensual: clics a WhatsApp y a llamar, formularios recibidos y citas agendadas.",
            "Monitoreo de disponibilidad y velocidad, con aviso si el sitio se cae.",
            "Respaldo mensual del sitio: si algo falla, se restaura.",
            "Actualizaciones de seguridad y de plataforma.",
            "Hasta 3–4 cambios menores al mes: textos, fotos, precios, horarios, promociones.",
            "1 recomendación de mejora al mes, basada en tus números.",
            "Atención prioritaria cuando algo falla: respuesta en menos de 24 horas.",
          ],
          cta: "Activar mi soporte",
          waText:
            "Hola Cristian, Me interesa el plan de Soporte Web (desde $79 USD al mes). Quiero mantener mi sitio rápido y seguro y recibir el reporte mensual. ¿Cómo lo activo?",
          highlighted: false,
        },
        {
          badge: "Nuevo · Más recomendado",
          name: "Crecimiento+",
          pricePrefix: "",
          price: "",
          quoteLabel: "Cotización a medida",
          currency: "",
          currencyMonth: true,
          priceNote:
            "Mensual · se define tras la reunión inicial y el diagnóstico",
          forWho: "Para que te encuentren en Google en tu zona",
          href: "digitalMarketing",
          commitmentNote: "",
          tagline: "Que te encuentren, no solo que existas",
          description:
            "Tener página no sirve si nadie te encuentra. Este plan trabaja tu Perfil de Empresa en Google, tus reseñas y tu visibilidad en las búsquedas con IA, que es por donde ya llega una parte de tus clientes.",
          features: [
            "Todo lo del plan Soporte Web.",
            "Perfil de Empresa en Google: creación, gestión de la verificación (la aprueba Google) y optimización.",
            "Servicios, horarios, zonas y datos de tu ficha de Google siempre al día.",
            "Gestión de reseñas: sistema para pedirlas y respuesta a las reseñas, con la frecuencia que fije la propuesta.",
            "Contenido, estructura e información del negocio trabajados para mejorar tu visibilidad en buscadores y en respuestas con IA.",
            "SEO local y contenido para las búsquedas de tu ciudad, con la cantidad definida en la propuesta.",
            "Reporte mensual de tu Perfil de Empresa en Google, tu SEO y tu página web.",
          ],
          cta: "Solicitar reunión inicial",
          waText:
            "Hola Cristian, Me interesa el plan Crecimiento+ con Perfil de Empresa en Google, gestión de reseñas y SEO local. ¿Podemos agendar la reunión inicial para cotizarlo?",
          highlighted: true,
        },
        {
          badge: "Plan completo · Captación",
          name: "Marketing Digital",
          pricePrefix: "",
          price: "",
          quoteLabel: "Cotización a medida",
          currency: "",
          currencyMonth: true,
          priceNote:
            "Mensual · se define tras la reunión inicial y el diagnóstico",
          forWho: "Para captar de forma constante con SEO y anuncios",
          href: "digitalMarketing",
          commitmentNote:
            "Contrato mínimo de 3 meses. Los anuncios y el SEO necesitan ese tiempo para dar datos con los que decidir; antes de eso todavía estamos ajustando.",
          tagline: "Un sistema completo de captación",
          description:
            "Para el negocio que ya no quiere depender de las recomendaciones y los meses buenos. Página, anuncios, contenido y SEO trabajando juntos, con un reporte mensual que dice qué costó cada prospecto.",
          features: [
            "Todo lo del plan Crecimiento+.",
            "Gestión de campañas en Google Ads y Meta cuando tu negocio las necesita. Plataformas, campañas y landing pages se definen en la propuesta; la inversión publicitaria se paga aparte.",
            "SEO completo: reporte inicial de cómo está hoy tu SEO, qué se puede mejorar y el plan de trabajo mensual.",
            "SEO continuo: contenido, enlaces y páginas por servicio y por ciudad, con la cantidad mensual que fije la propuesta.",
            "Reporte mensual con las métricas completas de marketing, los costos y las recomendaciones del mes.",
            "Llamada estratégica mensual con Cristian Posada.",
          ],
          cta: "Solicitar reunión inicial",
          waText:
            "Hola Cristian, Me interesa el plan de Marketing Digital: campañas, SEO completo y reporte mensual. ¿Podemos agendar la reunión inicial para cotizarlo?",
          highlighted: false,
        },
      ],
      packages: [
        {
          name: "Landing Page",
          price: "349",
          currency: "USD",
          pricePrefix: "Desde",
          priceNote: "pago único",
          forWho: "Para lanzar un servicio, una promoción o una campaña",
          href: "landingPages",
          tagline: "Empieza a captar clientes ya",
          description:
            "Una sola página, enfocada 100% en convertir. Ideal para lanzar un servicio, una promoción o una campaña sin complicarte.",
          features: [
            "Página única de alta conversión",
            "Copy de ventas + llamada a la acción clara",
            "Botón directo a WhatsApp",
            "Diseño impecable en móvil",
            "Carga rápida y SEO base",
          ],
          cta: "Quiero mi landing",
          waText:
            "Hola Cristian, Me interesa la Landing Page (desde $349 USD). Quiero una página enfocada en captar clientes. ¿Me pueden dar más información?",
          highlighted: false,
        },
        {
          name: "Sitio Web 4–6 páginas",
          price: "899",
          currency: "USD",
          pricePrefix: "Desde",
          priceNote: "pago único",
          forWho: "Para un negocio establecido con varios servicios",
          href: "webDev",
          tagline: "El favorito de los negocios en crecimiento",
          description:
            "Tu negocio completo en línea: una página por servicio, estructura pensada para vender y confianza desde el primer clic.",
          features: [
            "4 a 6 páginas estratégicas (una por servicio)",
            "Estructura de ventas y confianza",
            "WhatsApp + formularios conectados",
            "Versión bilingüe disponible (el conteo de páginas se confirma en la propuesta)",
            "SEO base para que te encuentren en tu ciudad",
          ],
          cta: "Empezar mi sitio",
          waText:
            "Hola Cristian, Me interesa el Sitio Web de 4 a 6 páginas (desde $899 USD). Quiero llevar mi negocio completo a internet con una estructura que venda. ¿Cómo iniciamos?",
          highlighted: true,
        },
        {
          name: "Sitio Web 8–12 páginas",
          price: "1,499",
          currency: "USD",
          pricePrefix: "Desde",
          priceNote: "pago único",
          forWho: "Para varias líneas de servicio, ciudades o sucursales",
          href: "webDev",
          tagline: "Presencia y sistema digital completo",
          description:
            "Una web robusta para negocios con varias sucursales o líneas de servicio: más páginas, integraciones y una operación digital ordenada.",
          features: [
            "8 a 12 páginas completas",
            "Páginas por servicio y por ciudad",
            "Integraciones definidas en la propuesta",
            "Formularios de cotización y agenda de citas",
            "SEO técnico avanzado y acompañamiento en el lanzamiento",
          ],
          cta: "Cotizar mi web",
          waText:
            "Hola Cristian, Me interesa el Sitio Web de 8 a 12 páginas (desde $1,499 USD) con integraciones. Me gustaría cotizarlo. ¿Podemos platicar?",
          highlighted: false,
        },
      ],
      extras: [
        {
          name: "Rediseño web",
          price: "Desde $899",
          unit: "USD · pago único · según el tamaño actual",
          forWho: "Para un sitio que ya tienes y no está funcionando",
          href: "webDev",
          description:
            "Renueva imagen, estructura y conversión sobre tu sitio actual, sin empezar de cero.",
        },
        {
          name: "Optimización web",
          price: "Desde $349",
          unit: "USD · pago único",
          forWho: "Para mejorar velocidad y claridad sin rehacer el sitio",
          href: "",
          description:
            "Más velocidad, mejor experiencia en móvil y llamadas a la acción más claras para que escribirte sea fácil.",
        },
        {
          name: "Página adicional",
          price: "Desde $199",
          unit: "USD · pago único",
          forWho: "Para un sitio que ya hicimos juntos",
          href: "",
          description:
            "Suma una página extra a un sitio que ya hicimos juntos.",
        },
        {
          name: "Ajustes urgentes",
          price: "Desde $99",
          unit: "USD · pago único",
          forWho: "Para cambios puntuales fuera de alcance",
          href: "",
          description:
            "Cambios puntuales fuera de alcance, atendidos con prioridad. Te confirmo el tiempo de entrega antes de hacerlos.",
        },
      ],
    },
    integrations: {
      eyebrow: "// integraciones",
      title: "Conecto tus herramientas favoritas",
      subtitle:
        "WhatsApp, formularios, agenda de citas y medición, conectados al sitio desde el lanzamiento.",
      items: [
        { icon: "message-circle", name: "WhatsApp", description: "Contacto directo" },
        { icon: "file-text", name: "Formularios", description: "Solicitudes de cotización" },
        { icon: "calendar", name: "Calendario", description: "Agenda de citas" },
        { icon: "trending-up", name: "Analytics", description: "Medición de resultados" },
      ],
    },
    faq: {
      eyebrow: "// preguntas frecuentes",
      titleA: "Resuelvo tus",
      titleHighlight: "dudas principales",
      subtitle:
        "Lo que casi todos preguntan antes de empezar.",
      moreQuestion: "¿Tienes otra pregunta?",
      items: [
        {
          question: "¿Cuánto tiempo toma hacer una página web para un negocio?",
          answer:
            "Depende del alcance. Una landing page suele tomar de 1 a 2 semanas, un sitio de 4 a 6 páginas de 2 a 4 semanas y uno de 8 a 12 páginas con integraciones de 4 a 6 semanas, contados desde que tengo textos, fotos, accesos y aprobaciones. En la propuesta te entrego un cronograma con fechas y entregables claros. Si tienes una fecha que no se mueve —una apertura, una temporada alta, una campaña—, trabajamos hacia atrás desde ella.",
        },
        {
          question: "¿Cuánto cuesta una página web para un negocio?",
          answer:
            "Una landing page desde $349 USD, un sitio de 4 a 6 páginas desde $899 USD y uno de 8 a 12 páginas desde $1,499 USD, en pago único. Los precios publicados corresponden al alcance base de cada servicio. El total puede variar según páginas, idiomas, contenido, integraciones o complejidad. Confirmamos el alcance y la inversión antes de iniciar. No necesitas una llamada de ventas para conocerlos.",
        },
        {
          question:
            "¿Qué es la Auditoría Estratégica Integral y en qué se diferencia de un proyecto?",
          answer:
            "La Revisión Express es gratis y es la puerta de entrada: una videollamada de 20 minutos con lo que se ve desde fuera y 3 prioridades. La Auditoría Estratégica Integral es otra cosa: cinco días hábiles que empiezan por entender tu negocio y tu objetivo comercial, y de ahí revisan doce áreas con acceso a tus datos reales —rendimiento, arquitectura, conversión, SEO técnico, keyword research, contenido y canibalización, presencia local, competencia, Google y Meta Ads, captación y medición—. Cada hallazgo queda con su evidencia y clasificado por impacto, esfuerzo, urgencia y dependencia, y termina en una estrategia priorizada con roadmap de 30, 60 y 90 días. Un proyecto es la ejecución; la auditoría es el mapa. Se cotiza tras la reunión inicial. Si contratas desarrollo web, SEO o marketing, el diagnóstico que necesita ese servicio va dentro del proyecto y su alcance se define en la propuesta; no es automáticamente la auditoría completa de doce áreas.",
        },
        {
          question: "¿La auditoría se descuenta si después contrato un proyecto?",
          answer:
            "No, y es a propósito. Antes el diagnóstico se acreditaba entero al proyecto, lo que en la práctica lo convertía en un paso de venta: mi incentivo era encontrar razones para venderte algo. Cobrando la auditoría aparte puedo entregarte un informe que diga «tu sitio está bien, no lo toques» sin perder nada. El informe es tuyo en cualquier caso, y lo puedes ejecutar conmigo, con tu equipo o con otro proveedor.",
        },
        {
          question: "¿Qué diferencia hay entre Soporte Web y Crecimiento+?",
          answer:
            "Soporte Web (desde $79 USD/mes) mantiene tu página viva: seguridad, velocidad, respaldos, cambios menores y tu reporte mensual. Crecimiento+ incluye todo eso y además trabaja para que te encuentren: Perfil de Empresa en Google, gestión de reseñas, SEO local y contenido e información del negocio pensados para buscadores y respuestas con IA. Uno cuida lo que ya tienes; el otro trabaja para que más clientes te encuentren. Crecimiento+ no lleva precio de lista porque el trabajo cambia según en qué estado esté tu presencia digital: se cotiza tras la reunión inicial y la auditoría.",
        },
        {
          question: "¿Los planes mensuales tienen contrato de permanencia?",
          answer:
            "En ninguno hay contrato de 12 meses. Soporte Web y Crecimiento+ se cancelan de un mes a otro, sin penalización y sin tener que llamar a nadie: me escribes por WhatsApp y listo. El único con compromiso es Marketing Digital: pide un mínimo de 3 meses, porque los anuncios y el SEO no dan datos fiables en 30 días y no quiero cobrarte por un mes suelto que no te va a servir. Cumplido ese plazo, se cancela igual que los demás. Prefiero que te quedes porque funciona, no porque firmaste.",
        },
        {
          question: "¿Trabajas con negocios en Estados Unidos aunque no estés aquí?",
          answer:
            "Sí, y es la mayor parte de mi trabajo. Todo se hace en remoto y en español, por WhatsApp, en tu horario. La diferencia con una agencia grande es que hablas siempre con el dueño de esta, no con un ejecutivo de cuenta distinto cada mes.",
        },
        {
          question: "¿Se puede hacer una página web bilingüe en inglés y español?",
          answer:
            "Sí, y para un negocio hispano en EE. UU. suele ser lo correcto: tus clientes actuales te buscan en español y los nuevos, muchas veces, en inglés. Construyo las dos versiones con URLs separadas para que Google indexe ambas — este mismo sitio funciona así.",
        },
        {
          question: "¿El precio de la página web incluye dominio y hosting?",
          answer:
            "Incluye configurarlos, no pagarlos. Te oriento y configuro dominio, hosting y correo profesional, y quedan a tu nombre. Su costo lo pagas tú directo al proveedor —el dominio y el hosting suelen sumar entre $60 y $120 USD al año— y se renuevan cada año; el correo profesional puede tener su propia suscripción. Si ya cuentas con ellos, trabajo sobre tu infraestructura actual.",
        },
        {
          question: "¿Puedo editar mi página web yo mismo después?",
          answer:
            "Según tus necesidades. Construyo sitios estáticos de alto rendimiento o estructuras editables con panel de administración cuando necesitas actualizar contenido con frecuencia.",
        },
        {
          question: "¿Qué necesito tener listo para empezar mi página web?",
          answer:
            "Para empezar a hablar, nada: basta con la Revisión Express o un mensaje. Para construir el sitio necesito de tu parte el logotipo, fotos, los datos del negocio, la lista de servicios y los accesos al dominio o al hosting si ya los tienes. Los textos los trabajamos juntos; qué parte redacto yo y qué parte aportas tú queda por escrito en la propuesta.",
        },
        {
          question: "¿Qué cuenta como una página y qué como una sección?",
          answer:
            "Una página es una dirección propia del sitio: Inicio, cada servicio, Contacto. Una sección es un bloque dentro de una página: testimonios, preguntas frecuentes, un formulario. Los paquetes cuentan páginas, no secciones. Si el sitio es bilingüe, cómo se cuenta cada versión en el otro idioma y quién hace la traducción se confirma en la propuesta.",
        },
        {
          question: "¿Qué pasa después de la entrega?",
          answer:
            "Publicamos, revisamos juntos que formularios, WhatsApp y medición funcionen y te entrego los accesos. El proyecto incluye rondas de revisión sobre el alcance acordado y soporte inicial tras el lanzamiento, con la duración que fije la propuesta. Después puedes quedarte solo con el sitio —pagando únicamente dominio, hosting y las herramientas que uses— o contratar Soporte Web, desde $79 USD al mes, si prefieres que alguien lo mantenga.",
        },
      ],
    },
    testimonials: {
      eyebrow: "// testimonios",
      titleA: "Negocios que ya",
      titleHighlight: "ganan tiempo",
      titleB: "trabajando conmigo",
      subtitle:
        "Esto dicen quienes ya trabajan conmigo, con el dominio de su sitio para que lo compruebes.",
      items: [
        {
          quote:
            "Antes explicaba mi servicio una y otra vez por mensaje. Ahora mi página lo hace por mí: los pacientes llegan ya sabiendo cómo trabajo y agendan solos. Me devolvió muchísimo tiempo.",
          name: "Fernanda Silva",
          role: "Nutrióloga",
          initials: "FS",
          url: "https://fersilvanutricion.com/",
          urlLabel: "fersilvanutricion.com",
          service: "Sitio web + agenda de citas",
        },
        {
          quote:
            "La página se ve profesional y eso cambió cómo nos ven los clientes. Empezamos a recibir solicitudes de cotización sin tener que andar detrás de cada persona. Muy contentos con el resultado.",
          name: "Trejo Landscaping",
          role: "Servicios de jardinería y paisajismo",
          initials: "TL",
          url: "https://tj-landscaping.com/",
          urlLabel: "tj-landscaping.com",
          service: "Sitio web + captación de cotizaciones",
        },
        {
          quote:
            "Nos resolvieron el correo profesional, algunas automatizaciones y el soporte técnico. Todo funciona sin que tengamos que estar pendientes, y cuando surge algo nos responden rápido. Un peso menos encima.",
          name: "Constructora Izcalli",
          role: "Construcción y desarrollo",
          initials: "CI",
          url: "",
          urlLabel: "",
          service: "Hosting de correos, automatizaciones y soporte",
        },
      ],
    },
    calendly: {
      eyebrow: "// agenda en línea",
      titleA: "¿Prefieres platicarlo? Reserva tu",
      titleHighlight: "Revisión Express",
      subtitle:
        "Elige un horario disponible. Reviso tu presencia antes de la llamada y en 20 minutos te muestro 3 prioridades. Sin costo y sin llamada de ventas.",
      // Fachada del widget: en móvil el calendario solo se carga al tocar el
      // botón (el iframe de Calendly pesa más que el resto de la página).
      facadeTitle: "Elige el día y la hora que te acomoden.",
      facadeCta: "Ver horarios disponibles",
      facadeNote: "20 minutos, sin costo y sin llamada de ventas.",
    },
    // Formulario único de captación (septiembre de 2026): solo Nombre y
    // Email en todo el sitio. Lo renderiza LeadForm.astro en #contacto.
    contact: {
      // Texto del CTA secundario en todo el sitio. El principal sigue
      // siendo `common.ctaPrimary` (Agendar Revisión Express → #agendar).
      ctaInfo: "Solicitar más información",
      eyebrow: "// solicitar más información",
      titleA: "Déjame tu nombre y tu correo y te escribo",
      titleHighlight: "en menos de 24 horas",
      subtitle:
        "Solo dos datos. Te respondo por correo con la información que necesitas y el siguiente paso, sin tecnicismos.",
      perks: [
        "Respuesta en menos de 24 horas",
        "Te atiendo yo directo, sin intermediarios",
        "Sin costo ni compromiso",
      ],
      interestLabel: "Te interesa",
      altTitle: "¿Prefieres hablarlo?",
      altSchedule: "Agendar la Revisión Express",
      fieldName: "Nombre",
      fieldEmail: "Email",
      phName: "Ej: María González",
      phEmail: "maria@minegocio.com",
      submit: "Solicitar más información",
      sending: "Enviando…",
      success: "Listo. Te escribo por correo en menos de 24 horas.",
      error:
        "No se pudo enviar. Inténtalo de nuevo en un momento o escríbeme a info@procodedev.com.",
      privacy:
        "Uso tus datos para contestarte. No los vendo ni los comparto, y puedes pedir que los borre cuando quieras.",
      privacyLink: "Aviso de privacidad",
      consent: "Acepto que ProCode Dev me contacte por correo con la información que solicité.",
    },
    finalCta: {
      eyebrow: "// revisión express",
      title: "¿Listo para dejar de perder clientes entre mensaje y mensaje?",
      subtitle:
        "20 minutos por videollamada para revisar tu presencia digital y salir con 3 prioridades claras. Gratis.",
      ctaPrimary: "Agendar Revisión Express",
    },
    footer: {
      tagline:
        "ProCode Dev es una agencia de páginas web para negocios dirigida por Cristian Posada, desarrollador web en español. Páginas web para negocios y páginas web para pequeñas empresas en Estados Unidos y México, con captación, formularios y medición conectados.",
      navTitle: "Navegación",
      servicesTitle: "Servicios",
      contactTitle: "Contacto",
      hours: "Lunes a Domingo",
      location: "Atención remota en español en Texas, Florida, California y México",
      cta: "Agendar Revisión Express",
      rights: "Todos los derechos reservados.",
      privacy: "Aviso de privacidad",
      terms: "Términos y condiciones",
      // Las dos primeras entradas se renderizan como enlaces a las páginas
      // de servicio; el resto son las capacidades que viven dentro de ellas.
      servicesList: [
        "Páginas web a la medida y rediseño",
        "SEO local y Perfil de Empresa en Google",
        "Formularios de cotización y agenda de citas",
        "Google Ads, Facebook e Instagram",
        "Analítica y reportes de negocio",
      ],
      segmentsTitle: "Por giro",
      marketsOverview: "Estados Unidos",
    },
    // ── Franja de proyectos reales en el home (hallazgo #4) ──
    proof: {
      eyebrow: "// trabajo real",
      titleA: "Sistemas que ya están",
      titleHighlight: "trabajando",
      subtitle: "Sitios de clientes reales, en vivo ahora mismo. Busca el dominio y júzgalos tú.",
      cta: "Ver todo el portafolio",
    },
    // ── Anclaje de precio en el home (hallazgo #10) ──
    priceAnchor: {
      eyebrow: "// inversión",
      title: "Precios base publicados, sin cotización sorpresa",
      subtitle:
        "Cada paquete muestra su precio base y lo que incluye. Confirmamos el alcance y la inversión antes de iniciar.",
      fromLabel: "Desde",
      amount: "349",
      currency: "USD",
      amountNote: "landing page completa · pago único",
      cta: "Ver todos los precios",
    },
    // ── Quién está detrás (hallazgos #11 y #16) ──
    founder: {
      eyebrow: "// el fundador",
      name: "Cristian Posada",
      role: "Desarrollador web · Fundador de ProCode Dev",
      title: "Experiencia internacional al frente de cada proyecto",
      body:
        "Soy desarrollador web desde hace 5 años y he trabajado con empresas internacionales. Fundé ProCode Dev para llevar ese mismo estándar a negocios de servicios: dirijo cada proyecto de principio a fin —estrategia, diseño, desarrollo, SEO y campañas—, con un solo responsable desde la primera conversación hasta la entrega.",
      // Datos confirmados por Cristian (30 sep 2026) y por el propio sitio
      // (mercados atendidos e idiomas). No añadir cifras sin confirmar.
      highlights: [
        { value: "5 años", label: "en desarrollo web" },
        { value: "Internacional", label: "trabajo con empresas internacionales" },
        { value: "EE. UU. y México", label: "negocios que atiendo hoy" },
        { value: "ES / EN", label: "atención en español e inglés" },
      ],
      cta: "Agendar Revisión Express",
    },
    // ── FAQ de objeciones antes del CTA final del home (hallazgo #18) ──
    homeFaq: {
      eyebrow: "// antes de agendar",
      titleA: "Las dudas que casi",
      titleHighlight: "siempre me hacen",
      subtitle: "",
      items: [
        {
          question: "Necesito una página web para mi negocio. ¿Por dónde empiezo?",
          answer:
            "Por el servicio que más te deja, no por el sitio completo. Casi siempre arrancamos con una landing page, desde $349 USD, para ese servicio y, si trae clientes, crecemos a un sitio de 4 a 6 páginas. Así pruebas con poco riesgo y con el precio a la vista.",
        },
        {
          question: "¿Cuánto cuesta y por qué no lo veo hasta el final?",
          answer:
            "Sí lo ves: los precios base están publicados. Una landing page desde $349 USD, un sitio de 4 a 6 páginas desde $899 USD y uno de 8 a 12 páginas desde $1,499 USD. El total depende de páginas, idiomas, contenido e integraciones, y lo confirmamos antes de iniciar. No hay llamada de ventas para conocerlos ni contratos de 12 meses.",
        },
        {
          question: "¿La llamada de 20 minutos tiene costo o compromiso?",
          answer:
            "Ninguno de los dos. Son 20 minutos para entender tu negocio y decirte qué necesitas — aunque la respuesta sea que todavía no necesitas una página conmigo.",
        },
        {
          question: "Estoy en EE. UU. y tú no. ¿Cómo funciona eso?",
          answer:
            "En remoto, en español y por WhatsApp, en tu horario. Es como trabajas ya con la mayoría de tus proveedores. La diferencia frente a una agencia grande es que hablas con el dueño de la agencia, que además es quien hace el trabajo; y frente a Fiverr, que en el mes seis sigo contestando.",
        },
        {
          question: "No sé nada de tecnología. ¿Voy a poder?",
          answer:
            "Esa es justo la idea. Yo configuro dominio, hosting, correo y Perfil de Google, y quedan a tu nombre (el dominio y el hosting se pagan al proveedor). Tú me dices qué servicios das y a quién.",
        },
        {
          question: "¿Y si ya tengo página pero no me sirve?",
          answer:
            "Es el caso más común. En la llamada revisamos si conviene rescatarla o rehacerla, y te digo cuál sale más barato para ti — no cuál me conviene a mí.",
        },
      ],
    },
    pageMeta: {
      home: {
        title:
          "Agencia de Diseño Web y Marketing Digital | ProCode",
        description:
          "Diseño web y marketing digital para negocios en Estados Unidos y México. Webs a medida desde $349 USD, con formularios, WhatsApp y medición.",
        keywords:
          "agencia de diseño web, agencia de desarrollo web, agencia de diseño web y marketing digital, agencia de páginas web para negocios, empresa de diseño web, agencia de marketing digital, páginas web para pequeñas empresas, sitios web para captar clientes, desarrollador web en español, ProCode Dev",
        heroKicker: "Inicio",
      },
      sectors: {
        title:
          "Diseño Web por Giro de Negocio | ProCode Dev",
        description:
          "Diseño web para contratistas, consultorios, abogados, inmobiliarias y contadores. Elige tu giro y ve qué cambia en tu caso, con precios base en USD.",
        keywords:
          "diseño web por sector, páginas web para negocios por industria, diseño web para contratistas, diseño web para consultorios, diseño web para inmobiliarias, diseño web para contadores, diseño web para abogados, diseño web para negocios locales, marketing digital para pymes, páginas web para pymes",
        heroTitleA: "Diseño web para negocios",
        heroHighlight: "por sector",
        heroSubtitle: "Hecho para tu giro.",
      },
      // El hub /servicios/ persigue la intención "servicios de desarrollo web
      // y marketing digital"; las dos hijas pelean cada una su frase propia
      // (ver los `meta` de src/i18n/services.ts). Así no se canibalizan ni
      // compiten con el home, que se queda con "diseño de páginas web".
      services: {
        title: "Servicios de Desarrollo Web y Marketing | ProCode",
        description:
          "Servicios de desarrollo web y marketing digital para negocios: páginas web a la medida desde $349 USD y planes de captación cotizados a tu negocio.",
        keywords:
          "servicios de desarrollo web y marketing digital, servicios de desarrollo web, servicios de diseño web, diseño web y marketing digital, empresa de diseño de páginas web, servicio de creación de páginas web, desarrollo web para negocios, marketing digital para negocios, diseño web y posicionamiento",
        heroTitleA: "Servicios de desarrollo web y",
        heroHighlight: "marketing digital para negocios",
        heroSubtitle: "Dos servicios, un solo responsable.",
      },
      portfolio: {
        title:
          "Portafolio: Páginas Web Profesionales | ProCode Dev",
        description:
          "Páginas web profesionales para negocios de contabilidad, salud, construcción y servicios. Sitios en vivo: ábrelos y juzga el trabajo antes de escribirme.",
        keywords:
          "páginas web profesionales para negocios, portafolio de páginas web, ejemplos de sitios web para negocios, casos de sitios web pymes, caso de éxito de diseño web, diseño web para contadores, diseño web para negocios locales",
        heroTitleA: "Portafolio de páginas web",
        heroHighlight: "profesionales para negocios",
        heroSubtitle: "Sitios reales, en vivo.",
      },
      pricing: {
        title:
          "Precios de Páginas Web para Negocios | ProCode Dev",
        description:
          "Cuánto cuesta una página web: landing desde $349, sitio de 4 a 6 páginas desde $899 y de 8 a 12 desde $1,499 USD. Soporte web desde $79 USD al mes.",
        keywords:
          "precio de página web, cuánto cuesta una página web, costo de página web, precios de diseño de páginas web, paquetes de diseño de páginas web, presupuesto para una página web, cotización de diseño web, cuánto cuesta una página web para un negocio, mantenimiento web mensual",
        heroTitleA: "Precios de páginas web",
        heroHighlight: "y marketing digital para negocios",
        heroSubtitle: "Precios base, sin llamada.",
        heroLead:
          "Pago único para construir tu sitio, planes mensuales para mantenerlo y hacerlo crecer, servicios adicionales y la Auditoría Estratégica. Lo que tiene precio base está publicado; lo que depende de tu negocio se cotiza tras la reunión inicial.",
      },
      contact: {
        title:
          "Contacto y Revisión Express gratis | ProCode Dev",
        description:
          "Agenda tu Revisión Express gratis de 20 minutos o déjame tu nombre y tu correo. Respondo en menos de 24 horas.",
        keywords:
          "agendar Revisión Express, solicitar una propuesta web, hablar con ProCode Dev, desarrollador web en español",
        heroTitleA: "Escríbeme o agenda tu",
        heroHighlight: "Revisión Express",
        heroSubtitle: "Respondo en menos de 24 horas.",
      },
    },
    // ── Bloques de contexto al pie (el texto largo que salió del hero) ──
    // Regla: el hero lleva de 3 a 6 palabras y todo el detalle vive aquí,
    // después del CTA final. Es donde tienen que aparecer las frases clave
    // declaradas en `pageMeta.<page>.keywords`.
    // ── Hub de giros: /negocios ─────────────────────────────────
    sectors: {
      promiseEyebrow: "// la promesa",
      promiseTitle:
        "Tu negocio deja de depender solo de las recomendaciones.",
      promiseBody:
        "Construyo la presencia digital para que el cliente que te busca te encuentre, te entienda y te contacte.",
      rtbTitle: "Por qué puedes creerme",
      rtb: [
        {
          icon: "briefcase",
          title: "Casos en el mismo giro",
          description:
            "No aprendo tu negocio contigo. Ya construí para negocios de servicios como el tuyo, y puedes abrir los sitios y juzgarlos tú.",
        },
        {
          icon: "receipt",
          title: "Precios base publicados",
          description:
            "Están en la página, en dólares. Sin llamada de ventas para conocerlos y sin contratos de 12 meses.",
        },
        {
          icon: "message-circle",
          title: "Todo en español, por WhatsApp",
          description:
            "Una sola persona responsable, en tu idioma y en tu horario. No un ticket ni un ejecutivo de cuenta distinto cada mes.",
        },
        {
          icon: "trending-up",
          title: "Reporte de oportunidades medibles",
          description:
            "En los planes mensuales te reporto clics a WhatsApp y a llamar, formularios recibidos y citas agendadas. No cuántas visitas: cuántas oportunidades de contacto.",
        },
      ],
      vsTitle: "Frente a lo que ya consideraste",
      vsSubtitle:
        "Lo que cambia frente a las cuatro opciones de siempre.",
      vs: [
        {
          name: "Wix o Squarespace",
          them: "Barato, pero lo armas tú y lo mantienes tú.",
          us: "No tienes que hacerlo tú, ni mantenerlo. Cuando tu semana está llena eso vale más que la diferencia de precio.",
        },
        {
          name: "Fiverr",
          them: "Entregan y desaparecen. En el mes seis nadie contesta.",
          us: "Una persona con nombre que sigue respondiendo el mes seis, y el año siguiente.",
        },
        {
          name: "Hibu y similares",
          them: "Contrato de 12 meses, precio que no ves hasta la llamada.",
          us: "Sin contratos de 12 meses y con los precios base publicados en este mismo sitio.",
        },
        {
          name: "Agencia grande",
          them: "Buen trabajo, pero con honorarios mensuales fuera del presupuesto de muchos negocios de servicios.",
          us: "Precios pensados para negocios de servicios, con el mismo enfoque en captar clientes reales.",
        },
      ],
      forTitle: "Diseño web para negocios locales y marketing digital para pymes",
      forItems: [
        "Diseño web para contratistas, constructoras y oficios de casa",
        "Diseño web para consultorios, clínicas y profesionales de la salud",
        "Diseño web para abogados, aseguradoras y consultores",
        "Diseño web para inmobiliarias y asesores inmobiliarios",
        "Diseño web para contadores y despachos de impuestos",
        "Negocios de servicios que venden por recomendación",
      ],
      crossTitle: "¿Tu negocio no es de este giro?",
      crossSubtitle:
        "El sistema es el mismo; cambian los ejemplos.",
      segmentsTitle: "Páginas web por giro",
      segmentsSubtitle:
        "Páginas web para pymes, giro por giro: contratistas, consultorios, inmobiliarias, despachos contables y servicios profesionales. Cinco páginas con lo que cambia en cada caso.",
      segmentsCta: "Ver la página",
      seasonTitle: "Tu calendario manda, y lo sé",
      seasonBody:
        "Si empezamos con tiempo, llegas a tu mes fuerte con el sistema completo. Si ya estás saturado, priorizamos lo lanzable en dos semanas.",
      ctaTitle: "20 minutos, en español, sin compromiso",
      ctaBody:
        "Te digo qué está frenando a tu negocio hoy.",
    },
  },

  en: {
    langName: "EN",
    otherLangName: "ES",
    nav: {
      home: "Home",
      services: "Services",
      servicesOverview: "See both services",
      servicesMenuNote: "Two services, not a list of twenty.",
      markets: "Where I work",
      marketsOverview: "See how remote works",
      marketsMenuNote: "Working remotely with businesses in Mexico and the U.S.",
      sectors: "Industries",
      sectorsOverview: "See all industries",
      sectorsMenuNote: "One page per industry, with what each business needs.",
      portfolio: "Portfolio",
      pricing: "Pricing",
      blog: "Blog",
      contact: "Contact",
      cta: "Express Review",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode",
    },
    common: {
      ctaPrimary: "Book my Express Review",
      free: "Free · 20-min video call · 3 clear priorities",
      viewServices: "See services",
      guarantee: "I answer every message in under 24 hours.",
      // Scarcity is calendar-free now: it's my capacity, not tax season.
      // If you change the number here, change it in the ES too.
      deadline: "I take on 4 projects a month so each one gets real attention.",
    },
    brand: {
      line: "Digital Growth Systems for Small Businesses",
      lineEs: "Digital Growth Systems for Small Businesses",
      stack:
        "Website · Acquisition · Intake · Booking · Analytics",
      audience:
        "Contractors · Clinics & Practices · Professional Services · Real Estate · Accounting & Tax",
    },
    hero: {
      eyebrow: "// digital growth systems",
      titleA: "Web design and digital marketing agency",
      titleHighlight: "for U.S. small businesses",
      titleB: "",
      subtitle: "Found. Understood. Contacted.",
      badges: [
        "Published base pricing",
        "No 12-month contracts",
        "Bilingual English/Spanish",
      ],
    },
    values: {
      eyebrow: "// the system, piece by piece",
      items: [
        {
          icon: "layout",
          title: "Website",
          description: "One page per service.",
        },
        {
          icon: "target",
          title: "Acquisition",
          description: "Get found on Google.",
        },
        {
          icon: "clipboard-check",
          title: "Intake",
          description: "Forms that qualify the lead.",
        },
        {
          icon: "workflow",
          title: "Booking",
          description: "An automatic online booking system.",
        },
        {
          icon: "repeat",
          title: "Bilingual",
          description: "English and Spanish, on separate URLs.",
        },
        {
          icon: "trending-up",
          title: "Analytics",
          description: "Forms, clicks and bookings, not visits.",
        },
      ],
    },
    system: {
      eyebrow: "// how we think about it",
      titleA: "We don't design pages. We design your",
      titleHighlight: "client's journey",
      subtitle:
        "Five stages, five pieces. Each one fixes a point where you lose clients today.",
      stages: [
        {
          icon: "search",
          step: "01",
          name: "They find you",
          summary: "You show up where they search.",
        },
        {
          icon: "shield",
          step: "02",
          name: "They trust you",
          summary: "Work, reviews and credentials visible.",
        },
        {
          icon: "clipboard-check",
          step: "03",
          name: "They contact you",
          summary: "Forms that ask the questions.",
        },
        {
          icon: "calendar",
          step: "04",
          name: "They book you",
          summary: "An automatic appointment booking system.",
        },
        {
          icon: "repeat",
          step: "05",
          name: "They stay",
          summary: "Repeat work, reviews and referrals.",
        },
      ],
    },
    services: {
      eyebrow: "// what I do",
      titleA: "Web development and digital marketing",
      titleHighlight: "for businesses that want to grow",
      titleB: "",
      subtitle:
        "Web development and digital marketing for small businesses. Start with the one you need today; the other is here when the time comes.",
      detailTitle:
        "Web development and digital marketing services for small businesses",
      homeCta: "See both services in detail",
    },
    process: {
      eyebrow: "// how I work",
      titleA: "A clear process, focused on",
      titleHighlight: "results",
      subtitle: "Five steps, no detours, with clear dates.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description: "I learn your business and goals.",
        },
        {
          number: "02",
          title: "Strategy",
          description: "We define structure, message and flow.",
        },
        {
          number: "03",
          title: "Design & build",
          description: "I build the site and system.",
        },
        {
          number: "04",
          title: "Integration & launch",
          description: "I connect forms and booking, test and publish.",
        },
        {
          number: "05",
          title: "Initial support",
          description: "Fixes after launch. Monthly improvement is a separate plan.",
        },
      ],
    },
    why: {
      eyebrow: "// why ProCode Dev",
      titleA: "Technology + Growth + Operations",
      titleHighlight: "for business owners",
      titleB: "",
      subtitle:
        "Anyone can build you a page. Lead generation websites for small businesses are built differently, and this is what changes when the person building yours understands how a business actually bills.",
      items: [
        {
          icon: "search",
          title: "Designed around how your client buys",
          description: "Every section answers a doubt that costs you jobs.",
        },
        {
          icon: "workflow",
          title: "Marketing connected to your operation",
          description: "Forms that ask the right questions before the first conversation.",
        },
        {
          icon: "repeat",
          title: "From one-off job to recurring client",
          description: "Maintenance, second phases and referrals, offered on time.",
        },
        {
          icon: "bar-chart",
          title: "We measure business, not visits",
          description: "WhatsApp and call taps, forms and bookings, and where each one came from.",
        },
        {
          icon: "globe",
          title: "Truly bilingual",
          description: "Bilingual website design services: full acquisition and experience in English and Spanish.",
        },
      ],
    },
    caseStudy: {
      projectId: "miconta",
      segmentPage: "accounting",
      eyebrow: "// website design case study · accounting",
      titleA: "Case study: a website for a",
      titleHighlight: "bilingual accounting firm",
      homeEyebrow: "// featured project",
      homeTitleA: "A website for",
      homeHighlight: "an accounting firm in Ohio",
      homeSummary:
        "A bilingual website for a bookkeeping and accounting firm in Cincinnati, Ohio. Open it and judge for yourself: this is what an accountant website looks like when it works for the firm.",
      name: "Mi Conta Universal",
      badge: "Accounting & tax · Cincinnati, Ohio",
      url: "https://micontau.com/",
      urlLabel: "micontau.com",
      image: "/images/proyecto-miconta.jpg",
      imageAlt: "Home page of the Mi Conta Universal website, an accounting firm in Cincinnati, Ohio",
      summary:
        "A bookkeeping, payroll and accounting firm for small businesses in Cincinnati and across Ohio, in English and Spanish. Today its site explains every service, answers the industry's real questions and moves visitors to WhatsApp or a consultation.",
      challengeTitle: "The challenge",
      challengeBody:
        "A small business owner doesn't search for «accounting»: they look for someone to run payroll, register their LLC or get a license — and explain it in their language. The site had to answer that before the first call.",
      solutionTitle: "What I built",
      solution: [
        "Eight services, each with its own card — bookkeeping, payroll, financial reports, tax organization, audit support, business registration, licenses and permits, advisory — so every client finds their task in seconds.",
        "A bilingual English / Spanish site with a language switcher, built for Hispanic business owners in the U.S. who want their numbers explained without jargon.",
        "Three friction-free ways to reach out: direct WhatsApp, a phone call and a form that asks which service the client needs before the first conversation.",
        "A free small business guide as a lead magnet: name and email in exchange for something useful, so the conversation continues by email.",
        "An «Ask Micont@U» FAQ with the questions this industry really gets — Ohio LLCs, an EIN without a Social Security number, vendor's licenses, 1099s — plus FAQPage markup for Google.",
        "Local SEO for Cincinnati and all of Ohio: metadata, Open Graph and professional-service JSON-LD with address, hours and phone.",
      ],
      stackTitle: "Built with",
      stack: ["Astro", "Bilingual EN/ES design", "Local SEO", "Structured data", "WhatsApp lead capture"],
      segmentLinkLabel: "See how I approach accounting firm website design",
      factsTitle: "By the numbers",
      facts: [
        { value: "8", label: "services, each with its own card" },
        { value: "2", label: "languages: English and Spanish" },
        { value: "9", label: "FAQs with markup for Google" },
      ],
      visit: "Visit the site",
      cta: "I want a site like this for my business",
    },
    portfolio: {
      eyebrow: "// portfolio",
      titleA: "Real projects,",
      titleHighlight: "live and verifiable",
      subtitle:
        "A selection of professional websites for small businesses that wanted to look sharper and capture better. Click to see them live.",
      viewProject: "View project",
      resultLabel: "Result",
      challengeLabel: "The need",
      workLabel: "ProCode's work",
      imageAltPrefix: "Screenshot of the website of",
      clientsTitle: "Real clients",
      clientsNote: "Small business website examples that are live today: local business web design case studies with real clients behind them.",
      demosTitle: "Demos & concepts",
      demosNote:
        "Projects I built on my own to show what's possible in each sector. They're not clients: I label them as demos so there's no confusion.",
      cta: "I want a website like this for my business",
      projects: [
        {
          id: "miconta",
          name: "Mi Conta Universal — Accounting & bookkeeping",
          kind: "client",
          result: "",
          url: "https://micontau.com/",
          image: "/images/proyecto-miconta.jpg",
          badge: "Accounting & tax",
          description:
            "A bilingual site for a bookkeeping and accounting firm in Cincinnati, Ohio: eight services, a free guide, direct WhatsApp and local SEO for small businesses.",
          challenge: "Explaining every task to Hispanic business owners, in their language, before the first call.",
          work: "Built the bilingual site: eight services with their own cards, a free guide, WhatsApp, FAQs and local SEO.",
          tags: ["Website", "Accounting", "Bilingual"],
        },
        {
          id: "izcalli",
          name: "Constructora Izcalli",
          kind: "client",
          result: "",
          url: "https://constructoraizcalli.com/",
          image: "/images/proyecto-izcalli.jpg",
          badge: "Contractors & construction",
          description:
            "An institutional site for a construction firm in Durango, Mexico: nine built projects each with its own entry, engineering and execution capabilities, and formal details in plain sight.",
          challenge: "Showing years of delivered work that only existed as loose photos.",
          work: "First, professional email, automations and technical support. Later, the institutional site with nine projects, each with its own entry.",
          tags: ["Website", "Construction", "Project portfolio"],
        },
        {
          id: "fersilva",
          name: "Fernanda Silva — Nutritionist",
          kind: "client",
          result: "",
          url: "https://fersilvanutricion.com/",
          image: "/images/proyecto-fersilva.jpg",
          badge: "Health & wellness",
          description:
            "A professional site that communicates her services, builds trust and makes it easy for new patients to book a consultation.",
          challenge: "Stop explaining her service over chat again and again.",
          work: "A website with her services explained and online appointment booking.",
          tags: ["Website", "Health", "Lead capture"],
        },
        {
          id: "cristian-posada",
          name: "Cristian Posada — Personal brand",
          kind: "own",
          result: "",
          url: "https://cristianposada.com/",
          image: "/images/proyecto-cristian-posada.jpg",
          badge: "Personal brand",
          description:
            "A personal brand site focused on positioning authority, showcasing projects and turning visitors into real contacts.",
          challenge: "Bringing background and projects together in one place.",
          work: "The founder's own site: not a client project.",
          tags: ["Personal brand", "Branding", "Conversion"],
        },
        {
          id: "trejo",
          name: "Trejo Landscaping",
          kind: "client",
          result: "",
          url: "https://tj-landscaping.com/",
          image: "/images/proyecto-trejo-landscaping.jpg",
          badge: "Local services",
          description:
            "A services site that highlights their work, conveys professionalism and captures quote requests.",
          challenge: "Getting quote requests without chasing every client.",
          work: "A services site that captures quote requests.",
          tags: ["Website", "Services", "Local business"],
        },
        {
          id: "demo-inmobiliaria",
          name: "Mariana Cervantes — Real Estate Advisor",
          kind: "demo",
          result: "",
          url: "https://demoinmobiliaria.procodedev.com/",
          image: "/images/demo-inmobiliaria.jpg",
          badge: "Real estate · Demo",
          description:
            "A real estate site with a property catalog, detailed listings, call booking and direct WhatsApp capture.",
          challenge: "A concept showing what a real estate agent needs. Not a client.",
          work: "A demo with a property catalog, listing pages, call booking and WhatsApp.",
          tags: ["Website", "Real estate", "Listings"],
        },
        {
          id: "demo-taxpro",
          name: "Herrera Tax & Advisory — TaxPro",
          kind: "demo",
          result: "",
          url: "https://demo-taxpro.procodedev.com/",
          image: "/images/demo-taxpro.jpg",
          badge: "Accounting & tax · Demo",
          description:
            "A bilingual site for a U.S. accounting and tax practice: services, free-consult booking and trust-focused lead capture.",
          challenge: "A concept showing what an accounting and tax practice needs. Not a client.",
          work: "A bilingual demo with services, consultation booking and lead capture.",
          tags: ["Website", "Bilingual", "Professional services"],
        },
      ],
    },
    pricing: {
      eyebrow: "// pricing",
      titleA: "Pick your starting point and let your website",
      titleHighlight: "sell for you.",
      titleB: "",
      subtitle:
        "Published base prices in US dollars, no sales call to see them and no 12-month contracts. Choose where to start; we confirm scope and investment before starting.",
      popular: "Most chosen",
      finePrintTitle: "Fine print",
      currencyNoteUsd: "All amounts are in US dollars (USD). Website projects are one-time payments; Web Support is billed monthly. Domain, hosting, email and subscription tools are paid separately, directly to each provider and in your name.",
      // ── Strategic Business Audit · the paid entry point ──
      // See the Spanish block above and src/i18n/audit.ts for the why.
      advisory: {
        badge: "Paid entry point · charged separately",
        name: "Strategic Business Audit",
        priceQuote: "Quoted",
        priceNote: "based on the scope of your business",
        hook: "For when you know something is off but not which of the pieces it is.",
        forWho: "For when something is off and you don't know which piece",
        billing: "one-time",
        description:
          "It starts with your business and reviews twelve areas against your real data, from the website and SEO to ads and measurement. You get findings with evidence, a prioritized strategy with a 30/60/90 roadmap, a video and a call. If you hire web development, SEO or marketing, the diagnosis that service needs is part of the project and its scope is set in the proposal.",
        homeEyebrow: "// the next step",
        homeTitle: "Want the full plan in writing?",
        prereq:
          "If we have never spoken, start with the Express Review: it is free and for many people it is enough.",
        viewPricing: "See all pricing",
        waText:
          "Hi Cristian, I'm interested in the Strategic Business Audit. I want to know what is holding my business back and in what order to fix it.",
        stepsTitle: "How it works (3 phases)",
        steps: [
          {
            name: "Phase 1 · Business and access",
            description:
              "What you sell, to whom, in which area and what result you want. Plus read-only access: Analytics, Search Console, your Business Profile and your ad accounts if you have them.",
          },
          {
            name: "Phase 2 · Auditing the whole system",
            description:
              "The twelve areas, one at a time, with your data in front of me, the keyword research done and measured against whoever ranks above you in your city. Every finding with its evidence.",
          },
          {
            name: "Phase 3 · Strategy and roadmap",
            description:
              "Findings classified by impact, effort, urgency and dependency, a prioritized strategy and a 30/60/90 roadmap. Plus the video and the 30-45 minute call.",
          },
        ],
        cta: "See the Strategic Audit",
      },
      extrasTitle: "Add-on services",
      extrasSubtitle: "Extras to keep your site growing and up to date.",
      note: "Published prices cover each service's base scope. The total can vary with pages, languages, content, integrations or complexity. We confirm scope and investment before starting. Growth+, Digital Marketing and the Strategic Audit are quoted after the first meeting, because they depend on where your business stands.",
      baseNote: "Published prices cover each service's base scope. The total can vary with pages, languages, content, integrations or complexity. We confirm scope and investment before starting.",
      quotedScopeNote:
        "For quoted plans, the quantity, frequency, platforms and deliverables are set in the approved proposal. Management fees do not include ad spend, which you pay directly to Google or Meta, or external subscription tools.",
      summaryTitle: "Web development",
      summarySubtitle:
        "A one-time payment to build your site. Base price, who it is for and what it includes; the full detail lives on each service page.",
      monthlySummaryTitle: "Monthly services",
      forWhoLabel: "Who it is for",
      detailsLabel: "See what is included",
      auditTitle: "Strategic Audit",
      auditSubtitle:
        "Not a website package: an independent diagnosis to decide what to do first.",
      termsTitle: "General terms",
      terms: [
        "Published prices cover each service's base scope. The total can vary with pages, languages, content, integrations or complexity. We confirm scope and investment before starting.",
        "Timelines start once I have copy, photos, access and approvals: a landing page takes 1 to 2 weeks, a 4-6 page site 2 to 4 weeks and an 8-12 page site 4 to 6 weeks.",
        "Every project includes review rounds on the agreed scope and initial support after launch. Anything that adds pages or new features is quoted before it is done.",
        "Domain, hosting, email and subscription tools are paid separately, directly to the provider, and renew on each provider's terms.",
        "Web Support and Growth+ have no lock-in. Digital Marketing asks for a 3-month minimum.",
      ],
      // ── Monthly ladder: support → growth → all-in ──
      // Replaces the single maintenance block. The market analysis called for a
      // ceiling to expand into: a $79 client can move to $349 and then $1,100
      // without ever changing vendors.
      monthlyTitle: "Monthly plans: website maintenance and local SEO",
      monthlySubtitle:
        "Monthly website maintenance has published pricing. Growth+ and Digital Marketing are quoted to your business: a first meeting to understand it, a diagnosis, and the scope and the number come out of that.",
      monthlyNote:
        "Lock-in: none on Web Support or Growth+ — move up, down or cancel from one month to the next. Digital Marketing asks for a 3-month minimum and, once that's met, cancels the same way.",
      monthly: [
        {
          badge: "Base · Continuity",
          name: "Web Support",
          pricePrefix: "From",
          price: "79",
          quoteLabel: "",
          currency: "USD / mo",
          currencyMonth: true,
          priceNote: "monthly · depending on the size of your site",
          forWho: "For a live site you'd rather not maintain yourself",
          href: "maintenance",
          commitmentNote: "",
          tagline: "Your site always up to date",
          description:
            "You don't pay \"in case something breaks\". I keep your site fast, secure and updated, make the changes you need, and every month I tell you how your page performed.",
          features: [
            "Monthly report: WhatsApp and call taps, forms received and bookings.",
            "Uptime and speed monitoring, with an alert if the site goes down.",
            "Monthly site backup: if something fails, it's restored.",
            "Security and platform updates.",
            "Up to 3–4 minor changes a month: text, photos, prices, hours, promotions.",
            "1 improvement recommendation per month, based on your numbers.",
            "Priority attention when something breaks: a reply within 24 hours.",
          ],
          cta: "Activate my support",
          waText:
            "Hi Cristian, I'm interested in the Web Support plan (from $79 USD/mo). I want to keep my site fast and secure and get the monthly report. How do I activate it?",
          highlighted: false,
        },
        {
          badge: "New · Most recommended",
          name: "Growth+",
          pricePrefix: "",
          price: "",
          quoteLabel: "Custom quote",
          currency: "",
          currencyMonth: true,
          priceNote:
            "Monthly · set after the first meeting and the diagnosis",
          forWho: "For getting found on Google in your area",
          href: "digitalMarketing",
          commitmentNote: "",
          tagline: "Get found, not just exist",
          description:
            "Having a website doesn't help if nobody finds you. This plan works your Google Business Profile, your reviews and your visibility in AI search, which is already where part of your clients come from.",
          features: [
            "Everything in the Web Support plan.",
            "Google Business Profile: setup, handling the verification process (Google approves it) and optimization.",
            "Services, hours, service areas and profile details kept current.",
            "Review management: a system to request them and replies to reviews, at the frequency set in the proposal.",
            "Content, structure and business information worked on to improve your visibility in search and AI answers.",
            "Local SEO and content for searches in your city, in the amount set in the proposal.",
            "Monthly report on your Google Business Profile, your SEO and your website.",
          ],
          cta: "Request a first meeting",
          waText:
            "Hi Cristian, I'm interested in the Growth+ plan with Google Business Profile, review management and local SEO. Can we book the first meeting to quote it?",
          highlighted: true,
        },
        {
          badge: "Full plan · Acquisition",
          name: "Digital Marketing",
          pricePrefix: "",
          price: "",
          quoteLabel: "Custom quote",
          currency: "",
          currencyMonth: true,
          priceNote:
            "Monthly · set after the first meeting and the diagnosis",
          forWho: "For steady lead flow from SEO and ads",
          href: "digitalMarketing",
          commitmentNote:
            "3-month minimum. Ads and SEO need that long to produce data worth deciding on; before that we're still tuning.",
          tagline: "A complete client-acquisition system",
          description:
            "For the business that no longer wants to depend on referrals and good months. Website, ads, content and SEO working together, with a monthly report that says what each lead cost.",
          features: [
            "Everything in the Growth+ plan.",
            "Google Ads and Meta campaign management when your business needs it. Platforms, campaigns and landing pages are set in the proposal; ad spend is paid separately.",
            "Full SEO: an initial report on where your SEO stands, what can be improved and the monthly plan of work.",
            "Ongoing SEO: content, links and pages per service and per city, in the monthly amount set in the proposal.",
            "Monthly report with the full marketing metrics, the costs and the recommendations for the month.",
            "Monthly strategy call with Cristian Posada.",
          ],
          cta: "Request a first meeting",
          waText:
            "Hi Cristian, I'm interested in the Digital Marketing plan: campaigns, full SEO and the monthly report. Can we book the first meeting to quote it?",
          highlighted: false,
        },
      ],
      packages: [
        {
          name: "Landing Page",
          price: "349",
          currency: "USD",
          pricePrefix: "From",
          priceNote: "one-time",
          forWho: "To launch a service, a promotion or a campaign",
          href: "landingPages",
          tagline: "Start capturing clients now",
          description:
            "A single page, 100% focused on converting. Ideal to launch a service, a promotion or a campaign without complications.",
          features: [
            "Single high-conversion page",
            "Sales copy + clear call to action",
            "Direct WhatsApp button",
            "Flawless mobile design",
            "Fast loading and base SEO",
          ],
          cta: "I want my landing",
          waText:
            "Hi Cristian, I'm interested in the Landing Page (from $349 USD). I want a page focused on capturing clients. Can you tell me more?",
          highlighted: false,
        },
        {
          name: "Website 4–6 pages",
          price: "899",
          currency: "USD",
          pricePrefix: "From",
          priceNote: "one-time",
          forWho: "For an established business with several services",
          href: "webDev",
          tagline: "The favorite of growing businesses",
          description:
            "Your whole business online: a page per service, a structure built to sell and trust from the first click.",
          features: [
            "4 to 6 strategic pages (one per service)",
            "Sales and trust structure",
            "WhatsApp + connected forms",
            "Bilingual version available (page count confirmed in the proposal)",
            "Base SEO so you get found in your city",
          ],
          cta: "Start my site",
          waText:
            "Hi Cristian, I'm interested in the 4–6 page Website (from $899 USD). I want to take my whole business online with a structure that sells. How do we start?",
          highlighted: true,
        },
        {
          name: "Website 8–12 pages",
          price: "1,499",
          currency: "USD",
          pricePrefix: "From",
          priceNote: "one-time",
          forWho: "For several service lines, cities or locations",
          href: "webDev",
          tagline: "Full presence and digital system",
          description:
            "A robust site for businesses with several locations or service lines: more pages, integrations and a clean digital operation.",
          features: [
            "8 to 12 complete pages",
            "Pages per service and per city",
            "Integrations defined in the proposal",
            "Quote forms and appointment booking",
            "Advanced technical SEO and launch support",
          ],
          cta: "Quote my site",
          waText:
            "Hi Cristian, I'm interested in the 8–12 page Website (from $1,499 USD) with integrations. I'd like a quote. Can we talk?",
          highlighted: false,
        },
      ],
      extras: [
        {
          name: "Website redesign",
          price: "From $899",
          unit: "USD · one-time · depends on current size",
          forWho: "For a site you already have that isn't working",
          href: "webDev",
          description:
            "Renew image, structure and conversion on your current site without starting from scratch.",
        },
        {
          name: "Website optimization",
          price: "From $349",
          unit: "USD · one-time",
          forWho: "To improve speed and clarity without a rebuild",
          href: "",
          description:
            "More speed, a better mobile experience and clearer calls to action so contacting you is easy.",
        },
        {
          name: "Extra page",
          price: "From $199",
          unit: "USD · one-time",
          forWho: "For a site we already built together",
          href: "",
          description: "Add an extra page to a site you already have with me.",
        },
        {
          name: "Urgent tweaks",
          price: "From $99",
          unit: "USD · one-time",
          forWho: "For one-off changes outside the scope",
          href: "",
          description:
            "One-off out-of-scope changes, handled with priority. I confirm the turnaround before doing them.",
        },
      ],
    },
    integrations: {
      eyebrow: "// integrations",
      title: "I connect your favorite tools",
      subtitle:
        "WhatsApp, forms, appointment booking and tracking, connected to the site from launch.",
      items: [
        { icon: "message-circle", name: "WhatsApp", description: "Direct contact" },
        { icon: "file-text", name: "Forms", description: "Quote requests" },
        { icon: "calendar", name: "Calendar", description: "Appointment booking" },
        { icon: "trending-up", name: "Analytics", description: "Results measurement" },
      ],
    },
    faq: {
      eyebrow: "// frequently asked",
      titleA: "We answer your",
      titleHighlight: "main questions",
      subtitle:
        "Before starting any project, we want you to have clarity on the process, scope, integrations and next steps.",
      moreQuestion: "Have another question?",
      items: [
        {
          question: "How long does it take to build a small business website?",
          answer:
            "It depends on scope. A landing page usually takes 1 to 2 weeks, a 4-6 page site 2 to 4 weeks and an 8-12 page site with integrations 4 to 6 weeks, counted from when I have copy, photos, access and approvals. The proposal includes a timeline with clear dates and deliverables. If you have a date that doesn't move — an opening, a busy season, a campaign — we work backwards from it.",
        },
        {
          question: "How much does a website cost with you?",
          answer:
            "A landing page starts at $349 USD, a 4–6 page site at $899 USD and an 8–12 page site at $1,499 USD, as one-time payments. Published prices cover each service's base scope. The total can vary with pages, languages, content, integrations or complexity. We confirm scope and investment before starting. You don't need a sales call to see them.",
        },
        {
          question:
            "What is the Strategic Business Audit and how is it different from a project?",
          answer:
            "The Express Review is free and it is the entry point: a 20-minute video call on what is visible from the outside, with 3 priorities. The Strategic Business Audit is a different animal: five business days that start by understanding your business and your commercial objective, then cover twelve areas against your real data — performance, architecture, conversion, technical SEO, keyword research, content and cannibalization, local presence, competitors, Google and Meta Ads, intake and measurement. Every finding gets its evidence and is classified by impact, effort, urgency and dependency, and it ends in a prioritized strategy with a 30, 60 and 90-day roadmap. A project is the execution; the audit is the map. It is quoted after the first meeting. If you hire web development, SEO or marketing, the diagnosis that service needs is part of the project and its scope is set in the proposal; it is not automatically the full twelve-area audit.",
        },
        {
          question: "Is the audit deducted if I later hire a project?",
          answer:
            "No, and that is deliberate. The old diagnosis was credited in full toward the project, which in practice made it a sales step: my incentive was to find reasons to sell you something. Charging for the audit separately means I can hand you a report that says «your site is fine, leave it alone» and lose nothing. The report is yours either way, and you can act on it with me, with your team or with another provider.",
        },
        {
          question: "What's the difference between Web Support and Growth+?",
          answer:
            "Web Support (from $79 USD/mo) keeps your site alive: security, speed, backups, minor changes and your monthly report. Growth+ includes all of that and also works to get you found: Google Business Profile, review management, local SEO, and content and business information prepared for search engines and AI answers. One protects what you have; the other works to get more clients to find you. Growth+ carries no list price because the work depends on where your digital presence stands: it is quoted after the first meeting and the audit.",
        },
        {
          question: "Do the monthly plans have a lock-in contract?",
          answer:
            "There's no 12-month contract on any plan. Web Support and Growth+ cancel from one month to the next, with no penalty and no call to anyone: you message me on WhatsApp and that's it. The only one with a commitment is Digital Marketing: it asks for a 3-month minimum, because ads and SEO don't produce reliable data in 30 days and I don't want to charge you for a single month that won't help you. After that, it cancels like the rest. I'd rather you stay because it works than because you signed.",
        },
        {
          question: "Do you work with U.S. businesses even though you're not here?",
          answer:
            "Yes, and it's most of my work. Everything is done remotely, in Spanish or English, over WhatsApp, on your schedule. The difference from a large agency is that you always talk to the owner of this one, not to a different account executive every month.",
        },
        {
          question: "Can you build a bilingual website in English and Spanish?",
          answer:
            "Yes, and for a Hispanic-owned business in the U.S. that's usually the right call: your current clients search in Spanish and many new ones search in English. I build both versions with separate URLs so Google indexes each one — this very site works that way.",
        },
        {
          question: "Does the website price include domain and hosting?",
          answer:
            "It includes setting them up, not paying for them. I guide and set up your domain, hosting and professional email, all in your name. You pay the provider directly — domain and hosting usually add up to $60 to $120 USD a year — and they renew yearly; professional email may carry its own subscription. If you already have them, I work on your current infrastructure.",
        },
        {
          question: "Can I edit my website myself afterwards?",
          answer:
            "Depending on your needs. I build high-performance static sites or editable structures with an admin panel when you need to update content frequently.",
        },
        {
          question: "What do I need to have ready to start my website?",
          answer:
            "To start talking, nothing: the Express Review or a message is enough. To build the site I need your logo, photos, business details, your list of services and access to your domain or hosting if you already have them. We work on the copy together; which part I write and which part you provide is set in writing in the proposal.",
        },
        {
          question: "What counts as a page and what counts as a section?",
          answer:
            "A page is its own address on the site: Home, each service, Contact. A section is a block inside a page: testimonials, FAQs, a form. Packages count pages, not sections. If the site is bilingual, how each version in the other language is counted and who does the translation is confirmed in the proposal.",
        },
        {
          question: "What happens after delivery?",
          answer:
            "We go live, check together that forms, WhatsApp and tracking work, and I hand over the access. The project includes review rounds on the agreed scope and initial support after launch, for the period set in the proposal. After that you can keep the site on your own — paying only for domain, hosting and whatever tools you use — or hire Web Support, from $79 USD a month, if you'd rather someone maintain it.",
        },
      ],
    },
    testimonials: {
      eyebrow: "// testimonials",
      titleA: "Businesses already",
      titleHighlight: "saving time",
      titleB: "with us",
      subtitle:
        "What the businesses already working with me say, with their site's domain so you can check it.",
      items: [
        {
          quote:
            "I used to explain my service over and over by message. Now my site does it for me: patients arrive already knowing how I work and book on their own. It gave me back so much time.",
          name: "Fernanda Silva",
          role: "Nutritionist",
          initials: "FS",
          url: "https://fersilvanutricion.com/",
          urlLabel: "fersilvanutricion.com",
          service: "Website + appointment booking",
        },
        {
          quote:
            "The site looks professional and that changed how clients see us. We started getting quote requests without chasing every person. Very happy with the result.",
          name: "Trejo Landscaping",
          role: "Landscaping & gardening services",
          initials: "TL",
          url: "https://tj-landscaping.com/",
          urlLabel: "tj-landscaping.com",
          service: "Website + quote capture",
        },
        {
          quote:
            "They set up our professional email, some automations and technical support. Everything runs without us having to watch it, and when something comes up they respond fast. One less weight on us.",
          name: "Constructora Izcalli",
          role: "Construction & development",
          initials: "CI",
          url: "",
          urlLabel: "",
          service: "Email hosting, automations and support",
        },
      ],
    },
    calendly: {
      eyebrow: "// online booking",
      titleA: "Rather talk it through? Book your",
      titleHighlight: "Express Review",
      subtitle:
        "Pick an available time. I review your presence before the call and in 20 minutes I show you 3 priorities. No cost, no sales pitch.",
      facadeTitle: "Pick the day and time that suit you.",
      facadeCta: "See available times",
      facadeNote: "20 minutes, free, and no sales pitch.",
    },
    // Single lead form (September 2026): only Name and Email site-wide.
    contact: {
      ctaInfo: "Request more information",
      eyebrow: "// request more information",
      titleA: "Leave your name and email and I'll write back",
      titleHighlight: "in under 24 hours",
      subtitle:
        "Just two details. I'll reply by email with the information you need and the next step. No jargon.",
      perks: [
        "Reply in under 24 hours",
        "You deal with me directly, no middlemen",
        "Free, no commitment",
      ],
      interestLabel: "You are interested in",
      altTitle: "Rather talk it through?",
      altSchedule: "Book the Express Review",
      fieldName: "Name",
      fieldEmail: "Email",
      phName: "e.g. Maria Gonzalez",
      phEmail: "maria@mybusiness.com",
      submit: "Request more information",
      sending: "Sending…",
      success: "Done. I'll write back by email within 24 hours.",
      error:
        "That did not send. Try again in a moment or email me at info@procodedev.com.",
      privacy:
        "I use your details to reply to you. I never sell or share them, and you can ask me to delete them at any time.",
      privacyLink: "Privacy policy",
      consent: "I agree that ProCode Dev may contact me by email with the information I requested.",
    },
    finalCta: {
      eyebrow: "// express review",
      title: "Ready to stop losing clients between messages?",
      subtitle:
        "A 20-minute video call to review your digital presence and leave with 3 clear priorities. Free.",
      ctaPrimary: "Book my Express Review",
    },
    footer: {
      tagline:
        "ProCode Dev is a small business web design agency run by Cristian Posada, a bilingual web developer. Website design for small businesses across the United States and Mexico, with client acquisition, qualifying forms and analytics.",
      navTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contact",
      hours: "Monday to Sunday",
      location: "Spanish website design services, remote across Texas, Florida and California",
      cta: "Book my Express Review",
      rights: "All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms & conditions",
      servicesList: [
        "Custom websites and redesigns",
        "Local SEO and Google Business Profile",
        "Quote forms and appointment booking",
        "Google Ads, Facebook and Instagram",
        "Analytics and business reporting",
      ],
      segmentsTitle: "By industry",
      marketsOverview: "United States",
    },
    // ── Real-project strip on the home page (finding #4) ──
    proof: {
      eyebrow: "// real work",
      titleA: "Systems already",
      titleHighlight: "working",
      subtitle: "Professional websites for small businesses, live right now. Look up the domain and judge for yourself.",
      cta: "See the full portfolio",
    },
    // ── Price anchor on the home page (finding #10) ──
    priceAnchor: {
      eyebrow: "// investment",
      title: "Published base pricing, no surprise quote",
      subtitle:
        "Every package shows its base price and what it includes. We confirm scope and investment before starting.",
      fromLabel: "From",
      amount: "349",
      currency: "USD",
      amountNote: "complete landing page · one-time",
      cta: "See all pricing",
    },
    // ── Who's behind it (findings #11 and #16) ──
    founder: {
      eyebrow: "// the founder",
      name: "Cristian Posada",
      role: "Web developer · Founder of ProCode Dev",
      title: "International experience leading every project",
      body:
        "I have been a web developer for 5 years and have worked with international companies. I founded ProCode Dev to bring that same standard to service businesses: I lead every project from start to finish — strategy, design, development, SEO and campaigns — with one person accountable from the first conversation through delivery.",
      highlights: [
        { value: "5 years", label: "in web development" },
        { value: "International", label: "work with international companies" },
        { value: "US & Mexico", label: "businesses I serve today" },
        { value: "EN / ES", label: "service in English and Spanish" },
      ],
      cta: "Book my Express Review",
    },
    // ── Objection FAQ before the home page's final CTA (finding #18) ──
    homeFaq: {
      eyebrow: "// before you book",
      titleA: "The questions I get",
      titleHighlight: "almost every time",
      subtitle: "",
      items: [
        {
          question: "I need a website for my business. Where do I start?",
          answer:
            "With the service that pays you best, not the whole site. We usually start with a landing page, from $349 USD, for that one service and, if it brings clients in, grow into a 4–6 page site. Low risk, price in plain sight.",
        },
        {
          question: "What does it cost, and why don't I see it until the end?",
          answer:
            "You do see it: base pricing is published. A landing page from $349 USD, a 4–6 page site from $899 USD and an 8–12 page site from $1,499 USD. The total depends on pages, languages, content and integrations, and we confirm it before starting. There's no sales call to find out and no 12-month contracts.",
        },
        {
          question: "Does the 20-minute call cost anything or commit me?",
          answer:
            "Neither. It's 20 minutes to understand your business and tell you what you need — even if the answer is that you don't need a site from me yet.",
        },
        {
          question: "I'm in the U.S. and you're not. How does that work?",
          answer:
            "Remotely, over WhatsApp, in Spanish or English, on your schedule. It's how you already work with most of your vendors. The difference from a large agency is that you talk to the agency owner, who is also the one doing the work; and from Fiverr, that I'm still answering in month six.",
        },
        {
          question: "I'm not technical at all. Will I manage?",
          answer:
            "That's exactly the point. I set up domain, hosting, email and your Google profile, all in your name (domain and hosting are paid to the provider). You tell me what services you offer and to whom.",
        },
        {
          question: "What if I already have a site but it isn't working?",
          answer:
            "That's the most common case. On the call we look at whether it's worth rescuing or rebuilding, and I tell you which is cheaper for you — not which is better for me.",
        },
      ],
    },
    pageMeta: {
      home: {
        title:
          "Web Design & Digital Marketing Agency | ProCode Dev",
        description:
          "Web design and digital marketing for small businesses in the U.S. and Mexico. Custom websites from $349 USD, with forms, WhatsApp and tracking.",
        keywords:
          "web design agency, small business web design agency, website design company for small business, digital marketing agency, web development agency, bilingual website design services, spanish website design services, bilingual web developer, ProCode Dev",
        heroKicker: "Home",
      },
      sectors: {
        title:
          "Website Design by Industry | ProCode Dev",
        description:
          "Website design for contractors, therapists, attorneys, realtors and tax preparers. Pick your industry and see what changes, with base pricing in USD.",
        keywords:
          "contractor website design, therapist website design, real estate website design, tax preparer website design, attorney website design, local business web design, small business digital marketing services, websites by industry",
        heroTitleA: "Website design",
        heroHighlight: "by industry",
        heroSubtitle: "Built for your industry.",
      },
      services: {
        title: "Web Development & Digital Marketing | ProCode Dev",
        description:
          "Web development and digital marketing services for small businesses: custom websites from $349 USD and lead generation plans quoted to your business.",
        keywords:
          "web development and digital marketing services, web development services for small business, website design and marketing services, small business web development, small business digital marketing services, local SEO services for small businesses, conversion-focused design",
        heroTitleA: "Web development and",
        heroHighlight: "digital marketing services",
        heroSubtitle: "Two services, one person accountable.",
      },
      portfolio: {
        title:
          "Portfolio: Small Business Websites | ProCode Dev",
        description:
          "Professional websites for small businesses in accounting, health, construction and services. They're live: open them and judge the work before messaging me.",
        keywords:
          "professional websites for small businesses, portfolio of small business websites, small business website examples, local business web design case studies, website design case study, accounting firm website design, website redesign for small business",
        heroTitleA: "Portfolio of professional",
        heroHighlight: "small business websites",
        heroSubtitle: "Real sites, live now.",
      },
      pricing: {
        title:
          "How Much a Small Business Website Costs | ProCode Dev",
        description:
          "Small business website pricing: landing page from $349, 4–6 page site from $899, 8–12 pages from $1,499 USD and Web Support from $79 USD a month.",
        keywords:
          "how much a small business website costs, small business website pricing, website design packages, how much does a website cost, monthly website maintenance, local SEO plan pricing",
        heroTitleA: "How much a small business",
        heroHighlight: "website and digital marketing costs",
        heroSubtitle: "Base prices, no sales call.",
        heroLead:
          "A one-time price to build your site, monthly plans to maintain it and make it grow, add-ons and the Strategic Audit. Anything with a base price is published; what depends on your business is quoted after the first meeting.",
      },
      contact: {
        title:
          "Hire a Small Business Web Designer | ProCode Dev",
        description:
          "Book your free 20-minute Express Review or leave your name and email. Bilingual web design with published base pricing.",
        keywords:
          "hire a web designer, bilingual website design services, spanish website design services, bilingual web developer",
        heroTitleA: "Write to me or book a time,",
        heroHighlight: "whichever you prefer",
        heroSubtitle: "I reply within 24 hours.",
      },
    },
    // ── Footer context blocks (the long copy that left the hero) ───────
    // ── Industry hub: /en/industries ───────────────────────────
    sectors: {
      promiseEyebrow: "// the promise",
      promiseTitle:
        "Your business stops depending on referrals alone.",
      promiseBody:
        "I build the digital presence so the client looking for you finds you, understands you and gets in touch.",
      rtbTitle: "Why you can believe me",
      rtb: [
        {
          icon: "briefcase",
          title: "Work in your own industry",
          description:
            "I'm not learning your business on your dime. I've already built for service businesses like yours, and you can open the sites and judge for yourself.",
        },
        {
          icon: "receipt",
          title: "Published base pricing",
          description:
            "It's on the page, in dollars. No sales call to find out and no 12-month contracts.",
        },
        {
          icon: "message-circle",
          title: "One person, on WhatsApp",
          description:
            "One person accountable, in your language and on your schedule. Not a ticket or a different account executive every month.",
        },
        {
          icon: "trending-up",
          title: "Measurable opportunities",
          description:
            "On monthly plans I report WhatsApp and call taps, forms received and bookings. Not how many visits: how many contact opportunities.",
        },
      ],
      vsTitle: "Against what you already considered",
      vsSubtitle:
        "What changes against the four usual options.",
      vs: [
        {
          name: "Wix or Squarespace",
          them: "Cheap, but you build it and you maintain it.",
          us: "You don't have to do it, or maintain it. When your week is full that's worth more than the price difference.",
        },
        {
          name: "Fiverr",
          them: "They deliver and disappear. In month six nobody answers.",
          us: "One person with a name who still answers in month six, and the year after.",
        },
        {
          name: "Hibu and similar",
          them: "12-month contract, price you don't see until the call.",
          us: "No 12-month contracts, and base pricing published on this very site.",
        },
        {
          name: "A large agency",
          them: "Good work, but monthly fees outside many service businesses' budgets.",
          us: "Pricing built for service businesses, with the same focus on winning real clients.",
        },
      ],
      forTitle: "Local business web design and small business digital marketing services",
      forItems: [
        "Contractor website design for builders and home-service trades",
        "Therapist website design for private practices and health professionals",
        "Attorney website design for law firms, insurance agents and consultants",
        "Real estate website design for agents and developers",
        "Tax preparer website design for accounting and tax practices",
        "Service businesses that sell on referrals",
      ],
      crossTitle: "Not your industry?",
      crossSubtitle:
        "The system is the same; only the examples change.",
      segmentsTitle: "Websites by industry",
      segmentsSubtitle:
        "A contractor website, a clinic website, a real estate agent website, an accounting firm website or a professional services site. Five pages with what changes in each case.",
      segmentsCta: "See the page",
      seasonTitle: "Your calendar rules, and I know it",
      seasonBody:
        "Start early and you reach your strong month with the whole system running. Already swamped? We prioritize what launches in two weeks.",
      ctaTitle: "20 minutes, no commitment",
      ctaBody:
        "I'll tell you what's holding your business back today.",
    },
  },
} as const;

export type Dict = (typeof translations)[Lang];

export function useTranslations(lang: Lang): Dict {
  return translations[lang];
}

// ═══════════════════════════════════════════════════════════════════════
// DESTINOS DE CONVERSIÓN (septiembre de 2026)
//
// Dos CTAs en todo el sitio, siempre dentro del sitio:
//   · principal  «Agendar Revisión Express» → #agendar  (Calendly)
//   · secundario «Solicitar más información» → #contacto (Nombre + Email)
//
// Estas páginas llevan los dos bloques en su propio cuerpo (LandingConversion
// o, en /contacto, Calendly + LeadForm), así que sus botones bajan por ancla
// sin cambiar de URL. El resto (blog, hubs, legales) manda a /contacto/ con
// el mismo ancla. `#agendar` no se renombra: AnalyticsEvents lo usa para
// contar los clics de agenda.
//
// La Revisión Express tiene reglas propias: su formulario vive en
// #solicitar y no usa la plantilla estándar.
// ═══════════════════════════════════════════════════════════════════════

export const IN_PAGE_CONVERSION: readonly PageKey[] = [
  "home",
  "webDev",
  "digitalMarketing",
  "landingPages",
  "seo",
  "maintenance",
  "audit",
  "contractors",
  "health",
  "professional",
  "realEstate",
  "accounting",
  "markets",
  "mexico",
  "texas",
  "florida",
  "california",
  "services",
  "contact",
  "expressReview",
];

export const BOOK_ANCHOR = "#agendar";
export const INFO_ANCHOR = "#contacto";

export function conversionHref(
  page: PageKey | "blog",
  lang: Lang,
  kind: "book" | "info",
): string {
  const inPage = (IN_PAGE_CONVERSION as readonly string[]).includes(page);
  if (page === "expressReview") return kind === "book" ? BOOK_ANCHOR : "#solicitar";
  const anchor = kind === "book" ? BOOK_ANCHOR : INFO_ANCHOR;
  return inPage ? anchor : `${PAGES.contact[lang]}${anchor}`;
}

// ═══════════════════════════════════════════════════════════════════════
// ENLAZADO INTERNO POR PÁGINA (septiembre de 2026)
//
// Sale de la columna «Enlazado interno recomendado» de la matriz SEO del
// keyword research. Hasta ahora los únicos enlaces entre páginas
// comerciales vivían en el menú y el pie, que Google trata como plantilla
// y pondera poco. Estos van dentro del contenido, con texto de ancla que
// dice qué hay del otro lado.
// ═══════════════════════════════════════════════════════════════════════

export interface RelatedBlock {
  eyebrow: string;
  title: string;
  body: string;
  items: readonly { label: string; href: string; hint: string }[];
}

export const relatedLinks: Record<
  Lang,
  Record<"home" | "services" | "pricing" | "portfolio", RelatedBlock>
> = {
  es: {
    home: {
      eyebrow: "// por dónde empezar",
      title: "Las cuatro puertas de entrada",
      body:
        "Según lo que estés buscando hoy, este es el camino más corto dentro del sitio.",
      items: [
        {
          label: "Diseño y desarrollo de páginas web",
          href: "/servicios/desarrollo-web/",
          hint: "El servicio principal, de la landing al sitio completo",
        },
        {
          label: "Precios de páginas web",
          href: "/precios/",
          hint: "Todos los paquetes con su precio base en USD",
        },
        {
          label: "Diseño web por sector",
          href: "/negocios/",
          hint: "Qué cambia según tu giro: obra, salud, despachos, bienes raíces",
        },
        {
          label: "Diseño de páginas web en Estados Unidos",
          href: "/diseno-web-estados-unidos/",
          hint: "Cómo trabajo en remoto con negocios hispanos en EE. UU.",
        },
      ],
    },
    services: {
      eyebrow: "// las entradas al servicio",
      title: "Tres entradas a los servicios",
      body:
        "Tres entradas distintas: dos al mismo proyecto de desarrollo web y una al servicio de SEO, que se contrata aparte.",
      items: [
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
    pricing: {
      eyebrow: "// qué hay detrás de cada precio",
      title: "Antes de decidir por el número",
      body:
        "Cada paquete tiene una página que explica qué incluye y para quién es. El precio solo se entiende con eso al lado.",
      items: [
        {
          label: "Diseño y desarrollo de páginas web",
          href: "/servicios/desarrollo-web/",
          hint: "Qué incluye el sitio de 4 a 6 páginas, desde $899 USD",
        },
        {
          label: "Diseño de landing pages",
          href: "/servicios/landing-pages/",
          hint: "Qué incluye la landing, desde $349 USD",
        },
        {
          label: "Mantenimiento web",
          href: "/servicios/mantenimiento-web/",
          hint: "Qué cubre el plan mensual desde $79 USD",
        },
      ],
    },
    portfolio: {
      eyebrow: "// después de ver el trabajo",
      title: "Si quieres uno así para tu negocio",
      body:
        "Estos son los tres siguientes pasos naturales después de abrir los sitios de arriba.",
      items: [
        {
          label: "Diseño y desarrollo de páginas web",
          href: "/servicios/desarrollo-web/",
          hint: "Cómo se hace, qué incluye y en cuánto tiempo",
        },
        {
          label: "Precios de páginas web",
          href: "/precios/",
          hint: "Cuánto cuesta cada tamaño de proyecto",
        },
        {
          label: "Diseño web por sector",
          href: "/negocios/",
          hint: "Casos y secciones específicas de tu giro",
        },
      ],
    },
  },
  en: {
    home: {
      eyebrow: "// where to start",
      title: "The four ways in",
      body:
        "Depending on what you came looking for, this is the shortest path through the site.",
      items: [
        {
          label: "Small business website design",
          href: "/en/services/web-development/",
          hint: "The main service, from a landing page to a full site",
        },
        {
          label: "Website pricing",
          href: "/en/pricing/",
          hint: "Every package with its base price in USD",
        },
        {
          label: "Website design by industry",
          href: "/en/industries/",
          hint: "What changes for contractors, clinics, firms and realtors",
        },
        {
          label: "Bilingual web design in the U.S.",
          href: "/en/web-design-united-states/",
          hint: "How the remote work with U.S. small businesses runs",
        },
      ],
    },
    services: {
      eyebrow: "// ways into the service",
      title: "Three ways in",
      body:
        "Two doors into the same web development project, and one into the SEO service, which is hired separately.",
      items: [
        {
          label: "Landing page design",
          href: "/en/services/landing-pages/",
          hint: "One page, one goal, from $349 USD",
        },
        {
          label: "SEO services",
          href: "/en/services/seo/",
          hint: "Audit, keyword research and monthly work",
        },
        {
          label: "Website maintenance",
          href: "/en/services/website-maintenance/",
          hint: "Updates, backups and support from $79 a month",
        },
      ],
    },
    pricing: {
      eyebrow: "// what sits behind each price",
      title: "Before you decide on the number",
      body:
        "Every package has a page explaining what it includes and who it is for. The price only makes sense next to that.",
      items: [
        {
          label: "Small business website design",
          href: "/en/services/web-development/",
          hint: "What the four-to-six page site, from $899 USD, includes",
        },
        {
          label: "Landing page design",
          href: "/en/services/landing-pages/",
          hint: "What the landing page, from $349 USD, includes",
        },
        {
          label: "Website maintenance",
          href: "/en/services/website-maintenance/",
          hint: "What the plan from $79 USD a month covers",
        },
      ],
    },
    portfolio: {
      eyebrow: "// after seeing the work",
      title: "If you want one like these",
      body:
        "These are the three natural next steps after opening the sites above.",
      items: [
        {
          label: "Small business website design",
          href: "/en/services/web-development/",
          hint: "How it is built, what it includes, how long it takes",
        },
        {
          label: "Website pricing",
          href: "/en/pricing/",
          hint: "What each project size costs",
        },
        {
          label: "Website design by industry",
          href: "/en/industries/",
          hint: "Cases and sections specific to your trade",
        },
      ],
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════
// CONFIRMACIÓN DE FORMULARIO (septiembre de 2026)
//
// Antes el envío solo cambiaba una línea de texto debajo del botón: en
// móvil quedaba fuera de pantalla y mucha gente no sabía si se había
// enviado. Ahora se abre un diálogo que ocupa la pantalla, confirma con un
// tick y ofrece agendar la Revisión Express ahí mismo para quien no quiere
// esperar la respuesta por correo. Lo renderiza FormSuccessModal.astro.
// ═══════════════════════════════════════════════════════════════════════

export interface FormSuccessCopy {
  title: string;
  body: string;
  guarantee: string;
  bookLabel: string;
  bookHint: string;
  close: string;
  ariaLabel: string;
}

export const formSuccess: Record<Lang, FormSuccessCopy> = {
  es: {
    title: "¡Listo, ya me llegó!",
    body:
      "Recibí tu mensaje. Te escribo por correo en menos de 24 horas para entender tu caso y proponerte el siguiente paso.",
    guarantee: "Respondo cualquier mensaje en menos de 24 horas.",
    bookLabel: "Agendar Revisión Express",
    bookHint: "¿Prefieres no esperar? Elige un horario para tu Revisión Express de 20 minutos.",
    close: "Cerrar",
    ariaLabel: "Confirmación de envío",
  },
  en: {
    title: "Got it — your message is in.",
    body:
      "I received it. I'll email you within 24 hours to understand your case and suggest the next step.",
    guarantee: "I answer every message within 24 hours.",
    bookLabel: "Book my Express Review",
    bookHint: "Rather not wait? Pick a time for your 20-minute Express Review.",
    close: "Close",
    ariaLabel: "Submission confirmed",
  },
};
