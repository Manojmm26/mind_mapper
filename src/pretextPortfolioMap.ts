import { MindMapData } from './services/llmService';

export const PRETEXT_PORTFOLIO_MAP: MindMapData = {
  nodes: [
    {
      id: 'pretext',
      label: 'Pretext',
      description:
        'A lightweight TypeScript text engine for DOM-free multiline layout. This starter map turns the Pretext pitch into a portfolio-ready interactive demo.',
      type: 'topic',
      tags: ['pretext', 'portfolio', 'canvas'],
      importance: 'high',
      confidence: 'high',
      nextStep: 'Drag the branches, inspect the cards, then generate a fresh map from your own prompt.',
    },
    {
      id: 'core-promise',
      label: 'No DOM, Fast, Precise',
      description:
        'Use browser font shaping as ground truth without asking the DOM to measure every paragraph. The result is smooth layout math, accurate wrapping, and fewer reflow bottlenecks.',
      type: 'concept',
      tags: ['measurement', 'performance'],
      importance: 'high',
      confidence: 'high',
    },
    {
      id: 'performance-uis',
      label: 'Performance UIs',
      description:
        'Precompute text metrics, cache heights, and feed them into your own layout engine. That unlocks dense interfaces that still feel stable at high node counts.',
      type: 'concept',
      tags: ['virtualization', '120fps'],
      importance: 'high',
      nextStep: 'Benchmark a large graph or masonry feed against a DOM-measured version.',
    },
    {
      id: 'virtualized-masonry',
      label: 'Virtualized Masonry Grid',
      description:
        'Use walkLineRanges and cached heights to virtualize 100k+ variable-height cards without guessing row sizes or triggering layout thrash.',
      type: 'example',
      tags: ['100k+', 'occlusion'],
      importance: 'high',
      confidence: 'high',
    },
    {
      id: 'chat-bubbles',
      label: 'Perfect Chat Bubbles',
      description:
        'Binary-search shrink wrapping gives each message the tightest balanced width, even when a thread mixes emoji, code, عربي, and 中文 labels.',
      type: 'example',
      tags: ['shrinkwrap', 'bidi'],
      importance: 'high',
      confidence: 'high',
    },
    {
      id: 'typography-magic',
      label: 'Typography Magic',
      description:
        'Because text measurement is explicit, typography stops being a CSS black box. You can tune columns, wrapping, and rhythm as first-class data.',
      type: 'concept',
      tags: ['editorial', 'layout'],
      importance: 'high',
    },
    {
      id: 'responsive-magazine',
      label: 'Responsive Magazine',
      description:
        'Rerun layout on resize instead of re-measuring the DOM. Multi-column editorial spreads adapt instantly from desktop to phone without awkward jumps.',
      type: 'example',
      tags: ['columns', 'reflow'],
      importance: 'medium',
    },
    {
      id: 'knuth-plass',
      label: 'Knuth-Plass Playground',
      description:
        'Pair Pretext with a paragraph balancing algorithm to build a playground for beautifully justified copy and visibly better line breaks.',
      type: 'example',
      tags: ['justification', 'paragraphs'],
      importance: 'medium',
    },
    {
      id: 'creative-canvases',
      label: 'Creative Canvases',
      description:
        'Pretext can feed Canvas, SVG, and other custom renderers directly. That makes expressive text scenes practical without mirroring invisible DOM nodes.',
      type: 'concept',
      tags: ['canvas', 'rendering'],
      importance: 'high',
    },
    {
      id: 'production-patterns',
      label: 'Production Patterns',
      description:
        'The impressive demos matter, but shipping this well means explicit font loading, measurement caches, and scene transitions that stay stable under real content.',
      type: 'concept',
      tags: ['shipping', 'stability'],
      importance: 'high',
      nextStep: 'Show the operational patterns that make the flashy experience feel reliable instead of fragile.',
    },
    {
      id: 'experience-design',
      label: 'Playable UX',
      description:
        'The best demo is not another diagram editor. It is a guided environment where the graph rearranges around your attention and invites exploration.',
      type: 'concept',
      tags: ['atlas', 'navigation'],
      importance: 'high',
      nextStep: 'Lead with exploration, then let users drop into the full graph only when they want the whole topology.',
    },
    {
      id: 'canvas-text-flow',
      label: 'Canvas Text Flow',
      description:
        'Use layoutWithLines to paint text into a 2D canvas scene with pixel-perfect wrapping and a renderer you fully control.',
      type: 'example',
      tags: ['2d', 'custom renderer'],
      importance: 'high',
      confidence: 'high',
    },
    {
      id: 'ai-layout-generator',
      label: 'AI Layout Generator',
      description:
        'Feed LLM output into a measured layout pipeline and render cards, dashboards, or mind maps immediately instead of waiting for hidden DOM probes.',
      type: 'example',
      tags: ['llm', 'dynamic ui'],
      importance: 'high',
      nextStep: 'Generate a fresh map from a topic prompt and inspect how the cards stay balanced.',
    },
    {
      id: 'mind-map-builder',
      label: 'Mind Map Builder',
      description:
        'The meta project: use Pretext itself to power an interactive mind map editor with draggable nodes, variable heights, multilingual cards, and shareable output.',
      type: 'action',
      tags: ['hero demo', 'shareable'],
      importance: 'high',
      confidence: 'high',
      nextStep: 'Turn this starter map into your site hero, then capture a demo of a much larger generated graph.',
    },
    {
      id: 'builder-canvas',
      label: 'Canvas First Nodes',
      description:
        'Render every card in canvas, keep hitboxes in JavaScript, and remove DOM text from the hot path so dragging stays smooth as the graph grows.',
      type: 'concept',
      tags: ['dragging', 'hit testing'],
      importance: 'high',
    },
    {
      id: 'builder-rich-content',
      label: 'Rich Content Cards',
      description:
        'Emoji, mixed languages like مثل هذا, markdown-derived copy, and dynamic font sizes all fit the same measured card model.',
      type: 'concept',
      tags: ['emoji', 'multilingual'],
      importance: 'medium',
    },
    {
      id: 'builder-prompt-flow',
      label: 'Prompt To Graph',
      description:
        'Use the existing topic generation flow, then hydrate the result into the same measured canvas pipeline so AI output becomes instantly explorable.',
      type: 'action',
      tags: ['gemini', 'pipeline'],
      importance: 'high',
    },
    {
      id: 'builder-export',
      label: 'JSON First Export',
      description:
        'Keep the card model serializable now so JSON export works immediately and SVG or image export can be layered on later without redesigning the data.',
      type: 'action',
      tags: ['export', 'sharing'],
      importance: 'medium',
    },
    {
      id: 'font-loading-contract',
      label: 'Font Loading Contract',
      description:
        'Named fonts are part of the runtime contract. The scene should wait for the real typefaces before layout so cards never need hidden correction passes.',
      type: 'action',
      tags: ['fonts', 'accuracy'],
      importance: 'high',
      confidence: 'high',
    },
    {
      id: 'measurement-cache',
      label: 'Measurement Cache',
      description:
        'Prepared text and segment caches make relayout cheap enough that mode switches and scene changes feel instant instead of expensive.',
      type: 'concept',
      tags: ['cache', 'relayout'],
      importance: 'high',
      confidence: 'high',
    },
    {
      id: 'scene-transitions',
      label: 'Scene Transitions',
      description:
        'Movement between nodes should feel intentional. Cards can animate from one constellation to another without breaking text fidelity or hit testing.',
      type: 'example',
      tags: ['motion', 'navigation'],
      importance: 'medium',
    },
    {
      id: 'atlas-navigation',
      label: 'Atlas Navigation',
      description:
        'One node becomes the room you are in, nearby branches turn into reachable destinations, and the full graph becomes a backdrop instead of the only interface.',
      type: 'example',
      tags: ['focus', 'wayfinding'],
      importance: 'high',
      confidence: 'high',
    },
    {
      id: 'discovery-rhythm',
      label: 'Discovery Rhythm',
      description:
        'Good pacing alternates between overview and intimacy: big scene, focused card, next move, then deeper reveal. That is closer to a game loop than a settings panel.',
      type: 'concept',
      tags: ['flow', 'storytelling'],
      importance: 'medium',
    },
    {
      id: 'shareable-scenes',
      label: 'Shareable Scenes',
      description:
        'If the graph can serialize cleanly, each focused moment can become a linkable scene or exported story beat rather than only a raw JSON blob.',
      type: 'action',
      tags: ['deep links', 'portfolio'],
      importance: 'medium',
    },
  ],
  edges: [
    { source: 'pretext', target: 'core-promise', label: 'enables' },
    { source: 'pretext', target: 'production-patterns', label: 'requires' },
    { source: 'pretext', target: 'experience-design', label: 'inspires' },
    { source: 'core-promise', target: 'performance-uis', label: 'opens' },
    { source: 'performance-uis', target: 'virtualized-masonry', label: 'example' },
    { source: 'performance-uis', target: 'chat-bubbles', label: 'example' },
    { source: 'core-promise', target: 'typography-magic', label: 'opens' },
    { source: 'typography-magic', target: 'responsive-magazine', label: 'example' },
    { source: 'typography-magic', target: 'knuth-plass', label: 'example' },
    { source: 'core-promise', target: 'creative-canvases', label: 'opens' },
    { source: 'creative-canvases', target: 'canvas-text-flow', label: 'example' },
    { source: 'creative-canvases', target: 'ai-layout-generator', label: 'example' },
    { source: 'pretext', target: 'mind-map-builder', label: 'star project' },
    { source: 'mind-map-builder', target: 'builder-canvas', label: 'built with' },
    { source: 'mind-map-builder', target: 'builder-rich-content', label: 'supports' },
    { source: 'mind-map-builder', target: 'builder-prompt-flow', label: 'adds' },
    { source: 'mind-map-builder', target: 'builder-export', label: 'ships' },
    { source: 'production-patterns', target: 'font-loading-contract', label: 'locks in' },
    { source: 'production-patterns', target: 'measurement-cache', label: 'accelerates' },
    { source: 'production-patterns', target: 'scene-transitions', label: 'stabilizes' },
    { source: 'experience-design', target: 'atlas-navigation', label: 'becomes' },
    { source: 'experience-design', target: 'discovery-rhythm', label: 'shapes' },
    { source: 'experience-design', target: 'shareable-scenes', label: 'extends to' },
  ],
};