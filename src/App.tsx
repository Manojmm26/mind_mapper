import React, { useState, useRef } from 'react';
import { extractTextFromFile } from './services/pdfService';
import { generateMindMap, generateMindMapFromTopic, MindMapData } from './services/llmService';
import { Map } from './components/Map';
import { Upload, FileJson, Loader2, BrainCircuit, Play, Sparkles, Send } from 'lucide-react';
import { Node, Edge } from '@xyflow/react';
import { EXAMPLE_MAP } from './exampleData';

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
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [mapData, setMapData] = useState<MindMapData | null>(null);
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
    setSavedNodes(null);
    setSavedEdges(null);

    try {
      const text = await extractTextFromFile(file);
      
      // Quick check: if the user uploaded a JSON file disguised as a TXT, 
      // try to parse it directly instead of sending it to the LLM to avoid losing details.
      try {
        const json = JSON.parse(text);
        if (json.nodes && json.edges) {
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
    setSavedNodes(null);
    setSavedEdges(null);

    try {
      const data = await generateMindMapFromTopic(topic);
      setMapData(data);
    } catch (err: any) {
      setError(err.message || "An error occurred while generating the mind map.");
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
          setSavedNodes(json.nodes);
          setSavedEdges(json.edges);
          setMapData({ nodes: [], edges: [] }); // Trigger map render
        } else if (json.name || json.children) {
          const { nodes, edges } = convertTreeToGraph(json);
          setSavedNodes(nodes);
          setSavedEdges(edges);
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
    const dataStr = JSON.stringify({ nodes, edges }, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'mindmap.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleLoadExample = () => {
    setSavedNodes((EXAMPLE_MAP.data as any).nodes);
    setSavedEdges((EXAMPLE_MAP.data as any).edges);
    setMapData({ nodes: [], edges: [] }); 
  };

  if (mapData || savedNodes) {
    return (
      <div className="w-screen h-screen relative">
        <Map 
          data={mapData} 
          initialNodes={savedNodes || undefined}
          initialEdges={savedEdges || undefined}
          onSave={handleSaveMap} 
        />
        <button 
          onClick={() => {
            setMapData(null);
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
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BrainCircuit size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">AI Mind Mapper</h1>
          <p className="text-sm text-slate-500">
            Enter a topic, upload a document, or load a saved map to generate an interactive knowledge graph.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-100">
            {error}
          </div>
        )}

        {/* Topic Input Section */}
        <form onSubmit={handleTopicSubmit} className="space-y-3">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400">
              <Sparkles size={18} />
            </div>
            <input
              type="text"
              value={topicInput}
              onChange={(e) => setTopicInput(e.target.value)}
              placeholder="e.g. Machine Learning, React Hooks, Kubernetes..."
              disabled={isLoading}
              className="w-full pl-10 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !topicInput.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <Send size={16} />
            </button>
          </div>
          {isLoading && loadingMessage && (
            <div className="flex items-center gap-2 text-sm text-indigo-600 justify-center">
              <Loader2 className="animate-spin" size={16} />
              <span>{loadingMessage}</span>
            </div>
          )}
        </form>

        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-400">Or upload</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              className="flex flex-col items-center justify-center gap-1.5 px-3 py-3 bg-white text-slate-600 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 hover:border-indigo-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Upload size={20} className="text-slate-400" />
              <span>Document</span>
              <span className="text-xs text-slate-400 font-normal">PDF, TXT, MD</span>
            </button>
            <button
              onClick={() => jsonInputRef.current?.click()}
              disabled={isLoading}
              className="flex flex-col items-center justify-center gap-1.5 px-3 py-3 bg-white text-slate-600 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 hover:border-indigo-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileJson size={20} className="text-slate-400" />
              <span>Saved Map</span>
              <span className="text-xs text-slate-400 font-normal">JSON</span>
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

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-400">Example</span>
            </div>
          </div>

          <button
            onClick={handleLoadExample}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-xl font-medium hover:bg-indigo-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group text-sm"
          >
            <Play size={18} className="text-indigo-500 group-hover:scale-110 transition-transform" />
            Visualize: {EXAMPLE_MAP.name}
          </button>
        </div>
      </div>
    </div>
  );
}

