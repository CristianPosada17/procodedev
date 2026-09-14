/*
  ─────────────────────────────────────────────────────────────────────────
  SUBSERVICIOS (septiembre de 2026) — del keyword research de arquitectura
  ─────────────────────────────────────────────────────────────────────────

  El research mostró tres intenciones comerciales con URL propia que hoy
  viven dentro de /servicios/desarrollo-web/ y no pueden rankear desde ahí:

    diseño de landing page      542 búsquedas/mes  → /servicios/landing-pages/
    diseño web con SEO          700 búsquedas/mes  → /servicios/diseno-web-seo/
    mantenimiento web           258 búsquedas/mes  → /servicios/mantenimiento-web/

  No son líneas de servicio nuevas: son entradas distintas al MISMO trabajo.
  Por eso NO están en SERVICE_KEYS ni cambian la narrativa de «dos servicios»,
  y por eso su página es más corta que la de una línea completa: hero, por
  qué, qué incluye, precio publicado, filtro, dudas, formulario y enlaces de
  vuelta a la página madre (/servicios/desarrollo-web/) y a /precios/.

  Reglas heredadas: nada de «negocios pequeños» en español; «small business»
  se queda en inglés; ProCode ES una agencia dirigida por su fundador; cero
  precios inventados — solo los ya publicados ($349, $697 la landing con
  sistema de captación, $899, $1,499, $79/mes y $349/mes).
*/

import type { PageContextCopy, Lang } from "./ui";
import type { ServiceCapability, ServicePackageItem } from "./services";

export const SUBSERVICE_KEYS = [
  "landingPages",
  "webSeo",
  "maintenance",
] as const;
export type SubserviceKey = (typeof SUBSERVICE_KEYS)[number];

export interface SubserviceDetail {
  navLabel: string;
  navHint: string;
  icon: string;
  badge: string;
  /** Nombre que viaja al JSON-LD `Service` y al correo del formulario. */
  serviceName: string;
  audience: string;
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
    lead: string;
    points: readonly { title: string; text: string }[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly ServiceCapability[];
  };
  packages: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly ServicePackageItem[];
    itemCta: string;
    note: string;
    cta: string;
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
  form: {
    eyebrow: string;
    ctaLabel: string;
    titleA: string;
    titleHighlight: string;
    subtitle: string;
    needLabel: string;
    needOptions: readonly string[];
  };
  /** Enlazado interno recomendado por la matriz SEO. */
  related: {
    eyebrow: string;
    title: string;
    body: string;
    items: readonly { label: string; href: string; hint: string }[];
  };
  pageContext: PageContextCopy;
}

// ═══════════════════════════════════════════════════════════════════════
// ESPAÑOL
// ═══════════════════════════════════════════════════════════════════════

const landingPagesEs: SubserviceDetail = {
  navLabel: "Landing Pages",
  navHint: "Una página, un objetivo y el precio publicado",
  icon: "target",
  badge: "Subservicio de desarrollo web",
  serviceName: "Diseño de landing pages",
  audience: "Negocios que lanzan una campaña o venden un solo servicio",
  meta: {
    title: "Diseño de Landing Pages para Negocios | ProCode",
    description:
      "Diseño de landing page para negocios: una sola página enfocada en convertir, entregada en una semana. Precio publicado: $349 USD, o $697 USD con captación.",
    keywords:
      "diseño de landing page, diseñar landing page, diseño de página de ventas, precio landing page, landing page para negocios, crear página de ventas, landing page para campañas, página de aterrizaje",
    heroTitleA: "Diseño de landing pages",
    heroHighlight: "para negocios",
    heroSubtitle: "Una página, una decisión.",
  },
  intro: {
    title: "Por qué una landing y no el sitio completo",
    lead:
      "Cuando pagas por cada clic, mandar a la gente al inicio de tu sitio es la forma más cara de perderla: hay seis caminos y ninguno lleva a comprar.",
    points: [
      { title: "Un solo objetivo", text: "Una acción por página, sin menú que distraiga." },
      { title: "Lista en una semana", text: "Más rápido que un sitio de cuatro a seis páginas." },
      { title: "Medible desde el día uno", text: "Cada clic y cada envío quedan registrados." },
    ],
  },
  capabilities: {
    eyebrow: "// qué incluye",
    title: "Lo que lleva dentro una landing que convierte",
    subtitle:
      "Seis piezas que van en todas las landing pages que entrego, no como extras que se cotizan aparte.",
    items: [
      {
        icon: "target",
        title: "Una oferta, una acción",
        description:
          "Un solo objetivo por página y una llamada a la acción repetida en los tres puntos donde la gente decide.",
      },
      {
        icon: "pen",
        title: "Texto de ventas, no de catálogo",
        description:
          "La estructura es oferta, prueba y objeción. Escribo el texto contigo: tú sabes qué te preguntan por teléfono.",
      },
      {
        icon: "message-circle",
        title: "WhatsApp y formulario arriba",
        description:
          "Botón directo a WhatsApp fijo en móvil y formulario corto de tres campos, sin obligar a bajar hasta el final.",
      },
      {
        icon: "smartphone",
        title: "Hecha para el pulgar",
        description:
          "La mayoría del tráfico de campaña llega desde el teléfono, así que el diseño se resuelve primero ahí.",
      },
      {
        icon: "zap",
        title: "Carga en menos de dos segundos",
        description:
          "Código propio en vez de plantilla con plugins: cada décima de segundo en una campaña pagada cuesta dinero.",
      },
      {
        icon: "bar-chart",
        title: "Medición conectada",
        description:
          "Google Analytics 4, píxel de Meta y eventos de envío configurados para que sepas qué anuncio trajo cada mensaje.",
      },
    ],
  },
  packages: {
    eyebrow: "// precio publicado",
    title: "Cuánto cuesta una landing page",
    subtitle:
      "El precio landing page está publicado como todo lo demás en este sitio. Lo que ves es lo que pagas.",
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
          "Botón directo a WhatsApp y formulario corto",
          "Impecable en móvil y carga rápida",
          "SEO base y medición conectada",
          "Entrega en una semana",
        ],
        highlighted: true,
      },
      {
        name: "Landing + sistema de captación",
        pricePrefix: "",
        price: "697",
        currency: "USD",
        priceNote: "pago único",
        description:
          "La landing más el sistema que recoge y ordena a cada prospecto: formularios conectados, seguimiento automático y medición por campaña. Para cuando vas a invertir en anuncios y no quieres perder ni un mensaje.",
        features: [
          "Todo lo del paquete anterior",
          "Formulario y WhatsApp conectados a tu correo y a tu hoja de control",
          "Respuesta automática al prospecto en cuanto escribe",
          "Recordatorio de seguimiento para que ninguno se quede sin contestar",
          "Medición por campaña: sabes qué anuncio trajo cada mensaje",
          "Página de gracias con siguiente paso y evento de conversión",
        ],
        highlighted: false,
      },
    ],
    itemCta: "Solicitar este paquete",
    note:
      "Si después quieres el sitio completo, la landing no se tira: se convierte en una de sus páginas y descuento lo que ya pagaste. Los dos paquetes son de pago único; las campañas de anuncios, si las quieres gestionadas, van aparte desde $349 USD al mes.",
    cta: "Ver todos los precios",
  },
  fit: {
    eyebrow: "// antes de escribirme",
    title: "Cuándo una landing es la decisión correcta",
    yesTitle: "Encaja contigo si",
    yes: [
      "Vas a invertir en anuncios y necesitas a dónde mandar el tráfico.",
      "Vendes un solo servicio y no necesitas seis páginas para explicarlo.",
      "Quieres probar una oferta nueva antes de rehacer todo el sitio.",
      "Ya tienes sitio, pero ninguna de sus páginas está hecha para convertir.",
    ],
    noTitle: "No encaja si",
    no: [
      "Vendes cinco servicios distintos y cada uno tiene su propio cliente: eso pide una página por servicio.",
      "Buscas posicionarte en Google a mediano plazo con contenido: una sola página rankea poco.",
      "Necesitas catálogo, filtros o fichas de producto.",
    ],
  },
  faq: {
    eyebrow: "// dudas de landing pages",
    titleA: "Lo que preguntan antes de",
    titleHighlight: "encargar una landing",
    subtitle:
      "Las dudas que salen en casi todas las llamadas sobre diseño de página de ventas, con el número y el plazo real.",
    items: [
      {
        question: "¿Cuál es la diferencia entre una landing page y un sitio web?",
        answer:
          "Una landing page tiene un objetivo y ninguna salida: sirve para convertir el tráfico que ya viene de un anuncio, un correo o un código QR. Un sitio web tiene varias páginas y sirve para que te encuentren en Google y para explicar todo lo que haces. La landing convierte; el sitio atrae y explica.",
      },
      {
        question: "¿Cuánto tarda?",
        answer:
          "Una semana desde que tengo el texto y las fotos. Si no los tienes, el texto lo escribo yo a partir de una llamada de 20 minutos y el plazo sigue siendo el mismo.",
      },
      {
        question: "¿Puedo editarla yo después?",
        answer:
          "Sí. Se entrega autoadministrable: cambias textos, precios y fotos sin depender de mí y sin tocar código.",
      },
      {
        question: "¿Sirve para anuncios de Google y de Meta?",
        answer:
          "Está hecha para eso. Lleva la medición conectada desde el primer día, así que puedes ver qué campaña trajo cada mensaje en vez de adivinar.",
      },
    ],
  },
  form: {
    eyebrow: "// solicitar propuesta",
    ctaLabel: "Solicitar mi landing page",
    titleA: "Cuéntame qué vas a promocionar y te paso",
    titleHighlight: "el alcance y la fecha",
    subtitle:
      "Tres datos y nada más. Te contesto por WhatsApp en menos de 24 horas con el alcance, el precio y la fecha de entrega para tu caso.",
    needLabel: "Qué necesitas",
    needOptions: [
      "Una landing para una campaña de anuncios",
      "Una landing para un servicio nuevo",
      "Rehacer una landing que no convierte",
      "Todavía estoy comparando opciones",
    ],
  },
  related: {
    eyebrow: "// a dónde seguir",
    title: "Si lo tuyo no es una sola página",
    body:
      "La landing es la entrada más rápida al mismo trabajo. Estas son las otras dos puertas, por si tu caso pide más.",
    items: [
      {
        label: "Diseño y desarrollo de páginas web",
        href: "/servicios/desarrollo-web/",
        hint: "El sitio completo, de 4 a 12 páginas",
      },
      {
        label: "Precios de páginas web",
        href: "/precios/",
        hint: "Todos los paquetes con su precio publicado",
      },
      {
        label: "Landing page o sitio web: cuál necesito",
        href: "/blog/landing-page-vs-sitio-web-cual-necesito/",
        hint: "La comparación completa, sin vender nada",
      },
    ],
  },
  pageContext: {
    title: "Diseño de landing pages para negocios",
    paragraphs: [
      "El diseño de landing page resuelve un problema distinto al de un sitio completo: una sola página, un solo mensaje y una sola acción. Si vas a diseñar landing page para una campaña de anuncios, mandar el tráfico al inicio de tu sitio es la forma más cara de perderlo, porque ahí hay seis caminos y ninguno lleva a comprar.",
      "Una landing page para negocios se arma al revés que una página institucional: primero la oferta, luego la prueba y al final la objeción. El diseño de página de ventas ordena esas tres piezas para que la decisión ocurra sin scroll infinito, y el botón de WhatsApp queda siempre a un toque. Es la misma pieza que en publicidad se llama página de aterrizaje.",
      "El precio landing page está publicado: $349 USD de pago único la landing sola, o $697 USD con el sistema de captación conectado. Entrega en una semana y medición desde el primer día. Crear página de ventas por tu cuenta con un constructor es una opción legítima y barata; esta es la versión a la medida, sin plantilla y sin plugins, pensada para landing page para campañas que pagan por cada clic.",
    ],
  },
};

const webSeoEs: SubserviceDetail = {
  navLabel: "Diseño web con SEO",
  navHint: "El sitio y el posicionamiento en el mismo proyecto",
  icon: "search",
  badge: "Subservicio de desarrollo web",
  serviceName: "Diseño web con SEO",
  audience: "Negocios que quieren aparecer en Google desde el lanzamiento",
  meta: {
    title: "Diseño Web con SEO para Negocios | ProCode Dev",
    description:
      "Diseño web con SEO para negocios: el sitio y el posicionamiento en Google en el mismo proyecto, no como extra. Precio publicado desde $899 USD.",
    keywords:
      "diseño web con SEO, diseño web SEO, SEO y diseño web, diseño web y posicionamiento SEO, creación de páginas web y posicionamiento, diseño web con posicionamiento, páginas web optimizadas para Google, SEO técnico para páginas web",
    heroTitleA: "Diseño web con SEO",
    heroHighlight: "para negocios",
    heroSubtitle: "Sale en Google desde el día uno.",
  },
  intro: {
    title: "Por qué el SEO no puede ser un extra",
    lead:
      "El 80 % de lo que decide si tu sitio aparece en Google se define mientras se construye: estructura, velocidad, títulos y cómo se enlazan las páginas entre sí.",
    points: [
      { title: "Estructura primero", text: "Una página por intención de búsqueda, no una sola de «servicios»." },
      { title: "Velocidad de verdad", text: "Código propio: nada de arreglar después lo que una plantilla rompió." },
      { title: "Medible", text: "Search Console y analítica conectadas al entregar, no meses después." },
    ],
  },
  capabilities: {
    eyebrow: "// qué incluye",
    title: "Qué lleva un sitio hecho con SEO desde el principio",
    subtitle:
      "El SEO técnico va incluido en todos los proyectos. Esta página existe porque mucha gente lo busca por su nombre, no porque sea un extra que se cobra aparte.",
    items: [
      {
        icon: "route",
        title: "Arquitectura por intención",
        description:
          "Una página por cada cosa que tu cliente busca, enlazadas entre sí para que Google entienda cuál es la principal.",
      },
      {
        icon: "file-text",
        title: "Títulos y descripciones propios",
        description:
          "Cada página con su título, su descripción y su frase principal. Ninguna heredada del inicio ni repetida.",
      },
      {
        icon: "zap",
        title: "Velocidad y Core Web Vitals",
        description:
          "Imágenes en AVIF y WebP, fuentes auto-hospedadas y scripts diferidos. La velocidad es factor de posicionamiento y de conversión.",
      },
      {
        icon: "database",
        title: "Datos estructurados",
        description:
          "JSON-LD de negocio, servicio, preguntas frecuentes y migas de pan, que es lo que leen Google y los buscadores con IA.",
      },
      {
        icon: "map-pin",
        title: "SEO local base",
        description:
          "Perfil de Empresa en Google enlazado, zona de servicio declarada y páginas por ciudad cuando el negocio las justifica.",
      },
      {
        icon: "search",
        title: "Search Console desde el lanzamiento",
        description:
          "Sitemap enviado, indexación verificada y el informe abierto para que veas por qué frases entra la gente.",
      },
    ],
  },
  packages: {
    eyebrow: "// precio publicado",
    title: "Cuánto cuesta un sitio con SEO incluido",
    subtitle:
      "Mismo precio que el desarrollo web: el SEO técnico no se cobra aparte. Lo que se cobra aparte es el SEO continuo, que es otro trabajo.",
    items: [
      {
        name: "Sitio Web de 4 a 6 páginas",
        pricePrefix: "",
        price: "899",
        currency: "USD",
        priceNote: "pago único",
        description:
          "Tu negocio completo en línea, con una página por servicio y el SEO técnico resuelto dentro del mismo proyecto.",
        features: [
          "4 a 6 páginas, una por intención de búsqueda",
          "Títulos, descripciones y datos estructurados propios",
          "Velocidad y Core Web Vitals cuidados",
          "Search Console y analítica conectadas",
          "SEO local base y Perfil de Empresa en Google",
        ],
        highlighted: true,
      },
      {
        name: "SEO continuo",
        pricePrefix: "desde",
        price: "349",
        currency: "USD",
        priceNote: "al mes",
        description:
          "Lo que sí es trabajo mensual: contenido nuevo, reseñas, enlaces y ajustes según lo que muestre Search Console.",
        features: [
          "Contenido y páginas nuevas cada mes",
          "Perfil de Empresa en Google y reseñas",
          "Seguimiento de posiciones y ajustes",
          "Reporte de contactos reales",
          "Sin contratos de 12 meses",
        ],
        highlighted: false,
      },
    ],
    itemCta: "Solicitar este paquete",
    note:
      "El SEO local tarda de tres a seis meses en madurar. Cualquiera que te prometa la primera posición en un mes te está vendiendo humo.",
    cta: "Ver todos los precios",
  },
  fit: {
    eyebrow: "// antes de escribirme",
    title: "Cuándo tiene sentido este enfoque",
    yesTitle: "Encaja contigo si",
    yes: [
      "Quieres que el sitio traiga búsquedas, no solo que exista.",
      "Vendes varios servicios y cada uno se busca con palabras distintas.",
      "Tu sitio actual carga lento o no aparece ni buscando tu nombre.",
      "Piensas invertir en contenido y quieres una base que lo aguante.",
    ],
    noTitle: "No encaja si",
    no: [
      "Necesitas clientes esta semana: para eso son los anuncios, no el SEO.",
      "Esperas la primera posición garantizada: nadie puede garantizarla, y quien lo hace miente.",
      "No vas a tocar el Perfil de Empresa en Google ni a pedir reseñas: el SEO local depende de eso tanto como del sitio.",
    ],
  },
  faq: {
    eyebrow: "// dudas de diseño web y SEO",
    titleA: "Lo que preguntan sobre",
    titleHighlight: "web y posicionamiento",
    subtitle:
      "Las dudas que salen cuando alguien busca creación de páginas web y posicionamiento en el mismo proyecto.",
    items: [
      {
        question: "¿El SEO va incluido o se cobra aparte?",
        answer:
          "El SEO técnico —estructura, velocidad, títulos, datos estructurados, sitemap e indexación— va incluido en todos los proyectos, sin costo extra. El SEO continuo, que es contenido nuevo, reseñas y ajustes mes a mes, sí es un servicio aparte desde $349 USD al mes.",
      },
      {
        question: "¿En cuánto tiempo aparezco en Google?",
        answer:
          "La indexación toma días. Aparecer entre los primeros por una frase que la gente busca de verdad toma de tres a seis meses y depende de la competencia de tu ciudad y de tu giro. Lo que sí es inmediato es dejar de perder posiciones por velocidad o estructura.",
      },
      {
        question: "Ya tengo página. ¿Se puede optimizar en vez de rehacerla?",
        answer:
          "A veces sí. Si la base técnica aguanta, se optimiza. Si está hecha con una plantilla pesada y llena de plugins, sale más caro parchearla que rehacerla. La Auditoría Digital responde exactamente esa pregunta con tus datos.",
      },
      {
        question: "¿Qué pasa con ChatGPT y los buscadores con IA?",
        answer:
          "Lo mismo que hace que Google te entienda hace que te entienda un modelo: estructura clara, datos estructurados y respuestas concretas en el texto. Todos los sitios que entrego llevan además un archivo llms.txt y permiso explícito a los rastreadores de IA.",
      },
    ],
  },
  form: {
    eyebrow: "// solicitar propuesta",
    ctaLabel: "Solicitar propuesta con SEO",
    titleA: "Cuéntame por qué quieres que te encuentren y te paso",
    titleHighlight: "el alcance y el precio",
    subtitle:
      "Tres datos y nada más. Te contesto por WhatsApp en menos de 24 horas con el alcance, el precio y qué esperar mes a mes.",
    needLabel: "Qué necesitas",
    needOptions: [
      "Un sitio nuevo con SEO desde el principio",
      "Optimizar el sitio que ya tengo",
      "Aparecer en mi ciudad, no en todo el país",
      "Todavía estoy comparando opciones",
    ],
  },
  related: {
    eyebrow: "// a dónde seguir",
    title: "Las otras dos mitades del mismo trabajo",
    body:
      "El sitio con SEO técnico es la base. Llenarlo de visitas mes a mes es el otro servicio.",
    items: [
      {
        label: "Diseño y desarrollo de páginas web",
        href: "/servicios/desarrollo-web/",
        hint: "El proyecto completo, de 4 a 12 páginas",
      },
      {
        label: "Marketing digital para negocios",
        href: "/servicios/marketing-digital/",
        hint: "SEO local continuo, Google Ads y seguimiento",
      },
      {
        label: "Precios de páginas web",
        href: "/precios/",
        hint: "Todos los paquetes con su precio publicado",
      },
    ],
  },
  pageContext: {
    title: "Diseño web con SEO para negocios",
    paragraphs: [
      "El diseño web con SEO no es un servicio aparte: es construir el sitio sabiendo que va a competir en Google. La estructura, la velocidad, los títulos y el enlazado interno se deciden mientras se programa, y rehacer eso después cuesta más que hacerlo bien la primera vez. Por eso aquí el diseño web SEO viene incluido en el precio del proyecto.",
      "Quien busca creación de páginas web y posicionamiento suele estar comparando dos presupuestos: uno del sitio y otro de la agencia que después lo va a optimizar. Juntar SEO y diseño web en el mismo proyecto evita ese segundo gasto y, sobre todo, evita que el sitio nazca con problemas que ya no se pueden arreglar sin tocar el código.",
      "Lo que incluye el diseño web y posicionamiento SEO: una página por intención de búsqueda, títulos y descripciones propios, datos estructurados en JSON-LD, imágenes ligeras, Search Console conectada y el Perfil de Empresa en Google enlazado. Son páginas web optimizadas para Google de verdad, con el SEO técnico para páginas web resuelto antes del lanzamiento.",
      "Lo que no incluye, porque es otro trabajo con otro plazo: el contenido mensual, las reseñas y los enlaces. Ese diseño web con posicionamiento continuo empieza en $349 USD al mes y tarda de tres a seis meses en notarse.",
    ],
  },
};

const maintenanceEs: SubserviceDetail = {
  navLabel: "Mantenimiento Web",
  navHint: "Actualizaciones, respaldos y soporte desde $79 al mes",
  icon: "shield",
  badge: "Servicio recurrente",
  serviceName: "Mantenimiento y soporte de páginas web",
  audience: "Negocios con un sitio publicado que no quieren mantenerlo solos",
  meta: {
    title: "Mantenimiento Web para Negocios | ProCode Dev",
    description:
      "Mantenimiento de páginas web con precio publicado desde $79 USD al mes: actualizaciones, respaldos, seguridad, cambios de contenido y soporte por WhatsApp.",
    keywords:
      "mantenimiento web, mantenimiento de páginas web, precio mantenimiento web, hosting y mantenimiento web, soporte de página web, actualización de página web, respaldo de sitio web, mantenimiento de sitios web para negocios",
    heroTitleA: "Mantenimiento y soporte",
    heroHighlight: "de páginas web",
    heroSubtitle: "Tu sitio, siempre en pie.",
  },
  intro: {
    title: "Qué pasa con un sitio al que nadie le da mantenimiento",
    lead:
      "Un sitio publicado no se queda quieto: el certificado caduca, el dominio se renueva solo o no, el formulario deja de llegar al correo y nadie se entera hasta que un cliente lo dice.",
    points: [
      { title: "Alguien lo vigila", text: "Monitoreo de caídas y del certificado, no aviso del cliente." },
      { title: "Cambios sin cotizar", text: "Textos, fotos y precios incluidos en el plan." },
      { title: "Se cancela cuando quieras", text: "Sin contratos de 12 meses ni penalización." },
    ],
  },
  capabilities: {
    eyebrow: "// qué incluye",
    title: "Qué cubre el plan de mantenimiento",
    subtitle:
      "El mantenimiento de páginas web que hago es preventivo: la idea es que no te enteres de que pasó algo porque ya estaba resuelto.",
    items: [
      {
        icon: "repeat",
        title: "Actualizaciones y parches",
        description:
          "Dependencias, certificado de seguridad y configuración del servidor al día, sin que tengas que pedirlo.",
      },
      {
        icon: "database",
        title: "Respaldos automáticos",
        description:
          "Copia del sitio y del contenido, con restauración probada. Un respaldo que nunca se restaura no es un respaldo.",
      },
      {
        icon: "shield",
        title: "Monitoreo y seguridad",
        description:
          "Aviso si el sitio se cae o si el certificado está por vencer, y revisión de formularios para que los mensajes sigan llegando.",
      },
      {
        icon: "pen",
        title: "Cambios de contenido",
        description:
          "Textos, fotos, precios y servicios nuevos incluidos en el plan, sin cotizar cada cambio por separado.",
      },
      {
        icon: "bar-chart",
        title: "Reporte mensual",
        description:
          "Qué se hizo, qué se rompió, cuántos contactos entraron y qué conviene ajustar el mes siguiente.",
      },
      {
        icon: "message-circle",
        title: "Soporte por WhatsApp",
        description:
          "Le escribes a la persona que programó tu sitio y te contesta en menos de 24 horas. Sin ticket ni cola de atención.",
      },
    ],
  },
  packages: {
    eyebrow: "// precio publicado",
    title: "Cuánto cuesta el mantenimiento web",
    subtitle:
      "El precio mantenimiento web está publicado igual que el resto. Se paga mes a mes y se cancela cuando quieras.",
    items: [
      {
        name: "Mantenimiento",
        pricePrefix: "desde",
        price: "79",
        currency: "USD",
        priceNote: "al mes",
        description:
          "Para el sitio que ya está publicado y funcionando: que siga rápido, seguro y actualizado sin que tengas que ocuparte tú.",
        features: [
          "Actualizaciones y parches de seguridad",
          "Respaldos automáticos con restauración probada",
          "Monitoreo de caídas y del certificado",
          "Cambios de contenido incluidos",
          "Soporte por WhatsApp en menos de 24 horas",
          "Se cancela cuando quieras",
        ],
        highlighted: true,
      },
      {
        name: "Mantenimiento + captación",
        pricePrefix: "desde",
        price: "349",
        currency: "USD",
        priceNote: "al mes",
        description:
          "Cuando además del mantenimiento quieres que el sitio traiga trabajo: SEO local, Perfil de Empresa en Google, anuncios y seguimiento.",
        features: [
          "Todo lo del plan de mantenimiento",
          "SEO local y contenido nuevo cada mes",
          "Perfil de Empresa en Google y reseñas",
          "Campañas de anuncios si hacen falta",
          "Reporte de contactos reales",
        ],
        highlighted: false,
      },
    ],
    itemCta: "Solicitar este plan",
    note:
      "El hosting y el dominio los pagas tú directo al proveedor —entre $60 y $120 USD al año— y quedan a tu nombre. Nunca me quedo con la propiedad de tu sitio.",
    cta: "Ver todos los precios",
  },
  fit: {
    eyebrow: "// antes de escribirme",
    title: "Para quién es este plan",
    yesTitle: "Encaja contigo si",
    yes: [
      "Tienes un sitio publicado y nadie se ocupa de él desde hace meses.",
      "Cambias precios, servicios o fotos varias veces al año.",
      "No quieres enterarte de que el sitio se cayó porque te lo dijo un cliente.",
      "Quieres un solo responsable para el sitio, el correo y los formularios.",
    ],
    noTitle: "No encaja si",
    no: [
      "Tu sitio está hecho en una plataforma cerrada a la que no puedo entrar.",
      "Lo que necesitas es rehacer el sitio: mantener uno que no funciona es pagar por sostener el problema.",
      "Tienes equipo interno que ya se ocupa de esto.",
    ],
  },
  faq: {
    eyebrow: "// dudas de mantenimiento",
    titleA: "Lo que preguntan antes de",
    titleHighlight: "contratar el plan",
    subtitle:
      "Las dudas que salen sobre hosting y mantenimiento web, con el número y el plazo real.",
    items: [
      {
        question: "¿El hosting está incluido?",
        answer:
          "No, y es a propósito. El hosting y el dominio los contratas tú a tu nombre —entre $60 y $120 USD al año— para que el sitio sea tuyo de verdad. Yo lo configuro y lo administro dentro del plan, pero la propiedad y la factura son tuyas.",
      },
      {
        question: "¿Cuántos cambios puedo pedir al mes?",
        answer:
          "Los cambios normales de un negocio: textos, fotos, precios, horarios, un servicio nuevo. Si lo que pides es una página nueva completa o una integración, eso se cotiza aparte y te lo digo antes de empezar.",
      },
      {
        question: "¿Mantienes sitios que no hiciste tú?",
        answer:
          "Sí, si puedo entrar y la base técnica aguanta. Antes de aceptar reviso el sitio y te digo con honestidad si conviene mantenerlo o rehacerlo: sostener un sitio que no funciona es pagar todos los meses por el mismo problema.",
      },
      {
        question: "¿Puedo cancelar cuando quiera?",
        answer:
          "Sí. Es mes a mes, sin contrato de 12 meses ni penalización. Si cancelas, el sitio sigue siendo tuyo y te entrego todos los accesos.",
      },
    ],
  },
  form: {
    eyebrow: "// solicitar plan",
    ctaLabel: "Solicitar el plan de mantenimiento",
    titleA: "Cuéntame cómo está tu sitio y te digo",
    titleHighlight: "qué necesita cada mes",
    subtitle:
      "Tres datos y nada más. Reviso tu sitio y te contesto por WhatsApp en menos de 24 horas con lo que incluye el plan en tu caso.",
    needLabel: "Qué necesitas",
    needOptions: [
      "Mantener un sitio que yo ya tengo",
      "Mantener un sitio que hiciste tú",
      "Rescatar un sitio abandonado",
      "Todavía estoy comparando opciones",
    ],
  },
  related: {
    eyebrow: "// a dónde seguir",
    title: "Antes de mantenerlo, conviene saber cómo está",
    body:
      "Si no estás seguro de si tu sitio se mantiene o se rehace, estas son las dos puertas de al lado.",
    items: [
      {
        label: "Auditoría Digital",
        href: "/servicios/auditoria/",
        hint: "Nueve áreas revisadas con tus datos, $250 USD",
      },
      {
        label: "Diseño y desarrollo de páginas web",
        href: "/servicios/desarrollo-web/",
        hint: "Si sale más barato rehacerlo que parcharlo",
      },
      {
        label: "Precios de páginas web",
        href: "/precios/",
        hint: "Todos los paquetes con su precio publicado",
      },
    ],
  },
  pageContext: {
    title: "Mantenimiento y soporte de páginas web",
    paragraphs: [
      "El mantenimiento web es el trabajo del que nadie habla hasta que algo falla: el certificado que caduca, el formulario que dejó de mandar correos, la foto vieja del servicio que ya no das. El mantenimiento de páginas web que hago es preventivo y mensual, con precio publicado desde $79 USD y sin contratos de 12 meses.",
      "Qué cubre el soporte de página web: actualizaciones y parches, respaldo de sitio web con restauración probada, monitoreo de caídas, revisión de formularios, cambios de contenido incluidos y un reporte mensual de lo que pasó. Cada actualización de página web queda registrada, así que siempre sabes qué se tocó y cuándo.",
      "El hosting y mantenimiento web no se cobran juntos a propósito: el hosting y el dominio los contratas tú, a tu nombre, entre $60 y $120 USD al año. Yo los configuro y los administro, pero la propiedad es tuya. Es mantenimiento de sitios web para negocios sin secuestro de accesos: si un día te vas, te entrego todo.",
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════
// INGLÉS
// ═══════════════════════════════════════════════════════════════════════

const landingPagesEn: SubserviceDetail = {
  navLabel: "Landing Pages",
  navHint: "One page, one goal, price published",
  icon: "target",
  badge: "Part of web development",
  serviceName: "Landing page design",
  audience: "Small businesses running a campaign or selling one service",
  meta: {
    title: "Landing Page Design for Small Business | ProCode",
    description:
      "Landing page design for small businesses: one page built to convert, delivered in a week. Published pricing: $349 USD, or $697 USD with lead capture.",
    keywords:
      "landing page design, landing page designer, sales page design, landing page pricing, landing page for small business, landing page for ads, high converting landing page, custom landing page",
    heroTitleA: "Landing page design",
    heroHighlight: "for small businesses",
    heroSubtitle: "One page, one decision.",
  },
  intro: {
    title: "Why a landing page and not the whole site",
    lead:
      "When you pay for every click, sending people to your homepage is the most expensive way to lose them: six paths and none of them leads to buying.",
    points: [
      { title: "One goal", text: "One action per page, no menu pulling people away." },
      { title: "Live in a week", text: "Faster than a four-to-six page site." },
      { title: "Measured from day one", text: "Every click and every submission recorded." },
    ],
  },
  capabilities: {
    eyebrow: "// what's included",
    title: "What goes into a landing page that converts",
    subtitle:
      "Six pieces that ship with every landing page I build, not add-ons quoted later.",
    items: [
      {
        icon: "target",
        title: "One offer, one action",
        description:
          "A single goal per page and one call to action repeated at the three points where people actually decide.",
      },
      {
        icon: "pen",
        title: "Sales copy, not a brochure",
        description:
          "Offer, proof, objection — in that order. I write it with you, because you already know what people ask on the phone.",
      },
      {
        icon: "message-circle",
        title: "WhatsApp and form up top",
        description:
          "A sticky WhatsApp button on mobile and a three-field form, so nobody has to scroll to the bottom to reach you.",
      },
      {
        icon: "smartphone",
        title: "Built for the thumb",
        description:
          "Most campaign traffic arrives on a phone, so the layout is solved there first and scaled up after.",
      },
      {
        icon: "zap",
        title: "Loads in under two seconds",
        description:
          "Custom code instead of a plugin-heavy template: on paid traffic every tenth of a second costs money.",
      },
      {
        icon: "bar-chart",
        title: "Measurement wired in",
        description:
          "Google Analytics 4, the Meta pixel and submit events configured so you know which ad brought each message.",
      },
    ],
  },
  packages: {
    eyebrow: "// published pricing",
    title: "What a landing page costs",
    subtitle:
      "Landing page pricing is published like everything else on this site. What you see is what you pay.",
    items: [
      {
        name: "Landing Page",
        pricePrefix: "",
        price: "349",
        currency: "USD",
        priceNote: "one-time",
        description:
          "A landing page for small business built entirely to convert. The right call if you sell one service or you are launching a campaign and need to start now.",
        features: [
          "Single high-converting page",
          "Sales copy and one clear call to action",
          "Direct WhatsApp button and short form",
          "Flawless on mobile, fast to load",
          "Base SEO and measurement wired in",
          "Delivered in one week",
        ],
        highlighted: true,
      },
      {
        name: "Landing + lead capture system",
        pricePrefix: "",
        price: "697",
        currency: "USD",
        priceNote: "one-time",
        description:
          "The landing page plus the system that catches and organizes every lead: connected forms, automated follow-up and per-campaign measurement. For when you are about to spend on ads and cannot afford to lose a message.",
        features: [
          "Everything in the package above",
          "Form and WhatsApp wired to your inbox and your tracking sheet",
          "Automatic reply to the lead the moment they write",
          "Follow-up reminder so nobody goes unanswered",
          "Per-campaign measurement: you know which ad brought each message",
          "Thank-you page with a next step and a conversion event",
        ],
        highlighted: false,
      },
    ],
    itemCta: "Request this package",
    note:
      "If you want the full site later, the landing page is not thrown away: it becomes one of its pages and I credit what you already paid. Both packages are one-time; managed ad campaigns, if you want them, are separate from $349 USD a month.",
    cta: "See all pricing",
  },
  fit: {
    eyebrow: "// before you write",
    title: "When a landing page is the right call",
    yesTitle: "It fits if",
    yes: [
      "You are about to spend on ads and need somewhere to send the traffic.",
      "You sell one service and do not need six pages to explain it.",
      "You want to test a new offer before rebuilding the whole site.",
      "You already have a site, but none of its pages is built to convert.",
    ],
    noTitle: "It does not fit if",
    no: [
      "You sell five different services and each has its own buyer: that calls for a page per service.",
      "You want to rank in Google over time with content: a single page ranks for very little.",
      "You need a catalog, filters or product pages.",
    ],
  },
  faq: {
    eyebrow: "// landing page questions",
    titleA: "What people ask before",
    titleHighlight: "ordering a landing page",
    subtitle:
      "The questions that come up on almost every call about sales page design, answered with the real number and timeline.",
    items: [
      {
        question: "What is the difference between a landing page and a website?",
        answer:
          "A landing page has one goal and no exits: it converts traffic that already came from an ad, an email or a QR code. A website has several pages and exists so people find you in Google and understand everything you do. The landing converts; the site attracts and explains.",
      },
      {
        question: "How long does it take?",
        answer:
          "One week once I have the copy and the photos. If you do not have them, I write the copy from a 20-minute call and the timeline stays the same.",
      },
      {
        question: "Can I edit it myself afterwards?",
        answer:
          "Yes. It ships self-manageable: you change text, prices and photos without waiting on me and without touching code.",
      },
      {
        question: "Does it work for Google and Meta ads?",
        answer:
          "That is what it is built for. Measurement is wired in from day one, so you can see which campaign brought each message instead of guessing.",
      },
    ],
  },
  form: {
    eyebrow: "// request a proposal",
    ctaLabel: "Request my landing page",
    titleA: "Tell me what you are promoting and I'll send",
    titleHighlight: "the scope and the date",
    subtitle:
      "Three fields, nothing else. I reply on WhatsApp within 24 hours with the scope, the price and the delivery date for your case.",
    needLabel: "What you need",
    needOptions: [
      "A landing page for an ad campaign",
      "A landing page for a new service",
      "Rebuild a landing page that does not convert",
      "Still comparing options",
    ],
  },
  related: {
    eyebrow: "// where to go next",
    title: "If one page is not your case",
    body:
      "The landing page is the fastest door into the same work. These are the other two.",
    items: [
      {
        label: "Small business website design",
        href: "/en/services/web-development/",
        hint: "The full site, 4 to 12 pages",
      },
      {
        label: "Website pricing",
        href: "/en/pricing/",
        hint: "Every package with its published price",
      },
      {
        label: "Landing page or website: which one",
        href: "/blog/landing-page-vs-sitio-web-cual-necesito/",
        hint: "The full comparison, selling nothing",
      },
    ],
  },
  pageContext: {
    title: "Landing page design for small businesses",
    paragraphs: [
      "Landing page design solves a different problem than a full site: one page, one message, one action. If you need a landing page for ads, sending that traffic to your homepage is the most expensive way to lose it — there are six paths there and none of them leads to buying.",
      "A landing page for small business is built backwards from a brochure site: offer first, then proof, then the objection. Sales page design orders those three pieces so the decision happens without endless scrolling, and the WhatsApp button stays one tap away on every screen.",
      "Landing page pricing is published: $349 USD one-time for the page alone, or $697 USD with the lead capture system wired in. Delivered in a week, measured from day one. Building it yourself in a page builder is a legitimate, cheap option; this is the custom landing page version — no template, no plugins — written by the landing page designer who also answers your messages, and built as a high converting landing page rather than a pretty one.",
    ],
  },
};

const webSeoEn: SubserviceDetail = {
  navLabel: "SEO web design",
  navHint: "The site and the ranking in the same project",
  icon: "search",
  badge: "Part of web development",
  serviceName: "SEO web design",
  audience: "Small businesses that want to show up in Google from launch",
  meta: {
    title: "SEO Web Design for Small Business | ProCode Dev",
    description:
      "SEO web design for small businesses: the site and its Google ranking handled in one project, never as an add-on. Published pricing from $899 USD.",
    keywords:
      "SEO web design, web design with SEO, SEO friendly web design, website design and SEO, search engine optimized website, technical SEO for websites, local SEO website design, Google optimized website",
    heroTitleA: "SEO web design",
    heroHighlight: "for small businesses",
    heroSubtitle: "In Google from day one.",
  },
  intro: {
    title: "Why SEO cannot be an add-on",
    lead:
      "Most of what decides whether your site shows up in Google is set while it is being built: structure, speed, titles and how the pages link to each other.",
    points: [
      { title: "Structure first", text: "A page per search intent, not one «services» page." },
      { title: "Real speed", text: "Custom code: nothing to patch later that a template broke." },
      { title: "Measurable", text: "Search Console and analytics connected at handover." },
    ],
  },
  capabilities: {
    eyebrow: "// what's included",
    title: "What a site built for search carries inside",
    subtitle:
      "Technical SEO ships with every project. This page exists because people search for it by name, not because it is billed separately.",
    items: [
      {
        icon: "route",
        title: "Architecture by intent",
        description:
          "One page for each thing your client searches, linked so Google understands which one is the main answer.",
      },
      {
        icon: "file-text",
        title: "Titles and descriptions of its own",
        description:
          "Every page with its own title, description and target phrase. None inherited from the homepage, none repeated.",
      },
      {
        icon: "zap",
        title: "Speed and Core Web Vitals",
        description:
          "AVIF and WebP images, self-hosted fonts, deferred scripts. Speed is a ranking factor and a conversion factor at once.",
      },
      {
        icon: "database",
        title: "Structured data",
        description:
          "JSON-LD for the business, the services, the FAQ and breadcrumbs — what Google and AI search actually read.",
      },
      {
        icon: "map-pin",
        title: "Local SEO foundation",
        description:
          "Google Business Profile linked, service area declared, and city pages when the business genuinely justifies them.",
      },
      {
        icon: "search",
        title: "Search Console from launch",
        description:
          "Sitemap submitted, indexing verified and the report open so you can see which phrases bring people in.",
      },
    ],
  },
  packages: {
    eyebrow: "// published pricing",
    title: "What a site with SEO included costs",
    subtitle:
      "Same price as web development: technical SEO is not billed separately. Ongoing SEO is, because it is a different job.",
    items: [
      {
        name: "4 to 6 page website",
        pricePrefix: "",
        price: "899",
        currency: "USD",
        priceNote: "one-time",
        description:
          "Your whole business online, with a page per service and the technical SEO solved inside the same project.",
        features: [
          "4 to 6 pages, one per search intent",
          "Own titles, descriptions and structured data",
          "Speed and Core Web Vitals handled",
          "Search Console and analytics connected",
          "Local SEO foundation and Google Business Profile",
        ],
        highlighted: true,
      },
      {
        name: "Ongoing SEO",
        pricePrefix: "from",
        price: "349",
        currency: "USD",
        priceNote: "a month",
        description:
          "The part that really is monthly work: new content, reviews, links and adjustments based on what Search Console shows.",
        features: [
          "New content and pages every month",
          "Google Business Profile and reviews",
          "Rank tracking and adjustments",
          "Reporting on real contacts",
          "No 12-month contracts",
        ],
        highlighted: false,
      },
    ],
    itemCta: "Request this package",
    note:
      "Local SEO takes three to six months to mature. Anyone promising you the first position in a month is selling you smoke.",
    cta: "See all pricing",
  },
  fit: {
    eyebrow: "// before you write",
    title: "When this approach makes sense",
    yesTitle: "It fits if",
    yes: [
      "You want the site to bring searches, not just exist.",
      "You sell several services and each is searched with different words.",
      "Your current site loads slowly or does not show up even for your own name.",
      "You plan to invest in content and want a base that can carry it.",
    ],
    noTitle: "It does not fit if",
    no: [
      "You need clients this week: that is what ads are for, not SEO.",
      "You expect a guaranteed first position: nobody can guarantee it, and whoever does is lying.",
      "You will not touch your Google Business Profile or ask for reviews: local SEO depends on that as much as on the site.",
    ],
  },
  faq: {
    eyebrow: "// web design and SEO questions",
    titleA: "What people ask about",
    titleHighlight: "sites and rankings",
    subtitle:
      "The questions that come up when someone wants website design and SEO handled in one project.",
    items: [
      {
        question: "Is SEO included or billed separately?",
        answer:
          "Technical SEO — structure, speed, titles, structured data, sitemap and indexing — is included in every project at no extra cost. Ongoing SEO, which is new content, reviews and monthly adjustments, is a separate service from $349 USD a month.",
      },
      {
        question: "How long until I show up in Google?",
        answer:
          "Indexing takes days. Ranking near the top for a phrase people actually search takes three to six months and depends on your city and your industry. What is immediate is no longer losing positions to speed or structure problems.",
      },
      {
        question: "I already have a site. Can it be optimized instead of rebuilt?",
        answer:
          "Sometimes. If the technical base holds up, it gets optimized. If it is a heavy template stacked with plugins, patching costs more than rebuilding. The Digital Audit answers exactly that question with your own data.",
      },
      {
        question: "What about ChatGPT and AI search?",
        answer:
          "The same things that make Google understand you make a model understand you: clear structure, structured data and concrete answers in the copy. Every site I ship also carries an llms.txt file and explicit permission for AI crawlers.",
      },
    ],
  },
  form: {
    eyebrow: "// request a proposal",
    ctaLabel: "Request a proposal with SEO",
    titleA: "Tell me who should be finding you and I'll send",
    titleHighlight: "the scope and the price",
    subtitle:
      "Three fields, nothing else. I reply on WhatsApp within 24 hours with the scope, the price and what to expect month by month.",
    needLabel: "What you need",
    needOptions: [
      "A new site with SEO from the start",
      "Optimize the site I already have",
      "Show up in my city, not nationwide",
      "Still comparing options",
    ],
  },
  related: {
    eyebrow: "// where to go next",
    title: "The other two halves of the same job",
    body:
      "A site with technical SEO is the base. Filling it with visits month after month is the other service.",
    items: [
      {
        label: "Small business website design",
        href: "/en/services/web-development/",
        hint: "The full project, 4 to 12 pages",
      },
      {
        label: "Digital marketing for small business",
        href: "/en/services/digital-marketing/",
        hint: "Ongoing local SEO, Google Ads and follow-up",
      },
      {
        label: "Website pricing",
        href: "/en/pricing/",
        hint: "Every package with its published price",
      },
    ],
  },
  pageContext: {
    title: "SEO web design for small businesses",
    paragraphs: [
      "SEO web design is not a separate service: it is building the site knowing it has to compete in Google. Structure, speed, titles and internal linking are decided while the code is written, and redoing that later costs more than doing it right once. That is why web design with SEO is included in the project price here.",
      "People searching for website design and SEO are usually comparing two quotes: one for the site and one for the agency that will optimize it afterwards. Doing both in the same project removes that second bill and, more importantly, keeps the site from launching with problems that cannot be fixed without touching the code.",
      "What SEO friendly web design includes here: a page per search intent, its own titles and descriptions, JSON-LD structured data, light images, Search Console connected and the Google Business Profile linked. It is a genuinely search engine optimized website, with the technical SEO for websites solved before launch rather than after — a Google optimized website from the first day it is live.",
      "What it does not include, because it is a different job on a different clock: monthly content, reviews and links. That local SEO website design work starts at $349 USD a month and takes three to six months to show.",
    ],
  },
};

const maintenanceEn: SubserviceDetail = {
  navLabel: "Website Maintenance",
  navHint: "Updates, backups and support from $79 a month",
  icon: "shield",
  badge: "Recurring service",
  serviceName: "Website maintenance and support",
  audience: "Small businesses with a live site they would rather not maintain",
  meta: {
    title: "Website Maintenance for Small Business | ProCode",
    description:
      "Website maintenance with published pricing from $79 USD a month: updates, backups, security monitoring, content changes and support over WhatsApp.",
    keywords:
      "website maintenance, website maintenance services, website maintenance pricing, website support, website updates, website backups, small business website maintenance, website care plan",
    heroTitleA: "Website maintenance",
    heroHighlight: "and support",
    heroSubtitle: "Your site, always standing.",
  },
  intro: {
    title: "What happens to a site nobody maintains",
    lead:
      "A live site does not sit still: the certificate expires, the form quietly stops reaching your inbox, and nobody finds out until a client mentions it.",
    points: [
      { title: "Someone is watching", text: "Uptime and certificate monitoring, not a client's phone call." },
      { title: "Changes without a quote", text: "Text, photos and prices included in the plan." },
      { title: "Cancel anytime", text: "No 12-month contracts, no penalty." },
    ],
  },
  capabilities: {
    eyebrow: "// what's included",
    title: "What the care plan covers",
    subtitle:
      "The website maintenance I do is preventive: the goal is that you never hear about a problem because it was already handled.",
    items: [
      {
        icon: "repeat",
        title: "Updates and patches",
        description:
          "Dependencies, security certificate and server configuration kept current without you having to ask.",
      },
      {
        icon: "database",
        title: "Automatic backups",
        description:
          "A copy of the site and its content, with restores actually tested. A backup that is never restored is not a backup.",
      },
      {
        icon: "shield",
        title: "Monitoring and security",
        description:
          "Alerts if the site goes down or the certificate is about to expire, plus form checks so your messages keep arriving.",
      },
      {
        icon: "pen",
        title: "Content changes",
        description:
          "Text, photos, prices and new services included in the plan, without quoting every small change separately.",
      },
      {
        icon: "bar-chart",
        title: "Monthly report",
        description:
          "What was done, what broke, how many contacts came in and what is worth adjusting next month.",
      },
      {
        icon: "message-circle",
        title: "Support over WhatsApp",
        description:
          "You message the person who built your site and get an answer within 24 hours. No ticket, no queue.",
      },
    ],
  },
  packages: {
    eyebrow: "// published pricing",
    title: "What website maintenance costs",
    subtitle:
      "Website maintenance pricing is published like everything else. Paid monthly, cancelled whenever you want.",
    items: [
      {
        name: "Maintenance",
        pricePrefix: "from",
        price: "79",
        currency: "USD",
        priceNote: "a month",
        description:
          "For a site that is already live and working: keeping it fast, secure and current without you having to think about it.",
        features: [
          "Updates and security patches",
          "Automatic backups with tested restores",
          "Uptime and certificate monitoring",
          "Content changes included",
          "WhatsApp support within 24 hours",
          "Cancel whenever you want",
        ],
        highlighted: true,
      },
      {
        name: "Maintenance + lead generation",
        pricePrefix: "from",
        price: "349",
        currency: "USD",
        priceNote: "a month",
        description:
          "When you also want the site to bring work in: local SEO, Google Business Profile, ads and follow-up.",
        features: [
          "Everything in the maintenance plan",
          "Local SEO and new content every month",
          "Google Business Profile and reviews",
          "Ad campaigns when they are needed",
          "Reporting on real contacts",
        ],
        highlighted: false,
      },
    ],
    itemCta: "Request this plan",
    note:
      "Hosting and the domain are paid by you directly to the provider — $60 to $120 USD a year — and stay in your name. I never hold ownership of your site.",
    cta: "See all pricing",
  },
  fit: {
    eyebrow: "// before you write",
    title: "Who this plan is for",
    yesTitle: "It fits if",
    yes: [
      "You have a live site and nobody has touched it in months.",
      "You change prices, services or photos several times a year.",
      "You do not want to learn your site is down from a client.",
      "You want one person accountable for the site, the email and the forms.",
    ],
    noTitle: "It does not fit if",
    no: [
      "Your site runs on a closed platform I cannot get into.",
      "What you actually need is a rebuild: maintaining a site that does not work is paying to keep the problem.",
      "You have an in-house team already doing this.",
    ],
  },
  faq: {
    eyebrow: "// maintenance questions",
    titleA: "What people ask before",
    titleHighlight: "starting a plan",
    subtitle:
      "The questions that come up about hosting and website maintenance, with the real numbers.",
    items: [
      {
        question: "Is hosting included?",
        answer:
          "No, and that is deliberate. Hosting and the domain are yours, in your name — $60 to $120 USD a year — so the site is genuinely yours. I configure and manage them inside the plan, but the ownership and the invoice are yours.",
      },
      {
        question: "How many changes can I ask for each month?",
        answer:
          "The normal changes a business has: text, photos, prices, hours, a new service. If you need a whole new page or an integration, that is quoted separately and I tell you before starting.",
      },
      {
        question: "Do you maintain sites you did not build?",
        answer:
          "Yes, if I can get in and the technical base holds up. Before accepting I review the site and tell you honestly whether it is worth maintaining or rebuilding: keeping a broken site alive is paying monthly for the same problem.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes. It is month to month, with no 12-month contract and no penalty. If you cancel, the site is still yours and I hand over every access.",
      },
    ],
  },
  form: {
    eyebrow: "// request a plan",
    ctaLabel: "Request the maintenance plan",
    titleA: "Tell me how your site is doing and I'll say",
    titleHighlight: "what it needs each month",
    subtitle:
      "Three fields, nothing else. I review your site and reply on WhatsApp within 24 hours with what the plan covers in your case.",
    needLabel: "What you need",
    needOptions: [
      "Maintain a site I already have",
      "Maintain a site you built",
      "Rescue an abandoned site",
      "Still comparing options",
    ],
  },
  related: {
    eyebrow: "// where to go next",
    title: "Before maintaining it, it helps to know how it is doing",
    body:
      "If you are not sure whether your site should be maintained or rebuilt, these are the two doors next to this one.",
    items: [
      {
        label: "Digital Audit",
        href: "/en/services/audit/",
        hint: "Nine areas reviewed with your data, $250 USD",
      },
      {
        label: "Small business website design",
        href: "/en/services/web-development/",
        hint: "If rebuilding is cheaper than patching",
      },
      {
        label: "Website pricing",
        href: "/en/pricing/",
        hint: "Every package with its published price",
      },
    ],
  },
  pageContext: {
    title: "Website maintenance and support",
    paragraphs: [
      "Website maintenance is the work nobody talks about until something breaks: the certificate that expired, the form that quietly stopped sending email, the photo of a service you no longer offer. The website maintenance services here are preventive and monthly, with published pricing from $79 USD and no 12-month contracts.",
      "What website support covers: updates and patches, website backups with tested restores, uptime monitoring, form checks, content changes included and a monthly report of what happened. Every one of those website updates is logged, so you always know what was touched and when.",
      "Hosting is deliberately not bundled into the website maintenance pricing: hosting and the domain are contracted by you, in your name, for $60 to $120 USD a year. I configure and manage them, but ownership stays yours. It is small business website maintenance without access hostage-taking — a website care plan you can leave at any time with every key in hand.",
    ],
  },
};

export const subservices: Record<Lang, Record<SubserviceKey, SubserviceDetail>> = {
  es: {
    landingPages: landingPagesEs,
    webSeo: webSeoEs,
    maintenance: maintenanceEs,
  },
  en: {
    landingPages: landingPagesEn,
    webSeo: webSeoEn,
    maintenance: maintenanceEn,
  },
};
