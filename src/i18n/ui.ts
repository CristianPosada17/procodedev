// ============================================================
// PROCODE DEV — Sistema bilingüe (ES/EN)
// Todo el copy vive aquí. Los componentes leen `t = translations[lang]`.
// ES es el idioma por defecto (raíz "/"); EN vive bajo "/en/".
// ============================================================

export type Lang = "es" | "en";
export const DEFAULT_LANG: Lang = "es";
export const LANGS: Lang[] = ["es", "en"];

// Rutas equivalentes por página (para nav, hreflang y toggle de idioma).
export type PageKey =
  | "home"
  | "services"
  | "tax"
  | "portfolio"
  | "pricing"
  | "contact";
export const PAGES: Record<PageKey, Record<Lang, string>> = {
  home: { es: "/", en: "/en/" },
  services: { es: "/servicios", en: "/en/services" },
  tax: { es: "/impuestos", en: "/en/tax-pros" },
  portfolio: { es: "/portafolio", en: "/en/portfolio" },
  pricing: { es: "/precios", en: "/en/pricing" },
  contact: { es: "/contacto", en: "/en/contact" },
};

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
      tax: "Para despachos",
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
    hero: {
      eyebrow: "// páginas web para despachos de impuestos · ee. uu.",
      titleA: "Tu despacho de impuestos, con la página que",
      titleHighlight: "gana los clientes grandes",
      subtitle:
        "Soy Cristian Posada. Hago que tu despacho se vea —y se encuentre— como la empresa seria que ya eres, para que dejes de perder los business returns y el bookkeeping mensual contra el preparador de al lado que solo tiene mejor página. Todo en español, por WhatsApp, con una sola persona responsable.",
      badges: [
        "Precios públicos",
        "Sin contrato de permanencia",
        "Todo en español",
      ],
      cardLabel: "Sistema digital",
      cardTitle: "Que te encuentren antes del tax season",
      cardText:
        "Página, Perfil de Empresa en Google, reseñas, WhatsApp y agenda conectados en una sola estructura.",
      cardCta: "Agendar llamada gratis",
      panelTitle: "Lo que queda funcionando",
      panelItems: [
        "Página que explica tus servicios sin que tú los repitas",
        "Botón de WhatsApp con el mensaje ya escrito",
        "Agenda en línea conectada a tu calendario",
        "Perfil de Google que aparece cuando buscan 'taxes cerca de mí'",
      ],
      chips: ["Despachos de impuestos", "Bookkeeping", "EA & CPA"],
    },
    values: {
      eyebrow: "// por qué funciona",
      items: [
        {
          icon: "▣",
          title: "Diseño que convierte",
          description:
            "Experiencias enfocadas en mensajes claros y llamados a la acción efectivos.",
        },
        {
          icon: "⚙",
          title: "Integraciones inteligentes",
          description:
            "Conecto tus herramientas para automatizar procesos y ahorrar tiempo.",
        },
        {
          icon: "⚡",
          title: "Velocidad y rendimiento",
          description:
            "Sitios que cargan rápido y retienen a tus visitantes en cada dispositivo.",
        },
        {
          icon: "↗",
          title: "Enfoque en resultados",
          description:
            "Cada decisión de diseño busca un objetivo: más mensajes, citas o ventas.",
        },
      ],
    },
    services: {
      eyebrow: "// lo que hago",
      titleA: "Soluciones digitales enfocadas en",
      titleHighlight: "crecimiento",
      subtitle:
        "Desarrollo web, integraciones y sistemas de captación para negocios que buscan una presencia digital más sólida, profesional y funcional.",
      items: [
        {
          icon: "▣",
          category: "Desarrollo web",
          title: "Sitios web enfocados en conversión",
          description:
            "Páginas profesionales que transmiten confianza, comunican tu valor en segundos y convierten visitas en clientes sin que tengas que explicar nada.",
        },
        {
          icon: "◎",
          category: "Landing pages",
          title: "Páginas de captación para campañas",
          description:
            "Creo landing pages estratégicas para anuncios, promociones o servicios específicos, optimizadas para generar mensajes, registros o citas.",
        },
        {
          icon: "⚙",
          category: "Integraciones y automatización",
          title: "Automatización e integración de herramientas",
          description:
            "Conecto formularios, WhatsApp, calendarios, CRM y otras herramientas para que tu operación digital sea más ordenada y eficiente.",
        },
        {
          icon: "✎",
          category: "Rediseño web",
          title: "Actualización visual y estratégica",
          description:
            "Renovamos sitios existentes para mejorar imagen, experiencia de usuario, velocidad, claridad del mensaje y rendimiento comercial.",
        },
        {
          icon: "◈",
          category: "Perfil de Empresa en Google",
          title: "Que aparezcas cuando busquen cerca de ti",
          description:
            "Creo, verifico y optimizo tu Perfil de Empresa en Google, publico cada mes y monto un sistema para pedir y responder reseñas. Es de donde salen la mayoría de las llamadas de un negocio local.",
        },
        {
          icon: "✦",
          category: "Búsqueda con IA",
          title: "Que ChatGPT y Google AI te citen",
          description:
            "Cada vez más gente pregunta a una IA en vez de buscar en Google. Estructuro tu información para que te mencionen cuando alguien pregunte por un negocio como el tuyo.",
        },
        {
          icon: "↗",
          category: "Captación digital",
          title: "Web + marketing + seguimiento",
          description:
            "Unimos página, anuncios, formularios y seguimiento en un sistema que capta y filtra prospectos por ti, para que solo hables con quien sí compra.",
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
    why: {
      eyebrow: "// por qué ProCode Dev",
      titleA: "Más que diseño,",
      titleHighlight: "estructura digital",
      titleB: "para crecer.",
      subtitle:
        "Una página bonita no es suficiente. Tu negocio necesita claridad, velocidad, confianza, seguimiento y una estructura que facilite convertir visitas en oportunidades reales.",
      philosophyTitle: "Mi filosofía",
      philosophyText:
        "No construyo sitios para llenar espacio. Construyo sistemas digitales que comunican, conectan y ayudan a vender mejor.",
      items: [
        {
          icon: "🎯",
          title: "Enfoque en conversión",
          description:
            "Cada sección se diseña para guiar al usuario hacia una acción concreta: contacto, registro, cita o compra.",
        },
        {
          icon: "🛡",
          title: "Confianza y profesionalismo",
          description:
            "Tu sitio debe reflejar el nivel real de tu negocio y transmitir seguridad desde el primer clic.",
        },
        {
          icon: "⚡",
          title: "Velocidad y rendimiento",
          description:
            "Webs que cargan rápido: cada segundo de más te cuesta clientes. La velocidad vende.",
        },
        {
          icon: "📱",
          title: "Experiencia móvil impecable",
          description:
            "Tu página se adapta correctamente a celular, tablet y escritorio, cuidando legibilidad y navegación.",
        },
        {
          icon: "✍",
          title: "Mensajes claros",
          description:
            "Ordenamos tu propuesta de valor para que el visitante entienda rápido qué haces y por qué elegirte.",
        },
        {
          icon: "🔗",
          title: "Integraciones útiles",
          description:
            "Conecto formularios, WhatsApp, CRM, calendario, email o herramientas clave para tu operación.",
        },
      ],
    },
    caseStudy: {
      eyebrow: "// proyecto destacado",
      titleA: "Qué lleva dentro un sitio",
      titleHighlight: "que sí vende",
      subtitle:
        "Todos los proyectos de arriba comparten la misma estructura por debajo: presencia profesional, captación, agenda e integraciones trabajando juntas para venderte mientras tú te ocupas del negocio.",
      includesTitle: "Qué incluye un sistema",
      includes: [
        "Presencia profesional que transmite confianza",
        "Captación de datos del prospecto",
        "Agenda de citas conectada",
        "Seguimiento automático por WhatsApp o CRM",
      ],
      cta: "Quiero algo similar",
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
          "Hola Cristian 👋 Me interesa el Diagnóstico de Presencia Digital ($149 USD). Quiero saber cómo me encuentran hoy mis clientes y recibir un plan de mejoras. ¿Cómo empezamos?",
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
            "Hola Cristian 👋 Me interesa el plan de Soporte Web (desde $79 USD al mes). Quiero mantener mi sitio rápido y seguro y recibir el reporte mensual. ¿Cómo lo activo?",
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
            "Hola Cristian 👋 Me interesa el plan Crecimiento+ ($349 USD al mes) con Perfil de Empresa en Google, gestión de reseñas y optimización para búsqueda con IA. ¿Cómo empezamos?",
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
            "Hola Cristian 👋 Me interesa el paquete Web + Marketing + SEO (desde $1,100 USD al mes). Quiero un sistema completo de captación para mi despacho. ¿Podemos platicar?",
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
            "Hola Cristian 👋 Me interesa la Landing Page ($349 USD). Quiero una página enfocada 100% en captar clientes. ¿Me pueden dar más información?",
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
            "Hola Cristian 👋 Me interesa el Sitio Web de 4 a 6 páginas ($899 USD). Quiero llevar mi despacho completo a internet con una estructura que venda. ¿Cómo iniciamos?",
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
            "Hola Cristian 👋 Me interesa el Sitio Web de 8 a 12 páginas (desde $1,499 USD) con integraciones y seguimiento. Me gustaría cotizarlo. ¿Podemos platicar?",
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
        { icon: "💬", name: "WhatsApp", description: "Captación y seguimiento" },
        { icon: "📝", name: "Formularios", description: "Registro de prospectos" },
        { icon: "📅", name: "Calendario", description: "Agenda de citas" },
        { icon: "📊", name: "CRM", description: "Control de oportunidades" },
        { icon: "✉️", name: "Email", description: "Comunicación automatizada" },
        { icon: "📈", name: "Analytics", description: "Medición de resultados" },
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
      eyebrow: "🗓️ agenda en línea",
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
        "¿Listo para dejar de perder los clientes grandes contra alguien que solo tiene mejor página?",
      subtitle:
        "Agenda una llamada de 15 minutos y revisamos juntos qué necesita tu despacho: una página más profesional, tu Perfil de Empresa en Google, un sistema de reseñas o una estructura digital completa. Sin costo y sin llamada de ventas.",
      ctaPrimary: "Agendar llamada gratis",
      ctaWhatsapp: "Hablar por WhatsApp",
    },
    footer: {
      tagline:
        "Soy Cristian Posada. Construyo sitios web, Perfiles de Empresa en Google y sistemas de captación para despachos de impuestos, bookkeepers y negocios de servicios latinos en Estados Unidos. Todo en español, por WhatsApp, con una sola persona responsable.",
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
        "Webs para despachos de impuestos",
        "Landing pages",
        "Perfil de Empresa en Google",
        "Gestión de reseñas",
        "SEO local y búsqueda con IA",
        "Soporte y optimización",
      ],
    },
    // ── Franja de proyectos reales en el home (hallazgo #4) ──
    proof: {
      eyebrow: "// trabajo real",
      titleA: "Sitios que ya están",
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
        "No tienes que escribirme para saber cuánto cuesta. Los precios están en la página, con lo que incluye cada plan.",
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
      role: "Desarrollador web · atención en español a EE. UU.",
      title: "No es una agencia. Soy yo.",
      body:
        "Cuando me escribes, te contesto yo. Cuando revisamos tu despacho, lo reviso yo. Y cuando tu sitio esté en línea, sigo siendo yo quien lo mantiene — también en el mes seis, cuando la agencia de turno ya te cambió de ejecutivo tres veces. Trabajo en remoto y en español con despachos de impuestos y negocios de servicios en Estados Unidos, y prefiero llevar pocos proyectos bien que muchos a medias.",
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
          "Páginas Web para Despachos de Impuestos en EE. UU. | ProCode Dev",
        description:
          "Sitios web, Perfil de Empresa en Google y captación de clientes para despachos de impuestos, bookkeepers y EAs latinos en Estados Unidos. Precios públicos desde $349 USD, sin contrato de permanencia y todo en español. Agenda tu llamada gratis de 15 minutos.",
        heroKicker: "Inicio",
      },
      tax: {
        title:
          "Páginas Web para Preparadores de Impuestos y Bookkeepers | ProCode Dev",
        description:
          "Página web, Perfil de Empresa en Google y gestión de reseñas para despachos de impuestos, bookkeepers, EAs y CPAs latinos en EE. UU. Precios públicos desde $349 USD, sin contrato de permanencia, todo en español por WhatsApp.",
        heroTitleA: "Para preparadores de impuestos, bookkeepers y",
        heroHighlight: "despachos contables",
        heroSubtitle:
          "El oficio que mejor conozco. Sé qué busca tu cliente, en qué mes lo busca y por qué elige al de al lado.",
      },
      services: {
        title: "Servicios de Desarrollo Web y Presencia en Google | ProCode Dev",
        description:
          "Sitios web, landing pages, Perfil de Empresa en Google, gestión de reseñas, SEO local y soporte mensual para despachos de impuestos y negocios de servicios latinos en EE. UU.",
        heroTitleA: "Servicios que convierten tu presencia digital en",
        heroHighlight: "un sistema de ventas",
        heroSubtitle:
          "Desarrollo web, presencia en Google y captación — todo con un proceso claro y enfocado en resultados.",
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
        "Dejas de perder los business returns contra el despacho que solo tiene mejor página.",
      promiseBody:
        "Tu despacho ya hace el trabajo serio: corporaciones, payroll, bookkeeping mensual, representación ante el IRS. Pero cuando alguien te busca en Google encuentra una página de Facebook sin actualizar, tres reseñas y un número de teléfono. El cliente de $2,000 se va con quien se ve como una firma — aunque tú tengas veinte años más de oficio. Eso es lo que arreglo.",
      rtbTitle: "Por qué puedes creerme",
      rtb: [
        {
          icon: "◎",
          title: "Casos en el mismo oficio",
          description:
            "No aprendo tu negocio contigo. Ya construí para despachos fiscales y contables, y puedes abrir los sitios y juzgarlos tú.",
        },
        {
          icon: "▣",
          title: "Precios públicos",
          description:
            "Están en la página, en dólares. Sin llamada de ventas para conocerlos y sin contrato de permanencia.",
        },
        {
          icon: "💬",
          title: "Todo en español, por WhatsApp",
          description:
            "Una sola persona responsable, en tu idioma y en tu horario. No un ticket ni un ejecutivo de cuenta distinto cada mes.",
        },
        {
          icon: "📈",
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
        "Bookkeepers y despachos contables",
        "Enrolled Agents (EA)",
        "CPAs de práctica pequeña y mediana",
        "Despachos con servicios de payroll",
        "Oficinas con ITIN, notary y multiservicios",
      ],
      seasonTitle: "El calendario manda, y lo sé",
      seasonBody:
        "Tu año no es como el de otros negocios: enero a abril decide casi todo. Si empezamos en verano u otoño, llegas a la temporada con la página, el Perfil de Google y las reseñas ya trabajando. Si me escribes en febrero, priorizamos lo que se puede lanzar en dos semanas y el resto lo hacemos después del 15 de abril.",
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
      tax: "For tax pros",
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
    hero: {
      eyebrow: "// websites for tax firms · united states",
      titleA: "Your tax practice, with the website that",
      titleHighlight: "wins the bigger clients",

      subtitle:
        "I'm Cristian Posada. I make your practice look —and get found— like the serious firm you already are, so you stop losing business returns and monthly bookkeeping to the preparer down the street who just has a better website. In Spanish or English, over WhatsApp, with one person accountable.",
      badges: ["Public pricing", "No lock-in contract", "One person accountable"],
      cardLabel: "Digital system",
      cardTitle: "Get found before tax season",
      cardText:
        "Website, Google Business Profile, reviews, WhatsApp and booking connected into a single structure.",
      cardCta: "Book a free call",
      panelTitle: "What you end up with",
      panelItems: [
        "A page that explains your services so you don't have to",
        "A WhatsApp button with the message already written",
        "Online booking wired to your calendar",
        "A Google profile that shows up for 'tax preparer near me'",
      ],
      chips: ["Tax firms", "Bookkeeping", "EA & CPA"],
    },
    values: {
      eyebrow: "// why it works",
      items: [
        {
          icon: "▣",
          title: "Design that converts",
          description:
            "Experiences focused on clear messaging and effective calls to action.",
        },
        {
          icon: "⚙",
          title: "Smart integrations",
          description:
            "We connect your tools to automate processes and save you time.",
        },
        {
          icon: "⚡",
          title: "Speed & performance",
          description:
            "Sites that load fast and keep your visitors engaged on every device.",
        },
        {
          icon: "↗",
          title: "Results-focused",
          description:
            "Every design decision aims at one goal: more messages, bookings or sales.",
        },
      ],
    },
    services: {
      eyebrow: "// our services",
      titleA: "Digital solutions focused on",
      titleHighlight: "growth",
      subtitle:
        "Web development, integrations and lead-capture systems for businesses that want a stronger, more professional and functional digital presence.",
      items: [
        {
          icon: "▣",
          category: "Web development",
          title: "Conversion-focused websites",
          description:
            "Professional pages that build trust, communicate your value in seconds and turn visits into clients without you having to explain a thing.",
        },
        {
          icon: "◎",
          category: "Landing pages",
          title: "Lead-capture pages for campaigns",
          description:
            "We build strategic landing pages for ads, promotions or specific services, optimized to generate messages, sign-ups or bookings.",
        },
        {
          icon: "⚙",
          category: "Integrations & automation",
          title: "Tool automation and integration",
          description:
            "We connect forms, WhatsApp, calendars, CRM and other tools so your digital operation runs cleaner and more efficiently.",
        },
        {
          icon: "✎",
          category: "Website redesign",
          title: "Visual and strategic refresh",
          description:
            "We renew existing sites to improve image, user experience, speed, message clarity and commercial performance.",
        },
        {
          icon: "◈",
          category: "Google Business Profile",
          title: "Show up when they search near you",
          description:
            "I create, verify and optimize your Google Business Profile, post every month and set up a system to request and answer reviews. It's where most calls to a local business come from.",
        },
        {
          icon: "✦",
          category: "AI search",
          title: "Get cited by ChatGPT and Google AI",
          description:
            "More and more people ask an AI instead of searching Google. I structure your information so you get mentioned when someone asks for a business like yours.",
        },
        {
          icon: "↗",
          category: "Digital lead-gen",
          title: "Web + marketing + follow-up",
          description:
            "We combine site, ads, forms and follow-up into one system that captures and filters leads for you, so you only talk to those who buy.",
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
      titleA: "More than design,",
      titleHighlight: "digital structure",
      titleB: "to grow.",
      subtitle:
        "A pretty page isn't enough. Your business needs clarity, speed, trust, follow-up and a structure that makes it easy to turn visits into real opportunities.",
      philosophyTitle: "Our philosophy",
      philosophyText:
        "We don't build sites to fill space. We build digital systems that communicate, connect and help you sell better.",
      items: [
        {
          icon: "🎯",
          title: "Conversion-focused",
          description:
            "Every section is designed to guide the user toward a concrete action: contact, sign-up, booking or purchase.",
        },
        {
          icon: "🛡",
          title: "Trust & professionalism",
          description:
            "Your site should reflect the real level of your business and inspire confidence from the first click.",
        },
        {
          icon: "⚡",
          title: "Speed & performance",
          description:
            "Fast-loading sites: every extra second costs you clients. Speed sells.",
        },
        {
          icon: "📱",
          title: "Flawless mobile experience",
          description:
            "Your page adapts properly to phone, tablet and desktop, protecting readability and navigation.",
        },
        {
          icon: "✍",
          title: "Clear messaging",
          description:
            "We organize your value proposition so visitors quickly understand what you do and why choose you.",
        },
        {
          icon: "🔗",
          title: "Useful integrations",
          description:
            "We connect forms, WhatsApp, CRM, calendar, email or the key tools for your operation.",
        },
      ],
    },
    caseStudy: {
      eyebrow: "// featured project",
      titleA: "What's inside a site",
      titleHighlight: "that actually sells",
      subtitle:
        "This is what a complete digital system looks like: professional presence, lead capture, booking and integrations working together to sell for you while you run the business.",
      includesTitle: "What a system includes",
      includes: [
        "Professional presence that builds trust",
        "Lead-data capture",
        "Connected appointment booking",
        "Automatic follow-up via WhatsApp or CRM",
      ],
      cta: "I want something similar",
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
          "Hi Cristian 👋 I'm interested in the Digital Presence Diagnosis ($149 USD). I'd like to know how clients find me today and get an improvement plan. How do we start?",
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
            "Hi Cristian 👋 I'm interested in the Web Support plan (from $79 USD/mo). I want to keep my site fast and secure and get the monthly report. How do I activate it?",
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
            "Hi Cristian 👋 I'm interested in the Growth+ plan ($349 USD/mo) with Google Business Profile, review management and AI search optimization. How do we start?",
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
            "Hi Cristian 👋 I'm interested in the Web + Marketing + SEO package (from $1,100 USD/mo). I want a complete client-acquisition system for my practice. Can we talk?",
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
            "Hi Cristian 👋 I'm interested in the Landing Page ($349 USD). I want a page 100% focused on capturing clients. Can you tell me more?",
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
            "Hi Cristian 👋 I'm interested in the 4–6 page Website ($899 USD). I want to take my whole practice online with a structure that sells. How do we start?",
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
            "Hi Cristian 👋 I'm interested in the 8–12 page Website (from $1,499 USD) with integrations and follow-up. I'd like a quote. Can we talk?",
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
        { icon: "💬", name: "WhatsApp", description: "Capture & follow-up" },
        { icon: "📝", name: "Forms", description: "Lead registration" },
        { icon: "📅", name: "Calendar", description: "Appointment booking" },
        { icon: "📊", name: "CRM", description: "Opportunity tracking" },
        { icon: "✉️", name: "Email", description: "Automated communication" },
        { icon: "📈", name: "Analytics", description: "Results measurement" },
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
      eyebrow: "🗓️ book online",
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
        "I'm Cristian Posada. I build websites, Google Business Profiles and lead-capture systems for tax firms, bookkeepers and Latino service businesses across the United States. In Spanish or English, over WhatsApp, with one person accountable.",
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
        "Websites for tax firms",
        "Landing pages",
        "Google Business Profile",
        "Review management",
        "Local SEO & AI search",
        "Support & optimization",
      ],
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
      role: "Web developer · serving U.S. practices remotely",
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
        title: "Websites for U.S. Tax Firms & Bookkeepers | ProCode Dev",
        description:
          "Websites, Google Business Profile and client acquisition for tax preparers, bookkeepers and EAs across the United States. Public pricing from $349 USD, no lock-in contract, in Spanish or English. Book your free 15-minute call.",
        heroKicker: "Home",
      },
      tax: {
        title: "Websites for Tax Preparers, Bookkeepers & EAs | ProCode Dev",
        description:
          "Website, Google Business Profile and review management for tax firms, bookkeepers, EAs and CPAs across the U.S. Public pricing from $349 USD, no lock-in contract, in Spanish or English over WhatsApp.",
        heroTitleA: "For tax preparers, bookkeepers and",
        heroHighlight: "accounting practices",
        heroSubtitle:
          "The trade I know best. I know what your client searches for, which month they search, and why they pick the firm next door.",
      },
      services: {
        title: "Web Development & Google Presence Services | ProCode Dev",
        description:
          "Websites, landing pages, Google Business Profile, review management, local SEO and monthly support for tax firms and Latino service businesses in the U.S.",
        heroTitleA: "Services that turn your digital presence into",
        heroHighlight: "a sales system",
        heroSubtitle:
          "Web development, Google presence and lead capture — all with a clear, results-focused process.",
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
        "You stop losing business returns to the firm that just has a better website.",
      promiseBody:
        "Your practice already does the serious work: corporations, payroll, monthly bookkeeping, IRS representation. But when someone looks you up on Google they find an outdated Facebook page, three reviews and a phone number. The $2,000 client goes to whoever looks like a firm — even if you have twenty more years in the trade. That's what I fix.",
      rtbTitle: "Why you can believe me",
      rtb: [
        {
          icon: "◎",
          title: "Work in the same trade",
          description:
            "I'm not learning your business on your dime. I've already built for tax and accounting practices, and you can open the sites and judge for yourself.",
        },
        {
          icon: "▣",
          title: "Public pricing",
          description:
            "It's on the page, in dollars. No sales call to find out and no lock-in contract.",
        },
        {
          icon: "💬",
          title: "Spanish or English, over WhatsApp",
          description:
            "One person accountable, in your language and on your schedule. Not a ticket queue or a different account manager every month.",
        },
        {
          icon: "📈",
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
        "Independent tax preparers",
        "Bookkeepers and accounting practices",
        "Enrolled Agents (EA)",
        "Small and mid-size CPA practices",
        "Practices offering payroll services",
        "ITIN, notary and multi-service offices",
      ],
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
const WA_BY_PAGE: Record<PageKey | "blog", Record<Lang, string>> = {
  home: {
    es: "Hola Cristian 👋 Vi tu página y me interesa una web para mi despacho. ¿Podemos platicar?",
    en: "Hi Cristian 👋 I saw your site and I'm interested in a website for my practice. Can we talk?",
  },
  services: {
    es: "Hola Cristian 👋 Estaba viendo tus servicios y quiero saber cuál le queda a mi negocio.",
    en: "Hi Cristian 👋 I was looking at your services and I want to know which one fits my business.",
  },
  tax: {
    es: "Hola Cristian 👋 Tengo un despacho de impuestos y vi tu página para preparadores. Quiero saber cómo me puedes ayudar.",
    en: "Hi Cristian 👋 I run a tax practice and saw your page for tax pros. I'd like to know how you can help.",
  },
  portfolio: {
    es: "Hola Cristian 👋 Vi tu portafolio y quiero algo parecido para mi negocio. ¿Cómo empezamos?",
    en: "Hi Cristian 👋 I saw your portfolio and I want something similar for my business. How do we start?",
  },
  pricing: {
    es: "Hola Cristian 👋 Estoy viendo tus precios y tengo una duda antes de agendar.",
    en: "Hi Cristian 👋 I'm looking at your pricing and I have a question before booking.",
  },
  contact: {
    es: "Hola Cristian 👋 Prefiero escribirte por aquí en vez de agendar. Te cuento qué necesito.",
    en: "Hi Cristian 👋 I'd rather message you here than book a slot. Let me tell you what I need.",
  },
  blog: {
    es: "Hola Cristian 👋 Estaba leyendo un artículo de tu blog y me surgió una duda sobre mi negocio.",
    en: "Hi Cristian 👋 I was reading an article on your blog and a question about my business came up.",
  },
};

export function waHref(page: PageKey | "blog", lang: Lang): string {
  const text = WA_BY_PAGE[page]?.[lang] ?? WA_BY_PAGE.home[lang];
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}
