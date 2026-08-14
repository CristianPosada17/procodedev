# Reposicionamiento — agosto 2026

Fecha: 14 de agosto de 2026
Base: análisis de mercado completo (posterior a la auditoría CRO del 13 de agosto)

El sitio pasa de "desarrollo web genérico desde Durango para México" a
"páginas web y presencia en Google para despachos de impuestos latinos en
EE. UU.". Este documento registra **qué se decidió y por qué**, porque casi
todo son decisiones de negocio que conviene poder revertir con contexto.

---

## Decisiones que tomaste tú

| Tema | Decisión |
|---|---|
| Idiomas | Español en la raíz, inglés bajo `/en/`. El dueño del despacho latino lee español; el inglés queda para el cliente final bilingüe. No se invirtieron rutas: habría roto todas las URLs indexadas. |
| Oferta de entrada | Escalera. CTA principal = llamada gratis de 15 min en todo el sitio. El Diagnóstico de $149 aparece **solo** en `/precios` y `/en/pricing`, con el badge «Paso 2 · Después de la llamada». |
| Nicho | Home reposicionado al oficio + landing dedicada `/impuestos` y `/en/tax-pros`. Los servicios generales siguen visibles pero secundarios. |
| Modelo de cobro | Crecimiento+ es **mensual** ($349/mes). El Diagnóstico es **pago único** ($149), acreditable al proyecto. |

---

## 1 · Reprecio completo en USD

USD pasa a ser la moneda por defecto; MXN queda como opción en el toggle.

| Producto | Antes | Ahora |
|---|---|---|
| Landing Page | $299 | **$349** |
| Sitio web 4–6 páginas | $599 | **$899** |
| Sitio web 8–12 páginas | desde $1,199 | **desde $1,499** |
| Soporte web mensual | desde $59/mes | **desde $79/mes** |
| Diagnóstico de Presencia Digital | $75 (se llamaba «Asesoría») | **$149** |
| Plan Crecimiento+ | — | **$349/mes** (nuevo) |
| Web + Marketing + SEO | — | **desde $1,100/mes** (nuevo) |
| Página adicional | $199 | $199 (sin cambio) |
| Ajustes urgentes | $99 | $99 (sin cambio) |

**Regla de la equivalencia MXN:** USD × 18, redondeado hacia arriba a la
decena. No es un precio propio: es una conversión que el cliente puede
comprobar con una calculadora. Si se rompe esa regla, se cae el argumento de
«precios públicos sin sorpresa». El tipo de cambio vive en `FX_USD_MXN`
(`src/i18n/ui.ts`), fijado arriba del spot para absorber movimiento cambiario
sin retocar precios.

---

## 2 · Escalera mensual (techo de expansión)

Antes había **un solo** plan mensual, así que un cliente satisfecho no tenía a
dónde subir. Ahora son tres, en `pricing.monthly`:

1. **Soporte Web** — desde $79/mes. Mantiene viva la página.
2. **Crecimiento+** — $349/mes. Incluye lo anterior y añade Perfil de Empresa
   en Google, publicaciones, gestión de reseñas, SEO local y optimización para
   búsqueda con IA. Marcado como «Más recomendado».
3. **Web + Marketing + SEO** — desde $1,100/mes. Incluye lo anterior y añade
   campañas, SEO continuo y automatización de seguimiento.

Un cliente puede recorrer $79 → $349 → $1,100 sin cambiar de proveedor. Los
tres son sin contrato de permanencia: es uno de los cuatro diferenciadores.

**Reemplazó a** el bloque único `pricing.maintenance`, que ya no existe.

---

## 3 · Consolidación de las ofertas de entrada

El análisis encontró cuatro ofertas compitiendo con ocho etiquetas de botón
distintas. Ahora hay **una etiqueta en todo el sitio**: «Agendar llamada
gratis» / «Book a free call».

Qué se eliminó:

- **`FreeAudit.astro`** — borrado. Era la «auditoría gratis» en 24–48 h.
  También se borró su bloque `freeAudit` de `ui.ts` para que no vuelva.
- **`AdvisoryBanner.astro`** — borrado. Ya estaba fuera del home desde la
  auditoría CRO, pero seguía en el repo listo para reaparecer.
- **«Solicitar propuesta»** — el botón del mockup del hero ahora apunta a
  `/contacto`, igual que el resto.
- **La palabra «diagnóstico» para la llamada gratis.** Era una colisión de
  nombres: el producto de pago se llama Diagnóstico. La llamada gratis se
  llama ahora «llamada de 15 minutos», sin excepción.

---

## 4 · Mercado y nicho

- `CONTACT.city` → «Estados Unidos»; `location` del footer → atención remota.
- JSON-LD: fuera la `address` física de Durango (el servicio es remoto),
  `areaServed` con Estados Unidos primero, más `serviceType` y `audience`
  declarando el nicho. `priceRange` actualizado a `$349-$1499`.
- `og:locale` → `es_US` (antes `es_MX`) e `inLanguage` → `es-US`.
- `geo.region` → `US`. Keywords reescritas al nicho.
- **Blog:** los 9 posts cerraban con enlaces a anclas que no existen
  (`/#auditoria`, `/#precios`, `/#contacto`, `/#agendar`) vendiendo la
  auditoría gratis y el «diagnóstico sin compromiso». Todos reescritos a
  `/precios` y `/contacto` con la oferta actual. El post
  `cuanto-cuesta-una-pagina-web-negocio-pequeno.md` tenía precios en MXN que
  contradecían `/precios` por un factor de ~2.4x: actualizado a USD.

---

## 5 · Landing de nicho

`/impuestos` y `/en/tax-pros`, con el componente `TaxNiche.astro`:

- **Promesa:** dejas de perder los business returns contra el despacho que
  solo tiene mejor página.
- **Motivos para creer:** casos en el mismo oficio, precios públicos, todo en
  español por WhatsApp, reporte de contactos reales (no de visitas).
- **Frente a cada alternativa:** Wix, Fiverr, Hibu y agencia de $3,000/mes.
- **Calendario fiscal:** enero–abril decide el año; el copy lo reconoce.

Añadidas al nav, al footer, al sitemap y con hreflang recíproco.

---

## Pendientes que dependen de ti

1. **Teléfono mexicano.** El WhatsApp y el `telephone` del schema siguen
   siendo `+52 614 241 4255`. Para un prospecto en EE. UU. es una señal de
   fricción justo en el momento de contactar. Un número de EE. UU. (o un
   WhatsApp Business con número local) cerraría el último hueco del
   posicionamiento.
2. **Casos verificables en el oficio.** El diferenciador #1 de la propuesta de
   valor es «casos verificables en el mismo oficio y la misma región», pero
   el único proyecto fiscal del portafolio (`demo-taxpro`) está rotulado como
   demo, no como cliente. Un solo despacho real convertido en caso vale más
   que todo el copy de esta página.
3. **Métricas de resultado.** El campo `result` de cada proyecto en
   `src/i18n/ui.ts` sigue vacío (heredado del hallazgo #7 de la auditoría
   CRO). El bloque solo se renderiza si tiene texto.
4. **Blog en inglés.** El enlace `/blog` aparece en la navegación de ambos
   idiomas, pero el contenido es solo en español. Un visitante EN llega a
   contenido que no puede leer.
