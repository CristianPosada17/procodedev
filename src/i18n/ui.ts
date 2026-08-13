// ============================================================
// PROCODE DEV — Sistema bilingüe (ES/EN)
// Todo el copy vive aquí. Los componentes leen `t = translations[lang]`.
// ES es el idioma por defecto (raíz "/"); EN vive bajo "/en/".
// ============================================================

export type Lang = "es" | "en";
export const DEFAULT_LANG: Lang = "es";
export const LANGS: Lang[] = ["es", "en"];

// Rutas equivalentes por página (para nav, hreflang y toggle de idioma).
export type PageKey = "home" | "services" | "portfolio" | "pricing" | "contact";
export const PAGES: Record<PageKey, Record<Lang, string>> = {
  home: { es: "/", en: "/en/" },
  services: { es: "/servicios", en: "/en/services" },
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
  city: "Durango",
  cityFull: "Durango, México",
  founderName: "Cristian Posada",
  founderPhoto: "/images/cristian-posada.jpg",
};

// Tipo de cambio fijo para mostrar precios en MXN (hallazgo #9 de la auditoría CRO).
// Se fija arriba del spot (~17.1) para absorber movimiento cambiario sin retocar precios.
export const FX_USD_MXN = 18;

export const translations = {
  es: {
    langName: "ES",
    otherLangName: "EN",
    nav: {
      home: "Inicio",
      services: "Servicios",
      portfolio: "Portafolio",
      pricing: "Precios",
      blog: "Blog",
      contact: "Contacto",
      cta: "Agendar diagnóstico",
    },
    common: {
      ctaPrimary: "Agendar diagnóstico gratuito",
      ctaWhatsapp: "Escribir por WhatsApp",
      ctaProposal: "Solicitar propuesta",
      free: "Gratis · sin compromiso",
      viewServices: "Ver servicios",
    },
    hero: {
      eyebrow: "// desarrollo web · durango, méxico",
      titleA: "Sitios web y sistemas digitales que",
      titleHighlight: "hacen crecer",
      titleB: "tu negocio.",
      subtitle:
        "Soy Cristian Posada y diseño sitios web y sistemas digitales que convierten visitantes en clientes y automatizan tu operación. Deja de perder horas respondiendo lo mismo y persiguiendo prospectos: tu web trabaja por ti mientras tú vendes.",
      badges: [
        "Diseño profesional",
        "Enfoque en resultados",
        "Soporte continuo",
      ],
      cardLabel: "Sistema digital",
      cardTitle: "Impulsa tu negocio en línea",
      cardText:
        "Sitios web, formularios, WhatsApp, agenda y seguimiento conectados en una sola estructura.",
      cardCta: "Solicitar propuesta",
      panelTitle: "Lo que queda funcionando",
      panelItems: [
        "Página que explica tu servicio sin que tú lo repitas",
        "Botón de WhatsApp con el mensaje ya escrito",
        "Agenda en línea conectada a tu calendario",
        "Formularios que te llegan al correo al instante",
      ],
      chips: ["Landing pages", "Integraciones", "Automatización"],
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
          category: "Soporte y optimización",
          title: "Mejora continua y mantenimiento",
          description:
            "Damos seguimiento técnico y estratégico para mantener tu sitio actualizado, estable y alineado con los objetivos del negocio.",
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
        "Desde una asesoría para tener claridad, hasta un sitio completo con seguimiento automático. Elige por dónde empezar y crece a tu ritmo.",
      popular: "Más elegido",
      currencyLabel: "Ver precios en",
      currencyMxn: "MXN",
      currencyUsd: "USD",
      currencyNoteMxn:
        "Precios en pesos mexicanos, a tipo de cambio fijo de $18 MXN por dólar.",
      currencyNoteUsd: "Precios en dólares estadounidenses.",
      mxnUnit: "MXN",
      mxnUnitMonth: "MXN / mes",
      advisory: {
        badge: "Paso 2 · Después del diagnóstico",
        name: "Asesoría de Presencia Digital",
        price: "75",
        priceMxn: "1,390",
        currency: "USD",
        priceNote: "pago único · acreditable a tu proyecto",
        hook: "Cuando ya hablamos y quieres el plan completo por escrito.",
        description:
          "El diagnóstico gratuito de 15 minutos te da una primera lectura. Esto es lo que sigue si quieres profundidad: analizo a fondo cómo te encuentra hoy un cliente en Google, redes y WhatsApp, entro en tu negocio por dentro y te entrego por escrito un plan de qué mejorar y en qué orden. Te quedas con el plan, decidas o no trabajar conmigo.",
        homeEyebrow: "// el siguiente paso",
        homeTitle: "¿Quieres el plan completo por escrito?",
        prereq:
          "Empieza siempre por el diagnóstico gratuito de 15 minutos. Si ahí vemos que necesitas un plan a fondo, este es el paso que sigue.",
        viewPricing: "Ver todos los precios",
        waText:
          "Hola Cristian 👋 Me interesa la Asesoría de Presencia Digital ($1,390 MXN). Quiero saber cómo me encuentran hoy mis clientes en Google, redes y WhatsApp y recibir un plan de mejoras. ¿Cómo empezamos?",
        stepsTitle: "Cómo funciona (3 fases)",
        steps: [
          {
            name: "Fase 1 · Conozco tu negocio",
            description:
              "Llamada + cuestionario breve: qué vendes, tu cliente ideal y cómo captas clientes hoy.",
          },
          {
            name: "Fase 2 · Diagnóstico a fondo",
            description:
              "Reviso tu presencia en Google, Maps, reseñas, redes, tu web actual y tu WhatsApp.",
          },
          {
            name: "Fase 3 · Plan de soluciones",
            description:
              "Recibes de 3 a 5 mejoras priorizadas y una propuesta clara de cómo llevarlas a cabo.",
          },
        ],
        creditNote:
          "El costo se te acredita completo si decides hacer tu proyecto conmigo. En la práctica, la asesoría te sale gratis si avanzas.",
        cta: "Agendar mi asesoría",
      },
      extrasTitle: "Servicios adicionales",
      extrasSubtitle:
        "Complementos para mantener tu sitio creciendo y actualizado.",
      note: "Estos son los precios reales, no un rango de referencia: lo que ves es lo que pagas por el alcance descrito en cada plan. Si tu proyecto se sale de ese alcance, te lo digo antes de empezar y te paso el número exacto — nunca a mitad del trabajo.",
      maintenance: {
        badge: "Recomendado · Continuidad",
        name: "Soporte web mensual",
        pricePrefix: "desde",
        price: "59",
        priceMxn: "1,090",
        currency: "USD / mes",
        priceNote: "sin contrato forzoso",
        hook: "Tu página siempre al día, y tú siempre enterado de cómo trabaja.",
        description:
          'No pagas "por si algo se rompe". Cada mes recibes un reporte de cómo trabajó tu página —cuánta gente entró y cuántos te escribieron por WhatsApp— y yo la mantengo rápida, segura y actualizada, además de hacerte los cambios que necesites sin que aprendas nada técnico.',
        featuresTitle: "Cada mes incluye:",
        features: [
          "Reporte mensual de desempeño: visitas, clics al botón de WhatsApp, formularios recibidos y páginas más vistas.",
          "Monitoreo de disponibilidad y velocidad (uptime): tu sitio siempre en línea y rápido.",
          "Respaldo mensual del sitio: si algo falla, se restaura.",
          "Actualizaciones de seguridad y de plataforma.",
          "Hasta 3–4 cambios menores: textos, fotos, precios, horarios, promociones.",
          "1 recomendación de mejora al mes, basada en los números de tu reporte.",
          "Prioridad en soporte ante cualquier urgencia.",
        ],
        footNote:
          "Sin contrato forzoso. Lo cancelas cuando quieras. Es tener un encargado de tu presencia digital por menos de lo que cuesta una comida.",
        waText:
          "Hola Cristian 👋 Me interesa el Soporte web mensual (desde $1,090 MXN al mes). Quiero mantener mi sitio rápido y seguro y recibir el reporte mensual de desempeño. ¿Cómo lo activo?",
        cta: "Activar mi mantenimiento",
      },
      packages: [
        {
          name: "Landing Page",
          price: "299",
          priceMxn: "5,490",
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
            "Hola Cristian 👋 Me interesa la Landing Page ($5,490 MXN). Quiero una página enfocada 100% en captar clientes. ¿Me pueden dar más información?",
          highlighted: false,
        },
        {
          name: "Sitio Web 4–6 páginas",
          price: "599",
          priceMxn: "10,900",
          currency: "USD",
          pricePrefix: "",
          tagline: "El favorito de negocios en crecimiento",
          description:
            "Tu negocio completo en línea, con una estructura pensada para vender y transmitir confianza desde el primer clic.",
          features: [
            "4 a 6 secciones estratégicas",
            "Estructura de ventas y confianza",
            "WhatsApp + formularios conectados",
            "SEO base para que te encuentren",
            "Diseño profesional y rápido",
          ],
          cta: "Empezar mi sitio",
          waText:
            "Hola Cristian 👋 Me interesa el Sitio Web de 4 a 6 páginas ($10,900 MXN). Quiero llevar mi negocio completo a internet con una estructura que venda. ¿Cómo iniciamos?",
          highlighted: true,
        },
        {
          name: "Sitio Web 8–12 páginas",
          price: "1,199",
          priceMxn: "21,900",
          currency: "USD",
          pricePrefix: "desde",
          tagline: "Presencia y sistema digital completo",
          description:
            "Una web robusta para negocios más grandes: más secciones, integraciones y una operación digital ordenada.",
          features: [
            "8 a 12 secciones completas",
            "Integraciones y automatización",
            "Sistema de captación + seguimiento",
            "SEO técnico avanzado",
            "Acompañamiento en el lanzamiento",
          ],
          cta: "Cotizar mi web",
          waText:
            "Hola Cristian 👋 Me interesa el Sitio Web de 8 a 12 páginas (desde $21,900 MXN) con integraciones y seguimiento. Me gustaría cotizarlo. ¿Podemos platicar?",
          highlighted: false,
        },
      ],
      extras: [
        {
          name: "Rediseño web",
          price: "$299 – $1,199",
          priceMxn: "$5,490 – $21,900",
          unit: "USD o más",
          description:
            "Renueva imagen, estructura y conversión sobre tu sitio actual, sin empezar de cero.",
        },
        {
          name: "Optimización web",
          price: "$299",
          priceMxn: "$5,490",
          unit: "USD",
          description:
            "Más velocidad, mejor experiencia y CTAs que sí convierten visitas en mensajes.",
        },
        {
          name: "Página adicional",
          price: "$199",
          priceMxn: "$3,690",
          unit: "USD",
          description:
            "Suma una sección extra a un sitio que ya hicimos juntos.",
        },
        {
          name: "Ajustes urgentes",
          price: "$99",
          priceMxn: "$1,890",
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
            "Depende del alcance. Una landing page suele tomar de 1 a 2 semanas, y un sitio completo con integraciones de 3 a 6 semanas. Tras el diagnóstico te entrego un cronograma con fechas y entregables claros.",
        },
        {
          question: "¿Cuánto cuesta un sitio web con ustedes?",
          answer:
            "Los planes van desde $5,490 MXN (landing page) hasta $21,900 MXN (web completa de 8 a 12 páginas). Empieza por el diagnóstico gratuito de 15 minutos: ahí definimos el alcance exacto y te digo el número real, sin compromiso.",
        },
        {
          question:
            "¿Qué es la Asesoría de Presencia Digital y en qué se diferencia de un proyecto?",
          answer:
            "El diagnóstico gratuito es una llamada de 15 minutos: la puerta de entrada, sin costo. La Asesoría ($1,390 MXN) es el paso que sigue si quieres profundidad: analizo a fondo tu presencia en Google, redes y WhatsApp y te entrego por escrito un plan priorizado de mejoras. No es una página: es la claridad de saber qué hacer primero. Si luego haces tu proyecto conmigo, se te acredita completa.",
        },
        {
          question: "¿La asesoría tiene costo si después contrato un proyecto?",
          answer:
            "No. Los $1,390 MXN de la asesoría se descuentan por completo del precio de tu proyecto. Si decides avanzar, la asesoría te sale gratis; y si no, te quedas con el plan de mejoras de todos modos.",
        },
        {
          question: "¿Qué incluye el mantenimiento mensual?",
          answer:
            "Cada mes recibes un reporte de desempeño de tu sitio (visitas, clics a WhatsApp, formularios y páginas más vistas), además de monitoreo de velocidad y disponibilidad, respaldo, actualizaciones de seguridad, hasta 3–4 cambios menores y una recomendación de mejora. Todo sin contrato forzoso: lo cancelas cuando quieras.",
        },
        {
          question: "¿Incluyen dominio y hosting?",
          answer:
            "Sí. Te oriento y configuro dominio, hosting y correo profesional. Si ya cuentas con ellos, trabajo sobre tu infraestructura actual sin problema.",
        },
        {
          question: "¿Pueden integrar WhatsApp, formularios o CRM?",
          answer:
            "Por supuesto. Conecto formularios, botones de WhatsApp, calendarios de citas, CRM y automatizaciones para que cada prospecto quede registrado y con seguimiento automático.",
        },
        {
          question: "¿Mi sitio web será editable?",
          answer:
            "Según tus necesidades. Construyo sitios estáticos de alto rendimiento o estructuras editables con panel de administración cuando necesitas actualizar contenido con frecuencia.",
        },
        {
          question: "¿Qué necesito para empezar?",
          answer:
            "Solo la llamada de diagnóstico gratuita de 15 minutos. En ella entiendo tu negocio, objetivos, servicios, cliente ideal y la acción que quieres generar: mensajes, citas, registros o ventas.",
        },
        {
          question: "¿Ofrecen soporte después del lanzamiento?",
          answer:
            "Sí. El plan de soporte mensual (desde $1,090 MXN al mes) mantiene tu sitio rápido, seguro y actualizado, y cada mes te envío un reporte de cómo está trabajando tu página. Sin contrato forzoso.",
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
    freeAudit: {
      badge: "🎁 Gratis · sin compromiso",
      titleA: "¿Ya tienes web? Te decimos",
      titleHighlight: "3 cosas",
      titleB: "para que venda más.",
      subtitle:
        "Revisamos tu sitio actual sin costo y te enviamos 3 mejoras concretas de diseño, velocidad o conversión que puedes aplicar de inmediato. Y si aún no tienes web, te decimos por dónde empezar.",
      bullets: ["✓ Sin costo", "✓ Sin compromiso", "✓ En 24–48 h"],
      fieldName: "Nombre",
      fieldWhatsapp: "WhatsApp",
      fieldSite: "Tu sitio web (opcional)",
      cta: "Quiero mi auditoría gratis",
      sending: "Enviando…",
      success:
        "¡Listo! Recibimos tu solicitud. Te enviamos tus 3 mejoras en 24–48 h.",
      error: "Hubo un problema. Escríbeme por WhatsApp y lo resolvemos.",
    },
    calendly: {
      eyebrow: "🗓️ agenda en línea",
      titleA: "Reserva tu",
      titleHighlight: "diagnóstico gratuito",
      subtitle:
        "Elige el horario que mejor te acomode. En 15 minutos revisamos tu negocio y te digo exactamente qué necesita tu presencia digital. Sin costo y sin compromiso.",
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
      eyebrow: "// agenda tu diagnóstico",
      title:
        "¿Listo para dejar de perder tiempo y convertir tu web en tu mejor vendedor?",
      subtitle:
        "Agenda una llamada de 15 minutos y revisamos juntos qué necesita tu negocio: una página más profesional, una landing para captar prospectos, integraciones o una estructura digital más completa.",
      ctaPrimary: "Agendar diagnóstico gratuito",
      ctaWhatsapp: "Hablar por WhatsApp",
    },
    footer: {
      tagline:
        "Soy Cristian Posada. Desde Durango construyo sitios web, landing pages, integraciones y sistemas de captación para negocios que quieren una presencia digital más sólida y funcional.",
      navTitle: "Navegación",
      servicesTitle: "Servicios",
      contactTitle: "Contacto",
      hours: "Lunes a Domingo",
      location: "Durango, México · trabajo remoto con todo el país",
      cta: "Agendar diagnóstico",
      rights: "Todos los derechos reservados.",
      privacy: "Aviso de privacidad",
      terms: "Términos y condiciones",
      servicesList: [
        "Desarrollo web",
        "Landing pages",
        "Integraciones",
        "Rediseño web",
        "Soporte y optimización",
        "Captación digital",
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
      amount: "5,490",
      currency: "MXN",
      amountNote: "landing page completa · pago único",
      cta: "Ver todos los precios",
    },
    // ── Quién está detrás (hallazgos #11 y #16) ──
    founder: {
      eyebrow: "// quién lo hace",
      name: "Cristian Posada",
      role: "Desarrollador web · Durango, México",
      title: "No es una agencia. Soy yo.",
      body:
        "Cuando me escribes, te contesto yo. Cuando revisamos tu negocio, lo reviso yo. Y cuando tu sitio esté en línea, sigo siendo yo quien lo mantiene. Trabajo desde Durango con negocios de todo México y de Estados Unidos, y prefiero llevar pocos proyectos bien que muchos a medias.",
      cta: "Agenda 15 minutos conmigo",
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
            "Sí lo ves: los precios están publicados. Desde $5,490 MXN una landing page hasta $21,900 MXN un sitio completo de 8 a 12 páginas. En la llamada solo confirmamos cuál te corresponde.",
        },
        {
          question: "¿La llamada de 15 minutos tiene costo o compromiso?",
          answer:
            "Ninguno de los dos. Son 15 minutos para entender tu negocio y decirte qué necesitas — aunque la respuesta sea que todavía no necesitas una página conmigo.",
        },
        {
          question: "No sé nada de tecnología. ¿Voy a poder?",
          answer:
            "Esa es justo la idea. Yo me encargo de dominio, hosting, correo y configuración. Tú solo me dices qué vendes y a quién.",
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
          "ProCode Dev | Desarrollo Web en Durango que Convierte Visitas en Clientes",
        description:
          "Desarrollo web enfocado en resultados desde Durango. Construyo sitios web, landing pages, integraciones y sistemas digitales que convierten visitantes en clientes y automatizan tu negocio. Agenda tu diagnóstico gratuito de 15 minutos.",
        heroKicker: "Inicio",
      },
      services: {
        title: "Servicios de Desarrollo Web y Automatización | ProCode Dev",
        description:
          "Sitios web, landing pages, integraciones, rediseño y soporte. Conoce los servicios y el proceso con el que construyo sistemas digitales que venden.",
        heroTitleA: "Servicios que convierten tu presencia digital en",
        heroHighlight: "un sistema de ventas",
        heroSubtitle:
          "Desarrollo web, captación e integraciones — todo con un proceso claro y enfocado en resultados.",
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
        title: "Precios de Desarrollo Web y Asesoría Digital | ProCode Dev",
        description:
          "Precios claros: asesoría de presencia digital, landing pages, sitios completos, integraciones y soporte mensual con reporte de desempeño. Agenda tu diagnóstico gratuito.",
        heroTitleA: "Precios claros para convertir tu web en",
        heroHighlight: "tu mejor vendedor",
        heroSubtitle:
          "Invierte una vez y deja que tu web trabaje por ti todos los días. Sin sorpresas: cada proyecto se cotiza según su alcance real y lo definimos juntos en tu diagnóstico gratuito.",
      },
      contact: {
        title: "Contacto | Agenda tu Diagnóstico Gratuito | ProCode Dev",
        description:
          "Agenda tu diagnóstico gratuito de 15 minutos, o escríbeme por WhatsApp si prefieres. Sin compromiso y sin tecnicismos.",
        heroTitleA: "Agenda 15 minutos",
        heroHighlight: "conmigo",
        heroSubtitle:
          "Elige el horario que te acomode y platicamos 15 minutos. Sin costo, sin compromiso.",
      },
    },
  },

  en: {
    langName: "EN",
    otherLangName: "ES",
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      pricing: "Pricing",
      blog: "Blog",
      contact: "Contact",
      cta: "Book a diagnosis",
    },
    common: {
      ctaPrimary: "Book a free diagnosis",
      ctaWhatsapp: "Message on WhatsApp",
      ctaProposal: "Request a proposal",
      free: "Free · no commitment",
      viewServices: "View services",
    },
    hero: {
      eyebrow: "// web development · durango, mexico",
      titleA: "Websites and digital systems that",
      titleHighlight: "grow",
      titleB: "your business.",
      subtitle:
        "We design websites and digital systems that turn visitors into customers and automate your operation. Stop losing hours repeating yourself and chasing leads: your site works for you while you sell.",
      badges: ["Professional design", "Results-focused", "Ongoing support"],
      cardLabel: "Digital system",
      cardTitle: "Grow your business online",
      cardText:
        "Website, forms, WhatsApp, booking and follow-up connected into a single structure.",
      cardCta: "Request a proposal",
      panelTitle: "What you end up with",
      panelItems: [
        "A page that explains your service so you don't have to",
        "A WhatsApp button with the message already written",
        "Online booking wired to your calendar",
        "Form submissions in your inbox instantly",
      ],
      chips: ["Landing pages", "Integrations", "Automation"],
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
          category: "Support & optimization",
          title: "Continuous improvement and maintenance",
          description:
            "We provide technical and strategic follow-up to keep your site updated, stable and aligned with your business goals.",
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
        "From an advisory to get clarity, to a full site with automatic follow-up. Choose where to start and grow at your own pace.",
      popular: "Most chosen",
      currencyLabel: "Show prices in",
      currencyMxn: "MXN",
      currencyUsd: "USD",
      currencyNoteMxn:
        "Prices in Mexican pesos, at a fixed rate of $18 MXN per US dollar.",
      currencyNoteUsd: "Prices in US dollars.",
      mxnUnit: "MXN",
      mxnUnitMonth: "MXN / month",
      advisory: {
        badge: "Step 2 · After the diagnosis",
        name: "Digital Presence Advisory",
        price: "75",
        priceMxn: "1,390",
        currency: "USD",
        priceNote: "one-time · credited to your project",
        hook: "For when we have already talked and you want the full plan in writing.",
        description:
          "The free 15-minute diagnosis gives you a first read. This is what comes next if you want depth: I take a deep look at how a client finds you today on Google, social media and WhatsApp, get inside your business and hand you a written plan of what to improve and in what order. You keep the plan, whether or not you work with me.",
        homeEyebrow: "// the next step",
        homeTitle: "Want the full plan in writing?",
        prereq:
          "Always start with the free 15-minute diagnosis. If we see there that you need an in-depth plan, this is the step that follows.",
        viewPricing: "See all pricing",
        waText:
          "Hi Cristian 👋 I'm interested in the Digital Presence Advisory ($75 USD). I'd like to know how clients find me today on Google, social media and WhatsApp and get an improvement plan. How do we start?",
        stepsTitle: "How it works (3 phases)",
        steps: [
          {
            name: "Phase 1 · We get to know your business",
            description:
              "Call + short questionnaire: what you sell, your ideal client and how you capture clients today.",
          },
          {
            name: "Phase 2 · In-depth diagnosis",
            description:
              "We review your presence on Google, Maps, reviews, social media, your current site and your WhatsApp.",
          },
          {
            name: "Phase 3 · Solutions plan",
            description:
              "You get 3 to 5 prioritized improvements and a clear proposal on how to carry them out.",
          },
        ],
        creditNote:
          "The $75 is credited in full if you decide to do your project with us. In practice, the advisory is free if you move forward.",
        cta: "Book my advisory",
      },
      extrasTitle: "Add-on services",
      extrasSubtitle: "Extras to keep your site growing and up to date.",
      note: "These are the real prices, not a reference range: what you see is what you pay for the scope described in each plan. If your project falls outside that scope, I tell you before we start and give you the exact number — never halfway through the work.",
      maintenance: {
        badge: "Recommended · Continuity",
        name: "Monthly web support",
        pricePrefix: "from",
        price: "59",
        priceMxn: "1,090",
        currency: "USD / mo",
        priceNote: "no lock-in contract",
        hook: "Your site always up to date, and you always aware of how it's working.",
        description:
          'You don\'t pay "in case something breaks". Every month you get a report on how your site performed —how many people came in and how many messaged you on WhatsApp— and I keep it fast, secure and updated, plus make the changes you need without you learning anything technical.',
        featuresTitle: "Every month includes:",
        features: [
          "Monthly performance report: visits, WhatsApp button clicks, forms received and most-viewed pages.",
          "Uptime and speed monitoring: your site always online and fast.",
          "Monthly site backup: if something fails, it's restored.",
          "Security and platform updates.",
          "Up to 3–4 minor changes: text, photos, prices, hours, promotions.",
          "1 improvement recommendation per month, based on your report's numbers.",
          "Priority support for any urgent issue.",
        ],
        footNote:
          "No lock-in contract. Cancel whenever you want. It's like having someone in charge of your digital presence for less than the cost of a meal.",
        waText:
          "Hi Cristian 👋 I'm interested in the Monthly web support (from $59 USD/mo). I want to keep my site fast and secure and get the monthly performance report. How do I activate it?",
        cta: "Activate my support",
      },
      packages: [
        {
          name: "Landing Page",
          price: "299",
          priceMxn: "5,490",
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
            "Hi Cristian 👋 I'm interested in the Landing Page ($299 USD). I want a page 100% focused on capturing clients. Can you tell me more?",
          highlighted: false,
        },
        {
          name: "Website 4–6 pages",
          price: "599",
          priceMxn: "10,900",
          currency: "USD",
          pricePrefix: "",
          tagline: "The favorite of growing businesses",
          description:
            "Your whole business online, with a structure built to sell and build trust from the first click.",
          features: [
            "4 to 6 strategic sections",
            "Sales and trust structure",
            "WhatsApp + connected forms",
            "Base SEO so you get found",
            "Fast, professional design",
          ],
          cta: "Start my site",
          waText:
            "Hi Cristian 👋 I'm interested in the 4–6 page Website ($599 USD). I want to take my whole business online with a structure that sells. How do we start?",
          highlighted: true,
        },
        {
          name: "Website 8–12 pages",
          price: "1,199",
          priceMxn: "21,900",
          currency: "USD",
          pricePrefix: "from",
          tagline: "Full presence and digital system",
          description:
            "A robust site for larger businesses: more sections, integrations and a clean digital operation.",
          features: [
            "8 to 12 complete sections",
            "Integrations and automation",
            "Lead capture + follow-up system",
            "Advanced technical SEO",
            "Launch support",
          ],
          cta: "Quote my site",
          waText:
            "Hi Cristian 👋 I'm interested in the 8–12 page Website (from $1,199 USD) with integrations and follow-up. I'd like a quote. Can we talk?",
          highlighted: false,
        },
      ],
      extras: [
        {
          name: "Website redesign",
          price: "$299 – $1,199",
          priceMxn: "$5,490 – $21,900",
          unit: "USD or more",
          description:
            "Renew image, structure and conversion on your current site without starting from scratch.",
        },
        {
          name: "Website optimization",
          price: "$299",
          priceMxn: "$5,490",
          unit: "USD",
          description:
            "More speed, better experience and CTAs that actually turn visits into messages.",
        },
        {
          name: "Extra page",
          price: "$199",
          priceMxn: "$3,690",
          unit: "USD",
          description: "Add an extra section to a site you already have with us.",
        },
        {
          name: "Urgent tweaks",
          price: "$99",
          priceMxn: "$1,890",
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
            "It depends on scope. A landing page usually takes 1 to 2 weeks, and a full site with integrations 3 to 6 weeks. After the diagnosis we give you a timeline with clear dates and deliverables.",
        },
        {
          question: "How much does a website cost with you?",
          answer:
            "Plans range from $299 USD (landing page) to $1,199 USD (full 8–12 page site). Start with the free 15-minute diagnosis: that's where we define the exact scope and I give you the real number, no commitment.",
        },
        {
          question:
            "What is the Digital Presence Advisory and how is it different from a project?",
          answer:
            "The free diagnosis is a 15-minute call: the entry point, at no cost. The Advisory ($75 USD) is the step that follows if you want depth: I analyze your presence on Google, social media and WhatsApp in detail and hand you a written, prioritized plan of improvements. It's not a website: it's the clarity of knowing what to do first. If you later do your project with me, it's credited in full.",
        },
        {
          question: "Is the advisory free if I later hire a project?",
          answer:
            "Yes. The $75 advisory is fully deducted from the price of your project. If you decide to move forward, the advisory is free; and if not, you keep the improvement plan anyway.",
        },
        {
          question: "What does the monthly maintenance include?",
          answer:
            "Every month you get a performance report for your site (visits, WhatsApp clicks, forms and most-viewed pages), plus speed and uptime monitoring, backup, security updates, up to 3–4 minor changes and an improvement recommendation. All with no lock-in contract: cancel whenever you want.",
        },
        {
          question: "Do you include domain and hosting?",
          answer:
            "Yes. We guide and set up your domain, hosting and professional email. If you already have them, we work on your current infrastructure without issue.",
        },
        {
          question: "Can you integrate WhatsApp, forms or CRM?",
          answer:
            "Absolutely. We connect forms, WhatsApp buttons, booking calendars, CRM and automations so every lead is registered and followed up automatically.",
        },
        {
          question: "Will my website be editable?",
          answer:
            "Depending on your needs. We build high-performance static sites or editable structures with an admin panel when you need to update content frequently.",
        },
        {
          question: "What do I need to get started?",
          answer:
            "Just a diagnosis call. In it we understand your business, goals, services, ideal client and the action you want to drive: messages, bookings, sign-ups or sales.",
        },
        {
          question: "Do you offer support after launch?",
          answer:
            "Yes. The monthly support plan (from $59 USD/mo) keeps your site fast, secure and updated, and every month we send you a report on how your page is working. No lock-in contract.",
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
    freeAudit: {
      badge: "🎁 Free · no commitment",
      titleA: "Already have a site? We'll tell you",
      titleHighlight: "3 things",
      titleB: "to make it sell more.",
      subtitle:
        "We review your current site for free and send you 3 concrete improvements in design, speed or conversion you can apply right away. And if you don't have a site yet, we tell you where to start.",
      bullets: ["✓ Free", "✓ No commitment", "✓ In 24–48 h"],
      fieldName: "Name",
      fieldWhatsapp: "WhatsApp",
      fieldSite: "Your website (optional)",
      cta: "I want my free audit",
      sending: "Sending…",
      success:
        "Done! We got your request. We'll send your 3 improvements in 24–48 h.",
      error: "There was a problem. Message us on WhatsApp and we'll sort it out.",
    },
    calendly: {
      eyebrow: "🗓️ book online",
      titleA: "Book your",
      titleHighlight: "free diagnosis",
      subtitle:
        "Pick the time that works best for you. In 15 minutes we review your business and I tell you exactly what your digital presence needs. Free, no commitment.",
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
      eyebrow: "// book your diagnosis",
      title:
        "Ready to stop wasting time and turn your site into your best salesperson?",
      subtitle:
        "Book a 15-minute call and let's review together what your business needs: a more professional page, a landing page to capture leads, integrations or a more complete digital structure.",
      ctaPrimary: "Book a free diagnosis",
      ctaWhatsapp: "Chat on WhatsApp",
    },
    footer: {
      tagline:
        "I'm Cristian Posada. From Durango, Mexico, I build websites, landing pages, integrations and lead-capture systems for businesses that want a stronger, more functional digital presence.",
      navTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contact",
      hours: "Monday to Sunday",
      location: "Durango, Mexico · working remotely across the country",
      cta: "Book a diagnosis",
      rights: "All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms & conditions",
      servicesList: [
        "Web development",
        "Landing pages",
        "Integrations",
        "Website redesign",
        "Support & optimization",
        "Digital lead-gen",
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
      amount: "299",
      currency: "USD",
      amountNote: "complete landing page · one-time",
      cta: "See all pricing",
    },
    // ── Who's behind it (findings #11 and #16) ──
    founder: {
      eyebrow: "// who does it",
      name: "Cristian Posada",
      role: "Web developer · Durango, Mexico",
      title: "It's not an agency. It's me.",
      body:
        "When you message me, I'm the one who answers. When we review your business, I'm the one reviewing it. And once your site is live, I'm still the one maintaining it. I work from Durango with businesses across Mexico and the United States, and I'd rather take on few projects and do them well than many done halfway.",
      cta: "Book 15 minutes with me",
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
            "You do see it: pricing is published. From $299 USD for a landing page to $1,199 USD for a full 8–12 page site. On the call we just confirm which one fits you.",
        },
        {
          question: "Does the 15-minute call cost anything or commit me?",
          answer:
            "Neither. It's 15 minutes to understand your business and tell you what you need — even if the answer is that you don't need a site from me yet.",
        },
        {
          question: "I'm not technical at all. Will I manage?",
          answer:
            "That's exactly the point. I handle domain, hosting, email and setup. You just tell me what you sell and to whom.",
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
        title: "ProCode Dev | Web Development Agency that Turns Visits into Clients",
        description:
          "Results-focused web development agency. We build websites, landing pages, integrations and digital systems that turn visitors into clients and automate your business. Book your free diagnosis.",
        heroKicker: "Home",
      },
      services: {
        title: "Web Development & Automation Services | ProCode Dev",
        description:
          "Websites, landing pages, integrations, redesign and support. Discover our services and the process we use to build digital systems that sell.",
        heroTitleA: "Services that turn your digital presence into",
        heroHighlight: "a sales system",
        heroSubtitle:
          "Web development, lead capture and integrations — all with a clear, results-focused process.",
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
        title: "Web Development & Digital Advisory Pricing | ProCode Dev",
        description:
          "Clear pricing: digital presence advisory, landing pages, full sites, integrations and monthly support with a performance report. Book your free diagnosis.",
        heroTitleA: "Clear pricing to turn your website into",
        heroHighlight: "your best salesperson",
        heroSubtitle:
          "Invest once and let your site work for you every single day. No surprises: every project is quoted by its real scope and we define it together in your free diagnosis.",
      },
      contact: {
        title: "Contact | Book Your Free Diagnosis | ProCode Dev",
        description:
          "Tell us about your project and we'll reply fast. Book a free diagnosis or message us on WhatsApp — no commitment and no jargon.",
        heroTitleA: "Book 15 minutes",
        heroHighlight: "with me",
        heroSubtitle:
          "Pick a time that works for you and we'll talk for 15 minutes. Free, no commitment.",
      },
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
    es: "Hola Cristian 👋 Vi tu página y me interesa una web para mi negocio. ¿Podemos platicar?",
    en: "Hi Cristian 👋 I saw your site and I'm interested in a website for my business. Can we talk?",
  },
  services: {
    es: "Hola Cristian 👋 Estaba viendo tus servicios y quiero saber cuál le queda a mi negocio.",
    en: "Hi Cristian 👋 I was looking at your services and I want to know which one fits my business.",
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
