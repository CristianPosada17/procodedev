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
`calendly_view`, `calendly_date_selected`, `calendly_click`, `cta_click`, `nav_click`,
`form_start`, `form_error`, `scroll_depth`, `section_view`, `article_complete`,
`outbound_click`, `social_click`, `consent_decision`.

En `/formulario` (posventa, sin Pixel a propósito): `onboarding_inicio`,
`onboarding_enviado`, `onboarding_incompleto`.

Equivalencias en Meta: `Lead`, `Schedule`, `Contact`, `InitiateCheckout` y el
evento personalizado `ClicAgendar`. Cada uno lleva `eventID` para poder
deduplicar el día que se active la API de Conversiones.

## Cómo añadir un botón medido

Basta con ponerle `data-cta="identificador-estable"` al `<a>` o al `<button>`.
Los enlaces a WhatsApp, `tel:`, `mailto:` y `calendly.com` se detectan solos, sin
atributo. Para un evento a medida desde cualquier script:

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
