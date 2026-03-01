import React, { useState, useRef } from 'react';
import { extractTextFromFile } from './services/pdfService';
import { generateMindMap, MindMapData } from './services/llmService';
import { Map } from './components/Map';
import { Upload, FileJson, Loader2, BrainCircuit } from 'lucide-react';
import { Node, Edge } from '@xyflow/react';

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
  const [error, setError] = useState<string | null>(null);
  const [mapData, setMapData] = useState<MindMapData | null>(null);
  const [savedNodes, setSavedNodes] = useState<Node[] | null>(null);
  const [savedEdges, setSavedEdges] = useState<Edge[] | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const jsonInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
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

      const data = await generateMindMap(text);
      setMapData(data);
    } catch (err: any) {
      setError(err.message || "An error occurred while processing the file.");
    } finally {
      setIsLoading(false);
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
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BrainCircuit size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">AI Mind Mapper</h1>
          <p className="text-sm text-slate-500">
            Upload a PDF or Text file, and let AI generate an interactive knowledge graph.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-100">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <Upload size={20} />
            )}
            {isLoading ? "Analyzing Document..." : "Upload Document (PDF/TXT)"}
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".pdf,.txt,.md"
            className="hidden"
          />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-400">Or</span>
            </div>
          </div>

          <button
            onClick={() => jsonInputRef.current?.click()}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FileJson size={20} className="text-slate-400" />
            Load Saved Map (JSON)
          </button>
          <input
            type="file"
            ref={jsonInputRef}
            onChange={handleJsonUpload}
            accept=".json"
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
}
