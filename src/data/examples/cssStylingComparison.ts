import { ComparisonWorkspaceData } from "../../services/llmService";

export const CSS_STYLING_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "CSS Architectures & Styling: Tailwind CSS vs CSS Modules vs Styled Components vs Zero-Runtime CSS-in-JS",
  "domainType": "approaches",
  "overview": "A practical frontend comparison evaluating modern styling approaches across runtime performance, developer velocity, design system enforcement, and build tooling.",
  "recommendedApproach": "Use Tailwind CSS v4 for maximum developer velocity and utility-first design consistency; use CSS Modules for scoped vanilla CSS without runtime overhead; use Zero-Runtime CSS-in-JS for type-safe design tokens.",
  "criteria": [
    {
      "id": "c1",
      "label": "Runtime Performance & Bundle Overhead",
      "type": "text",
      "description": "Zero runtime JS evaluation vs runtime style injection overhead."
    },
    {
      "id": "c2",
      "label": "Developer Velocity & Iteration Speed",
      "type": "text",
      "description": "Speed of styling components without switching between files."
    },
    {
      "id": "c3",
      "label": "Design System & Token Enforcement",
      "type": "text",
      "description": "Restricting arbitrary CSS values to curated theme tokens."
    },
    {
      "id": "c4",
      "label": "Scoped Styling & Name Collision Avoidance",
      "type": "text",
      "description": "Automatic scoping preventing global CSS specificity leaks."
    },
    {
      "id": "c5",
      "label": "React Server Components (RSC) Compatibility",
      "type": "text",
      "description": "Compatibility with Next.js App Router and server rendering."
    },
    {
      "id": "c6",
      "label": "Dynamic Props & Theme Switching",
      "type": "text",
      "description": "Flexibility when injecting dynamic JS variables into CSS properties."
    }
  ],
  "options": [
    {
      "id": "tailwind",
      "name": "Tailwind CSS (v4)",
      "summary": "Utility-first CSS framework providing composable, atomic classes generated at build time.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Zero Runtime",
          "note": "Compiles to minimal static CSS; tree-shakes unused classes via Lightning CSS engine."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class",
          "note": "Style elements directly inside HTML/JSX without context-switching files."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Outstanding",
          "note": "Strict theme tokens (colors, spacing, typography) enforced out of the box."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Atomic Scoping",
          "note": "Utility classes prevent custom class name collisions."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Compatible",
          "note": "Pure static CSS works flawlessly with React Server Components (RSC)."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Good",
          "note": "Dynamic values handled via inline styles or CSS variables alongside utilities."
        }
      },
      "tags": [
        "Utility-First",
        "Zero-Runtime",
        "RSC-Safe",
        "Standard"
      ]
    },
    {
      "id": "css-modules",
      "name": "CSS Modules",
      "summary": "Scoped vanilla CSS approach where class names are scoped locally to individual components.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Zero Runtime",
          "note": "Standard static CSS files loaded efficiently by the browser."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Good",
          "note": "Familiar standard CSS syntax, though requires separate .module.css files."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Manual (CSS Variables)",
          "note": "Enforced via custom CSS custom properties (:root variables)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "100% Scoped",
          "note": "Build tool hashes class names (e.g. Button_btn__x8z) guaranteeing local scope."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Compatible",
          "note": "Standard static CSS imports fully supported in RSC."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Moderate",
          "note": "Dynamic styles require toggling class names or inline style attributes."
        }
      },
      "tags": [
        "Vanilla CSS",
        "Zero-Runtime",
        "Scoped",
        "Standard"
      ]
    },
    {
      "id": "styled-components",
      "name": "Styled Components / Emotion",
      "summary": "Classic runtime CSS-in-JS library allowing component-level styled wrappers via template literals.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Runtime Overhead",
          "note": "Evaluates styles and injects <style> tags into DOM at runtime during renders."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good",
          "note": "Co-locates styles directly with React components."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Very Good",
          "note": "ThemeProvider context passes typed design tokens."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Automatic",
          "note": "Generates unique class names for every styled component."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Incompatible with RSC",
          "note": "Runtime React context requirement prevents use inside React Server Components."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Best-in-Class",
          "note": "Pass JS props directly into CSS template literals."
        }
      },
      "tags": [
        "CSS-in-JS",
        "Runtime",
        "Props-Driven",
        "Legacy-Friendly"
      ]
    },
    {
      "id": "zero-runtime",
      "name": "Zero-Runtime CSS-in-JS (StyleX / Vanilla Extract / Pigment)",
      "summary": "Next-gen CSS-in-JS libraries that extract styles into static CSS files at build time.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Zero Runtime",
          "note": "Build plugin extracts type-safe styles into static atomic CSS."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good",
          "note": "TypeScript-first styling syntax with full auto-complete."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class",
          "note": "Type-safe theme contracts prevent invalid CSS properties at compile time."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "100% Scoped",
          "note": "Compiles down to scoped atomic CSS classes."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Compatible",
          "note": "Static extraction enables full compatibility with React Server Components."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Good (CSS Vars)",
          "note": "Uses CSS variables for dynamic runtime prop variations."
        }
      },
      "tags": [
        "Type-Safe",
        "Zero-Runtime",
        "StyleX",
        "Vanilla-Extract"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Tailwind CSS v4 for rapid UI development and clean design token enforcement.",
    "If using React Server Components (Next.js App Router), avoid runtime CSS-in-JS (Styled Components).",
    "Use CSS Modules for isolated widget libraries where utility classes are not desired.",
    "Evaluate StyleX or Vanilla Extract for large enterprise monorepos requiring strict TypeScript CSS contracts."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "CSS Architecture Decision",
        "description": "Choosing a styling strategy for modern frontend applications."
      },
      {
        "id": "p1",
        "label": "Utility-First Speed & Uniformity",
        "description": "Rapid development using standardized utility classes without leaving HTML/JSX."
      },
      {
        "id": "p2",
        "label": "Scoped Vanilla CSS Standard",
        "description": "Traditional CSS syntax scoped locally without runtime libraries."
      },
      {
        "id": "p3",
        "label": "Type-Safe Zero-Runtime CSS-in-JS",
        "description": "TypeScript design tokens extracted to static CSS at build time."
      },
      {
        "id": "p4",
        "label": "Legacy Props-Driven CSS-in-JS",
        "description": "Dynamic JS prop styling for client-only SPA applications."
      },
      {
        "id": "e1",
        "label": "Tailwind CSS v4",
        "description": "Build-time atomic CSS framework with zero runtime cost."
      },
      {
        "id": "e2",
        "label": "CSS Modules",
        "description": "Scoped standard CSS files hashed by bundler."
      },
      {
        "id": "e3",
        "label": "StyleX / Vanilla Extract",
        "description": "Type-safe CSS-in-JS extracted into static CSS at compile time."
      },
      {
        "id": "e4",
        "label": "Styled Components / Emotion",
        "description": "Runtime CSS-in-JS library for client-rendered React apps."
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
