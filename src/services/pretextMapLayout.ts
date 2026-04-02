import * as dagre from 'dagre';
import { EdgeData, MindMapData, NodeData } from './llmService';
import {
  PRETEXT_TYPOGRAPHY,
  findShrinkWrapWidth,
  measureSingleLineWidth,
  measureTextBlock,
  type PretextMeasuredBlock,
} from './pretextTextService';

const THEME_FAMILIES = ['blue', 'green', 'amber', 'purple', 'teal', 'pink', 'orange', 'red'] as const;

export type PretextThemeFamily = 'slate' | (typeof THEME_FAMILIES)[number];

export const PRETEXT_THEME_ACCENTS: Record<PretextThemeFamily, string[]> = {
  slate: ['#94a3b8', '#64748b', '#475569', '#334155', '#1e293b'],
  red: ['#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b'],
  orange: ['#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412'],
  amber: ['#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e'],
  green: ['#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534'],
  teal: ['#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59'],
  blue: ['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af'],
  purple: ['#c084fc', '#a855f7', '#9333ea', '#7e22ce', '#6b21a8'],
  pink: ['#f472b6', '#ec4899', '#db2777', '#be185d', '#9d174d'],
};

export interface PretextBadgeLayout {
  label: string;
  width: number;
}

export interface PretextMapNode {
  id: string;
  data: NodeData;
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  themeFamily: PretextThemeFamily;
  themeLevel: number;
  title: PretextMeasuredBlock;
  description: PretextMeasuredBlock | null;
  badges: PretextBadgeLayout[];
  tags: PretextBadgeLayout[];
}

export interface PretextMapEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export interface PretextGraphLayout {
  nodes: PretextMapNode[];
  edges: PretextMapEdge[];
  rootId: string | null;
  maxDepth: number;
  parentMap: Record<string, string | undefined>;
  childrenMap: Record<string, string[]>;
  depthMap: Record<string, number>;
}

function formatMetaLabel(value?: string) {
  return value ? value.replace(/-/g, ' ').toUpperCase() : null;
}

function buildGraphMaps(data: MindMapData) {
  const inDegree: Record<string, number> = {};
  const parentMap: Record<string, string | undefined> = {};
  const childrenMap: Record<string, string[]> = {};
  const depthMap: Record<string, number> = {};

  data.nodes.forEach((node) => {
    inDegree[node.id] = 0;
    childrenMap[node.id] = [];
  });

  data.edges.forEach((edge) => {
    inDegree[edge.target] = (inDegree[edge.target] || 0) + 1;
    childrenMap[edge.source] = childrenMap[edge.source] || [];
    childrenMap[edge.source].push(edge.target);
    parentMap[edge.target] = edge.source;
  });

  const roots = data.nodes.filter((node) => inDegree[node.id] === 0);
  const rootId = roots[0]?.id || data.nodes[0]?.id || null;

  const walk = (nodeId: string, depth: number) => {
    if (depthMap[nodeId] !== undefined) {
      return;
    }

    depthMap[nodeId] = depth;
    (childrenMap[nodeId] || []).forEach((childId) => walk(childId, depth + 1));
  };

  if (rootId) {
    walk(rootId, 0);
  }

  data.nodes.forEach((node) => {
    if (depthMap[node.id] === undefined) {
      depthMap[node.id] = 0;
    }
  });

  return { rootId, parentMap, childrenMap, depthMap };
}

function assignThemes(nodeIds: string[], edges: EdgeData[], rootId: string | null) {
  const inDegree: Record<string, number> = {};
  const childrenMap: Record<string, string[]> = {};
  const themeMap: Record<string, { family: PretextThemeFamily; level: number }> = {};

  nodeIds.forEach((id) => {
    inDegree[id] = 0;
    childrenMap[id] = [];
  });

  edges.forEach((edge) => {
    inDegree[edge.target] = (inDegree[edge.target] || 0) + 1;
    childrenMap[edge.source] = childrenMap[edge.source] || [];
    childrenMap[edge.source].push(edge.target);
  });

  const roots = rootId ? [rootId] : nodeIds.filter((id) => inDegree[id] === 0);
  let themeIndex = 0;

  const walk = (nodeId: string, family: PretextThemeFamily, level: number, isTrunk: boolean) => {
    if (themeMap[nodeId]) {
      return;
    }

    themeMap[nodeId] = { family, level };
    const children = childrenMap[nodeId] || [];

    if (isTrunk) {
      if (children.length > 1) {
        children.forEach((childId) => {
          const childFamily = THEME_FAMILIES[themeIndex % THEME_FAMILIES.length];
          themeIndex += 1;
          walk(childId, childFamily, 0, false);
        });
      } else if (children.length === 1) {
        walk(children[0], 'slate', 0, true);
      }
      return;
    }

    children.forEach((childId) => {
      walk(childId, family, Math.min(level + 1, 4), false);
    });
  };

  roots.forEach((root) => walk(root, 'slate', 0, true));

  nodeIds.forEach((nodeId) => {
    if (!themeMap[nodeId]) {
      themeMap[nodeId] = { family: 'slate', level: 0 };
    }
  });

  return themeMap;
}

function measureNodeCard(node: NodeData, depth: number, themeFamily: PretextThemeFamily, themeLevel: number): PretextMapNode {
  const isRoot = depth === 0;
  const titleStyle = isRoot ? PRETEXT_TYPOGRAPHY.heroTitle : PRETEXT_TYPOGRAPHY.title;
  const minWidth = isRoot ? 320 : depth === 1 ? 250 : 220;
  const maxWidth = isRoot ? 420 : depth === 1 ? 340 : 300;
  const paddingX = isRoot ? 26 : 20;
  const paddingY = isRoot ? 24 : 18;
  const badgeHeight = 24;
  const tagHeight = 22;

  const badges = [formatMetaLabel(node.type), formatMetaLabel(node.importance), formatMetaLabel(node.confidence)]
    .filter((value): value is string => Boolean(value))
    .slice(0, 3)
    .map((label) => ({ label, width: Math.ceil(measureSingleLineWidth(label, PRETEXT_TYPOGRAPHY.badge)) + 18 }));

  const tags = (node.tags || []).slice(0, 3).map((tag) => ({
    label: tag,
    width: Math.ceil(measureSingleLineWidth(tag, PRETEXT_TYPOGRAPHY.badge)) + 18,
  }));

  const badgeRowWidth = badges.reduce((sum, badge, index) => sum + badge.width + (index > 0 ? 6 : 0), 0);
  const tagRowWidth = tags.reduce((sum, tag, index) => sum + tag.width + (index > 0 ? 6 : 0), 0);
  const titleWidth = findShrinkWrapWidth(node.label, titleStyle, minWidth - paddingX * 2, maxWidth - paddingX * 2, isRoot ? 2 : 2);
  const measuredWidth = Math.max(titleWidth, badgeRowWidth, tagRowWidth, 170);
  const width = Math.min(maxWidth, Math.max(minWidth, measuredWidth + paddingX * 2));

  const title = measureTextBlock(node.label, titleStyle, width - paddingX * 2);
  const description = node.description
    ? measureTextBlock(node.description, PRETEXT_TYPOGRAPHY.body, width - paddingX * 2)
    : null;

  let height = paddingY + title.height;
  if (badges.length > 0) {
    height += 12 + badgeHeight;
  }
  if (description && description.lineCount > 0) {
    height += 14 + description.height;
  }
  if (tags.length > 0) {
    height += 14 + tagHeight;
  }
  height += paddingY;

  return {
    id: node.id,
    data: node,
    x: 0,
    y: 0,
    width,
    height,
    depth,
    themeFamily,
    themeLevel,
    title,
    description,
    badges,
    tags,
  };
}

export function layoutPretextMindMap(data: MindMapData): PretextGraphLayout {
  const { rootId, parentMap, childrenMap, depthMap } = buildGraphMaps(data);
  const themeMap = assignThemes(
    data.nodes.map((node) => node.id),
    data.edges,
    rootId
  );

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({
    rankdir: 'LR',
    nodesep: 44,
    ranksep: 180,
    edgesep: 24,
    marginx: 24,
    marginy: 24,
  });

  const measuredNodes = data.nodes.map((node) => {
    const theme = themeMap[node.id] || { family: 'slate' as const, level: 0 };
    const measured = measureNodeCard(node, depthMap[node.id] || 0, theme.family, theme.level);
    dagreGraph.setNode(node.id, { width: measured.width, height: measured.height });
    return measured;
  });

  const depthOneNodes = rootId ? childrenMap[rootId] || [] : [];
  const staggerOffset: Record<string, number> = {};
  depthOneNodes.forEach((nodeId, index) => {
    staggerOffset[nodeId] = index % 2 === 1 ? 1 : 0;
  });

  data.edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target, { minlen: staggerOffset[edge.source] === 1 ? 2 : 1 });
  });

  dagre.layout(dagreGraph);

  const positionedNodes = measuredNodes.map((node) => {
    const position = dagreGraph.node(node.id);
    return {
      ...node,
      x: position.x - node.width / 2,
      y: position.y - node.height / 2,
    };
  });

  return {
    nodes: positionedNodes,
    edges: data.edges.map((edge) => ({
      id: `${edge.source}-${edge.target}`,
      source: edge.source,
      target: edge.target,
      label: edge.label,
    })),
    rootId,
    maxDepth: Math.max(0, ...Object.values(depthMap)),
    parentMap,
    childrenMap,
    depthMap,
  };
}