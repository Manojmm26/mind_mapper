import React, { memo } from "react";
import {
  AlertOctagon,
  CheckCircle,
  Target,
  Award,
  Copy,
  Check,
} from "lucide-react";
import { GrillEvaluation } from "../../../schemas/mockGrillSchema";

interface EvaluationScorecardProps {
  evaluation: GrillEvaluation;
  copied: boolean;
  onCopy: () => void;
}

export const EvaluationScorecard = memo(function EvaluationScorecard({
  evaluation,
  copied,
  onCopy,
}: EvaluationScorecardProps) {
  return (
    <div className="rounded-3xl bg-slate-50 dark:bg-slate-950 p-5 border border-purple-200/80 dark:border-purple-900/50 space-y-4 shadow-sm animate-fadeIn">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-purple-600 text-white font-black text-sm shadow-md">
            {evaluation.score.toFixed(1)}
          </div>
          <div>
            <span className="text-[10px] font-black uppercase text-slate-400">
              Assessed Caliber
            </span>
            <h4 className="text-sm font-black text-slate-900 dark:text-white">
              {evaluation.readinessLevel} Engineer Ready
            </h4>
          </div>
        </div>

        {evaluation.redFlagTriggered && (
          <span className="inline-flex items-center gap-1 rounded-full bg-red-100 dark:bg-red-950 px-3 py-1 text-xs font-black text-red-600 dark:text-red-400">
            <AlertOctagon size={14} /> Red Flag Warning
          </span>
        )}
      </div>

      {/* Direct Feedback */}
      <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
        {evaluation.feedback}
      </p>

      {/* Strengths & Gaps */}
      <div className="grid gap-3 sm:grid-cols-2 text-xs">
        <div className="rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 p-3.5 border border-emerald-200/60 dark:border-emerald-900/40 space-y-1.5">
          <strong className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-bold">
            <CheckCircle size={14} /> What You Nailed:
          </strong>
          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
            {evaluation.strengths.map((s, i) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 p-3.5 border border-amber-200/60 dark:border-amber-900/40 space-y-1.5">
          <strong className="text-amber-700 dark:text-amber-400 flex items-center gap-1 font-bold">
            <Target size={14} /> Critical Gaps / Missed Nuance:
          </strong>
          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
            {evaluation.gaps.map((g, i) => (
              <li key={g}>• {g}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Winning Staff Soundbite */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-4 border border-purple-300/50 dark:border-purple-800/40 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-black uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-1">
            <Award size={14} />
            Winning Principal / Staff Response:
          </span>
          <button
            onClick={onCopy}
            className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 dark:text-purple-300 hover:underline"
          >
            {copied ? (
              <Check size={14} className="text-emerald-500" />
            ) : (
              <Copy size={14} />
            )}
            <span>Copy Soundbite</span>
          </button>
        </div>
        <p className="text-xs sm:text-sm font-semibold italic text-slate-900 dark:text-white leading-relaxed">
          "{evaluation.staffSoundbite}"
        </p>
      </div>
    </div>
  );
});
