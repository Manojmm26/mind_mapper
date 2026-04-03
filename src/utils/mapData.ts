import { Edge, Node } from "@xyflow/react";
import { EdgeData, MindMapData, NodeData } from "../services/llmService";

export function createFlowNode(node: NodeData): Node {
  return {
    id: node.id,
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      ...node,
      label: node.label,
      description: node.description || "",
    },
  };
}

export function createFlowEdge(edge: EdgeData): Edge {
  return {
    id: `${edge.source}-${edge.target}`,
    source: edge.source,
    target: edge.target,
    label: edge.label,
    type: "smoothstep",
    animated: true,
  };
}

export function toFlowGraph(data: MindMapData): {
  nodes: Node[];
  edges: Edge[];
} {
  return {
    nodes: data.nodes.map(createFlowNode),
    edges: data.edges.map(createFlowEdge),
  };
}

export function convertTreeToGraph(tree: any): {
  nodes: Node[];
  edges: Edge[];
} {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  let idCounter = 0;

  function traverse(node: any, parentId: string | null) {
    const currentId = `node_${idCounter++}`;
    nodes.push({
      id: currentId,
      type: "custom",
      position: { x: 0, y: 0 },
      data: {
        id: currentId,
        label: node.name || node.label || "Untitled",
        description: node.description || "",
        type: node.type,
        tags: node.tags,
        importance: node.importance,
        confidence: node.confidence,
        sourceHint: node.sourceHint,
        nextStep: node.nextStep,
      },
    });

    if (parentId) {
      edges.push({
        id: `${parentId}-${currentId}`,
        source: parentId,
        target: currentId,
        type: "smoothstep",
        animated: true,
      });
    }

    if (node.children && Array.isArray(node.children)) {
      node.children.forEach((child: any) => {
        traverse(child, currentId);
      });
    }
  }

  traverse(tree, null);
  return { nodes, edges };
}

export function findRootNode(nodes: Node[], edges: Edge[]): Node | null {
  const childIds = new Set(edges.map((edge) => edge.target));
  return nodes.find((node) => !childIds.has(node.id)) || nodes[0] || null;
}

export function buildGraphMaps(nodes: Node[], edges: Edge[]) {
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  const parentMap: Record<string, string | undefined> = {};
  const childrenMap: Record<string, string[]> = {};
  const depthMap: Record<string, number> = {};

  nodes.forEach((node) => {
    childrenMap[node.id] = [];
  });

  edges.forEach((edge) => {
    childrenMap[edge.source] = childrenMap[edge.source] || [];
    childrenMap[edge.source].push(edge.target);
    parentMap[edge.target] = edge.source;
  });

  const root = findRootNode(nodes, edges);

  const walk = (nodeId: string, depth: number) => {
    if (depthMap[nodeId] !== undefined) {
      return;
    }

    depthMap[nodeId] = depth;
    (childrenMap[nodeId] || []).forEach((childId) => walk(childId, depth + 1));
  };

  if (root) {
    walk(root.id, 0);
  }

  nodes.forEach((node) => {
    if (depthMap[node.id] === undefined) {
      depthMap[node.id] = 0;
    }
  });

  return {
    nodeMap,
    parentMap,
    childrenMap,
    depthMap,
    root,
  };
}
