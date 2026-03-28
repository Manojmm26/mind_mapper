import { GoogleGenAI, Type } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (aiInstance) return aiInstance;

  const apiKey = (process.env as any).GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    throw new Error("Gemini API Key is not set. Please add your key to the .env file.");
  }

  aiInstance = new GoogleGenAI({ apiKey });
  return aiInstance;
}

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

export interface ComparisonFacet {
  label: string;
  value: string;
}

export interface ComparisonItem {
  id: string;
  name: string;
  summary: string;
  bestFor: string;
  considerations: string;
  priceBand: string;
  searchQuery: string;
  attributes: ComparisonFacet[];
}

export interface ComparisonWorkspaceData {
  overview: string;
  recommendedApproach: string;
  criteria: ComparisonFacet[];
  items: ComparisonItem[];
  nextSteps: string[];
  map: MindMapData;
}

const mindMapSchema = {
  type: Type.OBJECT,
  properties: {
    nodes: {
      type: Type.ARRAY,
      description: "All nodes in the mind map, from root to leaves.",
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING, description: "A unique identifier (e.g., 'node_0', 'node_1')." },
          label: { type: Type.STRING, description: "A short, concise title for this concept (max 6 words)." },
          description: { type: Type.STRING, description: "A clear 1-2 sentence explanation of this concept. Be specific and informative, not generic." }
        },
        required: ["id", "label", "description"]
      }
    },
    edges: {
      type: Type.ARRAY,
      description: "Directed edges representing parent-child or relational links between nodes.",
      items: {
        type: Type.OBJECT,
        properties: {
          source: { type: Type.STRING, description: "The ID of the parent/source node." },
          target: { type: Type.STRING, description: "The ID of the child/target node." },
          label: { type: Type.STRING, description: "A brief label describing the relationship (e.g., 'includes', 'requires', 'leads to')." }
        },
        required: ["source", "target"]
      }
    }
  },
  required: ["nodes", "edges"]
};

const comparisonWorkspaceSchema = {
  type: Type.OBJECT,
  properties: {
    overview: {
      type: Type.STRING,
      description: "A short overview of the comparison landscape for the user's query."
    },
    recommendedApproach: {
      type: Type.STRING,
      description: "Guidance on how the user should evaluate the available options."
    },
    criteria: {
      type: Type.ARRAY,
      description: "The key decision criteria the user should compare.",
      items: {
        type: Type.OBJECT,
        properties: {
          label: { type: Type.STRING },
          value: { type: Type.STRING }
        },
        required: ["label", "value"]
      }
    },
    items: {
      type: Type.ARRAY,
      description: "The recommended options that best match the user's query.",
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          name: { type: Type.STRING },
          summary: { type: Type.STRING },
          bestFor: { type: Type.STRING },
          considerations: { type: Type.STRING },
          priceBand: { type: Type.STRING },
          searchQuery: {
            type: Type.STRING,
            description: "A concise search query that can be used to buy or research the item."
          },
          attributes: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                label: { type: Type.STRING },
                value: { type: Type.STRING }
              },
              required: ["label", "value"]
            }
          }
        },
        required: ["id", "name", "summary", "bestFor", "considerations", "priceBand", "searchQuery", "attributes"]
      }
    },
    nextSteps: {
      type: Type.ARRAY,
      description: "Concrete next steps the user can take after reviewing the comparison.",
      items: {
        type: Type.STRING
      }
    },
    map: mindMapSchema
  },
  required: ["overview", "recommendedApproach", "criteria", "items", "nextSteps", "map"]
};

function parseResponse<T>(response: any): T {
  const jsonStr = response.text?.trim() || "{}";
  try {
    return JSON.parse(jsonStr) as T;
  } catch (e) {
    console.error("Failed to parse JSON response:", jsonStr);
    throw new Error("Invalid response format from LLM.");
  }
}

/**
 * Generates a mind map from a document's text content.
 * Uses a prompt optimized for extracting and organizing existing information.
 */
export async function generateMindMap(text: string): Promise<MindMapData> {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `You are analyzing the following document to create a comprehensive, hierarchical mind map.

Your task:
1. Identify the single central theme or title of the document — this becomes the ROOT node.
2. Extract the major topics/sections as LEVEL 1 children of the root.
3. For each major topic, extract sub-topics as LEVEL 2 children.
4. Continue decomposing into LEVEL 3 and LEVEL 4 where the document provides enough detail.
5. Every node MUST have a meaningful, specific description — not generic filler.

Rules:
- Build a proper TREE structure: one root, with branches going deeper into detail.
- Every non-root node must be connected to exactly one parent via an edge.
- Aim for 20-60 nodes depending on document complexity.
- Labels should be concise (max 6 words). Descriptions should be informative (1-2 sentences).
- Do NOT create disconnected nodes. Every node must be reachable from the root.
- Prefer depth over breadth — 3-4 levels of hierarchy is better than 15 flat siblings.

Document content:
"""
${text.substring(0, 50000)}
"""`,
    config: {
      responseMimeType: "application/json",
      responseSchema: mindMapSchema,
    }
  });

  return parseResponse<MindMapData>(response);
}

/**
 * Generates a mind map from a topic/subject query.
 * Uses a prompt that first reasons about the topic, then builds a structured knowledge map.
 */
export async function generateMindMapFromTopic(topic: string): Promise<MindMapData> {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `You are an expert educator and knowledge architect. A user wants to learn about: "${topic}"

Your task is to create a comprehensive, well-organized mind map that serves as a learning roadmap.

Step 1 — Think deeply about the topic:
- What are the foundational concepts someone must understand first?
- What are the major pillars/categories within this topic?
- What are the practical applications, tools, or techniques?
- What are common misconceptions or advanced nuances?

Step 2 — Build the mind map:
- The ROOT node should be the topic title with a description summarizing what this map covers.
- LEVEL 1: Major categories or pillars (aim for 4-8 branches).
- LEVEL 2: Key concepts within each category (2-5 per branch).
- LEVEL 3+: Specific details, examples, techniques, or sub-concepts.

Rules:
- Build a proper TREE: one root, branching into increasing specificity.
- Every non-root node connects to exactly one parent.
- Target 30-70 nodes for a rich, useful map.
- Labels: concise (max 6 words). Descriptions: specific and educational (1-2 sentences that actually teach something).
- Do NOT create disconnected nodes.
- Do NOT be superficial — go deep enough that each leaf node contains actionable or specific knowledge.
- Organize logically: foundational concepts first, advanced topics later in the hierarchy.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: mindMapSchema,
    }
  });

  return parseResponse<MindMapData>(response);
}

export async function generateComparisonWorkspaceFromTopic(topic: string): Promise<ComparisonWorkspaceData> {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `You are a product and research comparison assistant. A user wants to compare options for: "${topic}".

Create a comparison workspace that can be shown inside a decision-support app.

Your output must include:
1. A practical comparison summary.
2. The main criteria the user should evaluate.
3. 4-8 recommended options that plausibly match the query.
4. A decision-oriented mind map that explains how to choose.

Rules:
- The response must work for products, tools, services, or general topics.
- Prefer concrete options when the query implies a set of choices.
- If exact live pricing is uncertain, use a broad price band such as "Budget", "Mid-range", "Premium", or "Varies".
- Every option must explain who it is best for and what tradeoffs to watch.
- searchQuery should be a short query suitable for researching or buying that option. Do not invent direct URLs.
- The mind map must remain a proper tree with one root and connected child nodes.
- In the map, include criteria, tradeoffs, and recommended options so the user can explore the decision visually.
- Keep labels concise and descriptions useful.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: comparisonWorkspaceSchema,
    }
  });

  return parseResponse<ComparisonWorkspaceData>(response);
}
