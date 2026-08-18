import React, { useState, useMemo } from "react";
import {
  ROSETTA_STONE_PARADIGMS,
  RosettaParadigm,
} from "../../data/examples/fullStackDotNetAngularMatrix";
import {
  Search,
  Copy,
  Check,
  Code2,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
  Server,
  Zap,
} from "lucide-react";

export function RosettaStoneView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>("di");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const categories = [
    "All",
    "DI & Lifecycles",
    "State & Async",
    "Performance & Optimization",
    "Security & Auth",
    "Database & SQL",
    "Architecture & Testing",
  ];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const filteredParadigms = useMemo(() => {
    return ROSETTA_STONE_PARADIGMS.filter((item) => {
      const matchesCat =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;

      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.angularTitle.toLowerCase().includes(q) ||
        item.dotnetTitle.toLowerCase().includes(q) ||
        item.angularSoundbite.toLowerCase().includes(q) ||
        item.dotnetSoundbite.toLowerCase().includes(q) ||
        item.coreEquivalency.toLowerCase().includes(q) ||
        item.interviewPunchline.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-[28px] bg-gradient-to-r from-red-600/90 via-purple-600/90 to-blue-600/90 p-6 text-white shadow-xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
          <Sparkles size={14} className="animate-spin-slow" />
          The Rosetta Stone (22 Strategic Paradigms)
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
          Angular 18+ ↔ .NET 8/9 & SQL Architectural Parity
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90">
          Side-by-side conceptual mappings, code snippets, and lead-level interview soundbites. Bridges modern Angular frontend reactivity with high-throughput C# 12 / ASP.NET Core backend engineering.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-white/80 dark:bg-slate-900/80 p-4 shadow-sm border border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white dark:bg-amber-400 dark:text-slate-950 shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search 22 paradigms & soundbites..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 pl-9 pr-4 py-2 text-xs font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>
      </div>

      {/* Paradigms List */}
      <div className="space-y-4">
        {filteredParadigms.map((p) => {
          const isExpanded = expandedId === p.id;
          return (
            <div
              key={p.id}
              className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-sm transition-all hover:shadow-md overflow-hidden"
            >
              {/* Card Title Bar */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : p.id)}
                className="flex items-center justify-between p-5 cursor-pointer select-none bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100/50 dark:hover:bg-slate-800/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-blue-500/20 text-blue-600 dark:text-blue-400 font-black text-sm">
                    {p.name.split(".")[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {p.name}
                      </h3>
                      <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                        {p.category}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {p.interviewPunchline}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-full p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              {/* Side-by-Side Symmetrical Body */}
              <div className="p-5 pt-0">
                <div className="mt-4 grid gap-5 lg:grid-cols-2">
                  {/* Angular Side */}
                  <div className="rounded-2xl border border-red-100 dark:border-red-950/50 bg-gradient-to-b from-red-50/40 to-white dark:from-red-950/20 dark:to-slate-900/40 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-600 dark:text-red-400">
                        <Cpu size={14} />
                        Angular 18+ Paradigm
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        {p.angularTitle}
                      </span>
                    </div>

                    {/* Code Snippet */}
                    <div className="mt-3 rounded-xl bg-slate-950 p-3.5 text-slate-100 font-mono text-[11px] leading-relaxed overflow-x-auto shadow-inner relative group">
                      <pre>{p.angularCode}</pre>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(p.angularCode, `${p.id}-ang-code`);
                        }}
                        className="absolute right-2 top-2 rounded-lg bg-white/10 p-1.5 text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy Code"
                      >
                        {copiedKey === `${p.id}-ang-code` ? (
                          <Check size={12} className="text-emerald-400" />
                        ) : (
                          <Copy size={12} />
                        )}
                      </button>
                    </div>

                    {/* Soundbite */}
                    <div className="mt-3 rounded-xl bg-red-100/50 dark:bg-red-950/40 p-3 border border-red-200/50 dark:border-red-800/30">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                          <span className="font-bold text-red-700 dark:text-red-300">Soundbite: </span>
                          "{p.angularSoundbite}"
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(p.angularSoundbite, `${p.id}-ang-sound`);
                          }}
                          className="shrink-0 p-1 text-slate-400 hover:text-red-600 dark:hover:text-red-300"
                          title="Copy Soundbite"
                        >
                          {copiedKey === `${p.id}-ang-sound` ? (
                            <Check size={12} className="text-emerald-500" />
                          ) : (
                            <Copy size={12} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* .NET Side */}
                  <div className="rounded-2xl border border-blue-100 dark:border-blue-950/50 bg-gradient-to-b from-blue-50/40 to-white dark:from-blue-950/20 dark:to-slate-900/40 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        <Server size={14} />
                        .NET 8/9 & SQL Paradigm
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        {p.dotnetTitle}
                      </span>
                    </div>

                    {/* Code Snippet */}
                    <div className="mt-3 rounded-xl bg-slate-950 p-3.5 text-slate-100 font-mono text-[11px] leading-relaxed overflow-x-auto shadow-inner relative group">
                      <pre>{p.dotnetCode}</pre>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(p.dotnetCode, `${p.id}-net-code`);
                        }}
                        className="absolute right-2 top-2 rounded-lg bg-white/10 p-1.5 text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy Code"
                      >
                        {copiedKey === `${p.id}-net-code` ? (
                          <Check size={12} className="text-emerald-400" />
                        ) : (
                          <Copy size={12} />
                        )}
                      </button>
                    </div>

                    {/* Soundbite */}
                    <div className="mt-3 rounded-xl bg-blue-100/50 dark:bg-blue-950/40 p-3 border border-blue-200/50 dark:border-blue-800/30">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                          <span className="font-bold text-blue-700 dark:text-blue-300">Soundbite: </span>
                          "{p.dotnetSoundbite}"
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(p.dotnetSoundbite, `${p.id}-net-sound`);
                          }}
                          className="shrink-0 p-1 text-slate-400 hover:text-blue-600 dark:hover:text-blue-300"
                          title="Copy Soundbite"
                        >
                          {copiedKey === `${p.id}-net-sound` ? (
                            <Check size={12} className="text-emerald-500" />
                          ) : (
                            <Copy size={12} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deep-Dive Expandable Tray */}
                {isExpanded && (
                  <div className="mt-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 p-4 border border-amber-200/60 dark:border-amber-900/40 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300">
                      <Zap size={14} />
                      Lead Architectural Equivalency & Caveats
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 text-xs text-slate-700 dark:text-slate-300">
                      <div>
                        <span className="font-bold text-red-600 dark:text-red-400">Angular Nuance: </span>
                        {p.angularNuance}
                      </div>
                      <div>
                        <span className="font-bold text-blue-600 dark:text-blue-400">.NET / SQL Nuance: </span>
                        {p.dotnetNuance}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-amber-200/50 dark:border-amber-800/30 flex items-center justify-between text-xs font-bold text-amber-950 dark:text-amber-200">
                      <span>💡 Core Concept: {p.coreEquivalency}</span>
                      <button
                        onClick={() => handleCopy(p.interviewPunchline, `${p.id}-punchline`)}
                        className="inline-flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 hover:underline"
                      >
                        {copiedKey === `${p.id}-punchline` ? (
                          <>
                            <Check size={12} className="text-emerald-500" />
                            <span>Copied Punchline!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Copy Punchline</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
