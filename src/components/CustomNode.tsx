import { Handle, Position, NodeProps } from '@xyflow/react';
import { memo, useContext } from 'react';
import { cn } from '../utils/cn';
import { ChevronDown, ChevronRight, CircleArrowOutUpRight } from 'lucide-react';
import { MapContext } from './MapContext';

interface Theme {
  bg: string;
  header: string;
  border: string;
  text: string;
  handle: string;
}

const themes: Record<string, Theme[]> = {
  slate: [
    { bg: 'bg-white', header: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-800', handle: 'bg-slate-400' },
    { bg: 'bg-slate-50', header: 'bg-slate-100', border: 'border-slate-300', text: 'text-slate-800', handle: 'bg-slate-500' },
    { bg: 'bg-slate-100', header: 'bg-slate-200', border: 'border-slate-400', text: 'text-slate-800', handle: 'bg-slate-600' },
    { bg: 'bg-slate-200', header: 'bg-slate-300', border: 'border-slate-500', text: 'text-slate-800', handle: 'bg-slate-700' },
    { bg: 'bg-slate-300', header: 'bg-slate-400', border: 'border-slate-600', text: 'text-slate-800', handle: 'bg-slate-800' },
  ],
  red: [
    { bg: 'bg-white', header: 'bg-red-50', border: 'border-red-200', text: 'text-red-900', handle: 'bg-red-400' },
    { bg: 'bg-red-50', header: 'bg-red-100', border: 'border-red-300', text: 'text-red-900', handle: 'bg-red-500' },
    { bg: 'bg-red-100', header: 'bg-red-200', border: 'border-red-400', text: 'text-red-900', handle: 'bg-red-600' },
    { bg: 'bg-red-200', header: 'bg-red-300', border: 'border-red-500', text: 'text-red-900', handle: 'bg-red-700' },
    { bg: 'bg-red-300', header: 'bg-red-400', border: 'border-red-600', text: 'text-red-900', handle: 'bg-red-800' },
  ],
  orange: [
    { bg: 'bg-white', header: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-900', handle: 'bg-orange-400' },
    { bg: 'bg-orange-50', header: 'bg-orange-100', border: 'border-orange-300', text: 'text-orange-900', handle: 'bg-orange-500' },
    { bg: 'bg-orange-100', header: 'bg-orange-200', border: 'border-orange-400', text: 'text-orange-900', handle: 'bg-orange-600' },
    { bg: 'bg-orange-200', header: 'bg-orange-300', border: 'border-orange-500', text: 'text-orange-900', handle: 'bg-orange-700' },
    { bg: 'bg-orange-300', header: 'bg-orange-400', border: 'border-orange-600', text: 'text-orange-900', handle: 'bg-orange-800' },
  ],
  amber: [
    { bg: 'bg-white', header: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-900', handle: 'bg-amber-400' },
    { bg: 'bg-amber-50', header: 'bg-amber-100', border: 'border-amber-300', text: 'text-amber-900', handle: 'bg-amber-500' },
    { bg: 'bg-amber-100', header: 'bg-amber-200', border: 'border-amber-400', text: 'text-amber-900', handle: 'bg-amber-600' },
    { bg: 'bg-amber-200', header: 'bg-amber-300', border: 'border-amber-500', text: 'text-amber-900', handle: 'bg-amber-700' },
    { bg: 'bg-amber-300', header: 'bg-amber-400', border: 'border-amber-600', text: 'text-amber-900', handle: 'bg-amber-800' },
  ],
  green: [
    { bg: 'bg-white', header: 'bg-green-50', border: 'border-green-200', text: 'text-green-900', handle: 'bg-green-400' },
    { bg: 'bg-green-50', header: 'bg-green-100', border: 'border-green-300', text: 'text-green-900', handle: 'bg-green-500' },
    { bg: 'bg-green-100', header: 'bg-green-200', border: 'border-green-400', text: 'text-green-900', handle: 'bg-green-600' },
    { bg: 'bg-green-200', header: 'bg-green-300', border: 'border-green-500', text: 'text-green-900', handle: 'bg-green-700' },
    { bg: 'bg-green-300', header: 'bg-green-400', border: 'border-green-600', text: 'text-green-900', handle: 'bg-green-800' },
  ],
  teal: [
    { bg: 'bg-white', header: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-900', handle: 'bg-teal-400' },
    { bg: 'bg-teal-50', header: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-900', handle: 'bg-teal-500' },
    { bg: 'bg-teal-100', header: 'bg-teal-200', border: 'border-teal-400', text: 'text-teal-900', handle: 'bg-teal-600' },
    { bg: 'bg-teal-200', header: 'bg-teal-300', border: 'border-teal-500', text: 'text-teal-900', handle: 'bg-teal-700' },
    { bg: 'bg-teal-300', header: 'bg-teal-400', border: 'border-teal-600', text: 'text-teal-900', handle: 'bg-teal-800' },
  ],
  blue: [
    { bg: 'bg-white', header: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-900', handle: 'bg-blue-400' },
    { bg: 'bg-blue-50', header: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-900', handle: 'bg-blue-500' },
    { bg: 'bg-blue-100', header: 'bg-blue-200', border: 'border-blue-400', text: 'text-blue-900', handle: 'bg-blue-600' },
    { bg: 'bg-blue-200', header: 'bg-blue-300', border: 'border-blue-500', text: 'text-blue-900', handle: 'bg-blue-700' },
    { bg: 'bg-blue-300', header: 'bg-blue-400', border: 'border-blue-600', text: 'text-blue-900', handle: 'bg-blue-800' },
  ],
  purple: [
    { bg: 'bg-white', header: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-900', handle: 'bg-purple-400' },
    { bg: 'bg-purple-50', header: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-900', handle: 'bg-purple-500' },
    { bg: 'bg-purple-100', header: 'bg-purple-200', border: 'border-purple-400', text: 'text-purple-900', handle: 'bg-purple-600' },
    { bg: 'bg-purple-200', header: 'bg-purple-300', border: 'border-purple-500', text: 'text-purple-900', handle: 'bg-purple-700' },
    { bg: 'bg-purple-300', header: 'bg-purple-400', border: 'border-purple-600', text: 'text-purple-900', handle: 'bg-purple-800' },
  ],
  pink: [
    { bg: 'bg-white', header: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-900', handle: 'bg-pink-400' },
    { bg: 'bg-pink-50', header: 'bg-pink-100', border: 'border-pink-300', text: 'text-pink-900', handle: 'bg-pink-500' },
    { bg: 'bg-pink-100', header: 'bg-pink-200', border: 'border-pink-400', text: 'text-pink-900', handle: 'bg-pink-600' },
    { bg: 'bg-pink-200', header: 'bg-pink-300', border: 'border-pink-500', text: 'text-pink-900', handle: 'bg-pink-700' },
    { bg: 'bg-pink-300', header: 'bg-pink-400', border: 'border-pink-600', text: 'text-pink-900', handle: 'bg-pink-800' },
  ],
};

export const CustomNode = memo(({ id, data, isConnectable, selected }: NodeProps) => {
  const { onToggle } = useContext(MapContext);

  const hasChildren = !!data.hasChildren;
  const isCollapsed = !!data.isCollapsed;
  const tags = Array.isArray(data.tags) ? (data.tags as string[]) : [];
  const typeLabel = data.type as string | undefined;
  const importanceLabel = data.importance as string | undefined;
  
  const themeFamily = (data.themeFamily as string) || 'slate';
  const themeLevel = Math.min(Math.max((data.themeLevel as number) || 0, 0), 4);
  
  const familyThemes = themes[themeFamily] || themes.slate;
  const theme = familyThemes[themeLevel];

  return (
    <div className={cn(
      "w-[300px] min-h-[120px] rounded-[22px] border shadow-sm",
      theme.bg, theme.border,
      "relative flex flex-col overflow-visible transition-shadow hover:shadow-xl",
      selected && 'ring-2 ring-cyan-300 ring-offset-4 ring-offset-slate-50 shadow-[0_20px_50px_rgba(14,165,233,0.18)]'
    )}>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        className={cn("w-3 h-3", theme.handle)}
      />
      
      <div className={cn('border-b px-4 py-3 rounded-t-[22px]', theme.header, theme.border)}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className={cn('truncate text-sm font-bold', theme.text)} title={data.label as string}>
              {data.label as string}
            </h3>
            {(typeLabel || importanceLabel) && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {typeLabel && (
                  <span className="rounded-full bg-white/75 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500 shadow-sm">
                    {typeLabel}
                  </span>
                )}
                {importanceLabel && (
                  <span className="rounded-full bg-white/75 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500 shadow-sm">
                    {importanceLabel}
                  </span>
                )}
              </div>
            )}
          </div>
          {data.nextStep && (
            <div className="rounded-full bg-white/75 p-1 text-slate-500 shadow-sm">
              <CircleArrowOutUpRight size={12} />
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-1 flex-col gap-3 p-4">
        {data.description ? (
          <p className="text-xs leading-relaxed text-slate-600 line-clamp-4" title={data.description as string}>
            {data.description as string}
          </p>
        ) : (
          <p className="text-xs text-slate-400 italic">No description provided.</p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-500">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {hasChildren && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle?.(id);
          }}
          className={cn(
            'absolute -right-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full border p-1.5 shadow-md transition-colors',
            theme.bg, theme.border, theme.text,
            'hover:brightness-95'
          )}
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
        </button>
      )}

      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className={cn("w-3 h-3", theme.handle)}
      />
    </div>
  );
});
