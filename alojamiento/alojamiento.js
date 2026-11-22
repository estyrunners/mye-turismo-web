(function () {
  'use strict';
  const grid = document.getElementById('hoteles-grid');
  const hoteles = (window.HOTELES || []).filter(h => h.id && h.nombre && h.destino && Array.isArray(h.fotos) && h.fotos.some(f => f.src && f.alt));
  const elemento = (tag, clase, texto) => {
    const el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto) el.textContent = texto;
    return el;
  };
  hoteles.forEach(hotel => {
    const fotos = hotel.fotos.filter(f => f.src && f.alt);
    const card = elemento('article', 'hotel-card');
    const galeria = elemento('div', 'hotel-galeria');
    galeria.setAttribute('role', 'region');
    galeria.setAttribute('aria-roledescription', 'carrusel');
    galeria.setAttribute('aria-label', 'Fotos de ' + hotel.nombre);
    const tira = elemento('div', 'hotel-fotos');
    tira.tabIndex = 0;
    tira.setAttribute('aria-label', 'Galería de ' + hotel.nombre + '. Deslizá o usá las flechas del teclado para recorrer las fotos.');
    fotos.forEach((foto, i) => {
      const figure = elemento('figure');
      figure.setAttribute('role', 'group');
      figure.setAttribute('aria-label', 'Foto ' + (i + 1) + ' de ' + fotos.length);
      const img = elemento('img');
      img.src = foto.src;
      img.alt = foto.alt;
      img.loading = 'lazy';
      img.width = 960;
      img.height = 600;
      figure.append(img);
      tira.append(figure);
    });
    galeria.append(tira);
    if (fotos.length > 1) {
      let actual = 0;
      const anterior = elemento('button', 'hotel-anterior', '‹');
      const siguiente = elemento('button', 'hotel-siguiente', '›');
      anterior.type = siguiente.type = 'button';
      anterior.setAttribute('aria-label', 'Foto anterior de ' + hotel.nombre);
      siguiente.setAttribute('aria-label', 'Foto siguiente de ' + hotel.nombre);
      const pie = elemento('div', 'hotel-galeria-pie');
      const contador = elemento('span', 'hotel-contador');
      contador.setAttribute('aria-live', 'polite');
      contador.setAttribute('aria-atomic', 'true');
      const puntos = elemento('div', 'hotel-puntos');
      const ir = indice => {
        const destino = Math.max(0, Math.min(fotos.length - 1, indice));
        tira.scrollTo({left: destino * tira.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
      };
      const botones = fotos.map((foto, i) => {
        const boton = elemento('button', 'hotel-punto');
        boton.type = 'button';
        boton.setAttribute('aria-label', 'Ver foto ' + (i + 1) + ' de ' + hotel.nombre);
        boton.addEventListener('click', () => ir(i));
        puntos.append(boton);
        return boton;
      });
      const actualizar = () => {
        actual = Math.max(0, Math.min(fotos.length - 1, Math.round(tira.scrollLeft / (tira.clientWidth || 1))));
        contador.textContent = 'Foto ' + (actual + 1) + ' de ' + fotos.length;
        anterior.disabled = actual === 0;
        siguiente.disabled = actual === fotos.length - 1;
        botones.forEach((b, i) => b.setAttribute('aria-current', String(i === actual)));
      };
      anterior.addEventListener('click', () => ir(actual - 1));
      siguiente.addEventListener('click', () => ir(actual + 1));
      tira.addEventListener('keydown', e => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
        e.preventDefault();
        ir(e.key === 'Home' ? 0 : e.key === 'End' ? fotos.length - 1 : actual + (e.key === 'ArrowRight' ? 1 : -1));
      });
      tira.addEventListener('scroll', actualizar, {passive: true});
      window.addEventListener('resize', () => {tira.scrollTo({left: actual * tira.clientWidth, behavior: 'instant'}); actualizar();});
      pie.append(contador, puntos);
      galeria.append(anterior, siguiente, pie);
      actualizar();
    }
    const info = elemento('div', 'hotel-info');
    info.append(elemento('p', 'hotel-destino', hotel.destino), elemento('h3', '', hotel.nombre));
    if (hotel.descripcion) info.append(elemento('p', '', hotel.descripcion));
    if (Array.isArray(hotel.servicios) && hotel.servicios.length) {
      const servicios = elemento('ul', 'hotel-servicios');
      hotel.servicios.forEach(s => servicios.append(elemento('li', '', s)));
      info.append(servicios);
    }
    info.append(elemento('p', 'hotel-consulta', 'Consultá tarifa y disponibilidad para tus fechas.'));
    const consulta = elemento('a', 'btn btn-primary', 'Consultar este hotel');
    consulta.href = 'https://wa.me/5491131537638?text=' + encodeURIComponent('Hola MyE Turismo, quiero consultar por solo alojamiento en ' + hotel.nombre + ' (' + hotel.destino + '). Fechas de entrada y salida: . Cantidad de personas: .');
    info.append(consulta);
    card.append(galeria, info);
    grid.append(card);
  });
  document.getElementById('hoteles-espera').hidden = hoteles.length > 0;
})();
