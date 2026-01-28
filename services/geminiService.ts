
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDiagnosticAdvice = async (issue: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User is asking about a car issue: "${issue}". 
      Act as a master technician at Prestige Car Care Dubai. 
      Provide a professional, concise, and helpful response. 
      Suggest what might be wrong and recommend coming to our workshop in Umm Ramool for a checkup. 
      Keep it under 100 words. Format with line breaks for readability.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to our diagnostic database. Please contact us directly at 056 224 4402 for immediate assistance.";
  }
};
