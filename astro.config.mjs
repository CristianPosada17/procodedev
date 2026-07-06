import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // `site` es necesario para URLs canónicas absolutas, Open Graph y sitemap.
  site: "https://procodedev.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
