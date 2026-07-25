import React, { Suspense, lazy, useCallback } from "react";
import { HomePage } from "./components/HomePage";
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

const WorkspaceViewComponent = lazy(() =>
  import("./components/WorkspaceView").then((module) => ({
    default: module.WorkspaceViewComponent,
  })),
);

function FullScreenLoadingMessage({ message }: { message: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950/95 px-6 text-center text-sm font-semibold text-slate-100">
      {message}
    </div>
  );
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

      state.setSavedNodes(nodes);
      state.setSavedEdges(edges);
      state.setMapData({ nodes: [], edges: [] });
      state.setWorkflowMode("learn");
      state.setActiveView("map");
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
    workflowMode: state.workflowMode,
    comparisonData: state.comparisonData,
    topicInput: state.topicInput,
    fileInputRef: state.fileInputRef,
    jsonInputRef: state.jsonInputRef,
    wiki,
    resetWorkspaceState: state.resetWorkspaceState,
  });

  // Pretext showcase experience
  if (state.experience === "pretext") {
    return (
      <Suspense fallback={<FullScreenLoadingMessage message="Loading showcase…" />}>
        <PretextShowcase onExit={() => state.setExperience("classic")} />
      </Suspense>
    );
  }

  // Gallery page experience
  if (state.experience === "gallery") {
    return (
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
    );
  }

  // Workspace view (when a map is loaded)
  if (state.workspaceGraph.nodes.length > 0) {
    return (
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
    );
  }

  // Home page (landing / input screen)
  return (
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
      onOpenWikiExplorer={() => state.setShowWikiExplorer(true)}
      showWikiExplorer={state.showWikiExplorer}
      onCloseWikiExplorer={() => state.setShowWikiExplorer(false)}
      onLoadWikiPage={handleLoadWikiPage}
      fileInputRef={state.fileInputRef}
      jsonInputRef={state.jsonInputRef}
    />
  );
}
