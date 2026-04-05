import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Eye,
  Focus,
  GitCompare,
  HelpCircle,
  Layers,
  Link,
  Loader2,
  Map as MapIcon,
  PanelLeftClose,
  PanelLeftOpen,
  Play,
  Plus,
  Search,
  Share2,
  Sparkles,
  Target,
  Undo2,
  X,
} from "lucide-react";
import { ExplorerNode, ExplorerEdge } from "../types";

export interface TopBarProps {
  onExit?: () => void;
  mode: "atlas" | "tunnel" | "overview";
  setMode: (mode: "atlas" | "tunnel" | "overview") => void;
  nodes: ExplorerNode[];
  edges: ExplorerEdge[];
  focusNode: ExplorerNode | null;
  topicInput: string;
  setTopicInput: (input: string) => void;
  isGenerating: boolean;
  handleGenerateMap: () => Promise<void>;
  handleUndo: () => void;
  handleRedo: () => void;
  undoStack: unknown[];
  redoStack: unknown[];
  presentationMode: boolean;
  setPresentationMode: (mode: boolean) => void;
  setAddChildOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  detailPanelOpen: boolean;
  setDetailPanelOpen: (open: boolean) => void;
  statsPanelOpen: boolean;
  setStatsPanelOpen: (open: boolean) => void;
  storyMode: boolean;
  setStoryMode: (mode: boolean) => void;
  storyIndex: number;
  focusMode: boolean;
  setFocusMode: (mode: boolean) => void;
  edgeCreation: string | null;
  handleStartEdgeCreation: (nodeId: string) => void;
  setEdgeCreation: (id: string | null) => void;
  compareMode: boolean;
  setCompareMode: (mode: boolean) => void;
  resetCompare: () => void;
  minimapOpen: boolean;
  setMinimapOpen: (open: boolean) => void;
  setHelpOpen: (open: boolean) => void;
  recentlyViewed: string[];
  nodeMap: Map<string, ExplorerNode>;
  handleSelectNode: (nodeId: string) => void;
  navigationTrail: string[];
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  handleShare: () => void;
}

export function TopBar({
  onExit,
  mode,
  setMode,
  nodes,
  edges,
  focusNode,
  topicInput,
  setTopicInput,
  isGenerating,
  handleGenerateMap,
  handleUndo,
  handleRedo,
  undoStack,
  redoStack,
  presentationMode,
  setPresentationMode,
  setAddChildOpen,
  setSearchOpen,
  detailPanelOpen,
  setDetailPanelOpen,
  statsPanelOpen,
  setStatsPanelOpen,
  storyMode,
  setStoryMode,
  storyIndex,
  focusMode,
  setFocusMode,
  edgeCreation,
  handleStartEdgeCreation,
  setEdgeCreation,
  compareMode,
  setCompareMode,
  resetCompare,
  minimapOpen,
  setMinimapOpen,
  setHelpOpen,
  recentlyViewed,
  nodeMap,
  handleSelectNode,
  navigationTrail,
  sidebarOpen,
  setSidebarOpen,
  handleShare,
}: TopBarProps) {
  return (
    <div className="relative z-20 flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur-xl">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {onExit && (
          <button
            onClick={onExit}
            className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft size={18} />
          </button>
        )}
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-cyan-400" />
          <span className="text-sm font-semibold tracking-wide">
            Knowledge Explorer
          </span>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="flex items-center gap-1 rounded-xl bg-slate-800/60 p-1">
        <button
          onClick={() => setMode("atlas")}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
            mode === "atlas"
              ? "bg-cyan-500/20 text-cyan-300"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Target size={14} className="mr-1 inline" />
          Atlas
        </button>
        <button
          onClick={() => setMode("tunnel")}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
            mode === "tunnel"
              ? "bg-cyan-500/20 text-cyan-300"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Eye size={14} className="mr-1 inline" />
          Tunnel
        </button>
        <button
          onClick={() => setMode("overview")}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
            mode === "overview"
              ? "bg-cyan-500/20 text-cyan-300"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Layers size={14} className="mr-1 inline" />
          Overview
        </button>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Node Count Badge */}
        <div className="hidden sm:flex items-center gap-1 rounded-xl bg-slate-800/60 px-2.5 py-1.5 text-[10px] font-semibold text-slate-400">
          <span className="text-cyan-400">{nodes.length}</span> nodes
          <span className="text-slate-600">·</span>
          <span className="text-purple-400">{edges.length}</span> edges
        </div>

        {/* Share Button */}
        {focusNode && (
          <button
            onClick={handleShare}
            className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            title="Share this node"
          >
            <Share2 size={18} />
          </button>
        )}

        {/* Quick Suggestions */}
        {!topicInput && (
          <div className="hidden lg:flex items-center gap-1 text-xs text-slate-500">
            <span>Try:</span>
            {["AI Ethics", "Rust vs Go", "Quantum Computing"].map((s) => (
              <button
                key={s}
                onClick={() => setTopicInput(s)}
                className="rounded-md px-2 py-1 text-slate-400 transition-colors hover:bg-white/5 hover:text-cyan-300"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Topic Input */}
        <div className="relative">
          <input
            type="text"
            value={topicInput}
            onChange={(e) => setTopicInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerateMap()}
            placeholder="Explore a topic..."
            className="w-72 rounded-xl border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500/50"
          />
          <button
            onClick={handleGenerateMap}
            disabled={isGenerating || !topicInput.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1 text-cyan-400 transition-colors hover:bg-white/10 disabled:opacity-40"
          >
            {isGenerating ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Sparkles size={16} />
            )}
          </button>
        </div>

        {/* Undo / Redo */}
        <button
          onClick={handleUndo}
          disabled={undoStack.length === 0}
          className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30"
          title="Undo (Ctrl+Z)"
        >
          <Undo2 size={18} />
        </button>
        <button
          onClick={handleRedo}
          disabled={redoStack.length === 0}
          className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30"
          title="Redo (Ctrl+Shift+Z)"
        >
          <ArrowRight size={18} className="rotate-180" />
        </button>

        {/* Presentation Mode */}
        <button
          onClick={() => setPresentationMode(!presentationMode)}
          className={`rounded-xl p-2 transition-colors ${
            presentationMode
              ? "bg-amber-500/20 text-amber-300"
              : "text-slate-400 hover:bg-white/10 hover:text-white"
          }`}
          title="Presentation mode (P)"
        >
          <Play size={18} />
        </button>

        {/* Add Child */}
        {focusNode && (
          <button
            onClick={() => setAddChildOpen(true)}
            className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            title="Add child node (N)"
          >
            <Plus size={18} />
          </button>
        )}

        {/* Search */}
        <button
          onClick={() => setSearchOpen(true)}
          className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          title="Search nodes (/)"
        >
          <Search size={18} />
        </button>

        {/* Node Detail */}
        {focusNode && (
          <button
            onClick={() => setDetailPanelOpen(!detailPanelOpen)}
            className={`rounded-xl p-2 transition-colors ${
              detailPanelOpen
                ? "bg-purple-500/20 text-purple-300"
                : "text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
            title="Node details (D)"
          >
            <Eye size={18} />
          </button>
        )}

        {/* Stats Dashboard */}
        <button
          onClick={() => setStatsPanelOpen(!statsPanelOpen)}
          className={`rounded-xl p-2 transition-colors ${
            statsPanelOpen
              ? "bg-emerald-500/20 text-emerald-300"
              : "text-slate-400 hover:bg-white/10 hover:text-white"
          }`}
          title="Stats dashboard (S)"
        >
          <BarChart3 size={18} />
        </button>

        {/* Story Mode */}
        <button
          onClick={() => {
            setStoryMode(!storyMode);
            if (!storyMode) setStoryIndex(0);
          }}
          className={`rounded-xl p-2 transition-colors ${
            storyMode
              ? "bg-violet-500/20 text-violet-300"
              : "text-slate-400 hover:bg-white/10 hover:text-white"
          }`}
          title="Story mode (T)"
        >
          <BookOpen size={18} />
        </button>

        {/* Focus Mode */}
        {focusNode && (
          <button
            onClick={() => setFocusMode(!focusMode)}
            className={`rounded-xl p-2 transition-colors ${
              focusMode
                ? "bg-rose-500/20 text-rose-300"
                : "text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
            title="Focus mode (X)"
          >
            <Focus size={18} />
          </button>
        )}

        {/* Edge Creation */}
        {focusNode && (
          <button
            onClick={() =>
              edgeCreation
                ? setEdgeCreation(null)
                : handleStartEdgeCreation(focusNode.id)
            }
            className={`rounded-xl p-2 transition-colors ${
              edgeCreation
                ? "bg-orange-500/20 text-orange-300"
                : "text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
            title={edgeCreation ? "Click target to connect" : "Create edge"}
          >
            <Link size={18} />
          </button>
        )}

        {/* Compare Mode */}
        <button
          onClick={() => {
            if (compareMode) {
              resetCompare();
              setCompareMode(false);
            } else {
              setCompareMode(true);
            }
          }}
          className={`rounded-xl p-2 transition-colors ${
            compareMode
              ? "bg-indigo-500/20 text-indigo-300"
              : "text-slate-400 hover:bg-white/10 hover:text-white"
          }`}
          title="Compare nodes (B)"
        >
          <GitCompare size={18} />
        </button>

        {/* Mini-map Toggle */}
        <button
          onClick={() => setMinimapOpen(!minimapOpen)}
          className={`rounded-xl p-2 transition-colors ${
            minimapOpen
              ? "bg-teal-500/20 text-teal-300"
              : "text-slate-400 hover:bg-white/10 hover:text-white"
          }`}
          title="Toggle mini-map (M)"
        >
          <MapIcon size={18} />
        </button>

        {/* Help */}
        <button
          onClick={() => setHelpOpen(true)}
          className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          title="Keyboard shortcuts (?)"
        >
          <HelpCircle size={18} />
        </button>

        {/* Recently Viewed */}
        {recentlyViewed.length > 0 && (
          <div className="hidden lg:flex items-center gap-1 text-xs text-slate-500">
            <span>Recent:</span>
            {recentlyViewed.slice(0, 4).map((id) => {
              const node = nodeMap.get(id);
              if (!node) return null;
              return (
                <button
                  key={id}
                  onClick={() => handleSelectNode(id)}
                  className="rounded-md px-2 py-1 text-slate-400 transition-colors hover:bg-white/5 hover:text-cyan-300"
                >
                  {node.data.label.length > 12
                    ? `${node.data.label.slice(0, 12)}…`
                    : node.data.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Navigation Trail */}
        {navigationTrail.length > 1 && (
          <div className="hidden md:flex items-center gap-1 max-w-xs overflow-hidden">
            <span className="text-[10px] text-slate-500 shrink-0">Trail:</span>
            {navigationTrail.slice(-4).map((id, i, arr) => {
              const node = nodeMap.get(id);
              if (!node) return null;
              return (
                <React.Fragment key={id}>
                  {i > 0 && (
                    <span className="text-slate-600 text-[10px]">›</span>
                  )}
                  <button
                    onClick={() =>
                      handleSelectNode(
                        navigationTrail[navigationTrail.length - arr.length + i]
                      )
                    }
                    className="shrink-0 rounded-md px-2 py-1 text-[10px] font-medium text-slate-400 transition-colors hover:bg-white/10 hover:text-cyan-300"
                  >
                    {node.data.label.length > 15
                      ? `${node.data.label.slice(0, 15)}…`
                      : node.data.label}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Sidebar Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          {sidebarOpen ? (
            <PanelLeftClose size={18} />
          ) : (
            <PanelLeftOpen size={18} />
          )}
        </button>
      </div>
    </div>
  );
}
