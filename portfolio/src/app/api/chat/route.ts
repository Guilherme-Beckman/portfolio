import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt } from "./systemPrompt";
import { checkRateLimit } from "./rateLimit";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const rateLimitResult = checkRateLimit(ip);
  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      {
        error: "Rate limit exceeded. Please try again later.",
        retryAfterMs: rateLimitResult.retryAfterMs,
      },
      { status: 429 }
    );
  }

  let message: string;
  let locale: string;
  let history: { role: string; content: string }[];

  try {
    const body = await request.json();
    message = body.message;
    locale = body.locale || "en";
    history = body.history || [];
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const systemPrompt = buildSystemPrompt(locale);

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
      systemInstruction: systemPrompt,
    });

    const chatHistory = history.map((msg) => ({
      role: msg.role === "ai" ? ("model" as const) : ("user" as const),
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({ history: chatHistory });
    const result = await chat.sendMessage(message);
    const content = result.response.text();

    return NextResponse.json({ content });
  } catch (error: unknown) {
    console.error("Gemini API error:", error);
    const details = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to generate response", details },
      { status: 500 }
    );
  }
}
