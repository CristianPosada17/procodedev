/*
  ─────────────────────────────────────────────────────────────────────────
  AUDITORÍA DIGITAL — producto de entrada de pago (septiembre de 2026)
  ─────────────────────────────────────────────────────────────────────────

  Sustituye al «Diagnóstico de Presencia Digital» de $149 que vivía solo
  dentro de /precios. Tres cosas cambiaron respecto a aquel:

  1. **Precio $250 USD y NO se acredita.** El diagnóstico se descontaba
     entero del proyecto, así que en la práctica era un paso de venta
     disfrazado de producto. La auditoría se paga y se entrega, contrate o
     no después: eso es lo que la hace un servicio de verdad y lo que
     permite recomendar sin conflicto de interés («aquí no necesitas
     rehacer nada»).
  2. **Tiene landing propia** (/servicios/auditoria/), porque «auditoría
     web» y «auditoría SEO» son búsquedas con intención de compra y un
     bloque dentro de /precios no compite por ellas ni sirve de destino de
     anuncios.
  3. **NO es una tercera línea de servicio.** ProCode sigue vendiendo dos
     —desarrollo web y marketing digital—; la auditoría es la puerta de
     entrada de pago que lleva a una de las dos, o a ninguna. Por eso NO
     está en `SERVICE_KEYS` y no aparece en el home ni en `ServiceLines`.

  Y no sustituye a la Revisión Express, que sigue siendo gratis: aquella
  son tres minutos de vídeo sobre lo que se ve desde fuera; esta son cinco
  días con accesos, datos y un plan priorizado por escrito. El sitio tiene
  que decir esa diferencia en voz alta o la gratuita se come a la de pago.
*/

import type { PageContextCopy } from "./ui";

export interface AuditArea {
  icon: string;
  title: string;
  /** Qué se revisa. Concreto: nada de «analizamos tu presencia». */
  description: string;
}

export interface AuditContent {
  meta: {
    title: string;
    description: string;
    keywords: string;
    heroTitleA: string;
    heroHighlight: string;
    heroSubtitle: string;
  };
  badge: string;
  navLabel: string;
  navHint: string;
  price: string;
  currency: string;
  priceLabel: string;
  priceNote: string;
  timelineLabel: string;
  timeline: string;
  ctaPrimary: string;
  /** El contraste con la Revisión Express gratis, arriba del pliegue. */
  versus: {
    eyebrow: string;
    title: string;
    subtitle: string;
    freeTitle: string;
    freeItems: readonly string[];
    freeCta: string;
    paidTitle: string;
    paidItems: readonly string[];
    paidCta: string;
  };
  areas: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly AuditArea[];
  };
  deliverables: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly { icon: string; title: string; description: string }[];
    note: string;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: readonly { name: string; description: string }[];
    accessTitle: string;
    accessNote: string;
    access: readonly string[];
  };
  fit: {
    eyebrow: string;
    title: string;
    yesTitle: string;
    yes: readonly string[];
    noTitle: string;
    no: readonly string[];
  };
  faq: {
    eyebrow: string;
    titleA: string;
    titleHighlight: string;
    subtitle: string;
    items: readonly { question: string; answer: string }[];
  };
  form: {
    eyebrow: string;
    ctaLabel: string;
    titleA: string;
    titleHighlight: string;
    subtitle: string;
    needLabel: string;
    needOptions: readonly string[];
  };
  /** Banda reutilizable en el hub y en las dos páginas de servicio. */
  callout: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  cross: {
    eyebrow: string;
    title: string;
    body: string;
    ctaWeb: string;
    ctaMarketing: string;
  };
  /** Bloque de contexto al pie: el texto largo que salió del hero. */
  pageContext: PageContextCopy;
}

// ═══════════════════════════════════════════════════════════════════════
// ESPAÑOL
// ═══════════════════════════════════════════════════════════════════════

const auditEs: AuditContent = {
  pageContext: {
    title: "Auditoría de presencia digital para negocios",
    paragraphs: [
      "Una auditoría web completa: reviso a fondo tu sitio, su estructura, su diseño, tu SEO, tu presencia en Google y todo tu sistema de captación, con acceso a tus datos reales. $250 USD y cinco días hábiles, contrates después o no.",
      "Incluye auditoría SEO y revisión técnica de página web — velocidad, indexación, encabezados, enlaces rotos —, más auditoría de conversión sobre los formularios y los botones, y auditoría de Perfil de Empresa en Google, que en un negocio local suele ser donde está el hallazgo más grande.",
      "Recibes un informe de mejoras para página web priorizado por impacto, un vídeo recorriendo lo que encontré y una llamada para decidir por dónde empezar. Es un análisis de sitio web para negocios que puedes ejecutar con tu equipo actual: la auditoría de página web se entrega para que sirva sola.",
      "Si lo que buscas es una auditoría de marketing digital más amplia, entra en el mismo trabajo: la auditoría de captación de clientes recorre el camino completo, desde la búsqueda hasta el mensaje que nadie contestó.",
    ],
  },
  meta: {
    title: "Auditoría Digital para Negocios | ProCode Dev",
    description:
      "Auditoría web, de SEO y de captación: nueve áreas revisadas con tus datos reales, informe priorizado, vídeo y llamada. $250 USD en 5 días hábiles.",
    keywords:
      "auditoría web, auditoría SEO, auditoría de página web, auditoría de presencia digital, auditoría de marketing digital, análisis de sitio web para negocios, revisión técnica de página web, auditoría de conversión, auditoría de Perfil de Empresa en Google, auditoría de captación de clientes, informe de mejoras para página web",
    heroTitleA: "Auditoría digital: qué está fallando",
    heroHighlight: "y en qué orden arreglarlo",
    heroSubtitle: "Qué está frenando tu sitio.",
  },
  badge: "Producto de entrada",
  navLabel: "Auditoría Digital",
  navHint: "Qué está fallando y en qué orden arreglarlo.",
  price: "250",
  currency: "USD",
  priceLabel: "precio",
  priceNote: "USD · pago único · no se acredita a un proyecto",
  timelineLabel: "entrega",
  timeline: "5 días hábiles",
  ctaPrimary: "Solicitar mi auditoría",

  versus: {
    eyebrow: "// antes de pagar nada",
    title: "Hay una versión gratis, y para mucha gente es suficiente",
    subtitle:
      "Decirlo primero es lo honesto: la Revisión Express no cuesta nada y resuelve la duda de la mayoría. La auditoría es otra cosa, y solo vale la pena si necesitas la profundidad que da tener tus datos delante.",
    freeTitle: "Revisión Express · gratis",
    freeItems: [
      "Lo que se ve desde fuera, sin accesos a nada tuyo",
      "Vídeo de 3 minutos con lo que encontré al buscar tu servicio",
      "Llamada de 15 minutos para comentarlo",
      "Responde: «¿tengo un problema evidente?»",
      "Te la entrego dentro de las 24 h de que agendes",
    ],
    freeCta: "Agendar la Revisión Express",
    paidTitle: "Auditoría de página web y de captación · $250 USD",
    paidItems: [
      "Nueve áreas revisadas con acceso a tus datos reales",
      "Informe escrito con hallazgos priorizados por impacto y esfuerzo",
      "Vídeo recorriendo el informe, para que lo entiendas sin leerlo",
      "Llamada de 30 a 45 minutos para decidir por dónde empezar",
      "Responde: «¿qué hago primero, y por qué eso y no lo otro?»",
    ],
    paidCta: "Solicitar mi auditoría",
  },

  areas: {
    eyebrow: "// qué se audita",
    title: "Nueve áreas, no solo la página web",
    subtitle:
      "Una auditoría web que solo mira el sitio deja fuera la mitad del problema: casi nunca se pierden clientes por una sola causa. Por eso esto es un análisis de sitio web para negocios y, a la vez, una auditoría de marketing digital: las nueve áreas se revisan juntas y de cada una sale una lista de hallazgos con su prioridad.",
    items: [
      {
        icon: "zap",
        title: "Rendimiento y salud técnica",
        description:
          "La revisión técnica de página web: velocidad real en móvil y escritorio, peso de las imágenes, scripts que bloquean, errores de servidor, certificado de seguridad y qué tan estable está el sitio cuando entra tráfico.",
      },
      {
        icon: "layout",
        title: "Estructura y arquitectura",
        description:
          "Cómo están organizadas tus URLs, si hay una página por cada servicio que vendes, cómo se enlazan entre ellas, qué páginas compiten entre sí y qué se quedó huérfano sin enlaces.",
      },
      {
        icon: "target",
        title: "Diseño y conversión",
        description:
          "La auditoría de conversión propiamente dicha: qué entiende un visitante en los primeros cinco segundos, dónde están las llamadas a la acción, cuántos pasos hay hasta contactarte, qué pide el formulario y cómo se ve todo en un teléfono.",
      },
      {
        icon: "search",
        title: "SEO técnico",
        description:
          "La auditoría SEO en su parte técnica: indexación, metadatos duplicados o ausentes, canónicas, hreflang si tienes dos idiomas, datos estructurados, sitemap y robots. Lo que impide que Google entienda el sitio antes de posicionarlo.",
      },
      {
        icon: "file-text",
        title: "Contenido y palabras clave",
        description:
          "Por qué frases apareces hoy, cuáles deberías estar peleando, qué páginas no tienen texto suficiente para competir y qué busca tu cliente cuando ya quiere comprar y no te encuentra.",
      },
      {
        icon: "map-pin",
        title: "Presencia local",
        description:
          "La auditoría de Perfil de Empresa en Google: categorías, servicios, zona, fotos, horarios y publicaciones. Reseñas: cuántas, de cuándo y si se responden. Y en qué posición sales en el mapa frente a los de tu ciudad.",
      },
      {
        icon: "megaphone",
        title: "Adquisición y anuncios",
        description:
          "De dónde llega hoy tu tráfico, qué campañas tienes corriendo, a qué página aterrizan, si el anuncio y la página prometen lo mismo, y cuánto te está costando cada contacto si hay datos para calcularlo.",
      },
      {
        icon: "workflow",
        title: "Captación y seguimiento",
        description:
          "La auditoría de captación de clientes: qué le pasa a un prospecto desde que te escribe, si hay respuesta automática, cuánto tardas en contestar, si queda registrado en algún lado y cuántos se pierden por el camino sin que nadie se entere.",
      },
      {
        icon: "bar-chart",
        title: "Medición y datos",
        description:
          "Si Analytics y el píxel están puestos, si los eventos que registran son los que importan, si el consentimiento está bien configurado y —lo más común— si los números que estás mirando son fiables.",
      },
    ],
  },

  deliverables: {
    eyebrow: "// qué recibes",
    title: "Tres entregables, y los tres son tuyos",
    subtitle:
      "No es una llamada donde te cuento cosas y tomas notas. Queda por escrito, con capturas y con datos, para que puedas ejecutarlo tú, con tu equipo o con el proveedor que prefieras.",
    items: [
      {
        icon: "file-text",
        title: "Informe en PDF, priorizado",
        description:
          "Un informe de mejoras para página web y para todo lo que la rodea, con los hallazgos de las nueve áreas ordenados por impacto y esfuerzo: qué arreglar esta semana, qué este mes y qué puede esperar. Cada uno con la captura o el dato que lo respalda, no con una afirmación suelta.",
      },
      {
        icon: "message-circle",
        title: "Vídeo recorriendo el informe",
        description:
          "Te grabo la pantalla enseñándote lo que encontré, en tu propio sitio y en tus propias cuentas. Es la parte que hace que un informe técnico se entienda sin ser técnico, y la puedes reenviar a quien decida contigo.",
      },
      {
        icon: "phone",
        title: "Llamada de 30 a 45 minutos",
        description:
          "Después de que lo hayas leído, no antes. Para resolver dudas, discutir prioridades y decidir por dónde empiezas — aunque decidas empezar sin mí.",
      },
    ],
    note: "El informe es tuyo y no lleva candado: puedes ejecutarlo con tu equipo, con otro proveedor o pedirme presupuesto para hacerlo yo. Las tres opciones son legítimas y el precio de la auditoría es el mismo en las tres.",
  },

  process: {
    eyebrow: "// cómo funciona",
    title: "Cinco días hábiles, tres fases",
    subtitle:
      "El plazo empieza a contar cuando tengo los accesos, no cuando pagas. Si algún acceso no existe todavía, te digo cómo crearlo o audito esa área desde fuera y lo dejo anotado en el informe.",
    steps: [
      {
        name: "Día 1 · Contexto y accesos",
        description:
          "Un cuestionario corto —qué vendes, a quién, en qué zona y cómo llegan hoy tus clientes— y los accesos de solo lectura que hagan falta. Sin esto la auditoría sería adivinar.",
      },
      {
        name: "Días 2 a 4 · Auditoría",
        description:
          "Las nueve áreas, una por una, con tus datos delante y comparándote con los negocios que salen antes que tú en tu ciudad. Aquí es donde se va el trabajo.",
      },
      {
        name: "Día 5 · Entrega",
        description:
          "Recibes el informe y el vídeo, los lees con calma, y la llamada de 30 a 45 minutos se agenda cuando tú digas. No hay presentación en vivo obligatoria.",
      },
    ],
    accessTitle: "Accesos que pido (solo lectura)",
    accessNote:
      "Ninguno es obligatorio: lo que falte se audita desde fuera y queda señalado como tal en el informe. Y todos se revocan desde tu cuenta cuando quieras.",
    access: [
      "Google Analytics y Search Console",
      "Perfil de Empresa en Google",
      "Panel de tu sitio, si lo tiene",
      "Cuentas de Google Ads y Meta, si tienes campañas",
    ],
  },

  fit: {
    eyebrow: "// antes de pagarla",
    title: "Cuándo vale la pena y cuándo no",
    yesTitle: "Vale la pena si",
    yes: [
      "Ya tienes página y llega gente, pero no se traduce en llamadas ni en mensajes.",
      "Vas a invertir en anuncios y quieres saber si tu sitio aguanta ese tráfico antes de pagarlo.",
      "Estás pensando en rehacer el sitio y quieres saber qué conservar y qué tirar.",
      "Heredaste el sitio de otro proveedor y no sabes qué te dejó puesto ni qué te falta.",
      "Alguien te está ganando en Google en tu ciudad y quieres entender exactamente por qué.",
    ],
    noTitle: "No la compres si",
    no: [
      "No tienes página todavía: no hay nada que auditar, ahí lo que toca es el desarrollo web.",
      "Ya sabes qué está mal y solo necesitas que alguien lo ejecute. Pídeme presupuesto directo y ahórrate los $250.",
      "Buscas un informe que respalde una decisión que ya tomaste. Te voy a decir lo que encuentre, no lo que quieras leer.",
      "Esperas que la auditoría por sí sola traiga clientes. Es un mapa: alguien tiene que caminar la ruta después.",
    ],
  },

  faq: {
    eyebrow: "// dudas de la auditoría",
    titleA: "Lo que preguntan antes de",
    titleHighlight: "contratarla",
    subtitle:
      "Precio, alcance, accesos y qué pasa después, respondido sin letra chica.",
    items: [
      {
        question: "¿En qué se diferencia de la Revisión Express, que es gratis?",
        answer:
          "En la profundidad y en los datos. La Revisión Express la hago desde fuera, sin acceso a nada tuyo: busco tu servicio en tu ciudad, veo qué aparece y te lo grabo en tres minutos. Sirve para detectar lo evidente. La auditoría son cinco días con tus accesos —Analytics, Search Console, tu Perfil de Empresa, tus campañas— revisando nueve áreas y entregándote un plan priorizado por escrito. Si nunca hemos hablado, empieza por la gratis: si con eso te basta, te lo diré.",
      },
      {
        question: "¿Los $250 se acreditan si después contrato un proyecto?",
        answer:
          "No. La auditoría es un servicio en sí mismo y se paga aparte del proyecto que venga después, si es que viene alguno. Lo hago así a propósito: si el precio del proyecto absorbiera la auditoría, mi incentivo sería encontrar razones para venderte un proyecto. Cobrándola aparte puedo decirte «tu sitio está bien, no lo toques» sin perder nada, que es justo la respuesta que más veces necesita oírse.",
      },
      {
        question: "¿Qué accesos necesitas y qué hago si no los tengo?",
        answer:
          "De solo lectura: Google Analytics, Search Console, tu Perfil de Empresa en Google, el panel de tu sitio si lo tiene y las cuentas de anuncios si tienes campañas. Ninguno es obligatorio. Lo que no exista o no puedas darme lo audito desde fuera y lo señalo así en el informe, y si algo falta porque nunca se instaló, eso ya es un hallazgo por sí solo. Los accesos los revocas desde tu cuenta cuando quieras.",
      },
      {
        question: "¿Sirve si mi sitio está en WordPress, Wix o Squarespace?",
        answer:
          "Sí, y son los casos más frecuentes. La auditoría mira qué hace el sitio, no con qué está hecho: velocidad, estructura, SEO, conversión y medición se revisan igual en cualquier plataforma. Y la recomendación no es automáticamente «rehazlo conmigo»: muchas veces lo que hay se arregla donde está, y así queda escrito en el informe.",
      },
      {
        question: "¿Puedo ejecutar el plan yo o con otro proveedor?",
        answer:
          "Sí, y no hay ningún problema. El informe está escrito para que se pueda ejecutar sin mí: cada hallazgo dice qué está pasando, por qué importa y qué habría que hacer. Si prefieres que lo haga yo, te paso presupuesto por lo que decidas atacar; si prefieres tu equipo o tu agencia actual, el documento es igual de tuyo.",
      },
      {
        question: "¿Y si no encuentras nada grave?",
        answer:
          "Te lo digo, y el informe lo dice también. En la práctica siempre salen cosas —lo raro es un negocio con la medición bien puesta, el Perfil de Empresa completo y una web rápida a la vez—, pero si tu caso es ese, la auditoría termina siendo la confirmación de que el problema no está en lo digital, y eso también vale para dejar de gastar donde no hace falta.",
      },
      {
        question: "¿Cuánto tardas y cómo se paga?",
        answer:
          "Cinco días hábiles desde que tengo los accesos. El pago es único, de $250 USD por adelantado, y se factura en dólares aunque estés en México. Si tu caso es mucho más grande de lo normal —varias sucursales, varios sitios o varias cuentas de anuncios— te lo digo antes de cobrar nada y te paso el número real.",
      },
    ],
  },

  form: {
    eyebrow: "// solicitar auditoría",
    ctaLabel: "Solicitar mi auditoría",
    titleA: "Dime cuál es tu sitio y te digo",
    titleHighlight: "si te conviene auditarlo",
    subtitle:
      "Tres datos y nada más. Antes de cobrarte nada le doy una mirada rápida a tu negocio y te contesto por WhatsApp en menos de 24 horas: si con la Revisión Express gratis te basta, te lo digo y nos ahorramos los $250.",
    needLabel: "Qué te trae aquí",
    needOptions: [
      "Llega gente a mi sitio pero nadie contacta",
      "Voy a invertir en anuncios y quiero saber si mi web aguanta",
      "Estoy pensando en rehacer mi página",
      "Heredé el sitio y no sé qué me dejaron puesto",
      "Alguien me está ganando en Google y no sé por qué",
    ],
  },

  callout: {
    eyebrow: "// ¿no sabes cuál necesitas?",
    title: "Si no tienes claro qué está fallando, no adivines",
    body: "La Auditoría Digital revisa nueve áreas de tu negocio en línea —sitio, estructura, diseño, SEO, presencia local, anuncios, captación, seguimiento y medición— y te entrega por escrito qué arreglar y en qué orden. $250 USD, cinco días hábiles, y el plan es tuyo aunque después no contrates nada.",
    cta: "Ver la Auditoría Digital",
  },

  cross: {
    eyebrow: "// después de la auditoría",
    title: "¿Y si ya sabes qué hay que arreglar?",
    body: "Entonces la auditoría te sobra: pídeme presupuesto directo. Si lo que falla es el sitio, eso es desarrollo web; si el sitio está bien y lo que falta es que lleguen, eso es marketing digital.",
    ctaWeb: "Ver desarrollo web",
    ctaMarketing: "Ver marketing digital",
  },
};

// ═══════════════════════════════════════════════════════════════════════
// ENGLISH — "small business" stays, same rule as services.ts.
// ═══════════════════════════════════════════════════════════════════════

const auditEn: AuditContent = {
  pageContext: {
    title: "Small business website audit",
    paragraphs: [
      "A full website audit: I go through your site, its structure, its design, your SEO, your Google presence and your whole lead system, with access to your real data. $250 USD and five business days, whether you hire me afterwards or not.",
      "It includes an SEO audit and a technical website review — speed, indexing, headings, broken links — plus a conversion audit of your forms and buttons, and a Google Business Profile audit, which for most local businesses is where the biggest finding hides.",
      "You get a website improvement report prioritized by impact, a video walking through what I found, and a call to work out where to start. It is a website analysis for small business owners that your current team can execute: the audit is built to stand on its own.",
      "If what you need is a broader digital marketing audit, that is the same job: the lead generation audit follows the whole path, from the search to the message nobody answered.",
    ],
  },
  meta: {
    title: "Small Business Digital Audit | ProCode Dev",
    description:
      "Website, SEO and lead audit: nine areas reviewed against your real data, a prioritized report, a video and a call. $250 USD in 5 business days.",
    keywords:
      "website audit, SEO audit, small business website audit, digital marketing audit, website analysis for small business, technical website review, conversion audit, Google Business Profile audit, lead generation audit, website improvement report",
    heroTitleA: "A digital audit: what is broken",
    heroHighlight: "and what to fix first",
    heroSubtitle: "What is holding your site back.",
  },
  badge: "Paid entry point",
  navLabel: "Digital Audit",
  navHint: "What is broken and what to fix first.",
  price: "250",
  currency: "USD",
  priceLabel: "price",
  priceNote: "USD · one-time · not credited toward a project",
  timelineLabel: "delivery",
  timeline: "5 business days",
  ctaPrimary: "Request my audit",

  versus: {
    eyebrow: "// before you pay anything",
    title: "There is a free version, and for many people it is enough",
    subtitle:
      "Saying it first is the honest thing to do: the Express Review costs nothing and answers most people's question. The audit is a different animal, and it is only worth it if you need the depth that comes from having your data in front of me.",
    freeTitle: "Express Review · free",
    freeItems: [
      "What is visible from the outside, with no access to anything of yours",
      "A 3-minute video of what I found searching for your service",
      "A 15-minute call to talk it through",
      "It answers: «do I have an obvious problem?»",
      "Delivered within 24 hours of you booking",
    ],
    freeCta: "Book the Express Review",
    paidTitle: "Website and lead audit · $250 USD",
    paidItems: [
      "Nine areas reviewed with access to your real data",
      "A written report, findings ranked by impact and effort",
      "A video walking the report, so you get it without reading it",
      "A 30-45 minute call to decide where to start",
      "It answers: «what do I do first, and why that and not the rest?»",
    ],
    paidCta: "Request my audit",
  },

  areas: {
    eyebrow: "// what gets audited",
    title: "Nine areas, not just the website",
    subtitle:
      "A website audit that only looks at the site misses half the problem: clients are almost never lost for a single reason. So this is a website analysis for small business and a digital marketing audit at once: the nine areas get reviewed together, and each one produces its own list of findings with a priority attached.",
    items: [
      {
        icon: "zap",
        title: "Performance and technical health",
        description:
          "The technical website review: real speed on mobile and desktop, image weight, blocking scripts, server errors, security certificate, and how stable the site stays once traffic actually arrives.",
      },
      {
        icon: "layout",
        title: "Structure and architecture",
        description:
          "How your URLs are organized, whether there is a page for each service you sell, how they link to each other, which pages compete against each other, and what got orphaned with no links at all.",
      },
      {
        icon: "target",
        title: "Design and conversion",
        description:
          "The conversion audit proper: what a visitor understands in the first five seconds, where the calls to action sit, how many steps it takes to contact you, what the form demands, and how all of it behaves on a phone.",
      },
      {
        icon: "search",
        title: "Technical SEO",
        description:
          "The technical half of the SEO audit: indexing, missing or duplicate metadata, canonicals, hreflang if you run two languages, structured data, sitemap and robots. The things that stop Google understanding the site before it can rank it.",
      },
      {
        icon: "file-text",
        title: "Content and keywords",
        description:
          "Which phrases you show up for today, which ones you should be fighting for, which pages lack the substance to compete, and what your client types when they are ready to buy and do not find you.",
      },
      {
        icon: "map-pin",
        title: "Local presence",
        description:
          "The Google Business Profile audit: categories, services, service area, photos, hours and posts. Reviews: how many, how recent, and whether anyone answers them. Plus where you land on the map against others in your city.",
      },
      {
        icon: "megaphone",
        title: "Acquisition and ads",
        description:
          "Where your traffic comes from today, which campaigns are running, which page they land on, whether the ad and the page promise the same thing, and what each contact is costing you if there is data to work it out.",
      },
      {
        icon: "workflow",
        title: "Intake and follow-up",
        description:
          "The lead generation audit: what happens to a lead from the moment they write, whether anything replies automatically, how long you take, whether it gets recorded anywhere, and how many slip away without anyone noticing.",
      },
      {
        icon: "bar-chart",
        title: "Measurement and data",
        description:
          "Whether Analytics and the pixel are installed, whether the events they record are the ones that matter, whether consent is set up properly, and — most common of all — whether the numbers you are looking at can be trusted.",
      },
    ],
  },

  deliverables: {
    eyebrow: "// what you get",
    title: "Three deliverables, and all three are yours",
    subtitle:
      "This is not a call where I talk and you take notes. It is written down, with screenshots and with data, so you can act on it yourself, with your team, or with whichever provider you prefer.",
    items: [
      {
        icon: "file-text",
        title: "A prioritized PDF report",
        description:
          "A website improvement report covering the site and everything around it, with findings from all nine areas ordered by impact and effort: what to fix this week, what this month, and what can wait. Each one backed by the screenshot or the number behind it, not by a loose assertion.",
      },
      {
        icon: "message-circle",
        title: "A video walking the report",
        description:
          "A screen recording showing you what I found, on your own site and in your own accounts. It is the part that makes a technical report land without you being technical, and you can forward it to whoever decides with you.",
      },
      {
        icon: "phone",
        title: "A 30-45 minute call",
        description:
          "After you have read it, not before. To answer questions, argue about priorities and settle where you start — even if you start without me.",
      },
    ],
    note: "The report is yours and it is not locked to anything: run it with your team, with another provider, or ask me to quote the work. All three are legitimate, and the audit costs the same in all three.",
  },

  process: {
    eyebrow: "// how it works",
    title: "Five business days, three phases",
    subtitle:
      "The clock starts when I have the access, not when you pay. If some access does not exist yet, I tell you how to create it or audit that area from the outside and flag it as such in the report.",
    steps: [
      {
        name: "Day 1 · Context and access",
        description:
          "A short questionnaire — what you sell, to whom, in which area, and how clients reach you today — plus whatever read-only access is available. Without this the audit would be guesswork.",
      },
      {
        name: "Days 2 to 4 · The audit",
        description:
          "The nine areas, one at a time, with your data in front of me and against the businesses ranking above you in your city. This is where the work goes.",
      },
      {
        name: "Day 5 · Delivery",
        description:
          "You get the report and the video, you read them at your own pace, and the 30-45 minute call gets booked whenever you say. No mandatory live presentation.",
      },
    ],
    accessTitle: "Access I ask for (read-only)",
    accessNote:
      "None of it is mandatory: whatever is missing gets audited from the outside and flagged that way in the report. And you can revoke all of it from your own account whenever you like.",
    access: [
      "Google Analytics and Search Console",
      "Google Business Profile",
      "Your site's admin panel, if it has one",
      "Google Ads and Meta accounts, if you run campaigns",
    ],
  },

  fit: {
    eyebrow: "// before you buy it",
    title: "When it is worth it and when it is not",
    yesTitle: "It is worth it if",
    yes: [
      "You have a site and people arrive, but it never turns into calls or messages.",
      "You are about to spend on ads and want to know whether your site can hold that traffic first.",
      "You are considering a rebuild and want to know what to keep and what to throw away.",
      "You inherited the site from another provider and have no idea what they left in place.",
      "Someone is beating you on Google in your city and you want to know exactly why.",
    ],
    noTitle: "Do not buy it if",
    no: [
      "You do not have a site yet: there is nothing to audit, and what you need is web development.",
      "You already know what is wrong and just need someone to do it. Ask me for a quote and save the $250.",
      "You want a report that backs a decision you already made. I will tell you what I find, not what you want to read.",
      "You expect the audit itself to bring clients. It is a map: someone still has to walk the route.",
    ],
  },

  faq: {
    eyebrow: "// audit questions",
    titleA: "What people ask before",
    titleHighlight: "buying it",
    subtitle: "Price, scope, access and what happens next, with no small print.",
    items: [
      {
        question: "How is this different from the free Express Review?",
        answer:
          "Depth and data. The Express Review is done from the outside, with no access to anything of yours: I search for your service in your city, look at what shows up, and record three minutes about it. That catches the obvious. The audit is five days with your access — Analytics, Search Console, your Business Profile, your campaigns — covering nine areas and ending in a written, prioritized plan. If we have never spoken, start with the free one: if that is all you need, I will say so.",
      },
      {
        question: "Is the $250 credited if I hire you for a project afterwards?",
        answer:
          "No. The audit is a service in its own right and it is paid separately from whatever project may follow, if any does. That is deliberate: if the project price absorbed the audit, my incentive would be to find reasons to sell you a project. Charging for it separately means I can tell you «your site is fine, leave it alone» and lose nothing by it — which happens to be the answer people most often need to hear.",
      },
      {
        question: "What access do you need, and what if I do not have it?",
        answer:
          "Read-only: Google Analytics, Search Console, your Google Business Profile, your site's admin panel if it has one, and ad accounts if you run campaigns. None of it is mandatory. Anything that does not exist or that you cannot share gets audited from the outside and flagged that way in the report — and if something is missing because it was never installed, that is a finding in itself. You can revoke access from your own account at any time.",
      },
      {
        question: "Does it work if my site is on WordPress, Wix or Squarespace?",
        answer:
          "Yes, and those are the most common cases. The audit looks at what the site does, not what it was built with: speed, structure, SEO, conversion and measurement get reviewed the same way on any platform. And the recommendation is not automatically «rebuild it with me»: plenty of the time what you have can be fixed where it stands, and that is what the report will say.",
      },
      {
        question: "Can I act on the plan myself or with another provider?",
        answer:
          "Yes, and that is fine by me. The report is written so it can be executed without me: every finding says what is happening, why it matters and what would need to be done. If you would rather I did it, I quote whatever you decide to tackle; if you would rather use your team or your current agency, the document is just as much yours.",
      },
      {
        question: "What if you do not find anything serious?",
        answer:
          "Then I say so, and the report says so. In practice something always turns up — a business with measurement wired correctly, a complete Business Profile and a fast site all at once is the rare one — but if that is your case, the audit ends up confirming that the problem is not in the digital side, and that is worth knowing too if it stops you spending where you do not need to.",
      },
      {
        question: "How long does it take and how do I pay?",
        answer:
          "Five business days from when I have the access. It is a single $250 USD payment up front, billed in dollars even if you are in Mexico. If your case is far larger than usual — several locations, several sites or several ad accounts — I tell you before charging anything and give you the real number.",
      },
    ],
  },

  form: {
    eyebrow: "// request an audit",
    ctaLabel: "Request my audit",
    titleA: "Tell me what your site is and I'll tell you",
    titleHighlight: "whether it is worth auditing",
    subtitle:
      "Three fields, nothing else. Before charging you anything I take a quick look at your business and reply on WhatsApp within 24 hours: if the free Express Review is all you need, I'll say so and we both save the $250.",
    needLabel: "What brings you here",
    needOptions: [
      "People reach my site but nobody contacts me",
      "I am about to spend on ads and want to know if my site holds up",
      "I am thinking about rebuilding my site",
      "I inherited the site and do not know what was left in place",
      "Someone is beating me on Google and I do not know why",
    ],
  },

  callout: {
    eyebrow: "// not sure which one you need?",
    title: "If you cannot tell what is broken, do not guess",
    body: "The Digital Audit reviews nine areas of your business online — site, structure, design, SEO, local presence, ads, intake, follow-up and measurement — and hands you, in writing, what to fix and in what order. $250 USD, five business days, and the plan is yours even if you never hire me.",
    cta: "See the Digital Audit",
  },

  cross: {
    eyebrow: "// after the audit",
    title: "And if you already know what needs fixing?",
    body: "Then the audit is wasted money: just ask me for a quote. If the site is what is failing, that is web development; if the site is fine and what is missing is people arriving, that is digital marketing.",
    ctaWeb: "See web development",
    ctaMarketing: "See digital marketing",
  },
};

// ═══════════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════════

export const audit: Record<"es" | "en", AuditContent> = {
  es: auditEs,
  en: auditEn,
};
