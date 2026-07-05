#!/usr/bin/env node
/**
 * generate-favicon.mjs
 *
 * Generates all favicon assets from a single source image.
 *
 * Usage:
 *   node scripts/generate-favicon.mjs <source-image>
 *   pnpm favicon <source-image>
 *
 * Example:
 *   pnpm favicon public/favicon-source.png
 *
 * Output (all written to public/):
 *   favicon.ico          — 16 × 16, 32 × 32, 48 × 48 (multi-size)
 *   favicon-16x16.png
 *   favicon-32x32.png
 *   apple-touch-icon.png — 180 × 180
 *   android-chrome-192x192.png
 *   android-chrome-512x512.png
 *   site.webmanifest
 */

import sharp from "sharp";
import { writeFileSync } from "fs";
import { join } from "path";

const source = process.argv[2];

if (!source) {
  console.error("Error: no source image provided.");
  console.error("Usage: node scripts/generate-favicon.mjs <source-image>");
  process.exit(1);
}

const OUT = "public";

// ─── PNG variants ────────────────────────────────────────────────────────────

const variants = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
];

for (const { name, size } of variants) {
  const buf = await sharp(source)
    .resize(size, size, { fit: "cover" })
    .png()
    .toBuffer();
  writeFileSync(join(OUT, name), buf);
  console.log(`✓ ${name}`);
}

// ─── favicon.ico (multi-size: 16 + 32 + 48) ──────────────────────────────────

const icoSizes = [16, 32, 48];
const icoPngs = await Promise.all(
  icoSizes.map((s) =>
    sharp(source).resize(s, s, { fit: "cover" }).png().toBuffer(),
  ),
);

writeFileSync(join(OUT, "favicon.ico"), buildIco(icoPngs, icoSizes));
console.log("✓ favicon.ico");

// ─── site.webmanifest ─────────────────────────────────────────────────────────

const manifest = {
  name: "",
  short_name: "",
  icons: [
    { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  ],
  theme_color: "#ffffff",
  background_color: "#ffffff",
  display: "standalone",
};
writeFileSync(
  join(OUT, "site.webmanifest"),
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log("✓ site.webmanifest");

// ─── Done ─────────────────────────────────────────────────────────────────────

console.log(`
Done! The following tags are already in src/layouts/BaseLayout.astro:

  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />

Remember to fill in "name" / "short_name" / "theme_color" in public/site.webmanifest.
`);

// ─── ICO builder (pure JS, embeds PNG data) ───────────────────────────────────

/**
 * Builds an ICO file buffer by embedding PNG images.
 * Supported since Windows Vista / IE 11.
 *
 * @param {Buffer[]} pngs   - Array of PNG buffers
 * @param {number[]} sizes  - Corresponding pixel sizes (e.g. [16, 32, 48])
 * @returns {Buffer}
 */
function buildIco(pngs, sizes) {
  const count = pngs.length;
  const headerBytes = 6 + count * 16; // ICONDIR + ICONDIRENTRYs

  // ICONDIR (6 bytes)
  const iconDir = Buffer.alloc(6);
  iconDir.writeUInt16LE(0, 0); // reserved
  iconDir.writeUInt16LE(1, 2); // type: 1 = icon
  iconDir.writeUInt16LE(count, 4);

  // Compute data offsets
  let dataOffset = headerBytes;
  const entries = pngs.map((png, i) => {
    const entry = { png, size: sizes[i], offset: dataOffset };
    dataOffset += png.length;
    return entry;
  });

  // ICONDIRENTRYs (16 bytes each)
  const entryBuffers = entries.map(({ png, size, offset }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // width  (0 means 256)
    e.writeUInt8(size >= 256 ? 0 : size, 1); // height
    e.writeUInt8(0, 2); // color count (0 = no palette)
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(0, 4); // color planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(png.length, 8); // size of image data
    e.writeUInt32LE(offset, 12); // offset of image data
    return e;
  });

  return Buffer.concat([
    iconDir,
    ...entryBuffers,
    ...entries.map((e) => e.png),
  ]);
}
