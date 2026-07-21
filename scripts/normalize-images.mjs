// One-off asset pipeline: put every product photo from the old restogo.com
// gallery onto a single consistent surface (the rainbow tiles are the problem
// we were hired to fix). Instead of chroma-key cutouts (which halo on shadows
// and fail on translucent plastic), we DE-TINT: subtract the tile's hue
// component from every pixel that carries it, so shadows keep their darkness
// but lose the color, then level the background to the brand surface.
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'assets-src/products';
const OUT = 'src/assets/products';
const SURFACE = [244, 247, 251]; // --color-bg-soft #F4F7FB
const SIZE = 900;

const sat = (r, g, b) => Math.max(r, g, b) - Math.min(r, g, b);

async function cornerColor(buf, info) {
  const px = (x, y) => {
    const i = (y * info.width + x) * info.channels;
    return [buf[i], buf[i + 1], buf[i + 2]];
  };
  const pts = [];
  for (const [cx, cy] of [[0, 0], [info.width - 8, 0], [0, info.height - 8], [info.width - 8, info.height - 8]])
    for (let dx = 0; dx < 8; dx++) for (let dy = 0; dy < 8; dy++) pts.push(px(cx + dx, cy + dy));
  const n = pts.length;
  return [0, 1, 2].map((c) => Math.round(pts.reduce((s, p) => s + p[c], 0) / n));
}

await mkdir(OUT, { recursive: true });
for (const f of (await readdir(SRC)).filter((f) => /\.jpe?g$/i.test(f))) {
  const { data, info } = await sharp(path.join(SRC, f)).raw().toBuffer({ resolveWithObject: true });
  const [br, bgc, bb] = await cornerColor(data, info);
  const out = path.join(OUT, f.replace(/\.jpe?g$/i, '.webp'));

  if (sat(br, bgc, bb) < 40) {
    await sharp(path.join(SRC, f)).resize(SIZE, SIZE, { fit: 'inside' }).webp({ quality: 84 }).toFile(out);
    console.log(`kept     ${f}`);
    continue;
  }

  // Tile chroma direction (unit vector of bg color minus its gray)
  const bgray = (br + bgc + bb) / 3;
  const u = [br - bgray, bgc - bgray, bb - bgray];
  const ulen = Math.hypot(...u);
  const un = u.map((c) => c / ulen);
  const bgLum = bgray;
  const surfLum = (SURFACE[0] + SURFACE[1] + SURFACE[2]) / 3;

  const px = Buffer.alloc(info.width * info.height * 3);
  for (let i = 0, o = 0; i < data.length; i += info.channels, o += 3) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const gray = (r + g + b) / 3;
    const v = [r - gray, g - gray, b - gray];
    const vlen = Math.hypot(...v);
    // how much of this pixel's chroma points the tile's way (0..1)
    const cos = vlen < 4 ? 0 : Math.max(0, (v[0] * un[0] + v[1] * un[1] + v[2] * un[2]) / vlen);
    const match = cos * cos;
    // strip the tile-aligned chroma
    let nr = r - v[0] * match, ng = g - v[1] * match, nb = b - v[2] * match;
    // background leveling: pixels that were fully tile-colored get lifted to the surface
    const ngray = (nr + ng + nb) / 3;
    const isBg = match * Math.max(0, 1 - Math.abs(ngray - bgLum) / 55);
    const lift = (surfLum - bgLum) * isBg;
    nr += lift; ng += lift; nb += lift;
    // nudge leveled background toward the exact surface tint
    px[o]     = Math.max(0, Math.min(255, nr + (SURFACE[0] - nr) * isBg * 0.6));
    px[o + 1] = Math.max(0, Math.min(255, ng + (SURFACE[1] - ng) * isBg * 0.6));
    px[o + 2] = Math.max(0, Math.min(255, nb + (SURFACE[2] - nb) * isBg * 0.6));
  }
  await sharp(px, { raw: { width: info.width, height: info.height, channels: 3 } })
    .resize(SIZE, SIZE, { fit: 'inside' })
    .webp({ quality: 84 })
    .toFile(out);
  console.log(`detinted ${f}`);
}
