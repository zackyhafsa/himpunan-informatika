import { data } from "@/app/lib/aiTrainer";
import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return new Response("Invalid messages format", { status: 400 });
    }

    const systemPrompt = {
      role: "system",
      content: `Kamu adalah asisten dari Himpunan Mahasiswa Informatika. Tugasmu adalah menjawab pertanyaan seputar kegiatan HMIF, memberikan informasi dengan nada profesional dan ramah, boleh humble juga. berikut data yang bisa kamu ketahui ${JSON.stringify(
        data
      )}, jika bertanya di luar informasi yang saya berikan tolak saja dengan profesional dan jika anda mampu menjawab secara umum jawab saja seolah olah kamu tahu apa jawabannya. jika ada pertanyaan yang jawabannya penting tolong memakai huruf yang tebal, seperti nama, nama departemen, dll untuk memudahkan pembaca. boleh memakai emoji`,
    };

    const result = await streamText({
      // model: google("gemini-1.5-flash"),
      model: openai("gpt-4.1-mini"),
      messages: [systemPrompt, ...messages],
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("API Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
