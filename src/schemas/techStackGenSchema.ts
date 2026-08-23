import { Type } from "@google/genai";
import { z } from "zod";

// ---------------------------------------------------------------------------
// Zod validation (mirrors TechStackProfile sub-structures exactly)
// ---------------------------------------------------------------------------

export const paradigmCategoryEnum = z.enum([
  "DI & Lifecycles",
  "State & Async",
  "Performance & Optimization",
  "Security & Auth",
  "Database & SQL",
  "Architecture & Testing",
]);

export const scenarioArchetypeEnum = z.enum([
  "Production Outages & War Stories",
  "Strategic Steering & Baiting",
  "Architectural Trade-Offs & System Design",
  "Full-Stack Angular ↔ .NET Integration",
  "Counter-Grill & Architecture Deflectors",
]);

export const sqlRuleCategoryEnum = z.enum([
  "Indexing & SARGability",
  "Concurrency & Locking",
  "Query Engine & Plan Cache",
  "High-Throughput & Ingestion",
  "EF Core & Dapper Integration",
]);

// Mirrors FrameworkConceptDossier in fullStackDotNetAngularMatrix.ts
export const generatedConceptDossierSchema = z.object({
  conceptTitle: z.string().describe("Concept title framed for THIS framework, e.g. 'SvelteKit Deep Dive'."),
  architectureOverview: z.string().describe("3-5 sentence architectural overview (~350-500 chars): how this framework structures the concept, key abstractions, and lifecycle."),
  underTheHoodMechanics: z.string().describe("2-4 sentences (~200-300 chars) on compiler/runtime/internals mechanics (e.g. Fiber nodes, Tokio task scheduling, reactivity graph)."),
  extendedProductionCode: z.string().describe("Extended production-grade code snippet (15-40 lines) with imports/decorators/error handling where idiomatic."),
  codeExplanation: z.string().describe("2-3 sentences explaining the non-obvious choices in the code above."),
  productionBestPractices: z.array(z.string()).min(3).max(6).describe("Concrete, opinionated practices (not generic advice); mention specific APIs/config flags."),
  seniorInterviewProbes: z.array(
    z.object({
      interviewerQuestion: z.string(),
      modelLeadAnswer: z.string().describe("~50-80 word answer at Lead/Staff depth with concrete mechanics."),
      whyThisMatters: z.string(),
    })
  ).min(2).max(3),
  criticalPitfallsAndAntiPatterns: z.array(
    z.object({
      antiPattern: z.string(),
      consequence: z.string().describe("Quantified production consequence."),
      remediation: z.string(),
    })
  ).min(1).max(3),
});

export type GeneratedConceptDossier = z.infer<typeof generatedConceptDossierSchema>;

export const generatedParadigmSchema = z.object({
  category: paradigmCategoryEnum,
  name: z.string().describe("Paradigm title, numbered, e.g. '1. Dependency Injection'."),
  frontendTitle: z.string(),
  frontendCode: z.string().describe("Short idiomatic code snippet (8-20 lines)."),
  frontendSoundbite: z.string().describe("One-sentence staff-level summary."),
  frontendNuance: z.string().describe("Deep nuance or version-specific gotcha."),
  backendTitle: z.string(),
  backendCode: z.string().describe("Short idiomatic code snippet (8-20 lines)."),
  backendSoundbite: z.string(),
  backendNuance: z.string(),
  runtimePhysics: z.string().describe("What the runtime/VM actually does under the hood for this paradigm across both stacks (~200 chars)."),
  candidateTrap: z.string().describe("The trap mid-level candidates fall into when discussing this paradigm."),
  coreEquivalency: z.string().describe("The true conceptual mapping between the two stacks."),
  interviewPunchline: z.string().describe("Killer one-liner to say in the interview room."),
  frontendDossier: generatedConceptDossierSchema,
  backendDossier: generatedConceptDossierSchema,
});

export type GeneratedParadigm = z.infer<typeof generatedParadigmSchema>;

export const generatedScenarioSchema = z.object({
  title: z.string().describe("Numbered war-story title, e.g. '1. Black Friday Checkout Meltdown'."),
  archetype: scenarioArchetypeEnum,
  coreIssue: z.string().describe("2-3 sentence incident/architecture context with concrete scale numbers."),
  tenSecondAnchor: z.string().describe("The opening sentence a candidate says first."),
  fullScript: z.string().describe("90-second spoken teleprompter script (200-260 words / ~700-900 chars), first person, metric-driven, with a beginning (incident), middle (investigation mechanics), end (resolution + numbers)."),
  steeringBait: z.array(z.string()).min(1).max(4).describe("Bait phrases candidates drop that invite deep follow-ups."),
  redFlagPitfalls: z.array(z.string()).min(1).max(3).describe("Claims that expose shallow understanding."),
  telemetryMetrics: z.string().describe("Concrete before/after metrics cited in the story."),
});

export type GeneratedScenario = z.infer<typeof generatedScenarioSchema>;

export const generatedSqlRuleSchema = z.object({
  category: sqlRuleCategoryEnum,
  title: z.string().describe("Numbered rule title, e.g. '1. Covering Index Strategy'."),
  badPattern: z.string().describe("Query/data-access anti-pattern snippet with a leading comment."),
  optimizedPattern: z.string().describe("Corrected snippet with a leading comment."),
  explanation: z.string().describe("Why the optimized form wins at the engine level."),
  productionImpact: z.string().describe("Quantified production impact."),
});

export type GeneratedSqlRule = z.infer<typeof generatedSqlRuleSchema>;

export const generatedDecisionMatrixSchema = z.object({
  topic: z.string(),
  overview: z.string(),
  dimensions: z
    .array(
      z.object({
        category: z.string(),
        title: z.string(),
        leftDetail: z.string(),
        rightDetail: z.string(),
        winner: z.enum(["left", "right", "tie"]),
        impactScore: z.number().min(1).max(10),
        strategicVerdict: z.string(),
      })
    )
    .min(5)
    .max(8),
  verdict: z.object({
    title: z.string(),
    summary: z.string(),
    recommendations: z.array(z.string()).min(2).max(4),
  }),
});

export type GeneratedDecisionMatrix = z.infer<typeof generatedDecisionMatrixSchema>;

export const techStackGeneratedPayloadSchema = z.object({
  paradigms: z.array(generatedParadigmSchema).min(0),
  scenarios: z.array(generatedScenarioSchema).min(0),
  sqlRules: z.array(generatedSqlRuleSchema).min(0),
  decisionMatrix: generatedDecisionMatrixSchema.optional(),
});

export type TechStackGeneratedPayload = z.infer<typeof techStackGeneratedPayloadSchema>;

// Batch-level schemas: each LLM call returns a list for one section, letting us
// assemble flagship-depth dossiers (32 paradigms / 18 scenarios / 20 rules,
// each paradigm carrying BOTH framework deep-dive dossiers) across several
// bounded responses instead of one truncation-prone mega-call.
export const generatedParadigmBatchSchema = z.object({
  items: z.array(generatedParadigmSchema).min(1),
});

export const generatedScenarioBatchSchema = z.object({
  items: z.array(generatedScenarioSchema).min(1),
});

export const generatedSqlRuleBatchSchema = z.object({
  items: z.array(generatedSqlRuleSchema).min(1),
});

export function validateTechStackPayload(data: unknown): TechStackGeneratedPayload {
  const result = techStackGeneratedPayloadSchema.safeParse(data);
  if (!result.success) {
    console.error("Tech stack payload validation failed:", result.error.format());
    throw new Error("LLM returned an invalid tech stack structure.");
  }
  return result.data;
}

// ---------------------------------------------------------------------------
// Gemini response schemas (per-batch variants)
// ---------------------------------------------------------------------------

function batchOf(itemSchema: object) {
  return {
    type: Type.OBJECT,
    properties: { items: { type: Type.ARRAY, items: itemSchema } },
    required: ["items"],
  };
}

const conceptDossierSchema = {
  type: Type.OBJECT,
  properties: {
    conceptTitle: { type: Type.STRING },
    architectureOverview: { type: Type.STRING },
    underTheHoodMechanics: { type: Type.STRING },
    extendedProductionCode: { type: Type.STRING },
    codeExplanation: { type: Type.STRING },
    productionBestPractices: { type: Type.ARRAY, items: { type: Type.STRING } },
    seniorInterviewProbes: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          interviewerQuestion: { type: Type.STRING },
          modelLeadAnswer: { type: Type.STRING },
          whyThisMatters: { type: Type.STRING },
        },
        required: ["interviewerQuestion", "modelLeadAnswer", "whyThisMatters"],
      },
    },
    criticalPitfallsAndAntiPatterns: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          antiPattern: { type: Type.STRING },
          consequence: { type: Type.STRING },
          remediation: { type: Type.STRING },
        },
        required: ["antiPattern", "consequence", "remediation"],
      },
    },
  },
  required: [
    "conceptTitle", "architectureOverview", "underTheHoodMechanics",
    "extendedProductionCode", "codeExplanation", "productionBestPractices",
    "seniorInterviewProbes", "criticalPitfallsAndAntiPatterns",
  ],
};

const paradigmSchema = {
  type: Type.OBJECT,
  properties: {
    category: { type: Type.STRING, enum: paradigmCategoryEnum.options },
    name: { type: Type.STRING },
    frontendTitle: { type: Type.STRING },
    frontendCode: { type: Type.STRING },
    frontendSoundbite: { type: Type.STRING },
    frontendNuance: { type: Type.STRING },
    backendTitle: { type: Type.STRING },
    backendCode: { type: Type.STRING },
    backendSoundbite: { type: Type.STRING },
    backendNuance: { type: Type.STRING },
    runtimePhysics: { type: Type.STRING },
    candidateTrap: { type: Type.STRING },
    coreEquivalency: { type: Type.STRING },
    interviewPunchline: { type: Type.STRING },
    frontendDossier: conceptDossierSchema,
    backendDossier: conceptDossierSchema,
  },
  required: [
    "category", "name",
    "frontendTitle", "frontendCode", "frontendSoundbite", "frontendNuance",
    "backendTitle", "backendCode", "backendSoundbite", "backendNuance",
    "runtimePhysics", "candidateTrap", "coreEquivalency", "interviewPunchline",
    "frontendDossier", "backendDossier",
  ],
};

const scenarioSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    archetype: { type: Type.STRING, enum: scenarioArchetypeEnum.options },
    coreIssue: { type: Type.STRING },
    tenSecondAnchor: { type: Type.STRING },
    fullScript: { type: Type.STRING },
    steeringBait: { type: Type.ARRAY, items: { type: Type.STRING } },
    redFlagPitfalls: { type: Type.ARRAY, items: { type: Type.STRING } },
    telemetryMetrics: { type: Type.STRING },
  },
  required: [
    "title", "archetype", "coreIssue", "tenSecondAnchor", "fullScript",
    "steeringBait", "redFlagPitfalls", "telemetryMetrics",
  ],
};

const sqlRuleSchema = {
  type: Type.OBJECT,
  properties: {
    category: { type: Type.STRING, enum: sqlRuleCategoryEnum.options },
    title: { type: Type.STRING },
    badPattern: { type: Type.STRING },
    optimizedPattern: { type: Type.STRING },
    explanation: { type: Type.STRING },
    productionImpact: { type: Type.STRING },
  },
  required: ["category", "title", "badPattern", "optimizedPattern", "explanation", "productionImpact"],
};

const decisionMatrixSchema = {
  type: Type.OBJECT,
  properties: {
    topic: { type: Type.STRING },
    overview: { type: Type.STRING },
    dimensions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          category: { type: Type.STRING },
          title: { type: Type.STRING },
          leftDetail: { type: Type.STRING },
          rightDetail: { type: Type.STRING },
          winner: { type: Type.STRING, enum: ["left", "right", "tie"] },
          impactScore: { type: Type.NUMBER },
          strategicVerdict: { type: Type.STRING },
        },
        required: ["category", "title", "leftDetail", "rightDetail", "winner", "impactScore", "strategicVerdict"],
      },
    },
    verdict: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        summary: { type: Type.STRING },
        recommendations: { type: Type.ARRAY, items: { type: Type.STRING } },
      },
      required: ["title", "summary", "recommendations"],
    },
  },
  required: ["topic", "overview", "dimensions", "verdict"],
};

export const techStackParadigmBatchGenAiSchema = batchOf(paradigmSchema);
export const techStackScenarioBatchGenAiSchema = batchOf(scenarioSchema);
export const techStackSqlRuleBatchGenAiSchema = batchOf(sqlRuleSchema);
export const techStackDecisionMatrixGenAiSchema = decisionMatrixSchema;
