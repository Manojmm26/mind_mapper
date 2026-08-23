import React, { useState } from "react";
import {
  TechStackProfile,
  getAllTechStacks,
  BUILTIN_TECH_STACKS,
} from "../../data/techStacks";
import {
  Layers,
  ChevronDown,
  Sparkles,
  Check,
  Cpu,
  Server,
  Database,
  Plus,
  Trash2,
  ExternalLink,
} from "lucide-react";

interface TechStackSwitcherProps {
  currentStack: TechStackProfile;
  onSelectStack: (stack: TechStackProfile) => void;
  onOpenCustomStackModal: () => void;
}

export function TechStackSwitcher({
  currentStack,
  onSelectStack,
  onOpenCustomStackModal,
}: TechStackSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const allStacks = getAllTechStacks();

  return (
    <div className="relative z-50">
      {/* Trigger Button */}
      <button
        id="tech-stack-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex items-center gap-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 px-3.5 py-2 min-h-[40px] text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm hover:border-purple-300 dark:hover:border-purple-800 transition-smooth focus:outline-none focus:ring-2 focus:ring-purple-500/50"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-[10px] font-black shadow-sm">
          <Layers size={13} />
        </span>
        <div className="text-left">
          <span className="text-[10px] font-black uppercase text-slate-400 block -mb-0.5">
            Active Tech Matrix
          </span>
          <span className="font-extrabold text-slate-900 dark:text-white">
            {currentStack.shortBadge}
          </span>
        </div>
        <ChevronDown
          size={14}
          className={`ml-1 text-slate-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Popover Dropdown */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/10 dark:bg-black/30 backdrop-blur-[1px]"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 mt-2 z-50 w-80 sm:w-96 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-3 space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between px-3 pt-2 pb-1 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Choose Framework Ecosystem
              </span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenCustomStackModal();
                }}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-600 dark:text-purple-400 hover:underline"
              >
                <Sparkles size={12} />
                <span>+ Custom AI Matrix</span>
              </button>
            </div>

            {/* Stacks List */}
            <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1 scrollbar-thin">
              {allStacks.map((stack) => {
                const isSelected = stack.id === currentStack.id;

                return (
                  <button
                    key={stack.id}
                    data-stack-id={stack.id}
                    onClick={() => {
                      onSelectStack(stack);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left rounded-2xl p-3 min-h-[52px] transition-smooth flex items-start justify-between gap-2 border ${
                      isSelected
                        ? "bg-purple-50 dark:bg-purple-950/40 border-purple-300 dark:border-purple-800 text-slate-900 dark:text-white font-bold shadow-sm"
                        : "bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <div className="space-y-1 pr-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black">{stack.shortBadge}</span>
                        {stack.isCustom && (
                          <span className="rounded-full bg-indigo-100 dark:bg-indigo-950 px-2 py-0.2 text-[9px] font-extrabold text-indigo-700 dark:text-indigo-300">
                            Custom
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 leading-snug">
                        {stack.description}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 pt-0.5">
                        <span>{stack.paradigms.length} Paradigms</span>
                        <span>•</span>
                        <span>{stack.scenarios.length} Scenarios</span>
                        <span>•</span>
                        <span>{stack.sqlRules.length} DB Rules</span>
                      </div>
                    </div>

                    {isSelected && (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white mt-1">
                        <Check size={12} />
                      </span>
                    )}
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
