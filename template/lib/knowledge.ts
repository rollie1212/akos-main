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

    for (const file of walk(