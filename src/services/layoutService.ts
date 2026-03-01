import * as dagre from 'dagre';
import { Node, Edge } from '@xyflow/react';

const nodeWidth = 280;
const nodeHeight = 120;

export const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'LR') => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const isHorizontal = direction === 'LR';
  
  // Configure dagre for a compact staggered layout
  dagreGraph.setGraph({ 
    rankdir: direction,
    nodesep: 30, // Much tighter vertical spacing between nodes
    ranksep: 150, // Horizontal spacing between columns
    edgesep: 20,
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  // Identify depth 1 nodes to apply staggered layout
  const inDegree: Record<string, number> = {};
  const childrenMap: Record<string, string[]> = {};
  
  nodes.forEach(n => {
    inDegree[n.id] = 0;
    childrenMap[n.id] = [];
  });
  
  edges.forEach(e => {
    if (inDegree[e.target] !== undefined) {
      inDegree[e.target]++;
    }
    if (childrenMap[e.source]) {
      childrenMap[e.source].push(e.target);
    }
  });

  const roots = nodes.filter(n => inDegree[n.id] === 0);
  const depth1Nodes = roots.flatMap(r => childrenMap[r.id] || []);
  
  const staggerOffset: Record<string, number> = {};
  depth1Nodes.forEach((nodeId, index) => {
    // Alternate stagger: push every other branch forward by 1 column
    // This prevents their children from competing for the same vertical space
    staggerOffset[nodeId] = index % 2 === 1 ? 1 : 0; 
  });

  edges.forEach((edge) => {
    let minlen = 1;
    // If the source is a depth 1 node, apply the stagger offset to its outgoing edges
    if (staggerOffset[edge.source] === 1) {
      minlen = 2; // Push children forward to the next column
    }
    dagreGraph.setEdge(edge.source, edge.target, { minlen });
  });

  dagre.layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const newNode = {
      ...node,
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };

    return newNode;
  });

  return { nodes: newNodes, edges };
};
