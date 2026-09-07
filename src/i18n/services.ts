/*
  ─────────────────────────────────────────────────────────────────────────
  ESPECIALIZACIÓN EN DOS SERVICIOS (septiembre 2026)
  ─────────────────────────────────────────────────────────────────────────

  Antes el sitio listaba seis "servicios" que en realidad eran seis
  capacidades de un mismo trabajo (sitio, SEO, formularios, automatización,
  IA, analítica). Un dueño de negocio no compra "capacidades": compra
  "una página web" o "que me traigan clientes". Seis tarjetas planas leían
  como una agencia que hace de todo y no destaca en nada.

  A partir de ahora ProCode vende DOS líneas de servicio:

    1. Desarrollo Web       → la principal, la que más factura
    2. Marketing Digital    → la que multiplica lo que la web ya hace

  Las seis capacidades anteriores no desaparecen: se reparten dentro de
  estas dos líneas, que es donde tienen sentido comercial.

  Arquitectura de URLs (hub + dos hijas), pensada para no canibalizar:

    /                              → diseño de páginas web para negocios
    /servicios/                    → servicios de desarrollo web y marketing digital
    /servicios/desarrollo-web/     → desarrollo web para negocios
    /servicios/marketing-digital/  → marketing digital para negocios

  Cada hija pelea su propia frase con texto propio, JSON-LD Service propio
  y su FAQ. El hub las presenta y reparte el enlace interno.

  Reglas de vocabulario heredadas (ver memoria de posicionamiento):
  nada de "negocios pequeños"; "pequeñas empresas" sí; en inglés
  "small business" se queda; nunca "no soy una agencia" (ProCode ES una
  agencia dirigida por su fundador).
*/

export const SERVICE_KEYS = ["webDev", "digitalMarketing"] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export interface ServiceCapability {
  icon: string;
  title: string;
  description: string;
}

export interface ServicePackageItem {
  name: string;
  pricePrefix: string;
  price: string;
  currency: string;
  priceNote: string;
  description: string;
  features: readonly string[];
  highlighted: boolean;
}

/** Resumen de una línea de servicio: lo usan el home, el hub, el menú y el footer. */
export interface ServiceLine {
  key: ServiceKey;
  icon: string;
  visual: "web" | "marketing";
  badge: string;
  navLabel: string;
  navHint: string;
  eyebrow: string;
  title: string;
  tagline: string;
  summary: string;
  bullets: readonly string[];
  priceLabel: string;
  price: string;
  priceNote: string;
  timelineLabel: string;
  timeline: string;
  cta: string;
  imageBase: string;
  imageAlt: string;
  capabilities: readonly ServiceCapability[];
}

export interface ServiceDetail {
  meta: {
    title: string;
    description: string;
    keywords: string;
    heroTitleA: string;
    heroHighlight: string;
    heroSubtitle: string;
  };
  intro: { title: string; body: readonly string[] };
  capabilities: { eyebrow: string; title: string; subtitle: string };
  packages: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly ServicePackageItem[];
    note: string;
    cta: string;
  };
  standards: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly { icon: string; title: string; description: string }[];
  };
  fit: {
    eyebrow: string;
    title: string;
    yesTitle: string;
    yes: readonly string[];
    noTitle: string;
    no: readonly string[];
  };
  faq: {
    eyebrow: string;
    titleA: string;
    titleHighlight: string;
    subtitle: string;
    items: readonly { question: string; answer: string }[];
  };
  cross: { eyebrow: string; title: string; body: string; cta: string };
}

export interface ServicesHub {
  linesEyebrow: string;
  linesTitleA: string;
  linesTitleHighlight: string;
  linesSubtitle: string;
  capabilitiesLabel: string;
  compare: {
    eyebrow: string;
    titleA: string;
    titleHighlight: string;
    subtitle: string;
    columns: readonly {
      badge: string;
      title: string;
      body: string;
      forWho: string;
      price: string;
      cta: string;
      href: "webDev" | "digitalMarketing" | "pricing";
      highlighted: boolean;
    }[];
    note: string;
  };
  faq: {
    eyebrow: string;
    titleA: string;
    titleHighlight: string;
    subtitle: string;
    items: readonly { question: string; answer: string }[];
  };
}

// ═══════════════════════════════════════════════════════════════════════
// LÍNEAS DE SERVICIO — resumen compartido (home, hub, menú, footer)
// ═══════════════════════════════════════════════════════════════════════

const linesEs: Record<ServiceKey, ServiceLine> = {
  webDev: {
    key: "webDev",
    icon: "layout",
    visual: "web",
    badge: "Servicio principal",
    navLabel: "Desarrollo Web",
    navHint: "Páginas web a la medida que captan clientes.",
    eyebrow: "// servicio 01",
    title: "Desarrollo Web",
    tagline: "Páginas web que trabajan como tu mejor vendedor",
    summary:
      "Diseño y desarrollo de páginas web para negocios, programadas a la medida. Nada de plantillas ni constructores: cada sitio se escribe línea por línea para cargar rápido, salir en Google y convertir al visitante en una llamada, un mensaje o una cita agendada.",
    bullets: [
      "Sitios a medida, sin plantillas ni constructores lentos",
      "Una página por cada servicio que vendes",
      "Español e inglés con URLs separadas",
      "SEO técnico y medición incluidos desde el primer día",
    ],
    priceLabel: "desde",
    price: "349",
    priceNote: "USD · pago único · landing completa",
    timelineLabel: "entrega",
    timeline: "2 a 4 semanas",
    cta: "Ver desarrollo web",
    imageBase: "/images/servicio-desarrollo-web-es",
    imageAlt:
      "Desarrollo web para negocios: sitio de una empresa de servicios en escritorio y en móvil, con formulario de cotización",
    capabilities: [
      {
        icon: "cpu",
        title: "Programación a la medida",
        description:
          "Cada página se construye desde cero con Astro y Tailwind. Sin plantillas de WordPress llenas de plugins que se rompen, sin constructores que dejan el sitio pesado.",
      },
      {
        icon: "target",
        title: "Diseño enfocado en conversión",
        description:
          "Una página web por cada servicio que vendes, con la estructura que lleva al visitante de la duda a la acción: llamar, escribir o llenar el formulario.",
      },
      {
        icon: "zap",
        title: "Velocidad real, no promesas",
        description:
          "Imágenes en AVIF y WebP, fuentes auto-hospedadas y cero JavaScript de más. Un sitio lento pierde la mitad de las visitas antes de terminar de cargar.",
      },
      {
        icon: "search",
        title: "SEO técnico desde el código",
        description:
          "Datos estructurados, metadatos únicos por página, sitemap, hreflang y URLs limpias. El posicionamiento no se instala después: viene escrito en el sitio.",
      },
      {
        icon: "globe",
        title: "Bilingüe de verdad",
        description:
          "Desarrollo web bilingüe real: versión en español y en inglés con URLs separadas, no un traductor automático encima. Tu cliente hispano y tu cliente anglo encuentran cada uno su versión.",
      },
      {
        icon: "clipboard-check",
        title: "Formularios y agenda conectados",
        description:
          "Formularios de cotización que califican por zona, presupuesto y urgencia, con carga de fotos o documentos, y WhatsApp y calendario conectados al sitio.",
      },
    ],
  },
  digitalMarketing: {
    key: "digitalMarketing",
    icon: "trending-up",
    visual: "marketing",
    badge: "Para crecer lo que ya tienes",
    navLabel: "Marketing Digital",
    navHint: "Que te encuentren, te escriban y regresen.",
    eyebrow: "// servicio 02",
    title: "Marketing Digital",
    tagline: "Que te encuentren, te escriban y vuelvan a comprarte",
    summary:
      "Marketing digital para negocios que ya tienen sitio y necesitan llenarlo de la gente correcta: SEO local, Perfil de Empresa en Google, reseñas, anuncios y seguimiento automático de cada prospecto, con un reporte mensual en lenguaje de negocio.",
    bullets: [
      "SEO local por ciudad y por servicio",
      "Perfil de Empresa en Google y reseñas gestionadas",
      "Campañas en Google Ads, Facebook e Instagram",
      "Reporte mensual de contactos, llamadas y citas",
    ],
    priceLabel: "desde",
    price: "349",
    priceNote: "USD / mes · sin contratos de 12 meses",
    timelineLabel: "primeros resultados",
    timeline: "30 a 90 días",
    cta: "Ver marketing digital",
    imageBase: "/images/servicio-marketing-digital-es",
    imageAlt:
      "Marketing digital para negocios: resultado de búsqueda local en Google, Perfil de Empresa con reseñas y panel de contactos del mes",
    capabilities: [
      {
        icon: "map-pin",
        title: "SEO local por ciudad y servicio",
        description:
          "Posicionamiento en Google para las búsquedas que hace tu cliente cuando ya quiere comprar: tu servicio más tu ciudad. Páginas propias por zona y por especialidad.",
      },
      {
        icon: "google",
        title: "Perfil de Empresa en Google",
        description:
          "Ficha creada, verificada y optimizada: servicios, zona de cobertura, fotos, horarios y publicaciones mensuales. Es lo primero que ve quien te busca en el mapa.",
      },
      {
        icon: "star",
        title: "Reseñas que dan confianza",
        description:
          "Sistema para pedir reseñas sin incomodar al cliente y respuesta a todas las que llegan, buenas y malas. Las reseñas deciden a quién llaman primero.",
      },
      {
        icon: "megaphone",
        title: "Anuncios con presupuesto controlado",
        description:
          "Campañas en Google Ads y publicidad en Facebook e Instagram, con landing pages dedicadas y un costo por prospecto que se mide, no se adivina.",
      },
      {
        icon: "workflow",
        title: "Automatización de seguimiento",
        description:
          "Cada prospecto recibe respuesta aunque estés en obra, en consulta o con un cliente. Recordatorios y seguimiento automático a quien no contestó.",
      },
      {
        icon: "bar-chart",
        title: "Analítica y reporte mensual",
        description:
          "Contactos, llamadas, citas agendadas y de dónde vino cada una. Un reporte en lenguaje de negocio, no una captura de Google Analytics.",
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════
// PÁGINA /servicios/desarrollo-web/
// Frase principal: "desarrollo web para negocios".
// ═══════════════════════════════════════════════════════════════════════

const webDevEs: ServiceDetail = {
  meta: {
    title: "Desarrollo Web para Negocios | ProCode Dev",
    description:
      "Desarrollo web para negocios: páginas web a la medida, rápidas y con SEO técnico. Landing desde $349 y sitio de 4 a 6 páginas por $899 USD, con precio público.",
    keywords:
      "desarrollo web para negocios, desarrollo de páginas web, diseño y desarrollo web, agencia de desarrollo web, creación de páginas web para empresas, páginas web a la medida, desarrollo web profesional, rediseño de página web, landing page para negocios, sitios web autoadministrables, desarrollo web para pequeñas empresas, desarrollo web bilingüe, páginas web rápidas y optimizadas, programación de páginas web",
    heroTitleA: "Desarrollo web para negocios,",
    heroHighlight: "programado a la medida",
    heroSubtitle:
      "Diseño y desarrollo web sin plantillas: cada página se escribe a la medida de tu negocio para cargar rápido, salir en Google y convertir al visitante en una llamada, un mensaje o una cita. Precio público desde $349 USD y entrega en dos a cuatro semanas.",
  },
  intro: {
    title: "Qué es el desarrollo web hecho a la medida y por qué cambia tus números",
    body: [
      "La mayoría de las páginas web para negocios se arman con una plantilla y un constructor visual. Salen rápido y salen baratas, y por eso mismo cargan lento, se parecen a otras mil, arrastran plugins que nadie mantiene y no traen una sola línea de SEO técnico. El dueño paga por un folleto que nadie visita.",
      "El desarrollo web a la medida hace lo contrario: se escribe el código que tu negocio necesita y nada más. El resultado es un sitio ligero, que Google entiende sin esfuerzo y que está diseñado alrededor de una sola pregunta — qué tiene que hacer el visitante antes de irse. Esa diferencia no se ve en la portada; se ve en cuántos formularios llegan al mes.",
      "Como agencia de desarrollo web, en ProCode Dev la creación de páginas web para empresas incluye desde el primer día lo que otras cobran aparte: metadatos únicos por página, datos estructurados, versión en inglés y español con URLs separadas, formularios que califican y medición de contactos, llamadas y citas. Es desarrollo web para pequeñas empresas hecho con el mismo estándar que se le daría a un proyecto grande, y hablas directo con el dueño de la agencia, que además es quien programa el sitio.",
    ],
  },
  capabilities: {
    eyebrow: "// qué incluye",
    title: "Lo que lleva dentro un sitio hecho a la medida",
    subtitle:
      "Seis piezas que vienen en todos los proyectos de desarrollo web profesional, no como extras que se cotizan después.",
  },
  packages: {
    eyebrow: "// tipos de proyecto",
    title: "Elige el tamaño de tu página web, con el precio publicado",
    subtitle:
      "Los cuatro proyectos de diseño y desarrollo web que hago, con lo que incluye cada uno y cuánto cuesta. Sin cotización sorpresa y sin llamada de ventas para conocer el número.",
    items: [
      {
        name: "Landing Page",
        pricePrefix: "",
        price: "349",
        currency: "USD",
        priceNote: "pago único",
        description:
          "Una landing page para negocios enfocada al cien por ciento en convertir. La opción correcta si vendes un servicio o lanzas una campaña y necesitas empezar ya.",
        features: [
          "Página única de alta conversión",
          "Texto de ventas y una llamada a la acción clara",
          "Botón directo a WhatsApp y formulario",
          "Impecable en móvil y carga rápida",
          "SEO base y medición conectada",
        ],
        highlighted: false,
      },
      {
        name: "Sitio Web de 4 a 6 páginas",
        pricePrefix: "",
        price: "899",
        currency: "USD",
        priceNote: "pago único",
        description:
          "Tu negocio completo en línea, con una página web por cada servicio que vendes. Es el proyecto que elige la mayoría de los negocios establecidos.",
        features: [
          "4 a 6 páginas estratégicas, una por servicio",
          "Estructura de ventas y bloques de confianza",
          "WhatsApp, formularios y calendario conectados",
          "Bilingüe español e inglés si lo necesitas",
          "SEO local para que te encuentren en tu ciudad",
        ],
        highlighted: true,
      },
      {
        name: "Sitio Web de 8 a 12 páginas",
        pricePrefix: "desde",
        price: "1,499",
        currency: "USD",
        priceNote: "pago único",
        description:
          "Para el negocio con varias líneas de servicio, varias ciudades o varias sucursales. Más páginas, más integraciones y una operación digital ordenada.",
        features: [
          "8 a 12 páginas completas",
          "Páginas por servicio y por ciudad",
          "Integraciones y automatización",
          "Sistema de captación con seguimiento",
          "SEO técnico avanzado y acompañamiento al lanzar",
        ],
        highlighted: false,
      },
      {
        name: "Rediseño de un sitio existente",
        pricePrefix: "desde",
        price: "899",
        currency: "USD",
        priceNote: "según el tamaño actual",
        description:
          "El rediseño de página web para cuando ya tienes una y no genera nada: carga lenta, no aparece en Google o nadie llena el formulario. Se reconstruye conservando las URLs que ya posicionan.",
        features: [
          "Auditoría de lo que hoy funciona y lo que no",
          "Redirecciones para no perder el posicionamiento ganado",
          "Estructura y textos nuevos, enfocados a convertir",
          "Migración de contenido y de tu blog si lo tienes",
          "Medición desde el primer día para comparar",
        ],
        highlighted: false,
      },
    ],
    note: "Los precios de arriba son los reales, no un rango de referencia: es lo que pagas por el alcance descrito. Si tu proyecto se sale de ese alcance te lo digo antes de empezar, con el número exacto, nunca a mitad del trabajo. Después del lanzamiento puedes dejar el sitio como está o sumarle un plan de Soporte Web desde $79 USD al mes.",
    cta: "Ver todos los precios",
  },
  standards: {
    eyebrow: "// estándares técnicos",
    title: "Cómo se construye cada sitio",
    subtitle:
      "Seis decisiones de programación de páginas web que se aplican en todos los proyectos. No son opcionales ni se cobran aparte: son la razón por la que salen páginas web rápidas y optimizadas donde una plantilla no llega.",
    items: [
      {
        icon: "zap",
        title: "HTML estático, sin base de datos",
        description:
          "El sitio se genera antes de publicarse. No hay una base de datos que se caiga ni un servidor que interprete código en cada visita: se sirve el archivo y ya.",
      },
      {
        icon: "smartphone",
        title: "Imágenes en AVIF y WebP",
        description:
          "Cada foto se sirve en varios tamaños y en el formato moderno que soporte el navegador. Pesa una fracción de un JPG y se ve igual de nítida.",
      },
      {
        icon: "file-text",
        title: "Fuentes auto-hospedadas",
        description:
          "Las tipografías viven en tu propio dominio. Sin llamadas bloqueantes a servidores de terceros que retrasan el primer dibujo de la página en móvil.",
      },
      {
        icon: "database",
        title: "Datos estructurados schema.org",
        description:
          "El negocio, el servicio, las migas de pan y las preguntas frecuentes van marcados en un formato que Google y los buscadores con IA leen sin interpretar el diseño.",
      },
      {
        icon: "link",
        title: "Canónicas, hreflang y sitemap",
        description:
          "Cada página declara cuál es su versión oficial y cuál es su equivalente en el otro idioma. Es lo que evita que tus propias páginas compitan entre ellas.",
      },
      {
        icon: "shield",
        title: "Accesible y con HTTPS",
        description:
          "Contraste suficiente, foco visible al navegar con teclado, textos alternativos en todas las imágenes y certificado de seguridad configurado desde el lanzamiento.",
      },
    ],
  },
  fit: {
    eyebrow: "// antes de escribirme",
    title: "Para quién es este servicio y para quién no",
    yesTitle: "Encaja contigo si",
    yes: [
      "Tienes un negocio funcionando y quieres que la web le traiga trabajo, no solo que exista.",
      "Vendes varios servicios y necesitas una página para cada uno.",
      "Atiendes en español y en inglés, o quieres empezar a hacerlo.",
      "Tu sitio actual carga lento, no aparece en Google o nadie llena el formulario.",
      "Quieres hablar con quien programa, no con un ejecutivo de cuenta.",
    ],
    noTitle: "No encaja si",
    no: [
      "Buscas la página más barata del mercado: hay plantillas de veinte dólares y son una opción legítima.",
      "Necesitas una aplicación web con usuarios, sesiones y panel interno: eso es otro tipo de proyecto.",
      "Quieres el sitio para mañana. El plazo mínimo real es de dos semanas.",
      "Esperas resultados sin tocar nada más: sin reseñas, sin Perfil de Google y sin contestar los mensajes, ninguna web hace milagros.",
    ],
  },
  faq: {
    eyebrow: "// dudas de desarrollo web",
    titleA: "Lo que preguntan antes de",
    titleHighlight: "contratar",
    subtitle:
      "Las dudas que salen en casi todas las llamadas sobre desarrollo de páginas web, respondidas con el número y el plazo real.",
    items: [
      {
        question: "¿Cuánto cuesta el desarrollo de una página web para mi negocio?",
        answer:
          "Una landing page cuesta $349 USD, un sitio de 4 a 6 páginas $899 USD y uno de 8 a 12 páginas desde $1,499 USD. Son pagos únicos y el precio está publicado: no hay que agendar una llamada de ventas para conocerlo. Si tu proyecto se sale de ese alcance te paso el número exacto antes de empezar.",
      },
      {
        question: "¿Cuánto tarda el desarrollo web?",
        answer:
          "Entre dos y cuatro semanas desde que tengo tus textos, tus fotos y los accesos. Una landing suele salir en dos semanas; un sitio de 8 a 12 páginas se va a cuatro. Te doy la fecha de entrega en la propuesta y la cumplo.",
      },
      {
        question: "¿Usas WordPress o plantillas?",
        answer:
          "No. Cada sitio se programa a la medida con Astro y Tailwind, que generan HTML estático. Eso significa que no hay plugins que actualizar, no hay base de datos que se caiga y no hay constructor visual dejando código de más. Si prefieres WordPress porque tu equipo ya lo usa, te lo digo con honestidad: en ese caso no soy tu mejor opción.",
      },
      {
        question: "¿Puedo editar la página yo mismo después?",
        answer:
          "Sí. Los sitios que llevan blog o secciones que cambian seguido se entregan como sitios web autoadministrables: un panel donde escribes, subes fotos y publicas sin tocar código. Para cambios de textos, precios u horarios, el plan de Soporte Web incluye de tres a cuatro cambios al mes hechos por mí.",
      },
      {
        question: "¿El dominio y el hosting están incluidos?",
        answer:
          "El desarrollo incluye la configuración completa: dominio, hosting, correos con tu dominio, certificado de seguridad y publicación. El costo del dominio y del hosting lo pagas tú directo al proveedor, normalmente entre $60 y $120 USD al año, y quedan a tu nombre. Nunca me quedo con la propiedad de tu sitio.",
      },
      {
        question: "¿Y si ya tengo página? ¿Vale la pena rehacerla?",
        answer:
          "Depende de qué esté fallando. Si el problema es la velocidad, la estructura o que no aparece en Google, un rediseño desde $899 USD suele resolverlo conservando las URLs que ya posicionan. Agenda la Revisión Express y te grabo un vídeo de tres minutos diciéndote qué encontré, aunque al final decidas no rehacerla.",
      },
    ],
  },
  cross: {
    eyebrow: "// el otro servicio",
    title: "Ya tienes el sitio. Ahora hay que llenarlo de gente.",
    body:
      "Una página web a la medida capta al que ya te encontró. El marketing digital se encarga de que te encuentren más: SEO local, Perfil de Empresa en Google, reseñas, anuncios y seguimiento automático de cada prospecto.",
    cta: "Ver marketing digital",
  },
};

// ═══════════════════════════════════════════════════════════════════════
// PÁGINA /servicios/marketing-digital/
// Frase principal: "marketing digital para negocios".
// ═══════════════════════════════════════════════════════════════════════

const marketingEs: ServiceDetail = {
  meta: {
    title: "Marketing Digital para Negocios | ProCode Dev",
    description:
      "Marketing digital para negocios: SEO local, Perfil de Empresa en Google, reseñas, anuncios y seguimiento automático. Planes desde $349 USD al mes.",
    keywords:
      "marketing digital para negocios, agencia de marketing digital, marketing digital para pequeñas empresas, SEO local, posicionamiento en Google, campañas de Google Ads, publicidad en Facebook e Instagram, perfil de empresa en Google, gestión de reseñas, automatización de seguimiento, generación de prospectos para negocios, reportes de marketing digital, marketing digital para pymes",
    heroTitleA: "Marketing digital para negocios",
    heroHighlight: "que venden servicios",
    heroSubtitle:
      "SEO local, Perfil de Empresa en Google, reseñas, campañas de Google Ads y Meta, y seguimiento automático de cada prospecto. Un solo responsable, precios publicados desde $349 USD al mes y un reporte mensual de contactos, llamadas y citas — sin contratos de 12 meses.",
  },
  intro: {
    title: "Qué hace el marketing digital cuando el negocio ya está funcionando",
    body: [
      "Casi todos los negocios que me escriben tienen el mismo problema y no es el que creen. No les falta publicidad: les falta ser la respuesta cuando alguien de su ciudad busca su servicio en Google, en el mapa o, cada vez más, preguntándole a ChatGPT. Mientras eso no pasa, cada peso de anuncios se va a comprar visitas que un competidor con mejor ficha y más reseñas se termina llevando.",
      "El marketing digital para pymes y pequeñas empresas que hago empieza por ahí: que aparezcas donde ya te están buscando. Primero el Perfil de Empresa en Google y las reseñas, que es lo que decide a quién llaman primero. Después el SEO local por ciudad y por servicio, que tarda meses en madurar pero deja de costar cuando llega. Y solo entonces los anuncios, cuando ya hay a dónde mandar a la gente.",
      "Lo demás es operación: que ningún prospecto se quede sin respuesta porque estabas en obra, en consulta o con un cliente. Formularios, WhatsApp, calendario y seguimiento conectados, y un reporte mensual que dice cuántos contactos, llamadas y citas hubo y de dónde vino cada una. Sin métricas de vanidad y sin capturas de Google Analytics.",
    ],
  },
  capabilities: {
    eyebrow: "// qué incluye",
    title: "Las seis piezas del sistema de captación",
    subtitle:
      "No son seis servicios sueltos que se contratan por separado: es un solo sistema, y se arma en este orden porque cada pieza depende de la anterior.",
  },
  packages: {
    eyebrow: "// planes mensuales",
    title: "Planes de marketing digital con precio publicado",
    subtitle:
      "Tres niveles, del mantenimiento básico al sistema completo de captación. Soporte Web y Crecimiento+ se cancelan de un mes a otro; el paquete completo pide un mínimo de tres meses porque los anuncios y el SEO necesitan ese tiempo.",
    items: [
      {
        name: "Soporte Web",
        pricePrefix: "desde",
        price: "79",
        currency: "USD / mes",
        priceNote: "según el tamaño de tu sitio",
        description:
          "La base. Tu sitio rápido, seguro y actualizado, con un reporte mensual que te dice cómo trabajó tu página este mes.",
        features: [
          "Reporte mensual de contactos, llamadas y formularios",
          "Monitoreo de disponibilidad y velocidad",
          "Respaldo mensual y actualizaciones de seguridad",
          "Hasta 3 o 4 cambios menores al mes",
          "Una recomendación de mejora al mes, basada en tus números",
        ],
        highlighted: false,
      },
      {
        name: "Crecimiento+",
        pricePrefix: "",
        price: "349",
        currency: "USD / mes",
        priceNote: "incluye todo el Soporte Web",
        description:
          "Que te encuentren, no solo que existas. Perfil de Empresa en Google, reseñas, SEO local y visibilidad en las búsquedas con IA.",
        features: [
          "Todo lo del plan Soporte Web",
          "Perfil de Empresa en Google creado, verificado y optimizado",
          "Publicaciones mensuales y servicios y horarios al día",
          "Gestión de reseñas: sistema para pedirlas y respuesta a todas",
          "SEO local y optimización para búsqueda con IA",
        ],
        highlighted: true,
      },
      {
        name: "Web + Marketing + SEO",
        pricePrefix: "desde",
        price: "1,100",
        currency: "USD / mes",
        priceNote: "presupuesto de anuncios aparte · mínimo 3 meses",
        description:
          "El sistema completo, para el negocio que ya no quiere depender de las recomendaciones y de los meses buenos.",
        features: [
          "Todo lo del plan Crecimiento+",
          "Campañas en Google Ads y Meta con landing pages dedicadas",
          "SEO continuo: contenido mensual y páginas por servicio y ciudad",
          "Automatización de seguimiento de cada prospecto",
          "Reporte de costo por prospecto y llamada estratégica mensual",
        ],
        highlighted: false,
      },
    ],
    note: "Soporte Web y Crecimiento+ no tienen permanencia: subes, bajas o cancelas de un mes a otro. Web + Marketing + SEO pide un mínimo de tres meses y, cumplido ese plazo, también se cancela mes a mes. El presupuesto que se invierte en Google Ads y en Meta lo pagas tú directo a la plataforma: yo no cobro comisión sobre tu inversión publicitaria.",
    cta: "Ver todos los precios",
  },
  standards: {
    eyebrow: "// cómo se mide",
    title: "Qué se mide y qué no",
    subtitle:
      "Los reportes de marketing digital se juzgan con números de negocio, no con métricas de vanidad. Estas son las seis cosas que reporto cada mes, y la razón por la que no verás impresiones ni alcance en el informe.",
    items: [
      {
        icon: "phone",
        title: "Llamadas y clics a WhatsApp",
        description:
          "Cuántas personas pulsaron el teléfono o el botón de WhatsApp, desde la web y desde tu ficha de Google. Es el contacto que más rápido se cierra.",
      },
      {
        icon: "clipboard-check",
        title: "Formularios recibidos",
        description:
          "Cuántas cotizaciones entraron, de qué servicio y con qué presupuesto y urgencia declarados. Es la generación de prospectos para negocios medida en unidades reales, no en visitas.",
      },
      {
        icon: "calendar",
        title: "Citas agendadas",
        description:
          "Cuántas personas llegaron hasta el calendario y reservaron. Es la métrica que más se parece a una venta antes de que exista la venta.",
      },
      {
        icon: "route",
        title: "De dónde vino cada una",
        description:
          "Búsqueda en Google, mapa, anuncio, red social o alguien que ya te conocía. Sin esto no se sabe qué apagar y qué subir de presupuesto.",
      },
      {
        icon: "star",
        title: "Reseñas nuevas y posición en el mapa",
        description:
          "Cuántas reseñas entraron, cómo quedó la calificación y en qué lugar apareces cuando alguien busca tu servicio en tu ciudad.",
      },
      {
        icon: "receipt",
        title: "Costo por prospecto",
        description:
          "Cuánto costó cada contacto y cada cliente cerrado, cuando hay campañas corriendo. Es el único número que dice si la publicidad vale la pena.",
      },
    ],
  },
  fit: {
    eyebrow: "// antes de escribirme",
    title: "Para quién es este servicio y para quién no",
    yesTitle: "Encaja contigo si",
    yes: [
      "Ya tienes clientes y quieres dejar de depender solo de las recomendaciones.",
      "Atiendes una ciudad o una zona concreta y ahí se decide tu competencia.",
      "Tu ficha de Google está incompleta, sin reseñas o sin reclamar.",
      "Te llegan mensajes y se te van porque no alcanzas a contestarlos a tiempo.",
      "Quieres saber cuánto te cuesta cada cliente nuevo, no cuántos me gusta tuviste.",
    ],
    noTitle: "No encaja si",
    no: [
      "Esperas resultados de SEO local en tres semanas: el rango real es de tres a seis meses.",
      "No tienes página o la que tienes no convierte. Ahí primero va el desarrollo web.",
      "Quieres comprar seguidores o reseñas. No lo hago, y a mediano plazo hace daño.",
      "No hay nadie que conteste. La automatización responde el primer mensaje; cerrar sigue siendo tuyo.",
    ],
  },
  faq: {
    eyebrow: "// dudas de marketing digital",
    titleA: "Lo que preguntan antes de",
    titleHighlight: "invertir",
    subtitle:
      "Plazos, presupuestos y expectativas del marketing digital para pequeñas empresas, respondidos sin promesas que no se pueden sostener.",
    items: [
      {
        question: "¿En cuánto tiempo se ven resultados?",
        answer:
          "Depende de la pieza. El Perfil de Empresa en Google y las reseñas mueven la aguja en semanas. Los anuncios traen contactos desde el primer día, aunque los primeros treinta días son de ajuste. El SEO local tarda de tres a seis meses en madurar, y por eso el paquete completo pide un mínimo de tres meses: antes de eso todavía estamos calibrando.",
      },
      {
        question: "¿Cuánto debo invertir en anuncios?",
        answer:
          "Para un negocio local que atiende una ciudad, entre $300 y $600 USD al mes suele ser suficiente para tener datos con los que decidir. Ese presupuesto lo pagas tú directo a Google o a Meta y no cobro comisión sobre él: a diferencia de una agencia de marketing digital que cobra un porcentaje de tu inversión, mi cobro es el plan mensual, esté la campaña grande o chica.",
      },
      {
        question: "¿Necesito tener página web para contratar marketing?",
        answer:
          "Prácticamente sí. Se puede trabajar el Perfil de Empresa en Google y las reseñas sin sitio, pero mandar tráfico pagado a una página que no convierte es tirar el dinero. Si tu web no está o no funciona, lo honesto es empezar por el desarrollo web y después encender la captación.",
      },
      {
        question: "¿Hacen contenido para redes sociales?",
        answer:
          "Hago publicaciones mensuales en tu Perfil de Empresa en Google, que es la red que más se parece a una venta local, y contenido de blog que trabaja el SEO. No manejo calendarios de Instagram ni TikTok: prefiero decírtelo antes que hacerlo a medias.",
      },
      {
        question: "¿Qué pasa si quiero cancelar?",
        answer:
          "Soporte Web y Crecimiento+ se cancelan de un mes a otro, sin penalización y sin llamada de retención. Web + Marketing + SEO pide un mínimo de tres meses; cumplido ese plazo se cancela igual, mes a mes. En todos los casos tu sitio, tu dominio y tus cuentas de anuncios quedan a tu nombre.",
      },
      {
        question: "¿Y la búsqueda con inteligencia artificial?",
        answer:
          "Cada vez más gente pregunta por un servicio en ChatGPT o en la respuesta con IA de Google en vez de revisar diez enlaces. Para salir ahí hace falta que tu negocio, tus servicios y tu zona estén escritos en un formato que esas herramientas puedan leer: datos estructurados, un archivo llms.txt y contenido que responda preguntas reales. Va incluido desde el plan Crecimiento+.",
      },
    ],
  },
  cross: {
    eyebrow: "// el otro servicio",
    title: "¿Y si el problema no es el tráfico, sino la página?",
    body:
      "Si tu sitio carga lento, no se entiende en el teléfono o nadie llena el formulario, el marketing solo hace que más gente vea el problema. Ahí empieza el desarrollo web a la medida.",
    cta: "Ver desarrollo web",
  },
};

// ═══════════════════════════════════════════════════════════════════════
// HUB /servicios/
// Frase principal: "servicios de desarrollo web y marketing digital".
// ═══════════════════════════════════════════════════════════════════════

const hubEs: ServicesHub = {
  linesEyebrow: "// dos servicios, un sistema",
  linesTitleA: "Diseño web y marketing digital",
  linesTitleHighlight: "en un mismo sistema",
  linesSubtitle:
    "Servicios de desarrollo web y marketing digital, nada más. Una agencia de diseño web y marketing digital no necesita una lista de veinte servicios: nadie hace veinte cosas bien. Hay dos líneas de trabajo, y la segunda existe para multiplicar lo que hace la primera.",
  capabilitiesLabel: "Qué incluye",
  compare: {
    eyebrow: "// por dónde empiezo",
    titleA: "¿Cuál de los dos necesitas",
    titleHighlight: "primero?",
    subtitle:
      "La respuesta casi siempre depende de una sola cosa: si ya te encuentran y no te contratan, o si no te encuentran en absoluto. Estos son los tres caminos que existen.",
    columns: [
      {
        badge: "Camino 1",
        title: "Empieza por la web",
        body: "No tienes página, la tienes hecha en un constructor y carga lento, o entra gente y no te escribe nadie. Aquí el trabajo es de desarrollo web para negocios: primero se arregla el lugar al que mandas a la gente, porque encender anuncios antes de eso es pagar para que más personas vean el problema.",
        forWho: "Para quien no tiene sitio o tiene uno que no convierte.",
        price: "desde $349 USD, pago único",
        cta: "Ver desarrollo web",
        href: "webDev",
        highlighted: true,
      },
      {
        badge: "Camino 2",
        title: "Empieza por el marketing",
        body: "Tu página está bien hecha y convierte, pero llega poca gente: tu ficha de Google está incompleta, no tienes reseñas o no apareces cuando alguien busca tu servicio en tu ciudad. Ahí el trabajo es de diseño web y posicionamiento en marcha —visibilidad y seguimiento—, no de rediseño.",
        forWho: "Para quien ya tiene sitio y necesita llenarlo.",
        price: "desde $349 USD al mes",
        cta: "Ver marketing digital",
        href: "digitalMarketing",
        highlighted: false,
      },
      {
        badge: "Camino 3",
        title: "Los dos, como un sistema",
        body: "Sitio nuevo, captación, anuncios, contenido y seguimiento trabajando juntos, con un reporte mensual de costo por prospecto y por cliente cerrado. Es el paquete Web + Marketing + SEO, y pide un mínimo de tres meses porque antes de eso todavía se está calibrando.",
        forWho: "Para el negocio que quiere dejar de depender de las recomendaciones.",
        price: "desde $1,100 USD al mes",
        cta: "Ver precios completos",
        href: "pricing",
        highlighted: false,
      },
    ],
    note: "Si no sabes en cuál estás, no adivines: agenda la Revisión Express y te grabo un vídeo de tres minutos con lo que encontré al buscar tu servicio en tu ciudad. Es gratis y te lo digo aunque la respuesta sea que no necesitas contratarme todavía.",
  },
  faq: {
    eyebrow: "// dudas frecuentes",
    titleA: "Antes de elegir un",
    titleHighlight: "servicio",
    subtitle:
      "Las preguntas que salen cuando alguien compara agencias de diseño web y de marketing digital.",
    items: [
      {
        question: "¿Por qué solo dos servicios y no una lista larga?",
        answer:
          "Porque una lista de veinte servicios es una promesa que nadie puede cumplir con la misma calidad. ProCode Dev es a la vez una agencia de desarrollo web y una agencia de marketing digital, y todo lo demás — SEO local, formularios, automatización, reseñas, analítica, optimización para búsqueda con IA — vive dentro de uno de esos dos como parte del trabajo, no como un extra que se cotiza aparte.",
      },
      {
        question: "¿Tengo que contratar los dos?",
        answer:
          "No. La mayoría empieza por uno. Un sitio nuevo puede quedarse solo, sin plan mensual, y funcionar bien durante años. Y si ya tienes página, se puede trabajar únicamente la captación. Los dos juntos rinden más, pero no es un paquete obligatorio.",
      },
      {
        question: "¿Con quién voy a tratar?",
        answer:
          "Conmigo. ProCode Dev es una agencia dirigida por su fundador: no hay ejecutivo de cuenta que te pase el recado ni un equipo rotativo al que explicarle tu negocio cada mes. El que te contesta el WhatsApp es el que programa el sitio y el que revisa las campañas.",
      },
      {
        question: "¿Trabajas con negocios fuera de tu ciudad?",
        answer:
          "Sí, la atención es remota en Estados Unidos y en México, en español y en inglés. La diferencia con una agencia grande no es la distancia: es que aquí hablas siempre con la misma persona y respondo cualquier mensaje en menos de 24 horas.",
      },
      {
        question: "¿Cuánto cuesta empezar?",
        answer:
          "El punto de entrada es la Revisión Express, que es gratis: reviso qué encuentra un cliente cuando busca tu servicio en tu ciudad, te lo grabo en un vídeo de tres minutos y después lo comentamos quince minutos por llamada. De ahí, una landing page cuesta $349 USD y el plan mensual más elegido son $349 USD al mes.",
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════
// ENGLISH — same architecture. "small business" stays: it is the standard
// U.S. market term and the highest-volume keyword, unlike the Spanish
// diminutive that the positioning memo bans.
// ═══════════════════════════════════════════════════════════════════════

const linesEn: Record<ServiceKey, ServiceLine> = {
  webDev: {
    key: "webDev",
    icon: "layout",
    visual: "web",
    badge: "Main service",
    navLabel: "Web Development",
    navHint: "Custom websites built to bring in clients.",
    eyebrow: "// service 01",
    title: "Web Development",
    tagline: "Websites that work like your best salesperson",
    summary:
      "Custom website development for small businesses, coded from scratch. No templates and no page builders: every site is written line by line so it loads fast, ranks in Google and turns a visitor into a call, a message or a booked appointment.",
    bullets: [
      "Custom-coded, no templates and no slow builders",
      "One page for every service you sell",
      "English and Spanish on separate URLs",
      "Technical SEO and measurement from day one",
    ],
    priceLabel: "from",
    price: "349",
    priceNote: "USD · one-time · full landing page",
    timelineLabel: "delivery",
    timeline: "2 to 4 weeks",
    cta: "See web development",
    imageBase: "/images/servicio-desarrollo-web-en",
    imageAlt:
      "Small business web development: a service company website on desktop and mobile with a quote form",
    capabilities: [
      {
        icon: "cpu",
        title: "Custom-coded, not assembled",
        description:
          "Every page is built from scratch with Astro and Tailwind. No WordPress template loaded with plugins that break, no visual builder leaving the site heavy.",
      },
      {
        icon: "target",
        title: "Conversion-focused design",
        description:
          "One page for each service you sell, structured to move the visitor from doubt to action: call, message or fill in the form.",
      },
      {
        icon: "zap",
        title: "Real speed, not promises",
        description:
          "AVIF and WebP images, self-hosted fonts and no extra JavaScript. A slow site loses half its visitors before it finishes loading.",
      },
      {
        icon: "search",
        title: "Technical SEO in the code",
        description:
          "Structured data, unique metadata per page, sitemap, hreflang and clean URLs. SEO is not installed afterwards: it is written into the site.",
      },
      {
        icon: "globe",
        title: "Genuinely bilingual",
        description:
          "A real English and Spanish version on separate URLs, not an automatic translator on top. Your English-speaking and Spanish-speaking clients each find their own.",
      },
      {
        icon: "clipboard-check",
        title: "Forms and booking connected",
        description:
          "Quote forms that qualify by area, budget and urgency, with photo or document upload, plus WhatsApp and calendar wired into the site.",
      },
    ],
  },
  digitalMarketing: {
    key: "digitalMarketing",
    icon: "trending-up",
    visual: "marketing",
    badge: "To grow what you already have",
    navLabel: "Digital Marketing",
    navHint: "Get found, get messaged, get repeat clients.",
    eyebrow: "// service 02",
    title: "Digital Marketing",
    tagline: "Get found, get messaged, get them coming back",
    summary:
      "Digital marketing services for small businesses that already have a site and need to fill it with the right people: local SEO, Google Business Profile, reviews, ads and automated follow-up on every lead, with a monthly report in plain business language.",
    bullets: [
      "Local SEO by city and by service",
      "Google Business Profile and reviews managed",
      "Google Ads, Facebook and Instagram campaigns",
      "Monthly report of contacts, calls and bookings",
    ],
    priceLabel: "from",
    price: "349",
    priceNote: "USD / month · no 12-month contracts",
    timelineLabel: "first results",
    timeline: "30 to 90 days",
    cta: "See digital marketing",
    imageBase: "/images/servicio-marketing-digital-en",
    imageAlt:
      "Small business digital marketing: local Google search result, Google Business Profile with reviews and a monthly contacts dashboard",
    capabilities: [
      {
        icon: "map-pin",
        title: "Local SEO by city and service",
        description:
          "Ranking for the searches people make when they are ready to buy: your service plus their city. Dedicated pages by area and by specialty.",
      },
      {
        icon: "google",
        title: "Google Business Profile",
        description:
          "Created, verified and fully optimized: services, service area, photos, hours and monthly posts. It is the first thing anyone sees when they find you on the map.",
      },
      {
        icon: "star",
        title: "Reviews that build trust",
        description:
          "A system to ask for reviews without making it awkward, and a reply to every one that comes in, good or bad. Reviews decide who gets called first.",
      },
      {
        icon: "megaphone",
        title: "Ads on a controlled budget",
        description:
          "Google Ads campaigns and Facebook and Instagram advertising, with dedicated landing pages and a cost per lead that is measured, not guessed.",
      },
      {
        icon: "workflow",
        title: "Follow-up automation",
        description:
          "Every lead gets an answer even when you are on a job site, in session or with a client. Reminders and automated follow-up for anyone who went quiet.",
      },
      {
        icon: "bar-chart",
        title: "Analytics and monthly report",
        description:
          "Contacts, calls, booked appointments and where each one came from. A report in business language, not a screenshot of Google Analytics.",
      },
    ],
  },
};

const webDevEn: ServiceDetail = {
  meta: {
    title: "Small Business Web Development | ProCode Dev",
    description:
      "Small business web development: custom-coded, fast websites with technical SEO. Landing page from $349 USD and a 4-6 page site for $899 USD, price published.",
    keywords:
      "small business web development, web development services, custom website development, website development company, web design and development, website redesign services, landing page development, bilingual website development, fast responsive websites, custom coded website, small business website developer, professional web development services",
    heroTitleA: "Small business web development,",
    heroHighlight: "coded to fit",
    heroSubtitle:
      "Custom website development with no templates: every page is written for your business so it loads fast, ranks in Google and turns a visitor into a call, a message or a booking. Published pricing from $349 USD and delivery in two to four weeks.",
  },
  intro: {
    title: "What custom web development actually changes in your numbers",
    body: [
      "Most small business websites are assembled from a template in a visual builder. They ship fast and they ship cheap, and that is exactly why they load slowly, look like a thousand others, drag along plugins nobody maintains and carry no technical SEO at all. The owner pays for a brochure nobody visits.",
      "Custom web development does the opposite: it writes the code your business needs and nothing else. The result is a light site that Google reads without effort, designed around one question only — what the visitor has to do before leaving. That difference does not show up on the homepage; it shows up in how many forms arrive each month.",
      "As a website development company, ProCode Dev includes in its web development services from day one what others bill separately: unique metadata per page, structured data, bilingual website development on separate URLs, forms that qualify, and measurement of contacts, calls and bookings. These are professional web development services for a small business website developer price, and you talk straight to the owner of the agency, who is also the one writing the code.",
    ],
  },
  capabilities: {
    eyebrow: "// what is included",
    title: "What a custom-built site actually contains",
    subtitle:
      "Six pieces that ship with every web development project, not add-ons quoted later.",
  },
  packages: {
    eyebrow: "// project types",
    title: "Pick the size of your website, with the price published",
    subtitle:
      "The four web design and development projects I take on, what each one includes and what it costs. No surprise quote and no sales call required to see the number.",
    items: [
      {
        name: "Landing Page",
        pricePrefix: "",
        price: "349",
        currency: "USD",
        priceNote: "one-time",
        description:
          "Landing page development focused entirely on converting. The right call if you sell one service or you are launching a campaign and need to start now.",
        features: [
          "Single high-conversion page",
          "Sales copy and one clear call to action",
          "Direct WhatsApp button and form",
          "Flawless on mobile and fast loading",
          "Base SEO and measurement connected",
        ],
        highlighted: false,
      },
      {
        name: "4-6 page website",
        pricePrefix: "",
        price: "899",
        currency: "USD",
        priceNote: "one-time",
        description:
          "Your whole business online, with one page per service you sell. It is the project most established small businesses choose.",
        features: [
          "4 to 6 strategic pages, one per service",
          "Sales structure and trust blocks",
          "WhatsApp, forms and calendar connected",
          "Bilingual English and Spanish if you need it",
          "Local SEO so your city can find you",
        ],
        highlighted: true,
      },
      {
        name: "8-12 page website",
        pricePrefix: "from",
        price: "1,499",
        currency: "USD",
        priceNote: "one-time",
        description:
          "For the business with several service lines, several cities or several locations. More pages, more integrations and a tidy digital operation.",
        features: [
          "8 to 12 complete pages",
          "Pages by service and by city",
          "Integrations and automation",
          "Lead capture with follow-up",
          "Advanced technical SEO and launch support",
        ],
        highlighted: false,
      },
      {
        name: "Website redesign",
        pricePrefix: "from",
        price: "899",
        currency: "USD",
        priceNote: "depends on current size",
        description:
          "Website redesign services for when you have a site that produces nothing: slow, invisible in Google, or nobody fills in the form. It gets rebuilt while keeping the URLs that already rank.",
        features: [
          "Audit of what works today and what does not",
          "Redirects so you keep the ranking you earned",
          "New structure and copy, built to convert",
          "Content and blog migration if you have one",
          "Measurement from day one so you can compare",
        ],
        highlighted: false,
      },
    ],
    note: "These are real prices, not a reference range: it is what you pay for the scope described. If your project falls outside that scope I tell you before we start, with the exact number, never halfway through. After launch you can leave the site as it is or add a Web Support plan from $79 USD a month.",
    cta: "See full pricing",
  },
  standards: {
    eyebrow: "// technical standards",
    title: "How every site is built",
    subtitle:
      "Six technical decisions applied to every project. They are not optional and they are not billed separately: they are why a custom coded website ships as fast responsive websites where a template never does.",
    items: [
      {
        icon: "zap",
        title: "Static HTML, no database",
        description:
          "The site is generated before it is published. There is no database to go down and no server interpreting code on every visit: the file is served and that is it.",
      },
      {
        icon: "smartphone",
        title: "AVIF and WebP images",
        description:
          "Every photo is served in several sizes and in the modern format the browser supports. It weighs a fraction of a JPG and looks just as sharp.",
      },
      {
        icon: "file-text",
        title: "Self-hosted fonts",
        description:
          "Typefaces live on your own domain. No render-blocking calls to third-party servers delaying the first paint on mobile.",
      },
      {
        icon: "database",
        title: "schema.org structured data",
        description:
          "Business, service, breadcrumbs and FAQs are marked up in a format Google and AI search engines read without having to interpret the design.",
      },
      {
        icon: "link",
        title: "Canonicals, hreflang and sitemap",
        description:
          "Every page declares its official version and its equivalent in the other language. That is what stops your own pages from competing with each other.",
      },
      {
        icon: "shield",
        title: "Accessible and on HTTPS",
        description:
          "Sufficient contrast, visible keyboard focus, alt text on every image and a security certificate configured before launch.",
      },
    ],
  },
  fit: {
    eyebrow: "// before you message me",
    title: "Who this is for, and who it is not for",
    yesTitle: "It fits if",
    yes: [
      "You have a working business and want the site to bring in work, not just exist.",
      "You sell several services and need a page for each one.",
      "You serve clients in English and Spanish, or you want to start.",
      "Your current site loads slowly, does not show up in Google, or nobody fills in the form.",
      "You want to talk to the person writing the code, not an account executive.",
    ],
    noTitle: "It does not fit if",
    no: [
      "You are after the cheapest site on the market: there are twenty-dollar templates and that is a legitimate choice.",
      "You need a web app with users, sessions and an internal dashboard: that is a different kind of project.",
      "You want the site tomorrow. The real minimum is two weeks.",
      "You expect results without changing anything else: no reviews, no Google profile and no replies, and no website performs miracles.",
    ],
  },
  faq: {
    eyebrow: "// web development questions",
    titleA: "What people ask before",
    titleHighlight: "hiring",
    subtitle:
      "The questions that come up on almost every web development call, answered with the real number and the real timeline.",
    items: [
      {
        question: "How much does web development for a small business cost?",
        answer:
          "A landing page is $349 USD, a 4 to 6 page site is $899 USD and an 8 to 12 page site starts at $1,499 USD. They are one-time payments and the price is published: no sales call needed to hear it. If your project falls outside that scope I give you the exact number before we start.",
      },
      {
        question: "How long does development take?",
        answer:
          "Two to four weeks from the moment I have your copy, your photos and the access I need. A landing page usually ships in two weeks; an 8 to 12 page site runs to four. You get the delivery date in the proposal and I hold to it.",
      },
      {
        question: "Do you use WordPress or templates?",
        answer:
          "No. Every site is custom-coded with Astro and Tailwind, which generate static HTML. That means no plugins to update, no database to go down and no visual builder leaving extra code behind. If you prefer WordPress because your team already uses it, I will tell you honestly: I am not your best option in that case.",
      },
      {
        question: "Can I edit the site myself afterwards?",
        answer:
          "Yes. Sites with a blog or sections that change often ship with an admin panel where you write, upload photos and publish without touching code. For copy, price or hours changes, the Web Support plan includes three to four changes a month done by me.",
      },
      {
        question: "Are domain and hosting included?",
        answer:
          "Development includes the full setup: domain, hosting, email on your domain, security certificate and going live. You pay the domain and hosting directly to the provider, usually $60 to $120 USD a year, and both stay in your name. I never hold ownership of your site.",
      },
      {
        question: "I already have a site. Is a rebuild worth it?",
        answer:
          "It depends on what is failing. If the problem is speed, structure or not showing up in Google, a redesign from $899 USD usually solves it while keeping the URLs that already rank. Book the Express Review and I will record a three-minute video telling you what I found, even if you decide not to rebuild.",
      },
    ],
  },
  cross: {
    eyebrow: "// the other service",
    title: "The site is live. Now it needs people on it.",
    body:
      "A custom website converts the people who already found you. Digital marketing is what makes more of them find you: local SEO, Google Business Profile, reviews, ads and automated follow-up on every lead.",
    cta: "See digital marketing",
  },
};

const marketingEn: ServiceDetail = {
  meta: {
    title: "Small Business Digital Marketing | ProCode Dev",
    description:
      "Digital marketing for small businesses: local SEO, Google Business Profile, reviews, ads and follow-up automation. Plans from $349 USD a month.",
    keywords:
      "small business digital marketing, digital marketing services, digital marketing agency, local SEO services, Google Business Profile management, Google Ads management, Facebook and Instagram ads, review management, lead generation for small businesses, marketing automation, marketing reporting, local SEO for small businesses",
    heroTitleA: "Digital marketing for small businesses",
    heroHighlight: "that sell services",
    heroSubtitle:
      "Local SEO, Google Business Profile, reviews, Google Ads and Meta campaigns, and automated follow-up on every lead. One person responsible, published pricing from $349 USD a month, and a monthly report of contacts, calls and bookings — with no 12-month contracts.",
  },
  intro: {
    title: "What digital marketing does once the business is already running",
    body: [
      "Almost every business that messages me has the same problem, and it is not the one they think. They are not short on advertising: they are missing from the answer when someone in their city searches for their service on Google, on the map or, increasingly, by asking ChatGPT. Until that changes, every dollar of ads buys visits that a competitor with a better profile and more reviews ends up taking.",
      "The digital marketing services I run start there: showing up where people are already looking for you. Google Business Profile management and reviews first, because that is what decides who gets called. Then local SEO services by city and by service, which take months to mature but stop costing money once they arrive. And only then Google Ads management and Facebook and Instagram ads, once there is somewhere worth sending people.",
      "The rest is marketing automation: no lead left unanswered because you were on a job site, in session or with a client. Forms, WhatsApp, calendar and follow-up connected, and marketing reporting that says how many contacts, calls and bookings there were and where each one came from. It is lead generation for small businesses measured in real units, with no vanity metrics and no Google Analytics screenshots.",
    ],
  },
  capabilities: {
    eyebrow: "// what is included",
    title: "The six pieces of the lead system",
    subtitle:
      "These are not six separate services you buy one at a time: it is one system, and it is built in this order because each piece depends on the one before it.",
  },
  packages: {
    eyebrow: "// monthly plans",
    title: "Digital marketing plans with published pricing",
    subtitle:
      "Three levels, from basic upkeep to the full lead system. Web Support and Growth+ cancel month to month; the full package asks for a three-month minimum because ads and SEO need that long.",
    items: [
      {
        name: "Web Support",
        pricePrefix: "from",
        price: "79",
        currency: "USD / mo",
        priceNote: "depends on site size",
        description:
          "The base. Your site fast, secure and up to date, with a monthly report telling you how your page performed.",
        features: [
          "Monthly report of contacts, calls and forms",
          "Uptime and speed monitoring",
          "Monthly backup and security updates",
          "Up to 3 or 4 minor changes a month",
          "One improvement recommendation a month, based on your numbers",
        ],
        highlighted: false,
      },
      {
        name: "Growth+",
        pricePrefix: "",
        price: "349",
        currency: "USD / mo",
        priceNote: "includes all of Web Support",
        description:
          "Getting found, not just existing. Google Business Profile, reviews, local SEO and visibility in AI search.",
        features: [
          "Everything in Web Support",
          "Google Business Profile created, verified and optimized",
          "Monthly posts, services and hours kept current",
          "Review management: a system to ask, and replies to all of them",
          "Local SEO and AI search optimization",
        ],
        highlighted: true,
      },
      {
        name: "Web + Marketing + SEO",
        pricePrefix: "from",
        price: "1,100",
        currency: "USD / mo",
        priceNote: "ad budget separate · 3-month minimum",
        description:
          "The full system, for the business that no longer wants to depend on referrals and good months.",
        features: [
          "Everything in Growth+",
          "Google Ads and Meta campaigns with dedicated landing pages",
          "Ongoing SEO: monthly content and pages by service and city",
          "Follow-up automation on every lead",
          "Cost-per-lead reporting and a monthly strategy call",
        ],
        highlighted: false,
      },
    ],
    note: "Web Support and Growth+ have no lock-in: move up, move down or cancel month to month. Web + Marketing + SEO asks for a three-month minimum and, once that is met, also cancels month to month. The budget spent on Google Ads and Meta is paid by you directly to the platform: I take no commission on your ad spend.",
    cta: "See full pricing",
  },
  standards: {
    eyebrow: "// how it is measured",
    title: "What gets measured, and what does not",
    subtitle:
      "Local SEO for small businesses is judged on business numbers, not rankings alone. These are the six things I report every month, and the reason you will not see impressions or reach in the report.",
    items: [
      {
        icon: "phone",
        title: "Calls and WhatsApp taps",
        description:
          "How many people tapped the phone or the WhatsApp button, from the site and from your Google profile. It is the contact that closes fastest.",
      },
      {
        icon: "clipboard-check",
        title: "Forms received",
        description:
          "How many quote requests came in, for which service, and with what budget and urgency declared. It tells you which service is worth pushing.",
      },
      {
        icon: "calendar",
        title: "Appointments booked",
        description:
          "How many people made it to the calendar and reserved. It is the metric closest to a sale before a sale exists.",
      },
      {
        icon: "route",
        title: "Where each one came from",
        description:
          "Google search, the map, an ad, social or someone who already knew you. Without this there is no way to know what to switch off and what to fund.",
      },
      {
        icon: "star",
        title: "New reviews and map position",
        description:
          "How many reviews came in, where the rating landed, and where you show up when someone searches for your service in your city.",
      },
      {
        icon: "receipt",
        title: "Cost per lead",
        description:
          "What each contact and each closed client cost, when campaigns are running. It is the only number that says whether the advertising is worth it.",
      },
    ],
  },
  fit: {
    eyebrow: "// before you message me",
    title: "Who this is for, and who it is not for",
    yesTitle: "It fits if",
    yes: [
      "You already have clients and want to stop depending on referrals alone.",
      "You serve one city or one area, and that is where your competition is decided.",
      "Your Google profile is incomplete, unclaimed or has no reviews.",
      "Messages arrive and you lose them because you cannot answer in time.",
      "You want to know what a new client costs, not how many likes you got.",
    ],
    noTitle: "It does not fit if",
    no: [
      "You expect local SEO results in three weeks: the real range is three to six months.",
      "You have no site, or the one you have does not convert. Web development comes first.",
      "You want to buy followers or reviews. I do not do it, and it does damage over time.",
      "There is nobody to answer. Automation handles the first reply; closing is still yours.",
    ],
  },
  faq: {
    eyebrow: "// digital marketing questions",
    titleA: "What people ask before",
    titleHighlight: "investing",
    subtitle:
      "Timelines, budgets and expectations for small business digital marketing, answered without promises nobody can keep.",
    items: [
      {
        question: "How long until I see results?",
        answer:
          "It depends on the piece. Google Business Profile and reviews move within weeks. Ads bring contacts from day one, though the first thirty days are calibration. Local SEO takes three to six months to mature, which is why the full package asks for a three-month minimum: before that we are still tuning.",
      },
      {
        question: "How much should I spend on ads?",
        answer:
          "For a local business serving one city, $300 to $600 USD a month is usually enough to get data worth deciding on. You pay that budget directly to Google or Meta and I take no commission on it: unlike a digital marketing agency that bills a percentage of your spend, my fee is the monthly plan, whether the campaign is large or small.",
      },
      {
        question: "Do I need a website before hiring marketing?",
        answer:
          "Practically speaking, yes. Google Business Profile and reviews can be worked without a site, but sending paid traffic to a page that does not convert is burning money. If your site is missing or not working, the honest move is to start with web development and turn on lead generation after.",
      },
      {
        question: "Do you handle social media content?",
        answer:
          "I publish monthly posts on your Google Business Profile, which is the network closest to a local sale, plus blog content that works your SEO. I do not run Instagram or TikTok calendars: I would rather tell you that up front than do it halfway.",
      },
      {
        question: "What if I want to cancel?",
        answer:
          "Web Support and Growth+ cancel month to month, with no penalty and no retention call. Web + Marketing + SEO asks for a three-month minimum; once that is met it cancels the same way. In every case your site, your domain and your ad accounts stay in your name.",
      },
      {
        question: "What about AI search?",
        answer:
          "More and more people ask ChatGPT or Google's AI answer about a service instead of scanning ten links. Showing up there requires your business, services and service area to be written in a format those tools can read: structured data, an llms.txt file and content that answers real questions. It is included from the Growth+ plan up.",
      },
    ],
  },
  cross: {
    eyebrow: "// the other service",
    title: "What if the problem is not traffic, but the page?",
    body:
      "If your site loads slowly, does not make sense on a phone or nobody fills in the form, marketing only means more people see the problem. That is where custom web development starts.",
    cta: "See web development",
  },
};

const hubEn: ServicesHub = {
  linesEyebrow: "// two services, one system",
  linesTitleA: "Web design and digital marketing",
  linesTitleHighlight: "as one system",
  linesSubtitle:
    "Web development and digital marketing services, and nothing else. There is no list of twenty because nobody does twenty things well: there are two lines of work, and the second exists to multiply what the first one does.",
  capabilitiesLabel: "What is included",
  compare: {
    eyebrow: "// where do I start",
    titleA: "Which of the two do you need",
    titleHighlight: "first?",
    subtitle:
      "The answer almost always comes down to one thing: whether people find you and do not hire you, or do not find you at all. These are the three paths.",
    columns: [
      {
        badge: "Path 1",
        title: "Start with the website",
        body: "You have no site, or you have one built in a page builder that loads slowly, or people arrive and nobody messages you. This is small business web development work: you fix the place you are sending people to first, because turning on ads before that is paying for more people to see the problem.",
        forWho: "For anyone with no site, or a site that does not convert.",
        price: "from $349 USD, one-time",
        cta: "See web development",
        href: "webDev",
        highlighted: true,
      },
      {
        badge: "Path 2",
        title: "Start with the marketing",
        body: "Your site is well built and it converts, but few people arrive: your Google profile is incomplete, you have no reviews, or you do not show up when someone searches for your service in your city. That is where local SEO services for small businesses come in — visibility and follow-up, not redesign.",
        forWho: "For anyone with a site that needs filling.",
        price: "from $349 USD a month",
        cta: "See digital marketing",
        href: "digitalMarketing",
        highlighted: false,
      },
      {
        badge: "Path 3",
        title: "Both, as one system",
        body: "New site, lead capture, ads, content and follow-up working together, with a monthly report on cost per lead and per closed client. That is the Web + Marketing + SEO package, and it asks for a three-month minimum because before that we are still calibrating.",
        forWho: "For the business ready to stop depending on referrals.",
        price: "from $1,100 USD a month",
        cta: "See full pricing",
        href: "pricing",
        highlighted: false,
      },
    ],
    note: "If you do not know which one you are in, do not guess: book the Express Review and I will record a three-minute video with what I found when I searched for your service in your city. It is free, and I will tell you even if the answer is that you do not need to hire me yet.",
  },
  faq: {
    eyebrow: "// common questions",
    titleA: "Before you pick a",
    titleHighlight: "service",
    subtitle:
      "The questions that come up when someone is comparing web design and digital marketing agencies.",
    items: [
      {
        question: "Why only two services instead of a long list?",
        answer:
          "Because a list of twenty services is a promise nobody keeps at the same quality. ProCode Dev is a web design agency and a digital marketing agency at once, offering small business digital marketing services alongside development, and everything else — local SEO, forms, automation, reviews, analytics, AI search optimization — lives inside one of those two as part of the work, not as an add-on quoted separately.",
      },
      {
        question: "Do I have to buy both?",
        answer:
          "No. Most people start with one. A new site can stand on its own, with no monthly plan, and work well for years. And if you already have a page, we can work on lead generation only. The two together do more, but it is not a mandatory bundle.",
      },
      {
        question: "Who will I actually be dealing with?",
        answer:
          "Me. ProCode Dev is a founder-led agency: no account executive passing along messages and no rotating team to re-explain your business to every month. Whoever answers your WhatsApp is the one writing the code and reviewing the campaigns.",
      },
      {
        question: "Do you work with businesses outside your city?",
        answer:
          "Yes, everything is remote across the United States and Mexico, in English and Spanish. The difference from a large agency is not distance: it is that you always talk to the same person, and I answer any message in under 24 hours.",
      },
      {
        question: "What does it cost to start?",
        answer:
          "The entry point is the Express Review, and it is free: I look at what a client finds when they search for your service in your city, record it as a three-minute video, and then we spend fifteen minutes on a call. From there, a landing page is $349 USD and the most-chosen monthly plan is $349 USD a month.",
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════

export const serviceLines: Record<"es" | "en", Record<ServiceKey, ServiceLine>> = {
  es: linesEs,
  en: linesEn,
};

export const serviceDetails: Record<"es" | "en", Record<ServiceKey, ServiceDetail>> = {
  es: { webDev: webDevEs, digitalMarketing: marketingEs },
  en: { webDev: webDevEn, digitalMarketing: marketingEn },
};

export const servicesHub: Record<"es" | "en", ServicesHub> = {
  es: hubEs,
  en: hubEn,
};
