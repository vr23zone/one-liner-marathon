// One-Liner Marathon — make.fun entry
// Writes a single one-line comedy joke (1-280 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "The 'World's Best Boss' mug was a group gift — bought the same week the whole office quietly updated their résumés.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
