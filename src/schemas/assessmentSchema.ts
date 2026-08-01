import { Type } from "@google/genai";
import { z } from "zod";

export const SelfReportStatusEnum = z.enum(["mastered", "review", "gap"]);

export const assessmentConceptSchema = z.object({
  id: z.string(),
  label: z.string().max(100),
  category: z.string().describe("Pillar or category name."),
  description: z.string(),
  question: z
    .string()
    .describe(
      "A self-assessment question (e.g. 'Can you explain how X works?').",
    ),
  level: z.number().min(1).max(3).describe("Concept hierarchy level (1, 2, 3)."),
});

export const assessmentStage1Schema = z.object({
  topic: z.string(),
  overview: z.string(),
  concepts: z.array(assessmentConceptSchema).min(3),
});

export const mcqQuestionSchema = z.object({
  id: z.string(),
  conceptId: z.string(),
  question: z.string(),
  options: z.array(z.string()).length(4),
  correctIndex: z.number().min(0).max(3),
  explanation: z.string(),
});

export const assessmentStage2Schema = z.object({
  topic: z.string(),
  mcqs: z.array(mcqQuestionSchema).min(1),
});

export const resourceSchema = z.object({
  title: z.string(),
  type: z.enum(["article", "video", "course", "documentation", "book"]),
  url: z.string().optional(),
});

export const studyMilestoneSchema = z.object({
  id: z.string(),
  title: z.string(),
  estimatedHours: z.number(),
  targetConceptIds: z.array(z.string()),
  keyTakeaways: z.array(z.string()),
  recommendedActions: z.array(z.string()),
  resources: z.array(resourceSchema).optional(),
});

export const studyRoadmapSchema = z.object({
  topic: z.string(),
  overview: z.string(),
  totalEstimatedHours: z.number().optional(),
  milestones: z.array(studyMilestoneSchema).min(1),
});

export const flashcardSchema = z.object({
  id: z.string(),
  conceptId: z.string(),
  front: z.string(),
  back: z.string(),
  category: z.string().optional(),
});

export const flashcardDeckSchema = z.object({
  topic: z.string(),
  cards: z.array(flashcardSchema).min(1),
});

export type AssessmentConcept = z.infer<typeof assessmentConceptSchema>;
export type AssessmentStage1Data = z.infer<typeof assessmentStage1Schema>;
export type MCQQuestion = z.infer<typeof mcqQuestionSchema>;
export type AssessmentStage2Data = z.infer<typeof assessmentStage2Schema>;
export type Resource = z.infer<typeof resourceSchema>;
export type StudyMilestone = z.infer<typeof studyMilestoneSchema>;
export type StudyRoadmapData = z.infer<typeof studyRoadmapSchema>;
export type AssessmentSelfReportStatus = z.infer<typeof SelfReportStatusEnum>;
export type Flashcard = z.infer<typeof flashcardSchema>;
export type FlashcardDeckData = z.infer<typeof flashcardDeckSchema>;

export const assessmentStage1SchemaGenAI = {
  type: Type.OBJECT,
  properties: {
    topic: { type: Type.STRING },
    overview: { type: Type.STRING },
    concepts: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          label: { type: Type.STRING },
          category: { type: Type.STRING },
          description: { type: Type.STRING },
          question: { type: Type.STRING },
          level: { type: Type.NUMBER },
        },
        required: [
          "id",
          "label",
          "category",
          "description",
          "question",
          "level",
        ],
      },
    },
  },
  required: ["topic", "overview", "concepts"],
};

export const assessmentStage2SchemaGenAI = {
  type: Type.OBJECT,
  properties: {
    topic: { type: Type.STRING },
    mcqs: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          conceptId: { type: Type.STRING },
          question: { type: Type.STRING },
          options: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          correctIndex: { type: Type.NUMBER },
          explanation: { type: Type.STRING },
        },
        required: [
          "id",
          "conceptId",
          "question",
          "options",
          "correctIndex",
          "explanation",
        ],
      },
    },
  },
  required: ["topic", "mcqs"],
};

export const studyRoadmapSchemaGenAI = {
  type: Type.OBJECT,
  properties: {
    topic: { type: Type.STRING },
    overview: { type: Type.STRING },
    milestones: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          title: { type: Type.STRING },
          estimatedHours: { type: Type.NUMBER },
          targetConceptIds: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          keyTakeaways: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          recommendedActions: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          resources: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                type: {
                  type: Type.STRING,
                  enum: [
                    "article",
                    "video",
                    "course",
                    "documentation",
                    "book",
                  ],
                },
                url: { type: Type.STRING },
              },
              required: ["title", "type"],
            },
          },
        },
        required: [
          "id",
          "title",
          "estimatedHours",
          "targetConceptIds",
          "keyTakeaways",
          "recommendedActions",
        ],
      },
    },
  },
  required: ["topic", "overview", "milestones"],
};

export const flashcardDeckSchemaGenAI = {
  type: Type.OBJECT,
  properties: {
    topic: { type: Type.STRING },
    cards: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          conceptId: { type: Type.STRING },
          front: { type: Type.STRING },
          back: { type: Type.STRING },
        },
        required: ["id", "conceptId", "front", "back"],
      },
    },
  },
  required: ["topic", "cards"],
};

export function validateAssessmentStage1(
  data: unknown,
): AssessmentStage1Data {
  const result = assessmentStage1Schema.safeParse(data);
  if (!result.success) {
    console.warn(
      "Assessment Stage 1 validation warnings:",
      result.error.format(),
    );
    if (data && typeof data === "object" && "concepts" in data) {
      const raw = data as Record<string, unknown>;
      return {
        topic: String(raw.topic || "Diagnostic Assessment"),
        overview: String(raw.overview || "Overview unavailable."),
        concepts: Array.isArray(raw.concepts)
          ? raw.concepts.map((c: Record<string, unknown>, i: number) => ({
              id: String(c.id || `concept_${i}`),
              label: String(c.label || `Concept ${i + 1}`).substring(0, 100),
              category: String(c.category || "General"),
              description: String(
                c.description || "No description provided.",
              ),
              question: String(
                c.question || `Do you understand ${c.label || "this concept"}?`,
              ),
              level: typeof c.level === "number" ? c.level : 1,
            }))
          : [],
      };
    }
    throw new Error(
      `Failed to validate Assessment Stage 1 schema: ${result.error.message}`,
    );
  }
  return result.data;
}

export function validateAssessmentStage2(
  data: unknown,
): AssessmentStage2Data {
  const result = assessmentStage2Schema.safeParse(data);
  if (!result.success) {
    console.warn(
      "Assessment Stage 2 validation warnings:",
      result.error.format(),
    );
    if (data && typeof data === "object" && "mcqs" in data) {
      const raw = data as Record<string, unknown>;
      return {
        topic: String(raw.topic || "Verification Assessment"),
        mcqs: Array.isArray(raw.mcqs)
          ? raw.mcqs.map((q: Record<string, unknown>, i: number) => ({
              id: String(q.id || `mcq_${i}`),
              conceptId: String(q.conceptId || `concept_${i}`),
              question: String(q.question || "Verification question"),
              options: Array.isArray(q.options) && q.options.length === 4
                ? q.options.map(String)
                : ["Option A", "Option B", "Option C", "Option D"],
              correctIndex: typeof q.correctIndex === "number" && q.correctIndex >= 0 && q.correctIndex <= 3
                ? q.correctIndex
                : 0,
              explanation: String(q.explanation || "No explanation provided."),
            }))
          : [],
      };
    }
    throw new Error(
      `Failed to validate Assessment Stage 2 schema: ${result.error.message}`,
    );
  }
  return result.data;
}

export function validateStudyRoadmap(data: unknown): StudyRoadmapData {
  const result = studyRoadmapSchema.safeParse(data);
  if (!result.success) {
    console.warn("Study Roadmap validation warnings:", result.error.format());
    if (data && typeof data === "object" && "milestones" in data) {
      const raw = data as Record<string, unknown>;
      const milestones = Array.isArray(raw.milestones)
        ? raw.milestones.map((m: Record<string, unknown>, i: number) => ({
            id: String(m.id || `milestone_${i}`),
            title: String(m.title || `Milestone ${i + 1}`),
            estimatedHours: typeof m.estimatedHours === "number" ? m.estimatedHours : 2,
            targetConceptIds: Array.isArray(m.targetConceptIds) ? m.targetConceptIds.map(String) : [],
            keyTakeaways: Array.isArray(m.keyTakeaways) ? m.keyTakeaways.map(String) : [],
            recommendedActions: Array.isArray(m.recommendedActions) ? m.recommendedActions.map(String) : [],
            resources: Array.isArray(m.resources)
              ? m.resources.map((r: Record<string, unknown>) => ({
                  title: String(r.title || "Learning Resource"),
                  type: typeof r.type === "string" && ["article", "video", "course", "documentation", "book"].includes(r.type)
                    ? (r.type as any)
                    : "article",
                  url: typeof r.url === "string" ? r.url : undefined,
                }))
              : undefined,
          }))
        : [];
      return {
        topic: String(raw.topic || "Study Roadmap"),
        overview: String(raw.overview || "Overview unavailable."),
        totalEstimatedHours: typeof raw.totalEstimatedHours === "number"
          ? raw.totalEstimatedHours
          : milestones.reduce((sum, m) => sum + m.estimatedHours, 0),
        milestones,
      };
    }
    throw new Error(`Failed to validate Study Roadmap schema: ${result.error.message}`);
  }
  return result.data;
}

export function validateFlashcardDeck(data: unknown): FlashcardDeckData {
  const result = flashcardDeckSchema.safeParse(data);
  if (!result.success) {
    console.warn("Flashcard Deck validation warnings:", result.error.format());
    if (data && typeof data === "object" && "cards" in data) {
      const raw = data as Record<string, unknown>;
      return {
        topic: String(raw.topic || "Flashcard Practice"),
        cards: Array.isArray(raw.cards)
          ? raw.cards.map((c: Record<string, unknown>, i: number) => ({
              id: String(c.id || `card_${i}`),
              conceptId: String(c.conceptId || `concept_${i}`),
              front: String(c.front || "Flashcard Question"),
              back: String(c.back || "Flashcard Answer"),
              category: typeof c.category === "string" ? c.category : undefined,
            }))
          : [],
      };
    }
    throw new Error(`Failed to validate Flashcard Deck schema: ${result.error.message}`);
  }
  return result.data;
}
