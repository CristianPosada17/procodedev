// ============================================================
// PÁGINAS DE SEGMENTO — «Tax & Accounting Firms»
// ------------------------------------------------------------
// El hub (/impuestos · /en/tax-pros) habla del nicho completo. Estas seis
// páginas hablan de un solo oficio cada una, porque el prospecto no se busca
// a sí mismo por la categoría: se busca por su título. Un Enrolled Agent
// escribe «enrolled agent website», no «página para firmas fiscales».
//
// Cada segmento tiene su propio dolor, su propio calendario y sus propios
// servicios recurrentes. Si el copy fuera intercambiable entre las seis,
// no habría razón para que existieran seis páginas — ni para que Google
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
  meta: { title: string; description: string };
  heroEyebrow: string;
  heroTitleA: string;
  heroHighlight: string;
  heroSubtitle: string;
  /** Frase corta bajo el hero, para el JSON-LD y el resumen. */
  intro: string;
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
  taxProfessionals: {
    navLabel: "Preparadores de impuestos",
    navHint: "Temporada, business returns y clientes que regresan",
    icon: "receipt",
    meta: {
      title:
        "Sitios Web y Sistemas para Preparadores de Impuestos en EE. UU. | ProCode Dev",
      description:
        "Sitio web, captación, intake y seguimiento para preparadores de impuestos en Estados Unidos. Llega a la temporada con la agenda llena, deja de perder business returns y convierte clientes de una vez al año en clientes de todo el año. Precios públicos desde $349 USD.",
    },
    heroEyebrow: "// tax professionals",
    heroTitleA: "Sistemas digitales para",
    heroHighlight: "preparadores de impuestos",
    heroSubtitle:
      "Tu año se juega en catorce semanas. Construyo la infraestructura para que llegues a enero con la agenda ya empezando a llenarse, y para que los clientes de este año sigan siendo clientes el próximo.",
    intro:
      "Sitio web, Perfil de Empresa en Google, intake, agenda y seguimiento para preparadores de impuestos independientes en Estados Unidos.",
    painTitle: "Lo que veo una y otra vez",
    painSubtitle:
      "Ninguno de estos problemas se resuelve con una página más bonita. Se resuelven con estructura.",
    pains: [
      "El 80% de tus ingresos entra entre enero y abril, y el resto del año la operación se apaga.",
      "Los business returns —los retornos que de verdad pagan— se van con quien se ve como una firma, no con quien tiene más oficio.",
      "Contestas los mismos mensajes de WhatsApp cincuenta veces: qué documentos, cuánto cuesta, cuándo estará listo.",
      "En marzo pierdes prospectos porque nadie tuvo tiempo de contestarles en 24 horas.",
      "El cliente del año pasado no regresó y no te enteraste hasta abril, cuando ya presentó con otro.",
    ],
    systemTitle: "Lo que construyo para un preparador",
    systemSubtitle:
      "Las mismas seis piezas del sistema, aplicadas a cómo factura realmente tu práctica.",
    system: [
      {
        icon: "layout",
        title: "Una página por servicio, no una sola de «impuestos»",
        description:
          "Individual returns, business returns, ITIN, enmiendas y amended returns, extensiones. Cada una con su propio mensaje y su propio precio de referencia, para que el business return no compita en la misma página que el 1040 sencillo.",
      },
      {
        icon: "clipboard-check",
        title: "Intake que pide los documentos antes de la cita",
        description:
          "Formulario por tipo de retorno con la lista de documentos, carga segura de archivos y preguntas de calificación. Llegas a la cita con el expediente medio armado en vez de con una hoja en blanco.",
      },
      {
        icon: "calendar",
        title: "Agenda que sobrevive a la temporada",
        description:
          "Citas en línea conectadas a tu calendario, con bloques distintos para individual y para negocio, recordatorios automáticos y aviso de documentos faltantes 48 horas antes.",
      },
      {
        icon: "repeat",
        title: "Reactivación de la base del año pasado",
        description:
          "En diciembre y enero, tus clientes anteriores reciben el aviso de que ya puedes recibirlos, con el enlace para agendar. Es el ingreso más barato que existe y casi nadie lo trabaja.",
      },
      {
        icon: "target",
        title: "Perfil de Empresa en Google trabajando en temporada",
        description:
          "Optimizado para «tax preparer near me» y su equivalente en español, con publicaciones durante la temporada, horario extendido y un sistema para pedir reseñas justo cuando el cliente está contento: al entregar el refund.",
      },
    ],
    cycleTitle: "Tu calendario, y qué hace el sistema en cada tramo",
    cycleBody:
      "Nada de esto se improvisa en febrero. El sistema se monta antes y trabaja solo cuando tú no tienes tiempo de mirarlo.",
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
        note: "Venta de bookkeeping, payroll y tax planning a la base existente.",
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
      "Bookkeeping mensual para tus clientes con negocio",
      "Payroll para los que ya tienen empleados",
      "Tax planning antes del cierre del año",
      "Formación de LLC y S-Corp para el que se independiza",
      "Enmiendas y años anteriores sin presentar",
      "Estados financieros para trámites de crédito",
    ],
    faqTitle: "Dudas de un preparador",
    faq: [
      {
        question: "Estoy en plena temporada. ¿Vale la pena empezar ahora?",
        answer:
          "Depende del mes. De enero a abril priorizamos lo que se lanza en dos semanas y produce de inmediato: Perfil de Empresa en Google, agenda en línea, intake y el botón de WhatsApp con el mensaje ya escrito. El sitio completo lo hacemos después del 15 de abril, con calma y con datos reales de la temporada.",
      },
      {
        question: "¿Esto me sirve si trabajo solo, desde mi casa?",
        answer:
          "Es justo donde más rinde. Un preparador solo no tiene a nadie que conteste mientras está preparando un retorno: la automatización es el asistente que no puedes contratar en marzo.",
      },
      {
        question: "¿Puede quedar en inglés y en español?",
        answer:
          "Sí, y para la mayoría de los preparadores es lo correcto: los clientes actuales te buscan en español y los nuevos, muchas veces, en inglés. Las dos versiones se construyen con URLs separadas para que Google indexe ambas.",
      },
    ],
    ctaTitle: "15 minutos antes de que empiece la temporada",
    ctaBody:
      "Te digo qué pieza le falta a tu práctica hoy y qué se puede tener listo antes del 15 de enero.",
  },

  // ────────────────────────────────────────────────────────────
  enrolledAgents: {
    navLabel: "Enrolled Agents",
    navHint: "Credencial federal, representación y casos de todo el país",
    icon: "shield",
    meta: {
      title: "Sitios Web y Captación para Enrolled Agents (EA) | ProCode Dev",
      description:
        "Sitio web, posicionamiento y sistema de captación para Enrolled Agents en Estados Unidos. Haz visible tu credencial federal, capta casos de representación ante el IRS de cualquier estado y filtra al prospecto correcto antes de la primera llamada.",
    },
    heroEyebrow: "// enrolled agents",
    heroTitleA: "Sistemas digitales para",
    heroHighlight: "Enrolled Agents",
    heroSubtitle:
      "Tienes la única credencial fiscal reconocida a nivel federal y puedes representar a un contribuyente en cualquier estado. Tu presencia digital debería explotar exactamente eso — y casi nunca lo hace.",
    intro:
      "Sitio web, autoridad y captación de casos de representación para Enrolled Agents licenciados por el Departamento del Tesoro de EE. UU.",
    painTitle: "El problema del EA no es de diseño, es de percepción",
    painSubtitle:
      "El contribuyente promedio no sabe qué es un Enrolled Agent. Ese desconocimiento es tu mayor fuga de ingresos.",
    pains: [
      "El cliente no distingue entre tú y el preparador de la esquina, así que compara por precio.",
      "Tu credencial federal —la que te permite representar ante el IRS en los 50 estados— no aparece en ningún lado o aparece como una sigla suelta.",
      "Podrías atender casos de todo el país, pero tu presencia solo te posiciona en tu ciudad.",
      "Los casos de representación llegan por referido, nunca por búsqueda, y por eso el volumen no crece.",
      "Recibes consultas que no te convienen y descubres que no calificaban después de 40 minutos de llamada.",
    ],
    systemTitle: "Lo que construyo para un EA",
    systemSubtitle:
      "El objetivo es que quien llegue entienda en diez segundos qué puedes hacer tú que otro no puede.",
    system: [
      {
        icon: "shield",
        title: "Tu credencial, explicada en lenguaje de cliente",
        description:
          "Una sección que traduce «Enrolled Agent» a lo que al contribuyente le importa: autorización federal, derecho de representación ilimitado ante el IRS y validez en cualquier estado. Con tu número y tu educación continua a la vista.",
      },
      {
        icon: "scale",
        title: "Páginas por tipo de caso, no por tipo de servicio",
        description:
          "Auditorías, cartas CP2000, deuda con el IRS, planes de pago, penalty abatement, poder de representación. Quien recibe una carta del IRS busca la carta, no busca «servicios fiscales».",
      },
      {
        icon: "map-pin",
        title: "Alcance nacional, sin perder lo local",
        description:
          "Tu Perfil de Empresa en Google trabaja tu ciudad, y el sitio se estructura para captar casos de representación de cualquier estado, que es donde tu credencial vale más.",
      },
      {
        icon: "clipboard-check",
        title: "Calificación antes de la llamada",
        description:
          "Un intake que pregunta tipo de aviso, año fiscal, monto aproximado y si ya hay acuerdo con el IRS. Llegas a la consulta sabiendo si el caso te sirve, y el que no califica no te consume una hora.",
      },
      {
        icon: "sparkles",
        title: "Visibilidad en búsqueda con IA",
        description:
          "Cada vez más contribuyentes le preguntan a una IA qué hacer con una carta del IRS. Estructuro tus contenidos y credenciales para aparecer citado en esas respuestas.",
      },
    ],
    cycleTitle: "Tu calendario no es solo la temporada",
    cycleBody:
      "El trabajo de representación no depende del 15 de abril: depende de cuándo el IRS manda avisos. Eso hace tu negocio menos estacional que el de un preparador, si la captación está montada para aprovecharlo.",
    cycleMonths: [
      { label: "Ene – Abr", note: "Temporada y captación de clientes nuevos." },
      {
        label: "May – Jul",
        note: "Llega la ola de avisos del IRS de la temporada anterior.",
      },
      { label: "Ago – Oct", note: "Extensiones, resolución y planes de pago." },
      {
        label: "Nov – Dic",
        note: "Tax planning, educación continua y contenido de autoridad.",
      },
    ],
    offerTitle: "Servicios que un EA puede posicionar todo el año",
    offerSubtitle:
      "Tu credencial da acceso a trabajo que un preparador sin licencia no puede tomar. La página debería decirlo.",
    offers: [
      "Representación ante el IRS y respuesta a auditorías",
      "Resolución de deuda: planes de pago y penalty abatement",
      "Años sin presentar y reconstrucción de expedientes",
      "Tax planning para dueños de negocio",
      "Segunda opinión sobre retornos preparados por terceros",
      "Consultoría para contribuyentes con ingresos de varios estados",
    ],
    faqTitle: "Dudas de un Enrolled Agent",
    faq: [
      {
        question:
          "¿Puedo captar casos de otros estados o me conviene enfocarme en mi ciudad?",
        answer:
          "Las dos cosas, y en ese orden. El Perfil de Empresa en Google te trae el volumen local, que sostiene la temporada; la estructura de contenido por tipo de caso es la que te trae representación de otros estados, que es el trabajo mejor pagado. Una cosa financia la otra.",
      },
      {
        question: "¿Es un problema no ser CPA?",
        answer:
          "No, si la página lo explica bien. Ante el IRS tu derecho de representación es el mismo, y esa equivalencia es exactamente lo que el sitio tiene que comunicar en la primera pantalla. El problema no es la credencial: es que nadie la conoce.",
      },
      {
        question: "¿Cómo evito consultas de gente que no puede pagar?",
        answer:
          "Con el intake y con el precio. El formulario pregunta monto de deuda, tipo de aviso y estado del caso antes de agendar, y la página puede publicar un rango de referencia para la consulta inicial. Filtras antes de invertir tu tiempo.",
      },
    ],
    ctaTitle: "15 minutos para revisar cómo te ve un contribuyente hoy",
    ctaBody:
      "Te digo qué está comunicando tu presencia actual sobre tu credencial — y qué no.",
  },

  // ────────────────────────────────────────────────────────────
  cpas: {
    navLabel: "CPAs",
    navHint: "Advisory, clientes de mayor ticket y referidos",
    icon: "briefcase",
    meta: {
      title:
        "Sitios Web y Sistemas de Crecimiento para Firmas de CPA | ProCode Dev",
      description:
        "Sitio web, captación e intake para prácticas de CPA pequeñas y medianas en EE. UU. Posiciona advisory y servicios de mayor valor, filtra al cliente que sí encaja y convierte el referido en una experiencia digital a la altura de tus honorarios.",
    },
    heroEyebrow: "// cpas",
    heroTitleA: "Sistemas digitales para",
    heroHighlight: "prácticas de CPA",
    heroSubtitle:
      "Cobras honorarios de firma profesional. Si tu presencia digital no está a esa altura, cada referido que te busca en Google antes de llamarte pone tu precio en duda.",
    intro:
      "Sitio web, autoridad profesional, intake y captación para prácticas de CPA pequeñas y medianas en Estados Unidos.",
    painTitle: "Dónde se cae una práctica de CPA",
    painSubtitle:
      "El problema rara vez es falta de trabajo. Es la mezcla del trabajo y el proceso para conseguirlo.",
    pains: [
      "El 100% del negocio llega por referido, así que el crecimiento depende de la suerte y no del sistema.",
      "El referido te busca en Google antes de llamar, encuentra un sitio de 2016 y llega a la llamada dudando de tus honorarios.",
      "Tu tiempo se va en compliance de bajo valor mientras el advisory —lo que mejor pagas y mejor haces— no se comunica en ningún lado.",
      "Recibes consultas de clientes que no encajan con tu práctica y no puedes filtrarlas sin quedar mal.",
      "El paso de «me interesa» a «firmó el engagement letter» toma semanas de correos de ida y vuelta.",
    ],
    systemTitle: "Lo que construyo para una firma de CPA",
    systemSubtitle:
      "Menos volumen, mejor cliente, menos fricción entre el interés y el engagement.",
    system: [
      {
        icon: "briefcase",
        title: "Posicionamiento por especialidad y por industria",
        description:
          "Restaurantes, construcción, e-commerce, consultorios, real estate. Una firma que dice para quién trabaja cobra más que una que dice que trabaja para todos, y aparece en las búsquedas que sí convierten.",
      },
      {
        icon: "trending-up",
        title: "El advisory al frente, no escondido bajo «servicios»",
        description:
          "Tax planning, CFO fraccional, análisis financiero y consultoría estructurados como oferta propia, con su propia página y su propio proceso. Es la diferencia entre facturar por hora y facturar por valor.",
      },
      {
        icon: "clipboard-check",
        title: "Intake que filtra antes de la primera reunión",
        description:
          "Tipo de entidad, facturación aproximada, software contable, servicios que necesita y si ya tiene contador. El que no encaja con tu práctica lo sabes antes de agendar; el que encaja llega con el contexto listo.",
      },
      {
        icon: "shield",
        title: "Credenciales y prueba profesional visibles",
        description:
          "Licencia estatal, años de práctica, membresías, especializaciones y casos de industria. Es lo que sostiene tu precio cuando el prospecto está comparando tres firmas en pestañas distintas.",
      },
      {
        icon: "workflow",
        title: "Del interés al engagement, sin veinte correos",
        description:
          "Agenda conectada, documentos solicitados de forma automática y seguimiento estructurado. La firma que responde primero y con orden gana el cliente, aunque la otra sea igual de buena.",
      },
    ],
    cycleTitle: "El año de una firma de CPA",
    cycleBody:
      "Tu estacionalidad es real, pero es más suave que la de un preparador. La oportunidad está en usar los meses tranquilos para vender advisory a la base que ya tienes.",
    cycleMonths: [
      {
        label: "Ene – Abr",
        note: "Compliance a tope; el sistema absorbe consultas sin quitarte tiempo.",
      },
      {
        label: "May – Ago",
        note: "Advisory, planeación y captación de clientes de negocio.",
      },
      {
        label: "Sep – Oct",
        note: "Extensiones y cierre del ciclo de las entidades.",
      },
      {
        label: "Nov – Dic",
        note: "Tax planning de fin de año: la venta de mayor margen del calendario.",
      },
    ],
    offerTitle: "Servicios de mayor valor que conviene posicionar",
    offerSubtitle:
      "Todo esto ya lo puedes ofrecer. La pregunta es si tu presencia digital lo comunica o si te deja como el CPA que hace retornos.",
    offers: [
      "Tax planning y proyecciones de fin de año",
      "CFO fraccional y acompañamiento financiero mensual",
      "Elección de entidad y reestructuración (LLC, S-Corp, C-Corp)",
      "Estados financieros y acompañamiento en solicitudes de crédito",
      "Due diligence en compraventa de negocios",
      "Consultoría de nómina y cumplimiento multiestatal",
    ],
    faqTitle: "Dudas de una firma de CPA",
    faq: [
      {
        question: "Ya tengo suficientes clientes. ¿Para qué quiero esto?",
        answer:
          "Casi ninguna práctica establecida necesita más clientes: necesita mejores. El sistema sirve para que llegue el perfil que quieres, para que el que no encaja se filtre solo y para reducir el tiempo administrativo por cliente. Si tu problema es capacidad y no demanda, esto se nota más en el margen que en el volumen.",
      },
      {
        question: "¿Qué tanto de esto puede vivir en mi software actual?",
        answer:
          "Bastante. Trabajo sobre lo que ya usas —portal de cliente, software de preparación, calendario, CRM— y conecto el sitio con eso. La idea no es que cambies de herramientas: es que dejen de estar desconectadas entre sí.",
      },
      {
        question: "¿Publicar precios no me perjudica en una práctica de CPA?",
        answer:
          "En advisory y compliance complejo, normalmente no publicamos precio final: publicamos rangos de referencia o un precio de partida por servicio. Filtra a quien busca lo más barato sin comprometerte, y evita la llamada de 40 minutos que termina en «es más de lo que pensaba».",
      },
    ],
    ctaTitle: "15 minutos para ver qué está comunicando tu firma",
    ctaBody:
      "Reviso cómo te ve hoy un referido que te busca antes de llamarte, y qué cambiaría eso.",
  },

  // ────────────────────────────────────────────────────────────
  bookkeepers: {
    navLabel: "Bookkeepers",
    navHint: "Ingreso recurrente, clientes mensuales y cleanups",
    icon: "calculator",
    meta: {
      title:
        "Sitios Web y Captación para Bookkeepers y Contabilidad Mensual | ProCode Dev",
      description:
        "Sitio web, captación e intake para bookkeepers en Estados Unidos. Vende contabilidad mensual como suscripción, capta cleanups y catch-ups, y consigue clientes recurrentes en lugar de trabajos sueltos. Precios públicos desde $349 USD.",
    },
    heroEyebrow: "// bookkeepers",
    heroTitleA: "Sistemas digitales para",
    heroHighlight: "bookkeepers",
    heroSubtitle:
      "Tu servicio es el único de todo el nicho que se cobra doce veces al año. Eso convierte cada cliente nuevo en ingreso recurrente — y hace que valga la pena montar el sistema una sola vez.",
    intro:
      "Sitio web, captación e intake para bookkeepers y servicios de contabilidad mensual en Estados Unidos.",
    painTitle: "Lo que frena a un bookkeeper",
    painSubtitle:
      "Vender contabilidad mensual es distinto a vender un retorno: no es una transacción, es una relación.",
    pains: [
      "Cobras por hora o por trabajo suelto, cuando tu servicio es naturalmente una suscripción mensual.",
      "El dueño de negocio no sabe qué incluye «bookkeeping» y por eso compara tu precio con el de un software de $30 al mes.",
      "Los cleanups y catch-ups —lo mejor pagado y lo más urgente para el cliente— no están posicionados en ningún lado.",
      "Tomas clientes con dieciocho meses de desorden por el precio de un mes normal, porque no hubo forma de calificarlo antes.",
      "Un preparador de impuestos te manda referidos, pero no hay nada en tu presencia que le facilite recomendarte.",
    ],
    systemTitle: "Lo que construyo para un bookkeeper",
    systemSubtitle:
      "Todo apunta al mismo objetivo: convertir consultas sueltas en clientes que pagan cada mes.",
    system: [
      {
        icon: "repeat",
        title: "Paquetes mensuales, no tarifas por hora",
        description:
          "Tres niveles con lo que incluye cada uno y un precio de partida visible. La suscripción se vende como suscripción: si el cliente no ve el paquete, negocia por hora y siempre a la baja.",
      },
      {
        icon: "clipboard-check",
        title: "Intake que califica el desorden",
        description:
          "Meses sin conciliar, software actual, número de cuentas, volumen de transacciones y tipo de entidad. Sabes si es un cleanup de tres meses o de dos años antes de dar un precio.",
      },
      {
        icon: "search",
        title: "Cleanups y catch-ups como servicio propio",
        description:
          "Su propia página, su propio precio de entrada y su propio formulario. Es el trabajo más urgente para el cliente, el mejor pagado y la puerta natural hacia el contrato mensual.",
      },
      {
        icon: "handshake",
        title: "Alianzas con preparadores y CPAs",
        description:
          "Una página pensada para que un preparador te mande a su cliente de bookkeeping sin fricción: qué haces, qué no haces y cómo se coordinan. El referido profesional es tu canal más rentable.",
      },
      {
        icon: "trending-up",
        title: "Reportes que justifican el pago mensual",
        description:
          "El cliente que recibe algo cada mes renueva. Estructuro la entrega y la comunicación para que tu trabajo sea visible, no un cargo silencioso en la tarjeta.",
      },
    ],
    cycleTitle: "El bookkeeper es quien menos depende del calendario",
    cycleBody:
      "Y esa es exactamente tu ventaja: mientras el resto del nicho vive de catorce semanas, tú puedes construir ingreso estable los doce meses. El calendario solo cambia dónde está la oportunidad de captación.",
    cycleMonths: [
      {
        label: "Ene – Abr",
        note: "Los desordenados descubren su problema al preparar impuestos.",
      },
      {
        label: "May – Ago",
        note: "Temporada alta de cleanups y contratos mensuales nuevos.",
      },
      {
        label: "Sep – Oct",
        note: "Extensiones: otra ola de negocios sin libros al día.",
      },
      {
        label: "Nov – Dic",
        note: "Cierre de año y venta del paquete mensual para enero.",
      },
    ],
    offerTitle: "Servicios que sostienen el ingreso recurrente",
    offerSubtitle:
      "Cada uno se puede empaquetar y presentar como parte de un plan mensual en vez de como un trabajo suelto.",
    offers: [
      "Contabilidad mensual y conciliación bancaria",
      "Cleanup y catch-up de meses o años atrasados",
      "Procesamiento de nómina",
      "Cuentas por pagar y por cobrar",
      "Reportes financieros mensuales con lectura del número",
      "Migración y configuración de QuickBooks o Xero",
    ],
    faqTitle: "Dudas de un bookkeeper",
    faq: [
      {
        question: "¿Publico mis precios mensuales o los dejo a cotización?",
        answer:
          "Publica al menos un precio de partida por paquete. En contabilidad mensual, «pide cotización» hace que el dueño de negocio asuma que es caro y siga buscando. Un «desde $X al mes» filtra a quien nunca iba a pagar y sube la calidad de las consultas que sí llegan.",
      },
      {
        question: "Trabajo con clientes de varios estados. ¿Eso cambia algo?",
        answer:
          "Cambia el enfoque de captación. En vez de apostar todo al Perfil de Empresa en Google local, trabajamos contenido por industria y por software —restaurantes, contratistas, e-commerce, QuickBooks Online— que es como te busca alguien que no necesita que estés en su ciudad.",
      },
      {
        question: "¿Cómo evito los cleanups que se convierten en pesadilla?",
        answer:
          "Con el intake. El formulario pregunta meses sin conciliar, número de cuentas y volumen mensual antes de que agendes. Con eso das un rango honesto desde el primer mensaje, en vez de descubrir el tamaño real del problema cuando ya aceptaste el trabajo.",
      },
    ],
    ctaTitle: "15 minutos para armar tu oferta mensual",
    ctaBody:
      "Revisamos cómo estás cobrando hoy y cómo se vería empaquetado como suscripción.",
  },

  // ────────────────────────────────────────────────────────────
  taxResolution: {
    navLabel: "Resolución fiscal",
    navHint: "Casos urgentes, deuda con el IRS y ticket alto",
    icon: "scale",
    meta: {
      title:
        "Marketing y Sitios Web para Firmas de Resolución Fiscal | ProCode Dev",
      description:
        "Sitio web, captación e intake para firmas de tax resolution en Estados Unidos. Capta contribuyentes con deuda del IRS en el momento de urgencia, califica el caso antes de la consulta y responde en minutos, no en días.",
    },
    heroEyebrow: "// tax resolution",
    heroTitleA: "Sistemas digitales para",
    heroHighlight: "firmas de resolución fiscal",
    heroSubtitle:
      "Tu cliente no está planeando: está asustado, con una carta del IRS en la mano, buscando a las once de la noche. Gana quien responde primero y quien se ve capaz de resolverlo.",
    intro:
      "Sitio web, captación, calificación e intake para firmas de resolución fiscal y representación ante el IRS en Estados Unidos.",
    painTitle: "La resolución fiscal se pierde en la velocidad",
    painSubtitle:
      "Es el segmento con el ticket más alto del nicho y también el más competido. La diferencia casi nunca está en la técnica.",
    pains: [
      "El contribuyente con una carta del IRS contacta a tres firmas la misma noche y contrata a la primera que le contesta.",
      "Compites contra empresas nacionales con presupuestos de publicidad enormes y promesas de «pennies on the dollar».",
      "Recibes consultas de gente que debe $800 y no califica para nada, y te consumen el mismo tiempo que un caso de $50,000.",
      "El prospecto no sabe distinguir entre una firma seria y las que salen en los anuncios de radio, así que desconfía de todas.",
      "El caso llega por teléfono a las 9 de la noche y no hay nada montado para capturarlo fuera de horario.",
    ],
    systemTitle: "Lo que construyo para una firma de resolución",
    systemSubtitle:
      "Velocidad, calificación y credibilidad. En este segmento, en ese orden.",
    system: [
      {
        icon: "scale",
        title: "Una página por tipo de problema",
        description:
          "Wage garnishment, bank levy, lien, CP2000, deuda acumulada, años sin presentar, Offer in Compromise, planes de pago, innocent spouse. El contribuyente busca el nombre de su problema, no «resolución fiscal».",
      },
      {
        icon: "clipboard-check",
        title: "Calificación antes de que te quite una hora",
        description:
          "Monto aproximado de deuda, tipo de aviso recibido, años sin presentar y si ya hay embargo activo. El caso que no califica recibe una respuesta útil sin consumir tu agenda; el que sí, entra con expediente.",
      },
      {
        icon: "zap",
        title: "Respuesta inmediata, a cualquier hora",
        description:
          "Confirmación automática al enviar el formulario, aviso instantáneo a tu equipo y opción de WhatsApp o llamada. En un segmento donde el prospecto contacta a tres firmas, contestar en cinco minutos es la mitad de la venta.",
      },
      {
        icon: "shield",
        title: "Credibilidad frente a las promesas infladas",
        description:
          "Credenciales verificables, explicación honesta de qué se puede y qué no se puede conseguir, y reseñas reales. Diferenciarte del anuncio de radio es tu mejor argumento de venta.",
      },
      {
        icon: "target",
        title: "Captación de intención alta",
        description:
          "SEO por tipo de aviso y, cuando el presupuesto lo justifica, campañas con landing dedicada y seguimiento de costo por caso firmado — no por clic.",
      },
    ],
    cycleTitle: "Cuándo llegan los casos",
    cycleBody:
      "La resolución fiscal sigue el calendario del IRS, no el del 15 de abril. Saber cuándo salen los avisos permite tener la captación lista antes de la ola.",
    cycleMonths: [
      {
        label: "Ene – Abr",
        note: "Descubren la deuda al preparar el retorno del año.",
      },
      {
        label: "May – Jul",
        note: "Llegan los avisos y las cartas de la temporada anterior.",
      },
      {
        label: "Ago – Oct",
        note: "Escalan las acciones de cobro: liens y embargos.",
      },
      {
        label: "Nov – Dic",
        note: "Cierre de acuerdos antes del año fiscal siguiente.",
      },
    ],
    offerTitle: "Servicios que conviene posicionar por separado",
    offerSubtitle:
      "Cada uno tiene su propia búsqueda, su propia urgencia y su propio ticket. Mezclarlos en una sola página cuesta casos.",
    offers: [
      "Liberación de embargo de salario y de cuentas bancarias",
      "Planes de pago y acuerdos a plazos con el IRS",
      "Offer in Compromise cuando el caso realmente califica",
      "Penalty abatement por causa razonable",
      "Años sin presentar y reconstrucción de declaraciones",
      "Representación en auditorías y respuesta a avisos",
    ],
    faqTitle: "Dudas de una firma de resolución",
    faq: [
      {
        question: "¿Publico precios en resolución fiscal?",
        answer:
          "No el precio final —cada caso es distinto— pero sí un precio de partida para la investigación o la consulta inicial. Es lo que te separa de las firmas que esconden todo hasta tenerte al teléfono, y filtra al que busca que le resuelvan $500 de deuda.",
      },
      {
        question: "¿Vale la pena invertir en anuncios en este segmento?",
        answer:
          "A veces, pero solo con el sistema montado antes. Pagar por clics que caen en un formulario que nadie contesta en dos horas es tirar el presupuesto. Primero intake, calificación y respuesta automática; después campañas, midiendo costo por caso firmado y no por lead.",
      },
      {
        question: "¿Cómo compito con las firmas nacionales de televisión?",
        answer:
          "No compitiendo en su terreno. Ellos ganan en volumen y en promesa; tú ganas en proximidad, credencial verificable, honestidad sobre lo que realmente se puede conseguir y en contestar tú, no un call center. Eso se puede comunicar, y es lo que el prospecto quemado por un anuncio está buscando.",
      },
    ],
    ctaTitle: "15 minutos para revisar tu velocidad de respuesta",
    ctaBody:
      "Medimos cuánto tarda hoy tu firma en contestar un caso nuevo, y qué se puede automatizar esta semana.",
  },

  // ────────────────────────────────────────────────────────────
  accountingFirms: {
    navLabel: "Despachos contables",
    navHint: "Varios servicios, equipo y operación multiservicio",
    icon: "building",
    meta: {
      title:
        "Sitios Web y Sistemas de Crecimiento para Despachos Contables | ProCode Dev",
      description:
        "Sitio web, captación, intake y automatización para despachos contables y firmas multiservicio en EE. UU.: impuestos, bookkeeping, payroll, ITIN, formación de empresas y advisory. Una página por servicio y un sistema que ordena la operación.",
    },
    heroEyebrow: "// accounting firms",
    heroTitleA: "Sistemas digitales para",
    heroHighlight: "despachos contables",
    heroSubtitle:
      "Das seis servicios distintos a cuatro tipos de cliente distintos y todo eso vive en una sola página que dice «servicios contables». Ese es el problema, y es más caro de lo que parece.",
    intro:
      "Sitio web, captación, intake y automatización para despachos contables y firmas multiservicio en Estados Unidos.",
    painTitle: "El costo de ser multiservicio sin estructura",
    painSubtitle:
      "Tu oferta amplia es una ventaja comercial y una desventaja de comunicación. Se puede arreglar lo segundo sin renunciar a lo primero.",
    pains: [
      "Impuestos, bookkeeping, payroll, ITIN, formación de empresas y notary compitiendo por atención en la misma página.",
      "Cada servicio tiene su cliente y su búsqueda, pero solo hay una URL para todos: ninguno posiciona bien.",
      "El cliente que llega por ITIN nunca se entera de que también haces payroll, y era el mejor candidato para venderlo.",
      "Con equipo, los mensajes llegan a WhatsApp personales y a correos distintos, y nadie sabe qué pasó con cada prospecto.",
      "En temporada entra tanto volumen que la operación se sostiene con memoria y buena voluntad, no con proceso.",
    ],
    systemTitle: "Lo que construyo para un despacho contable",
    systemSubtitle:
      "Ordenar la oferta hacia afuera y ordenar la operación hacia adentro. Suelen ser el mismo trabajo.",
    system: [
      {
        icon: "layout",
        title: "Una página por servicio, con su propia búsqueda",
        description:
          "Impuestos personales, business returns, bookkeeping, payroll, ITIN, formación de LLC, notary. Cada una posiciona por su cuenta y le habla a su cliente, en vez de repartirse la misma página.",
      },
      {
        icon: "route",
        title: "Rutas de venta cruzada entre servicios",
        description:
          "Quien llega por ITIN es candidato a impuestos; quien llega por formación de empresa es candidato a bookkeeping y payroll. El sistema conecta esos caminos en vez de dejarlos a que alguien se acuerde.",
      },
      {
        icon: "users",
        title: "Un solo buzón para todo el equipo",
        description:
          "Todos los formularios, mensajes y solicitudes entran a un mismo lugar, con asignación y estado. Se acaba el «pensé que tú le habías contestado» de marzo.",
      },
      {
        icon: "clipboard-check",
        title: "Intake distinto por servicio",
        description:
          "Cada servicio pide lo que necesita: documentos para impuestos, meses sin conciliar para bookkeeping, número de empleados para payroll. Nadie llena un formulario genérico que no sirve para nada.",
      },
      {
        icon: "trending-up",
        title: "Reporte por servicio, no solo del despacho",
        description:
          "Cuántos leads generó cada servicio, cuáles se convirtieron y de dónde vinieron. Es lo que te dice en qué línea de negocio conviene invertir el año que viene.",
      },
    ],
    cycleTitle: "Un despacho multiservicio nunca está fuera de temporada",
    cycleBody:
      "Esa es la ventaja de tener varias líneas: cuando una baja, otra sube. Lo que falta casi siempre es la captación específica de la línea que toca en cada tramo del año.",
    cycleMonths: [
      {
        label: "Ene – Abr",
        note: "Impuestos e ITIN al máximo; el resto del sistema sostiene la operación.",
      },
      {
        label: "May – Ago",
        note: "Bookkeeping, payroll y formación de empresas.",
      },
      {
        label: "Sep – Oct",
        note: "Extensiones, cierres de entidad y regularización.",
      },
      {
        label: "Nov – Dic",
        note: "Planeación de fin de año y preparación de la temporada.",
      },
    ],
    offerTitle: "Servicios que suelen convivir en un despacho",
    offerSubtitle:
      "Cada uno merece su propia página, su propio formulario y su propia forma de medirse.",
    offers: [
      "Impuestos personales y de negocio",
      "Bookkeeping y contabilidad mensual",
      "Payroll y cumplimiento laboral",
      "ITIN y trámites de identificación fiscal",
      "Formación de LLC, S-Corp y registro de negocios",
      "Notary, apostillas y servicios administrativos",
    ],
    faqTitle: "Dudas de un despacho contable",
    faq: [
      {
        question: "¿No es mejor una sola página que lo diga todo?",
        answer:
          "Es más fácil de hacer y es peor para el negocio. Una sola página tiene que posicionar para búsquedas que no se parecen entre sí y termina sin posicionar para ninguna. Con una página por servicio, cada línea compite en su propia búsqueda y puedes ver cuál te trae clientes y cuál no.",
      },
      {
        question: "Tenemos equipo. ¿Esto complica el día a día?",
        answer:
          "Lo simplifica, si se monta bien. Los formularios entran a un solo lugar con estado y responsable asignado, en vez de repartirse entre WhatsApp personales y correos distintos. En temporada esa diferencia se nota más que cualquier cambio de diseño.",
      },
      {
        question: "¿Podemos empezar solo con una línea de servicio?",
        answer:
          "Sí, y suele ser lo más sensato. Empezamos con la línea que más margen deja o la que más quieres crecer, medimos qué produjo en un ciclo completo y replicamos la estructura al resto con datos en la mano.",
      },
    ],
    ctaTitle: "15 minutos para ordenar tu oferta",
    ctaBody:
      "Revisamos los servicios que das hoy y cuáles justifican una página propia desde el primer día.",
  },
};

const en: SegmentDict = {
  // ────────────────────────────────────────────────────────────
  taxProfessionals: {
    navLabel: "Tax Professionals",
    navHint: "Season, business returns and clients who come back",
    icon: "receipt",
    meta: {
      title: "Websites & Growth Systems for Tax Professionals | ProCode Dev",
      description:
        "Website, client acquisition, intake and follow-up for tax professionals across the United States. Reach January with a filling calendar, stop losing business returns and turn once-a-year clients into year-round ones. Public pricing from $349 USD.",
    },
    heroEyebrow: "// tax professionals",
    heroTitleA: "Digital growth systems for",
    heroHighlight: "tax professionals",
    heroSubtitle:
      "Your year is decided in fourteen weeks. I build the infrastructure so you reach January with a calendar already filling — and so this year's clients are still clients next year.",
    intro:
      "Website, Google Business Profile, intake, scheduling and follow-up for independent tax professionals across the United States.",
    painTitle: "What I see over and over",
    painSubtitle:
      "None of this gets fixed with a prettier page. It gets fixed with structure.",
    pains: [
      "80% of your revenue lands between January and April, and the rest of the year the operation goes quiet.",
      "Business returns — the ones that actually pay — go to whoever looks like a firm, not to whoever has the most experience.",
      "You answer the same messages fifty times: which documents, how much, when will it be ready.",
      "In March you lose prospects because nobody had time to answer within 24 hours.",
      "Last year's client didn't come back and you found out in April, once they'd already filed with someone else.",
    ],
    systemTitle: "What I build for a tax professional",
    systemSubtitle:
      "The same six pieces of the system, applied to how your practice actually bills.",
    system: [
      {
        icon: "layout",
        title: "One page per service, not a single «taxes» page",
        description:
          "Individual returns, business returns, ITIN, amended returns, extensions. Each with its own message and its own reference price, so the business return doesn't compete on the same page as a simple 1040.",
      },
      {
        icon: "clipboard-check",
        title: "Intake that asks for documents before the appointment",
        description:
          "A form per return type with the document checklist, secure upload and qualifying questions. You arrive at the appointment with the file half built instead of a blank sheet.",
      },
      {
        icon: "calendar",
        title: "Scheduling that survives the season",
        description:
          "Online booking wired to your calendar, separate blocks for individual and business, automatic reminders and a missing-document notice 48 hours ahead.",
      },
      {
        icon: "repeat",
        title: "Reactivation of last year's base",
        description:
          "In December and January your previous clients get the notice that you're taking appointments, with the booking link. It's the cheapest revenue there is and almost nobody works it.",
      },
      {
        icon: "target",
        title: "A Google Business Profile that works in season",
        description:
          "Optimized for «tax preparer near me» and its Spanish equivalent, with posts through the season, extended hours and a system to request reviews right when the client is happiest: at delivery.",
      },
    ],
    cycleTitle: "Your calendar, and what the system does in each stretch",
    cycleBody:
      "None of this gets improvised in February. The system is built beforehand and runs on its own when you have no time to look at it.",
    cycleMonths: [
      {
        label: "Nov – Dec",
        note: "Reactivating past clients, reviews and open scheduling.",
      },
      {
        label: "Jan – Apr",
        note: "Acquisition at peak, automatic intake, hands-off follow-up.",
      },
      {
        label: "May – Aug",
        note: "Selling bookkeeping, payroll and tax planning to your base.",
      },
      {
        label: "Sep – Oct",
        note: "Extensions, content and prep for the next season.",
      },
    ],
    offerTitle: "Services you can sell the rest of the year",
    offerSubtitle:
      "I'm not asking you to invent new services: I'm asking you to present the ones you could already deliver, at the moment the client is listening.",
    offers: [
      "Monthly bookkeeping for your business clients",
      "Payroll for the ones who already have employees",
      "Year-end tax planning",
      "LLC and S-Corp formation for the newly self-employed",
      "Amended returns and unfiled years",
      "Financial statements for loan applications",
    ],
    faqTitle: "Questions from tax professionals",
    faq: [
      {
        question: "I'm mid-season. Is it worth starting now?",
        answer:
          "It depends on the month. From January to April we prioritize what launches in two weeks and produces immediately: Google Business Profile, online scheduling, intake and the WhatsApp button with the message pre-written. The full site comes after April 15, calmly and with real season data.",
      },
      {
        question: "Does this help if I work alone, from home?",
        answer:
          "That's exactly where it pays off most. A solo preparer has nobody answering while they're working a return: automation is the assistant you can't hire in March.",
      },
      {
        question: "Can it be in English and Spanish?",
        answer:
          "Yes, and for most preparers that's the right call: current clients search in Spanish and new ones often search in English. Both versions are built on separate URLs so Google indexes each one.",
      },
    ],
    ctaTitle: "15 minutes before the season starts",
    ctaBody:
      "I'll tell you which piece your practice is missing and what can be live before January 15.",
  },

  // ────────────────────────────────────────────────────────────
  enrolledAgents: {
    navLabel: "Enrolled Agents",
    navHint: "Federal credential, representation and nationwide cases",
    icon: "shield",
    meta: {
      title: "Websites & Client Acquisition for Enrolled Agents | ProCode Dev",
      description:
        "Website, positioning and acquisition system for Enrolled Agents in the United States. Make your federal credential visible, win IRS representation cases from any state and qualify the right prospect before the first call.",
    },
    heroEyebrow: "// enrolled agents",
    heroTitleA: "Digital growth systems for",
    heroHighlight: "Enrolled Agents",
    heroSubtitle:
      "You hold the only federally recognized tax credential and can represent a taxpayer in any state. Your digital presence should lean on exactly that — and it almost never does.",
    intro:
      "Website, authority and representation-case acquisition for Enrolled Agents licensed by the U.S. Department of the Treasury.",
    painTitle: "An EA's problem isn't design, it's perception",
    painSubtitle:
      "The average taxpayer doesn't know what an Enrolled Agent is. That gap is your biggest revenue leak.",
    pains: [
      "The client can't tell you apart from the preparer down the block, so they compare on price.",
      "Your federal credential — the one that lets you represent before the IRS in all 50 states — is nowhere to be found, or shows up as a loose acronym.",
      "You could take cases nationwide, but your presence only positions you in your own city.",
      "Representation cases arrive by referral, never by search, so volume never grows.",
      "You take consultations that don't fit and find out they never qualified after 40 minutes on the phone.",
    ],
    systemTitle: "What I build for an EA",
    systemSubtitle:
      "The goal is that whoever lands understands in ten seconds what you can do that others can't.",
    system: [
      {
        icon: "shield",
        title: "Your credential, explained in client language",
        description:
          "A section that translates «Enrolled Agent» into what the taxpayer cares about: federal authorization, unlimited representation rights before the IRS and validity in any state. With your number and continuing education in plain sight.",
      },
      {
        icon: "scale",
        title: "Pages by case type, not by service type",
        description:
          "Audits, CP2000 notices, IRS debt, payment plans, penalty abatement, power of attorney. Someone who gets an IRS letter searches for the letter, not for «tax services».",
      },
      {
        icon: "map-pin",
        title: "National reach without losing local",
        description:
          "Your Google Business Profile works your city, and the site is structured to capture representation cases from any state — which is where your credential is worth the most.",
      },
      {
        icon: "clipboard-check",
        title: "Qualification before the call",
        description:
          "Intake that asks notice type, tax year, approximate amount and whether there's already an IRS agreement. You reach the consultation knowing whether the case fits, and the ones that don't qualify never cost you an hour.",
      },
      {
        icon: "sparkles",
        title: "Visibility in AI search",
        description:
          "More and more taxpayers ask an AI what to do about an IRS letter. I structure your content and credentials so you get cited in those answers.",
      },
    ],
    cycleTitle: "Your calendar isn't just the season",
    cycleBody:
      "Representation work doesn't hinge on April 15: it hinges on when the IRS sends notices. That makes your business less seasonal than a preparer's — if acquisition is built to take advantage of it.",
    cycleMonths: [
      { label: "Jan – Apr", note: "Season and new client acquisition." },
      {
        label: "May – Jul",
        note: "The wave of IRS notices from last season arrives.",
      },
      { label: "Aug – Oct", note: "Extensions, resolution and payment plans." },
      {
        label: "Nov – Dec",
        note: "Tax planning, continuing education and authority content.",
      },
    ],
    offerTitle: "Services an EA can position year-round",
    offerSubtitle:
      "Your credential unlocks work an unlicensed preparer can't take. The website should say so.",
    offers: [
      "IRS representation and audit response",
      "Debt resolution: payment plans and penalty abatement",
      "Unfiled years and record reconstruction",
      "Tax planning for business owners",
      "Second opinions on returns prepared by others",
      "Advisory for taxpayers with multi-state income",
    ],
    faqTitle: "Questions from Enrolled Agents",
    faq: [
      {
        question:
          "Should I chase out-of-state cases or focus on my own city?",
        answer:
          "Both, in that order. The Google Business Profile brings local volume, which sustains the season; the content structure by case type brings out-of-state representation, which is the better-paid work. One funds the other.",
      },
      {
        question: "Is not being a CPA a problem?",
        answer:
          "Not if the page explains it well. Before the IRS your representation rights are the same, and that equivalence is exactly what the site needs to communicate above the fold. The problem isn't the credential: it's that nobody knows it.",
      },
      {
        question: "How do I avoid consultations from people who can't pay?",
        answer:
          "With intake and with price. The form asks debt amount, notice type and case status before booking, and the page can publish a reference range for the initial consultation. You filter before spending your time.",
      },
    ],
    ctaTitle: "15 minutes to review how a taxpayer sees you today",
    ctaBody:
      "I'll tell you what your current presence communicates about your credential — and what it doesn't.",
  },

  // ────────────────────────────────────────────────────────────
  cpas: {
    navLabel: "CPAs",
    navHint: "Advisory, higher-ticket clients and referrals",
    icon: "briefcase",
    meta: {
      title: "Websites & Growth Systems for CPA Firms | ProCode Dev",
      description:
        "Website, acquisition and intake for small and mid-size CPA practices in the U.S. Position advisory and higher-value services, filter the client who actually fits, and turn a referral into a digital experience worthy of your fees.",
    },
    heroEyebrow: "// cpas",
    heroTitleA: "Digital growth systems for",
    heroHighlight: "CPA practices",
    heroSubtitle:
      "You charge professional-firm fees. If your digital presence doesn't match, every referral who looks you up before calling arrives already questioning your price.",
    intro:
      "Website, professional authority, intake and acquisition for small and mid-size CPA practices across the United States.",
    painTitle: "Where a CPA practice leaks",
    painSubtitle:
      "The problem is rarely a shortage of work. It's the mix of the work and the process for getting it.",
    pains: [
      "100% of the business comes by referral, so growth depends on luck instead of a system.",
      "The referral looks you up on Google before calling, finds a 2016 website, and arrives doubting your fees.",
      "Your time goes to low-value compliance while advisory — what you're best paid for and best at — isn't communicated anywhere.",
      "You get inquiries from clients who don't fit your practice and can't filter them without looking rude.",
      "Going from «I'm interested» to «signed engagement letter» takes weeks of back-and-forth email.",
    ],
    systemTitle: "What I build for a CPA firm",
    systemSubtitle:
      "Less volume, better client, less friction between interest and engagement.",
    system: [
      {
        icon: "briefcase",
        title: "Positioning by specialty and industry",
        description:
          "Restaurants, construction, e-commerce, medical practices, real estate. A firm that says who it works for charges more than one that says it works for everyone — and shows up in the searches that convert.",
      },
      {
        icon: "trending-up",
        title: "Advisory up front, not buried under «services»",
        description:
          "Tax planning, fractional CFO, financial analysis and consulting structured as their own offer, with their own page and process. That's the difference between billing by hour and billing by value.",
      },
      {
        icon: "clipboard-check",
        title: "Intake that filters before the first meeting",
        description:
          "Entity type, approximate revenue, accounting software, services needed and whether they already have an accountant. The one who doesn't fit, you know before booking; the one who does arrives with context ready.",
      },
      {
        icon: "shield",
        title: "Credentials and professional proof in plain sight",
        description:
          "State license, years in practice, memberships, specializations and industry cases. It's what holds your price up while the prospect compares three firms in three browser tabs.",
      },
      {
        icon: "workflow",
        title: "From interest to engagement without twenty emails",
        description:
          "Connected scheduling, documents requested automatically and structured follow-up. The firm that responds first and in order wins the client, even when the other one is just as good.",
      },
    ],
    cycleTitle: "A CPA firm's year",
    cycleBody:
      "Your seasonality is real, but gentler than a preparer's. The opportunity is using the quiet months to sell advisory to the base you already have.",
    cycleMonths: [
      {
        label: "Jan – Apr",
        note: "Compliance at peak; the system absorbs inquiries for you.",
      },
      {
        label: "May – Aug",
        note: "Advisory, planning and business-client acquisition.",
      },
      { label: "Sep – Oct", note: "Extensions and entity-cycle closeouts." },
      {
        label: "Nov – Dec",
        note: "Year-end tax planning: the highest-margin sale of the calendar.",
      },
    ],
    offerTitle: "Higher-value services worth positioning",
    offerSubtitle:
      "You can already offer all of this. The question is whether your digital presence communicates it, or leaves you looking like the CPA who does returns.",
    offers: [
      "Tax planning and year-end projections",
      "Fractional CFO and monthly financial guidance",
      "Entity selection and restructuring (LLC, S-Corp, C-Corp)",
      "Financial statements and lending support",
      "Due diligence on business purchases and sales",
      "Payroll advisory and multi-state compliance",
    ],
    faqTitle: "Questions from CPA firms",
    faq: [
      {
        question: "I already have enough clients. Why would I want this?",
        answer:
          "Almost no established practice needs more clients: it needs better ones. The system exists so the profile you want is the one that arrives, so the wrong fit filters itself out, and so administrative time per client drops. If your constraint is capacity rather than demand, this shows up in margin before it shows up in volume.",
      },
      {
        question: "How much of this can live in my current software?",
        answer:
          "Quite a lot. I work on top of what you already use — client portal, prep software, calendar, CRM — and connect the site to it. The point isn't switching tools: it's that they stop being disconnected from each other.",
      },
      {
        question: "Doesn't publishing prices hurt a CPA practice?",
        answer:
          "For advisory and complex compliance we usually don't publish a final price: we publish reference ranges or a starting price per service. It filters bargain hunters without committing you, and it avoids the 40-minute call that ends in «that's more than I expected».",
      },
    ],
    ctaTitle: "15 minutes to see what your firm is communicating",
    ctaBody:
      "I'll review how a referral sees you today when they look you up before calling — and what would change that.",
  },

  // ────────────────────────────────────────────────────────────
  bookkeepers: {
    navLabel: "Bookkeepers",
    navHint: "Recurring revenue, monthly clients and cleanups",
    icon: "calculator",
    meta: {
      title:
        "Websites & Client Acquisition for Bookkeepers | ProCode Dev",
      description:
        "Website, acquisition and intake for bookkeepers in the United States. Sell monthly bookkeeping as a subscription, capture cleanups and catch-ups, and win recurring clients instead of one-off jobs. Public pricing from $349 USD.",
    },
    heroEyebrow: "// bookkeepers",
    heroTitleA: "Digital growth systems for",
    heroHighlight: "bookkeepers",
    heroSubtitle:
      "Yours is the only service in the whole niche that bills twelve times a year. That turns every new client into recurring revenue — and makes it worth building the system once.",
    intro:
      "Website, acquisition and intake for bookkeepers and monthly accounting services across the United States.",
    painTitle: "What holds a bookkeeper back",
    painSubtitle:
      "Selling monthly bookkeeping is different from selling a return: it isn't a transaction, it's a relationship.",
    pains: [
      "You bill hourly or per job, when your service is naturally a monthly subscription.",
      "The business owner doesn't know what «bookkeeping» includes, so they compare your price to a $30/month software.",
      "Cleanups and catch-ups — the best paid and most urgent work — aren't positioned anywhere.",
      "You take on clients with eighteen months of mess for the price of a normal month, because there was no way to qualify it up front.",
      "A tax preparer sends you referrals, but there's nothing in your presence that makes recommending you easy.",
    ],
    systemTitle: "What I build for a bookkeeper",
    systemSubtitle:
      "Everything points at the same goal: turning scattered inquiries into clients who pay every month.",
    system: [
      {
        icon: "repeat",
        title: "Monthly packages, not hourly rates",
        description:
          "Three tiers with what each includes and a visible starting price. A subscription gets sold as a subscription: if the client doesn't see the package, they negotiate hourly and always downward.",
      },
      {
        icon: "clipboard-check",
        title: "Intake that qualifies the mess",
        description:
          "Months unreconciled, current software, number of accounts, transaction volume and entity type. You know whether it's a three-month cleanup or a two-year one before quoting.",
      },
      {
        icon: "search",
        title: "Cleanups and catch-ups as their own service",
        description:
          "Their own page, their own entry price and their own form. It's the most urgent work for the client, the best paid, and the natural doorway into a monthly contract.",
      },
      {
        icon: "handshake",
        title: "Partnerships with preparers and CPAs",
        description:
          "A page designed so a tax preparer can hand you their bookkeeping client without friction: what you do, what you don't, and how you coordinate. Professional referral is your most profitable channel.",
      },
      {
        icon: "trending-up",
        title: "Reporting that justifies the monthly fee",
        description:
          "A client who receives something every month renews. I structure delivery and communication so your work is visible, not a silent charge on a card.",
      },
    ],
    cycleTitle: "The bookkeeper depends least on the calendar",
    cycleBody:
      "That's exactly your edge: while the rest of the niche lives on fourteen weeks, you can build stable revenue across twelve months. The calendar only changes where the acquisition opportunity sits.",
    cycleMonths: [
      {
        label: "Jan – Apr",
        note: "The disorganized discover their problem while filing.",
      },
      {
        label: "May – Aug",
        note: "Peak season for cleanups and new monthly contracts.",
      },
      {
        label: "Sep – Oct",
        note: "Extensions: another wave of businesses with messy books.",
      },
      {
        label: "Nov – Dec",
        note: "Year-end close and selling the monthly plan for January.",
      },
    ],
    offerTitle: "Services that sustain recurring revenue",
    offerSubtitle:
      "Each one can be packaged and presented as part of a monthly plan instead of a one-off job.",
    offers: [
      "Monthly bookkeeping and bank reconciliation",
      "Cleanup and catch-up of months or years behind",
      "Payroll processing",
      "Accounts payable and receivable",
      "Monthly financial reports with the numbers explained",
      "QuickBooks or Xero migration and setup",
    ],
    faqTitle: "Questions from bookkeepers",
    faq: [
      {
        question: "Should I publish my monthly pricing or quote privately?",
        answer:
          "Publish at least a starting price per package. In monthly bookkeeping, «request a quote» makes the business owner assume it's expensive and keep looking. A «from $X per month» filters out the people who were never going to pay and raises the quality of the inquiries that do arrive.",
      },
      {
        question: "I work with clients in several states. Does that change anything?",
        answer:
          "It changes the acquisition approach. Instead of betting everything on a local Google Business Profile, we work content by industry and by software — restaurants, contractors, e-commerce, QuickBooks Online — which is how someone searches when they don't need you in their city.",
      },
      {
        question: "How do I avoid cleanups that turn into nightmares?",
        answer:
          "With intake. The form asks months unreconciled, number of accounts and monthly volume before you book. That lets you give an honest range from the first message, instead of discovering the real size of the problem after you've accepted the job.",
      },
    ],
    ctaTitle: "15 minutes to shape your monthly offer",
    ctaBody:
      "We'll review how you're charging today and what it would look like packaged as a subscription.",
  },

  // ────────────────────────────────────────────────────────────
  taxResolution: {
    navLabel: "Tax Resolution",
    navHint: "Urgent cases, IRS debt and high ticket",
    icon: "scale",
    meta: {
      title: "Marketing & Websites for Tax Resolution Firms | ProCode Dev",
      description:
        "Website, acquisition and intake for tax resolution firms in the United States. Capture taxpayers with IRS debt at the moment of urgency, qualify the case before the consultation and respond in minutes, not days.",
    },
    heroEyebrow: "// tax resolution",
    heroTitleA: "Digital growth systems for",
    heroHighlight: "tax resolution firms",
    heroSubtitle:
      "Your client isn't planning: they're scared, holding an IRS letter, searching at eleven at night. The firm that answers first — and looks capable of fixing it — wins.",
    intro:
      "Website, acquisition, qualification and intake for tax resolution and IRS representation firms across the United States.",
    painTitle: "Tax resolution is lost on speed",
    painSubtitle:
      "It's the highest-ticket segment in the niche and the most competitive. The difference is almost never technical.",
    pains: [
      "A taxpayer with an IRS letter contacts three firms the same night and hires the first one that answers.",
      "You compete against national firms with enormous ad budgets and «pennies on the dollar» promises.",
      "You get inquiries from people who owe $800 and qualify for nothing, and they cost you the same time as a $50,000 case.",
      "The prospect can't tell a serious firm from the ones on radio ads, so they distrust all of them.",
      "The case comes in by phone at 9 p.m. and there's nothing set up to capture it after hours.",
    ],
    systemTitle: "What I build for a resolution firm",
    systemSubtitle: "Speed, qualification and credibility. In that order, here.",
    system: [
      {
        icon: "scale",
        title: "One page per problem type",
        description:
          "Wage garnishment, bank levy, lien, CP2000, accrued debt, unfiled years, Offer in Compromise, payment plans, innocent spouse. The taxpayer searches the name of their problem, not «tax resolution».",
      },
      {
        icon: "clipboard-check",
        title: "Qualification before it costs you an hour",
        description:
          "Approximate debt, notice type, unfiled years and whether there's an active levy. The case that doesn't qualify gets a useful answer without consuming your calendar; the one that does arrives with a file.",
      },
      {
        icon: "zap",
        title: "Immediate response, at any hour",
        description:
          "Automatic confirmation on submit, instant alert to your team and a WhatsApp or call option. In a segment where the prospect contacts three firms, answering in five minutes is half the sale.",
      },
      {
        icon: "shield",
        title: "Credibility against inflated promises",
        description:
          "Verifiable credentials, an honest explanation of what can and can't be achieved, and real reviews. Separating yourself from the radio ad is your strongest sales argument.",
      },
      {
        icon: "target",
        title: "High-intent acquisition",
        description:
          "SEO by notice type and, when budget justifies it, campaigns with a dedicated landing page and cost tracked per signed case — not per click.",
      },
    ],
    cycleTitle: "When the cases arrive",
    cycleBody:
      "Tax resolution follows the IRS calendar, not April 15. Knowing when notices go out means having acquisition ready before the wave.",
    cycleMonths: [
      {
        label: "Jan – Apr",
        note: "They discover the debt while filing this year's return.",
      },
      { label: "May – Jul", note: "Notices and letters from last season land." },
      {
        label: "Aug – Oct",
        note: "Collection actions escalate: liens and levies.",
      },
      {
        label: "Nov – Dec",
        note: "Closing agreements before the next tax year.",
      },
    ],
    offerTitle: "Services worth positioning separately",
    offerSubtitle:
      "Each has its own search, its own urgency and its own ticket. Blending them into one page costs cases.",
    offers: [
      "Wage garnishment and bank levy release",
      "IRS payment plans and installment agreements",
      "Offer in Compromise when the case genuinely qualifies",
      "Penalty abatement for reasonable cause",
      "Unfiled years and return reconstruction",
      "Audit representation and notice response",
    ],
    faqTitle: "Questions from resolution firms",
    faq: [
      {
        question: "Should I publish prices in tax resolution?",
        answer:
          "Not the final price — every case differs — but yes, a starting price for the investigation or initial consultation. It's what separates you from firms that hide everything until they have you on the phone, and it filters out someone looking to resolve $500 of debt.",
      },
      {
        question: "Is advertising worth it in this segment?",
        answer:
          "Sometimes, but only with the system built first. Paying for clicks that land in a form nobody answers within two hours is burning budget. Intake, qualification and automatic response first; campaigns after, measured on cost per signed case rather than per lead.",
      },
      {
        question: "How do I compete with national TV firms?",
        answer:
          "By not competing on their ground. They win on volume and promise; you win on proximity, a verifiable credential, honesty about what can actually be achieved, and answering personally instead of through a call center. That can be communicated — and it's what a prospect burned by an ad is looking for.",
      },
    ],
    ctaTitle: "15 minutes to review your response speed",
    ctaBody:
      "We'll measure how long your firm takes to answer a new case today, and what can be automated this week.",
  },

  // ────────────────────────────────────────────────────────────
  accountingFirms: {
    navLabel: "Accounting Firms",
    navHint: "Multiple services, a team and multi-service operations",
    icon: "building",
    meta: {
      title: "Websites & Growth Systems for Accounting Firms | ProCode Dev",
      description:
        "Website, acquisition, intake and automation for accounting and multi-service firms in the U.S.: taxes, bookkeeping, payroll, ITIN, business formation and advisory. One page per service and a system that organizes the operation.",
    },
    heroEyebrow: "// accounting firms",
    heroTitleA: "Digital growth systems for",
    heroHighlight: "accounting firms",
    heroSubtitle:
      "You deliver six different services to four different client types, and all of it lives on a single page that says «accounting services». That's the problem, and it costs more than it looks.",
    intro:
      "Website, acquisition, intake and automation for accounting and multi-service firms across the United States.",
    painTitle: "The cost of being multi-service without structure",
    painSubtitle:
      "Your broad offer is a commercial advantage and a communication disadvantage. The second one is fixable without giving up the first.",
    pains: [
      "Taxes, bookkeeping, payroll, ITIN, business formation and notary all competing for attention on the same page.",
      "Each service has its own client and its own search, but there's a single URL for all of them: none ranks well.",
      "The client who arrives for an ITIN never learns you also do payroll — and they were the best candidate for it.",
      "With a team, messages land in personal WhatsApps and separate inboxes, and nobody knows what happened to each prospect.",
      "In season the volume is so high the operation runs on memory and goodwill instead of process.",
    ],
    systemTitle: "What I build for an accounting firm",
    systemSubtitle:
      "Organize the offer outward and the operation inward. Usually that's the same job.",
    system: [
      {
        icon: "layout",
        title: "One page per service, with its own search",
        description:
          "Individual taxes, business returns, bookkeeping, payroll, ITIN, LLC formation, notary. Each ranks on its own and speaks to its own client, instead of splitting a single page.",
      },
      {
        icon: "route",
        title: "Cross-sell paths between services",
        description:
          "Whoever arrives for an ITIN is a tax candidate; whoever arrives for business formation is a bookkeeping and payroll candidate. The system connects those paths instead of leaving them to someone remembering.",
      },
      {
        icon: "users",
        title: "One inbox for the whole team",
        description:
          "Every form, message and request lands in the same place, with assignment and status. No more «I thought you answered them» in March.",
      },
      {
        icon: "clipboard-check",
        title: "Different intake per service",
        description:
          "Each service asks for what it needs: documents for taxes, months unreconciled for bookkeeping, employee count for payroll. Nobody fills out a generic form that helps no one.",
      },
      {
        icon: "trending-up",
        title: "Reporting per service, not just per firm",
        description:
          "How many leads each service generated, which converted and where they came from. That's what tells you which line of business deserves next year's investment.",
      },
    ],
    cycleTitle: "A multi-service firm is never out of season",
    cycleBody:
      "That's the advantage of several lines: when one dips, another rises. What's usually missing is acquisition specific to whichever line the calendar is on.",
    cycleMonths: [
      {
        label: "Jan – Apr",
        note: "Taxes and ITIN at peak; the system holds up the operation.",
      },
      { label: "May – Aug", note: "Bookkeeping, payroll and business formation." },
      { label: "Sep – Oct", note: "Extensions, entity closings and cleanup." },
      { label: "Nov – Dec", note: "Year-end planning and season prep." },
    ],
    offerTitle: "Services that usually coexist in a firm",
    offerSubtitle:
      "Each deserves its own page, its own form and its own way of being measured.",
    offers: [
      "Individual and business tax returns",
      "Bookkeeping and monthly accounting",
      "Payroll and labor compliance",
      "ITIN and tax identification filings",
      "LLC, S-Corp and business registration",
      "Notary, apostilles and administrative services",
    ],
    faqTitle: "Questions from accounting firms",
    faq: [
      {
        question: "Isn't one page that says everything better?",
        answer:
          "It's easier to build and worse for the business. A single page has to rank for searches that have nothing in common, and ends up ranking for none. With a page per service, each line competes in its own search and you can see which one brings clients and which doesn't.",
      },
      {
        question: "We have a team. Does this complicate day-to-day work?",
        answer:
          "It simplifies it, when built properly. Forms land in one place with a status and an assigned owner, instead of scattering across personal WhatsApps and separate inboxes. In season that difference matters more than any design change.",
      },
      {
        question: "Can we start with just one service line?",
        answer:
          "Yes, and it's usually the sensible move. We start with the line with the best margin or the one you most want to grow, measure what it produced over a full cycle, and replicate the structure with data in hand.",
      },
    ],
    ctaTitle: "15 minutes to organize your offer",
    ctaBody:
      "We'll review the services you deliver today and which ones justify their own page from day one.",
  },
};

export const segments: Record<Lang, SegmentDict> = { es, en };

export function getSegment(lang: Lang, key: SegmentKey): Segment {
  return segments[lang][key];
}
