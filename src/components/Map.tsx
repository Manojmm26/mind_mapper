import { useCallback, useEffect, useState } from 'react';
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

const nodeTypes = {
  custom: CustomNode,
};

interface MapProps {
  data: MindMapData | null;
  onSave: (nodes: Node[], edges: Edge[]) => void;
  initialNodes?: Node[];
  initialEdges?: Edge[];
}

export function Map({ data, onSave, initialNodes, initialEdges }: MapProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes || []);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges || []);

  useEffect(() => {
    if (data && !initialNodes && !initialEdges) {
      const initialNodes: Node[] = data.nodes.map((node) => ({
        id: node.id,
        type: 'custom',
        position: { x: 0, y: 0 },
        data: { label: node.label, description: node.description },
      }));

      const initialEdges: Edge[] = data.edges.map((edge) => ({
        id: `${edge.source}-${edge.target}`,
        source: edge.source,
        target: edge.target,
        label: edge.label,
        type: 'smoothstep',
        animated: true,
      }));

      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        initialNodes,
        initialEdges
      );

      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    }
  }, [data, setNodes, setEdges, initialNodes, initialEdges]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const handleSave = () => {
    onSave(nodes, edges);
  };

  return (
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
  );
}
