import React from "react";
import { X, Sparkles, Loader2 } from "lucide-react";
import { AppLoader } from "../../common/AppLoader";

export interface ExpandPromptState {
  open: boolean;
  nodeId: string | null;
  input: string;
  isGenerating: boolean;
}

export interface ExpandNodeModalProps {
  expandPrompt: ExpandPromptState;
  nodeLabel?: string;
  onClose: () => void;
  onInputChange: (input: string) => void;
  onExpand: (nodeId: string, input: string) => void;
}

export function ExpandNodeModal({
  expandPrompt,
  nodeLabel,
  onClose,
  onInputChange,
  onExpand,
}: ExpandNodeModalProps) {
  if (!expandPrompt.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
      <div className="w-full max-w-lg rounded-[28px] border border-white/10 bg-slate-900 p-6 shadow-2xl">
        {expandPrompt.isGenerating ? (
          <AppLoader
            variant="card"
            message={`Expanding "${nodeLabel || "Node"}"...`}
            subtitle="AI is researching deeper sub-branches and structural details..."
          />
        ) : (
          <>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-bold text-white">
                Expand: {nodeLabel || "Node"}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mb-3 text-xs text-slate-400">
              Ask AI to expand this branch with more detail, examples, or sub-topics.
            </p>
            <textarea
              value={expandPrompt.input}
              onChange={(e) => onInputChange(e.target.value)}
              placeholder="e.g., Show me practical examples, Add implementation details, What are common pitfalls?"
              rows={3}
              className="w-full rounded-2xl border border-white/10 bg-slate-800/80 p-4 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/50"
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-400 transition-colors hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() =>
                  expandPrompt.nodeId &&
                  onExpand(expandPrompt.nodeId, expandPrompt.input)
                }
                disabled={!expandPrompt.input.trim()}
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-5 py-2.5 text-xs font-bold text-white transition-smooth hover:bg-cyan-500 disabled:opacity-40 shadow-sm"
              >
                <Sparkles size={14} />
                <span>Expand Branch</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
