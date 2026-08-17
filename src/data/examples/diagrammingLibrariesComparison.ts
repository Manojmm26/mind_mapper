import { ComparisonWorkspaceData } from "../../services/llmService";

export const DIAGRAMMING_LIBRARIES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Frontend Diagram & Visualization Libraries: React Flow vs D3.js vs Mermaid.js vs Excalidraw",
  "domainType": "tools",
  "overview": "A frontend UI comparison evaluating node-based graph editors (React Flow), low-level data visualization (D3.js), markdown-based diagram rendering (Mermaid.js), and hand-drawn canvas elements (Excalidraw).",
  "recommendedApproach": "Use React Flow for building interactive node-based mind maps, workflows, and graph editors; use D3.js for custom mathematical data charts; use Mermaid.js for markdown diagrams.",
  "criteria": [
    {
      "id": "c1",
      "label": "Interactive Node Dragging & Graph Editing",
      "type": "text",
      "description": "Built-in interactive node dragging, zooming, panning, and edge connector routing."
    },
    {
      "id": "c2",
      "label": "Custom React Node Component Rendering",
      "type": "text",
      "description": "Rendering custom React JSX components inside graph nodes with full state reactivity."
    },
    {
      "id": "c3",
      "label": "Low-Level Math & Data Binding Power",
      "type": "text",
      "description": "Custom SVG path calculations, scale linear transformations, and data joins."
    },
    {
      "id": "c4",
      "label": "Markdown / Text-to-Diagram Conversion",
      "type": "text",
      "description": "Parsing plain text markdown strings into visual sequence/flow diagrams automatically."
    },
    {
      "id": "c5",
      "label": "Hand-Drawn Sketch Aesthetic (Rough.js)",
      "type": "text",
      "description": "Rough hand-drawn wireframe visual aesthetic."
    },
    {
      "id": "c6",
      "label": "Client Bundle Size & Learning Curve",
      "type": "text",
      "description": "Library footprint and developer API complexity."
    }
  ],
  "options": [
    {
      "id": "react-flow",
      "name": "React Flow (xyflow)",
      "summary": "Highly customizable React library for building interactive node-based UIs and workflow editors.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class Interactive",
          "note": "Out-of-the-box smooth panning, pinch-to-zoom, node drag-and-drop, and edge reconnectors."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% React Native",
          "note": "Nodes are standard React components; full support for Tailwind CSS, hooks, and inputs."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Graph Focused",
          "note": "Built specifically for node-edge network graphs and workflows."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Programmatic Layouts",
          "note": "Integrates with Dagre, Elkjs, or D3-hierarchy for auto-layout algorithm."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Modern Clean UI",
          "note": "Sleek modern UI with dark mode support."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Intuitive API",
          "note": "Uses standard useNodesState and useEdgesState React hooks."
        }
      },
      "tags": [
        "React Flow",
        "xyflow",
        "Interactive Nodes",
        "Workflows",
        "Mind Maps"
      ]
    },
    {
      "id": "d3-js",
      "name": "D3.js (Data-Driven Documents)",
      "summary": "The premier low-level JavaScript library for manipulating documents based on data using SVG, Canvas, and HTML.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Custom Implementation",
          "note": "Requires manual event listener code for dragging and zoom behaviors."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Direct DOM / SVG",
          "note": "Manipulates raw SVG DOM elements directly; requires careful integration with React state."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Unmatched Low-Level Power",
          "note": "Industry gold standard for custom physics force simulations, scales, and complex charts."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Data Bound",
          "note": "Binds raw data arrays to SVG elements via enter/update/exit pattern."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Vector SVG",
          "note": "Scalable Vector Graphics (SVG) and HTML5 Canvas rendering."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Steep Learning Curve",
          "note": "Requires deep understanding of SVG math and D3 scale transformations."
        }
      },
      "tags": [
        "D3.js",
        "Low-Level",
        "SVG Math",
        "Data Visualization"
      ]
    },
    {
      "id": "mermaid",
      "name": "Mermaid.js",
      "summary": "JavaScript based diagramming and charting tool that uses Markdown-inspired text definitions.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Static Rendered SVG",
          "note": "Renders static SVG diagrams from text strings; limited node dragging interactivity."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Text Defined",
          "note": "Nodes defined via text syntax (e.g. A[Square] --> B(Circle))."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Automated Layout",
          "note": "Uses Dagre layout engine to auto-arrange text diagrams."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class (Text-to-Diagram)",
          "note": "Directly renders markdown string definitions into flowcharts, sequence diagrams, and Gantt charts."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Clean Technical Specs",
          "note": "Standard technical documentation diagram look."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Zero Learning Curve",
          "note": "Simple text syntax used directly in GitHub and Notion markdown."
        }
      },
      "tags": [
        "Mermaid.js",
        "Text-to-Diagram",
        "Markdown",
        "Documentation"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose React Flow for building interactive node-based mind mapping applications and workflow builders.",
    "Choose D3.js for custom mathematical chart visualizations and force-directed network graphs.",
    "Choose Mermaid.js for rendering markdown text diagrams inside documentation hubs."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Diagram Library Selection",
        "description": "Choosing the frontend graph and diagramming library."
      },
      {
        "id": "p1",
        "label": "Interactive Node Drag-and-Drop Workflow Builder",
        "description": "Need interactive node dragging, zooming, edge routing, and custom React JSX components."
      },
      {
        "id": "p2",
        "label": "Low-Level Custom Math & Data Charting",
        "description": "Need raw SVG path calculations, scale transformations, and custom physics simulation."
      },
      {
        "id": "p3",
        "label": "Markdown Text-to-Diagram Documentation",
        "description": "Need to render sequence and flow diagrams automatically from plain text strings."
      },
      {
        "id": "e1",
        "label": "React Flow",
        "description": "React-native interactive node-edge graph and workflow builder."
      },
      {
        "id": "e2",
        "label": "D3.js",
        "description": "Low-level data visualization engine for custom SVG charts."
      },
      {
        "id": "e3",
        "label": "Mermaid.js",
        "description": "Markdown text-to-diagram rendering engine."
      }
    ],
    "edges": [
      {
        "source": "root",
        "target": "p1"
      },
      {
        "source": "root",
        "target": "p2"
      },
      {
        "source": "root",
        "target": "p3"
      },
      {
        "source": "p1",
        "target": "e1"
      },
      {
        "source": "p2",
        "target": "e2"
      },
      {
        "source": "p3",
        "target": "e3"
      }
    ]
  }
};
