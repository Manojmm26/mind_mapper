import React, { Suspense, lazy, useCallback } from "react";
import { HomePage } from "./components/HomePage";
import { ThemeToggle } from "./components/ThemeToggle";
import { useAppState } from "./hooks/useAppState";
import { useAppHandlers } from "./hooks/useAppHandlers";
import { useWiki } from "./hooks/useWiki";
import { Node, Edge } from "@xyflow/react";

const PretextShowcase = lazy(() =>
  import("./components/PretextShowcase").then((module) => ({
    default: module.PretextShowcase,
  })),
);

const GalleryPageComponent = lazy(() =>
  import("./components/GalleryPage").then((module) => ({
    default: module.GalleryPage,
  })),
);

const InterviewStudioWorkspace = lazy(() =>
  import("./components/interviewStudio/InterviewStudioWorkspace").then((module) => ({
    default: module.InterviewStudioWorkspace,
  })),
);

const WorkspaceViewComponent = lazy(() =>
  import("./components/WorkspaceView").then((module) => ({
    default: module.WorkspaceViewComponent,
  })),
);

import { AppLoader } from "./components/common/AppLoader";

function FullScreenLoadingMessage({ message }: { message: string }) {
  return <AppLoader variant="fullscreen" message={message} />;
}

export default function App() {
  const state = useAppState();
  const wiki = useWiki();

  const handleLoadWikiPage = useCallback(
    async (pageId: string) => {
      const page = await wiki.loadWikiPage(pageId);
      if (!page) return;

      const nodes: Node[] = page.nodes.map((n) => ({
        id: n.id,
        type: "default",
        position: { x: 0, y: 0 },
        data: {
          label: n.label,
          description: n.description,
          type: n.metadata?.type,
          tags: n.metadata?.tags,
          importance: n.metadata?.importance,
          confidence: n.metadata?.confidence,
          sourceHint: n.metadata?.sourceHint,
          nextStep: n.metadata?.nextStep,
        },
      }));

      const edges: Edge[] = page.edges.map((e) => ({
        id: `${e.source}-${e.target}`,
        source: e.source,
        target: e.target,
        label: e.label,
      }));

      if (page.comparisonData) {
        state.setComparisonData(page.comparisonData);
        state.setWorkflowMode("compare");
        state.setActiveView("compare");
      } else {
        state.setComparisonData(null);
        state.setWorkflowMode("learn");
        state.setActiveView("map");
      }

      state.setSavedNodes(nodes);
      state.setSavedEdges(edges);
      state.setMapData({ nodes: [], edges: [] });
      state.setError("");
      state.setSearchQuery("");
      state.setSelectedNodeId(null);
      state.setShowWikiExplorer(false);
    },
    [wiki, state],
  );

  const handlers = useAppHandlers({
    setIsLoading: state.setIsLoading,
    setLoadingMessage: state.setLoadingMessage,
    setError: state.setError,
    setMapData: state.setMapData,
    setComparisonData: state.setComparisonData,
    setSavedNodes: state.setSavedNodes,
    setSavedEdges: state.setSavedEdges,
    setWorkflowMode: state.setWorkflowMode,
    setActiveView: state.setActiveView,
    setSelectedNodeId: state.setSelectedNodeId,
    setSearchQuery: state.setSearchQuery,
    setTopicInput: state.setTopicInput,
    setAssessmentStage1Data: state.setAssessmentStage1Data,
    setAssessmentStage2Data: state.setAssessmentStage2Data,
    setReassessmentStage2Data: state.setReassessmentStage2Data,
    setAssessmentStage: state.setAssessmentStage,
    setSelfReportAnswers: state.setSelfReportAnswers,
    setMcqAnswers: state.setMcqAnswers,
    setStudyRoadmap: state.setStudyRoadmap,
    setFlashcardDeck: state.setFlashcardDeck,
    setNodeAssessmentStatus: state.setNodeAssessmentStatus,
    workflowMode: state.workflowMode,
    comparisonData: state.comparisonData,
    assessmentStage1Data: state.assessmentStage1Data,
    assessmentStage2Data: state.assessmentStage2Data,
    reassessmentStage2Data: state.reassessmentStage2Data,
    selfReportAnswers: state.selfReportAnswers,
    mcqAnswers: state.mcqAnswers,
    flashcardDeck: state.flashcardDeck,
    topicInput: state.topicInput,
    savedNodes: state.savedNodes,
    savedEdges: state.savedEdges,
    fileInputRef: state.fileInputRef,
    jsonInputRef: state.jsonInputRef,
    wiki,
    resetWorkspaceState: state.resetWorkspaceState,
  });

  // Pretext showcase experience
  if (state.experience === "pretext") {
    return (
      <>
        <Suspense fallback={<FullScreenLoadingMessage message="Loading showcase…" />}>
          <PretextShowcase onExit={() => state.setExperience("classic")} />
        </Suspense>
        <ThemeToggle />
      </>
    );
  }

  // Gallery page experience
  if (state.experience === "gallery") {
    return (
      <>
        <Suspense fallback={<FullScreenLoadingMessage message="Loading gallery…" />}>
          <GalleryPageComponent
            onBack={() => state.setExperience("classic")}
            onSelectMapExample={(name, data) => {
              state.setExperience("classic");
              handlers.handleSelectMapExample(name, data);
            }}
            onSelectCompareExample={(data) => {
              state.setExperience("classic");
              handlers.handleSelectCompareExample(data);
            }}
          />
        </Suspense>
        <ThemeToggle />
      </>
    );
  }

  // Master Full-Stack Interview Studio experience
  if (state.experience === "interview") {
    return (
      <>
        <Suspense fallback={<FullScreenLoadingMessage message="Loading interview studio…" />}>
          <InterviewStudioWorkspace
            onBackToHome={() => {
              state.resetWorkspaceState();
              state.setExperience("classic");
            }}
          />
        </Suspense>
        <ThemeToggle />
      </>
    );
  }

  // Workspace view (when a map, assessment, or comparison is loaded)
  if (state.workspaceGraph.nodes.length > 0 || state.assessmentStage1Data || state.comparisonData) {
    return (
      <>
        <Suspense
          fallback={<FullScreenLoadingMessage message="Loading workspace…" />}
        >
          <WorkspaceViewComponent
            isMobile={state.isMobile}
            outlineFullscreen={state.outlineFullscreen}
            workspaceGraph={state.workspaceGraph}
            workspaceRoot={state.workspaceRoot}
            workflowMode={state.workflowMode}
            activeView={state.activeView}
            setActiveView={state.setActiveView}
            comparisonData={state.comparisonData}
            assessmentStage={state.assessmentStage}
            assessmentStage1Data={state.assessmentStage1Data}
            assessmentStage2Data={state.assessmentStage2Data}
            reassessmentStage2Data={state.reassessmentStage2Data}
            selfReportAnswers={state.selfReportAnswers}
            mcqAnswers={state.mcqAnswers}
            studyRoadmap={state.studyRoadmap}
            flashcardDeck={state.flashcardDeck}
            isLoading={state.isLoading}
            onSelfReportSubmit={handlers.handleSelfReportSubmit}
            onMcqSubmit={handlers.handleMcqSubmit}
            onReassessmentChecklistSubmit={handlers.handleReassessmentChecklistSubmit}
            onReassessmentMcqSubmit={handlers.handleReassessmentMcqSubmit}
            onRateFlashcard={handlers.handleRateFlashcard}
            onGenerateStudyRoadmap={handlers.handleGenerateStudyRoadmap}
            onStartAssessmentFromMap={handlers.handleStartAssessmentFromMap}
            onStartReassessment={handlers.handleStartReassessment}
            onStartFlashcards={handlers.handleStartFlashcards}
            onExportReport={handlers.handleExportDiagnosticReport}
            selectedNodeId={state.selectedNodeId}
            searchQuery={state.searchQuery}
            setSearchQuery={state.setSearchQuery}
            handleSelectNode={state.handleSelectNode}
            handleSaveMap={handlers.handleSaveMap}
            resetWorkspaceState={state.resetWorkspaceState}
            setExperience={state.setExperience}
            mapData={state.mapData}
            savedNodes={state.savedNodes}
            savedEdges={state.savedEdges}
          />
        </Suspense>
        <ThemeToggle />
      </>
    );
  }

  // Home page (landing / input screen)
  return (
    <>
      <HomePage
        workflowMode={state.workflowMode}
        isLoading={state.isLoading}
        loadingMessage={state.loadingMessage}
        error={state.error}
        topicInput={state.topicInput}
        onWorkflowModeChange={state.setWorkflowMode}
        onTopicInputChange={state.setTopicInput}
        onTopicSubmit={handlers.handleTopicSubmit}
        onFileUpload={handlers.handleFileUpload}
        onJsonUpload={handlers.handleJsonUpload}
        onLoadExample={handlers.handleLoadExample}
        onSelectMapExample={handlers.handleSelectMapExample}
        onSelectCompareExample={handlers.handleSelectCompareExample}
        onOpenShowcase={() => state.setExperience("pretext")}
        onOpenGallery={() => state.setExperience("gallery")}
        onOpenInterviewStudio={() => state.setExperience("interview")}
        onOpenWikiExplorer={() => state.setShowWikiExplorer(true)}
        showWikiExplorer={state.showWikiExplorer}
        onCloseWikiExplorer={() => state.setShowWikiExplorer(false)}
        onLoadWikiPage={handleLoadWikiPage}
        fileInputRef={state.fileInputRef}
        jsonInputRef={state.jsonInputRef}
      />
      <ThemeToggle />
    </>
  );
}
