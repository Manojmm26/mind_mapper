import React, { memo } from "react";
import { Swords, History } from "lucide-react";

interface GrillHeaderBannerProps {
  pastSessionsCount: number;
  onNavigateToHistory?: () => void;
}

export const GrillHeaderBanner = memo(function GrillHeaderBanner({
  pastSessionsCount,
  onNavigateToHistory,
}: GrillHeaderBannerProps) {
  return (
    <div className="rounded-[28px] bg-gradient-to-r from-violet-600/90 via-indigo-600/90 to-purple-600/90 p-6 text-white shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
          <Swords size={14} />
          AI Mock Grill Simulator & Command Center
        </div>
        {onNavigateToHistory && (
          <button
            onClick={onNavigateToHistory}
            className="inline-flex items-center gap-1.5 rounded-xl bg-white/20 hover:bg-white/30 px-3.5 py-1.5 min-h-[36px] text-xs font-bold transition-smooth text-white backdrop-blur-md"
          >
            <History size={14} />
            <span>Review Past Logs ({pastSessionsCount})</span>
          </button>
        )}
      </div>

      <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
        Principal / Staff Technical Interrogation Simulator
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90">
        Survive aggressive follow-up grilling from Principal Architects, VP of Engineering, and Database SREs. Test your depth on edge cases, race conditions, memory leaks, and lock escalations.
      </p>
    </div>
  );
});
