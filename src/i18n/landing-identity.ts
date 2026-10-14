// ============================================================
// IDENTIDAD DE CADA LANDING DE GIRO (14 de octubre de 2026)
// ------------------------------------------------------------
// Hasta ahora las páginas de giro compartían plantilla y ORDEN: hero,
// beneficios, proceso, proyecto, testimonios, dolores, calendario,
// fundador, precios, dudas, cierre. Con el texto cambiado, Google y el
// visitante veían la misma página siete veces.
//
// Aquí cada landing declara:
//   · su orden de secciones (`layout`) — qué va, qué no y en qué orden;
//   · cómo se presenta cada bloque (`systemStyle`, `painStyle`,
//     `cycleStyle`): tarjetas, lista numerada, bento, chat…;
//   · su sección firma (`signature`): un gráfico o una animación que solo
//     existe en esa página y que explica SU problema (el filtro de
//     cotización del contratista, la semana de agenda de un consultorio, la
//     curva de temporada del contador…).
//
// Colores, tipografía y componentes base no cambian: la identidad sale de
// la composición y del contenido.
//
// Las cifras de los gráficos son ILUSTRATIVAS (forma típica del año, en una
// escala de 0 a 100) y la propia página lo dice. Nunca datos de un cliente.
// ============================================================

import type { Lang, LandingKey } from "./ui";

export type SegSection =
  | "signature"
  | "specialties"
  | "system"
  | "project"
  | "pains"
  | "cycle"
  | "process"
  | "testimonials"
  | "founder"
  | "price"
  | "faq"
  | "cross";

export interface Identity {
  layout: SegSection[];
  systemStyle: "cards" | "numbered" | "bento" | "checklist";
  painStyle: "list" | "chat" | "split";
  cycleStyle: "grid" | "timeline";
  specialtiesStyle?: "tabs" | "split" | "compare";
}

export const IDENTITY: Record<LandingKey, Identity> = {
  contractors: {
    layout: ["signature", "pains", "system", "project", "cycle", "testimonials", "faq", "price", "cross"],
    systemStyle: "numbered",
    painStyle: "chat",
    cycleStyle: "timeline",
  },
  health: {
    layout: ["specialties", "signature", "system", "project", "pains", "faq", "founder", "cross"],
    systemStyle: "bento",
    painStyle: "list",
    cycleStyle: "grid",
    specialtiesStyle: "tabs",
  },
  professional: {
    layout: ["signature", "specialties", "system", "project", "testimonials", "faq", "price", "cross"],
    systemStyle: "checklist",
    painStyle: "split",
    cycleStyle: "grid",
    specialtiesStyle: "split",
  },
  realEstate: {
    layout: ["signature", "specialties", "system", "project", "cycle", "faq", "founder", "cross"],
    systemStyle: "cards",
    painStyle: "list",
    cycleStyle: "grid",
    specialtiesStyle: "compare",
  },
  accounting: {
    layout: ["signature", "system", "project", "pains", "process", "faq", "price", "cross"],
    systemStyle: "numbered",
    painStyle: "split",
    cycleStyle: "grid",
  },
  taxPreparers: {
    layout: ["signature", "pains", "system", "project", "testimonials", "faq", "cross"],
    systemStyle: "bento",
    painStyle: "chat",
    cycleStyle: "timeline",
  },
  landscaping: {
    layout: ["project", "signature", "system", "cycle", "pains", "process", "faq", "cross"],
    systemStyle: "cards",
    painStyle: "list",
    cycleStyle: "timeline",
  },
};

// ── Secciones firma ─────────────────────────────────────────

interface SigBase {
  eyebrow: string;
  title: string;
  subtitle: string;
}

/** Contratistas: dos solicitudes pasando por el mismo filtro. */
export interface QuoteFilterSig extends SigBase {
  kind: "quoteFilter";
  leadA: string;
  leadB: string;
  fields: { q: string; a: string; b: string; bFails?: boolean }[];
  verdictA: string;
  verdictB: string;
  note: string;
}

/** Salud: una semana de agenda que se llena sola. */
export interface BookingWeekSig extends SigBase {
  kind: "bookingWeek";
  days: string[];
  hours: string[];
  legend: { key: "new" | "follow" | "online"; label: string }[];
  /** [día, fila, tipo] */
  slots: [number, number, "new" | "follow" | "online"][];
  nightLabel: string;
  points: { title: string; text: string }[];
}

/** Profesionales: embudo de consultas a casos que sí tomas. */
export interface FunnelSig extends SigBase {
  kind: "funnel";
  stages: { label: string; note: string; width: number }[];
  caption: string;
}

/** Inmobiliarias: portal contra sitio propio. */
export interface CompareSig extends SigBase {
  kind: "compare";
  colA: string;
  colB: string;
  rows: { label: string; a: string; b: string; aOk: boolean; bOk: boolean }[];
  caption: string;
}

/** Contabilidad y landscaping: forma del año, temporada contra ingreso fijo. */
export interface SeasonChartSig extends SigBase {
  kind: "seasonChart";
  variant: "stacked" | "paired";
  months: string[];
  peak: number[];
  steady: number[];
  peakLabel: string;
  steadyLabel: string;
  caption: string;
  points: { title: string; text: string }[];
}

/** Preparadores de impuestos: fechas fijas del año fiscal + documentos. */
export interface TimelineSig extends SigBase {
  kind: "timeline";
  events: { date: string; title: string; text: string }[];
  checklistTitle: string;
  checklist: string[];
  caption: string;
}

export type Signature =
  | QuoteFilterSig
  | BookingWeekSig
  | FunnelSig
  | CompareSig
  | SeasonChartSig
  | TimelineSig;

const MONTHS_ES = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const MONTHS_EN = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const es: Record<LandingKey, Signature> = {
  contractors: {
    kind: "quoteFilter",
    eyebrow: "// el filtro antes de manejar",
    title: "El formulario de cotización que te dice si vale la pena ir",
    subtitle:
      "Dos solicitudes llegan el mismo lunes. Sin filtro, manejas a las dos. Con un formulario de cotización bien hecho, sabes cuál es antes de encender la camioneta.",
    leadA: "Solicitud 1 · cocina",
    leadB: "Solicitud 2 · «cuánto cobras»",
    fields: [
      { q: "Tipo de trabajo", a: "Remodelación de cocina", b: "«Un arreglito»" },
      { q: "Código postal", a: "Dentro de tu zona", b: "A 70 millas", bFails: true },
      { q: "Fotos del espacio", a: "4 fotos adjuntas", b: "Sin fotos", bFails: true },
      { q: "Cuándo quiere empezar", a: "Este mes", b: "«Algún día»", bFails: true },
      { q: "Rango de presupuesto", a: "Acorde al trabajo", b: "No indicó" },
    ],
    verdictA: "Vale la pena: cita para medir esta semana",
    verdictB: "Respuesta automática amable, sin manejar",
    note:
      "Las preguntas cambian por oficio: un plomero pide la urgencia, un techador el tipo de techo y si hubo granizo o tormenta, un remodelador las medidas.",
  },
  health: {
    kind: "bookingWeek",
    eyebrow: "// tu agenda, sin mensajes",
    title: "Así se llena una semana de consulta con agenda en línea",
    subtitle:
      "Cada cuadro es una cita que el paciente reservó solo: eligió el tipo de consulta, el horario y dejó sus datos. Nadie de tu equipo contestó un mensaje para que pasara.",
    days: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    hours: ["9:00", "10:00", "11:00", "12:00", "16:00", "17:00"],
    legend: [
      { key: "new", label: "Primera vez" },
      { key: "follow", label: "Seguimiento" },
      { key: "online", label: "En línea" },
    ],
    slots: [
      [0, 0, "new"], [0, 2, "follow"], [0, 4, "online"],
      [1, 1, "follow"], [1, 3, "new"], [1, 5, "online"],
      [2, 0, "follow"], [2, 1, "new"], [2, 4, "follow"],
      [3, 2, "online"], [3, 3, "follow"], [3, 5, "new"],
      [4, 0, "new"], [4, 4, "online"], [4, 5, "follow"],
      [5, 0, "follow"], [5, 1, "new"],
    ],
    nightLabel: "Reservada un domingo a las 11 p. m.",
    points: [
      { title: "Bloques por tipo de cita", text: "Primera vez dura más que un seguimiento; la agenda lo sabe y no te encima consultas." },
      { title: "Recordatorio automático", text: "Correo o mensaje antes de la cita para bajar las ausencias, sin que nadie llame." },
      { title: "Se conecta a lo que ya usas", text: "Google Calendar o el software de tu consultorio: una sola agenda, no dos." },
    ],
  },
  professional: {
    kind: "funnel",
    eyebrow: "// de consulta a caso",
    title: "Un formulario que separa los casos que tomas de los que no",
    subtitle:
      "El problema del profesional independiente no es que no le escriban: es que le escriben todos. Cada pregunta del formulario deja pasar solo lo que sí puedes atender.",
    stages: [
      { label: "Mensajes que llegan", note: "Todos: los tuyos, los de otra área y los que solo preguntan precio.", width: 100 },
      { label: "Asunto que sí llevas", note: "Tipo de caso o de seguro elegido de una lista, no en texto libre.", width: 74 },
      { label: "Estado o ciudad donde ejerces", note: "Fuera de tu jurisdicción o licencia, respuesta automática.", width: 56 },
      { label: "Urgencia y expectativa", note: "Fechas límite, presupuesto o cobertura que busca.", width: 42 },
      { label: "Consulta agendada", note: "Llega con contexto: sabes qué preparar antes de contestar.", width: 32 },
    ],
    caption: "Ilustrativo: el ancho muestra cómo se angosta el embudo, no datos de un cliente.",
  },
  realEstate: {
    kind: "compare",
    eyebrow: "// portal contra sitio propio",
    title: "Lo que te da un portal inmobiliario y lo que solo te da tu sitio",
    subtitle:
      "Los portales traen volumen y conviene seguir en ellos. Pero el prospecto que llega por un portal no es tuyo. Esta es la diferencia, renglón por renglón.",
    colA: "Portal inmobiliario",
    colB: "Tu sitio web",
    rows: [
      { label: "De quién es el prospecto", a: "Del portal, que lo comparte", b: "Tuyo, solo tuyo", aOk: false, bOk: true },
      { label: "Junto a quién apareces", a: "Junto a decenas de asesores", b: "Solo tú y tu inventario", aOk: false, bOk: true },
      { label: "Costo por contacto", a: "Pagas por prospecto o por anuncio", b: "Cero después de construirlo", aOk: false, bOk: true },
      { label: "Ficha para mandar por WhatsApp", a: "Con la marca del portal", b: "Con tu marca y tu teléfono", aOk: false, bOk: true },
      { label: "Volumen de visitas desde el día uno", a: "Alto", b: "Crece con SEO local", aOk: true, bOk: false },
      { label: "Comprador que vuelve el año siguiente", a: "No sabe quién eras", b: "Te recuerda y te escribe", aOk: false, bOk: true },
    ],
    caption: "La estrategia que funciona: portales para volumen, sitio propio para que el prospecto termine contigo.",
  },
  accounting: {
    kind: "seasonChart",
    variant: "stacked",
    eyebrow: "// la forma de tu año",
    title: "Por qué un despacho contable necesita vender todo el año",
    subtitle:
      "La temporada de impuestos concentra el trabajo en pocas semanas. Lo que aplana la curva son los servicios que se contratan cada mes —contabilidad, nómina, bookkeeping— y cada uno necesita su propia página para venderse en julio.",
    months: MONTHS_ES,
    peak: [55, 90, 100, 85, 20, 10, 8, 8, 25, 35, 10, 15],
    steady: [30, 30, 30, 30, 30, 32, 32, 34, 34, 35, 35, 36],
    peakLabel: "Declaraciones de temporada",
    steadyLabel: "Contabilidad, nómina y bookkeeping mensual",
    caption: "Ilustrativo: la forma típica del año de un despacho, no datos de un cliente.",
    points: [
      { title: "Una página por servicio recurrente", text: "Bookkeeping, nómina, contabilidad mensual y regularización se buscan por separado y fuera de temporada." },
      { title: "Intake de documentos por servicio", text: "Cada formulario pide su propia lista: no es lo mismo una declaración personal que una nómina." },
      { title: "La base de clientes, reactivada", text: "Los clientes de abril reciben en mayo la oferta de contabilidad mensual, no un silencio de nueve meses." },
    ],
  },
  taxPreparers: {
    kind: "timeline",
    eyebrow: "// el año fiscal no se mueve",
    title: "Las fechas que deciden tu temporada de impuestos",
    subtitle:
      "El calendario del IRS es el mismo cada año, y la página tiene que llegar lista a cada fecha. Lo que no esté publicado en noviembre no te trae clientes en febrero.",
    events: [
      { date: "Oct – Dic", title: "Página lista y reseñas pedidas", text: "Google tarda meses en conocer una página nueva. Aquí se publica y se arma la lista de «avísame en enero»." },
      { date: "31 de enero", title: "Llegan los W-2 y 1099-NEC", text: "Es la fecha límite para que los empleadores los entreguen: arranca la búsqueda de «taxes cerca de mí»." },
      { date: "Finales de enero", title: "El IRS abre la presentación electrónica", text: "Agenda extendida, intake automático y respuestas a lo que todos preguntan." },
      { date: "15 de abril", title: "Fecha límite para la mayoría", text: "Última semana de citas y formulario de extensión para quien no alcanza." },
      { date: "15 de octubre", title: "Cierre de extensiones", text: "Declaraciones extendidas, enmiendas y años atrasados: trabajo fuera de temporada." },
    ],
    checklistTitle: "Lo que el intake pide antes de la cita",
    checklist: [
      "W-2 de cada empleo",
      "1099-NEC, 1099-K o 1099-MISC si trabajó por su cuenta",
      "Identificación y número de Seguro Social o ITIN",
      "Datos de dependientes",
      "Formulario 1098 de intereses hipotecarios o de colegiatura",
      "Declaración del año anterior",
    ],
    caption: "Las fechas pueden recorrerse un día hábil si caen en fin de semana o día festivo.",
  },
  landscaping: {
    kind: "seasonChart",
    variant: "paired",
    eyebrow: "// trabajos sueltos contra contratos",
    title: "Contratos de mantenimiento: el ingreso que sostiene el invierno",
    subtitle:
      "Los trabajos sueltos llegan todos en primavera y desaparecen en diciembre. Los contratos semanales o mensuales pagan igual en enero que en mayo, y la página es donde se venden.",
    months: MONTHS_ES,
    peak: [10, 18, 70, 95, 100, 80, 55, 50, 45, 60, 35, 12],
    steady: [45, 45, 50, 55, 55, 55, 55, 55, 55, 52, 48, 45],
    peakLabel: "Trabajos sueltos",
    steadyLabel: "Contratos de mantenimiento",
    caption: "Ilustrativo: la forma típica del año de una empresa de jardinería, no datos de un cliente.",
    points: [
      { title: "Planes con precio «desde»", text: "Semanal, quincenal y mensual explicados en la página, con lo que incluye cada visita." },
      { title: "Cotización con fotos y medidas", text: "El cliente sube fotos del jardín y la dirección: cotizas sin manejar a ciegas." },
      { title: "Limpieza de otoño y hardscape", text: "Servicios de temporada baja con su propia página, para que diciembre no sea un mes muerto." },
    ],
  },
};

const en: Record<LandingKey, Signature> = {
  contractors: {
    kind: "quoteFilter",
    eyebrow: "// the filter before you drive",
    title: "The quote request form that tells you whether the trip is worth it",
    subtitle:
      "Two requests come in on the same Monday. With no filter, you drive to both. With a well-built quote form, you know which one is real before you start the truck.",
    leadA: "Request 1 · kitchen",
    leadB: "Request 2 · «how much?»",
    fields: [
      { q: "Type of job", a: "Kitchen remodel", b: "«A small fix»" },
      { q: "ZIP code", a: "Inside your service area", b: "70 miles away", bFails: true },
      { q: "Photos of the space", a: "4 photos attached", b: "No photos", bFails: true },
      { q: "When they want to start", a: "This month", b: "«Someday»", bFails: true },
      { q: "Budget range", a: "Fits the job", b: "Not given" },
    ],
    verdictA: "Worth it: measuring visit this week",
    verdictB: "A polite automatic reply, no driving",
    note:
      "The questions change by trade: a plumber asks how urgent it is, a roofer asks the roof type and whether there was hail or storm damage, a remodeler asks for measurements.",
  },
  health: {
    kind: "bookingWeek",
    eyebrow: "// your calendar, no messages",
    title: "How a week of appointments fills up with online booking",
    subtitle:
      "Every block is an appointment a patient booked on their own: they picked the visit type and the time and left their details. Nobody on your team answered a message to make it happen.",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    hours: ["9:00", "10:00", "11:00", "12:00", "4:00", "5:00"],
    legend: [
      { key: "new", label: "New patient" },
      { key: "follow", label: "Follow-up" },
      { key: "online", label: "Telehealth" },
    ],
    slots: [
      [0, 0, "new"], [0, 2, "follow"], [0, 4, "online"],
      [1, 1, "follow"], [1, 3, "new"], [1, 5, "online"],
      [2, 0, "follow"], [2, 1, "new"], [2, 4, "follow"],
      [3, 2, "online"], [3, 3, "follow"], [3, 5, "new"],
      [4, 0, "new"], [4, 4, "online"], [4, 5, "follow"],
      [5, 0, "follow"], [5, 1, "new"],
    ],
    nightLabel: "Booked on a Sunday at 11 p.m.",
    points: [
      { title: "Blocks by visit type", text: "A new-patient visit runs longer than a follow-up; the calendar knows and never double-books you." },
      { title: "Automatic reminders", text: "An email or text before the visit cuts no-shows, without anyone calling." },
      { title: "Connects to what you use", text: "Google Calendar or your practice software: one calendar, not two." },
    ],
  },
  professional: {
    kind: "funnel",
    eyebrow: "// from inquiry to case",
    title: "An intake form that separates the cases you take from the ones you don't",
    subtitle:
      "A solo professional's problem isn't that nobody writes: it's that everybody does. Each question on the form lets through only what you can actually take.",
    stages: [
      { label: "Inquiries that arrive", note: "All of them: yours, other practice areas and price shoppers.", width: 100 },
      { label: "A matter you handle", note: "Case or coverage type picked from a list, not free text.", width: 74 },
      { label: "State or city you're licensed in", note: "Outside your jurisdiction or license, an automatic reply.", width: 56 },
      { label: "Urgency and expectations", note: "Deadlines, budget or the coverage they need.", width: 42 },
      { label: "Consultation booked", note: "It arrives with context: you know what to prepare before answering.", width: 32 },
    ],
    caption: "Illustrative: the width shows how the funnel narrows, not a client's data.",
  },
  realEstate: {
    kind: "compare",
    eyebrow: "// portal vs. your own site",
    title: "What a listing portal gives you, and what only your own website does",
    subtitle:
      "Portals bring volume and you should stay on them. But a lead that comes through a portal isn't yours. Here's the difference, line by line.",
    colA: "Listing portal",
    colB: "Your website",
    rows: [
      { label: "Who owns the lead", a: "The portal, which shares it", b: "You, and only you", aOk: false, bOk: true },
      { label: "Who you appear next to", a: "Dozens of other agents", b: "Just you and your listings", aOk: false, bOk: true },
      { label: "Cost per lead", a: "Pay per lead or per ad", b: "Zero once it's built", aOk: false, bOk: true },
      { label: "Listing page to text a buyer", a: "Portal-branded", b: "Your brand and your number", aOk: false, bOk: true },
      { label: "Traffic from day one", a: "High", b: "Grows with local SEO", aOk: true, bOk: false },
      { label: "Buyer who comes back next year", a: "Doesn't remember you", b: "Remembers you and reaches out", aOk: false, bOk: true },
    ],
    caption: "The setup that works: portals for volume, your own site so the lead ends up with you.",
  },
  accounting: {
    kind: "seasonChart",
    variant: "stacked",
    eyebrow: "// the shape of your year",
    title: "Why an accounting firm needs to sell all year long",
    subtitle:
      "Tax season squeezes the work into a few weeks. What flattens the curve are the services clients pay for every month — bookkeeping, payroll, monthly accounting — and each one needs its own page to sell in July.",
    months: MONTHS_EN,
    peak: [55, 90, 100, 85, 20, 10, 8, 8, 25, 35, 10, 15],
    steady: [30, 30, 30, 30, 30, 32, 32, 34, 34, 35, 35, 36],
    peakLabel: "Seasonal tax returns",
    steadyLabel: "Monthly bookkeeping, payroll and accounting",
    caption: "Illustrative: the typical shape of a firm's year, not a client's data.",
    points: [
      { title: "A page per recurring service", text: "Bookkeeping, payroll, monthly accounting and catch-up work are searched separately — and outside tax season." },
      { title: "Document intake per service", text: "Each form asks for its own list: an individual return isn't a payroll setup." },
      { title: "Your client base, reactivated", text: "April's clients get the monthly bookkeeping offer in May instead of nine months of silence." },
    ],
  },
  taxPreparers: {
    kind: "timeline",
    eyebrow: "// the tax year doesn't move",
    title: "The dates that decide your tax season",
    subtitle:
      "The IRS calendar is the same every year, and the site has to be ready for each date. Whatever isn't live in November won't bring clients in February.",
    events: [
      { date: "Oct – Dec", title: "Site live and reviews requested", text: "Google takes months to learn a new site. This is when it launches and the «remind me in January» list is built." },
      { date: "January 31", title: "W-2s and 1099-NECs arrive", text: "The deadline for employers to send them — searches for «tax preparer near me» start here." },
      { date: "Late January", title: "The IRS opens e-filing", text: "Extended booking, automatic intake and answers to what everybody asks." },
      { date: "April 15", title: "Deadline for most filers", text: "Last week of appointments, plus an extension form for those who won't make it." },
      { date: "October 15", title: "Extensions close", text: "Extended returns, amendments and back taxes: off-season work." },
    ],
    checklistTitle: "What the intake asks for before the appointment",
    checklist: [
      "A W-2 from each job",
      "1099-NEC, 1099-K or 1099-MISC if self-employed",
      "ID and Social Security number or ITIN",
      "Dependent information",
      "Form 1098 for mortgage interest or tuition",
      "Last year's return",
    ],
    caption: "Dates can shift to the next business day when they fall on a weekend or holiday.",
  },
  landscaping: {
    kind: "seasonChart",
    variant: "paired",
    eyebrow: "// one-off jobs vs. contracts",
    title: "Maintenance contracts: the income that carries you through winter",
    subtitle:
      "One-off jobs all arrive in spring and vanish in December. Weekly or monthly contracts pay the same in January as in May — and your website is where they get sold.",
    months: MONTHS_EN,
    peak: [10, 18, 70, 95, 100, 80, 55, 50, 45, 60, 35, 12],
    steady: [45, 45, 50, 55, 55, 55, 55, 55, 55, 52, 48, 45],
    peakLabel: "One-off jobs",
    steadyLabel: "Maintenance contracts",
    caption: "Illustrative: the typical shape of a landscaping company's year, not a client's data.",
    points: [
      { title: "Plans with «starting at» pricing", text: "Weekly, biweekly and monthly plans explained on the site, with what each visit includes." },
      { title: "Quotes with photos and measurements", text: "Clients upload yard photos and the address: you quote without driving blind." },
      { title: "Fall cleanup and hardscape", text: "Off-season services with their own pages, so December isn't a dead month." },
    ],
  },
};

export const signatures: Record<Lang, Record<LandingKey, Signature>> = { es, en };
