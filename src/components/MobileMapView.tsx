import React, { useMemo, useState } from 'react';
import { Node, Edge } from '@xyflow/react';
import { ChevronRight, ChevronDown, AlignLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MobileMapViewProps {
  nodes: Node[];
  edges: Edge[];
}

interface TreeNode {
  id: string;
  node: Node;
  children: TreeNode[];
}

const NodeItem: React.FC<{ item: TreeNode; depth?: number }> = ({ item, depth = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(depth < 1);
  const hasChildren = item.children.length > 0;

  return (
    <div className="flex flex-col mb-2">
      <div 
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        className={cn(
          "flex items-start p-3 rounded-2xl bg-white border shadow-sm transition-all duration-300",
          hasChildren ? "cursor-pointer hover:border-cyan-200 hover:shadow-md" : "border-slate-100",
          isExpanded ? "border-cyan-200 shadow-md ring-1 ring-cyan-50" : ""
        )}
      >
        <div className="flex items-center justify-center w-6 h-6 mr-3 shrink-0 rounded-full bg-slate-50 text-slate-400">
          {hasChildren ? (
            isExpanded ? <ChevronDown size={14} className="text-cyan-600" /> : <ChevronRight size={14} />
          ) : (
             <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-slate-800 leading-tight">
            {item.node.data?.label as string || 'Untitled Node'}
          </h3>
          
          {item.node.data?.description && (
            <div className="mt-1.5 flex items-start text-xs text-slate-500">
              <AlignLeft size={12} className="mr-1.5 mt-0.5 shrink-0 opacity-50" />
              <p className="leading-relaxed line-clamp-3">
                {item.node.data.description as string}
              </p>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && hasChildren && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pl-5 pr-1 py-1 mt-2 border-l-2 border-slate-100 ml-5 space-y-2">
              {item.children.map((child) => (
                <NodeItem key={child.id} item={child} depth={depth + 1} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function MobileMapView({ nodes, edges }: MobileMapViewProps) {
  const tree = useMemo(() => {
    // Basic root-finding and tree building
    const nodeMap = new Map<string, TreeNode>();
    const roots: TreeNode[] = [];

    nodes.forEach(node => {
      nodeMap.set(node.id, { id: node.id, node, children: [] });
    });

    const hasParent = new Set<string>();

    edges.forEach(edge => {
      const parent = nodeMap.get(edge.source);
      const child = nodeMap.get(edge.target);
      if (parent && child) {
        parent.children.push(child);
        hasParent.add(child.id);
      }
    });

    nodeMap.forEach((treeNode, id) => {
      if (!hasParent.has(id)) {
        roots.push(treeNode);
      }
    });

    return roots;
  }, [nodes, edges]);

  return (
    <div className="w-full h-full overflow-y-auto bg-slate-50 p-4 pt-20 pb-10">
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex items-center space-x-2 px-2 pb-2">
          <Sparkles className="w-5 h-5 text-cyan-500" />
          <h2 className="text-lg font-bold text-slate-800">Mind Map Outline</h2>
        </div>
        
        {tree.length === 0 ? (
          <div className="p-6 text-center text-slate-500 bg-white rounded-2xl border border-slate-100 border-dashed">
            No items to display.
          </div>
        ) : (
          <div className="space-y-2">
            {tree.map(rootItem => (
              <NodeItem key={rootItem.id} item={rootItem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
