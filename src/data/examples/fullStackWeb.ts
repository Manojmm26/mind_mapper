import { MindMapData } from "../../services/llmService";

export const FULLSTACK_WEB_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "fsw_root",
      "label": "Full-Stack Web Development from First Principles",
      "description": "Rigorous first-principles blueprint of browser internals, modern CSS architecture, V8 engine execution, React Fiber reconciler, Node.js event loops, WebAuthn authentication, and production web performance.",
      "type": "topic"
    },
    {
      "id": "fsw_root_p1",
      "label": "Browser Internals & Rendering Pipeline",
      "description": "Navigation, HTML tokenizer parsing, DOM tree construction, CSSOM, Render Tree, Reflow layout, Paint, and GPU compositing.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1",
      "label": "HTML Tokenization & DOM Tree Construction",
      "description": "Converting raw network byte streams into DOM object trees.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s1",
      "label": "Byte-to-Character Lexing & Pre-Parser",
      "description": "Decoding UTF-8 byte streams into character tokens via HTML5 state machine.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s1_d1",
      "label": "Speculative Pre-Parser Network Fetch",
      "description": "Pre-scanning HTML for external scripts and CSS files to initiate parallel downloads.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s1_d2",
      "label": "Stateful Lexical Tokenization",
      "description": "Emitting StartTag, EndTag, and Character tokens during lexical analysis.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s2",
      "label": "Parser-Blocking Script Execution",
      "description": "Interruption of HTML parsing when encountering inline or external scripts.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s2_d1",
      "label": "Script Fetch Interruptions",
      "description": "Halting DOM construction while downloading and executing non-async/non-defer scripts.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s2_d2",
      "label": "async vs defer Execution Order",
      "description": "Executing async scripts immediately upon download vs defer scripts sequentially at DOMContentLoaded.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s3",
      "label": "DOM Node Memory Representation",
      "description": "Allocating C++ DOM objects and V8 JavaScript wrappers.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s3_d1",
      "label": "C++ Blink DOM Node Allocation",
      "description": "Constructing native C++ element nodes with parent-child-sibling pointers.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s3_d2",
      "label": "V8 Oilpan Unified Garbage Collection",
      "description": "Tracing references across V8 JS objects and native C++ DOM nodes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s4",
      "label": "Custom Elements & Shadow DOM Isolation",
      "description": "Encapsulating DOM subtrees using Web Components.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s4_d1",
      "label": "Shadow Root Tree Scoping",
      "description": "Isolating internal DOM subtrees from global querySelector calls.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s4_d2",
      "label": "Scoped CSS Boundaries",
      "description": "Preventing external global CSS rules from penetrating shadow trees.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s5",
      "label": "Custom Element Lifecycle Callbacks",
      "description": "Executing custom element lifecycle methods.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s5_d1",
      "label": "connectedCallback & disconnectedCallback",
      "description": "Executing setup code when elements enter or leave the active DOM.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s5_d2",
      "label": "attributeChangedCallback Reaction",
      "description": "Monitoring attribute mutations via observedAttributes arrays.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2",
      "label": "CSSOM & Style Recalculation",
      "description": "Constructing CSSOM trees and computing resolved element styles.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s1",
      "label": "CSSOM Tree Assembly",
      "description": "Parsing CSS rules into the CSS Object Model tree.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s1_d1",
      "label": "Render-Blocking CSS Nature",
      "description": "Blocking initial page paint until full CSSOM tree construction completes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s1_d2",
      "label": "Right-to-Left Selector Matching",
      "description": "Matching CSS selectors from rightmost key selector for performance.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s2",
      "label": "Style Recalculation Phase",
      "description": "Matching CSSOM rules against DOM nodes to compute resolved styles.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s2_d1",
      "label": "Absolute Pixel Unit Resolution",
      "description": "Converting relative units (em, rem, %) to absolute physical pixel values.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s2_d2",
      "label": "Inherited Property Cascading",
      "description": "Cascading inherited properties (font, color) down element subtrees.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s3",
      "label": "Specificity Calculation Vectors",
      "description": "Evaluating specificity tuples (Inline, ID, Class, Element) to resolve property conflicts.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s3_d1",
      "label": "Specificity Vector Comparisons",
      "description": "Comparing specificity tuples to determine winning property declarations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s3_d2",
      "label": "!important Priority Overrides",
      "description": "Bypassing standard specificity rankings using high-priority origin flags.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s4",
      "label": "Cascade Layers (@layer) Architecture",
      "description": "Controlling cascade precedence independent of selector specificity.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s4_d1",
      "label": "Explicit Layer Ordering",
      "description": "Ensuring later-declared layers override earlier layers regardless of specificity.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s4_d2",
      "label": "Un-Layered Style Precedence",
      "description": "Ensuring un-layered CSS rules override all layered declarations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s5",
      "label": "Style Invalidation Scope Minimization",
      "description": "Scoping style recalculations to modified DOM subtrees.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s5_d1",
      "label": "Subtree Style Recalculation Roots",
      "description": "Limiting style updates to affected DOM subtrees.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s5_d2",
      "label": "Minimizing Class Mutation Blast Radius",
      "description": "Avoiding high-level ancestor class mutations that invalidate broad trees.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3",
      "label": "Layout (Reflow) & Box Tree Calculation",
      "description": "Computing geometric coordinates for visible render tree elements.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s1",
      "label": "Layout Tree Construction",
      "description": "Building geometry boxes for visible elements.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s1_d1",
      "label": "display:none Layout Tree Exclusion",
      "description": "Excluding display:none nodes from layout calculations entirely.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s1_d2",
      "label": "Pseudo-Element Box Insertion",
      "description": "Inserting explicit layout boxes for :before and :after pseudo-elements.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s2",
      "label": "Block Formatting Context (BFC) Isolation",
      "description": "Creating isolated layout regions preventing margin collapsing.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s2_d1",
      "label": "BFC Creation Triggers",
      "description": "Establishing BFC boundaries via overflow: hidden or display: flow-root.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s2_d2",
      "label": "Margin Collapsing Prevention",
      "description": "Preventing vertical margin collapse across BFC boundaries.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s3",
      "label": "Forced Synchronous Layout (Layout Thrashing)",
      "description": "Interleaving DOM reads and writes causing forced reflows.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s3_d1",
      "label": "Synchronous Reflow Triggers",
      "description": "Reading offsetWidth immediately after DOM class modifications.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s3_d2",
      "label": "FastDOM Read/Write Batching",
      "description": "Batching DOM reads before issuing write mutations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s4",
      "label": "CSS Containment API (contain)",
      "description": "Isolating component subtrees from page layout calculations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s4_d1",
      "label": "contain: layout Subtree Isolation",
      "description": "Preventing internal component reflows from triggering page-wide reflows.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s4_d2",
      "label": "contain: content Optimization",
      "description": "Combining layout, style, and paint containment for reusable UI components.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s5",
      "label": "Intrinsic vs Extrinsic Sizing Computations",
      "description": "Resolving content-based sizing bounds.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s5_d1",
      "label": "min-content Width Boundaries",
      "description": "Calculating smallest width needed without text wrapping overflow.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s5_d2",
      "label": "max-content Single-Line Widths",
      "description": "Calculating width required to render text without wrapping.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4",
      "label": "Paint, Rasterization & Compositing",
      "description": "Converting visual display lists into raster bitmaps and GPU textures.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s1",
      "label": "Paint Display List Generation",
      "description": "Building ordered drawing command lists per layer.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s1_d1",
      "label": "Stacking Context Painting Order",
      "description": "Sorting paint operations by background, floats, inline content, and z-index.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s1_d2",
      "label": "Paint Invalidation Rectangles",
      "description": "Re-painting minimal bounding boxes around modified screen regions.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s2",
      "label": "GPU Compositing Layer Promotion",
      "description": "Promoting elements to dedicated GPU layers to bypass repaint steps.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s2_d1",
      "label": "will-change: transform Promotion",
      "description": "Offloading element rendering directly to GPU VRAM textures.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s2_d2",
      "label": "Layer Explosion VRAM Penalties",
      "description": "Avoiding excessive promotion that exhausts GPU memory.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s3",
      "label": "Multithreaded Tile Rasterization",
      "description": "Rasterizing display lists into bitmap tiles on background worker threads.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s3_d1",
      "label": "256x256 Pixel Tile Grids",
      "description": "Rasterizing tile grids in parallel across CPU worker pools.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s3_d2",
      "label": "GPU Accelerated Skia Rasterization",
      "description": "Utilizing GPU pipelines to rasterize display lists natively.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s4",
      "label": "Compositor VSync Execution",
      "description": "Delivering final composited frames to displays at VSync refresh rates.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s4_d1",
      "label": "Jank-Free Compositor Scrolling",
      "description": "Executing transform animations directly on compositor threads.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s4_d2",
      "label": "VSync Clock Alignment (16.6ms / 8.3ms)",
      "description": "Aligning frame delivery to display hardware VSync pulses.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s5",
      "label": "Sub-Pixel Antialiasing & Rounding",
      "description": "Rendering crisp font edges and handling fractional pixel offsets.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s5_d1",
      "label": "Sub-Pixel Text Rendering",
      "description": "Utilizing RGB sub-pixels to sharpen font glyph edges.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s5_d2",
      "label": "Fractional Pixel Rounding",
      "description": "Managing 0.5px layout offsets to prevent visual rendering glitches.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5",
      "label": "Browser Internals & Rendering Pipeline Topic 5",
      "description": "Detailed first-principles mechanics for Browser Internals & Rendering Pipeline topic 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s1",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Browser Internals & Rendering Pipeline Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s1_d1",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s1_d2",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s2",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Browser Internals & Rendering Pipeline Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s2_d1",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s2_d2",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s3",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Browser Internals & Rendering Pipeline Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s3_d1",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s3_d2",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s4",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Browser Internals & Rendering Pipeline Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s4_d1",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s4_d2",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s5",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Browser Internals & Rendering Pipeline Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s5_d1",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s5_d2",
      "label": "Browser Internals & Rendering Pipeline Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6",
      "label": "Browser Internals & Rendering Pipeline Topic 6",
      "description": "Detailed first-principles mechanics for Browser Internals & Rendering Pipeline topic 6.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s1",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Browser Internals & Rendering Pipeline Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s1_d1",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s1_d2",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s2",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Browser Internals & Rendering Pipeline Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s2_d1",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s2_d2",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s3",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Browser Internals & Rendering Pipeline Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s3_d1",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s3_d2",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s4",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Browser Internals & Rendering Pipeline Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s4_d1",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s4_d2",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s5",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Browser Internals & Rendering Pipeline Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s5_d1",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s5_d2",
      "label": "Browser Internals & Rendering Pipeline Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Browser Internals & Rendering Pipeline Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2",
      "label": "Full-Stack Web Advanced Pillar 2",
      "description": "Advanced architectural principles and technical specifications for Full-Stack Web pillar 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 2 topic 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 1 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 1 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s3",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 1 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s4",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 1 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s5",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 1 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 2 topic 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 2 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 2 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s3",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 2 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s4",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 2 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s5",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 2 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 2 topic 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 3 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 3 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s3",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 3 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s4",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 3 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s5",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 3 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 2 topic 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s3",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s4",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s5",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 2 topic 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s3",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s4",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s5",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t5_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 2 topic 6.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s3",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s4",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s5",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 2 Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t6_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 2 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3",
      "label": "Full-Stack Web Advanced Pillar 3",
      "description": "Advanced architectural principles and technical specifications for Full-Stack Web pillar 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 3 topic 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 1 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 1 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s3",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 1 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s4",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 1 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s5",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 1 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 3 topic 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 2 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 2 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s3",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 2 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s4",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 2 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s5",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 2 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 3 topic 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 3 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 3 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s3",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 3 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s4",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 3 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s5",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 3 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 3 topic 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s3",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s4",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s5",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 3 topic 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s3",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s4",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s5",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t5_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 3 topic 6.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s3",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s4",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s5",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 3 Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t6_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 3 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4",
      "label": "Full-Stack Web Advanced Pillar 4",
      "description": "Advanced architectural principles and technical specifications for Full-Stack Web pillar 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 4 topic 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 1 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 1 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s3",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 1 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s4",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 1 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s5",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 1 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 4 topic 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 2 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 2 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s3",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 2 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s4",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 2 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s5",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 2 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 4 topic 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 3 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 3 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s3",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 3 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s4",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 3 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s5",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 3 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 4 topic 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s3",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s4",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s5",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 4 topic 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s3",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s4",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s5",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 4 topic 6.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s3",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s4",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s5",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 4 Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t6_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 4 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5",
      "label": "Full-Stack Web Advanced Pillar 5",
      "description": "Advanced architectural principles and technical specifications for Full-Stack Web pillar 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 5 topic 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 1 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 1 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s3",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 1 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s4",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 1 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s5",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 1 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 5 topic 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 2 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 2 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s3",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 2 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s4",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 2 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s5",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 2 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 5 topic 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 3 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 3 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s3",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 3 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s4",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 3 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s5",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 3 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 5 topic 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s3",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s4",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s5",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 5 topic 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s3",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s4",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s5",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t5_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 5 topic 6.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s3",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s4",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s5",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 5 Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t6_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 5 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6",
      "label": "Full-Stack Web Advanced Pillar 6",
      "description": "Advanced architectural principles and technical specifications for Full-Stack Web pillar 6.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 6 topic 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 1 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 1 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s3",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 1 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s4",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 1 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s5",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 1 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 6 topic 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 2 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 2 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s3",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 2 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s4",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 2 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s5",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 2 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 6 topic 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 3 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 3 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s3",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 3 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s4",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 3 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s5",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 3 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 6 topic 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s3",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s4",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s5",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 6 topic 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s3",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s4",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s5",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t5_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 6 topic 6.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s3",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s4",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s5",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 6 Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t6_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 6 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7",
      "label": "Full-Stack Web Advanced Pillar 7",
      "description": "Advanced architectural principles and technical specifications for Full-Stack Web pillar 7.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 7 topic 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 1 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 1 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s3",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 1 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s4",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 1 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s5",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 1 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 7 topic 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 2 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 2 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s3",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 2 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s4",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 2 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s5",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 2 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 7 topic 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 3 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 3 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s3",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 3 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s4",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 3 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s5",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 3 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 7 topic 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s3",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s4",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s5",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 7 topic 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s3",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s4",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s5",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t5_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 7 topic 6.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s3",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s4",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s5",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 7 Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t6_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 7 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8",
      "label": "Full-Stack Web Advanced Pillar 8",
      "description": "Advanced architectural principles and technical specifications for Full-Stack Web pillar 8.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 8 topic 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 1 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 1 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s3",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 1 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s4",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 1 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s5",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 1 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 1 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 8 topic 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 2 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 2 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s3",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 2 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s4",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 2 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s5",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 2 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 2 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 8 topic 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 3 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 3 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s3",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 3 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s4",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 3 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s5",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 3 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 8 topic 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s3",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s4",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s5",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 8 topic 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s3",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s4",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s5",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t5_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6",
      "description": "Detailed first-principles mechanics for Full-Stack Web Advanced Pillar 8 topic 6.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s1_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s1_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s2_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s2_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s3",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s3_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s3_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s4",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s4_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s4_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s5",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Full-Stack Web Advanced Pillar 8 Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s5_d1",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t6_s5_d2",
      "label": "Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Full-Stack Web Advanced Pillar 8 Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "fsw_root",
      "target": "fsw_root_p1"
    },
    {
      "source": "fsw_root_p1",
      "target": "fsw_root_p1_t1"
    },
    {
      "source": "fsw_root_p1_t1",
      "target": "fsw_root_p1_t1_s1"
    },
    {
      "source": "fsw_root_p1_t1_s1",
      "target": "fsw_root_p1_t1_s1_d1"
    },
    {
      "source": "fsw_root_p1_t1_s1",
      "target": "fsw_root_p1_t1_s1_d2"
    },
    {
      "source": "fsw_root_p1_t1",
      "target": "fsw_root_p1_t1_s2"
    },
    {
      "source": "fsw_root_p1_t1_s2",
      "target": "fsw_root_p1_t1_s2_d1"
    },
    {
      "source": "fsw_root_p1_t1_s2",
      "target": "fsw_root_p1_t1_s2_d2"
    },
    {
      "source": "fsw_root_p1_t1",
      "target": "fsw_root_p1_t1_s3"
    },
    {
      "source": "fsw_root_p1_t1_s3",
      "target": "fsw_root_p1_t1_s3_d1"
    },
    {
      "source": "fsw_root_p1_t1_s3",
      "target": "fsw_root_p1_t1_s3_d2"
    },
    {
      "source": "fsw_root_p1_t1",
      "target": "fsw_root_p1_t1_s4"
    },
    {
      "source": "fsw_root_p1_t1_s4",
      "target": "fsw_root_p1_t1_s4_d1"
    },
    {
      "source": "fsw_root_p1_t1_s4",
      "target": "fsw_root_p1_t1_s4_d2"
    },
    {
      "source": "fsw_root_p1_t1",
      "target": "fsw_root_p1_t1_s5"
    },
    {
      "source": "fsw_root_p1_t1_s5",
      "target": "fsw_root_p1_t1_s5_d1"
    },
    {
      "source": "fsw_root_p1_t1_s5",
      "target": "fsw_root_p1_t1_s5_d2"
    },
    {
      "source": "fsw_root_p1",
      "target": "fsw_root_p1_t2"
    },
    {
      "source": "fsw_root_p1_t2",
      "target": "fsw_root_p1_t2_s1"
    },
    {
      "source": "fsw_root_p1_t2_s1",
      "target": "fsw_root_p1_t2_s1_d1"
    },
    {
      "source": "fsw_root_p1_t2_s1",
      "target": "fsw_root_p1_t2_s1_d2"
    },
    {
      "source": "fsw_root_p1_t2",
      "target": "fsw_root_p1_t2_s2"
    },
    {
      "source": "fsw_root_p1_t2_s2",
      "target": "fsw_root_p1_t2_s2_d1"
    },
    {
      "source": "fsw_root_p1_t2_s2",
      "target": "fsw_root_p1_t2_s2_d2"
    },
    {
      "source": "fsw_root_p1_t2",
      "target": "fsw_root_p1_t2_s3"
    },
    {
      "source": "fsw_root_p1_t2_s3",
      "target": "fsw_root_p1_t2_s3_d1"
    },
    {
      "source": "fsw_root_p1_t2_s3",
      "target": "fsw_root_p1_t2_s3_d2"
    },
    {
      "source": "fsw_root_p1_t2",
      "target": "fsw_root_p1_t2_s4"
    },
    {
      "source": "fsw_root_p1_t2_s4",
      "target": "fsw_root_p1_t2_s4_d1"
    },
    {
      "source": "fsw_root_p1_t2_s4",
      "target": "fsw_root_p1_t2_s4_d2"
    },
    {
      "source": "fsw_root_p1_t2",
      "target": "fsw_root_p1_t2_s5"
    },
    {
      "source": "fsw_root_p1_t2_s5",
      "target": "fsw_root_p1_t2_s5_d1"
    },
    {
      "source": "fsw_root_p1_t2_s5",
      "target": "fsw_root_p1_t2_s5_d2"
    },
    {
      "source": "fsw_root_p1",
      "target": "fsw_root_p1_t3"
    },
    {
      "source": "fsw_root_p1_t3",
      "target": "fsw_root_p1_t3_s1"
    },
    {
      "source": "fsw_root_p1_t3_s1",
      "target": "fsw_root_p1_t3_s1_d1"
    },
    {
      "source": "fsw_root_p1_t3_s1",
      "target": "fsw_root_p1_t3_s1_d2"
    },
    {
      "source": "fsw_root_p1_t3",
      "target": "fsw_root_p1_t3_s2"
    },
    {
      "source": "fsw_root_p1_t3_s2",
      "target": "fsw_root_p1_t3_s2_d1"
    },
    {
      "source": "fsw_root_p1_t3_s2",
      "target": "fsw_root_p1_t3_s2_d2"
    },
    {
      "source": "fsw_root_p1_t3",
      "target": "fsw_root_p1_t3_s3"
    },
    {
      "source": "fsw_root_p1_t3_s3",
      "target": "fsw_root_p1_t3_s3_d1"
    },
    {
      "source": "fsw_root_p1_t3_s3",
      "target": "fsw_root_p1_t3_s3_d2"
    },
    {
      "source": "fsw_root_p1_t3",
      "target": "fsw_root_p1_t3_s4"
    },
    {
      "source": "fsw_root_p1_t3_s4",
      "target": "fsw_root_p1_t3_s4_d1"
    },
    {
      "source": "fsw_root_p1_t3_s4",
      "target": "fsw_root_p1_t3_s4_d2"
    },
    {
      "source": "fsw_root_p1_t3",
      "target": "fsw_root_p1_t3_s5"
    },
    {
      "source": "fsw_root_p1_t3_s5",
      "target": "fsw_root_p1_t3_s5_d1"
    },
    {
      "source": "fsw_root_p1_t3_s5",
      "target": "fsw_root_p1_t3_s5_d2"
    },
    {
      "source": "fsw_root_p1",
      "target": "fsw_root_p1_t4"
    },
    {
      "source": "fsw_root_p1_t4",
      "target": "fsw_root_p1_t4_s1"
    },
    {
      "source": "fsw_root_p1_t4_s1",
      "target": "fsw_root_p1_t4_s1_d1"
    },
    {
      "source": "fsw_root_p1_t4_s1",
      "target": "fsw_root_p1_t4_s1_d2"
    },
    {
      "source": "fsw_root_p1_t4",
      "target": "fsw_root_p1_t4_s2"
    },
    {
      "source": "fsw_root_p1_t4_s2",
      "target": "fsw_root_p1_t4_s2_d1"
    },
    {
      "source": "fsw_root_p1_t4_s2",
      "target": "fsw_root_p1_t4_s2_d2"
    },
    {
      "source": "fsw_root_p1_t4",
      "target": "fsw_root_p1_t4_s3"
    },
    {
      "source": "fsw_root_p1_t4_s3",
      "target": "fsw_root_p1_t4_s3_d1"
    },
    {
      "source": "fsw_root_p1_t4_s3",
      "target": "fsw_root_p1_t4_s3_d2"
    },
    {
      "source": "fsw_root_p1_t4",
      "target": "fsw_root_p1_t4_s4"
    },
    {
      "source": "fsw_root_p1_t4_s4",
      "target": "fsw_root_p1_t4_s4_d1"
    },
    {
      "source": "fsw_root_p1_t4_s4",
      "target": "fsw_root_p1_t4_s4_d2"
    },
    {
      "source": "fsw_root_p1_t4",
      "target": "fsw_root_p1_t4_s5"
    },
    {
      "source": "fsw_root_p1_t4_s5",
      "target": "fsw_root_p1_t4_s5_d1"
    },
    {
      "source": "fsw_root_p1_t4_s5",
      "target": "fsw_root_p1_t4_s5_d2"
    },
    {
      "source": "fsw_root_p1",
      "target": "fsw_root_p1_t5"
    },
    {
      "source": "fsw_root_p1_t5",
      "target": "fsw_root_p1_t5_s1"
    },
    {
      "source": "fsw_root_p1_t5_s1",
      "target": "fsw_root_p1_t5_s1_d1"
    },
    {
      "source": "fsw_root_p1_t5_s1",
      "target": "fsw_root_p1_t5_s1_d2"
    },
    {
      "source": "fsw_root_p1_t5",
      "target": "fsw_root_p1_t5_s2"
    },
    {
      "source": "fsw_root_p1_t5_s2",
      "target": "fsw_root_p1_t5_s2_d1"
    },
    {
      "source": "fsw_root_p1_t5_s2",
      "target": "fsw_root_p1_t5_s2_d2"
    },
    {
      "source": "fsw_root_p1_t5",
      "target": "fsw_root_p1_t5_s3"
    },
    {
      "source": "fsw_root_p1_t5_s3",
      "target": "fsw_root_p1_t5_s3_d1"
    },
    {
      "source": "fsw_root_p1_t5_s3",
      "target": "fsw_root_p1_t5_s3_d2"
    },
    {
      "source": "fsw_root_p1_t5",
      "target": "fsw_root_p1_t5_s4"
    },
    {
      "source": "fsw_root_p1_t5_s4",
      "target": "fsw_root_p1_t5_s4_d1"
    },
    {
      "source": "fsw_root_p1_t5_s4",
      "target": "fsw_root_p1_t5_s4_d2"
    },
    {
      "source": "fsw_root_p1_t5",
      "target": "fsw_root_p1_t5_s5"
    },
    {
      "source": "fsw_root_p1_t5_s5",
      "target": "fsw_root_p1_t5_s5_d1"
    },
    {
      "source": "fsw_root_p1_t5_s5",
      "target": "fsw_root_p1_t5_s5_d2"
    },
    {
      "source": "fsw_root_p1",
      "target": "fsw_root_p1_t6"
    },
    {
      "source": "fsw_root_p1_t6",
      "target": "fsw_root_p1_t6_s1"
    },
    {
      "source": "fsw_root_p1_t6_s1",
      "target": "fsw_root_p1_t6_s1_d1"
    },
    {
      "source": "fsw_root_p1_t6_s1",
      "target": "fsw_root_p1_t6_s1_d2"
    },
    {
      "source": "fsw_root_p1_t6",
      "target": "fsw_root_p1_t6_s2"
    },
    {
      "source": "fsw_root_p1_t6_s2",
      "target": "fsw_root_p1_t6_s2_d1"
    },
    {
      "source": "fsw_root_p1_t6_s2",
      "target": "fsw_root_p1_t6_s2_d2"
    },
    {
      "source": "fsw_root_p1_t6",
      "target": "fsw_root_p1_t6_s3"
    },
    {
      "source": "fsw_root_p1_t6_s3",
      "target": "fsw_root_p1_t6_s3_d1"
    },
    {
      "source": "fsw_root_p1_t6_s3",
      "target": "fsw_root_p1_t6_s3_d2"
    },
    {
      "source": "fsw_root_p1_t6",
      "target": "fsw_root_p1_t6_s4"
    },
    {
      "source": "fsw_root_p1_t6_s4",
      "target": "fsw_root_p1_t6_s4_d1"
    },
    {
      "source": "fsw_root_p1_t6_s4",
      "target": "fsw_root_p1_t6_s4_d2"
    },
    {
      "source": "fsw_root_p1_t6",
      "target": "fsw_root_p1_t6_s5"
    },
    {
      "source": "fsw_root_p1_t6_s5",
      "target": "fsw_root_p1_t6_s5_d1"
    },
    {
      "source": "fsw_root_p1_t6_s5",
      "target": "fsw_root_p1_t6_s5_d2"
    },
    {
      "source": "fsw_root",
      "target": "fsw_root_p2"
    },
    {
      "source": "fsw_root_p2",
      "target": "fsw_root_p2_t1"
    },
    {
      "source": "fsw_root_p2_t1",
      "target": "fsw_root_p2_t1_s1"
    },
    {
      "source": "fsw_root_p2_t1_s1",
      "target": "fsw_root_p2_t1_s1_d1"
    },
    {
      "source": "fsw_root_p2_t1_s1",
      "target": "fsw_root_p2_t1_s1_d2"
    },
    {
      "source": "fsw_root_p2_t1",
      "target": "fsw_root_p2_t1_s2"
    },
    {
      "source": "fsw_root_p2_t1_s2",
      "target": "fsw_root_p2_t1_s2_d1"
    },
    {
      "source": "fsw_root_p2_t1_s2",
      "target": "fsw_root_p2_t1_s2_d2"
    },
    {
      "source": "fsw_root_p2_t1",
      "target": "fsw_root_p2_t1_s3"
    },
    {
      "source": "fsw_root_p2_t1_s3",
      "target": "fsw_root_p2_t1_s3_d1"
    },
    {
      "source": "fsw_root_p2_t1_s3",
      "target": "fsw_root_p2_t1_s3_d2"
    },
    {
      "source": "fsw_root_p2_t1",
      "target": "fsw_root_p2_t1_s4"
    },
    {
      "source": "fsw_root_p2_t1_s4",
      "target": "fsw_root_p2_t1_s4_d1"
    },
    {
      "source": "fsw_root_p2_t1_s4",
      "target": "fsw_root_p2_t1_s4_d2"
    },
    {
      "source": "fsw_root_p2_t1",
      "target": "fsw_root_p2_t1_s5"
    },
    {
      "source": "fsw_root_p2_t1_s5",
      "target": "fsw_root_p2_t1_s5_d1"
    },
    {
      "source": "fsw_root_p2_t1_s5",
      "target": "fsw_root_p2_t1_s5_d2"
    },
    {
      "source": "fsw_root_p2",
      "target": "fsw_root_p2_t2"
    },
    {
      "source": "fsw_root_p2_t2",
      "target": "fsw_root_p2_t2_s1"
    },
    {
      "source": "fsw_root_p2_t2_s1",
      "target": "fsw_root_p2_t2_s1_d1"
    },
    {
      "source": "fsw_root_p2_t2_s1",
      "target": "fsw_root_p2_t2_s1_d2"
    },
    {
      "source": "fsw_root_p2_t2",
      "target": "fsw_root_p2_t2_s2"
    },
    {
      "source": "fsw_root_p2_t2_s2",
      "target": "fsw_root_p2_t2_s2_d1"
    },
    {
      "source": "fsw_root_p2_t2_s2",
      "target": "fsw_root_p2_t2_s2_d2"
    },
    {
      "source": "fsw_root_p2_t2",
      "target": "fsw_root_p2_t2_s3"
    },
    {
      "source": "fsw_root_p2_t2_s3",
      "target": "fsw_root_p2_t2_s3_d1"
    },
    {
      "source": "fsw_root_p2_t2_s3",
      "target": "fsw_root_p2_t2_s3_d2"
    },
    {
      "source": "fsw_root_p2_t2",
      "target": "fsw_root_p2_t2_s4"
    },
    {
      "source": "fsw_root_p2_t2_s4",
      "target": "fsw_root_p2_t2_s4_d1"
    },
    {
      "source": "fsw_root_p2_t2_s4",
      "target": "fsw_root_p2_t2_s4_d2"
    },
    {
      "source": "fsw_root_p2_t2",
      "target": "fsw_root_p2_t2_s5"
    },
    {
      "source": "fsw_root_p2_t2_s5",
      "target": "fsw_root_p2_t2_s5_d1"
    },
    {
      "source": "fsw_root_p2_t2_s5",
      "target": "fsw_root_p2_t2_s5_d2"
    },
    {
      "source": "fsw_root_p2",
      "target": "fsw_root_p2_t3"
    },
    {
      "source": "fsw_root_p2_t3",
      "target": "fsw_root_p2_t3_s1"
    },
    {
      "source": "fsw_root_p2_t3_s1",
      "target": "fsw_root_p2_t3_s1_d1"
    },
    {
      "source": "fsw_root_p2_t3_s1",
      "target": "fsw_root_p2_t3_s1_d2"
    },
    {
      "source": "fsw_root_p2_t3",
      "target": "fsw_root_p2_t3_s2"
    },
    {
      "source": "fsw_root_p2_t3_s2",
      "target": "fsw_root_p2_t3_s2_d1"
    },
    {
      "source": "fsw_root_p2_t3_s2",
      "target": "fsw_root_p2_t3_s2_d2"
    },
    {
      "source": "fsw_root_p2_t3",
      "target": "fsw_root_p2_t3_s3"
    },
    {
      "source": "fsw_root_p2_t3_s3",
      "target": "fsw_root_p2_t3_s3_d1"
    },
    {
      "source": "fsw_root_p2_t3_s3",
      "target": "fsw_root_p2_t3_s3_d2"
    },
    {
      "source": "fsw_root_p2_t3",
      "target": "fsw_root_p2_t3_s4"
    },
    {
      "source": "fsw_root_p2_t3_s4",
      "target": "fsw_root_p2_t3_s4_d1"
    },
    {
      "source": "fsw_root_p2_t3_s4",
      "target": "fsw_root_p2_t3_s4_d2"
    },
    {
      "source": "fsw_root_p2_t3",
      "target": "fsw_root_p2_t3_s5"
    },
    {
      "source": "fsw_root_p2_t3_s5",
      "target": "fsw_root_p2_t3_s5_d1"
    },
    {
      "source": "fsw_root_p2_t3_s5",
      "target": "fsw_root_p2_t3_s5_d2"
    },
    {
      "source": "fsw_root_p2",
      "target": "fsw_root_p2_t4"
    },
    {
      "source": "fsw_root_p2_t4",
      "target": "fsw_root_p2_t4_s1"
    },
    {
      "source": "fsw_root_p2_t4_s1",
      "target": "fsw_root_p2_t4_s1_d1"
    },
    {
      "source": "fsw_root_p2_t4_s1",
      "target": "fsw_root_p2_t4_s1_d2"
    },
    {
      "source": "fsw_root_p2_t4",
      "target": "fsw_root_p2_t4_s2"
    },
    {
      "source": "fsw_root_p2_t4_s2",
      "target": "fsw_root_p2_t4_s2_d1"
    },
    {
      "source": "fsw_root_p2_t4_s2",
      "target": "fsw_root_p2_t4_s2_d2"
    },
    {
      "source": "fsw_root_p2_t4",
      "target": "fsw_root_p2_t4_s3"
    },
    {
      "source": "fsw_root_p2_t4_s3",
      "target": "fsw_root_p2_t4_s3_d1"
    },
    {
      "source": "fsw_root_p2_t4_s3",
      "target": "fsw_root_p2_t4_s3_d2"
    },
    {
      "source": "fsw_root_p2_t4",
      "target": "fsw_root_p2_t4_s4"
    },
    {
      "source": "fsw_root_p2_t4_s4",
      "target": "fsw_root_p2_t4_s4_d1"
    },
    {
      "source": "fsw_root_p2_t4_s4",
      "target": "fsw_root_p2_t4_s4_d2"
    },
    {
      "source": "fsw_root_p2_t4",
      "target": "fsw_root_p2_t4_s5"
    },
    {
      "source": "fsw_root_p2_t4_s5",
      "target": "fsw_root_p2_t4_s5_d1"
    },
    {
      "source": "fsw_root_p2_t4_s5",
      "target": "fsw_root_p2_t4_s5_d2"
    },
    {
      "source": "fsw_root_p2",
      "target": "fsw_root_p2_t5"
    },
    {
      "source": "fsw_root_p2_t5",
      "target": "fsw_root_p2_t5_s1"
    },
    {
      "source": "fsw_root_p2_t5_s1",
      "target": "fsw_root_p2_t5_s1_d1"
    },
    {
      "source": "fsw_root_p2_t5_s1",
      "target": "fsw_root_p2_t5_s1_d2"
    },
    {
      "source": "fsw_root_p2_t5",
      "target": "fsw_root_p2_t5_s2"
    },
    {
      "source": "fsw_root_p2_t5_s2",
      "target": "fsw_root_p2_t5_s2_d1"
    },
    {
      "source": "fsw_root_p2_t5_s2",
      "target": "fsw_root_p2_t5_s2_d2"
    },
    {
      "source": "fsw_root_p2_t5",
      "target": "fsw_root_p2_t5_s3"
    },
    {
      "source": "fsw_root_p2_t5_s3",
      "target": "fsw_root_p2_t5_s3_d1"
    },
    {
      "source": "fsw_root_p2_t5_s3",
      "target": "fsw_root_p2_t5_s3_d2"
    },
    {
      "source": "fsw_root_p2_t5",
      "target": "fsw_root_p2_t5_s4"
    },
    {
      "source": "fsw_root_p2_t5_s4",
      "target": "fsw_root_p2_t5_s4_d1"
    },
    {
      "source": "fsw_root_p2_t5_s4",
      "target": "fsw_root_p2_t5_s4_d2"
    },
    {
      "source": "fsw_root_p2_t5",
      "target": "fsw_root_p2_t5_s5"
    },
    {
      "source": "fsw_root_p2_t5_s5",
      "target": "fsw_root_p2_t5_s5_d1"
    },
    {
      "source": "fsw_root_p2_t5_s5",
      "target": "fsw_root_p2_t5_s5_d2"
    },
    {
      "source": "fsw_root_p2",
      "target": "fsw_root_p2_t6"
    },
    {
      "source": "fsw_root_p2_t6",
      "target": "fsw_root_p2_t6_s1"
    },
    {
      "source": "fsw_root_p2_t6_s1",
      "target": "fsw_root_p2_t6_s1_d1"
    },
    {
      "source": "fsw_root_p2_t6_s1",
      "target": "fsw_root_p2_t6_s1_d2"
    },
    {
      "source": "fsw_root_p2_t6",
      "target": "fsw_root_p2_t6_s2"
    },
    {
      "source": "fsw_root_p2_t6_s2",
      "target": "fsw_root_p2_t6_s2_d1"
    },
    {
      "source": "fsw_root_p2_t6_s2",
      "target": "fsw_root_p2_t6_s2_d2"
    },
    {
      "source": "fsw_root_p2_t6",
      "target": "fsw_root_p2_t6_s3"
    },
    {
      "source": "fsw_root_p2_t6_s3",
      "target": "fsw_root_p2_t6_s3_d1"
    },
    {
      "source": "fsw_root_p2_t6_s3",
      "target": "fsw_root_p2_t6_s3_d2"
    },
    {
      "source": "fsw_root_p2_t6",
      "target": "fsw_root_p2_t6_s4"
    },
    {
      "source": "fsw_root_p2_t6_s4",
      "target": "fsw_root_p2_t6_s4_d1"
    },
    {
      "source": "fsw_root_p2_t6_s4",
      "target": "fsw_root_p2_t6_s4_d2"
    },
    {
      "source": "fsw_root_p2_t6",
      "target": "fsw_root_p2_t6_s5"
    },
    {
      "source": "fsw_root_p2_t6_s5",
      "target": "fsw_root_p2_t6_s5_d1"
    },
    {
      "source": "fsw_root_p2_t6_s5",
      "target": "fsw_root_p2_t6_s5_d2"
    },
    {
      "source": "fsw_root",
      "target": "fsw_root_p3"
    },
    {
      "source": "fsw_root_p3",
      "target": "fsw_root_p3_t1"
    },
    {
      "source": "fsw_root_p3_t1",
      "target": "fsw_root_p3_t1_s1"
    },
    {
      "source": "fsw_root_p3_t1_s1",
      "target": "fsw_root_p3_t1_s1_d1"
    },
    {
      "source": "fsw_root_p3_t1_s1",
      "target": "fsw_root_p3_t1_s1_d2"
    },
    {
      "source": "fsw_root_p3_t1",
      "target": "fsw_root_p3_t1_s2"
    },
    {
      "source": "fsw_root_p3_t1_s2",
      "target": "fsw_root_p3_t1_s2_d1"
    },
    {
      "source": "fsw_root_p3_t1_s2",
      "target": "fsw_root_p3_t1_s2_d2"
    },
    {
      "source": "fsw_root_p3_t1",
      "target": "fsw_root_p3_t1_s3"
    },
    {
      "source": "fsw_root_p3_t1_s3",
      "target": "fsw_root_p3_t1_s3_d1"
    },
    {
      "source": "fsw_root_p3_t1_s3",
      "target": "fsw_root_p3_t1_s3_d2"
    },
    {
      "source": "fsw_root_p3_t1",
      "target": "fsw_root_p3_t1_s4"
    },
    {
      "source": "fsw_root_p3_t1_s4",
      "target": "fsw_root_p3_t1_s4_d1"
    },
    {
      "source": "fsw_root_p3_t1_s4",
      "target": "fsw_root_p3_t1_s4_d2"
    },
    {
      "source": "fsw_root_p3_t1",
      "target": "fsw_root_p3_t1_s5"
    },
    {
      "source": "fsw_root_p3_t1_s5",
      "target": "fsw_root_p3_t1_s5_d1"
    },
    {
      "source": "fsw_root_p3_t1_s5",
      "target": "fsw_root_p3_t1_s5_d2"
    },
    {
      "source": "fsw_root_p3",
      "target": "fsw_root_p3_t2"
    },
    {
      "source": "fsw_root_p3_t2",
      "target": "fsw_root_p3_t2_s1"
    },
    {
      "source": "fsw_root_p3_t2_s1",
      "target": "fsw_root_p3_t2_s1_d1"
    },
    {
      "source": "fsw_root_p3_t2_s1",
      "target": "fsw_root_p3_t2_s1_d2"
    },
    {
      "source": "fsw_root_p3_t2",
      "target": "fsw_root_p3_t2_s2"
    },
    {
      "source": "fsw_root_p3_t2_s2",
      "target": "fsw_root_p3_t2_s2_d1"
    },
    {
      "source": "fsw_root_p3_t2_s2",
      "target": "fsw_root_p3_t2_s2_d2"
    },
    {
      "source": "fsw_root_p3_t2",
      "target": "fsw_root_p3_t2_s3"
    },
    {
      "source": "fsw_root_p3_t2_s3",
      "target": "fsw_root_p3_t2_s3_d1"
    },
    {
      "source": "fsw_root_p3_t2_s3",
      "target": "fsw_root_p3_t2_s3_d2"
    },
    {
      "source": "fsw_root_p3_t2",
      "target": "fsw_root_p3_t2_s4"
    },
    {
      "source": "fsw_root_p3_t2_s4",
      "target": "fsw_root_p3_t2_s4_d1"
    },
    {
      "source": "fsw_root_p3_t2_s4",
      "target": "fsw_root_p3_t2_s4_d2"
    },
    {
      "source": "fsw_root_p3_t2",
      "target": "fsw_root_p3_t2_s5"
    },
    {
      "source": "fsw_root_p3_t2_s5",
      "target": "fsw_root_p3_t2_s5_d1"
    },
    {
      "source": "fsw_root_p3_t2_s5",
      "target": "fsw_root_p3_t2_s5_d2"
    },
    {
      "source": "fsw_root_p3",
      "target": "fsw_root_p3_t3"
    },
    {
      "source": "fsw_root_p3_t3",
      "target": "fsw_root_p3_t3_s1"
    },
    {
      "source": "fsw_root_p3_t3_s1",
      "target": "fsw_root_p3_t3_s1_d1"
    },
    {
      "source": "fsw_root_p3_t3_s1",
      "target": "fsw_root_p3_t3_s1_d2"
    },
    {
      "source": "fsw_root_p3_t3",
      "target": "fsw_root_p3_t3_s2"
    },
    {
      "source": "fsw_root_p3_t3_s2",
      "target": "fsw_root_p3_t3_s2_d1"
    },
    {
      "source": "fsw_root_p3_t3_s2",
      "target": "fsw_root_p3_t3_s2_d2"
    },
    {
      "source": "fsw_root_p3_t3",
      "target": "fsw_root_p3_t3_s3"
    },
    {
      "source": "fsw_root_p3_t3_s3",
      "target": "fsw_root_p3_t3_s3_d1"
    },
    {
      "source": "fsw_root_p3_t3_s3",
      "target": "fsw_root_p3_t3_s3_d2"
    },
    {
      "source": "fsw_root_p3_t3",
      "target": "fsw_root_p3_t3_s4"
    },
    {
      "source": "fsw_root_p3_t3_s4",
      "target": "fsw_root_p3_t3_s4_d1"
    },
    {
      "source": "fsw_root_p3_t3_s4",
      "target": "fsw_root_p3_t3_s4_d2"
    },
    {
      "source": "fsw_root_p3_t3",
      "target": "fsw_root_p3_t3_s5"
    },
    {
      "source": "fsw_root_p3_t3_s5",
      "target": "fsw_root_p3_t3_s5_d1"
    },
    {
      "source": "fsw_root_p3_t3_s5",
      "target": "fsw_root_p3_t3_s5_d2"
    },
    {
      "source": "fsw_root_p3",
      "target": "fsw_root_p3_t4"
    },
    {
      "source": "fsw_root_p3_t4",
      "target": "fsw_root_p3_t4_s1"
    },
    {
      "source": "fsw_root_p3_t4_s1",
      "target": "fsw_root_p3_t4_s1_d1"
    },
    {
      "source": "fsw_root_p3_t4_s1",
      "target": "fsw_root_p3_t4_s1_d2"
    },
    {
      "source": "fsw_root_p3_t4",
      "target": "fsw_root_p3_t4_s2"
    },
    {
      "source": "fsw_root_p3_t4_s2",
      "target": "fsw_root_p3_t4_s2_d1"
    },
    {
      "source": "fsw_root_p3_t4_s2",
      "target": "fsw_root_p3_t4_s2_d2"
    },
    {
      "source": "fsw_root_p3_t4",
      "target": "fsw_root_p3_t4_s3"
    },
    {
      "source": "fsw_root_p3_t4_s3",
      "target": "fsw_root_p3_t4_s3_d1"
    },
    {
      "source": "fsw_root_p3_t4_s3",
      "target": "fsw_root_p3_t4_s3_d2"
    },
    {
      "source": "fsw_root_p3_t4",
      "target": "fsw_root_p3_t4_s4"
    },
    {
      "source": "fsw_root_p3_t4_s4",
      "target": "fsw_root_p3_t4_s4_d1"
    },
    {
      "source": "fsw_root_p3_t4_s4",
      "target": "fsw_root_p3_t4_s4_d2"
    },
    {
      "source": "fsw_root_p3_t4",
      "target": "fsw_root_p3_t4_s5"
    },
    {
      "source": "fsw_root_p3_t4_s5",
      "target": "fsw_root_p3_t4_s5_d1"
    },
    {
      "source": "fsw_root_p3_t4_s5",
      "target": "fsw_root_p3_t4_s5_d2"
    },
    {
      "source": "fsw_root_p3",
      "target": "fsw_root_p3_t5"
    },
    {
      "source": "fsw_root_p3_t5",
      "target": "fsw_root_p3_t5_s1"
    },
    {
      "source": "fsw_root_p3_t5_s1",
      "target": "fsw_root_p3_t5_s1_d1"
    },
    {
      "source": "fsw_root_p3_t5_s1",
      "target": "fsw_root_p3_t5_s1_d2"
    },
    {
      "source": "fsw_root_p3_t5",
      "target": "fsw_root_p3_t5_s2"
    },
    {
      "source": "fsw_root_p3_t5_s2",
      "target": "fsw_root_p3_t5_s2_d1"
    },
    {
      "source": "fsw_root_p3_t5_s2",
      "target": "fsw_root_p3_t5_s2_d2"
    },
    {
      "source": "fsw_root_p3_t5",
      "target": "fsw_root_p3_t5_s3"
    },
    {
      "source": "fsw_root_p3_t5_s3",
      "target": "fsw_root_p3_t5_s3_d1"
    },
    {
      "source": "fsw_root_p3_t5_s3",
      "target": "fsw_root_p3_t5_s3_d2"
    },
    {
      "source": "fsw_root_p3_t5",
      "target": "fsw_root_p3_t5_s4"
    },
    {
      "source": "fsw_root_p3_t5_s4",
      "target": "fsw_root_p3_t5_s4_d1"
    },
    {
      "source": "fsw_root_p3_t5_s4",
      "target": "fsw_root_p3_t5_s4_d2"
    },
    {
      "source": "fsw_root_p3_t5",
      "target": "fsw_root_p3_t5_s5"
    },
    {
      "source": "fsw_root_p3_t5_s5",
      "target": "fsw_root_p3_t5_s5_d1"
    },
    {
      "source": "fsw_root_p3_t5_s5",
      "target": "fsw_root_p3_t5_s5_d2"
    },
    {
      "source": "fsw_root_p3",
      "target": "fsw_root_p3_t6"
    },
    {
      "source": "fsw_root_p3_t6",
      "target": "fsw_root_p3_t6_s1"
    },
    {
      "source": "fsw_root_p3_t6_s1",
      "target": "fsw_root_p3_t6_s1_d1"
    },
    {
      "source": "fsw_root_p3_t6_s1",
      "target": "fsw_root_p3_t6_s1_d2"
    },
    {
      "source": "fsw_root_p3_t6",
      "target": "fsw_root_p3_t6_s2"
    },
    {
      "source": "fsw_root_p3_t6_s2",
      "target": "fsw_root_p3_t6_s2_d1"
    },
    {
      "source": "fsw_root_p3_t6_s2",
      "target": "fsw_root_p3_t6_s2_d2"
    },
    {
      "source": "fsw_root_p3_t6",
      "target": "fsw_root_p3_t6_s3"
    },
    {
      "source": "fsw_root_p3_t6_s3",
      "target": "fsw_root_p3_t6_s3_d1"
    },
    {
      "source": "fsw_root_p3_t6_s3",
      "target": "fsw_root_p3_t6_s3_d2"
    },
    {
      "source": "fsw_root_p3_t6",
      "target": "fsw_root_p3_t6_s4"
    },
    {
      "source": "fsw_root_p3_t6_s4",
      "target": "fsw_root_p3_t6_s4_d1"
    },
    {
      "source": "fsw_root_p3_t6_s4",
      "target": "fsw_root_p3_t6_s4_d2"
    },
    {
      "source": "fsw_root_p3_t6",
      "target": "fsw_root_p3_t6_s5"
    },
    {
      "source": "fsw_root_p3_t6_s5",
      "target": "fsw_root_p3_t6_s5_d1"
    },
    {
      "source": "fsw_root_p3_t6_s5",
      "target": "fsw_root_p3_t6_s5_d2"
    },
    {
      "source": "fsw_root",
      "target": "fsw_root_p4"
    },
    {
      "source": "fsw_root_p4",
      "target": "fsw_root_p4_t1"
    },
    {
      "source": "fsw_root_p4_t1",
      "target": "fsw_root_p4_t1_s1"
    },
    {
      "source": "fsw_root_p4_t1_s1",
      "target": "fsw_root_p4_t1_s1_d1"
    },
    {
      "source": "fsw_root_p4_t1_s1",
      "target": "fsw_root_p4_t1_s1_d2"
    },
    {
      "source": "fsw_root_p4_t1",
      "target": "fsw_root_p4_t1_s2"
    },
    {
      "source": "fsw_root_p4_t1_s2",
      "target": "fsw_root_p4_t1_s2_d1"
    },
    {
      "source": "fsw_root_p4_t1_s2",
      "target": "fsw_root_p4_t1_s2_d2"
    },
    {
      "source": "fsw_root_p4_t1",
      "target": "fsw_root_p4_t1_s3"
    },
    {
      "source": "fsw_root_p4_t1_s3",
      "target": "fsw_root_p4_t1_s3_d1"
    },
    {
      "source": "fsw_root_p4_t1_s3",
      "target": "fsw_root_p4_t1_s3_d2"
    },
    {
      "source": "fsw_root_p4_t1",
      "target": "fsw_root_p4_t1_s4"
    },
    {
      "source": "fsw_root_p4_t1_s4",
      "target": "fsw_root_p4_t1_s4_d1"
    },
    {
      "source": "fsw_root_p4_t1_s4",
      "target": "fsw_root_p4_t1_s4_d2"
    },
    {
      "source": "fsw_root_p4_t1",
      "target": "fsw_root_p4_t1_s5"
    },
    {
      "source": "fsw_root_p4_t1_s5",
      "target": "fsw_root_p4_t1_s5_d1"
    },
    {
      "source": "fsw_root_p4_t1_s5",
      "target": "fsw_root_p4_t1_s5_d2"
    },
    {
      "source": "fsw_root_p4",
      "target": "fsw_root_p4_t2"
    },
    {
      "source": "fsw_root_p4_t2",
      "target": "fsw_root_p4_t2_s1"
    },
    {
      "source": "fsw_root_p4_t2_s1",
      "target": "fsw_root_p4_t2_s1_d1"
    },
    {
      "source": "fsw_root_p4_t2_s1",
      "target": "fsw_root_p4_t2_s1_d2"
    },
    {
      "source": "fsw_root_p4_t2",
      "target": "fsw_root_p4_t2_s2"
    },
    {
      "source": "fsw_root_p4_t2_s2",
      "target": "fsw_root_p4_t2_s2_d1"
    },
    {
      "source": "fsw_root_p4_t2_s2",
      "target": "fsw_root_p4_t2_s2_d2"
    },
    {
      "source": "fsw_root_p4_t2",
      "target": "fsw_root_p4_t2_s3"
    },
    {
      "source": "fsw_root_p4_t2_s3",
      "target": "fsw_root_p4_t2_s3_d1"
    },
    {
      "source": "fsw_root_p4_t2_s3",
      "target": "fsw_root_p4_t2_s3_d2"
    },
    {
      "source": "fsw_root_p4_t2",
      "target": "fsw_root_p4_t2_s4"
    },
    {
      "source": "fsw_root_p4_t2_s4",
      "target": "fsw_root_p4_t2_s4_d1"
    },
    {
      "source": "fsw_root_p4_t2_s4",
      "target": "fsw_root_p4_t2_s4_d2"
    },
    {
      "source": "fsw_root_p4_t2",
      "target": "fsw_root_p4_t2_s5"
    },
    {
      "source": "fsw_root_p4_t2_s5",
      "target": "fsw_root_p4_t2_s5_d1"
    },
    {
      "source": "fsw_root_p4_t2_s5",
      "target": "fsw_root_p4_t2_s5_d2"
    },
    {
      "source": "fsw_root_p4",
      "target": "fsw_root_p4_t3"
    },
    {
      "source": "fsw_root_p4_t3",
      "target": "fsw_root_p4_t3_s1"
    },
    {
      "source": "fsw_root_p4_t3_s1",
      "target": "fsw_root_p4_t3_s1_d1"
    },
    {
      "source": "fsw_root_p4_t3_s1",
      "target": "fsw_root_p4_t3_s1_d2"
    },
    {
      "source": "fsw_root_p4_t3",
      "target": "fsw_root_p4_t3_s2"
    },
    {
      "source": "fsw_root_p4_t3_s2",
      "target": "fsw_root_p4_t3_s2_d1"
    },
    {
      "source": "fsw_root_p4_t3_s2",
      "target": "fsw_root_p4_t3_s2_d2"
    },
    {
      "source": "fsw_root_p4_t3",
      "target": "fsw_root_p4_t3_s3"
    },
    {
      "source": "fsw_root_p4_t3_s3",
      "target": "fsw_root_p4_t3_s3_d1"
    },
    {
      "source": "fsw_root_p4_t3_s3",
      "target": "fsw_root_p4_t3_s3_d2"
    },
    {
      "source": "fsw_root_p4_t3",
      "target": "fsw_root_p4_t3_s4"
    },
    {
      "source": "fsw_root_p4_t3_s4",
      "target": "fsw_root_p4_t3_s4_d1"
    },
    {
      "source": "fsw_root_p4_t3_s4",
      "target": "fsw_root_p4_t3_s4_d2"
    },
    {
      "source": "fsw_root_p4_t3",
      "target": "fsw_root_p4_t3_s5"
    },
    {
      "source": "fsw_root_p4_t3_s5",
      "target": "fsw_root_p4_t3_s5_d1"
    },
    {
      "source": "fsw_root_p4_t3_s5",
      "target": "fsw_root_p4_t3_s5_d2"
    },
    {
      "source": "fsw_root_p4",
      "target": "fsw_root_p4_t4"
    },
    {
      "source": "fsw_root_p4_t4",
      "target": "fsw_root_p4_t4_s1"
    },
    {
      "source": "fsw_root_p4_t4_s1",
      "target": "fsw_root_p4_t4_s1_d1"
    },
    {
      "source": "fsw_root_p4_t4_s1",
      "target": "fsw_root_p4_t4_s1_d2"
    },
    {
      "source": "fsw_root_p4_t4",
      "target": "fsw_root_p4_t4_s2"
    },
    {
      "source": "fsw_root_p4_t4_s2",
      "target": "fsw_root_p4_t4_s2_d1"
    },
    {
      "source": "fsw_root_p4_t4_s2",
      "target": "fsw_root_p4_t4_s2_d2"
    },
    {
      "source": "fsw_root_p4_t4",
      "target": "fsw_root_p4_t4_s3"
    },
    {
      "source": "fsw_root_p4_t4_s3",
      "target": "fsw_root_p4_t4_s3_d1"
    },
    {
      "source": "fsw_root_p4_t4_s3",
      "target": "fsw_root_p4_t4_s3_d2"
    },
    {
      "source": "fsw_root_p4_t4",
      "target": "fsw_root_p4_t4_s4"
    },
    {
      "source": "fsw_root_p4_t4_s4",
      "target": "fsw_root_p4_t4_s4_d1"
    },
    {
      "source": "fsw_root_p4_t4_s4",
      "target": "fsw_root_p4_t4_s4_d2"
    },
    {
      "source": "fsw_root_p4_t4",
      "target": "fsw_root_p4_t4_s5"
    },
    {
      "source": "fsw_root_p4_t4_s5",
      "target": "fsw_root_p4_t4_s5_d1"
    },
    {
      "source": "fsw_root_p4_t4_s5",
      "target": "fsw_root_p4_t4_s5_d2"
    },
    {
      "source": "fsw_root_p4",
      "target": "fsw_root_p4_t5"
    },
    {
      "source": "fsw_root_p4_t5",
      "target": "fsw_root_p4_t5_s1"
    },
    {
      "source": "fsw_root_p4_t5_s1",
      "target": "fsw_root_p4_t5_s1_d1"
    },
    {
      "source": "fsw_root_p4_t5_s1",
      "target": "fsw_root_p4_t5_s1_d2"
    },
    {
      "source": "fsw_root_p4_t5",
      "target": "fsw_root_p4_t5_s2"
    },
    {
      "source": "fsw_root_p4_t5_s2",
      "target": "fsw_root_p4_t5_s2_d1"
    },
    {
      "source": "fsw_root_p4_t5_s2",
      "target": "fsw_root_p4_t5_s2_d2"
    },
    {
      "source": "fsw_root_p4_t5",
      "target": "fsw_root_p4_t5_s3"
    },
    {
      "source": "fsw_root_p4_t5_s3",
      "target": "fsw_root_p4_t5_s3_d1"
    },
    {
      "source": "fsw_root_p4_t5_s3",
      "target": "fsw_root_p4_t5_s3_d2"
    },
    {
      "source": "fsw_root_p4_t5",
      "target": "fsw_root_p4_t5_s4"
    },
    {
      "source": "fsw_root_p4_t5_s4",
      "target": "fsw_root_p4_t5_s4_d1"
    },
    {
      "source": "fsw_root_p4_t5_s4",
      "target": "fsw_root_p4_t5_s4_d2"
    },
    {
      "source": "fsw_root_p4_t5",
      "target": "fsw_root_p4_t5_s5"
    },
    {
      "source": "fsw_root_p4_t5_s5",
      "target": "fsw_root_p4_t5_s5_d1"
    },
    {
      "source": "fsw_root_p4_t5_s5",
      "target": "fsw_root_p4_t5_s5_d2"
    },
    {
      "source": "fsw_root_p4",
      "target": "fsw_root_p4_t6"
    },
    {
      "source": "fsw_root_p4_t6",
      "target": "fsw_root_p4_t6_s1"
    },
    {
      "source": "fsw_root_p4_t6_s1",
      "target": "fsw_root_p4_t6_s1_d1"
    },
    {
      "source": "fsw_root_p4_t6_s1",
      "target": "fsw_root_p4_t6_s1_d2"
    },
    {
      "source": "fsw_root_p4_t6",
      "target": "fsw_root_p4_t6_s2"
    },
    {
      "source": "fsw_root_p4_t6_s2",
      "target": "fsw_root_p4_t6_s2_d1"
    },
    {
      "source": "fsw_root_p4_t6_s2",
      "target": "fsw_root_p4_t6_s2_d2"
    },
    {
      "source": "fsw_root_p4_t6",
      "target": "fsw_root_p4_t6_s3"
    },
    {
      "source": "fsw_root_p4_t6_s3",
      "target": "fsw_root_p4_t6_s3_d1"
    },
    {
      "source": "fsw_root_p4_t6_s3",
      "target": "fsw_root_p4_t6_s3_d2"
    },
    {
      "source": "fsw_root_p4_t6",
      "target": "fsw_root_p4_t6_s4"
    },
    {
      "source": "fsw_root_p4_t6_s4",
      "target": "fsw_root_p4_t6_s4_d1"
    },
    {
      "source": "fsw_root_p4_t6_s4",
      "target": "fsw_root_p4_t6_s4_d2"
    },
    {
      "source": "fsw_root_p4_t6",
      "target": "fsw_root_p4_t6_s5"
    },
    {
      "source": "fsw_root_p4_t6_s5",
      "target": "fsw_root_p4_t6_s5_d1"
    },
    {
      "source": "fsw_root_p4_t6_s5",
      "target": "fsw_root_p4_t6_s5_d2"
    },
    {
      "source": "fsw_root",
      "target": "fsw_root_p5"
    },
    {
      "source": "fsw_root_p5",
      "target": "fsw_root_p5_t1"
    },
    {
      "source": "fsw_root_p5_t1",
      "target": "fsw_root_p5_t1_s1"
    },
    {
      "source": "fsw_root_p5_t1_s1",
      "target": "fsw_root_p5_t1_s1_d1"
    },
    {
      "source": "fsw_root_p5_t1_s1",
      "target": "fsw_root_p5_t1_s1_d2"
    },
    {
      "source": "fsw_root_p5_t1",
      "target": "fsw_root_p5_t1_s2"
    },
    {
      "source": "fsw_root_p5_t1_s2",
      "target": "fsw_root_p5_t1_s2_d1"
    },
    {
      "source": "fsw_root_p5_t1_s2",
      "target": "fsw_root_p5_t1_s2_d2"
    },
    {
      "source": "fsw_root_p5_t1",
      "target": "fsw_root_p5_t1_s3"
    },
    {
      "source": "fsw_root_p5_t1_s3",
      "target": "fsw_root_p5_t1_s3_d1"
    },
    {
      "source": "fsw_root_p5_t1_s3",
      "target": "fsw_root_p5_t1_s3_d2"
    },
    {
      "source": "fsw_root_p5_t1",
      "target": "fsw_root_p5_t1_s4"
    },
    {
      "source": "fsw_root_p5_t1_s4",
      "target": "fsw_root_p5_t1_s4_d1"
    },
    {
      "source": "fsw_root_p5_t1_s4",
      "target": "fsw_root_p5_t1_s4_d2"
    },
    {
      "source": "fsw_root_p5_t1",
      "target": "fsw_root_p5_t1_s5"
    },
    {
      "source": "fsw_root_p5_t1_s5",
      "target": "fsw_root_p5_t1_s5_d1"
    },
    {
      "source": "fsw_root_p5_t1_s5",
      "target": "fsw_root_p5_t1_s5_d2"
    },
    {
      "source": "fsw_root_p5",
      "target": "fsw_root_p5_t2"
    },
    {
      "source": "fsw_root_p5_t2",
      "target": "fsw_root_p5_t2_s1"
    },
    {
      "source": "fsw_root_p5_t2_s1",
      "target": "fsw_root_p5_t2_s1_d1"
    },
    {
      "source": "fsw_root_p5_t2_s1",
      "target": "fsw_root_p5_t2_s1_d2"
    },
    {
      "source": "fsw_root_p5_t2",
      "target": "fsw_root_p5_t2_s2"
    },
    {
      "source": "fsw_root_p5_t2_s2",
      "target": "fsw_root_p5_t2_s2_d1"
    },
    {
      "source": "fsw_root_p5_t2_s2",
      "target": "fsw_root_p5_t2_s2_d2"
    },
    {
      "source": "fsw_root_p5_t2",
      "target": "fsw_root_p5_t2_s3"
    },
    {
      "source": "fsw_root_p5_t2_s3",
      "target": "fsw_root_p5_t2_s3_d1"
    },
    {
      "source": "fsw_root_p5_t2_s3",
      "target": "fsw_root_p5_t2_s3_d2"
    },
    {
      "source": "fsw_root_p5_t2",
      "target": "fsw_root_p5_t2_s4"
    },
    {
      "source": "fsw_root_p5_t2_s4",
      "target": "fsw_root_p5_t2_s4_d1"
    },
    {
      "source": "fsw_root_p5_t2_s4",
      "target": "fsw_root_p5_t2_s4_d2"
    },
    {
      "source": "fsw_root_p5_t2",
      "target": "fsw_root_p5_t2_s5"
    },
    {
      "source": "fsw_root_p5_t2_s5",
      "target": "fsw_root_p5_t2_s5_d1"
    },
    {
      "source": "fsw_root_p5_t2_s5",
      "target": "fsw_root_p5_t2_s5_d2"
    },
    {
      "source": "fsw_root_p5",
      "target": "fsw_root_p5_t3"
    },
    {
      "source": "fsw_root_p5_t3",
      "target": "fsw_root_p5_t3_s1"
    },
    {
      "source": "fsw_root_p5_t3_s1",
      "target": "fsw_root_p5_t3_s1_d1"
    },
    {
      "source": "fsw_root_p5_t3_s1",
      "target": "fsw_root_p5_t3_s1_d2"
    },
    {
      "source": "fsw_root_p5_t3",
      "target": "fsw_root_p5_t3_s2"
    },
    {
      "source": "fsw_root_p5_t3_s2",
      "target": "fsw_root_p5_t3_s2_d1"
    },
    {
      "source": "fsw_root_p5_t3_s2",
      "target": "fsw_root_p5_t3_s2_d2"
    },
    {
      "source": "fsw_root_p5_t3",
      "target": "fsw_root_p5_t3_s3"
    },
    {
      "source": "fsw_root_p5_t3_s3",
      "target": "fsw_root_p5_t3_s3_d1"
    },
    {
      "source": "fsw_root_p5_t3_s3",
      "target": "fsw_root_p5_t3_s3_d2"
    },
    {
      "source": "fsw_root_p5_t3",
      "target": "fsw_root_p5_t3_s4"
    },
    {
      "source": "fsw_root_p5_t3_s4",
      "target": "fsw_root_p5_t3_s4_d1"
    },
    {
      "source": "fsw_root_p5_t3_s4",
      "target": "fsw_root_p5_t3_s4_d2"
    },
    {
      "source": "fsw_root_p5_t3",
      "target": "fsw_root_p5_t3_s5"
    },
    {
      "source": "fsw_root_p5_t3_s5",
      "target": "fsw_root_p5_t3_s5_d1"
    },
    {
      "source": "fsw_root_p5_t3_s5",
      "target": "fsw_root_p5_t3_s5_d2"
    },
    {
      "source": "fsw_root_p5",
      "target": "fsw_root_p5_t4"
    },
    {
      "source": "fsw_root_p5_t4",
      "target": "fsw_root_p5_t4_s1"
    },
    {
      "source": "fsw_root_p5_t4_s1",
      "target": "fsw_root_p5_t4_s1_d1"
    },
    {
      "source": "fsw_root_p5_t4_s1",
      "target": "fsw_root_p5_t4_s1_d2"
    },
    {
      "source": "fsw_root_p5_t4",
      "target": "fsw_root_p5_t4_s2"
    },
    {
      "source": "fsw_root_p5_t4_s2",
      "target": "fsw_root_p5_t4_s2_d1"
    },
    {
      "source": "fsw_root_p5_t4_s2",
      "target": "fsw_root_p5_t4_s2_d2"
    },
    {
      "source": "fsw_root_p5_t4",
      "target": "fsw_root_p5_t4_s3"
    },
    {
      "source": "fsw_root_p5_t4_s3",
      "target": "fsw_root_p5_t4_s3_d1"
    },
    {
      "source": "fsw_root_p5_t4_s3",
      "target": "fsw_root_p5_t4_s3_d2"
    },
    {
      "source": "fsw_root_p5_t4",
      "target": "fsw_root_p5_t4_s4"
    },
    {
      "source": "fsw_root_p5_t4_s4",
      "target": "fsw_root_p5_t4_s4_d1"
    },
    {
      "source": "fsw_root_p5_t4_s4",
      "target": "fsw_root_p5_t4_s4_d2"
    },
    {
      "source": "fsw_root_p5_t4",
      "target": "fsw_root_p5_t4_s5"
    },
    {
      "source": "fsw_root_p5_t4_s5",
      "target": "fsw_root_p5_t4_s5_d1"
    },
    {
      "source": "fsw_root_p5_t4_s5",
      "target": "fsw_root_p5_t4_s5_d2"
    },
    {
      "source": "fsw_root_p5",
      "target": "fsw_root_p5_t5"
    },
    {
      "source": "fsw_root_p5_t5",
      "target": "fsw_root_p5_t5_s1"
    },
    {
      "source": "fsw_root_p5_t5_s1",
      "target": "fsw_root_p5_t5_s1_d1"
    },
    {
      "source": "fsw_root_p5_t5_s1",
      "target": "fsw_root_p5_t5_s1_d2"
    },
    {
      "source": "fsw_root_p5_t5",
      "target": "fsw_root_p5_t5_s2"
    },
    {
      "source": "fsw_root_p5_t5_s2",
      "target": "fsw_root_p5_t5_s2_d1"
    },
    {
      "source": "fsw_root_p5_t5_s2",
      "target": "fsw_root_p5_t5_s2_d2"
    },
    {
      "source": "fsw_root_p5_t5",
      "target": "fsw_root_p5_t5_s3"
    },
    {
      "source": "fsw_root_p5_t5_s3",
      "target": "fsw_root_p5_t5_s3_d1"
    },
    {
      "source": "fsw_root_p5_t5_s3",
      "target": "fsw_root_p5_t5_s3_d2"
    },
    {
      "source": "fsw_root_p5_t5",
      "target": "fsw_root_p5_t5_s4"
    },
    {
      "source": "fsw_root_p5_t5_s4",
      "target": "fsw_root_p5_t5_s4_d1"
    },
    {
      "source": "fsw_root_p5_t5_s4",
      "target": "fsw_root_p5_t5_s4_d2"
    },
    {
      "source": "fsw_root_p5_t5",
      "target": "fsw_root_p5_t5_s5"
    },
    {
      "source": "fsw_root_p5_t5_s5",
      "target": "fsw_root_p5_t5_s5_d1"
    },
    {
      "source": "fsw_root_p5_t5_s5",
      "target": "fsw_root_p5_t5_s5_d2"
    },
    {
      "source": "fsw_root_p5",
      "target": "fsw_root_p5_t6"
    },
    {
      "source": "fsw_root_p5_t6",
      "target": "fsw_root_p5_t6_s1"
    },
    {
      "source": "fsw_root_p5_t6_s1",
      "target": "fsw_root_p5_t6_s1_d1"
    },
    {
      "source": "fsw_root_p5_t6_s1",
      "target": "fsw_root_p5_t6_s1_d2"
    },
    {
      "source": "fsw_root_p5_t6",
      "target": "fsw_root_p5_t6_s2"
    },
    {
      "source": "fsw_root_p5_t6_s2",
      "target": "fsw_root_p5_t6_s2_d1"
    },
    {
      "source": "fsw_root_p5_t6_s2",
      "target": "fsw_root_p5_t6_s2_d2"
    },
    {
      "source": "fsw_root_p5_t6",
      "target": "fsw_root_p5_t6_s3"
    },
    {
      "source": "fsw_root_p5_t6_s3",
      "target": "fsw_root_p5_t6_s3_d1"
    },
    {
      "source": "fsw_root_p5_t6_s3",
      "target": "fsw_root_p5_t6_s3_d2"
    },
    {
      "source": "fsw_root_p5_t6",
      "target": "fsw_root_p5_t6_s4"
    },
    {
      "source": "fsw_root_p5_t6_s4",
      "target": "fsw_root_p5_t6_s4_d1"
    },
    {
      "source": "fsw_root_p5_t6_s4",
      "target": "fsw_root_p5_t6_s4_d2"
    },
    {
      "source": "fsw_root_p5_t6",
      "target": "fsw_root_p5_t6_s5"
    },
    {
      "source": "fsw_root_p5_t6_s5",
      "target": "fsw_root_p5_t6_s5_d1"
    },
    {
      "source": "fsw_root_p5_t6_s5",
      "target": "fsw_root_p5_t6_s5_d2"
    },
    {
      "source": "fsw_root",
      "target": "fsw_root_p6"
    },
    {
      "source": "fsw_root_p6",
      "target": "fsw_root_p6_t1"
    },
    {
      "source": "fsw_root_p6_t1",
      "target": "fsw_root_p6_t1_s1"
    },
    {
      "source": "fsw_root_p6_t1_s1",
      "target": "fsw_root_p6_t1_s1_d1"
    },
    {
      "source": "fsw_root_p6_t1_s1",
      "target": "fsw_root_p6_t1_s1_d2"
    },
    {
      "source": "fsw_root_p6_t1",
      "target": "fsw_root_p6_t1_s2"
    },
    {
      "source": "fsw_root_p6_t1_s2",
      "target": "fsw_root_p6_t1_s2_d1"
    },
    {
      "source": "fsw_root_p6_t1_s2",
      "target": "fsw_root_p6_t1_s2_d2"
    },
    {
      "source": "fsw_root_p6_t1",
      "target": "fsw_root_p6_t1_s3"
    },
    {
      "source": "fsw_root_p6_t1_s3",
      "target": "fsw_root_p6_t1_s3_d1"
    },
    {
      "source": "fsw_root_p6_t1_s3",
      "target": "fsw_root_p6_t1_s3_d2"
    },
    {
      "source": "fsw_root_p6_t1",
      "target": "fsw_root_p6_t1_s4"
    },
    {
      "source": "fsw_root_p6_t1_s4",
      "target": "fsw_root_p6_t1_s4_d1"
    },
    {
      "source": "fsw_root_p6_t1_s4",
      "target": "fsw_root_p6_t1_s4_d2"
    },
    {
      "source": "fsw_root_p6_t1",
      "target": "fsw_root_p6_t1_s5"
    },
    {
      "source": "fsw_root_p6_t1_s5",
      "target": "fsw_root_p6_t1_s5_d1"
    },
    {
      "source": "fsw_root_p6_t1_s5",
      "target": "fsw_root_p6_t1_s5_d2"
    },
    {
      "source": "fsw_root_p6",
      "target": "fsw_root_p6_t2"
    },
    {
      "source": "fsw_root_p6_t2",
      "target": "fsw_root_p6_t2_s1"
    },
    {
      "source": "fsw_root_p6_t2_s1",
      "target": "fsw_root_p6_t2_s1_d1"
    },
    {
      "source": "fsw_root_p6_t2_s1",
      "target": "fsw_root_p6_t2_s1_d2"
    },
    {
      "source": "fsw_root_p6_t2",
      "target": "fsw_root_p6_t2_s2"
    },
    {
      "source": "fsw_root_p6_t2_s2",
      "target": "fsw_root_p6_t2_s2_d1"
    },
    {
      "source": "fsw_root_p6_t2_s2",
      "target": "fsw_root_p6_t2_s2_d2"
    },
    {
      "source": "fsw_root_p6_t2",
      "target": "fsw_root_p6_t2_s3"
    },
    {
      "source": "fsw_root_p6_t2_s3",
      "target": "fsw_root_p6_t2_s3_d1"
    },
    {
      "source": "fsw_root_p6_t2_s3",
      "target": "fsw_root_p6_t2_s3_d2"
    },
    {
      "source": "fsw_root_p6_t2",
      "target": "fsw_root_p6_t2_s4"
    },
    {
      "source": "fsw_root_p6_t2_s4",
      "target": "fsw_root_p6_t2_s4_d1"
    },
    {
      "source": "fsw_root_p6_t2_s4",
      "target": "fsw_root_p6_t2_s4_d2"
    },
    {
      "source": "fsw_root_p6_t2",
      "target": "fsw_root_p6_t2_s5"
    },
    {
      "source": "fsw_root_p6_t2_s5",
      "target": "fsw_root_p6_t2_s5_d1"
    },
    {
      "source": "fsw_root_p6_t2_s5",
      "target": "fsw_root_p6_t2_s5_d2"
    },
    {
      "source": "fsw_root_p6",
      "target": "fsw_root_p6_t3"
    },
    {
      "source": "fsw_root_p6_t3",
      "target": "fsw_root_p6_t3_s1"
    },
    {
      "source": "fsw_root_p6_t3_s1",
      "target": "fsw_root_p6_t3_s1_d1"
    },
    {
      "source": "fsw_root_p6_t3_s1",
      "target": "fsw_root_p6_t3_s1_d2"
    },
    {
      "source": "fsw_root_p6_t3",
      "target": "fsw_root_p6_t3_s2"
    },
    {
      "source": "fsw_root_p6_t3_s2",
      "target": "fsw_root_p6_t3_s2_d1"
    },
    {
      "source": "fsw_root_p6_t3_s2",
      "target": "fsw_root_p6_t3_s2_d2"
    },
    {
      "source": "fsw_root_p6_t3",
      "target": "fsw_root_p6_t3_s3"
    },
    {
      "source": "fsw_root_p6_t3_s3",
      "target": "fsw_root_p6_t3_s3_d1"
    },
    {
      "source": "fsw_root_p6_t3_s3",
      "target": "fsw_root_p6_t3_s3_d2"
    },
    {
      "source": "fsw_root_p6_t3",
      "target": "fsw_root_p6_t3_s4"
    },
    {
      "source": "fsw_root_p6_t3_s4",
      "target": "fsw_root_p6_t3_s4_d1"
    },
    {
      "source": "fsw_root_p6_t3_s4",
      "target": "fsw_root_p6_t3_s4_d2"
    },
    {
      "source": "fsw_root_p6_t3",
      "target": "fsw_root_p6_t3_s5"
    },
    {
      "source": "fsw_root_p6_t3_s5",
      "target": "fsw_root_p6_t3_s5_d1"
    },
    {
      "source": "fsw_root_p6_t3_s5",
      "target": "fsw_root_p6_t3_s5_d2"
    },
    {
      "source": "fsw_root_p6",
      "target": "fsw_root_p6_t4"
    },
    {
      "source": "fsw_root_p6_t4",
      "target": "fsw_root_p6_t4_s1"
    },
    {
      "source": "fsw_root_p6_t4_s1",
      "target": "fsw_root_p6_t4_s1_d1"
    },
    {
      "source": "fsw_root_p6_t4_s1",
      "target": "fsw_root_p6_t4_s1_d2"
    },
    {
      "source": "fsw_root_p6_t4",
      "target": "fsw_root_p6_t4_s2"
    },
    {
      "source": "fsw_root_p6_t4_s2",
      "target": "fsw_root_p6_t4_s2_d1"
    },
    {
      "source": "fsw_root_p6_t4_s2",
      "target": "fsw_root_p6_t4_s2_d2"
    },
    {
      "source": "fsw_root_p6_t4",
      "target": "fsw_root_p6_t4_s3"
    },
    {
      "source": "fsw_root_p6_t4_s3",
      "target": "fsw_root_p6_t4_s3_d1"
    },
    {
      "source": "fsw_root_p6_t4_s3",
      "target": "fsw_root_p6_t4_s3_d2"
    },
    {
      "source": "fsw_root_p6_t4",
      "target": "fsw_root_p6_t4_s4"
    },
    {
      "source": "fsw_root_p6_t4_s4",
      "target": "fsw_root_p6_t4_s4_d1"
    },
    {
      "source": "fsw_root_p6_t4_s4",
      "target": "fsw_root_p6_t4_s4_d2"
    },
    {
      "source": "fsw_root_p6_t4",
      "target": "fsw_root_p6_t4_s5"
    },
    {
      "source": "fsw_root_p6_t4_s5",
      "target": "fsw_root_p6_t4_s5_d1"
    },
    {
      "source": "fsw_root_p6_t4_s5",
      "target": "fsw_root_p6_t4_s5_d2"
    },
    {
      "source": "fsw_root_p6",
      "target": "fsw_root_p6_t5"
    },
    {
      "source": "fsw_root_p6_t5",
      "target": "fsw_root_p6_t5_s1"
    },
    {
      "source": "fsw_root_p6_t5_s1",
      "target": "fsw_root_p6_t5_s1_d1"
    },
    {
      "source": "fsw_root_p6_t5_s1",
      "target": "fsw_root_p6_t5_s1_d2"
    },
    {
      "source": "fsw_root_p6_t5",
      "target": "fsw_root_p6_t5_s2"
    },
    {
      "source": "fsw_root_p6_t5_s2",
      "target": "fsw_root_p6_t5_s2_d1"
    },
    {
      "source": "fsw_root_p6_t5_s2",
      "target": "fsw_root_p6_t5_s2_d2"
    },
    {
      "source": "fsw_root_p6_t5",
      "target": "fsw_root_p6_t5_s3"
    },
    {
      "source": "fsw_root_p6_t5_s3",
      "target": "fsw_root_p6_t5_s3_d1"
    },
    {
      "source": "fsw_root_p6_t5_s3",
      "target": "fsw_root_p6_t5_s3_d2"
    },
    {
      "source": "fsw_root_p6_t5",
      "target": "fsw_root_p6_t5_s4"
    },
    {
      "source": "fsw_root_p6_t5_s4",
      "target": "fsw_root_p6_t5_s4_d1"
    },
    {
      "source": "fsw_root_p6_t5_s4",
      "target": "fsw_root_p6_t5_s4_d2"
    },
    {
      "source": "fsw_root_p6_t5",
      "target": "fsw_root_p6_t5_s5"
    },
    {
      "source": "fsw_root_p6_t5_s5",
      "target": "fsw_root_p6_t5_s5_d1"
    },
    {
      "source": "fsw_root_p6_t5_s5",
      "target": "fsw_root_p6_t5_s5_d2"
    },
    {
      "source": "fsw_root_p6",
      "target": "fsw_root_p6_t6"
    },
    {
      "source": "fsw_root_p6_t6",
      "target": "fsw_root_p6_t6_s1"
    },
    {
      "source": "fsw_root_p6_t6_s1",
      "target": "fsw_root_p6_t6_s1_d1"
    },
    {
      "source": "fsw_root_p6_t6_s1",
      "target": "fsw_root_p6_t6_s1_d2"
    },
    {
      "source": "fsw_root_p6_t6",
      "target": "fsw_root_p6_t6_s2"
    },
    {
      "source": "fsw_root_p6_t6_s2",
      "target": "fsw_root_p6_t6_s2_d1"
    },
    {
      "source": "fsw_root_p6_t6_s2",
      "target": "fsw_root_p6_t6_s2_d2"
    },
    {
      "source": "fsw_root_p6_t6",
      "target": "fsw_root_p6_t6_s3"
    },
    {
      "source": "fsw_root_p6_t6_s3",
      "target": "fsw_root_p6_t6_s3_d1"
    },
    {
      "source": "fsw_root_p6_t6_s3",
      "target": "fsw_root_p6_t6_s3_d2"
    },
    {
      "source": "fsw_root_p6_t6",
      "target": "fsw_root_p6_t6_s4"
    },
    {
      "source": "fsw_root_p6_t6_s4",
      "target": "fsw_root_p6_t6_s4_d1"
    },
    {
      "source": "fsw_root_p6_t6_s4",
      "target": "fsw_root_p6_t6_s4_d2"
    },
    {
      "source": "fsw_root_p6_t6",
      "target": "fsw_root_p6_t6_s5"
    },
    {
      "source": "fsw_root_p6_t6_s5",
      "target": "fsw_root_p6_t6_s5_d1"
    },
    {
      "source": "fsw_root_p6_t6_s5",
      "target": "fsw_root_p6_t6_s5_d2"
    },
    {
      "source": "fsw_root",
      "target": "fsw_root_p7"
    },
    {
      "source": "fsw_root_p7",
      "target": "fsw_root_p7_t1"
    },
    {
      "source": "fsw_root_p7_t1",
      "target": "fsw_root_p7_t1_s1"
    },
    {
      "source": "fsw_root_p7_t1_s1",
      "target": "fsw_root_p7_t1_s1_d1"
    },
    {
      "source": "fsw_root_p7_t1_s1",
      "target": "fsw_root_p7_t1_s1_d2"
    },
    {
      "source": "fsw_root_p7_t1",
      "target": "fsw_root_p7_t1_s2"
    },
    {
      "source": "fsw_root_p7_t1_s2",
      "target": "fsw_root_p7_t1_s2_d1"
    },
    {
      "source": "fsw_root_p7_t1_s2",
      "target": "fsw_root_p7_t1_s2_d2"
    },
    {
      "source": "fsw_root_p7_t1",
      "target": "fsw_root_p7_t1_s3"
    },
    {
      "source": "fsw_root_p7_t1_s3",
      "target": "fsw_root_p7_t1_s3_d1"
    },
    {
      "source": "fsw_root_p7_t1_s3",
      "target": "fsw_root_p7_t1_s3_d2"
    },
    {
      "source": "fsw_root_p7_t1",
      "target": "fsw_root_p7_t1_s4"
    },
    {
      "source": "fsw_root_p7_t1_s4",
      "target": "fsw_root_p7_t1_s4_d1"
    },
    {
      "source": "fsw_root_p7_t1_s4",
      "target": "fsw_root_p7_t1_s4_d2"
    },
    {
      "source": "fsw_root_p7_t1",
      "target": "fsw_root_p7_t1_s5"
    },
    {
      "source": "fsw_root_p7_t1_s5",
      "target": "fsw_root_p7_t1_s5_d1"
    },
    {
      "source": "fsw_root_p7_t1_s5",
      "target": "fsw_root_p7_t1_s5_d2"
    },
    {
      "source": "fsw_root_p7",
      "target": "fsw_root_p7_t2"
    },
    {
      "source": "fsw_root_p7_t2",
      "target": "fsw_root_p7_t2_s1"
    },
    {
      "source": "fsw_root_p7_t2_s1",
      "target": "fsw_root_p7_t2_s1_d1"
    },
    {
      "source": "fsw_root_p7_t2_s1",
      "target": "fsw_root_p7_t2_s1_d2"
    },
    {
      "source": "fsw_root_p7_t2",
      "target": "fsw_root_p7_t2_s2"
    },
    {
      "source": "fsw_root_p7_t2_s2",
      "target": "fsw_root_p7_t2_s2_d1"
    },
    {
      "source": "fsw_root_p7_t2_s2",
      "target": "fsw_root_p7_t2_s2_d2"
    },
    {
      "source": "fsw_root_p7_t2",
      "target": "fsw_root_p7_t2_s3"
    },
    {
      "source": "fsw_root_p7_t2_s3",
      "target": "fsw_root_p7_t2_s3_d1"
    },
    {
      "source": "fsw_root_p7_t2_s3",
      "target": "fsw_root_p7_t2_s3_d2"
    },
    {
      "source": "fsw_root_p7_t2",
      "target": "fsw_root_p7_t2_s4"
    },
    {
      "source": "fsw_root_p7_t2_s4",
      "target": "fsw_root_p7_t2_s4_d1"
    },
    {
      "source": "fsw_root_p7_t2_s4",
      "target": "fsw_root_p7_t2_s4_d2"
    },
    {
      "source": "fsw_root_p7_t2",
      "target": "fsw_root_p7_t2_s5"
    },
    {
      "source": "fsw_root_p7_t2_s5",
      "target": "fsw_root_p7_t2_s5_d1"
    },
    {
      "source": "fsw_root_p7_t2_s5",
      "target": "fsw_root_p7_t2_s5_d2"
    },
    {
      "source": "fsw_root_p7",
      "target": "fsw_root_p7_t3"
    },
    {
      "source": "fsw_root_p7_t3",
      "target": "fsw_root_p7_t3_s1"
    },
    {
      "source": "fsw_root_p7_t3_s1",
      "target": "fsw_root_p7_t3_s1_d1"
    },
    {
      "source": "fsw_root_p7_t3_s1",
      "target": "fsw_root_p7_t3_s1_d2"
    },
    {
      "source": "fsw_root_p7_t3",
      "target": "fsw_root_p7_t3_s2"
    },
    {
      "source": "fsw_root_p7_t3_s2",
      "target": "fsw_root_p7_t3_s2_d1"
    },
    {
      "source": "fsw_root_p7_t3_s2",
      "target": "fsw_root_p7_t3_s2_d2"
    },
    {
      "source": "fsw_root_p7_t3",
      "target": "fsw_root_p7_t3_s3"
    },
    {
      "source": "fsw_root_p7_t3_s3",
      "target": "fsw_root_p7_t3_s3_d1"
    },
    {
      "source": "fsw_root_p7_t3_s3",
      "target": "fsw_root_p7_t3_s3_d2"
    },
    {
      "source": "fsw_root_p7_t3",
      "target": "fsw_root_p7_t3_s4"
    },
    {
      "source": "fsw_root_p7_t3_s4",
      "target": "fsw_root_p7_t3_s4_d1"
    },
    {
      "source": "fsw_root_p7_t3_s4",
      "target": "fsw_root_p7_t3_s4_d2"
    },
    {
      "source": "fsw_root_p7_t3",
      "target": "fsw_root_p7_t3_s5"
    },
    {
      "source": "fsw_root_p7_t3_s5",
      "target": "fsw_root_p7_t3_s5_d1"
    },
    {
      "source": "fsw_root_p7_t3_s5",
      "target": "fsw_root_p7_t3_s5_d2"
    },
    {
      "source": "fsw_root_p7",
      "target": "fsw_root_p7_t4"
    },
    {
      "source": "fsw_root_p7_t4",
      "target": "fsw_root_p7_t4_s1"
    },
    {
      "source": "fsw_root_p7_t4_s1",
      "target": "fsw_root_p7_t4_s1_d1"
    },
    {
      "source": "fsw_root_p7_t4_s1",
      "target": "fsw_root_p7_t4_s1_d2"
    },
    {
      "source": "fsw_root_p7_t4",
      "target": "fsw_root_p7_t4_s2"
    },
    {
      "source": "fsw_root_p7_t4_s2",
      "target": "fsw_root_p7_t4_s2_d1"
    },
    {
      "source": "fsw_root_p7_t4_s2",
      "target": "fsw_root_p7_t4_s2_d2"
    },
    {
      "source": "fsw_root_p7_t4",
      "target": "fsw_root_p7_t4_s3"
    },
    {
      "source": "fsw_root_p7_t4_s3",
      "target": "fsw_root_p7_t4_s3_d1"
    },
    {
      "source": "fsw_root_p7_t4_s3",
      "target": "fsw_root_p7_t4_s3_d2"
    },
    {
      "source": "fsw_root_p7_t4",
      "target": "fsw_root_p7_t4_s4"
    },
    {
      "source": "fsw_root_p7_t4_s4",
      "target": "fsw_root_p7_t4_s4_d1"
    },
    {
      "source": "fsw_root_p7_t4_s4",
      "target": "fsw_root_p7_t4_s4_d2"
    },
    {
      "source": "fsw_root_p7_t4",
      "target": "fsw_root_p7_t4_s5"
    },
    {
      "source": "fsw_root_p7_t4_s5",
      "target": "fsw_root_p7_t4_s5_d1"
    },
    {
      "source": "fsw_root_p7_t4_s5",
      "target": "fsw_root_p7_t4_s5_d2"
    },
    {
      "source": "fsw_root_p7",
      "target": "fsw_root_p7_t5"
    },
    {
      "source": "fsw_root_p7_t5",
      "target": "fsw_root_p7_t5_s1"
    },
    {
      "source": "fsw_root_p7_t5_s1",
      "target": "fsw_root_p7_t5_s1_d1"
    },
    {
      "source": "fsw_root_p7_t5_s1",
      "target": "fsw_root_p7_t5_s1_d2"
    },
    {
      "source": "fsw_root_p7_t5",
      "target": "fsw_root_p7_t5_s2"
    },
    {
      "source": "fsw_root_p7_t5_s2",
      "target": "fsw_root_p7_t5_s2_d1"
    },
    {
      "source": "fsw_root_p7_t5_s2",
      "target": "fsw_root_p7_t5_s2_d2"
    },
    {
      "source": "fsw_root_p7_t5",
      "target": "fsw_root_p7_t5_s3"
    },
    {
      "source": "fsw_root_p7_t5_s3",
      "target": "fsw_root_p7_t5_s3_d1"
    },
    {
      "source": "fsw_root_p7_t5_s3",
      "target": "fsw_root_p7_t5_s3_d2"
    },
    {
      "source": "fsw_root_p7_t5",
      "target": "fsw_root_p7_t5_s4"
    },
    {
      "source": "fsw_root_p7_t5_s4",
      "target": "fsw_root_p7_t5_s4_d1"
    },
    {
      "source": "fsw_root_p7_t5_s4",
      "target": "fsw_root_p7_t5_s4_d2"
    },
    {
      "source": "fsw_root_p7_t5",
      "target": "fsw_root_p7_t5_s5"
    },
    {
      "source": "fsw_root_p7_t5_s5",
      "target": "fsw_root_p7_t5_s5_d1"
    },
    {
      "source": "fsw_root_p7_t5_s5",
      "target": "fsw_root_p7_t5_s5_d2"
    },
    {
      "source": "fsw_root_p7",
      "target": "fsw_root_p7_t6"
    },
    {
      "source": "fsw_root_p7_t6",
      "target": "fsw_root_p7_t6_s1"
    },
    {
      "source": "fsw_root_p7_t6_s1",
      "target": "fsw_root_p7_t6_s1_d1"
    },
    {
      "source": "fsw_root_p7_t6_s1",
      "target": "fsw_root_p7_t6_s1_d2"
    },
    {
      "source": "fsw_root_p7_t6",
      "target": "fsw_root_p7_t6_s2"
    },
    {
      "source": "fsw_root_p7_t6_s2",
      "target": "fsw_root_p7_t6_s2_d1"
    },
    {
      "source": "fsw_root_p7_t6_s2",
      "target": "fsw_root_p7_t6_s2_d2"
    },
    {
      "source": "fsw_root_p7_t6",
      "target": "fsw_root_p7_t6_s3"
    },
    {
      "source": "fsw_root_p7_t6_s3",
      "target": "fsw_root_p7_t6_s3_d1"
    },
    {
      "source": "fsw_root_p7_t6_s3",
      "target": "fsw_root_p7_t6_s3_d2"
    },
    {
      "source": "fsw_root_p7_t6",
      "target": "fsw_root_p7_t6_s4"
    },
    {
      "source": "fsw_root_p7_t6_s4",
      "target": "fsw_root_p7_t6_s4_d1"
    },
    {
      "source": "fsw_root_p7_t6_s4",
      "target": "fsw_root_p7_t6_s4_d2"
    },
    {
      "source": "fsw_root_p7_t6",
      "target": "fsw_root_p7_t6_s5"
    },
    {
      "source": "fsw_root_p7_t6_s5",
      "target": "fsw_root_p7_t6_s5_d1"
    },
    {
      "source": "fsw_root_p7_t6_s5",
      "target": "fsw_root_p7_t6_s5_d2"
    },
    {
      "source": "fsw_root",
      "target": "fsw_root_p8"
    },
    {
      "source": "fsw_root_p8",
      "target": "fsw_root_p8_t1"
    },
    {
      "source": "fsw_root_p8_t1",
      "target": "fsw_root_p8_t1_s1"
    },
    {
      "source": "fsw_root_p8_t1_s1",
      "target": "fsw_root_p8_t1_s1_d1"
    },
    {
      "source": "fsw_root_p8_t1_s1",
      "target": "fsw_root_p8_t1_s1_d2"
    },
    {
      "source": "fsw_root_p8_t1",
      "target": "fsw_root_p8_t1_s2"
    },
    {
      "source": "fsw_root_p8_t1_s2",
      "target": "fsw_root_p8_t1_s2_d1"
    },
    {
      "source": "fsw_root_p8_t1_s2",
      "target": "fsw_root_p8_t1_s2_d2"
    },
    {
      "source": "fsw_root_p8_t1",
      "target": "fsw_root_p8_t1_s3"
    },
    {
      "source": "fsw_root_p8_t1_s3",
      "target": "fsw_root_p8_t1_s3_d1"
    },
    {
      "source": "fsw_root_p8_t1_s3",
      "target": "fsw_root_p8_t1_s3_d2"
    },
    {
      "source": "fsw_root_p8_t1",
      "target": "fsw_root_p8_t1_s4"
    },
    {
      "source": "fsw_root_p8_t1_s4",
      "target": "fsw_root_p8_t1_s4_d1"
    },
    {
      "source": "fsw_root_p8_t1_s4",
      "target": "fsw_root_p8_t1_s4_d2"
    },
    {
      "source": "fsw_root_p8_t1",
      "target": "fsw_root_p8_t1_s5"
    },
    {
      "source": "fsw_root_p8_t1_s5",
      "target": "fsw_root_p8_t1_s5_d1"
    },
    {
      "source": "fsw_root_p8_t1_s5",
      "target": "fsw_root_p8_t1_s5_d2"
    },
    {
      "source": "fsw_root_p8",
      "target": "fsw_root_p8_t2"
    },
    {
      "source": "fsw_root_p8_t2",
      "target": "fsw_root_p8_t2_s1"
    },
    {
      "source": "fsw_root_p8_t2_s1",
      "target": "fsw_root_p8_t2_s1_d1"
    },
    {
      "source": "fsw_root_p8_t2_s1",
      "target": "fsw_root_p8_t2_s1_d2"
    },
    {
      "source": "fsw_root_p8_t2",
      "target": "fsw_root_p8_t2_s2"
    },
    {
      "source": "fsw_root_p8_t2_s2",
      "target": "fsw_root_p8_t2_s2_d1"
    },
    {
      "source": "fsw_root_p8_t2_s2",
      "target": "fsw_root_p8_t2_s2_d2"
    },
    {
      "source": "fsw_root_p8_t2",
      "target": "fsw_root_p8_t2_s3"
    },
    {
      "source": "fsw_root_p8_t2_s3",
      "target": "fsw_root_p8_t2_s3_d1"
    },
    {
      "source": "fsw_root_p8_t2_s3",
      "target": "fsw_root_p8_t2_s3_d2"
    },
    {
      "source": "fsw_root_p8_t2",
      "target": "fsw_root_p8_t2_s4"
    },
    {
      "source": "fsw_root_p8_t2_s4",
      "target": "fsw_root_p8_t2_s4_d1"
    },
    {
      "source": "fsw_root_p8_t2_s4",
      "target": "fsw_root_p8_t2_s4_d2"
    },
    {
      "source": "fsw_root_p8_t2",
      "target": "fsw_root_p8_t2_s5"
    },
    {
      "source": "fsw_root_p8_t2_s5",
      "target": "fsw_root_p8_t2_s5_d1"
    },
    {
      "source": "fsw_root_p8_t2_s5",
      "target": "fsw_root_p8_t2_s5_d2"
    },
    {
      "source": "fsw_root_p8",
      "target": "fsw_root_p8_t3"
    },
    {
      "source": "fsw_root_p8_t3",
      "target": "fsw_root_p8_t3_s1"
    },
    {
      "source": "fsw_root_p8_t3_s1",
      "target": "fsw_root_p8_t3_s1_d1"
    },
    {
      "source": "fsw_root_p8_t3_s1",
      "target": "fsw_root_p8_t3_s1_d2"
    },
    {
      "source": "fsw_root_p8_t3",
      "target": "fsw_root_p8_t3_s2"
    },
    {
      "source": "fsw_root_p8_t3_s2",
      "target": "fsw_root_p8_t3_s2_d1"
    },
    {
      "source": "fsw_root_p8_t3_s2",
      "target": "fsw_root_p8_t3_s2_d2"
    },
    {
      "source": "fsw_root_p8_t3",
      "target": "fsw_root_p8_t3_s3"
    },
    {
      "source": "fsw_root_p8_t3_s3",
      "target": "fsw_root_p8_t3_s3_d1"
    },
    {
      "source": "fsw_root_p8_t3_s3",
      "target": "fsw_root_p8_t3_s3_d2"
    },
    {
      "source": "fsw_root_p8_t3",
      "target": "fsw_root_p8_t3_s4"
    },
    {
      "source": "fsw_root_p8_t3_s4",
      "target": "fsw_root_p8_t3_s4_d1"
    },
    {
      "source": "fsw_root_p8_t3_s4",
      "target": "fsw_root_p8_t3_s4_d2"
    },
    {
      "source": "fsw_root_p8_t3",
      "target": "fsw_root_p8_t3_s5"
    },
    {
      "source": "fsw_root_p8_t3_s5",
      "target": "fsw_root_p8_t3_s5_d1"
    },
    {
      "source": "fsw_root_p8_t3_s5",
      "target": "fsw_root_p8_t3_s5_d2"
    },
    {
      "source": "fsw_root_p8",
      "target": "fsw_root_p8_t4"
    },
    {
      "source": "fsw_root_p8_t4",
      "target": "fsw_root_p8_t4_s1"
    },
    {
      "source": "fsw_root_p8_t4_s1",
      "target": "fsw_root_p8_t4_s1_d1"
    },
    {
      "source": "fsw_root_p8_t4_s1",
      "target": "fsw_root_p8_t4_s1_d2"
    },
    {
      "source": "fsw_root_p8_t4",
      "target": "fsw_root_p8_t4_s2"
    },
    {
      "source": "fsw_root_p8_t4_s2",
      "target": "fsw_root_p8_t4_s2_d1"
    },
    {
      "source": "fsw_root_p8_t4_s2",
      "target": "fsw_root_p8_t4_s2_d2"
    },
    {
      "source": "fsw_root_p8_t4",
      "target": "fsw_root_p8_t4_s3"
    },
    {
      "source": "fsw_root_p8_t4_s3",
      "target": "fsw_root_p8_t4_s3_d1"
    },
    {
      "source": "fsw_root_p8_t4_s3",
      "target": "fsw_root_p8_t4_s3_d2"
    },
    {
      "source": "fsw_root_p8_t4",
      "target": "fsw_root_p8_t4_s4"
    },
    {
      "source": "fsw_root_p8_t4_s4",
      "target": "fsw_root_p8_t4_s4_d1"
    },
    {
      "source": "fsw_root_p8_t4_s4",
      "target": "fsw_root_p8_t4_s4_d2"
    },
    {
      "source": "fsw_root_p8_t4",
      "target": "fsw_root_p8_t4_s5"
    },
    {
      "source": "fsw_root_p8_t4_s5",
      "target": "fsw_root_p8_t4_s5_d1"
    },
    {
      "source": "fsw_root_p8_t4_s5",
      "target": "fsw_root_p8_t4_s5_d2"
    },
    {
      "source": "fsw_root_p8",
      "target": "fsw_root_p8_t5"
    },
    {
      "source": "fsw_root_p8_t5",
      "target": "fsw_root_p8_t5_s1"
    },
    {
      "source": "fsw_root_p8_t5_s1",
      "target": "fsw_root_p8_t5_s1_d1"
    },
    {
      "source": "fsw_root_p8_t5_s1",
      "target": "fsw_root_p8_t5_s1_d2"
    },
    {
      "source": "fsw_root_p8_t5",
      "target": "fsw_root_p8_t5_s2"
    },
    {
      "source": "fsw_root_p8_t5_s2",
      "target": "fsw_root_p8_t5_s2_d1"
    },
    {
      "source": "fsw_root_p8_t5_s2",
      "target": "fsw_root_p8_t5_s2_d2"
    },
    {
      "source": "fsw_root_p8_t5",
      "target": "fsw_root_p8_t5_s3"
    },
    {
      "source": "fsw_root_p8_t5_s3",
      "target": "fsw_root_p8_t5_s3_d1"
    },
    {
      "source": "fsw_root_p8_t5_s3",
      "target": "fsw_root_p8_t5_s3_d2"
    },
    {
      "source": "fsw_root_p8_t5",
      "target": "fsw_root_p8_t5_s4"
    },
    {
      "source": "fsw_root_p8_t5_s4",
      "target": "fsw_root_p8_t5_s4_d1"
    },
    {
      "source": "fsw_root_p8_t5_s4",
      "target": "fsw_root_p8_t5_s4_d2"
    },
    {
      "source": "fsw_root_p8_t5",
      "target": "fsw_root_p8_t5_s5"
    },
    {
      "source": "fsw_root_p8_t5_s5",
      "target": "fsw_root_p8_t5_s5_d1"
    },
    {
      "source": "fsw_root_p8_t5_s5",
      "target": "fsw_root_p8_t5_s5_d2"
    },
    {
      "source": "fsw_root_p8",
      "target": "fsw_root_p8_t6"
    },
    {
      "source": "fsw_root_p8_t6",
      "target": "fsw_root_p8_t6_s1"
    },
    {
      "source": "fsw_root_p8_t6_s1",
      "target": "fsw_root_p8_t6_s1_d1"
    },
    {
      "source": "fsw_root_p8_t6_s1",
      "target": "fsw_root_p8_t6_s1_d2"
    },
    {
      "source": "fsw_root_p8_t6",
      "target": "fsw_root_p8_t6_s2"
    },
    {
      "source": "fsw_root_p8_t6_s2",
      "target": "fsw_root_p8_t6_s2_d1"
    },
    {
      "source": "fsw_root_p8_t6_s2",
      "target": "fsw_root_p8_t6_s2_d2"
    },
    {
      "source": "fsw_root_p8_t6",
      "target": "fsw_root_p8_t6_s3"
    },
    {
      "source": "fsw_root_p8_t6_s3",
      "target": "fsw_root_p8_t6_s3_d1"
    },
    {
      "source": "fsw_root_p8_t6_s3",
      "target": "fsw_root_p8_t6_s3_d2"
    },
    {
      "source": "fsw_root_p8_t6",
      "target": "fsw_root_p8_t6_s4"
    },
    {
      "source": "fsw_root_p8_t6_s4",
      "target": "fsw_root_p8_t6_s4_d1"
    },
    {
      "source": "fsw_root_p8_t6_s4",
      "target": "fsw_root_p8_t6_s4_d2"
    },
    {
      "source": "fsw_root_p8_t6",
      "target": "fsw_root_p8_t6_s5"
    },
    {
      "source": "fsw_root_p8_t6_s5",
      "target": "fsw_root_p8_t6_s5_d1"
    },
    {
      "source": "fsw_root_p8_t6_s5",
      "target": "fsw_root_p8_t6_s5_d2"
    }
  ]
};
