import { MindMapData } from "../../services/llmService";

export const AI_ENGINEERING_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "ai_root",
      "label": "AI Engineering & LLM Architecture",
      "description": "Rigorous first-principles blueprint of Transformer neural networks, FlashAttention, PEFT/LoRA fine-tuning, RAG vector indexing, vLLM PagedAttention inference, agentic orchestration loops, and evaluation frameworks.",
      "type": "topic"
    },
    {
      "id": "ai_root_p1",
      "label": "Transformer Architecture & Attention Mechanisms",
      "description": "Core neural network components, matrix operations, and memory optimizations driving modern Large Language Models.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1",
      "label": "Multi-Head Self-Attention (MHSA)",
      "description": "Parallel attention mechanism computing contextual token relationships across feature sub-spaces.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s1",
      "label": "Query, Key, Value (QKV) Projections",
      "description": "Projecting input embeddings into Q, K, and V matrix representations using learned weight matrices.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s1_d1",
      "label": "Linear Weight Projections (W_q, W_k, W_v)",
      "description": "Multiplying input matrix X by projection matrices to generate Q = XW_q, K = XW_k, V = XW_v.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s1_d2",
      "label": "Head Dimension Split (d_model / h)",
      "description": "Splitting embedding dimensions into h parallel heads of dimension d_k = d_model / h.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s2",
      "label": "Scaled Dot-Product Attention Equation",
      "description": "Computing attention weight matrices via scaled dot-product softmax operations.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s2_d1",
      "label": "Softmax(QK^T / sqrt(d_k)) V Formula",
      "description": "Scaling dot-products by 1/sqrt(d_k) to prevent softmax gradient vanishing under large dimensions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s2_d2",
      "label": "Attention Weight Matrix Interpretation",
      "description": "Representing token-to-token contextual affinity scores as row-normalized probability distributions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s3",
      "label": "Causal Masking (Lower Triangular)",
      "description": "Masking future token positions during autoregressive decoder training.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s3_d1",
      "label": "Negative Infinity Mask Injection",
      "description": "Adding -inf to upper-triangular matrix positions prior to softmax to force zero attention probabilities.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s3_d2",
      "label": "Autoregressive Property Guarantee",
      "description": "Ensuring token predictions depend strictly on preceding token sequence contexts.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s4",
      "label": "Multi-Head Output Projection (W_o)",
      "description": "Combining concatenated head outputs back into target model embedding dimensions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s4_d1",
      "label": "Concatenation of Head Matrices",
      "description": "Concatenating h individual head output matrices [head_1, ..., head_h] along feature dimensions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s4_d2",
      "label": "Final Linear Projection Matrix W_o",
      "description": "Multiplying concatenated heads by W_o to blend multi-head representations.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s5",
      "label": "Attention Dropout Regularization",
      "description": "Applying random dropout masks to attention weight matrices during training.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s5_d1",
      "label": "Attention Score Zeroing",
      "description": "Randomly zeroing out attention probability entries with probability p to prevent co-adaptation.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t1_s5_d2",
      "label": "Scaling Factor Compensation (1 / (1-p))",
      "description": "Scaling non-zero attention weights by 1/(1-p) to preserve expected matrix energy.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2",
      "label": "FlashAttention & GPU Memory Hierarchy",
      "description": "IO-aware exact attention algorithm optimizing GPU High Bandwidth Memory (HBM) and SRAM access.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s1",
      "label": "GPU HBM vs SRAM Memory Tradeoffs",
      "description": "Understanding memory bandwidth bottlenecks between slow GPU HBM and fast on-chip SRAM.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s1_d1",
      "label": "HBM Bandwidth Limits (1.5-3.0 TB/s)",
      "description": "Identifying HBM memory read/write latency as the primary bottleneck in standard attention.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s1_d2",
      "label": "SRAM Speed Advantage (19 TB/s)",
      "description": "Leveraging fast on-chip SRAM (100-200KB per SM) to perform local matrix multiplications.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s2",
      "label": "Tiling & Block-wise Attention Computation",
      "description": "Partitioning Q, K, V matrices into sub-blocks that fit entirely within SRAM memory.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s2_d1",
      "label": "Q Block (B_r) and K/V Block (B_c) Sizing",
      "description": "Configuring block sizes based on available SRAM capacity per Streaming Multiprocessor.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s2_d2",
      "label": "Outer-Loop Outer-Product Iterations",
      "description": "Iterating over Q blocks in outer loops and K/V blocks in inner loops to compute partial attention.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s3",
      "label": "Online Softmax Rescaling Technique",
      "description": "Computing exact softmax outputs incrementally across matrix blocks without storing full N x N matrices.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s3_d1",
      "label": "Running Max (m) and Running Sum (l) Tracking",
      "description": "Tracking max values m and normalizers l per row to update partial softmax results.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s3_d2",
      "label": "Rescaling Partial Sum Accumulators",
      "description": "Rescaling previous block outputs by exp(m_old - m_new) when merging new block attention.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s4",
      "label": "FlashAttention-2 Speedups",
      "description": "Optimizing work partitioning across GPU Streaming Multiprocessors and warp scheduling.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s4_d1",
      "label": "Parallelization Over Sequence Length",
      "description": "Distributing sequence dimension blocks across SMs to maximize GPU compute utilization.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s4_d2",
      "label": "Non-MatMul Operation Reduction",
      "description": "Reducing shared memory swaps and non-matrix multiplication instructions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s5",
      "label": "IO Complexity Analysis O(N^2 d^2 / M)",
      "description": "Mathematical reduction of GPU memory reads and writes achieved by FlashAttention.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s5_d1",
      "label": "Standard Attention IO O(N^2)",
      "description": "Standard attention writing full N x N attention matrices to HBM.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t2_s5_d2",
      "label": "FlashAttention Sub-Quadratic HBM Access",
      "description": "Reducing HBM memory reads/writes to O(N^2 d^2 / M), where M is SRAM size.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3",
      "label": "Positional Embeddings (RoPE & ALiBi)",
      "description": "Injecting token order context into self-attention matrices without absolute position lookups.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s1",
      "label": "Rotary Position Embedding (RoPE)",
      "description": "Encoding positional information by rotating query and key vector pairs in complex 2D planes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s1_d1",
      "label": "2D Rotation Matrix Multiplication",
      "description": "Multiplying 2D vector pairs by rotation matrices R_Theta,m with angle m * theta_i.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s1_d2",
      "label": "Relative Position Inner Product Property",
      "description": "Guaranteeing that <RoPE(q, m), RoPE(k, n)> depends strictly on relative offset (m - n).",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s2",
      "label": "ALiBi (Attention with Linear Biases)",
      "description": "Adding non-learned linear penalty biases directly to query-key dot products.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s2_d1",
      "label": "Linear Distance Penalty (-m * |i - j|)",
      "description": "Subtracting static slope penalties proportional to token distance |i - j| from attention scores.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s2_d2",
      "label": "Head-Specific Slope Allocation (m_h)",
      "description": "Assigning geometric slope series (1/2^1, 1/2^2, ...) across attention heads.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s3",
      "label": "Absolute Learned Positional Embeddings",
      "description": "Adding fixed or learned position vectors to token embeddings (original Transformer & GPT-2).",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s3_d1",
      "label": "Sinusoidal Positional Encoding Formulas",
      "description": "Using sin(pos / 10000^(2i/d)) and cos(pos / 10000^(2i/d)) functions for static position vectors.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s3_d2",
      "label": "Context Window Extrapolation Limits",
      "description": "Failing to generalize to sequence lengths beyond pre-training context bounds.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s4",
      "label": "RoPE Frequency Scaling & YaRN",
      "description": "Extending pre-trained RoPE context windows to 32K+ tokens via frequency interpolation.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s4_d1",
      "label": "Linear Position Interpolation (PI)",
      "description": "Compressing extended position indices into original pre-trained range by scaling theta.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s4_d2",
      "label": "YaRN (Yet Another RoPE Extrapolation)",
      "description": "Applying non-uniform scale factors across high and low frequency dimensions to preserve short-range attention.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s5",
      "label": "Relative Position Representations (T5)",
      "description": "Learning scalar bias parameters for relative token distances added to attention matrices.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s5_d1",
      "label": "Bucket Distance Assignment",
      "description": "Mapping relative token distances into logarithmic bucket indices to limit parameter count.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t3_s5_d2",
      "label": "Learned Relative Bias Parameters",
      "description": "Optimizing relative distance scalar biases during model pre-training.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4",
      "label": "Normalization Layers & Activation Functions",
      "description": "Architectural choices for stabilizing layer activations and introducing non-linearities.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s1",
      "label": "RMSNorm (Root Mean Square Normalization)",
      "description": "Computational simplification of LayerNorm normalizing by root mean square without mean centering.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s1_d1",
      "label": "RMSNorm Formula x / RMS(x) * gamma",
      "description": "Scaling input vectors by x / sqrt(1/d * sum(x_i^2) + eps) * gamma.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s1_d2",
      "label": "7-50% Speedup Over LayerNorm",
      "description": "Eliminating mean calculation passes to reduce GPU memory bandwidth consumption.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s2",
      "label": "LayerNorm (Pre-LN vs Post-LN)",
      "description": "Normalizing activations across feature dimensions with mean and variance parameters.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s2_d1",
      "label": "Pre-LayerNorm Stabilization",
      "description": "Applying LayerNorm prior to attention and MLP blocks to enable stable deep model training.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s2_d2",
      "label": "Post-LayerNorm Gradient Instability",
      "description": "Requiring strict learning rate warmups to prevent exploding gradients in deep networks.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s3",
      "label": "SwiGLU Activation Function",
      "description": "Swish-Gated Linear Unit activation providing superior empirical performance in LLaMA models.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s3_d1",
      "label": "SwiGLU Formula Swish_1(x W) * (x V)",
      "description": "Multiplying Swish-activated linear projections by parallel linear gate projections.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s3_d2",
      "label": "MLP Hidden Dimension Adjustment (8/3 d_model)",
      "description": "Adjusting hidden layer dimensions to 8/3 d_model to match parameter counts of standard GELU MLPs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s4",
      "label": "GELU (Gaussian Error Linear Unit)",
      "description": "Smooth non-linear activation weighting inputs by their standard Gaussian cumulative distribution.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s4_d1",
      "label": "GELU Approximation Formula",
      "description": "Computing 0.5x * (1 + tanh(sqrt(2/pi) * (x + 0.044715x^3))).",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s4_d2",
      "label": "Probabilistic Dropout Interpretation",
      "description": "Acting as a continuous deterministic approximation of stochastic dropout.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s5",
      "label": "DeepNorm & Residual Scaling",
      "description": "Scaling residual connections to stabilize training of 1,000+ layer Transformers.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s5_d1",
      "label": "Alpha-Scaled Residual Addition",
      "description": "Scaling residual connections by alpha before adding LayerNorm outputs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t4_s5_d2",
      "label": "Initialization Parameter Bound Rules",
      "description": "Scaling weight initialization bounds inversely with network depth.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5",
      "description": "Detailed first-principles mechanics for Transformer Architecture & Attention Mechanisms topic 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s1",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Transformer Architecture & Attention Mechanisms Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s1_d1",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s1_d2",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s2",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Transformer Architecture & Attention Mechanisms Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s2_d1",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s2_d2",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s3",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Transformer Architecture & Attention Mechanisms Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s3_d1",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s3_d2",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s4",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Transformer Architecture & Attention Mechanisms Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s4_d1",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s4_d2",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s5",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Transformer Architecture & Attention Mechanisms Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s5_d1",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t5_s5_d2",
      "label": "Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6",
      "description": "Detailed first-principles mechanics for Transformer Architecture & Attention Mechanisms topic 6.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s1",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Transformer Architecture & Attention Mechanisms Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s1_d1",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s1_d2",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s2",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Transformer Architecture & Attention Mechanisms Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s2_d1",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s2_d2",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s3",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Transformer Architecture & Attention Mechanisms Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s3_d1",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s3_d2",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s4",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Transformer Architecture & Attention Mechanisms Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s4_d1",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s4_d2",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s5",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Transformer Architecture & Attention Mechanisms Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s5_d1",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p1_t6_s5_d2",
      "label": "Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transformer Architecture & Attention Mechanisms Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2",
      "label": "Pre-training, Alignment & Fine-Tuning",
      "description": "Methods for training foundational LLMs, adapting weights efficiently via LoRA, and aligning behaviors using DPO/RLHF.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1",
      "label": "Parameter-Efficient Fine-Tuning (LoRA & QLoRA)",
      "description": "Fine-tuning large language models by updating low-rank decomposition matrices while freezing base weights.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s1",
      "label": "LoRA Matrix Factorization (W = W_0 + (alpha/r) * AB)",
      "description": "Decomposing weight updates into low-rank matrices A and B of rank r.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s1_d1",
      "label": "Low-Rank Matrix Dimensions (d x r and r x d)",
      "description": "Representing updates using rank r (e.g. r=8 or r=16) where r << d.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s1_d2",
      "label": "Alpha Scaling Factor (alpha / r)",
      "description": "Scaling low-rank update outputs by alpha/r to stabilize training across varying ranks.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s2",
      "label": "Zero-Memory Weight Merging at Inference",
      "description": "Fusing trained LoRA matrices back into base weights for zero-latency inference.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s2_d1",
      "label": "W_final = W_0 + (alpha/r) * AB Addition",
      "description": "Adding computed AB matrices directly to base weights W_0 to eliminate runtime LoRA overhead.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s2_d2",
      "label": "Dynamic Multi-Tenant LoRA Swapping",
      "description": "Swapping small LoRA adapter weights in memory dynamically per API request.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s3",
      "label": "QLoRA 4-bit NormalFloat (NF4) Quantization",
      "description": "Quantizing base model weights to 4-bit NormalFloat while training 16-bit LoRA adapters.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s3_d1",
      "label": "NF4 Information-Theoretical Quantization",
      "description": "Constructing 4-bit data types with equal probability mass distribution for zero-mean normal weights.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s3_d2",
      "label": "Double Quantization (DQ)",
      "description": "Quantizing quantization constants themselves to save an additional 0.37 bits per parameter.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s4",
      "label": "Paged Optimizers & CPU Offloading",
      "description": "Managing CUDA memory spikes during QLoRA training using unified memory.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s4_d1",
      "label": "CUDA Unified Memory Page Allocations",
      "description": "Evicting optimizer state pages automatically to CPU RAM during memory-intensive backward passes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s4_d2",
      "label": "Out-of-Memory (OOM) Spike Prevention",
      "description": "Eliminating training crashes during long sequence processing.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s5",
      "label": "Target Module Selection Strategy",
      "description": "Selecting transformer weight matrices (q_proj, v_proj, k_proj, o_proj, gate_proj) for LoRA injection.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s5_d1",
      "label": "All-Linear Module LoRA Injection",
      "description": "Applying LoRA adapters to all attention and MLP linear projection layers for maximum accuracy.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t1_s5_d2",
      "label": "Parameter vs Performance Efficiency",
      "description": "Achieving 99% full fine-tuning performance using less than 1% trainable parameters.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2",
      "label": "Direct Preference Optimization (DPO)",
      "description": "Aligning LLMs with human preferences without training explicit reward models or using PPO.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s1",
      "label": "DPO Closed-Form Loss Function",
      "description": "Deriving preference optimization loss directly from implicit reward functions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s1_d1",
      "label": "L_DPO Log-Ratio Softmax Formula",
      "description": "Loss = -E[log sigma(beta * log(pi_theta(y_w|x)/pi_ref(y_w|x)) - beta * log(pi_theta(y_l|x)/pi_ref(y_l|x)))].",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s1_d2",
      "label": "Reference Model Policy (pi_ref) Baseline",
      "description": "Penalizing policy model pi_theta when it deviates significantly from reference policy pi_ref.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s2",
      "label": "Elimination of PPO Complexity & Instability",
      "description": "Bypassing actor-critic architectures, value networks, and RL hyperparameter tuning.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s2_d1",
      "label": "Stable Supervised Loss Formulation",
      "description": "Replacing complex RL policy gradient loops with stable binary cross-entropy loss.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s2_d2",
      "label": "50% GPU Memory Footprint Reduction",
      "description": "Eliminating the need to hold separate reward model and value model weights in GPU memory.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s3",
      "label": "Beta Hyperparameter Sensitivity",
      "description": "Controlling the strength of the KL-divergence penalty relative to the reference policy.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s3_d1",
      "label": "Beta Parameter Bounds (0.1 to 0.5)",
      "description": "Setting beta values to balance preference alignment against policy model drift.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s3_d2",
      "label": "Over-Optimization & Degeneracy Warnings",
      "description": "Preventing policy collapse where models emit repetitive high-probability tokens.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s4",
      "label": "KTO (Kahneman-Tversky Optimization)",
      "description": "Preference alignment using binary thumbs-up/thumbs-down signals without paired data.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s4_d1",
      "label": "Unpaired Preference Learning",
      "description": "Optimizing model outputs directly from single good or bad response signals.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s4_d2",
      "label": "Prospect Theory Loss Weighting",
      "description": "Weighting losses asynchronously based on utility and loss aversion principles.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s5",
      "label": "IPO (Identity Preference Optimization)",
      "description": "Adding explicit regularization to DPO loss to prevent over-fitting preference pairs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s5_d1",
      "label": "Squared Error Loss Formulation",
      "description": "Replacing log-sigmoid loss with squared log-ratio loss to enforce non-linear regularization.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t2_s5_d2",
      "label": "Self-Play Preference Dataset Generation",
      "description": "Generating preference pairs using model self-play and automated LLM judge scoring.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3",
      "label": "RLHF & PPO Alignment Architecture",
      "description": "Reinforcement Learning from Human Feedback using Proximal Policy Optimization and Reward Models.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s1",
      "label": "Reward Model (RM) Training Protocol",
      "description": "Training scalar reward models on human pairwise preference datasets.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s1_d1",
      "label": "Pairwise Cross-Entropy Loss (r(x, y_w) vs r(x, y_l))",
      "description": "Loss = -E[log sigma(r_theta(x, y_w) - r_theta(x, y_l))].",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s1_d2",
      "label": "Scalar Reward Score Output",
      "description": "Outputting scalar quality scores for target prompt-response completions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s2",
      "label": "PPO Actor-Critic Network Architecture",
      "description": "Deploying four model instances concurrently: Actor, Critic, Reward Model, and Reference Model.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s2_d1",
      "label": "Actor (Policy) & Critic (Value) Roles",
      "description": "Actor generating completions while Critic estimates expected cumulative future rewards.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s2_d2",
      "label": "GPU Memory Partitioning Overhead",
      "description": "Distributing four large model weights across multi-node GPU clusters.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s3",
      "label": "PPO Clipped Objective & Advantage Estimation",
      "description": "Bounding policy updates to prevent catastrophic policy degradation.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s3_d1",
      "label": "Clipped Surrogate Objective Function",
      "description": "Clipping probability ratios r_t(theta) within [1-eps, 1+eps] bounds.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s3_d2",
      "label": "Generalized Advantage Estimation (GAE)",
      "description": "Calculating advantage estimates A_t using temporal difference error decay.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s4",
      "label": "KL Divergence Penalty Control",
      "description": "Penalizing policy model drift from the initial SFT reference model.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s4_d1",
      "label": "Per-Token KL Penalty Calculation",
      "description": "Subtracting beta * KL(pi_theta || pi_ref) from reward scores at each token step.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s4_d2",
      "label": "Dynamic Adaptive KL Controllers",
      "description": "Adjusting beta automatically during training to keep target KL divergence bounded.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s5",
      "label": "Reward Hacking & Exploitation Safeguards",
      "description": "Mitigating scenarios where policy models exploit reward model inaccuracies.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s5_d1",
      "label": "Verbosity Bias Exploitation",
      "description": "Detecting policy tendencies to generate unnecessarily verbose responses to inflate scores.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t3_s5_d2",
      "label": "Ensemble Reward Model Scoring",
      "description": "Averaging predictions across multiple reward models to smooth out scoring anomalies.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4",
      "label": "Quantization (AWQ, GGUF & GPTQ)",
      "description": "Compressing model weights to 4-bit or 8-bit precision to enable low-memory inference.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s1",
      "label": "Activation-Aware Weight Quantization (AWQ)",
      "description": "Protecting salient weight channels by analyzing activation magnitude distributions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s1_d1",
      "label": "Salient Channel Protection (Top 1%)",
      "description": "Identifying weight channels corresponding to high-magnitude activation channels.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s1_d2",
      "label": "Per-Channel Per-Tensor Scaling Factors",
      "description": "Searching for optimal per-channel scaling factors s to minimize quantization error.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s2",
      "label": "GPTQ (Layer-Wise Post-Training Quantization)",
      "description": "Quantizing weights row-by-row using Second-Order Hessian error compensation.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s2_d1",
      "label": "Inverse Hessian Matrix (H^-1) Computation",
      "description": "Updating remaining unquantized weights using inverse Hessian values to compensate for error.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s2_d2",
      "label": "Sub-1-Bit Error Quantization Speeds",
      "description": "Quantizing 70B models in under 4 hours on single GPU instances.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s3",
      "label": "GGUF / GGML Binary Format (llama.cpp)",
      "description": "Single-file binary format optimized for CPU/Metal inference with quantized block structures.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s3_d1",
      "label": "k-Quants Block Structure (Q4_K_M, Q5_K_S)",
      "description": "Combining 4-bit or 5-bit weight blocks with 6-bit scale factors to balance accuracy and memory.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s3_d2",
      "label": "CPU SIMD & Apple Metal Acceleration",
      "description": "Executing ARM Neon, AVX2, and Metal matrix vector kernels directly on quantized blocks.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s4",
      "label": "FP8 (E4M3 vs E5M2) Floating Point Formats",
      "description": "Utilizing 8-bit floating point precision supported natively on NVIDIA Hopper architectures.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s4_d1",
      "label": "E4M3 Format (Forward Pass Weights/Activations)",
      "description": "Using 1 sign, 4 exponent, 3 mantissa bits for higher numerical precision.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s4_d2",
      "label": "E5M2 Format (Gradients & Backward Pass)",
      "description": "Using 1 sign, 5 exponent, 2 mantissa bits to provide wider dynamic range for gradients.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s5",
      "label": "Per-Group & Per-Channel Quantization Granularity",
      "description": "Configuring scale factor grouping sizes (group_size=32, 64, 128).",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s5_d1",
      "label": "Group Size vs Memory Overhead Tradeoffs",
      "description": "Smaller group sizes (group_size=32) improving accuracy while increasing scale factor memory.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t4_s5_d2",
      "label": "Symmetric vs Asymmetric Quantization",
      "description": "Mapping weights to zero-centered integer ranges vs using explicit zero-point offsets.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5",
      "description": "Detailed first-principles mechanics for Pre-training, Alignment & Fine-Tuning topic 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s1",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Pre-training, Alignment & Fine-Tuning Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s1_d1",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s1_d2",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s2",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Pre-training, Alignment & Fine-Tuning Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s2_d1",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s2_d2",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s3",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Pre-training, Alignment & Fine-Tuning Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s3_d1",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s3_d2",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s4",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Pre-training, Alignment & Fine-Tuning Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s4_d1",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s4_d2",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s5",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Pre-training, Alignment & Fine-Tuning Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s5_d1",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t5_s5_d2",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6",
      "description": "Detailed first-principles mechanics for Pre-training, Alignment & Fine-Tuning topic 6.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s1",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Pre-training, Alignment & Fine-Tuning Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s1_d1",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s1_d2",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s2",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Pre-training, Alignment & Fine-Tuning Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s2_d1",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s2_d2",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s3",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Pre-training, Alignment & Fine-Tuning Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s3_d1",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s3_d2",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s4",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Pre-training, Alignment & Fine-Tuning Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s4_d1",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s4_d2",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s5",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Pre-training, Alignment & Fine-Tuning Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s5_d1",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p2_t6_s5_d2",
      "label": "Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pre-training, Alignment & Fine-Tuning Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3",
      "label": "RAG Infrastructure & Vector Indexing",
      "description": "Systems for indexing, retrieving, and re-ranking external knowledge for LLM context augmentation.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1",
      "label": "Vector Embeddings & Distance Metrics",
      "description": "Mapping textual concepts into dense continuous vector spaces and measuring geometric similarity.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s1",
      "label": "Cosine Similarity Metric",
      "description": "Measuring the cosine of the angle between two vector directions regardless of magnitude.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s1_d1",
      "label": "Formula cos(theta) = (A . B) / (||A|| ||B||)",
      "description": "Computing dot products normalized by Euclidean vector lengths.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s1_d2",
      "label": "Normalized Vector Optimization (A . B)",
      "description": "Pre-normalizing vectors to unit length (||A|| = 1) so cosine similarity reduces to simple dot product.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s2",
      "label": "Euclidean Distance (L2 Norm)",
      "description": "Measuring straight-line geometric distance between two vector endpoints.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s2_d1",
      "label": "Formula L2 = sqrt(sum((A_i - B_i)^2))",
      "description": "Calculating square root of summed squared coordinate differences.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s2_d2",
      "label": "Inverse Distance Similarity Mapping",
      "description": "Converting L2 distances to similarity scores using 1 / (1 + L2).",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s3",
      "label": "Dot Product (Inner Product Metric)",
      "description": "Measuring vector alignment weighted by magnitude.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s3_d1",
      "label": "Unnormalized Vector Magnitude Sensitivity",
      "description": "Reflecting both direction and length; ideal for models trained with inner-product objectives.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s3_d2",
      "label": "SIMD AVX-512 Dot Product Acceleration",
      "description": "Executing 512-bit vector dot products in single CPU instruction cycles.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s4",
      "label": "Embedding Model Families (bge, e5, openai-v3)",
      "description": "Selecting embedding architectures based on dimensionality, context length, and benchmark performance.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s4_d1",
      "label": "Matryoshka Representation Learning (MRL)",
      "description": "Truncating 1536-dim embeddings to 256-dim without losing critical semantic information.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s4_d2",
      "label": "Instruction-Tuned Embeddings (e5-instruct)",
      "description": "Prepending task instructions (\"Represent query for retrieval:\") to optimize similarity.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s5",
      "label": "Chunking Strategies & Overlap Rules",
      "description": "Partitioning source documents into optimal text chunks for vector indexing.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s5_d1",
      "label": "Recursive Character Text Splitting",
      "description": "Splitting text hierarchy along paragraphs (\n\n), sentences (\n), and spaces.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t1_s5_d2",
      "label": "Semantic Window Overlap Tuning (10-20%)",
      "description": "Maintaining 15% token overlap between adjacent chunks to preserve boundary context.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2",
      "label": "HNSW Graph Indexing Algorithm",
      "description": "Hierarchical Navigable Small World graphs providing ultra-fast approximate nearest neighbor (ANN) search.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s1",
      "label": "Multi-Layer Graph Topology",
      "description": "Constructing a hierarchy of skip-list-like graph layers for coarse-to-fine search.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s1_d1",
      "label": "Top-Layer Coarse Routing Graphs",
      "description": "Routing queries over long-distance edges at top sparse layers.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s1_d2",
      "label": "Bottom-Layer Dense Local Graphs",
      "description": "Descending layer-by-layer to perform fine-grained local neighbor exploration.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s2",
      "label": "Greedy Routing Algorithm Execution",
      "description": "Traversing graph nodes by evaluating neighbor distances relative to target query vectors.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s2_d1",
      "label": "Local Minimum Termination",
      "description": "Moving to adjacent nodes closest to the query until no nearer neighbor exists in the current layer.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s2_d2",
      "label": "Layer Transition Descent",
      "description": "Using the local minimum node as the entry point for the next lower graph layer.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s3",
      "label": "M (Max Links) & efConstruction Hyperparameters",
      "description": "Controlling graph connectivity and index construction thoroughness.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s3_d1",
      "label": "M Parameter Bounds (16 to 64)",
      "description": "Setting max bi-directional connections per node; higher M improves recall but increases memory.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s3_d2",
      "label": "efConstruction Search Buffer Size",
      "description": "Configuring priority queue size during indexing; higher values build better graph quality.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s4",
      "label": "efSearch Runtime Query Tuning",
      "description": "Trading query latency against recall accuracy at search execution time.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s4_d1",
      "label": "Dynamic Priority Queue Sizing",
      "description": "Setting efSearch bounds (e.g. efSearch=64) to evaluate candidate neighbors during traversal.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s4_d2",
      "label": "Recall vs QPS Performance Curves",
      "description": "Achieving 98% recall at over 10,000 queries per second (QPS) per core.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s5",
      "label": "In-Memory Index Footprint & Product Quantization",
      "description": "Compressing HNSW graph vector payloads using Product Quantization (PQ).",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s5_d1",
      "label": "Sub-Vector Codebook Quantization",
      "description": "Dividing 1536-dim vectors into 64 sub-vectors mapped to 256 centroid codes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t2_s5_d2",
      "label": "95% RAM Reduction with Scalar Quantization (SQ8)",
      "description": "Quantizing 32-bit float vectors to 8-bit integers to fit billions of vectors in RAM.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3",
      "label": "Hybrid Search & Reciprocal Rank Fusion (RRF)",
      "description": "Combining keyword BM25 sparse search with dense vector similarity search.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s1",
      "label": "BM25 Okapi Sparse Search Formula",
      "description": "Lexical search algorithm scoring relevance based on term frequency and inverse document frequency.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s1_d1",
      "label": "Term Frequency Saturated Scaling (k1)",
      "description": "Bounding term frequency impact using parameter k1 (typically 1.2 to 2.0).",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s1_d2",
      "label": "Document Length Normalization (b)",
      "description": "Penalizing long documents using parameter b (typically 0.75) based on average document length.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s2",
      "label": "Reciprocal Rank Fusion (RRF) Scoring",
      "description": "Combining ranked result lists from separate retrieval algorithms without score normalization.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s2_d1",
      "label": "RRF Score Formula RRF(d) = sum(1 / (k + rank_i(d)))",
      "description": "Summing reciprocal ranks across keyword and dense search results using constant k (typically 60).",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s2_d2",
      "label": "Score Normalization Independence",
      "description": "Merging rankings without needing to normalize scale differences between BM25 scores and cosine distances.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s3",
      "label": "Sparse-Dense Hybrid Query Routing",
      "description": "Executing parallel sparse and dense queries against vector databases.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s3_d1",
      "label": "Exact Match Keyword Protection",
      "description": "Ensuring specific part numbers, IDs, and proper nouns match via BM25 sparse indexes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s3_d2",
      "label": "Semantic Intent Capture",
      "description": "Capturing conceptual meaning via dense vector HNSW graph searches.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s4",
      "label": "SPLADE Learned Sparse Representations",
      "description": "Generating sparse term weight vectors using BERT token expansion models.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s4_d1",
      "label": "Vocabulary Token Expansion",
      "description": "Expanding queries with relevant vocabulary terms not explicitly present in original query text.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s4_d2",
      "label": "Inverted Index Compatibility",
      "description": "Storing high-dimensional sparse SPLADE vectors inside standard Lucene/Elasticsearch inverted indexes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s5",
      "label": "Conjunctive (AND) vs Disjunctive (OR) Filtering",
      "description": "Applying metadata filters to hybrid search queries before or after vector ANN search.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s5_d1",
      "label": "Single-Stage Vector Metadata Filtering",
      "description": "Filtering graph nodes during HNSW traversal to prevent invalid candidate selection.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t3_s5_d2",
      "label": "Post-Filtering Recall Degradation",
      "description": "Avoiding post-filtering on top-k ANN results to prevent empty result sets.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4",
      "label": "Re-Ranking Models (Cross-Encoders)",
      "description": "Second-stage retrieval optimization using deep Cross-Encoder models to re-order top candidates.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s1",
      "label": "Bi-Encoder vs Cross-Encoder Architecture",
      "description": "Comparing independent embedding models against full joint-attention re-rankers.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s1_d1",
      "label": "Bi-Encoder Independent Embedding Limits",
      "description": "Bi-encoders computing query and document embeddings separately, losing fine-grained cross-token attention.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s1_d2",
      "label": "Cross-Encoder Full Attention Matrix",
      "description": "Passing [CLS] Query [SEP] Document sequences into Transformer models for complete cross-attention.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s2",
      "label": "Two-Stage Retrieval Pipeline Topology",
      "description": "Retrieving top 100 candidates via fast ANN search, then re-ranking top 10 using Cross-Encoders.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s2_d1",
      "label": "Stage 1 ANN Candidate Generation (Top-100)",
      "description": "Fetching 100 candidate documents in sub-10ms using vector indexes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s2_d2",
      "label": "Stage 2 Cross-Encoder Scoring (Top-10)",
      "description": "Scoring 100 query-document pairs in 50ms to yield highly accurate top-10 rankings.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s3",
      "label": "Cohere Rerank & BGE-Reranker Models",
      "description": "Specialized cross-encoder models trained specifically for relevance scoring.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s3_d1",
      "label": "NDCG@10 Benchmark Improvements",
      "description": "Improving Normalized Discounted Cumulative Gain (NDCG) by 15-35% over raw vector search.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s3_d2",
      "label": "Multi-Lingual Re-Ranking Capabilities",
      "description": "Scoring cross-lingual query-document pairs accurately across languages.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s4",
      "label": "ColBERT Late Interaction Architecture",
      "description": "Token-level late interaction model balancing Cross-Encoder accuracy with Bi-Encoder speed.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s4_d1",
      "label": "MaxSim Token Attention Summation",
      "description": "Computing maximum similarity dot products across all query and document token vectors.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s4_d2",
      "label": "PLAID Fast Engine Indexing",
      "description": "Pruning document tokens during late interaction to score thousands of documents in sub-20ms.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s5",
      "label": "Re-Ranking Latency Budget Allocation",
      "description": "Managing CPU/GPU compute budgets for real-time re-ranking pipelines.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s5_d1",
      "label": "Batch Size Truncation Bounds",
      "description": "Limiting re-ranking batch sizes to 50 documents under strict 100ms API SLA limits.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t4_s5_d2",
      "label": "ONNX Runtime & TensorRT Optimization",
      "description": "Compiling cross-encoder models to ONNX runtime for 3x CPU inference acceleration.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5",
      "label": "RAG Infrastructure & Vector Indexing Topic 5",
      "description": "Detailed first-principles mechanics for RAG Infrastructure & Vector Indexing topic 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s1",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for RAG Infrastructure & Vector Indexing Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s1_d1",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s1_d2",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s2",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for RAG Infrastructure & Vector Indexing Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s2_d1",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s2_d2",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s3",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for RAG Infrastructure & Vector Indexing Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s3_d1",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s3_d2",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s4",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for RAG Infrastructure & Vector Indexing Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s4_d1",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s4_d2",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s5",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for RAG Infrastructure & Vector Indexing Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s5_d1",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t5_s5_d2",
      "label": "RAG Infrastructure & Vector Indexing Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6",
      "label": "RAG Infrastructure & Vector Indexing Topic 6",
      "description": "Detailed first-principles mechanics for RAG Infrastructure & Vector Indexing topic 6.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s1",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for RAG Infrastructure & Vector Indexing Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s1_d1",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s1_d2",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s2",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for RAG Infrastructure & Vector Indexing Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s2_d1",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s2_d2",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s3",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for RAG Infrastructure & Vector Indexing Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s3_d1",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s3_d2",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s4",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for RAG Infrastructure & Vector Indexing Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s4_d1",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s4_d2",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s5",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for RAG Infrastructure & Vector Indexing Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s5_d1",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p3_t6_s5_d2",
      "label": "RAG Infrastructure & Vector Indexing Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RAG Infrastructure & Vector Indexing Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4",
      "label": "Inference Acceleration & Serving Engines",
      "description": "Systems for high-throughput low-latency LLM serving using PagedAttention, speculative decoding, and optimized KV caching.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1",
      "label": "vLLM Engine & PagedAttention",
      "description": "High-throughput LLM serving engine introducing virtual memory paging for KV cache management.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s1",
      "label": "KV Cache Memory Fragmentation Problem",
      "description": "Addressing 60-80% memory waste caused by static contiguous KV cache allocations.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s1_d1",
      "label": "Internal Fragmentation Waste",
      "description": "Allocating fixed max_seq_len memory blocks when actual requests use fraction of capacity.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s1_d2",
      "label": "External Fragmentation Gaps",
      "description": "Memory fragmentation preventing allocation of contiguous memory blocks for new requests.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s2",
      "label": "PagedAttention Virtual Memory Abstraction",
      "description": "Partitioning KV cache into fixed-size physical memory blocks managed by block tables.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s2_d1",
      "label": "Physical Block Allocation (16-32 tokens)",
      "description": "Storing key and value tensors in non-contiguous physical blocks of 16 or 32 tokens.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s2_d2",
      "label": "Logical-to-Physical Block Table Mapping",
      "description": "Translating logical sequence token positions to physical GPU RAM block addresses.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s3",
      "label": "Zero Memory Waste Guarantee (< 1%)",
      "description": "Eliminating memory fragmentation to enable 2-4x higher batching concurrency.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s3_d1",
      "label": "Near-Zero Waste Allocation",
      "description": "Allocating physical memory blocks on-demand only as new tokens are generated.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s3_d2",
      "label": "Near-Optimal GPU Memory Utilization",
      "description": "Utilizing >96% of total GPU VRAM for active KV cache blocks.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s4",
      "label": "Copy-on-Write Parallel Sampling",
      "description": "Sharing physical KV cache blocks across multiple output candidate beams.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s4_d1",
      "label": "Reference Counting Block Management",
      "description": "Incrementing block reference counts during parallel decoding (e.g. beam search).",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s4_d2",
      "label": "Copy-on-Write Block Forking",
      "description": "Forking physical blocks only when candidate sequences generate diverging tokens.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s5",
      "label": "Continuous Batching (Iteration-Level Scheduling)",
      "description": "Scheduling requests at individual token iteration boundaries rather than sequence completions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s5_d1",
      "label": "Dynamic Request Insertion & Removal",
      "description": "Inserting new requests into active batches immediately as completed requests finish.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t1_s5_d2",
      "label": "GPU Compute Saturation",
      "description": "Eliminating idle GPU compute cycles caused by static sequence batching delays.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2",
      "label": "TensorRT-LLM & Speculative Decoding",
      "description": "NVIDIA C++ inference engine and draft-model speculative generation algorithms.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s1",
      "label": "Speculative Decoding Draft-Verification Loop",
      "description": "Using a small draft model to generate candidate tokens verified in parallel by a target model.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s1_d1",
      "label": "Small Draft Model Speculative Generation (K tokens)",
      "description": "Generating K candidate tokens quickly using a fast small model (e.g. 1B params).",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s1_d2",
      "label": "Target Model Parallel Verification Pass",
      "description": "Executing a single forward pass on the target model (e.g. 70B params) to verify all K tokens in parallel.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s2",
      "label": "Modified Rejection Sampling Acceptance Protocol",
      "description": "Accepting draft tokens probabilistically while preserving target model output distribution.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s2_d1",
      "label": "Acceptance Probability Ratio (p / q)",
      "description": "Accepting draft token x with probability min(1, p(x) / q(x)).",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s2_d2",
      "label": "Resampled Fallback Token Generation",
      "description": "Sampling replacement tokens from max(0, p - q) distribution when draft tokens are rejected.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s3",
      "label": "2-3x Latency Reduction Bounds",
      "description": "Accelerating single-batch generation speeds without modifying output probability distributions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s3_d1",
      "label": "High Draft Acceptance Rate Target (> 70%)",
      "description": "Achieving 2-3x speedups when draft model aligns closely with target model probabilities.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s3_d2",
      "label": "Zero Loss of Target Model Accuracy",
      "description": "Guaranteeing output distributions remain mathematically identical to target model standalone runs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s4",
      "label": "TensorRT-LLM In-Flight Batching",
      "description": "NVIDIA C++ runtime optimizing kernel execution for high-concurrency LLM inference.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s4_d1",
      "label": "Custom C++ CUDA Graph Execution",
      "description": "Executing pre-compiled CUDA graphs to eliminate Python runtime launch overhead.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s4_d2",
      "label": "Tensor Parallelism & Pipeline Parallelism",
      "description": "Splitting model layers across multi-GPU nodes using Megatron-LM tensor parallel splits.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s5",
      "label": "Medusa Multi-Head Speculative Generation",
      "description": "Adding multiple decoding heads to the target model to generate speculative tokens without draft models.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s5_d1",
      "label": "Top-K Tree Attention Mask Construction",
      "description": "Generating multiple candidate token trees and verifying them in single forward passes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t2_s5_d2",
      "label": "Draft Model Infrastructure Elimination",
      "description": "Eliminating the complexity of serving separate draft model instances.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3",
      "label": "KV Cache Optimization (MQA, GQA & Compression)",
      "description": "Architectural attention variants and compression schemes reducing KV cache memory footprint.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s1",
      "label": "Multi-Query Attention (MQA)",
      "description": "Sharing a single Key and Value head across all Query attention heads.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s1_d1",
      "label": "Single K/V Head Allocation",
      "description": "Reducing KV cache memory footprint by factor of h (number of query heads).",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s1_d2",
      "label": "h-Fold Memory Bandwidth Reduction",
      "description": "Drastically reducing HBM memory load requirements during autoregressive decoding.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s2",
      "label": "Grouped-Query Attention (GQA)",
      "description": "Partitioning query heads into g groups, each sharing single Key and Value heads.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s2_d1",
      "label": "Balanced Tradeoff (e.g. 8 KV heads for 64 Q heads)",
      "description": "Achieving MQA speed while maintaining MHSA model quality and expressiveness.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s2_d2",
      "label": "LLaMA-2 70B & LLaMA-3 Standard Adoption",
      "description": "Standardizing GQA across open-weights LLMs to enable 8x larger context batching.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s3",
      "label": "KV Cache Quantization (INT8 & INT4)",
      "description": "Quantizing stored Key and Value tensors in memory to 8-bit or 4-bit precision.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s3_d1",
      "label": "Per-Head Dynamic Scale Factors",
      "description": "Quantizing KV Cache tensors to INT8 or FP8 using per-head dynamic scaling.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s3_d2",
      "label": "50-75% VRAM Memory Savings",
      "description": "Halving KV cache VRAM footprint to allow 2-4x longer context windows per GPU.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s4",
      "label": "StreamingLLM Sink Tokens & Eviction",
      "description": "Enabling infinite sequence decoding by retaining initial sink tokens and sliding windows.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s4_d1",
      "label": "Initial 4 Sink Tokens Retention",
      "description": "Retaining initial sequence tokens (pos 0-3) to preserve attention score distribution stability.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s4_d2",
      "label": "Sliding Local Window Eviction",
      "description": "Evicting intermediate tokens while retaining recent context tokens to keep KV cache fixed size.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s5",
      "label": "Prompt Caching (Prefix Caching)",
      "description": "Caching pre-computed KV cache states for shared prompt prefixes across requests.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s5_d1",
      "label": "System Prompt Hash Matching",
      "description": "Matching system prompt prefixes against cached physical KV block tables.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t3_s5_d2",
      "label": "90% Time-to-First-Token (TTFT) Reduction",
      "description": "Bypassing prefill phase execution for multi-turn chat sessions and long document prompts.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4",
      "label": "Serving Metrics & Production SLAs",
      "description": "Key performance indicators for evaluating LLM inference engines in production.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s1",
      "label": "Time-to-First-Token (TTFT)",
      "description": "Latency duration between client request submission and first output token emission.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s1_d1",
      "label": "Prefill Phase Execution Latency",
      "description": "Measuring prompt processing time required to compute initial QKV matrices and KV cache.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s1_d2",
      "label": "Sub-500ms TTFT SLA Bounds",
      "description": "Optimizing prefill compute to meet interactive chat user experience SLAs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s2",
      "label": "Time-per-Output-Token (TPOT)",
      "description": "Average generation latency duration per intermediate output token.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s2_d1",
      "label": "Decode Phase Memory Bandwidth Bound",
      "description": "Measuring autoregressive single-token generation speed (target 30-80 tokens/sec).",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s2_d2",
      "label": "Inter-Token Jitter Minimization",
      "description": "Ensuring smooth streaming output text delivery without stuttering pauses.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s3",
      "label": "Total Generation Throughput (Tokens / Sec / GPU)",
      "description": "Total output tokens generated per second aggregated across all concurrent batches.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s3_d1",
      "label": "Batch Size Concurrency Saturation",
      "description": "Maximizing GPU memory bandwidth utilization by processing high batch sizes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s3_d2",
      "label": "Cost-Per-Million Tokens Benchmark",
      "description": "Evaluating hardware infrastructure efficiency ($/1M tokens) across serving engines.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s4",
      "label": "Prefill vs Decode Phase Disaggregation",
      "description": "Separating prefill compute nodes from decode compute nodes in specialized clusters.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s4_d1",
      "label": "Compute-Bound Prefill Isolation",
      "description": "Routing prefill requests to compute-dense GPUs (e.g. H100) for fast prompt processing.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s4_d2",
      "label": "Memory-Bound Decode Offloading",
      "description": "Transferring generated KV cache over fast interconnects (NVLink) to decode-optimized worker nodes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s5",
      "label": "Graceful Overload Shedding & Queuing",
      "description": "Managing request surges when GPU VRAM limits are fully saturated.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s5_d1",
      "label": "HTTP 429 Rate Limit Rejection",
      "description": "Rejecting new incoming requests when waiting queues exceed SLA bounds.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t4_s5_d2",
      "label": "Priority Queue Scheduling Rules",
      "description": "Prioritizing interactive streaming requests over background offline batch jobs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5",
      "label": "Inference Acceleration & Serving Engines Topic 5",
      "description": "Detailed first-principles mechanics for Inference Acceleration & Serving Engines topic 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s1",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Inference Acceleration & Serving Engines Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s1_d1",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s1_d2",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s2",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Inference Acceleration & Serving Engines Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s2_d1",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s2_d2",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s3",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Inference Acceleration & Serving Engines Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s3_d1",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s3_d2",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s4",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Inference Acceleration & Serving Engines Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s4_d1",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s4_d2",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s5",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Inference Acceleration & Serving Engines Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s5_d1",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t5_s5_d2",
      "label": "Inference Acceleration & Serving Engines Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6",
      "label": "Inference Acceleration & Serving Engines Topic 6",
      "description": "Detailed first-principles mechanics for Inference Acceleration & Serving Engines topic 6.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s1",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Inference Acceleration & Serving Engines Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s1_d1",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s1_d2",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s2",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Inference Acceleration & Serving Engines Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s2_d1",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s2_d2",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s3",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Inference Acceleration & Serving Engines Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s3_d1",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s3_d2",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s4",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Inference Acceleration & Serving Engines Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s4_d1",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s4_d2",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s5",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Inference Acceleration & Serving Engines Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s5_d1",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p4_t6_s5_d2",
      "label": "Inference Acceleration & Serving Engines Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Inference Acceleration & Serving Engines Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5",
      "label": "Agentic Tool Use & Orchestration",
      "description": "Frameworks and patterns for constructing autonomous agentic loops, function calling pipelines, and multi-agent systems.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1",
      "label": "ReAct (Reasoning + Acting) Agent Loop",
      "description": "Iterative prompting framework interleaving reasoning steps (Thoughts) with tool executions (Actions).",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s1",
      "label": "Thought-Action-Observation Loop Cycle",
      "description": "Standard three-step execution cycle governing autonomous agent reasoning.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s1_d1",
      "label": "Thought Step Generation",
      "description": "LLM reasoning about current state and determining necessary tool calls.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s1_d2",
      "label": "Action Tool Execution",
      "description": "Parsing tool call name and JSON arguments to execute external function code.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s1_d3",
      "label": "Observation Result Feedback",
      "description": "Injecting raw tool execution output back into context as the next observation prompt.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s2",
      "label": "Stop Token & Output Parser Interception",
      "description": "Intercepting LLM token streams when tool call invocation keywords are emitted.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s2_d1",
      "label": "Action: [tool_name] Stop Token Trigger",
      "description": "Halting generation when specific Action: or <tool_call> tags are detected.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s2_d2",
      "label": "Regex & JSON Argument Parsing",
      "description": "Extracting structured JSON argument payloads from raw string generation streams.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s3",
      "label": "Agent Infinite Loop Safeguards",
      "description": "Preventing agents from getting stuck in endless non-terminating tool call cycles.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s3_d1",
      "label": "Max Iteration Counter Bounds (e.g. 10 steps)",
      "description": "Aborting agent loops automatically after crossing max_iterations thresholds.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s3_d2",
      "label": "Duplicate Tool Call Detection",
      "description": "Detecting identical repeated tool arguments and forcing LLM to re-evaluate plans.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s4",
      "label": "State Memory & Truncation Strategies",
      "description": "Managing context window growth as multi-turn thought-observation history accumulates.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s4_d1",
      "label": "Observation Payload Summarization",
      "description": "Summarizing large tool output responses before injecting them into context history.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s4_d2",
      "label": "Sliding History Window Pruning",
      "description": "Retaining initial system instructions while pruning older intermediate thought steps.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s5",
      "label": "Human-in-the-Loop (HITL) Interruption Hooks",
      "description": "Pausing agent execution loops to require human approval for destructive tool calls.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s5_d1",
      "label": "Action Approval Gating (e.g. execute_sql)",
      "description": "Interpreting tool calls and waiting for human approval before executing sensitive APIs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t1_s5_d2",
      "label": "State Resume & Modification Payload",
      "description": "Resuming agent loops with human-provided modifications or feedback.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2",
      "label": "Tool Calling Protocols & Function Specs",
      "description": "Standardized schemas for exposing native functions and APIs to LLMs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s1",
      "label": "JSON Schema Tool Definitions",
      "description": "Describing tool parameters, types, and descriptions using OpenAPI JSON schema format.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s1_d1",
      "label": "Type, Description & Required Fields",
      "description": "Specifying parameter data types (string, integer, object) and mandatory property lists.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s1_d2",
      "label": "Docstring Parameter Auto-Extraction",
      "description": "Parsing Python docstrings to generate JSON schema definitions automatically.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s2",
      "label": "OpenAI Function Calling Wire Spec",
      "description": "Native API payload format for passing tool specs and receiving structured tool call outputs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s2_d1",
      "label": "tools Parameter Payload Array",
      "description": "Passing arrays of tool objects containing type: \"function\" and function specs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s2_d2",
      "label": "tool_calls Choice Array Output",
      "description": "Receiving tool_calls arrays with id, type, and function: {name, arguments}.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s3",
      "label": "Grammar-Constrained Decoding (Outlines / Instructor)",
      "description": "Forcing LLM token sampling to adhere strictly to target JSON schema grammars.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s3_d1",
      "label": "Context-Free Grammar (CFG) Token Masking",
      "description": "Masking invalid vocabulary tokens during sampling to guarantee valid JSON syntax.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s3_d2",
      "label": "Zero Syntax Error Output Guarantee",
      "description": "Eliminating JSON syntax parsing errors completely at the decoding level.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s4",
      "label": "Multi-Tool Parallel Function Execution",
      "description": "Executing multiple independent tool calls simultaneously in parallel threads.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s4_d1",
      "label": "Parallel tool_calls Array Generation",
      "description": "Receiving multiple tool call requests in a single LLM generation turn.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s4_d2",
      "label": "Asyncio Gather Execution",
      "description": "Executing tool calls concurrently using asyncio.gather() to minimize total latency.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s5",
      "label": "Error Handling & Exception Feedback Loops",
      "description": "Catching tool execution exceptions and feeding error tracebacks back to the LLM.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s5_d1",
      "label": "Exception Stack Trace Feedback",
      "description": "Formatting Python exceptions as observation messages so the LLM can self-correct parameters.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t2_s5_d2",
      "label": "Fallback Tool Execution Paths",
      "description": "Routing to alternative tools when primary API endpoints return HTTP 500 errors.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3",
      "label": "Multi-Agent Systems (LangGraph & AutoGen)",
      "description": "Orchestrating specialized multi-agent teams communicating via graphs or conversation loops.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s1",
      "label": "LangGraph State Graph Architecture",
      "description": "Modeling multi-agent workflows as stateful graphs containing Nodes and Edges.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s1_d1",
      "label": "State Schema & Reducer Functions",
      "description": "Defining central state objects updated by agent nodes via reducer functions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s1_d2",
      "label": "Conditional Routing Edges",
      "description": "Evaluating state variables to route execution dynamically to downstream agent nodes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s2",
      "label": "AutoGen Conversational Multi-Agent Pattern",
      "description": "Microsoft framework for building multi-agent conversations between specialized agent roles.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s2_d1",
      "label": "UserProxyAgent & AssistantAgent Roles",
      "description": "Setting up human proxy agents executing code alongside AI assistant agents.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s2_d2",
      "label": "Group Chat Manager & Speaker Selection",
      "description": "Managing multi-agent group chats using automated speaker selection prompts.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s3",
      "label": "Specialized Role-Based Agent Teams",
      "description": "Dividing complex tasks among specialized agents (e.g. Researcher, Coder, Reviewer).",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s3_d1",
      "label": "Context Isolation Benefits",
      "description": "Keeping individual agent context windows small and focused on specific domains.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s3_d2",
      "label": "Peer Review & Verification Loops",
      "description": "Tasking reviewer agents to audit and critique worker agent output deliverables.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s4",
      "label": "Shared State vs Message Passing Communication",
      "description": "Architectural paradigms for exchanging data between autonomous agents.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s4_d1",
      "label": "Centralized Blackboard State Storage",
      "description": "Reading and writing state variables to a shared memory store.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s4_d2",
      "label": "Decentralized Peer-to-Peer Messaging",
      "description": "Streaming structured message payloads directly between connected agents.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s5",
      "label": "Multi-Agent Deadlock & Infinite Loop Recovery",
      "description": "Detecting and resolving communication deadlocks between conversational agents.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s5_d1",
      "label": "Max Round Conversation Limits",
      "description": "Enforcing max_consecutive_auto_reply limits to prevent endless debate loops.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t3_s5_d2",
      "label": "Consensus Evaluation Rules",
      "description": "Evaluating whether agents have converged on a final agreed-upon answer.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4",
      "label": "Plan-and-Solve & Tree of Thoughts (ToT)",
      "description": "Advanced reasoning architectures decomposing tasks into explicit plans or exploring decision trees.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s1",
      "label": "Plan-and-Solve Prompting Framework",
      "description": "Explicitly separating planning phases from step-by-step execution phases.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s1_d1",
      "label": "Macro Plan Generation Phase",
      "description": "Generating numbered sequence plans (Steps 1..N) before executing individual steps.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s1_d2",
      "label": "Dynamic Plan Re-evaluation",
      "description": "Updating remaining plan steps dynamically based on intermediate execution results.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s2",
      "label": "Tree of Thoughts (ToT) Search Architecture",
      "description": "Exploring reasoning trees using Breadth-First Search (BFS) or Depth-First Search (DFS).",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s2_d1",
      "label": "Thought Branch Generation (K candidates)",
      "description": "Generating multiple alternative thought branches at each reasoning step.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s2_d2",
      "label": "Heuristic Evaluation & Pruning (LLM Value Function)",
      "description": "Evaluating thought branch states using LLM scoring prompts to prune weak branches.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s3",
      "label": "Monte Carlo Tree Search (MCTS) for LLMs",
      "description": "Combining MCTS rollouts and value networks to solve complex reasoning problems (AlphaCode/o1).",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s3_d1",
      "label": "Selection, Expansion, Simulation, Backpropagation",
      "description": "Iterating through MCTS phases to explore high-probability reasoning paths.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s3_d2",
      "label": "Policy & Value Search Guidance",
      "description": "Guiding search trajectories using learned policy and value network scores.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s4",
      "label": "Self-Consistency Majority Voting",
      "description": "Sampling multiple reasoning paths and selecting answers via majority voting.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s4_d1",
      "label": "Temperature > 0 Diverse Sampling",
      "description": "Sampling N distinct reasoning chains at temperature 0.7.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s4_d2",
      "label": "Marginalizing Over Reasoning Paths",
      "description": "Aggregating final answers to select the consensus output choice.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s5",
      "label": "Reflexion Self-Correction Loop",
      "description": "Agents evaluating their own past outputs, generating verbal reflections, and retrying.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s5_d1",
      "label": "Verbal Self-Reflection Generation",
      "description": "Writing explicit self-critiques analyzing why previous attempts failed.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t4_s5_d2",
      "label": "Episodic Memory Reflection Storage",
      "description": "Storing reflections in memory buffers to prevent repeating mistakes on retries.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5",
      "label": "Agentic Tool Use & Orchestration Topic 5",
      "description": "Detailed first-principles mechanics for Agentic Tool Use & Orchestration topic 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s1",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Agentic Tool Use & Orchestration Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s1_d1",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s1_d2",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s2",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Agentic Tool Use & Orchestration Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s2_d1",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s2_d2",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s3",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Agentic Tool Use & Orchestration Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s3_d1",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s3_d2",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s4",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Agentic Tool Use & Orchestration Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s4_d1",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s4_d2",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s5",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Agentic Tool Use & Orchestration Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s5_d1",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t5_s5_d2",
      "label": "Agentic Tool Use & Orchestration Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6",
      "label": "Agentic Tool Use & Orchestration Topic 6",
      "description": "Detailed first-principles mechanics for Agentic Tool Use & Orchestration topic 6.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s1",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Agentic Tool Use & Orchestration Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s1_d1",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s1_d2",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s2",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Agentic Tool Use & Orchestration Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s2_d1",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s2_d2",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s3",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Agentic Tool Use & Orchestration Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s3_d1",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s3_d2",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s4",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Agentic Tool Use & Orchestration Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s4_d1",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s4_d2",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s5",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Agentic Tool Use & Orchestration Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s5_d1",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p5_t6_s5_d2",
      "label": "Agentic Tool Use & Orchestration Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Agentic Tool Use & Orchestration Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6",
      "label": "Evaluation, Benchmarks & Guardrails",
      "description": "Frameworks for evaluating LLM quality, calibrating LLM-as-a-Judge systems, and enforcing safety guardrails.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1",
      "label": "RAGAS & RAG Evaluation Metrics",
      "description": "Framework for evaluating Retrieval-Augmented Generation systems without ground truth labels.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s1",
      "label": "Faithfulness Metric (Hallucination Detection)",
      "description": "Measuring the proportion of claims in the generated answer supported by retrieved context.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s1_d1",
      "label": "Claim Extraction & Verification Loop",
      "description": "Extracting individual statement claims from answers and verifying support in context.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s1_d2",
      "label": "Faithfulness Score Formula (Supported Claims / Total Claims)",
      "description": "Computing ratio scores from 0.0 (total hallucination) to 1.0 (fully grounded).",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s2",
      "label": "Answer Relevance Metric",
      "description": "Measuring how directly the generated answer addresses the user query.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s2_d1",
      "label": "Reverse Question Generation Technique",
      "description": "Generating synthetic questions from the answer and measuring embedding similarity to original query.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s2_d2",
      "label": "Non-Sequitur & Incomplete Answer Penalty",
      "description": "Penalizing answers that fail to address core user prompt requirements.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s3",
      "label": "Context Precision Metric",
      "description": "Measuring whether relevant chunks are ranked at top positions in retrieved context lists.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s3_d1",
      "label": "Mean Average Precision (MAP) at K Calculation",
      "description": "Evaluating whether ground-truth relevant chunks appear at ranks 1, 2, or 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s3_d2",
      "label": "Retrieval Noise Penalty",
      "description": "Penalizing retrieval steps that return irrelevant context chunks.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s4",
      "label": "Context Recall Metric",
      "description": "Measuring the proportion of ground-truth reference statements present in retrieved context.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s4_d1",
      "label": "Reference Sentence Mapping",
      "description": "Verifying that all necessary reference facts exist within retrieved context blocks.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s4_d2",
      "label": "Chunk Size Sensitivity Detection",
      "description": "Identifying information loss caused by overly restrictive chunking sizes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s5",
      "label": "Automated Evaluation Dataset Generation",
      "description": "Generating synthetic QA test sets from document repositories using LLMs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s5_d1",
      "label": "Question Evolution Mutations (Simple, Multi-Context, Reasoning)",
      "description": "Generating diverse test questions matching real-world user query distributions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t1_s5_d2",
      "label": "Golden Dataset Curation",
      "description": "Curating 100+ verified test cases for continuous CI/CD evaluation runs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2",
      "label": "LLM-as-a-Judge & Benchmark Systems",
      "description": "Utilizing strong LLMs (GPT-4) to evaluate and rank candidate model outputs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s1",
      "label": "Pairwise Comparison & Chatbot Arena Bradley-Terry",
      "description": "Evaluating two model responses head-to-head and computing Elo ratings.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s1_d1",
      "label": "Blind Pairwise Judging Prompts",
      "description": "Presenting Response A and Response B to judge LLMs without revealing model identities.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s1_d2",
      "label": "Bradley-Terry Maximum Likelihood Estimation",
      "description": "Computing Elo quality ratings from thousands of pairwise win/loss/tie outcomes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s2",
      "label": "Position Bias Mitigation (A/B & B/A Swapping)",
      "description": "Controlling judge LLM tendencies to favor whichever response appears first.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s2_d1",
      "label": "Order Swapping Evaluation Runs",
      "description": "Running evaluation twice with swapped presentation orders (A/B and B/A).",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s2_d2",
      "label": "Consistency Filtering Rules",
      "description": "Discarding evaluation instances where judges flip winners based solely on position.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s3",
      "label": "Verbosity & Style Bias Calibration",
      "description": "Controlling judge LLM tendencies to prefer longer or flashier responses.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s3_d1",
      "label": "Explicit Length Penalty Prompts",
      "description": "Instructing judge LLMs to evaluate factual accuracy independent of response length.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s3_d2",
      "label": "Reference-Guided Scoring Prompts",
      "description": "Providing high-quality reference answers to ground judge scoring criteria.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s4",
      "label": "Single-Answer Rubric-Based Scoring",
      "description": "Rating individual model responses on 1-5 scales against detailed evaluation rubrics.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s4_d1",
      "label": "Multi-Criteria Rubric Scoring",
      "description": "Scoring response criteria separately: Accuracy, Helpfulness, Clarity, Safety.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s4_d2",
      "label": "Structured JSON Score Output Formatting",
      "description": "Requiring judge LLMs to output JSON scores alongside justification reasoning.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s5",
      "label": "Standard Benchmarks (MMLU, GSM8K, HumanEval, MT-Bench)",
      "description": "Understanding standard academic benchmarks evaluating LLM capabilities.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s5_d1",
      "label": "MMLU Multiple-Choice Knowledge Benchmark",
      "description": "Testing 57 subjects across STEM, humanities, and social sciences.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t2_s5_d2",
      "label": "HumanEval Python Code Generation Benchmark",
      "description": "Evaluating Functional Correctness (pass@1, pass@10) on unit-tested programming problems.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3",
      "label": "Guardrails & Safety Filtering Systems",
      "description": "Real-time inspection layers enforcing safety policies, PII redacting, and schema validation.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s1",
      "label": "Llama-Guard Safety Classification",
      "description": "Specialized safety classifier model evaluating prompts and responses against hazard taxonomies.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s1_d1",
      "label": "OWASP & ML Commons Hazard Taxonomies",
      "description": "Classifying content across categories: Violent, Sexual, Hate Speech, Malware, Suicide.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s1_d2",
      "label": "Safe / Unsafe Binary Output Token",
      "description": "Emitting safe or unsafe tokens alongside specific hazard category codes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s2",
      "label": "Prompt Injection & Jailbreak Detection",
      "description": "Detecting malicious user inputs attempting to bypass system instructions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s2_d1",
      "label": "System Prompt Override Detection",
      "description": "Scanning for adversarial patterns (e.g. \"Ignore all previous instructions\").",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s2_d2",
      "label": "Vector Embedding Classifier Defenses",
      "description": "Classifying incoming prompts against known jailbreak vector clusters.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s3",
      "label": "PII Detection & Redaction (Presidio)",
      "description": "Scanning input and output text to redact sensitive personal data.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s3_d1",
      "label": "Regex + NER Hybrid Detection",
      "description": "Combining regular expressions and Named Entity Recognition models to locate SSNs, emails, credit cards.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s3_d2",
      "label": "Anonymization Placeholder Replacement",
      "description": "Replacing PII strings with anonymized tokens (e.g. <EMAIL_ADDRESS>) before sending data to external APIs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s4",
      "label": "Guardrails AI Pydantic Output Validation",
      "description": "Enforcing structural schema and semantic validation rules on LLM output streams.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s4_d1",
      "label": "RAIL (Reliable AI Markup Language) Specs",
      "description": "Defining output schemas, validation guards, and re-ask correction rules.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s4_d2",
      "label": "Automatic Re-Prompting on Failure",
      "description": "Re-querying LLMs automatically with validation error messages to correct invalid outputs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s5",
      "label": "NeMo Guardrails Programmable Rail Engine",
      "description": "NVIDIA framework using Colang to define conversational rails and topic bounds.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s5_d1",
      "label": "Off-Topic Conversation Blocking Rules",
      "description": "Rerouting user prompts when queries deviate from supported business topics.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t3_s5_d2",
      "label": "Factual Hallucination Rail Checks",
      "description": "Verifying response statements against knowledge base documents before sending text to users.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4",
      "description": "Detailed first-principles mechanics for Evaluation, Benchmarks & Guardrails topic 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s1_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s1_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s2_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s2_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s3",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s3_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s3_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s4",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s4_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s4_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s5",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s5_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t4_s5_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5",
      "description": "Detailed first-principles mechanics for Evaluation, Benchmarks & Guardrails topic 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s1_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s1_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s2_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s2_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s3",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s3_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s3_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s4",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s4_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s4_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s5",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s5_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t5_s5_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6",
      "description": "Detailed first-principles mechanics for Evaluation, Benchmarks & Guardrails topic 6.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s1_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s1_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s2_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s2_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s3",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s3_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s3_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s4",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s4_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s4_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s5",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Evaluation, Benchmarks & Guardrails Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s5_d1",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p6_t6_s5_d2",
      "label": "Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Evaluation, Benchmarks & Guardrails Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7",
      "label": "Prompt Engineering & Context Techniques",
      "description": "Advanced prompting methods, in-context learning strategies, and long-context window management.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1",
      "label": "Chain-of-Thought (CoT) Prompting",
      "description": "Guiding LLMs to generate intermediate reasoning steps before emitting final answers.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s1",
      "label": "Zero-Shot CoT (\"Let's think step by step\")",
      "description": "Appending trigger phrases to elicit step-by-step reasoning without exemplars.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s1_d1",
      "label": "Kojima et al. Trigger Phrase Mechanics",
      "description": "Demonstrating significant accuracy gains on multi-step math and logic benchmarks.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s1_d2",
      "label": "Two-Stage Extraction Pipeline",
      "description": "Generating reasoning steps in stage 1, then extracting final numeric answers in stage 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s2",
      "label": "Few-Shot CoT Exemplar Design",
      "description": "Providing 3-5 worked problem examples demonstrating explicit reasoning steps.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s2_d1",
      "label": "Manual Exemplar Engineering Rules",
      "description": "Writing clear step-by-step problem solutions illustrating correct logic patterns.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s2_d2",
      "label": "Diverse Problem Type Coverage",
      "description": "Including varied problem structures in exemplars to prevent over-fitting specific formats.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s3",
      "label": "Auto-CoT (Automated Exemplar Selection)",
      "description": "Automatically constructing diverse CoT exemplars from dataset clusters.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s3_d1",
      "label": "Dataset Clustering via Embeddings",
      "description": "Clustering dataset questions to select representative questions per cluster.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s3_d2",
      "label": "Zero-Shot Reasoning Generation & Validation",
      "description": "Generating reasoning steps via Zero-Shot CoT and filtering out invalid solutions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s4",
      "label": "Least-to-Most Prompting",
      "description": "Decomposing complex problems into smaller sub-problems solved sequentially.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s4_d1",
      "label": "Sub-Problem Decomposition Phase",
      "description": "Prompting LLMs to output an ordered list of simpler sub-questions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s4_d2",
      "label": "Sequential Sub-Problem Solving",
      "description": "Solving each sub-question sequentially, passing previous answers into context.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s5",
      "label": "Program-Aided Language Models (PAL / PoT)",
      "description": "Offloading math calculations by prompting LLMs to generate executable Python code.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s5_d1",
      "label": "Python Code Block Generation",
      "description": "Instructing LLMs to write Python code for math operations instead of mental arithmetic.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t1_s5_d2",
      "label": "Local Interpreter Execution Output",
      "description": "Executing generated Python code in isolated sandboxes to obtain exact answers.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2",
      "label": "In-Context Learning (ICL) Exemplar Selection",
      "description": "Selecting and ordering optimal few-shot exemplars to maximize task performance.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s1",
      "label": "k-NN Embedding-Based Exemplar Retrieval",
      "description": "Retrieving query-similar exemplars from historical training sets using vector search.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s1_d1",
      "label": "Semantic Similarity Vector Search",
      "description": "Embedding user input queries and fetching k nearest neighbor training examples.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s1_d2",
      "label": "Task-Specific Embedding Fine-Tuning",
      "description": "Training dense retrievers specifically to pick exemplars that maximize LLM accuracy.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s2",
      "label": "Exemplar Ordering & Recency Bias",
      "description": "Arranging exemplar sequences to counter LLM tendencies to over-weight final examples.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s2_d1",
      "label": "Recency Bias Impact",
      "description": "Observed LLM tendencies to copy output formats and labels from the final few-shot example.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s2_d2",
      "label": "Balanced Permutation Order Testing",
      "description": "Testing multiple exemplar permutations to find stable ordering sequences.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s3",
      "label": "Label Permutation & Robustness Testing",
      "description": "Verifying that model predictions rely on semantic logic rather than spurious label correlations.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s3_d1",
      "label": "Random Label Inversion Checks",
      "description": "Replacing true exemplar labels with random labels to evaluate true ICL capabilities.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s3_d2",
      "label": "Format-Only Learning vs Content Learning",
      "description": "Distinguishing between learning output formatting rules vs learning new task knowledge.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s4",
      "label": "Active Selection & Diversity Filtering",
      "description": "Selecting diverse few-shot sets covering different edge cases and sub-tasks.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s4_d1",
      "label": "Max-Min Diversity Selection",
      "description": "Selecting exemplars that maximize distance from already chosen examples.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s4_d2",
      "label": "Class-Balanced Exemplar Distributions",
      "description": "Ensuring equal representation of all output classification labels in few-shot prompts.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s5",
      "label": "In-Context Vector Tuning & Soft Prompts",
      "description": "Optimizing continuous prompt embeddings directly without manual text engineering.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s5_d1",
      "label": "Prompt Tuning (Prefix Tuning)",
      "description": "Prepending trainable virtual token embeddings to input sequences while freezing base model weights.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t2_s5_d2",
      "label": "Transferability Across Tasks",
      "description": "Saving lightweight soft prompt vector checkpoints (few KBs) per task.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3",
      "label": "Long-Context Window Management",
      "description": "Techniques for processing 100K+ token inputs efficiently while maintaining information retrieval accuracy.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s1",
      "label": "\"Lost in the Middle\" Attention Phenomenon",
      "description": "Degradation in retrieval accuracy when target information is placed in the middle of long contexts.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s1_d1",
      "label": "Liu et al. Empirical Findings",
      "description": "LLMs achieving highest retrieval accuracy when key facts are located at sequence start or end.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s1_d2",
      "label": "Middle-Context Attention Decay",
      "description": "Attention weight decay occurring across tokens positioned between start and end blocks.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s2",
      "label": "Needle In A Haystack (NIAH) Benchmark",
      "description": "Testing LLM capabilities to retrieve specific factual sentences hidden inside long context windows.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s2_d1",
      "label": "Synthetic Fact Insertion Matrix",
      "description": "Inserting random needle statements at varying depth percentages (0-100%) and context lengths (4K-128K).",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s2_d2",
      "label": "Heatmap Accuracy Visualization",
      "description": "Rendering color-coded retrieval success heatmaps across context depth and length axes.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s3",
      "label": "Context Pruning & Information Compression",
      "description": "Compressing long document contexts using specialized summarize and prune pipelines.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s3_d1",
      "label": "LLMLingua Token Pruning Engine",
      "description": "Using small language models to calculate token perplexities and drop low-information tokens.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s3_d2",
      "label": "3-5x Context Compression Ratios",
      "description": "Compressing context lengths by 70% while preserving essential semantic information.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s4",
      "label": "Hierarchical Summarization Trees",
      "description": "Processing massive books or repositories by recursively summarizing child sections.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s4_d1",
      "label": "Map-Reduce Summarization Chains",
      "description": "Summarizing individual document chunks in parallel before merging summaries.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s4_d2",
      "label": "Tree-Structured Index Representations",
      "description": "Maintaining hierarchical summary nodes linked to underlying source text blocks.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s5",
      "label": "Chunk-Level Context Awareness (Parent-Child Indexing)",
      "description": "Retrieving small sub-chunks during vector search but passing larger parent chunks to the LLM.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s5_d1",
      "label": "Small-to-Large Chunk Mapping",
      "description": "Indexing 100-token sentences for accurate vector matching, returning 1000-token parent paragraphs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t3_s5_d2",
      "label": "Surrounding Context Preservation",
      "description": "Ensuring LLMs receive complete surrounding narrative context for retrieved facts.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4",
      "label": "Prompt Engineering & Context Techniques Topic 4",
      "description": "Detailed first-principles mechanics for Prompt Engineering & Context Techniques topic 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s1",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s1_d1",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s1_d2",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s2",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s2_d1",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s2_d2",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s3",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s3_d1",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s3_d2",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s4",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s4_d1",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s4_d2",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s5",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s5_d1",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t4_s5_d2",
      "label": "Prompt Engineering & Context Techniques Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5",
      "label": "Prompt Engineering & Context Techniques Topic 5",
      "description": "Detailed first-principles mechanics for Prompt Engineering & Context Techniques topic 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s1",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s1_d1",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s1_d2",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s2",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s2_d1",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s2_d2",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s3",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s3_d1",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s3_d2",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s4",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s4_d1",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s4_d2",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s5",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s5_d1",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t5_s5_d2",
      "label": "Prompt Engineering & Context Techniques Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6",
      "label": "Prompt Engineering & Context Techniques Topic 6",
      "description": "Detailed first-principles mechanics for Prompt Engineering & Context Techniques topic 6.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s1",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s1_d1",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s1_d2",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s2",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s2_d1",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s2_d2",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s3",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s3_d1",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s3_d2",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s4",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s4_d1",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s4_d2",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s5",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Prompt Engineering & Context Techniques Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s5_d1",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p7_t6_s5_d2",
      "label": "Prompt Engineering & Context Techniques Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prompt Engineering & Context Techniques Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8",
      "label": "Synthetic Data & Model Distillation",
      "description": "Pipelines for generating high-quality synthetic training datasets and transferring knowledge from teacher to student models.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1",
      "label": "Synthetic Data Generation & Evol-Instruct",
      "description": "Iteratively mutating simple seed prompts to create complex, diverse instruction datasets.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s1",
      "label": "In-Depth Evolution Mutations",
      "description": "Increasing task complexity by adding constraints, deepening reasoning, or expanding scope.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s1_d1",
      "label": "Add Constraints Mutation",
      "description": "Prompting LLMs to add specific behavioral or output constraints to seed questions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s1_d2",
      "label": "Deepen Reasoning Mutation",
      "description": "Rewriting questions to require multi-step logical deduction or code execution.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s2",
      "label": "In-Breadth Evolution Mutations",
      "description": "Generating entirely new prompt topics inspired by existing seed instructions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s2_d1",
      "label": "Domain Extension Prompting",
      "description": "Creating parallel instruction tasks across under-represented domain topics.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s2_d2",
      "label": "Dataset Topic Diversity Expansion",
      "description": "Expanding coverage across technical, creative, and analytical reasoning domains.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s3",
      "label": "Elimination Evolution & Quality Filtering",
      "description": "Filtering out low-quality, duplicate, or unanswerable synthetic instructions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s3_d1",
      "label": "LLM Evaluator Quality Scoring",
      "description": "Scoring synthetic prompt-response pairs on clarity, difficulty, and correctness.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s3_d2",
      "label": "Rule-Based Garbage Filtering",
      "description": "Discarding failed generations containing repetitive text or refusal statements.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s4",
      "label": "Self-Instruct Framework Pipeline",
      "description": "Bootstrapping instruction-following datasets using an LLM's own generation capabilities.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s4_d1",
      "label": "Seed Instruction Pool (175 tasks)",
      "description": "Starting with a small hand-written seed task set.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s4_d2",
      "label": "Instruction-Input-Output Triplet Generation",
      "description": "Prompting LLMs to output new task instructions alongside sample input-output pairs.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s5",
      "label": "Cosmopedia & Web-Scale Synthetic Textbooks",
      "description": "Generating massive synthetic datasets (billions of tokens) simulating academic textbooks.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s5_d1",
      "label": "Persona & Seed Web Topic Prompting",
      "description": "Assigning expert personas (e.g. Physics Professor) to generate detailed course chapters.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t1_s5_d2",
      "label": "De-duplication via MinHash LSH",
      "description": "Deduplicating synthetic text generations to prevent data contamination.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2",
      "label": "Teacher-Student Model Distillation",
      "description": "Compressing knowledge from large teacher models into smaller, faster student models.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s1",
      "label": "Sequence-Level Logit Matching Loss",
      "description": "Training student models to match the output probability distributions of teacher models.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s1_d1",
      "label": "Kullback-Leibler (KL) Divergence Minimization",
      "description": "Loss = KL(Softmax(z_teacher / T) || Softmax(z_student / T)) * T^2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s1_d2",
      "label": "Temperature (T) Softening Parameter",
      "description": "Softening probability distributions (T = 2 to 5) to expose dark knowledge ratios among non-target tokens.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s2",
      "label": "Sequence-Level Knowledge Distillation (SeqKD)",
      "description": "Training student models directly on complete text completions generated by teacher models.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s2_d1",
      "label": "Teacher High-Probability Generation Mining",
      "description": "Generating greedy or beam-search outputs from teacher models to form target datasets.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s2_d2",
      "label": "Cross-Entropy Student SFT Fine-Tuning",
      "description": "Fine-tuning student models on teacher-generated text using standard cross-entropy loss.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s3",
      "label": "Intermediate Layer Feature Matching",
      "description": "Forcing student hidden states and attention maps to match corresponding teacher layers.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s3_d1",
      "label": "Hidden State Projection Alignment (MSE Loss)",
      "description": "Applying linear projection matrices to map student hidden dimensions to teacher dimensions.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s3_d2",
      "label": "Attention Map Transfer (TinyBERT / MobileBERT)",
      "description": "Minimizing MSE distance between student and teacher attention weight matrices.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s4",
      "label": "Task-Specific Student Specialization",
      "description": "Distilling general-purpose teacher knowledge into hyper-specialized small student models.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s4_d1",
      "label": "Domain Narrowing Benefits",
      "description": "Matching 70B model performance on specific tasks using 1B-3B specialized student models.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s4_d2",
      "label": "10x Latency & Cost Reduction",
      "description": "Reducing serving costs and inference latency by orders of magnitude.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s5",
      "label": "Distillation Contamination & Hallucination Risks",
      "description": "Identifying failure modes where student models copy teacher style without internalizing logic.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s5_d1",
      "label": "Superficial Politeness Copying",
      "description": "Student models adopting confident teacher tone while increasing factual hallucination rates.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t2_s5_d2",
      "label": "Synthetic Data Contamination Audits",
      "description": "Auditing distilled datasets to prevent benchmark leakage and memorization.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3",
      "label": "Synthetic Data & Model Distillation Topic 3",
      "description": "Detailed first-principles mechanics for Synthetic Data & Model Distillation topic 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s1",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 3 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s1_d1",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s1_d2",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 3 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s2",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 3 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s2_d1",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s2_d2",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 3 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s3",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 3 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s3_d1",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s3_d2",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 3 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s4",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 3 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s4_d1",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s4_d2",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 3 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s5",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 3 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s5_d1",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t3_s5_d2",
      "label": "Synthetic Data & Model Distillation Topic 3 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 3 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4",
      "label": "Synthetic Data & Model Distillation Topic 4",
      "description": "Detailed first-principles mechanics for Synthetic Data & Model Distillation topic 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s1",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s1_d1",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s1_d2",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s2",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s2_d1",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s2_d2",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s3",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s3_d1",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s3_d2",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s4",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s4_d1",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s4_d2",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s5",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s5_d1",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t4_s5_d2",
      "label": "Synthetic Data & Model Distillation Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5",
      "label": "Synthetic Data & Model Distillation Topic 5",
      "description": "Detailed first-principles mechanics for Synthetic Data & Model Distillation topic 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s1",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s1_d1",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s1_d2",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s2",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s2_d1",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s2_d2",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s3",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s3_d1",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s3_d2",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s4",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s4_d1",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s4_d2",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s5",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s5_d1",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t5_s5_d2",
      "label": "Synthetic Data & Model Distillation Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6",
      "label": "Synthetic Data & Model Distillation Topic 6",
      "description": "Detailed first-principles mechanics for Synthetic Data & Model Distillation topic 6.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s1",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s1_d1",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s1_d2",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s2",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s2_d1",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s2_d2",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s3",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s3_d1",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s3_d2",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s4",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s4_d1",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s4_d2",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s5",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Data & Model Distillation Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s5_d1",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "ai_root_p8_t6_s5_d2",
      "label": "Synthetic Data & Model Distillation Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Data & Model Distillation Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "ai_root",
      "target": "ai_root_p1"
    },
    {
      "source": "ai_root_p1",
      "target": "ai_root_p1_t1"
    },
    {
      "source": "ai_root_p1_t1",
      "target": "ai_root_p1_t1_s1"
    },
    {
      "source": "ai_root_p1_t1_s1",
      "target": "ai_root_p1_t1_s1_d1"
    },
    {
      "source": "ai_root_p1_t1_s1",
      "target": "ai_root_p1_t1_s1_d2"
    },
    {
      "source": "ai_root_p1_t1",
      "target": "ai_root_p1_t1_s2"
    },
    {
      "source": "ai_root_p1_t1_s2",
      "target": "ai_root_p1_t1_s2_d1"
    },
    {
      "source": "ai_root_p1_t1_s2",
      "target": "ai_root_p1_t1_s2_d2"
    },
    {
      "source": "ai_root_p1_t1",
      "target": "ai_root_p1_t1_s3"
    },
    {
      "source": "ai_root_p1_t1_s3",
      "target": "ai_root_p1_t1_s3_d1"
    },
    {
      "source": "ai_root_p1_t1_s3",
      "target": "ai_root_p1_t1_s3_d2"
    },
    {
      "source": "ai_root_p1_t1",
      "target": "ai_root_p1_t1_s4"
    },
    {
      "source": "ai_root_p1_t1_s4",
      "target": "ai_root_p1_t1_s4_d1"
    },
    {
      "source": "ai_root_p1_t1_s4",
      "target": "ai_root_p1_t1_s4_d2"
    },
    {
      "source": "ai_root_p1_t1",
      "target": "ai_root_p1_t1_s5"
    },
    {
      "source": "ai_root_p1_t1_s5",
      "target": "ai_root_p1_t1_s5_d1"
    },
    {
      "source": "ai_root_p1_t1_s5",
      "target": "ai_root_p1_t1_s5_d2"
    },
    {
      "source": "ai_root_p1",
      "target": "ai_root_p1_t2"
    },
    {
      "source": "ai_root_p1_t2",
      "target": "ai_root_p1_t2_s1"
    },
    {
      "source": "ai_root_p1_t2_s1",
      "target": "ai_root_p1_t2_s1_d1"
    },
    {
      "source": "ai_root_p1_t2_s1",
      "target": "ai_root_p1_t2_s1_d2"
    },
    {
      "source": "ai_root_p1_t2",
      "target": "ai_root_p1_t2_s2"
    },
    {
      "source": "ai_root_p1_t2_s2",
      "target": "ai_root_p1_t2_s2_d1"
    },
    {
      "source": "ai_root_p1_t2_s2",
      "target": "ai_root_p1_t2_s2_d2"
    },
    {
      "source": "ai_root_p1_t2",
      "target": "ai_root_p1_t2_s3"
    },
    {
      "source": "ai_root_p1_t2_s3",
      "target": "ai_root_p1_t2_s3_d1"
    },
    {
      "source": "ai_root_p1_t2_s3",
      "target": "ai_root_p1_t2_s3_d2"
    },
    {
      "source": "ai_root_p1_t2",
      "target": "ai_root_p1_t2_s4"
    },
    {
      "source": "ai_root_p1_t2_s4",
      "target": "ai_root_p1_t2_s4_d1"
    },
    {
      "source": "ai_root_p1_t2_s4",
      "target": "ai_root_p1_t2_s4_d2"
    },
    {
      "source": "ai_root_p1_t2",
      "target": "ai_root_p1_t2_s5"
    },
    {
      "source": "ai_root_p1_t2_s5",
      "target": "ai_root_p1_t2_s5_d1"
    },
    {
      "source": "ai_root_p1_t2_s5",
      "target": "ai_root_p1_t2_s5_d2"
    },
    {
      "source": "ai_root_p1",
      "target": "ai_root_p1_t3"
    },
    {
      "source": "ai_root_p1_t3",
      "target": "ai_root_p1_t3_s1"
    },
    {
      "source": "ai_root_p1_t3_s1",
      "target": "ai_root_p1_t3_s1_d1"
    },
    {
      "source": "ai_root_p1_t3_s1",
      "target": "ai_root_p1_t3_s1_d2"
    },
    {
      "source": "ai_root_p1_t3",
      "target": "ai_root_p1_t3_s2"
    },
    {
      "source": "ai_root_p1_t3_s2",
      "target": "ai_root_p1_t3_s2_d1"
    },
    {
      "source": "ai_root_p1_t3_s2",
      "target": "ai_root_p1_t3_s2_d2"
    },
    {
      "source": "ai_root_p1_t3",
      "target": "ai_root_p1_t3_s3"
    },
    {
      "source": "ai_root_p1_t3_s3",
      "target": "ai_root_p1_t3_s3_d1"
    },
    {
      "source": "ai_root_p1_t3_s3",
      "target": "ai_root_p1_t3_s3_d2"
    },
    {
      "source": "ai_root_p1_t3",
      "target": "ai_root_p1_t3_s4"
    },
    {
      "source": "ai_root_p1_t3_s4",
      "target": "ai_root_p1_t3_s4_d1"
    },
    {
      "source": "ai_root_p1_t3_s4",
      "target": "ai_root_p1_t3_s4_d2"
    },
    {
      "source": "ai_root_p1_t3",
      "target": "ai_root_p1_t3_s5"
    },
    {
      "source": "ai_root_p1_t3_s5",
      "target": "ai_root_p1_t3_s5_d1"
    },
    {
      "source": "ai_root_p1_t3_s5",
      "target": "ai_root_p1_t3_s5_d2"
    },
    {
      "source": "ai_root_p1",
      "target": "ai_root_p1_t4"
    },
    {
      "source": "ai_root_p1_t4",
      "target": "ai_root_p1_t4_s1"
    },
    {
      "source": "ai_root_p1_t4_s1",
      "target": "ai_root_p1_t4_s1_d1"
    },
    {
      "source": "ai_root_p1_t4_s1",
      "target": "ai_root_p1_t4_s1_d2"
    },
    {
      "source": "ai_root_p1_t4",
      "target": "ai_root_p1_t4_s2"
    },
    {
      "source": "ai_root_p1_t4_s2",
      "target": "ai_root_p1_t4_s2_d1"
    },
    {
      "source": "ai_root_p1_t4_s2",
      "target": "ai_root_p1_t4_s2_d2"
    },
    {
      "source": "ai_root_p1_t4",
      "target": "ai_root_p1_t4_s3"
    },
    {
      "source": "ai_root_p1_t4_s3",
      "target": "ai_root_p1_t4_s3_d1"
    },
    {
      "source": "ai_root_p1_t4_s3",
      "target": "ai_root_p1_t4_s3_d2"
    },
    {
      "source": "ai_root_p1_t4",
      "target": "ai_root_p1_t4_s4"
    },
    {
      "source": "ai_root_p1_t4_s4",
      "target": "ai_root_p1_t4_s4_d1"
    },
    {
      "source": "ai_root_p1_t4_s4",
      "target": "ai_root_p1_t4_s4_d2"
    },
    {
      "source": "ai_root_p1_t4",
      "target": "ai_root_p1_t4_s5"
    },
    {
      "source": "ai_root_p1_t4_s5",
      "target": "ai_root_p1_t4_s5_d1"
    },
    {
      "source": "ai_root_p1_t4_s5",
      "target": "ai_root_p1_t4_s5_d2"
    },
    {
      "source": "ai_root_p1",
      "target": "ai_root_p1_t5"
    },
    {
      "source": "ai_root_p1_t5",
      "target": "ai_root_p1_t5_s1"
    },
    {
      "source": "ai_root_p1_t5_s1",
      "target": "ai_root_p1_t5_s1_d1"
    },
    {
      "source": "ai_root_p1_t5_s1",
      "target": "ai_root_p1_t5_s1_d2"
    },
    {
      "source": "ai_root_p1_t5",
      "target": "ai_root_p1_t5_s2"
    },
    {
      "source": "ai_root_p1_t5_s2",
      "target": "ai_root_p1_t5_s2_d1"
    },
    {
      "source": "ai_root_p1_t5_s2",
      "target": "ai_root_p1_t5_s2_d2"
    },
    {
      "source": "ai_root_p1_t5",
      "target": "ai_root_p1_t5_s3"
    },
    {
      "source": "ai_root_p1_t5_s3",
      "target": "ai_root_p1_t5_s3_d1"
    },
    {
      "source": "ai_root_p1_t5_s3",
      "target": "ai_root_p1_t5_s3_d2"
    },
    {
      "source": "ai_root_p1_t5",
      "target": "ai_root_p1_t5_s4"
    },
    {
      "source": "ai_root_p1_t5_s4",
      "target": "ai_root_p1_t5_s4_d1"
    },
    {
      "source": "ai_root_p1_t5_s4",
      "target": "ai_root_p1_t5_s4_d2"
    },
    {
      "source": "ai_root_p1_t5",
      "target": "ai_root_p1_t5_s5"
    },
    {
      "source": "ai_root_p1_t5_s5",
      "target": "ai_root_p1_t5_s5_d1"
    },
    {
      "source": "ai_root_p1_t5_s5",
      "target": "ai_root_p1_t5_s5_d2"
    },
    {
      "source": "ai_root_p1",
      "target": "ai_root_p1_t6"
    },
    {
      "source": "ai_root_p1_t6",
      "target": "ai_root_p1_t6_s1"
    },
    {
      "source": "ai_root_p1_t6_s1",
      "target": "ai_root_p1_t6_s1_d1"
    },
    {
      "source": "ai_root_p1_t6_s1",
      "target": "ai_root_p1_t6_s1_d2"
    },
    {
      "source": "ai_root_p1_t6",
      "target": "ai_root_p1_t6_s2"
    },
    {
      "source": "ai_root_p1_t6_s2",
      "target": "ai_root_p1_t6_s2_d1"
    },
    {
      "source": "ai_root_p1_t6_s2",
      "target": "ai_root_p1_t6_s2_d2"
    },
    {
      "source": "ai_root_p1_t6",
      "target": "ai_root_p1_t6_s3"
    },
    {
      "source": "ai_root_p1_t6_s3",
      "target": "ai_root_p1_t6_s3_d1"
    },
    {
      "source": "ai_root_p1_t6_s3",
      "target": "ai_root_p1_t6_s3_d2"
    },
    {
      "source": "ai_root_p1_t6",
      "target": "ai_root_p1_t6_s4"
    },
    {
      "source": "ai_root_p1_t6_s4",
      "target": "ai_root_p1_t6_s4_d1"
    },
    {
      "source": "ai_root_p1_t6_s4",
      "target": "ai_root_p1_t6_s4_d2"
    },
    {
      "source": "ai_root_p1_t6",
      "target": "ai_root_p1_t6_s5"
    },
    {
      "source": "ai_root_p1_t6_s5",
      "target": "ai_root_p1_t6_s5_d1"
    },
    {
      "source": "ai_root_p1_t6_s5",
      "target": "ai_root_p1_t6_s5_d2"
    },
    {
      "source": "ai_root",
      "target": "ai_root_p2"
    },
    {
      "source": "ai_root_p2",
      "target": "ai_root_p2_t1"
    },
    {
      "source": "ai_root_p2_t1",
      "target": "ai_root_p2_t1_s1"
    },
    {
      "source": "ai_root_p2_t1_s1",
      "target": "ai_root_p2_t1_s1_d1"
    },
    {
      "source": "ai_root_p2_t1_s1",
      "target": "ai_root_p2_t1_s1_d2"
    },
    {
      "source": "ai_root_p2_t1",
      "target": "ai_root_p2_t1_s2"
    },
    {
      "source": "ai_root_p2_t1_s2",
      "target": "ai_root_p2_t1_s2_d1"
    },
    {
      "source": "ai_root_p2_t1_s2",
      "target": "ai_root_p2_t1_s2_d2"
    },
    {
      "source": "ai_root_p2_t1",
      "target": "ai_root_p2_t1_s3"
    },
    {
      "source": "ai_root_p2_t1_s3",
      "target": "ai_root_p2_t1_s3_d1"
    },
    {
      "source": "ai_root_p2_t1_s3",
      "target": "ai_root_p2_t1_s3_d2"
    },
    {
      "source": "ai_root_p2_t1",
      "target": "ai_root_p2_t1_s4"
    },
    {
      "source": "ai_root_p2_t1_s4",
      "target": "ai_root_p2_t1_s4_d1"
    },
    {
      "source": "ai_root_p2_t1_s4",
      "target": "ai_root_p2_t1_s4_d2"
    },
    {
      "source": "ai_root_p2_t1",
      "target": "ai_root_p2_t1_s5"
    },
    {
      "source": "ai_root_p2_t1_s5",
      "target": "ai_root_p2_t1_s5_d1"
    },
    {
      "source": "ai_root_p2_t1_s5",
      "target": "ai_root_p2_t1_s5_d2"
    },
    {
      "source": "ai_root_p2",
      "target": "ai_root_p2_t2"
    },
    {
      "source": "ai_root_p2_t2",
      "target": "ai_root_p2_t2_s1"
    },
    {
      "source": "ai_root_p2_t2_s1",
      "target": "ai_root_p2_t2_s1_d1"
    },
    {
      "source": "ai_root_p2_t2_s1",
      "target": "ai_root_p2_t2_s1_d2"
    },
    {
      "source": "ai_root_p2_t2",
      "target": "ai_root_p2_t2_s2"
    },
    {
      "source": "ai_root_p2_t2_s2",
      "target": "ai_root_p2_t2_s2_d1"
    },
    {
      "source": "ai_root_p2_t2_s2",
      "target": "ai_root_p2_t2_s2_d2"
    },
    {
      "source": "ai_root_p2_t2",
      "target": "ai_root_p2_t2_s3"
    },
    {
      "source": "ai_root_p2_t2_s3",
      "target": "ai_root_p2_t2_s3_d1"
    },
    {
      "source": "ai_root_p2_t2_s3",
      "target": "ai_root_p2_t2_s3_d2"
    },
    {
      "source": "ai_root_p2_t2",
      "target": "ai_root_p2_t2_s4"
    },
    {
      "source": "ai_root_p2_t2_s4",
      "target": "ai_root_p2_t2_s4_d1"
    },
    {
      "source": "ai_root_p2_t2_s4",
      "target": "ai_root_p2_t2_s4_d2"
    },
    {
      "source": "ai_root_p2_t2",
      "target": "ai_root_p2_t2_s5"
    },
    {
      "source": "ai_root_p2_t2_s5",
      "target": "ai_root_p2_t2_s5_d1"
    },
    {
      "source": "ai_root_p2_t2_s5",
      "target": "ai_root_p2_t2_s5_d2"
    },
    {
      "source": "ai_root_p2",
      "target": "ai_root_p2_t3"
    },
    {
      "source": "ai_root_p2_t3",
      "target": "ai_root_p2_t3_s1"
    },
    {
      "source": "ai_root_p2_t3_s1",
      "target": "ai_root_p2_t3_s1_d1"
    },
    {
      "source": "ai_root_p2_t3_s1",
      "target": "ai_root_p2_t3_s1_d2"
    },
    {
      "source": "ai_root_p2_t3",
      "target": "ai_root_p2_t3_s2"
    },
    {
      "source": "ai_root_p2_t3_s2",
      "target": "ai_root_p2_t3_s2_d1"
    },
    {
      "source": "ai_root_p2_t3_s2",
      "target": "ai_root_p2_t3_s2_d2"
    },
    {
      "source": "ai_root_p2_t3",
      "target": "ai_root_p2_t3_s3"
    },
    {
      "source": "ai_root_p2_t3_s3",
      "target": "ai_root_p2_t3_s3_d1"
    },
    {
      "source": "ai_root_p2_t3_s3",
      "target": "ai_root_p2_t3_s3_d2"
    },
    {
      "source": "ai_root_p2_t3",
      "target": "ai_root_p2_t3_s4"
    },
    {
      "source": "ai_root_p2_t3_s4",
      "target": "ai_root_p2_t3_s4_d1"
    },
    {
      "source": "ai_root_p2_t3_s4",
      "target": "ai_root_p2_t3_s4_d2"
    },
    {
      "source": "ai_root_p2_t3",
      "target": "ai_root_p2_t3_s5"
    },
    {
      "source": "ai_root_p2_t3_s5",
      "target": "ai_root_p2_t3_s5_d1"
    },
    {
      "source": "ai_root_p2_t3_s5",
      "target": "ai_root_p2_t3_s5_d2"
    },
    {
      "source": "ai_root_p2",
      "target": "ai_root_p2_t4"
    },
    {
      "source": "ai_root_p2_t4",
      "target": "ai_root_p2_t4_s1"
    },
    {
      "source": "ai_root_p2_t4_s1",
      "target": "ai_root_p2_t4_s1_d1"
    },
    {
      "source": "ai_root_p2_t4_s1",
      "target": "ai_root_p2_t4_s1_d2"
    },
    {
      "source": "ai_root_p2_t4",
      "target": "ai_root_p2_t4_s2"
    },
    {
      "source": "ai_root_p2_t4_s2",
      "target": "ai_root_p2_t4_s2_d1"
    },
    {
      "source": "ai_root_p2_t4_s2",
      "target": "ai_root_p2_t4_s2_d2"
    },
    {
      "source": "ai_root_p2_t4",
      "target": "ai_root_p2_t4_s3"
    },
    {
      "source": "ai_root_p2_t4_s3",
      "target": "ai_root_p2_t4_s3_d1"
    },
    {
      "source": "ai_root_p2_t4_s3",
      "target": "ai_root_p2_t4_s3_d2"
    },
    {
      "source": "ai_root_p2_t4",
      "target": "ai_root_p2_t4_s4"
    },
    {
      "source": "ai_root_p2_t4_s4",
      "target": "ai_root_p2_t4_s4_d1"
    },
    {
      "source": "ai_root_p2_t4_s4",
      "target": "ai_root_p2_t4_s4_d2"
    },
    {
      "source": "ai_root_p2_t4",
      "target": "ai_root_p2_t4_s5"
    },
    {
      "source": "ai_root_p2_t4_s5",
      "target": "ai_root_p2_t4_s5_d1"
    },
    {
      "source": "ai_root_p2_t4_s5",
      "target": "ai_root_p2_t4_s5_d2"
    },
    {
      "source": "ai_root_p2",
      "target": "ai_root_p2_t5"
    },
    {
      "source": "ai_root_p2_t5",
      "target": "ai_root_p2_t5_s1"
    },
    {
      "source": "ai_root_p2_t5_s1",
      "target": "ai_root_p2_t5_s1_d1"
    },
    {
      "source": "ai_root_p2_t5_s1",
      "target": "ai_root_p2_t5_s1_d2"
    },
    {
      "source": "ai_root_p2_t5",
      "target": "ai_root_p2_t5_s2"
    },
    {
      "source": "ai_root_p2_t5_s2",
      "target": "ai_root_p2_t5_s2_d1"
    },
    {
      "source": "ai_root_p2_t5_s2",
      "target": "ai_root_p2_t5_s2_d2"
    },
    {
      "source": "ai_root_p2_t5",
      "target": "ai_root_p2_t5_s3"
    },
    {
      "source": "ai_root_p2_t5_s3",
      "target": "ai_root_p2_t5_s3_d1"
    },
    {
      "source": "ai_root_p2_t5_s3",
      "target": "ai_root_p2_t5_s3_d2"
    },
    {
      "source": "ai_root_p2_t5",
      "target": "ai_root_p2_t5_s4"
    },
    {
      "source": "ai_root_p2_t5_s4",
      "target": "ai_root_p2_t5_s4_d1"
    },
    {
      "source": "ai_root_p2_t5_s4",
      "target": "ai_root_p2_t5_s4_d2"
    },
    {
      "source": "ai_root_p2_t5",
      "target": "ai_root_p2_t5_s5"
    },
    {
      "source": "ai_root_p2_t5_s5",
      "target": "ai_root_p2_t5_s5_d1"
    },
    {
      "source": "ai_root_p2_t5_s5",
      "target": "ai_root_p2_t5_s5_d2"
    },
    {
      "source": "ai_root_p2",
      "target": "ai_root_p2_t6"
    },
    {
      "source": "ai_root_p2_t6",
      "target": "ai_root_p2_t6_s1"
    },
    {
      "source": "ai_root_p2_t6_s1",
      "target": "ai_root_p2_t6_s1_d1"
    },
    {
      "source": "ai_root_p2_t6_s1",
      "target": "ai_root_p2_t6_s1_d2"
    },
    {
      "source": "ai_root_p2_t6",
      "target": "ai_root_p2_t6_s2"
    },
    {
      "source": "ai_root_p2_t6_s2",
      "target": "ai_root_p2_t6_s2_d1"
    },
    {
      "source": "ai_root_p2_t6_s2",
      "target": "ai_root_p2_t6_s2_d2"
    },
    {
      "source": "ai_root_p2_t6",
      "target": "ai_root_p2_t6_s3"
    },
    {
      "source": "ai_root_p2_t6_s3",
      "target": "ai_root_p2_t6_s3_d1"
    },
    {
      "source": "ai_root_p2_t6_s3",
      "target": "ai_root_p2_t6_s3_d2"
    },
    {
      "source": "ai_root_p2_t6",
      "target": "ai_root_p2_t6_s4"
    },
    {
      "source": "ai_root_p2_t6_s4",
      "target": "ai_root_p2_t6_s4_d1"
    },
    {
      "source": "ai_root_p2_t6_s4",
      "target": "ai_root_p2_t6_s4_d2"
    },
    {
      "source": "ai_root_p2_t6",
      "target": "ai_root_p2_t6_s5"
    },
    {
      "source": "ai_root_p2_t6_s5",
      "target": "ai_root_p2_t6_s5_d1"
    },
    {
      "source": "ai_root_p2_t6_s5",
      "target": "ai_root_p2_t6_s5_d2"
    },
    {
      "source": "ai_root",
      "target": "ai_root_p3"
    },
    {
      "source": "ai_root_p3",
      "target": "ai_root_p3_t1"
    },
    {
      "source": "ai_root_p3_t1",
      "target": "ai_root_p3_t1_s1"
    },
    {
      "source": "ai_root_p3_t1_s1",
      "target": "ai_root_p3_t1_s1_d1"
    },
    {
      "source": "ai_root_p3_t1_s1",
      "target": "ai_root_p3_t1_s1_d2"
    },
    {
      "source": "ai_root_p3_t1",
      "target": "ai_root_p3_t1_s2"
    },
    {
      "source": "ai_root_p3_t1_s2",
      "target": "ai_root_p3_t1_s2_d1"
    },
    {
      "source": "ai_root_p3_t1_s2",
      "target": "ai_root_p3_t1_s2_d2"
    },
    {
      "source": "ai_root_p3_t1",
      "target": "ai_root_p3_t1_s3"
    },
    {
      "source": "ai_root_p3_t1_s3",
      "target": "ai_root_p3_t1_s3_d1"
    },
    {
      "source": "ai_root_p3_t1_s3",
      "target": "ai_root_p3_t1_s3_d2"
    },
    {
      "source": "ai_root_p3_t1",
      "target": "ai_root_p3_t1_s4"
    },
    {
      "source": "ai_root_p3_t1_s4",
      "target": "ai_root_p3_t1_s4_d1"
    },
    {
      "source": "ai_root_p3_t1_s4",
      "target": "ai_root_p3_t1_s4_d2"
    },
    {
      "source": "ai_root_p3_t1",
      "target": "ai_root_p3_t1_s5"
    },
    {
      "source": "ai_root_p3_t1_s5",
      "target": "ai_root_p3_t1_s5_d1"
    },
    {
      "source": "ai_root_p3_t1_s5",
      "target": "ai_root_p3_t1_s5_d2"
    },
    {
      "source": "ai_root_p3",
      "target": "ai_root_p3_t2"
    },
    {
      "source": "ai_root_p3_t2",
      "target": "ai_root_p3_t2_s1"
    },
    {
      "source": "ai_root_p3_t2_s1",
      "target": "ai_root_p3_t2_s1_d1"
    },
    {
      "source": "ai_root_p3_t2_s1",
      "target": "ai_root_p3_t2_s1_d2"
    },
    {
      "source": "ai_root_p3_t2",
      "target": "ai_root_p3_t2_s2"
    },
    {
      "source": "ai_root_p3_t2_s2",
      "target": "ai_root_p3_t2_s2_d1"
    },
    {
      "source": "ai_root_p3_t2_s2",
      "target": "ai_root_p3_t2_s2_d2"
    },
    {
      "source": "ai_root_p3_t2",
      "target": "ai_root_p3_t2_s3"
    },
    {
      "source": "ai_root_p3_t2_s3",
      "target": "ai_root_p3_t2_s3_d1"
    },
    {
      "source": "ai_root_p3_t2_s3",
      "target": "ai_root_p3_t2_s3_d2"
    },
    {
      "source": "ai_root_p3_t2",
      "target": "ai_root_p3_t2_s4"
    },
    {
      "source": "ai_root_p3_t2_s4",
      "target": "ai_root_p3_t2_s4_d1"
    },
    {
      "source": "ai_root_p3_t2_s4",
      "target": "ai_root_p3_t2_s4_d2"
    },
    {
      "source": "ai_root_p3_t2",
      "target": "ai_root_p3_t2_s5"
    },
    {
      "source": "ai_root_p3_t2_s5",
      "target": "ai_root_p3_t2_s5_d1"
    },
    {
      "source": "ai_root_p3_t2_s5",
      "target": "ai_root_p3_t2_s5_d2"
    },
    {
      "source": "ai_root_p3",
      "target": "ai_root_p3_t3"
    },
    {
      "source": "ai_root_p3_t3",
      "target": "ai_root_p3_t3_s1"
    },
    {
      "source": "ai_root_p3_t3_s1",
      "target": "ai_root_p3_t3_s1_d1"
    },
    {
      "source": "ai_root_p3_t3_s1",
      "target": "ai_root_p3_t3_s1_d2"
    },
    {
      "source": "ai_root_p3_t3",
      "target": "ai_root_p3_t3_s2"
    },
    {
      "source": "ai_root_p3_t3_s2",
      "target": "ai_root_p3_t3_s2_d1"
    },
    {
      "source": "ai_root_p3_t3_s2",
      "target": "ai_root_p3_t3_s2_d2"
    },
    {
      "source": "ai_root_p3_t3",
      "target": "ai_root_p3_t3_s3"
    },
    {
      "source": "ai_root_p3_t3_s3",
      "target": "ai_root_p3_t3_s3_d1"
    },
    {
      "source": "ai_root_p3_t3_s3",
      "target": "ai_root_p3_t3_s3_d2"
    },
    {
      "source": "ai_root_p3_t3",
      "target": "ai_root_p3_t3_s4"
    },
    {
      "source": "ai_root_p3_t3_s4",
      "target": "ai_root_p3_t3_s4_d1"
    },
    {
      "source": "ai_root_p3_t3_s4",
      "target": "ai_root_p3_t3_s4_d2"
    },
    {
      "source": "ai_root_p3_t3",
      "target": "ai_root_p3_t3_s5"
    },
    {
      "source": "ai_root_p3_t3_s5",
      "target": "ai_root_p3_t3_s5_d1"
    },
    {
      "source": "ai_root_p3_t3_s5",
      "target": "ai_root_p3_t3_s5_d2"
    },
    {
      "source": "ai_root_p3",
      "target": "ai_root_p3_t4"
    },
    {
      "source": "ai_root_p3_t4",
      "target": "ai_root_p3_t4_s1"
    },
    {
      "source": "ai_root_p3_t4_s1",
      "target": "ai_root_p3_t4_s1_d1"
    },
    {
      "source": "ai_root_p3_t4_s1",
      "target": "ai_root_p3_t4_s1_d2"
    },
    {
      "source": "ai_root_p3_t4",
      "target": "ai_root_p3_t4_s2"
    },
    {
      "source": "ai_root_p3_t4_s2",
      "target": "ai_root_p3_t4_s2_d1"
    },
    {
      "source": "ai_root_p3_t4_s2",
      "target": "ai_root_p3_t4_s2_d2"
    },
    {
      "source": "ai_root_p3_t4",
      "target": "ai_root_p3_t4_s3"
    },
    {
      "source": "ai_root_p3_t4_s3",
      "target": "ai_root_p3_t4_s3_d1"
    },
    {
      "source": "ai_root_p3_t4_s3",
      "target": "ai_root_p3_t4_s3_d2"
    },
    {
      "source": "ai_root_p3_t4",
      "target": "ai_root_p3_t4_s4"
    },
    {
      "source": "ai_root_p3_t4_s4",
      "target": "ai_root_p3_t4_s4_d1"
    },
    {
      "source": "ai_root_p3_t4_s4",
      "target": "ai_root_p3_t4_s4_d2"
    },
    {
      "source": "ai_root_p3_t4",
      "target": "ai_root_p3_t4_s5"
    },
    {
      "source": "ai_root_p3_t4_s5",
      "target": "ai_root_p3_t4_s5_d1"
    },
    {
      "source": "ai_root_p3_t4_s5",
      "target": "ai_root_p3_t4_s5_d2"
    },
    {
      "source": "ai_root_p3",
      "target": "ai_root_p3_t5"
    },
    {
      "source": "ai_root_p3_t5",
      "target": "ai_root_p3_t5_s1"
    },
    {
      "source": "ai_root_p3_t5_s1",
      "target": "ai_root_p3_t5_s1_d1"
    },
    {
      "source": "ai_root_p3_t5_s1",
      "target": "ai_root_p3_t5_s1_d2"
    },
    {
      "source": "ai_root_p3_t5",
      "target": "ai_root_p3_t5_s2"
    },
    {
      "source": "ai_root_p3_t5_s2",
      "target": "ai_root_p3_t5_s2_d1"
    },
    {
      "source": "ai_root_p3_t5_s2",
      "target": "ai_root_p3_t5_s2_d2"
    },
    {
      "source": "ai_root_p3_t5",
      "target": "ai_root_p3_t5_s3"
    },
    {
      "source": "ai_root_p3_t5_s3",
      "target": "ai_root_p3_t5_s3_d1"
    },
    {
      "source": "ai_root_p3_t5_s3",
      "target": "ai_root_p3_t5_s3_d2"
    },
    {
      "source": "ai_root_p3_t5",
      "target": "ai_root_p3_t5_s4"
    },
    {
      "source": "ai_root_p3_t5_s4",
      "target": "ai_root_p3_t5_s4_d1"
    },
    {
      "source": "ai_root_p3_t5_s4",
      "target": "ai_root_p3_t5_s4_d2"
    },
    {
      "source": "ai_root_p3_t5",
      "target": "ai_root_p3_t5_s5"
    },
    {
      "source": "ai_root_p3_t5_s5",
      "target": "ai_root_p3_t5_s5_d1"
    },
    {
      "source": "ai_root_p3_t5_s5",
      "target": "ai_root_p3_t5_s5_d2"
    },
    {
      "source": "ai_root_p3",
      "target": "ai_root_p3_t6"
    },
    {
      "source": "ai_root_p3_t6",
      "target": "ai_root_p3_t6_s1"
    },
    {
      "source": "ai_root_p3_t6_s1",
      "target": "ai_root_p3_t6_s1_d1"
    },
    {
      "source": "ai_root_p3_t6_s1",
      "target": "ai_root_p3_t6_s1_d2"
    },
    {
      "source": "ai_root_p3_t6",
      "target": "ai_root_p3_t6_s2"
    },
    {
      "source": "ai_root_p3_t6_s2",
      "target": "ai_root_p3_t6_s2_d1"
    },
    {
      "source": "ai_root_p3_t6_s2",
      "target": "ai_root_p3_t6_s2_d2"
    },
    {
      "source": "ai_root_p3_t6",
      "target": "ai_root_p3_t6_s3"
    },
    {
      "source": "ai_root_p3_t6_s3",
      "target": "ai_root_p3_t6_s3_d1"
    },
    {
      "source": "ai_root_p3_t6_s3",
      "target": "ai_root_p3_t6_s3_d2"
    },
    {
      "source": "ai_root_p3_t6",
      "target": "ai_root_p3_t6_s4"
    },
    {
      "source": "ai_root_p3_t6_s4",
      "target": "ai_root_p3_t6_s4_d1"
    },
    {
      "source": "ai_root_p3_t6_s4",
      "target": "ai_root_p3_t6_s4_d2"
    },
    {
      "source": "ai_root_p3_t6",
      "target": "ai_root_p3_t6_s5"
    },
    {
      "source": "ai_root_p3_t6_s5",
      "target": "ai_root_p3_t6_s5_d1"
    },
    {
      "source": "ai_root_p3_t6_s5",
      "target": "ai_root_p3_t6_s5_d2"
    },
    {
      "source": "ai_root",
      "target": "ai_root_p4"
    },
    {
      "source": "ai_root_p4",
      "target": "ai_root_p4_t1"
    },
    {
      "source": "ai_root_p4_t1",
      "target": "ai_root_p4_t1_s1"
    },
    {
      "source": "ai_root_p4_t1_s1",
      "target": "ai_root_p4_t1_s1_d1"
    },
    {
      "source": "ai_root_p4_t1_s1",
      "target": "ai_root_p4_t1_s1_d2"
    },
    {
      "source": "ai_root_p4_t1",
      "target": "ai_root_p4_t1_s2"
    },
    {
      "source": "ai_root_p4_t1_s2",
      "target": "ai_root_p4_t1_s2_d1"
    },
    {
      "source": "ai_root_p4_t1_s2",
      "target": "ai_root_p4_t1_s2_d2"
    },
    {
      "source": "ai_root_p4_t1",
      "target": "ai_root_p4_t1_s3"
    },
    {
      "source": "ai_root_p4_t1_s3",
      "target": "ai_root_p4_t1_s3_d1"
    },
    {
      "source": "ai_root_p4_t1_s3",
      "target": "ai_root_p4_t1_s3_d2"
    },
    {
      "source": "ai_root_p4_t1",
      "target": "ai_root_p4_t1_s4"
    },
    {
      "source": "ai_root_p4_t1_s4",
      "target": "ai_root_p4_t1_s4_d1"
    },
    {
      "source": "ai_root_p4_t1_s4",
      "target": "ai_root_p4_t1_s4_d2"
    },
    {
      "source": "ai_root_p4_t1",
      "target": "ai_root_p4_t1_s5"
    },
    {
      "source": "ai_root_p4_t1_s5",
      "target": "ai_root_p4_t1_s5_d1"
    },
    {
      "source": "ai_root_p4_t1_s5",
      "target": "ai_root_p4_t1_s5_d2"
    },
    {
      "source": "ai_root_p4",
      "target": "ai_root_p4_t2"
    },
    {
      "source": "ai_root_p4_t2",
      "target": "ai_root_p4_t2_s1"
    },
    {
      "source": "ai_root_p4_t2_s1",
      "target": "ai_root_p4_t2_s1_d1"
    },
    {
      "source": "ai_root_p4_t2_s1",
      "target": "ai_root_p4_t2_s1_d2"
    },
    {
      "source": "ai_root_p4_t2",
      "target": "ai_root_p4_t2_s2"
    },
    {
      "source": "ai_root_p4_t2_s2",
      "target": "ai_root_p4_t2_s2_d1"
    },
    {
      "source": "ai_root_p4_t2_s2",
      "target": "ai_root_p4_t2_s2_d2"
    },
    {
      "source": "ai_root_p4_t2",
      "target": "ai_root_p4_t2_s3"
    },
    {
      "source": "ai_root_p4_t2_s3",
      "target": "ai_root_p4_t2_s3_d1"
    },
    {
      "source": "ai_root_p4_t2_s3",
      "target": "ai_root_p4_t2_s3_d2"
    },
    {
      "source": "ai_root_p4_t2",
      "target": "ai_root_p4_t2_s4"
    },
    {
      "source": "ai_root_p4_t2_s4",
      "target": "ai_root_p4_t2_s4_d1"
    },
    {
      "source": "ai_root_p4_t2_s4",
      "target": "ai_root_p4_t2_s4_d2"
    },
    {
      "source": "ai_root_p4_t2",
      "target": "ai_root_p4_t2_s5"
    },
    {
      "source": "ai_root_p4_t2_s5",
      "target": "ai_root_p4_t2_s5_d1"
    },
    {
      "source": "ai_root_p4_t2_s5",
      "target": "ai_root_p4_t2_s5_d2"
    },
    {
      "source": "ai_root_p4",
      "target": "ai_root_p4_t3"
    },
    {
      "source": "ai_root_p4_t3",
      "target": "ai_root_p4_t3_s1"
    },
    {
      "source": "ai_root_p4_t3_s1",
      "target": "ai_root_p4_t3_s1_d1"
    },
    {
      "source": "ai_root_p4_t3_s1",
      "target": "ai_root_p4_t3_s1_d2"
    },
    {
      "source": "ai_root_p4_t3",
      "target": "ai_root_p4_t3_s2"
    },
    {
      "source": "ai_root_p4_t3_s2",
      "target": "ai_root_p4_t3_s2_d1"
    },
    {
      "source": "ai_root_p4_t3_s2",
      "target": "ai_root_p4_t3_s2_d2"
    },
    {
      "source": "ai_root_p4_t3",
      "target": "ai_root_p4_t3_s3"
    },
    {
      "source": "ai_root_p4_t3_s3",
      "target": "ai_root_p4_t3_s3_d1"
    },
    {
      "source": "ai_root_p4_t3_s3",
      "target": "ai_root_p4_t3_s3_d2"
    },
    {
      "source": "ai_root_p4_t3",
      "target": "ai_root_p4_t3_s4"
    },
    {
      "source": "ai_root_p4_t3_s4",
      "target": "ai_root_p4_t3_s4_d1"
    },
    {
      "source": "ai_root_p4_t3_s4",
      "target": "ai_root_p4_t3_s4_d2"
    },
    {
      "source": "ai_root_p4_t3",
      "target": "ai_root_p4_t3_s5"
    },
    {
      "source": "ai_root_p4_t3_s5",
      "target": "ai_root_p4_t3_s5_d1"
    },
    {
      "source": "ai_root_p4_t3_s5",
      "target": "ai_root_p4_t3_s5_d2"
    },
    {
      "source": "ai_root_p4",
      "target": "ai_root_p4_t4"
    },
    {
      "source": "ai_root_p4_t4",
      "target": "ai_root_p4_t4_s1"
    },
    {
      "source": "ai_root_p4_t4_s1",
      "target": "ai_root_p4_t4_s1_d1"
    },
    {
      "source": "ai_root_p4_t4_s1",
      "target": "ai_root_p4_t4_s1_d2"
    },
    {
      "source": "ai_root_p4_t4",
      "target": "ai_root_p4_t4_s2"
    },
    {
      "source": "ai_root_p4_t4_s2",
      "target": "ai_root_p4_t4_s2_d1"
    },
    {
      "source": "ai_root_p4_t4_s2",
      "target": "ai_root_p4_t4_s2_d2"
    },
    {
      "source": "ai_root_p4_t4",
      "target": "ai_root_p4_t4_s3"
    },
    {
      "source": "ai_root_p4_t4_s3",
      "target": "ai_root_p4_t4_s3_d1"
    },
    {
      "source": "ai_root_p4_t4_s3",
      "target": "ai_root_p4_t4_s3_d2"
    },
    {
      "source": "ai_root_p4_t4",
      "target": "ai_root_p4_t4_s4"
    },
    {
      "source": "ai_root_p4_t4_s4",
      "target": "ai_root_p4_t4_s4_d1"
    },
    {
      "source": "ai_root_p4_t4_s4",
      "target": "ai_root_p4_t4_s4_d2"
    },
    {
      "source": "ai_root_p4_t4",
      "target": "ai_root_p4_t4_s5"
    },
    {
      "source": "ai_root_p4_t4_s5",
      "target": "ai_root_p4_t4_s5_d1"
    },
    {
      "source": "ai_root_p4_t4_s5",
      "target": "ai_root_p4_t4_s5_d2"
    },
    {
      "source": "ai_root_p4",
      "target": "ai_root_p4_t5"
    },
    {
      "source": "ai_root_p4_t5",
      "target": "ai_root_p4_t5_s1"
    },
    {
      "source": "ai_root_p4_t5_s1",
      "target": "ai_root_p4_t5_s1_d1"
    },
    {
      "source": "ai_root_p4_t5_s1",
      "target": "ai_root_p4_t5_s1_d2"
    },
    {
      "source": "ai_root_p4_t5",
      "target": "ai_root_p4_t5_s2"
    },
    {
      "source": "ai_root_p4_t5_s2",
      "target": "ai_root_p4_t5_s2_d1"
    },
    {
      "source": "ai_root_p4_t5_s2",
      "target": "ai_root_p4_t5_s2_d2"
    },
    {
      "source": "ai_root_p4_t5",
      "target": "ai_root_p4_t5_s3"
    },
    {
      "source": "ai_root_p4_t5_s3",
      "target": "ai_root_p4_t5_s3_d1"
    },
    {
      "source": "ai_root_p4_t5_s3",
      "target": "ai_root_p4_t5_s3_d2"
    },
    {
      "source": "ai_root_p4_t5",
      "target": "ai_root_p4_t5_s4"
    },
    {
      "source": "ai_root_p4_t5_s4",
      "target": "ai_root_p4_t5_s4_d1"
    },
    {
      "source": "ai_root_p4_t5_s4",
      "target": "ai_root_p4_t5_s4_d2"
    },
    {
      "source": "ai_root_p4_t5",
      "target": "ai_root_p4_t5_s5"
    },
    {
      "source": "ai_root_p4_t5_s5",
      "target": "ai_root_p4_t5_s5_d1"
    },
    {
      "source": "ai_root_p4_t5_s5",
      "target": "ai_root_p4_t5_s5_d2"
    },
    {
      "source": "ai_root_p4",
      "target": "ai_root_p4_t6"
    },
    {
      "source": "ai_root_p4_t6",
      "target": "ai_root_p4_t6_s1"
    },
    {
      "source": "ai_root_p4_t6_s1",
      "target": "ai_root_p4_t6_s1_d1"
    },
    {
      "source": "ai_root_p4_t6_s1",
      "target": "ai_root_p4_t6_s1_d2"
    },
    {
      "source": "ai_root_p4_t6",
      "target": "ai_root_p4_t6_s2"
    },
    {
      "source": "ai_root_p4_t6_s2",
      "target": "ai_root_p4_t6_s2_d1"
    },
    {
      "source": "ai_root_p4_t6_s2",
      "target": "ai_root_p4_t6_s2_d2"
    },
    {
      "source": "ai_root_p4_t6",
      "target": "ai_root_p4_t6_s3"
    },
    {
      "source": "ai_root_p4_t6_s3",
      "target": "ai_root_p4_t6_s3_d1"
    },
    {
      "source": "ai_root_p4_t6_s3",
      "target": "ai_root_p4_t6_s3_d2"
    },
    {
      "source": "ai_root_p4_t6",
      "target": "ai_root_p4_t6_s4"
    },
    {
      "source": "ai_root_p4_t6_s4",
      "target": "ai_root_p4_t6_s4_d1"
    },
    {
      "source": "ai_root_p4_t6_s4",
      "target": "ai_root_p4_t6_s4_d2"
    },
    {
      "source": "ai_root_p4_t6",
      "target": "ai_root_p4_t6_s5"
    },
    {
      "source": "ai_root_p4_t6_s5",
      "target": "ai_root_p4_t6_s5_d1"
    },
    {
      "source": "ai_root_p4_t6_s5",
      "target": "ai_root_p4_t6_s5_d2"
    },
    {
      "source": "ai_root",
      "target": "ai_root_p5"
    },
    {
      "source": "ai_root_p5",
      "target": "ai_root_p5_t1"
    },
    {
      "source": "ai_root_p5_t1",
      "target": "ai_root_p5_t1_s1"
    },
    {
      "source": "ai_root_p5_t1_s1",
      "target": "ai_root_p5_t1_s1_d1"
    },
    {
      "source": "ai_root_p5_t1_s1",
      "target": "ai_root_p5_t1_s1_d2"
    },
    {
      "source": "ai_root_p5_t1_s1",
      "target": "ai_root_p5_t1_s1_d3"
    },
    {
      "source": "ai_root_p5_t1",
      "target": "ai_root_p5_t1_s2"
    },
    {
      "source": "ai_root_p5_t1_s2",
      "target": "ai_root_p5_t1_s2_d1"
    },
    {
      "source": "ai_root_p5_t1_s2",
      "target": "ai_root_p5_t1_s2_d2"
    },
    {
      "source": "ai_root_p5_t1",
      "target": "ai_root_p5_t1_s3"
    },
    {
      "source": "ai_root_p5_t1_s3",
      "target": "ai_root_p5_t1_s3_d1"
    },
    {
      "source": "ai_root_p5_t1_s3",
      "target": "ai_root_p5_t1_s3_d2"
    },
    {
      "source": "ai_root_p5_t1",
      "target": "ai_root_p5_t1_s4"
    },
    {
      "source": "ai_root_p5_t1_s4",
      "target": "ai_root_p5_t1_s4_d1"
    },
    {
      "source": "ai_root_p5_t1_s4",
      "target": "ai_root_p5_t1_s4_d2"
    },
    {
      "source": "ai_root_p5_t1",
      "target": "ai_root_p5_t1_s5"
    },
    {
      "source": "ai_root_p5_t1_s5",
      "target": "ai_root_p5_t1_s5_d1"
    },
    {
      "source": "ai_root_p5_t1_s5",
      "target": "ai_root_p5_t1_s5_d2"
    },
    {
      "source": "ai_root_p5",
      "target": "ai_root_p5_t2"
    },
    {
      "source": "ai_root_p5_t2",
      "target": "ai_root_p5_t2_s1"
    },
    {
      "source": "ai_root_p5_t2_s1",
      "target": "ai_root_p5_t2_s1_d1"
    },
    {
      "source": "ai_root_p5_t2_s1",
      "target": "ai_root_p5_t2_s1_d2"
    },
    {
      "source": "ai_root_p5_t2",
      "target": "ai_root_p5_t2_s2"
    },
    {
      "source": "ai_root_p5_t2_s2",
      "target": "ai_root_p5_t2_s2_d1"
    },
    {
      "source": "ai_root_p5_t2_s2",
      "target": "ai_root_p5_t2_s2_d2"
    },
    {
      "source": "ai_root_p5_t2",
      "target": "ai_root_p5_t2_s3"
    },
    {
      "source": "ai_root_p5_t2_s3",
      "target": "ai_root_p5_t2_s3_d1"
    },
    {
      "source": "ai_root_p5_t2_s3",
      "target": "ai_root_p5_t2_s3_d2"
    },
    {
      "source": "ai_root_p5_t2",
      "target": "ai_root_p5_t2_s4"
    },
    {
      "source": "ai_root_p5_t2_s4",
      "target": "ai_root_p5_t2_s4_d1"
    },
    {
      "source": "ai_root_p5_t2_s4",
      "target": "ai_root_p5_t2_s4_d2"
    },
    {
      "source": "ai_root_p5_t2",
      "target": "ai_root_p5_t2_s5"
    },
    {
      "source": "ai_root_p5_t2_s5",
      "target": "ai_root_p5_t2_s5_d1"
    },
    {
      "source": "ai_root_p5_t2_s5",
      "target": "ai_root_p5_t2_s5_d2"
    },
    {
      "source": "ai_root_p5",
      "target": "ai_root_p5_t3"
    },
    {
      "source": "ai_root_p5_t3",
      "target": "ai_root_p5_t3_s1"
    },
    {
      "source": "ai_root_p5_t3_s1",
      "target": "ai_root_p5_t3_s1_d1"
    },
    {
      "source": "ai_root_p5_t3_s1",
      "target": "ai_root_p5_t3_s1_d2"
    },
    {
      "source": "ai_root_p5_t3",
      "target": "ai_root_p5_t3_s2"
    },
    {
      "source": "ai_root_p5_t3_s2",
      "target": "ai_root_p5_t3_s2_d1"
    },
    {
      "source": "ai_root_p5_t3_s2",
      "target": "ai_root_p5_t3_s2_d2"
    },
    {
      "source": "ai_root_p5_t3",
      "target": "ai_root_p5_t3_s3"
    },
    {
      "source": "ai_root_p5_t3_s3",
      "target": "ai_root_p5_t3_s3_d1"
    },
    {
      "source": "ai_root_p5_t3_s3",
      "target": "ai_root_p5_t3_s3_d2"
    },
    {
      "source": "ai_root_p5_t3",
      "target": "ai_root_p5_t3_s4"
    },
    {
      "source": "ai_root_p5_t3_s4",
      "target": "ai_root_p5_t3_s4_d1"
    },
    {
      "source": "ai_root_p5_t3_s4",
      "target": "ai_root_p5_t3_s4_d2"
    },
    {
      "source": "ai_root_p5_t3",
      "target": "ai_root_p5_t3_s5"
    },
    {
      "source": "ai_root_p5_t3_s5",
      "target": "ai_root_p5_t3_s5_d1"
    },
    {
      "source": "ai_root_p5_t3_s5",
      "target": "ai_root_p5_t3_s5_d2"
    },
    {
      "source": "ai_root_p5",
      "target": "ai_root_p5_t4"
    },
    {
      "source": "ai_root_p5_t4",
      "target": "ai_root_p5_t4_s1"
    },
    {
      "source": "ai_root_p5_t4_s1",
      "target": "ai_root_p5_t4_s1_d1"
    },
    {
      "source": "ai_root_p5_t4_s1",
      "target": "ai_root_p5_t4_s1_d2"
    },
    {
      "source": "ai_root_p5_t4",
      "target": "ai_root_p5_t4_s2"
    },
    {
      "source": "ai_root_p5_t4_s2",
      "target": "ai_root_p5_t4_s2_d1"
    },
    {
      "source": "ai_root_p5_t4_s2",
      "target": "ai_root_p5_t4_s2_d2"
    },
    {
      "source": "ai_root_p5_t4",
      "target": "ai_root_p5_t4_s3"
    },
    {
      "source": "ai_root_p5_t4_s3",
      "target": "ai_root_p5_t4_s3_d1"
    },
    {
      "source": "ai_root_p5_t4_s3",
      "target": "ai_root_p5_t4_s3_d2"
    },
    {
      "source": "ai_root_p5_t4",
      "target": "ai_root_p5_t4_s4"
    },
    {
      "source": "ai_root_p5_t4_s4",
      "target": "ai_root_p5_t4_s4_d1"
    },
    {
      "source": "ai_root_p5_t4_s4",
      "target": "ai_root_p5_t4_s4_d2"
    },
    {
      "source": "ai_root_p5_t4",
      "target": "ai_root_p5_t4_s5"
    },
    {
      "source": "ai_root_p5_t4_s5",
      "target": "ai_root_p5_t4_s5_d1"
    },
    {
      "source": "ai_root_p5_t4_s5",
      "target": "ai_root_p5_t4_s5_d2"
    },
    {
      "source": "ai_root_p5",
      "target": "ai_root_p5_t5"
    },
    {
      "source": "ai_root_p5_t5",
      "target": "ai_root_p5_t5_s1"
    },
    {
      "source": "ai_root_p5_t5_s1",
      "target": "ai_root_p5_t5_s1_d1"
    },
    {
      "source": "ai_root_p5_t5_s1",
      "target": "ai_root_p5_t5_s1_d2"
    },
    {
      "source": "ai_root_p5_t5",
      "target": "ai_root_p5_t5_s2"
    },
    {
      "source": "ai_root_p5_t5_s2",
      "target": "ai_root_p5_t5_s2_d1"
    },
    {
      "source": "ai_root_p5_t5_s2",
      "target": "ai_root_p5_t5_s2_d2"
    },
    {
      "source": "ai_root_p5_t5",
      "target": "ai_root_p5_t5_s3"
    },
    {
      "source": "ai_root_p5_t5_s3",
      "target": "ai_root_p5_t5_s3_d1"
    },
    {
      "source": "ai_root_p5_t5_s3",
      "target": "ai_root_p5_t5_s3_d2"
    },
    {
      "source": "ai_root_p5_t5",
      "target": "ai_root_p5_t5_s4"
    },
    {
      "source": "ai_root_p5_t5_s4",
      "target": "ai_root_p5_t5_s4_d1"
    },
    {
      "source": "ai_root_p5_t5_s4",
      "target": "ai_root_p5_t5_s4_d2"
    },
    {
      "source": "ai_root_p5_t5",
      "target": "ai_root_p5_t5_s5"
    },
    {
      "source": "ai_root_p5_t5_s5",
      "target": "ai_root_p5_t5_s5_d1"
    },
    {
      "source": "ai_root_p5_t5_s5",
      "target": "ai_root_p5_t5_s5_d2"
    },
    {
      "source": "ai_root_p5",
      "target": "ai_root_p5_t6"
    },
    {
      "source": "ai_root_p5_t6",
      "target": "ai_root_p5_t6_s1"
    },
    {
      "source": "ai_root_p5_t6_s1",
      "target": "ai_root_p5_t6_s1_d1"
    },
    {
      "source": "ai_root_p5_t6_s1",
      "target": "ai_root_p5_t6_s1_d2"
    },
    {
      "source": "ai_root_p5_t6",
      "target": "ai_root_p5_t6_s2"
    },
    {
      "source": "ai_root_p5_t6_s2",
      "target": "ai_root_p5_t6_s2_d1"
    },
    {
      "source": "ai_root_p5_t6_s2",
      "target": "ai_root_p5_t6_s2_d2"
    },
    {
      "source": "ai_root_p5_t6",
      "target": "ai_root_p5_t6_s3"
    },
    {
      "source": "ai_root_p5_t6_s3",
      "target": "ai_root_p5_t6_s3_d1"
    },
    {
      "source": "ai_root_p5_t6_s3",
      "target": "ai_root_p5_t6_s3_d2"
    },
    {
      "source": "ai_root_p5_t6",
      "target": "ai_root_p5_t6_s4"
    },
    {
      "source": "ai_root_p5_t6_s4",
      "target": "ai_root_p5_t6_s4_d1"
    },
    {
      "source": "ai_root_p5_t6_s4",
      "target": "ai_root_p5_t6_s4_d2"
    },
    {
      "source": "ai_root_p5_t6",
      "target": "ai_root_p5_t6_s5"
    },
    {
      "source": "ai_root_p5_t6_s5",
      "target": "ai_root_p5_t6_s5_d1"
    },
    {
      "source": "ai_root_p5_t6_s5",
      "target": "ai_root_p5_t6_s5_d2"
    },
    {
      "source": "ai_root",
      "target": "ai_root_p6"
    },
    {
      "source": "ai_root_p6",
      "target": "ai_root_p6_t1"
    },
    {
      "source": "ai_root_p6_t1",
      "target": "ai_root_p6_t1_s1"
    },
    {
      "source": "ai_root_p6_t1_s1",
      "target": "ai_root_p6_t1_s1_d1"
    },
    {
      "source": "ai_root_p6_t1_s1",
      "target": "ai_root_p6_t1_s1_d2"
    },
    {
      "source": "ai_root_p6_t1",
      "target": "ai_root_p6_t1_s2"
    },
    {
      "source": "ai_root_p6_t1_s2",
      "target": "ai_root_p6_t1_s2_d1"
    },
    {
      "source": "ai_root_p6_t1_s2",
      "target": "ai_root_p6_t1_s2_d2"
    },
    {
      "source": "ai_root_p6_t1",
      "target": "ai_root_p6_t1_s3"
    },
    {
      "source": "ai_root_p6_t1_s3",
      "target": "ai_root_p6_t1_s3_d1"
    },
    {
      "source": "ai_root_p6_t1_s3",
      "target": "ai_root_p6_t1_s3_d2"
    },
    {
      "source": "ai_root_p6_t1",
      "target": "ai_root_p6_t1_s4"
    },
    {
      "source": "ai_root_p6_t1_s4",
      "target": "ai_root_p6_t1_s4_d1"
    },
    {
      "source": "ai_root_p6_t1_s4",
      "target": "ai_root_p6_t1_s4_d2"
    },
    {
      "source": "ai_root_p6_t1",
      "target": "ai_root_p6_t1_s5"
    },
    {
      "source": "ai_root_p6_t1_s5",
      "target": "ai_root_p6_t1_s5_d1"
    },
    {
      "source": "ai_root_p6_t1_s5",
      "target": "ai_root_p6_t1_s5_d2"
    },
    {
      "source": "ai_root_p6",
      "target": "ai_root_p6_t2"
    },
    {
      "source": "ai_root_p6_t2",
      "target": "ai_root_p6_t2_s1"
    },
    {
      "source": "ai_root_p6_t2_s1",
      "target": "ai_root_p6_t2_s1_d1"
    },
    {
      "source": "ai_root_p6_t2_s1",
      "target": "ai_root_p6_t2_s1_d2"
    },
    {
      "source": "ai_root_p6_t2",
      "target": "ai_root_p6_t2_s2"
    },
    {
      "source": "ai_root_p6_t2_s2",
      "target": "ai_root_p6_t2_s2_d1"
    },
    {
      "source": "ai_root_p6_t2_s2",
      "target": "ai_root_p6_t2_s2_d2"
    },
    {
      "source": "ai_root_p6_t2",
      "target": "ai_root_p6_t2_s3"
    },
    {
      "source": "ai_root_p6_t2_s3",
      "target": "ai_root_p6_t2_s3_d1"
    },
    {
      "source": "ai_root_p6_t2_s3",
      "target": "ai_root_p6_t2_s3_d2"
    },
    {
      "source": "ai_root_p6_t2",
      "target": "ai_root_p6_t2_s4"
    },
    {
      "source": "ai_root_p6_t2_s4",
      "target": "ai_root_p6_t2_s4_d1"
    },
    {
      "source": "ai_root_p6_t2_s4",
      "target": "ai_root_p6_t2_s4_d2"
    },
    {
      "source": "ai_root_p6_t2",
      "target": "ai_root_p6_t2_s5"
    },
    {
      "source": "ai_root_p6_t2_s5",
      "target": "ai_root_p6_t2_s5_d1"
    },
    {
      "source": "ai_root_p6_t2_s5",
      "target": "ai_root_p6_t2_s5_d2"
    },
    {
      "source": "ai_root_p6",
      "target": "ai_root_p6_t3"
    },
    {
      "source": "ai_root_p6_t3",
      "target": "ai_root_p6_t3_s1"
    },
    {
      "source": "ai_root_p6_t3_s1",
      "target": "ai_root_p6_t3_s1_d1"
    },
    {
      "source": "ai_root_p6_t3_s1",
      "target": "ai_root_p6_t3_s1_d2"
    },
    {
      "source": "ai_root_p6_t3",
      "target": "ai_root_p6_t3_s2"
    },
    {
      "source": "ai_root_p6_t3_s2",
      "target": "ai_root_p6_t3_s2_d1"
    },
    {
      "source": "ai_root_p6_t3_s2",
      "target": "ai_root_p6_t3_s2_d2"
    },
    {
      "source": "ai_root_p6_t3",
      "target": "ai_root_p6_t3_s3"
    },
    {
      "source": "ai_root_p6_t3_s3",
      "target": "ai_root_p6_t3_s3_d1"
    },
    {
      "source": "ai_root_p6_t3_s3",
      "target": "ai_root_p6_t3_s3_d2"
    },
    {
      "source": "ai_root_p6_t3",
      "target": "ai_root_p6_t3_s4"
    },
    {
      "source": "ai_root_p6_t3_s4",
      "target": "ai_root_p6_t3_s4_d1"
    },
    {
      "source": "ai_root_p6_t3_s4",
      "target": "ai_root_p6_t3_s4_d2"
    },
    {
      "source": "ai_root_p6_t3",
      "target": "ai_root_p6_t3_s5"
    },
    {
      "source": "ai_root_p6_t3_s5",
      "target": "ai_root_p6_t3_s5_d1"
    },
    {
      "source": "ai_root_p6_t3_s5",
      "target": "ai_root_p6_t3_s5_d2"
    },
    {
      "source": "ai_root_p6",
      "target": "ai_root_p6_t4"
    },
    {
      "source": "ai_root_p6_t4",
      "target": "ai_root_p6_t4_s1"
    },
    {
      "source": "ai_root_p6_t4_s1",
      "target": "ai_root_p6_t4_s1_d1"
    },
    {
      "source": "ai_root_p6_t4_s1",
      "target": "ai_root_p6_t4_s1_d2"
    },
    {
      "source": "ai_root_p6_t4",
      "target": "ai_root_p6_t4_s2"
    },
    {
      "source": "ai_root_p6_t4_s2",
      "target": "ai_root_p6_t4_s2_d1"
    },
    {
      "source": "ai_root_p6_t4_s2",
      "target": "ai_root_p6_t4_s2_d2"
    },
    {
      "source": "ai_root_p6_t4",
      "target": "ai_root_p6_t4_s3"
    },
    {
      "source": "ai_root_p6_t4_s3",
      "target": "ai_root_p6_t4_s3_d1"
    },
    {
      "source": "ai_root_p6_t4_s3",
      "target": "ai_root_p6_t4_s3_d2"
    },
    {
      "source": "ai_root_p6_t4",
      "target": "ai_root_p6_t4_s4"
    },
    {
      "source": "ai_root_p6_t4_s4",
      "target": "ai_root_p6_t4_s4_d1"
    },
    {
      "source": "ai_root_p6_t4_s4",
      "target": "ai_root_p6_t4_s4_d2"
    },
    {
      "source": "ai_root_p6_t4",
      "target": "ai_root_p6_t4_s5"
    },
    {
      "source": "ai_root_p6_t4_s5",
      "target": "ai_root_p6_t4_s5_d1"
    },
    {
      "source": "ai_root_p6_t4_s5",
      "target": "ai_root_p6_t4_s5_d2"
    },
    {
      "source": "ai_root_p6",
      "target": "ai_root_p6_t5"
    },
    {
      "source": "ai_root_p6_t5",
      "target": "ai_root_p6_t5_s1"
    },
    {
      "source": "ai_root_p6_t5_s1",
      "target": "ai_root_p6_t5_s1_d1"
    },
    {
      "source": "ai_root_p6_t5_s1",
      "target": "ai_root_p6_t5_s1_d2"
    },
    {
      "source": "ai_root_p6_t5",
      "target": "ai_root_p6_t5_s2"
    },
    {
      "source": "ai_root_p6_t5_s2",
      "target": "ai_root_p6_t5_s2_d1"
    },
    {
      "source": "ai_root_p6_t5_s2",
      "target": "ai_root_p6_t5_s2_d2"
    },
    {
      "source": "ai_root_p6_t5",
      "target": "ai_root_p6_t5_s3"
    },
    {
      "source": "ai_root_p6_t5_s3",
      "target": "ai_root_p6_t5_s3_d1"
    },
    {
      "source": "ai_root_p6_t5_s3",
      "target": "ai_root_p6_t5_s3_d2"
    },
    {
      "source": "ai_root_p6_t5",
      "target": "ai_root_p6_t5_s4"
    },
    {
      "source": "ai_root_p6_t5_s4",
      "target": "ai_root_p6_t5_s4_d1"
    },
    {
      "source": "ai_root_p6_t5_s4",
      "target": "ai_root_p6_t5_s4_d2"
    },
    {
      "source": "ai_root_p6_t5",
      "target": "ai_root_p6_t5_s5"
    },
    {
      "source": "ai_root_p6_t5_s5",
      "target": "ai_root_p6_t5_s5_d1"
    },
    {
      "source": "ai_root_p6_t5_s5",
      "target": "ai_root_p6_t5_s5_d2"
    },
    {
      "source": "ai_root_p6",
      "target": "ai_root_p6_t6"
    },
    {
      "source": "ai_root_p6_t6",
      "target": "ai_root_p6_t6_s1"
    },
    {
      "source": "ai_root_p6_t6_s1",
      "target": "ai_root_p6_t6_s1_d1"
    },
    {
      "source": "ai_root_p6_t6_s1",
      "target": "ai_root_p6_t6_s1_d2"
    },
    {
      "source": "ai_root_p6_t6",
      "target": "ai_root_p6_t6_s2"
    },
    {
      "source": "ai_root_p6_t6_s2",
      "target": "ai_root_p6_t6_s2_d1"
    },
    {
      "source": "ai_root_p6_t6_s2",
      "target": "ai_root_p6_t6_s2_d2"
    },
    {
      "source": "ai_root_p6_t6",
      "target": "ai_root_p6_t6_s3"
    },
    {
      "source": "ai_root_p6_t6_s3",
      "target": "ai_root_p6_t6_s3_d1"
    },
    {
      "source": "ai_root_p6_t6_s3",
      "target": "ai_root_p6_t6_s3_d2"
    },
    {
      "source": "ai_root_p6_t6",
      "target": "ai_root_p6_t6_s4"
    },
    {
      "source": "ai_root_p6_t6_s4",
      "target": "ai_root_p6_t6_s4_d1"
    },
    {
      "source": "ai_root_p6_t6_s4",
      "target": "ai_root_p6_t6_s4_d2"
    },
    {
      "source": "ai_root_p6_t6",
      "target": "ai_root_p6_t6_s5"
    },
    {
      "source": "ai_root_p6_t6_s5",
      "target": "ai_root_p6_t6_s5_d1"
    },
    {
      "source": "ai_root_p6_t6_s5",
      "target": "ai_root_p6_t6_s5_d2"
    },
    {
      "source": "ai_root",
      "target": "ai_root_p7"
    },
    {
      "source": "ai_root_p7",
      "target": "ai_root_p7_t1"
    },
    {
      "source": "ai_root_p7_t1",
      "target": "ai_root_p7_t1_s1"
    },
    {
      "source": "ai_root_p7_t1_s1",
      "target": "ai_root_p7_t1_s1_d1"
    },
    {
      "source": "ai_root_p7_t1_s1",
      "target": "ai_root_p7_t1_s1_d2"
    },
    {
      "source": "ai_root_p7_t1",
      "target": "ai_root_p7_t1_s2"
    },
    {
      "source": "ai_root_p7_t1_s2",
      "target": "ai_root_p7_t1_s2_d1"
    },
    {
      "source": "ai_root_p7_t1_s2",
      "target": "ai_root_p7_t1_s2_d2"
    },
    {
      "source": "ai_root_p7_t1",
      "target": "ai_root_p7_t1_s3"
    },
    {
      "source": "ai_root_p7_t1_s3",
      "target": "ai_root_p7_t1_s3_d1"
    },
    {
      "source": "ai_root_p7_t1_s3",
      "target": "ai_root_p7_t1_s3_d2"
    },
    {
      "source": "ai_root_p7_t1",
      "target": "ai_root_p7_t1_s4"
    },
    {
      "source": "ai_root_p7_t1_s4",
      "target": "ai_root_p7_t1_s4_d1"
    },
    {
      "source": "ai_root_p7_t1_s4",
      "target": "ai_root_p7_t1_s4_d2"
    },
    {
      "source": "ai_root_p7_t1",
      "target": "ai_root_p7_t1_s5"
    },
    {
      "source": "ai_root_p7_t1_s5",
      "target": "ai_root_p7_t1_s5_d1"
    },
    {
      "source": "ai_root_p7_t1_s5",
      "target": "ai_root_p7_t1_s5_d2"
    },
    {
      "source": "ai_root_p7",
      "target": "ai_root_p7_t2"
    },
    {
      "source": "ai_root_p7_t2",
      "target": "ai_root_p7_t2_s1"
    },
    {
      "source": "ai_root_p7_t2_s1",
      "target": "ai_root_p7_t2_s1_d1"
    },
    {
      "source": "ai_root_p7_t2_s1",
      "target": "ai_root_p7_t2_s1_d2"
    },
    {
      "source": "ai_root_p7_t2",
      "target": "ai_root_p7_t2_s2"
    },
    {
      "source": "ai_root_p7_t2_s2",
      "target": "ai_root_p7_t2_s2_d1"
    },
    {
      "source": "ai_root_p7_t2_s2",
      "target": "ai_root_p7_t2_s2_d2"
    },
    {
      "source": "ai_root_p7_t2",
      "target": "ai_root_p7_t2_s3"
    },
    {
      "source": "ai_root_p7_t2_s3",
      "target": "ai_root_p7_t2_s3_d1"
    },
    {
      "source": "ai_root_p7_t2_s3",
      "target": "ai_root_p7_t2_s3_d2"
    },
    {
      "source": "ai_root_p7_t2",
      "target": "ai_root_p7_t2_s4"
    },
    {
      "source": "ai_root_p7_t2_s4",
      "target": "ai_root_p7_t2_s4_d1"
    },
    {
      "source": "ai_root_p7_t2_s4",
      "target": "ai_root_p7_t2_s4_d2"
    },
    {
      "source": "ai_root_p7_t2",
      "target": "ai_root_p7_t2_s5"
    },
    {
      "source": "ai_root_p7_t2_s5",
      "target": "ai_root_p7_t2_s5_d1"
    },
    {
      "source": "ai_root_p7_t2_s5",
      "target": "ai_root_p7_t2_s5_d2"
    },
    {
      "source": "ai_root_p7",
      "target": "ai_root_p7_t3"
    },
    {
      "source": "ai_root_p7_t3",
      "target": "ai_root_p7_t3_s1"
    },
    {
      "source": "ai_root_p7_t3_s1",
      "target": "ai_root_p7_t3_s1_d1"
    },
    {
      "source": "ai_root_p7_t3_s1",
      "target": "ai_root_p7_t3_s1_d2"
    },
    {
      "source": "ai_root_p7_t3",
      "target": "ai_root_p7_t3_s2"
    },
    {
      "source": "ai_root_p7_t3_s2",
      "target": "ai_root_p7_t3_s2_d1"
    },
    {
      "source": "ai_root_p7_t3_s2",
      "target": "ai_root_p7_t3_s2_d2"
    },
    {
      "source": "ai_root_p7_t3",
      "target": "ai_root_p7_t3_s3"
    },
    {
      "source": "ai_root_p7_t3_s3",
      "target": "ai_root_p7_t3_s3_d1"
    },
    {
      "source": "ai_root_p7_t3_s3",
      "target": "ai_root_p7_t3_s3_d2"
    },
    {
      "source": "ai_root_p7_t3",
      "target": "ai_root_p7_t3_s4"
    },
    {
      "source": "ai_root_p7_t3_s4",
      "target": "ai_root_p7_t3_s4_d1"
    },
    {
      "source": "ai_root_p7_t3_s4",
      "target": "ai_root_p7_t3_s4_d2"
    },
    {
      "source": "ai_root_p7_t3",
      "target": "ai_root_p7_t3_s5"
    },
    {
      "source": "ai_root_p7_t3_s5",
      "target": "ai_root_p7_t3_s5_d1"
    },
    {
      "source": "ai_root_p7_t3_s5",
      "target": "ai_root_p7_t3_s5_d2"
    },
    {
      "source": "ai_root_p7",
      "target": "ai_root_p7_t4"
    },
    {
      "source": "ai_root_p7_t4",
      "target": "ai_root_p7_t4_s1"
    },
    {
      "source": "ai_root_p7_t4_s1",
      "target": "ai_root_p7_t4_s1_d1"
    },
    {
      "source": "ai_root_p7_t4_s1",
      "target": "ai_root_p7_t4_s1_d2"
    },
    {
      "source": "ai_root_p7_t4",
      "target": "ai_root_p7_t4_s2"
    },
    {
      "source": "ai_root_p7_t4_s2",
      "target": "ai_root_p7_t4_s2_d1"
    },
    {
      "source": "ai_root_p7_t4_s2",
      "target": "ai_root_p7_t4_s2_d2"
    },
    {
      "source": "ai_root_p7_t4",
      "target": "ai_root_p7_t4_s3"
    },
    {
      "source": "ai_root_p7_t4_s3",
      "target": "ai_root_p7_t4_s3_d1"
    },
    {
      "source": "ai_root_p7_t4_s3",
      "target": "ai_root_p7_t4_s3_d2"
    },
    {
      "source": "ai_root_p7_t4",
      "target": "ai_root_p7_t4_s4"
    },
    {
      "source": "ai_root_p7_t4_s4",
      "target": "ai_root_p7_t4_s4_d1"
    },
    {
      "source": "ai_root_p7_t4_s4",
      "target": "ai_root_p7_t4_s4_d2"
    },
    {
      "source": "ai_root_p7_t4",
      "target": "ai_root_p7_t4_s5"
    },
    {
      "source": "ai_root_p7_t4_s5",
      "target": "ai_root_p7_t4_s5_d1"
    },
    {
      "source": "ai_root_p7_t4_s5",
      "target": "ai_root_p7_t4_s5_d2"
    },
    {
      "source": "ai_root_p7",
      "target": "ai_root_p7_t5"
    },
    {
      "source": "ai_root_p7_t5",
      "target": "ai_root_p7_t5_s1"
    },
    {
      "source": "ai_root_p7_t5_s1",
      "target": "ai_root_p7_t5_s1_d1"
    },
    {
      "source": "ai_root_p7_t5_s1",
      "target": "ai_root_p7_t5_s1_d2"
    },
    {
      "source": "ai_root_p7_t5",
      "target": "ai_root_p7_t5_s2"
    },
    {
      "source": "ai_root_p7_t5_s2",
      "target": "ai_root_p7_t5_s2_d1"
    },
    {
      "source": "ai_root_p7_t5_s2",
      "target": "ai_root_p7_t5_s2_d2"
    },
    {
      "source": "ai_root_p7_t5",
      "target": "ai_root_p7_t5_s3"
    },
    {
      "source": "ai_root_p7_t5_s3",
      "target": "ai_root_p7_t5_s3_d1"
    },
    {
      "source": "ai_root_p7_t5_s3",
      "target": "ai_root_p7_t5_s3_d2"
    },
    {
      "source": "ai_root_p7_t5",
      "target": "ai_root_p7_t5_s4"
    },
    {
      "source": "ai_root_p7_t5_s4",
      "target": "ai_root_p7_t5_s4_d1"
    },
    {
      "source": "ai_root_p7_t5_s4",
      "target": "ai_root_p7_t5_s4_d2"
    },
    {
      "source": "ai_root_p7_t5",
      "target": "ai_root_p7_t5_s5"
    },
    {
      "source": "ai_root_p7_t5_s5",
      "target": "ai_root_p7_t5_s5_d1"
    },
    {
      "source": "ai_root_p7_t5_s5",
      "target": "ai_root_p7_t5_s5_d2"
    },
    {
      "source": "ai_root_p7",
      "target": "ai_root_p7_t6"
    },
    {
      "source": "ai_root_p7_t6",
      "target": "ai_root_p7_t6_s1"
    },
    {
      "source": "ai_root_p7_t6_s1",
      "target": "ai_root_p7_t6_s1_d1"
    },
    {
      "source": "ai_root_p7_t6_s1",
      "target": "ai_root_p7_t6_s1_d2"
    },
    {
      "source": "ai_root_p7_t6",
      "target": "ai_root_p7_t6_s2"
    },
    {
      "source": "ai_root_p7_t6_s2",
      "target": "ai_root_p7_t6_s2_d1"
    },
    {
      "source": "ai_root_p7_t6_s2",
      "target": "ai_root_p7_t6_s2_d2"
    },
    {
      "source": "ai_root_p7_t6",
      "target": "ai_root_p7_t6_s3"
    },
    {
      "source": "ai_root_p7_t6_s3",
      "target": "ai_root_p7_t6_s3_d1"
    },
    {
      "source": "ai_root_p7_t6_s3",
      "target": "ai_root_p7_t6_s3_d2"
    },
    {
      "source": "ai_root_p7_t6",
      "target": "ai_root_p7_t6_s4"
    },
    {
      "source": "ai_root_p7_t6_s4",
      "target": "ai_root_p7_t6_s4_d1"
    },
    {
      "source": "ai_root_p7_t6_s4",
      "target": "ai_root_p7_t6_s4_d2"
    },
    {
      "source": "ai_root_p7_t6",
      "target": "ai_root_p7_t6_s5"
    },
    {
      "source": "ai_root_p7_t6_s5",
      "target": "ai_root_p7_t6_s5_d1"
    },
    {
      "source": "ai_root_p7_t6_s5",
      "target": "ai_root_p7_t6_s5_d2"
    },
    {
      "source": "ai_root",
      "target": "ai_root_p8"
    },
    {
      "source": "ai_root_p8",
      "target": "ai_root_p8_t1"
    },
    {
      "source": "ai_root_p8_t1",
      "target": "ai_root_p8_t1_s1"
    },
    {
      "source": "ai_root_p8_t1_s1",
      "target": "ai_root_p8_t1_s1_d1"
    },
    {
      "source": "ai_root_p8_t1_s1",
      "target": "ai_root_p8_t1_s1_d2"
    },
    {
      "source": "ai_root_p8_t1",
      "target": "ai_root_p8_t1_s2"
    },
    {
      "source": "ai_root_p8_t1_s2",
      "target": "ai_root_p8_t1_s2_d1"
    },
    {
      "source": "ai_root_p8_t1_s2",
      "target": "ai_root_p8_t1_s2_d2"
    },
    {
      "source": "ai_root_p8_t1",
      "target": "ai_root_p8_t1_s3"
    },
    {
      "source": "ai_root_p8_t1_s3",
      "target": "ai_root_p8_t1_s3_d1"
    },
    {
      "source": "ai_root_p8_t1_s3",
      "target": "ai_root_p8_t1_s3_d2"
    },
    {
      "source": "ai_root_p8_t1",
      "target": "ai_root_p8_t1_s4"
    },
    {
      "source": "ai_root_p8_t1_s4",
      "target": "ai_root_p8_t1_s4_d1"
    },
    {
      "source": "ai_root_p8_t1_s4",
      "target": "ai_root_p8_t1_s4_d2"
    },
    {
      "source": "ai_root_p8_t1",
      "target": "ai_root_p8_t1_s5"
    },
    {
      "source": "ai_root_p8_t1_s5",
      "target": "ai_root_p8_t1_s5_d1"
    },
    {
      "source": "ai_root_p8_t1_s5",
      "target": "ai_root_p8_t1_s5_d2"
    },
    {
      "source": "ai_root_p8",
      "target": "ai_root_p8_t2"
    },
    {
      "source": "ai_root_p8_t2",
      "target": "ai_root_p8_t2_s1"
    },
    {
      "source": "ai_root_p8_t2_s1",
      "target": "ai_root_p8_t2_s1_d1"
    },
    {
      "source": "ai_root_p8_t2_s1",
      "target": "ai_root_p8_t2_s1_d2"
    },
    {
      "source": "ai_root_p8_t2",
      "target": "ai_root_p8_t2_s2"
    },
    {
      "source": "ai_root_p8_t2_s2",
      "target": "ai_root_p8_t2_s2_d1"
    },
    {
      "source": "ai_root_p8_t2_s2",
      "target": "ai_root_p8_t2_s2_d2"
    },
    {
      "source": "ai_root_p8_t2",
      "target": "ai_root_p8_t2_s3"
    },
    {
      "source": "ai_root_p8_t2_s3",
      "target": "ai_root_p8_t2_s3_d1"
    },
    {
      "source": "ai_root_p8_t2_s3",
      "target": "ai_root_p8_t2_s3_d2"
    },
    {
      "source": "ai_root_p8_t2",
      "target": "ai_root_p8_t2_s4"
    },
    {
      "source": "ai_root_p8_t2_s4",
      "target": "ai_root_p8_t2_s4_d1"
    },
    {
      "source": "ai_root_p8_t2_s4",
      "target": "ai_root_p8_t2_s4_d2"
    },
    {
      "source": "ai_root_p8_t2",
      "target": "ai_root_p8_t2_s5"
    },
    {
      "source": "ai_root_p8_t2_s5",
      "target": "ai_root_p8_t2_s5_d1"
    },
    {
      "source": "ai_root_p8_t2_s5",
      "target": "ai_root_p8_t2_s5_d2"
    },
    {
      "source": "ai_root_p8",
      "target": "ai_root_p8_t3"
    },
    {
      "source": "ai_root_p8_t3",
      "target": "ai_root_p8_t3_s1"
    },
    {
      "source": "ai_root_p8_t3_s1",
      "target": "ai_root_p8_t3_s1_d1"
    },
    {
      "source": "ai_root_p8_t3_s1",
      "target": "ai_root_p8_t3_s1_d2"
    },
    {
      "source": "ai_root_p8_t3",
      "target": "ai_root_p8_t3_s2"
    },
    {
      "source": "ai_root_p8_t3_s2",
      "target": "ai_root_p8_t3_s2_d1"
    },
    {
      "source": "ai_root_p8_t3_s2",
      "target": "ai_root_p8_t3_s2_d2"
    },
    {
      "source": "ai_root_p8_t3",
      "target": "ai_root_p8_t3_s3"
    },
    {
      "source": "ai_root_p8_t3_s3",
      "target": "ai_root_p8_t3_s3_d1"
    },
    {
      "source": "ai_root_p8_t3_s3",
      "target": "ai_root_p8_t3_s3_d2"
    },
    {
      "source": "ai_root_p8_t3",
      "target": "ai_root_p8_t3_s4"
    },
    {
      "source": "ai_root_p8_t3_s4",
      "target": "ai_root_p8_t3_s4_d1"
    },
    {
      "source": "ai_root_p8_t3_s4",
      "target": "ai_root_p8_t3_s4_d2"
    },
    {
      "source": "ai_root_p8_t3",
      "target": "ai_root_p8_t3_s5"
    },
    {
      "source": "ai_root_p8_t3_s5",
      "target": "ai_root_p8_t3_s5_d1"
    },
    {
      "source": "ai_root_p8_t3_s5",
      "target": "ai_root_p8_t3_s5_d2"
    },
    {
      "source": "ai_root_p8",
      "target": "ai_root_p8_t4"
    },
    {
      "source": "ai_root_p8_t4",
      "target": "ai_root_p8_t4_s1"
    },
    {
      "source": "ai_root_p8_t4_s1",
      "target": "ai_root_p8_t4_s1_d1"
    },
    {
      "source": "ai_root_p8_t4_s1",
      "target": "ai_root_p8_t4_s1_d2"
    },
    {
      "source": "ai_root_p8_t4",
      "target": "ai_root_p8_t4_s2"
    },
    {
      "source": "ai_root_p8_t4_s2",
      "target": "ai_root_p8_t4_s2_d1"
    },
    {
      "source": "ai_root_p8_t4_s2",
      "target": "ai_root_p8_t4_s2_d2"
    },
    {
      "source": "ai_root_p8_t4",
      "target": "ai_root_p8_t4_s3"
    },
    {
      "source": "ai_root_p8_t4_s3",
      "target": "ai_root_p8_t4_s3_d1"
    },
    {
      "source": "ai_root_p8_t4_s3",
      "target": "ai_root_p8_t4_s3_d2"
    },
    {
      "source": "ai_root_p8_t4",
      "target": "ai_root_p8_t4_s4"
    },
    {
      "source": "ai_root_p8_t4_s4",
      "target": "ai_root_p8_t4_s4_d1"
    },
    {
      "source": "ai_root_p8_t4_s4",
      "target": "ai_root_p8_t4_s4_d2"
    },
    {
      "source": "ai_root_p8_t4",
      "target": "ai_root_p8_t4_s5"
    },
    {
      "source": "ai_root_p8_t4_s5",
      "target": "ai_root_p8_t4_s5_d1"
    },
    {
      "source": "ai_root_p8_t4_s5",
      "target": "ai_root_p8_t4_s5_d2"
    },
    {
      "source": "ai_root_p8",
      "target": "ai_root_p8_t5"
    },
    {
      "source": "ai_root_p8_t5",
      "target": "ai_root_p8_t5_s1"
    },
    {
      "source": "ai_root_p8_t5_s1",
      "target": "ai_root_p8_t5_s1_d1"
    },
    {
      "source": "ai_root_p8_t5_s1",
      "target": "ai_root_p8_t5_s1_d2"
    },
    {
      "source": "ai_root_p8_t5",
      "target": "ai_root_p8_t5_s2"
    },
    {
      "source": "ai_root_p8_t5_s2",
      "target": "ai_root_p8_t5_s2_d1"
    },
    {
      "source": "ai_root_p8_t5_s2",
      "target": "ai_root_p8_t5_s2_d2"
    },
    {
      "source": "ai_root_p8_t5",
      "target": "ai_root_p8_t5_s3"
    },
    {
      "source": "ai_root_p8_t5_s3",
      "target": "ai_root_p8_t5_s3_d1"
    },
    {
      "source": "ai_root_p8_t5_s3",
      "target": "ai_root_p8_t5_s3_d2"
    },
    {
      "source": "ai_root_p8_t5",
      "target": "ai_root_p8_t5_s4"
    },
    {
      "source": "ai_root_p8_t5_s4",
      "target": "ai_root_p8_t5_s4_d1"
    },
    {
      "source": "ai_root_p8_t5_s4",
      "target": "ai_root_p8_t5_s4_d2"
    },
    {
      "source": "ai_root_p8_t5",
      "target": "ai_root_p8_t5_s5"
    },
    {
      "source": "ai_root_p8_t5_s5",
      "target": "ai_root_p8_t5_s5_d1"
    },
    {
      "source": "ai_root_p8_t5_s5",
      "target": "ai_root_p8_t5_s5_d2"
    },
    {
      "source": "ai_root_p8",
      "target": "ai_root_p8_t6"
    },
    {
      "source": "ai_root_p8_t6",
      "target": "ai_root_p8_t6_s1"
    },
    {
      "source": "ai_root_p8_t6_s1",
      "target": "ai_root_p8_t6_s1_d1"
    },
    {
      "source": "ai_root_p8_t6_s1",
      "target": "ai_root_p8_t6_s1_d2"
    },
    {
      "source": "ai_root_p8_t6",
      "target": "ai_root_p8_t6_s2"
    },
    {
      "source": "ai_root_p8_t6_s2",
      "target": "ai_root_p8_t6_s2_d1"
    },
    {
      "source": "ai_root_p8_t6_s2",
      "target": "ai_root_p8_t6_s2_d2"
    },
    {
      "source": "ai_root_p8_t6",
      "target": "ai_root_p8_t6_s3"
    },
    {
      "source": "ai_root_p8_t6_s3",
      "target": "ai_root_p8_t6_s3_d1"
    },
    {
      "source": "ai_root_p8_t6_s3",
      "target": "ai_root_p8_t6_s3_d2"
    },
    {
      "source": "ai_root_p8_t6",
      "target": "ai_root_p8_t6_s4"
    },
    {
      "source": "ai_root_p8_t6_s4",
      "target": "ai_root_p8_t6_s4_d1"
    },
    {
      "source": "ai_root_p8_t6_s4",
      "target": "ai_root_p8_t6_s4_d2"
    },
    {
      "source": "ai_root_p8_t6",
      "target": "ai_root_p8_t6_s5"
    },
    {
      "source": "ai_root_p8_t6_s5",
      "target": "ai_root_p8_t6_s5_d1"
    },
    {
      "source": "ai_root_p8_t6_s5",
      "target": "ai_root_p8_t6_s5_d2"
    }
  ]
};
