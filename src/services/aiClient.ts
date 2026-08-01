import { GoogleGenAI } from "@google/genai";
import { getActiveGeminiModel } from "../config/aiConfig";

let aiInstance: GoogleGenAI | null = null;

export function getAI(): GoogleGenAI {
  if (aiInstance) return aiInstance;

  const viteEnv = (
    import.meta as ImportMeta & { env?: Record<string, string | undefined> }
  ).env;
  const apiKey =
    viteEnv?.VITE_GEMINI_API_KEY || (process.env as any).GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    throw new Error(
      "Gemini API Key is not set. Please add your key to the .env file.",
    );
  }

  aiInstance = new GoogleGenAI({ apiKey });
  return aiInstance;
}

export async function executeLlmJsonCall<T>(
  prompt: string,
  responseSchema: any,
  validator: (data: unknown) => T,
): Promise<T> {
  const ai = getAI();

  const response = await ai.models.generateContent({
    model: getActiveGeminiModel(),
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema,
    },
  });

  const jsonStr = response.text?.trim() || "{}";
  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonStr);
  } catch (e) {
    console.error("Failed to parse JSON response:", jsonStr);
    throw new Error("Invalid JSON response format from LLM.");
  }

  return validator(parsed);
}
