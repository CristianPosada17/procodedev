// ============================================================
// PÁGINAS LEGALES — Aviso de privacidad y Términos y condiciones
// ------------------------------------------------------------
// Los dos enlaces existían en el footer apuntando a «#». Un enlace legal
// roto no es un detalle cosmético: es lo primero que revisa un contribuyente
// antes de subir documentos fiscales a un formulario.
//
// El contenido describe lo que el sitio hace realmente hoy: formulario vía
// Web3Forms, Google Analytics 4, Meta Pixel, Calendly y WhatsApp. Si se añade
// o se quita una herramienta, este archivo se actualiza — es la única razón
// por la que el texto vive aquí y no incrustado en la página.
//
// Nota: esto es un texto informativo redactado a partir de cómo opera el
// sitio, no una opinión legal. Antes de una revisión formal (CCPA/CPRA si
// llega tráfico de California, o la LFPDPPP mexicana), conviene que lo mire
// un abogado.
// ============================================================

import type { Lang } from "./ui";

export interface LegalSection {
  title: string;
  body?: string[];
  list?: string[];
}

export interface LegalDoc {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  subtitle: string;
  updatedLabel: string;
  updated: string;
  sections: LegalSection[];
  contactTitle: string;
  contactBody: string;
}

export interface LegalDict {
  privacy: LegalDoc;
  terms: LegalDoc;
}

/** Fecha de última actualización. Cambiar al editar el contenido. */
const UPDATED_ES = "14 de agosto de 2026";
const UPDATED_EN = "August 14, 2026";

const es: LegalDict = {
  privacy: {
    meta: {
      title: "Aviso de Privacidad | ProCode Dev",
      description:
        "Cómo ProCode Dev recopila, usa y protege los datos de quienes visitan el sitio o piden información, y cómo puedes ejercer tus derechos sobre ellos.",
    },
    eyebrow: "// legal",
    title: "Aviso de privacidad",
    subtitle:
      "Qué datos recojo, para qué los uso y qué puedes pedirme que haga con ellos. Escrito para que se entienda, no para que se pase por alto.",
    updatedLabel: "Última actualización",
    updated: UPDATED_ES,
    sections: [
      {
        title: "1. Quién es responsable de tus datos",
        body: [
          "ProCode Dev es un negocio operado por Cristian Posada, que presta servicios de desarrollo web, presencia digital y automatización de forma remota a clientes en Estados Unidos y México.",
          "Para cualquier asunto relacionado con este aviso o con tus datos personales, el canal de contacto es info@procodedev.com.",
        ],
      },
      {
        title: "2. Qué datos recopilo",
        body: [
          "Solo recopilo datos que tú decides darme o que se generan automáticamente al navegar el sitio:",
        ],
        list: [
          "Datos que envías en el formulario de contacto: nombre, correo electrónico, número de WhatsApp o teléfono, tipo de proyecto y el mensaje que escribes.",
          "Datos que compartes al escribirme por WhatsApp o por correo, incluido cualquier archivo o información que decidas adjuntar.",
          "Datos que proporcionas al agendar una llamada a través de Calendly: nombre, correo y el horario seleccionado.",
          "Datos técnicos de navegación recopilados por herramientas de analítica: páginas visitadas, tiempo en el sitio, dispositivo, navegador, país o región aproximada y desde qué sitio llegaste.",
        ],
      },
      {
        title: "3. Para qué uso esos datos",
        list: [
          "Responder tu mensaje, atender tu solicitud y darte seguimiento comercial.",
          "Preparar propuestas, presupuestos y documentos del proyecto que me pidas.",
          "Prestar y administrar los servicios contratados, incluidos soporte y mantenimiento.",
          "Entender cómo se usa el sitio y mejorar su contenido, su velocidad y su estructura.",
          "Cumplir con obligaciones fiscales, contables y legales derivadas de una relación comercial.",
        ],
        body: [
          "No vendo, alquilo ni intercambio tus datos personales con terceros para fines publicitarios.",
        ],
      },
      {
        title: "4. Con quién se comparten",
        body: [
          "Para que el sitio funcione utilizo proveedores de servicio que pueden procesar algunos de estos datos por mi cuenta. Cada uno tiene su propia política de privacidad:",
        ],
        list: [
          "Web3Forms — procesa el envío del formulario de contacto y me lo entrega por correo.",
          "Google Analytics 4 — analítica de uso del sitio, de forma agregada.",
          "Meta Pixel — medición del rendimiento de campañas en Facebook e Instagram.",
          "Calendly — gestión de la agenda para la llamada de 20 minutos.",
          "WhatsApp (Meta) — canal de conversación cuando eliges escribirme por ahí.",
          "Proveedor de hosting y correo — alojamiento del sitio y de la cuenta de correo profesional.",
        ],
      },
      {
        title: "5. Cookies y tecnologías de medición",
        body: [
          "El sitio utiliza cookies y tecnologías similares a través de Google Analytics 4 y Meta Pixel para medir el tráfico y el rendimiento de las campañas. No se usan para identificarte personalmente.",
          "Puedes bloquear o eliminar las cookies desde la configuración de tu navegador, y desactivar la personalización de anuncios desde la configuración de tu cuenta de Google o de Meta. Si las bloqueas, el sitio sigue funcionando con normalidad.",
        ],
      },
      {
        title: "6. Cuánto tiempo conservo la información",
        body: [
          "Conservo los datos de contacto mientras exista una relación comercial o un interés vigente en el servicio, y después durante el plazo necesario para atender obligaciones fiscales y legales.",
          "Si me pides que borre tus datos y no existe una obligación legal que me impida hacerlo, los elimino.",
        ],
      },
      {
        title: "7. Tus derechos",
        body: [
          "Puedes pedirme en cualquier momento que:",
        ],
        list: [
          "Te diga qué datos tuyos tengo y para qué los estoy usando.",
          "Corrija cualquier dato que esté incompleto o desactualizado.",
          "Elimine tus datos de mis registros.",
          "Deje de usarlos para fines de contacto comercial.",
        ],
      },
      {
        title: "8. Seguridad",
        body: [
          "El sitio se sirve por conexión cifrada (HTTPS) y los datos que envías por el formulario viajan cifrados. Aplico medidas razonables para proteger la información, aunque ningún sistema conectado a internet puede garantizar seguridad absoluta.",
          "Para documentos fiscales o financieros de un proyecto, uso los canales que acordemos por escrito. Te recomiendo no enviar números de seguro social, identificaciones ni estados de cuenta por el formulario público del sitio.",
        ],
      },
      {
        title: "9. Menores de edad",
        body: [
          "Los servicios de ProCode Dev están dirigidos a negocios y profesionales. El sitio no está dirigido a menores de 18 años y no recopilo intencionalmente datos de menores.",
        ],
      },
      {
        title: "10. Cambios a este aviso",
        body: [
          "Si cambia la forma en que trato los datos o las herramientas que utilizo, actualizaré este aviso y la fecha que aparece arriba. La versión vigente es siempre la publicada en esta página.",
        ],
      },
    ],
    contactTitle: "¿Preguntas sobre tus datos?",
    contactBody:
      "Escríbeme a info@procodedev.com y te respondo directamente. Sin formularios de por medio ni departamentos.",
  },

  terms: {
    meta: {
      title: "Términos y Condiciones | ProCode Dev",
      description:
        "Condiciones de uso y contratación de los servicios de ProCode Dev: alcance, precios, pagos, plazos, propiedad del trabajo, planes mensuales y bajas.",
    },
    eyebrow: "// legal",
    title: "Términos y condiciones",
    subtitle:
      "Las reglas del sitio y de trabajar conmigo: qué incluye cada servicio, cómo se paga, de quién es el trabajo y cómo se cancela.",
    updatedLabel: "Última actualización",
    updated: UPDATED_ES,
    sections: [
      {
        title: "1. Aceptación",
        body: [
          "Al navegar este sitio o contratar un servicio de ProCode Dev —negocio operado por Cristian Posada— aceptas estas condiciones. Si no estás de acuerdo con alguna, lo mejor es que lo hablemos antes de empezar.",
        ],
      },
      {
        title: "2. Qué servicios se ofrecen",
        body: [
          "ProCode Dev construye sistemas digitales de crecimiento: sitios web, landing pages, presencia en Google, formularios, automatizaciones, seguimiento y medición, principalmente para dueños de negocio y pymes en Estados Unidos y México.",
          "El alcance concreto de cada proyecto se define por escrito antes de empezar. Lo que no esté descrito ahí no forma parte del alcance, y si surge durante el proyecto te paso el precio antes de ejecutarlo — nunca a mitad del trabajo.",
        ],
      },
      {
        title: "3. Lo que ProCode Dev no hace",
        body: [
          "ProCode Dev es un proveedor de servicios digitales. No presta servicios fiscales, contables, legales ni financieros, no prepara declaraciones, no representa a nadie ante el IRS y no da asesoría sobre situaciones fiscales concretas.",
          "El contenido del sitio y del blog es informativo y de carácter general. No sustituye la opinión de un profesional autorizado ni constituye asesoría fiscal, legal o financiera para tu caso.",
        ],
      },
      {
        title: "4. Precios, pagos y moneda",
        list: [
          "Los precios publicados están en dólares estadounidenses (USD) y corresponden al alcance descrito en cada plan.",
          "La equivalencia en pesos mexicanos es orientativa, se calcula a un tipo de cambio fijo publicado en la página de precios y no sustituye a la facturación, que se realiza en USD.",
          "Los proyectos se pagan con un anticipo al iniciar y el resto según el calendario que acordemos por escrito.",
          "Los planes mensuales se cobran por adelantado, mes a mes.",
          "El Diagnóstico de Presencia Digital es un pago único y se acredita íntegro al precio del proyecto si decides avanzar conmigo.",
          "Los precios pueden actualizarse en cualquier momento; el precio aplicable es el vigente al momento de contratar y no cambia durante un proyecto ya iniciado.",
        ],
      },
      {
        title: "5. Plazos y colaboración",
        body: [
          "Los tiempos de entrega estimados dependen de que recibas y devuelvas a tiempo lo que se necesita de tu parte: textos, fotos, accesos, logotipos y aprobaciones.",
          "Si el material o las aprobaciones se retrasan, el calendario se recorre en la misma proporción. Un proyecto sin respuesta del cliente durante más de 60 días se considera pausado, y retomarlo puede implicar reprogramarlo.",
        ],
      },
      {
        title: "6. Revisiones",
        body: [
          "Cada proyecto incluye rondas de revisión sobre el alcance acordado. Los cambios que modifican la estructura, añaden páginas o incorporan funcionalidad nueva se cotizan aparte y se te informan antes de ejecutarlos.",
        ],
      },
      {
        title: "7. Propiedad del trabajo",
        list: [
          "Al liquidar el proyecto, el diseño, los textos y el código desarrollados específicamente para ti son tuyos.",
          "Los componentes, plantillas, utilidades y metodología propios de ProCode Dev siguen siendo de ProCode Dev y pueden reutilizarse en otros proyectos.",
          "El software de terceros, las fuentes tipográficas, las imágenes con licencia y los servicios externos se rigen por sus propias licencias.",
          "El dominio, el hosting y las cuentas de servicios externos quedan a tu nombre o bajo tu control siempre que así lo acordemos.",
        ],
      },
      {
        title: "8. Contenido que tú proporcionas",
        body: [
          "Eres responsable de tener los derechos sobre los textos, imágenes, logotipos, credenciales y datos que me entregues para publicar, y de que la información publicada sobre tus servicios y credenciales profesionales sea veraz y esté vigente.",
        ],
      },
      {
        title: "9. Planes mensuales y cancelación",
        list: [
          "Los planes Soporte Web y Crecimiento+ no tienen contrato de permanencia.",
          "El plan Web + Marketing + SEO tiene un compromiso mínimo de 3 meses desde su inicio, por el tiempo que necesitan los anuncios y el SEO para dar resultados medibles. Cumplido ese plazo, se cancela de un mes a otro como los demás.",
          "Puedes subir, bajar o cancelar tu plan de un mes a otro —cumplido, en su caso, el mínimo de 3 meses— avisándome antes de la siguiente fecha de cobro.",
          "La cancelación surte efecto al terminar el periodo ya pagado; no se reembolsan periodos en curso.",
          "Al cancelar, el sitio sigue siendo tuyo. Lo que se detiene es el mantenimiento, el soporte, las publicaciones y el reporte mensual.",
        ],
      },
      {
        title: "10. Garantías y responsabilidad",
        body: [
          "Trabajo para que tu presencia digital funcione mejor y genere más oportunidades, pero no puedo garantizar posiciones específicas en Google, un número determinado de clientes ni un resultado comercial concreto: eso depende también de tu mercado, tu oferta, tu competencia y tu propia operación.",
          "La responsabilidad de ProCode Dev por cualquier reclamación relacionada con un servicio se limita al importe efectivamente pagado por ese servicio. No respondo por pérdidas indirectas, lucro cesante ni por fallos de proveedores externos (hosting, dominios, plataformas de terceros o interrupciones de servicios ajenos).",
        ],
      },
      {
        title: "11. Uso del sitio",
        body: [
          "El contenido de este sitio —textos, diseño, código e imágenes propias— pertenece a ProCode Dev. Puedes consultarlo y compartirlo citando la fuente, pero no reproducirlo de forma sistemática ni usarlo con fines comerciales sin autorización por escrito.",
        ],
      },
      {
        title: "12. Cambios en estos términos",
        body: [
          "Estos términos pueden actualizarse. La versión aplicable a un proyecto es la vigente al momento de contratarlo, y la publicada en esta página es siempre la más reciente.",
        ],
      },
    ],
    contactTitle: "¿Algo que no queda claro?",
    contactBody:
      "Prefiero resolverlo antes de empezar que discutirlo después. Escríbeme a info@procodedev.com.",
  },
};

const en: LegalDict = {
  privacy: {
    meta: {
      title: "Privacy Policy | ProCode Dev",
      description:
        "How ProCode Dev collects, uses and protects the data of people who visit the site or request information, and how you can exercise your rights over it.",
    },
    eyebrow: "// legal",
    title: "Privacy policy",
    subtitle:
      "What data I collect, what I use it for and what you can ask me to do with it. Written to be understood, not skimmed past.",
    updatedLabel: "Last updated",
    updated: UPDATED_EN,
    sections: [
      {
        title: "1. Who is responsible for your data",
        body: [
          "ProCode Dev is a business operated by Cristian Posada, providing web development, digital presence and automation services remotely to clients in the United States and Mexico.",
          "For anything related to this policy or to your personal data, the contact channel is info@procodedev.com.",
        ],
      },
      {
        title: "2. What data I collect",
        body: [
          "I only collect data you choose to give me or that is generated automatically while browsing the site:",
        ],
        list: [
          "Data you submit through the contact form: name, email address, WhatsApp or phone number, project type and the message you write.",
          "Data you share when you message me on WhatsApp or by email, including any file or information you choose to attach.",
          "Data you provide when booking a call through Calendly: name, email and the time slot selected.",
          "Technical browsing data collected by analytics tools: pages visited, time on site, device, browser, approximate country or region and the site you arrived from.",
        ],
      },
      {
        title: "3. What I use it for",
        list: [
          "Answering your message, handling your request and following up commercially.",
          "Preparing proposals, quotes and project documents you ask for.",
          "Delivering and administering contracted services, including support and maintenance.",
          "Understanding how the site is used and improving its content, speed and structure.",
          "Meeting tax, accounting and legal obligations arising from a commercial relationship.",
        ],
        body: [
          "I do not sell, rent or trade your personal data with third parties for advertising purposes.",
        ],
      },
      {
        title: "4. Who it is shared with",
        body: [
          "To make the site work I use service providers that may process some of this data on my behalf. Each has its own privacy policy:",
        ],
        list: [
          "Web3Forms — processes the contact form submission and delivers it to me by email.",
          "Google Analytics 4 — site usage analytics, in aggregate.",
          "Meta Pixel — performance measurement for Facebook and Instagram campaigns.",
          "Calendly — scheduling for the 15-minute call.",
          "WhatsApp (Meta) — the conversation channel when you choose to message me there.",
          "Hosting and email provider — hosting of the site and the professional email account.",
        ],
      },
      {
        title: "5. Cookies and measurement technologies",
        body: [
          "The site uses cookies and similar technologies through Google Analytics 4 and Meta Pixel to measure traffic and campaign performance. They are not used to identify you personally.",
          "You can block or delete cookies from your browser settings, and turn off ad personalization from your Google or Meta account settings. If you block them, the site still works normally.",
        ],
      },
      {
        title: "6. How long I keep the information",
        body: [
          "I keep contact data while a commercial relationship or an active interest in the service exists, and afterwards for as long as needed to meet tax and legal obligations.",
          "If you ask me to delete your data and no legal obligation prevents it, I delete it.",
        ],
      },
      {
        title: "7. Your rights",
        body: ["You can ask me at any time to:"],
        list: [
          "Tell you what data of yours I hold and what I'm using it for.",
          "Correct any data that is incomplete or out of date.",
          "Delete your data from my records.",
          "Stop using it for commercial contact.",
        ],
      },
      {
        title: "8. Security",
        body: [
          "The site is served over an encrypted connection (HTTPS) and data you submit through the form travels encrypted. I apply reasonable measures to protect information, although no internet-connected system can guarantee absolute security.",
          "For tax or financial documents on a project, I use the channels we agree on in writing. I recommend you do not send Social Security numbers, IDs or bank statements through the public form on this site.",
        ],
      },
      {
        title: "9. Minors",
        body: [
          "ProCode Dev's services are aimed at businesses and professionals. The site is not directed at anyone under 18 and I do not knowingly collect data from minors.",
        ],
      },
      {
        title: "10. Changes to this policy",
        body: [
          "If the way I handle data or the tools I use change, I will update this policy and the date shown above. The version in force is always the one published on this page.",
        ],
      },
    ],
    contactTitle: "Questions about your data?",
    contactBody:
      "Email me at info@procodedev.com and I'll answer directly. No forms, no departments in between.",
  },

  terms: {
    meta: {
      title: "Terms of Service | ProCode Dev",
      description:
        "Terms for using the site and contracting ProCode Dev services: scope, pricing, payments, timelines, ownership of work, monthly plans and cancellation.",
    },
    eyebrow: "// legal",
    title: "Terms of service",
    subtitle:
      "The rules of the site and of working with me: what each service includes, how payment works, who owns the work and how to cancel.",
    updatedLabel: "Last updated",
    updated: UPDATED_EN,
    sections: [
      {
        title: "1. Acceptance",
        body: [
          "By browsing this site or contracting a service from ProCode Dev — a business operated by Cristian Posada — you accept these terms. If you disagree with any of them, the best move is to raise it before we start.",
        ],
      },
      {
        title: "2. What services are offered",
        body: [
          "ProCode Dev builds digital growth systems: websites, landing pages, Google presence, intake forms, automation, follow-up and measurement, primarily for small business owners in the United States and Mexico.",
          "The specific scope of each project is defined in writing before work begins. Anything not described there is out of scope, and if it comes up during the project I give you the price before executing it — never halfway through the work.",
        ],
      },
      {
        title: "3. What ProCode Dev does not do",
        body: [
          "ProCode Dev is a digital services provider. It does not provide tax, accounting, legal or financial services, does not prepare returns, does not represent anyone before the IRS and does not advise on specific tax situations.",
          "Content on the site and blog is informational and general in nature. It does not replace the opinion of a licensed professional and does not constitute tax, legal or financial advice for your situation.",
        ],
      },
      {
        title: "4. Pricing, payments and currency",
        list: [
          "Published prices are in U.S. dollars (USD) and correspond to the scope described in each plan.",
          "The Mexican peso equivalent is indicative, calculated at a fixed exchange rate published on the pricing page, and does not replace invoicing, which is done in USD.",
          "Projects are paid with a deposit at kickoff and the balance according to the schedule we agree in writing.",
          "Monthly plans are billed in advance, month to month.",
          "The Digital Presence Diagnosis is a one-time payment and is credited in full toward the project price if you decide to move forward with me.",
          "Prices may be updated at any time; the applicable price is the one in force when you contract, and it does not change during a project already underway.",
        ],
      },
      {
        title: "5. Timelines and collaboration",
        body: [
          "Estimated delivery times depend on receiving what's needed from your side on time: copy, photos, access credentials, logos and approvals.",
          "If material or approvals are delayed, the schedule shifts by the same amount. A project with no client response for more than 60 days is considered paused, and resuming it may require rescheduling.",
        ],
      },
      {
        title: "6. Revisions",
        body: [
          "Each project includes revision rounds within the agreed scope. Changes that alter the structure, add pages or introduce new functionality are quoted separately and communicated to you before being executed.",
        ],
      },
      {
        title: "7. Ownership of the work",
        list: [
          "Once the project is paid in full, the design, copy and code developed specifically for you are yours.",
          "ProCode Dev's own components, templates, utilities and methodology remain ProCode Dev's and may be reused on other projects.",
          "Third-party software, typefaces, licensed images and external services are governed by their own licenses.",
          "The domain, hosting and external service accounts are registered in your name or under your control whenever we agree to it.",
        ],
      },
      {
        title: "8. Content you provide",
        body: [
          "You are responsible for holding the rights to the copy, images, logos, credentials and data you give me to publish, and for ensuring that published information about your services and professional credentials is accurate and current.",
        ],
      },
      {
        title: "9. Monthly plans and cancellation",
        list: [
          "The Web Support and Growth+ plans have no lock-in contract.",
          "The Web + Marketing + SEO plan has a 3-month minimum commitment from its start date, for the time ads and SEO need to produce measurable results. After that, it cancels month to month like the rest.",
          "You can upgrade, downgrade or cancel your plan month to month —once the 3-month minimum is met, where it applies— by letting me know before the next billing date.",
          "Cancellation takes effect at the end of the period already paid; periods in progress are not refunded.",
          "On cancellation, the site remains yours. What stops is maintenance, support, posting and the monthly report.",
        ],
      },
      {
        title: "10. Warranties and liability",
        body: [
          "I work to make your digital presence perform better and generate more opportunities, but I cannot guarantee specific Google rankings, a set number of clients or a particular commercial outcome: that also depends on your market, your offer, your competition and your own operation.",
          "ProCode Dev's liability for any claim related to a service is limited to the amount actually paid for that service. I am not liable for indirect losses, lost profits, or failures of external providers (hosting, domains, third-party platforms or outages of services outside my control).",
        ],
      },
      {
        title: "11. Use of the site",
        body: [
          "The content of this site — copy, design, code and original images — belongs to ProCode Dev. You may read and share it with attribution, but not reproduce it systematically or use it commercially without written permission.",
        ],
      },
      {
        title: "12. Changes to these terms",
        body: [
          "These terms may be updated. The version applicable to a project is the one in force when it was contracted, and the one published on this page is always the most recent.",
        ],
      },
    ],
    contactTitle: "Anything unclear?",
    contactBody:
      "I'd rather sort it out before we start than argue about it later. Email me at info@procodedev.com.",
  },
};

export const legal: Record<Lang, LegalDict> = { es, en };
