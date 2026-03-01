import { MindMapData } from './services/llmService';
import exampleData from '../backend_mind_map.json';

export const EXAMPLE_MAP: { name: string; data: MindMapData } = {
    name: "Backend From First Principles",
    data: exampleData as unknown as MindMapData
};
