import { MindMapData } from "../../services/llmService";
import { PretextMapNode } from "../../services/pretextMapLayout";

export type ExplorerMode = "atlas" | "overview" | "tunnel";
export type ExplorerView = "explore" | "edit" | "expand";

export interface ExplorerNode extends PretextMapNode {
  isEditing?: boolean;
  editLabel?: string;
  editDescription?: string;
  isExpanded?: boolean;
  childCount?: number;
}

export interface ExplorerEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export interface SceneNode {
  id: string;
  node: ExplorerNode;
  role:
    | "focus"
    | "parent"
    | "child"
    | "sibling"
    | "ancestor"
    | "descendant"
    | "overview";
  targetX: number;
  targetY: number;
  targetScale?: number;
  targetOpacity: number;
  interactive: boolean;
  descendantCount: number;
}

export interface PointerState {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface ExportMenuState {
  open: boolean;
  x: number;
  y: number;
}

export interface ExpandPromptState {
  open: boolean;
  nodeId: string | null;
  input: string;
  isGenerating: boolean;
}

export interface KnowledgeExplorerProps {
  initialData?: MindMapData;
  onExit?: () => void;
}
