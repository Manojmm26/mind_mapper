import {
  ComparisonCriterion,
  ComparisonOption,
  ComparisonWorkspaceData,
  CriterionScore,
} from "../services/llmService";

/**
 * The LLM returns scores as an array of { criterionId, ... } objects
 * because Gemini's schema doesn't support Record<string, X>.
 * This helper converts that array into a Record keyed by criterionId.
 */
export function scoresArrayToRecord(
  scoresArray: {
    criterionId: string;
    value?: string | number | boolean;
    displayValue: string;
    rating?: number;
    note?: string;
  }[],
): Record<string, CriterionScore> {
  const record: Record<string, CriterionScore> = {};
  for (const s of scoresArray) {
    record[s.criterionId] = {
      value: s.value ?? s.displayValue,
      displayValue: s.displayValue,
      rating: s.rating as CriterionScore["rating"],
      note: s.note,
    };
  }
  return record;
}

/**
 * Normalizes a raw ComparisonWorkspaceData response from the LLM.
 * Converts the scores array into a Record<string, CriterionScore> for each option.
 */
export function normalizeComparisonData(raw: ComparisonWorkspaceData): ComparisonWorkspaceData {
  return {
    ...raw,
    options: raw.options.map((opt) => ({
      ...opt,
      scores: Array.isArray(opt.scores)
        ? scoresArrayToRecord(opt.scores as any)
        : opt.scores,
    })),
  };
}

/**
 * Returns a Tailwind-friendly color class for a 1-5 rating.
 */
export function getRatingColor(rating?: number): string {
  if (!rating) return "text-slate-400";
  if (rating <= 1) return "text-red-500";
  if (rating === 2) return "text-orange-500";
  if (rating === 3) return "text-amber-500";
  if (rating === 4) return "text-emerald-500";
  return "text-emerald-700";
}

/**
 * Returns a background color class for a matrix cell based on rating.
 */
export function getMatrixCellBg(rating?: number): string {
  if (!rating) return "bg-slate-50";
  if (rating <= 1) return "bg-red-50";
  if (rating === 2) return "bg-orange-50";
  if (rating === 3) return "bg-amber-50";
  if (rating === 4) return "bg-emerald-50";
  return "bg-emerald-100";
}

/**
 * Returns a variant-aware button class for comparison actions.
 */
export function getActionClasses(variant?: "primary" | "secondary" | "ghost"): string {
  switch (variant) {
    case "primary":
      return "bg-slate-900 text-white hover:bg-slate-800 shadow-sm";
    case "secondary":
      return "bg-white border border-slate-200 text-slate-800 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-900";
    case "ghost":
      return "text-slate-500 hover:text-slate-800 hover:bg-slate-50";
    default:
      return "bg-white border border-slate-200 text-slate-800 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-900";
  }
}
