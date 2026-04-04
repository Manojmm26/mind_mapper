import {
  Star,
  Package,
  Wrench,
  LifeBuoy,
  GitBranch,
  Target,
  Lightbulb,
} from "lucide-react";
import {
  ComparisonWorkspaceData,
  ComparisonDomain,
} from "../../services/llmService";
import { getMatrixCellBg, getRatingColor } from "../../utils/comparisonHelpers";

const domainIcons: Record<ComparisonDomain, typeof Star> = {
  products: Package,
  tools: Wrench,
  services: LifeBuoy,
  approaches: GitBranch,
  strategies: Target,
  concepts: Lightbulb,
};

const domainLabels: Record<ComparisonDomain, string> = {
  products: "Product Comparison",
  tools: "Tool Comparison",
  services: "Service Comparison",
  approaches: "Approach Comparison",
  strategies: "Strategy Comparison",
  concepts: "Concept Comparison",
};

interface ComparisonMatrixProps {
  data: ComparisonWorkspaceData;
}

export function ComparisonMatrix({ data }: ComparisonMatrixProps) {
  const { criteria, options, domainType } = data;
  const DomainIcon = domainIcons[domainType] ?? Star;
  const domainLabel = domainLabels[domainType] ?? "Comparison";

  if (criteria.length === 0 || options.length === 0) {
    return null;
  }

  const summaryLabel =
    domainType === "products"
      ? "Best for"
      : domainType === "tools"
        ? "Ideal use case"
        : domainType === "services"
          ? "Best fit"
          : domainType === "approaches"
            ? "When to use"
            : domainType === "strategies"
              ? "Best scenario"
              : "Key takeaway";

  return (
    <div className="rounded-[28px] border border-slate-200/80 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] overflow-hidden">
      <div className="px-5 py-4 md:px-6 md:py-5 border-b border-slate-100">
        <div className="flex items-center gap-2 text-sm font-black text-slate-950">
          <DomainIcon size={16} className="text-amber-500" />
          {domainLabel}
        </div>
        <p className="mt-0.5 text-sm text-slate-500">
          Side-by-side breakdown of each option against key decision criteria.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="sticky left-0 z-20 bg-slate-50 p-4 text-left text-[11px] font-black uppercase tracking-[0.16em] text-slate-500 border-b border-r border-slate-300 min-w-[180px]">
                Criterion
              </th>
              {options.map((option) => (
                <th
                  key={option.id}
                  className="p-4 text-center border-b border-slate-200 min-w-[200px] max-w-[240px]"
                >
                  <div className="text-sm font-black text-slate-900 leading-tight break-words">
                    {option.name}
                  </div>
                  {domainType === "products" && option.metadata?.priceBand && (
                    <div className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {option.metadata.priceBand}
                    </div>
                  )}
                  {option.tags && option.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                      {option.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-semibold text-slate-500 whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion, idx) => (
              <tr
                key={criterion.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}
              >
                <td
                  className="sticky left-0 z-10 p-4 border-b border-r border-slate-300 bg-white transition-colors"
                  style={
                    idx % 2 !== 0
                      ? { backgroundColor: "rgb(248 250 252 / 0.4)" }
                      : {}
                  }
                >
                  <div className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-700">
                    {criterion.label}
                  </div>
                  {criterion.description && (
                    <div className="mt-1 text-[11px] text-slate-500 leading-snug line-clamp-2">
                      {criterion.description}
                    </div>
                  )}
                </td>
                {options.map((option) => {
                  const score = option.scores[criterion.id];
                  const bgClass = getMatrixCellBg(score?.rating);
                  const ratingColor = getRatingColor(score?.rating);

                  return (
                    <td
                      key={`${option.id}-${criterion.id}`}
                      className={`p-4 border-b border-slate-100 text-center ${bgClass} transition-colors hover:brightness-95`}
                    >
                      <div className="text-sm font-bold text-slate-800">
                        {score?.displayValue || (
                          <span className="text-slate-300">—</span>
                        )}
                      </div>
                      {score?.rating && (
                        <div
                          className={`mt-1.5 flex items-center justify-center gap-0.5 ${ratingColor}`}
                        >
                          {(() => {
                            const r =
                              typeof score.rating === "number"
                                ? score.rating
                                : parseInt(String(score.rating), 10) || 0;
                            return Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={10}
                                fill={i < r ? "currentColor" : "none"}
                                className={i < r ? "opacity-100" : "opacity-20"}
                              />
                            ));
                          })()}
                        </div>
                      )}
                      {score?.note && (
                        <div className="mt-1.5 text-[10px] text-slate-500 leading-snug line-clamp-2">
                          {score.note}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
            {/* Domain-specific summary row */}
            <tr className="bg-emerald-50/60">
              <td className="sticky left-0 z-10 p-4 border-r border-slate-300 bg-emerald-50/60">
                <div className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-700 flex items-center gap-1.5">
                  <Star size={12} className="text-emerald-500" />
                  {summaryLabel}
                </div>
              </td>
              {options.map((option) => (
                <td
                  key={`summary-${option.id}`}
                  className="p-4 border-b border-slate-100 text-center bg-emerald-50/70"
                >
                  <div className="text-xs font-bold text-emerald-900 leading-snug break-words">
                    {option.metadata?.bestFor ||
                      option.metadata?.idealUseCase ||
                      option.metadata?.whenToUse ||
                      "—"}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
