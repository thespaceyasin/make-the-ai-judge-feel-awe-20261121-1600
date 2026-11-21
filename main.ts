import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "The Bread, Rising" - a short text to relax the reader.
// A child asleep in a kitchen chair, a grandmother kneading bread,
// rain on a tin roof, and dough rising slow as hills.
// 271 Unicode code points, inside the 1 to 280 limit. No trailing newline.

const ENTRY = [
  "You are asleep in the kitchen chair.",
  "Your grandmother kneads the bread.",
  "Thump. A turn. Thump.",
  "Rain ticks the tin roof.",
  "The same rain fell on the wheat field,",
  "a summer ago, before you were born.",
  "The dough rises slow as hills,",
  "and it is rising still,",
  "warm, under her hands.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
