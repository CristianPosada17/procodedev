// ============================================================
// CONTENIDO LOCAL DE LAS PÁGINAS DE ESTADO (14 de octubre de 2026)
// ------------------------------------------------------------
// Texas, Florida y California compartían composición, orden y buena parte
// del texto con México y entre sí (34 % de frases iguales entre México y
// Texas en la medición del 14 de octubre). Aquí cada estado recibe:
//   · regiones con sus ciudades, sus giros y su forma de buscar;
//   · una sección firma que solo tiene sentido en ese estado (quién
//     licencia a cada oficio en Texas, la temporada de huracanes en
//     Florida, el cliente real de California);
//   · los proyectos reales más cercanos a ese mercado, con la aclaración
//     de cuándo no hay un cliente en el estado;
//   · su propio orden de secciones.
//
// Reglas de markets.ts que siguen vigentes: nada de presencia local falsa,
// cero cifras inventadas y nada de asesoría legal. Las licencias y fechas
// son información pública y general, y la página lo aclara.
// ============================================================

import type { Lang } from "./ui";
import type { MarketKey } from "./markets";

export type MarketSection =
  | "intro"
  | "context"
  | "remote"
  | "proof"
  | "testimonials"
  | "industries"
  | "founder"
  | "cities"
  | "price"
  | "faq"
  | "regions"
  | "signature"
  | "clients";

/** Orden por defecto: el de siempre (lo usa México). */
export const DEFAULT_MARKET_LAYOUT: MarketSection[] = [
  "intro",
  "context",
  "remote",
  "proof",
  "testimonials",
  "industries",
  "founder",
  "cities",
  "price",
  "faq",
];

export const MARKET_LAYOUT: Partial<Record<MarketKey, MarketSection[]>> = {
  texas: ["intro", "regions", "signature", "industries", "context", "clients", "remote", "faq", "price"],
  florida: ["intro", "signature", "regions", "context", "industries", "clients", "faq", "remote", "price"],
  california: ["intro", "signature", "regions", "context", "industries", "remote", "testimonials", "faq", "price"],
};

interface Block {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface Regions extends Block {
  sectorsLabel: string;
  items: { name: string; area: string; text: string; sectors: string[] }[];
}

export interface Clients extends Block {
  items: { projectId: string; why: string }[];
}

export interface LicensesSig extends Block {
  kind: "licenses";
  cols: [string, string, string];
  rows: { trade: string; who: string; show: string; statewide: boolean }[];
  caption: string;
}

export interface SeasonSig extends Block {
  kind: "season";
  months: string[];
  /** 0 preparación · 1 temporada · 2 pico */
  phase: (0 | 1 | 2)[];
  legend: [string, string, string];
  points: { title: string; text: string }[];
  caption: string;
}

export interface CaseSig extends Block {
  kind: "case";
  projectId: string;
  facts: { label: string; value: string }[];
  lessonsTitle: string;
  lessons: string[];
}

export interface MarketLocal {
  regions: Regions;
  signature: LicensesSig | SeasonSig | CaseSig;
  clients?: Clients;
}

const es: Partial<Record<MarketKey, MarketLocal>> = {
  // ────────────────────────────────────────────────────────────
  texas: {
    regions: {
      eyebrow: "// por región",
      title: "Páginas web en Houston, Dallas, San Antonio, Austin, El Paso y el Valle",
      subtitle:
        "Texas no es un solo mercado. Cada región tiene sus giros fuertes, su idioma dominante y su forma de buscar, y la página se escribe para esa región, no para «Texas» en general.",
      sectorsLabel: "Giros con más búsqueda",
      items: [
        {
          name: "Houston",
          area: "Houston, Pasadena, Katy, Sugar Land",
          text: "El mercado de oficios más grande del estado: remodelación, techos, plomería y climatización compiten por «servicio + ciudad» desde el celular. Después de cada tormenta del Golfo, la demanda de techos y restauración se dispara en días.",
          sectors: ["Contratistas", "Climatización", "Preparadores de impuestos"],
        },
        {
          name: "Dallas–Fort Worth",
          area: "Dallas, Fort Worth, Arlington, Irving, Plano",
          text: "El área con más cliente corporativo: servicios profesionales, inmobiliaria y contabilidad para negocios. El norte de Texas es zona de granizo en primavera, y cada temporada los techadores compiten por las mismas búsquedas.",
          sectors: ["Servicios profesionales", "Inmobiliarias", "Techos"],
        },
        {
          name: "San Antonio",
          area: "San Antonio, New Braunfels, Seguin",
          text: "Clientela mayoritariamente hispana: aquí la versión en español no es la segunda, es la principal. Salud, servicios al hogar y negocios familiares de varias generaciones.",
          sectors: ["Salud", "Servicios al hogar", "Negocios familiares"],
        },
        {
          name: "Austin",
          area: "Austin, Round Rock, San Marcos",
          text: "Crecimiento acelerado y mucho movimiento inmobiliario. Consultoría, remodelación y marcas personales que venden en inglés primero y en español a su clientela hispana.",
          sectors: ["Inmobiliarias", "Remodelación", "Consultoría"],
        },
        {
          name: "El Paso",
          area: "El Paso y la frontera con Ciudad Juárez",
          text: "Mercado fronterizo donde el mismo cliente vive entre dos países. El español es la norma, y muchos negocios atienden a clientes de los dos lados: la página tiene que explicar cómo.",
          sectors: ["Salud", "Contabilidad", "Servicios profesionales"],
        },
        {
          name: "Valle del Río Grande",
          area: "McAllen, Edinburg, Brownsville, Harlingen",
          text: "Una de las regiones más hispanas del país, con mucha demanda de impuestos en temporada, clínicas y contratistas. Una página bien hecha en español todavía destaca frente a la competencia local.",
          sectors: ["Preparadores de impuestos", "Clínicas", "Contratistas"],
        },
      ],
    },
    signature: {
      kind: "licenses",
      eyebrow: "// licencias por oficio",
      title: "Quién licencia a cada oficio en Texas y qué poner en tu página",
      subtitle:
        "En Texas no todos los oficios tienen licencia estatal. Saber cuál sí te dice qué número poner a la vista, y qué argumento de confianza usar cuando no hay licencia que mostrar.",
      cols: ["Oficio", "Quién licencia", "Qué mostrar en la página"],
      rows: [
        { trade: "Electricistas", who: "TDLR (Texas Department of Licensing and Regulation)", show: "Número de licencia en cada página de servicio, no solo en el pie.", statewide: true },
        { trade: "Climatización y refrigeración", who: "TDLR", show: "Licencia de A/C y refrigeración a la vista: es lo primero que verifica quien contrata una instalación.", statewide: true },
        { trade: "Plomeros", who: "Texas State Board of Plumbing Examiners", show: "Número de licencia junto al botón de llamada y en la página de urgencias.", statewide: true },
        { trade: "Contratista general y remodelación", who: "Sin licencia estatal; algunas ciudades piden registro o permisos", show: "Seguro de responsabilidad, años trabajando, garantía por escrito y fotos de obra.", statewide: false },
        { trade: "Techadores", who: "Sin licencia estatal obligatoria", show: "Seguro, garantía, certificaciones voluntarias y reseñas de cada trabajo después de tormenta.", statewide: false },
      ],
      caption:
        "Información general para decidir qué mostrar en tu página, no asesoría legal. Confirma los requisitos de tu caso con la autoridad correspondiente.",
    },
    clients: {
      eyebrow: "// proyectos que puedes abrir",
      title: "Lo más cercano a tu negocio en Texas",
      subtitle:
        "Proyectos publicados que puedes revisar antes de agendar, elegidos por parecerse a lo que necesita un negocio texano.",
      items: [
        { projectId: "miconta", why: "Despacho bilingüe con clientela hispana en Ohio: el mismo reto que un despacho de Houston o San Antonio, con servicios explicados en los dos idiomas." },
        { projectId: "trejo", why: "Empresa de servicios en California que recibe cotizaciones en línea: la estructura que necesita un contratista de Dallas o Austin." },
        { projectId: "demo-taxpro", why: "Una oficina de impuestos pensada para Houston, con servicios para personas y negocios en inglés y español." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────────
  florida: {
    regions: {
      eyebrow: "// por región",
      title: "Páginas web en Miami, Fort Lauderdale, Orlando, Tampa y Jacksonville",
      subtitle:
        "Florida son varios mercados con idioma, giros y temporadas distintos. No se escribe igual una página para Hialeah que para Jacksonville.",
      sectorsLabel: "Giros con más búsqueda",
      items: [
        {
          name: "Miami-Dade",
          area: "Miami, Hialeah, Doral, Homestead",
          text: "El español es el idioma principal del negocio, no la traducción. Inmobiliaria, salud, servicios profesionales y abogados de inmigración compiten primero en español.",
          sectors: ["Inmobiliarias", "Abogados", "Salud"],
        },
        {
          name: "Broward",
          area: "Fort Lauderdale, Hollywood, Pembroke Pines",
          text: "Clientela mixta en inglés y español, y mucha competencia en Google Maps para servicios al hogar, seguros y clínicas.",
          sectors: ["Servicios al hogar", "Agentes de seguros", "Clínicas"],
        },
        {
          name: "Palm Beach",
          area: "West Palm Beach, Boca Raton, Lake Worth",
          text: "Clientes de ticket alto y temporada de invierno marcada: remodelación, landscaping y servicios profesionales donde la página compite por credibilidad.",
          sectors: ["Remodelación", "Landscaping", "Servicios profesionales"],
        },
        {
          name: "Orlando y Kissimmee",
          area: "Condados de Orange y Osceola",
          text: "Una de las comunidades puertorriqueñas más grandes fuera de la isla y un mercado de servicios al hogar y negocios familiares en expansión, con búsqueda en los dos idiomas.",
          sectors: ["Servicios al hogar", "Preparadores de impuestos", "Negocios familiares"],
        },
        {
          name: "Tampa Bay",
          area: "Tampa, St. Petersburg, Brandon",
          text: "Construcción, restauración y techos con la demanda concentrada en la temporada de huracanes: el formulario de emergencia tiene que existir antes de la primera tormenta.",
          sectors: ["Techos", "Restauración", "Contratistas"],
        },
        {
          name: "Jacksonville",
          area: "Condado de Duval y alrededores",
          text: "Contratistas y servicios profesionales con clientela mixta, más en inglés que el sur del estado: aquí el inglés suele ser la versión principal.",
          sectors: ["Contratistas", "Servicios profesionales", "Salud"],
        },
      ],
    },
    signature: {
      kind: "season",
      eyebrow: "// temporada de huracanes",
      title: "La temporada de huracanes decide el calendario de medio estado",
      subtitle:
        "Va del 1 de junio al 30 de noviembre, con el pico entre agosto y octubre. Para techos, restauración, poda y seguros, la página tiene que estar lista antes de junio, no después de la primera tormenta.",
      months: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      phase: [0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 0],
      legend: ["Preparación", "Temporada", "Pico de la temporada"],
      points: [
        { title: "Formulario de emergencia con fotos", text: "El cliente manda fotos del daño, la dirección y su aseguradora desde el celular; tú priorizas sin llamar a todos." },
        { title: "Disponibilidad a la vista", text: "Un aviso que cambias tú mismo —«atendiendo Miami-Dade y Broward esta semana»— evita cientos de mensajes." },
        { title: "Licencia estatal y seguro al frente", text: "Florida certifica a los contratistas a nivel estatal (DBPR) y el cliente puede verificarlo en línea: tu número va donde lo busca." },
      ],
      caption: "Fechas oficiales de la temporada atlántica de huracanes. Información general, no asesoría.",
    },
    clients: {
      eyebrow: "// proyectos que puedes abrir",
      title: "Lo más cercano a tu negocio en Florida",
      subtitle:
        "Proyectos publicados que puedes revisar antes de agendar, elegidos por parecerse a lo que necesita un negocio de Florida.",
      items: [
        { projectId: "demo-inmobiliaria", why: "El sitio de una asesora independiente, con fichas que se mandan por WhatsApp, como trabaja el mercado de Miami." },
        { projectId: "miconta", why: "Despacho bilingüe con clientela hispana en Estados Unidos: servicios explicados en español primero, como pide el sur de Florida." },
        { projectId: "trejo", why: "Empresa de servicios que recibe cotizaciones en línea: la base de un sitio de techos o restauración antes de la temporada." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────────
  california: {
    regions: {
      eyebrow: "// por región",
      title: "Páginas web en Los Ángeles, el Inland Empire, San Diego, el Valle Central y la Costa Central",
      subtitle:
        "California es el estado más competido y el más caro para anunciarse, pero no en todas partes igual. Cada región pide una estrategia distinta.",
      sectorsLabel: "Giros con más búsqueda",
      items: [
        {
          name: "Condado de Los Ángeles",
          area: "Los Ángeles, Long Beach, East LA, San Fernando Valley",
          text: "El mercado hispano más grande del país y uno de los clics pagados más caros. Aquí gana quien ordena primero su ficha de Google, sus reseñas y sus páginas por servicio.",
          sectors: ["Contratistas", "Salud", "Servicios profesionales"],
        },
        {
          name: "Inland Empire",
          area: "Riverside, San Bernardino, Ontario, Fontana",
          text: "Construcción, logística y oficios en crecimiento constante, con menos competencia digital que la costa: una buena página posiciona más rápido aquí.",
          sectors: ["Contratistas", "Servicios al hogar", "Preparadores de impuestos"],
        },
        {
          name: "San Diego",
          area: "San Diego, Chula Vista, Escondido",
          text: "Negocios transfronterizos y clientela que vive en los dos idiomas; salud, servicios al hogar y profesionales que atienden de los dos lados de la frontera.",
          sectors: ["Salud", "Servicios al hogar", "Servicios profesionales"],
        },
        {
          name: "Valle Central",
          area: "Fresno, Bakersfield, Modesto",
          text: "Regiones agrícolas con muchas familias hispanas: preparadores de impuestos, clínicas y contratistas donde el español es el idioma de la primera llamada.",
          sectors: ["Preparadores de impuestos", "Clínicas", "Contratistas"],
        },
        {
          name: "Costa Central",
          area: "Salinas, Monterey, Watsonville",
          text: "Aquí trabaja Trejo Landscaping, cliente real: jardinería y paisajismo residencial y comercial que recibe cotizaciones desde su sitio.",
          sectors: ["Landscaping", "Contratistas", "Servicios al hogar"],
        },
        {
          name: "Área de la Bahía",
          area: "San José, Oakland, San Francisco",
          text: "Servicios profesionales y consultoría de ticket alto, donde la página compite por credibilidad y no por precio.",
          sectors: ["Servicios profesionales", "Consultoría", "Inmobiliarias"],
        },
      ],
    },
    signature: {
      kind: "case",
      eyebrow: "// cliente real en California",
      title: "Trejo Landscaping: una empresa de Salinas que cotiza en línea",
      subtitle:
        "No es una demo. Trejo Landscaping hace jardinería y paisajismo residencial y comercial en la costa central de California, y necesitaba recibir solicitudes de cotización sin perseguir a cada cliente.",
      projectId: "trejo",
      facts: [
        { label: "Ubicación", value: "Salinas, California" },
        { label: "Giro", value: "Landscaping residencial y comercial" },
        { label: "Pieza clave", value: "«Get a Quote» en todo el sitio" },
      ],
      lessonsTitle: "Lo que aplica a cualquier negocio de servicios en California",
      lessons: [
        "El botón de cotización vive en todas las páginas, no solo en contacto: en un mercado caro, cada visita cuenta.",
        "Proyectos con fotos y reseñas reales antes que anuncios: lo orgánico primero, porque el clic pagado aquí sale caro.",
        "WhatsApp y chat para contestar rápido: en California el cliente compara tres empresas en la misma tarde.",
      ],
    },
  },
};

const en: Partial<Record<MarketKey, MarketLocal>> = {
  // ────────────────────────────────────────────────────────────
  texas: {
    regions: {
      eyebrow: "// by region",
      title: "Websites in Houston, Dallas, San Antonio, Austin, El Paso and the Valley",
      subtitle:
        "Texas isn't one market. Each region has its own strong industries, dominant language and search habits, and the site is written for that region — not for «Texas» in general.",
      sectorsLabel: "Industries searching most",
      items: [
        {
          name: "Houston",
          area: "Houston, Pasadena, Katy, Sugar Land",
          text: "The biggest trades market in the state: remodeling, roofing, plumbing and HVAC compete for «service + city» on mobile. After every Gulf storm, demand for roofing and restoration spikes within days.",
          sectors: ["Contractors", "HVAC", "Tax preparers"],
        },
        {
          name: "Dallas–Fort Worth",
          area: "Dallas, Fort Worth, Arlington, Irving, Plano",
          text: "The area with the most corporate clients: professional services, real estate and business accounting. North Texas is hail country in spring, and every season roofers fight for the same searches.",
          sectors: ["Professional services", "Real estate", "Roofing"],
        },
        {
          name: "San Antonio",
          area: "San Antonio, New Braunfels, Seguin",
          text: "A mostly Hispanic clientele: here the Spanish version isn't the second one, it's the main one. Health, home services and multi-generation family businesses.",
          sectors: ["Health", "Home services", "Family businesses"],
        },
        {
          name: "Austin",
          area: "Austin, Round Rock, San Marcos",
          text: "Fast growth and a busy real estate market. Consulting, remodeling and personal brands that sell in English first and in Spanish to their Hispanic clients.",
          sectors: ["Real estate", "Remodeling", "Consulting"],
        },
        {
          name: "El Paso",
          area: "El Paso and the Ciudad Juárez border",
          text: "A border market where the same client lives between two countries. Spanish is the norm, and many businesses serve clients on both sides — the site has to explain how.",
          sectors: ["Health", "Accounting", "Professional services"],
        },
        {
          name: "Rio Grande Valley",
          area: "McAllen, Edinburg, Brownsville, Harlingen",
          text: "One of the most Hispanic regions in the country, with strong demand for tax season, clinics and contractors. A well-built Spanish site still stands out against local competition.",
          sectors: ["Tax preparers", "Clinics", "Contractors"],
        },
      ],
    },
    signature: {
      kind: "licenses",
      eyebrow: "// licensing by trade",
      title: "Who licenses each trade in Texas, and what to show on your website",
      subtitle:
        "Not every trade has a state license in Texas. Knowing which ones do tells you which number to put in plain sight — and which trust signal to use when there's no license to show.",
      cols: ["Trade", "Who licenses it", "What to show on the site"],
      rows: [
        { trade: "Electricians", who: "TDLR (Texas Department of Licensing and Regulation)", show: "License number on every service page, not just the footer.", statewide: true },
        { trade: "HVAC and refrigeration", who: "TDLR", show: "Your A/C and refrigeration license up front — the first thing an installation client checks.", statewide: true },
        { trade: "Plumbers", who: "Texas State Board of Plumbing Examiners", show: "License number next to the call button and on the emergency page.", statewide: true },
        { trade: "General contractors and remodelers", who: "No state license; some cities require registration or permits", show: "Liability insurance, years in business, a written warranty and project photos.", statewide: false },
        { trade: "Roofers", who: "No mandatory state license", show: "Insurance, warranty, voluntary certifications and reviews after every storm job.", statewide: false },
      ],
      caption:
        "General information to decide what to show on your site, not legal advice. Confirm the requirements for your case with the relevant authority.",
    },
    clients: {
      eyebrow: "// projects you can open",
      title: "The closest work to your Texas business",
      subtitle:
        "Published projects you can review before booking, picked because they resemble what a Texas business needs.",
      items: [
        { projectId: "miconta", why: "A bilingual firm with a Hispanic clientele in Ohio: the same challenge as a firm in Houston or San Antonio, with services explained in both languages." },
        { projectId: "trejo", why: "A California service business that takes quote requests online: the structure a contractor in Dallas or Austin needs." },
        { projectId: "demo-taxpro", why: "A tax office designed for Houston, with individual and business services in English and Spanish." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────────
  florida: {
    regions: {
      eyebrow: "// by region",
      title: "Websites in Miami, Fort Lauderdale, Orlando, Tampa and Jacksonville",
      subtitle:
        "Florida is several markets with different languages, industries and seasons. A site for Hialeah isn't written like one for Jacksonville.",
      sectorsLabel: "Industries searching most",
      items: [
        {
          name: "Miami-Dade",
          area: "Miami, Hialeah, Doral, Homestead",
          text: "Spanish is the main language of business, not the translation. Real estate, health, professional services and immigration attorneys compete in Spanish first.",
          sectors: ["Real estate", "Attorneys", "Health"],
        },
        {
          name: "Broward",
          area: "Fort Lauderdale, Hollywood, Pembroke Pines",
          text: "A mixed English and Spanish clientele, and heavy Google Maps competition for home services, insurance and clinics.",
          sectors: ["Home services", "Insurance agents", "Clinics"],
        },
        {
          name: "Palm Beach",
          area: "West Palm Beach, Boca Raton, Lake Worth",
          text: "High-ticket clients and a marked winter season: remodeling, landscaping and professional services where the site competes on credibility.",
          sectors: ["Remodeling", "Landscaping", "Professional services"],
        },
        {
          name: "Orlando and Kissimmee",
          area: "Orange and Osceola counties",
          text: "One of the largest Puerto Rican communities outside the island and a growing market of home services and family businesses, searching in both languages.",
          sectors: ["Home services", "Tax preparers", "Family businesses"],
        },
        {
          name: "Tampa Bay",
          area: "Tampa, St. Petersburg, Brandon",
          text: "Construction, restoration and roofing with demand concentrated in hurricane season: the emergency form has to exist before the first storm.",
          sectors: ["Roofing", "Restoration", "Contractors"],
        },
        {
          name: "Jacksonville",
          area: "Duval County and surroundings",
          text: "Contractors and professional services with a mixed clientele, more English-speaking than the south of the state: English is usually the main version here.",
          sectors: ["Contractors", "Professional services", "Health"],
        },
      ],
    },
    signature: {
      kind: "season",
      eyebrow: "// hurricane season",
      title: "Hurricane season sets the calendar for half the state",
      subtitle:
        "It runs June 1 to November 30, peaking from August to October. For roofing, restoration, tree service and insurance, the site has to be ready before June — not after the first storm.",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      phase: [0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 0],
      legend: ["Preparation", "Season", "Peak of the season"],
      points: [
        { title: "An emergency form with photos", text: "Clients send damage photos, the address and their insurer from their phone; you prioritize without calling everyone." },
        { title: "Availability in plain sight", text: "A notice you update yourself — «serving Miami-Dade and Broward this week» — saves hundreds of messages." },
        { title: "State license and insurance up front", text: "Florida certifies contractors statewide (DBPR) and clients can verify it online: your number goes where they look." },
      ],
      caption: "Official Atlantic hurricane season dates. General information, not advice.",
    },
    clients: {
      eyebrow: "// projects you can open",
      title: "The closest work to your Florida business",
      subtitle:
        "Published projects you can review before booking, picked because they resemble what a Florida business needs.",
      items: [
        { projectId: "demo-inmobiliaria", why: "An independent agent's site with listing pages you can text to buyers, the way the Miami market works." },
        { projectId: "miconta", why: "A bilingual firm with a Hispanic clientele in the U.S.: services explained in Spanish first, the way South Florida expects." },
        { projectId: "trejo", why: "A service business that takes quote requests online: the foundation of a roofing or restoration site before the season." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────────
  california: {
    regions: {
      eyebrow: "// by region",
      title: "Websites in Los Angeles, the Inland Empire, San Diego, the Central Valley and the Central Coast",
      subtitle:
        "California is the most competitive and most expensive state to advertise in — but not equally everywhere. Each region calls for a different strategy.",
      sectorsLabel: "Industries searching most",
      items: [
        {
          name: "Los Angeles County",
          area: "Los Angeles, Long Beach, East LA, San Fernando Valley",
          text: "The largest Hispanic market in the country and some of the most expensive paid clicks. The winner is whoever gets their Google profile, reviews and service pages in order first.",
          sectors: ["Contractors", "Health", "Professional services"],
        },
        {
          name: "Inland Empire",
          area: "Riverside, San Bernardino, Ontario, Fontana",
          text: "Construction, logistics and trades in steady growth, with less digital competition than the coast: a good site ranks faster here.",
          sectors: ["Contractors", "Home services", "Tax preparers"],
        },
        {
          name: "San Diego",
          area: "San Diego, Chula Vista, Escondido",
          text: "Cross-border businesses and a clientele that lives in both languages; health, home services and professionals serving both sides of the border.",
          sectors: ["Health", "Home services", "Professional services"],
        },
        {
          name: "Central Valley",
          area: "Fresno, Bakersfield, Modesto",
          text: "Farming regions with many Hispanic families: tax preparers, clinics and contractors where Spanish is the language of the first call.",
          sectors: ["Tax preparers", "Clinics", "Contractors"],
        },
        {
          name: "Central Coast",
          area: "Salinas, Monterey, Watsonville",
          text: "Home of Trejo Landscaping, a real client: residential and commercial landscaping that takes quote requests from its site.",
          sectors: ["Landscaping", "Contractors", "Home services"],
        },
        {
          name: "Bay Area",
          area: "San Jose, Oakland, San Francisco",
          text: "High-ticket professional services and consulting, where the site competes on credibility, not price.",
          sectors: ["Professional services", "Consulting", "Real estate"],
        },
      ],
    },
    signature: {
      kind: "case",
      eyebrow: "// a real California client",
      title: "Trejo Landscaping: a Salinas business that quotes online",
      subtitle:
        "Not a demo. Trejo Landscaping does residential and commercial landscaping on California's Central Coast, and needed to receive quote requests without chasing every client.",
      projectId: "trejo",
      facts: [
        { label: "Location", value: "Salinas, California" },
        { label: "Industry", value: "Residential and commercial landscaping" },
        { label: "Key piece", value: "«Get a Quote» on every page" },
      ],
      lessonsTitle: "What applies to any California service business",
      lessons: [
        "The quote button lives on every page, not just contact: in an expensive market, every visit counts.",
        "Projects with real photos and reviews before ads: organic first, because paid clicks here are expensive.",
        "WhatsApp and chat to answer fast: in California clients compare three companies in the same afternoon.",
      ],
    },
  },
};

export const marketLocal: Record<Lang, Partial<Record<MarketKey, MarketLocal>>> = { es, en };
