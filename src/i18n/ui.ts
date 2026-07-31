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
};

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
      eyebrow: "// agencia de desarrollo web",
      titleA: "Sitios web y sistemas digitales que",
      titleHighlight: "hacen crecer",
      titleB: "tu negocio.",
      subtitle:
        "Diseñamos sitios web y sistemas digitales que convierten visitantes en clientes y automatizan tu operación. Deja de perder horas respondiendo lo mismo y persiguiendo prospectos: tu web trabaja por ti mientras tú vendes.",
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
      statLeads: "Leads generados",
      statConversion: "Conversión estimada",
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
            "Conectamos tus herramientas para automatizar procesos y ahorrar tiempo.",
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
      eyebrow: "// nuestros servicios",
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
            "Creamos landing pages estratégicas para anuncios, promociones o servicios específicos, optimizadas para generar mensajes, registros o citas.",
        },
        {
          icon: "⚙",
          category: "Integraciones y automatización",
          title: "Automatización e integración de herramientas",
          description:
            "Conectamos formularios, WhatsApp, calendarios, CRM y otras herramientas para que tu operación digital sea más ordenada y eficiente.",
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
      eyebrow: "// nuestro proceso",
      titleA: "Un proceso claro, estratégico y enfocado en",
      titleHighlight: "resultados",
      subtitle:
        "No trabajamos al azar. Un proceso claro significa menos vueltas, menos tiempo perdido y una web lista para vender más rápido.",
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
            "Construimos una experiencia digital profesional, clara, rápida y alineada con tu marca.",
        },
        {
          number: "04",
          title: "Integración y lanzamiento",
          description:
            "Conectamos formularios, WhatsApp, calendario, CRM o herramientas necesarias para operar mejor.",
        },
        {
          number: "05",
          title: "Optimización",
          description:
            "Revisamos resultados, detectamos mejoras y mantenemos la estructura digital en evolución.",
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
      philosophyTitle: "Nuestra filosofía",
      philosophyText:
        "No construimos sitios para llenar espacio. Construimos sistemas digitales que comunican, conectan y ayudan a vender mejor.",
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
            "Conectamos formularios, WhatsApp, CRM, calendario, email o herramientas clave para tu operación.",
        },
      ],
    },
    caseStudy: {
      eyebrow: "// proyecto destacado",
      titleA: "Una estructura digital pensada para",
      titleHighlight: "generar oportunidades",
      subtitle:
        "Así se ve un sistema digital completo: presencia profesional, captación, agenda e integraciones trabajando juntas para venderte mientras tú te ocupas del negocio.",
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
        "Una selección de sitios web que hemos construido para negocios que querían verse más profesionales y captar mejor. Haz clic para verlos en vivo.",
      viewProject: "Ver proyecto",
      cta: "Quiero un sitio así para mi negocio",
      projects: [
        {
          name: "Fernanda Silva — Nutrióloga",
          url: "https://fersilvanutricion.com/",
          badge: "Salud & bienestar",
          description:
            "Sitio profesional que comunica sus servicios, transmite confianza y facilita que nuevos pacientes agenden su consulta.",
          tags: ["Sitio web", "Salud", "Captación"],
        },
        {
          name: "Cristian Posada — Marca personal",
          url: "https://cristianposada.com/",
          badge: "Marca personal",
          description:
            "Sitio de marca personal enfocado en posicionar autoridad, mostrar proyectos y convertir visitantes en contactos reales.",
          tags: ["Marca personal", "Branding", "Conversión"],
        },
        {
          name: "Trejo Landscaping",
          url: "https://tj-landscaping.com/",
          badge: "Servicios locales",
          description:
            "Sitio de servicios que destaca su trabajo, transmite profesionalismo y capta solicitudes de cotización.",
          tags: ["Sitio web", "Servicios", "Negocio local"],
        },
      ],
    },
    pricing: {
      eyebrow: "// precios",
      titleA: "Invierte una vez y recupera tu",
      titleHighlight: "tiempo",
      titleB: "cada día.",
      subtitle:
        "Cada hora que pasas explicando tu negocio, respondiendo lo mismo por WhatsApp o persiguiendo prospectos, es tiempo que no inviertes en vender. Construimos la estructura que trabaja por ti — precios claros, sin sorpresas.",
      popular: "Más elegido",
      extrasTitle: "Servicios adicionales",
      extrasSubtitle:
        "Complementos para mantener tu sitio creciendo y actualizado.",
      note: "Precios de referencia en pesos mexicanos (MXN). Cada proyecto se cotiza según su alcance real: en tu diagnóstico gratuito lo definimos juntos, sin compromiso.",
      packages: [
        {
          name: "Landing Page",
          price: "2,500",
          currency: "MXN",
          tagline: "Empieza a captar clientes ya",
          description:
            "Una sola página, enfocada 100% en convertir. Ideal para lanzar un servicio o campaña sin complicarte.",
          features: [
            "Página única de alta conversión",
            "Copy de ventas + llamada a la acción clara",
            "Botón directo a WhatsApp",
            "Diseño impecable en móvil",
          ],
          cta: "Quiero mi landing",
          highlighted: false,
        },
        {
          name: "Sitio Web 4–6 secciones",
          price: "5,500",
          currency: "MXN",
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
          highlighted: true,
        },
        {
          name: "Sitio Web 8–12 secciones",
          price: "12,000",
          currency: "MXN",
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
          highlighted: false,
        },
      ],
      extras: [
        {
          name: "Rediseño web",
          price: "$3,000 – $12,000",
          unit: "MXN",
          description:
            "Renueva imagen, estructura y conversión sobre tu sitio actual, sin empezar de cero.",
        },
        {
          name: "Optimización web",
          price: "$3,000",
          unit: "MXN",
          description:
            "Más velocidad, mejor experiencia y CTAs que sí convierten visitas en mensajes.",
        },
        {
          name: "Página adicional",
          price: "$900",
          unit: "MXN",
          description:
            "Suma una sección extra a un sitio que ya tienes con nosotros.",
        },
        {
          name: "Soporte web mensual",
          price: "Desde $699",
          unit: "MXN / mes",
          description:
            "Mantenimiento y cambios menores. Tu sitio siempre al día sin que te quite tiempo.",
        },
        {
          name: "Ajustes urgentes",
          price: "$500 – $1,000",
          unit: "MXN",
          description:
            "Cambios rápidos fuera de alcance, resueltos con prioridad el mismo día.",
        },
      ],
    },
    integrations: {
      eyebrow: "// integraciones",
      title: "Conectamos tus herramientas favoritas",
      subtitle:
        "Tu página no debe vivir aislada. La conectamos con tus herramientas para que la captación y el seguimiento sucedan solos, sin trabajo manual.",
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
      titleA: "Resolvemos tus",
      titleHighlight: "dudas principales",
      subtitle:
        "Antes de iniciar cualquier proyecto, buscamos que tengas claridad sobre el proceso, alcance, integraciones y siguientes pasos.",
      moreQuestion: "¿Tienes otra pregunta?",
      items: [
        {
          question: "¿Cuánto tiempo toma desarrollar mi sitio web?",
          answer:
            "Depende del alcance. Una landing page suele tomar de 1 a 2 semanas, y un sitio completo con integraciones de 3 a 6 semanas. Tras el diagnóstico te entregamos un cronograma con fechas y entregables claros.",
        },
        {
          question: "¿Cuánto cuesta un sitio web con ustedes?",
          answer:
            "Nuestros planes van desde $2,500 MXN (landing page) hasta $12,000 MXN (web completa). Puedes ver el detalle en la sección de Precios; en tu diagnóstico gratuito definimos el alcance exacto sin compromiso.",
        },
        {
          question: "¿Incluyen dominio y hosting?",
          answer:
            "Sí. Te orientamos y configuramos dominio, hosting y correo profesional. Si ya cuentas con ellos, trabajamos sobre tu infraestructura actual sin problema.",
        },
        {
          question: "¿Pueden integrar WhatsApp, formularios o CRM?",
          answer:
            "Por supuesto. Conectamos formularios, botones de WhatsApp, calendarios de citas, CRM y automatizaciones para que cada prospecto quede registrado y con seguimiento automático.",
        },
        {
          question: "¿Mi sitio web será editable?",
          answer:
            "Según tus necesidades. Construimos sitios estáticos de alto rendimiento o estructuras editables con panel de administración cuando necesitas actualizar contenido con frecuencia.",
        },
        {
          question: "¿Qué necesito para empezar?",
          answer:
            "Solo una llamada de diagnóstico. En ella entendemos tu negocio, objetivos, servicios, cliente ideal y la acción que quieres generar: mensajes, citas, registros o ventas.",
        },
        {
          question: "¿Ofrecen soporte después del lanzamiento?",
          answer:
            "Sí. Ofrecemos planes de soporte, mantenimiento y optimización continua para mantener tu sitio rápido, seguro, actualizado y alineado con tus objetivos comerciales.",
        },
      ],
    },
    testimonials: {
      eyebrow: "// testimonios",
      titleA: "Negocios que ya",
      titleHighlight: "ganan tiempo",
      titleB: "con nosotros",
      subtitle:
        "No solo entregamos una página: entregamos tranquilidad y resultados. Esto es lo que dicen quienes ya trabajan con ProCode Dev.",
      items: [
        {
          quote:
            "Antes explicaba mi servicio una y otra vez por mensaje. Ahora mi página lo hace por mí: los pacientes llegan ya sabiendo cómo trabajo y agendan solos. Me devolvió muchísimo tiempo.",
          name: "Fernanda Silva",
          role: "Nutrióloga",
          initials: "FS",
          service: "Sitio web + agenda de citas",
        },
        {
          quote:
            "La página se ve profesional y eso cambió cómo nos ven los clientes. Empezamos a recibir solicitudes de cotización sin tener que andar detrás de cada persona. Muy contentos con el resultado.",
          name: "Trejo Landscaping",
          role: "Servicios de jardinería y paisajismo",
          initials: "TL",
          service: "Sitio web + captación de cotizaciones",
        },
        {
          quote:
            "Nos resolvieron el correo profesional, algunas automatizaciones y el soporte técnico. Todo funciona sin que tengamos que estar pendientes, y cuando surge algo nos responden rápido. Un peso menos encima.",
          name: "Constructora Izcalli",
          role: "Construcción y desarrollo",
          initials: "CI",
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
      error: "Hubo un problema. Escríbenos por WhatsApp y lo resolvemos.",
    },
    calendly: {
      eyebrow: "🗓️ agenda en línea",
      titleA: "Reserva tu",
      titleHighlight: "diagnóstico gratuito",
      subtitle:
        "Elige el horario que mejor te acomode. En 15 minutos revisamos tu negocio y te decimos exactamente qué necesita tu presencia digital.",
    },
    contact: {
      eyebrow: "// contacto",
      titleA: "Cuéntanos tu proyecto y te",
      titleHighlight: "respondemos rápido",
      subtitle:
        "Llena el formulario y te contactamos con una propuesta clara. Sin compromiso y sin tecnicismos: solo cómo tu negocio puede ahorrar tiempo y vender más.",
      perks: [
        "Respuesta en menos de 24 horas",
        "Diagnóstico inicial gratuito",
        "Atención directa, sin intermediarios",
      ],
      directTitle: "¿Prefieres escribirnos directo?",
      fieldName: "Nombre",
      fieldEmail: "Correo",
      fieldPhone: "WhatsApp / Teléfono",
      fieldType: "Tipo de proyecto",
      fieldMessage: "Cuéntanos sobre tu negocio",
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
      error: "No se pudo enviar. Escríbenos por WhatsApp y te atendemos.",
    },
    finalCta: {
      eyebrow: "// agenda tu diagnóstico",
      title:
        "¿Listo para dejar de perder tiempo y convertir tu web en tu mejor vendedor?",
      subtitle:
        "Agenda una llamada y revisemos juntos qué necesita tu negocio: una página más profesional, una landing para captar prospectos, integraciones o una estructura digital más completa.",
      ctaPrimary: "Solicitar propuesta",
      ctaWhatsapp: "Hablar por WhatsApp",
    },
    footer: {
      tagline:
        "Desarrollo web estratégico, landing pages, integraciones y sistemas de captación que ayudan a negocios a tener una presencia digital más sólida y funcional.",
      navTitle: "Navegación",
      servicesTitle: "Servicios",
      contactTitle: "Contacto",
      hours: "Lunes a Domingo",
      location: "México / Remoto",
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
    pageMeta: {
      home: {
        title:
          "ProCode Dev | Agencia de Desarrollo Web que Convierte Visitas en Clientes",
        description:
          "Agencia de desarrollo web enfocada en resultados. Creamos sitios web, landing pages, integraciones y sistemas digitales que convierten visitantes en clientes y automatizan tu negocio. Agenda tu diagnóstico gratuito.",
        heroKicker: "Inicio",
      },
      services: {
        title: "Servicios de Desarrollo Web y Automatización | ProCode Dev",
        description:
          "Sitios web, landing pages, integraciones, rediseño y soporte. Conoce nuestros servicios y el proceso con el que construimos sistemas digitales que venden.",
        heroTitleA: "Servicios que convierten tu presencia digital en",
        heroHighlight: "un sistema de ventas",
        heroSubtitle:
          "Desarrollo web, captación e integraciones — todo con un proceso claro y enfocado en resultados.",
      },
      portfolio: {
        title: "Portafolio de Sitios Web | ProCode Dev",
        description:
          "Proyectos reales de sitios web y landing pages que hemos construido para negocios que querían verse más profesionales y captar mejores clientes.",
        heroTitleA: "Proyectos que",
        heroHighlight: "generan oportunidades",
        heroSubtitle:
          "Sitios reales, en vivo, construidos para verse profesionales y captar mejor.",
      },
      pricing: {
        title: "Precios de Desarrollo Web | ProCode Dev",
        description:
          "Precios claros de desarrollo web: landing pages, sitios completos, integraciones y soporte. Sin sorpresas. Agenda tu diagnóstico gratuito y define tu alcance.",
        heroTitleA: "Precios claros para",
        heroHighlight: "recuperar tu tiempo",
        heroSubtitle:
          "Invierte una vez y deja que tu web trabaje por ti todos los días.",
      },
      contact: {
        title: "Contacto | Agenda tu Diagnóstico Gratuito | ProCode Dev",
        description:
          "Cuéntanos tu proyecto y te respondemos rápido. Agenda un diagnóstico gratuito o escríbenos por WhatsApp — sin compromiso y sin tecnicismos.",
        heroTitleA: "Hablemos de tu",
        heroHighlight: "proyecto",
        heroSubtitle:
          "Agenda tu diagnóstico gratuito o escríbenos directo. Te respondemos en menos de 24 horas.",
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
      eyebrow: "// web development agency",
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
      statLeads: "Leads generated",
      statConversion: "Estimated conversion",
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
      titleA: "A digital structure built to",
      titleHighlight: "generate opportunities",
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
      cta: "I want a site like this for my business",
      projects: [
        {
          name: "Fernanda Silva — Nutritionist",
          url: "https://fersilvanutricion.com/",
          badge: "Health & wellness",
          description:
            "A professional site that communicates her services, builds trust and makes it easy for new patients to book a consultation.",
          tags: ["Website", "Health", "Lead capture"],
        },
        {
          name: "Cristian Posada — Personal brand",
          url: "https://cristianposada.com/",
          badge: "Personal brand",
          description:
            "A personal brand site focused on positioning authority, showcasing projects and turning visitors into real contacts.",
          tags: ["Personal brand", "Branding", "Conversion"],
        },
        {
          name: "Trejo Landscaping",
          url: "https://tj-landscaping.com/",
          badge: "Local services",
          description:
            "A services site that highlights their work, conveys professionalism and captures quote requests.",
          tags: ["Website", "Services", "Local business"],
        },
      ],
    },
    pricing: {
      eyebrow: "// pricing",
      titleA: "Invest once and get your",
      titleHighlight: "time",
      titleB: "back every day.",
      subtitle:
        "Every hour you spend explaining your business, repeating yourself on WhatsApp or chasing leads is time you're not spending selling. We build the structure that works for you — clear pricing, no surprises.",
      popular: "Most chosen",
      extrasTitle: "Add-on services",
      extrasSubtitle: "Extras to keep your site growing and up to date.",
      note: "Reference prices in Mexican pesos (MXN). Every project is quoted by its real scope: in your free diagnosis we define it together, no commitment.",
      packages: [
        {
          name: "Landing Page",
          price: "2,500",
          currency: "MXN",
          tagline: "Start capturing clients now",
          description:
            "A single page, 100% focused on converting. Ideal to launch a service or campaign without complications.",
          features: [
            "Single high-conversion page",
            "Sales copy + clear call to action",
            "Direct WhatsApp button",
            "Flawless mobile design",
          ],
          cta: "I want my landing",
          highlighted: false,
        },
        {
          name: "Website 4–6 sections",
          price: "5,500",
          currency: "MXN",
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
          highlighted: true,
        },
        {
          name: "Website 8–12 sections",
          price: "12,000",
          currency: "MXN",
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
          highlighted: false,
        },
      ],
      extras: [
        {
          name: "Website redesign",
          price: "$3,000 – $12,000",
          unit: "MXN",
          description:
            "Renew image, structure and conversion on your current site without starting from scratch.",
        },
        {
          name: "Website optimization",
          price: "$3,000",
          unit: "MXN",
          description:
            "More speed, better experience and CTAs that actually turn visits into messages.",
        },
        {
          name: "Extra page",
          price: "$900",
          unit: "MXN",
          description: "Add an extra section to a site you already have with us.",
        },
        {
          name: "Monthly web support",
          price: "From $699",
          unit: "MXN / mo",
          description:
            "Maintenance and minor changes. Your site always up to date without taking your time.",
        },
        {
          name: "Urgent tweaks",
          price: "$500 – $1,000",
          unit: "MXN",
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
            "Our plans range from $2,500 MXN (landing page) to $12,000 MXN (full site). You can see the detail in the Pricing section; in your free diagnosis we define the exact scope with no commitment.",
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
            "Yes. We offer support, maintenance and continuous optimization plans to keep your site fast, secure, updated and aligned with your business goals.",
        },
      ],
    },
    testimonials: {
      eyebrow: "// testimonials",
      titleA: "Businesses already",
      titleHighlight: "saving time",
      titleB: "with us",
      subtitle:
        "We don't just deliver a page: we deliver peace of mind and results. Here's what those already working with ProCode Dev have to say.",
      items: [
        {
          quote:
            "I used to explain my service over and over by message. Now my site does it for me: patients arrive already knowing how I work and book on their own. It gave me back so much time.",
          name: "Fernanda Silva",
          role: "Nutritionist",
          initials: "FS",
          service: "Website + appointment booking",
        },
        {
          quote:
            "The site looks professional and that changed how clients see us. We started getting quote requests without chasing every person. Very happy with the result.",
          name: "Trejo Landscaping",
          role: "Landscaping & gardening services",
          initials: "TL",
          service: "Website + quote capture",
        },
        {
          quote:
            "They set up our professional email, some automations and technical support. Everything runs without us having to watch it, and when something comes up they respond fast. One less weight on us.",
          name: "Constructora Izcalli",
          role: "Construction & development",
          initials: "CI",
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
        "Pick the time that works best for you. In 15 minutes we review your business and tell you exactly what your digital presence needs.",
    },
    contact: {
      eyebrow: "// contact",
      titleA: "Tell us about your project and we'll",
      titleHighlight: "reply fast",
      subtitle:
        "Fill out the form and we'll get back to you with a clear proposal. No commitment and no jargon: just how your business can save time and sell more.",
      perks: [
        "Reply in under 24 hours",
        "Free initial diagnosis",
        "Direct attention, no middlemen",
      ],
      directTitle: "Prefer to message us directly?",
      fieldName: "Name",
      fieldEmail: "Email",
      fieldPhone: "WhatsApp / Phone",
      fieldType: "Project type",
      fieldMessage: "Tell us about your business",
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
        "Book a call and let's review together what your business needs: a more professional page, a landing page to capture leads, integrations or a more complete digital structure.",
      ctaPrimary: "Request a proposal",
      ctaWhatsapp: "Chat on WhatsApp",
    },
    footer: {
      tagline:
        "Strategic web development, landing pages, integrations and lead-capture systems that help businesses build a stronger, more functional digital presence.",
      navTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contact",
      hours: "Monday to Sunday",
      location: "Mexico / Remote",
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
        heroTitleA: "Projects that",
        heroHighlight: "generate opportunities",
        heroSubtitle:
          "Real, live sites built to look professional and capture better.",
      },
      pricing: {
        title: "Web Development Pricing | ProCode Dev",
        description:
          "Clear web development pricing: landing pages, full sites, integrations and support. No surprises. Book your free diagnosis and define your scope.",
        heroTitleA: "Clear pricing to",
        heroHighlight: "get your time back",
        heroSubtitle:
          "Invest once and let your site work for you every single day.",
      },
      contact: {
        title: "Contact | Book Your Free Diagnosis | ProCode Dev",
        description:
          "Tell us about your project and we'll reply fast. Book a free diagnosis or message us on WhatsApp — no commitment and no jargon.",
        heroTitleA: "Let's talk about your",
        heroHighlight: "project",
        heroSubtitle:
          "Book your free diagnosis or message us directly. We reply in under 24 hours.",
      },
    },
  },
} as const;

export type Dict = (typeof translations)[Lang];

export function useTranslations(lang: Lang): Dict {
  return translations[lang];
}
