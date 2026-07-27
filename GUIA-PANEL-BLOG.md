# Guía: Panel para publicar el blog con un botón

Esta guía deja funcionando un panel en **procodedev.com/admin** donde escribes
un artículo (título, descripción, cuerpo, imágenes) y al darle **Publicar** el
sitio se actualiza solo, sin tocar código y sin subir archivos a mano.

## Cómo va a funcionar (resumen)

1. Entras a `procodedev.com/admin` e inicias sesión con tu cuenta de GitHub.
2. Llenas el formulario del artículo y le das **Publicar**.
3. El panel guarda el artículo (un archivo `.md`) en tu repo de GitHub.
4. Una automatización de GitHub **compila el sitio y lo sube solo a Hostinger**.
5. En 1–2 minutos aparece publicado en la web.

Ya dejé listo en el proyecto todo lo que va en el código:

- `public/admin/index.html` y `public/admin/config.yml` → el panel.
- `.github/workflows/deploy.yml` → la automatización de compilar + subir.
- `public/images/blog/` → carpeta donde caen las imágenes que subas.

Solo faltan **3 conexiones que requieren tus cuentas** (una sola vez). Están abajo.

---

## Paso 0 · Subir estos cambios a GitHub

Estos archivos nuevos tienen que estar en tu repo. Desde la carpeta del proyecto:

```
git add .
git commit -m "Agregar panel de blog y despliegue automatico"
git push
```

> Nota: apenas subas esto, la automatización intentará desplegar y **fallará**
> porque todavía no configuras las claves FTP (Paso 3). Es normal; se arregla en
> ese paso.

---

## Paso 1 · Crear la app de GitHub (para el login del panel)

El panel necesita permiso para guardar en tu repo. Se hace con una "GitHub OAuth App".

1. Ve a https://github.com/settings/developers → pestaña **OAuth Apps** →
   **New OAuth App**.
2. Llena así:
   - **Application name:** `Panel ProCode Dev`
   - **Homepage URL:** `https://procodedev.com`
   - **Authorization callback URL:** `https://REEMPLAZAR-CON-TU-WORKER.workers.dev/callback`
     (la URL exacta la tendrás en el Paso 2; puedes volver a editarla aquí después).
3. Crea la app. Guarda el **Client ID** y genera un **Client Secret**
   (cópialo, no se vuelve a mostrar).

---

## Paso 2 · Crear el "portero" de login (worker gratis de Cloudflare)

Por seguridad, el login con GitHub necesita un pequeño servicio intermediario.
Se usa el oficial de Sveltia, gratis, en Cloudflare Workers.

1. Crea una cuenta gratis en https://dash.cloudflare.com (si no tienes).
2. Sigue las instrucciones oficiales aquí:
   https://github.com/sveltia/sveltia-cms-auth
   (Botón **Deploy to Cloudflare** → te crea el worker en un par de clics.)
3. En la configuración del worker (Settings → Variables), agrega:
   - `GITHUB_CLIENT_ID` = el Client ID del Paso 1
   - `GITHUB_CLIENT_SECRET` = el Client Secret del Paso 1
4. Copia la URL final del worker, por ejemplo:
   `https://sveltia-cms-auth.tu-usuario.workers.dev`
5. Vuelve a la OAuth App del Paso 1 y pon como **callback URL**:
   `https://sveltia-cms-auth.tu-usuario.workers.dev/callback`
6. Abre `public/admin/config.yml` y reemplaza la línea `base_url:` por la URL
   de tu worker (sin `/callback`):

   ```yaml
   base_url: https://sveltia-cms-auth.tu-usuario.workers.dev
   ```

7. Guarda, y sube el cambio:

   ```
   git add public/admin/config.yml
   git commit -m "Configurar login del panel"
   git push
   ```

---

## Paso 3 · Conectar la automatización con Hostinger (FTP)

La automatización necesita tus datos de FTP de Hostinger para subir el sitio.

### 3a. Obtener los datos de FTP en Hostinger

1. Entra a **hPanel** de Hostinger → tu sitio → **Archivos → Cuentas FTP**
   (o "FTP Accounts").
2. Ahí ves / puedes crear:
   - **FTP host / servidor** (algo como `ftp.procodedev.com` o una IP)
   - **Usuario FTP**
   - **Contraseña FTP** (si no la recuerdas, créala/cámbiala ahí)
3. Anota también la **carpeta** donde vive tu web. En Hostinger casi siempre es
   `/public_html/`. (Es la carpeta donde hoy subes los archivos a mano.)

### 3b. Guardar esos datos como "secrets" en GitHub

1. Ve a tu repo en GitHub → **Settings → Secrets and variables → Actions**.
2. Botón **New repository secret** y crea estos cuatro (nombre exacto):

   | Nombre | Valor |
   |---|---|
   | `FTP_SERVER` | el host FTP (ej. `ftp.procodedev.com`) |
   | `FTP_USERNAME` | tu usuario FTP |
   | `FTP_PASSWORD` | tu contraseña FTP |
   | `FTP_SERVER_DIR` | la carpeta de la web, ej. `/public_html/` |

> Importante: `FTP_SERVER_DIR` debe terminar en `/`. Si tu web está en una
> subcarpeta, ajústalo (ej. `/domains/procodedev.com/public_html/`).

---

## Paso 4 · Probar

1. En GitHub, ve a la pestaña **Actions** → abre el flujo
   **"Compilar y publicar en Hostinger"** → **Run workflow** (o simplemente sube
   cualquier cambio a `main`).
2. Debe terminar en verde. Si falla, casi siempre es un dato de FTP; revisa el
   error del paso "Subir a Hostinger por FTP".
3. Entra a `procodedev.com/admin`, inicia sesión con GitHub, crea un artículo de
   prueba y dale **Publicar**.
4. Espera 1–2 minutos y revisa `procodedev.com/blog`. Debe aparecer.

---

## Uso diario (una vez configurado)

1. Entra a `procodedev.com/admin`.
2. **New Artículo** → escribe título, descripción, contenido, sube imágenes,
   agrega tags.
3. **Publicar**. Listo. En un par de minutos está en vivo.

Puedes hacerlo incluso desde el celular.

---

## Preguntas frecuentes

**¿Y si quiero editar un artículo viejo?** El panel los lista todos; abres el que
quieras, editas y publicas de nuevo.

**¿Se puede borrar un artículo?** Sí, desde el mismo panel.

**¿Esto cambia mi hosting o mi correo?** No. Sigues en Hostinger tal cual; solo
se automatizó el paso de compilar y subir.

**¿Cuánto cuesta?** El panel (Sveltia CMS), la automatización (GitHub Actions) y
el worker de login (Cloudflare) son gratis para este uso.

**¿Y si quiero dar acceso a alguien más para escribir?** Le das acceso al repo de
GitHub (como colaborador) y ya podrá entrar al panel.
