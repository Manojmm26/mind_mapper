import { MindMapData } from "../../services/llmService";

export const FULLSTACK_WEB_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "fsw_root",
      "label": "Full-Stack Web Development from First Principles",
      "description": "Comprehensive architectural mind map spanning browser engines, HTML/CSS, JS/TS mechanics, React 19, Node.js, Web Security, and Performance.",
      "type": "topic"
    },
    {
      "id": "fsw_root_p1",
      "label": "Browser Internals & Rendering Pipeline",
      "description": "HTML parsing, DOM construction, CSSOM, Render Tree, Layout, Paint, Compositing, V8 JIT, and Event Loop microtasks.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1",
      "label": "HTML Parsing & DOM Construction",
      "description": "Tokenizer state machine converting HTML byte streams into DOM node trees, handling parser-blocking scripts.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s1",
      "label": "HTML5 Tokenization Machine",
      "description": "Transitions through Data, TagOpen, and TagName states to generate StartTag, EndTag, and Character tokens.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s1_d1",
      "label": "Speculative Pre-parser Scanner",
      "description": "Scans ahead for external resources (CSS, JS, images) while main parser is blocked by synchronous scripts.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s1_d2",
      "label": "DOM Node Tree Hierarchy",
      "description": "Constructs Document -> Element -> Text node tree in memory, firing DOMContentLoaded when completed.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s2",
      "label": "Parser-Blocking vs Async/Defer Scripts",
      "description": "Standard script tags halt HTML parsing until fetched; async fetches asynchronously and executes immediately.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s2_d1",
      "label": "Defer Script Execution Timing",
      "description": "Fetches in background and executes in document order right after HTML parsing completes before DOMContentLoaded.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s2_d2",
      "label": "Module Script Default Defer Behavior",
      "description": "type='module' scripts automatically default to deferred execution and strict mode scope.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s3",
      "label": "CSSOM Tree Construction",
      "description": "Parses CSS rules into CSS Object Model tree; render-blocking by default to prevent Flash of Unstyled Content (FOUC).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s3_d1",
      "label": "Cascade Origin & Specificity Resolution",
      "description": "Computes final values per element by resolving User Agent, Author, and Override layer rules.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s3_d2",
      "label": "@import Cascading Render Penalty",
      "description": "@import directives force sequential CSS fetching, creating waterfall bottlenecks in the rendering path.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s4",
      "label": "Render Tree & Display Tree",
      "description": "Combines DOM and CSSOM trees; filters out non-rendered elements (display: none, head) and computes layout styles.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s4_d1",
      "label": "Visibility Hidden vs Display None",
      "description": "visibility: hidden retains layout space in Render Tree; display: none completely removes node from tree.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s4_d2",
      "label": "Pseudo-element Render Injection",
      "description": "::before and ::after pseudo-elements are instantiated directly into the Render Tree as child nodes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s5",
      "label": "Document Object Model API Access",
      "description": "Exposes DOM C++ nodes to JS runtime via bindings, incurring IPC/boundary crossing overhead during heavy mutations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s5_d1",
      "label": "DocumentFragment Batch Insertion",
      "description": "Renders nodes off-screen in DocumentFragment before single DOM insertion, reducing layout reflow triggers.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t1_s5_d2",
      "label": "MutationObserver Async Tracking",
      "description": "Observes DOM subtree modifications asynchronously using microtask queue batching for performance.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2",
      "label": "Layout, Reflow & Compositing",
      "description": "Calculating geometry box models, paint invalidation rects, GPU layer promotion, and smooth 60fps rendering.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s1",
      "label": "Layout Geometry (Reflow)",
      "description": "Calculates exact pixel coordinates and box dimensions (width, height, top, left) for all visible Render Tree nodes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s1_d1",
      "label": "Forced Synchronous Layout Thrashing",
      "description": "Interleaving DOM writes and reads (element.offsetWidth) forces browser to recompute layout synchronously in JS thread.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s1_d2",
      "label": "CSS Containment Optimization",
      "description": "contain: layout size isolates element subtree, preventing child mutations from triggering global page reflows.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s2",
      "label": "Paint Invalidation & Rasterization",
      "description": "Converts Render Tree nodes into drawing instructions (draw rect, fill text) and rasterizes pixels into bitmap tiles.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s2_d1",
      "label": "Paint Record Command Generation",
      "description": "Generates ordered sequence of Skia/Direct2D draw calls before actual pixel rasterization begins.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s2_d2",
      "label": "GPU Tile Rasterization Threads",
      "description": "Raster worker threads turn paint records into GPU textures organized in 256x256 pixel viewport tiles.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s3",
      "label": "Layer Promotion & Compositing",
      "description": "Promotes elements (will-change, 3D transforms) to separate GPU compositor layers, enabling hardware-accelerated transforms.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s3_d1",
      "label": "Implicit Compositing & Memory Bloat",
      "description": "Over-promoting layers creates composite layer overlap cascades, consuming excessive VRAM on mobile devices.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s3_d2",
      "label": "Compositor Thread vs Main Thread",
      "description": "Compositor thread handles scroll and transform animations smoothly even if main JS thread is frozen.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s4",
      "label": "CSS Box Model & Sizing Constraints",
      "description": "Calculates content, padding, border, and margin bounds; box-sizing: border-box includes padding/border in width.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s4_d1",
      "label": "Margin Collapsing Rules",
      "description": "Adjoining vertical margins collapse into single margin equal to maximum of individual margin values.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s4_d2",
      "label": "Intrinsic Sizing (min-content / max-content)",
      "description": "Calculates element dimensions based on content text wrapping limits before applying explicit CSS rules.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s5",
      "label": "ResizeObserver & IntersectionObserver",
      "description": "Efficient browser APIs monitoring element dimension changes and viewport visibility without main-thread scroll listeners.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s5_d1",
      "label": "Lazy Loading with IntersectionObserver",
      "description": "Triggers image/component loading only when target element crosses viewport threshold percentage.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t2_s5_d2",
      "label": "Container Query Engine Integration",
      "description": "ResizeObserver underpins modern container query implementations, measuring component parent bounds.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3",
      "label": "V8 JavaScript Engine & JIT Pipeline",
      "description": "Ignition interpreter, TurboFan optimizing compiler, Inline Caches, Hidden Classes, and Garbage Collection.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s1",
      "label": "Ignition Bytecode Interpreter",
      "description": "Parses JS source code into AST, then compiles into compact Ignition bytecode for fast startup execution.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s1_d1",
      "label": "AST Generation & Memory Footprint",
      "description": "Abstract Syntax Tree parsed directly from stream, discarded after bytecode generation to save memory.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s1_d2",
      "label": "Type Feedback Vector Collection",
      "description": "Ignition records runtime operand types in Feedback Vectors at each bytecode instruction (IC slots).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s2",
      "label": "TurboFan Optimizing JIT Compiler",
      "description": "Compiles hot bytecode functions into optimized machine code using Type Feedback collected by Ignition.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s2_d1",
      "label": "Speculative Optimization & Inlining",
      "description": "Inlines function calls and removes type checks assuming observed types remain constant.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s2_d2",
      "label": "Deoptimization (Bailout to Ignition)",
      "description": "If runtime type assumption is violated, TurboFan deoptimizes code, reverting execution back to Ignition.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s3",
      "label": "Hidden Classes (Shapes / Maps)",
      "description": "V8 assigns internal Hidden Class (Map) to objects with identical property layouts for fast property offset lookups.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s3_d1",
      "label": "Property Initialization Order Impact",
      "description": "Initializing object properties in different orders creates distinct Hidden Classes, degrading performance.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s3_d2",
      "label": "Transition Trees & Fast Properties",
      "description": "Adding new property creates transition from old Map to new Map in shared global V8 transition tree.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s4",
      "label": "Inline Caching (Monomorphic vs Megamorphic)",
      "description": "Caches property offset lookups directly at call sites; Monomorphic (1 shape) is fastest, Megamorphic (>4 shapes) falls back.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s4_d1",
      "label": "Polymorphic Call Site Optimization",
      "description": "Handles 2-4 distinct shapes using fast conditional jump table before falling back to hash table lookup.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s4_d2",
      "label": "Megamorphic Stub Search Penalty",
      "description": "Call sites seeing >4 object shapes fall back to global megamorphic stub search, slowing property access.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s5",
      "label": "V8 Garbage Collector (Orinoco)",
      "description": "Generational GC with Scavenger for Young Generation (Cheney's copying) and Mark-Sweep-Compact for Old Generation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s5_d1",
      "label": "Scavenger Nursery Copying GC",
      "description": "Copies live objects between From-Space and To-Space, promoting surviving objects to Old Generation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t3_s5_d2",
      "label": "Concurrent & Incremental Marking",
      "description": "Marks live objects concurrently on background threads, keeping main thread GC pause under 1 millisecond.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4",
      "label": "Event Loop & Asynchronous Tasks",
      "description": "Call stack, Macrotask queue, Microtask queue, animation frame callbacks, and event loop turn phases.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s1",
      "label": "Call Stack & Execution Context",
      "description": "Single-threaded LIFO stack tracking execution contexts, global scope, function frames, and lexical environments.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s1_d1",
      "label": "Stack Overflow & Maximum Call Stack Size",
      "description": "Unbounded recursive function calls exceed maximum call stack limit, throwing RangeError.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s1_d2",
      "label": "Lexical Environment Scope Chains",
      "description": "Outer environment references resolve variables along static lexical scope hierarchy during execution.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s2",
      "label": "Microtask Queue (Promises & MutationObserver)",
      "description": "High-priority queue executed to exhaustion after current stack frame finishes before next macrotask or render phase.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s2_d1",
      "label": "Promise Resolution Microtask Enqueue",
      "description": "Promise.then(), queueMicrotask(), and async/await resume callbacks execute strictly in microtask phase.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s2_d2",
      "label": "Microtask Starvation Risk",
      "description": "Infinite microtask loops (function f() { Promise.resolve().then(f); }) completely block render and UI input.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s3",
      "label": "Macrotask Queue (Task Queue)",
      "description": "Queue holding setTimeout, setInterval, setImmediate, and I/O event callbacks executed one per event loop turn.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s3_d1",
      "label": "Minimum 4ms Timer Clamping",
      "description": "Nested setTimeout calls (>5 levels deep) are clamped to minimum 4ms delay by browser HTML spec.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s3_d2",
      "label": "MessageChannel Fast Zero-Delay Task",
      "description": "MessageChannel.port.postMessage schedules fast macrotask without timer clamping, used in React Scheduler.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s4",
      "label": "requestAnimationFrame (rAF) Rendering",
      "description": "Callback executed right before browser layout and paint phases, synchronized with display refresh rate (60Hz / 120Hz).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s4_d1",
      "label": "rAF vs setTimeout Animation Quality",
      "description": "rAF prevents frame tearing and dropped frames by aligning JS animation updates to VSync hardware pulses.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s4_d2",
      "label": "requestIdleCallback Background Processing",
      "description": "Runs low-priority tasks during unused idle periods at end of frame without delaying frame rendering.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s5",
      "label": "Web Workers & Thread Isolation",
      "description": "Spawns dedicated background OS threads communicating via postMessage structured clone or SharedArrayBuffer.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s5_d1",
      "label": "Structured Clone Algorithm",
      "description": "Deep copies objects transferred between main thread and worker, preventing shared memory race conditions.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t4_s5_d2",
      "label": "SharedArrayBuffer & Atomics Mutexes",
      "description": "Enables zero-copy shared memory between workers, using Atomics.wait and Atomics.notify for thread synchronization.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5",
      "label": "Browser Storage & Caching Layers",
      "description": "HTTP Cache-Control headers, Service Worker Cache API, IndexedDB, LocalStorage, and SessionStorage.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s1",
      "label": "HTTP Caching Headers & Directives",
      "description": "Cache-Control: max-age=31536000, immutable for hashed assets; no-cache forces ETag/Last-Modified revalidation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s1_d1",
      "label": "ETag & Conditional Validation (If-None-Match)",
      "description": "Server compares ETag hash; returns 304 Not Modified without body if asset content is unchanged.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s1_d2",
      "label": "Stale-While-Revalidate Strategy",
      "description": "Serves stale cached resource immediately while asynchronously fetching updated version in background.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s2",
      "label": "Service Worker Cache API",
      "description": "Programmatic key-value store for Request/Response pairs, accessible in Service Workers and main thread window context.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s2_d1",
      "label": "Precise Programmatic Cache Control",
      "description": "Intercepts network fetch events, serving cached responses offline or updating dynamic caches dynamically.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s2_d2",
      "label": "Cache Expiration & Storage Quota",
      "description": "Requires custom eviction logic to prevent browser storage quota errors when storing large media assets.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s3",
      "label": "IndexedDB Transactional Database",
      "description": "Low-level asynchronous NoSQL database storing structured JS objects, indexes, and binary blobs up to browser storage limit.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s3_d1",
      "label": "Object Store & Index Cursor Queries",
      "description": "Uses transactional cursor queries and range bounds (IDBKeyRange) for fast high-volume client querying.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s3_d2",
      "label": "Version Upgrade & Database Schema Migration",
      "description": "onupgradeneeded event handles database version schema upgrades, creating object stores and index keys.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s4",
      "label": "LocalStorage vs SessionStorage",
      "description": "Synchronous 5MB string-only key-value storage; LocalStorage persists across sessions; SessionStorage scoped to single tab.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s4_d1",
      "label": "Synchronous Main-Thread Blocking",
      "description": "Reading or writing large LocalStorage values blocks main JS thread, causing UI jank during interactions.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s4_d2",
      "label": "Cross-Tab Storage Event Synchronization",
      "description": "window.addEventListener('storage') fires across windows/tabs when LocalStorage is modified in same origin.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s5",
      "label": "Cookies & Origin Storage Isolation",
      "description": "Small (4KB) string headers sent with HTTP requests; controlled by Domain, Path, SameSite, HttpOnly, and Secure flags.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s5_d1",
      "label": "HttpOnly Security Protection",
      "description": "Prevents client-side JS (document.cookie) from reading cookie, mitigating XSS session token theft.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t5_s5_d2",
      "label": "SameSite Strict/Lax CSRF Protection",
      "description": "Restricts cookie transmission on cross-site requests, mitigating Cross-Site Request Forgery attacks.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6",
      "label": "Browser Security Sandbox & Policy",
      "description": "Same-Origin Policy, CORS preflight checks, Content Security Policy (CSP), Spectre mitigations, and Site Isolation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s1",
      "label": "Same-Origin Policy (SOP)",
      "description": "Restricts scripts on one origin (scheme + domain + port) from accessing DOM or data on another origin without explicit permission.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s1_d1",
      "label": "Origin Tuple Matching Rules",
      "description": "http://a.com and https://a.com are distinct origins due to scheme mismatch (HTTP vs HTTPS).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s1_d2",
      "label": "DOM Access Isolation Barriers",
      "description": "Prevents malicious iframe on evil.com from accessing window.parent DOM tree of bank.com.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s2",
      "label": "Cross-Origin Resource Sharing (CORS)",
      "description": "Mechanism using HTTP headers (Access-Control-Allow-Origin) to grant cross-origin access to restricted resources.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s2_d1",
      "label": "CORS Preflight OPTIONS Request",
      "description": "Browser sends OPTIONS preflight for non-simple requests (custom headers, JSON body, non-GET/POST/HEAD).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s2_d2",
      "label": "Credentials Mode & Wildcard Origin",
      "description": "Access-Control-Allow-Credentials: true strictly prohibits wildcard * in Access-Control-Allow-Origin.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s3",
      "label": "Content Security Policy (CSP)",
      "description": "HTTP header (Content-Security-Policy) restricting resources (scripts, styles, images) browser is allowed to load for origin.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s3_d1",
      "label": "Strict CSP Nonce Implementation",
      "description": "script-src 'nonce-rAnd0m' blocks all inline scripts unless they carry matching cryptographically random nonce.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s3_d2",
      "label": "CSP Violation Reporting Endpoint",
      "description": "report-uri or report-to directives stream JSON violation reports to security endpoint when policy is breached.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s4",
      "label": "Spectre Mitigations & Cross-Origin Isolation",
      "description": "Isolates process boundary using COOP and COEP headers to enable high-resolution timers and SharedArrayBuffer.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s4_d1",
      "label": "Cross-Origin Opener Policy (COOP)",
      "description": "COOP: same-origin isolates window in its own browsing context group, severing window.opener cross-site references.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s4_d2",
      "label": "Cross-Origin Embedder Policy (COEP)",
      "description": "COEP: require-corp forces all embedded cross-origin resources to explicitly grant CORP permission.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s5",
      "label": "Site Isolation Architecture",
      "description": "Chrome process-per-site architecture running iframe content from different sites in separate sandboxed OS processes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s5_d1",
      "label": "Out-of-Process IFrames (OOPIFs)",
      "description": "Renders cross-site iframe in separate process, using IPC for layout positioning and event forwarding.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p1_t6_s5_d2",
      "label": "Memory Disaggregation Trade-off",
      "description": "Increases RAM memory usage by 10-20% to prevent speculative side-channel memory leaks across sites.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2",
      "label": "HTML5 & Web Accessibility (WCAG 2.2)",
      "description": "Semantic elements, ARIA roles, focus management, keyboard navigation, screen readers, and WCAG compliance.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1",
      "label": "Semantic HTML Architecture",
      "description": "Native landmark elements, document outline hierarchy, accessible form controls, and structured metadata.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s1",
      "label": "Semantic Landmark Elements",
      "description": "Using header, nav, main, article, section, aside, footer instead of unsemantic div containers.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s1_d1",
      "label": "Document Structure & Landmark Navigation",
      "description": "Screen readers allow users to jump directly between landmark sections without traversing individual DOM nodes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s1_d2",
      "label": "Main Element Uniqueness Rule",
      "description": "Only one visible main element allowed per document to define primary unique page content.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s2",
      "label": "Accessible Heading Hierarchy",
      "description": "Strict sequential h1 to h6 nesting preserving structural document outlines for assistive technologies.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s2_d1",
      "label": "Heading Skipping Disruption",
      "description": "Skipping heading levels (e.g. h1 to h3) confuses screen reader users navigating by heading levels.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s2_d2",
      "label": "Single Top-Level H1 Standard",
      "description": "Each page should contain single descriptive h1 title summarizing primary page purpose.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s3",
      "label": "Accessible Form Elements & Labels",
      "description": "Explicitly associating label for='id' with input controls, providing visible instructions and error announcements.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s3_d1",
      "label": "Implicit vs Explicit Label Associations",
      "description": "Explicit for/id pairing maintains accessible relationship even if label is moved elsewhere in DOM.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s3_d2",
      "label": "Fieldset & Legend Grouping",
      "description": "fieldset and legend group related radio buttons or checkboxes, providing group context to screen readers.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s4",
      "label": "Native Interactive Elements vs Custom ARIA",
      "description": "Preferring native button and a href over custom div role='button' to inherit free keyboard/focus behaviors.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s4_d1",
      "label": "Native Button Keyboard Activation",
      "description": "Native button automatically handles Enter and Space key activations without custom JS event listeners.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s4_d2",
      "label": "Link vs Button Semantic Purpose",
      "description": "Links navigate to new URL or anchor; Buttons perform page actions or state mutations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s5",
      "label": "Media Accessibility (Alt & Captions)",
      "description": "Providing meaningful alt text for images and track kind='captions' for HTML5 video/audio streams.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s5_d1",
      "label": "Decorative Image Empty Alt Text",
      "description": "Decorative background images must use alt='' to instruct screen readers to ignore them.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t1_s5_d2",
      "label": "WebVTT Track Caption Format",
      "description": "Synchronizes WebVTT caption files with audio/video timeline for deaf or hard-of-hearing users.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2",
      "label": "WAI-ARIA Attributes & Pattern Roles",
      "description": "ARIA roles, states, properties, live regions, and complex widget design patterns.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s1",
      "label": "ARIA Roles & Override Mechanics",
      "description": "Adds semantic meaning (role='dialog', role='combobox') when native HTML elements are insufficient for complex UI.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s1_d1",
      "label": "First Rule of ARIA",
      "description": "Do not use ARIA if a native HTML element or attribute with the required semantics already exists.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s1_d2",
      "label": "ARIA Role Does Not Add Behavior",
      "description": "Setting role='button' does not add keyboard focusability or event handling — developer must supply both.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s2",
      "label": "ARIA States & Properties",
      "description": "Dynamic attributes (aria-expanded, aria-checked, aria-hidden) reflecting real-time component state.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s2_d1",
      "label": "Aria-Hidden Subtree Hiding",
      "description": "aria-hidden='true' hides element and all children from accessibility tree while keeping visible on screen.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s2_d2",
      "label": "Aria-Expanded Collapsible Accordion State",
      "description": "Communicates expanded/collapsed state of accordion or dropdown trigger to screen readers.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s3",
      "label": "ARIA Live Regions (Polite vs Assertive)",
      "description": "aria-live='polite' waits for user pause before reading updates; aria-live='assertive' interrupts immediately.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s3_d1",
      "label": "Aria-Atomic Full Context Updates",
      "description": "aria-atomic='true' forces screen reader to re-announce entire region content rather than just changed text.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s3_d2",
      "label": "Status vs Alert Role Defaults",
      "description": "role='status' defaults to polite live region; role='alert' defaults to assertive live region.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s4",
      "label": "Combobox & Autocomplete ARIA Patterns",
      "description": "Complex 1.2 Combobox pattern using aria-controls, aria-autocomplete, aria-activedescendant, and popup listbox.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s4_d1",
      "label": "Active Descendant Virtual Focus",
      "description": "aria-activedescendant moves virtual focus down option list while physical keyboard focus remains in text input.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s4_d2",
      "label": "Listbox Option Selection Announcement",
      "description": "Announces highlighted listbox option index and total option count (e.g. Option 2 of 5) as user arrows down.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s5",
      "label": "Accessible Modal Dialog ARIA Patterns",
      "description": "Modal pattern using role='dialog', aria-modal='true', aria-labelledby, and strict focus trapping loop.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s5_d1",
      "label": "Aria-Modal True Background Shield",
      "description": "Instructs screen readers to constrain accessibility tree traversal strictly within open modal element.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t2_s5_d2",
      "label": "Focus Restoration on Modal Close",
      "description": "Saves reference to trigger button before open, returning physical keyboard focus to trigger upon modal close.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3",
      "label": "Keyboard Navigation & Focus Management",
      "description": "Focus ring styling, tab order, focus trapping inside modals, and custom keyboard interaction loops.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s1",
      "label": "Tabindex Order & Natural Focus Flow",
      "description": "tabindex='0' enters natural tab order; tabindex='-1' enables programmatically focusable node; positive tabindex is antipattern.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s1_d1",
      "label": "Positive Tabindex Disruption",
      "description": "Positive tabindex overrides natural DOM focus order, creating confusing focus jumps for keyboard users.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s1_d2",
      "label": "Roving Tabindex Pattern for Groups",
      "description": "Sets tabindex='0' on active item and tabindex='-1' on inactive items in toolbar/tablist, navigating via Arrow keys.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s2",
      "label": "Focus Ring Indicator Visibility",
      "description": "Customizing :focus-visible styling to provide high-contrast outline for keyboard users without displaying on mouse clicks.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s2_d1",
      "label": "Focus-Visible vs Focus Pseudo-Class",
      "description": ":focus-visible triggers outline only when browser detects keyboard or non-pointer user interaction.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s2_d2",
      "label": "Outline Zero Antipattern Elimination",
      "description": "Never set outline: none without providing accessible alternative high-contrast focus indicator.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s3",
      "label": "Modal Focus Trapping Loop",
      "description": "Intercepts Tab / Shift-Tab key events inside open modal to keep keyboard focus cycling exclusively within modal elements.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s3_d1",
      "label": "First & Last Focusable Node Boundary",
      "description": "Tabbing from last focusable element wraps to first; Shift-Tabbing from first element wraps to last element.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s3_d2",
      "label": "Escape Key Modal Dismissal",
      "description": "Global KeyDown listener closes modal on Escape key press, returning focus to opening trigger element.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s4",
      "label": "Skip Navigation Links",
      "description": "Hidden link placed as first focusable element on page, becoming visible on focus to let keyboard users skip header/nav links.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s4_d1",
      "label": "Off-Screen Positioning vs Display None",
      "description": "Positioned off-screen (transform: translateY(-100%)) so it remains focusable, unlike display: none.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s4_d2",
      "label": "Direct Jump to Main Landmark",
      "description": "Link target points to main id='main-content', moving focus directly to primary content section.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s5",
      "label": "Custom Widget Keyboard Design Patterns",
      "description": "Implementing standard W3C APG keyboard interaction specs (Arrow keys, Home, End, PageUp, PageDown, Space, Enter).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s5_d1",
      "label": "Tablist Arrow Key Navigation",
      "description": "Left/Right arrow keys switch tabs; Tab key exits tablist group directly to tabpanel content.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t3_s5_d2",
      "label": "Menu & Submenu Keyboard Cascade",
      "description": "Down arrow opens submenus; Left arrow closes submenus and returns focus to parent menu item.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4",
      "label": "WCAG 2.2 Standards & Accessibility Auditing",
      "description": "WCAG 2.2 AA Success Criteria, contrast ratios, tap targets, automated auditing (axe-core), and manual testing.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s1",
      "label": "Color Contrast Ratio Success Criteria (1.4.3)",
      "description": "WCAG AA requires 4.5:1 contrast for normal text and 3:1 for large text (18pt / 14pt bold) against background.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s1_d1",
      "label": "Non-Text Contrast Requirement (1.4.11)",
      "description": "UI components, focus indicators, and graphical icons require minimum 3:1 contrast ratio against adjacent colors.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s1_d2",
      "label": "Use of Color Alone (1.4.1)",
      "description": "Color must not be used as sole visual means of conveying information (e.g. require icons/text alongside error red).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s2",
      "label": "Target Size Minimum Criteria (2.5.8)",
      "description": "WCAG 2.2 AA requires minimum pointer target size of 24x24 CSS pixels or sufficient spacing around smaller targets.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s2_d1",
      "label": "Touch Target Size Recommendations",
      "description": "Mobile guidelines (Apple/Google) recommend 44x44 or 48x48 CSS pixel tap targets to prevent accidental taps.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s2_d2",
      "label": "Spacing Exception Metric",
      "description": "Targets smaller than 24x24 pixels pass if non-overlapping 24px diameter circle centered on target does not intersect another target.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s3",
      "label": "Focus Not Obscured Criteria (2.4.11 / 2.4.12)",
      "description": "WCAG 2.2 requires focused element is not entirely hidden by author-created content (e.g. sticky headers or popups).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s3_d1",
      "label": "Sticky Banner Focus Overlap",
      "description": "Fixed headers/footers must use scroll-margin-top to prevent focused elements from being covered upon keyboard scroll.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s3_d2",
      "label": "Enhanced Focus Obscured (AAA)",
      "description": "WCAG AAA requires no part of focused element is obscured by any author-created overlay.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s4",
      "label": "Automated Auditing with axe-core & Lighthouse",
      "description": "Running static analysis and runtime accessibility checks in CI/CD pipeline to catch ~40% of common accessibility bugs.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s4_d1",
      "label": "Automated Testing Limitations",
      "description": "Automated tools cannot evaluate reading order, meaningful alt text quality, or logical tab order — manual testing required.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s4_d2",
      "label": "Jest-axe Integration in Unit Tests",
      "description": "Runs axe accessibility engine against rendered component HTML snapshots during unit test suites.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s5",
      "label": "Screen Reader Testing (VoiceOver, NVDA, JAWS)",
      "description": "Manual testing using primary screen reader and browser pairings to verify real-world assistive technology experience.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s5_d1",
      "label": "Platform & Browser Pairings",
      "description": "Test VoiceOver on Safari (macOS/iOS), NVDA on Chrome/Firefox (Windows), and JAWS on Chrome/Edge (Windows).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p2_t4_s5_d2",
      "label": "Virtual Cursor vs Focus Mode Navigation",
      "description": "Understanding how Windows screen readers switch between reading text (Virtual Cursor) and interacting with forms (Focus Mode).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3",
      "label": "CSS Architecture & Modern Layout Engines",
      "description": "Cascade specificity, Custom Properties, CSS Grid, Flexbox, Container Queries, Cascade Layers, and View Transitions.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1",
      "label": "Cascade, Specificity & Custom Properties",
      "description": "Specificity vectors (inline, ID, class, element), origin rules, @layer cascades, and native CSS variables.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s1",
      "label": "CSS Specificity Calculation (0,0,0,0)",
      "description": "Calculates rule priority via 4-tuple vector: Inline styles > ID selectors > Class/Attribute/Pseudo-classes > Elements/Pseudo-elements.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s1_d1",
      "label": "Is / Where Pseudo-Class Specificity Impact",
      "description": ":is() takes specificity of its most specific argument; :where() has zero specificity (0,0,0,0) regardless of arguments.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s1_d2",
      "label": "Important Declaration Origin Override",
      "description": "!important overrides normal specificity, jumping to higher cascade origin tier (Author Important > Author Normal).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s2",
      "label": "Cascade Layers (@layer)",
      "description": "Explicitly controls stylesheet priority order independently of specificity, eliminating specificity escalation wars.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s2_d1",
      "label": "Layer Ordering Syntax @layer reset, base, components",
      "description": "Rules in later layers override earlier layers regardless of selector specificity; unlayered styles always override layered styles.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s2_d2",
      "label": "Third-Party Library Layer Isolation",
      "description": "Wrapping vendor CSS in @layer vendor ensures custom author styles override framework defaults effortlessly.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s3",
      "label": "CSS Custom Properties (--var)",
      "description": "Dynamic runtime variables that inherit down DOM tree, re-evaluating dynamically via JS or media queries.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s3_d1",
      "label": "Dynamic Theme Switching via CSS Variables",
      "description": "Modifying --bg-primary on document.documentElement re-themes entire application instantly without DOM re-renders.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s3_d2",
      "label": "@property Registered Custom Properties",
      "description": "@property --gradient-angle enables CSS transitions on custom properties with explicit syntax validation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s4",
      "label": "CSS Logical Properties (Logical Axes)",
      "description": "Replaces physical properties (margin-left, width) with flow-relative logical properties (margin-inline-start, inline-size) for i18n.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s4_d1",
      "label": "RTL Language Direction Support",
      "description": "Logical properties adapt automatically when document writing direction switches to Right-to-Left (RTL) for Arabic or Hebrew.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s4_d2",
      "label": "Block vs Inline Axis Orientation",
      "description": "Inline axis follows text direction (horizontal in English); Block axis runs perpendicular to text flow (vertical).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s5",
      "label": "CSS Scope & Nesting Mechanics",
      "description": "Native CSS @scope limits selector matching to DOM subtrees; native nesting (&) compiles without preprocessors.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s5_d1",
      "label": "@scope (.card) to (.content)",
      "description": "Constrains styles to .card element while excluding matching elements inside .content slot boundary.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t1_s5_d2",
      "label": "Native Nesting Ampersand Rules",
      "description": "& selector represents parent compound selector, resolving to :is(parent_selector) under the hood.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2",
      "label": "Modern Layouts (Flexbox & CSS Grid)",
      "description": "Flexbox main/cross axes, CSS Grid track sizing, subgrid, template areas, and intrinsic responsive layouts.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s1",
      "label": "Flexbox Formatting Context & Axes",
      "description": "1D layout engine distributing positive and negative free space along main axis (flex-direction) and cross axis.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s1_d1",
      "label": "Flex-Grow, Flex-Shrink, Flex-Basis Formula",
      "description": "flex: 1 1 200px sets initial basis 200px, absorbing remaining free space proportionally via flex-grow ratio.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s1_d2",
      "label": "Cross-Axis Alignment & Margin Auto Trick",
      "description": "margin-left: auto inside flex container pushes item to far right of main axis by absorbing all remaining free space.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s2",
      "label": "CSS Grid 2D Track Sizing (fr Unit)",
      "description": "2D layout engine defining explicit row and column track grids using repeat(auto-fit, minmax(250px, 1fr)).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s2_d1",
      "label": "Auto-Fit vs Auto-Fill Grid Behavior",
      "description": "auto-fit collapses empty tracks to 0px, stretching filled columns; auto-fill preserves empty track columns in grid.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s2_d2",
      "label": "Grid Template Areas Named Alignment",
      "description": "Defines visual layout using ASCII art string templates (grid-template-areas: 'header header' 'sidebar main').",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s3",
      "label": "CSS Subgrid (Grid-Template-Rows: subgrid)",
      "description": "Allows nested grid items to inherit parent grid track definitions, aligning cards across independent grid items perfectly.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s3_d1",
      "label": "Cross-Card Component Alignment Solution",
      "description": "Card headers, bodies, and footers align to shared parent grid rows regardless of varying text content heights.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s3_d2",
      "label": "Nested Subgrid Track Inheritance",
      "description": "Subgrid adopts track sizing and gap definitions from parent container while placing its own immediate child elements.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s4",
      "label": "Container Queries (@container)",
      "description": "Queries parent container width/height instead of viewport width, enabling true modular component-driven responsiveness.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s4_d1",
      "label": "Container Name & Type Definition",
      "description": "container-type: inline-size establishes inline containment context, enabling @container (min-width: 400px) queries.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s4_d2",
      "label": "Container Query Relative Units (cqw, cqh)",
      "description": "1cqw equals 1% of query container's width, allowing fluid typography scaled to component size.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s5",
      "label": "Intrinsic Fluid Responsive Design (Clamp)",
      "description": "Calculates fluid values font-size: clamp(1rem, 2.5vw, 2rem) without media queries, bounded by min and max thresholds.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s5_d1",
      "label": "Viewport Preferred Value Calculation",
      "description": "Combines fixed rem baseline with dynamic vw unit to scale smoothly between mobile and desktop screen sizes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t2_s5_d2",
      "label": "Calc Math Expressions for Fluid Gaps",
      "description": "gap: calc(1rem + 1vw) generates fluid layout spacing that grows gradually as screen size expands.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3",
      "label": "Animations, Motion & View Transitions",
      "description": "GPU hardware acceleration, CSS keyframes, View Transitions API, and scroll-driven animations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s1",
      "label": "CSS Transitions & Keyframe Performance",
      "description": "Animating compositor-only properties (transform, opacity) to run directly on GPU compositor thread at 60fps / 120fps.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s1_d1",
      "label": "Cubic-Bezier Easing Curve Timing",
      "description": "Custom cubic-bezier(0.4, 0.0, 0.2, 1) curves model natural physical momentum (material design easing).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s1_d2",
      "label": "Will-Change Layer Promotion Warning",
      "description": "will-change: transform pre-allocates GPU composite layer, but excessive usage causes severe memory exhaustion.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s2",
      "label": "View Transitions API (Document & Cross-Document)",
      "description": "Captures before and after DOM state snapshots, animating transitions automatically with CSS pseudo-elements.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s2_d1",
      "label": "StartViewTransition DOM Update Wrap",
      "description": "document.startViewTransition(() => updateDOM()) freezes current view, mutates DOM, and cross-fades snapshots.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s2_d2",
      "label": "View Transition Name Shared Element Transition",
      "description": "view-transition-name: hero-card morphs matching element seamlessly between list and detail pages.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s3",
      "label": "Scroll-Driven Animations (Scroll & View Timelines)",
      "description": "Binds CSS animation timeline directly to scroll container position (animation-timeline: scroll(root)).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s3_d1",
      "label": "Scroll Progress Indicator Animation",
      "description": "Scales top page progress bar from 0% to 100% directly bound to vertical document scroll progress without JS.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s3_d2",
      "label": "View Timeline Element Intersection Animation",
      "description": "Animates element entrance/exit (animation-timeline: view()) as element enters and exits viewport during scroll.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s4",
      "label": "Prefers-Reduced-Motion Accessibility",
      "description": "Media query @media (prefers-reduced-motion: reduce) disabling non-essential motion for vestibular disorder users.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s4_d1",
      "label": "Safe Motion Replacement Alternatives",
      "description": "Replaces intense parallax or zoom animations with gentle opacity cross-fades when reduced motion is requested.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s4_d2",
      "label": "Global Motion Reset Directive",
      "description": "Standard CSS reset snippet setting animation-duration: 0.01ms !important when reduced motion is active.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s5",
      "label": "FLIP Animation Technique (First, Last, Invert, Play)",
      "description": "Calculates initial and final bounding rects, applying transform invert to animate layout changes efficiently via GPU transforms.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s5_d1",
      "label": "First & Last Geometry Measurement",
      "description": "Measures getBoundingClientRect() before and after DOM layout mutation to compute spatial delta vector.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t3_s5_d2",
      "label": "Invert Transform & Play Animation",
      "description": "Applies negative transform to move element back to origin position, then transitions transform to zero.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4",
      "label": "CSS Methodology & Preprocessors",
      "description": "BEM methodology, CSS Modules, Tailwind CSS utility architecture, and CSS-in-JS runtimes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s1",
      "label": "BEM (Block, Element, Modifier) Naming",
      "description": "Strict class naming convention .block__element--modifier ensuring flat specificity and modular isolation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s1_d1",
      "label": "Flat Specificity Vector (0,0,1,0)",
      "description": "Every BEM rule uses single class selector, preventing specificity nesting wars across stylesheets.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s1_d2",
      "label": "Strict Component Boundary Scoping",
      "description": "Blocks are independent reusable components; Elements belong exclusively to parent Block.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s2",
      "label": "CSS Modules Local Scoping",
      "description": "Scopes CSS classes locally by generating unique hashed class names (styles_button__a8b9c) during build compilation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s2_d1",
      "label": "Zero Runtime Overhead Compiler Transform",
      "description": "Transforms class names at build time, outputting standard CSS files and JS object mapping original names to hashes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s2_d2",
      "label": "Composes From Modular Composition",
      "description": "composes: primary from './base.module.css' inherits styles across CSS module files cleanly.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s3",
      "label": "Tailwind CSS Utility-First Architecture",
      "description": "Composes styles directly in HTML using atomic utility classes (flex, pt-4, text-center) generated on-demand by JIT engine.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s3_d1",
      "label": "On-Demand JIT Compiler Engine",
      "description": "Scans template files for class names, generating minimal CSS bundle containing only utilized styles.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s3_d2",
      "label": "Design System Token Standardization",
      "description": "Enforces consistent spacing, color palettes, and typography scales via central tailwind.config.js design tokens.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s4",
      "label": "CSS-in-JS Runtimes (Styled-Components / Emotion)",
      "description": "Writes component styles in JS templates, generating dynamic style tags and hashed classes at runtime.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s4_d1",
      "label": "Dynamic Prop-Based Style Interpolation",
      "description": "Evaluates JS props directly inside CSS template literals dynamically during render cycles.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s4_d2",
      "label": "Runtime Style Injection Performance Cost",
      "description": "Injecting style tags at runtime incurs CPU overhead during React render cycles, driving shift to zero-runtime solutions.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s5",
      "label": "Zero-Runtime CSS-in-JS (StyleX / Pigment)",
      "description": "Extracts CSS-in-JS declarations into static CSS files at build time using Babel/SWC compiler plugins.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s5_d1",
      "label": "Build-Time Atomic CSS Extraction",
      "description": "Compiles component styles into minimal atomic CSS rules, eliminating JS bundle runtime overhead completely.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p3_t4_s5_d2",
      "label": "Type-Safe Style Properties",
      "description": "Provides full TypeScript type validation for CSS properties, values, and design system tokens.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4",
      "label": "Core JavaScript & TypeScript Mechanics",
      "description": "Prototypes, Closures, Promises, Generators, TypeScript Type System, Generics, and Advanced Type Operations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1",
      "label": "Prototype Chain & Object Mechanics",
      "description": "Delegation-based inheritance via [[Prototype]], Object.create, class syntax, and property descriptors.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s1",
      "label": "Prototypal Inheritance & Chain Traversal",
      "description": "Property lookup checks object instance first, then walks __proto__ chain until reaching Object.prototype (null).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s1_d1",
      "label": "Object.create Explicit Prototype Assignment",
      "description": "Object.create(proto) creates new empty object with its internal [[Prototype]] set to proto.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s1_d2",
      "label": "HasOwnProperty vs In Operator",
      "description": "obj.hasOwnProperty('key') checks instance properties only; 'key' in obj checks full prototype chain.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s2",
      "label": "ES6 Class Syntactic Sugar",
      "description": "Classes compile to standard prototype functions; super() calls parent constructor and sets up prototype chain.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s2_d1",
      "label": "Class Fields & Private Members (#field)",
      "description": "ES2022 private fields #privateProp enforce true hard language-level encapsulation inaccessible outside class body.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s2_d2",
      "label": "Static Methods & Prototype Binding",
      "description": "Static methods are bound directly to constructor function object, not to prototype property.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s3",
      "label": "Property Descriptors & Object Immutability",
      "description": "Controlling writable, enumerable, configurable flags via Object.defineProperty for precise property behaviors.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s3_d1",
      "label": "Object.freeze vs Object.seal",
      "description": "Object.freeze() prevents modifications and additions; Object.seal() allows modifying existing writable properties.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s3_d2",
      "label": "Getter & Setter Property Accessors",
      "description": "Defines computed properties executed on read (get) or write (set) with custom validation logic.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s4",
      "label": "Symbol Primitive & Well-Known Symbols",
      "description": "Unique immutable primitive used as object keys; Symbol.iterator, Symbol.toPrimitive, Symbol.hasInstance customize runtime ops.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s4_d1",
      "label": "Symbol.iterator Custom Iteration",
      "description": "Defining [Symbol.iterator]() enables for...of loops and spread syntax ([...obj]) on custom objects.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s4_d2",
      "label": "Symbol.dispose Explicit Resource Management",
      "description": "ES2024 using keyword invokes [Symbol.dispose]() for automatic cleanup of resources exiting scope.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s5",
      "label": "Map, Set, WeakMap & WeakSet",
      "description": "Modern key-value and set data structures; WeakMap uses weak references allowing key garbage collection when unreachable.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s5_d1",
      "label": "Arbitrary Key Types in Map",
      "description": "Map accepts any JS value (objects, functions, primitives) as keys, maintaining insertion order.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t1_s5_d2",
      "label": "WeakMap Memory Leak Prevention",
      "description": "WeakMap keys must be objects; garbage collector automatically reclaims entries when key object has no other references.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2",
      "label": "Closures, Scope & Memory Management",
      "description": "Lexical scoping, closure memory retention, this binding rules, and garbage collection leaks.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s1",
      "label": "Lexical Scope & Environment Records",
      "description": "Functions resolve variables based on where they were defined in source code, retaining access to outer lexical environments.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s1_d1",
      "label": "Closure Variable Retention Mechanics",
      "description": "Inner function retains reference to outer scope's Environment Record even after outer function has returned.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s1_d2",
      "label": "Module Pattern Encapsulation",
      "description": "Uses closures within IIFEs or ES modules to expose public API while keeping internal state private.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s2",
      "label": "This Keyword Binding Rules",
      "description": "this bound dynamically based on call site: Implicit (obj.method), Explicit (call/apply/bind), New (constructor), or Global.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s2_d1",
      "label": "Arrow Function Lexical This",
      "description": "Arrow functions do not bind this; they inherit this value lexically from surrounding outer scope.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s2_d2",
      "label": "Explicit Binding with Call, Apply, Bind",
      "description": "fn.call(ctx, arg1) invokes immediately; fn.bind(ctx) returns new bound function for later execution.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s3",
      "label": "Garbage Collection Memory Leak Patterns",
      "description": "Accidental global variables, forgotten timers (setInterval), detached DOM nodes, and uncleared event listeners.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s3_d1",
      "label": "Detached DOM Node Retention",
      "description": "Holding JS reference to removed DOM node prevents garbage collector from freeing node and all child subtrees.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s3_d2",
      "label": "Closure Memory Leaks in Event Handlers",
      "description": "Long-lived event listeners referencing large outer variables prevent garbage collection of entire scope.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s4",
      "label": "Strict Mode (& Execution Safety)",
      "description": "'use strict' disables silent errors, prevents global variable creation, throws on invalid property writes, and locks this.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s4_d1",
      "label": "Undefined This in Global Functions",
      "description": "In strict mode, this in standalone function calls is undefined instead of coercing to global window object.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s4_d2",
      "label": "Preventing Accidental Global Assignment",
      "description": "Assigning to undeclared variable (x = 10) throws ReferenceError instead of creating global window property.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s5",
      "label": "Variable Hoisting & Temporal Dead Zone (TDZ)",
      "description": "var hoists declaration with undefined; let and const hoist declaration into TDZ, throwing ReferenceError if accessed before.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s5_d1",
      "label": "Temporal Dead Zone Access Boundary",
      "description": "TDZ exists from start of block scope until execution reaches explicit let/const declaration line.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t2_s5_d2",
      "label": "Function Declaration Hoisting Priority",
      "description": "Function declarations hoist both name and implementation, allowing function calls before definition in file.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3",
      "label": "Asynchronous JavaScript & Generators",
      "description": "Promises, Async/Await state machines, Generators, Iterators, and AbortController cancellation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s1",
      "label": "Promise States & Chain Resolution",
      "description": "Promises represent eventual async value in Pending, Fulfilled, or Rejected state; .then() queues microtask callbacks.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s1_d1",
      "label": "Promise Immutable State Transition",
      "description": "Once Fulfilled or Rejected, Promise state and value are immutable and cannot be changed by subsequent calls.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s1_d2",
      "label": "Promise.all vs Promise.allSettled",
      "description": "Promise.all rejects immediately on first error; Promise.allSettled waits for all to complete regardless of outcome.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s2",
      "label": "Async / Await State Machine Compilation",
      "description": "async functions return Promises, compiling await statements into generator-like yield steps resumed on microtask resolution.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s2_d1",
      "label": "Sequential vs Parallel Await Execution",
      "description": "Sequential await f1(); await f2(); blocks second fetch; Promise.all([f1(), f2()]) runs fetches concurrently.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s2_d2",
      "label": "Unhandled Rejection Error Handling",
      "description": "Uncaught async errors raise unhandledrejection events, terminating Node.js processes if unhandled.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s3",
      "label": "Generators & Iterable Protocol",
      "description": "function* yields intermediate values lazily; calling .next(value) resumes generator and passes value into yield expression.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s3_d1",
      "label": "Lazy Infinite Data Streams",
      "description": "Generators compute values on demand, enabling infinite sequences without consuming memory up front.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s3_d2",
      "label": "Two-Way Generator Communication",
      "description": "Values passed to .next(val) become return value of yield expression inside generator body.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s4",
      "label": "Async Iteration (for await...of)",
      "description": "Iterates over async data sources (Symbol.asyncIterator), resolving Promise returned by .next() on each iteration step.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s4_d1",
      "label": "Node.js Readable Stream Async Consumption",
      "description": "for await (const chunk of stream) reads network/file stream chunks asynchronously as data arrives.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s4_d2",
      "label": "Async Generator Yielding Promises",
      "description": "async function* yields values wrapped in Promises for streaming async pipeline processing.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s5",
      "label": "AbortController & Request Cancellation",
      "description": "Standard API emitting signal (AbortSignal) to cancel ongoing HTTP fetch requests, Event Listeners, or async operations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s5_d1",
      "label": "Fetch API Signal Binding",
      "description": "Passing { signal: controller.signal } to fetch aborts network request immediately when controller.abort() is called.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t3_s5_d2",
      "label": "EventListener Auto-Cleanup with Signal",
      "description": "addEventListener('click', fn, { signal }) automatically removes listener when signal aborts.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4",
      "label": "TypeScript Type System Foundations",
      "description": "Static type checking, interfaces vs type aliases, generics, structural typing, and narrowing.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s1",
      "label": "Structural Typing vs Nominal Systems",
      "description": "TypeScript uses duck typing: type compatibility is determined by object shape/structure, not explicit class inheritance name.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s1_d1",
      "label": "Shape Compatibility Matching",
      "description": "Object with extra properties satisfies interface requiring subset of those properties unless fresh object literal.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s1_d2",
      "label": "Branded Types for Nominal Enforcement",
      "description": "type USD = number & { __brand: 'USD' } creates nominal type safety, preventing accidental mixing with EUR numbers.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s2",
      "label": "Type Aliases vs Interfaces",
      "description": "interface supports declaration merging and extends; type handles primitives, unions, tuples, and mapped types.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s2_d1",
      "label": "Interface Declaration Merging",
      "description": "Multiple interface User declarations in same scope merge properties automatically, ideal for library types.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s2_d2",
      "label": "Union Type Composition Capabilities",
      "description": "type can represent union types (string | number) which interfaces cannot directly declare.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s3",
      "label": "Generics & Constraint Bounds",
      "description": "<T extends Constraint> restricts generic type parameter to subset of shapes while preserving exact return type.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s3_d1",
      "label": "Generic Parameter Default Types",
      "description": "<T = string> provides default fallback type when generic argument is not explicitly passed or inferred.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s3_d2",
      "label": "Keyof Operator & Index Constraints",
      "description": "<T, K extends keyof T> constrains property key K to valid keys of object T, ensuring type-safe property access.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s4",
      "label": "Type Narrowing & Control Flow Analysis",
      "description": "Narrows union types (string | number) using typeof, instanceof, in, equality checks, or custom type predicates.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s4_d1",
      "label": "Discriminated Unions (Tagged Unions)",
      "description": "Unions with shared literal property (e.g. type: 'success' | 'error') allow TS to narrow types in switch statements.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s4_d2",
      "label": "Custom User-Defined Type Guards",
      "description": "Function returning val is TargetType asserts type narrowing to TS compiler upon returning true.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s5",
      "label": "Strict Compiler Flags (tsconfig.json)",
      "description": "strict: true enables noImplicitAny, strictNullChecks, strictFunctionTypes, and strictPropertyInitialization.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s5_d1",
      "label": "StrictNullChecks Null Safety",
      "description": "Forces explicit handling of null and undefined, eliminating 'Cannot read property of undefined' runtime errors.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t4_s5_d2",
      "label": "NoImplicitAny Enforcement",
      "description": "Errors on variables inferred as any, forcing developers to declare explicit type annotations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5",
      "label": "Advanced TypeScript Type Manipulation",
      "description": "Conditional types, Mapped types, Template Literal types, Utility types, and the infer keyword.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s1",
      "label": "Conditional Types (T extends U ? X : Y)",
      "description": "Types that select one of two possible types based on type relationship test, enabling dynamic type logic.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s1_d1",
      "label": "Distributive Conditional Types over Unions",
      "description": "When acting on bare type parameter, conditional types distribute automatically over union types (A | B).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s1_d2",
      "label": "NonNullable Utility Implementation",
      "description": "type NonNullable<T> = T extends null | undefined ? never : T strips nullability from union types.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s2",
      "label": "Infer Keyword Pattern Matching",
      "description": "Extracts and binds type parameters within conditional type test (e.g. extracting Promise return type or function args).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s2_d1",
      "label": "Awaited Return Type Extraction",
      "description": "type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T unwraps nested Promise types recursively.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s2_d2",
      "label": "Parameters & ReturnType Utility Implementation",
      "description": "type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any extracts function return type.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s3",
      "label": "Mapped Types & Key Remapping",
      "description": "Iterates over keys of type to transform properties: [K in keyof T]: T[K], with optional modifiers (readonly, ?).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s3_d1",
      "label": "Key Remapping via As Clause",
      "description": "[K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] remaps keys to getter method names.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s3_d2",
      "label": "Readonly & Partial Built-in Mapped Types",
      "description": "Partial<T> adds ? modifier to all keys; Readonly<T> adds readonly modifier to all properties.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s4",
      "label": "Template Literal Types",
      "description": "Manipulates string types using template literal syntax (`type Event = `on${Capitalize<string>}``), producing string unions.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s4_d1",
      "label": "String Union Permutations Expansion",
      "description": "Combining template literals across multiple unions generates full cartesian product of string combinations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s4_d2",
      "label": "Type-Safe Event Emitter Signatures",
      "description": "Constrains event name parameters to valid typed path strings ('user.created' | 'user.deleted').",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s5",
      "label": "Indexed Access Types & Tuple Manipulation",
      "description": "Accesses property type T['key'] or array element type T[number]; manipulates tuple lengths and rest elements.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s5_d1",
      "label": "T[number] Element Type Extraction",
      "description": "const tuple = ['a', 'b'] as const; type Elem = typeof tuple[number] extracts literal union 'a' | 'b'.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p4_t5_s5_d2",
      "label": "Variadic Tuple Types with Rest",
      "description": "type Push<T extends any[], U> = [...T, U] appends type element to tuple while maintaining exact positioning.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5",
      "label": "React 19 & Modern Frontend Architecture",
      "description": "Fiber reconciler, Concurrent rendering, Server Components, State Management, Data Fetching, and Micro-Frontends.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1",
      "label": "React Fiber Reconciler Mechanics",
      "description": "Work loop, Fiber node tree, double buffering, diffing algorithm, and priority-based task scheduling.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s1",
      "label": "Fiber Node Structure & Linked List",
      "description": "Each element maps to Fiber node with child, sibling, and return pointers, forming a traversable linked-list tree.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s1_d1",
      "label": "Work-in-Progress Double Buffering",
      "description": "Maintains current Fiber tree and builds Work-in-Progress tree off-screen, swapping root pointer upon completion.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s1_d2",
      "label": "Interruptible Work Loop Unit of Work",
      "description": "Processes individual Fiber nodes as unit of work, checking remaining frame time before yielding to main thread.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s2",
      "label": "Render Phase vs Commit Phase",
      "description": "Render phase is async/interruptible (calculates DOM changes); Commit phase is synchronous/uninterruptible (applies DOM mutations).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s2_d1",
      "label": "Render Phase Pure Functional Rule",
      "description": "Render phase functions must be pure without side effects since React may abort and restart them multiple times.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s2_d2",
      "label": "Commit Phase Effect Invocations",
      "description": "useLayoutEffect runs synchronously after DOM mutation before paint; useEffect runs asynchronously after paint.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s3",
      "label": "React Heuristic Diffing Algorithm",
      "description": "O(N) reconciliation algorithm assuming elements of different types produce different trees, and keys identify stable list items.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s3_d1",
      "label": "Element Type Change Component Unmounting",
      "description": "Changing element tag (div to section) completely unmounts old subtree and mounts new component tree from scratch.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s3_d2",
      "label": "Stable Key List Reconciliation",
      "description": "Keys allow React to match children across renders during list reordering, preventing destructive DOM node recreate.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s4",
      "label": "React Scheduler & Priority Lanes",
      "description": "Schedules updates across 31 priority lanes (SyncLane, InputContinuousLane, DefaultLane, TransitionLane, IdleLane).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s4_d1",
      "label": "Input Continuous High Priority Lane",
      "description": "User typing and click events receive high-priority Sync/Input lanes, jumping ahead of background transition renders.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s4_d2",
      "label": "Time Slicing Frame Budgeting",
      "description": "Yields control to browser every 5ms during long renders to maintain smooth UI responsiveness and input handling.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s5",
      "label": "Batching Updates (Automatic Batching)",
      "description": "Groups multiple setState calls within event handlers, timeouts, promises, or native events into a single re-render.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s5_d1",
      "label": "FlushSync Escape Hatch",
      "description": "flushSync(() => setState()) forces immediate synchronous DOM update, bypassing batching for measurement.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t1_s5_d2",
      "label": "Microtask Batching Trigger Execution",
      "description": "Batched state updates are queued and processed together at end of current microtask execution.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2",
      "label": "Concurrent Features & Server Components",
      "description": "Transitions, Suspense streaming, React Server Components (RSC), Action hooks, and Optimistic UI.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s1",
      "label": "UseTransition & Non-Urgent Updates",
      "description": "useTransition marks state updates as non-urgent transitions, allowing user input to interrupt heavy background renders.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s1_d1",
      "label": "IsPending Loading State Indicator",
      "description": "Provides isPending flag to render subtle loading feedback while background transition render completes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s1_d2",
      "label": "UseDeferredValue Deferred State Sync",
      "description": "useDeferredValue(value) returns deferred copy of value that lags behind fast inputs to prevent UI freezing.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s2",
      "label": "Suspense & Selective Hydration",
      "description": "Suspense boundaries display fallback UI while child data/code loads, enabling out-of-order HTML streaming and hydration.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s2_d1",
      "label": "Streaming SSR HTML Generation",
      "description": "Streams initial HTML layout shell immediately, pushing delayed Suspense fallback content over HTTP stream.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s2_d2",
      "label": "Selective Hydration Priority Boosting",
      "description": "Hydrates components user clicks on first, jumping priority over un-interacted background Suspense blocks.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s3",
      "label": "React Server Components (RSC)",
      "description": "Components that execute strictly on server, outputting serializable RSC payload stream; zero client JS bundle impact.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s3_d1",
      "label": "RSC Payload Format & Module References",
      "description": "Streams JSON-like graph containing rendered HTML elements and Client Component bundle references.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s3_d2",
      "label": "Client Component 'use client' Boundary",
      "description": "Defines boundary where code is bundled for browser; Client Components receive serialized props from Server Components.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s4",
      "label": "Server Actions & Form Mutations",
      "description": "Asynchronous functions defined on server ('use server') invoked from client forms or buttons seamlessly via RPC.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s4_d1",
      "label": "Progressive Enhancement Form Submission",
      "description": "Server Actions work even if JS is disabled or not yet loaded, executing standard HTTP POST form submission.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s4_d2",
      "label": "UseActionState & UseFormStatus Hooks",
      "description": "Manages form submission state, pending status, action errors, and returned server values cleanly.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s5",
      "label": "UseOptimistic UI State Updates",
      "description": "useOptimistic Hook renders expected success state immediately while server action is pending, rolling back on error.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s5_d1",
      "label": "Immediate Visual Feedback Loop",
      "description": "Adds temporary optimistic item to list before network request finishes, eliminating perceived latency.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t2_s5_d2",
      "label": "Automatic Error Rollback Reversion",
      "description": "If server action fails, React automatically discards optimistic state and reverts UI to real server state.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3",
      "label": "State Management Architecture",
      "description": "Zustand, Jotai atomic state, Recoil, Redux Toolkit, Context API performance, and state colocation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s1",
      "label": "Context API & Re-render Caveats",
      "description": "React Context passes data down component tree; any context value change forces ALL consuming components to re-render.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s1_d1",
      "label": "Context Value Object Memoization",
      "description": "Wrapping context value in useMemo prevents unnecessary re-renders when parent component re-renders.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s1_d2",
      "label": "Splitting Context by Update Frequency",
      "description": "Separate StateContext and DispatchContext so static action consumers do not re-render on state changes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s2",
      "label": "Zustand External Store Subscription",
      "description": "Lightweight store outside React using useSyncExternalStore for atomic selector subscriptions without context provider wrappers.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s2_d1",
      "label": "Selector-Based Re-render Subscriptions",
      "description": "useStore(state => state.foo) re-renders component ONLY when selected slice foo shallowly changes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s2_d2",
      "label": "Middleware Extensions (Persist / Immer)",
      "description": "Built-in middleware for automatic LocalStorage persistence and mutable draft updates via Immer.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s3",
      "label": "Jotai & Recoil Atomic State Paradigm",
      "description": "Builds state out of small independent atoms; components subscribe to individual atoms, forming dynamic state dependency graphs.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s3_d1",
      "label": "Bottom-Up Atomic Dependency Composition",
      "description": "Derived atoms compute state from source atoms, updating only components subscribed to changed derived atom.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s3_d2",
      "label": "Memory Leak Prevention in Dynamic Atoms",
      "description": "Unsubscribing from dynamic atom family releases atom memory automatically when no components consume it.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s4",
      "label": "Redux Toolkit (RTK) & Immer Mutations",
      "description": "Standardized Redux using createSlice, Immer draft mutations, and RTK Query for integrated API caching.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s4_d1",
      "label": "Immutable Draft State via Immer",
      "description": "Mutating draft state directly (state.user.name = 'Alice') compiles safely to immutable updates via JS Proxies.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s4_d2",
      "label": "Normalized Entity State Adapters",
      "description": "createEntityAdapter normalizes collections into { ids: [], entities: {} } for fast O(1) entity lookups.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s5",
      "label": "State Colocation & Server State Separation",
      "description": "Architectural rule: keep state as close to consumption point as possible; separate UI state from cached server state.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s5_d1",
      "label": "Avoid Global State Overuse",
      "description": "Component-local useState or URL query params preferred over global stores for local UI toggles.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t3_s5_d2",
      "label": "Server State vs Client UI State",
      "description": "Use React Query / RTK Query for server state caching; reserve local stores strictly for client-only UI state.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4",
      "label": "Data Fetching & Server Cache Strategies",
      "description": "TanStack Query (React Query), SWR, Stale-While-Revalidate, caching, optimistic updates, and prefetching.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s1",
      "label": "Stale-While-Revalidate Caching Model",
      "description": "Serves cached data immediately (stale), then triggers background refetch to update cache and re-render with fresh data.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s1_d1",
      "label": "StaleTime vs GcTime (CacheTime)",
      "description": "staleTime determines when data needs refetching; gcTime determines when unused inactive data is garbage collected.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s1_d2",
      "label": "Automatic Background Refetch Triggers",
      "description": "Refetches automatically on window focus (refetchOnWindowFocus), network reconnect, or component remount.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s2",
      "label": "Query Keys & Cache Invalidation",
      "description": "Query keys (['users', userId]) act as unique cache address IDs; queryClient.invalidateQueries triggers targeted refetches.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s2_d1",
      "label": "Hierarchical Query Key Matching",
      "description": "Invalidating ['users'] automatically invalidates all nested queries matching prefix (['users', 1], ['users', 2]).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s2_d2",
      "label": "Query Key Dependency Sync",
      "description": "Including state variables in query key automatically refetches data whenever dependent state variable changes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s3",
      "label": "Optimistic Mutations & Cache Rollback",
      "description": "Updates query cache immediately on mutation call, saving context snapshot to roll back if network request fails.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s3_d1",
      "label": "OnMutate Optimistic Cache Writing",
      "description": "onMutate cancels outgoing refetches, snapshots old query data, and manually sets query cache to new value.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s3_d2",
      "label": "OnError Snapshot Rollback Recovery",
      "description": "onError restores cached data snapshot saved during onMutate, ensuring UI reflects true server state.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s4",
      "label": "Prefetching & Route Parallel Data Loading",
      "description": "Initiates data fetching early during link hover or route navigation pre-fetch step before component mounts.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s4_d1",
      "label": "Hover-Triggered Query Prefetching",
      "description": "queryClient.prefetchQuery loads page data on link hover, rendering destination page instantly on click.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s4_d2",
      "label": "Parallel Query Waterfall Elimination",
      "description": "Executing parallel useQueries or hoisting fetch calls eliminates nested component data fetching waterfalls.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s5",
      "label": "Infinite Queries & Cursor Pagination",
      "description": "useInfiniteQuery manages paginated pages array, tracking nextPageParam cursor for infinite scroll lists.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s5_d1",
      "label": "Cursor-Based vs Offset-Based Pagination",
      "description": "Cursor pagination uses unique record IDs, preventing duplicate or skipped items when list changes during scrolling.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p5_t4_s5_d2",
      "label": "FlatMap Page Flattening Utility",
      "description": "Flattens pages array (data.pages.flatMap(page => page.items)) into continuous item array for rendering.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6",
      "label": "Node.js & Backend API Infrastructure",
      "description": "Libuv event loop, Worker threads, Express/Fastify, REST, GraphQL, WebSockets, and Server-Sent Events.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1",
      "label": "Node.js Architecture & Libuv Engine",
      "description": "Libuv event loop phases, thread pool, asynchronous I/O, streams, and buffer memory management.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s1",
      "label": "Libuv Event Loop Phases",
      "description": "Executes in 6 distinct phases: Timers -> Pending Callbacks -> Idle/Prepare -> Poll (I/O) -> Check (setImmediate) -> Close Callbacks.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s1_d1",
      "label": "Poll Phase I/O Blocking Mechanics",
      "description": "Poll phase blocks for incoming network connections or I/O events until timers expire or setImmediate is queued.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s1_d2",
      "label": "Process.nextTick High-Priority Queue",
      "description": "process.nextTick executes immediately after current operation completes before event loop advances to next phase.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s2",
      "label": "Libuv Worker Thread Pool (UV_THREADPOOL_SIZE)",
      "description": "Default 4-thread pool handling expensive non-async OS tasks: file I/O (fs), DNS lookups (dns.lookup), and crypto (pbkdf2).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s2_d1",
      "label": "Thread Pool Contention Bottlenecks",
      "description": "Heavy CPU crypto tasks saturate thread pool, blocking file I/O operations across entire Node process.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s2_d2",
      "label": "Adjusting Thread Pool Capacity",
      "description": "process.env.UV_THREADPOOL_SIZE = 16 increases thread pool workers to handle concurrent I/O operations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s3",
      "label": "Stream Pipeline & Backpressure Handling",
      "description": "Readable, Writable, Transform, and Duplex streams processing data in chunks; backpressure pauses readable stream when writable buffer fills.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s3_d1",
      "label": "HighWaterMark Buffer Boundary",
      "description": "Returns false from write() when internal buffer exceeds highWaterMark threshold (default 16KB / 64KB).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s3_d2",
      "label": "Stream.pipeline Automatic Error Cleanup",
      "description": "pipeline(readStream, transformStream, writeStream) automatically closes all streams if any stream errors out.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s4",
      "label": "Buffer & Direct Memory Allocation",
      "description": "Buffer.alloc allocates zero-filled memory; Buffer.allocUnsafe allocates raw uninitialized V8 external memory fast.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s4_d1",
      "label": "AllocUnsafe Security Risk",
      "description": "Unsafe allocation contains uninitialized RAM data, risking sensitive data exposure if unwritten buffer is sent to network.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s4_d2",
      "label": "ArrayBuffer & TypedArray V8 Memory",
      "description": "Buffers extend JS Uint8Array, wrapping V8 C++ ArrayBuffer memory allocated outside JS heap.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s5",
      "label": "Node.js Worker Threads Module",
      "description": "worker_threads runs multiple Node instances with independent V8 engines and event loops, sharing memory via SharedArrayBuffer.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s5_d1",
      "label": "CPU-Intensive Offloading Strategy",
      "description": "Delegates heavy CPU tasks (image processing, compression, ML inference) to worker threads without blocking main event loop.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t1_s5_d2",
      "label": "Parent-Worker PostMessage IPC",
      "description": "Communicates using parentPort.postMessage() using structured clone or zero-copy Transferable objects.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2",
      "label": "Backend Frameworks (Express vs Fastify)",
      "description": "Middleware pipelines, JSON schema validation, plugin architectures, and routing engines.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s1",
      "label": "Express Middleware Chain & Error Handling",
      "description": "Sequential (req, res, next) middleware pipeline; 4-parameter (err, req, res, next) defines central error handlers.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s1_d1",
      "label": "Async Error Catching Pitfall in Express 4",
      "description": "Uncaught rejected promises in async middleware bypass Express 4 error handlers, requiring custom wrapper or Express 5.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s1_d2",
      "label": "Middleware Next Call Chain Execution",
      "description": "Calling next() passes control to next matching route handler; passing argument next(err) triggers error middleware.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s2",
      "label": "Fastify High-Performance Plugin Architecture",
      "description": "Fastify uses Encapsulated Context plugins, Ajv JSON Schema validation, and Fast-Json-Stringify for high throughput.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s2_d1",
      "label": "Ajv JSON Schema Validation Engine",
      "description": "Validates incoming headers, params, and body against JSON schema before route handler executes, rejecting invalid payloads.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s2_d2",
      "label": "Fast-Json-Stringify Serialization",
      "description": "Compiles JSON schema into specialized serialization function, serializing JSON 2-3x faster than native JSON.stringify.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s3",
      "label": "Routing Engines & Trie Matching",
      "description": "Fastify uses Radix Trie (find-my-way) matching routes in O(K) time based on URL length K, outperforming Express linear array scanning.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s3_d1",
      "label": "Express Linear Route Array Scan",
      "description": "Express tests incoming URL sequentially against every registered regex route in array until finding match.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s3_d2",
      "label": "Radix Tree Parametric Route Lookup",
      "description": "Radix trie parses path segments (/users/:id), resolving dynamic parametric routes instantly without scanning.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s4",
      "label": "Graceful Shutdown & Connection Draining",
      "description": "Intercepts SIGTERM / SIGINT signals, stopping server from accepting new requests while draining active HTTP connections.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s4_d1",
      "label": "HTTP Keep-Alive Connection Termination",
      "description": "Calls server.close() and terminates persistent HTTP keep-alive connections (server.closeIdleConnections()).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s4_d2",
      "label": "Shutdown Timeout Safety Cutoff",
      "description": "Sets 10-30s emergency timer to forcibly terminate process if active database transactions or requests fail to finish.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s5",
      "label": "API Rate Limiting & Sliding Window",
      "description": "Protects backend APIs from abuse using Memory / Redis rate limiters implementing Token Bucket or Sliding Window Log algorithms.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s5_d1",
      "label": "Redis Rate Limit Atomic Scripts",
      "description": "Executes Lua script in Redis atomically to increment request counter and update expiration TTL without race conditions.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t2_s5_d2",
      "label": "Standard Rate Limit Headers",
      "description": "Returns RateLimit-Limit, RateLimit-Remaining, and RateLimit-Reset headers in HTTP responses.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3",
      "label": "API Design (REST, GraphQL, gRPC)",
      "description": "RESTful principles, HATEOAS, GraphQL schemas, DataLoader batching, and gRPC Protocol Buffers.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s1",
      "label": "RESTful Architecture & Resource Nouns",
      "description": "Resource-oriented design using HTTP verbs (GET, POST, PUT, PATCH, DELETE) and HTTP status codes (200, 201, 400, 401, 404, 500).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s1_d1",
      "label": "PUT vs PATCH Modification Semantics",
      "description": "PUT replaces full resource entity completely; PATCH applies partial delta modification to resource attributes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s1_d2",
      "label": "Idempotency Rules across Verbs",
      "description": "GET, PUT, DELETE are idempotent (repeated calls yield same state); POST is non-idempotent (creates new resource each time).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s2",
      "label": "GraphQL Schema & Resolver Execution Graph",
      "description": "Single endpoint accepting GraphQL queries; resolves field data recursively down requested selection set tree.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s2_d1",
      "label": "Over-fetching & Under-fetching Solution",
      "description": "Clients specify exact fields required in query, eliminating over-fetching unnecessary data or making multiple waterfall requests.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s2_d2",
      "label": "N+1 Query Problem in Nested Resolvers",
      "description": "Resolving array of N parent items causes child resolver to execute N individual database queries, causing severe performance degradation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s3",
      "label": "DataLoader Batching & Caching",
      "description": "Utility using Node.js event loop microtask queue to batch N individual key requests into single array query, deduplicating keys.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s3_d1",
      "label": "Microtask Event Loop Batching Mechanics",
      "description": "Collects all .load(id) calls within single tick of event loop, executing single batch function (loadMany([1, 2, 3])).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s3_d2",
      "label": "Request-Scoped Memoization Cache",
      "description": "DataLoader caches key results for duration of single HTTP request, preventing duplicate database lookups.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s4",
      "label": "gRPC & Protocol Buffer Binary Framing",
      "description": "High-performance RPC framework using HTTP/2 multiplexing and Protocol Buffers binary serialization instead of JSON.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s4_d1",
      "label": "Protobuf Schema Contract (.proto)",
      "description": "Defines strongly typed service methods and binary field IDs in .proto file, generating native client/server code.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s4_d2",
      "label": "Bi-directional Streaming RPCs",
      "description": "Supports client streaming, server streaming, and bi-directional streaming over single persistent HTTP/2 connection.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s5",
      "label": "OpenAPI / Swagger API Documentation",
      "description": "Standardized machine-readable specification (YAML/JSON) documenting REST API endpoints, parameters, request bodies, and schemas.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s5_d1",
      "label": "Automated SDK & Client Generation",
      "description": "Generates type-safe TypeScript/Go/Python client SDKs directly from OpenAPI spec file.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t3_s5_d2",
      "label": "Contract Testing with Prism Mocking",
      "description": "Runs mock API servers validated against OpenAPI spec during frontend development and integration testing.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4",
      "label": "Real-Time Communication (WebSockets & SSE)",
      "description": "WebSocket handshake, WS protocol framing, Server-Sent Events, and WebRTC P2P mesh.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s1",
      "label": "WebSocket HTTP Upgrade Handshake",
      "description": "Initiates as standard HTTP GET request with Upgrade: websocket and Connection: Upgrade headers, switching to WS protocol.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s1_d1",
      "label": "Sec-WebSocket-Key Challenge Security",
      "description": "Server concatenates client key with magic GUID, computes SHA-1 hash, and returns Sec-WebSocket-Accept base64 string.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s1_d2",
      "label": "Persistent Full-Duplex TCP Connection",
      "description": "Upgrades socket to bi-directional full-duplex framing channel, bypassing HTTP request-response overhead.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s2",
      "label": "WebSocket Binary Framing & Heartbeats",
      "description": "Lightweight 2-10 byte framing format supporting text (UTF-8), binary (ArrayBuffer), and Control frames (Ping/Pong/Close).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s2_d1",
      "label": "Client Masking Key Security Rule",
      "description": "Spec mandates all frames sent from client to server MUST be XOR-masked with 4-byte masking key to prevent cache poisoning.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s2_d2",
      "label": "Ping / Pong Keep-Alive Heartbeat",
      "description": "Periodically sends Ping control frames to detect dead TCP connections or dropped NAT routes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s3",
      "label": "Server-Sent Events (SSE)",
      "description": "Lightweight unidirectional server-to-client streaming protocol using standard HTTP connection with text/event-stream MIME.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s3_d1",
      "label": "Automatic Reconnection & Last-Event-ID",
      "description": "Browser automatically reconnects on dropped connection, sending Last-Event-ID header to resume event stream seamlessly.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s3_d2",
      "label": "Text/Event-Stream Event Format",
      "description": "Streams plain text events formatted as event: message\\ndata: {\"foo\":\"bar\"}\\n\\n over persistent HTTP connection.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s4",
      "label": "Socket.io Architecture & Fallback Mechanics",
      "description": "Abstract real-time engine starting with HTTP long-polling, automatically upgrading to WebSockets when connection is established.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s4_d1",
      "label": "Engine.io Transport Upgrade Handshake",
      "description": "Establishes long-polling session first to guarantee connectivity through restrictive enterprise proxies before upgrading to WS.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s4_d2",
      "label": "Multi-Server Adapter Scaling (Redis Adapter)",
      "description": "Uses Redis Pub/Sub adapter to broadcast messages across multiple Socket.io server instances.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s5",
      "label": "WebRTC P2P Media & Data Channels",
      "description": "Peer-to-peer audio, video, and data streaming using ICE/STUN/TURN NAT traversal, DTLS encryption, and SRTP protocol.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s5_d1",
      "label": "STUN & TURN Server NAT Traversal",
      "description": "STUN discovers public IP/port; TURN relays media packets through server if restrictive symmetric NAT blocks P2P.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p6_t4_s5_d2",
      "label": "RTCDataChannel SCTP Data Transport",
      "description": "Provides reliable or unreliable (UDP-like) low-latency peer-to-peer data channels for real-time gaming or video streaming.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7",
      "label": "Authentication, Sessions & Web Security",
      "description": "Cookies, JWTs, OAuth2, OIDC, Passkeys (FIDO2), CSRF, XSS, and Content Security Policy (CSP).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1",
      "label": "Cookie Security & Token Management",
      "description": "Session tokens, JWT storage, HttpOnly flags, SameSite attributes, and token rotation strategies.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s1",
      "label": "HttpOnly & Secure Cookie Flags",
      "description": "HttpOnly blocks JS access (document.cookie), mitigating XSS theft; Secure ensures cookie is sent only over HTTPS.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s1_d1",
      "label": "XSS Session Theft Prevention",
      "description": "Even if attacker executes arbitrary XSS JS on page, HttpOnly flag prevents reading session cookie value.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s1_d2",
      "label": "Cookie Prefixes (__Host- & __Secure-)",
      "description": "__Host- prefix enforces Secure flag, Path=/, and forbids Domain attribute, locking cookie to exact host.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s2",
      "label": "SameSite Cookie Attribute (Strict vs Lax)",
      "description": "SameSite=Strict blocks cookie on all cross-site requests; Lax sends cookie on top-level GET navigations; None requires Secure.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s2_d1",
      "label": "Cross-Site Request Forgery (CSRF) Mitigation",
      "description": "SameSite=Lax prevents CSRF attacks for state-changing POST requests originating from third-party sites.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s2_d2",
      "label": "Top-Level Navigation Lax Behavior",
      "description": "Navigating to site via standard link click includes Lax cookies, preserving user logged-in state from external links.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s3",
      "label": "JWT Structure & Verification",
      "description": "Base64URL encoded Header.Payload.Signature; signature created via HMAC-SHA256 (HS256) or RSA/ECDSA (RS256).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s3_d1",
      "label": "Alg: None Vulnerability Attack",
      "description": "Attacker modifies header to { 'alg': 'none' } to bypass signature check; server MUST enforce expected algorithm strictly.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s3_d2",
      "label": "RS256 Asymmetric Key Verification",
      "description": "Authentication server signs with private key; API resource servers verify signature using public key without shared secret.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s4",
      "label": "Refresh Token Rotation Strategy",
      "description": "Short-lived Access Tokens (15m) paired with long-lived Refresh Tokens (7d); server issues new Refresh Token on every refresh call.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s4_d1",
      "label": "Automatic Reuse Detection & Revocation",
      "description": "If previously invalidated Refresh Token is reused, server revokes full token family, signaling token theft event.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s4_d2",
      "label": "HttpOnly Refresh Cookie + Memory Access Token",
      "description": "Stores Refresh Token in HttpOnly cookie; stores short-lived Access Token in JS memory to minimize attack surface.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s5",
      "label": "Session Database vs Stateless JWT",
      "description": "Session ID stored in DB allows instant revocation; JWTs are stateless but cannot be revoked before expiration without blacklist.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s5_d1",
      "label": "Redis Session Store Revocation",
      "description": "Deleting session key in Redis revokes user access instantly across all active devices and tabs.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t1_s5_d2",
      "label": "JWT Revocation Blacklist Trade-off",
      "description": "Checking JWT JTI against Redis revocation blacklist re-introduces state check, negating purely stateless JWT benefit.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2",
      "label": "OAuth 2.0 & OpenID Connect (OIDC)",
      "description": "Authorization Code Flow with PKCE, Access Tokens, ID Tokens, Scopes, and Identity Federation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s1",
      "label": "OAuth 2.0 Authorization Code Flow + PKCE",
      "description": "Standard flow for SPA and native apps; Proof Key for Code Exchange (PKCE) prevents authorization code interception attacks.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s1_d1",
      "label": "Code Verifier & Code Challenge S256",
      "description": "Client generates random code_verifier, sends SHA256(verifier) as code_challenge to /authorize endpoint.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s1_d2",
      "label": "Token Exchange Verification Step",
      "description": "Client sends original code_verifier to /token endpoint; server verifies hash matches initial code_challenge before returning tokens.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s2",
      "label": "OpenID Connect (OIDC) Identity Layer",
      "description": "Authentication layer on top of OAuth 2.0; returns id_token JWT containing standardized user profile claims (sub, email).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s2_d1",
      "label": "ID Token vs Access Token Purpose",
      "description": "id_token is consumed by client app for UI identity; access_token is opaque token sent to API resource servers.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s2_d2",
      "label": "JWKS Public Key Endpoint Verification",
      "description": "Client fetches Provider's JSON Web Key Set (/.well-known/jwks.json) to verify id_token signature asynchronously.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s3",
      "label": "OAuth Scopes & Least Privilege Claims",
      "description": "scope=openid profile email requests specific permissions; server includes granted scopes in access token claims.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s3_d1",
      "label": "Consent Screen Scope Granting",
      "description": "User explicitly approves requested scopes on authorization server consent screen during initial flow.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s3_d2",
      "label": "Resource Server Scope Validation",
      "description": "API gateway validates access token contains required scope before allowing access to specific API endpoint.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s4",
      "label": "Client Credentials Flow (Machine-to-Machine)",
      "description": "M2M flow for backend microservices; exchanges client_id and client_secret directly for access token at /token.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s4_d1",
      "label": "No User Context Machine Identity",
      "description": "Issued access token represents backend system service identity without any individual human user context.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s4_d2",
      "label": "Client Secret Storage Security",
      "description": "Requires secure server-side storage (Environment Variables / Vault); NEVER expose client secret in frontend code.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s5",
      "label": "Single Sign-On (SSO) & SAML 2.0",
      "description": "Federated identity allowing single login session across multiple enterprise applications using SAML XML assertions or OIDC.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s5_d1",
      "label": "SAML 2.0 XML Digital Signatures",
      "description": "Identity Provider signs XML Assertion containing user attributes with RSA private key.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t2_s5_d2",
      "label": "Cross-Domain SSO Session Redirection",
      "description": "Redirects unauthenticated user to central IdP login page, returning signed assertion to Service Provider ACS URL.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3",
      "label": "Passkeys, FIDO2 & WebAuthn",
      "description": "Public-key cryptography, biometrics (TouchID/FaceID), hardware security keys (YubiKey), and zero-password authentication.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s1",
      "label": "FIDO2 / WebAuthn Public-Key Architecture",
      "description": "Replaces passwords with asymmetric key pairs; private key secured inside hardware authenticator (TPM/Enclave); public key saved on server.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s1_d1",
      "label": "Origin-Bound Domain Protection",
      "description": "Authenticators bind key pairs to specific web origin domain, rendering phishing attacks completely impossible.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s1_d2",
      "label": "Biometric Verification Gate",
      "description": "User unlocks private key using local device biometrics (Fingerprint / FaceID) or hardware PIN.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s2",
      "label": "WebAuthn Registration Ceremony",
      "description": "App calls navigator.credentials.create(); authenticator creates key pair, returning public key and attestation statement to server.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s2_d1",
      "label": "Attestation Statement Verification",
      "description": "Server verifies attestation signature to validate hardware authenticator model and security compliance level.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s2_d2",
      "label": "Challenge Randomness Replay Defense",
      "description": "Server sends random challenge buffer to prevent replay attacks during credential creation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s3",
      "label": "WebAuthn Authentication Ceremony",
      "description": "App calls navigator.credentials.get(); authenticator signs server challenge using private key, returning assertion signature.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s3_d1",
      "label": "Public Key Signature Verification",
      "description": "Server verifies assertion signature using previously stored user public key to log user in securely.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s3_d2",
      "label": "Sign Count Anti-Cloning Check",
      "description": "Server tracks incrementing signature counter to detect cloned hardware authenticators immediately.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s4",
      "label": "Multi-Device Synced Passkeys (Cloud Sync)",
      "description": "Passkeys synchronized end-to-end encrypted across user devices via Apple iCloud Keychain or Google Password Manager.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s4_d1",
      "label": "Device Loss Recovery Path",
      "description": "Syncing passkeys to cloud account prevents user lock-out if single hardware phone or laptop is lost or damaged.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s4_d2",
      "label": "Enterprise Hardware Key Enforcement",
      "description": "High-security applications can mandate non-exportable hardware-bound security keys (YubiKeys) using WebAuthn criteria.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s5",
      "label": "Passwordless User Experience Design",
      "description": "Integrating Passkeys into login forms using conditional UI autofill (autocomplete='username webauthn').",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s5_d1",
      "label": "Conditional UI Autofill Integration",
      "description": "Displays available Passkeys inside standard browser autofill dropdown when user focuses username input field.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t3_s5_d2",
      "label": "Fallback Authentication Strategies",
      "description": "Provides magic link email or SMS fallback options for users without WebAuthn-compatible devices.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4",
      "label": "Web Vulnerabilities & Protection (XSS, CSRF, SSRF)",
      "description": "Sanitization, DOMPurify, CSRF tokens, SSRF IP blocking, SQL Injection parameterization, and IDOR validation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s1",
      "label": "Cross-Site Scripting (XSS) Types & Defenses",
      "description": "Injected malicious JS: Stored (DB), Reflected (URL params), or DOM-based; mitigated via HTML encoding, DOMPurify, and CSP.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s1_d1",
      "label": "Context-Aware HTML Entity Encoding",
      "description": "Encodes user input before rendering into HTML text or attribute contexts.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s1_d2",
      "label": "DOMPurify Sanitization Engine",
      "description": "Sanitizes raw HTML strings before inserting into DOM via innerHTML, stripping executable script and inline event attributes.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s2",
      "label": "Cross-Site Request Forgery (CSRF)",
      "description": "Tricks authenticated browser into submitting unauthorized requests to target site; mitigated via SameSite cookies and Anti-CSRF tokens.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s2_d1",
      "label": "Synchronizer Token Pattern",
      "description": "Embeds unique cryptographically random Anti-CSRF token in form or custom header (X-CSRF-Token), validated by server.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s2_d2",
      "label": "Double-Submit Cookie Pattern",
      "description": "Sets random value in cookie and requires client JS to send matching value in request header.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s3",
      "label": "Server-Side Request Forgery (SSRF)",
      "description": "Attacker forces backend server to make unauthorized HTTP requests to internal infrastructure (e.g. AWS metadata service 169.254.169.254).",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s3_d1",
      "label": "Private IP Range Allowlist Validation",
      "description": "Blocks backend fetches to loopback (127.0.0.1), RFC1918 private IPs (10.0.0.0/8, 192.168.0.0/16), and AWS IMDS.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s3_d2",
      "label": "DNS Rebinding Attack Prevention",
      "description": "Resolves domain IP first, validates IP is public, then binds socket directly to resolved IP to prevent DNS swap during fetch.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s4",
      "label": "SQL & NoSQL Injection Protection",
      "description": "Unsanitized input alters query structure; mitigated using Parameterized Queries (Prepared Statements) or ORMs.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s4_d1",
      "label": "Parameterized Queries (Prepared Statements)",
      "description": "Binds user input variables separately from SQL execution plan, making SQL injection structurally impossible.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s4_d2",
      "label": "MongoDB NoSQL Operator Injection",
      "description": "Sanitizes input objects to prevent $gt or $ne operator injection inside JSON query payloads.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s5",
      "label": "Insecure Direct Object References (IDOR)",
      "description": "Attacker modifies resource ID parameter in URL/body (/api/orders/1024) to access unauthorized data of another user.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s5_d1",
      "label": "Server-Side Authorization Checks",
      "description": "Validates logged-in user owns requested resource object ID on every API endpoint before returning data.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p7_t4_s5_d2",
      "label": "Random Non-Sequential UUID Keys",
      "description": "Replaces sequential integer IDs with random UUID v4 or ULID keys to prevent resource enumeration scans.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8",
      "label": "Performance Optimization, Build Tools & CI/CD",
      "description": "Core Web Vitals, Code Splitting, Bundlers (Vite/esbuild/Turbopack), Tree Shaking, Docker, and CI/CD pipelines.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1",
      "label": "Core Web Vitals & Performance Metrics",
      "description": "LCP (Largest Contentful Paint), INP (Interaction to Next Paint), CLS (Cumulative Layout Shift), and TTFB measurement.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s1",
      "label": "Largest Contentful Paint (LCP < 2.5s)",
      "description": "Measures render time of largest image or text block visible in viewport; optimized via preloading, image sizing, and CDN edge delivery.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s1_d1",
      "label": "Fetchpriority='high' LCP Image Preload",
      "description": "Adds link rel='preload' fetchpriority='high' for LCP hero image to start downloading prior to CSS discovery.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s1_d2",
      "label": "LCP Sub-parts Breakdown (TTFB / Load Delay)",
      "description": "Analyzes LCP breakdown: TTFB + Resource Load Delay + Resource Load Duration + Element Render Delay.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s2",
      "label": "Interaction to Next Paint (INP < 200ms)",
      "description": "Measures user interaction latency across page lifecycle (p98 of all input events); optimized by breaking up long tasks.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s2_d1",
      "label": "Long Task Main Thread Bottlenecks (>50ms)",
      "description": "Any JS execution task running over 50ms blocks input handling, degrading INP score.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s2_d2",
      "label": "Scheduler.yield Task Chunking API",
      "description": "await scheduler.yield() yields main thread execution back to browser event loop between heavy compute chunks.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s3",
      "label": "Cumulative Layout Shift (CLS < 0.1)",
      "description": "Measures unexpected visual layout movement; eliminated by reserving explicit aspect-ratio space for images and dynamic UI.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s3_d1",
      "label": "Explicit Width/Height Image Attributes",
      "description": "Setting explicit width and height on img tags allows browser to compute aspect ratio and reserve layout space instantly.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s3_d2",
      "label": "Font-Display Swap Layout Shift Fix",
      "description": "font-display: optional or metric override descriptors (size-adjust, ascent-override) eliminate font swap reflows.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s4",
      "label": "Time to First Byte (TTFB < 800ms)",
      "description": "Measures duration from request initiation to first byte of response received; optimized via CDN edge caching and server tuning.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s4_d1",
      "label": "Early Hints HTTP 103 Streaming",
      "description": "Server sends 103 Early Hints headers immediately to trigger CSS/JS preloads while HTML is being generated.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s4_d2",
      "label": "TLS Handshake 1-RTT Optimization",
      "description": "TLS 1.3 reduces handshake latency from 2-RTT to 1-RTT (or 0-RTT for resumed connections), improving TTFB globally.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s5",
      "label": "User Timing API (Performance.mark)",
      "description": "Custom performance measurement using performance.mark('start') and performance.measure('task', 'start', 'end').",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s5_d1",
      "label": "PerformanceObserver Real-User Monitoring",
      "description": "Observes performance entries asynchronously and streams metrics to analytics backend without polling.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t1_s5_d2",
      "label": "Chrome DevTools Performance Profiling",
      "description": "Captures flamecharts detailing CPU main thread task execution, layout, paint, and memory allocation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2",
      "label": "Build Tools & Modern Bundlers (Vite / Turbopack)",
      "description": "ES modules in development, HMR, esbuild, SWC compilation, Rollup production bundling, and Tree Shaking.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s1",
      "label": "Vite Native ESM Dev Server",
      "description": "Serves source code over native browser ES modules during development, eliminating full-bundle steps for instantaneous startup.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s1_d1",
      "label": "Esbuild Dependency Pre-Bundling",
      "description": "Pre-bundles CommonJS npm dependencies into single ESM files using esbuild during initial dev server startup.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s1_d2",
      "label": "Instant Hot Module Replacement (HMR)",
      "description": "Re-places modified module in browser via ESM import without re-bundling or resetting application state.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s2",
      "label": "Tree Shaking & Dead Code Elimination",
      "description": "Statically analyzes ES module import/export statements, removing unused exports from production bundle.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s2_d1",
      "label": "SideEffects False Package Configuration",
      "description": "'sideEffects': false in package.json instructs bundler that unused module exports can be safely pruned.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s2_d2",
      "label": "CommonJS Tree Shaking Limitations",
      "description": "Dynamic require() and mutable module.exports inhibit static analysis, preventing tree shaking of CommonJS libraries.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s3",
      "label": "Code Splitting & Dynamic Imports",
      "description": "import('./module') splits application code into separate lazy-loaded JavaScript chunks loaded on-demand.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s3_d1",
      "label": "Route-Based Code Splitting",
      "description": "Splits JS bundles per route boundary, loading component JavaScript only when user navigates to specific page.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s3_d2",
      "label": "Vendor Chunk Separation Strategy",
      "description": "Splits stable third-party npm dependencies into separate vendor.js chunk for long-term browser caching.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s4",
      "label": "SWC & Esbuild Rust/Go Transpilation",
      "description": "Next-gen build tools written in Rust (SWC) and Go (esbuild) transpiling JS/TS 10-100x faster than traditional Babel.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s4_d1",
      "label": "Parallel Multithreaded Compilation",
      "description": "Leverages native OS multithreading in Go/Rust to transpile thousands of files in parallel across CPU cores.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s4_d2",
      "label": "Babel Plugin Ecosystem Compatibility",
      "description": "SWC provides Rust-based plugin system matching common Babel transformations for React, Emotion, and Relay.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s5",
      "label": "Source Maps & Production Debugging",
      "description": "Maps compiled minified production code back to original source files via .map JSON files for error tracking.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s5_d1",
      "label": "Source Map Security & Private Servers",
      "description": "Host source maps on private error tracking servers (Sentry) rather than exposing raw source code publicly on CDN.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t2_s5_d2",
      "label": "Hidden-Source-Map Build Configuration",
      "description": "Generates source map files without adding //# sourceMappingURL= comment in production JS bundles.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3",
      "label": "Asset Optimization & CDN Distribution",
      "description": "Modern image formats (AVIF/WebP), responsive images, critical CSS inlining, font subsetting, and CDN edge caching.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s1",
      "label": "Modern Image Formats (AVIF vs WebP)",
      "description": "AVIF offers 50% smaller size than JPEG; WebP offers 30% reduction; served responsively via picture element.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s1_d1",
      "label": "Picture Element Format Fallbacks",
      "description": "picture serves AVIF to supporting browsers, falling back to WebP and JPEG for legacy browser compatibility.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s1_d2",
      "label": "Lossy vs Lossless Compression Modes",
      "description": "WebP lossless mode compresses PNG graphics 26% smaller; AVIF lossy mode delivers superior high-frequency detail.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s2",
      "label": "Responsive Image Srcset & Sizes",
      "description": "srcset provides multiple image resolutions; sizes instructs browser on rendered image width before layout computation.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s2_d1",
      "label": "Browser Image Selection Heuristics",
      "description": "Browser automatically selects optimal image file from srcset based on device pixel ratio (DPR) and viewport width.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s2_d2",
      "label": "Vector Graphics SVG Optimization (SVGO)",
      "description": "Strips metadata, comments, and unneeded paths from SVG files using SVGO to produce minimal vector assets.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s3",
      "label": "Critical CSS Inlining & Unused Removal",
      "description": "Inlines CSS required for above-the-fold content inside style tags in head, deferring remaining CSS asynchronously.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s3_d1",
      "label": "Eliminating Render-Blocking Stylesheet Waterfall",
      "description": "Inlining critical CSS allows browser to render initial viewport elements immediately on HTML byte arrival.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s3_d2",
      "label": "PurgeCSS / Tailwind Unused Style Elimination",
      "description": "Scans project code templates, stripping unreferenced CSS classes from final production stylesheet.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s4",
      "label": "Web Font Optimization & Subsetting",
      "description": "Formats fonts as WOFF2 (Brotli compressed); uses unicode-range subsetting and font-display: swap to prevent FOIT.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s4_d1",
      "label": "Flash of Unstyled Text (FOUT) Mitigation",
      "description": "font-display: swap renders fallback system font immediately, swapping to custom web font once loaded.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s4_d2",
      "label": "Unicode-Range Language Subsetting",
      "description": "Splits large font files into small sub-fonts (Latin, Cyrillic, Greek), downloading only subsets needed for page text.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s5",
      "label": "CDN Edge Network Caching & Anycast",
      "description": "Distributes static assets across global Point of Presence (PoP) edge servers, routing requests to nearest location via Anycast IP.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s5_d1",
      "label": "Edge Worker Dynamic Request Processing",
      "description": "Executes lightweight JavaScript at edge servers (Cloudflare Workers / Vercel Edge) to personalize responses near user.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t3_s5_d2",
      "label": "Surrogate-Control Cache Invalidation",
      "description": "Surrogate-Key / Cache-Tag headers allow purging thousands of related cached CDN pages instantly via API tag purge.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4",
      "label": "Containerization & CI/CD Pipelines",
      "description": "Docker multi-stage builds, container security, GitHub Actions workflows, blue-green deployments, and infrastructure as code.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s1",
      "label": "Docker Multi-Stage Builds",
      "description": "Uses separate build and runner stages in Dockerfile, outputting minimal production image without build tools.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s1_d1",
      "label": "Build Dependency Stripping",
      "description": "Compiles code in heavy node/rust build image, copying only compiled dist artifacts into minimal alpine runner image.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s1_d2",
      "label": "Layer Caching Order Optimization",
      "description": "Copies package.json and runs npm ci BEFORE copying application code to maximize Docker layer cache hits.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s2",
      "label": "Container Security & Non-Root Execution",
      "description": "Runs container processes as unprivileged non-root user (USER node), dropping unnecessary Linux capabilities.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s2_d1",
      "label": "Distroless Container Base Images",
      "description": "Uses Google Distroless images containing only application and runtime dependencies — no shell or package manager.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s2_d2",
      "label": "Container Vulnerability Scanning (Trivy)",
      "description": "Scans container image OS packages and npm dependencies for CVE vulnerabilities in CI/CD pipeline.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s3",
      "label": "GitHub Actions CI/CD Pipeline Architecture",
      "description": "Automates linting, testing, building, scanning, and deployment via YAML workflow pipelines triggered on git push.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s3_d1",
      "label": "Matrix Build Strategy Parallelism",
      "description": "Runs test suites concurrently across multiple OS environments and Node.js versions using matrix configurations.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s3_d2",
      "label": "Dependency Caching Actions (actions/cache)",
      "description": "Caches ~/.npm or node_modules across workflow runs, accelerating CI pipeline execution time.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s4",
      "label": "Blue-Green & Canary Deployment Strategies",
      "description": "Blue-Green maintains two identical environments, switching load balancer traffic; Canary routes percentage of live users.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s4_d1",
      "label": "Instant Rollback Capability",
      "description": "Blue-Green deployments allow instant 1-second traffic rollback to old environment if new version exhibits errors.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s4_d2",
      "label": "Automated Error Rate Health Checks",
      "description": "Canary deployments monitor error rates and latency SLAs, automatically aborting rollout if health thresholds breach.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s5",
      "label": "Infrastructure as Code (Terraform / Pulumi)",
      "description": "Declares cloud infrastructure (S3, CloudFront, ECS, Databases) in version-controlled configuration files.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s5_d1",
      "label": "Terraform State File Management",
      "description": "Stores remote state in S3 with DynamoDB state locking to prevent concurrent infrastructure mutation race conditions.",
      "type": "concept"
    },
    {
      "id": "fsw_root_p8_t4_s5_d2",
      "label": "Pulumi Real Programming Language IaC",
      "description": "Defines cloud resources using TypeScript or Python, bringing autocomplete, loops, and unit testing to infrastructure.",
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
    }
  ]
};
