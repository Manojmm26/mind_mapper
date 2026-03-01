import { createContext } from 'react';

export const MapContext = createContext<{ onToggle?: (id: string) => void }>({});
