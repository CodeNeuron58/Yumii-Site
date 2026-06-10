// Generates properly-sized favicon assets from public/yumi-logo.png.
// The mascot is cropped to a 60% center square (the face) and written
// at 256, 64, 32, and 16 px so the browser tab can pick the right one.
//
// Run from project root: `node scripts/make-favicon.mjs`
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC = path.join(__dirname, "..", "public", "yumi-logo.png");
const OUT = path.join(__dirname, "..", "public");

// The 2000x2000 source has the mascot face centered, with a leaf wrap
// around it. The face is roughly the center 60% of the frame.
const CROP = {
  left: 400,
  top: 400,
  width: 1200,
  height: 1200,
};

async function main() {
  const sizes = [256, 64, 32, 16];
  for (const size of sizes) {
    const out = path.join(OUT, `favicon-${size}.png`);
    await sharp(SRC)
      .extract(CROP)
      .resize(size, size, { fit: "cover" })
      .png()
      .toFile(out);
    console.log(`Wrote ${out}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
