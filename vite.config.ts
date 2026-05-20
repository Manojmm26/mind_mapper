import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  // Use /mind_mapper/ base for GitHub Pages, root for local dev
  const isGHPages = process.env.GITHUB_PAGES === 'true';

  return {
    base: isGHPages ? '/mind_mapper/' : '/',
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'react-vendor';
            }

            if (id.includes('@xyflow/react') || id.includes('/dagre/')) {
              return 'graph-vendor';
            }

            if (id.includes('@chenglou/pretext')) {
              return 'pretext-vendor';
            }

            if (id.includes('pdfjs-dist')) {
              return 'pdf-vendor';
            }

            if (id.includes('@google/genai')) {
              return 'ai-vendor';
            }

            if (
              id.includes('/src/components/KnowledgeExplorer/') ||
              id.includes('/src/components/Pretext') ||
              id.includes('/src/pretextPortfolioMap') ||
              id.includes('/src/services/pretext') ||
              id.includes('/src/services/cameraService') ||
              id.includes('/src/services/exportService')
            ) {
              return 'pretext-experience';
            }

            if (
              id.includes('/src/components/WikiExplorer') ||
              id.includes('/src/components/wikiExplorer/') ||
              id.includes('/src/components/KnowledgeGraph') ||
              id.includes('/src/services/wiki')
            ) {
              return 'wiki-experience';
            }

            if (
              id.includes('/src/components/Map') ||
              id.includes('/src/components/CustomNode') ||
              id.includes('/src/components/Workspace')
            ) {
              return 'workspace-experience';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
