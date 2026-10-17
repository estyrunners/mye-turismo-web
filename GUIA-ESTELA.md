# Guía para manejar la web — Estela

Esta guía es para vos. La idea es que puedas cambiar cualquier cosa de la web
pidiéndoselo a Codex, sin depender de nadie.

Lo que hay que entender de arranque: **vos no editás la web, le pedís a Codex
que la edite.** Codex lee el repositorio, hace el cambio, y el sitio se
actualiza solo. En el repo hay un archivo llamado `AGENTS.md` que es el manual
de instrucciones del sitio: Codex lo lee automáticamente antes de tocar nada, y
ahí están todas las reglas (no publicar operadores, no inflar precios, sacar
las fechas vencidas, etc.). No tenés que explicarle nada de eso cada vez.

---

## Primera vez: dejar todo conectado

### Opción A — Codex en la web (la más simple, recomendada)

No instalás nada. Entrás desde el navegador.

1. Andá a **chatgpt.com/codex** y entrá con tu cuenta.
2. La primera vez te va a pedir conectar GitHub. Aceptá y autorizá tu cuenta
   **estyrunners**.
3. Elegí el repositorio **mye-turismo-web**.
4. Listo. Ya le podés pedir cambios.

Cuando le pedís algo, Codex trabaja en una copia y al terminar te muestra lo
que cambió. Tenés que apretar el botón para **crear el Pull Request** y después
**mergearlo** (el botón verde "Merge"). En cuanto lo mergeás, el sitio se
publica solo.

> Si eso de "Pull Request" te suena chino: es simplemente la pantalla donde
> GitHub te muestra "esto es lo que se va a cambiar, ¿lo confirmás?". Mirás que
> tenga sentido y le das Merge.

### Opción B — Codex en tu computadora

Sirve si querés ver el sitio funcionando antes de publicar, y es la única forma
cómoda de **subir fotos nuevas**.

1. Instalar **Git**: https://git-scm.com/download/win → Next a todo.
2. Instalar **Node.js** (versión LTS): https://nodejs.org
3. Abrir la terminal (tecla Windows → escribir `powershell` → Enter) y pegar:
   ```
   cd $HOME\Documents
   git clone https://github.com/estyrunners/mye-turismo-web.git
   cd mye-turismo-web
   ```
   Te va a pedir entrar a GitHub. Entrá con tu cuenta.
4. Instalar Codex: `npm install -g @openai/codex`
5. Entrar a la carpeta y arrancarlo: `codex`

Para ver el sitio antes de publicar, en la terminal:
```
npx --yes serve . -l 8199
```
y abrís `http://localhost:8199` en el navegador. Para cortarlo, `Ctrl + C`.

---

## Cómo pedirle las cosas

La regla de oro: **decile el dato completo, no la instrucción técnica.** Pegale
el texto del flyer tal cual te lo mandó el operador. Codex sabe dónde va cada
cosa.

### Sumar un paquete nuevo

> Sumá este paquete a la web. Va en la puerta de Escapadas en bus.
>
> Merlo, San Luis. Hotel Clima 3. Salida 21 de noviembre, 4 días / 2 noches.
> $291.240 por persona en base doble o triple. Gastos de reserva $15.000 por
> pasajero. Incluye bus semicama ida y vuelta, 2 noches con desayuno y
> coordinador permanente. No incluye media pensión ni la cobertura de salud de
> $6.000. Usá la foto de Merlo que ya tenemos.

### Cambiar un precio

> Cambiá el precio de Termas de Colón a $118.500. El precio de lista sigue
> siendo $124.990.

### Sumar o corregir fechas

> Las Termas del Guaychú tienen una salida más: 6 de diciembre. Sumala a las
> que ya están.

### Sacar lo que venció

Esto conviene pedirlo **una vez por mes**, sin falta:

> Revisá todos los paquetes de la web y sacá las salidas que ya pasaron. Si a
> un paquete le quedan fechas futuras, dejalo y borrale solo la fecha vencida.

### Cambiar una foto

Si la foto **ya está en el repo**:

> Cambiale la foto a San Pedro: usá la de la campiña que ya tenemos.

Si es una foto **nueva**, hay dos caminos:

- **Desde la web (sin instalar nada):** entrá a
  github.com/estyrunners/mye-turismo-web → botón **Add file** → **Upload
  files** → arrastrás la foto → **Commit changes**. Después le decís a Codex:
  *"Subí la foto `foto-villa-gesell.jpg`. Usala en el paquete de Villa Gesell."*
- **Desde tu computadora (Opción B):** copiás la foto a la carpeta
  `mye-turismo-web` y le decís lo mismo.

El nombre del archivo importa: usá `foto-destino.jpg` (todo en minúscula, sin
espacios, sin acentos y sin eñes).

⚠️ **Si el flyer del operador tiene el nombre o el legajo del mayorista
impreso, no lo subas.** Pedile a Codex que use otra foto, o recortalo antes.

### Cambiar un texto de la portada

> En la portada, la puerta de Verano 2027 dice "Reservá ahora la playa de enero
> y febrero, al precio de hoy". Cambialo por "Verano 2027 en cuotas, sin
> tarjeta".

### Si algo salió mal

> Lo último que publicamos quedó mal. Volvelo al estado anterior.

Nunca vas a romper nada de forma definitiva: todos los cambios quedan
guardados y siempre se puede volver atrás.

---

## Cosas que conviene que sepas

**El sitio tarda 1 o 2 minutos en actualizarse.** Si no ves el cambio, esperá
un rato y recargá con `Ctrl + Shift + R`.

**Hay un archivo que no se publica nunca:** `OPERADORES.local.md`, donde están
los mayoristas y sus comisiones. Está configurado para quedar afuera. Si Codex
alguna vez te propone subirlo o copiar su contenido, decile que no.

**Precios reales, siempre.** Un precio tachado tiene que ser un precio que
realmente se cobró, y "últimos 3 lugares" se pone solo si el operador informó 3
lugares. Está escrito en el manual del repo, así que Codex ya lo sabe y te va a
frenar si se lo pedís — pero te lo digo igual porque es lo que sostiene la
reputación del negocio.

**Si Codex te propone un cambio que no entendés, preguntale.** Está hecho para
eso: *"explicame en castellano qué va a cambiar esto"*.

---

## Si te trabás

1. Mirá la pestaña **Actions** en github.com/estyrunners/mye-turismo-web. Si
   hay una cruz roja, el sitio no se actualizó.
2. Pedile a Codex: *"el workflow de publicar falló, mirá el error y arreglalo"*.
3. Si nada de eso funciona, avisale a Matías con una captura de la pantalla.
