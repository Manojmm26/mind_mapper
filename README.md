<div align="center">
<img width="1200" height="475" alt="AI Mind Mapper Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🧠 AI Mind Mapper

**AI Mind Mapper** is a powerful, interactive tool that transforms your documents and text into structured, visual knowledge graphs. Powered by Google's Gemini AI, it automatically extracts key concepts and their relationships, allowing you to explore complex information visually.

---

## ✨ Key Features

- **🚀 AI-Powered Extraction**: leverages Gemini directly in the frontend to analyze PDF, TXT, or Markdown files and generate comprehensive mind maps.
- **🎨 Interactive Visualization**: Built with `@xyflow/react` (React Flow), providing a smooth, draggable, and zoomable interface.
- **⚖️ Comparison Workspace**: Compare products, tools, or topics with matched options, evaluation criteria, and a linked decision map.
- **📁 Multi-Format Support**:
  - **Documents**: Upload PDF, TXT, or Markdown files for analysis.
  - **Saved Maps**: Load previously exported JSON mind maps.
  - **Hierarchical Trees**: Automatically converts standard tree-based JSON into interactive graphs.
- **💾 Save & Export**: Export your mind maps as JSON files for later use or sharing.
- **📐 Smart Layout**: Automatic node positioning for clear and organized visualizations.
- **🌑 Modern UI**: Sleek, responsive design built with Tailwind CSS and Lucide React.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Engine**: [Google Generative AI (Gemini)](https://ai.google.dev/)
- **Graph Engine**: [@xyflow/react (React Flow)](https://reactflow.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: (v18+ recommended)
- **Gemini API Key**: Get one at [Google AI Studio](https://aistudio.google.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd mind-mapper
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment**:
    Create a `.env` file in the root directory (you can copy `.env.example`):
   ```bash
   cp .env.example .env
   ```
    Add your API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start Development Server**:
    ```bash
    npm run dev
    ```

---

## 📖 Usage Guide

1. **Analyze a Document**:
    - Click "Upload Document (PDF/TXT)".
    - Select a file from your device.
    - Wait for the AI to process and generate the map.
2. **Compare Options**:
    - Switch from **Learn** to **Compare**.
    - Enter a product, tool, or topic query such as a graphics card, framework, or service.
    - Review the generated comparison workspace with recommended options, criteria, action links, and the supporting mind map.
3. **Interact with the Map**:
    - **Drag**: click and drag nodes to reorganize them.
    - **Zoom**: Use your mouse wheel or gestures to zoom in/out.
    - **Explore Details**: Nodes contain titles and AI-generated descriptions.
4. **Save/Load**:
    - Click the "Save" icon on the map to download a JSON version.
    - Use "Load Saved Map (JSON)" on the home screen to restore a previous session.

---

## 🧩 Architecture Notes

- **Frontend**: React + Vite UI with lazy-loaded wiki, workspace, and Pretext experiences.
- **Persistence**: Wiki pages, index entries, and activity logs are stored locally in IndexedDB.
- **Bundle strategy**: heavy graph, Pretext, PDF, and wiki experiences are split into separate chunks to keep the initial load lighter.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve functionality, UI, or performance.

---

<p align="center">Made with ❤️ for easier learning and knowledge mapping.</p>
