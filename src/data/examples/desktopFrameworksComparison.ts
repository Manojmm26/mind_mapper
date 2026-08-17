import { ComparisonWorkspaceData } from "../../services/llmService";

export const DESKTOP_FRAMEWORKS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Cross-Platform Desktop Frameworks: Electron vs Tauri vs Flutter Desktop vs Qt / C++",
  "domainType": "tools",
  "overview": "A comparative evaluation of cross-platform desktop application technologies evaluating RAM footprint, binary executable size, web tech integration, native OS IPC, and security.",
  "recommendedApproach": "Use Tauri for modern web tech desktop apps requiring low RAM and small binary footprint; use Electron for maximum Node.js ecosystem compatibility; use Qt / C++ for CAD, media editing, or hardware control.",
  "criteria": [
    {
      "id": "c1",
      "label": "RAM Footprint & System Resource Usage",
      "type": "text",
      "description": "Idle memory consumption (150MB Chromium vs 15MB OS WebView)."
    },
    {
      "id": "c2",
      "label": "Executable Binary Download Size",
      "type": "text",
      "description": "Installer size (80MB bundled Chromium vs 3MB native webview binary)."
    },
    {
      "id": "c3",
      "label": "Web Technology Stack Integration",
      "type": "text",
      "description": "Ease of reusing HTML, CSS, React, Vue, or Svelte web codebases."
    },
    {
      "id": "c4",
      "label": "Backend System IPC & Native Capabilities",
      "type": "text",
      "description": "Native OS system APIs, filesystem access, thread isolation, and IPC security."
    },
    {
      "id": "c5",
      "label": "Core Implementation Language",
      "type": "text",
      "description": "Node.js JavaScript runtime vs Rust backend vs C++ Qt framework."
    },
    {
      "id": "c6",
      "label": "Community Ecosystem & Production Proven",
      "type": "text",
      "description": "Used by top desktop applications (VS Code, Slack, Obsidian, 1Password)."
    }
  ],
  "options": [
    {
      "id": "electron",
      "name": "Electron",
      "summary": "The pioneer framework bundling Chromium and Node.js to build desktop apps with JavaScript.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Heavy (~150MB+ idle)",
          "note": "Bundles full Chromium browser and Node.js runtime per application instance."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Large (~80-120MB)",
          "note": "Includes entire Chromium binary in every installer package."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class",
          "note": "Reuses 100% of web frontend code, React/Vue components, and npm packages."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Node.js IPC",
          "note": "Main and Renderer process IPC bridge; requires strict contextBridge isolation."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Node.js / JavaScript",
          "note": "Full access to Node.js native C++ addons and npm ecosystem."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Dominant Standard",
          "note": "Powers VS Code, Slack, Discord, Figma Desktop, and Teams."
        }
      },
      "tags": [
        "Chromium",
        "Node.js",
        "VS Code",
        "Dominant"
      ]
    },
    {
      "id": "tauri",
      "name": "Tauri (v2)",
      "summary": "Lightweight, secure framework using native OS WebViews and Rust backend.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Ultra-Light (~15-30MB)",
          "note": "Uses native OS WebView (WebKit on macOS, WebView2 on Windows)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Tiny (~3-10MB)",
          "note": "Minimal installer size because browser engine is provided by the OS."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class",
          "note": "Works with any web frontend (React, Vue, Svelte, Vite, Solid)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Rust IPC Safety",
          "note": "Type-safe IPC commands invoked directly from JS to Rust backend functions."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Rust + OS WebViews",
          "note": "Rust memory safety and concurrency powering system-level features (Tauri v2 adds iOS/Android)."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Rapidly Growing",
          "note": "Powers 1Password 8, GitButler, and modern developer desktop tools."
        }
      },
      "tags": [
        "Rust",
        "Tiny Binary",
        "Low RAM",
        "Tauri v2"
      ]
    },
    {
      "id": "flutter-desktop",
      "name": "Flutter Desktop",
      "summary": "Google's UI framework rendering desktop views via custom Impeller/Skia 2D canvas.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Moderate (~50MB)",
          "note": "Runs standalone Dart VM and Impeller rendering engine."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Medium (~25-40MB)",
          "note": "Bundles Skia/Impeller graphics engine and Dart runtime."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Custom Widgets",
          "note": "Renders custom Dart widget tree rather than standard web DOM."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Platform Channels",
          "note": "Communicates with C++/Objective-C native desktop APIs via FFI."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Dart",
          "note": "Single Dart codebase targeting Web, Mobile, macOS, Windows, Linux."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Good",
          "note": "Popular for multi-platform mobile+desktop unified apps (Ubuntu installer, Canonical)."
        }
      },
      "tags": [
        "Dart",
        "Impeller",
        "Unified Code",
        "Google"
      ]
    },
    {
      "id": "qt-cpp",
      "name": "Qt / C++",
      "summary": "The industrial-grade native framework for high-performance graphic applications.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Lowest Footprint",
          "note": "Direct compiled C++ machine code execution with minimal overhead."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Medium",
          "note": "Requires bundling Qt library DLLs / shared frameworks."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "QML / C++",
          "note": "Uses QML or C++ native widgets instead of web HTML/CSS."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Unrestricted Native",
          "note": "Direct access to OS hardware, GPU memory, OpenGL/Vulkan, and C++ libraries."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "C++ / QML",
          "note": "High-performance compiled C++ with QML declarative UI layer."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Industrial Standard",
          "note": "Standard for Adobe Creative Cloud components, Autodesk, CAD, and automotive UI."
        }
      },
      "tags": [
        "C++",
        "Industrial",
        "GPU",
        "High-Performance"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Tauri v2 if building a modern web-tech desktop app and RAM/installer size matter.",
    "Choose Electron if your app depends heavily on complex Node.js native C++ modules.",
    "Choose Qt / C++ if building CAD software, digital audio workstations (DAW), or 3D graphics suites.",
    "Benchmark idle RAM consumption across Windows and macOS target platforms."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Desktop Framework Selection",
        "description": "Choosing the cross-platform framework for desktop applications."
      },
      {
        "id": "p1",
        "label": "Web Stack + Minimal RAM & Size",
        "description": "Reusing HTML/React/Vite with lightweight 5MB installer and native OS webview."
      },
      {
        "id": "p2",
        "label": "Web Stack + Deep Node.js Ecosystem",
        "description": "Need battle-tested Electron capabilities and full Node.js npm packages."
      },
      {
        "id": "p3",
        "label": "Unified Mobile + Desktop Codebase",
        "description": "Building mobile and desktop apps simultaneously using a single Dart codebase."
      },
      {
        "id": "p4",
        "label": "Max Native GPU Performance (C++)",
        "description": "Building 3D CAD, video editors, or audio processing software requiring raw C++ speed."
      },
      {
        "id": "e1",
        "label": "Tauri v2",
        "description": "Lightweight Rust backend using native OS WebViews."
      },
      {
        "id": "e2",
        "label": "Electron",
        "description": "Chromium + Node.js pioneer powering VS Code and Slack."
      },
      {
        "id": "e3",
        "label": "Flutter Desktop",
        "description": "Dart 2D canvas rendering engine for multi-platform apps."
      },
      {
        "id": "e4",
        "label": "Qt / C++",
        "description": "Industrial compiled C++ framework for high-performance desktop software."
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
        "source": "root",
        "target": "p4"
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
      },
      {
        "source": "p4",
        "target": "e4"
      }
    ]
  }
};
