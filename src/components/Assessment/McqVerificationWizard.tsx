import { useState } from "react";
import { CheckCircle2, HelpCircle, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { AssessmentStage2Data } from "../../services/llmService";

interface McqVerificationWizardProps {
  data: AssessmentStage2Data;
  onSubmit: (answers: Record<string, number>) => void;
}

export function McqVerificationWizard({ data, onSubmit }: McqVerificationWizardProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentMcq = data.mcqs[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (!currentMcq) return;
    setAnswers({ ...answers, [currentMcq.id]: optionIndex });
  };

  const handleNext = () => {
    if (currentIndex < data.mcqs.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onSubmit(answers);
    }
  };

  if (!currentMcq) return null;

  const isSelected = answers[currentMcq.id] !== undefined;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header */}
      <div className="rounded-[28px] border border-white/70 bg-white/80 dark:border-white/10 dark:bg-slate-900/80 p-6 shadow-sm backdrop-blur-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 dark:bg-amber-950/60 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-amber-700 dark:text-amber-300">
              <ShieldCheck size={12} />
              Phase 2 of 2: Targeted MCQ Verification ({data.mcqs.length} Questions)
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              Verify Your Knowledge
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Answer these targeted questions to confirm actual mastery on your flagged concepts.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-2xl font-black text-amber-600 dark:text-amber-400">
              {currentIndex + 1}
            </span>
            <span className="text-sm font-bold text-slate-400 dark:text-slate-500">
              /{data.mcqs.length}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-orange-600 transition-[width] duration-300"
            style={{
              width: `${Math.round(((currentIndex + 1) / data.mcqs.length) * 100)}%`,
            }}
          />
        </div>
      </div>

      {/* MCQ Card */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/90 bg-white dark:border-white/10 dark:bg-slate-900 p-6 shadow-xl sm:p-8">
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 dark:border-white/10 pb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            <Sparkles size={12} />
            {currentMcq.conceptLabel}
          </span>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-bold leading-7 text-slate-900 dark:text-white sm:text-xl">
            {currentMcq.question}
          </h3>

          {/* Answer Options */}
          <div className="mt-6 space-y-3">
            {currentMcq.options.map((optionText, optIndex) => {
              const selected = answers[currentMcq.id] === optIndex;
              return (
                <button
                  key={optionText}
                  type="button"
                  onClick={() => handleSelectOption(optIndex)}
                  className={`group flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-smooth ${
                    selected
                      ? "border-amber-500 bg-amber-50/80 text-amber-900 dark:border-amber-500/80 dark:bg-amber-950/60 dark:text-amber-200 ring-2 ring-amber-500/20"
                      : "border-slate-200 bg-slate-50/50 text-slate-700 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-200 hover:border-amber-300 hover:bg-white dark:hover:bg-slate-800"
                  }`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black transition-colors ${
                      selected
                        ? "bg-amber-600 text-white dark:bg-amber-500"
                        : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-200 group-hover:bg-amber-200 group-hover:text-amber-800 dark:group-hover:bg-amber-900/60 dark:group-hover:text-amber-300"
                    }`}
                  >
                    {String.fromCharCode(65 + optIndex)}
                  </div>
                  <p className="mt-0.5 text-sm font-medium leading-6">
                    {optionText}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-8 flex justify-end border-t border-slate-100 dark:border-white/10 pt-6">
          <button
            type="button"
            disabled={!isSelected}
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition-smooth hover:bg-amber-700 hover:scale-105 disabled:opacity-40"
          >
            {currentIndex === data.mcqs.length - 1 ? (
              <>
                <CheckCircle2 size={18} />
                Generate Diagnostic Report
              </>
            ) : (
              <>
                Next Question
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
