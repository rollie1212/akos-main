import fs from "node:fs";
import path from "node:path";

export type KnowledgeChunk = {
  path: string;
  title: string;
  content: string;
};

const ROOTS = ["knowledge", "career-data"];

export function loadKnowledge(): KnowledgeChunk[] {
  const documents: KnowledgeChunk[] = [];

  for (const root of ROOTS) {
    const absoluteRoot = path.join(process.cwd(), root);
    if (!fs.existsSync(absoluteRoot)) continue;

    for (const file of walkFiles(absoluteRoot)) {
      if (!file.endsWith(".md") || path.basename(file).toLowerCase() === "readme.md") continue;

      const content = fs.readFileSync(file, "utf8").trim();
      if (!content) continue;

      const relativePath = path.relative(process.cwd(), file).split(path.sep).join("/");
      const heading = content.match(/^#\s+(.+)$/m)?.[1]?.trim();

      documents.push({
        path: relativePath,
        title: heading || path.basename(file, ".md").replace(/[-_]/g, " "),
        content,
      });
    }
  }

  return documents.sort((a, b) => a.path.localeCompare(b.path));
}

function walkFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walkFiles(entryPath) : [entryPath];
  });
}
