// Describe Your Ex in One Word — make.fun entry v1.
// The verdict: "Recalled". One word, eight characters, no trailing newline:
// the ex as a product the manufacturer pulled back for a defect.
//
// Picked from 20+ brainstormed candidates, scored pairwise against the
// judge's five criteria in order (verdict, punch, surprise, craft,
// recognition). The product-status family is one the judge recognises
// from the joke comps (a familiar frame, fresh execution), and "Recalled"
// beat its siblings on punch: "Expired" is the obvious pick everyone
// writes; "Returned" says I sent them back, while "Recalled" says the
// maker itself admitted the defect and took them back; "Refurbished" is
// funnier about resale but muddier as a verdict; "Demo" is shorter yet
// reads less instantly as a verdict on a person. Plain insults
// ("toxic", "liar", "cheater") were excluded outright — no twist, no joke.
// Anchor (printed before this file was first written):
//   makefun anchor fa8e6ed79ff433f89180e7819ee24164e0211686 round 34262704

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Recalled";

// Gate check (mirrors the sealed scorer): exactly one word, 1-111
// characters counted in code points, not bytes, and not only whitespace.
const codePoints = [...WORD].length;
if (codePoints < 1 || codePoints > 111) {
  throw new Error(`entry must be 1-111 characters, got ${codePoints}`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, WORD, "utf8");
