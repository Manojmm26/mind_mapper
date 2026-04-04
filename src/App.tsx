import React, { useEffect, useMemo, useRef, useState } from "react";
import { Edge, Node } from "@xyflow/react";
import {
  ArrowLeft,
  BrainCircuit,
  Download,
  FileJson,
  GraduationCap,
  Loader2,
  Maximize2,
  Minimize2,
  Play,
  Scale,
  Send,
  Sparkles,
  Upload,
} from "lucide-react";
import { ComparisonWorkspace } from "./components/ComparisonWorkspace";
import { Map } from "./components/Map";
import { MobileMapView } from "./components/MobileMapView";
import { PretextShowcase } from "./components/PretextShowcase";
import { WorkspaceInspector } from "./components/WorkspaceInspector";
import { WorkspaceSidebar, WorkspaceView } from "./components/WorkspaceSidebar";
import { EXAMPLE_MAP } from "./exampleData";
import { useElementFullscreen } from "./hooks/useElementFullscreen";
import { useMediaQuery } from "./hooks/useMediaQuery";
import {
  ComparisonWorkspaceData,
  generateComparisonWorkspaceFromTopic,
  generateMindMap,
  generateMindMapFromTopic,
  MindMapData,
} from "./services/llmService";
import { normalizeComparisonData } from "./utils/comparisonHelpers";
import { extractTextFromFile } from "./services/pdfService";
import { convertTreeToGraph, findRootNode, toFlowGraph } from "./utils/mapData";

type AppExperience = "classic" | "pretext";

function getInitialExperience(): AppExperience {
  if (typeof window === "undefined") {
    return "classic";
  }

  const params = new URLSearchParams(window.location.search);
  return params.get("experience") === "pretext" ? "pretext" : "classic";
}

function syncExperienceInUrl(experience: AppExperience) {
  if (typeof window === "undefined") {
    return;
  }

  const url = new URL(window.location.href);
  if (experience === "pretext") {
    url.searchParams.set("experience", "pretext");
  } else {
    url.searchParams.delete("experience");
  }

  window.history.replaceState(null, "", url);
}

export default function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const outlineFullscreen = useElementFullscreen<HTMLDivElement>();
  const [experience, setExperience] =
    useState<AppExperience>(getInitialExperience);
  const [workflowMode, setWorkflowMode] = useState<"learn" | "compare">(
    "learn",
  );
  const [activeView, setActiveView] = useState<WorkspaceView>("map");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [mapData, setMapData] = useState<MindMapData | null>(null);
  const [comparisonData, setComparisonData] =
    useState<ComparisonWorkspaceData | null>(null);
  const [savedNodes, setSavedNodes] = useState<Node[] | null>(null);
  const [savedEdges, setSavedEdges] = useState<Edge[] | null>(null);
  const [topicInput, setTopicInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const jsonInputRef = useRef<HTMLInputElement>(null);

  const workspaceGraph = useMemo(() => {
    if (savedNodes && savedEdges) {
      return { nodes: savedNodes, edges: savedEdges };
    }

    if (mapData) {
      return toFlowGraph(mapData);
    }

    return { nodes: [] as Node[], edges: [] as Edge[] };
  }, [savedNodes, savedEdges, mapData]);

  const workspaceRoot = useMemo(
    () => findRootNode(workspaceGraph.nodes, workspaceGraph.edges),
    [workspaceGraph.edges, workspaceGraph.nodes],
  );

  useEffect(() => {
    syncExperienceInUrl(experience);
  }, [experience]);

  const resetWorkspaceState = () => {
    setMapData(null);
    setComparisonData(null);
    setSavedNodes(null);
    setSavedEdges(null);
    setSelectedNodeId(null);
    setSearchQuery("");
    setTopicInput("");
    setActiveView("map");
    setError(null);
  };

  const handleSelectNode = (nodeId: string | null) => {
    setSelectedNodeId(nodeId);
    if (activeView === "compare") {
      setActiveView(isMobile ? "outline" : "map");
    }
  };

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

  useEffect(() => {
    if (activeView === "compare" && !comparisonData) {
      setActiveView("map");
    }
  }, [activeView, comparisonData]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    setIsLoading(true);
    setLoadingMessage("Analyzing document...");
    setError(null);
    resetWorkspaceState();

    try {
      const text = await extractTextFromFile(file);

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
        // Fall through to LLM processing.
      }

      setLoadingMessage("AI is building your mind map...");
      const data = await generateMindMap(text);
      setMapData(data);
      setWorkflowMode("learn");
      setActiveView("map");
    } catch (err: any) {
      setError(err.message || "An error occurred while processing the file.");
    } finally {
      setIsLoading(false);
      setLoadingMessage("");
      e.target.value = "";
    }
  };

  const handleTopicSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const topic = topicInput.trim();
    if (!topic) {
      return;
    }

    setIsLoading(true);
    setLoadingMessage(`Researching "${topic}"...`);
    setError(null);
    setSelectedNodeId(null);
    setSearchQuery("");
    setMapData(null);
    setComparisonData(null);
    setSavedNodes(null);
    setSavedEdges(null);

    try {
      if (workflowMode === "compare") {
        setLoadingMessage(`Comparing options for "${topic}"...`);
        const raw = await generateComparisonWorkspaceFromTopic(topic);
        const data = normalizeComparisonData(raw);
        setComparisonData(data);
        setMapData(data.map ?? { nodes: [], edges: [] });
        setActiveView("compare");
      } else {
        const data = await generateMindMapFromTopic(topic);
        setMapData(data);
        setActiveView("map");
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
  };

  const handleJsonUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        setError(null);
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
  };

  const handleSaveMap = (nodes: Node[], edges: Edge[]) => {
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
  };

  const handleLoadExample = () => {
    const exampleGraph = toFlowGraph(EXAMPLE_MAP.data);
    setSavedNodes(exampleGraph.nodes);
    setSavedEdges(exampleGraph.edges);
    setComparisonData(null);
    setWorkflowMode("learn");
    setMapData({ nodes: [], edges: [] });
    setActiveView("map");
    setError(null);
    setSearchQuery("");
    setSelectedNodeId(null);
  };

  const renderWorkspaceContent = () => {
    if (activeView === "compare" && comparisonData) {
      return <ComparisonWorkspace data={comparisonData} />;
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

  if (experience === "pretext") {
    return <PretextShowcase onExit={() => setExperience("classic")} />;
  }

  if (workspaceGraph.nodes.length > 0) {
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
                    {workflowMode === "compare" ? (
                      <Scale size={12} />
                    ) : (
                      <GraduationCap size={12} />
                    )}
                    {workflowMode === "compare"
                      ? "Decision workspace"
                      : "Learning workspace"}
                  </div>
                  <h1 className="mt-3 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                    {String(
                      workspaceRoot?.data?.label ||
                        (workflowMode === "compare"
                          ? "Comparison workspace"
                          : "Mind map"),
                    )}
                  </h1>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                    {comparisonData?.overview ||
                      String(
                        workspaceRoot?.data?.description ||
                          "Explore the map, inspect deeper branches, and move between canvas, outline, and decision layers.",
                      )}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setExperience("pretext")}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <Sparkles size={16} />
                  Pretext demo
                </button>
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
                activeView={activeView}
                onChangeView={setActiveView}
                onSelectNode={handleSelectNode}
                compact={isMobile}
              />
            </div>

            <div className="min-h-[560px] xl:h-[calc(100vh-190px)]">
              {renderWorkspaceContent()}
            </div>

            <div className="xl:h-[calc(100vh-190px)]">
              <WorkspaceInspector
                nodes={workspaceGraph.nodes}
                edges={workspaceGraph.edges}
                selectedNodeId={selectedNodeId}
                comparisonData={comparisonData}
                onSelectNode={handleSelectNode}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.26),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(253,186,116,0.28),transparent_25%),linear-gradient(180deg,#eef6ff_0%,#f8fafc_45%,#fffdf8_100%)] animate-theme-shift flex flex-col items-center justify-center overflow-hidden p-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_58%_at_50%_0%,#000_60%,transparent_100%)] opacity-60" />
      <div className="absolute left-[-10%] top-[-18%] h-[42rem] w-[42rem] rounded-full bg-cyan-200/35 blur-[140px]" />
      <div className="absolute bottom-[-20%] right-[-8%] h-[36rem] w-[36rem] rounded-full bg-amber-200/30 blur-[120px]" />

      <div className="relative z-10 w-full max-w-xl rounded-[34px] border border-white/80 bg-white/76 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:p-10">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="relative mx-auto mb-6 h-24 w-24">
              <div className="theme-accent-bg absolute inset-0 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="theme-accent-bg theme-accent-glow relative flex h-full w-full items-center justify-center overflow-hidden rounded-[28px] border border-white/30 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-transparent" />
                <BrainCircuit size={48} className="relative z-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-950">
              AI Mind{" "}
              <span className="theme-accent-text transition-colors duration-1000">
                Mapper
              </span>
            </h1>
            <p className="mx-auto max-w-sm text-sm leading-6 text-slate-600">
              {workflowMode === "compare"
                ? "Build a decision board, linked map, and action path in one workspace."
                : "Generate a layered mind map with outline, inspection, and map views from one prompt or source."}
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(14,165,233,0.08),rgba(251,146,60,0.08))] p-5 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-700">
                  New portfolio demo
                </p>
                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-950">
                  Pretext Mind Map Builder
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                  A canvas-first showcase with DOM-free text layout,
                  variable-size node cards, and AI-generated maps.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setExperience("pretext")}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                <Sparkles size={16} />
                Open showcase
              </button>
            </div>
          </div>

          {error && (
            <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setWorkflowMode("learn")}
              disabled={isLoading}
              className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                workflowMode === "learn"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <GraduationCap size={16} />
              Learn
            </button>
            <button
              type="button"
              onClick={() => setWorkflowMode("compare")}
              disabled={isLoading}
              className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                workflowMode === "compare"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Scale size={16} />
              Compare
            </button>
          </div>

          <form onSubmit={handleTopicSubmit} className="space-y-4">
            <div className="group relative">
              <div className="theme-accent-bg absolute -inset-0.5 rounded-2xl blur opacity-10 transition-all duration-1000 group-hover:opacity-20" />
              <div className="relative flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm focus-within:theme-accent-border transition-all duration-1000">
                <div className="pl-5 pr-3 text-cyan-600">
                  <Sparkles
                    size={20}
                    className={isLoading ? "animate-pulse" : ""}
                  />
                </div>
                <input
                  type="text"
                  value={topicInput}
                  onChange={(event) => setTopicInput(event.target.value)}
                  placeholder={
                    workflowMode === "compare"
                      ? "Compare any product, tool, or topic..."
                      : "Visualize any concept..."
                  }
                  disabled={isLoading}
                  className="w-full bg-transparent py-5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !topicInput.trim()}
                  className="theme-accent-bg mr-3 rounded-xl p-3 text-white shadow-md transition-all hover:opacity-90 disabled:opacity-30"
                >
                  {isLoading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                </button>
              </div>
            </div>

            {isLoading && loadingMessage && (
              <div className="theme-accent-text flex items-center justify-center gap-2 text-sm font-semibold animate-pulse">
                <span>{loadingMessage}</span>
              </div>
            )}

            <p className="text-center text-xs leading-5 text-slate-500">
              {workflowMode === "compare"
                ? "Comparison mode builds a decision board, matched options, next steps, and a linked knowledge map."
                : "Learning mode builds a layered workspace with map, outline, and node inspection."}
            </p>
          </form>

          <div className="space-y-6">
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-slate-200" />
              <span className="mx-4 flex-shrink-0 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Or Process Data
              </span>
              <div className="flex-grow border-t border-slate-200" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-6 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-cyan-500/30 hover:bg-white hover:text-cyan-600 hover:shadow-md disabled:opacity-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm transition-colors group-hover:bg-cyan-50">
                  <Upload
                    size={22}
                    className="text-slate-400 group-hover:text-cyan-600"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <span>Document</span>
                  <span className="text-[9px] uppercase tracking-tighter text-slate-500">
                    PDF, TXT, MD
                  </span>
                </div>
              </button>

              <button
                onClick={() => jsonInputRef.current?.click()}
                disabled={isLoading}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-6 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-orange-500/30 hover:bg-white hover:text-orange-600 hover:shadow-md disabled:opacity-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm transition-colors group-hover:bg-orange-50">
                  <FileJson
                    size={22}
                    className="text-slate-400 group-hover:text-orange-600"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <span>Saved Map</span>
                  <span className="text-[9px] uppercase tracking-tighter text-slate-500">
                    JSON
                  </span>
                </div>
              </button>
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".pdf,.txt,.md"
              className="hidden"
            />
            <input
              type="file"
              ref={jsonInputRef}
              onChange={handleJsonUpload}
              accept=".json"
              className="hidden"
            />

            <button
              onClick={handleLoadExample}
              disabled={isLoading}
              className="group relative w-full rounded-2xl bg-slate-200/50 p-[2px] transition-all duration-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-orange-400"
            >
              <div className="flex w-full items-center justify-center gap-3 rounded-[14px] bg-white py-4 transition-colors group-hover:bg-white">
                <Play
                  size={16}
                  className="text-cyan-600 transition-transform group-hover:scale-125"
                />
                <span className="text-sm font-bold text-slate-700">
                  Example:{" "}
                  <span className="font-extrabold text-orange-600">
                    {EXAMPLE_MAP.name}
                  </span>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
