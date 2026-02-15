import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt } from "./systemPrompt";
import { checkRateLimit } from "./rateLimit";
import { modelCycler, isRateLimitError, extractRetryDelay } from "./modelCycler";

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

  const chatHistory = history.map((msg) => ({
    role: msg.role === "ai" ? ("model" as const) : ("user" as const),
    parts: [{ text: msg.content }],
  }));

  let lastError: unknown = null;
  const maxAttempts = 3;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const modelName = modelCycler.getAvailableModel();

    if (!modelName) {
      const retrySec = modelCycler.getShortestCooldown();
      return NextResponse.json(
        {
          error: "All models are temporarily unavailable. Please try again later.",
          retryAfterMs: retrySec * 1000,
        },
        { status: 503 }
      );
    }

    try {
      console.log(`Chat request using model: ${modelName} (attempt ${attempt + 1})`);

      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: systemPrompt,
      });

      const chat = model.startChat({ history: chatHistory });
      const result = await chat.sendMessageStream(message);

      modelCycler.recordSuccess(modelName);

      const stream = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of result.stream) {
              const text = chunk.text();
              if (text) {
                controller.enqueue(new TextEncoder().encode(text));
              }
            }
            controller.close();
          } catch (err) {
            controller.error(err);
          }
        },
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Transfer-Encoding": "chunked",
        },
      });
    } catch (error: unknown) {
      lastError = error;

      if (isRateLimitError(error)) {
        const delay = extractRetryDelay(String(error));
        modelCycler.markRateLimited(modelName, delay ?? undefined);
        console.warn(`Rate limit on ${modelName}, rotating to next model...`);
        continue;
      }

      // Non-rate-limit error, fail immediately
      console.error("Gemini API error:", error);
      const details = error instanceof Error ? error.message : "Unknown error";
      return NextResponse.json(
        { error: "Failed to generate response", details },
        { status: 500 }
      );
    }
  }

  // All attempts exhausted
  console.error("All model attempts exhausted:", lastError);
  const details = lastError instanceof Error ? lastError.message : "Unknown error";
  return NextResponse.json(
    { error: "Failed to generate response after trying all available models", details },
    { status: 500 }
  );
}
