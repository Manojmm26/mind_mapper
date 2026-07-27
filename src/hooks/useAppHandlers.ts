import React, { useCallback } from "react";
import { Edge, Node } from "@xyflow/react";
import {
  generateMindMap,
  generateComparisonWorkspace,
  generateAssessmentStage1,
  generateAssessmentStage2,
  generateStudyRoadmap,
  generateFlashcardDeck,
  type ComparisonWorkspaceData,
  type MindMapData,
  type AssessmentStage1Data,
  type AssessmentStage2Data,
  type StudyRoadmapData,
  type AssessmentSelfReportStatus,
  type Flashcard,
  type FlashcardDeckData,
} from "../services/llmService";
import { normalizeComparisonData } from "../utils/comparisonHelpers";
import { convertTreeToGraph, toFlowGraph, createFlowNode, createFlowEdge } from "../utils/mapData";
import { getLayoutedElements } from "../services/layoutService";
import { EXAMPLE_MAP } from "../exampleData";
import { UseWikiReturn } from "./useWiki";
import { buildWikiContext } from "../services/wikiPromptEnhancer";
import type { WorkflowMode, WorkspaceActiveView, AssessmentStage } from "./useAppState";

export interface UseAppHandlersConfig {
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

  // Assessment state setters
  setAssessmentStage1Data: (data: AssessmentStage1Data | null) => void;
  setAssessmentStage2Data: (data: AssessmentStage2Data | null) => void;
  setReassessmentStage2Data: (data: AssessmentStage2Data | null) => void;
  setAssessmentStage: (stage: AssessmentStage) => void;
  setSelfReportAnswers: (answers: Record<string, AssessmentSelfReportStatus>) => void;
  setMcqAnswers: (answers: Record<string, number>) => void;
  setStudyRoadmap: (roadmap: StudyRoadmapData | null) => void;
  setFlashcardDeck: (deck: FlashcardDeckData | null) => void;
  setNodeAssessmentStatus: (status: Record<string, "mastered" | "review" | "gap">) => void;

  // Current state values
  workflowMode: WorkflowMode;
  comparisonData: ComparisonWorkspaceData | null;
  assessmentStage1Data: AssessmentStage1Data | null;
  assessmentStage2Data: AssessmentStage2Data | null;
  reassessmentStage2Data?: AssessmentStage2Data | null;
  selfReportAnswers: Record<string, AssessmentSelfReportStatus>;
  mcqAnswers?: Record<string, number>;
  flashcardDeck?: FlashcardDeckData | null;
  topicInput: string;
  savedNodes: Node[] | null;
  savedEdges: Edge[] | null;

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
  setAssessmentStage1Data,
  setAssessmentStage2Data,
  setReassessmentStage2Data,
  setAssessmentStage,
  setSelfReportAnswers,
  setMcqAnswers,
  setStudyRoadmap,
  setFlashcardDeck,
  setNodeAssessmentStatus,
  workflowMode,
  comparisonData,
  assessmentStage1Data,
  assessmentStage2Data,
  reassessmentStage2Data,
  selfReportAnswers,
  mcqAnswers,
  flashcardDeck,
  topicInput,
  savedNodes,
  savedEdges,
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
          ? buildWikiContext(file.name, wiki.wikiIndex, wiki.conceptIndex, wiki.pages)
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
        if (workflowMode === "assess") {
          setLoadingMessage(`Designing diagnostic assessment for "${topic}"...`);
          const wikiCtx = wiki.conceptIndex
            ? buildWikiContext(topic, wiki.wikiIndex, wiki.conceptIndex, wiki.pages)
            : undefined;

          const { generateAssessmentStage1 } = await import(
            "../services/llmService"
          );
          const stage1Data = await generateAssessmentStage1(topic, wikiCtx);
          setAssessmentStage1Data(stage1Data);
          setAssessmentStage("self_report");
          setActiveView("report");
        } else if (workflowMode === "compare") {
          setLoadingMessage(`Comparing options for "${topic}"...`);
          const wikiCtx = wiki.conceptIndex
            ? buildWikiContext(topic, wiki.wikiIndex, wiki.conceptIndex, wiki.pages)
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
            ? buildWikiContext(topic, wiki.wikiIndex, wiki.conceptIndex, wiki.pages)
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
            `An error occurred while generating the ${workflowMode === "compare" ? "comparison workspace" : workflowMode === "assess" ? "diagnostic assessment" : "mind map"}.`,
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
      setAssessmentStage1Data,
      setAssessmentStage,
      workflowMode,
      setActiveView,
      wiki,
    ],
  );

  const buildColorCodedMap = useCallback(
    (
      selfAnswers: Record<string, AssessmentSelfReportStatus>,
      mcqAns: Record<string, number>,
      stage2?: AssessmentStage2Data | null,
    ) => {
      if (!assessmentStage1Data) return;

      const nodeStatusMap: Record<string, "mastered" | "review" | "gap"> = {};

      assessmentStage1Data.concepts.forEach((concept) => {
        const selfAns = selfAnswers[concept.id];
        let finalStatus: "mastered" | "review" | "gap" = "gap";

        if (selfAns === "mastered") {
          finalStatus = "mastered";
        } else if (selfAns === "review") {
          finalStatus = "review";
        } else {
          finalStatus = "gap";
        }

        const relatedMcq = (stage2?.mcqs || assessmentStage2Data?.mcqs || []).find(
          (m) => m.conceptId === concept.id,
        );
        if (relatedMcq && mcqAns[relatedMcq.id] !== undefined) {
          const isCorrect = mcqAns[relatedMcq.id] === relatedMcq.correctIndex;
          if (isCorrect) {
            finalStatus = "mastered";
          } else {
            finalStatus = "review";
          }
        }

        nodeStatusMap[concept.id] = finalStatus;
      });

      setNodeAssessmentStatus(nodeStatusMap);

      const rootNode: Node = {
        id: "root",
        type: "custom",
        position: { x: 0, y: 0 },
        data: {
          label: assessmentStage1Data.topic,
          description: assessmentStage1Data.overview,
          type: "topic",
          importance: "high",
        },
      };

      const conceptNodes: Node[] = assessmentStage1Data.concepts.map((c) => ({
        id: c.id,
        type: "custom",
        position: { x: 0, y: 0 },
        data: {
          label: c.label,
          description: c.description,
          type: "concept",
          assessmentStatus: nodeStatusMap[c.id],
          question: c.question,
          category: c.category,
        },
      }));

      const edges: Edge[] = assessmentStage1Data.concepts.map((c) => ({
        id: `${c.parentId || "root"}-${c.id}`,
        source: c.parentId || "root",
        target: c.id,
        label: c.category,
      }));

      const allNodes = [rootNode, ...conceptNodes];
      const layouted = getLayoutedElements(allNodes, edges);
      setSavedNodes(layouted.nodes as Node[]);
      setSavedEdges(layouted.edges);
      setMapData({ nodes: [], edges: [] });
    },
    [assessmentStage1Data, assessmentStage2Data, setNodeAssessmentStatus, setSavedNodes, setSavedEdges, setMapData],
  );

  const handleSelfReportSubmit = useCallback(
    async (answers: Record<string, AssessmentSelfReportStatus>) => {
      setSelfReportAnswers(answers);
      const topic = assessmentStage1Data?.topic || topicInput;

      const itemsToVerify = (assessmentStage1Data?.concepts || [])
        .filter((c) => answers[c.id] === "review" || answers[c.id] === "mastered")
        .map((c) => ({
          conceptId: c.id,
          conceptLabel: c.label,
          status: answers[c.id],
          question: c.question,
        }))
        .slice(0, 5);

      if (itemsToVerify.length > 0) {
        setIsLoading(true);
        setLoadingMessage("Generating targeted verification questions...");
        try {
          const wikiCtx = wiki.conceptIndex
            ? buildWikiContext(topic, wiki.wikiIndex, wiki.conceptIndex, wiki.pages)
            : undefined;
          const { generateAssessmentStage2 } = await import(
            "../services/llmService"
          );
          const stage2Data = await generateAssessmentStage2(
            topic,
            itemsToVerify,
            wikiCtx,
          );
          setAssessmentStage2Data(stage2Data);
          setAssessmentStage("mcq");
        } catch (err: any) {
          console.error("Stage 2 generation error:", err);
          buildColorCodedMap(answers, {});
          setAssessmentStage("report");
        } finally {
          setIsLoading(false);
          setLoadingMessage("");
        }
      } else {
        buildColorCodedMap(answers, {});
        setAssessmentStage("report");
      }
    },
    [
      assessmentStage1Data,
      topicInput,
      wiki,
      setIsLoading,
      setLoadingMessage,
      setSelfReportAnswers,
      setAssessmentStage2Data,
      setAssessmentStage,
      buildColorCodedMap,
    ],
  );

  const handleMcqSubmit = useCallback(
    (mcqAns: Record<string, number>) => {
      setMcqAnswers(mcqAns);
      buildColorCodedMap(selfReportAnswers, mcqAns, assessmentStage2Data);
      setAssessmentStage("report");
    },
    [
      selfReportAnswers,
      assessmentStage2Data,
      buildColorCodedMap,
      setMcqAnswers,
      setAssessmentStage,
    ],
  );

  const handleGenerateStudyRoadmap = useCallback(async () => {
    if (!assessmentStage1Data) return;
    const topic = assessmentStage1Data.topic;
    const gapConcepts = assessmentStage1Data.concepts
      .filter(
        (c) =>
          selfReportAnswers[c.id] === "gap" ||
          selfReportAnswers[c.id] === "review",
      )
      .map((c) => c.label);

    setIsLoading(true);
    setLoadingMessage("Generating personalized study roadmap...");
    try {
      const wikiCtx = wiki.conceptIndex
        ? buildWikiContext(topic, wiki.wikiIndex, wiki.conceptIndex, wiki.pages)
        : undefined;
      const { generateStudyRoadmap } = await import("../services/llmService");
      const roadmap = await generateStudyRoadmap(topic, gapConcepts, wikiCtx);
      setStudyRoadmap(roadmap);
      setAssessmentStage("roadmap");
      setActiveView("roadmap");

      // Ingest roadmap into Wiki knowledge base
      await wiki.ingestMindMap(
        {
          nodes: roadmap.milestones.map((m) => ({
            id: m.id,
            label: m.title,
            description: m.description,
            type: "action",
            nextStep: m.practiceTask,
          })),
          edges: roadmap.milestones.slice(1).map((m, idx) => ({
            source: roadmap.milestones[idx].id,
            target: m.id,
            label: "leads to",
          })),
        },
        "topic",
        `Study Roadmap: ${topic}`,
      );
    } catch (err: any) {
      setError(err.message || "Failed to generate study roadmap.");
    } finally {
      setIsLoading(false);
      setLoadingMessage("");
    }
  }, [
    assessmentStage1Data,
    selfReportAnswers,
    wiki,
    setIsLoading,
    setLoadingMessage,
    setStudyRoadmap,
    setAssessmentStage,
    setActiveView,
    setError,
  ]);

  const handleStartAssessmentFromMap = useCallback(() => {
    if (!savedNodes || savedNodes.length === 0) return;
    const topic =
      (savedNodes[0]?.data?.label as string) || "Current Map Assessment";
    const concepts = savedNodes.slice(1).map((n, idx) => ({
      id: n.id,
      label: (n.data?.label as string) || `Concept ${idx + 1}`,
      description: (n.data?.description as string) || "Concept from current map",
      category: (n.data?.type as string) || "General",
      question: `Do you thoroughly understand: ${
        (n.data?.label as string) || n.id
      }?`,
      level: 2,
    }));

    setAssessmentStage1Data({
      topic,
      overview: `Diagnostic assessment derived from current mind map (${concepts.length} concepts).`,
      concepts,
    });
    setWorkflowMode("assess");
    setAssessmentStage("self_report");
    setActiveView("report");
  }, [
    savedNodes,
    setAssessmentStage1Data,
    setWorkflowMode,
    setAssessmentStage,
    setActiveView,
  ]);

  const handleStartReassessment = useCallback(() => {
    if (!assessmentStage1Data) return;
    setAssessmentStage("reassess");
    setActiveView("report");
  }, [assessmentStage1Data, setAssessmentStage, setActiveView]);

  const handleReassessmentChecklistSubmit = useCallback(
    async (selectedConceptIds: string[]) => {
      if (!assessmentStage1Data || selectedConceptIds.length === 0) return;
      setIsLoading(true);
      setLoadingMessage("Generating targeted verification MCQs for studied concepts…");
      try {
        const selectedConcepts = assessmentStage1Data.concepts.filter((c) =>
          selectedConceptIds.includes(c.id),
        );
        const wikiCtx = buildWikiContext(assessmentStage1Data.topic, wiki);
        const { generateAssessmentStage2 } = await import("../services/llmService");
        const stage2 = await generateAssessmentStage2(
          assessmentStage1Data.topic,
          selectedConcepts.map((c) => ({
            conceptId: c.id,
            conceptLabel: c.label,
            status: "review",
          })),
          wikiCtx,
        );
        setReassessmentStage2Data(stage2);
      } catch (err: any) {
        setError(err.message || "Failed to generate verification questions.");
      } finally {
        setIsLoading(false);
        setLoadingMessage("");
      }
    },
    [
      assessmentStage1Data,
      wiki,
      setIsLoading,
      setLoadingMessage,
      setReassessmentStage2Data,
      setError,
    ],
  );

  const handleReassessmentMcqSubmit = useCallback(
    (newMcqAns: Record<string, number>) => {
      const mergedMcqAnswers = { ...(mcqAnswers || {}), ...newMcqAns };
      setMcqAnswers(mergedMcqAnswers);
      buildColorCodedMap(selfReportAnswers, mergedMcqAnswers, reassessmentStage2Data || assessmentStage2Data);
      setAssessmentStage("report");
    },
    [
      mcqAnswers,
      selfReportAnswers,
      reassessmentStage2Data,
      assessmentStage2Data,
      setMcqAnswers,
      buildColorCodedMap,
      setAssessmentStage,
    ],
  );

  const handleStartFlashcards = useCallback(
    async (targetConceptIds?: string[]) => {
      if (!assessmentStage1Data) return;
      setIsLoading(true);
      setLoadingMessage("Preparing interactive practice flashcard deck…");
      try {
        let conceptsToStudy = assessmentStage1Data.concepts;
        if (targetConceptIds && targetConceptIds.length > 0) {
          conceptsToStudy = assessmentStage1Data.concepts.filter((c) =>
            targetConceptIds.includes(c.id),
          );
        }

        const wikiCtx = buildWikiContext(assessmentStage1Data.topic, wiki);
        const { generateFlashcardDeck } = await import("../services/llmService");
        const deck = await generateFlashcardDeck(
          assessmentStage1Data.topic,
          conceptsToStudy,
          wikiCtx,
        );

        setFlashcardDeck(deck);
        setAssessmentStage("flashcards");
        setActiveView("flashcards");
      } catch (err: any) {
        console.error("Flashcard generation error:", err);
        const fallbackDeck = {
          topic: assessmentStage1Data.topic,
          cards: (targetConceptIds
            ? assessmentStage1Data.concepts.filter((c) => targetConceptIds.includes(c.id))
            : assessmentStage1Data.concepts
          ).map((c) => ({
            id: `fc_${c.id}`,
            conceptId: c.id,
            title: c.label,
            category: c.category,
            question: c.question || `Explain the core principles of ${c.label}.`,
            explanation: c.description,
            keyTakeaways: [
              `Understand how ${c.label} connects to ${assessmentStage1Data.topic}`,
              `Apply ${c.label} in practical system designs.`,
            ],
            realWorldExample: `Practical implementation scenario for ${c.label}.`,
          })),
        };
        setFlashcardDeck(fallbackDeck);
        setAssessmentStage("flashcards");
        setActiveView("flashcards");
      } finally {
        setIsLoading(false);
        setLoadingMessage("");
      }
    },
    [
      assessmentStage1Data,
      wiki,
      setIsLoading,
      setLoadingMessage,
      setFlashcardDeck,
      setAssessmentStage,
      setActiveView,
    ],
  );

  const handleRateFlashcard = useCallback(
    (card: any, rating: "easy" | "good" | "hard") => {
      const newStatus = rating === "easy" ? "mastered" : rating === "good" ? "review" : "gap";

      setSavedNodes((prevNodes) => {
        if (!prevNodes) return prevNodes;
        return prevNodes.map((n) => {
          if (n.id === card.conceptId) {
            return {
              ...n,
              data: {
                ...n.data,
                assessmentStatus: newStatus,
              },
            };
          }
          return n;
        });
      });
    },
    [setSavedNodes],
  );

  const handleExportDiagnosticReport = useCallback(() => {
    if (!assessmentStage1Data) return;
    const exportData = {
      topic: assessmentStage1Data.topic,
      exportedAt: new Date().toISOString(),
      stage1: assessmentStage1Data,
      stage2: assessmentStage2Data,
      selfReportAnswers,
      mcqAnswers,
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Diagnostic_Report_${assessmentStage1Data.topic.replace(/\s+/g, "_")}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [assessmentStage1Data, assessmentStage2Data, selfReportAnswers, mcqAnswers]);

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

  const handleSelectMapExample = useCallback(
    (_name: string, data: MindMapData) => {
      const exampleGraph = toFlowGraph(data);
      setSavedNodes(exampleGraph.nodes);
      setSavedEdges(exampleGraph.edges);
      setComparisonData(null);
      setWorkflowMode("learn");
      setMapData({ nodes: [], edges: [] });
      setActiveView("map");
      setError("");
      setSearchQuery("");
      setSelectedNodeId(null);
    },
    [
      setSavedNodes,
      setSavedEdges,
      setComparisonData,
      setWorkflowMode,
      setMapData,
      setActiveView,
      setError,
      setSearchQuery,
      setSelectedNodeId,
    ],
  );

  const handleSelectCompareExample = useCallback(
    (data: ComparisonWorkspaceData) => {
      const normalized = normalizeComparisonData(data);
      const flowGraph = normalized.map
        ? toFlowGraph(normalized.map)
        : { nodes: [], edges: [] };
      setSavedNodes(flowGraph.nodes);
      setSavedEdges(flowGraph.edges);
      setComparisonData({
        ...normalized,
        map: normalized.map ?? { nodes: [], edges: [] },
      });
      setWorkflowMode("compare");
      setActiveView("compare");
      setMapData({ nodes: [], edges: [] });
      setError("");
      setSearchQuery("");
      setSelectedNodeId(null);
    },
    [
      setSavedNodes,
      setSavedEdges,
      setComparisonData,
      setWorkflowMode,
      setActiveView,
      setMapData,
      setError,
      setSearchQuery,
      setSelectedNodeId,
    ],
  );

  return {
    handleFileUpload,
    handleTopicSubmit,
    handleJsonUpload,
    handleSaveMap,
    handleLoadExample,
    handleSelectMapExample,
    handleSelfReportSubmit,
    handleMcqSubmit,
    handleGenerateStudyRoadmap,
    handleStartAssessmentFromMap,
    handleStartReassessment,
    handleReassessmentChecklistSubmit,
    handleReassessmentMcqSubmit,
    handleStartFlashcards,
    handleRateFlashcard,
    handleExportDiagnosticReport,
  };
}
