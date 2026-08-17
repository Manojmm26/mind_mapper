import { ComparisonWorkspaceData } from "../../services/llmService";

export const UI_COMPONENT_LIBRARIES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Frontend UI Component Libraries: Tailwind CSS vs Shadcn UI vs Chakra UI vs Material UI (MUI)",
  "domainType": "tools",
  "overview": "A frontend comparison evaluating component ownership, Tailwind integration, accessibility (Radix/ARIA), bundle size, and design customization.",
  "recommendedApproach": "Use Shadcn UI (Radix + Tailwind) for modern React apps wanting full code ownership; use Tailwind CSS for custom designs; use MUI or Ant Design for rapid enterprise admin dashboards.",
  "criteria": [
    {
      "id": "c1",
      "label": "Code Ownership vs NPM Package Dependency",
      "type": "text",
      "description": "Copy-paste component code directly into project vs importing locked npm package."
    },
    {
      "id": "c2",
      "label": "Design Customization & Theme Flexibility",
      "type": "text",
      "description": "Ease of styling components to match custom Figma design tokens."
    },
    {
      "id": "c3",
      "label": "Accessibility (WAI-ARIA Standards)",
      "type": "text",
      "description": "Built-in keyboard navigation, focus management, and screen reader ARIA primitives."
    },
    {
      "id": "c4",
      "label": "Client Bundle Overhead & Tree-Shaking",
      "type": "text",
      "description": "Impact on JavaScript bundle size sent to browser."
    },
    {
      "id": "c5",
      "label": "Tailwind CSS Integration",
      "type": "text",
      "description": "Native utility-first Tailwind integration out of the box."
    },
    {
      "id": "c6",
      "label": "React Server Components (RSC) Compatibility",
      "type": "text",
      "description": "Compatibility with Next.js App Router without requiring 'use client' everywhere."
    }
  ],
  "options": [
    {
      "id": "shadcn-ui",
      "name": "Shadcn UI",
      "summary": "Re-usable components built using Radix UI primitives and Tailwind CSS that you copy and paste into your apps.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "100% Code Ownership",
          "note": "CLI copies component source code directly into your src/components directory."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Unmatched Flexibility",
          "note": "Modify component JSX and Tailwind classes directly without fighting framework overrides."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (Radix UI)",
          "note": "Powered by Radix UI unstyled, accessible primitives."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Zero Extra Package Overhead",
          "note": "Only ships the exact components you copy into your project."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Native Tailwind",
          "note": "Built from the ground up around Tailwind CSS utility classes."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "100% RSC Ready",
          "note": "Designed specifically for modern Next.js and React Server Components."
        }
      },
      "tags": [
        "Shadcn",
        "Radix",
        "Tailwind",
        "Copy-Paste",
        "RSC"
      ]
    },
    {
      "id": "mui",
      "name": "Material UI (MUI v6)",
      "summary": "The comprehensive React UI component library implementing Google's Material Design.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "NPM Package",
          "note": "Imported via @mui/material package dependency."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Theme Provider",
          "note": "Customized via createTheme() object provider."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Excellent",
          "note": "Battle-tested accessible components adhering to Material Design."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Larger Bundle",
          "note": "Includes Emotion/Pigment runtime styling engine."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "MUI System",
          "note": "Uses MUI sx prop; tailwind integration requires Pigment CSS or custom setup."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Pigment CSS (MUI v6)",
          "note": "MUI v6 introduces Pigment CSS for zero-runtime RSC compatibility."
        }
      },
      "tags": [
        "MUI",
        "Material Design",
        "Enterprise",
        "Turnkey"
      ]
    },
    {
      "id": "chakra-ui",
      "name": "Chakra UI (v3)",
      "summary": "Simple, modular, and accessible component library giving you the building blocks to build React applications.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "NPM Package & Snippets",
          "note": "Chakra v3 combines npm primitives with copy-paste snippets."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Prop-Based Styling",
          "note": "Intuitive style props directly on components (e.g. <Box bg='blue.500'>)."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (Zag.js)",
          "note": "Chakra v3 leverages Zag.js state machines for flawless accessibility."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Moderate",
          "note": "Chakra v3 optimizes bundle size with zero-runtime option."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Standalone",
          "note": "Uses custom style prop system."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "RSC Compatible (v3)",
          "note": "Chakra v3 supports Next.js App Router server components."
        }
      },
      "tags": [
        "Chakra UI",
        "Zag.js",
        "Style Props",
        "Accessible"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Shadcn UI for new React/Next.js projects wanting complete control over UI component code.",
    "Use MUI for enterprise internal dashboards where Material Design standards are preferred.",
    "Ensure all interactive components (Dialogs, Dropdowns, Comboboxes) pass WAI-ARIA keyboard navigation tests."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "UI Library Selection",
        "description": "Choosing the React component library for frontend apps."
      },
      {
        "id": "p1",
        "label": "Copy-Paste Code Ownership & Tailwind",
        "description": "Want full control over component code without npm lock-in, using Radix primitives and Tailwind."
      },
      {
        "id": "p2",
        "label": "Turnkey Enterprise Material Design",
        "description": "Need comprehensive pre-built component suite following Google Material Design."
      },
      {
        "id": "p3",
        "label": "Intuitive Style Props & Zag.js Accessibility",
        "description": "Prefer prop-based styling with state-machine driven accessible primitives."
      },
      {
        "id": "e1",
        "label": "Shadcn UI",
        "description": "Copy-paste components built on Radix UI and Tailwind CSS."
      },
      {
        "id": "e2",
        "label": "Material UI (MUI)",
        "description": "Comprehensive Material Design library for React."
      },
      {
        "id": "e3",
        "label": "Chakra UI v3",
        "description": "Modular prop-based library powered by Zag.js."
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
