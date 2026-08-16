/* Genera las mini landings de cada puerta a partir de paquetes.js.
   Correr con:  node generar-landings.mjs
   Todas las páginas salen del mismo molde, así no pueden divergir. */
import { writeFileSync, mkdirSync, readFileSync } from "fs";

// paquetes.js define window.PAQUETES / window.PUERTAS
const win = {};
new Function("window", readFileSync("paquetes.js", "utf8"))(win);
const { PAQUETES, PUERTAS } = win;

const WHATSAPP = "5491131537638";
const PIXEL = "1812483333531317";

const money = (v, m) =>
  m === "USD" ? `USD ${v.toLocaleString("es-AR")}` : `$${v.toLocaleString("es-AR")}`;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function mensajeWhatsapp(p) {
  const l = [
    `Hola MyE Turismo, quiero consultar por ${p.nombre}${p.subtitulo ? " — " + p.subtitulo : ""}.`,
    "",
    "Esto es lo que vi en la página:",
    `• Desde ${money(p.precio, p.moneda)} por persona${p.reserva ? ` + ${money(p.reserva, p.moneda)} de gastos de reserva` : " (sin gastos de reserva)"}`,
    `• ${p.duracion} · ${p.transporte}`,
  ];
  if (p.hotel) l.push(`• Hotel: ${p.hotel}`);
  l.push(`• Salidas: ${p.fechas}`, "", "¿Me confirman disponibilidad y formas de pago?");
  return l.join("\n");
}

function tarjeta(p) {
  const opciones = p.circuitos
    ? p.circuitos
        .map(
          (c) =>
            `<li><span>${esc(c.nombre)}</span><b>${money(c.precio, p.moneda)}</b>${
              c.tercerPax ? `<em>3er pasajero ${money(c.tercerPax, p.moneda)}</em>` : ""
            }${c.nota ? `<em>${esc(c.nota)}</em>` : ""}</li>`
        )
        .join("")
    : p.ocupaciones
    ? p.ocupaciones
        .map(
          (o) =>
            `<li><span>${esc(o.nombre)}</span><b>${money(o.enero, p.moneda)}</b>${
              o.febrero && o.febrero !== o.enero ? `<em>febrero ${money(o.febrero, p.moneda)}</em>` : ""
            }</li>`
        )
        .join("")
    : "";

  return `
      <article class="paq${p.foto ? " paq-con-foto" : ""}">
        ${
          p.foto
            ? `<figure class="paq-foto"><img src="${esc(p.foto)}" alt="${esc(p.fotoAlt || p.nombre)}" width="1600" height="1000" loading="lazy" decoding="async">${
                p.ilustrativa ? `<figcaption>Imagen ilustrativa</figcaption>` : ""
              }</figure>`
            : ""
        }
        ${p.destacado ? `<span class="paq-badge">${esc(p.destacado)}</span>` : ""}
        <div class="paq-head">
          <p class="paq-meta">${esc(p.duracion)} · ${esc(p.transporte)}</p>
          <h3>${esc(p.nombre)}</h3>
          ${p.subtitulo ? `<p class="paq-sub">${esc(p.subtitulo)}</p>` : ""}
          <p class="paq-fechas"><span aria-hidden="true">📅</span> ${esc(p.fechas)}</p>
          ${p.hotel ? `<p class="paq-hotel"><span aria-hidden="true">🏨</span> ${esc(p.hotel)}</p>` : ""}
        </div>

        <div class="paq-precio">
          <span class="paq-precio-label">Desde</span>
          <span class="paq-precio-valor">${money(p.precio, p.moneda)}</span>
          <span class="paq-precio-nota">por persona${
            p.reserva
              ? ` · + ${money(p.reserva, p.moneda)} gastos de reserva`
              : " · sin gastos de reserva"
          }</span>
          ${p.precioLista ? `<span class="paq-precio-nota">Precio de lista ${money(p.precioLista, p.moneda)} por transferencia</span>` : ""}
        </div>

        ${opciones ? `<ul class="paq-opciones">${opciones}</ul>` : ""}

        ${
          p.incluye
            ? `<details class="paq-detalle"><summary>Qué incluye</summary><ul>${p.incluye
                .map((i) => `<li>${esc(i)}</li>`)
                .join("")}${
                p.noIncluye
                  ? p.noIncluye.map((i) => `<li class="no">No incluye: ${esc(i)}</li>`).join("")
                  : ""
              }</ul></details>`
            : ""
        }

        <a class="btn btn-primary" target="_blank" rel="noopener"
           href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensajeWhatsapp(p))}">
          Consultar por WhatsApp
        </a>
      </article>`;
}

const CSS = `
  *{margin:0;padding:0;box-sizing:border-box}
  :root{
    --navy:#123447;--ink:#17313f;--muted:#5c7180;--white:#fff;
    --teal:#08989b;--teal-dark:#077b7e;--sand:#f3e1c7;--sand-2:#f2a95b;
    --shadow:0 16px 38px rgba(18,52,71,.09);
  }
  body{font-family:"Manrope",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--ink);background:#f7fbfb;line-height:1.6}
  h1,h2,h3{font-family:"Playfair Display",Georgia,serif;color:var(--navy);line-height:1.15}
  .container{width:min(1120px,92vw);margin:0 auto}
  .top{background:var(--white);border-bottom:1px solid rgba(18,52,71,.08);position:sticky;top:0;z-index:20}
  .top .container{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0}
  .top a.volver{color:var(--teal-dark);font-weight:700;text-decoration:none;font-size:.92rem}
  .top a.volver:hover{text-decoration:underline}
  .top .tel{color:var(--navy);font-weight:700;text-decoration:none;font-size:.92rem}
  .hero{padding:52px 0 34px;background:linear-gradient(180deg,#fff 0%,#f7fbfb 100%)}
  .eyebrow{display:inline-block;color:var(--teal-dark);font-size:.72rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px}
  .hero h1{font-size:clamp(2rem,5vw,3rem);margin-bottom:12px}
  .hero p.bajada{color:var(--muted);max-width:62ch;font-size:1.02rem}
  .cuotas{display:inline-flex;align-items:center;gap:9px;margin-top:20px;padding:11px 18px;border-radius:999px;background:rgba(242,169,91,.18);color:var(--navy);font-weight:700;font-size:.93rem}
  .grid{display:grid;gap:20px;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));padding:8px 0 60px}
  .paq{position:relative;display:flex;flex-direction:column;background:var(--white);border:1px solid rgba(18,52,71,.09);border-radius:22px;padding:24px;box-shadow:var(--shadow)}
  .paq-con-foto{padding-top:0;overflow:hidden}
  .paq-foto{position:relative;margin:0 -24px 20px;line-height:0}
  .paq-foto img{width:100%;height:auto;aspect-ratio:16/10;object-fit:cover;display:block}
  .paq-foto figcaption{position:absolute;right:10px;bottom:10px;padding:4px 9px;border-radius:6px;background:rgba(18,52,71,.62);color:#fff;font-size:.66rem;font-weight:700;line-height:1.4;letter-spacing:.02em}
  .paq-badge{position:absolute;top:-11px;left:22px;background:var(--sand-2);color:#3d2508;font-size:.72rem;font-weight:800;padding:5px 12px;border-radius:999px;z-index:2}
  .paq-con-foto .paq-badge{top:14px;left:14px}
  .paq-meta{color:var(--teal-dark);font-size:.71rem;font-weight:800;letter-spacing:.11em;text-transform:uppercase;margin-bottom:6px}
  .paq h3{font-size:1.5rem;margin-bottom:4px}
  .paq-sub{color:var(--muted);font-size:.9rem;margin-bottom:6px}
  .paq-fechas,.paq-hotel{color:var(--muted);font-size:.88rem;margin-top:4px}
  .paq-precio{margin:18px 0 0;padding:15px 0;border-top:1px solid rgba(18,52,71,.08);border-bottom:1px solid rgba(18,52,71,.08)}
  .paq-precio-label{display:block;color:var(--muted);font-size:.7rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase}
  .paq-precio-valor{display:block;font-family:"Playfair Display",Georgia,serif;font-size:2.1rem;font-weight:700;color:var(--navy);line-height:1.1}
  .paq-precio-nota{display:block;color:var(--muted);font-size:.8rem;margin-top:3px}
  .paq-opciones{list-style:none;margin:14px 0 0}
  .paq-opciones li{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:8px;padding:8px 0;border-bottom:1px dashed rgba(18,52,71,.12);font-size:.9rem}
  .paq-opciones li:last-child{border-bottom:0}
  .paq-opciones span{color:var(--muted);flex:1 1 55%}
  .paq-opciones b{color:var(--navy);font-size:1rem;white-space:nowrap}
  .paq-opciones em{flex-basis:100%;color:var(--muted);font-size:.78rem;font-style:normal}
  .paq-detalle{margin-top:14px}
  .paq-detalle summary{cursor:pointer;color:var(--teal-dark);font-weight:700;font-size:.9rem}
  .paq-detalle ul{margin:10px 0 0 18px;color:var(--muted);font-size:.88rem}
  .paq-detalle li{margin-bottom:4px}
  .paq-detalle li.no{color:#9b5a5a}
  .btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:13px 20px;border-radius:999px;font-weight:800;font-size:.95rem;text-decoration:none;cursor:pointer;border:0}
  .btn-primary{background:var(--teal);color:#fff;width:100%;margin-top:auto}
  .btn-primary:hover{background:var(--teal-dark)}
  .paq .btn-primary{margin-top:18px}
  .otras{background:var(--white);border-top:1px solid rgba(18,52,71,.08);padding:40px 0 56px}
  .otras h2{font-size:1.5rem;margin-bottom:16px}
  .otras-links{display:flex;flex-wrap:wrap;gap:10px}
  .otras-links a{padding:10px 16px;border-radius:999px;background:#f2f8f8;color:var(--navy);text-decoration:none;font-weight:700;font-size:.9rem;border:1px solid rgba(8,152,155,.18)}
  .otras-links a:hover{background:rgba(8,152,155,.12)}
  .pie{padding:26px 0 40px;color:var(--muted);font-size:.84rem;text-align:center}
  .pie a{color:var(--teal-dark)}
  @media(max-width:640px){.grid{grid-template-columns:1fr}.paq-precio-valor{font-size:1.85rem}}
`;

mkdirSync("./", { recursive: true });

PUERTAS.forEach((puerta) => {
  const items = PAQUETES.filter((p) => p.tags.includes(puerta.tag));
  const otras = PUERTAS.filter((o) => o.id !== puerta.id);

  /* Las licencias CC BY-SA exigen atribución: se junta una sola vez por página. */
  const creditos = [...new Set(items.filter((p) => p.fotoCredito).map((p) => p.fotoCredito))];

  const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(puerta.titulo)} — MyE Turismo</title>
<meta name="description" content="${esc(puerta.bajada)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
<style>${CSS}</style>
<script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init','${PIXEL}');fbq('track','PageView');
</script>
</head>
<body>

<header class="top">
  <div class="container">
    <a class="volver" href="../">← Volver al inicio</a>
    <a class="tel" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hola MyE Turismo, quiero hacer una consulta."
  )}" target="_blank" rel="noopener">📱 11-3153-7638</a>
  </div>
</header>

<section class="hero">
  <div class="container">
    <span class="eyebrow">${esc(puerta.eyebrow)}</span>
    <h1>${esc(puerta.titulo)}</h1>
    <p class="bajada">${esc(puerta.bajada)}</p>
    <p class="cuotas"><span aria-hidden="true">💳</span> Pagá en cuotas, con o sin tarjeta de crédito</p>
  </div>
</section>

<main class="container">
  <div class="grid">
    ${items.map(tarjeta).join("\n")}
  </div>
</main>

<section class="otras">
  <div class="container">
    <h2>Mirá también</h2>
    <div class="otras-links">
      ${otras.map((o) => `<a href="../${o.id}/">${esc(o.titulo)}</a>`).join("\n      ")}
      <a href="../#contacto">Viajes a medida</a>
    </div>
  </div>
</section>

<footer class="pie">
  <div class="container">
    <p>Precios por persona en base habitación doble/triple, sujetos a disponibilidad y a cambios sin previo aviso.</p>
    ${
      creditos.length
        ? `<p>Fotos: ${creditos.join(" · ")} — vía Wikimedia Commons.</p>`
        : ""
    }
    <p>MyE Turismo · <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">11-3153-7638</a> · mye.turismo@hotmail.com.ar</p>
  </div>
</footer>

</body>
</html>
`;

  mkdirSync(puerta.id, { recursive: true });
  writeFileSync(`${puerta.id}/index.html`, html, "utf8");
  console.log(`✓ ${puerta.id}/index.html — ${items.length} paquetes`);
});

console.log("\nListo. Landings generadas desde paquetes.js.");
