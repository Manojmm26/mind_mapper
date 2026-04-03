import React, { useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Camera,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Edit3,
  Eye,
  FileJson,
  Focus,
  GitCompare,
  HelpCircle,
  Image,
  Layers,
  Link,
  Loader2,
  Map as MapIcon,
  Maximize2,
  MessageSquare,
  Minimize2,
  PanelLeftClose,
  PanelLeftOpen,
  PenTool,
  Play,
  Plus,
  Save,
  Search,
  Share2,
  Sparkles,
  Target,
  Trash2,
  Undo2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useKnowledgeExplorer } from "./useKnowledgeExplorer";
import { drawNodeCard, drawEdge } from "./renderers";
import { hexToRgba } from "./utils";
import { COLORS, VIEWPORT, LERP_FACTORS, PARALLAX_SMOOTHING, ANIMATION_DURATION } from "./constants";
import { Easing } from "../../services/cameraService";

export function KnowledgeExplorer({ initialData, onExit }: { initialData?: any; onExit?: () => void }) {
  const {
    // State
    size,
    mode,
    setMode,
    view,
    setView,
    mapData,
    nodes,
    edges,
    focusId,
    setFocusId,
    hoveredId,
    setHoveredId,
    selectedId,
    visitedIds,
    collectedIds,
    setCollectedIds,
    showCollected,
    setShowCollected,
    sidebarOpen,
    setSidebarOpen,
    isGenerating,
    topicInput,
    setTopicInput,
    error,
    setError,
    fontsReady,
    searchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
    addChildOpen,
    setAddChildOpen,
    newChildLabel,
    setNewChildLabel,
    newChildDescription,
    setNewChildDescription,
    presentationMode,
    setPresentationMode,
    deleteConfirm,
    setDeleteConfirm,
    detailPanelOpen,
    setDetailPanelOpen,
    statsPanelOpen,
    setStatsPanelOpen,
    storyMode,
    setStoryMode,
    storyIndex,
    setStoryIndex,
    edgeCreation,
    setEdgeCreation,
    focusMode,
    setFocusMode,
    showOnboarding,
    setShowOnboarding,
    recentlyViewed,
    compareMode,
    setCompareMode,
    compareFirst,
    compareSecond,
    comparePath,
    minimapOpen,
    setMinimapOpen,
    helpOpen,
    setHelpOpen,
    navigationTrail,
    expandPrompt,
    setExpandPrompt,
    exportMenu,
    setExportMenu,
    undoStack,
    redoStack,

    // Refs
    wrapperRef,
    canvasRef,
    cameraRef,
    viewportRef,
    interactionRef,
    pointerRef,
    parallaxRef,
    targetParallaxRef,
    nodeAnimState,

    // Viewport
    viewport,
    setViewport,

    // Derived
    parentMap,
    childrenMap,
    nodeMap,
    descendantCounts,
    focusNode,
    childNodes,
    parentNode,
    focusBranchIds,
    searchResults,
    storyNodes,

    // Callbacks
    handleSelectNode,
    handleGoParent,
    handleGoHome,
    handleGenerateMap,
    startEditing,
    commitEdit,
    cancelEdit,
    handleToggleCollect,
    handleExpandNode,
    handleAddChild,
    handleDeleteNode,
    handleExportCollectedSummary,
    handleShare,
    handleExportJson,
    handleExportPng,
    handleExportSvg,
    handleUndo,
    handleRedo,
    advanceStory,
    rewindStory,
    handleStartEdgeCreation,
    handleCompleteEdgeCreation,
    dismissOnboarding,
    resetCompare,

    // Scene
    sceneNodes,

    // Pointer handlers
    getWorldPoint,
    getNodeAtPoint,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleWheel,
  } = useKnowledgeExplorer({ initialData, onExit });

  // ─── Canvas Rendering ──────────────────────────────────────────────────

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || size.width === 0 || size.height === 0) return;

    let frameId: number;

    const render = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(size.width * dpr);
      canvas.height = Math.floor(size.height * dpr);
      canvas.style.width = `${size.width}px`;
      canvas.style.height = `${size.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Background
      const bgGradient = ctx.createRadialGradient(
        size.width / 2,
        size.height / 2,
        0,
        size.width / 2,
        size.height / 2,
        size.width * 0.7,
      );
      bgGradient.addColorStop(0, COLORS.background.center);
      bgGradient.addColorStop(1, COLORS.background.edge);
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, size.width, size.height);

      // Grid dots
      ctx.fillStyle = COLORS.grid;
      const spacing = VIEWPORT.gridSpacing * viewport.scale;
      const offsetX = viewport.x % spacing;
      const offsetY = viewport.y % spacing;
      for (let x = offsetX; x < size.width; x += spacing) {
        for (let y = offsetY; y < size.height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.save();
      ctx.translate(viewport.x, viewport.y);
      ctx.scale(viewport.scale, viewport.scale);

      // Draw edges
      sceneNodes.forEach((target) => {
        const sourceEdge = edges.find((e) => e.target === target.id);
        if (sourceEdge) {
          const source = sceneNodes.find((sn) => sn.id === sourceEdge.source);
          if (source) drawEdge(ctx, source, target, sourceEdge.label);
        }
      });

      // Sort nodes by role for proper layering
      const roleOrder: Record<string, number> = {
        ancestor: 0,
        sibling: 1,
        parent: 2,
        overview: 3,
        child: 4,
        focus: 5,
      };

      const sortedNodes = [...sceneNodes].sort(
        (a, b) => (roleOrder[a.role] ?? 0) - (roleOrder[b.role] ?? 0),
      );

      const lerpFactor = mode === "tunnel" ? LERP_FACTORS.tunnel : LERP_FACTORS.default;

      for (const sn of sortedNodes) {
        const existing = nodeAnimState.current.get(sn.id);
        let x = existing?.x ?? sn.targetX;
        let y = existing?.y ?? sn.targetY;
        let scale = existing?.scale ?? sn.targetScale ?? 1;
        let opacity = existing?.opacity ?? sn.targetOpacity;

        const targetX = sn.targetX;
        const targetY = sn.targetY;
        const targetScale = sn.targetScale ?? 1;
        const targetOpacity = sn.targetOpacity;

        if (existing) {
          x += (targetX - x) * lerpFactor;
          y += (targetY - y) * lerpFactor;
          scale += (targetScale - scale) * lerpFactor;
          opacity += (targetOpacity - opacity) * lerpFactor;
          existing.x = x;
          existing.y = y;
          existing.scale = scale;
          existing.opacity = opacity;
          existing.targetX = targetX;
          existing.targetY = targetY;
          existing.targetScale = targetScale;
          existing.targetOpacity = targetOpacity;
        } else {
          nodeAnimState.current.set(sn.id, {
            x: targetX,
            y: targetY,
            scale: targetScale,
            opacity: targetOpacity,
            targetX,
            targetY,
            targetScale,
            targetOpacity,
          });
        }

        if (mode === "tunnel") {
          const px = targetParallaxRef.current;
          parallaxRef.current.x += (px.x - parallaxRef.current.x) * PARALLAX_SMOOTHING;
          parallaxRef.current.y += (px.y - parallaxRef.current.y) * PARALLAX_SMOOTHING;
        }

        if (mode === "tunnel" && sn.role !== "focus") {
          const depthFactor =
            sn.role === "parent" || sn.role === "ancestor" ? -0.3 : 0.2;
          x += parallaxRef.current.x * depthFactor;
          y += parallaxRef.current.y * depthFactor;
        }

        let extraOpacity = opacity;
        if (mode === "tunnel") {
          const depthFade =
            sn.role === "ancestor"
              ? 0.4
              : sn.role === "parent"
                ? 0.7
                : sn.role === "child"
                  ? 0.9
                  : 1;
          extraOpacity = opacity * depthFade;
        }

        if (focusBranchIds && !focusBranchIds.has(sn.id)) {
          extraOpacity = extraOpacity * 0.15;
        }

        // Performance culling
        const nodeScreenX = (x + sn.node.width / 2) * viewport.scale + viewport.x;
        const nodeScreenY = (y + sn.node.height / 2) * viewport.scale + viewport.y;
        const margin = VIEWPORT.viewportMargin;
        if (
          nodeScreenX < -margin ||
          nodeScreenX > size.width + margin ||
          nodeScreenY < -margin ||
          nodeScreenY > size.height + margin
        ) {
          continue;
        }

        drawNodeCard(
          ctx,
          sn.node,
          x,
          y,
          scale,
          extraOpacity,
          sn.role,
          sn.id === hoveredId,
          sn.id === selectedId,
          visitedIds.has(sn.id),
          sn.descendantCount,
        );
      }

      // Cleanup removed nodes from animation state
      const sceneIds = new Set(sceneNodes.map((sn) => sn.id));
      for (const id of nodeAnimState.current.keys()) {
        if (!sceneIds.has(id)) nodeAnimState.current.delete(id);
      }

      ctx.restore();

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameId);
  }, [
    viewport,
    sceneNodes,
    edges,
    hoveredId,
    selectedId,
    visitedIds,
    size,
    mode,
    focusBranchIds,
    nodeAnimState,
    parallaxRef,
    targetParallaxRef,
  ]);

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-slate-950 text-slate-100">
      {/* Top Bar */}
      <div className="relative z-20 flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur-xl">
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
            <span className="text-sm font-semibold tracking-wide">Knowledge Explorer</span>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-1 rounded-xl bg-slate-800/60 p-1">
          <button
            onClick={() => setMode("atlas")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              mode === "atlas" ? "bg-cyan-500/20 text-cyan-300" : "text-slate-400 hover:text-white"
            }`}
          >
            <Target size={14} className="mr-1 inline" />
            Atlas
          </button>
          <button
            onClick={() => setMode("tunnel")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              mode === "tunnel" ? "bg-cyan-500/20 text-cyan-300" : "text-slate-400 hover:text-white"
            }`}
          >
            <Eye size={14} className="mr-1 inline" />
            Tunnel
          </button>
          <button
            onClick={() => setMode("overview")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              mode === "overview" ? "bg-cyan-500/20 text-cyan-300" : "text-slate-400 hover:text-white"
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
              {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
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
            onClick={() => setPresentationMode((prev) => !prev)}
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
              onClick={() => setDetailPanelOpen((prev) => !prev)}
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
            onClick={() => setStatsPanelOpen((prev) => !prev)}
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
              setStoryMode((prev) => !prev);
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
              onClick={() => setFocusMode((prev) => !prev)}
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
            onClick={() => setMinimapOpen((prev) => !prev)}
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
            onClick={() => setHelpOpen((prev) => !prev)}
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
              <span className="text-[10px] text-slate-500 shrink-0">
                Trail:
              </span>
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
                          navigationTrail[
                            navigationTrail.length - arr.length + i
                          ],
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
            {sidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
          </button>
        </div>
      </div>

      {/* Main Content */}
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
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

          {!fontsReady && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
              <div className="text-center">
                <Loader2 size={32} className="mx-auto animate-spin text-cyan-400" />
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
                    title={collectedIds.has(focusNode.id) ? "Unsave node" : "Save node"}
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
                    {childNodes.length} branch{childNodes.length > 1 ? "es" : ""}
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
                    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity },
                  );
                  cameraRef.current.fitToBounds(bounds, size.width, size.height, {
                    duration: ANIMATION_DURATION.normal,
                    easing: Easing.easeInOutCubic,
                  });
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

          {/* Collected Nodes Floating Panel */}
          {showCollected && collectedIds.size > 0 && (
            <div className="pointer-events-auto absolute bottom-16 right-4 w-80 max-h-[50vh] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <h3 className="text-sm font-semibold text-white">Collected Nodes</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportCollectedSummary}
                    className="text-xs text-cyan-400 hover:text-cyan-300"
                    title="Export as Markdown"
                  >
                    Export
                  </button>
                  <button
                    onClick={() => setCollectedIds(new Set())}
                    className="text-xs text-slate-500 hover:text-red-400"
                  >
                    Clear all
                  </button>
                  <button
                    onClick={() => setShowCollected(false)}
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
                          handleSelectNode(id);
                          setShowCollected(false);
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
                              handleToggleCollect(id);
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
          )}

          {/* Search Panel */}
          {searchOpen && (
            <div className="pointer-events-auto absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl overflow-hidden">
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                <Search size={18} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search nodes by label, description, or tag..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
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
                        handleSelectNode(node.id);
                        setSearchOpen(false);
                        setSearchQuery("");
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
          )}

          {/* Add Child Node Panel */}
          {addChildOpen && focusNode && (
            <div className="pointer-events-auto absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white">
                  Add child to "{focusNode.data.label}"
                </h3>
                <button
                  onClick={() => {
                    setAddChildOpen(false);
                    setNewChildLabel("");
                    setNewChildDescription("");
                  }}
                  className="text-slate-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="mb-1 block text-xs text-slate-500">Label</label>
                  <input
                    type="text"
                    value={newChildLabel}
                    onChange={(e) => setNewChildLabel(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddChild()}
                    placeholder="New concept name..."
                    className="w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/50"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-slate-500">Description (optional)</label>
                  <textarea
                    value={newChildDescription}
                    onChange={(e) => setNewChildDescription(e.target.value)}
                    placeholder="Brief explanation..."
                    rows={2}
                    className="w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/50"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setAddChildOpen(false);
                      setNewChildLabel("");
                      setNewChildDescription("");
                    }}
                    className="rounded-xl px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddChild}
                    disabled={!newChildLabel.trim()}
                    className="flex items-center gap-2 rounded-xl bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-500/30 disabled:opacity-40"
                  >
                    <Plus size={14} />
                    Add Node
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Compare Mode Panel */}
          {compareMode && (
            <div className="pointer-events-auto absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-md rounded-2xl border border-indigo-500/20 bg-slate-900/95 shadow-2xl backdrop-blur-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-white">Compare Nodes</h3>
                <button
                  onClick={() => {
                    resetCompare();
                    setCompareMode(false);
                  }}
                  className="text-slate-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
              {!compareFirst ? (
                <p className="text-xs text-slate-400">Click the first node to compare.</p>
              ) : !compareSecond ? (
                <div>
                  <p className="text-xs text-slate-400 mb-2">
                    First: <span className="text-indigo-300 font-medium">{nodeMap.get(compareFirst)?.data.label}</span>
                  </p>
                  <p className="text-xs text-slate-500">Now click the second node.</p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-indigo-300">{nodeMap.get(compareFirst)?.data.label}</span>
                    <span className="text-slate-500">→</span>
                    <span className="text-xs font-medium text-indigo-300">{nodeMap.get(compareSecond)?.data.label}</span>
                  </div>
                  {comparePath.length > 0 ? (
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-2">
                        Path ({comparePath.length - 1} steps)
                      </p>
                      <div className="flex flex-wrap items-center gap-1">
                        {comparePath.map((id, i) => {
                          const node = nodeMap.get(id);
                          return (
                            <React.Fragment key={id}>
                              {i > 0 && <span className="text-slate-600 text-[10px]">›</span>}
                              <button
                                onClick={() => handleSelectNode(id)}
                                className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-slate-300 hover:bg-white/10"
                              >
                                {node?.data.label}
                              </button>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500">No path found between these nodes.</p>
                  )}
                  <button
                    onClick={resetCompare}
                    className="mt-3 text-xs text-indigo-400 hover:text-indigo-300"
                  >
                    Compare different nodes
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Stats Dashboard Panel */}
          {statsPanelOpen && (
            <div className="pointer-events-auto absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <h3 className="text-sm font-semibold text-white">Map Analytics</h3>
                <button
                  onClick={() => setStatsPanelOpen(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-4 gap-3 mb-5">
                  <div className="rounded-xl bg-white/5 p-3 text-center">
                    <p className="text-2xl font-bold text-white">{nodes.length}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Total Nodes</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 text-center">
                    <p className="text-2xl font-bold text-white">{edges.length}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Connections</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 text-center">
                    <p className="text-2xl font-bold text-cyan-300">{collectedIds.size}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Collected</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 text-center">
                    <p className="text-2xl font-bold text-amber-300">{visitedIds.size}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Visited</p>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Depth Distribution</h4>
                  <div className="flex items-end gap-1 h-16">
                    {(() => {
                      const depthCounts: Record<number, number> = {};
                      nodes.forEach((n) => {
                        depthCounts[n.depth] = (depthCounts[n.depth] || 0) + 1;
                      });
                      const maxDepth = Math.max(0, ...Object.keys(depthCounts).map(Number));
                      const maxCount = Math.max(1, ...Object.values(depthCounts));
                      return Array.from({ length: maxDepth + 1 }, (_, i) => {
                        const count = depthCounts[i] || 0;
                        const height = (count / maxCount) * 100;
                        return (
                          <div key={i} className="flex-1 flex flex-col items-center justify-end">
                            <span className="text-[9px] text-slate-500 mb-1">{count}</span>
                            <div className="w-full rounded-t bg-cyan-500/30 transition-all" style={{ height: `${Math.max(4, height)}%` }} />
                            <span className="text-[9px] text-slate-600 mt-1">{i}</span>
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Node Types</h4>
                  <div className="flex flex-wrap gap-2">
                    {(() => {
                      const typeCounts: Record<string, number> = {};
                      nodes.forEach((n) => {
                        const type = n.data.type || "unknown";
                        typeCounts[type] = (typeCounts[type] || 0) + 1;
                      });
                      const colors: Record<string, string> = {
                        topic: "bg-blue-500/20 text-blue-300",
                        concept: "bg-purple-500/20 text-purple-300",
                        example: "bg-green-500/20 text-green-300",
                        action: "bg-amber-500/20 text-amber-300",
                        question: "bg-pink-500/20 text-pink-300",
                        decision: "bg-cyan-500/20 text-cyan-300",
                        source: "bg-slate-500/20 text-slate-300",
                        unknown: "bg-gray-500/20 text-gray-300",
                      };
                      return Object.entries(typeCounts)
                        .sort((a, b) => b[1] - a[1])
                        .map(([type, count]) => (
                          <span key={type} className={`rounded-full px-3 py-1 text-xs font-medium ${colors[type] || colors.unknown}`}>
                            {type}: {count}
                          </span>
                        ));
                    })()}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Exploration Progress</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Visited</span>
                      <span className="text-slate-300">
                        {visitedIds.size} / {nodes.length} ({nodes.length > 0 ? Math.round((visitedIds.size / nodes.length) * 100) : 0}%)
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-cyan-500/40 transition-all" style={{ width: `${nodes.length > 0 ? (visitedIds.size / nodes.length) * 100 : 0}%` }} />
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Collected</span>
                      <span className="text-slate-300">
                        {collectedIds.size} / {nodes.length} ({nodes.length > 0 ? Math.round((collectedIds.size / nodes.length) * 100) : 0}%)
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-amber-500/40 transition-all" style={{ width: `${nodes.length > 0 ? (collectedIds.size / nodes.length) * 100 : 0}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Node Detail Panel */}
          {detailPanelOpen && focusNode && (
            <div className="pointer-events-auto absolute top-0 right-0 z-30 w-96 h-full border-l border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl overflow-y-auto">
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-slate-900/95 px-5 py-4 backdrop-blur-xl">
                <h3 className="text-sm font-semibold text-white">Node Details</h3>
                <button onClick={() => setDetailPanelOpen(false)} className="text-slate-400 hover:text-white">
                  <X size={18} />
                </button>
              </div>

              <div className="p-5 space-y-5">
                <div>
                  <h2 className="text-lg font-bold text-white">{focusNode.data.label}</h2>
                  {focusNode.data.description && (
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{focusNode.data.description}</p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {focusNode.data.type && (
                    <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300">
                      {focusNode.data.type}
                    </span>
                  )}
                  {focusNode.data.importance && (
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      focusNode.data.importance === "high" ? "bg-red-500/15 text-red-300" :
                      focusNode.data.importance === "medium" ? "bg-amber-500/15 text-amber-300" : "bg-green-500/15 text-green-300"
                    }`}>
                      {focusNode.data.importance}
                    </span>
                  )}
                  {focusNode.data.confidence && (
                    <span className="rounded-full bg-cyan-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                      {focusNode.data.confidence}
                    </span>
                  )}
                  <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-semibold text-slate-400">
                    Depth {focusNode.depth}
                  </span>
                </div>

                {focusNode.data.tags && focusNode.data.tags.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Tags</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {focusNode.data.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {focusNode.data.nextStep && (
                  <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3">
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-400">Next Step</h4>
                    <p className="text-sm text-slate-300">{focusNode.data.nextStep}</p>
                  </div>
                )}

                {focusNode.data.sourceHint && (
                  <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Source</h4>
                    <p className="text-xs text-slate-400">{focusNode.data.sourceHint}</p>
                  </div>
                )}

                {parentNode && (
                  <div>
                    <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Parent</h4>
                    <button
                      onClick={() => handleSelectNode(parentNode.id)}
                      className="w-full rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-left text-sm text-slate-300 transition-colors hover:bg-white/10"
                    >
                      {parentNode.data.label}
                    </button>
                  </div>
                )}

                {childNodes.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Children ({childNodes.length})</h4>
                    <div className="space-y-1">
                      {childNodes.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => handleSelectNode(child.id)}
                          className="w-full rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-left text-sm text-slate-300 transition-colors hover:bg-white/10"
                        >
                          <div className="font-medium">{child.data.label}</div>
                          {child.data.description && (
                            <div className="mt-0.5 line-clamp-1 text-xs text-slate-500">{child.data.description}</div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => startEditing(focusNode.id)}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10"
                    >
                      <Edit3 size={12} />
                      Edit
                    </button>
                    <button
                      onClick={() => setExpandPrompt({ open: true, nodeId: focusNode.id, input: "", isGenerating: false })}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10"
                    >
                      <Sparkles size={12} />
                      Expand AI
                    </button>
                    <button
                      onClick={() => handleToggleCollect(focusNode.id)}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                        collectedIds.has(focusNode.id) ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300" : "border-white/5 bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      <Save size={12} />
                      {collectedIds.has(focusNode.id) ? "Saved" : "Save"}
                    </button>
                    <button
                      onClick={() => setAddChildOpen(true)}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10"
                    >
                      <Plus size={12} />
                      Add Child
                    </button>
                    {focusNode.depth > 0 && (
                      <button
                        onClick={() => setDeleteConfirm(focusNode.id)}
                        className="col-span-2 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2 text-xs font-medium text-red-300 transition-colors hover:bg-red-500/10"
                      >
                        <Trash2 size={12} />
                        Delete Node
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Welcome Onboarding */}
          {showOnboarding && (
            <div className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
              <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">
                      <Sparkles size={20} className="text-cyan-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Welcome to Knowledge Explorer</h2>
                  </div>
                  <button onClick={dismissOnboarding} className="text-slate-400 hover:text-white">
                    <X size={20} />
                  </button>
                </div>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Explore knowledge maps with an atlas-first approach. Click nodes to navigate, collect important ideas, and let AI expand any branch.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { key: "1 / 2 / 3", label: "Atlas / Tunnel / Overview" },
                    { key: "C", label: "Collect / save a node" },
                    { key: "N", label: "Add a child node" },
                    { key: "E", label: "Edit focused node" },
                    { key: "/", label: "Search all nodes" },
                    { key: "T", label: "Story mode walkthrough" },
                    { key: "X", label: "Focus mode (dim others)" },
                    { key: "S", label: "Map analytics" },
                  ].map((shortcut) => (
                    <div key={shortcut.key} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                      <kbd className="shrink-0 rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-cyan-300">
                        {shortcut.key}
                      </kbd>
                      <span className="text-xs text-slate-400">{shortcut.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      setShowOnboarding(false);
                      if (typeof window !== "undefined") {
                        localStorage.setItem("ke_onboarding_seen", "true");
                      }
                    }}
                    className="text-xs text-slate-500 hover:text-slate-300"
                  >
                    Don't show again
                  </button>
                  <button
                    onClick={dismissOnboarding}
                    className="rounded-xl bg-cyan-500/20 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/30"
                  >
                    Start Exploring
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Story Mode Controls */}
          {storyMode && storyNodes.length > 0 && (
            <div className="pointer-events-auto absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-2xl border border-violet-500/20 bg-slate-900/95 px-5 py-3 shadow-2xl backdrop-blur-xl">
              <button onClick={rewindStory} className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white">
                <ChevronsLeft size={16} />
              </button>
              <div className="text-center min-w-[120px]">
                <p className="text-[10px] uppercase tracking-wider text-violet-400">Story {storyIndex + 1} / {storyNodes.length}</p>
                <p className="text-sm font-medium text-white truncate max-w-[200px]">
                  {nodeMap.get(storyNodes[storyIndex])?.data.label}
                </p>
              </div>
              <button onClick={advanceStory} className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white">
                <ChevronsRight size={16} />
              </button>
              <button onClick={() => setStoryMode(false)} className="ml-2 text-slate-500 hover:text-white">
                <X size={14} />
              </button>
            </div>
          )}

          {/* Edge Creation Hint */}
          {edgeCreation && (
            <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-300 backdrop-blur-xl">
              Click another node to create an edge. Press Esc to cancel.
            </div>
          )}

          {/* Mini-Map */}
          {minimapOpen && nodes.length > 10 && (
            <div className="pointer-events-auto absolute bottom-20 right-4 w-48 h-36 rounded-xl border border-white/10 bg-slate-900/90 shadow-xl backdrop-blur-xl overflow-hidden">
              <canvas
                ref={(canvas) => {
                  if (!canvas || nodes.length === 0) return;
                  const ctx = canvas.getContext("2d");
                  if (!ctx) return;

                  const width = 192;
                  const height = 144;
                  canvas.width = width * 2;
                  canvas.height = height * 2;
                  canvas.style.width = `${width}px`;
                  canvas.style.height = `${height}px`;
                  ctx.scale(2, 2);

                  const bounds = nodes.reduce(
                    (acc, n) => ({
                      minX: Math.min(acc.minX, n.x),
                      minY: Math.min(acc.minY, n.y),
                      maxX: Math.max(acc.maxX, n.x + n.width),
                      maxY: Math.max(acc.maxY, n.y + n.height),
                    }),
                    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity },
                  );

                  const padding = 8;
                  const bw = bounds.maxX - bounds.minX || 1;
                  const bh = bounds.maxY - bounds.minY || 1;
                  const scale = Math.min((width - padding * 2) / bw, (height - padding * 2) / bh);
                  const ox = (width - bw * scale) / 2 - bounds.minX * scale;
                  const oy = (height - bh * scale) / 2 - bounds.minY * scale;

                  ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
                  ctx.fillRect(0, 0, width, height);

                  ctx.strokeStyle = "rgba(148, 163, 184, 0.2)";
                  ctx.lineWidth = 0.5;
                  edges.forEach((e) => {
                    const s = nodes.find((n) => n.id === e.source);
                    const t = nodes.find((n) => n.id === e.target);
                    if (!s || !t) return;
                    ctx.beginPath();
                    ctx.moveTo((s.x + s.width / 2) * scale + ox, (s.y + s.height / 2) * scale + oy);
                    ctx.lineTo((t.x + t.width / 2) * scale + ox, (t.y + t.height / 2) * scale + oy);
                    ctx.stroke();
                  });

                  nodes.forEach((n) => {
                    ctx.fillStyle =
                      n.id === focusId ? "rgba(34, 211, 238, 0.8)" :
                      collectedIds.has(n.id) ? "rgba(251, 191, 36, 0.6)" : "rgba(148, 163, 184, 0.4)";
                    ctx.fillRect(n.x * scale + ox, n.y * scale + oy, Math.max(2, n.width * scale), Math.max(2, n.height * scale));
                  });

                  const vx = (-viewport.x / viewport.scale) * scale + ox;
                  const vy = (-viewport.y / viewport.scale) * scale + oy;
                  const vw = (size.width / viewport.scale) * scale;
                  const vh = (size.height / viewport.scale) * scale;
                  ctx.strokeStyle = "rgba(34, 211, 238, 0.6)";
                  ctx.lineWidth = 1;
                  ctx.strokeRect(vx, vy, vw, vh);
                }}
                className="w-full h-full cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 192;
                  const y = ((e.clientY - rect.top) / rect.height) * 144;

                  const bounds = nodes.reduce(
                    (acc, n) => ({
                      minX: Math.min(acc.minX, n.x),
                      minY: Math.min(acc.minY, n.y),
                      maxX: Math.max(acc.maxX, n.x + n.width),
                      maxY: Math.max(acc.maxY, n.y + n.height),
                    }),
                    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity },
                  );

                  const padding = 8;
                  const bw = bounds.maxX - bounds.minX || 1;
                  const bh = bounds.maxY - bounds.minY || 1;
                  const scale = Math.min((192 - padding * 2) / bw, (144 - padding * 2) / bh);
                  const ox = (192 - bw * scale) / 2 - bounds.minX * scale;
                  const oy = (144 - bh * scale) / 2 - bounds.minY * scale;

                  const worldX = (x - ox) / scale;
                  const worldY = (y - oy) / scale;

                  const hit = nodes.find(
                    (n) => worldX >= n.x && worldX <= n.x + n.width && worldY >= n.y && worldY <= n.y + n.height,
                  );

                  if (hit) {
                    handleSelectNode(hit.id);
                  } else {
                    if (cameraRef.current) {
                      cameraRef.current.focusOnPoint(worldX, worldY, size.width, size.height, viewport.scale, {
                        duration: 400,
                        easing: Easing.easeOutExpo,
                      });
                    }
                  }
                }}
              />
            </div>
          )}

          {/* Keyboard Shortcut Help Modal */}
          {helpOpen && (
            <div className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-white">Keyboard Shortcuts</h3>
                  <button onClick={() => setHelpOpen(false)} className="text-slate-400 hover:text-white">
                    <X size={18} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                  {[
                    ["1 / 2 / 3", "Atlas / Tunnel / Overview"],
                    ["Arrow keys", "Navigate branches"],
                    ["Esc", "Go home / exit mode"],
                    ["E", "Edit focused node"],
                    ["C", "Collect / save node"],
                    ["N", "Add child node"],
                    ["Delete", "Delete node"],
                    ["/", "Search nodes"],
                    ["D", "Node details panel"],
                    ["S", "Stats dashboard"],
                    ["T", "Story mode"],
                    ["X", "Focus mode"],
                    ["P", "Presentation mode"],
                    ["B", "Compare two nodes"],
                    ["M", "Toggle mini-map"],
                    ["Ctrl+Z", "Undo"],
                    ["Ctrl+Shift+Z", "Redo"],
                    ["?", "This help"],
                  ].map(([key, desc]) => (
                    <div key={key} className="flex items-center gap-2 py-1">
                      <kbd className="shrink-0 rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-cyan-300">
                        {key}
                      </kbd>
                      <span className="text-slate-400">{desc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-center text-[10px] text-slate-500">
                  Press <kbd className="rounded bg-white/10 px-1 py-0.5 font-mono text-slate-400">?</kbd> to toggle this help
                </div>
              </div>
            </div>
          )}

          {/* Delete Confirmation */}
          {deleteConfirm && (
            <div className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div className="w-full max-w-sm rounded-2xl border border-red-500/20 bg-slate-900 p-6 shadow-2xl">
                <h3 className="text-sm font-semibold text-white mb-2">Delete Node</h3>
                <p className="text-xs text-slate-400 mb-4">
                  This will remove <span className="text-red-300 font-medium">{nodeMap.get(deleteConfirm)?.data.label}</span> and all its descendants. This action can be undone.
                </p>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    className="rounded-xl px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDeleteNode(deleteConfirm)}
                    className="rounded-xl bg-red-500/20 px-4 py-2 text-sm font-medium text-red-300 transition-colors hover:bg-red-500/30"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Presentation Mode Overlay */}
          {presentationMode && focusNode && (
            <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl">
              <div className="max-w-2xl w-full px-8 text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-400">
                  <Sparkles size={10} />
                  Presentation Mode
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{focusNode.data.label}</h2>
                {focusNode.data.description && (
                  <p className="text-lg leading-relaxed text-slate-300 mb-8">{focusNode.data.description}</p>
                )}
                {focusNode.data.tags && focusNode.data.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {focusNode.data.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {focusNode.data.nextStep && (
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 mb-8">
                    <p className="text-xs text-slate-500 mb-1">Next Step</p>
                    <p className="text-sm text-slate-300">{focusNode.data.nextStep}</p>
                  </div>
                )}
                <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
                  <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-400">→</kbd> for next child</span>
                  <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-400">←</kbd> for parent</span>
                  <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-400">Esc</kbd> to exit</span>
                </div>
              </div>
            </div>
          )}

          {/* Mode indicator */}
          <div className="pointer-events-none absolute top-4 right-4 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 backdrop-blur-xl">
            {mode === "atlas" ? "Atlas Mode" : mode === "tunnel" ? "Tunnel Mode" : "Overview Mode"}
          </div>

          {/* Topic Suggestions */}
          {!focusNode && !isGenerating && (
            <div className="pointer-events-auto absolute top-20 left-1/2 -translate-x-1/2 max-w-xl w-full px-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-xl">
                <h3 className="text-sm font-semibold text-white mb-3">Start exploring</h3>
                <p className="text-xs text-slate-400 mb-4">Type any topic above, or try one of these suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "React vs Vue",
                    "Space Exploration",
                    "Web3 Architecture",
                    "Climate Solutions",
                    "Design Systems",
                    "Blockchain Fundamentals",
                    "Cybersecurity Basics",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setTopicInput(suggestion);
                        setTimeout(() => handleGenerateMap(), 100);
                      }}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all hover:bg-cyan-500/20 hover:border-cyan-500/30 hover:text-cyan-300"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-[10px] text-slate-500">
                    💡 Tip: Atlas (1) for focused exploration, Tunnel (2) for deep dives with parallax, Overview (3) for the full map. Press C to collect, N to add child, Delete to remove, P for presentation mode, / to search, D for details, S for stats, T for story mode, X for focus mode, B to compare, M for mini-map.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Generation Loading Overlay */}
          {isGenerating && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm">
              <div className="text-center">
                <div className="relative mx-auto w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20" />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 animate-spin" />
                </div>
                <p className="mt-4 text-sm font-medium text-slate-300">Generating knowledge map...</p>
                <p className="mt-1 text-xs text-slate-500">
                  AI is analyzing "{topicInput.slice(0, 40)}{topicInput.length > 40 ? "..." : ""}"
                </p>
              </div>
            </div>
          )}

          {/* Error Toast */}
          {error && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300 backdrop-blur-xl">
              {error}
              <button onClick={() => setError(null)} className="ml-2 text-red-400 hover:text-red-300">
                <X size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <div className="relative z-10 w-80 border-l border-white/10 bg-slate-900/95 backdrop-blur-xl">
            <div className="flex h-full flex-col">
              <div className="border-b border-white/10 px-4 py-3">
                <h2 className="text-sm font-semibold text-white">
                  {focusNode ? focusNode.data.label : "Knowledge Map"}
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  {nodes.length} nodes · {edges.length} connections
                </p>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-3">
                {view === "edit" && focusNode?.isEditing ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Edit Node</h3>
                      <button onClick={cancelEdit} className="text-slate-500 hover:text-white">
                        <X size={14} />
                      </button>
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-slate-500">Label</label>
                      <input
                        type="text"
                        value={focusNode.editLabel ?? focusNode.data.label}
                        onChange={(e) =>
                          setNodes((prev) =>
                            prev.map((n) => (n.id === focusNode.id ? { ...n, editLabel: e.target.value } : n)),
                          )
                        }
                        className="w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-cyan-500/50"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-slate-500">Description</label>
                      <textarea
                        value={focusNode.editDescription ?? focusNode.data.description ?? ""}
                        onChange={(e) =>
                          setNodes((prev) =>
                            prev.map((n) => (n.id === focusNode.id ? { ...n, editDescription: e.target.value } : n)),
                          )
                        }
                        rows={4}
                        className="w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-cyan-500/50"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => commitEdit(focusNode.id)}
                        className="flex-1 rounded-lg bg-cyan-500/20 py-2 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-500/30"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="flex-1 rounded-lg bg-white/5 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/10"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {childNodes.length > 0 && (
                      <div>
                        <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          <ArrowRight size={12} />
                          Branches ({childNodes.length})
                        </h3>
                        <div className="space-y-1">
                          {childNodes.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => handleSelectNode(child.id)}
                              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                                child.id === focusId ? "bg-cyan-500/15 text-cyan-300" : "text-slate-300 hover:bg-white/5"
                              }`}
                            >
                              <div className="font-medium">{child.data.label}</div>
                              {child.data.description && (
                                <div className="mt-0.5 line-clamp-2 text-xs text-slate-500">{child.data.description}</div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {collectedIds.size > 0 && (
                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            <Save size={12} />
                            Collected ({collectedIds.size})
                          </h3>
                          <button
                            onClick={() => setCollectedIds(new Set())}
                            className="text-[10px] text-slate-500 hover:text-red-400"
                          >
                            Clear all
                          </button>
                        </div>
                        <div className="space-y-1">
                          {Array.from(collectedIds).map((id) => {
                            const node = nodeMap.get(id);
                            if (!node) return null;
                            return (
                              <button
                                key={id}
                                onClick={() => handleSelectNode(id)}
                                className="group flex w-full items-start justify-between rounded-lg px-3 py-2 text-left text-sm text-slate-300 transition-colors hover:bg-white/5"
                              >
                                <span className="font-medium">{node.data.label}</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleToggleCollect(id);
                                  }}
                                  className="opacity-0 transition-opacity group-hover:opacity-100 text-slate-500 hover:text-red-400"
                                >
                                  <X size={12} />
                                </button>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div className="rounded-xl border border-white/5 bg-slate-800/40 p-3">
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Shortcuts</h3>
                      <div className="space-y-1 text-[11px] text-slate-400">
                        <div className="flex justify-between">
                          <span>Atlas / Tunnel / Overview</span>
                          <span className="font-mono text-slate-500">1 / 2 / 3</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Collect node</span>
                          <span className="font-mono text-slate-500">C</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Navigate</span>
                          <span className="font-mono text-slate-500">Arrow keys</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Edit node</span>
                          <span className="font-mono text-slate-500">E</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Go home</span>
                          <span className="font-mono text-slate-500">Esc</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Expand Prompt Modal */}
      {expandPrompt.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">
                Expand: {nodeMap.get(expandPrompt.nodeId ?? "")?.data.label}
              </h3>
              <button
                onClick={() => setExpandPrompt((prev) => ({ ...prev, open: false }))}
                className="text-slate-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mb-3 text-xs text-slate-400">
              Ask AI to expand this branch with more detail, examples, or sub-topics.
            </p>
            <textarea
              value={expandPrompt.input}
              onChange={(e) => setExpandPrompt((prev) => ({ ...prev, input: e.target.value }))}
              placeholder="e.g., Show me practical examples, Add implementation details, What are common pitfalls?"
              rows={3}
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/50"
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setExpandPrompt((prev) => ({ ...prev, open: false }))}
                className="rounded-xl px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                onClick={() => expandPrompt.nodeId && handleExpandNode(expandPrompt.nodeId, expandPrompt.input)}
                disabled={expandPrompt.isGenerating || !expandPrompt.input.trim()}
                className="flex items-center gap-2 rounded-xl bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-500/30 disabled:opacity-40"
              >
                {expandPrompt.isGenerating ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Sparkles size={16} />
                )}
                Expand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
