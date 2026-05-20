import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { WikiProvider } from './hooks/useWiki';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WikiProvider>
      <App />
    </WikiProvider>
  </StrictMode>,
);
