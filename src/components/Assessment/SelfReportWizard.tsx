import { useState, useMemo } from "react";
import { CheckCircle2, AlertTriangle, XCircle, ArrowLeft, ArrowRight, Sparkles, HelpCircle, Layers } from "lucide-react";
import { AssessmentStage1Data, AssessmentSelfReportStatus, AssessmentConcept } from "../../services/llmService";
import { cn } from "../../utils/cn";

interface SelfReportWizardProps {
  data: AssessmentStage1Data;
  onSubmit: (answers: Record<string, AssessmentSelfReportStatus>) => void;
}

export function SelfReportWizard({ data, onSubmit }: SelfReportWizardProps) {
  const [answers, setAnswers] = useState<Record<string, AssessmentSelfReportStatus>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  // Group concepts into active list (pruning sub-concepts if parent is marked 'gap')
  const { visibleConcepts, totalCount } = useMemo(() => {
    const visible: AssessmentConcept[] = [];
    const skippedParentIds = new Set<string>();

    data.concepts.forEach((concept) => {
      // If parent concept was marked as gap, auto-prune children
      if (concept.parentId && skippedParentIds.has(concept.parentId)) {
        skippedParentIds.add(concept.id);
        return;
      }

      if (concept.parentId && answers[concept.parentId] === "gap") {
        skippedParentIds.add(concept.id);
        return;
      }

      visible.push(concept);
    });

    return { visibleConcepts: visible, totalCount: data.concepts.length };
  }, [data.concepts, answers]);

  const currentConcept = visibleConcepts[currentIndex] || visibleConcepts[visibleConcepts.length - 1];
  const currentStatus = currentConcept ? answers[currentConcept.id] : undefined;

  const handleSelectAnswer = (status: AssessmentSelfReportStatus) => {
    if (!currentConcept) return;

    const newAnswers = { ...answers, [currentConcept.id]: status };

    // Adaptive pruning: if a level 1 concept is marked gap, auto-set child concepts to gap
    if (status === "gap" && currentConcept.level === 1) {
      for (const child of data.concepts) {
        if (child.parentId === currentConcept.id) {
          newAnswers[child.id] = "gap";
        }
      }
    }

    setAnswers(newAnswers);

    if (currentIndex < visibleConcepts.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const isComplete = Object.keys(answers).length >= visibleConcepts.length;

  const handleFinish = () => {
    // Fill any un-answered visible concepts as 'gap'
    const finalAnswers: Record<string, AssessmentSelfReportStatus> = { ...answers };
    data.concepts.forEach((c) => {
      if (!finalAnswers[c.id]) {
        finalAnswers[c.id] = "gap";
      }
    });
    onSubmit(finalAnswers);
  };

  if (!currentConcept) {
    return null;
  }

  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.min(100, Math.round((answeredCount / visibleConcepts.length) * 100));

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header & Progress */}
      <div className="rounded-[28px] border border-white/70 bg-white/80 dark:border-white/10 dark:bg-slate-900/80 p-6 shadow-sm backdrop-blur-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-300">
              <Sparkles size={12} />
              Phase 1 of 2: Rapid Self-Evaluation
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              {data.topic}
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{data.overview}</p>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400">
              {currentIndex + 1}
            </span>
            <span className="text-sm font-bold text-slate-400 dark:text-slate-500">
              /{visibleConcepts.length}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 transition-[width] duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Active Concept Card */}
      <div className="rounded-[32px] border border-white/80 bg-white/90 dark:border-white/10 dark:bg-slate-900/90 p-5 sm:p-8 shadow-xl backdrop-blur-xl transition-smooth">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-cyan-700 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-800/40">
              <Layers size={12} />
              {currentConcept.category || "Core Concept"}
            </span>
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              Concept Level {currentConcept.level}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {currentConcept.label}
          </h3>

          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            {currentConcept.description}
          </p>

          {/* Diagnostic Question Box */}
          <div className="rounded-2xl border border-cyan-100 dark:border-cyan-800/30 bg-gradient-to-r from-cyan-50/60 to-blue-50/40 dark:from-cyan-950/40 dark:to-blue-950/30 p-4">
            <div className="flex items-start gap-3">
              <HelpCircle className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400" size={20} />
              <div>
                <p className="text-[11px] font-black uppercase tracking-wider text-cyan-800 dark:text-cyan-300">
                  Diagnostic Question
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">
                  "{currentConcept.question}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Self-Rating Action Buttons */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => handleSelectAnswer("mastered")}
            className={cn(
              "group flex items-center justify-center gap-2 rounded-2xl border p-4 text-sm font-bold transition-smooth",
              currentStatus === "mastered"
                ? "border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-500/80 dark:bg-emerald-950/60 dark:text-emerald-200 ring-2 ring-emerald-500/20"
                : "border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/40"
            )}
          >
            <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 transition-transform group-hover:scale-110" size={18} />
            <span>I Mastered This</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectAnswer("review")}
            className={cn(
              "group flex items-center justify-center gap-2 rounded-2xl border p-4 text-sm font-bold transition-smooth",
              currentStatus === "review"
                ? "border-amber-500 bg-amber-50 text-amber-900 dark:border-amber-500/80 dark:bg-amber-950/60 dark:text-amber-200 ring-2 ring-amber-500/20"
                : "border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200 hover:border-amber-300 hover:bg-amber-50/50 dark:hover:bg-amber-950/40"
            )}
          >
            <AlertTriangle className="text-amber-600 dark:text-amber-400 transition-transform group-hover:scale-110" size={18} />
            <span>Needs Review</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectAnswer("gap")}
            className={cn(
              "group flex items-center justify-center gap-2 rounded-2xl border p-4 text-sm font-bold transition-smooth",
              currentStatus === "gap"
                ? "border-rose-500 bg-rose-50 text-rose-900 dark:border-rose-500/80 dark:bg-rose-950/60 dark:text-rose-200 ring-2 ring-rose-500/20"
                : "border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200 hover:border-rose-300 hover:bg-rose-50/50 dark:hover:bg-rose-950/40"
            )}
          >
            <XCircle className="text-rose-600 dark:text-rose-400 transition-transform group-hover:scale-110" size={18} />
            <span>I Don't Know</span>
          </button>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-6">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white disabled:opacity-30"
          >
            <ArrowLeft size={16} />
            Previous
          </button>

          {isComplete || currentIndex === visibleConcepts.length - 1 ? (
            <button
              type="button"
              onClick={handleFinish}
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-smooth hover:bg-cyan-700 hover:scale-105 active:scale-95"
            >
              Proceed to Phase 2
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 transition-colors hover:text-cyan-700 dark:hover:text-cyan-300"
            >
              Skip / Next
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
