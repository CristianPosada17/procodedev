// ============================================================
// PÁGINAS DE GIRO — negocios y pymes
// ------------------------------------------------------------
// El hub (/negocios · /en/industries) habla de dueños de negocio en
// general. Estas cinco páginas hablan de un solo giro cada una, porque el
// dueño no se busca a sí mismo por la categoría: se busca por su oficio.
// Un contratista escribe «página web para contratistas», no «sitio para
// pequeño negocio».
//
// Cada giro tiene su propio dolor, su propio calendario y sus propios
// servicios recurrentes. Si el copy fuera intercambiable entre los cinco,
// no habría razón para que existieran cinco páginas — ni para que Google
// las trate como algo distinto de contenido duplicado.
// ============================================================

import type { Lang, SegmentKey } from "./ui";

export interface SegmentBlock {
  icon: string;
  title: string;
  description: string;
}

export interface Segment {
  /** Etiqueta en el menú desplegable. */
  navLabel: string;
  /** Línea de apoyo bajo la etiqueta del menú. */
  navHint: string;
  icon: string;
  meta: { title: string; description: string; keywords: string };
  heroEyebrow: string;
  heroTitleA: string;
  heroHighlight: string;
  heroSubtitle: string;
  /** Frase corta bajo el hero, para el JSON-LD y el resumen. */
  intro: string;
  /** id del proyecto de `portfolio.projects` (ui.ts) que se destaca aquí. */
  projectId: string;
  projectEyebrow: string;
  projectTitle: string;
  projectHighlight: string;
  projectWhy: string;
  projectPoints: string[];
  painTitle: string;
  painSubtitle: string;
  pains: string[];
  systemTitle: string;
  systemSubtitle: string;
  system: SegmentBlock[];
  cycleTitle: string;
  cycleBody: string;
  cycleMonths: { label: string; note: string }[];
  faqTitle: string;
  faq: { question: string; answer: string }[];
  ctaTitle: string;
  ctaBody: string;
}

type SegmentDict = Record<SegmentKey, Segment>;

const es: SegmentDict = {
  // ────────────────────────────────────────────────────────────
  contractors: {
    navLabel: "Contratistas y construcción",
    navHint: "Cotizaciones, trabajos grandes y clientes que sí pagan",
    icon: "building",
    meta: {
      title:
        "Páginas Web para Contratistas | ProCode Dev",
      description:
        "Sitio web, Perfil de Empresa en Google y formulario de cotización para contratistas y constructoras. Deja de perder trabajos grandes por no verte formal.",
      keywords:
        "página web para contratistas, sitio web para constructoras, página web para plomeros, página web para electricistas, página web para techos, marketing para contratistas, cotizaciones en línea, SEO local construcción",
    },
    heroEyebrow: "// contratistas y construcción",
    heroTitleA: "Sistemas digitales para",
    heroHighlight: "contratistas y constructoras",
    heroSubtitle:
      "Tu trabajo se ve en la obra terminada, pero el cliente decide antes de verla: decide con lo que encuentra en Google.",
    intro:
      "Sitio web, Perfil de Empresa en Google, formulario de cotización y seguimiento para contratistas, constructoras, remodelación, plomería, electricidad, techos y jardinería.",
    projectId: "trejo",
    projectEyebrow: "// proyecto en tu giro",
    projectTitle: "Un negocio de tu oficio que ya está",
    projectHighlight: "trabajando en línea",
    projectWhy:
      "Trejo Landscaping es exactamente el caso de un contratista: un oficio que vivía de la recomendación y que hoy recibe solicitudes de cotización desde su propia página.",
    projectPoints: [
      "Trabajos terminados con fotos reales, que es la prueba que pide el cliente antes de dejarte entrar a su casa.",
      "Formulario de cotización conectado a WhatsApp, para no perder al que escribe fuera de horario.",
      "Estructura por servicio, para que cada tipo de trabajo se venda con su propio mensaje.",
    ],
    painTitle: "Lo que veo una y otra vez",
    painSubtitle:
      "Ninguno de estos problemas se resuelve con una página más bonita. Se resuelven con estructura.",
    pains: [
      "Vives de recomendaciones: cuando el teléfono deja de sonar, no hay una segunda fuente de trabajos.",
      "El cliente que paga bien te compara con una empresa que tiene página, reseñas y seguro visible.",
      "Contestas los mismos mensajes: «¿cuánto cobras?», «¿vienes a mi zona?», «¿mandas cotización?».",
      "Cotizas trabajos que nunca iban a cerrar porque nadie preguntó presupuesto ni zona antes de que manejaras 40 minutos.",
      "Terminas una obra excelente y no queda ni una foto ordenada ni una reseña pedida.",
    ],
    systemTitle: "Qué incluye una página web para contratistas",
    systemSubtitle:
      "Lo mismo aplica para una página web para plomeros, electricistas, techos o remodelación, y para el marketing para contratistas de cualquier oficio: cambia el ejemplo, no la estructura.",
    system: [
      {
        icon: "layout",
        title: "Una página por servicio, no una sola de «construcción»",
        description:
          "Remodelación de cocina, baño completo, techos, concreto, cercas, adiciones.",
      },
      {
        icon: "clipboard-check",
        title: "Formulario de cotización que filtra antes de que manejes",
        description:
          "Tipo de trabajo, código postal, fotos del espacio, medidas aproximadas, cuándo quiere empezar y rango de presupuesto.",
      },
      {
        icon: "star",
        title: "Galería de trabajos y antes/después que vende sola",
        description:
          "Tus obras ordenadas por tipo de trabajo, con fotos reales, ciudad y una línea de qué resolviste.",
      },
      {
        icon: "shield",
        title: "Licencia, seguro y garantía visibles",
        description:
          "Licencia, seguro de responsabilidad, años trabajando, zonas que cubres y qué pasa si algo sale mal.",
      },
      {
        icon: "target",
        title: "Perfil de Empresa en Google trabajando tu zona",
        description:
          "Optimizado para «contractor near me» y su equivalente en español, con fotos de obra, servicios cargados, zonas de cobertura y un sistema para pedir reseñas justo al entregar el trabajo, que es cuando el cliente está contento.",
      },
      {
        icon: "zap",
        title: "Marketing para contratistas (opcional)",
        description:
          "Campañas locales y anuncios de temporada para llenar las semanas flojas. Se contrata aparte, en plan mensual con precio publicado.",
      },
    ],
    cycleTitle: "Tu año de obra, y qué hace el sistema en cada tramo",
    cycleBody:
      "El clima manda en tu facturación. El sistema se monta antes y trabaja solo cuando tú estás en obra de sol a sol.",
    cycleMonths: [
      {
        label: "Ene – Mar",
        note: "Interiores y remodelación; captación para llenar la primavera.",
      },
      {
        label: "Abr – Jun",
        note: "Temporada alta: cotizaciones automáticas y respuesta en el día.",
      },
      {
        label: "Jul – Sep",
        note: "Exteriores, techos y concreto; reseñas y referidos de cada obra.",
      },
      {
        label: "Oct – Dic",
        note: "Mantenimiento, preparación de invierno y reactivación de clientes.",
      },
    ],
    faqTitle: "Dudas sobre una página web para contratistas",
    faq: [
      {
        question: "Todo mi trabajo viene por recomendación. ¿Para qué una página?",
        answer:
          "Porque la recomendación ya no cierra sola: el cliente que te recomendaron te busca en Google antes de llamarte, y lo que encuentra decide si marca o no. Una página no reemplaza tus referidos — hace que se conviertan, y te da una segunda fuente cuando el teléfono se calla.",
      },
      {
        question: "¿Puedo mandar las fotos desde el celular?",
        answer:
          "Sí, y es como trabajamos. Me mandas fotos de obra por WhatsApp y yo las recorto, las ordeno por tipo de trabajo y las subo. No necesitas fotógrafo ni saber de computadoras.",
      },
      {
        question: "¿Sirve si trabajo solo o con dos ayudantes?",
        answer:
          "Es donde más rinde. Un contratista solo no puede contestar mientras está en el techo: el formulario y la respuesta automática son el asistente que no puedes contratar todavía.",
      },
      {
        question: "¿Puede quedar en inglés y en español?",
        answer:
          "Sí, y para la mayoría de los contratistas hispanos es lo correcto: tus clientes actuales te buscan en español y los trabajos grandes, muchas veces, llegan en inglés. Las dos versiones se construyen con URLs separadas para que Google indexe ambas.",
      },
    ],
    ctaTitle: "15 minutos antes de tu próxima temporada fuerte",
    ctaBody:
      "Te digo qué encuentra hoy un cliente que busca tu oficio en tu ciudad, y qué pieza te falta para que te elija a ti.",
  },

  // ────────────────────────────────────────────────────────────
  health: {
    navLabel: "Salud y bienestar",
    navHint: "Agenda llena, pacientes que regresan y menos mensajes",
    icon: "users",
    meta: {
      title:
        "Páginas Web para Consultorios | ProCode Dev",
      description:
        "Sitio web, agenda en línea y recordatorios para consultorios, clínicas y profesionales de la salud. Menos mensajes repetidos y menos citas perdidas.",
      keywords:
        "página web para consultorios, sitio web para clínicas, página web para nutriólogos, página web para dentistas, agenda en línea para pacientes, marketing para consultorios, citas en línea",
    },
    heroEyebrow: "// salud y bienestar",
    heroTitleA: "Sistemas digitales para",
    heroHighlight: "consultorios y clínicas",
    heroSubtitle:
      "Un paciente nuevo te evalúa antes de escribirte: mira tu formación, tus reseñas y si puede agendar sin tener que preguntar precios por mensaje.",
    intro:
      "Sitio web, agenda en línea, formulario de primera consulta, recordatorios y seguimiento para consultorios, clínicas, nutriólogos, dentistas, psicólogos, fisioterapeutas y terapeutas.",
    projectId: "fersilva",
    projectEyebrow: "// proyecto en tu giro",
    projectTitle: "Una práctica de salud que ya está",
    projectHighlight: "trabajando en línea",
    projectWhy:
      "Fernanda Silva es el caso de un consultorio: explicaba su servicio por mensaje una y otra vez, y hoy los pacientes llegan informados y agendan solos.",
    projectPoints: [
      "Servicios explicados con lo que incluyen y cuánto duran, que es lo que quita la mitad de los mensajes.",
      "Agenda en línea para que el paciente elija horario sin tener que preguntarte.",
      "Formación y enfoque visibles, porque en salud la confianza se decide antes del primer contacto.",
    ],
    painTitle: "Lo que veo una y otra vez",
    painSubtitle:
      "Ninguno de estos problemas se resuelve con una página más bonita. Se resuelven con estructura.",
    pains: [
      "Explicas por mensaje lo mismo cien veces: precio de la consulta, qué incluye, cuánto dura, si aceptas seguro.",
      "Pierdes pacientes que escribieron un domingo por la noche y no recibieron respuesta hasta el martes.",
      "Las citas perdidas te cuestan huecos en la agenda que ya no se llenan.",
      "El paciente viene una vez y no regresa, y no hay nada que se lo recuerde.",
      "Tu formación y tu experiencia no se ven por ningún lado, y compites de tú a tú con quien apenas empieza.",
    ],
    systemTitle: "Qué incluye una página web para consultorios y clínicas",
    systemSubtitle:
      "Lo mismo aplica para una página web para nutriólogos, dentistas o psicólogos, con agenda en línea para pacientes y citas en línea: cambia el ejemplo, no la estructura.",
    system: [
      {
        icon: "layout",
        title: "Una página por servicio, no una sola de «consultas»",
        description:
          "Primera consulta, seguimiento, paquetes, tratamiento específico.",
      },
      {
        icon: "calendar",
        title: "Agenda en línea conectada a tu calendario",
        description:
          "El paciente elige horario disponible sin preguntarte, con bloques distintos para primera vez y seguimiento, y la cita cae directo en tu calendario.",
      },
      {
        icon: "clipboard-check",
        title: "Formulario de primera consulta antes de la cita",
        description:
          "Datos, motivo de consulta, antecedentes y lo que necesites preguntar, contestado antes de que el paciente llegue.",
      },
      {
        icon: "repeat",
        title: "Recordatorios y recuperación de pacientes",
        description:
          "Recordatorio automático 24 horas antes para reducir las citas perdidas, y aviso a los pacientes que no vuelven desde hace meses de que ya pueden agendar su seguimiento.",
      },
      {
        icon: "shield",
        title: "Formación, cédula y reseñas visibles",
        description:
          "Tu cédula, tus certificaciones, tu enfoque y las reseñas de pacientes reales, presentados con criterio profesional.",
      },
      {
        icon: "zap",
        title: "Marketing para consultorios (opcional)",
        description:
          "Campañas para pacientes nuevos de tu zona y recordatorios de temporada. Se contrata aparte, en plan mensual con precio publicado.",
      },
    ],
    cycleTitle: "Tu año de consulta, y qué hace el sistema en cada tramo",
    cycleBody:
      "La demanda de salud tiene picos claros. El sistema los aprovecha sin que tú tengas que acordarte.",
    cycleMonths: [
      {
        label: "Ene – Mar",
        note: "Pico de pacientes nuevos: agenda abierta y captación al máximo.",
      },
      {
        label: "Abr – Jun",
        note: "Seguimiento, paquetes y venta de tratamientos a la base actual.",
      },
      {
        label: "Jul – Sep",
        note: "Meses flojos: reactivación de pacientes y contenido que atrae.",
      },
      {
        label: "Oct – Dic",
        note: "Cierre de año, revisiones y agenda preparada para enero.",
      },
    ],
    faqTitle: "Dudas sobre un sitio web para clínicas y consultorios",
    faq: [
      {
        question: "¿Puedo poner precios o es mejor no publicarlos?",
        answer:
          "Depende de tu práctica, y lo decidimos juntos. Publicar el precio de la primera consulta filtra a quien no iba a agendar y te quita la mitad de los mensajes. En tratamientos que se cotizan caso por caso, usamos rangos o «desde», que da claridad sin cerrarte.",
      },
      {
        question: "¿La agenda en línea se conecta con la que ya uso?",
        answer:
          "Sí. Se conecta con tu Google Calendar o con la herramienta de citas que ya tengas, para que no acabes con dos agendas que no coinciden. Si aún no usas ninguna, te dejo una configurada.",
      },
      {
        question: "¿Y los datos de mis pacientes?",
        answer:
          "El formulario recoge lo mínimo necesario para la primera cita, con conexión segura y aviso de privacidad. La historia clínica completa se queda donde ya la manejas, no en la página.",
      },
      {
        question: "¿Puede quedar en inglés y en español?",
        answer:
          "Sí, y para un consultorio hispano en EE. UU. suele ser lo correcto: tus pacientes actuales te buscan en español y los nuevos, muchas veces, en inglés. Las dos versiones se construyen con URLs separadas para que Google indexe ambas.",
      },
    ],
    ctaTitle: "15 minutos para revisar tu agenda",
    ctaBody:
      "Te digo qué encuentra hoy un paciente que busca tu especialidad en tu ciudad, y qué pieza te falta para que te elija a ti.",
  },

  // ────────────────────────────────────────────────────────────
  professional: {
    navLabel: "Servicios profesionales",
    navHint: "Autoridad, casos calificados y consultas que sí cierran",
    icon: "scale",
    meta: {
      title:
        "Páginas Web para Servicios Profesionales | ProCode Dev",
      description:
        "Sitio web y formulario de calificación para abogados, consultores y agentes de seguros. Atrae el caso correcto y deja de dar consultas gratis sin filtro.",
      keywords:
        "página web para abogados, sitio web para consultores, página web para agentes de seguros, marketing para servicios profesionales, captación de clientes para abogados, marca personal profesional",
    },
    heroEyebrow: "// servicios profesionales",
    heroTitleA: "Sistemas digitales para",
    heroHighlight: "servicios profesionales",
    heroSubtitle:
      "Cuando alguien te contrata no compra horas: compra la confianza de que sabes resolver su problema.",
    intro:
      "Sitio web, captación, formulario de calificación, agenda y seguimiento para abogados, agentes de seguros, consultores, asesores y profesionales que venden su criterio.",
    projectId: "cristian-posada",
    projectEyebrow: "// proyecto en tu giro",
    projectTitle: "Un profesional que vende criterio, y lo",
    projectHighlight: "demuestra en su sitio",
    projectWhy:
      "Mi propia marca personal es el caso de alguien que no vende un producto, sino su trabajo: trayectoria, proyectos y contenido en un solo lugar que convierte al visitante en una conversación.",
    projectPoints: [
      "Autoridad demostrable —proyectos, trayectoria y contenido— en vez de adjetivos.",
      "Un solo hub al que apuntan todos los enlaces de redes, en vez de perfiles sueltos.",
      "Contacto que abre WhatsApp con el mensaje ya redactado: cero formularios sin responder.",
    ],
    painTitle: "Lo que veo una y otra vez",
    painSubtitle:
      "Ninguno de estos problemas se resuelve con una página más bonita. Se resuelven con estructura.",
    pains: [
      "Das consultas gratis a personas que nunca iban a contratarte, y no te queda tiempo para las que sí.",
      "Tu experiencia y tus resultados no se ven: pareces igual que cualquier otro que abrió el mes pasado.",
      "El prospecto pregunta «¿cuánto cobras?» antes de entender lo que resuelves, y la conversación muere ahí.",
      "Mandas una propuesta y no vuelves a saber nada, porque nadie hace el seguimiento.",
      "Tu contenido y tu reputación viven en redes sociales, no en un sitio que trabaje para ti.",
    ],
    systemTitle: "Qué incluye una página web para abogados y consultores",
    systemSubtitle:
      "Lo mismo aplica para un sitio web para consultores, para una página web para agentes de seguros y para la captación de clientes para abogados: cambia el ejemplo, no la estructura.",
    system: [
      {
        icon: "layout",
        title: "Una página por área de práctica, no una sola de «servicios»",
        description:
          "Cada área con su propia página, su propio lenguaje y su propio caso de uso.",
      },
      {
        icon: "clipboard-check",
        title: "Formulario que califica antes de la consulta",
        description:
          "Tipo de asunto, situación actual, urgencia y presupuesto o expectativa.",
      },
      {
        icon: "briefcase",
        title: "Autoridad demostrable, no adjetivos",
        description:
          "Años de práctica, credenciales, tipos de caso resueltos, publicaciones y reseñas.",
      },
      {
        icon: "calendar",
        title: "Agenda de consulta conectada y con filtro",
        description:
          "Consulta inicial en línea con las preguntas de calificación por delante, para que solo agende quien tiene un asunto que puedes tomar.",
      },
      {
        icon: "repeat",
        title: "Seguimiento de propuestas que no se cae solo",
        description:
          "Cada prospecto que pidió una propuesta y no respondió recibe seguimiento en los días correctos, con un mensaje que no suena a cobranza.",
      },
      {
        icon: "zap",
        title: "Marketing para servicios profesionales (opcional)",
        description:
          "Campañas y contenido para atraer el tipo de caso que sí te conviene. Se contrata aparte, en plan mensual con precio publicado.",
      },
    ],
    cycleTitle: "Tu año profesional, y qué hace el sistema en cada tramo",
    cycleBody:
      "Tu demanda no es pareja, pero sí es previsible. El sistema aprovecha los meses buenos y sostiene los flojos.",
    cycleMonths: [
      {
        label: "Ene – Mar",
        note: "Arranque de año: prospectos decidiendo y presupuestos nuevos.",
      },
      {
        label: "Abr – Jun",
        note: "Captación activa, contenido y propuestas con seguimiento.",
      },
      {
        label: "Jul – Sep",
        note: "Meses lentos: reactivación de clientes y casos en pausa.",
      },
      {
        label: "Oct – Dic",
        note: "Cierre de año, renovaciones y agenda preparada para enero.",
      },
    ],
    faqTitle: "Dudas sobre un sitio web para abogados y consultores",
    faq: [
      {
        question: "Mi trabajo es delicado. ¿Puedo mostrar casos?",
        answer:
          "Sin nombres ni detalles identificables. Se muestran tipos de asunto, contexto general y resultado, que es lo que el prospecto necesita para reconocerse. Nunca publicamos nada que comprometa a un cliente.",
      },
      {
        question: "¿No es mejor cobrar la primera consulta?",
        answer:
          "En muchos casos sí, y el sistema lo soporta: consulta de pago con agenda y cobro en línea. Lo decidimos en la llamada según tu tipo de asunto y tu volumen. Lo que no funciona es dar consultas gratis sin ningún filtro previo.",
      },
      {
        question: "¿Sirve si trabajo solo, sin equipo?",
        answer:
          "Es donde más rinde. Un profesional solo no puede contestar mientras está en audiencia o con un cliente: la calificación previa y el seguimiento automático son el asistente que no puedes contratar todavía.",
      },
      {
        question: "¿Puede quedar en inglés y en español?",
        answer:
          "Sí, y para un profesional hispano en EE. UU. suele ser lo correcto: tus clientes actuales te buscan en español y los nuevos, muchas veces, en inglés. Las dos versiones se construyen con URLs separadas para que Google indexe ambas.",
      },
    ],
    ctaTitle: "15 minutos para revisar tu captación",
    ctaBody:
      "Te digo qué encuentra hoy alguien que busca tu servicio en tu ciudad, y qué pieza te falta para que te elija a ti.",
  },

  // ────────────────────────────────────────────────────────────
  realEstate: {
    navLabel: "Inmobiliarias",
    navHint: "Catálogo, prospectos calificados y compradores que vuelven",
    icon: "map-pin",
    meta: {
      title:
        "Páginas Web para Inmobiliarias | ProCode Dev",
      description:
        "Sitio web con catálogo de propiedades, fichas detalladas y captación directa para asesores inmobiliarios. Deja de vivir dentro de los portales.",
      keywords:
        "página web para inmobiliarias, sitio web para asesores inmobiliarios, catálogo de propiedades en línea, marketing inmobiliario, captación de prospectos inmobiliarios, página web bienes raíces",
    },
    heroEyebrow: "// inmobiliarias",
    heroTitleA: "Sistemas digitales para",
    heroHighlight: "asesores inmobiliarios",
    heroSubtitle:
      "Tus propiedades viven en portales y en redes, pero tu marca no vive en ninguna parte.",
    intro:
      "Sitio web con catálogo de propiedades, fichas detalladas, formulario de prospecto calificado, agenda de visitas y seguimiento para asesores inmobiliarios, inmobiliarias y desarrolladoras.",
    projectId: "demo-inmobiliaria",
    projectEyebrow: "// proyecto en tu giro",
    projectTitle: "Cómo se ve un catálogo inmobiliario",
    projectHighlight: "bien estructurado",
    projectWhy:
      "Un sitio inmobiliario completo con catálogo de propiedades, fichas detalladas y captación directa.",
    projectPoints: [
      "Ficha propia por propiedad, con galería, características y mapa: un enlace que se ve profesional al mandarlo por WhatsApp.",
      "Filtros por zona, precio y tipo de operación, para que el comprador llegue solo a lo suyo.",
      "Captación directa del prospecto, sin que el dato se quede en el portal.",
    ],
    painTitle: "Lo que veo una y otra vez",
    painSubtitle:
      "Ninguno de estos problemas se resuelve con una página más bonita. Se resuelven con estructura.",
    pains: [
      "Todo tu inventario vive en un portal que te cobra por los prospectos que tú generaste.",
      "Recibes mensajes de gente que no califica y pierdes tardes enteras enseñando propiedades a quien no puede comprar.",
      "Cada propiedad se anuncia con fotos sueltas en redes y desaparece del muro en dos días.",
      "El comprador que no compró este año no vuelve a saber de ti, aunque sí compre el siguiente.",
      "Tu experiencia y tus operaciones cerradas no se ven, y compites con quien acaba de sacar la licencia.",
    ],
    systemTitle: "Qué incluye una página web para inmobiliarias",
    systemSubtitle:
      "Lo mismo aplica para una página web de bienes raíces con catálogo de propiedades en línea y captación de prospectos inmobiliarios: cambia el ejemplo, no la estructura.",
    system: [
      {
        icon: "layout",
        title: "Catálogo con ficha propia por propiedad",
        description:
          "Cada propiedad con su página: galería, plano, características, colonia, mapa y precio.",
      },
      {
        icon: "search",
        title: "Filtros que llevan al comprador a lo suyo",
        description:
          "Por zona, precio, recámaras y tipo de operación.",
      },
      {
        icon: "clipboard-check",
        title: "Formulario que califica antes de la visita",
        description:
          "Presupuesto, forma de pago —crédito, contado o precalificado—, zona y tiempo de compra.",
      },
      {
        icon: "briefcase",
        title: "Tu perfil de asesor, no solo tu inventario",
        description:
          "Quién eres, cuántas operaciones has cerrado, en qué zonas te especializas y qué dicen tus clientes.",
      },
      {
        icon: "repeat",
        title: "Seguimiento a compradores de ciclo largo",
        description:
          "Un comprador puede tardar un año en decidirse.",
      },
      {
        icon: "zap",
        title: "Marketing inmobiliario (opcional)",
        description:
          "Campañas por propiedad y por zona para captar compradores y vendedores. Se contrata aparte, en plan mensual con precio publicado.",
      },
    ],
    cycleTitle: "Tu año inmobiliario, y qué hace el sistema en cada tramo",
    cycleBody:
      "El mercado tiene estacionalidad clara. El sistema trabaja el ciclo completo, incluso cuando tú estás cerrando.",
    cycleMonths: [
      {
        label: "Ene – Mar",
        note: "Compradores planeando el año: captación y lista de espera.",
      },
      {
        label: "Abr – Jun",
        note: "Temporada alta de mudanzas: visitas, filtros y respuesta rápida.",
      },
      {
        label: "Jul – Sep",
        note: "Cierres de verano, reseñas y captación de nuevos propietarios.",
      },
      {
        label: "Oct – Dic",
        note: "Ciclo lento: contenido de zona y seguimiento a prospectos tibios.",
      },
    ],
    faqTitle: "Dudas sobre un sitio web para asesores inmobiliarios",
    faq: [
      {
        question: "¿Puedo cargar y quitar propiedades yo mismo?",
        answer:
          "Sí. Te dejo un panel donde subes fotos, precio y características sin tocar código, o lo conectamos con la fuente de inventario que ya usas. Lo definimos según cuántas propiedades muevas al mes.",
      },
      {
        question: "¿Vale la pena si ya publico en los portales?",
        answer:
          "Los portales te dan volumen, pero el prospecto es de ellos y lo comparten con otros asesores. Tu sitio es donde ese mismo prospecto te encuentra a ti, ve tu trayectoria y te escribe directo. Lo uno no sustituye a lo otro: el sitio es lo que hace que el portal no sea tu única fuente.",
      },
      {
        question: "¿Sirve si trabajo bajo una marca o franquicia?",
        answer:
          "Sí, y es común. Construimos tu presencia personal respetando los lineamientos de la marca. El comprador elige a un asesor con nombre y cara, no a un logo.",
      },
      {
        question: "¿Puede quedar en inglés y en español?",
        answer:
          "Sí, y para un asesor hispano en EE. UU. suele ser lo correcto: tus clientes actuales te buscan en español y los compradores nuevos, muchas veces, en inglés. Las dos versiones se construyen con URLs separadas para que Google indexe ambas.",
      },
    ],
    ctaTitle: "15 minutos para revisar tu catálogo",
    ctaBody:
      "Te digo qué encuentra hoy un comprador que busca en tu zona, y qué pieza te falta para que te escriba a ti.",
  },

  // ────────────────────────────────────────────────────────────
  // Este giro engloba lo que antes eran seis páginas separadas
  // (preparadores de impuestos, EAs, CPAs, bookkeepers, resolución
  // fiscal y despachos contables). Sigue siendo un nicho fuerte, pero
  // ahora es un giro más entre cinco, no el eje del sitio.
  accounting: {
    navLabel: "Contabilidad e impuestos",
    navHint: "Temporada, clientes de todo el año y menos trabajo manual",
    icon: "calculator",
    meta: {
      title:
        "Páginas Web para Despachos Contables | ProCode Dev",
      description:
        "Sitio web, intake de documentos y seguimiento para despachos contables, contadores y preparadores de impuestos. Llega a la temporada con la agenda llena.",
      keywords:
        "página web para despachos contables, sitio web para contadores, página web para preparadores de impuestos, marketing para despachos fiscales, intake de documentos, página web para CPA",
    },
    heroEyebrow: "// contabilidad e impuestos",
    heroTitleA: "Sistemas digitales para",
    heroHighlight: "despachos de contabilidad e impuestos",
    heroSubtitle:
      "Tu año se concentra en unas pocas semanas y el resto del calendario se apaga.",
    intro:
      "Sitio web, Perfil de Empresa en Google, intake de documentos, agenda y seguimiento para despachos contables, preparadores de impuestos, Enrolled Agents, CPAs y bookkeepers.",
    projectId: "demo-taxpro",
    projectEyebrow: "// proyecto en tu giro",
    projectTitle: "Cómo se ve un despacho contable",
    projectHighlight: "bien presentado",
    projectWhy:
      "Un sitio bilingüe para un despacho fiscal y contable: servicios separados, agenda de consulta y captación enfocada en confianza.",
    projectPoints: [
      "Una página por servicio, para que la declaración de negocio no compita con la de persona física.",
      "Agenda de consulta y captación construidas alrededor de la confianza, que es lo que decide en este giro.",
      "Versión en inglés y en español, con URLs separadas para que Google indexe las dos.",
    ],
    painTitle: "Lo que veo una y otra vez",
    painSubtitle:
      "Ninguno de estos problemas se resuelve con una página más bonita. Se resuelven con estructura.",
    pains: [
      "La mayor parte de tus ingresos entra en unas semanas, y el resto del año la operación se apaga.",
      "Los clientes con negocio —los que de verdad pagan— se van con quien se ve como un despacho formal, no con quien tiene más oficio.",
      "Contestas los mismos mensajes cincuenta veces: qué documentos, cuánto cuesta, cuándo estará listo.",
      "En plena temporada pierdes prospectos porque nadie tuvo tiempo de contestarles en 24 horas.",
      "El cliente del año pasado no regresó y te enteraste tarde, cuando ya presentó con otro.",
    ],
    systemTitle: "Qué incluye una página web para despachos contables",
    systemSubtitle:
      "Lo mismo aplica para una página web para CPA o para preparadores de impuestos, con intake de documentos incluido: cambia el ejemplo, no la estructura.",
    system: [
      {
        icon: "layout",
        title: "Una página por servicio, no una sola de «contabilidad»",
        description:
          "Declaraciones de personas, de negocio, contabilidad mensual, nómina, trámites y representación.",
      },
      {
        icon: "clipboard-check",
        title: "Intake que pide los documentos antes de la cita",
        description:
          "Formulario por tipo de servicio con la lista de documentos, carga segura de archivos y preguntas de calificación.",
      },
      {
        icon: "calendar",
        title: "Agenda que sobrevive a la temporada",
        description:
          "Citas en línea conectadas a tu calendario, con bloques distintos para personas y para negocios, recordatorios automáticos y aviso de documentos faltantes 48 horas antes.",
      },
      {
        icon: "repeat",
        title: "Reactivación de la base del año pasado",
        description:
          "Antes de que arranque la temporada, tus clientes anteriores reciben el aviso de que ya puedes recibirlos, con el enlace para agendar.",
      },
      {
        icon: "target",
        title: "Perfil de Empresa en Google trabajando en temporada",
        description:
          "Optimizado para las búsquedas de tu servicio en tu ciudad, en inglés y español, con publicaciones durante la temporada, horario extendido y un sistema para pedir reseñas justo cuando el cliente está contento.",
      },
      {
        icon: "zap",
        title: "Marketing para despachos fiscales (opcional)",
        description:
          "Campañas antes de la temporada y contenido que trae declaraciones nuevas. Se contrata aparte, en plan mensual con precio publicado.",
      },
    ],
    cycleTitle: "Tu calendario, y qué hace el sistema en cada tramo",
    cycleBody:
      "Nada de esto se improvisa en plena temporada.",
    cycleMonths: [
      {
        label: "Nov – Dic",
        note: "Reactivación de clientes anteriores, reseñas y agenda abierta.",
      },
      {
        label: "Ene – Abr",
        note: "Captación en máximo, intake automático y seguimiento sin manos.",
      },
      {
        label: "May – Ago",
        note: "Venta de contabilidad mensual y nómina a la base existente.",
      },
      {
        label: "Sep – Oct",
        note: "Extensiones, contenido y preparación de la siguiente temporada.",
      },
    ],
    faqTitle: "Dudas sobre un sitio web para contadores",
    faq: [
      {
        question: "Estoy en plena temporada. ¿Vale la pena empezar ahora?",
        answer:
          "Depende del mes. En temporada priorizamos lo que se lanza en dos semanas y produce de inmediato: Perfil de Empresa en Google, agenda en línea, intake y el botón de WhatsApp con el mensaje ya escrito. El sitio completo lo hacemos cuando baje la carga, con datos reales de la temporada.",
      },
      {
        question: "¿Esto me sirve si trabajo solo, desde mi casa?",
        answer:
          "Es justo donde más rinde. Un contador solo no tiene a nadie que conteste mientras está preparando una declaración: la automatización es el asistente que no puedes contratar en plena temporada.",
      },
      {
        question: "¿Sirve igual en México que en Estados Unidos?",
        answer:
          "El sistema es el mismo; cambian los servicios y el vocabulario de cada país. Trabajo con despachos de los dos lados y adapto la estructura, los nombres de los servicios y el calendario a donde estés.",
      },
      {
        question: "¿Puede quedar en inglés y en español?",
        answer:
          "Sí, y para la mayoría de los despachos hispanos en EE. UU. es lo correcto: los clientes actuales te buscan en español y los nuevos, muchas veces, en inglés. Las dos versiones se construyen con URLs separadas para que Google indexe ambas.",
      },
    ],
    ctaTitle: "15 minutos antes de que empiece la temporada",
    ctaBody:
      "Te digo qué pieza le falta a tu despacho hoy y qué se puede tener listo antes de que arranque tu mes fuerte.",
  },
};

const en: SegmentDict = {
  // ────────────────────────────────────────────────────────────
  contractors: {
    navLabel: "Contractors & construction",
    navHint: "Quotes, bigger jobs and clients who actually pay",
    icon: "building",
    meta: {
      title:
        "Websites for Contractors | ProCode Dev",
      description:
        "Website, Google Business Profile and quote form for contractors and builders. Stop losing big jobs because your business looks informal online.",
      keywords:
        "contractor website, construction company website, plumber website, electrician website, roofing company website, contractor marketing, contractor lead generation, local SEO for construction",
    },
    heroEyebrow: "// contractors & construction",
    heroTitleA: "Digital systems for",
    heroHighlight: "contractors and builders",
    heroSubtitle:
      "Your work shows in the finished job, but the client decides before they ever see it: they decide with what they find on Google.",
    intro:
      "Website, Google Business Profile, quote form and follow-up for contractors, builders, remodeling, plumbing, electrical, roofing and landscaping.",
    projectId: "trejo",
    projectEyebrow: "// a project in your industry",
    projectTitle: "A business in your trade that's already",
    projectHighlight: "working online",
    projectWhy:
      "Trejo Landscaping is exactly the contractor case: a trade that lived on referrals and now takes quote requests straight from its own site.",
    projectPoints: [
      "Finished work with real photos, the proof a client wants before letting you into their home.",
      "A quote form wired to WhatsApp, so you don't lose the person who writes after hours.",
      "Structured by service, so every type of job sells with its own message.",
    ],
    painTitle: "What I see over and over",
    painSubtitle:
      "None of these problems is solved by a prettier page. They're solved with structure.",
    pains: [
      "You live on referrals: when the phone goes quiet, there's no second source of work.",
      "The client who pays well compares you to a company with a website, reviews and visible insurance.",
      "You answer the same messages: «what do you charge?», «do you come to my area?», «can you send a quote?».",
      "You quote jobs that were never going to close because nobody asked about budget or area before you drove 40 minutes.",
      "You finish excellent work and end up with no organized photos and no review requested.",
    ],
    systemTitle: "What a contractor website includes",
    systemSubtitle:
      "The same applies to a plumber website, an electrician website or a roofing company website, and to contractor lead generation of any trade: the example changes, not the structure.",
    system: [
      {
        icon: "layout",
        title: "A page per service, not one page for «construction»",
        description:
          "Kitchen remodel, full bathroom, roofing, concrete, fencing, additions.",
      },
      {
        icon: "clipboard-check",
        title: "A quote form that filters before you drive",
        description:
          "Job type, ZIP code, photos of the space, rough measurements, start timing and budget range.",
      },
      {
        icon: "star",
        title: "A work gallery and before/after that sells on its own",
        description:
          "Your jobs organized by type, with real photos, city and one line about what you solved.",
      },
      {
        icon: "shield",
        title: "License, insurance and warranty in plain sight",
        description:
          "License, liability insurance, years in business, areas you cover and what happens if something goes wrong.",
      },
      {
        icon: "target",
        title: "A Google Business Profile working your area",
        description:
          "Optimized for «contractor near me» and its Spanish equivalent, with job-site photos, loaded services, service areas and a system to request reviews right at handover, when the client is happiest.",
      },
      {
        icon: "zap",
        title: "Contractor marketing (optional)",
        description:
          "Local campaigns and seasonal ads to fill the slow weeks. Hired separately, as a monthly plan with published pricing.",
      },
    ],
    cycleTitle: "Your building year, and what the system does in each stretch",
    cycleBody:
      "Weather runs your revenue.",
    cycleMonths: [
      {
        label: "Jan – Mar",
        note: "Interiors and remodeling; acquisition to fill the spring.",
      },
      {
        label: "Apr – Jun",
        note: "Peak season: automatic quoting and same-day replies.",
      },
      {
        label: "Jul – Sep",
        note: "Exteriors, roofing and concrete; reviews and referrals per job.",
      },
      {
        label: "Oct – Dec",
        note: "Maintenance, winter prep and reactivation of past clients.",
      },
    ],
    faqTitle: "Contractor website questions",
    faq: [
      {
        question: "All my work comes from referrals. Why a website?",
        answer:
          "Because the referral no longer closes on its own: the person who was referred to you looks you up on Google before calling, and what they find decides whether they dial. A site doesn't replace your referrals — it makes them convert, and gives you a second source when the phone goes quiet.",
      },
      {
        question: "Can I send photos from my phone?",
        answer:
          "Yes, and that's how we work. You send job photos over WhatsApp and I crop them, organize them by job type and upload them. No photographer needed and no computer skills required.",
      },
      {
        question: "Does this work if I'm solo or have two helpers?",
        answer:
          "That's where it pays off most. A solo contractor can't answer while on a roof: the form and the automatic reply are the assistant you can't hire yet.",
      },
      {
        question: "Can it be in English and Spanish?",
        answer:
          "Yes, and for most Hispanic contractors that's the right call: your current clients search in Spanish and the big jobs often come in English. Both versions are built on separate URLs so Google indexes each one.",
      },
    ],
    ctaTitle: "15 minutes before your next busy season",
    ctaBody:
      "I'll tell you what a client searching your trade in your city finds today, and which piece you're missing for them to pick you.",
  },

  // ────────────────────────────────────────────────────────────
  health: {
    navLabel: "Health & wellness",
    navHint: "A full calendar, patients who return and fewer messages",
    icon: "users",
    meta: {
      title:
        "Websites for Clinics & Practices | ProCode Dev",
      description:
        "Website, online booking and reminders for clinics, private practices and health professionals. Fewer repeated messages and fewer no-shows.",
      keywords:
        "clinic website, private practice website, nutritionist website, dentist website, online booking for patients, medical practice marketing, patient scheduling software",
    },
    heroEyebrow: "// health & wellness",
    heroTitleA: "Digital systems for",
    heroHighlight: "clinics and private practices",
    heroSubtitle:
      "A new patient evaluates you before they ever message: they look at your training, your reviews and whether they can book without asking about prices over chat.",
    intro:
      "Website, online booking, first-visit intake form, reminders and follow-up for clinics, private practices, nutritionists, dentists, psychologists, physical therapists and therapists.",
    projectId: "fersilva",
    projectEyebrow: "// a project in your industry",
    projectTitle: "A health practice that's already",
    projectHighlight: "working online",
    projectWhy:
      "Fernanda Silva is the private-practice case: she explained her service over chat again and again, and now patients arrive informed and book on their own.",
    projectPoints: [
      "Services explained with what's included and how long they take — that alone removes half the messages.",
      "Online booking so the patient picks a slot without having to ask you.",
      "Training and approach in plain sight, because in health trust is decided before first contact.",
    ],
    painTitle: "What I see over and over",
    painSubtitle:
      "None of these problems is solved by a prettier page. They're solved with structure.",
    pains: [
      "You explain the same thing a hundred times over chat: visit price, what's included, how long it takes, whether you take insurance.",
      "You lose patients who wrote on a Sunday night and didn't hear back until Tuesday.",
      "No-shows leave holes in your calendar that never get filled.",
      "The patient comes once and doesn't return, and nothing reminds them to.",
      "Your training and experience aren't visible anywhere, so you compete head-to-head with someone who just started.",
    ],
    systemTitle: "What a clinic website includes",
    systemSubtitle:
      "The same applies to a private practice website, a dentist website or a nutritionist website, with online booking for patients: the example changes, not the structure.",
    system: [
      {
        icon: "layout",
        title: "A page per service, not one page for «consultations»",
        description:
          "First visit, follow-up, packages, specific treatment.",
      },
      {
        icon: "calendar",
        title: "Online booking connected to your calendar",
        description:
          "The patient picks an open slot without asking you, with different blocks for first visits and follow-ups, and the appointment lands straight in your calendar.",
      },
      {
        icon: "clipboard-check",
        title: "First-visit intake before the appointment",
        description:
          "Details, reason for the visit, history and whatever else you need to ask, answered before the patient walks in.",
      },
      {
        icon: "repeat",
        title: "Reminders and patient win-back",
        description:
          "An automatic reminder 24 hours out to cut no-shows, and a note to patients who haven't been back in months that they can book their follow-up now.",
      },
      {
        icon: "shield",
        title: "Credentials, license and reviews in plain sight",
        description:
          "Your license, certifications, approach and real patient reviews, presented with professional judgment.",
      },
      {
        icon: "zap",
        title: "Medical practice marketing (optional)",
        description:
          "Campaigns for new patients in your area and seasonal reminders. Hired separately, as a monthly plan with published pricing.",
      },
    ],
    cycleTitle: "Your practice year, and what the system does in each stretch",
    cycleBody:
      "Health demand has clear peaks. The system uses them without you having to remember.",
    cycleMonths: [
      {
        label: "Jan – Mar",
        note: "New-patient peak: open calendar and acquisition at full tilt.",
      },
      {
        label: "Apr – Jun",
        note: "Follow-ups, packages and treatments sold to your current base.",
      },
      {
        label: "Jul – Sep",
        note: "Slow months: patient reactivation and content that attracts.",
      },
      {
        label: "Oct – Dec",
        note: "Year-end, check-ups and a calendar ready for January.",
      },
    ],
    faqTitle: "Clinic website questions",
    faq: [
      {
        question: "Should I publish prices or leave them off?",
        answer:
          "It depends on your practice, and we decide together. Publishing the first-visit price filters out people who were never going to book and removes half your messages. For treatments quoted case by case, we use ranges or «from», which gives clarity without boxing you in.",
      },
      {
        question: "Does online booking connect to what I already use?",
        answer:
          "Yes. It connects to your Google Calendar or the booking tool you already have, so you don't end up with two calendars that disagree. If you don't use one yet, I leave one set up.",
      },
      {
        question: "What about my patients' data?",
        answer:
          "The form collects the minimum needed for the first visit, over a secure connection and with a privacy notice. The full clinical record stays where you already manage it, not on the website.",
      },
      {
        question: "Can it be in English and Spanish?",
        answer:
          "Yes, and for a Hispanic practice in the U.S. that's usually the right call: your current patients search in Spanish and many new ones search in English. Both versions are built on separate URLs so Google indexes each one.",
      },
    ],
    ctaTitle: "15 minutes to review your calendar",
    ctaBody:
      "I'll tell you what a patient searching your specialty in your city finds today, and which piece you're missing for them to pick you.",
  },

  // ────────────────────────────────────────────────────────────
  professional: {
    navLabel: "Professional services",
    navHint: "Authority, qualified cases and consults that close",
    icon: "scale",
    meta: {
      title:
        "Websites for Professional Services | ProCode Dev",
      description:
        "Website and qualifying form for attorneys, consultants and insurance agents. Attract the right case and stop giving free consults with no filter.",
      keywords:
        "attorney website, law firm website, consultant website, insurance agent website, professional services marketing, client acquisition for attorneys, personal brand website",
    },
    heroEyebrow: "// professional services",
    heroTitleA: "Digital systems for",
    heroHighlight: "professional services",
    heroSubtitle:
      "When someone hires you they aren't buying hours: they're buying the confidence that you can solve their problem.",
    intro:
      "Website, client acquisition, qualifying form, scheduling and follow-up for attorneys, insurance agents, consultants, advisors and professionals who sell their judgment.",
    projectId: "cristian-posada",
    projectEyebrow: "// a project in your industry",
    projectTitle: "A professional who sells judgment, and",
    projectHighlight: "proves it on his site",
    projectWhy:
      "My own personal brand is the case of someone who doesn't sell a product but their work: track record, projects and content in one place that turns a visitor into a conversation.",
    projectPoints: [
      "Demonstrable authority — projects, track record and content — instead of adjectives.",
      "One hub every social link points to, instead of scattered profiles.",
      "Contact that opens WhatsApp with the message already written: no forms left unanswered.",
    ],
    painTitle: "What I see over and over",
    painSubtitle:
      "None of these problems is solved by a prettier page. They're solved with structure.",
    pains: [
      "You give free consults to people who were never going to hire you, and have no time left for the ones who would.",
      "Your experience and results aren't visible: you look the same as someone who opened last month.",
      "The prospect asks «what do you charge?» before understanding what you solve, and the conversation dies there.",
      "You send a proposal and never hear back, because nobody follows up.",
      "Your content and reputation live on social media, not on a site that works for you.",
    ],
    systemTitle: "What an attorney website includes",
    systemSubtitle:
      "The same applies to a law firm website, an insurance agent website and to client acquisition for attorneys: the example changes, not the structure.",
    system: [
      {
        icon: "layout",
        title: "A page per practice area, not one page for «services»",
        description:
          "Every area with its own page, its own language and its own use case.",
      },
      {
        icon: "clipboard-check",
        title: "A form that qualifies before the consult",
        description:
          "Matter type, current situation, urgency and budget or expectation.",
      },
      {
        icon: "briefcase",
        title: "Demonstrable authority, not adjectives",
        description:
          "Years in practice, credentials, types of matters resolved, publications and reviews.",
      },
      {
        icon: "calendar",
        title: "Consult booking, connected and filtered",
        description:
          "An initial consult booked online with the qualifying questions up front, so only someone with a matter you can take gets a slot.",
      },
      {
        icon: "repeat",
        title: "Proposal follow-up that doesn't fall through",
        description:
          "Every prospect who asked for a proposal and went quiet gets followed up on the right days, with a message that doesn't read like collections.",
      },
      {
        icon: "zap",
        title: "Professional services marketing (optional)",
        description:
          "Campaigns and content to attract the kind of case that's worth your time. Hired separately, as a monthly plan with published pricing.",
      },
    ],
    cycleTitle: "Your professional year, and what the system does in each stretch",
    cycleBody:
      "Your demand isn't even, but it is predictable. The system uses the good months and holds up the slow ones.",
    cycleMonths: [
      {
        label: "Jan – Mar",
        note: "Year kickoff: prospects deciding and fresh budgets.",
      },
      {
        label: "Apr – Jun",
        note: "Active acquisition, content and proposals with follow-up.",
      },
      {
        label: "Jul – Sep",
        note: "Slow months: client reactivation and paused matters.",
      },
      {
        label: "Oct – Dec",
        note: "Year-end, renewals and a calendar ready for January.",
      },
    ],
    faqTitle: "Attorney and consultant website questions",
    faq: [
      {
        question: "My work is sensitive. Can I show cases?",
        answer:
          "Without names or identifying details. We show matter types, general context and outcome, which is what a prospect needs to recognize themselves. We never publish anything that compromises a client.",
      },
      {
        question: "Wouldn't it be better to charge for the first consult?",
        answer:
          "In many cases yes, and the system supports it: paid consults with booking and online payment. We decide on the call based on your matter type and volume. What doesn't work is giving free consults with no filter at all.",
      },
      {
        question: "Does this work if I practice solo, with no team?",
        answer:
          "That's where it pays off most. A solo professional can't answer while in a hearing or with a client: pre-qualification and automatic follow-up are the assistant you can't hire yet.",
      },
      {
        question: "Can it be in English and Spanish?",
        answer:
          "Yes, and for a Hispanic professional in the U.S. that's usually the right call: your current clients search in Spanish and many new ones search in English. Both versions are built on separate URLs so Google indexes each one.",
      },
    ],
    ctaTitle: "15 minutes to review your client acquisition",
    ctaBody:
      "I'll tell you what someone searching your service in your city finds today, and which piece you're missing for them to pick you.",
  },

  // ────────────────────────────────────────────────────────────
  realEstate: {
    navLabel: "Real estate",
    navHint: "Listings, qualified leads and buyers who come back",
    icon: "map-pin",
    meta: {
      title:
        "Websites for Real Estate Agents | ProCode Dev",
      description:
        "Website with a property catalog, detailed listing pages and direct lead capture for real estate agents. Stop living inside the portals.",
      keywords:
        "real estate agent website, brokerage website, property catalog website, real estate marketing, real estate lead generation, realtor website",
    },
    heroEyebrow: "// real estate",
    heroTitleA: "Digital systems for",
    heroHighlight: "real estate agents",
    heroSubtitle:
      "Your listings live on portals and social media, but your brand lives nowhere.",
    intro:
      "Website with property catalog, detailed listing pages, qualified lead form, showing scheduler and follow-up for real estate agents, brokerages and developers.",
    projectId: "demo-inmobiliaria",
    projectEyebrow: "// a project in your industry",
    projectTitle: "What a well-structured real estate",
    projectHighlight: "catalog looks like",
    projectWhy:
      "A complete real estate site with a property catalog, detailed listing pages and direct lead capture.",
    projectPoints: [
      "Its own page per property, with gallery, features and map: a link that looks professional when you send it over WhatsApp.",
      "Filters by area, price and deal type, so the buyer lands straight on what they want.",
      "Direct lead capture, so the contact doesn't stay with the portal.",
    ],
    painTitle: "What I see over and over",
    painSubtitle:
      "None of these problems is solved by a prettier page. They're solved with structure.",
    pains: [
      "Your whole inventory lives on a portal that charges you for the leads you generated.",
      "You get messages from people who don't qualify and lose whole afternoons showing homes to buyers who can't buy.",
      "Every listing goes out as loose photos on social and disappears from the feed in two days.",
      "The buyer who didn't buy this year never hears from you again, even though they do buy the next one.",
      "Your experience and closed deals aren't visible, so you compete with someone who just got licensed.",
    ],
    systemTitle: "What a real estate agent website includes",
    systemSubtitle:
      "The same applies to a realtor website or a brokerage website with a property catalog website and real estate lead generation: the example changes, not the structure.",
    system: [
      {
        icon: "layout",
        title: "A catalog with its own page per property",
        description:
          "Every property with its own page: gallery, floor plan, features, neighborhood, map and price.",
      },
      {
        icon: "search",
        title: "Filters that take the buyer to what they want",
        description:
          "By area, price, bedrooms and deal type.",
      },
      {
        icon: "clipboard-check",
        title: "A form that qualifies before the showing",
        description:
          "Budget, financing — loan, cash or pre-approved —, area and buying timeline.",
      },
      {
        icon: "briefcase",
        title: "Your agent profile, not just your inventory",
        description:
          "Who you are, how many deals you've closed, which areas you specialize in and what your clients say.",
      },
      {
        icon: "repeat",
        title: "Follow-up for long-cycle buyers",
        description:
          "A buyer can take a year to decide.",
      },
      {
        icon: "zap",
        title: "Real estate marketing (optional)",
        description:
          "Per-property and per-area campaigns to win buyers and sellers. Hired separately, as a monthly plan with published pricing.",
      },
    ],
    cycleTitle: "Your real estate year, and what the system does in each stretch",
    cycleBody:
      "The market has clear seasonality. The system works the full cycle, even while you're closing.",
    cycleMonths: [
      {
        label: "Jan – Mar",
        note: "Buyers planning the year: acquisition and a waiting list.",
      },
      {
        label: "Apr – Jun",
        note: "Peak moving season: showings, filters and fast replies.",
      },
      {
        label: "Jul – Sep",
        note: "Summer closings, reviews and new listing acquisition.",
      },
      {
        label: "Oct – Dec",
        note: "Slow cycle: neighborhood content and follow-up on warm leads.",
      },
    ],
    faqTitle: "Real estate agent website questions",
    faq: [
      {
        question: "Can I add and remove listings myself?",
        answer:
          "Yes. I leave you a panel where you upload photos, price and features without touching code, or we connect it to the inventory source you already use. We decide based on how many properties you move per month.",
      },
      {
        question: "Is it worth it if I already post on the portals?",
        answer:
          "Portals give you volume, but the lead is theirs and they share it with other agents. Your site is where that same lead finds you, sees your track record and writes to you directly. One doesn't replace the other: the site is what keeps the portal from being your only source.",
      },
      {
        question: "Does it work if I'm under a brand or franchise?",
        answer:
          "Yes, and it's common. We build your personal presence while respecting the brand's guidelines. A buyer picks an agent with a name and a face, not a logo.",
      },
      {
        question: "Can it be in English and Spanish?",
        answer:
          "Yes, and for a Hispanic agent in the U.S. that's usually the right call: your current clients search in Spanish and many new buyers search in English. Both versions are built on separate URLs so Google indexes each one.",
      },
    ],
    ctaTitle: "15 minutes to review your catalog",
    ctaBody:
      "I'll tell you what a buyer searching your area finds today, and which piece you're missing for them to write to you.",
  },

  // ────────────────────────────────────────────────────────────
  accounting: {
    navLabel: "Accounting & tax",
    navHint: "Busy season, year-round clients and less manual work",
    icon: "calculator",
    meta: {
      title:
        "Websites for Accounting Firms | ProCode Dev",
      description:
        "Website, document intake and follow-up for accounting practices, CPAs and tax preparers. Reach the season with your calendar already filling up.",
      keywords:
        "accounting firm website, tax preparer website, CPA website, bookkeeper website, enrolled agent website, tax practice marketing, document intake for accountants",
    },
    heroEyebrow: "// accounting & tax",
    heroTitleA: "Digital systems for",
    heroHighlight: "accounting and tax practices",
    heroSubtitle:
      "Your year concentrates into a few weeks and the rest of the calendar goes quiet.",
    intro:
      "Website, Google Business Profile, document intake, scheduling and follow-up for accounting firms, tax preparers, enrolled agents, CPAs and bookkeepers.",
    projectId: "demo-taxpro",
    projectEyebrow: "// a project in your industry",
    projectTitle: "What a well-presented accounting",
    projectHighlight: "practice looks like",
    projectWhy:
      "A bilingual site for an accounting and tax practice: separate services, consult booking and trust-focused lead capture.",
    projectPoints: [
      "A page per service, so the business return doesn't compete with the individual one.",
      "Consult booking and lead capture built around trust, which is what decides in this industry.",
      "An English and a Spanish version, on separate URLs so Google indexes both.",
    ],
    painTitle: "What I see over and over",
    painSubtitle:
      "None of these problems is solved by a prettier page. They're solved with structure.",
    pains: [
      "Most of your revenue lands in a few weeks, and the rest of the year the operation goes dark.",
      "Business clients — the ones who really pay — go with whoever looks like a real firm, not whoever knows the craft best.",
      "You answer the same messages fifty times: which documents, how much, when will it be ready.",
      "In the middle of the season you lose prospects because nobody had time to answer them within 24 hours.",
      "Last year's client didn't come back and you found out late, after they'd already filed with someone else.",
    ],
    systemTitle: "What an accounting firm website includes",
    systemSubtitle:
      "The same applies to a CPA website, a bookkeeper website or a tax preparer website, with document intake for accountants: the example changes, not the structure.",
    system: [
      {
        icon: "layout",
        title: "A page per service, not one page for «accounting»",
        description:
          "Individual returns, business returns, monthly bookkeeping, payroll, filings and representation.",
      },
      {
        icon: "clipboard-check",
        title: "Intake that asks for documents before the appointment",
        description:
          "A form per service type with the document list, secure file upload and qualifying questions.",
      },
      {
        icon: "calendar",
        title: "Scheduling that survives the season",
        description:
          "Online booking connected to your calendar, with separate blocks for individuals and businesses, automatic reminders and a missing-documents notice 48 hours out.",
      },
      {
        icon: "repeat",
        title: "Reactivation of last year's base",
        description:
          "Before the season starts, your past clients get the note that you're taking appointments, with the booking link.",
      },
      {
        icon: "target",
        title: "A Google Business Profile working through the season",
        description:
          "Optimized for searches for your service in your city, in English and Spanish, with posts during the season, extended hours and a system to request reviews right when the client is happiest.",
      },
      {
        icon: "zap",
        title: "Tax practice marketing (optional)",
        description:
          "Pre-season campaigns and content that brings in new returns. Hired separately, as a monthly plan with published pricing.",
      },
    ],
    cycleTitle: "Your calendar, and what the system does in each stretch",
    cycleBody:
      "None of this gets improvised mid-season.",
    cycleMonths: [
      {
        label: "Nov – Dec",
        note: "Reactivating past clients, reviews and an open calendar.",
      },
      {
        label: "Jan – Apr",
        note: "Peak acquisition, automatic intake and hands-off follow-up.",
      },
      {
        label: "May – Aug",
        note: "Selling bookkeeping and payroll to the existing base.",
      },
      {
        label: "Sep – Oct",
        note: "Extensions, content and prep for the next season.",
      },
    ],
    faqTitle: "Accounting firm website questions",
    faq: [
      {
        question: "I'm mid-season. Is it worth starting now?",
        answer:
          "It depends on the month. In season we prioritize what launches in two weeks and produces immediately: Google Business Profile, online booking, intake and the WhatsApp button with the message already written. The full site we do when the load drops, with real season data in hand.",
      },
      {
        question: "Does this help if I work alone, from home?",
        answer:
          "That's exactly where it pays off most. A solo preparer has nobody answering while they're working on a return: automation is the assistant you can't hire mid-season.",
      },
      {
        question: "Does it work the same in Mexico as in the U.S.?",
        answer:
          "The system is the same; the services and each country's vocabulary change. I work with practices on both sides and adapt the structure, the service names and the calendar to where you are.",
      },
      {
        question: "Can it be in English and Spanish?",
        answer:
          "Yes, and for most Hispanic practices in the U.S. it's the right call: current clients search in Spanish and many new ones search in English. Both versions are built on separate URLs so Google indexes each one.",
      },
    ],
    ctaTitle: "15 minutes before the season starts",
    ctaBody:
      "I'll tell you which piece your practice is missing today and what can be ready before your busy month begins.",
  },
};

export const segments: Record<Lang, SegmentDict> = { es, en };

export function getSegment(lang: Lang, key: SegmentKey): Segment {
  return segments[lang][key];
}
