import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60; // Allow more time for AI processing

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: { message: "Groq API Key not configured (set GROQ_API_KEY)." } },
        { status: 500 }
      );
    }

    // Groq OpenAI-compatible endpoint
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        // These are optional but keep parity with the existing OpenRouter route.
        "HTTP-Referer": process.env.SITE_URL || "https://blueelephanttravels.com",
        "X-Title": "Royal Journeys AI",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    console.error("Groq API Error:", error);
    return NextResponse.json(
      { error: { message: error?.message || "Internal Server Error" } },
      { status: 500 }
    );
  }
}

