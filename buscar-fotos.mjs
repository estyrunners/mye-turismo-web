/* Busca candidatas de foto en Wikimedia Commons para cada destino.
   Uso: node buscar-fotos.mjs "Tandil Argentina" "Bariloche" ...
   Devuelve las mejores por resolución, con autor y licencia. */

const UA = "MyE-Turismo-Landing/1.0 (contacto: mye.turismo@hotmail.com.ar)";
const API = "https://commons.wikimedia.org/w/api.php";

async function buscar(termino, limite = 8) {
  const url =
    `${API}?action=query&format=json&origin=*` +
    `&generator=search&gsrsearch=${encodeURIComponent("filetype:bitmap " + termino)}` +
    `&gsrnamespace=6&gsrlimit=${limite}` +
    `&prop=imageinfo&iiprop=url|size|extmetadata` +
    `&iiextmetadatafilter=Artist|LicenseShortName|ImageDescription`;

  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) return { termino, error: `${res.status}` };

  const data = await res.json();
  const pages = data?.query?.pages;
  if (!pages) return { termino, candidatas: [] };

  const limpiar = (s) =>
    s ? String(s).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().slice(0, 90) : "";

  const candidatas = Object.values(pages)
    .map((p) => {
      const ii = p.imageinfo?.[0];
      if (!ii) return null;
      const md = ii.extmetadata || {};
      return {
        titulo: p.title.replace(/^File:/, ""),
        url: ii.url,
        w: ii.width,
        h: ii.height,
        mp: +((ii.width * ii.height) / 1e6).toFixed(1),
        ratio: +(ii.width / ii.height).toFixed(2),
        autor: limpiar(md.Artist?.value),
        licencia: limpiar(md.LicenseShortName?.value),
        desc: limpiar(md.ImageDescription?.value)
      };
    })
    .filter(Boolean)
    // Sirven solo horizontales y grandes: las tarjetas son 16:10.
    .filter((c) => c.w >= 1600 && c.ratio >= 1.2)
    .sort((a, b) => b.mp - a.mp)
    .slice(0, 5);

  return { termino, candidatas };
}

const terminos = process.argv.slice(2);
if (!terminos.length) {
  console.error('Uso: node buscar-fotos.mjs "Tandil Argentina" "Bariloche lago"');
  process.exit(1);
}

for (const t of terminos) {
  const r = await buscar(t);
  console.log(`\n=== ${t} ===`);
  if (r.error) { console.log("  ERROR", r.error); continue; }
  if (!r.candidatas.length) { console.log("  (sin candidatas horizontales >=1600px)"); continue; }
  r.candidatas.forEach((c, i) => {
    console.log(`  [${i}] ${c.w}x${c.h} (${c.mp}MP, ${c.ratio}:1) — ${c.titulo}`);
    console.log(`      ${c.licencia || "licencia?"} · ${c.autor || "autor?"}`);
    console.log(`      ${c.url}`);
  });
}
