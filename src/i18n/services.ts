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

import type { PageContextCopy } from "./ui";

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
  /** Matiz del plazo. Evita que «30 a 90 días» se lea como si todo el
      servicio rindiera en ese rango cuando el SEO local tarda más. */
  timelineNote?: string;
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
  intro: {
    title: string;
    /** Una sola frase de entrada. Si necesita dos, sobra una. */
    lead: string;
    /** Tres puntos con etiqueta. Ni cuatro, ni párrafos disfrazados. */
    points: readonly { title: string; text: string }[];
  };
  capabilities: { eyebrow: string; title: string; subtitle: string };
  packages: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly ServicePackageItem[];
    /** Texto del boton propio de cada tarjeta: lleva al formulario de la
        misma pagina conservando el paquete elegido. */
    itemCta: string;
    note: string;
    cta: string;
    /** Lo que NO es este servicio pero se confunde con el (en marketing:
        el plan de mantenimiento, que no capta clientes). */
    aside?: { title: string; body: string; cta: string };
  };
  /** Solo marketing: las tres piezas separadas, cada una con su alcance,
      sus entregables y su plazo real. */
  offer?: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly {
      icon: string;
      title: string;
      scope: string;
      deliverablesLabel: string;
      deliverables: readonly string[];
      timelineLabel: string;
      timeline: string;
    }[];
  };
  /** Encabezado del formulario embebido de esta pagina, y la etiqueta del
      boton principal del hero, que apunta a el. */
  form: {
    eyebrow: string;
    ctaLabel: string;
    titleA: string;
    titleHighlight: string;
    subtitle: string;
    needLabel: string;
    needOptions: readonly string[];
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
  /** Bloque de contexto al pie: el texto largo que salió del hero. */
  pageContext: PageContextCopy;
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
      href: "webDev" | "digitalMarketing" | "pricing" | "form";
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
  form: {
    eyebrow: string;
    ctaLabel: string;
    titleA: string;
    titleHighlight: string;
    subtitle: string;
    needLabel: string;
    needOptions: readonly string[];
  };
}

/**
 * Copy compartido del formulario corto que va dentro de cada pagina de
 * servicio. El encabezado lo pone cada pagina (`form` de arriba); esto son
 * las etiquetas, que no tienen por que cambiar entre paginas.
 *
 * Tres campos obligatorios y nada mas: nombre, WhatsApp y que necesita.
 * Correo y mensaje quedan opcionales a proposito — quien apenas compara
 * proveedores no deja tres datos de contacto para preguntar un precio.
 */
export interface LeadFormCopy {
  fieldName: string;
  phName: string;
  fieldPhone: string;
  phPhone: string;
  fieldEmail: string;
  phEmail: string;
  fieldMessage: string;
  phMessage: string;
  optionalTag: string;
  interestLabel: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  perks: readonly string[];
  altTitle: string;
  altSchedule: string;
  altWhatsapp: string;
  privacy: string;
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
          "Programación de páginas web desde cero con Astro y Tailwind. Sin plantillas de WordPress llenas de plugins que se rompen, sin constructores que dejan el sitio pesado.",
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
    timelineLabel: "primeras señales",
    timeline: "30 a 90 días",
    timelineNote:
      "en ficha de Google y anuncios · el SEO local madura de 3 a 6 meses",
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
  pageContext: {
    title: "Desarrollo web para negocios, sin plantillas",
    paragraphs: [
      "Diseño y desarrollo web sin plantillas: cada página se escribe a la medida de tu negocio, así que carga rápido, sale en Google y convierte al visitante en una llamada, un mensaje o una cita. Precio público desde $349 USD y entrega en dos a cuatro semanas.",
      "El desarrollo de páginas web va desde una landing page para negocios hasta el sitio completo, e incluye la creación de páginas web para empresas que arrancan de cero y el rediseño de página web cuando ya hay uno que no trae clientes. Todo se entrega como sitios web autoadministrables: cambias textos y fotos sin depender de nadie.",
      "La programación de páginas web propia es lo que hace posibles páginas web rápidas y optimizadas de verdad, no un tema recargado de plugins. Son páginas web a la medida, con desarrollo web bilingüe en el mismo proyecto y desarrollo web profesional pensado para desarrollo web para pequeñas empresas: importa lo que factura el sitio, no el premio de diseño.",
      "Como agencia de desarrollo web pequeña, quien programa es quien te contesta. Desarrollo web para negocios sin intermediarios, sin cotización sorpresa y con el código en tus manos al final.",
    ],
  },
  meta: {
    title: "Desarrollo Web para Negocios | ProCode Dev",
    description:
      "Desarrollo web para negocios: páginas web a la medida, rápidas y con SEO técnico. Landing desde $349 y sitio de 4 a 6 páginas por $899 USD, con precio público.",
    keywords:
      "desarrollo web para negocios, desarrollo de páginas web, diseño y desarrollo web, agencia de desarrollo web, creación de páginas web para empresas, páginas web a la medida, desarrollo web profesional, rediseño de página web, landing page para negocios, sitios web autoadministrables, desarrollo web para pequeñas empresas, desarrollo web bilingüe, páginas web rápidas y optimizadas, programación de páginas web",
    heroTitleA: "Desarrollo web para negocios,",
    heroHighlight: "programado a la medida",
    heroSubtitle: "Rápida, en Google, y vende.",
  },
  intro: {
    title: "Qué cambia un sitio hecho a la medida",
    lead:
      "Una plantilla sale rápida y barata, y esa es su ventaja real. El código a la medida cuesta más al principio y te devuelve control: qué carga, qué mide y qué se puede cambiar después.",
    points: [
      { title: "Sin plantillas", text: "Astro y Tailwind, no un constructor visual." },
      { title: "Todo incluido", text: "SEO técnico y medición de origen, no como extra." },
      { title: "Sin intermediarios", text: "Hablas con quien programa el sitio." },
    ],
  },
  capabilities: {
    eyebrow: "// qué incluye",
    title: "Lo que lleva dentro un sitio hecho a la medida",
    subtitle:
      "Seis piezas que vienen en todos los proyectos, no como extras que se cotizan después. Es lo que incluye la creación de páginas web para empresas cuando la hace una agencia de desarrollo web y no un constructor.",
  },
  packages: {
    eyebrow: "// tipos de proyecto",
    title: "Elige el tamaño de tu página web, con el precio publicado",
    subtitle:
      "Los cuatro proyectos de desarrollo web para pequeñas empresas que hago, con lo que incluye cada uno y cuánto cuesta. Sin cotización sorpresa y sin llamada de ventas para conocer el número.",
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
    itemCta: "Solicitar este proyecto",
    note: "Los precios de arriba son los reales, no un rango de referencia: es lo que pagas por el alcance descrito. Si tu proyecto se sale de ese alcance te lo digo antes de empezar, con el número exacto, nunca a mitad del trabajo.",
    cta: "Ver todos los precios",
    aside: {
      title: "¿Y después del lanzamiento? El plan de Soporte Web, desde $79 USD al mes",
      body: "Es opcional: puedes dejar el sitio como está y funcionar años sin pagar nada más. Si prefieres no ocuparte, ese plan mantiene la página rápida, respaldada y al día, incluye de tres a cuatro cambios menores al mes y te manda un reporte de contactos, llamadas y formularios. Es mantenimiento, no captación: no trae clientes nuevos, cuida los que ya llegan.",
      cta: "Ver el plan de Soporte Web",
    },
  },
  standards: {
    eyebrow: "// estándares técnicos",
    title: "Cómo se construye cada sitio",
    subtitle:
      "Seis decisiones de desarrollo web profesional que se aplican en todos los proyectos. No son opcionales ni se cobran aparte: son la razón por la que salen páginas web rápidas y optimizadas, que se pueden medir desde el primer día.",
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
  form: {
    eyebrow: "// solicitar propuesta",
    ctaLabel: "Solicitar propuesta para mi web",
    titleA: "Cuéntame qué necesitas y te paso",
    titleHighlight: "el alcance y el precio",
    subtitle:
      "Tres datos y nada más. Te contesto por WhatsApp en menos de 24 horas con el alcance, el precio y la fecha de entrega para tu caso. Si tu proyecto no encaja conmigo, también te lo digo.",
    needLabel: "Qué necesitas",
    needOptions: [
      "No tengo página y quiero una",
      "Tengo página y quiero rehacerla",
      "Necesito una landing para una campaña",
      "Tengo un sitio y algo no funciona",
      "Todavía estoy comparando opciones",
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
  pageContext: {
    title: "Marketing digital para negocios, en tres piezas",
    paragraphs: [
      "Tres piezas con alcance y plazo distintos: SEO local para que aparezcas cuando alguien busca tu servicio en tu ciudad, campañas de Google Ads para comprar visibilidad mientras el posicionamiento en Google madura, y automatización de seguimiento para que ningún mensaje se quede sin respuesta. Precios publicados desde $349 USD al mes, sin contratos de 12 meses.",
      "El trabajo incluye el perfil de empresa en Google — que para un negocio local pesa más que el sitio —, la gestión de reseñas y publicidad en Facebook e Instagram cuando el producto se vende mirándolo. La generación de prospectos para negocios se mide con reportes de marketing digital de contactos reales, no de impresiones.",
      "Es marketing digital para pequeñas empresas y marketing digital para pymes por diseño: presupuestos que un negocio de verdad puede sostener, y una agencia de marketing digital donde hablas con quien ejecuta. Si el sitio no está listo, se arregla primero: anunciar sobre una página que no convierte es pagar por la lección.",
    ],
  },
  meta: {
    title: "Marketing Digital para Negocios | ProCode Dev",
    description:
      "Marketing digital para negocios: SEO local, Perfil de Empresa en Google, reseñas, anuncios y seguimiento automático. Planes desde $349 USD al mes.",
    keywords:
      "marketing digital para negocios, agencia de marketing digital, marketing digital para pequeñas empresas, SEO local, posicionamiento en Google, campañas de Google Ads, publicidad en Facebook e Instagram, perfil de empresa en Google, gestión de reseñas, automatización de seguimiento, generación de prospectos para negocios, reportes de marketing digital, marketing digital para pymes",
    heroTitleA: "SEO local y marketing digital para que",
    heroHighlight: "encuentren y contacten tu negocio",
    heroSubtitle: "Más búsquedas, más mensajes.",
  },
  intro: {
    title: "Qué hace el marketing cuando el negocio ya funciona",
    lead:
      "No te falta publicidad: te falta ser la respuesta cuando alguien de tu ciudad busca tu servicio.",
    points: [
      { title: "Primero la ficha", text: "Google y reseñas deciden a quién llaman." },
      { title: "Después el SEO", text: "Tarda de tres a seis meses y hay que sostenerlo." },
      { title: "Al final los anuncios", text: "Cuando ya hay a dónde mandar a la gente." },
    ],
  },
  offer: {
    eyebrow: "// la oferta, pieza por pieza",
    title: "Tres trabajos distintos, con plazos distintos",
    subtitle:
      "Se venden juntos porque se refuerzan, pero no son lo mismo ni rinden al mismo ritmo. Esto es lo que hace cada uno, qué te entrego y en cuánto tiempo se nota.",
    items: [
      {
        icon: "map-pin",
        title: "SEO local",
        scope:
          "Que tu negocio aparezca cuando alguien de tu ciudad busca tu servicio, en los resultados y en el mapa. Se trabaja tu Perfil de Empresa en Google, las reseñas y las páginas del sitio por servicio y por zona.",
        deliverablesLabel: "Qué entrego",
        deliverables: [
          "Perfil de Empresa en Google creado, verificado y optimizado",
          "Sistema para pedir reseñas y respuesta a todas las que llegan",
          "Páginas por servicio y por ciudad, escritas con contenido propio",
          "Datos estructurados y arreglos técnicos del sitio",
          "Posición en el mapa y reseñas nuevas, reportadas cada mes",
        ],
        timelineLabel: "Cuándo se nota",
        timeline:
          "La ficha y las reseñas mueven en semanas. El posicionamiento orgánico madura de 3 a 6 meses, y hay que sostenerlo: si se deja, se pierde terreno.",
      },
      {
        icon: "megaphone",
        title: "Google Ads",
        scope:
          "Comprar visibilidad mientras el SEO madura. Gestiono la campaña y la landing a la que llega la gente; el presupuesto de anuncios lo pagas tú directo a Google y no cobro comisión sobre él.",
        deliverablesLabel: "Qué entrego",
        deliverables: [
          "Campaña armada por servicio y por zona, con palabras negativas",
          "Landing page dedicada, con el mismo alcance y precio del anuncio",
          "Medición de llamadas, formularios y citas atribuidas a la campaña",
          "Ajuste mensual de pujas, anuncios y presupuesto",
          "Reporte de costo por prospecto",
        ],
        timelineLabel: "Cuándo se nota",
        timeline:
          "Puede haber contactos en los primeros días, pero los primeros treinta son de calibración: ahí se descubre qué búsquedas valen la pena y cuánto cuesta cada contacto. Presupuesto aparte, desde $300 USD al mes.",
      },
      {
        icon: "workflow",
        title: "Seguimiento",
        scope:
          "Lo que pasa después de que alguien te escribe. Respuesta automática al primer mensaje, recordatorio a quien no contestó y un registro de cada prospecto para que no se pierda entre notificaciones.",
        deliverablesLabel: "Qué entrego",
        deliverables: [
          "Respuesta inmediata a formularios y a WhatsApp",
          "Recordatorio automático a quien no contestó",
          "Registro de cada prospecto con su origen",
          "Aviso a tu correo o a tu teléfono en cuanto entra uno",
          "Reporte de contactos, llamadas y citas del mes",
        ],
        timelineLabel: "Cuándo se nota",
        timeline:
          "Desde la primera semana, porque no depende de Google. Lo que no hace es cerrar: la automatización contesta el primer mensaje, la venta sigue siendo tuya.",
      },
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
      "Dos planes de marketing digital para pymes, con lo que incluye cada uno y a qué ritmo trabaja. Crecimiento+ se cancela de un mes a otro; el paquete completo, que es el que incluye campañas de Google Ads, pide un mínimo de tres meses porque los anuncios y el SEO necesitan ese tiempo para dar datos con los que decidir.",
    items: [
      {
        name: "Crecimiento+",
        pricePrefix: "",
        price: "349",
        currency: "USD / mes",
        priceNote: "incluye el mantenimiento del sitio",
        description:
          "Que te encuentren, no solo que existas. Perfil de Empresa en Google, reseñas, SEO local y visibilidad en las búsquedas con IA. Sin anuncios: aquí todavía no se compra tráfico.",
        features: [
          "Mantenimiento del sitio y reporte mensual incluidos",
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
    itemCta: "Solicitar este plan",
    note: "Crecimiento+ no tiene permanencia: subes, bajas o cancelas de un mes a otro. Web + Marketing + SEO pide un mínimo de tres meses y, cumplido ese plazo, también se cancela mes a mes. El presupuesto que se invierte en Google Ads y en Meta lo pagas tú directo a la plataforma: yo no cobro comisión sobre tu inversión publicitaria.",
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
          "Depende de la pieza, y por eso el sitio da dos plazos distintos. El Perfil de Empresa en Google y las reseñas suelen moverse en semanas. Los anuncios pueden traer contactos en los primeros días —no está garantizado y depende de tu giro, tu zona y tu presupuesto—, y los primeros treinta días son de calibración. El SEO local tarda de tres a seis meses en madurar. Cuando el sitio dice «primeras señales en 30 a 90 días» se refiere a lo primero; el rango de tres a seis meses es el del posicionamiento orgánico.",
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
          "Cada vez más gente pregunta por un servicio en ChatGPT o en la respuesta con IA de Google en vez de revisar diez enlaces. Lo que sí ayuda es que tu negocio, tus servicios y tu zona estén escritos en un formato que esas herramientas puedan leer: datos estructurados, contenido que responda preguntas reales y una ficha de Google al día. También publico un archivo llms.txt, aunque conviene decirlo claro: Google ha declarado que ese archivo no influye en su buscador ni es requisito para sus funciones con IA. Todo esto va incluido desde el plan Crecimiento+.",
      },
    ],
  },
  form: {
    eyebrow: "// diagnóstico de captación",
    ctaLabel: "Solicitar diagnóstico de captación",
    titleA: "Dime qué vendes y dónde, y te digo",
    titleHighlight: "qué te falta para captar",
    subtitle:
      "Reviso qué encuentra hoy un cliente que busca tu servicio en tu ciudad: tu ficha de Google, tus reseñas, quién sale antes que tú y qué pieza falta. Te contesto por WhatsApp en menos de 24 horas.",
    needLabel: "Qué necesitas",
    needOptions: [
      "No aparezco cuando buscan mi servicio",
      "Mi ficha de Google está incompleta o sin reseñas",
      "Quiero empezar con anuncios",
      "Me llegan mensajes y se me van sin contestar",
      "Todavía estoy comparando opciones",
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
  linesTitleA: "Qué obtienes al contratar",
  linesTitleHighlight: "cada servicio",
  linesSubtitle:
    "Alcance, precio y plazo de cada línea, con lo que queda a tu nombre al terminar. ProCode Dev funciona a la vez como agencia de desarrollo web y como agencia de marketing digital, para negocios que atienden en español y en inglés en Estados Unidos y en México.",
  capabilitiesLabel: "Qué incluye",
  compare: {
    eyebrow: "// por dónde empiezo",
    titleA: "¿Cuál de los dos",
    titleHighlight: "necesitas?",
    subtitle:
      "Lo que buscas en una agencia de diseño web y marketing digital casi siempre se reduce a una sola cosa: si ya te encuentran y no te contratan, o si no te encuentran en absoluto. Y si no lo tienes claro, la tercera opción es la que más se usa.",
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
        title: "Ayúdame a elegir",
        body: "No siempre es obvio, y elegir mal cuesta meses. Dime en una línea qué vendes y qué está pasando hoy —nadie te encuentra, entra gente y no escribe, o vas a empezar de cero— y te contesto con cuál de los dos te conviene primero, incluso si la respuesta es que todavía no necesitas contratarme.",
        forWho: "Para quien está comparando y no quiere agendar una llamada todavía.",
        price: "respuesta por WhatsApp en menos de 24 h",
        cta: "Quiero una recomendación",
        href: "form",
        highlighted: false,
      },
    ],
    note: "Los dos juntos existen como paquete —Web + Marketing + SEO, desde $1,100 USD al mes, con mínimo de tres meses— pero casi nadie empieza por ahí. Si prefieres hablarlo en vivo, la Revisión Express es gratis: reviso qué encuentra un cliente al buscar tu servicio en tu ciudad y te lo grabo en un vídeo de tres minutos.",
  },
  faq: {
    eyebrow: "// dudas frecuentes",
    titleA: "Antes de elegir un",
    titleHighlight: "servicio",
    subtitle:
      "Las preguntas que salen cuando alguien compara agencias de diseño web y de marketing digital.",
    items: [
      {
        question: "¿Cuál de los dos necesito y qué obtengo al contratarlo?",
        answer:
          "Si no tienes página, la tienes hecha en un constructor o entra gente y no te escribe nadie, necesitas desarrollo web, y para eso esto es una empresa de diseño de páginas web: obtienes un sitio programado a la medida, con una página por servicio, formularios y WhatsApp conectados y la medición puesta, entregado en dos a cuatro semanas y a tu nombre. Si tu página ya convierte pero llega poca gente, necesitas marketing digital: obtienes tu Perfil de Empresa en Google trabajado, reseñas, SEO local por ciudad y servicio, campañas si las hay y un reporte mensual de contactos, llamadas y citas. Todo lo demás —formularios, automatización, analítica, optimización para búsqueda con IA— vive dentro de uno de esos dos, no se cotiza aparte.",
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
  form: {
    eyebrow: "// recomendación para tu negocio",
    ctaLabel: "Quiero una recomendación para mi negocio",
    titleA: "Dime qué vendes y te digo",
    titleHighlight: "cuál de los dos necesitas",
    subtitle:
      "Tres datos y nada más. Te contesto por WhatsApp en menos de 24 horas con cuál de los dos servicios te conviene primero, qué incluye y cuánto cuesta en tu caso. Si la respuesta es que todavía no necesitas contratarme, también te lo digo.",
    needLabel: "Qué está pasando hoy",
    needOptions: [
      "No tengo página y quiero una",
      "Tengo página pero nadie me escribe",
      "No aparezco cuando buscan mi servicio",
      "Quiero las dos cosas: sitio y captación",
      "Todavía estoy comparando opciones",
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
    timelineLabel: "first signals",
    timeline: "30 to 90 days",
    timelineNote:
      "on Google profile and ads · local SEO matures in 3 to 6 months",
    cta: "See digital marketing",
    imageBase: "/images/servicio-marketing-digital-en",
    imageAlt:
      "Small business digital marketing: local Google search result, Google Business Profile with reviews and a monthly contacts dashboard",
    capabilities: [
      {
        icon: "map-pin",
        title: "Local SEO by city and service",
        description:
          "Local SEO services that rank you for the searches people make when they are ready to buy: your service plus their city. Dedicated pages by area and by specialty.",
      },
      {
        icon: "google",
        title: "Google Business Profile",
        description:
          "Google Business Profile management done properly: created, verified and optimized, with services, service area, photos, hours and monthly posts. It is the first thing anyone sees on the map.",
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
          "Google Ads management plus Facebook and Instagram ads, with dedicated landing pages and a cost per lead that is measured, not guessed.",
      },
      {
        icon: "workflow",
        title: "Follow-up automation",
        description:
          "Marketing automation so every lead gets an answer even when you are on a job site, in session or with a client. Reminders and follow-up for anyone who went quiet.",
      },
      {
        icon: "bar-chart",
        title: "Analytics and monthly report",
        description:
          "Marketing reporting in business language: contacts, calls, booked appointments and where each one came from. Not a screenshot of Google Analytics.",
      },
    ],
  },
};

const webDevEn: ServiceDetail = {
  pageContext: {
    title: "Small business web development, no templates",
    paragraphs: [
      "Custom website development with no templates: every page is written for your business so it loads fast, ranks in Google and turns a visitor into a call, a message or a booking. Published pricing from $349 USD and delivery in two to four weeks.",
      "Web development services here run from landing page development to a full site, and include website redesign services when there is already a site bringing in nothing. Everything ships as a custom coded website you can edit yourself — text and photos without waiting on anyone.",
      "Writing the code instead of stacking plugins is what makes fast responsive websites possible at all. Web design and development in one place, bilingual website development in the same build, and professional web development services sized for small business web development rather than for enterprise budgets.",
      "As a website development company this small, the small business website developer you hire is the person who answers you. No account manager, no surprise quote, and the code is yours at the end.",
    ],
  },
  meta: {
    title: "Small Business Web Development | ProCode Dev",
    description:
      "Small business web development: custom-coded, fast websites with technical SEO. Landing page from $349 USD and a 4-6 page site for $899 USD, price published.",
    keywords:
      "small business web development, web development services, custom website development, website development company, web design and development, website redesign services, landing page development, bilingual website development, fast responsive websites, custom coded website, small business website developer, professional web development services",
    heroTitleA: "Small business web development,",
    heroHighlight: "coded to fit",
    heroSubtitle: "Fast, findable, and it sells.",
  },
  intro: {
    title: "What a custom-built site changes",
    lead:
      "A template ships fast and cheap, and that is a real advantage. Custom code costs more up front and gives you control back: what loads, what gets measured, and what can change later.",
    points: [
      { title: "No templates", text: "Astro and Tailwind, not a visual builder." },
      { title: "Included from day one", text: "Technical SEO and measurement, never an add-on." },
      { title: "No middlemen", text: "You talk to the person writing the code." },
    ],
  },
  capabilities: {
    eyebrow: "// what is included",
    title: "What a custom-built site actually contains",
    subtitle:
      "Six pieces that ship with every project, not add-ons quoted later. It is what web development services include when a website development company builds the site instead of a page builder.",
  },
  packages: {
    eyebrow: "// project types",
    title: "Pick the size of your website, with the price published",
    subtitle:
      "The four projects I take on as a small business website developer, what each one includes and what it costs. No surprise quote and no sales call required to see the number.",
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
    itemCta: "Request this project",
    note: "These are real prices, not a reference range: it is what you pay for the scope described. If your project falls outside that scope I tell you before we start, with the exact number, never halfway through.",
    cta: "See full pricing",
    aside: {
      title: "And after launch? The Web Support plan, from $79 USD a month",
      body: "It is optional: you can leave the site as it is and run for years without paying anything more. If you would rather not deal with it, that plan keeps the page fast, backed up and current, includes three to four minor changes a month and sends you a report of contacts, calls and forms. It is upkeep, not lead generation: it does not bring new clients, it looks after the ones already arriving.",
      cta: "See the Web Support plan",
    },
  },
  standards: {
    eyebrow: "// technical standards",
    title: "How every site is built",
    subtitle:
      "Six web design and development decisions applied to every project, bilingual website development included. They are not optional and not billed separately: they are what separates professional web development services from a template, and why a custom coded website ships as fast responsive websites.",
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
  form: {
    eyebrow: "// request a proposal",
    ctaLabel: "Request a proposal for my site",
    titleA: "Tell me what you need and I'll send back",
    titleHighlight: "the scope and the price",
    subtitle:
      "Three fields, nothing else. I reply on WhatsApp in under 24 hours with the scope, the price and the delivery date for your case. If your project is not a fit for me, I'll tell you that too.",
    needLabel: "What you need",
    needOptions: [
      "I have no website and I want one",
      "I have a site and want it rebuilt",
      "I need a landing page for a campaign",
      "I have a site and something is not working",
      "I am still comparing options",
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
  pageContext: {
    title: "Small business digital marketing, in three parts",
    paragraphs: [
      "Three jobs with different scopes and timelines: local SEO services so you show up when someone in your city searches your service, Google Ads management to buy visibility while SEO matures, and marketing automation so no message goes unanswered. Published pricing from $349 USD a month, no 12-month contracts.",
      "The work includes Google Business Profile management — which outweighs the website for most local businesses — review management, and Facebook and Instagram ads when the product sells by being looked at. Lead generation for small businesses is judged by marketing reporting on real contacts, not impressions.",
      "These are digital marketing services built around local SEO for small businesses: budgets a real business can sustain, and a digital marketing agency where you talk to whoever executes. If the site is not ready, that gets fixed first — advertising into a page that does not convert is just paying for the lesson.",
    ],
  },
  meta: {
    title: "Small Business Digital Marketing | ProCode Dev",
    description:
      "Digital marketing for small businesses: local SEO, Google Business Profile, reviews, ads and follow-up automation. Plans from $349 USD a month.",
    keywords:
      "small business digital marketing, digital marketing services, digital marketing agency, local SEO services, Google Business Profile management, Google Ads management, Facebook and Instagram ads, review management, lead generation for small businesses, marketing automation, marketing reporting, local SEO for small businesses",
    heroTitleA: "Local SEO and digital marketing so people",
    heroHighlight: "find and contact your business",
    heroSubtitle: "More searches, more messages.",
  },
  intro: {
    title: "What marketing does once the business runs",
    lead:
      "You are not short on advertising. You are missing from the answer when someone nearby searches for your service.",
    points: [
      { title: "Profile first", text: "Google and reviews decide who gets called." },
      { title: "Then SEO", text: "Three to six months to mature, and it needs upkeep." },
      { title: "Ads last", text: "Once there is somewhere worth sending people." },
    ],
  },
  offer: {
    eyebrow: "// the offer, piece by piece",
    title: "Three different jobs, on three different clocks",
    subtitle:
      "They are sold together because they reinforce each other, but they are not the same work and they do not pay off at the same speed. Here is what each one does, what you get, and when it shows.",
    items: [
      {
        icon: "map-pin",
        title: "Local SEO",
        scope:
          "Showing up when someone in your city searches for your service, in the results and on the map. That means your Google Business Profile, your reviews, and pages on your site by service and by area.",
        deliverablesLabel: "What you get",
        deliverables: [
          "Google Business Profile created, verified and optimized",
          "A system to ask for reviews, and replies to every one that lands",
          "Pages by service and by city, written with original content",
          "Structured data and technical fixes on the site",
          "Map position and new reviews, reported every month",
        ],
        timelineLabel: "When it shows",
        timeline:
          "The profile and reviews move within weeks. Organic ranking matures over three to six months, and it needs upkeep: drop it and you lose ground.",
      },
      {
        icon: "megaphone",
        title: "Google Ads",
        scope:
          "Buying visibility while SEO matures. I manage the campaign and the landing page people arrive on; the ad budget you pay directly to Google, and I take no commission on it.",
        deliverablesLabel: "What you get",
        deliverables: [
          "Campaign built by service and area, with negative keywords",
          "A dedicated landing page matching the ad's scope and price",
          "Calls, forms and bookings attributed to the campaign",
          "Monthly adjustment of bids, ads and budget",
          "Cost-per-lead reporting",
        ],
        timelineLabel: "When it shows",
        timeline:
          "There can be contacts in the first few days, but the first thirty are calibration: that is when you find out which searches are worth it and what a contact actually costs. Ad budget separate, from $300 USD a month.",
      },
      {
        icon: "workflow",
        title: "Follow-up",
        scope:
          "What happens after someone writes to you. An automatic reply to the first message, a reminder to whoever went quiet, and a record of every lead so none of them gets lost in notifications.",
        deliverablesLabel: "What you get",
        deliverables: [
          "Instant reply to forms and to WhatsApp",
          "Automatic reminder to whoever did not answer",
          "A record of every lead with where it came from",
          "An alert to your email or phone the moment one lands",
          "Monthly report of contacts, calls and bookings",
        ],
        timelineLabel: "When it shows",
        timeline:
          "From the first week, because it does not depend on Google. What it does not do is close: automation answers the first message, the sale is still yours.",
      },
    ],
  },
  capabilities: {
    eyebrow: "// what is included",
    title: "The six pieces of the lead system",
    subtitle:
      "These are not six separate digital marketing services you buy one at a time: it is one system for lead generation for small businesses, built in this order because each piece depends on the one before it.",
  },
  packages: {
    eyebrow: "// monthly plans",
    title: "Digital marketing plans with published pricing",
    subtitle:
      "Two lead-generation plans, what each one includes and how fast it works. Growth+ cancels month to month; the full package asks for a three-month minimum because ads and SEO need that long to produce numbers worth deciding on.",
    items: [
      {
        name: "Growth+",
        pricePrefix: "",
        price: "349",
        currency: "USD / mo",
        priceNote: "site upkeep included",
        description:
          "Getting found, not just existing. Google Business Profile, reviews, local SEO and visibility in AI search. No ads: this plan does not buy traffic yet.",
        features: [
          "Site upkeep and the monthly report included",
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
    itemCta: "Request this plan",
    note: "Growth+ has no lock-in: move up, move down or cancel month to month. Web + Marketing + SEO asks for a three-month minimum and, once that is met, also cancels month to month. The budget spent on Google Ads and Meta is paid by you directly to the platform: I take no commission on your ad spend.",
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
          "It depends on the piece, which is why the site quotes two different timelines. Google Business Profile and reviews usually move within weeks. Ads can bring contacts in the first few days — not guaranteed, and it depends on your trade, your area and your budget — and the first thirty days are calibration. Local SEO takes three to six months to mature. When the site says «first signals in 30 to 90 days» it means the former; the three-to-six-month range is organic ranking.",
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
          "More and more people ask ChatGPT or Google's AI answer about a service instead of scanning ten links. What does help is having your business, services and service area written in a format those tools can read: structured data, content that answers real questions, and a current Google profile. I also publish an llms.txt file, though it is worth saying plainly: Google has stated that this file does not influence its search results and is not required for its AI features. All of it is included from the Growth+ plan up.",
      },
    ],
  },
  form: {
    eyebrow: "// lead diagnosis",
    ctaLabel: "Request a lead diagnosis",
    titleA: "Tell me what you sell and where, and I'll tell you",
    titleHighlight: "what is missing",
    subtitle:
      "I look at what a client finds today when they search your service in your city: your Google profile, your reviews, who ranks above you and which piece is missing. I reply on WhatsApp in under 24 hours.",
    needLabel: "What you need",
    needOptions: [
      "I do not show up when people search my service",
      "My Google profile is thin or has no reviews",
      "I want to start running ads",
      "Messages come in and I lose them",
      "I am still comparing options",
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
  linesTitleA: "What you get when you hire",
  linesTitleHighlight: "each service",
  linesSubtitle:
    "Scope, price and timeline for each line, and what stays in your name when it is done. ProCode Dev works as a web design agency and a digital marketing agency at once, for businesses serving clients in English and Spanish across the United States and Mexico.",
  capabilitiesLabel: "What is included",
  compare: {
    eyebrow: "// where do I start",
    titleA: "Which of the two",
    titleHighlight: "do you need?",
    subtitle:
      "What you want from a website design company for small business almost always comes down to one thing: whether people find you and do not hire you, or do not find you at all. And if that is not clear yet, the third option is the one most people use.",
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
        title: "Help me choose",
        body: "It is not always obvious, and choosing wrong costs months. Tell me in one line what you sell and what is happening now — nobody finds you, people land and never write, or you are starting from zero — and I'll come back with which of the two you need first, even if the answer is that you do not need to hire me yet.",
        forWho: "For anyone comparing options who is not ready to book a call.",
        price: "a WhatsApp reply in under 24 hours",
        cta: "Get a recommendation",
        href: "form",
        highlighted: false,
      },
    ],
    note: "The two together do exist as a package — Web + Marketing + SEO, from $1,100 USD a month, with a three-month minimum — but almost nobody starts there. If you would rather talk it through live, the Express Review is free: I look at what a client finds when they search your service in your city and record it as a three-minute video.",
  },
  faq: {
    eyebrow: "// common questions",
    titleA: "Before you pick a",
    titleHighlight: "service",
    subtitle:
      "The questions that come up when someone is comparing web design and digital marketing agencies.",
    items: [
      {
        question: "Which of the two do I need, and what do I get for it?",
        answer:
          "If you have no website, yours was made in a page builder, or people land and nobody writes, you need web development: you get a custom-coded site with a page per service, forms and WhatsApp wired up and measurement in place, delivered in two to four weeks and registered in your name. If your page already converts but few people reach it, you need small business digital marketing services: you get your Google Business Profile worked on, reviews, local SEO by city and service, campaigns if you run them, and a monthly report of contacts, calls and bookings. Everything else — forms, automation, analytics, AI search optimization — lives inside one of those two, never quoted separately.",
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
  form: {
    eyebrow: "// a recommendation for your business",
    ctaLabel: "Get a recommendation for my business",
    titleA: "Tell me what you sell and I'll tell you",
    titleHighlight: "which of the two you need",
    subtitle:
      "Three fields, nothing else. I reply on WhatsApp in under 24 hours with which of the two services you need first, what it includes and what it costs in your case. If the answer is that you do not need to hire me yet, I'll say that too.",
    needLabel: "What is happening now",
    needOptions: [
      "I have no website and I want one",
      "I have a site but nobody writes to me",
      "I do not show up when people search my service",
      "I want both: a site and lead generation",
      "I am still comparing options",
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

// ═══════════════════════════════════════════════════════════════════════
// FORMULARIO CORTO DE LAS PÁGINAS DE SERVICIO
//
// El formulario de /contacto pide nombre, teléfono y correo obligatorios.
// Está bien para quien ya decidió; es demasiado para quien está comparando
// proveedores y solo quiere saber un precio. Este pide tres cosas —nombre,
// WhatsApp y qué necesita— y deja correo y mensaje opcionales.
//
// Va dentro de cada página de servicio, así que el visitante no tiene que
// salir a /contacto justo cuando estaba decidiendo.
// ═══════════════════════════════════════════════════════════════════════

export const leadForm: Record<"es" | "en", LeadFormCopy> = {
  es: {
    fieldName: "Nombre",
    phName: "Ej: María González",
    fieldPhone: "WhatsApp",
    phPhone: "614 123 4567",
    fieldEmail: "Correo",
    phEmail: "maria@minegocio.com",
    fieldMessage: "Algo más que deba saber",
    phMessage:
      "Ej: tengo un consultorio dental en Houston y quiero que los pacientes agenden solos.",
    optionalTag: "opcional",
    interestLabel: "Te interesa",
    submit: "Enviar y recibir respuesta",
    sending: "Enviando…",
    success:
      "Listo. Te escribo por WhatsApp en menos de 24 horas con el alcance y el precio para tu caso.",
    error:
      "No se pudo enviar. Escríbeme por WhatsApp y te atiendo igual de rápido.",
    perks: [
      "Respuesta en menos de 24 horas, por WhatsApp",
      "Te contesto yo, no un ejecutivo de cuenta",
      "Sin costo y sin llamada de ventas para conocer el precio",
    ],
    altTitle: "¿Prefieres otra vía?",
    altSchedule: "Agendar la Revisión Express",
    altWhatsapp: "Escribir por WhatsApp",
    privacy:
      "Uso tus datos solo para contestarte. Nada de listas de correo ni de compartirlos con terceros.",
  },
  en: {
    fieldName: "Name",
    phName: "Ex: Maria Gonzalez",
    fieldPhone: "WhatsApp",
    phPhone: "(614) 123-4567",
    fieldEmail: "Email",
    phEmail: "maria@mybusiness.com",
    fieldMessage: "Anything else I should know",
    phMessage:
      "Ex: I run a dental practice in Houston and I want patients to book themselves.",
    optionalTag: "optional",
    interestLabel: "You are interested in",
    submit: "Send and get a reply",
    sending: "Sending…",
    success:
      "Done. I'll message you on WhatsApp within 24 hours with the scope and the price for your case.",
    error: "That did not send. Message me on WhatsApp and I'll reply just as fast.",
    perks: [
      "A reply in under 24 hours, on WhatsApp",
      "You get me, not an account executive",
      "No cost and no sales call needed to see the price",
    ],
    altTitle: "Prefer another way?",
    altSchedule: "Book the Express Review",
    altWhatsapp: "Message me on WhatsApp",
    privacy:
      "I use your details only to reply. No mailing lists and nothing shared with third parties.",
  },
};
