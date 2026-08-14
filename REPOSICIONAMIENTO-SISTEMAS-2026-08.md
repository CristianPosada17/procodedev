# Reposicionamiento a «Digital Growth Systems» — agosto 2026

Fecha: 14 de agosto de 2026
Base: el reposicionamiento de nicho del 14 de agosto (ver `REPOSICIONAMIENTO-2026-08.md`)

El sitio pasa de **«páginas web para despachos de impuestos»** a
**«sistemas digitales de crecimiento para firmas fiscales y contables»**.

No es un cambio de copy: es un cambio de categoría. Una página es un
entregable y se compara por precio contra Wix y contra Fiverr. Un sistema
—captación, intake, citas, seguimiento, medición— se compara contra el coste
de no tenerlo, y deja techo para crecer hacia automatización, IA y marketing
sin romper el posicionamiento.

**La frase:**

> ProCode builds digital growth systems for tax & accounting firms —
> connecting your website, client acquisition, intake, scheduling and
> follow-up so your firm can win and serve more clients with less manual work.

En español: *ProCode construye sistemas digitales de crecimiento para firmas
fiscales y contables, conectando captación, sitio web, intake, citas y
seguimiento para generar y atender más oportunidades con menos trabajo
manual.*

---

## 1 · Del nicho estrecho al nicho completo

Antes: preparadores de impuestos. Ahora: **Tax & Accounting Firms** —
preparadores de impuestos, Enrolled Agents, CPAs, bookkeepers, firmas de
resolución fiscal y despachos contables.

Ampliar el nicho normalmente diluye el mensaje. Aquí no lo hace porque el
nicho no se ensancha en el home: se ensancha **hacia abajo**, con una página
por oficio. El prospecto no se busca a sí mismo por la categoría («firmas
fiscales»), se busca por su título («enrolled agent website»). Seis páginas
compiten en seis búsquedas distintas; una sola página no compite en ninguna.

### Arquitectura

```
/impuestos · /en/tax-pros            ← hub del nicho
├── /preparadores-de-impuestos       · /en/tax-professionals
├── /enrolled-agents                 · /en/enrolled-agents
├── /cpas                            · /en/cpas
├── /bookkeepers                     · /en/bookkeepers
├── /resolucion-fiscal               · /en/tax-resolution
└── /despachos-contables             · /en/accounting-firms
```

Las URLs del hub **no** se renombraron. Ya están indexadas y el coste de
romperlas supera cualquier ganancia semántica de llamarlo
`/tax-accounting-firms`.

**Regla para el contenido de segmento:** si el copy de dos páginas fuera
intercambiable, la culpa sería del texto y las dos deberían fusionarse. Por
eso cada una tiene su propio dolor, su propio calendario fiscal, sus propios
servicios recurrentes y su propia FAQ. Ese es también el criterio con el que
Google decide si son seis páginas o una duplicada seis veces.

Las seis viven en `src/i18n/segments.ts` y se renderizan con una sola
plantilla, `SegmentPage.astro`.

---

## 2 · Las cinco capas de diferenciación

Sustituyen a los seis puntos de `why` («velocidad», «móvil», «mensajes
claros», «integraciones útiles»), que podría firmar cualquiera de los
202.692 competidores del mercado.

1. **Diseñamos alrededor del ciclo fiscal, no alrededor de páginas.**
   Temporada alta, extensiones, bookkeeping recurrente, resolución, advisory
   y clientes que vuelven cada año.
2. **Conectamos marketing con operación.** Landing → formulario → agenda →
   CRM → seguimiento → email/SMS/WhatsApp → analítica.
3. **Convertimos una práctica estacional en negocio de todo el año.**
   Estructurar y presentar los servicios que la firma ya podría dar.
4. **Medimos negocio, no métricas de vanidad.** Leads, llamadas, citas y
   fuente de adquisición. No «1,400 visitantes este mes».
5. **Bilingüe como ventaja, no como producto.** Una ventaja de ejecución,
   no toda la marca.

---

## 3 · La sección del recorrido del cliente

`GrowthSystem.astro`, nueva en el home. Cinco etapas, cada una con qué se
construye en ella:

**Te encuentran** → **Te creen** → **Te contactan** → **Te agendan** →
**Se quedan**

(Prospecto → servicio correcto → confianza → lead → intake → cita →
seguimiento → cliente → retención → recurrente/referido.)

Sin esta sección, «sistemas digitales de crecimiento» es una frase de
marketing. Con ella es una descripción de qué se entrega y en qué orden.

`ValueStrip` pasó de cuatro valores genéricos a las **seis capacidades** del
sistema, que son la traducción visual de la frase de marca: sitio web,
captación, intake, automatización, seguimiento y analítica.

---

## 4 · Fuera los emojis

Los iconos eran emojis (🎯 🛡 ⚡ 📱 ✍ 🔗 💬 📝 📅 📊 ✉️ 📈 🗓️ 🌐) y glifos
tipográficos (▣ ◎ ⚙ ✎ ◈ ✦ ↗ ✓ ☰ ◆). Un emoji se dibuja distinto en cada
sistema operativo, no hereda el color de la marca, y en un sitio que se vende
a firmas contables lee como plantilla, no como firma.

Ahora hay un componente `Icon.astro` con ~45 iconos SVG inline de trazo que
heredan `currentColor`. Los nombres válidos viven en `icon-names.ts`, fuera
del `.astro`, porque el compilador de Astro no admite `export type` en el
frontmatter.

También cambiaron:

- Las siglas «IG / IN / FB» del footer → logotipos reales de marca.
- El botón de WhatsApp y la barra móvil → el mismo icono desde el componente,
  en vez de tres copias del `<path>` pegadas a mano.
- El «Hola Cristian 👋» de los ~20 mensajes precargados de WhatsApp →
  «Hola Cristian,».

---

## 5 · Proyecto destacado

El bloque `caseStudy` llevaba meses titulado «proyecto destacado» sin
destacar ninguno: describía en abstracto lo que lleva dentro un buen sitio.

Ahora es **cristianposada.com**, con captura, enlace en vivo, el problema que
resolvía, las cinco decisiones de construcción y el stack. Las tres cifras
son verificables abriendo el sitio (6 secciones, 3 proyectos conectados,
0 formularios que mueren en un correo). No hay métricas de conversión
porque no hay analítica publicable de ese proyecto, y una cifra inventada
resta más credibilidad de la que suma.

Vive en `/portafolio` y `/en/portfolio`.

---

## 6 · Páginas legales

`/aviso-de-privacidad` · `/en/privacy-policy`
`/terminos-y-condiciones` · `/en/terms-of-service`

Los dos enlaces del footer apuntaban a `#`. Un enlace legal roto no es un
detalle cosmético: es lo primero que revisa un contribuyente antes de subir
documentos fiscales a un formulario.

El contenido describe lo que el sitio hace **realmente**: Web3Forms, Google
Analytics 4, Meta Pixel, Calendly, WhatsApp y el proveedor de hosting. Si se
añade o quita una herramienta, se actualiza `src/i18n/legal.ts` — esa es la
única razón por la que el texto vive en un archivo de datos.

Los términos incluyen dos cláusulas que importan en este nicho: **ProCode no
presta servicios fiscales, contables ni legales**, y **no se garantizan
posiciones en Google ni un número de clientes**.

> ⚠️ El texto está redactado a partir de cómo opera el negocio, no es una
> opinión legal. Antes de una revisión formal —CCPA/CPRA si llega tráfico de
> California, o la LFPDPPP mexicana— conviene que lo mire un abogado.

---

## 7 · SEO

- **Metadatos** reescritos en las 6 páginas base + 12 de segmento + 4 legales.
- **Keywords** al nicho nuevo: `digital growth systems for tax firms`,
  `enrolled agent website`, `CPA firm website`, `bookkeeper website`,
  `tax resolution marketing`, `accounting firm website`.
- **JSON-LD** ampliado:
  - `ProfessionalService` con `slogan`, siete `serviceType` y `knowsAbout`
    con los seis oficios.
  - `BreadcrumbList` en las páginas de segmento (Home → Firmas fiscales →
    oficio). Es lo que evita que Google trate las seis como landings sueltas
    compitiendo entre sí.
  - `Service` por segmento, con `offers` apuntando a `/precios`.
  - `FAQPage` con las preguntas propias de cada oficio (`faqItems` en el
    Layout tiene prioridad sobre `faqVariant`).
- **Sitemap** regenerado: 28 URLs con hreflang recíproco en las 14 parejas,
  más blog.
- **Enlazado interno**: el hub lista las seis páginas hijas, el footer las
  repite en todas las páginas del sitio y el menú las agrupa en un
  desplegable.

---

## 8 · Navegación

Trece enlaces en una barra no caben. «Firmas fiscales» pasa a ser un
desplegable con los seis oficios — y **sigue siendo un enlace real al hub**,
no solo un disparador de menú. En móvil es un `<details>`, que no necesita JS
y no se queda abierto al navegar.

---

## 9 · Home: espacio en blanco

El hero tenía `lg:pb-24` y empujaba la tira de etiquetas animada fuera de la
primera pantalla, dejando un hueco visible. Ahora:

| Elemento | Antes | Ahora |
|---|---|---|
| Hero | `pb-10 pt-6 lg:pb-24 lg:pt-16` | `pb-6 pt-6 lg:pb-10 lg:pt-14` |
| Marquee | `py-5 lg:py-8` | `pb-6 pt-2 lg:pb-8 lg:pt-3` |
| ValueStrip | `py-8 lg:py-12` | `pb-8 pt-2 lg:pb-12 lg:pt-4` |

---

## Pendientes que siguen dependiendo de ti

Los cuatro de `REPOSICIONAMIENTO-2026-08.md` siguen abiertos (teléfono de
EE. UU., un caso real en el oficio, métricas de resultado, blog en inglés).
Se suman:

1. **Contenido por oficio en el blog.** Las seis páginas de segmento ahora
   piden artículos que las alimenten: «qué es un Enrolled Agent y por qué te
   conviene», «cuánto cuesta un cleanup de bookkeeping», «qué hacer cuando
   llega una carta CP2000». Cada uno enlaza a su página de segmento.
2. **Revisión legal.** Ver la advertencia del punto 6.
3. **Demostrar el intake.** Todo el posicionamiento nuevo se apoya en
   «intake, automatización y seguimiento», pero el sitio propio todavía solo
   tiene un formulario de contacto. El mejor caso de estudio sería
   procodedev.com implementando lo que vende.
