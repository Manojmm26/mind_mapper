import { useMemo } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Sparkles,
  Map,
  Rocket,
  Award,
  BarChart3,
  Layers,
  Zap,
  RefreshCw,
  Download,
} from "lucide-react";
import {
  AssessmentStage1Data,
  AssessmentStage2Data,
  AssessmentSelfReportStatus,
} from "../../services/llmService";

interface DiagnosticReportViewProps {
  stage1Data: AssessmentStage1Data;
  stage2Data: AssessmentStage2Data | null;
  selfReportAnswers: Record<string, AssessmentSelfReportStatus>;
  mcqAnswers: Record<string, number>;
  onViewMap: () => void;
  onGenerateRoadmap: () => void;
  onStartReassessment?: () => void;
  onStartFlashcards?: () => void;
  onExportReport?: () => void;
}

export function DiagnosticReportView({
  stage1Data,
  stage2Data,
  selfReportAnswers,
  mcqAnswers,
  onViewMap,
  onGenerateRoadmap,
  onStartReassessment,
  onStartFlashcards,
  onExportReport,
}: DiagnosticReportViewProps) {
  // Calculate Scores & Categorization
  const metrics = useMemo(() => {
    let masteredCount = 0;
    let reviewCount = 0;
    let gapCount = 0;

    const categoryMap: Record<
      string,
      { total: number; mastered: number; review: number; gap: number }
    > = {};

    stage1Data.concepts.forEach((concept) => {
      const cat = concept.category || "General";
      if (!categoryMap[cat]) {
        categoryMap[cat] = { total: 0, mastered: 0, review: 0, gap: 0 };
      }
      categoryMap[cat].total += 1;

      const selfAns = selfReportAnswers[concept.id];
      let status: "mastered" | "review" | "gap" = "gap";

      if (selfAns === "mastered") {
        status = "mastered";
      } else if (selfAns === "review") {
        status = "review";
      } else {
        status = "gap";
      }

      // Check MCQ answer
      const mcq = stage2Data?.mcqs.find((m) => m.conceptId === concept.id);
      if (mcq && mcqAnswers[mcq.id] !== undefined) {
        if (mcqAnswers[mcq.id] === mcq.correctIndex) {
          status = "mastered";
        } else {
          status = "review";
        }
      }

      if (status === "mastered") {
        masteredCount += 1;
        categoryMap[cat].mastered += 1;
      } else if (status === "review") {
        reviewCount += 1;
        categoryMap[cat].review += 1;
      } else {
        gapCount += 1;
        categoryMap[cat].gap += 1;
      }
    });

    const totalConcepts = stage1Data.concepts.length;
    const scorePercent = Math.round(
      ((masteredCount * 1.0 + reviewCount * 0.5) / totalConcepts) * 100,
    );

    return {
      scorePercent,
      masteredCount,
      reviewCount,
      gapCount,
      totalConcepts,
      categoryMap,
    };
  }, [stage1Data, stage2Data, selfReportAnswers, mcqAnswers]);

  return (
    <div className="mx-auto max-w-5xl space-y-8 p-2 sm:p-4">
      {/* Overview Score Card */}
      <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-6 text-white shadow-2xl sm:p-8">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-cyan-300 backdrop-blur-md">
              <Award size={14} />
              Diagnostic Evaluation Report
            </div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              {stage1Data.topic}
            </h2>
            <p className="max-w-xl text-sm leading-6 text-slate-300">
              {stage1Data.overview}
            </p>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/15 px-3 py-1.5 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                <CheckCircle2 size={14} />
                {metrics.masteredCount} Mastered
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500/15 px-3 py-1.5 text-xs font-bold text-amber-300 border border-amber-500/30">
                <AlertTriangle size={14} />
                {metrics.reviewCount} Needs Review
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-rose-500/15 px-3 py-1.5 text-xs font-bold text-rose-300 border border-rose-500/30">
                <XCircle size={14} />
                {metrics.gapCount} Knowledge Gaps
              </span>
            </div>
          </div>

          {/* Big Score Ring / Badge */}
          <div className="flex shrink-0 items-center justify-center rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
            <div className="text-center">
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-300">
                Overall Knowledge Index
              </p>
              <div className="mt-2 flex items-baseline justify-center">
                <span className="text-5xl font-black text-cyan-400">
                  {metrics.scorePercent}
                </span>
                <span className="text-2xl font-bold text-slate-400">%</span>
              </div>
              <p className="mt-1 text-xs font-semibold text-slate-300">
                {metrics.scorePercent >= 80
                  ? "🌟 Advanced Mastery"
                  : metrics.scorePercent >= 50
                  ? "👍 Solid Foundation"
                  : "🚀 High Growth Potential"}
              </p>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="relative z-10 mt-8 flex flex-wrap gap-4 border-t border-white/10 pt-6">
          <button
            type="button"
            onClick={onViewMap}
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-lg transition-all hover:bg-slate-100 hover:scale-105 active:scale-95"
          >
            <Map size={18} className="text-cyan-600" />
            Explore Color-Coded Map
          </button>

          <button
            type="button"
            onClick={onGenerateRoadmap}
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Rocket size={18} />
            Generate Tailored Action Plan
          </button>

          {onStartFlashcards && (
            <button
              type="button"
              onClick={onStartFlashcards}
              className="inline-flex items-center gap-2 rounded-2xl bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-purple-700 hover:scale-105 active:scale-95"
            >
              <Zap size={18} />
              Practice Flashcards
            </button>
          )}

          {onStartReassessment && (
            <button
              type="button"
              onClick={onStartReassessment}
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300 bg-cyan-50 px-5 py-3 text-sm font-bold text-cyan-800 shadow-sm transition-all hover:bg-cyan-100 hover:scale-105 active:scale-95"
            >
              <RefreshCw size={18} />
              Re-Assess Knowledge
            </button>
          )}

          {onExportReport && (
            <button
              type="button"
              onClick={onExportReport}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:scale-105 active:scale-95"
            >
              <Download size={18} />
              Export Report
            </button>
          )}
        </div>
      </section>

      {/* Category Mastery Breakdown */}
      <section className="rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <BarChart3 size={18} className="text-cyan-600" />
          <h3 className="text-lg font-black tracking-tight text-slate-900">
            Pillar & Category Performance
          </h3>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(metrics.categoryMap).map(([categoryName, cat]) => {
            const catPercent = Math.round(
              ((cat.mastered * 1.0 + cat.review * 0.5) / cat.total) * 100,
            );
            return (
              <div
                key={categoryName}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 transition-all hover:border-cyan-300 hover:bg-white"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-slate-600">
                    <Layers size={12} />
                    {categoryName}
                  </span>
                  <span className="text-sm font-black text-slate-900">
                    {catPercent}%
                  </span>
                </div>

                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300"
                    style={{ width: `${catPercent}%` }}
                  />
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span className="text-emerald-700">{cat.mastered} Mastered</span>
                  <span className="text-amber-700">{cat.review} Review</span>
                  <span className="text-rose-700">{cat.gap} Gaps</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Concept Diagnostic Checklist */}
      <section className="rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl">
        <h3 className="text-lg font-black tracking-tight text-slate-900">
          Detailed Diagnostic Breakdown
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          Review your self-evaluation and verification results per concept.
        </p>

        <div className="mt-6 space-y-3 max-h-[440px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
          {stage1Data.concepts.map((concept) => {
            const selfAns = selfReportAnswers[concept.id];
            let status: "mastered" | "review" | "gap" = "gap";

            if (selfAns === "mastered") status = "mastered";
            else if (selfAns === "review") status = "review";

            const mcq = stage2Data?.mcqs.find((m) => m.conceptId === concept.id);
            if (mcq && mcqAnswers[mcq.id] !== undefined) {
              if (mcqAnswers[mcq.id] === mcq.correctIndex) status = "mastered";
              else status = "review";
            }

            return (
              <div
                key={concept.id}
                className={`flex flex-col gap-3 rounded-2xl border p-4 transition-all sm:flex-row sm:items-center sm:justify-between ${
                  status === "mastered"
                    ? "border-emerald-200 bg-emerald-50/40"
                    : status === "review"
                    ? "border-amber-200 bg-amber-50/40"
                    : "border-rose-200 bg-rose-50/40"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                      {concept.category}
                    </span>
                  </div>
                  <h4 className="mt-1 text-sm font-bold text-slate-900">
                    {concept.label}
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-600">
                    {concept.description}
                  </p>
                </div>

                <div className="shrink-0">
                  {status === "mastered" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      <CheckCircle2 size={14} />
                      Mastered
                    </span>
                  )}
                  {status === "review" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                      <AlertTriangle size={14} />
                      Needs Review
                    </span>
                  )}
                  {status === "gap" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-800">
                      <XCircle size={14} />
                      Knowledge Gap
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
