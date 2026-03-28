import React, { useState, useRef } from 'react';
import { extractTextFromFile } from './services/pdfService';
import {
  ComparisonWorkspaceData,
  generateComparisonWorkspaceFromTopic,
  generateMindMap,
  generateMindMapFromTopic,
  MindMapData
} from './services/llmService';
import { Map } from './components/Map';
import { Upload, FileJson, Loader2, BrainCircuit, Play, Sparkles, Send, Scale, GraduationCap } from 'lucide-react';
import { Node, Edge } from '@xyflow/react';
import { EXAMPLE_MAP } from './exampleData';
import { MobileMapView } from './components/MobileMapView';
import { useMediaQuery } from './hooks/useMediaQuery';
import { ComparisonWorkspace } from './components/ComparisonWorkspace';

function convertTreeToGraph(tree: any): { nodes: Node[], edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  let idCounter = 0;

  function traverse(node: any, parentId: string | null) {
    const currentId = `node_${idCounter++}`;
    nodes.push({
      id: currentId,
      type: 'custom',
      position: { x: 0, y: 0 },
      data: {
        label: node.name || node.label || 'Untitled',
        description: node.description || '',
      }
    });

    if (parentId) {
      edges.push({
        id: `${parentId}-${currentId}`,
        source: parentId,
        target: currentId,
        type: 'smoothstep',
        animated: true,
      });
    }

    if (node.children && Array.isArray(node.children)) {
      node.children.forEach((child: any) => {
        traverse(child, currentId);
      });
    }
  }

  traverse(tree, null);
  return { nodes, edges };
}

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [workflowMode, setWorkflowMode] = useState<'learn' | 'compare'>('learn');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [mapData, setMapData] = useState<MindMapData | null>(null);
  const [comparisonData, setComparisonData] = useState<ComparisonWorkspaceData | null>(null);
  const [savedNodes, setSavedNodes] = useState<Node[] | null>(null);
  const [savedEdges, setSavedEdges] = useState<Edge[] | null>(null);
  const [topicInput, setTopicInput] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const jsonInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setLoadingMessage('Analyzing document...');
    setError(null);
    setMapData(null);
    setComparisonData(null);
    setSavedNodes(null);
    setSavedEdges(null);

    try {
      const text = await extractTextFromFile(file);
      
      // Quick check: if the user uploaded a JSON file disguised as a TXT, 
      // try to parse it directly instead of sending it to the LLM to avoid losing details.
      try {
        const json = JSON.parse(text);
        if (json.nodes && json.edges) {
          if (json.comparisonData) {
            setComparisonData({
              ...json.comparisonData,
              map: { nodes: [], edges: [] } // Just placeholder
            });
          } else {
            setComparisonData(null);
          }
          setSavedNodes(json.nodes);
          setSavedEdges(json.edges);
          setMapData({ nodes: [], edges: [] });
          setIsLoading(false);
          return;
        } else if (json.name || json.children) {
          const { nodes, edges } = convertTreeToGraph(json);
          setSavedNodes(nodes);
          setSavedEdges(edges);
          setMapData({ nodes: [], edges: [] });
          setIsLoading(false);
          return;
        }
      } catch (e) {
        // Not a JSON file, proceed to LLM
      }

      setLoadingMessage('AI is building your mind map...');
      const data = await generateMindMap(text);
      setMapData(data);
    } catch (err: any) {
      setError(err.message || "An error occurred while processing the file.");
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  };

  const handleTopicSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const topic = topicInput.trim();
    if (!topic) return;

    setIsLoading(true);
    setLoadingMessage(`Researching "${topic}"...`);
    setError(null);
    setMapData(null);
    setComparisonData(null);
    setSavedNodes(null);
    setSavedEdges(null);

    try {
      if (workflowMode === 'compare') {
        setLoadingMessage(`Comparing options for "${topic}"...`);
        const data = await generateComparisonWorkspaceFromTopic(topic);
        setComparisonData(data);
        setMapData(data.map);
      } else {
        const data = await generateMindMapFromTopic(topic);
        setMapData(data);
      }
    } catch (err: any) {
      setError(err.message || `An error occurred while generating the ${workflowMode === 'compare' ? 'comparison workspace' : 'mind map'}.`);
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  };

  const handleJsonUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.nodes && json.edges) {
          if (json.comparisonData) {
            setComparisonData({
              ...json.comparisonData,
              map: { nodes: [], edges: [] } // Just placeholder
            });
          } else {
            setComparisonData(null);
          }
          setSavedNodes(json.nodes);
          setSavedEdges(json.edges);
          setMapData({ nodes: [], edges: [] }); // Trigger map render
        } else if (json.name || json.children) {
          const { nodes, edges } = convertTreeToGraph(json);
          setSavedNodes(nodes);
          setSavedEdges(edges);
          setComparisonData(null);
          setMapData({ nodes: [], edges: [] }); // Trigger map render
        } else {
          setError("Invalid JSON format. Expected nodes/edges or a hierarchical tree.");
        }
      } catch (err) {
        setError("Failed to parse JSON file.");
      }
    };
    reader.readAsText(file);
  };

  const handleSaveMap = (nodes: Node[], edges: Edge[]) => {
    // If we're in comparison mode, we include the comparison workspace metadata
    const exportData: any = { nodes, edges };
    
    if (comparisonData) {
      // Exclude the map property from comparisonData as we're saving nodes/edges separately
      const { map, ...rest } = comparisonData;
      exportData.comparisonData = rest;
    }

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = comparisonData ? 'comparison-workspace.json' : 'mindmap.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleLoadExample = () => {
    setSavedNodes((EXAMPLE_MAP.data as any).nodes);
    setSavedEdges((EXAMPLE_MAP.data as any).edges);
    setComparisonData(null);
    setMapData({ nodes: [], edges: [] }); 
  };

  if (mapData || savedNodes) {
    const nodesToRender = savedNodes || mapData?.nodes || [];
    const edgesToRender = savedEdges || mapData?.edges || [];

    return (
      <div className="w-screen h-screen relative pt-14 md:pt-0">
        {comparisonData ? (
          <ComparisonWorkspace data={comparisonData} isMobile={isMobile} onSave={handleSaveMap} />
        ) : isMobile ? (
          <MobileMapView nodes={nodesToRender} edges={edgesToRender} />
        ) : (
          <Map 
            data={mapData} 
            initialNodes={savedNodes || undefined}
            initialEdges={savedEdges || undefined}
            onSave={handleSaveMap} 
          />
        )}

        {!comparisonData && isMobile && (
          <button
            onClick={() => handleSaveMap(nodesToRender, edgesToRender)}
            className="absolute top-4 right-4 z-20 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm border border-indigo-500 hover:bg-indigo-700 text-sm font-medium transition-colors"
          >
            Save Map
          </button>
        )}

        <button 
          onClick={() => {
            setMapData(null);
            setComparisonData(null);
            setSavedNodes(null);
            setSavedEdges(null);
            setTopicInput('');
          }}
          className="absolute top-4 left-4 z-10 px-4 py-2 bg-white text-slate-700 rounded-md shadow-sm border border-slate-200 hover:bg-slate-50 font-medium text-sm transition-colors"
        >
          Back to Upload
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden animate-theme-shift">
      {/* Subtle Grid Background for Light Theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-orange-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white p-8 sm:p-10 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 theme-accent-bg rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-full h-full theme-accent-bg theme-accent-glow rounded-3xl flex items-center justify-center shadow-md transform transition-all hover:scale-105 duration-500 border border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
              <BrainCircuit size={48} className="text-white relative z-10" />
            </div>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">
            AI Mind <span className="theme-accent-text transition-colors duration-1000">Mapper</span>
          </h1>
          <p className="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
            {workflowMode === 'compare'
              ? 'Compare options with a decision-focused workspace and a linked mind map.'
              : 'Generate high-fidelity mind maps from your ideas and documents in seconds.'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-100 backdrop-blur-md">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setWorkflowMode('learn')}
            disabled={isLoading}
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
              workflowMode === 'learn'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <GraduationCap size={16} />
            Learn
          </button>
          <button
            type="button"
            onClick={() => setWorkflowMode('compare')}
            disabled={isLoading}
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
              workflowMode === 'compare'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Scale size={16} />
            Compare
          </button>
        </div>

        {/* Topic Input Section */}
        <form onSubmit={handleTopicSubmit} className="space-y-4 relative z-20">
          <div className="relative group">
            <div className="absolute -inset-0.5 theme-accent-bg rounded-2xl blur opacity-10 group-hover:opacity-20 transition-all duration-1000" />
            <div className="relative flex items-center bg-white rounded-2xl overflow-hidden border border-slate-200 focus-within:theme-accent-border transition-all duration-1000 shadow-sm">
              <div className="pl-5 pr-3 text-cyan-600">
                <Sparkles size={20} className={isLoading ? "animate-pulse" : ""} />
              </div>
              <input
                type="text"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                placeholder={workflowMode === 'compare' ? 'Compare any product, tool, or topic...' : 'Visualize any concept...'}
                disabled={isLoading}
                className="w-full py-5 text-sm font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !topicInput.trim()}
                className="mr-3 p-3 theme-accent-bg text-white rounded-xl hover:opacity-90 disabled:opacity-30 transition-all shadow-md"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
          </div>
          {isLoading && loadingMessage && (
            <div className="flex items-center gap-2 text-sm theme-accent-text justify-center animate-pulse font-semibold">
              <span>{loadingMessage}</span>
            </div>
          )}
          <p className="text-center text-xs leading-5 text-slate-500">
            {workflowMode === 'compare'
              ? 'Comparison mode builds matched options, key decision criteria, and action links alongside the map.'
              : 'Learning mode builds a structured knowledge map for the topic you enter.'}
          </p>
        </form>

        <div className="space-y-6">
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink-0 mx-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Or Process Data</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              className="group flex flex-col items-center justify-center gap-3 px-4 py-6 bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl text-sm font-semibold hover:bg-white hover:border-cyan-500/30 hover:text-cyan-600 transition-all disabled:opacity-50 shadow-sm hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:bg-cyan-50 transition-colors border border-slate-100 shadow-sm">
                <Upload size={22} className="text-slate-400 group-hover:text-cyan-600" />
              </div>
              <div className="flex flex-col items-center text-center">
                <span>Document</span>
                <span className="text-[9px] text-slate-500 uppercase tracking-tighter">PDF, TXT, MD</span>
              </div>
            </button>
            <button
              onClick={() => jsonInputRef.current?.click()}
              disabled={isLoading}
              className="group flex flex-col items-center justify-center gap-3 px-4 py-6 bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl text-sm font-semibold hover:bg-white hover:border-orange-500/30 hover:text-orange-600 transition-all disabled:opacity-50 shadow-sm hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:bg-orange-50 transition-colors border border-slate-100 shadow-sm">
                <FileJson size={22} className="text-slate-400 group-hover:text-orange-600" />
              </div>
              <div className="flex flex-col items-center text-center">
                <span>Saved Map</span>
                <span className="text-[9px] text-slate-500 uppercase tracking-tighter">JSON</span>
              </div>
            </button>
          </div>

          <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".pdf,.txt,.md" className="hidden" />
          <input type="file" ref={jsonInputRef} onChange={handleJsonUpload} accept=".json" className="hidden" />

          <button
            onClick={handleLoadExample}
            disabled={isLoading}
            className="w-full relative group p-[2px] rounded-2xl bg-slate-200/50 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-orange-400 transition-all duration-500"
          >
            <div className="flex items-center justify-center gap-3 w-full py-4 bg-white rounded-[14px] group-hover:bg-white transition-colors">
              <Play size={16} className="text-cyan-600 group-hover:scale-125 transition-transform" />
              <span className="text-sm font-bold text-slate-700">Example: <span className="text-orange-600 font-extrabold">{EXAMPLE_MAP.name}</span></span>
            </div>
          </button>
        </div>
      </div>
    </div>

  );
}
