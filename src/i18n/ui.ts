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
  // La Auditoría Digital cuelga de /servicios/ pero NO es una tercera línea
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
  | "texas"
  | "florida"
  | "california"
  | "portfolio"
  | "pricing"
  | "contact"
  | "privacy"
  | "terms";

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
  texas: { es: "/diseno-web-texas/", en: "/en/web-design-texas/" },
  florida: { es: "/diseno-web-florida/", en: "/en/web-design-florida/" },
  california: { es: "/diseno-web-california/", en: "/en/web-design-california/" },
  portfolio: { es: "/portafolio/", en: "/en/portfolio/" },
  pricing: { es: "/precios/", en: "/en/pricing/" },
  contact: { es: "/contacto/", en: "/en/contact/" },
  privacy: { es: "/aviso-de-privacidad/", en: "/en/privacy-policy/" },
  terms: { es: "/terminos-y-condiciones/", en: "/en/terms-of-service/" },
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
  web3formsKey: "9659bbb8-915d-4842-8981-a261c0faf9ff",
  instagram: "https://www.instagram.com/procode.systems/",
  linkedin: "https://www.linkedin.com/in/cristian-posada-891401291/",
  facebook: "https://www.facebook.com/ProCodeSystems",
  city: "Estados Unidos y México",
  cityFull: "Estados Unidos y México · atención remota en español",
  founderName: "Cristian Posada",
  founderPhoto: "/images/cristian-posada.jpg",
};

// Moneda: el mercado principal es el dueño de negocio hispano en EE. UU.,
// con México como mercado secundario. USD es la vista por defecto y MXN
// queda como opción (tipo de cambio fijo, arriba del spot para absorber
// movimiento cambiario sin retocar precios).
export const FX_USD_MXN = 18;

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
      marketsMenuNote: "Trabajo remoto con negocios de Estados Unidos.",
      sectors: "Giros",
      sectorsOverview: "Ver todos los giros",
      sectorsMenuNote: "Una página por giro, con lo que cada negocio necesita.",
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
      // sigue es la Auditoría Digital de $250, que tiene landing propia en
      // /servicios/auditoria/ y NO se acredita a un proyecto posterior.
      ctaPrimary: "Agendar Revisión Express",
      ctaWhatsapp: "Escribir por WhatsApp",
      free: "Gratis · 20 min · revisión en vídeo incluida",
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
        "Sitio web · Captación · Contacto · Automatización · Seguimiento · Analítica",
      audience:
        "Contratistas · Clínicas y consultorios · Servicios profesionales · Inmobiliarias · Contadores y despachos",
    },
    hero: {
      eyebrow: "// sistemas digitales de crecimiento",
      titleA: "Diseño de páginas web para negocios",
      titleHighlight: "en Estados Unidos y México",
      titleB: "",
      subtitle:
        "Sitio web, captación y seguimiento en un solo sistema, en inglés y en español. Precios publicados desde $349 USD y respuesta en menos de 24 horas.",
      badges: [
        "Precios públicos",
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
          title: "Automatización",
          description: "Respuesta inmediata, sin trabajo manual.",
        },
        {
          icon: "repeat",
          title: "Seguimiento",
          description: "Recordatorios y reactivación automáticos.",
        },
        {
          icon: "trending-up",
          title: "Analítica",
          description: "Contactos y citas, no visitas.",
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
          summary: "Cita en línea y recordatorios.",
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
          description: "Conecto formularios, agenda y CRM.",
        },
        {
          number: "05",
          title: "Optimización",
          description: "Reviso resultados y mejoro cada mes.",
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
          description: "Automatización de seguimiento: del formulario al CRM, sin pasos manuales.",
        },
        {
          icon: "repeat",
          title: "De trabajo suelto a cliente recurrente",
          description: "Mantenimiento, segundas etapas y referidos, presentados a tiempo.",
        },
        {
          icon: "bar-chart",
          title: "Medimos negocio, no visitas",
          description: "Contactos, llamadas, citas y de dónde vino cada una.",
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
      eyebrow: "// proyecto destacado",
      titleA: "El caso que puedes abrir y",
      titleHighlight: "juzgar tú mismo",
      name: "Constructora Izcalli",
      badge: "Contratistas & construcción · Durango",
      url: "https://constructoraizcalli.com/",
      urlLabel: "constructoraizcalli.com",
      image: "/images/proyecto-izcalli.jpg",
      summary:
        "Una constructora con años de obra entregada y ninguna forma de mostrarla. Hoy su experiencia es un portafolio que se puede abrir en una junta.",
      challengeTitle: "El problema",
      challengeBody:
        "La obra existía, pero vivía en fotos sueltas en el teléfono: cada cliente nuevo tenía que creer en la palabra de la empresa.",
      solutionTitle: "Qué construí",
      solution: [
        "Portafolio de nueve obras construidas, cada una con su ficha, para que la experiencia se muestre en vez de contarse.",
        "Portada con una selección de tres proyectos: el visitante ve el nivel de obra antes de leer una sola línea de texto.",
        "Bloque de capacidades —ingeniería, ejecución, construcción— que ordena qué hace la empresa sin caer en el catálogo genérico.",
        "Datos formales visibles: razón social, representante legal, dirección, teléfono y correo, que es lo que revisa quien va a contratar obra.",
        "SEO técnico y datos estructurados para búsqueda local: metadatos, Open Graph, canónicas y JSON-LD de constructora en Durango.",
      ],
      stackTitle: "Con qué está hecho",
      stack: ["Astro", "TypeScript", "Tailwind CSS", "SEO técnico", "Diseño editorial"],
      factsTitle: "En números",
      facts: [
        { value: "9", label: "obras documentadas con ficha propia" },
        { value: "3", label: "proyectos destacados en la portada" },
        { value: "0", label: "obras que siguen viviendo solo en el teléfono" },
      ],
      visit: "Visitar el sitio",
      cta: "Quiero un sistema así",
    },
    portfolio: {
      eyebrow: "// portafolio",
      titleA: "Proyectos reales que",
      titleHighlight: "generan oportunidades",
      subtitle:
        "Una selección de sitios que construí para negocios que querían verse más profesionales y captar mejor. Haz clic para verlos en vivo.",
      viewProject: "Ver proyecto",
      resultLabel: "Resultado",
      cta: "Quiero una página web para mi negocio",
      clientsTitle: "Clientes reales",
      clientsNote: "Ejemplos de sitios web para negocios que están en vivo: casos de sitios web pymes con clientes atendiendo por ellos hoy.",
      demosTitle: "Demos y conceptos",
      demosNote:
        "Diseño web para negocios locales que construí por mi cuenta para mostrar lo que se puede hacer en cada sector. No son clientes: los marco como demo para que no haya confusión.",
      projects: [
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
        "Paquetes de diseño de páginas web con precio público, en dólares, sin llamada de ventas para conocerlos y sin contratos de 12 meses. Elige por dónde empezar y crece a tu ritmo.",
      popular: "Más elegido",
      currencyLabel: "Ver precios en",
      currencyMxn: "MXN",
      currencyUsd: "USD",
      currencyNoteMxn:
        "Equivalencia en pesos mexicanos a tipo de cambio fijo de $18 MXN por dólar. La facturación se hace en USD.",
      currencyNoteUsd: "Precio de una página web profesional en dólares estadounidenses: el costo de página web para pequeña empresa está publicado abajo, igual que el mantenimiento web mensual y el plan de SEO local con su precio.",
      mxnUnit: "MXN",
      mxnUnitMonth: "MXN / mes",
      // ── Auditoría Digital · sustituye al Diagnóstico de $149 ──
      // Septiembre de 2026: el Diagnóstico se acreditaba entero al proyecto,
      // así que era un paso de venta disfrazado de producto. La Auditoría se
      // paga aparte y no se acredita: eso es lo que permite recomendar «no
      // toques nada» sin perder dinero. La landing completa está en
      // /servicios/auditoria/ y su copy en src/i18n/audit.ts.
      advisory: {
        badge: "Producto de entrada · se paga aparte",
        name: "Auditoría Digital",
        price: "250",
        priceMxn: "4,500",
        currency: "USD",
        priceNote: "pago único · no se acredita a un proyecto",
        hook: "Cuando sabes que algo no funciona pero no cuál de todas las piezas.",
        description:
          "Reviso nueve áreas de tu negocio en línea con acceso a tus datos reales —sitio, estructura, diseño, SEO, presencia local, anuncios, captación, seguimiento y medición— y te entrego un informe priorizado, un vídeo recorriéndolo y una llamada. El plan es tuyo y lo puedes ejecutar con quien quieras.",
        homeEyebrow: "// el siguiente paso",
        homeTitle: "¿Quieres el plan completo por escrito?",
        prereq:
          "Si nunca hemos hablado, empieza por la Revisión Express: es gratis y a mucha gente le basta.",
        viewPricing: "Ver todos los precios",
        waText:
          "Hola Cristian, Me interesa la Auditoría Digital ($250 USD). Quiero saber qué está fallando en mi negocio en línea y en qué orden arreglarlo.",
        stepsTitle: "Cómo funciona (3 fases)",
        steps: [
          {
            name: "Día 1 · Contexto y accesos",
            description:
              "Cuestionario corto y accesos de solo lectura: Analytics, Search Console, tu Perfil de Empresa y tus cuentas de anuncios si las hay.",
          },
          {
            name: "Días 2 a 4 · Auditoría",
            description:
              "Las nueve áreas, una por una, con tus datos delante y comparándote con quienes salen antes que tú en tu ciudad.",
          },
          {
            name: "Día 5 · Entrega",
            description:
              "Informe en PDF con los hallazgos priorizados, vídeo recorriéndolo y llamada de 30 a 45 minutos cuando lo hayas leído.",
          },
        ],
        creditNote:
          "Los $250 no se descuentan de un proyecto posterior, y es a propósito: si el proyecto absorbiera la auditoría, mi incentivo sería encontrarte razones para contratarme. Cobrándola aparte puedo decirte «esto está bien, no lo toques».",
        cta: "Ver la Auditoría Digital",
      },
      extrasTitle: "Servicios adicionales",
      extrasSubtitle:
        "Complementos para mantener tu sitio creciendo y actualizado.",
      note: "Estos son los precios reales, no un rango de referencia: lo que ves es lo que pagas por el alcance descrito en cada plan. Si tu proyecto se sale de ese alcance, te lo digo antes de empezar y te paso el número exacto — nunca a mitad del trabajo. Los planes de Soporte Web y Crecimiento+ no tienen contrato de permanencia: los cancelas cuando quieras. El único con compromiso es Web + Marketing + SEO, con un mínimo de 3 meses, porque los anuncios y el SEO necesitan ese tiempo para dar resultados reales.",
      // ── Escalera mensual: soporte → crecimiento → todo incluido ──
      // Sustituye al bloque único de mantenimiento. El objetivo del análisis de
      // mercado era crear techo de expansión: un cliente de $79 puede subir a
      // $349 y de ahí a $1,100 sin cambiar de proveedor.
      monthlyTitle: "Planes mensuales: mantenimiento web y SEO local",
      monthlySubtitle:
        "Mantenimiento web mensual y plan de SEO local con precio publicado, y reporte mensual de contactos reales.",
      monthlyNote:
        "Soporte Web y Crecimiento+ no tienen contrato de permanencia: subes, bajas o cancelas de un mes a otro. Web + Marketing + SEO pide un mínimo de 3 meses y, cumplido ese plazo, también se cancela de un mes a otro.",
      monthly: [
        {
          badge: "Base · Continuidad",
          name: "Soporte Web",
          pricePrefix: "desde",
          price: "79",
          priceMxn: "1,430",
          currency: "USD / mes",
          currencyMonth: true,
          priceNote: "según el tamaño de tu página",
          commitmentNote: "",
          tagline: "Tu página siempre al día",
          description:
            "No pagas «por si algo se rompe». Yo mantengo tu sitio rápido, seguro y actualizado, te hago los cambios que necesites y cada mes te digo cómo trabajó tu página.",
          features: [
            "Reporte mensual: contactos, llamadas, clics a WhatsApp y formularios recibidos.",
            "Monitoreo de disponibilidad y velocidad: tu sitio siempre en línea.",
            "Respaldo mensual del sitio: si algo falla, se restaura.",
            "Actualizaciones de seguridad y de plataforma.",
            "Hasta 3–4 cambios menores al mes: textos, fotos, precios, horarios, promociones.",
            "1 recomendación de mejora al mes, basada en tus números.",
            "Prioridad en soporte ante cualquier urgencia.",
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
          price: "349",
          priceMxn: "6,290",
          currency: "USD / mes",
          currencyMonth: true,
          priceNote: "incluye todo el Soporte Web",
          commitmentNote: "",
          tagline: "Que te encuentren, no solo que existas",
          description:
            "Tener página no sirve si nadie te encuentra. Este plan trabaja tu Perfil de Empresa en Google, tus reseñas y tu visibilidad en las búsquedas con IA, que es por donde ya llega una parte de tus clientes.",
          features: [
            "Todo lo del plan Soporte Web.",
            "Perfil de Empresa en Google: creación, verificación y optimización completa.",
            "Publicaciones mensuales en tu Perfil de Google y actualización de servicios y horarios.",
            "Gestión de reseñas: sistema para pedirlas y respuesta a todas las que llegan.",
            "Optimización para búsqueda con IA (ChatGPT, Google AI): que te citen cuando pregunten por un negocio como el tuyo.",
            "Contenido y SEO local: te posiciono para las búsquedas de tu ciudad.",
            "Reporte mensual ampliado: llamadas desde Google, direcciones solicitadas y reseñas nuevas.",
          ],
          cta: "Quiero Crecimiento+",
          waText:
            "Hola Cristian, Me interesa el plan Crecimiento+ ($349 USD al mes) con Perfil de Empresa en Google, gestión de reseñas y optimización para búsqueda con IA. ¿Cómo empezamos?",
          highlighted: true,
        },
        {
          badge: "Techo · Todo incluido",
          name: "Web + Marketing + SEO",
          pricePrefix: "desde",
          price: "1,100",
          priceMxn: "19,800",
          currency: "USD / mes",
          currencyMonth: true,
          priceNote: "presupuesto de anuncios aparte",
          commitmentNote:
            "Contrato mínimo de 3 meses. Los anuncios y el SEO necesitan ese tiempo para dar resultados reales; antes de eso todavía estamos ajustando.",
          tagline: "Un sistema completo de captación",
          description:
            "Para el negocio que ya no quiere depender de las recomendaciones y los meses buenos. Página, anuncios, contenido y SEO trabajando juntos, con seguimiento de cada prospecto hasta que agenda.",
          features: [
            "Todo lo del plan Crecimiento+.",
            "Gestión de campañas en Google Ads y Meta, con landing pages dedicadas.",
            "SEO continuo: contenido mensual, enlaces y páginas por servicio y por ciudad.",
            "Automatización de seguimiento: cada prospecto recibe respuesta aunque tú estés en obra, en consulta o con un cliente.",
            "Landing pages nuevas para promociones o servicios sin costo extra.",
            "Reporte mensual de costo por prospecto y por cliente cerrado.",
            "Llamada estratégica mensual conmigo.",
          ],
          cta: "Cotizar mi paquete",
          waText:
            "Hola Cristian, Me interesa el paquete Web + Marketing + SEO (desde $1,100 USD al mes). Quiero un sistema completo de captación para mi negocio. ¿Podemos platicar?",
          highlighted: false,
        },
      ],
      packages: [
        {
          name: "Landing Page",
          price: "349",
          priceMxn: "6,290",
          currency: "USD",
          pricePrefix: "",
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
            "Hola Cristian, Me interesa la Landing Page ($349 USD). Quiero una página enfocada 100% en captar clientes. ¿Me pueden dar más información?",
          highlighted: false,
        },
        {
          name: "Sitio Web 4–6 páginas",
          price: "899",
          priceMxn: "16,190",
          currency: "USD",
          pricePrefix: "",
          tagline: "El favorito de los negocios en crecimiento",
          description:
            "Tu negocio completo en línea: una página por servicio, estructura pensada para vender y confianza desde el primer clic.",
          features: [
            "4 a 6 páginas estratégicas (una por servicio)",
            "Estructura de ventas y confianza",
            "WhatsApp + formularios conectados",
            "Bilingüe español/inglés si lo necesitas",
            "SEO base para que te encuentren en tu ciudad",
          ],
          cta: "Empezar mi sitio",
          waText:
            "Hola Cristian, Me interesa el Sitio Web de 4 a 6 páginas ($899 USD). Quiero llevar mi negocio completo a internet con una estructura que venda. ¿Cómo iniciamos?",
          highlighted: true,
        },
        {
          name: "Sitio Web 8–12 páginas",
          price: "1,499",
          priceMxn: "26,990",
          currency: "USD",
          pricePrefix: "desde",
          tagline: "Presencia y sistema digital completo",
          description:
            "Una web robusta para negocios con varias sucursales o líneas de servicio: más páginas, integraciones y una operación digital ordenada.",
          features: [
            "8 a 12 páginas completas",
            "Páginas por servicio y por ciudad",
            "Integraciones y automatización",
            "Sistema de captación + seguimiento",
            "SEO técnico avanzado y acompañamiento en el lanzamiento",
          ],
          cta: "Cotizar mi web",
          waText:
            "Hola Cristian, Me interesa el Sitio Web de 8 a 12 páginas (desde $1,499 USD) con integraciones y seguimiento. Me gustaría cotizarlo. ¿Podemos platicar?",
          highlighted: false,
        },
      ],
      extras: [
        {
          name: "Rediseño web",
          price: "$349 – $1,499",
          priceMxn: "$6,290 – $26,990",
          unit: "USD o más",
          description:
            "Renueva imagen, estructura y conversión sobre tu sitio actual, sin empezar de cero.",
        },
        {
          name: "Optimización web",
          price: "$349",
          priceMxn: "$6,290",
          unit: "USD",
          description:
            "Más velocidad, mejor experiencia y CTAs que sí convierten visitas en mensajes.",
        },
        {
          name: "Página adicional",
          price: "$199",
          priceMxn: "$3,590",
          unit: "USD",
          description:
            "Suma una página extra a un sitio que ya hicimos juntos.",
        },
        {
          name: "Ajustes urgentes",
          price: "$99",
          priceMxn: "$1,790",
          unit: "USD",
          description:
            "Cambios rápidos fuera de alcance, resueltos con prioridad el mismo día.",
        },
      ],
    },
    integrations: {
      eyebrow: "// integraciones",
      title: "Conecto tus herramientas favoritas",
      subtitle:
        "Tu página no vive aislada: se conecta para que el seguimiento suceda solo. Una empresa de diseño de páginas web que se detiene en el diseño te deja conectando todo esto a mano.",
      items: [
        { icon: "message-circle", name: "WhatsApp", description: "Captación y seguimiento" },
        { icon: "file-text", name: "Formularios", description: "Registro de prospectos" },
        { icon: "calendar", name: "Calendario", description: "Agenda de citas" },
        { icon: "database", name: "CRM", description: "Control de oportunidades" },
        { icon: "mail", name: "Email", description: "Comunicación automatizada" },
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
          question: "¿Cuánto tiempo toma desarrollar mi sitio web?",
          answer:
            "Depende del alcance. Una landing page suele tomar de 1 a 2 semanas, y un sitio completo con integraciones de 3 a 6 semanas. Después de la llamada te entrego un cronograma con fechas y entregables claros. Si tienes una fecha que no se mueve —una apertura, una temporada alta, una campaña—, trabajamos hacia atrás desde ella.",
        },
        {
          question: "¿Cuánto cuesta una página web para un negocio?",
          answer:
            "Los planes van desde $349 USD (landing page) hasta $1,499 USD (web completa de 8 a 12 páginas), con el sitio de 4 a 6 páginas en $899 USD. Los precios están publicados: no necesitas una llamada de ventas para conocerlos. En la Revisión Express solo confirmamos cuál te corresponde.",
        },
        {
          question:
            "¿Qué es la Auditoría Digital y en qué se diferencia de un proyecto?",
          answer:
            "La Revisión Express es gratis y es la puerta de entrada: tres minutos de vídeo con lo que se ve desde fuera. La Auditoría Digital ($250 USD) es otra cosa: cinco días hábiles revisando nueve áreas con acceso a tus datos reales —sitio, estructura, diseño, SEO técnico, contenido, presencia local, anuncios, captación y medición— y te entrego un informe priorizado, un vídeo recorriéndolo y una llamada. No es una página: es saber qué hacer primero y por qué. Un proyecto es la ejecución; la auditoría es el mapa, y son cosas separadas que se cobran por separado.",
        },
        {
          question: "¿La auditoría se descuenta si después contrato un proyecto?",
          answer:
            "No, y es a propósito. Antes el diagnóstico se acreditaba entero al proyecto, lo que en la práctica lo convertía en un paso de venta: mi incentivo era encontrar razones para venderte algo. Cobrando la auditoría aparte puedo entregarte un informe que diga «tu sitio está bien, no lo toques» sin perder nada. El informe es tuyo en cualquier caso, y lo puedes ejecutar conmigo, con tu equipo o con otro proveedor.",
        },
        {
          question: "¿Qué diferencia hay entre Soporte Web y Crecimiento+?",
          answer:
            "Soporte Web (desde $79 USD/mes) mantiene tu página viva: seguridad, velocidad, respaldos, cambios menores y tu reporte mensual. Crecimiento+ ($349 USD/mes) incluye todo eso y además trabaja para que te encuentren: Perfil de Empresa en Google, publicaciones, gestión de reseñas, SEO local y optimización para que las búsquedas con IA te citen. Uno cuida lo que ya tienes; el otro te trae clientes nuevos.",
        },
        {
          question: "¿Hay contrato de permanencia?",
          answer:
            "En ninguno hay contrato de 12 meses. Soporte Web y Crecimiento+ se cancelan de un mes a otro, sin penalización y sin tener que llamar a nadie: me escribes por WhatsApp y listo. El único con compromiso es Web + Marketing + SEO: pide un mínimo de 3 meses, porque los anuncios y el SEO no dan resultados reales en 30 días y no quiero cobrarte por un mes suelto que no te va a servir. Cumplido ese plazo, se cancela igual que los demás. Prefiero que te quedes porque funciona, no porque firmaste.",
        },
        {
          question: "¿Trabajas con negocios en Estados Unidos aunque no estés aquí?",
          answer:
            "Sí, y es la mayor parte de mi trabajo. Todo se hace en remoto y en español, por WhatsApp, en tu horario. La diferencia con una agencia grande es que hablas siempre con el dueño de esta, no con un ejecutivo de cuenta distinto cada mes.",
        },
        {
          question: "¿Puede ser bilingüe, en inglés y español?",
          answer:
            "Sí, y para un negocio hispano en EE. UU. suele ser lo correcto: tus clientes actuales te buscan en español y los nuevos, muchas veces, en inglés. Construyo las dos versiones con URLs separadas para que Google indexe ambas — este mismo sitio funciona así.",
        },
        {
          question: "¿Incluyen dominio y hosting?",
          answer:
            "Sí. Te oriento y configuro dominio, hosting y correo profesional. Si ya cuentas con ellos, trabajo sobre tu infraestructura actual sin problema.",
        },
        {
          question: "¿Pueden integrar WhatsApp, formularios o CRM?",
          answer:
            "Por supuesto. Conecto formularios, botones de WhatsApp, calendarios de citas, CRM y automatizaciones para que cada prospecto quede registrado y con seguimiento automático — algo que agradeces cuando tienes el día lleno.",
        },
        {
          question: "¿Mi sitio web será editable?",
          answer:
            "Según tus necesidades. Construyo sitios estáticos de alto rendimiento o estructuras editables con panel de administración cuando necesitas actualizar contenido con frecuencia.",
        },
        {
          question: "¿Qué necesito para empezar?",
          answer:
            "Solo la Revisión Express. En ella entiendo tu negocio, tus servicios, tu cliente ideal y la acción que quieres generar: llamadas, citas o mensajes.",
        },
      ],
    },
    testimonials: {
      eyebrow: "// testimonios",
      titleA: "Negocios que ya",
      titleHighlight: "ganan tiempo",
      titleB: "trabajando conmigo",
      subtitle:
        "Esto dicen quienes ya trabajan conmigo, con el enlace a su sitio.",
      visitSite: "Ver su sitio",
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
        "Elige tu horario. Antes de la llamada te grabo un vídeo de tres minutos con lo que encuentro. Sin costo y sin llamada de ventas.",
    },
    contact: {
      eyebrow: "// contacto",
      titleA: "Déjame tus datos y te escribo",
      titleHighlight: "en menos de 24 horas",
      subtitle:
        "La vía más rápida y la que menos te compromete: tu nombre, tu WhatsApp y qué necesitas. Sin agendar nada y sin tecnicismos.",
      toggle: "Prefiero dejar mis datos y que me contacten",
      toggleNote: "Respondo en menos de 24 horas.",
      perks: [
        "Respuesta en menos de 24 horas",
        "Te atiendo yo directo, sin intermediarios",
        "Sin costo ni compromiso",
      ],
      directTitle: "¿Prefieres escribirme directo?",
      fieldName: "Nombre",
      fieldEmail: "Correo",
      fieldPhone: "WhatsApp",
      fieldType: "Tipo de proyecto",
      fieldMessage: "Cuéntame sobre tu negocio",
      optionalTag: "opcional",
      phName: "Ej: María González",
      phEmail: "maria@minegocio.com",
      phPhone: "614 123 4567",
      phMessage:
        "Ej: tengo un consultorio dental y quiero que los pacientes agenden solos.",
      types: [
        "Sitio web",
        "Landing page",
        "Rediseño",
        "Integraciones / automatización",
        "Otro",
      ],
      submit: "Enviar mensaje",
      sending: "Enviando…",
      success: "¡Gracias! Recibimos tu mensaje y te contactamos muy pronto.",
      error: "No se pudo enviar. Escríbeme por WhatsApp y te atiendo.",
    },
    finalCta: {
      eyebrow: "// revisión express",
      title: "¿Listo para dejar de perder clientes entre mensaje y mensaje?",
      subtitle:
        "Reviso tu presencia digital y te lo grabo en un vídeo de tres minutos. Gratis.",
      ctaPrimary: "Agendar Revisión Express",
      ctaWhatsapp: "Hablar por WhatsApp",
    },
    footer: {
      tagline:
        "ProCode Dev es una agencia de páginas web para negocios dirigida por Cristian Posada, desarrollador web en español. Páginas web para negocios y páginas web para pequeñas empresas en Estados Unidos y México, con captación, automatización y seguimiento conectados.",
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
        "Formularios de cotización y automatización",
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
      subtitle: "Páginas web que generan clientes, en vivo ahora mismo. Ábrelas y júzgalas tú.",
      cta: "Ver todo el portafolio",
    },
    // ── Anclaje de precio en el home (hallazgo #10) ──
    priceAnchor: {
      eyebrow: "// inversión",
      title: "Precios claros, publicados, sin cotización sorpresa",
      subtitle:
        "Los precios están en la página, con lo que incluye cada plan.",
      fromLabel: "desde",
      amount: "349",
      currency: "USD",
      amountNote: "landing page completa · pago único",
      cta: "Ver todos los precios",
    },
    // ── Quién está detrás (hallazgos #11 y #16) ──
    founder: {
      eyebrow: "",
      name: "Cristian Posada",
      role: "Desarrollador · Fundador de ProCode Dev",
      title: "El dueño de la agencia es quien hace el trabajo",
      body:
        "Dirijo ProCode Dev y ejecuto: diseño, desarrollo, SEO y campañas. Un solo responsable desde la primera conversación hasta el seguimiento.",
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
            "Por el servicio que más te deja, no por el sitio completo. Casi siempre arrancamos con una landing page de $349 USD para ese servicio y, si trae clientes, crecemos a un sitio de 4 a 6 páginas. Así pruebas con poco riesgo y con el precio a la vista.",
        },
        {
          question: "¿Cuánto cuesta y por qué no lo veo hasta el final?",
          answer:
            "Sí lo ves: los precios están publicados. Desde $349 USD una landing page hasta $1,499 USD un sitio completo de 8 a 12 páginas. No hay llamada de ventas para conocerlos ni contratos de 12 meses; en la llamada solo confirmamos cuál te corresponde.",
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
            "Esa es justo la idea. Yo me encargo de dominio, hosting, correo, Perfil de Google y configuración. Tú solo me dices qué servicios das y a quién.",
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
          "Diseño de Páginas Web para Negocios en EE. UU. | ProCode",
        description:
          "Diseño de páginas web para negocios en Estados Unidos y México, en español e inglés: sitio, Google, formularios y seguimiento. Desde $349 USD en 24 h.",
        keywords:
          "diseño de páginas web para negocios, páginas web para negocios, agencia de páginas web para negocios, páginas web para pequeñas empresas, página web para mi negocio, sitios web para captar clientes, páginas web que generan clientes, desarrollador web en español, ProCode Dev",
        heroKicker: "Inicio",
      },
      sectors: {
        title:
          "Diseño Web por Giro de Negocio | ProCode Dev",
        description:
          "Diseño web para contratistas, consultorios, abogados, inmobiliarias y contadores. Elige tu giro y ve qué cambia en tu caso, con precios públicos en USD.",
        keywords:
          "diseño web para contratistas, diseño web para consultorios, diseño web para inmobiliarias, diseño web para contadores, diseño web para abogados, diseño web para negocios locales, marketing digital para pymes, páginas web para pymes, páginas web por giro",
        heroTitleA: "Un sistema digital pensado para",
        heroHighlight: "tu giro",
        heroSubtitle:
          "Contratistas, clínicas y consultorios, servicios profesionales, inmobiliarias y despachos contables. Elige tu giro y verás exactamente qué cambia en tu caso.",
      },
      // El hub /servicios/ persigue la intención "servicios de desarrollo web
      // y marketing digital"; las dos hijas pelean cada una su frase propia
      // (ver los `meta` de src/i18n/services.ts). Así no se canibalizan ni
      // compiten con el home, que se queda con "diseño de páginas web".
      services: {
        title: "Servicios de Desarrollo Web y Marketing | ProCode",
        description:
          "Servicios de desarrollo web y marketing digital para negocios: páginas web a la medida desde $349 USD y planes de captación desde $349 USD al mes.",
        keywords:
          "servicios de desarrollo web y marketing digital, agencia de diseño web y marketing digital, agencia de desarrollo web, agencia de marketing digital, empresa de diseño de páginas web, servicio de creación de páginas web, desarrollo web para negocios, marketing digital para negocios, diseño web y posicionamiento, agencia de páginas web para negocios",
        heroTitleA: "Servicios de desarrollo web y",
        heroHighlight: "marketing digital para negocios",
        heroSubtitle:
          "Dos líneas de trabajo que cubren todo el ciclo: páginas web programadas a la medida y el sistema de captación que las llena. Diseño web enfocado en conversión, SEO, Perfil de Empresa en Google, anuncios, automatización y reportes de contactos reales. Trabajamos en remoto con negocios de Estados Unidos y México, en inglés y en español, con precios publicados y respuesta en menos de 24 horas.",
      },
      portfolio: {
        title:
          "Portafolio: Páginas Web Profesionales | ProCode Dev",
        description:
          "Páginas web profesionales para negocios de servicios, salud, construcción e inmobiliaria. Sitios en vivo: ábrelos y juzga el trabajo antes de escribirme.",
        keywords:
          "páginas web profesionales para negocios, portafolio de páginas web, ejemplos de sitios web para negocios, casos de sitios web pymes, diseño web para negocios locales",
        heroTitleA: "Proyectos reales que",
        heroHighlight: "generan oportunidades",
        heroSubtitle:
          "Un portafolio de páginas web profesionales para negocios que querían verse mejor y captar más. Están en vivo: haz clic para verlas funcionando.",
      },
      pricing: {
        title:
          "Cuánto Cuesta una Página Web para un Negocio | ProCode Dev",
        description:
          "Paquetes de diseño de páginas web con precio público: landing $349, sitio de 4–6 páginas $899 y desde $1,499 el grande. Planes mensuales desde $79 USD.",
        keywords:
          "cuánto cuesta una página web para un negocio, precio de una página web profesional, costo de página web para pequeña empresa, paquetes de diseño de páginas web, cuánto cuesta una página web, mantenimiento web mensual",
        heroTitleA: "Precios públicos, en dólares, sin",
        heroHighlight: "llamada de ventas",
        heroSubtitle:
          "Si buscabas cuánto cuesta una página web para un negocio, aquí están los paquetes de diseño de páginas web: lo que ves es lo que pagas. Sin cotización sorpresa y sin contrato de 12 meses. Los planes de mantenimiento se cancelan cuando quieras y el sistema completo de captación solo pide 3 meses.",
      },
      contact: {
        title:
          "Contratar Diseño de Página Web | ProCode Dev",
        description:
          "Agenda tu Revisión Express o escríbeme por WhatsApp. Contratar diseño de página web sin llamada de ventas: los precios ya están publicados en el sitio.",
        keywords:
          "contratar diseño de página web, Agendar Revisión Express, desarrollador web en español, páginas web para negocios",
        heroTitleA: "Escríbeme o agenda,",
        heroHighlight: "como prefieras",
        heroSubtitle:
          "Déjame tu WhatsApp y te contesto en menos de 24 horas, sin agendar nada. Y si prefieres platicarlo en vivo, abajo está mi calendario: 20 minutos, sin costo y sin llamada de ventas.",
      },
    },
    // ── Hub de giros: /negocios ─────────────────────────────────
    sectors: {
      promiseEyebrow: "// la promesa",
      promiseTitle:
        "Tu negocio deja de depender de que alguien se acuerde de darle seguimiento.",
      promiseBody:
        "Entre el interés y el cliente hay una cadena de pasos manuales. Construyo la infraestructura para que no se rompa.",
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
          title: "Precios públicos",
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
          title: "Reporte de contactos reales",
          description:
            "Cada mes te digo cuántas llamadas y mensajes generó tu presencia digital. No cuántas visitas: cuántos clientes potenciales.",
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
          us: "Sin contratos de 12 meses y con los precios publicados en esta misma página.",
        },
        {
          name: "Agencia grande de $3,000/mes",
          them: "Buen trabajo, pero fuera del presupuesto de la mayoría de los negocios.",
          us: "Una décima parte del costo, con el mismo enfoque en captar clientes reales.",
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
      marketsMenuNote: "Working remotely with U.S. businesses.",
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
      ctaWhatsapp: "Message me on WhatsApp",
      free: "Free · 20 min · video review included",
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
        "Website · Acquisition · Intake · Automation · Follow-Up · Analytics",
      audience:
        "Contractors · Clinics & Practices · Professional Services · Real Estate · Accounting & Tax",
    },
    hero: {
      eyebrow: "// digital growth systems",
      titleA: "Small business website design",
      titleHighlight: "across the United States",
      titleB: "",
      subtitle:
        "Website, client acquisition and follow-up in one system, in English and Spanish. Published pricing from $349 USD and a reply in under 24 hours.",
      badges: [
        "Public pricing",
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
          title: "Automation",
          description: "Instant replies, zero manual work.",
        },
        {
          icon: "repeat",
          title: "Follow-up",
          description: "Automatic reminders and reactivation.",
        },
        {
          icon: "trending-up",
          title: "Analytics",
          description: "Contacts and bookings, not visits.",
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
          summary: "Online booking and reminders.",
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
          description: "I connect forms, calendar and CRM.",
        },
        {
          number: "05",
          title: "Optimization",
          description: "I review results and improve monthly.",
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
          description: "Follow-up automation: from form to CRM, with no manual steps.",
        },
        {
          icon: "repeat",
          title: "From one-off job to recurring client",
          description: "Maintenance, second phases and referrals, offered on time.",
        },
        {
          icon: "bar-chart",
          title: "We measure business, not visits",
          description: "Contacts, calls, bookings and where each one came from.",
        },
        {
          icon: "globe",
          title: "Truly bilingual",
          description: "Bilingual website design services: full acquisition and experience in English and Spanish.",
        },
      ],
    },
    caseStudy: {
      eyebrow: "// featured project",
      titleA: "The case you can open and",
      titleHighlight: "judge for yourself",
      name: "Constructora Izcalli",
      badge: "Contractors & construction · Durango",
      url: "https://constructoraizcalli.com/",
      urlLabel: "constructoraizcalli.com",
      image: "/images/proyecto-izcalli.jpg",
      summary:
        "A construction company with years of delivered work and no way to show it. Today that track record is a portfolio you can open in a meeting.",
      challengeTitle: "The problem",
      challengeBody:
        "The work existed, but it lived as loose photos on a phone: every new client had to take the company's word for it.",
      solutionTitle: "What I built",
      solution: [
        "A portfolio of nine built projects, each with its own entry, so the track record is shown instead of described.",
        "A home page with three featured projects: visitors see the caliber of the work before reading a single line of copy.",
        "A capabilities block — engineering, execution, construction — that frames what the company does without turning into a generic service list.",
        "Formal details in plain sight: legal name, legal representative, address, phone and email, which is what anyone awarding a job checks first.",
        "Full technical SEO and structured data for local search: metadata, Open Graph, canonicals and construction-company JSON-LD for Durango.",
      ],
      stackTitle: "Built with",
      stack: ["Astro", "TypeScript", "Tailwind CSS", "Technical SEO", "Editorial design"],
      factsTitle: "By the numbers",
      facts: [
        { value: "9", label: "built projects documented with their own entry" },
        { value: "3", label: "projects featured on the home page" },
        { value: "0", label: "jobs still living only on someone's phone" },
      ],
      visit: "Visit the site",
      cta: "I want a system like this",
    },
    portfolio: {
      eyebrow: "// portfolio",
      titleA: "Real projects that",
      titleHighlight: "generate opportunities",
      subtitle:
        "A selection of professional websites for small businesses that wanted to look sharper and capture better. Click to see them live.",
      viewProject: "View project",
      resultLabel: "Result",
      clientsTitle: "Real clients",
      clientsNote: "Small business website examples that are live today: local business web design case studies with real clients behind them.",
      demosTitle: "Demos & concepts",
      demosNote:
        "Projects I built on my own to show what's possible in each sector. They're not clients: I label them as demos so there's no confusion.",
      cta: "I want a website like this for my business",
      projects: [
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
        "Website design packages with public pricing, in US dollars, no sales call to find out and no 12-month contracts. Choose where to start and grow at your own pace.",
      popular: "Most chosen",
      currencyLabel: "Show prices in",
      currencyMxn: "MXN",
      currencyUsd: "USD",
      currencyNoteMxn:
        "Mexican peso equivalent at a fixed rate of $18 MXN per US dollar. Billing is in USD.",
      currencyNoteUsd: "Small business website pricing in US dollars: how much a small business website costs is published below, monthly website maintenance included.",
      mxnUnit: "MXN",
      mxnUnitMonth: "MXN / month",
      // ── Digital Audit · replaces the $149 Diagnosis (Sept 2026) ──
      // See the Spanish block above and src/i18n/audit.ts for the why.
      advisory: {
        badge: "Paid entry point · charged separately",
        name: "Digital Audit",
        price: "250",
        priceMxn: "4,500",
        currency: "USD",
        priceNote: "one-time · not credited toward a project",
        hook: "For when you know something is off but not which of the pieces it is.",
        description:
          "I review nine areas of your business online with access to your real data — site, structure, design, SEO, local presence, ads, intake, follow-up and measurement — and hand you a prioritized report, a video walking through it, and a call. The plan is yours and you can act on it with whoever you like.",
        homeEyebrow: "// the next step",
        homeTitle: "Want the full plan in writing?",
        prereq:
          "If we have never spoken, start with the Express Review: it is free and for many people it is enough.",
        viewPricing: "See all pricing",
        waText:
          "Hi Cristian, I'm interested in the Digital Audit ($250 USD). I want to know what is broken in my business online and what to fix first.",
        stepsTitle: "How it works (3 phases)",
        steps: [
          {
            name: "Day 1 · Context and access",
            description:
              "A short questionnaire and read-only access: Analytics, Search Console, your Business Profile and your ad accounts if you have them.",
          },
          {
            name: "Days 2 to 4 · The audit",
            description:
              "The nine areas, one at a time, with your data in front of me and against whoever ranks above you in your city.",
          },
          {
            name: "Day 5 · Delivery",
            description:
              "A PDF report with findings ranked by priority, a video walking through it, and a 30-45 minute call once you have read it.",
          },
        ],
        creditNote:
          "The $250 is not deducted from a later project, and that is deliberate: if the project absorbed the audit, my incentive would be to find you reasons to hire me. Charging separately means I can tell you «this is fine, leave it alone».",
        cta: "See the Digital Audit",
      },
      extrasTitle: "Add-on services",
      extrasSubtitle: "Extras to keep your site growing and up to date.",
      note: "These are the real prices, not a reference range: what you see is what you pay for the scope described in each plan. If your project falls outside that scope, I tell you before we start and give you the exact number — never halfway through the work. The Web Support and Growth+ plans are lock-in free: cancel whenever you want. The only one with a commitment is Web + Marketing + SEO, with a 3-month minimum, because ads and SEO need that long to produce real results.",
      // ── Monthly ladder: support → growth → all-in ──
      // Replaces the single maintenance block. The market analysis called for a
      // ceiling to expand into: a $79 client can move to $349 and then $1,100
      // without ever changing vendors.
      monthlyTitle: "Monthly plans: website maintenance and local SEO",
      monthlySubtitle:
        "Monthly website maintenance and local SEO plan pricing, published, with a monthly report of real contacts.",
      monthlyNote:
        "Web Support and Growth+ have no lock-in contract: move up, down or cancel from one month to the next. Web + Marketing + SEO asks for a 3-month minimum and, once that's met, also cancels from one month to the next.",
      monthly: [
        {
          badge: "Base · Continuity",
          name: "Web Support",
          pricePrefix: "from",
          price: "79",
          priceMxn: "1,430",
          currency: "USD / mo",
          currencyMonth: true,
          priceNote: "depending on the size of your site",
          commitmentNote: "",
          tagline: "Your site always up to date",
          description:
            "You don't pay \"in case something breaks\". I keep your site fast, secure and updated, make the changes you need, and every month I tell you how your page performed.",
          features: [
            "Monthly report: contacts, calls, WhatsApp clicks and forms received.",
            "Uptime and speed monitoring: your site always online.",
            "Monthly site backup: if something fails, it's restored.",
            "Security and platform updates.",
            "Up to 3–4 minor changes a month: text, photos, prices, hours, promotions.",
            "1 improvement recommendation per month, based on your numbers.",
            "Priority support for any urgent issue.",
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
          price: "349",
          priceMxn: "6,290",
          currency: "USD / mo",
          currencyMonth: true,
          priceNote: "includes everything in Web Support",
          commitmentNote: "",
          tagline: "Get found, not just exist",
          description:
            "Having a website doesn't help if nobody finds you. This plan works your Google Business Profile, your reviews and your visibility in AI search, which is already where part of your clients come from.",
          features: [
            "Everything in the Web Support plan.",
            "Google Business Profile: setup, verification and full optimization.",
            "Monthly posts on your Google profile plus service and hours updates.",
            "Review management: a system to request them and a reply to every one that lands.",
            "AI search optimization (ChatGPT, Google AI): so you get cited when someone asks for a business like yours.",
            "Local SEO and content: I position you for searches in your city.",
            "Extended monthly report: calls from Google, direction requests and new reviews.",
          ],
          cta: "I want Growth+",
          waText:
            "Hi Cristian, I'm interested in the Growth+ plan ($349 USD/mo) with Google Business Profile, review management and AI search optimization. How do we start?",
          highlighted: true,
        },
        {
          badge: "Ceiling · All-in",
          name: "Web + Marketing + SEO",
          pricePrefix: "from",
          price: "1,100",
          priceMxn: "19,800",
          currency: "USD / mo",
          currencyMonth: true,
          priceNote: "ad budget billed separately",
          commitmentNote:
            "3-month minimum. Ads and SEO need that long to produce real results; before that we're still tuning.",
          tagline: "A complete client-acquisition system",
          description:
            "For the business that no longer wants to depend on referrals and good months. Website, ads, content and SEO working together, with every lead tracked until they book.",
          features: [
            "Everything in the Growth+ plan.",
            "Google Ads and Meta campaign management, with dedicated landing pages.",
            "Ongoing SEO: monthly content, links, and pages per service and per city.",
            "Follow-up automation: every lead gets a reply even when you're on a job site or with a client.",
            "New landing pages for promotions or services at no extra cost.",
            "Monthly report of cost per lead and per closed client.",
            "Monthly strategy call with me.",
          ],
          cta: "Quote my package",
          waText:
            "Hi Cristian, I'm interested in the Web + Marketing + SEO package (from $1,100 USD/mo). I want a complete client-acquisition system for my business. Can we talk?",
          highlighted: false,
        },
      ],
      packages: [
        {
          name: "Landing Page",
          price: "349",
          priceMxn: "6,290",
          currency: "USD",
          pricePrefix: "",
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
            "Hi Cristian, I'm interested in the Landing Page ($349 USD). I want a page 100% focused on capturing clients. Can you tell me more?",
          highlighted: false,
        },
        {
          name: "Website 4–6 pages",
          price: "899",
          priceMxn: "16,190",
          currency: "USD",
          pricePrefix: "",
          tagline: "The favorite of growing businesses",
          description:
            "Your whole business online: a page per service, a structure built to sell and trust from the first click.",
          features: [
            "4 to 6 strategic pages (one per service)",
            "Sales and trust structure",
            "WhatsApp + connected forms",
            "Bilingual English/Spanish if you need it",
            "Base SEO so you get found in your city",
          ],
          cta: "Start my site",
          waText:
            "Hi Cristian, I'm interested in the 4–6 page Website ($899 USD). I want to take my whole business online with a structure that sells. How do we start?",
          highlighted: true,
        },
        {
          name: "Website 8–12 pages",
          price: "1,499",
          priceMxn: "26,990",
          currency: "USD",
          pricePrefix: "from",
          tagline: "Full presence and digital system",
          description:
            "A robust site for businesses with several locations or service lines: more pages, integrations and a clean digital operation.",
          features: [
            "8 to 12 complete pages",
            "Pages per service and per city",
            "Integrations and automation",
            "Lead capture + follow-up system",
            "Advanced technical SEO and launch support",
          ],
          cta: "Quote my site",
          waText:
            "Hi Cristian, I'm interested in the 8–12 page Website (from $1,499 USD) with integrations and follow-up. I'd like a quote. Can we talk?",
          highlighted: false,
        },
      ],
      extras: [
        {
          name: "Website redesign",
          price: "$349 – $1,499",
          priceMxn: "$6,290 – $26,990",
          unit: "USD or more",
          description:
            "Renew image, structure and conversion on your current site without starting from scratch.",
        },
        {
          name: "Website optimization",
          price: "$349",
          priceMxn: "$6,290",
          unit: "USD",
          description:
            "More speed, better experience and CTAs that actually turn visits into messages.",
        },
        {
          name: "Extra page",
          price: "$199",
          priceMxn: "$3,590",
          unit: "USD",
          description: "Add an extra page to a site you already have with me.",
        },
        {
          name: "Urgent tweaks",
          price: "$99",
          priceMxn: "$1,790",
          unit: "USD",
          description:
            "Fast out-of-scope changes, resolved with priority the same day.",
        },
      ],
    },
    integrations: {
      eyebrow: "// integrations",
      title: "I connect your favorite tools",
      subtitle:
        "Your site doesn't live alone: it connects so follow-up happens on its own. A website design company for small business that stops at the design leaves you wiring all of this yourself.",
      items: [
        { icon: "message-circle", name: "WhatsApp", description: "Acquisition and follow-up" },
        { icon: "file-text", name: "Forms", description: "Lead capture" },
        { icon: "calendar", name: "Calendar", description: "Appointment booking" },
        { icon: "database", name: "CRM", description: "Opportunity tracking" },
        { icon: "mail", name: "Email", description: "Automated communication" },
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
          question: "How long does it take to build my website?",
          answer:
            "It depends on scope. A landing page usually takes 1 to 2 weeks, and a full site with integrations 3 to 6 weeks. After the call I give you a timeline with clear dates and deliverables. If you have a date that doesn't move — an opening, a busy season, a campaign — we work backwards from it.",
        },
        {
          question: "How much does a website cost with you?",
          answer:
            "Plans range from $349 USD (landing page) to $1,499 USD (full 8–12 page site), with the 4–6 page site at $899 USD. Pricing is published: you don't need a sales call to see it. The free 15-minute call is just to confirm which one fits you.",
        },
        {
          question:
            "What is the Digital Audit and how is it different from a project?",
          answer:
            "The Express Review is free and it is the entry point: three minutes of video on what is visible from the outside. The Digital Audit ($250 USD) is a different animal: five business days covering nine areas with access to your real data — site, structure, design, technical SEO, content, local presence, ads, intake and measurement — ending in a prioritized report, a video walking through it, and a call. It is not a website: it is knowing what to do first and why. A project is the execution; the audit is the map, and they are separate things charged separately.",
        },
        {
          question: "Is the audit deducted if I later hire a project?",
          answer:
            "No, and that is deliberate. The old diagnosis was credited in full toward the project, which in practice made it a sales step: my incentive was to find reasons to sell you something. Charging for the audit separately means I can hand you a report that says «your site is fine, leave it alone» and lose nothing. The report is yours either way, and you can act on it with me, with your team or with another provider.",
        },
        {
          question: "What's the difference between Web Support and Growth+?",
          answer:
            "Web Support (from $79 USD/mo) keeps your site alive: security, speed, backups, minor changes and your monthly report. Growth+ ($349 USD/mo) includes all of that and also works to get you found: Google Business Profile, posts, review management, local SEO and optimization so AI search cites you. One protects what you have; the other brings you new clients.",
        },
        {
          question: "Is there a lock-in contract?",
          answer:
            "There's no 12-month contract on any plan. Web Support and Growth+ cancel from one month to the next, with no penalty and no call to anyone: you message me on WhatsApp and that's it. The only one with a commitment is Web + Marketing + SEO: it asks for a 3-month minimum, because ads and SEO don't produce real results in 30 days and I don't want to charge you for a single month that won't help you. After that, it cancels like the rest. I'd rather you stay because it works than because you signed.",
        },
        {
          question: "Do you work with U.S. businesses even though you're not here?",
          answer:
            "Yes, and it's most of my work. Everything is done remotely, in Spanish or English, over WhatsApp, on your schedule. The difference from a large agency is that you always talk to the owner of this one, not to a different account executive every month.",
        },
        {
          question: "Can the site be bilingual, English and Spanish?",
          answer:
            "Yes, and for a Hispanic-owned business in the U.S. that's usually the right call: your current clients search in Spanish and many new ones search in English. I build both versions with separate URLs so Google indexes each one — this very site works that way.",
        },
        {
          question: "Do you include domain and hosting?",
          answer:
            "Yes. I guide and set up your domain, hosting and professional email. If you already have them, I work on your current infrastructure without issue.",
        },
        {
          question: "Can you integrate WhatsApp, forms or CRM?",
          answer:
            "Absolutely. I connect forms, WhatsApp buttons, booking calendars, CRM and automations so every lead is registered and followed up automatically — which you'll appreciate when your day is full.",
        },
        {
          question: "Will my website be editable?",
          answer:
            "Depending on your needs. I build high-performance static sites or editable structures with an admin panel when you need to update content frequently.",
        },
        {
          question: "What do I need to get started?",
          answer:
            "Just the free 15-minute call. In it I understand your business, your services, your ideal client and the action you want to drive: calls, bookings or messages.",
        },
      ],
    },
    testimonials: {
      eyebrow: "// testimonials",
      titleA: "Businesses already",
      titleHighlight: "saving time",
      titleB: "with us",
      subtitle:
        "What the businesses already working with me say, with a link to their site.",
      visitSite: "Visit their site",
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
        "Pick your time. Before the call I record a three-minute video with what I find. No cost, no sales pitch.",
    },
    contact: {
      eyebrow: "// contact",
      titleA: "Leave your details and I'll write back",
      titleHighlight: "in under 24 hours",
      subtitle:
        "The fastest route and the one that commits you least: your name, your WhatsApp and what you need. Nothing to schedule and no jargon.",
      toggle: "I'd rather leave my details and be contacted",
      toggleNote: "I reply in under 24 hours.",
      perks: [
        "Reply in under 24 hours",
        "You deal with me directly, no middlemen",
        "Free, no commitment",
      ],
      directTitle: "Prefer to message me directly?",
      fieldName: "Name",
      fieldEmail: "Email",
      fieldPhone: "WhatsApp",
      fieldType: "Project type",
      fieldMessage: "Tell me about your business",
      optionalTag: "optional",
      phName: "e.g. Maria Gonzalez",
      phEmail: "maria@mybusiness.com",
      phPhone: "+1 555 123 4567",
      phMessage:
        "e.g. I run a dental practice and I want patients to book on their own.",
      types: [
        "Website",
        "Landing page",
        "Redesign",
        "Integrations / automation",
        "Other",
      ],
      submit: "Send message",
      sending: "Sending…",
      success: "Thanks! We got your message and we'll contact you very soon.",
      error: "Couldn't send. Message us on WhatsApp and we'll help you.",
    },
    finalCta: {
      eyebrow: "// express review",
      title: "Ready to stop losing clients between messages?",
      subtitle:
        "I review your digital presence and record it in a three-minute video. Free.",
      ctaPrimary: "Book my Express Review",
      ctaWhatsapp: "Talk on WhatsApp",
    },
    footer: {
      tagline:
        "ProCode Dev is a small business web design agency run by Cristian Posada, a bilingual web developer. Website design for small businesses across the United States and Mexico, with client acquisition, follow-up automation and analytics.",
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
        "Quote forms and automation",
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
      subtitle: "Professional websites for small businesses, live right now. Open them and judge for yourself.",
      cta: "See the full portfolio",
    },
    // ── Price anchor on the home page (finding #10) ──
    priceAnchor: {
      eyebrow: "// investment",
      title: "Clear, public pricing with no surprise quote",
      subtitle:
        "Prices are on the page, with what each plan includes.",
      fromLabel: "from",
      amount: "349",
      currency: "USD",
      amountNote: "complete landing page · one-time",
      cta: "See all pricing",
    },
    // ── Who's behind it (findings #11 and #16) ──
    founder: {
      eyebrow: "",
      name: "Cristian Posada",
      role: "Developer · Founder of ProCode Dev",
      title: "The agency owner is the one doing the work",
      body:
        "I run ProCode Dev and I execute: design, development, SEO and campaigns. One person accountable, from the first conversation through follow-up.",
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
            "With the service that pays you best, not the whole site. We usually start with a $349 USD landing page for that one service and, if it brings clients in, grow into a 4–6 page site. Low risk, price in plain sight.",
        },
        {
          question: "What does it cost, and why don't I see it until the end?",
          answer:
            "You do see it: pricing is published. From $349 USD for a landing page to $1,499 USD for a full 8–12 page site. There's no sales call to find out and no 12-month contracts; on the call we just confirm which one fits you.",
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
            "That's exactly the point. I handle domain, hosting, email, Google profile and setup. You just tell me what services you offer and to whom.",
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
          "Small Business Website Design in the U.S. | ProCode",
        description:
          "Small business website design across the United States, in English and Spanish: Google presence, forms and follow-up in one system. From $349 USD.",
        keywords:
          "small business website design, website design for small businesses, small business web design agency, professional websites for small businesses, bilingual website design services, spanish website design services, lead generation websites for small businesses, bilingual web developer, ProCode Dev",
        heroKicker: "Home",
      },
      sectors: {
        title:
          "Website Design by Industry | ProCode Dev",
        description:
          "Website design for contractors, therapists, attorneys, realtors and tax preparers. Pick your industry and see what changes, with public pricing in USD.",
        keywords:
          "contractor website design, therapist website design, real estate website design, tax preparer website design, attorney website design, local business web design, small business digital marketing services, websites by industry",
        heroTitleA: "A digital system built for",
        heroHighlight: "your industry",
        heroSubtitle:
          "Contractors, clinics and practices, professional services, real estate and accounting firms. Pick your industry and you'll see exactly what changes in your case.",
      },
      services: {
        title: "Web Development & Digital Marketing | ProCode Dev",
        description:
          "Web development and digital marketing services for small businesses: custom websites from $349 USD and lead generation plans from $349 USD a month.",
        keywords:
          "web development and digital marketing services, small business web design agency, web design agency, digital marketing agency, website design company for small business, small business web development, small business digital marketing services, local SEO services for small businesses, conversion-focused design",
        heroTitleA: "Web development and",
        heroHighlight: "digital marketing services",
        heroSubtitle:
          "Two lines of work covering the full cycle: custom-coded websites and the lead system that fills them. Conversion-focused design, SEO, Google Business Profile, ads, automation and reporting on real contacts. We work remotely with businesses across the United States and Mexico, in English and Spanish, with published pricing and a reply in under 24 hours.",
      },
      portfolio: {
        title:
          "Portfolio: Small Business Websites | ProCode Dev",
        description:
          "Professional websites for small businesses in services, health, construction and real estate. They're live: open them and judge the work before messaging me.",
        keywords:
          "professional websites for small businesses, portfolio of small business websites, small business website examples, local business web design case studies, website redesign for small business",
        heroTitleA: "Real projects that",
        heroHighlight: "generate opportunities",
        heroSubtitle:
          "A portfolio of small business websites — professional websites for small businesses that wanted to look sharper and capture better — including more than one website redesign for small business owners who already had a site. Click to see them working.",
      },
      pricing: {
        title:
          "How Much a Small Business Website Costs | ProCode Dev",
        description:
          "Website design packages with public pricing: landing $349, 4–6 page site $899, large sites from $1,499 and monthly plans from $79. No 12-month contracts.",
        keywords:
          "how much a small business website costs, small business website pricing, website design packages, how much does a website cost, monthly website maintenance, local SEO plan pricing",
        heroTitleA: "Public pricing, in dollars, with no",
        heroHighlight: "sales call",
        heroSubtitle:
          "If you were looking for how much a small business website costs, here are the website design packages: what you see is what you pay. No surprise quote and no 12-month contract — maintenance plans cancel whenever you want and the full acquisition system only asks for 3 months.",
      },
      contact: {
        title:
          "Hire a Small Business Web Designer | ProCode Dev",
        description:
          "Book your Express Review or message me on WhatsApp. Hire a web designer with no sales call: bilingual website design services and pricing already published.",
        keywords:
          "hire a web designer, bilingual website design services, spanish website design services, bilingual web developer",
        heroTitleA: "Write to me or book a time,",
        heroHighlight: "whichever you prefer",
        heroSubtitle:
          "Leave me your WhatsApp and I reply in under 24 hours, with nothing to schedule — the quickest way to hire a web designer without sitting through a pitch. And if you would rather talk it through, my calendar is right below: 20 minutes, free, and bilingual website design services in English or Spanish.",
      },
    },
    // ── Industry hub: /en/industries ───────────────────────────
    sectors: {
      promiseEyebrow: "// the promise",
      promiseTitle:
        "Your business stops depending on someone remembering to follow up.",
      promiseBody:
        "Between interest and client there's a chain of manual steps. I build the infrastructure so it doesn't break.",
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
          title: "Public pricing",
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
          title: "Real contact reporting",
          description:
            "Every month I tell you how many calls and messages your digital presence generated. Not how many visits: how many potential clients.",
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
          us: "No 12-month contracts, and pricing published on this very page.",
        },
        {
          name: "A $3,000/mo large agency",
          them: "Good work, but outside a small business's budget.",
          us: "A tenth of the cost, with the same focus on winning real clients.",
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

// ============================================================
// Mensaje precargado de WhatsApp según la página (hallazgo #17).
// Antes las 6 páginas mandaban el mismo texto genérico y se perdía
// el contexto de qué estaba viendo el prospecto al escribir.
// ============================================================
const WA_BY_PAGE: Partial<Record<PageKey | "blog", Record<Lang, string>>> = {
  home: {
    es: "Hola Cristian, Vi tu página y me interesa una web para mi negocio. ¿Podemos platicar?",
    en: "Hi Cristian, I saw your site and I'm interested in a website for my business. Can we talk?",
  },
  services: {
    es: "Hola Cristian, Estaba viendo tus servicios y quiero saber cuál le queda a mi negocio.",
    en: "Hi Cristian, I was looking at your services and I want to know which one fits my business.",
  },
  webDev: {
    es: "Hola Cristian, Estaba viendo tu página de desarrollo web y quiero una página web para mi negocio. ¿Cómo empezamos?",
    en: "Hi Cristian, I was on your web development page and I want a website for my business. How do we start?",
  },
  digitalMarketing: {
    es: "Hola Cristian, Estaba viendo tu página de marketing digital y quiero que me lleguen más clientes. ¿Podemos platicar?",
    en: "Hi Cristian, I was on your digital marketing page and I want more clients coming in. Can we talk?",
  },
  audit: {
    es: "Hola Cristian, Me interesa la Auditoría Digital ($250 USD). Quiero saber qué está fallando en mi negocio en línea y en qué orden arreglarlo.",
    en: "Hi Cristian, I'm interested in the Digital Audit ($250 USD). I want to know what is broken in my business online and what to fix first.",
  },
  markets: {
    es: "Hola Cristian, Vi tu página y tengo un negocio en Estados Unidos. Quiero saber cómo trabajas a distancia.",
    en: "Hi Cristian, I have a business in the U.S. and I'd like to know how you work remotely.",
  },
  sectors: {
    es: "Hola Cristian, Vi tu página para mi giro y quiero saber cómo me puedes ayudar con la presencia digital de mi negocio.",
    en: "Hi Cristian, I saw your page for my industry and I'd like to know how you can help my business online.",
  },
  portfolio: {
    es: "Hola Cristian, Vi tu portafolio y quiero algo parecido para mi negocio. ¿Cómo empezamos?",
    en: "Hi Cristian, I saw your portfolio and I want something similar for my business. How do we start?",
  },
  pricing: {
    es: "Hola Cristian, Estoy viendo tus precios y tengo una duda antes de agendar.",
    en: "Hi Cristian, I'm looking at your pricing and I have a question before booking.",
  },
  contact: {
    es: "Hola Cristian, Prefiero escribirte por aquí en vez de agendar. Te cuento qué necesito.",
    en: "Hi Cristian, I'd rather message you here than book a slot. Let me tell you what I need.",
  },
  blog: {
    es: "Hola Cristian, Estaba leyendo un artículo de tu blog y me surgió una duda sobre mi negocio.",
    en: "Hi Cristian, I was reading an article on your blog and a question about my business came up.",
  },
};

export function waHref(page: PageKey | "blog", lang: Lang): string {
  // Las páginas de segmento heredan el mensaje del hub del nicho: el contexto
  // («tengo un negocio») es el mismo y evita mantener seis textos casi
  // idénticos que se desincronizan a la primera edición.
  const key = (SEGMENT_KEYS as readonly string[]).includes(page)
    ? "sectors"
    : (["texas", "florida", "california"] as readonly string[]).includes(page)
      ? "markets"
      : page;
  const text =
    WA_BY_PAGE[key as PageKey | "blog"]?.[lang] ?? WA_BY_PAGE.home![lang];
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}
