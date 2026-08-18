import { Type } from "@google/genai";
import { z } from "zod";
import { mindMapSchema, mindMapSchemaGenAI, validateMindMap, MindMapData } from "./mindMapSchema";

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
    .min(0)
    .max(1)
    .optional()
    .describe("Optional relative weight for scoring (0 to 1)."),
  type: CriterionTypeEnum.optional().describe(
    "Data type for this criterion: numeric, categorical, boolean, or text.",
  ),
});

export const criterionScoreSchema = z.object({
  criterionId: z.string(),
  displayValue: z
    .string()
    .describe("Human-readable value for display (e.g. '$49/mo', 'High', 'Yes')."),
  numericRating: z
    .number()
    .min(1)
    .max(5)
    .optional()
    .describe("Optional normalized score on a 1-5 scale for visual indicators."),
  note: z
    .string()
    .optional()
    .describe("Optional brief context explaining this score."),
});

export const comparisonActionSchema = z.object({
  label: z
    .string()
    .describe("Action button label (e.g. 'Compare Pricing', 'Read Docs')."),
  url: z.string().optional().describe("Optional destination URL."),
  type: z
    .enum(["primary", "secondary", "external"])
    .optional()
    .describe("Visual style role for the CTA button."),
});

export const comparisonOptionSchema = z.object({
  id: z.string(),
  label: z.string(),
  tagline: z
    .string()
    .optional()
    .describe("Short summary line describing this option."),
  description: z.string(),
  badge: z
    .string()
    .optional()
    .describe("Optional highlight badge (e.g., 'Best Overall', 'Budget Option')."),
  scores: z.array(criterionScoreSchema),
  actions: z.array(comparisonActionSchema).optional(),
});

export const comparisonWorkspaceSchema = z.object({
  topic: z.string(),
  overview: z
    .string()
    .describe("High-level summary of the comparison landscape."),
  domainType: ComparisonDomainEnum.optional().describe(
    "Primary category of items being compared.",
  ),
  criteria: z.array(comparisonCriterionSchema).min(1),
  options: z.array(comparisonOptionSchema).min(1),
  suggestedNextSteps: z.array(z.string()).optional(),
  mindMap: mindMapSchema.optional(),
});

export type ComparisonCriterion = z.infer<typeof comparisonCriterionSchema>;
export type CriterionScore = z.infer<typeof criterionScoreSchema>;
export type ComparisonAction = z.infer<typeof comparisonActionSchema>;
export type ComparisonOption = z.infer<typeof comparisonOptionSchema>;
export type ComparisonDomain = z.infer<typeof ComparisonDomainEnum>;

export interface ComparisonWorkspaceData {
  topic: string;
  overview: string;
  domainType: ComparisonDomain;
  criteria: ComparisonCriterion[];
  options: ComparisonOption[];
  suggestedNextSteps?: string[];
  mindMap?: MindMapData;
}

export interface ComparisonWorkspaceDataRaw {
  topic: string;
  overview: string;
  domainType?: ComparisonDomain;
  criteria: ComparisonCriterion[];
  options: ComparisonOption[];
  suggestedNextSteps?: string[];
  mindMap?: MindMapData;
}

export const comparisonWorkspaceSchemaGenAI = {
  type: Type.OBJECT,
  properties: {
    topic: { type: Type.STRING },
    overview: {
      type: Type.STRING,
      description: "High-level summary of the comparison landscape.",
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
      description: "Primary category of items being compared.",
    },
    criteria: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          label: { type: Type.STRING },
          description: { type: Type.STRING },
          weight: { type: Type.NUMBER },
          type: {
            type: Type.STRING,
            enum: ["numeric", "categorical", "boolean", "text"],
          },
        },
        required: ["id", "label"],
      },
    },
    options: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          label: { type: Type.STRING },
          tagline: { type: Type.STRING },
          description: { type: Type.STRING },
          badge: { type: Type.STRING },
          scores: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                criterionId: { type: Type.STRING },
                displayValue: { type: Type.STRING },
                numericRating: { type: Type.NUMBER },
                note: { type: Type.STRING },
              },
              required: ["criterionId", "displayValue"],
            },
          },
          actions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                label: { type: Type.STRING },
                url: { type: Type.STRING },
                type: {
                  type: Type.STRING,
                  enum: ["primary", "secondary", "external"],
                },
              },
              required: ["label"],
            },
          },
        },
        required: ["id", "label", "description", "scores"],
      },
    },
    suggestedNextSteps: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    mindMap: mindMapSchemaGenAI,
  },
  required: ["topic", "overview", "criteria", "options"],
};

export function validateComparisonWorkspace(
  data: unknown,
): ComparisonWorkspaceDataRaw {
  const result = comparisonWorkspaceSchema.safeParse(data);
  if (!result.success) {
    console.warn(
      "Comparison workspace response validation warnings:",
      result.error.format(),
    );
    if (
      data &&
      typeof data === "object" &&
      "criteria" in data &&
      "options" in data
    ) {
      const raw = data as Record<string, unknown>;
      return {
        topic: String(raw.topic || "Comparison Workspace"),
        overview: String(raw.overview || "Overview unavailable."),
        domainType:
          typeof raw.domainType === "string" &&
          [
            "products",
            "tools",
            "services",
            "approaches",
            "strategies",
            "concepts",
          ].includes(raw.domainType)
            ? (raw.domainType as ComparisonDomain)
            : undefined,
        criteria: Array.isArray(raw.criteria)
          ? raw.criteria.map((c: Record<string, unknown>, i: number) => ({
              id: String(c.id || `crit_${i}`),
              label: String(c.label || `Criterion ${i + 1}`),
              description:
                typeof c.description === "string" ? c.description : undefined,
              weight: typeof c.weight === "number" ? c.weight : undefined,
              type:
                typeof c.type === "string" &&
                ["numeric", "categorical", "boolean", "text"].includes(c.type)
                  ? (c.type as any)
                  : undefined,
            }))
          : [
              { id: "c1", label: "Features" },
              { id: "c2", label: "Cost" },
            ],
        options: Array.isArray(raw.options)
          ? raw.options.map((o: Record<string, unknown>, i: number) => ({
              id: String(o.id || `opt_${i}`),
              label: String(o.label || `Option ${i + 1}`),
              tagline: typeof o.tagline === "string" ? o.tagline : undefined,
              description: String(
                o.description || "No description provided.",
              ),
              badge: typeof o.badge === "string" ? o.badge : undefined,
              scores: Array.isArray(o.scores)
                ? o.scores.map((s: Record<string, unknown>, j: number) => ({
                    criterionId: String(s.criterionId || `crit_${j}`),
                    displayValue: String(s.displayValue || "N/A"),
                    numericRating:
                      typeof s.numericRating === "number"
                        ? s.numericRating
                        : undefined,
                    note: typeof s.note === "string" ? s.note : undefined,
                  }))
                : [],
              actions: Array.isArray(o.actions)
                ? o.actions.map((a: Record<string, unknown>) => ({
                    label: String(a.label || "Action"),
                    url: typeof a.url === "string" ? a.url : undefined,
                    type:
                      typeof a.type === "string" &&
                      ["primary", "secondary", "external"].includes(a.type)
                        ? (a.type as any)
                        : undefined,
                  }))
                : undefined,
            }))
          : [],
        suggestedNextSteps: Array.isArray(raw.suggestedNextSteps)
          ? raw.suggestedNextSteps.map(String)
          : undefined,
        mindMap: raw.mindMap ? validateMindMap(raw.mindMap) : undefined,
      };
    }
    throw new Error(
      `Failed to validate Comparison Workspace schema: ${result.error.message}`,
    );
  }
  return result.data;
}

export function normalizeComparisonData(
  raw?: any,
): ComparisonWorkspaceData {
  if (!raw) {
    return {
      topic: "System Architecture Comparison",
      overview: "Comparing architectural approaches, trade-offs, and design decisions.",
      domainType: "approaches",
      criteria: [],
      options: [],
    };
  }

  // If raw has 2-subject structure (leftSubject, rightSubject, dimensions)
  if (raw.leftSubject && raw.rightSubject && Array.isArray(raw.dimensions)) {
    const criteria = raw.dimensions.map((d: any, idx: number) => ({
      id: d.id || `c_${idx}`,
      label: d.title || `Dimension ${idx + 1}`,
      description: d.category || undefined,
      weight: (d.impactScore ? d.impactScore / 10 : 0.8),
      type: "text" as const,
    }));

    const options = [
      {
        id: "opt_left",
        label: raw.leftSubject.name || "Frontend Tier",
        badge: raw.leftSubject.badge || "Client",
        description: raw.leftSubject.summary || "Client-side architecture and reactivity.",
        tagline: raw.leftSubject.badge || "Frontend",
        scores: Object.fromEntries(
          raw.dimensions.map((d: any, idx: number) => [
            d.id || `c_${idx}`,
            {
              criterionId: d.id || `c_${idx}`,
              displayValue: d.leftDetail || "Standard capability",
              numericRating: 5,
              note: d.strategicVerdict || undefined,
            },
          ]),
        ),
      },
      {
        id: "opt_right",
        label: raw.rightSubject.name || "Backend Tier",
        badge: raw.rightSubject.badge || "Server",
        description: raw.rightSubject.summary || "Server-side architecture and data access.",
        tagline: raw.rightSubject.badge || "Backend",
        scores: Object.fromEntries(
          raw.dimensions.map((d: any, idx: number) => [
            d.id || `c_${idx}`,
            {
              criterionId: d.id || `c_${idx}`,
              displayValue: d.rightDetail || "Standard capability",
              numericRating: 5,
              note: d.strategicVerdict || undefined,
            },
          ]),
        ),
      },
    ];

    return {
      topic: raw.title || raw.topic || "Full-Stack System Architecture Decision Matrix",
      overview: raw.verdict?.summary || raw.overview || "Strategic evaluation across client reactivity, backend concurrency, and database indexing.",
      domainType: "approaches",
      criteria,
      options,
      suggestedNextSteps: raw.verdict?.recommendations || raw.suggestedNextSteps || [
        "Benchmark end-to-end payload latency under high concurrency",
        "Validate zero-trust token refresh interceptors in staging",
        "Profile database execution plans for covering index seeks"
      ],
    };
  }

  return {
    topic: raw.topic || raw.title || "Architectural Comparison",
    overview: raw.overview || "Comparative analysis of options.",
    domainType: raw.domainType || "approaches",
    criteria: Array.isArray(raw.criteria) ? raw.criteria : [],
    options: (Array.isArray(raw.options) ? raw.options : []).map((opt: any) => ({
      ...opt,
      name: opt.name || opt.label || "Option",
      label: opt.label || opt.name || "Option",
      summary: opt.summary || opt.description || "",
      description: opt.description || opt.summary || "",
      scores: opt.scores || {},
    })),
    suggestedNextSteps: Array.isArray(raw.suggestedNextSteps) ? raw.suggestedNextSteps : undefined,
    mindMap: raw.mindMap,
  };
}
