# Plan de posicionamiento — septiembre de 2026

Auditoría y plan hechos el 7 de septiembre de 2026, después de que el sitio
llevara semanas sin aparecer en la primera página para sus términos objetivo.

## Diagnóstico: el SEO on-page no era el problema

El sitio ya cumplía todo lo que se mide desde dentro: 99 % de cobertura de
keywords en texto visible, JSON-LD completo, hreflang, canónicas, sitemap
manual, imágenes en AVIF/WebP, fuentes auto-hospedadas. Seguir puliendo eso
no habría movido una sola posición.

Lo que sí estaba fallando, comprobado con búsquedas reales:

1. **Los términos objetivo eran los equivocados.** En «desarrollo web para
   negocios agencia» la primera página es entera de agencias **españolas**
   (Neoattack, Wanatop, Dobuss, Xplora), dominios con más de una década.
   Aunque se llegara, sería tráfico de España: no es el cliente de ProCode.

2. **Faltaba el modificador geográfico.** En «diseño de páginas web para
   negocios hispanos en Estados Unidos» los que rankean son
   disenowebusa.com, agenciawebusa.com, agenciadigitalenusa.com,
   datosfera.us («New York, New Jersey y Florida»), cvsmotion.com
   (`/servicios-web-nj/`) y becerraweb.com
   (`/diseno-de-paginas-web-en-estados-unidos/`). **Todos son remotos, igual
   que ProCode. Todos rankean con la geografía en el título y en la URL.**

   La conclusión que hay que corregir: lo que no sirve es el SEO local *de
   Durango*. El eje geográfico *de mercado* es exactamente el mecanismo con
   el que rankea el 100 % de la competencia real. Trabajar en remoto no es
   un argumento en contra: ellos también son remotos.

3. **Nicho + geografía + español está desatendido.** En «marketing digital
   para contratistas» en EE. UU. rankean un **artículo de blog**
   (agenciamarketboost) y páginas geo (TechAdvisor Houston, JP Advertising
   Houston Texas). Ganable.

4. **Autoridad casi nula e indexación mínima.** `site:procodedev.com`
   prácticamente solo devuelve la portada. Un dominio joven sin enlaces
   entrantes no rankea nada competitivo por perfecto que esté el código.
   **Este es el cuello de botella real y no se arregla escribiendo código.**

Además: existe `procodedev.site` indexado («ProCode - Development»).
Cristian confirmó que **no es suyo**; queda fuera del plan, solo vigilar que
no confunda en búsquedas de marca.

## Decisiones tomadas

- **Mercado prioritario:** negocio hispano en Estados Unidos, en español.
- **Estados:** Texas, Florida y California.
- **Inglés:** se mantiene, pero con un ángulo distinto —la intención
  bilingüe (`bilingual web design`, `spanish speaking web designer`,
  `web design for hispanic owned businesses`)—, que es la misma audiencia
  buscando desde el otro idioma y con una fracción de la competencia.

## Hecho el 7 de septiembre

### On-page
- **H1 del home** pasó de «Tecnología que hace crecer tu negocio» (cero
  keywords) a «Diseño de páginas web para negocios en Estados Unidos y
  México».
- **H1 de /servicios/**: «Servicios de desarrollo web y marketing digital
  para negocios» (antes «Dos servicios, un solo responsable», que comunicaba
  tamaño en vez de capacidad).
- **H2 de la sección de servicios** y **H1 de marketing digital**
  reescritos con keywords.

### Ocho páginas de mercado nuevas
`/diseno-web-estados-unidos/` (hub) más `/diseno-web-texas/`,
`/diseno-web-florida/` y `/diseno-web-california/`, con sus equivalentes en
`/en/web-design-*`. Contenido en `src/i18n/markets.ts`.

Reglas que se aplicaron y **no se pueden romper al ampliar**:

1. **Nada de presencia local falsa.** No hay oficina, dirección ni teléfono
   en EE. UU., y las páginas lo dicen. El trabajo es remoto desde México.
2. **Contenido distinto de verdad por estado.** Medido: 23-24 % de
   solapamiento entre las tres (las páginas de giro, indexadas desde hace un
   año, están en 25-27 %) y **~61 % de texto exclusivo** por página.
3. **Cero cifras inventadas.** Solo hechos públicos: husos horarios,
   temporada de huracanes, qué estado licencia contratistas.
4. **Nada de asesoría legal.** Las licencias se mencionan como argumento de
   confianza en la web, nunca como orientación regulatoria.

### Técnico
- `areaServed` por estado en el nodo `Service` del JSON-LD.
- Sitemap de 40 a 48 URLs con hreflang.
- `llms.txt` con la sección «Dónde trabaja ProCode Dev».
- Menú y footer con el desplegable «Dónde trabajo» en las 49 páginas.
- Las páginas de mercado enlazan a las de giro y viceversa.

### Blog
Tres artículos del eje nuevo, y el blog queda en **12 artículos**:

- `marketing-digital-para-contratistas-hispanos-estados-unidos.md`, que ataca
  directamente la consulta donde hoy rankea un competidor.
- `pagina-web-bilingue-espanol-ingles-estados-unidos.md` (#3 de la lista de
  abajo). El SERP de la frase objetivo está ocupado por traductores y por
  blogs de constructores (Wix, Jimdo) escritos para España: no hay una sola
  pieza dirigida al dueño de negocio hispano en EE. UU. Es además el
  diferenciador de ProCode, así que la keyword y el argumento de venta son el
  mismo.
- `zona-de-servicio-google-varios-condados-texas-florida.md` (#4). Ahí el SERP
  es documentación de Google y agencias españolas. El ángulo ganable es el
  long tail «varios condados» aplicado a Texas y Florida, y complementa —sin
  canibalizar— el artículo genérico de Google Maps que ya existía.

Los tres se enlazan entre sí y con las páginas de mercado y de giro, para que
el blog deje de ser una lista de piezas sueltas y funcione como clúster.

Descartado tras revisar el SERP: «página web para agentes de bienes raíces en
Miami», porque quien busca eso es un comprador de vivienda, no un agente que
necesita web.

## Lo que falta, por orden de retorno

### Prioridad 1 — Indexación (esta semana, sin esto nada de lo demás cuenta)
- [ ] Verificar el dominio en **Google Search Console** y en **Bing Webmaster
      Tools**.
- [ ] Enviar `sitemap.xml` en ambos.
- [ ] Pedir indexación manual de las 12 URLs clave: home, los dos servicios,
      el hub de mercados y los tres estados, en ES y EN.
- [ ] Revisar el informe de Cobertura a los 15 días: cuántas de las 37
      indexables entraron de verdad.

### Prioridad 2 — Autoridad (el cuello de botella real, 3-6 meses)
Esto no es código. Es lo único que separa la página 15 de la página 1.

- [ ] **Crédito en el pie de los sitios entregados**: «Sitio por ProCode Dev»
      con enlace. Es el enlace más relevante que existe para una agencia web
      y ProCode ya tiene los proyectos.
- [ ] **Perfil de Empresa en Google de ProCode** como negocio de zona de
      servicio (sin dirección pública).
- [ ] Fichas en directorios de agencias: Clutch, DesignRush, Sortlist,
      GoodFirms, Semrush Agency Partners. Todas gratuitas en su nivel básico.
- [ ] Página de empresa en LinkedIn, y enlace desde Instagram y Facebook.
- [ ] Responder de verdad (sin spam) en grupos de Facebook y foros de
      contratistas y dueños de negocio hispanos en EE. UU.
- [ ] Un par de entrevistas o artículos invitados en medios de negocio
      hispano.

### Prioridad 3 — Blog con nicho + geografía (2 al mes)
Cada artículo persigue una frase concreta que sí se puede ganar. Orden
sugerido:

| # | Título | Frase objetivo |
|---|---|---|
| 1 | ✅ Marketing digital para contratistas hispanos en EE. UU. | marketing digital para contratistas hispanos usa |
| 2 | Cuánto cuesta una página web para un negocio en Estados Unidos | cuánto cuesta una página web en estados unidos |
| 3 | ✅ Página web bilingüe: por qué el traductor automático te cuesta clientes | página web bilingüe español inglés |
| 4 | ✅ Cómo aparecer en Google Maps si atiendes varios condados (Texas y Florida) | google maps zona de servicio varios condados |
| 5 | Cómo conseguir clientes para un negocio de remodelación en Houston | conseguir clientes remodelación houston |
| 6 | Perfil de Empresa en Google para contratistas, paso a paso | perfil de empresa en google para contratistas |
| 7 | ¿Vale la pena Google Ads para un negocio de servicios en California? | google ads para negocios de servicios california |
| 8 | Reseñas de Google: cómo pedirlas sin incomodar (con mensajes listos) | cómo pedir reseñas en google a mis clientes |
| 9 | Qué necesita la web de un despacho contable en Texas antes de temporada | página web para contadores en texas |
| 10 | Página web para agentes de bienes raíces en Miami | página web para agentes inmobiliarios miami |
| 11 | Cómo elegir agencia de diseño web si tu negocio es hispano en EE. UU. | cómo elegir agencia de diseño web |
| 12 | ¿Español o inglés primero? Cuál versión debe ir antes | web en español o inglés para mi negocio |

En inglés, tres que atacan el hueco bilingüe:
`bilingual website design cost`, `how to hire a spanish speaking web
designer`, `web design for hispanic owned businesses`.

### Prioridad 4 — Ampliar geografía, solo si la primera tanda funciona
Si a los 3-4 meses las páginas de estado traen tráfico, el siguiente paso son
páginas de ciudad (`/diseno-web-houston/`, `/diseno-web-miami/`), con la
misma regla de contenido exclusivo. **No hacerlas antes de tener la señal**:
ocho páginas puerta hacen más daño que ninguna.

## Expectativas realistas

| Qué | Cuándo |
|---|---|
| Indexación completa | 2-4 semanas desde Search Console |
| Long-tail de blog y ciudad | 2-4 meses |
| Páginas de estado en su frase | 3-6 meses |
| Términos genéricos («diseño de páginas web para negocios») | 12+ meses, y solo con autoridad |

Nadie rankea un dominio joven en un término genérico en menos de un año. Lo
que sí se puede ganar en los próximos meses es la combinación
**nicho + geografía + español**, que es donde está el cliente que ProCode
prospecta de todas formas.
