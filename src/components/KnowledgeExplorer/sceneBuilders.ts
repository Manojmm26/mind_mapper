import { ExplorerNode, ExplorerEdge, SceneNode } from "./types";
import { buildDescendantCountMap, getAncestorChain } from "./utils";
import { NODE_SPACING, TUNNEL_CONFIG } from "./constants";

export function buildTunnelScene(
  nodes: ExplorerNode[],
  edges: ExplorerEdge[],
  focusId: string | null,
  parentMap: Record<string, string | undefined>,
  childrenMap: Record<string, string[]>,
  containerWidth: number,
  containerHeight: number,
): SceneNode[] {
  if (!focusId || nodes.length === 0) {
    return nodes.map((node) => ({
      id: node.id,
      node,
      role: "overview" as const,
      targetX: node.x,
      targetY: node.y,
      targetScale: 1,
      targetOpacity: 1,
      interactive: true,
      descendantCount: 0,
    }));
  }

  const descendantCounts = buildDescendantCountMap(nodes, edges);
  const focusNode = nodes.find((n) => n.id === focusId);
  if (!focusNode) return [];

  const parentId = parentMap[focusId];
  const parentNode = parentId ? nodes.find((n) => n.id === parentId) : null;
  const childNodes = (childrenMap[focusId] || [])
    .map((id) => nodes.find((n) => n.id === id))
    .filter(Boolean) as ExplorerNode[];
  const siblingNodes = parentId
    ? ((childrenMap[parentId] || [])
        .filter((id) => id !== focusId)
        .map((id) => nodes.find((n) => n.id === id))
        .filter(Boolean) as ExplorerNode[])
    : [];
  const ancestorIds = getAncestorChain(focusId, parentMap);
  const ancestorNodes = ancestorIds
    .map((id) => nodes.find((n) => n.id === id))
    .filter(Boolean) as ExplorerNode[];

  const sceneNodes: SceneNode[] = [];
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  // 1. 3D Focus Node (Front, large, shifted slightly down to allow tunnel behind it)
  sceneNodes.push({
    id: focusNode.id,
    node: focusNode,
    role: "focus",
    targetX: centerX - focusNode.width / 2,
    targetY: centerY - focusNode.height / 2 + 80,
    targetScale: 1.15,
    targetOpacity: 1,
    interactive: true,
    descendantCount: descendantCounts[focusNode.id] || 0,
  });

  // 2. The 3D Ancestral Tunnel (Time Machine effect into the distance)
  const trailNodes = parentNode ? [parentNode, ...ancestorNodes] : ancestorNodes;
  trailNodes.forEach((node, i) => {
    // Each step back scales down to 75% of the previous size
    const depthScale = Math.pow(0.75, i + 1);
    
    sceneNodes.push({
      id: node.id,
      node: node,
      role: i === 0 && parentNode ? "parent" : "ancestor",
      targetX: centerX - node.width / 2,
      targetY: (centerY - node.height / 2) - 30 - (i * 90), // Stack upward, peeking from behind
      targetScale: Math.max(0.2, depthScale),
      targetOpacity: Math.max(0.15, 0.8 - (i * 0.15)),
      interactive: true,
      descendantCount: descendantCounts[node.id] || 0,
    });
  });

  // 3. The Future (Children fanning out in the foreground arc)
  const totalChildren = childNodes.length;
  childNodes.forEach((child, i) => {
    // Generate an interpolation parameter from -1 to 1 across the arc
    const t = totalChildren === 1 ? 0 : (i / (totalChildren - 1)) * 2 - 1; 
    
    const spreadX = Math.min(containerWidth * 0.35, 350); 
    const x = centerX + t * spreadX - child.width / 2;
    // Parabolic arc for children so outer ones sit slightly higher
    const y = centerY + 280 - Math.pow(t, 2) * 60 - child.height / 2;
    
    sceneNodes.push({
      id: child.id,
      node: child,
      role: "child",
      targetX: x,
      targetY: y,
      targetScale: 0.9 + Math.abs(t) * 0.05, // Edge cards slightly larger to emphasize 3D forward wrap
      targetOpacity: 0.95 - Math.abs(t) * 0.1,
      interactive: true,
      descendantCount: descendantCounts[child.id] || 0,
    });
  });

  // 4. Siblings (Floating alongside the focus node, receding into the background walls)
  siblingNodes.slice(0, 6).forEach((sibling, i) => {
    const side = i % 2 === 0 ? -1 : 1;
    const index = Math.floor(i / 2);
    
    sceneNodes.push({
      id: sibling.id,
      node: sibling,
      role: "sibling",
      targetX: centerX + side * (320 + index * 120) - sibling.width / 2,
      targetY: centerY - 20 - index * 40 - sibling.height / 2,
      targetScale: 0.7 - index * 0.1,
      targetOpacity: 0.5 - index * 0.15,
      interactive: true,
      descendantCount: descendantCounts[sibling.id] || 0,
    });
  });

  return sceneNodes;
}

export function buildAtlasScene(
  nodes: ExplorerNode[],
  edges: ExplorerEdge[],
  focusId: string | null,
  parentMap: Record<string, string | undefined>,
  childrenMap: Record<string, string[]>,
  containerWidth: number,
  containerHeight: number,
): SceneNode[] {
  if (!focusId || nodes.length === 0) {
    return nodes.slice(0, 5).map((node) => ({
      id: node.id,
      node,
      role: "overview" as const,
      targetX: containerWidth / 2 - node.width / 2,
      targetY: containerHeight / 2 - node.height / 2,
      targetScale: 1,
      targetOpacity: 1,
      interactive: true,
      descendantCount: 0,
    }));
  }

  const descendantCounts = buildDescendantCountMap(nodes, edges);
  const focusNode = nodes.find((n) => n.id === focusId);
  if (!focusNode) return [];

  const parentId = parentMap[focusId];
  const parentNode = parentId ? nodes.find((n) => n.id === parentId) : null;
  const childNodes = (childrenMap[focusId] || [])
    .map((id) => nodes.find((n) => n.id === id))
    .filter(Boolean) as ExplorerNode[];
  const ancestorIds = getAncestorChain(focusId, parentMap);
  const ancestorNodes = ancestorIds
    .map((id) => nodes.find((n) => n.id === id))
    .filter(Boolean) as ExplorerNode[];

  const sceneNodes: SceneNode[] = [];
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  sceneNodes.push({
    id: focusNode.id,
    node: focusNode,
    role: "focus",
    targetX: centerX - focusNode.width / 2,
    targetY: centerY - focusNode.height / 2,
    targetScale: 1.15,
    targetOpacity: 1,
    interactive: true,
    descendantCount: descendantCounts[focusNode.id] || 0,
  });

  if (parentNode) {
    sceneNodes.push({
      id: parentNode.id,
      node: parentNode,
      role: "parent",
      targetX: centerX - parentNode.width / 2,
      targetY: centerY - parentNode.height - TUNNEL_CONFIG.parentOffsetY,
      targetScale: 0.7,
      targetOpacity: 0.6,
      interactive: true,
      descendantCount: descendantCounts[parentNode.id] || 0,
    });
  }

  ancestorNodes.slice(0, 2).forEach((ancestor, i) => {
    sceneNodes.push({
      id: ancestor.id,
      node: ancestor,
      role: "ancestor",
      targetX: centerX - ancestor.width / 2,
      targetY: centerY - ancestor.height - TUNNEL_CONFIG.ancestorOffsetY - i * TUNNEL_CONFIG.ancestorStepY,
      targetScale: 0.55 - i * 0.05,
      targetOpacity: 0.35 - i * 0.1,
      interactive: true,
      descendantCount: descendantCounts[ancestor.id] || 0,
    });
  });

  const childCount = childNodes.length;
  if (childCount > 0) {
    const maxChildWidth = Math.max(...childNodes.map((c) => c.width));
    const ringRadiusX = Math.max(TUNNEL_CONFIG.ringRadiusX, maxChildWidth * 1.2 + 60);
    const ringRadiusY = Math.min(TUNNEL_CONFIG.ringRadiusY, containerHeight * 0.2);
    const baseY = centerY + TUNNEL_CONFIG.baseY;

    childNodes.forEach((child, i) => {
      const angle =
        childCount === 1
          ? -Math.PI / 2
          : (i / childCount) * Math.PI * 2 - Math.PI / 2;
      const x = centerX + Math.cos(angle) * ringRadiusX - child.width / 2;
      const y = baseY + Math.sin(angle) * ringRadiusY - child.height / 2;

      sceneNodes.push({
        id: child.id,
        node: child,
        role: "child",
        targetX: x,
        targetY: y,
        targetScale: 0.8,
        targetOpacity: 0.85,
        interactive: true,
        descendantCount: descendantCounts[child.id] || 0,
      });
    });
  }

  return sceneNodes;
}

export function buildOverviewScene(
  nodes: ExplorerNode[],
  edges: ExplorerEdge[],
  containerWidth: number,
  containerHeight: number,
): SceneNode[] {
  const descendantCounts = buildDescendantCountMap(nodes, edges);

  return nodes.map((node) => ({
    id: node.id,
    node,
    role: "overview" as const,
    targetX: node.x,
    targetY: node.y,
    targetScale: 1,
    targetOpacity: 1,
    interactive: true,
    descendantCount: descendantCounts[node.id] || 0,
  }));
}
