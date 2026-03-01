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
  currentEdges.forEach(e => {
    childrenCount[e.source] = (childrenCount[e.source] || 0) + 1;
  });

  const visibleNodeIds = getVisibleNodes(currentNodes, currentEdges);

  const nextNodes = currentNodes.map(n => ({
    ...n,
    hidden: !visibleNodeIds.has(n.id),
    data: {
      ...n.data,
      hasChildren: (childrenCount[n.id] || 0) > 0
    }
  }));

  const nextEdges = currentEdges.map(e => ({
    ...e,
    hidden: !visibleNodeIds.has(e.source) || !visibleNodeIds.has(e.target) || !!currentNodes.find(n => n.id === e.source)?.data?.isCollapsed
  }));

  const visibleNodes = nextNodes.filter(n => !n.hidden);
  const visibleEdges = nextEdges.filter(e => !e.hidden);

  const { nodes: layoutedVisibleNodes } = getLayoutedElements(visibleNodes, visibleEdges);

  const finalNodes = nextNodes.map(n => {
    const layoutedNode = layoutedVisibleNodes.find(ln => ln.id === n.id);
    if (layoutedNode) {
      return { ...n, position: layoutedNode.position, targetPosition: layoutedNode.targetPosition, sourcePosition: layoutedNode.sourcePosition };
    }
    return n;
  });

  return { nodes: finalNodes, edges: nextEdges };
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
        data: { label: node.label, description: node.description, isCollapsed: false },
      }));

      const rawEdges: Edge[] = data.edges.map((edge) => ({
        id: `${edge.source}-${edge.target}`,
        source: edge.source,
        target: edge.target,
        label: edge.label,
        type: 'smoothstep',
        animated: true,
      }));

      const themedNodes = assignThemes(rawNodes, rawEdges);
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
      const themedNodes = assignThemes(initialNodes, initialEdges);
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
