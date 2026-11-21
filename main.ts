import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Round 3: "The Acorn" - a short text to relax the reader.
// A child asleep on a swing, grandmother's hand on the rope,
// one slow push, a long while, another. The oak above was an
// acorn when the town was only a field, growing one ring a year,
// growing still. The hook mirrors the rank 1 winner's opening
// move (a surprising claim about you), then pays it off: the
// child, like the tree, was small once and is growing still.
// Chosen over a rain on the tin roof draft (the moon watching
// the rain felt forced) and a coal in the stove draft (warm
// ending, but its "before there was a road" line echoed the
// rank 5 cable car text too closely). It beats round 1 (father
// shoulder field walk, no hook and no deep time) and round 2
// (sea glass, deep time but no hook and the waves are the only
// sound): this one has the hook, the slow sound, and the
// deep time image that keeps growing after the last line.
// 257 Unicode code points, inside the 1 to 280 limit. No trailing newline.

const ENTRY = [
  "You were an acorn once, too.",
  "You are asleep on the swing.",
  "Your grandmother's hand is on the rope.",
  "A slow push. A long while. Another.",
  "The oak above you was an acorn",
  "when the town was only a field.",
  "It has grown one ring a year since,",
  "and it is growing still.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
