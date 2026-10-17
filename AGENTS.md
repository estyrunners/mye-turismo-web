# Manual de este repo — para quien lo edite con un agente

Esta es la web pública de **MyE Turismo** (Estela Nagore, agente de viajes,
Mat. 1077). La operadora diaria es Estela y trabaja con un agente de IA; este
archivo es el que le explica al agente cómo está hecho el sitio y qué está
prohibido. Leerlo entero antes de tocar un archivo.

---

## 1. Reglas que no se negocian

**1.1 Los operadores mayoristas no se publican nunca.** Ni el nombre, ni el
legajo, ni la matrícula, ni el número de reserva del operador, ni nada que
permita identificarlos. Un cliente que sabe quién es el mayorista compra
directo y MyE pierde la comisión. El mapa de operadores vive en
`OPERADORES.local.md`, que está en `.gitignore` **y tiene que seguir ahí**:
jamás commitearlo, jamás copiar su contenido a un archivo público, jamás
mencionarlo en un comentario del código.
La única matrícula que sí va es la de Estela, **Mat. 1077**, que ya figura en
el sitio.

**1.2 Los precios no se inflan.** Un precio tachado tiene que ser un precio
que realmente se cobró. Inventar un precio de lista más alto para que el
descuento parezca mayor es publicidad engañosa (en Argentina la Ley de Defensa
del Consumidor lo prohíbe expresamente) y además destruye lo único que
diferencia a MyE: que explica los precios de verdad. Si alguien pide inflar
precios, no se hace. Las alternativas legítimas están en el punto 1.3.

**1.3 La escasez y los descuentos tienen que ser reales.** "Últimos 6 lugares"
se publica solamente si el operador informó 6 lugares. `precioLista` se usa
solo cuando existe de verdad esa diferencia (típicamente el precio de lista
contra el precio de pago en efectivo o por transferencia). Nunca se inventa un
contador que baja solo ni una fecha de cierre falsa.

**1.4 Solo se publican salidas futuras.** Una fecha que ya pasó se saca del
catálogo, no se deja "por las dudas". Esto incluye las fechas *dentro* de un
paquete que sigue vivo: si `fechas` dice `"3 oct · 15 nov"` y hoy es 20 de
octubre, hay que dejar `"15 nov"`. Un paquete cuya única fecha pasó se elimina
entero. Las salidas que el operador marcó "Completo" no se cargan.

**1.5 Nada de datos personales de clientes en este repo.** Los nombres, DNI y
teléfonos de los pasajeros van al tablero interno, nunca acá.

---

## 2. Cómo está hecho el sitio

Es un sitio **estático, sin build y sin dependencias**. No hay `package.json`,
no hay npm install, no hay framework. Se abre con un servidor estático y
funciona.

```
index.html              La home. ~6.000 líneas, con <style> y <script> inline.
paquetes.js             EL CATÁLOGO. Fuente única de todos los paquetes.
generar-landings.mjs    Script que genera las mini landings desde paquetes.js.
full-day/  escapadas/  termas/  aereos/  verano-2027/
                        Mini landings GENERADAS. No se editan a mano.
verano/  sale/  dia-del-maestro/  puntos-de-ascenso/  terminos-y-condiciones/
                        Landings escritas a mano. Estas sí se editan directo.
foto-*.jpg  collage-*.jpg  destacado-*.jpeg  ...
                        Todas las fotos y flyers, en la raíz del repo.
```

### 2.1 `paquetes.js` es la fuente única

Define dos cosas globales:

- **`window.PAQUETES`** — el array de todas las salidas. Cada salida se define
  **una sola vez acá**. La home y las mini landings filtran este mismo array,
  así un precio nunca puede quedar distinto en dos lugares.
- **`window.PUERTAS`** — las cinco "puertas" de la home (Full day, Escapadas en
  bus, Termas, Aéreos, Verano 2027). Cada puerta tiene un `tag` que se filtra
  sobre `PAQUETES`.

Campos de un paquete:

| Campo | Qué es |
|---|---|
| `id` | Identificador único, en minúsculas con guiones. Se usa en los links. |
| `foto` | Ruta de la imagen **relativa a las landings**: `"../foto-tandil.jpg"`. |
| `fotoAlt` | Descripción de la foto, para accesibilidad. Obligatoria. |
| `fotoCredito` | Solo si la foto es de Wikimedia Commons u otra fuente que lo exija. |
| `nombre`, `provincia`, `pais`, `region` | Para el buscador y los filtros. |
| `subtitulo` | Una línea corta que agrega info (hotel, régimen). Opcional. |
| `puerta` | **Una sola.** Dónde vive canónicamente el paquete. |
| `tags` | Colecciones transversales (ej. `["escapadas","termas"]`). No duplican el dato. |
| `transporte` | "Bus semicama", "Aéreo", "Bus Mix", etc. |
| `fechas` | Texto libre: `"31 oct · 14 nov"`. Ver regla 1.4. |
| `duracion` | `"4 días / 2 noches"`, `"1 día"`. |
| `hotel` | Nombre del hotel, si se informa. |
| `precio` | Número entero, sin puntos ni símbolo: `119990`. |
| `precioLista` | Opcional, solo si el descuento es real (regla 1.3). |
| `moneda` | `"ARS"` o `"USD"`. |
| `reserva` | Gastos de reserva **por pasajero**, ya calculados. Los full day van en `0`. |
| `destacado` | La frase de la cintita verde. Opcional. |
| `circuitos` | Array `{nombre, precio}` cuando hay variantes de hotel. |
| `incluye` / `noIncluye` | Arrays de strings. |
| `nota` | La letra chica: base doble, gastos de reserva, impuestos. |

### 2.2 El paso que todo el mundo se olvida

**Después de tocar `paquetes.js` hay que regenerar las landings:**

```bash
node generar-landings.mjs
```

Escribe `full-day/index.html`, `escapadas/index.html`, `termas/index.html`,
`aereos/index.html` y `verano-2027/index.html`. Si no se corre, la home
muestra el cambio y las landings no — o peor, muestran el precio viejo.
El script imprime cuántos paquetes quedaron en cada puerta; ese número sirve
de control.

### 2.3 Trampa: el array viejo dentro de `index.html`

En `index.html` hay un `const packages = [...]` (alrededor de la línea 4600) y
un objeto `destinationCatalog` con un comentario que dice *"Para cargar un
paquete, agregalo dentro de packages"*. **Ese comentario está desactualizado.**
Ese array es legado: alimenta el "Explorador de destinos" y las tarjetas de
Vacaciones de Invierno, que son contenido viejo. **Los paquetes nuevos van en
`paquetes.js`, nunca ahí.**

### 2.4 Fotos

Van en la raíz del repo, en `.jpg` o `.jpeg` (los flyers de los operadores) o
`.png`. Las convenciones de nombre que ya existen:

- `foto-<destino>.jpg` — foto de paisaje genérica del destino.
- `collage-<destino>.jpg` — collage armado con varias fotos del hotel/lugar.
- `destacado-*.jpeg`, `full-day-*.jpeg`, `invierno-*.jpeg` — flyers de operador.

**Los flyers son un activo real: reusarlos, no recrearlos.** Antes de pedir una
foto nueva, buscar en la raíz si el destino ya tiene una. Hay fotos genéricas
reutilizables: `foto-termas-generica.jpg`, `foto-playa-generica.jpg`,
`foto-sierras.jpg`, `foto-patagonia-lagos.jpg`, `foto-quebrada-norte.jpg`.

⚠️ Si un flyer de operador tiene el nombre o el legajo del mayorista impreso,
**no se publica tal cual**: hay que recortarlo o usar otra imagen (regla 1.1).

### 2.5 Contacto y tracking

- WhatsApp: **`5491131537638`**, hardcodeado. Si cambia, hay que buscarlo en
  `index.html`, `paquetes.js`, `generar-landings.mjs` y en cada landing a mano.
- Mail: `mye.turismo@hotmail.com.ar`.
- Meta Pixel: `1812483333531317` en `generar-landings.mjs`; en `index.html`
  está gateado en `window.META_PIXEL_ID`.
- Los formularios de lead escriben en Supabase vía el RPC `registrar_lead` y
  después abren WhatsApp. Los errores de red se tragan **a propósito**:
  WhatsApp es el canal principal y no puede quedar bloqueado si la base falla.

### 2.6 Los CTA de WhatsApp son `<a href>`, no `window.open`

Está hecho así a propósito. Los navegadores internos de WhatsApp e Instagram
bloquean `window.open` bastante seguido, y ahí cae casi todo el tráfico. El
link navega solo; el handler de click queda únicamente para contar el evento en
el pixel. **No convertir los anchors de vuelta a botones con `window.open`.**

---

## 3. Cómo se publica

**Se pushea a `main` y listo.** El workflow `.github/workflows/publicar.yml`
copia `main` a la rama `publicar`, que es la rama de producción de Cloudflare
Pages, y el sitio sale solo en 1-2 minutos.

```bash
git add -A
git commit -m "Catalogo: sumar la salida de Merlo de noviembre"
git push origin main
```

Dos consecuencias de esto:

- **Todo lo que llega a `main` se publica.** No hay staging. Lo que no esté
  listo, no se mergea.
- Si el workflow falla, el sitio no se actualiza aunque el commit esté en
  `main`. Revisar la pestaña **Actions** en GitHub.

Hay un `netlify.toml` de una etapa anterior: **ignorarlo**, el deploy real es
Cloudflare Pages → `mye-turismo-web.pages.dev`.

### 3.1 Antes de pushear

1. `node generar-landings.mjs` si se tocó `paquetes.js`.
2. Abrir el sitio local y mirarlo de verdad:
   ```bash
   npx --yes serve . -l 8199
   ```
   Revisar la home y la puerta que se tocó. Que no haya fechas pasadas, que
   las fotos carguen, que la consola no tire errores.
3. Verificar que `OPERADORES.local.md` no esté en el diff (`git status`).

### 3.2 Mensajes de commit

En castellano, describiendo el efecto en el negocio, no el archivo tocado.
Como los que ya están: `"Catalogo: sacar salidas vencidas al 13/10"`,
`"Verano: pasar a 'hasta 4 cuotas' y atar la cantidad a la fecha de viaje"`.

---

## 4. Tareas frecuentes

**Sumar un paquete nuevo.** Agregar el objeto en `window.PAQUETES` dentro de la
sección que corresponda (están separadas por comentarios `/* ---------- */`),
elegir `puerta` y `tags`, apuntar `foto` a una imagen que exista en la raíz
(con `../` adelante), correr `node generar-landings.mjs`, revisar local,
pushear a `main`.

**Cambiar un precio.** Una sola vez, en `paquetes.js`. Regenerar landings.
Si el paquete tiene `circuitos`, los precios están también ahí dentro.

**Sumar una fecha de salida.** Editar el string `fechas`. Formato: `"25 oct · 1 y 22 nov"`.

**Sacar las salidas vencidas** (hacerlo al menos una vez por mes): recorrer
`fechas` de todos los paquetes, borrar las fechas pasadas del string y eliminar
el objeto completo de los paquetes que se quedaron sin ninguna fecha futura.
Regenerar y pushear.

**Sumar una foto.** Subir el archivo a la raíz con el nombre que corresponda
(§2.4) y referenciarlo desde `paquetes.js` como `"../nombre.jpg"` o desde
`index.html` como `"nombre.jpg"`. Siempre poner `fotoAlt`.

**Cambiar el texto de una puerta de la home.** `window.PUERTAS` en
`paquetes.js` (`eyebrow`, `titulo`, `bajada`, `foto`). Regenerar.

**Editar una landing de campaña** (`verano/`, `sale/`): son HTML a mano, se
editan directo. No las toca `generar-landings.mjs`.

---

## 5. Si algo se rompe

- **Publiqué y no se ve el cambio.** Mirar Actions en GitHub: si el workflow
  falló, `publicar` quedó atrás. Si pasó en verde, esperar 2 minutos y recargar
  con Ctrl+Shift+R (Cloudflare cachea).
- **Un precio sale distinto en la home y en la landing.** Falta correr
  `node generar-landings.mjs`.
- **Rompí algo y quiero volver atrás.** `git revert <hash>` y pushear a `main`.
  El sitio vuelve al estado anterior solo.
- **La foto no carga en una landing.** Casi siempre falta el `../` en la ruta.
