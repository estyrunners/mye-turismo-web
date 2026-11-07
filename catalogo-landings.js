(function () {
  "use strict";
  const grid = document.querySelector("[data-catalogo-tag]");
  if (!grid || !window.MYE_CATALOGO || !window.PAQUETES) return;
  grid.innerHTML = window.PAQUETES.filter(p=>p.tags.includes(grid.dataset.catalogoTag)).map(p=>window.MYE_CATALOGO.tarjeta(p)).join("");
})();
