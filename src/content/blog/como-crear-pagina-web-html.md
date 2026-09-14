---
title: "Cómo crear una página web con HTML: guía para empezar"
description: "Cómo crear una página web con HTML desde cero: estructura mínima, CSS, cómo publicarla gratis y hasta dónde llega este camino antes de necesitar más."
seoTitle: "Cómo Crear una Página Web con HTML | ProCode Dev"
seoDescription: "Crea tu primera página web con HTML y CSS paso a paso: estructura mínima, etiquetas esenciales, cómo publicarla gratis y qué límites tiene el método."
pubDate: 2026-09-14
author: "ProCode Dev"
tags: ["cómo crear una página web con HTML", "página web con HTML", "HTML y CSS para principiantes", "programar una página web"]
---

Aprender **cómo crear una página web con HTML** sigue siendo la mejor forma de entender qué pasa detrás de cualquier sitio, incluso si al final vas a usar un constructor. Son unas dos horas de trabajo hasta tener algo publicado en internet.

## Qué necesitas

Nada de pago: un editor de texto (Visual Studio Code es gratis) y un navegador. Crea una carpeta con un archivo llamado `index.html`. Ese nombre importa: es el que los servidores abren por defecto.

## La estructura mínima

Toda **página web con HTML** empieza igual:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Plomería Ramírez | Servicio en Durango</title>
    <meta name="description" content="Plomería a domicilio en Durango. Urgencias el mismo día." />
  </head>
  <body>
    <h1>Plomería a domicilio en Durango</h1>
  </body>
</html>
```

Tres líneas que la mayoría de los tutoriales pasan por alto y que son justo las que importan:

- `lang="es"` le dice al navegador y a Google en qué idioma está.
- La etiqueta `viewport` es lo único que hace que el sitio se vea bien en el teléfono. Sin ella se ve diminuto.
- `title` y `description` son lo que aparece en el resultado de Google. El título, por debajo de 60 caracteres.

## Las etiquetas que de verdad vas a usar

```html
<header>  <!-- encabezado y menú -->
<nav>     <!-- navegación -->
<main>    <!-- el contenido principal, solo uno por página -->
<section> <!-- un bloque temático -->
<footer>  <!-- pie -->

<h1>      <!-- un solo h1 por página: el tema de la página -->
<h2>      <!-- subtítulos, sin saltarse niveles -->
<p>       <!-- párrafos -->
<a href="tel:+526141234567">Llamar</a>
<img src="foto.jpg" alt="Descripción real de la foto" />
<ul><li>lista</li></ul>
```

Dos reglas que valen más que cualquier truco de diseño: **un solo `h1` por página** y **nunca saltes de `h2` a `h4`**. Los lectores de pantalla y los buscadores usan esa jerarquía para entender de qué va la página.

Y el `alt` de cada imagen se escribe siempre. No es un extra de accesibilidad: es lo que lee alguien que navega con voz y lo único que Google entiende de tu foto.

## Añadir CSS

El HTML es el esqueleto; el CSS es cómo se ve. Crea `estilos.css` y enlázalo dentro del `<head>`:

```html
<link rel="stylesheet" href="estilos.css" />
```

```css
:root {
  --texto: #1a1a1a;
  --acento: #0b5cff;
}
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: var(--texto);
  line-height: 1.6;
}
.contenedor {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
}
```

Las variables (`--acento`) valen la pena desde el primer día: cambias el color de la marca en un lugar y cambia en todo el sitio.

## Que se vea bien en el teléfono

Diseña primero para pantalla chica y luego agranda. Una sola regla resuelve el 80 % de los casos:

```css
.servicios { display: grid; gap: 16px; }
@media (min-width: 768px) {
  .servicios { grid-template-columns: repeat(3, 1fr); }
}
```

En el teléfono todo se apila; a partir de 768 píxeles se reparte en tres columnas.

## Publicarla gratis

Tienes el sitio en tu computadora, pero nadie más lo ve. La forma más rápida y gratuita:

1. Crea una cuenta en GitHub y sube la carpeta a un repositorio.
2. Activa GitHub Pages en la configuración del repositorio.
3. En un par de minutos tienes una dirección pública.

Si después compras un dominio, se conecta a esa misma página sin rehacer nada.

## Hasta dónde llega este camino

**Programar una página web** a mano funciona perfecto para un sitio de una a cinco páginas que cambia poco. Empieza a doler cuando:

- Tienes que cambiar el menú en las diez páginas a mano, una por una.
- Necesitas un formulario que mande correos: el HTML solo no manda nada, hace falta un servicio detrás.
- Quieres un blog, y cada artículo nuevo es un archivo copiado y pegado.

Ahí es cuando la gente salta a un generador de sitios estáticos (Astro, Eleventy) que resuelve exactamente eso: escribes el menú una vez, el contenido en Markdown y él genera el HTML. Es lo que uso para los sitios que entrego, y por eso cargan rápido: al final lo que se sirve sigue siendo HTML plano.

## ¿Vale la pena aprenderlo si vas a contratar?

Sí, aunque sea la primera hora. Con eso ya puedes revisar si tu sitio tiene un solo `h1`, si las imágenes llevan `alt` y si los títulos dicen algo. Son tres cosas que cualquiera puede verificar y que separan un sitio hecho con cuidado de uno hecho a las prisas.

---

Si prefieres que alguien lo haga con esas reglas puestas desde el principio, [así trabajo el diseño y desarrollo de páginas web](/servicios/desarrollo-web/) — sin plantillas, con el código en tus manos al final.
