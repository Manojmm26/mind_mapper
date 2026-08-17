import { ComparisonWorkspaceData } from "../../services/llmService";

export const GAME_ENGINES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Cross-Platform Game Engines: Unreal Engine 5 vs Unity vs Godot 4 vs Bevy (Rust)",
  "domainType": "tools",
  "overview": "A game architecture comparison evaluating rendering engines (Nanite/Lumen), 2D/3D capabilities, scripting languages (C++, C#, GDScript, Rust), and licensing.",
  "recommendedApproach": "Use Unreal Engine 5 for AAA photorealistic 3D games; use Unity for cross-platform mobile 3D/2D; use Godot 4 for lightweight open-source 2D/3D games; use Bevy for Rust ECS experiments.",
  "criteria": [
    {
      "id": "c1",
      "label": "Photorealistic 3D Rendering (Nanite / Lumen)",
      "type": "text",
      "description": "Virtual geometry, dynamic global illumination, and real-time ray tracing."
    },
    {
      "id": "c2",
      "label": "2D & Lightweight Mobile Optimization",
      "type": "text",
      "description": "Fast startup, small binary export, and 2D sprite/tilemap engines."
    },
    {
      "id": "c3",
      "label": "Scripting Language & Developer Ergonomics",
      "type": "text",
      "description": "C++ / Blueprints vs C# vs GDScript vs Rust ECS."
    },
    {
      "id": "c4",
      "label": "Entity Component System (ECS) Architecture",
      "type": "text",
      "description": "Data-oriented design for rendering tens of thousands of active game entities."
    },
    {
      "id": "c5",
      "label": "Licensing Model & Royalty Revenue Share",
      "type": "text",
      "description": "5% royalty over $1M (Unreal) vs MIT open-source (Godot/Bevy) vs seat license (Unity)."
    },
    {
      "id": "c6",
      "label": "Asset Store & Plugin Ecosystem",
      "type": "text",
      "description": "Availability of 3D models, shaders, animations, and middleware."
    }
  ],
  "options": [
    {
      "id": "unreal-engine",
      "name": "Unreal Engine 5",
      "summary": "The premier AAA game engine pushing photorealistic 3D graphics with Nanite and Lumen.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Unmatched (Nanite & Lumen)",
          "note": "Nanite virtualized geometry and Lumen real-time global illumination lead the industry."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Heavy",
          "note": "Heavy engine footprint; optimized for high-end PC, PS5, Xbox Series X, and cinematic film."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "C++ & Blueprints",
          "note": "Visual Blueprints scripting combined with C++ for high performance."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Mass Entity System",
          "note": "Mass Framework provides data-oriented processing for massive crowds."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "5% Royalty over $1M",
          "note": "Free to use until game gross revenue exceeds $1,000,000 USD."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Best-in-Class (Fab Marketplace)",
          "note": "Fab Marketplace provides Megascans 3D assets and photorealistic environments."
        }
      },
      "tags": [
        "Unreal 5",
        "AAA",
        "Nanite",
        "Lumen",
        "Photorealistic"
      ]
    },
    {
      "id": "unity",
      "name": "Unity",
      "summary": "The dominant cross-platform engine for mobile, indie 2D/3D games, and VR/AR.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High (HDRP / URP)",
          "note": "High Definition Render Pipeline (HDRP) and Universal Render Pipeline (URP)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Outstanding Mobile Standard",
          "note": "Powers over 50% of top mobile games across iOS and Android."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "C# Scripting",
          "note": "C# language offers great balance of speed, safety, and developer productivity."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Unity DOTS (ECS)",
          "note": "Data-Oriented Technology Stack (DOTS / Burst Compiler) for high-entity performance."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Seat License / Runtime Fee",
          "note": "Unity Personal (free) -> Unity Pro subscription tiers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Massive Unity Asset Store",
          "note": "Thousands of ready-to-use tools, art assets, and gameplay kits."
        }
      },
      "tags": [
        "Unity",
        "C#",
        "Mobile Leader",
        "VR / AR"
      ]
    },
    {
      "id": "godot",
      "name": "Godot 4",
      "summary": "Free, open-source 2D and 3D game engine with a dedicated lightweight editor.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Very Good (Vulkan)",
          "note": "Godot 4 introduces modern Vulkan renderer with SDFGI global illumination."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class 2D",
          "note": "Dedicated 2D engine pipeline with pixel-perfect node trees."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "GDScript & C#",
          "note": "Python-like GDScript language is intuitive; C# supported via .NET."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Node-Tree Architecture",
          "note": "Organized into hierarchical Scene Node trees rather than pure ECS."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Free (MIT License)",
          "note": "Zero royalties, zero subscription fees; you own your code completely."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Rapidly Growing",
          "note": "Active community asset library and growing indie developer adoption."
        }
      },
      "tags": [
        "Godot",
        "MIT License",
        "Open-Source",
        "GDScript"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Unreal Engine 5 for AAA photorealistic 3D PC/Console games.",
    "Choose Unity for cross-platform mobile games, VR/AR, and general indie 3D.",
    "Choose Godot 4 for 100% open-source, royalty-free 2D/3D indie games.",
    "Prototype game mechanics early to validate rendering pipeline performance."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Game Engine Selection",
        "description": "Choosing the game development engine and tech stack."
      },
      {
        "id": "p1",
        "label": "AAA Photorealistic 3D PC / Console",
        "description": "Need virtualized Nanite geometry, Lumen real-time lighting, and visual Blueprints."
      },
      {
        "id": "p2",
        "label": "Cross-Platform Mobile 2D/3D & VR/AR",
        "description": "Need battle-tested C# engine with top mobile market share and Asset Store."
      },
      {
        "id": "p3",
        "label": "Royalty-Free Open-Source 2D & Indie 3D",
        "description": "Need lightweight 100% MIT-licensed engine with intuitive GDScript."
      },
      {
        "id": "e1",
        "label": "Unreal Engine 5",
        "description": "AAA photorealistic 3D engine with Nanite and Lumen."
      },
      {
        "id": "e2",
        "label": "Unity",
        "description": "C#-powered mobile and VR/AR leader."
      },
      {
        "id": "e3",
        "label": "Godot 4",
        "description": "Lightweight MIT open-source 2D and 3D engine."
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
