/*
  ─────────────────────────────────────────────────────────────────────────
  PÁGINAS DE MERCADO (7 de septiembre de 2026)
  ─────────────────────────────────────────────────────────────────────────

  Por qué existen. Hasta ahora el sitio no llevaba una sola señal
  geográfica, por decisión consciente: Cristian no había fijado los mercados
  que prospecta y las páginas por ciudad inventadas hacen más daño que bien.

  La auditoría de septiembre cambió el cálculo. Los SERP que capturan al
  dueño de negocio hispano en Estados Unidos —el cliente de ProCode— los
  ganan agencias que son igual de remotas y que rankean con la geografía en
  el título y en la URL: disenowebusa.com, agenciawebusa.com,
  agenciadigitalenusa.com, datosfera.us («New York, New Jersey y Florida»),
  cvsmotion.com (/servicios-web-nj/), techadvisor.marketing («Páginas Web
  para Contratistas — Houston, TX»). Sin ese eje, ProCode compite en
  «desarrollo web para negocios» contra agencias españolas con diez años de
  dominio, por tráfico que además no le sirve.

  Mercados elegidos por Cristian: Texas, Florida y California.

  REGLAS QUE NO SE PUEDEN ROMPER AQUÍ:

  1. Nada de presencia local falsa. No hay oficina, ni dirección, ni
     teléfono local, ni «somos de Houston». El trabajo es remoto desde
     México y la página lo dice. Inventarlo sería mentir y además es la
     forma más rápida de que Google trate la página como spam.
  2. Contenido genuinamente distinto por estado. Si las tres páginas son la
     misma con el nombre cambiado, son páginas puerta y se penalizan. Cada
     una habla de los giros que de verdad dominan ahí, de su estacionalidad
     y de su huso horario respecto a México.
  3. Cero cifras inventadas. Aquí solo hay hechos de dominio público
     (temporada de huracanes, husos horarios, qué estado licencia
     contratistas) y nada que parezca un dato de mercado con decimales.
  4. Nada de asesoría legal. Las licencias se mencionan como argumento de
     confianza en la web, no como orientación regulatoria.
*/

import type { PageContextCopy, SegmentKey } from "./ui";

export const MARKET_KEYS = ["texas", "florida", "california"] as const;
export type MarketKey = (typeof MARKET_KEYS)[number];

export interface MarketBlockItem {
  icon: string;
  title: string;
  description: string;
}

export interface MarketIndustry extends MarketBlockItem {
  /** Página de giro a la que enlaza esta tarjeta. */
  segment: SegmentKey;
}

export interface MarketBlock {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface Market {
  key: MarketKey;
  name: string;
  icon: string;
  navLabel: string;
  navHint: string;
  /** Ciudades donde se concentra el trabajo; cada una con su propia línea. */
  cities: readonly { name: string; note: string }[];
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
  industries: MarketBlock & { items: readonly MarketIndustry[] };
  context: MarketBlock & { items: readonly MarketBlockItem[] };
  /** Bloque de contexto al pie: el texto largo que salió del hero. */
  pageContext: PageContextCopy;
  remote: MarketBlock & { items: readonly MarketBlockItem[] };
  faq: {
    eyebrow: string;
    titleA: string;
    titleHighlight: string;
    subtitle: string;
    items: readonly { question: string; answer: string }[];
  };
}

export interface MarketsHub {
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
  citiesTitle: string;
  citiesSubtitle: string;
  listEyebrow: string;
  listTitle: string;
  listSubtitle: string;
  listCta: string;
  industriesCta: string;
  citiesLabel: string;
  how: MarketBlock & { items: readonly MarketBlockItem[] };
  /** Bloque de contexto al pie: el texto largo que salió del hero. */
  pageContext: PageContextCopy;
  faq: {
    eyebrow: string;
    titleA: string;
    titleHighlight: string;
    subtitle: string;
    items: readonly { question: string; answer: string }[];
  };
}

// ═══════════════════════════════════════════════════════════════════════
// TEXAS · /diseno-web-texas/
// Frase principal: "diseño de páginas web en Texas".
// Lo que hace única a esta página: es el estado de los oficios. Houston y
// Dallas son mercados de construcción, y ahí el cliente hispano no es una
// minoría del mercado: es el mercado.
// ═══════════════════════════════════════════════════════════════════════

const texasEs: Market = {
  pageContext: {
    title: "Diseño de páginas web en Texas",
    paragraphs: [
      "Houston, Dallas, San Antonio y Austin. Hago diseño de páginas web en Texas para el contratista, la clínica, el despacho o la inmobiliaria que atiende a clientes hispanos y anglos a la vez: un solo sitio bilingüe, programado a la medida, sin plantillas.",
      "Trabajo en remoto y en tu mismo horario, con precios publicados en dólares desde $349 USD. Eso incluye diseño web Houston, diseño de páginas web Dallas y páginas web San Antonio, además de páginas web para contratistas en Texas, que es el giro que más me llega del estado.",
      "Si buscabas una agencia de diseño web en Texas o un desarrollador web en español en Texas, esto es lo que hay: diseño web en español Texas hecho por la misma persona que contesta el WhatsApp, más marketing digital en Texas cuando el sitio necesita visitas. No tengo oficina en el estado, y por eso el precio es el que es.",
    ],
  },
  key: "texas",
  name: "Texas",
  icon: "building",
  navLabel: "Texas",
  navHint: "Houston, Dallas, San Antonio y Austin.",
  cities: [
    { name: "Houston", note: "El diseño web Houston que más me piden es el de contratista: remodelación, techos, plomería y climatización peleando la misma búsqueda de servicio más ciudad." },
    { name: "Dallas–Fort Worth", note: "En diseño de páginas web Dallas el peso está en servicios profesionales, inmobiliaria y contabilidad, con más cliente corporativo que en el resto del estado." },
    { name: "San Antonio", note: "Las páginas web San Antonio atienden a una clientela mayoritariamente hispana: ahí la versión en español no es la segunda, es la principal." },
    { name: "Austin", note: "Consultoría, marca personal y despachos que le venden a empresa. Menos volumen y más ticket, con el inglés por delante." },
  ],
  meta: {
    title: "Diseño de Páginas Web en Texas | ProCode Dev",
    description:
      "Diseño de páginas web en Texas para negocios hispanos: Houston, Dallas, San Antonio y Austin. Sitios bilingües desde $349 USD, en remoto y en tu idioma.",
    keywords:
      "diseño de páginas web en Texas, diseño web Houston, páginas web para negocios en Texas, agencia de diseño web en Texas, diseño web en español Texas, páginas web para contratistas en Texas, marketing digital en Texas, diseño de páginas web Dallas, páginas web San Antonio, desarrollador web en español en Texas",
    heroTitleA: "Diseño de páginas web en Texas",
    heroHighlight: "para negocios que trabajan en español",
    heroSubtitle: "Bilingüe, a la medida, en remoto.",
  },
  intro: {
    title: "Por qué en Texas hace falta otra clase de sitio",
    lead:
      "En Houston y San Antonio el cliente hispano no es un segmento del mercado: es el mercado.",
    points: [
      { title: "Bilingüe de origen", text: "Dos idiomas en URLs separadas, sin traductor." },
      { title: "Una página por servicio", text: "Fotos de obra y cotización en dos toques." },
      { title: "En tu mismo horario", text: "En remoto, con el huso horario de Texas." },
    ],
  },
  industries: {
    eyebrow: "// giros con más peso en el estado",
    title: "Los negocios de Texas con los que más trabajo",
    subtitle:
      "Cada giro tiene su propia página con lo que cambia en su caso. Estos son los cuatro que más se repiten cuando hago páginas web para negocios en Texas.",
    items: [
      {
        icon: "building",
        segment: "contractors",
        title: "Contratistas y construcción",
        description:
          "Remodelación, techos, plomería, electricidad y climatización. Las páginas web para contratistas en Texas son el giro más grande del estado y el que más depende de que el presupuesto se pida el mismo día en que el cliente busca.",
      },
      {
        icon: "receipt",
        segment: "accounting",
        title: "Contabilidad e impuestos",
        description:
          "Preparadores, CPAs y bookkeepers con clientela hispana. Un sitio bilingüe con captación ordenada les cambia la temporada entera.",
      },
      {
        icon: "map-pin",
        segment: "realEstate",
        title: "Inmobiliarias y asesores",
        description:
          "Dallas–Fort Worth y Austin mueven volumen todo el año. Catálogo de propiedades y captación de prospectos en los dos idiomas, con el marketing digital en Texas apoyado en búsquedas por zona y por tipo de propiedad.",
      },
      {
        icon: "briefcase",
        segment: "professional",
        title: "Servicios profesionales",
        description:
          "Abogados, agentes de seguros y consultores. Aquí el sitio no vende un producto: vende que se puede confiar en quien contesta.",
      },
    ],
  },
  context: {
    eyebrow: "// lo que cambia en Texas",
    title: "Tres cosas que tengo en cuenta en un proyecto texano",
    subtitle:
      "No es la misma página para Texas que para California. Estas son las diferencias que sí afectan al diseño y al contenido, y por las que trabajo como agencia de diseño web en Texas y no con una plantilla igual para todos.",
    items: [
      {
        icon: "globe",
        title: "El bilingüe no es un extra, es la base",
        description:
          "En Houston y San Antonio el mismo negocio atiende a un cliente en inglés y al siguiente en español. Por eso las dos versiones van en URLs separadas y con hreflang: cada cliente encuentra la suya en Google, no una traducción automática.",
      },
      {
        icon: "shield",
        title: "La licencia y el seguro venden",
        description:
          "Texas no licencia al contratista general a nivel estatal, pero sí a electricistas, plomeros y climatización. Poner el número de licencia y la póliza a la vista, donde el cliente los busca, es de las cosas que más suben la conversión en este mercado.",
      },
      {
        icon: "smartphone",
        title: "Casi todo entra por el teléfono",
        description:
          "El cliente de un oficio busca desde la obra, el coche o la sala de espera. El sitio se diseña primero para móvil, con el botón de llamada y el de WhatsApp fijos, y carga en menos de dos segundos con datos móviles.",
      },
    ],
  },
  remote: {
    eyebrow: "// cómo funciona a distancia",
    title: "Trabajo desde México, en tu horario",
    subtitle:
      "El diseño web en español Texas no necesita que estemos en la misma ciudad. Así es como se lleva un proyecto con un negocio del estado.",
    items: [
      {
        icon: "calendar",
        title: "Mismo huso horario que tú",
        description:
          "Texas está en horario central, igual que el centro de México durante casi todo el año. Cuando escribes a media mañana, es media mañana aquí: no hay que esperar al día siguiente para una respuesta.",
      },
      {
        icon: "message-circle",
        title: "WhatsApp, no un portal de tickets",
        description:
          "El seguimiento va por WhatsApp y por llamada, como trabajas tú. Respondo cualquier mensaje en menos de 24 horas y normalmente mucho antes.",
      },
      {
        icon: "lock",
        title: "Todo queda a tu nombre",
        description:
          "Dominio, hosting, correos y cuentas de anuncios se registran a nombre de tu negocio y con tus datos. Si un día dejamos de trabajar juntos, te llevas todo sin pedirme permiso.",
      },
    ],
  },
  faq: {
    eyebrow: "// dudas de negocios en Texas",
    titleA: "Lo que preguntan desde",
    titleHighlight: "Texas",
    subtitle:
      "Las dudas que salen cuando un negocio de Houston o Dallas contrata a alguien que no está en la misma ciudad.",
    items: [
      {
        question: "¿Trabajas con negocios de Texas estando en México?",
        answer:
          "Sí, y es como trabajo con la mayoría de mis clientes: soy un desarrollador web en español en Texas sin oficina en Texas. Todo el proceso es remoto —llamada inicial, contenido por WhatsApp o correo, revisiones por enlace y publicación— y el estado comparte huso horario con el centro de México casi todo el año, así que coincidimos en el mismo horario laboral sin esfuerzo.",
      },
      {
        question: "¿Puedes hacer el sitio en inglés y en español?",
        answer:
          "Sí, y es lo que recomiendo para casi cualquier negocio de Houston o San Antonio. No es un traductor automático encima: son dos versiones reales con URLs separadas y hreflang, escritas cada una en su idioma. Tu cliente hispano encuentra la versión en español en Google y el anglo la versión en inglés.",
      },
      {
        question: "¿Cómo se paga desde Estados Unidos?",
        answer:
          "En dólares, por transferencia o por enlace de pago, con factura por cada pago. Los precios publicados son en USD y son los que aplican: landing $349, sitio de 4 a 6 páginas $899 y desde $1,499 el de 8 a 12 páginas.",
      },
      {
        question: "¿Sabes cómo busca un cliente en Houston o Dallas?",
        answer:
          "Busca por servicio más ciudad, casi siempre desde el teléfono, y compara las tres primeras fichas del mapa antes de llamar. Por eso el trabajo no termina en el sitio: incluye el Perfil de Empresa en Google, las reseñas y las páginas por servicio y por zona, que es lo que decide en qué posición apareces.",
      },
      {
        question: "¿Tienes clientes en Texas ahora mismo?",
        answer:
          "Mi portafolio está publicado y lo puedes abrir: hay proyectos de construcción, salud, servicios y contabilidad, algunos en México y otros de negocios que atienden a clientela hispana en Estados Unidos. No voy a inventarte una lista de clientes texanos que no tengo; prefiero que juzgues el trabajo por los sitios que sí puedes visitar.",
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════
// FLORIDA · /diseno-web-florida/
// Frase principal: "diseño de páginas web en Florida".
// Lo que la hace única: la temporada de huracanes marca el calendario
// comercial de medio estado, y Miami es un mercado donde el español no es
// la traducción — es el idioma principal del negocio.
// ═══════════════════════════════════════════════════════════════════════

const floridaEs: Market = {
  pageContext: {
    title: "Diseño de páginas web en Florida",
    paragraphs: [
      "Miami, Orlando, Tampa y Jacksonville. Hago diseño de páginas web en Florida para el negocio de servicios cuya clientela habla español como primer idioma, no como traducción: el sitio se escribe en español y se traduce al inglés, no al revés.",
      "Precios publicados desde $349 USD y todo el trabajo en remoto. Cubre diseño web Miami, diseño de páginas web Orlando y páginas web Tampa, con páginas web para contratistas en Florida — techos y remodelación sobre todo — como el caso más frecuente.",
      "Si buscabas una agencia de diseño web en Florida o un desarrollador web en español en Florida, aquí el diseño web en español Miami es el modo por defecto. El marketing digital en Florida se planea alrededor de la temporada, porque en este estado la temporada decide el año.",
    ],
  },
  key: "florida",
  name: "Florida",
  icon: "map-pin",
  navLabel: "Florida",
  navHint: "Miami, Orlando, Tampa y Jacksonville.",
  cities: [
    { name: "Miami y Miami-Dade", note: "El diseño web Miami se mueve en inmobiliaria, servicios profesionales y salud, y casi todo se decide en español: el diseño web en español Miami es la versión principal, no la traducción." },
    { name: "Orlando", note: "El diseño de páginas web Orlando vive de servicios al hogar, turismo y negocios familiares en expansión, con mucha búsqueda estacional." },
    { name: "Tampa", note: "Las páginas web Tampa que más pido son de construcción, restauración y oficios con demanda concentrada en temporada." },
    { name: "Jacksonville", note: "Contratistas y servicios profesionales con clientela mixta, donde el inglés y el español pesan casi lo mismo." },
  ],
  meta: {
    title: "Diseño de Páginas Web en Florida | ProCode Dev",
    description:
      "Diseño de páginas web en Florida para negocios hispanos: Miami, Orlando, Tampa y Jacksonville. Sitios bilingües desde $349 USD, en remoto y en español.",
    keywords:
      "diseño de páginas web en Florida, diseño web Miami, páginas web para negocios en Florida, agencia de diseño web en Florida, diseño web en español Miami, páginas web para contratistas en Florida, marketing digital en Florida, diseño de páginas web Orlando, páginas web Tampa, desarrollador web en español en Florida",
    heroTitleA: "Diseño de páginas web en Florida",
    heroHighlight: "para negocios que venden en español",
    heroSubtitle: "En español, sin traducciones.",
  },
  intro: {
    title: "En Florida el español no es la segunda versión",
    lead:
      "En Miami-Dade el negocio que atiende en español no sirve a una minoría: sirve a su mercado principal.",
    points: [
      { title: "Español primero", text: "Con URL propia, no un traductor encima." },
      { title: "Listo para la temporada", text: "Aguanta el pico de junio a noviembre." },
      { title: "Sin oficina en el estado", text: "En remoto, y eso se ve en el precio." },
    ],
  },
  industries: {
    eyebrow: "// giros con más peso en el estado",
    title: "Los negocios de Florida con los que más trabajo",
    subtitle:
      "Cada giro tiene su propia página con lo que cambia en su caso. Estos son los cuatro que más se repiten cuando hago páginas web para negocios en Florida.",
    items: [
      {
        icon: "map-pin",
        segment: "realEstate",
        title: "Inmobiliarias y asesores",
        description:
          "Miami mueve compradores nacionales e internacionales todo el año. Catálogo de propiedades, captación de prospectos y una versión en español que no parezca traducida; es donde el marketing digital en Florida da resultados más rápido.",
      },
      {
        icon: "building",
        segment: "contractors",
        title: "Techos, restauración y oficios",
        description:
          "El giro que vive de la temporada. Las páginas web para contratistas en Florida necesitan formulario de emergencia, galería de trabajos y zona de cobertura clara, listos antes de que empiece junio.",
      },
      {
        icon: "briefcase",
        segment: "professional",
        title: "Servicios profesionales",
        description:
          "Abogados de inmigración y familia, agentes de seguros y consultores. Un sector donde la confianza se gana o se pierde en la primera pantalla.",
      },
      {
        icon: "calendar",
        segment: "health",
        title: "Salud y bienestar",
        description:
          "Clínicas, consultorios y terapeutas con agenda en línea. La cita se reserva desde el teléfono o no se reserva.",
      },
    ],
  },
  context: {
    eyebrow: "// lo que cambia en Florida",
    title: "Tres cosas que tengo en cuenta en un proyecto floridano",
    subtitle:
      "El sitio de un negocio de Miami no se parece al de uno de Dallas. Estas son las diferencias que afectan de verdad a la estructura y al contenido, y la razón por la que una agencia de diseño web en Florida no puede usar la misma plantilla que en otro estado.",
    items: [
      {
        icon: "globe",
        title: "El español va primero, no después",
        description:
          "En el sur de Florida la versión en español suele ser la que más tráfico recibe. Se escribe primero en español, con su propia URL y su propio contenido, y el inglés es la segunda versión real, no un añadido.",
      },
      {
        icon: "calendar",
        title: "El sitio tiene que aguantar la temporada",
        description:
          "De junio a noviembre la demanda de techos, restauración y poda se multiplica en cuestión de días. La página se prepara antes: formulario de emergencia, disponibilidad visible y seguimiento automático para no perder mensajes en el pico.",
      },
      {
        icon: "shield",
        title: "La licencia estatal es argumento de venta",
        description:
          "Florida sí licencia al contratista a nivel estatal, y el cliente lo sabe y lo pregunta. Poner la licencia, el seguro y la zona de cobertura donde se ven ahorra media conversación y filtra al que solo tantea precios.",
      },
    ],
  },
  remote: {
    eyebrow: "// cómo funciona a distancia",
    title: "Trabajo desde México, con una hora de diferencia",
    subtitle:
      "El proyecto no necesita que estemos en la misma ciudad. Así se lleva con un negocio de Florida.",
    items: [
      {
        icon: "calendar",
        title: "Una hora, no un océano",
        description:
          "Florida está en horario del este: una hora por delante del centro de México. En la práctica coincidimos toda la jornada, y las llamadas se agendan por la mañana de Florida sin que ninguno madrugue.",
      },
      {
        icon: "message-circle",
        title: "En español, con quien hace el trabajo",
        description:
          "No hay ejecutivo de cuenta ni equipo rotativo al que explicarle el negocio otra vez. El que contesta el WhatsApp es el que programa el sitio y el que revisa las campañas.",
      },
      {
        icon: "lock",
        title: "Todo a nombre de tu negocio",
        description:
          "Dominio, hosting, correos, Perfil de Empresa en Google y cuentas de anuncios quedan registrados a tu nombre desde el primer día. Nada queda atado a mí.",
      },
    ],
  },
  faq: {
    eyebrow: "// dudas de negocios en Florida",
    titleA: "Lo que preguntan desde",
    titleHighlight: "Florida",
    subtitle:
      "Las dudas que salen cuando un negocio de Miami, Orlando o Tampa contrata a alguien que trabaja en remoto.",
    items: [
      {
        question: "¿Puedes hacer el sitio principalmente en español?",
        answer:
          "Sí, y en el sur de Florida suele ser lo correcto. El español se escribe como idioma principal, con su propia URL, sus propios textos y su propio SEO, y el inglés queda como segunda versión real. Lo que no hago es poner un traductor automático encima: se nota en la primera línea y resta más de lo que suma.",
      },
      {
        question: "Entramos en temporada de huracanes. ¿Da tiempo?",
        answer:
          "Depende de cuándo empecemos. Una landing page enfocada a un servicio de emergencia sale en dos semanas; un sitio de 4 a 6 páginas, entre tres y cuatro. Si vienes con el tiempo justo, lo honesto es lanzar primero la landing y el Perfil de Empresa en Google, y construir el sitio completo mientras ya estás captando.",
      },
      {
        question: "¿Cómo se paga desde Florida?",
        answer:
          "En dólares, por transferencia o enlace de pago, con factura por cada pago. Los precios publicados en el sitio son los que aplican, sin cargo por distancia ni por cambio de moneda.",
      },
      {
        question: "¿Trabajas con negocios de Miami estando en México?",
        answer:
          "Sí: soy un desarrollador web en español en Florida sin oficina en Florida. Todo el proceso es remoto y en español —llamada inicial, contenido por WhatsApp, revisiones por enlace y publicación— y el estado está solo una hora por delante del centro de México, así que coincidimos durante toda la jornada laboral.",
      },
      {
        question: "¿Y el Perfil de Empresa en Google si atiendo varios condados?",
        answer:
          "Se configura la zona de cobertura por condado en vez de una dirección de mostrador, que es lo correcto cuando vas al domicilio del cliente. A eso se le suman páginas propias por servicio y por zona en el sitio, que es lo que sostiene el posicionamiento fuera del radio inmediato de tu ficha.",
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════
// CALIFORNIA · /diseno-web-california/
// Frase principal: "diseño de páginas web en California".
// Lo que la hace única: es el mercado más caro de operar y el más
// competido, así que aquí el argumento no es el precio bajo sino el margen:
// una agencia local cobra por estructura, no por trabajo.
// ═══════════════════════════════════════════════════════════════════════

const californiaEs: Market = {
  pageContext: {
    title: "Diseño de páginas web en California",
    paragraphs: [
      "Los Ángeles, San Diego, Inland Empire y el Área de la Bahía. El mismo sitio bilingüe programado a la medida y el mismo sistema de captación, por una fracción de lo que cobra una agencia con oficina en el estado. Diseño de páginas web en California con precios publicados desde $349 USD.",
      "Incluye diseño web Los Ángeles, diseño de páginas web San Diego y páginas web Inland Empire, más páginas web para contratistas en California, donde la licencia y la zona de servicio pesan tanto como el portafolio.",
      "Como agencia de diseño web en California trabajo en remoto: no pago renta aquí y ese ahorro va al precio, no al margen. Diseño web en español California y marketing digital en California con un desarrollador web en español en California que contesta el mismo día.",
    ],
  },
  key: "california",
  name: "California",
  icon: "briefcase",
  navLabel: "California",
  navHint: "Los Ángeles, San Diego e Inland Empire.",
  cities: [
    { name: "Los Ángeles", note: "El diseño web Los Ángeles compite en el mercado hispano más grande del país y también en el más caro: aquí el clic pagado cuesta lo que en otros estados cuestan tres." },
    { name: "San Diego", note: "El diseño de páginas web San Diego atiende servicios al hogar, salud y negocios transfronterizos, con mucho cliente que vive en los dos idiomas." },
    { name: "Inland Empire", note: "Las páginas web Inland Empire son sobre todo de construcción, logística y oficios en crecimiento constante, con menos competencia que la costa." },
    { name: "Área de la Bahía", note: "Servicios profesionales y consultoría de ticket alto, donde el sitio compite por credibilidad y no por precio." },
  ],
  meta: {
    title: "Diseño de Páginas Web en California | ProCode Dev",
    description:
      "Diseño de páginas web en California para negocios hispanos: Los Ángeles, San Diego e Inland Empire. Sitios bilingües desde $349 USD, en remoto y en español.",
    keywords:
      "diseño de páginas web en California, diseño web Los Ángeles, páginas web para negocios en California, agencia de diseño web en California, diseño web en español California, páginas web para contratistas en California, marketing digital en California, diseño de páginas web San Diego, páginas web Inland Empire, desarrollador web en español en California",
    heroTitleA: "Diseño de páginas web en California",
    heroHighlight: "sin pagar precio de agencia local",
    heroSubtitle: "Sin el costo de California.",
  },
  intro: {
    title: "California: el mercado más caro de anunciarse y de contratar",
    lead:
      "Aquí todo cuesta más: el clic, la renta y la agencia. La salida no es gastar más, es no pagar estructura.",
    points: [
      { title: "Sin costo de oficina", text: "Precios publicados, los mismos para todos." },
      { title: "El español como ventaja", text: "Donde la empresa grande usa un plugin." },
      { title: "Primero lo orgánico", text: "Ficha y reseñas antes que los anuncios." },
    ],
  },
  industries: {
    eyebrow: "// giros con más peso en el estado",
    title: "Los negocios de California con los que más trabajo",
    subtitle:
      "Cada giro tiene su propia página con lo que cambia en su caso. Estos son los cuatro que más se repiten cuando hago páginas web para negocios en California.",
    items: [
      {
        icon: "building",
        segment: "contractors",
        title: "Contratistas y servicios al hogar",
        description:
          "Remodelación, jardinería, plomería, solar y limpieza. Un sector enorme donde la ficha de Google decide la llamada, y donde las páginas web para contratistas en California compiten contra mucha competencia pagada.",
      },
      {
        icon: "calendar",
        segment: "health",
        title: "Salud y bienestar",
        description:
          "Consultorios, clínicas dentales, nutrición y terapia. Agenda en línea, recordatorios y una versión en español que el paciente entienda a la primera; el marketing digital en California empieza aquí por las reseñas.",
      },
      {
        icon: "briefcase",
        segment: "professional",
        title: "Servicios profesionales",
        description:
          "Abogados, seguros y consultoría de ticket alto. Aquí el sitio compite en credibilidad, no en precio.",
      },
      {
        icon: "receipt",
        segment: "accounting",
        title: "Contabilidad e impuestos",
        description:
          "Despachos con clientela hispana y temporada muy marcada. Captación ordenada antes de enero, no en marzo.",
      },
    ],
  },
  context: {
    eyebrow: "// lo que cambia en California",
    title: "Tres cosas que tengo en cuenta en un proyecto californiano",
    subtitle:
      "Es el mercado más competido de los tres, y eso cambia dónde conviene poner el esfuerzo. Es también por lo que una agencia de diseño web en California cobra lo que cobra, y por lo que trabajar en remoto cambia el número.",
    items: [
      {
        icon: "target",
        title: "El clic pagado es caro: primero lo orgánico",
        description:
          "En California encender anuncios sin haber ordenado la ficha de Google, las reseñas y las páginas por servicio es quemar presupuesto. El orden que recomiendo aquí es al revés que en otros mercados: primero visibilidad orgánica, después campañas.",
      },
      {
        icon: "shield",
        title: "El número de licencia CSLB es lo primero que buscan",
        description:
          "California licencia al contratista y el cliente está acostumbrado a verificarlo. Poner el número de licencia visible en el sitio, y no escondido en el pie, es de los cambios más baratos que más confianza generan en este estado.",
      },
      {
        icon: "globe",
        title: "El español bien escrito es tu ventaja competitiva",
        description:
          "Las empresas grandes traducen con plugin. Una versión en español real, con URL propia y contenido escrito para ese cliente, te deja competir por búsquedas que la competencia grande está desatendiendo.",
      },
    ],
  },
  remote: {
    eyebrow: "// cómo funciona a distancia",
    title: "Trabajo desde México, con dos horas de diferencia",
    subtitle:
      "El diseño web en español California no necesita oficina en el estado. Así se lleva un proyecto con un negocio de Los Ángeles o San Diego.",
    items: [
      {
        icon: "calendar",
        title: "Dos horas, y a favor",
        description:
          "California va dos horas detrás del centro de México. En la práctica significa que cuando abres tu día, lo que pediste ayer por la tarde ya está avanzado, y las llamadas caen cómodas a media mañana de allá.",
      },
      {
        icon: "receipt",
        title: "Sin costo de estructura en el precio",
        description:
          "No hay oficina en el estado, ni cuentas de gestor, ni comisión sobre tu inversión publicitaria. Los precios están publicados y son los mismos que para cualquier otro cliente: landing $349, sitio de 4 a 6 páginas $899.",
      },
      {
        icon: "lock",
        title: "Todo a tu nombre desde el día uno",
        description:
          "Dominio, hosting, correos y cuentas de anuncios se registran con tus datos. Cambiar de proveedor no debería costarte tu propio sitio, y aquí nunca cuesta eso.",
      },
    ],
  },
  faq: {
    eyebrow: "// dudas de negocios en California",
    titleA: "Lo que preguntan desde",
    titleHighlight: "California",
    subtitle:
      "Las dudas que salen cuando un negocio de Los Ángeles o San Diego compara contra una agencia con oficina en el estado.",
    items: [
      {
        question: "¿Por qué cuestas mucho menos que una agencia de Los Ángeles?",
        answer:
          "Porque no pago lo que ella paga. No hay oficina en California, ni ejecutivos de cuenta, ni una capa de gestión entre tú y quien hace el trabajo. El sitio se programa igual de bien; lo que desaparece del precio es la estructura, no el trabajo. Y los precios están publicados para que puedas compararlos sin agendar una llamada.",
      },
      {
        question: "¿Trabajas con negocios de California estando en México?",
        answer:
          "Sí: soy un desarrollador web en español en California sin oficina en California, que es exactamente de dónde sale la diferencia de precio. Todo el proceso es remoto —llamada inicial, contenido por WhatsApp o correo, revisiones por enlace y publicación— y el estado va dos horas detrás del centro de México, así que las llamadas a media mañana de allá caen a media tarde aquí.",
      },
      {
        question: "¿Conviene invertir en anuncios en un mercado tan competido?",
        answer:
          "Sí, pero no primero. En California el costo por clic es de los más altos del país y mandar tráfico pagado a un sitio que no convierte, o a una ficha de Google sin reseñas, sale caro muy rápido. Lo que recomiendo aquí es ordenar sitio, ficha y reseñas, medir un mes, y encender campañas cuando ya se sabe qué servicio convierte mejor.",
      },
      {
        question: "¿Puedes poner mi número de licencia CSLB en el sitio?",
        answer:
          "Sí, y conviene que esté en la portada y en cada página de servicio, no solo en el pie. En este estado el cliente está acostumbrado a verificarlo y verlo a la primera es una señal de confianza que cuesta cero y se nota en la conversión.",
      },
      {
        question: "¿Cómo se paga desde California?",
        answer:
          "En dólares, por transferencia o enlace de pago, con factura por cada pago. Sin cargo por distancia, sin cambio de moneda y sin contratos de doce meses: los planes mensuales de soporte y crecimiento se cancelan de un mes a otro.",
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════
// HUB · /diseno-web-estados-unidos/
// Frase principal: "diseño de páginas web en Estados Unidos".
// ═══════════════════════════════════════════════════════════════════════

const hubEs: MarketsHub = {
  pageContext: {
    title: "Diseño de páginas web en Estados Unidos, en español",
    paragraphs: [
      "Trabajo en remoto con dueños de negocio hispanos en Texas, Florida y California, y con quien esté en cualquier otro estado. Diseño de páginas web en Estados Unidos con todo el proceso en español: la propuesta, las revisiones y el soporte.",
      "El entregable son páginas web bilingües programadas a la medida, más SEO, Perfil de Empresa en Google y captación conectada. Es diseño web en español para negocios en Estados Unidos hecho para que tu cliente elija su idioma, no para que tú elijas por él.",
      "Si buscabas una agencia de diseño web en Estados Unidos o una agencia de marketing digital en Estados Unidos que trabaje en tu idioma, esto es diseño web para negocios latinos con precios publicados en dólares desde $349 USD y respuesta en menos de 24 horas. Páginas web para negocios hispanos en Estados Unidos hechas por un desarrollador web en español en Estados Unidos, no por un equipo que subcontrata la traducción.",
    ],
  },
  meta: {
    title: "Diseño de Páginas Web en Estados Unidos | ProCode",
    description:
      "Diseño de páginas web en Estados Unidos para negocios hispanos: sitios bilingües, SEO y captación. En español, en remoto y con precios desde $349 USD.",
    keywords:
      "diseño de páginas web en Estados Unidos, diseño web en español para negocios en Estados Unidos, agencia de diseño web en Estados Unidos, páginas web para negocios hispanos en Estados Unidos, desarrollador web en español en Estados Unidos, agencia de marketing digital en Estados Unidos, páginas web bilingües, diseño web para negocios latinos",
    heroTitleA: "Diseño de páginas web en Estados Unidos",
    heroHighlight: "para negocios que atienden en español",
    heroSubtitle: "En tu idioma, en remoto.",
  },
  intro: {
    title: "Por qué acabas con la peor página de tu mercado",
    lead:
      "La agencia local cotiza para una empresa mediana; el conocido te arma algo en un constructor. Hay una tercera vía.",
    points: [
      { title: "En remoto y en español", text: "Con estándar de agencia y sin su factura." },
      { title: "Sin costo de oficina", text: "No hay estructura en Estados Unidos que pagar." },
      { title: "Precio publicado", text: "Sin llamada de ventas para saber el número." },
    ],
  },
  listEyebrow: "// mercados",
  listTitle: "Los tres estados donde más trabajo",
  listSubtitle:
    "Cada uno tiene su propia página, con los giros que dominan ahí, lo que cambia en su mercado y cómo funciona el trabajo a distancia desde México. El diseño web en español para negocios en Estados Unidos no es el mismo trabajo en Houston que en Miami, y estas páginas explican en qué se diferencian.",
  listCta: "Ver el mercado",
  industriesCta: "Ver la página del giro",
  citiesLabel: "Zonas",
  citiesTitle: "Dónde se concentra el trabajo",
  citiesSubtitle:
    "Las cuatro zonas del estado de las que llegan más proyectos, y qué cambia en cada una.",
  how: {
    eyebrow: "// cómo funciona a distancia",
    title: "Cómo se trabaja con un negocio de Estados Unidos desde México",
    subtitle:
      "Seis respuestas a lo que de verdad preocupa cuando el proveedor no está en la misma ciudad. Es lo que diferencia a un desarrollador web en español en Estados Unidos de una agencia con oficina, y ninguna de las seis requiere que estemos cerca.",
    items: [
      {
        icon: "calendar",
        title: "Horarios que coinciden",
        description:
          "Texas comparte horario central con el centro de México casi todo el año, Florida va una hora por delante y California dos por detrás. Coincidimos durante toda la jornada laboral, sin madrugar ninguno de los dos.",
      },
      {
        icon: "message-circle",
        title: "En español y con quien hace el trabajo",
        description:
          "No hay ejecutivo de cuenta ni equipo rotativo. El que contesta tu WhatsApp es el que programa el sitio y revisa las campañas, y responde cualquier mensaje en menos de 24 horas.",
      },
      {
        icon: "receipt",
        title: "Pagos en dólares, con factura",
        description:
          "Transferencia o enlace de pago, con factura por cada pago. Los precios publicados son los que aplican: sin cargo por distancia, sin comisión sobre tu inversión publicitaria.",
      },
      {
        icon: "lock",
        title: "Todo registrado a tu nombre",
        description:
          "Dominio, hosting, correos, Perfil de Empresa en Google y cuentas de anuncios se abren con los datos de tu negocio. Si algún día cambias de proveedor, te llevas todo sin pedirle permiso a nadie.",
      },
      {
        icon: "globe",
        title: "Dos idiomas escritos, no traducidos",
        description:
          "Páginas web bilingües de verdad: español e inglés en URLs separadas, cada versión con su propio texto y su propio SEO. Es lo que permite que tu cliente hispano y tu cliente anglo te encuentren cada uno en su búsqueda.",
      },
      {
        icon: "file-text",
        title: "Precios y alcance por escrito antes de empezar",
        description:
          "Lo que incluye el proyecto, la fecha de entrega y el número exacto van en la propuesta. Si algo se sale del alcance, te lo digo antes de arrancar y nunca a mitad del trabajo.",
      },
    ],
  },
  faq: {
    eyebrow: "// dudas de trabajar a distancia",
    titleA: "Contratar a alguien que no está en",
    titleHighlight: "tu ciudad",
    subtitle:
      "Las cinco preguntas que salen siempre cuando un negocio de Estados Unidos valora contratar a una agencia de diseño web en Estados Unidos que trabaja en remoto desde México.",
    items: [
      {
        question: "¿Es seguro contratar a alguien que no está en Estados Unidos?",
        answer:
          "Lo que hace segura una contratación no es la distancia, es qué queda a tu nombre y qué está por escrito. El dominio, el hosting, los correos y las cuentas de anuncios se registran con los datos de tu negocio desde el primer día, el alcance y la fecha van en la propuesta, y los precios están publicados en el sitio. Si en algún momento decides parar, no hay nada tuyo retenido de mi lado.",
      },
      {
        question: "¿Vas a entender mi mercado si no vives aquí?",
        answer:
          "Las páginas web para negocios hispanos en Estados Unidos no se hacen mirando por la ventana: lo que hay que entender es cómo busca y qué duda tiene tu cliente, y eso se ve en los datos. Antes de escribir una línea reviso qué aparece hoy cuando alguien busca tu servicio en tu ciudad, qué están haciendo los tres primeros y qué preguntas repiten tus clientes. Esa revisión es la Revisión Express y es gratis: si me equivoco en algo, lo vas a ver en el vídeo antes de contratarme.",
      },
      {
        question: "¿En qué idioma trabajamos?",
        answer:
          "En el que prefieras. La comunicación puede ser en español o en inglés, y el sitio se entrega en uno de los dos o en ambos. La mayoría de mis clientes prefiere hablar en español y publicar en los dos, que es justo lo que una agencia de marketing digital en Estados Unidos suele cobrar aparte.",
      },
      {
        question: "¿Cómo hacemos las revisiones y la entrega?",
        answer:
          "Te paso un enlace privado donde ves el sitio funcionando mientras se construye, y ahí me dejas los comentarios. Cuando das el visto bueno, publico en tu dominio y te entrego los accesos. No hace falta instalar nada ni aprender ninguna herramienta.",
      },
      {
        question: "¿Trabajas fuera de Texas, Florida y California?",
        answer:
          "Sí. Esos tres son los estados donde más trabajo y por eso tienen su propia página, pero el diseño web para negocios latinos es el mismo en cualquier estado, y también en México. Escríbeme y te digo con honestidad si tu mercado tiene alguna particularidad que deba cambiar el plan.",
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════
// ENGLISH — el ángulo cambia a propósito.
// En español la frase es «diseño de páginas web en <estado>»; en inglés la
// intención con hueco real no es «web design texas» (imposible de ganar),
// sino la bilingüe: «bilingual web design», «Spanish-speaking web
// designer», «web design for Hispanic-owned businesses». Es la misma
// audiencia buscando desde el otro idioma, y ahí la competencia es una
// fracción.
// ═══════════════════════════════════════════════════════════════════════

const texasEn: Market = {
  pageContext: {
    title: "Bilingual web design in Texas",
    paragraphs: [
      "Houston, Dallas, San Antonio and Austin. Bilingual web design texas for the contractor, clinic, firm or brokerage whose customers switch languages mid-sentence: one custom-coded site that works in both, not a translation plugin bolted on.",
      "Built remotely, in your time zone, with published pricing from $349 USD. That covers houston web design small business work, dallas web design agency work and contractor website design texas, which is the request that comes in most.",
      "If you were looking for a spanish speaking web designer texas or a bilingual website developer, that is who builds it. Web design for small businesses in texas and web design for hispanic owned businesses, from someone with no office in the state — which is exactly why the price is what it is.",
    ],
  },
  key: "texas",
  name: "Texas",
  icon: "building",
  navLabel: "Texas",
  navHint: "Houston, Dallas, San Antonio and Austin.",
  cities: [
    { name: "Houston", note: "Most Houston web design small business work here is trades: remodeling, roofing, plumbing and HVAC competing for the same service-plus-city search." },
    { name: "Dallas–Fort Worth", note: "For a Dallas web design agency the weight sits in professional services, real estate and accounting, with more corporate clients than the rest of the state." },
    { name: "San Antonio", note: "Service and health businesses with a mostly Hispanic clientele, where the Spanish version is the primary one rather than the second." },
    { name: "Austin", note: "Consulting, personal brands and firms selling to companies. Lower volume, higher ticket, English-first." },
  ],
  meta: {
    title: "Bilingual Web Design in Texas | ProCode Dev",
    description:
      "Bilingual web design for Texas small businesses in Houston, Dallas, San Antonio and Austin. English and Spanish sites from $349 USD, built remotely.",
    keywords:
      "bilingual web design texas, web design for small businesses in texas, spanish speaking web designer texas, houston web design small business, dallas web design agency, web design for hispanic owned businesses, contractor website design texas, bilingual website developer",
    heroTitleA: "Bilingual web design in Texas",
    heroHighlight: "for businesses serving both languages",
    heroSubtitle: "Bilingual, custom-coded, built remotely.",
  },
  intro: {
    title: "Why Texas needs a different kind of site",
    lead:
      "In Houston and San Antonio, Spanish-speaking customers are not a segment of the market — they are the market.",
    points: [
      { title: "Bilingual by default", text: "Two languages on separate URLs, no plugin." },
      { title: "One page per service", text: "Job photos and a quote in two taps." },
      { title: "On your clock", text: "Remote, on Texas time all year." },
    ],
  },
  industries: {
    eyebrow: "// where the market is",
    title: "The Texas businesses I work with most",
    subtitle:
      "Each industry has its own page with what changes in that case. These four come up most in web design for small businesses in texas.",
    items: [
      { icon: "building", segment: "contractors", title: "Contractors and construction", description: "Remodeling, roofing, plumbing, electrical and HVAC. Contractor website design texas is the state's biggest sector, and the one that most depends on the estimate being requested the same day." },
      { icon: "receipt", segment: "accounting", title: "Accounting and tax", description: "Preparers, CPAs and bookkeepers with Hispanic clients. A bilingual site with orderly intake changes the whole season." },
      { icon: "map-pin", segment: "realEstate", title: "Real estate", description: "Dallas–Fort Worth and Austin move volume year-round. Property listings and lead capture, in both languages." },
      { icon: "briefcase", segment: "professional", title: "Professional services", description: "Attorneys, insurance agents and consultants. Here the site does not sell a product — it sells that you can be trusted." },
    ],
  },
  context: {
    eyebrow: "// what changes in Texas",
    title: "Three things I account for in a Texas project",
    subtitle: "A Texas site is not a California site. These are the differences that actually change structure and content, and why bilingual web design texas is not a template with the state name swapped in.",
    items: [
      { icon: "globe", title: "Bilingual is the baseline, not an add-on", description: "In Houston and San Antonio the same business serves one customer in English and the next in Spanish. A bilingual website developer gives both versions separate URLs and hreflang, so each customer finds their own in Google instead of a machine translation. It is the single biggest advantage in web design for hispanic owned businesses here." },
      { icon: "shield", title: "License and insurance sell", description: "Texas does not license general contractors statewide, but it does license electricians, plumbers and HVAC. Putting the license number and the policy where customers look for them is one of the cheapest conversion lifts in this market." },
      { icon: "smartphone", title: "Almost everything arrives by phone", description: "Trade customers search from the job site, the truck or a waiting room. The site is designed mobile-first, with sticky call and WhatsApp buttons, and loads in under two seconds on cellular." },
    ],
  },
  remote: {
    eyebrow: "// how remote works",
    title: "I work from Mexico, on your clock",
    subtitle: "Hiring a spanish speaking web designer texas businesses can reach does not need us in the same city. Here is how a project runs.",
    items: [
      { icon: "calendar", title: "Same time zone as you", description: "Texas is on Central time, the same as central Mexico for most of the year. When you message mid-morning, it is mid-morning here — no waiting until tomorrow for an answer." },
      { icon: "message-circle", title: "WhatsApp, not a ticket portal", description: "Follow-up runs on WhatsApp and calls, the way you already work. I answer any message in under 24 hours, usually much sooner." },
      { icon: "lock", title: "Everything in your name", description: "Domain, hosting, email and ad accounts are registered to your business with your details. If we ever stop working together, you take all of it without asking me." },
    ],
  },
  faq: {
    eyebrow: "// questions from Texas",
    titleA: "What Texas businesses",
    titleHighlight: "ask first",
    subtitle: "The questions that come up when a Houston or Dallas business hires someone who is not in the same city.",
    items: [
      { question: "Do you work with Texas businesses from Mexico?", answer: "Yes, and it is how I work with most of my clients. The whole process is remote: kickoff call, content over WhatsApp or email, reviews by private link, then launch. Texas shares Central time with central Mexico most of the year, so we overlap for the full working day." },
      { question: "Can you build the site in both English and Spanish?", answer: "Yes, and I recommend it for almost any Houston or San Antonio business. It is not a translate plugin: two real versions on separate URLs with hreflang, each written in its own language. Your Spanish-speaking customers find the Spanish version in Google and your English-speaking customers find the English one." },
      { question: "How does payment work from the U.S.?", answer: "In dollars, by transfer or payment link, with an invoice for every payment. The published prices are the ones that apply: $349 for a landing page, $899 for a 4-6 page site and from $1,499 for 8-12 pages." },
      { question: "Do you know how a Houston customer actually searches?", answer: "By service plus city, almost always on a phone, comparing the first three map results before calling anyone. That is why the work does not stop at the site: it includes the Google Business Profile, reviews and pages by service and area, which is what decides where you show up." },
      { question: "Do you have Texas clients right now?", answer: "My portfolio is published and you can open every project: construction, health, services and accounting, some in Mexico and some for businesses serving Hispanic customers in the U.S. I am not going to invent a list of Texas clients I do not have — judge the work by the sites you can actually visit." },
    ],
  },
};

const floridaEn: Market = {
  pageContext: {
    title: "Bilingual web design in Florida",
    paragraphs: [
      "Miami, Orlando, Tampa and Jacksonville. Bilingual web design florida for service businesses whose main market speaks Spanish, in a state where the season decides the year.",
      "Built remotely, published pricing from $349 USD. It covers miami web design small business projects, orlando web design agency work, tampa website design and roofing contractor website design florida, which is the most common job here.",
      "If you wanted a spanish speaking web designer miami, or web design for small businesses in florida from someone who writes the Spanish first, that is the default. Web design for hispanic owned businesses, with the season built into the plan instead of bolted on in October.",
    ],
  },
  key: "florida",
  name: "Florida",
  icon: "map-pin",
  navLabel: "Florida",
  navHint: "Miami, Orlando, Tampa and Jacksonville.",
  cities: [
    { name: "Miami and Miami-Dade", note: "Miami web design small business work runs on real estate, professional services and health, and most of it is decided in Spanish — which is why clients look for a spanish speaking web designer miami rather than a translator." },
    { name: "Orlando", note: "An orlando web design agency here lives on home services, tourism and growing family businesses, with heavily seasonal search." },
    { name: "Tampa", note: "Tampa website design is mostly construction, restoration and trades, with demand concentrated in season." },
    { name: "Jacksonville", note: "Contractors and professional services with a mixed clientele, where English and Spanish carry roughly equal weight." },
  ],
  meta: {
    title: "Bilingual Web Design in Florida | ProCode Dev",
    description:
      "Bilingual web design for Florida small businesses in Miami, Orlando, Tampa and Jacksonville. Spanish-first sites from $349 USD, built remotely.",
    keywords:
      "bilingual web design florida, spanish speaking web designer miami, web design for small businesses in florida, miami web design small business, roofing contractor website design florida, web design for hispanic owned businesses, orlando web design agency, tampa website design",
    heroTitleA: "Bilingual web design in Florida",
    heroHighlight: "where Spanish comes first",
    heroSubtitle: "Spanish first, not translated.",
  },
  intro: {
    title: "In South Florida, Spanish is not the second version",
    lead:
      "In Miami-Dade, serving Spanish speakers is not serving a minority — it is serving your main market.",
    points: [
      { title: "Spanish first", text: "Its own URL, never a translation layer." },
      { title: "Built for the season", text: "Survives the June-to-November spike." },
      { title: "No office in the state", text: "Remote, and it shows in the price." },
    ],
  },
  industries: {
    eyebrow: "// where the market is",
    title: "The Florida businesses I work with most",
    subtitle: "Each industry has its own page with what changes in that case. These four come up most in web design for small businesses in florida.",
    items: [
      { icon: "map-pin", segment: "realEstate", title: "Real estate", description: "Miami moves domestic and international buyers year-round. Listings, lead capture, and a Spanish version that does not read like a translation." },
      { icon: "building", segment: "contractors", title: "Roofing, restoration and trades", description: "The sector that lives off the season. Roofing contractor website design florida needs an emergency form, a project gallery and a clear service area, ready before June." },
      { icon: "briefcase", segment: "professional", title: "Professional services", description: "Immigration and family attorneys, insurance agents and consultants. A sector where trust is won or lost on the first screen." },
      { icon: "calendar", segment: "health", title: "Health and wellness", description: "Clinics, practices and therapists with online booking. The appointment is made from a phone or it is not made." },
    ],
  },
  context: {
    eyebrow: "// what changes in Florida",
    title: "Three things I account for in a Florida project",
    subtitle: "A Miami site does not look like a Dallas site. These are the differences that really affect structure and content, and why bilingual web design florida needs its own approach.",
    items: [
      { icon: "globe", title: "Spanish first, English second", description: "In South Florida the Spanish version usually takes the most traffic. It gets written first, with its own URL and its own content, and English becomes the real second version rather than an afterthought." },
      { icon: "calendar", title: "The site has to survive the season", description: "From June to November, demand for roofing, restoration and tree work multiplies within days. The page is prepared ahead: emergency form, visible availability and automated follow-up so nothing is lost at the peak." },
      { icon: "shield", title: "The state license is a selling point", description: "Florida does license contractors at state level, and customers know it and ask. Putting the license, insurance and service area where they are seen saves half a conversation and filters out price shoppers." },
    ],
  },
  remote: {
    eyebrow: "// how remote works",
    title: "I work from Mexico, one hour behind you",
    subtitle: "Web design for hispanic owned businesses does not need us in the same city. Here is how a project runs with a Florida business.",
    items: [
      { icon: "calendar", title: "One hour, not an ocean", description: "Florida is on Eastern time, an hour ahead of central Mexico. In practice we overlap the entire working day, and calls land in the Florida morning without either of us starting early." },
      { icon: "message-circle", title: "In your language, with the person doing the work", description: "No account executive and no rotating team to re-explain your business to. Whoever answers your WhatsApp writes the code and reviews the campaigns." },
      { icon: "lock", title: "Everything under your business", description: "Domain, hosting, email, Google Business Profile and ad accounts are registered in your name from day one. Nothing is tied to me." },
    ],
  },
  faq: {
    eyebrow: "// questions from Florida",
    titleA: "What Florida businesses",
    titleHighlight: "ask first",
    subtitle: "The questions that come up when a Miami, Orlando or Tampa business hires someone working remotely.",
    items: [
      { question: "Can you build the site primarily in Spanish?", answer: "Yes, and in South Florida it is usually the right call. Spanish is written as the primary language, with its own URL, its own copy and its own SEO, and English becomes a real second version. What I will not do is bolt a translate plugin on top: it shows in the first line and costs more than it saves." },
      { question: "Hurricane season is close. Is there time?", answer: "It depends when we start. A landing page for one emergency service ships in two weeks; a 4-6 page site takes three to four. If you are tight on time, the honest move is to launch the landing page and the Google Business Profile first and build the full site while you are already capturing leads." },
      { question: "How does payment work from Florida?", answer: "In dollars, by transfer or payment link, with an invoice for every payment. The prices published on the site are the ones that apply — no distance surcharge and no currency markup." },
      { question: "Do you work with Miami businesses from Mexico?", answer: "Yes. The whole process is remote and can run in Spanish or English: kickoff call, content over WhatsApp, reviews by private link, then launch. Florida is only an hour ahead of central Mexico, so we overlap for the full working day." },
      { question: "What about the Google Business Profile if I serve several counties?", answer: "It gets set up as a service area by county rather than a storefront address, which is the correct setup when you travel to the customer. On top of that go dedicated pages by service and by area on the site, which is what holds up ranking beyond the immediate radius of your profile." },
    ],
  },
};

const californiaEn: Market = {
  pageContext: {
    title: "Bilingual web design in California",
    paragraphs: [
      "Los Angeles, San Diego, the Inland Empire and the Bay Area. The same custom-coded bilingual site and the same lead system, for a fraction of what an agency with California overhead charges. Bilingual web design california with published pricing from $349 USD.",
      "That includes los angeles web design small business work, san diego website design and contractor website design california, where the license and the service area matter as much as the portfolio.",
      "As an affordable web design agency california option, I work remotely: no rent in the state, and that saving goes to the price rather than the margin. Web design for small businesses in california and web design for hispanic owned businesses, from a spanish speaking web designer los angeles clients reach the same day.",
    ],
  },
  key: "california",
  name: "California",
  icon: "briefcase",
  navLabel: "California",
  navHint: "Los Angeles, San Diego and the Inland Empire.",
  cities: [
    { name: "Los Angeles", note: "Los angeles web design small business work competes in the largest Hispanic market in the country and the priciest: a spanish speaking web designer los angeles businesses can afford is genuinely hard to find." },
    { name: "San Diego", note: "San diego website design covers home services, health and cross-border businesses, with many customers living in both languages." },
    { name: "Inland Empire", note: "Construction, logistics and steadily growing trades, with noticeably less competition than the coast." },
    { name: "Bay Area", note: "High-ticket professional services and consulting, where the site competes on credibility rather than price." },
  ],
  meta: {
    title: "Bilingual Web Design in California | ProCode Dev",
    description:
      "Bilingual web design for California small businesses in Los Angeles, San Diego and the Inland Empire, without local-agency pricing. From $349 USD, remote.",
    keywords:
      "bilingual web design california, spanish speaking web designer los angeles, web design for small businesses in california, los angeles web design small business, san diego website design, web design for hispanic owned businesses, contractor website design california, affordable web design agency california",
    heroTitleA: "Bilingual web design in California",
    heroHighlight: "without local-agency pricing",
    heroSubtitle: "Without California agency overhead.",
  },
  intro: {
    title: "California: the priciest place to advertise and to hire",
    lead:
      "Everything costs more here: the click, the rent and the agency. The way out is not paying for overhead.",
    points: [
      { title: "No overhead priced in", text: "Published prices, the same for everyone." },
      { title: "Spanish as the edge", text: "Where big competitors just run a plugin." },
      { title: "Organic before ads", text: "Profile and reviews first, campaigns after." },
    ],
  },
  industries: {
    eyebrow: "// where the market is",
    title: "The California businesses I work with most",
    subtitle: "Each industry has its own page with what changes in that case. These four come up most in web design for small businesses in california.",
    items: [
      { icon: "building", segment: "contractors", title: "Contractors and home services", description: "Remodeling, landscaping, plumbing, solar and cleaning. Contractor website design california faces heavy paid competition, and the Google profile decides the call." },
      { icon: "calendar", segment: "health", title: "Health and wellness", description: "Practices, dental clinics, nutrition and therapy. Online booking, reminders and a Spanish version patients understand the first time." },
      { icon: "briefcase", segment: "professional", title: "Professional services", description: "Attorneys, insurance and high-ticket consulting. Here the site competes on credibility, not on price." },
      { icon: "receipt", segment: "accounting", title: "Accounting and tax", description: "Firms with Hispanic clients and a sharply defined season. Intake sorted out before January, not in March." },
    ],
  },
  context: {
    eyebrow: "// what changes in California",
    title: "Three things I account for in a California project",
    subtitle: "It is the most competitive of the three markets, and that changes where the effort belongs. It is also why bilingual web design california costs what it costs locally, and why remote changes the number.",
    items: [
      { icon: "target", title: "Paid clicks are expensive: organic first", description: "In California, turning on ads before sorting out the Google profile, reviews and service pages burns budget. The order I recommend here is the reverse of other markets: organic visibility first, campaigns second." },
      { icon: "shield", title: "The CSLB license number is the first thing they check", description: "California licenses contractors and customers are used to verifying. Putting the license number in plain view rather than buried in the footer is one of the cheapest trust gains available in this state." },
      { icon: "globe", title: "Well-written Spanish is your competitive edge", description: "Large companies translate with a plugin. In web design for hispanic owned businesses, a real Spanish version with its own URL and copy written for that customer lets you compete for searches the big competition is leaving on the table." },
    ],
  },
  remote: {
    eyebrow: "// how remote works",
    title: "I work from Mexico, two hours ahead",
    subtitle: "An affordable web design agency california businesses can hire does not need an office in the state. Here is how a project runs in Los Angeles or San Diego.",
    items: [
      { icon: "calendar", title: "Two hours, and in your favor", description: "California runs two hours behind central Mexico. In practice, what you asked for yesterday afternoon is already under way when you open your day, and calls land comfortably in your mid-morning." },
      { icon: "receipt", title: "No overhead priced into the work", description: "No office in the state, no account managers, no commission on your ad spend. Prices are published and identical to every other client: $349 for a landing page, $899 for a 4-6 page site." },
      { icon: "lock", title: "In your name from day one", description: "Domain, hosting, email and ad accounts are registered with your details. Changing providers should never cost you your own website, and here it never does." },
    ],
  },
  faq: {
    eyebrow: "// questions from California",
    titleA: "What California businesses",
    titleHighlight: "ask first",
    subtitle: "The questions that come up when a Los Angeles or San Diego business compares against an agency with an office in the state.",
    items: [
      { question: "Why do you cost so much less than a Los Angeles agency?", answer: "Because I do not carry what they carry. No California office, no account executives, no management layer between you and the person doing the work. The site is coded just as well; what leaves the price is the overhead, not the work. And the prices are published so you can compare without booking a call." },
      { question: "Do you work with California businesses from Mexico?", answer: "Yes, the whole process is remote: kickoff call, content over WhatsApp or email, reviews by private link, then launch. California is two hours behind central Mexico, so your mid-morning calls land in my mid-afternoon without either of us leaving our normal hours." },
      { question: "Is it worth running ads in such a competitive market?", answer: "Yes, but not first. California has some of the highest cost per click in the country, and sending paid traffic to a site that does not convert, or to a Google profile with no reviews, gets expensive fast. What I recommend here is to sort out the site, the profile and the reviews, measure for a month, and turn on campaigns once you know which service converts best." },
      { question: "Can you put my CSLB license number on the site?", answer: "Yes, and it belongs on the homepage and on every service page, not only in the footer. Customers in this state are used to verifying it, and seeing it immediately is a trust signal that costs nothing and shows up in conversion." },
      { question: "How does payment work from California?", answer: "In dollars, by transfer or payment link, with an invoice for every payment. No distance surcharge, no currency markup and no 12-month contracts: the monthly support and growth plans cancel month to month." },
    ],
  },
};

const hubEn: MarketsHub = {
  pageContext: {
    title: "Bilingual web design across the United States",
    paragraphs: [
      "I work remotely with business owners in Texas, Florida and California, and with anyone in any other state. Bilingual web design here means english and spanish website design in one custom-coded build, plus SEO, Google Business Profile and connected lead capture.",
      "Web design for small businesses in the united states with published pricing in dollars from $349 USD and a reply in under 24 hours. Web design for hispanic owned businesses where the Spanish is written, not machine-translated.",
      "If you were looking for a spanish speaking web designer, a bilingual website developer united states clients can reach directly, or a bilingual digital marketing agency that handles both languages, that is the whole offer — including spanish website design services as part of the build rather than an add-on.",
    ],
  },
  meta: {
    title: "Bilingual Web Design for U.S. Businesses | ProCode",
    description:
      "Bilingual web design for U.S. small businesses in Texas, Florida and California: English and Spanish sites, SEO and lead capture. From $349 USD, built remotely.",
    keywords:
      "bilingual web design, spanish speaking web designer, web design for hispanic owned businesses, bilingual website developer united states, english and spanish website design, web design for small businesses in the united states, spanish website design services, bilingual digital marketing agency",
    heroTitleA: "Bilingual web design for",
    heroHighlight: "U.S. small businesses",
    heroSubtitle: "Your language, built remotely.",
  },
  intro: {
    title: "Why you end up with your market's worst website",
    lead:
      "The local agency quotes for a mid-size company; a friend builds it in a page builder. There is a third option.",
    points: [
      { title: "Remote and bilingual", text: "Agency standard without the agency invoice." },
      { title: "No U.S. overhead", text: "Nothing to pay for an office you never visit." },
      { title: "Price published", text: "No sales call needed to hear the number." },
    ],
  },
  listEyebrow: "// markets",
  listTitle: "The three states I work in most",
  listSubtitle:
    "Each one has its own page, with the industries that dominate there, what changes in that market and how remote work runs from Mexico. Web design for small businesses in the united states is not the same job in Houston as in Miami, and these pages spell out the difference.",
  listCta: "See this market",
  industriesCta: "See the industry page",
  citiesLabel: "Areas",
  citiesTitle: "Where the work is concentrated",
  citiesSubtitle:
    "The four areas of the state most projects come from, and what changes in each one.",
  how: {
    eyebrow: "// how remote works",
    title: "How a U.S. business works with a developer in Mexico",
    subtitle: "Six answers to what actually worries people when the provider is not in the same city. It is what separates a bilingual website developer united states businesses hire remotely from an agency with an office, and none of the six needs us close.",
    items: [
      { icon: "calendar", title: "Hours that overlap", description: "Texas shares Central time with central Mexico for most of the year, Florida is an hour ahead and California two behind. We overlap the whole working day, with neither of us starting early." },
      { icon: "message-circle", title: "In your language, with the person doing the work", description: "No account executive and no rotating team. Whoever answers your WhatsApp writes the code and reviews the campaigns, and replies to any message in under 24 hours." },
      { icon: "receipt", title: "Paid in dollars, with an invoice", description: "Transfer or payment link, with an invoice for every payment. Published prices are the ones that apply: no distance surcharge and no commission on your ad spend." },
      { icon: "lock", title: "Everything registered to you", description: "Domain, hosting, email, Google Business Profile and ad accounts are opened with your business details. If you ever change providers, you take all of it without asking anyone." },
      { icon: "globe", title: "Two languages written, not translated", description: "Genuine english and spanish website design on separate URLs, each version with its own copy and its own SEO. That is what lets both of your audiences find you in their own search, and it is the core of my spanish website design services." },
      { icon: "file-text", title: "Price and scope in writing before we start", description: "What the project includes, the delivery date and the exact number go in the proposal. If something falls outside the scope, I tell you before we begin and never halfway through." },
    ],
  },
  faq: {
    eyebrow: "// questions about working remotely",
    titleA: "Hiring someone who is not in",
    titleHighlight: "your city",
    subtitle: "The five questions that always come up when a U.S. business considers a bilingual digital marketing agency working remotely from Mexico.",
    items: [
      { question: "Is it safe to hire someone outside the United States?", answer: "What makes a hire safe is not distance — it is what stays in your name and what is in writing. The domain, hosting, email and ad accounts are registered to your business from day one, the scope and delivery date go in the proposal, and the prices are published on the site. If you decide to stop at any point, nothing of yours is held on my side." },
      { question: "Will you understand my market if you do not live here?", answer: "Web design for hispanic owned businesses is not done by looking out the window: what matters is how your customers search and what they hesitate about, and that shows in the data. Before writing a line I look at what comes up today when someone searches your service in your city, what the top three are doing, and which questions your customers keep repeating. That review is the free Express Review: if I get something wrong, you will see it in the video before you hire me." },
      { question: "What language do we work in?", answer: "Whichever you prefer. Communication with me can be in English or Spanish, and the site can ship in either or both. Most of my U.S. clients prefer to talk in Spanish and publish in both languages." },
      { question: "How do reviews and handover work?", answer: "You get a private link where you can see the site working as it is built, and you leave your comments there. When you sign off, I publish to your domain and hand over the access. Nothing to install and no tool to learn." },
      { question: "Do you work outside Texas, Florida and California?", answer: "Yes. Those three are where most of my work is, which is why they have their own pages, but the service is the same in any state, and in Mexico too. Message me and I will tell you honestly whether your market has a particularity that should change the plan." },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════

export const markets: Record<"es" | "en", Record<MarketKey, Market>> = {
  es: { texas: texasEs, florida: floridaEs, california: californiaEs },
  en: { texas: texasEn, florida: floridaEn, california: californiaEn },
};

export const marketsHub: Record<"es" | "en", MarketsHub> = {
  es: hubEs,
  en: hubEn,
};
