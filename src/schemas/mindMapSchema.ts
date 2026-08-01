import { Type } from "@google/genai";
import { z } from "zod";

export const NodeTypeEnum = z.enum([
  "topic",
  "concept",
  "example",
  "question",
  "action",
  "decision",
  "source",
]);

export const PriorityEnum = z.enum(["high", "medium", "low"]);

export const nodeSchema = z.object({
  id: z.string().describe("A unique identifier (e.g., 'node_0', 'node_1')."),
  label: z
    .string()
    .max(100)
    .describe("A short, concise title for this concept (max 6 words)."),
  description: z
    .string()
    .describe(
      "A clear 1-2 sentence explanation of this concept. Be specific and informative, not generic.",
    ),
  type: NodeTypeEnum.optional().describe(
    "Optional semantic role for the node.",
  ),
  tags: z
    .array(z.string())
    .optional()
    .describe("Optional short tags that help filter or cluster this node."),
  importance: PriorityEnum.optional().describe(
    "Optional priority marker: high, medium, or low.",
  ),
  confidence: PriorityEnum.optional().describe(
    "Optional confidence marker: high, medium, or low.",
  ),
  sourceHint: z
    .string()
    .optional()
    .describe(
      "Optional note describing where this idea comes from, such as the source section, evidence, or basis.",
    ),
  nextStep: z
    .string()
    .optional()
    .describe(
      "Optional next action or follow-up someone should take after reading this node.",
    ),
});

export const edgeSchema = z.object({
  source: z.string().describe("The ID of the parent/source node."),
  target: z.string().describe("The ID of the child/target node."),
  label: z
    .string()
    .optional()
    .describe(
      "A brief label describing the relationship (e.g., 'includes', 'requires', 'leads to').",
    ),
});

export const mindMapSchema = z.object({
  topic: z
    .string()
    .describe("The central theme or topic title of the mind map."),
  overview: z
    .string()
    .describe(
      "A high-level summary of what this mind map covers and why it is structured this way.",
    ),
  nodes: z
    .array(nodeSchema)
    .min(1)
    .describe("All nodes in the mind map, starting with the root node."),
  edges: z
    .array(edgeSchema)
    .describe("All directed parent-to-child edges connecting the nodes."),
});

export type NodeData = z.infer<typeof nodeSchema>;
export type EdgeData = z.infer<typeof edgeSchema>;
export type MindMapData = z.infer<typeof mindMapSchema>;

export const mindMapSchemaGenAI = {
  type: Type.OBJECT,
  properties: {
    topic: {
      type: Type.STRING,
      description: "The central theme or topic title of the mind map.",
    },
    overview: {
      type: Type.STRING,
      description:
        "A high-level summary of what this mind map covers and why it is structured this way.",
    },
    nodes: {
      type: Type.ARRAY,
      description: "All nodes in the mind map, starting with the root node.",
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
              "A clear 1-2 sentence explanation of this concept. Be specific and informative.",
          },
          type: {
            type: Type.STRING,
            enum: [
              "topic",
              "concept",
              "example",
              "question",
              "action",
              "decision",
              "source",
            ],
            description: "Optional semantic role for the node.",
          },
          tags: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Optional short tags for filtering or clustering.",
          },
          importance: {
            type: Type.STRING,
            enum: ["high", "medium", "low"],
            description: "Optional priority marker.",
          },
          confidence: {
            type: Type.STRING,
            enum: ["high", "medium", "low"],
            description: "Optional confidence marker.",
          },
          sourceHint: {
            type: Type.STRING,
            description: "Optional source note or reference.",
          },
          nextStep: {
            type: Type.STRING,
            description: "Optional next action or follow-up.",
          },
        },
        required: ["id", "label", "description"],
      },
    },
    edges: {
      type: Type.ARRAY,
      description: "All directed parent-to-child edges connecting the nodes.",
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
            description: "A brief label describing the relationship.",
          },
        },
        required: ["source", "target"],
      },
    },
  },
  required: ["topic", "overview", "nodes", "edges"],
};

export function validateMindMap(data: unknown): MindMapData {
  const result = mindMapSchema.safeParse(data);
  if (!result.success) {
    console.warn(
      "Mind map response validation warnings:",
      result.error.format(),
    );
    if (data && typeof data === "object" && "nodes" in data) {
      const raw = data as Record<string, unknown>;
      return {
        topic: String(raw.topic || "Untitled Mind Map"),
        overview: String(raw.overview || "Generated mind map."),
        nodes: Array.isArray(raw.nodes)
          ? raw.nodes.map((n: Record<string, unknown>, i: number) => ({
              id: String(n.id || `node_${i}`),
              label: String(n.label || `Concept ${i + 1}`).substring(0, 100),
              description: String(
                n.description || "No description provided.",
              ),
              type: typeof n.type === "string" ? (n.type as any) : undefined,
              tags: Array.isArray(n.tags) ? n.tags.map(String) : undefined,
              importance:
                typeof n.importance === "string"
                  ? (n.importance as any)
                  : undefined,
              confidence:
                typeof n.confidence === "string"
                  ? (n.confidence as any)
                  : undefined,
              sourceHint:
                typeof n.sourceHint === "string" ? n.sourceHint : undefined,
              nextStep: typeof n.nextStep === "string" ? n.nextStep : undefined,
            }))
          : [
              {
                id: "root",
                label: "Central Theme",
                description: "Root of the mind map.",
              },
            ],
        edges: Array.isArray(raw.edges)
          ? raw.edges.map((e: Record<string, unknown>) => ({
              source: String(e.source || "root"),
              target: String(e.target || "node_0"),
              label: typeof e.label === "string" ? e.label : undefined,
            }))
          : [],
      };
    }
    throw new Error(
      `Failed to validate Mind Map schema: ${result.error.message}`,
    );
  }
  return result.data;
}
