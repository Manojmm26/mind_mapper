import { ArrowLeft, Sparkles, Layers } from "lucide-react";
import { ExampleGallery } from "./ExampleGallery";
import { MindMapData, ComparisonWorkspaceData } from "../services/llmService";
import { ThemeToggle } from "./ThemeToggle";

interface GalleryPageProps {
  onBack: () => void;
  onSelectMapExample: (name: string, data: MindMapData) => void;
  onSelectCompareExample: (data: ComparisonWorkspaceData) => void;
}

export function GalleryPage({
  onBack,
  onSelectMapExample,
  onSelectCompareExample,
}: GalleryPageProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(253,186,116,0.20),transparent_30%),linear-gradient(180deg,#eef6ff_0%,#f8fafc_50%,#fffdf8_100%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.15),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.15),transparent_30%),linear-gradient(180deg,#0b0f19_0%,#060913_50%,#090e1c_100%)] relative overflow-x-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Blobs */}
      <div className="pointer-events-none absolute right-[-8%] top-[-12%] h-[40rem] w-[40rem] rounded-full bg-cyan-200/30 dark:bg-cyan-900/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-15%] left-[-6%] h-[32rem] w-[32rem] rounded-full bg-amber-200/25 dark:bg-amber-900/20 blur-[110px]" />

      {/* Sticky Header */}
      <header className="sticky top-0 z-30 w-full border-b border-slate-200/70 bg-white/70 dark:border-white/10 dark:bg-slate-900/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition-smooth hover:border-slate-300 dark:hover:border-white/20 hover:shadow-md active:scale-95"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
            Back
          </button>

          {/* Title */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md">
              <Layers size={16} className="text-white" />
            </div>
            <span className="text-sm font-black tracking-tight text-slate-900 dark:text-white sm:text-base">
              Knowledge Showcase
            </span>
          </div>

          {/* Right badge & ThemeToggle */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 dark:border-cyan-800/40 dark:bg-cyan-950/50 px-3 py-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-300">
              <Sparkles size={12} />
              <span className="hidden sm:inline">27 examples</span>
              <span className="sm:hidden">27</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-4 pt-12 text-center sm:px-8 sm:pt-16">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200/80 bg-cyan-50 dark:border-cyan-800/40 dark:bg-cyan-950/50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">
          <Sparkles size={11} />
          Interactive Portfolio Showcase
        </div>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
          Curated Knowledge{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Maps & Workspaces
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
          27 deeply researched examples — from 47-node foundations to{" "}
          <strong className="font-semibold text-slate-700 dark:text-slate-200">792-node masterclasses</strong> across
          software engineering, system design, science, and business strategy.
        </p>

        {/* Stats Row */}
        <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-3">
          {[
            { label: "Mind Maps", value: "22" },
            { label: "Decision Matrices", value: "5" },
            { label: "Max Depth", value: "5 levels" },
            { label: "Largest Map", value: "792 nodes" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white/80 dark:border-white/10 dark:bg-slate-900/80 px-5 py-3 shadow-sm backdrop-blur-sm"
            >
              <span className="text-xl font-black text-slate-900 dark:text-white">{value}</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <div className="rounded-[28px] border border-white/80 bg-white/60 dark:border-white/10 dark:bg-slate-900/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">
          <ExampleGallery
            onSelectMapExample={onSelectMapExample}
            onSelectCompareExample={onSelectCompareExample}
          />
        </div>
      </main>

      {/* Footer nudge */}
      <footer className="relative z-10 pb-12 pt-4 text-center text-xs text-slate-400">
        Click any card to load it instantly into the workspace ·{" "}
        <button onClick={onBack} className="font-semibold text-cyan-600 dark:text-cyan-400 hover:underline">
          Back to home
        </button>
      </footer>
    </div>
  );
}
