import { GoogleGenAI, Type } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
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

export interface NodeData {
  id: string;
  label: string;
  description?: string;
  type?:
    | "topic"
    | "concept"
    | "example"
    | "question"
    | "action"
    | "decision"
    | "source";
  tags?: string[];
  importance?: "high" | "medium" | "low";
  confidence?: "high" | "medium" | "low";
  sourceHint?: string;
  nextStep?: string;
}

export interface EdgeData {
  source: string;
  target: string;
  label?: string;
}

export interface MindMapData {
  nodes: NodeData[];
  edges: EdgeData[];
  comparisonData?: Omit<ComparisonWorkspaceData, "map">;
}

export interface ComparisonCriterion {
  id: string;
  label: string;
  description?: string;
  weight?: number; // 1-10 importance
  type: "numeric" | "categorical" | "boolean" | "text";
  unit?: string;
}

export interface CriterionScore {
  value: string | number | boolean;
  displayValue: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  note?: string;
}

export interface ComparisonAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

export interface ComparisonOption {
  id: string;
  name: string;
  summary: string;
  scores: Record<string, CriterionScore>; // keyed by criterion ID
  tags?: string[];
  metadata?: Record<string, string>;
  actions?: ComparisonAction[];
}

export type ComparisonDomain =
  | "products"
  | "tools"
  | "services"
  | "approaches"
  | "strategies"
  | "concepts";

export interface ComparisonWorkspaceData {
  topic: string;
  domainType: ComparisonDomain;
  overview: string;
  recommendedApproach: string;
  criteria: ComparisonCriterion[];
  options: ComparisonOption[];
  nextSteps: string[];
  map?: MindMapData;
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
          id: {
            type: Type.STRING,
            description: "A unique identifier (e.g., 'node_0', 'node_1').",
          },
          label: {
            type: Type.STRING,
            description:
              "A short, concise title for this concept (max 6 words).",
          },
          description: {
            type: Type.STRING,
            description:
              "A clear 1-2 sentence explanation of this concept. Be specific and informative, not generic.",
          },
          type: {
            type: Type.STRING,
            description:
              "Optional semantic role for the node. Use one of: topic, concept, example, question, action, decision, source.",
          },
          tags: {
            type: Type.ARRAY,
            description:
              "Optional short tags that help filter or cluster this node.",
            items: { type: Type.STRING },
          },
          importance: {
            type: Type.STRING,
            description: "Optional priority marker: high, medium, or low.",
          },
          confidence: {
            type: Type.STRING,
            description: "Optional confidence marker: high, medium, or low.",
          },
          sourceHint: {
            type: Type.STRING,
            description:
              "Optional note describing where this idea comes from, such as the source section, evidence, or basis.",
          },
          nextStep: {
            type: Type.STRING,
            description:
              "Optional next action or follow-up someone should take after reading this node.",
          },
        },
        required: ["id", "label", "description"],
      },
    },
    edges: {
      type: Type.ARRAY,
      description:
        "Directed edges representing parent-child or relational links between nodes.",
      items: {
        type: Type.OBJECT,
        properties: {
          source: {
            type: Type.STRING,
            description: "The ID of the parent/source node.",
          },
          target: {
            type: Type.STRING,
            description: "The ID of the child/target node.",
          },
          label: {
            type: Type.STRING,
            description:
              "A brief label describing the relationship (e.g., 'includes', 'requires', 'leads to').",
          },
        },
        required: ["source", "target"],
      },
    },
  },
  required: ["nodes", "edges"],
};

const comparisonWorkspaceSchema = {
  type: Type.OBJECT,
  properties: {
    topic: {
      type: Type.STRING,
      description: "The original topic or query being compared.",
    },
    domainType: {
      type: Type.STRING,
      description: "The domain category of this comparison.",
      enum: [
        "products",
        "tools",
        "services",
        "approaches",
        "strategies",
        "concepts",
      ],
    },
    overview: {
      type: Type.STRING,
      description:
        "A short overview of the comparison landscape for the user's query.",
    },
    recommendedApproach: {
      type: Type.STRING,
      description:
        "Guidance on how the user should evaluate the available options.",
    },
    criteria: {
      type: Type.ARRAY,
      description: "The key decision criteria the user should compare.",
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          label: { type: Type.STRING },
          description: { type: Type.STRING },
          weight: { type: Type.INTEGER },
          type: {
            type: Type.STRING,
            enum: ["numeric", "categorical", "boolean", "text"],
          },
          unit: { type: Type.STRING },
        },
        required: ["id", "label", "type"],
      },
    },
    options: {
      type: Type.ARRAY,
      description: "The recommended options that best match the user's query.",
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          name: { type: Type.STRING },
          summary: { type: Type.STRING },
          scores: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                criterionId: { type: Type.STRING },
                value: { type: Type.STRING },
                displayValue: { type: Type.STRING },
                rating: { type: Type.INTEGER },
                note: { type: Type.STRING },
              },
              required: ["criterionId", "displayValue"],
            },
          },
          tags: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          metadata: {
            type: Type.OBJECT,
            description:
              "Domain-specific metadata fields. Use keys like: bestFor, considerations, priceBand (for products); idealUseCase, limitations (for tools); bestFit, tradeoffs (for services); whenToUse, tradeoffs (for approaches); bestScenario, risks (for strategies); keyTakeaway, limitations (for concepts).",
            additionalProperties: { type: Type.STRING },
          },
          actions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                label: { type: Type.STRING },
                href: { type: Type.STRING },
                variant: {
                  type: Type.STRING,
                  enum: ["primary", "secondary", "ghost"],
                },
              },
              required: ["label", "href"],
            },
          },
        },
        required: ["id", "name", "summary", "scores"],
      },
    },
    nextSteps: {
      type: Type.ARRAY,
      description:
        "Concrete next steps the user can take after reviewing the comparison.",
      items: {
        type: Type.STRING,
      },
    },
    map: mindMapSchema,
  },
  required: [
    "topic",
    "domainType",
    "overview",
    "recommendedApproach",
    "criteria",
    "options",
    "nextSteps",
  ],
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
- Add metadata when it helps: node type, 1-3 tags, importance, confidence, sourceHint, and nextStep.
- Do NOT create disconnected nodes. Every node must be reachable from the root.
- Prefer depth over breadth — 3-4 levels of hierarchy is better than 15 flat siblings.

Document content:
"""
${text.substring(0, 50000)}
"""`,
    config: {
      responseMimeType: "application/json",
      responseSchema: mindMapSchema,
    },
  });

  return parseResponse<MindMapData>(response);
}

/**
 * Generates a mind map from a topic/subject query.
 * Uses a prompt that first reasons about the topic, then builds a structured knowledge map.
 */
export async function generateMindMapFromTopic(
  topic: string,
): Promise<MindMapData> {
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
- Add metadata when relevant: node type, 1-3 tags, importance, confidence, sourceHint, and nextStep.
- Do NOT create disconnected nodes.
- Do NOT be superficial — go deep enough that each leaf node contains actionable or specific knowledge.
- Organize logically: foundational concepts first, advanced topics later in the hierarchy.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: mindMapSchema,
    },
  });

  return parseResponse<MindMapData>(response);
}

export async function generateComparisonWorkspaceFromTopic(
  topic: string,
): Promise<ComparisonWorkspaceData> {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `You are an expert comparison and decision-support assistant. A user wants to compare options for: "${topic}".

Create a comprehensive, domain-agnostic comparison workspace that can be shown inside a decision-support app. This could apply to products, tools, services, approaches, strategies, or concepts.

Your output must include:
1. A domainType field: classify this comparison as one of "products", "tools", "services", "approaches", "strategies", or "concepts".
2. A clear overview of the comparison landscape.
3. 4-8 key decision criteria appropriate to the domain (e.g., cost, learning curve, scalability, features, community support).
4. 4-8 recommended options that plausibly match the query.
5. Each option scored against every criterion with a display value, optional rating (1-5), and brief note.
6. Relevant suggested actions for each option (e.g., "Visit Website", "Read Docs", "Start Trial", "Compare Pricing", "Read Research").
7. Concrete next steps for the user.
8. (Optional) A decision-oriented mind map that explains how to choose.

Rules:
- First determine the domain type, then adapt criteria, scoring, and actions accordingly.
- For "products": include pricing, features, ecosystem. Actions: "Compare Pricing", "Read Reviews", "Try Demo".
- For "tools": include learning curve, integrations, community. Actions: "Read Docs", "Start Trial", "View GitHub".
- For "services": include SLA, support quality, scalability. Actions: "Contact Sales", "Read Case Studies", "Start Free Tier".
- For "approaches": include complexity, tradeoffs, maturity. Actions: "Read Guide", "See Examples", "Compare Benchmarks".
- For "strategies": include risk, timeline, resource needs. Actions: "Read Framework", "See Case Study", "Assess Fit".
- For "concepts": include clarity, applicability, depth. Actions: "Read Primer", "Explore Examples", "Deep Dive".
- Scores should be realistic and comparative. Use the "scores" array to map each option to the criteria by ID.
- Actions should be practical and domain-appropriate. Do not default to shopping links unless domainType is "products".
- If a mind map is included, it must remain a proper tree with one root and connected child nodes.
- Keep labels concise and descriptions useful.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: comparisonWorkspaceSchema,
    },
  });

  return parseResponse<ComparisonWorkspaceData>(response);
}
