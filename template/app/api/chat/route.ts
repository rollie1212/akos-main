import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { askDeepSeek } from "../../../lib/deepseek";
import { loadKnowledge } from "../../../lib/knowledge";

export const runtime = "nodejs";

const RequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      }),
    )
    .min(1)
    .max(12),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    const parsed = RequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const documents = loadKnowledge();
    const context = documents
      .map((document) => `SOURCE: ${document.path}\n# ${document.title}\n${document.content}`)
      .join("\n\n---\n\n")
      .slice(0, 50000);

    if (!context.trim()) {
      return NextResponse.json(
        { error: "No Markdown knowledge files were found in knowledge/ or career-data/." },
        { status: 500 },
      );
    }

    const answer = await askDeepSeek(parsed.data.messages, context);
    return NextResponse.json({ answer });
  } catch (error) {
    const message = error instanceof Error ? error.message : "The assistant is unavailable.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
