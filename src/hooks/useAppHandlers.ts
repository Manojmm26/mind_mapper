import React from "react";
import { Edge, Node } from "@xyflow/react";
import {
  type ComparisonWorkspaceData,
  type MindMapData,
  type AssessmentStage1Data,
  type AssessmentStage2Data,
  type StudyRoadmapData,
  type AssessmentSelfReportStatus,
  type FlashcardDeckData,
} from "../services/llmService";
import { UseWikiReturn } from "./useWiki";
import type { WorkflowMode, WorkspaceActiveView, AssessmentStage } from "./useAppState";
import { useAssessmentHandlers } from "./useAssessmentHandlers";
import { useFlashcardHandlers } from "./useFlashcardHandlers";
import { useMapWorkspaceHandlers } from "./useMapWorkspaceHandlers";

export interface UseAppHandlersConfig {
  setIsLoading: (loading: boolean) => void;
  setLoadingMessage: (msg: string) => void;
  setError: (error: string) => void;
  setMapData: (data: MindMapData | null) => void;
  setComparisonData: (data: ComparisonWorkspaceData | null) => void;
  setSavedNodes: (nodes: Node[] | null | ((prev: Node[] | null) => Node[] | null)) => void;
  setSavedEdges: (edges: Edge[] | null) => void;
  setWorkflowMode: (mode: WorkflowMode) => void;
  setActiveView: (view: WorkspaceActiveView) => void;
  setSelectedNodeId: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
  setTopicInput: (input: string) => void;

  // Assessment state setters
  setAssessmentStage1Data: (data: AssessmentStage1Data | null) => void;
  setAssessmentStage2Data: (data: AssessmentStage2Data | null) => void;
  setReassessmentStage2Data?: (data: AssessmentStage2Data | null) => void;
  setAssessmentStage: (stage: AssessmentStage) => void;
  setSelfReportAnswers: (answers: Record<string, AssessmentSelfReportStatus>) => void;
  setMcqAnswers: (answers: Record<string, number>) => void;
  setStudyRoadmap: (roadmap: StudyRoadmapData | null) => void;
  setFlashcardDeck: (deck: FlashcardDeckData | null) => void;
  setNodeAssessmentStatus: (status: Record<string, "mastered" | "review" | "gap"> | ((prev: Record<string, "mastered" | "review" | "gap">) => Record<string, "mastered" | "review" | "gap">)) => void;

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

export function useAppHandlers(config: UseAppHandlersConfig) {
  const assessmentHandlers = useAssessmentHandlers(config);
  const flashcardHandlers = useFlashcardHandlers(config);
  const mapWorkspaceHandlers = useMapWorkspaceHandlers(config);

  return {
    ...assessmentHandlers,
    ...flashcardHandlers,
    ...mapWorkspaceHandlers,
    handleTopicSubmit: mapWorkspaceHandlers.handleSubmit,
    handleLoadExample: mapWorkspaceHandlers.handleSelectMapExample,
  };
}
