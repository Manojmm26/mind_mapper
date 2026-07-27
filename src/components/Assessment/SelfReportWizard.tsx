import { useState, useMemo } from "react";
import { CheckCircle2, AlertTriangle, XCircle, ArrowLeft, ArrowRight, Sparkles, HelpCircle, Layers } from "lucide-react";
import { AssessmentStage1Data, AssessmentSelfReportStatus, AssessmentConcept } from "../../services/llmService";

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

  const handleSelectAnswer = (status: AssessmentSelfReportStatus) => {
    if (!currentConcept) return;

    const newAnswers = { ...answers, [currentConcept.id]: status };

    // Adaptive pruning: if a level 1 concept is marked gap, auto-set child concepts to gap
    if (status === "gap" && currentConcept.level === 1) {
      data.concepts
        .filter((c) => c.parentId === currentConcept.id)
        .forEach((child) => {
          newAnswers[child.id] = "gap";
        });
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
      <div className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-cyan-700">
              <Sparkles size={12} />
              Phase 1 of 2: Rapid Self-Evaluation
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
              {data.topic}
            </h2>
            <p className="mt-1 text-sm text-slate-500">{data.overview}</p>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-2xl font-black text-cyan-600">
              {currentIndex + 1}
            </span>
            <span className="text-sm font-bold text-slate-400">
              /{visibleConcepts.length}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/90 bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">
            <Layers size={12} />
            {currentConcept.category}
          </span>
          {currentConcept.level > 1 && (
            <span className="text-xs font-semibold text-slate-400">
              Sub-concept (Level {currentConcept.level})
            </span>
          )}
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
            {currentConcept.label}
          </h3>
          <p className="text-sm leading-6 text-slate-600">
            {currentConcept.description}
          </p>

          <div className="rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50/60 to-blue-50/40 p-4">
            <div className="flex items-start gap-3">
              <HelpCircle size={20} className="mt-0.5 shrink-0 text-cyan-600" />
              <div>
                <p className="text-[11px] font-black uppercase tracking-wider text-cyan-800">
                  Diagnostic Question
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  "{currentConcept.question}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Response Buttons */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <button
            type="button"
            onClick={() => handleSelectAnswer("mastered")}
            className={`group flex items-center justify-center gap-2 rounded-2xl border p-4 text-sm font-bold transition-all ${
              answers[currentConcept.id] === "mastered"
                ? "border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/20"
                : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50"
            }`}
          >
            <CheckCircle2 size={18} className="text-emerald-600 transition-transform group-hover:scale-110" />
            <span>I Mastered This</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectAnswer("review")}
            className={`group flex items-center justify-center gap-2 rounded-2xl border p-4 text-sm font-bold transition-all ${
              answers[currentConcept.id] === "review"
                ? "border-amber-500 bg-amber-50 text-amber-800 ring-2 ring-amber-500/20"
                : "border-slate-200 bg-white text-slate-700 hover:border-amber-300 hover:bg-amber-50/50"
            }`}
          >
            <AlertTriangle size={18} className="text-amber-600 transition-transform group-hover:scale-110" />
            <span>Needs Review</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectAnswer("gap")}
            className={`group flex items-center justify-center gap-2 rounded-2xl border p-4 text-sm font-bold transition-all ${
              answers[currentConcept.id] === "gap"
                ? "border-rose-500 bg-rose-50 text-rose-800 ring-2 ring-rose-500/20"
                : "border-slate-200 bg-white text-slate-700 hover:border-rose-300 hover:bg-rose-50/50"
            }`}
          >
            <XCircle size={18} className="text-rose-600 transition-transform group-hover:scale-110" />
            <span>I Don't Know</span>
          </button>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900 disabled:opacity-30"
          >
            <ArrowLeft size={16} />
            Previous
          </button>

          {isComplete || currentIndex === visibleConcepts.length - 1 ? (
            <button
              type="button"
              onClick={handleFinish}
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-700 hover:scale-105 active:scale-95"
            >
              Proceed to Phase 2
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-colors hover:text-cyan-700"
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
