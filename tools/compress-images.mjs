// Compress every JPG/JPEG/PNG under src/assets and public in place.
// JPEG: mozjpeg quality 82, progressive, longest edge capped at 2400px (site renders at ≤1280px CSS, 2x retina = 2560px max).
// PNG: lossless recompression (palette where possible). Originals backed up to ../worldsmiles-image-originals/.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const ROOTS = ['src/assets', 'public', 'src/logo.png'];
const BACKUP = path.resolve('..', 'worldsmiles-image-originals');
const MAX_EDGE = 2400;
const files = [];
(function walk(p) {
  const st = fs.statSync(p);
  if (st.isDirectory()) { for (const f of fs.readdirSync(p)) walk(path.join(p, f)); }
  else if (/\.(jpe?g|png)$/i.test(p)) files.push(p);
})('.');
const targets = files.filter((f) => ROOTS.some((r) => f === r || f.startsWith(r + path.sep) || f.startsWith('./' + r)));

let before = 0, after = 0; const rows = []; const failed = [];
for (const f of targets) {
  const orig = fs.statSync(f).size; before += orig;
  const bak = path.join(BACKUP, f); fs.mkdirSync(path.dirname(bak), { recursive: true }); if (!fs.existsSync(bak)) fs.copyFileSync(f, bak);
  try {
    const img = sharp(bak, { failOn: 'error' });
    const meta = await img.metadata();
    let pipe = img.rotate(); // honor EXIF orientation, then strip metadata
    if (Math.max(meta.width, meta.height) > MAX_EDGE) pipe = pipe.resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true });
    const buf = meta.format === 'png'
      ? await pipe.png({ compressionLevel: 9, palette: true, quality: 100, effort: 10 }).toBuffer()
      : await pipe.jpeg({ quality: 82, mozjpeg: true, progressive: true, chromaSubsampling: '4:2:0' }).toBuffer();
    // never make a file bigger
    if (buf.length < orig) fs.writeFileSync(f, buf);
    const outMeta = await sharp(f).metadata();               // verify decodable
    const outSize = fs.statSync(f).size; after += outSize;
    rows.push({ f, orig, outSize, dim: `${meta.width}x${meta.height}`, outDim: `${outMeta.width}x${outMeta.height}` });
  } catch (e) { failed.push({ f, err: e.message }); fs.copyFileSync(bak, f); after += orig; }
}
const mb = (n) => (n / 1048576).toFixed(2);
console.log('file'.padEnd(52), 'before'.padStart(8), 'after'.padStart(8), 'saved'.padStart(6), '  dims');
for (const r of rows) console.log(r.f.padEnd(52), (mb(r.orig) + 'M').padStart(8), (mb(r.outSize) + 'M').padStart(8), (Math.round((1 - r.outSize / r.orig) * 100) + '%').padStart(6), ` ${r.dim} -> ${r.outDim}`);
console.log(`\nTOTAL ${mb(before)} MB -> ${mb(after)} MB (${Math.round((1 - after / before) * 100)}% smaller), ${rows.length} files processed, ${failed.length} failed`);
for (const x of failed) console.log('FAILED', x.f, x.err);
