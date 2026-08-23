import { useState } from "react";
import { Cpu, Check, ChevronDown, Sparkles, Zap, ShieldAlert } from "lucide-react";
import {
  AVAILABLE_GEMINI_MODELS,
  getActiveGeminiModel,
  setActiveGeminiModel,
  GeminiModelInfo,
} from "../config/aiConfig";

export function ModelSelector() {
  const [selectedModelId, setSelectedModelId] = useState<string>(() => getActiveGeminiModel());
  const [isOpen, setIsOpen] = useState(false);

  const currentModel =
    AVAILABLE_GEMINI_MODELS.find((m) => m.id === selectedModelId) ||
    AVAILABLE_GEMINI_MODELS[0];

  const handleSelect = (model: GeminiModelInfo) => {
    setSelectedModelId(model.id);
    setActiveGeminiModel(model.id);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-2xl border border-white/80 dark:border-white/10 bg-white/90 dark:bg-slate-800/90 px-3.5 py-2 text-xs font-bold text-slate-800 dark:text-slate-100 shadow-sm backdrop-blur-xl transition-smooth hover:bg-white dark:hover:bg-slate-800 hover:shadow-md active:scale-95"
      >
        <Cpu size={14} className="text-cyan-600 dark:text-cyan-400" />
        <span>{currentModel.name}</span>
        <ChevronDown size={12} className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-50 mt-2 w-80 rounded-[24px] border border-white/80 dark:border-white/10 bg-white/95 dark:bg-slate-900/95 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl ring-1 ring-slate-100 dark:ring-white/10">
            <div className="mb-2.5 px-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  Google Gemini Engine
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[9px] font-bold text-emerald-700 dark:text-emerald-300">
                  Active
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Choose the Google AI model optimized for your task.
              </p>
            </div>

            <div className="space-y-1.5">
              {AVAILABLE_GEMINI_MODELS.map((model) => {
                const isSelected = model.id === selectedModelId;
                return (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => handleSelect(model)}
                    className={`w-full text-left rounded-2xl p-3 transition-smooth ${
                      isSelected
                        ? "bg-gradient-to-r from-cyan-50/90 to-indigo-50/90 dark:from-cyan-950/60 dark:to-indigo-950/60 ring-1 ring-cyan-200/80 dark:ring-cyan-800/40"
                        : "hover:bg-slate-50 dark:hover:bg-slate-800/80"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {model.category === "flash" && <Sparkles size={14} className="text-cyan-600 dark:text-cyan-400" />}
                        {model.category === "flash-lite" && <Zap size={14} className="text-amber-500 dark:text-amber-400" />}
                        {model.category === "pro" && <ShieldAlert size={14} className="text-indigo-600 dark:text-indigo-400" />}
                        <span className="text-xs font-black text-slate-900 dark:text-white">{model.name}</span>
                      </div>
                      {isSelected && <Check size={14} className="text-cyan-600 dark:text-cyan-400" />}
                    </div>
                    <p className="mt-1 text-[11px] leading-4 text-slate-600 dark:text-slate-300">
                      {model.description}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span className="rounded-md bg-cyan-50 px-2 py-0.5 text-[9px] font-extrabold text-cyan-700">
                        {model.pricingNote}
                      </span>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-500">
                        {model.recommendedFor}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
