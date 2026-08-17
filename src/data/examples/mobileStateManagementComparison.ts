import { ComparisonWorkspaceData } from "../../services/llmService";

export const MOBILE_STATE_MANAGEMENT_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Mobile App State Management: Riverpod vs Bloc (Flutter) vs Redux Toolkit vs MobX",
  "domainType": "concepts",
  "overview": "A mobile application architecture comparison evaluating reactive state management patterns, compile-time safety, boilerplate code reduction, testability, and UI decoupling in Flutter and React Native.",
  "recommendedApproach": "Use Riverpod for compile-safe, zero-context Flutter state management; use BLoC for strict event-driven Flutter enterprise architectures; use Redux Toolkit for React Native.",
  "criteria": [
    {
      "id": "c1",
      "label": "Compile-Time Type Safety & Lint Rules",
      "type": "text",
      "description": "Catching state provider errors at compile-time vs runtime BuildContext failures."
    },
    {
      "id": "c2",
      "label": "Boilerplate Code Overhead",
      "type": "text",
      "description": "Amount of code required to declare state events, states, and reducers."
    },
    {
      "id": "c3",
      "label": "Unidirectional Data Flow & Event Driven",
      "type": "text",
      "description": "Strict Event -> State stream mapping vs reactive signal updates."
    },
    {
      "id": "c4",
      "label": "Unit Testability & Mocking",
      "type": "text",
      "description": "Testing state logic independently without mounting widget trees."
    },
    {
      "id": "c5",
      "label": "BuildContext Autonomy",
      "type": "text",
      "description": "Accessing state outside widget trees (in services, background tasks, or push notifications)."
    },
    {
      "id": "c6",
      "label": "Ecosystem & Flutter / React Native Alignment",
      "type": "text",
      "description": "Dominant state pattern in Flutter or React Native communities."
    }
  ],
  "options": [
    {
      "id": "riverpod",
      "name": "Riverpod 2.x (Flutter)",
      "summary": "A compile-safe, reactive state management library for Flutter that doesn't depend on BuildContext.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Compile Safe)",
          "note": "Catches provider errors at compile time; custom riverpod_generator code-gen."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Minimal (@riverpod)",
          "note": "Code generator reduces boilerplate to simple annotated functions."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Reactive Signals",
          "note": "Declarative ref.watch() automatically recalculates dependent state."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Outstanding",
          "note": "Override providers instantly inside ProviderContainer for isolated unit tests."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Context Free",
          "note": "Access state anywhere without requiring BuildContext."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Flutter Standard",
          "note": "Created by Remi Rousselet (creator of Provider) as its modern evolution."
        }
      },
      "tags": [
        "Riverpod",
        "Flutter",
        "Compile-Safe",
        "Context-Free"
      ]
    },
    {
      "id": "bloc",
      "name": "BLoC Pattern (Flutter)",
      "summary": "Predictable state management library for Dart/Flutter enforcing separation of presentation from business logic.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Strong",
          "note": "Strict event classes and state classes enforced by Dart type system."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Higher Boilerplate",
          "note": "Requires defining Event, State, and Bloc classes for each feature."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Strict Event-Driven Stream",
          "note": "Explicitly maps incoming Events to outgoing States via async transform streams."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "bloc_test Library",
          "note": "bloc_test package provides structured BLoC unit testing harness."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Requires Context / GetIt",
          "note": "Uses BlocProvider and context.read<T>() to access BLoCs in widget tree."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Enterprise Standard",
          "note": "Widely adopted across large enterprise Flutter apps for strict team structure."
        }
      },
      "tags": [
        "BLoC",
        "Flutter",
        "Event-Driven",
        "Enterprise"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Riverpod for modern Flutter apps wanting compile-safe, low-boilerplate state management.",
    "Choose BLoC for enterprise Flutter teams enforcing strict Event -> State separation.",
    "Write isolated unit tests for state providers/BLoCs before mounting UI widgets."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Mobile State Selection",
        "description": "Choosing the state management pattern for mobile apps."
      },
      {
        "id": "p1",
        "label": "Compile-Safe Reactive Context-Free State (Flutter)",
        "description": "Need compile-time safety, minimal boilerplate, and context-free state access using Riverpod."
      },
      {
        "id": "p2",
        "label": "Strict Event-Driven BLoC Stream Architecture (Flutter)",
        "description": "Need explicit Event -> State stream mapping for large enterprise Flutter engineering teams."
      },
      {
        "id": "e1",
        "label": "Riverpod",
        "description": "Compile-safe reactive state library for Flutter."
      },
      {
        "id": "e2",
        "label": "BLoC Pattern",
        "description": "Strict event-driven stream state architecture for Flutter."
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
        "source": "p1",
        "target": "e1"
      },
      {
        "source": "p2",
        "target": "e2"
      }
    ]
  }
};
