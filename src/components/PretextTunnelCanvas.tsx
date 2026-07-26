import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { ArrowLeft, ArrowRight, Home, MoveRight } from 'lucide-react';
import { PRETEXT_TYPOGRAPHY } from '../services/pretextTextService';
import {
  PRETEXT_THEME_ACCENTS,
  type PretextGraphLayout,
  type PretextMapNode,
} from '../services/pretextMapLayout';

interface PretextTunnelCanvasProps {
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

interface ProjectedRect {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  interactive: boolean;
}

type TunnelRole = 'parent' | 'focus' | 'child';

interface TunnelNode {
  id: string;
  node: PretextMapNode;
  role: TunnelRole;
  targetX: number;
  targetY: number;
  targetZ: number;
  targetOpacity: number;
  interactive: boolean;
  descendantCount: number;
}

interface AnimatedTunnelNode extends TunnelNode {
  x: number;
  y: number;
  z: number;
  opacity: number;
  exiting: boolean;
}

interface TunnelPalette {
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

interface StarPoint {
  x: number;
  y: number;
  z: number;
  speed: number;
  alpha: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function hexToRgba(hex: string, alpha: number) {
  const normalized = hex.replace('#', '');
  const bigint = parseInt(normalized.length === 3 ? normalized.split('').map((part) => part + part).join('') : normalized, 16);
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

function getNodePalette(node: PretextMapNode): TunnelPalette {
  const accents = PRETEXT_THEME_ACCENTS[node.themeFamily] || PRETEXT_THEME_ACCENTS.slate;
  const accent = accents[Math.min(node.themeLevel, accents.length - 1)];

  if (node.depth === 0) {
    return {
      accent: '#38bdf8',
      surface: '#0f172a',
      header: '#111827',
      border: hexToRgba('#38bdf8', 0.92),
      title: '#f8fafc',
      body: 'rgba(226,232,240,0.96)',
      pillBackground: 'rgba(255,255,255,0.12)',
      pillText: '#bae6fd',
      shadow: 'rgba(15,23,42,0.42)',
    };
  }

  return {
    accent,
    surface: 'rgba(255,255,255,0.96)',
    header: hexToRgba(accent, 0.15 + node.themeLevel * 0.03),
    border: hexToRgba(accent, 0.46),
    title: '#0f172a',
    body: '#475569',
    pillBackground: hexToRgba(accent, 0.11),
    pillText: accent,
    shadow: hexToRgba(accent, 0.18),
  };
}

function generateStars(width: number, height: number) {
  const random = createSeededRandom(Math.floor(width * 17 + height * 11 + 23));
  const count = Math.max(140, Math.floor((width * height) / 14000));

  return Array.from({ length: count }, () => ({
    x: random() * 2 - 1,
    y: random() * 2 - 1,
    z: random(),
    speed: 0.2 + random() * 0.95,
    alpha: 0.18 + random() * 0.58,
  })) as StarPoint[];
}

function buildDescendantCountMap(childrenMap: Record<string, string[]>) {
  const memo: Record<string, number> = {};

  const count = (nodeId: string): number => {
    if (memo[nodeId] !== undefined) {
      return memo[nodeId];
    }

    const children = childrenMap[nodeId] || [];
    memo[nodeId] = children.reduce((sum, childId) => sum + 1 + count(childId), 0);
    return memo[nodeId];
  };

  Object.keys(childrenMap).forEach((nodeId) => {
    count(nodeId);
  });

  return memo;
}

function buildTunnelScene(
  layout: PretextGraphLayout,
  nodeMap: Map<string, PretextMapNode>,
  descendantCounts: Record<string, number>,
  focusId: string,
  size: Size
) {
  const focusNode = nodeMap.get(focusId) || layout.nodes[0] || null;
  if (!focusNode || size.width <= 0 || size.height <= 0) {
    return [] as TunnelNode[];
  }

  const parentId = layout.parentMap[focusId];
  const parentNode = parentId ? nodeMap.get(parentId) || null : null;
  const childNodes = (layout.childrenMap[focusId] || []).map((childId) => nodeMap.get(childId)).filter(Boolean) as PretextMapNode[];
  const sceneNodes: TunnelNode[] = [];

  if (parentNode) {
    sceneNodes.push({
      id: parentNode.id,
      node: parentNode,
      role: 'parent',
      targetX: -Math.min(280, size.width * 0.18),
      targetY: Math.min(220, size.height * 0.22),
      targetZ: 120,
      targetOpacity: 0.82,
      interactive: true,
      descendantCount: descendantCounts[parentNode.id] || 0,
    });
  }

  sceneNodes.push({
    id: focusNode.id,
    node: focusNode,
    role: 'focus',
    targetX: 0,
    targetY: size.height < 720 ? 52 : 76,
    targetZ: 34,
    targetOpacity: 1,
    interactive: false,
    descendantCount: descendantCounts[focusNode.id] || 0,
  });

  const compact = size.width < 1120 || size.height < 760;
  const itemsPerRing = compact ? 3 : 4;
  const baseRadiusX = compact ? 420 : 540;
  const baseRadiusY = compact ? 120 : 160;

  for (let index = 0; index < childNodes.length; index += itemsPerRing) {
    const ringNodes = childNodes.slice(index, index + itemsPerRing);
    const ringIndex = Math.floor(index / itemsPerRing);
    const startAngle = compact ? -1.05 : -1.15;
    const endAngle = compact ? 1.05 : 1.15;

    ringNodes.forEach((node, ringNodeIndex) => {
      const angle =
        ringNodes.length === 1
          ? 0
          : startAngle + ((endAngle - startAngle) / (ringNodes.length - 1)) * ringNodeIndex;

      sceneNodes.push({
        id: node.id,
        node,
        role: 'child',
        targetX: Math.sin(angle) * (baseRadiusX + ringIndex * (compact ? 160 : 220)),
        targetY: Math.cos(angle) * (baseRadiusY + ringIndex * (compact ? 45 : 60)) - 140,
        targetZ: 250 + ringIndex * (compact ? 170 : 210),
        targetOpacity: ringIndex === 0 ? 0.98 : compact ? 0.72 : 0.8,
        interactive: true,
        descendantCount: descendantCounts[node.id] || 0,
      });
    });
  }

  return sceneNodes;
}

function getCardLabel(role: TunnelRole, descendantCount: number) {
  if (role === 'focus') {
    return 'Current signal';
  }

  if (role === 'parent') {
    return 'Backtrack';
  }

  return descendantCount > 0 ? `${descendantCount} deeper` : 'End point';
}

function getAnimatedNodes(record: Record<string, AnimatedTunnelNode>) {
  return Object.values(record) as AnimatedTunnelNode[];
}

function projectPoint(worldX: number, worldY: number, z: number, size: Size, pointer: PointerState) {
  const perspective = Math.max(780, size.width * 0.92);
  const depthScale = perspective / (perspective + z);
  const parallaxX = (pointer.x - 0.5) * 70 * (z / (perspective + z));
  const parallaxY = (pointer.y - 0.5) * 46 * (z / (perspective + z));

  return {
    x: size.width * 0.5 + (worldX + parallaxX) * depthScale,
    y: size.height * 0.5 + (worldY + parallaxY) * depthScale,
    scale: depthScale,
  };
}

function drawBadgeRow(
  context: CanvasRenderingContext2D,
  labels: Array<{ label: string; width: number }>,
  x: number,
  y: number,
  background: string,
  color: string
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

function drawTunnelCard(
  context: CanvasRenderingContext2D,
  visual: AnimatedTunnelNode,
  renderScale: number,
  hoveredNodeId: string | null,
  highlightedChildId: string | null,
  visitedSet: Set<string>
) {
  const { node, role, opacity, descendantCount } = visual;

  context.filter = 'none';

  const palette = getNodePalette(node);
  const isFocused = role === 'focus';
  const isHovered = node.id === hoveredNodeId;
  const isHighlighted = role === 'child' && node.id === highlightedChildId;
  const isVisited = visitedSet.has(node.id);
  const width = node.width;
  const height = node.height;
  const radius = isFocused ? 30 : 24;
  const paddingX = isFocused ? 26 : 20;
  const paddingY = isFocused ? 24 : 18;

  context.save();
  context.scale(renderScale, renderScale);
  context.globalAlpha = opacity;

  context.save();
  if (isFocused || isHighlighted || isHovered) {
    context.shadowColor = hexToRgba(palette.accent, 0.4);
    context.shadowBlur = isFocused ? 28 : 20;
    context.shadowOffsetY = isFocused ? 14 : 8;
  } else {
    context.shadowColor = 'transparent';
    context.shadowBlur = 0;
  }
  context.beginPath();
  context.roundRect(0, 0, width, height, radius);
  context.fillStyle = isFocused ? 'rgba(10,17,32,0.97)' : palette.surface;
  context.fill();
  context.restore();

  context.beginPath();
  context.roundRect(0, 0, width, Math.min(height, isFocused ? 94 : 72), radius);
  context.fillStyle = isFocused ? 'rgba(17,24,39,1)' : palette.header;
  context.fill();

  context.beginPath();
  context.roundRect(0, 0, width, height, radius);
  context.lineWidth = isFocused ? 2.6 : isHighlighted || isHovered ? 2.2 : 1.2;
  context.strokeStyle = isFocused || isHighlighted || isHovered ? palette.accent : palette.border;
  context.stroke();

  context.fillStyle = isFocused ? 'rgba(186,230,253,0.92)' : palette.pillText;
  context.font = PRETEXT_TYPOGRAPHY.badge.font;
  context.fillText(getCardLabel(role, descendantCount), paddingX, 12);

  if (isVisited && role === 'child') {
    context.fillStyle = hexToRgba('#22c55e', 0.18);
    context.beginPath();
    context.roundRect(width - 48, 10, 34, 18, 9);
    context.fill();

    context.fillStyle = '#16a34a';
    context.fillText('SEEN', width - 39, 14);
  }

  let cursorY = isFocused ? 34 : 28;
  context.textBaseline = 'top';
  context.fillStyle = palette.title;
  context.font = isFocused ? PRETEXT_TYPOGRAPHY.heroTitle.font : PRETEXT_TYPOGRAPHY.title.font;

  node.title.lines.forEach((line, index) => {
    if (!isFocused && index > 1) {
      return;
    }

    context.fillText(line.text, paddingX, cursorY);
    cursorY += node.title.lineHeight;
  });

  if ((role === 'focus' || role === 'child') && node.badges.length > 0) {
    cursorY += 10;
    drawBadgeRow(context, node.badges, paddingX, cursorY, palette.pillBackground, palette.pillText);
    cursorY += 24;
  }

  const descriptionLimit = role === 'focus' ? 3 : role === 'child' ? 2 : 1;
  if (node.description && node.description.lines.length > 0) {
    cursorY += 10;
    context.fillStyle = palette.body;
    context.font = PRETEXT_TYPOGRAPHY.body.font;
    node.description.lines.slice(0, descriptionLimit).forEach((line) => {
      context.fillText(line.text, paddingX, cursorY);
      cursorY += node.description.lineHeight;
    });
  }

  if ((role === 'focus' || role === 'child') && descendantCount > 0) {
    cursorY += 12;
    context.fillStyle = hexToRgba('#0f172a', isFocused ? 0.18 : 0.06);
    context.beginPath();
    context.roundRect(paddingX, Math.min(cursorY, height - 36), Math.min(width - paddingX * 2, 140), 22, 11);
    context.fill();
    context.fillStyle = isFocused ? '#e2e8f0' : '#475569';
    context.font = PRETEXT_TYPOGRAPHY.badge.font;
    context.fillText(descendantCount === 1 ? '1 deeper branch' : `${descendantCount} deeper branches`, paddingX + 10, Math.min(cursorY, height - 36) + 5);
  }

  context.filter = 'none';
  context.restore();
}

export function PretextTunnelCanvas({
  layout,
  selectedNodeId,
  visitedNodeIds = [],
  onSelectNode,
}: PretextTunnelCanvasProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pressedNodeIdRef = useRef<string | null>(null);
  const visualsRef = useRef<Record<string, AnimatedTunnelNode>>({});
  const projectedRectsRef = useRef<Record<string, ProjectedRect>>({});
  const pointerRef = useRef<PointerState>({ x: 0.5, y: 0.5 });
  const starsRef = useRef<StarPoint[]>([]);
  const hoveredNodeIdRef = useRef<string | null>(null);

  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  const nodeMap = useMemo(() => new Map(layout.nodes.map((node) => [node.id, node])), [layout.nodes]);
  const descendantCounts = useMemo(() => buildDescendantCountMap(layout.childrenMap), [layout.childrenMap]);
  const focusId = selectedNodeId || layout.rootId || layout.nodes[0]?.id || null;
  const currentChildIds = focusId ? layout.childrenMap[focusId] || [] : [];
  const visitedSet = useMemo(() => new Set(visitedNodeIds), [visitedNodeIds]);
  const [highlightedChildId, setHighlightedChildId] = useState<string | null>(currentChildIds[0] || null);
  const highlightedChild = highlightedChildId ? nodeMap.get(highlightedChildId) || null : null;
  const highlightedChildIndex = highlightedChildId ? currentChildIds.indexOf(highlightedChildId) : -1;

  const cycleHighlightedChild = (delta: number) => {
    if (!currentChildIds.length) {
      return;
    }

    const currentIndex = Math.max(0, currentChildIds.indexOf(highlightedChildId || currentChildIds[0]));
    const nextIndex = (currentIndex + delta + currentChildIds.length) % currentChildIds.length;
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
    setHighlightedChildId((current) => (current && currentChildIds.includes(current) ? current : currentChildIds[0] || null));
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

    return buildTunnelScene(layout, nodeMap, descendantCounts, focusId, size);
  }, [descendantCounts, focusId, layout, nodeMap, size]);

  useEffect(() => {
    if (!size.width || !size.height) {
      return;
    }

    const nextIds = new Set(sceneNodes.map((sceneNode) => sceneNode.id));

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
        x: 0,
        y: 0,
        z: 760,
        opacity: 0,
        exiting: false,
      };
    });

    getAnimatedNodes(visualsRef.current).forEach((visual) => {
      if (nextIds.has(visual.id)) {
        return;
      }

      visual.targetX = 0;
      visual.targetY = 0;
      visual.targetZ = 18;
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
  }, [size]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !size.width || !size.height) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    let frameId = 0;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, size.width, size.height);

      const time = performance.now() * 0.00035;
      const pointer = pointerRef.current;
      const projectedRects: Record<string, ProjectedRect> = {};

      const gradient = context.createLinearGradient(0, 0, 0, size.height);
      gradient.addColorStop(0, '#030712');
      gradient.addColorStop(0.5, '#08101f');
      gradient.addColorStop(1, '#0a1426');
      context.fillStyle = gradient;
      context.fillRect(0, 0, size.width, size.height);

      const glowTop = context.createRadialGradient(
        size.width * 0.5,
        size.height * 0.18,
        0,
        size.width * 0.5,
        size.height * 0.18,
        size.width * 0.52
      );
      glowTop.addColorStop(0, 'rgba(56,189,248,0.18)');
      glowTop.addColorStop(1, 'rgba(56,189,248,0)');
      context.fillStyle = glowTop;
      context.fillRect(0, 0, size.width, size.height);

      const glowBottom = context.createRadialGradient(
        size.width * 0.55,
        size.height * 0.88,
        0,
        size.width * 0.55,
        size.height * 0.88,
        size.width * 0.48
      );
      glowBottom.addColorStop(0, 'rgba(45,212,191,0.12)');
      glowBottom.addColorStop(1, 'rgba(45,212,191,0)');
      context.fillStyle = glowBottom;
      context.fillRect(0, 0, size.width, size.height);

      starsRef.current.forEach((star, index) => {
        const z = (star.z + time * star.speed + index * 0.0008) % 1;
        const spread = 0.18 + z * 1.32;
        const x = size.width * 0.5 + star.x * size.width * 0.48 * spread + (pointer.x - 0.5) * 36 * z;
        const y = size.height * 0.5 + star.y * size.height * 0.38 * spread + (pointer.y - 0.5) * 24 * z;
        const radius = 0.5 + z * 2.4;
        const alpha = star.alpha * (0.3 + z * 0.8);
        
        let color = `rgba(224,242,254,${alpha})`;
        if (index % 5 === 0) {
          color = `rgba(165,243,252,${alpha})`; // Soft Cyan
        } else if (index % 7 === 0) {
          color = `rgba(233,213,255,${alpha})`; // Soft Purple
        }

        // Star glowing background blur aura for close particles
        if (z > 0.6) {
          const glowRadius = radius * 3.5;
          const glow = context.createRadialGradient(x, y, 0, x, y, glowRadius);
          const colorHex = index % 5 === 0 ? "#22d3ee" : index % 7 === 0 ? "#c084fc" : "#38bdf8";
          glow.addColorStop(0, hexToRgba(colorHex, alpha * 0.26));
          glow.addColorStop(1, "rgba(0,0,0,0)");
          context.fillStyle = glow;
          context.beginPath();
          context.arc(x, y, glowRadius, 0, Math.PI * 2);
          context.fill();
        }

        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      });

      context.save();
      context.strokeStyle = 'rgba(125,211,252,0.14)';
      context.lineWidth = 1.4;
      const tunnelFlow = (performance.now() * 0.05) % 170;

      for (let frameIndex = 0; frameIndex < 8; frameIndex += 1) {
        const z = frameIndex * 170 + tunnelFlow;
        const projected = projectPoint(0, 0, z, size, pointer);
        const frameWidth = size.width * 0.92 * projected.scale;
        const frameHeight = size.height * 0.72 * projected.scale;
        const frameX = projected.x - frameWidth / 2;
        const frameY = projected.y - frameHeight / 2;

        context.globalAlpha = 0.26 - frameIndex * 0.025;
        context.beginPath();
        context.roundRect(frameX, frameY, frameWidth, frameHeight, 28 * projected.scale);
        context.stroke();
      }
      context.restore();

      Object.keys(visualsRef.current).forEach((visualId) => {
        const visual = visualsRef.current[visualId];
        visual.x += (visual.targetX - visual.x) * 0.11;
        visual.y += (visual.targetY - visual.y) * 0.11;
        visual.z += (visual.targetZ - visual.z) * 0.1;
        visual.opacity += (visual.targetOpacity - visual.opacity) * 0.12;

        if (visual.exiting && visual.opacity < 0.02) {
          delete visualsRef.current[visualId];
        }
      });

      const animatedNodes = getAnimatedNodes(visualsRef.current);
      const focusVisual = focusId ? visualsRef.current[focusId] || null : null;

      if (focusVisual) {
        const focusProjection = projectPoint(focusVisual.x, focusVisual.y, focusVisual.z, size, pointer);
        context.save();
        context.globalAlpha = 0.28;
        context.fillStyle = 'rgba(56,189,248,0.18)';
        context.beginPath();
        context.ellipse(focusProjection.x, focusProjection.y + 120, 220, 50, 0, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }

      animatedNodes.forEach((visual) => {
        if (!focusVisual || visual.id === focusVisual.id || visual.opacity < 0.04) {
          return;
        }

        const startProjection = projectPoint(focusVisual.x, focusVisual.y + 24, focusVisual.z + 24, size, pointer);
        const endProjection = projectPoint(visual.x, visual.y, visual.z, size, pointer);
        const curve = Math.max(42, Math.abs(endProjection.x - startProjection.x) * 0.22);
        const palette = getNodePalette(visual.node);

        context.save();
        context.globalAlpha = Math.min(0.7, visual.opacity);
        context.beginPath();
        context.moveTo(startProjection.x, startProjection.y);
        context.bezierCurveTo(
          startProjection.x + curve,
          startProjection.y + 20,
          endProjection.x - curve,
          endProjection.y - 12,
          endProjection.x,
          endProjection.y
        );
        context.strokeStyle =
          visual.role === 'parent'
            ? 'rgba(251,191,36,0.38)'
            : visual.id === highlightedChildId
              ? 'rgba(56,189,248,0.74)'
              : hexToRgba(palette.accent, 0.34);
        context.lineWidth = visual.id === highlightedChildId ? 2.6 : 1.6;
        context.setLineDash(visual.role === 'parent' ? [10, 8] : []);
        context.stroke();
        context.restore();
      });

      const highlightedVisual = highlightedChildId ? visualsRef.current[highlightedChildId] || null : null;
      if (highlightedVisual && highlightedVisual.opacity > 0.04) {
        const highlightedProjection = projectPoint(highlightedVisual.x, highlightedVisual.y, highlightedVisual.z, size, pointer);
        const renderScale = highlightedProjection.scale;
        const width = highlightedVisual.node.width * renderScale;
        const height = highlightedVisual.node.height * renderScale;
        const pulse = 1 + Math.sin(time * 12) * 0.04;

        context.save();
        context.globalAlpha = Math.min(0.5, highlightedVisual.opacity * 0.7);
        context.strokeStyle = 'rgba(125,211,252,0.8)';
        context.lineWidth = 2;
        context.beginPath();
        context.roundRect(
          highlightedProjection.x - width / 2 - 14 * pulse,
          highlightedProjection.y - height / 2 - 14 * pulse,
          width + 28 * pulse,
          height + 28 * pulse,
          28
        );
        context.stroke();
        context.restore();
      }

      animatedNodes
        .slice()
        .sort((left, right) => right.z - left.z)
        .forEach((visual) => {
          if (visual.opacity < 0.04) {
            return;
          }

          const projection = projectPoint(visual.x, visual.y, visual.z, size, pointer);
          const renderScale = projection.scale * (visual.role === 'focus' ? 1.08 : visual.role === 'parent' ? 0.92 : 1);
          const cardWidth = visual.node.width * renderScale;
          const cardHeight = visual.node.height * renderScale;
          const cardX = projection.x - cardWidth / 2;
          const cardY = projection.y - cardHeight / 2;

          projectedRects[visual.id] = {
            id: visual.id,
            x: cardX,
            y: cardY,
            width: cardWidth,
            height: cardHeight,
            interactive: visual.interactive,
          };

          context.save();
          context.translate(cardX, cardY);
          drawTunnelCard(context, visual, renderScale, hoveredNodeIdRef.current, highlightedChildId, visitedSet);
          context.restore();
        });

      projectedRectsRef.current = projectedRects;
      frameId = window.requestAnimationFrame(draw);
    };

    frameId = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(frameId);
  }, [focusId, highlightedChildId, size.height, size.width, visitedSet]);

  const getPointerHit = (clientX: number, clientY: number) => {
    const bounds = wrapperRef.current?.getBoundingClientRect();
    if (!bounds) {
      return null;
    }

    const localX = clientX - bounds.left;
    const localY = clientY - bounds.top;

    return (
      (Object.values(projectedRectsRef.current) as ProjectedRect[])
        .filter((rect) => rect.interactive)
        .sort((left, right) => left.width - right.width)
        .reverse()
        .find((rect) => {
          return localX >= rect.x && localX <= rect.x + rect.width && localY >= rect.y && localY <= rect.y + rect.height;
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
    const hitId = hit?.id || null;
    hoveredNodeIdRef.current = hitId;

    if (wrapperRef.current) {
      wrapperRef.current.style.cursor = hit ? 'pointer' : 'default';
    }

    if (hit && currentChildIds.includes(hit.id)) {
      setHighlightedChildId(hit.id);
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.focus();
    pressedNodeIdRef.current = getPointerHit(event.clientX, event.clientY)?.id || null;
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const hit = getPointerHit(event.clientX, event.clientY);
    if (hit && hit.id === pressedNodeIdRef.current) {
      onSelectNode?.(hit.id);
    }

    pressedNodeIdRef.current = null;
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!focusId) {
      return;
    }

    if ((event.key === 'Backspace' || event.key === 'ArrowLeft') && layout.parentMap[focusId]) {
      event.preventDefault();
      handleGoParent();
      return;
    }

    if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && currentChildIds.length > 0) {
      event.preventDefault();
      cycleHighlightedChild(event.key === 'ArrowDown' ? 1 : -1);
      return;
    }

    if ((event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') && highlightedChildId) {
      event.preventDefault();
      handleCommitHighlightedChild();
      return;
    }

    if (event.key === 'Home' && layout.rootId) {
      event.preventDefault();
      handleGoHome();
    }
  };

  return (
    <div
      ref={wrapperRef}
      tabIndex={0}
      className="relative h-full w-full overflow-hidden rounded-[34px] outline-none"
      onKeyDown={handleKeyDown}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        pointerRef.current = { x: 0.5, y: 0.5 };
        hoveredNodeIdRef.current = null;
        if (wrapperRef.current) {
          wrapperRef.current.style.cursor = 'default';
        }
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div className="pointer-events-none absolute left-4 top-4 rounded-2xl border border-white/12 bg-slate-950/30 px-4 py-3 text-[11px] font-semibold tracking-[0.08em] text-slate-200 backdrop-blur-xl">
        Tunnel mode projects measured cards through depth. Arrow keys align with the next branch. Enter dives deeper.
      </div>

      <div className="pointer-events-none absolute right-4 top-4 rounded-2xl border border-white/12 bg-slate-950/30 px-4 py-3 text-right text-[11px] font-semibold tracking-[0.08em] text-slate-300 backdrop-blur-xl">
        Depth {focusId ? (layout.depthMap[focusId] || 0) + 1 : 1} of {layout.maxDepth + 1}
      </div>

      <div className="pointer-events-auto absolute inset-x-0 bottom-4 flex justify-center px-4">
        <div className="w-full max-w-[760px] rounded-[30px] border border-white/12 bg-slate-950/92 p-4 text-slate-100 shadow-[0_24px_80px_rgba(2,6,23,0.4)] backdrop-blur-2xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200/80">
                <MoveRight size={12} />
                Next trajectory
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
                    {highlightedChild.data.description || 'This branch is aligned ahead in the tunnel.'}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-display mt-3 text-2xl font-bold tracking-tight text-white">Depth limit reached</p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                    There is no deeper branch from this node. Backtrack or jump home to re-enter the tunnel.
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 lg:justify-end">
              {layout.parentMap[focusId || ''] && (
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
                  Dive deeper
                  <ArrowRight size={15} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}