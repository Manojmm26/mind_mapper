import { ComparisonWorkspaceData } from "../../services/llmService";

export const MOBILE_CROSS_PLATFORM_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Mobile Cross-Platform Frameworks: Flutter vs React Native vs Kotlin Multiplatform (KMP)",
  "domainType": "tools",
  "overview": "A mobile architecture comparison evaluating Skia/Impeller rendering engine (Flutter), JSI C++ Fabric bridge (React Native), and native UI with shared Kotlin business logic (KMP).",
  "recommendedApproach": "Use Flutter for pixel-perfect custom UI across iOS & Android; use React Native for web stack reuse with native OS widgets; use KMP for native UI with shared business logic.",
  "criteria": [
    {
      "id": "c1",
      "label": "UI Rendering Architecture (Pixel Engine vs Native OS Widgets)",
      "type": "text",
      "description": "Custom Impeller/Skia canvas engine vs native iOS UIKit & Android Views."
    },
    {
      "id": "c2",
      "label": "Programming Language & Developer Ergonomics",
      "type": "text",
      "description": "Dart vs TypeScript/React vs Kotlin."
    },
    {
      "id": "c3",
      "label": "Native Module Interop & C++ Bridge (JSI)",
      "type": "text",
      "description": "Direct C++ JSI bindings without asynchronous JSON bridge delays."
    },
    {
      "id": "c4",
      "label": "Code Sharing Percentage (UI + Business Logic)",
      "type": "text",
      "description": "95%+ complete app sharing vs sharing core business logic while keeping native UIs."
    },
    {
      "id": "c5",
      "label": "Hot Reload / Fast Refresh Velocity",
      "type": "text",
      "description": "Sub-second stateful hot reload during UI layout development."
    },
    {
      "id": "c6",
      "label": "Ecosystem & Native Plugin Availability",
      "type": "text",
      "description": "Maturity of pub.dev, npm, and Maven central plugin packages."
    }
  ],
  "options": [
    {
      "id": "flutter",
      "name": "Flutter (Google)",
      "summary": "Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Impeller / Skia Canvas",
          "note": "Renders every pixel directly via custom Impeller GPU engine, guaranteeing identical UI across iOS and Android."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Dart Language",
          "note": "Strongly-typed Dart language with sound null safety and declarative widget trees."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Platform Channels & FFI",
          "note": "Platform channels and dart:ffi for direct C/C++ native invocation."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "95%+ Single Codebase",
          "note": "Share complete UI, animations, themes, and business logic across mobile, web, and desktop."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class Stateful Hot Reload",
          "note": "Sub-second stateful hot reload preserves app state while tweaking UI."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Pub.dev Ecosystem",
          "note": "Extensive pub.dev library ecosystem for camera, Bluetooth, and maps."
        }
      },
      "tags": [
        "Flutter",
        "Dart",
        "Impeller",
        "Google",
        "Cross-Platform"
      ]
    },
    {
      "id": "react-native",
      "name": "React Native (New Architecture)",
      "summary": "Meta's framework for building native mobile apps using React and JavaScript.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Native OS Widgets (Fabric)",
          "note": "Renders authentic native iOS (UIKit) and Android (Views) components via Fabric renderer."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "TypeScript & React",
          "note": "Reuse web developer skills, React hooks, and npm packages."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "JavaScript Interface (JSI)",
          "note": "New Architecture eliminates old JSON bridge; JSI provides zero-latency synchronous C++ bindings."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "80-90% Shared Code",
          "note": "Shares logic and React components; platform-specific UI tweaks where needed."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Fast Refresh",
          "note": "Instant React Fast Refresh experience."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Massive NPM Ecosystem",
          "note": "Massive npm ecosystem backed by Meta, Expo, and community."
        }
      },
      "tags": [
        "React Native",
        "TypeScript",
        "React",
        "Fabric",
        "Expo"
      ]
    },
    {
      "id": "kmp",
      "name": "Kotlin Multiplatform (KMP)",
      "summary": "JetBrains technology allowing you to share code across platforms while keeping native UIs.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "100% Native UI (SwiftUI / Jetpack)",
          "note": "Build native SwiftUI for iOS and native Jetpack Compose for Android (Compose Multiplatform optionally shares UI)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Kotlin Language",
          "note": "Modern Kotlin language loved by Android engineers."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Direct Kotlin/Native",
          "note": "Compiles to native iOS binaries without interop bridges."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Shared Business Logic",
          "note": "Shares networking, database, state, and domain logic while preserving 100% native UI performance."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Native Hot Reload",
          "note": "Native Xcode and Android Studio compilation velocity."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "JetBrains & Android Core",
          "note": "Official Google backing for Kotlin Multiplatform."
        }
      },
      "tags": [
        "KMP",
        "Kotlin",
        "SwiftUI",
        "Jetpack Compose",
        "Native UI"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Flutter for fast product delivery with custom, pixel-identical UI designs.",
    "Choose React Native for teams with strong React/Web skills using Expo.",
    "Choose Kotlin Multiplatform (KMP) for mobile apps requiring 100% native SwiftUI and Jetpack Compose UIs."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Mobile Framework Selection",
        "description": "Choosing the cross-platform mobile technology stack."
      },
      {
        "id": "p1",
        "label": "Pixel-Identical Canvas Engine & Fast Hot Reload",
        "description": "Need 95%+ code sharing with custom Impeller GPU rendering across iOS and Android."
      },
      {
        "id": "p2",
        "label": "React Ecosystem & Native OS Widgets",
        "description": "Need TypeScript, React hooks, and JSI synchronous C++ bindings with Expo."
      },
      {
        "id": "p3",
        "label": "100% Native SwiftUI / Jetpack Compose UIs",
        "description": "Need to share Kotlin business logic while maintaining pure native platform UIs."
      },
      {
        "id": "e1",
        "label": "Flutter",
        "description": "Google UI toolkit with Impeller rendering."
      },
      {
        "id": "e2",
        "label": "React Native",
        "description": "Meta React framework with JSI New Architecture."
      },
      {
        "id": "e3",
        "label": "Kotlin Multiplatform (KMP)",
        "description": "JetBrains shared business logic with native UIs."
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
