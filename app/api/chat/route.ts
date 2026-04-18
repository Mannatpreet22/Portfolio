import { NextRequest, NextResponse } from "next/server";

import { generateChatbotAnswer } from "@/lib/chatbot";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { message?: string };
    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const answer = await generateChatbotAnswer(message);

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Chat API error:", error);

    const message =
      error instanceof Error && error.message === "Missing GEMINI_API_KEY"
        ? "Missing GEMINI_API_KEY. Add it to your environment before using the chatbot."
        : "Unable to generate a response right now.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
