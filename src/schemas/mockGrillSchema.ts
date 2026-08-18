import { Type } from "@google/genai";
import { z } from "zod";

export const GrillInterviewerPersonaEnum = z.enum([
  "Staff Architect (High-Throughput & Failure Modes)",
  "Engineering Director (Trade-offs & Business Impact)",
  "Database SRE (Lock Contention & Query Tuning)",
  "Frontend Principal (Reactivity & DOM Performance)",
]);

export type GrillInterviewerPersona = z.infer<typeof GrillInterviewerPersonaEnum>;

export const grillQuestionSchema = z.object({
  id: z.string(),
  question: z.string().describe("A tough, probing follow-up counter-question challenging the candidate's scenario design or assumptions."),
  persona: GrillInterviewerPersonaEnum.describe("The interviewer persona asking this question."),
  focusArea: z.string().describe("The specific technical angle being challenged (e.g. Lock Escalation, LOH Memory Leaks, Zoneless Change Detection)."),
  modelAnswerKeyPoints: z.array(z.string()).describe("Key technical points a lead/staff candidate must articulate to pass."),
  trapToAvoid: z.string().describe("Common junior/mid-level trap or dangerous answer to this question."),
});

export type GrillQuestion = z.infer<typeof grillQuestionSchema>;

export const grillQuestionsPayloadSchema = z.object({
  scenarioId: z.string(),
  questions: z.array(grillQuestionSchema).min(2).max(4),
});

export type GrillQuestionsPayload = z.infer<typeof grillQuestionsPayloadSchema>;

export const grillEvaluationSchema = z.object({
  score: z.number().min(1).max(5).describe("Overall score from 1.0 to 5.0 (5.0 = Principal/Staff Engineer caliber)."),
  readinessLevel: z.enum(["Junior", "Mid-Level", "Senior", "Lead / Staff", "Principal"]).describe("Assessed senior engineering caliber."),
  feedback: z.string().describe("Direct, constructive assessment of the response."),
  strengths: z.array(z.string()).describe("Key technical concepts and soundbites the candidate articulated accurately."),
  gaps: z.array(z.string()).describe("Important architectural trade-offs or technical details the candidate missed."),
  redFlagTriggered: z.boolean().describe("Whether the candidate fell into any dangerous anti-patterns or incorrect claims."),
  redFlagDetails: z.string().optional().describe("Description of the red flag if triggered."),
  staffSoundbite: z.string().describe("How a Principal / Staff Engineer would succinctly articulate the ideal answer."),
});

export type GrillEvaluation = z.infer<typeof grillEvaluationSchema>;

export interface GrillAnswerRecord {
  questionId: string;
  questionText: string;
  persona: string;
  focusArea: string;
  candidateAnswer: string;
  evaluation: GrillEvaluation;
  answeredAt: string;
}

export interface GrillSessionRecord {
  id: string;
  scenarioId: string;
  scenarioTitle: string;
  createdAt: string;
  answers: GrillAnswerRecord[];
  averageScore: number;
  overallReadiness: "Junior" | "Mid-Level" | "Senior" | "Lead / Staff" | "Principal";
}

// GenAI SDK JSON Schemas for Gemini Structured Output
export const grillQuestionsGenAiSchema = {
  type: Type.OBJECT,
  properties: {
    scenarioId: { type: Type.STRING },
    questions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          question: { type: Type.STRING },
          persona: {
            type: Type.STRING,
            enum: [
              "Staff Architect (High-Throughput & Failure Modes)",
              "Engineering Director (Trade-offs & Business Impact)",
              "Database SRE (Lock Contention & Query Tuning)",
              "Frontend Principal (Reactivity & DOM Performance)",
            ],
          },
          focusArea: { type: Type.STRING },
          modelAnswerKeyPoints: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          trapToAvoid: { type: Type.STRING },
        },
        required: ["id", "question", "persona", "focusArea", "modelAnswerKeyPoints", "trapToAvoid"],
      },
    },
  },
  required: ["scenarioId", "questions"],
};

export const grillEvaluationGenAiSchema = {
  type: Type.OBJECT,
  properties: {
    score: { type: Type.NUMBER },
    readinessLevel: {
      type: Type.STRING,
      enum: ["Junior", "Mid-Level", "Senior", "Lead / Staff", "Principal"],
    },
    feedback: { type: Type.STRING },
    strengths: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    gaps: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    redFlagTriggered: { type: Type.BOOLEAN },
    redFlagDetails: { type: Type.STRING },
    staffSoundbite: { type: Type.STRING },
  },
  required: [
    "score",
    "readinessLevel",
    "feedback",
    "strengths",
    "gaps",
    "redFlagTriggered",
    "staffSoundbite",
  ],
};
