import React from "react";
import { BarChart3 } from "lucide-react";
import { WikiStats } from "../../hooks/useWiki";

export interface WikiStatsTabProps {
  stats: WikiStats | null;
  isLoading: boolean;
}

export function WikiStatsTab({ stats, isLoading }: WikiStatsTabProps) {
  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Unknown";
    }
  };

  return (
    <div className="space-y-4">
      {isLoading ? (
        <div className="flex items-center justify-center py-16 text-slate-500 dark:text-slate-400">
          <span className="text-sm font-bold">Loading statistics...</span>
        </div>
      ) : stats ? (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[20px] bg-white dark:bg-slate-800/90 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-white/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 dark:bg-slate-700/80 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300 mb-2">
                Total Pages
              </div>
              <p className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                {stats.totalPages}
              </p>
            </div>
            <div className="rounded-[20px] bg-white dark:bg-slate-800/90 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-white/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 dark:bg-slate-700/80 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300 mb-2">
                Total Nodes
              </div>
              <p className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                {stats.totalNodes}
              </p>
            </div>
            <div className="rounded-[20px] bg-white dark:bg-slate-800/90 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-white/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 dark:bg-slate-700/80 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300 mb-2">
                Total Edges
              </div>
              <p className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                {stats.totalEdges}
              </p>
            </div>
            <div className="rounded-[20px] bg-white dark:bg-slate-800/90 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-white/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 dark:bg-slate-700/80 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300 mb-2">
                Last Updated
              </div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">
                {stats.lastUpdated ? formatDate(stats.lastUpdated) : "Never"}
              </p>
            </div>
          </div>

          {/* Source Breakdown */}
          <div className="rounded-[28px] bg-white dark:bg-slate-800/90 p-5 shadow-sm ring-1 ring-slate-100 dark:ring-white/10">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 dark:bg-slate-700/80 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300 mb-3">
              <BarChart3 size={10} /> Source Breakdown
            </div>
            <div className="space-y-3">
              {Object.entries(stats.sourceTypeBreakdown).map(
                ([type, count]) => (
                  <div
                    key={type}
                    className="flex items-center justify-between rounded-xl bg-slate-50/50 dark:bg-slate-900/60 p-3"
                  >
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 capitalize">
                      {type}
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 dark:bg-cyan-950 text-xs font-black text-cyan-700 dark:text-cyan-300">
                      {count}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/40 py-16 text-slate-500 dark:text-slate-400">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 mb-4">
            <BarChart3 size={24} className="text-slate-400 dark:text-slate-500" />
          </div>
          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
            No statistics available.
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400 text-center max-w-xs">
            Generate or upload mind maps to see your knowledge base grow.
          </p>
        </div>
      )}
    </div>
  );
}
