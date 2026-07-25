import { ComparisonWorkspaceData } from "../../services/llmService";

export const FRONTEND_FRAMEWORKS_EXAMPLE: ComparisonWorkspaceData = {
  topic: "Frontend Frameworks: React vs Vue vs Svelte vs SolidJS vs Astro",
  domainType: "tools",
  overview: "A comparison of modern frontend frameworks evaluating reactivity models, performance, and developer experience.",
  recommendedApproach: "Use React for large ecosystems, Vue for balance, Svelte/Solid for extreme performance/DX, and Astro for content-heavy sites.",
  criteria: [
    { id: "c1", label: "Reactivity Model & Mental Model", type: "text", description: "How the framework handles state changes and DOM updates." },
    { id: "c2", label: "Initial Bundle Size & Runtime Overhead", type: "text", description: "Size of the framework runtime and impact on initial load." },
    { id: "c3", label: "SSR / SSG / Edge Rendering Support", type: "text", description: "Capabilities for server-side rendering and static site generation." },
    { id: "c4", label: "Ecosystem Size & Community Plugins", type: "text", description: "Availability of third-party libraries and community support." },
    { id: "c5", label: "TypeScript Integration & DX", type: "text", description: "Quality of TypeScript support and overall Developer Experience." },
    { id: "c6", label: "Learning Curve & Documentation Quality", type: "text", description: "Ease of onboarding for new developers and doc quality." },
    { id: "c7", label: "Performance (Core Web Vitals, JS execution)", type: "text", description: "Impact on metrics like LCP, INP, and JS execution time." }
  ],
  options: [
    {
      id: "react",
      name: "React 19",
      summary: "The industry standard with a massive ecosystem, moving towards server components.",
      scores: {
        "c1": { criterionId: "c1", displayValue: "Virtual DOM", note: "Relies on VDOM and re-renders; React 19 compiler helps optimize this." },
        "c2": { criterionId: "c2", displayValue: "Medium", note: "Moderate runtime size; React Server Components help reduce client bundles." },
        "c3": { criterionId: "c3", displayValue: "Excellent", note: "Supported strongly via Next.js and Remix." },
        "c4": { criterionId: "c4", displayValue: "Massive", note: "The largest ecosystem by far." },
        "c5": { criterionId: "c5", displayValue: "Excellent", note: "First-class TS support, though complex generics can be tricky." },
        "c6": { criterionId: "c6", displayValue: "Moderate", note: "Hooks and dependency arrays can be confusing for beginners." },
        "c7": { criterionId: "c7", displayValue: "Good", note: "Can suffer from over-fetching/re-rendering without strict optimization." }
      },
      tags: ["VDOM", "RSC", "Ecosystem"]
    },
    {
      id: "vue",
      name: "Vue 3.x (Composition API)",
      summary: "A versatile framework offering an excellent balance of performance, DX, and approachable design.",
      scores: {
        "c1": { criterionId: "c1", displayValue: "Proxy-based", note: "Composition API provides granular reactivity using Proxies." },
        "c2": { criterionId: "c2", displayValue: "Small", note: "Tree-shakeable core leads to small initial bundles." },
        "c3": { criterionId: "c3", displayValue: "Excellent", note: "Nuxt 3 provides top-tier SSR/SSG capabilities." },
        "c4": { criterionId: "c4", displayValue: "Large", note: "Rich ecosystem, though smaller than React." },
        "c5": { criterionId: "c5", displayValue: "Very Good", note: "Vue 3 was rewritten in TS; Volar provides great editor support." },
        "c6": { criterionId: "c6", displayValue: "Easy", note: "Often considered the easiest major framework to learn." },
        "c7": { criterionId: "c7", displayValue: "Very Good", note: "Compiler-informed VDOM offers great performance." }
      },
      tags: ["Progressive", "Proxies", "Nuxt"]
    },
    {
      id: "svelte",
      name: "Svelte 5 (Runes)",
      summary: "A compiler-first framework that shifts work to build time, offering incredible DX with new Runes.",
      scores: {
        "c1": { criterionId: "c1", displayValue: "Signals (Runes)", note: "Svelte 5 introduces Runes for universal, fine-grained reactivity." },
        "c2": { criterionId: "c2", displayValue: "Tiny", note: "No virtual DOM means almost zero runtime overhead." },
        "c3": { criterionId: "c3", displayValue: "Excellent", note: "SvelteKit is a superb meta-framework for SSR/Edge." },
        "c4": { criterionId: "c4", displayValue: "Growing", note: "Smaller ecosystem but high quality libraries." },
        "c5": { criterionId: "c5", displayValue: "Very Good", note: "Good TS support; Svelte 5 improves complex type handling." },
        "c6": { criterionId: "c6", displayValue: "Easy", note: "HTML/CSS/JS familiarity makes onboarding very fast." },
        "c7": { criterionId: "c7", displayValue: "Outstanding", note: "Extremely fast DOM updates and minimal JS footprint." }
      },
      tags: ["Compiler", "Runes", "No-VDOM"]
    },
    {
      id: "solid",
      name: "SolidJS 1.x",
      summary: "A declarative, efficient UI library providing fine-grained reactivity without a Virtual DOM.",
      scores: {
        "c1": { criterionId: "c1", displayValue: "Fine-grained Signals", note: "Components run once; only the accessed signals update the DOM." },
        "c2": { criterionId: "c2", displayValue: "Tiny", note: "Extremely small runtime size." },
        "c3": { criterionId: "c3", displayValue: "Very Good", note: "SolidStart provides solid SSR and streaming capabilities." },
        "c4": { criterionId: "c4", displayValue: "Small", note: "Ecosystem is still in early growth stages." },
        "c5": { criterionId: "c5", displayValue: "Excellent", note: "TS support is great, similar to React's JSX typing." },
        "c6": { criterionId: "c6", displayValue: "Moderate", note: "Looks like React but behaves differently (no re-renders)." },
        "c7": { criterionId: "c7", displayValue: "Top-tier", note: "Consistently wins performance benchmarks." }
      },
      tags: ["Signals", "Performance", "JSX"]
    },
    {
      id: "astro",
      name: "Astro 4.x",
      summary: "The web framework for content-driven websites, pioneering the Islands architecture.",
      scores: {
        "c1": { criterionId: "c1", displayValue: "Islands", note: "Zero JS by default; hydrate specific UI components only when needed." },
        "c2": { criterionId: "c2", displayValue: "Zero (Default)", note: "Ships 0kb of JS by default; minimal overhead." },
        "c3": { criterionId: "c3", displayValue: "Outstanding", note: "First-class SSG and SSR capabilities." },
        "c4": { criterionId: "c4", displayValue: "Large", note: "Can use components from React, Vue, Svelte, Solid within Astro." },
        "c5": { criterionId: "c5", displayValue: "Excellent", note: "Strict TS typing for content collections and components." },
        "c6": { criterionId: "c6", displayValue: "Easy", note: "Intuitive .astro syntax; very easy to grasp." },
        "c7": { criterionId: "c7", displayValue: "Outstanding", note: "Unbeatable for content sites; perfect Core Web Vitals." }
      },
      tags: ["Islands", "Content-First", "Zero-JS"]
    }
  ],
  nextSteps: [
    "Identify if the project is heavily content-based (choose Astro).",
    "Evaluate team familiarity (React is often a safe default).",
    "Consider performance constraints (Svelte or Solid for high frequency updates).",
    "Prototype a complex feature in the top 2 choices."
  ],
  map: {
    nodes: [
      { id: "root", label: "Frontend Framework Choice", description: "Selecting a framework based on project requirements." },
      { id: "p1", label: "Content-Heavy Sites", description: "Blogs, marketing sites, documentation, e-commerce storefronts." },
      { id: "p2", label: "High-Interactivity SPAs", description: "Dashboards, complex tools, frequent state updates." },
      { id: "p3", label: "Large Enterprise Apps", description: "Massive codebases, huge teams, ecosystem dependence." },
      { id: "p4", label: "Best DX & Reactivity", description: "Developer experience, minimal boilerplate, modern reactivity." },
      
      { id: "c1_a", label: "Astro", description: "The premier choice for content sites." },
      { id: "c1_b", label: "Islands Architecture", description: "Hydrate only what is necessary." },
      { id: "c1_c", label: "Zero JS Default", description: "Excellent Core Web Vitals and SEO." },
      { id: "c1_d", label: "Content Collections", description: "Type-safe markdown and CMS integration." },
      
      { id: "c2_a", label: "SolidJS", description: "Extreme performance for complex UIs." },
      { id: "c2_b", label: "Svelte", description: "Lightweight and fast without VDOM overhead." },
      { id: "c2_c", label: "Fine-Grained Updates", description: "Update only the specific DOM node that changed." },
      { id: "c2_d", label: "WebSockets / Realtime", description: "Ideal for trading apps or collaborative tools." },
      
      { id: "c3_a", label: "React", description: "The safe enterprise default." },
      { id: "c3_b", label: "Next.js", description: "Enterprise grade meta-framework." },
      { id: "c3_c", label: "Massive Talent Pool", description: "Easy to hire for and find solutions." },
      { id: "c3_d", label: "React Native", description: "Share knowledge across web and mobile." },
      
      { id: "c4_a", label: "Vue 3", description: "Progressive and approachable." },
      { id: "c4_b", label: "Svelte 5 (Runes)", description: "Universal, clean reactivity." },
      { id: "c4_c", label: "Minimal Boilerplate", description: "Write less code to achieve the same result." },
      { id: "c4_d", label: "Compiler Optimizations", description: "Shift work from runtime to build time." }
    ],
    edges: [
      { source: "root", target: "p1" },
      { source: "root", target: "p2" },
      { source: "root", target: "p3" },
      { source: "root", target: "p4" },
      
      { source: "p1", target: "c1_a" },
      { source: "p1", target: "c1_b" },
      { source: "p1", target: "c1_c" },
      { source: "p1", target: "c1_d" },
      
      { source: "p2", target: "c2_a" },
      { source: "p2", target: "c2_b" },
      { source: "p2", target: "c2_c" },
      { source: "p2", target: "c2_d" },
      
      { source: "p3", target: "c3_a" },
      { source: "p3", target: "c3_b" },
      { source: "p3", target: "c3_c" },
      { source: "p3", target: "c3_d" },
      
      { source: "p4", target: "c4_a" },
      { source: "p4", target: "c4_b" },
      { source: "p4", target: "c4_c" },
      { source: "p4", target: "c4_d" }
    ]
  }
};
