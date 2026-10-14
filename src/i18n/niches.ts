// ============================================================
// PÁGINAS DE NICHO — un oficio concreto dentro de cada giro
// ------------------------------------------------------------
// Octubre de 2026. Las cinco páginas de giro (segments.ts) agrupan oficios
// que se buscan por separado: nadie escribe «página web para salud y
// bienestar», escribe «página web para dentistas» o «página web para
// psicólogos». Cada nicho tiene aquí su propia landing, con la misma
// plantilla (SegmentPage) y su propio copy.
//
// Regla: si el texto de un nicho se pudiera pegar en otro cambiando solo el
// nombre del oficio, esa página no debe existir. Google la trataría como
// página puerta (doorway) y arrastraría al resto del sitio. Por eso cada uno
// tiene sus propios dolores, su calendario, sus piezas y sus dudas.
//
// Cada nicho cuelga de un giro (NICHE_PARENT en ui.ts): el giro enlaza a sus
// nichos y cada nicho enlaza de vuelta al giro y a sus hermanos.
//
// Los proyectos que se muestran son los reales del portafolio. Cuando no hay
// un cliente del oficio exacto, el texto lo dice y explica por qué el
// proyecto más cercano aplica; nunca se presenta como caso del oficio.
// ============================================================

import type { Lang, NicheKey } from "./ui";
import type { Segment } from "./segments";

type NicheDict = Record<NicheKey, Segment>;

const es: NicheDict = {
  // ────────────────────────────────────────────────────────────
  // Separado de /contabilidad-e-impuestos/ en octubre de 2026: el
  // preparador de impuestos vive de una temporada de cuatro meses y de
  // personas físicas; el despacho contable, de igualas mensuales y de
  // negocios. Son búsquedas y ventas distintas.
  taxPreparers: {
    navLabel: "Preparadores de impuestos",
    navHint: "Temporada de impuestos, ITIN y documentos antes de la cita",
    icon: "receipt",
    meta: {
      title: "Páginas Web para Preparadores de Impuestos | ProCode Systems",
      description:
        "Páginas web para preparadores de impuestos: intake de W-2 y 1099, agenda para la temporada, ITIN y SEO local en español e inglés. Precios base publicados.",
      keywords:
        "páginas web para preparadores de impuestos, página web para preparador de impuestos, diseño web para preparadores de impuestos, marketing para preparadores de impuestos, cómo conseguir clientes para preparar impuestos, página web para taxes, sitio web para tax preparer, SEO local para preparadores de impuestos, intake de documentos de impuestos",
    },
    heroEyebrow: "// preparadores de impuestos",
    heroTitleA: "Páginas web para",
    heroHighlight: "preparadores de impuestos",
    heroSubtitle: "Llegan con sus papeles listos.",
    intro:
      "Página web bilingüe para preparadores de impuestos con intake de documentos, agenda de citas para la temporada, servicios de ITIN y SEO local para aparecer cuando buscan «taxes cerca de mí».",
    projectId: "demo-taxpro",
    projectEyebrow: "// demo del giro",
    projectTitle: "Cómo se ve una oficina de taxes",
    projectHighlight: "lista para la temporada",
    projectWhy:
      "Herrera Tax & Advisory es una demo, no un cliente: la construí para enseñar qué necesita una oficina de impuestos hispana en EE. UU. antes de enero. Servicios para personas y negocios, consulta gratuita y credenciales al frente.",
    projectPoints: [
      "Cada trámite con su página —declaración personal, de negocio, ITIN, enmiendas— para que el cliente encuentre lo suyo sin llamar.",
      "Español e inglés en el mismo sitio, porque la familia busca en español y el dueño de negocio muchas veces en inglés.",
      "Botón de consulta en cada sección: en temporada el cliente decide en minutos, no en días.",
    ],
    painTitle: "Lo que pasa cada temporada",
    painSubtitle:
      "Ninguno de estos problemas se arregla con anuncios. Se arregla con una página que trabaja mientras tú preparas declaraciones.",
    pains: [
      "El cliente llega a la cita sin el W-2, sin el 1099 o sin el número de su dependiente, y la cita se repite.",
      "En febrero contestas WhatsApp hasta la medianoche: «¿cuánto cobras?», «¿qué papeles llevo?», «¿hacen ITIN?».",
      "Quien no te conoce te compara con la cadena de la esquina y con el software gratis, y no tienes cómo explicar por qué tú.",
      "En mayo el teléfono se calla y no tienes nada que venderle a los clientes que ya atendiste.",
      "Los clientes del año pasado no reciben ni un recordatorio y se van con quien les escribió primero.",
    ],
    systemTitle: "Qué incluye una página web para preparadores de impuestos",
    systemSubtitle:
      "Está pensada para la temporada de impuestos: que el cliente llegue informado, con sus documentos y con cita, y que el resto del año la página siga vendiendo.",
    system: [
      {
        icon: "layout",
        title: "Una página por trámite",
        description:
          "Declaración personal, de negocio y de trabajadores independientes, ITIN, enmiendas y años atrasados. Cada una con su lista de documentos.",
      },
      {
        icon: "clipboard-check",
        title: "Intake de documentos antes de la cita",
        description:
          "El cliente sube W-2, 1099, identificaciones y comprobantes desde el celular. Tú sabes qué falta antes de que se siente.",
      },
      {
        icon: "calendar",
        title: "Agenda para la temporada de impuestos",
        description:
          "Bloques distintos para declaraciones sencillas, de negocio y citas de entrega, con horario extendido de enero a abril.",
      },
      {
        icon: "shield",
        title: "PTIN, credenciales y reseñas a la vista",
        description:
          "Tu PTIN, si eres EA o certificador de ITIN, los años preparando y las reseñas de clientes: lo que decide a quien no te conoce.",
      },
      {
        icon: "target",
        title: "SEO local para «taxes cerca de mí»",
        description:
          "Perfil de Empresa en Google con horario de temporada, servicios en inglés y español y un sistema para pedir reseñas al entregar la declaración.",
      },
      {
        icon: "repeat",
        title: "Recordatorio para el año siguiente",
        description:
          "Formulario de «avísame en enero» y una lista de clientes anteriores lista para escribirles antes de que empiece la temporada.",
      },
    ],
    cycleTitle: "Tu año fiscal, y qué hace la página en cada tramo",
    cycleBody:
      "La temporada de impuestos dura cuatro meses, pero el SEO local tarda meses en madurar. Lo que no esté listo en noviembre no te va a traer clientes en febrero.",
    cycleMonths: [
      { label: "Oct – Dic", note: "Página lista, reseñas pedidas y lista de espera para enero." },
      { label: "Ene – Abr", note: "Temporada: intake, agenda extendida y respuestas automáticas." },
      { label: "May – Jun", note: "Enmiendas, cartas del IRS y años atrasados." },
      { label: "Jul – Sep", note: "Extensiones, ITIN y servicios para negocios todo el año." },
    ],
    faqTitle: "Dudas sobre páginas web para preparadores de impuestos",
    faq: [
      {
        question: "¿Cuándo conviene hacer la página: antes o después de la temporada?",
        answer:
          "Antes. Lo ideal es tenerla publicada entre septiembre y noviembre, para que Google la conozca y el Perfil de Empresa tenga reseñas cuando la gente empiece a buscar en enero. Si ya estás en temporada, lanzamos primero lo que da resultado en dos semanas: agenda, intake y Perfil de Empresa.",
      },
      {
        question: "¿Es seguro que los clientes suban sus documentos por la página?",
        answer:
          "Sí, siempre que se haga con la herramienta correcta. Los documentos no se quedan en la página web: se suben a un portal de archivos cifrado o a tu software de impuestos, con conexión segura. Te recomiendo el que mejor se acomode a cómo trabajas hoy.",
      },
      {
        question: "Trabajo desde mi casa o en temporada nada más. ¿Me sirve?",
        answer:
          "Es donde más rinde. Si estás solo, nadie contesta mientras preparas una declaración. La página responde por ti lo que siempre preguntan, agenda la cita y te pide los documentos.",
      },
      {
        question: "¿Puedo anunciar el servicio de ITIN?",
        answer:
          "Sí, y conviene darle su propia página, porque mucha gente lo busca por separado. Si eres agente certificador (CAA), se dice claramente; si no, se explica qué parte del trámite haces tú.",
      },
      {
        question: "¿Cómo consigo clientes de impuestos fuera de temporada?",
        answer:
          "Con servicios que se contratan todo el año: enmiendas, años atrasados, respuesta a cartas del IRS, ITIN y declaraciones de negocio con extensión. Si además llevas contabilidad, la página de tu despacho contable vende esa parte.",
      },
    ],
    ctaTitle: "20 minutos antes de que empiece la temporada",
    ctaBody:
      "Te digo qué encuentra hoy alguien que busca «taxes» en tu ciudad y qué se puede tener listo antes de enero. Hablas directo conmigo, que soy quien hace el trabajo.",
  },

  // ────────────────────────────────────────────────────────────
  dentists: {
    navLabel: "Dentistas",
    navHint: "Tratamientos, seguros dentales y pacientes que agendan solos",
    icon: "sparkles",
    meta: {
      title: "Páginas Web para Dentistas y Clínicas | ProCode Systems",
      description:
        "Páginas web para dentistas: una página por tratamiento, seguros dentales, agenda en línea, urgencias y SEO local para clínicas dentales. Precios base en USD.",
      keywords:
        "páginas web para dentistas, página web para dentistas, diseño web para dentistas, página web para clínica dental, diseño web para consultorios dentales, marketing para dentistas, marketing dental, SEO para dentistas, cómo conseguir pacientes para mi consultorio dental, dentista que habla español",
    },
    heroEyebrow: "// dentistas",
    heroTitleA: "Páginas web para",
    heroHighlight: "dentistas y clínicas dentales",
    heroSubtitle: "Pacientes que llegan sabiendo qué quieren.",
    intro:
      "Página web para dentistas y clínicas dentales con una página por tratamiento, seguros y financiamiento explicados, agenda en línea, urgencias dentales y SEO local para «dentista cerca de mí».",
    projectId: "fersilva",
    projectEyebrow: "// proyecto de salud",
    projectTitle: "La misma estructura que ya usa",
    projectHighlight: "una consulta de salud",
    projectWhy:
      "Todavía no tengo un consultorio dental en el portafolio, y no voy a inventarlo. El caso más cercano es Fernanda Silva, nutrióloga: un consultorio que explicaba sus servicios por mensaje y hoy recibe pacientes que agendan solos. Para un dentista funciona igual, con una página por tratamiento.",
    projectPoints: [
      "Servicios explicados con lo que incluyen y cuánto duran: lo mismo que pide un paciente antes de una limpieza o una valoración de ortodoncia.",
      "Agenda en línea para que el paciente elija horario sin llamar en horas de consulta.",
      "Formación visible, que en odontología pesa tanto como las fotos de antes y después.",
    ],
    painTitle: "Lo que pasa en casi cualquier consultorio dental",
    painSubtitle:
      "El paciente dental compara mucho antes de agendar. Estos son los huecos por donde se va con otra clínica.",
    pains: [
      "Te preguntan precio de implantes, ortodoncia o blanqueamiento por mensaje y se van cuando les dices «hay que valorarlo».",
      "La recepción no alcanza a contestar el teléfono mientras atiende a quien está en el sillón.",
      "No queda claro qué seguros dentales aceptas, y el paciente prefiere no arriesgarse.",
      "Alguien con una muela rota busca «dentista de urgencia» un sábado y no te encuentra.",
      "El paciente viene a una limpieza y no regresa a los seis meses porque nada se lo recuerda.",
    ],
    systemTitle: "Qué incluye una página web para dentistas",
    systemSubtitle:
      "Cada tratamiento se busca por separado en Google. Por eso la página se organiza por tratamientos, no como un folleto del consultorio.",
    system: [
      {
        icon: "layout",
        title: "Una página por tratamiento",
        description:
          "Limpieza, ortodoncia e Invisalign, implantes, coronas, blanqueamiento, endodoncia y odontopediatría. Cada una con lo que incluye y cuánto tarda.",
      },
      {
        icon: "calendar",
        title: "Agenda en línea por tipo de cita",
        description:
          "Valoración, limpieza, seguimiento y urgencia, con duraciones distintas. Se conecta con el calendario o el software que ya usa tu recepción.",
      },
      {
        icon: "receipt",
        title: "Seguros y financiamiento explicados",
        description:
          "Qué planes aceptas, si das plan de pagos o financiamiento y desde cuánto empieza cada tratamiento: menos dudas antes de agendar.",
      },
      {
        icon: "star",
        title: "Antes y después, y reseñas reales",
        description:
          "Casos con permiso del paciente, presentados con criterio, y reseñas de Google en la página del tratamiento correspondiente.",
      },
      {
        icon: "phone",
        title: "Urgencias dentales a un toque",
        description:
          "Botón de llamada y de WhatsApp visible en el celular, con horario de urgencias claro para quien tiene dolor ahora.",
      },
      {
        icon: "target",
        title: "SEO local para «dentista cerca de mí»",
        description:
          "Perfil de Empresa en Google con tratamientos, fotos de la clínica, horario y reseñas, en inglés y en español.",
      },
    ],
    cycleTitle: "Tu año en el consultorio, y qué hace la página",
    cycleBody:
      "La demanda dental sube con los beneficios del seguro nuevo y con el regreso a clases. La página se prepara antes de cada pico.",
    cycleMonths: [
      { label: "Ene – Mar", note: "Seguros renovados: valoraciones y pacientes nuevos." },
      { label: "Abr – Jun", note: "Estética y blanqueamiento antes de bodas y graduaciones." },
      { label: "Jul – Sep", note: "Regreso a clases: revisiones de niños y ortodoncia." },
      { label: "Oct – Dic", note: "«Úsalo o piérdelo»: recordatorio de beneficios del seguro." },
    ],
    faqTitle: "Dudas sobre páginas web para dentistas",
    faq: [
      {
        question: "¿Conviene publicar precios de tratamientos?",
        answer:
          "Conviene publicar desde cuánto empiezan y qué incluye la valoración. No hace falta un precio cerrado de un implante, pero un rango evita que el paciente se vaya sin preguntar. Lo decidimos según tu clínica y tu mercado.",
      },
      {
        question: "¿La agenda en línea se conecta con nuestro software dental?",
        answer:
          "Depende del software. Muchos ofrecen agenda en línea propia y la integramos en la página; si no, usamos una agenda que sincroniza con tu calendario. Lo revisamos en la primera llamada para no dejarte con dos agendas.",
      },
      {
        question: "¿Puedo poner fotos de antes y después?",
        answer:
          "Sí, con autorización por escrito del paciente y sin datos que lo identifiquen. Se presentan con contexto —qué tratamiento y cuánto tiempo— y sin prometer resultados.",
      },
      {
        question: "Mi clínica atiende en español. ¿Cómo lo aprovecho?",
        answer:
          "Diciéndolo claro y haciendo la página en los dos idiomas. Mucha gente busca «dentista que hable español» en su ciudad, y es una ventaja que pocas clínicas muestran bien. Cada idioma va en su propia URL para que Google indexe ambas.",
      },
      {
        question: "¿Y la información de salud de los pacientes?",
        answer:
          "La página pide lo mínimo para agendar. Si necesitas formularios clínicos en línea, se conectan a una herramienta pensada para datos de salud; la historia clínica nunca se guarda en la página web.",
      },
    ],
    ctaTitle: "20 minutos para revisar cómo te encuentran tus pacientes",
    ctaBody:
      "Te digo qué ve hoy alguien que busca un dentista en tu ciudad y qué tratamiento te está costando pacientes. Hablas directo conmigo, que soy quien hace el trabajo.",
  },

  // ────────────────────────────────────────────────────────────
  psychologists: {
    navLabel: "Psicólogos y terapeutas",
    navHint: "Confianza antes de la primera sesión y agenda sin mensajes",
    icon: "message-circle",
    meta: {
      title: "Páginas Web para Psicólogos y Terapeutas | ProCode Systems",
      description:
        "Páginas web para psicólogos y terapeutas: enfoque y especialidades claras, sesiones en línea, agenda privada y SEO local. En español e inglés, precios base.",
      keywords:
        "páginas web para psicólogos, página web para psicólogos, diseño web para psicólogos, página web para terapeutas, página web para psicoterapeutas, marketing para psicólogos, cómo conseguir pacientes como psicólogo, psicólogo en línea en español, terapia en español, SEO para psicólogos",
    },
    heroEyebrow: "// psicólogos y terapeutas",
    heroTitleA: "Páginas web para",
    heroHighlight: "psicólogos y terapeutas",
    heroSubtitle: "Que te elijan antes de escribirte.",
    intro:
      "Página web para psicólogos, psicoterapeutas y terapeutas con tu enfoque y especialidades explicados, sesiones presenciales y en línea, agenda privada y SEO local en español e inglés.",
    projectId: "fersilva",
    projectEyebrow: "// proyecto de salud",
    projectTitle: "Una consulta privada que ya",
    projectHighlight: "agenda sin explicar por mensaje",
    projectWhy:
      "No tengo todavía una psicóloga en el portafolio. Fernanda Silva, nutrióloga, es el caso más cercano: consulta privada, en línea y presencial, donde el paciente necesitaba entender el enfoque antes de agendar. Es el mismo problema que tiene un terapeuta.",
    projectPoints: [
      "El enfoque y la forma de trabajar explicados, para que el paciente sepa qué esperar de la primera sesión.",
      "Agenda en línea: el paciente reserva sin tener que contar su motivo por WhatsApp.",
      "Consulta en línea y presencial claramente separadas.",
    ],
    painTitle: "Lo que escucho de casi todos los terapeutas",
    painSubtitle:
      "En terapia la decisión es emocional y privada. La página tiene que bajar la ansiedad del primer contacto, no aumentarla.",
    pains: [
      "El paciente potencial no se anima a escribir porque no sabe si atiendes lo suyo: ansiedad, pareja, duelo, adolescentes.",
      "Vives de un directorio de terapeutas que cobra cada mes y te pone al lado de cincuenta colegas.",
      "Pasas horas en llamadas de «primera orientación» con personas que no podían pagar la sesión o buscaban otra cosa.",
      "No queda claro en qué estados o países puedes atender en línea, y recibes consultas que no puedes tomar.",
      "Tu formación y tu enfoque no se ven, y compites solo por precio.",
    ],
    systemTitle: "Qué incluye una página web para psicólogos",
    systemSubtitle:
      "Se construye para que el paciente se reconozca, entienda cómo trabajas y agende sin exponerse más de lo necesario.",
    system: [
      {
        icon: "layout",
        title: "Una página por motivo de consulta",
        description:
          "Ansiedad, depresión, terapia de pareja, duelo, adolescentes o la especialidad que trabajes. Así te encuentra quien busca exactamente eso.",
      },
      {
        icon: "calendar",
        title: "Agenda privada y discreta",
        description:
          "El paciente elige horario sin explicar su motivo por mensaje. Primera sesión, seguimiento y sesión breve de orientación por separado.",
      },
      {
        icon: "users",
        title: "Tu enfoque, explicado en palabras sencillas",
        description:
          "Cómo es una sesión, cuánto dura, con qué corriente trabajas y qué pasa en la primera cita. Lo que el paciente quiere saber y no se atreve a preguntar.",
      },
      {
        icon: "shield",
        title: "Cédula o licencia y modalidad a la vista",
        description:
          "Tu cédula o tu licencia, en qué estados o países puedes atender en línea y en qué idioma.",
      },
      {
        icon: "lock",
        title: "Privacidad desde el primer contacto",
        description:
          "Formulario mínimo, aviso de privacidad claro y nada de datos clínicos en la página. Si necesitas expedientes en línea, se conecta una herramienta clínica.",
      },
      {
        icon: "target",
        title: "SEO para «psicólogo en español»",
        description:
          "Perfil de Empresa en Google y páginas pensadas para quien busca terapia en español en su ciudad o en línea.",
      },
    ],
    cycleTitle: "Tu año de consulta, y qué hace la página",
    cycleBody:
      "La demanda de terapia sube en enero, al volver a clases y en las fiestas. Si la página ya está posicionada, no dependes del directorio en esos meses.",
    cycleMonths: [
      { label: "Ene – Mar", note: "Propósitos de año nuevo: pico de primeras consultas." },
      { label: "Abr – Jun", note: "Contenido sobre tus especialidades y reseñas." },
      { label: "Jul – Sep", note: "Regreso a clases: adolescentes y familias." },
      { label: "Oct – Dic", note: "Fiestas, duelo y estrés: agenda abierta y respuesta rápida." },
    ],
    faqTitle: "Dudas sobre páginas web para psicólogos",
    faq: [
      {
        question: "¿Necesito una página si ya estoy en un directorio de terapeutas?",
        answer:
          "El directorio te da visitas, pero te pone junto a decenas de colegas y te cobra cada mes. Tu página es donde el paciente que ya te encontró decide quedarse contigo. Lo mejor es tener los dos y que el directorio enlace a tu sitio.",
      },
      {
        question: "¿Puedo atender pacientes de otros estados o países en línea?",
        answer:
          "Eso lo define tu licencia, no la página. Lo que sí hace la página es decirlo claramente: dónde puedes atender en línea y dónde no, para que no te escriba quien no puedes tomar.",
      },
      {
        question: "¿Es buena idea publicar el costo de la sesión?",
        answer:
          "En terapia suele ayudar: el paciente con ansiedad prefiere no preguntar. Si das tarifa social o aceptas seguro, también se dice. Lo decidimos según tu consulta.",
      },
      {
        question: "¿Cómo cuido la confidencialidad de los pacientes?",
        answer:
          "La página no guarda información clínica. El formulario pide lo mínimo para agendar y lleva aviso de privacidad. Para expedientes o notas se usa una plataforma clínica aparte.",
      },
      {
        question: "¿Cómo consigo pacientes como psicólogo independiente?",
        answer:
          "Con una página por cada motivo de consulta que atiendes, un Perfil de Empresa en Google con reseñas y una agenda que permita reservar sin dar explicaciones. Lo que más pacientes cuesta es que no sepan si atiendes lo suyo.",
      },
    ],
    ctaTitle: "20 minutos para revisar cómo te encuentran tus pacientes",
    ctaBody:
      "Te digo qué ve hoy alguien que busca terapia en tu ciudad o en línea, y qué te falta para que agende contigo. Hablas directo conmigo, que soy quien hace el trabajo.",
  },

  // ────────────────────────────────────────────────────────────
  doctors: {
    navLabel: "Médicos y doctores",
    navHint: "Especialidad, seguros aceptados y citas en línea",
    icon: "clipboard-check",
    meta: {
      title: "Páginas Web para Médicos y Doctores | ProCode Systems",
      description:
        "Páginas web para médicos y doctores: especialidades, seguros aceptados, telemedicina, agenda en línea y SEO local para consultorios médicos. Precios base.",
      keywords:
        "páginas web para médicos, página web para médicos, página web para doctores, diseño web para médicos, página web para consultorio médico, diseño web para clínicas médicas, marketing para médicos, SEO para médicos, doctor que habla español, médico hispano",
    },
    heroEyebrow: "// médicos y doctores",
    heroTitleA: "Páginas web para",
    heroHighlight: "médicos y consultorios",
    heroSubtitle: "Citas sin llamadas perdidas.",
    intro:
      "Página web para médicos generales y especialistas con servicios y padecimientos explicados, seguros aceptados, telemedicina, agenda en línea y SEO local para «doctor que habla español».",
    projectId: "fersilva",
    projectEyebrow: "// proyecto de salud",
    projectTitle: "Un consultorio de salud que ya",
    projectHighlight: "recibe pacientes informados",
    projectWhy:
      "Aún no tengo un médico en el portafolio. Fernanda Silva, nutrióloga, es el caso de salud más cercano: servicios explicados, formación visible y agenda en línea. Esa misma base es la que necesita un consultorio médico, más especialidades y seguros.",
    projectPoints: [
      "Cada servicio con lo que incluye y cuánto dura, para que la recepción conteste menos.",
      "Agenda en línea que el paciente usa a cualquier hora.",
      "Formación y trayectoria a la vista, que es lo que revisa un paciente antes de elegir médico.",
    ],
    painTitle: "Lo que se repite en los consultorios médicos",
    painSubtitle:
      "El paciente busca alivio rápido y certeza. Si la página no le da ninguna de las dos, llama a otro consultorio.",
    pains: [
      "El teléfono suena mientras la recepción atiende, y las llamadas perdidas son pacientes que se van.",
      "No queda claro qué seguros aceptas ni cuánto cuesta la consulta sin seguro.",
      "Tus especialidades no aparecen en Google y sí las de una clínica grande que hace menos de lo que tú haces.",
      "Ofreces telemedicina, pero nadie lo sabe porque no está en ningún lado.",
      "El paciente en español no sabe que en tu consultorio lo atienden en su idioma.",
    ],
    systemTitle: "Qué incluye una página web para médicos",
    systemSubtitle:
      "Pensada para que el paciente sepa en un minuto si eres el médico que busca, si acepta su seguro y cuándo puede verte.",
    system: [
      {
        icon: "layout",
        title: "Una página por especialidad y padecimiento",
        description:
          "Medicina general, control de diabetes, hipertensión, chequeos, exámenes físicos o tu especialidad, cada uno con su página.",
      },
      {
        icon: "calendar",
        title: "Citas en línea y telemedicina",
        description:
          "Primera vez, seguimiento y consulta virtual por separado, conectadas con tu calendario o con el sistema que ya usa el consultorio.",
      },
      {
        icon: "receipt",
        title: "Seguros y precios sin seguro",
        description:
          "Los planes que aceptas y, si atiendes sin seguro, desde cuánto cuesta la consulta. Es la pregunta número uno en la recepción.",
      },
      {
        icon: "shield",
        title: "Credenciales y hospital, a la vista",
        description:
          "Cédula o licencia, certificaciones del consejo, hospitales donde atiendes y años de práctica.",
      },
      {
        icon: "lock",
        title: "Formularios sin datos clínicos en la web",
        description:
          "La página pide lo mínimo para la cita. Los formularios de historial se conectan a una herramienta pensada para datos de salud.",
      },
      {
        icon: "target",
        title: "SEO local para «doctor que habla español»",
        description:
          "Perfil de Empresa en Google con especialidades, horario, seguros y reseñas, en inglés y en español.",
      },
    ],
    cycleTitle: "Tu año en el consultorio, y qué hace la página",
    cycleBody:
      "Hay temporadas previsibles: chequeos de inicio de año, exámenes escolares y temporada de gripe. La página las anuncia antes de que lleguen.",
    cycleMonths: [
      { label: "Ene – Mar", note: "Deducibles nuevos: chequeos y pacientes nuevos." },
      { label: "Abr – Jun", note: "Alergias y exámenes físicos para deportes." },
      { label: "Jul – Sep", note: "Exámenes escolares y vacunas antes de clases." },
      { label: "Oct – Dic", note: "Temporada de gripe y citas antes de que cambie el seguro." },
    ],
    faqTitle: "Dudas sobre páginas web para médicos",
    faq: [
      {
        question: "¿La página tiene que cumplir con HIPAA?",
        answer:
          "La página informativa y la agenda no guardan historiales, así que pide solo lo necesario para la cita. Si quieres recibir información clínica en línea, se conecta un formulario o portal que cumpla HIPAA y firme un acuerdo de socio comercial (BAA). La historia clínica se queda en tu expediente electrónico.",
      },
      {
        question: "¿Se puede conectar con mi expediente electrónico o mi agenda actual?",
        answer:
          "Muchos sistemas de expediente tienen agenda en línea propia; en ese caso la integramos en la página. Si no, usamos una agenda que sincroniza con tu calendario. Lo revisamos antes de empezar.",
      },
      {
        question: "Soy especialista, no médico general. ¿Cambia algo?",
        answer:
          "Cambia el enfoque: el paciente del especialista suele llegar referido y busca tu nombre o su padecimiento. La página se organiza por padecimientos y procedimientos, y deja claro cómo pedir cita con o sin referencia.",
      },
      {
        question: "¿Vale la pena hacerla en inglés y en español?",
        answer:
          "En EE. UU., casi siempre. Mucha gente busca «doctor que hable español» en su ciudad, y es una ventaja que pocos consultorios explican bien. Cada idioma va en su propia URL para que Google indexe las dos.",
      },
      {
        question: "¿Cómo consigo más pacientes para mi consultorio?",
        answer:
          "Apareciendo cuando alguien busca tu especialidad en tu zona, diciendo qué seguros aceptas y dejando que agende sin llamar. Las reseñas en tu Perfil de Empresa en Google hacen el resto.",
      },
    ],
    ctaTitle: "20 minutos para revisar tu consultorio en Google",
    ctaBody:
      "Te digo qué ve hoy un paciente que busca tu especialidad en tu ciudad y qué le falta a tu página para que agende. Hablas directo conmigo, que soy quien hace el trabajo.",
  },

  // ────────────────────────────────────────────────────────────
  nutritionists: {
    navLabel: "Nutriólogos",
    navHint: "Planes, consulta en línea y pacientes que regresan",
    icon: "trending-up",
    meta: {
      title: "Páginas Web para Nutriólogos | ProCode Systems",
      description:
        "Páginas web para nutriólogos y nutricionistas: planes y paquetes explicados, consulta en línea y presencial, agenda y SEO local. Con un caso real publicado.",
      keywords:
        "páginas web para nutriólogos, página web para nutriólogos, página web para nutricionistas, diseño web para nutriólogos, marketing para nutriólogos, cómo conseguir pacientes nutriólogo, consulta de nutrición en línea, nutrióloga en línea, SEO para nutriólogos",
    },
    heroEyebrow: "// nutriólogos",
    heroTitleA: "Páginas web para",
    heroHighlight: "nutriólogos y nutricionistas",
    heroSubtitle: "Pacientes que llegan decididos.",
    intro:
      "Página web para nutriólogos y nutricionistas con planes y paquetes explicados, consulta en línea y presencial, agenda automática y SEO local para atraer pacientes de tu ciudad y de cualquier lugar.",
    projectId: "fersilva",
    projectEyebrow: "// caso real en tu oficio",
    projectTitle: "Una nutrióloga que ya",
    projectHighlight: "recibe pacientes en línea",
    projectWhy:
      "Fernanda Silva es nutrióloga y es cliente: explicaba su servicio por mensaje una y otra vez, y hoy los pacientes llegan a la consulta sabiendo qué incluye y con la cita ya agendada.",
    projectPoints: [
      "Servicios explicados con lo que incluyen y cuánto duran: menos mensajes repitiendo lo mismo.",
      "Agenda en línea para que el paciente elija horario sin preguntar.",
      "Consulta en línea y presencial, con su formación y enfoque visibles.",
    ],
    painTitle: "Lo que viven casi todos los nutriólogos",
    painSubtitle:
      "La nutrición se vende por confianza y por constancia. La página tiene que ayudar con las dos.",
    pains: [
      "Explicas por WhatsApp, una y otra vez, qué incluye la consulta, cuánto cuesta y si das plan de alimentación.",
      "Tu contenido en redes funciona, pero los seguidores no tienen dónde agendar ni comprar un paquete.",
      "El paciente viene a dos consultas y abandona, porque no hay un plan claro ni un seguimiento.",
      "Atiendes en línea, pero tu página solo habla del consultorio y pierdes pacientes de otras ciudades.",
      "Compites con «coaches» sin formación y no se nota la diferencia de tu cédula.",
    ],
    systemTitle: "Qué incluye una página web para nutriólogos",
    systemSubtitle:
      "Construida para convertir seguidores en pacientes y pacientes en procesos completos, no en una sola consulta.",
    system: [
      {
        icon: "layout",
        title: "Una página por objetivo",
        description:
          "Bajar de peso, nutrición deportiva, diabetes y resistencia a la insulina, embarazo, nutrición infantil. Cada una con su enfoque.",
      },
      {
        icon: "receipt",
        title: "Planes y paquetes con precio",
        description:
          "Consulta única, paquete de seguimiento y plan mensual, con lo que incluye cada uno. Así el paciente compra el proceso, no una cita suelta.",
      },
      {
        icon: "calendar",
        title: "Agenda en línea y presencial",
        description:
          "Bloques distintos para primera consulta, seguimiento y videollamada, sincronizados con tu calendario.",
      },
      {
        icon: "clipboard-check",
        title: "Cuestionario antes de la primera consulta",
        description:
          "Hábitos, objetivos, padecimientos y medidas, contestado antes de la cita para aprovechar mejor la sesión.",
      },
      {
        icon: "shield",
        title: "Cédula y formación al frente",
        description:
          "Tu cédula profesional, especialidades y certificaciones: lo que te separa de quien vende dietas en redes.",
      },
      {
        icon: "link",
        title: "Tus redes llevan a un solo lugar",
        description:
          "Un enlace en tu biografía que lleva a la página donde se agenda, no a un mensaje que tienes que contestar tú.",
      },
    ],
    cycleTitle: "Tu año de consulta, y qué hace la página",
    cycleBody:
      "La nutrición tiene picos muy marcados. Si la página está lista antes de cada uno, el pico se convierte en pacientes de varios meses.",
    cycleMonths: [
      { label: "Ene – Feb", note: "Propósitos de año nuevo: el mayor pico del año." },
      { label: "Mar – Jun", note: "Antes del verano: planes de tres meses y seguimiento." },
      { label: "Jul – Sep", note: "Regreso a clases: nutrición infantil y familiar." },
      { label: "Oct – Dic", note: "Fiestas: planes de mantenimiento y lista para enero." },
    ],
    faqTitle: "Dudas sobre páginas web para nutriólogos",
    faq: [
      {
        question: "Ya tengo seguidores en Instagram. ¿Para qué una página?",
        answer:
          "Para que esos seguidores tengan dónde agendar y comprar sin escribirte. Las redes atraen; la página convierte. Además, Google no muestra tus publicaciones cuando alguien busca «nutrióloga en mi ciudad», pero sí puede mostrar tu página.",
      },
      {
        question: "¿Puedo cobrar los paquetes desde la página?",
        answer:
          "Sí. Se puede cobrar la consulta o el paquete al agendar, con tarjeta, para reducir las citas que no se presentan. Lo configuramos con la plataforma de pagos que prefieras.",
      },
      {
        question: "¿Sirve si solo doy consulta en línea?",
        answer:
          "Sí, y en ese caso la página es todavía más importante: es tu consultorio. Se trabaja el SEO por especialidad y por idioma, no solo por ciudad.",
      },
      {
        question: "¿Puede quedar en inglés y en español?",
        answer:
          "Sí. Si atiendes en EE. UU. o a hispanos en línea, conviene tener las dos versiones, cada una en su propia URL para que Google indexe ambas.",
      },
      {
        question: "¿Cómo consigo más pacientes como nutrióloga?",
        answer:
          "Con una página por objetivo de salud, paquetes claros que conviertan una consulta en un proceso, y reseñas de pacientes reales. Y con un solo enlace en tus redes que lleve a agendar.",
      },
    ],
    ctaTitle: "20 minutos para revisar tu consulta en línea",
    ctaBody:
      "Te digo qué ve hoy alguien que busca nutrióloga en tu ciudad o en línea y qué le falta a tu página para que agende. Hablas directo conmigo, que soy quien hace el trabajo.",
  },

  // ────────────────────────────────────────────────────────────
  gyms: {
    navLabel: "Gimnasios y entrenadores",
    navHint: "Clase de prueba, membresías y socios que no cancelan",
    icon: "zap",
    meta: {
      title: "Páginas Web para Gimnasios y Entrenadores | ProCode Systems",
      description:
        "Páginas web para gimnasios, estudios fitness y entrenadores personales: horario de clases, clase de prueba, membresías y SEO local. Precios base publicados.",
      keywords:
        "páginas web para gimnasios, página web para gimnasios, diseño web para gimnasios, página web para entrenador personal, página web para estudio de yoga, página web para crossfit, marketing para gimnasios, cómo conseguir socios para un gimnasio, SEO para gimnasios",
    },
    heroEyebrow: "// gimnasios y entrenadores",
    heroTitleA: "Páginas web para",
    heroHighlight: "gimnasios y entrenadores",
    heroSubtitle: "De curioso a socio en una visita.",
    intro:
      "Página web para gimnasios, estudios de yoga, pilates, box o crossfit y entrenadores personales con horario de clases, reserva de clase de prueba, membresías explicadas y SEO local para «gimnasio cerca de mí».",
    projectId: "fersilva",
    projectEyebrow: "// proyecto de bienestar",
    projectTitle: "La misma lógica que ya funciona en",
    projectHighlight: "una consulta de bienestar",
    projectWhy:
      "Todavía no tengo un gimnasio en el portafolio. El caso más cercano es Fernanda Silva, nutrióloga: servicios y paquetes explicados y agenda en línea. Un gimnasio necesita lo mismo, con clases y membresías en lugar de consultas.",
    projectPoints: [
      "Cada servicio con lo que incluye, para que nadie tenga que preguntar por mensaje.",
      "Reserva en línea sin llamadas: en un gimnasio, la clase de prueba.",
      "Un solo enlace desde las redes que lleva a reservar.",
    ],
    painTitle: "Lo que pasa en casi cualquier gimnasio",
    painSubtitle:
      "El interesado decide en caliente. Si no puede reservar en ese momento, el impulso se le pasa.",
    pains: [
      "Tus redes generan mensajes de «¿cuánto cuesta?» que se contestan tarde o nunca.",
      "El horario de clases vive en una imagen de Instagram que nadie encuentra.",
      "La gente que entra en enero cancela en marzo y no hay nada que la retenga.",
      "Compites con cadenas baratas y no se ve qué hace distinto tu gimnasio o tu entrenamiento.",
      "Los entrenadores no tienen dónde mostrar su especialidad ni recibir clientes de entrenamiento personal.",
    ],
    systemTitle: "Qué incluye una página web para gimnasios",
    systemSubtitle:
      "Construida para que quien llega desde Google o desde una publicación reserve una clase de prueba en menos de un minuto.",
    system: [
      {
        icon: "calendar",
        title: "Horario de clases siempre al día",
        description:
          "Clases por día, por tipo y por instructor, conectado con tu sistema de reservas o fácil de cambiar tú mismo.",
      },
      {
        icon: "clipboard-check",
        title: "Reserva de clase de prueba",
        description:
          "Un formulario corto que pide objetivo y horario preferido. El interesado llega con cita y tú sabes qué busca.",
      },
      {
        icon: "receipt",
        title: "Membresías y paquetes claros",
        description:
          "Qué incluye cada plan, cuánto cuesta y si hay inscripción. Menos mensajes, y más gente que llega decidida.",
      },
      {
        icon: "users",
        title: "Entrenadores con su propia ficha",
        description:
          "Cada entrenador con su especialidad, certificaciones y forma de reservar entrenamiento personal.",
      },
      {
        icon: "star",
        title: "Transformaciones y reseñas reales",
        description:
          "Historias de socios con su permiso, fotos de las instalaciones y reseñas de Google en la página.",
      },
      {
        icon: "target",
        title: "SEO local para «gimnasio cerca de mí»",
        description:
          "Perfil de Empresa en Google con horario, clases, fotos y reseñas, y una página por disciplina para búsquedas como «crossfit en tu ciudad».",
      },
    ],
    cycleTitle: "Tu año en el gimnasio, y qué hace la página",
    cycleBody:
      "El fitness tiene el calendario más predecible de todos. La página se prepara antes de cada pico y trabaja la retención en los meses flojos.",
    cycleMonths: [
      { label: "Ene – Feb", note: "Año nuevo: el mayor pico de inscripciones." },
      { label: "Mar – Jun", note: "Antes del verano: retos, paquetes y retención." },
      { label: "Jul – Ago", note: "Verano lento: clases especiales y promociones." },
      { label: "Sep – Dic", note: "Regreso a la rutina, y lista de espera para enero." },
    ],
    faqTitle: "Dudas sobre páginas web para gimnasios",
    faq: [
      {
        question: "¿Se conecta con el sistema de membresías que ya uso?",
        answer:
          "La mayoría de los sistemas de gimnasio tienen horario y reserva que se pueden integrar en la página. Si no usas ninguno, te dejo una reserva sencilla configurada.",
      },
      {
        question: "Soy entrenador personal, no tengo gimnasio. ¿Me sirve?",
        answer:
          "Sí. En ese caso la página es tu marca: tu especialidad, tus resultados, tus paquetes y cómo reservar, en persona o en línea. Suele bastar con una landing page.",
      },
      {
        question: "¿Publico los precios de las membresías?",
        answer:
          "Casi siempre conviene. Quien busca gimnasio compara precios antes de visitar, y si no ve el tuyo, visita al que sí lo muestra. Si manejas promociones, se pone desde cuánto empieza.",
      },
      {
        question: "¿Puede quedar en inglés y en español?",
        answer:
          "Sí. En barrios hispanos de EE. UU. es una ventaja clara, porque pocos gimnasios lo hacen bien. Cada idioma va en su propia URL para que Google indexe ambos.",
      },
      {
        question: "¿Cómo consigo más socios para mi gimnasio?",
        answer:
          "Haciendo fácil el primer paso: una clase de prueba que se reserva en un minuto, precios claros y reseñas reales. Y apareciendo en Google Maps cuando alguien de tu zona busca dónde entrenar.",
      },
    ],
    ctaTitle: "20 minutos antes de la próxima temporada de inscripciones",
    ctaBody:
      "Te digo qué ve hoy alguien que busca un gimnasio en tu zona y qué le falta a tu página para reservar la clase de prueba. Hablas directo conmigo, que soy quien hace el trabajo.",
  },

  // ────────────────────────────────────────────────────────────
  lawyers: {
    navLabel: "Abogados y despachos",
    navHint: "Áreas de práctica, casos calificados y consultas que cierran",
    icon: "scale",
    meta: {
      title: "Páginas Web para Abogados y Despachos | ProCode Systems",
      description:
        "Páginas web para abogados y despachos jurídicos: una página por área de práctica, formulario que califica el caso, consulta en línea y SEO local. Bilingüe.",
      keywords:
        "páginas web para abogados, página web para abogados, diseño web para abogados, página web para despacho de abogados, diseño web para despachos jurídicos, marketing para abogados, SEO para abogados, abogado que habla español, abogado de inmigración en español, cómo conseguir clientes como abogado",
    },
    heroEyebrow: "// abogados y despachos",
    heroTitleA: "Páginas web para",
    heroHighlight: "abogados y despachos",
    heroSubtitle: "Casos que sí puedes tomar.",
    intro:
      "Página web para abogados y despachos jurídicos con una página por área de práctica, formulario que califica el caso antes de la consulta, agenda en línea y SEO local en español e inglés.",
    projectId: "cristian-posada",
    projectEyebrow: "// proyecto de autoridad profesional",
    projectTitle: "Un profesional que vende criterio, y lo",
    projectHighlight: "demuestra en su sitio",
    projectWhy:
      "Aún no tengo un despacho de abogados en el portafolio. El proyecto más cercano es mi propia marca personal: alguien que vende su trabajo y su criterio, no un producto. Un abogado necesita la misma autoridad demostrable, organizada por áreas de práctica.",
    projectPoints: [
      "Trayectoria, proyectos y contenido en lugar de adjetivos.",
      "Un solo sitio al que apuntan todos los perfiles y directorios.",
      "Contacto directo, con el mensaje ya redactado, en vez de un formulario sin respuesta.",
    ],
    painTitle: "Lo que viven casi todos los despachos",
    painSubtitle:
      "El cliente legal llega preocupado y con prisa. La página tiene que darle confianza y filtrar el caso a la vez.",
    pains: [
      "Das consultas gratis a personas con asuntos que no llevas, o que no podían pagar.",
      "Tu página dice «servicios legales» y no aparece cuando alguien busca «abogado de accidentes» o «abogado de inmigración».",
      "El prospecto llama a tres despachos y se queda con el que contestó primero.",
      "Los directorios y los anuncios te cobran por contactos que también venden a otros abogados.",
      "Tu experiencia y tus casos no se ven, y pareces igual que el despacho que abrió el mes pasado.",
    ],
    systemTitle: "Qué incluye una página web para abogados",
    systemSubtitle:
      "Organizada por áreas de práctica, que es como busca el cliente, y respetando las reglas de publicidad de la abogacía: sin promesas de resultados.",
    system: [
      {
        icon: "layout",
        title: "Una página por área de práctica",
        description:
          "Inmigración, familia, accidentes, laboral, penal, negocios o lo que lleves. Cada una con su lenguaje y sus preguntas.",
      },
      {
        icon: "clipboard-check",
        title: "Formulario que califica el caso",
        description:
          "Tipo de asunto, estado o ciudad, fechas importantes y urgencia. Sabes a quién llamar primero y qué casos no son tuyos.",
      },
      {
        icon: "calendar",
        title: "Consulta inicial en línea",
        description:
          "Gratuita o de pago, presencial o por videollamada, con las preguntas de calificación por delante.",
      },
      {
        icon: "briefcase",
        title: "Autoridad demostrable",
        description:
          "Años de práctica, colegios y estados donde ejerces, tipos de caso resueltos (sin datos del cliente) y reseñas.",
      },
      {
        icon: "phone",
        title: "Respuesta rápida en el celular",
        description:
          "Llamada y WhatsApp a un toque, con horario de atención claro. En legal, quien contesta primero suele quedarse el caso.",
      },
      {
        icon: "target",
        title: "SEO local para «abogado que habla español»",
        description:
          "Perfil de Empresa en Google por oficina, con áreas de práctica en inglés y en español y reseñas de clientes.",
      },
    ],
    cycleTitle: "Tu año en el despacho, y qué hace la página",
    cycleBody:
      "Cada área tiene sus momentos: divorcios en enero, cambios migratorios cuando cambia la ley, accidentes todo el año. La página publica a tiempo lo que el cliente va a buscar.",
    cycleMonths: [
      { label: "Ene – Mar", note: "Inicio de año: familia, divorcios y negocios nuevos." },
      { label: "Abr – Jun", note: "Contenido por área de práctica y reseñas." },
      { label: "Jul – Sep", note: "Cambios de ley y fechas límite: páginas a tiempo." },
      { label: "Oct – Dic", note: "Planeación patrimonial, cierre de año y consultas pendientes." },
    ],
    faqTitle: "Dudas sobre páginas web para abogados",
    faq: [
      {
        question: "¿Hay reglas sobre lo que puedo poner en la página?",
        answer:
          "Sí. Cada estado y cada colegio tienen reglas de publicidad para abogados. En general: nada de promesas de resultados, aclaraciones cuando se muestran casos y, en algunos estados, la palabra «publicidad». Las aplicamos, pero la revisión final la haces tú, porque la responsabilidad profesional es tuya.",
      },
      {
        question: "¿Puedo mostrar casos ganados?",
        answer:
          "Sin nombres ni detalles que identifiquen al cliente, y con la aclaración de que cada caso es distinto. Se muestran el tipo de asunto, el contexto y el resultado general.",
      },
      {
        question: "¿Conviene cobrar la consulta inicial?",
        answer:
          "Depende de tu área. En accidentes casi siempre es gratuita; en familia o negocios, cobrarla filtra mucho. La agenda puede cobrarla al reservar. Lo vemos en la llamada.",
      },
      {
        question: "Tengo oficinas en dos ciudades. ¿Cómo se maneja?",
        answer:
          "Una página por oficina, con su dirección, teléfono y Perfil de Empresa en Google propio. Así cada ciudad puede aparecer en el mapa por separado.",
      },
      {
        question: "¿Cómo consigo más clientes como abogado?",
        answer:
          "Apareciendo cuando alguien busca tu área de práctica en tu ciudad, filtrando el caso antes de la consulta y contestando rápido. Casi siempre se pierden clientes por tardar en contestar, no por falta de anuncios.",
      },
    ],
    ctaTitle: "20 minutos para revisar cómo te encuentran tus clientes",
    ctaBody:
      "Te digo qué ve hoy alguien que busca tu área de práctica en tu ciudad y qué le falta a tu página para que te llame a ti. Hablas directo conmigo, que soy quien hace el trabajo.",
  },

  // ────────────────────────────────────────────────────────────
  insuranceAgents: {
    navLabel: "Agentes de seguros",
    navHint: "Cotizaciones, renovaciones y clientes que te refieren",
    icon: "shield",
    meta: {
      title: "Páginas Web para Agentes de Seguros | ProCode Systems",
      description:
        "Páginas web para agentes de seguros: una página por tipo de seguro, formulario de cotización, temporada de inscripción y SEO local en español e inglés.",
      keywords:
        "páginas web para agentes de seguros, página web para agente de seguros, diseño web para agencias de seguros, página web para agencia de seguros, marketing para agentes de seguros, cómo conseguir clientes de seguros, agente de seguros en español, SEO para agentes de seguros",
    },
    heroEyebrow: "// agentes de seguros",
    heroTitleA: "Páginas web para",
    heroHighlight: "agentes de seguros",
    heroSubtitle: "Cotizaciones que llegan solas.",
    intro:
      "Página web para agentes y agencias de seguros con una página por tipo de seguro, formulario de cotización que pide los datos correctos, agenda para la temporada de inscripción y SEO local en español e inglés.",
    projectId: "cristian-posada",
    projectEyebrow: "// proyecto de autoridad profesional",
    projectTitle: "Un profesional independiente que",
    projectHighlight: "convierte visitas en conversaciones",
    projectWhy:
      "Todavía no tengo una agencia de seguros en el portafolio. El proyecto más cercano es mi marca personal: un independiente que vende confianza y criterio, con un solo sitio al que apuntan todos sus canales. Un agente de seguros necesita exactamente eso, más un formulario de cotización.",
    projectPoints: [
      "Confianza demostrable en lugar de adjetivos.",
      "Un solo lugar al que llevan todas las redes y tarjetas de presentación.",
      "Contacto por WhatsApp con el mensaje ya redactado.",
    ],
    painTitle: "Lo que viven casi todos los agentes de seguros",
    painSubtitle:
      "El seguro se compra por confianza y se renueva por servicio. La página tiene que ayudar en las dos cosas.",
    pains: [
      "Compras listas de contactos que también le venden a otros diez agentes.",
      "Pasas la temporada de inscripción pidiendo por mensaje los mismos datos a cada cliente.",
      "Tu página es la plantilla de la aseguradora, igual a la de miles de agentes, y no aparece en Google.",
      "El cliente no sabe que también le vendes seguro de auto, de casa o de vida, y lo compra con otro.",
      "No pides referidos ni reseñas, aunque tus clientes están contentos.",
    ],
    systemTitle: "Qué incluye una página web para agentes de seguros",
    systemSubtitle:
      "Organizada por tipo de seguro, que es como busca el cliente, y con un formulario que te deja la cotización casi lista.",
    system: [
      {
        icon: "layout",
        title: "Una página por tipo de seguro",
        description:
          "Salud y Obamacare, Medicare, vida, auto, casa, negocio o los ramos que manejes. Cada una con sus preguntas frecuentes.",
      },
      {
        icon: "clipboard-check",
        title: "Formulario de cotización completo",
        description:
          "Pide los datos que necesitas para cotizar cada ramo, sin pedir información sensible que no hace falta todavía.",
      },
      {
        icon: "calendar",
        title: "Agenda para la temporada de inscripción",
        description:
          "Citas presenciales, por teléfono o videollamada, con bloques extra durante la inscripción abierta.",
      },
      {
        icon: "shield",
        title: "Licencias y estados a la vista",
        description:
          "Tu número de licencia, los estados donde puedes vender y las aseguradoras con las que trabajas.",
      },
      {
        icon: "repeat",
        title: "Renovaciones y venta cruzada",
        description:
          "Formulario de revisión anual y páginas que muestran los otros seguros que ofreces, para que el cliente compre todo contigo.",
      },
      {
        icon: "target",
        title: "SEO local para «agente de seguros en español»",
        description:
          "Perfil de Empresa en Google con tus ramos, horario de temporada y un sistema para pedir reseñas y referidos.",
      },
    ],
    cycleTitle: "Tu año de seguros, y qué hace la página",
    cycleBody:
      "Las fechas de inscripción no cambian de un año a otro. La página tiene que estar posicionada antes de que empiece la temporada, no durante.",
    cycleMonths: [
      { label: "Ene – Mar", note: "Cierre de inscripción y revisión de pólizas nuevas." },
      { label: "Abr – Jun", note: "Vida, auto y casa: venta cruzada a la cartera." },
      { label: "Jul – Sep", note: "Preparación: páginas, reseñas y lista de renovaciones." },
      { label: "Oct – Dic", note: "Medicare e inscripción abierta: el pico del año." },
    ],
    faqTitle: "Dudas sobre páginas web para agentes de seguros",
    faq: [
      {
        question: "La aseguradora ya me dio una página. ¿Para qué otra?",
        answer:
          "Porque esa página es igual a la de miles de agentes y casi nunca aparece en Google. Tu página es tu marca: sigue contigo si cambias de aseguradora y te posiciona por tu nombre y tu ciudad.",
      },
      {
        question: "¿Hay reglas sobre lo que puedo publicar?",
        answer:
          "Sí, sobre todo en Medicare, donde el material de marketing tiene reglas específicas, y en las que fija cada estado y aseguradora. Las tenemos en cuenta al redactar, pero la aprobación final es tuya o de tu agencia.",
      },
      {
        question: "¿Es seguro pedir datos para cotizar desde la página?",
        answer:
          "Sí, con conexión segura y pidiendo solo lo necesario para la primera cotización. Datos como el número de Seguro Social se piden después, por un canal seguro, no en el formulario.",
      },
      {
        question: "¿Puede quedar en inglés y en español?",
        answer:
          "Sí, y para un agente que atiende a familias hispanas es casi obligatorio. Cada idioma va en su propia URL para que Google indexe los dos.",
      },
      {
        question: "¿Cómo consigo clientes de seguros sin comprar listas?",
        answer:
          "Apareciendo cuando alguien busca un agente en tu ciudad, con una página por tipo de seguro y un formulario que facilite pedir la cotización. Los referidos y las reseñas de tus clientes actuales hacen el resto.",
      },
    ],
    ctaTitle: "20 minutos antes de la próxima inscripción abierta",
    ctaBody:
      "Te digo qué ve hoy alguien que busca un agente de seguros en tu ciudad y qué le falta a tu página para pedirte cotización. Hablas directo conmigo, que soy quien hace el trabajo.",
  },

  // ────────────────────────────────────────────────────────────
  realtors: {
    navLabel: "Asesores inmobiliarios",
    navHint: "Tu marca personal, propiedades y compradores calificados",
    icon: "map-pin",
    meta: {
      title: "Páginas Web para Asesores Inmobiliarios | ProCode Systems",
      description:
        "Páginas web para asesores y agentes inmobiliarios: tu marca personal, propiedades con ficha propia, formulario que califica al comprador y SEO local.",
      keywords:
        "páginas web para asesores inmobiliarios, página web para asesor inmobiliario, página web para agente inmobiliario, página web para realtor, diseño web para agentes de bienes raíces, marketing para asesores inmobiliarios, realtor que habla español, cómo conseguir clientes inmobiliarios",
    },
    heroEyebrow: "// asesores inmobiliarios",
    heroTitleA: "Páginas web para",
    heroHighlight: "asesores inmobiliarios",
    heroSubtitle: "Que te busquen por tu nombre.",
    intro:
      "Página web para asesores, agentes y realtors independientes con tu marca personal al frente, propiedades con ficha propia, formulario que califica a compradores y vendedores y SEO local en tu zona.",
    projectId: "demo-inmobiliaria",
    projectEyebrow: "// demo del oficio",
    projectTitle: "Cómo se ve la página de",
    projectHighlight: "una asesora independiente",
    projectWhy:
      "Mariana Cervantes es una demo, no una clienta: la construí para mostrar qué necesita un asesor que trabaja con su propio nombre. Propiedades, fichas que se mandan por WhatsApp, agenda de llamadas y captación directa.",
    projectPoints: [
      "Ficha propia por propiedad, con galería, características y mapa: un enlace que se ve profesional en WhatsApp.",
      "Filtros por zona, precio y tipo de operación.",
      "Captación directa por WhatsApp y agenda de llamadas, sin que el contacto se quede en un portal.",
    ],
    painTitle: "Lo que viven casi todos los asesores",
    painSubtitle:
      "El cliente inmobiliario elige a una persona, no a un logo. La página tiene que mostrar a esa persona.",
    pains: [
      "Tu presencia es la página de la franquicia o del portal, y ahí eres uno más de la lista.",
      "Los portales te venden contactos que también le venden a otros asesores.",
      "Pierdes tardes enseñando casas a quien no está precalificado.",
      "Tus ventas cerradas y tus reseñas no se ven en ningún lado.",
      "El comprador que no compró este año no vuelve a saber de ti.",
    ],
    systemTitle: "Qué incluye una página web para asesores inmobiliarios",
    systemSubtitle:
      "Construida alrededor de tu nombre y tu zona, para que el cliente te elija a ti antes que a la propiedad.",
    system: [
      {
        icon: "briefcase",
        title: "Tu marca personal al frente",
        description:
          "Quién eres, en qué zonas te especializas, cuántas operaciones has cerrado, en qué idiomas atiendes y qué dicen tus clientes.",
      },
      {
        icon: "layout",
        title: "Propiedades con ficha propia",
        description:
          "Cada propiedad con galería, características, mapa y botón de WhatsApp. Si tu MLS lo permite, se conecta el listado (IDX).",
      },
      {
        icon: "clipboard-check",
        title: "Formulario para compradores y vendedores",
        description:
          "Al comprador le pregunta presupuesto, precalificación y zona; al vendedor, la dirección y cuándo quiere vender.",
      },
      {
        icon: "map-pin",
        title: "Una página por colonia o ciudad",
        description:
          "Guías de las zonas donde trabajas: escuelas, precios promedio y tipo de vivienda. Así te encuentra quien busca vivir ahí.",
      },
      {
        icon: "users",
        title: "Primera vivienda y compradores hispanos",
        description:
          "Páginas que explican el proceso en español: crédito, enganche, ITIN y programas para comprar la primera casa.",
      },
      {
        icon: "target",
        title: "SEO local para «realtor que habla español»",
        description:
          "Perfil de Empresa en Google con tus zonas y reseñas, y páginas pensadas para quien busca un asesor en su idioma.",
      },
    ],
    cycleTitle: "Tu año inmobiliario, y qué hace la página",
    cycleBody:
      "Las mudanzas se concentran en primavera y verano, pero la decisión empieza meses antes. La página capta en invierno lo que cierras en verano.",
    cycleMonths: [
      { label: "Ene – Mar", note: "Compradores que se preparan: guías y precalificación." },
      { label: "Abr – Jun", note: "Temporada alta: propiedades nuevas y respuesta rápida." },
      { label: "Jul – Sep", note: "Cierres, reseñas y captación de vendedores." },
      { label: "Oct – Dic", note: "Mercado lento: guías por zona y seguimiento de prospectos." },
    ],
    faqTitle: "Dudas sobre páginas web para asesores inmobiliarios",
    faq: [
      {
        question: "Trabajo con una franquicia. ¿Puedo tener mi propia página?",
        answer:
          "Sí, y es lo más común. Se construye tu marca personal respetando los lineamientos de la franquicia y del estado (nombre del broker, licencia y avisos). El cliente elige a una persona, no a un logo.",
      },
      {
        question: "¿Se pueden mostrar las propiedades del MLS?",
        answer:
          "Si tu MLS y tu broker lo permiten, sí, con un proveedor de IDX. Si no, se publican tus propiedades con fichas propias, que además se comparten mejor por WhatsApp.",
      },
      {
        question: "¿Qué diferencia hay con la página de una inmobiliaria?",
        answer:
          "La de una inmobiliaria vende a la empresa, su equipo y su inventario. La de un asesor te vende a ti: tu zona, tu trayectoria y tu forma de trabajar. Si tienes una agencia con varios asesores, revisa la página para inmobiliarias.",
      },
      {
        question: "¿Puede quedar en inglés y en español?",
        answer:
          "Sí, y para un asesor que atiende a compradores hispanos en EE. UU. es una ventaja enorme. Cada idioma va en su propia URL para que Google indexe ambas.",
      },
      {
        question: "¿Cómo consigo clientes inmobiliarios sin depender de los portales?",
        answer:
          "Con contenido de las zonas donde trabajas, tu marca personal visible, reseñas y un formulario que separe compradores de vendedores. Los portales dan volumen; tu página te da contactos que solo hablan contigo.",
      },
    ],
    ctaTitle: "20 minutos para revisar tu marca como asesor",
    ctaBody:
      "Te digo qué ve hoy alguien que busca un asesor inmobiliario en tu zona y qué le falta a tu página para que te escriba a ti. Hablas directo conmigo, que soy quien hace el trabajo.",
  },

  // ────────────────────────────────────────────────────────────
  landscaping: {
    navLabel: "Landscaping y jardinería",
    navHint: "Cotizaciones con fotos, contratos de mantenimiento y temporada",
    icon: "sun",
    meta: {
      title: "Páginas Web para Landscaping y Jardinería | ProCode Systems",
      description:
        "Páginas web para empresas de landscaping y jardinería: cotización con fotos, contratos de mantenimiento, galería de proyectos y SEO local. Con un caso real.",
      keywords:
        "páginas web para landscaping, página web para landscaping, sitio web para landscaping, página web para jardinería, diseño web para jardineros, página web para paisajismo, marketing para landscaping, cómo conseguir clientes de landscaping, SEO para landscaping",
    },
    heroEyebrow: "// landscaping y jardinería",
    heroTitleA: "Páginas web para",
    heroHighlight: "landscaping y jardinería",
    heroSubtitle: "Cotizaciones sin perseguir a nadie.",
    intro:
      "Página web para empresas de landscaping, jardinería y paisajismo con cotización con fotos, contratos de mantenimiento, galería de proyectos y SEO local para las ciudades donde trabajas.",
    projectId: "trejo",
    projectEyebrow: "// caso real en tu oficio",
    projectTitle: "Una empresa de landscaping que ya",
    projectHighlight: "recibe cotizaciones en línea",
    projectWhy:
      "Trejo Landscaping es cliente: jardinería y paisajismo residencial y comercial en Salinas, California. Necesitaba recibir solicitudes de cotización sin perseguir a cada cliente, y hoy las recibe desde cualquier página del sitio.",
    projectPoints: [
      "Botón «Get a Quote» visible en todo el sitio para pedir cotización sin perseguir a nadie.",
      "Proyectos destacados con fotos y reseñas de clientes reales.",
      "WhatsApp y chat para responder rápido a quien está por contratar.",
    ],
    painTitle: "Lo que viven casi todas las empresas de landscaping",
    painSubtitle:
      "El trabajo se ve, y eso es una ventaja enorme. Pero casi nunca llega a la página.",
    pains: [
      "Manejas a cotizar trabajos que nunca iban a cerrar porque nadie preguntó presupuesto ni medidas.",
      "Tus mejores proyectos están en el celular y nadie los ve.",
      "En primavera no te alcanza el día y en invierno el teléfono no suena.",
      "Vives de trabajos sueltos en vez de contratos de mantenimiento que pagan cada mes.",
      "Las casas grandes y los clientes comerciales te comparan con empresas que tienen página, reseñas y seguro visible.",
    ],
    systemTitle: "Qué incluye una página web para landscaping",
    systemSubtitle:
      "Construida para que tu trabajo venda solo y para que cada cotización llegue con lo que necesitas saber antes de manejar.",
    system: [
      {
        icon: "layout",
        title: "Una página por servicio",
        description:
          "Mantenimiento de jardines, diseño de paisaje, pasto y riego, hardscape y patios, poda de árboles, limpieza de temporada.",
      },
      {
        icon: "clipboard-check",
        title: "Cotización con fotos y medidas",
        description:
          "El cliente sube fotos del jardín, la dirección, el tamaño aproximado y su presupuesto. Cotizas sin manejar a ciegas.",
      },
      {
        icon: "star",
        title: "Galería de antes y después",
        description:
          "Tus proyectos ordenados por tipo de trabajo, con ciudad y una línea de qué se hizo. Me mandas las fotos por WhatsApp.",
      },
      {
        icon: "repeat",
        title: "Contratos de mantenimiento",
        description:
          "Planes semanales, quincenales o mensuales explicados en la página, para convertir trabajos sueltos en ingreso fijo.",
      },
      {
        icon: "shield",
        title: "Licencia, seguro y zonas visibles",
        description:
          "Licencia, seguro, años trabajando y las ciudades que cubres. Lo primero que revisa un cliente comercial.",
      },
      {
        icon: "target",
        title: "SEO local en cada ciudad que cubres",
        description:
          "Perfil de Empresa en Google con zona de servicio, fotos de obra y reseñas, en inglés y en español.",
      },
    ],
    cycleTitle: "Tu año de jardinería, y qué hace la página",
    cycleBody:
      "La primavera decide tu año. La página tiene que estar posicionada en invierno para que las cotizaciones lleguen en cuanto sale el sol.",
    cycleMonths: [
      { label: "Ene – Feb", note: "Página lista y contratos de mantenimiento para la temporada." },
      { label: "Mar – Jun", note: "Temporada alta: cotizaciones con fotos que filtran." },
      { label: "Jul – Sep", note: "Riego, mantenimiento y reseñas de cada proyecto." },
      { label: "Oct – Dic", note: "Limpieza de otoño, hardscape y preparación de invierno." },
    ],
    faqTitle: "Dudas sobre páginas web para landscaping",
    faq: [
      {
        question: "Mis clientes hablan inglés y mi equipo español. ¿En qué idioma la hago?",
        answer:
          "En los dos. Trejo Landscaping es un buen ejemplo: los clientes residenciales y comerciales buscan en inglés, y muchos clientes hispanos, en español. Cada idioma va en su propia URL para que Google indexe ambos.",
      },
      {
        question: "No tengo fotos profesionales. ¿Sirve?",
        answer:
          "Sí. Las fotos del celular, bien escogidas y recortadas, venden más que las de banco de imágenes porque son reales. Me las mandas por WhatsApp y yo las ordeno.",
      },
      {
        question: "¿Puedo poner precios?",
        answer:
          "Para el mantenimiento, conviene poner desde cuánto empieza. Para diseño de paisaje o hardscape, mejor un formulario con fotos y presupuesto: filtra sin cerrarte.",
      },
      {
        question: "Trabajo en varias ciudades. ¿Cómo aparezco en todas?",
        answer:
          "Con una zona de servicio bien configurada en el Perfil de Empresa en Google y páginas para las ciudades más importantes, con proyectos reales de cada una. Sin direcciones falsas, que Google castiga.",
      },
      {
        question: "¿Cómo consigo más clientes de landscaping?",
        answer:
          "Con tu trabajo a la vista, un formulario de cotización con fotos y reseñas que pides al terminar cada proyecto. Y vendiendo mantenimiento mensual, que es lo que sostiene el invierno.",
      },
    ],
    ctaTitle: "20 minutos antes de que empiece la primavera",
    ctaBody:
      "Te digo qué ve hoy alguien que busca landscaping en tu ciudad y qué le falta a tu página para pedirte cotización. Hablas directo conmigo, que soy quien hace el trabajo.",
  },
};

const en: NicheDict = {
  // ────────────────────────────────────────────────────────────
  taxPreparers: {
    navLabel: "Tax preparers",
    navHint: "Tax season, ITIN and documents before the appointment",
    icon: "receipt",
    meta: {
      title: "Tax Preparer Website Design | ProCode Systems",
      description:
        "Tax preparer website design: W-2 and 1099 document intake, booking built for tax season, ITIN pages and bilingual local SEO. Published base pricing.",
      keywords:
        "tax preparer website design, tax preparation website, website for tax preparers, tax office website, marketing for tax preparers, how to get tax clients, tax preparer local SEO, bilingual tax preparer website, tax document intake",
    },
    heroEyebrow: "// tax preparers",
    heroTitleA: "Tax preparer",
    heroHighlight: "website design",
    heroSubtitle: "Clients arrive with their paperwork.",
    intro:
      "A bilingual website for tax preparers with document intake, appointment booking built for tax season, ITIN services and local SEO to show up for «tax preparer near me».",
    projectId: "demo-taxpro",
    projectEyebrow: "// industry demo",
    projectTitle: "What a tax office looks like when it's",
    projectHighlight: "ready for the season",
    projectWhy:
      "Herrera Tax & Advisory is a demo, not a client: I built it to show what a Hispanic tax office in the U.S. needs before January. Individual and business services, a free consult and credentials up front.",
    projectPoints: [
      "Each filing type on its own page — individual, business, ITIN, amendments — so clients find theirs without calling.",
      "Spanish and English on the same site, because families search in Spanish and business owners often in English.",
      "A consult button in every section: in season, clients decide in minutes, not days.",
    ],
    painTitle: "What happens every tax season",
    painSubtitle:
      "None of these is fixed with ads. They're fixed with a website that works while you prepare returns.",
    pains: [
      "Clients show up without their W-2, their 1099 or their dependent's number, and the appointment has to be redone.",
      "In February you answer messages until midnight: «how much?», «what do I bring?», «do you do ITIN?».",
      "People who don't know you compare you to the chain on the corner and to free software, and you have no way to explain why you.",
      "In May the phone goes quiet and you have nothing to sell to the clients you already served.",
      "Last year's clients never get a reminder and go with whoever reached out first.",
    ],
    systemTitle: "What a tax preparer website includes",
    systemSubtitle:
      "Built for tax season: clients arrive informed, with their documents and an appointment — and the rest of the year the site keeps selling.",
    system: [
      {
        icon: "layout",
        title: "A page per filing type",
        description:
          "Individual, business and self-employed returns, ITIN, amendments and back taxes. Each with its own document checklist.",
      },
      {
        icon: "clipboard-check",
        title: "Document intake before the appointment",
        description:
          "Clients upload W-2s, 1099s, IDs and receipts from their phone. You know what's missing before they sit down.",
      },
      {
        icon: "calendar",
        title: "Booking built for tax season",
        description:
          "Separate blocks for simple returns, business returns and pickup appointments, with extended hours from January to April.",
      },
      {
        icon: "shield",
        title: "PTIN, credentials and reviews in plain sight",
        description:
          "Your PTIN, whether you're an EA or ITIN acceptance agent, years preparing and client reviews: what decides someone who doesn't know you.",
      },
      {
        icon: "target",
        title: "Local SEO for «tax preparer near me»",
        description:
          "A Google Business Profile with season hours, services in English and Spanish and a system to request reviews when the return is delivered.",
      },
      {
        icon: "repeat",
        title: "A reminder for next year",
        description:
          "A «remind me in January» form and a past-client list ready to contact before the season starts.",
      },
    ],
    cycleTitle: "Your tax year, and what the website does in each stretch",
    cycleBody:
      "Tax season lasts four months, but local SEO takes months to mature. Whatever isn't ready in November won't bring clients in February.",
    cycleMonths: [
      { label: "Oct – Dec", note: "Site live, reviews requested and a January waitlist." },
      { label: "Jan – Apr", note: "Season: intake, extended booking and automatic answers." },
      { label: "May – Jun", note: "Amendments, IRS letters and back taxes." },
      { label: "Jul – Sep", note: "Extensions, ITIN and year-round business services." },
    ],
    faqTitle: "Tax preparer website questions",
    faq: [
      {
        question: "When should I build the website: before or after the season?",
        answer:
          "Before. Ideally it goes live between September and November, so Google knows it and your Business Profile has reviews when people start searching in January. If you're already in season, we launch what pays off in two weeks first: booking, intake and the Business Profile.",
      },
      {
        question: "Is it safe for clients to upload documents through the website?",
        answer:
          "Yes, as long as it's done with the right tool. Documents don't sit on the website: they go to an encrypted file portal or your tax software over a secure connection. I'll recommend the one that fits how you already work.",
      },
      {
        question: "I work from home, or only during the season. Is this for me?",
        answer:
          "That's where it pays off most. If you're solo, nobody answers while you're preparing a return. The website answers the usual questions for you, books the appointment and asks for the documents.",
      },
      {
        question: "Can I advertise ITIN services?",
        answer:
          "Yes, and it deserves its own page, because many people search for it separately. If you're a Certifying Acceptance Agent (CAA), we say so clearly; if not, we explain which part of the process you handle.",
      },
      {
        question: "How do I get tax clients outside of the season?",
        answer:
          "With services people hire all year: amendments, back taxes, IRS letter responses, ITIN and extended business returns. If you also do bookkeeping, your accounting firm page sells that side.",
      },
    ],
    ctaTitle: "20 minutes before the season starts",
    ctaBody:
      "I'll tell you what someone searching for a tax preparer in your city finds today and what can be ready before January. You talk straight to me — I'm the one who does the work.",
  },

  // ────────────────────────────────────────────────────────────
  dentists: {
    navLabel: "Dentists",
    navHint: "Treatments, dental insurance and patients who book on their own",
    icon: "sparkles",
    meta: {
      title: "Dentist & Dental Practice Website Design | ProCode Systems",
      description:
        "Dental website design: a page per treatment, insurance and financing explained, online booking, emergency visits and local SEO for dental practices.",
      keywords:
        "dentist website design, dental website design, dental practice website, website for dentists, dental marketing, dental SEO, how to get more dental patients, Spanish speaking dentist, dental clinic website",
    },
    heroEyebrow: "// dentists",
    heroTitleA: "Dentist",
    heroHighlight: "website design",
    heroSubtitle: "Patients who know what they want.",
    intro:
      "A website for dentists and dental practices with a page per treatment, insurance and financing explained, online booking, dental emergencies and local SEO for «dentist near me».",
    projectId: "fersilva",
    projectEyebrow: "// a health project",
    projectTitle: "The same structure already used by",
    projectHighlight: "a private health practice",
    projectWhy:
      "I don't have a dental practice in the portfolio yet, and I won't pretend otherwise. The closest case is Fernanda Silva, a nutritionist: a practice that explained its services over chat and now gets patients who book on their own. For a dentist it works the same way, with a page per treatment.",
    projectPoints: [
      "Services explained with what's included and how long they take — what a patient wants to know before a cleaning or an orthodontic consult.",
      "Online booking so patients pick a time without calling during office hours.",
      "Training in plain sight, which in dentistry weighs as much as before-and-after photos.",
    ],
    painTitle: "What happens in almost every dental practice",
    painSubtitle:
      "Dental patients compare a lot before booking. These are the gaps where they leave for another office.",
    pains: [
      "People ask the price of implants, braces or whitening over chat and leave when you say «we need to evaluate».",
      "The front desk can't pick up the phone while checking in the patient in front of them.",
      "It's not clear which dental plans you accept, so the patient doesn't risk it.",
      "Someone with a broken tooth searches «emergency dentist» on a Saturday and doesn't find you.",
      "The patient comes in for a cleaning and doesn't return in six months because nothing reminds them.",
    ],
    systemTitle: "What a dentist website includes",
    systemSubtitle:
      "Each treatment is searched separately on Google. That's why the site is organized by treatment, not like an office brochure.",
    system: [
      {
        icon: "layout",
        title: "A page per treatment",
        description:
          "Cleanings, braces and Invisalign, implants, crowns, whitening, root canals and pediatric dentistry. Each with what's included and how long it takes.",
      },
      {
        icon: "calendar",
        title: "Online booking by appointment type",
        description:
          "New-patient exam, cleaning, follow-up and emergency, each with its own length. It connects to the calendar or software your front desk already uses.",
      },
      {
        icon: "receipt",
        title: "Insurance and financing explained",
        description:
          "Which plans you accept, whether you offer payment plans or financing and where each treatment starts: fewer doubts before booking.",
      },
      {
        icon: "star",
        title: "Before-and-after cases and real reviews",
        description:
          "Cases shared with patient permission, presented with care, and Google reviews on each treatment's page.",
      },
      {
        icon: "phone",
        title: "Dental emergencies one tap away",
        description:
          "Call and text buttons visible on mobile, with clear emergency hours for someone in pain right now.",
      },
      {
        icon: "target",
        title: "Local SEO for «dentist near me»",
        description:
          "A Google Business Profile with treatments, office photos, hours and reviews, in English and Spanish.",
      },
    ],
    cycleTitle: "Your practice year, and what the website does",
    cycleBody:
      "Dental demand rises with new insurance benefits and back-to-school. The site gets ready before each peak.",
    cycleMonths: [
      { label: "Jan – Mar", note: "Benefits reset: new-patient exams and first visits." },
      { label: "Apr – Jun", note: "Cosmetic and whitening before weddings and graduations." },
      { label: "Jul – Sep", note: "Back to school: kids' checkups and orthodontics." },
      { label: "Oct – Dec", note: "«Use it or lose it»: insurance benefit reminders." },
    ],
    faqTitle: "Dentist website questions",
    faq: [
      {
        question: "Should I publish treatment prices?",
        answer:
          "It's worth publishing where treatments start and what the first exam includes. You don't need a fixed implant price, but a range keeps patients from leaving without asking. We decide based on your practice and your market.",
      },
      {
        question: "Does online booking connect to our practice management software?",
        answer:
          "It depends on the software. Many include their own online booking and we embed it in the site; if not, we use a booking tool that syncs with your calendar. We check it on the first call so you don't end up with two calendars.",
      },
      {
        question: "Can I show before-and-after photos?",
        answer:
          "Yes, with written patient consent and nothing that identifies them. They're shown with context — which treatment and how long — and without promising results.",
      },
      {
        question: "My office serves patients in Spanish. How do I use that?",
        answer:
          "By saying it clearly and building the site in both languages. Many people search for a «Spanish speaking dentist» in their city, and few practices show it well. Each language gets its own URL so Google indexes both.",
      },
      {
        question: "What about patients' health information?",
        answer:
          "The website asks for the minimum needed to book. If you need clinical forms online, they connect to a HIPAA-ready tool that signs a BAA; health records are never stored on the website.",
      },
    ],
    ctaTitle: "20 minutes to review how patients find you",
    ctaBody:
      "I'll tell you what someone searching for a dentist in your city sees today and which treatment is costing you patients. You talk straight to me — I'm the one who does the work.",
  },

  // ────────────────────────────────────────────────────────────
  psychologists: {
    navLabel: "Therapists & psychologists",
    navHint: "Trust before the first session and booking without messages",
    icon: "message-circle",
    meta: {
      title: "Therapist & Psychologist Website Design | ProCode Systems",
      description:
        "Website design for therapists and psychologists: your approach and specialties made clear, telehealth, private booking and local SEO. English and Spanish.",
      keywords:
        "therapist website design, psychologist website design, counselor website design, website for therapists, private practice website, therapy marketing, how to get more therapy clients, Spanish speaking therapist, bilingual therapist website, SEO for therapists",
    },
    heroEyebrow: "// therapists & psychologists",
    heroTitleA: "Therapist",
    heroHighlight: "website design",
    heroSubtitle: "Chosen before they write.",
    intro:
      "A website for therapists, psychologists and counselors with your approach and specialties explained, in-person and telehealth sessions, private booking and local SEO in English and Spanish.",
    projectId: "fersilva",
    projectEyebrow: "// a health project",
    projectTitle: "A private practice that already",
    projectHighlight: "books without chat back-and-forth",
    projectWhy:
      "I don't have a therapist in the portfolio yet. Fernanda Silva, a nutritionist, is the closest case: a private practice, online and in person, where patients needed to understand the approach before booking. It's the same problem a therapist has.",
    projectPoints: [
      "The approach and way of working explained, so patients know what to expect from the first session.",
      "Online booking: patients reserve without having to share their reason over chat.",
      "Online and in-person sessions clearly separated.",
    ],
    painTitle: "What I hear from almost every therapist",
    painSubtitle:
      "In therapy the decision is emotional and private. The website has to lower the anxiety of first contact, not raise it.",
    pains: [
      "Potential clients don't reach out because they can't tell if you treat what they're going through: anxiety, couples, grief, teens.",
      "You live on a therapist directory that charges monthly and lists you next to fifty colleagues.",
      "You spend hours on consultation calls with people who couldn't afford a session or needed something else.",
      "It's not clear which states you're licensed to see clients in online, so you get inquiries you can't take.",
      "Your training and approach aren't visible, so you compete on price alone.",
    ],
    systemTitle: "What a therapist website includes",
    systemSubtitle:
      "Built so clients recognize themselves, understand how you work and book without exposing more than they need to.",
    system: [
      {
        icon: "layout",
        title: "A page per presenting concern",
        description:
          "Anxiety, depression, couples therapy, grief, teens or whatever you specialize in. That's how people searching for exactly that find you.",
      },
      {
        icon: "calendar",
        title: "Private, discreet booking",
        description:
          "Clients pick a time without explaining their reason by message. Intake session, ongoing sessions and a short consultation call kept separate.",
      },
      {
        icon: "users",
        title: "Your approach, in plain words",
        description:
          "What a session is like, how long it lasts, your modality and what happens in the first appointment. What clients want to know and don't dare ask.",
      },
      {
        icon: "shield",
        title: "License and service area in plain sight",
        description:
          "Your license, the states where you can offer telehealth and the languages you work in.",
      },
      {
        icon: "lock",
        title: "Privacy from first contact",
        description:
          "A minimal form, a clear privacy notice and no clinical data on the website. If you need online intake paperwork, a HIPAA-ready platform is connected.",
      },
      {
        icon: "target",
        title: "SEO for «Spanish speaking therapist»",
        description:
          "A Google Business Profile and pages built for people looking for therapy in their language, locally or online.",
      },
    ],
    cycleTitle: "Your practice year, and what the website does",
    cycleBody:
      "Demand for therapy rises in January, at back-to-school and during the holidays. If your site already ranks, you don't depend on the directory in those months.",
    cycleMonths: [
      { label: "Jan – Mar", note: "New year's resolutions: peak of first inquiries." },
      { label: "Apr – Jun", note: "Content about your specialties and reviews." },
      { label: "Jul – Sep", note: "Back to school: teens and families." },
      { label: "Oct – Dec", note: "Holidays, grief and stress: open calendar and fast replies." },
    ],
    faqTitle: "Therapist website questions",
    faq: [
      {
        question: "Do I need a website if I'm already on a therapist directory?",
        answer:
          "The directory sends visits, but it lists you next to dozens of colleagues and bills you monthly. Your website is where the client who found you decides to stay with you. The best setup is both, with the directory linking to your site.",
      },
      {
        question: "Can I see clients in other states online?",
        answer:
          "Your license decides that, not the website. What the website does is say it clearly — where you can and can't see clients online — so people you can't take don't reach out.",
      },
      {
        question: "Should I publish my session fee?",
        answer:
          "In therapy it usually helps: an anxious client would rather not ask. If you offer a sliding scale or take insurance, that goes on the site too. We decide based on your practice.",
      },
      {
        question: "How do I protect client confidentiality?",
        answer:
          "The website doesn't store clinical information. The form asks for the minimum needed to book and carries a privacy notice. Records and notes live on a separate clinical platform.",
      },
      {
        question: "How do I get more clients in private practice?",
        answer:
          "With a page for each concern you treat, a Google Business Profile with reviews and booking that doesn't require explanations. What costs therapists the most clients is people not knowing whether you treat what they're dealing with.",
      },
    ],
    ctaTitle: "20 minutes to review how clients find you",
    ctaBody:
      "I'll tell you what someone looking for therapy in your city or online sees today, and what's missing for them to book with you. You talk straight to me — I'm the one who does the work.",
  },

  // ────────────────────────────────────────────────────────────
  doctors: {
    navLabel: "Doctors & medical practices",
    navHint: "Specialty, accepted insurance and online appointments",
    icon: "clipboard-check",
    meta: {
      title: "Doctor & Medical Practice Website Design | ProCode Systems",
      description:
        "Website design for doctors and medical practices: specialties, accepted insurance, telehealth, online booking and local SEO. Bilingual, published base pricing.",
      keywords:
        "doctor website design, medical practice website design, physician website design, website for doctors, medical clinic website, healthcare marketing, SEO for doctors, Spanish speaking doctor, bilingual medical website",
    },
    heroEyebrow: "// doctors",
    heroTitleA: "Doctor",
    heroHighlight: "website design",
    heroSubtitle: "Appointments without missed calls.",
    intro:
      "A website for primary care doctors and specialists with services and conditions explained, accepted insurance, telehealth, online booking and local SEO for «Spanish speaking doctor».",
    projectId: "fersilva",
    projectEyebrow: "// a health project",
    projectTitle: "A health practice that already",
    projectHighlight: "gets informed patients",
    projectWhy:
      "I don't have a physician in the portfolio yet. Fernanda Silva, a nutritionist, is the closest health case: services explained, training visible and online booking. That same base is what a medical practice needs, plus specialties and insurance.",
    projectPoints: [
      "Each service with what's included and how long it takes, so the front desk answers less.",
      "Online booking patients can use at any hour.",
      "Training and track record in plain sight — what patients check before choosing a doctor.",
    ],
    painTitle: "What repeats in medical practices",
    painSubtitle:
      "Patients want quick relief and certainty. If the website gives them neither, they call another office.",
    pains: [
      "The phone rings while the front desk is busy, and every missed call is a patient who leaves.",
      "It's not clear which insurance you take or what a visit costs without insurance.",
      "Your specialties don't show up on Google, while a big clinic doing less than you does.",
      "You offer telehealth, but nobody knows because it isn't anywhere.",
      "Spanish-speaking patients don't know your office can see them in their language.",
    ],
    systemTitle: "What a doctor's website includes",
    systemSubtitle:
      "Built so patients know in a minute whether you're the doctor they need, whether you take their insurance and when they can see you.",
    system: [
      {
        icon: "layout",
        title: "A page per specialty and condition",
        description:
          "Primary care, diabetes management, hypertension, checkups, physicals or your specialty, each on its own page.",
      },
      {
        icon: "calendar",
        title: "Online appointments and telehealth",
        description:
          "New patient, follow-up and virtual visit kept separate, connected to your calendar or the system your office already uses.",
      },
      {
        icon: "receipt",
        title: "Insurance and self-pay pricing",
        description:
          "The plans you accept and, if you see self-pay patients, where a visit starts. It's the front desk's number-one question.",
      },
      {
        icon: "shield",
        title: "Credentials and hospital affiliations",
        description:
          "License, board certifications, hospitals where you practice and years in practice.",
      },
      {
        icon: "lock",
        title: "No clinical data on the website",
        description:
          "The site asks for the minimum to book. Medical history forms connect to a HIPAA-ready tool.",
      },
      {
        icon: "target",
        title: "Local SEO for «Spanish speaking doctor»",
        description:
          "A Google Business Profile with specialties, hours, insurance and reviews, in English and Spanish.",
      },
    ],
    cycleTitle: "Your practice year, and what the website does",
    cycleBody:
      "Some seasons are predictable: new-year checkups, school physicals and flu season. The site announces them before they arrive.",
    cycleMonths: [
      { label: "Jan – Mar", note: "Deductibles reset: checkups and new patients." },
      { label: "Apr – Jun", note: "Allergies and sports physicals." },
      { label: "Jul – Sep", note: "School physicals and vaccines before classes." },
      { label: "Oct – Dec", note: "Flu season and visits before insurance changes." },
    ],
    faqTitle: "Doctor website questions",
    faq: [
      {
        question: "Does the website need to be HIPAA compliant?",
        answer:
          "The informational site and the booking tool don't store records, so they only ask for what's needed for the appointment. If you want to receive clinical information online, we connect a HIPAA-compliant form or portal that signs a Business Associate Agreement (BAA). Medical records stay in your EHR.",
      },
      {
        question: "Can it connect to my EHR or current scheduling system?",
        answer:
          "Many EHRs include their own online scheduling; in that case we embed it in the site. If not, we use a booking tool that syncs with your calendar. We check it before we start.",
      },
      {
        question: "I'm a specialist, not primary care. Does anything change?",
        answer:
          "The focus does: specialist patients often come referred and search for your name or their condition. The site is organized by conditions and procedures and makes clear how to book with or without a referral.",
      },
      {
        question: "Is it worth building in English and Spanish?",
        answer:
          "In the U.S., almost always. Many people search for a «Spanish speaking doctor» in their city, and few practices explain it well. Each language gets its own URL so Google indexes both.",
      },
      {
        question: "How do I get more patients for my practice?",
        answer:
          "By showing up when someone searches your specialty in your area, saying which insurance you take and letting them book without calling. Reviews on your Google Business Profile do the rest.",
      },
    ],
    ctaTitle: "20 minutes to review your practice on Google",
    ctaBody:
      "I'll tell you what a patient searching your specialty in your city sees today and what your website is missing for them to book. You talk straight to me — I'm the one who does the work.",
  },

  // ────────────────────────────────────────────────────────────
  nutritionists: {
    navLabel: "Nutritionists & dietitians",
    navHint: "Programs, online sessions and patients who come back",
    icon: "trending-up",
    meta: {
      title: "Nutritionist & Dietitian Website Design | ProCode Systems",
      description:
        "Website design for nutritionists and dietitians: programs and packages explained, online and in-person sessions, booking and local SEO. With a real case.",
      keywords:
        "nutritionist website design, dietitian website design, website for nutritionists, nutrition coach website, dietitian marketing, how to get nutrition clients, online nutrition consultation, Spanish speaking nutritionist, SEO for dietitians",
    },
    heroEyebrow: "// nutritionists & dietitians",
    heroTitleA: "Nutritionist",
    heroHighlight: "website design",
    heroSubtitle: "Patients who arrive committed.",
    intro:
      "A website for nutritionists and dietitians with programs and packages explained, online and in-person sessions, automatic booking and local SEO to attract patients from your city and anywhere.",
    projectId: "fersilva",
    projectEyebrow: "// a real case in your field",
    projectTitle: "A nutritionist who already",
    projectHighlight: "gets patients online",
    projectWhy:
      "Fernanda Silva is a nutritionist and a client: she explained her service over chat again and again, and now patients arrive knowing what's included and with the appointment already booked.",
    projectPoints: [
      "Services explained with what's included and how long they take: fewer repeated messages.",
      "Online booking so patients pick a time without asking.",
      "Online and in-person sessions, with her training and approach in plain sight.",
    ],
    painTitle: "What almost every nutritionist goes through",
    painSubtitle:
      "Nutrition sells on trust and consistency. The website has to help with both.",
    pains: [
      "You explain over chat, again and again, what the session includes, what it costs and whether there's a meal plan.",
      "Your social content works, but followers have nowhere to book or buy a package.",
      "Patients come to two sessions and drop off, because there's no clear program or follow-up.",
      "You work online, but your website only talks about the office, so you lose patients from other cities.",
      "You compete with uncredentialed «coaches» and the difference in your training doesn't show.",
    ],
    systemTitle: "What a nutritionist website includes",
    systemSubtitle:
      "Built to turn followers into patients, and patients into full programs instead of a single visit.",
    system: [
      {
        icon: "layout",
        title: "A page per goal",
        description:
          "Weight loss, sports nutrition, diabetes and insulin resistance, pregnancy, children's nutrition. Each with its own approach.",
      },
      {
        icon: "receipt",
        title: "Programs and packages with prices",
        description:
          "Single session, follow-up package and monthly plan, with what each includes. Patients buy the process, not one appointment.",
      },
      {
        icon: "calendar",
        title: "Online and in-person booking",
        description:
          "Separate blocks for first visit, follow-up and video call, synced with your calendar.",
      },
      {
        icon: "clipboard-check",
        title: "A questionnaire before the first session",
        description:
          "Habits, goals, conditions and measurements, answered before the appointment so the session goes further.",
      },
      {
        icon: "shield",
        title: "Credentials up front",
        description:
          "Your license or registration, specialties and certifications: what sets you apart from people selling diets on social media.",
      },
      {
        icon: "link",
        title: "All your socials lead to one place",
        description:
          "One link in your bio that goes to the page where people book, not to a message you have to answer yourself.",
      },
    ],
    cycleTitle: "Your practice year, and what the website does",
    cycleBody:
      "Nutrition has very sharp peaks. If the site is ready before each one, the peak turns into patients for several months.",
    cycleMonths: [
      { label: "Jan – Feb", note: "New year's resolutions: the biggest peak of the year." },
      { label: "Mar – Jun", note: "Before summer: three-month programs and follow-up." },
      { label: "Jul – Sep", note: "Back to school: children's and family nutrition." },
      { label: "Oct – Dec", note: "Holidays: maintenance plans and a January waitlist." },
    ],
    faqTitle: "Nutritionist website questions",
    faq: [
      {
        question: "I already have Instagram followers. Why a website?",
        answer:
          "So those followers have somewhere to book and buy without messaging you. Social media attracts; the website converts. And Google doesn't show your posts when someone searches «nutritionist near me», but it can show your website.",
      },
      {
        question: "Can I charge for packages on the website?",
        answer:
          "Yes. The session or package can be charged at booking, by card, to cut no-shows. We set it up with the payment platform you prefer.",
      },
      {
        question: "Does it work if I only see patients online?",
        answer:
          "Yes, and then the website matters even more: it is your office. SEO is built around specialty and language, not just city.",
      },
      {
        question: "Can it be in English and Spanish?",
        answer:
          "Yes. If you work in the U.S. or with Hispanic patients online, both versions are worth having, each on its own URL so Google indexes both.",
      },
      {
        question: "How do I get more nutrition clients?",
        answer:
          "With a page per health goal, clear packages that turn one visit into a program, and reviews from real patients. Plus a single link on your socials that leads to booking.",
      },
    ],
    ctaTitle: "20 minutes to review your online practice",
    ctaBody:
      "I'll tell you what someone searching for a nutritionist in your city or online sees today and what your website is missing for them to book. You talk straight to me — I'm the one who does the work.",
  },

  // ────────────────────────────────────────────────────────────
  gyms: {
    navLabel: "Gyms & personal trainers",
    navHint: "Trial classes, memberships and members who stay",
    icon: "zap",
    meta: {
      title: "Gym & Personal Trainer Website Design | ProCode Systems",
      description:
        "Website design for gyms, fitness studios and personal trainers: class schedule, trial class booking, memberships and local SEO. Published base pricing.",
      keywords:
        "gym website design, fitness website design, personal trainer website, fitness studio website, yoga studio website, crossfit website, gym marketing, how to get more gym members, SEO for gyms",
    },
    heroEyebrow: "// gyms & trainers",
    heroTitleA: "Gym",
    heroHighlight: "website design",
    heroSubtitle: "From curious to member in one visit.",
    intro:
      "A website for gyms, yoga, pilates, boxing and crossfit studios and personal trainers with a class schedule, trial class booking, memberships explained and local SEO for «gym near me».",
    projectId: "fersilva",
    projectEyebrow: "// a wellness project",
    projectTitle: "The same logic that already works for",
    projectHighlight: "a wellness practice",
    projectWhy:
      "I don't have a gym in the portfolio yet. The closest case is Fernanda Silva, a nutritionist: services and packages explained and online booking. A gym needs the same thing, with classes and memberships instead of sessions.",
    projectPoints: [
      "Each service with what's included, so nobody has to ask over chat.",
      "Online booking without calls: for a gym, the trial class.",
      "One link from social media that leads to booking.",
    ],
    painTitle: "What happens at almost every gym",
    painSubtitle:
      "Prospects decide on impulse. If they can't book right then, the impulse passes.",
    pains: [
      "Your socials generate «how much?» messages that get answered late or never.",
      "The class schedule lives in an Instagram image nobody can find.",
      "People who join in January cancel in March, and nothing keeps them.",
      "You compete with cheap chains, and what makes your gym or training different doesn't show.",
      "Trainers have nowhere to show their specialty or get personal training clients.",
    ],
    systemTitle: "What a gym website includes",
    systemSubtitle:
      "Built so someone coming from Google or a post books a trial class in under a minute.",
    system: [
      {
        icon: "calendar",
        title: "A class schedule that's always current",
        description:
          "Classes by day, type and instructor, connected to your booking system or easy to update yourself.",
      },
      {
        icon: "clipboard-check",
        title: "Trial class booking",
        description:
          "A short form asking for goal and preferred time. The prospect arrives with an appointment and you know what they want.",
      },
      {
        icon: "receipt",
        title: "Clear memberships and packages",
        description:
          "What each plan includes, what it costs and whether there's a sign-up fee. Fewer messages, more people who arrive decided.",
      },
      {
        icon: "users",
        title: "A profile for each trainer",
        description:
          "Each trainer with their specialty, certifications and a way to book personal training.",
      },
      {
        icon: "star",
        title: "Real transformations and reviews",
        description:
          "Member stories shared with permission, photos of the facility and Google reviews on the page.",
      },
      {
        icon: "target",
        title: "Local SEO for «gym near me»",
        description:
          "A Google Business Profile with hours, classes, photos and reviews, plus a page per discipline for searches like «crossfit in your city».",
      },
    ],
    cycleTitle: "Your gym year, and what the website does",
    cycleBody:
      "Fitness has the most predictable calendar of all. The site gets ready before each peak and works on retention in the slow months.",
    cycleMonths: [
      { label: "Jan – Feb", note: "New year: the biggest sign-up peak." },
      { label: "Mar – Jun", note: "Before summer: challenges, packages and retention." },
      { label: "Jul – Aug", note: "Slow summer: special classes and promotions." },
      { label: "Sep – Dec", note: "Back to routine, and a January waitlist." },
    ],
    faqTitle: "Gym website questions",
    faq: [
      {
        question: "Does it connect to the membership software I already use?",
        answer:
          "Most gym software has a schedule and booking widget that can be embedded in the site. If you don't use one, I leave a simple booking tool set up.",
      },
      {
        question: "I'm a personal trainer without a gym. Is this for me?",
        answer:
          "Yes. In that case the website is your brand: your specialty, results, packages and how to book, in person or online. A landing page is usually enough.",
      },
      {
        question: "Should I publish membership prices?",
        answer:
          "Almost always. People looking for a gym compare prices before visiting, and if they don't see yours, they visit the one that shows it. If you run promotions, we show the starting price.",
      },
      {
        question: "Can it be in English and Spanish?",
        answer:
          "Yes. In Hispanic neighborhoods in the U.S. it's a clear advantage, because few gyms do it well. Each language gets its own URL so Google indexes both.",
      },
      {
        question: "How do I get more gym members?",
        answer:
          "By making the first step easy: a trial class booked in a minute, clear prices and real reviews. And by showing up on Google Maps when someone nearby searches for a place to train.",
      },
    ],
    ctaTitle: "20 minutes before the next sign-up season",
    ctaBody:
      "I'll tell you what someone searching for a gym in your area sees today and what your website is missing for them to book a trial class. You talk straight to me — I'm the one who does the work.",
  },

  // ────────────────────────────────────────────────────────────
  lawyers: {
    navLabel: "Attorneys & law firms",
    navHint: "Practice areas, qualified cases and consults that close",
    icon: "scale",
    meta: {
      title: "Attorney & Law Firm Website Design | ProCode Systems",
      description:
        "Website design for attorneys and law firms: a page per practice area, a form that qualifies the case, online consults and local SEO. English and Spanish.",
      keywords:
        "attorney website design, law firm website design, lawyer website design, website for lawyers, legal marketing, SEO for lawyers, Spanish speaking lawyer, immigration lawyer website, personal injury lawyer website, how to get more legal clients",
    },
    heroEyebrow: "// attorneys & law firms",
    heroTitleA: "Attorney",
    heroHighlight: "website design",
    heroSubtitle: "Cases you can actually take.",
    intro:
      "A website for attorneys and law firms with a page per practice area, a form that qualifies the case before the consult, online booking and local SEO in English and Spanish.",
    projectId: "cristian-posada",
    projectEyebrow: "// a professional authority project",
    projectTitle: "A professional who sells judgment, and",
    projectHighlight: "proves it on his site",
    projectWhy:
      "I don't have a law firm in the portfolio yet. The closest project is my own personal brand: someone who sells their work and judgment, not a product. An attorney needs the same demonstrable authority, organized by practice area.",
    projectPoints: [
      "Track record, projects and content instead of adjectives.",
      "One site every profile and directory points to.",
      "Direct contact with the message already written, instead of a form nobody answers.",
    ],
    painTitle: "What almost every law firm deals with",
    painSubtitle:
      "Legal clients arrive worried and in a hurry. The website has to build trust and qualify the case at the same time.",
    pains: [
      "You give free consults to people with matters you don't handle, or who couldn't pay.",
      "Your site says «legal services» and doesn't show up when someone searches «car accident lawyer» or «immigration lawyer».",
      "Prospects call three firms and hire the one that answered first.",
      "Directories and ads charge you for leads they also sell to other attorneys.",
      "Your experience and results aren't visible, so you look like the firm that opened last month.",
    ],
    systemTitle: "What an attorney website includes",
    systemSubtitle:
      "Organized by practice area, which is how clients search, and following attorney advertising rules: no promised outcomes.",
    system: [
      {
        icon: "layout",
        title: "A page per practice area",
        description:
          "Immigration, family, personal injury, employment, criminal, business or whatever you handle. Each with its own language and questions.",
      },
      {
        icon: "clipboard-check",
        title: "A form that qualifies the case",
        description:
          "Matter type, state or city, key dates and urgency. You know who to call first and which cases aren't yours.",
      },
      {
        icon: "calendar",
        title: "Initial consult booked online",
        description:
          "Free or paid, in person or by video, with the qualifying questions up front.",
      },
      {
        icon: "briefcase",
        title: "Demonstrable authority",
        description:
          "Years in practice, bar admissions, types of matters handled (with no client details) and reviews.",
      },
      {
        icon: "phone",
        title: "Fast response on mobile",
        description:
          "Call and text one tap away, with clear hours. In legal, whoever answers first usually gets the case.",
      },
      {
        icon: "target",
        title: "Local SEO for «Spanish speaking lawyer»",
        description:
          "A Google Business Profile per office, with practice areas in English and Spanish and client reviews.",
      },
    ],
    cycleTitle: "Your firm's year, and what the website does",
    cycleBody:
      "Each practice area has its moments: divorces in January, immigration changes when the law changes, injuries all year. The site publishes in time what clients will search for.",
    cycleMonths: [
      { label: "Jan – Mar", note: "New year: family law, divorces and new businesses." },
      { label: "Apr – Jun", note: "Content per practice area and reviews." },
      { label: "Jul – Sep", note: "Law changes and deadlines: pages in time." },
      { label: "Oct – Dec", note: "Estate planning, year-end and pending consults." },
    ],
    faqTitle: "Attorney website questions",
    faq: [
      {
        question: "Are there rules about what I can put on my website?",
        answer:
          "Yes. Each state bar has attorney advertising rules. In general: no promised results, disclaimers when showing cases and, in some states, the word «advertising». We apply them, but you do the final review, because the professional responsibility is yours.",
      },
      {
        question: "Can I show cases I've won?",
        answer:
          "Without names or details that identify the client, and with a disclaimer that every case is different. We show the matter type, the context and the general outcome.",
      },
      {
        question: "Should I charge for the initial consult?",
        answer:
          "It depends on the practice area. In personal injury it's almost always free; in family or business law, charging filters a lot. The booking tool can charge at reservation. We'll look at it on the call.",
      },
      {
        question: "I have offices in two cities. How is that handled?",
        answer:
          "One page per office, with its own address, phone and Google Business Profile. That way each city can show up on the map separately.",
      },
      {
        question: "How do I get more clients as an attorney?",
        answer:
          "By showing up when someone searches your practice area in your city, qualifying the case before the consult and answering fast. Clients are almost always lost to slow responses, not to a lack of ads.",
      },
    ],
    ctaTitle: "20 minutes to review how clients find you",
    ctaBody:
      "I'll tell you what someone searching your practice area in your city sees today and what your website is missing for them to call you. You talk straight to me — I'm the one who does the work.",
  },

  // ────────────────────────────────────────────────────────────
  insuranceAgents: {
    navLabel: "Insurance agents",
    navHint: "Quotes, renewals and clients who refer you",
    icon: "shield",
    meta: {
      title: "Insurance Agent Website Design | ProCode Systems",
      description:
        "Website design for insurance agents and agencies: a page per line of insurance, quote forms, open enrollment booking and bilingual local SEO.",
      keywords:
        "insurance agent website design, insurance agency website design, website for insurance agents, insurance agent marketing, how to get insurance clients, Spanish speaking insurance agent, health insurance agent website, Medicare agent website, SEO for insurance agents",
    },
    heroEyebrow: "// insurance agents",
    heroTitleA: "Insurance agent",
    heroHighlight: "website design",
    heroSubtitle: "Quote requests that come in on their own.",
    intro:
      "A website for insurance agents and agencies with a page per line of insurance, a quote form that asks for the right details, booking for open enrollment and local SEO in English and Spanish.",
    projectId: "cristian-posada",
    projectEyebrow: "// a professional authority project",
    projectTitle: "An independent professional who",
    projectHighlight: "turns visits into conversations",
    projectWhy:
      "I don't have an insurance agency in the portfolio yet. The closest project is my personal brand: an independent who sells trust and judgment, with one site every channel points to. An insurance agent needs exactly that, plus a quote form.",
    projectPoints: [
      "Demonstrable trust instead of adjectives.",
      "One place all your socials and business cards lead to.",
      "WhatsApp contact with the message already written.",
    ],
    painTitle: "What almost every insurance agent deals with",
    painSubtitle:
      "Insurance is bought on trust and renewed on service. The website has to help with both.",
    pains: [
      "You buy lead lists that are also sold to ten other agents.",
      "You spend open enrollment asking every client for the same details over chat.",
      "Your website is the carrier's template, identical to thousands of agents', and it doesn't show up on Google.",
      "Clients don't know you also sell auto, home or life insurance, so they buy it elsewhere.",
      "You don't ask for referrals or reviews, even though your clients are happy.",
    ],
    systemTitle: "What an insurance agent website includes",
    systemSubtitle:
      "Organized by line of insurance, which is how clients search, with a form that leaves the quote almost ready.",
    system: [
      {
        icon: "layout",
        title: "A page per line of insurance",
        description:
          "Health and ACA, Medicare, life, auto, home, business or the lines you handle. Each with its own FAQs.",
      },
      {
        icon: "clipboard-check",
        title: "A complete quote form",
        description:
          "It asks for what you need to quote each line, without requesting sensitive information you don't need yet.",
      },
      {
        icon: "calendar",
        title: "Booking for open enrollment",
        description:
          "In-person, phone or video appointments, with extra blocks during open enrollment.",
      },
      {
        icon: "shield",
        title: "Licenses and states in plain sight",
        description:
          "Your license number, the states where you can sell and the carriers you work with.",
      },
      {
        icon: "repeat",
        title: "Renewals and cross-selling",
        description:
          "An annual review form and pages showing the other lines you offer, so clients buy everything from you.",
      },
      {
        icon: "target",
        title: "Local SEO for «Spanish speaking insurance agent»",
        description:
          "A Google Business Profile with your lines, enrollment-season hours and a system to request reviews and referrals.",
      },
    ],
    cycleTitle: "Your insurance year, and what the website does",
    cycleBody:
      "Enrollment dates don't move from year to year. The site has to rank before the season starts, not during it.",
    cycleMonths: [
      { label: "Jan – Mar", note: "End of enrollment and review of new policies." },
      { label: "Apr – Jun", note: "Life, auto and home: cross-selling to your book." },
      { label: "Jul – Sep", note: "Prep: pages, reviews and a renewal list." },
      { label: "Oct – Dec", note: "Medicare and open enrollment: the peak of the year." },
    ],
    faqTitle: "Insurance agent website questions",
    faq: [
      {
        question: "The carrier already gave me a website. Why another?",
        answer:
          "Because that site is identical to thousands of agents' and almost never shows up on Google. Your website is your brand: it stays with you if you change carriers and ranks you for your name and city.",
      },
      {
        question: "Are there rules about what I can publish?",
        answer:
          "Yes, especially for Medicare, where marketing materials have specific rules, and those set by each state and carrier. We keep them in mind while writing, but final approval is yours or your agency's.",
      },
      {
        question: "Is it safe to ask for quote details on the website?",
        answer:
          "Yes, over a secure connection and asking only for what the first quote needs. Data like Social Security numbers is requested later, through a secure channel, not in the form.",
      },
      {
        question: "Can it be in English and Spanish?",
        answer:
          "Yes, and for an agent serving Hispanic families it's almost a must. Each language gets its own URL so Google indexes both.",
      },
      {
        question: "How do I get insurance clients without buying leads?",
        answer:
          "By showing up when someone searches for an agent in your city, with a page per line of insurance and a form that makes it easy to request a quote. Referrals and reviews from current clients do the rest.",
      },
    ],
    ctaTitle: "20 minutes before the next open enrollment",
    ctaBody:
      "I'll tell you what someone searching for an insurance agent in your city sees today and what your website is missing for them to request a quote. You talk straight to me — I'm the one who does the work.",
  },

  // ────────────────────────────────────────────────────────────
  realtors: {
    navLabel: "Realtors & agents",
    navHint: "Your personal brand, listings and qualified buyers",
    icon: "map-pin",
    meta: {
      title: "Realtor & Real Estate Agent Website Design | ProCode Systems",
      description:
        "Website design for realtors and real estate agents: your personal brand, listings with their own page, a form that qualifies buyers and local SEO.",
      keywords:
        "realtor website design, real estate agent website design, website for realtors, real estate agent website, realtor marketing, Spanish speaking realtor, IDX website, how to get real estate leads, real estate personal brand website",
    },
    heroEyebrow: "// realtors",
    heroTitleA: "Realtor",
    heroHighlight: "website design",
    heroSubtitle: "Searched for by your name.",
    intro:
      "A website for independent realtors and agents with your personal brand up front, listings with their own page, a form that qualifies buyers and sellers and local SEO in your area.",
    projectId: "demo-inmobiliaria",
    projectEyebrow: "// industry demo",
    projectTitle: "What the website of",
    projectHighlight: "an independent agent looks like",
    projectWhy:
      "Mariana Cervantes is a demo, not a client: I built it to show what an agent working under their own name needs. Listings, pages that get shared on WhatsApp, call booking and direct lead capture.",
    projectPoints: [
      "A page per property with gallery, features and map: a link that looks professional on WhatsApp.",
      "Filters by area, price and transaction type.",
      "Direct capture over WhatsApp and call booking, without the lead staying on a portal.",
    ],
    painTitle: "What almost every agent deals with",
    painSubtitle:
      "Real estate clients choose a person, not a logo. The website has to show that person.",
    pains: [
      "Your presence is the franchise or portal page, where you're one more name on the list.",
      "Portals sell you leads they also sell to other agents.",
      "You lose afternoons showing homes to buyers who aren't pre-approved.",
      "Your closed deals and reviews aren't visible anywhere.",
      "The buyer who didn't buy this year never hears from you again.",
    ],
    systemTitle: "What a realtor website includes",
    systemSubtitle:
      "Built around your name and your area, so clients choose you before they choose the property.",
    system: [
      {
        icon: "briefcase",
        title: "Your personal brand up front",
        description:
          "Who you are, the areas you specialize in, deals closed, languages you work in and what your clients say.",
      },
      {
        icon: "layout",
        title: "Listings with their own page",
        description:
          "Each property with gallery, features, map and a WhatsApp button. If your MLS allows it, IDX listings are connected.",
      },
      {
        icon: "clipboard-check",
        title: "Forms for buyers and sellers",
        description:
          "Buyers are asked about budget, pre-approval and area; sellers about the address and when they want to sell.",
      },
      {
        icon: "map-pin",
        title: "A page per neighborhood or city",
        description:
          "Guides to the areas you work: schools, average prices and housing types. That's how people looking to live there find you.",
      },
      {
        icon: "users",
        title: "First-time and Hispanic buyers",
        description:
          "Pages that explain the process in Spanish: credit, down payment, ITIN loans and first-time buyer programs.",
      },
      {
        icon: "target",
        title: "Local SEO for «Spanish speaking realtor»",
        description:
          "A Google Business Profile with your areas and reviews, and pages built for people looking for an agent in their language.",
      },
    ],
    cycleTitle: "Your real estate year, and what the website does",
    cycleBody:
      "Moves concentrate in spring and summer, but the decision starts months earlier. The site captures in winter what you close in summer.",
    cycleMonths: [
      { label: "Jan – Mar", note: "Buyers getting ready: guides and pre-approval." },
      { label: "Apr – Jun", note: "Peak season: new listings and fast replies." },
      { label: "Jul – Sep", note: "Closings, reviews and seller acquisition." },
      { label: "Oct – Dec", note: "Slow market: area guides and lead follow-up." },
    ],
    faqTitle: "Realtor website questions",
    faq: [
      {
        question: "I work with a brokerage. Can I have my own website?",
        answer:
          "Yes, and it's the most common case. Your personal brand is built following the brokerage's and the state's guidelines (broker name, license and disclosures). Clients choose a person, not a logo.",
      },
      {
        question: "Can MLS listings be shown?",
        answer:
          "If your MLS and broker allow it, yes, through an IDX provider. If not, your own listings get their own pages, which also share better on WhatsApp.",
      },
      {
        question: "How is this different from a real estate agency website?",
        answer:
          "An agency website sells the company, its team and inventory. An agent's website sells you: your area, your track record and how you work. If you run an agency with several agents, see the real estate agency page.",
      },
      {
        question: "Can it be in English and Spanish?",
        answer:
          "Yes, and for an agent serving Hispanic buyers in the U.S. it's a huge advantage. Each language gets its own URL so Google indexes both.",
      },
      {
        question: "How do I get real estate leads without depending on portals?",
        answer:
          "With content about the areas you work, a visible personal brand, reviews and a form that separates buyers from sellers. Portals bring volume; your website brings leads that only talk to you.",
      },
    ],
    ctaTitle: "20 minutes to review your brand as an agent",
    ctaBody:
      "I'll tell you what someone looking for a realtor in your area sees today and what your website is missing for them to contact you. You talk straight to me — I'm the one who does the work.",
  },

  // ────────────────────────────────────────────────────────────
  landscaping: {
    navLabel: "Landscaping",
    navHint: "Quotes with photos, maintenance contracts and the season",
    icon: "sun",
    meta: {
      title: "Landscaping Website Design | ProCode Systems",
      description:
        "Landscaping website design: quote requests with photos, maintenance contracts, a project gallery and local SEO for the cities you serve. With a real case.",
      keywords:
        "landscaping website design, landscaper website, lawn care website design, landscape company website, website for landscapers, landscaping marketing, how to get landscaping clients, SEO for landscapers, hardscape website",
    },
    heroEyebrow: "// landscaping",
    heroTitleA: "Landscaping",
    heroHighlight: "website design",
    heroSubtitle: "Quote requests without chasing anyone.",
    intro:
      "A website for landscaping, lawn care and landscape design companies with photo-based quote requests, maintenance contracts, a project gallery and local SEO for the cities you serve.",
    projectId: "trejo",
    projectEyebrow: "// a real case in your trade",
    projectTitle: "A landscaping company that already",
    projectHighlight: "gets quote requests online",
    projectWhy:
      "Trejo Landscaping is a client: residential and commercial landscaping in Salinas, California. It needed to receive quote requests without chasing every client, and now gets them from any page of the site.",
    projectPoints: [
      "A «Get a Quote» button visible across the site, so nobody has to be chased.",
      "Featured projects with photos and reviews from real clients.",
      "WhatsApp and chat to reply fast to people about to hire.",
    ],
    painTitle: "What almost every landscaping company deals with",
    painSubtitle:
      "Your work is visible, and that's a huge advantage. But it almost never makes it to the website.",
    pains: [
      "You drive out to quote jobs that were never going to close because nobody asked about budget or size.",
      "Your best projects live on your phone and nobody sees them.",
      "In spring there aren't enough hours, and in winter the phone doesn't ring.",
      "You live on one-off jobs instead of maintenance contracts that pay every month.",
      "Larger homes and commercial clients compare you with companies that have a website, reviews and visible insurance.",
    ],
    systemTitle: "What a landscaping website includes",
    systemSubtitle:
      "Built so your work sells itself and every quote request arrives with what you need to know before driving out.",
    system: [
      {
        icon: "layout",
        title: "A page per service",
        description:
          "Lawn maintenance, landscape design, sod and irrigation, hardscape and patios, tree trimming, seasonal cleanups.",
      },
      {
        icon: "clipboard-check",
        title: "Quote requests with photos and measurements",
        description:
          "Clients upload yard photos, the address, approximate size and budget. You quote without driving out blind.",
      },
      {
        icon: "star",
        title: "A before-and-after gallery",
        description:
          "Your projects organized by job type, with city and one line about what was done. You send me the photos over WhatsApp.",
      },
      {
        icon: "repeat",
        title: "Maintenance contracts",
        description:
          "Weekly, biweekly or monthly plans explained on the site, to turn one-off jobs into steady income.",
      },
      {
        icon: "shield",
        title: "License, insurance and service areas visible",
        description:
          "License, insurance, years in business and the cities you cover. The first thing a commercial client checks.",
      },
      {
        icon: "target",
        title: "Local SEO in every city you serve",
        description:
          "A Google Business Profile with a service area, job photos and reviews, in English and Spanish.",
      },
    ],
    cycleTitle: "Your landscaping year, and what the website does",
    cycleBody:
      "Spring decides your year. The site has to rank in winter so quote requests arrive as soon as the sun comes out.",
    cycleMonths: [
      { label: "Jan – Feb", note: "Site ready and maintenance contracts for the season." },
      { label: "Mar – Jun", note: "Peak season: photo quote requests that filter." },
      { label: "Jul – Sep", note: "Irrigation, maintenance and reviews per project." },
      { label: "Oct – Dec", note: "Fall cleanups, hardscape and winter prep." },
    ],
    faqTitle: "Landscaping website questions",
    faq: [
      {
        question: "My clients speak English and my crew speaks Spanish. Which language?",
        answer:
          "Both. Trejo Landscaping is a good example: residential and commercial clients search in English, and many Hispanic clients in Spanish. Each language gets its own URL so Google indexes both.",
      },
      {
        question: "I don't have professional photos. Will it work?",
        answer:
          "Yes. Phone photos, well chosen and cropped, sell better than stock images because they're real. You send them over WhatsApp and I organize them.",
      },
      {
        question: "Should I list prices?",
        answer:
          "For maintenance, it's worth showing a starting price. For landscape design or hardscape, a form with photos and budget works better: it filters without boxing you in.",
      },
      {
        question: "I work in several cities. How do I show up in all of them?",
        answer:
          "With a properly set up service area on your Google Business Profile and pages for your main cities, with real projects from each. No fake addresses — Google penalizes them.",
      },
      {
        question: "How do I get more landscaping clients?",
        answer:
          "With your work in plain sight, a quote form with photos and reviews requested at the end of every project. And by selling monthly maintenance, which is what carries you through winter.",
      },
    ],
    ctaTitle: "20 minutes before spring starts",
    ctaBody:
      "I'll tell you what someone searching for landscaping in your city sees today and what your website is missing for them to request a quote. You talk straight to me — I'm the one who does the work.",
  },
};

export const niches: Record<Lang, NicheDict> = { es, en };

/** Textos del bloque que enlaza un giro con sus nichos y viceversa. */
export const nicheLinksCopy: Record<
  Lang,
  { childrenTitle: string; childrenSubtitle: string; siblingsTitle: string; siblingsSubtitle: string }
> = {
  es: {
    childrenTitle: "Páginas por oficio",
    childrenSubtitle:
      "Cada oficio tiene sus propias búsquedas, su calendario y sus dudas. Entra al tuyo.",
    siblingsTitle: "Otros oficios del mismo giro",
    siblingsSubtitle:
      "Si tu negocio está cerca de este pero no es exactamente igual, revisa también estas páginas.",
  },
  en: {
    childrenTitle: "Pages by trade",
    childrenSubtitle:
      "Each trade has its own searches, its own calendar and its own questions. Pick yours.",
    siblingsTitle: "Other trades in the same industry",
    siblingsSubtitle:
      "If your business is close to this one but not quite the same, check these pages too.",
  },
};
