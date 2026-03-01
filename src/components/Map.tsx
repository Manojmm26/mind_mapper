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

const nodeTypes = {
  custom: CustomNode,
};

interface MapProps {
  data: MindMapData | null;
  onSave: (nodes: Node[], edges: Edge[]) => void;
  initialNodes?: Node[];
  initialEdges?: Edge[];
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

export function Map({ data, onSave, initialNodes, initialEdges }: MapProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (data && !initialNodes && !initialEdges) {
      const rawNodes: Node[] = data.nodes.map((node) => ({
        id: node.id,
        type: 'custom',
        position: { x: 0, y: 0 },
        data: { label: node.label, description: node.description },
      }));

      const rawEdges: Edge[] = data.edges.map((edge) => ({
        id: `${edge.source}-${edge.target}`,
        source: edge.source,
        target: edge.target,
        label: edge.label,
        type: 'smoothstep',
        animated: true,
      }));

      const nodesWithCollapse = applyDefaultCollapse(rawNodes, rawEdges);
      const themedNodes = assignThemes(nodesWithCollapse, rawEdges);
      const themedEdges = rawEdges.map(edge => {
        const targetNode = themedNodes.find(n => n.id === edge.target);
        const themeFamily = (targetNode?.data?.themeFamily as string) || 'slate';
        const themeLevel = Math.min(Math.max((targetNode?.data?.themeLevel as number) || 0, 0), 4);
        const familyColors = themeColors[themeFamily] || themeColors.slate;
        return {
          ...edge,
          style: { stroke: familyColors[themeLevel], strokeWidth: 2 },
        };
      });

      const { nodes: layoutedNodes, edges: layoutedEdges } = updateLayout(themedNodes, themedEdges);
      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    } else if (initialNodes && initialEdges) {
      const nodesWithCollapse = applyDefaultCollapse(initialNodes, initialEdges);
      const themedNodes = assignThemes(nodesWithCollapse, initialEdges);
      const themedEdges = initialEdges.map(edge => {
        const targetNode = themedNodes.find(n => n.id === edge.target);
        const themeFamily = (targetNode?.data?.themeFamily as string) || 'slate';
        const themeLevel = Math.min(Math.max((targetNode?.data?.themeLevel as number) || 0, 0), 4);
        const familyColors = themeColors[themeFamily] || themeColors.slate;
        return {
          ...edge,
          style: { stroke: familyColors[themeLevel], strokeWidth: 2 },
        };
      });

      const { nodes: layoutedNodes, edges: layoutedEdges } = updateLayout(themedNodes, themedEdges);
      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    }
  }, [data, initialNodes, initialEdges, setNodes, setEdges]);

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

  const handleSave = () => {
    onSave(nodes, edges);
  };

  return (
    <MapContext.Provider value={{ onToggle: handleToggle }}>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-slate-50"
        >
          <Controls />
          <MiniMap zoomable pannable nodeClassName={(node) => 'bg-indigo-500 rounded-sm'} />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          <Panel position="top-right" className="bg-white p-2 rounded-lg shadow-sm border border-slate-200">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Save Map
            </button>
          </Panel>
        </ReactFlow>
      </div>
    </MapContext.Provider>
  );
}
