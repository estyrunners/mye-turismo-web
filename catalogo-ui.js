/* Presentación compartida por las landings y sus actualizaciones en el navegador. */
(function (window) {
  "use strict";
  const dinero = (v, m) => m === "USD" ? `USD ${v.toLocaleString("es-AR")}` : `$${v.toLocaleString("es-AR")}`;
  const escapar = (s) => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  const precioMostrado = (p) => p.salidas ? Math.min(...p.salidas.map(s=>s.precio)) : p.precio;
  function encuadreFoto(p) {
    const r = p.fotoEncuadre;
    if (!r) return "";
    const pct = (n) => (n * 100).toFixed(4) + "%";
    return ` data-foto-encuadre style="--foto-ancho:${pct(r.originalAncho/r.ancho)};--foto-alto:${pct(r.originalAlto/r.alto)};--foto-x:${pct(-r.x/r.ancho)};--foto-y:${pct(-r.y/r.alto)}"`;
  }
  function desglose(p) {
    if (p.salidas) return "Precio y gastos según fecha de salida.";
    return p.gastosAdministrativos ? `Paquete ${dinero(p.precio,p.moneda)} + ${dinero(p.gastosAdministrativos,p.moneda)} de gastos administrativos por persona.${p.cyberActiva && p.cyber.condicion ? " " + p.cyber.condicion + "." : ""}` : "";
  }
  function mensajeWhatsapp(p) {
    const l = [`Hola MyE Turismo, quiero consultar por ${p.nombre}${p.subtitulo ? " — "+p.subtitulo : ""}.`, "", "Esto es lo que vi en la página:",
      `• Desde ${dinero(precioMostrado(p),p.moneda)} por persona${p.reserva ? ` + ${dinero(p.reserva,p.moneda)} de gastos de reserva` : ""}`];
    if (p.gastosAdministrativos) l.push(`• ${desglose(p)}`);
    if (p.cyberActiva) l.push(`• Promoción Cyber para reservar hasta el ${p.cyber.hasta.split("-").reverse().join("/")}.`);
    if (p.cyberActiva && p.cyber.condicion) l.push(`• ${p.cyber.condicion}.`);
    if (p.condicionPago) l.push(`• ${p.condicionPago}.`);
    if (p.aclaracionPrecio) l.push(`• ${p.aclaracionPrecio}`);
    if (p.salidas) p.salidas.forEach(s=>l.push(`• ${s.fechas}: ${dinero(s.precio,p.moneda)} por persona${s.gastosAdministrativos ? " + " + dinero(s.gastosAdministrativos,p.moneda) + " de gastos administrativos" : ""}${s.condicionPago ? " · " + s.condicionPago : ""}.`));
    l.push(`• ${p.duracion} · ${p.transporte}`);
    if (p.hotel) l.push(`• Hotel: ${p.hotel}`);
    l.push(`• Salidas: ${p.fechas}`,"","¿Me confirman disponibilidad y formas de pago?");
    return l.join("\n");
  }
  const money = dinero, esc = escapar, WHATSAPP = "5491131537638";
function tarjetaNormal(p) {
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
            /* El flag `ilustrativa` se conserva en paquetes.js para saber a
               cuáles les falta la foto real, pero no se muestra: todas las
               genéricas son de paisaje, no de hoteles concretos, así que no
               hay nada que aclararle al cliente. */
            ? `<figure class="paq-foto${p.fotoCompleta ? " paq-foto--completa" : p.fotoContener ? " paq-foto--contener" : ""}"><img src="${esc(p.foto)}" alt="${esc(p.fotoAlt || p.nombre)}"${p.fotoCompleta ? "" : ` width="1600" height="1000"`} loading="lazy" decoding="async"></figure>`
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
            /* Cuando el paquete no tiene gastos cargados no se dice nada:
               afirmar "sin gastos de reserva" nos ata, porque hay operadores
               que igual los cobran. */
            p.reserva ? ` · + ${money(p.reserva, p.moneda)} gastos de reserva` : ""
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

  function tarjeta(p, opciones = {}) {
    if (!p.cyber && !p.salidas && p.gastosAdministrativos === undefined && !p.cuotas && !p.condicionPago && !p.pagoConsulta) return tarjetaNormal(p);
    const e = escapar, money = (v) => dinero(v,p.moneda);
    const variantes = p.circuitos ? p.circuitos.map(c => `<li><span>${e(c.nombre)}</span><b>${money(c.precio)}</b>${c.tercerPax ? `<em>3er pasajero ${money(c.tercerPax)}</em>` : ""}${c.nota ? `<em>${e(c.nota)}</em>` : ""}</li>`).join("")
      : p.ocupaciones ? p.ocupaciones.map(o=>`<li><span>${e(o.nombre)}</span><b>${money(o.enero)}</b>${o.febrero && o.febrero!==o.enero ? `<em>febrero ${money(o.febrero)}</em>` : ""}</li>`).join("") : "";
    const cuota = p.cuotas || (p.cyberActiva && p.cyber.cuotas);
    const salidas = p.salidas ? p.salidas.map(s=>`<section class="paq-salida"><h4>📅 ${e(s.fechas)}</h4><p><strong>${money(s.precio)}</strong> por persona</p>${s.aclaracionPrecio ? `<p class="paq-precio-nota">${e(s.aclaracionPrecio)}</p>` : ""}${s.condicionPago ? `<p>${e(s.condicionPago)}</p>` : ""}${s.cuotas ? `<p>o ${s.cuotas.cantidad} cuotas de ${money(s.cuotas.valor)}</p>` : ""}${s.gastosAdministrativos ? `<p>+ ${money(s.gastosAdministrativos)} de gastos administrativos por pasajero</p>` : ""}${s.precioLista ? `<p class="paq-precio-nota">Precio de lista: ${money(s.precioLista)}</p>` : ""}${s.descuentoTercerPasajero ? `<p>Descuento de ${money(s.descuentoTercerPasajero)} para el tercer pasajero.</p>` : ""}${s.duracion ? `<p>${e(s.duracion)}</p>` : ""}${s.hotel ? `<p>Hotel: ${e(s.hotel)}</p>` : ""}<p>${e(s.transporte)}</p><details class="paq-detalle"><summary>Qué incluye esta salida</summary><ul>${s.incluye.map(i=>`<li>${e(i)}</li>`).join("")}${(s.noIncluye||[]).map(i=>`<li class="no">No incluye: ${e(i)}</li>`).join("")}${(s.opcionales||[]).map(i=>`<li>Opcional: ${e(i)}</li>`).join("")}</ul></details></section>`).join("") : "";
    return `<article class="paq${p.foto ? " paq-con-foto" : ""}" id="${e(p.id)}">
      ${p.foto ? `<figure class="paq-foto${p.fotoCompleta ? " paq-foto--completa" : p.fotoContener ? " paq-foto--contener" : ""}"${encuadreFoto(p)}><img src="${e(p.foto)}" alt="${e(p.fotoAlt || p.nombre)}"${p.fotoCompleta ? "" : ' width="1600" height="1000"'} loading="lazy" decoding="async"></figure>` : ""}
      ${p.destacado ? `<span class="paq-badge">${e(p.destacado)}</span>` : ""}
      <div class="paq-head">
        <p class="paq-meta">${e(p.duracion)} · ${e(p.transporte)}</p>
        <h3>${e(p.nombre)}</h3>
        ${p.subtitulo ? `<p class="paq-sub">${e(p.subtitulo)}</p>` : ""}
        <p class="paq-fechas">📅 ${e(p.fechas)}</p>
        ${p.hotel ? `<p class="paq-hotel">🏨 ${e(p.hotel)}</p>` : ""}
      </div>
      <div class="paq-precio">
        <span class="paq-precio-label">Desde</span>
        <span class="paq-precio-valor">${money(precioMostrado(p))}</span>
        <span class="paq-precio-nota">por persona${p.reserva ? ` · + ${money(p.reserva)} gastos de reserva` : ""}</span>
        ${cuota ? `<span class="paq-precio-nota paq-cuotas">o ${cuota.cantidad} cuotas de ${money(cuota.valor)}</span>` : ""}
        ${p.cyberActiva && p.cyber.condicion ? `<span class="paq-precio-nota">${e(p.cyber.condicion)}.</span>` : ""}
        ${p.condicionPago ? `<span class="paq-precio-nota">${e(p.condicionPago)}.</span>` : ""}
        ${p.pagoConsulta ? `<span class="paq-precio-nota">${e(p.pagoConsulta)}.</span>` : ""}
        ${p.aclaracionPrecio ? `<span class="paq-precio-nota">${e(p.aclaracionPrecio)}</span>` : ""}
        ${p.precioLista && !p.salidas ? `<span class="paq-precio-nota">Precio de lista: ${money(p.precioLista)}</span>` : ""}
        ${p.gastosAdministrativos && !opciones.gastosGenerales ? `<span class="paq-precio-nota">No incluye ${money(p.gastosAdministrativos)} de gastos administrativos por pasajero.</span>` : ""}
      </div>
      ${salidas}
      ${variantes ? `<ul class="paq-opciones">${variantes}</ul>` : ""}
      ${p.incluye && !p.salidas ? `<details class="paq-detalle"${opciones.abierto ? " open" : ""}><summary>Qué incluye</summary><ul>${p.incluye.map(i=>`<li>${e(i)}</li>`).join("")}${(p.noIncluye||[]).map(i=>`<li class="no">No incluye: ${e(i)}</li>`).join("")}</ul></details>` : ""}
      <a class="btn btn-primary" href="https://wa.me/5491131537638?text=${encodeURIComponent(mensajeWhatsapp(p))}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
    </article>`.replace(/[ \t]+$/gm, "");
  }
  window.MYE_CATALOGO = { dinero, escapar, precioMostrado, desglose, mensajeWhatsapp, tarjeta, encuadreFoto };
})(window);
