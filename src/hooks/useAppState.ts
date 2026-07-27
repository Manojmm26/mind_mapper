import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import { Edge, Node } from "@xyflow/react";
import {
  ComparisonWorkspaceData,
  MindMapData,
  AssessmentStage1Data,
  AssessmentStage2Data,
  StudyRoadmapData,
  AssessmentSelfReportStatus,
  FlashcardDeckData,
} from "../services/llmService";
import { convertTreeToGraph, findRootNode, toFlowGraph } from "../utils/mapData";
import { useMediaQuery } from "./useMediaQuery";
import { useElementFullscreen } from "./useElementFullscreen";

type AppExperience = "classic" | "pretext" | "gallery";
export type { AppExperience };

export type WorkflowMode = "learn" | "compare" | "assess";
export type WorkspaceActiveView = "map" | "outline" | "compare" | "report" | "roadmap" | "flashcards";
export type AssessmentStage = "idle" | "self_report" | "mcq" | "report" | "roadmap" | "reassess" | "flashcards";

function getInitialExperience(): AppExperience {
  if (typeof window === "undefined") {
    return "classic";
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get("experience") === "pretext") return "pretext";
  if (params.get("experience") === "gallery") return "gallery";
  return "classic";
}

function syncExperienceInUrl(experience: AppExperience) {
  if (typeof window === "undefined") {
    return;
  }

  const url = new URL(window.location.href);
  if (experience === "pretext") {
    url.searchParams.set("experience", "pretext");
  } else if (experience === "gallery") {
    url.searchParams.set("experience", "gallery");
  } else {
    url.searchParams.delete("experience");
  }

  window.history.replaceState(null, "", url);
}

export interface AppState {
  // Derived
  isMobile: boolean;
  outlineFullscreen: {
    elementRef: RefObject<HTMLDivElement | null>;
    isFullscreen: boolean;
    isSupported: boolean;
    enterFullscreen: () => Promise<void>;
    exitFullscreen: () => Promise<void>;
    toggleFullscreen: () => Promise<void>;
  };
  workspaceGraph: { nodes: Node[]; edges: Edge[] };
  workspaceRoot: Node | null;

  // Experience
  experience: AppExperience;
  setExperience: Dispatch<SetStateAction<AppExperience>>;

  // Workflow
  workflowMode: WorkflowMode;
  setWorkflowMode: Dispatch<SetStateAction<WorkflowMode>>;
  activeView: WorkspaceActiveView;
  setActiveView: Dispatch<SetStateAction<WorkspaceActiveView>>;

  // Loading
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  loadingMessage: string;
  setLoadingMessage: Dispatch<SetStateAction<string>>;

  // Errors
  error: string;
  setError: Dispatch<SetStateAction<string>>;

  // Map data (AI-generated)
  mapData: MindMapData | null;
  setMapData: Dispatch<SetStateAction<MindMapData | null>>;

  // Comparison data
  comparisonData: ComparisonWorkspaceData | null;
  setComparisonData: Dispatch<SetStateAction<ComparisonWorkspaceData | null>>;

  // Assessment data
  assessmentStage1Data: AssessmentStage1Data | null;
  setAssessmentStage1Data: Dispatch<SetStateAction<AssessmentStage1Data | null>>;
  assessmentStage2Data: AssessmentStage2Data | null;
  setAssessmentStage2Data: Dispatch<SetStateAction<AssessmentStage2Data | null>>;
  reassessmentStage2Data: AssessmentStage2Data | null;
  setReassessmentStage2Data: Dispatch<SetStateAction<AssessmentStage2Data | null>>;
  assessmentStage: AssessmentStage;
  setAssessmentStage: Dispatch<SetStateAction<AssessmentStage>>;
  selfReportAnswers: Record<string, AssessmentSelfReportStatus>;
  setSelfReportAnswers: Dispatch<SetStateAction<Record<string, AssessmentSelfReportStatus>>>;
  mcqAnswers: Record<string, number>;
  setMcqAnswers: Dispatch<SetStateAction<Record<string, number>>>;
  studyRoadmap: StudyRoadmapData | null;
  setStudyRoadmap: Dispatch<SetStateAction<StudyRoadmapData | null>>;
  flashcardDeck: FlashcardDeckData | null;
  setFlashcardDeck: Dispatch<SetStateAction<FlashcardDeckData | null>>;
  nodeAssessmentStatus: Record<string, "mastered" | "review" | "gap">;
  setNodeAssessmentStatus: Dispatch<SetStateAction<Record<string, "mastered" | "review" | "gap">>>;

  // Saved/loaded map data
  savedNodes: Node[] | null;
  setSavedNodes: Dispatch<SetStateAction<Node[] | null>>;
  savedEdges: Edge[] | null;
  setSavedEdges: Dispatch<SetStateAction<Edge[] | null>>;

  // Inputs
  topicInput: string;
  setTopicInput: Dispatch<SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  selectedNodeId: string | null;
  setSelectedNodeId: Dispatch<SetStateAction<string | null>>;

  // Refs
  fileInputRef: RefObject<HTMLInputElement>;
  jsonInputRef: RefObject<HTMLInputElement>;

  // Wiki explorer modal
  showWikiExplorer: boolean;
  setShowWikiExplorer: Dispatch<SetStateAction<boolean>>;

  // Actions
  resetWorkspaceState: () => void;
  handleSelectNode: (nodeId: string | null) => void;
}

export function useAppState(): AppState {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const outlineFullscreen = useElementFullscreen<HTMLDivElement>();

  const [experience, setExperience] = useState<AppExperience>(getInitialExperience);
  const [workflowMode, setWorkflowMode] = useState<WorkflowMode>("learn");
  const [activeView, setActiveView] = useState<WorkspaceActiveView>("map");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [error, setError] = useState("");
  const [mapData, setMapData] = useState<MindMapData | null>(null);
  const [comparisonData, setComparisonData] = useState<ComparisonWorkspaceData | null>(null);

  // Assessment state
  const [assessmentStage1Data, setAssessmentStage1Data] = useState<AssessmentStage1Data | null>(null);
  const [assessmentStage2Data, setAssessmentStage2Data] = useState<AssessmentStage2Data | null>(null);
  const [reassessmentStage2Data, setReassessmentStage2Data] = useState<AssessmentStage2Data | null>(null);
  const [assessmentStage, setAssessmentStage] = useState<AssessmentStage>("idle");
  const [selfReportAnswers, setSelfReportAnswers] = useState<Record<string, AssessmentSelfReportStatus>>({});
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number>>({});
  const [studyRoadmap, setStudyRoadmap] = useState<StudyRoadmapData | null>(null);
  const [flashcardDeck, setFlashcardDeck] = useState<FlashcardDeckData | null>(null);
  const [nodeAssessmentStatus, setNodeAssessmentStatus] = useState<Record<string, "mastered" | "review" | "gap">>({});

  const [savedNodes, setSavedNodes] = useState<Node[] | null>(null);
  const [savedEdges, setSavedEdges] = useState<Edge[] | null>(null);
  const [topicInput, setTopicInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [showWikiExplorer, setShowWikiExplorer] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const jsonInputRef = useRef<HTMLInputElement>(null);

  // Computed: current workspace graph
  const workspaceGraph = useMemo(() => {
    if (savedNodes && savedEdges) {
      return { nodes: savedNodes, edges: savedEdges };
    }

    if (mapData) {
      return toFlowGraph(mapData);
    }

    return { nodes: [] as Node[], edges: [] as Edge[] };
  }, [savedNodes, savedEdges, mapData]);

  // Computed: root node of the current graph
  const workspaceRoot = useMemo(
    () => findRootNode(workspaceGraph.nodes, workspaceGraph.edges),
    [workspaceGraph.edges, workspaceGraph.nodes],
  );

  // Sync experience in URL
  useEffect(() => {
    syncExperienceInUrl(experience);
  }, [experience]);

  // Reset all workspace-related state
  const resetWorkspaceState = () => {
    setMapData(null);
    setComparisonData(null);
    setAssessmentStage1Data(null);
    setAssessmentStage2Data(null);
    setAssessmentStage("idle");
    setSelfReportAnswers({});
    setMcqAnswers({});
    setStudyRoadmap(null);
    setNodeAssessmentStatus({});
    setSavedNodes(null);
    setSavedEdges(null);
    setSelectedNodeId(null);
    setSearchQuery("");
    setTopicInput("");
    setActiveView("map");
    setError("");
  };

  // Handle node selection
  const handleSelectNode = (nodeId: string | null) => {
    setSelectedNodeId(nodeId);
    if (activeView === "compare") {
      setActiveView(isMobile ? "outline" : "map");
    }
  };

  // Clear selection if the graph changes and the selected node no longer exists
  useEffect(() => {
    if (!workspaceGraph.nodes.length) {
      setSelectedNodeId(null);
      return;
    }

    const selectionStillExists =
      selectedNodeId &&
      workspaceGraph.nodes.some((node) => node.id === selectedNodeId);
    if (!selectionStillExists) {
      setSelectedNodeId(workspaceRoot?.id || workspaceGraph.nodes[0].id);
    }
  }, [selectedNodeId, workspaceGraph.nodes, workspaceRoot]);

  // Auto-switch away from compare view if comparison data is cleared
  useEffect(() => {
    if (activeView === "compare" && !comparisonData) {
      setActiveView("map");
    }
  }, [activeView, comparisonData]);

  return {
    isMobile,
    outlineFullscreen,
    workspaceGraph,
    workspaceRoot,
    experience,
    setExperience,
    workflowMode,
    setWorkflowMode,
    activeView,
    setActiveView,
    isLoading,
    setIsLoading,
    loadingMessage,
    setLoadingMessage,
    error,
    setError,
    mapData,
    setMapData,
    comparisonData,
    setComparisonData,
    assessmentStage1Data,
    setAssessmentStage1Data,
    assessmentStage2Data,
    setAssessmentStage2Data,
    reassessmentStage2Data,
    setReassessmentStage2Data,
    assessmentStage,
    setAssessmentStage,
    selfReportAnswers,
    setSelfReportAnswers,
    mcqAnswers,
    setMcqAnswers,
    studyRoadmap,
    setStudyRoadmap,
    flashcardDeck,
    setFlashcardDeck,
    nodeAssessmentStatus,
    setNodeAssessmentStatus,
    savedNodes,
    setSavedNodes,
    savedEdges,
    setSavedEdges,
    topicInput,
    setTopicInput,
    searchQuery,
    setSearchQuery,
    selectedNodeId,
    setSelectedNodeId,
    fileInputRef,
    jsonInputRef,
    showWikiExplorer,
    setShowWikiExplorer,
    resetWorkspaceState,
    handleSelectNode,
  };
}

