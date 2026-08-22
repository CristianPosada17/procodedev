# Reposicionamiento a dueños de negocio — agosto 2026

Sustituye al enfoque de nicho fiscal descrito en
`REPOSICIONAMIENTO-SISTEMAS-2026-08.md`. Ese documento sigue siendo útil para
entender el sistema (las seis piezas, el recorrido del cliente, la escalera de
planes mensuales); lo que cambia aquí es **a quién se le habla**.

## Qué cambió

| | Antes | Ahora |
|---|---|---|
| Público | Preparadores de impuestos, EAs, CPAs, bookkeepers y despachos contables en EE. UU. | Dueños de negocio y pymes, con preferencia por el negocio hispano en EE. UU.; México como mercado secundario |
| Categoría | «Sistemas digitales de crecimiento para firmas fiscales y contables» | «Sistemas digitales de crecimiento para dueños de negocio» |
| Oferta de entrada | Revisión de Temporada / Pre-Season Review | **Revisión Express / Express Review** (mismo mecanismo: vídeo de 3 min dentro de 24 h + llamada de 15 min) |
| Urgencia | «Última fecha de contratación: 1 de diciembre» | «Tomo 4 proyectos al mes para que cada uno reciba atención real» |
| Páginas de nicho | 7 páginas fiscales × 2 idiomas | 5 giros × 2 idiomas |
| Precios | — | **Sin cambios.** Landing $349, sitio 4–6 páginas $899, 8–12 desde $1,499, Diagnóstico $149, Soporte $79/mes, Crecimiento+ $349/mes, Web+Marketing+SEO desde $1,100/mes |

## Arquitectura de contenido

```
/negocios              · /en/industries              ← hub de giros
├── /contratistas             · /en/contractors
├── /salud-y-bienestar        · /en/health-and-wellness
├── /servicios-profesionales  · /en/professional-services
├── /inmobiliarias            · /en/real-estate
└── /contabilidad-e-impuestos · /en/accounting-and-tax
```

El giro de contabilidad e impuestos **engloba** lo que antes eran seis páginas
separadas (preparadores, EAs, CPAs, bookkeepers, resolución fiscal y despachos
contables). Sigue siendo un nicho fuerte, pero ahora es un giro más entre cinco.

### Redirecciones

Las 14 URLs viejas están declaradas en `astro.config.mjs` y redirigen a la
página de contabilidad e impuestos del idioma correspondiente. Ninguna devuelve
404. Los archivos `.astro` que las servían se movieron a `_to_delete/`, pendiente
de borrarlos del repo (`git rm -r _to_delete` en local).

## Dónde vive cada cosa

- `src/i18n/ui.ts` — todo el copy común, en ES y EN. La clave de página `tax`
  pasó a llamarse `sectors`; `SEGMENT_KEYS` ahora lista los cinco giros.
- `src/i18n/segments.ts` — el copy propio de cada giro: dolores, sistema,
  calendario, servicios recurrentes y FAQ. Cinco entradas por idioma.
- `src/components/SectorsHub.astro` — el hub (antes `TaxNiche.astro`).
- `src/layouts/Layout.astro` — JSON-LD, keywords y Open Graph, ya sin
  vocabulario fiscal.
- `public/sitemap.xml` — regenerado con las URLs nuevas (36 entradas).

## Prueba social

El portafolio y los testimonios no se inventaron: se mantienen los proyectos
reales que ya estaban publicados. Cuando estén listos los sitios nuevos
(constructora → contratistas, contabilidad/marca personal → despachos), se
agregan a `portfolio.projects` en `ui.ts` con su `badge` de giro para que cada
página de segmento tenga un caso del mismo oficio.

## Verificado

- `npm run build` completo: 37 páginas, sin errores.
- 61 archivos `.astro` sin errores de sintaxis.
- `tsc --noEmit --strict` limpio sobre `ui.ts` y `segments.ts`.
- Sin residuos de vocabulario fiscal fuera de la página de contabilidad.
