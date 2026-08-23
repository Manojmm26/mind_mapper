import React, { memo } from "react";
import { ScenarioNarrative } from "../../../data/examples/fullStackDotNetAngularMatrix";

interface ScenarioMastery {
  count: number;
  bestScore: number;
  latestReadiness?: string;
}

interface ScenarioCardProps {
  scenario: ScenarioNarrative;
  isSelected: boolean;
  mastery?: ScenarioMastery;
  onSelect: (id: string) => void;
}

export const ScenarioCard = memo(function ScenarioCard({
  scenario,
  isSelected,
  mastery,
  onSelect,
}: ScenarioCardProps) {
  return (
    <button
      onClick={() => onSelect(scenario.id)}
      className={`w-full text-left rounded-2xl p-3 min-h-[52px] transition-smooth flex items-start justify-between gap-2 border focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
        isSelected
          ? "bg-purple-600 text-white border-purple-700 shadow-md font-bold"
          : "bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200"
      }`}
    >
      <div className="space-y-1 pr-1">
        <p className="text-xs font-bold line-clamp-1 leading-snug">{scenario.title}</p>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span
            className={`font-semibold ${
              isSelected ? "text-white/80" : "text-slate-400 dark:text-slate-500"
            }`}
          >
            {scenario.archetype.split(" ")[0]}
          </span>
          {mastery ? (
            <span
              className={`rounded-full px-1.5 py-0.2 font-black ${
                isSelected
                  ? "bg-white/20 text-white"
                  : mastery.bestScore >= 4.5
                  ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300"
                  : mastery.bestScore >= 4.0
                  ? "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300"
                  : "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300"
              }`}
            >
              ⭐ {mastery.bestScore.toFixed(1)}
            </span>
          ) : (
            <span
              className={`rounded-full px-1.5 py-0.2 font-semibold ${
                isSelected ? "text-white/60" : "text-slate-400"
              }`}
            >
              ⚪ Untested
            </span>
          )}
        </div>
      </div>
    </button>
  );
});
