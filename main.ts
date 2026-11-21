import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "Sea Glass" - a short text to relax the reader.
// A child asleep in a mother's lap on the sand, waves coming in
// and going out, a piece of green sea glass in the closed hand:
// it was a bottle once, tumbled soft by a thousand tides.
// Chosen over a lighthouse draft (deep time too shallow: the beam
// has swept only since before the town had a name) and a snow on
// the roof beam draft (lovely deep time, but no slow sound).
// 260 Unicode code points, inside the 1 to 280 limit. No trailing newline.

const ENTRY = [
  "You fall asleep in your mother's lap.",
  "A wave comes in.",
  "A wave goes out.",
  "In your closed hand, a piece of green glass,",
  "smooth as a marble.",
  "It was a bottle once.",
  "A thousand tides tumbled it",
  "till it went soft.",
  "The sea is smoothing it still,",
  "and the shore, and you.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
