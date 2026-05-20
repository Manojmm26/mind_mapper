import { Type } from "@google/genai";
import { z } from "zod";

// ---------------------------------------------------------------------------
// Schema Version
// ---------------------------------------------------------------------------

export const SCHEMA_VERSION = "1.0.0" as const;

// ---------------------------------------------------------------------------
// Node & Edge Schemas (Mind Map)
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Comparison Workspace Schemas
// ---------------------------------------------------------------------------

export const ComparisonDomainEnum = z.enum([
  "products",
  "tools",
  "services",
  "approaches",
  "strategies",
  "concepts",
]);

export const CriterionTypeEnum = z.enum([
  "numeric",
  "categorical",
  "boolean",
  "text",
]);

export const comparisonCriterionSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().optional(),
  weight: z
    .number()
    .int()
    .min(1)
    .max(10)
    .optional()
    .describe("Importance weight from 1-10."),
  type: CriterionTypeEnum.describe(
    "The data type for this criterion's values.",
  ),
  unit: z.string().optional().describe("Optional unit of measurement."),
});

export const criterionScoreSchema = z.object({
  criterionId: z
    .string()
    .describe("ID of the criterion this score belongs to."),
  value: z
    .union([z.string(), z.number(), z.boolean()])
    .optional()
    .describe("Raw score value."),
  displayValue: z.string().describe("Human-readable display value."),
  rating: z
    .number()
    .int()
    .min(1)
    .max(5)
    .optional()
    .describe("Rating from 1-5."),
  note: z.string().optional().describe("Optional explanatory note."),
});

export const comparisonActionSchema = z.object({
  label: z.string(),
  href: z.string(),
  variant: z.enum(["primary", "secondary", "ghost"]).optional(),
});

export const comparisonOptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  summary: z.string(),
  scores: z
    .array(criterionScoreSchema)
    .describe(
      "Array of scores, one per criterion. Each score references its criterion by ID.",
    ),
  tags: z.array(z.string()).optional(),
  metadata: z
    .record(z.string(), z.string())
    .optional()
    .describe(
      "Domain-specific metadata. Common keys: bestFor, considerations, priceBand, idealUseCase, limitations, bestFit, tradeoffs, whenToUse, risks, keyTakeaway.",
    ),
  actions: z.array(comparisonActionSchema).optional(),
});

// Forward declaration for circular reference
export const comparisonWorkspaceSchema = z.object({
  version: z
    .literal(SCHEMA_VERSION)
    .optional()
    .describe("Schema version for migration and compatibility tracking."),
  topic: z.string().describe("The original topic or query being compared."),
  domainType: ComparisonDomainEnum.describe(
    "The domain category of this comparison.",
  ),
  overview: z
    .string()
    .describe("A short overview of the comparison landscape."),
  recommendedApproach: z
    .string()
    .describe("Guidance on how to evaluate the available options."),
  criteria: z
    .array(comparisonCriterionSchema)
    .min(3)
    .max(12)
    .describe("Key decision criteria the user should compare."),
  options: z
    .array(comparisonOptionSchema)
    .min(2)
    .max(12)
    .describe("Recommended options that match the user's query."),
  nextSteps: z
    .array(z.string())
    .describe("Concrete next steps after reviewing the comparison."),
  map: z
    .lazy(() => mindMapSchema)
    .optional()
    .describe("Optional decision-oriented mind map explaining how to choose."),
});

// ---------------------------------------------------------------------------
// Mind Map Schema (defined after comparisonWorkspaceSchema for backward compat export)
// ---------------------------------------------------------------------------

export const comparisonDataExportSchema = z.object({
  version: z
    .literal(SCHEMA_VERSION)
    .optional()
    .describe("Schema version for migration and compatibility tracking."),
  topic: z.string().describe("The original topic or query being compared."),
  domainType: ComparisonDomainEnum.describe(
    "The domain category of this comparison.",
  ),
  overview: z
    .string()
    .describe("A short overview of the comparison landscape."),
  recommendedApproach: z
    .string()
    .describe("Guidance on how to evaluate the available options."),
  criteria: z
    .array(comparisonCriterionSchema)
    .min(3)
    .max(12)
    .describe("Key decision criteria the user should compare."),
  options: z
    .array(comparisonOptionSchema)
    .min(2)
    .max(12)
    .describe("Recommended options that match the user's query."),
  nextSteps: z
    .array(z.string())
    .describe("Concrete next steps after reviewing the comparison."),
});

export const mindMapSchema = z.object({
  version: z
    .literal(SCHEMA_VERSION)
    .optional()
    .describe("Schema version for migration and compatibility tracking."),
  nodes: z
    .array(nodeSchema)
    .min(1)
    .describe("All nodes in the mind map, from root to leaves."),
  edges: z
    .array(edgeSchema)
    .describe(
      "Directed edges representing parent-child or relational links between nodes.",
    ),
  comparisonData: comparisonDataExportSchema
    .optional()
    .describe(
      "Optional comparison workspace data embedded for export/import compatibility.",
    ),
});

// ---------------------------------------------------------------------------
// Inferred TypeScript Types (Single Source of Truth)
// ---------------------------------------------------------------------------

export type NodeType = z.infer<typeof NodeTypeEnum>;
export type Priority = z.infer<typeof PriorityEnum>;
export type ComparisonDomain = z.infer<typeof ComparisonDomainEnum>;
export type CriterionType = z.infer<typeof CriterionTypeEnum>;

export type NodeData = z.infer<typeof nodeSchema>;
export type EdgeData = z.infer<typeof edgeSchema>;
export type MindMapData = z.infer<typeof mindMapSchema>;

export type ComparisonCriterion = z.infer<typeof comparisonCriterionSchema>;
export type CriterionScore = z.infer<typeof criterionScoreSchema>;
export type ComparisonAction = z.infer<typeof comparisonActionSchema>;

// Raw types from LLM (scores as array)
export type ComparisonOptionRaw = z.infer<typeof comparisonOptionSchema>;
export type ComparisonWorkspaceDataRaw = z.infer<
  typeof comparisonWorkspaceSchema
>;

// Normalized types for UI consumption (scores as Record)
export interface ComparisonOption {
  id: string;
  name: string;
  summary: string;
  scores: Record<string, CriterionScore>;
  tags?: string[];
  metadata?: Record<string, string>;
  actions?: ComparisonAction[];
}

export interface ComparisonWorkspaceData {
  version?: typeof SCHEMA_VERSION;
  topic: string;
  domainType: ComparisonDomain;
  overview: string;
  recommendedApproach: string;
  criteria: ComparisonCriterion[];
  options: ComparisonOption[];
  nextSteps: string[];
  map?: MindMapData;
}

// ---------------------------------------------------------------------------
// Runtime Validation Helpers
// ---------------------------------------------------------------------------

export function validateMindMap(data: unknown): MindMapData {
  const result = mindMapSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.issues
      .map((e) => `${e.path.join(".")}: ${e.message}`)
      .join("; ");
    throw new Error(`Invalid mind map data: ${errors}`);
  }
  return result.data;
}

export function validateComparisonWorkspace(
  data: unknown,
): ComparisonWorkspaceDataRaw {
  const result = comparisonWorkspaceSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.issues
      .map((e) => `${e.path.join(".")}: ${e.message}`)
      .join("; ");
    throw new Error(`Invalid comparison workspace data: ${errors}`);
  }
  return result.data;
}

// ---------------------------------------------------------------------------
// Utility: Convert scores array to Record for backward compatibility
// ---------------------------------------------------------------------------

export function scoresToRecord(
  scores: CriterionScore[],
): Record<string, CriterionScore> {
  const record: Record<string, CriterionScore> = {};
  for (const score of scores) {
    record[score.criterionId] = score;
  }
  return record;
}

/**
 * Normalizes raw LLM response (scores as array) into UI-ready format (scores as Record).
 */
export function normalizeComparisonData(
  raw: ComparisonWorkspaceDataRaw | ComparisonWorkspaceData,
): ComparisonWorkspaceData {
  return {
    ...(raw as any),
    options: raw.options.map((opt) => ({
      ...opt,
      scores: Array.isArray(opt.scores)
        ? scoresToRecord(opt.scores as unknown as CriterionScore[])
        : opt.scores,
    })),
  } as ComparisonWorkspaceData;
}

  // ---------------------------------------------------------------------------
  // Google GenAI Schemas (manually written to guarantee correctness)
  // ---------------------------------------------------------------------------

  const _nodeSchemaGenAI = {
    type: Type.OBJECT,
    properties: {
      id: {
        type: Type.STRING,
        description: "A unique identifier (e.g., 'node_0', 'node_1').",
      },
      label: {
        type: Type.STRING,
        description: "A short, concise title for this concept (max 6 words).",
      },
      description: {
        type: Type.STRING,
        description:
          "A clear 1-2 sentence explanation of this concept. Be specific and informative, not generic.",
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
        description: "Optional short tags that help filter or cluster this node.",
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
        description: "Optional note describing where this idea comes from.",
      },
      nextStep: {
        type: Type.STRING,
        description: "Optional next action or follow-up.",
      },
    },
    required: ["id", "label", "description"],
  };

  const _edgeSchemaGenAI = {
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
  };

  const _comparisonCriterionSchemaGenAI = {
    type: Type.OBJECT,
    properties: {
      id: { type: Type.STRING },
      label: { type: Type.STRING },
      description: { type: Type.STRING },
      weight: { type: Type.INTEGER, description: "Importance weight from 1-10." },
      type: {
        type: Type.STRING,
        enum: ["numeric", "categorical", "boolean", "text"],
        description: "The data type for this criterion's values.",
      },
      unit: { type: Type.STRING, description: "Optional unit of measurement." },
    },
    required: ["id", "label", "type"],
  };

  const _criterionScoreSchemaGenAI = {
    type: Type.OBJECT,
    properties: {
      criterionId: {
        type: Type.STRING,
        description: "ID of the criterion this score belongs to.",
      },
      value: { type: Type.STRING, description: "Raw score value." },
      displayValue: {
        type: Type.STRING,
        description: "Human-readable display value.",
      },
      rating: { type: Type.INTEGER, description: "Rating from 1-5." },
      note: { type: Type.STRING, description: "Optional explanatory note." },
    },
    required: ["criterionId", "displayValue"],
  };

  const _comparisonActionSchemaGenAI = {
    type: Type.OBJECT,
    properties: {
      label: { type: Type.STRING },
      href: { type: Type.STRING },
      variant: { type: Type.STRING, enum: ["primary", "secondary", "ghost"] },
    },
    required: ["label", "href"],
  };

  const _comparisonOptionSchemaGenAI = {
    type: Type.OBJECT,
    properties: {
      id: { type: Type.STRING },
      name: { type: Type.STRING },
      summary: { type: Type.STRING },
      scores: {
        type: Type.ARRAY,
        items: _criterionScoreSchemaGenAI,
        description: "Array of scores, one per criterion.",
      },
      tags: { type: Type.ARRAY, items: { type: Type.STRING } },
      metadata: {
        type: Type.OBJECT,
        additionalProperties: { type: Type.STRING },
        description: "Domain-specific metadata.",
      },
      actions: { type: Type.ARRAY, items: _comparisonActionSchemaGenAI },
    },
    required: ["id", "name", "summary", "scores"],
  };

  export const mindMapSchemaGenAI = {
    type: Type.OBJECT,
    properties: {
      version: { type: Type.STRING, enum: ["1.0.0"] },
      nodes: {
        type: Type.ARRAY,
        items: _nodeSchemaGenAI,
        minItems: 1,
        description: "All nodes in the mind map, from root to leaves.",
      },
      edges: {
        type: Type.ARRAY,
        items: _edgeSchemaGenAI,
        description:
          "Directed edges representing parent-child or relational links.",
      },
    },
    required: ["nodes", "edges"],
  };

  export const comparisonWorkspaceSchemaGenAI = {
    type: Type.OBJECT,
    properties: {
      version: { type: Type.STRING, enum: ["1.0.0"] },
      topic: {
        type: Type.STRING,
        description: "The original topic or query being compared.",
      },
      domainType: {
        type: Type.STRING,
        enum: [
          "products",
          "tools",
          "services",
          "approaches",
          "strategies",
          "concepts",
        ],
        description: "The domain category.",
      },
      overview: {
        type: Type.STRING,
        description: "A short overview of the comparison landscape.",
      },
      recommendedApproach: {
        type: Type.STRING,
        description: "Guidance on how to evaluate the available options.",
      },
      criteria: {
        type: Type.ARRAY,
        items: _comparisonCriterionSchemaGenAI,
        description: "Key decision criteria.",
      },
      options: {
        type: Type.ARRAY,
        items: _comparisonOptionSchemaGenAI,
        description: "Recommended options.",
      },
      nextSteps: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "Concrete next steps.",
      },
      map: mindMapSchemaGenAI,
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
