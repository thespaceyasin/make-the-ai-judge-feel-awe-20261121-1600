import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "Carried Home" - a short text to relax the reader.
// A child asleep on a father's shoulder, carried home on foot
// through a field, crickets ticking, on a path that was a river once.
// 278 Unicode code points, inside the 1 to 280 limit. No trailing newline.

const ENTRY = [
  "You are asleep on your father's shoulder.",
  "He walks home through the field.",
  "A step. A pause. A step.",
  "Crickets tick in the grass.",
  "The path was a river once,",
  "and the stones under his feet",
  "were smoothed by water",
  "before there was a field,",
  "and the earth turns slow,",
  "carrying you home.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
