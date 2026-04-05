import React, { useCallback } from "react";
import { PretextShowcase } from "./components/PretextShowcase";
import { HomePage } from "./components/HomePage";
import { WorkspaceViewComponent } from "./components/WorkspaceView";
import { useAppState } from "./hooks/useAppState";
import { useAppHandlers } from "./hooks/useAppHandlers";
import { useWiki } from "./hooks/useWiki";
import { WikiPage } from "./config/wikiSchema";
import { Node, Edge } from "@xyflow/react";

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
    return <PretextShowcase onExit={() => state.setExperience("classic")} />;
  }

  // Workspace view (when a map is loaded)
  if (state.workspaceGraph.nodes.length > 0) {
    return (
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
      onOpenShowcase={() => state.setExperience("pretext")}
      onOpenWikiExplorer={() => state.setShowWikiExplorer(true)}
      showWikiExplorer={state.showWikiExplorer}
      onCloseWikiExplorer={() => state.setShowWikiExplorer(false)}
      onLoadWikiPage={handleLoadWikiPage}
      fileInputRef={state.fileInputRef}
      jsonInputRef={state.jsonInputRef}
    />
  );
}
