import React, { useCallback } from "react";
import { Edge, Node } from "@xyflow/react";
import {
  generateAssessmentStage1,
  generateAssessmentStage2,
  generateStudyRoadmap,
  type AssessmentStage1Data,
  type AssessmentStage2Data,
  type StudyRoadmapData,
  type AssessmentSelfReportStatus,
} from "../services/llmService";
import { convertTreeToGraph, createFlowNode, createFlowEdge } from "../utils/mapData";
import { getLayoutedElements } from "../services/layoutService";
import { UseWikiReturn } from "./useWiki";
import { buildWikiContext } from "../services/wikiPromptEnhancer";
import type { WorkflowMode, WorkspaceActiveView, AssessmentStage } from "./useAppState";

export interface UseAssessmentHandlersConfig {
  setIsLoading: (loading: boolean) => void;
  setLoadingMessage: (msg: string) => void;
  setError: (error: string) => void;
  setSavedNodes: (nodes: Node[] | null) => void;
  setSavedEdges: (edges: Edge[] | null) => void;
  setActiveView: (view: WorkspaceActiveView) => void;
  setAssessmentStage1Data: (data: AssessmentStage1Data | null) => void;
  setAssessmentStage2Data: (data: AssessmentStage2Data | null) => void;
  setReassessmentStage2Data?: (data: AssessmentStage2Data | null) => void;
  setAssessmentStage: (stage: AssessmentStage) => void;
  setSelfReportAnswers: (answers: Record<string, AssessmentSelfReportStatus>) => void;
  setMcqAnswers: (answers: Record<string, number>) => void;
  setStudyRoadmap: (roadmap: StudyRoadmapData | null) => void;
  setNodeAssessmentStatus: (status: Record<string, "mastered" | "review" | "gap">) => void;
  assessmentStage1Data: AssessmentStage1Data | null;
  assessmentStage2Data: AssessmentStage2Data | null;
  reassessmentStage2Data?: AssessmentStage2Data | null;
  selfReportAnswers: Record<string, AssessmentSelfReportStatus>;
  mcqAnswers?: Record<string, number>;
  savedNodes: Node[] | null;
  savedEdges: Edge[] | null;
  wiki: UseWikiReturn;
}

export function useAssessmentHandlers({
  setIsLoading,
  setLoadingMessage,
  setError,
  setSavedNodes,
  setSavedEdges,
  setActiveView,
  setAssessmentStage1Data,
  setAssessmentStage2Data,
  setReassessmentStage2Data,
  setAssessmentStage,
  setSelfReportAnswers,
  setMcqAnswers,
  setStudyRoadmap,
  setNodeAssessmentStatus,
  assessmentStage1Data,
  assessmentStage2Data,
  reassessmentStage2Data,
  selfReportAnswers,
  mcqAnswers,
  savedNodes,
  savedEdges,
  wiki,
}: UseAssessmentHandlersConfig) {
  // Helper to color-code map nodes based on assessment results
  const buildColorCodedMap = useCallback(
    (
      selfReport: Record<string, AssessmentSelfReportStatus>,
      mcqs?: Record<string, number>,
      stage2DataToUse?: AssessmentStage2Data | null,
    ) => {
      if (!assessmentStage1Data) return;

      const currentStage2 = stage2DataToUse || assessmentStage2Data;
      const statusMap: Record<string, "mastered" | "review" | "gap"> = {};

      assessmentStage1Data.concepts.forEach((concept) => {
        const selfStatus = selfReport[concept.id];
        if (!selfStatus) {
          statusMap[concept.id] = "gap";
          return;
        }

        if (selfStatus === "mastered") {
          const conceptMcqs = currentStage2?.mcqs.filter(
            (q) => q.conceptId === concept.id,
          );
          if (conceptMcqs && conceptMcqs.length > 0 && mcqs) {
            const allCorrect = conceptMcqs.every(
              (q) => mcqs[q.id] === q.correctIndex,
            );
            statusMap[concept.id] = allCorrect ? "mastered" : "review";
          } else {
            statusMap[concept.id] = "mastered";
          }
        } else if (selfStatus === "review") {
          statusMap[concept.id] = "review";
        } else {
          statusMap[concept.id] = "gap";
        }
      });

      setNodeAssessmentStatus(statusMap);

      const tree = {
        name: assessmentStage1Data.topic,
        description: assessmentStage1Data.overview,
        children: assessmentStage1Data.concepts.map((c) => ({
          id: c.id,
          name: c.label,
          description: `${c.description}\n\n[Diagnostic Status: ${statusMap[c.id]?.toUpperCase() || "UNASSESSED"}]`,
          category: c.category,
          assessmentStatus: statusMap[c.id],
        })),
      };

      const initialGraph = convertTreeToGraph(tree);
      const updatedNodes = initialGraph.nodes.map((node) => {
        const matchingConcept = assessmentStage1Data.concepts.find(
          (c) => c.label === node.data.label || c.id === node.id,
        );
        const status = matchingConcept ? statusMap[matchingConcept.id] : undefined;

        return createFlowNode({
          id: node.id,
          label: String(node.data.label || ""),
          description: String(node.data.description || ""),
          type: "custom",
          assessmentStatus: status,
          themeFamily:
            status === "mastered"
              ? "green"
              : status === "review"
              ? "amber"
              : status === "gap"
              ? "red"
              : "slate",
        });
      });

      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        updatedNodes,
        initialGraph.edges,
      );

      setSavedNodes(layoutedNodes);
      setSavedEdges(layoutedEdges);
    },
    [
      assessmentStage1Data,
      assessmentStage2Data,
      setNodeAssessmentStatus,
      setSavedNodes,
      setSavedEdges,
    ],
  );

  const handleSelfReportSubmit = useCallback(
    async (answers: Record<string, AssessmentSelfReportStatus>) => {
      if (!assessmentStage1Data) return;
      setSelfReportAnswers(answers);
      setIsLoading(true);
      setLoadingMessage("Generating targeted verification questions...");

      try {
        const masteredConcepts = assessmentStage1Data.concepts.filter(
          (c) => answers[c.id] === "mastered",
        );

        if (masteredConcepts.length === 0) {
          buildColorCodedMap(answers, {}, null);
          setAssessmentStage("report");
          setIsLoading(false);
          setLoadingMessage("");
          return;
        }

        const wikiCtx = buildWikiContext(assessmentStage1Data.topic, wiki);
        const stage2 = await generateAssessmentStage2(
          assessmentStage1Data.topic,
          masteredConcepts.map((c) => ({
            conceptId: c.id,
            conceptLabel: c.label,
            status: answers[c.id],
          })),
          wikiCtx,
        );

        setAssessmentStage2Data(stage2);
        setAssessmentStage("mcq");
      } catch (err: any) {
        setError(err.message || "Failed to generate verification questions.");
        buildColorCodedMap(answers, {}, null);
        setAssessmentStage("report");
      } finally {
        setIsLoading(false);
        setLoadingMessage("");
      }
    },
    [
      assessmentStage1Data,
      wiki,
      setSelfReportAnswers,
      setIsLoading,
      setLoadingMessage,
      buildColorCodedMap,
      setAssessmentStage,
      setAssessmentStage2Data,
      setError,
    ],
  );

  const handleMcqSubmit = useCallback(
    (answers: Record<string, number>) => {
      setMcqAnswers(answers);
      buildColorCodedMap(selfReportAnswers, answers, assessmentStage2Data);
      setAssessmentStage("report");
    },
    [
      selfReportAnswers,
      assessmentStage2Data,
      setMcqAnswers,
      buildColorCodedMap,
      setAssessmentStage,
    ],
  );

  const handleStartReassessment = useCallback(() => {
    setAssessmentStage("reassess");
  }, [setAssessmentStage]);

  const handleReassessmentChecklistSubmit = useCallback(
    async (selectedConceptIds: string[]) => {
      if (!assessmentStage1Data) return;
      setIsLoading(true);
      setLoadingMessage("Generating targeted verification questions...");

      try {
        const selectedIdSet = new Set(selectedConceptIds);
        const selectedConcepts = assessmentStage1Data.concepts.filter((c) =>
          selectedIdSet.has(c.id),
        );
        const wikiCtx = buildWikiContext(assessmentStage1Data.topic, wiki);
        const stage2 = await generateAssessmentStage2(
          assessmentStage1Data.topic,
          selectedConcepts.map((c) => ({
            conceptId: c.id,
            conceptLabel: c.label,
            status: "review",
          })),
          wikiCtx,
        );
        if (setReassessmentStage2Data) {
          setReassessmentStage2Data(stage2);
        }
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
      buildColorCodedMap(
        selfReportAnswers,
        mergedMcqAnswers,
        reassessmentStage2Data || assessmentStage2Data,
      );
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

  const handleGenerateStudyRoadmap = useCallback(async () => {
    if (!assessmentStage1Data) return;
    setIsLoading(true);
    setLoadingMessage("Crafting tailored study roadmap & action plan...");

    try {
      const wikiCtx = buildWikiContext(assessmentStage1Data.topic, wiki);
      const roadmap = await generateStudyRoadmap(
        assessmentStage1Data.topic,
        assessmentStage1Data.concepts.map((c) => ({
          conceptId: c.id,
          conceptLabel: c.label,
          status: selfReportAnswers[c.id] || "gap",
        })),
        wikiCtx,
      );

      setStudyRoadmap(roadmap);
      setAssessmentStage("roadmap");
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
    setError,
  ]);

  const handleExportDiagnosticReport = useCallback(() => {
    if (!assessmentStage1Data) return;

    const reportData = {
      topic: assessmentStage1Data.topic,
      overview: assessmentStage1Data.overview,
      generatedAt: new Date().toISOString(),
      concepts: assessmentStage1Data.concepts.map((c) => ({
        id: c.id,
        label: c.label,
        category: c.category,
        description: c.description,
        selfReportStatus: selfReportAnswers[c.id] || "unassessed",
      })),
      mcqVerificationResults: mcqAnswers,
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${assessmentStage1Data.topic.toLowerCase().replace(/\s+/g, "_")}_diagnostic_report.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [assessmentStage1Data, selfReportAnswers, mcqAnswers]);

  return {
    buildColorCodedMap,
    handleSelfReportSubmit,
    handleMcqSubmit,
    handleStartReassessment,
    handleReassessmentChecklistSubmit,
    handleReassessmentMcqSubmit,
    handleGenerateStudyRoadmap,
    handleExportDiagnosticReport,
  };
}
