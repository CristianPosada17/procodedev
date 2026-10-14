import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Título y descripción para buscadores. El título del artículo suele
  // pasar de los 60 caracteres que Google muestra sin truncar, así que
  // cuando eso ocurre se escribe aquí una versión corta. Si no vienen, se
  // usan `title` y `description` tal cual.
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  pubDate: z.coerce.date(),
  // Fecha de actualización opcional. Si viene vacía (o como valor vacío
  // desde el panel), se ignora en vez de romper la compilación.
  updatedDate: z
    .preprocess(
      (v) =>
        v instanceof Date
          ? v
          : typeof v === "string" && v.trim() !== ""
            ? v
            : undefined,
      z.coerce.date().optional()
    ),
  author: z.string().default("ProCode Systems"),
  tags: z.array(z.string()).default([]),
  // Páginas comerciales a las que empuja el artículo (oct 2026): claves de
  // PAGES en src/i18n/ui.ts («webDev», «contractors», «texas»…). Se pintan
  // como bloque «Páginas relacionadas» antes del CTA final. Una clave que no
  // existe se ignora en vez de romper la compilación.
  related: z.array(z.string()).default([]),
});

// Colección de artículos del blog (Content Layer API de Astro).
// Cada archivo .md dentro de src/content/blog/ es un artículo en español.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: blogSchema,
});

// Blog en inglés (oct 2026): /en/blog/. No es una traducción del blog en
// español artículo por artículo: solo los temas con intención de compra en
// EE. UU., escritos para ese lector. `translationOf` es el slug del artículo
// en español equivalente, si lo hay; con él se emiten los hreflang de los dos.
const blogEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog-en" }),
  schema: blogSchema.extend({
    translationOf: z.string().optional(),
  }),
});

export const collections = { blog, blogEn };
