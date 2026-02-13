import { GoogleGenAI, Type } from "@google/genai";
import { PlannerFormData, StrategyResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateVideoStrategy = async (data: PlannerFormData): Promise<StrategyResponse> => {
  if (!apiKey) {
    // Fallback if no API key is present, to allow UI demo to function
    console.warn("No API_KEY found. Returning mock data.");
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
      concept: "企業の核心を突くドキュメンタリースタイル",
      tone: "温かみがあり、かつ信頼感のあるトーン",
      storyline: [
        "創業者のインタビューから始まり、情熱を語る",
        "実際の現場の様子を映し出し、職人の技術を強調",
        "顧客の笑顔と感謝の言葉で締めくくる"
      ],
      recommendedStyle: "シネマティックで落ち着いた映像美"
    };
  }

  const prompt = `
    あなたはプロの映像制作プロデューサーです。以下の企業情報に基づいて、
    企業の価値を最大限に引き出すための映像制作企画を提案してください。
    
    企業名: ${data.companyName}
    業界: ${data.industry}
    コアバリュー: ${data.coreValue}
    ターゲット層: ${data.targetAudience}

    出力はJSON形式でお願いします。
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            concept: { type: Type.STRING, description: "Main video concept" },
            tone: { type: Type.STRING, description: "Tone of the video (e.g., Emotional, Professional)" },
            storyline: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3-5 bullet points outlining the video structure" 
            },
            recommendedStyle: { type: Type.STRING, description: "Visual style recommendation" }
          },
          required: ["concept", "tone", "storyline", "recommendedStyle"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as StrategyResponse;
    }
    throw new Error("Empty response from AI");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
