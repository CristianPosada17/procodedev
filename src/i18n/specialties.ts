// ============================================================
// OFICIOS DENTRO DE UN GIRO (14 de octubre de 2026)
// ------------------------------------------------------------
// Hasta el 13 de octubre cada oficio tenía su propia landing (/dentistas/,
// /abogados/, /asesores-inmobiliarios/…) con la misma plantilla. Un tercio
// del texto se repetía entre ellas y el volumen de búsqueda de cada una era
// casi nulo: el patrón de página puerta que castigó el spam update de
// septiembre. Ahora viven aquí, como secciones con ancla dentro de su giro.
//
// Cada oficio conserva lo que de verdad lo distingue —qué se busca, qué
// debe tener su página, sus dudas— y nada de lo que compartía con los
// demás (el «cómo trabajo», los precios, el cierre). El `id` de cada uno
// coincide con MERGED_NICHES en ui.ts: es el ancla a la que responden las
// URLs viejas con 301.
//
// Las preguntas de cada oficio se muestran en su panel y también entran en
// el FAQPage de la página padre (SegmentPage las suma a las del giro).
// ============================================================

import type { Lang, SegmentKey } from "./ui";

export interface Specialty {
  /** Ancla de la sección; igual que MERGED_NICHES[k].id[lang]. */
  id: string;
  /** Etiqueta corta de la pestaña o de la columna. */
  label: string;
  icon: string;
  /** H3 con la búsqueda tal como se escribe. */
  title: string;
  lead: string;
  /** Lo que lleva la página de ese oficio, en concreto. */
  includes: string[];
  /** Búsquedas reales que esa página tiene que contestar. */
  searches: string[];
  /** Aclaración honesta sobre el portafolio, cuando aplica. */
  note?: string;
  faq: { question: string; answer: string }[];
}

export interface SpecialtyBlock {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Etiquetas de las columnas internas del panel. */
  includesLabel: string;
  searchesLabel: string;
  items: Specialty[];
}

type Dict = Partial<Record<SegmentKey, SpecialtyBlock>>;

const es: Dict = {
  // ────────────────────────────────────────────────────────────
  health: {
    eyebrow: "// por especialidad",
    title: "Páginas web para dentistas, psicólogos, médicos, nutriólogos y gimnasios",
    subtitle:
      "La agenda es la misma pieza para todos; lo que cambia es qué pregunta el paciente antes de reservar. Elige tu especialidad y ve qué lleva tu página.",
    includesLabel: "Qué lleva tu página",
    searchesLabel: "Lo que escribe tu paciente en Google",
    items: [
      {
        id: "dentistas",
        label: "Dentistas",
        icon: "sparkles",
        title: "Páginas web para dentistas y clínicas dentales",
        lead:
          "Cada tratamiento se busca por separado: nadie escribe «clínica dental», escribe «implantes dentales» o «dentista de urgencia». La página se organiza por tratamiento, con seguros y financiamiento explicados antes de que el paciente pregunte.",
        includes: [
          "Una página por tratamiento: limpieza, ortodoncia e Invisalign, implantes, coronas, blanqueamiento, endodoncia y odontopediatría.",
          "Seguros dentales aceptados y plan de pagos a la vista, con rangos «desde» en lugar de «hay que valorarlo».",
          "Botón de urgencia dental con llamada y WhatsApp fijos en el celular, y el horario de urgencias claro.",
          "Antes y después con autorización por escrito del paciente, sin datos que lo identifiquen.",
          "Agenda por tipo de cita —valoración, limpieza, urgencia— conectada al software de tu recepción.",
        ],
        searches: ["dentista cerca de mí", "implantes dentales precio", "dentista de urgencia", "dentista que hable español"],
        faq: [
          {
            question: "¿Conviene publicar el precio de los tratamientos dentales?",
            answer:
              "Conviene publicar desde cuánto empieza cada tratamiento y qué incluye la valoración. Un rango evita que el paciente se vaya sin preguntar, sin comprometerte a un precio cerrado de un implante.",
          },
        ],
      },
      {
        id: "psicologos",
        label: "Psicólogos",
        icon: "message-circle",
        title: "Páginas web para psicólogos y terapeutas",
        lead:
          "En terapia la decisión es privada. El paciente necesita saber si atiendes lo suyo sin tener que contarlo por WhatsApp, así que la página se organiza por motivo de consulta y la agenda no pide explicaciones.",
        includes: [
          "Una página por motivo de consulta: ansiedad, depresión, pareja, duelo, adolescentes.",
          "Tu enfoque en palabras sencillas: cómo es la primera sesión, cuánto dura, con qué corriente trabajas.",
          "Modalidad clara: presencial, en línea y en qué estados o países te permite atender tu licencia o cédula.",
          "Agenda discreta, con sesión breve de orientación separada de la primera consulta.",
          "Formulario mínimo y nada de datos clínicos en la web; los expedientes van a una plataforma clínica.",
        ],
        searches: ["psicólogo en línea en español", "terapia de pareja cerca de mí", "psicóloga para ansiedad", "terapeuta que hable español"],
        faq: [
          {
            question: "Ya estoy en un directorio de terapeutas. ¿Necesito mi propia página?",
            answer:
              "El directorio te pone junto a decenas de colegas y cobra cada mes. Tu página es donde el paciente que ya te encontró decide quedarse contigo; lo ideal es que el directorio enlace a ella.",
          },
        ],
      },
      {
        id: "medicos",
        label: "Médicos",
        icon: "clipboard-check",
        title: "Páginas web para médicos y consultorios médicos",
        lead:
          "El paciente quiere saber en un minuto tres cosas: si eres el médico que busca, si acepta su seguro y cuándo puede verte. Si la página no contesta eso, llama al siguiente consultorio.",
        includes: [
          "Una página por especialidad y padecimiento: diabetes, hipertensión, chequeos, exámenes físicos.",
          "Seguros aceptados y precio de consulta sin seguro, la pregunta número uno en recepción.",
          "Cita en línea y telemedicina separadas, conectadas al sistema del consultorio.",
          "Cédula o licencia, certificación del consejo y hospitales donde atiendes.",
          "Formularios clínicos conectados a una herramienta que cumpla HIPAA, nunca guardados en la página.",
        ],
        searches: ["doctor que hable español", "médico general cerca de mí", "consulta médica sin seguro", "telemedicina en español"],
        faq: [
          {
            question: "¿La página de un consultorio médico tiene que cumplir con HIPAA?",
            answer:
              "La página informativa y la agenda no guardan historiales, así que piden solo lo necesario para la cita. Si quieres recibir información clínica en línea, se conecta un formulario o portal que cumpla HIPAA y firme un acuerdo de socio comercial (BAA).",
          },
        ],
      },
      {
        id: "nutriologos",
        label: "Nutriólogos",
        icon: "trending-up",
        title: "Páginas web para nutriólogos y nutricionistas",
        lead:
          "La nutrición se vende por proceso, no por consulta suelta. La página convierte al seguidor de redes en paciente y a la primera cita en un paquete de seguimiento.",
        includes: [
          "Una página por objetivo: bajar de peso, nutrición deportiva, diabetes, embarazo, nutrición infantil.",
          "Consulta única, paquete de seguimiento y plan mensual con precio, para que se compre el proceso completo.",
          "Cuestionario de hábitos y medidas antes de la primera consulta.",
          "Cédula profesional al frente: lo que te separa de quien vende dietas en redes.",
          "Un solo enlace en tu biografía que lleva directo a agendar o a pagar el paquete.",
        ],
        searches: ["nutrióloga en línea", "nutriólogo cerca de mí", "consulta de nutrición precio", "nutricionista que hable español"],
        note: "Caso real: Fernanda Silva, nutrióloga, es cliente y su sitio está en el portafolio.",
        faq: [
          {
            question: "Ya tengo seguidores en Instagram. ¿Para qué una página de nutrióloga?",
            answer:
              "Para que esos seguidores tengan dónde agendar y pagar sin escribirte. Las redes atraen; la página convierte, y además es lo que Google muestra cuando alguien busca nutrióloga en su ciudad.",
          },
        ],
      },
      {
        id: "gimnasios",
        label: "Gimnasios",
        icon: "zap",
        title: "Páginas web para gimnasios y entrenadores personales",
        lead:
          "El interesado decide en caliente: si no puede reservar la clase de prueba en ese momento, el impulso se le pasa. La página existe para que ese primer paso tome menos de un minuto.",
        includes: [
          "Horario de clases por día, disciplina e instructor, conectado a tu sistema de reservas.",
          "Reserva de clase de prueba con un formulario de dos preguntas: objetivo y horario.",
          "Membresías y paquetes con precio y si hay inscripción.",
          "Ficha de cada entrenador con su especialidad y cómo contratar entrenamiento personal.",
          "Una página por disciplina —crossfit, yoga, box, pilates— para las búsquedas por ciudad.",
        ],
        searches: ["gimnasio cerca de mí", "crossfit en mi ciudad", "entrenador personal precio", "clase de prueba gratis gimnasio"],
        faq: [
          {
            question: "¿Conviene publicar el precio de las membresías del gimnasio?",
            answer:
              "Casi siempre. Quien busca gimnasio compara antes de visitar, y si no ve tu precio visita al que sí lo muestra. Con promociones, basta con poner desde cuánto empieza.",
          },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  professional: {
    eyebrow: "// por profesión",
    title: "Páginas web para abogados y agentes de seguros",
    subtitle:
      "Dos profesiones que viven de la confianza y de contestar primero, con reglas de publicidad propias. La estructura cambia según lo que el cliente necesita saber antes de llamarte.",
    includesLabel: "Qué lleva tu página",
    searchesLabel: "Lo que escribe tu cliente en Google",
    items: [
      {
        id: "abogados",
        label: "Abogados",
        icon: "scale",
        title: "Páginas web para abogados y despachos jurídicos",
        lead:
          "Nadie busca «servicios legales». Se busca «abogado de inmigración», «abogado de accidentes» o «abogado de divorcio en español». La página se organiza por área de práctica y filtra el caso antes de la consulta.",
        includes: [
          "Una página por área de práctica: inmigración, familia, accidentes, laboral, penal, negocios.",
          "Formulario que califica el caso: tipo de asunto, estado o ciudad, fechas importantes y urgencia.",
          "Consulta inicial gratuita o de pago, presencial o por videollamada, con cobro al reservar si aplica.",
          "Estados donde ejerces, colegio y tipos de caso resueltos sin datos del cliente.",
          "Una página y un Perfil de Empresa en Google por oficina, si tienes más de una.",
        ],
        searches: ["abogado de inmigración en español", "abogado de accidentes cerca de mí", "abogado de divorcio", "consulta legal gratis"],
        faq: [
          {
            question: "¿Hay reglas sobre lo que un abogado puede poner en su página?",
            answer:
              "Sí. Cada estado y colegio tiene reglas de publicidad: nada de promesas de resultados, aclaraciones al mostrar casos y, en algunos estados, la palabra «publicidad». Las aplicamos al redactar, pero la revisión final es tuya porque la responsabilidad profesional también lo es.",
          },
        ],
      },
      {
        id: "agentes-de-seguros",
        label: "Agentes de seguros",
        icon: "shield",
        title: "Páginas web para agentes y agencias de seguros",
        lead:
          "La página que te da la aseguradora es igual a la de miles de agentes y no aparece en Google. La tuya se organiza por tipo de seguro y deja la cotización casi lista antes de la llamada.",
        includes: [
          "Una página por ramo: salud y Obamacare, Medicare, vida, auto, casa, negocio.",
          "Formulario de cotización por ramo que pide solo lo necesario; el Seguro Social, después y por canal seguro.",
          "Agenda con bloques extra para la inscripción abierta y para Medicare.",
          "Número de licencia, estados donde vendes y aseguradoras con las que trabajas.",
          "Revisión anual de pólizas y venta cruzada: que el cliente de auto sepa que también le vendes vida.",
        ],
        searches: ["agente de seguros en español", "seguro de salud Obamacare", "agente de Medicare cerca de mí", "seguro de auto barato"],
        faq: [
          {
            question: "La aseguradora ya me dio una página. ¿Para qué otra?",
            answer:
              "Porque esa página es igual a la de miles de agentes y casi nunca rankea. La tuya es tu marca: te posiciona por tu nombre y tu ciudad, y sigue contigo si cambias de aseguradora. En Medicare se respetan las reglas de material de marketing.",
          },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  realEstate: {
    eyebrow: "// inmobiliaria o asesor",
    title: "Página web para inmobiliaria o para asesor inmobiliario independiente",
    subtitle:
      "No es la misma página. La de una inmobiliaria vende el inventario y al equipo; la de un asesor te vende a ti. Esto es lo que cambia entre una y otra.",
    includesLabel: "Qué lleva",
    searchesLabel: "Cómo te buscan",
    items: [
      {
        id: "inmobiliaria",
        label: "Inmobiliaria o desarrolladora",
        icon: "building",
        title: "Página web para inmobiliarias y desarrolladoras",
        lead:
          "El protagonista es el inventario: catálogo con filtros, fichas por propiedad o por desarrollo, y un equipo de asesores que reparte los prospectos según la zona.",
        includes: [
          "Catálogo con filtros por zona, precio, recámaras y tipo de operación.",
          "Página por desarrollo con avance de obra, planos y disponibilidad.",
          "Perfiles del equipo de asesores y reparto del prospecto por zona.",
          "Panel para cargar y quitar propiedades sin tocar código.",
        ],
        searches: ["casas en venta en [colonia]", "departamentos en preventa", "inmobiliaria en [ciudad]", "terrenos en venta"],
        faq: [],
      },
      {
        id: "asesores-inmobiliarios",
        label: "Asesor o realtor independiente",
        icon: "briefcase",
        title: "Páginas web para asesores inmobiliarios y realtors",
        lead:
          "El protagonista eres tú. El comprador elige a una persona antes que a una casa, así que tu nombre, tu zona y tus operaciones cerradas van al frente, con las propiedades como prueba.",
        includes: [
          "Tu marca personal al frente: zonas, idiomas, operaciones cerradas y reseñas.",
          "Guías de colonia o ciudad: escuelas, tipo de vivienda y cómo es vivir ahí.",
          "Formulario distinto para comprador (precalificación) y para vendedor (dirección y fecha).",
          "Listado del MLS por IDX si tu broker lo permite, o fichas propias que se comparten por WhatsApp.",
          "Proceso de primera vivienda explicado en español: crédito, enganche e ITIN.",
        ],
        searches: ["realtor que hable español", "asesor inmobiliario en [ciudad]", "comprar casa con ITIN", "agente de bienes raíces cerca de mí"],
        faq: [
          {
            question: "Trabajo con una franquicia. ¿Puedo tener mi propia página de asesor?",
            answer:
              "Sí, y es lo más común. Se construye tu marca personal respetando los lineamientos de la franquicia y del estado: nombre del broker, licencia y avisos obligatorios.",
          },
        ],
      },
    ],
  },
};

const en: Dict = {
  // ────────────────────────────────────────────────────────────
  health: {
    eyebrow: "// by specialty",
    title: "Websites for dentists, therapists, doctors, nutritionists and gyms",
    subtitle:
      "Online booking is the same piece for everyone; what changes is what a patient asks before reserving. Pick your specialty and see what your site needs.",
    includesLabel: "What your site needs",
    searchesLabel: "What your patients type into Google",
    items: [
      {
        id: "dentists",
        label: "Dentists",
        icon: "sparkles",
        title: "Dentist and dental practice website design",
        lead:
          "Every treatment is searched on its own: nobody types «dental office», they type «dental implants» or «emergency dentist». The site is organized by treatment, with insurance and financing explained before the patient asks.",
        includes: [
          "A page per treatment: cleanings, braces and Invisalign, implants, crowns, whitening, root canals and pediatric dentistry.",
          "Accepted dental plans and payment plans in plain sight, with «starting at» ranges instead of «we need to evaluate».",
          "An emergency button with call and text pinned on mobile, plus clear emergency hours.",
          "Before-and-after cases shared with written patient consent and nothing that identifies them.",
          "Booking by visit type — new-patient exam, cleaning, emergency — connected to your front-desk software.",
        ],
        searches: ["dentist near me", "dental implants cost", "emergency dentist", "Spanish speaking dentist"],
        faq: [
          {
            question: "Should a dental website publish treatment prices?",
            answer:
              "It's worth publishing where each treatment starts and what the first exam includes. A range keeps patients from leaving without asking, without committing you to a fixed implant price.",
          },
        ],
      },
      {
        id: "therapists",
        label: "Therapists",
        icon: "message-circle",
        title: "Therapist and psychologist website design",
        lead:
          "In therapy the decision is private. Clients need to know you treat what they're going through without explaining it over text, so the site is organized by presenting concern and booking asks for no explanations.",
        includes: [
          "A page per presenting concern: anxiety, depression, couples, grief, teens.",
          "Your approach in plain words: what the first session is like, how long it lasts, your modality.",
          "Clear format: in person, telehealth and the states your license covers.",
          "Discreet booking, with a short consultation call kept apart from the intake session.",
          "A minimal form and no clinical data on the website; records live on a HIPAA-ready platform.",
        ],
        searches: ["therapist near me", "Spanish speaking therapist", "online therapy for anxiety", "couples counseling near me"],
        faq: [
          {
            question: "I'm already on a therapist directory. Do I need my own website?",
            answer:
              "The directory lists you next to dozens of colleagues and bills monthly. Your website is where the client who found you decides to stay with you; ideally the directory links to it.",
          },
        ],
      },
      {
        id: "doctors",
        label: "Doctors",
        icon: "clipboard-check",
        title: "Doctor and medical practice website design",
        lead:
          "A patient wants three answers in a minute: are you the doctor they need, do you take their insurance and when can they be seen. If the site doesn't answer that, they call the next office.",
        includes: [
          "A page per specialty and condition: diabetes, hypertension, checkups, physicals.",
          "Accepted insurance and self-pay visit pricing — the front desk's number-one question.",
          "Online appointments and telehealth kept separate and connected to your practice system.",
          "License, board certification and hospital affiliations.",
          "Clinical forms connected to a HIPAA-compliant tool, never stored on the website.",
        ],
        searches: ["Spanish speaking doctor", "primary care doctor near me", "doctor visit without insurance", "telehealth in Spanish"],
        faq: [
          {
            question: "Does a medical practice website need to be HIPAA compliant?",
            answer:
              "The informational site and booking don't store records, so they only ask what's needed for the appointment. If you want to collect clinical information online, we connect a HIPAA-compliant form or portal that signs a Business Associate Agreement (BAA).",
          },
        ],
      },
      {
        id: "nutritionists",
        label: "Nutritionists",
        icon: "trending-up",
        title: "Nutritionist and dietitian website design",
        lead:
          "Nutrition sells as a program, not a single visit. The site turns a social follower into a patient, and a first appointment into a follow-up package.",
        includes: [
          "A page per goal: weight loss, sports nutrition, diabetes, pregnancy, kids' nutrition.",
          "Single visit, follow-up package and monthly plan with prices, so people buy the whole program.",
          "A habits and measurements questionnaire before the first visit.",
          "Your credentials up front — what separates you from people selling diets on social media.",
          "One bio link that goes straight to booking or paying for a package.",
        ],
        searches: ["online nutritionist", "dietitian near me", "nutrition consultation cost", "Spanish speaking nutritionist"],
        note: "Real case: Fernanda Silva, a nutritionist, is a client and her site is in the portfolio.",
        faq: [
          {
            question: "I already have Instagram followers. Why would a nutritionist need a website?",
            answer:
              "So those followers have somewhere to book and pay without messaging you. Social media attracts; the website converts — and it's what Google shows when someone searches for a nutritionist in their city.",
          },
        ],
      },
      {
        id: "gyms",
        label: "Gyms",
        icon: "zap",
        title: "Gym and personal trainer website design",
        lead:
          "Prospects decide on impulse: if they can't book the trial class right then, the moment passes. The site exists to make that first step take under a minute.",
        includes: [
          "Class schedule by day, discipline and instructor, connected to your booking system.",
          "Trial-class booking with a two-question form: goal and preferred time.",
          "Memberships and packages with prices and whether there's a sign-up fee.",
          "A profile per trainer with their specialty and how to book personal training.",
          "A page per discipline — CrossFit, yoga, boxing, pilates — for city searches.",
        ],
        searches: ["gym near me", "crossfit near me", "personal trainer cost", "free trial gym class"],
        faq: [
          {
            question: "Should a gym publish its membership prices?",
            answer:
              "Almost always. People compare before visiting, and if they don't see your price they visit the gym that shows it. With promotions, a «starting at» price is enough.",
          },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  professional: {
    eyebrow: "// by profession",
    title: "Websites for attorneys and insurance agents",
    subtitle:
      "Two professions that live on trust and on answering first, each with its own advertising rules. The structure changes with what a client needs to know before calling you.",
    includesLabel: "What your site needs",
    searchesLabel: "What your clients type into Google",
    items: [
      {
        id: "attorneys",
        label: "Attorneys",
        icon: "scale",
        title: "Attorney and law firm website design",
        lead:
          "Nobody searches for «legal services». They search «immigration lawyer», «accident attorney» or «divorce lawyer who speaks Spanish». The site is organized by practice area and screens the case before the consultation.",
        includes: [
          "A page per practice area: immigration, family, personal injury, employment, criminal, business.",
          "An intake form that screens the case: matter type, state or city, key dates and urgency.",
          "Free or paid initial consultation, in person or by video, charged at booking when it applies.",
          "States where you're admitted, bar memberships and case types handled without client details.",
          "A page and a Google Business Profile per office, if you have more than one.",
        ],
        searches: ["immigration lawyer near me", "Spanish speaking attorney", "car accident lawyer", "free legal consultation"],
        faq: [
          {
            question: "Are there rules about what an attorney can put on a website?",
            answer:
              "Yes. Each state bar has advertising rules: no promised outcomes, disclaimers when showing cases and, in some states, an «advertising» label. We apply them while writing, but the final review is yours because the professional responsibility is too.",
          },
        ],
      },
      {
        id: "insurance-agents",
        label: "Insurance agents",
        icon: "shield",
        title: "Insurance agent and agency website design",
        lead:
          "The site your carrier gives you is identical to thousands of others and doesn't rank. Yours is organized by line of coverage and leaves the quote almost ready before the call.",
        includes: [
          "A page per line: health and ACA, Medicare, life, auto, home, business.",
          "A quote form per line that asks only what's needed; Social Security numbers later, over a secure channel.",
          "Booking with extra blocks for Open Enrollment and Medicare season.",
          "License number, states you sell in and the carriers you work with.",
          "Annual policy reviews and cross-selling, so your auto client knows you also sell life.",
        ],
        searches: ["insurance agent near me", "Spanish speaking insurance agent", "Medicare agent near me", "ACA health insurance help"],
        faq: [
          {
            question: "My carrier already gave me a website. Why another one?",
            answer:
              "Because that site is identical to thousands of agents' and rarely ranks. Yours is your brand: it ranks for your name and city, and it stays with you if you switch carriers. For Medicare, marketing-material rules are respected.",
          },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  realEstate: {
    eyebrow: "// brokerage or agent",
    title: "A website for a brokerage or for an independent real estate agent",
    subtitle:
      "It's not the same site. A brokerage sells its inventory and its team; an agent sells themselves. Here's what changes between the two.",
    includesLabel: "What it needs",
    searchesLabel: "How people search",
    items: [
      {
        id: "brokerage",
        label: "Brokerage or developer",
        icon: "building",
        title: "Website design for real estate brokerages and developers",
        lead:
          "The star is the inventory: a filterable catalog, a page per listing or development, and a team of agents who receive leads by area.",
        includes: [
          "A catalog filtered by area, price, bedrooms and listing type.",
          "A page per development with construction progress, floor plans and availability.",
          "Agent profiles and lead routing by area.",
          "A panel to add and remove listings without touching code.",
        ],
        searches: ["homes for sale in [neighborhood]", "new construction homes", "real estate company in [city]", "land for sale"],
        faq: [],
      },
      {
        id: "realtors",
        label: "Independent agent or realtor",
        icon: "briefcase",
        title: "Realtor and real estate agent website design",
        lead:
          "The star is you. Buyers choose a person before a house, so your name, your area and your closed deals go first, with listings as proof.",
        includes: [
          "Your personal brand up front: areas, languages, closed deals and reviews.",
          "Neighborhood and city guides: schools, home types and what living there is like.",
          "Separate forms for buyers (pre-approval) and sellers (address and timeline).",
          "MLS listings through IDX if your broker allows it, or your own listing pages that share well over text.",
          "The first-time buyer process explained in Spanish: mortgages, down payment and ITIN loans.",
        ],
        searches: ["Spanish speaking realtor", "real estate agent near me", "buy a house with ITIN", "realtor in [city]"],
        faq: [
          {
            question: "I work with a franchise. Can I have my own agent website?",
            answer:
              "Yes, and it's the most common setup. Your personal brand is built within the franchise's guidelines and your state's rules: broker name, license and required disclosures.",
          },
        ],
      },
    ],
  },
};

export const specialties: Record<Lang, Dict> = { es, en };

/** Preguntas de los oficios de un giro, para sumarlas a su FAQPage. */
export function specialtyFaq(lang: Lang, key: SegmentKey) {
  return (specialties[lang][key]?.items ?? []).flatMap((s) => s.faq);
}
