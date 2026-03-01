import { Handle, Position, NodeProps } from '@xyflow/react';
import { memo } from 'react';
import { cn } from '../utils/cn';

export const CustomNode = memo(({ data, isConnectable }: NodeProps) => {
  return (
    <div className={cn(
      "w-[250px] min-h-[100px] bg-white rounded-xl shadow-md border border-slate-200",
      "flex flex-col overflow-hidden transition-all hover:shadow-lg"
    )}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-indigo-500"
      />
      
      <div className="bg-slate-50 border-b border-slate-100 px-4 py-2">
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

      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-indigo-500"
      />
    </div>
  );
});
