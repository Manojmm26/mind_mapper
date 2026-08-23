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
    .reduce<Array<{ criterion: ComparisonCriterion; score: CriterionScore | undefined }>>((acc, c) => {
      const score = scores[c.id];
      if (parseRating(score?.rating) > 0) {
        acc.push({ criterion: c, score });
      }
      return acc;
    }, [])
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
  const metadata = option.metadata;

  return (
    <article
      className={`group relative flex w-full min-w-[300px] max-w-[380px] shrink-0 snap-center flex-col justify-between rounded-[28px] border p-6 transition-smooth duration-300 ${
        isRecommended
          ? "border-amber-200 dark:border-amber-500/40 bg-gradient-to-b from-amber-50/50 via-white to-white dark:from-amber-950/30 dark:via-slate-900 dark:to-slate-900 shadow-[0_16px_50px_rgba(245,158,11,0.12)] ring-1 ring-amber-200/60 dark:ring-amber-500/30"
          : "border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.04)] hover:border-slate-300 dark:hover:border-white/20 hover:shadow-lg"
      }`}
    >
      {/* Recommended Pill */}
      {isRecommended && (
        <div className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-md shadow-amber-500/25">
          <BadgeCheck size={13} />
          Top Pick
        </div>
      )}

      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Option #{index + 1}
              </span>
              {metadata?.priceBand && (
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[9px] font-bold text-slate-500 dark:text-slate-400">
                  {metadata.priceBand}
                </span>
              )}
            </div>
            <h4 className="mt-1 text-xl font-black tracking-tight text-slate-950 dark:text-white">
              {option.name}
            </h4>
          </div>
        </div>

        {/* Summary */}
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {option.summary}
        </p>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-300"
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
            <div className="h-px flex-1 bg-slate-100 dark:bg-white/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              {domainScoreLabels[domainType]}
            </span>
            <div className="h-px flex-1 bg-slate-100 dark:bg-white/10" />
          </div>
          <div className="grid gap-3">
            {topScores.map(({ criterion, score }) => (
              <div
                key={criterion.id}
                className="flex flex-col rounded-2xl bg-slate-50 dark:bg-slate-800/80 p-4 ring-1 ring-slate-100/50 dark:ring-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
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
                <p className="mt-1.5 text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {score.displayValue}
                </p>
                {score.note && (
                  <p className="mt-1 text-[11px] leading-snug text-slate-500 dark:text-slate-400">
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
                  ? "bg-emerald-50/60 dark:bg-emerald-950/40 ring-emerald-100/50 dark:ring-emerald-800/40"
                  : h.variant === "caution"
                    ? "bg-amber-50/60 dark:bg-amber-950/40 ring-amber-100/50 dark:ring-amber-800/40"
                    : "bg-slate-50/60 dark:bg-slate-800/60 ring-slate-100/50 dark:ring-white/10"
              }`}
            >
              <div
                className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] ${
                  h.variant === "positive"
                    ? "text-emerald-700 dark:text-emerald-300"
                    : h.variant === "caution"
                      ? "text-amber-700 dark:text-amber-300"
                      : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {h.variant === "positive" ? <BadgeCheck size={14} /> : null}
                {h.label}
              </div>
              <p
                className={`mt-1.5 text-sm font-semibold leading-snug ${
                  h.variant === "positive"
                    ? "text-emerald-900 dark:text-emerald-200"
                    : h.variant === "caution"
                      ? "text-amber-900 dark:text-amber-200"
                      : "text-slate-700 dark:text-slate-200"
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
        <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-slate-100 dark:border-white/10">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[11px] font-bold tracking-wide transition-smooth active:scale-95 ${getActionClasses(action.variant)}`}
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
