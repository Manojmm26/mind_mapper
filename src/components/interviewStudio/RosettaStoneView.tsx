import React, { useState, useMemo } from "react";
import {
  ROSETTA_STONE_PARADIGMS,
  RosettaParadigm,
} from "../../data/examples/fullStackDotNetAngularMatrix";
import { TechStackProfile, ANGULAR_DOTNET_STACK } from "../../data/techStacks";
import { ParadigmDetailModal } from "./ParadigmDetailModal";
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
  Microscope,
  ShieldAlert,
  HelpCircle,
  Lightbulb,
  ExternalLink,
  BookOpen,
  Maximize2,
} from "lucide-react";

interface RosettaStoneViewProps {
  techStack?: TechStackProfile;
}

export function RosettaStoneView({ techStack = ANGULAR_DOTNET_STACK }: RosettaStoneViewProps) {
  const paradigms = techStack.paradigms || ROSETTA_STONE_PARADIGMS;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(paradigms[0]?.id || "di");
  const [activeSubTab, setActiveSubTab] = useState<Record<string, "nuances" | "physics" | "traps">>({});
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Modal State for Individual Deep Dives
  const [selectedModalParadigm, setSelectedModalParadigm] = useState<RosettaParadigm | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<"angular" | "dotnet" | "bridge">("bridge");

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

  const getSubTab = (id: string) => activeSubTab[id] || "nuances";
  const setSubTab = (id: string, tab: "nuances" | "physics" | "traps") => {
    setActiveSubTab((prev) => ({ ...prev, [id]: tab }));
  };

  const handleOpenModal = (paradigm: RosettaParadigm, tab: "angular" | "dotnet" | "bridge" = "bridge") => {
    setSelectedModalParadigm(paradigm);
    setModalInitialTab(tab);
  };

  const filteredParadigms = useMemo(() => {
    return paradigms.filter((item) => {
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
        item.runtimePhysics.toLowerCase().includes(q) ||
        item.candidateTrap.toLowerCase().includes(q) ||
        item.interviewPunchline.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [paradigms, searchQuery, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-[28px] bg-gradient-to-r from-red-600/90 via-purple-600/90 to-blue-600/90 p-6 text-white shadow-xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
          <Sparkles size={14} className="animate-spin-slow" />
          The Rosetta Stone ({paradigms.length} Strategic Enterprise Paradigms)
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
          {techStack.frontend.name} ↔ {techStack.backend.name} & {techStack.database.name}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90">
          The ultimate cross-framework master blueprint: {paradigms.length} side-by-side paradigms bridging {techStack.frontend.name} with {techStack.backend.name} and {techStack.database.name}. Click on any card for deep dive architecture dossiers!
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-white/80 dark:bg-slate-900/80 p-4 shadow-sm border border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Rosetta Stone Categories">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? paradigms.length
                : paradigms.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-2 min-h-[36px] text-xs font-bold transition-smooth focus:outline-none focus:ring-2 focus:ring-blue-500/50 flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white dark:bg-amber-400 dark:text-slate-950 shadow-md"
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
        <div className="relative min-w-[260px]">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder={`Search ${paradigms.length} paradigms, physics & traps...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 pl-9 pr-4 py-2 min-h-[36px] text-xs font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>
      </div>

      {/* Paradigms List */}
      <div className="space-y-4">
        {filteredParadigms.map((p) => {
          const isExpanded = expandedId === p.id;
          const currentSub = getSubTab(p.id);

          return (
            <div
              key={p.id}
              className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-sm transition-smooth hover:shadow-md overflow-hidden"
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

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(p, "bridge");
                    }}
                    title="Open Full Architecture Dossier Modal"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-purple-100 dark:bg-purple-950/60 hover:bg-purple-200 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 px-3 py-1.5 min-h-[36px] text-xs font-bold transition-smooth shadow-sm"
                  >
                    <Maximize2 size={13} />
                    <span className="hidden sm:inline">Deep Dive Dossier</span>
                  </button>

                  <button
                    type="button"
                    aria-label={isExpanded ? "Collapse paradigm details" : "Expand paradigm details"}
                    className="rounded-full p-2.5 min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
              </div>

              {/* Side-by-Side Symmetrical Body */}
              <div className="p-5 pt-0">
                <div className="mt-4 grid gap-5 lg:grid-cols-2">
                  {/* Frontend Side */}
                  <div className="rounded-2xl border border-red-100 dark:border-red-950/50 bg-gradient-to-b from-red-50/40 to-white dark:from-red-950/20 dark:to-slate-900/40 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-600 dark:text-red-400">
                        <Cpu size={14} />
                        {techStack.frontend.name} Paradigm
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(p, "angular");
                        }}
                        className="text-[11px] font-bold text-red-700 dark:text-red-400 hover:underline flex items-center gap-1"
                      >
                        <span>{techStack.frontend.shortName} Deep Dive</span>
                        <ExternalLink size={11} />
                      </button>
                    </div>

                    <p className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                      {p.angularTitle}
                    </p>

                    {/* Code Snippet */}
                    <div className="mt-3 rounded-xl bg-slate-950 p-3.5 text-slate-100 font-mono text-[11px] leading-relaxed overflow-x-auto shadow-inner relative group">
                      <pre>{p.angularCode}</pre>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(p.angularCode, `${p.id}-ang-code`);
                        }}
                        aria-label={`Copy ${techStack.frontend.name} code snippet`}
                        className="absolute right-2 top-2 rounded-lg bg-white/10 p-2 min-w-[32px] min-h-[32px] flex items-center justify-center text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy Code"
                      >
                        {copiedKey === `${p.id}-ang-code` ? (
                          <Check size={14} className="text-emerald-400" />
                        ) : (
                          <Copy size={14} />
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
                          aria-label={`Copy ${techStack.frontend.name} soundbite`}
                          className="shrink-0 p-2 min-w-[32px] min-h-[32px] flex items-center justify-center text-slate-500 hover:text-red-600 dark:hover:text-red-300"
                          title="Copy Soundbite"
                        >
                          {copiedKey === `${p.id}-ang-sound` ? (
                            <Check size={14} className="text-emerald-500" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Backend Side */}
                  <div className="rounded-2xl border border-blue-100 dark:border-blue-950/50 bg-gradient-to-b from-blue-50/40 to-white dark:from-blue-950/20 dark:to-slate-900/40 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        <Server size={14} />
                        {techStack.backend.name} & {techStack.database.name}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(p, "dotnet");
                        }}
                        className="text-[11px] font-bold text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1"
                      >
                        <span>{techStack.backend.shortName} Deep Dive</span>
                        <ExternalLink size={11} />
                      </button>
                    </div>

                    <p className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                      {p.dotnetTitle}
                    </p>

                    {/* Code Snippet */}
                    <div className="mt-3 rounded-xl bg-slate-950 p-3.5 text-slate-100 font-mono text-[11px] leading-relaxed overflow-x-auto shadow-inner relative group">
                      <pre>{p.dotnetCode}</pre>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(p.dotnetCode, `${p.id}-net-code`);
                        }}
                        aria-label={`Copy ${techStack.backend.name} code snippet`}
                        className="absolute right-2 top-2 rounded-lg bg-white/10 p-2 min-w-[32px] min-h-[32px] flex items-center justify-center text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy Code"
                      >
                        {copiedKey === `${p.id}-net-code` ? (
                          <Check size={14} className="text-emerald-400" />
                        ) : (
                          <Copy size={14} />
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
                          aria-label={`Copy ${techStack.backend.name} soundbite`}
                          className="shrink-0 p-2 min-w-[32px] min-h-[32px] flex items-center justify-center text-slate-500 hover:text-blue-600 dark:hover:text-blue-300"
                          title="Copy Soundbite"
                        >
                          {copiedKey === `${p.id}-net-sound` ? (
                            <Check size={14} className="text-emerald-500" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deep-Dive Multi-Tab Deconstruction Tray */}
                {isExpanded && (
                  <div className="mt-4 rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 border border-slate-200/80 dark:border-slate-800 space-y-3">
                    {/* Sub-Tabs Navigation */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                      <div className="flex items-center gap-1.5" role="tablist">
                        <button
                          onClick={() => setSubTab(p.id, "nuances")}
                          className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-smooth flex items-center gap-1.5 ${
                            currentSub === "nuances"
                              ? "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 shadow-sm"
                              : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                          }`}
                        >
                          <Lightbulb size={13} />
                          <span>Lead Nuances</span>
                        </button>

                        <button
                          onClick={() => setSubTab(p.id, "physics")}
                          className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-smooth flex items-center gap-1.5 ${
                            currentSub === "physics"
                              ? "bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 shadow-sm"
                              : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                          }`}
                        >
                          <Microscope size={13} />
                          <span>🔬 Runtime Physics</span>
                        </button>

                        <button
                          onClick={() => setSubTab(p.id, "traps")}
                          className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-smooth flex items-center gap-1.5 ${
                            currentSub === "traps"
                              ? "bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-300 shadow-sm"
                              : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                          }`}
                        >
                          <ShieldAlert size={13} />
                          <span>🚨 Mid-Level Trap</span>
                        </button>
                      </div>

                      <button
                        onClick={() => handleCopy(p.interviewPunchline, `${p.id}-punchline`)}
                        aria-label="Copy lead interview punchline"
                        className="inline-flex items-center gap-1.5 p-1.5 min-h-[32px] text-xs font-bold text-purple-700 dark:text-purple-400 hover:underline"
                      >
                        {copiedKey === `${p.id}-punchline` ? (
                          <>
                            <Check size={14} className="text-emerald-500" />
                            <span>Copied Punchline!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>Copy 10s Punchline</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Sub-Tab 1: Nuances */}
                    {currentSub === "nuances" && (
                      <div className="space-y-3 text-xs animate-fadeIn">
                        <div className="grid gap-3 sm:grid-cols-2 text-slate-700 dark:text-slate-300">
                          <div className="rounded-xl bg-red-50/50 dark:bg-red-950/20 p-3 border border-red-200/50 dark:border-red-900/30">
                            <strong className="text-red-700 dark:text-red-400 block mb-1">
                              {techStack.frontend.name} Architectural Nuance:
                            </strong>
                            <p>{p.angularNuance}</p>
                          </div>
                          <div className="rounded-xl bg-blue-50/50 dark:bg-blue-950/20 p-3 border border-blue-200/50 dark:border-blue-900/30">
                            <strong className="text-blue-700 dark:text-blue-400 block mb-1">
                              {techStack.backend.name} & {techStack.database.name} Nuance:
                            </strong>
                            <p>{p.dotnetNuance}</p>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200">
                          💡 <strong>Core Architectural Parity:</strong> {p.coreEquivalency}
                        </div>
                      </div>
                    )}

                    {/* Sub-Tab 2: Runtime Physics */}
                    {currentSub === "physics" && (
                      <div className="rounded-xl bg-purple-50/60 dark:bg-purple-950/20 p-4 border border-purple-200/60 dark:border-purple-900/40 text-xs text-slate-800 dark:text-slate-200 leading-relaxed space-y-2 animate-fadeIn">
                        <div className="flex items-center gap-2 font-black uppercase text-[11px] text-purple-700 dark:text-purple-300">
                          <Microscope size={14} />
                          Under-The-Hood Engine Mechanics
                        </div>
                        <p>{p.runtimePhysics}</p>
                      </div>
                    )}

                    {/* Sub-Tab 3: Mid-Level Traps */}
                    {currentSub === "traps" && (
                      <div className="rounded-xl bg-red-50/60 dark:bg-red-950/20 p-4 border border-red-200/60 dark:border-red-900/40 text-xs text-red-950 dark:text-red-200 leading-relaxed space-y-2 animate-fadeIn">
                        <div className="flex items-center gap-2 font-black uppercase text-[11px] text-red-700 dark:text-red-400">
                          <ShieldAlert size={14} />
                          Common Mid-Level Candidate Trap / Disqualifier
                        </div>
                        <p>{p.candidateTrap}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Dive Architecture Dossier Modal */}
      {selectedModalParadigm && (
        <ParadigmDetailModal
          paradigm={selectedModalParadigm}
          techStack={techStack}
          initialFramework={modalInitialTab}
          onClose={() => setSelectedModalParadigm(null)}
          onSelectParadigm={(p) => setSelectedModalParadigm(p)}
        />
      )}
    </div>
  );
}
