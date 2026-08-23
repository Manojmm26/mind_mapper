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
import "@xyflow/react/dist/style.css";
import { Maximize, Minimize, Sparkles, BookOpen, Layers, Tag, Network } from "lucide-react";
import dagre from "dagre";
import { WikiIndexEntry } from "../services/wikiService";
import { ConceptIndex } from "../services/wikiIndex";

// ---------------------------------------------------------------------------
// Custom Nodes
// ---------------------------------------------------------------------------

function WikiPageNode({ data }: NodeProps) {
  return (
    <div className="group relative rounded-2xl border border-indigo-200/80 bg-white/95 p-4 shadow-[0_8px_30px_rgb(15,23,42,0.08)] backdrop-blur-md min-w-[240px] max-w-[270px] transition-smooth hover:scale-[1.02] hover:shadow-[0_12px_40px_rgb(99,102,241,0.2)] hover:border-indigo-400 ring-1 ring-slate-100">
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-indigo-600 !w-3.5 !h-3.5 !border-2 !border-white !-top-2"
      />
      <div className="flex items-center gap-2.5 mb-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-sm shrink-0">
          <BookOpen size={15} />
        </div>
        <div className="overflow-hidden">
          <span className="font-black text-xs text-slate-950 truncate block group-hover:text-indigo-600 transition-colors">
            {String(data.label || "")}
          </span>
          <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 block">
            {String(data.sourceType || "topic")}
          </span>
        </div>
      </div>

      {data.summary && (
        <p className="text-[11px] font-medium text-slate-600 line-clamp-2 leading-relaxed mb-3">
          {String(data.summary)}
        </p>
      )}

      <div className="flex items-center justify-between pt-2 border-t border-slate-100/80 text-[10px] font-black tracking-wider text-slate-500">
        <span className="inline-flex items-center gap-1 text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
          <Layers size={10} /> {Number(data.nodeCount || 0)} concepts
        </span>
        <span className="text-slate-400 font-bold">Wiki Note</span>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-indigo-600 !w-3.5 !h-3.5 !border-2 !border-white !-bottom-2"
      />
    </div>
  );
}

function ConceptNode({ data }: NodeProps) {
  const isMulti = Number(data.occurrences) > 1;

  return (
    <div className={`group relative rounded-full border px-4 py-2 shadow-sm min-w-[130px] max-w-[210px] flex items-center justify-between gap-2 transition-smooth hover:scale-105 ${
      isMulti
        ? "border-emerald-300 bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-emerald-500/20"
        : "border-cyan-200 bg-white text-slate-800 ring-1 ring-slate-100 hover:border-cyan-400"
    }`}>
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-emerald-500 !w-2.5 !h-2.5 !border-2 !border-white !-top-1.5"
      />
      <div className="flex items-center gap-1.5 truncate">
        <Sparkles size={12} className={isMulti ? "text-emerald-200 shrink-0 animate-pulse" : "text-cyan-600 shrink-0"} />
        <span className={`text-xs font-black truncate ${isMulti ? "text-white" : "text-slate-900"}`}>
          {String(data.label || "")}
        </span>
      </div>
      {isMulti && (
        <span className="shrink-0 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-black text-white backdrop-blur-sm">
          {data.occurrences}x
        </span>
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-emerald-500 !w-2.5 !h-2.5 !border-2 !border-white !-bottom-1.5"
      />
    </div>
  );
}

const nodeTypes = {
  wikiPage: WikiPageNode,
  conceptNode: ConceptNode,
};

// ---------------------------------------------------------------------------
// Dagre Layout Engine
// ---------------------------------------------------------------------------

function getLayoutedElements(
  nodes: Node[],
  edges: Edge[],
  direction: "TB" | "LR" = "TB",
) {
  if (nodes.length === 0) return { nodes: [], edges: [] };

  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({
    rankdir: direction,
    nodesep: 90,
    ranksep: 140,
    marginx: 40,
    marginy: 40,
  });

  nodes.forEach((node) => {
    const isPage = node.type === "wikiPage";
    g.setNode(node.id, {
      width: isPage ? 260 : 160,
      height: isPage ? 130 : 50,
    });
  });

  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  dagre.layout(g);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPos = g.node(node.id);
    const isPage = node.type === "wikiPage";
    const width = isPage ? 260 : 160;
    const height = isPage ? 130 : 50;

    return {
      ...node,
      position: {
        x: (nodeWithPos?.x || 0) - width / 2,
        y: (nodeWithPos?.y || 0) - height / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
}

// ---------------------------------------------------------------------------
// Main KnowledgeGraph Component
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
    if (!wikiIndex || wikiIndex.length === 0) {
      return { nodes: [], edges: [] };
    }

    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const addedNodeIds = new Set<string>();

    // 1. Add Wiki Page Nodes
    for (const page of wikiIndex) {
      const pageNodeId = `page_${page.id}`;
      nodes.push({
        id: pageNodeId,
        type: "wikiPage",
        position: { x: 0, y: 0 },
        data: {
          label: page.title,
          summary: page.summary,
          nodeCount: page.nodeCount,
          sourceType: page.sourceType,
          pageId: page.id,
        },
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
      });
      addedNodeIds.add(pageNodeId);
    }

    // 2. Add Top Shared / Key Concept Nodes
    if (conceptIndex && conceptIndex.concepts) {
      // Prioritize concepts present in multiple pages or top unique concepts (limit to max 15 to prevent clutter)
      const conceptsList = Object.values(conceptIndex.concepts)
        .sort((a, b) => b.occurrences - a.occurrences)
        .slice(0, 15);

      for (const concept of conceptsList) {
        const conceptNodeId = `concept_${concept.id}`;

        if (concept.pageIds.length > 0 && !addedNodeIds.has(conceptNodeId)) {
          nodes.push({
            id: conceptNodeId,
            type: "conceptNode",
            position: { x: 0, y: 0 },
            data: {
              label: concept.label,
              occurrences: concept.occurrences,
              tags: concept.tags || [],
            },
            sourcePosition: Position.Bottom,
            targetPosition: Position.Top,
          });
          addedNodeIds.add(conceptNodeId);

          // Connect pages to concepts
          for (const pageId of concept.pageIds) {
            const pageNodeId = `page_${pageId}`;
            if (addedNodeIds.has(pageNodeId)) {
              edges.push({
                id: `edge_${pageId}_${concept.id}`,
                source: pageNodeId,
                target: conceptNodeId,
                style: { stroke: concept.occurrences > 1 ? "#10b981" : "#06b6d4", strokeWidth: concept.occurrences > 1 ? 2.5 : 1.5 },
                animated: true,
                markerEnd: {
                  type: MarkerType.ArrowClosed,
                  width: 10,
                  height: 10,
                  color: concept.occurrences > 1 ? "#10b981" : "#06b6d4",
                },
              });
            }
          }
        }
      }
    }

    return getLayoutedElements(nodes, edges, "TB");
  }, [wikiIndex, conceptIndex]);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [layoutedNodes, layoutedEdges, setNodes, setEdges]);

  const onNodeClickHandler = useCallback(
    (_: React.MouseEvent, node: Node) => {
      if (node.data?.pageId) {
        onNodeClick?.(String(node.data.pageId));
      }
    },
    [onNodeClick],
  );

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

  if (!wikiIndex || wikiIndex.length === 0) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-500 p-6 bg-slate-900/5 backdrop-blur-xl rounded-2xl border border-slate-200">
        <Network size={36} className="text-slate-300 animate-pulse" />
        <p className="text-sm font-black text-slate-800">Knowledge graph is empty.</p>
        <p className="text-xs text-center text-slate-500 max-w-xs">
          Generate or upload mind maps to visualize interlinked wiki concepts.
        </p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="h-[550px] min-h-[500px] w-full rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 overflow-hidden shadow-inner relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClickHandler}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.25 }}
        minZoom={0.1}
        maxZoom={2.5}
        defaultEdgeOptions={{
          type: "smoothstep",
          animated: true,
        }}
      >
        <Controls className="!bg-slate-900/90 !border-slate-800 !text-slate-200 !shadow-xl !rounded-xl overflow-hidden">
          <ControlButton
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen mode"}
            aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen mode"}
            className="!border-slate-800 hover:!bg-slate-800"
          >
            {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
          </ControlButton>
        </Controls>
        <MiniMap
          className="!bg-slate-900/90 !border-slate-800 !shadow-2xl !rounded-xl"
          nodeStrokeWidth={3}
          zoomable
          pannable
          maskColor="rgba(15, 23, 42, 0.6)"
        />
        <Background variant="dots" gap={20} size={1.2} color="rgba(255, 255, 255, 0.15)" />
      </ReactFlow>
    </div>
  );
}
