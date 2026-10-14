# Medición del sitio (GA4 + Meta Pixel + Search Console)

Referencia rápida. La guía completa, con los pasos pendientes en cada panel,
está en el artefacto **«Mapa de medición ProCode»**.

## Dónde vive cada cosa

| Archivo | Qué hace |
|---|---|
| `src/lib/measurement.ts` | IDs de GA4 / Pixel, regiones con consentimiento previo, `content_group` por página |
| `src/components/Analytics.astro` | Va en `<head>`: Consent Mode v2, arranque de gtag y fbq, `debug_mode` |
| `src/components/AnalyticsEvents.astro` | Va al final del `<body>`: motor de eventos (clics, scroll, secciones, formularios, Calendly, blog) |
| `src/components/ConsentBanner.astro` | Banner ES/EN; propaga la decisión a Google y Meta |
| `src/i18n/consent.ts` | Copy del banner |

## Eventos que envía el sitio

`generate_lead`, `schedule_call`, `whatsapp_click`, `phone_click`, `email_click`,
`calendly_view`, `calendly_date_selected`, `calendly_click`, `express_review_click`,
`more_info_click`, `cta_click`, `nav_click`, `form_start`, `form_error`,
`scroll_depth`, `section_view`, `article_complete`, `outbound_click`,
`social_click`, `consent_decision`.

### Clics de conversión (oct 2026)

Cada tipo de clic tiene su propio evento para poder marcarlo como evento clave
en GA4 e importarlo a Google Ads por separado. Se decide por el destino del
enlace, no por la zona de la página:

| Evento | Qué lo dispara | Meta |
|---|---|---|
| `express_review_click` | Enlaces a `#agendar` (o `/contacto/#agendar`), a `/revision-express/`, o `data-cta` que termina en `-agendar` / `-reservar` | `ClicAgendar` |
| `more_info_click` | Enlaces a `#contacto`, `#solicitar`, `/contacto/` sin ancla, o `data-cta` que termina en `-info` | `ClicMasInfo` |
| `whatsapp_click` | `wa.me`, `api.whatsapp.com`, `web.whatsapp.com` | `ClicWhatsApp` |
| `calendly_click` | Enlaces a `calendly.com` y el botón que carga el calendario (`calendly-cargar`) | `ClicAgendar` |
| `phone_click` / `email_click` | `tel:` / `mailto:` | `ClicLlamada` / `ClicEmail` |

Todos llevan `cta_id`, `cta_text`, `cta_zone`, `section_id`, `cta_intent` y
(salvo teléfono y correo) el origen del tráfico. Antes de este cambio
«Agendar» y «Más información» salían como `cta_click` genérico (y «Más
información» del header como `nav_click`), así que no se podían separar.

Un clic que cambia de página antes de que gtag.js haya cargado se guarda en
`sessionStorage` y se envía en la página siguiente con `replayed: 1`; antes
se perdía.

### Google Ads

Opción A (sin código): vincular GA4 con Google Ads y marcar como evento clave
`schedule_call`, `generate_lead`, `whatsapp_click`, `express_review_click` y
`more_info_click`; luego importarlos en Ads → Objetivos → Conversiones.
Opción B (etiqueta directa): poner el ID `AW-…` en `MEASUREMENT.googleAds` y la
etiqueta de cada acción en `MEASUREMENT.googleAdsLabels`. Usar solo una de las
dos como conversión principal para no contar doble.

En `/formulario` (posventa, sin Pixel a propósito): `onboarding_inicio`,
`onboarding_enviado`, `onboarding_incompleto`.

Equivalencias en Meta: `Lead` (formulario enviado), `Schedule` (cita agendada),
`InitiateCheckout` (fecha elegida en Calendly) y los eventos personalizados
`ClicAgendar`, `ClicMasInfo`, `ClicWhatsApp`, `ClicLlamada` y `ClicEmail`. Cada uno lleva
`eventID` para poder deduplicar el día que se active la API de Conversiones.

**Clic ≠ contacto.** `whatsapp_click`, `phone_click` y `email_click` miden
intención: abrir WhatsApp no confirma que el mensaje se enviara ni que haya un
cliente. Solo `generate_lead` / `Lead` (formulario aceptado por Hostinger Reach) y
`schedule_call` / `Schedule` (cita confirmada en Calendly) cuentan como
contacto real. Hasta el 29 sep 2026 los clics iban a Meta como `Contact`; si
alguna conversión personalizada o campaña optimizaba con `Contact`, hay que
cambiarla en el Administrador de eventos.

## Cómo añadir un botón medido

Basta con ponerle `data-cta="identificador-estable"` al `<a>` o al `<button>`.
Los enlaces a WhatsApp, `tel:`, `mailto:` y `calendly.com` se detectan solos, sin
atributo. Si la intención no se deduce del destino, se fuerza con
`data-cta-intent="book" | "info" | "whatsapp" | "calendly"`. Para un evento a
medida desde cualquier script:

```js
window.pcdTrack('nombre_evento', { param: 'valor' }, { event: 'Lead' });
window.pcdAttribution(); // origen del lead (utm, referrer, primer contacto)
```

## Cómo depurar

`https://procodedev.com/?pcd_debug=1` imprime cada evento en la consola con el
prefijo `[pcd]` y enciende `debug_mode` de GA4 (visible en Administrar →
DebugView). Se apaga con `?pcd_debug=0`.

## Reglas

- Los IDs de medición no se escriben en componentes: van en `src/lib/measurement.ts`.
- Los parámetros nuevos no aparecen en los informes de GA4 hasta registrarlos
  como dimensión personalizada de ámbito *Evento*, y solo cuentan desde ese día.
- El formulario de onboarding no debe alimentar al Pixel: es posventa y
  ensuciaría los públicos similares.
