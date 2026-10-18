# mye-turismo-web

Sitio web oficial de **MyE Turismo** — Estela, Técnica Superior en Turismo,
Mat. Nro. 1077.
En producción en https://mye-turismo-web.pages.dev

Sitio estático, sin build y sin dependencias. El catálogo de paquetes vive en
`paquetes.js` (fuente única) y las mini landings se generan con
`node generar-landings.mjs`.

## Por dónde empezar

- **[GUIA-ESTELA.md](GUIA-ESTELA.md)** — cómo cambiar la web pidiéndoselo a un
  agente de IA, paso a paso y sin jerga. Empezá por acá.
- **[AGENTS.md](AGENTS.md)** — el manual técnico del repo: arquitectura, campos
  del catálogo, tareas frecuentes y las reglas que no se negocian. Lo lee el
  agente de IA automáticamente.

## Publicación

Se pushea a `main`. El workflow `.github/workflows/publicar.yml` copia `main` a
la rama `publicar`, que es la rama de producción de Cloudflare Pages, y el
sitio sale solo en 1-2 minutos. **Todo lo que llega a `main` se publica: no hay
staging.**

El `netlify.toml` es de una etapa anterior; ignorarlo.
