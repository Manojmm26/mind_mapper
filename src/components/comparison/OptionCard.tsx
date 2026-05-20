import { ExternalLink, BadgeCheck, Tag } from "lucide-react";
import {
  ComparisonOption,
  ComparisonCriterion,
  CriterionScore,
  ComparisonDomain,
} from "../../services/llmService";
import {
  getRatingColor,
  getActionClasses,
} from "../../utils/comparisonHelpers";

const domainScoreLabels: Record<ComparisonDomain, string> = {
  products: "Top specs",
  tools: "Key capabilities",
  services: "Service highlights",
  approaches: "Key strengths",
  strategies: "Strategic advantages",
  concepts: "Core insights",
};

const domainSummaryLabels: Record<ComparisonDomain, string> = {
  products: "Best for",
  tools: "Ideal use case",
  services: "Best fit",
  approaches: "When to use",
  strategies: "Best scenario",
  concepts: "Key takeaway",
};

interface OptionCardProps {
  key?: string;
  option: ComparisonOption;
  criteria: ComparisonCriterion[];
  index: number;
  isRecommended?: boolean;
  domainType: ComparisonDomain;
}

function parseRating(rating: unknown): number {
  if (typeof rating === "number") return rating;
  if (typeof rating === "string") return parseInt(rating, 10) || 0;
  return 0;
}

function getTopScores(
  scores: Record<string, CriterionScore>,
  criteria: ComparisonCriterion[],
  limit = 3,
) {
  const scored = criteria
    .map((c) => ({ criterion: c, score: scores[c.id] }))
    .filter((x) => parseRating(x.score?.rating) > 0)
    .sort(
      (a, b) => parseRating(b.score!.rating) - parseRating(a.score!.rating),
    );

  return scored.slice(0, limit);
}

function getDomainHighlights(
  metadata: Record<string, string> | undefined,
  domainType: ComparisonDomain,
) {
  if (!metadata) return [];
  const highlights: {
    label: string;
    value: string;
    variant: "positive" | "caution" | "neutral";
  }[] = [];

  // Domain-specific priority fields
  const summaryKey =
    domainType === "products"
      ? "bestFor"
      : domainType === "tools"
        ? "idealUseCase"
        : domainType === "services"
          ? "bestFit"
          : domainType === "approaches"
            ? "whenToUse"
            : domainType === "strategies"
              ? "bestScenario"
              : "keyTakeaway";
  const cautionKey =
    domainType === "products"
      ? "considerations"
      : domainType === "tools"
        ? "limitations"
        : domainType === "services"
          ? "tradeoffs"
          : domainType === "approaches"
            ? "tradeoffs"
            : domainType === "strategies"
              ? "risks"
              : "limitations";

  const summaryVal = metadata[summaryKey];
  if (summaryVal) {
    highlights.push({
      label: domainSummaryLabels[domainType],
      value: summaryVal,
      variant: "positive",
    });
  }

  const cautionVal = metadata[cautionKey];
  if (cautionVal) {
    highlights.push({
      label:
        domainType === "products"
          ? "Consider"
          : domainType === "tools"
            ? "Limitations"
            : domainType === "services"
              ? "Tradeoffs"
              : domainType === "approaches"
                ? "Tradeoffs"
                : domainType === "strategies"
                  ? "Risks"
                  : "Limitations",
      value: cautionVal,
      variant: "caution",
    });
  }

  // Price band only for products
  if (domainType === "products" && metadata.priceBand) {
    highlights.unshift({
      label: "Price",
      value: metadata.priceBand,
      variant: "neutral",
    });
  }

  return highlights;
}

export function OptionCard({
  option,
  criteria,
  index,
  isRecommended,
  domainType,
}: OptionCardProps) {
  const topScores = getTopScores(option.scores, criteria);
  const highlights = getDomainHighlights(option.metadata, domainType);
  const tags = option.tags ?? [];
  const actions = option.actions ?? [];

  return (
    <article className="group relative flex min-w-[320px] md:min-w-[380px] shrink-0 snap-start flex-col rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all hover:border-cyan-200 hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
      {isRecommended && (
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-emerald-500/20">
            <BadgeCheck size={12} />
            Recommended
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            Option {index + 1}
          </div>
          {domainType === "products" && option.metadata?.priceBand && (
            <div className="shrink-0 rounded-xl bg-cyan-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-700">
              {option.metadata.priceBand}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h4 className="text-2xl font-black tracking-tight text-slate-950 leading-[1.15]">
            {option.name}
          </h4>
          <p className="text-sm leading-relaxed text-slate-600">
            {option.summary}
          </p>
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Top Scores */}
      {topScores.length > 0 && (
        <div className="mt-6">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-px flex-1 bg-slate-100" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {domainScoreLabels[domainType]}
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
          <div className="grid gap-3">
            {topScores.map(({ criterion, score }) => (
              <div
                key={criterion.id}
                className="flex flex-col rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    {criterion.label}
                  </span>
                  <span
                    className={`text-xs font-black ${getRatingColor(parseRating(score.rating))}`}
                  >
                    {(() => {
                      const r = parseRating(score.rating);
                      return (
                        <>
                          {"★".repeat(Math.min(r, 5))}
                          {"☆".repeat(Math.max(0, 5 - r))}
                        </>
                      );
                    })()}
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-semibold text-slate-800">
                  {score.displayValue}
                </p>
                {score.note && (
                  <p className="mt-1 text-[11px] leading-snug text-slate-500">
                    {score.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Domain-specific highlights */}
      {highlights.length > 0 && (
        <div className="mt-6 grid gap-3">
          {highlights.map((h) => (
            <div
              key={h.label}
              className={`flex flex-col rounded-2xl p-4 ring-1 ${
                h.variant === "positive"
                  ? "bg-emerald-50/60 ring-emerald-100/50"
                  : h.variant === "caution"
                    ? "bg-amber-50/60 ring-amber-100/50"
                    : "bg-slate-50/60 ring-slate-100/50"
              }`}
            >
              <div
                className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] ${
                  h.variant === "positive"
                    ? "text-emerald-700"
                    : h.variant === "caution"
                      ? "text-amber-700"
                      : "text-slate-500"
                }`}
              >
                {h.variant === "positive" ? <BadgeCheck size={14} /> : null}
                {h.label}
              </div>
              <p
                className={`mt-1.5 text-sm font-semibold leading-snug ${
                  h.variant === "positive"
                    ? "text-emerald-900"
                    : h.variant === "caution"
                      ? "text-amber-900"
                      : "text-slate-700"
                }`}
              >
                {h.value}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      {actions.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-slate-100">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[11px] font-bold tracking-wide transition-all active:scale-95 ${getActionClasses(action.variant)}`}
            >
              {action.label}
              <ExternalLink size={12} className="opacity-40" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
