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
// Arquitectura de contenido (reposicionamiento de agosto de 2026):
//   /impuestos  ·  /en/tax-pros   → hub del nicho «Tax & Accounting Firms»
//   └── 6 páginas de segmento colgando del hub, una por oficio. Cada una
//       existe porque el prospecto se busca a sí mismo por su título
//       («enrolled agent website», «bookkeeper website»), no por la
//       categoría genérica. Las URLs del hub NO se renombraron: ya están
//       indexadas y el coste de romperlas supera la ganancia semántica.
export type PageKey =
  | "home"
  | "services"
  | "tax"
  | "taxProfessionals"
  | "enrolledAgents"
  | "cpas"
  | "bookkeepers"
  | "taxResolution"
  | "accountingFirms"
  | "portfolio"
  | "pricing"
  | "contact"
  | "privacy"
  | "terms";

export const PAGES: Record<PageKey, Record<Lang, string>> = {
  home: { es: "/", en: "/en/" },
  services: { es: "/servicios", en: "/en/services" },
  tax: { es: "/impuestos", en: "/en/tax-pros" },
  taxProfessionals: {
    es: "/preparadores-de-impuestos",
    en: "/en/tax-professionals",
  },
  enrolledAgents: { es: "/enrolled-agents", en: "/en/enrolled-agents" },
  cpas: { es: "/cpas", en: "/en/cpas" },
  bookkeepers: { es: "/bookkeepers", en: "/en/bookkeepers" },
  taxResolution: { es: "/resolucion-fiscal", en: "/en/tax-resolution" },
  accountingFirms: { es: "/despachos-contables", en: "/en/accounting-firms" },
  portfolio: { es: "/portafolio", en: "/en/portfolio" },
  pricing: { es: "/precios", en: "/en/pricing" },
  contact: { es: "/contacto", en: "/en/contact" },
  privacy: { es: "/aviso-de-privacidad", en: "/en/privacy-policy" },
  terms: { es: "/terminos-y-condiciones", en: "/en/terms-of-service" },
};

/** Segmentos que cuelgan del hub del nicho (orden del menú desplegable). */
export const SEGMENT_KEYS = [
  "taxProfessionals",
  "enrolledAgents",
  "cpas",
  "bookkeepers",
  "taxResolution",
  "accountingFirms",
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
  calendly: "https://calendly.com/procodedev/meeting-procode",
  web3formsKey: "9659bbb8-915d-4842-8981-a261c0faf9ff",
  instagram: "https://www.instagram.com/procode.systems/",
  linkedin: "https://www.linkedin.com/in/cristian-posada-891401291/",
  facebook: "https://www.facebook.com/ProCodeSystems",
  city: "Estados Unidos",
  cityFull: "Estados Unidos · atención remota en español",
  founderName: "Cristian Posada",
  founderPhoto: "/images/cristian-posada.jpg",
};

// Moneda: tras el análisis de mercado de agosto de 2026, el mercado principal
// pasa a ser el negocio de servicios latino en EE. UU. USD es ahora la vista
// por defecto y MXN queda como opción (tipo de cambio fijo, arriba del spot
// para absorber movimiento cambiario sin retocar precios).
export const FX_USD_MXN = 18;

export const translations = {
  es: {
    langName: "ES",
    otherLangName: "EN",
    nav: {
      home: "Inicio",
      services: "Servicios",
      tax: "Firmas fiscales",
      taxOverview: "Ver todo el nicho",
      taxMenuNote: "Una página por oficio, con lo que cada uno necesita.",
      portfolio: "Portafolio",
      pricing: "Precios",
      blog: "Blog",
      contact: "Contacto",
      cta: "Agendar llamada gratis",
    },
    common: {
      // Una sola oferta de entrada y una sola etiqueta de botón en todo el
      // sitio: la llamada gratis de 15 min. El Diagnóstico de $149 vive solo
      // en /precios como paso 2.
      ctaPrimary: "Agendar llamada gratis",
      ctaWhatsapp: "Escribir por WhatsApp",
      free: "Gratis · 15 min · sin compromiso",
      viewServices: "Ver servicios",
    },
    // ── Posicionamiento (agosto 2026) ──────────────────────────────
    // ProCode dejó de venderse como «páginas web para despachos de
    // impuestos». Una página es un entregable; el problema del cliente es
    // el sistema completo con el que consigue, recibe, atiende y retiene
    // clientes. La categoría nueva es «sistemas digitales de crecimiento
    // para firmas fiscales y contables», y todo el copy del sitio cuelga de
    // esa frase.
    brand: {
      line: "Digital Growth Systems for Tax & Accounting Firms",
      lineEs: "Sistemas digitales de crecimiento para firmas fiscales y contables",
      stack:
        "Sitio web · Captación · Intake · Automatización · Seguimiento · Analítica",
      audience:
        "Preparadores de impuestos · Enrolled Agents · CPAs · Bookkeepers · Resolución fiscal · Despachos contables",
    },
    hero: {
      eyebrow: "// digital growth systems · tax & accounting firms · ee. uu.",
      titleA: "Sistemas digitales de crecimiento para",
      titleHighlight: "firmas fiscales y contables",
      titleB: "",
      subtitle:
        "Soy Cristian Posada. No entrego solo una página: conecto tu sitio, tu captación, tu intake, tus citas y tu seguimiento en un sistema, para que tu firma consiga y atienda más clientes con menos trabajo manual. Todo en español, por WhatsApp, con una sola persona responsable.",
      badges: [
        "Precios públicos",
        "Sin contrato de permanencia",
        "Bilingüe inglés/español",
      ],
      cardLabel: "El sistema",
      cardTitle: "De prospecto a cliente que regresa cada año",
      cardText:
        "Sitio, Perfil de Empresa en Google, formularios, agenda, WhatsApp y seguimiento trabajando como una sola pieza.",
      cardCta: "Agendar llamada gratis",
      panelTitle: "Lo que queda funcionando",
      panelItems: [
        "Una página por servicio, para que llegue el cliente correcto",
        "Intake que recoge los datos antes de la primera llamada",
        "Agenda en línea conectada a tu calendario",
        "Seguimiento automático a quien no respondió",
      ],
      chips: ["Tax Pros & EA", "CPAs & Bookkeepers", "Tax Resolution"],
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
          description:
            "Una página por servicio, en inglés y español, construida para que te elijan y no solo para que te vean.",
        },
        {
          icon: "target",
          title: "Captación",
          description:
            "Perfil de Empresa en Google, SEO local, reseñas y campañas para que el prospecto correcto te encuentre.",
        },
        {
          icon: "clipboard-check",
          title: "Intake",
          description:
            "Formularios que recogen documentos y datos antes de la primera llamada, no después de tres correos.",
        },
        {
          icon: "workflow",
          title: "Automatización",
          description:
            "Cada contacto entra a tu CRM, recibe respuesta y queda registrado, aunque tú estés en plena temporada.",
        },
        {
          icon: "repeat",
          title: "Seguimiento",
          description:
            "Recordatorios de cita, reactivación de clientes del año pasado y avisos de fechas límite por email o WhatsApp.",
        },
        {
          icon: "trending-up",
          title: "Analítica",
          description:
            "Leads, llamadas, citas y de dónde vinieron. Números de negocio, no «1,400 visitas este mes».",
        },
      ],
    },
    // ── El ciclo del cliente de una firma fiscal ──────────────────
    // La diferenciación #1: diseñamos alrededor del recorrido del cliente y
    // del calendario fiscal, no alrededor de una lista de páginas.
    system: {
      eyebrow: "// cómo lo pensamos",
      titleA: "No diseñamos páginas. Diseñamos el",
      titleHighlight: "recorrido de tu cliente",
      subtitle:
        "Una firma fiscal no vive de visitas: vive de retornos presentados y de clientes que regresan en enero. Por eso construimos hacia atrás, desde el cliente que ya se quedó contigo, y cada pieza del sistema resuelve una etapa concreta de ese recorrido.",
      stagesLabel: "Etapas",
      buildLabel: "Qué construimos aquí",
      stages: [
        {
          icon: "search",
          step: "01",
          name: "Te encuentran",
          summary: "Prospecto → servicio correcto",
          description:
            "Quien busca «tax resolution» no busca lo mismo que quien busca «bookkeeping mensual». Si aterrizan en la misma página genérica, pierdes a los dos.",
          build: [
            "Página por servicio y por ciudad",
            "Perfil de Empresa en Google optimizado",
            "SEO local y visibilidad en búsqueda con IA",
          ],
        },
        {
          icon: "shield",
          step: "02",
          name: "Te creen",
          summary: "Confianza",
          description:
            "Antes de darte sus W-2 o el estado de cuenta de su negocio, necesitan ver credenciales, reseñas y una firma que se ve seria.",
          build: [
            "Credenciales visibles: PTIN, EA, CPA, años de práctica",
            "Sistema para pedir y responder reseñas",
            "Contenido que explica el proceso sin tecnicismos",
          ],
        },
        {
          icon: "clipboard-check",
          step: "03",
          name: "Te contactan",
          summary: "Lead → intake",
          description:
            "El punto donde más se pierde. Un formulario de «nombre y mensaje» te obliga a tres correos para saber si el caso te sirve.",
          build: [
            "Formulario de intake por tipo de servicio",
            "Carga de documentos segura",
            "Calificación previa: individual, negocio o resolución",
          ],
        },
        {
          icon: "calendar",
          step: "04",
          name: "Te agendan",
          summary: "Cita → seguimiento",
          description:
            "En temporada nadie tiene tiempo de perseguir a quien llenó un formulario y no volvió a escribir.",
          build: [
            "Agenda en línea conectada a tu calendario",
            "Recordatorios automáticos de cita y de documentos",
            "Seguimiento a quien no respondió, sin que tú lo hagas",
          ],
        },
        {
          icon: "repeat",
          step: "05",
          name: "Se quedan",
          summary: "Cliente → retención → referidos",
          description:
            "Un cliente de tax prep vale una vez al año. El mismo cliente con bookkeeping, payroll o tax planning vale todo el año.",
          build: [
            "Campañas de reactivación antes de cada temporada",
            "Servicios recurrentes presentados en el momento correcto",
            "Sistema de reseñas y referidos después de cada entrega",
          ],
        },
      ],
      closingTitle: "El resultado",
      closingBody:
        "Menos trabajo manual entre el momento en que alguien se interesa y el momento en que se convierte en una oportunidad atendida. Eso es lo que se mide, y es lo que aparece en tu reporte mensual.",
    },
    services: {
      eyebrow: "// lo que construyo",
      titleA: "Cada pieza del sistema, y por qué la necesita una",
      titleHighlight: "firma fiscal",
      titleB: "",
      subtitle:
        "Puedes empezar por una sola pieza o montar el sistema completo. Lo que no hago es venderte una página bonita y dejarte el resto del problema.",
      items: [
        {
          icon: "layout",
          category: "Sitio web",
          title: "Un sitio con una página por servicio",
          description:
            "Tax prep individual, business returns, bookkeeping, payroll, resolución: cada servicio con su propia página, su propio mensaje y su propio formulario. Es lo que hace que llegue el cliente que quieres, no cualquiera.",
        },
        {
          icon: "target",
          category: "Captación de clientes",
          title: "Que te encuentren cuando buscan tu servicio",
          description:
            "Perfil de Empresa en Google creado y optimizado, SEO local por ciudad y por servicio, gestión de reseñas y, si tiene sentido, campañas con landing dedicada. La mayoría de las llamadas de una firma local salen de aquí.",
        },
        {
          icon: "clipboard-check",
          category: "Intake",
          title: "Formularios que hacen la primera entrevista por ti",
          description:
            "Intake por tipo de servicio, con carga de documentos y preguntas de calificación. Llegas a la primera llamada sabiendo si el caso te conviene y con la mitad de la información ya capturada.",
        },
        {
          icon: "workflow",
          category: "Automatización",
          title: "Nada se queda sin respuesta en temporada",
          description:
            "Conecto formularios, WhatsApp, calendario, CRM y correo para que cada prospecto entre registrado, reciba respuesta inmediata y quede en una lista con seguimiento — sin que dependas de acordarte.",
        },
        {
          icon: "repeat",
          category: "Seguimiento y retención",
          title: "Clientes que regresan cada enero",
          description:
            "Recordatorios de cita y de documentos, reactivación de los clientes del año pasado, avisos de fechas límite y presentación de servicios recurrentes en el momento en que sí los escuchan.",
        },
        {
          icon: "sparkles",
          category: "Búsqueda con IA",
          title: "Que ChatGPT y Google AI te citen",
          description:
            "Cada vez más contribuyentes preguntan a una IA en vez de buscar en Google. Estructuro tu información y tus credenciales para que te mencionen cuando alguien pregunte por una firma como la tuya.",
        },
        {
          icon: "trending-up",
          category: "Analítica",
          title: "Medimos negocio, no visitas",
          description:
            "Leads, llamadas, formularios, citas agendadas y de qué fuente vino cada una. Cada mes recibes el reporte con los números que sí deciden si esto te está funcionando.",
        },
      ],
    },
    process: {
      eyebrow: "// cómo trabajo",
      titleA: "Un proceso claro, estratégico y enfocado en",
      titleHighlight: "resultados",
      subtitle:
        "No trabajo al azar. Un proceso claro significa menos vueltas, menos tiempo perdido y una web lista para vender más rápido.",
      steps: [
        {
          number: "01",
          title: "Descubrimiento",
          description:
            "Entendemos tu negocio, tus objetivos, tu audiencia y el problema digital que necesitas resolver.",
        },
        {
          number: "02",
          title: "Estrategia",
          description:
            "Definimos la estructura, mensajes, secciones y flujo ideal para convertir visitantes en oportunidades.",
        },
        {
          number: "03",
          title: "Diseño y desarrollo",
          description:
            "Construyo una experiencia digital profesional, clara, rápida y alineada con tu marca.",
        },
        {
          number: "04",
          title: "Integración y lanzamiento",
          description:
            "Conecto formularios, WhatsApp, calendario, CRM o herramientas necesarias para operar mejor.",
        },
        {
          number: "05",
          title: "Optimización",
          description:
            "Reviso resultados, detecto mejoras y mantengo la estructura digital en evolución.",
        },
      ],
    },
    // Las cinco capas de diferenciación. Sustituyen a seis afirmaciones que
    // podría firmar cualquier estudio de diseño («velocidad», «móvil»,
    // «mensajes claros»). Estas cinco solo las puede sostener alguien que
    // trabaja con firmas fiscales.
    why: {
      eyebrow: "// por qué ProCode Dev",
      titleA: "Technology + Growth + Operations",
      titleHighlight: "para firmas fiscales",
      titleB: "y contables.",
      subtitle:
        "Cualquiera puede hacerte una página. Estas cinco cosas son las que cambian cuando quien la construye entiende cómo factura realmente una firma fiscal.",
      philosophyTitle: "En una frase",
      philosophyText:
        "ProCode construye sistemas digitales de crecimiento para firmas fiscales y contables, conectando captación, sitio web, intake, citas y seguimiento para generar y atender más oportunidades con menos trabajo manual.",
      items: [
        {
          icon: "calendar",
          title: "Diseñamos alrededor del ciclo fiscal",
          description:
            "Temporada alta, extensiones, bookkeeping recurrente, resolución, advisory y clientes que vuelven cada año. La estacionalidad del sector está documentada; tu infraestructura digital debería reconocerla en vez de ignorarla.",
        },
        {
          icon: "workflow",
          title: "Conectamos marketing con operación",
          description:
            "Landing → formulario → agenda → CRM → seguimiento → email, SMS o WhatsApp → analítica. La promesa no es una web bonita: es eliminar la fricción entre alguien interesado y una oportunidad atendida.",
        },
        {
          icon: "repeat",
          title: "Convertimos una práctica estacional en negocio de todo el año",
          description:
            "Muchas firmas viven de enero a abril. Estructuramos y presentamos los servicios que ya ofreces —bookkeeping, payroll, tax planning, formación de empresas, representación— para que el resto del calendario también produzca.",
        },
        {
          icon: "bar-chart",
          title: "Medimos negocio, no métricas de vanidad",
          description:
            "Leads, consultas, llamadas, citas y fuente de adquisición. No «1,400 visitantes este mes». Si no puedes tomar una decisión con un número, ese número no va en tu reporte.",
        },
        {
          icon: "globe",
          title: "Bilingüe como ventaja, no como producto",
          description:
            "Si atiendes comunidad hispana, construimos captación y experiencia en inglés y español con la misma naturalidad. No es todo lo que somos; es algo que muchas agencias no ejecutan bien.",
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
      name: "Cristian Posada",
      badge: "Marca personal · Hub digital",
      url: "https://cristianposada.com/",
      urlLabel: "cristianposada.com",
      image: "/images/proyecto-cristian-posada.jpg",
      summary:
        "Un hub de marca personal que reúne en un solo sitio la agencia, los proyectos, el contenido y el blog — y convierte al visitante en una conversación de WhatsApp sin pasar por un formulario que nadie contesta.",
      challengeTitle: "El problema",
      challengeBody:
        "Cuatro proyectos distintos —desarrollo web, infraestructura de redes, contenido en YouTube y marca personal— repartidos entre redes sociales y enlaces sueltos. Quien llegaba por un video no encontraba la agencia, y quien llegaba por la agencia no veía la trayectoria detrás.",
      solutionTitle: "Qué construí",
      solution: [
        "Arquitectura de una sola página con seis secciones y navegación ancla, para que cualquier enlace de redes caiga en el punto exacto.",
        "Catálogo de proyectos filtrable que conecta el ecosistema completo: ProCode Dev, ProCode Systems y el canal de YouTube.",
        "Blog propio con entradas indexables, que alimenta el posicionamiento del dominio principal.",
        "Formulario de contacto que abre WhatsApp con el mensaje ya redactado: cero fricción y cero correos sin responder.",
        "SEO técnico completo: metadatos, Open Graph, imagen social, canónicas y robots configurados desde el primer despliegue.",
      ],
      stackTitle: "Con qué está hecho",
      stack: ["Astro", "React", "TypeScript", "Tailwind CSS", "SEO técnico", "Blog"],
      factsTitle: "En números",
      facts: [
        { value: "6", label: "secciones en una sola página" },
        { value: "3", label: "proyectos conectados en un ecosistema" },
        { value: "0", label: "formularios que terminan en un correo sin leer" },
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
      cta: "Quiero un sitio así para mi negocio",
      clientsTitle: "Clientes reales",
      clientsNote: "Sitios en vivo, con negocios atendiendo por ellos hoy.",
      demosTitle: "Demos y conceptos",
      demosNote:
        "Proyectos que construí por mi cuenta para mostrar lo que se puede hacer en cada sector. No son clientes: los marco como demo para que no haya confusión.",
      projects: [
        {
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
          name: "Herrera Tax & Advisory — TaxPro",
          kind: "demo",
          result: "",
          url: "https://demo-taxpro.procodedev.com/",
          image: "/images/demo-taxpro.jpg",
          badge: "Servicios fiscales · Demo",
          description:
            "Sitio bilingüe para un despacho fiscal y contable en EE. UU.: servicios, agenda de consulta gratuita y captación enfocada en confianza.",
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
        "Precios públicos, en dólares, sin llamada de ventas para conocerlos y sin contrato de permanencia. Elige por dónde empezar y crece a tu ritmo.",
      popular: "Más elegido",
      currencyLabel: "Ver precios en",
      currencyMxn: "MXN",
      currencyUsd: "USD",
      currencyNoteMxn:
        "Equivalencia en pesos mexicanos a tipo de cambio fijo de $18 MXN por dólar. La facturación se hace en USD.",
      currencyNoteUsd: "Precios en dólares estadounidenses.",
      mxnUnit: "MXN",
      mxnUnitMonth: "MXN / mes",
      advisory: {
        badge: "Paso 2 · Después de la llamada",
        name: "Diagnóstico de Presencia Digital",
        price: "149",
        priceMxn: "2,690",
        currency: "USD",
        priceNote: "pago único · acreditable a tu proyecto",
        hook: "Cuando ya hablamos y quieres el plan completo por escrito.",
        description:
          "La llamada gratis de 15 minutos te da una primera lectura. Esto es lo que sigue si quieres profundidad: analizo a fondo cómo te encuentra hoy un cliente cuando busca 'tax preparer near me' —Google, Maps, reseñas, redes y tu web actual—, comparo tu presencia con la de los despachos que te están ganando y te entrego por escrito un plan de qué mejorar y en qué orden. Te quedas con el plan, decidas o no trabajar conmigo.",
        homeEyebrow: "// el siguiente paso",
        homeTitle: "¿Quieres el plan completo por escrito?",
        prereq:
          "Empieza siempre por la llamada gratis de 15 minutos. Si ahí vemos que necesitas un plan a fondo, este es el paso que sigue.",
        viewPricing: "Ver todos los precios",
        waText:
          "Hola Cristian, Me interesa el Diagnóstico de Presencia Digital ($149 USD). Quiero saber cómo me encuentran hoy mis clientes y recibir un plan de mejoras. ¿Cómo empezamos?",
        stepsTitle: "Cómo funciona (3 fases)",
        steps: [
          {
            name: "Fase 1 · Conozco tu despacho",
            description:
              "Llamada + cuestionario breve: qué servicios das, tu cliente ideal y cómo llegan hoy tus clientes.",
          },
          {
            name: "Fase 2 · Diagnóstico a fondo",
            description:
              "Reviso tu Perfil de Empresa en Google, Maps, reseñas, redes, tu web actual, tu WhatsApp y cómo te ve la búsqueda con IA.",
          },
          {
            name: "Fase 3 · Plan de soluciones",
            description:
              "Recibes de 3 a 5 mejoras priorizadas y una propuesta clara de cómo llevarlas a cabo.",
          },
        ],
        creditNote:
          "Los $149 se te acreditan completos si decides hacer tu proyecto conmigo. En la práctica, el diagnóstico te sale gratis si avanzas.",
        cta: "Quiero mi diagnóstico",
      },
      extrasTitle: "Servicios adicionales",
      extrasSubtitle:
        "Complementos para mantener tu sitio creciendo y actualizado.",
      note: "Estos son los precios reales, no un rango de referencia: lo que ves es lo que pagas por el alcance descrito en cada plan. Si tu proyecto se sale de ese alcance, te lo digo antes de empezar y te paso el número exacto — nunca a mitad del trabajo. Todos los planes mensuales son sin contrato de permanencia: los cancelas cuando quieras.",
      // ── Escalera mensual: soporte → crecimiento → todo incluido ──
      // Sustituye al bloque único de mantenimiento. El objetivo del análisis de
      // mercado era crear techo de expansión: un cliente de $79 puede subir a
      // $349 y de ahí a $1,100 sin cambiar de proveedor.
      monthlyTitle: "Planes mensuales",
      monthlySubtitle:
        "Tu página lanzada es el punto de partida, no la meta. Estos planes la mantienen viva, te consiguen reseñas y hacen que te encuentren — con un reporte mensual de contactos y llamadas reales, no de visitas.",
      monthlyNote:
        "Sin contrato de permanencia en ninguno de los tres. Puedes subir, bajar o cancelar de un mes a otro. Todos incluyen un reporte mensual con los contactos y llamadas que generó tu presencia digital.",
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
          tagline: "Que te encuentren, no solo que existas",
          description:
            "Tener página no sirve si nadie te encuentra. Este plan trabaja tu Perfil de Empresa en Google, tus reseñas y tu visibilidad en las búsquedas con IA, que es por donde ya llega una parte de tus clientes.",
          features: [
            "Todo lo del plan Soporte Web.",
            "Perfil de Empresa en Google: creación, verificación y optimización completa.",
            "Publicaciones mensuales en tu Perfil de Google y actualización de servicios y horarios.",
            "Gestión de reseñas: sistema para pedirlas y respuesta a todas las que llegan.",
            "Optimización para búsqueda con IA (ChatGPT, Google AI): que te citen cuando pregunten por un despacho como el tuyo.",
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
          tagline: "Un sistema completo de captación",
          description:
            "Para el despacho que ya no quiere depender de la temporada. Página, anuncios, contenido y SEO trabajando juntos, con seguimiento de cada prospecto hasta que agenda.",
          features: [
            "Todo lo del plan Crecimiento+.",
            "Gestión de campañas en Google Ads y Meta, con landing pages dedicadas.",
            "SEO continuo: contenido mensual, enlaces y páginas por servicio y por ciudad.",
            "Automatización de seguimiento: cada prospecto recibe respuesta aunque tú estés en temporada.",
            "Landing pages nuevas para promociones o servicios sin costo extra.",
            "Reporte mensual de costo por prospecto y por cliente cerrado.",
            "Llamada estratégica mensual conmigo.",
          ],
          cta: "Cotizar mi paquete",
          waText:
            "Hola Cristian, Me interesa el paquete Web + Marketing + SEO (desde $1,100 USD al mes). Quiero un sistema completo de captación para mi despacho. ¿Podemos platicar?",
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
            "Una sola página, enfocada 100% en convertir. Ideal para lanzar un servicio, una promoción de temporada o una campaña sin complicarte.",
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
          tagline: "El favorito de los despachos en crecimiento",
          description:
            "Tu despacho completo en línea: una página por servicio, estructura pensada para vender y confianza desde el primer clic.",
          features: [
            "4 a 6 páginas estratégicas (una por servicio)",
            "Estructura de ventas y confianza",
            "WhatsApp + formularios conectados",
            "Bilingüe español/inglés si lo necesitas",
            "SEO base para que te encuentren en tu ciudad",
          ],
          cta: "Empezar mi sitio",
          waText:
            "Hola Cristian, Me interesa el Sitio Web de 4 a 6 páginas ($899 USD). Quiero llevar mi despacho completo a internet con una estructura que venda. ¿Cómo iniciamos?",
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
            "Una web robusta para despachos con varias oficinas o servicios: más páginas, integraciones y una operación digital ordenada.",
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
        "Tu página no debe vivir aislada. La conecto con tus herramientas para que la captación y el seguimiento sucedan solos, sin trabajo manual.",
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
        "Antes de iniciar cualquier proyecto quiero que tengas claridad sobre el proceso, el alcance, las integraciones y los siguientes pasos.",
      moreQuestion: "¿Tienes otra pregunta?",
      items: [
        {
          question: "¿Cuánto tiempo toma desarrollar mi sitio web?",
          answer:
            "Depende del alcance. Una landing page suele tomar de 1 a 2 semanas, y un sitio completo con integraciones de 3 a 6 semanas. Después de la llamada te entrego un cronograma con fechas y entregables claros. Si estamos cerca de temporada, lo priorizamos para que esté listo antes del 15 de enero.",
        },
        {
          question: "¿Cuánto cuesta un sitio web con ustedes?",
          answer:
            "Los planes van desde $349 USD (landing page) hasta $1,499 USD (web completa de 8 a 12 páginas), con el sitio de 4 a 6 páginas en $899 USD. Los precios están publicados: no necesitas una llamada de ventas para conocerlos. En la llamada gratis de 15 minutos solo confirmamos cuál te corresponde.",
        },
        {
          question:
            "¿Qué es el Diagnóstico de Presencia Digital y en qué se diferencia de un proyecto?",
          answer:
            "La llamada de 15 minutos es gratis: es la puerta de entrada. El Diagnóstico ($149 USD) es el paso que sigue si quieres profundidad: analizo a fondo cómo te encuentran hoy en Google, Maps, reseñas y búsqueda con IA, te comparo con los despachos que te están ganando y te entrego por escrito un plan priorizado de mejoras. No es una página: es la claridad de saber qué hacer primero. Si luego haces tu proyecto conmigo, se te acredita completo.",
        },
        {
          question: "¿El diagnóstico tiene costo si después contrato un proyecto?",
          answer:
            "No. Los $149 USD del diagnóstico se descuentan por completo del precio de tu proyecto. Si decides avanzar, el diagnóstico te sale gratis; y si no, te quedas con el plan de mejoras de todos modos.",
        },
        {
          question: "¿Qué diferencia hay entre Soporte Web y Crecimiento+?",
          answer:
            "Soporte Web (desde $79 USD/mes) mantiene tu página viva: seguridad, velocidad, respaldos, cambios menores y tu reporte mensual. Crecimiento+ ($349 USD/mes) incluye todo eso y además trabaja para que te encuentren: Perfil de Empresa en Google, publicaciones, gestión de reseñas, SEO local y optimización para que las búsquedas con IA te citen. Uno cuida lo que ya tienes; el otro te trae clientes nuevos.",
        },
        {
          question: "¿Hay contrato de permanencia?",
          answer:
            "En ninguno de los planes. Los mensuales se cancelan de un mes a otro, sin penalización y sin tener que llamar a nadie: me escribes por WhatsApp y listo. Prefiero que te quedes porque funciona, no porque firmaste.",
        },
        {
          question: "¿Trabajas con despachos en Estados Unidos aunque no estés aquí?",
          answer:
            "Sí, y es la mayor parte de mi trabajo. Todo se hace en remoto y en español, por WhatsApp, en tu horario. La diferencia con una agencia grande es que hablas siempre conmigo, no con un ejecutivo de cuenta distinto cada mes.",
        },
        {
          question: "¿Puede ser bilingüe, en inglés y español?",
          answer:
            "Sí, y para un despacho latino en EE. UU. suele ser lo correcto: tus clientes actuales te buscan en español y los nuevos, muchas veces, en inglés. Construyo las dos versiones con URLs separadas para que Google indexe ambas — este mismo sitio funciona así.",
        },
        {
          question: "¿Incluyen dominio y hosting?",
          answer:
            "Sí. Te oriento y configuro dominio, hosting y correo profesional. Si ya cuentas con ellos, trabajo sobre tu infraestructura actual sin problema.",
        },
        {
          question: "¿Pueden integrar WhatsApp, formularios o CRM?",
          answer:
            "Por supuesto. Conecto formularios, botones de WhatsApp, calendarios de citas, CRM y automatizaciones para que cada prospecto quede registrado y con seguimiento automático — algo que agradeces en plena temporada.",
        },
        {
          question: "¿Mi sitio web será editable?",
          answer:
            "Según tus necesidades. Construyo sitios estáticos de alto rendimiento o estructuras editables con panel de administración cuando necesitas actualizar contenido con frecuencia.",
        },
        {
          question: "¿Qué necesito para empezar?",
          answer:
            "Solo la llamada gratis de 15 minutos. En ella entiendo tu despacho, tus servicios, tu cliente ideal y la acción que quieres generar: llamadas, citas o mensajes.",
        },
      ],
    },
    testimonials: {
      eyebrow: "// testimonios",
      titleA: "Negocios que ya",
      titleHighlight: "ganan tiempo",
      titleB: "trabajando conmigo",
      subtitle:
        "No entrego solo una página: entrego tranquilidad. Esto es lo que dicen quienes ya trabajan conmigo — con el enlace a su sitio para que lo compruebes.",
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
      titleA: "Reserva tu",
      titleHighlight: "llamada gratis de 15 min",
      subtitle:
        "Elige el horario que mejor te acomode. En 15 minutos revisamos tu despacho y te digo exactamente qué necesita tu presencia digital. Sin costo, sin compromiso y sin llamada de ventas — los precios ya están publicados.",
    },
    contact: {
      eyebrow: "// contacto",
      titleA: "¿No te acomoda ningún horario? Déjame tus",
      titleHighlight: "datos",
      subtitle:
        "Déjame tu WhatsApp y te escribo yo. Sin compromiso y sin tecnicismos: solo cómo tu negocio puede ahorrar tiempo y vender más.",
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
      eyebrow: "// agenda tu llamada",
      title:
        "¿Listo para que tu firma deje de perder oportunidades entre correo y correo?",
      subtitle:
        "Agenda una llamada de 15 minutos y revisamos juntos qué pieza le falta a tu firma: el sitio, la captación, el intake, la automatización, el seguimiento o la medición. Sin costo y sin llamada de ventas.",
      ctaPrimary: "Agendar llamada gratis",
      ctaWhatsapp: "Hablar por WhatsApp",
    },
    footer: {
      tagline:
        "Soy Cristian Posada. Construyo sistemas digitales de crecimiento para firmas fiscales y contables en Estados Unidos —preparadores de impuestos, Enrolled Agents, CPAs, bookkeepers y firmas de resolución fiscal— conectando sitio web, captación, intake, citas y seguimiento. En inglés y español, con una sola persona responsable.",
      navTitle: "Navegación",
      servicesTitle: "Servicios",
      contactTitle: "Contacto",
      hours: "Lunes a Domingo",
      location: "Atención remota en español a todo Estados Unidos",
      cta: "Agendar llamada gratis",
      rights: "Todos los derechos reservados.",
      privacy: "Aviso de privacidad",
      terms: "Términos y condiciones",
      servicesList: [
        "Sitios web por servicio",
        "Captación y Perfil de Empresa en Google",
        "Intake y carga de documentos",
        "Automatización y CRM",
        "Seguimiento y retención",
        "Analítica y reportes de negocio",
      ],
      segmentsTitle: "Por oficio",
    },
    // ── Franja de proyectos reales en el home (hallazgo #4) ──
    proof: {
      eyebrow: "// trabajo real",
      titleA: "Sistemas que ya están",
      titleHighlight: "trabajando",
      subtitle:
        "No te pido que confíes en lo que digo. Estos sitios están en vivo ahora mismo — ábrelos y júzgalos tú.",
      cta: "Ver todo el portafolio",
    },
    // ── Anclaje de precio en el home (hallazgo #10) ──
    priceAnchor: {
      eyebrow: "// inversión",
      title: "Precios claros, publicados, sin cotización sorpresa",
      subtitle:
        "No tienes que escribirme para saber cuánto cuesta. Los precios están en la página, con lo que incluye cada plan y con planes mensuales para cuando quieras que el sistema siga creciendo.",
      fromLabel: "desde",
      amount: "349",
      currency: "USD",
      amountNote: "landing page completa · pago único",
      cta: "Ver todos los precios",
    },
    // ── Quién está detrás (hallazgos #11 y #16) ──
    founder: {
      eyebrow: "// quién lo hace",
      name: "Cristian Posada",
      role: "Desarrollador · sistemas digitales para firmas fiscales en EE. UU.",
      title: "No es una agencia. Soy yo.",
      body:
        "Cuando me escribes, te contesto yo. Cuando revisamos tu firma, la reviso yo. Y cuando tu sistema esté en línea, sigo siendo yo quien lo mantiene — también en el mes seis, cuando la agencia de turno ya te cambió de ejecutivo tres veces. Trabajo en remoto, en inglés y español, con firmas fiscales y contables en Estados Unidos, y prefiero llevar pocos proyectos bien que muchos a medias.",
      cta: "Agendar llamada gratis",
    },
    // ── FAQ de objeciones antes del CTA final del home (hallazgo #18) ──
    homeFaq: {
      eyebrow: "// antes de agendar",
      titleA: "Las dudas que casi",
      titleHighlight: "siempre me hacen",
      subtitle: "",
      items: [
        {
          question: "¿Cuánto cuesta y por qué no lo veo hasta el final?",
          answer:
            "Sí lo ves: los precios están publicados. Desde $349 USD una landing page hasta $1,499 USD un sitio completo de 8 a 12 páginas. No hay llamada de ventas para conocerlos ni contrato de permanencia; en la llamada solo confirmamos cuál te corresponde.",
        },
        {
          question: "¿La llamada de 15 minutos tiene costo o compromiso?",
          answer:
            "Ninguno de los dos. Son 15 minutos para entender tu despacho y decirte qué necesitas — aunque la respuesta sea que todavía no necesitas una página conmigo.",
        },
        {
          question: "Estoy en EE. UU. y tú no. ¿Cómo funciona eso?",
          answer:
            "En remoto, en español y por WhatsApp, en tu horario. Es como trabajas ya con la mayoría de tus proveedores. La diferencia frente a una agencia es que siempre hablas conmigo, y frente a Fiverr, que en el mes seis sigo contestando.",
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
          "Sistemas Digitales de Crecimiento para Firmas Fiscales y Contables | ProCode Dev",
        description:
          "Sitio web, captación de clientes, intake, agenda, automatización y seguimiento para firmas fiscales y contables en EE. UU.: preparadores de impuestos, Enrolled Agents, CPAs, bookkeepers y resolución fiscal. Precios públicos desde $349 USD, sin contrato de permanencia, en inglés y español.",
        heroKicker: "Inicio",
      },
      tax: {
        title:
          "Tax & Accounting Firms: Sitios Web y Sistemas de Captación | ProCode Dev",
        description:
          "Sistemas digitales de crecimiento para preparadores de impuestos, Enrolled Agents, CPAs, bookkeepers, firmas de resolución fiscal y despachos contables en Estados Unidos. Sitio web, Perfil de Empresa en Google, intake, citas, seguimiento y analítica. Precios públicos, sin contrato.",
        heroTitleA: "Un sistema digital pensado para",
        heroHighlight: "firmas fiscales y contables",
        heroSubtitle:
          "Preparadores de impuestos, Enrolled Agents, CPAs, bookkeepers, firmas de resolución fiscal y despachos contables. Elige tu oficio y verás exactamente qué cambia en tu caso.",
      },
      services: {
        title:
          "Servicios: Web, Captación, Intake, Automatización y Analítica | ProCode Dev",
        description:
          "Las seis piezas del sistema para una firma fiscal o contable: sitio web por servicio, captación con Perfil de Empresa en Google y SEO local, intake con carga de documentos, automatización, seguimiento y reportes de negocio.",
        heroTitleA: "Servicios que convierten tu presencia digital en",
        heroHighlight: "un sistema de captación",
        heroSubtitle:
          "Sitio web, captación, intake, automatización, seguimiento y analítica. Puedes empezar por una pieza o montar el sistema completo.",
      },
      portfolio: {
        title: "Portafolio de Sitios Web | ProCode Dev",
        description:
          "Proyectos reales de sitios web y landing pages que construí para negocios que querían verse más profesionales y captar mejores clientes.",
        heroTitleA: "Proyectos reales que",
        heroHighlight: "generan oportunidades",
        heroSubtitle:
          "Sitios en vivo que construí para negocios que querían verse más profesionales y captar mejor. Haz clic para verlos funcionando.",
      },
      pricing: {
        title: "Precios en USD de Páginas Web y Presencia Digital | ProCode Dev",
        description:
          "Precios públicos en dólares: landing $349, sitio de 4–6 páginas $899, sitio grande desde $1,499. Soporte desde $79/mes, Crecimiento+ $349/mes y paquete Web + Marketing + SEO desde $1,100/mes. Sin contrato de permanencia.",
        heroTitleA: "Precios públicos, en dólares, sin",
        heroHighlight: "llamada de ventas",
        heroSubtitle:
          "Lo que ves es lo que pagas. Sin cotización sorpresa, sin precio oculto y sin contrato de 12 meses: los planes mensuales se cancelan cuando quieras.",
      },
      contact: {
        title: "Contacto | Agenda tu Llamada Gratis de 15 Min | ProCode Dev",
        description:
          "Agenda tu llamada gratis de 15 minutos, o escríbeme por WhatsApp si prefieres. En español, sin compromiso y sin tecnicismos.",
        heroTitleA: "Agenda 15 minutos",
        heroHighlight: "conmigo",
        heroSubtitle:
          "Elige el horario que te acomode y platicamos 15 minutos. Sin costo, sin compromiso y sin llamada de ventas: los precios ya están publicados.",
      },
    },
    // ── Landing de nicho: preparadores de impuestos, bookkeepers, EA y CPA ──
    tax: {
      promiseEyebrow: "// la promesa",
      promiseTitle:
        "Tu firma deja de depender de que alguien se acuerde de darle seguimiento.",
      promiseBody:
        "Tu firma ya hace el trabajo serio: corporaciones, payroll, bookkeeping mensual, representación ante el IRS. Pero entre el momento en que alguien se interesa y el momento en que se convierte en cliente hay una cadena de pasos manuales —contestar, calificar, pedir documentos, agendar, recordar, dar seguimiento— y en temporada esa cadena se rompe. Construyo la infraestructura para que no se rompa, y para que quien te busca encuentre a la firma que ya eres.",
      rtbTitle: "Por qué puedes creerme",
      rtb: [
        {
          icon: "briefcase",
          title: "Casos en el mismo oficio",
          description:
            "No aprendo tu negocio contigo. Ya construí para despachos fiscales y contables, y puedes abrir los sitios y juzgarlos tú.",
        },
        {
          icon: "receipt",
          title: "Precios públicos",
          description:
            "Están en la página, en dólares. Sin llamada de ventas para conocerlos y sin contrato de permanencia.",
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
        "Casi todos los despachos con los que hablo probaron una de estas cuatro. Esto es lo que cambia conmigo.",
      vs: [
        {
          name: "Wix o Squarespace",
          them: "Barato, pero lo armas tú y lo mantienes tú.",
          us: "No tienes que hacerlo tú, ni mantenerlo. En temporada eso vale más que la diferencia de precio.",
        },
        {
          name: "Fiverr",
          them: "Entregan y desaparecen. En el mes seis nadie contesta.",
          us: "Una persona con nombre que sigue respondiendo el mes seis, y el año siguiente.",
        },
        {
          name: "Hibu y similares",
          them: "Contrato de 12 meses, precio que no ves hasta la llamada.",
          us: "Sin contrato de permanencia y con los precios publicados en esta misma página.",
        },
        {
          name: "Agencia de $3,000/mes",
          them: "Buen trabajo, pero fuera del presupuesto de un despacho.",
          us: "Una décima parte del costo, con el mismo enfoque en captar clientes reales.",
        },
      ],
      forTitle: "Trabajo con",
      forItems: [
        "Preparadores de impuestos independientes",
        "Enrolled Agents (EA)",
        "CPAs de práctica pequeña y mediana",
        "Bookkeepers y contabilidad recurrente",
        "Firmas de resolución fiscal y representación",
        "Despachos contables con payroll, ITIN y advisory",
      ],
      segmentsTitle: "Elige tu oficio",
      segmentsSubtitle:
        "Cada uno vende algo distinto, en un mes distinto, a un cliente distinto. Estas son las seis páginas con lo que cambia en cada caso.",
      segmentsCta: "Ver la página",
      seasonTitle: "El calendario manda, y lo sé",
      seasonBody:
        "Tu año no es como el de otros negocios: enero a abril decide casi todo, y el resto del calendario tiene su propia lógica —extensiones en octubre, bookkeeping todos los meses, resolución cuando llega la carta del IRS—. Si empezamos en verano u otoño, llegas a la temporada con el sistema completo trabajando. Si me escribes en febrero, priorizamos lo que se puede lanzar en dos semanas y el resto lo hacemos después del 15 de abril.",
      ctaTitle: "15 minutos, en español, sin compromiso",
      ctaBody:
        "Te digo qué está frenando a tu despacho hoy — aunque la respuesta sea que todavía no necesitas una página conmigo.",
    },
  },

  en: {
    langName: "EN",
    otherLangName: "ES",
    nav: {
      home: "Home",
      services: "Services",
      tax: "Tax & Accounting",
      taxOverview: "See the whole niche",
      taxMenuNote: "One page per practice type, with what each one needs.",
      portfolio: "Portfolio",
      pricing: "Pricing",
      blog: "Blog",
      contact: "Contact",
      cta: "Book a free call",
    },
    common: {
      // One entry offer, one button label across the whole site: the free
      // 15-minute call. The $149 Diagnosis lives only on /pricing as step 2.
      ctaPrimary: "Book a free call",
      ctaWhatsapp: "Message on WhatsApp",
      free: "Free · 15 min · no commitment",
      viewServices: "View services",
    },
    brand: {
      line: "Digital Growth Systems for Tax & Accounting Firms",
      lineEs: "Digital Growth Systems for Tax & Accounting Firms",
      stack: "Websites · Client Acquisition · Intake · Automation · Follow-Up · Analytics",
      audience:
        "Tax Professionals · Enrolled Agents · CPAs · Bookkeepers · Tax Resolution · Accounting Firms",
    },
    hero: {
      eyebrow: "// digital growth systems · tax & accounting firms · united states",
      titleA: "Digital growth systems for",
      titleHighlight: "tax & accounting firms",
      titleB: "",
      subtitle:
        "I'm Cristian Posada. I don't just build a website: I connect your site, client acquisition, intake, scheduling and follow-up into one system, so your firm wins and serves more clients with less manual work. In English or Spanish, over WhatsApp, with one person accountable.",
      badges: ["Public pricing", "No lock-in contract", "Bilingual English/Spanish"],
      cardLabel: "The system",
      cardTitle: "From prospect to a client who comes back every year",
      cardText:
        "Website, Google Business Profile, forms, scheduling, WhatsApp and follow-up working as a single piece.",
      cardCta: "Book a free call",
      panelTitle: "What you end up with",
      panelItems: [
        "One page per service, so the right client is the one who lands",
        "Intake that collects the details before the first call",
        "Online booking wired to your calendar",
        "Automatic follow-up for anyone who went quiet",
      ],
      chips: ["Tax Pros & EA", "CPAs & Bookkeepers", "Tax Resolution"],
    },
    values: {
      eyebrow: "// the system, part by part",
      items: [
        {
          icon: "layout",
          title: "Website",
          description:
            "One page per service, in English and Spanish, built to get you chosen — not just seen.",
        },
        {
          icon: "target",
          title: "Client acquisition",
          description:
            "Google Business Profile, local SEO, reviews and campaigns so the right prospect finds you first.",
        },
        {
          icon: "clipboard-check",
          title: "Intake",
          description:
            "Forms that collect documents and details before the first call, not after three emails.",
        },
        {
          icon: "workflow",
          title: "Automation",
          description:
            "Every contact lands in your CRM, gets an answer and stays on record — even mid-season.",
        },
        {
          icon: "repeat",
          title: "Follow-up",
          description:
            "Appointment reminders, reactivation of last year's clients and deadline notices by email or WhatsApp.",
        },
        {
          icon: "trending-up",
          title: "Analytics",
          description:
            "Leads, calls, appointments and where each one came from. Business numbers, not «1,400 visits».",
        },
      ],
    },
    system: {
      eyebrow: "// how we think about it",
      titleA: "We don't design pages. We design your",
      titleHighlight: "client's journey",
      subtitle:
        "A tax firm doesn't live on traffic: it lives on returns filed and clients who come back in January. So we build backwards, starting from the client who already stayed, and every piece of the system solves one specific stage of that journey.",
      stagesLabel: "Stages",
      buildLabel: "What we build here",
      stages: [
        {
          icon: "search",
          step: "01",
          name: "They find you",
          summary: "Prospect → right service",
          description:
            "Someone searching «tax resolution» isn't searching for the same thing as someone searching «monthly bookkeeping». Land them on the same generic page and you lose both.",
          build: [
            "A page per service and per city",
            "Optimized Google Business Profile",
            "Local SEO and visibility in AI search",
          ],
        },
        {
          icon: "shield",
          step: "02",
          name: "They believe you",
          summary: "Trust",
          description:
            "Before handing over their W-2s or their business statements, they need to see credentials, reviews and a firm that looks like a firm.",
          build: [
            "Visible credentials: PTIN, EA, CPA, years in practice",
            "A system to request and answer reviews",
            "Content that explains the process without jargon",
          ],
        },
        {
          icon: "clipboard-check",
          step: "03",
          name: "They reach out",
          summary: "Lead → intake",
          description:
            "Where most firms lose people. A «name and message» form forces three emails just to learn whether the case is a fit.",
          build: [
            "Intake forms by service type",
            "Secure document upload",
            "Pre-qualification: individual, business or resolution",
          ],
        },
        {
          icon: "calendar",
          step: "04",
          name: "They book",
          summary: "Appointment → follow-up",
          description:
            "In season, nobody has time to chase the person who filled out a form and never wrote back.",
          build: [
            "Online booking wired to your calendar",
            "Automatic appointment and document reminders",
            "Follow-up for the ones who went quiet, without you doing it",
          ],
        },
        {
          icon: "repeat",
          step: "05",
          name: "They stay",
          summary: "Client → retention → referrals",
          description:
            "A tax prep client is worth something once a year. That same client with bookkeeping, payroll or tax planning is worth something all year.",
          build: [
            "Reactivation campaigns before each season",
            "Recurring services presented at the right moment",
            "Reviews and referrals requested after every delivery",
          ],
        },
      ],
      closingTitle: "The outcome",
      closingBody:
        "Less manual work between the moment someone gets interested and the moment they become an opportunity you've actually handled. That's what gets measured, and that's what shows up in your monthly report.",
    },
    services: {
      eyebrow: "// what I build",
      titleA: "Every piece of the system, and why a",
      titleHighlight: "tax firm",
      titleB: "needs it",
      subtitle:
        "You can start with a single piece or build the whole system. What I won't do is sell you a pretty website and leave you the rest of the problem.",
      items: [
        {
          icon: "layout",
          category: "Website",
          title: "A site with one page per service",
          description:
            "Individual tax prep, business returns, bookkeeping, payroll, resolution: each service with its own page, its own message and its own form. That's what makes the client you want the one who lands.",
        },
        {
          icon: "target",
          category: "Client acquisition",
          title: "Get found when they search for your service",
          description:
            "Google Business Profile created and optimized, local SEO by city and by service, review management and, where it makes sense, campaigns with a dedicated landing page. Most calls to a local firm start here.",
        },
        {
          icon: "clipboard-check",
          category: "Intake",
          title: "Forms that run the first interview for you",
          description:
            "Intake by service type, with document upload and qualifying questions. You reach the first call already knowing whether the case fits, with half the information captured.",
        },
        {
          icon: "workflow",
          category: "Automation",
          title: "Nothing goes unanswered in season",
          description:
            "I connect forms, WhatsApp, calendar, CRM and email so every prospect is logged, answered immediately and queued for follow-up — without depending on you remembering.",
        },
        {
          icon: "repeat",
          category: "Follow-up & retention",
          title: "Clients who come back every January",
          description:
            "Appointment and document reminders, reactivation of last year's clients, deadline notices and recurring services offered at the moment people actually listen.",
        },
        {
          icon: "sparkles",
          category: "AI search",
          title: "Get cited by ChatGPT and Google AI",
          description:
            "More and more taxpayers ask an AI instead of searching Google. I structure your information and credentials so you get mentioned when someone asks for a firm like yours.",
        },
        {
          icon: "trending-up",
          category: "Analytics",
          title: "We measure business, not traffic",
          description:
            "Leads, calls, forms, booked appointments and the source of each one. Every month you get the report with the numbers that actually decide whether this is working.",
        },
      ],
    },
    process: {
      eyebrow: "// our process",
      titleA: "A clear, strategic process focused on",
      titleHighlight: "results",
      subtitle:
        "We don't work at random. A clear process means fewer back-and-forths, less wasted time and a site ready to sell faster.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "We understand your business, your goals, your audience and the digital problem you need to solve.",
        },
        {
          number: "02",
          title: "Strategy",
          description:
            "We define the structure, messaging, sections and ideal flow to turn visitors into opportunities.",
        },
        {
          number: "03",
          title: "Design & development",
          description:
            "We build a professional, clear, fast digital experience aligned with your brand.",
        },
        {
          number: "04",
          title: "Integration & launch",
          description:
            "We connect forms, WhatsApp, calendar, CRM or any tools you need to operate better.",
        },
        {
          number: "05",
          title: "Optimization",
          description:
            "We review results, spot improvements and keep your digital structure evolving.",
        },
      ],
    },
    why: {
      eyebrow: "// why ProCode Dev",
      titleA: "Technology + Growth + Operations",
      titleHighlight: "for tax & accounting",
      titleB: "firms.",
      subtitle:
        "Anyone can build you a website. These five things change when the person building it understands how a tax firm actually bills.",
      philosophyTitle: "In one sentence",
      philosophyText:
        "ProCode builds digital growth systems for tax & accounting firms — connecting your website, client acquisition, intake, scheduling and follow-up so your firm can win and serve more clients with less manual work.",
      items: [
        {
          icon: "calendar",
          title: "We design around the tax cycle",
          description:
            "Busy season, extensions, recurring bookkeeping, resolution, advisory and clients who return every year. The seasonality of this sector is well documented; your digital infrastructure should acknowledge it instead of ignoring it.",
        },
        {
          icon: "workflow",
          title: "We connect marketing to operations",
          description:
            "Landing → form → scheduling → CRM → follow-up → email, SMS or WhatsApp → analytics. The promise isn't a pretty website: it's removing the friction between someone interested and an opportunity actually handled.",
        },
        {
          icon: "repeat",
          title: "We turn a seasonal practice into a year-round business",
          description:
            "Many firms live from January to April. We structure and present the services you already offer — bookkeeping, payroll, tax planning, business formation, representation — so the rest of the calendar produces too.",
        },
        {
          icon: "bar-chart",
          title: "We measure business, not vanity metrics",
          description:
            "Leads, consultations, calls, appointments and acquisition source. Not «1,400 visitors this month». If you can't make a decision with a number, that number doesn't belong in your report.",
        },
        {
          icon: "globe",
          title: "Bilingual as an advantage, not as the product",
          description:
            "If you serve Hispanic communities, we build acquisition and experience in English and Spanish with equal fluency. It isn't all we are; it's something many agencies don't execute well.",
        },
      ],
    },
    caseStudy: {
      eyebrow: "// featured project",
      titleA: "The case you can open and",
      titleHighlight: "judge for yourself",
      name: "Cristian Posada",
      badge: "Personal brand · Digital hub",
      url: "https://cristianposada.com/",
      urlLabel: "cristianposada.com",
      image: "/images/proyecto-cristian-posada.jpg",
      summary:
        "A personal-brand hub that pulls the agency, the projects, the content and the blog into a single site — and turns a visitor into a WhatsApp conversation without going through a form nobody answers.",
      challengeTitle: "The problem",
      challengeBody:
        "Four separate projects — web development, network infrastructure, a YouTube channel and a personal brand — scattered across social profiles and loose links. Whoever arrived from a video couldn't find the agency, and whoever arrived from the agency never saw the track record behind it.",
      solutionTitle: "What I built",
      solution: [
        "A single-page architecture with six sections and anchor navigation, so any link from social media lands on the exact spot.",
        "A filterable project catalog that connects the whole ecosystem: ProCode Dev, ProCode Systems and the YouTube channel.",
        "An in-house blog with indexable posts that feeds the main domain's ranking.",
        "A contact form that opens WhatsApp with the message already drafted: zero friction, zero unanswered emails.",
        "Full technical SEO: metadata, Open Graph, social image, canonicals and robots configured from the first deploy.",
      ],
      stackTitle: "Built with",
      stack: ["Astro", "React", "TypeScript", "Tailwind CSS", "Technical SEO", "Blog"],
      factsTitle: "By the numbers",
      facts: [
        { value: "6", label: "sections on a single page" },
        { value: "3", label: "projects connected into one ecosystem" },
        { value: "0", label: "forms that end up in an unread inbox" },
      ],
      visit: "Visit the site",
      cta: "I want a system like this",
    },
    portfolio: {
      eyebrow: "// portfolio",
      titleA: "Real projects that",
      titleHighlight: "generate opportunities",
      subtitle:
        "A selection of websites we've built for businesses that wanted to look more professional and capture better. Click to see them live.",
      viewProject: "View project",
      resultLabel: "Result",
      clientsTitle: "Real clients",
      clientsNote: "Live sites, with businesses running on them today.",
      demosTitle: "Demos & concepts",
      demosNote:
        "Projects I built on my own to show what's possible in each sector. They're not clients: I label them as demos so there's no confusion.",
      cta: "I want a site like this for my business",
      projects: [
        {
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
          name: "Herrera Tax & Advisory — TaxPro",
          kind: "demo",
          result: "",
          url: "https://demo-taxpro.procodedev.com/",
          image: "/images/demo-taxpro.jpg",
          badge: "Tax services · Demo",
          description:
            "A bilingual site for a U.S. tax and accounting firm: services, free-consult booking and trust-focused lead capture.",
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
        "Public pricing, in US dollars, with no sales call to find out and no lock-in contract. Choose where to start and grow at your own pace.",
      popular: "Most chosen",
      currencyLabel: "Show prices in",
      currencyMxn: "MXN",
      currencyUsd: "USD",
      currencyNoteMxn:
        "Mexican peso equivalent at a fixed rate of $18 MXN per US dollar. Billing is in USD.",
      currencyNoteUsd: "Prices in US dollars.",
      mxnUnit: "MXN",
      mxnUnitMonth: "MXN / month",
      advisory: {
        badge: "Step 2 · After the call",
        name: "Digital Presence Diagnosis",
        price: "149",
        priceMxn: "2,690",
        currency: "USD",
        priceNote: "one-time · credited to your project",
        hook: "For when we have already talked and you want the full plan in writing.",
        description:
          "The free 15-minute call gives you a first read. This is what comes next if you want depth: I take a deep look at how a client finds you today when they search 'tax preparer near me' —Google, Maps, reviews, social and your current site—, compare your presence against the firms beating you, and hand you a written plan of what to improve and in what order. You keep the plan, whether or not you work with me.",
        homeEyebrow: "// the next step",
        homeTitle: "Want the full plan in writing?",
        prereq:
          "Always start with the free 15-minute call. If we see there that you need an in-depth plan, this is the step that follows.",
        viewPricing: "See all pricing",
        waText:
          "Hi Cristian, I'm interested in the Digital Presence Diagnosis ($149 USD). I'd like to know how clients find me today and get an improvement plan. How do we start?",
        stepsTitle: "How it works (3 phases)",
        steps: [
          {
            name: "Phase 1 · I get to know your practice",
            description:
              "Call + short questionnaire: what services you offer, your ideal client and how clients reach you today.",
          },
          {
            name: "Phase 2 · In-depth diagnosis",
            description:
              "I review your Google Business Profile, Maps, reviews, social media, your current site, your WhatsApp and how AI search sees you.",
          },
          {
            name: "Phase 3 · Solutions plan",
            description:
              "You get 3 to 5 prioritized improvements and a clear proposal on how to carry them out.",
          },
        ],
        creditNote:
          "The $149 is credited in full if you decide to do your project with me. In practice, the diagnosis is free if you move forward.",
        cta: "I want my diagnosis",
      },
      extrasTitle: "Add-on services",
      extrasSubtitle: "Extras to keep your site growing and up to date.",
      note: "These are the real prices, not a reference range: what you see is what you pay for the scope described in each plan. If your project falls outside that scope, I tell you before we start and give you the exact number — never halfway through the work. Every monthly plan is lock-in free: cancel whenever you want.",
      // ── Monthly ladder: support → growth → all-in ──
      // Replaces the single maintenance block. The market analysis called for a
      // ceiling to expand into: a $79 client can move to $349 and then $1,100
      // without ever changing vendors.
      monthlyTitle: "Monthly plans",
      monthlySubtitle:
        "Launching your site is the starting point, not the goal. These plans keep it alive, bring in reviews and get you found — with a monthly report of real contacts and calls, not page views.",
      monthlyNote:
        "No lock-in contract on any of the three. You can move up, down or cancel from one month to the next. All of them include a monthly report of the contacts and calls your digital presence generated.",
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
          tagline: "Get found, not just exist",
          description:
            "Having a website doesn't help if nobody finds you. This plan works your Google Business Profile, your reviews and your visibility in AI search, which is already where part of your clients come from.",
          features: [
            "Everything in the Web Support plan.",
            "Google Business Profile: setup, verification and full optimization.",
            "Monthly posts on your Google profile plus service and hours updates.",
            "Review management: a system to request them and a reply to every one that lands.",
            "AI search optimization (ChatGPT, Google AI): so you get cited when someone asks for a firm like yours.",
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
          tagline: "A complete client-acquisition system",
          description:
            "For the practice that no longer wants to depend on the season. Website, ads, content and SEO working together, with every lead tracked until they book.",
          features: [
            "Everything in the Growth+ plan.",
            "Google Ads and Meta campaign management, with dedicated landing pages.",
            "Ongoing SEO: monthly content, links, and pages per service and per city.",
            "Follow-up automation: every lead gets a reply even when you're deep in season.",
            "New landing pages for promotions or services at no extra cost.",
            "Monthly report of cost per lead and per closed client.",
            "Monthly strategy call with me.",
          ],
          cta: "Quote my package",
          waText:
            "Hi Cristian, I'm interested in the Web + Marketing + SEO package (from $1,100 USD/mo). I want a complete client-acquisition system for my practice. Can we talk?",
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
            "A single page, 100% focused on converting. Ideal to launch a service, a seasonal promotion or a campaign without complications.",
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
          tagline: "The favorite of growing practices",
          description:
            "Your whole practice online: a page per service, a structure built to sell and trust from the first click.",
          features: [
            "4 to 6 strategic pages (one per service)",
            "Sales and trust structure",
            "WhatsApp + connected forms",
            "Bilingual English/Spanish if you need it",
            "Base SEO so you get found in your city",
          ],
          cta: "Start my site",
          waText:
            "Hi Cristian, I'm interested in the 4–6 page Website ($899 USD). I want to take my whole practice online with a structure that sells. How do we start?",
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
            "A robust site for practices with several offices or services: more pages, integrations and a clean digital operation.",
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
      title: "We connect your favorite tools",
      subtitle:
        "Your page shouldn't live in isolation. We connect it with your tools so lead capture and follow-up happen on their own, with no manual work.",
      items: [
        { icon: "message-circle", name: "WhatsApp", description: "Capture & follow-up" },
        { icon: "file-text", name: "Forms", description: "Lead registration" },
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
            "It depends on scope. A landing page usually takes 1 to 2 weeks, and a full site with integrations 3 to 6 weeks. After the call I give you a timeline with clear dates and deliverables. If we're close to season, we prioritize so it's live before January 15.",
        },
        {
          question: "How much does a website cost with you?",
          answer:
            "Plans range from $349 USD (landing page) to $1,499 USD (full 8–12 page site), with the 4–6 page site at $899 USD. Pricing is published: you don't need a sales call to see it. The free 15-minute call is just to confirm which one fits you.",
        },
        {
          question:
            "What is the Digital Presence Diagnosis and how is it different from a project?",
          answer:
            "The 15-minute call is free: that's the entry point. The Diagnosis ($149 USD) is the step that follows if you want depth: I analyze in detail how people find you today on Google, Maps, reviews and AI search, compare you against the firms beating you, and hand you a written, prioritized plan of improvements. It's not a website: it's the clarity of knowing what to do first. If you later do your project with me, it's credited in full.",
        },
        {
          question: "Is the diagnosis free if I later hire a project?",
          answer:
            "Yes. The $149 diagnosis is fully deducted from the price of your project. If you decide to move forward, the diagnosis is free; and if not, you keep the improvement plan anyway.",
        },
        {
          question: "What's the difference between Web Support and Growth+?",
          answer:
            "Web Support (from $79 USD/mo) keeps your site alive: security, speed, backups, minor changes and your monthly report. Growth+ ($349 USD/mo) includes all of that and also works to get you found: Google Business Profile, posts, review management, local SEO and optimization so AI search cites you. One protects what you have; the other brings you new clients.",
        },
        {
          question: "Is there a lock-in contract?",
          answer:
            "Not on any plan. Monthly plans cancel from one month to the next, with no penalty and no call to anyone: you message me on WhatsApp and that's it. I'd rather you stay because it works than because you signed.",
        },
        {
          question: "Do you work with U.S. practices even though you're not here?",
          answer:
            "Yes, and it's most of my work. Everything is done remotely, in Spanish or English, over WhatsApp, on your schedule. The difference from a large agency is that you always talk to me, not to a different account executive every month.",
        },
        {
          question: "Can the site be bilingual, English and Spanish?",
          answer:
            "Yes, and for a Latino practice in the U.S. that's usually the right call: your current clients search in Spanish and many new ones search in English. I build both versions with separate URLs so Google indexes each one — this very site works that way.",
        },
        {
          question: "Do you include domain and hosting?",
          answer:
            "Yes. I guide and set up your domain, hosting and professional email. If you already have them, I work on your current infrastructure without issue.",
        },
        {
          question: "Can you integrate WhatsApp, forms or CRM?",
          answer:
            "Absolutely. I connect forms, WhatsApp buttons, booking calendars, CRM and automations so every lead is registered and followed up automatically — which you'll appreciate in the middle of season.",
        },
        {
          question: "Will my website be editable?",
          answer:
            "Depending on your needs. I build high-performance static sites or editable structures with an admin panel when you need to update content frequently.",
        },
        {
          question: "What do I need to get started?",
          answer:
            "Just the free 15-minute call. In it I understand your practice, your services, your ideal client and the action you want to drive: calls, bookings or messages.",
        },
      ],
    },
    testimonials: {
      eyebrow: "// testimonials",
      titleA: "Businesses already",
      titleHighlight: "saving time",
      titleB: "with us",
      subtitle:
        "I don't just deliver a page: I deliver peace of mind. Here's what the businesses already working with me say — with a link to their site so you can check.",
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
      eyebrow: "// book online",
      titleA: "Book your",
      titleHighlight: "free 15-min call",
      subtitle:
        "Pick the time that works best for you. In 15 minutes we review your practice and I tell you exactly what your digital presence needs. Free, no commitment and no sales call — pricing is already published.",
    },
    contact: {
      eyebrow: "// contact",
      titleA: "No time slot works? Leave me your",
      titleHighlight: "details",
      subtitle:
        "Leave me your WhatsApp and I'll reach out. No commitment and no jargon: just how your business can save time and sell more.",
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
      eyebrow: "// book your call",
      title:
        "Ready to stop losing the bigger clients to someone who just has a better website?",
      subtitle:
        "Book a 15-minute call and let's review together what your practice needs: a more professional page, your Google Business Profile, a review system or a complete digital structure. Free, and no sales call.",
      ctaPrimary: "Book a free call",
      ctaWhatsapp: "Chat on WhatsApp",
    },
    footer: {
      tagline:
        "I'm Cristian Posada. I build digital growth systems for tax and accounting firms across the United States — tax professionals, enrolled agents, CPAs, bookkeepers and tax resolution practices — connecting website, acquisition, intake, scheduling and follow-up. In English and Spanish, with one person accountable.",
      navTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contact",
      hours: "Monday to Sunday",
      location: "Serving the United States remotely, in Spanish and English",
      cta: "Book a free call",
      rights: "All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms & conditions",
      servicesList: [
        "Websites with a page per service",
        "Acquisition & Google Business Profile",
        "Intake & document upload",
        "Automation & CRM",
        "Follow-up & retention",
        "Analytics & business reporting",
      ],
      segmentsTitle: "By practice",
    },
    // ── Real-project strip on the home page (finding #4) ──
    proof: {
      eyebrow: "// real work",
      titleA: "Sites already",
      titleHighlight: "at work",
      subtitle:
        "I'm not asking you to take my word for it. These sites are live right now — open them and judge for yourself.",
      cta: "See the full portfolio",
    },
    // ── Price anchor on the home page (finding #10) ──
    priceAnchor: {
      eyebrow: "// investment",
      title: "Clear, published pricing — no surprise quote",
      subtitle:
        "You don't have to message me to find out what it costs. The prices are on the page, with exactly what each plan includes.",
      fromLabel: "from",
      amount: "349",
      currency: "USD",
      amountNote: "complete landing page · one-time",
      cta: "See all pricing",
    },
    // ── Who's behind it (findings #11 and #16) ──
    founder: {
      eyebrow: "// who does it",
      name: "Cristian Posada",
      role: "Developer · digital systems for U.S. tax firms",
      title: "It's not an agency. It's me.",
      body:
        "When you message me, I'm the one who answers. When we review your practice, I'm the one reviewing it. And once your site is live, I'm still the one maintaining it — including in month six, when the agency of the moment has already switched your account manager three times. I work remotely, in Spanish and English, with tax firms and service businesses across the United States, and I'd rather take on few projects and do them well than many done halfway.",
      cta: "Book a free call",
    },
    // ── Objection FAQ before the home page's final CTA (finding #18) ──
    homeFaq: {
      eyebrow: "// before you book",
      titleA: "The questions I get",
      titleHighlight: "almost every time",
      subtitle: "",
      items: [
        {
          question: "What does it cost, and why don't I see it until the end?",
          answer:
            "You do see it: pricing is published. From $349 USD for a landing page to $1,499 USD for a full 8–12 page site. There's no sales call to find out and no lock-in contract; on the call we just confirm which one fits you.",
        },
        {
          question: "Does the 15-minute call cost anything or commit me?",
          answer:
            "Neither. It's 15 minutes to understand your practice and tell you what you need — even if the answer is that you don't need a site from me yet.",
        },
        {
          question: "I'm in the U.S. and you're not. How does that work?",
          answer:
            "Remotely, over WhatsApp, in Spanish or English, on your schedule. It's how you already work with most of your vendors. The difference from an agency is that you always talk to me, and from Fiverr, that I'm still answering in month six.",
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
          "Digital Growth Systems for Tax & Accounting Firms | ProCode Dev",
        description:
          "Website, client acquisition, intake, scheduling, automation and follow-up for U.S. tax and accounting firms: tax professionals, enrolled agents, CPAs, bookkeepers and tax resolution practices. Public pricing from $349 USD, no lock-in contract, English and Spanish.",
        heroKicker: "Home",
      },
      tax: {
        title: "Tax & Accounting Firms: Websites & Growth Systems | ProCode Dev",
        description:
          "Digital growth systems for tax professionals, enrolled agents, CPAs, bookkeepers, tax resolution firms and accounting practices in the United States. Website, Google Business Profile, intake, scheduling, follow-up and analytics. Public pricing, no contract.",
        heroTitleA: "A digital system built for",
        heroHighlight: "tax & accounting firms",
        heroSubtitle:
          "Tax professionals, enrolled agents, CPAs, bookkeepers, tax resolution firms and accounting practices. Pick your practice type and you'll see exactly what changes in your case.",
      },
      services: {
        title:
          "Services: Web, Acquisition, Intake, Automation & Analytics | ProCode Dev",
        description:
          "The six pieces of the system for a tax or accounting firm: a website with a page per service, acquisition via Google Business Profile and local SEO, intake with document upload, automation, follow-up and business reporting.",
        heroTitleA: "Services that turn your digital presence into",
        heroHighlight: "a client acquisition system",
        heroSubtitle:
          "Website, acquisition, intake, automation, follow-up and analytics. Start with one piece or build the whole system.",
      },
      portfolio: {
        title: "Website Portfolio | ProCode Dev",
        description:
          "Real website and landing page projects we've built for businesses that wanted to look more professional and capture better clients.",
        heroTitleA: "Real projects that",
        heroHighlight: "generate opportunities",
        heroSubtitle:
          "Live sites I built for businesses that wanted to look more professional and capture better. Click to see them running.",
      },
      pricing: {
        title: "Website & Digital Presence Pricing in USD | ProCode Dev",
        description:
          "Public pricing in US dollars: landing $349, 4–6 page site $899, large site from $1,499. Support from $79/mo, Growth+ $349/mo and a Web + Marketing + SEO package from $1,100/mo. No lock-in contract.",
        heroTitleA: "Public pricing, in dollars, with no",
        heroHighlight: "sales call",
        heroSubtitle:
          "What you see is what you pay. No surprise quote, no hidden price and no 12-month contract: monthly plans cancel whenever you want.",
      },
      contact: {
        title: "Contact | Book Your Free 15-Min Call | ProCode Dev",
        description:
          "Book your free 15-minute call, or message me on WhatsApp if you prefer. No commitment and no jargon.",
        heroTitleA: "Book 15 minutes",
        heroHighlight: "with me",
        heroSubtitle:
          "Pick a time that works for you and we'll talk for 15 minutes. Free, no commitment and no sales call: pricing is already published.",
      },
    },
    // ── Niche landing: tax preparers, bookkeepers, EAs and CPAs ──
    tax: {
      promiseEyebrow: "// the promise",
      promiseTitle:
        "Your firm stops depending on someone remembering to follow up.",
      promiseBody:
        "Your practice already does the serious work: corporations, payroll, monthly bookkeeping, IRS representation. But between the moment someone gets interested and the moment they become a client there's a chain of manual steps — answer, qualify, request documents, schedule, remind, follow up — and in season that chain breaks. I build the infrastructure so it doesn't, and so the person searching for you finds the firm you already are.",
      rtbTitle: "Why you can believe me",
      rtb: [
        {
          icon: "briefcase",
          title: "Work in the same trade",
          description:
            "I'm not learning your business on your dime. I've already built for tax and accounting practices, and you can open the sites and judge for yourself.",
        },
        {
          icon: "receipt",
          title: "Public pricing",
          description:
            "It's on the page, in dollars. No sales call to find out and no lock-in contract.",
        },
        {
          icon: "message-circle",
          title: "Spanish or English, over WhatsApp",
          description:
            "One person accountable, in your language and on your schedule. Not a ticket queue or a different account manager every month.",
        },
        {
          icon: "trending-up",
          title: "A report of real contacts",
          description:
            "Every month I tell you how many calls and messages your digital presence generated. Not page views: actual prospects.",
        },
      ],
      vsTitle: "Compared to what you already considered",
      vsSubtitle:
        "Almost every practice I talk to tried one of these four. Here's what changes with me.",
      vs: [
        {
          name: "Wix or Squarespace",
          them: "Cheap, but you build it and you maintain it.",
          us: "You don't have to do it, or maintain it. During season that's worth more than the price difference.",
        },
        {
          name: "Fiverr",
          them: "They deliver and disappear. By month six nobody answers.",
          us: "A person with a name who still answers in month six, and the year after.",
        },
        {
          name: "Hibu and similar",
          them: "12-month contract and a price you don't see until the call.",
          us: "No lock-in contract, and the pricing published right on this page.",
        },
        {
          name: "A $3,000/mo agency",
          them: "Good work, but outside a practice's budget.",
          us: "A tenth of the cost, with the same focus on capturing real clients.",
        },
      ],
      forTitle: "I work with",
      forItems: [
        "Independent tax professionals",
        "Enrolled Agents (EA)",
        "Small and mid-size CPA practices",
        "Bookkeepers and recurring accounting",
        "Tax resolution and representation firms",
        "Accounting firms with payroll, ITIN and advisory",
      ],
      segmentsTitle: "Pick your practice",
      segmentsSubtitle:
        "Each one sells something different, in a different month, to a different client. These are the six pages covering what changes in each case.",
      segmentsCta: "See the page",
      seasonTitle: "The calendar rules, and I know it",
      seasonBody:
        "Your year isn't like other businesses': January through April decides almost everything. If we start in summer or fall, you reach the season with your website, Google profile and reviews already working. If you message me in February, we prioritize what can launch in two weeks and do the rest after April 15.",
      ctaTitle: "15 minutes, no commitment",
      ctaBody:
        "I'll tell you what's holding your practice back today — even if the answer is that you don't need a website from me yet.",
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
    es: "Hola Cristian, Vi tu página y me interesa una web para mi despacho. ¿Podemos platicar?",
    en: "Hi Cristian, I saw your site and I'm interested in a website for my practice. Can we talk?",
  },
  services: {
    es: "Hola Cristian, Estaba viendo tus servicios y quiero saber cuál le queda a mi negocio.",
    en: "Hi Cristian, I was looking at your services and I want to know which one fits my business.",
  },
  tax: {
    es: "Hola Cristian, Tengo un despacho de impuestos y vi tu página para preparadores. Quiero saber cómo me puedes ayudar.",
    en: "Hi Cristian, I run a tax practice and saw your page for tax pros. I'd like to know how you can help.",
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
  // («tengo una firma fiscal») es el mismo y evita mantener seis textos casi
  // idénticos que se desincronizan a la primera edición.
  const key = (SEGMENT_KEYS as readonly string[]).includes(page) ? "tax" : page;
  const text =
    WA_BY_PAGE[key as PageKey | "blog"]?.[lang] ?? WA_BY_PAGE.home![lang];
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}
