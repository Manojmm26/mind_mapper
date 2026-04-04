import { useState } from "react";
import {
  Lightbulb,
  Scale,
  Compass,
  BadgeCheck,
  ArrowRight,
  Table2,
  LayoutGrid,
} from "lucide-react";
import {
  ComparisonWorkspaceData,
  ComparisonDomain,
} from "../services/llmService";
import { normalizeComparisonData } from "../utils/comparisonHelpers";
import { ComparisonMatrix } from "./comparison/ComparisonMatrix";
import { OptionCard } from "./comparison/OptionCard";

interface ComparisonWorkspaceProps {
  data: ComparisonWorkspaceData;
}

type ComparisonView = "cards" | "matrix";

export function ComparisonWorkspace({ data }: ComparisonWorkspaceProps) {
  const [view, setView] = useState<ComparisonView>("cards");
  const normalized = normalizeComparisonData(data);
  const { criteria, options } = normalized;

  // Determine the highest-rated option for the "Recommended" badge
  const recommendedOptionId = (() => {
    let bestId: string | undefined;
    let bestAvg = -1;
    for (const opt of options) {
      const ratings = criteria
        .map((c) => opt.scores[c.id]?.rating ?? 0)
        .filter((r) => r > 0);
      if (ratings.length === 0) continue;
      const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
      if (avg > bestAvg) {
        bestAvg = avg;
        bestId = opt.id;
      }
    }
    return bestId;
  })();

  return (
    <div className="workspace-surface h-full overflow-y-auto rounded-[32px] border border-white/50 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        {/* Decision Board Header */}
        <section className="grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)]">
          <div className="rounded-[28px] bg-[linear-gradient(135deg,rgba(10,132,255,0.92),rgba(94,92,230,0.8))] p-6 text-white shadow-[0_24px_60px_rgba(37,99,235,0.28)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-white/90">
              <Scale size={12} />
              Decision Board
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight">
              {normalized.topic
                ? `Compare: ${normalized.topic}`
                : "Compare before you commit"}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85">
              {normalized.overview}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/12 px-4 py-4 backdrop-blur-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/70">
                  Options
                </p>
                <p className="mt-2 text-2xl font-black">{options.length}</p>
              </div>
              <div className="rounded-2xl bg-white/12 px-4 py-4 backdrop-blur-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/70">
                  Criteria
                </p>
                <p className="mt-2 text-2xl font-black">{criteria.length}</p>
              </div>
              <div className="rounded-2xl bg-white/12 px-4 py-4 backdrop-blur-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/70">
                  Next steps
                </p>
                <p className="mt-2 text-2xl font-black">
                  {normalized.nextSteps.length}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-amber-100 bg-[linear-gradient(180deg,rgba(255,251,235,0.98),rgba(255,255,255,0.95))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-amber-700">
              <BadgeCheck size={12} />
              Recommended approach
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {normalized.recommendedApproach}
            </p>

            <div className="mt-6 space-y-3">
              {normalized.nextSteps.slice(0, 3).map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-xs font-black text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Decision Criteria */}
        {criteria.length > 0 && (
          <section className="rounded-[28px] border border-white/60 bg-white/88 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] md:p-6">
            <div className="flex items-center gap-2 text-sm font-black text-slate-950">
              <Lightbulb size={16} className="text-cyan-600" />
              Decision criteria
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Key dimensions to weigh when evaluating your options.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {criteria.map((criterion) => (
                <div
                  key={criterion.id}
                  className="group rounded-[20px] border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white px-4 py-4 transition-all hover:border-cyan-200 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-600">
                      {criterion.label}
                    </p>
                    {criterion.weight && (
                      <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-500">
                        w{criterion.weight}
                      </span>
                    )}
                  </div>
                  {criterion.description && (
                    <p className="mt-1.5 text-xs leading-5 text-slate-500 line-clamp-2">
                      {criterion.description}
                    </p>
                  )}
                  {criterion.unit && (
                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {criterion.unit}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* View Toggle + Options Header */}
        {options.length > 0 && criteria.length > 0 && (
          <section className="rounded-[28px] border border-white/60 bg-white/88 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] md:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-black tracking-tight text-slate-950">
                  {view === "matrix"
                    ? "Side-by-side comparison"
                    : "Matched options"}
                </h3>
                <p className="mt-0.5 text-sm text-slate-500">
                  {view === "matrix"
                    ? "Compare every option against each criterion at a glance."
                    : "Browse summaries, tradeoffs, and follow-up links for each option."}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {options.length} results
                </span>
                <div className="inline-flex rounded-xl bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => setView("cards")}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all ${
                      view === "cards"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <LayoutGrid size={14} />
                    Cards
                  </button>
                  <button
                    type="button"
                    onClick={() => setView("matrix")}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all ${
                      view === "matrix"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <Table2 size={14} />
                    Matrix
                  </button>
                </div>
              </div>
            </div>

            {/* Options Content */}
            <div className="mt-5">
              {view === "matrix" ? (
                <ComparisonMatrix data={normalized} />
              ) : (
                <div className="relative">
                  {/* Scroll fade edges */}
                  <div className="pointer-events-none absolute -left-2 top-0 bottom-0 w-6 bg-gradient-to-r from-white/88 to-transparent z-10 rounded-l-[28px]" />
                  <div className="pointer-events-none absolute -right-2 top-0 bottom-0 w-6 bg-gradient-to-l from-white/88 to-transparent z-10 rounded-r-[28px]" />
                  <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-2 px-2">
                    {options.map((option, index) => (
                      <OptionCard
                        key={option.id}
                        option={option}
                        criteria={criteria}
                        index={index}
                        isRecommended={option.id === recommendedOptionId}
                        domainType={normalized.domainType as ComparisonDomain}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Action Lane */}
        {normalized.nextSteps.length > 0 && (
          <section className="rounded-[28px] border border-indigo-100/60 bg-gradient-to-br from-indigo-50/60 to-white/90 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:p-6">
            <div className="flex items-center gap-2 text-sm font-black text-slate-950">
              <Compass size={16} className="text-indigo-600" />
              Action lane
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Concrete steps to move forward after reviewing your options.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {normalized.nextSteps.map((step, index) => (
                <div
                  key={step}
                  className="group flex items-start gap-3 rounded-[20px] border border-indigo-100/50 bg-white/80 px-4 py-4 transition-all hover:border-indigo-200 hover:shadow-sm"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-black text-white shadow-sm">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
