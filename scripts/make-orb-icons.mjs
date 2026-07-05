// Generates the orb logo + favicon assets from public/orb-logo-src.png
// (the desktop app's icon — Yumii's post-pivot brand mark).
//
// Run from project root: `node scripts/make-orb-icons.mjs`
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "public", "orb-logo-src.png");

const jobs = [
  { out: path.join(ROOT, "public", "orb-logo.png"), size: 128 }, // nav logo
  { out: path.join(ROOT, "src", "app", "icon.png"), size: 64 }, // favicon
  { out: path.join(ROOT, "src", "app", "apple-icon.png"), size: 180 }, // apple touch
];

for (const { out, size } of jobs) {
  await sharp(SRC).resize(size, size).png().toFile(out);
  console.log("wrote", out, `${size}px`);
}
