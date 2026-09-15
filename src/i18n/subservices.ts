/*
  ─────────────────────────────────────────────────────────────────────────
  SUBSERVICIOS (septiembre de 2026) — del keyword research de arquitectura
  ─────────────────────────────────────────────────────────────────────────

  El research mostró tres intenciones comerciales con URL propia que hoy
  viven dentro de /servicios/desarrollo-web/ y no pueden rankear desde ahí:

    diseño de landing page      542 búsquedas/mes  → /servicios/landing-pages/
    servicio de SEO             (sep 2026)         → /servicios/seo/
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

import type { Lang } from "./ui";
import type { ServiceCapability, ServicePackageItem } from "./services";

export const SUBSERVICE_KEYS = [
  "landingPages",
  "seo",
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
          "La landing más el sistema que recoge y ordena a cada prospecto: formularios conectados, aviso inmediato y medición por campaña. Para cuando vas a invertir en anuncios y no quieres perder ni un mensaje.",
        features: [
          "Todo lo del paquete anterior",
          "Formulario y WhatsApp conectados a tu correo y a tu hoja de control",
          "Aviso inmediato en tu WhatsApp y tu correo en cuanto alguien escribe",
          "Campos de calificación para que el prospecto llegue con contexto",
          "Medición por campaña: sabes qué anuncio trajo cada mensaje",
          "Página de gracias con siguiente paso y evento de conversión",
        ],
        highlighted: false,
      },
    ],
    itemCta: "Solicitar este paquete",
    note:
      "Si después quieres el sitio completo, la landing no se tira: se convierte en una de sus páginas y descuento lo que ya pagaste. Los dos paquetes son de pago único; las campañas de anuncios, si las quieres gestionadas, van aparte dentro del plan de Marketing Digital, que se cotiza tras la reunión inicial y la auditoría.",
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
};

const seoEs: SubserviceDetail = {
  navLabel: "SEO",
  navHint: "Auditoría, keyword research y trabajo mensual",
  icon: "search",
  badge: "Servicio de SEO",
  serviceName: "Servicio de SEO",
  audience: "Negocios que quieren aparecer en Google por lo que de verdad se busca",
  meta: {
    title: "Servicio de SEO para Negocios | ProCode Dev",
    description:
      "Servicio de SEO para negocios: auditoría inicial, keyword research, SEO técnico, contenido y SEO local, con reporte mensual. Se cotiza tras la reunión inicial.",
    keywords:
      "servicio de SEO, agencia de SEO, posicionamiento web, posicionamiento en Google, consultor SEO, auditoría SEO, keyword research, SEO técnico, SEO local, SEO on page, estrategia de SEO, SEO para negocios, empresa de SEO",
    heroTitleA: "Servicio de SEO",
    heroHighlight: "para negocios",
    heroSubtitle: "Aparecer donde ya te buscan.",
  },
  intro: {
    title: "El SEO es un servicio aparte, no un extra de la página",
    lead:
      "Cuando programo un sitio va con SEO técnico base: estructura, velocidad, títulos y datos estructurados. Eso no es hacer SEO. Hacer SEO es averiguar qué busca tu cliente, pelear esas frases y sostener el trabajo mes a mes — y eso se contrata por separado, con o sin página hecha por mí.",
    points: [
      { title: "Empieza con datos", text: "Auditoría y keyword research antes de tocar una sola palabra del sitio." },
      { title: "Frases con demanda", text: "Se persigue lo que la gente escribe de verdad, no lo que suena bien." },
      { title: "Trabajo sostenido", text: "El posicionamiento se gana en meses y se pierde si se deja de trabajar." },
    ],
  },
  capabilities: {
    eyebrow: "// qué incluye",
    title: "Qué lleva el servicio de SEO",
    subtitle:
      "El orden importa: primero se entiende dónde estás y qué se busca, y solo después se toca el sitio. Un SEO que empieza escribiendo artículos sin haber hecho el keyword research está adivinando.",
    items: [
      {
        icon: "clipboard-check",
        title: "Auditoría SEO inicial",
        description:
          "Dónde estás hoy: indexación, errores técnicos, velocidad, estructura, contenido, perfil de enlaces y qué hace tu competencia en tu ciudad. Sale por escrito, con el orden en el que hay que arreglarlo.",
      },
      {
        icon: "search",
        title: "Keyword research",
        description:
          "Qué escribe tu cliente cuando busca lo que vendes, con volumen, intención y dificultad reales. De ahí sale el mapa de qué frase pelea cada página y qué páginas faltan.",
      },
      {
        icon: "settings",
        title: "SEO técnico",
        description:
          "Indexación, sitemap, canónicas, redirecciones, Core Web Vitals, datos estructurados y todo lo que impide que Google lea bien el sitio. Se trabaja sobre tu sitio actual, esté hecho por mí o no.",
      },
      {
        icon: "file-text",
        title: "SEO on page y contenido",
        description:
          "Títulos, descripciones, encabezados y texto reescritos por intención de búsqueda, más las páginas nuevas que pida el mapa de keywords: por servicio, por ciudad o por duda concreta del cliente.",
      },
      {
        icon: "map-pin",
        title: "SEO local",
        description:
          "Perfil de Empresa en Google optimizado, zona de servicio, categorías, reseñas y páginas por ciudad. Para un negocio de servicio es lo que más rápido mueve el teléfono.",
      },
      {
        icon: "bar-chart",
        title: "Reporte mensual y plan del mes",
        description:
          "Qué posiciones subieron, por qué frases entra la gente, cuántos contactos llegaron del orgánico y qué se va a trabajar el mes siguiente. En lenguaje de negocio, no una captura de Search Console.",
      },
    ],
  },
  packages: {
    eyebrow: "// cómo se cotiza",
    title: "Cuánto cuesta el servicio de SEO",
    subtitle:
      "El SEO no tiene precio de lista porque el trabajo no es el mismo en todos los casos: no cuesta igual un sitio nuevo y limpio que uno con ocho años de contenido duplicado y una migración mal hecha. Primero una reunión inicial para conocer el negocio, después la auditoría, y de ahí sale el alcance y el número.",
    items: [
      {
        name: "Auditoría SEO + keyword research",
        pricePrefix: "",
        price: "",
        quoteLabel: "Cotización a medida",
        currency: "",
        priceNote: "se define tras la reunión inicial",
        description:
          "El punto de partida. Dónde estás, qué te está frenando, qué busca tu cliente y en qué orden conviene atacarlo. Es tuyo aunque no contrates el plan mensual.",
        features: [
          "Auditoría técnica, de contenido y de competencia",
          "Keyword research con volumen, intención y dificultad",
          "Mapa de qué frase pelea cada página",
          "Lista de lo que hay que arreglar, priorizada",
          "Sesión para revisarlo contigo",
        ],
        highlighted: true,
      },
      {
        name: "SEO mensual",
        pricePrefix: "",
        price: "",
        quoteLabel: "Cotización a medida",
        currency: "",
        priceNote: "se define con el resultado de la auditoría",
        description:
          "El trabajo continuo: arreglar lo técnico, escribir lo que falta, trabajar el SEO local y ajustar según lo que muestren los datos cada mes.",
        features: [
          "Correcciones técnicas y de indexación",
          "Contenido y páginas nuevas cada mes",
          "SEO local: Perfil de Empresa en Google y reseñas",
          "Seguimiento de posiciones y ajustes",
          "Reporte mensual y plan del mes siguiente",
        ],
        highlighted: false,
      },
    ],
    itemCta: "Agendar reunión inicial",
    note:
      "El SEO local tarda de tres a seis meses en madurar y hay que sostenerlo: en cuanto se deja de trabajar, las posiciones se devuelven. Cualquiera que te prometa la primera posición en un mes te está vendiendo humo. Si además necesitas anuncios y campañas, eso vive en el plan de Marketing Digital.",
    cta: "Ver todos los precios",
  },
  fit: {
    eyebrow: "// antes de escribirme",
    title: "Cuándo tiene sentido contratar SEO",
    yesTitle: "Encaja contigo si",
    yes: [
      "Ya tienes página y quieres que traiga búsquedas, no solo que exista.",
      "Vendes varios servicios y cada uno se busca con palabras distintas.",
      "Compites en una ciudad concreta y hoy no apareces en el mapa.",
      "Puedes sostener el trabajo varios meses: el SEO no rinde en treinta días.",
    ],
    noTitle: "No encaja si",
    no: [
      "Necesitas clientes esta semana: para eso son los anuncios, no el SEO.",
      "Esperas la primera posición garantizada: nadie puede garantizarla, y quien lo hace miente.",
      "Todavía no tienes sitio o el que tienes no convierte: eso se arregla primero, en desarrollo web.",
      "No vas a tocar el Perfil de Empresa en Google ni a pedir reseñas: el SEO local depende de eso tanto como del sitio.",
    ],
  },
  faq: {
    eyebrow: "// dudas sobre SEO",
    titleA: "Lo que preguntan sobre el",
    titleHighlight: "servicio de SEO",
    subtitle:
      "Las dudas que salen cuando alguien compara agencias de SEO y no sabe qué está comprando.",
    items: [
      {
        question: "¿El SEO no venía incluido con la página web?",
        answer:
          "El SEO técnico base sí: estructura, velocidad, títulos, datos estructurados, sitemap e indexación van dentro de todo proyecto de desarrollo web, sin costo extra. Eso deja el sitio en condiciones de rankear. El servicio de SEO es otra cosa: keyword research, contenido nuevo, SEO local, enlaces y ajustes mes a mes. Uno es cómo está construido el sitio; el otro es el trabajo de pelear posiciones, y se contrata aparte.",
      },
      {
        question: "¿Puedo contratar SEO si mi página la hizo otra persona?",
        answer:
          "Sí, y es el caso más común. El SEO se trabaja sobre el sitio que tengas: WordPress, Wix, Shopify o código a la medida. Si la base técnica está tan mal que sale más caro parchearla que rehacerla, te lo digo en la auditoría con los datos delante, y decides tú.",
      },
      {
        question: "¿Por qué no publicas un precio de SEO?",
        answer:
          "Porque sería inventado. El trabajo que pide un sitio nuevo de cinco páginas y el que pide uno con ocho años de contenido duplicado no se parecen en nada, y cobrar lo mismo por los dos significa que alguien está pagando de más. Por eso el orden es: reunión inicial para conocer el negocio, auditoría para medir el punto de partida, y entonces el número y el plan.",
      },
      {
        question: "¿En cuánto tiempo se ven resultados?",
        answer:
          "Lo técnico y la ficha de Google se mueven en semanas. El orgánico tarda de tres a seis meses en dar resultados que se noten en el teléfono, y depende de la competencia de tu ciudad y de tu giro. Y hay que sostenerlo: el SEO no es una obra que se termina.",
      },
      {
        question: "¿Qué pasa con ChatGPT y los buscadores con IA?",
        answer:
          "Lo mismo que hace que Google te entienda hace que te entienda un modelo: estructura clara, datos estructurados, una ficha de Google al día y respuestas concretas en el texto. También publico un archivo llms.txt, aunque conviene decirlo claro: Google ha declarado que ese archivo no influye en su buscador ni es requisito para sus funciones con IA.",
      },
    ],
  },
  form: {
    eyebrow: "// solicitar propuesta",
    ctaLabel: "Agendar reunión inicial",
    titleA: "Cuéntame qué vendes y dónde, y agendamos",
    titleHighlight: "la reunión inicial",
    subtitle:
      "Tres datos y nada más. Te contesto por WhatsApp en menos de 24 horas para agendar la reunión y explicarte qué revisa la auditoría.",
    needLabel: "Qué necesitas",
    needOptions: [
      "Auditoría SEO de mi sitio actual",
      "Keyword research y estrategia",
      "SEO mensual continuo",
      "Aparecer en mi ciudad, no en todo el país",
      "Todavía estoy comparando opciones",
    ],
  },
  related: {
    eyebrow: "// a dónde seguir",
    title: "Lo que va antes y lo que va después del SEO",
    body:
      "El SEO trabaja sobre un sitio que ya convierte. Si falta el sitio, o si además quieres comprar visibilidad con anuncios, esos son los otros dos servicios.",
    items: [
      {
        label: "Diseño y desarrollo de páginas web",
        href: "/servicios/desarrollo-web/",
        hint: "El sitio a la medida, con SEO técnico incluido",
      },
      {
        label: "Marketing digital para negocios",
        href: "/servicios/marketing-digital/",
        hint: "Campañas, Perfil de Google y reportes mensuales",
      },
      {
        label: "Auditoría Estratégica",
        href: "/servicios/auditoria/",
        hint: "La revisión completa de tu presencia digital",
      },
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
          "Cuando además del mantenimiento quieres que el sitio traiga trabajo: SEO local, Perfil de Empresa en Google, anuncios y reportes mensuales.",
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
        label: "Auditoría Estratégica",
        href: "/servicios/auditoria/",
        hint: "Doce áreas, estrategia priorizada y roadmap 30/60/90",
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
          "The landing page plus the system that catches and organizes every lead: connected forms, instant alerts and per-campaign measurement. For when you are about to spend on ads and cannot afford to lose a message.",
        features: [
          "Everything in the package above",
          "Form and WhatsApp wired to your inbox and your tracking sheet",
          "Automatic reply to the lead the moment they write",
          "Qualifying fields so every lead arrives with context",
          "Per-campaign measurement: you know which ad brought each message",
          "Thank-you page with a next step and a conversion event",
        ],
        highlighted: false,
      },
    ],
    itemCta: "Request this package",
    note:
      "If you want the full site later, the landing page is not thrown away: it becomes one of its pages and I credit what you already paid. Both packages are one-time; managed ad campaigns, if you want them, sit in the Digital Marketing plan, quoted after the first meeting and the audit.",
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
};

const seoEn: SubserviceDetail = {
  navLabel: "SEO",
  navHint: "Audit, keyword research and monthly work",
  icon: "search",
  badge: "SEO service",
  serviceName: "SEO service",
  audience: "Businesses that want to show up in Google for what people actually search",
  meta: {
    title: "SEO Services for Small Businesses | ProCode Dev",
    description:
      "SEO services for small businesses: initial audit, keyword research, technical SEO, content and local SEO, with monthly reporting. Quoted after the first meeting.",
    keywords:
      "seo services, seo agency, small business seo, seo consultant, seo audit, keyword research, technical seo, local seo, on page seo, seo strategy, search engine optimization services, monthly seo",
    heroTitleA: "SEO services",
    heroHighlight: "for small businesses",
    heroSubtitle: "Show up where they already look.",
  },
  intro: {
    title: "SEO is its own service, not an add-on to the website",
    lead:
      "Every site I build ships with baseline technical SEO: structure, speed, titles and structured data. That is not doing SEO. Doing SEO means finding out what your client actually searches, competing for those phrases and sustaining the work month after month — and that is hired separately, whether or not I built the site.",
    points: [
      { title: "Starts with data", text: "Audit and keyword research before a single word on the site is touched." },
      { title: "Phrases with demand", text: "We chase what people actually type, not what sounds good." },
      { title: "Sustained work", text: "Rankings are won over months and lost when the work stops." },
    ],
  },
  capabilities: {
    eyebrow: "// what it includes",
    title: "What the SEO service covers",
    subtitle:
      "The order matters: first we understand where you stand and what gets searched, and only then do we touch the site. An SEO that starts writing articles before the keyword research is guessing.",
    items: [
      {
        icon: "clipboard-check",
        title: "Initial SEO audit",
        description:
          "Where you stand today: indexing, technical errors, speed, structure, content, link profile and what your competitors in your city are doing. Delivered in writing, in the order it should be fixed.",
      },
      {
        icon: "search",
        title: "Keyword research",
        description:
          "What your client types when they look for what you sell, with real volume, intent and difficulty. That is where the map of which phrase each page fights for comes from — and which pages are missing.",
      },
      {
        icon: "settings",
        title: "Technical SEO",
        description:
          "Indexing, sitemap, canonicals, redirects, Core Web Vitals, structured data and everything stopping Google from reading the site properly. Done on your current site, whether I built it or not.",
      },
      {
        icon: "file-text",
        title: "On-page SEO and content",
        description:
          "Titles, descriptions, headings and copy rewritten by search intent, plus the new pages the keyword map calls for: by service, by city or by a specific question your clients ask.",
      },
      {
        icon: "map-pin",
        title: "Local SEO",
        description:
          "Google Business Profile optimized, service area, categories, reviews and pages by city. For a service business it is what moves the phone fastest.",
      },
      {
        icon: "bar-chart",
        title: "Monthly report and next month's plan",
        description:
          "Which rankings moved, which phrases bring people in, how many contacts came from organic and what gets worked on next month. In business language, not a Search Console screenshot.",
      },
    ],
  },
  packages: {
    eyebrow: "// how it is quoted",
    title: "What the SEO service costs",
    subtitle:
      "SEO has no list price because the work is not the same in every case: a clean new site and one carrying eight years of duplicate content and a botched migration are not the same job. First a meeting to understand the business, then the audit, and the scope and the number come out of that.",
    items: [
      {
        name: "SEO audit + keyword research",
        pricePrefix: "",
        price: "",
        quoteLabel: "Custom quote",
        currency: "",
        priceNote: "set after the first meeting",
        description:
          "The starting point. Where you stand, what is holding you back, what your client searches and the order to tackle it in. It is yours even if you never hire the monthly plan.",
        features: [
          "Technical, content and competitor audit",
          "Keyword research with volume, intent and difficulty",
          "A map of which phrase each page fights for",
          "A prioritized list of what to fix",
          "A session to walk through it with you",
        ],
        highlighted: true,
      },
      {
        name: "Monthly SEO",
        pricePrefix: "",
        price: "",
        quoteLabel: "Custom quote",
        currency: "",
        priceNote: "set from the audit findings",
        description:
          "The ongoing work: fixing the technical side, writing what is missing, working local SEO and adjusting to what the data shows each month.",
        features: [
          "Technical and indexing fixes",
          "New content and pages every month",
          "Local SEO: Google Business Profile and reviews",
          "Rank tracking and adjustments",
          "Monthly report and next month's plan",
        ],
        highlighted: false,
      },
    ],
    itemCta: "Book the first meeting",
    note:
      "Local SEO takes three to six months to mature and has to be sustained: the moment the work stops, the rankings slide back. Anyone promising you the top spot in a month is selling smoke. If you also need ads and campaigns, that lives in the Digital Marketing plan.",
    cta: "See full pricing",
  },
  fit: {
    eyebrow: "// before you write",
    title: "When hiring SEO makes sense",
    yesTitle: "It fits you if",
    yes: [
      "You already have a site and want it to bring searches, not just exist.",
      "You sell several services and each one is searched with different words.",
      "You compete in a specific city and today you are not on the map.",
      "You can sustain the work for months: SEO does not pay off in thirty days.",
    ],
    noTitle: "It does not fit if",
    no: [
      "You need clients this week: that is what ads are for, not SEO.",
      "You expect a guaranteed top spot: nobody can guarantee it, and anyone who does is lying.",
      "You have no site yet, or the one you have does not convert: that gets fixed first, in web development.",
      "You will not touch your Google Business Profile or ask for reviews: local SEO depends on that as much as on the site.",
    ],
  },
  faq: {
    eyebrow: "// SEO questions",
    titleA: "What people ask about the",
    titleHighlight: "SEO service",
    subtitle:
      "The questions that come up when someone is comparing SEO agencies and is not sure what they are buying.",
    items: [
      {
        question: "Wasn't SEO included with the website?",
        answer:
          "Baseline technical SEO is: structure, speed, titles, structured data, sitemap and indexing ship with every web development project at no extra cost. That leaves the site in a condition to rank. The SEO service is something else: keyword research, new content, local SEO, links and monthly adjustments. One is how the site is built; the other is the work of competing for rankings, and it is hired separately.",
      },
      {
        question: "Can I hire SEO if someone else built my site?",
        answer:
          "Yes, and that is the most common case. SEO is done on whatever site you have: WordPress, Wix, Shopify or custom code. If the technical base is so bad that patching it costs more than rebuilding, I tell you in the audit with the data in front of you, and you decide.",
      },
      {
        question: "Why don't you publish an SEO price?",
        answer:
          "Because it would be made up. The work a clean five-page site needs and the work a site with eight years of duplicate content needs are nothing alike, and charging the same for both means somebody is overpaying. That is why the order is: a first meeting to understand the business, an audit to measure the starting point, and then the number and the plan.",
      },
      {
        question: "How long before I see results?",
        answer:
          "Technical fixes and the Google profile move within weeks. Organic takes three to six months to show up in your phone ringing, and it depends on the competition in your city and your trade. And it has to be sustained: SEO is not a build that gets finished.",
      },
      {
        question: "What about ChatGPT and AI search?",
        answer:
          "The same things that make Google understand you make a model understand you: clear structure, structured data, a current Google profile and concrete answers in the copy. I also publish an llms.txt file, though it is worth saying plainly: Google has stated that this file does not influence its search results and is not required for its AI features.",
      },
    ],
  },
  form: {
    eyebrow: "// request a proposal",
    ctaLabel: "Book the first meeting",
    titleA: "Tell me what you sell and where, and we book",
    titleHighlight: "the first meeting",
    subtitle:
      "Three fields, nothing else. I reply on WhatsApp in under 24 hours to book the meeting and explain what the audit covers.",
    needLabel: "What you need",
    needOptions: [
      "An SEO audit of my current site",
      "Keyword research and strategy",
      "Ongoing monthly SEO",
      "Ranking in my city, not nationwide",
      "Still comparing options",
    ],
  },
  related: {
    eyebrow: "// where to go next",
    title: "What comes before and after SEO",
    body:
      "SEO works on a site that already converts. If the site is missing, or you also want to buy visibility with ads, those are the other two services.",
    items: [
      {
        label: "Website design and development",
        href: "/en/services/web-development/",
        hint: "The custom site, with technical SEO included",
      },
      {
        label: "Small business digital marketing",
        href: "/en/services/digital-marketing/",
        hint: "Campaigns, Google profile and monthly reporting",
      },
      {
        label: "Strategic Audit",
        href: "/en/services/audit/",
        hint: "The full review of your digital presence",
      },
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
          "When you also want the site to bring work in: local SEO, Google Business Profile, ads and monthly reporting.",
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
        label: "Strategic Audit",
        href: "/en/services/audit/",
        hint: "Twelve areas, a prioritized strategy and a 30/60/90 roadmap",
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
};

export const subservices: Record<Lang, Record<SubserviceKey, SubserviceDetail>> = {
  es: {
    landingPages: landingPagesEs,
    seo: seoEs,
    maintenance: maintenanceEs,
  },
  en: {
    landingPages: landingPagesEn,
    seo: seoEn,
    maintenance: maintenanceEn,
  },
};
