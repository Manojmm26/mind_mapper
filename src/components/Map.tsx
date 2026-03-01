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

      const { nodes: layoutedNodes, edges: layoutedEdges } = updateLayout(rawNodes, rawEdges);
      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    } else if (initialNodes && initialEdges) {
      const { nodes: layoutedNodes, edges: layoutedEdges } = updateLayout(initialNodes, initialEdges);
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
