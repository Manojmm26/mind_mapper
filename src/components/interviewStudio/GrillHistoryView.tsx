import React, { useState, useEffect } from "react";
import {
  GrillSessionRecord,
  getGrillSessions,
  deleteGrillSession,
  clearAllGrillSessions,
  exportGrillSessionMarkdown,
} from "../../services/mockGrillService";
import {
  History,
  Trash2,
  Download,
  Calendar,
  Award,
  CheckCircle,
  AlertOctagon,
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  Copy,
  Check,
  TrendingUp,
  Flame,
} from "lucide-react";

interface GrillHistoryViewProps {
  onStartNewDrill?: (scenarioId?: string) => void;
}

export function GrillHistoryView({ onStartNewDrill }: GrillHistoryViewProps) {
  const [sessions, setSessions] = useState<GrillSessionRecord[]>([]);
  const [expandedSessionId, setExpandedSessionId] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    setSessions(getGrillSessions());
  }, []);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this drill session log?")) {
      const updated = deleteGrillSession(id);
      setSessions(updated);
    }
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear ALL past interview drill logs? This cannot be undone.")) {
      clearAllGrillSessions();
      setSessions([]);
    }
  };

  const handleDownloadMarkdown = (session: GrillSessionRecord) => {
    const md = exportGrillSessionMarkdown(session);
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mock_grill_${session.scenarioId}_${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Aggregate Metrics
  const totalDrills = sessions.length;
  const totalQuestionsAnswered = sessions.reduce((acc, s) => acc + s.answers.length, 0);
  const averageScoreOverall =
    totalDrills > 0
      ? (sessions.reduce((acc, s) => acc + s.averageScore, 0) / totalDrills).toFixed(1)
      : "0.0";

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-[28px] bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 text-white shadow-xl border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
              <History size={14} />
              Rehearsal History & Progress Analytics
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
              AI Mock Grill Performance Logs
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300 leading-relaxed">
              Review your historical answers, AI scorecards, detected anti-patterns, and winning Principal responses across all past rehearsal sessions.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            {onStartNewDrill && (
              <button
                onClick={() => onStartNewDrill()}
                className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 min-h-[44px] text-xs font-black text-white shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all"
              >
                + Start New AI Grill
              </button>
            )}
            {sessions.length > 0 && (
              <button
                onClick={handleClearAll}
                className="rounded-2xl bg-red-500/20 hover:bg-red-500/30 text-red-300 px-3.5 py-2.5 min-h-[44px] text-xs font-bold border border-red-500/30 transition-all"
                title="Clear all logs"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Aggregate KPI Strip */}
        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-800 pt-4 text-center sm:text-left">
          <div className="rounded-2xl bg-white/5 p-3">
            <span className="text-[10px] font-black uppercase text-slate-400">Total Drills</span>
            <p className="text-xl sm:text-2xl font-black text-white">{totalDrills}</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-3">
            <span className="text-[10px] font-black uppercase text-slate-400">Questions Answered</span>
            <p className="text-xl sm:text-2xl font-black text-indigo-400">{totalQuestionsAnswered}</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-3">
            <span className="text-[10px] font-black uppercase text-slate-400">Average Readiness Score</span>
            <p className="text-xl sm:text-2xl font-black text-emerald-400">{averageScoreOverall} / 5.0</p>
          </div>
        </div>
      </div>

      {/* Sessions List */}
      {sessions.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-12 text-center space-y-3">
          <BrainCircuit size={40} className="mx-auto text-slate-400" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No Past Drill Logs Found
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Run an AI Mock Grill session on any scenario and click "Save Session Log" to build your review library.
          </p>
          {onStartNewDrill && (
            <button
              onClick={() => onStartNewDrill()}
              className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-purple-600 text-white px-4 py-2 min-h-[40px] text-xs font-bold shadow-md hover:bg-purple-700"
            >
              Start First AI Drill
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {sessions.map((session) => {
            const isExpanded = expandedSessionId === session.id;
            return (
              <div
                key={session.id}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-sm overflow-hidden transition-all hover:shadow-md"
              >
                {/* Session Summary Header */}
                <div
                  onClick={() => setExpandedSessionId(isExpanded ? null : session.id)}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 cursor-pointer select-none bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100/50 dark:hover:bg-slate-800/60 gap-3 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-black text-sm shadow-md">
                      {session.averageScore.toFixed(1)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {session.scenarioTitle}
                        </h3>
                        <span className="rounded-full bg-purple-100 dark:bg-purple-950 px-2.5 py-0.5 text-[10px] font-black uppercase text-purple-700 dark:text-purple-300">
                          {session.overallReadiness}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(session.createdAt).toLocaleDateString()} at{" "}
                          {new Date(session.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        <span>• {session.answers.length} Questions Graded</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadMarkdown(session);
                      }}
                      className="rounded-xl p-2 min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                      title="Download Markdown Report"
                    >
                      <Download size={16} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(session.id);
                      }}
                      className="rounded-xl p-2 min-w-[36px] min-h-[36px] flex items-center justify-center text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40"
                      title="Delete Session"
                    >
                      <Trash2 size={16} />
                    </button>
                    <button
                      type="button"
                      aria-label="Expand or collapse session"
                      className="rounded-full p-2 text-slate-400"
                    >
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                </div>

                {/* Expanded Question Deconstruction */}
                {isExpanded && (
                  <div className="p-6 pt-2 space-y-6 border-t border-slate-100 dark:border-slate-800">
                    {session.answers.map((ans, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl bg-slate-50/80 dark:bg-slate-950/70 p-5 border border-slate-200/60 dark:border-slate-800/80 space-y-3"
                      >
                        {/* Question Title & Score */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
                            Q{idx + 1}: {ans.persona} ({ans.focusArea})
                          </span>
                          <span className="rounded-full bg-slate-200 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-black text-slate-800 dark:text-slate-200">
                            Score: {ans.evaluation.score.toFixed(1)} / 5.0
                          </span>
                        </div>

                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                          "{ans.questionText}"
                        </p>

                        {/* Candidate Answer */}
                        <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-1">
                          <strong className="text-[10px] font-black uppercase text-slate-400 block">
                            Your Answer:
                          </strong>
                          <p className="italic">"{ans.candidateAnswer}"</p>
                        </div>

                        {/* AI Feedback */}
                        <div className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 space-y-1">
                          <strong className="text-slate-800 dark:text-slate-200 font-bold block">
                            AI Evaluator Feedback:
                          </strong>
                          <p>{ans.evaluation.feedback}</p>
                        </div>

                        {/* Winning Staff Soundbite */}
                        <div className="rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-3.5 border border-purple-300/40 dark:border-purple-800/30 text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <strong className="text-purple-700 dark:text-purple-300 font-bold">
                              🌟 Principal / Staff Soundbite:
                            </strong>
                            <button
                              onClick={() => handleCopy(ans.evaluation.staffSoundbite, `${session.id}-${idx}`)}
                              className="text-[11px] font-bold text-purple-700 dark:text-purple-300 hover:underline flex items-center gap-1"
                            >
                              {copiedKey === `${session.id}-${idx}` ? (
                                <Check size={12} className="text-emerald-500" />
                              ) : (
                                <Copy size={12} />
                              )}
                              <span>Copy</span>
                            </button>
                          </div>
                          <p className="italic text-slate-800 dark:text-slate-200">
                            "{ans.evaluation.staffSoundbite}"
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
