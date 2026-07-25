/**
 * Centralized Gemini AI Model Configuration (Gemini 3 Series - Lite Default)
 * 
 * Configures Google's Lite model lineup by default for ultra-high throughput,
 * lowest cost, and generous rate limits.
 */

export interface GeminiModelInfo {
  id: string;
  name: string;
  description: string;
  category: "flash" | "flash-lite" | "pro";
  recommendedFor: string;
  pricingNote: string;
  isDefault?: boolean;
}

export const AVAILABLE_GEMINI_MODELS: GeminiModelInfo[] = [
  {
    id: "gemini-3.5-flash-lite",
    name: "Gemini 3.5 Flash-Lite",
    description: "Ultra-fast (~350 tokens/sec) and lowest-cost Gemini 3 model with generous rate limits.",
    category: "flash-lite",
    recommendedFor: "Mind Maps, Comparison Workspaces & Wiki Synthesis (Recommended Default)",
    pricingNote: "Lowest Latency & Highest Limits",
    isDefault: true,
  },
  {
    id: "gemini-2.5-flash-lite",
    name: "Gemini 2.5 Flash-Lite",
    description: "Google's lightweight 2.5 series model — ultra-cheap for high-volume tasks.",
    category: "flash-lite",
    recommendedFor: "High-Volume Queries, Quick Wiki Tags & Auto-Linting",
    pricingNote: "Ultra-Cheap Tier",
  },
  {
    id: "gemini-3.6-flash",
    name: "Gemini 3.6 Flash",
    description: "Google's 3.6 workhorse — 17% higher token efficiency, agentic planning, fast structured JSON.",
    category: "flash",
    recommendedFor: "Complex Mind Maps & Deep Context Ingestion",
    pricingNote: "Production Flash (GA)",
  },
  {
    id: "gemini-3.1-pro-preview",
    name: "Gemini 3.1 Pro",
    description: "Google's premier deep-reasoning model for complex multi-step synthesis.",
    category: "pro",
    recommendedFor: "Complex Architecture & Technical Synthesizing",
    pricingNote: "High Reasoning Tier",
  },
];

export const DEFAULT_GEMINI_MODEL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_GEMINI_MODEL) ||
  (typeof process !== "undefined" && process.env?.GEMINI_MODEL) ||
  "gemini-3.5-flash-lite";

export const FAST_GEMINI_MODEL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_GEMINI_FAST_MODEL) ||
  (typeof process !== "undefined" && process.env?.GEMINI_FAST_MODEL) ||
  "gemini-3.5-flash-lite";

export function getActiveGeminiModel(): string {
  if (typeof window !== "undefined") {
    const userChoice = localStorage.getItem("mindmapper_gemini_model");
    if (userChoice) return userChoice;
  }
  return DEFAULT_GEMINI_MODEL;
}

export function setActiveGeminiModel(modelId: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("mindmapper_gemini_model", modelId);
  }
}
