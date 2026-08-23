import React, { useState, useEffect, useRef } from "react";
import {
  SCENARIO_NARRATIVES,
  ScenarioNarrative,
} from "../../data/examples/fullStackDotNetAngularMatrix";
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Volume2,
  AlertTriangle,
  Compass,
  Copy,
  Check,
  Clock,
  Target,
  Flame,
  ShieldAlert,
  ChevronRight,
  BookOpen,
  Swords,
} from "lucide-react";

import { TechStackProfile, ANGULAR_DOTNET_STACK } from "../../data/techStacks";

interface ScenarioTeleprompterProps {
  techStack?: TechStackProfile;
  onLaunchGrill?: (scenarioId: string) => void;
}

export function ScenarioTeleprompter({
  techStack = ANGULAR_DOTNET_STACK,
  onLaunchGrill,
}: ScenarioTeleprompterProps) {
  const scenarios = techStack.scenarios || SCENARIO_NARRATIVES;
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(
    scenarios[0]?.id || "threadpool-starvation"
  );
  const [activeTab, setActiveTab] = useState<"script" | "anchor" | "bait" | "traps">("script");
  const [selectedArchetype, setSelectedArchetype] = useState<string>("All");

  // Reset selected scenario when stack changes
  useEffect(() => {
    if (scenarios.length > 0) {
      setSelectedScenarioId(scenarios[0].id);
    }
  }, [techStack]);

  // Timer State
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const archetypes = [
    "All",
    "Production Outages & War Stories",
    "Strategic Steering & Baiting",
    "Architectural Trade-Offs & System Design",
    "Full-Stack Angular ↔ .NET Integration",
    "Counter-Grill & Architecture Deflectors",
  ];

  const currentScenario =
    scenarios.find((s) => s.id === selectedScenarioId) ||
    scenarios[0] ||
    SCENARIO_NARRATIVES[0];

  // Timer Effect
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const handleResetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const filteredScenarios = SCENARIO_NARRATIVES.filter(
    (s) => selectedArchetype === "All" || s.archetype === selectedArchetype
  );

  const wordCount = currentScenario.fullScript.trim().split(/\s+/).length;
  const estimatedWpm = seconds > 0 ? Math.round((wordCount / (seconds / 60))) : 0;

  // Target time: 90 seconds
  const progressPercent = Math.min(100, (seconds / 90) * 100);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-[28px] bg-gradient-to-r from-amber-500/90 via-orange-600/90 to-red-600/90 p-6 text-white shadow-xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
          <Flame size={14} className="animate-pulse" />
          The 18 Scenario-Based Architectural Narratives
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
          90-Second Delivery Teleprompter & Pacing Coach
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90">
          Rehearse high-impact war stories, conversation steering, and counter-grilling strategies. Maintain disciplined 90-second delivery to project effortless lead-level competence.
        </p>
      </div>

      {/* Main Studio Grid */}
      <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        {/* Left: Scenario Selector */}
        <div className="space-y-4">
          {/* Archetype Filter */}
          <div className="rounded-2xl bg-white/80 dark:bg-slate-900/80 p-3 shadow-sm border border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
            <label htmlFor="archetype-select" className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
              Filter by Archetype
            </label>
            <select
              id="archetype-select"
              value={selectedArchetype}
              onChange={(e) => setSelectedArchetype(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-2.5 min-h-[40px] text-xs font-bold text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              {archetypes.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          {/* Scenario List */}
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-sm p-3 max-h-[560px] overflow-y-auto space-y-1.5 scrollbar-thin">
            {filteredScenarios.map((s) => {
              const isSelected = s.id === selectedScenarioId;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setSelectedScenarioId(s.id);
                    handleResetTimer();
                  }}
                  className={`w-full text-left rounded-2xl p-3 min-h-[48px] transition-smooth flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                    isSelected
                      ? "bg-amber-500 text-white shadow-md font-bold"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <div className="pr-2">
                    <p className="text-xs font-bold line-clamp-1">{s.title}</p>
                    <span
                      className={`text-[10px] uppercase font-semibold ${
                        isSelected ? "text-white/80" : "text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      {s.archetype.split(" ")[0]}
                    </span>
                  </div>
                  <ChevronRight size={14} className="shrink-0 opacity-60" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Teleprompter & Deconstruct Workspace */}
        <div className="space-y-4">
          {/* Active Scenario Banner */}
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-sm p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-amber-100 dark:bg-amber-950/60 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300">
                    {currentScenario.archetype}
                  </span>
                  {onLaunchGrill && (
                    <button
                      onClick={() => onLaunchGrill(currentScenario.id)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-[11px] font-black shadow-sm transition-smooth"
                    >
                      <Swords size={12} />
                      <span>Simulate AI Grill</span>
                    </button>
                  )}
                </div>
                <h3 className="mt-2 text-xl font-black text-slate-900 dark:text-white">
                  {currentScenario.title}
                </h3>
              </div>

              {/* Interactive 90s Timer Console */}
              <div className="flex items-center gap-3 rounded-2xl bg-slate-900 p-3 text-white shadow-lg shrink-0">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-amber-400" />
                  <span
                    className={`font-mono text-xl font-black ${
                      seconds > 90
                        ? "text-red-400 animate-pulse"
                        : seconds > 75
                        ? "text-amber-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {Math.floor(seconds / 60)}:
                    {(seconds % 60).toString().padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold">/ 1:30</span>
                </div>

                <div className="flex items-center gap-1.5 border-l border-white/20 pl-3">
                  <button
                    onClick={() => setIsRunning(!isRunning)}
                    aria-label={isRunning ? "Pause rehearsal timer" : "Start rehearsal timer"}
                    className="rounded-xl bg-white/20 p-2.5 min-w-[36px] min-h-[36px] flex items-center justify-center hover:bg-white/30 text-white transition-colors"
                    title={isRunning ? "Pause" : "Start"}
                  >
                    {isRunning ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <button
                    onClick={handleResetTimer}
                    aria-label="Reset rehearsal timer"
                    className="rounded-xl bg-white/10 p-2.5 min-w-[36px] min-h-[36px] flex items-center justify-center hover:bg-white/20 text-slate-300 transition-colors"
                    title="Reset Timer"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Pacing Progress Bar */}
            <div className="space-y-1">
              <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className={`h-full transition-[width] duration-300 ${
                    seconds > 90
                      ? "bg-red-500"
                      : seconds > 75
                      ? "bg-amber-500"
                      : "bg-emerald-500"
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-bold text-slate-400">
                <span>0s (Hook)</span>
                <span>45s (Root Cause & Fix)</span>
                <span>90s (Telemetry & Close)</span>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap border-b border-slate-100 dark:border-slate-800 gap-2 pt-2" role="tablist">
              <button
                onClick={() => setActiveTab("script")}
                className={`pb-2.5 px-3 min-h-[36px] text-xs font-bold transition-smooth border-b-2 flex items-center gap-1.5 ${
                  activeTab === "script"
                    ? "border-amber-500 text-amber-600 dark:text-amber-400"
                    : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                <Volume2 size={14} />
                Full Script (Teleprompter)
              </button>
              <button
                onClick={() => setActiveTab("anchor")}
                className={`pb-2.5 px-3 min-h-[36px] text-xs font-bold transition-smooth border-b-2 flex items-center gap-1.5 ${
                  activeTab === "anchor"
                    ? "border-amber-500 text-amber-600 dark:text-amber-400"
                    : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                <Target size={14} />
                10s Confidence Anchor
              </button>
              <button
                onClick={() => setActiveTab("bait")}
                className={`pb-2.5 px-3 min-h-[36px] text-xs font-bold transition-smooth border-b-2 flex items-center gap-1.5 ${
                  activeTab === "bait"
                    ? "border-amber-500 text-amber-600 dark:text-amber-400"
                    : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                <Compass size={14} />
                Steering Bait
              </button>
              <button
                onClick={() => setActiveTab("traps")}
                className={`pb-2.5 px-3 min-h-[36px] text-xs font-bold transition-smooth border-b-2 flex items-center gap-1.5 ${
                  activeTab === "traps"
                    ? "border-amber-500 text-amber-600 dark:text-amber-400"
                    : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                <AlertTriangle size={14} />
                Red Flag Pitfalls
              </button>
            </div>

            {/* Tab Contents */}
            <div className="pt-2">
              {/* Teleprompter Script */}
              {activeTab === "script" && (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-50/80 dark:bg-slate-950/80 p-5 border border-slate-200/60 dark:border-slate-800/80 shadow-inner">
                    <div className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-medium space-y-4 whitespace-pre-line">
                      {currentScenario.fullScript}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-4">
                      <span>📊 Word count: <strong>{wordCount} words</strong></span>
                      {seconds > 0 && <span>⚡ Pacing: <strong>{estimatedWpm} WPM</strong></span>}
                      <span>🎯 Target: <strong>140-160 WPM (90s delivery)</strong></span>
                    </div>

                    <button
                      onClick={() => handleCopy(currentScenario.fullScript, "script-copy")}
                      aria-label="Copy full spoken script"
                      className="inline-flex items-center gap-1.5 p-2 min-h-[36px] font-bold text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      {copiedKey === "script-copy" ? (
                        <>
                          <Check size={14} className="text-emerald-500" />
                          <span>Copied Script!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy Teleprompter Script</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* 10s Confidence Anchor */}
              {activeTab === "anchor" && (
                <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 border border-amber-300/60 dark:border-amber-700/40 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                      <Target size={16} />
                      10-Second Opening Punch
                    </span>
                    <button
                      onClick={() => handleCopy(currentScenario.tenSecondAnchor, "anchor-copy")}
                      aria-label="Copy 10-second opening anchor"
                      className="inline-flex items-center gap-1 rounded-xl bg-white dark:bg-slate-800 px-3.5 py-2 min-h-[36px] text-xs font-bold text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50"
                    >
                      {copiedKey === "anchor-copy" ? (
                        <Check size={14} className="text-emerald-500" />
                      ) : (
                        <Copy size={14} />
                      )}
                      <span>Copy</span>
                    </button>
                  </div>
                  <p className="text-lg font-bold leading-snug text-slate-900 dark:text-white">
                    "{currentScenario.tenSecondAnchor}"
                  </p>
                  <div className="rounded-xl bg-white/80 dark:bg-slate-800/80 p-3 text-xs text-slate-600 dark:text-slate-300">
                    <strong>💡 Why this works:</strong> It immediately frames the scale, the failure symptom, the root cause, and the exact metric without rambling.
                  </div>
                </div>
              )}

              {/* Steering Bait */}
              {activeTab === "bait" && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-500">
                    Drop these calculated phrases at the end of your answer to guide the interviewer into your strongest technical depths:
                  </p>
                  {currentScenario.steeringBait.map((bait, idx) => (
                    <div
                      key={bait}
                      className="rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 p-4 border border-blue-200/60 dark:border-blue-900/40 flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black">
                          {idx + 1}
                        </div>
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                          "{bait}"
                        </p>
                      </div>
                      <button
                        onClick={() => handleCopy(bait, `bait-${idx}`)}
                        aria-label={`Copy steering bait phrase ${idx + 1}`}
                        className="shrink-0 p-2 min-w-[32px] min-h-[32px] flex items-center justify-center text-slate-400 hover:text-blue-600"
                        title="Copy Bait"
                      >
                        {copiedKey === `bait-${idx}` ? (
                          <Check size={14} className="text-emerald-500" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Red Flag Pitfalls */}
              {activeTab === "traps" && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-500">
                    Avoid these common junior/mid-level mistakes that raise red flags with senior interviewers:
                  </p>
                  {currentScenario.redFlagPitfalls.map((trap, idx) => (
                    <div
                      key={trap}
                      className="rounded-2xl bg-red-50/60 dark:bg-red-950/30 p-4 border border-red-200/60 dark:border-red-900/40 flex items-start gap-3"
                    >
                      <ShieldAlert size={18} className="text-red-600 shrink-0 mt-0.5" />
                      <p className="text-xs font-semibold text-red-950 dark:text-red-200 leading-relaxed">
                        {trap}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
