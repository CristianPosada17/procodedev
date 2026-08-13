# Auditoría CRO — 18 hallazgos aplicados

Fecha: 13 de agosto de 2026
Base: auditoría CRO de procodedev.com (LIFT · MECLABS · Fogg · Cialdini)

Los 18 hallazgos están aplicados en ES y EN. Este documento registra **qué se
decidió** en cada uno, porque varias decisiones son de negocio y conviene poder
revertirlas con contexto.

---

## Decisiones que tomaste tú

| Tema | Decisión |
|---|---|
| Oferta de entrada (#1) | Diagnóstico gratuito de 15 min como única puerta. Asesoría $75 → paso 2 en /precios. Auditoría gratis de /servicios eliminada. |
| Moneda (#9) | MXN por defecto a tipo de cambio fijo **18 MXN/USD**, con toggle a USD. |
| Voz (#11) | Primera persona: Cristian Posada, desde Durango. |
| Prueba social (#5, #7) | Sin cifras aún: se hizo lo verificable (enlaces a sitios en vivo) y se dejó la estructura para las métricas. |

---

## Los 18, uno por uno

**#1 · Tres ofertas compitiendo → una** (crítico)
Fuera `AdvisoryBanner` del home y `FreeAudit` de /servicios. La Asesoría vive
solo en /precios con el badge «Paso 2 · Después del diagnóstico». FAQ reescrito
para explicar la escalera: llamada gratis → asesoría → proyecto.

**#2 · CTA promete agendar, la página entregaba redactar** (crítico)
`/contacto` ahora es: hero → Calendly → formulario colapsado en `<details>`.
Se eliminaron las 2.8 pantallas de scroll. También salió el `FinalCTA`, que
enlazaba a /contacto desde /contacto.

**#3 · Formulario cobrando el campo equivocado**
`message` ya no es `required`; `phone` sí. Placeholders concretos en los cuatro
campos («Ej: tengo un consultorio dental y quiero que agenden solos»).

**#4 · Cero imágenes del trabajo real en el home** (crítico)
Nuevo `ProofStrip.astro` con los 3 proyectos de cliente real y su screenshot,
antes de testimonios. Salió `CaseStudy` del home: ilustraba sin probar.

**#5 · Prueba social sin verificabilidad**
Cada testimonio con sitio en vivo enlaza a él («Ver su sitio · dominio ↗»).

**#6 · Demos mezclados con clientes**
`/portafolio` en dos grupos rotulados: «Clientes reales» y «Demos y conceptos»,
con nota explícita de que los demos no son clientes.

**#7 · Sin métricas de resultado**
Campo `result` por proyecto en `src/i18n/ui.ts`, vacío. El bloque se renderiza
solo si tiene texto. **Pendiente de tus datos** — es la palanca de mayor impacto
a 90 días según la auditoría.

**#8 · Cifras del hero sin fuente**
Eliminados `+248% leads` y `9.8% conversión estimada`. En su lugar, una lista de
lo que el cliente recibe. También se retiró el script de contadores, ya muerto.

**#9 · Precios en USD para audiencia mexicana**
Toggle MXN/USD en /precios, MXN por defecto. Sin JS se ven ambas monedas.
Escala: Asesoría $1,390 · Landing $5,490 · Sitio 4–6 $10,900 · Sitio 8–12 desde
$21,900 · Soporte $1,090/mes. Extras convertidos también.

**#10 · El home nunca mencionaba precio**
Nuevo `PriceAnchor.astro`: «desde $5,490 MXN» con enlace a /precios.

**#11 · Voz inconsistente (agencia vs. persona)**
Todo el copy en primera persona. Nuevo `Founder.astro`: «No es una agencia. Soy
yo.» con tu foto (`public/images/cristian-posada.jpg`), nombre y ciudad. Si el
archivo faltara, el bloque cae a tus iniciales sin romperse.

**#12 · Contradicción en la nota de precios**
Reescrita: «Estos son los precios reales, no un rango de referencia… Si tu
proyecto se sale de ese alcance, te lo digo antes de empezar.»

**#13 · Doble hero en las 6 páginas**
`showHeading={false}` en Services, Portfolio, Pricing y Calendly cuando van bajo
un `PageHero`. El H2 de `CaseStudy` se reescribió para no repetir el H1 de
/portafolio.

**#14 · Hero invisible hasta que corre JS**
El eyebrow, H1, subtítulo, CTAs y badges del `Hero` y del `PageHero` salieron de
`.reveal`. Nada above-the-fold depende ya de JavaScript.

**#15 · Thumbnails dependientes de mshots**
Screenshots propios de los tres sitios, normalizados a 1200×600 (2:1, sin
deformar) en `public/images/proyecto-*.jpg`. Cero llamadas a terceros.

**#16 · Sin ubicación concreta**
Footer: «Durango, México · trabajo remoto con todo el país». Añadido
`geo.region=MX-DUR`, `PostalAddress` y `areaServed` al JSON-LD, y la ciudad al
`<title>` del home.

> ⚠️ El WhatsApp publicado sigue siendo **+52 614** (lada de Chihuahua), del
> eSIM de Telcel. Cuando lo cambies a una lada de Durango, se actualiza en un
> solo lugar: `CONTACT.whatsapp` y `CONTACT.whatsappDisplay` en
> `src/i18n/ui.ts`, más `telephone` en el JSON-LD de `src/layouts/Layout.astro`.
> Mientras tanto la lada no coincide con la ciudad — a la mayoría le da igual,
> pero conviene cerrarlo antes de empujar SEO local.

**#17 · WhatsApp con el mismo mensaje en las 6 páginas**
`waHref(page, lang)` en `src/i18n/ui.ts`: mensaje distinto para home, servicios,
portafolio, precios, contacto y blog, en ambos idiomas.

**#18 · Sin FAQ de objeciones donde se decide**
`FAQ.astro` acepta `variant="home"`: 4 objeciones (precio, compromiso, «no sé de
tecnología», «ya tengo página») justo antes del CTA final del home.

---

## Lo que falta y depende de ti

1. **Las cifras de resultado (#7).** Cuando tengas un número real de Fernanda o
   Trejo, llénalo en `result:` dentro de `src/i18n/ui.ts` y aparece solo.
2. **Verificar el tipo de cambio.** Los precios MXN están fijos a 18 MXN/USD
   (spot ~17.07 al 13 ago 2026). Si el peso se mueve mucho, se ajusta en un solo
   lugar: la constante `FX_USD_MXN` y los campos `priceMxn`.

## Lo que conviene medir

Los quick wins tienen métrica asociada en la auditoría. Los tres primeros:

- **#2** citas agendadas / sesión en /contacto
- **#3** completado del formulario (start → submit)
- **#4** scroll depth ≥50% en el home y CTR hacia /portafolio

GA4 y Meta Pixel ya están instalados; el evento `generate_lead` sigue
disparándose desde el formulario.
