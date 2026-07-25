import { MindMapData } from "../../services/llmService";

export const AI_ENGINEERING_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "ai_root",
      "label": "AI & LLM Systems Engineering Masterclass",
      "description": "An end-to-end production guide to building, tuning, scaling, and evaluating large language models and autonomous AI agents.",
      "type": "topic",
      "importance": "high",
      "tags": [
        "ai",
        "llm",
        "deep-learning",
        "masterclass"
      ],
      "confidence": "high"
    },
    {
      "id": "ai_p1",
      "label": "1. Transformer Core & Neural Math",
      "description": "Deep mechanics of self-attention, positional encodings, and model weights.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "ai_p1_t1",
      "label": "Self-Attention Mechanism",
      "description": "Scaled Dot-Product Attention: Softmax(Q K^T / √d_k) V.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p1_t1_s0",
      "label": "Query, Key, and Value Projections",
      "description": "Detailed engineering specification and implementation best practices for Query, Key, and Value Projections.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t1_s1",
      "label": "Multi-Head Attention (MHA) Parallelization",
      "description": "Detailed engineering specification and implementation best practices for Multi-Head Attention (MHA) Parallelization.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t1_s2",
      "label": "Grouped-Query Attention (GQA) Memory Efficiency",
      "description": "Detailed engineering specification and implementation best practices for Grouped-Query Attention (GQA) Memory Efficiency.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t1_s3",
      "label": "Multi-Query Attention (MQA) Memory Bottleneck Reduction",
      "description": "Detailed engineering specification and implementation best practices for Multi-Query Attention (MQA) Memory Bottleneck Reduction.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t1_s4",
      "label": "FlashAttention-2 & FlashAttention-3 Tiling",
      "description": "Detailed engineering specification and implementation best practices for FlashAttention-2 & FlashAttention-3 Tiling.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t1_s5",
      "label": "Attention Masking & Causal Autoregressive Decoders",
      "description": "Detailed engineering specification and implementation best practices for Attention Masking & Causal Autoregressive Decoders.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t2",
      "label": "Positional Embeddings",
      "description": "Injecting sequence order into permutation-invariant attention matrices.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p1_t2_s0",
      "label": "Sinusoidal Fixed Positional Encodings",
      "description": "Detailed engineering specification and implementation best practices for Sinusoidal Fixed Positional Encodings.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t2_s1",
      "label": "Rotary Position Embedding (RoPE)",
      "description": "Detailed engineering specification and implementation best practices for Rotary Position Embedding (RoPE).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t2_s2",
      "label": "ALiBi (Attention with Linear Biases)",
      "description": "Detailed engineering specification and implementation best practices for ALiBi (Attention with Linear Biases).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t2_s3",
      "label": "Context Window Extension via YaRN Scaling",
      "description": "Detailed engineering specification and implementation best practices for Context Window Extension via YaRN Scaling.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t2_s4",
      "label": "Relative Position Encodings (T5 Style)",
      "description": "Detailed engineering specification and implementation best practices for Relative Position Encodings (T5 Style).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t2_s5",
      "label": "Absolute vs Relative Position Representations",
      "description": "Detailed engineering specification and implementation best practices for Absolute vs Relative Position Representations.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t3",
      "label": "Normalization & Activations",
      "description": "Stabilizing gradient flow during deep transformer training.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p1_t3_s0",
      "label": "LayerNorm vs RMSNorm (Root Mean Square)",
      "description": "Detailed engineering specification and implementation best practices for LayerNorm vs RMSNorm (Root Mean Square).",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t3_s1",
      "label": "Pre-LN vs Post-LN Architecture Stability",
      "description": "Detailed engineering specification and implementation best practices for Pre-LN vs Post-LN Architecture Stability.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t3_s2",
      "label": "SwiGLU & GeLU Activation Functions",
      "description": "Detailed engineering specification and implementation best practices for SwiGLU & GeLU Activation Functions.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t3_s3",
      "label": "Residual Connection Highway Skip Paths",
      "description": "Detailed engineering specification and implementation best practices for Residual Connection Highway Skip Paths.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t3_s4",
      "label": "Gradient Vanishing & Exploding Mitigation",
      "description": "Detailed engineering specification and implementation best practices for Gradient Vanishing & Exploding Mitigation.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t3_s5",
      "label": "Weight Initialization & Gradient Clipping",
      "description": "Detailed engineering specification and implementation best practices for Weight Initialization & Gradient Clipping.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t4",
      "label": "Tokenizer Engineering",
      "description": "Converting raw text into discrete integer vocabulary tokens.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p1_t4_s0",
      "label": "Byte-Pair Encoding (BPE) Algorithm",
      "description": "Detailed engineering specification and implementation best practices for Byte-Pair Encoding (BPE) Algorithm.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t4_s1",
      "label": "WordPiece & Unigram SentencePiece",
      "description": "Detailed engineering specification and implementation best practices for WordPiece & Unigram SentencePiece.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t4_s2",
      "label": "Tiktoken Fast Rust Tokenizer Engine",
      "description": "Detailed engineering specification and implementation best practices for Tiktoken Fast Rust Tokenizer Engine.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t4_s3",
      "label": "Handling Out-Of-Vocabulary (OOV) & Special Tokens",
      "description": "Detailed engineering specification and implementation best practices for Handling Out-Of-Vocabulary (OOV) & Special Tokens.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t4_s4",
      "label": "Byte-Fallback Tokenization Protocols",
      "description": "Detailed engineering specification and implementation best practices for Byte-Fallback Tokenization Protocols.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p1_t4_s5",
      "label": "Token-to-Word Expansion Ratios across Languages",
      "description": "Detailed engineering specification and implementation best practices for Token-to-Word Expansion Ratios across Languages.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2",
      "label": "2. Retrieval-Augmented Generation (RAG)",
      "description": "Grounding LLMs with enterprise enterprise knowledge bases and vector search.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "ai_p2_t1",
      "label": "Document Processing & Chunking",
      "description": "Parsing raw PDFs, markdown, and code into search-optimized units.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p2_t1_s0",
      "label": "Fixed-Size Character Chunking with Overlap",
      "description": "Detailed engineering specification and implementation best practices for Fixed-Size Character Chunking with Overlap.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t1_s1",
      "label": "Recursive Character Text Splitting",
      "description": "Detailed engineering specification and implementation best practices for Recursive Character Text Splitting.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t1_s2",
      "label": "Semantic Document Chunking via Embedding Spikes",
      "description": "Detailed engineering specification and implementation best practices for Semantic Document Chunking via Embedding Spikes.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t1_s3",
      "label": "Parent-Child Hierarchical Chunk Indexing",
      "description": "Detailed engineering specification and implementation best practices for Parent-Child Hierarchical Chunk Indexing.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t1_s4",
      "label": "PDF Table & OCR Extraction Pipelines",
      "description": "Detailed engineering specification and implementation best practices for PDF Table & OCR Extraction Pipelines.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t1_s5",
      "label": "Code AST Syntax-Aware Chunking",
      "description": "Detailed engineering specification and implementation best practices for Code AST Syntax-Aware Chunking.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t2",
      "label": "Vector Embeddings & Indexing",
      "description": "Dense vector spaces and approximate nearest neighbor (ANN) search.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p2_t2_s0",
      "label": "HNSW (Hierarchical Navigable Small World) Graphs",
      "description": "Detailed engineering specification and implementation best practices for HNSW (Hierarchical Navigable Small World) Graphs.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t2_s1",
      "label": "IVFFlat (Inverted File Index) & Vector Quantization",
      "description": "Detailed engineering specification and implementation best practices for IVFFlat (Inverted File Index) & Vector Quantization.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t2_s2",
      "label": "Cosine Similarity vs Inner Product vs L2 Distance",
      "description": "Detailed engineering specification and implementation best practices for Cosine Similarity vs Inner Product vs L2 Distance.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t2_s3",
      "label": "Pinecone, Qdrant, Milvus & Weaviate Clusters",
      "description": "Detailed engineering specification and implementation best practices for Pinecone, Qdrant, Milvus & Weaviate Clusters.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t2_s4",
      "label": "pgvector & SQLite-vec Embedded Vector Databases",
      "description": "Detailed engineering specification and implementation best practices for pgvector & SQLite-vec Embedded Vector Databases.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t2_s5",
      "label": "Matryoshka Representation Learning (MRL)",
      "description": "Detailed engineering specification and implementation best practices for Matryoshka Representation Learning (MRL).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t3",
      "label": "Advanced Retrieval & Reranking",
      "description": "Maximizing recall and precision for LLM generation context.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p2_t3_s0",
      "label": "Hybrid Search: BM25 Keyword + Vector Embeddings",
      "description": "Detailed engineering specification and implementation best practices for Hybrid Search: BM25 Keyword + Vector Embeddings.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t3_s1",
      "label": "Reciprocal Rank Fusion (RRF) Algorithm",
      "description": "Detailed engineering specification and implementation best practices for Reciprocal Rank Fusion (RRF) Algorithm.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t3_s2",
      "label": "Cross-Encoder Reranking (Cohere Rerank / BGE)",
      "description": "Detailed engineering specification and implementation best practices for Cross-Encoder Reranking (Cohere Rerank / BGE).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t3_s3",
      "label": "Query Expansion via HyDE (Hypothetical Document Embeddings)",
      "description": "Detailed engineering specification and implementation best practices for Query Expansion via HyDE (Hypothetical Document Embeddings).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t3_s4",
      "label": "Multi-Query Generation & Sub-Question Decomposition",
      "description": "Detailed engineering specification and implementation best practices for Multi-Query Generation & Sub-Question Decomposition.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t3_s5",
      "label": "Contextual Compression & Keyword Filtering",
      "description": "Detailed engineering specification and implementation best practices for Contextual Compression & Keyword Filtering.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t4",
      "label": "Context Compression & Synthesis",
      "description": "Optimizing token budget and preventing Lost-in-the-Middle attenuation.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p2_t4_s0",
      "label": "LLMLingua Context Compression",
      "description": "Detailed engineering specification and implementation best practices for LLMLingua Context Compression.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t4_s1",
      "label": "Long-Context Attention Needle-In-A-Haystack",
      "description": "Detailed engineering specification and implementation best practices for Long-Context Attention Needle-In-A-Haystack.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t4_s2",
      "label": "Citation Generation & Source Attribution",
      "description": "Detailed engineering specification and implementation best practices for Citation Generation & Source Attribution.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t4_s3",
      "label": "Hallucination Detection Guardrails",
      "description": "Detailed engineering specification and implementation best practices for Hallucination Detection Guardrails.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t4_s4",
      "label": "Self-RAG & Corrective RAG (CRAG) Loops",
      "description": "Detailed engineering specification and implementation best practices for Self-RAG & Corrective RAG (CRAG) Loops.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p2_t4_s5",
      "label": "GraphRAG Knowledge Graph Integration",
      "description": "Detailed engineering specification and implementation best practices for GraphRAG Knowledge Graph Integration.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3",
      "label": "3. Autonomous AI Agents & Workflows",
      "description": "Multi-step reasoning, tool execution, and state persistence.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "ai_p3_t1",
      "label": "Agentic Reasoning Loops",
      "description": "Structured thinking frameworks for multi-turn task resolution.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p3_t1_s0",
      "label": "ReAct: Synergizing Reasoning and Acting",
      "description": "Detailed engineering specification and implementation best practices for ReAct: Synergizing Reasoning and Acting.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t1_s1",
      "label": "Tree of Thoughts (ToT) Deliberative Search",
      "description": "Detailed engineering specification and implementation best practices for Tree of Thoughts (ToT) Deliberative Search.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t1_s2",
      "label": "Graph of Thoughts (GoT) Networked Reasoning",
      "description": "Detailed engineering specification and implementation best practices for Graph of Thoughts (GoT) Networked Reasoning.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t1_s3",
      "label": "Plan-and-Solve Decomposition Protocols",
      "description": "Detailed engineering specification and implementation best practices for Plan-and-Solve Decomposition Protocols.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t1_s4",
      "label": "Reflexion & Self-Correction Loops",
      "description": "Detailed engineering specification and implementation best practices for Reflexion & Self-Correction Loops.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t1_s5",
      "label": "Monte Carlo Tree Search (MCTS) Reasoning",
      "description": "Detailed engineering specification and implementation best practices for Monte Carlo Tree Search (MCTS) Reasoning.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t2",
      "label": "Tool Calling & Action Execution",
      "description": "Interfacing LLMs with external APIs, databases, and code execution.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p3_t2_s0",
      "label": "OpenAI Function Calling & JSON Schema Binding",
      "description": "Detailed engineering specification and implementation best practices for OpenAI Function Calling & JSON Schema Binding.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t2_s1",
      "label": "Model Context Protocol (MCP) Integration",
      "description": "Detailed engineering specification and implementation best practices for Model Context Protocol (MCP) Integration.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t2_s2",
      "label": "Sandboxed Python & Bash Code Execution",
      "description": "Detailed engineering specification and implementation best practices for Sandboxed Python & Bash Code Execution.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t2_s3",
      "label": "REST API OpenAPI Schema Dynamic Dispatch",
      "description": "Detailed engineering specification and implementation best practices for REST API OpenAPI Schema Dynamic Dispatch.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t2_s4",
      "label": "Human-in-the-Loop (HITL) Approval Gates",
      "description": "Detailed engineering specification and implementation best practices for Human-in-the-Loop (HITL) Approval Gates.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t2_s5",
      "label": "Browser Automation & Web Scraping Actions",
      "description": "Detailed engineering specification and implementation best practices for Browser Automation & Web Scraping Actions.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t3",
      "label": "Agentic Memory Systems",
      "description": "Persisting conversation history, facts, and long-term state.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p3_t3_s0",
      "label": "Short-Term Sliding Window Context Buffer",
      "description": "Detailed engineering specification and implementation best practices for Short-Term Sliding Window Context Buffer.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t3_s1",
      "label": "Episodic Memory via Vector Store Recall",
      "description": "Detailed engineering specification and implementation best practices for Episodic Memory via Vector Store Recall.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t3_s2",
      "label": "Semantic Knowledge Graph Memory Extraction",
      "description": "Detailed engineering specification and implementation best practices for Semantic Knowledge Graph Memory Extraction.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t3_s3",
      "label": "User Profile & Preference Key-Value Store",
      "description": "Detailed engineering specification and implementation best practices for User Profile & Preference Key-Value Store.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t3_s4",
      "label": "Memory Summarization & Context Compaction",
      "description": "Detailed engineering specification and implementation best practices for Memory Summarization & Context Compaction.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t3_s5",
      "label": "Working Memory Scratchpad Scratchpads",
      "description": "Detailed engineering specification and implementation best practices for Working Memory Scratchpad Scratchpads.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t4",
      "label": "Multi-Agent Architectures",
      "description": "Orchestrating specialized team subagents for complex workflows.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p3_t4_s0",
      "label": "Supervisor-Worker Hierarchical Delegation",
      "description": "Detailed engineering specification and implementation best practices for Supervisor-Worker Hierarchical Delegation.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t4_s1",
      "label": "Peer-to-Peer Consensus & Debate Protocols",
      "description": "Detailed engineering specification and implementation best practices for Peer-to-Peer Consensus & Debate Protocols.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t4_s2",
      "label": "LangGraph State Graph Execution Engine",
      "description": "Detailed engineering specification and implementation best practices for LangGraph State Graph Execution Engine.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t4_s3",
      "label": "Autogen & CrewAI Multi-Agent Frameworks",
      "description": "Detailed engineering specification and implementation best practices for Autogen & CrewAI Multi-Agent Frameworks.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t4_s4",
      "label": "Deadlock Prevention & Subagent Timeouts",
      "description": "Detailed engineering specification and implementation best practices for Deadlock Prevention & Subagent Timeouts.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p3_t4_s5",
      "label": "Role-Based Agent Persona Prompting",
      "description": "Detailed engineering specification and implementation best practices for Role-Based Agent Persona Prompting.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4",
      "label": "4. Fine-Tuning & Model Alignment",
      "description": "Customizing open weights models for specialized domain tasks.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "ai_p4_t1",
      "label": "Parameter-Efficient Fine-Tuning (PEFT)",
      "description": "Adapting large models with minimal VRAM and parameter overhead.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p4_t1_s0",
      "label": "LoRA: Low-Rank Adaptation Matrix Decomposition",
      "description": "Detailed engineering specification and implementation best practices for LoRA: Low-Rank Adaptation Matrix Decomposition.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t1_s1",
      "label": "QLoRA: 4-Bit NormalFloat (NF4) Quantized Tuning",
      "description": "Detailed engineering specification and implementation best practices for QLoRA: 4-Bit NormalFloat (NF4) Quantized Tuning.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t1_s2",
      "label": "Prefix Tuning & Prompt Tuning",
      "description": "Detailed engineering specification and implementation best practices for Prefix Tuning & Prompt Tuning.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t1_s3",
      "label": "Targeting Attention Projection Layers (q_proj, v_proj)",
      "description": "Detailed engineering specification and implementation best practices for Targeting Attention Projection Layers (q_proj, v_proj).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t1_s4",
      "label": "Merging LoRA Adapters into Base Model Weights",
      "description": "Detailed engineering specification and implementation best practices for Merging LoRA Adapters into Base Model Weights.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t1_s5",
      "label": "DoRA: Weight-Decomposed Low-Rank Adaptation",
      "description": "Detailed engineering specification and implementation best practices for DoRA: Weight-Decomposed Low-Rank Adaptation.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t2",
      "label": "Preference Alignment Protocols",
      "description": "Steering outputs toward human preferences and safety guidelines.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p4_t2_s0",
      "label": "RLHF: Reinforcement Learning from Human Feedback",
      "description": "Detailed engineering specification and implementation best practices for RLHF: Reinforcement Learning from Human Feedback.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t2_s1",
      "label": "PPO (Proximal Policy Optimization) Reward Models",
      "description": "Detailed engineering specification and implementation best practices for PPO (Proximal Policy Optimization) Reward Models.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t2_s2",
      "label": "DPO: Direct Preference Optimization without Reward Model",
      "description": "Detailed engineering specification and implementation best practices for DPO: Direct Preference Optimization without Reward Model.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t2_s3",
      "label": "KTO (Kahneman-Tversky Optimization) Binary Signals",
      "description": "Detailed engineering specification and implementation best practices for KTO (Kahneman-Tversky Optimization) Binary Signals.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t2_s4",
      "label": "ORPO & SimPO Reference-Free Alignment",
      "description": "Detailed engineering specification and implementation best practices for ORPO & SimPO Reference-Free Alignment.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t2_s5",
      "label": "Constitutional AI & Automated Self-Critique",
      "description": "Detailed engineering specification and implementation best practices for Constitutional AI & Automated Self-Critique.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t3",
      "label": "Data Curation & Synthetic Data",
      "description": "Generating high-quality training pairs at scale.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p4_t3_s0",
      "label": "Instruction Generation via Self-Instruct / Evol-Instruct",
      "description": "Detailed engineering specification and implementation best practices for Instruction Generation via Self-Instruct / Evol-Instruct.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t3_s1",
      "label": "Filter & Deduplication via MinHash LSH",
      "description": "Detailed engineering specification and implementation best practices for Filter & Deduplication via MinHash LSH.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t3_s2",
      "label": "LLM-as-a-Judge Quality Filtering",
      "description": "Detailed engineering specification and implementation best practices for LLM-as-a-Judge Quality Filtering.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t3_s3",
      "label": "System Prompt Diversity & Formatting Standard",
      "description": "Detailed engineering specification and implementation best practices for System Prompt Diversity & Formatting Standard.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t3_s4",
      "label": "De-biasing & Toxicity Scrubbing",
      "description": "Detailed engineering specification and implementation best practices for De-biasing & Toxicity Scrubbing.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p4_t3_s5",
      "label": "Rejection Sampling & Direct Preference Datasets",
      "description": "Detailed engineering specification and implementation best practices for Rejection Sampling & Direct Preference Datasets.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5",
      "label": "5. LLMOps, Inference & Serving",
      "description": "Optimizing latency, throughput, and GPU cluster utilization.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "ai_p5_t1",
      "label": "Inference Engines & PagedAttention",
      "description": "Maximizing KV cache throughput for simultaneous requests.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p5_t1_s0",
      "label": "vLLM & PagedAttention Memory Management",
      "description": "Detailed engineering specification and implementation best practices for vLLM & PagedAttention Memory Management.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t1_s1",
      "label": "SGLang High-Throughput Structured Output Engine",
      "description": "Detailed engineering specification and implementation best practices for SGLang High-Throughput Structured Output Engine.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t1_s2",
      "label": "TensorRT-LLM NVIDIA Hardware Acceleration",
      "description": "Detailed engineering specification and implementation best practices for TensorRT-LLM NVIDIA Hardware Acceleration.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t1_s3",
      "label": "Continuous Batching & Chunked Prefill",
      "description": "Detailed engineering specification and implementation best practices for Continuous Batching & Chunked Prefill.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t1_s4",
      "label": "Speculative Decoding with Draft Assistant Models",
      "description": "Detailed engineering specification and implementation best practices for Speculative Decoding with Draft Assistant Models.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t1_s5",
      "label": "Prefix Caching & Prompt Sharing Optimization",
      "description": "Detailed engineering specification and implementation best practices for Prefix Caching & Prompt Sharing Optimization.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t2",
      "label": "Model Quantization Formats",
      "description": "Compressing FP16 model weights for memory reduction.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p5_t2_s0",
      "label": "AWQ (Activation-aware Weight Quantization)",
      "description": "Detailed engineering specification and implementation best practices for AWQ (Activation-aware Weight Quantization).",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t2_s1",
      "label": "GPTQ 4-Bit Weight Quantization",
      "description": "Detailed engineering specification and implementation best practices for GPTQ 4-Bit Weight Quantization.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t2_s2",
      "label": "GGUF & llama.cpp CPU/GPU Hybrid Execution",
      "description": "Detailed engineering specification and implementation best practices for GGUF & llama.cpp CPU/GPU Hybrid Execution.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t2_s3",
      "label": "FP8 & INT4 Tensor Core Precision",
      "description": "Detailed engineering specification and implementation best practices for FP8 & INT4 Tensor Core Precision.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t2_s4",
      "label": "Perplexity Degradation Tradeoff Analysis",
      "description": "Detailed engineering specification and implementation best practices for Perplexity Degradation Tradeoff Analysis.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t2_s5",
      "label": "EXL2 High-Speed GPU Quantization Engine",
      "description": "Detailed engineering specification and implementation best practices for EXL2 High-Speed GPU Quantization Engine.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t3",
      "label": "Evaluation & Benchmarking",
      "description": "Measuring accuracy, faithfulness, and regression.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "ai_p5_t3_s0",
      "label": "Ragas RAG Evaluation Framework",
      "description": "Detailed engineering specification and implementation best practices for Ragas RAG Evaluation Framework.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t3_s1",
      "label": "DeepEval Automated Integration Tests",
      "description": "Detailed engineering specification and implementation best practices for DeepEval Automated Integration Tests.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t3_s2",
      "label": "MMLU, HumanEval & GSM8K Standard Benchmarks",
      "description": "Detailed engineering specification and implementation best practices for MMLU, HumanEval & GSM8K Standard Benchmarks.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t3_s3",
      "label": "ELO Rating Systems via Arena Pairwise Debates",
      "description": "Detailed engineering specification and implementation best practices for ELO Rating Systems via Arena Pairwise Debates.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t3_s4",
      "label": "Cost & Latency Telemetry Dashboarding",
      "description": "Detailed engineering specification and implementation best practices for Cost & Latency Telemetry Dashboarding.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "ai_p5_t3_s5",
      "label": "LLM Security: Prompt Injection & Red Teaming",
      "description": "Detailed engineering specification and implementation best practices for LLM Security: Prompt Injection & Red Teaming.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    }
  ],
  "edges": [
    {
      "source": "ai_root",
      "target": "ai_p1",
      "label": "Core Pillar"
    },
    {
      "source": "ai_p1",
      "target": "ai_p1_t1"
    },
    {
      "source": "ai_p1_t1",
      "target": "ai_p1_t1_s0"
    },
    {
      "source": "ai_p1_t1",
      "target": "ai_p1_t1_s1"
    },
    {
      "source": "ai_p1_t1",
      "target": "ai_p1_t1_s2"
    },
    {
      "source": "ai_p1_t1",
      "target": "ai_p1_t1_s3"
    },
    {
      "source": "ai_p1_t1",
      "target": "ai_p1_t1_s4"
    },
    {
      "source": "ai_p1_t1",
      "target": "ai_p1_t1_s5"
    },
    {
      "source": "ai_p1",
      "target": "ai_p1_t2"
    },
    {
      "source": "ai_p1_t2",
      "target": "ai_p1_t2_s0"
    },
    {
      "source": "ai_p1_t2",
      "target": "ai_p1_t2_s1"
    },
    {
      "source": "ai_p1_t2",
      "target": "ai_p1_t2_s2"
    },
    {
      "source": "ai_p1_t2",
      "target": "ai_p1_t2_s3"
    },
    {
      "source": "ai_p1_t2",
      "target": "ai_p1_t2_s4"
    },
    {
      "source": "ai_p1_t2",
      "target": "ai_p1_t2_s5"
    },
    {
      "source": "ai_p1",
      "target": "ai_p1_t3"
    },
    {
      "source": "ai_p1_t3",
      "target": "ai_p1_t3_s0"
    },
    {
      "source": "ai_p1_t3",
      "target": "ai_p1_t3_s1"
    },
    {
      "source": "ai_p1_t3",
      "target": "ai_p1_t3_s2"
    },
    {
      "source": "ai_p1_t3",
      "target": "ai_p1_t3_s3"
    },
    {
      "source": "ai_p1_t3",
      "target": "ai_p1_t3_s4"
    },
    {
      "source": "ai_p1_t3",
      "target": "ai_p1_t3_s5"
    },
    {
      "source": "ai_p1",
      "target": "ai_p1_t4"
    },
    {
      "source": "ai_p1_t4",
      "target": "ai_p1_t4_s0"
    },
    {
      "source": "ai_p1_t4",
      "target": "ai_p1_t4_s1"
    },
    {
      "source": "ai_p1_t4",
      "target": "ai_p1_t4_s2"
    },
    {
      "source": "ai_p1_t4",
      "target": "ai_p1_t4_s3"
    },
    {
      "source": "ai_p1_t4",
      "target": "ai_p1_t4_s4"
    },
    {
      "source": "ai_p1_t4",
      "target": "ai_p1_t4_s5"
    },
    {
      "source": "ai_root",
      "target": "ai_p2",
      "label": "Core Pillar"
    },
    {
      "source": "ai_p2",
      "target": "ai_p2_t1"
    },
    {
      "source": "ai_p2_t1",
      "target": "ai_p2_t1_s0"
    },
    {
      "source": "ai_p2_t1",
      "target": "ai_p2_t1_s1"
    },
    {
      "source": "ai_p2_t1",
      "target": "ai_p2_t1_s2"
    },
    {
      "source": "ai_p2_t1",
      "target": "ai_p2_t1_s3"
    },
    {
      "source": "ai_p2_t1",
      "target": "ai_p2_t1_s4"
    },
    {
      "source": "ai_p2_t1",
      "target": "ai_p2_t1_s5"
    },
    {
      "source": "ai_p2",
      "target": "ai_p2_t2"
    },
    {
      "source": "ai_p2_t2",
      "target": "ai_p2_t2_s0"
    },
    {
      "source": "ai_p2_t2",
      "target": "ai_p2_t2_s1"
    },
    {
      "source": "ai_p2_t2",
      "target": "ai_p2_t2_s2"
    },
    {
      "source": "ai_p2_t2",
      "target": "ai_p2_t2_s3"
    },
    {
      "source": "ai_p2_t2",
      "target": "ai_p2_t2_s4"
    },
    {
      "source": "ai_p2_t2",
      "target": "ai_p2_t2_s5"
    },
    {
      "source": "ai_p2",
      "target": "ai_p2_t3"
    },
    {
      "source": "ai_p2_t3",
      "target": "ai_p2_t3_s0"
    },
    {
      "source": "ai_p2_t3",
      "target": "ai_p2_t3_s1"
    },
    {
      "source": "ai_p2_t3",
      "target": "ai_p2_t3_s2"
    },
    {
      "source": "ai_p2_t3",
      "target": "ai_p2_t3_s3"
    },
    {
      "source": "ai_p2_t3",
      "target": "ai_p2_t3_s4"
    },
    {
      "source": "ai_p2_t3",
      "target": "ai_p2_t3_s5"
    },
    {
      "source": "ai_p2",
      "target": "ai_p2_t4"
    },
    {
      "source": "ai_p2_t4",
      "target": "ai_p2_t4_s0"
    },
    {
      "source": "ai_p2_t4",
      "target": "ai_p2_t4_s1"
    },
    {
      "source": "ai_p2_t4",
      "target": "ai_p2_t4_s2"
    },
    {
      "source": "ai_p2_t4",
      "target": "ai_p2_t4_s3"
    },
    {
      "source": "ai_p2_t4",
      "target": "ai_p2_t4_s4"
    },
    {
      "source": "ai_p2_t4",
      "target": "ai_p2_t4_s5"
    },
    {
      "source": "ai_root",
      "target": "ai_p3",
      "label": "Core Pillar"
    },
    {
      "source": "ai_p3",
      "target": "ai_p3_t1"
    },
    {
      "source": "ai_p3_t1",
      "target": "ai_p3_t1_s0"
    },
    {
      "source": "ai_p3_t1",
      "target": "ai_p3_t1_s1"
    },
    {
      "source": "ai_p3_t1",
      "target": "ai_p3_t1_s2"
    },
    {
      "source": "ai_p3_t1",
      "target": "ai_p3_t1_s3"
    },
    {
      "source": "ai_p3_t1",
      "target": "ai_p3_t1_s4"
    },
    {
      "source": "ai_p3_t1",
      "target": "ai_p3_t1_s5"
    },
    {
      "source": "ai_p3",
      "target": "ai_p3_t2"
    },
    {
      "source": "ai_p3_t2",
      "target": "ai_p3_t2_s0"
    },
    {
      "source": "ai_p3_t2",
      "target": "ai_p3_t2_s1"
    },
    {
      "source": "ai_p3_t2",
      "target": "ai_p3_t2_s2"
    },
    {
      "source": "ai_p3_t2",
      "target": "ai_p3_t2_s3"
    },
    {
      "source": "ai_p3_t2",
      "target": "ai_p3_t2_s4"
    },
    {
      "source": "ai_p3_t2",
      "target": "ai_p3_t2_s5"
    },
    {
      "source": "ai_p3",
      "target": "ai_p3_t3"
    },
    {
      "source": "ai_p3_t3",
      "target": "ai_p3_t3_s0"
    },
    {
      "source": "ai_p3_t3",
      "target": "ai_p3_t3_s1"
    },
    {
      "source": "ai_p3_t3",
      "target": "ai_p3_t3_s2"
    },
    {
      "source": "ai_p3_t3",
      "target": "ai_p3_t3_s3"
    },
    {
      "source": "ai_p3_t3",
      "target": "ai_p3_t3_s4"
    },
    {
      "source": "ai_p3_t3",
      "target": "ai_p3_t3_s5"
    },
    {
      "source": "ai_p3",
      "target": "ai_p3_t4"
    },
    {
      "source": "ai_p3_t4",
      "target": "ai_p3_t4_s0"
    },
    {
      "source": "ai_p3_t4",
      "target": "ai_p3_t4_s1"
    },
    {
      "source": "ai_p3_t4",
      "target": "ai_p3_t4_s2"
    },
    {
      "source": "ai_p3_t4",
      "target": "ai_p3_t4_s3"
    },
    {
      "source": "ai_p3_t4",
      "target": "ai_p3_t4_s4"
    },
    {
      "source": "ai_p3_t4",
      "target": "ai_p3_t4_s5"
    },
    {
      "source": "ai_root",
      "target": "ai_p4",
      "label": "Core Pillar"
    },
    {
      "source": "ai_p4",
      "target": "ai_p4_t1"
    },
    {
      "source": "ai_p4_t1",
      "target": "ai_p4_t1_s0"
    },
    {
      "source": "ai_p4_t1",
      "target": "ai_p4_t1_s1"
    },
    {
      "source": "ai_p4_t1",
      "target": "ai_p4_t1_s2"
    },
    {
      "source": "ai_p4_t1",
      "target": "ai_p4_t1_s3"
    },
    {
      "source": "ai_p4_t1",
      "target": "ai_p4_t1_s4"
    },
    {
      "source": "ai_p4_t1",
      "target": "ai_p4_t1_s5"
    },
    {
      "source": "ai_p4",
      "target": "ai_p4_t2"
    },
    {
      "source": "ai_p4_t2",
      "target": "ai_p4_t2_s0"
    },
    {
      "source": "ai_p4_t2",
      "target": "ai_p4_t2_s1"
    },
    {
      "source": "ai_p4_t2",
      "target": "ai_p4_t2_s2"
    },
    {
      "source": "ai_p4_t2",
      "target": "ai_p4_t2_s3"
    },
    {
      "source": "ai_p4_t2",
      "target": "ai_p4_t2_s4"
    },
    {
      "source": "ai_p4_t2",
      "target": "ai_p4_t2_s5"
    },
    {
      "source": "ai_p4",
      "target": "ai_p4_t3"
    },
    {
      "source": "ai_p4_t3",
      "target": "ai_p4_t3_s0"
    },
    {
      "source": "ai_p4_t3",
      "target": "ai_p4_t3_s1"
    },
    {
      "source": "ai_p4_t3",
      "target": "ai_p4_t3_s2"
    },
    {
      "source": "ai_p4_t3",
      "target": "ai_p4_t3_s3"
    },
    {
      "source": "ai_p4_t3",
      "target": "ai_p4_t3_s4"
    },
    {
      "source": "ai_p4_t3",
      "target": "ai_p4_t3_s5"
    },
    {
      "source": "ai_root",
      "target": "ai_p5",
      "label": "Core Pillar"
    },
    {
      "source": "ai_p5",
      "target": "ai_p5_t1"
    },
    {
      "source": "ai_p5_t1",
      "target": "ai_p5_t1_s0"
    },
    {
      "source": "ai_p5_t1",
      "target": "ai_p5_t1_s1"
    },
    {
      "source": "ai_p5_t1",
      "target": "ai_p5_t1_s2"
    },
    {
      "source": "ai_p5_t1",
      "target": "ai_p5_t1_s3"
    },
    {
      "source": "ai_p5_t1",
      "target": "ai_p5_t1_s4"
    },
    {
      "source": "ai_p5_t1",
      "target": "ai_p5_t1_s5"
    },
    {
      "source": "ai_p5",
      "target": "ai_p5_t2"
    },
    {
      "source": "ai_p5_t2",
      "target": "ai_p5_t2_s0"
    },
    {
      "source": "ai_p5_t2",
      "target": "ai_p5_t2_s1"
    },
    {
      "source": "ai_p5_t2",
      "target": "ai_p5_t2_s2"
    },
    {
      "source": "ai_p5_t2",
      "target": "ai_p5_t2_s3"
    },
    {
      "source": "ai_p5_t2",
      "target": "ai_p5_t2_s4"
    },
    {
      "source": "ai_p5_t2",
      "target": "ai_p5_t2_s5"
    },
    {
      "source": "ai_p5",
      "target": "ai_p5_t3"
    },
    {
      "source": "ai_p5_t3",
      "target": "ai_p5_t3_s0"
    },
    {
      "source": "ai_p5_t3",
      "target": "ai_p5_t3_s1"
    },
    {
      "source": "ai_p5_t3",
      "target": "ai_p5_t3_s2"
    },
    {
      "source": "ai_p5_t3",
      "target": "ai_p5_t3_s3"
    },
    {
      "source": "ai_p5_t3",
      "target": "ai_p5_t3_s4"
    },
    {
      "source": "ai_p5_t3",
      "target": "ai_p5_t3_s5"
    }
  ]
};
