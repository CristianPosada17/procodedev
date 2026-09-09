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

import type { Lang, PageContextCopy, SegmentKey } from "./ui";

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
  /** Bloque de contexto al pie: el texto largo que salió del hero. */
  pageContext: PageContextCopy;
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
        "Diseño Web para Contratistas y Constructoras | ProCode Dev",
      description:
        "Diseño web para constructoras y contratistas: sitio, Perfil de Empresa en Google, formulario de cotización y SEO local para contratistas. Precios públicos.",
      keywords:
        "diseño web para constructoras, páginas web para contratistas, página web para contratistas, diseño web para empresas de remodelación, marketing digital para contratistas, SEO local para contratistas, agencia de marketing para contratistas, página web para plomeros, página web para electricistas, página web para techos, generación de clientes para contratistas",
    },
    heroEyebrow: "// contratistas y construcción",
    heroTitleA: "Diseño web para",
    heroHighlight: "contratistas y constructoras",
    heroSubtitle: "Te eligen antes de conocerte.",
    intro:
      "Sitio web, Perfil de Empresa en Google, formulario de cotización y seguimiento para contratistas, constructoras, remodelación, plomería, electricidad, techos y jardinería.",
    projectId: "izcalli",
    projectEyebrow: "// proyecto en tu giro",
    projectTitle: "Una constructora de tu giro que ya está",
    projectHighlight: "trabajando en línea",
    projectWhy:
      "Constructora Izcalli es el caso exacto de una empresa de obra: años de trabajo entregado que solo existía en fotos sueltas, y que hoy se muestra como un portafolio que el cliente puede abrir antes de la primera junta.",
    projectPoints: [
      "Nueve obras construidas con ficha propia: la prueba que pide quien está por confiarte un proyecto grande.",
      "Datos formales a la vista —razón social, representante legal, dirección y teléfono—, que es lo primero que revisa un cliente institucional.",
      "Contacto directo desde cualquier punto del sitio, sin formularios que terminen en un correo sin leer.",
    ],
    painTitle: "Lo que veo una y otra vez",
    painSubtitle:
      "Ninguno se resuelve con una página más bonita. Se resuelven con estructura, que es de lo que trata el marketing digital para contratistas cuando se hace en serio.",
    pains: [
      "Vives de recomendaciones: cuando el teléfono deja de sonar, no hay una segunda fuente de trabajos.",
      "El cliente que paga bien te compara con una empresa que tiene página, reseñas y seguro visible.",
      "Contestas los mismos mensajes: «¿cuánto cobras?», «¿vienes a mi zona?», «¿mandas cotización?».",
      "Cotizas trabajos que nunca iban a cerrar porque nadie preguntó presupuesto ni zona antes de que manejaras 40 minutos.",
      "Terminas una obra excelente y no queda ni una foto ordenada ni una reseña pedida.",
    ],
    systemTitle: "Qué incluye una página web para contratistas",
    systemSubtitle:
      "Lo mismo aplica al diseño web para constructoras y al diseño web para empresas de remodelación: cambia el ejemplo, no la estructura.",
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
      "El clima manda en tu facturación, y el SEO local para contratistas tarda meses en madurar. Por eso el sistema se monta antes y trabaja solo cuando tú estás en obra de sol a sol.",
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
    faqTitle: "Dudas sobre páginas web para contratistas",
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
      {
        question: "¿Sirve igual para plomería, electricidad o techos?",
        answer:
          "Sí. Una página web para plomeros tiene la misma estructura que una página web para electricistas o una página web para techos: cambian el vocabulario del servicio, las fotos de obra y las preguntas del formulario. Lo que no cambia es cómo decide el cliente.",
      },
      {
        question: "¿Cómo conseguir clientes para una constructora sin depender de la recomendación?",
        answer:
          "Con tres piezas trabajando juntas: aparecer cuando alguien busca tu oficio en tu ciudad, un formulario que califique antes de que manejes, y seguimiento automático de quien no cerró a la primera. Esa es la generación de clientes para contratistas que sostiene una temporada floja.",
      },
    ],
    pageContext: {
      title: "Diseño web y marketing para contratistas",
      paragraphs: [
        "Tu trabajo se ve en la obra terminada, pero el cliente decide antes de verla: decide con lo que encuentra en Google. Por eso el diseño web para contratistas empieza por las fotos de antes y después, la zona que cubres y un formulario que pida lo que de verdad necesitas para cotizar.",
        "Hago páginas web para contratistas, diseño web para constructoras y diseño web para empresas de remodelación, incluida la página web para plomeros, la página web para electricistas y la página web para techos. El oficio cambia el orden de las secciones y el vocabulario, no la calidad del sitio.",
        "El sitio es la mitad del trabajo. El marketing digital para contratistas y el SEO local para contratistas son lo que hace que te encuentren cuando alguien busca tu servicio en tu ciudad, y la generación de clientes para contratistas se mide en llamadas, no en visitas. En una agencia de marketing para contratistas de este tamaño siempre hablas con quien ejecuta.",
      ],
    },
    ctaTitle: "20 minutos antes de tu próxima temporada fuerte",
    ctaBody:
      "Te digo qué encuentra hoy un cliente que busca tu oficio en tu ciudad y qué pieza te falta. Hablas directo con el dueño de la agencia de marketing para contratistas que va a hacer el trabajo, no con un vendedor.",
  },

  // ────────────────────────────────────────────────────────────
  health: {
    navLabel: "Salud y bienestar",
    navHint: "Agenda llena, pacientes que regresan y menos mensajes",
    icon: "users",
    meta: {
      title:
        "Diseño Web para Consultorios y Psicólogos | ProCode Dev",
      description:
        "Diseño web para consultorios, psicólogos, nutriólogos y terapeutas: agenda en línea, recordatorios y SEO local para consultorios. Precios públicos en USD.",
      keywords:
        "diseño web para consultorios, diseño web para psicólogos, páginas web para nutriólogos, diseño web para terapeutas, marketing digital para psicólogos, SEO local para consultorios, agencia de marketing para consultorios, página web para consultorios, agenda en línea para pacientes, cómo conseguir más pacientes",
    },
    heroEyebrow: "// salud y bienestar",
    heroTitleA: "Diseño web para",
    heroHighlight: "consultorios y clínicas",
    heroSubtitle: "Agendan sin preguntar precios.",
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
      "Ninguno se resuelve con una página más bonita. Se resuelven con estructura, que es de lo que trata el marketing digital para psicólogos, nutriólogos y consultorios cuando se hace en serio.",
    pains: [
      "Explicas por mensaje lo mismo cien veces: precio de la consulta, qué incluye, cuánto dura, si aceptas seguro.",
      "Pierdes pacientes que escribieron un domingo por la noche y no recibieron respuesta hasta el martes.",
      "Las citas perdidas te cuestan huecos en la agenda que ya no se llenan.",
      "El paciente viene una vez y no regresa, y no hay nada que se lo recuerde.",
      "Tu formación y tu experiencia no se ven por ningún lado, y compites de tú a tú con quien apenas empieza.",
    ],
    systemTitle: "Qué incluye una página web para consultorios y clínicas",
    systemSubtitle:
      "Lo mismo aplica al diseño web para psicólogos, al diseño web para terapeutas y a las páginas web para nutriólogos, con agenda en línea para pacientes: cambia el ejemplo, no la estructura.",
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
      "La demanda de salud tiene picos claros, y el SEO local para consultorios tarda meses en madurar. El sistema se monta antes y aprovecha los picos sin que tú tengas que acordarte.",
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
    faqTitle: "Dudas sobre diseño web para consultorios y clínicas",
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
      {
        question: "¿Cómo conseguir más pacientes desde internet?",
        answer:
          "Apareciendo cuando alguien busca tu especialidad en tu ciudad, y quitando la fricción entre esa búsqueda y la cita. En la práctica: una página por especialidad, agenda en línea abierta las 24 horas y recordatorios que reducen las faltas. Sin eso, más visitas solo significa más mensajes sin contestar.",
      },
    ],
    pageContext: {
      title: "Diseño web y marketing para consultorios y clínicas",
      paragraphs: [
        "Un paciente nuevo te evalúa antes de escribirte: mira tu formación, tus reseñas y si puede agendar sin preguntar precios por mensaje. El diseño web para consultorios pone esas tres cosas al frente, y la agenda en línea para pacientes cierra la cita sin que tengas que contestar el teléfono.",
        "Cubro diseño web para psicólogos, diseño web para terapeutas y páginas web para nutriólogos, además de la página web para consultorios de especialidad. El tono cambia según el paciente; la estructura que convierte es la misma.",
        "Del lado de captación, el marketing digital para psicólogos y el SEO local para consultorios son la respuesta real a cómo conseguir más pacientes: aparecer en la búsqueda del barrio, mantener las reseñas vivas y responder rápido. En una agencia de marketing para consultorios el seguimiento va automatizado, no depende de que alguien se acuerde.",
      ],
    },
    ctaTitle: "20 minutos para revisar tu agenda",
    ctaBody:
      "Te digo qué encuentra hoy un paciente que busca tu especialidad en tu ciudad y qué pieza te falta. Hablas directo con el dueño de la agencia de marketing para consultorios que va a hacer el trabajo, no con un vendedor.",
  },

  // ────────────────────────────────────────────────────────────
  professional: {
    navLabel: "Servicios profesionales",
    navHint: "Autoridad, casos calificados y consultas que sí cierran",
    icon: "scale",
    meta: {
      title:
        "Diseño Web para Abogados y Consultores | ProCode Dev",
      description:
        "Diseño web para abogados, consultores y agentes de seguros: formulario de calificación, marketing digital para consultores y SEO local. Precios públicos.",
      keywords:
        "diseño web para abogados, página web para abogados, sitio web para consultores, página web para agentes de seguros, marketing digital para consultores, SEO local para servicios profesionales, agencia de marketing para abogados, captación de clientes para abogados, marca personal profesional",
    },
    heroEyebrow: "// servicios profesionales",
    heroTitleA: "Diseño web para",
    heroHighlight: "abogados y consultores",
    heroSubtitle: "Confianza antes de la llamada.",
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
      "Ninguno se resuelve con una página más bonita. Se resuelven con estructura, que es de lo que trata el marketing digital para consultores y despachos profesionales cuando se hace en serio.",
    pains: [
      "Das consultas gratis a personas que nunca iban a contratarte, y no te queda tiempo para las que sí.",
      "Tu experiencia y tus resultados no se ven: pareces igual que cualquier otro que abrió el mes pasado.",
      "El prospecto pregunta «¿cuánto cobras?» antes de entender lo que resuelves, y la conversación muere ahí.",
      "Mandas una propuesta y no vuelves a saber nada, porque nadie hace el seguimiento.",
      "Tu contenido y tu reputación viven en redes sociales, no en un sitio que trabaje para ti.",
    ],
    systemTitle: "Qué incluye una página web para abogados y consultores",
    systemSubtitle:
      "Lo mismo aplica al diseño web para abogados, a un sitio web para consultores, a una página web para agentes de seguros y a una web de marca personal profesional: cambia el ejemplo, no la estructura.",
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
      "Tu demanda no es pareja, pero sí es previsible. El SEO local para servicios profesionales tarda meses en madurar: el sistema aprovecha los meses buenos y sostiene los flojos.",
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
    faqTitle: "Dudas sobre diseño web para abogados y consultores",
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
      {
        question: "¿Cómo conseguir clientes siendo abogado o consultor independiente?",
        answer:
          "Con una página por área de práctica en vez de una sola de «servicios», un formulario que califique el caso antes de que agendes, y seguimiento de quien preguntó y no volvió. La captación de clientes para abogados falla casi siempre en el tercer punto, no en el primero.",
      },
    ],
    pageContext: {
      title: "Diseño web y marketing para servicios profesionales",
      paragraphs: [
        "Cuando alguien te contrata no compra horas: compra la confianza de que sabes resolver su problema. El diseño web para abogados y el sitio web para consultores se construyen alrededor de esa confianza — casos, credenciales y una marca personal profesional que no parezca una plantilla.",
        "Eso incluye la página web para abogados, el sitio del despacho, la página web para agentes de seguros y el del consultor independiente. Comparten el mismo problema: mucha competencia y muy poca diferencia visible desde fuera.",
        "El marketing digital para consultores y el SEO local para servicios profesionales son lo que llena la agenda, y la captación de clientes para abogados casi siempre se rompe en el seguimiento, no en la publicidad. En una agencia de marketing para abogados eso es lo primero que hay que automatizar.",
      ],
    },
    ctaTitle: "20 minutos para revisar tu captación",
    ctaBody:
      "Te digo qué encuentra hoy alguien que busca tu servicio en tu ciudad y qué pieza te falta. Hablas directo con el dueño de la agencia de marketing para abogados y consultores que va a hacer el trabajo, no con un vendedor.",
  },

  // ────────────────────────────────────────────────────────────
  realEstate: {
    navLabel: "Inmobiliarias",
    navHint: "Catálogo, prospectos calificados y compradores que vuelven",
    icon: "map-pin",
    meta: {
      title:
        "Diseño Web para Inmobiliarias y Asesores | ProCode Dev",
      description:
        "Diseño web para inmobiliarias y asesores inmobiliarios: catálogo de propiedades, captación directa y SEO local para inmobiliarias. Deja los portales atrás.",
      keywords:
        "diseño web para inmobiliarias, páginas web para asesores inmobiliarios, página web para inmobiliarias, marketing digital para inmobiliarias, SEO local para inmobiliarias, agencia de marketing inmobiliario, catálogo de propiedades en línea, landing pages para propiedades, generación de prospectos inmobiliarios, cómo generar prospectos inmobiliarios",
    },
    heroEyebrow: "// inmobiliarias",
    heroTitleA: "Diseño web para",
    heroHighlight: "inmobiliarias y asesores",
    heroSubtitle: "Tu marca, no solo portales.",
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
      "Ninguno se resuelve con una página más bonita. Se resuelven con estructura, que es de lo que trata el marketing digital para inmobiliarias cuando se hace en serio.",
    pains: [
      "Todo tu inventario vive en un portal que te cobra por los prospectos que tú generaste.",
      "Recibes mensajes de gente que no califica y pierdes tardes enteras enseñando propiedades a quien no puede comprar.",
      "Cada propiedad se anuncia con fotos sueltas en redes y desaparece del muro en dos días.",
      "El comprador que no compró este año no vuelve a saber de ti, aunque sí compre el siguiente.",
      "Tu experiencia y tus operaciones cerradas no se ven, y compites con quien acaba de sacar la licencia.",
    ],
    systemTitle: "Qué incluye una página web para inmobiliarias",
    systemSubtitle:
      "Lo mismo aplica al diseño web para inmobiliarias con catálogo de propiedades en línea y a las landing pages para propiedades sueltas: cambia el ejemplo, no la estructura.",
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
      "El mercado tiene estacionalidad clara y el SEO local para inmobiliarias tarda meses en madurar. El sistema trabaja el ciclo completo, incluso cuando tú estás cerrando.",
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
    faqTitle: "Dudas sobre páginas web para asesores inmobiliarios",
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
      {
        question: "¿Cómo generar prospectos inmobiliarios sin depender de los portales?",
        answer:
          "Teniendo catálogo propio, fichas que se puedan compartir por WhatsApp y un formulario que distinga a quien quiere comprar de quien quiere vender. La generación de prospectos inmobiliarios que sí se sostiene es la que llega a tu sitio, no la que renta un portal mes con mes.",
      },
    ],
    pageContext: {
      title: "Diseño web y marketing para inmobiliarias",
      paragraphs: [
        "Tus propiedades viven en portales y en redes, pero tu marca no vive en ninguna parte. El diseño web para inmobiliarias te da un catálogo de propiedades en línea propio, con tu nombre arriba y sin que el portal te cobre por el prospecto que tú generaste.",
        "Hago páginas web para asesores inmobiliarios y la página web para inmobiliarias con equipo, más landing pages para propiedades cuando hay una promoción concreta que empujar.",
        "El marketing digital para inmobiliarias y el SEO local para inmobiliarias son la base de una generación de prospectos inmobiliarios sostenida. Si te preguntas cómo generar prospectos inmobiliarios sin comprarlos cada mes, la respuesta es tu propio sitio más seguimiento automático — y eso es lo que hace una agencia de marketing inmobiliario que se queda a medir los resultados.",
      ],
    },
    ctaTitle: "20 minutos para revisar tu catálogo",
    ctaBody:
      "Te digo qué encuentra hoy un comprador que busca en tu zona y qué pieza te falta. Hablas directo con el dueño de la agencia de marketing inmobiliario que va a hacer el trabajo, no con un vendedor.",
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
        "Diseño Web para Contadores y Despachos | ProCode Dev",
      description:
        "Diseño web para contadores, despachos contables y preparadores de impuestos: intake de documentos, seguimiento y SEO local para contadores. Precios públicos.",
      keywords:
        "diseño web para contadores, diseño web para despachos contables, páginas web para preparadores de impuestos, páginas web para bookkeepers, marketing digital para contadores, SEO local para contadores, agencia de marketing para despachos contables, página web para despachos contables, intake de documentos, cómo conseguir clientes para un despacho contable",
    },
    heroEyebrow: "// contabilidad e impuestos",
    heroTitleA: "Diseño web para",
    heroHighlight: "contadores y despachos contables",
    heroSubtitle: "Clientes todo el año.",
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
      "Ninguno se resuelve con una página más bonita. Se resuelven con estructura, que es de lo que trata el marketing digital para contadores cuando se hace en serio.",
    pains: [
      "La mayor parte de tus ingresos entra en unas semanas, y el resto del año la operación se apaga.",
      "Los clientes con negocio —los que de verdad pagan— se van con quien se ve como un despacho formal, no con quien tiene más oficio.",
      "Contestas los mismos mensajes cincuenta veces: qué documentos, cuánto cuesta, cuándo estará listo.",
      "En plena temporada pierdes prospectos porque nadie tuvo tiempo de contestarles en 24 horas.",
      "El cliente del año pasado no regresó y te enteraste tarde, cuando ya presentó con otro.",
    ],
    systemTitle: "Qué incluye una página web para despachos contables",
    systemSubtitle:
      "Lo mismo aplica al diseño web para contadores, a las páginas web para preparadores de impuestos y a las páginas web para bookkeepers, con intake de documentos incluido: cambia el ejemplo, no la estructura.",
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
      "Nada de esto se improvisa en plena temporada, y el SEO local para contadores tarda meses en madurar.",
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
    faqTitle: "Dudas sobre diseño web para despachos contables",
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
      {
        question: "¿Cómo conseguir clientes para un despacho contable fuera de temporada?",
        answer:
          "Vendiendo lo que se contrata en marzo y en septiembre por igual: contabilidad mensual, nómina, planeación y regularización. Cada uno merece su propia página; una sola de «servicios contables» te deja compitiendo únicamente en enero y febrero.",
      },
    ],
    pageContext: {
      title: "Diseño web y marketing para despachos contables",
      paragraphs: [
        "Tu año se concentra en unas pocas semanas y el resto del calendario se apaga. El diseño web para contadores se plantea para las dos temporadas: captar fuerte cuando hay demanda y vender servicios recurrentes el resto del año.",
        "Trabajo diseño web para despachos contables, páginas web para preparadores de impuestos y páginas web para bookkeepers. La página web para despachos contables necesita intake de documentos seguro desde el primer día: el cliente sube lo que le pides sin cadenas de correos.",
        "El marketing digital para contadores y el SEO local para contadores empiezan meses antes de la temporada, porque no maduran en enero. Si buscas cómo conseguir clientes para un despacho contable, ese calendario es la mitad de la respuesta y responder rápido es la otra. Una agencia de marketing para despachos contables tiene que cubrir las dos.",
      ],
    },
    ctaTitle: "20 minutos antes de que empiece la temporada",
    ctaBody:
      "Te digo qué pieza le falta a tu despacho hoy y qué se puede tener listo antes de tu mes fuerte. Hablas directo con el dueño de la agencia de marketing para despachos contables que va a hacer el trabajo, no con un vendedor.",
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
        "Contractor Website Design | ProCode Dev",
      description:
        "Contractor website design for construction, remodeling and roofing companies: quote forms, Google Business Profile and local SEO for contractors in the U.S.",
      keywords:
        "contractor website design, construction company website design, remodeling contractor website design, roofing company website design, digital marketing for contractors, local SEO for contractors, contractor marketing agency, contractor lead generation, plumber website, electrician website",
    },
    heroEyebrow: "// contractors & construction",
    heroTitleA: "Contractor",
    heroHighlight: "website design",
    heroSubtitle: "Chosen before they meet you.",
    intro:
      "Website, Google Business Profile, quote form and follow-up for contractors, builders, remodeling, plumbing, electrical, roofing and landscaping.",
    projectId: "izcalli",
    projectEyebrow: "// a project in your industry",
    projectTitle: "A construction company in your industry that's already",
    projectHighlight: "working online",
    projectWhy:
      "Constructora Izcalli is exactly the builder's case: years of delivered work that only existed as loose photos, now shown as a portfolio any client can open before the first meeting.",
    projectPoints: [
      "Nine built projects, each with its own entry: the proof anyone wants before handing you a big job.",
      "Formal details in plain sight — legal name, legal representative, address and phone — the first thing an institutional client checks.",
      "Direct contact from anywhere on the site, with no form that ends up in an unread inbox.",
    ],
    painTitle: "What I see over and over",
    painSubtitle:
      "None of them is solved by a prettier page. They're solved with structure, which is what digital marketing for contractors actually means when it's done properly.",
    pains: [
      "You live on referrals: when the phone goes quiet, there's no second source of work.",
      "The client who pays well compares you to a company with a website, reviews and visible insurance.",
      "You answer the same messages: «what do you charge?», «do you come to my area?», «can you send a quote?».",
      "You quote jobs that were never going to close because nobody asked about budget or area before you drove 40 minutes.",
      "You finish excellent work and end up with no organized photos and no review requested.",
    ],
    systemTitle: "What a contractor website includes",
    systemSubtitle:
      "The same applies to construction company website design, remodeling contractor website design and roofing company website design: the example changes, not the structure.",
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
      "Weather runs your revenue, and local SEO for contractors takes months to mature. The system gets built before the season, not during it.",
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
    faqTitle: "Contractor website design questions",
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
      {
        question: "Does this work the same for plumbing, electrical or roofing?",
        answer:
          "Yes. A plumber website has the same structure as an electrician website or a roofing company site: the service vocabulary, the job photos and the form questions change. How the client decides does not.",
      },
      {
        question: "How do I get more contractor leads without relying on referrals?",
        answer:
          "Three pieces working together: showing up when someone searches your trade in your city, a form that qualifies before you drive out, and automatic follow-up with whoever didn't close the first time. That's the contractor lead generation that carries you through a slow season.",
      },
    ],
    pageContext: {
      title: "Contractor website design and marketing",
      paragraphs: [
        "Your work shows in the finished job, but the client decides before they ever see it: they decide with what they find on Google. So contractor website design starts with the before-and-after photos, the area you cover and a form that asks for what you actually need to quote.",
        "That covers construction company website design, remodeling contractor website design and roofing company website design, plus the plumber website and the electrician website. The trade changes the order of the sections, not the quality of the build.",
        "The site is half the job. Digital marketing for contractors and local SEO for contractors are what get you found when someone in your city searches your service, and contractor lead generation is measured in calls, not visits. With a contractor marketing agency this size you always talk to the person doing the work.",
      ],
    },
    ctaTitle: "20 minutes before your next busy season",
    ctaBody:
      "I'll tell you what a client searching your trade in your city finds today and which piece you're missing. You talk straight to the owner of the contractor marketing agency that will do the work, not to a salesperson.",
  },

  // ────────────────────────────────────────────────────────────
  health: {
    navLabel: "Health & wellness",
    navHint: "A full calendar, patients who return and fewer messages",
    icon: "users",
    meta: {
      title:
        "Therapist & Medical Practice Web Design | ProCode Dev",
      description:
        "Therapist, psychologist and nutritionist website design with online booking, reminders and local SEO for therapists. Public pricing, no 12-month contracts.",
      keywords:
        "therapist website design, psychologist website design, nutritionist website design, medical practice website design, healthcare website design, local SEO for therapists, marketing agency for therapists, digital marketing for therapists, online booking for patients, get more therapy clients",
    },
    heroEyebrow: "// health & wellness",
    heroTitleA: "Therapist",
    heroHighlight: "website design",
    heroSubtitle: "They book without asking.",
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
      "None of them is solved by a prettier page. They're solved with structure, which is what digital marketing for therapists actually means when it's done properly.",
    pains: [
      "You explain the same thing a hundred times over chat: visit price, what's included, how long it takes, whether you take insurance.",
      "You lose patients who wrote on a Sunday night and didn't hear back until Tuesday.",
      "No-shows leave holes in your calendar that never get filled.",
      "The patient comes once and doesn't return, and nothing reminds them to.",
      "Your training and experience aren't visible anywhere, so you compete head-to-head with someone who just started.",
    ],
    systemTitle: "What a clinic website includes",
    systemSubtitle:
      "The same applies to psychologist website design, nutritionist website design and medical practice website design, with online booking for patients: the example changes, not the structure.",
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
      "Health demand has clear peaks, and local SEO for therapists takes months to mature. The system gets built early and uses those peaks without you having to remember.",
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
    faqTitle: "Therapist website design questions",
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
      {
        question: "How do I get more therapy clients from the internet?",
        answer:
          "You get more therapy clients by showing up when someone searches your specialty in your city, and removing the friction between that search and the appointment. In practice: a page per specialty, booking open 24 hours a day and reminders that cut no-shows. Healthcare website design that skips those three only buys you more unanswered messages.",
      },
    ],
    pageContext: {
      title: "Therapist and medical practice website design",
      paragraphs: [
        "A new patient evaluates you before they ever message: they look at your training, your reviews and whether they can book without asking about prices over chat. Therapist website design puts those three things up front, and online booking for patients closes the appointment without a phone call.",
        "This covers psychologist website design, nutritionist website design, medical practice website design and healthcare website design more broadly. The tone changes with the patient; the structure that converts does not.",
        "On the acquisition side, digital marketing for therapists and local SEO for therapists are the real answer to how to get more therapy clients: show up in the neighborhood search, keep the reviews alive, reply fast. A marketing agency for therapists should automate the follow-up so it does not depend on someone remembering.",
      ],
    },
    ctaTitle: "20 minutes to review your calendar",
    ctaBody:
      "I'll tell you what a patient searching your specialty in your city finds today and which piece you're missing. You talk straight to the owner of the marketing agency for therapists that will do the work, not to a salesperson.",
  },

  // ────────────────────────────────────────────────────────────
  professional: {
    navLabel: "Professional services",
    navHint: "Authority, qualified cases and consults that close",
    icon: "scale",
    meta: {
      title:
        "Attorney & Consultant Website Design | ProCode Dev",
      description:
        "Attorney and consultant website design with a qualifying form, digital marketing for consultants and local SEO for professional services. Public pricing.",
      keywords:
        "attorney website design, law firm website design, consultant website design, insurance agent website, digital marketing for consultants, local SEO for professional services, marketing agency for attorneys, client acquisition for attorneys, personal brand website",
    },
    heroEyebrow: "// professional services",
    heroTitleA: "Attorney",
    heroHighlight: "website design",
    heroSubtitle: "Trust before the first call.",
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
      "None of them is solved by a prettier page. They're solved with structure, which is what digital marketing for consultants actually means when it's done properly.",
    pains: [
      "You give free consults to people who were never going to hire you, and have no time left for the ones who would.",
      "Your experience and results aren't visible: you look the same as someone who opened last month.",
      "The prospect asks «what do you charge?» before understanding what you solve, and the conversation dies there.",
      "You send a proposal and never hear back, because nobody follows up.",
      "Your content and reputation live on social media, not on a site that works for you.",
    ],
    systemTitle: "What an attorney website includes",
    systemSubtitle:
      "The same applies to law firm website design, consultant website design, an insurance agent website and a personal brand website: the example changes, not the structure.",
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
      "Your demand isn't even, but it is predictable. Local SEO for professional services takes months to mature, so the system uses the good months and holds up the slow ones.",
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
    faqTitle: "Attorney website design questions",
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
      {
        question: "How do I get clients as a solo attorney or consultant?",
        answer:
          "A page per practice area instead of one generic “services” page, a form that qualifies the matter before you book, and follow-up with whoever asked and never came back. Client acquisition for attorneys almost always breaks at the third point, not the first.",
      },
    ],
    pageContext: {
      title: "Attorney and consultant website design",
      paragraphs: [
        "When someone hires you they are not buying hours: they are buying the confidence that you can solve their problem. Attorney website design and consultant website design are built around that confidence — cases, credentials and a personal brand website that does not look like a template.",
        "That includes law firm website design, the independent consultant's site and the insurance agent website. They share one problem: a crowded market with very little visible difference between the options.",
        "Digital marketing for consultants and local SEO for professional services fill the calendar, and client acquisition for attorneys almost always breaks at the follow-up rather than at the ad. A marketing agency for attorneys should fix that part first.",
      ],
    },
    ctaTitle: "20 minutes to review your client acquisition",
    ctaBody:
      "I'll tell you what someone searching your service in your city finds today and which piece you're missing. You talk straight to the owner of the marketing agency for attorneys that will do the work, not to a salesperson.",
  },

  // ────────────────────────────────────────────────────────────
  realEstate: {
    navLabel: "Real estate",
    navHint: "Listings, qualified leads and buyers who come back",
    icon: "map-pin",
    meta: {
      title:
        "Real Estate & Realtor Website Design | ProCode Dev",
      description:
        "Real estate website design for realtors and agents: property catalog, direct lead capture and local SEO for realtors. Public pricing, no 12-month contracts.",
      keywords:
        "real estate website design, realtor website design, website design for real estate agents, digital marketing for realtors, local SEO for realtors, real estate marketing agency, real estate lead generation, property catalog website, real estate landing page design, get real estate leads",
    },
    heroEyebrow: "// real estate",
    heroTitleA: "Real estate",
    heroHighlight: "website design",
    heroSubtitle: "Your brand, not just portals.",
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
      "None of them is solved by a prettier page. They're solved with structure, which is what digital marketing for realtors actually means when it's done properly.",
    pains: [
      "Your whole inventory lives on a portal that charges you for the leads you generated.",
      "You get messages from people who don't qualify and lose whole afternoons showing homes to buyers who can't buy.",
      "Every listing goes out as loose photos on social and disappears from the feed in two days.",
      "The buyer who didn't buy this year never hears from you again, even though they do buy the next one.",
      "Your experience and closed deals aren't visible, so you compete with someone who just got licensed.",
    ],
    systemTitle: "What a real estate agent website includes",
    systemSubtitle:
      "The same applies to realtor website design, to website design for real estate agents and to real estate landing page design for a single listing: the example changes, not the structure.",
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
      "The market has clear seasonality and local SEO for realtors takes months to mature. The system works the full cycle, even while you're closing.",
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
    faqTitle: "Real estate website design questions",
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
      {
        question: "How do I get real estate leads without depending on the portals?",
        answer:
          "You get real estate leads with a property catalog website of your own, listing pages people can share over text, and a form that tells a buyer apart from a seller. The real estate lead generation that lasts is the one that lands on your site, not the one you rent from a portal month after month.",
      },
    ],
    pageContext: {
      title: "Real estate website design and marketing",
      paragraphs: [
        "Your listings live on portals and social media, but your brand lives nowhere. Real estate website design gives you your own property catalog website, with your name at the top and no portal charging you for the lead you generated yourself.",
        "This is realtor website design and website design for real estate agents, plus real estate landing page design when there is one specific listing or promotion to push.",
        "Digital marketing for realtors and local SEO for realtors are the base of steady real estate lead generation. If you are wondering how to get real estate leads without buying them every month, the answer is your own site plus automatic follow-up — and that is what a real estate marketing agency should stay to measure.",
      ],
    },
    ctaTitle: "20 minutes to review your catalog",
    ctaBody:
      "I'll tell you what a buyer searching your area finds today and which piece you're missing. You talk straight to the owner of the real estate marketing agency that will do the work, not to a salesperson.",
  },

  // ────────────────────────────────────────────────────────────
  accounting: {
    navLabel: "Accounting & tax",
    navHint: "Busy season, year-round clients and less manual work",
    icon: "calculator",
    meta: {
      title:
        "Tax Preparer & Accountant Web Design | ProCode Dev",
      description:
        "Tax preparer and accountant website design: document intake, follow-up and local SEO for tax preparers. Public pricing and no 12-month contracts.",
      keywords:
        "tax preparer website design, accountant website design, accounting firm website design, bookkeeper website design, digital marketing for accountants, local SEO for tax preparers, marketing agency for tax preparers, document intake for accountants, get more tax preparation clients",
    },
    heroEyebrow: "// accounting & tax",
    heroTitleA: "Tax preparer",
    heroHighlight: "website design",
    heroSubtitle: "Clients all year, not weeks.",
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
      "None of them is solved by a prettier page. They're solved with structure, which is what digital marketing for accountants actually means when it's done properly.",
    pains: [
      "Most of your revenue lands in a few weeks, and the rest of the year the operation goes dark.",
      "Business clients — the ones who really pay — go with whoever looks like a real firm, not whoever knows the craft best.",
      "You answer the same messages fifty times: which documents, how much, when will it be ready.",
      "In the middle of the season you lose prospects because nobody had time to answer them within 24 hours.",
      "Last year's client didn't come back and you found out late, after they'd already filed with someone else.",
    ],
    systemTitle: "What an accounting firm website includes",
    systemSubtitle:
      "The same applies to accountant website design, bookkeeper website design and accounting firm website design, with document intake for accountants: the example changes, not the structure.",
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
      "None of this gets improvised mid-season, and local SEO for tax preparers takes months to mature.",
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
    faqTitle: "Tax preparer website design questions",
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
      {
        question: "How do I get more tax preparation clients outside of season?",
        answer:
          "You get more tax preparation clients year-round by selling what people hire in March and September too: monthly bookkeeping, payroll, planning and back-tax cleanup. Each one deserves its own page; a single “tax services” page leaves you competing in January and February only.",
      },
    ],
    pageContext: {
      title: "Tax preparer and accounting firm website design",
      paragraphs: [
        "Your year concentrates into a few weeks and the rest of the calendar goes quiet. Tax preparer website design has to serve both seasons: capture hard in season, sell recurring work the rest of the year.",
        "That covers accountant website design, accounting firm website design and bookkeeper website design, with document intake for accountants wired in from day one so clients upload what you asked for instead of emailing it back and forth.",
        "Digital marketing for accountants and local SEO for tax preparers start months before the season, because they do not mature in January. If you are looking at how to get more tax preparation clients, that calendar is half the answer and replying fast is the other half. A marketing agency for tax preparers has to cover both.",
      ],
    },
    ctaTitle: "20 minutes before the season starts",
    ctaBody:
      "I'll tell you which piece your practice is missing today and what can be ready before your busy month begins. You talk straight to the owner of the marketing agency for tax preparers that will do the work, not to a salesperson.",
  },
};

export const segments: Record<Lang, SegmentDict> = { es, en };

export function getSegment(lang: Lang, key: SegmentKey): Segment {
  return segments[lang][key];
}
