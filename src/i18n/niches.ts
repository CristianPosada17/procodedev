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
// 14 de octubre de 2026: de los diez nichos quedan dos con página propia
// —preparadores de impuestos y landscaping—, que tienen búsqueda, venta y
// caso propios. Dentistas, psicólogos, médicos, nutriólogos, gimnasios,
// abogados, agentes de seguros y asesores inmobiliarios pasaron a ser
// secciones de su giro (src/i18n/specialties.ts) con 301 hacia su ancla.
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
  {
    hubTitle: string;
    hubSubtitle: string;
    childrenTitle: string;
    childrenSubtitle: string;
    siblingsTitle: string;
    siblingsSubtitle: string;
  }
> = {
  es: {
    hubTitle: "Busca tu oficio",
    hubSubtitle:
      "Cada oficio tiene sus propias búsquedas y sus propias dudas. Entra directo a la sección del tuyo.",
    childrenTitle: "Página especializada de este giro",
    childrenSubtitle:
      "Este oficio tiene su propia temporada, sus propias búsquedas y su propia página.",
    siblingsTitle: "El giro completo",
    siblingsSubtitle:
      "Si tu negocio está cerca de este pero no es exactamente igual, revisa la página del giro.",
  },
  en: {
    hubTitle: "Find your trade",
    hubSubtitle:
      "Each trade has its own searches and its own questions. Jump straight to yours.",
    childrenTitle: "A dedicated page in this industry",
    childrenSubtitle:
      "This trade has its own season, its own searches and its own page.",
    siblingsTitle: "The whole industry",
    siblingsSubtitle:
      "If your business is close to this one but not quite the same, check the industry page.",
  },
};
