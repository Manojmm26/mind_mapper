import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface NodeData {
  id: string;
  label: string;
  description?: string;
}

export interface EdgeData {
  source: string;
  target: string;
  label?: string;
}

export interface MindMapData {
  nodes: NodeData[];
  edges: EdgeData[];
}

export async function generateMindMap(text: string): Promise<MindMapData> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the following text and extract the key concepts and their relationships to create a mind map.
    
    Text:
    ${text.substring(0, 30000)} // Limit text to avoid token limits if necessary, though Gemini can handle a lot.
    `,
    config: {
      systemInstruction: "You are an expert at analyzing documents and extracting structured knowledge graphs. Extract the main concepts as nodes and their relationships as edges.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          nodes: {
            type: Type.ARRAY,
            description: "List of key concepts extracted from the text.",
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING, description: "A unique identifier for the node (e.g., 'concept_1')." },
                label: { type: Type.STRING, description: "The title or name of the concept." },
                description: { type: Type.STRING, description: "A brief summary or description of the concept." }
              },
              required: ["id", "label"]
            }
          },
          edges: {
            type: Type.ARRAY,
            description: "List of relationships between the concepts.",
            items: {
              type: Type.OBJECT,
              properties: {
                source: { type: Type.STRING, description: "The ID of the source node." },
                target: { type: Type.STRING, description: "The ID of the target node." },
                label: { type: Type.STRING, description: "A brief label describing the relationship." }
              },
              required: ["source", "target"]
            }
          }
        },
        required: ["nodes", "edges"]
      }
    }
  });

  const jsonStr = response.text?.trim() || "{}";
  try {
    return JSON.parse(jsonStr) as MindMapData;
  } catch (e) {
    console.error("Failed to parse JSON response:", jsonStr);
    throw new Error("Invalid response format from LLM.");
  }
}
