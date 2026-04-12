import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ArrowLeft, ArrowRight, Home, MoveRight } from "lucide-react";
import { PRETEXT_TYPOGRAPHY } from "../services/pretextTextService";
import {
  PRETEXT_THEME_ACCENTS,
  type PretextGraphLayout,
  type PretextMapNode,
} from "../services/pretextMapLayout";

interface PretextAtlasCanvasProps {
  layout: PretextGraphLayout;
  selectedNodeId?: string | null;
  visitedNodeIds?: string[];
  onSelectNode?: (nodeId: string) => void;
}

interface Size {
  width: number;
  height: number;
}

interface PointerState {
  x: number;
  y: number;
}

type SceneRole = "ancestor" | "parent" | "focus" | "child" | "sibling";

interface SceneNode {
  id: string;
  node: PretextMapNode;
  role: SceneRole;
  targetX: number;
  targetY: number;
  targetScale: number;
  targetOpacity: number;
  interactive: boolean;
  descendantCount: number;
}

interface AnimatedSceneNode extends SceneNode {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  exiting: boolean;
}

interface AtlasPalette {
  accent: string;
  surface: string;
  header: string;
  border: string;
  title: string;
  body: string;
  pillBackground: string;
  pillText: string;
  shadow: string;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function hexToRgba(hex: string, alpha: number) {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(
    normalized.length === 3
      ? normalized
          .split("")
          .map((part) => part + part)
          .join("")
      : normalized,
    16,
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function createSeededRandom(seed: number) {
  let current = seed >>> 0;

  return () => {
    current = (current * 1664525 + 1013904223) >>> 0;
    return current / 4294967296;
  };
}

function getNodePalette(node: PretextMapNode): AtlasPalette {
  const accents =
    PRETEXT_THEME_ACCENTS[node.themeFamily] || PRETEXT_THEME_ACCENTS.slate;
  const accent = accents[Math.min(node.themeLevel, accents.length - 1)];

  if (node.depth === 0) {
    return {
      accent: "#38bdf8",
      surface: "#0f172a",
      header: "#111827",
      border: hexToRgba("#38bdf8", 0.92),
      title: "#f8fafc",
      body: "rgba(226,232,240,0.96)",
      pillBackground: "rgba(255,255,255,0.12)",
      pillText: "#bae6fd",
      shadow: "rgba(15,23,42,0.4)",
    };
  }

  return {
    accent,
    surface: "rgba(255,255,255,0.96)",
    header: hexToRgba(accent, 0.14 + node.themeLevel * 0.03),
    border: hexToRgba(accent, 0.48),
    title: "#0f172a",
    body: "#475569",
    pillBackground: hexToRgba(accent, 0.11),
    pillText: accent,
    shadow: hexToRgba(accent, 0.16),
  };
}

function generateStars(width: number, height: number) {
  const random = createSeededRandom(Math.floor(width * 13 + height * 7 + 17));
  const count = Math.max(120, Math.floor((width * height) / 12000));

  return Array.from({ length: count }, () => ({
    x: random() * width,
    y: random() * height,
    radius: 0.6 + random() * 1.8,
    alpha: 0.2 + random() * 0.55,
    depth: 0.4 + random() * 1.5,
  }));
}

function getAncestorChain(
  layout: PretextGraphLayout,
  focusId: string,
  nodeMap: Map<string, PretextMapNode>,
) {
  const ancestors: PretextMapNode[] = [];
  let currentId = layout.parentMap[focusId];

  while (currentId) {
    const node = nodeMap.get(currentId);
    if (node) {
      ancestors.unshift(node);
    }
    currentId = layout.parentMap[currentId];
  }

  return ancestors;
}

function buildDescendantCountMap(childrenMap: Record<string, string[]>) {
  const memo: Record<string, number> = {};

  const count = (nodeId: string): number => {
    if (memo[nodeId] !== undefined) {
      return memo[nodeId];
    }

    const children = childrenMap[nodeId] || [];
    memo[nodeId] = children.reduce(
      (sum, childId) => sum + 1 + count(childId),
      0,
    );
    return memo[nodeId];
  };

  Object.keys(childrenMap).forEach((nodeId) => {
    count(nodeId);
  });

  return memo;
}

function buildAtlasScene(
  layout: PretextGraphLayout,
  nodeMap: Map<string, PretextMapNode>,
  descendantCounts: Record<string, number>,
  focusId: string,
  size: Size,
) {
  const focusNode = nodeMap.get(focusId) || layout.nodes[0] || null;
  if (!focusNode || size.width <= 0 || size.height <= 0) {
    return [] as SceneNode[];
  }

  const parentNode = layout.parentMap[focusId]
    ? nodeMap.get(layout.parentMap[focusId] as string) || null
    : null;
  const childNodes = (layout.childrenMap[focusId] || [])
    .map((childId) => nodeMap.get(childId))
    .filter(Boolean) as PretextMapNode[];
  const siblingNodes = parentNode
    ? ((layout.childrenMap[parentNode.id] || [])
        .filter((nodeId) => nodeId !== focusId)
        .map((nodeId) => nodeMap.get(nodeId))
        .filter(Boolean)
        .slice(0, 4) as PretextMapNode[])
    : [];
  const ancestorNodes = getAncestorChain(layout, focusId, nodeMap)
    .slice(0, -1)
    .slice(-3);
  const compactScene = size.width < 1080 || size.height < 720;
  const safeBottomMargin = compactScene ? 188 : 148;
  const focusCenterY = size.height * (compactScene ? 0.44 : 0.56);
  const visibleAncestors = compactScene
    ? ancestorNodes.slice(-2)
    : ancestorNodes;
  const visibleSiblings = compactScene
    ? siblingNodes.slice(0, 2)
    : siblingNodes;

  const centerX = size.width * 0.5;
  const centerY = focusCenterY;
  const sceneNodes: SceneNode[] = [];

  const pushSceneNode = (config: SceneNode) => {
    const position = placeSceneNode(
      config.node,
      size,
      config.targetX,
      config.targetY,
      {
        marginX: compactScene ? 16 : 24,
        marginTop: config.role === "ancestor" ? 20 : compactScene ? 84 : 44,
        marginBottom: safeBottomMargin,
      },
    );

    sceneNodes.push({
      ...config,
      targetX: position.x,
      targetY: position.y,
    });
  };

  visibleAncestors.forEach((node, index) => {
    pushSceneNode({
      id: node.id,
      node,
      role: "ancestor",
      targetX: 32 + index * (compactScene ? 122 : 148),
      targetY: 22 + index * 6,
      targetScale: compactScene ? 0.5 : 0.56,
      targetOpacity: compactScene ? 0.5 : 0.58,
      interactive: true,
      descendantCount: descendantCounts[node.id] || 0,
    });
  });

  if (parentNode) {
    pushSceneNode({
      id: parentNode.id,
      node: parentNode,
      role: "parent",
      targetX: compactScene
        ? centerX - parentNode.width / 2
        : centerX - parentNode.width * 0.38 - 290,
      targetY: compactScene ? centerY - parentNode.height - 62 : centerY - 220,
      targetScale: compactScene ? 0.68 : 0.76,
      targetOpacity: 0.88,
      interactive: true,
      descendantCount: descendantCounts[parentNode.id] || 0,
    });
  }

  pushSceneNode({
    id: focusNode.id,
    node: focusNode,
    role: "focus",
    targetX: centerX - focusNode.width / 2,
    targetY: centerY - focusNode.height / 2,
    targetScale: 1,
    targetOpacity: 1,
    interactive: false,
    descendantCount: descendantCounts[focusNode.id] || 0,
  });

  visibleSiblings.forEach((node, index) => {
    const columnOffset = index % 2 === 0 ? 0 : 34;
    pushSceneNode({
      id: node.id,
      node,
      role: "sibling",
      targetX: compactScene
        ? size.width - node.width * 0.72 - 86 + columnOffset
        : 72 + columnOffset,
      targetY: compactScene ? 108 + index * 98 : centerY + 48 + index * 98,
      targetScale: compactScene ? 0.58 : 0.64,
      targetOpacity: compactScene ? 0.5 : 0.56,
      interactive: true,
      descendantCount: descendantCounts[node.id] || 0,
    });
  });

  const itemsPerRing = compactScene ? 3 : 4;
  const firstRingRadiusX = compactScene
    ? Math.min(280, Math.max(180, size.width * 0.19))
    : Math.min(360, Math.max(250, size.width * 0.23));
  const firstRingRadiusY = compactScene
    ? Math.min(190, Math.max(132, size.height * 0.16))
    : Math.min(250, Math.max(190, size.height * 0.22));

  for (let index = 0; index < childNodes.length; index += itemsPerRing) {
    const ringNodes = childNodes.slice(index, index + itemsPerRing);
    const ringIndex = Math.floor(index / itemsPerRing);
    const radiusX = firstRingRadiusX + ringIndex * (compactScene ? 102 : 138);
    const radiusY = firstRingRadiusY + ringIndex * (compactScene ? 74 : 96);
    const startAngle = compactScene ? -0.88 : -1.05;
    const endAngle = compactScene ? 0.88 : 1.05;

    ringNodes.forEach((node, ringNodeIndex) => {
      const angle =
        ringNodes.length === 1
          ? 0
          : startAngle +
            ((endAngle - startAngle) / (ringNodes.length - 1)) * ringNodeIndex;

      pushSceneNode({
        id: node.id,
        node,
        role: "child",
        targetX: centerX + Math.cos(angle) * radiusX - node.width / 2,
        targetY: centerY + Math.sin(angle) * radiusY - node.height / 2,
        targetScale:
          ringIndex === 0
            ? compactScene
              ? 0.78
              : 0.86
            : compactScene
              ? 0.66
              : 0.72,
        targetOpacity: ringIndex === 0 ? 0.98 : compactScene ? 0.72 : 0.8,
        interactive: true,
        descendantCount: descendantCounts[node.id] || 0,
      });
    });
  }

  return sceneNodes;
}

function getCardLabel(role: SceneRole, descendantCount: number) {
  if (role === "focus") {
    return "You are here";
  }

  if (role === "parent") {
    return "Backtrack";
  }

  if (role === "ancestor") {
    return "Trail";
  }

  if (role === "sibling") {
    return "Side path";
  }

  return descendantCount > 0 ? `${descendantCount} more` : "Dive in";
}

function getAnimatedNodes(record: Record<string, AnimatedSceneNode>) {
  return Object.values(record) as AnimatedSceneNode[];
}

function placeSceneNode(
  node: PretextMapNode,
  size: Size,
  targetX: number,
  targetY: number,
  options?: {
    marginX?: number;
    marginTop?: number;
    marginBottom?: number;
  },
) {
  const marginX = options?.marginX ?? 24;
  const marginTop = options?.marginTop ?? 32;
  const marginBottom = options?.marginBottom ?? 148;

  return {
    x: clamp(
      targetX,
      marginX,
      Math.max(marginX, size.width - node.width - marginX),
    ),
    y: clamp(
      targetY,
      marginTop,
      Math.max(marginTop, size.height - node.height - marginBottom),
    ),
  };
}

function drawBadgeRow(
  context: CanvasRenderingContext2D,
  labels: Array<{ label: string; width: number }>,
  x: number,
  y: number,
  background: string,
  color: string,
) {
  let cursorX = x;

  labels.forEach((item) => {
    context.fillStyle = background;
    context.beginPath();
    context.roundRect(cursorX, y, item.width, 20, 10);
    context.fill();

    context.fillStyle = color;
    context.font = PRETEXT_TYPOGRAPHY.badge.font;
    context.fillText(item.label, cursorX + 9, y + 5);
    cursorX += item.width + 6;
  });
}

function drawNodeCard(
  context: CanvasRenderingContext2D,
  visual: AnimatedSceneNode,
  hoveredNodeId: string | null,
  highlightedChildId: string | null,
  visitedSet: Set<string>,
) {
  const { node, role, x, y, scale, opacity, descendantCount } = visual;
  const palette = getNodePalette(node);
  const isFocused = role === "focus";
  const isHovered = node.id === hoveredNodeId;
  const isHighlighted = role === "child" && node.id === highlightedChildId;
  const isVisited = visitedSet.has(node.id);
  const width = node.width;
  const height = node.height;
  const radius = isFocused ? 32 : role === "ancestor" ? 18 : 24;
  const paddingX = isFocused ? 28 : 20;
  const paddingY = isFocused ? 26 : 18;

  context.save();
  context.translate(x, y);
  context.scale(scale, scale);
  context.globalAlpha = opacity;

  context.save();
  context.shadowColor =
    isHovered || isHighlighted
      ? hexToRgba(palette.accent, 0.4)
      : palette.shadow;
  context.shadowBlur = isFocused ? 34 : isHovered || isHighlighted ? 28 : 18;
  context.shadowOffsetY = isFocused ? 18 : 10;
  context.beginPath();
  context.roundRect(0, 0, width, height, radius);
  context.fillStyle = isFocused ? "rgba(10,17,32,0.96)" : palette.surface;
  context.fill();
  context.restore();

  context.beginPath();
  context.roundRect(0, 0, width, Math.min(height, isFocused ? 98 : 74), radius);
  context.fillStyle = isFocused ? "rgba(17,24,39,1)" : palette.header;
  context.fill();

  context.beginPath();
  context.roundRect(0, 0, width, height, radius);
  context.lineWidth = isFocused ? 2.8 : isHovered || isHighlighted ? 2.4 : 1.25;
  context.strokeStyle =
    isFocused || isHovered || isHighlighted ? palette.accent : palette.border;
  context.stroke();

  context.fillStyle = isFocused ? "rgba(186,230,253,0.92)" : palette.pillText;
  context.font = PRETEXT_TYPOGRAPHY.badge.font;
  context.fillText(getCardLabel(role, descendantCount), paddingX, 12);

  if (isVisited && !isFocused) {
    const badgeX = width - 48;
    const badgeY = 10;
    const badgeWidth = 34;
    const badgeHeight = 18;
    context.fillStyle = hexToRgba("#22c55e", 0.18);
    context.beginPath();
    context.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, 9);
    context.fill();

    context.fillStyle = "#16a34a";
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.fillText(
      "SEEN",
      badgeX + badgeWidth / 2,
      badgeY + badgeHeight / 2 + 1,
    );
    context.textBaseline = "top";
    context.textAlign = "start";
  }

  let cursorY = isFocused ? 34 : 28;
  context.textBaseline = "top";
  context.fillStyle = palette.title;
  context.font = isFocused
    ? PRETEXT_TYPOGRAPHY.heroTitle.font
    : PRETEXT_TYPOGRAPHY.title.font;

  node.title.lines.forEach((line, index) => {
    if (!isFocused && role !== "child" && index > 1) {
      return;
    }
    context.fillText(line.text, paddingX, cursorY);
    cursorY += node.title.lineHeight;
  });

  const showBadges = role === "focus" || role === "child";
  if (showBadges && node.badges.length > 0) {
    cursorY += 10;
    drawBadgeRow(
      context,
      node.badges,
      paddingX,
      cursorY,
      palette.pillBackground,
      palette.pillText,
    );
    cursorY += 24;
  }

  const descriptionLimit = isFocused
    ? 3
    : role === "child"
      ? 2
      : role === "parent"
        ? 1
        : 0;
  if (
    descriptionLimit > 0 &&
    node.description &&
    node.description.lines.length > 0
  ) {
    cursorY += 12;
    context.fillStyle = palette.body;
    context.font = PRETEXT_TYPOGRAPHY.body.font;
    node.description.lines.slice(0, descriptionLimit).forEach((line) => {
      context.fillText(line.text, paddingX, cursorY);
      cursorY += node.description.lineHeight;
    });
  }

  if ((role === "child" || role === "focus") && descendantCount > 0) {
    cursorY += 12;
    const summary =
      descendantCount === 1
        ? "1 connected branch"
        : `${descendantCount} connected branches`;
    context.fillStyle = hexToRgba("#0f172a", isFocused ? 0.18 : 0.06);
    context.beginPath();
    context.roundRect(
      paddingX,
      Math.min(cursorY, height - 36),
      Math.min(width - paddingX * 2, 144),
      22,
      11,
    );
    context.fill();
    context.fillStyle = isFocused ? "#e2e8f0" : "#475569";
    context.font = PRETEXT_TYPOGRAPHY.badge.font;
    context.fillText(
      summary,
      paddingX + 10,
      Math.min(cursorY, height - 36) + 5,
    );
  } else if (role === "focus" && node.tags.length > 0) {
    cursorY += 12;
    drawBadgeRow(
      context,
      node.tags,
      paddingX,
      Math.min(cursorY, height - 36),
      "rgba(255,255,255,0.08)",
      "#cbd5e1",
    );
  }

  context.restore();
}

export function PretextAtlasCanvas({
  layout,
  selectedNodeId,
  visitedNodeIds = [],
  onSelectNode,
}: PretextAtlasCanvasProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pressedNodeIdRef = useRef<string | null>(null);
  const visualsRef = useRef<Record<string, AnimatedSceneNode>>({});
  const pointerRef = useRef<PointerState>({ x: 0.5, y: 0.5 });
  const starsRef = useRef<ReturnType<typeof generateStars>>([]);

  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [showAtlasInfo, setShowAtlasInfo] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [pressedNodeId, setPressedNodeId] = useState<string | null>(null);

  const nodeMap = useMemo(
    () => new Map(layout.nodes.map((node) => [node.id, node])),
    [layout.nodes],
  );
  const descendantCounts = useMemo(
    () => buildDescendantCountMap(layout.childrenMap),
    [layout.childrenMap],
  );
  const focusId =
    selectedNodeId || layout.rootId || layout.nodes[0]?.id || null;
  const currentChildIds = focusId ? layout.childrenMap[focusId] || [] : [];
  const visitedSet = useMemo(() => new Set(visitedNodeIds), [visitedNodeIds]);
  const [highlightedChildId, setHighlightedChildId] = useState<string | null>(
    currentChildIds[0] || null,
  );
  const highlightedChild = highlightedChildId
    ? nodeMap.get(highlightedChildId) || null
    : null;
  const highlightedChildIndex = highlightedChildId
    ? currentChildIds.indexOf(highlightedChildId)
    : -1;

  const cycleHighlightedChild = (delta: number) => {
    if (!currentChildIds.length) {
      return;
    }

    const currentIndex = Math.max(
      0,
      currentChildIds.indexOf(highlightedChildId || currentChildIds[0]),
    );
    const nextIndex =
      (currentIndex + delta + currentChildIds.length) % currentChildIds.length;
    setHighlightedChildId(currentChildIds[nextIndex]);
    wrapperRef.current?.focus();
  };

  const handleCommitHighlightedChild = () => {
    if (!highlightedChildId) {
      return;
    }

    onSelectNode?.(highlightedChildId);
    wrapperRef.current?.focus();
  };

  const handleGoParent = () => {
    if (!focusId || !layout.parentMap[focusId]) {
      return;
    }

    onSelectNode?.(layout.parentMap[focusId] as string);
    wrapperRef.current?.focus();
  };

  const handleGoHome = () => {
    if (!layout.rootId) {
      return;
    }

    onSelectNode?.(layout.rootId);
    wrapperRef.current?.focus();
  };

  useEffect(() => {
    setHighlightedChildId((current) =>
      current && currentChildIds.includes(current)
        ? current
        : currentChildIds[0] || null,
    );
  }, [focusId, currentChildIds]);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const next = entries[0]?.contentRect;
      if (!next) {
        return;
      }

      setSize({ width: next.width, height: next.height });
    });

    observer.observe(element);
    setIsReady(true);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!size.width || !size.height) {
      return;
    }

    starsRef.current = generateStars(size.width, size.height);
  }, [size.height, size.width]);

  const sceneNodes = useMemo(() => {
    if (!focusId) {
      return [];
    }

    return buildAtlasScene(layout, nodeMap, descendantCounts, focusId, size);
  }, [descendantCounts, focusId, layout, nodeMap, size]);

  useEffect(() => {
    if (!size.width || !size.height) {
      return;
    }

    const nextIds = new Set(sceneNodes.map((sceneNode) => sceneNode.id));
    const nextCenterX = size.width * 0.5;
    const nextCenterY = size.height * 0.56;

    sceneNodes.forEach((sceneNode) => {
      const existing = visualsRef.current[sceneNode.id];
      if (existing) {
        visualsRef.current[sceneNode.id] = {
          ...existing,
          ...sceneNode,
          exiting: false,
        };
        return;
      }

      visualsRef.current[sceneNode.id] = {
        ...sceneNode,
        x: nextCenterX - sceneNode.node.width / 2,
        y: nextCenterY - sceneNode.node.height / 2,
        scale: 0.45,
        opacity: 0,
        exiting: false,
      };
    });

    getAnimatedNodes(visualsRef.current).forEach((visual) => {
      if (nextIds.has(visual.id)) {
        return;
      }

      visual.targetX = nextCenterX - visual.node.width / 2;
      visual.targetY = nextCenterY - visual.node.height / 2;
      visual.targetScale = 0.42;
      visual.targetOpacity = 0;
      visual.exiting = true;
    });
  }, [sceneNodes, size.height, size.width]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !size.width || !size.height) {
      return;
    }

    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(size.width * dpr);
    canvas.height = Math.floor(size.height * dpr);
    canvas.style.width = `${size.width}px`;
    canvas.style.height = `${size.height}px`;
  }, [size.width, size.height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !size.width || !size.height) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let frameId = 0;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, size.width, size.height);

      const time = performance.now() * 0.00035;
      const pointerX = (pointerRef.current.x - 0.5) * 42;
      const pointerY = (pointerRef.current.y - 0.5) * 30;

      const gradient = context.createLinearGradient(0, 0, 0, size.height);
      gradient.addColorStop(0, "#06101d");
      gradient.addColorStop(0.52, "#0d1b2f");
      gradient.addColorStop(1, "#11253d");
      context.fillStyle = gradient;
      context.fillRect(0, 0, size.width, size.height);

      const nebulaLeft = context.createRadialGradient(
        size.width * 0.18 + pointerX,
        size.height * 0.22 + pointerY,
        0,
        size.width * 0.18 + pointerX,
        size.height * 0.22 + pointerY,
        size.width * 0.42,
      );
      nebulaLeft.addColorStop(0, "rgba(34,211,238,0.28)");
      nebulaLeft.addColorStop(1, "rgba(34,211,238,0)");
      context.fillStyle = nebulaLeft;
      context.fillRect(0, 0, size.width, size.height);

      const nebulaRight = context.createRadialGradient(
        size.width * 0.84 - pointerX,
        size.height * 0.78 - pointerY,
        0,
        size.width * 0.84 - pointerX,
        size.height * 0.78 - pointerY,
        size.width * 0.36,
      );
      nebulaRight.addColorStop(0, "rgba(251,146,60,0.24)");
      nebulaRight.addColorStop(1, "rgba(251,146,60,0)");
      context.fillStyle = nebulaRight;
      context.fillRect(0, 0, size.width, size.height);

      starsRef.current.forEach((star, index) => {
        const twinkle = 0.65 + Math.sin(time * 8 + index * 0.7) * 0.18;
        context.fillStyle = `rgba(241,245,249,${star.alpha * twinkle})`;
        context.beginPath();
        context.arc(
          star.x + pointerX * star.depth * 0.1,
          star.y + pointerY * star.depth * 0.1,
          star.radius,
          0,
          Math.PI * 2,
        );
        context.fill();
      });

      Object.keys(visualsRef.current).forEach((visualId) => {
        const visual = visualsRef.current[visualId];
        visual.x += (visual.targetX - visual.x) * 0.12;
        visual.y += (visual.targetY - visual.y) * 0.12;
        visual.scale += (visual.targetScale - visual.scale) * 0.12;
        visual.opacity += (visual.targetOpacity - visual.opacity) * 0.12;

        if (visual.exiting && visual.opacity < 0.02) {
          delete visualsRef.current[visualId];
        }
      });

      const animatedNodes = getAnimatedNodes(visualsRef.current);
      const focusVisual = focusId ? visualsRef.current[focusId] || null : null;

      if (focusVisual) {
        const focusCenterX =
          focusVisual.x + focusVisual.node.width * focusVisual.scale * 0.5;
        const focusCenterY =
          focusVisual.y + focusVisual.node.height * focusVisual.scale * 0.5;

        context.save();
        context.strokeStyle = "rgba(125,211,252,0.16)";
        context.lineWidth = 1.5;
        [170, 270, 380].forEach((radius, index) => {
          context.beginPath();
          context.ellipse(
            focusCenterX,
            focusCenterY,
            radius + index * 8,
            radius * 0.6,
            time * (index % 2 === 0 ? 0.2 : -0.16),
            0,
            Math.PI * 2,
          );
          context.stroke();
        });
        context.restore();
      }

      animatedNodes.forEach((visual) => {
        if (
          !focusVisual ||
          visual.id === focusVisual.id ||
          visual.opacity < 0.04
        ) {
          return;
        }

        // Calculate card centers
        const focusCenterX =
          focusVisual.x + focusVisual.node.width * focusVisual.scale * 0.5;
        const focusCenterY =
          focusVisual.y + focusVisual.node.height * focusVisual.scale * 0.5;
        const visualCenterX = visual.x + visual.node.width * visual.scale * 0.5;
        const visualCenterY =
          visual.y + visual.node.height * visual.scale * 0.5;

        // Calculate card dimensions
        const focusWidth = focusVisual.node.width * focusVisual.scale;
        const focusHeight = focusVisual.node.height * focusVisual.scale;
        const visualWidth = visual.node.width * visual.scale;
        const visualHeight = visual.node.height * visual.scale;

        // Determine the angle between centers
        const dx = visualCenterX - focusCenterX;
        const dy = visualCenterY - focusCenterY;
        const angle = Math.atan2(dy, dx);

        // Calculate start point at focus card edge using rectangle intersection
        const absCos = Math.abs(Math.cos(angle));
        const absSin = Math.abs(Math.sin(angle));
        const focusHalfW = focusWidth * 0.5;
        const focusHalfH = focusHeight * 0.5;
        const visualHalfW = visualWidth * 0.5;
        const visualHalfH = visualHeight * 0.5;

        // Find where the ray from focus center intersects the focus card edge
        let startDist;
        if (absCos * focusHalfH > absSin * focusHalfW) {
          startDist = focusHalfW / absCos;
        } else {
          startDist = focusHalfH / absSin;
        }
        const startX = focusCenterX + Math.cos(angle) * (startDist + 6);
        const startY = focusCenterY + Math.sin(angle) * (startDist + 6);

        // Find where the ray from visual center (opposite direction) intersects the visual card edge
        let endDist;
        if (absCos * visualHalfH > absSin * visualHalfW) {
          endDist = visualHalfW / absCos;
        } else {
          endDist = visualHalfH / absSin;
        }
        const endX = visualCenterX - Math.cos(angle) * (endDist + 6);
        const endY = visualCenterY - Math.sin(angle) * (endDist + 6);

        // Calculate curve control points - use direction-based offset for cleaner curves
        const distance = Math.sqrt(dx * dx + dy * dy);
        const isHorizontal = Math.abs(dx) > Math.abs(dy);
        const curveAmount = Math.max(40, Math.min(distance * 0.25, 120));

        let cp1x, cp1y, cp2x, cp2y;
        if (isHorizontal) {
          // Horizontal-ish connection: curve vertically
          const curveDir = dy > 0 ? 1 : -1;
          cp1x = startX + (endX - startX) * 0.4;
          cp1y = startY + curveDir * curveAmount * 0.3;
          cp2x = endX - (endX - startX) * 0.4;
          cp2y = endY - curveDir * curveAmount * 0.3;
        } else {
          // Vertical-ish connection: curve horizontally
          const curveDir = dx > 0 ? 1 : -1;
          cp1x = startX + curveDir * curveAmount * 0.3;
          cp1y = startY + (endY - startY) * 0.4;
          cp2x = endX - curveDir * curveAmount * 0.3;
          cp2y = endY - (endY - startY) * 0.4;
        }

        const palette = getNodePalette(visual.node);
        const isHighlighted =
          visual.role === "child" && visual.id === highlightedChildId;

        context.save();
        context.globalAlpha = Math.min(0.95, visual.opacity);

        // Determine edge color and style based on role
        let edgeColor, glowColor, lineWidth, dashPattern;
        if (visual.role === "parent") {
          edgeColor = "rgba(251,191,36,0.85)";
          glowColor = "rgba(251,191,36,0.25)";
          lineWidth = isHighlighted ? 4 : 3;
          dashPattern = [8, 5];
        } else if (visual.role === "sibling") {
          edgeColor = "rgba(148,163,184,0.6)";
          glowColor = "rgba(148,163,184,0.15)";
          lineWidth = 2.5;
          dashPattern = [6, 5];
        } else {
          // child
          edgeColor = isHighlighted
            ? hexToRgba(palette.accent, 0.95)
            : hexToRgba(palette.accent, 0.8);
          glowColor = hexToRgba(palette.accent, 0.2);
          lineWidth = isHighlighted ? 4 : 3;
          dashPattern = [];
        }

        // Draw glow effect for better visibility
        context.beginPath();
        context.moveTo(startX, startY);
        context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
        context.strokeStyle = glowColor;
        context.lineWidth = lineWidth + 8;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();

        // Draw main edge
        context.beginPath();
        context.moveTo(startX, startY);
        context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
        context.strokeStyle = edgeColor;
        context.lineWidth = lineWidth;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.setLineDash(dashPattern);
        context.stroke();

        // Draw small dot at the end for direction indication
        if (visual.role === "child" || visual.role === "parent") {
          context.setLineDash([]);
          context.beginPath();
          context.arc(endX, endY, isHighlighted ? 4 : 3, 0, Math.PI * 2);
          context.fillStyle = edgeColor;
          context.fill();
        }

        context.restore();
      });

      const highlightedVisual = highlightedChildId
        ? visualsRef.current[highlightedChildId] || null
        : null;
      if (highlightedVisual && highlightedVisual.opacity > 0.04) {
        const width = highlightedVisual.node.width * highlightedVisual.scale;
        const height = highlightedVisual.node.height * highlightedVisual.scale;
        const pulse = 1 + Math.sin(time * 10) * 0.035;

        context.save();
        context.globalAlpha = Math.min(0.48, highlightedVisual.opacity * 0.68);
        context.strokeStyle = "rgba(125,211,252,0.72)";
        context.lineWidth = 2;
        context.beginPath();
        context.roundRect(
          highlightedVisual.x - 14 * pulse,
          highlightedVisual.y - 14 * pulse,
          width + 28 * pulse,
          height + 28 * pulse,
          32,
        );
        context.stroke();
        context.restore();
      }

      const roleOrder: Record<SceneRole, number> = {
        ancestor: 0,
        sibling: 1,
        parent: 2,
        child: 3,
        focus: 4,
      };

      animatedNodes
        .slice()
        .sort((left, right) => {
          if (left.id === hoveredNodeId) {
            return 1;
          }
          if (right.id === hoveredNodeId) {
            return -1;
          }
          return roleOrder[left.role] - roleOrder[right.role];
        })
        .forEach((visual) => {
          if (visual.opacity < 0.04) {
            return;
          }
          drawNodeCard(
            context,
            visual,
            hoveredNodeId,
            highlightedChildId,
            visitedSet,
          );
        });

      frameId = window.requestAnimationFrame(draw);
    };

    frameId = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(frameId);
  }, [
    focusId,
    highlightedChildId,
    hoveredNodeId,
    size.height,
    size.width,
    visitedSet,
  ]);

  const getPointerHit = (clientX: number, clientY: number) => {
    const bounds = wrapperRef.current?.getBoundingClientRect();
    if (!bounds) {
      return null;
    }

    const localX = clientX - bounds.left;
    const localY = clientY - bounds.top;

    return (
      getAnimatedNodes(visualsRef.current)
        .filter((visual) => visual.interactive && visual.opacity > 0.08)
        .sort((left, right) => left.scale - right.scale)
        .reverse()
        .find((visual) => {
          const width = visual.node.width * visual.scale;
          const height = visual.node.height * visual.scale;

          return (
            localX >= visual.x &&
            localX <= visual.x + width &&
            localY >= visual.y &&
            localY <= visual.y + height
          );
        }) || null
    );
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = wrapperRef.current?.getBoundingClientRect();
    if (bounds) {
      pointerRef.current = {
        x: clamp((event.clientX - bounds.left) / bounds.width, 0, 1),
        y: clamp((event.clientY - bounds.top) / bounds.height, 0, 1),
      };
    }

    const hit = getPointerHit(event.clientX, event.clientY);
    setHoveredNodeId(hit?.id || null);

    if (hit?.role === "child") {
      setHighlightedChildId(hit.id);
    }

    if (pressedNodeId && pressedNodeId !== hit?.id) {
      setPressedNodeId(null);
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.focus();
    const hit = getPointerHit(event.clientX, event.clientY);
    pressedNodeIdRef.current = hit?.id || null;
    setPressedNodeId(hit?.id || null);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const hit = getPointerHit(event.clientX, event.clientY);
    if (hit && hit.id === pressedNodeIdRef.current) {
      onSelectNode?.(hit.id);
    }

    pressedNodeIdRef.current = null;
    setPressedNodeId(null);
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!focusId) {
      return;
    }

    if (
      (event.key === "Backspace" || event.key === "ArrowLeft") &&
      layout.parentMap[focusId]
    ) {
      event.preventDefault();
      handleGoParent();
      return;
    }

    if (
      (event.key === "ArrowDown" || event.key === "ArrowUp") &&
      currentChildIds.length > 0
    ) {
      event.preventDefault();
      cycleHighlightedChild(event.key === "ArrowDown" ? 1 : -1);
      return;
    }

    if (
      (event.key === "Enter" ||
        event.key === " " ||
        event.key === "ArrowRight") &&
      highlightedChildId
    ) {
      event.preventDefault();
      handleCommitHighlightedChild();
      return;
    }

    if (event.key === "Home" && layout.rootId) {
      event.preventDefault();
      handleGoHome();
    }
  };

  return (
    <div
      ref={wrapperRef}
      tabIndex={0}
      className="pretext-atlas-stage pretext-atlas-shell relative h-full w-full overflow-hidden rounded-[34px] outline-none"
      onKeyDown={handleKeyDown}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        pointerRef.current = { x: 0.5, y: 0.5 };
        setHoveredNodeId(null);
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{ cursor: hoveredNodeId ? "pointer" : "default" }}
    >
      {isFocused && (
        <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-2 ring-cyan-400/30 ring-offset-2 ring-offset-transparent transition-opacity" />
      )}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
            <p className="text-sm font-medium tracking-wide text-slate-300">
              Loading atlas...
            </p>
          </div>
        </div>
      )}

      {showInstructions && (
        <div className="pointer-events-none absolute left-4 top-4 flex items-start gap-2 rounded-2xl border border-white/12 bg-slate-950/30 px-4 py-3 text-[11px] font-semibold tracking-[0.08em] text-slate-200 backdrop-blur-xl">
          <span className="flex-1">
            Click a signal to move. Arrow up and down changes branches. Enter
            dives deeper. Backspace returns.
          </span>
          <button
            onClick={() => setShowInstructions(false)}
            className="pointer-events-auto -mr-1 -mt-1 rounded-full p-1 text-slate-400 transition-colors hover:text-white"
            aria-label="Dismiss instructions"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      )}

      <div className="pointer-events-auto absolute inset-x-0 bottom-4 flex justify-center px-4">
        <div className="w-full max-w-[720px] rounded-[30px] border border-white/12 bg-slate-950/42 p-4 text-slate-100 shadow-[0_24px_80px_rgba(2,6,23,0.4)] backdrop-blur-2xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200/80">
                <MoveRight size={12} />
                Next destination
                {currentChildIds.length > 0 && (
                  <span className="rounded-full bg-white/8 px-2 py-0.5 text-[10px] tracking-[0.16em] text-slate-300">
                    {highlightedChildIndex + 1} of {currentChildIds.length}
                  </span>
                )}
              </div>

              {highlightedChild ? (
                <>
                  <p className="font-display mt-3 truncate text-2xl font-bold tracking-tight text-white">
                    {highlightedChild.data.label}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                    {highlightedChild.data.description ||
                      "This branch is ready to explore."}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-display mt-3 text-2xl font-bold tracking-tight text-white">
                    Leaf node reached
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                    There are no deeper branches from this point. Use Backtrack
                    to move upward or Home to reset the journey.
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 lg:justify-end">
              {layout.parentMap[focusId || ""] && (
                <button
                  type="button"
                  onClick={handleGoParent}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/14 bg-white/8 px-3 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/14"
                >
                  <ArrowLeft size={15} />
                  Backtrack
                </button>
              )}
              <button
                type="button"
                onClick={handleGoHome}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/14 bg-white/8 px-3 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/14"
              >
                <Home size={15} />
                Home
              </button>
              {currentChildIds.length > 1 && (
                <button
                  type="button"
                  onClick={() => cycleHighlightedChild(-1)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/14 bg-white/8 px-3 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/14"
                >
                  <ArrowLeft size={15} />
                  Prev
                </button>
              )}
              {currentChildIds.length > 1 && (
                <button
                  type="button"
                  onClick={() => cycleHighlightedChild(1)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/14 bg-white/8 px-3 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/14"
                >
                  Next
                  <ArrowRight size={15} />
                </button>
              )}
              {highlightedChild && (
                <button
                  type="button"
                  onClick={handleCommitHighlightedChild}
                  className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                >
                  Enter node
                  <ArrowRight size={15} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showAtlasInfo && (
        <div className="pointer-events-none absolute right-4 top-24 hidden max-w-[320px] rounded-2xl border border-white/12 bg-slate-950/30 px-4 py-3 text-left text-[11px] font-semibold tracking-[0.08em] text-slate-300 backdrop-blur-xl xl:block">
          <div className="flex items-start gap-2">
            <span className="flex-1">
              Atlas mode uses the same Pretext-measured cards, but rearranges
              them around your current focus instead of drawing a static graph.
            </span>
            <button
              onClick={() => setShowAtlasInfo(false)}
              className="pointer-events-auto -mr-1 -mt-1 rounded-full p-1 text-slate-400 transition-colors hover:text-white"
              aria-label="Dismiss info"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
