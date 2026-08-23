import React, { memo } from "react";
import { CheckCircle, Check, Save } from "lucide-react";
import { GrillQuestion } from "../../../schemas/mockGrillSchema";

interface QuestionNavTabsProps {
  questions: GrillQuestion[];
  currentQuestionIndex: number;
  onSelectQuestion: (index: number) => void;
  evaluations: Record<string, unknown>;
  savedSuccess: boolean;
  onSaveSession: () => void;
}

export const QuestionNavTabs = memo(function QuestionNavTabs({
  questions,
  currentQuestionIndex,
  onSelectQuestion,
  evaluations,
  savedSuccess,
  onSaveSession,
}: QuestionNavTabsProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/80 dark:bg-slate-900/80 p-2 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
      <div className="flex items-center gap-1.5">
        {questions.map((q, idx) => {
          const isAnswered = !!evaluations[q.id];
          const isCurrent = idx === currentQuestionIndex;
          return (
            <button
              key={q.id}
              onClick={() => onSelectQuestion(idx)}
              className={`rounded-xl px-3.5 py-2 min-h-[36px] text-xs font-black transition-smooth flex items-center gap-1.5 ${
                isCurrent
                  ? "bg-purple-600 text-white shadow-md"
                  : isAnswered
                  ? "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
              }`}
            >
              <span>Q{idx + 1}</span>
              {isAnswered && <CheckCircle size={12} className="text-emerald-500" />}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onSaveSession}
          className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 dark:bg-white dark:text-slate-950 text-white px-3.5 py-2 min-h-[36px] text-xs font-bold hover:opacity-90 shadow-sm transition-smooth"
        >
          {savedSuccess ? (
            <>
              <Check size={14} className="text-emerald-400" />
              <span>Saved to Log!</span>
            </>
          ) : (
            <>
              <Save size={14} />
              <span>Save Session Log</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
});
