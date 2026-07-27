import React from "react";
import { Edge, Node } from "@xyflow/react";
import {
  ArrowLeft,
  Download,
  GraduationCap,
  Maximize2,
  Minimize2,
  Scale,
  Sparkles,
  Target,
  Rocket,
  Award,
} from "lucide-react";
import { ComparisonWorkspace } from "./ComparisonWorkspace";
import { Map } from "./Map";
import { MobileMapView } from "./MobileMapView";
import { WorkspaceInspector } from "./WorkspaceInspector";
import { WorkspaceSidebar, WorkspaceView } from "./WorkspaceSidebar";
import { ModelSelector } from "./ModelSelector";
import {
  ComparisonWorkspaceData,
  MindMapData,
  AssessmentStage1Data,
  AssessmentStage2Data,
  StudyRoadmapData,
  AssessmentSelfReportStatus,
  FlashcardDeckData,
  Flashcard,
} from "../services/llmService";
import { AssessmentWorkspace } from "./Assessment/AssessmentWorkspace";
import { StudyRoadmapView } from "./Assessment/StudyRoadmapView";
import {
  WorkflowMode,
  WorkspaceActiveView,
  AssessmentStage,
} from "../hooks/useAppState";

export interface WorkspaceViewComponentProps {
  isMobile: boolean;
  outlineFullscreen: {
    elementRef: React.RefObject<HTMLDivElement | null>;
    isFullscreen: boolean;
    isSupported: boolean;
    toggleFullscreen: () => void;
  };
  workspaceGraph: { nodes: Node[]; edges: Edge[] };
  workspaceRoot: Node | null;
  workflowMode: WorkflowMode;
  activeView: WorkspaceActiveView;
  setActiveView: (view: WorkspaceActiveView) => void;
  comparisonData: ComparisonWorkspaceData | null;
  assessmentStage: AssessmentStage;
  assessmentStage1Data: AssessmentStage1Data | null;
  assessmentStage2Data: AssessmentStage2Data | null;
  reassessmentStage2Data?: AssessmentStage2Data | null;
  selfReportAnswers: Record<string, AssessmentSelfReportStatus>;
  mcqAnswers: Record<string, number>;
  studyRoadmap: StudyRoadmapData | null;
  flashcardDeck?: FlashcardDeckData | null;
  isLoading?: boolean;
  onSelfReportSubmit: (answers: Record<string, AssessmentSelfReportStatus>) => void;
  onMcqSubmit: (answers: Record<string, number>) => void;
  onReassessmentChecklistSubmit?: (selectedConceptIds: string[]) => void;
  onReassessmentMcqSubmit?: (answers: Record<string, number>) => void;
  onRateFlashcard?: (card: Flashcard, rating: "easy" | "good" | "hard") => void;
  onGenerateStudyRoadmap: () => void;
  onStartAssessmentFromMap: () => void;
  onStartReassessment?: () => void;
  onStartFlashcards?: (targetConceptIds?: string[]) => void;
  onExportReport?: () => void;
  selectedNodeId: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSelectNode: (nodeId: string | null) => void;
  handleSaveMap: (nodes: Node[], edges: Edge[]) => void;
  resetWorkspaceState: () => void;
  setExperience: (exp: "classic" | "pretext") => void;
  mapData: MindMapData | null;
  savedNodes: Node[] | null;
  savedEdges: Edge[] | null;
}

export function WorkspaceViewComponent({
  isMobile,
  outlineFullscreen,
  workspaceGraph,
  workspaceRoot,
  workflowMode,
  activeView,
  setActiveView,
  comparisonData,
  assessmentStage,
  assessmentStage1Data,
  assessmentStage2Data,
  reassessmentStage2Data = null,
  selfReportAnswers,
  mcqAnswers,
  studyRoadmap,
  flashcardDeck = null,
  isLoading = false,
  onSelfReportSubmit,
  onMcqSubmit,
  onReassessmentChecklistSubmit = () => {},
  onReassessmentMcqSubmit = () => {},
  onRateFlashcard = () => {},
  onGenerateStudyRoadmap,
  onStartAssessmentFromMap,
  onStartReassessment = () => {},
  onStartFlashcards = () => {},
  onExportReport = () => {},
  selectedNodeId,
  searchQuery,
  setSearchQuery,
  handleSelectNode,
  handleSaveMap,
  resetWorkspaceState,
  setExperience,
  mapData,
  savedNodes,
  savedEdges,
}: WorkspaceViewComponentProps) {
  const renderContent = () => {
    if (activeView === "compare" && comparisonData) {
      return <ComparisonWorkspace data={comparisonData} />;
    }

    if (activeView === "roadmap" && studyRoadmap) {
      return <StudyRoadmapView roadmap={studyRoadmap} />;
    }

    if (
      activeView === "report" ||
      (workflowMode === "assess" &&
        activeView !== "map" &&
        activeView !== "outline" &&
        activeView !== "roadmap")
    ) {
      return (
        <AssessmentWorkspace
          stage={assessmentStage}
          stage1Data={assessmentStage1Data}
          stage2Data={assessmentStage2Data}
          reassessmentStage2Data={reassessmentStage2Data}
          selfReportAnswers={selfReportAnswers}
          mcqAnswers={mcqAnswers}
          studyRoadmap={studyRoadmap}
          flashcardDeck={flashcardDeck}
          isLoading={isLoading}
          onSelfReportSubmit={onSelfReportSubmit}
          onMcqSubmit={onMcqSubmit}
          onReassessmentChecklistSubmit={onReassessmentChecklistSubmit}
          onReassessmentMcqSubmit={onReassessmentMcqSubmit}
          onRateFlashcard={onRateFlashcard}
          onViewMap={() => setActiveView("map")}
          onGenerateRoadmap={onGenerateStudyRoadmap}
          onStartReassessment={onStartReassessment}
          onStartFlashcards={onStartFlashcards}
          onExportReport={onExportReport}
        />
      );
    }

    if (activeView === "outline") {
      return (
        <div
          ref={outlineFullscreen.elementRef}
          className={`workspace-surface relative h-full overflow-hidden border border-white/60 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-5 ${
            outlineFullscreen.isFullscreen ? "rounded-none" : "rounded-[32px]"
          }`}
        >
          {outlineFullscreen.isSupported && (
            <button
              type="button"
              onClick={() => outlineFullscreen.toggleFullscreen()}
              className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/88 px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-xl transition-colors hover:bg-white"
            >
              {outlineFullscreen.isFullscreen ? (
                <Minimize2 size={14} />
              ) : (
                <Maximize2 size={14} />
              )}
              {outlineFullscreen.isFullscreen
                ? "Exit full screen"
                : "Full screen"}
            </button>
          )}
          <div className="mb-4 rounded-[24px] border border-slate-200 bg-white/80 p-4">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
              Structured outline
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Browse the map as an expandable tree when you want faster scanning
              than the canvas.
            </p>
          </div>
          <MobileMapView
            nodes={workspaceGraph.nodes}
            edges={workspaceGraph.edges}
            selectedNodeId={selectedNodeId}
            onSelectNode={handleSelectNode}
          />
        </div>
      );
    }

    if (isMobile) {
      return (
        <div className="workspace-surface h-full overflow-hidden rounded-[32px] border border-white/60 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-5">
          <div className="mb-4 rounded-[24px] bg-[linear-gradient(135deg,rgba(10,132,255,0.1),rgba(255,159,10,0.12))] p-4">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
              Mobile workspace
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Mobile stays outline-first for speed and legibility. Use the
              sidebar tabs to switch between map context and the decision board.
            </p>
          </div>
          <MobileMapView
            nodes={workspaceGraph.nodes}
            edges={workspaceGraph.edges}
            selectedNodeId={selectedNodeId}
            onSelectNode={handleSelectNode}
          />
        </div>
      );
    }

    return (
      <div className="workspace-surface h-full overflow-hidden rounded-[32px] border border-white/60 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
        <Map
          data={mapData}
          initialNodes={savedNodes || undefined}
          initialEdges={savedEdges || undefined}
          onSave={handleSaveMap}
          selectedNodeId={selectedNodeId}
          onSelectNode={handleSelectNode}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(191,219,254,0.35),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(253,224,71,0.25),transparent_24%),linear-gradient(180deg,#eef4ff_0%,#f8fafc_52%,#f5f7fb_100%)] p-4 md:p-6">
      <div className="mx-auto max-w-[1720px] space-y-4">
        <header className="workspace-surface rounded-[32px] border border-white/70 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-start gap-3">
              <button
                onClick={resetWorkspaceState}
                className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50"
                aria-label="Back to start"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
                  {workflowMode === "assess" ? (
                    <Target size={12} />
                  ) : workflowMode === "compare" ? (
                    <Scale size={12} />
                  ) : (
                    <GraduationCap size={12} />
                  )}
                  {workflowMode === "assess"
                    ? "Diagnostic assessment workspace"
                    : workflowMode === "compare"
                    ? "Decision workspace"
                    : "Learning workspace"}
                </div>
                <h1 className="mt-3 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                  {String(
                    assessmentStage1Data?.topic ||
                      workspaceRoot?.data?.label ||
                      (workflowMode === "assess"
                        ? "Diagnostic assessment"
                        : workflowMode === "compare"
                        ? "Comparison workspace"
                        : "Mind map"),
                  )}
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                  {assessmentStage1Data?.overview ||
                    comparisonData?.overview ||
                    String(
                      workspaceRoot?.data?.description ||
                        "Explore the map, inspect deeper branches, and move between canvas, outline, and decision layers.",
                    )}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <ModelSelector />

              {/* Test Knowledge CTA when in Learn Mode */}
              {workflowMode === "learn" && workspaceGraph.nodes.length > 0 && (
                <button
                  type="button"
                  onClick={onStartAssessmentFromMap}
                  className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-amber-600 hover:scale-105"
                >
                  <Target size={16} />
                  Test My Knowledge
                </button>
              )}

              <button
                type="button"
                onClick={() => setExperience("pretext")}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                <Sparkles size={16} />
                Pretext demo
              </button>

              {assessmentStage1Data && (
                <button
                  type="button"
                  onClick={() => setActiveView("report")}
                  className={`inline-flex items-center gap-1.5 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    activeView === "report"
                      ? "bg-slate-950 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Award size={16} />
                  Report
                </button>
              )}

              {studyRoadmap && (
                <button
                  type="button"
                  onClick={() => setActiveView("roadmap")}
                  className={`inline-flex items-center gap-1.5 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    activeView === "roadmap"
                      ? "bg-slate-950 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Rocket size={16} />
                  Action Plan
                </button>
              )}

              <button
                type="button"
                onClick={() => setActiveView("map")}
                className={`rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  activeView === "map"
                    ? "bg-slate-950 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                Map
              </button>

              <button
                type="button"
                onClick={() => setActiveView("outline")}
                className={`rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  activeView === "outline"
                    ? "bg-slate-950 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                Outline
              </button>

              {comparisonData && (
                <button
                  type="button"
                  onClick={() => setActiveView("compare")}
                  className={`rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    activeView === "compare"
                      ? "bg-slate-950 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Compare
                </button>
              )}

              <button
                type="button"
                onClick={() =>
                  handleSaveMap(workspaceGraph.nodes, workspaceGraph.edges)
                }
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-700"
              >
                <Download size={16} />
                Export
              </button>
            </div>
          </div>
        </header>

        <div className="grid gap-4 xl:grid-cols-[320px_minmax(0,1fr)_340px]">
          <div className="xl:h-[calc(100vh-190px)]">
            <WorkspaceSidebar
              workflowMode={workflowMode}
              nodes={workspaceGraph.nodes}
              edges={workspaceGraph.edges}
              comparisonData={comparisonData}
              selectedNodeId={selectedNodeId}
              searchQuery={searchQuery}
              onSearchQueryChange={setSearchQuery}
              activeView={activeView as WorkspaceView}
              onChangeView={(v) => setActiveView(v as WorkspaceActiveView)}
              onSelectNode={handleSelectNode}
              compact={isMobile}
            />
          </div>

          <div className="min-h-[560px] xl:h-[calc(100vh-190px)]">
            {renderContent()}
          </div>

          <div className="xl:h-[calc(100vh-190px)]">
            <WorkspaceInspector
              nodes={workspaceGraph.nodes}
              edges={workspaceGraph.edges}
              selectedNodeId={selectedNodeId}
              comparisonData={comparisonData}
              onSelectNode={handleSelectNode}
              onStartFlashcards={onStartFlashcards}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

