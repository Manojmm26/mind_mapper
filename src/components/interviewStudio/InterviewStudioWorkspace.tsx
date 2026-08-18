import React, { useState } from "react";
import { RosettaStoneView } from "./RosettaStoneView";
import { ScenarioTeleprompter } from "./ScenarioTeleprompter";
import { SqlTuningCheatDeck } from "./SqlTuningCheatDeck";
import { MockGrillSimulator } from "./MockGrillSimulator";
import { GrillHistoryView } from "./GrillHistoryView";
import { TechStackSwitcher } from "./TechStackSwitcher";
import { CustomTechStackGeneratorModal } from "./CustomTechStackGeneratorModal";
import { ComparisonWorkspace } from "../ComparisonWorkspace";
import {
  TechStackProfile,
  ANGULAR_DOTNET_STACK,
} from "../../data/techStacks";
import {
  Sparkles,
  Layers,
  Scale,
  Mic,
  Database,
  ArrowLeft,
  GraduationCap,
  Award,
  Swords,
  History,
} from "lucide-react";

export type StudioTab = "rosetta" | "teleprompter" | "sql" | "grill" | "history" | "decision";

interface InterviewStudioWorkspaceProps {
  onBackToHome?: () => void;
}

export function InterviewStudioWorkspace({ onBackToHome }: InterviewStudioWorkspaceProps) {
  const [activeTab, setActiveTab] = useState<StudioTab>("rosetta");
  const [currentStack, setCurrentStack] = useState<TechStackProfile>(ANGULAR_DOTNET_STACK);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [selectedScenarioForGrill, setSelectedScenarioForGrill] = useState<string>("threadpool-starvation");

  const handleLaunchGrillFromScenario = (scenarioId?: string) => {
    if (scenarioId) {
      setSelectedScenarioForGrill(scenarioId);
    }
    setActiveTab("grill");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(253,186,116,0.2),transparent_25%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.1),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.1),transparent_25%),linear-gradient(180deg,#0b0f19_0%,#060913_100%)] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Top Navigation Bar */}
        <header className="relative z-40 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 rounded-3xl border border-white/80 dark:border-white/10 bg-white/75 dark:bg-slate-900/80 p-4 sm:p-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between xl:justify-start gap-3">
            <div className="flex items-center gap-3">
              {onBackToHome && (
                <button
                  onClick={onBackToHome}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
                  title="Back"
                >
                  <ArrowLeft size={18} />
                </button>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-purple-700 dark:text-purple-300">
                    <GraduationCap size={12} />
                    Multi-Stack Prep Studio
                  </span>
                  <span className="text-xs font-bold text-slate-400">{currentStack.shortBadge}</span>
                </div>
                <h1 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  Master Full-Stack Interview Studio
                </h1>
              </div>
            </div>

            {/* Tech Stack Switcher */}
            <div className="xl:ml-4">
              <TechStackSwitcher
                currentStack={currentStack}
                onSelectStack={(stack) => setCurrentStack(stack)}
                onOpenCustomStackModal={() => setShowCustomModal(true)}
              />
            </div>
          </div>

          {/* Tab Navigation Switches */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 p-1.5 border border-slate-200/60 dark:border-slate-700/60 overflow-x-auto scrollbar-thin" role="tablist" aria-label="Studio Navigation">
            <button
              onClick={() => setActiveTab("rosetta")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all min-h-[36px] ${
                activeTab === "rosetta"
                  ? "bg-white text-slate-900 dark:bg-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <Sparkles size={14} />
              <span>The Rosetta Stone ({currentStack.paradigms.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("teleprompter")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all min-h-[36px] ${
                activeTab === "teleprompter"
                  ? "bg-white text-slate-900 dark:bg-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <Mic size={14} />
              <span>90s Teleprompter ({currentStack.scenarios.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("sql")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all min-h-[36px] ${
                activeTab === "sql"
                  ? "bg-white text-slate-900 dark:bg-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <Database size={14} />
              <span>{currentStack.database.engine} Tuning ({currentStack.sqlRules.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("grill")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all min-h-[36px] ${
                activeTab === "grill"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
              }`}
            >
              <Swords size={14} />
              <span>⚔️ AI Mock Grill</span>
            </button>

            <button
              onClick={() => setActiveTab("history")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all min-h-[36px] ${
                activeTab === "history"
                  ? "bg-white text-slate-900 dark:bg-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <History size={14} />
              <span>📜 Review Logs</span>
            </button>

            <button
              onClick={() => setActiveTab("decision")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all min-h-[36px] ${
                activeTab === "decision"
                  ? "bg-white text-slate-900 dark:bg-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <Scale size={14} />
              <span>Decision Board</span>
            </button>
          </div>
        </header>

        {/* Tab View Container */}
        <main className="space-y-6">
          {activeTab === "rosetta" && <RosettaStoneView techStack={currentStack} />}

          {activeTab === "teleprompter" && (
            <ScenarioTeleprompter
              techStack={currentStack}
              onLaunchGrill={handleLaunchGrillFromScenario}
            />
          )}

          {activeTab === "sql" && <SqlTuningCheatDeck techStack={currentStack} />}

          {activeTab === "grill" && (
            <MockGrillSimulator
              techStack={currentStack}
              initialScenarioId={selectedScenarioForGrill}
              onNavigateToHistory={() => setActiveTab("history")}
            />
          )}

          {activeTab === "history" && (
            <GrillHistoryView
              onStartNewDrill={() => setActiveTab("grill")}
            />
          )}

          {activeTab === "decision" && (
            <div className="space-y-6">
              <div className="rounded-[28px] bg-gradient-to-r from-emerald-600/90 via-teal-600/90 to-blue-600/90 p-6 text-white shadow-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
                  <Award size={14} />
                  System Architecture Decision Board
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
                  {currentStack.title}
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90">
                  Defend your technology choices, performance profiles, and runtime trade-offs for {currentStack.shortBadge} during senior leadership and system design interviews.
                </p>
              </div>

              <ComparisonWorkspace
                initialData={currentStack.comparisonData}
                allowEditing={false}
              />
            </div>
          )}
        </main>
      </div>

      {/* Custom Stack Generator Modal */}
      {showCustomModal && (
        <CustomTechStackGeneratorModal
          onClose={() => setShowCustomModal(false)}
          onStackGenerated={(newStack) => setCurrentStack(newStack)}
        />
      )}
    </div>
  );
}
