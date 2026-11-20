/*
  ─────────────────────────────────────────────────────────────────────────
  LANDING LOCAL: MARKETING DIGITAL EN DURANGO (noviembre 2026)
  ─────────────────────────────────────────────────────────────────────────
  /marketing-digital-durango/ — landing de conversión para la campaña de
  captación de negocios locales en Durango, México. Solo en español.

  Diferencias con el resto del sitio:
  · Precios en pesos mexicanos (MXN). Son precios locales para negocios de
    Durango, más bajos que los publicados en USD; no se convierten con un
    tipo de cambio, los fijó Cristian (20 nov 2026).
  · Lo que se vende primero: el plan Crecimiento Local y la Landing Page
    (`highlighted`). El resto está para quien llega buscando otra cosa.
  · La galería «Nuestro trabajo» usa contenido real: un reel, un carrusel y
    un diseño por proyecto, hechos con capturas de los sitios publicados de
    cada cliente (public/images/trabajo/) y los testimonios ya publicados.
    Es contenido que ProCode creó SOBRE esos proyectos de desarrollo web:
    no decir que ProCode administra las redes de esos clientes.

  Videos: el hero y la sección del fundador aceptan un video propio
  (`heroVideo`, `founderVideo`). Mientras la ruta esté vacía se muestra la
  foto. Para activarlos, sube el .mp4 a /public/videos/ y pon aquí la ruta
  (por ejemplo "/videos/cristian-trabajando.mp4").
*/

export interface DurangoPlan {
  name: string;
  /** Orientación del plan, en una línea. */
  tagline: string;
  /** Precio base en MXN (sin signo). Vacío = cotización. */
  price: string;
  priceNote: string;
  description: string;
  rows: readonly { icon: string; label: string; value: string }[];
  cta: string;
  highlighted?: string;
}

export interface DurangoSimplePlan {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: readonly string[];
  highlighted?: string;
}

export const durango = {
  meta: {
    title: "Marketing Digital en Durango: Redes Sociales y Web | ProCode",
    description:
      "Manejo de redes sociales, contenido, reels, Meta Ads y páginas web para negocios de Durango. Planes desde $3,525 MXN al mes. Diagnóstico gratuito.",
    keywords:
      "marketing digital Durango, agencia de marketing en Durango, manejo de redes sociales Durango, community manager Durango, creación de contenido Durango, reels para negocios Durango, publicidad en Facebook e Instagram Durango, Meta Ads Durango, diseño de páginas web Durango, landing page Durango, agencia de marketing digital Durango México",
    serviceName: "Marketing digital y redes sociales en Durango",
    audience: "Negocios locales de Durango, México",
  },

  heroVideo: "",
  founderVideo: "",

  hero: {
    eyebrow: "// marketing digital en Durango",
    title: "Tu negocio merece más que",
    titleHighlight: "publicar por publicar.",
    subtitle:
      "En ProCode ayudamos a negocios de Durango a mejorar su presencia digital con contenido profesional, manejo de redes sociales y estrategias de marketing diseñadas para sus objetivos.",
    cta: "Solicita tu diagnóstico gratuito",
    secondary: "Ver planes y precios",
    facts: [
      { value: "$3,525", label: "MXN al mes · redes sociales" },
      { value: "$3,000", label: "MXN · landing page" },
    ],
    note: "Sesiones de grabación en tu negocio, en Durango, según el plan.",
    strip: [
      "Creación de contenido",
      "Facebook e Instagram",
      "Campañas publicitarias",
      "Estrategia digital",
      "Páginas web",
    ],
  },

  problem: {
    eyebrow: "// el problema",
    title: "Tener redes sociales no es lo mismo que tener una estrategia.",
    subtitle: "Si alguna de estas te suena, no es falta de ganas: es falta de un sistema.",
    items: [
      { icon: "calendar", text: "Publicas únicamente cuando tienes tiempo." },
      { icon: "search", text: "No sabes qué contenido crear para atraer a tus clientes." },
      { icon: "star", text: "Tus redes no transmiten la calidad real de tu negocio." },
      { icon: "smartphone", text: "No tienes tiempo para grabar, editar y administrar publicaciones." },
      { icon: "bar-chart", text: "Desconoces qué resultados está generando tu contenido." },
    ],
    before: {
      label: "Contenido improvisado",
      bio: "Negocio en Durango 📍 Pregunta por inbox",
      last: "Última publicación: hace 3 semanas",
      notes: ["Sin identidad visual", "Publicaciones sueltas", "Sin llamada a la acción"],
    },
    after: {
      label: "Contenido con estrategia",
      bio: "Tu servicio en Durango · Agenda por WhatsApp ↓",
      last: "3 a 4 publicaciones por semana",
      notes: ["Identidad clara", "Pilares de contenido", "Mensajes que venden"],
    },
    closing:
      "No necesitas dedicar más horas a tus redes. Necesitas una estrategia de contenido que trabaje para tu negocio.",
  },

  services: {
    eyebrow: "// nuestros servicios",
    title: "Nos encargamos de tu presencia digital. Tú te enfocas en tu negocio.",
    subtitle:
      "Todo lo que necesita tu negocio para verse profesional en línea y convertir esa atención en clientes, con un solo responsable.",
    items: [
      {
        icon: "sparkles",
        title: "Creación de contenido",
        text: "Reels, videos promocionales, fotografías, carruseles y publicaciones.",
      },
      {
        icon: "calendar",
        title: "Gestión de redes",
        text: "Planeación, calendarios editoriales y publicación en Facebook e Instagram.",
      },
      {
        icon: "megaphone",
        title: "Publicidad digital",
        text: "Creación, configuración y optimización de campañas en Meta Ads.",
      },
      {
        icon: "bar-chart",
        title: "Estrategia y análisis",
        text: "Objetivos, medición y decisiones respaldadas por los resultados.",
      },
      {
        icon: "layout",
        title: "Desarrollo web",
        text: "Landing pages y sitios web a la medida, con WhatsApp y formulario conectados, para que tus anuncios y tus redes tengan a dónde llevar a la gente.",
        link: { label: "Ver precios de páginas web", href: "#paginas-web" },
      },
    ],
  },

  work: {
    eyebrow: "// nuestro trabajo",
    title: "Así podemos transformar la comunicación de tu negocio.",
    subtitle:
      "Reels, carruseles y diseños que creamos con material real de proyectos de nuestros clientes. Elige un proyecto y mira cómo contamos su historia.",
    note: "Contenido elaborado por ProCode con capturas reales de los sitios que desarrollamos para cada cliente.",
    realBadge: "Proyecto real",
    showsLabel: "Qué muestra",
    formats: { reel: "Reel", carousel: "Carrusel", design: "Diseño" },
    cta: {
      title: "¿Tu negocio también merece verse así?",
      text: "Diseño web y contenido para negocios",
      site: "procodedev.com",
    },
    // Orden de las pestañas: primero el proyecto de Durango.
    projects: [
      {
        id: "izcalli",
        name: "Constructora Izcalli",
        short: "Izcalli",
        location: "Durango · México",
        service: "Sitio web institucional · correo, automatizaciones y soporte",
        summary:
          "Sitio institucional para una constructora de Durango, con nueve obras con ficha propia. Antes del sitio les resolvimos el correo profesional, automatizaciones y soporte técnico.",
        urlLabel: "constructoraizcalli.com",
        logo: "/images/logos/logo-izcalli.webp",
        bg: "#0f1b33",
        accent: "#e07a3f",
        quote:
          "Nos resolvieron el correo profesional, algunas automatizaciones y el soporte técnico. Todo funciona sin que tengamos que estar pendientes.",
        quoteBy: "Constructora Izcalli",
        reel: {
          shows: "Recorrido por el sitio en 4 tomas: las obras reales y lo que hace la constructora.",
          frames: [
            "Así presentamos a Constructora Izcalli en internet",
            "Cada obra con su ficha: El Pueblito",
            "Proyectos institucionales: UTD y UNIPOLI",
            "Ingeniería. Ejecución. Construcción.",
          ],
        },
        carousel: {
          shows: "El reto, lo que construimos y cómo quedó, en 5 láminas.",
          cover: { kicker: "Caso real · Durango", title: "Cómo convertimos años de obra en un portafolio que da confianza" },
          slides: [
            "Nueve obras construidas, cada una con su ficha",
            "Proyectos institucionales a la vista de quien decide",
          ],
          points: {
            title: "Lo que ahora encuentra un cliente",
            items: [
              "Obras reales con fotos y ficha propia",
              "Capacidades de ingeniería y ejecución",
              "Datos formales de la empresa a la vista",
              "Contacto directo desde cualquier página",
            ],
          },
        },
        design: {
          shows: "Testimonio real del cliente, con su sitio en pantalla.",
        },
      },
      {
        id: "trejo",
        name: "Trejos Landscaping & Gardening",
        short: "Trejos",
        location: "Salinas, California · EE. UU.",
        service: "Rediseño web bilingüe · SEO · Google Business",
        summary:
          "Rediseño completo de su sitio: de 22 a 102 páginas en inglés y español, reseñas de Google en todo el sitio y velocidad en celular de 75 a 98.",
        urlLabel: "tj-landscaping.com",
        logo: "/images/logos/logo-trejo.webp",
        bg: "#0f3d22",
        accent: "#a3e635",
        quote:
          "La página se ve profesional y eso cambió cómo nos ven los clientes. Empezamos a recibir solicitudes de cotización sin tener que andar detrás de cada persona.",
        quoteBy: "Trejos Landscaping & Gardening",
        reel: {
          shows: "El sitio nuevo en el celular: servicios, proyectos y cotización.",
          frames: [
            "El nuevo sitio de Trejos Landscaping",
            "36 servicios con página propia, en inglés y español",
            "Proyectos reales, cada uno con su descripción",
            "Velocidad en celular de 75 a 98",
          ],
        },
        carousel: {
          shows: "El antes y el después del rediseño, con sus números reales.",
          cover: { kicker: "Caso real · Rediseño", title: "De 22 a 102 páginas: el rediseño de Trejos Landscaping" },
          slides: [
            "Cada servicio con su propia página",
            "Proyectos recientes que venden por sí solos",
          ],
          points: {
            title: "Lo que cambió",
            items: [
              "De 22 a 102 páginas, en inglés y español",
              "Rendimiento en celular de 75 a 98",
              "Reseñas reales de Google en todo el sitio",
              "Perfil de Google Business optimizado",
            ],
          },
        },
        design: {
          shows: "Testimonio real del cliente, con su sitio en pantalla.",
        },
      },
      {
        id: "fersilva",
        name: "Fernanda Silva — Nutrióloga",
        short: "Fernanda Silva",
        location: "Consulta en línea y presencial",
        service: "Sitio web + agenda de citas",
        summary:
          "Sitio profesional para una nutrióloga: sus servicios explicados y la agenda en línea para que los pacientes reserven sin tener que preguntar.",
        urlLabel: "fersilvanutricion.com",
        logo: "/images/logos/logo-fersilva.webp",
        bg: "#1d5a73",
        accent: "#f5c6e6",
        quote:
          "Antes explicaba mi servicio una y otra vez por mensaje. Ahora mi página lo hace por mí: los pacientes llegan ya sabiendo cómo trabajo y agendan solos.",
        quoteBy: "Fernanda Silva, nutrióloga",
        reel: {
          shows: "Su sitio en el celular: enfoque, servicios y contacto.",
          frames: [
            "Nutrición para sentirte mejor: el sitio de Fernanda Silva",
            "Su enfoque y su historia, antes del primer mensaje",
            "Cada servicio explicado: valoración, plan y seguimiento",
            "Pacientes que llegan sabiendo cómo trabaja",
          ],
        },
        carousel: {
          shows: "Cómo un sitio le ahorró horas de mensajes, en 5 láminas.",
          cover: { kicker: "Caso real · Salud", title: "Cómo dejó de explicar su servicio por mensaje" },
          slides: [
            "Servicios explicados con lo que incluyen",
            "Contacto y agenda a un clic",
          ],
          points: {
            title: "Lo que cambió",
            items: [
              "Servicios con lo que incluyen y cuánto duran",
              "Agenda en línea: el paciente elige su horario",
              "Formación y enfoque visibles desde el inicio",
              "Menos mensajes repitiendo lo mismo",
            ],
          },
        },
        design: {
          shows: "Testimonio real de la clienta, con su sitio en pantalla.",
        },
      },
      {
        id: "miconta",
        name: "Mi Conta Universal",
        short: "Mi Conta",
        location: "Cincinnati, Ohio · EE. UU.",
        service: "Sitio web bilingüe · SEO local",
        summary:
          "Sitio bilingüe para un despacho de contabilidad y bookkeeping: ocho servicios con ficha, guía gratuita, WhatsApp directo y SEO local.",
        urlLabel: "micontau.com",
        logo: "/images/logos/logo-miconta.webp",
        bg: "#0b2a4a",
        accent: "#4ade80",
        quote: "",
        quoteBy: "",
        reel: {
          shows: "El sitio bilingüe en el celular: servicios, guía gratuita y equipo.",
          frames: [
            "Contabilidad para pequeños negocios, en español e inglés",
            "Ocho servicios, cada uno con su ficha",
            "Una guía gratuita que convierte visitas en prospectos",
            "Contigo, en cada paso de tu negocio",
          ],
        },
        carousel: {
          shows: "Cómo un despacho contable habla el idioma de sus clientes.",
          cover: { kicker: "Caso real · Contabilidad", title: "Un despacho contable que habla el idioma de sus clientes" },
          slides: [
            "Todos los trámites, en un solo lugar",
            "Una guía gratuita para captar prospectos",
          ],
          points: {
            title: "Lo que construimos",
            items: [
              "Ocho servicios con ficha propia",
              "Español e inglés en el mismo sitio",
              "WhatsApp directo y guía gratuita",
              "Preguntas frecuentes y SEO local",
            ],
          },
        },
        design: {
          shows: "La propuesta del despacho en una pieza, con su sitio en pantalla.",
          headline: "Español e inglés, en un solo sitio",
          sub: "Ocho servicios, guía gratuita y WhatsApp directo para pequeños negocios hispanos en Ohio.",
        },
      },
    ],
  },

  process: {
    eyebrow: "// cómo trabajamos",
    title: "Una estrategia de marketing, sin complicarte la operación.",
    subtitle:
      "Tú apruebas; nosotros coordinamos todo lo demás. Así se ve lo que estás pagando cada mes.",
    steps: [
      {
        icon: "search",
        title: "Conocemos tu negocio",
        text: "Analizamos tus redes, tus clientes, tu competencia y los objetivos que buscas alcanzar.",
      },
      {
        icon: "target",
        title: "Diseñamos tu estrategia",
        text: "Definimos pilares de contenido, formatos, mensajes y un calendario de publicaciones.",
      },
      {
        icon: "sparkles",
        title: "Creamos y publicamos",
        text: "Coordinamos la producción, edición, aprobación y publicación del contenido contratado.",
      },
      {
        icon: "bar-chart",
        title: "Medimos y mejoramos",
        text: "Revisamos el alcance, las interacciones relevantes, las consultas y los resultados que podamos atribuir a la estrategia.",
      },
    ],
    calendarTitle: "Calendario editorial · ejemplo de una semana",
    days: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    calendar: [
      { day: 0, type: "Reel", topic: "Detrás de cámaras", status: "Programado" },
      { day: 1, type: "Carrusel", topic: "Tips para tu cliente", status: "Aprobado" },
      { day: 3, type: "Reel", topic: "Testimonio", status: "En revisión" },
      { day: 4, type: "Diseño", topic: "Promoción del fin", status: "En revisión" },
      { day: 5, type: "Historia", topic: "Recordatorio", status: "Borrador" },
    ],
    approvalTitle: "Flujo de aprobación de cada pieza",
    approval: ["Guion", "Grabación", "Edición", "Tu aprobación", "Publicación"],
  },

  founder: {
    eyebrow: "// quién está detrás",
    title: "Marketing para negocios de Durango, con atención directa.",
    name: "Cristian Posada",
    role: "Fundador de ProCode Systems",
    body: [
      "Soy Cristian Posada. Desde hace 5 años desarrollo soluciones digitales —páginas web, automatizaciones y campañas— para negocios y empresas de México y del extranjero.",
      "ProCode tiene su sede en Durango y quiero trabajar directamente con los empresarios de aquí: cuando nos contratas, hablas conmigo, no con un intermediario ni con un equipo que cambia cada mes.",
    ],
    points: [
      { icon: "handshake", text: "Un responsable identificable desde la primera llamada" },
      { icon: "message-circle", text: "Atención directa por WhatsApp, en tu horario" },
      { icon: "map-pin", text: "Sesiones de grabación en tu negocio, en Durango" },
    ],
    clarification:
      "ProCode presta servicios digitales y no cuenta con oficina de atención al público. Las sesiones presenciales de contenido se coordinan en tu negocio, en Durango, según el paquete contratado.",
    photo: "/images/cristian-posada-retrato",
    photoAlt: "Cristian Posada, fundador de ProCode Systems, en Durango",
  },

  plans: {
    eyebrow: "// planes de marketing digital",
    title: "Elige cuánto quieres impulsar tu presencia digital.",
    subtitle:
      "Precios base en pesos mexicanos para negocios de Durango. La propuesta comercial detalla cada entregable; aquí tienes lo esencial para comparar.",
    currency: "MXN / mes",
    items: [
      {
        name: "Presencia",
        tagline: "Contenido y publicaciones consistentes",
        price: "3,525",
        priceNote: "MXN / mes",
        description: "Para comenzar a profesionalizar tus redes.",
        rows: [
          { icon: "file-text", label: "Entregables", value: "8 publicaciones al mes: 2 reels, 2 carruseles y 4 diseños" },
          { icon: "smartphone", label: "Grabación", value: "Reels editados con el material que tú nos envías" },
          { icon: "instagram", label: "Plataformas", value: "Facebook e Instagram" },
          { icon: "bar-chart", label: "Seguimiento", value: "Planeación, copy, programación y reporte básico" },
          { icon: "megaphone", label: "Publicidad", value: "No incluye campañas pagadas" },
          { icon: "calendar", label: "Término", value: "Mínimo 3 meses" },
        ],
        cta: "Quiero el plan Presencia",
      },
      {
        name: "Crecimiento Local",
        tagline: "Contenido, reels y gestión integral de redes",
        price: "6,575",
        priceNote: "MXN / mes",
        description: "Nuestra oferta principal: contenido grabado en tu negocio y redes administradas todo el mes.",
        rows: [
          { icon: "file-text", label: "Entregables", value: "12 publicaciones al mes: 4 reels, 4 carruseles y 4 diseños" },
          { icon: "map-pin", label: "Grabación", value: "1 sesión en tu negocio de hasta 2 horas al mes" },
          { icon: "instagram", label: "Plataformas", value: "Administración de Facebook e Instagram" },
          { icon: "bar-chart", label: "Seguimiento", value: "Estrategia de contenido, revisión de resultados y reunión mensual" },
          { icon: "megaphone", label: "Publicidad", value: "No incluye campañas pagadas" },
          { icon: "calendar", label: "Término", value: "Mínimo 3 meses" },
        ],
        cta: "Quiero el plan Crecimiento Local",
        highlighted: "Recomendado",
      },
      {
        name: "Impulso Digital",
        tagline: "Contenido, redes sociales y publicidad pagada",
        price: "10,575",
        priceNote: "MXN / mes",
        description: "Para negocios listos para invertir en captación de clientes.",
        rows: [
          { icon: "file-text", label: "Entregables", value: "2 a 4 reels por semana y 5 carruseles o diseños por semana" },
          { icon: "map-pin", label: "Grabación", value: "2 sesiones en tu negocio de hasta 2 horas al mes" },
          { icon: "instagram", label: "Plataformas", value: "Facebook, Instagram y Meta Ads" },
          { icon: "bar-chart", label: "Seguimiento", value: "Todo lo de Crecimiento Local, seguimiento de prospectos y optimización periódica" },
          { icon: "megaphone", label: "Publicidad", value: "1 campaña de Meta Ads gestionada · la inversión en anuncios va aparte" },
          { icon: "calendar", label: "Término", value: "Mínimo 3 meses" },
        ],
        cta: "Quiero el plan Impulso Digital",
      },
      {
        name: "A la medida",
        tagline: "Según el alcance de tu negocio",
        price: "",
        priceNote: "Cotización especial",
        description:
          "Para negocios más grandes o con necesidades específicas, que requieren una estrategia más completa.",
        rows: [
          { icon: "target", label: "Estrategia", value: "Por servicio, línea de negocio o sucursal" },
          { icon: "file-text", label: "Entregables", value: "Volumen y frecuencia según lo que necesites" },
          { icon: "megaphone", label: "Publicidad", value: "Campañas con distintos objetivos y audiencias" },
          { icon: "layout", label: "Se combina con", value: "Página web y posicionamiento en Google" },
        ],
        cta: "Solicitar cotización",
      },
    ] satisfies readonly DurangoPlan[],
    excludes:
      "No incluye respuesta de mensajes, gestión de ventas ni sesiones fotográficas extraordinarias en la mensualidad. La inversión en anuncios de Meta se paga por separado, directo a la plataforma.",
    web: {
      eyebrow: "// páginas web",
      title: "Y si tus redes necesitan a dónde llevar a la gente: tu página web.",
      subtitle:
        "Precios locales para negocios de Durango, en pago único. El total se confirma en la propuesta, antes de iniciar.",
      priceNote: "MXN · pago único",
      cta: "Quiero esta página",
      items: [
        {
          name: "Landing Page",
          price: "3,000",
          priceNote: "MXN · pago único",
          description:
            "Una página enfocada en un servicio y en un solo objetivo: que te escriban. Ideal para recibir el tráfico de tus anuncios y tus redes.",
          features: [
            "Página única de alta conversión",
            "Botón directo a WhatsApp y formulario",
            "Impecable en celular y de carga rápida",
            "SEO base y medición conectada",
          ],
          highlighted: "Ideal para empezar",
        },
        {
          name: "Sitio web de 4 a 6 páginas",
          price: "8,525",
          priceNote: "MXN · pago único",
          description: "Tu negocio completo en línea, con una página por cada servicio que vendes.",
          features: [
            "4 a 6 páginas, una por servicio",
            "WhatsApp, formularios y calendario conectados",
            "SEO local base para que te encuentren en Durango",
          ],
        },
        {
          name: "Sitio web de 8 a 12 páginas",
          price: "14,575",
          priceNote: "MXN · pago único",
          description: "Para negocios con varias líneas de servicio o varias sucursales.",
          features: [
            "8 a 12 páginas completas",
            "Formularios de cotización y agenda de citas",
            "SEO técnico avanzado y acompañamiento al lanzar",
          ],
        },
      ] satisfies readonly DurangoSimplePlan[],
    },
    seo: {
      eyebrow: "// posicionamiento en Google",
      title: "Para que te encuentren cuando buscan tu servicio en Durango.",
      subtitle:
        "Planes mensuales de SEO local y Perfil de Empresa en Google. El total se confirma tras una reunión inicial y un diagnóstico.",
      cta: "Quiero este plan",
      items: [
        {
          name: "Crecimiento+",
          price: "5,275",
          priceNote: "MXN / mes · desde",
          description:
            "Perfil de Empresa en Google con publicaciones cada semana, reseñas y SEO local para aparecer en el mapa y en las búsquedas de tu ciudad.",
          features: [
            "Perfil de Empresa en Google optimizado",
            "Publicaciones semanales en Google: novedades, ofertas y trabajos recientes",
            "Sistema para pedir reseñas y respuesta a reseñas",
            "SEO local y reporte mensual",
          ],
        },
        {
          name: "Marketing Digital",
          price: "8,775",
          priceNote: "MXN / mes · desde · mínimo 3 meses",
          description:
            "Todo lo de Crecimiento+ —incluidas las publicaciones semanales en Google— más campañas en Google Ads y Meta, SEO completo y una llamada estratégica mensual.",
          features: [
            "Campañas en Google Ads y Meta según la propuesta",
            "SEO continuo por servicio",
            "Reporte de métricas, costos y recomendaciones",
          ],
        },
      ] satisfies readonly DurangoSimplePlan[],
    },
  },

  faq: {
    eyebrow: "// preguntas frecuentes",
    titleA: "Lo que necesitas saber",
    titleHighlight: "antes de comenzar",
    subtitle: "Las condiciones reales del servicio, sin prometer seguidores, clientes ni ventas.",
    items: [
      {
        question: "¿Necesito tener página web para contratar el servicio?",
        answer:
          "No. Los planes de redes sociales funcionan sin página web. Si además quieres captar clientes con anuncios o aparecer en Google, una landing page —desde $3,000 MXN— le da a tu publicidad un lugar claro a dónde llevar a la gente, con WhatsApp y formulario conectados.",
      },
      {
        question: "¿Ustedes graban fotografías y videos de mi negocio?",
        answer:
          "Sí, en Durango. El plan Crecimiento Local incluye una sesión de grabación en tu negocio de hasta 2 horas al mes, e Impulso Digital incluye dos. En el plan Presencia editamos los reels con el material que tú nos envías, y te decimos qué grabar. Las sesiones fotográficas extraordinarias se cotizan aparte.",
      },
      {
        question: "¿Puedo aprobar el contenido antes de publicarlo?",
        answer:
          "Sí. Te compartimos el calendario y cada pieza antes de programarla, y nada se publica sin tu aprobación. Las rondas de cambios incluidas quedan definidas en tu propuesta.",
      },
      {
        question: "¿Tengo que invertir adicionalmente en publicidad?",
        answer:
          "Solo si eliges el plan Impulso Digital o una campaña a la medida. En ese caso la inversión en anuncios se paga por separado, directo a Meta, y tú decides el presupuesto. Los planes Presencia y Crecimiento Local no requieren inversión publicitaria.",
      },
      {
        question: "¿En cuánto tiempo puedo comenzar a ver resultados?",
        answer:
          "La constancia y una imagen más profesional se notan desde el primer mes. El alcance, las interacciones y las consultas crecen conforme se acumula contenido, normalmente entre el segundo y el tercer mes; por eso los planes tienen un mínimo de 3 meses. Con Meta Ads, los primeros 30 días sirven para calibrar la campaña. No prometemos cantidades de seguidores, clientes ni ventas: dependen de tu giro, tu oferta y tu atención.",
      },
    ],
  },

  diagnostic: {
    eyebrow: "// diagnóstico gratuito",
    title: "Descubre qué puedes mejorar en las redes sociales de tu negocio.",
    subtitle:
      "Revisaremos tu presencia actual e identificaremos tres prioridades para mejorar tu comunicación digital. Sin costo y sin compromiso de contratación.",
    paths: [
      {
        icon: "calendar",
        kicker: "¿Quieres hablarlo ya?",
        title: "Agenda una revisión de 20 minutos",
        text: "Elige el horario en el calendario y revisamos juntos tu perfil por videollamada.",
        cta: "Agendar mi revisión",
        href: "#agendar",
        primary: true,
      },
      {
        icon: "mail",
        kicker: "¿Prefieres que revisemos primero?",
        title: "Déjanos tus datos",
        text: "Revisamos tu perfil y te proponemos el siguiente paso por correo, en menos de 24 horas.",
        cta: "Dejar mis datos",
        href: "#contacto",
        primary: false,
      },
    ],
    form: {
      eyebrow: "// revisión inicial de tu perfil",
      titleA: "Déjanos tus datos y revisamos",
      titleHighlight: "tu presencia en redes",
      subtitle:
        "Con tu nombre y tu correo es suficiente. Revisamos tu perfil y te respondemos en menos de 24 horas con tres prioridades y el siguiente paso que te recomendamos.",
    },
    service: "Marketing digital Durango",
  },
};
