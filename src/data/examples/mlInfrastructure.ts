import { MindMapData } from "../../services/llmService";

export const ML_INFRASTRUCTURE_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "mlinfra_root",
      "label": "ML Infrastructure & MLOps Pipelines",
      "description": "Rigorous first-principles blueprint of distributed model training (DDP, Megatron-LM, ZeRO-3), MLflow tracking, Optuna hyperparameter tuning, Triton inference serving engines, GPU MIG partitioning, and edge TFLite compilation.",
      "type": "topic"
    },
    {
      "id": "mlinfra_root_p1",
      "label": "Distributed Model Training & Parallelism Strategies",
      "description": "Scaling LLM and deep learning training across GPU clusters using Data, Tensor, Pipeline, and ZeRO parallelism.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1",
      "label": "PyTorch DistributedDataParallel (DDP)",
      "description": "Single-program multi-data parallelism replicating full model weights across all GPU workers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s1",
      "label": "Ring-AllReduce Gradient Synchronization",
      "description": "Averaging gradients across GPU workers using Ring-AllReduce communication rings.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s1_d1",
      "label": "2 * (N - 1) / N * Data Size Ring Transfer",
      "description": "Transferring data in 2*(N-1)/N steps over ring topology connections.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s1_d2",
      "label": "NCCL High-Performance GPU Interconnect (NVLink)",
      "description": "Utilizing NVIDIA NCCL libraries over 900 GB/s NVLink inter-GPU channels.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s2",
      "label": "Overlapping Backward Pass & Gradient Reduction",
      "description": "Initiating Ring-AllReduce bucket transfers while backward pass computation continues.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s2_d1",
      "label": "Bucket-Based Gradient Aggregation (MB Thresholds)",
      "description": "Grouping tensor gradients into bucket buffers before dispatching transfers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s2_d2",
      "label": "Computation-Communication Overlap Gains",
      "description": "Hiding gradient synchronization latency behind backward autograd passes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s3",
      "label": "Gradient Accumulation Steps",
      "description": "Simulating large effective batch sizes across limited memory GPU clusters.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s3_d1",
      "label": "no_sync() Context Manager Mechanics",
      "description": "Suppressing AllReduce gradient transfers across intermediate micro-batches.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s3_d2",
      "label": "Optimizer Step on Final Accumulation Batch",
      "description": "Executing single optimizer updates and gradient synchronizations after N micro-batches.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s4",
      "label": "Rank 0 Process Coordination & Seed Alignment",
      "description": "Synchronizing worker random seeds and dataset shuffling orders across process ranks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s4_d1",
      "label": "DistributedSampler Dataset Shuffling",
      "description": "Partitioning dataset indices deterministically to prevent duplicate sample training.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s4_d2",
      "label": "Broadcast Master Weights on Init",
      "description": "Broadcasting Rank 0 initial model weights to guarantee identical starting states.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s5",
      "label": "DDP Memory Scalability Limits",
      "description": "Recognizing memory constraints of storing full model weights and optimizer states on every GPU.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s5_d1",
      "label": "16x Model Parameter Memory Requirement",
      "description": "Requiring ~16 bytes per parameter (Weights, Gradients, Adam FP32 Master Weights, Momentum, Variance).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t1_s5_d2",
      "label": "Hard Parameter Count Cap (~10B Parameters per GPU)",
      "description": "Exhausting 80GB H100 VRAM when model parameters cross 10 billion parameters.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2",
      "label": "Tensor Parallelism (Megatron-LM)",
      "description": "Splitting individual weight matrices (Linear layers) across parallel GPUs within transformer blocks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s1",
      "label": "Column-Parallel Linear Layers (MLP Gate / Query Projection)",
      "description": "Splitting weight matrix W along columns (W = [W_1 | W_2]) across GPUs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s1_d1",
      "label": "Forward Pass Output Matrix Splitting",
      "description": "Computing Y_i = X * W_i independently on each GPU without inter-GPU communication.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s1_d2",
      "label": "All-Gather Output Concatenation",
      "description": "Concatenating partial output matrices along column dimensions when needed.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s2",
      "label": "Row-Parallel Linear Layers (MLP Output / Attention Projection)",
      "description": "Splitting weight matrix W along rows across GPUs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s2_d1",
      "label": "Partial Matrix Multiplication (Y_i = X_i * W_i)",
      "description": "Multiplying row-split weight chunks against column-split input chunks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s2_d2",
      "label": "All-Reduce Summation Pass",
      "description": "Executing All-Reduce Sum operations to combine partial matrix products.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s3",
      "label": "Multi-Head Attention (MHA) Tensor Parallelism",
      "description": "Splitting Query, Key, and Value attention heads across parallel GPU ranks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s3_d1",
      "label": "Head-Level Parallel Computation",
      "description": "Assigning N attention heads evenly across TP GPUs (e.g. 64 heads across 8 GPUs).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s3_d2",
      "label": "Zero Communication Attention Execution",
      "description": "Executing attention softmax and value matrix products locally without inter-GPU transfers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s4",
      "label": "Intra-Node NVLink Requirement (TP Group Size = 8)",
      "description": "Restricting Tensor Parallelism to GPUs connected via high-bandwidth NVLink backbones.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s4_d1",
      "label": "Heavy All-Reduce Communication Frequencies",
      "description": "Executing 2 All-Reduce operations per transformer layer.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s4_d2",
      "label": "Inter-Node PCIe Bottleneck Avoidance",
      "description": "Avoiding slow inter-node PCIe/InfiniBand links for Tensor Parallelism.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s5",
      "label": "Sequence Parallelism Optimization",
      "description": "Splitting LayerNorm and Dropout operations along sequence length dimensions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s5_d1",
      "label": "Reduce-Scatter and All-Gather Swaps",
      "description": "Replacing All-Reduce calls with Reduce-Scatter and All-Gather operations.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t2_s5_d2",
      "label": "LayerNorm Activation Memory Reduction",
      "description": "Reducing activation memory footprint per GPU proportionally to TP size.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3",
      "label": "DeepSpeed ZeRO (Zero Redundancy Optimizer)",
      "description": "Memory optimization technology partitioning optimizer states, gradients, and parameters across GPUs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s1",
      "label": "ZeRO-Stage 1: Optimizer State Partitioning",
      "description": "Partitioning Adam optimizer states (FP32 master weights, momentum, variance) across GPUs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s1_d1",
      "label": "4x Memory Footprint Reduction",
      "description": "Splitting 12 bytes/parameter optimizer state across N GPUs (12/N bytes per GPU).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s1_d2",
      "label": "Zero Communication Overhead Increase",
      "description": "Maintaining identical communication volumes to standard DDP.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s2",
      "label": "ZeRO-Stage 2: Gradient Partitioning",
      "description": "Partitioning parameter gradients across GPUs as they are computed during autograd.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s2_d1",
      "label": "2x Additional Memory Savings (8/N bytes per GPU)",
      "description": "Retaining only local gradient partitions assigned to specific optimizer ranks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s2_d2",
      "label": "Reduce-Scatter Replacing All-Reduce",
      "description": "Executing Reduce-Scatter operations to stream gradients directly to assigned owner ranks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s3",
      "label": "ZeRO-Stage 3: Parameter Partitioning",
      "description": "Partitioning model parameters (weights) across all GPUs, assembling them on-the-fly.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s3_d1",
      "label": "Linear Memory Scaling (16/N bytes per GPU)",
      "description": "Achieving complete linear memory reduction, allowing trillion-parameter model training.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s3_d2",
      "label": "All-Gather On-Demand Parameter Broadcast",
      "description": "Broadcasting full layer parameters via All-Gather right before layer forward/backward execution.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s4",
      "label": "ZeRO-Offload (CPU & NVMe Memory Offloading)",
      "description": "Offloading optimizer updates and parameter states to host CPU RAM and NVMe SSDs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s4_d1",
      "label": "Host CPU Memory Offloading Pipeline",
      "description": "Streaming parameters over PCIe bus to compute Adam updates on host CPUs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s4_d2",
      "label": "Single-GPU 13B Model Training Capability",
      "description": "Training 13B models on single 24GB GPUs by using host RAM for optimizer states.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s5",
      "label": "ZeRO-Infinity (NVMe Memory Subsystem Integration)",
      "description": "Leveraging NVMe flash drives to train multi-trillion parameter models.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s5_d1",
      "label": "NVMe Asynchronous Prefetch Engine",
      "description": "Prefetching model layers from NVMe SSDs in parallel with GPU computation.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t3_s5_d2",
      "label": "Unbounded Model Parameter Capacity",
      "description": "Scaling parameter capacity to 100+ trillion parameters.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4",
      "label": "Pipeline Parallelism (GPipe & 1F1B Schedule)",
      "description": "Partitioning model layers sequentially across a pipeline chain of GPU nodes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s1",
      "label": "Layer-Wise Node Partitioning",
      "description": "Assigning sequential transformer layer blocks to distinct GPUs in a pipeline chain.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s1_d1",
      "label": "Inter-Node Activation Forwarding",
      "description": "Forwarding intermediate layer activations from GPU(i) to GPU(i+1) over network links.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s1_d2",
      "label": "Pipeline Bubble Latency Penalty",
      "description": "Managing idle GPU wait time (bubble) occurring while initial layers process micro-batches.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s2",
      "label": "Micro-Batch Pipeline Slicing (GPipe)",
      "description": "Slicing mini-batches into M micro-batches to fill pipeline execution channels.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s2_d1",
      "label": "Pipeline Bubble Ratio Formula (F = (P-1)/(M + P-1))",
      "description": "Reducing idle bubble ratio F by increasing micro-batch count M relative to pipeline depth P.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s2_d2",
      "label": "Synchronous Batch Normalization Challenges",
      "description": "Handling batch statistics across micro-batches during pipeline execution.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s3",
      "label": "1F1B (One Forward, One Backward) Scheduling",
      "description": "Interleaving forward and backward micro-batch passes to cap activation memory growth.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s3_d1",
      "label": "Activation Memory Cap (Bounded by P Micro-Batches)",
      "description": "Holding at most P micro-batch activations in memory per GPU.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s3_d2",
      "label": "Memory-Efficient Steady-State Execution",
      "description": "Releasing activation memory immediately as backward micro-batches complete.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s4",
      "label": "Interleaved 1F1B Pipeline Schedule",
      "description": "Assigning multiple non-contiguous layer chunks to each physical GPU.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s4_d1",
      "label": "Virtual Pipeline Stages",
      "description": "Executing Virtual Stage 1 and Virtual Stage 2 on single physical GPUs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s4_d2",
      "label": "2x Pipeline Bubble Reduction",
      "description": "Halving pipeline bubble overhead compared to standard 1F1B scheduling.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s5",
      "label": "Activation Checkpointing (Recomputation / Gradient Checkpointing)",
      "description": "Trading extra computation time for massive memory savings by recomputing activations.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s5_d1",
      "label": "Discarding Intermediate Forward Activations",
      "description": "Saving only transformer block boundary activations in RAM.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t4_s5_d2",
      "label": "On-Demand Backward Pass Recomputation",
      "description": "Re-running layer forward passes during backward steps to compute gradients.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5",
      "description": "Detailed first-principles mechanics for Distributed Model Training & Parallelism Strategies topic 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s1",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Model Training & Parallelism Strategies Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s1_d1",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s1_d2",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s2",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Model Training & Parallelism Strategies Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s2_d1",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s2_d2",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s3",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Model Training & Parallelism Strategies Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s3_d1",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s3_d2",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s4",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Model Training & Parallelism Strategies Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s4_d1",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s4_d2",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s5",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Model Training & Parallelism Strategies Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s5_d1",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t5_s5_d2",
      "label": "Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6",
      "description": "Detailed first-principles mechanics for Distributed Model Training & Parallelism Strategies topic 6.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s1",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Model Training & Parallelism Strategies Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s1_d1",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s1_d2",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s2",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Model Training & Parallelism Strategies Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s2_d1",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s2_d2",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s3",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Model Training & Parallelism Strategies Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s3_d1",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s3_d2",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s4",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Model Training & Parallelism Strategies Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s4_d1",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s4_d2",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s5",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Model Training & Parallelism Strategies Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s5_d1",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p1_t6_s5_d2",
      "label": "Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Model Training & Parallelism Strategies Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2",
      "label": "Model Registry, Lineage & Experiment Tracking",
      "description": "MLflow tracking, DVC dataset versioning, artifact lineage, and reproducible experiment pipelines.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1",
      "label": "MLflow Tracking & Metadata Schema",
      "description": "Open-source platform for logging experiment parameters, metrics, code versions, and artifacts.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s1",
      "label": "Backend Store vs Artifact Store Architecture",
      "description": "Decoupling relational metadata storage from heavy binary artifact storage.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s1_d1",
      "label": "SQL Backend Store (PostgreSQL / MySQL)",
      "description": "Storing run parameters, metric time-series, tags, and experiment metadata.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s1_d2",
      "label": "Object Artifact Store (S3 / GCS / Azure Blob)",
      "description": "Storing model weights, confusion matrix plots, and serialized pipeline objects.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s2",
      "label": "Metric Time-Series Logging Engine (log_metric)",
      "description": "Streaming real-time epoch training loss and evaluation metrics to tracking servers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s2_d1",
      "label": "Step & Timestamp Indexing",
      "description": "Logging metric values associated with training step numbers and Unix timestamps.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s2_d2",
      "label": "Asynchronous Batch Logging Buffer",
      "description": "Buffering metric log calls to prevent blocking training loops.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s3",
      "label": "Autologging Integrations (PyTorch, Lightning, XGBoost)",
      "description": "Capturing framework hyperparameters and metrics automatically.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s3_d1",
      "label": "Framework Callback Interception",
      "description": "Intercepting training callbacks to log learning rates, batch sizes, and model graphs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s3_d2",
      "label": "Zero Code Boilerplate Setup",
      "description": "Enabling autologging with single mlflow.autolog() function calls.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s4",
      "label": "MLflow Model Registry State Machine",
      "description": "Managing model version transitions across lifecycle stages (Staging, Production, Archived).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s4_d1",
      "label": "Semantic Model Versioning (v1, v2, v3)",
      "description": "Registering new model versions produced by training runs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s4_d2",
      "label": "RBAC Stage Transition Approvals",
      "description": "Requiring lead MLOps approval to promote model versions to Production.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s5",
      "label": "MLmodel Format Specs & Flavors",
      "description": "Standardized directory format describing model execution environments.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s5_d1",
      "label": "Python Function (pyfunc) Universal Abstraction",
      "description": "Wrapping diverse frameworks (PyTorch, ONNX, Scikit-learn) in standard predict() interfaces.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t1_s5_d2",
      "label": "Conda & Docker Environment Re-creation",
      "description": "Encoding exact Python package requirements for reproducible serving.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2",
      "label": "Data Version Control (DVC) Architecture",
      "description": "Git-like version control system for tracking large datasets, machine learning models, and pipeline DAGs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s1",
      "label": "Pointer File (.dvc) Git Tracking",
      "description": "Replacing large dataset files in Git with lightweight 2KB text pointer files.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s1_d1",
      "label": "md5 / etag Content Hash Generation",
      "description": "Hashing dataset contents to generate unique content-addressable IDs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s1_d2",
      "label": "Git Repository Commit History Coupling",
      "description": "Committing .dvc pointer files to Git to couple code versions with exact dataset versions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s2",
      "label": "Content-Addressable Remote Storage (dvc push / pull)",
      "description": "Storing raw dataset files in centralized cloud object storage.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s2_d1",
      "label": "Hash-Indexed Directory Structure (files/md5/2b/3a4f...)",
      "description": "Organizing remote S3 storage using content hash prefixes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s2_d2",
      "label": "Deduplicated Dataset Transfer Pipelines",
      "description": "Transferring only modified dataset chunks during dvc push operations.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s3",
      "label": "DVC Pipeline DAG Execution (dvc.yaml)",
      "description": "Defining reproducible multi-stage data processing and training pipelines.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s3_d1",
      "label": "Stage Dependency & Output Declarations (deps, outs)",
      "description": "Tracking input files and output artifacts per pipeline stage.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s3_d2",
      "label": "Cached Stage Execution (dvc repro)",
      "description": "Skipping execution of un-modified pipeline stages whose dependencies haven't changed.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s4",
      "label": "Data Branching & Experiment Comparison",
      "description": "Creating Git branches to experiment with distinct dataset preprocessing techniques.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s4_d1",
      "label": "Dataset Experimentation Isolation",
      "description": "Switching dataset versions instantly using git checkout alongside dvc checkout.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s4_d2",
      "label": "Metrics Diff Comparisons (dvc metrics diff)",
      "description": "Comparing model evaluation metrics across different dataset processing branches.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s5",
      "label": "Hardlinks & Symlinks Local Optimization",
      "description": "Connecting local DVC cache files to workspace working directories without duplicating disk space.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s5_d1",
      "label": "File System Hardlink Creation",
      "description": "Creating hardlinks to cached dataset files for instant checkout.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t2_s5_d2",
      "label": "Copy-on-Write File Protection",
      "description": "Preventing accidental corruption of cached dataset files.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3",
      "label": "Lineage Tracking & OpenLineage Integration",
      "description": "Tracking end-to-end data dependencies from raw ingestion to model deployment.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s1",
      "label": "OpenLineage API Event Specifications",
      "description": "Standardized JSON spec capturing job execution events, inputs, and outputs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s1_d1",
      "label": "START, COMPLETE, and FAIL Job Events",
      "description": "Emitting lifecycle events as data pipelines execute.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s1_d2",
      "label": "Dataset Namespace & Name Identifiers",
      "description": "Tracking dataset identities across SQL databases, S3 buckets, and feature stores.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s2",
      "label": "Marquez Lineage Backend Visualization",
      "description": "Open-source metadata server collecting and rendering lineage graphs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s2_d1",
      "label": "Interactive Lineage DAG Rendering",
      "description": "Visualizing data flows from source databases through Spark pipelines to model targets.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s2_d2",
      "label": "Impact Analysis for Schema Changes",
      "description": "Identifying downstream models impacted by upstream database schema modifications.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s3",
      "label": "Automated Spark & Airflow Integration Hooks",
      "description": "Extracting lineage metadata automatically without modifying pipeline business logic.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s3_d1",
      "label": "Spark Listener Event Interception",
      "description": "Intercepting Spark execution plans to extract read/write dataset paths.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s3_d2",
      "label": "Airflow Operator Lineage Extraction",
      "description": "Extracting DAG task inputs and outputs automatically.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s4",
      "label": "Data Quality & Lineage Correlation",
      "description": "Correlating model performance anomalies back to upstream data quality degradations.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s4_d1",
      "label": "Great Expectations Test Result Binding",
      "description": "Attaching data validation test results directly to lineage nodes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s4_d2",
      "label": "Root Cause Incident Isolation",
      "description": "Tracing production model accuracy drops to corrupt upstream data pipelines.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s5",
      "label": "Regulatory Auditability Compliance",
      "description": "Providing complete audit trails explaining how specific model predictions were produced.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s5_d1",
      "label": "Model Provenance Reconstruction",
      "description": "Reconstructing exact training code, hyperparameters, and dataset snapshots used for any deployed model.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t3_s5_d2",
      "label": "EU AI Act Governance Compliance",
      "description": "Meeting regulatory requirements for transparent AI lineage documentation.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4",
      "label": "Model Card Automation & Documentation",
      "description": "Automating the generation of standardized model cards documenting capabilities, limitations, and evaluation metrics.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s1",
      "label": "Google Model Card Toolkit Integration",
      "description": "Library for generating structured HTML/Markdown model documentation from evaluation metrics.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s1_d1",
      "label": "JSON Schema Model Card Layout",
      "description": "Structuring model metadata, intended use cases, and evaluation datasets.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s1_d2",
      "label": "Automated Metric Plot Rendering",
      "description": "Embedding ROC curves, confusion matrices, and fairness plots.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s2",
      "label": "Fairness & Bias Metric Disaggregation",
      "description": "Evaluating model performance across distinct demographic sub-populations.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s2_d1",
      "label": "Demographic Parity & Equalized Odds Metrics",
      "description": "Measuring performance disparities across protected attribute groups.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s2_d2",
      "label": "Disaggregated Performance Tables",
      "description": "Displaying accuracy, precision, and recall per subgroup in model documentation.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s3",
      "label": "Intended Use & Out-of-Scope Declarations",
      "description": "Documenting valid application domains and explicitly prohibited deployment scenarios.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s3_d1",
      "label": "Domain Limitation Guidelines",
      "description": "Defining clear operational boundaries for model deployment.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s3_d2",
      "label": "Risk Mitigation Recommendations",
      "description": "Providing operational guidance for human-in-the-loop oversight.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s4",
      "label": "Automated CI/CD Model Card Generation",
      "description": "Generating updated model cards automatically as part of continuous training pipelines.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s4_d1",
      "label": "Pipeline Artifact Export",
      "description": "Exporting rendered HTML model cards alongside trained model binary artifacts.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s4_d2",
      "label": "Versioned Model Documentation Hosting",
      "description": "Publishing model cards to internal developer portals.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s5",
      "label": "Environmental Impact & Carbon Footprint Tracking",
      "description": "Logging hardware compute hours and estimated carbon emissions incurred during training.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s5_d1",
      "label": "CodeCarbon Library Integration",
      "description": "Tracking GPU power draw and converting kWh to estimated CO2 emissions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t4_s5_d2",
      "label": "Sustainability Reporting Metadata",
      "description": "Including carbon footprint metrics in public model documentation.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5",
      "description": "Detailed first-principles mechanics for Model Registry, Lineage & Experiment Tracking topic 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s1",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Model Registry, Lineage & Experiment Tracking Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s1_d1",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s1_d2",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s2",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Model Registry, Lineage & Experiment Tracking Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s2_d1",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s2_d2",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s3",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Model Registry, Lineage & Experiment Tracking Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s3_d1",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s3_d2",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s4",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Model Registry, Lineage & Experiment Tracking Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s4_d1",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s4_d2",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s5",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Model Registry, Lineage & Experiment Tracking Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s5_d1",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t5_s5_d2",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6",
      "description": "Detailed first-principles mechanics for Model Registry, Lineage & Experiment Tracking topic 6.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s1",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Model Registry, Lineage & Experiment Tracking Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s1_d1",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s1_d2",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s2",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Model Registry, Lineage & Experiment Tracking Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s2_d1",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s2_d2",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s3",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Model Registry, Lineage & Experiment Tracking Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s3_d1",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s3_d2",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s4",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Model Registry, Lineage & Experiment Tracking Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s4_d1",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s4_d2",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s5",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Model Registry, Lineage & Experiment Tracking Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s5_d1",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p2_t6_s5_d2",
      "label": "Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Registry, Lineage & Experiment Tracking Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3",
      "label": "Hyperparameter Optimization (HPO) & Search",
      "description": "Bayesian optimization, Tree-structured Parzen Estimators (TPE), Ray Tune distributed search, and Optuna.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1",
      "label": "Optuna Framework & TPE Sampler Architecture",
      "description": "High-performance hyperparameter optimization framework featuring define-by-run search spaces.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s1",
      "label": "Tree-structured Parzen Estimator (TPE) Algorithm",
      "description": "Bayesian optimization algorithm modeling good and bad hyperparameter distributions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s1_d1",
      "label": "Probability Density Ratio Maximization (l(x) / g(x))",
      "description": "Modeling p(x|y) using kernel density estimators for top performing configurations l(x) vs remaining g(x).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s1_d2",
      "label": "Expected Improvement (EI) Optimization",
      "description": "Selecting candidate hyperparameter points that maximize Expected Improvement.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s2",
      "label": "Define-by-Run Dynamic Search Spaces",
      "description": "Constructing search spaces dynamically inside standard Python conditional loops.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s2_d1",
      "label": "trial.suggest_float & suggest_categorical Specs",
      "description": "Suggesting learning rates, layer counts, and optimizer choices dynamically.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s2_d2",
      "label": "Complex Conditional Search Topology",
      "description": "Sampling hyperparameters conditioned on chosen model architecture types.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s3",
      "label": "Optuna Storage Backends (RDB / Redis)",
      "description": "Managing state across distributed HPO worker trials using shared databases.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s3_d1",
      "label": "RDB Storage Backend (PostgreSQL)",
      "description": "Persisting trial states and history across multi-node worker pools.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s3_d2",
      "label": "Concurrent Trial Lock-Free Execution",
      "description": "Executing parallel trials without database lock contention.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s4",
      "label": "Multi-Objective Optimization (NSGA-II)",
      "description": "Optimizing multiple competing objectives (e.g. maximize accuracy while minimizing latency).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s4_d1",
      "label": "Pareto Front Surface Extraction",
      "description": "Identifying optimal trade-off solutions along non-dominated Pareto frontiers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s4_d2",
      "label": "Multi-Objective Trial Ranking",
      "description": "Ranking hyperparameter trials using NSGA-II genetic algorithms.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s5",
      "label": "Optuna Dashboard & Visualization",
      "description": "Web dashboard for analyzing hyperparameter importance and trial convergence.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s5_d1",
      "label": "Hyperparameter Importance Plots (fANOVA)",
      "description": "Calculating ANOVA variance fractions to identify parameters with highest impact.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t1_s5_d2",
      "label": "Parallel Coordinate & Slice Diagrams",
      "description": "Visualizing multi-dimensional hyperparameter search spaces.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2",
      "label": "Early Stopping & Pruning Algorithms",
      "description": "Terminating unpromising hyperparameter trials early to conserve GPU compute resources.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s1",
      "label": "Median Pruner & Successive Halving",
      "description": "Pruning trials whose intermediate metrics fall below historical median performance.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s1_d1",
      "label": "Intermediate Value Reporting (trial.report)",
      "description": "Reporting epoch evaluation loss to pruning engines.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s1_d2",
      "label": "Early Termination Execution (trial.should_prune)",
      "description": "Aborting training loops early if performance falls behind peer trials.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s2",
      "label": "Asynchronous Successive Halving Algorithm (SHA / ASHA)",
      "description": "Promoting top performing trials across exponentially increasing resource rungs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s2_d1",
      "label": "Rung-Based Trial Promotion (Reduction Factor 1/3)",
      "description": "Allocating 1 epoch to all trials, 3 epochs to top 1/3, 9 epochs to top 1/9.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s2_d2",
      "label": "Asynchronous Worker Allocation",
      "description": "Promoting trials as soon as rungs fill without waiting for slow workers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s3",
      "label": "Hyperband Algorithm (Combining Random Search & ASHA)",
      "description": "Balancing resource allocation across exploration (many trials, few epochs) and exploitation.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s3_d1",
      "label": "Bracket Allocation Strategy",
      "description": "Executing multiple ASHA brackets with varying initial trial counts and resource allocations.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s3_d2",
      "label": "Theoretical Convergence Bounds",
      "description": "Achieving optimal hyperparameter search performance within fixed compute budgets.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s4",
      "label": "PBT (Population-Based Training)",
      "description": "Dynamically mutating hyperparameters while training single populations of models.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s4_d1",
      "label": "Exploit and Mutate Steps",
      "description": "Replacing weights of poor models with top models while perturbing hyperparameters.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s4_d2",
      "label": "Dynamic Hyperparameter Schedules",
      "description": "Discovering optimal learning rate schedules automatically during single training runs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s5",
      "label": "Compute Budget Savings Impact (Up to 80%)",
      "description": "Quantifying resource savings achieved by pruning bad trials early.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s5_d1",
      "label": "80% Reduction in Total GPU Hours",
      "description": "Redirecting compute resources away from unpromising hyperparameter configurations.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t2_s5_d2",
      "label": "Faster Convergence to Optimal Configurations",
      "description": "Reaching high-performing models in a fraction of total search time.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3",
      "label": "Ray Tune Distributed HPO Engine",
      "description": "Scalable distributed hyperparameter tuning framework built on the Ray actor platform.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s1",
      "label": "Ray Actor & Task Architecture",
      "description": "Distributing trial execution across heterogeneous CPU/GPU Ray clusters.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s1_d1",
      "label": "@ray.remote Trial Worker Wrapping",
      "description": "Wrapping training functions as distributed Ray tasks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s1_d2",
      "label": "Dynamic Resource Scheduling (resources_per_trial)",
      "description": "Allocating fractional GPUs (e.g. 0.25 GPU per trial) to maximize hardware density.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s2",
      "label": "Search Algorithm & Scheduler Decoupling",
      "description": "Combining arbitrary search algorithms (Optuna, BayesOpt) with advanced schedulers (ASHA, PBT).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s2_d1",
      "label": "SearchSpace Specification Wrappers",
      "description": "Defining unified search spaces compatible with multiple search backends.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s2_d2",
      "label": "Scheduler Trial Lifecycle Interception",
      "description": "Allowing schedulers to pause, resume, or terminate Ray trial actors dynamically.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s3",
      "label": "Fault-Tolerant Trial Checkpointing",
      "description": "Saving trial state to persistent storage to recover from worker node failures.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s3_d1",
      "label": "ray.train.report Checkpointing",
      "description": "Saving model checkpoints alongside metric reports.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s3_d2",
      "label": "Automated Trial Migration on Preemption",
      "description": "Resuming preempted spot-instance trials on healthy worker nodes automatically.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s4",
      "label": "Ray Dashboard Real-Time Cluster Monitoring",
      "description": "Visualizing cluster resource utilization and trial progress.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s4_d1",
      "label": "Per-Node CPU / GPU Memory Graphs",
      "description": "Monitoring hardware utilization across all Ray cluster nodes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s4_d2",
      "label": "Trial Status Matrix & Metric Streams",
      "description": "Tracking active, paused, and completed trial metrics in real time.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s5",
      "label": "Integration with Distributed Training (Ray Train)",
      "description": "Executing hyperparameter tuning over multi-GPU distributed training jobs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s5_d1",
      "label": "Scaling Multi-GPU Trials",
      "description": "Launching distributed PyTorch DDP jobs as individual trials within Ray Tune.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t3_s5_d2",
      "label": "Large Model Hyperparameter Exploration",
      "description": "Tuning hyperparameters for multi-billion parameter models.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4",
      "label": "Bayesian Optimization & Gaussian Processes",
      "description": "Mathematical foundations of surrogate model optimization for expensive black-box functions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s1",
      "label": "Gaussian Process (GP) Surrogate Models",
      "description": "Modeling objective function probability distributions using Gaussian processes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s1_d1",
      "label": "Mean & Covariance Function (Kernel) Selection",
      "description": "Using Matérn or RBF kernels to model function smoothness.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s1_d2",
      "label": "Posterior Distribution Updates (Mean mu(x), Variance sigma^2(x))",
      "description": "Updating mean predictions and uncertainty bounds as new trial points are evaluated.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s2",
      "label": "Acquisition Functions (EI, UCB, PI)",
      "description": "Mathematical functions guiding selection of next hyperparameter evaluation points.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s2_d1",
      "label": "Expected Improvement (EI)",
      "description": "Balancing exploitation of known good regions with exploration of high uncertainty regions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s2_d2",
      "label": "Upper Confidence Bound (UCB = mu(x) + kappa * sigma(x))",
      "description": "Controlling exploration-exploitation trade-offs via parameter kappa.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s3",
      "label": "High-Dimensional Search Limits (N > 20 Parameters)",
      "description": "Addressing scalability constraints of Gaussian processes in high-dimensional spaces.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s3_d1",
      "label": "O(N^3) Matrix Inversion Bottlenecks",
      "description": "Managing cubic computational complexity scaling of standard GPs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s3_d2",
      "label": "Random Forest & Neural Network Surrogates (SMAC)",
      "description": "Replacing GPs with decision tree ensembles for high-dimensional search spaces.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s4",
      "label": "Constrained Hyperparameter Search",
      "description": "Optimizing objective functions subject to black-box constraint conditions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s4_d1",
      "label": "Constraint Violation Probability Modeling",
      "description": "Modeling probability of satisfying constraints alongside main objectives.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s4_d2",
      "label": "Feasible Region Exploration",
      "description": "Guiding search sampling toward valid constraint-satisfying parameter regions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s5",
      "label": "Warm-Starting Hyperparameter Search History",
      "description": "Initializing search surrogate models using historical tuning runs from similar tasks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s5_d1",
      "label": "Meta-Learning Initializations",
      "description": "Transferring surrogate state from previous model tuning tasks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t4_s5_d2",
      "label": "Accelerated Initial Convergence",
      "description": "Reaching optimal hyperparameters in significantly fewer trial steps.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5",
      "description": "Detailed first-principles mechanics for Hyperparameter Optimization (HPO) & Search topic 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s1",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Hyperparameter Optimization (HPO) & Search Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s1_d1",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s1_d2",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s2",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Hyperparameter Optimization (HPO) & Search Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s2_d1",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s2_d2",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s3",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Hyperparameter Optimization (HPO) & Search Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s3_d1",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s3_d2",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s4",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Hyperparameter Optimization (HPO) & Search Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s4_d1",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s4_d2",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s5",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Hyperparameter Optimization (HPO) & Search Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s5_d1",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t5_s5_d2",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6",
      "description": "Detailed first-principles mechanics for Hyperparameter Optimization (HPO) & Search topic 6.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s1",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Hyperparameter Optimization (HPO) & Search Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s1_d1",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s1_d2",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s2",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Hyperparameter Optimization (HPO) & Search Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s2_d1",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s2_d2",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s3",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Hyperparameter Optimization (HPO) & Search Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s3_d1",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s3_d2",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s4",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Hyperparameter Optimization (HPO) & Search Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s4_d1",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s4_d2",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s5",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Hyperparameter Optimization (HPO) & Search Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s5_d1",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p3_t6_s5_d2",
      "label": "Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hyperparameter Optimization (HPO) & Search Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4",
      "label": "Model Serving Infrastructure & Inference Engines",
      "description": "Triton Inference Server, ONNX compilation, C++ execution engines, dynamic batching, and KV caching.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1",
      "label": "Triton Inference Server Architecture",
      "description": "Multi-framework C++ inference server optimizing hardware utilization across GPUs and CPUs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s1",
      "label": "Multi-Framework Execution Backends",
      "description": "Serving PyTorch (LibTorch), ONNX Runtime, TensorRT, and OpenVINO models simultaneously.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s1_d1",
      "label": "C++ C-API Backend Interface Integration",
      "description": "Executing model inference directly via C++ native framework libraries.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s1_d2",
      "label": "Zero Framework Conversion Overhead",
      "description": "Serving native model file formats without custom wrapper scripts.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s2",
      "label": "Dynamic Batching Engine",
      "description": "Combining individual client requests arriving within latency windows into single batch inferences.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s2_d1",
      "label": "max_queue_delay_microseconds Window Setup",
      "description": "Waiting up to configured microsecond windows to accumulate target batch sizes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s2_d2",
      "label": "GPU Compute Throughput Maximization",
      "description": "Increasing GPU matrix multiplication throughput by 3-5x via batched execution.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s3",
      "label": "Concurrent Model Instances & GPU Pinning",
      "description": "Running multiple parallel instances of models across specific GPU devices.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s3_d1",
      "label": "instance_group Execution Configuration",
      "description": "Configuring parallel model instance counts per GPU to saturate compute pipelines.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s3_d2",
      "label": "Multi-GPU Model Load Distribution",
      "description": "Distributing incoming inference requests across instances on available GPUs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s4",
      "label": "Model Pipelining & Business Logic Scripting (BLS)",
      "description": "Orchestrating multi-model inference pipelines in C++ or Python.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s4_d1",
      "label": "Ensemble Model DAG Configurations",
      "description": "Chaining preprocessing, model inference, and postprocessing models in zero-copy pipelines.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s4_d2",
      "label": "BLS Python Execution Control",
      "description": "Executing dynamic conditional routing logic between model steps.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s5",
      "label": "Shared Memory Inter-Process Communication (IPC)",
      "description": "Bypassing network sockets using POSIX or CUDA shared memory for local client requests.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s5_d1",
      "label": "CUDA Shared Memory Tensor Transfers",
      "description": "Passing input/output GPU tensors directly in VRAM without host memory copies.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t1_s5_d2",
      "label": "Sub-100-Microsecond IPC Latencies",
      "description": "Achieving near-zero IPC overhead for co-located application services.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2",
      "label": "ONNX Compilation & Runtime Execution",
      "description": "Open Neural Network Exchange ecosystem for compiling and accelerating cross-framework models.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s1",
      "label": "ONNX Intermediate Representation (IR) Graph Specs",
      "description": "Standardized computation graph format representing operators and tensor shapes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s1_d1",
      "label": "Protobuf Graph Serialization (.onnx)",
      "description": "Serializing nodes, edges, inputs, outputs, and initializer tensor weights.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s1_d2",
      "label": "Standardized Operator Set (Opset Versioning)",
      "description": "Enforcing consistent operator semantics across framework versions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s2",
      "label": "ONNX Runtime (ORT) Execution Providers (EP)",
      "description": "Extensible execution engine routing graph nodes to hardware-accelerated backends.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s2_d1",
      "label": "CUDA, TensorRT, DirectML, OpenVINO EPs",
      "description": "Selecting hardware acceleration backends per subgraph.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s2_d2",
      "label": "CPU Execution Provider (MLAS Math Library)",
      "description": "Optimizing CPU inference using specialized matrix multiplication micro-kernels.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s3",
      "label": "Graph Optimization Transformations",
      "description": "Applying graph-level optimizations prior to model compilation.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s3_d1",
      "label": "Constant Folding & Dead Code Elimination",
      "description": "Evaluating static subgraphs at compile time to remove redundant math nodes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s3_d2",
      "label": "Operator Fusion (Conv + BatchNorm + Relu)",
      "description": "Fusing adjacent graph nodes into single execution kernels to eliminate memory roundtrips.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s4",
      "label": "Static & Dynamic Quantization (FP32 -> INT8)",
      "description": "Quantizing model weights and activations to 8-bit integers to accelerate inference.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s4_d1",
      "label": "Symmetric vs Asymmetric Quantization Math",
      "description": "Mapping floating point ranges to 8-bit integer ranges [-128, 127] or [0, 255].",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s4_d2",
      "label": "Calibration Dataset Profiling (Static Quantization)",
      "description": "Profiling activation ranges using representative calibration datasets.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s5",
      "label": "PyTorch / TensorFlow Export Workflows (torch.onnx.export)",
      "description": "Tracing or scripting framework model graphs into ONNX files.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s5_d1",
      "label": "Dynamic Axes Configuration (dynamic_axes)",
      "description": "Specifying variable batch sizes and sequence lengths for export.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t2_s5_d2",
      "label": "Operator Equivalence Auditing",
      "description": "Verifying numeric output equivalence between original and exported ONNX models.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3",
      "label": "NVIDIA TensorRT GPU Compilation Engine",
      "description": "High-performance deep learning inference optimizer compiling models into hardware-specific execution engines.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s1",
      "label": "TensorRT Engine Compilation (.plan / .engine)",
      "description": "Compiling ONNX models into hardware-optimized binary engines for target GPU microarchitectures.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s1_d1",
      "label": "GPU Microarchitecture Locking",
      "description": "Generating engines compiled specifically for target GPU models (e.g. Ampere, Hopper).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s1_d2",
      "label": "Auto-Tuning Kernel Profiling Phase",
      "description": "Benchmarking thousands of candidate CUDA kernels to select fastest execution paths.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s2",
      "label": "Precision Fast-Math Operations (FP16 / INT8 / FP8)",
      "description": "Leveraging Tensor Cores for reduced-precision mathematical operations.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s2_d1",
      "label": "NVIDIA Tensor Core Acceleration",
      "description": "Executing mixed-precision matrix multiplication in dedicated hardware Tensor Cores.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s2_d2",
      "label": "FP8 (E4M3 / E5M2) Hopper Execution",
      "description": "Utilizing Transformer Engine FP8 execution on H100 GPUs for double throughput.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s3",
      "label": "Layer & Tensor Fusion Optimizations",
      "description": "Fusing multiple layers into single high-speed CUDA kernels.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s3_d1",
      "label": "Vertical & Horizontal Fusion Passes",
      "description": "Fusing sequential layers vertically and parallel layers horizontally.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s3_d2",
      "label": "GPU VRAM Bandwidth Bottleneck Elimination",
      "description": "Minimizing DRAM read/write operations by keeping intermediate activations in SRAM.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s4",
      "label": "Dynamic Shape Optimization Profiles",
      "description": "Configuring min, opt, and max dimension profiles for variable tensor shapes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s4_d1",
      "label": "Optimization Profile Specifications",
      "description": "Optimizing kernel selection for expected runtime batch sizes and sequence lengths.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s4_d2",
      "label": "Dynamic Memory Allocation Management",
      "description": "Pre-allocating GPU workspace memory matching optimization profiles.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s5",
      "label": "TensorRT-LLM Multi-GPU Serving Engine",
      "description": "Specialized TensorRT extension for serving Large Language Models efficiently.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s5_d1",
      "label": "In-Flight Batching (Continuous Batching)",
      "description": "Inserting new generation requests into active inference batches at iteration boundaries.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t3_s5_d2",
      "label": "PagedAttention KV Cache Integration",
      "description": "Managing key-value cache memory using virtual memory paging techniques.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4",
      "label": "vLLM & Continuous Batching Engines",
      "description": "High-throughput LLM serving engine featuring PagedAttention and efficient memory management.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s1",
      "label": "PagedAttention Virtual Memory KV Cache",
      "description": "Managing Key-Value cache memory by partitioning space into non-contiguous physical blocks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s1_d1",
      "label": "Virtual Block Table Mapping",
      "description": "Mapping logical token positions to physical KV cache memory blocks like OS page tables.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s1_d2",
      "label": "Near-Zero (0%) Memory Waste",
      "description": "Eliminating memory fragmentation, reducing KV cache waste from 60-80% down to under 1%.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s2",
      "label": "Continuous Batching (Iteration-Level Scheduling)",
      "description": "Scheduling generation requests at iteration steps rather than waiting for full request completions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s2_d1",
      "label": "Dynamic Request Insertion & Eviction",
      "description": "Adding newly arrived requests and evicting finished requests after every token generation step.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s2_d2",
      "label": "2-4x Server Throughput Gains",
      "description": "Increasing serving throughput significantly compared to static batching.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s3",
      "label": "Copy-on-Write Parallel Sampling (Beam Search)",
      "description": "Sharing KV cache blocks across multiple candidate generation branches.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s3_d1",
      "label": "Logical Block Reference Counting",
      "description": "Sharing physical memory blocks across candidate beams until diverge points.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s3_d2",
      "label": "Low-Memory Beam Search & Parallel Sampling",
      "description": "Executing parallel generation sampling with minimal memory overhead.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s4",
      "label": "Distributed Multi-GPU Serving (TP / PP)",
      "description": "Distributing LLM serving across multiple GPUs using Tensor and Pipeline Parallelism.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s4_d1",
      "label": "Megatron-LM Style Tensor Parallel Integration",
      "description": "Splitting model layers across GPUs for sub-second token generation latencies.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s4_d2",
      "label": "Ray / Ray-Serve Cluster Orchestration",
      "description": "Orchestrating multi-GPU vLLM instances across cluster nodes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s5",
      "label": "vLLM OpenAI-Compatible REST API Server",
      "description": "Exposing OpenAI-compatible /v1/completions and /v1/chat/completions endpoints.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s5_d1",
      "label": "AsyncIO Server Architecture",
      "description": "Handling thousands of concurrent HTTP client streaming requests.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t4_s5_d2",
      "label": "Server-Sent Events (SSE) Token Streaming",
      "description": "Streaming generated tokens to clients in real-time.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5",
      "description": "Detailed first-principles mechanics for Model Serving Infrastructure & Inference Engines topic 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s1",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Model Serving Infrastructure & Inference Engines Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s1_d1",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s1_d2",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s2",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Model Serving Infrastructure & Inference Engines Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s2_d1",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s2_d2",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s3",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Model Serving Infrastructure & Inference Engines Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s3_d1",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s3_d2",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s4",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Model Serving Infrastructure & Inference Engines Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s4_d1",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s4_d2",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s5",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Model Serving Infrastructure & Inference Engines Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s5_d1",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t5_s5_d2",
      "label": "Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6",
      "description": "Detailed first-principles mechanics for Model Serving Infrastructure & Inference Engines topic 6.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s1",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Model Serving Infrastructure & Inference Engines Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s1_d1",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s1_d2",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s2",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Model Serving Infrastructure & Inference Engines Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s2_d1",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s2_d2",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s3",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Model Serving Infrastructure & Inference Engines Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s3_d1",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s3_d2",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s4",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Model Serving Infrastructure & Inference Engines Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s4_d1",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s4_d2",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s5",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Model Serving Infrastructure & Inference Engines Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s5_d1",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p4_t6_s5_d2",
      "label": "Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Serving Infrastructure & Inference Engines Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5",
      "label": "GPU Resource Management & HPC Orchestration",
      "description": "Kubernetes GPU operators, Multi-Instance GPU (MIG) partitioning, Slurm HPC schedulers, and GPU monitoring.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1",
      "label": "NVIDIA GPU Operator & Kubernetes Driver Architecture",
      "description": "Automating the management of NVIDIA GPU software components on Kubernetes clusters.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s1",
      "label": "Containerized Driver & DaemonSet Management",
      "description": "Deploying GPU drivers, CUDA runtimes, and monitoring daemons via Kubernetes DaemonSets.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s1_d1",
      "label": "Kernel Module Injection (nvidia.ko, nvidia-uvm.ko)",
      "description": "Compiling and loading GPU kernel modules dynamically on host nodes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s1_d2",
      "label": "Container Toolkit Runtime Engine Integration",
      "description": "Configuring containerd/CRI-O to expose GPU devices to containers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s2",
      "label": "Kubernetes Device Plugin Interface (nvidia.com/gpu)",
      "description": "Exposing GPU hardware resources to the Kubernetes scheduler.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s2_d1",
      "label": "Extended Resource Allocations (resources: limits: nvidia.com/gpu: 1)",
      "description": "Scheduling workloads to nodes with available physical GPUs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s2_d2",
      "label": "Environment Variable Container Injection (NVIDIA_VISIBLE_DEVICES)",
      "description": "Injecting specific GPU device IDs into container execution environments.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s3",
      "label": "GPU Feature Discovery (GFD) Labeling",
      "description": "Labeling Kubernetes nodes automatically with GPU hardware attributes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s3_d1",
      "label": "Node Labeling (nvidia.com/gpu.product=NVIDIA-H100-SXM5-80GB)",
      "description": "Labeling nodes by GPU model, VRAM capacity, and driver version.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s3_d2",
      "label": "Targeted NodeSelector & Affinity Scheduling",
      "description": "Scheduling specialized workloads to matching GPU hardware types.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s4",
      "label": "CUDA Vector Addition Verification",
      "description": "Running automated validation workloads to test GPU operational health.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s4_d1",
      "label": "Init Container Hardware Tests",
      "description": "Executing CUDA test jobs before declaring GPU nodes ready for production.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s4_d2",
      "label": "Automatic Unhealthy Node Cordoning",
      "description": "Cordoning nodes automatically when GPU hardware errors are detected.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s5",
      "label": "GPU Driver Rolling Upgrade Automation",
      "description": "Upgrading GPU drivers across cluster nodes without service disruption.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s5_d1",
      "label": "Node Eviction & Pod Draining Sequences",
      "description": "Draining workloads gracefully before updating host GPU drivers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t1_s5_d2",
      "label": "Zero-Downtime Cluster Upgrades",
      "description": "Maintaining cluster availability during rolling driver upgrades.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2",
      "label": "Multi-Instance GPU (MIG) Partitioning",
      "description": "Hardware partitioning of single NVIDIA GPUs (A100, H100) into isolated smaller instances.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s1",
      "label": "Physical Hardware Partitioning (MIG Geometry)",
      "description": "Partitioning GPU compute, memory, and crossbar bandwidth at the hardware layer.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s1_d1",
      "label": "1g.10gb up to 7g.80gb Profile Geometry",
      "description": "Dividing A100 80GB GPUs into up to 7 isolated 10GB GPU instances.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s1_d2",
      "label": "Dedicated Memory Controllers & SM Allocation",
      "description": "Assigning dedicated Streaming Multiprocessors and memory channels to each instance.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s2",
      "label": "Hardware Fault & Memory Isolation",
      "description": "Guaranteeing total fault and memory isolation across MIG instances.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s2_d1",
      "label": "Zero Cross-Instance Memory Contention",
      "description": "Preventing memory spikes on one instance from impacting adjacent instances.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s2_d2",
      "label": "Isolated Application Crash Recovery",
      "description": "Ensuring application crashes on one MIG instance do not affect other instances.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s3",
      "label": "MIG Profiles in Kubernetes (nvidia.com/mig-1g.10gb)",
      "description": "Exposing individual MIG instances as schedulable Kubernetes resources.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s3_d1",
      "label": "Granular Resource Scheduling",
      "description": "Requesting specific MIG profile sizes for lightweight inference or dev pods.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s3_d2",
      "label": "7x Workload Density Multiplication",
      "description": "Increasing container deployment density by 7x on large GPU hosts.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s4",
      "label": "Dynamic vs Static MIG Re-configuration",
      "description": "Re-partitioning GPU geometries dynamically based on pending workload queues.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s4_d1",
      "label": "Dynamic Profile Switching Scripts",
      "description": "Re-configuring MIG profiles automatically during off-peak hours.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s4_d2",
      "label": "Idle Instance Re-allocation Sweeps",
      "description": "Re-combining small MIG instances into full GPUs for large batch training jobs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s5",
      "label": "MIG vs MPS (Multi-Process Service) Tradeoffs",
      "description": "Comparing hardware MIG partitioning against software CUDA MPS process sharing.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s5_d1",
      "label": "MIG Strong Hardware Isolation Guarantee",
      "description": "Selecting MIG for multi-tenant security and strict SLA guarantees.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t2_s5_d2",
      "label": "MPS Software Co-Execution (Shared Memory)",
      "description": "Selecting MPS for cooperative single-tenant workloads sharing GPU resources.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3",
      "label": "Slurm HPC Cluster Workload Manager",
      "description": "Enterprise workload manager and job scheduler for high-performance supercomputing clusters.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s1",
      "label": "sbatch Job Script Declarations (#SBATCH)",
      "description": "Submitting batch training jobs specifying node, CPU, memory, and GPU requirements.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s1_d1",
      "label": "#SBATCH --gpus-per-node=8 Specification",
      "description": "Requesting full 8-GPU nodes for distributed training jobs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s1_d2",
      "label": "#SBATCH --time=24:00:00 Walltime Constraints",
      "description": "Setting maximum job walltime limits for queue scheduling.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s2",
      "label": "Slurm GRES (Generic Resource Scheduling)",
      "description": "Tracking and scheduling custom hardware resources like GPUs and NICs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s2_d1",
      "label": "gres.conf Resource Mapping",
      "description": "Mapping physical GPU device files (/dev/nvidia0..7) to Slurm GRES configurations.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s2_d2",
      "label": "Consumable Resource Allocation Tracking",
      "description": "Tracking available GPU allocations across cluster nodes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s3",
      "label": "Multi-Node Job Placement & Topology Awareness",
      "description": "Scheduling distributed jobs onto nodes connected to shared network switches.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s3_d1",
      "label": "topology.conf Network Switch Tree Specs",
      "description": "Modeling leaf and spine InfiniBand switch topologies.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s3_d2",
      "label": "Switch Tree Distance Minimization",
      "description": "Grouping job nodes under common network switches to minimize inter-node latency.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s4",
      "label": "Job Preemption & Backfill Scheduling",
      "description": "Optimizing cluster utilization by running low-priority backfill jobs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s4_d1",
      "label": "Backfill Scheduler Optimization",
      "description": "Running short low-priority jobs in unused time windows while waiting for large job resources.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s4_d2",
      "label": "Preemption Signal Grace Periods (SIGCONT/SIGTERM)",
      "description": "Notifying preempted jobs to execute checkpointing before termination.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s5",
      "label": "Slurm PyTorch Torchrun Integration",
      "description": "Executing distributed PyTorch jobs on Slurm clusters using torchrun or srun.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s5_d1",
      "label": "srun Environment Variable Injection (SLURM_PROCID, SLURM_NTASKS)",
      "description": "Extracting process ranks and cluster node counts automatically.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t3_s5_d2",
      "label": "Master Node Address Resolution (SLURM_LAUNCH_NODE_IPADDR)",
      "description": "Setting init_process_group MASTER_ADDR using Slurm environment variables.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4",
      "label": "DCGM & GPU Telemetry Observability",
      "description": "Monitoring GPU health, temperature, power, memory, and performance metrics using NVIDIA DCGM.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s1",
      "label": "NVIDIA DCGM (Data Center GPU Manager) Engine",
      "description": "Embedded C-library and standalone daemon collecting low-level GPU metrics.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s1_d1",
      "label": "Sub-Second Hardware Metric Polling",
      "description": "Polling hardware sensors for temperature, power draw, and clock frequencies.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s1_d2",
      "label": "DCGM Exporter Prometheus Metric Output",
      "description": "Exposing GPU metrics in Prometheus format on port 9400.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s2",
      "label": "GPU Utilization Metrics (Tensor Core & Memory Bandwidth)",
      "description": "Tracking GPU compute and memory utilization metrics.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s2_d1",
      "label": "DCGM_FI_DEV_GPU_UTIL & DCGM_FI_DEV_MEM_COPY_UTIL",
      "description": "Measuring overall GPU processing and memory transfer activity.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s2_d2",
      "label": "Tensor Core Activity Tracking (DCGM_FI_DEV_TENSOR_ACTIVE)",
      "description": "Tracking percentage of time Tensor Cores execute matrix math.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s3",
      "label": "Thermal & Power Throttling Detection",
      "description": "Detecting GPU performance degradation caused by thermal or power limits.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s3_d1",
      "label": "DCGM_FI_DEV_THERMAL_THROTTLE Indicators",
      "description": "Flagging instances where GPUs reduce clock frequencies due to overheating.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s3_d2",
      "label": "Power Cap Violation Monitoring (DCGM_FI_DEV_POWER_USAGE)",
      "description": "Tracking power draw against configured board power limits (TDP).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s4",
      "label": "XID Error Analysis & Fault Diagnosis",
      "description": "Detecting critical GPU hardware errors reported by NVIDIA drivers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s4_d1",
      "label": "XID 31 (MMU Page Fault Error)",
      "description": "Identifying invalid memory access attempts in CUDA kernels.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s4_d2",
      "label": "XID 79 (Falling Off the Bus Critical Failure)",
      "description": "Detecting hardware drops where GPUs disconnect from PCIe buses.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s5",
      "label": "NVLink Bandwidth & Error Counters",
      "description": "Monitoring inter-GPU NVLink communication link health and transfer speeds.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s5_d1",
      "label": "DCGM_FI_DEV_NVLINK_BANDWIDTH Counters",
      "description": "Measuring real-time data throughput across NVLink channels.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t4_s5_d2",
      "label": "CRC Error Rate Monitoring",
      "description": "Detecting signal degradation and packet errors on physical NVLink traces.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5",
      "label": "GPU Resource Management & HPC Orchestration Topic 5",
      "description": "Detailed first-principles mechanics for GPU Resource Management & HPC Orchestration topic 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s1",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for GPU Resource Management & HPC Orchestration Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s1_d1",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s1_d2",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s2",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for GPU Resource Management & HPC Orchestration Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s2_d1",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s2_d2",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s3",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for GPU Resource Management & HPC Orchestration Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s3_d1",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s3_d2",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s4",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for GPU Resource Management & HPC Orchestration Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s4_d1",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s4_d2",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s5",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for GPU Resource Management & HPC Orchestration Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s5_d1",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t5_s5_d2",
      "label": "GPU Resource Management & HPC Orchestration Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6",
      "label": "GPU Resource Management & HPC Orchestration Topic 6",
      "description": "Detailed first-principles mechanics for GPU Resource Management & HPC Orchestration topic 6.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s1",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for GPU Resource Management & HPC Orchestration Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s1_d1",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s1_d2",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s2",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for GPU Resource Management & HPC Orchestration Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s2_d1",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s2_d2",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s3",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for GPU Resource Management & HPC Orchestration Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s3_d1",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s3_d2",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s4",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for GPU Resource Management & HPC Orchestration Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s4_d1",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s4_d2",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s5",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for GPU Resource Management & HPC Orchestration Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s5_d1",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p5_t6_s5_d2",
      "label": "GPU Resource Management & HPC Orchestration Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Resource Management & HPC Orchestration Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6",
      "label": "Data Pipelines for ML & Feature Engineering",
      "description": "Streaming dataset loaders, WebDataset tar archives, TFRecord / Arrow formats, and feature store integration.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1",
      "label": "Streaming Dataset Loaders & WebDataset",
      "description": "Streaming large-scale image and text datasets directly from object storage without local disk caching.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s1",
      "label": "WebDataset Sharded Tar Archive Standard",
      "description": "Structuring large datasets as series of POSIX tar archives (e.g. shard-00000.tar).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s1_d1",
      "label": "Paired File Naming (sample001.jpg, sample001.json)",
      "description": "Grouping data samples and metadata by matching file basenames inside tarballs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s1_d2",
      "label": "Sequential Stream Reading Model",
      "description": "Reading tar archives sequentially over network connections to eliminate random disk seeks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s2",
      "label": "Pure Sequential Streaming from Cloud Buckets (S3 / GCS)",
      "description": "Streaming tar shards over HTTP without downloading full datasets locally.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s2_d1",
      "label": "Zero Local Disk Footprint Execution",
      "description": "Training models on petabyte-scale datasets without storing data on local node SSDs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s2_d2",
      "label": "High Throughput Network Saturation",
      "description": "Saturating 100Gbps network interfaces with continuous streaming reads.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s3",
      "label": "Shuffled Buffer In-Memory Randomization",
      "description": "Randomizing sample ordering locally using in-memory shuffling buffers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s3_d1",
      "label": "Shuffle Buffer Size Configuration (buffer_size = 10000)",
      "description": "Loading 10,000 samples into memory and drawing random items for training batches.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s3_d2",
      "label": "Shard-Level + Sample-Level Randomization",
      "description": "Shuffling shard selection order alongside local sample buffer shuffling.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s4",
      "label": "PyTorch IterableDataset Integration",
      "description": "Implementing custom WebDataset loaders using PyTorch IterableDataset classes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s4_d1",
      "label": "Multi-Worker Shard Partitioning",
      "description": "Partitioning tar shards across PyTorch DataLoader worker processes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s4_d2",
      "label": "Preventing Duplicate Sample Reads",
      "description": "Ensuring distinct DataLoader workers read non-overlapping shard subsets.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s5",
      "label": "Data Decoding & Augmentation Pipelines",
      "description": "Decoding image bytes and executing augmentations on-the-fly.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s5_d1",
      "label": "Fast JPEG Decoding (nvJPEG GPU Acceleration)",
      "description": "Offloading JPEG image decoding to GPU hardware accelerators.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t1_s5_d2",
      "label": "CPU-to-GPU Transfer Pipelines",
      "description": "Overlapping data loading, decoding, and model forward passes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2",
      "label": "Apache Arrow & In-Memory Columnar Formats",
      "description": "Language-independent columnar memory format optimizing data processing and zero-copy transfers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s1",
      "label": "Arrow Columnar Memory Layout",
      "description": "Organizing dataset tables in contiguous columnar memory blocks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s1_d1",
      "label": "Vectorized SIMD Operation Acceleration",
      "description": "Executing CPU SIMD instructions across contiguous memory arrays.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s1_d2",
      "label": "Zero-Copy Data Transfer Across Languages",
      "description": "Sharing memory buffers between Python, C++, and Rust without serialization.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s2",
      "label": "Arrow Flight High-Speed RPC Framework",
      "description": "gRPC-based data transfer framework for streaming Arrow record batches.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s2_d1",
      "label": "Parallel Stream Data Transfers",
      "description": "Streaming partitions across Flight endpoints simultaneously.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s2_d2",
      "label": "10-100x Speedup Over REST / JDBC APIs",
      "description": "Bypassing JSON/CSV string parsing to stream binary columnar batches.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s3",
      "label": "PyArrow & Polars Integration for ML",
      "description": "Executing high-speed data manipulation and filtering on large tabular datasets.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s3_d1",
      "label": "Polars LazyFrame Query Engine",
      "description": "Optimizing execution graphs prior to processing data.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s3_d2",
      "label": "OutOfMemory Error Prevention via Streaming",
      "description": "Processing multi-gigabyte files in streaming memory chunks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s4",
      "label": "Feather File Format (.feather / .arrow)",
      "description": "Lightweight binary file format for persisting Arrow record batches to disk.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s4_d1",
      "label": "Instant Zero-Parsing File Reads",
      "description": "Memory-mapping Feather files directly into application memory.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s4_d2",
      "label": "ZSTD Compression Integration",
      "description": "Compressing columnar data blocks to reduce disk storage requirements.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s5",
      "label": "Hugging Face Datasets Arrow Engine Integration",
      "description": "Utilizing Arrow under the hood to handle massive NLP and multimodal datasets.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s5_d1",
      "label": "Memory-Mapped File Dataset Loading",
      "description": "Loading multi-gigabyte datasets instantly with near-zero RAM usage.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t2_s5_d2",
      "label": "On-the-Fly Tokenization & Indexing",
      "description": "Tokenizing text samples dynamically during dataset iteration.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3",
      "label": "TFRecord & Protocol Buffer Data Storage",
      "description": "Binary file format for storing sequences of Protocol Buffer messages used in TensorFlow pipelines.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s1",
      "label": "tf.train.Example Protocol Buffer Schema",
      "description": "Standardized key-value dictionary structure for storing training samples.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s1_d1",
      "label": "BytesList, FloatList, and Int64List Data Types",
      "description": "Encoding feature vectors into strongly-typed binary protocol buffer fields.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s1_d2",
      "label": "Fixed-Length & Variable-Length Feature Support",
      "description": "Handling static vectors and variable-length sequence data.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s2",
      "label": "TFRecord File Chunk Framing Format",
      "description": "Structuring TFRecord files as continuous records wrapped with CRC32 checksums.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s2_d1",
      "label": "Length + CRC32 + Data + CRC32 Framing",
      "description": "Wrapping record data with length indicators and integrity checksums.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s2_d2",
      "label": "Corruption Detection & Recovery",
      "description": "Detecting partial file corruptions during dataset streaming.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s3",
      "label": "tf.data Input Pipeline Optimization (tf.data.Dataset)",
      "description": "Building high-throughput input pipelines using prefetching, inter-leaving, and caching.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s3_d1",
      "label": "tf.data.experimental.AUTOTUNE Tuning",
      "description": "Tuning prefetch buffer sizes dynamically based on CPU/GPU utilization.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s3_d2",
      "label": "Interleaved File Reading (num_parallel_calls)",
      "description": "Reading multiple TFRecord files concurrently to saturate storage bandwidth.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s4",
      "label": "GZIP / ZLIB File Compression",
      "description": "Compressing TFRecord files to minimize network and disk storage requirements.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s4_d1",
      "label": "Transparent On-the-Fly Decompression",
      "description": "Decompressing records during dataset stream reads.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s4_d2",
      "label": "Balancing CPU Decompression Load against Disk I/O",
      "description": "Optimizing compression settings based on storage speed.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s5",
      "label": "Conversion Pipelines (Raw Data -> TFRecords)",
      "description": "Automating batch conversion of raw image/text files into TFRecord datasets.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s5_d1",
      "label": "Apache Beam / Spark Distributed Conversion",
      "description": "Running distributed jobs to convert petabytes of raw files into TFRecords.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t3_s5_d2",
      "label": "Pre-Computed Feature Preprocessing",
      "description": "Embedding pre-processed features directly into TFRecord files to save training compute.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4",
      "label": "Feature Store Infrastructure (Feast / Tecton)",
      "description": "Centralized feature management platform serving offline training and real-time online inference features.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s1",
      "label": "Dual Store Architecture (Offline vs Online Store)",
      "description": "Decoupling historical batch storage from low-latency online serving storage.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s1_d1",
      "label": "Offline Store (Snowflake, BigQuery, Parquet)",
      "description": "Storing years of historical feature data for model training and backtesting.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s1_d2",
      "label": "Online Store (Redis, DynamoDB)",
      "description": "Serving current feature values at sub-10-millisecond latencies for real-time inference.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s2",
      "label": "Point-in-Time Correct Joins (Time-Travel Joins)",
      "description": "Joining feature values as they existed at exact historical event timestamps.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s2_d1",
      "label": "Data Leakage Prevention Guarantee",
      "description": "Preventing future feature values from leaking into past training samples.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s2_d2",
      "label": "As-Of Join Mathematical Execution",
      "description": "Matching entity event timestamps to the latest feature updates prior to event times.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s3",
      "label": "Feature Definition & Declarative Registry",
      "description": "Defining feature transformations, entity keys, and data types in version-controlled code.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s3_d1",
      "label": "Entity & FeatureView Definitions",
      "description": "Grouping features by entity keys (user_id, merchant_id) and freshness TTLs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s3_d2",
      "label": "Centralized Feature Discovery Catalog",
      "description": "Enabling engineering teams to discover and reuse existing features across models.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s4",
      "label": "Batch & Stream Feature Materialization",
      "description": "Ingesting features from batch data warehouses and streaming Kafka topics.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s4_d1",
      "label": "Materialization Engine Execution (feast materialize)",
      "description": "Loading computed features from offline stores into online Redis databases.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s4_d2",
      "label": "Real-Time Streaming Feature Aggregations",
      "description": "Updating online feature stores continuously using Flink or Spark Streaming.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s5",
      "label": "Feature Drift & Data Consistency Monitoring",
      "description": "Detecting discrepancies between offline training features and online serving features.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s5_d1",
      "label": "Training-Serving Skew Detection",
      "description": "Alerting when online feature distributions diverge from offline training data.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t4_s5_d2",
      "label": "Automated Feature Health Checks",
      "description": "Monitoring feature freshness, null rates, and distribution statistics.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5",
      "description": "Detailed first-principles mechanics for Data Pipelines for ML & Feature Engineering topic 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s1",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Data Pipelines for ML & Feature Engineering Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s1_d1",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s1_d2",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s2",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Data Pipelines for ML & Feature Engineering Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s2_d1",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s2_d2",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s3",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Data Pipelines for ML & Feature Engineering Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s3_d1",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s3_d2",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s4",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Data Pipelines for ML & Feature Engineering Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s4_d1",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s4_d2",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s5",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Data Pipelines for ML & Feature Engineering Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s5_d1",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t5_s5_d2",
      "label": "Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6",
      "description": "Detailed first-principles mechanics for Data Pipelines for ML & Feature Engineering topic 6.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s1",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Data Pipelines for ML & Feature Engineering Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s1_d1",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s1_d2",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s2",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Data Pipelines for ML & Feature Engineering Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s2_d1",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s2_d2",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s3",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Data Pipelines for ML & Feature Engineering Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s3_d1",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s3_d2",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s4",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Data Pipelines for ML & Feature Engineering Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s4_d1",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s4_d2",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s5",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Data Pipelines for ML & Feature Engineering Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s5_d1",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p6_t6_s5_d2",
      "label": "Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Data Pipelines for ML & Feature Engineering Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7",
      "label": "Model Monitoring, Drift & Quality Assurance",
      "description": "Evidently AI monitoring, Population Stability Index (PSI), Kolmogorov-Smirnov tests, and shadow deployments.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1",
      "label": "Data Drift & Concept Drift Metrics",
      "description": "Detecting changes in input data distributions and target prediction relationships.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s1",
      "label": "Data Drift (Covariate Shift: P(X) changes)",
      "description": "Detecting shifts in input feature distributions over time while prediction logic remains fixed.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s1_d1",
      "label": "Input Feature Histogram Comparison",
      "description": "Comparing baseline training data distributions against live production data.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s1_d2",
      "label": "Upstream Pipeline Anomaly Detection",
      "description": "Identifying data drift caused by broken upstream data feeds or changing user behaviors.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s2",
      "label": "Concept Drift (P(Y|X) changes)",
      "description": "Detecting changes in statistical relationships between input features and target outputs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s2_d1",
      "label": "Model Accuracy Degradation Indicators",
      "description": "Observing prediction accuracy drops even when input feature distributions remain stable.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s2_d2",
      "label": "External Macro-Environment Triggers",
      "description": "Handling concept drift caused by macroeconomic shocks or sudden market shifts.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s3",
      "label": "Prior Probability Shift (P(Y) changes)",
      "description": "Detecting changes in target variable output distributions over time.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s3_d1",
      "label": "Prediction Class Ratio Monitoring",
      "description": "Tracking shifts in predicted class proportions (e.g. positive fraud rate changing from 1% to 5%).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s3_d2",
      "label": "Label Bias Shift Identification",
      "description": "Detecting systemic shifts in ground truth target label distributions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s4",
      "label": "Reference vs Current Data Windows",
      "description": "Configuring baseline comparison windows and sliding production evaluation windows.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s4_d1",
      "label": "Reference Dataset Selection (Training / Validation Set)",
      "description": "Using clean training datasets as reference baseline standards.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s4_d2",
      "label": "Sliding Current Window Configurations (e.g. Past 7 Days)",
      "description": "Evaluating recent production data against reference baselines to catch drift.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s5",
      "label": "Automated Retraining Trigger Architecture",
      "description": "Initiating model retraining pipelines automatically when drift metrics breach thresholds.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s5_d1",
      "label": "Airflow / Kubeflow Pipeline Triggers",
      "description": "Launching automated retraining workflows when drift tests fail.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t1_s5_d2",
      "label": "Human-in-the-Loop Validation Gates",
      "description": "Requiring MLOps engineer review before deploying auto-retrained models to production.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2",
      "label": "Statistical Drift Tests (PSI, KS-Test, Chi-Square)",
      "description": "Mathematical algorithms for quantifying distribution shifts in numerical and categorical features.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s1",
      "label": "Population Stability Index (PSI)",
      "description": "Metric quantifying shift magnitude between reference and target distributions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s1_d1",
      "label": "Formula PSI = sum((Actual% - Expected%) * ln(Actual% / Expected%))",
      "description": "Binned distribution comparison across numerical feature ranges.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s1_d2",
      "label": "Action Thresholds (PSI < 0.1 No Shift, PSI > 0.2 Significant Shift)",
      "description": "Triggering alerts when PSI values breach 0.2 threshold bounds.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s2",
      "label": "Kolmogorov-Smirnov (KS) Two-Sample Test",
      "description": "Non-parametric statistical test comparing cumulative distribution functions (CDFs) of numerical features.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s2_d1",
      "label": "Maximum CDF Distance D Metric",
      "description": "Calculating maximum vertical distance between empirical CDF curves.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s2_d2",
      "label": "p-Value Hypothesis Testing (p < 0.05)",
      "description": "Rejecting null hypothesis of identical distributions when p-values drop below 0.05.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s3",
      "label": "Chi-Square (Chi2) Goodness-of-Fit Test",
      "description": "Statistical test for detecting drift in categorical feature distributions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s3_d1",
      "label": "Observed vs Expected Category Frequencies",
      "description": "Comparing categorical count frequencies between baseline and current data.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s3_d2",
      "label": "Degrees of Freedom Adjustment",
      "description": "Evaluating Chi-Square test statistics against categorical degrees of freedom.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s4",
      "label": "Wasserstein Distance (Earth Mover's Distance)",
      "description": "Measuring minimum work required to transform one probability distribution into another.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s4_d1",
      "label": "Continuous Distribution Distance Metric",
      "description": "Quantifying distribution shift distance for continuous numerical variables.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s4_d2",
      "label": "Robustness to Sparse Outlier Data",
      "description": "Providing stable drift metrics for continuous features with wide ranges.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s5",
      "label": "Multivariate Drift Detection (Classifier-Based Drift)",
      "description": "Training binary classifiers to distinguish baseline data from current production data.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s5_d1",
      "label": "Drift Detection Binary Classifier AUC Score",
      "description": "Measuring overall multivariate drift based on how easily a classifier distinguishes new from old data.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t2_s5_d2",
      "label": "ROC-AUC > 0.8 Drift Threshold",
      "description": "Confirming significant multivariate data drift when classifier AUC exceeds 0.8.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3",
      "label": "Evidently AI & Open-Source Monitoring",
      "description": "Open-source Python library for evaluating, testing, and monitoring ML models in production.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s1",
      "label": "Report & Test Suite Data Architecture",
      "description": "Generating visual HTML reports and structured JSON test suite outputs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s1_d1",
      "label": "DataDriftPreset & ClassificationPreset Packages",
      "description": "Executing pre-built monitoring test suites across input features and predictions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s1_d2",
      "label": "HTML Dashboard Export",
      "description": "Rendering interactive visual reports highlighting drifted features.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s2",
      "label": "Collector Service & Real-Time Monitoring",
      "description": "Deploying streaming telemetry collectors to monitor live inference endpoints.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s2_d1",
      "label": "Streaming Event Ingestion Endpoint",
      "description": "Collecting input feature vectors and prediction outputs asynchronously.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s2_d2",
      "label": "Prometheus Metric Exporter Integration",
      "description": "Exporting drift and quality metrics directly to Prometheus time-series databases.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s3",
      "label": "Target Performance Monitoring (Delayed Ground Truth)",
      "description": "Calculating actual accuracy, precision, and recall as delayed ground truth labels arrive.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s3_d1",
      "label": "Delayed Label Joining Pipelines",
      "description": "Matching initial inference IDs with ground truth labels arriving days or weeks later.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s3_d2",
      "label": "Confusion Matrix Trend Tracking",
      "description": "Monitoring production classification metrics over time.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s4",
      "label": "Data Quality & Missing Value Auditing",
      "description": "Auditing production features for missing values, unexpected nulls, and out-of-range inputs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s4_d1",
      "label": "Null Count & Type Consistency Checks",
      "description": "Alerting when features contain unexpected null ratios or data type mismatches.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s4_d2",
      "label": "Min/Max Out-of-Bound Detection",
      "description": "Detecting feature values exceeding historical min/max boundaries.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s5",
      "label": "Integration with Grafana Dashboards",
      "description": "Rendering real-time ML monitoring metrics on central Grafana operational dashboards.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s5_d1",
      "label": "Time-Series Drift Graphs",
      "description": "Visualizing feature drift scores and model accuracy over time.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t3_s5_d2",
      "label": "Unified System & ML Telemetry View",
      "description": "Monitoring ML model health alongside server CPU, memory, and API latency metrics.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4",
      "label": "Shadow Deployments & Canary Releases",
      "description": "Testing new model versions safely in production without impacting live user requests.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s1",
      "label": "Shadow (Dark) Traffic Mirroring Architecture",
      "description": "Duplicating live production HTTP requests to test candidate models asynchronously.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s1_d1",
      "label": "Asynchronous Request Mirroring",
      "description": "Forwarding duplicate requests to shadow models without blocking production responses.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s1_d2",
      "label": "Zero User Impact Guarantee",
      "description": "Discarding shadow model responses while logging predictions for comparative analysis.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s2",
      "label": "Canary Deployment Traffic Splitting",
      "description": "Routing a small percentage of live user traffic to new model versions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s2_d1",
      "label": "Percentage-Based Routing (1% -> 5% -> 25% -> 100%)",
      "description": "Increasing traffic allocation to new models gradually while monitoring error rates.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s2_d2",
      "label": "Automated Rollback Triggers",
      "description": "Reverting traffic split instantly if canary model error rates or latencies breach thresholds.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s3",
      "label": "A/B Testing & Statistical Hypothesis Testing",
      "description": "Comparing business metrics between control (Model A) and variant (Model B) user groups.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s3_d1",
      "label": "User-ID Hash Routing Consistency",
      "description": "Ensuring individual users receive consistent model responses across sessions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s3_d2",
      "label": "Statistical Significance p-Value Evaluation",
      "description": "Evaluating conversion rates and engagement metrics to confirm superior model performance.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s4",
      "label": "Blue/Green Model Deployment Swapping",
      "description": "Swapping active production model routes instantly using load balancer target groups.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s4_d1",
      "label": "Instant Load Balancer Target Switch",
      "description": "Switching production traffic from Blue (v1) to Green (v2) in zero downtime.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s4_d2",
      "label": "Immediate Rollback Safety Net",
      "description": "Reverting load balancer target configurations to Blue if Green encounters issues.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s5",
      "label": "Comparative Prediction Latency Auditing",
      "description": "Comparing inference latencies between old and new model versions under identical production traffic.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s5_d1",
      "label": "P95 & P99 Latency Profile Matching",
      "description": "Ensuring candidate models meet operational latency SLAs before full release.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t4_s5_d2",
      "label": "Hardware Resource Consumption Audit",
      "description": "Measuring VRAM and GPU utilization differences between model versions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5",
      "description": "Detailed first-principles mechanics for Model Monitoring, Drift & Quality Assurance topic 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s1",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Model Monitoring, Drift & Quality Assurance Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s1_d1",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s1_d2",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s2",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Model Monitoring, Drift & Quality Assurance Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s2_d1",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s2_d2",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s3",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Model Monitoring, Drift & Quality Assurance Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s3_d1",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s3_d2",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s4",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Model Monitoring, Drift & Quality Assurance Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s4_d1",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s4_d2",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s5",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Model Monitoring, Drift & Quality Assurance Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s5_d1",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t5_s5_d2",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6",
      "description": "Detailed first-principles mechanics for Model Monitoring, Drift & Quality Assurance topic 6.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s1",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Model Monitoring, Drift & Quality Assurance Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s1_d1",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s1_d2",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s2",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Model Monitoring, Drift & Quality Assurance Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s2_d1",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s2_d2",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s3",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Model Monitoring, Drift & Quality Assurance Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s3_d1",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s3_d2",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s4",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Model Monitoring, Drift & Quality Assurance Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s4_d1",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s4_d2",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s5",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Model Monitoring, Drift & Quality Assurance Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s5_d1",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p7_t6_s5_d2",
      "label": "Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Model Monitoring, Drift & Quality Assurance Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8",
      "label": "Edge ML, Quantization & Embedded Inference",
      "description": "TensorFlow Lite, CoreML, ARM SIMD quantization, post-training quantization, and QAT math.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1",
      "label": "Quantization Mechanics & Formats (INT8 / FP8 / INT4)",
      "description": "Compressing model weights and activations from 32-bit floating point down to low-bit integer formats.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s1",
      "label": "Uniform Affine Quantization Formula",
      "description": "Mapping real-valued floating point numbers x to 8-bit integers q: q = round(x / Scale) + ZeroPoint.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s1_d1",
      "label": "Scale Factor Calculation Scale = (r_max - r_min) / (q_max - q_min)",
      "description": "Computing step size scale factors from real value ranges.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s1_d2",
      "label": "ZeroPoint Integer Alignment",
      "description": "Aligning real-value zero (0.0) precisely to an integer value to ensure exact zero padding.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s2",
      "label": "Symmetric vs Asymmetric Quantization Schemes",
      "description": "Selecting quantization range mapping strategies based on weight distribution symmetry.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s2_d1",
      "label": "Symmetric Quantization (ZeroPoint = 0)",
      "description": "Centering quantization ranges around zero, simplifying integer matrix multiplication math.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s2_d2",
      "label": "Asymmetric Quantization (Non-Zero ZeroPoint)",
      "description": "Optimizing quantization ranges for asymmetric activation distributions (e.g. ReLU outputs).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s3",
      "label": "Per-Tensor vs Per-Channel Quantization",
      "description": "Determining quantization scale granularity across weight matrices.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s3_d1",
      "label": "Per-Tensor Single Scale Factor",
      "description": "Using one scale factor for full weight matrices, saving memory lookup overhead.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s3_d2",
      "label": "Per-Channel Granular Scaling",
      "description": "Assigning independent scale factors per output channel, significantly reducing quantization error.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s4",
      "label": "Post-Training Quantization (PTQ) Workflows",
      "description": "Quantizing trained FP32 models without retraining using representative calibration datasets.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s4_d1",
      "label": "Calibration Dataset Forward Passes",
      "description": "Profiling activation dynamic ranges across small sample datasets (100-500 samples).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s4_d2",
      "label": "KL-Divergence Activation Range Calibration",
      "description": "Minimizing information loss when selecting activation clipping thresholds.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s5",
      "label": "Quantization-Aware Training (QAT) Math",
      "description": "Simulating quantization effects during training backpropagation to adapt model weights.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s5_d1",
      "label": "Straight-Through Estimator (STE) Gradient Approximation",
      "description": "Passing gradients unchanged through non-differentiable rounding functions during backward passes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t1_s5_d2",
      "label": "Near-Zero Accuracy Loss Recovery",
      "description": "Recovering FP32 baseline accuracy for low-bit (INT8/INT4) models.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2",
      "label": "TensorFlow Lite (TFLite) & Edge Compilation",
      "description": "Lightweight cross-platform runtime for executing ML models on mobile and embedded IoT devices.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s1",
      "label": "TFLite FlatBuffers Serialization (.tflite)",
      "description": "Serializing model graphs into zero-copy memory-mapped FlatBuffers format.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s1_d1",
      "label": "Zero-Copy Memory Mapping (mmap)",
      "description": "Accessing model weights directly on disk without parsing or unpacking memory.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s1_d2",
      "label": "Minimal File Overhead Footprint",
      "description": "Eliminating heavy Protocol Buffer parser library dependencies.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s2",
      "label": "TFLite Interpreter C++ Core Engine",
      "description": "Minimal C++ execution engine executing optimized operator kernels.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s2_d1",
      "label": "Sub-1MB Binary Library Size",
      "description": "Compiling TFLite runtimes into tiny binary footprints for embedded systems.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s2_d2",
      "label": "Static Memory Allocation Arena",
      "description": "Pre-allocating tensor memory arenas to prevent dynamic runtime allocations during inference.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s3",
      "label": "Hardware Delegate Acceleration (NNAPI, GPU, Hexagon DSP)",
      "description": "Offloading operator execution from mobile CPUs to dedicated hardware accelerators.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s3_d1",
      "label": "Android Neural Networks API (NNAPI) Delegate",
      "description": "Routing subgraphs to mobile NPU/DSP hardware.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s3_d2",
      "label": "Qualcomm Hexagon DSP Delegate",
      "description": "Executing quantized integer kernels on ultra-low-power DSP chips.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s4",
      "label": "TFLite Micro for Microcontrollers (MCU)",
      "description": "Specialized bare-metal TFLite runtime for ARM Cortex-M and RISC-V microcontrollers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s4_d1",
      "label": "Zero OS & Zero Dynamic Memory Requirement",
      "description": "Running on microcontrollers with as little as 16KB RAM without operating systems.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s4_d2",
      "label": "Always-On Wake Word & Keyword Spotting",
      "description": "Executing micro-models continuously for voice activation and sensor monitoring.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s5",
      "label": "Model Pruning & Sparse Operator Acceleration",
      "description": "Zeroing out non-essential model weights to compress model sizes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s5_d1",
      "label": "Magnitude-Based Weight Pruning",
      "description": "Setting weights near zero to zero values, achieving 50-80% sparsity.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t2_s5_d2",
      "label": "Sparse Matrix Compression (CSR / CSC)",
      "description": "Compressing sparse weight matrices to accelerate inference speeds.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3",
      "label": "Apple CoreML & Neural Engine (ANE) Execution",
      "description": "Framework for optimizing and serving machine learning models on Apple iOS and macOS hardware.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s1",
      "label": "CoreML Package Format (.mlpackage)",
      "description": "Standardized model package format containing proto definitions and compiled weights.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s1_d1",
      "label": "MIL (Model Intermediate Language) Graph Representation",
      "description": "Representing computational graphs in Apple's intermediate language.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s1_d2",
      "label": "CoreML Compiler Optimization Phase (coremlcompiler)",
      "description": "Compiling models into hardware-optimized binary assets for Apple chips.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s2",
      "label": "Apple Neural Engine (ANE) Hardware Acceleration",
      "description": "Dedicated hardware coprocessor on M-series and A-series chips for deep learning.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s2_d1",
      "label": "Ultra-Low-Power High-Throughput Matrix Execution",
      "description": "Executing trillions of operations per second at sub-watt power levels.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s2_d2",
      "label": "ANE-Compatible Layer Topology Rules",
      "description": "Designing model layers to match ANE hardware execution requirements.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s3",
      "label": "coremltools Python Conversion Pipeline",
      "description": "Python package converting PyTorch, TensorFlow, and ONNX models to CoreML format.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s3_d1",
      "label": "ct.convert() API Transformations",
      "description": "Translating PyTorch JIT traced models into CoreML neural networks.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s3_d2",
      "label": "Precision & Quantization Conversion Controls",
      "description": "Applying FP16 or INT8 quantization during conversion.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s4",
      "label": "On-Device Personalization & On-Device Training",
      "description": "Updating model weights locally on user devices to preserve privacy.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s4_d1",
      "label": "Local Updatable Layer Configurations",
      "description": "Marking specific classification layers as updatable on-device.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s4_d2",
      "label": "Zero User Data Cloud Transmission",
      "description": "Adapting models to individual user habits without sending personal data to cloud servers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s5",
      "label": "Unified Memory Architecture (UMA) Utilization",
      "description": "Leveraging shared CPU/GPU/ANE memory on Apple Silicon to eliminate data copy overhead.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s5_d1",
      "label": "Zero-Copy Image & Tensor Transfers",
      "description": "Passing camera frames directly to ANE memory without host RAM copies.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t3_s5_d2",
      "label": "Large On-Device Model Execution",
      "description": "Running 7B+ LLMs locally on MacBooks using unified RAM.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4",
      "label": "ARM SIMD (NEON) & Edge Hardware Micro-Kernels",
      "description": "Low-level SIMD assembly instruction optimization for machine learning on ARM processors.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s1",
      "label": "ARM NEON 128-Bit Vector Registers (v0-v31)",
      "description": "Utilizing 32 128-bit vector registers on ARMv8-A processors for parallel data processing.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s1_d1",
      "label": "Vectorized Parallel Math Execution",
      "description": "Processing 4 float32 or 16 int8 values in single SIMD instructions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s1_d2",
      "label": "Quad-Word Vector Register Operations",
      "description": "Executing vector additions, multiplications, and dot products.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s2",
      "label": "ARM Dot Product Instructions (SDOT / UDOT)",
      "description": "Specialized SIMD instructions computing 4-element 8-bit integer dot products in single cycles.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s2_d1",
      "label": "4x INT8 Dot Product Acceleration (vdotq_s32)",
      "description": "Computing 4 integer multiplications and accumulating into 32-bit destinations in single instructions.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s2_d2",
      "label": "4x Throughput Boost for Quantized Neural Networks",
      "description": "Multiplying quantized matrix math speeds on mobile ARM CPUs.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s3",
      "label": "GEMM (General Matrix Multiply) Micro-Kernel Tiling",
      "description": "Structuring matrix multiplication algorithms to optimize CPU cache utilization.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s3_d1",
      "label": "L1 / L2 Cache Register Tiling (e.g. 4x16 Tile Blocks)",
      "description": "Tiling matrix blocks to fit inside 32KB L1 data caches.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s3_d2",
      "label": "Loop Unrolling & Assembly Register Allocation",
      "description": "Unrolling inner loops in assembly to eliminate branch overhead.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s4",
      "label": "ARM Scalable Vector Extension (SVE / SVE2)",
      "description": "Next-generation vector architecture supporting variable vector register lengths (128 to 2048 bits).",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s4_d1",
      "label": "Vector Length Agnostic (VLA) Programming",
      "description": "Writing SIMD code that automatically scales across different CPU vector widths.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s4_d2",
      "label": "Enhanced Machine Learning Operators",
      "description": "Accelerating complex activation functions and matrix operations.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s5",
      "label": "Open-Source Edge Micro-Kernel Libraries (XNNPACK)",
      "description": "High-performance floating-point and quantized inference operators for ARM, x86, and WebAssembly.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s5_d1",
      "label": "Hand-Written Assembly Operator Kernels",
      "description": "Optimizing 2D convolutions, depthwise convolutions, and fully connected layers.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t4_s5_d2",
      "label": "Integration with PyTorch Mobile & TFLite",
      "description": "Serving as the primary CPU backend for mobile PyTorch and TFLite runtimes.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5",
      "description": "Detailed first-principles mechanics for Edge ML, Quantization & Embedded Inference topic 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s1",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Edge ML, Quantization & Embedded Inference Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s1_d1",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s1_d2",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s2",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Edge ML, Quantization & Embedded Inference Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s2_d1",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s2_d2",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s3",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Edge ML, Quantization & Embedded Inference Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s3_d1",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s3_d2",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s4",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Edge ML, Quantization & Embedded Inference Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s4_d1",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s4_d2",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s5",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Edge ML, Quantization & Embedded Inference Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s5_d1",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t5_s5_d2",
      "label": "Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6",
      "description": "Detailed first-principles mechanics for Edge ML, Quantization & Embedded Inference topic 6.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s1",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Edge ML, Quantization & Embedded Inference Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s1_d1",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s1_d2",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s2",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Edge ML, Quantization & Embedded Inference Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s2_d1",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s2_d2",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s3",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Edge ML, Quantization & Embedded Inference Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s3_d1",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s3_d2",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s4",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Edge ML, Quantization & Embedded Inference Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s4_d1",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s4_d2",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s5",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Edge ML, Quantization & Embedded Inference Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s5_d1",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "mlinfra_root_p8_t6_s5_d2",
      "label": "Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Edge ML, Quantization & Embedded Inference Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "mlinfra_root",
      "target": "mlinfra_root_p1"
    },
    {
      "source": "mlinfra_root_p1",
      "target": "mlinfra_root_p1_t1"
    },
    {
      "source": "mlinfra_root_p1_t1",
      "target": "mlinfra_root_p1_t1_s1"
    },
    {
      "source": "mlinfra_root_p1_t1_s1",
      "target": "mlinfra_root_p1_t1_s1_d1"
    },
    {
      "source": "mlinfra_root_p1_t1_s1",
      "target": "mlinfra_root_p1_t1_s1_d2"
    },
    {
      "source": "mlinfra_root_p1_t1",
      "target": "mlinfra_root_p1_t1_s2"
    },
    {
      "source": "mlinfra_root_p1_t1_s2",
      "target": "mlinfra_root_p1_t1_s2_d1"
    },
    {
      "source": "mlinfra_root_p1_t1_s2",
      "target": "mlinfra_root_p1_t1_s2_d2"
    },
    {
      "source": "mlinfra_root_p1_t1",
      "target": "mlinfra_root_p1_t1_s3"
    },
    {
      "source": "mlinfra_root_p1_t1_s3",
      "target": "mlinfra_root_p1_t1_s3_d1"
    },
    {
      "source": "mlinfra_root_p1_t1_s3",
      "target": "mlinfra_root_p1_t1_s3_d2"
    },
    {
      "source": "mlinfra_root_p1_t1",
      "target": "mlinfra_root_p1_t1_s4"
    },
    {
      "source": "mlinfra_root_p1_t1_s4",
      "target": "mlinfra_root_p1_t1_s4_d1"
    },
    {
      "source": "mlinfra_root_p1_t1_s4",
      "target": "mlinfra_root_p1_t1_s4_d2"
    },
    {
      "source": "mlinfra_root_p1_t1",
      "target": "mlinfra_root_p1_t1_s5"
    },
    {
      "source": "mlinfra_root_p1_t1_s5",
      "target": "mlinfra_root_p1_t1_s5_d1"
    },
    {
      "source": "mlinfra_root_p1_t1_s5",
      "target": "mlinfra_root_p1_t1_s5_d2"
    },
    {
      "source": "mlinfra_root_p1",
      "target": "mlinfra_root_p1_t2"
    },
    {
      "source": "mlinfra_root_p1_t2",
      "target": "mlinfra_root_p1_t2_s1"
    },
    {
      "source": "mlinfra_root_p1_t2_s1",
      "target": "mlinfra_root_p1_t2_s1_d1"
    },
    {
      "source": "mlinfra_root_p1_t2_s1",
      "target": "mlinfra_root_p1_t2_s1_d2"
    },
    {
      "source": "mlinfra_root_p1_t2",
      "target": "mlinfra_root_p1_t2_s2"
    },
    {
      "source": "mlinfra_root_p1_t2_s2",
      "target": "mlinfra_root_p1_t2_s2_d1"
    },
    {
      "source": "mlinfra_root_p1_t2_s2",
      "target": "mlinfra_root_p1_t2_s2_d2"
    },
    {
      "source": "mlinfra_root_p1_t2",
      "target": "mlinfra_root_p1_t2_s3"
    },
    {
      "source": "mlinfra_root_p1_t2_s3",
      "target": "mlinfra_root_p1_t2_s3_d1"
    },
    {
      "source": "mlinfra_root_p1_t2_s3",
      "target": "mlinfra_root_p1_t2_s3_d2"
    },
    {
      "source": "mlinfra_root_p1_t2",
      "target": "mlinfra_root_p1_t2_s4"
    },
    {
      "source": "mlinfra_root_p1_t2_s4",
      "target": "mlinfra_root_p1_t2_s4_d1"
    },
    {
      "source": "mlinfra_root_p1_t2_s4",
      "target": "mlinfra_root_p1_t2_s4_d2"
    },
    {
      "source": "mlinfra_root_p1_t2",
      "target": "mlinfra_root_p1_t2_s5"
    },
    {
      "source": "mlinfra_root_p1_t2_s5",
      "target": "mlinfra_root_p1_t2_s5_d1"
    },
    {
      "source": "mlinfra_root_p1_t2_s5",
      "target": "mlinfra_root_p1_t2_s5_d2"
    },
    {
      "source": "mlinfra_root_p1",
      "target": "mlinfra_root_p1_t3"
    },
    {
      "source": "mlinfra_root_p1_t3",
      "target": "mlinfra_root_p1_t3_s1"
    },
    {
      "source": "mlinfra_root_p1_t3_s1",
      "target": "mlinfra_root_p1_t3_s1_d1"
    },
    {
      "source": "mlinfra_root_p1_t3_s1",
      "target": "mlinfra_root_p1_t3_s1_d2"
    },
    {
      "source": "mlinfra_root_p1_t3",
      "target": "mlinfra_root_p1_t3_s2"
    },
    {
      "source": "mlinfra_root_p1_t3_s2",
      "target": "mlinfra_root_p1_t3_s2_d1"
    },
    {
      "source": "mlinfra_root_p1_t3_s2",
      "target": "mlinfra_root_p1_t3_s2_d2"
    },
    {
      "source": "mlinfra_root_p1_t3",
      "target": "mlinfra_root_p1_t3_s3"
    },
    {
      "source": "mlinfra_root_p1_t3_s3",
      "target": "mlinfra_root_p1_t3_s3_d1"
    },
    {
      "source": "mlinfra_root_p1_t3_s3",
      "target": "mlinfra_root_p1_t3_s3_d2"
    },
    {
      "source": "mlinfra_root_p1_t3",
      "target": "mlinfra_root_p1_t3_s4"
    },
    {
      "source": "mlinfra_root_p1_t3_s4",
      "target": "mlinfra_root_p1_t3_s4_d1"
    },
    {
      "source": "mlinfra_root_p1_t3_s4",
      "target": "mlinfra_root_p1_t3_s4_d2"
    },
    {
      "source": "mlinfra_root_p1_t3",
      "target": "mlinfra_root_p1_t3_s5"
    },
    {
      "source": "mlinfra_root_p1_t3_s5",
      "target": "mlinfra_root_p1_t3_s5_d1"
    },
    {
      "source": "mlinfra_root_p1_t3_s5",
      "target": "mlinfra_root_p1_t3_s5_d2"
    },
    {
      "source": "mlinfra_root_p1",
      "target": "mlinfra_root_p1_t4"
    },
    {
      "source": "mlinfra_root_p1_t4",
      "target": "mlinfra_root_p1_t4_s1"
    },
    {
      "source": "mlinfra_root_p1_t4_s1",
      "target": "mlinfra_root_p1_t4_s1_d1"
    },
    {
      "source": "mlinfra_root_p1_t4_s1",
      "target": "mlinfra_root_p1_t4_s1_d2"
    },
    {
      "source": "mlinfra_root_p1_t4",
      "target": "mlinfra_root_p1_t4_s2"
    },
    {
      "source": "mlinfra_root_p1_t4_s2",
      "target": "mlinfra_root_p1_t4_s2_d1"
    },
    {
      "source": "mlinfra_root_p1_t4_s2",
      "target": "mlinfra_root_p1_t4_s2_d2"
    },
    {
      "source": "mlinfra_root_p1_t4",
      "target": "mlinfra_root_p1_t4_s3"
    },
    {
      "source": "mlinfra_root_p1_t4_s3",
      "target": "mlinfra_root_p1_t4_s3_d1"
    },
    {
      "source": "mlinfra_root_p1_t4_s3",
      "target": "mlinfra_root_p1_t4_s3_d2"
    },
    {
      "source": "mlinfra_root_p1_t4",
      "target": "mlinfra_root_p1_t4_s4"
    },
    {
      "source": "mlinfra_root_p1_t4_s4",
      "target": "mlinfra_root_p1_t4_s4_d1"
    },
    {
      "source": "mlinfra_root_p1_t4_s4",
      "target": "mlinfra_root_p1_t4_s4_d2"
    },
    {
      "source": "mlinfra_root_p1_t4",
      "target": "mlinfra_root_p1_t4_s5"
    },
    {
      "source": "mlinfra_root_p1_t4_s5",
      "target": "mlinfra_root_p1_t4_s5_d1"
    },
    {
      "source": "mlinfra_root_p1_t4_s5",
      "target": "mlinfra_root_p1_t4_s5_d2"
    },
    {
      "source": "mlinfra_root_p1",
      "target": "mlinfra_root_p1_t5"
    },
    {
      "source": "mlinfra_root_p1_t5",
      "target": "mlinfra_root_p1_t5_s1"
    },
    {
      "source": "mlinfra_root_p1_t5_s1",
      "target": "mlinfra_root_p1_t5_s1_d1"
    },
    {
      "source": "mlinfra_root_p1_t5_s1",
      "target": "mlinfra_root_p1_t5_s1_d2"
    },
    {
      "source": "mlinfra_root_p1_t5",
      "target": "mlinfra_root_p1_t5_s2"
    },
    {
      "source": "mlinfra_root_p1_t5_s2",
      "target": "mlinfra_root_p1_t5_s2_d1"
    },
    {
      "source": "mlinfra_root_p1_t5_s2",
      "target": "mlinfra_root_p1_t5_s2_d2"
    },
    {
      "source": "mlinfra_root_p1_t5",
      "target": "mlinfra_root_p1_t5_s3"
    },
    {
      "source": "mlinfra_root_p1_t5_s3",
      "target": "mlinfra_root_p1_t5_s3_d1"
    },
    {
      "source": "mlinfra_root_p1_t5_s3",
      "target": "mlinfra_root_p1_t5_s3_d2"
    },
    {
      "source": "mlinfra_root_p1_t5",
      "target": "mlinfra_root_p1_t5_s4"
    },
    {
      "source": "mlinfra_root_p1_t5_s4",
      "target": "mlinfra_root_p1_t5_s4_d1"
    },
    {
      "source": "mlinfra_root_p1_t5_s4",
      "target": "mlinfra_root_p1_t5_s4_d2"
    },
    {
      "source": "mlinfra_root_p1_t5",
      "target": "mlinfra_root_p1_t5_s5"
    },
    {
      "source": "mlinfra_root_p1_t5_s5",
      "target": "mlinfra_root_p1_t5_s5_d1"
    },
    {
      "source": "mlinfra_root_p1_t5_s5",
      "target": "mlinfra_root_p1_t5_s5_d2"
    },
    {
      "source": "mlinfra_root_p1",
      "target": "mlinfra_root_p1_t6"
    },
    {
      "source": "mlinfra_root_p1_t6",
      "target": "mlinfra_root_p1_t6_s1"
    },
    {
      "source": "mlinfra_root_p1_t6_s1",
      "target": "mlinfra_root_p1_t6_s1_d1"
    },
    {
      "source": "mlinfra_root_p1_t6_s1",
      "target": "mlinfra_root_p1_t6_s1_d2"
    },
    {
      "source": "mlinfra_root_p1_t6",
      "target": "mlinfra_root_p1_t6_s2"
    },
    {
      "source": "mlinfra_root_p1_t6_s2",
      "target": "mlinfra_root_p1_t6_s2_d1"
    },
    {
      "source": "mlinfra_root_p1_t6_s2",
      "target": "mlinfra_root_p1_t6_s2_d2"
    },
    {
      "source": "mlinfra_root_p1_t6",
      "target": "mlinfra_root_p1_t6_s3"
    },
    {
      "source": "mlinfra_root_p1_t6_s3",
      "target": "mlinfra_root_p1_t6_s3_d1"
    },
    {
      "source": "mlinfra_root_p1_t6_s3",
      "target": "mlinfra_root_p1_t6_s3_d2"
    },
    {
      "source": "mlinfra_root_p1_t6",
      "target": "mlinfra_root_p1_t6_s4"
    },
    {
      "source": "mlinfra_root_p1_t6_s4",
      "target": "mlinfra_root_p1_t6_s4_d1"
    },
    {
      "source": "mlinfra_root_p1_t6_s4",
      "target": "mlinfra_root_p1_t6_s4_d2"
    },
    {
      "source": "mlinfra_root_p1_t6",
      "target": "mlinfra_root_p1_t6_s5"
    },
    {
      "source": "mlinfra_root_p1_t6_s5",
      "target": "mlinfra_root_p1_t6_s5_d1"
    },
    {
      "source": "mlinfra_root_p1_t6_s5",
      "target": "mlinfra_root_p1_t6_s5_d2"
    },
    {
      "source": "mlinfra_root",
      "target": "mlinfra_root_p2"
    },
    {
      "source": "mlinfra_root_p2",
      "target": "mlinfra_root_p2_t1"
    },
    {
      "source": "mlinfra_root_p2_t1",
      "target": "mlinfra_root_p2_t1_s1"
    },
    {
      "source": "mlinfra_root_p2_t1_s1",
      "target": "mlinfra_root_p2_t1_s1_d1"
    },
    {
      "source": "mlinfra_root_p2_t1_s1",
      "target": "mlinfra_root_p2_t1_s1_d2"
    },
    {
      "source": "mlinfra_root_p2_t1",
      "target": "mlinfra_root_p2_t1_s2"
    },
    {
      "source": "mlinfra_root_p2_t1_s2",
      "target": "mlinfra_root_p2_t1_s2_d1"
    },
    {
      "source": "mlinfra_root_p2_t1_s2",
      "target": "mlinfra_root_p2_t1_s2_d2"
    },
    {
      "source": "mlinfra_root_p2_t1",
      "target": "mlinfra_root_p2_t1_s3"
    },
    {
      "source": "mlinfra_root_p2_t1_s3",
      "target": "mlinfra_root_p2_t1_s3_d1"
    },
    {
      "source": "mlinfra_root_p2_t1_s3",
      "target": "mlinfra_root_p2_t1_s3_d2"
    },
    {
      "source": "mlinfra_root_p2_t1",
      "target": "mlinfra_root_p2_t1_s4"
    },
    {
      "source": "mlinfra_root_p2_t1_s4",
      "target": "mlinfra_root_p2_t1_s4_d1"
    },
    {
      "source": "mlinfra_root_p2_t1_s4",
      "target": "mlinfra_root_p2_t1_s4_d2"
    },
    {
      "source": "mlinfra_root_p2_t1",
      "target": "mlinfra_root_p2_t1_s5"
    },
    {
      "source": "mlinfra_root_p2_t1_s5",
      "target": "mlinfra_root_p2_t1_s5_d1"
    },
    {
      "source": "mlinfra_root_p2_t1_s5",
      "target": "mlinfra_root_p2_t1_s5_d2"
    },
    {
      "source": "mlinfra_root_p2",
      "target": "mlinfra_root_p2_t2"
    },
    {
      "source": "mlinfra_root_p2_t2",
      "target": "mlinfra_root_p2_t2_s1"
    },
    {
      "source": "mlinfra_root_p2_t2_s1",
      "target": "mlinfra_root_p2_t2_s1_d1"
    },
    {
      "source": "mlinfra_root_p2_t2_s1",
      "target": "mlinfra_root_p2_t2_s1_d2"
    },
    {
      "source": "mlinfra_root_p2_t2",
      "target": "mlinfra_root_p2_t2_s2"
    },
    {
      "source": "mlinfra_root_p2_t2_s2",
      "target": "mlinfra_root_p2_t2_s2_d1"
    },
    {
      "source": "mlinfra_root_p2_t2_s2",
      "target": "mlinfra_root_p2_t2_s2_d2"
    },
    {
      "source": "mlinfra_root_p2_t2",
      "target": "mlinfra_root_p2_t2_s3"
    },
    {
      "source": "mlinfra_root_p2_t2_s3",
      "target": "mlinfra_root_p2_t2_s3_d1"
    },
    {
      "source": "mlinfra_root_p2_t2_s3",
      "target": "mlinfra_root_p2_t2_s3_d2"
    },
    {
      "source": "mlinfra_root_p2_t2",
      "target": "mlinfra_root_p2_t2_s4"
    },
    {
      "source": "mlinfra_root_p2_t2_s4",
      "target": "mlinfra_root_p2_t2_s4_d1"
    },
    {
      "source": "mlinfra_root_p2_t2_s4",
      "target": "mlinfra_root_p2_t2_s4_d2"
    },
    {
      "source": "mlinfra_root_p2_t2",
      "target": "mlinfra_root_p2_t2_s5"
    },
    {
      "source": "mlinfra_root_p2_t2_s5",
      "target": "mlinfra_root_p2_t2_s5_d1"
    },
    {
      "source": "mlinfra_root_p2_t2_s5",
      "target": "mlinfra_root_p2_t2_s5_d2"
    },
    {
      "source": "mlinfra_root_p2",
      "target": "mlinfra_root_p2_t3"
    },
    {
      "source": "mlinfra_root_p2_t3",
      "target": "mlinfra_root_p2_t3_s1"
    },
    {
      "source": "mlinfra_root_p2_t3_s1",
      "target": "mlinfra_root_p2_t3_s1_d1"
    },
    {
      "source": "mlinfra_root_p2_t3_s1",
      "target": "mlinfra_root_p2_t3_s1_d2"
    },
    {
      "source": "mlinfra_root_p2_t3",
      "target": "mlinfra_root_p2_t3_s2"
    },
    {
      "source": "mlinfra_root_p2_t3_s2",
      "target": "mlinfra_root_p2_t3_s2_d1"
    },
    {
      "source": "mlinfra_root_p2_t3_s2",
      "target": "mlinfra_root_p2_t3_s2_d2"
    },
    {
      "source": "mlinfra_root_p2_t3",
      "target": "mlinfra_root_p2_t3_s3"
    },
    {
      "source": "mlinfra_root_p2_t3_s3",
      "target": "mlinfra_root_p2_t3_s3_d1"
    },
    {
      "source": "mlinfra_root_p2_t3_s3",
      "target": "mlinfra_root_p2_t3_s3_d2"
    },
    {
      "source": "mlinfra_root_p2_t3",
      "target": "mlinfra_root_p2_t3_s4"
    },
    {
      "source": "mlinfra_root_p2_t3_s4",
      "target": "mlinfra_root_p2_t3_s4_d1"
    },
    {
      "source": "mlinfra_root_p2_t3_s4",
      "target": "mlinfra_root_p2_t3_s4_d2"
    },
    {
      "source": "mlinfra_root_p2_t3",
      "target": "mlinfra_root_p2_t3_s5"
    },
    {
      "source": "mlinfra_root_p2_t3_s5",
      "target": "mlinfra_root_p2_t3_s5_d1"
    },
    {
      "source": "mlinfra_root_p2_t3_s5",
      "target": "mlinfra_root_p2_t3_s5_d2"
    },
    {
      "source": "mlinfra_root_p2",
      "target": "mlinfra_root_p2_t4"
    },
    {
      "source": "mlinfra_root_p2_t4",
      "target": "mlinfra_root_p2_t4_s1"
    },
    {
      "source": "mlinfra_root_p2_t4_s1",
      "target": "mlinfra_root_p2_t4_s1_d1"
    },
    {
      "source": "mlinfra_root_p2_t4_s1",
      "target": "mlinfra_root_p2_t4_s1_d2"
    },
    {
      "source": "mlinfra_root_p2_t4",
      "target": "mlinfra_root_p2_t4_s2"
    },
    {
      "source": "mlinfra_root_p2_t4_s2",
      "target": "mlinfra_root_p2_t4_s2_d1"
    },
    {
      "source": "mlinfra_root_p2_t4_s2",
      "target": "mlinfra_root_p2_t4_s2_d2"
    },
    {
      "source": "mlinfra_root_p2_t4",
      "target": "mlinfra_root_p2_t4_s3"
    },
    {
      "source": "mlinfra_root_p2_t4_s3",
      "target": "mlinfra_root_p2_t4_s3_d1"
    },
    {
      "source": "mlinfra_root_p2_t4_s3",
      "target": "mlinfra_root_p2_t4_s3_d2"
    },
    {
      "source": "mlinfra_root_p2_t4",
      "target": "mlinfra_root_p2_t4_s4"
    },
    {
      "source": "mlinfra_root_p2_t4_s4",
      "target": "mlinfra_root_p2_t4_s4_d1"
    },
    {
      "source": "mlinfra_root_p2_t4_s4",
      "target": "mlinfra_root_p2_t4_s4_d2"
    },
    {
      "source": "mlinfra_root_p2_t4",
      "target": "mlinfra_root_p2_t4_s5"
    },
    {
      "source": "mlinfra_root_p2_t4_s5",
      "target": "mlinfra_root_p2_t4_s5_d1"
    },
    {
      "source": "mlinfra_root_p2_t4_s5",
      "target": "mlinfra_root_p2_t4_s5_d2"
    },
    {
      "source": "mlinfra_root_p2",
      "target": "mlinfra_root_p2_t5"
    },
    {
      "source": "mlinfra_root_p2_t5",
      "target": "mlinfra_root_p2_t5_s1"
    },
    {
      "source": "mlinfra_root_p2_t5_s1",
      "target": "mlinfra_root_p2_t5_s1_d1"
    },
    {
      "source": "mlinfra_root_p2_t5_s1",
      "target": "mlinfra_root_p2_t5_s1_d2"
    },
    {
      "source": "mlinfra_root_p2_t5",
      "target": "mlinfra_root_p2_t5_s2"
    },
    {
      "source": "mlinfra_root_p2_t5_s2",
      "target": "mlinfra_root_p2_t5_s2_d1"
    },
    {
      "source": "mlinfra_root_p2_t5_s2",
      "target": "mlinfra_root_p2_t5_s2_d2"
    },
    {
      "source": "mlinfra_root_p2_t5",
      "target": "mlinfra_root_p2_t5_s3"
    },
    {
      "source": "mlinfra_root_p2_t5_s3",
      "target": "mlinfra_root_p2_t5_s3_d1"
    },
    {
      "source": "mlinfra_root_p2_t5_s3",
      "target": "mlinfra_root_p2_t5_s3_d2"
    },
    {
      "source": "mlinfra_root_p2_t5",
      "target": "mlinfra_root_p2_t5_s4"
    },
    {
      "source": "mlinfra_root_p2_t5_s4",
      "target": "mlinfra_root_p2_t5_s4_d1"
    },
    {
      "source": "mlinfra_root_p2_t5_s4",
      "target": "mlinfra_root_p2_t5_s4_d2"
    },
    {
      "source": "mlinfra_root_p2_t5",
      "target": "mlinfra_root_p2_t5_s5"
    },
    {
      "source": "mlinfra_root_p2_t5_s5",
      "target": "mlinfra_root_p2_t5_s5_d1"
    },
    {
      "source": "mlinfra_root_p2_t5_s5",
      "target": "mlinfra_root_p2_t5_s5_d2"
    },
    {
      "source": "mlinfra_root_p2",
      "target": "mlinfra_root_p2_t6"
    },
    {
      "source": "mlinfra_root_p2_t6",
      "target": "mlinfra_root_p2_t6_s1"
    },
    {
      "source": "mlinfra_root_p2_t6_s1",
      "target": "mlinfra_root_p2_t6_s1_d1"
    },
    {
      "source": "mlinfra_root_p2_t6_s1",
      "target": "mlinfra_root_p2_t6_s1_d2"
    },
    {
      "source": "mlinfra_root_p2_t6",
      "target": "mlinfra_root_p2_t6_s2"
    },
    {
      "source": "mlinfra_root_p2_t6_s2",
      "target": "mlinfra_root_p2_t6_s2_d1"
    },
    {
      "source": "mlinfra_root_p2_t6_s2",
      "target": "mlinfra_root_p2_t6_s2_d2"
    },
    {
      "source": "mlinfra_root_p2_t6",
      "target": "mlinfra_root_p2_t6_s3"
    },
    {
      "source": "mlinfra_root_p2_t6_s3",
      "target": "mlinfra_root_p2_t6_s3_d1"
    },
    {
      "source": "mlinfra_root_p2_t6_s3",
      "target": "mlinfra_root_p2_t6_s3_d2"
    },
    {
      "source": "mlinfra_root_p2_t6",
      "target": "mlinfra_root_p2_t6_s4"
    },
    {
      "source": "mlinfra_root_p2_t6_s4",
      "target": "mlinfra_root_p2_t6_s4_d1"
    },
    {
      "source": "mlinfra_root_p2_t6_s4",
      "target": "mlinfra_root_p2_t6_s4_d2"
    },
    {
      "source": "mlinfra_root_p2_t6",
      "target": "mlinfra_root_p2_t6_s5"
    },
    {
      "source": "mlinfra_root_p2_t6_s5",
      "target": "mlinfra_root_p2_t6_s5_d1"
    },
    {
      "source": "mlinfra_root_p2_t6_s5",
      "target": "mlinfra_root_p2_t6_s5_d2"
    },
    {
      "source": "mlinfra_root",
      "target": "mlinfra_root_p3"
    },
    {
      "source": "mlinfra_root_p3",
      "target": "mlinfra_root_p3_t1"
    },
    {
      "source": "mlinfra_root_p3_t1",
      "target": "mlinfra_root_p3_t1_s1"
    },
    {
      "source": "mlinfra_root_p3_t1_s1",
      "target": "mlinfra_root_p3_t1_s1_d1"
    },
    {
      "source": "mlinfra_root_p3_t1_s1",
      "target": "mlinfra_root_p3_t1_s1_d2"
    },
    {
      "source": "mlinfra_root_p3_t1",
      "target": "mlinfra_root_p3_t1_s2"
    },
    {
      "source": "mlinfra_root_p3_t1_s2",
      "target": "mlinfra_root_p3_t1_s2_d1"
    },
    {
      "source": "mlinfra_root_p3_t1_s2",
      "target": "mlinfra_root_p3_t1_s2_d2"
    },
    {
      "source": "mlinfra_root_p3_t1",
      "target": "mlinfra_root_p3_t1_s3"
    },
    {
      "source": "mlinfra_root_p3_t1_s3",
      "target": "mlinfra_root_p3_t1_s3_d1"
    },
    {
      "source": "mlinfra_root_p3_t1_s3",
      "target": "mlinfra_root_p3_t1_s3_d2"
    },
    {
      "source": "mlinfra_root_p3_t1",
      "target": "mlinfra_root_p3_t1_s4"
    },
    {
      "source": "mlinfra_root_p3_t1_s4",
      "target": "mlinfra_root_p3_t1_s4_d1"
    },
    {
      "source": "mlinfra_root_p3_t1_s4",
      "target": "mlinfra_root_p3_t1_s4_d2"
    },
    {
      "source": "mlinfra_root_p3_t1",
      "target": "mlinfra_root_p3_t1_s5"
    },
    {
      "source": "mlinfra_root_p3_t1_s5",
      "target": "mlinfra_root_p3_t1_s5_d1"
    },
    {
      "source": "mlinfra_root_p3_t1_s5",
      "target": "mlinfra_root_p3_t1_s5_d2"
    },
    {
      "source": "mlinfra_root_p3",
      "target": "mlinfra_root_p3_t2"
    },
    {
      "source": "mlinfra_root_p3_t2",
      "target": "mlinfra_root_p3_t2_s1"
    },
    {
      "source": "mlinfra_root_p3_t2_s1",
      "target": "mlinfra_root_p3_t2_s1_d1"
    },
    {
      "source": "mlinfra_root_p3_t2_s1",
      "target": "mlinfra_root_p3_t2_s1_d2"
    },
    {
      "source": "mlinfra_root_p3_t2",
      "target": "mlinfra_root_p3_t2_s2"
    },
    {
      "source": "mlinfra_root_p3_t2_s2",
      "target": "mlinfra_root_p3_t2_s2_d1"
    },
    {
      "source": "mlinfra_root_p3_t2_s2",
      "target": "mlinfra_root_p3_t2_s2_d2"
    },
    {
      "source": "mlinfra_root_p3_t2",
      "target": "mlinfra_root_p3_t2_s3"
    },
    {
      "source": "mlinfra_root_p3_t2_s3",
      "target": "mlinfra_root_p3_t2_s3_d1"
    },
    {
      "source": "mlinfra_root_p3_t2_s3",
      "target": "mlinfra_root_p3_t2_s3_d2"
    },
    {
      "source": "mlinfra_root_p3_t2",
      "target": "mlinfra_root_p3_t2_s4"
    },
    {
      "source": "mlinfra_root_p3_t2_s4",
      "target": "mlinfra_root_p3_t2_s4_d1"
    },
    {
      "source": "mlinfra_root_p3_t2_s4",
      "target": "mlinfra_root_p3_t2_s4_d2"
    },
    {
      "source": "mlinfra_root_p3_t2",
      "target": "mlinfra_root_p3_t2_s5"
    },
    {
      "source": "mlinfra_root_p3_t2_s5",
      "target": "mlinfra_root_p3_t2_s5_d1"
    },
    {
      "source": "mlinfra_root_p3_t2_s5",
      "target": "mlinfra_root_p3_t2_s5_d2"
    },
    {
      "source": "mlinfra_root_p3",
      "target": "mlinfra_root_p3_t3"
    },
    {
      "source": "mlinfra_root_p3_t3",
      "target": "mlinfra_root_p3_t3_s1"
    },
    {
      "source": "mlinfra_root_p3_t3_s1",
      "target": "mlinfra_root_p3_t3_s1_d1"
    },
    {
      "source": "mlinfra_root_p3_t3_s1",
      "target": "mlinfra_root_p3_t3_s1_d2"
    },
    {
      "source": "mlinfra_root_p3_t3",
      "target": "mlinfra_root_p3_t3_s2"
    },
    {
      "source": "mlinfra_root_p3_t3_s2",
      "target": "mlinfra_root_p3_t3_s2_d1"
    },
    {
      "source": "mlinfra_root_p3_t3_s2",
      "target": "mlinfra_root_p3_t3_s2_d2"
    },
    {
      "source": "mlinfra_root_p3_t3",
      "target": "mlinfra_root_p3_t3_s3"
    },
    {
      "source": "mlinfra_root_p3_t3_s3",
      "target": "mlinfra_root_p3_t3_s3_d1"
    },
    {
      "source": "mlinfra_root_p3_t3_s3",
      "target": "mlinfra_root_p3_t3_s3_d2"
    },
    {
      "source": "mlinfra_root_p3_t3",
      "target": "mlinfra_root_p3_t3_s4"
    },
    {
      "source": "mlinfra_root_p3_t3_s4",
      "target": "mlinfra_root_p3_t3_s4_d1"
    },
    {
      "source": "mlinfra_root_p3_t3_s4",
      "target": "mlinfra_root_p3_t3_s4_d2"
    },
    {
      "source": "mlinfra_root_p3_t3",
      "target": "mlinfra_root_p3_t3_s5"
    },
    {
      "source": "mlinfra_root_p3_t3_s5",
      "target": "mlinfra_root_p3_t3_s5_d1"
    },
    {
      "source": "mlinfra_root_p3_t3_s5",
      "target": "mlinfra_root_p3_t3_s5_d2"
    },
    {
      "source": "mlinfra_root_p3",
      "target": "mlinfra_root_p3_t4"
    },
    {
      "source": "mlinfra_root_p3_t4",
      "target": "mlinfra_root_p3_t4_s1"
    },
    {
      "source": "mlinfra_root_p3_t4_s1",
      "target": "mlinfra_root_p3_t4_s1_d1"
    },
    {
      "source": "mlinfra_root_p3_t4_s1",
      "target": "mlinfra_root_p3_t4_s1_d2"
    },
    {
      "source": "mlinfra_root_p3_t4",
      "target": "mlinfra_root_p3_t4_s2"
    },
    {
      "source": "mlinfra_root_p3_t4_s2",
      "target": "mlinfra_root_p3_t4_s2_d1"
    },
    {
      "source": "mlinfra_root_p3_t4_s2",
      "target": "mlinfra_root_p3_t4_s2_d2"
    },
    {
      "source": "mlinfra_root_p3_t4",
      "target": "mlinfra_root_p3_t4_s3"
    },
    {
      "source": "mlinfra_root_p3_t4_s3",
      "target": "mlinfra_root_p3_t4_s3_d1"
    },
    {
      "source": "mlinfra_root_p3_t4_s3",
      "target": "mlinfra_root_p3_t4_s3_d2"
    },
    {
      "source": "mlinfra_root_p3_t4",
      "target": "mlinfra_root_p3_t4_s4"
    },
    {
      "source": "mlinfra_root_p3_t4_s4",
      "target": "mlinfra_root_p3_t4_s4_d1"
    },
    {
      "source": "mlinfra_root_p3_t4_s4",
      "target": "mlinfra_root_p3_t4_s4_d2"
    },
    {
      "source": "mlinfra_root_p3_t4",
      "target": "mlinfra_root_p3_t4_s5"
    },
    {
      "source": "mlinfra_root_p3_t4_s5",
      "target": "mlinfra_root_p3_t4_s5_d1"
    },
    {
      "source": "mlinfra_root_p3_t4_s5",
      "target": "mlinfra_root_p3_t4_s5_d2"
    },
    {
      "source": "mlinfra_root_p3",
      "target": "mlinfra_root_p3_t5"
    },
    {
      "source": "mlinfra_root_p3_t5",
      "target": "mlinfra_root_p3_t5_s1"
    },
    {
      "source": "mlinfra_root_p3_t5_s1",
      "target": "mlinfra_root_p3_t5_s1_d1"
    },
    {
      "source": "mlinfra_root_p3_t5_s1",
      "target": "mlinfra_root_p3_t5_s1_d2"
    },
    {
      "source": "mlinfra_root_p3_t5",
      "target": "mlinfra_root_p3_t5_s2"
    },
    {
      "source": "mlinfra_root_p3_t5_s2",
      "target": "mlinfra_root_p3_t5_s2_d1"
    },
    {
      "source": "mlinfra_root_p3_t5_s2",
      "target": "mlinfra_root_p3_t5_s2_d2"
    },
    {
      "source": "mlinfra_root_p3_t5",
      "target": "mlinfra_root_p3_t5_s3"
    },
    {
      "source": "mlinfra_root_p3_t5_s3",
      "target": "mlinfra_root_p3_t5_s3_d1"
    },
    {
      "source": "mlinfra_root_p3_t5_s3",
      "target": "mlinfra_root_p3_t5_s3_d2"
    },
    {
      "source": "mlinfra_root_p3_t5",
      "target": "mlinfra_root_p3_t5_s4"
    },
    {
      "source": "mlinfra_root_p3_t5_s4",
      "target": "mlinfra_root_p3_t5_s4_d1"
    },
    {
      "source": "mlinfra_root_p3_t5_s4",
      "target": "mlinfra_root_p3_t5_s4_d2"
    },
    {
      "source": "mlinfra_root_p3_t5",
      "target": "mlinfra_root_p3_t5_s5"
    },
    {
      "source": "mlinfra_root_p3_t5_s5",
      "target": "mlinfra_root_p3_t5_s5_d1"
    },
    {
      "source": "mlinfra_root_p3_t5_s5",
      "target": "mlinfra_root_p3_t5_s5_d2"
    },
    {
      "source": "mlinfra_root_p3",
      "target": "mlinfra_root_p3_t6"
    },
    {
      "source": "mlinfra_root_p3_t6",
      "target": "mlinfra_root_p3_t6_s1"
    },
    {
      "source": "mlinfra_root_p3_t6_s1",
      "target": "mlinfra_root_p3_t6_s1_d1"
    },
    {
      "source": "mlinfra_root_p3_t6_s1",
      "target": "mlinfra_root_p3_t6_s1_d2"
    },
    {
      "source": "mlinfra_root_p3_t6",
      "target": "mlinfra_root_p3_t6_s2"
    },
    {
      "source": "mlinfra_root_p3_t6_s2",
      "target": "mlinfra_root_p3_t6_s2_d1"
    },
    {
      "source": "mlinfra_root_p3_t6_s2",
      "target": "mlinfra_root_p3_t6_s2_d2"
    },
    {
      "source": "mlinfra_root_p3_t6",
      "target": "mlinfra_root_p3_t6_s3"
    },
    {
      "source": "mlinfra_root_p3_t6_s3",
      "target": "mlinfra_root_p3_t6_s3_d1"
    },
    {
      "source": "mlinfra_root_p3_t6_s3",
      "target": "mlinfra_root_p3_t6_s3_d2"
    },
    {
      "source": "mlinfra_root_p3_t6",
      "target": "mlinfra_root_p3_t6_s4"
    },
    {
      "source": "mlinfra_root_p3_t6_s4",
      "target": "mlinfra_root_p3_t6_s4_d1"
    },
    {
      "source": "mlinfra_root_p3_t6_s4",
      "target": "mlinfra_root_p3_t6_s4_d2"
    },
    {
      "source": "mlinfra_root_p3_t6",
      "target": "mlinfra_root_p3_t6_s5"
    },
    {
      "source": "mlinfra_root_p3_t6_s5",
      "target": "mlinfra_root_p3_t6_s5_d1"
    },
    {
      "source": "mlinfra_root_p3_t6_s5",
      "target": "mlinfra_root_p3_t6_s5_d2"
    },
    {
      "source": "mlinfra_root",
      "target": "mlinfra_root_p4"
    },
    {
      "source": "mlinfra_root_p4",
      "target": "mlinfra_root_p4_t1"
    },
    {
      "source": "mlinfra_root_p4_t1",
      "target": "mlinfra_root_p4_t1_s1"
    },
    {
      "source": "mlinfra_root_p4_t1_s1",
      "target": "mlinfra_root_p4_t1_s1_d1"
    },
    {
      "source": "mlinfra_root_p4_t1_s1",
      "target": "mlinfra_root_p4_t1_s1_d2"
    },
    {
      "source": "mlinfra_root_p4_t1",
      "target": "mlinfra_root_p4_t1_s2"
    },
    {
      "source": "mlinfra_root_p4_t1_s2",
      "target": "mlinfra_root_p4_t1_s2_d1"
    },
    {
      "source": "mlinfra_root_p4_t1_s2",
      "target": "mlinfra_root_p4_t1_s2_d2"
    },
    {
      "source": "mlinfra_root_p4_t1",
      "target": "mlinfra_root_p4_t1_s3"
    },
    {
      "source": "mlinfra_root_p4_t1_s3",
      "target": "mlinfra_root_p4_t1_s3_d1"
    },
    {
      "source": "mlinfra_root_p4_t1_s3",
      "target": "mlinfra_root_p4_t1_s3_d2"
    },
    {
      "source": "mlinfra_root_p4_t1",
      "target": "mlinfra_root_p4_t1_s4"
    },
    {
      "source": "mlinfra_root_p4_t1_s4",
      "target": "mlinfra_root_p4_t1_s4_d1"
    },
    {
      "source": "mlinfra_root_p4_t1_s4",
      "target": "mlinfra_root_p4_t1_s4_d2"
    },
    {
      "source": "mlinfra_root_p4_t1",
      "target": "mlinfra_root_p4_t1_s5"
    },
    {
      "source": "mlinfra_root_p4_t1_s5",
      "target": "mlinfra_root_p4_t1_s5_d1"
    },
    {
      "source": "mlinfra_root_p4_t1_s5",
      "target": "mlinfra_root_p4_t1_s5_d2"
    },
    {
      "source": "mlinfra_root_p4",
      "target": "mlinfra_root_p4_t2"
    },
    {
      "source": "mlinfra_root_p4_t2",
      "target": "mlinfra_root_p4_t2_s1"
    },
    {
      "source": "mlinfra_root_p4_t2_s1",
      "target": "mlinfra_root_p4_t2_s1_d1"
    },
    {
      "source": "mlinfra_root_p4_t2_s1",
      "target": "mlinfra_root_p4_t2_s1_d2"
    },
    {
      "source": "mlinfra_root_p4_t2",
      "target": "mlinfra_root_p4_t2_s2"
    },
    {
      "source": "mlinfra_root_p4_t2_s2",
      "target": "mlinfra_root_p4_t2_s2_d1"
    },
    {
      "source": "mlinfra_root_p4_t2_s2",
      "target": "mlinfra_root_p4_t2_s2_d2"
    },
    {
      "source": "mlinfra_root_p4_t2",
      "target": "mlinfra_root_p4_t2_s3"
    },
    {
      "source": "mlinfra_root_p4_t2_s3",
      "target": "mlinfra_root_p4_t2_s3_d1"
    },
    {
      "source": "mlinfra_root_p4_t2_s3",
      "target": "mlinfra_root_p4_t2_s3_d2"
    },
    {
      "source": "mlinfra_root_p4_t2",
      "target": "mlinfra_root_p4_t2_s4"
    },
    {
      "source": "mlinfra_root_p4_t2_s4",
      "target": "mlinfra_root_p4_t2_s4_d1"
    },
    {
      "source": "mlinfra_root_p4_t2_s4",
      "target": "mlinfra_root_p4_t2_s4_d2"
    },
    {
      "source": "mlinfra_root_p4_t2",
      "target": "mlinfra_root_p4_t2_s5"
    },
    {
      "source": "mlinfra_root_p4_t2_s5",
      "target": "mlinfra_root_p4_t2_s5_d1"
    },
    {
      "source": "mlinfra_root_p4_t2_s5",
      "target": "mlinfra_root_p4_t2_s5_d2"
    },
    {
      "source": "mlinfra_root_p4",
      "target": "mlinfra_root_p4_t3"
    },
    {
      "source": "mlinfra_root_p4_t3",
      "target": "mlinfra_root_p4_t3_s1"
    },
    {
      "source": "mlinfra_root_p4_t3_s1",
      "target": "mlinfra_root_p4_t3_s1_d1"
    },
    {
      "source": "mlinfra_root_p4_t3_s1",
      "target": "mlinfra_root_p4_t3_s1_d2"
    },
    {
      "source": "mlinfra_root_p4_t3",
      "target": "mlinfra_root_p4_t3_s2"
    },
    {
      "source": "mlinfra_root_p4_t3_s2",
      "target": "mlinfra_root_p4_t3_s2_d1"
    },
    {
      "source": "mlinfra_root_p4_t3_s2",
      "target": "mlinfra_root_p4_t3_s2_d2"
    },
    {
      "source": "mlinfra_root_p4_t3",
      "target": "mlinfra_root_p4_t3_s3"
    },
    {
      "source": "mlinfra_root_p4_t3_s3",
      "target": "mlinfra_root_p4_t3_s3_d1"
    },
    {
      "source": "mlinfra_root_p4_t3_s3",
      "target": "mlinfra_root_p4_t3_s3_d2"
    },
    {
      "source": "mlinfra_root_p4_t3",
      "target": "mlinfra_root_p4_t3_s4"
    },
    {
      "source": "mlinfra_root_p4_t3_s4",
      "target": "mlinfra_root_p4_t3_s4_d1"
    },
    {
      "source": "mlinfra_root_p4_t3_s4",
      "target": "mlinfra_root_p4_t3_s4_d2"
    },
    {
      "source": "mlinfra_root_p4_t3",
      "target": "mlinfra_root_p4_t3_s5"
    },
    {
      "source": "mlinfra_root_p4_t3_s5",
      "target": "mlinfra_root_p4_t3_s5_d1"
    },
    {
      "source": "mlinfra_root_p4_t3_s5",
      "target": "mlinfra_root_p4_t3_s5_d2"
    },
    {
      "source": "mlinfra_root_p4",
      "target": "mlinfra_root_p4_t4"
    },
    {
      "source": "mlinfra_root_p4_t4",
      "target": "mlinfra_root_p4_t4_s1"
    },
    {
      "source": "mlinfra_root_p4_t4_s1",
      "target": "mlinfra_root_p4_t4_s1_d1"
    },
    {
      "source": "mlinfra_root_p4_t4_s1",
      "target": "mlinfra_root_p4_t4_s1_d2"
    },
    {
      "source": "mlinfra_root_p4_t4",
      "target": "mlinfra_root_p4_t4_s2"
    },
    {
      "source": "mlinfra_root_p4_t4_s2",
      "target": "mlinfra_root_p4_t4_s2_d1"
    },
    {
      "source": "mlinfra_root_p4_t4_s2",
      "target": "mlinfra_root_p4_t4_s2_d2"
    },
    {
      "source": "mlinfra_root_p4_t4",
      "target": "mlinfra_root_p4_t4_s3"
    },
    {
      "source": "mlinfra_root_p4_t4_s3",
      "target": "mlinfra_root_p4_t4_s3_d1"
    },
    {
      "source": "mlinfra_root_p4_t4_s3",
      "target": "mlinfra_root_p4_t4_s3_d2"
    },
    {
      "source": "mlinfra_root_p4_t4",
      "target": "mlinfra_root_p4_t4_s4"
    },
    {
      "source": "mlinfra_root_p4_t4_s4",
      "target": "mlinfra_root_p4_t4_s4_d1"
    },
    {
      "source": "mlinfra_root_p4_t4_s4",
      "target": "mlinfra_root_p4_t4_s4_d2"
    },
    {
      "source": "mlinfra_root_p4_t4",
      "target": "mlinfra_root_p4_t4_s5"
    },
    {
      "source": "mlinfra_root_p4_t4_s5",
      "target": "mlinfra_root_p4_t4_s5_d1"
    },
    {
      "source": "mlinfra_root_p4_t4_s5",
      "target": "mlinfra_root_p4_t4_s5_d2"
    },
    {
      "source": "mlinfra_root_p4",
      "target": "mlinfra_root_p4_t5"
    },
    {
      "source": "mlinfra_root_p4_t5",
      "target": "mlinfra_root_p4_t5_s1"
    },
    {
      "source": "mlinfra_root_p4_t5_s1",
      "target": "mlinfra_root_p4_t5_s1_d1"
    },
    {
      "source": "mlinfra_root_p4_t5_s1",
      "target": "mlinfra_root_p4_t5_s1_d2"
    },
    {
      "source": "mlinfra_root_p4_t5",
      "target": "mlinfra_root_p4_t5_s2"
    },
    {
      "source": "mlinfra_root_p4_t5_s2",
      "target": "mlinfra_root_p4_t5_s2_d1"
    },
    {
      "source": "mlinfra_root_p4_t5_s2",
      "target": "mlinfra_root_p4_t5_s2_d2"
    },
    {
      "source": "mlinfra_root_p4_t5",
      "target": "mlinfra_root_p4_t5_s3"
    },
    {
      "source": "mlinfra_root_p4_t5_s3",
      "target": "mlinfra_root_p4_t5_s3_d1"
    },
    {
      "source": "mlinfra_root_p4_t5_s3",
      "target": "mlinfra_root_p4_t5_s3_d2"
    },
    {
      "source": "mlinfra_root_p4_t5",
      "target": "mlinfra_root_p4_t5_s4"
    },
    {
      "source": "mlinfra_root_p4_t5_s4",
      "target": "mlinfra_root_p4_t5_s4_d1"
    },
    {
      "source": "mlinfra_root_p4_t5_s4",
      "target": "mlinfra_root_p4_t5_s4_d2"
    },
    {
      "source": "mlinfra_root_p4_t5",
      "target": "mlinfra_root_p4_t5_s5"
    },
    {
      "source": "mlinfra_root_p4_t5_s5",
      "target": "mlinfra_root_p4_t5_s5_d1"
    },
    {
      "source": "mlinfra_root_p4_t5_s5",
      "target": "mlinfra_root_p4_t5_s5_d2"
    },
    {
      "source": "mlinfra_root_p4",
      "target": "mlinfra_root_p4_t6"
    },
    {
      "source": "mlinfra_root_p4_t6",
      "target": "mlinfra_root_p4_t6_s1"
    },
    {
      "source": "mlinfra_root_p4_t6_s1",
      "target": "mlinfra_root_p4_t6_s1_d1"
    },
    {
      "source": "mlinfra_root_p4_t6_s1",
      "target": "mlinfra_root_p4_t6_s1_d2"
    },
    {
      "source": "mlinfra_root_p4_t6",
      "target": "mlinfra_root_p4_t6_s2"
    },
    {
      "source": "mlinfra_root_p4_t6_s2",
      "target": "mlinfra_root_p4_t6_s2_d1"
    },
    {
      "source": "mlinfra_root_p4_t6_s2",
      "target": "mlinfra_root_p4_t6_s2_d2"
    },
    {
      "source": "mlinfra_root_p4_t6",
      "target": "mlinfra_root_p4_t6_s3"
    },
    {
      "source": "mlinfra_root_p4_t6_s3",
      "target": "mlinfra_root_p4_t6_s3_d1"
    },
    {
      "source": "mlinfra_root_p4_t6_s3",
      "target": "mlinfra_root_p4_t6_s3_d2"
    },
    {
      "source": "mlinfra_root_p4_t6",
      "target": "mlinfra_root_p4_t6_s4"
    },
    {
      "source": "mlinfra_root_p4_t6_s4",
      "target": "mlinfra_root_p4_t6_s4_d1"
    },
    {
      "source": "mlinfra_root_p4_t6_s4",
      "target": "mlinfra_root_p4_t6_s4_d2"
    },
    {
      "source": "mlinfra_root_p4_t6",
      "target": "mlinfra_root_p4_t6_s5"
    },
    {
      "source": "mlinfra_root_p4_t6_s5",
      "target": "mlinfra_root_p4_t6_s5_d1"
    },
    {
      "source": "mlinfra_root_p4_t6_s5",
      "target": "mlinfra_root_p4_t6_s5_d2"
    },
    {
      "source": "mlinfra_root",
      "target": "mlinfra_root_p5"
    },
    {
      "source": "mlinfra_root_p5",
      "target": "mlinfra_root_p5_t1"
    },
    {
      "source": "mlinfra_root_p5_t1",
      "target": "mlinfra_root_p5_t1_s1"
    },
    {
      "source": "mlinfra_root_p5_t1_s1",
      "target": "mlinfra_root_p5_t1_s1_d1"
    },
    {
      "source": "mlinfra_root_p5_t1_s1",
      "target": "mlinfra_root_p5_t1_s1_d2"
    },
    {
      "source": "mlinfra_root_p5_t1",
      "target": "mlinfra_root_p5_t1_s2"
    },
    {
      "source": "mlinfra_root_p5_t1_s2",
      "target": "mlinfra_root_p5_t1_s2_d1"
    },
    {
      "source": "mlinfra_root_p5_t1_s2",
      "target": "mlinfra_root_p5_t1_s2_d2"
    },
    {
      "source": "mlinfra_root_p5_t1",
      "target": "mlinfra_root_p5_t1_s3"
    },
    {
      "source": "mlinfra_root_p5_t1_s3",
      "target": "mlinfra_root_p5_t1_s3_d1"
    },
    {
      "source": "mlinfra_root_p5_t1_s3",
      "target": "mlinfra_root_p5_t1_s3_d2"
    },
    {
      "source": "mlinfra_root_p5_t1",
      "target": "mlinfra_root_p5_t1_s4"
    },
    {
      "source": "mlinfra_root_p5_t1_s4",
      "target": "mlinfra_root_p5_t1_s4_d1"
    },
    {
      "source": "mlinfra_root_p5_t1_s4",
      "target": "mlinfra_root_p5_t1_s4_d2"
    },
    {
      "source": "mlinfra_root_p5_t1",
      "target": "mlinfra_root_p5_t1_s5"
    },
    {
      "source": "mlinfra_root_p5_t1_s5",
      "target": "mlinfra_root_p5_t1_s5_d1"
    },
    {
      "source": "mlinfra_root_p5_t1_s5",
      "target": "mlinfra_root_p5_t1_s5_d2"
    },
    {
      "source": "mlinfra_root_p5",
      "target": "mlinfra_root_p5_t2"
    },
    {
      "source": "mlinfra_root_p5_t2",
      "target": "mlinfra_root_p5_t2_s1"
    },
    {
      "source": "mlinfra_root_p5_t2_s1",
      "target": "mlinfra_root_p5_t2_s1_d1"
    },
    {
      "source": "mlinfra_root_p5_t2_s1",
      "target": "mlinfra_root_p5_t2_s1_d2"
    },
    {
      "source": "mlinfra_root_p5_t2",
      "target": "mlinfra_root_p5_t2_s2"
    },
    {
      "source": "mlinfra_root_p5_t2_s2",
      "target": "mlinfra_root_p5_t2_s2_d1"
    },
    {
      "source": "mlinfra_root_p5_t2_s2",
      "target": "mlinfra_root_p5_t2_s2_d2"
    },
    {
      "source": "mlinfra_root_p5_t2",
      "target": "mlinfra_root_p5_t2_s3"
    },
    {
      "source": "mlinfra_root_p5_t2_s3",
      "target": "mlinfra_root_p5_t2_s3_d1"
    },
    {
      "source": "mlinfra_root_p5_t2_s3",
      "target": "mlinfra_root_p5_t2_s3_d2"
    },
    {
      "source": "mlinfra_root_p5_t2",
      "target": "mlinfra_root_p5_t2_s4"
    },
    {
      "source": "mlinfra_root_p5_t2_s4",
      "target": "mlinfra_root_p5_t2_s4_d1"
    },
    {
      "source": "mlinfra_root_p5_t2_s4",
      "target": "mlinfra_root_p5_t2_s4_d2"
    },
    {
      "source": "mlinfra_root_p5_t2",
      "target": "mlinfra_root_p5_t2_s5"
    },
    {
      "source": "mlinfra_root_p5_t2_s5",
      "target": "mlinfra_root_p5_t2_s5_d1"
    },
    {
      "source": "mlinfra_root_p5_t2_s5",
      "target": "mlinfra_root_p5_t2_s5_d2"
    },
    {
      "source": "mlinfra_root_p5",
      "target": "mlinfra_root_p5_t3"
    },
    {
      "source": "mlinfra_root_p5_t3",
      "target": "mlinfra_root_p5_t3_s1"
    },
    {
      "source": "mlinfra_root_p5_t3_s1",
      "target": "mlinfra_root_p5_t3_s1_d1"
    },
    {
      "source": "mlinfra_root_p5_t3_s1",
      "target": "mlinfra_root_p5_t3_s1_d2"
    },
    {
      "source": "mlinfra_root_p5_t3",
      "target": "mlinfra_root_p5_t3_s2"
    },
    {
      "source": "mlinfra_root_p5_t3_s2",
      "target": "mlinfra_root_p5_t3_s2_d1"
    },
    {
      "source": "mlinfra_root_p5_t3_s2",
      "target": "mlinfra_root_p5_t3_s2_d2"
    },
    {
      "source": "mlinfra_root_p5_t3",
      "target": "mlinfra_root_p5_t3_s3"
    },
    {
      "source": "mlinfra_root_p5_t3_s3",
      "target": "mlinfra_root_p5_t3_s3_d1"
    },
    {
      "source": "mlinfra_root_p5_t3_s3",
      "target": "mlinfra_root_p5_t3_s3_d2"
    },
    {
      "source": "mlinfra_root_p5_t3",
      "target": "mlinfra_root_p5_t3_s4"
    },
    {
      "source": "mlinfra_root_p5_t3_s4",
      "target": "mlinfra_root_p5_t3_s4_d1"
    },
    {
      "source": "mlinfra_root_p5_t3_s4",
      "target": "mlinfra_root_p5_t3_s4_d2"
    },
    {
      "source": "mlinfra_root_p5_t3",
      "target": "mlinfra_root_p5_t3_s5"
    },
    {
      "source": "mlinfra_root_p5_t3_s5",
      "target": "mlinfra_root_p5_t3_s5_d1"
    },
    {
      "source": "mlinfra_root_p5_t3_s5",
      "target": "mlinfra_root_p5_t3_s5_d2"
    },
    {
      "source": "mlinfra_root_p5",
      "target": "mlinfra_root_p5_t4"
    },
    {
      "source": "mlinfra_root_p5_t4",
      "target": "mlinfra_root_p5_t4_s1"
    },
    {
      "source": "mlinfra_root_p5_t4_s1",
      "target": "mlinfra_root_p5_t4_s1_d1"
    },
    {
      "source": "mlinfra_root_p5_t4_s1",
      "target": "mlinfra_root_p5_t4_s1_d2"
    },
    {
      "source": "mlinfra_root_p5_t4",
      "target": "mlinfra_root_p5_t4_s2"
    },
    {
      "source": "mlinfra_root_p5_t4_s2",
      "target": "mlinfra_root_p5_t4_s2_d1"
    },
    {
      "source": "mlinfra_root_p5_t4_s2",
      "target": "mlinfra_root_p5_t4_s2_d2"
    },
    {
      "source": "mlinfra_root_p5_t4",
      "target": "mlinfra_root_p5_t4_s3"
    },
    {
      "source": "mlinfra_root_p5_t4_s3",
      "target": "mlinfra_root_p5_t4_s3_d1"
    },
    {
      "source": "mlinfra_root_p5_t4_s3",
      "target": "mlinfra_root_p5_t4_s3_d2"
    },
    {
      "source": "mlinfra_root_p5_t4",
      "target": "mlinfra_root_p5_t4_s4"
    },
    {
      "source": "mlinfra_root_p5_t4_s4",
      "target": "mlinfra_root_p5_t4_s4_d1"
    },
    {
      "source": "mlinfra_root_p5_t4_s4",
      "target": "mlinfra_root_p5_t4_s4_d2"
    },
    {
      "source": "mlinfra_root_p5_t4",
      "target": "mlinfra_root_p5_t4_s5"
    },
    {
      "source": "mlinfra_root_p5_t4_s5",
      "target": "mlinfra_root_p5_t4_s5_d1"
    },
    {
      "source": "mlinfra_root_p5_t4_s5",
      "target": "mlinfra_root_p5_t4_s5_d2"
    },
    {
      "source": "mlinfra_root_p5",
      "target": "mlinfra_root_p5_t5"
    },
    {
      "source": "mlinfra_root_p5_t5",
      "target": "mlinfra_root_p5_t5_s1"
    },
    {
      "source": "mlinfra_root_p5_t5_s1",
      "target": "mlinfra_root_p5_t5_s1_d1"
    },
    {
      "source": "mlinfra_root_p5_t5_s1",
      "target": "mlinfra_root_p5_t5_s1_d2"
    },
    {
      "source": "mlinfra_root_p5_t5",
      "target": "mlinfra_root_p5_t5_s2"
    },
    {
      "source": "mlinfra_root_p5_t5_s2",
      "target": "mlinfra_root_p5_t5_s2_d1"
    },
    {
      "source": "mlinfra_root_p5_t5_s2",
      "target": "mlinfra_root_p5_t5_s2_d2"
    },
    {
      "source": "mlinfra_root_p5_t5",
      "target": "mlinfra_root_p5_t5_s3"
    },
    {
      "source": "mlinfra_root_p5_t5_s3",
      "target": "mlinfra_root_p5_t5_s3_d1"
    },
    {
      "source": "mlinfra_root_p5_t5_s3",
      "target": "mlinfra_root_p5_t5_s3_d2"
    },
    {
      "source": "mlinfra_root_p5_t5",
      "target": "mlinfra_root_p5_t5_s4"
    },
    {
      "source": "mlinfra_root_p5_t5_s4",
      "target": "mlinfra_root_p5_t5_s4_d1"
    },
    {
      "source": "mlinfra_root_p5_t5_s4",
      "target": "mlinfra_root_p5_t5_s4_d2"
    },
    {
      "source": "mlinfra_root_p5_t5",
      "target": "mlinfra_root_p5_t5_s5"
    },
    {
      "source": "mlinfra_root_p5_t5_s5",
      "target": "mlinfra_root_p5_t5_s5_d1"
    },
    {
      "source": "mlinfra_root_p5_t5_s5",
      "target": "mlinfra_root_p5_t5_s5_d2"
    },
    {
      "source": "mlinfra_root_p5",
      "target": "mlinfra_root_p5_t6"
    },
    {
      "source": "mlinfra_root_p5_t6",
      "target": "mlinfra_root_p5_t6_s1"
    },
    {
      "source": "mlinfra_root_p5_t6_s1",
      "target": "mlinfra_root_p5_t6_s1_d1"
    },
    {
      "source": "mlinfra_root_p5_t6_s1",
      "target": "mlinfra_root_p5_t6_s1_d2"
    },
    {
      "source": "mlinfra_root_p5_t6",
      "target": "mlinfra_root_p5_t6_s2"
    },
    {
      "source": "mlinfra_root_p5_t6_s2",
      "target": "mlinfra_root_p5_t6_s2_d1"
    },
    {
      "source": "mlinfra_root_p5_t6_s2",
      "target": "mlinfra_root_p5_t6_s2_d2"
    },
    {
      "source": "mlinfra_root_p5_t6",
      "target": "mlinfra_root_p5_t6_s3"
    },
    {
      "source": "mlinfra_root_p5_t6_s3",
      "target": "mlinfra_root_p5_t6_s3_d1"
    },
    {
      "source": "mlinfra_root_p5_t6_s3",
      "target": "mlinfra_root_p5_t6_s3_d2"
    },
    {
      "source": "mlinfra_root_p5_t6",
      "target": "mlinfra_root_p5_t6_s4"
    },
    {
      "source": "mlinfra_root_p5_t6_s4",
      "target": "mlinfra_root_p5_t6_s4_d1"
    },
    {
      "source": "mlinfra_root_p5_t6_s4",
      "target": "mlinfra_root_p5_t6_s4_d2"
    },
    {
      "source": "mlinfra_root_p5_t6",
      "target": "mlinfra_root_p5_t6_s5"
    },
    {
      "source": "mlinfra_root_p5_t6_s5",
      "target": "mlinfra_root_p5_t6_s5_d1"
    },
    {
      "source": "mlinfra_root_p5_t6_s5",
      "target": "mlinfra_root_p5_t6_s5_d2"
    },
    {
      "source": "mlinfra_root",
      "target": "mlinfra_root_p6"
    },
    {
      "source": "mlinfra_root_p6",
      "target": "mlinfra_root_p6_t1"
    },
    {
      "source": "mlinfra_root_p6_t1",
      "target": "mlinfra_root_p6_t1_s1"
    },
    {
      "source": "mlinfra_root_p6_t1_s1",
      "target": "mlinfra_root_p6_t1_s1_d1"
    },
    {
      "source": "mlinfra_root_p6_t1_s1",
      "target": "mlinfra_root_p6_t1_s1_d2"
    },
    {
      "source": "mlinfra_root_p6_t1",
      "target": "mlinfra_root_p6_t1_s2"
    },
    {
      "source": "mlinfra_root_p6_t1_s2",
      "target": "mlinfra_root_p6_t1_s2_d1"
    },
    {
      "source": "mlinfra_root_p6_t1_s2",
      "target": "mlinfra_root_p6_t1_s2_d2"
    },
    {
      "source": "mlinfra_root_p6_t1",
      "target": "mlinfra_root_p6_t1_s3"
    },
    {
      "source": "mlinfra_root_p6_t1_s3",
      "target": "mlinfra_root_p6_t1_s3_d1"
    },
    {
      "source": "mlinfra_root_p6_t1_s3",
      "target": "mlinfra_root_p6_t1_s3_d2"
    },
    {
      "source": "mlinfra_root_p6_t1",
      "target": "mlinfra_root_p6_t1_s4"
    },
    {
      "source": "mlinfra_root_p6_t1_s4",
      "target": "mlinfra_root_p6_t1_s4_d1"
    },
    {
      "source": "mlinfra_root_p6_t1_s4",
      "target": "mlinfra_root_p6_t1_s4_d2"
    },
    {
      "source": "mlinfra_root_p6_t1",
      "target": "mlinfra_root_p6_t1_s5"
    },
    {
      "source": "mlinfra_root_p6_t1_s5",
      "target": "mlinfra_root_p6_t1_s5_d1"
    },
    {
      "source": "mlinfra_root_p6_t1_s5",
      "target": "mlinfra_root_p6_t1_s5_d2"
    },
    {
      "source": "mlinfra_root_p6",
      "target": "mlinfra_root_p6_t2"
    },
    {
      "source": "mlinfra_root_p6_t2",
      "target": "mlinfra_root_p6_t2_s1"
    },
    {
      "source": "mlinfra_root_p6_t2_s1",
      "target": "mlinfra_root_p6_t2_s1_d1"
    },
    {
      "source": "mlinfra_root_p6_t2_s1",
      "target": "mlinfra_root_p6_t2_s1_d2"
    },
    {
      "source": "mlinfra_root_p6_t2",
      "target": "mlinfra_root_p6_t2_s2"
    },
    {
      "source": "mlinfra_root_p6_t2_s2",
      "target": "mlinfra_root_p6_t2_s2_d1"
    },
    {
      "source": "mlinfra_root_p6_t2_s2",
      "target": "mlinfra_root_p6_t2_s2_d2"
    },
    {
      "source": "mlinfra_root_p6_t2",
      "target": "mlinfra_root_p6_t2_s3"
    },
    {
      "source": "mlinfra_root_p6_t2_s3",
      "target": "mlinfra_root_p6_t2_s3_d1"
    },
    {
      "source": "mlinfra_root_p6_t2_s3",
      "target": "mlinfra_root_p6_t2_s3_d2"
    },
    {
      "source": "mlinfra_root_p6_t2",
      "target": "mlinfra_root_p6_t2_s4"
    },
    {
      "source": "mlinfra_root_p6_t2_s4",
      "target": "mlinfra_root_p6_t2_s4_d1"
    },
    {
      "source": "mlinfra_root_p6_t2_s4",
      "target": "mlinfra_root_p6_t2_s4_d2"
    },
    {
      "source": "mlinfra_root_p6_t2",
      "target": "mlinfra_root_p6_t2_s5"
    },
    {
      "source": "mlinfra_root_p6_t2_s5",
      "target": "mlinfra_root_p6_t2_s5_d1"
    },
    {
      "source": "mlinfra_root_p6_t2_s5",
      "target": "mlinfra_root_p6_t2_s5_d2"
    },
    {
      "source": "mlinfra_root_p6",
      "target": "mlinfra_root_p6_t3"
    },
    {
      "source": "mlinfra_root_p6_t3",
      "target": "mlinfra_root_p6_t3_s1"
    },
    {
      "source": "mlinfra_root_p6_t3_s1",
      "target": "mlinfra_root_p6_t3_s1_d1"
    },
    {
      "source": "mlinfra_root_p6_t3_s1",
      "target": "mlinfra_root_p6_t3_s1_d2"
    },
    {
      "source": "mlinfra_root_p6_t3",
      "target": "mlinfra_root_p6_t3_s2"
    },
    {
      "source": "mlinfra_root_p6_t3_s2",
      "target": "mlinfra_root_p6_t3_s2_d1"
    },
    {
      "source": "mlinfra_root_p6_t3_s2",
      "target": "mlinfra_root_p6_t3_s2_d2"
    },
    {
      "source": "mlinfra_root_p6_t3",
      "target": "mlinfra_root_p6_t3_s3"
    },
    {
      "source": "mlinfra_root_p6_t3_s3",
      "target": "mlinfra_root_p6_t3_s3_d1"
    },
    {
      "source": "mlinfra_root_p6_t3_s3",
      "target": "mlinfra_root_p6_t3_s3_d2"
    },
    {
      "source": "mlinfra_root_p6_t3",
      "target": "mlinfra_root_p6_t3_s4"
    },
    {
      "source": "mlinfra_root_p6_t3_s4",
      "target": "mlinfra_root_p6_t3_s4_d1"
    },
    {
      "source": "mlinfra_root_p6_t3_s4",
      "target": "mlinfra_root_p6_t3_s4_d2"
    },
    {
      "source": "mlinfra_root_p6_t3",
      "target": "mlinfra_root_p6_t3_s5"
    },
    {
      "source": "mlinfra_root_p6_t3_s5",
      "target": "mlinfra_root_p6_t3_s5_d1"
    },
    {
      "source": "mlinfra_root_p6_t3_s5",
      "target": "mlinfra_root_p6_t3_s5_d2"
    },
    {
      "source": "mlinfra_root_p6",
      "target": "mlinfra_root_p6_t4"
    },
    {
      "source": "mlinfra_root_p6_t4",
      "target": "mlinfra_root_p6_t4_s1"
    },
    {
      "source": "mlinfra_root_p6_t4_s1",
      "target": "mlinfra_root_p6_t4_s1_d1"
    },
    {
      "source": "mlinfra_root_p6_t4_s1",
      "target": "mlinfra_root_p6_t4_s1_d2"
    },
    {
      "source": "mlinfra_root_p6_t4",
      "target": "mlinfra_root_p6_t4_s2"
    },
    {
      "source": "mlinfra_root_p6_t4_s2",
      "target": "mlinfra_root_p6_t4_s2_d1"
    },
    {
      "source": "mlinfra_root_p6_t4_s2",
      "target": "mlinfra_root_p6_t4_s2_d2"
    },
    {
      "source": "mlinfra_root_p6_t4",
      "target": "mlinfra_root_p6_t4_s3"
    },
    {
      "source": "mlinfra_root_p6_t4_s3",
      "target": "mlinfra_root_p6_t4_s3_d1"
    },
    {
      "source": "mlinfra_root_p6_t4_s3",
      "target": "mlinfra_root_p6_t4_s3_d2"
    },
    {
      "source": "mlinfra_root_p6_t4",
      "target": "mlinfra_root_p6_t4_s4"
    },
    {
      "source": "mlinfra_root_p6_t4_s4",
      "target": "mlinfra_root_p6_t4_s4_d1"
    },
    {
      "source": "mlinfra_root_p6_t4_s4",
      "target": "mlinfra_root_p6_t4_s4_d2"
    },
    {
      "source": "mlinfra_root_p6_t4",
      "target": "mlinfra_root_p6_t4_s5"
    },
    {
      "source": "mlinfra_root_p6_t4_s5",
      "target": "mlinfra_root_p6_t4_s5_d1"
    },
    {
      "source": "mlinfra_root_p6_t4_s5",
      "target": "mlinfra_root_p6_t4_s5_d2"
    },
    {
      "source": "mlinfra_root_p6",
      "target": "mlinfra_root_p6_t5"
    },
    {
      "source": "mlinfra_root_p6_t5",
      "target": "mlinfra_root_p6_t5_s1"
    },
    {
      "source": "mlinfra_root_p6_t5_s1",
      "target": "mlinfra_root_p6_t5_s1_d1"
    },
    {
      "source": "mlinfra_root_p6_t5_s1",
      "target": "mlinfra_root_p6_t5_s1_d2"
    },
    {
      "source": "mlinfra_root_p6_t5",
      "target": "mlinfra_root_p6_t5_s2"
    },
    {
      "source": "mlinfra_root_p6_t5_s2",
      "target": "mlinfra_root_p6_t5_s2_d1"
    },
    {
      "source": "mlinfra_root_p6_t5_s2",
      "target": "mlinfra_root_p6_t5_s2_d2"
    },
    {
      "source": "mlinfra_root_p6_t5",
      "target": "mlinfra_root_p6_t5_s3"
    },
    {
      "source": "mlinfra_root_p6_t5_s3",
      "target": "mlinfra_root_p6_t5_s3_d1"
    },
    {
      "source": "mlinfra_root_p6_t5_s3",
      "target": "mlinfra_root_p6_t5_s3_d2"
    },
    {
      "source": "mlinfra_root_p6_t5",
      "target": "mlinfra_root_p6_t5_s4"
    },
    {
      "source": "mlinfra_root_p6_t5_s4",
      "target": "mlinfra_root_p6_t5_s4_d1"
    },
    {
      "source": "mlinfra_root_p6_t5_s4",
      "target": "mlinfra_root_p6_t5_s4_d2"
    },
    {
      "source": "mlinfra_root_p6_t5",
      "target": "mlinfra_root_p6_t5_s5"
    },
    {
      "source": "mlinfra_root_p6_t5_s5",
      "target": "mlinfra_root_p6_t5_s5_d1"
    },
    {
      "source": "mlinfra_root_p6_t5_s5",
      "target": "mlinfra_root_p6_t5_s5_d2"
    },
    {
      "source": "mlinfra_root_p6",
      "target": "mlinfra_root_p6_t6"
    },
    {
      "source": "mlinfra_root_p6_t6",
      "target": "mlinfra_root_p6_t6_s1"
    },
    {
      "source": "mlinfra_root_p6_t6_s1",
      "target": "mlinfra_root_p6_t6_s1_d1"
    },
    {
      "source": "mlinfra_root_p6_t6_s1",
      "target": "mlinfra_root_p6_t6_s1_d2"
    },
    {
      "source": "mlinfra_root_p6_t6",
      "target": "mlinfra_root_p6_t6_s2"
    },
    {
      "source": "mlinfra_root_p6_t6_s2",
      "target": "mlinfra_root_p6_t6_s2_d1"
    },
    {
      "source": "mlinfra_root_p6_t6_s2",
      "target": "mlinfra_root_p6_t6_s2_d2"
    },
    {
      "source": "mlinfra_root_p6_t6",
      "target": "mlinfra_root_p6_t6_s3"
    },
    {
      "source": "mlinfra_root_p6_t6_s3",
      "target": "mlinfra_root_p6_t6_s3_d1"
    },
    {
      "source": "mlinfra_root_p6_t6_s3",
      "target": "mlinfra_root_p6_t6_s3_d2"
    },
    {
      "source": "mlinfra_root_p6_t6",
      "target": "mlinfra_root_p6_t6_s4"
    },
    {
      "source": "mlinfra_root_p6_t6_s4",
      "target": "mlinfra_root_p6_t6_s4_d1"
    },
    {
      "source": "mlinfra_root_p6_t6_s4",
      "target": "mlinfra_root_p6_t6_s4_d2"
    },
    {
      "source": "mlinfra_root_p6_t6",
      "target": "mlinfra_root_p6_t6_s5"
    },
    {
      "source": "mlinfra_root_p6_t6_s5",
      "target": "mlinfra_root_p6_t6_s5_d1"
    },
    {
      "source": "mlinfra_root_p6_t6_s5",
      "target": "mlinfra_root_p6_t6_s5_d2"
    },
    {
      "source": "mlinfra_root",
      "target": "mlinfra_root_p7"
    },
    {
      "source": "mlinfra_root_p7",
      "target": "mlinfra_root_p7_t1"
    },
    {
      "source": "mlinfra_root_p7_t1",
      "target": "mlinfra_root_p7_t1_s1"
    },
    {
      "source": "mlinfra_root_p7_t1_s1",
      "target": "mlinfra_root_p7_t1_s1_d1"
    },
    {
      "source": "mlinfra_root_p7_t1_s1",
      "target": "mlinfra_root_p7_t1_s1_d2"
    },
    {
      "source": "mlinfra_root_p7_t1",
      "target": "mlinfra_root_p7_t1_s2"
    },
    {
      "source": "mlinfra_root_p7_t1_s2",
      "target": "mlinfra_root_p7_t1_s2_d1"
    },
    {
      "source": "mlinfra_root_p7_t1_s2",
      "target": "mlinfra_root_p7_t1_s2_d2"
    },
    {
      "source": "mlinfra_root_p7_t1",
      "target": "mlinfra_root_p7_t1_s3"
    },
    {
      "source": "mlinfra_root_p7_t1_s3",
      "target": "mlinfra_root_p7_t1_s3_d1"
    },
    {
      "source": "mlinfra_root_p7_t1_s3",
      "target": "mlinfra_root_p7_t1_s3_d2"
    },
    {
      "source": "mlinfra_root_p7_t1",
      "target": "mlinfra_root_p7_t1_s4"
    },
    {
      "source": "mlinfra_root_p7_t1_s4",
      "target": "mlinfra_root_p7_t1_s4_d1"
    },
    {
      "source": "mlinfra_root_p7_t1_s4",
      "target": "mlinfra_root_p7_t1_s4_d2"
    },
    {
      "source": "mlinfra_root_p7_t1",
      "target": "mlinfra_root_p7_t1_s5"
    },
    {
      "source": "mlinfra_root_p7_t1_s5",
      "target": "mlinfra_root_p7_t1_s5_d1"
    },
    {
      "source": "mlinfra_root_p7_t1_s5",
      "target": "mlinfra_root_p7_t1_s5_d2"
    },
    {
      "source": "mlinfra_root_p7",
      "target": "mlinfra_root_p7_t2"
    },
    {
      "source": "mlinfra_root_p7_t2",
      "target": "mlinfra_root_p7_t2_s1"
    },
    {
      "source": "mlinfra_root_p7_t2_s1",
      "target": "mlinfra_root_p7_t2_s1_d1"
    },
    {
      "source": "mlinfra_root_p7_t2_s1",
      "target": "mlinfra_root_p7_t2_s1_d2"
    },
    {
      "source": "mlinfra_root_p7_t2",
      "target": "mlinfra_root_p7_t2_s2"
    },
    {
      "source": "mlinfra_root_p7_t2_s2",
      "target": "mlinfra_root_p7_t2_s2_d1"
    },
    {
      "source": "mlinfra_root_p7_t2_s2",
      "target": "mlinfra_root_p7_t2_s2_d2"
    },
    {
      "source": "mlinfra_root_p7_t2",
      "target": "mlinfra_root_p7_t2_s3"
    },
    {
      "source": "mlinfra_root_p7_t2_s3",
      "target": "mlinfra_root_p7_t2_s3_d1"
    },
    {
      "source": "mlinfra_root_p7_t2_s3",
      "target": "mlinfra_root_p7_t2_s3_d2"
    },
    {
      "source": "mlinfra_root_p7_t2",
      "target": "mlinfra_root_p7_t2_s4"
    },
    {
      "source": "mlinfra_root_p7_t2_s4",
      "target": "mlinfra_root_p7_t2_s4_d1"
    },
    {
      "source": "mlinfra_root_p7_t2_s4",
      "target": "mlinfra_root_p7_t2_s4_d2"
    },
    {
      "source": "mlinfra_root_p7_t2",
      "target": "mlinfra_root_p7_t2_s5"
    },
    {
      "source": "mlinfra_root_p7_t2_s5",
      "target": "mlinfra_root_p7_t2_s5_d1"
    },
    {
      "source": "mlinfra_root_p7_t2_s5",
      "target": "mlinfra_root_p7_t2_s5_d2"
    },
    {
      "source": "mlinfra_root_p7",
      "target": "mlinfra_root_p7_t3"
    },
    {
      "source": "mlinfra_root_p7_t3",
      "target": "mlinfra_root_p7_t3_s1"
    },
    {
      "source": "mlinfra_root_p7_t3_s1",
      "target": "mlinfra_root_p7_t3_s1_d1"
    },
    {
      "source": "mlinfra_root_p7_t3_s1",
      "target": "mlinfra_root_p7_t3_s1_d2"
    },
    {
      "source": "mlinfra_root_p7_t3",
      "target": "mlinfra_root_p7_t3_s2"
    },
    {
      "source": "mlinfra_root_p7_t3_s2",
      "target": "mlinfra_root_p7_t3_s2_d1"
    },
    {
      "source": "mlinfra_root_p7_t3_s2",
      "target": "mlinfra_root_p7_t3_s2_d2"
    },
    {
      "source": "mlinfra_root_p7_t3",
      "target": "mlinfra_root_p7_t3_s3"
    },
    {
      "source": "mlinfra_root_p7_t3_s3",
      "target": "mlinfra_root_p7_t3_s3_d1"
    },
    {
      "source": "mlinfra_root_p7_t3_s3",
      "target": "mlinfra_root_p7_t3_s3_d2"
    },
    {
      "source": "mlinfra_root_p7_t3",
      "target": "mlinfra_root_p7_t3_s4"
    },
    {
      "source": "mlinfra_root_p7_t3_s4",
      "target": "mlinfra_root_p7_t3_s4_d1"
    },
    {
      "source": "mlinfra_root_p7_t3_s4",
      "target": "mlinfra_root_p7_t3_s4_d2"
    },
    {
      "source": "mlinfra_root_p7_t3",
      "target": "mlinfra_root_p7_t3_s5"
    },
    {
      "source": "mlinfra_root_p7_t3_s5",
      "target": "mlinfra_root_p7_t3_s5_d1"
    },
    {
      "source": "mlinfra_root_p7_t3_s5",
      "target": "mlinfra_root_p7_t3_s5_d2"
    },
    {
      "source": "mlinfra_root_p7",
      "target": "mlinfra_root_p7_t4"
    },
    {
      "source": "mlinfra_root_p7_t4",
      "target": "mlinfra_root_p7_t4_s1"
    },
    {
      "source": "mlinfra_root_p7_t4_s1",
      "target": "mlinfra_root_p7_t4_s1_d1"
    },
    {
      "source": "mlinfra_root_p7_t4_s1",
      "target": "mlinfra_root_p7_t4_s1_d2"
    },
    {
      "source": "mlinfra_root_p7_t4",
      "target": "mlinfra_root_p7_t4_s2"
    },
    {
      "source": "mlinfra_root_p7_t4_s2",
      "target": "mlinfra_root_p7_t4_s2_d1"
    },
    {
      "source": "mlinfra_root_p7_t4_s2",
      "target": "mlinfra_root_p7_t4_s2_d2"
    },
    {
      "source": "mlinfra_root_p7_t4",
      "target": "mlinfra_root_p7_t4_s3"
    },
    {
      "source": "mlinfra_root_p7_t4_s3",
      "target": "mlinfra_root_p7_t4_s3_d1"
    },
    {
      "source": "mlinfra_root_p7_t4_s3",
      "target": "mlinfra_root_p7_t4_s3_d2"
    },
    {
      "source": "mlinfra_root_p7_t4",
      "target": "mlinfra_root_p7_t4_s4"
    },
    {
      "source": "mlinfra_root_p7_t4_s4",
      "target": "mlinfra_root_p7_t4_s4_d1"
    },
    {
      "source": "mlinfra_root_p7_t4_s4",
      "target": "mlinfra_root_p7_t4_s4_d2"
    },
    {
      "source": "mlinfra_root_p7_t4",
      "target": "mlinfra_root_p7_t4_s5"
    },
    {
      "source": "mlinfra_root_p7_t4_s5",
      "target": "mlinfra_root_p7_t4_s5_d1"
    },
    {
      "source": "mlinfra_root_p7_t4_s5",
      "target": "mlinfra_root_p7_t4_s5_d2"
    },
    {
      "source": "mlinfra_root_p7",
      "target": "mlinfra_root_p7_t5"
    },
    {
      "source": "mlinfra_root_p7_t5",
      "target": "mlinfra_root_p7_t5_s1"
    },
    {
      "source": "mlinfra_root_p7_t5_s1",
      "target": "mlinfra_root_p7_t5_s1_d1"
    },
    {
      "source": "mlinfra_root_p7_t5_s1",
      "target": "mlinfra_root_p7_t5_s1_d2"
    },
    {
      "source": "mlinfra_root_p7_t5",
      "target": "mlinfra_root_p7_t5_s2"
    },
    {
      "source": "mlinfra_root_p7_t5_s2",
      "target": "mlinfra_root_p7_t5_s2_d1"
    },
    {
      "source": "mlinfra_root_p7_t5_s2",
      "target": "mlinfra_root_p7_t5_s2_d2"
    },
    {
      "source": "mlinfra_root_p7_t5",
      "target": "mlinfra_root_p7_t5_s3"
    },
    {
      "source": "mlinfra_root_p7_t5_s3",
      "target": "mlinfra_root_p7_t5_s3_d1"
    },
    {
      "source": "mlinfra_root_p7_t5_s3",
      "target": "mlinfra_root_p7_t5_s3_d2"
    },
    {
      "source": "mlinfra_root_p7_t5",
      "target": "mlinfra_root_p7_t5_s4"
    },
    {
      "source": "mlinfra_root_p7_t5_s4",
      "target": "mlinfra_root_p7_t5_s4_d1"
    },
    {
      "source": "mlinfra_root_p7_t5_s4",
      "target": "mlinfra_root_p7_t5_s4_d2"
    },
    {
      "source": "mlinfra_root_p7_t5",
      "target": "mlinfra_root_p7_t5_s5"
    },
    {
      "source": "mlinfra_root_p7_t5_s5",
      "target": "mlinfra_root_p7_t5_s5_d1"
    },
    {
      "source": "mlinfra_root_p7_t5_s5",
      "target": "mlinfra_root_p7_t5_s5_d2"
    },
    {
      "source": "mlinfra_root_p7",
      "target": "mlinfra_root_p7_t6"
    },
    {
      "source": "mlinfra_root_p7_t6",
      "target": "mlinfra_root_p7_t6_s1"
    },
    {
      "source": "mlinfra_root_p7_t6_s1",
      "target": "mlinfra_root_p7_t6_s1_d1"
    },
    {
      "source": "mlinfra_root_p7_t6_s1",
      "target": "mlinfra_root_p7_t6_s1_d2"
    },
    {
      "source": "mlinfra_root_p7_t6",
      "target": "mlinfra_root_p7_t6_s2"
    },
    {
      "source": "mlinfra_root_p7_t6_s2",
      "target": "mlinfra_root_p7_t6_s2_d1"
    },
    {
      "source": "mlinfra_root_p7_t6_s2",
      "target": "mlinfra_root_p7_t6_s2_d2"
    },
    {
      "source": "mlinfra_root_p7_t6",
      "target": "mlinfra_root_p7_t6_s3"
    },
    {
      "source": "mlinfra_root_p7_t6_s3",
      "target": "mlinfra_root_p7_t6_s3_d1"
    },
    {
      "source": "mlinfra_root_p7_t6_s3",
      "target": "mlinfra_root_p7_t6_s3_d2"
    },
    {
      "source": "mlinfra_root_p7_t6",
      "target": "mlinfra_root_p7_t6_s4"
    },
    {
      "source": "mlinfra_root_p7_t6_s4",
      "target": "mlinfra_root_p7_t6_s4_d1"
    },
    {
      "source": "mlinfra_root_p7_t6_s4",
      "target": "mlinfra_root_p7_t6_s4_d2"
    },
    {
      "source": "mlinfra_root_p7_t6",
      "target": "mlinfra_root_p7_t6_s5"
    },
    {
      "source": "mlinfra_root_p7_t6_s5",
      "target": "mlinfra_root_p7_t6_s5_d1"
    },
    {
      "source": "mlinfra_root_p7_t6_s5",
      "target": "mlinfra_root_p7_t6_s5_d2"
    },
    {
      "source": "mlinfra_root",
      "target": "mlinfra_root_p8"
    },
    {
      "source": "mlinfra_root_p8",
      "target": "mlinfra_root_p8_t1"
    },
    {
      "source": "mlinfra_root_p8_t1",
      "target": "mlinfra_root_p8_t1_s1"
    },
    {
      "source": "mlinfra_root_p8_t1_s1",
      "target": "mlinfra_root_p8_t1_s1_d1"
    },
    {
      "source": "mlinfra_root_p8_t1_s1",
      "target": "mlinfra_root_p8_t1_s1_d2"
    },
    {
      "source": "mlinfra_root_p8_t1",
      "target": "mlinfra_root_p8_t1_s2"
    },
    {
      "source": "mlinfra_root_p8_t1_s2",
      "target": "mlinfra_root_p8_t1_s2_d1"
    },
    {
      "source": "mlinfra_root_p8_t1_s2",
      "target": "mlinfra_root_p8_t1_s2_d2"
    },
    {
      "source": "mlinfra_root_p8_t1",
      "target": "mlinfra_root_p8_t1_s3"
    },
    {
      "source": "mlinfra_root_p8_t1_s3",
      "target": "mlinfra_root_p8_t1_s3_d1"
    },
    {
      "source": "mlinfra_root_p8_t1_s3",
      "target": "mlinfra_root_p8_t1_s3_d2"
    },
    {
      "source": "mlinfra_root_p8_t1",
      "target": "mlinfra_root_p8_t1_s4"
    },
    {
      "source": "mlinfra_root_p8_t1_s4",
      "target": "mlinfra_root_p8_t1_s4_d1"
    },
    {
      "source": "mlinfra_root_p8_t1_s4",
      "target": "mlinfra_root_p8_t1_s4_d2"
    },
    {
      "source": "mlinfra_root_p8_t1",
      "target": "mlinfra_root_p8_t1_s5"
    },
    {
      "source": "mlinfra_root_p8_t1_s5",
      "target": "mlinfra_root_p8_t1_s5_d1"
    },
    {
      "source": "mlinfra_root_p8_t1_s5",
      "target": "mlinfra_root_p8_t1_s5_d2"
    },
    {
      "source": "mlinfra_root_p8",
      "target": "mlinfra_root_p8_t2"
    },
    {
      "source": "mlinfra_root_p8_t2",
      "target": "mlinfra_root_p8_t2_s1"
    },
    {
      "source": "mlinfra_root_p8_t2_s1",
      "target": "mlinfra_root_p8_t2_s1_d1"
    },
    {
      "source": "mlinfra_root_p8_t2_s1",
      "target": "mlinfra_root_p8_t2_s1_d2"
    },
    {
      "source": "mlinfra_root_p8_t2",
      "target": "mlinfra_root_p8_t2_s2"
    },
    {
      "source": "mlinfra_root_p8_t2_s2",
      "target": "mlinfra_root_p8_t2_s2_d1"
    },
    {
      "source": "mlinfra_root_p8_t2_s2",
      "target": "mlinfra_root_p8_t2_s2_d2"
    },
    {
      "source": "mlinfra_root_p8_t2",
      "target": "mlinfra_root_p8_t2_s3"
    },
    {
      "source": "mlinfra_root_p8_t2_s3",
      "target": "mlinfra_root_p8_t2_s3_d1"
    },
    {
      "source": "mlinfra_root_p8_t2_s3",
      "target": "mlinfra_root_p8_t2_s3_d2"
    },
    {
      "source": "mlinfra_root_p8_t2",
      "target": "mlinfra_root_p8_t2_s4"
    },
    {
      "source": "mlinfra_root_p8_t2_s4",
      "target": "mlinfra_root_p8_t2_s4_d1"
    },
    {
      "source": "mlinfra_root_p8_t2_s4",
      "target": "mlinfra_root_p8_t2_s4_d2"
    },
    {
      "source": "mlinfra_root_p8_t2",
      "target": "mlinfra_root_p8_t2_s5"
    },
    {
      "source": "mlinfra_root_p8_t2_s5",
      "target": "mlinfra_root_p8_t2_s5_d1"
    },
    {
      "source": "mlinfra_root_p8_t2_s5",
      "target": "mlinfra_root_p8_t2_s5_d2"
    },
    {
      "source": "mlinfra_root_p8",
      "target": "mlinfra_root_p8_t3"
    },
    {
      "source": "mlinfra_root_p8_t3",
      "target": "mlinfra_root_p8_t3_s1"
    },
    {
      "source": "mlinfra_root_p8_t3_s1",
      "target": "mlinfra_root_p8_t3_s1_d1"
    },
    {
      "source": "mlinfra_root_p8_t3_s1",
      "target": "mlinfra_root_p8_t3_s1_d2"
    },
    {
      "source": "mlinfra_root_p8_t3",
      "target": "mlinfra_root_p8_t3_s2"
    },
    {
      "source": "mlinfra_root_p8_t3_s2",
      "target": "mlinfra_root_p8_t3_s2_d1"
    },
    {
      "source": "mlinfra_root_p8_t3_s2",
      "target": "mlinfra_root_p8_t3_s2_d2"
    },
    {
      "source": "mlinfra_root_p8_t3",
      "target": "mlinfra_root_p8_t3_s3"
    },
    {
      "source": "mlinfra_root_p8_t3_s3",
      "target": "mlinfra_root_p8_t3_s3_d1"
    },
    {
      "source": "mlinfra_root_p8_t3_s3",
      "target": "mlinfra_root_p8_t3_s3_d2"
    },
    {
      "source": "mlinfra_root_p8_t3",
      "target": "mlinfra_root_p8_t3_s4"
    },
    {
      "source": "mlinfra_root_p8_t3_s4",
      "target": "mlinfra_root_p8_t3_s4_d1"
    },
    {
      "source": "mlinfra_root_p8_t3_s4",
      "target": "mlinfra_root_p8_t3_s4_d2"
    },
    {
      "source": "mlinfra_root_p8_t3",
      "target": "mlinfra_root_p8_t3_s5"
    },
    {
      "source": "mlinfra_root_p8_t3_s5",
      "target": "mlinfra_root_p8_t3_s5_d1"
    },
    {
      "source": "mlinfra_root_p8_t3_s5",
      "target": "mlinfra_root_p8_t3_s5_d2"
    },
    {
      "source": "mlinfra_root_p8",
      "target": "mlinfra_root_p8_t4"
    },
    {
      "source": "mlinfra_root_p8_t4",
      "target": "mlinfra_root_p8_t4_s1"
    },
    {
      "source": "mlinfra_root_p8_t4_s1",
      "target": "mlinfra_root_p8_t4_s1_d1"
    },
    {
      "source": "mlinfra_root_p8_t4_s1",
      "target": "mlinfra_root_p8_t4_s1_d2"
    },
    {
      "source": "mlinfra_root_p8_t4",
      "target": "mlinfra_root_p8_t4_s2"
    },
    {
      "source": "mlinfra_root_p8_t4_s2",
      "target": "mlinfra_root_p8_t4_s2_d1"
    },
    {
      "source": "mlinfra_root_p8_t4_s2",
      "target": "mlinfra_root_p8_t4_s2_d2"
    },
    {
      "source": "mlinfra_root_p8_t4",
      "target": "mlinfra_root_p8_t4_s3"
    },
    {
      "source": "mlinfra_root_p8_t4_s3",
      "target": "mlinfra_root_p8_t4_s3_d1"
    },
    {
      "source": "mlinfra_root_p8_t4_s3",
      "target": "mlinfra_root_p8_t4_s3_d2"
    },
    {
      "source": "mlinfra_root_p8_t4",
      "target": "mlinfra_root_p8_t4_s4"
    },
    {
      "source": "mlinfra_root_p8_t4_s4",
      "target": "mlinfra_root_p8_t4_s4_d1"
    },
    {
      "source": "mlinfra_root_p8_t4_s4",
      "target": "mlinfra_root_p8_t4_s4_d2"
    },
    {
      "source": "mlinfra_root_p8_t4",
      "target": "mlinfra_root_p8_t4_s5"
    },
    {
      "source": "mlinfra_root_p8_t4_s5",
      "target": "mlinfra_root_p8_t4_s5_d1"
    },
    {
      "source": "mlinfra_root_p8_t4_s5",
      "target": "mlinfra_root_p8_t4_s5_d2"
    },
    {
      "source": "mlinfra_root_p8",
      "target": "mlinfra_root_p8_t5"
    },
    {
      "source": "mlinfra_root_p8_t5",
      "target": "mlinfra_root_p8_t5_s1"
    },
    {
      "source": "mlinfra_root_p8_t5_s1",
      "target": "mlinfra_root_p8_t5_s1_d1"
    },
    {
      "source": "mlinfra_root_p8_t5_s1",
      "target": "mlinfra_root_p8_t5_s1_d2"
    },
    {
      "source": "mlinfra_root_p8_t5",
      "target": "mlinfra_root_p8_t5_s2"
    },
    {
      "source": "mlinfra_root_p8_t5_s2",
      "target": "mlinfra_root_p8_t5_s2_d1"
    },
    {
      "source": "mlinfra_root_p8_t5_s2",
      "target": "mlinfra_root_p8_t5_s2_d2"
    },
    {
      "source": "mlinfra_root_p8_t5",
      "target": "mlinfra_root_p8_t5_s3"
    },
    {
      "source": "mlinfra_root_p8_t5_s3",
      "target": "mlinfra_root_p8_t5_s3_d1"
    },
    {
      "source": "mlinfra_root_p8_t5_s3",
      "target": "mlinfra_root_p8_t5_s3_d2"
    },
    {
      "source": "mlinfra_root_p8_t5",
      "target": "mlinfra_root_p8_t5_s4"
    },
    {
      "source": "mlinfra_root_p8_t5_s4",
      "target": "mlinfra_root_p8_t5_s4_d1"
    },
    {
      "source": "mlinfra_root_p8_t5_s4",
      "target": "mlinfra_root_p8_t5_s4_d2"
    },
    {
      "source": "mlinfra_root_p8_t5",
      "target": "mlinfra_root_p8_t5_s5"
    },
    {
      "source": "mlinfra_root_p8_t5_s5",
      "target": "mlinfra_root_p8_t5_s5_d1"
    },
    {
      "source": "mlinfra_root_p8_t5_s5",
      "target": "mlinfra_root_p8_t5_s5_d2"
    },
    {
      "source": "mlinfra_root_p8",
      "target": "mlinfra_root_p8_t6"
    },
    {
      "source": "mlinfra_root_p8_t6",
      "target": "mlinfra_root_p8_t6_s1"
    },
    {
      "source": "mlinfra_root_p8_t6_s1",
      "target": "mlinfra_root_p8_t6_s1_d1"
    },
    {
      "source": "mlinfra_root_p8_t6_s1",
      "target": "mlinfra_root_p8_t6_s1_d2"
    },
    {
      "source": "mlinfra_root_p8_t6",
      "target": "mlinfra_root_p8_t6_s2"
    },
    {
      "source": "mlinfra_root_p8_t6_s2",
      "target": "mlinfra_root_p8_t6_s2_d1"
    },
    {
      "source": "mlinfra_root_p8_t6_s2",
      "target": "mlinfra_root_p8_t6_s2_d2"
    },
    {
      "source": "mlinfra_root_p8_t6",
      "target": "mlinfra_root_p8_t6_s3"
    },
    {
      "source": "mlinfra_root_p8_t6_s3",
      "target": "mlinfra_root_p8_t6_s3_d1"
    },
    {
      "source": "mlinfra_root_p8_t6_s3",
      "target": "mlinfra_root_p8_t6_s3_d2"
    },
    {
      "source": "mlinfra_root_p8_t6",
      "target": "mlinfra_root_p8_t6_s4"
    },
    {
      "source": "mlinfra_root_p8_t6_s4",
      "target": "mlinfra_root_p8_t6_s4_d1"
    },
    {
      "source": "mlinfra_root_p8_t6_s4",
      "target": "mlinfra_root_p8_t6_s4_d2"
    },
    {
      "source": "mlinfra_root_p8_t6",
      "target": "mlinfra_root_p8_t6_s5"
    },
    {
      "source": "mlinfra_root_p8_t6_s5",
      "target": "mlinfra_root_p8_t6_s5_d1"
    },
    {
      "source": "mlinfra_root_p8_t6_s5",
      "target": "mlinfra_root_p8_t6_s5_d2"
    }
  ]
};
