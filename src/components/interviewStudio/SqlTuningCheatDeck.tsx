import React, { useState, useMemo } from "react";
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
  Search,
  Lock,
  Cpu,
  Boxes,
  Flame,
} from "lucide-react";

import { TechStackProfile, ANGULAR_DOTNET_STACK } from "../../data/techStacks";

interface SqlTuningCheatDeckProps {
  techStack?: TechStackProfile;
}

export function SqlTuningCheatDeck({ techStack = ANGULAR_DOTNET_STACK }: SqlTuningCheatDeckProps) {
  const rules = techStack.sqlRules || SQL_PERFORMANCE_RULES;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const categories = [
    "All",
    "Indexing & SARGability",
    "Concurrency & Locking",
    "Query Engine & Plan Cache",
    "High-Throughput & Ingestion",
    "EF Core & Dapper Integration",
  ];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const filteredRules = useMemo(() => {
    return rules.filter((rule) => {
      const matchesCategory =
        selectedCategory === "All" || rule.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        rule.title.toLowerCase().includes(q) ||
        rule.badPattern.toLowerCase().includes(q) ||
        rule.optimizedPattern.toLowerCase().includes(q) ||
        rule.explanation.toLowerCase().includes(q) ||
        rule.productionImpact.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [rules, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-[28px] bg-gradient-to-r from-emerald-600/90 via-teal-600/90 to-cyan-600/90 p-6 text-white shadow-xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
          <Database size={14} />
          {techStack.database.engine} Tuning Rules ({rules.length}{" "}
          Enterprise Standards)
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
          Indexing, Concurrency & Query Engine Mastery
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90">
          Master the complete {techStack.database.name} performance playbook: access-path selection, lock and concurrency control, plan-level diagnostics, and high-throughput ingestion patterns.
        </p>
      </div>

      {/* Category Pills & Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-white/80 dark:bg-slate-900/80 p-4 shadow-sm border border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="SQL Tuning Categories">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? rules.length
                : rules.filter((r) => r.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-2 min-h-[36px] text-xs font-bold transition-smooth focus:outline-none focus:ring-2 focus:ring-emerald-500/50 flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-black ${
                    selectedCategory === cat
                      ? "bg-white/20 text-white dark:bg-slate-950/30 dark:text-slate-950"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search 20 SQL rules & anti-patterns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 pl-9 pr-4 py-2 min-h-[36px] text-xs font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          />
        </div>
      </div>

      {/* Rules Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredRules.map((rule) => (
          <div
            key={rule.id}
            className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 p-5 shadow-sm hover:shadow-md transition-smooth flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Title & Badge */}
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-black text-slate-900 dark:text-white">
                  {rule.title}
                </h3>
                <span className="rounded-full bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-emerald-700 dark:text-emerald-300 shrink-0">
                  {rule.category.split(" ")[0]}
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
                    <span>✅ Optimized Production Pattern</span>
                  </div>
                  <button
                    onClick={() => handleCopy(rule.optimizedPattern, `${rule.id}-opt`)}
                    aria-label={`Copy optimized code for ${rule.title}`}
                    className="p-2 min-w-[32px] min-h-[32px] flex items-center justify-center rounded-lg text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
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
