import React, { useState, useMemo, RefObject } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Search, FileText, FolderSync, CheckCircle2 } from "lucide-react";
import { WikiIndexEntry } from "../../services/wikiService";
import { connectLocalVault, syncAllPagesToVault, isFileSystemAccessSupported } from "../../services/vaultSyncService";
import { useWiki } from "../../hooks/useWiki";
import { WikiPageCard } from "./WikiPageCard";

export interface WikiBrowseTabProps {
  wikiIndex: WikiIndexEntry[];
  isLoading: boolean;
  onLoadPage: (pageId: string) => void;
  scrollContainerRef?: RefObject<HTMLDivElement>;
}

const CARD_GAP = 12;
const CARD_ESTIMATED_HEIGHT = 150;

export function WikiBrowseTab({
  wikiIndex,
  isLoading,
  onLoadPage,
  scrollContainerRef,
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

  const rowVirtualizer = useVirtualizer({
    count: filteredPages.length,
    getScrollElement: () => scrollContainerRef?.current ?? null,
    estimateSize: () => CARD_ESTIMATED_HEIGHT,
    overscan: 6,
  });

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
            className="w-full rounded-2xl border border-slate-200/80 bg-white/80 dark:border-white/10 dark:bg-slate-800/80 py-3 pl-11 pr-4 text-sm font-medium text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 shadow-sm ring-1 ring-slate-100 dark:ring-white/10 transition-smooth focus:border-cyan-200 dark:focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        {isFileSystemAccessSupported() && (
          <button
            onClick={handleSyncToVault}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 ring-1 ring-indigo-200 dark:ring-indigo-800/40 transition-smooth shadow-sm"
            title="Sync wiki pages to a local folder or Obsidian vault"
          >
            <FolderSync size={15} />
            Sync to Local Vault
          </button>
        )}
      </div>

      {syncStatus && (
        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 px-4 py-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 ring-1 ring-emerald-200 dark:ring-emerald-800/40">
          <CheckCircle2 size={14} />
          {syncStatus}
        </div>
      )}

      {/* Loading State */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16 text-slate-500 dark:text-slate-400">
          <span className="text-sm font-bold">Loading knowledge base...</span>
        </div>
      ) : filteredPages.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/40 py-16 text-slate-500 dark:text-slate-400">
          <div className="relative mb-4 flex h-16 w-16 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl animate-pulse" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 text-slate-400 shadow-md ring-1 ring-slate-100 dark:ring-white/10">
              <FileText size={24} className="text-cyan-600 dark:text-cyan-400" />
            </div>
          </div>
          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
            {searchQuery
              ? "No matching pages found."
              : "Your knowledge base is empty."}
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400 text-center max-w-xs">
            {searchQuery
              ? "Try a different search term."
              : "Generate a mind map or upload a document to start building your wiki."}
          </p>
        </div>
      ) : (
        /* Page List (virtualized) */
        <div style={{ height: rowVirtualizer.getTotalSize(), position: "relative" }}>
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const page = filteredPages[virtualRow.index];
            return (
              <div
                key={page.id}
                data-index={virtualRow.index}
                ref={rowVirtualizer.measureElement}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualRow.start}px)`,
                  paddingBottom: CARD_GAP,
                }}
              >
                <WikiPageCard page={page} onLoadPage={onLoadPage} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
