import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Colección de artículos del blog (Content Layer API de Astro).
// Cada archivo .md dentro de src/content/blog/ es un artículo.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
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
    author: z.string().default("ProCode Dev"),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
