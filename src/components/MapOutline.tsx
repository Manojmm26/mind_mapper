import { Edge, Node } from '@xyflow/react';
import { ChevronDown, ChevronRight, Layers3 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '../utils/cn';

interface TreeNode {
  id: string;
  node: Node;
  children: TreeNode[];
}

interface MapOutlineProps {
  nodes: Node[];
  edges: Edge[];
  selectedNodeId?: string | null;
  onSelectNode?: (nodeId: string) => void;
  compact?: boolean;
  className?: string;
  emptyLabel?: string;
}

function buildTree(nodes: Node[], edges: Edge[]): TreeNode[] {
  const nodeMap = new Map<string, TreeNode>();
  const roots: TreeNode[] = [];
  const hasParent = new Set<string>();

  nodes.forEach((node) => {
    nodeMap.set(node.id, { id: node.id, node, children: [] });
  });

  edges.forEach((edge) => {
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
}

function hasSelectionInBranch(item: TreeNode, selectedNodeId?: string | null): boolean {
  if (!selectedNodeId) {
    return false;
  }

  if (item.id === selectedNodeId) {
    return true;
  }

  return item.children.some((child) => hasSelectionInBranch(child, selectedNodeId));
}

function OutlineNodeItem({
  item,
  depth,
  compact,
  selectedNodeId,
  onSelectNode,
}: {
  item: TreeNode;
  depth: number;
  compact: boolean;
  selectedNodeId?: string | null;
  onSelectNode?: (nodeId: string) => void;
  key?: string; // Add key to the interface if it's being passed explicitly
}) {
  const branchHasSelection = hasSelectionInBranch(item, selectedNodeId);
  const [isExpanded, setIsExpanded] = useState(depth < 1 || branchHasSelection);
  const hasChildren = item.children.length > 0;
  const isSelected = item.id === selectedNodeId;
  const typeLabel = item.node.data?.type as string | undefined;
  const assessmentStatus = item.node.data?.assessmentStatus as "mastered" | "review" | "gap" | undefined;

  useEffect(() => {
    if (branchHasSelection) {
      setIsExpanded(true);
    }
  }, [branchHasSelection]);

  return (
    <div className="space-y-1">
      <div
        className={cn(
          'group flex items-start gap-2 rounded-2xl border transition-colors',
          compact ? 'px-2.5 py-2' : 'px-3 py-2.5',
          isSelected
            ? 'border-cyan-200 bg-cyan-50/80 dark:border-cyan-800/60 dark:bg-cyan-950/60 shadow-sm'
            : 'border-transparent bg-white/55 dark:bg-slate-900/60 hover:border-slate-200 dark:hover:border-white/10 hover:bg-white dark:hover:bg-slate-800'
        )}
      >
        <button
          type="button"
          onClick={() => hasChildren && setIsExpanded((current) => !current)}
          className={cn(
            'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors',
            hasChildren
              ? 'border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:border-cyan-200 dark:hover:border-cyan-700 hover:text-cyan-700 dark:hover:text-cyan-300'
              : 'border-transparent bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600'
          )}
          aria-label={hasChildren ? 'Toggle branch' : 'Leaf node'}
        >
          {hasChildren ? isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} /> : <div className="h-1.5 w-1.5 rounded-full bg-current" />}
        </button>

        <button
          type="button"
          onClick={() => onSelectNode?.(item.id)}
          className={cn(
            'w-full rounded-2xl p-3 text-left transition-smooth',
            isSelected
              ? 'border border-cyan-200 bg-cyan-50/80 dark:border-cyan-800/60 dark:bg-cyan-950/60 shadow-sm'
              : 'border border-transparent hover:border-slate-200 dark:hover:border-white/10 hover:bg-slate-50/80 dark:hover:bg-slate-800/50'
          )}
        >
          <div className="flex flex-wrap items-center gap-1.5">
            <p className={cn('truncate font-semibold text-slate-900 dark:text-white', compact ? 'text-xs' : 'text-sm')}>
              {String(item.node.data?.label || 'Untitled node')}
            </p>
            {assessmentStatus === "mastered" && (
              <span className="rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800/60 px-2 py-0.5 text-[9px] font-black uppercase text-emerald-800 dark:text-emerald-300">
                🟢 Mastered
              </span>
            )}
            {assessmentStatus === "review" && (
              <span className="rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800/60 px-2 py-0.5 text-[9px] font-black uppercase text-amber-800 dark:text-amber-300">
                🟡 Needs Review
              </span>
            )}
            {assessmentStatus === "gap" && (
              <span className="rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 px-2 py-0.5 text-[9px] font-black uppercase text-rose-800 dark:text-rose-300">
                🔴 Knowledge Gap
              </span>
            )}
            {typeLabel && (
              <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                {typeLabel}
              </span>
            )}
          </div>
          {!compact && item.node.data?.description && (
            <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
              {String(item.node.data.description)}
            </p>
          )}
        </button>
      </div>

      {hasChildren && isExpanded && (
        <div className={cn('space-y-1 border-l border-slate-200/80 dark:border-white/10', compact ? 'ml-2 pl-1' : 'ml-4 pl-3')}>
          {item.children.map((child) => (
            <OutlineNodeItem
              key={child.id}
              item={child}
              depth={depth + 1}
              compact={compact}
              selectedNodeId={selectedNodeId}
              onSelectNode={onSelectNode}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function MapOutline({
  nodes,
  edges,
  selectedNodeId,
  onSelectNode,
  compact = false,
  className,
  emptyLabel = 'No nodes available yet.',
}: MapOutlineProps) {
  const tree = useMemo(() => buildTree(nodes, edges), [nodes, edges]);

  if (tree.length === 0) {
    return (
      <div className={cn('rounded-3xl border border-dashed border-slate-200 bg-white/70 p-6 text-center text-sm text-slate-500', className)}>
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
          <Layers3 size={18} />
        </div>
        {emptyLabel}
      </div>
    );
  }

  return (
    <div className={cn('space-y-2', className)}>
      {tree.map((rootItem) => (
        <OutlineNodeItem
          key={rootItem.id}
          item={rootItem}
          depth={0}
          compact={compact}
          selectedNodeId={selectedNodeId}
          onSelectNode={onSelectNode}
        />
      ))}
    </div>
  );
}