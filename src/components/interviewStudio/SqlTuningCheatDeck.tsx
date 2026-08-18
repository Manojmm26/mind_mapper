import React, { useState } from "react";
import { SQL_PERFORMANCE_RULES, SqlRule } from "../../data/examples/fullStackDotNetAngularMatrix";
import {
  Database,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Zap,
  TrendingUp,
  Sparkles,
  Layers,
} from "lucide-react";

export function SqlTuningCheatDeck() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-[28px] bg-gradient-to-r from-emerald-600/90 via-teal-600/90 to-cyan-600/90 p-6 text-white shadow-xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
          <Database size={14} />
          SQL-to-.NET Performance Tuning Rules
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
          SARGability, Index Seeks & EF Core High-Throughput Rules
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90">
          Essential rules for database query optimization: converting catastrophic table scans into microsecond B-Tree index seeks, eliminating Cartesian explosions, and preventing migration lock contention.
        </p>
      </div>

      {/* Rules Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {SQL_PERFORMANCE_RULES.map((rule) => (
          <div
            key={rule.id}
            className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Title & Badge */}
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-black text-slate-900 dark:text-white">
                  {rule.title}
                </h3>
                <span className="rounded-full bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  SQL Rule
                </span>
              </div>

              {/* Bad Pattern */}
              <div className="rounded-2xl bg-red-50/60 dark:bg-red-950/20 p-3.5 border border-red-200/60 dark:border-red-900/40 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400">
                  <XCircle size={14} />
                  <span>❌ Anti-Pattern (Slow / Risky)</span>
                </div>
                <pre className="font-mono text-[11px] leading-relaxed text-slate-800 dark:text-slate-200 overflow-x-auto">
                  {rule.badPattern}
                </pre>
              </div>

              {/* Optimized Pattern */}
              <div className="rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 p-3.5 border border-emerald-200/60 dark:border-emerald-900/40 space-y-1.5 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={14} />
                    <span>✅ Optimized SARGable / Set-Based Pattern</span>
                  </div>
                  <button
                    onClick={() => handleCopy(rule.optimizedPattern, `${rule.id}-opt`)}
                    className="p-1 rounded-md text-slate-400 hover:text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copy Optimized Pattern"
                  >
                    {copiedKey === `${rule.id}-opt` ? (
                      <Check size={14} className="text-emerald-500" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>
                <pre className="font-mono text-[11px] leading-relaxed text-slate-800 dark:text-slate-200 overflow-x-auto">
                  {rule.optimizedPattern}
                </pre>
              </div>

              {/* Explanation */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {rule.explanation}
              </p>
            </div>

            {/* Production Impact Callout */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300">
              <TrendingUp size={14} className="shrink-0" />
              <span>Impact: {rule.productionImpact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
