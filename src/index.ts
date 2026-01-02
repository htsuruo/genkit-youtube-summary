import { googleAI } from "@genkit-ai/google-genai";
import dotenv from "dotenv";
import { genkit, z } from "genkit";

dotenv.config();

const ai = genkit({
  plugins: [googleAI()],
  model: googleAI.model("gemini-2.5-flash"),
});

export const summarizeYoutubeVideo = ai.defineFlow(
  {
    name: "summarizeYoutubeFlow",
    inputSchema: z.string().url().describe("YouTube動画のURL"),
    outputSchema: z.string().describe("動画の要約"),
  },
  async (url) => {
    const prompt = `次のYouTube動画のURLから内容を要約してください。要約箇条書きで、主要なポイントを5つ程度にまとめてください。`;

    const { text } = await ai.generate({
      prompt: [{ text: prompt }, { media: { url, contentType: "video/mp4" } }],
    });

    return text;
  }
);
