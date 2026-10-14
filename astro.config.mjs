import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Redirecciones del nicho fiscal anterior (agosto 2026). Las seis páginas por
// oficio y su hub se colapsaron en un solo giro: /contabilidad-e-impuestos.
// Las URLs viejas ya estaban indexadas, así que se conservan como redirect en
// vez de devolver 404.
//
// Octubre 2026: los preparadores de impuestos volvieron a tener página propia
// (/preparadores-de-impuestos/, /en/tax-preparers/). Las URLs viejas de
// impuestos personales, EAs y resolución fiscal apuntan ahora ahí; las de
// contabilidad (CPAs, bookkeepers, despachos) siguen yendo al giro contable.
// La fuente de verdad en producción es public/.htaccess (301 de servidor);
// esto solo cubre `astro dev` y `astro preview`.
const legacyTaxRedirects = {
  "/impuestos": "/preparadores-de-impuestos/",
  "/enrolled-agents": "/preparadores-de-impuestos/",
  "/resolucion-fiscal": "/preparadores-de-impuestos/",
  "/cpas": "/contabilidad-e-impuestos/",
  "/bookkeepers": "/contabilidad-e-impuestos/",
  "/despachos-contables": "/contabilidad-e-impuestos/",
  "/en/tax-pros": "/en/tax-preparers/",
  "/en/tax-professionals": "/en/tax-preparers/",
  "/en/enrolled-agents": "/en/tax-preparers/",
  "/en/tax-resolution": "/en/tax-preparers/",
  "/en/cpas": "/en/accounting-and-tax/",
  "/en/bookkeepers": "/en/accounting-and-tax/",
  "/en/accounting-firms": "/en/accounting-and-tax/",
};

// El subservicio «diseño web con SEO» se separó en un servicio de SEO propio
// (septiembre de 2026): el SEO dejó de venderse pegado al proyecto de web.
const legacySeoRedirects = {
  "/servicios/diseno-web-seo": "/servicios/seo/",
  "/en/services/seo-web-design": "/en/services/seo/",
};

// https://astro.build/config
export default defineConfig({
  // `site` es necesario para URLs canónicas absolutas, Open Graph y sitemap.
  site: "https://procodedev.com",
  redirects: { ...legacyTaxRedirects, ...legacySeoRedirects },
  vite: {
    plugins: [tailwindcss()],
  },
});
