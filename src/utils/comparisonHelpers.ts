import {
  ComparisonWorkspaceData,
  ComparisonWorkspaceDataRaw,
  normalizeComparisonData,
} from "../services/llmService";

// Re-export the normalization helper so existing imports continue to work
export { normalizeComparisonData };

/**
 * @deprecated Use normalizeComparisonData from llmSchemas instead.
 * Kept for backward compatibility with any code that still calls this directly.
 */
export function scoresArrayToRecord(
  scoresArray: {
    criterionId: string;
    value?: string | number | boolean;
    displayValue: string;
    rating?: number;
    note?: string;
  }[],
): ComparisonWorkspaceData["options"][number]["scores"] {
  const record: ComparisonWorkspaceData["options"][number]["scores"] = {};
  for (const s of scoresArray) {
    record[s.criterionId] = {
      criterionId: s.criterionId,
      value: s.value ?? s.displayValue,
      displayValue: s.displayValue,
      rating:
        s.rating as ComparisonWorkspaceData["options"][number]["scores"][string]["rating"],
      note: s.note,
    };
  }
  return record;
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
export function getActionClasses(
  variant?: "primary" | "secondary" | "ghost",
): string {
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
