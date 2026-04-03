import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CameraController,
  Easing,
  type ViewportState,
} from "../../services/cameraService";
import {
  generateMindMapFromTopic,
  type EdgeData,
  type MindMapData,
  type NodeData,
} from "../../services/llmService";
import { layoutPretextMindMap } from "../../services/pretextMapLayout";
import { PRETEXT_PORTFOLIO_MAP } from "../../pretextPortfolioMap";
import {
  PRETEXT_TYPOGRAPHY,
  measureTextBlock,
} from "../../services/pretextTextService";
import {
  ExplorerMode,
  ExplorerView,
  ExplorerNode,
  ExplorerEdge,
  SceneNode,
  PointerState,
  Size,
  ExportMenuState,
  ExpandPromptState,
  KnowledgeExplorerProps,
} from "./types";
import {
  buildAtlasScene,
  buildTunnelScene,
  buildOverviewScene,
} from "./sceneBuilders";
import { buildDescendantCountMap, getAncestorChain } from "./utils";
import {
  ANIMATION_DURATION,
  PERFORMANCE,
  STORAGE_KEYS,
  LERP_FACTORS,
  PARALLAX_SMOOTHING,
} from "./constants";

interface UseKnowledgeExplorerReturn {
  // State
  size: Size;
  mode: ExplorerMode;
  setMode: (mode: ExplorerMode) => void;
  view: ExplorerView;
  setView: (view: ExplorerView) => void;
  mapData: MindMapData;
  setMapData: React.Dispatch<React.SetStateAction<MindMapData>>;
  nodes: ExplorerNode[];
  edges: ExplorerEdge[];
  focusId: string | null;
  setFocusId: (id: string | null) => void;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  visitedIds: Set<string>;
  setVisitedIds: React.Dispatch<React.SetStateAction<Set<string>>>;
  collectedIds: Set<string>;
  setCollectedIds: React.Dispatch<React.SetStateAction<Set<string>>>;
  showCollected: boolean;
  setShowCollected: (show: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isGenerating: boolean;
  topicInput: string;
  setTopicInput: (input: string) => void;
  error: string | null;
  setError: (error: string | null) => void;
  fontsReady: boolean;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  addChildOpen: boolean;
  setAddChildOpen: (open: boolean) => void;
  newChildLabel: string;
  setNewChildLabel: (label: string) => void;
  newChildDescription: string;
  setNewChildDescription: (desc: string) => void;
  undoStack: MindMapData[];
  redoStack: MindMapData[];
  presentationMode: boolean;
  setPresentationMode: (mode: boolean) => void;
  deleteConfirm: string | null;
  setDeleteConfirm: (id: string | null) => void;
  detailPanelOpen: boolean;
  setDetailPanelOpen: (open: boolean) => void;
  statsPanelOpen: boolean;
  setStatsPanelOpen: (open: boolean) => void;
  storyMode: boolean;
  setStoryMode: (mode: boolean) => void;
  storyIndex: number;
  setStoryIndex: (index: number) => void;
  edgeCreation: string | null;
  setEdgeCreation: (id: string | null) => void;
  focusMode: boolean;
  setFocusMode: (mode: boolean) => void;
  showOnboarding: boolean;
  setShowOnboarding: (show: boolean) => void;
  recentlyViewed: string[];
  setRecentlyViewed: React.Dispatch<React.SetStateAction<string[]>>;
  compareMode: boolean;
  setCompareMode: (mode: boolean) => void;
  compareFirst: string | null;
  compareSecond: string | null;
  comparePath: string[];
  minimapOpen: boolean;
  setMinimapOpen: (open: boolean) => void;
  helpOpen: boolean;
  setHelpOpen: (open: boolean) => void;
  navigationTrail: string[];
  expandPrompt: ExpandPromptState;
  setExpandPrompt: React.Dispatch<React.SetStateAction<ExpandPromptState>>;
  exportMenu: ExportMenuState;
  setExportMenu: React.Dispatch<React.SetStateAction<ExportMenuState>>;

  // Refs
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  cameraRef: React.RefObject<CameraController | null>;
  viewportRef: React.RefObject<ViewportState>;
  interactionRef: React.RefObject<{
    type: "pan" | "drag";
    pointerId: number;
    startX: number;
    startY: number;
    originViewport?: ViewportState;
    originNodePos?: { x: number; y: number };
    nodeId?: string;
  } | null>;
  pointerRef: React.RefObject<PointerState>;
  parallaxRef: React.RefObject<{ x: number; y: number }>;
  targetParallaxRef: React.RefObject<{ x: number; y: number }>;
  nodeAnimState: React.RefObject<
    Map<
      string,
      {
        x: number;
        y: number;
        scale: number;
        opacity: number;
        targetX: number;
        targetY: number;
        targetScale: number;
        targetOpacity: number;
      }
    >
  >;

  // Viewport
  viewport: ViewportState;
  setViewport: React.Dispatch<React.SetStateAction<ViewportState>>;

  // Derived
  parentMap: Record<string, string | undefined>;
  childrenMap: Record<string, string[]>;
  nodeMap: Map<string, ExplorerNode>;
  descendantCounts: Record<string, number>;
  focusNode: ExplorerNode | null;
  childNodes: ExplorerNode[];
  parentNode: ExplorerNode | null;
  focusBranchIds: Set<string> | null;
  searchResults: ExplorerNode[];
  storyNodes: string[];

  // Callbacks
  handleSelectNode: (nodeId: string) => void;
  handleGoParent: () => void;
  handleGoHome: () => void;
  handleGenerateMap: () => Promise<void>;
  startEditing: (nodeId: string) => void;
  commitEdit: (nodeId: string) => void;
  cancelEdit: () => void;
  handleToggleCollect: (nodeId: string) => void;
  handleExpandNode: (nodeId: string, prompt: string) => Promise<void>;
  handleAddChild: () => void;
  handleDeleteNode: (nodeId: string) => void;
  handleExportCollectedSummary: () => void;
  handleShare: () => void;
  handleExportJson: () => void;
  handleExportPng: () => Promise<void>;
  handleExportSvg: () => void;
  handleUndo: () => void;
  handleRedo: () => void;
  advanceStory: () => void;
  rewindStory: () => void;
  handleStartEdgeCreation: (nodeId: string) => void;
  handleCompleteEdgeCreation: (targetId: string) => void;
  dismissOnboarding: () => void;
  resetCompare: () => void;

  // Scene
  sceneNodes: SceneNode[];

  // Pointer handlers
  getWorldPoint: (clientX: number, clientY: number) => { x: number; y: number };
  getNodeAtPoint: (worldX: number, worldY: number) => SceneNode | null;
  handlePointerDown: (e: React.PointerEvent) => void;
  handlePointerMove: (e: React.PointerEvent) => void;
  handlePointerUp: (e: React.PointerEvent) => void;
  handleWheel: (e: React.WheelEvent) => void;
}

export function useKnowledgeExplorer({
  initialData,
  onExit,
}: KnowledgeExplorerProps): UseKnowledgeExplorerReturn {
  // ─── State ───────────────────────────────────────────────────────────────

  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const [mode, setMode] = useState<ExplorerMode>("atlas");
  const [view, setView] = useState<ExplorerView>("explore");
  const [mapData, setMapData] = useState<MindMapData>(
    initialData || PRETEXT_PORTFOLIO_MAP,
  );
  const [nodes, setNodes] = useState<ExplorerNode[]>([]);
  const [edges, setEdges] = useState<ExplorerEdge[]>([]);
  const [focusId, setFocusId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visitedIds, setVisitedIds] = useState<Set<string>>(new Set());
  const [collectedIds, setCollectedIds] = useState<Set<string>>(new Set());
  const [showCollected, setShowCollected] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [topicInput, setTopicInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [fontsReady, setFontsReady] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [addChildOpen, setAddChildOpen] = useState(false);
  const [newChildLabel, setNewChildLabel] = useState("");
  const [newChildDescription, setNewChildDescription] = useState("");
  const [undoStack, setUndoStack] = useState<MindMapData[]>([]);
  const [redoStack, setRedoStack] = useState<MindMapData[]>([]);
  const [presentationMode, setPresentationMode] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [detailPanelOpen, setDetailPanelOpen] = useState(false);
  const [statsPanelOpen, setStatsPanelOpen] = useState(false);
  const [storyMode, setStoryMode] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const [edgeCreation, setEdgeCreation] = useState<string | null>(null);
  const [focusMode, setFocusMode] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [compareMode, setCompareMode] = useState(false);
  const [compareFirst, setCompareFirst] = useState<string | null>(null);
  const [compareSecond, setCompareSecond] = useState<string | null>(null);
  const [comparePath, setComparePath] = useState<string[]>([]);
  const [minimapOpen, setMinimapOpen] = useState(true);
  const [helpOpen, setHelpOpen] = useState(false);
  const [navigationTrail, setNavigationTrail] = useState<string[]>([]);
  const [expandPrompt, setExpandPrompt] = useState<ExpandPromptState>({
    open: false,
    nodeId: null,
    input: "",
    isGenerating: false,
  });
  const [exportMenu, setExportMenu] = useState<ExportMenuState>({
    open: false,
    x: 0,
    y: 0,
  });

  // ─── Refs ────────────────────────────────────────────────────────────────

  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cameraRef = useRef<CameraController>(null);
  const viewportRef = useRef<ViewportState>({ x: 0, y: 0, scale: 1 });
  const interactionRef = useRef<{
    type: "pan" | "drag";
    pointerId: number;
    startX: number;
    startY: number;
    originViewport?: ViewportState;
    originNodePos?: { x: number; y: number };
    nodeId?: string;
  } | null>(null);
  const pointerRef = useRef<PointerState>({ x: 0, y: 0 });
  const parallaxRef = useRef({ x: 0, y: 0 });
  const targetParallaxRef = useRef({ x: 0, y: 0 });
  const nodeAnimState = useRef<
    Map<
      string,
      {
        x: number;
        y: number;
        scale: number;
        opacity: number;
        targetX: number;
        targetY: number;
        targetScale: number;
        targetOpacity: number;
      }
    >
  >(new Map());

  // ─── Viewport State ──────────────────────────────────────────────────────

  const [viewport, setViewport] = useState<ViewportState>({
    x: 0,
    y: 0,
    scale: 1,
  });

  useEffect(() => {
    viewportRef.current = viewport;
  }, [viewport]);

  // ─── Scene State ─────────────────────────────────────────────────────────

  const [sceneNodes, setSceneNodes] = useState<SceneNode[]>([]);

  // ─── Derived Maps ────────────────────────────────────────────────────────

  const { parentMap, childrenMap } = useMemo(() => {
    const pm: Record<string, string | undefined> = {};
    const cm: Record<string, string[]> = {};
    edges.forEach((e) => {
      pm[e.target] = e.source;
      cm[e.source] = cm[e.source] || [];
      cm[e.source].push(e.target);
    });
    return { parentMap: pm, childrenMap: cm };
  }, [edges]);

  const nodeMap = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);
  const descendantCounts = useMemo(
    () => buildDescendantCountMap(nodes, edges),
    [nodes, edges],
  );

  // ─── Focus Node Data ─────────────────────────────────────────────────────

  const focusNode = focusId ? nodeMap.get(focusId) || null : null;
  const childNodes = focusId
    ? ((childrenMap[focusId] || [])
        .map((id) => nodeMap.get(id))
        .filter(Boolean) as ExplorerNode[])
    : [];
  const parentNode =
    focusId && parentMap[focusId]
      ? nodeMap.get(parentMap[focusId]!) || null
      : null;

  // ─── Focus Branch IDs ────────────────────────────────────────────────────

  const focusBranchIds = useMemo(() => {
    if (!focusMode || !focusId) return null;
    const ids = new Set<string>();
    const collectBranch = (id: string) => {
      ids.add(id);
      (childrenMap[id] || []).forEach(collectBranch);
    };
    let current: string | undefined = focusId;
    while (current) {
      ids.add(current);
      current = parentMap[current];
    }
    collectBranch(focusId);
    return ids;
  }, [focusMode, focusId, childrenMap, parentMap]);

  // ─── Undo / Redo ─────────────────────────────────────────────────────────

  const pushUndoState = useCallback(() => {
    setUndoStack((prev) => [...prev.slice(-PERFORMANCE.maxUndoStack), mapData]);
    setRedoStack([]);
  }, [mapData]);

  const handleUndo = useCallback(() => {
    if (undoStack.length === 0) return;
    const previous = undoStack[undoStack.length - 1];
    setRedoStack((prev) => [...prev, mapData]);
    setUndoStack((prev) => prev.slice(0, -1));
    setMapData(previous);
  }, [undoStack, mapData]);

  const handleRedo = useCallback(() => {
    if (redoStack.length === 0) return;
    const next = redoStack[redoStack.length - 1];
    setUndoStack((prev) => [...prev, mapData]);
    setRedoStack((prev) => prev.slice(0, -1));
    setMapData(next);
  }, [redoStack, mapData]);

  // ─── Font Loading ────────────────────────────────────────────────────────

  useEffect(() => {
    if (typeof document === "undefined" || !("fonts" in document)) {
      setFontsReady(true);
      return;
    }

    let cancelled = false;
    Promise.all([
      document.fonts.load(PRETEXT_TYPOGRAPHY.heroTitle.font, "Pretext"),
      document.fonts.load(PRETEXT_TYPOGRAPHY.title.font, "Canvas"),
      document.fonts.load(PRETEXT_TYPOGRAPHY.body.font, "portfolio"),
      document.fonts.ready,
    ])
      .then(() => {
        if (!cancelled) setFontsReady(true);
      })
      .catch(() => {
        if (!cancelled) setFontsReady(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // ─── Onboarding ──────────────────────────────────────────────────────────

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasVisited = localStorage.getItem(STORAGE_KEYS.onboarding);
    if (!hasVisited) setShowOnboarding(true);
  }, []);

  const dismissOnboarding = useCallback(() => {
    setShowOnboarding(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.onboarding, "true");
    }
  }, []);

  // ─── Initialize Nodes from MapData ───────────────────────────────────────

  useEffect(() => {
    if (!fontsReady) return;

    const layout = layoutPretextMindMap(mapData);
    const explorerNodes: ExplorerNode[] = layout.nodes.map((n) => ({
      ...n,
      isEditing: false,
      isExpanded: false,
      childCount: (childrenMap[n.id] || []).length,
    }));
    setNodes(explorerNodes);
    setEdges(layout.edges);

    if (!focusId && explorerNodes.length > 0) {
      setFocusId(explorerNodes[0].id);
    }
  }, [mapData, fontsReady]);

  // ─── Build Scene ─────────────────────────────────────────────────────────

  useEffect(() => {
    if (nodes.length === 0) return;

    let newScene: SceneNode[];

    if (mode === "atlas") {
      newScene = buildAtlasScene(
        nodes,
        edges,
        focusId,
        parentMap,
        childrenMap,
        size.width,
        size.height,
      );
    } else if (mode === "tunnel") {
      newScene = buildTunnelScene(
        nodes,
        edges,
        focusId,
        parentMap,
        childrenMap,
        size.width,
        size.height,
      );
    } else {
      newScene = buildOverviewScene(nodes, edges, size.width, size.height);
    }

    setSceneNodes(newScene);
  }, [mode, focusId, nodes, edges, size]);

  // ─── Camera Controller ───────────────────────────────────────────────────

  useEffect(() => {
    if (size.width === 0 || size.height === 0) return;

    cameraRef.current = new CameraController(
      { x: 0, y: 0, scale: 1 },
      (state) => setViewport(state),
    );

    if (nodes.length > 0) {
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
        easing: Easing.easeOutExpo,
      });
    }
  }, [size.width, size.height]);

  // ─── Resize Observer ─────────────────────────────────────────────────────

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (rect) setSize({ width: rect.width, height: rect.height });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ─── Navigation Helpers ──────────────────────────────────────────────────

  const addToTrail = useCallback((nodeId: string) => {
    setNavigationTrail((prev) => {
      const last = prev[prev.length - 1];
      if (last === nodeId) return prev;
      return [...prev.slice(-PERFORMANCE.maxTrailLength), nodeId];
    });
  }, []);

  const addToRecentlyViewed = useCallback((nodeId: string) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== nodeId);
      return [nodeId, ...filtered].slice(0, PERFORMANCE.maxRecentlyViewed);
    });
  }, []);

  const handleSelectNode = useCallback(
    (nodeId: string) => {
      setFocusId(nodeId);
      setSelectedId(nodeId);
      setVisitedIds((prev) => new Set(prev).add(nodeId));
      addToTrail(nodeId);
      addToRecentlyViewed(nodeId);

      if (compareMode) {
        if (!compareFirst) {
          setCompareFirst(nodeId);
        } else if (nodeId !== compareFirst) {
          const path = findPathBetween(compareFirst, nodeId);
          setComparePath(path);
          setCompareSecond(nodeId);
        }
      }
    },
    [compareMode, compareFirst, addToTrail, addToRecentlyViewed],
  );

  const handleGoParent = useCallback(() => {
    if (!focusId) return;
    const parentId = parentMap[focusId];
    if (parentId) handleSelectNode(parentId);
  }, [focusId, parentMap, handleSelectNode]);

  const handleGoHome = useCallback(() => {
    const rootId = nodes.find((n) => n.depth === 0)?.id;
    if (rootId) handleSelectNode(rootId);
  }, [nodes, handleSelectNode]);

  // ─── BFS Path Finding ────────────────────────────────────────────────────

  const findPathBetween = useCallback(
    (startId: string, endId: string): string[] => {
      if (startId === endId) return [startId];
      const visited = new Set<string>();
      const parent: Record<string, string | null> = {};
      const queue: string[] = [startId];
      visited.add(startId);

      while (queue.length > 0) {
        const current = queue.shift()!;
        if (current === endId) {
          const path: string[] = [];
          let node: string | null = endId;
          while (node) {
            path.unshift(node);
            node = parent[node];
          }
          return path;
        }

        (childrenMap[current] || []).forEach((child) => {
          if (!visited.has(child)) {
            visited.add(child);
            parent[child] = current;
            queue.push(child);
          }
        });

        const p = parentMap[current];
        if (p && !visited.has(p)) {
          visited.add(p);
          parent[p] = current;
          queue.push(p);
        }
      }

      return [];
    },
    [childrenMap, parentMap],
  );

  const resetCompare = useCallback(() => {
    setCompareFirst(null);
    setCompareSecond(null);
    setComparePath([]);
  }, []);

  // ─── Topic Generation ────────────────────────────────────────────────────

  const handleGenerateMap = useCallback(async () => {
    if (!topicInput.trim() || isGenerating) return;

    setIsGenerating(true);
    setError(null);

    try {
      const data = await generateMindMapFromTopic(topicInput.trim());
      setMapData(data);
      setFocusId(data.nodes[0]?.id || null);
      setVisitedIds(new Set());
      setCollectedIds(new Set());
      setNavigationTrail([]);
      setRecentlyViewed([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate map");
    } finally {
      setIsGenerating(false);
    }
  }, [topicInput, isGenerating]);

  // ─── Inline Editing ──────────────────────────────────────────────────────

  const startEditing = useCallback(
    (nodeId: string) => {
      const node = nodeMap.get(nodeId);
      if (!node) return;

      setNodes((prev) =>
        prev.map((n) =>
          n.id === nodeId
            ? {
                ...n,
                isEditing: true,
                editLabel: n.data.label,
                editDescription: n.data.description || "",
              }
            : n,
        ),
      );
      setView("edit");
    },
    [nodeMap],
  );

  const commitEdit = useCallback((nodeId: string) => {
    setNodes((prev) => {
      const node = prev.find((n) => n.id === nodeId);
      if (!node || !node.isEditing) return prev;

      const updated = {
        ...node,
        data: {
          ...node.data,
          label: node.editLabel || node.data.label,
          description: node.editDescription || node.data.description,
        },
        isEditing: false,
        editLabel: undefined,
        editDescription: undefined,
      };

      const titleStyle =
        updated.depth === 0
          ? PRETEXT_TYPOGRAPHY.heroTitle
          : PRETEXT_TYPOGRAPHY.title;
      const titleBlock = measureTextBlock(
        updated.data.label,
        titleStyle,
        updated.width - 40,
      );
      const descBlock = updated.data.description
        ? measureTextBlock(
            updated.data.description,
            PRETEXT_TYPOGRAPHY.body,
            updated.width - 40,
          )
        : null;

      let newHeight = 36 + titleBlock.height;
      if (updated.badges.length > 0) newHeight += 36;
      if (descBlock && descBlock.lineCount > 0)
        newHeight += 14 + descBlock.height;
      if (updated.tags.length > 0) newHeight += 36;

      return prev.map((n) =>
        n.id === nodeId
          ? {
              ...updated,
              height: newHeight,
              title: titleBlock,
              description: descBlock,
            }
          : n,
      );
    });
    setView("explore");
  }, []);

  const cancelEdit = useCallback(() => {
    setNodes((prev) =>
      prev.map((n) =>
        n.isEditing
          ? {
              ...n,
              isEditing: false,
              editLabel: undefined,
              editDescription: undefined,
            }
          : n,
      ),
    );
    setView("explore");
  }, []);

  // ─── Collect / Save ──────────────────────────────────────────────────────

  const handleToggleCollect = useCallback((nodeId: string) => {
    setCollectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) next.delete(nodeId);
      else next.add(nodeId);
      return next;
    });
  }, []);

  // ─── AI Expansion ────────────────────────────────────────────────────────

  const handleExpandNode = useCallback(
    async (nodeId: string, prompt: string) => {
      const node = nodeMap.get(nodeId);
      if (!node) return;

      setExpandPrompt((prev) => ({ ...prev, isGenerating: true }));
      pushUndoState();

      try {
        const context = `Expand on "${node.data.label}" with this focus: ${prompt}. Return a mind map with the expanded concept as the root node and 3-6 sub-branches.`;
        const newData = await generateMindMapFromTopic(context);

        const aiRootId = newData.nodes[0]?.id;
        const newEdges: EdgeData[] = newData.edges.map((e) => ({
          ...e,
          source: e.source === aiRootId ? nodeId : e.source,
        }));

        const bridgeEdge: EdgeData = {
          source: nodeId,
          target: aiRootId,
          label: "expanded",
        };

        const updatedAiRoot: NodeData = {
          ...newData.nodes[0],
          label: `${node.data.label}: ${prompt.slice(0, 30)}`,
          type: "concept",
        };

        const mergedData: MindMapData = {
          nodes: [...mapData.nodes, updatedAiRoot, ...newData.nodes.slice(1)],
          edges: [...mapData.edges, bridgeEdge, ...newEdges],
        };

        setMapData(mergedData);
        setExpandPrompt((prev) => ({
          ...prev,
          open: false,
          input: "",
          isGenerating: false,
        }));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to expand");
        setExpandPrompt((prev) => ({ ...prev, isGenerating: false }));
      }
    },
    [nodeMap, mapData, pushUndoState],
  );

  // ─── Add Child Node ──────────────────────────────────────────────────────

  const handleAddChild = useCallback(() => {
    if (!focusId || !newChildLabel.trim()) return;
    pushUndoState();

    const newNodeId = `node-${Date.now()}`;
    const newNode: NodeData = {
      id: newNodeId,
      label: newChildLabel.trim(),
      description: newChildDescription.trim() || undefined,
      type: "concept",
      tags: [],
      importance: "medium",
    };

    const newEdge: EdgeData = {
      source: focusId,
      target: newNodeId,
      label: "extends",
    };

    setMapData((prev) => ({
      nodes: [...prev.nodes, newNode],
      edges: [...prev.edges, newEdge],
    }));

    setNewChildLabel("");
    setNewChildDescription("");
    setAddChildOpen(false);
  }, [focusId, newChildLabel, newChildDescription, pushUndoState]);

  // ─── Delete Node ─────────────────────────────────────────────────────────

  const handleDeleteNode = useCallback(
    (nodeId: string) => {
      const node = nodeMap.get(nodeId);
      if (!node || node.depth === 0) return;

      pushUndoState();

      const toRemove = new Set<string>();
      const collectDescendants = (id: string) => {
        toRemove.add(id);
        (childrenMap[id] || []).forEach(collectDescendants);
      };
      collectDescendants(nodeId);

      const parentId = parentMap[nodeId];
      const root = nodes.find((n) => n.depth === 0);
      const newFocusId = toRemove.has(focusId || "")
        ? parentId || root?.id || null
        : focusId;

      if (newFocusId && newFocusId !== focusId) {
        setFocusId(newFocusId);
        setSelectedId(newFocusId);
      }

      setMapData((prev) => ({
        nodes: prev.nodes.filter((n) => !toRemove.has(n.id)),
        edges: prev.edges.filter(
          (e) => !toRemove.has(e.source) && !toRemove.has(e.target),
        ),
      }));

      setDeleteConfirm(null);
      setCollectedIds((prev) => {
        const next = new Set(prev);
        toRemove.forEach((id) => next.delete(id));
        return next;
      });
    },
    [nodeMap, focusId, childrenMap, parentMap, nodes, pushUndoState],
  );

  // ─── Collected Summary Export ────────────────────────────────────────────

  const handleExportCollectedSummary = useCallback(() => {
    if (collectedIds.size === 0) return;

    const collectedNodes = Array.from(collectedIds)
      .map((id) => nodeMap.get(id))
      .filter(Boolean) as ExplorerNode[];

    let summary = `# Collected Nodes — Knowledge Explorer\n\n`;
    summary += `Generated: ${new Date().toISOString().split("T")[0]}\n`;
    summary += `Total collected: ${collectedNodes.length}\n\n---\n\n`;

    collectedNodes.forEach((node, i) => {
      summary += `## ${i + 1}. ${node.data.label}\n\n`;
      if (node.data.description) summary += `${node.data.description}\n\n`;
      if (node.data.type) summary += `- **Type:** ${node.data.type}\n`;
      if (node.data.importance)
        summary += `- **Importance:** ${node.data.importance}\n`;
      if (node.data.tags && node.data.tags.length > 0)
        summary += `- **Tags:** ${node.data.tags.join(", ")}\n`;
      if (node.data.nextStep)
        summary += `- **Next step:** ${node.data.nextStep}\n`;
      summary += `\n---\n\n`;
    });

    const blob = new Blob([summary], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `collected-nodes-${Date.now()}.md`;
    link.click();
    URL.revokeObjectURL(url);
  }, [collectedIds, nodeMap]);

  // ─── Search ──────────────────────────────────────────────────────────────

  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    const q = searchQuery.toLowerCase();
    return nodes
      .filter(
        (n) =>
          n.data.label.toLowerCase().includes(q) ||
          (n.data.description &&
            n.data.description.toLowerCase().includes(q)) ||
          (n.data.tags && n.data.tags.some((t) => t.toLowerCase().includes(q))),
      )
      .slice(0, PERFORMANCE.maxSearchResults);
  }, [nodes, searchQuery]);

  // ─── Share ───────────────────────────────────────────────────────────────

  const handleShare = useCallback(() => {
    if (!focusNode) return;

    const shareData = {
      topic: focusNode.data.label,
      description: focusNode.data.description,
      nodeId: focusNode.id,
      timestamp: Date.now(),
    };

    const encoded = btoa(JSON.stringify(shareData));
    const shareUrl = `${window.location.origin}${window.location.pathname}?share=${encoded}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setError("Share link copied to clipboard!");
      setTimeout(() => setError(null), 3000);
    }
  }, [focusNode]);

  // ─── Export ─────────────────────────────────────────────────────────────

  const handleExportJson = useCallback(() => {
    // Import dynamically to avoid circular deps
    import("../../services/exportService").then(({ exportToJson }) => {
      exportToJson(mapData, undefined, true);
      setExportMenu((prev) => ({ ...prev, open: false }));
    });
  }, [mapData]);

  const handleExportPng = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    tempCtx.drawImage(canvas, 0, 0);

    const dpr = window.devicePixelRatio || 1;
    tempCtx.save();
    tempCtx.globalAlpha = 0.15;
    tempCtx.fillStyle = "#ffffff";
    tempCtx.font = `bold ${14 * dpr}px sans-serif`;
    tempCtx.textAlign = "right";
    tempCtx.textBaseline = "bottom";
    tempCtx.fillText(
      "Generated by AI Mind Mapper",
      tempCanvas.width - 20 * dpr,
      tempCanvas.height - 20 * dpr,
    );
    tempCtx.restore();

    const { exportCanvasToPng } = await import("../../services/exportService");
    await exportCanvasToPng(tempCanvas, undefined, {
      scale: 2,
      backgroundColor: "#0f172a",
    });
    setExportMenu((prev) => ({ ...prev, open: false }));
  }, []);

  const handleExportSvg = useCallback(() => {
    import("../../services/exportService").then(({ exportLayoutToSvg }) => {
      const layout = layoutPretextMindMap(mapData);
      exportLayoutToSvg(layout, undefined, {
        backgroundColor: "#0f172a",
        includeGrid: true,
      });
      setExportMenu((prev) => ({ ...prev, open: false }));
    });
  }, [mapData]);

  // ─── Load Shared State ───────────────────────────────────────────────────

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const shareParam = params.get("share");

    if (shareParam) {
      try {
        const shareData = JSON.parse(atob(shareParam));
        if (shareData.topic) {
          setTopicInput(shareData.topic);
          window.history.replaceState({}, "", window.location.pathname);
        }
      } catch {
        // Invalid share data
      }
    }
  }, []);

  // ─── Story Mode ──────────────────────────────────────────────────────────

  const storyNodes = useMemo(() => {
    if (!mapData.nodes.length) return [];
    const root = mapData.nodes.find((n) => n.depth === 0);
    if (!root) return mapData.nodes;
    const ordered: string[] = [];
    const visited = new Set<string>();
    const walk = (id: string) => {
      if (visited.has(id)) return;
      visited.add(id);
      ordered.push(id);
      (childrenMap[id] || []).forEach(walk);
    };
    walk(root.id);
    return ordered;
  }, [mapData.nodes, childrenMap]);

  const advanceStory = useCallback(() => {
    if (storyNodes.length === 0) return;
    const next = (storyIndex + 1) % storyNodes.length;
    setStoryIndex(next);
    handleSelectNode(storyNodes[next]);
  }, [storyNodes, storyIndex, handleSelectNode]);

  const rewindStory = useCallback(() => {
    if (storyNodes.length === 0) return;
    const prev = storyIndex === 0 ? storyNodes.length - 1 : storyIndex - 1;
    setStoryIndex(prev);
    handleSelectNode(storyNodes[prev]);
  }, [storyNodes, storyIndex, handleSelectNode]);

  // ─── Edge Creation ───────────────────────────────────────────────────────

  const handleStartEdgeCreation = useCallback((nodeId: string) => {
    setEdgeCreation(nodeId);
  }, []);

  const handleCompleteEdgeCreation = useCallback(
    (targetId: string) => {
      if (!edgeCreation || edgeCreation === targetId) {
        setEdgeCreation(null);
        return;
      }
      pushUndoState();
      const exists = mapData.edges.some(
        (e) => e.source === edgeCreation && e.target === targetId,
      );
      if (!exists) {
        setMapData((prev) => ({
          ...prev,
          edges: [
            ...prev.edges,
            { source: edgeCreation, target: targetId, label: "relates to" },
          ],
        }));
      }
      setEdgeCreation(null);
    },
    [edgeCreation, mapData.edges, pushUndoState],
  );

  // ─── Pointer Handlers ────────────────────────────────────────────────────

  const getWorldPoint = useCallback(
    (clientX: number, clientY: number) => {
      const bounds = wrapperRef.current?.getBoundingClientRect();
      if (!bounds) return { x: 0, y: 0 };
      return {
        x: (clientX - bounds.left - viewport.x) / viewport.scale,
        y: (clientY - bounds.top - viewport.y) / viewport.scale,
      };
    },
    [viewport],
  );

  const getNodeAtPoint = useCallback(
    (worldX: number, worldY: number) => {
      for (let i = sceneNodes.length - 1; i >= 0; i--) {
        const sn = sceneNodes[i];
        const x = sn.targetX;
        const y = sn.targetY;
        const w = sn.node.width * (sn.targetScale ?? 1);
        const h = sn.node.height * (sn.targetScale ?? 1);

        if (worldX >= x && worldX <= x + w && worldY >= y && worldY <= y + h) {
          return sn;
        }
      }
      return null;
    },
    [sceneNodes],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      const world = getWorldPoint(e.clientX, e.clientY);
      const hit = getNodeAtPoint(world.x, world.y);

      if (hit) {
        if (hit.node.isEditing) return;

        interactionRef.current = {
          type: "drag",
          pointerId: e.pointerId,
          startX: world.x,
          startY: world.y,
          originNodePos: { x: hit.targetX, y: hit.targetY },
          nodeId: hit.id,
        };
        handleSelectNode(hit.id);
      } else {
        interactionRef.current = {
          type: "pan",
          pointerId: e.pointerId,
          startX: e.clientX,
          startY: e.clientY,
          originViewport: { ...viewportRef.current },
        };
      }

      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [getWorldPoint, getNodeAtPoint, handleSelectNode],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      pointerRef.current = { x: e.clientX, y: e.clientY };

      if (mode === "tunnel" && size.width > 0 && size.height > 0) {
        const bounds = wrapperRef.current?.getBoundingClientRect();
        if (bounds) {
          targetParallaxRef.current = {
            x: ((e.clientX - bounds.left) / size.width - 0.5) * 2,
            y: ((e.clientY - bounds.top) / size.height - 0.5) * 2,
          };
        }
      }

      const interaction = interactionRef.current;
      if (!interaction || interaction.pointerId !== e.pointerId) return;

      if (interaction.type === "pan") {
        const dx = e.clientX - interaction.startX;
        const dy = e.clientY - interaction.startY;
        setViewport({
          ...interaction.originViewport!,
          x: interaction.originViewport!.x + dx,
          y: interaction.originViewport!.y + dy,
        });
      } else if (interaction.type === "drag" && interaction.nodeId) {
        const world = getWorldPoint(e.clientX, e.clientY);
        const dx = world.x - interaction.startX;
        const dy = world.y - interaction.startY;

        setNodes((prev) =>
          prev.map((n) =>
            n.id === interaction.nodeId
              ? {
                  ...n,
                  x: (interaction.originNodePos?.x ?? n.x) + dx,
                  y: (interaction.originNodePos?.y ?? n.y) + dy,
                }
              : n,
          ),
        );
      }
    },
    [getWorldPoint, mode, size.width, size.height],
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      const interaction = interactionRef.current;
      if (!interaction) return;

      if (interaction.type === "drag" && interaction.nodeId) {
        const world = getWorldPoint(e.clientX, e.clientY);
        const hit = getNodeAtPoint(world.x, world.y);
        if (
          hit &&
          hit.id !== interaction.nodeId &&
          edgeCreation === interaction.nodeId
        ) {
          handleCompleteEdgeCreation(hit.id);
        }
      }

      interactionRef.current = null;
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    },
    [getWorldPoint, getNodeAtPoint, edgeCreation, handleCompleteEdgeCreation],
  );

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const current = viewportRef.current;
    const delta = -e.deltaY * 0.001;
    const newScale = Math.max(
      0.2,
      Math.min(3, current.scale * Math.exp(delta)),
    );

    const bounds = wrapperRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const pointerX = e.clientX - bounds.left;
    const pointerY = e.clientY - bounds.top;
    const worldX = (pointerX - current.x) / current.scale;
    const worldY = (pointerY - current.y) / current.scale;

    setViewport({
      scale: newScale,
      x: pointerX - worldX * newScale,
      y: pointerY - worldY * newScale,
    });
  }, []);

  // ─── Keyboard Shortcuts ──────────────────────────────────────────────────

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (view === "edit" || expandPrompt.open) return;

      switch (e.key) {
        case "ArrowUp":
        case "ArrowLeft":
          e.preventDefault();
          if (presentationMode) setPresentationMode(false);
          else handleGoParent();
          break;
        case "ArrowDown":
        case "ArrowRight":
          e.preventDefault();
          if (presentationMode && focusId) {
            const children = childrenMap[focusId] || [];
            if (children.length > 0) {
              const currentIndex = children.indexOf(selectedId || "");
              const nextIndex = (currentIndex + 1) % children.length;
              handleSelectNode(children[nextIndex]);
            }
          } else {
            const children = childrenMap[focusId || ""] || [];
            if (children.length > 0) handleSelectNode(children[0]);
          }
          break;
        case "Escape":
          if (presentationMode) setPresentationMode(false);
          else if (edgeCreation) setEdgeCreation(null);
          else if (storyMode) setStoryMode(false);
          else handleGoHome();
          break;
        case "e":
          if (focusId) startEditing(focusId);
          break;
        case "c":
          if (focusId) handleToggleCollect(focusId);
          break;
        case "n":
          if (focusId && !e.metaKey && !e.ctrlKey) {
            e.preventDefault();
            setAddChildOpen(true);
          }
          break;
        case "/":
          e.preventDefault();
          setSearchOpen((prev) => !prev);
          break;
        case "?":
          e.preventDefault();
          setHelpOpen((prev) => !prev);
          break;
        case "d":
          if (focusId && !searchOpen && !addChildOpen && !expandPrompt.open) {
            e.preventDefault();
            setDetailPanelOpen((prev) => !prev);
          }
          break;
        case "s":
          if (!e.metaKey && !e.ctrlKey) {
            e.preventDefault();
            setStatsPanelOpen((prev) => !prev);
          }
          break;
        case "t":
          if (!e.metaKey && !e.ctrlKey) {
            e.preventDefault();
            setStoryMode((prev) => !prev);
            if (!storyMode) setStoryIndex(0);
          }
          break;
        case "x":
          if (focusId && !searchOpen && !addChildOpen) {
            e.preventDefault();
            setFocusMode((prev) => !prev);
          }
          break;
        case "z":
          if (e.metaKey || e.ctrlKey) {
            e.preventDefault();
            if (e.shiftKey) handleRedo();
            else handleUndo();
          }
          break;
        case "f":
          if (e.metaKey || e.ctrlKey) {
            e.preventDefault();
            setSearchOpen((prev) => !prev);
          }
          break;
        case "p":
          if (!e.metaKey && !e.ctrlKey) {
            e.preventDefault();
            setPresentationMode((prev) => !prev);
          }
          break;
        case "Delete":
        case "Backspace":
          if (focusId && !searchOpen && !addChildOpen && !expandPrompt.open) {
            e.preventDefault();
            setDeleteConfirm(focusId);
          }
          break;
        case "1":
          setMode("atlas");
          break;
        case "2":
          setMode("tunnel");
          break;
        case "3":
          setMode("overview");
          break;
        case "b":
          if (!e.metaKey && !e.ctrlKey) {
            e.preventDefault();
            if (compareMode) {
              resetCompare();
              setCompareMode(false);
            } else {
              setCompareMode(true);
            }
          }
          break;
        case "m":
          if (!e.metaKey && !e.ctrlKey) {
            e.preventDefault();
            setMinimapOpen((prev) => !prev);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    view,
    focusId,
    childrenMap,
    handleGoParent,
    handleGoHome,
    handleSelectNode,
    startEditing,
    expandPrompt.open,
    presentationMode,
    edgeCreation,
    storyMode,
    storyIndex,
    handleToggleCollect,
    handleUndo,
    handleRedo,
    searchOpen,
    addChildOpen,
    resetCompare,
    compareMode,
    selectedId,
  ]);

  return {
    // State
    size,
    mode,
    setMode,
    view,
    setView,
    mapData,
    setMapData,
    nodes,
    edges,
    focusId,
    setFocusId,
    hoveredId,
    setHoveredId,
    selectedId,
    setSelectedId,
    visitedIds,
    setVisitedIds,
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
    undoStack,
    redoStack,
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
    setRecentlyViewed,
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
  };
}
