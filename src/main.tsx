import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { WikiProvider } from './hooks/useWiki';
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <WikiProvider>
        <App />
      </WikiProvider>
    </ThemeProvider>
  </StrictMode>,
);
