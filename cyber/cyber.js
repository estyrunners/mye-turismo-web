(function () {
  "use strict";
  const ui = window.MYE_CATALOGO;
  const todas = window.PAQUETES.filter(p=>p.cyberActiva);
  const regiones = ["Litoral","Cuyo","Sierras","Costa Atlántica","Norte","Patagonia"];
  const mostrar = (tipo) => {
    const lista = todas.filter(p=>tipo==="todos" || p.puerta===tipo);
    document.getElementById("cantidad").textContent = lista.length ? `${lista.length} propuestas · Viajes en enero y febrero de 2027` : "No hay promociones vigentes para esta selección.";
    document.getElementById("ofertas").innerHTML = regiones.map(region=>{
      const items = lista.filter(p=>p.region===region);
      return items.length ? `<section class="cyber-region"><h2>${ui.escapar(region)}</h2><div class="grid">${items.map(p=>ui.tarjeta(p,{abierto:true,gastosGenerales:true})).join("")}</div></section>` : "";
    }).join("");
  };
  if (todas.length) {
    document.getElementById("vigencia").setAttribute("aria-label", "Promoción del 7 al 11 de noviembre de 2026");
  } else {
    document.getElementById("vigencia").textContent = "La campaña Cyber finalizó.";
    document.querySelector(".cyber-explicacion").hidden = true;
    document.querySelector(".cyber-filtros").hidden = true;
    document.getElementById("vencidas").hidden = false;
    document.querySelector(".cyber-portada h1").textContent = "Seguimos viajando con vos.";
  }
  document.querySelectorAll("[data-tipo]").forEach(b=>b.addEventListener("click",()=>{
    document.querySelectorAll("[data-tipo]").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));
    mostrar(b.dataset.tipo);
  }));
  document.getElementById("creditos").textContent = [...new Set(todas.filter(p=>p.fotoCredito).map(p=>p.fotoCredito))].map(c=>"Foto: "+c).join(" · ");
  mostrar("todos");
})();
