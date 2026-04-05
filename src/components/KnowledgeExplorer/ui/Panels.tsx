import React from "react";
import {
  BarChart3,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  FileJson,
  Image,
  Loader2,
  MessageSquare,
  Minimize2,
  Plus,
  Save,
  Search,
  Share2,
  X,
} from "lucide-react";
import { ExplorerNode, ExplorerEdge } from "../types";

// ---------------------------------------------------------------------------
// Search Panel
// ---------------------------------------------------------------------------

export interface SearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  searchResults: ExplorerNode[];
  onSelectNode: (nodeId: string) => void;
}

export function SearchPanel({
  isOpen,
  onClose,
  searchQuery,
  onSearchQueryChange,
  searchResults,
  onSelectNode,
}: SearchPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="pointer-events-auto absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl overflow-hidden">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <Search size={18} className="text-slate-400 shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
          placeholder="Search nodes by label, description, or tag..."
          className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none"
          autoFocus
        />
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
      {searchResults.length > 0 ? (
        <div className="max-h-80 overflow-y-auto p-2">
          {searchResults.map((node) => (
            <button
              key={node.id}
              onClick={() => {
                onSelectNode(node.id);
                onClose();
              }}
              className="w-full rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-white/5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-sm font-medium text-white">
                    {node.data.label}
                  </div>
                  {node.data.description && (
                    <div className="mt-0.5 line-clamp-1 text-xs text-slate-400">
                      {node.data.description}
                    </div>
                  )}
                </div>
                <span className="shrink-0 rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-500">
                  depth {node.depth}
                </span>
              </div>
            </button>
          ))}
        </div>
      ) : searchQuery.length >= 2 ? (
        <div className="px-4 py-6 text-center text-sm text-slate-500">
          No nodes match "{searchQuery}"
        </div>
      ) : (
        <div className="px-4 py-6 text-center text-xs text-slate-500">
          Type at least 2 characters to search
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Add Child Panel
// ---------------------------------------------------------------------------

export interface AddChildPanelProps {
  isOpen: boolean;
  onClose: () => void;
  newChildLabel: string;
  onNewLabelChange: (label: string) => void;
  newChildDescription: string;
  onNewDescriptionChange: (desc: string) => void;
  onAddChild: () => void;
  isGenerating: boolean;
}

export function AddChildPanel({
  isOpen,
  onClose,
  newChildLabel,
  onNewLabelChange,
  newChildDescription,
  onNewDescriptionChange,
  onAddChild,
  isGenerating,
}: AddChildPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="pointer-events-auto absolute top-16 right-4 w-80 rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Add Child Node</h3>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
      <div className="space-y-3">
        <input
          type="text"
          value={newChildLabel}
          onChange={(e) => onNewLabelChange(e.target.value)}
          placeholder="Node label..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/50"
        />
        <textarea
          value={newChildDescription}
          onChange={(e) => onNewDescriptionChange(e.target.value)}
          placeholder="Description (optional)..."
          rows={3}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 resize-none"
        />
        <button
          onClick={onAddChild}
          disabled={isGenerating || !newChildLabel.trim()}
          className="w-full rounded-xl bg-cyan-500/20 px-3 py-2 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-500/30 disabled:opacity-40"
        >
          {isGenerating ? (
            <Loader2 size={16} className="mx-auto animate-spin" />
          ) : (
            <>
              <Plus size={14} className="mr-1 inline" /> Add Node
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Collected Nodes Panel
// ---------------------------------------------------------------------------

export interface CollectedPanelProps {
  isOpen: boolean;
  onClose: () => void;
  collectedIds: Set<string>;
  nodeMap: Map<string, ExplorerNode>;
  onSelectNode: (nodeId: string) => void;
  onToggleCollect: (nodeId: string) => void;
  onClearAll: () => void;
  onExportSummary: () => void;
}

export function CollectedPanel({
  isOpen,
  onClose,
  collectedIds,
  nodeMap,
  onSelectNode,
  onToggleCollect,
  onClearAll,
  onExportSummary,
}: CollectedPanelProps) {
  if (!isOpen || collectedIds.size === 0) return null;

  return (
    <div className="pointer-events-auto absolute bottom-16 right-4 w-80 max-h-[50vh] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <h3 className="text-sm font-semibold text-white">Collected Nodes</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={onExportSummary}
            className="text-xs text-cyan-400 hover:text-cyan-300"
            title="Export as Markdown"
          >
            Export
          </button>
          <button
            onClick={onClearAll}
            className="text-xs text-slate-500 hover:text-red-400"
          >
            Clear all
          </button>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
      </div>
      <div className="max-h-[calc(50vh-48px)] overflow-y-auto p-3">
        <div className="space-y-1">
          {Array.from(collectedIds).map((id) => {
            const node = nodeMap.get(id);
            if (!node) return null;
            return (
              <button
                key={id}
                onClick={() => {
                  onSelectNode(id);
                  onClose();
                }}
                className="group w-full rounded-xl border border-white/5 bg-white/5 px-3 py-2.5 text-left transition-colors hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-white">
                      {node.data.label}
                    </div>
                    {node.data.description && (
                      <div className="mt-1 line-clamp-2 text-xs text-slate-400">
                        {node.data.description}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleCollect(id);
                    }}
                    className="shrink-0 rounded-md p-1 text-slate-500 opacity-0 transition-all group-hover:opacity-100 hover:bg-white/10 hover:text-red-400"
                  >
                    <X size={12} />
                  </button>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Compare Panel
// ---------------------------------------------------------------------------

export interface ComparePanelProps {
  compareFirst: string | null;
  compareSecond: string | null;
  comparePath: string[];
  nodeMap: Map<string, ExplorerNode>;
  onSelectNode: (nodeId: string) => void;
  onReset: () => void;
  onClose: () => void;
}

export function ComparePanel({
  compareFirst,
  compareSecond,
  comparePath,
  nodeMap,
  onSelectNode,
  onReset,
  onClose,
}: ComparePanelProps) {
  if (!compareFirst && !compareSecond) return null;

  const firstNode = compareFirst ? nodeMap.get(compareFirst) : null;
  const secondNode = compareSecond ? nodeMap.get(compareSecond) : null;

  return (
    <div className="pointer-events-auto absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Compare Nodes</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="text-xs text-slate-500 hover:text-red-400"
          >
            Reset
          </button>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/5 bg-white/5 p-3">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            First Node
          </div>
          {firstNode ? (
            <>
              <div className="text-sm font-medium text-white">
                {firstNode.data.label}
              </div>
              {firstNode.data.description && (
                <div className="mt-1 text-xs text-slate-400 line-clamp-3">
                  {firstNode.data.description}
                </div>
              )}
            </>
          ) : (
            <div className="text-xs text-slate-500">
              Click a node to select
            </div>
          )}
        </div>
        <div className="rounded-xl border border-white/5 bg-white/5 p-3">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Second Node
          </div>
          {secondNode ? (
            <>
              <div className="text-sm font-medium text-white">
                {secondNode.data.label}
              </div>
              {secondNode.data.description && (
                <div className="mt-1 text-xs text-slate-400 line-clamp-3">
                  {secondNode.data.description}
                </div>
              )}
            </>
          ) : (
            <div className="text-xs text-slate-500">
              Click a node to select
            </div>
          )}
        </div>
      </div>
      {comparePath.length > 0 && (
        <div className="mt-3 flex items-center gap-1 text-[10px] text-slate-500">
          <span>Path:</span>
          {comparePath.map((id, i) => {
            const node = nodeMap.get(id);
            if (!node) return null;
            return (
              <React.Fragment key={id}>
                {i > 0 && <span className="text-slate-600">›</span>}
                <button
                  onClick={() => onSelectNode(id)}
                  className="rounded px-1.5 py-0.5 text-slate-400 hover:bg-white/5 hover:text-cyan-300"
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
    </div>
  );
}

// ---------------------------------------------------------------------------
// Stats Panel
// ---------------------------------------------------------------------------

export interface StatsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  nodes: ExplorerNode[];
  edges: ExplorerEdge[];
  collectedCount: number;
  visitedCount: number;
}

export function StatsPanel({
  isOpen,
  onClose,
  nodes,
  edges,
  collectedCount,
  visitedCount,
}: StatsPanelProps) {
  if (!isOpen) return null;

  const depthCounts: Record<number, number> = {};
  for (const n of nodes) {
    depthCounts[n.depth] = (depthCounts[n.depth] || 0) + 1;
  }
  const maxDepth = Math.max(0, ...Object.keys(depthCounts).map(Number));
  const maxCount = Math.max(1, ...Object.values(depthCounts));

  const typeCounts: Record<string, number> = {};
  for (const n of nodes) {
    const type = n.data.type || "unknown";
    typeCounts[type] = (typeCounts[type] || 0) + 1;
  }

  const colors: Record<string, string> = {
    topic: "text-cyan-400",
    concept: "text-purple-400",
    example: "text-emerald-400",
    question: "text-amber-400",
    action: "text-rose-400",
    decision: "text-indigo-400",
    source: "text-slate-400",
    unknown: "text-slate-500",
  };

  return (
    <div className="pointer-events-auto absolute top-16 right-4 w-80 rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Statistics</h3>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
      <div className="space-y-4">
        {/* Overview */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/5 p-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Nodes
            </div>
            <div className="text-xl font-black text-white">{nodes.length}</div>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Edges
            </div>
            <div className="text-xl font-black text-white">{edges.length}</div>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Collected
            </div>
            <div className="text-xl font-black text-cyan-400">
              {collectedCount}
            </div>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Visited
            </div>
            <div className="text-xl font-black text-purple-400">
              {visitedCount}
            </div>
          </div>
        </div>

        {/* Depth Distribution */}
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            Depth Distribution
          </div>
          <div className="flex items-end gap-1 h-16">
            {Array.from({ length: maxDepth + 1 }, (_, i) => {
              const count = depthCounts[i] || 0;
              const height = (count / maxCount) * 100;
              return (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-1"
                >
                  <div
                    className="w-full bg-cyan-500/30 rounded-t-sm"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[8px] text-slate-500">{i}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Node Types */}
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            Node Types
          </div>
          <div className="space-y-1">
            {Object.entries(typeCounts).map(([type, count]) => (
              <div
                key={type}
                className="flex items-center justify-between text-xs"
              >
                <span className={`capitalize ${colors[type] || "text-slate-400"}`}>
                  {type}
                </span>
                <span className="text-slate-500">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Detail Panel
// ---------------------------------------------------------------------------

export interface DetailPanelProps {
  isOpen: boolean;
  onClose: () => void;
  focusNode: ExplorerNode | null;
  parentNode: ExplorerNode | null;
  childNodes: ExplorerNode[];
  descendantCount: number;
  visitedIds: Set<string>;
  collectedIds: Set<string>;
  onGoParent: () => void;
  onSelectNode: (nodeId: string) => void;
  onToggleCollect: (nodeId: string) => void;
  onShare: () => void;
  onDelete: (nodeId: string) => void;
  onExpand: (nodeId: string) => void;
}

export function DetailPanel({
  isOpen,
  onClose,
  focusNode,
  parentNode,
  childNodes,
  descendantCount,
  visitedIds,
  collectedIds,
  onGoParent,
  onSelectNode,
  onToggleCollect,
  onShare,
  onDelete,
  onExpand,
}: DetailPanelProps) {
  if (!isOpen || !focusNode) return null;

  return (
    <div className="pointer-events-auto absolute top-16 right-4 w-80 max-h-[calc(100vh-120px)] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl">
      <div className="sticky top-0 flex items-center justify-between border-b border-white/10 bg-slate-900/95 px-4 py-3 backdrop-blur-xl">
        <h3 className="text-sm font-semibold text-white">Node Details</h3>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
      <div className="p-4 space-y-4">
        {/* Header */}
        <div>
          <h4 className="text-base font-bold text-white">
            {focusNode.data.label}
          </h4>
          {focusNode.data.description && (
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {focusNode.data.description}
            </p>
          )}
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/5 p-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Depth
            </div>
            <div className="text-sm font-bold text-white">
              {focusNode.depth}
            </div>
          </div>
          <div className="rounded-xl bg-white/5 p-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Descendants
            </div>
            <div className="text-sm font-bold text-white">
              {descendantCount}
            </div>
          </div>
          <div className="rounded-xl bg-white/5 p-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Children
            </div>
            <div className="text-sm font-bold text-white">
              {childNodes.length}
            </div>
          </div>
          <div className="rounded-xl bg-white/5 p-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Status
            </div>
            <div className="text-sm font-bold text-white">
              {visitedIds.has(focusNode.id) ? "Visited" : "New"}
            </div>
          </div>
        </div>

        {/* Tags */}
        {focusNode.data.tags && focusNode.data.tags.length > 0 && (
          <div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Tags
            </div>
            <div className="flex flex-wrap gap-1">
              {focusNode.data.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Parent */}
        {parentNode && (
          <div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Parent
            </div>
            <button
              onClick={onGoParent}
              className="w-full rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-left text-sm text-white transition-colors hover:bg-white/10"
            >
              {parentNode.data.label}
            </button>
          </div>
        )}

        {/* Children */}
        {childNodes.length > 0 && (
          <div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Children
            </div>
            <div className="space-y-1">
              {childNodes.map((child) => (
                <button
                  key={child.id}
                  onClick={() => onSelectNode(child.id)}
                  className="w-full rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-left text-sm text-white transition-colors hover:bg-white/10"
                >
                  {child.data.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
          <button
            onClick={() => onToggleCollect(focusNode.id)}
            className={`flex items-center gap-1 rounded-xl px-3 py-2 text-xs transition-colors ${
              collectedIds.has(focusNode.id)
                ? "bg-cyan-500/20 text-cyan-300"
                : "bg-white/5 text-slate-400 hover:bg-white/10"
            }`}
          >
            <Save size={12} />
            {collectedIds.has(focusNode.id) ? "Saved" : "Save"}
          </button>
          <button
            onClick={() => onShare()}
            className="flex items-center gap-1 rounded-xl bg-white/5 px-3 py-2 text-xs text-slate-400 transition-colors hover:bg-white/10"
          >
            <Share2 size={12} />
            Share
          </button>
          <button
            onClick={() => onExpand(focusNode.id)}
            className="flex items-center gap-1 rounded-xl bg-white/5 px-3 py-2 text-xs text-slate-400 transition-colors hover:bg-white/10"
          >
            <MessageSquare size={12} />
            Expand
          </button>
          <button
            onClick={() => onDelete(focusNode.id)}
            className="flex items-center gap-1 rounded-xl bg-white/5 px-3 py-2 text-xs text-red-400 transition-colors hover:bg-red-500/10"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
