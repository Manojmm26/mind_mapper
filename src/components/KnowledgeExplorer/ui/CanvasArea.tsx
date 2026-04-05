import React from "react";
import {
  ArrowLeft,
  ChevronUp,
  Edit3,
  Loader2,
  Maximize2,
  MessageSquare,
  Save,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { ExplorerNode } from "../types";
import { CameraController, Easing } from "../../../services/cameraService";
import { ANIMATION_DURATION } from "../constants";

export interface CanvasAreaProps {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  cameraRef: React.RefObject<CameraController | null>;
  handlePointerDown: (e: React.PointerEvent) => void;
  handlePointerMove: (e: React.PointerEvent) => void;
  handlePointerUp: (e: React.PointerEvent) => void;
  handleWheel: (e: React.WheelEvent) => void;
  fontsReady: boolean;
  focusNode: ExplorerNode | null;
  mode: "atlas" | "tunnel" | "overview";
  collectedIds: Set<string>;
  handleToggleCollect: (nodeId: string) => void;
  startEditing: (nodeId: string) => void;
  setExpandPrompt: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      nodeId: string | null;
      input: string;
      isGenerating: boolean;
    }>
  >;
  parentNode: ExplorerNode | null;
  childNodes: ExplorerNode[];
  handleGoParent: () => void;
  handleSelectNode: (nodeId: string) => void;
  showCollected: boolean;
  setShowCollected: React.Dispatch<React.SetStateAction<boolean>>;
  nodes: ExplorerNode[];
  size: { width: number; height: number };
  handleGoHome: () => void;
  focusId: string | null;
}

export function CanvasArea({
  wrapperRef,
  canvasRef,
  cameraRef,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  handleWheel,
  fontsReady,
  focusNode,
  mode,
  collectedIds,
  handleToggleCollect,
  startEditing,
  setExpandPrompt,
  parentNode,
  childNodes,
  handleGoParent,
  handleSelectNode,
  showCollected,
  setShowCollected,
  nodes,
  size,
  handleGoHome,
  focusId,
}: CanvasAreaProps) {
  return (
    <div className="relative flex flex-1 overflow-hidden">
      {/* Canvas */}
      <div
        ref={wrapperRef}
        className="relative flex-1 overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />

        {!fontsReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
            <div className="text-center">
              <Loader2
                size={32}
                className="mx-auto animate-spin text-cyan-400"
              />
              <p className="mt-4 text-sm font-medium text-slate-400">
                Preparing typography engine...
              </p>
            </div>
          </div>
        )}

        {/* Focus Node Info Overlay */}
        {focusNode && mode === "atlas" && (
          <div className="pointer-events-none absolute bottom-6 left-6 max-w-sm rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {focusNode.data.label}
                </h3>
                {focusNode.data.description && (
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {focusNode.data.description.length > 120
                      ? `${focusNode.data.description.slice(0, 120)}...`
                      : focusNode.data.description}
                  </p>
                )}
              </div>
              <div className="flex gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleCollect(focusNode.id);
                  }}
                  className={`pointer-events-auto rounded-lg p-1.5 transition-colors ${
                    collectedIds.has(focusNode.id)
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                  title={
                    collectedIds.has(focusNode.id) ? "Unsave node" : "Save node"
                  }
                >
                  <Save size={14} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    startEditing(focusNode.id);
                  }}
                  className="pointer-events-auto rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Edit3 size={14} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandPrompt({
                      open: true,
                      nodeId: focusNode.id,
                      input: "",
                      isGenerating: false,
                    });
                  }}
                  className="pointer-events-auto rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <MessageSquare size={14} />
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-slate-500">
              {parentNode && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGoParent();
                  }}
                  className="pointer-events-auto flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 transition-colors hover:bg-white/10"
                >
                  <ArrowLeft size={10} />
                  {parentNode.data.label}
                </button>
              )}
              {childNodes.length > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectNode(childNodes[0].id);
                  }}
                  className="pointer-events-auto flex items-center gap-1 rounded-md bg-cyan-500/10 px-2 py-1 text-cyan-400 transition-colors hover:bg-cyan-500/20"
                >
                  <ArrowRight size={10} />
                  {childNodes.length} branch
                  {childNodes.length > 1 ? "es" : ""}
                </button>
              )}
              {collectedIds.size > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCollected((prev) => !prev);
                  }}
                  className={`pointer-events-auto flex items-center gap-1 rounded-md px-2 py-1 transition-colors ${
                    showCollected
                      ? "bg-amber-500/20 text-amber-300"
                      : "bg-white/5 text-slate-400 hover:bg-white/10"
                  }`}
                >
                  <Save size={10} />
                  {collectedIds.size}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Bottom Action Bar */}
        <div className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl">
          <button
            onClick={() => {
              if (cameraRef.current) {
                cameraRef.current.zoomBy(0.8, size.width / 2, size.height / 2, {
                  duration: ANIMATION_DURATION.fast,
                  easing: Easing.easeOutExpo,
                });
              }
            }}
            className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            title="Zoom out"
          >
            <ZoomOut size={16} />
          </button>
          <button
            onClick={() => {
              if (cameraRef.current) {
                cameraRef.current.zoomBy(1.25, size.width / 2, size.height / 2, {
                  duration: ANIMATION_DURATION.fast,
                  easing: Easing.easeOutExpo,
                });
              }
            }}
            className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            title="Zoom in"
          >
            <ZoomIn size={16} />
          </button>
          <div className="mx-1 h-6 w-px bg-white/10" />
          <button
            onClick={() => {
              if (cameraRef.current && nodes.length > 0) {
                const bounds = nodes.reduce(
                  (acc, n) => ({
                    minX: Math.min(acc.minX, n.x),
                    minY: Math.min(acc.minY, n.y),
                    maxX: Math.max(acc.maxX, n.x + n.width),
                    maxY: Math.max(acc.maxY, n.y + n.height),
                  }),
                  {
                    minX: Infinity,
                    minY: Infinity,
                    maxX: -Infinity,
                    maxY: -Infinity,
                  },
                );
                cameraRef.current.fitToBounds(
                  bounds,
                  size.width,
                  size.height,
                  {
                    duration: ANIMATION_DURATION.normal,
                    easing: Easing.easeInOutCubic,
                  },
                );
              }
            }}
            className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            title="Fit view"
          >
            <Maximize2 size={16} />
          </button>
          <div className="mx-1 h-6 w-px bg-white/10" />
          <button
            onClick={handleGoHome}
            className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            title="Go to root"
          >
            <ArrowLeft size={16} />
          </button>
          {focusId && (
            <>
              <button
                onClick={handleGoParent}
                className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                title="Go to parent"
              >
                <ChevronUp size={16} />
              </button>
              <button
                onClick={() => handleToggleCollect(focusId)}
                className={`rounded-xl p-2 transition-colors ${
                  collectedIds.has(focusId)
                    ? "bg-cyan-500/20 text-cyan-300"
                    : "text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
                title={collectedIds.has(focusId) ? "Unsave" : "Save node"}
              >
                <Save size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
