import React, { Suspense, lazy, useState } from "react";
import {
  BookOpen,
  Clock,
  ShieldCheck,
  BarChart3,
  Trash2,
  RefreshCw,
  Download,
  FileText,
  Sparkles,
  X,
  Search,
  Archive,
} from "lucide-react";
import { useWiki } from "../hooks/useWiki";
import { exportWikiToJSON } from "../services/wikiService";
import {
  WikiBrowseTab,
  WikiActivityLogTab,
  WikiHealthCheckTab,
  WikiStatsTab,
  WikiQueryTab,
} from "./wikiExplorer";

const KnowledgeGraph = lazy(() =>
  import("./KnowledgeGraph").then((module) => ({
    default: module.KnowledgeGraph,
  })),
);

type WikiTab = "browse" | "graph" | "query" | "logs" | "lint" | "stats";

export function WikiExplorer({
  onLoadPage,
}: {
  onLoadPage?: (pageId: string) => void;
}) {
  const wiki = useWiki();
  const [activeTab, setActiveTab] = useState<WikiTab>("browse");
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const handleExportJSON = async () => {
    const json = await exportWikiToJSON();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wiki-export-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportMarkdown = async () => {
    const { generateMarkdownIndex } =
      await import("../services/wikiMarkdownExport");
    if (!wiki.conceptIndex) return;
    const md = generateMarkdownIndex(wiki.conceptIndex);
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wiki-index-${new Date().toISOString().split("T")[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportVaultZip = async () => {
    const { exportObsidianVaultZip } = await import("../services/wikiMarkdownExport");
    const zipBlob = await exportObsidianVaultZip(wiki.conceptIndex || undefined);
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `obsidian-wiki-vault-${new Date().toISOString().split("T")[0]}.zip`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClearWiki = async () => {
    await wiki.clearWiki();
    setShowClearConfirm(false);
  };

  const tabs: { id: WikiTab; label: string; icon: React.ElementType }[] = [
    { id: "browse", label: "Browse", icon: BookOpen },
    { id: "graph", label: "Graph", icon: Sparkles },
    { id: "query", label: "Ask", icon: Search },
    { id: "logs", label: "Activity Log", icon: Clock },
    { id: "lint", label: "Health Check", icon: ShieldCheck },
    { id: "stats", label: "Statistics", icon: BarChart3 },
  ];

  return (
    <div className="flex h-full w-full flex-col rounded-[32px] border border-white/60 bg-white/75 p-5 shadow-[0_12px_60px_rgba(15,23,42,0.1)] backdrop-blur-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-slate-100 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-500 text-white shadow-sm">
            <BookOpen size={20} />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight text-slate-950">
              Knowledge Base
            </h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
              {wiki.isLoading ? (
                <>
                  <RefreshCw size={10} className="animate-spin" /> Syncing
                </>
              ) : (
                <>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Ready
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleExportVaultZip}
            className="flex items-center gap-1.5 rounded-xl bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-700 transition-colors hover:bg-indigo-100"
            title="Export Obsidian Vault (.zip)"
          >
            <Archive size={15} />
            <span className="hidden md:inline">Obsidian Vault</span>
          </button>
          <button
            onClick={handleExportMarkdown}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
            title="Export Markdown Index"
          >
            <FileText size={16} />
          </button>
          <button
            onClick={handleExportJSON}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
            title="Export Wiki JSON"
          >
            <Download size={16} />
          </button>
          <button
            onClick={() => wiki.refreshWiki()}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
            title="Refresh"
          >
            <RefreshCw size={16} />
          </button>
          <button
            onClick={() => setShowClearConfirm(true)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-red-400 transition-colors hover:bg-red-50 hover:text-red-600"
            title="Clear All Data"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 rounded-2xl bg-slate-100 p-1 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition-all ${
              activeTab === tab.id
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <tab.icon size={14} />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto rounded-[28px] bg-slate-50/50 p-5 ring-1 ring-slate-100">
        {activeTab === "browse" && (
          <WikiBrowseTab
            wikiIndex={wiki.wikiIndex}
            isLoading={wiki.isLoading}
            onLoadPage={onLoadPage ?? (() => {})}
          />
        )}

        {activeTab === "graph" && (
          <div className="h-[550px] min-h-[500px] w-full rounded-[20px] border border-slate-200/80 bg-slate-950 shadow-md overflow-hidden">
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center text-sm font-semibold text-slate-400">
                  Loading knowledge graph…
                </div>
              }
            >
              <KnowledgeGraph
                wikiIndex={wiki.wikiIndex}
                conceptIndex={wiki.conceptIndex}
              />
            </Suspense>
          </div>
        )}

        {activeTab === "query" && (
          <WikiQueryTab
            wikiIndex={wiki.wikiIndex}
            conceptIndex={wiki.conceptIndex}
            isLoading={wiki.isLoading}
            onLoadPage={onLoadPage ?? (() => {})}
          />
        )}

        {activeTab === "logs" && (
          <WikiActivityLogTab logs={wiki.logs} isLoading={wiki.isLoading} />
        )}

        {activeTab === "lint" && (
          <WikiHealthCheckTab
            lintReport={wiki.lintReport}
            isLoading={wiki.isLoading}
            onRunLint={wiki.runLint}
          />
        )}

        {activeTab === "stats" && (
          <WikiStatsTab stats={wiki.stats} isLoading={wiki.isLoading} />
        )}
      </div>

      {/* Clear Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-sm rounded-[28px] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
            <button
              onClick={() => setShowClearConfirm(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            >
              <X size={16} />
            </button>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
              <Trash2 size={24} />
            </div>
            <h3 className="text-xl font-black tracking-tight text-slate-950 mb-2">
              Clear Knowledge Base?
            </h3>
            <p className="text-sm leading-6 text-slate-600 mb-6">
              This will permanently delete all wiki pages, activity logs, and
              concept indexes. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleClearWiki}
                className="flex-1 rounded-2xl bg-red-500 px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-red-600"
              >
                Clear Everything
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
