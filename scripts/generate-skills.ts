import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getDocumentText } from "../src/document.tsx";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "skills", "self-documenting-code");
const outFile = join(outDir, "SKILL.md");

const content = `---
name: self-documenting-code
description: A guide for writing self-documenting code
---

${getDocumentText()}
`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, content);

console.log(`Wrote ${outFile}`);
