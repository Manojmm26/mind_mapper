import React, { useState, useEffect } from "react";
import {
  RosettaParadigm,
  ROSETTA_STONE_PARADIGMS,
} from "../../data/examples/fullStackDotNetAngularMatrix";
import {
  X,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Cpu,
  Server,
  Microscope,
  ShieldAlert,
  Lightbulb,
  BookOpen,
  HelpCircle,
  AlertTriangle,
  Layers,
  ArrowRight,
  Award,
  CheckCircle2,
  AlertOctagon,
  Target,
  FileCode2,
} from "lucide-react";

import { TechStackProfile, ANGULAR_DOTNET_STACK } from "../../data/techStacks";

interface ParadigmDetailModalProps {
  paradigm: RosettaParadigm;
  techStack?: TechStackProfile;
  initialFramework?: "angular" | "dotnet" | "bridge";
  onClose: () => void;
  onSelectParadigm: (paradigm: RosettaParadigm) => void;
}

export function ParadigmDetailModal({
  paradigm,
  techStack = ANGULAR_DOTNET_STACK,
  initialFramework = "bridge",
  onClose,
  onSelectParadigm,
}: ParadigmDetailModalProps) {
  const paradigms = techStack.paradigms || ROSETTA_STONE_PARADIGMS;
  const [activeTab, setActiveTab] = useState<"angular" | "dotnet" | "bridge">(
    initialFramework
  );
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Find index for Prev / Next navigation
  const currentIndex = paradigms.findIndex(
    (p) => p.id === paradigm.id
  );
  const prevParadigm =
    currentIndex > 0
      ? paradigms[currentIndex - 1]
      : paradigms[paradigms.length - 1];
  const nextParadigm =
    currentIndex < paradigms.length - 1
      ? paradigms[currentIndex + 1]
      : paradigms[0];

  // Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        if (prevParadigm) onSelectParadigm(prevParadigm);
      } else if (e.key === "ArrowRight") {
        if (nextParadigm) onSelectParadigm(nextParadigm);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevParadigm, nextParadigm, onClose, onSelectParadigm]);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const angDossier = paradigm.angularDossier;
  const netDossier = paradigm.dotnetDossier;

  return (
    <div
      id="paradigm-detail-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 sm:p-6 backdrop-blur-sm animate-fadeIn"
    >
      <div className="flex h-full max-h-[92vh] w-full max-w-5xl flex-col rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
        {/* Top Navigation & Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 p-4 sm:p-5 bg-slate-50/70 dark:bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white font-black text-xs shadow-md">
              {currentIndex + 1}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  {paradigm.name}
                </h3>
                <span className="rounded-full bg-purple-100 dark:bg-purple-950/70 px-2.5 py-0.5 text-[10px] font-black uppercase text-purple-700 dark:text-purple-300">
                  {paradigm.category}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Paradigm {currentIndex + 1} of {paradigms.length} • {techStack.shortBadge}
              </p>
            </div>
          </div>

          {/* Prev / Next & Close Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectParadigm(prevParadigm)}
              title="Previous Paradigm (Left Arrow)"
              className="inline-flex items-center gap-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 min-h-[36px] text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
            >
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">Prev</span>
            </button>
            <button
              onClick={() => onSelectParadigm(nextParadigm)}
              title="Next Paradigm (Right Arrow)"
              className="inline-flex items-center gap-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 min-h-[36px] text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={16} />
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="rounded-xl p-2 min-h-[36px] min-w-[36px] flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Framework Selector Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-2.5 bg-white dark:bg-slate-900 overflow-x-auto scrollbar-thin">
          <button
            onClick={() => setActiveTab("bridge")}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 min-h-[36px] text-xs font-black transition-all shrink-0 ${
              activeTab === "bridge"
                ? "bg-slate-900 text-white dark:bg-purple-600 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <Sparkles size={14} />
            <span>🌐 Cross-Framework Bridge</span>
          </button>

          <button
            onClick={() => setActiveTab("angular")}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 min-h-[36px] text-xs font-black transition-all shrink-0 ${
              activeTab === "angular"
                ? "bg-red-600 text-white shadow-sm"
                : "text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40"
            }`}
          >
            <Cpu size={14} />
            <span>{techStack.frontend.name} Architecture Dossier</span>
          </button>

          <button
            onClick={() => setActiveTab("dotnet")}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 min-h-[36px] text-xs font-black transition-all shrink-0 ${
              activeTab === "dotnet"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40"
            }`}
          >
            <Server size={14} />
            <span>{techStack.backend.name} Architecture Dossier</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-thin">
          {/* TAB 1: CROSS-FRAMEWORK BRIDGE */}
          {activeTab === "bridge" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Lead Punchline Box */}
              <div className="rounded-2xl bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 p-4 sm:p-5 border border-purple-200/80 dark:border-purple-800/40 flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-1">
                    <Award size={13} />
                    10-Second Lead Interview Punchline:
                  </span>
                  <p className="mt-1 text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                    "{paradigm.interviewPunchline}"
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(paradigm.interviewPunchline, "modal-punchline")}
                  className="shrink-0 p-2 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 rounded-lg transition-all"
                  title="Copy Punchline"
                >
                  {copiedKey === "modal-punchline" ? (
                    <Check size={16} className="text-emerald-500" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Symmetrical Split Cards */}
              <div className="grid gap-5 lg:grid-cols-2">
                {/* Angular Card */}
                <div className="rounded-2xl border border-red-200/80 dark:border-red-900/50 bg-red-50/30 dark:bg-red-950/20 p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-red-600 dark:text-red-400 flex items-center gap-1.5">
                      <Cpu size={14} /> Angular 18+ Paradigm
                    </span>
                    <button
                      onClick={() => setActiveTab("angular")}
                      className="text-[11px] font-bold text-red-700 dark:text-red-400 hover:underline flex items-center gap-0.5"
                    >
                      <span>Full Architecture Dossier</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {paradigm.angularTitle}
                  </h4>
                  <div className="rounded-xl bg-slate-950 p-3.5 text-slate-100 font-mono text-[11px] leading-relaxed overflow-x-auto shadow-inner relative group">
                    <pre>{paradigm.angularCode}</pre>
                  </div>
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="text-red-700 dark:text-red-300">Soundbite:</strong> "{paradigm.angularSoundbite}"
                  </p>
                </div>

                {/* .NET Card */}
                <div className="rounded-2xl border border-blue-200/80 dark:border-blue-900/50 bg-blue-50/30 dark:bg-blue-950/20 p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <Server size={14} /> .NET 8/9 & SQL Paradigm
                    </span>
                    <button
                      onClick={() => setActiveTab("dotnet")}
                      className="text-[11px] font-bold text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-0.5"
                    >
                      <span>Full Architecture Dossier</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {paradigm.dotnetTitle}
                  </h4>
                  <div className="rounded-xl bg-slate-950 p-3.5 text-slate-100 font-mono text-[11px] leading-relaxed overflow-x-auto shadow-inner relative group">
                    <pre>{paradigm.dotnetCode}</pre>
                  </div>
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="text-blue-700 dark:text-blue-300">Soundbite:</strong> "{paradigm.dotnetSoundbite}"
                  </p>
                </div>
              </div>

              {/* Runtime Physics & Trap */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 p-4 sm:p-5 border border-purple-200/60 dark:border-purple-900/40 text-xs text-slate-800 dark:text-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-black uppercase text-[11px] text-purple-700 dark:text-purple-300">
                    <Microscope size={14} />
                    Under-The-Hood Runtime Physics (V8 vs CLR / SQL)
                  </div>
                  <p className="leading-relaxed font-medium">{paradigm.runtimePhysics}</p>
                </div>

                <div className="rounded-2xl bg-red-50/60 dark:bg-red-950/20 p-4 sm:p-5 border border-red-200/60 dark:border-red-900/40 text-xs text-red-950 dark:text-red-200 space-y-2">
                  <div className="flex items-center gap-2 font-black uppercase text-[11px] text-red-700 dark:text-red-400">
                    <ShieldAlert size={14} />
                    Mid-Level Candidate Trap / Disqualifier
                  </div>
                  <p className="leading-relaxed font-medium">{paradigm.candidateTrap}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ANGULAR 18+ ARCHITECTURE DOSSIER */}
          {activeTab === "angular" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Architecture Overview */}
              <div className="rounded-2xl bg-red-50/60 dark:bg-red-950/20 p-5 sm:p-6 border border-red-200/80 dark:border-red-900/50 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-700 dark:text-red-400">
                  <Cpu size={16} />
                  {angDossier?.conceptTitle || paradigm.angularTitle}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
                  {angDossier?.architectureOverview || paradigm.angularNuance}
                </p>
                {angDossier?.underTheHoodMechanics && (
                  <div className="pt-2 border-t border-red-200/50 dark:border-red-900/30 text-xs text-slate-700 dark:text-slate-300">
                    <strong className="text-red-700 dark:text-red-300">🔬 V8 Engine Mechanics: </strong>
                    {angDossier.underTheHoodMechanics}
                  </div>
                )}
              </div>

              {/* Code Blueprint */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <FileCode2 size={14} className="text-red-500" /> Production Code Blueprint
                  </span>
                  <button
                    onClick={() => handleCopy(paradigm.angularCode, "ang-deep-code")}
                    className="inline-flex items-center gap-1 text-xs font-bold text-red-600 dark:text-red-400 hover:underline"
                  >
                    {copiedKey === "ang-deep-code" ? <Check size={14} /> : <Copy size={14} />}
                    <span>Copy Code</span>
                  </button>
                </div>
                <div className="rounded-2xl bg-slate-950 p-4 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner">
                  <pre>{paradigm.angularCode}</pre>
                </div>
                {angDossier?.codeExplanation && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    {angDossier.codeExplanation}
                  </p>
                )}
              </div>

              {/* 5 Production Best Practices */}
              {angDossier?.productionBestPractices && (
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-5 border border-slate-200 dark:border-slate-800 space-y-3">
                  <h5 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    5 Enterprise Production Best Practices & Rules:
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {angDossier.productionBestPractices.map((bp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-black mt-0.5">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Senior / Principal Interview Probes */}
              {angDossier?.seniorInterviewProbes && (
                <div className="space-y-3">
                  <h5 className="text-xs font-black uppercase tracking-wider text-purple-700 dark:text-purple-400 flex items-center gap-1.5">
                    <Target size={15} />
                    Senior / Principal Interview Probes & Model Answers:
                  </h5>
                  <div className="space-y-3">
                    {angDossier.seniorInterviewProbes.map((probe, i) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 p-4 border border-purple-200/60 dark:border-purple-900/40 space-y-2 text-xs"
                      >
                        <div className="font-bold text-slate-900 dark:text-white flex items-start gap-1.5">
                          <span className="text-purple-600 font-black">Q{i + 1}:</span>
                          <span>"{probe.interviewerQuestion}"</span>
                        </div>
                        <div className="rounded-xl bg-white/80 dark:bg-slate-900/80 p-3 border border-purple-100 dark:border-purple-900/30 space-y-1">
                          <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400">
                            Model Lead Answer:
                          </span>
                          <p className="italic text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                            {probe.modelLeadAnswer}
                          </p>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          <strong>Why Interviewers Probe This:</strong> {probe.whyThisMatters}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Critical Pitfalls & Anti-Patterns */}
              {angDossier?.criticalPitfallsAndAntiPatterns && (
                <div className="rounded-2xl bg-red-50/60 dark:bg-red-950/20 p-5 border border-red-200/80 dark:border-red-900/40 space-y-3 text-xs">
                  <h5 className="font-black uppercase tracking-wider text-red-700 dark:text-red-400 flex items-center gap-1.5">
                    <AlertOctagon size={15} />
                    Critical Anti-Patterns & Production Remediation:
                  </h5>
                  <div className="space-y-3">
                    {angDossier.criticalPitfallsAndAntiPatterns.map((pitfall, i) => (
                      <div key={i} className="rounded-xl bg-white/70 dark:bg-slate-900/70 p-3.5 space-y-1.5 border border-red-100 dark:border-red-900/30">
                        <strong className="text-red-700 dark:text-red-400 block font-bold">
                          ⚠️ Anti-Pattern: {pitfall.antiPattern}
                        </strong>
                        <p className="text-slate-700 dark:text-slate-300">
                          <strong>Consequence:</strong> {pitfall.consequence}
                        </p>
                        <p className="text-emerald-700 dark:text-emerald-400">
                          <strong>Remediation:</strong> {pitfall.remediation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: .NET 8/9 & SQL ARCHITECTURE DOSSIER */}
          {activeTab === "dotnet" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Architecture Overview */}
              <div className="rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 p-5 sm:p-6 border border-blue-200/80 dark:border-blue-900/50 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-700 dark:text-blue-400">
                  <Server size={16} />
                  {netDossier?.conceptTitle || paradigm.dotnetTitle}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
                  {netDossier?.architectureOverview || paradigm.dotnetNuance}
                </p>
                {netDossier?.underTheHoodMechanics && (
                  <div className="pt-2 border-t border-blue-200/50 dark:border-blue-900/30 text-xs text-slate-700 dark:text-slate-300">
                    <strong className="text-blue-700 dark:text-blue-300">🔬 CLR & SQL Engine Mechanics: </strong>
                    {netDossier.underTheHoodMechanics}
                  </div>
                )}
              </div>

              {/* Code Blueprint */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <FileCode2 size={14} className="text-blue-500" /> Production Code Blueprint
                  </span>
                  <button
                    onClick={() => handleCopy(paradigm.dotnetCode, "dotnet-deep-code")}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {copiedKey === "dotnet-deep-code" ? <Check size={14} /> : <Copy size={14} />}
                    <span>Copy Code</span>
                  </button>
                </div>
                <div className="rounded-2xl bg-slate-950 p-4 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner">
                  <pre>{paradigm.dotnetCode}</pre>
                </div>
                {netDossier?.codeExplanation && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    {netDossier.codeExplanation}
                  </p>
                )}
              </div>

              {/* 5 Production Best Practices */}
              {netDossier?.productionBestPractices && (
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-5 border border-slate-200 dark:border-slate-800 space-y-3">
                  <h5 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    5 Enterprise Production Best Practices & Rules:
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {netDossier.productionBestPractices.map((bp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-black mt-0.5">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Senior / Principal Interview Probes */}
              {netDossier?.seniorInterviewProbes && (
                <div className="space-y-3">
                  <h5 className="text-xs font-black uppercase tracking-wider text-purple-700 dark:text-purple-400 flex items-center gap-1.5">
                    <Target size={15} />
                    Senior / Principal Interview Probes & Model Answers:
                  </h5>
                  <div className="space-y-3">
                    {netDossier.seniorInterviewProbes.map((probe, i) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 p-4 border border-purple-200/60 dark:border-purple-900/40 space-y-2 text-xs"
                      >
                        <div className="font-bold text-slate-900 dark:text-white flex items-start gap-1.5">
                          <span className="text-purple-600 font-black">Q{i + 1}:</span>
                          <span>"{probe.interviewerQuestion}"</span>
                        </div>
                        <div className="rounded-xl bg-white/80 dark:bg-slate-900/80 p-3 border border-purple-100 dark:border-purple-900/30 space-y-1">
                          <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400">
                            Model Lead Answer:
                          </span>
                          <p className="italic text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                            {probe.modelLeadAnswer}
                          </p>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          <strong>Why Interviewers Probe This:</strong> {probe.whyThisMatters}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Critical Pitfalls & Anti-Patterns */}
              {netDossier?.criticalPitfallsAndAntiPatterns && (
                <div className="rounded-2xl bg-red-50/60 dark:bg-red-950/20 p-5 border border-red-200/80 dark:border-red-900/40 space-y-3 text-xs">
                  <h5 className="font-black uppercase tracking-wider text-red-700 dark:text-red-400 flex items-center gap-1.5">
                    <AlertOctagon size={15} />
                    Critical Anti-Patterns & Production Remediation:
                  </h5>
                  <div className="space-y-3">
                    {netDossier.criticalPitfallsAndAntiPatterns.map((pitfall, i) => (
                      <div key={i} className="rounded-xl bg-white/70 dark:bg-slate-900/70 p-3.5 space-y-1.5 border border-red-100 dark:border-red-900/30">
                        <strong className="text-red-700 dark:text-red-400 block font-bold">
                          ⚠️ Anti-Pattern: {pitfall.antiPattern}
                        </strong>
                        <p className="text-slate-700 dark:text-slate-300">
                          <strong>Consequence:</strong> {pitfall.consequence}
                        </p>
                        <p className="text-emerald-700 dark:text-emerald-400">
                          <strong>Remediation:</strong> {pitfall.remediation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
