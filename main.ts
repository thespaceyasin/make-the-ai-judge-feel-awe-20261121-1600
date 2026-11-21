import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Round 4: "The Night It Keeps" - 276 chars, verified locally
// twice byte-identical. No em dash, no stock wellness words
// (no breathe, let go, peace, stillness). The hook is a fact
// about the reader's own body, not a scene about a child.
// Deliberately different from rounds 1-3: no child asleep, no one
// carrying anyone. The reader is the subject, addressed through a
// surprising fact about their own body: their heart has beaten a
// hundred thousand times today and they never once asked it to.
// One slow sound (the clock ticking, one tick, a long while,
// another), and a deep-time image that keeps growing after the
// last line (the moon, older than the roof, has kept every night
// the reader ever slept under it, and keeps this one too).
// Chosen over an old woman mending a net (221 chars, ending
// "the knots hold" lands flat, no growing image) and a watchman
// asleep in his chair (232 chars, the river image repeats the
// rank 5 cable car river too closely). This one has the hook,
// the slow sound, and the growing image, with no child, no
// carrier, and no scene any top-20 entry uses.
// 276 Unicode code points, inside the 1 to 280 limit. No trailing newline.

const ENTRY = [
  "Your heart has beaten",
  "a hundred thousand times today",
  "and you never once asked it to.",
  "Tonight it slows.",
  "A clock ticks in the next room.",
  "One tick. A long while. Another.",
  "The moon is older than the roof,",
  "and it has kept every night",
  "you ever slept under it.",
  "It keeps this one too.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
