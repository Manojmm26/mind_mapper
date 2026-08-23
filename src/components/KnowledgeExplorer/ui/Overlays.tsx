import React from "react";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Keyboard,
  Loader2,
  Maximize2,
  Minimize2,
  Play,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import { ExplorerNode } from "../types";

// ---------------------------------------------------------------------------
// Onboarding Overlay
// ---------------------------------------------------------------------------

export interface OnboardingOverlayProps {
  onDismiss: () => void;
}

export function OnboardingOverlay({ onDismiss }: OnboardingOverlayProps) {
  return (
    <div className="pointer-events-auto absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/95 p-8 shadow-2xl backdrop-blur-xl">
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={20} />
        </button>
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-500 shadow-lg">
            <BookOpen size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-white">
            Welcome to Knowledge Explorer
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Navigate your mind map in 3D space. Pan, zoom, and explore nodes
            with smooth animations.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-left">
            <div className="rounded-xl bg-white/5 p-3">
              <div className="text-xs font-bold text-cyan-400">Atlas Mode</div>
              <div className="mt-1 text-[10px] text-slate-500">
                View the entire map from above
              </div>
            </div>
            <div className="rounded-xl bg-white/5 p-3">
              <div className="text-xs font-bold text-purple-400">Tunnel Mode</div>
              <div className="mt-1 text-[10px] text-slate-500">
                Dive deep into branches
              </div>
            </div>
          </div>
          <button
            onClick={onDismiss}
            className="mt-6 w-full rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-bold text-white shadow-lg transition-smooth hover:bg-cyan-400 active:scale-[0.98]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Story Mode Controls
// ---------------------------------------------------------------------------

export interface StoryModeControlsProps {
  storyNodes: string[];
  storyIndex: number;
  nodeMap: Map<string, ExplorerNode>;
  onAdvance: () => void;
  onRewind: () => void;
  onClose: () => void;
}

export function StoryModeControls({
  storyNodes,
  storyIndex,
  nodeMap,
  onAdvance,
  onRewind,
  onClose,
}: StoryModeControlsProps) {
  if (storyNodes.length === 0) return null;

  const currentNode = nodeMap.get(storyNodes[storyIndex]);

  return (
    <div className="pointer-events-auto absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
      <button
        onClick={onRewind}
        disabled={storyIndex === 0}
        className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30"
      >
        <ChevronLeft size={18} />
      </button>
      <div className="flex items-center gap-2">
        <BookOpen size={16} className="text-violet-400" />
        <span className="text-xs font-medium text-slate-300">
          {currentNode?.data.label || "Story Node"}
        </span>
        <span className="text-[10px] text-slate-500">
          {storyIndex + 1} / {storyNodes.length}
        </span>
      </div>
      <button
        onClick={onAdvance}
        disabled={storyIndex >= storyNodes.length - 1}
        className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30"
      >
        <ChevronRight size={18} />
      </button>
      <button
        onClick={onClose}
        className="ml-2 rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X size={16} />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Edge Creation Hint
// ---------------------------------------------------------------------------

export interface EdgeCreationHintProps {
  onClose: () => void;
}

export function EdgeCreationHint({ onClose }: EdgeCreationHintProps) {
  return (
    <div className="pointer-events-auto absolute top-20 left-1/2 -translate-x-1/2 rounded-xl border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-medium text-orange-300 backdrop-blur-xl">
      Click a target node to connect
      <button
        onClick={onClose}
        className="ml-2 text-orange-400 hover:text-orange-200"
      >
        <X size={12} className="inline" />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mini-Map
// ---------------------------------------------------------------------------

export interface MiniMapProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  nodes: ExplorerNode[];
  viewport: { x: number; y: number; scale: number };
  size: { width: number; height: number };
  onClose: () => void;
}

export function MiniMap({
  canvasRef,
  nodes,
  viewport,
  size,
  onClose,
}: MiniMapProps) {
  const minimapCanvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = minimapCanvasRef.current;
    if (!canvas || nodes.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 192;
    const height = 144;
    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);

    const bounds = nodes.reduce(
      (acc, n) => ({
        minX: Math.min(acc.minX, n.x),
        minY: Math.min(acc.minY, n.y),
        maxX: Math.max(acc.maxX, n.x + n.width),
        maxY: Math.max(acc.maxY, n.y + n.height),
      }),
      { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }
    );

    const padding = 8;
    const bw = bounds.maxX - bounds.minX || 1;
    const bh = bounds.maxY - bounds.minY || 1;
    const scale = Math.min(
      (width - padding * 2) / bw,
      (height - padding * 2) / bh
    );
    const ox = (width - bw * scale) / 2 - bounds.minX * scale;
    const oy = (height - bh * scale) / 2 - bounds.minY * scale;

    // Draw nodes
    ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
    for (const n of nodes) {
      ctx.fillRect(
        n.x * scale + ox,
        n.y * scale + oy,
        Math.max(2, n.width * scale),
        Math.max(2, n.height * scale)
      );
    }

    // Draw viewport
    const vx = (-viewport.x / viewport.scale) * scale + ox;
    const vy = (-viewport.y / viewport.scale) * scale + oy;
    const vw = (size.width / viewport.scale) * scale;
    const vh = (size.height / viewport.scale) * scale;

    ctx.strokeStyle = "rgba(6, 182, 212, 0.8)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(vx, vy, vw, vh);
  }, [nodes, viewport, size]);

  return (
    <div className="pointer-events-auto absolute bottom-4 right-4 rounded-xl border border-white/10 bg-slate-900/90 p-2 shadow-2xl backdrop-blur-xl">
      <canvas
        ref={minimapCanvasRef}
        className="block rounded-lg"
        style={{ width: 192, height: 144 }}
      />
      <button
        onClick={onClose}
        className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-400 shadow-md hover:text-white"
      >
        <X size={12} />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Help Modal
// ---------------------------------------------------------------------------

export interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpModal({ isOpen, onClose }: HelpModalProps) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: "Scroll", action: "Zoom in/out" },
    { key: "Drag", action: "Pan canvas" },
    { key: "Click", action: "Select node" },
    { key: "Double Click", action: "Focus node" },
    { key: "P", action: "Presentation mode" },
    { key: "N", action: "Add child node" },
    { key: "/", action: "Search nodes" },
    { key: "D", action: "Node details" },
    { key: "S", action: "Stats dashboard" },
    { key: "T", action: "Story mode" },
    { key: "X", action: "Focus mode" },
    { key: "B", action: "Compare nodes" },
    { key: "M", action: "Toggle mini-map" },
    { key: "?", action: "Keyboard shortcuts" },
    { key: "Ctrl+Z", action: "Undo" },
    { key: "Ctrl+Shift+Z", action: "Redo" },
  ];

  return (
    <div className="pointer-events-auto absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={20} />
        </button>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-500">
            <Keyboard size={20} className="text-white" />
          </div>
          <h3 className="text-lg font-bold text-white">Keyboard Shortcuts</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {shortcuts.map((s) => (
            <div
              key={s.key}
              className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2"
            >
              <span className="text-xs text-slate-400">{s.action}</span>
              <kbd className="rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-cyan-300">
                {s.key}
              </kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Delete Confirmation
// ---------------------------------------------------------------------------

export interface DeleteConfirmationProps {
  nodeId: string | null;
  nodeLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteConfirmation({
  nodeId,
  nodeLabel,
  onConfirm,
  onCancel,
}: DeleteConfirmationProps) {
  if (!nodeId) return null;

  return (
    <div className="pointer-events-auto absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/20 text-red-400">
            <Trash2 size={20} />
          </div>
          <h3 className="text-lg font-bold text-white">Delete Node</h3>
        </div>
        <p className="text-sm text-slate-400 mb-6">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-white">"{nodeLabel}"</span>? This
          action cannot be undone.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-slate-300 transition-colors hover:bg-white/10"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-2xl bg-red-500 px-4 py-3 text-sm font-bold text-white shadow-lg transition-smooth hover:bg-red-400 active:scale-[0.98]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Presentation Mode Overlay
// ---------------------------------------------------------------------------

export interface PresentationModeOverlayProps {
  isActive: boolean;
  onExit: () => void;
}

export function PresentationModeOverlay({
  isActive,
  onExit,
}: PresentationModeOverlayProps) {
  if (!isActive) return null;

  return (
    <div className="pointer-events-auto absolute top-4 right-4 z-50 flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs font-medium text-amber-300 backdrop-blur-xl">
      <Play size={14} />
      <span>Presentation Mode</span>
      <button
        onClick={onExit}
        className="ml-2 text-amber-400 hover:text-amber-200"
      >
        <X size={12} />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mode Indicator
// ---------------------------------------------------------------------------

export interface ModeIndicatorProps {
  mode: "atlas" | "tunnel" | "overview";
}

export function ModeIndicator({ mode }: ModeIndicatorProps) {
  return (
    <div className="pointer-events-none absolute top-4 left-4 rounded-xl bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 backdrop-blur-xl">
      {mode} mode
    </div>
  );
}

// ---------------------------------------------------------------------------
// Topic Suggestions
// ---------------------------------------------------------------------------

export interface TopicSuggestionsProps {
  suggestions: string[];
  onSelect: (topic: string) => void;
}

export function TopicSuggestions({
  suggestions,
  onSelect,
}: TopicSuggestionsProps) {
  return (
    <div className="pointer-events-auto absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-2.5 shadow-xl backdrop-blur-xl">
      <span className="text-xs text-slate-500">Try:</span>
      {suggestions.map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          className="rounded-lg px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:bg-white/10 hover:text-cyan-300"
        >
          {s}
        </button>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Generation Loading Overlay
// ---------------------------------------------------------------------------

export interface GenerationLoadingOverlayProps {
  isGenerating: boolean;
  topic: string;
}

export function GenerationLoadingOverlay({
  isGenerating,
  topic,
}: GenerationLoadingOverlayProps) {
  if (!isGenerating) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl">
        <Loader2 size={32} className="animate-spin text-cyan-400" />
        <div className="text-center">
          <p className="text-sm font-semibold text-white">
            Exploring "{topic}"...
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Generating mind map and layout
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Error Toast
// ---------------------------------------------------------------------------

export interface ErrorToastProps {
  message: string | null;
  onClose: () => void;
}

export function ErrorToast({ message, onClose }: ErrorToastProps) {
  if (!message) return null;

  return (
    <div className="pointer-events-auto absolute top-20 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 shadow-xl backdrop-blur-xl">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
        <X size={16} />
      </div>
      <p className="text-sm text-red-300">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 rounded-lg p-1 text-red-400 transition-colors hover:bg-white/10 hover:text-red-300"
      >
        <X size={14} />
      </button>
    </div>
  );
}
