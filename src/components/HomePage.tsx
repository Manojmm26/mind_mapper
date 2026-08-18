import React, { Suspense, lazy } from "react";
import {
  BrainCircuit,
  FileJson,
  GraduationCap,
  Loader2,
  Scale,
  Send,
  Sparkles,
  Upload,
  BookOpen,
  X,
  Library,
  ArrowRight,
  Layers,
  Network,
  Shield,
  Target,
  Mic,
  Flame,
} from "lucide-react";
import { ModelSelector } from "./ModelSelector";
import { ThemeToggle } from "./ThemeToggle";

// ... (rest of imports)
import { EXAMPLE_MAP } from "../exampleData";
import { MindMapData, ComparisonWorkspaceData } from "../services/llmService";
import { WorkflowMode } from "../hooks/useAppState";

const WikiExplorer = lazy(() =>
  import("./WikiExplorer").then((module) => ({
    default: module.WikiExplorer,
  })),
);

export interface HomePageProps {
  workflowMode: WorkflowMode;
  isLoading: boolean;
  loadingMessage: string;
  error: string;
  topicInput: string;
  onWorkflowModeChange: (mode: WorkflowMode) => void;
  onTopicInputChange: (value: string) => void;
  onTopicSubmit: (e?: React.FormEvent) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onJsonUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLoadExample: () => void;
  onSelectMapExample?: (name: string, data: MindMapData) => void;
  onSelectCompareExample?: (data: ComparisonWorkspaceData) => void;
  onOpenShowcase: () => void;
  onOpenGallery: () => void;
  onOpenInterviewStudio?: () => void;
  onOpenWikiExplorer: () => void;
  showWikiExplorer: boolean;
  onCloseWikiExplorer: () => void;
  onLoadWikiPage?: (pageId: string) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  jsonInputRef: React.RefObject<HTMLInputElement | null>;
}

export function HomePage({
  workflowMode,
  isLoading,
  loadingMessage,
  error,
  topicInput,
  onWorkflowModeChange,
  onTopicInputChange,
  onTopicSubmit,
  onFileUpload,
  onJsonUpload,
  onLoadExample,
  onSelectMapExample,
  onSelectCompareExample,
  onOpenShowcase,
  onOpenGallery,
  onOpenInterviewStudio,
  onOpenWikiExplorer,
  showWikiExplorer,
  onCloseWikiExplorer,
  onLoadWikiPage,
  fileInputRef,
  jsonInputRef,
}: HomePageProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.26),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(253,186,116,0.28),transparent_25%),linear-gradient(180deg,#eef6ff_0%,#f8fafc_45%,#fffdf8_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.15),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.15),transparent_25%),linear-gradient(180deg,#0b0f19_0%,#060913_45%,#090e1c_100%)] animate-theme-shift flex flex-col items-center py-16 p-4 sm:p-8 relative">
      {/* Fixed viewport decorations — position:fixed keeps them out of document flow so they never cause overflow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_58%_at_50%_0%,#000_60%,transparent_100%)] opacity-60" />
        <div className="absolute left-[-10%] top-[-18%] h-[42rem] w-[42rem] rounded-full bg-cyan-200/35 dark:bg-cyan-900/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-8%] h-[36rem] w-[36rem] rounded-full bg-amber-200/30 dark:bg-amber-900/20 blur-[120px]" />
      </div>

      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <ModelSelector />
      </div>

      <div className="relative z-10 w-full max-w-5xl space-y-10">
        <div className="w-full rounded-[34px] border border-white/80 bg-white/76 dark:border-white/10 dark:bg-slate-900/80 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:p-10">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="relative mx-auto mb-6 h-24 w-24">
              <div className="theme-accent-bg absolute inset-0 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="theme-accent-bg theme-accent-glow relative flex h-full w-full items-center justify-center overflow-hidden rounded-[28px] border border-white/30 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-transparent" />
                <BrainCircuit size={48} className="relative z-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white">
              AI Mind{" "}
              <span className="theme-accent-text transition-colors duration-1000">
                Mapper
              </span>
            </h1>
            <p className="mx-auto max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">
              {workflowMode === "compare"
                ? "Build a decision board, linked map, and action path in one workspace."
                : "Generate a layered mind map with outline, inspection, and map views from one prompt or source."}
            </p>
          </div>

          {/* Pretext Showcase Promo */}
          <div className="rounded-[28px] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(14,165,233,0.08),rgba(251,146,60,0.08))] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(14,165,233,0.15),rgba(251,146,60,0.15))] p-5 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">
                  New portfolio demo
                </p>
                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                  Pretext Mind Map Builder
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
                  A canvas-first showcase with DOM-free text layout,
                  variable-size node cards, and AI-generated maps.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenShowcase}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                <Sparkles size={16} />
                Open showcase
              </button>
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Learn / Compare / Assess Toggle */}
          <div className="grid grid-cols-3 gap-2 rounded-2xl bg-slate-100 dark:bg-slate-800/80 p-1">
            <button
              type="button"
              onClick={() => onWorkflowModeChange("learn")}
              disabled={isLoading}
              className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition-all ${
                workflowMode === "learn"
                  ? "bg-white text-slate-900 dark:bg-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <GraduationCap size={16} />
              Learn
            </button>
            <button
              type="button"
              onClick={() => onWorkflowModeChange("compare")}
              disabled={isLoading}
              className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition-all ${
                workflowMode === "compare"
                  ? "bg-white text-slate-900 dark:bg-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <Scale size={16} />
              Compare
            </button>
            <button
              type="button"
              onClick={() => onWorkflowModeChange("assess")}
              disabled={isLoading}
              className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition-all ${
                workflowMode === "assess"
                  ? "bg-white text-slate-900 dark:bg-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <Target size={16} />
              Assess
            </button>
          </div>

          {/* Topic Input Form */}
          <form onSubmit={onTopicSubmit} className="space-y-4">
            <div className="group relative">
              <div className="theme-accent-bg absolute -inset-0.5 rounded-2xl blur opacity-10 transition-all duration-1000 group-hover:opacity-20" />
              <div
                className={`relative flex items-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white dark:border-white/15 dark:bg-slate-800/90 shadow-sm transition-all duration-300 focus-within:ring-4 focus-within:shadow-md ${
                  workflowMode === "assess"
                    ? "focus-within:border-amber-500 focus-within:ring-amber-500/15"
                    : workflowMode === "compare"
                    ? "focus-within:border-purple-500 focus-within:ring-purple-500/15"
                    : "focus-within:border-cyan-500 focus-within:ring-cyan-500/15"
                }`}
              >
                <div
                  className={`pl-5 pr-3 transition-colors ${
                    workflowMode === "assess"
                      ? "text-amber-600 dark:text-amber-400"
                      : workflowMode === "compare"
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-cyan-600 dark:text-cyan-400"
                  }`}
                >
                  <Sparkles
                    size={20}
                    className={isLoading ? "animate-pulse" : ""}
                  />
                </div>
                <input
                  type="text"
                  value={topicInput}
                  onChange={(event) => onTopicInputChange(event.target.value)}
                  placeholder={
                    workflowMode === "compare"
                      ? "Compare any product, tool, or topic..."
                      : workflowMode === "assess"
                      ? "Test how much you know about any topic..."
                      : "Visualize any concept..."
                  }
                  disabled={isLoading}
                  className="w-full bg-transparent py-5 text-sm font-medium text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !topicInput.trim()}
                  className="theme-accent-bg mr-3 rounded-xl p-3 text-white shadow-md transition-all hover:opacity-90 disabled:opacity-30 active:scale-95"
                >
                  {isLoading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                </button>
              </div>
            </div>

            {isLoading && loadingMessage && (
              <div className="theme-accent-text flex items-center justify-center gap-2 text-sm font-semibold animate-pulse">
                <span>{loadingMessage}</span>
              </div>
            )}

            <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
              {workflowMode === "compare"
                ? "Comparison mode builds a decision board, matched options, next steps, and a linked knowledge map."
                : workflowMode === "assess"
                ? "Assessment mode runs adaptive self-reporting and targeted MCQs to pinpoint knowledge gaps and build a study roadmap."
                : "Learning mode builds a layered workspace with map, outline, and node inspection."}
            </p>
          </form>

          {/* Divider */}
          <div className="space-y-6">
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-slate-200 dark:border-white/10" />
              <span className="mx-4 flex-shrink-0 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Or Process Data
              </span>
              <div className="flex-grow border-t border-slate-200 dark:border-white/10" />
            </div>

            {/* Upload Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-800/60 px-4 py-6 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition-all hover:border-cyan-500/30 hover:bg-white dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-md disabled:opacity-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-white dark:border-white/10 dark:bg-slate-900 shadow-sm transition-colors group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/40">
                  <Upload
                    size={22}
                    className="text-slate-400 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <span>Document</span>
                  <span className="text-[9px] uppercase tracking-tighter text-slate-500 dark:text-slate-400">
                    PDF, TXT, MD
                  </span>
                </div>
              </button>

              <button
                onClick={() => jsonInputRef.current?.click()}
                disabled={isLoading}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-800/60 px-4 py-6 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition-all hover:border-orange-500/30 hover:bg-white dark:hover:bg-slate-800 hover:text-orange-600 dark:hover:text-orange-400 hover:shadow-md disabled:opacity-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-white dark:border-white/10 dark:bg-slate-900 shadow-sm transition-colors group-hover:bg-orange-50 dark:group-hover:bg-orange-950/40">
                  <FileJson
                    size={22}
                    className="text-slate-400 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <span>Saved Map</span>
                  <span className="text-[9px] uppercase tracking-tighter text-slate-500 dark:text-slate-400">
                    JSON
                  </span>
                </div>
              </button>

              <button
                onClick={onOpenWikiExplorer}
                disabled={isLoading}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-800/60 px-4 py-6 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition-all hover:border-indigo-500/30 hover:bg-white dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md disabled:opacity-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-white dark:border-white/10 dark:bg-slate-900 shadow-sm transition-colors group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/40">
                  <BookOpen
                    size={22}
                    className="text-slate-400 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <span>Knowledge Base</span>
                  <span className="text-[9px] uppercase tracking-tighter text-slate-500 dark:text-slate-400">
                    Wiki & Logs
                  </span>
                </div>
              </button>
            </div>

            {/* Hidden File Inputs */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={onFileUpload}
              accept=".pdf,.txt,.md"
              className="hidden"
            />
            <input
              type="file"
              ref={jsonInputRef}
              onChange={onJsonUpload}
              accept=".json"
              className="hidden"
            />
          </div>
        </div>
      </div>

      {/* Master Full-Stack (.NET + Angular + SQL) Interview Studio Entry */}
      <div className="w-full rounded-[34px] border border-red-500/30 bg-gradient-to-br from-white/90 via-red-50/20 to-blue-50/20 dark:from-slate-900/90 dark:via-red-950/20 dark:to-blue-950/20 shadow-[0_20px_80px_rgba(239,68,68,0.12)] backdrop-blur-2xl overflow-hidden ring-1 ring-red-500/20">
        {/* Top gradient band */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-600 animate-pulse" />
        <div className="p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Left: text */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 dark:border-red-800/40 dark:bg-red-950/50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-red-700 dark:text-red-300">
                <GraduationCap size={13} />
                Staff / Lead Architectural Studio
              </div>
              <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                Master Full-Stack (.NET 8/9 + Angular 18+ + SQL)
              </h2>
              <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                Master the 22 cross-framework <strong className="font-semibold text-slate-900 dark:text-white">Rosetta Stone paradigms</strong>, rehearse 18 battle-tested <strong className="font-semibold text-slate-900 dark:text-white">90-second incident narratives</strong> with the live teleprompter, and drill SQL Server SARGability rules.
              </p>
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 dark:border-red-800/40 dark:bg-red-950/60 px-2.5 py-1 text-[11px] font-semibold text-red-700 dark:text-red-300">
                  <Sparkles size={11} /> 22 Rosetta Paradigms
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 dark:border-amber-800/40 dark:bg-amber-950/60 px-2.5 py-1 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
                  <Mic size={11} /> 18 Timed 90s War Stories
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 dark:border-emerald-800/40 dark:bg-emerald-950/60 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                  <Flame size={11} /> SARGable & EF Core Rules
                </span>
              </div>
            </div>
            {/* Right: CTA */}
            {onOpenInterviewStudio && (
              <button
                type="button"
                onClick={onOpenInterviewStudio}
                className="group flex shrink-0 items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-red-500/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-[1.03] active:scale-[0.98]"
              >
                <GraduationCap size={18} />
                Launch Interview Studio
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Knowledge Showcase Entry */}
      <div className="w-full rounded-[34px] border border-white/80 bg-white/76 dark:border-white/10 dark:bg-slate-900/80 shadow-[0_20px_80px_rgba(15,23,42,0.09)] backdrop-blur-2xl overflow-hidden">
        {/* Top gradient band */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
        <div className="p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Left: text */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 dark:border-cyan-800/40 dark:bg-cyan-950/50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">
                <Sparkles size={11} />
                Interactive Portfolio Showcase
              </div>
              <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                27 Curated Knowledge Maps
              </h2>
              <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                Explore deeply researched mind maps and decision matrices — from 47-node foundations to
                <strong className="font-semibold text-slate-700 dark:text-slate-200"> 792-node masterclasses</strong> across
                software, system design, science, and business.
              </p>
              {/* Mini stat pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { icon: <Layers size={11} />, text: "22 Mind Maps", color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/40" },
                  { icon: <Scale size={11} />, text: "5 Decision Matrices", color: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/40" },
                  { icon: <Shield size={11} />, text: "777-node Security Map", color: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800/40" },
                  { icon: <Network size={11} />, text: "792-node Networks Map", color: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/40" },
                ].map(({ icon, text, color }) => (
                  <span key={text} className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${color}`}>
                    {icon}{text}
                  </span>
                ))}
              </div>
            </div>
            {/* Right: CTA */}
            <button
              type="button"
              onClick={onOpenGallery}
              className="group flex shrink-0 items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Library size={18} />
              Browse Showcase
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Wiki Explorer Modal */}
      {showWikiExplorer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <button
              onClick={onCloseWikiExplorer}
              className="absolute top-2 right-2 sm:-top-3 sm:-right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-200 shadow-lg ring-1 ring-slate-200 dark:ring-white/10 transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-105"
              aria-label="Close Knowledge Base"
            >
              <X size={20} />
            </button>
            <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
              <Suspense
                fallback={
                  <div className="flex min-h-[420px] items-center justify-center bg-white dark:bg-slate-900 px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Loading knowledge base…
                  </div>
                }
              >
                <WikiExplorer onLoadPage={onLoadWikiPage} />
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
