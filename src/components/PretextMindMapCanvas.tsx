import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { PRETEXT_TYPOGRAPHY } from '../services/pretextTextService';
import {
  PRETEXT_THEME_ACCENTS,
  type PretextGraphLayout,
  type PretextMapNode,
  type PretextThemeFamily,
} from '../services/pretextMapLayout';
import { computeViewportBounds } from '../services/spatialGrid';

interface PretextMindMapCanvasProps {
  layout: PretextGraphLayout;
  selectedNodeId?: string | null;
  onSelectNode?: (nodeId: string) => void;
  fitSignal?: number;
}

interface ViewportState {
  x: number;
  y: number;
  scale: number;
}

type InteractionState =
  | {
      type: 'pan';
      pointerId: number;
      startClientX: number;
      startClientY: number;
      originViewport: ViewportState;
    }
  | {
      type: 'drag';
      pointerId: number;
      nodeId: string;
      startWorldX: number;
      startWorldY: number;
      originNodeX: number;
      originNodeY: number;
    };

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

function fitViewport(nodes: PretextMapNode[], width: number, height: number): ViewportState {
  if (!nodes.length || width <= 0 || height <= 0) {
    return { x: 0, y: 0, scale: 1 };
  }

  const bounds = nodes.reduce(
    (acc, node) => ({
      minX: Math.min(acc.minX, node.x),
      minY: Math.min(acc.minY, node.y),
      maxX: Math.max(acc.maxX, node.x + node.width),
      maxY: Math.max(acc.maxY, node.y + node.height),
    }),
    {
      minX: Number.POSITIVE_INFINITY,
      minY: Number.POSITIVE_INFINITY,
      maxX: Number.NEGATIVE_INFINITY,
      maxY: Number.NEGATIVE_INFINITY,
    }
  );

  const boundsWidth = Math.max(1, bounds.maxX - bounds.minX);
  const boundsHeight = Math.max(1, bounds.maxY - bounds.minY);
  const padding = 96;
  const scale = clamp(Math.min((width - padding) / boundsWidth, (height - padding) / boundsHeight), 0.35, 1.25);

  return {
    scale,
    x: (width - boundsWidth * scale) / 2 - bounds.minX * scale,
    y: (height - boundsHeight * scale) / 2 - bounds.minY * scale,
  };
}

function getNodePalette(node: PretextMapNode) {
  const accents = PRETEXT_THEME_ACCENTS[node.themeFamily] || PRETEXT_THEME_ACCENTS.slate;
  const accent = accents[Math.min(node.themeLevel, accents.length - 1)];

  if (node.depth === 0) {
    return {
      accent: '#38bdf8',
      surface: '#0f172a',
      header: '#111827',
      border: hexToRgba('#38bdf8', 0.88),
      title: '#f8fafc',
      body: 'rgba(226,232,240,0.94)',
      pillBackground: 'rgba(255,255,255,0.12)',
      pillText: '#bae6fd',
      shadow: 'rgba(15,23,42,0.36)',
    };
  }

  return {
    accent,
    surface: 'rgba(255,255,255,0.95)',
    header: hexToRgba(accent, 0.12 + node.themeLevel * 0.03),
    border: hexToRgba(accent, 0.48),
    title: '#0f172a',
    body: '#475569',
    pillBackground: hexToRgba(accent, 0.11),
    pillText: accent,
    shadow: hexToRgba(accent, 0.18),
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

function drawCanvasGrid(context: CanvasRenderingContext2D, width: number, height: number, viewport: ViewportState) {
  const spacing = 72 * viewport.scale;
  const offsetX = viewport.x % spacing;
  const offsetY = viewport.y % spacing;

  context.save();
  context.fillStyle = 'rgba(148,163,184,0.18)';

  for (let x = offsetX; x < width; x += spacing) {
    for (let y = offsetY; y < height; y += spacing) {
      context.beginPath();
      context.arc(x, y, 1.2, 0, Math.PI * 2);
      context.fill();
    }
  }

  context.restore();
}

export function PretextMindMapCanvas({ layout, selectedNodeId, onSelectNode, fitSignal = 0 }: PretextMindMapCanvasProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const interactionRef = useRef<InteractionState | null>(null);
  const viewportRef = useRef<ViewportState>({ x: 0, y: 0, scale: 1 });
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [viewport, setViewport] = useState<ViewportState>({ x: 0, y: 0, scale: 1 });
  const [nodes, setNodes] = useState(layout.nodes);

  useEffect(() => {
    viewportRef.current = viewport;
  }, [viewport]);

  useEffect(() => {
    setNodes(layout.nodes);
  }, [layout.nodes]);

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
    const element = wrapperRef.current;
    if (!element) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const bounds = element.getBoundingClientRect();
      const currentViewport = viewportRef.current;
      const pointerX = event.clientX - bounds.left;
      const pointerY = event.clientY - bounds.top;
      const worldX = (pointerX - currentViewport.x) / currentViewport.scale;
      const worldY = (pointerY - currentViewport.y) / currentViewport.scale;
      const nextScale = clamp(currentViewport.scale * Math.exp(-event.deltaY * 0.0015), 0.3, 2.2);

      setViewport({
        scale: nextScale,
        x: pointerX - worldX * nextScale,
        y: pointerY - worldY * nextScale,
      });
    };

    element.addEventListener('wheel', handleWheel, { passive: false });
    return () => element.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    if (!size.width || !size.height || !nodes.length) {
      return;
    }

    setViewport(fitViewport(nodes, size.width, size.height));
  }, [size.width, size.height, fitSignal, layout.rootId, nodes.length]);

  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !size.width || !size.height) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const context = canvas.getContext('2d');
      if (!context) {
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(size.width * dpr);
      canvas.height = Math.floor(size.height * dpr);
      canvas.style.width = `${size.width}px`;
      canvas.style.height = `${size.height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, size.width, size.height);
      drawCanvasGrid(context, size.width, size.height, viewport);

      const bounds = computeViewportBounds(viewport.x, viewport.y, viewport.scale, size.width, size.height, 120);
      const isFar = viewport.scale < 0.35;
      const isMid = viewport.scale >= 0.35 && viewport.scale < 0.75;

      const visibleNodesMap = new Map<string, PretextMapNode>();
      nodes.forEach((node) => {
        if (
          node.x + node.width >= bounds.minX &&
          node.x <= bounds.maxX &&
          node.y + node.height >= bounds.minY &&
          node.y <= bounds.maxY
        ) {
          visibleNodesMap.set(node.id, node);
        }
      });

      context.save();
      context.translate(viewport.x, viewport.y);
      context.scale(viewport.scale, viewport.scale);

      layout.edges.forEach((edge) => {
        if (!visibleNodesMap.has(edge.source) && !visibleNodesMap.has(edge.target)) {
          return;
        }

        const source = nodeMap.get(edge.source);
        const target = nodeMap.get(edge.target);
        if (!source || !target) {
          return;
        }

        const targetPalette = getNodePalette(target);
        const startX = source.x + source.width;
        const startY = source.y + source.height / 2;
        const endX = target.x;
        const endY = target.y + target.height / 2;
        const deltaX = Math.abs(endX - startX);
        const curve = Math.max(56, deltaX * 0.42);

        context.beginPath();
        context.moveTo(startX, startY);
        context.bezierCurveTo(startX + curve, startY, endX - curve, endY, endX, endY);
        context.strokeStyle = hexToRgba(targetPalette.accent, 0.42);
        context.lineWidth = 2;
        context.stroke();
      });

      const orderedVisibleNodes = Array.from(visibleNodesMap.values()).sort((left, right) => {
        if (left.id === selectedNodeId) {
          return 1;
        }
        if (right.id === selectedNodeId) {
          return -1;
        }
        return left.depth - right.depth;
      });

      orderedVisibleNodes.forEach((node) => {
        const palette = getNodePalette(node);
        const isSelected = node.id === selectedNodeId;
        const radius = node.depth === 0 ? 28 : 24;
        const paddingX = node.depth === 0 ? 26 : 20;
        const paddingY = node.depth === 0 ? 24 : 18;

        context.save();
        if (!isFar && (isSelected || !isMid)) {
          context.shadowColor = isSelected ? hexToRgba(palette.accent, 0.28) : palette.shadow;
          context.shadowBlur = isSelected ? 26 : 18;
          context.shadowOffsetY = 12;
        } else {
          context.shadowColor = 'transparent';
          context.shadowBlur = 0;
        }
        context.beginPath();
        context.roundRect(node.x, node.y, node.width, node.height, radius);
        context.fillStyle = palette.surface;
        context.fill();
        context.restore();

        context.beginPath();
        context.roundRect(node.x, node.y, node.width, Math.min(node.height, node.depth === 0 ? 88 : 72), radius);
        context.fillStyle = palette.header;
        context.fill();

        context.beginPath();
        context.roundRect(node.x, node.y, node.width, node.height, radius);
        context.lineWidth = isSelected ? 2.4 : 1.2;
        context.strokeStyle = isSelected ? palette.accent : palette.border;
        context.stroke();

        let cursorY = node.y + paddingY;

        context.textBaseline = 'top';
        context.fillStyle = palette.title;
        context.font = node.depth === 0 ? PRETEXT_TYPOGRAPHY.heroTitle.font : PRETEXT_TYPOGRAPHY.title.font;
        node.title.lines.forEach((line) => {
          context.fillText(line.text, node.x + paddingX, cursorY);
          cursorY += node.title.lineHeight;
        });

        if (node.badges.length > 0) {
          cursorY += 10;
          drawBadgeRow(context, node.badges, node.x + paddingX, cursorY, palette.pillBackground, palette.pillText);
          cursorY += 24;
        }

        if (node.description && node.description.lines.length > 0) {
          cursorY += 12;
          context.fillStyle = palette.body;
          context.font = PRETEXT_TYPOGRAPHY.body.font;
          node.description.lines.forEach((line) => {
            context.fillText(line.text, node.x + paddingX, cursorY);
            cursorY += node.description.lineHeight;
          });
        }

        if (node.tags.length > 0) {
          cursorY += 12;
          drawBadgeRow(context, node.tags, node.x + paddingX, cursorY, hexToRgba('#0f172a', node.depth === 0 ? 0.14 : 0.06), node.depth === 0 ? '#e2e8f0' : '#475569');
        }
      });

      context.restore();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [layout.edges, nodeMap, nodes, selectedNodeId, size.height, size.width, viewport]);

  const getWorldPoint = (clientX: number, clientY: number) => {
    const bounds = wrapperRef.current?.getBoundingClientRect();
    if (!bounds) {
      return { x: 0, y: 0 };
    }

    return {
      x: (clientX - bounds.left - viewport.x) / viewport.scale,
      y: (clientY - bounds.top - viewport.y) / viewport.scale,
    };
  };

  const getNodeAtPoint = (worldX: number, worldY: number) => {
    for (let index = nodes.length - 1; index >= 0; index -= 1) {
      const node = nodes[index];
      if (
        worldX >= node.x &&
        worldX <= node.x + node.width &&
        worldY >= node.y &&
        worldY <= node.y + node.height
      ) {
        return node;
      }
    }

    return null;
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const worldPoint = getWorldPoint(event.clientX, event.clientY);
    const hitNode = getNodeAtPoint(worldPoint.x, worldPoint.y);

    if (hitNode) {
      interactionRef.current = {
        type: 'drag',
        pointerId: event.pointerId,
        nodeId: hitNode.id,
        startWorldX: worldPoint.x,
        startWorldY: worldPoint.y,
        originNodeX: hitNode.x,
        originNodeY: hitNode.y,
      };
      onSelectNode?.(hitNode.id);
    } else {
      interactionRef.current = {
        type: 'pan',
        pointerId: event.pointerId,
        startClientX: event.clientX,
        startClientY: event.clientY,
        originViewport: viewport,
      };
    }

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const interaction = interactionRef.current;
    if (!interaction || interaction.pointerId !== event.pointerId) {
      return;
    }

    if (interaction.type === 'pan') {
      setViewport({
        ...interaction.originViewport,
        x: interaction.originViewport.x + (event.clientX - interaction.startClientX),
        y: interaction.originViewport.y + (event.clientY - interaction.startClientY),
      });
      return;
    }

    const worldPoint = getWorldPoint(event.clientX, event.clientY);
    const nextX = interaction.originNodeX + (worldPoint.x - interaction.startWorldX);
    const nextY = interaction.originNodeY + (worldPoint.y - interaction.startWorldY);

    setNodes((currentNodes) =>
      currentNodes.map((node) =>
        node.id === interaction.nodeId
          ? {
              ...node,
              x: nextX,
              y: nextY,
            }
          : node
      )
    );
  };

  const clearInteraction = (pointerId: number, currentTarget: HTMLDivElement) => {
    if (interactionRef.current?.pointerId === pointerId) {
      interactionRef.current = null;
    }

    if (currentTarget.hasPointerCapture(pointerId)) {
      currentTarget.releasePointerCapture(pointerId);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="pretext-canvas-stage pretext-canvas-shell relative h-full w-full overflow-hidden rounded-[30px]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={(event) => clearInteraction(event.pointerId, event.currentTarget)}
      onPointerCancel={(event) => clearInteraction(event.pointerId, event.currentTarget)}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute bottom-4 left-4 rounded-2xl border border-white/60 bg-white/80 px-3 py-2 text-[11px] font-semibold tracking-[0.04em] text-slate-500 shadow-lg backdrop-blur-xl">
        Drag cards, pan empty space, zoom with the wheel.
      </div>
    </div>
  );
}