import { ExplorerNode, ExplorerEdge } from "./types";
import { PRETEXT_THEME_ACCENTS } from "../../services/pretextMapLayout";

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function hexToRgba(hex: string, alpha: number) {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(
    normalized.length === 3
      ? normalized
          .split("")
          .map((p) => p + p)
          .join("")
      : normalized,
    16,
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getNodePalette(node: ExplorerNode) {
  const accents = PRETEXT_THEME_ACCENTS[node.themeFamily] || PRETEXT_THEME_ACCENTS.slate;
  const accent = accents[Math.min(node.themeLevel, accents.length - 1)];

  if (node.depth === 0) {
    return {
      accent: "#38bdf8",
      surface: "#0f172a",
      header: "#111827",
      border: hexToRgba("#38bdf8", 0.88),
      title: "#f8fafc",
      body: "rgba(226,232,240,0.94)",
      pillBackground: "rgba(255,255,255,0.12)",
      pillText: "#bae6fd",
      shadow: "rgba(15,23,42,0.36)",
    };
  }

  return {
    accent,
    surface: "rgba(255,255,255,0.95)",
    header: hexToRgba(accent, 0.12 + node.themeLevel * 0.03),
    border: hexToRgba(accent, 0.48),
    title: "#0f172a",
    body: "#475569",
    pillBackground: hexToRgba(accent, 0.11),
    pillText: accent,
    shadow: hexToRgba(accent, 0.18),
  };
}

export function buildDescendantCountMap(nodes: ExplorerNode[], edges: ExplorerEdge[]) {
  const childrenMap: Record<string, string[]> = {};
  const memo: Record<string, number> = {};

  nodes.forEach((n) => {
    childrenMap[n.id] = [];
  });

  edges.forEach((e) => {
    childrenMap[e.source]?.push(e.target);
  });

  const count = (nodeId: string): number => {
    if (memo[nodeId] !== undefined) return memo[nodeId];
    const children = childrenMap[nodeId] || [];
    const total = children.length + children.reduce((sum, childId) => sum + count(childId), 0);
    memo[nodeId] = total;
    return total;
  };

  nodes.forEach((n) => count(n.id));
  return memo;
}

export function getAncestorChain(nodeId: string, parentMap: Record<string, string | undefined>) {
  const ancestors: string[] = [];
  let currentId: string | undefined = nodeId;

  while (currentId) {
    const parentId = parentMap[currentId];
    if (parentId) {
      ancestors.unshift(parentId);
    }
    currentId = parentId;
  }

  return ancestors;
}
