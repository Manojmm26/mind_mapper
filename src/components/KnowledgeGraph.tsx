import React, { useMemo, useCallback, useEffect, useState, useRef } from "react";
import {
  ReactFlow,
  Controls,
  ControlButton,
  Background,
  MiniMap,
  MarkerType,
  Position,
  Handle,
  Node,
  Edge,
  NodeProps,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import { Maximize, Minimize } from "lucide-react";
import dagre from "dagre";
import { WikiIndexEntry } from "../services/wikiService";
import { ConceptIndex } from "../services/wikiIndex";

// ---------------------------------------------------------------------------
// Custom Node: Wiki Page Card
// ---------------------------------------------------------------------------

function WikiPageNode({ data }: NodeProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-md min-w-[200px] max-w-[240px] transition-shadow hover:shadow-lg">
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-indigo-500 !w-3 !h-3"
      />
      <div className="font-semibold text-sm text-gray-900 truncate">
        {data.label}
      </div>
      {data.summary && (
        <div className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
          {data.summary}
        </div>
      )}
      <div className="flex items-center justify-between mt-2 text-[10px] text-gray-400 uppercase tracking-wider font-medium">
        <span className="capitalize">{data.sourceType}</span>
        <span>{data.nodeCount} nodes</span>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-indigo-500 !w-3 !h-3"
      />
    </div>
  );
}

const nodeTypes = {
  wikiPage: WikiPageNode,
};

// ---------------------------------------------------------------------------
// Layout Engine (Dagre)
// ---------------------------------------------------------------------------

function getLayoutedElements(
  nodes: Node[],
  edges: Edge[],
  direction: "TB" | "LR" = "TB",
) {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({
    rankdir: direction,
    nodesep: 140,
    ranksep: 200,
    marginx: 40,
    marginy: 40,
  });

  nodes.forEach((node) => {
    g.setNode(node.id, {
      width: node.width || 220,
      height: node.height || 100,
    });
  });

  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  dagre.layout(g);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = g.node(node.id);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - (node.width || 220) / 2,
        y: nodeWithPosition.y - (node.height || 100) / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export interface KnowledgeGraphProps {
  wikiIndex: WikiIndexEntry[];
  conceptIndex: ConceptIndex | null;
  onNodeClick?: (pageId: string) => void;
}

export function KnowledgeGraph({
  wikiIndex,
  conceptIndex,
  onNodeClick,
}: KnowledgeGraphProps) {
  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(() => {
    if (!conceptIndex || wikiIndex.length < 2) {
      return { nodes: [], edges: [] };
    }

    const pageMap = new Map(wikiIndex.map((p) => [p.id, p]));
    const edgeMap = new Map<
      string,
      { source: string; target: string; concepts: string[] }
    >();

    // Build edges from shared concepts
    for (const concept of Object.values(conceptIndex.concepts)) {
      if (concept.pageIds.length > 1) {
        for (let i = 0; i < concept.pageIds.length; i++) {
          for (let j = i + 1; j < concept.pageIds.length; j++) {
            const p1 = concept.pageIds[i];
            const p2 = concept.pageIds[j];
            if (!pageMap.has(p1) || !pageMap.has(p2)) continue;

            const key = [p1, p2].sort().join("--");
            if (!edgeMap.has(key)) {
              edgeMap.set(key, { source: p1, target: p2, concepts: [] });
            }
            edgeMap.get(key)!.concepts.push(concept.label);
          }
        }
      }
    }

    // Create React Flow Nodes
    const nodes: Node[] = wikiIndex.map((page) => ({
      id: page.id,
      type: "wikiPage",
      position: { x: 0, y: 0 },
      data: {
        label: page.title,
        summary: page.summary,
        nodeCount: page.nodeCount,
        sourceType: page.sourceType,
      },
      width: 220,
      height: 100,
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    }));

    // Create React Flow Edges
    const edges: Edge[] = Array.from(edgeMap.values()).map((e, i) => ({
      id: `edge-${i}`,
      source: e.source,
      target: e.target,
      label:
        e.concepts.slice(0, 2).join(", ") +
        (e.concepts.length > 2 ? ` +${e.concepts.length - 2}` : ""),
      style: { stroke: "#cbd5e1", strokeWidth: 2 },
      labelStyle: {
        fill: "#64748b",
        fontSize: 10,
        fontWeight: 500,
        background: "#f8fafc",
        padding: "2px 4px",
        borderRadius: "4px",
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 12,
        height: 12,
        color: "#cbd5e1",
      },
    }));

    return getLayoutedElements(nodes, edges, "TB");
  }, [wikiIndex, conceptIndex]);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Sync layouted data whenever the computed layout changes, even if counts stay the same.
  useEffect(() => {
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [layoutedNodes, layoutedEdges, setNodes, setEdges]);

  const onNodeClickHandler = useCallback(
    (_: React.MouseEvent, node: Node) => {
      onNodeClick?.(node.id);
    },
    [onNodeClick],
  );

  if (wikiIndex.length === 0) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-gray-500 p-6">
        <svg
          className="w-12 h-12 opacity-30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
        <p className="text-sm font-medium">Knowledge graph is empty.</p>
        <p className="text-xs text-center max-w-xs">
          Generate or upload at least two mind maps to see cross-map
          connections.
        </p>
      </div>
    );
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFSChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFSChange);
    return () => document.removeEventListener("fullscreenchange", handleFSChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      const target = containerRef.current || document.documentElement;
      if (target.requestFullscreen) {
        target.requestFullscreen().catch(() => {});
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <div ref={containerRef} className="h-full w-full rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClickHandler}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        minZoom={0.2}
        maxZoom={2}
        defaultEdgeOptions={{
          type: "smoothstep",
          animated: true,
        }}
      >
        <Controls className="!bg-white !border-gray-200 !shadow-sm">
          <ControlButton
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen mode"}
            aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen mode"}
          >
            {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
          </ControlButton>
        </Controls>
        <MiniMap
          className="!bg-white !border-gray-200 !shadow-sm"
          nodeStrokeWidth={3}
          zoomable
          pannable
          maskColor="rgba(0, 0, 0, 0.05)"
        />
        <Background variant="dots" gap={16} size={1} color="#cbd5e1" />
      </ReactFlow>
    </div>
  );
}
