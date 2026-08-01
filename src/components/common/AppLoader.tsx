import { BrainCircuit, Loader2, Sparkles } from "lucide-react";

export interface AppLoaderProps {
  message?: string;
  subtitle?: string;
  variant?: "fullscreen" | "overlay" | "card" | "inline";
  onCancel?: () => void;
}

export function AppLoader({
  message = "Processing request...",
  subtitle = "AI is structuring concepts and building your knowledge workspace...",
  variant = "overlay",
  onCancel,
}: AppLoaderProps) {
  if (variant === "inline") {
    return (
      <div className="inline-flex items-center gap-2.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-sm backdrop-blur-md">
        <Loader2 size={16} className="animate-spin text-cyan-500" />
        <span>{message}</span>
      </div>
    );
  }

  const containerClasses =
    variant === "fullscreen"
      ? "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xl p-4"
      : variant === "overlay"
      ? "absolute inset-0 z-40 flex items-center justify-center bg-slate-950/70 dark:bg-slate-950/85 backdrop-blur-md p-4 rounded-[32px]"
      : "flex min-h-[320px] w-full flex-col items-center justify-center rounded-[32px] border border-white/60 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 p-8 shadow-2xl backdrop-blur-2xl";

  return (
    <div className={containerClasses}>
      <div className="relative flex max-w-md flex-col items-center text-center">
        {/* Animated Glow Icon */}
        <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
          <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-white/40 dark:border-white/20 bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-2xl shadow-cyan-500/30">
            <BrainCircuit size={38} className="text-white animate-pulse" />
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 border border-cyan-400/50 shadow-md">
            <Loader2 size={14} className="animate-spin text-cyan-400" />
          </div>
        </div>

        {/* Message & Subtitle */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 dark:border-cyan-800/40 bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-300">
            <Sparkles size={11} />
            <span>AI Thinking Engine</span>
          </div>
          <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            {message}
          </h3>
          <p className="max-w-sm text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        </div>

        {/* Optional Cancel button */}
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="mt-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/80 px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
