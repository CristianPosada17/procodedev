/*
  ─────────────────────────────────────────────────────────────────────────
  AUDITORÍA ESTRATÉGICA INTEGRAL — producto de entrada de pago
  (septiembre de 2026, ampliada el 15 de septiembre)
  ─────────────────────────────────────────────────────────────────────────

  Sustituyó al «Diagnóstico de Presencia Digital» de $149 que vivía solo
  dentro de /precios, y el 15 de septiembre pasó de «Auditoría Digital» de
  nueve áreas técnicas a **Auditoría Estratégica Integral**: doce áreas que
  empiezan por el negocio, no por el sitio.

  Las cuatro reglas que sostienen el producto:

  1. **Empieza por el negocio.** Qué vendes, quién debería comprarlo, cómo
     llegan hoy tus clientes y qué resultado comercial quieres. Sin eso, una
     auditoría solo puede producir «tienes 17 errores de SEO», que es
     exactamente lo que esta NO entrega.
  2. **Cada hallazgo con evidencia y clasificado** por impacto, esfuerzo,
     urgencia y dependencia. Sin la clasificación no hay priorización, y sin
     priorización el informe no se ejecuta.
  3. **Termina en estrategia y roadmap 30/60/90**, no en una lista de
     recomendaciones sueltas. Cada acción conectada a un objetivo de negocio.
  4. **Sin precio publicado (15 sep 2026).** El alcance real cambia mucho
     de un negocio a otro —una sede o cinco, un sitio o tres, con campañas o
     sin ellas— y quien llega buscando solo la auditoría no vale lo mismo que
     quien llega buscando un proyecto. Se cotiza tras la reunión inicial.
     Cuando el cliente llega por desarrollo web, SEO o marketing, la auditoría
     es la primera fase de ESE trabajo y va dentro del proyecto — pero eso se
     explica en la FAQ, no en una leyenda junto al precio. **No volver a
     publicar cifras aquí ni párrafos del tipo «los $250 no se acreditan» o
     «si llegas por X no se contrata aparte»: Cristian los quitó a propósito.**

  **NO es una tercera línea de servicio.** ProCode sigue vendiendo desarrollo
  web y marketing digital (más el SEO como servicio propio); la auditoría es
  la puerta de entrada que lleva a uno de ellos, o a ninguno. Por eso NO está
  en `SERVICE_KEYS` y no aparece en el home ni en `ServiceLines`.

  Y no sustituye a la Revisión Express, que sigue siendo gratis: aquella son
  tres minutos de vídeo sobre lo que se ve desde fuera; esta son cinco días
  con accesos, datos y una estrategia priorizada por escrito. El sitio tiene
  que decir esa diferencia en voz alta o la gratuita se come a la de pago.
*/


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
  /** La auditoría no lleva cifra publicada: este texto sustituye a `$price`
      en el hero y en /precios. Ver la nota 4 de la cabecera. */
  priceQuote: string;
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
  /** Mockup del informe, bajo «qué recibes». Lo renderiza `ServiceShot`. */
  shot: {
    imageBase: string;
    imageAlt: string;
    caption: string;
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
}

// ═══════════════════════════════════════════════════════════════════════
// ESPAÑOL
// ═══════════════════════════════════════════════════════════════════════

const auditEs: AuditContent = {
  meta: {
    title: "Auditoría SEO, Web y Marketing Digital para Negocios | ProCode",
    description:
      "Auditoría web, SEO y marketing digital con Keyword Research, competencia, conversión y roadmap 30/60/90. Descubre qué corregir primero y por qué.",
    keywords:
      "auditoría web, auditoría SEO, auditoría de marketing digital, auditoría estratégica, análisis de página web, auditoría de conversión, keyword research, arquitectura SEO, análisis de competencia, canibalización de keywords, auditoría de Perfil de Empresa en Google, auditoría de Google Ads y Meta Ads, auditoría de analítica y atribución, roadmap de marketing digital",
    heroTitleA: "Auditoría SEO y de marketing digital:",
    heroHighlight: "descubre qué frena tu crecimiento",
    heroSubtitle: "Primero el negocio, después el sitio.",
  },
  badge: "Auditoría Estratégica Integral",
  navLabel: "Auditoría Estratégica",
  navHint: "Qué frena tu crecimiento y en qué orden resolverlo.",
  price: "",
  currency: "",
  priceLabel: "inversión",
  priceQuote: "A cotizar",
  priceNote: "según el alcance de tu negocio",
  timelineLabel: "entrega",
  timeline: "5 días hábiles",
  ctaPrimary: "Solicitar mi auditoría",

  versus: {
    eyebrow: "// antes de pagar nada",
    title: "Hay una versión gratis, y para mucha gente es suficiente",
    subtitle:
      "Decirlo primero es lo honesto: la Revisión Express no cuesta nada y resuelve la duda de la mayoría. La Auditoría Estratégica Integral es otra cosa, y solo vale la pena si necesitas la profundidad que da tener tus datos delante y un plan que se pueda ejecutar.",
    freeTitle: "Revisión Express · gratis",
    freeItems: [
      "Lo que se ve desde fuera, sin accesos a nada tuyo",
      "Vídeo de 3 minutos con lo que encontré al buscar tu servicio",
      "Llamada de 15 minutos para comentarlo",
      "Responde: «¿tengo un problema evidente?»",
      "Te la entrego dentro de las 24 h de que agendes",
    ],
    freeCta: "Agendar la Revisión Express",
    paidTitle: "Auditoría Estratégica Integral",
    paidItems: [
      "Empieza por tu negocio: qué vendes, a quién y qué resultado quieres",
      "Doce áreas revisadas con acceso a tus datos reales",
      "Cada hallazgo con evidencia y clasificado por impacto, esfuerzo, urgencia y dependencia",
      "Estrategia priorizada y roadmap de 30, 60 y 90 días",
      "Responde: «¿qué hago primero, por qué eso y qué resultado debería dar?»",
    ],
    paidCta: "Solicitar mi auditoría",
  },

  areas: {
    eyebrow: "// qué se audita",
    title: "Doce áreas, y la primera no es tu página web",
    subtitle:
      "Una auditoría web no debería terminar en «tienes 17 errores de SEO». Primero entendemos qué vende tu negocio, quién debería comprarlo, cómo llegan hoy tus clientes y qué resultado comercial quieres conseguir. A partir de ahí se audita el sistema completo: la web, el SEO, el contenido, la publicidad, la captación y la medición, que es donde de verdad se pierde el dinero.",
    items: [
      {
        icon: "briefcase",
        title: "Negocio y objetivo comercial",
        description:
          "Qué vendes y con qué margen, quién debería comprarlo, en qué zona, cómo llegan hoy tus clientes y qué resultado quieres en los próximos noventa días. Todo lo demás se juzga contra esto: un hallazgo que no mueve tu objetivo no es prioritario, por muy rojo que salga en una herramienta.",
      },
      {
        icon: "zap",
        title: "Rendimiento y salud técnica",
        description:
          "Velocidad real en móvil y escritorio con Core Web Vitals, peso de las imágenes, scripts que bloquean el render, errores de servidor, certificado y qué tan estable está el sitio cuando entra tráfico de campaña.",
      },
      {
        icon: "route",
        title: "Arquitectura web",
        description:
          "Cómo están organizadas tus URLs, si hay una página por cada cosa que vendes, cómo se enlazan entre ellas, cuántos clics hay desde el inicio hasta lo que te da dinero y qué páginas quedaron huérfanas sin un solo enlace.",
      },
      {
        icon: "target",
        title: "Diseño y conversión",
        description:
          "La auditoría de conversión: qué entiende un visitante en los primeros cinco segundos, dónde están las llamadas a la acción, cuántos pasos hay hasta contactarte, qué pide el formulario, qué fricción hay en móvil y en qué punto se cae la gente.",
      },
      {
        icon: "search",
        title: "SEO técnico",
        description:
          "Indexación y cobertura, metadatos duplicados o ausentes, canónicas, redirecciones, hreflang si tienes dos idiomas, datos estructurados, sitemap y robots. Lo que impide que Google entienda el sitio antes siquiera de posicionarlo.",
      },
      {
        icon: "database",
        title: "Keyword research e intención de búsqueda",
        description:
          "Qué escribe tu cliente cuando ya quiere comprar, con volumen, intención y dificultad, y el mapa de qué frase debería pelear cada página. Sin esto, el contenido que escribas después es una apuesta.",
      },
      {
        icon: "file-text",
        title: "Contenido y canibalización",
        description:
          "Qué páginas tienen texto suficiente para competir y cuáles no, qué temas faltan, y —lo que más daño hace en silencio— qué páginas tuyas están compitiendo entre sí por la misma frase y se están restando fuerza.",
      },
      {
        icon: "map-pin",
        title: "Presencia local",
        description:
          "Perfil de Empresa en Google: categorías, servicios, zona, fotos, horarios y publicaciones. Reseñas: cuántas, de cuándo y si se responden. Y en qué posición sales en el mapa frente a los de tu ciudad, por cada búsqueda que importa.",
      },
      {
        icon: "users",
        title: "Competencia",
        description:
          "Quiénes te están ganando de verdad en tu ciudad y por qué: qué páginas tienen que tú no, por qué frases entran, cómo es su ficha de Google, qué anuncian y qué les falta. De aquí salen las oportunidades más baratas de ganar.",
      },
      {
        icon: "megaphone",
        title: "Adquisición: Google Ads y Meta Ads",
        description:
          "Qué campañas tienes corriendo, cómo están estructuradas, a qué página aterrizan, si el anuncio y la página prometen lo mismo, qué se está gastando en búsquedas que nunca iban a comprar y cuánto te cuesta hoy cada contacto.",
      },
      {
        icon: "clipboard-check",
        title: "Captación y respuesta al prospecto",
        description:
          "Qué le pasa a un prospecto desde que te escribe: por dónde entra, qué datos le pides, si el aviso te llega y a dónde, cuánto tardas en contestar y cuántos se pierden por el camino sin que nadie se entere. Se audita tu proceso, tal como está hoy.",
      },
      {
        icon: "bar-chart",
        title: "Analytics, Search Console y atribución",
        description:
          "Si Google Analytics y el píxel están puestos, si los eventos que registran son los que importan, si el consentimiento está bien configurado, qué dice Search Console que nadie está mirando y —lo más común— si los números que estás usando para decidir son fiables.",
      },
    ],
  },

  deliverables: {
    eyebrow: "// qué recibes",
    title: "Una estrategia priorizada, no una lista de recomendaciones",
    subtitle:
      "Cada hallazgo queda documentado con evidencia —la captura, el dato o la consulta que lo respalda— y clasificado por impacto, esfuerzo, urgencia y dependencia. Esa clasificación es la que convierte una lista de problemas en un orden de trabajo que se puede ejecutar.",
    items: [
      {
        icon: "file-text",
        title: "Informe con cada hallazgo clasificado",
        description:
          "Las doce áreas, con la evidencia de cada hallazgo y sus cuatro etiquetas: impacto en tu objetivo, esfuerzo de ejecución, urgencia real y de qué depende para poder hacerse. Nada de afirmaciones sueltas: si digo que algo está mal, está la prueba al lado.",
      },
      {
        icon: "route",
        title: "Roadmap de 30, 60 y 90 días",
        description:
          "Qué se ataca este mes, qué el siguiente y qué el tercero, con cada acción conectada a un objetivo de negocio y al resultado que debería producir. Es lo que hace la diferencia entre un documento que se lee y uno que se ejecuta.",
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

  shot: {
    imageBase: "/images/auditoria-informe-es",
    imageAlt:
      "Informe de la Auditoría Estratégica Integral: hallazgos clasificados por impacto, esfuerzo, urgencia y dependencia, y roadmap de 30, 60 y 90 días",
    caption:
      "Así se ve el informe: cada hallazgo con su evidencia y sus cuatro etiquetas, y el roadmap al final. Los datos del ejemplo son ilustrativos.",
  },

  process: {
    eyebrow: "// cómo funciona",
    title: "Cinco días hábiles, tres fases",
    subtitle:
      "El plazo empieza a contar cuando tengo el contexto y los accesos, no cuando pagas. Si algún acceso no existe todavía, te digo cómo crearlo o audito esa área desde fuera y lo dejo anotado en el informe.",
    steps: [
      {
        name: "Fase 1 · Negocio y accesos",
        description:
          "Qué vendes, quién debería comprarlo, en qué zona, cómo llegan hoy tus clientes y qué resultado comercial quieres. Más los accesos de solo lectura que hagan falta. Sin esta fase la auditoría sería una lista de errores sin dueño.",
      },
      {
        name: "Fase 2 · Auditoría del sistema completo",
        description:
          "Las doce áreas, una por una, con tus datos delante, con el keyword research hecho y comparándote con quienes salen antes que tú en tu ciudad. Cada hallazgo se documenta con su evidencia. Aquí es donde se va el trabajo.",
      },
      {
        name: "Fase 3 · Estrategia y roadmap",
        description:
          "Los hallazgos se clasifican por impacto, esfuerzo, urgencia y dependencia, y de ahí sale la estrategia priorizada y el roadmap 30/60/90. Recibes el informe y el vídeo, los lees con calma, y la llamada se agenda cuando tú digas.",
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
      "Tienes varias iniciativas a medias y necesitas saber cuál mueve el negocio primero.",
    ],
    noTitle: "No la compres si",
    no: [
      "No tienes página todavía: no hay nada que auditar, ahí lo que toca es el desarrollo web.",
      "Ya vas a contratar desarrollo web, SEO o marketing digital: en ese caso la auditoría es el primer paso del proyecto y va dentro de su cotización, no se paga aparte.",
      "Ya sabes qué está mal y solo necesitas que alguien lo ejecute. Pídeme presupuesto directo.",
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
        question: "Si contrato desarrollo web, SEO o marketing, ¿tengo que pagar la auditoría aparte?",
        answer:
          "No se contrata aparte. Para trabajar bien en cualquiera de esos servicios hay que auditar primero: no se puede hacer SEO sin saber qué busca tu cliente y qué tienes hoy, ni montar campañas sobre una página que no sabemos si convierte. Así que la auditoría es la primera fase de ese proyecto y su alcance va dentro de la cotización.",
      },
      {
        question: "¿En qué se diferencia de la Revisión Express, que es gratis?",
        answer:
          "En la profundidad y en los datos. La Revisión Express la hago desde fuera, sin acceso a nada tuyo: busco tu servicio en tu ciudad, veo qué aparece y te lo grabo en tres minutos. Sirve para detectar lo evidente. La Auditoría Estratégica Integral son cinco días con tus accesos —Analytics, Search Console, tu Perfil de Empresa, tus campañas— revisando doce áreas, haciendo el keyword research y el análisis de competencia, y entregándote una estrategia priorizada con roadmap 30/60/90. Si nunca hemos hablado, empieza por la gratis: si con eso te basta, te lo diré.",
      },
      {
        question: "¿Por qué no publicas el precio de la auditoría?",
        answer:
          "Porque el trabajo no es el mismo en todos los casos. No cuesta igual auditar un negocio con un sitio de cinco páginas y sin campañas que uno con tres sedes, dos idiomas y cuentas de anuncios corriendo desde hace años. Publicar una sola cifra significaría que alguien está pagando de más. Por eso el orden es: una reunión inicial para conocer el negocio y el alcance, y de ahí sale el número antes de que te comprometas a nada.",
      },
      {
        question: "¿Qué significa que los hallazgos vienen «clasificados»?",
        answer:
          "Que cada uno lleva cuatro etiquetas: impacto —cuánto mueve el objetivo comercial que definimos en la primera fase—, esfuerzo —qué cuesta ejecutarlo—, urgencia —si puede esperar o está costando dinero hoy— y dependencia —qué tiene que estar hecho antes para que este tenga sentido. Esa última es la que casi nadie pone y la que más orden da: no sirve de nada escribir contenido nuevo si la arquitectura está rota debajo.",
      },
      {
        question: "¿Qué accesos necesitas y qué hago si no los tengo?",
        answer:
          "De solo lectura: Google Analytics, Search Console, tu Perfil de Empresa en Google, el panel de tu sitio si lo tiene y las cuentas de anuncios si tienes campañas. Ninguno es obligatorio. Lo que no exista o no puedas darme lo audito desde fuera y lo señalo así en el informe, y si algo falta porque nunca se instaló, eso ya es un hallazgo por sí solo. Los accesos los revocas desde tu cuenta cuando quieras.",
      },
      {
        question: "¿Sirve si mi sitio está en WordPress, Wix o Squarespace?",
        answer:
          "Sí, y son los casos más frecuentes. La auditoría mira qué hace el sitio y qué hace tu negocio, no con qué está hecha la página: rendimiento, arquitectura, SEO, contenido, conversión y medición se revisan igual en cualquier plataforma. Y la recomendación no es automáticamente «rehazlo conmigo»: muchas veces lo que hay se arregla donde está, y así queda escrito en el informe.",
      },
      {
        question: "¿Puedo ejecutar el roadmap yo o con otro proveedor?",
        answer:
          "Sí, y no hay ningún problema. Está escrito para que se pueda ejecutar sin mí: cada hallazgo dice qué está pasando, por qué importa, qué habría que hacer y en qué orden. Si prefieres que lo haga yo, te paso presupuesto por lo que decidas atacar; si prefieres tu equipo o tu agencia actual, el documento es igual de tuyo.",
      },
      {
        question: "¿Y si no encuentras nada grave?",
        answer:
          "Te lo digo, y el informe lo dice también. En la práctica siempre salen cosas —lo raro es un negocio con la medición bien puesta, el Perfil de Empresa completo, sin canibalización y con una web rápida a la vez—, pero si tu caso es ese, la auditoría termina siendo la confirmación de que el problema no está en lo digital, y eso también vale para dejar de gastar donde no hace falta.",
      },
      {
        question: "¿Cuánto tardas y cómo se paga?",
        answer:
          "Cinco días hábiles desde que tengo el contexto y los accesos. El pago es único y por adelantado, y se factura en dólares aunque estés en México. El número sale de la reunión inicial, cuando ya sé el alcance: cuántas sedes, cuántos sitios, cuántos idiomas y si hay campañas corriendo.",
      },
    ],
  },

  form: {
    eyebrow: "// solicitar auditoría",
    ctaLabel: "Solicitar mi auditoría",
    titleA: "Dime cuál es tu sitio y te digo",
    titleHighlight: "si te conviene auditarlo",
    subtitle:
      "Tres datos y nada más. Antes de cobrarte nada le doy una mirada rápida a tu negocio y te contesto por WhatsApp en menos de 24 horas: si con la Revisión Express gratis te basta, te lo digo y nos lo ahorramos los dos.",
    needLabel: "Qué te trae aquí",
    needOptions: [
      "Llega gente a mi sitio pero nadie contacta",
      "Voy a invertir en anuncios y quiero saber si mi web aguanta",
      "Estoy pensando en rehacer mi página",
      "Heredé el sitio y no sé qué me dejaron puesto",
      "Alguien me está ganando en Google y no sé por qué",
      "Quiero contratar un servicio y sé que hay que auditar primero",
    ],
  },

  callout: {
    eyebrow: "// ¿no sabes cuál necesitas?",
    title: "Si no tienes claro qué está frenando tu crecimiento, no adivines",
    body: "La Auditoría Estratégica Integral empieza por tu negocio y tu objetivo comercial, y de ahí revisa doce áreas: rendimiento, arquitectura, conversión, SEO técnico, keyword research, contenido y canibalización, presencia local, competencia, Google y Meta Ads, captación y medición. Cada hallazgo con evidencia y clasificado, y al final una estrategia priorizada con roadmap 30/60/90. Se cotiza tras la reunión inicial, y va incluida como primera fase si contratas un servicio.",
    cta: "Ver la Auditoría Estratégica",
  },

  cross: {
    eyebrow: "// después de la auditoría",
    title: "¿Y si ya sabes qué hay que arreglar?",
    body: "Entonces la auditoría suelta te sobra: pídeme presupuesto directo y la parte de análisis que haga falta entra dentro del proyecto. Si lo que falla es el sitio, eso es desarrollo web; si el sitio está bien y lo que falta es que lleguen, eso es SEO o marketing digital.",
    ctaWeb: "Ver desarrollo web",
    ctaMarketing: "Ver marketing digital",
  },
};

// ═══════════════════════════════════════════════════════════════════════
// ENGLISH — "small business" stays, same rule as services.ts.
// ═══════════════════════════════════════════════════════════════════════

const auditEn: AuditContent = {
  meta: {
    title: "SEO, Website and Marketing Audit for Small Business | ProCode",
    description:
      "Website, SEO and digital marketing audit with keyword research, competitor analysis, conversion and a 30/60/90 roadmap. Know what to fix first, and why.",
    keywords:
      "website audit, SEO audit, digital marketing audit, strategic audit, website analysis for small business, conversion audit, keyword research, SEO architecture, competitor analysis, keyword cannibalization, Google Business Profile audit, Google Ads and Meta Ads audit, analytics and attribution audit, digital marketing roadmap",
    heroTitleA: "SEO and digital marketing audit:",
    heroHighlight: "find what is holding you back",
    heroSubtitle: "The business first, the site second.",
  },
  badge: "Strategic Business Audit",
  navLabel: "Strategic Audit",
  navHint: "What is holding you back, and in what order to fix it.",
  price: "",
  currency: "",
  priceLabel: "investment",
  priceQuote: "Quoted",
  priceNote: "based on the scope of your business",
  timelineLabel: "delivery",
  timeline: "5 business days",
  ctaPrimary: "Request my audit",

  versus: {
    eyebrow: "// before paying anything",
    title: "There is a free version, and for many people it is enough",
    subtitle:
      "Saying it first is the honest thing to do: the Express Review costs nothing and answers most people's question. The Strategic Business Audit is something else, and it is only worth it if you need the depth that comes from having your own data in front of you and a plan you can actually execute.",
    freeTitle: "Express Review · free",
    freeItems: [
      "What is visible from the outside, with no access to anything of yours",
      "A 3-minute video of what I found searching for your service",
      "A 15-minute call to talk it through",
      "Answers: \"do I have an obvious problem?\"",
      "Delivered within 24 h of booking",
    ],
    freeCta: "Book the Express Review",
    paidTitle: "Strategic Business Audit",
    paidItems: [
      "Starts with your business: what you sell, to whom, and what result you want",
      "Twelve areas reviewed against your real data",
      "Every finding documented with evidence and classified by impact, effort, urgency and dependency",
      "A prioritized strategy and a 30, 60 and 90-day roadmap",
      "Answers: \"what do I do first, why that, and what should it produce?\"",
    ],
    paidCta: "Request my audit",
  },

  areas: {
    eyebrow: "// what gets audited",
    title: "Twelve areas, and the first one is not your website",
    subtitle:
      "A website audit should not end at \"you have 17 SEO errors\". First we understand what your business sells, who should be buying it, how your clients reach you today and what commercial result you want. From there we audit the whole system: the site, the SEO, the content, the advertising, the intake and the measurement — which is where the money actually leaks.",
    items: [
      {
        icon: "briefcase",
        title: "Business and commercial objective",
        description:
          "What you sell and at what margin, who should be buying it, in which area, how clients reach you today and what result you want over the next ninety days. Everything else is judged against this: a finding that does not move your objective is not a priority, however red a tool paints it.",
      },
      {
        icon: "zap",
        title: "Performance and technical health",
        description:
          "Real speed on mobile and desktop with Core Web Vitals, image weight, render-blocking scripts, server errors, certificate, and how stable the site is when campaign traffic arrives.",
      },
      {
        icon: "route",
        title: "Website architecture",
        description:
          "How your URLs are organized, whether there is a page for each thing you sell, how they link to each other, how many clicks it takes from the home page to what makes you money, and which pages are orphaned without a single link.",
      },
      {
        icon: "target",
        title: "Design and conversion",
        description:
          "The conversion audit: what a visitor understands in the first five seconds, where the calls to action are, how many steps it takes to contact you, what the form asks for, what the friction is on mobile and at which point people drop off.",
      },
      {
        icon: "search",
        title: "Technical SEO",
        description:
          "Indexing and coverage, duplicate or missing metadata, canonicals, redirects, hreflang if you run two languages, structured data, sitemap and robots. Everything stopping Google from understanding the site before it can even rank it.",
      },
      {
        icon: "database",
        title: "Keyword research and search intent",
        description:
          "What your client types when they are ready to buy, with volume, intent and difficulty, and the map of which phrase each page should be fighting for. Without this, whatever content you write next is a bet.",
      },
      {
        icon: "file-text",
        title: "Content and cannibalization",
        description:
          "Which pages have enough substance to compete and which do not, which topics are missing, and — the one that does the most damage quietly — which of your own pages are competing against each other for the same phrase and cancelling each other out.",
      },
      {
        icon: "map-pin",
        title: "Local presence",
        description:
          "Google Business Profile: categories, services, service area, photos, hours and posts. Reviews: how many, how recent and whether they get answered. And where you land on the map against the businesses in your city, search by search.",
      },
      {
        icon: "users",
        title: "Competitors",
        description:
          "Who is actually beating you in your city and why: which pages they have that you do not, which phrases bring them traffic, what their Google profile looks like, what they advertise and what they are missing. This is where the cheapest wins come from.",
      },
      {
        icon: "megaphone",
        title: "Acquisition: Google Ads and Meta Ads",
        description:
          "Which campaigns are running, how they are structured, which page they land on, whether the ad and the page promise the same thing, what is being spent on searches that were never going to buy, and what each contact costs you today.",
      },
      {
        icon: "clipboard-check",
        title: "Intake and lead response",
        description:
          "What happens to a lead from the moment they write: where they come in, what you ask them for, whether the alert reaches you and where, how long you take to reply and how many slip away without anyone noticing. Your process gets audited exactly as it stands today.",
      },
      {
        icon: "bar-chart",
        title: "Analytics, Search Console and attribution",
        description:
          "Whether Google Analytics and the pixel are in place, whether the events they record are the ones that matter, whether consent is configured properly, what Search Console is saying that nobody is reading, and — most common of all — whether the numbers you are making decisions with can be trusted.",
      },
    ],
  },

  deliverables: {
    eyebrow: "// what you get",
    title: "A prioritized strategy, not a list of recommendations",
    subtitle:
      "Every finding is documented with evidence — the screenshot, the number or the query that backs it — and classified by impact, effort, urgency and dependency. That classification is what turns a list of problems into an order of work you can actually execute.",
    items: [
      {
        icon: "file-text",
        title: "A report with every finding classified",
        description:
          "All twelve areas, with the evidence behind each finding and its four labels: impact on your objective, effort to execute, real urgency, and what it depends on before it can be done. No loose claims: if I say something is wrong, the proof sits next to it.",
      },
      {
        icon: "route",
        title: "A 30, 60 and 90-day roadmap",
        description:
          "What gets tackled this month, what next month and what the third, with every action tied to a business objective and to the result it should produce. This is the difference between a document that gets read and one that gets executed.",
      },
      {
        icon: "message-circle",
        title: "A video walking through the report",
        description:
          "I record my screen showing you what I found, on your own site and in your own accounts. It is the part that makes a technical report understandable without being technical, and you can forward it to whoever decides with you.",
      },
      {
        icon: "phone",
        title: "A 30 to 45-minute call",
        description:
          "After you have read it, not before. To answer questions, argue about priorities and decide where you start — even if you decide to start without me.",
      },
    ],
    note: "The report is yours and it is not locked: you can execute it with your team, with another provider, or ask me to quote it. All three are legitimate and the audit costs the same in all three.",
  },

  shot: {
    imageBase: "/images/auditoria-informe-en",
    imageAlt:
      "Strategic Business Audit report: findings classified by impact, effort, urgency and dependency, and a 30, 60 and 90-day roadmap",
    caption:
      "This is what the report looks like: every finding with its evidence and its four labels, and the roadmap at the end. Sample data, shown for illustration.",
  },

  process: {
    eyebrow: "// how it works",
    title: "Five business days, three phases",
    subtitle:
      "The clock starts when I have the context and the access, not when you pay. If some access does not exist yet, I tell you how to create it or I audit that area from the outside and note it as such in the report.",
    steps: [
      {
        name: "Phase 1 · Business and access",
        description:
          "What you sell, who should be buying it, in which area, how clients reach you today and what commercial result you want. Plus whatever read-only access is needed. Without this phase the audit would be a list of errors with no owner.",
      },
      {
        name: "Phase 2 · Auditing the whole system",
        description:
          "The twelve areas, one by one, with your data in front of me, with the keyword research done and comparing you against whoever ranks above you in your city. Every finding documented with its evidence. This is where the work goes.",
      },
      {
        name: "Phase 3 · Strategy and roadmap",
        description:
          "Findings get classified by impact, effort, urgency and dependency, and out of that comes the prioritized strategy and the 30/60/90 roadmap. You get the report and the video, read them at your own pace, and the call is booked when you say.",
      },
    ],
    accessTitle: "Access I ask for (read-only)",
    accessNote:
      "None of it is mandatory: whatever is missing gets audited from the outside and flagged as such in the report. And you can revoke all of it from your own account whenever you want.",
    access: [
      "Google Analytics and Search Console",
      "Google Business Profile",
      "Your site's dashboard, if it has one",
      "Google Ads and Meta accounts, if you run campaigns",
    ],
  },

  fit: {
    eyebrow: "// before you pay for it",
    title: "When it is worth it and when it is not",
    yesTitle: "It is worth it if",
    yes: [
      "You already have a site and people arrive, but it does not turn into calls or messages.",
      "You are about to spend on ads and want to know whether your site can hold that traffic first.",
      "You are considering rebuilding the site and want to know what to keep and what to throw out.",
      "You inherited the site from another provider and have no idea what they left running.",
      "Someone is beating you in Google in your city and you want to understand exactly why.",
      "You have several half-finished initiatives and need to know which one moves the business first.",
    ],
    noTitle: "Do not buy it if",
    no: [
      "You do not have a site yet: there is nothing to audit, that is web development.",
      "You are already hiring web development, SEO or digital marketing: the audit is the first phase of that project and sits inside its quote, not billed separately.",
      "You already know what is wrong and just need someone to execute. Ask me for a quote directly.",
      "You want a report that backs a decision you already made. I will tell you what I find, not what you want to read.",
      "You expect the audit on its own to bring clients. It is a map: somebody still has to walk the route.",
    ],
  },

  faq: {
    eyebrow: "// audit questions",
    titleA: "What people ask before",
    titleHighlight: "hiring it",
    subtitle:
      "Price, scope, access and what happens next, answered without fine print.",
    items: [
      {
        question: "If I hire web development, SEO or marketing, do I pay for the audit separately?",
        answer:
          "It is not contracted separately. Doing any of those services properly means auditing first: you cannot do SEO without knowing what your client searches and what you have today, and you cannot run campaigns into a page nobody has checked converts. So the audit is the first phase of that project and its scope sits inside the quote.",
      },
      {
        question: "How is it different from the Express Review, which is free?",
        answer:
          "In depth and in data. I do the Express Review from the outside, with no access to anything of yours: I search for your service in your city, see what comes up and record it in three minutes. It catches the obvious. The Strategic Business Audit is five days with your access — Analytics, Search Console, your Business Profile, your campaigns — covering twelve areas, doing the keyword research and the competitor analysis, and handing you a prioritized strategy with a 30/60/90 roadmap. If we have never spoken, start with the free one: if that is enough, I will tell you.",
      },
      {
        question: "Why don't you publish a price for the audit?",
        answer:
          "Because the work is not the same in every case. Auditing a business with a five-page site and no campaigns is not the same job as one with three locations, two languages and ad accounts that have been running for years. Publishing a single number would mean somebody is overpaying. That is why the order is: a first meeting to understand the business and the scope, and the number comes out of that before you commit to anything.",
      },
      {
        question: "What does it mean that findings come \"classified\"?",
        answer:
          "That each one carries four labels: impact — how much it moves the commercial objective we set in phase one — effort, urgency — whether it can wait or is costing money today — and dependency: what has to be done before this one makes any sense. That last one is the label almost nobody adds and the one that creates the most order: writing new content is pointless if the architecture underneath is broken.",
      },
      {
        question: "What access do you need and what if I do not have it?",
        answer:
          "Read-only: Google Analytics, Search Console, your Google Business Profile, your site's dashboard if it has one, and the ad accounts if you run campaigns. None of it is mandatory. Whatever does not exist or you cannot hand over, I audit from the outside and flag as such in the report — and if something is missing because it was never installed, that is a finding in itself. You revoke the access from your own account whenever you want.",
      },
      {
        question: "Does it work if my site is on WordPress, Wix or Squarespace?",
        answer:
          "Yes, and those are the most common cases. The audit looks at what the site does and what your business does, not at what the page was built with: performance, architecture, SEO, content, conversion and measurement get reviewed the same way on any platform. And the recommendation is not automatically \"rebuild it with me\": plenty of the time what you have can be fixed where it stands, and that is what the report will say.",
      },
      {
        question: "Can I execute the roadmap myself or with another provider?",
        answer:
          "Yes, and that is no problem at all. It is written so it can be executed without me: every finding says what is happening, why it matters, what should be done and in what order. If you would rather I did it, I quote whatever you decide to tackle; if you would rather use your team or your current agency, the document is just as much yours.",
      },
      {
        question: "What if you do not find anything serious?",
        answer:
          "I tell you, and the report says so too. In practice something always comes up — a business with measurement set up properly, a complete Business Profile, no cannibalization and a fast site all at once is rare — but if that is your case, the audit ends up confirming that the problem is not digital, and that is worth knowing too if it stops you spending where you do not need to.",
      },
      {
        question: "How long does it take and how is it paid?",
        answer:
          "Five business days from the moment I have the context and the access. Payment is one-time and up front, invoiced in dollars. The number comes out of the first meeting, once I know the scope: how many locations, how many sites, how many languages and whether campaigns are running.",
      },
    ],
  },

  form: {
    eyebrow: "// request the audit",
    ctaLabel: "Request my audit",
    titleA: "Tell me which site is yours and I will tell you",
    titleHighlight: "whether auditing it is worth it",
    subtitle:
      "Three fields, nothing else. Before charging you anything I take a quick look at your business and reply on WhatsApp in under 24 hours: if the free Express Review is enough for you, I will say so and we both save the trouble.",
    needLabel: "What brings you here",
    needOptions: [
      "People reach my site but nobody contacts me",
      "I am about to spend on ads and want to know if my site holds up",
      "I am thinking about rebuilding my site",
      "I inherited the site and do not know what was left running",
      "Someone is beating me in Google and I do not know why",
      "I want to hire a service and I know it has to be audited first",
    ],
  },

  callout: {
    eyebrow: "// not sure which one you need?",
    title: "If you cannot name what is holding your growth back, do not guess",
    body: "The Strategic Business Audit starts with your business and your commercial objective, then reviews twelve areas: performance, architecture, conversion, technical SEO, keyword research, content and cannibalization, local presence, competitors, Google and Meta Ads, intake and measurement. Every finding with evidence and classified, and at the end a prioritized strategy with a 30/60/90 roadmap. Quoted after the first meeting, and included as the first phase when you hire a service.",
    cta: "See the Strategic Audit",
  },

  cross: {
    eyebrow: "// after the audit",
    title: "What if you already know what needs fixing?",
    body: "Then you do not need the standalone audit: ask me for a quote directly and whatever analysis is required goes inside the project. If the site is the problem, that is web development; if the site is fine and nobody is arriving, that is SEO or digital marketing.",
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
