import React, { memo } from "react";
import { Mic, MicOff, Send, BrainCircuit } from "lucide-react";

interface AnswerComposerProps {
  answerText: string;
  onAnswerChange: (value: string) => void;
  wordCount: number;
  isListening: boolean;
  onToggleSpeech: () => void;
  isEvaluating: boolean;
  onEvaluate: () => void;
}

export const AnswerComposer = memo(function AnswerComposer({
  answerText,
  onAnswerChange,
  wordCount,
  isListening,
  onToggleSpeech,
  isEvaluating,
  onEvaluate,
}: AnswerComposerProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor="candidate-answer-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">
          Your Spoken / Typed Defense:
        </label>
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span>{wordCount} words</span>
          <button
            type="button"
            onClick={onToggleSpeech}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 min-h-[32px] font-bold transition-smooth ${
              isListening
                ? "bg-red-500 text-white animate-pulse"
                : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
            }`}
            title="Speak answer via microphone"
          >
            {isListening ? <MicOff size={14} /> : <Mic size={14} />}
            <span>{isListening ? "Listening..." : "Dictate"}</span>
          </button>
        </div>
      </div>

      <textarea
        id="candidate-answer-input"
        rows={4}
        placeholder="Articulate your technical response, engine internals, trade-offs, and telemetry metrics..."
        value={answerText}
        onChange={(e) => onAnswerChange(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-4 text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 leading-relaxed shadow-inner"
      />

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onEvaluate}
          disabled={isEvaluating}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 min-h-[44px] text-xs sm:text-sm font-bold shadow-md hover:from-purple-700 hover:to-indigo-700 transition-smooth disabled:opacity-50"
        >
          {isEvaluating ? (
            <>
              <BrainCircuit size={16} className="animate-spin" />
              <span>Interviewer is Evaluating...</span>
            </>
          ) : (
            <>
              <Send size={16} />
              <span>Evaluate Response with AI</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
});
