import React, { useState, useMemo } from "react";
import { Search, FileText, ChevronRight, Tag, FolderSync, CheckCircle2 } from "lucide-react";
import { WikiIndexEntry } from "../../services/wikiService";
import { connectLocalVault, syncAllPagesToVault, isFileSystemAccessSupported } from "../../services/vaultSyncService";
import { useWiki } from "../../hooks/useWiki";

export interface WikiBrowseTabProps {
  wikiIndex: WikiIndexEntry[];
  isLoading: boolean;
  onLoadPage: (pageId: string) => void;
}

export function WikiBrowseTab({
  wikiIndex,
  isLoading,
  onLoadPage,
}: WikiBrowseTabProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [syncStatus, setSyncStatus] = useState<string | null>(null);
  const wiki = useWiki();

  const handleSyncToVault = async () => {
    const status = await connectLocalVault();
    if (status.isConnected) {
      setSyncStatus("Syncing...");
      const count = await syncAllPagesToVault(wiki.pages);
      setSyncStatus(`Synced ${count} note(s) to ${status.directoryName}`);
      setTimeout(() => setSyncStatus(null), 3500);
    } else if (status.error) {
      setSyncStatus(status.error);
      setTimeout(() => setSyncStatus(null), 3500);
    }
  };

  const filteredPages = useMemo(() => {
    if (!searchQuery.trim()) return wikiIndex;
    const lower = searchQuery.toLowerCase();
    return wikiIndex.filter(
      (p) =>
        p.title.toLowerCase().includes(lower) ||
        p.summary.toLowerCase().includes(lower) ||
        p.tags.some((t) => t.toLowerCase().includes(lower)),
    );
  }, [wikiIndex, searchQuery]);

  const formatTimeAgo = (iso: string) => {
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

  return (
    <div className="space-y-4">
      {/* Search & Vault Sync Bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder="Search topics, tags, summaries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-slate-200/80 bg-white/80 py-3 pl-11 pr-4 text-sm font-medium text-slate-800 placeholder-slate-400 shadow-sm ring-1 ring-slate-100 transition-all focus:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        {isFileSystemAccessSupported() && (
          <button
            onClick={handleSyncToVault}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-indigo-50 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-indigo-700 hover:bg-indigo-100 ring-1 ring-indigo-200 transition-all shadow-sm"
            title="Sync wiki pages to a local folder or Obsidian vault"
          >
            <FolderSync size={15} />
            Sync to Local Vault
          </button>
        )}
      </div>

      {syncStatus && (
        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-800 ring-1 ring-emerald-200">
          <CheckCircle2 size={14} />
          {syncStatus}
        </div>
      )}

      {/* Loading State */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16 text-slate-500">
          <span className="text-sm font-bold">Loading knowledge base...</span>
        </div>
      ) : filteredPages.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-slate-200 bg-slate-50/50 py-16 text-slate-500">
          <div className="relative mb-4 flex h-16 w-16 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl animate-pulse" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-md ring-1 ring-slate-100">
              <FileText size={24} className="text-cyan-600" />
            </div>
          </div>
          <p className="text-sm font-bold text-slate-700">
            {searchQuery
              ? "No matching pages found."
              : "Your knowledge base is empty."}
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500 text-center max-w-xs">
            {searchQuery
              ? "Try a different search term."
              : "Generate a mind map or upload a document to start building your wiki."}
          </p>
        </div>
      ) : (
        /* Page List */
        <div className="space-y-3">
          {filteredPages.map((page) => (
            <div
              key={page.id}
              onClick={() => onLoadPage(page.id)}
              className="group cursor-pointer rounded-[20px] border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-4 shadow-sm transition-all hover:border-cyan-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-black tracking-tight text-slate-950 group-hover:text-cyan-700 transition-colors truncate">
                  {page.title}
                </h3>
                <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-500">
                  {formatTimeAgo(page.updatedAt)}
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-5 text-slate-600 line-clamp-2">
                {page.summary || "No summary available."}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-cyan-50 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-700">
                  <ChevronRight size={10} /> {page.nodeCount} nodes
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 capitalize">
                  {page.sourceType}
                </span>
                {page.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700"
                  >
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
