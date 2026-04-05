import React from "react";
import { ShieldCheck, X, AlertTriangle, Info, RefreshCw } from "lucide-react";
import { LintReport } from "../../services/wikiLint";

export interface WikiHealthCheckTabProps {
  lintReport: LintReport | null;
  isLoading: boolean;
  onRunLint: () => void;
}

export function WikiHealthCheckTab({
  lintReport,
  isLoading,
  onRunLint,
}: WikiHealthCheckTabProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-600";
    if (score >= 50) return "text-amber-600";
    return "text-red-600";
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "error":
        return <X size={16} className="text-red-500" />;
      case "warning":
        return <AlertTriangle size={16} className="text-amber-500" />;
      default:
        return <Info size={16} className="text-cyan-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-16 text-slate-500">
          <RefreshCw size={24} className="mb-3 animate-spin text-slate-400" />
          <span className="text-sm font-bold">Running health check...</span>
        </div>
      ) : !lintReport ? (
        <div className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-slate-200 bg-slate-50/50 py-16 text-slate-500">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 mb-4">
            <ShieldCheck size={24} className="text-slate-400" />
          </div>
          <p className="text-sm font-bold text-slate-700">
            No health check run yet.
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500 text-center max-w-xs mb-4">
            Scan your knowledge base for broken links, stale content, and
            structural issues.
          </p>
          <button
            onClick={onRunLint}
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-cyan-700 hover:shadow-md active:scale-[0.98]"
          >
            <ShieldCheck size={16} />
            Run Health Check
          </button>
        </div>
      ) : (
        <>
          {/* Score Card */}
          <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">
                  <ShieldCheck size={10} /> Health Score
                </div>
                <p
                  className={`text-3xl font-black tracking-tight ${getScoreColor(lintReport.summary.healthScore)}`}
                >
                  {lintReport.summary.healthScore}%
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col items-center gap-1">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-50 text-red-500">
                    <X size={16} />
                  </span>
                  <span className="text-[10px] font-black text-slate-500">
                    {lintReport.summary.errors}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                    <AlertTriangle size={16} />
                  </span>
                  <span className="text-[10px] font-black text-slate-500">
                    {lintReport.summary.warnings}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                    <Info size={16} />
                  </span>
                  <span className="text-[10px] font-black text-slate-500">
                    {lintReport.summary.info}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Issues List */}
          <div className="space-y-3">
            {lintReport.issues.map((issue, i) => (
              <div
                key={i}
                className="group rounded-[20px] border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-4 shadow-sm transition-all hover:border-cyan-200 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-100">
                    {getSeverityIcon(issue.severity)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900">
                      {issue.message}
                    </p>
                    {issue.suggestion && (
                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        {issue.suggestion}
                      </p>
                    )}
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-500">
                      Page: {issue.pageId}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onRunLint}
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:shadow-md active:scale-[0.98]"
          >
            <RefreshCw size={14} />
            Re-run Health Check
          </button>
        </>
      )}
    </div>
  );
}
