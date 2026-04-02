import { useCallback, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  BackgroundVariant,
  Panel,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { CustomNode } from './CustomNode';
import { getLayoutedElements } from '../services/layoutService';
import { MindMapData } from '../services/llmService';
import { MapContext } from './MapContext';
import { createFlowEdge, createFlowNode } from '../utils/mapData';

const nodeTypes = {
  custom: CustomNode,
};

interface MapProps {
  data: MindMapData | null;
  onSave: (nodes: Node[], edges: Edge[]) => void;
  initialNodes?: Node[];
  initialEdges?: Edge[];
  selectedNodeId?: string | null;
  onSelectNode?: (nodeId: string) => void;
}

const THEMES = ['blue', 'green', 'amber', 'purple', 'teal', 'pink', 'orange', 'red'];

const themeColors: Record<string, string[]> = {
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

const getDepthMap = (nodes: Node[], edges: Edge[]) => {
  const inDegree: Record<string, number> = {};
  const childrenMap: Record<string, string[]> = {};
  const depths: Record<string, number> = {};

  nodes.forEach((node) => {
    inDegree[node.id] = 0;
    childrenMap[node.id] = [];
  });

  edges.forEach((edge) => {
    if (inDegree[edge.target] !== undefined) {
      inDegree[edge.target] += 1;
    }
    if (childrenMap[edge.source]) {
      childrenMap[edge.source].push(edge.target);
    }
  });

  const roots = nodes.filter((node) => inDegree[node.id] === 0);

  const visit = (nodeId: string, depth: number) => {
    if (depths[nodeId] !== undefined) {
      return;
    }

    depths[nodeId] = depth;
    (childrenMap[nodeId] || []).forEach((childId) => visit(childId, depth + 1));
  };

  roots.forEach((root) => visit(root.id, 0));

  return { depths, childrenMap };
};

const applyEdgeThemes = (currentEdges: Edge[], themedNodes: Node[]) => {
  return currentEdges.map((edge) => {
    const targetNode = themedNodes.find((node) => node.id === edge.target);
    const themeFamily = (targetNode?.data?.themeFamily as string) || 'slate';
    const themeLevel = Math.min(Math.max((targetNode?.data?.themeLevel as number) || 0, 0), 4);
    const familyColors = themeColors[themeFamily] || themeColors.slate;
    return {
      ...edge,
      style: { ...edge.style, stroke: familyColors[themeLevel], strokeWidth: 2 },
    };
  });
};

const prepareGraph = (rawNodes: Node[], rawEdges: Edge[]) => {
  const nodesWithCollapse = applyDefaultCollapse(rawNodes, rawEdges);
  const themedNodes = assignThemes(nodesWithCollapse, rawEdges);
  const themedEdges = applyEdgeThemes(rawEdges, themedNodes);
  return updateLayout(themedNodes, themedEdges);
};

const revealSelectedPath = (currentNodes: Node[], currentEdges: Edge[], selectedNodeId?: string | null) => {
  const selectedSet = new Set(selectedNodeId ? [selectedNodeId] : []);
  const parentMap: Record<string, string | undefined> = {};

  currentEdges.forEach((edge) => {
    parentMap[edge.target] = edge.source;
  });

  let currentId = selectedNodeId || undefined;
  while (currentId && parentMap[currentId]) {
    currentId = parentMap[currentId];
    if (currentId) {
      selectedSet.add(currentId);
    }
  }

  return currentNodes.map((node) => ({
    ...node,
    selected: node.id === selectedNodeId,
    data: {
      ...node.data,
      isCollapsed: selectedSet.has(node.id) ? false : node.data.isCollapsed,
    },
  }));
};

const collapseToOverview = (currentNodes: Node[], currentEdges: Edge[]) => {
  const { depths, childrenMap } = getDepthMap(currentNodes, currentEdges);

  return currentNodes.map((node) => ({
    ...node,
    selected: false,
    data: {
      ...node.data,
      isCollapsed: (childrenMap[node.id] || []).length > 0 && (depths[node.id] || 0) >= 1,
    },
  }));
};

const expandAllNodes = (currentNodes: Node[]) => {
  return currentNodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      isCollapsed: false,
    },
  }));
};

const assignThemes = (nodes: Node[], edges: Edge[]) => {
  const nodeThemes: Record<string, { family: string, level: number }> = {};
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
  let themeIndex = 0;

  const traverse = (nodeId: string, currentFamily: string, currentLevel: number, isTrunk: boolean) => {
    if (nodeThemes[nodeId]) return; // avoid cycles
    
    nodeThemes[nodeId] = { family: currentFamily, level: currentLevel };
    
    const children = childrenMap[nodeId] || [];
    
    if (isTrunk) {
      if (children.length > 1) {
        // End of trunk, children get new colors
        children.forEach(childId => {
          const family = THEMES[themeIndex % THEMES.length];
          themeIndex++;
          traverse(childId, family, 0, false);
        });
      } else if (children.length === 1) {
        // Continue trunk
        traverse(children[0], 'slate', 0, true);
      }
    } else {
      // Not trunk, children inherit family and increase level
      children.forEach(childId => {
        traverse(childId, currentFamily, Math.min(currentLevel + 1, 4), false);
      });
    }
  };

  roots.forEach(root => {
    traverse(root.id, 'slate', 0, true);
  });

  // Fallback for any disconnected nodes
  nodes.forEach(n => {
    if (!nodeThemes[n.id]) {
      nodeThemes[n.id] = { family: 'slate', level: 0 };
    }
  });

  return nodes.map(n => ({
    ...n,
    data: {
      ...n.data,
      themeFamily: n.data.themeFamily || nodeThemes[n.id].family,
      themeLevel: n.data.themeLevel !== undefined ? n.data.themeLevel : nodeThemes[n.id].level
    }
  }));
};

const applyDefaultCollapse = (nodes: Node[], edges: Edge[]) => {
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
  const depths: Record<string, number> = {};

  const traverse = (nodeId: string, depth: number) => {
    if (depths[nodeId] !== undefined) return;
    depths[nodeId] = depth;
    (childrenMap[nodeId] || []).forEach(childId => {
      traverse(childId, depth + 1);
    });
  };

  roots.forEach(root => traverse(root.id, 0));

  return nodes.map(n => {
    const depth = depths[n.id] || 0;
    const hasChildren = childrenMap[n.id].length > 0;
    
    const isCollapsed = n.data.isCollapsed !== undefined 
      ? n.data.isCollapsed 
      : (depth >= 1 && hasChildren);

    return {
      ...n,
      data: {
        ...n.data,
        isCollapsed
      }
    };
  });
};

const getVisibleNodes = (nodes: Node[], edges: Edge[]) => {
  const visible = new Set<string>();
  const roots = nodes.filter(n => !edges.some(e => e.target === n.id)).map(n => n.id);
  roots.forEach(r => visible.add(r));

  let changed = true;
  while (changed) {
    changed = false;
    for (const edge of edges) {
      if (visible.has(edge.source)) {
        const sourceNode = nodes.find(n => n.id === edge.source);
        if (!sourceNode?.data?.isCollapsed) {
          if (!visible.has(edge.target)) {
            visible.add(edge.target);
            changed = true;
          }
        }
      }
    }
  }
  return visible;
};

const updateLayout = (currentNodes: Node[], currentEdges: Edge[]) => {
  const childrenCount: Record<string, number> = {};
  const parentMap: Record<string, string> = {};
  
  currentEdges.forEach(e => {
    childrenCount[e.source] = (childrenCount[e.source] || 0) + 1;
    if (!parentMap[e.target]) {
      parentMap[e.target] = e.source;
    }
  });

  const visibleNodeIds = getVisibleNodes(currentNodes, currentEdges);

  const visibleNodes = currentNodes.filter(n => visibleNodeIds.has(n.id));
  const visibleEdges = currentEdges.filter(e => 
    visibleNodeIds.has(e.source) && 
    visibleNodeIds.has(e.target) && 
    !currentNodes.find(n => n.id === e.source)?.data?.isCollapsed
  );

  const { nodes: layoutedVisibleNodes } = getLayoutedElements(visibleNodes, visibleEdges, 'LR');

  const layoutPositions: Record<string, {x: number, y: number}> = {};
  const targetPositions: Record<string, any> = {};
  const sourcePositions: Record<string, any> = {};

  layoutedVisibleNodes.forEach(n => {
    layoutPositions[n.id] = n.position;
    if (n.targetPosition) targetPositions[n.id] = n.targetPosition;
    if (n.sourcePosition) sourcePositions[n.id] = n.sourcePosition;
  });

  const finalNodes = currentNodes.map(n => {
    const isVisible = visibleNodeIds.has(n.id);
    let targetPos = n.position;
    
    if (isVisible) {
      targetPos = layoutPositions[n.id] || n.position;
    } else {
      let ancestor = parentMap[n.id];
      while (ancestor && !visibleNodeIds.has(ancestor)) {
        ancestor = parentMap[ancestor];
      }
      if (ancestor && layoutPositions[ancestor]) {
        targetPos = layoutPositions[ancestor];
      }
    }

    return {
      ...n,
      hidden: false, // Never hide nodes so they can animate
      position: targetPos,
      targetPosition: targetPositions[n.id] || n.targetPosition,
      sourcePosition: sourcePositions[n.id] || n.sourcePosition,
      style: {
        ...n.style,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'all' : 'none',
      },
      data: {
        ...n.data,
        hasChildren: (childrenCount[n.id] || 0) > 0
      }
    };
  });

  const finalEdges = currentEdges.map(e => {
    const isVisible = visibleNodeIds.has(e.source) && visibleNodeIds.has(e.target) && !currentNodes.find(n => n.id === e.source)?.data?.isCollapsed;
    return {
      ...e,
      hidden: false, // Never hide edges so they can animate
      style: {
        ...e.style,
        opacity: isVisible ? 1 : 0,
      }
    };
  });

  return { nodes: finalNodes, edges: finalEdges };
};

export function Map({ data, onSave, initialNodes, initialEdges, selectedNodeId, onSelectNode }: MapProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (data && !initialNodes && !initialEdges) {
      const rawNodes: Node[] = data.nodes.map((node) => createFlowNode(node));
      const rawEdges: Edge[] = data.edges.map((edge) => createFlowEdge(edge));
      const preparedNodes = selectedNodeId
        ? revealSelectedPath(rawNodes, rawEdges, selectedNodeId)
        : rawNodes;
      const { nodes: layoutedNodes, edges: layoutedEdges } = prepareGraph(preparedNodes, rawEdges);
      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    } else if (initialNodes && initialEdges) {
      const preparedNodes = selectedNodeId
        ? revealSelectedPath(initialNodes, initialEdges, selectedNodeId)
        : initialNodes;
      const { nodes: layoutedNodes, edges: layoutedEdges } = prepareGraph(preparedNodes, initialEdges);
      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    }
  }, [data, initialNodes, initialEdges, selectedNodeId, setNodes, setEdges]);

  useEffect(() => {
    if (!nodes.length) {
      return;
    }

    const nextNodes = revealSelectedPath(nodes, edges, selectedNodeId);
    const { nodes: layoutedNodes, edges: layoutedEdges } = updateLayout(nextNodes, edges);
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [selectedNodeId]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const handleToggle = useCallback((nodeId: string) => {
    const nextNodes = nodes.map(n => {
      if (n.id === nodeId) {
        return { ...n, data: { ...n.data, isCollapsed: !n.data.isCollapsed } };
      }
      return n;
    });

    const { nodes: layoutedNodes, edges: layoutedEdges } = updateLayout(nextNodes, edges);
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [nodes, edges, setNodes, setEdges]);

  const handleExpandAll = useCallback(() => {
    const nextNodes = expandAllNodes(nodes);
    const { nodes: layoutedNodes, edges: layoutedEdges } = updateLayout(nextNodes, edges);
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [nodes, edges, setNodes, setEdges]);

  const handleCollapseAll = useCallback(() => {
    const nextNodes = collapseToOverview(nodes, edges);
    const { nodes: layoutedNodes, edges: layoutedEdges } = updateLayout(nextNodes, edges);
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [nodes, edges, setNodes, setEdges]);

  const handleSave = () => {
    onSave(nodes, edges);
  };

  return (
    <MapContext.Provider value={{ onToggle: handleToggle }}>
      <div className="h-full w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={(_, node) => onSelectNode?.(node.id)}
          nodeTypes={nodeTypes}
          fitView
          className="workspace-map-canvas"
        >
          <Controls className="workspace-map-controls" />
          <MiniMap
            zoomable
            pannable
            className="!rounded-2xl !border !border-slate-200 !bg-white/90 !shadow-lg"
            nodeColor={(node) => String(node.style?.borderColor || '#94a3b8')}
          />
          <Background variant={BackgroundVariant.Dots} gap={18} size={1.4} color="#cbd5e1" />
          <Panel position="top-left" className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/85 p-2 shadow-lg backdrop-blur-xl">
            <button
              onClick={handleExpandAll}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            >
              Expand all
            </button>
            <button
              onClick={handleCollapseAll}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            >
              Collapse layers
            </button>
          </Panel>
          <Panel position="top-right" className="rounded-2xl border border-white/70 bg-white/85 p-2 shadow-lg backdrop-blur-xl">
            <button
              onClick={handleSave}
              className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Save map
            </button>
          </Panel>
        </ReactFlow>
      </div>
    </MapContext.Provider>
  );
}
