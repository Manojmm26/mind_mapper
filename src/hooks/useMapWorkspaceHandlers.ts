import React, { useCallback } from "react";
import { Edge, Node } from "@xyflow/react";
import {
  generateMindMap,
  generateComparisonWorkspaceFromTopic,
  generateAssessmentStage1,
  type ComparisonWorkspaceData,
  type MindMapData,
  type AssessmentStage1Data,
} from "../services/llmService";
import { normalizeComparisonData } from "../utils/comparisonHelpers";
import { convertTreeToGraph, toFlowGraph, createFlowNode, createFlowEdge } from "../utils/mapData";
import { getLayoutedElements } from "../services/layoutService";
import { EXAMPLE_MAP } from "../exampleData";
import { UseWikiReturn } from "./useWiki";
import { buildWikiContext } from "../services/wikiPromptEnhancer";
import type { WorkflowMode, WorkspaceActiveView, AssessmentStage } from "./useAppState";

export interface UseMapWorkspaceHandlersConfig {
  setIsLoading: (loading: boolean) => void;
  setLoadingMessage: (msg: string) => void;
  setError: (error: string) => void;
  setMapData: (data: MindMapData | null) => void;
  setComparisonData: (data: ComparisonWorkspaceData | null) => void;
  setSavedNodes: (nodes: Node[] | null) => void;
  setSavedEdges: (edges: Edge[] | null) => void;
  setWorkflowMode: (mode: WorkflowMode) => void;
  setActiveView: (view: WorkspaceActiveView) => void;
  setSelectedNodeId: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
  setTopicInput: (input: string) => void;
  setAssessmentStage1Data: (data: AssessmentStage1Data | null) => void;
  setAssessmentStage: (stage: AssessmentStage) => void;
  workflowMode: WorkflowMode;
  topicInput: string;
  savedNodes: Node[] | null;
  savedEdges: Edge[] | null;
  fileInputRef: React.RefObject<HTMLInputElement>;
  jsonInputRef: React.RefObject<HTMLInputElement>;
  wiki: UseWikiReturn;
}

export function useMapWorkspaceHandlers({
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
  setAssessmentStage1Data,
  setAssessmentStage,
  workflowMode,
  topicInput,
  savedNodes,
  savedEdges,
  fileInputRef,
  jsonInputRef,
  wiki,
}: UseMapWorkspaceHandlersConfig) {
  const handleFileUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setIsLoading(true);
      setLoadingMessage(`Reading ${file.name}...`);
      setError("");

      try {
        if (file.type === "application/json" || file.name.endsWith(".json")) {
          const text = await file.text();
          const json = JSON.parse(text);
          const flowGraph = toFlowGraph(json);
          const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
            flowGraph.nodes,
            flowGraph.edges,
          );

          setSavedNodes(layoutedNodes);
          setSavedEdges(layoutedEdges);

          const rootNode = layoutedNodes.find((n) => !flowGraph.edges.some((e) => e.target === n.id));
          if (rootNode) setSelectedNodeId(rootNode.id);
          setActiveView("map");
          return;
        }

        const wikiCtx = buildWikiContext(file.name, wiki);
        let extractedText = "";

        if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
          setLoadingMessage("Extracting text from PDF document...");
          const { extractTextFromPdf } = await import("../services/pdfService");
          extractedText = await extractTextFromPdf(file);
        } else {
          setLoadingMessage("Reading text document...");
          extractedText = await file.text();
        }

        setLoadingMessage("AI is structuring your document into a Mind Map...");

        if (workflowMode === "assess") {
          const stage1Data = await generateAssessmentStage1(
            file.name.replace(/\.[^/.]+$/, ""),
            wikiCtx,
          );
          setAssessmentStage1Data(stage1Data);
          setAssessmentStage("self_report");
          setActiveView("report");
        } else if (workflowMode === "compare") {
          const compData = await generateComparisonWorkspaceFromTopic(
            `Analysis of ${file.name}`,
            wikiCtx,
          );
          setComparisonData(normalizeComparisonData(compData));
          setActiveView("compare_board");
        } else {
          const mapData = await generateMindMap(
            `Mind map of ${file.name}`,
            wikiCtx,
          );
          setMapData(mapData);
          const initialGraph = convertTreeToGraph(mapData);
          const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
            initialGraph.nodes,
            initialGraph.edges,
          );
          setSavedNodes(layoutedNodes);
          setSavedEdges(layoutedEdges);
          setActiveView("map");
        }
      } catch (err: any) {
        setError(err.message || "Failed to process document.");
      } finally {
        setIsLoading(false);
        setLoadingMessage("");
        if (e.target) e.target.value = "";
      }
    },
    [
      setIsLoading,
      setLoadingMessage,
      setError,
      workflowMode,
      wiki,
      setSavedNodes,
      setSavedEdges,
      setSelectedNodeId,
      setActiveView,
      setAssessmentStage1Data,
      setAssessmentStage,
      setComparisonData,
      setMapData,
    ],
  );

  const handleJsonUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setIsLoading(true);
      setLoadingMessage("Importing Mind Map JSON...");

      try {
        const text = await file.text();
        const json = JSON.parse(text);
        const flowGraph = toFlowGraph(json);
        const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
          flowGraph.nodes,
          flowGraph.edges,
        );

        setSavedNodes(layoutedNodes);
        setSavedEdges(layoutedEdges);
        setActiveView("map");
      } catch (err: any) {
        setError("Invalid JSON format.");
      } finally {
        setIsLoading(false);
        setLoadingMessage("");
        if (e.target) e.target.value = "";
      }
    },
    [setIsLoading, setLoadingMessage, setSavedNodes, setSavedEdges, setActiveView, setError],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!topicInput.trim()) return;

      setIsLoading(true);
      setError("");

      try {
        const wikiCtx = buildWikiContext(topicInput, wiki);

        if (workflowMode === "assess") {
          setLoadingMessage(`AI is building a diagnostic concept tree for "${topicInput}"...`);
          const stage1Data = await generateAssessmentStage1(topicInput, wikiCtx);
          setAssessmentStage1Data(stage1Data);
          setAssessmentStage("self_report");
          setActiveView("report");
        } else if (workflowMode === "compare") {
          setLoadingMessage(`AI is researching comparison data for "${topicInput}"...`);
          const compData = await generateComparisonWorkspaceFromTopic(topicInput, wikiCtx);
          setComparisonData(normalizeComparisonData(compData));
          setActiveView("compare_board");
        } else {
          setLoadingMessage(`AI is generating a mind map for "${topicInput}"...`);
          const mapData = await generateMindMap(topicInput, wikiCtx);
          setMapData(mapData);
          const initialGraph = convertTreeToGraph(mapData);
          const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
            initialGraph.nodes,
            initialGraph.edges,
          );
          setSavedNodes(layoutedNodes);
          setSavedEdges(layoutedEdges);
          setActiveView("map");
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
        setLoadingMessage("");
      }
    },
    [
      topicInput,
      workflowMode,
      wiki,
      setIsLoading,
      setError,
      setLoadingMessage,
      setAssessmentStage1Data,
      setAssessmentStage,
      setActiveView,
      setComparisonData,
      setMapData,
      setSavedNodes,
      setSavedEdges,
    ],
  );

  const handleSelectMapExample = useCallback(
    (name: string, data: MindMapData) => {
      setMapData(data);
      setWorkflowMode("learn");
      const initialGraph = convertTreeToGraph(data);
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        initialGraph.nodes,
        initialGraph.edges,
      );
      setSavedNodes(layoutedNodes);
      setSavedEdges(layoutedEdges);
      setActiveView("map");
    },
    [
      setMapData,
      setWorkflowMode,
      setSavedNodes,
      setSavedEdges,
      setActiveView,
    ],
  );

  const handleSelectCompareExample = useCallback(
    (data: ComparisonWorkspaceData) => {
      setComparisonData(normalizeComparisonData(data));
      setWorkflowMode("compare");
      setActiveView("compare");
    },
    [setComparisonData, setWorkflowMode, setActiveView],
  );

  const handleSaveMap = useCallback(
    (nodes: Node[], edges: Edge[]) => {
      setSavedNodes(nodes);
      setSavedEdges(edges);
    },
    [setSavedNodes, setSavedEdges],
  );

  const handleStartAssessmentFromMap = useCallback(async () => {
    if (!savedNodes || savedNodes.length === 0) return;
    setIsLoading(true);
    setLoadingMessage("Converting current Mind Map into a Diagnostic Assessment...");

    try {
      const topic = savedNodes[0]?.data?.label ? String(savedNodes[0].data.label) : "Mind Map Topic";
      const concepts = savedNodes.slice(1).map((n, i) => ({
        id: n.id,
        label: String(n.data?.label || `Concept ${i + 1}`),
        description: String(n.data?.description || ""),
        category: String(n.data?.category || "Core Concept"),
        question: `Do you understand ${n.data?.label || "this concept"}?`,
        level: 1,
      }));

      const stage1Data: AssessmentStage1Data = {
        topic,
        overview: `Diagnostic assessment generated from active Mind Map "${topic}".`,
        concepts,
      };

      setAssessmentStage1Data(stage1Data);
      setWorkflowMode("assess");
      setAssessmentStage("self_report");
      setActiveView("report");
    } catch (err: any) {
      setError(err.message || "Failed to start assessment from map.");
    } finally {
      setIsLoading(false);
      setLoadingMessage("");
    }
  }, [
    savedNodes,
    setIsLoading,
    setLoadingMessage,
    setAssessmentStage1Data,
    setWorkflowMode,
    setAssessmentStage,
    setActiveView,
    setError,
  ]);

  return {
    handleFileUpload,
    handleJsonUpload,
    handleSubmit,
    handleSelectMapExample,
    handleSelectCompareExample,
    handleSaveMap,
    handleStartAssessmentFromMap,
  };
}
