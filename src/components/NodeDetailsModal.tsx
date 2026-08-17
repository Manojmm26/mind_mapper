import { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, BookOpen, Sigma, Code2, HelpCircle, Sparkles, CheckCircle2, 
  XCircle, Copy, Check, ArrowRight, Lightbulb, AlertTriangle, ShieldCheck, 
  Layers, ChevronRight, RefreshCw, Cpu
} from 'lucide-react';
import { Node, Edge } from '@xyflow/react';
import { NodeData } from '../services/llmSchemas';
import { generateNodeDeepDetails } from '../services/llmService';

interface NodeDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  node: Node | null;
  allNodes: Node[];
  allEdges: Edge[];
  onSelectNode: (nodeId: string) => void;
  topicTitle?: string;
}

export function NodeDetailsModal({
  isOpen,
  onClose,
  node,
  allNodes,
  allEdges,
  onSelectNode,
  topicTitle = "Knowledge Map"
}: NodeDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'axioms' | 'code' | 'quiz'>('overview');
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);
  const [isGeneratingDetails, setIsGeneratingDetails] = useState(false);
  const [localNodeData, setLocalNodeData] = useState<NodeData | null>(null);

  if (!isOpen || !node) return null;

  const nodeData: NodeData = localNodeData || (node.data as unknown as NodeData) || {
    id: node.id,
    label: String(node.data?.label || 'Untitled Concept'),
    description: String(node.data?.description || '')
  };

  // Find parent and child nodes for breadcrumbs and navigation
  const parentEdge = allEdges.find(e => e.target === node.id);
  const parentNode = parentEdge ? allNodes.find(n => n.id === parentEdge.source) : null;
  const childEdges = allEdges.filter(e => e.source === node.id);
  const childNodes = childEdges.map(e => allNodes.find(n => n.id === e.target)).filter(Boolean) as Node[];

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const handleGenerateDeepDetails = async () => {
    setIsGeneratingDetails(true);
    try {
      const deepDetails = await generateNodeDeepDetails(
        nodeData.label,
        nodeData.description,
        topicTitle
      );
      setLocalNodeData({
        ...nodeData,
        ...deepDetails
      });
    } catch (error) {
      console.error("Failed to generate deep details:", error);
    } finally {
      setIsGeneratingDetails(false);
    }
  };

  // Default fallback data for rich reading experience
  const extendedDesc = nodeData.extendedDescription || `${nodeData.description} First-principles mechanics dictate that this concept operates as a fundamental structural element within ${topicTitle}. Mastering its baseline parameters is essential for high-throughput system design and analytical correctness.`;

  const axioms = nodeData.axiomsAndDerivations || [
    {
      title: "Fundamental Conservation Axiom",
      content: `The underlying principle governing ${nodeData.label} asserts invariant energy or logical state preservation across operational state transitions.`,
      formula: "S_{total} = \\sum_{i=1}^{N} P_i \\cdot H_i \\quad \\text{where } \\Delta S \\ge 0"
    },
    {
      title: "Asymptotic Bound & Scaling Limit",
      content: "Execution efficiency and structural density limits are bound by fundamental information theory bounds.",
      formula: "\\mathcal{O}(N \\log N) \\quad \\text{under optimal SIMD / parallel execution}"
    }
  ];

  const codeSnippets = nodeData.codeExamples || [
    {
      language: "typescript",
      code: `// ${nodeData.label} Implementation\nexport function execute${nodeData.label.replace(/[^a-zA-Z0-9]/g, '')}(inputData: Map<string, number>) {\n  const threshold = 0.999;\n  return Array.from(inputData.entries())\n    .filter(([_, score]) => score >= threshold)\n    .map(([id, score]) => ({ id, score }));\n}`,
      explanation: `Production implementation showing high-performance filtering under ${nodeData.label} constraints.`
    }
  ];

  const formulas = nodeData.keyFormulas || [
    {
      label: "Operational Efficiency Metric",
      formula: "\\eta = \\frac{W_{\\text{useful}}}{Q_{\\text{in}}} \\cdot 100\\%",
      explanation: "Ratio of effective output work to total input energy or computational cycle consumption."
    }
  ];

  const misconceptions = nodeData.misconceptions || [
    {
      misconception: `Assuming ${nodeData.label} can be applied without strict precondition checks.`,
      clarification: "Boundary condition validation is mandatory to prevent silent state corruption or runtime overflow."
    }
  ];

  const quiz = nodeData.selfAssessmentQuiz || {
    question: `What is the primary governing principle behind ${nodeData.label}?`,
    options: [
      `It guarantees invariant state preservation and optimal resource efficiency.`,
      `It operates independently of system constraints with zero overhead.`,
      `It requires continuous manual re-calibration during execution.`,
      `It replaces all foundational physical/computational axioms entirely.`
    ],
    correctAnswerIndex: 0,
    explanation: `${nodeData.label} relies on invariant state preservation to ensure algorithmic stability and predictable resource bounds.`
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[32px] border border-white/80 bg-white/95 dark:border-white/10 dark:bg-slate-900/95 shadow-[0_25px_90px_rgba(15,23,42,0.35)] backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="relative flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 px-6 py-5">
          <div className="flex flex-col gap-1.5">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">{topicTitle}</span>
              {parentNode && (
                <>
                  <ChevronRight size={14} className="text-slate-400" />
                  <button 
                    onClick={() => { setLocalNodeData(null); onSelectNode(parentNode.id); }}
                    className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {String(parentNode.data?.label || 'Parent Concept')}
                  </button>
                </>
              )}
              <ChevronRight size={14} className="text-slate-400" />
              <span className="text-slate-900 dark:text-white font-bold">{nodeData.label}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                {nodeData.label}
              </h2>
              {nodeData.importance && (
                <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  nodeData.importance === 'high' 
                    ? 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800/40'
                    : 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/40'
                }`}>
                  {nodeData.importance} priority
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleGenerateDeepDetails}
              disabled={isGeneratingDetails}
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-200 bg-cyan-50 dark:border-cyan-800/40 dark:bg-cyan-950/50 px-3.5 py-2 text-xs font-bold text-cyan-700 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 transition-all disabled:opacity-50"
              title="Enhance this node with AI generated equations, code, and quiz"
            >
              {isGeneratingDetails ? (
                <RefreshCw size={14} className="animate-spin text-cyan-600 dark:text-cyan-400" />
              ) : (
                <Sparkles size={14} className="text-cyan-600 dark:text-cyan-400" />
              )}
              <span>{isGeneratingDetails ? 'Generating Details...' : 'AI Deepen Details'}</span>
            </button>

            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-100/80 text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white transition-all"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 px-6 py-2 overflow-x-auto scrollbar-hide">
          {[
            { id: 'overview', label: 'Overview & Deep Dive', icon: <BookOpen size={16} /> },
            { 
              id: 'axioms', 
              label: nodeData.fluidDetails?.middleTab2?.title || 'Axioms & Derivations', 
              icon: <Sigma size={16} /> 
            },
            { 
              id: 'code', 
              label: nodeData.fluidDetails?.middleTab3?.title || 'Implementation & Worked Examples', 
              icon: <Code2 size={16} /> 
            },
            { id: 'quiz', label: 'Self-Assessment Quiz', icon: <HelpCircle size={16} /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20 dark:bg-cyan-600'
                  : 'text-slate-600 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:bg-slate-800/60'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 scrollbar-hide">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              {/* Executive Summary */}
              <div className="rounded-3xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/60 to-blue-50/40 dark:border-cyan-900/40 dark:from-cyan-950/30 dark:to-blue-950/20 p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                  <Lightbulb size={16} />
                  First-Principles Concept Explanation
                </div>
                <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300 font-medium">
                  {extendedDesc}
                </p>
              </div>

              {/* Tags & Metadata Row */}
              {nodeData.tags && nodeData.tags.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Domain Tags & Taxonomic Identifiers
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {nodeData.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800 px-3 py-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Misconceptions & Edge Cases */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  <AlertTriangle size={16} />
                  Common Misconceptions & Edge Cases
                </h4>
                <div className="grid gap-4 sm:grid-cols-1">
                  {misconceptions.map((item, idx) => (
                    <div key={idx} className="rounded-2xl border border-amber-200/80 bg-amber-50/40 dark:border-amber-900/40 dark:bg-amber-950/20 p-5 space-y-2">
                      <div className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
                        <XCircle size={14} className="text-amber-600" />
                        Misconception: {item.misconception}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 pl-5 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white">Clarification: </strong>
                        {item.clarification}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connected Relationships Navigator */}
              <div className="space-y-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Layers size={16} />
                  Connected Concept Hierarchy
                </h4>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Parent */}
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-900/50 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Parent Concept</span>
                    {parentNode ? (
                      <button
                        onClick={() => { setLocalNodeData(null); onSelectNode(parentNode.id); }}
                        className="flex items-center justify-between w-full rounded-xl bg-white dark:bg-slate-800 p-3 text-xs font-bold text-slate-900 dark:text-white shadow-sm hover:border-cyan-400 transition-all border border-slate-200 dark:border-slate-700"
                      >
                        <span>{String(parentNode.data?.label || '')}</span>
                        <ArrowRight size={14} className="text-cyan-500" />
                      </button>
                    ) : (
                      <div className="text-xs text-slate-400 italic">Root Domain Concept</div>
                    )}
                  </div>

                  {/* Children */}
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-900/50 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Sub-Concepts ({childNodes.length})</span>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1 scrollbar-hide">
                      {childNodes.length > 0 ? (
                        childNodes.map(child => (
                          <button
                            key={child.id}
                            onClick={() => { setLocalNodeData(null); onSelectNode(child.id); }}
                            className="flex items-center justify-between w-full rounded-xl bg-white dark:bg-slate-800 p-2.5 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm hover:border-cyan-400 transition-all border border-slate-200 dark:border-slate-700"
                          >
                            <span className="truncate">{String(child.data?.label || '')}</span>
                            <ArrowRight size={12} className="text-slate-400 shrink-0" />
                          </button>
                        ))
                      ) : (
                        <div className="text-xs text-slate-400 italic">Leaf Node</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FLUID MIDDLE TAB 2 */}
          {activeTab === 'axioms' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Sigma size={18} className="text-violet-500" />
                  {nodeData.fluidDetails?.middleTab2?.title || 'First-Principles Axioms & Fundamental Physical Derivations'}
                </h3>

                {nodeData.fluidDetails?.middleTab2?.data?.bodyMarkdown && (
                  <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-br from-violet-50/50 to-purple-50/30 dark:border-violet-900/40 dark:from-violet-950/30 dark:to-purple-950/20 p-6 shadow-sm">
                    <h4 className="text-base font-bold text-violet-950 dark:text-violet-200">
                      {nodeData.fluidDetails.middleTab2.data.heading || 'Technical Commentary'}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                      {nodeData.fluidDetails.middleTab2.data.bodyMarkdown}
                    </p>
                  </div>
                )}

                <div className="grid gap-6">
                  {(nodeData.fluidDetails?.middleTab2?.data?.latexFormulas || axioms).map((item, idx) => (
                    <div key={idx} className="rounded-3xl border border-violet-200/80 bg-gradient-to-br from-violet-50/50 to-purple-50/30 dark:border-violet-900/40 dark:from-violet-950/30 dark:to-purple-950/20 p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-violet-950 dark:text-violet-200">
                          {'title' in item ? item.title : item.label}
                        </h4>
                        <span className="rounded-full bg-violet-100 dark:bg-violet-900/60 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-violet-700 dark:text-violet-300">
                          #{idx + 1}
                        </span>
                      </div>
                      
                      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                        {'content' in item ? item.content : item.explanation}
                      </p>

                      {item.formula && (
                        <div className="rounded-2xl bg-slate-950 p-4 text-center text-cyan-300 font-mono text-sm overflow-x-auto shadow-inner border border-slate-800">
                          {item.formula}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FLUID MIDDLE TAB 3 */}
          {activeTab === 'code' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Code2 size={18} className="text-emerald-500" />
                  {nodeData.fluidDetails?.middleTab3?.title || 'Production Implementation & Worked Examples'}
                </h3>

                {nodeData.fluidDetails?.middleTab3?.data?.bodyMarkdown && (
                  <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/50 to-teal-50/30 dark:border-emerald-900/40 dark:from-emerald-950/30 dark:to-teal-950/20 p-6 shadow-sm">
                    <h4 className="text-base font-bold text-emerald-950 dark:text-emerald-200">
                      {nodeData.fluidDetails.middleTab3.data.heading || 'Execution Details'}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                      {nodeData.fluidDetails.middleTab3.data.bodyMarkdown}
                    </p>
                  </div>
                )}

                <div className="grid gap-6">
                  {(nodeData.fluidDetails?.middleTab3?.data?.codeSnippets || codeSnippets).map((item, idx) => (
                    <div key={idx} className="rounded-3xl border border-slate-800 bg-slate-950 p-6 space-y-4 text-white shadow-xl">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Cpu size={16} className="text-emerald-400" />
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">{item.language}</span>
                        </div>
                        <button
                          onClick={() => handleCopyCode(item.code, idx)}
                          className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-bold text-slate-300 hover:bg-slate-800 transition-all"
                        >
                          {copiedCodeIndex === idx ? (
                            <>
                              <Check size={14} className="text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>Copy Code</span>
                            </>
                          )}
                        </button>
                      </div>

                      <pre className="overflow-x-auto rounded-2xl bg-slate-900/90 p-4 font-mono text-xs text-slate-200 leading-relaxed border border-slate-800 scrollbar-hide">
                        <code>{item.code}</code>
                      </pre>

                      <p className="text-xs leading-relaxed text-slate-400 border-t border-slate-800/80 pt-3">
                        <strong className="text-slate-200">Execution Mechanics: </strong>
                        {item.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SELF-ASSESSMENT QUIZ */}
          {activeTab === 'quiz' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50/60 to-indigo-50/40 dark:border-blue-900/40 dark:from-blue-950/30 dark:to-indigo-950/20 p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-700 dark:text-blue-300">
                    <HelpCircle size={18} />
                    Active Recall Self-Assessment
                  </div>
                  <span className="rounded-full bg-blue-100 dark:bg-blue-900/60 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-700 dark:text-blue-300">
                    1 Question Quiz
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 dark:text-white leading-snug">
                  {quiz.question}
                </h3>

                <div className="space-y-3">
                  {quiz.options.map((option, idx) => {
                    const isSelected = selectedQuizOption === idx;
                    const isCorrect = idx === quiz.correctAnswerIndex;
                    
                    let optionStyle = "border-slate-200 bg-white hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500 text-slate-800 dark:text-slate-200";
                    if (quizSubmitted) {
                      if (isCorrect) {
                        optionStyle = "border-emerald-400 bg-emerald-50 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 font-bold";
                      } else if (isSelected && !isCorrect) {
                        optionStyle = "border-red-400 bg-red-50 text-red-900 dark:border-red-700 dark:bg-red-950/60 dark:text-red-200";
                      }
                    } else if (isSelected) {
                      optionStyle = "border-blue-500 bg-blue-50 text-blue-950 dark:border-blue-500 dark:bg-blue-950/80 dark:text-white font-bold";
                    }

                    return (
                      <button
                        key={idx}
                        disabled={quizSubmitted}
                        onClick={() => setSelectedQuizOption(idx)}
                        className={`flex items-start gap-3 w-full text-left rounded-2xl border p-4 text-xs leading-relaxed transition-all shadow-sm ${optionStyle}`}
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1">{option}</span>
                        {quizSubmitted && isCorrect && <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />}
                        {quizSubmitted && isSelected && !isCorrect && <XCircle size={16} className="text-red-500 shrink-0 mt-0.5" />}
                      </button>
                    );
                  })}
                </div>

                {!quizSubmitted ? (
                  <button
                    disabled={selectedQuizOption === null}
                    onClick={() => setQuizSubmitted(true)}
                    className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 text-xs font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-lg disabled:opacity-50"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <div className="rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 p-5 space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                      <ShieldCheck size={16} className="text-emerald-500" />
                      Explanation:
                    </div>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 pl-6">
                      {quiz.explanation}
                    </p>
                    <button
                      onClick={() => { setSelectedQuizOption(null); setQuizSubmitted(false); }}
                      className="mt-3 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );

  const targetContainer = typeof document !== 'undefined'
    ? (document.fullscreenElement || document.body)
    : null;

  if (!targetContainer) return modalContent;
  return createPortal(modalContent, targetContainer);
}
