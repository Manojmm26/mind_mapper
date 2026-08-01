import React from "react";
import { Clock } from "lucide-react";
import { WikiLogEntry } from "../../services/wikiService";

export interface WikiActivityLogTabProps {
  logs: WikiLogEntry[];
  isLoading: boolean;
}

export function WikiActivityLogTab({
  logs,
  isLoading,
}: WikiActivityLogTabProps) {
  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Unknown";
    }
  };

  const getLogColor = (type: WikiLogEntry["type"]) => {
    switch (type) {
      case "ingest":
        return "bg-cyan-500";
      case "lint":
        return "bg-amber-500";
      case "export":
        return "bg-emerald-500";
      case "delete":
        return "bg-red-500";
      case "update":
        return "bg-indigo-500";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <div className="space-y-3">
      {isLoading ? (
        <div className="flex items-center justify-center py-16 text-slate-500 dark:text-slate-400">
          <span className="text-sm font-bold">Loading activity log...</span>
        </div>
      ) : logs.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/40 py-16 text-slate-500 dark:text-slate-400">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 mb-4">
            <Clock size={24} className="text-slate-400 dark:text-slate-500" />
          </div>
          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
            No activity recorded yet.
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400 text-center max-w-xs">
            Generate a mind map or run a health check to see your activity
            timeline.
          </p>
        </div>
      ) : (
        logs.map((log) => (
          <div
            key={log.id}
            className="group flex items-start gap-3 rounded-[20px] border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white dark:border-white/10 dark:from-slate-800/80 dark:to-slate-900/90 p-4 shadow-sm transition-all hover:border-cyan-200 dark:hover:border-cyan-500/50 hover:shadow-md"
          >
            <div
              className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${getLogColor(log.type)}`}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-black tracking-tight text-slate-950 dark:text-white capitalize">
                  {log.type}
                </span>
                <span className="shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[9px] font-bold text-slate-500 dark:text-slate-400">
                  {formatDate(log.timestamp)}
                </span>
              </div>
              <p className="mt-0.5 text-xs font-bold text-slate-700 dark:text-slate-200 truncate">
                {log.topic}
              </p>
              <p className="mt-0.5 text-xs leading-5 text-slate-600 dark:text-slate-300">
                {log.details}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
