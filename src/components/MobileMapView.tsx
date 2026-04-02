import React from 'react';
import { Node, Edge } from '@xyflow/react';
import { MapOutline } from './MapOutline';

interface MobileMapViewProps {
  nodes: Node[];
  edges: Edge[];
  selectedNodeId?: string | null;
  onSelectNode?: (nodeId: string) => void;
}

export function MobileMapView({ nodes, edges, selectedNodeId, onSelectNode }: MobileMapViewProps) {
  return (
    <div className="w-full h-full overflow-y-auto bg-slate-50 p-4 pt-4 pb-20">
      <div className="max-w-md mx-auto space-y-4">
        <MapOutline
          nodes={nodes}
          edges={edges}
          selectedNodeId={selectedNodeId}
          onSelectNode={onSelectNode}
          emptyLabel="No items to display."
        />
      </div>
    </div>
  );
}
