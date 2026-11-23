(function () {
  'use strict';
  (window.PAQUETES || []).filter(p => p.tags.includes('solos-y-solas')).forEach(p => {
    const fotos = (p.galeria || []).filter(f => f.src && f.alt);
    const portada = document.getElementById(p.id)?.querySelector('.paq-foto');
    if (!portada || fotos.length < 2) return;
    const crear = (tag, clase, texto) => {
      const el = document.createElement(tag);
      el.className = clase;
      if (texto) el.textContent = texto;
      return el;
    };
    const galeria = crear('div', 'paq-foto solos-galeria');
    galeria.setAttribute('role', 'region');
    galeria.setAttribute('aria-roledescription', 'carrusel');
    galeria.setAttribute('aria-label', 'Fotos de ' + p.hotel);
    const tira = crear('div', 'solos-fotos');
    tira.tabIndex = 0;
    tira.setAttribute('aria-label', 'Fotos del hotel. Deslizá o usá las flechas del teclado.');
    fotos.forEach((foto, i) => {
      const figure = crear('figure', '');
      figure.setAttribute('role', 'group');
      figure.setAttribute('aria-label', 'Foto ' + (i + 1) + ' de ' + fotos.length);
      const img = crear('img', '');
      img.src = foto.src; img.alt = foto.alt; img.width = 1600; img.height = 1000; img.loading = 'lazy'; img.decoding = 'async';
      figure.append(img); tira.append(figure);
    });
    const anterior = crear('button', 'solos-foto-anterior', '‹');
    const siguiente = crear('button', 'solos-foto-siguiente', '›');
    anterior.type = siguiente.type = 'button';
    anterior.setAttribute('aria-label', 'Foto anterior de ' + p.hotel);
    siguiente.setAttribute('aria-label', 'Foto siguiente de ' + p.hotel);
    const pie = crear('div', 'solos-galeria-pie');
    const contador = crear('span', 'solos-foto-contador');
    contador.setAttribute('aria-live', 'polite'); contador.setAttribute('aria-atomic', 'true');
    const puntos = crear('div', 'solos-foto-puntos');
    let actual = 0;
    const ir = indice => tira.scrollTo({left: Math.max(0, Math.min(fotos.length - 1, indice)) * tira.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    const botones = fotos.map((f, i) => {
      const b = crear('button', 'solos-foto-punto'); b.type = 'button';
      b.setAttribute('aria-label', 'Ver foto ' + (i + 1) + ' de ' + p.hotel);
      b.addEventListener('click', () => ir(i)); puntos.append(b); return b;
    });
    const actualizar = () => {
      actual = Math.max(0, Math.min(fotos.length - 1, Math.round(tira.scrollLeft / (tira.clientWidth || 1))));
      contador.textContent = 'Foto ' + (actual + 1) + ' de ' + fotos.length;
      anterior.disabled = actual === 0; siguiente.disabled = actual === fotos.length - 1;
      botones.forEach((b, i) => b.setAttribute('aria-current', String(i === actual)));
    };
    anterior.addEventListener('click', () => ir(actual - 1)); siguiente.addEventListener('click', () => ir(actual + 1));
    tira.addEventListener('scroll', actualizar, {passive:true});
    tira.addEventListener('keydown', e => {
      if (!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
      e.preventDefault(); ir(e.key === 'Home' ? 0 : e.key === 'End' ? fotos.length - 1 : actual + (e.key === 'ArrowRight' ? 1 : -1));
    });
    window.addEventListener('resize', () => {tira.scrollTo({left:actual * tira.clientWidth, behavior:'instant'}); actualizar();});
    pie.append(contador, puntos); galeria.append(tira, anterior, siguiente, pie); portada.replaceWith(galeria); actualizar();
  });
})();
