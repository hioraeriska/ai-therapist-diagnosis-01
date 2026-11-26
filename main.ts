import { mkdirSync, writeFileSync } from "node:fs";

// The diagnosis line: a deadpan clinical finding about the human's habit,
// with the twist landing at the very end. Pattern from the sponsor's sibling
// winners: concrete habit + sharp reversal in the final words.
const diagnosis =
  "Diagnosis: chronic people-pleasing. Patient apologized for taking up the session he booked to stop apologizing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, diagnosis, "utf8");
