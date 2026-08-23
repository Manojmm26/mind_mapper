import React, { memo } from "react";
import {
  UserCheck,
  HelpCircle,
  ChevronUp,
  ChevronDown,
  CheckCircle,
  AlertOctagon,
} from "lucide-react";
import { GrillQuestion } from "../../../schemas/mockGrillSchema";

interface QuestionCardProps {
  question: GrillQuestion;
  showHint: boolean;
  onToggleHint: () => void;
}

export const QuestionCard = memo(function QuestionCard({
  question,
  showHint,
  onToggleHint,
}: QuestionCardProps) {
  return (
    <>
      {/* Persona & Focus Area Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 px-3 py-1 text-xs font-black text-purple-700 dark:text-purple-300">
          <UserCheck size={14} />
          {question.persona}
        </span>
        <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[11px] font-bold text-slate-600 dark:text-slate-400">
          Focus: {question.focusArea}
        </span>
      </div>

      {/* Interrogator Question */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800/80 space-y-1">
        <span className="text-[10px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
          Interviewer Counter-Question:
        </span>
        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
          "{question.question}"
        </h3>
      </div>

      {/* Collapsible Hints & Trap Warning */}
      <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
        <button
          onClick={onToggleHint}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-purple-600 dark:hover:text-purple-400"
        >
          <HelpCircle size={14} />
          <span>{showHint ? "Hide Model Points & Traps" : "Show Interviewer Expectations & Traps"}</span>
          {showHint ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {showHint && (
          <div className="mt-3 grid gap-3 sm:grid-cols-2 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 p-4 border border-amber-200/50 dark:border-amber-900/30 text-xs">
            <div className="space-y-1.5">
              <strong className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle size={14} /> Key Expected Points:
              </strong>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                {question.modelAnswerKeyPoints.map((kp, i) => (
                  <li key={kp}>{kp}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-1.5">
              <strong className="text-red-700 dark:text-red-400 flex items-center gap-1">
                <AlertOctagon size={14} /> Fatal Trap to Avoid:
              </strong>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {question.trapToAvoid}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
});
