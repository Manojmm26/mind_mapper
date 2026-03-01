import { Handle, Position, NodeProps } from '@xyflow/react';
import { memo, useContext } from 'react';
import { cn } from '../utils/cn';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { MapContext } from './MapContext';

export const CustomNode = memo(({ id, data, isConnectable }: NodeProps) => {
  const { onToggle } = useContext(MapContext);

  const hasChildren = !!data.hasChildren;
  const isCollapsed = !!data.isCollapsed;

  return (
    <div className={cn(
      "w-[250px] min-h-[100px] bg-white rounded-xl shadow-md border border-slate-200",
      "flex flex-col overflow-visible transition-all hover:shadow-lg relative"
    )}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-indigo-500"
      />
      
      <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 rounded-t-xl">
        <h3 className="font-semibold text-slate-800 text-sm truncate" title={data.label as string}>
          {data.label as string}
        </h3>
      </div>
      
      <div className="p-4 flex-1 flex flex-col justify-center">
        {data.description ? (
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-4" title={data.description as string}>
            {data.description as string}
          </p>
        ) : (
          <p className="text-xs text-slate-400 italic">No description provided.</p>
        )}
      </div>

      {hasChildren && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle?.(id);
          }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-slate-200 rounded-full p-1 shadow-sm hover:bg-slate-50 z-10 text-slate-600 cursor-pointer"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
        </button>
      )}

      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-indigo-500"
      />
    </div>
  );
});
