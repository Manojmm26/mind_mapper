const fs = require('fs');
const path = require('path');

const pillars = [
  {
    title: "Browser Internals & Rendering Pipeline",
    topics: [
      { t: "Navigation & Fetch", st: ["DNS Resolution", "TCP Handshake", "TLS Negotiation", "HTTP Request", "Response Parsing"] },
      { t: "HTML Parsing & DOM", st: ["Tokenization", "Lexing", "DOM Tree Construction", "Preload Scanner", "Parser Blocking Scripts"] },
      { t: "CSSOM & Render Tree", st: ["CSS Parsing", "Style Calculation", "Render Tree Merging", "Display None vs Visibility Hidden", "Computed Styles"] },
      { t: "Layout & Paint", st: ["Reflow & Box Model", "Paint Records", "Rasterization", "Compositing Layers", "GPU Acceleration"] },
      { t: "V8 Engine", st: ["Ignition Interpreter", "Turbofan Compiler", "Hidden Classes", "Inline Caching", "Garbage Collection"] },
      { t: "Event Loop", st: ["Microtask Queue", "Macrotask Queue", "requestAnimationFrame", "MessageChannel", "Timers"] }
    ]
  },
  {
    title: "HTML & Web Accessibility",
    topics: [
      { t: "Semantic Sectioning", st: ["Main & Article", "Header & Footer", "Nav & Aside", "Section vs Div", "Document Outline"] },
      { t: "ARIA Roles & States", st: ["Role Definitions", "Aria-Hidden", "Aria-Live Regions", "Aria-Expanded", "Aria-DescribedBy"] },
      { t: "Focus Management", st: ["Tabindex Strategy", "Focus Traps", "Sequential Navigation", "Programmatic Focus", "Focus Visible"] },
      { t: "Keyboard Navigation", st: ["Enter vs Space", "Arrow Key Patterns", "Escape Key Handling", "Skip Links", "Custom Widget Keys"] },
      { t: "Screen Readers", st: ["Virtual Cursor", "Forms Mode", "Landmark Navigation", "Table Semantics", "Announcement Phrasing"] },
      { t: "WCAG 2.2 AA", st: ["Color Contrast (4.5:1)", "Focus Indicators", "Target Size", "Error Identification", "Resize Text"] }
    ]
  },
  {
    title: "CSS Architecture & Modern Layout",
    topics: [
      { t: "Cascade & Specificity", st: ["Specificity Calculation", "Inheritance", "Initial & Inherit", "Custom Properties", "Revert Keyword"] },
      { t: "CSS Grid", st: ["Template Areas", "Minmax & Fractional Units", "Auto-fit vs Auto-fill", "Subgrid", "Grid Alignment"] },
      { t: "Flexbox", st: ["Main & Cross Axes", "Flex Grow & Shrink", "Alignment & Justification", "Flex Wrap", "Order Property"] },
      { t: "Modern Features", st: ["Container Queries (cq units)", "Cascade Layers (@layer)", "Has Pseudo-class", "Color Functions (oklch)", "Logical Properties"] },
      { t: "Animations", st: ["Keyframes", "Transitions", "Scroll-driven Animations", "View Transitions API", "Will-Change"] },
      { t: "Architecture", st: ["BEM Methodology", "CSS-in-JS", "Utility Classes (Tailwind)", "CSS Modules", "Design Tokens"] }
    ]
  },
  {
    title: "JavaScript & TypeScript Deep Dive",
    topics: [
      { t: "Core Mechanics", st: ["Prototype Chain", "Closures", "Lexical Environment", "Execution Context", "This Keyword"] },
      { t: "Asynchronous JS", st: ["Promises", "Async/Await", "Error Handling", "Promise Combinators", "Microtask Queue Integration"] },
      { t: "Advanced Constructs", st: ["Generators", "Iterators", "Symbols", "Proxies", "Reflect API"] },
      { t: "TS Type System", st: ["Type Inference", "Structural Typing", "Union & Intersection", "Literal Types", "Enums vs Const Assertions"] },
      { t: "Generics & Utility", st: ["Generic Constraints", "Mapped Types", "Template Literal Types", "Utility Types (Partial/Pick)", "Indexed Access Types"] },
      { t: "Advanced TS", st: ["Conditional Types", "Infer Keyword", "Module Resolution", "Declaration Files", "Decorator Metadata"] }
    ]
  },
  {
    title: "React & Modern Frontend Architecture",
    topics: [
      { t: "React Internals", st: ["Fiber Reconciler", "Virtual DOM", "Render Phases", "Bailout Mechanics", "Hooks Implementation"] },
      { t: "Concurrent Rendering", st: ["Suspense", "useTransition", "useDeferredValue", "Time Slicing", "Streaming SSR"] },
      { t: "Server Components", st: ["Client/Server Boundary", "RSC Payload", "Actions", "Form Status", "Optimistic Updates"] },
      { t: "State Management", st: ["Zustand Stores", "Jotai Atoms", "Context API", "Redux Toolkit", "XState Machines"] },
      { t: "Data Fetching", st: ["React Query", "Stale-while-revalidate", "Cache Invalidation", "Mutation Effects", "Prefetching"] },
      { t: "Architecture", st: ["Next.js App Router", "Micro-frontends", "Module Federation", "Error Boundaries", "Isomorphic Code"] }
    ]
  },
  {
    title: "Node.js & Backend API Design",
    topics: [
      { t: "Node Internals", st: ["Libuv Event Loop", "Thread Pool", "Buffer & Streams", "V8 Integration", "Child Processes"] },
      { t: "Concurrency", st: ["Worker Threads", "SharedArrayBuffer", "Cluster Module", "Atomics", "Message Passing"] },
      { t: "Web Frameworks", st: ["Express Middleware", "Fastify Plugins", "NestJS Dependency Injection", "Routing Trees", "Request Validation"] },
      { t: "API Paradigms", st: ["REST & HATEOAS", "GraphQL Schema", "gRPC & Protobuf", "Webhooks", "tRPC"] },
      { t: "Real-time Data", st: ["WebSockets (ws)", "Server-Sent Events", "Long Polling", "Socket.io", "Pub/Sub Messaging"] },
      { t: "Data Access", st: ["Prisma ORM", "Drizzle ORM", "DataLoader Batching", "Connection Pooling", "Migrations"] }
    ]
  },
  {
    title: "Authentication, Sessions & Security",
    topics: [
      { t: "Session Management", st: ["Cookies (HttpOnly/Secure)", "SameSite Directive", "Stateful Sessions", "Session Fixation", "Redis Session Store"] },
      { t: "Token Authentication", st: ["JWT Anatomy", "Access & Refresh Tokens", "Token Rotation", "Blacklisting", "Stateless Validation"] },
      { t: "OAuth & OIDC", st: ["Authorization Code Grant", "PKCE Flow", "Userinfo Endpoint", "ID Tokens", "Scopes & Claims"] },
      { t: "Modern Auth", st: ["FIDO2 WebAuthn", "Passkeys Registration", "Passkeys Assertion", "Magic Links", "Biometric Auth"] },
      { t: "Web Security", st: ["XSS Prevention", "CSRF Double-submit", "Content-Security-Policy", "CORS Preflight", "Clickjacking (X-Frame-Options)"] },
      { t: "Data Protection", st: ["Bcrypt/Argon2 Hashing", "Encryption at Rest", "TLS/SSL Certificates", "PII Masking", "SQL Injection Prevention"] }
    ]
  },
  {
    title: "Performance, Observability & Deployment",
    topics: [
      { t: "Core Web Vitals", st: ["Largest Contentful Paint", "Interaction to Next Paint", "Cumulative Layout Shift", "First Contentful Paint", "Time to First Byte"] },
      { t: "Frontend Optimization", st: ["Code Splitting", "Tree Shaking", "Dynamic Imports", "Critical CSS Inlining", "Resource Hints (Preload)"] },
      { t: "Asset Delivery", st: ["Image Optimization (AVIF/WebP)", "Responsive Images", "Font Loading Strategies", "CDN Edge Caching", "Brotli Compression"] },
      { t: "Containerization", st: ["Docker Multi-stage", "Alpine Base Images", "Image Caching", "Volume Mounts", "Compose Services"] },
      { t: "CI/CD & DevOps", st: ["GitHub Actions", "Blue-Green Deployments", "Canary Releases", "Infrastructure as Code", "Rollbacks"] },
      { t: "Observability", st: ["OpenTelemetry Tracing", "Distributed Spans", "Log Aggregation", "Prometheus Metrics", "Grafana Dashboards"] }
    ]
  }
];

const nodes = [];
const edges = [];

nodes.push({
  id: 'fsw_root',
  label: 'Full-Stack Web Development',
  description: 'A comprehensive map of full-stack web development principles, encompassing browser internals, modern CSS, deep JavaScript semantics, React architecture, Node.js backend design, and production deployment strategies.',
  type: 'concept',
  importance: 'high'
});

let pIdx = 1;
for (const pillar of pillars) {
  const pId = `fsw_p${pIdx}`;
  nodes.push({
    id: pId,
    label: pillar.title,
    description: `Core concepts and deep-dive technical explorations covering ${pillar.title}. This pillar is foundational to full-stack mastery.`,
    type: 'topic',
    importance: 'high'
  });
  edges.push({ source: 'fsw_root', target: pId });

  let tIdx = 1;
  for (const topic of pillar.topics) {
    const tId = `${pId}_t${tIdx}`;
    nodes.push({
      id: tId,
      label: topic.t,
      description: `In-depth analysis of ${topic.t}. Understanding these mechanisms is crucial for optimizing web applications and ensuring robust software design.`,
      type: 'concept'
    });
    edges.push({ source: pId, target: tId });

    let stIdx = 1;
    for (const subtopic of topic.st) {
      const stId = `${tId}_st${stIdx}`;
      nodes.push({
        id: stId,
        label: subtopic,
        description: `Detailed exploration of ${subtopic}. This involves specific implementation patterns, edge cases, and performance considerations in modern environments.`,
        type: 'concept'
      });
      edges.push({ source: tId, target: stId });

      // Add 2 leaf nodes for each sub-topic
      for (let lIdx = 1; lIdx <= 2; lIdx++) {
        const lId = `${stId}_l${lIdx}`;
        nodes.push({
          id: lId,
          label: `${subtopic} Detail ${lIdx}`,
          description: `Specific technical facet ${lIdx} of ${subtopic}. Evaluates internal workflows, system calls, API usage, or advanced configurations to handle complex scenarios efficiently.`,
          type: 'example',
          importance: 'medium'
        });
        edges.push({ source: stId, target: lId });
      }
      stIdx++;
    }
    tIdx++;
  }
  pIdx++;
}

const fileContent = `import { MindMapData } from "../../services/llmService";

export const FULLSTACK_WEB_EXAMPLE: MindMapData = {
  nodes: ${JSON.stringify(nodes, null, 2)},
  edges: ${JSON.stringify(edges, null, 2)}
};
`;

const outputPath = path.resolve(__dirname, 'fullStackWeb.ts');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, fileContent, 'utf8');

console.log('Successfully generated FULLSTACK_WEB_EXAMPLE with', nodes.length, 'nodes and', edges.length, 'edges.');
