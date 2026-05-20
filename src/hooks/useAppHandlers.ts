import React, { useCallback } from "react";
import { Edge, Node } from "@xyflow/react";
import type {
  ComparisonWorkspaceData,
  MindMapData,
} from "../services/llmService";
import { normalizeComparisonData } from "../utils/comparisonHelpers";
import { convertTreeToGraph, toFlowGraph, createFlowNode, createFlowEdge } from "../utils/mapData";
import { getLayoutedElements } from "../services/layoutService";
import { EXAMPLE_MAP } from "../exampleData";
import { UseWikiReturn } from "./useWiki";
import { buildWikiContext } from "../services/wikiPromptEnhancer";

export interface UseAppHandlersConfig {
  // State setters
  setIsLoading: (loading: boolean) => void;
  setLoadingMessage: (msg: string) => void;
  setError: (error: string) => void;
  setMapData: (data: MindMapData | null) => void;
  setComparisonData: (data: ComparisonWorkspaceData | null) => void;
  setSavedNodes: (nodes: Node[] | null) => void;
  setSavedEdges: (edges: Edge[] | null) => void;
  setWorkflowMode: (mode: "learn" | "compare") => void;
  setActiveView: (view: "map" | "outline" | "compare") => void;
  setSelectedNodeId: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
  setTopicInput: (input: string) => void;

  // Current state values
  workflowMode: "learn" | "compare";
  comparisonData: ComparisonWorkspaceData | null;
  topicInput: string;

  // Refs
  fileInputRef: React.RefObject<HTMLInputElement>;
  jsonInputRef: React.RefObject<HTMLInputElement>;

  // Wiki integration
  wiki: UseWikiReturn;

  // Utilities
  resetWorkspaceState: () => void;
}

export function useAppHandlers({
  setIsLoading,
  setLoadingMessage,
  setError,
  setMapData,
  setComparisonData,
  setSavedNodes,
  setSavedEdges,
  setWorkflowMode,
  setActiveView,
  setSelectedNodeId,
  setSearchQuery,
  setTopicInput,
  workflowMode,
  comparisonData,
  topicInput,
  fileInputRef,
  jsonInputRef,
  wiki,
  resetWorkspaceState,
}: UseAppHandlersConfig) {
  const handleFileUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setIsLoading(true);
      setLoadingMessage("Analyzing document...");
      setError("");
      resetWorkspaceState();

      try {
        const { extractTextFromFile } = await import("../services/pdfService");
        const text = await extractTextFromFile(file);

        // Try parsing as JSON first (saved map or tree)
        try {
          const json = JSON.parse(text);
          if (json.nodes && json.edges) {
            if (json.comparisonData) {
              const normalized = normalizeComparisonData(json.comparisonData);
              setComparisonData({
                ...normalized,
                map: normalized.map ?? { nodes: [], edges: [] },
              });
              setWorkflowMode("compare");
              setActiveView("compare");
            } else {
              setComparisonData(null);
              setWorkflowMode("learn");
              setActiveView("map");
            }
            setSavedNodes(json.nodes);
            setSavedEdges(json.edges);
            setMapData({ nodes: [], edges: [] });
            return;
          }

          if (json.name || json.children) {
            const { nodes, edges } = convertTreeToGraph(json);
            setSavedNodes(nodes);
            setSavedEdges(edges);
            setMapData({ nodes: [], edges: [] });
            setWorkflowMode("learn");
            setActiveView("map");
            return;
          }
        } catch {
          // Not JSON, fall through to LLM processing
        }

        // Generate mind map via LLM
        setLoadingMessage("AI is building your mind map...");
        const wikiCtx = wiki.conceptIndex
          ? buildWikiContext(file.name, wiki.wikiIndex, wiki.conceptIndex)
          : undefined;

        const { generateMindMapStream } = await import("../services/llmService");
        let hasTransported = false;
        const data = await generateMindMapStream(
          "document",
          text,
          (streamNodes, streamEdges) => {
            const flowNodes = streamNodes.map((n) => createFlowNode(n));
            const flowEdges = streamEdges.map((e) => createFlowEdge(e));
            const layouted = getLayoutedElements(flowNodes, flowEdges);
            setSavedNodes(layouted.nodes as Node[]);
            setSavedEdges(layouted.edges);
            setMapData({ nodes: [], edges: [] });
            
            setLoadingMessage(`Expanding mind map... (${streamNodes.length} nodes resolved)`);
            if (streamNodes.length > 0 && !hasTransported) {
              hasTransported = true;
              setIsLoading(false);
              setWorkflowMode("learn");
              setActiveView("map");
            }
          },
          wikiCtx
        );
        setMapData(data);
        setSavedNodes(null);
        setSavedEdges(null);
        setWorkflowMode("learn");
        setActiveView("map");

        // Persist to wiki knowledge base
        await wiki.ingestMindMap(data, "document", file.name);
      } catch (err: any) {
        setError(err.message || "An error occurred while processing the file.");
      } finally {
        setIsLoading(false);
        setLoadingMessage("");
        e.target.value = "";
      }
    },
    [
      setIsLoading,
      setLoadingMessage,
      setError,
      resetWorkspaceState,
      setComparisonData,
      setWorkflowMode,
      setActiveView,
      setSavedNodes,
      setSavedEdges,
      setMapData,
      wiki,
    ],
  );

  const handleTopicSubmit = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();
      const topic = topicInput.trim();
      if (!topic) return;

      setIsLoading(true);
      setLoadingMessage(`Researching "${topic}"...`);
      setError("");
      setSelectedNodeId(null);
      setSearchQuery("");
      setMapData(null);
      setComparisonData(null);
      setSavedNodes(null);
      setSavedEdges(null);

      try {
        if (workflowMode === "compare") {
          setLoadingMessage(`Comparing options for "${topic}"...`);
          const wikiCtx = wiki.conceptIndex
            ? buildWikiContext(topic, wiki.wikiIndex, wiki.conceptIndex)
            : undefined;

          const { generateComparisonWorkspaceFromTopic } = await import(
            "../services/llmService"
          );
          const raw = await generateComparisonWorkspaceFromTopic(topic, wikiCtx);
          const data = raw;
          setComparisonData(data);
          setMapData(data.map ?? { nodes: [], edges: [] });
          setActiveView("compare");

          if (data.map) {
            await wiki.ingestComparison(raw, "comparison", topic);
          }
        } else {
          const wikiCtx = wiki.conceptIndex
            ? buildWikiContext(topic, wiki.wikiIndex, wiki.conceptIndex)
            : undefined;

          const { generateMindMapStream } = await import(
            "../services/llmService"
          );
          let hasTransported = false;
          const data = await generateMindMapStream(
            "topic",
            topic,
            (streamNodes, streamEdges) => {
              const flowNodes = streamNodes.map((n) => createFlowNode(n));
              const flowEdges = streamEdges.map((e) => createFlowEdge(e));
              const layouted = getLayoutedElements(flowNodes, flowEdges);
              setSavedNodes(layouted.nodes as Node[]);
              setSavedEdges(layouted.edges);
              setMapData({ nodes: [], edges: [] });
              
              setLoadingMessage(`Expanding mind map... (${streamNodes.length} nodes resolved)`);
              if (streamNodes.length > 0 && !hasTransported) {
                hasTransported = true;
                setIsLoading(false);
                setWorkflowMode("learn");
                setActiveView("map");
              }
            },
            wikiCtx
          );
          setMapData(data);
          setSavedNodes(null);
          setSavedEdges(null);
          setWorkflowMode("learn");
          setActiveView("map");

          await wiki.ingestMindMap(data, "topic", topic);
        }
      } catch (err: any) {
        setError(
          err.message ||
            `An error occurred while generating the ${workflowMode === "compare" ? "comparison workspace" : "mind map"}.`,
        );
      } finally {
        setIsLoading(false);
        setLoadingMessage("");
      }
    },
    [
      topicInput,
      setIsLoading,
      setLoadingMessage,
      setError,
      setSelectedNodeId,
      setSearchQuery,
      setMapData,
      setComparisonData,
      setSavedNodes,
      setSavedEdges,
      workflowMode,
      setActiveView,
      wiki,
    ],
  );

  const handleJsonUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const json = JSON.parse(event.target?.result as string);
          setError("");
          setSelectedNodeId(null);
          setSearchQuery("");

          if (json.nodes && json.edges) {
            if (json.comparisonData) {
              const normalized = normalizeComparisonData(json.comparisonData);
              setComparisonData({
                ...normalized,
                map: normalized.map ?? { nodes: [], edges: [] },
              });
              setWorkflowMode("compare");
              setActiveView("compare");
            } else {
              setComparisonData(null);
              setWorkflowMode("learn");
              setActiveView("map");
            }
            setSavedNodes(json.nodes);
            setSavedEdges(json.edges);
            setMapData({ nodes: [], edges: [] });
          } else if (json.name || json.children) {
            const { nodes, edges } = convertTreeToGraph(json);
            setSavedNodes(nodes);
            setSavedEdges(edges);
            setComparisonData(null);
            setWorkflowMode("learn");
            setActiveView("map");
            setMapData({ nodes: [], edges: [] });
          } else {
            setError(
              "Invalid JSON format. Expected nodes/edges or a hierarchical tree.",
            );
          }
        } catch {
          setError("Failed to parse JSON file.");
        }
      };

      reader.readAsText(file);
      e.target.value = "";
    },
    [
      setError,
      setSelectedNodeId,
      setSearchQuery,
      setComparisonData,
      setWorkflowMode,
      setActiveView,
      setSavedNodes,
      setSavedEdges,
      setMapData,
    ],
  );

  const handleSaveMap = useCallback(
    (nodes: Node[], edges: Edge[]) => {
      const exportData: any = { nodes, edges };

      if (comparisonData) {
        const { map, ...rest } = comparisonData;
        exportData.comparisonData = rest;
      }

      const dataStr = JSON.stringify(exportData, null, 2);
      const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
      const exportFileDefaultName = comparisonData
        ? "comparison-workspace.json"
        : "mindmap.json";
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", dataUri);
      linkElement.setAttribute("download", exportFileDefaultName);
      linkElement.click();
    },
    [comparisonData],
  );

  const handleLoadExample = useCallback(() => {
    const exampleGraph = toFlowGraph(EXAMPLE_MAP.data);
    setSavedNodes(exampleGraph.nodes);
    setSavedEdges(exampleGraph.edges);
    setComparisonData(null);
    setWorkflowMode("learn");
    setMapData({ nodes: [], edges: [] });
    setActiveView("map");
    setError("");
    setSearchQuery("");
    setSelectedNodeId(null);
  }, [
    setSavedNodes,
    setSavedEdges,
    setComparisonData,
    setWorkflowMode,
    setMapData,
    setActiveView,
    setError,
    setSearchQuery,
    setSelectedNodeId,
  ]);

  return {
    handleFileUpload,
    handleTopicSubmit,
    handleJsonUpload,
    handleSaveMap,
    handleLoadExample,
  };
}
