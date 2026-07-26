import { MindMapData } from "../../services/llmService";

export const WEB_FRONTEND_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "web_root",
      "label": "Web Frontend Performance & Rendering Engine Architecture",
      "description": "Rigorous first-principles blueprint of browser rendering pipelines, V8 Ignition/TurboFan execution, Core Web Vitals (LCP/INP/CLS), CSS Grid/Flexbox layout math, React Fiber reconciler, WebAssembly, and CDP DevTools profiling.",
      "type": "topic"
    },
    {
      "id": "web_root_p1",
      "label": "Browser Rendering Pipeline & Compositing Engine",
      "description": "Sequence of steps transforming HTML, CSS, and JavaScript bytes into physical pixels rendered on device screens.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1",
      "label": "HTML Parsing & DOM Tree Construction",
      "description": "Converting raw HTML network byte streams into object representations in memory.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s1",
      "label": "Byte-to-Token Pre-Parsing Stream Decoding",
      "description": "Decoding raw HTTP byte streams using character encoding rules (UTF-8) into discrete character tokens.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s1_d1",
      "label": "Speculative Pre-Parser Scanning",
      "description": "Scanning incoming HTML bytes ahead of main parser to initiate early downloads for external scripts and CSS.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s1_d2",
      "label": "HTML5 Tokenization State Machine",
      "description": "Emitting StartTag, EndTag, Character, and Comment tokens via stateful lexer transitions.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s2",
      "label": "DOM Tree Node Tree Construction",
      "description": "Building parent-child relationships among elements as tokens are emitted.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s2_d1",
      "label": "DocumentObject Model Tree Hierarchy",
      "description": "Constructing tree nodes with Element, Text, and Attribute interfaces.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s2_d2",
      "label": "Parser-Blocking Script Execution Interruption",
      "description": "Halting HTML parsing when encountering non-async/non-defer <script> tags until scripts fetch and execute.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s3",
      "label": "Async & Defer Script Loading Mechanics",
      "description": "Controlling script download and execution timing relative to DOM construction.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s3_d1",
      "label": "async Attribute (Non-Blocking Download, Immediate Execution)",
      "description": "Downloading scripts asynchronously in parallel, executing immediately upon download completion.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s3_d2",
      "label": "defer Attribute (Non-Blocking Download, Post-DOMContentLoaded Execution)",
      "description": "Downloading scripts in parallel, executing sequentially in document order after DOM parsing completes.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s4",
      "label": "DOM Node Memory Footprint & Garbage Collection",
      "description": "Managing C++ Blink/WebKit DOM nodes and their corresponding V8 JavaScript wrapper objects.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s4_d1",
      "label": "Detached DOM Tree Memory Leaks",
      "description": "Retaining references to deleted DOM elements in JavaScript arrays, preventing C++ memory release.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s4_d2",
      "label": "V8 Oilpan Unified Garbage Collector",
      "description": "Tracing garbage collection across C++ DOM objects and V8 JavaScript heaps simultaneously.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s5",
      "label": "Custom Elements & Shadow DOM Boundary Isolation",
      "description": "Encapsulating DOM subtrees and CSS scoping boundaries using Web Components.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s5_d1",
      "label": "Shadow Root Tree Attachment (attachShadow({mode: \"closed\"}))",
      "description": "Isolating internal DOM subtrees from global querySelector searches.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t1_s5_d2",
      "label": "Scoped CSS Cascade Boundaries",
      "description": "Preventing external global CSS rules from penetrating shadow tree boundaries.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2",
      "label": "CSSOM Construction & Style Recalculation",
      "description": "Parsing CSS stylesheets and calculating computed styles for every DOM element.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s1",
      "label": "CSS Lexing & CSSOM Tree Assembly",
      "description": "Parsing raw CSS bytes into the CSS Object Model (CSSOM) tree.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s1_d1",
      "label": "Render-Blocking CSS Nature",
      "description": "Blocking initial page render until full CSSOM is constructed to prevent Flash of Unstyled Content (FOUC).",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s1_d2",
      "label": "CSS Rule Indexing & Selector Matching",
      "description": "Indexing CSS selectors from right-to-left (key selector) for rapid element matching.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s2",
      "label": "Style Recalculation (Recalc Style) Phase",
      "description": "Matching CSSOM rules against DOM elements to compute final resolved CSS values.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s2_d1",
      "label": "Computed Style Resolution (em -> px, auto -> exact bounds)",
      "description": "Resolving relative units into absolute physical pixel values.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s2_d2",
      "label": "Inherited Property Cascading (font-family, color)",
      "description": "Cascading inherited property values down DOM parent-child hierarchies.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s3",
      "label": "CSS Specificity Calculation Math (A, B, C)",
      "description": "Calculating numeric specificity vectors to resolve conflicting CSS declarations.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s3_d1",
      "label": "Specificity Tuple Format (Inline, IDs, Classes/Attrs, Elements)",
      "description": "Evaluating specificity vectors (e.g. (0,1,2,1)) to determine winning property declarations.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s3_d2",
      "label": "Important Flag Override (!important)",
      "description": "Bypassing standard specificity rankings by marking declarations as high-priority origins.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s4",
      "label": "Cascade Layers (@layer) Priority Architecture",
      "description": "Explicitly controlling cascade precedence independent of selector specificity.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s4_d1",
      "label": "Explicit Layer Precedence Ordering (@layer reset, base, components)",
      "description": "Guaranteeing later-declared layers override earlier layers regardless of specificity.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s4_d2",
      "label": "Un-Layered Styles Supremacy Rule",
      "description": "Ensuring un-layered CSS rules automatically take precedence over all layered rules.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s5",
      "label": "Invalidation Scope Minimization",
      "description": "Limiting style recalculation scope when DOM elements or CSS classes change.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s5_d1",
      "label": "Subtree Style Invalidation Root Scoping",
      "description": "Scoping style recalculations strictly to modified DOM subtrees.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t2_s5_d2",
      "label": "Element Class Mutation Impact",
      "description": "Minimizing style recalculation penalties by avoiding high-level ancestor class mutations.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3",
      "label": "Layout (Reflow) & Box Tree Calculation",
      "description": "Computing exact geometric coordinates (x, y, width, height) for all visible elements.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s1",
      "label": "Layout Tree Construction (Excluding display:none)",
      "description": "Filtering render-tree elements to build layout geometries for visible elements.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s1_d1",
      "label": "display:none vs visibility:hidden Layout Exclusion",
      "description": "Excluding display:none elements from layout trees while retaining space allocations for visibility:hidden elements.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s1_d2",
      "label": "Pseudo-Element (:before, :after) Layout Node Insertion",
      "description": "Generating explicit layout boxes for CSS pseudo-elements.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s2",
      "label": "Block Formatting Context (BFC) Isolation Rules",
      "description": "Creating isolated layout regions where internal element positioning does not affect external neighbors.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s2_d1",
      "label": "BFC Creation Triggers (display: flow-root, overflow: hidden, position: absolute)",
      "description": "Establishing self-contained layout boundary boxes.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s2_d2",
      "label": "Margin Collapsing Prevention inside BFCs",
      "description": "Preventing vertical margin collapse across BFC boundaries.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s3",
      "label": "Forced Synchronous Layout (Layout Thrashing)",
      "description": "Performance antipattern caused by alternating JavaScript DOM writes and geometric reads.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s3_d1",
      "label": "Layout Thrashing Sequence (element.offsetWidth after element.classList.add)",
      "description": "Forcing browsers to execute synchronous layout calculations mid-script execution.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s3_d2",
      "label": "Batching DOM Reads and Writes (FastDOM Pattern)",
      "description": "Reading all geometric properties first before issuing DOM write modifications.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s4",
      "label": "Containment API (contain: layout size paint)",
      "description": "Informing browser engines that element subtrees are independent of external page layouts.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s4_d1",
      "label": "contain: layout Subtree Isolation",
      "description": "Preventing internal layout updates from triggering global page reflows.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s4_d2",
      "label": "contain: content Micro-Optimization",
      "description": "Combining layout, style, and paint containment for reusable UI components.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s5",
      "label": "Intrinsic vs Extrinsic Sizing Computations",
      "description": "Resolving content-based sizing (min-content, max-content, fit-content) against parent bounds.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s5_d1",
      "label": "min-content (Smallest Box Width Without Text Overflow)",
      "description": "Calculating minimum width needed without breaking words.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t3_s5_d2",
      "label": "max-content (Ideal Un-wrapped Single-Line Width)",
      "description": "Calculating width required to render full text on a single line without wrapping.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4",
      "label": "Paint, Rasterization & GPU Compositing Layer Pipelines",
      "description": "Converting visual visual instructions into pixel rasters and GPU textures.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s1",
      "label": "Paint Display List Generation & Stacking Contexts",
      "description": "Building ordered lists of drawing commands (fill rect, draw text, draw border) per layer.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s1_d1",
      "label": "z-index & Stacking Context Order",
      "description": "Sorting paint operations by background, negative z-index, block elements, floats, inline, and positive z-index.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s1_d2",
      "label": "Paint Invalidation Region Rectangles",
      "description": "Tracking modified screen regions to re-paint minimal bounding boxes.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s2",
      "label": "Compositing Layer Promotion (will-change: transform)",
      "description": "Promoting elements to independent GPU compositing layers to bypass layout and paint steps.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s2_d1",
      "label": "GPU Layer Promotion Criteria (3D Transforms, <video>, <canvas>)",
      "description": "Offloading layer rendering directly to GPU VRAM textures.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s2_d2",
      "label": "Layer Explosion VRAM Memory Penalty",
      "description": "Avoiding excessive promote operations that exhaust GPU memory and degrade compositing performance.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s3",
      "label": "Multithreaded Rasterization (Impl-Side Rasterization)",
      "description": "Rasterizing display lists into bitmap tiles on background worker threads.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s3_d1",
      "label": "Tiled Rasterization Grid (256x256 Pixel Tiles)",
      "description": "Sub-dividing display lists into tile grids rasterized in parallel by CPU thread pools.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s3_d2",
      "label": "GPU Accelerated Rasterization (Skia / Ganesh)",
      "description": "Utilizing OpenGL/Vulkan/Metal pipelines to rasterize display lists on GPU hardware.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s4",
      "label": "Compositor Thread VSync Loop Execution",
      "description": "Compositing GPU textures and delivering final frames to screen displays at 60Hz/120Hz VSync rates.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s4_d1",
      "label": "Jank-Free Scrolling on Compositor Thread",
      "description": "Executing CSS transform and opacity animations directly on compositor threads without touching main JS thread.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s4_d2",
      "label": "VSync Clock Pulse Synchronization (16.6ms / 8.3ms Windows)",
      "description": "Aligning frame delivery to display hardware VSync refresh pulses.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s5",
      "label": "Sub-Pixel Antialiasing & Sub-Pixel Layout Rounding",
      "description": "Rendering crisp text edges and resolving fractional sub-pixel layout offsets.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s5_d1",
      "label": "LCD Sub-Pixel Font Rendering (ClearType / FreeType)",
      "description": "Utilizing red, green, blue sub-pixel components to sharpen font edges.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t4_s5_d2",
      "label": "Fractional Pixel Rounding Artifacts",
      "description": "Managing 0.5px layout offsets that cause blurry borders or 1px gap glitches.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5",
      "description": "Detailed first-principles mechanics for Browser Rendering Pipeline & Compositing Engine topic 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s1",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Browser Rendering Pipeline & Compositing Engine Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s1_d1",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s1_d2",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s2",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Browser Rendering Pipeline & Compositing Engine Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s2_d1",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s2_d2",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s3",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Browser Rendering Pipeline & Compositing Engine Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s3_d1",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s3_d2",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s4",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Browser Rendering Pipeline & Compositing Engine Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s4_d1",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s4_d2",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s5",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Browser Rendering Pipeline & Compositing Engine Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s5_d1",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t5_s5_d2",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6",
      "description": "Detailed first-principles mechanics for Browser Rendering Pipeline & Compositing Engine topic 6.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s1",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Browser Rendering Pipeline & Compositing Engine Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s1_d1",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s1_d2",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s2",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Browser Rendering Pipeline & Compositing Engine Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s2_d1",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s2_d2",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s3",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Browser Rendering Pipeline & Compositing Engine Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s3_d1",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s3_d2",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s4",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Browser Rendering Pipeline & Compositing Engine Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s4_d1",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s4_d2",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s5",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Browser Rendering Pipeline & Compositing Engine Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s5_d1",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p1_t6_s5_d2",
      "label": "Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Rendering Pipeline & Compositing Engine Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p2",
      "label": "V8 JavaScript Engine & Memory Management",
      "description": "Ignition bytecode interpreter, TurboFan optimizing compiler, Hidden Classes (Maps), and Orinoco Garbage Collection.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1",
      "label": "Ignition Bytecode Interpreter & AST Parsing",
      "description": "Parsing raw JavaScript text into Abstract Syntax Trees (AST) and compiling into V8 bytecode.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s1",
      "label": "Streaming Parser & Pre-Parser Syntax Verification",
      "description": "Parsing JavaScript code streams directly during network downloads.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s1_d1",
      "label": "Lazy Pre-Parsing of Un-Executed Functions",
      "description": "Pre-parsing un-executed functions to verify syntax errors without building full ASTs.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s1_d2",
      "label": "Eager Parsing of Immediately Invoked Functions (IIFE)",
      "description": "Eagerly building ASTs for code executed during initial script loading.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s2",
      "label": "V8 Ignition Register-Based Bytecode Architecture",
      "description": "Executing compact accumulator-register bytecode instructions inside the V8 interpreter.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s2_d1",
      "label": "Accumulator Register Design (r0, r1, a0)",
      "description": "Using dedicated accumulator registers to shrink bytecode instruction sizes.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s2_d2",
      "label": "Low Memory Footprint Bytecode Execution",
      "description": "Executing bytecode with minimal startup delay and low RAM footprint on low-end devices.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s3",
      "label": "Inline Caching (IC) Feedback Vectors",
      "description": "Collecting runtime type feedback at monomorphic, polymorphic, and megamorphic call sites.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s3_d1",
      "label": "Monomorphic Call Site (Single Shape Type Feedback)",
      "description": "Caching single property lookup offsets for fast 1-step property access.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s3_d2",
      "label": "Megamorphic Fallback (> 4 Distinct Shape Types)",
      "description": "Falling back to slow hash table property lookups when call sites encounter many distinct object shapes.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s4",
      "label": "Interpreter Feedback Vector Collection for JIT",
      "description": "Tracking function invocation counts and loop execution counters to identify hot functions.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s4_d1",
      "label": "Hot Function Tier-Up Triggers",
      "description": "Triggering background compilation when function execution counts cross hot thresholds.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s4_d2",
      "label": "Type Feedback Recording for JIT Speculation",
      "description": "Recording observed parameter and property types to guide optimizing compilers.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s5",
      "label": "Bytecode Memory Caching (Code Caching)",
      "description": "Persisting compiled bytecode to disk/memory caches to bypass parsing on subsequent page visits.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s5_d1",
      "label": "V8 Code Cache Metadata Headers",
      "description": "Saving serialized bytecode headers alongside V8 isolate scripts.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t1_s5_d2",
      "label": "40% Fast Page Reload Startup Gains",
      "description": "Bypassing AST parsing entirely on repeat website visits.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2",
      "label": "Hidden Classes (Maps) & Inline Caching (IC)",
      "description": "V8 dynamic object shape representations enabling fast property access equivalent to static languages.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s1",
      "label": "V8 Map (Hidden Class) Structure & Transitions",
      "description": "Assigning internal Map structures to JavaScript objects to track property memory offsets.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s1_d1",
      "label": "Map Transition Trees (obj.x = 1 -> Map0 to Map1)",
      "description": "Creating new Map transition paths whenever properties are added to objects.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s1_d2",
      "label": "Shared Map Allocations for Identical Constructor Instantiations",
      "description": "Sharing identical Maps across objects initialized with identical property assignment orders.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s2",
      "label": "Property Assignment Order Sensitivity",
      "description": "Constructing non-identical Maps when objects assign identical properties in different orders.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s2_d1",
      "label": "Divergent Map Transition Paths ({a:1, b:2} vs {b:2, a:1})",
      "description": "Creating distinct Maps for objects with identical properties assigned in different sequences.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s2_d2",
      "label": "Inline Cache Monomorphism Destruction",
      "description": "Forcing IC call sites into polymorphic states due to divergent Map instances.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s3",
      "label": "In-Object Properties vs Fast / Slow Dictionary Properties",
      "description": "Storing property values directly inside object memory allocations vs external arrays.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s3_d1",
      "label": "In-Object Property Slots (Sub-Nanosecond Access)",
      "description": "Pre-allocating property slots directly inside the object's primary memory block.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s3_d2",
      "label": "Slow Dictionary Mode (delete obj.prop Trigger)",
      "description": "Converting objects to slow hash table dictionary mode when properties are dynamically deleted.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s4",
      "label": "Fast Elements vs Dictionary Elements (Array Storage)",
      "description": "Optimizing numerical array storage based on element density and continuity.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s4_d1",
      "label": "PACKED_SMI_ELEMENTS (Contiguous Signed Small Integers)",
      "description": "Storing un-boxed contiguous integers in high-speed linear memory arrays.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s4_d2",
      "label": "HOLEY_ELEMENTS Degradation (Sparse Array Holes)",
      "description": "Degrading array performance when accessing un-assigned sparse array indexes (holes).",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s5",
      "label": "Optimization Guidelines for Monomorphic Code",
      "description": "Writing JavaScript code patterns that preserve monomorphic Inline Caches in V8.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s5_d1",
      "label": "Consistent Constructor Class Field Initializations",
      "description": "Initializing all class properties in constructor functions in identical order.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t2_s5_d2",
      "label": "Avoiding Property Deletion (Use obj.prop = undefined)",
      "description": "Preventing V8 from degrading objects to slow dictionary mode.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3",
      "label": "TurboFan Optimizing Compiler & De-optimization",
      "description": "Compiling hot V8 bytecode functions into highly optimized native machine code using optimistic type assumptions.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s1",
      "label": "Sea-of-Nodes Intermediate Representation (IR)",
      "description": "Combining data flow and control flow dependencies in a single unified graph representation.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s1_d1",
      "label": "Global Value Numbering & Dead Code Elimination",
      "description": "Removing redundant mathematical operations and un-reachable code paths during IR optimization passes.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s1_d2",
      "label": "Loop Invariant Code Motion (LICM)",
      "description": "Hoisting static computations out of inner execution loops.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s2",
      "label": "Speculative Optimization Based on Type Feedback",
      "description": "Generating machine code assuming type feedback collected by Ignition holds true.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s2_d1",
      "label": "Un-Boxed Double & Integer Math Instructions",
      "description": "Emitting direct CPU assembly instructions without dynamic type checks.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s2_d2",
      "label": "Direct Memory Offset Access (Bypassing Map Lookups)",
      "description": "Hardcoding exact memory byte offsets for property lookups in monomorphic functions.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s3",
      "label": "Bailout & De-optimization (Bailout to Ignition)",
      "description": "Aborting optimized machine code execution when speculative type assumptions are violated.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s3_d1",
      "label": "De-optimization Check Points (Deopt Soft/Hard Guards)",
      "description": "Verifying parameter types at machine code entry points.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s3_d2",
      "label": "Re-constructing Interpreter Stack Frames (Bailout)",
      "description": "Restoring Ignition interpreter stack states seamlessly when types change (e.g. passing String to Int function).",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s4",
      "label": "Maglev Mid-Tier Compiler Architecture",
      "description": "V8 fast mid-tier compiler generating machine code faster than TurboFan for medium-hot code.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s4_d1",
      "label": "Sub-Millisecond Compilation Times",
      "description": "Generating machine code 10x faster than TurboFan to reduce startup latency.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s4_d2",
      "label": "SSA (Single Static Assignment) Graph Compilation",
      "description": "Optimizing code intermediate paths without complex Sea-of-Nodes graphs.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s5",
      "label": "De-optimization Loop Traps & Fixes",
      "description": "Identifying code patterns triggering repeated optimization and de-optimization loops.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s5_d1",
      "label": "Polymorphic Type Contamination Traps",
      "description": "Passing alternating type shapes to hot functions, causing permanent de-optimization.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t3_s5_d2",
      "label": "V8 Trace Flag Profiling (--trace-deopt)",
      "description": "Diagnosing de-optimization events using node/v8 CLI trace flags.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4",
      "label": "Orinoco Garbage Collection (Scavenger / Mark-Sweep)",
      "description": "Generational garbage collection architecture managing V8 memory allocation and reclamation.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s1",
      "label": "Generational Hypothesis & V8 Heap Segmentation",
      "description": "Partitioning V8 heap into Young Generation (New Space) and Old Generation (Old Space).",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s1_d1",
      "label": "Young Generation (Semi-Space Allocation 1MB-64MB)",
      "description": "Allocating short-lived objects in fast dual semi-space arenas (From-Space / To-Space).",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s1_d2",
      "label": "Object Promotion Criteria (Surviving 2 Scavenge Cycles)",
      "description": "Promoting long-lived objects to Old Space after surviving two Scavenger collections.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s2",
      "label": "Cheney's Copying Scavenger Algorithm (Young Gen GC)",
      "description": "Fast stop-the-world copying collector reclaiming short-lived Young Generation objects.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s2_d1",
      "label": "From-Space to To-Space Active Object Copying",
      "description": "Copying live reachable objects to To-Space while discarding un-reachable dead objects.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s2_d2",
      "label": "Sub-Millisecond Execution Times (< 1ms Pause)",
      "description": "Reclaiming memory with minimal main thread pause times.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s3",
      "label": "Major GC: Mark-Sweep-Compact Algorithm (Old Gen GC)",
      "description": "Tri-phase garbage collector reclaiming long-lived objects in the Old Generation.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s3_d1",
      "label": "Tri-color Marking (White, Grey, Black Nodes)",
      "description": "Traversing object graphs concurrently to identify reachable live objects.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s3_d2",
      "label": "Sweep & Compact Memory De-fragmentation",
      "description": "Compacting surviving objects into contiguous memory blocks to eliminate heap fragmentation.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s4",
      "label": "Concurrent & Parallel Marking (Background Worker Threads)",
      "description": "Offloading object graph marking to background threads to minimize main thread pauses.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s4_d1",
      "label": "Concurrent Marking Write Barriers",
      "description": "Intercepting object pointer mutations during main thread execution to update marking states.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s4_d2",
      "label": "Main Thread Pause Reduction (< 5ms Major GC Pauses)",
      "description": "Reducing main thread GC pauses by 80% through background worker threads.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s5",
      "label": "Memory Leak Diagnosis & Heap Snapshots",
      "description": "Identifying JavaScript memory leaks using Chrome DevTools Heap Profiles.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s5_d1",
      "label": "Retainer Tree Reference Chains",
      "description": "Tracing reference paths back to root objects (Window, Global Scope).",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t4_s5_d2",
      "label": "Closure Scope & Detached Node Memory Leak Audits",
      "description": "Spotting variables trapped inside long-lived event listener closures.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5",
      "label": "V8 JavaScript Engine & Memory Management Topic 5",
      "description": "Detailed first-principles mechanics for V8 JavaScript Engine & Memory Management topic 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s1",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for V8 JavaScript Engine & Memory Management Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s1_d1",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s1_d2",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s2",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for V8 JavaScript Engine & Memory Management Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s2_d1",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s2_d2",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s3",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for V8 JavaScript Engine & Memory Management Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s3_d1",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s3_d2",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s4",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for V8 JavaScript Engine & Memory Management Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s4_d1",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s4_d2",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s5",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for V8 JavaScript Engine & Memory Management Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s5_d1",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t5_s5_d2",
      "label": "V8 JavaScript Engine & Memory Management Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6",
      "label": "V8 JavaScript Engine & Memory Management Topic 6",
      "description": "Detailed first-principles mechanics for V8 JavaScript Engine & Memory Management topic 6.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s1",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for V8 JavaScript Engine & Memory Management Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s1_d1",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s1_d2",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s2",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for V8 JavaScript Engine & Memory Management Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s2_d1",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s2_d2",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s3",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for V8 JavaScript Engine & Memory Management Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s3_d1",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s3_d2",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s4",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for V8 JavaScript Engine & Memory Management Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s4_d1",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s4_d2",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s5",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for V8 JavaScript Engine & Memory Management Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s5_d1",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p2_t6_s5_d2",
      "label": "V8 JavaScript Engine & Memory Management Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for V8 JavaScript Engine & Memory Management Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p3",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance",
      "description": "Measurement, diagnosis, and optimization of Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1",
      "label": "Largest Contentful Paint (LCP) Optimization",
      "description": "Measuring render timing of the largest visible image or text block within the viewport.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s1",
      "label": "LCP Element Identification Criteria",
      "description": "Identifying target LCP elements (hero images, video poster frames, block-level text).",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s1_d1",
      "label": "PerformanceObserver LCP Candidate Emission",
      "description": "Emitting LCP candidate entries until initial user interaction (click/scroll) occurs.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s1_d2",
      "label": "Target LCP Threshold Boundaries (< 2.5s Good, > 4.0s Poor)",
      "description": "Meeting Google Core Web Vitals SLA target of sub-2.5-second LCP at 75th percentile.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s2",
      "label": "LCP Breakdown Sub-Parts (4 Key Latency Components)",
      "description": "Decomposing total LCP time into 4 sub-phases for targeted optimization.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s2_d1",
      "label": "TTFB (Time to First Byte)",
      "description": "Server response time and initial network roundtrips (target < 40% LCP time).",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s2_d2",
      "label": "Resource Load Delay",
      "description": "Delay between HTML delivery and browser discovering the LCP image URL (target < 10%).",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s2_d3",
      "label": "Resource Load Time",
      "description": "Duration required to download LCP image bytes over network (target < 40%).",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s2_d4",
      "label": "Element Render Delay",
      "description": "Time elapsed between image download completion and physical pixel painting on screen (target < 10%).",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s3",
      "label": "Fetch Priority API & Early Resource Discovery",
      "description": "Informing browser preload scanners to download LCP images with top priority.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s3_d1",
      "label": "fetchpriority=\"high\" HTML Attribute Assignment",
      "description": "Elevating LCP image download priority above standard images.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s3_d2",
      "label": "<link rel=\"preload\" as=\"image\"> Integration",
      "description": "Initiating LCP image downloads before external CSS files parse.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s4",
      "label": "Modern Image Encodings (AVIF / WebP / Responsive Srcset)",
      "description": "Reducing LCP image byte sizes by 50-80% using next-gen compression standards.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s4_d1",
      "label": "AVIF Format Compression Advantage",
      "description": "Achieving 50% smaller file sizes than WebP at equivalent visual quality.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s4_d2",
      "label": "Responsive srcset & sizes Attribute Specifications",
      "description": "Delivering exact matching image dimensions based on device viewport widths.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s5",
      "label": "CDN Edge Caching & Early Hints (HTTP 103)",
      "description": "Minimizing Time to First Byte (TTFB) via edge CDN caching and early link headers.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s5_d1",
      "label": "HTTP 103 Early Hints Header Delivery",
      "description": "Streaming early 103 responses containing pre-connect and preload links while server renders HTML.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t1_s5_d2",
      "label": "Edge SSR Caching (Cloudflare Workers / Fastly)",
      "description": "Caching rendered HTML pages at edge nodes close to end users.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2",
      "label": "Interaction to Next Paint (INP) Optimization",
      "description": "Measuring overall user interface responsiveness across all click, tap, and keyboard interactions during page lifecycle.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s1",
      "label": "INP Interaction Phase Breakdown",
      "description": "Decomposing user interaction latency into Input Delay, Processing Time, and Presentation Delay.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s1_d1",
      "label": "Input Delay Phase",
      "description": "Wait time while main thread finishes executing pre-existing long tasks before handling events.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s1_d2",
      "label": "Processing Time Phase",
      "description": "Time spent executing JavaScript event handler callbacks.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s1_d3",
      "label": "Presentation Delay Phase",
      "description": "Time required for browser to recalculate style, layout, paint, and display target updated pixels.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s2",
      "label": "INP Target SLA Thresholds (< 200ms Good, > 500ms Poor)",
      "description": "Meeting Google Core Web Vitals target of sub-200-millisecond INP at 75th percentile.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s2_d1",
      "label": "P98 Interaction Aggregation Calculation",
      "description": "Selecting worst-case interaction latency (excluding rare outliers) across entire session.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s2_d2",
      "label": "Replacing First Input Delay (FID)",
      "description": "Replacing FID in 2024 to measure responsiveness across full page lifetimes rather than just initial clicks.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s3",
      "label": "Breaking Up Long Tasks (scheduler.yield() & setTimeout)",
      "description": "Splitting heavy JavaScript tasks (> 50ms) to yield control back to the main thread event loop.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s3_d1",
      "label": "Chrome Native scheduler.yield() API",
      "description": "Yielding control to browser layout/paint tasks while retaining task queue position.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s3_d2",
      "label": "Microtask vs Macrotask Queue Deferrals",
      "description": "Using setTimeout(fn, 0) to push non-essential work to subsequent macrotask queues.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s4",
      "label": "React 18 Concurrent Rendering & useTransition",
      "description": "Prioritizing urgent user input updates over non-urgent UI re-renders.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s4_d1",
      "label": "useTransition Hook Non-Blocking State Updates",
      "description": "Marking heavy state updates as non-urgent transitions that yield to user typing.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s4_d2",
      "label": "useDeferredValue Hook Optimization",
      "description": "Deferring re-renders of expensive UI subtrees during rapid user inputs.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s5",
      "label": "Passive Event Listeners & Non-Blocking Handlers",
      "description": "Preventing event handlers from blocking scrolling and page interactions.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s5_d1",
      "label": "passive: true Flag in addEventListener",
      "description": "Informing browser that touch/wheel handlers will not call preventDefault(), enabling instant compositor scrolling.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t2_s5_d2",
      "label": "Debouncing & Throttling Heavy Input Listeners",
      "description": "Limiting firing frequency of scroll, resize, and mousemove event callbacks.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3",
      "label": "Cumulative Layout Shift (CLS) Optimization",
      "description": "Quantifying unexpected visual layout movement occurring across page lifetimes.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s1",
      "label": "CLS Mathematical Formula (Impact Fraction * Distance Fraction)",
      "description": "Calculating layout shift score for unexpected element movements.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s1_d1",
      "label": "Impact Fraction Calculation",
      "description": "Measuring percentage of viewport area occupied by shifting elements across two frames.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s1_d2",
      "label": "Distance Fraction Calculation",
      "description": "Measuring maximum vertical or horizontal shift distance divided by viewport dimension.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s1_d3",
      "label": "CLS Target SLA Thresholds (< 0.1 Good, > 0.25 Poor)",
      "description": "Meeting target score of sub-0.1 cumulative layout shift.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s2",
      "label": "Un-Sized Images & Embed Layout Jumps",
      "description": "Preventing layout shifts caused by images loading without explicit dimensions.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s2_d1",
      "label": "Explicit width and height Attribute Rule",
      "description": "Specifying HTML width and height attributes to allow browsers to calculate aspect ratios before images download.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s2_d2",
      "label": "CSS aspect-ratio Property Reservation",
      "description": "Reserving exact layout space for responsive image containers using CSS aspect-ratio.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s3",
      "label": "Web Font FOIT / FOUT Layout Shifts",
      "description": "Managing layout shifts caused by custom web fonts swapping with fallback fonts.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s3_d1",
      "label": "font-display: swap Strategy",
      "description": "Displaying fallback system font immediately, swapping to custom web font when loaded.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s3_d2",
      "label": "CSS @font-face Metric Overrides (size-adjust, override-descriptors)",
      "description": "Matching fallback font metric dimensions (ascent, descent) precisely to custom web font geometries to eliminate swap shifts.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s4",
      "label": "Dynamic Content Insertion & Ad Slot Reservation",
      "description": "Reserving fixed container dimensions for dynamically injected ads, banners, and widgets.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s4_d1",
      "label": "Min-Height Skeleton Container Reservation",
      "description": "Pre-allocating min-height container boxes for dynamic third-party ad tags.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s4_d2",
      "label": "Top-of-Viewport Dynamic Banner Elimination",
      "description": "Avoiding injecting dynamic banner notifications above existing page content.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s5",
      "label": "Transform Animations vs Layout Property Mutations",
      "description": "Excluding transform and opacity animations from CLS penalty calculations.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s5_d1",
      "label": "GPU Compositor Animation Exemption",
      "description": "Animating elements using CSS transform (translate) without triggering layout shifts.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t3_s5_d2",
      "label": "Avoiding top, left, margin Property Animations",
      "description": "Eliminating layout properties from CSS transitions.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4",
      "label": "Performance Profiling & Chrome DevTools Protocol (CDP)",
      "description": "Automating performance auditing and analyzing trace files using Chrome DevTools.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s1",
      "label": "Chrome DevTools Performance Trace JSON Schema",
      "description": "Capturing and parsing low-level event traces emitted by Chrome's tracing engine.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s1_d1",
      "label": "Main Thread Event Category Identification",
      "description": "Parsing RunTask, EvaluateScript, RecalculateStyles, Layout, and Paint trace events.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s1_d2",
      "label": "Long Task Identification (> 50ms Wall-Clock Time)",
      "description": "Flagging main thread tasks taking > 50ms as performance bottlenecks.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s2",
      "label": "User Timing API (performance.mark / performance.measure)",
      "description": "Injecting custom application timestamps directly into DevTools performance timelines.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s2_d1",
      "label": "Custom App Milestone Marking",
      "description": "Marking exact application initialization, API fetch, and component mount timestamps.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s2_d2",
      "label": "PerformanceMeasure Duration Calculations",
      "description": "Measuring duration intervals between custom performance marks.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s3",
      "label": "Chrome DevTools Protocol (CDP) Automation",
      "description": "Controlling headless Chrome programmatically via WebSocket JSON-RPC interfaces.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s3_d1",
      "label": "Tracing.start & Tracing.stop CDP Commands",
      "description": "Recording performance traces programmatically during automated CI test suites.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s3_d2",
      "label": "Network.emulateNetworkConditions Simulation",
      "description": "Simulating 3G network throttling and CPU slowdowns in automated test pipelines.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s4",
      "label": "Lighthouse CI & Automated Performance Gates",
      "description": "Enforcing performance budgets as automated checks in CI/CD pipelines.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s4_d1",
      "label": "Assertions Score Threshold Enforcement",
      "description": "Failing GitHub PR builds if performance scores drop below 90/100.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s4_d2",
      "label": "Automated Performance Regression Alerting",
      "description": "Detecting bundle size spikes and LCP regressions prior to production deployments.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s5",
      "label": "Real User Monitoring (RUM) vs Synthetic Testing",
      "description": "Combining field data collected from real users with lab data collected in controlled environments.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s5_d1",
      "label": "web-vitals JavaScript Library Collection",
      "description": "Shipping 1KB web-vitals beacon library to capture real user LCP, INP, and CLS scores.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t4_s5_d2",
      "label": "Field Data 75th Percentile Aggregation",
      "description": "Evaluating Core Web Vitals compliance based on 75th percentile real-user field data.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5",
      "description": "Detailed first-principles mechanics for Core Web Vitals (LCP, INP, CLS) & Performance topic 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s1",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s1_d1",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s1_d2",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s2",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s2_d1",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s2_d2",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s3",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s3_d1",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s3_d2",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s4",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s4_d1",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s4_d2",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s5",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s5_d1",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t5_s5_d2",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6",
      "description": "Detailed first-principles mechanics for Core Web Vitals (LCP, INP, CLS) & Performance topic 6.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s1",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s1_d1",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s1_d2",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s2",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s2_d1",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s2_d2",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s3",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s3_d1",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s3_d2",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s4",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s4_d1",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s4_d2",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s5",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s5_d1",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p3_t6_s5_d2",
      "label": "Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Core Web Vitals (LCP, INP, CLS) & Performance Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p4",
      "label": "Modern CSS Architecture & Layout Math",
      "description": "Flexbox axis alignment math, CSS Grid subgrid algorithms, Container Queries (cq), Cascade Layers, and View Transitions.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1",
      "label": "CSS Grid Layout Engine & Subgrid Algorithms",
      "description": "Two-dimensional grid layout system positioning elements along intersecting row and column axes.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s1",
      "label": "Fractional Unit (fr) Distribution Mathematics",
      "description": "Distributing remaining free space after allocating fixed, auto, and content-based track sizes.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s1_d1",
      "label": "Free Space Allocation Formula",
      "description": "Calculating 1fr width by dividing remaining un-allocated container space by total fr sum.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s1_d2",
      "label": "Minmax (minmax(min, max)) Track Sizing Bounds",
      "description": "Defining flexible grid tracks that stretch between minimum and maximum bounds.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s2",
      "label": "Auto-Fit vs Auto-Fill Repeat Placement Algorithms",
      "description": "Creating responsive multi-column grid layouts without media queries.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s2_d1",
      "label": "repeat(auto-fill, minmax(250px, 1fr)) Mechanics",
      "description": "Creating empty grid tracks if space allows, keeping track sizes at specified minimums.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s2_d2",
      "label": "repeat(auto-fit, minmax(250px, 1fr)) Collapse Mechanics",
      "description": "Collapsing empty grid tracks to 0px, stretching filled tracks to occupy 100% of available space.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s3",
      "label": "CSS Subgrid (grid-template-columns: subgrid) Inheritance",
      "description": "Allowing nested child grids to participate in parent grid track sizing definitions.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s3_d1",
      "label": "Multi-Card Alignment Problem Solution",
      "description": "Aligning headers, bodies, and footers across independent card components seamlessly.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s3_d2",
      "label": "Track Line Index Inheritance",
      "description": "Inheriting parent grid line names and track dimensions directly into nested child elements.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s4",
      "label": "Implicit vs Explicit Grid Track Creation",
      "description": "Handling elements positioned outside explicitly declared grid-template areas.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s4_d1",
      "label": "auto-rows & auto-columns Sizing Rules",
      "description": "Defining default track sizes for dynamically created implicit grid rows.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s4_d2",
      "label": "Grid Dense Auto-Placement (grid-auto-flow: dense)",
      "description": "Backfilling empty grid gaps with smaller subsequent elements.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s5",
      "label": "Named Grid Areas & Alignment Properties",
      "description": "Positioning elements using semantic grid area templates.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s5_d1",
      "label": "grid-template-areas Visual Layout Spec",
      "description": "Defining layout structure via ASCII-like string area templates.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t1_s5_d2",
      "label": "justify-items vs align-items Axis Control",
      "description": "Controlling inline (horizontal) and block (vertical) alignment inside individual grid cells.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2",
      "label": "Flexbox Layout Math & Alignment Mechanics",
      "description": "One-dimensional layout model distributing space along main and cross axes.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s1",
      "label": "Flex-Grow & Flex-Shrink Mathematical Distribution",
      "description": "Calculating element growth and shrinkage factors based on flex basis values.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s1_d1",
      "label": "flex-grow Ratio Math",
      "description": "Distributing positive free space proportional to flex-grow weights.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s1_d2",
      "label": "flex-shrink Weighted Shrinkage Math",
      "description": "Scaling shrinkage factors by multiplying flex-shrink weights by flex-basis sizes.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s2",
      "label": "Flex Basis vs Width Resolution Order",
      "description": "Determining initial element size prior to space distribution.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s2_d1",
      "label": "flex-basis: auto Fallback Rules",
      "description": "Falling back to explicit CSS width/height properties when flex-basis is set to auto.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s2_d2",
      "label": "flex-basis: 0 Absolute Sizing Control",
      "description": "Ignoring content sizes to distribute container space strictly by flex-grow ratios.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s3",
      "label": "Main-Axis vs Cross-Axis Alignment (justify-content / align-items)",
      "description": "Positioning elements along primary flex direction axes and perpendicular cross axes.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s3_d1",
      "label": "justify-content Space Distribution (space-between, space-around, space-evenly)",
      "description": "Controlling gaps between flex items along the main axis.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s3_d2",
      "label": "align-self Per-Item Cross-Axis Overrides",
      "description": "Overriding container align-items rules for individual flex items.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s4",
      "label": "Flex Wrap (flex-wrap: wrap) Multi-Line Formatting",
      "description": "Wrapping flex items onto multiple lines when total basis sizes exceed container width.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s4_d1",
      "label": "align-content Multi-Line Cross-Axis Spacing",
      "description": "Controlling spacing between wrapped flex lines.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s4_d2",
      "label": "Flex Line Independent Sizing",
      "description": "Treating wrapped flex lines as independent flex containers for space distribution.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s5",
      "label": "Gap Property (gap / row-gap / column-gap) Integration",
      "description": "Defining consistent spacing between flex items without applying margin hacks.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s5_d1",
      "label": "Eliminating Negative Margin Container Hacks",
      "description": "Replacing margin tricks with native container gap properties.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t2_s5_d2",
      "label": "Cross-Browser Flex Gap Support",
      "description": "Leveraging universal flex gap support in modern web engines.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3",
      "label": "Container Queries (@container & cqw / cqh Units)",
      "description": "Applying responsive CSS styles based on parent container dimensions rather than browser viewport sizes.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s1",
      "label": "Container Context Creation (container-type: inline-size)",
      "description": "Establishing elements as containment contexts for descendant container queries.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s1_d1",
      "label": "inline-size Containment Type (Width-Based Queries)",
      "description": "Monitoring element inline width changes while allowing block height to adapt to content.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s1_d2",
      "label": "container-name Named Container Contexts",
      "description": "Targeting specific ancestor container elements using explicit container names.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s2",
      "label": "Container Query Units (cqw, cqh, cqi, cqb, cqmin, cqmax)",
      "description": "Sizing text and elements relative to container dimensions.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s2_d1",
      "label": "1cqw = 1% of Container Width Calculation",
      "description": "Scaling font sizes dynamically based on parent component width.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s2_d2",
      "label": "Responsive Component Design Independence",
      "description": "Creating components that adapt seamlessly whether placed in sidebar or main content areas.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s3",
      "label": "Container Style Queries (@container style(...))",
      "description": "Applying CSS rules based on computed style values of parent container elements.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s3_d1",
      "label": "Custom Property Style Queries (@container style(--theme: dark))",
      "description": "Styling descendant elements conditioned on parent CSS custom property values.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s3_d2",
      "label": "Component State-Based Theme Switching",
      "description": "Adapting component child styles based on parent container theme tokens.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s4",
      "label": "Preventing Container Query Infinite Layout Loops",
      "description": "Engine constraints preventing descendant layout changes from altering container dimensions.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s4_d1",
      "label": "Layout & Size Containment Enforcement",
      "description": "Requiring container elements to isolate internal layout changes from affecting container size.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s4_d2",
      "label": "Ignoring Block Dimension Queries on inline-size Containers",
      "description": "Blocking height queries on inline-size containers to prevent circular layout dependencies.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s5",
      "label": "Replacing Viewport Media Queries with Micro-Layouts",
      "description": "Shift from global page media queries to modular, self-contained component styles.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s5_d1",
      "label": "Modular Design System Architecture",
      "description": "Shipping UI components that carry internal responsive layout rules.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t3_s5_d2",
      "label": "Drop-In Micro-Layout Flexibility",
      "description": "Embedding components in any layout grid without writing page-specific media query overrides.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4",
      "label": "View Transitions API & CSS Motion Animations",
      "description": "Native browser API animating seamless DOM state transitions between pages and views.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s1",
      "label": "Single-Page App (SPA) View Transitions (document.startViewTransition)",
      "description": "Capturing DOM snapshots before and after state updates to generate automatic cross-fade transitions.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s1_d1",
      "label": "Old State Screenshot & New State Live Render Capture",
      "description": "Capturing visual snapshots of old DOM states while rendering new DOM states.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s1_d2",
      "label": "Pseudo-Element Transition Tree (::view-transition)",
      "description": "Generating root, group, image-pair, old, and new pseudo-elements for CSS animation styling.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s2",
      "label": "Named View Transitions (view-transition-name)",
      "description": "Linking specific DOM elements across view states to animate positional and size transformations.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s2_d1",
      "label": "Morphing Element Animations (Card to Full Screen)",
      "description": "Animating position, width, and height smooth morphing transitions between UI states.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s2_d2",
      "label": "Unique view-transition-name Assignment Rules",
      "description": "Ensuring unique transition names per active element during transition execution.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s3",
      "label": "Multi-Page App (MPA) Cross-Document View Transitions",
      "description": "Executing native view transitions across standard multi-page HTML navigation jumps.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s3_d1",
      "label": "@view-transition { navigation: auto } Rule",
      "description": "Enabling seamless view transitions for standard cross-document page links.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s3_d2",
      "label": "Same-Origin Requirement Enforcement",
      "description": "Restricting cross-document view transitions to same-origin website pages.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s4",
      "label": "Scroll-Driven Animations (animation-timeline: scroll())",
      "description": "Linking CSS animation progress directly to container scroll offsets without JavaScript.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s4_d1",
      "label": "scroll(root) Viewport Timeline Binding",
      "description": "Driving reading progress bar animations directly by page scroll position.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s4_d2",
      "label": "view() Element Visibility Timelines",
      "description": "Triggering scroll-reveal animations as elements enter and exit viewports.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s5",
      "label": "Hardware-Accelerated CSS Motion Optimizations",
      "description": "Ensuring animations run strictly on compositor threads at native 60fps/120fps display rates.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s5_d1",
      "label": "Transform & Opacity Only Rule",
      "description": "Restricting property animations strictly to transform and opacity.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t4_s5_d2",
      "label": "will-change Property Hints",
      "description": "Informing browser compositor engines to promote animating elements to GPU layers.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5",
      "label": "Modern CSS Architecture & Layout Math Topic 5",
      "description": "Detailed first-principles mechanics for Modern CSS Architecture & Layout Math topic 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s1",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Modern CSS Architecture & Layout Math Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s1_d1",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s1_d2",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s2",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Modern CSS Architecture & Layout Math Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s2_d1",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s2_d2",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s3",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Modern CSS Architecture & Layout Math Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s3_d1",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s3_d2",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s4",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Modern CSS Architecture & Layout Math Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s4_d1",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s4_d2",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s5",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Modern CSS Architecture & Layout Math Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s5_d1",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t5_s5_d2",
      "label": "Modern CSS Architecture & Layout Math Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6",
      "label": "Modern CSS Architecture & Layout Math Topic 6",
      "description": "Detailed first-principles mechanics for Modern CSS Architecture & Layout Math topic 6.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s1",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Modern CSS Architecture & Layout Math Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s1_d1",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s1_d2",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s2",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Modern CSS Architecture & Layout Math Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s2_d1",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s2_d2",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s3",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Modern CSS Architecture & Layout Math Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s3_d1",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s3_d2",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s4",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Modern CSS Architecture & Layout Math Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s4_d1",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s4_d2",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s5",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Modern CSS Architecture & Layout Math Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s5_d1",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p4_t6_s5_d2",
      "label": "Modern CSS Architecture & Layout Math Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Modern CSS Architecture & Layout Math Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p5",
      "label": "DOM Architecture, Virtual DOM & React Fiber",
      "description": "Virtual DOM diffing, React Fiber reconciler work-loop, Concurrent React Suspense, and React Server Components (RSC).",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1",
      "label": "Virtual DOM (VDOM) Mechanics & Reconciliation",
      "description": "Lightweight JavaScript object representation of the real DOM tree used for diffing updates.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s1",
      "label": "VDOM Node Memory Schema ({ type, props, children, key })",
      "description": "Representing UI elements as nested plain JavaScript objects.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s1_d1",
      "label": "React.createElement() Object Output",
      "description": "Compiling JSX syntax into nested VDOM element calls.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s1_d2",
      "label": "Sub-Microsecond VDOM Tree Generation",
      "description": "Creating VDOM object trees in memory rapidly compared to costly C++ DOM manipulations.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s2",
      "label": "Heuristic O(N) Diffing Algorithm (React Reconciliation)",
      "description": "Reducing theoretical O(N^3) tree comparison complexity to linear O(N) time.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s2_d1",
      "label": "Different Element Type Assumption (Instant Subtree Un-mount)",
      "description": "Tearing down old subtrees completely if root element types change (e.g. <div> to <section>).",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s2_d2",
      "label": "Key Property Reconciliation in Lists",
      "description": "Using unique key props to track element identity across array re-orders.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s3",
      "label": "Key Prop Mis-Use Pitfalls (Index as Key)",
      "description": "Performance bugs and state corruption caused by using array index as key props.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s3_d1",
      "label": "Component State Bleed Across Re-Ordered Items",
      "description": "Assigning incorrect internal state to list items when array elements are inserted or deleted.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s3_d2",
      "label": "Un-Necessary Subtree Re-Renders",
      "description": "Forcing full list re-renders on array prepends due to shifting index keys.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s4",
      "label": "Batching DOM Mutations & Minimal Mutation Commit",
      "description": "Calculating minimal set of real DOM operations required to match updated VDOM trees.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s4_d1",
      "label": "DOM Mutation Patch Array Generation",
      "description": "Queueing real DOM operations (appendChild, removeChild, setAttribute).",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s4_d2",
      "label": "Single-Pass Real DOM Commit Phase",
      "description": "Applying all queued DOM modifications in a single synchronous commit pass.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s5",
      "label": "Direct DOM vs Virtual DOM Overhead Realities",
      "description": "Understanding VDOM performance trade-offs compared to direct manual DOM updates (Svelte/SolidJS).",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s5_d1",
      "label": "VDOM Memory & Garbage Collection Overhead",
      "description": "Generating thousands of short-lived VDOM objects on every re-render cycle.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t1_s5_d2",
      "label": "Compiler-Driven Reactive Updates (Svelte Alternative)",
      "description": "Compiling reactivity directly to fine-grained real DOM updates without VDOM trees.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2",
      "label": "React Fiber Reconciler & Concurrent Work Loop",
      "description": "Re-written React reconciliation engine supporting cooperative multi-tasking and interruptible rendering.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s1",
      "label": "Fiber Node Data Structure Architecture",
      "description": "Linked-list node representation of component trees supporting pause, resume, and abort capabilities.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s1_d1",
      "label": "Child, Sibling, and Return Pointer Links",
      "description": "Traversing component trees using singly-linked lists without recursion stack frames.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s1_d2",
      "label": "Alternate Fiber Pointer (Double Buffering)",
      "description": "Maintaining current displayed fiber tree alongside work-in-progress (WIP) fiber tree.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s2",
      "label": "Two-Phase Rendering Architecture (Render vs Commit Phase)",
      "description": "Decoupling interruptible computation from synchronous DOM mutation.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s2_d1",
      "label": "Render Phase (Async & Interruptible)",
      "description": "Traversing fiber trees to calculate changes; can be paused, resumed, or aborted by high-priority tasks.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s2_d2",
      "label": "Commit Phase (Sync & Un-Interruptible)",
      "description": "Mutating real DOM nodes and executing layout effect callbacks in single synchronous passes.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s3",
      "label": "Time-Slicing & Priority Scheduler (lane-based priority)",
      "description": "Slicing heavy rendering work into 5ms chunks to maintain main thread responsiveness.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s3_d1",
      "label": "React Lane Bitmask Priority Levels (Sync, Input, Transition, Idle)",
      "description": "Assigning 31-bit lane masks to prioritize user input updates over data fetches.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s3_d2",
      "label": "RequestIdleCallback & MessageChannel Yielding",
      "description": "Yielding control to browser event loops every 5ms during render phases.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s4",
      "label": "Hook Memory Array Implementation",
      "description": "Storing component state values in ordered singly-linked lists on fiber nodes.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s4_d1",
      "label": "Hook Order Enforcement Rule (No Conditional Hooks)",
      "description": "Requiring hooks to execute in identical order on every render to match index positions.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s4_d2",
      "label": "State & MemoizedState Pointer Progression",
      "description": "Advancing internal hook pointers during functional component execution.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s5",
      "label": "Bailout & Subtree Memoization (React.memo / useMemo)",
      "description": "Pruning unchanged subtrees during fiber reconciliation passes.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s5_d1",
      "label": "Shallow Prop Equality Checks",
      "description": "Bypassing component re-renders if input props are referentially equal.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t2_s5_d2",
      "label": "Referential Equality Preservation via useCallback",
      "description": "Preserving function references across re-renders to prevent memoization breakage.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3",
      "label": "Concurrent React Suspense & Streaming SSR",
      "description": "Suspending component rendering while waiting for async data, and streaming HTML responses over HTTP.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s1",
      "label": "Suspense Promise Thrown Mechanics",
      "description": "Catching thrown promises during component rendering to trigger fallback UI states.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s1_d1",
      "label": "Component Promise Throwing Pattern",
      "description": "Throwing pending data promises during render phase to signal data unavailability.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s1_d2",
      "label": "Suspense Boundary Catch & Fallback Render",
      "description": "Catching thrown promises at nearest Suspense boundary to render fallback spinners.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s2",
      "label": "Streaming HTML Response Render (renderToPipeableStream)",
      "description": "Streaming Server-Side Rendered (SSR) HTML chunks to browsers progressively over HTTP.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s2_d1",
      "label": "Immediate Shell HTML Delivery",
      "description": "Streaming initial HTML page shell instantly before server data fetches complete.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s2_d2",
      "label": "Inline <script> HTML Insertion for Suspended Subtrees",
      "description": "Streaming out-of-order HTML chunks wrapped in <script> tags to swap fallback spinners with completed content.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s3",
      "label": "Selective Hydration Architecture",
      "description": "Hydrating independent HTML page regions progressively as scripts download.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s3_d1",
      "label": "Code-Split Component Hydration Isolation",
      "description": "Hydrating interactive page sections independently without waiting for full page JS bundles.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s3_d2",
      "label": "User-Driven Hydration Prioritization",
      "description": "Prioritizing hydration of specific UI sections clicked by users ahead of scheduled queues.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s4",
      "label": "Transition States & Suspense (useTransition)",
      "description": "Keeping current UI responsive while loading new Suspense views in the background.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s4_d1",
      "label": "Preventing Un-Necessary Fallback Spinners",
      "description": "Retaining current page view while new view data loads in a background transition lane.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s4_d2",
      "label": "Pending State Visual Indicators (isPending)",
      "description": "Displaying subtle inline spinners while background transitions process.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s5",
      "label": "Error Boundaries & Recoverable Failures (componentDidCatch)",
      "description": "Catching runtime JavaScript errors in component subtrees to prevent full app crashes.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s5_d1",
      "label": "Fallback UI Render on Component Error",
      "description": "Rendering localized error messages when subtrees throw uncaught exceptions.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t3_s5_d2",
      "label": "Logging Errors to Observability Services",
      "description": "Capturing component stack traces for Sentry / Datadog logging.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4",
      "label": "React Server Components (RSC) Architecture",
      "description": "Executing components exclusively on application servers, shipping zero JS bundle bytes to client browsers.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s1",
      "label": "Client vs Server Component Boundary (\"use client\")",
      "description": "Explicitly defining boundaries between server-only components and interactive client components.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s1_d1",
      "label": "Server Components (Default Execution on Node.js Server)",
      "description": "Accessing databases, filesystem assets, and internal microservices directly without client bundle overhead.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s1_d2",
      "label": "Client Components (\"use client\" Directive)",
      "description": "Shipping JS code to browsers to enable state, effects, and event listeners.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s2",
      "label": "RSC Binary Payload Serialization Standard",
      "description": "Streaming custom JSON-like binary data format representing Server Component render outputs.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s2_d1",
      "label": "RSC Stream Payload Lines ($L, $F, $K Entry Tokens)",
      "description": "Encoding UI element trees, client component references, and async data slots.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s2_d2",
      "label": "Preserving Client State Across Server Re-Renders",
      "description": "Re-rendering Server Components without resetting surrounding Client Component state.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s3",
      "label": "Server Actions (\"use server\") Remote Procedure Calls",
      "description": "Invoking server-side functions directly from client UI forms and event handlers.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s3_d1",
      "label": "Automated HTTP POST Endpoint Generation",
      "description": "Compiling server functions into secure HTTP POST endpoints automatically.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s3_d2",
      "label": "Progressive Enhancement Form Submissions",
      "description": "Executing form submissions even if client-side JavaScript has not completed downloading.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s4",
      "label": "Zero-Bundle-Size Third-Party Dependencies",
      "description": "Importing heavy NPM packages (marked, date-fns) in Server Components without impacting client bundle sizes.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s4_d1",
      "label": "100% Server-Side Dependency Execution",
      "description": "Keeping heavy parsing and formatting packages entirely on servers.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s4_d2",
      "label": "Drastic Client Bundle Reduction (up to 70% smaller)",
      "description": "Shipping minimal JS bundles containing only interactive client component code.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s5",
      "label": "RSC Data Fetching & Water-Fall Elimination",
      "description": "Executing parallel data fetches directly on fast server-to-database networks.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s5_d1",
      "label": "Co-Located Database Queries (async/await in Components)",
      "description": "Writing SQL queries directly inside async functional Server Components.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t4_s5_d2",
      "label": "Eliminating Multi-Roundtrip Client Waterfalls",
      "description": "Fetching data over microsecond server-to-database connections rather than multi-hundred-millisecond mobile client networks.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5",
      "description": "Detailed first-principles mechanics for DOM Architecture, Virtual DOM & React Fiber topic 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s1",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for DOM Architecture, Virtual DOM & React Fiber Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s1_d1",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s1_d2",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s2",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for DOM Architecture, Virtual DOM & React Fiber Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s2_d1",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s2_d2",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s3",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for DOM Architecture, Virtual DOM & React Fiber Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s3_d1",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s3_d2",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s4",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for DOM Architecture, Virtual DOM & React Fiber Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s4_d1",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s4_d2",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s5",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for DOM Architecture, Virtual DOM & React Fiber Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s5_d1",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t5_s5_d2",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6",
      "description": "Detailed first-principles mechanics for DOM Architecture, Virtual DOM & React Fiber topic 6.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s1",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for DOM Architecture, Virtual DOM & React Fiber Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s1_d1",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s1_d2",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s2",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for DOM Architecture, Virtual DOM & React Fiber Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s2_d1",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s2_d2",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s3",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for DOM Architecture, Virtual DOM & React Fiber Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s3_d1",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s3_d2",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s4",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for DOM Architecture, Virtual DOM & React Fiber Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s4_d1",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s4_d2",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s5",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for DOM Architecture, Virtual DOM & React Fiber Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s5_d1",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p5_t6_s5_d2",
      "label": "DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DOM Architecture, Virtual DOM & React Fiber Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p6",
      "label": "Web Performance Tooling & CDP Profiling",
      "description": "Chrome DevTools Protocol (CDP), Memory Heap Snapshots, Performance Tracing, and Automated Auditing.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1",
      "label": "Chrome DevTools Protocol (CDP) Architecture",
      "description": "WebSocket-based JSON-RPC protocol for inspecting, profiling, and automating Chromium browsers.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s1",
      "label": "CDP Domain Architecture (Page, DOM, Network, Profiler, HeapProfiler)",
      "description": "Partitioning browser automation commands across functional CDP domains.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s1_d1",
      "label": "JSON-RPC 2.0 Message Formatting",
      "description": "Exchanging structured method calls, parameters, and event notifications over WebSocket connections.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s1_d2",
      "label": "Multi-Target CDP Debugging Sessions",
      "description": "Attaching independent CDP sessions to browser targets, iframe contexts, and web workers.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s2",
      "label": "Network Domain Interception & Emulation",
      "description": "Intercepting network requests, modifying headers, and injecting latency/throttling.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s2_d1",
      "label": "Network.emulateNetworkConditions (Latency / Throughput Throttling)",
      "description": "Emulating Slow 3G / Fast 3G profiles programmatically.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s2_d2",
      "label": "Network.setRequestInterception (Mocking API Responses)",
      "description": "Intercepting outgoing HTTP requests to inject mock API responses.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s3",
      "label": "HeapProfiler & CPU Profiler Domain Commands",
      "description": "Capturing CPU profiles and memory heap snapshots programmatically.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s3_d1",
      "label": "HeapProfiler.takeHeapSnapshot (Raw JSON Stream Export)",
      "description": "Exporting raw heap graph nodes and edges for automated leak analysis.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s3_d2",
      "label": "Profiler.startSamplingProfiler (Low-Overhead CPU Sampling)",
      "description": "Recording CPU call stacks at microsecond sampling intervals.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s4",
      "label": "Playwright / Puppeteer CDP Integration",
      "description": "Automating browser testing frameworks using native CDP WebSocket channels.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s4_d1",
      "label": "Direct CDP Session Access (page.context().newCDPSession())",
      "description": "Issuing low-level CDP commands directly within automated E2E test scripts.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s4_d2",
      "label": "Headless Browser Automation Performance Audits",
      "description": "Capturing performance metrics during automated integration tests.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s5",
      "label": "Remote Debugging Port Security (--remote-debugging-port=9222)",
      "description": "Exposing CDP HTTP and WebSocket endpoints for external tooling connections.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s5_d1",
      "label": "Security Risks of Exposed CDP Endpoints",
      "description": "Preventing unauthorized remote code execution by restricting CDP ports to localhost.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t1_s5_d2",
      "label": "WebSocket Security Token Verification",
      "description": "Validating browser-generated WebSocket security tokens.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2",
      "label": "Memory Leak Diagnosis & Heap Snapshot Profiling",
      "description": "Detecting and resolving JavaScript memory leaks using V8 memory profilers.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s1",
      "label": "V8 Heap Memory Snapshot Graph Schema",
      "description": "Structure of V8 memory heap snapshots containing nodes, edges, strings, and samples.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s1_d1",
      "label": "Node Types (Element, Hidden, Object, Array, String, Closure, Synthetic)",
      "description": "Classifying memory allocations across native V8 object types.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s1_d2",
      "label": "Edge Types (Context, Element, Property, Internal, Shortcut, Weak)",
      "description": "Mapping directional reference pointers connecting heap objects.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s2",
      "label": "Shallow Size vs Retained Size Calculations",
      "description": "Distinguishing direct object memory usage from retained sub-graph memory.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s2_d1",
      "label": "Shallow Size (Direct Memory Allocated for Object Headers)",
      "description": "Measuring bytes occupied directly by single objects.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s2_d2",
      "label": "Retained Size (Freed Memory if Object is Garbage Collected)",
      "description": "Calculating total memory released if an object and its exclusive references are garbage collected.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s3",
      "label": "Common JavaScript Memory Leak Patterns",
      "description": "Diagnosing primary coding flaws causing persistent memory growth.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s3_d1",
      "label": "Un-Removed Event Listeners (Global Bus / Window Handlers)",
      "description": "Retaining component references because event listeners were not un-subscribed on un-mount.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s3_d2",
      "label": "Accidental Global Variables (window.leak = ...)",
      "description": "Attaching data objects to global window scopes.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s3_d3",
      "label": "Forgotten Timers & Intervals (setInterval Callback References)",
      "description": "Retaining closed-over variables inside active setInterval callbacks.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s4",
      "label": "3-Snapshot Memory Leak Detection Methodology",
      "description": "Standardized DevTools profiling sequence for isolating memory leaks.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s4_d1",
      "label": "Snapshot 1 (Baseline State) -> Action -> Snapshot 2 -> Revert Action -> Snapshot 3",
      "description": "Recording baseline, action state, and post-cleanup state.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s4_d2",
      "label": "DevTools Comparison View (Objects Allocated Between Snapshots 1 and 3)",
      "description": "Filtering heap objects that persist after reverting actions.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s5",
      "label": "Memlab Automated Memory Leak Detection (Meta)",
      "description": "Automated E2E framework for discovering JavaScript memory leaks in web applications.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s5_d1",
      "label": "Automated Retainer Trace Analysis",
      "description": "Traversing heap graphs programmatically to identify un-released React component trees.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t2_s5_d2",
      "label": "CI/CD Memory Leak Regression Gate",
      "description": "Failing automated PR builds if memory leaks are introduced.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3",
      "label": "CPU Performance Tracing & Long Task Analysis",
      "description": "Analyzing main thread execution traces to resolve UI jank and long tasks.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s1",
      "label": "Flamechart Call Stack Visualization",
      "description": "Reading Chrome DevTools Performance panel flamecharts to locate slow functions.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s1_d1",
      "label": "Flamechart Stack Depth vs Horizontal Duration",
      "description": "Visualizing function call nesting (vertical) and execution time (horizontal).",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s1_d2",
      "label": "Red Triangle Warning Indicators (Long Tasks > 50ms)",
      "description": "Identifying main thread tasks blocking input responsiveness.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s2",
      "label": "Bottom-Up vs Call Tree Profiling Views",
      "description": "Aggregating CPU time to isolate functions with highest heavy work burdens.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s2_d1",
      "label": "Self Time (Time Spent in Function Body Itself)",
      "description": "Sorting functions by direct execution time, excluding child function calls.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s2_d2",
      "label": "Total Time (Time Spent in Function + All Child Calls)",
      "description": "Identifying top-level entry point functions driving long execution chains.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s3",
      "label": "Diagnosing Garbage Collection (GC) Thrashing",
      "description": "Identifying performance degradation caused by frequent short-lived memory allocations.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s3_d1",
      "label": "Sawtooth Memory Pattern Identification",
      "description": "Spotting rapid memory growth followed by frequent GC drops in performance timelines.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s3_d2",
      "label": "Object Pool Pattern Remedy",
      "description": "Re-using pre-allocated object instances to reduce GC allocations in high-frequency loops.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s4",
      "label": "Offloading Heavy Math to Web Workers",
      "description": "Moving CPU-bound computations off the main thread to dedicated Web Workers.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s4_d1",
      "label": "postMessage Data Transfer & Structured Clone Algorithm",
      "description": "Copying data objects asynchronously between main thread and worker threads.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s4_d2",
      "label": "SharedArrayBuffer & Atomics (Zero-Copy Shared Memory)",
      "description": "Sharing memory buffers across threads to perform parallel computations without copy overhead.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s5",
      "label": "Web Vitals DevTools Extension Integration",
      "description": "Real-time visual overlay highlighting Core Web Vitals performance in DevTools.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s5_d1",
      "label": "Real-Time INP & LCP Highlight Overlays",
      "description": "Highlighting LCP elements and INP interaction delays directly on live web pages.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t3_s5_d2",
      "label": "Side-by-Side Trace & Metric Correlation",
      "description": "Correlating main thread CPU tasks directly with Core Web Vitals score drops.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4",
      "label": "Lighthouse Automated Auditing & Performance Budgets",
      "description": "Automated auditing engine evaluating performance, accessibility, SEO, and PWA best practices.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s1",
      "label": "Lighthouse Performance Scoring Weight Algorithm",
      "description": "Weighted average formula calculating overall Lighthouse performance scores (0-100).",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s1_d1",
      "label": "Metric Weights (INP 25%, LCP 25%, TBT 30%, CLS 15%, FCP 10%)",
      "description": "Calculating overall performance scores based on weighted metric contributions.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s1_d2",
      "label": "Log-Normal Distribution Curve Scoring",
      "description": "Mapping raw metric values (ms) to 0-100 scores using empirical log-normal curves.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s2",
      "label": "Total Blocking Time (TBT) Lab Metric",
      "description": "Measuring total duration of all long tasks between First Contentful Paint (FCP) and Time to Interactive (TTI).",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s2_d1",
      "label": "Sum of Excess Task Durations (Task Time - 50ms)",
      "description": "Accumulating main thread blocking time exceeding 50ms per task.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s2_d2",
      "label": "Lab Proxy Metric for Field INP",
      "description": "Using TBT in lab environments to estimate real-user INP responsiveness.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s3",
      "label": "Lightweight Bundle Analysis & Tree-Shaking Audits",
      "description": "Identifying un-used JavaScript and CSS bytes shipped to client browsers.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s3_d1",
      "label": "DevTools Coverage Panel Audits",
      "description": "Measuring exact percentage of un-executed code shipped in bundle files.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s3_d2",
      "label": "ES Module Tree-Shaking Optimization",
      "description": "Eliminating dead code exports using static ES module import analysis.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s4",
      "label": "Lighthouse Budgets (budget.json Specs)",
      "description": "Enforcing maximum bundle size and resource count limits in Lighthouse CI.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s4_d1",
      "label": "Resource Budget Declarations (script <= 150KB, total <= 500KB)",
      "description": "Defining maximum allowed byte limits per resource type.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s4_d2",
      "label": "CI Build Failure Triggers",
      "description": "Failing pull requests automatically if resource size budgets are exceeded.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s5",
      "label": "Source Map Explorer & Bundle Decomposition",
      "description": "Visualizing npm package contributions to final production JavaScript bundles.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s5_d1",
      "label": "Treemap Visualization of Bundle Footprints",
      "description": "Identifying bloated third-party dependencies (e.g. Full lodash vs lodash-es).",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t4_s5_d2",
      "label": "Dynamic import() Code Splitting Routes",
      "description": "Splitting application code bundles by route using dynamic import() calls.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5",
      "label": "Web Performance Tooling & CDP Profiling Topic 5",
      "description": "Detailed first-principles mechanics for Web Performance Tooling & CDP Profiling topic 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s1",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Web Performance Tooling & CDP Profiling Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s1_d1",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s1_d2",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s2",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Web Performance Tooling & CDP Profiling Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s2_d1",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s2_d2",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s3",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Web Performance Tooling & CDP Profiling Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s3_d1",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s3_d2",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s4",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Web Performance Tooling & CDP Profiling Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s4_d1",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s4_d2",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s5",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Web Performance Tooling & CDP Profiling Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s5_d1",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t5_s5_d2",
      "label": "Web Performance Tooling & CDP Profiling Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6",
      "label": "Web Performance Tooling & CDP Profiling Topic 6",
      "description": "Detailed first-principles mechanics for Web Performance Tooling & CDP Profiling topic 6.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s1",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Web Performance Tooling & CDP Profiling Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s1_d1",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s1_d2",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s2",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Web Performance Tooling & CDP Profiling Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s2_d1",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s2_d2",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s3",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Web Performance Tooling & CDP Profiling Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s3_d1",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s3_d2",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s4",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Web Performance Tooling & CDP Profiling Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s4_d1",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s4_d2",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s5",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Web Performance Tooling & CDP Profiling Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s5_d1",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p6_t6_s5_d2",
      "label": "Web Performance Tooling & CDP Profiling Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Web Performance Tooling & CDP Profiling Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p7",
      "label": "WebAssembly (Wasm) & Native Web Workers",
      "description": "Wasm binary format, linear memory, C++/Rust compilation, Web Workers multi-threading, and Atomics locks.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1",
      "label": "WebAssembly (Wasm) Binary Format & Execution Model",
      "description": "Low-level sandboxed binary instruction format executing at near-native speeds in web browsers.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s1",
      "label": "Wasm Binary Module Architecture (.wasm)",
      "description": "Binary module structure containing Type, Import, Function, Memory, and Export sections.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s1_d1",
      "label": "Compact Binary Encoding Magic Header (\u0000asm)",
      "description": "Parsing compact binary modules rapidly compared to verbose JavaScript text.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s1_d2",
      "label": "WebAssembly Text Format (.wat)",
      "description": "Human-readable s-expression text format for inspecting Wasm bytecodes.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s2",
      "label": "Linear Memory Architecture (WebAssembly.Memory)",
      "description": "Resizable array of un-typed raw bytes accessible by both Wasm and JavaScript.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s2_d1",
      "label": "64KB Memory Page Allocation Units",
      "description": "Growing Wasm linear memory in 64KB page increments.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s2_d2",
      "label": "ArrayBuffer & DataView JavaScript Interop",
      "description": "Reading and writing Wasm memory directly via JavaScript DataView wrappers.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s3",
      "label": "Wasm Type System & Value Types (i32, i64, f32, f64)",
      "description": "Strict 4-type numerical value system executing directly on hardware CPU registers.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s3_d1",
      "label": "Native 64-Bit Integer Support (i64)",
      "description": "Executing 64-bit integer operations directly without JavaScript BigInt wrapper overhead.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s3_d2",
      "label": "Zero Dynamic Type Checks",
      "description": "Executing compiled machine code without dynamic type checking overhead.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s4",
      "label": "Wasm JIT Compilation & Baseline Compiler Tiers",
      "description": "Two-tier compilation in V8 (Liftoff baseline compiler -> TurboFan optimizing compiler).",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s4_d1",
      "label": "Liftoff Streaming Baseline Compiler",
      "description": "Compiling Wasm bytecodes to native machine code in a single pass during network download.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s4_d2",
      "label": "TurboFan Background Optimization",
      "description": "Re-compiling hot Wasm functions in background threads to maximize execution performance.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s5",
      "label": "Security Sandbox Boundaries & Control Flow Integrity",
      "description": "Executing untrusted Wasm code in isolated memory sandboxes.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s5_d1",
      "label": "Linear Memory Bounds Checking",
      "description": "Preventing Wasm code from reading or writing memory outside allocated linear buffers.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t1_s5_d2",
      "label": "Typed Indirect Call Tables (Control Flow Integrity)",
      "description": "Restricting function pointer calls to valid typed entries in explicit function tables.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2",
      "label": "C++ / Rust Compilation Pipelines to Wasm",
      "description": "Compiling native C++ and Rust codebases into Wasm using Emscripten and wasm-pack.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s1",
      "label": "Emscripten Compiler Toolchain (emcc / LLVM Backend)",
      "description": "Compiling C/C++ projects into Wasm alongside JavaScript glue code.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s1_d1",
      "label": "POSIX System Call Emulation",
      "description": "Emulating standard C library functions (stdio, malloc) in JavaScript browser environments.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s1_d2",
      "label": "EMSCRIPTEN_KEEPALIVE Export Annotations",
      "description": "Preventing C++ functions from being removed by dead code elimination.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s2",
      "label": "Rust to Wasm Toolchain (wasm-pack & wasm-bindgen)",
      "description": "Compiling Rust crates to lightweight Wasm modules with automatic TypeScript definitions.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s2_d1",
      "label": "wasm-bindgen Macro Interop ([wasm_bindgen])",
      "description": "Generating seamless binding wrappers between Rust data types and JavaScript objects.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s2_d2",
      "label": "Zero-Cost Abstractions & Memory Safety",
      "description": "Leveraging Rust memory safety guarantees without garbage collection overhead.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s3",
      "label": "FFI (Foreign Function Interface) & String/Struct Passing",
      "description": "Passing complex data structures across JavaScript and Wasm memory boundaries.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s3_d1",
      "label": "UTF-8 String Encoding / Decoding Memory Transfers",
      "description": "Copying string bytes into Wasm linear memory using TextEncoder / TextDecoder.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s3_d2",
      "label": "Struct Layout Pointer Offsets",
      "description": "Accessing C/Rust struct fields in linear memory using byte offsets.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s4",
      "label": "Wasm Component Model & Interface Types (WIT Specs)",
      "description": "Next-gen standard for composable inter-language WebAssembly components.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s4_d1",
      "label": "WebAssembly Interface Type (WIT) IDL Declarations",
      "description": "Defining high-level rich data types (strings, records, lists) for cross-language interop.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s4_d2",
      "label": "Direct Wasm-to-Wasm Module Linking",
      "description": "Linking distinct Rust, C++, and Go Wasm modules without custom JavaScript glue code.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s5",
      "label": "Wasm SIMD128 Vector Acceleration",
      "description": "Leveraging 128-bit hardware SIMD vector instructions inside WebAssembly modules.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s5_d1",
      "label": "v128 Vector Value Type Support",
      "description": "Processing 4 float32 or 16 int8 values simultaneously in Wasm.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t2_s5_d2",
      "label": "4x Speedup for Image & Audio Processing",
      "description": "Accelerating matrix math, video decoding, and image filters in browser apps.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3",
      "label": "Web Workers & SharedArrayBuffer Multi-Threading",
      "description": "Executing multi-threaded parallel workloads in web browsers using Web Workers and shared memory.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s1",
      "label": "Dedicated vs Shared vs Service Workers",
      "description": "Distinguishing worker types, lifetimes, and communication capabilities.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s1_d1",
      "label": "Dedicated Web Workers (Single Owner Script)",
      "description": "Running background tasks tied to single page document contexts.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s1_d2",
      "label": "Shared Workers (Cross-Tab Communication Hub)",
      "description": "Sharing single background worker instances across multiple browser tabs/windows.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s1_d3",
      "label": "Service Workers (Network Proxy & Cache Control)",
      "description": "Intercepting network requests for offline PWA support and push notifications.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s2",
      "label": "Structured Clone Algorithm vs Transferable Objects",
      "description": "Passing data messages between main thread and worker threads.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s2_d1",
      "label": "Structured Clone Deep Copying",
      "description": "Deep-copying objects during postMessage calls, incurring memory allocation overhead.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s2_d2",
      "label": "ArrayBuffer Transferable Objects (Zero-Copy Transfer)",
      "description": "Transferring ArrayBuffer ownership instantly to worker threads, resetting original reference to 0 bytes.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s3",
      "label": "SharedArrayBuffer Shared Memory Architecture",
      "description": "Exposing shared memory regions accessible simultaneously by main thread and worker threads.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s3_d1",
      "label": "Concurrent Multi-Threaded Shared Access",
      "description": "Reading and writing identical memory buffers across parallel threads without postMessage copying.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s3_d2",
      "label": "Cross-Origin Isolation Security Requirements (COOP / COEP)",
      "description": "Requiring Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy headers to enable SharedArrayBuffer.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s4",
      "label": "Atomics API Synchronization Primitives",
      "description": "Providing thread synchronization operations for SharedArrayBuffer memory.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s4_d1",
      "label": "Atomics.add / Atomics.sub / Atomics.compareExchange",
      "description": "Executing atomic memory operations preventing data race conditions.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s4_d2",
      "label": "Atomics.wait & Atomics.notify (Thread Blocking / Waking)",
      "description": "Putting worker threads to sleep until notified by other threads (Mutex implementation).",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s5",
      "label": "Comlink Library (RPC Abstraction Over Web Workers)",
      "description": "Exposing worker thread functions as transparent async Promises on the main thread.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s5_d1",
      "label": "Comlink.wrap() Proxy Interface",
      "description": "Wrapping postMessage communication channels behind standard JavaScript function calls.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t3_s5_d2",
      "label": "Seamless Worker Integration in React Apps",
      "description": "Offloading heavy computations to workers with zero boilerplate code.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4",
      "label": "Wasm & Worker Use Cases (Image, Crypto, GIS, Video)",
      "description": "Real-world production applications leveraging Wasm and Web Workers for high performance.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s1",
      "label": "Client-Side Video & Audio Encoding (FFmpeg Wasm)",
      "description": "Transcoding video files locally in browser clients using compiled FFmpeg C libraries.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s1_d1",
      "label": "Eliminating Cloud Video Transcoding Costs",
      "description": "Processing video files on user hardware prior to uploading.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s1_d2",
      "label": "Real-Time Audio Waveform & Effect Processing",
      "description": "Executing DSP filters and audio synthesis in Web Audio API Worklets.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s2",
      "label": "Complex CAD & Vector Graphics Engines (Figma)",
      "description": "Powering high-performance interactive 2D/3D canvas rendering engines with C++/Wasm.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s2_d1",
      "label": "Sub-Millisecond Vector Canvas Rendering",
      "description": "Rendering tens of thousands of complex vector paths at 60fps.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s2_d2",
      "label": "Shared Memory Document Model Synchronization",
      "description": "Syncing collaborative document edits across workers in real time.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s3",
      "label": "High-Speed Cryptography & Client-Side Encryption",
      "description": "Executing heavy cryptographic operations (AES-GCM, ZKP proofs) in Wasm modules.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s3_d1",
      "label": "Zero-Knowledge Proof Generation in Browser",
      "description": "Computing zk-SNARK proofs locally to preserve user privacy.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s3_d2",
      "label": "Sub-Second End-to-End Encryption Key Exchanges",
      "description": "Encrypting large file attachments prior to cloud storage upload.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s4",
      "label": "Geospatial & GIS Tile Rendering (Mapbox / Deck.gl)",
      "description": "Parsing and rendering million-point vector map tiles in WebGL using Wasm decoders.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s4_d1",
      "label": "Protobuf Map Tile Decoding in Worker Threads",
      "description": "Parsing binary map vector tiles off main threads.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s4_d2",
      "label": "Smooth 60fps Map Panning & Zooming",
      "description": "Streaming decoded vertex buffers directly to WebGL GPU buffers.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s5",
      "label": "Client-Side AI Inference (ONNX Runtime Web / Transformers.js)",
      "description": "Running deep learning models (Whisper, Stable Diffusion) locally in browser clients.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s5_d1",
      "label": "Wasm SIMD + WebGPU AI Acceleration",
      "description": "Executing neural network matrix multiplications using WebGPU and Wasm SIMD.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t4_s5_d2",
      "label": "100% Offline Private Local AI Execution",
      "description": "Processing speech recognition and image generation without sending data to servers.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5",
      "description": "Detailed first-principles mechanics for WebAssembly (Wasm) & Native Web Workers topic 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s1",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for WebAssembly (Wasm) & Native Web Workers Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s1_d1",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s1_d2",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s2",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for WebAssembly (Wasm) & Native Web Workers Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s2_d1",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s2_d2",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s3",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for WebAssembly (Wasm) & Native Web Workers Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s3_d1",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s3_d2",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s4",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for WebAssembly (Wasm) & Native Web Workers Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s4_d1",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s4_d2",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s5",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for WebAssembly (Wasm) & Native Web Workers Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s5_d1",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t5_s5_d2",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6",
      "description": "Detailed first-principles mechanics for WebAssembly (Wasm) & Native Web Workers topic 6.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s1",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for WebAssembly (Wasm) & Native Web Workers Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s1_d1",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s1_d2",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s2",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for WebAssembly (Wasm) & Native Web Workers Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s2_d1",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s2_d2",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s3",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for WebAssembly (Wasm) & Native Web Workers Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s3_d1",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s3_d2",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s4",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for WebAssembly (Wasm) & Native Web Workers Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s4_d1",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s4_d2",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s5",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for WebAssembly (Wasm) & Native Web Workers Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s5_d1",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p7_t6_s5_d2",
      "label": "WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for WebAssembly (Wasm) & Native Web Workers Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p8",
      "label": "Client-State Architecture, Offline & Caching",
      "description": "Stale-While-Revalidate (SWR), IndexedDB transactions, Service Worker cache-first strategies, and WebSockets sync.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1",
      "label": "Stale-While-Revalidate (SWR) & Query Caching",
      "description": "Client-side data fetching paradigm returning cached data immediately while fetching fresh updates in background.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s1",
      "label": "SWR Cache State Machine (Stale Data -> Revalidate -> Mutate)",
      "description": "Serving instant UI responses from local cache while issuing background HTTP revalidations.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s1_d1",
      "label": "Zero-Latency Instant Page Navigation",
      "description": "Rendering cached data instantly upon component mounting.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s1_d2",
      "label": "Background Revalidation & UI Re-render",
      "description": "Updating cache and triggering component re-renders when fresh server data arrives.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s2",
      "label": "TanStack Query (React Query) Architecture",
      "description": "Asynchronous state management engine handling query caching, deduplication, and garbage collection.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s2_d1",
      "label": "Query Key Hash Cache Keys (queryKey: [\"users\", id])",
      "description": "Hashing query key arrays to manage unique cache entries.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s2_d2",
      "label": "StaleTime vs GC Time (cacheTime) Specifications",
      "description": "Distinguishing data freshness windows (staleTime) from memory retention duration (gcTime).",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s3",
      "label": "Automatic Request Deduplication & Batching",
      "description": "Combining duplicate concurrent component data requests into single network fetches.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s3_d1",
      "label": "Concurrent Promise Sharing",
      "description": "Directing multiple mounting components requesting identical query keys to share single active Promises.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s3_d2",
      "label": "Preventing Network Waterfall Storms",
      "description": "Eliminating duplicate HTTP requests fired during complex UI component rendering.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s4",
      "label": "Optimistic UI Updates & Rollback Strategies",
      "description": "Updating local UI state immediately before server mutation HTTP requests complete.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s4_d1",
      "label": "Instant UI Feedback Response",
      "description": "Adding items to UI lists immediately upon user action.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s4_d2",
      "label": "Automatic Rollback on Server Error",
      "description": "Reverting local cache to previous snapshot if server mutation fails.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s5",
      "label": "Focus & Network Re-connection Revalidation",
      "description": "Re-validating active queries automatically when users refocus browser windows or regain internet connections.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s5_d1",
      "label": "Window focus Event Listener Triggers",
      "description": "Fetching fresh data when users return to background browser tabs.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t1_s5_d2",
      "label": "Network online Event Re-connection Sync",
      "description": "Syncing pending mutations automatically when internet connections restore.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2",
      "label": "IndexedDB Transactions & Local Database Storage",
      "description": "Browser-native transactional document-oriented database for storing large structured datasets client-side.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s1",
      "label": "IndexedDB Object Store & Index Architecture",
      "description": "Structuring local key-value Object Stores and secondary indexes.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s1_d1",
      "label": "Key Path & Auto-Increment Primary Keys",
      "description": "Defining primary key paths (e.g. keyPath: \"id\") for stored JavaScript objects.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s1_d2",
      "label": "Secondary Index Lookups (store.createIndex())",
      "description": "Indexing object attributes to execute fast secondary range queries.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s2",
      "label": "Transaction Isolation & Scope (readonly / readwrite)",
      "description": "Executing ACID transactions across multiple Object Stores.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s2_d1",
      "label": "Transaction Auto-Commit Rules",
      "description": "Auto-committing transactions when control returns to event loops without active requests.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s2_d2",
      "label": "Concurrent Read / Exclusive Write Locking",
      "description": "Preventing concurrent write transactions on identical Object Stores.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s3",
      "label": "IndexedDB Storage Quotas & Persistence (navigator.storage)",
      "description": "Managing browser storage limits and requesting persistent non-evictable storage.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s3_d1",
      "label": "Percent-of-Free-Disk Storage Quotas (up to 80% available disk)",
      "description": "Storing tens of gigabytes of local application data.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s3_d2",
      "label": "navigator.storage.persist() Eviction Exemption",
      "description": "Requesting browser permission to exempt IndexedDB databases from automatic storage clearing.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s4",
      "label": "IDB Wrapper Libraries (idb / Dexie.js)",
      "description": "Wrapping verbose event-based IndexedDB APIs in modern Promise-based interfaces.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s4_d1",
      "label": "Dexie.js Fluent Query Syntax",
      "description": "Executing complex indexed queries using chainable Promise methods.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s4_d2",
      "label": "Live Query Subscriptions (useLiveQuery)",
      "description": "Binding React UI components directly to local IndexedDB database updates.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s5",
      "label": "Local-First Architecture (CRDTs & SQLite Wasm)",
      "description": "Building applications that read/write to local databases first, syncing asynchronously to servers.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s5_d1",
      "label": "SQLite Compiled to Wasm with Origin Private File System (OPFS)",
      "description": "Running full relational SQL databases inside web browser clients.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t2_s5_d2",
      "label": "Conflict-Free Replicated Data Types (CRDTs / Yjs)",
      "description": "Resolving multi-user concurrent offline edits without server lock conflicts.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3",
      "label": "Service Workers & Offline Cache-First Strategies",
      "description": "Programmable network proxies executing in background workers to enable offline PWA experiences.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s1",
      "label": "Service Worker Lifecycle (Install -> Activate -> Fetch)",
      "description": "Managing background Service Worker installation, activation, and network intercept states.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s1_d1",
      "label": "Install Phase Asset Pre-Caching (caches.open())",
      "description": "Pre-downloading static HTML, CSS, and JS assets during worker installation.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s1_d2",
      "label": "Activate Phase Old Cache Cleanup (self.skipWaiting())",
      "description": "Purging obsolete static asset caches when new Service Worker versions deploy.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s2",
      "label": "Cache-First (Cache Falling Back to Network) Strategy",
      "description": "Serving static assets immediately from Cache Storage, fetching from network only on cache misses.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s2_d1",
      "label": "Sub-10-Millisecond Static Asset Delivery",
      "description": "Bypassing network roundtrips entirely for cached JS, CSS, and font files.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s2_d2",
      "label": "Complete Offline PWA Execution",
      "description": "Loading full application UIs even when devices have zero network connectivity.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s3",
      "label": "Network-First (Network Falling Back to Cache) Strategy",
      "description": "Attempting fresh network fetches first, falling back to cached responses when offline.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s3_d1",
      "label": "Fresh Data Prioritization for Dynamic Feeds",
      "description": "Ensuring users receive latest news and data feeds when online.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s3_d2",
      "label": "Offline Fallback Display",
      "description": "Serving last-known cached data feed when network requests fail.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s4",
      "label": "Stale-While-Revalidate Service Worker Caching",
      "description": "Serving cached responses instantly while dispatching background network updates to refresh cache.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s4_d1",
      "label": "Workbox Library Caching Modules",
      "description": "Configuring enterprise caching strategies using Google Workbox.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s4_d2",
      "label": "Expiration Plugin Control (maxEntries / maxAgeSeconds)",
      "description": "Evicting old cached responses automatically to prevent disk bloating.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s5",
      "label": "Background Sync API (self.registration.sync)",
      "description": "Deferring network requests until stable internet connections are established.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s5_d1",
      "label": "Offline Action Queueing (IndexedDB Outbox)",
      "description": "Queuing user form submissions and messages locally while offline.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t3_s5_d2",
      "label": "Automated Background Sync Re-try",
      "description": "Retrying queued network requests automatically in background when connectivity restores.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4",
      "label": "WebSockets & Real-Time Sync Engines",
      "description": "Bi-directional persistent full-duplex TCP communication channels between client browsers and servers.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s1",
      "label": "WebSocket Handshake Protocol (HTTP Upgrade Request)",
      "description": "Upgrading standard HTTP connections to persistent full-duplex WebSocket connections.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s1_d1",
      "label": "HTTP 101 Switching Protocols Response",
      "description": "Exchanging Sec-WebSocket-Key and Sec-WebSocket-Accept headers to establish connection.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s1_d2",
      "label": "Low-Overhead Framing Protocol (2-10 Byte Frame Headers)",
      "description": "Streaming small data frames with minimal network header overhead compared to HTTP.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s2",
      "label": "Heartbeat Ping/Pong & Connection Health Monitoring",
      "description": "Detecting silent TCP connection drops using periodic ping/pong frame exchanges.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s2_d1",
      "label": "Ping/Pong Keep-Alive Frames",
      "description": "Exchanging heartbeat frames every 30s to prevent router NAT timeout drops.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s2_d2",
      "label": "Automatic Exponential Backoff Re-connection",
      "description": "Re-connecting dropped WebSockets automatically using jittered exponential backoff intervals.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s3",
      "label": "Real-Time State Synchronization (Delta Sync / Operational Transform)",
      "description": "Streaming incremental state updates across collaborative multi-user applications.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s3_d1",
      "label": "Operational Transformation (OT) Concurrency Control",
      "description": "Resolving concurrent document edits in real-time collaborative editors (e.g. Google Docs).",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s3_d2",
      "label": "Compact Binary Payload Formatting (Protobuf / MessagePack)",
      "description": "Serializing WebSocket state messages into compact binary formats.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s4",
      "label": "Server-Sent Events (SSE / EventSource) Alternative",
      "description": "Lightweight unidirectional text streaming channel from server to client over standard HTTP.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s4_d1",
      "label": "text/event-stream Response Formatting",
      "description": "Streaming real-time text events using simple event: and data: line formats.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s4_d2",
      "label": "Native Auto-Re-connection & Last-Event-ID Recovery",
      "description": "Resuming interrupted event streams automatically using Last-Event-ID headers.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s5",
      "label": "WebRTC Data Channels (RTCDataChannel) Peer-to-Peer",
      "description": "Direct peer-to-peer browser communication channels bypassing central servers for ultra-low latency.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s5_d1",
      "label": "SCTP Protocol Over DTLS/UDP Encapsulation",
      "description": "Streaming reliable or un-reliable low-latency data packets directly between peers.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t4_s5_d2",
      "label": "Sub-50-Millisecond Peer-to-Peer Latencies",
      "description": "Enabling real-time multi-player gaming and video/audio mesh networking.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5",
      "label": "Client-State Architecture, Offline & Caching Topic 5",
      "description": "Detailed first-principles mechanics for Client-State Architecture, Offline & Caching topic 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s1",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Client-State Architecture, Offline & Caching Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s1_d1",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s1_d2",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s2",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Client-State Architecture, Offline & Caching Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s2_d1",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s2_d2",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s3",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Client-State Architecture, Offline & Caching Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s3_d1",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s3_d2",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s4",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Client-State Architecture, Offline & Caching Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s4_d1",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s4_d2",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s5",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Client-State Architecture, Offline & Caching Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s5_d1",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t5_s5_d2",
      "label": "Client-State Architecture, Offline & Caching Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6",
      "label": "Client-State Architecture, Offline & Caching Topic 6",
      "description": "Detailed first-principles mechanics for Client-State Architecture, Offline & Caching topic 6.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s1",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Client-State Architecture, Offline & Caching Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s1_d1",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s1_d2",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s2",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Client-State Architecture, Offline & Caching Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s2_d1",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s2_d2",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s3",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Client-State Architecture, Offline & Caching Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s3_d1",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s3_d2",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s4",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Client-State Architecture, Offline & Caching Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s4_d1",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s4_d2",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s5",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Client-State Architecture, Offline & Caching Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s5_d1",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "web_root_p8_t6_s5_d2",
      "label": "Client-State Architecture, Offline & Caching Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Client-State Architecture, Offline & Caching Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "web_root",
      "target": "web_root_p1"
    },
    {
      "source": "web_root_p1",
      "target": "web_root_p1_t1"
    },
    {
      "source": "web_root_p1_t1",
      "target": "web_root_p1_t1_s1"
    },
    {
      "source": "web_root_p1_t1_s1",
      "target": "web_root_p1_t1_s1_d1"
    },
    {
      "source": "web_root_p1_t1_s1",
      "target": "web_root_p1_t1_s1_d2"
    },
    {
      "source": "web_root_p1_t1",
      "target": "web_root_p1_t1_s2"
    },
    {
      "source": "web_root_p1_t1_s2",
      "target": "web_root_p1_t1_s2_d1"
    },
    {
      "source": "web_root_p1_t1_s2",
      "target": "web_root_p1_t1_s2_d2"
    },
    {
      "source": "web_root_p1_t1",
      "target": "web_root_p1_t1_s3"
    },
    {
      "source": "web_root_p1_t1_s3",
      "target": "web_root_p1_t1_s3_d1"
    },
    {
      "source": "web_root_p1_t1_s3",
      "target": "web_root_p1_t1_s3_d2"
    },
    {
      "source": "web_root_p1_t1",
      "target": "web_root_p1_t1_s4"
    },
    {
      "source": "web_root_p1_t1_s4",
      "target": "web_root_p1_t1_s4_d1"
    },
    {
      "source": "web_root_p1_t1_s4",
      "target": "web_root_p1_t1_s4_d2"
    },
    {
      "source": "web_root_p1_t1",
      "target": "web_root_p1_t1_s5"
    },
    {
      "source": "web_root_p1_t1_s5",
      "target": "web_root_p1_t1_s5_d1"
    },
    {
      "source": "web_root_p1_t1_s5",
      "target": "web_root_p1_t1_s5_d2"
    },
    {
      "source": "web_root_p1",
      "target": "web_root_p1_t2"
    },
    {
      "source": "web_root_p1_t2",
      "target": "web_root_p1_t2_s1"
    },
    {
      "source": "web_root_p1_t2_s1",
      "target": "web_root_p1_t2_s1_d1"
    },
    {
      "source": "web_root_p1_t2_s1",
      "target": "web_root_p1_t2_s1_d2"
    },
    {
      "source": "web_root_p1_t2",
      "target": "web_root_p1_t2_s2"
    },
    {
      "source": "web_root_p1_t2_s2",
      "target": "web_root_p1_t2_s2_d1"
    },
    {
      "source": "web_root_p1_t2_s2",
      "target": "web_root_p1_t2_s2_d2"
    },
    {
      "source": "web_root_p1_t2",
      "target": "web_root_p1_t2_s3"
    },
    {
      "source": "web_root_p1_t2_s3",
      "target": "web_root_p1_t2_s3_d1"
    },
    {
      "source": "web_root_p1_t2_s3",
      "target": "web_root_p1_t2_s3_d2"
    },
    {
      "source": "web_root_p1_t2",
      "target": "web_root_p1_t2_s4"
    },
    {
      "source": "web_root_p1_t2_s4",
      "target": "web_root_p1_t2_s4_d1"
    },
    {
      "source": "web_root_p1_t2_s4",
      "target": "web_root_p1_t2_s4_d2"
    },
    {
      "source": "web_root_p1_t2",
      "target": "web_root_p1_t2_s5"
    },
    {
      "source": "web_root_p1_t2_s5",
      "target": "web_root_p1_t2_s5_d1"
    },
    {
      "source": "web_root_p1_t2_s5",
      "target": "web_root_p1_t2_s5_d2"
    },
    {
      "source": "web_root_p1",
      "target": "web_root_p1_t3"
    },
    {
      "source": "web_root_p1_t3",
      "target": "web_root_p1_t3_s1"
    },
    {
      "source": "web_root_p1_t3_s1",
      "target": "web_root_p1_t3_s1_d1"
    },
    {
      "source": "web_root_p1_t3_s1",
      "target": "web_root_p1_t3_s1_d2"
    },
    {
      "source": "web_root_p1_t3",
      "target": "web_root_p1_t3_s2"
    },
    {
      "source": "web_root_p1_t3_s2",
      "target": "web_root_p1_t3_s2_d1"
    },
    {
      "source": "web_root_p1_t3_s2",
      "target": "web_root_p1_t3_s2_d2"
    },
    {
      "source": "web_root_p1_t3",
      "target": "web_root_p1_t3_s3"
    },
    {
      "source": "web_root_p1_t3_s3",
      "target": "web_root_p1_t3_s3_d1"
    },
    {
      "source": "web_root_p1_t3_s3",
      "target": "web_root_p1_t3_s3_d2"
    },
    {
      "source": "web_root_p1_t3",
      "target": "web_root_p1_t3_s4"
    },
    {
      "source": "web_root_p1_t3_s4",
      "target": "web_root_p1_t3_s4_d1"
    },
    {
      "source": "web_root_p1_t3_s4",
      "target": "web_root_p1_t3_s4_d2"
    },
    {
      "source": "web_root_p1_t3",
      "target": "web_root_p1_t3_s5"
    },
    {
      "source": "web_root_p1_t3_s5",
      "target": "web_root_p1_t3_s5_d1"
    },
    {
      "source": "web_root_p1_t3_s5",
      "target": "web_root_p1_t3_s5_d2"
    },
    {
      "source": "web_root_p1",
      "target": "web_root_p1_t4"
    },
    {
      "source": "web_root_p1_t4",
      "target": "web_root_p1_t4_s1"
    },
    {
      "source": "web_root_p1_t4_s1",
      "target": "web_root_p1_t4_s1_d1"
    },
    {
      "source": "web_root_p1_t4_s1",
      "target": "web_root_p1_t4_s1_d2"
    },
    {
      "source": "web_root_p1_t4",
      "target": "web_root_p1_t4_s2"
    },
    {
      "source": "web_root_p1_t4_s2",
      "target": "web_root_p1_t4_s2_d1"
    },
    {
      "source": "web_root_p1_t4_s2",
      "target": "web_root_p1_t4_s2_d2"
    },
    {
      "source": "web_root_p1_t4",
      "target": "web_root_p1_t4_s3"
    },
    {
      "source": "web_root_p1_t4_s3",
      "target": "web_root_p1_t4_s3_d1"
    },
    {
      "source": "web_root_p1_t4_s3",
      "target": "web_root_p1_t4_s3_d2"
    },
    {
      "source": "web_root_p1_t4",
      "target": "web_root_p1_t4_s4"
    },
    {
      "source": "web_root_p1_t4_s4",
      "target": "web_root_p1_t4_s4_d1"
    },
    {
      "source": "web_root_p1_t4_s4",
      "target": "web_root_p1_t4_s4_d2"
    },
    {
      "source": "web_root_p1_t4",
      "target": "web_root_p1_t4_s5"
    },
    {
      "source": "web_root_p1_t4_s5",
      "target": "web_root_p1_t4_s5_d1"
    },
    {
      "source": "web_root_p1_t4_s5",
      "target": "web_root_p1_t4_s5_d2"
    },
    {
      "source": "web_root_p1",
      "target": "web_root_p1_t5"
    },
    {
      "source": "web_root_p1_t5",
      "target": "web_root_p1_t5_s1"
    },
    {
      "source": "web_root_p1_t5_s1",
      "target": "web_root_p1_t5_s1_d1"
    },
    {
      "source": "web_root_p1_t5_s1",
      "target": "web_root_p1_t5_s1_d2"
    },
    {
      "source": "web_root_p1_t5",
      "target": "web_root_p1_t5_s2"
    },
    {
      "source": "web_root_p1_t5_s2",
      "target": "web_root_p1_t5_s2_d1"
    },
    {
      "source": "web_root_p1_t5_s2",
      "target": "web_root_p1_t5_s2_d2"
    },
    {
      "source": "web_root_p1_t5",
      "target": "web_root_p1_t5_s3"
    },
    {
      "source": "web_root_p1_t5_s3",
      "target": "web_root_p1_t5_s3_d1"
    },
    {
      "source": "web_root_p1_t5_s3",
      "target": "web_root_p1_t5_s3_d2"
    },
    {
      "source": "web_root_p1_t5",
      "target": "web_root_p1_t5_s4"
    },
    {
      "source": "web_root_p1_t5_s4",
      "target": "web_root_p1_t5_s4_d1"
    },
    {
      "source": "web_root_p1_t5_s4",
      "target": "web_root_p1_t5_s4_d2"
    },
    {
      "source": "web_root_p1_t5",
      "target": "web_root_p1_t5_s5"
    },
    {
      "source": "web_root_p1_t5_s5",
      "target": "web_root_p1_t5_s5_d1"
    },
    {
      "source": "web_root_p1_t5_s5",
      "target": "web_root_p1_t5_s5_d2"
    },
    {
      "source": "web_root_p1",
      "target": "web_root_p1_t6"
    },
    {
      "source": "web_root_p1_t6",
      "target": "web_root_p1_t6_s1"
    },
    {
      "source": "web_root_p1_t6_s1",
      "target": "web_root_p1_t6_s1_d1"
    },
    {
      "source": "web_root_p1_t6_s1",
      "target": "web_root_p1_t6_s1_d2"
    },
    {
      "source": "web_root_p1_t6",
      "target": "web_root_p1_t6_s2"
    },
    {
      "source": "web_root_p1_t6_s2",
      "target": "web_root_p1_t6_s2_d1"
    },
    {
      "source": "web_root_p1_t6_s2",
      "target": "web_root_p1_t6_s2_d2"
    },
    {
      "source": "web_root_p1_t6",
      "target": "web_root_p1_t6_s3"
    },
    {
      "source": "web_root_p1_t6_s3",
      "target": "web_root_p1_t6_s3_d1"
    },
    {
      "source": "web_root_p1_t6_s3",
      "target": "web_root_p1_t6_s3_d2"
    },
    {
      "source": "web_root_p1_t6",
      "target": "web_root_p1_t6_s4"
    },
    {
      "source": "web_root_p1_t6_s4",
      "target": "web_root_p1_t6_s4_d1"
    },
    {
      "source": "web_root_p1_t6_s4",
      "target": "web_root_p1_t6_s4_d2"
    },
    {
      "source": "web_root_p1_t6",
      "target": "web_root_p1_t6_s5"
    },
    {
      "source": "web_root_p1_t6_s5",
      "target": "web_root_p1_t6_s5_d1"
    },
    {
      "source": "web_root_p1_t6_s5",
      "target": "web_root_p1_t6_s5_d2"
    },
    {
      "source": "web_root",
      "target": "web_root_p2"
    },
    {
      "source": "web_root_p2",
      "target": "web_root_p2_t1"
    },
    {
      "source": "web_root_p2_t1",
      "target": "web_root_p2_t1_s1"
    },
    {
      "source": "web_root_p2_t1_s1",
      "target": "web_root_p2_t1_s1_d1"
    },
    {
      "source": "web_root_p2_t1_s1",
      "target": "web_root_p2_t1_s1_d2"
    },
    {
      "source": "web_root_p2_t1",
      "target": "web_root_p2_t1_s2"
    },
    {
      "source": "web_root_p2_t1_s2",
      "target": "web_root_p2_t1_s2_d1"
    },
    {
      "source": "web_root_p2_t1_s2",
      "target": "web_root_p2_t1_s2_d2"
    },
    {
      "source": "web_root_p2_t1",
      "target": "web_root_p2_t1_s3"
    },
    {
      "source": "web_root_p2_t1_s3",
      "target": "web_root_p2_t1_s3_d1"
    },
    {
      "source": "web_root_p2_t1_s3",
      "target": "web_root_p2_t1_s3_d2"
    },
    {
      "source": "web_root_p2_t1",
      "target": "web_root_p2_t1_s4"
    },
    {
      "source": "web_root_p2_t1_s4",
      "target": "web_root_p2_t1_s4_d1"
    },
    {
      "source": "web_root_p2_t1_s4",
      "target": "web_root_p2_t1_s4_d2"
    },
    {
      "source": "web_root_p2_t1",
      "target": "web_root_p2_t1_s5"
    },
    {
      "source": "web_root_p2_t1_s5",
      "target": "web_root_p2_t1_s5_d1"
    },
    {
      "source": "web_root_p2_t1_s5",
      "target": "web_root_p2_t1_s5_d2"
    },
    {
      "source": "web_root_p2",
      "target": "web_root_p2_t2"
    },
    {
      "source": "web_root_p2_t2",
      "target": "web_root_p2_t2_s1"
    },
    {
      "source": "web_root_p2_t2_s1",
      "target": "web_root_p2_t2_s1_d1"
    },
    {
      "source": "web_root_p2_t2_s1",
      "target": "web_root_p2_t2_s1_d2"
    },
    {
      "source": "web_root_p2_t2",
      "target": "web_root_p2_t2_s2"
    },
    {
      "source": "web_root_p2_t2_s2",
      "target": "web_root_p2_t2_s2_d1"
    },
    {
      "source": "web_root_p2_t2_s2",
      "target": "web_root_p2_t2_s2_d2"
    },
    {
      "source": "web_root_p2_t2",
      "target": "web_root_p2_t2_s3"
    },
    {
      "source": "web_root_p2_t2_s3",
      "target": "web_root_p2_t2_s3_d1"
    },
    {
      "source": "web_root_p2_t2_s3",
      "target": "web_root_p2_t2_s3_d2"
    },
    {
      "source": "web_root_p2_t2",
      "target": "web_root_p2_t2_s4"
    },
    {
      "source": "web_root_p2_t2_s4",
      "target": "web_root_p2_t2_s4_d1"
    },
    {
      "source": "web_root_p2_t2_s4",
      "target": "web_root_p2_t2_s4_d2"
    },
    {
      "source": "web_root_p2_t2",
      "target": "web_root_p2_t2_s5"
    },
    {
      "source": "web_root_p2_t2_s5",
      "target": "web_root_p2_t2_s5_d1"
    },
    {
      "source": "web_root_p2_t2_s5",
      "target": "web_root_p2_t2_s5_d2"
    },
    {
      "source": "web_root_p2",
      "target": "web_root_p2_t3"
    },
    {
      "source": "web_root_p2_t3",
      "target": "web_root_p2_t3_s1"
    },
    {
      "source": "web_root_p2_t3_s1",
      "target": "web_root_p2_t3_s1_d1"
    },
    {
      "source": "web_root_p2_t3_s1",
      "target": "web_root_p2_t3_s1_d2"
    },
    {
      "source": "web_root_p2_t3",
      "target": "web_root_p2_t3_s2"
    },
    {
      "source": "web_root_p2_t3_s2",
      "target": "web_root_p2_t3_s2_d1"
    },
    {
      "source": "web_root_p2_t3_s2",
      "target": "web_root_p2_t3_s2_d2"
    },
    {
      "source": "web_root_p2_t3",
      "target": "web_root_p2_t3_s3"
    },
    {
      "source": "web_root_p2_t3_s3",
      "target": "web_root_p2_t3_s3_d1"
    },
    {
      "source": "web_root_p2_t3_s3",
      "target": "web_root_p2_t3_s3_d2"
    },
    {
      "source": "web_root_p2_t3",
      "target": "web_root_p2_t3_s4"
    },
    {
      "source": "web_root_p2_t3_s4",
      "target": "web_root_p2_t3_s4_d1"
    },
    {
      "source": "web_root_p2_t3_s4",
      "target": "web_root_p2_t3_s4_d2"
    },
    {
      "source": "web_root_p2_t3",
      "target": "web_root_p2_t3_s5"
    },
    {
      "source": "web_root_p2_t3_s5",
      "target": "web_root_p2_t3_s5_d1"
    },
    {
      "source": "web_root_p2_t3_s5",
      "target": "web_root_p2_t3_s5_d2"
    },
    {
      "source": "web_root_p2",
      "target": "web_root_p2_t4"
    },
    {
      "source": "web_root_p2_t4",
      "target": "web_root_p2_t4_s1"
    },
    {
      "source": "web_root_p2_t4_s1",
      "target": "web_root_p2_t4_s1_d1"
    },
    {
      "source": "web_root_p2_t4_s1",
      "target": "web_root_p2_t4_s1_d2"
    },
    {
      "source": "web_root_p2_t4",
      "target": "web_root_p2_t4_s2"
    },
    {
      "source": "web_root_p2_t4_s2",
      "target": "web_root_p2_t4_s2_d1"
    },
    {
      "source": "web_root_p2_t4_s2",
      "target": "web_root_p2_t4_s2_d2"
    },
    {
      "source": "web_root_p2_t4",
      "target": "web_root_p2_t4_s3"
    },
    {
      "source": "web_root_p2_t4_s3",
      "target": "web_root_p2_t4_s3_d1"
    },
    {
      "source": "web_root_p2_t4_s3",
      "target": "web_root_p2_t4_s3_d2"
    },
    {
      "source": "web_root_p2_t4",
      "target": "web_root_p2_t4_s4"
    },
    {
      "source": "web_root_p2_t4_s4",
      "target": "web_root_p2_t4_s4_d1"
    },
    {
      "source": "web_root_p2_t4_s4",
      "target": "web_root_p2_t4_s4_d2"
    },
    {
      "source": "web_root_p2_t4",
      "target": "web_root_p2_t4_s5"
    },
    {
      "source": "web_root_p2_t4_s5",
      "target": "web_root_p2_t4_s5_d1"
    },
    {
      "source": "web_root_p2_t4_s5",
      "target": "web_root_p2_t4_s5_d2"
    },
    {
      "source": "web_root_p2",
      "target": "web_root_p2_t5"
    },
    {
      "source": "web_root_p2_t5",
      "target": "web_root_p2_t5_s1"
    },
    {
      "source": "web_root_p2_t5_s1",
      "target": "web_root_p2_t5_s1_d1"
    },
    {
      "source": "web_root_p2_t5_s1",
      "target": "web_root_p2_t5_s1_d2"
    },
    {
      "source": "web_root_p2_t5",
      "target": "web_root_p2_t5_s2"
    },
    {
      "source": "web_root_p2_t5_s2",
      "target": "web_root_p2_t5_s2_d1"
    },
    {
      "source": "web_root_p2_t5_s2",
      "target": "web_root_p2_t5_s2_d2"
    },
    {
      "source": "web_root_p2_t5",
      "target": "web_root_p2_t5_s3"
    },
    {
      "source": "web_root_p2_t5_s3",
      "target": "web_root_p2_t5_s3_d1"
    },
    {
      "source": "web_root_p2_t5_s3",
      "target": "web_root_p2_t5_s3_d2"
    },
    {
      "source": "web_root_p2_t5",
      "target": "web_root_p2_t5_s4"
    },
    {
      "source": "web_root_p2_t5_s4",
      "target": "web_root_p2_t5_s4_d1"
    },
    {
      "source": "web_root_p2_t5_s4",
      "target": "web_root_p2_t5_s4_d2"
    },
    {
      "source": "web_root_p2_t5",
      "target": "web_root_p2_t5_s5"
    },
    {
      "source": "web_root_p2_t5_s5",
      "target": "web_root_p2_t5_s5_d1"
    },
    {
      "source": "web_root_p2_t5_s5",
      "target": "web_root_p2_t5_s5_d2"
    },
    {
      "source": "web_root_p2",
      "target": "web_root_p2_t6"
    },
    {
      "source": "web_root_p2_t6",
      "target": "web_root_p2_t6_s1"
    },
    {
      "source": "web_root_p2_t6_s1",
      "target": "web_root_p2_t6_s1_d1"
    },
    {
      "source": "web_root_p2_t6_s1",
      "target": "web_root_p2_t6_s1_d2"
    },
    {
      "source": "web_root_p2_t6",
      "target": "web_root_p2_t6_s2"
    },
    {
      "source": "web_root_p2_t6_s2",
      "target": "web_root_p2_t6_s2_d1"
    },
    {
      "source": "web_root_p2_t6_s2",
      "target": "web_root_p2_t6_s2_d2"
    },
    {
      "source": "web_root_p2_t6",
      "target": "web_root_p2_t6_s3"
    },
    {
      "source": "web_root_p2_t6_s3",
      "target": "web_root_p2_t6_s3_d1"
    },
    {
      "source": "web_root_p2_t6_s3",
      "target": "web_root_p2_t6_s3_d2"
    },
    {
      "source": "web_root_p2_t6",
      "target": "web_root_p2_t6_s4"
    },
    {
      "source": "web_root_p2_t6_s4",
      "target": "web_root_p2_t6_s4_d1"
    },
    {
      "source": "web_root_p2_t6_s4",
      "target": "web_root_p2_t6_s4_d2"
    },
    {
      "source": "web_root_p2_t6",
      "target": "web_root_p2_t6_s5"
    },
    {
      "source": "web_root_p2_t6_s5",
      "target": "web_root_p2_t6_s5_d1"
    },
    {
      "source": "web_root_p2_t6_s5",
      "target": "web_root_p2_t6_s5_d2"
    },
    {
      "source": "web_root",
      "target": "web_root_p3"
    },
    {
      "source": "web_root_p3",
      "target": "web_root_p3_t1"
    },
    {
      "source": "web_root_p3_t1",
      "target": "web_root_p3_t1_s1"
    },
    {
      "source": "web_root_p3_t1_s1",
      "target": "web_root_p3_t1_s1_d1"
    },
    {
      "source": "web_root_p3_t1_s1",
      "target": "web_root_p3_t1_s1_d2"
    },
    {
      "source": "web_root_p3_t1",
      "target": "web_root_p3_t1_s2"
    },
    {
      "source": "web_root_p3_t1_s2",
      "target": "web_root_p3_t1_s2_d1"
    },
    {
      "source": "web_root_p3_t1_s2",
      "target": "web_root_p3_t1_s2_d2"
    },
    {
      "source": "web_root_p3_t1_s2",
      "target": "web_root_p3_t1_s2_d3"
    },
    {
      "source": "web_root_p3_t1_s2",
      "target": "web_root_p3_t1_s2_d4"
    },
    {
      "source": "web_root_p3_t1",
      "target": "web_root_p3_t1_s3"
    },
    {
      "source": "web_root_p3_t1_s3",
      "target": "web_root_p3_t1_s3_d1"
    },
    {
      "source": "web_root_p3_t1_s3",
      "target": "web_root_p3_t1_s3_d2"
    },
    {
      "source": "web_root_p3_t1",
      "target": "web_root_p3_t1_s4"
    },
    {
      "source": "web_root_p3_t1_s4",
      "target": "web_root_p3_t1_s4_d1"
    },
    {
      "source": "web_root_p3_t1_s4",
      "target": "web_root_p3_t1_s4_d2"
    },
    {
      "source": "web_root_p3_t1",
      "target": "web_root_p3_t1_s5"
    },
    {
      "source": "web_root_p3_t1_s5",
      "target": "web_root_p3_t1_s5_d1"
    },
    {
      "source": "web_root_p3_t1_s5",
      "target": "web_root_p3_t1_s5_d2"
    },
    {
      "source": "web_root_p3",
      "target": "web_root_p3_t2"
    },
    {
      "source": "web_root_p3_t2",
      "target": "web_root_p3_t2_s1"
    },
    {
      "source": "web_root_p3_t2_s1",
      "target": "web_root_p3_t2_s1_d1"
    },
    {
      "source": "web_root_p3_t2_s1",
      "target": "web_root_p3_t2_s1_d2"
    },
    {
      "source": "web_root_p3_t2_s1",
      "target": "web_root_p3_t2_s1_d3"
    },
    {
      "source": "web_root_p3_t2",
      "target": "web_root_p3_t2_s2"
    },
    {
      "source": "web_root_p3_t2_s2",
      "target": "web_root_p3_t2_s2_d1"
    },
    {
      "source": "web_root_p3_t2_s2",
      "target": "web_root_p3_t2_s2_d2"
    },
    {
      "source": "web_root_p3_t2",
      "target": "web_root_p3_t2_s3"
    },
    {
      "source": "web_root_p3_t2_s3",
      "target": "web_root_p3_t2_s3_d1"
    },
    {
      "source": "web_root_p3_t2_s3",
      "target": "web_root_p3_t2_s3_d2"
    },
    {
      "source": "web_root_p3_t2",
      "target": "web_root_p3_t2_s4"
    },
    {
      "source": "web_root_p3_t2_s4",
      "target": "web_root_p3_t2_s4_d1"
    },
    {
      "source": "web_root_p3_t2_s4",
      "target": "web_root_p3_t2_s4_d2"
    },
    {
      "source": "web_root_p3_t2",
      "target": "web_root_p3_t2_s5"
    },
    {
      "source": "web_root_p3_t2_s5",
      "target": "web_root_p3_t2_s5_d1"
    },
    {
      "source": "web_root_p3_t2_s5",
      "target": "web_root_p3_t2_s5_d2"
    },
    {
      "source": "web_root_p3",
      "target": "web_root_p3_t3"
    },
    {
      "source": "web_root_p3_t3",
      "target": "web_root_p3_t3_s1"
    },
    {
      "source": "web_root_p3_t3_s1",
      "target": "web_root_p3_t3_s1_d1"
    },
    {
      "source": "web_root_p3_t3_s1",
      "target": "web_root_p3_t3_s1_d2"
    },
    {
      "source": "web_root_p3_t3_s1",
      "target": "web_root_p3_t3_s1_d3"
    },
    {
      "source": "web_root_p3_t3",
      "target": "web_root_p3_t3_s2"
    },
    {
      "source": "web_root_p3_t3_s2",
      "target": "web_root_p3_t3_s2_d1"
    },
    {
      "source": "web_root_p3_t3_s2",
      "target": "web_root_p3_t3_s2_d2"
    },
    {
      "source": "web_root_p3_t3",
      "target": "web_root_p3_t3_s3"
    },
    {
      "source": "web_root_p3_t3_s3",
      "target": "web_root_p3_t3_s3_d1"
    },
    {
      "source": "web_root_p3_t3_s3",
      "target": "web_root_p3_t3_s3_d2"
    },
    {
      "source": "web_root_p3_t3",
      "target": "web_root_p3_t3_s4"
    },
    {
      "source": "web_root_p3_t3_s4",
      "target": "web_root_p3_t3_s4_d1"
    },
    {
      "source": "web_root_p3_t3_s4",
      "target": "web_root_p3_t3_s4_d2"
    },
    {
      "source": "web_root_p3_t3",
      "target": "web_root_p3_t3_s5"
    },
    {
      "source": "web_root_p3_t3_s5",
      "target": "web_root_p3_t3_s5_d1"
    },
    {
      "source": "web_root_p3_t3_s5",
      "target": "web_root_p3_t3_s5_d2"
    },
    {
      "source": "web_root_p3",
      "target": "web_root_p3_t4"
    },
    {
      "source": "web_root_p3_t4",
      "target": "web_root_p3_t4_s1"
    },
    {
      "source": "web_root_p3_t4_s1",
      "target": "web_root_p3_t4_s1_d1"
    },
    {
      "source": "web_root_p3_t4_s1",
      "target": "web_root_p3_t4_s1_d2"
    },
    {
      "source": "web_root_p3_t4",
      "target": "web_root_p3_t4_s2"
    },
    {
      "source": "web_root_p3_t4_s2",
      "target": "web_root_p3_t4_s2_d1"
    },
    {
      "source": "web_root_p3_t4_s2",
      "target": "web_root_p3_t4_s2_d2"
    },
    {
      "source": "web_root_p3_t4",
      "target": "web_root_p3_t4_s3"
    },
    {
      "source": "web_root_p3_t4_s3",
      "target": "web_root_p3_t4_s3_d1"
    },
    {
      "source": "web_root_p3_t4_s3",
      "target": "web_root_p3_t4_s3_d2"
    },
    {
      "source": "web_root_p3_t4",
      "target": "web_root_p3_t4_s4"
    },
    {
      "source": "web_root_p3_t4_s4",
      "target": "web_root_p3_t4_s4_d1"
    },
    {
      "source": "web_root_p3_t4_s4",
      "target": "web_root_p3_t4_s4_d2"
    },
    {
      "source": "web_root_p3_t4",
      "target": "web_root_p3_t4_s5"
    },
    {
      "source": "web_root_p3_t4_s5",
      "target": "web_root_p3_t4_s5_d1"
    },
    {
      "source": "web_root_p3_t4_s5",
      "target": "web_root_p3_t4_s5_d2"
    },
    {
      "source": "web_root_p3",
      "target": "web_root_p3_t5"
    },
    {
      "source": "web_root_p3_t5",
      "target": "web_root_p3_t5_s1"
    },
    {
      "source": "web_root_p3_t5_s1",
      "target": "web_root_p3_t5_s1_d1"
    },
    {
      "source": "web_root_p3_t5_s1",
      "target": "web_root_p3_t5_s1_d2"
    },
    {
      "source": "web_root_p3_t5",
      "target": "web_root_p3_t5_s2"
    },
    {
      "source": "web_root_p3_t5_s2",
      "target": "web_root_p3_t5_s2_d1"
    },
    {
      "source": "web_root_p3_t5_s2",
      "target": "web_root_p3_t5_s2_d2"
    },
    {
      "source": "web_root_p3_t5",
      "target": "web_root_p3_t5_s3"
    },
    {
      "source": "web_root_p3_t5_s3",
      "target": "web_root_p3_t5_s3_d1"
    },
    {
      "source": "web_root_p3_t5_s3",
      "target": "web_root_p3_t5_s3_d2"
    },
    {
      "source": "web_root_p3_t5",
      "target": "web_root_p3_t5_s4"
    },
    {
      "source": "web_root_p3_t5_s4",
      "target": "web_root_p3_t5_s4_d1"
    },
    {
      "source": "web_root_p3_t5_s4",
      "target": "web_root_p3_t5_s4_d2"
    },
    {
      "source": "web_root_p3_t5",
      "target": "web_root_p3_t5_s5"
    },
    {
      "source": "web_root_p3_t5_s5",
      "target": "web_root_p3_t5_s5_d1"
    },
    {
      "source": "web_root_p3_t5_s5",
      "target": "web_root_p3_t5_s5_d2"
    },
    {
      "source": "web_root_p3",
      "target": "web_root_p3_t6"
    },
    {
      "source": "web_root_p3_t6",
      "target": "web_root_p3_t6_s1"
    },
    {
      "source": "web_root_p3_t6_s1",
      "target": "web_root_p3_t6_s1_d1"
    },
    {
      "source": "web_root_p3_t6_s1",
      "target": "web_root_p3_t6_s1_d2"
    },
    {
      "source": "web_root_p3_t6",
      "target": "web_root_p3_t6_s2"
    },
    {
      "source": "web_root_p3_t6_s2",
      "target": "web_root_p3_t6_s2_d1"
    },
    {
      "source": "web_root_p3_t6_s2",
      "target": "web_root_p3_t6_s2_d2"
    },
    {
      "source": "web_root_p3_t6",
      "target": "web_root_p3_t6_s3"
    },
    {
      "source": "web_root_p3_t6_s3",
      "target": "web_root_p3_t6_s3_d1"
    },
    {
      "source": "web_root_p3_t6_s3",
      "target": "web_root_p3_t6_s3_d2"
    },
    {
      "source": "web_root_p3_t6",
      "target": "web_root_p3_t6_s4"
    },
    {
      "source": "web_root_p3_t6_s4",
      "target": "web_root_p3_t6_s4_d1"
    },
    {
      "source": "web_root_p3_t6_s4",
      "target": "web_root_p3_t6_s4_d2"
    },
    {
      "source": "web_root_p3_t6",
      "target": "web_root_p3_t6_s5"
    },
    {
      "source": "web_root_p3_t6_s5",
      "target": "web_root_p3_t6_s5_d1"
    },
    {
      "source": "web_root_p3_t6_s5",
      "target": "web_root_p3_t6_s5_d2"
    },
    {
      "source": "web_root",
      "target": "web_root_p4"
    },
    {
      "source": "web_root_p4",
      "target": "web_root_p4_t1"
    },
    {
      "source": "web_root_p4_t1",
      "target": "web_root_p4_t1_s1"
    },
    {
      "source": "web_root_p4_t1_s1",
      "target": "web_root_p4_t1_s1_d1"
    },
    {
      "source": "web_root_p4_t1_s1",
      "target": "web_root_p4_t1_s1_d2"
    },
    {
      "source": "web_root_p4_t1",
      "target": "web_root_p4_t1_s2"
    },
    {
      "source": "web_root_p4_t1_s2",
      "target": "web_root_p4_t1_s2_d1"
    },
    {
      "source": "web_root_p4_t1_s2",
      "target": "web_root_p4_t1_s2_d2"
    },
    {
      "source": "web_root_p4_t1",
      "target": "web_root_p4_t1_s3"
    },
    {
      "source": "web_root_p4_t1_s3",
      "target": "web_root_p4_t1_s3_d1"
    },
    {
      "source": "web_root_p4_t1_s3",
      "target": "web_root_p4_t1_s3_d2"
    },
    {
      "source": "web_root_p4_t1",
      "target": "web_root_p4_t1_s4"
    },
    {
      "source": "web_root_p4_t1_s4",
      "target": "web_root_p4_t1_s4_d1"
    },
    {
      "source": "web_root_p4_t1_s4",
      "target": "web_root_p4_t1_s4_d2"
    },
    {
      "source": "web_root_p4_t1",
      "target": "web_root_p4_t1_s5"
    },
    {
      "source": "web_root_p4_t1_s5",
      "target": "web_root_p4_t1_s5_d1"
    },
    {
      "source": "web_root_p4_t1_s5",
      "target": "web_root_p4_t1_s5_d2"
    },
    {
      "source": "web_root_p4",
      "target": "web_root_p4_t2"
    },
    {
      "source": "web_root_p4_t2",
      "target": "web_root_p4_t2_s1"
    },
    {
      "source": "web_root_p4_t2_s1",
      "target": "web_root_p4_t2_s1_d1"
    },
    {
      "source": "web_root_p4_t2_s1",
      "target": "web_root_p4_t2_s1_d2"
    },
    {
      "source": "web_root_p4_t2",
      "target": "web_root_p4_t2_s2"
    },
    {
      "source": "web_root_p4_t2_s2",
      "target": "web_root_p4_t2_s2_d1"
    },
    {
      "source": "web_root_p4_t2_s2",
      "target": "web_root_p4_t2_s2_d2"
    },
    {
      "source": "web_root_p4_t2",
      "target": "web_root_p4_t2_s3"
    },
    {
      "source": "web_root_p4_t2_s3",
      "target": "web_root_p4_t2_s3_d1"
    },
    {
      "source": "web_root_p4_t2_s3",
      "target": "web_root_p4_t2_s3_d2"
    },
    {
      "source": "web_root_p4_t2",
      "target": "web_root_p4_t2_s4"
    },
    {
      "source": "web_root_p4_t2_s4",
      "target": "web_root_p4_t2_s4_d1"
    },
    {
      "source": "web_root_p4_t2_s4",
      "target": "web_root_p4_t2_s4_d2"
    },
    {
      "source": "web_root_p4_t2",
      "target": "web_root_p4_t2_s5"
    },
    {
      "source": "web_root_p4_t2_s5",
      "target": "web_root_p4_t2_s5_d1"
    },
    {
      "source": "web_root_p4_t2_s5",
      "target": "web_root_p4_t2_s5_d2"
    },
    {
      "source": "web_root_p4",
      "target": "web_root_p4_t3"
    },
    {
      "source": "web_root_p4_t3",
      "target": "web_root_p4_t3_s1"
    },
    {
      "source": "web_root_p4_t3_s1",
      "target": "web_root_p4_t3_s1_d1"
    },
    {
      "source": "web_root_p4_t3_s1",
      "target": "web_root_p4_t3_s1_d2"
    },
    {
      "source": "web_root_p4_t3",
      "target": "web_root_p4_t3_s2"
    },
    {
      "source": "web_root_p4_t3_s2",
      "target": "web_root_p4_t3_s2_d1"
    },
    {
      "source": "web_root_p4_t3_s2",
      "target": "web_root_p4_t3_s2_d2"
    },
    {
      "source": "web_root_p4_t3",
      "target": "web_root_p4_t3_s3"
    },
    {
      "source": "web_root_p4_t3_s3",
      "target": "web_root_p4_t3_s3_d1"
    },
    {
      "source": "web_root_p4_t3_s3",
      "target": "web_root_p4_t3_s3_d2"
    },
    {
      "source": "web_root_p4_t3",
      "target": "web_root_p4_t3_s4"
    },
    {
      "source": "web_root_p4_t3_s4",
      "target": "web_root_p4_t3_s4_d1"
    },
    {
      "source": "web_root_p4_t3_s4",
      "target": "web_root_p4_t3_s4_d2"
    },
    {
      "source": "web_root_p4_t3",
      "target": "web_root_p4_t3_s5"
    },
    {
      "source": "web_root_p4_t3_s5",
      "target": "web_root_p4_t3_s5_d1"
    },
    {
      "source": "web_root_p4_t3_s5",
      "target": "web_root_p4_t3_s5_d2"
    },
    {
      "source": "web_root_p4",
      "target": "web_root_p4_t4"
    },
    {
      "source": "web_root_p4_t4",
      "target": "web_root_p4_t4_s1"
    },
    {
      "source": "web_root_p4_t4_s1",
      "target": "web_root_p4_t4_s1_d1"
    },
    {
      "source": "web_root_p4_t4_s1",
      "target": "web_root_p4_t4_s1_d2"
    },
    {
      "source": "web_root_p4_t4",
      "target": "web_root_p4_t4_s2"
    },
    {
      "source": "web_root_p4_t4_s2",
      "target": "web_root_p4_t4_s2_d1"
    },
    {
      "source": "web_root_p4_t4_s2",
      "target": "web_root_p4_t4_s2_d2"
    },
    {
      "source": "web_root_p4_t4",
      "target": "web_root_p4_t4_s3"
    },
    {
      "source": "web_root_p4_t4_s3",
      "target": "web_root_p4_t4_s3_d1"
    },
    {
      "source": "web_root_p4_t4_s3",
      "target": "web_root_p4_t4_s3_d2"
    },
    {
      "source": "web_root_p4_t4",
      "target": "web_root_p4_t4_s4"
    },
    {
      "source": "web_root_p4_t4_s4",
      "target": "web_root_p4_t4_s4_d1"
    },
    {
      "source": "web_root_p4_t4_s4",
      "target": "web_root_p4_t4_s4_d2"
    },
    {
      "source": "web_root_p4_t4",
      "target": "web_root_p4_t4_s5"
    },
    {
      "source": "web_root_p4_t4_s5",
      "target": "web_root_p4_t4_s5_d1"
    },
    {
      "source": "web_root_p4_t4_s5",
      "target": "web_root_p4_t4_s5_d2"
    },
    {
      "source": "web_root_p4",
      "target": "web_root_p4_t5"
    },
    {
      "source": "web_root_p4_t5",
      "target": "web_root_p4_t5_s1"
    },
    {
      "source": "web_root_p4_t5_s1",
      "target": "web_root_p4_t5_s1_d1"
    },
    {
      "source": "web_root_p4_t5_s1",
      "target": "web_root_p4_t5_s1_d2"
    },
    {
      "source": "web_root_p4_t5",
      "target": "web_root_p4_t5_s2"
    },
    {
      "source": "web_root_p4_t5_s2",
      "target": "web_root_p4_t5_s2_d1"
    },
    {
      "source": "web_root_p4_t5_s2",
      "target": "web_root_p4_t5_s2_d2"
    },
    {
      "source": "web_root_p4_t5",
      "target": "web_root_p4_t5_s3"
    },
    {
      "source": "web_root_p4_t5_s3",
      "target": "web_root_p4_t5_s3_d1"
    },
    {
      "source": "web_root_p4_t5_s3",
      "target": "web_root_p4_t5_s3_d2"
    },
    {
      "source": "web_root_p4_t5",
      "target": "web_root_p4_t5_s4"
    },
    {
      "source": "web_root_p4_t5_s4",
      "target": "web_root_p4_t5_s4_d1"
    },
    {
      "source": "web_root_p4_t5_s4",
      "target": "web_root_p4_t5_s4_d2"
    },
    {
      "source": "web_root_p4_t5",
      "target": "web_root_p4_t5_s5"
    },
    {
      "source": "web_root_p4_t5_s5",
      "target": "web_root_p4_t5_s5_d1"
    },
    {
      "source": "web_root_p4_t5_s5",
      "target": "web_root_p4_t5_s5_d2"
    },
    {
      "source": "web_root_p4",
      "target": "web_root_p4_t6"
    },
    {
      "source": "web_root_p4_t6",
      "target": "web_root_p4_t6_s1"
    },
    {
      "source": "web_root_p4_t6_s1",
      "target": "web_root_p4_t6_s1_d1"
    },
    {
      "source": "web_root_p4_t6_s1",
      "target": "web_root_p4_t6_s1_d2"
    },
    {
      "source": "web_root_p4_t6",
      "target": "web_root_p4_t6_s2"
    },
    {
      "source": "web_root_p4_t6_s2",
      "target": "web_root_p4_t6_s2_d1"
    },
    {
      "source": "web_root_p4_t6_s2",
      "target": "web_root_p4_t6_s2_d2"
    },
    {
      "source": "web_root_p4_t6",
      "target": "web_root_p4_t6_s3"
    },
    {
      "source": "web_root_p4_t6_s3",
      "target": "web_root_p4_t6_s3_d1"
    },
    {
      "source": "web_root_p4_t6_s3",
      "target": "web_root_p4_t6_s3_d2"
    },
    {
      "source": "web_root_p4_t6",
      "target": "web_root_p4_t6_s4"
    },
    {
      "source": "web_root_p4_t6_s4",
      "target": "web_root_p4_t6_s4_d1"
    },
    {
      "source": "web_root_p4_t6_s4",
      "target": "web_root_p4_t6_s4_d2"
    },
    {
      "source": "web_root_p4_t6",
      "target": "web_root_p4_t6_s5"
    },
    {
      "source": "web_root_p4_t6_s5",
      "target": "web_root_p4_t6_s5_d1"
    },
    {
      "source": "web_root_p4_t6_s5",
      "target": "web_root_p4_t6_s5_d2"
    },
    {
      "source": "web_root",
      "target": "web_root_p5"
    },
    {
      "source": "web_root_p5",
      "target": "web_root_p5_t1"
    },
    {
      "source": "web_root_p5_t1",
      "target": "web_root_p5_t1_s1"
    },
    {
      "source": "web_root_p5_t1_s1",
      "target": "web_root_p5_t1_s1_d1"
    },
    {
      "source": "web_root_p5_t1_s1",
      "target": "web_root_p5_t1_s1_d2"
    },
    {
      "source": "web_root_p5_t1",
      "target": "web_root_p5_t1_s2"
    },
    {
      "source": "web_root_p5_t1_s2",
      "target": "web_root_p5_t1_s2_d1"
    },
    {
      "source": "web_root_p5_t1_s2",
      "target": "web_root_p5_t1_s2_d2"
    },
    {
      "source": "web_root_p5_t1",
      "target": "web_root_p5_t1_s3"
    },
    {
      "source": "web_root_p5_t1_s3",
      "target": "web_root_p5_t1_s3_d1"
    },
    {
      "source": "web_root_p5_t1_s3",
      "target": "web_root_p5_t1_s3_d2"
    },
    {
      "source": "web_root_p5_t1",
      "target": "web_root_p5_t1_s4"
    },
    {
      "source": "web_root_p5_t1_s4",
      "target": "web_root_p5_t1_s4_d1"
    },
    {
      "source": "web_root_p5_t1_s4",
      "target": "web_root_p5_t1_s4_d2"
    },
    {
      "source": "web_root_p5_t1",
      "target": "web_root_p5_t1_s5"
    },
    {
      "source": "web_root_p5_t1_s5",
      "target": "web_root_p5_t1_s5_d1"
    },
    {
      "source": "web_root_p5_t1_s5",
      "target": "web_root_p5_t1_s5_d2"
    },
    {
      "source": "web_root_p5",
      "target": "web_root_p5_t2"
    },
    {
      "source": "web_root_p5_t2",
      "target": "web_root_p5_t2_s1"
    },
    {
      "source": "web_root_p5_t2_s1",
      "target": "web_root_p5_t2_s1_d1"
    },
    {
      "source": "web_root_p5_t2_s1",
      "target": "web_root_p5_t2_s1_d2"
    },
    {
      "source": "web_root_p5_t2",
      "target": "web_root_p5_t2_s2"
    },
    {
      "source": "web_root_p5_t2_s2",
      "target": "web_root_p5_t2_s2_d1"
    },
    {
      "source": "web_root_p5_t2_s2",
      "target": "web_root_p5_t2_s2_d2"
    },
    {
      "source": "web_root_p5_t2",
      "target": "web_root_p5_t2_s3"
    },
    {
      "source": "web_root_p5_t2_s3",
      "target": "web_root_p5_t2_s3_d1"
    },
    {
      "source": "web_root_p5_t2_s3",
      "target": "web_root_p5_t2_s3_d2"
    },
    {
      "source": "web_root_p5_t2",
      "target": "web_root_p5_t2_s4"
    },
    {
      "source": "web_root_p5_t2_s4",
      "target": "web_root_p5_t2_s4_d1"
    },
    {
      "source": "web_root_p5_t2_s4",
      "target": "web_root_p5_t2_s4_d2"
    },
    {
      "source": "web_root_p5_t2",
      "target": "web_root_p5_t2_s5"
    },
    {
      "source": "web_root_p5_t2_s5",
      "target": "web_root_p5_t2_s5_d1"
    },
    {
      "source": "web_root_p5_t2_s5",
      "target": "web_root_p5_t2_s5_d2"
    },
    {
      "source": "web_root_p5",
      "target": "web_root_p5_t3"
    },
    {
      "source": "web_root_p5_t3",
      "target": "web_root_p5_t3_s1"
    },
    {
      "source": "web_root_p5_t3_s1",
      "target": "web_root_p5_t3_s1_d1"
    },
    {
      "source": "web_root_p5_t3_s1",
      "target": "web_root_p5_t3_s1_d2"
    },
    {
      "source": "web_root_p5_t3",
      "target": "web_root_p5_t3_s2"
    },
    {
      "source": "web_root_p5_t3_s2",
      "target": "web_root_p5_t3_s2_d1"
    },
    {
      "source": "web_root_p5_t3_s2",
      "target": "web_root_p5_t3_s2_d2"
    },
    {
      "source": "web_root_p5_t3",
      "target": "web_root_p5_t3_s3"
    },
    {
      "source": "web_root_p5_t3_s3",
      "target": "web_root_p5_t3_s3_d1"
    },
    {
      "source": "web_root_p5_t3_s3",
      "target": "web_root_p5_t3_s3_d2"
    },
    {
      "source": "web_root_p5_t3",
      "target": "web_root_p5_t3_s4"
    },
    {
      "source": "web_root_p5_t3_s4",
      "target": "web_root_p5_t3_s4_d1"
    },
    {
      "source": "web_root_p5_t3_s4",
      "target": "web_root_p5_t3_s4_d2"
    },
    {
      "source": "web_root_p5_t3",
      "target": "web_root_p5_t3_s5"
    },
    {
      "source": "web_root_p5_t3_s5",
      "target": "web_root_p5_t3_s5_d1"
    },
    {
      "source": "web_root_p5_t3_s5",
      "target": "web_root_p5_t3_s5_d2"
    },
    {
      "source": "web_root_p5",
      "target": "web_root_p5_t4"
    },
    {
      "source": "web_root_p5_t4",
      "target": "web_root_p5_t4_s1"
    },
    {
      "source": "web_root_p5_t4_s1",
      "target": "web_root_p5_t4_s1_d1"
    },
    {
      "source": "web_root_p5_t4_s1",
      "target": "web_root_p5_t4_s1_d2"
    },
    {
      "source": "web_root_p5_t4",
      "target": "web_root_p5_t4_s2"
    },
    {
      "source": "web_root_p5_t4_s2",
      "target": "web_root_p5_t4_s2_d1"
    },
    {
      "source": "web_root_p5_t4_s2",
      "target": "web_root_p5_t4_s2_d2"
    },
    {
      "source": "web_root_p5_t4",
      "target": "web_root_p5_t4_s3"
    },
    {
      "source": "web_root_p5_t4_s3",
      "target": "web_root_p5_t4_s3_d1"
    },
    {
      "source": "web_root_p5_t4_s3",
      "target": "web_root_p5_t4_s3_d2"
    },
    {
      "source": "web_root_p5_t4",
      "target": "web_root_p5_t4_s4"
    },
    {
      "source": "web_root_p5_t4_s4",
      "target": "web_root_p5_t4_s4_d1"
    },
    {
      "source": "web_root_p5_t4_s4",
      "target": "web_root_p5_t4_s4_d2"
    },
    {
      "source": "web_root_p5_t4",
      "target": "web_root_p5_t4_s5"
    },
    {
      "source": "web_root_p5_t4_s5",
      "target": "web_root_p5_t4_s5_d1"
    },
    {
      "source": "web_root_p5_t4_s5",
      "target": "web_root_p5_t4_s5_d2"
    },
    {
      "source": "web_root_p5",
      "target": "web_root_p5_t5"
    },
    {
      "source": "web_root_p5_t5",
      "target": "web_root_p5_t5_s1"
    },
    {
      "source": "web_root_p5_t5_s1",
      "target": "web_root_p5_t5_s1_d1"
    },
    {
      "source": "web_root_p5_t5_s1",
      "target": "web_root_p5_t5_s1_d2"
    },
    {
      "source": "web_root_p5_t5",
      "target": "web_root_p5_t5_s2"
    },
    {
      "source": "web_root_p5_t5_s2",
      "target": "web_root_p5_t5_s2_d1"
    },
    {
      "source": "web_root_p5_t5_s2",
      "target": "web_root_p5_t5_s2_d2"
    },
    {
      "source": "web_root_p5_t5",
      "target": "web_root_p5_t5_s3"
    },
    {
      "source": "web_root_p5_t5_s3",
      "target": "web_root_p5_t5_s3_d1"
    },
    {
      "source": "web_root_p5_t5_s3",
      "target": "web_root_p5_t5_s3_d2"
    },
    {
      "source": "web_root_p5_t5",
      "target": "web_root_p5_t5_s4"
    },
    {
      "source": "web_root_p5_t5_s4",
      "target": "web_root_p5_t5_s4_d1"
    },
    {
      "source": "web_root_p5_t5_s4",
      "target": "web_root_p5_t5_s4_d2"
    },
    {
      "source": "web_root_p5_t5",
      "target": "web_root_p5_t5_s5"
    },
    {
      "source": "web_root_p5_t5_s5",
      "target": "web_root_p5_t5_s5_d1"
    },
    {
      "source": "web_root_p5_t5_s5",
      "target": "web_root_p5_t5_s5_d2"
    },
    {
      "source": "web_root_p5",
      "target": "web_root_p5_t6"
    },
    {
      "source": "web_root_p5_t6",
      "target": "web_root_p5_t6_s1"
    },
    {
      "source": "web_root_p5_t6_s1",
      "target": "web_root_p5_t6_s1_d1"
    },
    {
      "source": "web_root_p5_t6_s1",
      "target": "web_root_p5_t6_s1_d2"
    },
    {
      "source": "web_root_p5_t6",
      "target": "web_root_p5_t6_s2"
    },
    {
      "source": "web_root_p5_t6_s2",
      "target": "web_root_p5_t6_s2_d1"
    },
    {
      "source": "web_root_p5_t6_s2",
      "target": "web_root_p5_t6_s2_d2"
    },
    {
      "source": "web_root_p5_t6",
      "target": "web_root_p5_t6_s3"
    },
    {
      "source": "web_root_p5_t6_s3",
      "target": "web_root_p5_t6_s3_d1"
    },
    {
      "source": "web_root_p5_t6_s3",
      "target": "web_root_p5_t6_s3_d2"
    },
    {
      "source": "web_root_p5_t6",
      "target": "web_root_p5_t6_s4"
    },
    {
      "source": "web_root_p5_t6_s4",
      "target": "web_root_p5_t6_s4_d1"
    },
    {
      "source": "web_root_p5_t6_s4",
      "target": "web_root_p5_t6_s4_d2"
    },
    {
      "source": "web_root_p5_t6",
      "target": "web_root_p5_t6_s5"
    },
    {
      "source": "web_root_p5_t6_s5",
      "target": "web_root_p5_t6_s5_d1"
    },
    {
      "source": "web_root_p5_t6_s5",
      "target": "web_root_p5_t6_s5_d2"
    },
    {
      "source": "web_root",
      "target": "web_root_p6"
    },
    {
      "source": "web_root_p6",
      "target": "web_root_p6_t1"
    },
    {
      "source": "web_root_p6_t1",
      "target": "web_root_p6_t1_s1"
    },
    {
      "source": "web_root_p6_t1_s1",
      "target": "web_root_p6_t1_s1_d1"
    },
    {
      "source": "web_root_p6_t1_s1",
      "target": "web_root_p6_t1_s1_d2"
    },
    {
      "source": "web_root_p6_t1",
      "target": "web_root_p6_t1_s2"
    },
    {
      "source": "web_root_p6_t1_s2",
      "target": "web_root_p6_t1_s2_d1"
    },
    {
      "source": "web_root_p6_t1_s2",
      "target": "web_root_p6_t1_s2_d2"
    },
    {
      "source": "web_root_p6_t1",
      "target": "web_root_p6_t1_s3"
    },
    {
      "source": "web_root_p6_t1_s3",
      "target": "web_root_p6_t1_s3_d1"
    },
    {
      "source": "web_root_p6_t1_s3",
      "target": "web_root_p6_t1_s3_d2"
    },
    {
      "source": "web_root_p6_t1",
      "target": "web_root_p6_t1_s4"
    },
    {
      "source": "web_root_p6_t1_s4",
      "target": "web_root_p6_t1_s4_d1"
    },
    {
      "source": "web_root_p6_t1_s4",
      "target": "web_root_p6_t1_s4_d2"
    },
    {
      "source": "web_root_p6_t1",
      "target": "web_root_p6_t1_s5"
    },
    {
      "source": "web_root_p6_t1_s5",
      "target": "web_root_p6_t1_s5_d1"
    },
    {
      "source": "web_root_p6_t1_s5",
      "target": "web_root_p6_t1_s5_d2"
    },
    {
      "source": "web_root_p6",
      "target": "web_root_p6_t2"
    },
    {
      "source": "web_root_p6_t2",
      "target": "web_root_p6_t2_s1"
    },
    {
      "source": "web_root_p6_t2_s1",
      "target": "web_root_p6_t2_s1_d1"
    },
    {
      "source": "web_root_p6_t2_s1",
      "target": "web_root_p6_t2_s1_d2"
    },
    {
      "source": "web_root_p6_t2",
      "target": "web_root_p6_t2_s2"
    },
    {
      "source": "web_root_p6_t2_s2",
      "target": "web_root_p6_t2_s2_d1"
    },
    {
      "source": "web_root_p6_t2_s2",
      "target": "web_root_p6_t2_s2_d2"
    },
    {
      "source": "web_root_p6_t2",
      "target": "web_root_p6_t2_s3"
    },
    {
      "source": "web_root_p6_t2_s3",
      "target": "web_root_p6_t2_s3_d1"
    },
    {
      "source": "web_root_p6_t2_s3",
      "target": "web_root_p6_t2_s3_d2"
    },
    {
      "source": "web_root_p6_t2_s3",
      "target": "web_root_p6_t2_s3_d3"
    },
    {
      "source": "web_root_p6_t2",
      "target": "web_root_p6_t2_s4"
    },
    {
      "source": "web_root_p6_t2_s4",
      "target": "web_root_p6_t2_s4_d1"
    },
    {
      "source": "web_root_p6_t2_s4",
      "target": "web_root_p6_t2_s4_d2"
    },
    {
      "source": "web_root_p6_t2",
      "target": "web_root_p6_t2_s5"
    },
    {
      "source": "web_root_p6_t2_s5",
      "target": "web_root_p6_t2_s5_d1"
    },
    {
      "source": "web_root_p6_t2_s5",
      "target": "web_root_p6_t2_s5_d2"
    },
    {
      "source": "web_root_p6",
      "target": "web_root_p6_t3"
    },
    {
      "source": "web_root_p6_t3",
      "target": "web_root_p6_t3_s1"
    },
    {
      "source": "web_root_p6_t3_s1",
      "target": "web_root_p6_t3_s1_d1"
    },
    {
      "source": "web_root_p6_t3_s1",
      "target": "web_root_p6_t3_s1_d2"
    },
    {
      "source": "web_root_p6_t3",
      "target": "web_root_p6_t3_s2"
    },
    {
      "source": "web_root_p6_t3_s2",
      "target": "web_root_p6_t3_s2_d1"
    },
    {
      "source": "web_root_p6_t3_s2",
      "target": "web_root_p6_t3_s2_d2"
    },
    {
      "source": "web_root_p6_t3",
      "target": "web_root_p6_t3_s3"
    },
    {
      "source": "web_root_p6_t3_s3",
      "target": "web_root_p6_t3_s3_d1"
    },
    {
      "source": "web_root_p6_t3_s3",
      "target": "web_root_p6_t3_s3_d2"
    },
    {
      "source": "web_root_p6_t3",
      "target": "web_root_p6_t3_s4"
    },
    {
      "source": "web_root_p6_t3_s4",
      "target": "web_root_p6_t3_s4_d1"
    },
    {
      "source": "web_root_p6_t3_s4",
      "target": "web_root_p6_t3_s4_d2"
    },
    {
      "source": "web_root_p6_t3",
      "target": "web_root_p6_t3_s5"
    },
    {
      "source": "web_root_p6_t3_s5",
      "target": "web_root_p6_t3_s5_d1"
    },
    {
      "source": "web_root_p6_t3_s5",
      "target": "web_root_p6_t3_s5_d2"
    },
    {
      "source": "web_root_p6",
      "target": "web_root_p6_t4"
    },
    {
      "source": "web_root_p6_t4",
      "target": "web_root_p6_t4_s1"
    },
    {
      "source": "web_root_p6_t4_s1",
      "target": "web_root_p6_t4_s1_d1"
    },
    {
      "source": "web_root_p6_t4_s1",
      "target": "web_root_p6_t4_s1_d2"
    },
    {
      "source": "web_root_p6_t4",
      "target": "web_root_p6_t4_s2"
    },
    {
      "source": "web_root_p6_t4_s2",
      "target": "web_root_p6_t4_s2_d1"
    },
    {
      "source": "web_root_p6_t4_s2",
      "target": "web_root_p6_t4_s2_d2"
    },
    {
      "source": "web_root_p6_t4",
      "target": "web_root_p6_t4_s3"
    },
    {
      "source": "web_root_p6_t4_s3",
      "target": "web_root_p6_t4_s3_d1"
    },
    {
      "source": "web_root_p6_t4_s3",
      "target": "web_root_p6_t4_s3_d2"
    },
    {
      "source": "web_root_p6_t4",
      "target": "web_root_p6_t4_s4"
    },
    {
      "source": "web_root_p6_t4_s4",
      "target": "web_root_p6_t4_s4_d1"
    },
    {
      "source": "web_root_p6_t4_s4",
      "target": "web_root_p6_t4_s4_d2"
    },
    {
      "source": "web_root_p6_t4",
      "target": "web_root_p6_t4_s5"
    },
    {
      "source": "web_root_p6_t4_s5",
      "target": "web_root_p6_t4_s5_d1"
    },
    {
      "source": "web_root_p6_t4_s5",
      "target": "web_root_p6_t4_s5_d2"
    },
    {
      "source": "web_root_p6",
      "target": "web_root_p6_t5"
    },
    {
      "source": "web_root_p6_t5",
      "target": "web_root_p6_t5_s1"
    },
    {
      "source": "web_root_p6_t5_s1",
      "target": "web_root_p6_t5_s1_d1"
    },
    {
      "source": "web_root_p6_t5_s1",
      "target": "web_root_p6_t5_s1_d2"
    },
    {
      "source": "web_root_p6_t5",
      "target": "web_root_p6_t5_s2"
    },
    {
      "source": "web_root_p6_t5_s2",
      "target": "web_root_p6_t5_s2_d1"
    },
    {
      "source": "web_root_p6_t5_s2",
      "target": "web_root_p6_t5_s2_d2"
    },
    {
      "source": "web_root_p6_t5",
      "target": "web_root_p6_t5_s3"
    },
    {
      "source": "web_root_p6_t5_s3",
      "target": "web_root_p6_t5_s3_d1"
    },
    {
      "source": "web_root_p6_t5_s3",
      "target": "web_root_p6_t5_s3_d2"
    },
    {
      "source": "web_root_p6_t5",
      "target": "web_root_p6_t5_s4"
    },
    {
      "source": "web_root_p6_t5_s4",
      "target": "web_root_p6_t5_s4_d1"
    },
    {
      "source": "web_root_p6_t5_s4",
      "target": "web_root_p6_t5_s4_d2"
    },
    {
      "source": "web_root_p6_t5",
      "target": "web_root_p6_t5_s5"
    },
    {
      "source": "web_root_p6_t5_s5",
      "target": "web_root_p6_t5_s5_d1"
    },
    {
      "source": "web_root_p6_t5_s5",
      "target": "web_root_p6_t5_s5_d2"
    },
    {
      "source": "web_root_p6",
      "target": "web_root_p6_t6"
    },
    {
      "source": "web_root_p6_t6",
      "target": "web_root_p6_t6_s1"
    },
    {
      "source": "web_root_p6_t6_s1",
      "target": "web_root_p6_t6_s1_d1"
    },
    {
      "source": "web_root_p6_t6_s1",
      "target": "web_root_p6_t6_s1_d2"
    },
    {
      "source": "web_root_p6_t6",
      "target": "web_root_p6_t6_s2"
    },
    {
      "source": "web_root_p6_t6_s2",
      "target": "web_root_p6_t6_s2_d1"
    },
    {
      "source": "web_root_p6_t6_s2",
      "target": "web_root_p6_t6_s2_d2"
    },
    {
      "source": "web_root_p6_t6",
      "target": "web_root_p6_t6_s3"
    },
    {
      "source": "web_root_p6_t6_s3",
      "target": "web_root_p6_t6_s3_d1"
    },
    {
      "source": "web_root_p6_t6_s3",
      "target": "web_root_p6_t6_s3_d2"
    },
    {
      "source": "web_root_p6_t6",
      "target": "web_root_p6_t6_s4"
    },
    {
      "source": "web_root_p6_t6_s4",
      "target": "web_root_p6_t6_s4_d1"
    },
    {
      "source": "web_root_p6_t6_s4",
      "target": "web_root_p6_t6_s4_d2"
    },
    {
      "source": "web_root_p6_t6",
      "target": "web_root_p6_t6_s5"
    },
    {
      "source": "web_root_p6_t6_s5",
      "target": "web_root_p6_t6_s5_d1"
    },
    {
      "source": "web_root_p6_t6_s5",
      "target": "web_root_p6_t6_s5_d2"
    },
    {
      "source": "web_root",
      "target": "web_root_p7"
    },
    {
      "source": "web_root_p7",
      "target": "web_root_p7_t1"
    },
    {
      "source": "web_root_p7_t1",
      "target": "web_root_p7_t1_s1"
    },
    {
      "source": "web_root_p7_t1_s1",
      "target": "web_root_p7_t1_s1_d1"
    },
    {
      "source": "web_root_p7_t1_s1",
      "target": "web_root_p7_t1_s1_d2"
    },
    {
      "source": "web_root_p7_t1",
      "target": "web_root_p7_t1_s2"
    },
    {
      "source": "web_root_p7_t1_s2",
      "target": "web_root_p7_t1_s2_d1"
    },
    {
      "source": "web_root_p7_t1_s2",
      "target": "web_root_p7_t1_s2_d2"
    },
    {
      "source": "web_root_p7_t1",
      "target": "web_root_p7_t1_s3"
    },
    {
      "source": "web_root_p7_t1_s3",
      "target": "web_root_p7_t1_s3_d1"
    },
    {
      "source": "web_root_p7_t1_s3",
      "target": "web_root_p7_t1_s3_d2"
    },
    {
      "source": "web_root_p7_t1",
      "target": "web_root_p7_t1_s4"
    },
    {
      "source": "web_root_p7_t1_s4",
      "target": "web_root_p7_t1_s4_d1"
    },
    {
      "source": "web_root_p7_t1_s4",
      "target": "web_root_p7_t1_s4_d2"
    },
    {
      "source": "web_root_p7_t1",
      "target": "web_root_p7_t1_s5"
    },
    {
      "source": "web_root_p7_t1_s5",
      "target": "web_root_p7_t1_s5_d1"
    },
    {
      "source": "web_root_p7_t1_s5",
      "target": "web_root_p7_t1_s5_d2"
    },
    {
      "source": "web_root_p7",
      "target": "web_root_p7_t2"
    },
    {
      "source": "web_root_p7_t2",
      "target": "web_root_p7_t2_s1"
    },
    {
      "source": "web_root_p7_t2_s1",
      "target": "web_root_p7_t2_s1_d1"
    },
    {
      "source": "web_root_p7_t2_s1",
      "target": "web_root_p7_t2_s1_d2"
    },
    {
      "source": "web_root_p7_t2",
      "target": "web_root_p7_t2_s2"
    },
    {
      "source": "web_root_p7_t2_s2",
      "target": "web_root_p7_t2_s2_d1"
    },
    {
      "source": "web_root_p7_t2_s2",
      "target": "web_root_p7_t2_s2_d2"
    },
    {
      "source": "web_root_p7_t2",
      "target": "web_root_p7_t2_s3"
    },
    {
      "source": "web_root_p7_t2_s3",
      "target": "web_root_p7_t2_s3_d1"
    },
    {
      "source": "web_root_p7_t2_s3",
      "target": "web_root_p7_t2_s3_d2"
    },
    {
      "source": "web_root_p7_t2",
      "target": "web_root_p7_t2_s4"
    },
    {
      "source": "web_root_p7_t2_s4",
      "target": "web_root_p7_t2_s4_d1"
    },
    {
      "source": "web_root_p7_t2_s4",
      "target": "web_root_p7_t2_s4_d2"
    },
    {
      "source": "web_root_p7_t2",
      "target": "web_root_p7_t2_s5"
    },
    {
      "source": "web_root_p7_t2_s5",
      "target": "web_root_p7_t2_s5_d1"
    },
    {
      "source": "web_root_p7_t2_s5",
      "target": "web_root_p7_t2_s5_d2"
    },
    {
      "source": "web_root_p7",
      "target": "web_root_p7_t3"
    },
    {
      "source": "web_root_p7_t3",
      "target": "web_root_p7_t3_s1"
    },
    {
      "source": "web_root_p7_t3_s1",
      "target": "web_root_p7_t3_s1_d1"
    },
    {
      "source": "web_root_p7_t3_s1",
      "target": "web_root_p7_t3_s1_d2"
    },
    {
      "source": "web_root_p7_t3_s1",
      "target": "web_root_p7_t3_s1_d3"
    },
    {
      "source": "web_root_p7_t3",
      "target": "web_root_p7_t3_s2"
    },
    {
      "source": "web_root_p7_t3_s2",
      "target": "web_root_p7_t3_s2_d1"
    },
    {
      "source": "web_root_p7_t3_s2",
      "target": "web_root_p7_t3_s2_d2"
    },
    {
      "source": "web_root_p7_t3",
      "target": "web_root_p7_t3_s3"
    },
    {
      "source": "web_root_p7_t3_s3",
      "target": "web_root_p7_t3_s3_d1"
    },
    {
      "source": "web_root_p7_t3_s3",
      "target": "web_root_p7_t3_s3_d2"
    },
    {
      "source": "web_root_p7_t3",
      "target": "web_root_p7_t3_s4"
    },
    {
      "source": "web_root_p7_t3_s4",
      "target": "web_root_p7_t3_s4_d1"
    },
    {
      "source": "web_root_p7_t3_s4",
      "target": "web_root_p7_t3_s4_d2"
    },
    {
      "source": "web_root_p7_t3",
      "target": "web_root_p7_t3_s5"
    },
    {
      "source": "web_root_p7_t3_s5",
      "target": "web_root_p7_t3_s5_d1"
    },
    {
      "source": "web_root_p7_t3_s5",
      "target": "web_root_p7_t3_s5_d2"
    },
    {
      "source": "web_root_p7",
      "target": "web_root_p7_t4"
    },
    {
      "source": "web_root_p7_t4",
      "target": "web_root_p7_t4_s1"
    },
    {
      "source": "web_root_p7_t4_s1",
      "target": "web_root_p7_t4_s1_d1"
    },
    {
      "source": "web_root_p7_t4_s1",
      "target": "web_root_p7_t4_s1_d2"
    },
    {
      "source": "web_root_p7_t4",
      "target": "web_root_p7_t4_s2"
    },
    {
      "source": "web_root_p7_t4_s2",
      "target": "web_root_p7_t4_s2_d1"
    },
    {
      "source": "web_root_p7_t4_s2",
      "target": "web_root_p7_t4_s2_d2"
    },
    {
      "source": "web_root_p7_t4",
      "target": "web_root_p7_t4_s3"
    },
    {
      "source": "web_root_p7_t4_s3",
      "target": "web_root_p7_t4_s3_d1"
    },
    {
      "source": "web_root_p7_t4_s3",
      "target": "web_root_p7_t4_s3_d2"
    },
    {
      "source": "web_root_p7_t4",
      "target": "web_root_p7_t4_s4"
    },
    {
      "source": "web_root_p7_t4_s4",
      "target": "web_root_p7_t4_s4_d1"
    },
    {
      "source": "web_root_p7_t4_s4",
      "target": "web_root_p7_t4_s4_d2"
    },
    {
      "source": "web_root_p7_t4",
      "target": "web_root_p7_t4_s5"
    },
    {
      "source": "web_root_p7_t4_s5",
      "target": "web_root_p7_t4_s5_d1"
    },
    {
      "source": "web_root_p7_t4_s5",
      "target": "web_root_p7_t4_s5_d2"
    },
    {
      "source": "web_root_p7",
      "target": "web_root_p7_t5"
    },
    {
      "source": "web_root_p7_t5",
      "target": "web_root_p7_t5_s1"
    },
    {
      "source": "web_root_p7_t5_s1",
      "target": "web_root_p7_t5_s1_d1"
    },
    {
      "source": "web_root_p7_t5_s1",
      "target": "web_root_p7_t5_s1_d2"
    },
    {
      "source": "web_root_p7_t5",
      "target": "web_root_p7_t5_s2"
    },
    {
      "source": "web_root_p7_t5_s2",
      "target": "web_root_p7_t5_s2_d1"
    },
    {
      "source": "web_root_p7_t5_s2",
      "target": "web_root_p7_t5_s2_d2"
    },
    {
      "source": "web_root_p7_t5",
      "target": "web_root_p7_t5_s3"
    },
    {
      "source": "web_root_p7_t5_s3",
      "target": "web_root_p7_t5_s3_d1"
    },
    {
      "source": "web_root_p7_t5_s3",
      "target": "web_root_p7_t5_s3_d2"
    },
    {
      "source": "web_root_p7_t5",
      "target": "web_root_p7_t5_s4"
    },
    {
      "source": "web_root_p7_t5_s4",
      "target": "web_root_p7_t5_s4_d1"
    },
    {
      "source": "web_root_p7_t5_s4",
      "target": "web_root_p7_t5_s4_d2"
    },
    {
      "source": "web_root_p7_t5",
      "target": "web_root_p7_t5_s5"
    },
    {
      "source": "web_root_p7_t5_s5",
      "target": "web_root_p7_t5_s5_d1"
    },
    {
      "source": "web_root_p7_t5_s5",
      "target": "web_root_p7_t5_s5_d2"
    },
    {
      "source": "web_root_p7",
      "target": "web_root_p7_t6"
    },
    {
      "source": "web_root_p7_t6",
      "target": "web_root_p7_t6_s1"
    },
    {
      "source": "web_root_p7_t6_s1",
      "target": "web_root_p7_t6_s1_d1"
    },
    {
      "source": "web_root_p7_t6_s1",
      "target": "web_root_p7_t6_s1_d2"
    },
    {
      "source": "web_root_p7_t6",
      "target": "web_root_p7_t6_s2"
    },
    {
      "source": "web_root_p7_t6_s2",
      "target": "web_root_p7_t6_s2_d1"
    },
    {
      "source": "web_root_p7_t6_s2",
      "target": "web_root_p7_t6_s2_d2"
    },
    {
      "source": "web_root_p7_t6",
      "target": "web_root_p7_t6_s3"
    },
    {
      "source": "web_root_p7_t6_s3",
      "target": "web_root_p7_t6_s3_d1"
    },
    {
      "source": "web_root_p7_t6_s3",
      "target": "web_root_p7_t6_s3_d2"
    },
    {
      "source": "web_root_p7_t6",
      "target": "web_root_p7_t6_s4"
    },
    {
      "source": "web_root_p7_t6_s4",
      "target": "web_root_p7_t6_s4_d1"
    },
    {
      "source": "web_root_p7_t6_s4",
      "target": "web_root_p7_t6_s4_d2"
    },
    {
      "source": "web_root_p7_t6",
      "target": "web_root_p7_t6_s5"
    },
    {
      "source": "web_root_p7_t6_s5",
      "target": "web_root_p7_t6_s5_d1"
    },
    {
      "source": "web_root_p7_t6_s5",
      "target": "web_root_p7_t6_s5_d2"
    },
    {
      "source": "web_root",
      "target": "web_root_p8"
    },
    {
      "source": "web_root_p8",
      "target": "web_root_p8_t1"
    },
    {
      "source": "web_root_p8_t1",
      "target": "web_root_p8_t1_s1"
    },
    {
      "source": "web_root_p8_t1_s1",
      "target": "web_root_p8_t1_s1_d1"
    },
    {
      "source": "web_root_p8_t1_s1",
      "target": "web_root_p8_t1_s1_d2"
    },
    {
      "source": "web_root_p8_t1",
      "target": "web_root_p8_t1_s2"
    },
    {
      "source": "web_root_p8_t1_s2",
      "target": "web_root_p8_t1_s2_d1"
    },
    {
      "source": "web_root_p8_t1_s2",
      "target": "web_root_p8_t1_s2_d2"
    },
    {
      "source": "web_root_p8_t1",
      "target": "web_root_p8_t1_s3"
    },
    {
      "source": "web_root_p8_t1_s3",
      "target": "web_root_p8_t1_s3_d1"
    },
    {
      "source": "web_root_p8_t1_s3",
      "target": "web_root_p8_t1_s3_d2"
    },
    {
      "source": "web_root_p8_t1",
      "target": "web_root_p8_t1_s4"
    },
    {
      "source": "web_root_p8_t1_s4",
      "target": "web_root_p8_t1_s4_d1"
    },
    {
      "source": "web_root_p8_t1_s4",
      "target": "web_root_p8_t1_s4_d2"
    },
    {
      "source": "web_root_p8_t1",
      "target": "web_root_p8_t1_s5"
    },
    {
      "source": "web_root_p8_t1_s5",
      "target": "web_root_p8_t1_s5_d1"
    },
    {
      "source": "web_root_p8_t1_s5",
      "target": "web_root_p8_t1_s5_d2"
    },
    {
      "source": "web_root_p8",
      "target": "web_root_p8_t2"
    },
    {
      "source": "web_root_p8_t2",
      "target": "web_root_p8_t2_s1"
    },
    {
      "source": "web_root_p8_t2_s1",
      "target": "web_root_p8_t2_s1_d1"
    },
    {
      "source": "web_root_p8_t2_s1",
      "target": "web_root_p8_t2_s1_d2"
    },
    {
      "source": "web_root_p8_t2",
      "target": "web_root_p8_t2_s2"
    },
    {
      "source": "web_root_p8_t2_s2",
      "target": "web_root_p8_t2_s2_d1"
    },
    {
      "source": "web_root_p8_t2_s2",
      "target": "web_root_p8_t2_s2_d2"
    },
    {
      "source": "web_root_p8_t2",
      "target": "web_root_p8_t2_s3"
    },
    {
      "source": "web_root_p8_t2_s3",
      "target": "web_root_p8_t2_s3_d1"
    },
    {
      "source": "web_root_p8_t2_s3",
      "target": "web_root_p8_t2_s3_d2"
    },
    {
      "source": "web_root_p8_t2",
      "target": "web_root_p8_t2_s4"
    },
    {
      "source": "web_root_p8_t2_s4",
      "target": "web_root_p8_t2_s4_d1"
    },
    {
      "source": "web_root_p8_t2_s4",
      "target": "web_root_p8_t2_s4_d2"
    },
    {
      "source": "web_root_p8_t2",
      "target": "web_root_p8_t2_s5"
    },
    {
      "source": "web_root_p8_t2_s5",
      "target": "web_root_p8_t2_s5_d1"
    },
    {
      "source": "web_root_p8_t2_s5",
      "target": "web_root_p8_t2_s5_d2"
    },
    {
      "source": "web_root_p8",
      "target": "web_root_p8_t3"
    },
    {
      "source": "web_root_p8_t3",
      "target": "web_root_p8_t3_s1"
    },
    {
      "source": "web_root_p8_t3_s1",
      "target": "web_root_p8_t3_s1_d1"
    },
    {
      "source": "web_root_p8_t3_s1",
      "target": "web_root_p8_t3_s1_d2"
    },
    {
      "source": "web_root_p8_t3",
      "target": "web_root_p8_t3_s2"
    },
    {
      "source": "web_root_p8_t3_s2",
      "target": "web_root_p8_t3_s2_d1"
    },
    {
      "source": "web_root_p8_t3_s2",
      "target": "web_root_p8_t3_s2_d2"
    },
    {
      "source": "web_root_p8_t3",
      "target": "web_root_p8_t3_s3"
    },
    {
      "source": "web_root_p8_t3_s3",
      "target": "web_root_p8_t3_s3_d1"
    },
    {
      "source": "web_root_p8_t3_s3",
      "target": "web_root_p8_t3_s3_d2"
    },
    {
      "source": "web_root_p8_t3",
      "target": "web_root_p8_t3_s4"
    },
    {
      "source": "web_root_p8_t3_s4",
      "target": "web_root_p8_t3_s4_d1"
    },
    {
      "source": "web_root_p8_t3_s4",
      "target": "web_root_p8_t3_s4_d2"
    },
    {
      "source": "web_root_p8_t3",
      "target": "web_root_p8_t3_s5"
    },
    {
      "source": "web_root_p8_t3_s5",
      "target": "web_root_p8_t3_s5_d1"
    },
    {
      "source": "web_root_p8_t3_s5",
      "target": "web_root_p8_t3_s5_d2"
    },
    {
      "source": "web_root_p8",
      "target": "web_root_p8_t4"
    },
    {
      "source": "web_root_p8_t4",
      "target": "web_root_p8_t4_s1"
    },
    {
      "source": "web_root_p8_t4_s1",
      "target": "web_root_p8_t4_s1_d1"
    },
    {
      "source": "web_root_p8_t4_s1",
      "target": "web_root_p8_t4_s1_d2"
    },
    {
      "source": "web_root_p8_t4",
      "target": "web_root_p8_t4_s2"
    },
    {
      "source": "web_root_p8_t4_s2",
      "target": "web_root_p8_t4_s2_d1"
    },
    {
      "source": "web_root_p8_t4_s2",
      "target": "web_root_p8_t4_s2_d2"
    },
    {
      "source": "web_root_p8_t4",
      "target": "web_root_p8_t4_s3"
    },
    {
      "source": "web_root_p8_t4_s3",
      "target": "web_root_p8_t4_s3_d1"
    },
    {
      "source": "web_root_p8_t4_s3",
      "target": "web_root_p8_t4_s3_d2"
    },
    {
      "source": "web_root_p8_t4",
      "target": "web_root_p8_t4_s4"
    },
    {
      "source": "web_root_p8_t4_s4",
      "target": "web_root_p8_t4_s4_d1"
    },
    {
      "source": "web_root_p8_t4_s4",
      "target": "web_root_p8_t4_s4_d2"
    },
    {
      "source": "web_root_p8_t4",
      "target": "web_root_p8_t4_s5"
    },
    {
      "source": "web_root_p8_t4_s5",
      "target": "web_root_p8_t4_s5_d1"
    },
    {
      "source": "web_root_p8_t4_s5",
      "target": "web_root_p8_t4_s5_d2"
    },
    {
      "source": "web_root_p8",
      "target": "web_root_p8_t5"
    },
    {
      "source": "web_root_p8_t5",
      "target": "web_root_p8_t5_s1"
    },
    {
      "source": "web_root_p8_t5_s1",
      "target": "web_root_p8_t5_s1_d1"
    },
    {
      "source": "web_root_p8_t5_s1",
      "target": "web_root_p8_t5_s1_d2"
    },
    {
      "source": "web_root_p8_t5",
      "target": "web_root_p8_t5_s2"
    },
    {
      "source": "web_root_p8_t5_s2",
      "target": "web_root_p8_t5_s2_d1"
    },
    {
      "source": "web_root_p8_t5_s2",
      "target": "web_root_p8_t5_s2_d2"
    },
    {
      "source": "web_root_p8_t5",
      "target": "web_root_p8_t5_s3"
    },
    {
      "source": "web_root_p8_t5_s3",
      "target": "web_root_p8_t5_s3_d1"
    },
    {
      "source": "web_root_p8_t5_s3",
      "target": "web_root_p8_t5_s3_d2"
    },
    {
      "source": "web_root_p8_t5",
      "target": "web_root_p8_t5_s4"
    },
    {
      "source": "web_root_p8_t5_s4",
      "target": "web_root_p8_t5_s4_d1"
    },
    {
      "source": "web_root_p8_t5_s4",
      "target": "web_root_p8_t5_s4_d2"
    },
    {
      "source": "web_root_p8_t5",
      "target": "web_root_p8_t5_s5"
    },
    {
      "source": "web_root_p8_t5_s5",
      "target": "web_root_p8_t5_s5_d1"
    },
    {
      "source": "web_root_p8_t5_s5",
      "target": "web_root_p8_t5_s5_d2"
    },
    {
      "source": "web_root_p8",
      "target": "web_root_p8_t6"
    },
    {
      "source": "web_root_p8_t6",
      "target": "web_root_p8_t6_s1"
    },
    {
      "source": "web_root_p8_t6_s1",
      "target": "web_root_p8_t6_s1_d1"
    },
    {
      "source": "web_root_p8_t6_s1",
      "target": "web_root_p8_t6_s1_d2"
    },
    {
      "source": "web_root_p8_t6",
      "target": "web_root_p8_t6_s2"
    },
    {
      "source": "web_root_p8_t6_s2",
      "target": "web_root_p8_t6_s2_d1"
    },
    {
      "source": "web_root_p8_t6_s2",
      "target": "web_root_p8_t6_s2_d2"
    },
    {
      "source": "web_root_p8_t6",
      "target": "web_root_p8_t6_s3"
    },
    {
      "source": "web_root_p8_t6_s3",
      "target": "web_root_p8_t6_s3_d1"
    },
    {
      "source": "web_root_p8_t6_s3",
      "target": "web_root_p8_t6_s3_d2"
    },
    {
      "source": "web_root_p8_t6",
      "target": "web_root_p8_t6_s4"
    },
    {
      "source": "web_root_p8_t6_s4",
      "target": "web_root_p8_t6_s4_d1"
    },
    {
      "source": "web_root_p8_t6_s4",
      "target": "web_root_p8_t6_s4_d2"
    },
    {
      "source": "web_root_p8_t6",
      "target": "web_root_p8_t6_s5"
    },
    {
      "source": "web_root_p8_t6_s5",
      "target": "web_root_p8_t6_s5_d1"
    },
    {
      "source": "web_root_p8_t6_s5",
      "target": "web_root_p8_t6_s5_d2"
    }
  ]
};
