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
  offerTitle: string;
  offerSubtitle: string;
  offers: string[];
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
      "Tu trabajo se ve en la obra terminada, pero el cliente decide antes de verla: decide con lo que encuentra en Google. Construyo la infraestructura para que quien busca tu oficio en tu ciudad te encuentre, te crea y te pida cotización — con las fotos y la dirección ya adjuntas.",
    intro:
      "Sitio web, Perfil de Empresa en Google, formulario de cotización y seguimiento para contratistas, constructoras, remodelación, plomería, electricidad, techos y jardinería.",
    projectId: "trejo",
    projectEyebrow: "// proyecto en tu giro",
    projectTitle: "Un negocio de tu oficio que ya está",
    projectHighlight: "trabajando en línea",
    projectWhy:
      "Trejo Landscaping es exactamente el caso de un contratista: un oficio que vivía de la recomendación y que hoy recibe solicitudes de cotización desde su propia página. Está en vivo — ábrelo y júzgalo tú.",
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
      "El cliente que paga bien te compara con una empresa que tiene página, reseñas y seguro visible — y se va con ella aunque trabaje peor.",
      "Contestas los mismos mensajes: «¿cuánto cobras?», «¿vienes a mi zona?», «¿mandas cotización?».",
      "Cotizas trabajos que nunca iban a cerrar porque nadie preguntó presupuesto ni zona antes de que manejaras 40 minutos.",
      "Terminas una obra excelente y no queda ni una foto ordenada ni una reseña pedida.",
    ],
    systemTitle: "Lo que construyo para un contratista",
    systemSubtitle:
      "Las mismas seis piezas del sistema, aplicadas a cómo se cierra realmente un trabajo de construcción.",
    system: [
      {
        icon: "layout",
        title: "Una página por servicio, no una sola de «construcción»",
        description:
          "Remodelación de cocina, baño completo, techos, concreto, cercas, adiciones. Cada trabajo con su propia página, sus propias fotos y su propio rango de inversión, para que la remodelación grande no compita en la misma página que la reparación de $300.",
      },
      {
        icon: "clipboard-check",
        title: "Formulario de cotización que filtra antes de que manejes",
        description:
          "Tipo de trabajo, código postal, fotos del espacio, medidas aproximadas, cuándo quiere empezar y rango de presupuesto. Llegas a la llamada sabiendo si el trabajo te conviene, y dejas de cotizar gratis a quien solo estaba preguntando.",
      },
      {
        icon: "star",
        title: "Galería de trabajos y antes/después que vende sola",
        description:
          "Tus obras ordenadas por tipo de trabajo, con fotos reales, ciudad y una línea de qué resolviste. Es la prueba que un cliente necesita para dejarte entrar a su casa y darte un anticipo.",
      },
      {
        icon: "shield",
        title: "Licencia, seguro y garantía visibles",
        description:
          "Licencia, seguro de responsabilidad, años trabajando, zonas que cubres y qué pasa si algo sale mal. Es exactamente lo que el cliente busca y casi nunca encuentra en la página de un contratista.",
      },
      {
        icon: "target",
        title: "Perfil de Empresa en Google trabajando tu zona",
        description:
          "Optimizado para «contractor near me» y su equivalente en español, con fotos de obra, servicios cargados, zonas de cobertura y un sistema para pedir reseñas justo al entregar el trabajo, que es cuando el cliente está contento.",
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
    offerTitle: "Trabajos que puedes vender al mismo cliente",
    offerSubtitle:
      "No te propongo que inventes servicios nuevos: te propongo presentar los que ya sabes hacer, en el momento en que el cliente sí los escucha.",
    offers: [
      "Segunda etapa de la obra que ya empezaste",
      "Mantenimiento anual para clientes anteriores",
      "Revisión de techo o plomería antes del invierno",
      "Trabajos pequeños de temporada para llenar semanas flojas",
      "Referidos del vecino, pedidos al entregar y no dos meses después",
      "Contratos recurrentes con administradores de propiedades",
    ],
    faqTitle: "Dudas de un contratista",
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
      "Un paciente nuevo te evalúa antes de escribirte: mira tu formación, tus reseñas y si puede agendar sin tener que preguntar precios por mensaje. Construyo la infraestructura para que llegue informado, agende solo y regrese.",
    intro:
      "Sitio web, agenda en línea, formulario de primera consulta, recordatorios y seguimiento para consultorios, clínicas, nutriólogos, dentistas, psicólogos, fisioterapeutas y terapeutas.",
    projectId: "fersilva",
    projectEyebrow: "// proyecto en tu giro",
    projectTitle: "Una práctica de salud que ya está",
    projectHighlight: "trabajando en línea",
    projectWhy:
      "Fernanda Silva es el caso de un consultorio: explicaba su servicio por mensaje una y otra vez, y hoy los pacientes llegan informados y agendan solos. Está en vivo — ábrelo y júzgalo tú.",
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
    systemTitle: "Lo que construyo para un consultorio",
    systemSubtitle:
      "Las mismas seis piezas del sistema, aplicadas a cómo llena realmente su agenda una práctica de salud.",
    system: [
      {
        icon: "layout",
        title: "Una página por servicio, no una sola de «consultas»",
        description:
          "Primera consulta, seguimiento, paquetes, tratamiento específico. Cada servicio con su propia página, su propio precio de referencia y su propia explicación de qué incluye y cuánto dura. Eso es lo que evita la mitad de los mensajes.",
      },
      {
        icon: "calendar",
        title: "Agenda en línea conectada a tu calendario",
        description:
          "El paciente elige horario disponible sin preguntarte, con bloques distintos para primera vez y seguimiento, y la cita cae directo en tu calendario. Sin ida y vuelta de mensajes para cuadrar una hora.",
      },
      {
        icon: "clipboard-check",
        title: "Formulario de primera consulta antes de la cita",
        description:
          "Datos, motivo de consulta, antecedentes y lo que necesites preguntar, contestado antes de que el paciente llegue. Empiezas la consulta con la historia media armada en vez de con una hoja en blanco.",
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
          "Tu cédula, tus certificaciones, tu enfoque y las reseñas de pacientes reales, presentados con criterio profesional. Es lo que hace que alguien confíe en ti para algo tan personal como su salud.",
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
    offerTitle: "Servicios que puedes ofrecer a los pacientes que ya tienes",
    offerSubtitle:
      "No te propongo que inventes servicios nuevos: te propongo presentar los que ya das, en el momento en que el paciente sí los escucha.",
    offers: [
      "Paquetes de seguimiento en vez de consultas sueltas",
      "Consulta en línea para quien vive lejos o viaja",
      "Revisión anual o de control para pacientes anteriores",
      "Programas de varias semanas con precio cerrado",
      "Talleres o sesiones grupales con cupo limitado",
      "Convenios con empresas o gimnasios de tu zona",
    ],
    faqTitle: "Dudas de un profesional de la salud",
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
      "Cuando alguien te contrata no compra horas: compra la confianza de que sabes resolver su problema. Construyo la infraestructura para que esa confianza se vea antes de la primera llamada, y para que llegue a tu agenda el caso que sí te conviene.",
    intro:
      "Sitio web, captación, formulario de calificación, agenda y seguimiento para abogados, agentes de seguros, consultores, asesores y profesionales que venden su criterio.",
    projectId: "cristian-posada",
    projectEyebrow: "// proyecto en tu giro",
    projectTitle: "Un profesional que vende criterio, y lo",
    projectHighlight: "demuestra en su sitio",
    projectWhy:
      "Mi propia marca personal es el caso de alguien que no vende un producto, sino su trabajo: trayectoria, proyectos y contenido en un solo lugar que convierte al visitante en una conversación. Está en vivo — ábrelo y júzgalo tú.",
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
    systemTitle: "Lo que construyo para un profesional",
    systemSubtitle:
      "Las mismas seis piezas del sistema, aplicadas a cómo se gana realmente un cliente que compra criterio.",
    system: [
      {
        icon: "layout",
        title: "Una página por área de práctica, no una sola de «servicios»",
        description:
          "Cada área con su propia página, su propio lenguaje y su propio caso de uso. Quien busca ayuda con un problema concreto necesita leer ese problema, no una lista genérica donde el suyo aparece en tercer lugar.",
      },
      {
        icon: "clipboard-check",
        title: "Formulario que califica antes de la consulta",
        description:
          "Tipo de asunto, situación actual, urgencia y presupuesto o expectativa. Llegas a la llamada sabiendo si el caso es para ti, y las consultas gratis dejan de comerse tu semana.",
      },
      {
        icon: "briefcase",
        title: "Autoridad demostrable, no adjetivos",
        description:
          "Años de práctica, credenciales, tipos de caso resueltos, publicaciones y reseñas. Sustituimos «profesional y confiable» por hechos que el prospecto puede verificar.",
      },
      {
        icon: "calendar",
        title: "Agenda de consulta conectada y con filtro",
        description:
          "Consulta inicial en línea con las preguntas de calificación por delante, para que solo agende quien tiene un asunto que puedes tomar. Con recordatorio automático para reducir ausencias.",
      },
      {
        icon: "repeat",
        title: "Seguimiento de propuestas que no se cae solo",
        description:
          "Cada prospecto que pidió una propuesta y no respondió recibe seguimiento en los días correctos, con un mensaje que no suena a cobranza. Es donde se recupera más dinero con menos esfuerzo.",
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
    offerTitle: "Servicios que puedes ofrecer a tu base actual",
    offerSubtitle:
      "No te propongo que inventes servicios nuevos: te propongo presentar los que ya das, en el momento en que el cliente sí los escucha.",
    offers: [
      "Iguala mensual o asesoría continua en vez de trabajos sueltos",
      "Revisión anual de documentos, pólizas o contratos",
      "Segunda fase del asunto que ya resolviste",
      "Paquetes cerrados para trámites que se repiten",
      "Consulta express de pago para filtrar y monetizar la primera llamada",
      "Referidos pedidos al cerrar, no seis meses después",
    ],
    faqTitle: "Dudas de un profesional",
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
      "Tus propiedades viven en portales y en redes, pero tu marca no vive en ninguna parte. Construyo el sitio donde el comprador ve tu catálogo, entiende con quién está tratando y te deja sus datos a ti — no al portal.",
    intro:
      "Sitio web con catálogo de propiedades, fichas detalladas, formulario de prospecto calificado, agenda de visitas y seguimiento para asesores inmobiliarios, inmobiliarias y desarrolladoras.",
    projectId: "demo-inmobiliaria",
    projectEyebrow: "// proyecto en tu giro",
    projectTitle: "Cómo se ve un catálogo inmobiliario",
    projectHighlight: "bien estructurado",
    projectWhy:
      "Un sitio inmobiliario completo con catálogo de propiedades, fichas detalladas y captación directa. Lo construí por mi cuenta para mostrar cómo se ordena el inventario de un asesor: es una demo, no un cliente, y lo digo para que no haya confusión.",
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
    systemTitle: "Lo que construyo para un asesor inmobiliario",
    systemSubtitle:
      "Las mismas seis piezas del sistema, aplicadas a cómo se cierra realmente una operación inmobiliaria.",
    system: [
      {
        icon: "layout",
        title: "Catálogo con ficha propia por propiedad",
        description:
          "Cada propiedad con su página: galería, plano, características, colonia, mapa y precio. Es un enlace que puedes mandar por WhatsApp y que se ve profesional, en vez de doce fotos sueltas.",
      },
      {
        icon: "search",
        title: "Filtros que llevan al comprador a lo suyo",
        description:
          "Por zona, precio, recámaras y tipo de operación. El comprador encuentra en un minuto lo que en un chat le tomaría veinte mensajes, y tú ves qué está buscando la gente.",
      },
      {
        icon: "clipboard-check",
        title: "Formulario que califica antes de la visita",
        description:
          "Presupuesto, forma de pago —crédito, contado o precalificado—, zona y tiempo de compra. Sales a enseñar propiedades solo a quien puede comprarlas.",
      },
      {
        icon: "briefcase",
        title: "Tu perfil de asesor, no solo tu inventario",
        description:
          "Quién eres, cuántas operaciones has cerrado, en qué zonas te especializas y qué dicen tus clientes. El inventario cambia cada mes; tu reputación es lo que hace que te escriban a ti.",
      },
      {
        icon: "repeat",
        title: "Seguimiento a compradores de ciclo largo",
        description:
          "Un comprador puede tardar un año en decidirse. El sistema mantiene el contacto con nuevas propiedades de su zona y su rango, para que cuando esté listo te escriba a ti y no al portal.",
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
    offerTitle: "Servicios que puedes ofrecer además de la venta",
    offerSubtitle:
      "No te propongo que inventes servicios nuevos: te propongo presentar los que ya das, en el momento en que el cliente sí los escucha.",
    offers: [
      "Captación de propiedades de dueños que quieren vender",
      "Administración y renta para inversionistas",
      "Asesoría de crédito y precalificación",
      "Valuación gratuita como puerta de entrada del vendedor",
      "Asesoría a compradores primerizos, paso a paso",
      "Cartera de inversión para clientes que ya te compraron",
    ],
    faqTitle: "Dudas de un asesor inmobiliario",
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
      "Tu año se concentra en unas pocas semanas y el resto del calendario se apaga. Construyo la infraestructura para que llegues a la temporada con la agenda llenándose sola, y para que los clientes de este año sigan siendo clientes el próximo.",
    intro:
      "Sitio web, Perfil de Empresa en Google, intake de documentos, agenda y seguimiento para despachos contables, preparadores de impuestos, Enrolled Agents, CPAs y bookkeepers.",
    projectId: "demo-taxpro",
    projectEyebrow: "// proyecto en tu giro",
    projectTitle: "Cómo se ve un despacho contable",
    projectHighlight: "bien presentado",
    projectWhy:
      "Un sitio bilingüe para un despacho fiscal y contable: servicios separados, agenda de consulta y captación enfocada en confianza. Lo construí por mi cuenta como demostración del sector: es una demo, no un cliente, y lo digo para que no haya confusión.",
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
    systemTitle: "Lo que construyo para un despacho",
    systemSubtitle:
      "Las mismas seis piezas del sistema, aplicadas a cómo factura realmente una práctica contable.",
    system: [
      {
        icon: "layout",
        title: "Una página por servicio, no una sola de «contabilidad»",
        description:
          "Declaraciones de personas, de negocio, contabilidad mensual, nómina, trámites y representación. Cada servicio con su propio mensaje y su propio precio de referencia, para que el cliente con negocio no compita en la misma página que la declaración sencilla.",
      },
      {
        icon: "clipboard-check",
        title: "Intake que pide los documentos antes de la cita",
        description:
          "Formulario por tipo de servicio con la lista de documentos, carga segura de archivos y preguntas de calificación. Llegas a la cita con el expediente medio armado en vez de con una hoja en blanco.",
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
          "Antes de que arranque la temporada, tus clientes anteriores reciben el aviso de que ya puedes recibirlos, con el enlace para agendar. Es el ingreso más barato que existe y casi nadie lo trabaja.",
      },
      {
        icon: "target",
        title: "Perfil de Empresa en Google trabajando en temporada",
        description:
          "Optimizado para las búsquedas de tu servicio en tu ciudad, en inglés y español, con publicaciones durante la temporada, horario extendido y un sistema para pedir reseñas justo cuando el cliente está contento.",
      },
    ],
    cycleTitle: "Tu calendario, y qué hace el sistema en cada tramo",
    cycleBody:
      "Nada de esto se improvisa en plena temporada. El sistema se monta antes y trabaja solo cuando tú no tienes tiempo de mirarlo.",
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
    offerTitle: "Servicios que puedes vender el resto del año",
    offerSubtitle:
      "No te propongo que inventes servicios nuevos: te propongo presentar los que ya podrías dar, en el momento en que el cliente sí los escucha.",
    offers: [
      "Contabilidad mensual para tus clientes con negocio",
      "Nómina para los que ya tienen empleados",
      "Planeación fiscal antes del cierre del año",
      "Constitución de empresas para el que se independiza",
      "Años anteriores sin presentar y correcciones",
      "Estados financieros para trámites de crédito",
    ],
    faqTitle: "Dudas de un despacho",
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
      "Your work shows in the finished job, but the client decides before they ever see it: they decide with what they find on Google. I build the infrastructure so the person searching your trade in your city finds you, believes you and asks for a quote — with photos and address already attached.",
    intro:
      "Website, Google Business Profile, quote form and follow-up for contractors, builders, remodeling, plumbing, electrical, roofing and landscaping.",
    projectId: "trejo",
    projectEyebrow: "// a project in your industry",
    projectTitle: "A business in your trade that's already",
    projectHighlight: "working online",
    projectWhy:
      "Trejo Landscaping is exactly the contractor case: a trade that lived on referrals and now takes quote requests straight from its own site. It's live — open it and judge for yourself.",
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
      "The client who pays well compares you to a company with a website, reviews and visible insurance — and goes with them even if they do worse work.",
      "You answer the same messages: «what do you charge?», «do you come to my area?», «can you send a quote?».",
      "You quote jobs that were never going to close because nobody asked about budget or area before you drove 40 minutes.",
      "You finish excellent work and end up with no organized photos and no review requested.",
    ],
    systemTitle: "What I build for a contractor",
    systemSubtitle:
      "The same six pieces of the system, applied to how a construction job actually closes.",
    system: [
      {
        icon: "layout",
        title: "A page per service, not one page for «construction»",
        description:
          "Kitchen remodel, full bathroom, roofing, concrete, fencing, additions. Every job with its own page, its own photos and its own investment range, so the big remodel doesn't compete on the same page as the $300 repair.",
      },
      {
        icon: "clipboard-check",
        title: "A quote form that filters before you drive",
        description:
          "Job type, ZIP code, photos of the space, rough measurements, start timing and budget range. You reach the call already knowing whether the job is a fit, and you stop quoting for free to people who were just asking.",
      },
      {
        icon: "star",
        title: "A work gallery and before/after that sells on its own",
        description:
          "Your jobs organized by type, with real photos, city and one line about what you solved. That's the proof a client needs to let you into their home and hand you a deposit.",
      },
      {
        icon: "shield",
        title: "License, insurance and warranty in plain sight",
        description:
          "License, liability insurance, years in business, areas you cover and what happens if something goes wrong. It's exactly what the client looks for and almost never finds on a contractor's page.",
      },
      {
        icon: "target",
        title: "A Google Business Profile working your area",
        description:
          "Optimized for «contractor near me» and its Spanish equivalent, with job-site photos, loaded services, service areas and a system to request reviews right at handover, when the client is happiest.",
      },
    ],
    cycleTitle: "Your building year, and what the system does in each stretch",
    cycleBody:
      "Weather runs your revenue. The system gets built before, and works on its own while you're on site sunup to sundown.",
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
    offerTitle: "Work you can sell to the same client",
    offerSubtitle:
      "I'm not asking you to invent new services: I'm asking you to present the ones you already do, at the moment the client actually listens.",
    offers: [
      "The second phase of the job you already started",
      "Annual maintenance for past clients",
      "Roof or plumbing check before winter",
      "Small seasonal jobs to fill slow weeks",
      "Neighbor referrals, requested at handover instead of two months later",
      "Recurring contracts with property managers",
    ],
    faqTitle: "A contractor's questions",
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
      "A new patient evaluates you before they ever message: they look at your training, your reviews and whether they can book without asking about prices over chat. I build the infrastructure so they arrive informed, book on their own and come back.",
    intro:
      "Website, online booking, first-visit intake form, reminders and follow-up for clinics, private practices, nutritionists, dentists, psychologists, physical therapists and therapists.",
    projectId: "fersilva",
    projectEyebrow: "// a project in your industry",
    projectTitle: "A health practice that's already",
    projectHighlight: "working online",
    projectWhy:
      "Fernanda Silva is the private-practice case: she explained her service over chat again and again, and now patients arrive informed and book on their own. It's live — open it and judge for yourself.",
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
    systemTitle: "What I build for a practice",
    systemSubtitle:
      "The same six pieces of the system, applied to how a health practice actually fills its calendar.",
    system: [
      {
        icon: "layout",
        title: "A page per service, not one page for «consultations»",
        description:
          "First visit, follow-up, packages, specific treatment. Every service with its own page, its own reference price and its own explanation of what's included and how long it takes. That alone removes half your messages.",
      },
      {
        icon: "calendar",
        title: "Online booking connected to your calendar",
        description:
          "The patient picks an open slot without asking you, with different blocks for first visits and follow-ups, and the appointment lands straight in your calendar. No back-and-forth to settle on a time.",
      },
      {
        icon: "clipboard-check",
        title: "First-visit intake before the appointment",
        description:
          "Details, reason for the visit, history and whatever else you need to ask, answered before the patient walks in. You start the visit with the file half built instead of a blank page.",
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
          "Your license, certifications, approach and real patient reviews, presented with professional judgment. It's what makes someone trust you with something as personal as their health.",
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
    offerTitle: "Services you can offer the patients you already have",
    offerSubtitle:
      "I'm not asking you to invent new services: I'm asking you to present the ones you already offer, at the moment the patient actually listens.",
    offers: [
      "Follow-up packages instead of one-off visits",
      "Online consultations for patients who live far or travel",
      "Annual or check-up visits for past patients",
      "Multi-week programs at a fixed price",
      "Workshops or group sessions with limited spots",
      "Agreements with local employers or gyms",
    ],
    faqTitle: "A health professional's questions",
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
      "When someone hires you they aren't buying hours: they're buying the confidence that you can solve their problem. I build the infrastructure so that confidence is visible before the first call, and so the case that actually fits is the one that reaches your calendar.",
    intro:
      "Website, client acquisition, qualifying form, scheduling and follow-up for attorneys, insurance agents, consultants, advisors and professionals who sell their judgment.",
    projectId: "cristian-posada",
    projectEyebrow: "// a project in your industry",
    projectTitle: "A professional who sells judgment, and",
    projectHighlight: "proves it on his site",
    projectWhy:
      "My own personal brand is the case of someone who doesn't sell a product but their work: track record, projects and content in one place that turns a visitor into a conversation. It's live — open it and judge for yourself.",
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
    systemTitle: "What I build for a professional",
    systemSubtitle:
      "The same six pieces of the system, applied to how you actually win a client who buys judgment.",
    system: [
      {
        icon: "layout",
        title: "A page per practice area, not one page for «services»",
        description:
          "Every area with its own page, its own language and its own use case. Someone searching for help with a specific problem needs to read that problem, not a generic list where theirs shows up third.",
      },
      {
        icon: "clipboard-check",
        title: "A form that qualifies before the consult",
        description:
          "Matter type, current situation, urgency and budget or expectation. You reach the call already knowing whether the case is for you, and free consults stop eating your week.",
      },
      {
        icon: "briefcase",
        title: "Demonstrable authority, not adjectives",
        description:
          "Years in practice, credentials, types of matters resolved, publications and reviews. We replace «professional and reliable» with facts the prospect can verify.",
      },
      {
        icon: "calendar",
        title: "Consult booking, connected and filtered",
        description:
          "An initial consult booked online with the qualifying questions up front, so only someone with a matter you can take gets a slot. With automatic reminders to cut no-shows.",
      },
      {
        icon: "repeat",
        title: "Proposal follow-up that doesn't fall through",
        description:
          "Every prospect who asked for a proposal and went quiet gets followed up on the right days, with a message that doesn't read like collections. It's where the most money is recovered with the least effort.",
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
    offerTitle: "Services you can offer your current base",
    offerSubtitle:
      "I'm not asking you to invent new services: I'm asking you to present the ones you already offer, at the moment the client actually listens.",
    offers: [
      "A monthly retainer or ongoing advisory instead of one-off work",
      "Annual review of documents, policies or contracts",
      "The second phase of the matter you already resolved",
      "Fixed-price packages for work that repeats",
      "A paid express consult to filter and monetize the first call",
      "Referrals requested at closing, not six months later",
    ],
    faqTitle: "A professional's questions",
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
      "Your listings live on portals and social media, but your brand lives nowhere. I build the site where the buyer sees your catalog, understands who they're dealing with and leaves their details with you — not with the portal.",
    intro:
      "Website with property catalog, detailed listing pages, qualified lead form, showing scheduler and follow-up for real estate agents, brokerages and developers.",
    projectId: "demo-inmobiliaria",
    projectEyebrow: "// a project in your industry",
    projectTitle: "What a well-structured real estate",
    projectHighlight: "catalog looks like",
    projectWhy:
      "A complete real estate site with a property catalog, detailed listing pages and direct lead capture. I built it on my own to show how an agent's inventory gets organized: it's a demo, not a client, and I say so to keep it clear.",
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
    systemTitle: "What I build for a real estate agent",
    systemSubtitle:
      "The same six pieces of the system, applied to how a real estate deal actually closes.",
    system: [
      {
        icon: "layout",
        title: "A catalog with its own page per property",
        description:
          "Every property with its own page: gallery, floor plan, features, neighborhood, map and price. It's a link you can send over WhatsApp that looks professional, instead of twelve loose photos.",
      },
      {
        icon: "search",
        title: "Filters that take the buyer to what they want",
        description:
          "By area, price, bedrooms and deal type. The buyer finds in a minute what would take twenty messages in a chat, and you see what people are actually looking for.",
      },
      {
        icon: "clipboard-check",
        title: "A form that qualifies before the showing",
        description:
          "Budget, financing — loan, cash or pre-approved —, area and buying timeline. You only go out to show properties to people who can buy them.",
      },
      {
        icon: "briefcase",
        title: "Your agent profile, not just your inventory",
        description:
          "Who you are, how many deals you've closed, which areas you specialize in and what your clients say. Inventory changes every month; your reputation is what makes them write to you.",
      },
      {
        icon: "repeat",
        title: "Follow-up for long-cycle buyers",
        description:
          "A buyer can take a year to decide. The system keeps in touch with new properties in their area and range, so when they're ready they write to you and not to the portal.",
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
    offerTitle: "Services you can offer beyond the sale",
    offerSubtitle:
      "I'm not asking you to invent new services: I'm asking you to present the ones you already offer, at the moment the client actually listens.",
    offers: [
      "Listing acquisition from owners who want to sell",
      "Property management and rentals for investors",
      "Financing guidance and pre-qualification",
      "A free valuation as the seller's entry point",
      "Step-by-step guidance for first-time buyers",
      "An investment portfolio for clients who already bought from you",
    ],
    faqTitle: "A real estate agent's questions",
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
      "Your year concentrates into a few weeks and the rest of the calendar goes quiet. I build the infrastructure so you reach the season with your calendar filling itself, and so this year's clients are still clients next year.",
    intro:
      "Website, Google Business Profile, document intake, scheduling and follow-up for accounting firms, tax preparers, enrolled agents, CPAs and bookkeepers.",
    projectId: "demo-taxpro",
    projectEyebrow: "// a project in your industry",
    projectTitle: "What a well-presented accounting",
    projectHighlight: "practice looks like",
    projectWhy:
      "A bilingual site for an accounting and tax practice: separate services, consult booking and trust-focused lead capture. I built it on my own as a sector demonstration: it's a demo, not a client, and I say so to keep it clear.",
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
    systemTitle: "What I build for a practice",
    systemSubtitle:
      "The same six pieces of the system, applied to how an accounting practice actually gets paid.",
    system: [
      {
        icon: "layout",
        title: "A page per service, not one page for «accounting»",
        description:
          "Individual returns, business returns, monthly bookkeeping, payroll, filings and representation. Every service with its own message and its own reference price, so the business client doesn't compete on the same page as the simple return.",
      },
      {
        icon: "clipboard-check",
        title: "Intake that asks for documents before the appointment",
        description:
          "A form per service type with the document list, secure file upload and qualifying questions. You reach the appointment with the file half built instead of a blank page.",
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
          "Before the season starts, your past clients get the note that you're taking appointments, with the booking link. It's the cheapest revenue there is and almost nobody works it.",
      },
      {
        icon: "target",
        title: "A Google Business Profile working through the season",
        description:
          "Optimized for searches for your service in your city, in English and Spanish, with posts during the season, extended hours and a system to request reviews right when the client is happiest.",
      },
    ],
    cycleTitle: "Your calendar, and what the system does in each stretch",
    cycleBody:
      "None of this gets improvised mid-season. The system is built before and runs on its own when you have no time to look at it.",
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
    offerTitle: "Services you can sell the rest of the year",
    offerSubtitle:
      "I'm not asking you to invent new services: I'm asking you to present the ones you could already offer, at the moment the client actually listens.",
    offers: [
      "Monthly bookkeeping for your clients with a business",
      "Payroll for the ones who already have employees",
      "Tax planning before year-end",
      "Business formation for the newly self-employed",
      "Prior unfiled years and amendments",
      "Financial statements for loan applications",
    ],
    faqTitle: "A practice's questions",
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
