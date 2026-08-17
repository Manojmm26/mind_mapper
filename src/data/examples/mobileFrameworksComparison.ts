import { ComparisonWorkspaceData } from "../../services/llmService";

export const MOBILE_FRAMEWORKS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Cross-Platform Mobile Frameworks: React Native vs Flutter vs Native (Swift/Kotlin) vs Capacitor",
  "domainType": "approaches",
  "overview": "A strategic comparison of mobile app development technologies evaluating UI performance, native API integration, code reuse, developer velocity, and ecosystem stability.",
  "recommendedApproach": "Use React Native for web teams leveraging React skills; use Flutter for custom pixel-perfect UI design systems; use Swift/Kotlin Native for high-performance graphics, AR, or low-level iOS/Android features.",
  "criteria": [
    {
      "id": "c1",
      "label": "UI Rendering Architecture & FPS",
      "type": "text",
      "description": "Native platform widgets vs Skia / Impeller custom canvas engine vs Webview."
    },
    {
      "id": "c2",
      "label": "Native Device API Access & Modules",
      "type": "text",
      "description": "Ease of bridging Bluetooth, Camera, Biometrics, and Background location."
    },
    {
      "id": "c3",
      "label": "Developer Velocity & Hot Reload",
      "type": "text",
      "description": "Fast refresh speed and iteration cycle efficiency."
    },
    {
      "id": "c4",
      "label": "Web Code Reuse & Ecosystem",
      "type": "text",
      "description": "Ability to share business logic and components with web applications."
    },
    {
      "id": "c5",
      "label": "App Bundle Size & Startup Time",
      "type": "text",
      "description": "Initial binary download size and cold launch time."
    },
    {
      "id": "c6",
      "label": "Long-Term Vendor & Community Support",
      "type": "text",
      "description": "Backing by Meta, Google, Apple/Google, or Ionic community."
    }
  ],
  "options": [
    {
      "id": "react-native",
      "name": "React Native (New Architecture)",
      "summary": "Meta's framework rendering real native iOS/Android views using JavaScript/TypeScript and React.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "60-120 FPS Native",
          "note": "New Architecture (Fabric + JSI) eliminates bridge serialization bottlenecks."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Outstanding (Expo)",
          "note": "Expo SDK provides ready-to-use native modules for almost all device features."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class",
          "note": "Fast Refresh updates UI instantly while maintaining React component state."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "High",
          "note": "Share TypeScript logic, Zustand stores, and React Query hooks with web apps."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Small to Medium",
          "note": "Hermes engine optimizes JavaScript bytecode compilation for fast startup."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Massive (Meta + Expo)",
          "note": "Backed by Meta and heavily accelerated by Expo ecosystem."
        }
      },
      "tags": [
        "React",
        "TypeScript",
        "Expo",
        "Native UI"
      ]
    },
    {
      "id": "flutter",
      "name": "Flutter (Dart)",
      "summary": "Google's UI toolkit that draws every pixel using its custom Impeller 2D rendering engine.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "60-120 FPS (Impeller)",
          "note": "Impeller rendering engine avoids shader compilation stutter."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good",
          "note": "pub.dev package registry contains extensive platform channels."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Excellent",
          "note": "Stateful Hot Reload allows instant visual tweaks."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Moderate",
          "note": "Flutter Web renders via WebAssembly/Canvas, separate from traditional DOM."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Slightly Larger",
          "note": "Includes bundled Impeller engine inside every app binary (~15-20MB base)."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Strong (Google)",
          "note": "Backed by Google with a passionate global community."
        }
      },
      "tags": [
        "Dart",
        "Impeller",
        "Custom UI",
        "Google"
      ]
    },
    {
      "id": "native",
      "name": "Native (Swift / SwiftUI & Kotlin / Jetpack Compose)",
      "summary": "Building separate native applications using official platform languages and IDEs.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Flawless",
          "note": "Direct access to Apple Metal and Android SurfaceFlinger hardware acceleration."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% Zero Delay",
          "note": "Instant zero-day support for new iOS and Android OS features."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Moderate",
          "note": "SwiftUI and Jetpack Compose previews are fast, but full builds take time."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Zero (except KMP)",
          "note": "Kotlin Multiplatform (KMP) allows logic sharing, but UI is separate."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Minimal",
          "note": "Smallest possible binary sizes and fastest cold start performance."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Official (Apple & Google)",
          "note": "Direct first-party support from Apple and Google."
        }
      },
      "tags": [
        "SwiftUI",
        "Jetpack Compose",
        "First-Party",
        "Performance"
      ]
    },
    {
      "id": "capacitor",
      "name": "Capacitor / Ionic",
      "summary": "Wraps modern web applications (React, Vue, Angular) inside a native WebView container.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "WebView Dependent",
          "note": "Performance relies on mobile browser engine (WKWebView / Chrome)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Good",
          "note": "Capacitor plugins bridge JavaScript calls to native Swift/Java code."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Excellent",
          "note": "Live reload works directly in standard web browsers."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "100% Web Code Sharing",
          "note": "Deploy the exact same web app codebase directly to iOS and Android."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Small",
          "note": "Extremely small wrapper since WebView is built into the mobile OS."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Solid (Ionic)",
          "note": "Maintained by Ionic/OutSystems for enterprise web-to-mobile projects."
        }
      },
      "tags": [
        "WebView",
        "Ionic",
        "100%-Web-Share",
        "Capacitor"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Assess existing team skills: Web/React -> React Native; Dart/Design-System -> Flutter; iOS/Android specialists -> Native.",
    "Determine if app requires heavy background processing, AR, or custom Bluetooth protocols (points to Native/React Native).",
    "Evaluate Expo framework for React Native to simplify builds and OTA updates.",
    "Prototype a target complex screen and benchmark FPS on low-end Android devices."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Mobile Technology Decision",
        "description": "Selecting the mobile development framework for iOS and Android."
      },
      {
        "id": "p1",
        "label": "React & Web Team Ecosystem",
        "description": "Want to leverage JavaScript/TypeScript and React ecosystem with native performance."
      },
      {
        "id": "p2",
        "label": "Custom Pixel-Perfect UI & Animation",
        "description": "Need complete control over every pixel with high 120 FPS performance."
      },
      {
        "id": "p3",
        "label": "Maximum Performance & Platform APIs",
        "description": "Building graphics-intensive, AR, or deep hardware-integrated mobile apps."
      },
      {
        "id": "p4",
        "label": "100% Web Codebase Reuse",
        "description": "Packaging an existing web application directly into app stores."
      },
      {
        "id": "e1",
        "label": "React Native (Expo)",
        "description": "Native UI views rendered via React & JavaScript engine."
      },
      {
        "id": "e2",
        "label": "Flutter",
        "description": "Custom Impeller 2D canvas rendering engine powered by Dart."
      },
      {
        "id": "e3",
        "label": "Native (SwiftUI & Compose)",
        "description": "Official first-party platform development with zero abstraction overhead."
      },
      {
        "id": "e4",
        "label": "Capacitor / Ionic",
        "description": "WebView container deploying responsive web apps as native apps."
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
