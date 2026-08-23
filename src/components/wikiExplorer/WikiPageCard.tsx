import React, { memo } from "react";
import { ChevronRight, Tag } from "lucide-react";
import { WikiIndexEntry } from "../../services/wikiService";

export const formatTimeAgo = (iso: string) => {
  try {
    const diffMs = Date.now() - new Date(iso).getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 30) return `${diffDays} days ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  } catch {
    return "";
  }
};

interface WikiPageCardProps {
  page: WikiIndexEntry;
  onLoadPage: (pageId: string) => void;
}

export const WikiPageCard = memo(function WikiPageCard({
  page,
  onLoadPage,
}: WikiPageCardProps) {
  return (
    <div
      onClick={() => onLoadPage(page.id)}
      className="group cursor-pointer rounded-[20px] border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white dark:border-white/10 dark:from-slate-800/80 dark:to-slate-900/90 p-4 shadow-sm transition-smooth hover:border-cyan-200 dark:hover:border-cyan-500/50 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-black tracking-tight text-slate-950 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors truncate">
          {page.title}
        </h3>
        <span className="shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[9px] font-bold text-slate-500 dark:text-slate-400">
          {formatTimeAgo(page.updatedAt)}
        </span>
      </div>
      <p className="mt-1.5 text-xs leading-5 text-slate-600 dark:text-slate-300 line-clamp-2">
        {page.summary || "No summary available."}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
          <ChevronRight size={10} /> {page.nodeCount} nodes
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 dark:text-slate-300 capitalize">
          {page.sourceType}
        </span>
        {page.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300"
          >
            <Tag size={10} /> {tag}
          </span>
        ))}
      </div>
    </div>
  );
});
