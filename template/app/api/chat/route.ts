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
