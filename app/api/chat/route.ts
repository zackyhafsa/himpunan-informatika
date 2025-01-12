import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { aiTrainer } from "../../lib/aiTrainer";

export async function POST(request: Request) {
  try {
    // Validasi API key
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        {
          error: "API Key Gemini Tidak Dikonfigurasi",
          success: false,
        },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Ambil data dari request
    const { messages } = await request.json();

    // Validasi messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        {
          error: "Format pesan tidak valid",
          success: false,
        },
        { status: 400 }
      );
    }

    // Generate system prompt dan contoh
    const systemPrompt = aiTrainer.generateSystemPrompt();
    const trainingExamples = aiTrainer.getTrainingExamples();

    // Siapkan riwayat percakapan dengan format yang benar
    const chatHistory = [
      {
        role: "user",
        parts: [{ text: systemPrompt + "\n" + trainingExamples }],
      },
      ...messages.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.parts }],
      })),
    ];

    // Ambil pesan terakhir
    const lastMessage = messages[messages.length - 1];

    // Kirim pesan ke Gemini
    const result = await model.generateContent({
      contents: chatHistory,
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    // Bersihkan respons
    const cleanedResponse = result.response
      .text()
      .replace(/\*{2,}/g, "*")
      .replace(/\s+/g, " ")
      .trim();
    const formattedResponse = result.response
      .text()
      .split(" ")
      .map((word) =>
        ["penting", "utama", "khusus"].includes(word.toLowerCase()) ? `*${word}*` : word
      )
      .join(" ");

    return NextResponse.json({
      message: formattedResponse,
      success: true,
    }); 
  } catch (error: any) {
    console.error("Gemini API Error:", error);

    return NextResponse.json(
      {
        error: error.message || "Terjadi kesalahan",
        success: false,
      },
      { status: 500 }
    );
  }
}
