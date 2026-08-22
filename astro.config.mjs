import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Redirecciones del nicho fiscal anterior (agosto 2026). Las seis páginas por
// oficio y su hub se colapsaron en un solo giro: /contabilidad-e-impuestos.
// Las URLs viejas ya estaban indexadas, así que se conservan como redirect en
// vez de devolver 404.
const legacyTaxRedirects = {
  "/impuestos": "/contabilidad-e-impuestos",
  "/preparadores-de-impuestos": "/contabilidad-e-impuestos",
  "/enrolled-agents": "/contabilidad-e-impuestos",
  "/cpas": "/contabilidad-e-impuestos",
  "/bookkeepers": "/contabilidad-e-impuestos",
  "/resolucion-fiscal": "/contabilidad-e-impuestos",
  "/despachos-contables": "/contabilidad-e-impuestos",
  "/en/tax-pros": "/en/accounting-and-tax",
  "/en/tax-professionals": "/en/accounting-and-tax",
  "/en/enrolled-agents": "/en/accounting-and-tax",
  "/en/cpas": "/en/accounting-and-tax",
  "/en/bookkeepers": "/en/accounting-and-tax",
  "/en/tax-resolution": "/en/accounting-and-tax",
  "/en/accounting-firms": "/en/accounting-and-tax",
};

// https://astro.build/config
export default defineConfig({
  // `site` es necesario para URLs canónicas absolutas, Open Graph y sitemap.
  site: "https://procodedev.com",
  redirects: legacyTaxRedirects,
  vite: {
    plugins: [tailwindcss()],
  },
});
