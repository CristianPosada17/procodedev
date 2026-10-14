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

import { isNiche, type Lang, type LandingKey, type SegmentKey } from "./ui";
import { niches } from "./niches";

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
        "Diseño Web para Contratistas y Construcción | ProCode Systems",
      description:
        "Diseño web para constructoras y contratistas: sitio, Perfil de Empresa en Google, formulario de cotización y SEO local para contratistas. Precios base publicados.",
      keywords:
        "diseño web para constructoras, páginas web para contratistas, página web para contratistas, diseño web para empresas de remodelación, marketing digital para contratistas, SEO local para contratistas, agencia de marketing para contratistas, página web para plomeros, página web para electricistas, página web para techos, generación de clientes para contratistas",
    },
    heroEyebrow: "// contratistas y construcción",
    heroTitleA: "Diseño web para",
    heroHighlight: "contratistas y constructoras",
    heroSubtitle: "Te eligen antes de conocerte.",
    intro:
      "Sitio web, Perfil de Empresa en Google, formulario de cotización y SEO local para contratistas, constructoras, remodelación, plomería, electricidad, techos y jardinería.",
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
    painTitle:
      "Los mensajes que te quitan la tarde",
    painSubtitle:
      "Así suena el teléfono de casi cualquier contratista en temporada. Cada uno de estos mensajes es una obra que se escapa o un viaje que no debiste hacer.",
    pains: [
      "Vives de recomendaciones: cuando el teléfono deja de sonar, no hay una segunda fuente de trabajos.",
      "El cliente que paga bien te compara con una empresa que tiene página, reseñas y seguro visible.",
      "Contestas los mismos mensajes: «¿cuánto cobras?», «¿vienes a mi zona?», «¿mandas cotización?».",
      "Cotizas trabajos que nunca iban a cerrar porque nadie preguntó presupuesto ni zona antes de que manejaras 40 minutos.",
      "Terminas una obra excelente y no queda ni una foto ordenada ni una reseña pedida.",
    ],
    systemTitle:
      "Qué lleva una página web para contratistas y constructoras",
    systemSubtitle:
      "Seis piezas, en el orden en que un cliente las revisa antes de llamarte. Sirve igual para remodelación, techos, plomería, electricidad, concreto o climatización: cambian las fotos y las preguntas del formulario, no la estructura.",
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
          "Campañas locales y anuncios de temporada para llenar las semanas flojas. Se contrata aparte, en el plan de Marketing Digital, desde $899 USD al mes; la inversión publicitaria se paga aparte.",
      },
    ],
    cycleTitle:
      "El año de obra, tramo por tramo",
    cycleBody:
      "El clima manda en tu facturación, y el SEO local para contratistas tarda meses en madurar. Por eso el sistema se monta antes y trabaja solo cuando tú estás en obra de sol a sol.",
    cycleMonths: [
      {
        label: "Ene – Mar",
        note: "Interiores y remodelación; captación para llenar la primavera.",
      },
      {
        label: "Abr – Jun",
        note: "Temporada alta: formulario de cotización que filtra antes de que manejes.",
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
          "Es donde más rinde. Un contratista solo no puede contestar mientras está en el techo: el formulario que filtra y la agenda en línea son el asistente que no puedes contratar todavía.",
      },
      {
        question: "¿Cuánto tarda en estar lista una página para contratistas?",
        answer:
          "Una landing page con formulario de cotización sale en unas dos semanas; un sitio de 4 a 6 páginas, con una página por servicio y galería de obra, en tres a cuatro. Si la temporada ya empezó, lanzamos primero la landing y el Perfil de Empresa en Google y construimos el resto mientras ya estás recibiendo solicitudes.",
      },
      {
        question: "¿Sirve igual para plomería, electricidad o techos?",
        answer:
          "Sí. Una página web para plomeros tiene la misma estructura que una página web para electricistas o una página web para techos: cambian el vocabulario del servicio, las fotos de obra y las preguntas del formulario. Lo que no cambia es cómo decide el cliente.",
      },
      {
        question: "¿Cómo conseguir clientes para una constructora sin depender de la recomendación?",
        answer:
          "Con tres piezas trabajando juntas: aparecer cuando alguien busca tu oficio en tu ciudad, un formulario que califique antes de que manejes, y reseñas que den confianza antes de la primera llamada. Esa es la generación de clientes para contratistas que sostiene una temporada floja.",
      },
    ],
    ctaTitle: "20 minutos antes de tu próxima temporada fuerte",
    ctaBody:
      "En la llamada abro Google como lo haría un cliente de tu ciudad, busco tu oficio y vemos juntos dónde apareces y qué te falta para que te pidan cotización. Hablas con quien construye la página, no con un vendedor.",
  },

  // ────────────────────────────────────────────────────────────
  health: {
    navLabel: "Salud y bienestar",
    navHint: "Agenda llena, pacientes que regresan y menos mensajes",
    icon: "users",
    meta: {
      title:
        "Páginas Web para Consultorios, Dentistas y Médicos | ProCode Systems",
      description:
        "Páginas web para consultorios y clínicas: dentistas, psicólogos, médicos, nutriólogos y gimnasios, con agenda en línea, formulario de primera consulta y SEO local.",
      keywords:
        "diseño web para consultorios, páginas web para clínicas, páginas web para dentistas, páginas web para psicólogos, páginas web para médicos, páginas web para nutriólogos, páginas web para gimnasios, agenda en línea para pacientes, SEO local para consultorios, marketing para clínicas",
    },
    heroEyebrow: "// salud y bienestar",
    heroTitleA: "Diseño web para",
    heroHighlight: "consultorios y clínicas",
    heroSubtitle: "Agendan sin preguntar precios.",
    intro:
      "Agenda en línea, formulario de primera consulta y SEO local para consultorios y clínicas de salud: dentistas, psicólogos y terapeutas, médicos, nutriólogos, gimnasios y entrenadores.",
    projectId: "fersilva",
    projectEyebrow: "// proyecto en tu giro",
    projectTitle: "Una práctica de salud que ya está",
    projectHighlight: "trabajando en línea",
    projectWhy:
      "Fernanda Silva es el caso de un consultorio: explicaba su servicio por mensaje una y otra vez, y hoy los pacientes llegan informados y agendan solos.",
    projectPoints: [
      "Servicios explicados con lo que incluyen y cuánto duran, que es lo que ahorra muchos de los mensajes de siempre.",
      "Agenda en línea para que el paciente elija horario sin tener que preguntarte.",
      "Formación y enfoque visibles, porque en salud la confianza se decide antes del primer contacto.",
    ],
    painTitle:
      "Por dónde se te van los pacientes",
    painSubtitle:
      "Ninguno de estos huecos es de tu servicio: tu consulta es buena. Son huecos entre la búsqueda en Google y la cita, y ahí es donde trabaja la página.",
    pains: [
      "Explicas por mensaje lo mismo cien veces: precio de la consulta, qué incluye, cuánto dura, si aceptas seguro.",
      "Pierdes pacientes que escribieron un domingo por la noche y no recibieron respuesta hasta el martes.",
      "Las citas perdidas te cuestan huecos en la agenda que ya no se llenan.",
      "El paciente viene una vez y no regresa, y no hay nada que se lo recuerde.",
      "Tu formación y tu experiencia no se ven por ningún lado, y compites de tú a tú con quien apenas empieza.",
    ],
    systemTitle:
      "Lo que comparten todas las páginas de salud",
    systemSubtitle:
      "Sea cual sea tu especialidad, estas piezas son la base. Arriba viste lo que cambia por especialidad; esto es lo que no cambia.",
    system: [
      {
        icon: "layout",
        title: "Una página por servicio, no una sola de «consultas»",
        description:
          "Primera consulta, seguimiento, paquetes, tratamiento específico.",
      },
      {
        icon: "calendar",
        title: "Sistema de agenda de citas automático",
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
        icon: "shield",
        title: "Formación, cédula y reseñas visibles",
        description:
          "Tu cédula, tus certificaciones, tu enfoque y las reseñas de pacientes reales, presentados con criterio profesional.",
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
        note: "Contenido de temporada, reseñas y paquetes visibles en la página.",
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
          "Depende de tu práctica, y lo decidimos juntos. Publicar el precio de la primera consulta filtra a quien no iba a agendar y te ahorra muchos mensajes. En tratamientos que se cotizan caso por caso, usamos rangos o «desde», que da claridad sin cerrarte.",
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
        question: "¿Una clínica con varias especialidades necesita varias páginas web?",
        answer:
          "No. Lo correcto es un solo sitio con una página por especialidad, cada una con su agenda o con una agenda compartida que distingue el tipo de cita. Así la clínica aparece en Google por cada especialidad sin repartir su autoridad entre varios dominios.",
      },
      {
        question: "¿Cómo conseguir más pacientes desde internet?",
        answer:
          "Apareciendo cuando alguien busca tu especialidad en tu ciudad, y quitando la fricción entre esa búsqueda y la cita. En la práctica: una página por especialidad, y un sistema de agenda de citas automático abierto las 24 horas. Sin eso, más visitas solo significa más mensajes sin contestar.",
      },
    ],
    ctaTitle: "20 minutos para revisar tu agenda",
    ctaBody:
      "Buscamos tu especialidad en tu ciudad como lo haría un paciente nuevo y te digo en qué paso se va: en la búsqueda, en la página o en la agenda. Hablas con quien construye la página.",
  },

  // ────────────────────────────────────────────────────────────
  professional: {
    navLabel: "Servicios profesionales",
    navHint: "Autoridad, casos calificados y consultas que sí cierran",
    icon: "scale",
    meta: {
      title:
        "Páginas Web para Abogados, Seguros y Consultores | ProCode Systems",
      description:
        "Páginas web para abogados, agentes de seguros y consultores: una página por área de práctica, formulario que califica el caso, agenda y SEO local. Bilingüe.",
      keywords:
        "diseño web para servicios profesionales, páginas web para abogados, diseño web para despachos jurídicos, páginas web para agentes de seguros, página web para agencia de seguros, diseño web para consultores, sitio web para asesores, marketing para abogados, SEO local para servicios profesionales, formulario de calificación de prospectos",
    },
    heroEyebrow: "// servicios profesionales",
    heroTitleA: "Diseño web para servicios",
    heroHighlight: "profesionales y consultores",
    heroSubtitle: "Confianza antes de la llamada.",
    intro:
      "Páginas web para abogados, agentes de seguros, consultores y asesores: autoridad demostrable, una página por área de práctica, formulario que califica el caso y agenda con filtro.",
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
    painTitle:
      "Cinco formas de perder un buen caso",
    painSubtitle:
      "Casi nunca es falta de prospectos. Es que el bueno llegó junto con diez que no eran para ti, y se fue con quien contestó primero.",
    pains: [
      "Das consultas gratis a personas que nunca iban a contratarte, y no te queda tiempo para las que sí.",
      "Tu experiencia y tus resultados no se ven: pareces igual que cualquier otro que abrió el mes pasado.",
      "El prospecto pregunta «¿cuánto cobras?» antes de entender lo que resuelves, y la conversación muere ahí.",
      "Contestas tarde porque el mensaje cayó en un correo que no revisas, y para entonces ya llamaron a otro.",
      "Tu contenido y tu reputación viven en redes sociales, no en un sitio que trabaje para ti.",
    ],
    systemTitle:
      "La base de cualquier página de servicios profesionales",
    systemSubtitle:
      "Lo que necesita un consultor, un despacho o una agencia independiente para que el prospecto confíe y llegue filtrado. Arriba está lo que cambia para abogados y agentes de seguros.",
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
        title: "Cada consulta con contexto",
        description:
          "El formulario pide el tipo de asunto y lo esencial del caso, para que sepas a quién contestar primero.",
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
        note: "Captación activa, contenido y propuestas.",
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
    faqTitle: "Dudas sobre diseño web para consultores y profesionales",
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
          "Es donde más rinde. Un profesional solo no puede contestar mientras está en audiencia o con un cliente: la calificación previa y la agenda en línea son el asistente que no puedes contratar todavía.",
      },
      {
        question: "¿Me sirve si soy consultor de negocios, no abogado ni agente?",
        answer:
          "Sí. Consultores, asesores financieros y despachos de servicios usan la misma base: autoridad visible, una página por servicio y un formulario que califica. Lo que cambia es el vocabulario del caso y si la primera consulta se cobra.",
      },
      {
        question: "¿Cómo conseguir clientes siendo consultor o profesional independiente?",
        answer:
          "Con una página por área de práctica en vez de una sola de «servicios», un formulario que califique el caso antes de que agendes, y una agenda en línea para que el cliente reserve sin esperar. La captación de clientes para consultores falla casi siempre en la velocidad de respuesta, no en la publicidad.",
      },
    ],
    ctaTitle: "20 minutos para revisar tu captación",
    ctaBody:
      "Busco tu área de práctica en tu ciudad, reviso qué ve hoy un prospecto y te digo qué filtro le falta a tu captación. Hablas con quien construye la página, no con un vendedor.",
  },

  // ────────────────────────────────────────────────────────────
  realEstate: {
    navLabel: "Inmobiliarias",
    navHint: "Catálogo, prospectos calificados y compradores que vuelven",
    icon: "map-pin",
    meta: {
      title:
        "Páginas Web para Inmobiliarias y Asesores | ProCode Systems",
      description:
        "Páginas web para inmobiliarias, desarrolladoras y asesores inmobiliarios: catálogo de propiedades, tu marca personal, prospectos calificados y SEO local.",
      keywords:
        "diseño web para inmobiliarias, páginas web para inmobiliarias, página web para asesor inmobiliario, página web para realtor, página web para desarrolladoras inmobiliarias, catálogo de propiedades en línea, landing page para propiedades, marketing inmobiliario, SEO local para inmobiliarias, realtor que habla español",
    },
    heroEyebrow: "// inmobiliarias",
    heroTitleA: "Diseño web para",
    heroHighlight:
      "inmobiliarias y asesores",
    heroSubtitle: "Tu marca, no solo portales.",
    intro:
      "Catálogo de propiedades, fichas para mandar por WhatsApp, formulario que califica al comprador y SEO local para inmobiliarias, desarrolladoras y asesores inmobiliarios independientes.",
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
    systemTitle:
      "Las piezas de un sitio inmobiliario que capta",
    systemSubtitle:
      "Aplican a la inmobiliaria con equipo y al asesor que trabaja con su propio nombre; arriba viste en qué cambia el énfasis de cada una.",
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
        title: "Prospectos con contexto",
        description:
          "El formulario captura presupuesto, zona y tiempo de compra, para que sepas a quién llamar primero.",
      },
    ],
    cycleTitle:
      "El mercado inmobiliario por temporadas",
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
        note: "Ciclo lento: contenido de zona y fichas nuevas de propiedad.",
      },
    ],
    faqTitle: "Dudas sobre páginas web para inmobiliarias",
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
        question: "¿Puedo tener una landing page para una sola propiedad o desarrollo?",
        answer:
          "Sí, y funciona muy bien para preventas y propiedades de precio alto: una página con galería, ubicación, planos y formulario, a la que apuntan los anuncios. Puede vivir dentro de tu sitio o por separado.",
      },
      {
        question: "¿Cómo generar prospectos inmobiliarios sin depender de los portales?",
        answer:
          "Teniendo catálogo propio, fichas que se puedan compartir por WhatsApp y un formulario que distinga a quien quiere comprar de quien quiere vender. La generación de prospectos inmobiliarios que sí se sostiene es la que llega a tu sitio, no la que renta un portal mes con mes.",
      },
    ],
    ctaTitle: "20 minutos para revisar tu catálogo",
    ctaBody:
      "Busco propiedades en tu zona como lo haría un comprador y vemos si Google te muestra a ti o solo al portal. Hablas con quien construye la página.",
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
        "Diseño Web para Contadores y Despachos | ProCode Systems",
      description:
        "Diseño web para contadores y despachos contables: una página por servicio, intake de documentos, agenda de citas y SEO local para contadores. Precios base.",
      keywords:
        "diseño web para contadores, diseño web para despachos contables, páginas web para contadores, páginas web para bookkeepers, marketing digital para contadores, SEO local para contadores, agencia de marketing para despachos contables, página web para despachos contables, página web para contadores, intake de documentos, cómo conseguir clientes para un despacho contable",
    },
    heroEyebrow: "// contabilidad e impuestos",
    heroTitleA: "Diseño web para",
    heroHighlight: "contadores y despachos contables",
    heroSubtitle: "Clientes todo el año.",
    intro:
      "Sitios bilingües para contadores, despachos contables y bookkeepers que necesitan presentar cada servicio con claridad y organizar mejor las consultas, con formularios, agenda y medición conectados.",
    projectId: "miconta",
    projectEyebrow: "// caso de éxito en tu giro",
    projectTitle: "Un despacho contable que ya está",
    projectHighlight: "captando clientes en línea",
    projectWhy:
      "Mi Conta Universal, despacho de contabilidad y bookkeeping en Cincinnati, Ohio: una página web para contadores bilingüe, con cada servicio a la vista, WhatsApp directo y una guía gratuita que convierte visitas en prospectos.",
    projectPoints: [
      "Una ficha por servicio —bookkeeping, nómina, impuestos, registro de negocios, licencias— para que el cliente encuentre su trámite sin llamar a preguntar.",
      "Español e inglés en el mismo sitio, con preguntas frecuentes que responden las dudas reales del giro: LLC, EIN, vendor's license y 1099.",
      "SEO local para contadores en Cincinnati y todo Ohio, con datos estructurados de dirección, horario y teléfono.",
    ],
    painTitle:
      "Lo que le pasa a un despacho cada año",
    painSubtitle:
      "Son problemas de calendario más que de servicio, y por eso se resuelven antes de enero, no en marzo.",
    pains: [
      "La mayor parte de tus ingresos entra en unas semanas, y el resto del año la operación se apaga.",
      "Los clientes con negocio —los que de verdad pagan— se van con quien se ve como un despacho formal, no con quien tiene más oficio.",
      "Contestas los mismos mensajes cincuenta veces: qué documentos, cuánto cuesta, cuándo estará listo.",
      "En plena temporada pierdes prospectos porque nadie tuvo tiempo de contestarles en 24 horas.",
      "El cliente del año pasado no regresó y te enteraste tarde, cuando ya presentó con otro.",
    ],
    systemTitle:
      "Qué lleva la página web de un despacho contable",
    systemSubtitle:
      "Pensada para contadores independientes, despachos y bookkeepers que venden servicios mensuales, no solo declaraciones. Si lo tuyo es solo la temporada de impuestos, revisa la página para preparadores de impuestos.",
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
          "Sistema de agenda de citas automático, con bloques distintos para personas y para negocios.",
      },
      {
        icon: "repeat",
        title: "Documentos desde el primer contacto",
        description:
          "El cliente sube sus documentos desde el formulario de intake, para que sepas qué declaraciones puedes empezar.",
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
      "Nada de esto se improvisa en plena temporada, y el SEO local para contadores tarda meses en madurar.",
    cycleMonths: [
      {
        label: "Nov – Dic",
        note: "Reactivación de clientes anteriores, reseñas y agenda abierta.",
      },
      {
        label: "Ene – Abr",
        note: "Captación en máximo, intake automático y agenda llena.",
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
          "Es justo donde más rinde. Un contador solo no tiene a nadie que conteste mientras está preparando una declaración: el intake automático de documentos es el asistente que no puedes contratar en plena temporada.",
      },
      {
        question: "¿Sirve igual en México que en Estados Unidos?",
        answer:
          "El sistema es el mismo; cambian los servicios y el vocabulario de cada país. Trabajo con despachos de los dos lados y adapto la estructura, los nombres de los servicios y el calendario a donde estés.",
      },
      {
        question: "¿Qué diferencia hay con una página para preparadores de impuestos?",
        answer:
          "El preparador vive de la temporada y de personas físicas: su página gira alrededor del intake de W-2 y 1099 y de las fechas del IRS. El despacho contable vive de igualas mensuales con negocios: su página vende contabilidad, nómina y bookkeeping todo el año. Si haces las dos cosas, conviene tener las dos secciones.",
      },
      {
        question: "¿Cómo conseguir clientes para un despacho contable fuera de temporada?",
        answer:
          "Vendiendo lo que se contrata en marzo y en septiembre por igual: contabilidad mensual, nómina, planeación y regularización. Cada uno merece su propia página; una sola de «servicios contables» te deja compitiendo únicamente en enero y febrero.",
      },
    ],
    ctaTitle: "20 minutos antes de que empiece la temporada",
    ctaBody:
      "Revisamos qué encuentra hoy un dueño de negocio que busca contador en tu ciudad y qué servicio mensual no estás vendiendo en línea. Hablas con quien construye la página.",
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
        "Contractor Website Design | ProCode Systems",
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
      "Website, Google Business Profile, quote form and local SEO for contractors, builders, remodeling, plumbing, electrical, roofing and landscaping.",
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
    painTitle:
      "The messages that eat your afternoon",
    painSubtitle:
      "This is what most contractors' phones sound like in busy season. Each one of these is a job that slips away or a trip you shouldn't have made.",
    pains: [
      "You live on referrals: when the phone goes quiet, there's no second source of work.",
      "The client who pays well compares you to a company with a website, reviews and visible insurance.",
      "You answer the same messages: «what do you charge?», «do you come to my area?», «can you send a quote?».",
      "You quote jobs that were never going to close because nobody asked about budget or area before you drove 40 minutes.",
      "You finish excellent work and end up with no organized photos and no review requested.",
    ],
    systemTitle:
      "What a contractor and construction company website needs",
    systemSubtitle:
      "Six pieces, in the order a homeowner checks them before calling you. It works the same for remodeling, roofing, plumbing, electrical, concrete or HVAC: the photos and form questions change, the structure doesn't.",
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
          "Local campaigns and seasonal ads to fill the slow weeks. Hired separately, as the Digital Marketing plan, from $899 USD a month; ad spend is paid separately.",
      },
    ],
    cycleTitle:
      "Your building year, season by season",
    cycleBody:
      "Weather runs your revenue, and local SEO for contractors takes months to mature. The system gets built before the season, not during it.",
    cycleMonths: [
      {
        label: "Jan – Mar",
        note: "Interiors and remodeling; acquisition to fill the spring.",
      },
      {
        label: "Apr – Jun",
        note: "Peak season: a quote form that filters before you drive out.",
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
          "That's where it pays off most. A solo contractor can't answer while on a roof: the qualifying form and online booking are the assistant you can't hire yet.",
      },
      {
        question: "How long does a contractor website take?",
        answer:
          "A landing page with a quote request form takes about two weeks; a 4-to-6-page site with a page per service and a project gallery, three to four. If the season has already started, we launch the landing page and Google Business Profile first and build the rest while requests are already coming in.",
      },
      {
        question: "Does this work the same for plumbing, electrical or roofing?",
        answer:
          "Yes. A plumber website has the same structure as an electrician website or a roofing company site: the service vocabulary, the job photos and the form questions change. How the client decides does not.",
      },
      {
        question: "How do I get more contractor leads without relying on referrals?",
        answer:
          "Three pieces working together: showing up when someone searches your trade in your city, a form that qualifies before you drive out, and reviews that build trust before the first call. That's the contractor lead generation that carries you through a slow season.",
      },
    ],
    ctaTitle: "20 minutes before your next busy season",
    ctaBody:
      "On the call I open Google the way a homeowner in your city would, search for your trade and we look together at where you show up and what's missing for people to request a quote. You talk to the person who builds the site, not a salesperson.",
  },

  // ────────────────────────────────────────────────────────────
  health: {
    navLabel: "Health & wellness",
    navHint: "A full calendar, patients who return and fewer messages",
    icon: "users",
    meta: {
      title:
        "Medical, Dental & Therapist Website Design | ProCode Systems",
      description:
        "Websites for clinics and private practices: dentists, therapists, doctors, nutritionists and gyms, with online booking, new-patient intake and local SEO.",
      keywords:
        "medical practice website design, clinic website design, dentist website design, therapist website design, doctor website design, nutritionist website, gym website design, online patient booking, local SEO for clinics, healthcare marketing",
    },
    heroEyebrow: "// health & wellness",
    heroTitleA: "Clinic & private practice",
    heroHighlight: "website design",
    heroSubtitle: "They book without asking.",
    intro:
      "Online booking, new-patient intake and local SEO for clinics and private practices: dentists, therapists and psychologists, doctors, nutritionists, gyms and personal trainers.",
    projectId: "fersilva",
    projectEyebrow: "// a project in your industry",
    projectTitle: "A health practice that's already",
    projectHighlight: "working online",
    projectWhy:
      "Fernanda Silva is the private-practice case: she explained her service over chat again and again, and now patients arrive informed and book on their own.",
    projectPoints: [
      "Services explained with what's included and how long they take — that alone cuts many of the usual messages.",
      "Online booking so the patient picks a slot without having to ask you.",
      "Training and approach in plain sight, because in health trust is decided before first contact.",
    ],
    painTitle:
      "Where your patients slip away",
    painSubtitle:
      "None of these gaps is about your care — your practice is good. They're gaps between the Google search and the appointment, and that's where the website works.",
    pains: [
      "You explain the same thing a hundred times over chat: visit price, what's included, how long it takes, whether you take insurance.",
      "You lose patients who wrote on a Sunday night and didn't hear back until Tuesday.",
      "No-shows leave holes in your calendar that never get filled.",
      "The patient comes once and doesn't return, and nothing reminds them to.",
      "Your training and experience aren't visible anywhere, so you compete head-to-head with someone who just started.",
    ],
    systemTitle:
      "What every health website shares",
    systemSubtitle:
      "Whatever your specialty, these pieces are the foundation. Above you saw what changes by specialty; this is what doesn't.",
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
        icon: "shield",
        title: "Credentials, license and reviews in plain sight",
        description:
          "Your license, certifications, approach and real patient reviews, presented with professional judgment.",
      },
    ],
    cycleTitle: "Your practice year, and what the system does in each stretch",
    cycleBody:
      "Health demand has clear peaks, and local SEO for clinics takes months to mature. The system gets built early and uses those peaks without you having to remember.",
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
    faqTitle: "Clinic website design questions",
    faq: [
      {
        question: "Should I publish prices or leave them off?",
        answer:
          "It depends on your practice, and we decide together. Publishing the first-visit price filters out people who were never going to book and cuts many of your messages. For treatments quoted case by case, we use ranges or «from», which gives clarity without boxing you in.",
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
        question: "Does a multi-specialty clinic need several websites?",
        answer:
          "No. The right setup is one site with a page per specialty, each with its own booking or a shared calendar that knows the visit type. That way the clinic ranks for every specialty without splitting its authority across domains.",
      },
      {
        question: "How do I get more therapy clients from the internet?",
        answer:
          "You get more therapy clients by showing up when someone searches your specialty in your city, and removing the friction between that search and the appointment. In practice: a page per specialty, and an automatic booking system open 24 hours a day. Healthcare website design that skips those three only buys you more unanswered messages.",
      },
    ],
    ctaTitle: "20 minutes to review your calendar",
    ctaBody:
      "We search for your specialty in your city the way a new patient would, and I'll tell you at which step they leave: the search, the website or the booking. You talk to the person who builds the site.",
  },

  // ────────────────────────────────────────────────────────────
  professional: {
    navLabel: "Professional services",
    navHint: "Authority, qualified cases and consults that close",
    icon: "scale",
    meta: {
      title:
        "Attorney, Insurance Agent & Consultant Websites | ProCode Systems",
      description:
        "Websites for attorneys, insurance agents and consultants: a page per practice area, an intake form that screens the case, booking and local SEO. Bilingual.",
      keywords:
        "professional services website design, attorney website design, law firm website design, insurance agent website design, insurance agency website, consultant website design, advisor website, legal marketing, local SEO for professional services, lead qualification form",
    },
    heroEyebrow: "// professional services",
    heroTitleA: "Consultant",
    heroHighlight: "website design",
    heroSubtitle: "Trust before the first call.",
    intro:
      "Websites for attorneys, insurance agents, consultants and advisors: proven authority, a page per practice area, an intake form that screens the case and filtered booking.",
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
    painTitle:
      "Five ways to lose a good case",
    painSubtitle:
      "It's almost never a lack of leads. The good one arrived with ten that weren't for you, and went with whoever answered first.",
    pains: [
      "You give free consults to people who were never going to hire you, and have no time left for the ones who would.",
      "Your experience and results aren't visible: you look the same as someone who opened last month.",
      "The prospect asks «what do you charge?» before understanding what you solve, and the conversation dies there.",
      "You send a proposal and never hear back, because nobody follows up.",
      "Your content and reputation live on social media, not on a site that works for you.",
    ],
    systemTitle:
      "The foundation of any professional services website",
    systemSubtitle:
      "What a consultant, a firm or an independent agency needs so prospects trust you and arrive pre-screened. Above is what changes for attorneys and insurance agents.",
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
        title: "Every inquiry with context",
        description:
          "The form asks for the type of matter and the essentials of the case, so you know who to answer first.",
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
        note: "Active acquisition, content and proposals.",
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
    faqTitle: "Professional services website questions",
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
          "That's where it pays off most. A solo professional can't answer while in a hearing or with a client: pre-qualification and online booking are the assistant you can't hire yet.",
      },
      {
        question: "Does this work if I'm a business consultant, not an attorney or agent?",
        answer:
          "Yes. Consultants, financial advisors and service firms use the same foundation: visible authority, a page per service and a qualifying form. What changes is the vocabulary of the case and whether the first consultation is paid.",
      },
      {
        question: "How do I get clients as a solo consultant or professional?",
        answer:
          "A page per practice area instead of one generic “services” page, a form that qualifies the matter before you book, and online booking so the client can reserve without waiting. Client acquisition for consultants almost always breaks on response speed, not on the ad.",
      },
    ],
    ctaTitle: "20 minutes to review your client acquisition",
    ctaBody:
      "I search for your practice area in your city, check what a prospect sees today and tell you which filter your intake is missing. You talk to the person who builds the site, not a salesperson.",
  },

  // ────────────────────────────────────────────────────────────
  realEstate: {
    navLabel: "Real estate",
    navHint: "Listings, qualified leads and buyers who come back",
    icon: "map-pin",
    meta: {
      title:
        "Real Estate & Realtor Website Design | ProCode Systems",
      description:
        "Websites for real estate brokerages, developers and independent agents: a listings catalog, your personal brand, qualified leads and local SEO.",
      keywords:
        "real estate website design, realtor website design, real estate agent website, brokerage website design, real estate developer website, property listings website, single property landing page, real estate marketing, real estate local SEO, Spanish speaking realtor",
    },
    heroEyebrow: "// real estate",
    heroTitleA: "Real estate",
    heroHighlight: "website design",
    heroSubtitle: "Your brand, not just portals.",
    intro:
      "A listings catalog, property pages you can text to buyers, a form that qualifies leads and local SEO for brokerages, developers and independent real estate agents.",
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
      "None of them is solved by a prettier page. They're solved with structure, which is what digital marketing for real estate agencies actually means when it's done properly.",
    pains: [
      "Your whole inventory lives on a portal that charges you for the leads you generated.",
      "You get messages from people who don't qualify and lose whole afternoons showing homes to buyers who can't buy.",
      "Every listing goes out as loose photos on social and disappears from the feed in two days.",
      "The buyer who didn't buy this year never hears from you again, even though they do buy the next one.",
      "Your experience and closed deals aren't visible, so you compete with someone who just got licensed.",
    ],
    systemTitle:
      "The pieces of a real estate site that brings in leads",
    systemSubtitle:
      "They apply to a brokerage with a team and to an agent working under their own name; above you saw where the emphasis changes.",
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
        title: "Leads with context",
        description:
          "The form captures budget, area and buying timeline, so you know who to call first.",
      },
    ],
    cycleTitle:
      "The real estate market, season by season",
    cycleBody:
      "The market has clear seasonality and local SEO for real estate takes months to mature. The system works the full cycle, even while you're closing.",
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
        note: "Slow cycle: neighborhood content and new listing pages.",
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
        question: "Can I have a landing page for a single property or development?",
        answer:
          "Yes, and it works very well for pre-construction and high-end listings: one page with a gallery, location, floor plans and a form, where your ads point. It can live inside your site or on its own.",
      },
      {
        question: "How do I get real estate leads without depending on the portals?",
        answer:
          "You get real estate leads with a property catalog website of your own, listing pages people can share over text, and a form that tells a buyer apart from a seller. The real estate lead generation that lasts is the one that lands on your site, not the one you rent from a portal month after month.",
      },
    ],
    ctaTitle: "20 minutes to review your catalog",
    ctaBody:
      "I search for homes in your area the way a buyer would, and we check whether Google shows you or only the portal. You talk to the person who builds the site.",
  },

  // ────────────────────────────────────────────────────────────
  accounting: {
    navLabel: "Accounting & tax",
    navHint: "Busy season, year-round clients and less manual work",
    icon: "calculator",
    meta: {
      title:
        "Accountant & CPA Firm Website Design | ProCode Systems",
      description:
        "Website design for accountants, CPA and bookkeeping firms: a page per service, document intake, booking and local SEO for accountants. Published base pricing.",
      keywords:
        "accountant website design, CPA website design, CPA firm website design, accounting firm website design, bookkeeper website design, bilingual accountant website, digital marketing for accountants, local SEO for accountants, marketing agency for accounting firms, document intake for accountants, get more accounting clients",
    },
    heroEyebrow: "// accounting & tax",
    heroTitleA: "Accountant & CPA",
    heroHighlight: "website design",
    heroSubtitle: "Clients all year, not weeks.",
    intro:
      "Bilingual websites for accountants, CPA and bookkeeping firms that need to present every service clearly and organize inquiries better, with forms, booking and tracking connected.",
    projectId: "miconta",
    projectEyebrow: "// a case study in your industry",
    projectTitle: "An accounting firm that's already",
    projectHighlight: "winning clients online",
    projectWhy:
      "Mi Conta Universal, a bookkeeping and accounting firm in Cincinnati, Ohio: a bilingual accountant website with every service in plain sight, direct WhatsApp and a free guide that turns visits into leads.",
    projectPoints: [
      "A card per service — bookkeeping, payroll, taxes, business registration, licenses — so clients find what they need without calling to ask.",
      "English and Spanish on the same site, with FAQs that answer the industry's real questions: LLCs, EINs, vendor's licenses and 1099s.",
      "Local SEO for accountants in Cincinnati and all of Ohio, with structured data for address, hours and phone.",
    ],
    painTitle:
      "What happens to a firm every year",
    painSubtitle:
      "These are calendar problems more than service problems — which is why they get solved before January, not in March.",
    pains: [
      "Most of your revenue lands in a few weeks, and the rest of the year the operation goes dark.",
      "Business clients — the ones who really pay — go with whoever looks like a real firm, not whoever knows the craft best.",
      "You answer the same messages fifty times: which documents, how much, when will it be ready.",
      "In the middle of the season you lose prospects because nobody had time to answer them within 24 hours.",
      "Last year's client didn't come back and you found out late, after they'd already filed with someone else.",
    ],
    systemTitle:
      "What an accounting firm website needs",
    systemSubtitle:
      "Built for solo accountants, firms and bookkeepers who sell monthly services, not just tax returns. If your business is tax season only, see the page for tax preparers.",
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
          "An automatic appointment booking system, with separate blocks for individuals and businesses.",
      },
      {
        icon: "repeat",
        title: "Documents from the first contact",
        description:
          "The client uploads their documents through the intake form, so you know which returns you can start.",
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
      "None of this gets improvised mid-season, and local SEO for accountants takes months to mature.",
    cycleMonths: [
      {
        label: "Nov – Dec",
        note: "Reactivating past clients, reviews and an open calendar.",
      },
      {
        label: "Jan – Apr",
        note: "Peak acquisition, online document intake and a full calendar.",
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
    faqTitle: "Accountant website design questions",
    faq: [
      {
        question: "I'm mid-season. Is it worth starting now?",
        answer:
          "It depends on the month. In season we prioritize what launches in two weeks and produces immediately: Google Business Profile, online booking, intake and the WhatsApp button with the message already written. The full site we do when the load drops, with real season data in hand.",
      },
      {
        question: "Does this help if I work alone, from home?",
        answer:
          "That's exactly where it pays off most. A solo preparer has nobody answering while they're working on a return: online document intake is the assistant you can't hire mid-season.",
      },
      {
        question: "Does it work the same in Mexico as in the U.S.?",
        answer:
          "The system is the same; the services and each country's vocabulary change. I work with practices on both sides and adapt the structure, the service names and the calendar to where you are.",
      },
      {
        question: "How is this different from a tax preparer website?",
        answer:
          "A tax preparer lives on the season and on individual filers: the site revolves around W-2 and 1099 intake and IRS dates. An accounting firm lives on monthly retainers with businesses: the site sells bookkeeping, payroll and accounting all year. If you do both, you need both sections.",
      },
      {
        question: "How do I get more accounting clients outside of tax season?",
        answer:
          "You get more accounting clients year-round by selling what people hire in March and September too: monthly bookkeeping, payroll, planning and back-tax cleanup. Each one deserves its own page; a single “tax services” page leaves you competing in January and February only.",
      },
    ],
    ctaTitle: "20 minutes before the season starts",
    ctaBody:
      "We look at what a business owner searching for an accountant in your city finds today, and which monthly service you aren't selling online. You talk to the person who builds the site.",
  },
};

export const segments: Record<Lang, SegmentDict> = { es, en };

/** Giro o nicho: los dos usan la misma forma y la misma plantilla. */
export function getSegment(lang: Lang, key: LandingKey): Segment {
  return isNiche(key) ? niches[lang][key] : segments[lang][key];
}
