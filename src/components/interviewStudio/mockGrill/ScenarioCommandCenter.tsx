import React, { memo, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import {
  Search,
  UserCheck,
  PlusCircle,
  Dices,
  Target,
  Zap,
} from "lucide-react";
import { ScenarioNarrative } from "../../../data/examples/fullStackDotNetAngularMatrix";
import { ScenarioCard } from "./ScenarioCard";

interface ScenarioMastery {
  count: number;
  bestScore: number;
  latestReadiness?: string;
}

interface ScenarioCommandCenterProps {
  archetypes: string[];
  personas: string[];
  allScenarios: ScenarioNarrative[];
  filteredScenarios: ScenarioNarrative[];
  selectedScenarioId: string;
  onSelectScenario: (id: string) => void;
  scenarioMasteryMap: Record<string, ScenarioMastery>;
  scenarioSearchQuery: string;
  onSearchQueryChange: (value: string) => void;
  selectedArchetypeFilter: string;
  onArchetypeFilterChange: (value: string) => void;
  selectedPersona: string;
  onPersonaChange: (value: string) => void;
  onOpenCustomModal: () => void;
  onRandomGauntlet: () => void;
  onDrillWeakest: () => void;
}

function ScenarioCommandCenterImpl({
  archetypes,
  personas,
  allScenarios,
  filteredScenarios,
  selectedScenarioId,
  onSelectScenario,
  scenarioMasteryMap,
  scenarioSearchQuery,
  onSearchQueryChange,
  selectedArchetypeFilter,
  onArchetypeFilterChange,
  selectedPersona,
  onPersonaChange,
  onOpenCustomModal,
  onRandomGauntlet,
  onDrillWeakest,
}: ScenarioCommandCenterProps) {
  const listRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: filteredScenarios.length,
    getScrollElement: () => listRef.current,
    estimateSize: () => 62,
    overscan: 8,
  });

  return (
    <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-sm p-4 space-y-3.5">
      {/* Command Actions Strip */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Scenario Command Center
        </span>
        <button
          onClick={onOpenCustomModal}
          className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-600 dark:text-purple-400 hover:underline"
        >
          <PlusCircle size={13} />
          <span>+ Custom Topic</span>
        </button>
      </div>

      {/* Quick Gauntlet Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={onRandomGauntlet}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 hover:from-purple-500/20 hover:to-indigo-500/20 border border-purple-200/60 dark:border-purple-800/40 p-2.5 min-h-[40px] text-xs font-bold text-purple-700 dark:text-purple-300 transition-smooth shadow-sm"
        >
          <Dices size={14} className="text-purple-600 dark:text-purple-400" />
          <span>🎲 Surprise Me</span>
        </button>
        <button
          onClick={onDrillWeakest}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 border border-amber-200/60 dark:border-amber-800/40 p-2.5 min-h-[40px] text-xs font-bold text-amber-700 dark:text-amber-300 transition-smooth shadow-sm"
        >
          <Target size={14} className="text-amber-600 dark:text-amber-400" />
          <span>🎯 Drill Weakest</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search 18 scenarios & keywords..."
          value={scenarioSearchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 pl-8 pr-3 py-2 min-h-[36px] text-xs font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        />
      </div>

      {/* Archetype Filter Pills */}
      <div className="flex flex-wrap gap-1.5">
        {archetypes.map((arch) => {
          const count =
            arch === "All"
              ? allScenarios.length
              : allScenarios.filter((s) => s.archetype === arch).length;
          return (
            <button
              key={arch}
              onClick={() => onArchetypeFilterChange(arch)}
              className={`rounded-lg px-2.5 py-1 min-h-[28px] text-[10px] font-bold transition-smooth ${
                selectedArchetypeFilter === arch
                  ? "bg-slate-900 text-white dark:bg-purple-600 shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
              }`}
            >
              {arch.split(" ")[0]} ({count})
            </button>
          );
        })}
      </div>

      {/* Interrogator Persona Selector */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
        <label htmlFor="persona-select" className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-1">
          <UserCheck size={12} />
          Interrogator Persona:
        </label>
        <select
          id="persona-select"
          value={selectedPersona}
          onChange={(e) => onPersonaChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-2 min-h-[36px] text-xs font-bold text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        >
          {personas.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Scrollable Virtualized Scenario Cards List */}
      <div
        ref={listRef}
        className="max-h-[380px] overflow-y-auto pr-1 scrollbar-thin pt-1"
      >
        <div style={{ height: rowVirtualizer.getTotalSize(), position: "relative" }}>
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const s = filteredScenarios[virtualRow.index];
            const mastery = scenarioMasteryMap[s.id];
            return (
              <div
                key={s.id}
                data-index={virtualRow.index}
                ref={rowVirtualizer.measureElement}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualRow.start}px)`,
                  paddingBottom: 6,
                }}
              >
                <ScenarioCard
                  scenario={s}
                  isSelected={s.id === selectedScenarioId}
                  mastery={mastery}
                  onSelect={onSelectScenario}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const ScenarioCommandCenter = memo(ScenarioCommandCenterImpl);

interface ActiveIncidentContextProps {
  coreIssue: string;
}

export const ActiveIncidentContext = memo(function ActiveIncidentContext({
  coreIssue,
}: ActiveIncidentContextProps) {
  return (
    <div className="rounded-3xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40 p-4 space-y-2 text-xs text-indigo-950 dark:text-indigo-200">
      <div className="flex items-center gap-2 font-black uppercase text-[11px] text-indigo-700 dark:text-indigo-300">
        <Zap size={14} />
        Active Incident Context
      </div>
      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
        {coreIssue}
      </p>
    </div>
  );
});
