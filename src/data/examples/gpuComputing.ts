import { MindMapData } from "../../services/llmService";

export const GPU_COMPUTING_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "gpu_root",
      "label": "High-Performance Parallel & GPU Computing from First Principles",
      "description": "Rigorous first-principles blueprint of NVIDIA Streaming Multiprocessors (SM), SIMT execution, CUDA memory hierarchies, warp shuffle primitives, memory coalescing, NVLink RDMA interconnects, Triton Python GPU kernels, and Nsight profiling.",
      "type": "topic"
    },
    {
      "id": "gpu_root_p1",
      "label": "GPU Hardware Architecture & SIMT Model",
      "description": "Streaming Multiprocessors (SM), Warp execution (32 threads), SIMT architecture, Tensor Cores, and hardware schedulers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1",
      "label": "NVIDIA Streaming Multiprocessor (SM) Architecture",
      "description": "Internal hardware architecture of GPU Streaming Multiprocessors.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s1",
      "label": "SM Hardware Sub-Partitions & Warp Schedulers",
      "description": "Dividing SMs into 4 processing sub-partitions with dedicated warp schedulers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s1_d1",
      "label": "Quad-Subpartition Core Division",
      "description": "Distributing execution units across 4 independent processing quadrants.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s1_d2",
      "label": "Dual-Issue Warp Scheduler Pipeline",
      "description": "Dispatching instructions for two independent warps per clock cycle per subpartition.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s2",
      "label": "CUDA Core (ALU / FPU) Micro-Architecture",
      "description": "Arithmetic Logic Units executing 32-bit floating point (FP32) and integer (INT32) operations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s2_d1",
      "label": "Concurrent FP32 + INT32 Execution",
      "description": "Executing integer pointer arithmetic concurrently with floating point calculations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s2_d2",
      "label": "FP64 Double-Precision Core Ratios",
      "description": "Allocating dedicated FP64 cores (typically 1:2 ratio on data center GPUs like H100).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s3",
      "label": "Register File Capacity & Allocation (64K 32-bit Registers)",
      "description": "High-speed SRAM register file allocated per SM.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s3_d1",
      "label": "Zero-Latency Register Access",
      "description": "Accessing register file values in 0 additional clock cycles.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s3_d2",
      "label": "Register Pressure Occupancy Impact",
      "description": "High register usage per thread reducing active warp count per SM.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s4",
      "label": "Special Function Units (SFU) & Transcendental Math",
      "description": "Hardware units executing fast approximate transcendental functions (sin, cos, exp, sqrt).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s4_d1",
      "label": "Hardware Quadratic Interpolation Tables",
      "description": "Computing reciprocal square roots (__frsqrt_rn) in few clock cycles.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s4_d2",
      "label": "SFU Throughput Ratios (1 SFU per 4 CUDA Cores)",
      "description": "Managing execution bottlenecks when heavy transcendental math is issued.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s5",
      "label": "Hardware Async Copy Engine (TMA - Tensor Memory Accelerator)",
      "description": "Asynchronous hardware engine copying data from Global HBM to Shared Memory without CPU/CUDA core involvement.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s5_d1",
      "label": "Hopper TMA 5D Tensor Copy Engine",
      "description": "Copying multi-dimensional tensor blocks asynchronously in hardware.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t1_s5_d2",
      "label": "Asynchronous Transaction Barriers",
      "description": "Synchronizing TMA memory transfers without stalling CUDA core execution.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2",
      "label": "SIMT (Single Instruction, Multiple Threads) & Warp Mechanics",
      "description": "Hardware execution model executing groups of 32 threads in lockstep.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s1",
      "label": "Warp Execution Lockstep Principle (32 Threads)",
      "description": "Bundling 32 parallel CUDA threads into single execution units (Warps).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s1_d1",
      "label": "Lockstep Instruction Issue",
      "description": "Executing identical instructions across 32 threads simultaneously.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s1_d2",
      "label": "Thread Index Within Warp (laneId = threadIdx.x % 32)",
      "description": "Identifying individual thread lane indices within 32-thread warps.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s2",
      "label": "Warp Divergence & Branch Execution Masks",
      "description": "Performance penalty occurring when threads inside a warp take different execution branches.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s2_d1",
      "label": "Serially Executing Divergent Branch Paths",
      "description": "Serializing execution of if and else branches while masking inactive threads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s2_d2",
      "label": "Re-Convergence Point Stack (SSY / SYNC Instructions)",
      "description": "Re-unifying divergent thread paths at common post-branch instructions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s3",
      "label": "Volta / Hopper Independent Thread Scheduling (ITS)",
      "description": "Per-thread instruction pointers and call stacks introduced in Volta architectures.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s3_d1",
      "label": "Interleaved Execution of Divergent Branches",
      "description": "Yielding execution between divergent branch threads to unlock sub-warp parallelism.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s3_d2",
      "label": "Explicit Warp Convergence Requirement (__syncwarp())",
      "description": "Requiring explicit synchronization to guarantee warp convergence.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s4",
      "label": "Warp Stall Reasons (Memory Throttle, Execution Dependency, Sync)",
      "description": "Hardware counters explaining why warp schedulers cannot issue instructions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s4_d1",
      "label": "Stall Long Scoreboard (HBM Memory Latency Wait)",
      "description": "Warps waiting 200-800 clock cycles for global memory fetches.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s4_d2",
      "label": "Stall Execution Dependency (RAW Pipeline Wait)",
      "description": "Warps waiting for preceding instruction register writeback.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s5",
      "label": "Active Warps & SM Theoretical Occupancy",
      "description": "Ratio of active warps on an SM to maximum supported warps (e.g. 64 warps on Hopper).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s5_d1",
      "label": "Hiding Memory Latency via High Occupancy",
      "description": "Switching to ready warps while other warps stall on memory fetches.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t2_s5_d2",
      "label": "Occupancy Calculator Bounds (Registers + Shared Memory + Thread Block Size)",
      "description": "Calculating SM occupancy bottlenecks based on resource usage.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3",
      "label": "Tensor Cores & Matrix Multiply Accumulate (MMA)",
      "description": "Specialized hardware units executing high-speed matrix multiplication operations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s1",
      "label": "Mixed-Precision MMA Operation (D = A * B + C)",
      "description": "Multiplying low-precision matrices (FP16, BF16, FP8, INT8) and accumulating into FP32.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s1_d1",
      "label": "Matrix Dimensions per Instruction (16x16x16 / 16x8x16)",
      "description": "Executing 4x4 or 16x16 matrix multiplications in single clock cycles.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s1_d2",
      "label": "Theoretical FLOPS Speedup (4-16x vs CUDA Cores)",
      "description": "Delivering petastrata FLOPS throughput for deep learning workloads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s2",
      "label": "FP8 (E4M3 & E5M2) Formats on Hopper / Blackwell",
      "description": "8-bit floating point formats doubling throughput over FP16.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s2_d1",
      "label": "E4M3 Format (1 Sign, 4 Exponent, 3 Mantissa - Forward Pass)",
      "description": "Maximizing precision for neural network forward activations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s2_d2",
      "label": "E5M2 Format (1 Sign, 5 Exponent, 2 Mantissa - Backward Pass)",
      "description": "Maximizing dynamic range for backward gradient propagation.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s3",
      "label": "Warp Matrix Multiply Accumulate (WMMA) CUDA API",
      "description": "C++ API exposing Tensor Core operations to CUDA programmers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s3_d1",
      "label": "nvcuda::wmma Fragment Data Structures",
      "description": "Loading matrix tiles into warp register fragments.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s3_d2",
      "label": "wmma::mma_sync Execution",
      "description": "Synchronizing warps to perform Tensor Core matrix multiplication.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s4",
      "label": "Asynchronous MMA Instructions (mma.sync / wmma.mma)",
      "description": "Low-level PTX assembly instructions driving Tensor Core hardware directly.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s4_d1",
      "label": "PTX Assembly Syntax mma.sync.aligned.m16n8k16",
      "description": "Issuing direct hardware instruction calls for matrix tile multiplication.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s4_d2",
      "label": "Warp-Level Register Layout Mapping",
      "description": "Distributing matrix fragment elements across 32 warp thread registers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s5",
      "label": "Structured Sparsity 2:4 Pattern Acceleration",
      "description": "Hardware support for 50% sparse matrices where 2 out of every 4 values are zero.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s5_d1",
      "label": "2:4 Compressed Matrix Encoding",
      "description": "Storing non-zero values and 2-bit index metadata to halve memory bandwidth.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t3_s5_d2",
      "label": "2x Matrix Multiplication Speedup",
      "description": "Doubling Tensor Core throughput when matrices follow 2:4 sparsity patterns.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4",
      "label": "PTX (Parallel Thread Execution) Intermediate Assembly",
      "description": "Low-level virtual instruction set architecture bridging CUDA C++ and native GPU machine code (SASS).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s1",
      "label": "PTX Virtual ISA Architecture",
      "description": "Target-agnostic virtual assembly language compiled by nvcc.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s1_d1",
      "label": "Typed Register Representation (%r1, %f1, %p1)",
      "description": "Explicitly typing virtual registers as integer, float, or predicate.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s1_d2",
      "label": "Forward & Backward Compatibility",
      "description": "Ensuring PTX code compiled for older GPUs runs on future GPU architectures.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s2",
      "label": "nvprune & PTX JIT Compilation at Runtime",
      "description": "Compiling PTX to native machine assembly (SASS) at runtime via GPU drivers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s2_d1",
      "label": "Driver JIT Compilation of PTX to SASS",
      "description": "JIT-compiling embedded PTX code if native binary SASS is missing.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s2_d2",
      "label": "Fatbin Binary Packaging",
      "description": "Packaging both native SASS binaries and fallback PTX assembly into fat binaries.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s3",
      "label": "PTX Assembly Inline Injection (__asm__ __volatile__)",
      "description": "Injecting raw PTX assembly directly into CUDA C++ source code.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s3_d1",
      "label": "Bypassing Compiler Abstractions",
      "description": "Issuing hardware instructions un-supported by standard C++ wrappers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s3_d2",
      "label": "Explicit Memory Order Directives",
      "description": "Specifying precise memory scope and cache hints (e.g. ld.global.nc).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s4",
      "label": "SASS (Streaming Assembler) Native Assembly Inspection",
      "description": "Actual native machine code executed on physical GPU hardware.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s4_d1",
      "label": "cuobjdump & nvdisasm Disassembly Tools",
      "description": "Disassembling GPU binaries to inspect physical SASS instructions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s4_d2",
      "label": "Auditing Register Allocation and Instruction Packing",
      "description": "Optimizing hot loops by analyzing SASS instruction counts and stalls.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s5",
      "label": "Predicate Register Condition Evaluation (@%p1 instruction)",
      "description": "Executing conditional instructions using single-bit predicate registers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s5_d1",
      "label": "Predicated Instruction Execution",
      "description": "Prefixing instructions with @%p1 to execute only if predicate bit is set.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t4_s5_d2",
      "label": "Eliminating Short Branch Divergence",
      "description": "Replacing short conditional branches with predicated instructions to avoid warp divergence.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5",
      "description": "Detailed first-principles mechanics for GPU Hardware Architecture & SIMT Model topic 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s1",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for GPU Hardware Architecture & SIMT Model Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s1_d1",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s1_d2",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s2",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for GPU Hardware Architecture & SIMT Model Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s2_d1",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s2_d2",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s3",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for GPU Hardware Architecture & SIMT Model Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s3_d1",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s3_d2",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s4",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for GPU Hardware Architecture & SIMT Model Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s4_d1",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s4_d2",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s5",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for GPU Hardware Architecture & SIMT Model Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s5_d1",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t5_s5_d2",
      "label": "GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6",
      "description": "Detailed first-principles mechanics for GPU Hardware Architecture & SIMT Model topic 6.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s1",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for GPU Hardware Architecture & SIMT Model Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s1_d1",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s1_d2",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s2",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for GPU Hardware Architecture & SIMT Model Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s2_d1",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s2_d2",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s3",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for GPU Hardware Architecture & SIMT Model Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s3_d1",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s3_d2",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s4",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for GPU Hardware Architecture & SIMT Model Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s4_d1",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s4_d2",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s5",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for GPU Hardware Architecture & SIMT Model Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s5_d1",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p1_t6_s5_d2",
      "label": "GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Hardware Architecture & SIMT Model Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2",
      "label": "CUDA Programming Model & Memory Hierarchy",
      "description": "Global HBM, Shared Memory, Local, Constant, Texture memory, Dynamic shared allocation, and Thread Indexing.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1",
      "label": "CUDA Execution Hierarchy (Threads, Blocks, Grids)",
      "description": "3-tier parallel execution abstraction mapping software threads to GPU hardware.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s1",
      "label": "Thread Block Indexing Math (gridDim, blockIdx, blockDim, threadIdx)",
      "description": "Calculating global 1D/2D/3D thread coordinates.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s1_d1",
      "label": "Global 1D Thread Index Formula (idx = blockIdx.x * blockDim.x + threadIdx.x)",
      "description": "Mapping 1D thread blocks to global array element offsets.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s1_d2",
      "label": "2D Image Thread Coordinates (x = blockIdx.x * blockDim.x + threadIdx.x, y = ...)",
      "description": "Indexing 2D pixel grids in image processing kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s2",
      "label": "Thread Block Hardware Assignment to SMs",
      "description": "Assigning full thread blocks atomically to single Streaming Multiprocessors.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s2_d1",
      "label": "Thread Block Execution Atomicity",
      "description": "Ensuring all threads within a block run on the same SM to share fast L1/Shared Memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s2_d2",
      "label": "Max Threads per Block Limit (1024 Threads)",
      "description": "Capping maximum thread block size to 1024 threads across CUDA hardware.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s3",
      "label": "Grid-Stride Loop Pattern",
      "description": "Writing scalable CUDA kernels capable of processing arrays larger than grid sizes.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s3_d1",
      "label": "Loop Increment Formula (stride = gridDim.x * blockDim.x)",
      "description": "Advancing array indices by total grid thread count in a while loop.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s3_d2",
      "label": "Hardware Independence & Decoupled Grid Sizes",
      "description": "Allowing identical kernels to process arbitrary array sizes regardless of grid dimensions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s4",
      "label": "Dynamic Kernel Launch Configuration (kernel<<<grid, block, shared_mem, stream>>>)",
      "description": "Launching kernels with explicit grid dimensions, block sizes, dynamic shared memory, and streams.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s4_d1",
      "label": "Triple-Chevron Kernel Launch Syntax",
      "description": "Configuring execution parameters directly in C++ code.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s4_d2",
      "label": "Error Checking via cudaGetLastError()",
      "description": "Checking for launch configuration and syntax errors post-launch.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s5",
      "label": "Cooperative Groups Grid Synchronization (cooperative_groups::this_grid())",
      "description": "Synchronizing all thread blocks across full GPU grids.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s5_d1",
      "label": "cudaLaunchCooperativeKernel API",
      "description": "Launching kernels with hardware guarantees that all blocks run concurrently.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t1_s5_d2",
      "label": "Grid-Wide Barrier Synchronization (grid.sync())",
      "description": "Synchronizing entire grids without ending and re-launching kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2",
      "label": "GPU Memory Hierarchy & Latencies",
      "description": "Navigating multi-tier GPU memory spaces from fast 0-cycle registers to high-capacity HBM.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s1",
      "label": "Global Memory (HBM / GDDR6 - 2TB/s Bandwidth, 200-800 Cycles)",
      "description": "High-capacity GPU VRAM accessible by all threads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s1_d1",
      "label": "High Latency Penalty (200-800 Clock Cycles)",
      "description": "Requiring heavy warp concurrency to hide global memory access latency.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s1_d2",
      "label": "Off-Chip DRAM Transfer Bottlenecks",
      "description": "Maximizing arithmetic intensity (FLOPS/Byte) to avoid memory bandwidth bounds.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s2",
      "label": "L2 Cache (Centralized Multi-MB Cache, 150-300 Cycles)",
      "description": "Unified on-chip cache shared across all SMs (e.g. 50MB on H100).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s2_d1",
      "label": "L2 Persistence Controls (cudaStreamAttrValue)",
      "description": "Reserving L2 cache regions for frequently accessed persistent tensors.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s2_d2",
      "label": "Cross-SM Data Interconnect",
      "description": "Caching global memory reads and writes across all SMs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s3",
      "label": "L1 / Shared Memory (SRAM - 20TB/s Bandwidth, 20-30 Cycles)",
      "description": "Ultra-fast software-managed SRAM cache local to each SM (up to 228KB per SM).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s3_d1",
      "label": "Configurable L1 vs Shared Memory Partitioning",
      "description": "Adjusting SM SRAM split between hardware L1 cache and software Shared Memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s3_d2",
      "label": "Sub-30 Cycle Access Speeds",
      "description": "Providing 10x higher bandwidth than global memory for thread block collaboration.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s4",
      "label": "Local Memory (Thread-Private Global Memory Spill Area)",
      "description": "Private memory region allocated per thread stored physically in high-latency Global DRAM.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s4_d1",
      "label": "Register Spill Penalty",
      "description": "Incurring severe performance drops when large local arrays spill from registers to Local Memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s4_d2",
      "label": "Compiler Auto-Spill Notifications",
      "description": "Monitoring ptxas warnings regarding local memory usage per thread.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s5",
      "label": "Constant Memory (__constant__ 64KB Read-Only Cache)",
      "description": "Dedicated 64KB read-only memory space with broadcast capabilities.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s5_d1",
      "label": "Single-Cycle Broadcast to Warps",
      "description": "Broadcasting single read values to all 32 warp threads in 1 cycle if all read identical addresses.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t2_s5_d2",
      "label": "Serialization Penalty on Divergent Reads",
      "description": "Serializing reads if warp threads access different constant memory addresses.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3",
      "label": "Shared Memory Architecture & Bank Conflicts",
      "description": "Deep dive into 32-bank Shared Memory SRAM and resolving access collisions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s1",
      "label": "32-Bank Shared Memory Structure (4-Byte Bank Strides)",
      "description": "Organizing shared memory into 32 parallel 32-bit (4-byte) memory banks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s1_d1",
      "label": "Bank Index Formula (bank_id = (byte_address / 4) % 32)",
      "description": "Distributing sequential 32-bit words across 32 independent banks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s1_d2",
      "label": "Parallel Multi-Bank Access Speed",
      "description": "Servicing 32 distinct bank requests simultaneously in 1 clock cycle.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s2",
      "label": "N-Way Bank Conflicts & Performance Drops",
      "description": "Performance penalty when multiple threads within a warp access different addresses inside the same bank.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s2_d1",
      "label": "Serialized N-Step Memory Access",
      "description": "Serializing 2-way, 4-way, or N-way bank conflicts across N sequential cycles.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s2_d2",
      "label": "Broadcast Exception (Same Address, Same Bank)",
      "description": "Zero conflict penalty when all threads read the exact same address in a bank.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s3",
      "label": "Padding Strategy to Eliminate Bank Conflicts",
      "description": "Adding dummy columns to 2D shared memory arrays to shift bank alignments.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s3_d1",
      "label": "Array Padding Technique (__shared__ float tile[32][33])",
      "description": "Adding 1 extra column to ensure column accesses hit distinct memory banks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s3_d2",
      "label": "100% Elimination of Matrix Transpose Bank Conflicts",
      "description": "Restoring full 32-bank parallel throughput during matrix manipulations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s4",
      "label": "Dynamic Shared Memory Allocation (extern __shared__)",
      "description": "Allocating variable-sized shared memory arrays at kernel launch time.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s4_d1",
      "label": "3rd Chevron Launch Parameter Specify Size",
      "description": "Passing bytes size as 3rd launch argument (kernel<<<grid, block, bytes>>>).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s4_d2",
      "label": "Pointer Offsetting within Single Dynamic Block",
      "description": "Partitioning single raw byte arrays into multiple typed pointers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s5",
      "label": "Asynchronous Shared Memory Copy (memcpy_async / cp.async)",
      "description": "Copying global memory directly to shared memory using hardware DMA instructions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s5_d1",
      "label": "Bypassing Register File Storage",
      "description": "Loading global memory directly into shared memory without using intermediate registers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t3_s5_d2",
      "label": "Overlapping Computation with Memory Transfers",
      "description": "Executing CUDA core math while cp.async fetches next iteration tiles in background.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4",
      "label": "Asynchronous CUDA Streams & Event Pipelines",
      "description": "Concurrent execution of multiple CUDA kernels and memory transfers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s1",
      "label": "CUDA Stream Queues & Non-Blocking Execution",
      "description": "Sequencing GPU command queues operating independently of other streams.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s1_d1",
      "label": "Default Stream (Stream 0) Blocking Behavior",
      "description": "Synchronizing all GPU operations if default legacy stream is used.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s1_d2",
      "label": "Non-Blocking Stream Creation (cudaStreamCreateWithFlags)",
      "description": "Creating independent streams allowing concurrent kernel execution.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s2",
      "label": "Overlapping Host-to-Device Memory & Kernel Execution",
      "description": "Executing H2D transfers, kernel math, and D2H transfers concurrently.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s2_d1",
      "label": "Pinned Host Memory Requirement (cudaMallocHost)",
      "description": "Requiring non-pageable host memory to enable hardware DMA transfers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s2_d2",
      "label": "3-Stage Pipelined Execution Waveform",
      "description": "Achieving 100% GPU utilization by overlapping transfers and computation.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s3",
      "label": "CUDA Events for Benchmarking & Stream Synchronization",
      "description": "Inserting timing markers and dependencies across CUDA streams.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s3_d1",
      "label": "Sub-Microsecond GPU Timing (cudaEventElapsedTime)",
      "description": "Measuring exact GPU execution time without host CPU clock interference.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s3_d2",
      "label": "Cross-Stream Dependency Barriers (cudaStreamWaitEvent)",
      "description": "Making one stream wait for specific events in another stream.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s4",
      "label": "CUDA Graphs API (cudaGraphInstantiate / Launch)",
      "description": "Packaging complex multi-kernel pipelines into single executable graphs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s4_d1",
      "label": "Sub-Microsecond Launch Overhead",
      "description": "Eliminating CPU driver launch overhead for sequences of small kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s4_d2",
      "label": "Hardware Work Queue Optimization",
      "description": "Allowing GPU hardware schedulers to optimize execution order ahead of time.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s5",
      "label": "Unified Memory (UM) & Page Faulting (cudaMallocManaged)",
      "description": "Single virtual memory address space accessible by both CPU and GPU.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s5_d1",
      "label": "On-Demand GPU Page Faulting",
      "description": "Migrating 4KB memory pages automatically across PCIe/NVLink upon access.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t4_s5_d2",
      "label": "Prefetching Guidance (cudaMemPrefetchAsync)",
      "description": "Prefetching managed memory to GPU VRAM ahead of time to prevent page fault stalls.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5",
      "description": "Detailed first-principles mechanics for CUDA Programming Model & Memory Hierarchy topic 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s1",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for CUDA Programming Model & Memory Hierarchy Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s1_d1",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s1_d2",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s2",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for CUDA Programming Model & Memory Hierarchy Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s2_d1",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s2_d2",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s3",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for CUDA Programming Model & Memory Hierarchy Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s3_d1",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s3_d2",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s4",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for CUDA Programming Model & Memory Hierarchy Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s4_d1",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s4_d2",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s5",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for CUDA Programming Model & Memory Hierarchy Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s5_d1",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t5_s5_d2",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6",
      "description": "Detailed first-principles mechanics for CUDA Programming Model & Memory Hierarchy topic 6.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s1",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for CUDA Programming Model & Memory Hierarchy Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s1_d1",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s1_d2",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s2",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for CUDA Programming Model & Memory Hierarchy Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s2_d1",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s2_d2",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s3",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for CUDA Programming Model & Memory Hierarchy Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s3_d1",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s3_d2",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s4",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for CUDA Programming Model & Memory Hierarchy Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s4_d1",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s4_d2",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s5",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for CUDA Programming Model & Memory Hierarchy Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s5_d1",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p2_t6_s5_d2",
      "label": "CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CUDA Programming Model & Memory Hierarchy Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3",
      "label": "Warp Level Primitives & Synchronizations",
      "description": "Warp shuffle instructions (__shfl_sync), Cooperative groups, Warp vote functions, and Memory fences.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1",
      "label": "Warp Shuffle Primitives (__shfl_sync / __shfl_xor_sync)",
      "description": "High-speed register-to-register data exchange between threads within the same warp without using Shared Memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s1",
      "label": "Full Mask Parameter (FULL_MASK = 0xffffffff)",
      "description": "32-bit active thread bitmask required by all CUDA 9+ warp shuffle instructions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s1_d1",
      "label": "Ensuring Active Thread Participation",
      "description": "Passing 0xffffffff mask to verify all 32 warp threads participate in shuffles.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s1_d2",
      "label": "Preventing Undefined Behavior under Branch Divergence",
      "description": "Avoiding deadlocks by matching active thread masks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s2",
      "label": "__shfl_sync Broadcast & Index Direct Reads",
      "description": "Reading a register value from a specific lane ID within the warp.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s2_d1",
      "label": "Broadcast from Lane 0 (val = __shfl_sync(mask, val, 0))",
      "description": "Broadcasting leader thread values to all 32 warp threads in 1 cycle.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s2_d2",
      "label": "Arbitrary Lane Register Indexing",
      "description": "Reading values from any dynamic lane ID.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s3",
      "label": "__shfl_down_sync & __shfl_up_sync Relative Offsets",
      "description": "Shift-based register exchanges for parallel reduction trees.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s3_d1",
      "label": "Relative Downward Shift (val += __shfl_down_sync(mask, val, offset))",
      "description": "Reading values from lane ID + offset.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s3_d2",
      "label": "Zero Shared Memory Overhead",
      "description": "Executing warp reductions entirely inside register files.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s4",
      "label": "__shfl_xor_sync Butterfly Exchange Algorithm",
      "description": "Exchanging registers based on bitwise XOR of lane IDs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s4_d1",
      "label": "Butterfly Reduction Tree Traversal",
      "description": "Executing log2(32) = 5 step warp reductions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s4_d2",
      "label": "Parallel Fast Fourier Transform (FFT) Implementations",
      "description": "Exchanging coefficients across butterfly network topologies.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s5",
      "label": "Sub-Nanosecond Register-to-Register Bandwidth",
      "description": "Performance advantages of shuffle primitives over Shared Memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s5_d1",
      "label": "Zero Shared Memory Bank Conflicts",
      "description": "Bypassing Shared Memory banks entirely to avoid bank collisions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t1_s5_d2",
      "label": "Maximum Theoretical Bus Throughput",
      "description": "Achieving maximum intra-warp data transfer rates.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2",
      "label": "Warp Vote & Match Primitives (__any_sync / __all_sync)",
      "description": "Evaluating predicate conditions across all 32 threads in a warp.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s1",
      "label": "__any_sync & __all_sync Evaluation",
      "description": "Evaluating Boolean predicate conditions across warp lanes.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s1_d1",
      "label": "__any_sync (True if AT LEAST ONE thread evaluates true)",
      "description": "Checking if any thread detected early exit or error conditions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s1_d2",
      "label": "__all_sync (True if ALL threads evaluate true)",
      "description": "Verifying unanimous warp agreement on conditions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s2",
      "label": "__ballot_sync Bitmask Generation",
      "description": "Generating 32-bit integer masks where bit i reflects predicate value of lane i.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s2_d1",
      "label": "Extracting Active Thread Bitmasks",
      "description": "Converting Boolean conditions into compact 32-bit bitmask integers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s2_d2",
      "label": "Popcount Bit Operations (__popc(mask))",
      "description": "Counting active threads satisfying conditions in single instructions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s3",
      "label": "__match_any_sync & __match_all_sync Value Matching",
      "description": "Finding warp threads holding identical register values.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s3_d1",
      "label": "Group-By Register Value Clustering",
      "description": "Grouping warp threads sharing identical values (e.g. key-value aggregation).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s3_d2",
      "label": "Mask Generation for Intra-Warp Deduplication",
      "description": "Generating sub-warp masks for threads matching specific keys.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s4",
      "label": "__activemask() Current Execution State",
      "description": "Returning bitmask of currently active executing threads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s4_d1",
      "label": "Inspecting Runtime Branch Divergence",
      "description": "Checking active thread masks inside conditional code blocks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s4_d2",
      "label": "Dynamic Mask Passing to Shuffle Instructions",
      "description": "Passing active masks to shuffle calls inside divergent branches.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s5",
      "label": "Warp-Level Parallel Search Acceleration",
      "description": "Accelerating linear search algorithms across array chunks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s5_d1",
      "label": "Parallel 32-Element Array Scans",
      "description": "Checking 32 array elements concurrently in single warp steps.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t2_s5_d2",
      "label": "Find-First-Set (__ffs(mask)) Target Index Extraction",
      "description": "Extracting lane ID of first matching thread in 1 cycle.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3",
      "label": "Cooperative Groups API (cooperative_groups namespace)",
      "description": "Modern flexible synchronization and thread grouping API replacing raw barrier intrinsics.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s1",
      "label": "Thread Group Hierarchy (thread_block, thread_block_tile)",
      "description": "Representing explicit thread execution groups in C++ code.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s1_d1",
      "label": "cg::this_thread_block() Representation",
      "description": "Accessing current thread block group object.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s1_d2",
      "label": "Sub-Warp Tiled Groups (cg::tiled_partition<16>(cg::this_warp()))",
      "description": "Partitioning warps into custom sub-groups of 2, 4, 8, 16, or 32 threads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s2",
      "label": "Group Synchronization (group.sync())",
      "description": "Synchronizing threads within explicitly defined cooperative groups.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s2_d1",
      "label": "Scoped Synchronization Safety",
      "description": "Synchronizing strictly participating group members without deadlocking divergent warps.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s2_d2",
      "label": "Replacing __syncthreads() with Explicit Scopes",
      "description": "Providing clean C++ abstraction over low-level barrier instructions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s3",
      "label": "Collective Group Operations (cg::reduce, cg::inclusive_scan)",
      "description": "High-level parallel reduction and scan operations on thread groups.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s3_d1",
      "label": "Template Reduction (cg::reduce(group, val, cg::plus<float>()))",
      "description": "Executing optimal multi-level reductions across thread groups in single calls.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s3_d2",
      "label": "Automatic Hardware Instruction Mapping",
      "description": "Mapping reduction calls to optimal warp shuffles or shared memory instructions automatically.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s4",
      "label": "Coalesced Threads Partitioning (cg::coalesced_threads())",
      "description": "Creating dynamic thread groups matching currently active convergent threads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s4_d1",
      "label": "Divergent Branch Grouping",
      "description": "Grouping threads currently executing identical code paths.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s4_d2",
      "label": "Safe Multi-Thread Intra-Branch Operations",
      "description": "Executing shuffles safely inside nested conditional branches.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s5",
      "label": "Grid-Wide & Multi-GPU Cooperative Execution",
      "description": "Synchronizing full grids and multi-GPU node groups.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s5_d1",
      "label": "cg::this_grid() Global Grid Barrier",
      "description": "Synchronizing all thread blocks across full GPU grids.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t3_s5_d2",
      "label": "Multi-Device Cooperative Launch (cudaLaunchCooperativeKernelMultiDevice)",
      "description": "Synchronizing thread blocks across multiple physical GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4",
      "label": "Memory Fences & Atomic Operations (__threadfence / atomicAdd)",
      "description": "Enforcing memory ordering and thread-safe updates across global VRAM and shared memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s1",
      "label": "CUDA Atomic Operations (atomicAdd, atomicCAS, atomicMin)",
      "description": "Thread-safe Read-Modify-Write operations executed atomically in memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s1_d1",
      "label": "Hardware Atomic Accelerators (L2 Cache Atomics)",
      "description": "Executing atomic operations directly inside L2 cache memory controllers at high bandwidth.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s1_d2",
      "label": "atomicCAS (Compare-And-Swap) Universal Building Block",
      "description": "Building custom complex atomic operations using atomicCAS loops.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s2",
      "label": "Atomic Contention Bottlenecks & Reduction Remedies",
      "description": "Severe performance drops occurring when thousands of threads issue atomics to identical memory locations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s2_d1",
      "label": "Serialized Atomic Memory Bottleneck",
      "description": "Serializing thousands of atomic updates, causing massive warp stalls.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s2_d2",
      "label": "Warp Aggregation Pattern (Shuffle + Single Atomic)",
      "description": "Reducing values inside warps via shuffles first, issuing only 1 atomicAdd per warp.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s3",
      "label": "Memory Fence Intrinsics (__threadfence, __threadfence_block)",
      "description": "Enforcing memory write ordering across thread scopes without halting execution.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s3_d1",
      "label": "__threadfence_block (Block-Scope Memory Ordering)",
      "description": "Ensuring all previous writes by thread are visible to block peers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s3_d2",
      "label": "__threadfence (Global System-Scope Memory Ordering)",
      "description": "Ensuring global memory writes are visible across all SMs and physical GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s4",
      "label": "C++11 Concurrency Atomic Memory Orders (memory_order_relaxed / acquire / release)",
      "description": "Fine-grained memory ordering controls in CUDA C++.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s4_d1",
      "label": "cuda::atomic<T, scope> Templated Types",
      "description": "Declaring atomic variables with explicit scope (block, device, system).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s4_d2",
      "label": "Acquire-Release Synchronization Semantics",
      "description": "Building lock-free data structures using acquire-release memory flags.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s5",
      "label": "Lock-Free Queue Data Structures on GPUs",
      "description": "Implementing multi-producer multi-consumer (MPMC) queues on GPUs using atomics and fences.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s5_d1",
      "label": "Atomic Index Reservation (atomicAdd(&head, 1))",
      "description": "Reserving queue slots atomically before writing payload data.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t4_s5_d2",
      "label": "Release Fence Payload Publication",
      "description": "Issuing release fences to ensure payload data is visible before updating valid flags.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5",
      "label": "Warp Level Primitives & Synchronizations Topic 5",
      "description": "Detailed first-principles mechanics for Warp Level Primitives & Synchronizations topic 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s1",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Warp Level Primitives & Synchronizations Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s1_d1",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s1_d2",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s2",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Warp Level Primitives & Synchronizations Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s2_d1",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s2_d2",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s3",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Warp Level Primitives & Synchronizations Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s3_d1",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s3_d2",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s4",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Warp Level Primitives & Synchronizations Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s4_d1",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s4_d2",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s5",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Warp Level Primitives & Synchronizations Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s5_d1",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t5_s5_d2",
      "label": "Warp Level Primitives & Synchronizations Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6",
      "label": "Warp Level Primitives & Synchronizations Topic 6",
      "description": "Detailed first-principles mechanics for Warp Level Primitives & Synchronizations topic 6.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s1",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Warp Level Primitives & Synchronizations Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s1_d1",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s1_d2",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s2",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Warp Level Primitives & Synchronizations Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s2_d1",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s2_d2",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s3",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Warp Level Primitives & Synchronizations Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s3_d1",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s3_d2",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s4",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Warp Level Primitives & Synchronizations Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s4_d1",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s4_d2",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s5",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Warp Level Primitives & Synchronizations Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s5_d1",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p3_t6_s5_d2",
      "label": "Warp Level Primitives & Synchronizations Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Warp Level Primitives & Synchronizations Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4",
      "label": "GPU Memory Bandwidth & Memory Coalescing",
      "description": "Coalesced global memory access, Shared memory bank conflicts, Vectorized loads (int4/float4), and Cache hit tuning.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1",
      "label": "Global Memory Coalescing Rules (32-, 64-, 128-Byte Transactions)",
      "description": "Combining global memory requests from 32 warp threads into minimal 32-byte cache line transactions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s1",
      "label": "Coalesced Access Ideal Alignment Condition",
      "description": "Condition where 32 warp threads access contiguous 32-bit (4-byte) words starting at 128-byte aligned addresses.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s1_d1",
      "label": "Single 128-Byte Memory Transaction",
      "description": "Servicing entire warp memory read in 1 single 128-byte DRAM transaction.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s1_d2",
      "label": "100% Memory Bandwidth Efficiency",
      "description": "Utilizing 100% of fetched bytes without wasted memory bus traffic.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s2",
      "label": "Un-Coalesced Strided Access Performance Penalties",
      "description": "Severe bandwidth degradation occurring when threads access non-contiguous memory locations (e.g. column access in 2D array).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s2_d1",
      "label": "32 Separate 32-Byte Transactions (32x Bus Inflation)",
      "description": "Triggering 32 independent memory transactions to fetch 32 float values.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s2_d2",
      "label": "Bandwidth Efficiency Drop to 3.125%",
      "description": "Wasting 96.875% of fetched bytes on unused DRAM data lines.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s3",
      "label": "Mis-Aligned Base Address Offset Penalties",
      "description": "Performance impact when threads access contiguous memory starting at non-aligned base addresses.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s3_d1",
      "label": "Dual Cache Line Transaction Split",
      "description": "Splitting memory fetches across 2 adjacent 128-byte cache lines.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s3_d2",
      "label": "50% Memory Throughput Drop",
      "description": "Doubling required memory transactions due to mis-alignment.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s4",
      "label": "Structure-of-Arrays (SoA) vs Array-of-Structures (AoS)",
      "description": "Data layout choice determining global memory coalescing efficiency.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s4_d1",
      "label": "AoS Un-Coalesced Layout Hazard (struct { float x, y, z; } p[N])",
      "description": "Interleaving fields, causing strided un-coalesced memory reads when accessing single fields.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s4_d2",
      "label": "SoA Perfect Coalesced Layout (struct { float x[N], y[N], z[N]; })",
      "description": "Storing identical fields contiguously to guarantee 100% coalesced vector loads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s5",
      "label": "L1/L2 Cache Bypass Instructions (ld.global.nc / __ldg())",
      "description": "Bypassing L1 data cache to read read-only global data through dedicated texture/const caches.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s5_d1",
      "label": "Read-Only Data Cache Path (__ldg(&ptr[idx]))",
      "description": "Routing read-only data through non-coherent high-bandwidth cache paths.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t1_s5_d2",
      "label": "Reducing L1 Data Cache Pollution",
      "description": "Preserving L1 cache space for writable local and global variables.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2",
      "label": "Vectorized Memory Transfers (float4 / int4 Instructions)",
      "description": "Issuing 128-bit (16-byte) vector instructions to maximize memory bus throughput.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s1",
      "label": "128-Bit Vectorized Load/Store Syntax (float4 / int4)",
      "description": "Loading and storing 4 32-bit values in single instructions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s1_d1",
      "label": "float4 Vector Pointer Casting (reinterpret_cast<float4*>)",
      "description": "Casting float pointers to float4 pointers to force 128-bit memory instructions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s1_d2",
      "label": "Emitting Single LDG.128 / STG.128 SASS Instructions",
      "description": "Executing 128-bit memory transactions directly in hardware.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s2",
      "label": "Instruction Count Reduction & Pipeline Speedup",
      "description": "Reducing total instruction counts by 4x.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s2_d1",
      "label": "4x Reduction in Memory Request Instructions",
      "description": "Replacing 4 scalar load instructions with 1 vector load.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s2_d2",
      "label": "Lowering Warp Scheduler Instruction Issue Pressure",
      "description": "Un-burdening warp schedulers to process more arithmetic math.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s3",
      "label": "Strict 16-Byte Address Alignment Requirement",
      "description": "Hardware constraint requiring memory addresses to be 16-byte aligned for vector loads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s3_d1",
      "label": "Hardware Mis-Alignment Exception Traps",
      "description": "Crashing or falling back to slow scalar reads if base addresses are not divisible by 16.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s3_d2",
      "label": "cudaMalloc 256-Byte Default Alignment Guarantee",
      "description": "Relying on CUDA memory allocators that guarantee 256-byte aligned base pointers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s4",
      "label": "Vectorized Memory Copy Implementation (Device-to-Device Copy)",
      "description": "Implementing ultra-fast memory copy kernels using float4 loads and stores.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s4_d1",
      "label": "Approaching Theoretical HBM Memory Limits (> 95% Peak B/W)",
      "description": "Achieving near-peak hardware memory bandwidth in custom copy kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s4_d2",
      "label": "Unrolling Vectorized Copy Loops",
      "description": "Combining float4 loads with grid-stride loop unrolling.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s5",
      "label": "Vectorized Shared Memory Transfers",
      "description": "Utilizing float4 vectors to load and store shared memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s5_d1",
      "label": "128-Bit Shared Memory Access",
      "description": "Loading 16 bytes per thread into shared memory in single steps.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t2_s5_d2",
      "label": "Bank Conflict Verification on Vector Loads",
      "description": "Verifying float4 loads do not trigger multi-way shared memory bank conflicts.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3",
      "label": "Roofline Performance Model & Arithmetic Intensity",
      "description": "Analytical performance framework bounding kernel performance by compute capacity or memory bandwidth.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s1",
      "label": "Arithmetic Intensity Definition (Operational Intensity = FLOPS / Byte)",
      "description": "Ratio of floating point arithmetic operations performed to bytes of memory transferred from global DRAM.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s1_d1",
      "label": "Low Intensity (e.g. Vector Add: 1 FLOP / 12 Bytes = 0.08 FLOPS/Byte)",
      "description": "Extremely memory-bound kernel constrained entirely by HBM bandwidth.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s1_d2",
      "label": "High Intensity (e.g. GEMM Matrix Multiply: O(N^3) FLOPS / O(N^2) Bytes = O(N))",
      "description": "Compute-bound kernel limited by peak GPU Tensor Core/CUDA Core FLOPS.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s2",
      "label": "Roofline Curve Ceiling Chart (Attainable Performance)",
      "description": "Plotting Attainable FLOPS = Min(Peak FLOPS, Operational Intensity * Memory Bandwidth).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s2_d1",
      "label": "Knee Point Ridge Line Calculation",
      "description": "Calculating minimum operational intensity needed to achieve peak GPU compute performance.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s2_d2",
      "label": "Visualizing Hardware Performance Limits",
      "description": "Identifying whether kernels require memory optimization vs compute optimization.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s3",
      "label": "Memory-Bound Kernel Optimization Strategies",
      "description": "Techniques for pushing memory-bound kernels higher up the roofline slope.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s3_d1",
      "label": "Shared Memory Tile Caching",
      "description": "Re-using data loaded into shared memory to increase operational intensity.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s3_d2",
      "label": "Kernel Fusion (Combining Consecutive Pointwise Operations)",
      "description": "Fusing ReLU, Add, and LayerNorm operations into single kernels to avoid global memory roundtrips.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s4",
      "label": "Compute-Bound Kernel Optimization Strategies",
      "description": "Techniques for driving compute-bound kernels closer to peak theoretical FLOPS ceilings.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s4_d1",
      "label": "Switching to Tensor Core Mixed-Precision Math",
      "description": "Utilizing FP16/BF16/FP8 Tensor Cores to raise peak FLOPS ceiling by 8-16x.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s4_d2",
      "label": "Maximizing Instruction-Level Parallelism (ILP)",
      "description": "Unrolling loops and balancing register usage to eliminate instruction pipeline stalls.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s5",
      "label": "Nsight Compute Roofline Profiling Inspection",
      "description": "Measuring exact kernel operational intensity points using NVIDIA Nsight Compute.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s5_d1",
      "label": "Automated Hardware Counter Roofline Plotting",
      "description": "Plotting measured kernel performance directly on GPU roofline curves.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t3_s5_d2",
      "label": "Quantifying Optimization Potential Remaining",
      "description": "Measuring exact percentage of peak hardware capability achieved by kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4",
      "label": "Tiling & Shared Memory Block Caching",
      "description": "Algorithmic pattern breaking large global memory datasets into small tiles cached in Shared Memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s1",
      "label": "2D Matrix Multiply Tiling Algorithm (GEMM Tiling)",
      "description": "Decomposing matrix multiplication into square N x N sub-matrix tiles (e.g. 32x32 tiles).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s1_d1",
      "label": "Cooperative Global-to-Shared Tile Loading",
      "description": "Loading sub-matrix tiles into shared memory cooperatively across thread blocks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s1_d2",
      "label": "Sub-Matrix Inner Product Accumulation",
      "description": "Multiplying tiles in fast shared memory before fetching next global tiles.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s2",
      "label": "Global Memory Access Reduction Factor (Tile Size N)",
      "description": "Reducing global memory reads by factor of N (e.g. 32x reduction for 32x32 tiles).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s2_d1",
      "label": "Converting Memory-Bound GEMM to Compute-Bound",
      "description": "Increasing arithmetic intensity above hardware roofline knee points.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s2_d2",
      "label": "Massive Speedup for Dense Linear Algebra",
      "description": "Achieving TFLOPS performance on large matrix multiplications.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s3",
      "label": "Double-Buffering (Software Pipelining / Ping-Pong Buffers)",
      "description": "Utilizing 2 shared memory buffer tiles to overlap tile loads with tile computation.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s3_d1",
      "label": "Ping-Pong Shared Memory Tile Buffers (tile[2][32][32])",
      "description": "Computing on Buffer 0 while async loading next iteration data into Buffer 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s3_d2",
      "label": "100% Memory Fetch Latency Hiding",
      "description": "Eliminating SM stalls waiting for global tile memory loads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s4",
      "label": "Boundary Check Handling for Arbitrary Matrix Sizes",
      "description": "Guarding shared memory tile loads when matrix dimensions are not exact multiples of tile size.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s4_d1",
      "label": "Zero-Padding Boundary Out-of-Bounds Reads",
      "description": "Setting out-of-bounds shared memory tile entries to 0.0 to prevent memory corruption.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s4_d2",
      "label": "Branch-Free Boundary Predication",
      "description": "Using ternary conditions (idx < size ? ptr[idx] : 0.0f) to load tiles smoothly.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s5",
      "label": "3D Volumetric Tiling (Stencil Computation & Convolution)",
      "description": "Extending tiling patterns to 3D grid spaces for image filtering and PDE solvers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s5_d1",
      "label": "Halo / Apron Region Loading",
      "description": "Loading extra boundary halo points into shared memory tiles for stencil neighbors.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t4_s5_d2",
      "label": "Accelerating 3D Finite Difference Solvers",
      "description": "Speeding up physics simulation grid sweeps by caching 3D volumetric neighborhoods.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5",
      "description": "Detailed first-principles mechanics for GPU Memory Bandwidth & Memory Coalescing topic 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s1",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for GPU Memory Bandwidth & Memory Coalescing Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s1_d1",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s1_d2",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s2",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for GPU Memory Bandwidth & Memory Coalescing Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s2_d1",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s2_d2",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s3",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for GPU Memory Bandwidth & Memory Coalescing Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s3_d1",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s3_d2",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s4",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for GPU Memory Bandwidth & Memory Coalescing Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s4_d1",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s4_d2",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s5",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for GPU Memory Bandwidth & Memory Coalescing Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s5_d1",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t5_s5_d2",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6",
      "description": "Detailed first-principles mechanics for GPU Memory Bandwidth & Memory Coalescing topic 6.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s1",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for GPU Memory Bandwidth & Memory Coalescing Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s1_d1",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s1_d2",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s2",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for GPU Memory Bandwidth & Memory Coalescing Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s2_d1",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s2_d2",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s3",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for GPU Memory Bandwidth & Memory Coalescing Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s3_d1",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s3_d2",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s4",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for GPU Memory Bandwidth & Memory Coalescing Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s4_d1",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s4_d2",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s5",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for GPU Memory Bandwidth & Memory Coalescing Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s5_d1",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p4_t6_s5_d2",
      "label": "GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for GPU Memory Bandwidth & Memory Coalescing Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5",
      "label": "Parallel Algorithms & Reductions",
      "description": "Parallel prefix sum (Scan) Blelloch algorithm, Parallel reduction tree, Bitonic sort, and Radix sort.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1",
      "label": "Tree-Based Parallel Reduction (Sum, Max, Min)",
      "description": "Logarithmic O(log N) parallel reduction algorithm aggregating N elements across GPU threads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s1",
      "label": "Shared Memory Reduction Tree Architecture",
      "description": "Loading array elements into shared memory and halving active thread count every step.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s1_d1",
      "label": "Logarithmic Step Reduction (step = blockDim.x / 2; step > 0; step /= 2)",
      "description": "Reducing 1024 elements to 1 value in log2(1024) = 10 parallel steps.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s1_d2",
      "label": "__syncthreads() Barrier Requirements",
      "description": "Synchronizing threads between reduction steps to avoid read-after-write race conditions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s2",
      "label": "Interleaved vs Sequential Addressing (Eliminating Bank Conflicts)",
      "description": "Structuring reduction indexing to prevent shared memory bank conflicts.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s2_d1",
      "label": "Interleaved Strided Indexing Hazard (s = 1, 2, 4, 8)",
      "description": "Naive strided indexing causing multi-way bank conflicts.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s2_d2",
      "label": "Sequential Reverse Indexing Solution (idx = threadIdx.x; val += shared[idx + s])",
      "description": "Accessing contiguous memory banks to achieve conflict-free reductions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s3",
      "label": "Unrolling Last Warp Reduction (Warp Shuffle Optimization)",
      "description": "Replacing shared memory reduction steps with warp shuffle instructions when active threads <= 32.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s3_d1",
      "label": "Bypassing __syncthreads() for Final 32 Elements",
      "description": "Eliminating expensive thread block barriers inside final warp reductions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s3_d2",
      "label": "__shfl_down_sync Warp Reduction Final Pass",
      "description": "Completing final 5 reduction steps entirely in warp registers in nanoseconds.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s4",
      "label": "Multi-Block Two-Pass Global Reduction",
      "description": "Reducing arrays larger than single thread block capacities across multi-pass kernel launches.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s4_d1",
      "label": "Pass 1 (Block-Level Reductions to Partial Array)",
      "description": "Writing partial block sums out to global array.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s4_d2",
      "label": "Pass 2 (Single Block Final Reduction)",
      "description": "Launching single block kernel to reduce partial sums array to final scalar answer.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s5",
      "label": "Single-Pass Atomic Global Reduction (Grid-Wide Atomics)",
      "description": "Reducing large arrays in single kernel passes using atomic additions to global memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s5_d1",
      "label": "Block Reduction + Single atomicAdd per Block",
      "description": "Executing intra-block shared memory reduction first, issuing only 1 atomicAdd per block.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t1_s5_d2",
      "label": "Fast Execution for Large Vectors",
      "description": "Avoiding overhead of secondary kernel launches for large array reductions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2",
      "label": "Parallel Prefix Sum (Scan - Blelloch & Hillis-Steele)",
      "description": "Computing prefix sums (y_i = sum(x_0 .. x_i)) in parallel across GPU arrays.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s1",
      "label": "Inclusive vs Exclusive Scan Definitions",
      "description": "Distinguishing scans that include current element (Inclusive) vs exclude current element (Exclusive).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s1_d1",
      "label": "Inclusive Scan (y_i = x_0 + x_1 + ... + x_i)",
      "description": "Including element i in running sum output.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s1_d2",
      "label": "Exclusive Scan (y_i = x_0 + x_1 + ... + x_{i-1}, y_0 = 0)",
      "description": "Excluding element i, starting output array with 0.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s2",
      "label": "Hillis-Steele Work-Inefficient Parallel Scan",
      "description": "Simple parallel scan executing in O(log N) steps but performing O(N log N) total additions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s2_d1",
      "label": "Distance Step Doubling (stride = 1, 2, 4, 8)",
      "description": "Adding values from stride locations to current elements.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s2_d2",
      "label": "Work Inefficiency Overhead",
      "description": "Performing more total operations than sequential O(N) CPU scans.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s3",
      "label": "Blelloch Work-Efficient Parallel Scan (Up-Sweep & Down-Sweep)",
      "description": "Work-efficient parallel scan algorithm performing O(N) total additions in O(log N) steps.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s3_d1",
      "label": "Up-Sweep (Reduce Phase Build Binary Tree)",
      "description": "Constructing reduction tree over shared memory array.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s3_d2",
      "label": "Down-Sweep (Traverse Tree Top-Down to Distribute Sums)",
      "description": "Propagating partial sums down tree to generate final scan array.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s4",
      "label": "Shared Memory Bank Conflict Mitigation in Scans (Padding Shifts)",
      "description": "Mitigating 16-way bank conflicts inherent in power-of-two Blelloch tree accesses.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s4_d1",
      "label": "Conflict Free Index Macro (idx + (idx >> 4))",
      "description": "Inserting padding offsets to shift bank accesses across distinct banks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s4_d2",
      "label": "Restoring Linear Scan Throughput",
      "description": "Eliminating bank conflict stalls during up-sweep and down-sweep passes.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s5",
      "label": "Stream Compaction & Filtering Applications",
      "description": "Using exclusive scans to compact sparse arrays by filtering elements matching predicates.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s5_d1",
      "label": "Step 1 (Compute Predicate Bitmask Flag Array)",
      "description": "Evaluating boolean predicate for all elements in parallel.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s5_d2",
      "label": "Step 2 (Exclusive Scan on Flag Array for Output Indices)",
      "description": "Computing target destination indices for matching elements.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t2_s5_d3",
      "label": "Step 3 (Scatter Matching Elements to Compact Output)",
      "description": "Writing matching elements out to target indices concurrently.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3",
      "label": "GPU Radix & Bitonic Parallel Sorting",
      "description": "High-performance parallel sorting algorithms tailored for massively parallel GPU hardware.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s1",
      "label": "Parallel Radix Sort (Digit-by-Digit Key Sorting)",
      "description": "Sorting keys by examining K-bit digit chunks (typically 4-bit digits, radix 16) from LSB to MSB.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s1_d1",
      "label": "4-Bit Digit Bucket Histogram Counting",
      "description": "Counting digit frequencies per thread block using shared memory histograms.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s1_d2",
      "label": "Global Exclusive Prefix Scan for Bucket Offsets",
      "description": "Computing global destination offsets for all digit buckets across blocks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s1_d3",
      "label": "Global Scatter Re-ordering Pass",
      "description": "Writing key-value pairs to global destination offsets in parallel.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s2",
      "label": "CUB & CUDPP High-Performance Sorting Libraries",
      "description": "NVIDIA CUB template library providing production-grade GPU sorting primitives.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s2_d1",
      "label": "DeviceRadixSort Block-Level Pipelining",
      "description": "Sorting billions of keys per second using hand-optimized CUB kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s2_d2",
      "label": "Sub-Millisecond Sort Times for Millions of Keys",
      "description": "Outperforming CPU sorting algorithms by 20-50x.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s3",
      "label": "Bitonic Sort Network Architecture",
      "description": "Comparison-based sorting network executing fixed sequence of compare-and-swap steps.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s3_d1",
      "label": "Bitonic Sequence Merging (Monotonic Increasing/Decreasing Sub-Sequences)",
      "description": "Merging pairs of bitonic sequences into larger sorted sequences.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s3_d2",
      "label": "Data-Independent Fixed Compare-and-Swap Stages",
      "description": "Executing deterministic compare-and-swap steps without branch divergence.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s4",
      "label": "Warp-Level Bitonic Sort for Small Key Arrays",
      "description": "Sorting small arrays (< 1024 elements) entirely inside shared memory/warp registers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s4_d1",
      "label": "Warp Shuffle Compare-and-Swap Steps",
      "description": "Exchanging and comparing keys across warp threads using __shfl_xor_sync.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s4_d2",
      "label": "Zero Global Memory Touch Sorts",
      "description": "Sorting small local data structures instantly inside custom GPU kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s5",
      "label": "Sorting Key-Value Pairs (Payload Association)",
      "description": "Sorting secondary payload arrays alongside primary sorting keys.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s5_d1",
      "label": "64-Bit Key-Value Pair Bundling",
      "description": "Packing 32-bit key and 32-bit value into single 64-bit integers for combined sorting.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t3_s5_d2",
      "label": "Scattering Payloads to Matched Key Offsets",
      "description": "Moving payload data in lockstep with key re-ordering.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4",
      "label": "Matrix Transposition & Spatial Re-ordering",
      "description": "High-speed parallel 2D/3D array transposition algorithms.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s1",
      "label": "Naive Matrix Transpose Global Memory Hazard (Read Coalesced, Write Strided)",
      "description": "Flaw in simple transpose kernels where reads are coalesced but writes are severely un-coalesced.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s1_d1",
      "label": "Un-Coalesced Store Operations (out[col * N + row] = in[row * M + col])",
      "description": "Writing data to column strides, wasting 95%+ of global write bandwidth.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s1_d2",
      "label": "Low Memory Throughput Performance",
      "description": "Achieving only 5-10% of theoretical HBM bandwidth.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s2",
      "label": "Shared Memory Tile Matrix Transpose Architecture",
      "description": "Reading global memory coalesced into shared tiles and writing to global memory coalesced.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s2_d1",
      "label": "Coalesced Global Load into Shared Tile",
      "description": "Loading row-major matrix data coalesced into 32x32 shared memory tile.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s2_d2",
      "label": "Transposed Coalesced Global Store from Shared Tile",
      "description": "Reading tile columns in shared memory and writing out coalesced to global memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s3",
      "label": "Tile Bank Conflict Padding (__shared__ float tile[32][33])",
      "description": "Adding 1 extra column padding to shared memory tiles to eliminate bank conflicts.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s3_d1",
      "label": "Eliminating Shared Memory Column Read Conflicts",
      "description": "Shifting column access bank indices to hit 32 distinct banks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s3_d2",
      "label": "Achieving 95%+ Peak HBM Transpose Bandwidth",
      "description": "Maximizing memory bus throughput for large matrix transpositions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s4",
      "label": "Batched Multi-Tensor Transposition (cuTENSOR Library)",
      "description": "NVIDIA library optimizing high-dimensional tensor transpositions and permutations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s4_d1",
      "label": "Arbitrary Index Permutation Operations (e.g. [B, H, S, D] -> [B, S, H, D])",
      "description": "Re-ordering tensor dimensions for Multi-Head Attention layers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s4_d2",
      "label": "JIT-Compiled Tensor Transpose Kernels",
      "description": "Generating optimized CUDA kernels tailored to specific tensor shapes.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s5",
      "label": "In-Place Matrix Transposition Challenges",
      "description": "Transposing square/rectangular matrices in-place without allocating auxiliary output memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s5_d1",
      "label": "Cycle-Following In-Place Permutation Traversal",
      "description": "Tracing permutation cycles to swap elements in-place.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t4_s5_d2",
      "label": "Managing Memory Trade-offs for Massive Matrices",
      "description": "Saving gigabytes of VRAM when transposing massive LLM weight matrices.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5",
      "label": "Parallel Algorithms & Reductions Topic 5",
      "description": "Detailed first-principles mechanics for Parallel Algorithms & Reductions topic 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s1",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Parallel Algorithms & Reductions Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s1_d1",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s1_d2",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s2",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Parallel Algorithms & Reductions Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s2_d1",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s2_d2",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s3",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Parallel Algorithms & Reductions Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s3_d1",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s3_d2",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s4",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Parallel Algorithms & Reductions Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s4_d1",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s4_d2",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s5",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Parallel Algorithms & Reductions Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s5_d1",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t5_s5_d2",
      "label": "Parallel Algorithms & Reductions Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6",
      "label": "Parallel Algorithms & Reductions Topic 6",
      "description": "Detailed first-principles mechanics for Parallel Algorithms & Reductions topic 6.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s1",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Parallel Algorithms & Reductions Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s1_d1",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s1_d2",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s2",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Parallel Algorithms & Reductions Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s2_d1",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s2_d2",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s3",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Parallel Algorithms & Reductions Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s3_d1",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s3_d2",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s4",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Parallel Algorithms & Reductions Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s4_d1",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s4_d2",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s5",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Parallel Algorithms & Reductions Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s5_d1",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p5_t6_s5_d2",
      "label": "Parallel Algorithms & Reductions Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Parallel Algorithms & Reductions Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6",
      "label": "Multi-GPU & Interconnect Architecture",
      "description": "NVLink 900 GB/s bandwidth, NVSwitch, GPUDirect RDMA, and NCCL collective operations (AllReduce/AllGather).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1",
      "label": "NVLink & NVSwitch Hardware Architecture",
      "description": "High-speed direct GPU-to-GPU interconnect fabric bypassing system PCIe buses.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s1",
      "label": "NVLink Generation Speeds (NVLink 4: 900 GB/s Bi-directional per GPU)",
      "description": "High-bandwidth point-to-point interconnect linking adjacent GPUs on HGX boards.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s1_d1",
      "label": "7x Higher Bandwidth than PCIe Gen5 (900 GB/s vs 128 GB/s)",
      "description": "Eliminating interconnect bottlenecks during multi-GPU model training.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s1_d2",
      "label": "High-Speed Signal Encoding Direct Wire Links",
      "description": "Transmitting data across high-frequency differential signal pairs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s2",
      "label": "NVSwitch On-Board Crossbar Switch Fabric",
      "description": "Physical switch chips interconnecting 8 to 256 GPUs in full all-to-all non-blocking networks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s2_d1",
      "label": "Non-Blocking All-to-All Full Bisection Bandwidth",
      "description": "Allowing all GPUs in a node to communicate at full 900 GB/s speeds simultaneously.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s2_d2",
      "label": "SHARP In-Network Reduction Hardware",
      "description": "Executing mathematical reduction operations (AllReduce) directly inside NVSwitch hardware.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s3",
      "label": "Peer-to-Peer (P2P) Direct Memory Access (cudaDeviceEnablePeerAccess)",
      "description": "Enabling GPUs to read and write directly to adjacent GPU VRAM across NVLink.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s3_d1",
      "label": "Direct VRAM Address Pointer Dereferencing",
      "description": "Reading remote GPU memory addresses directly via standard pointers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s3_d2",
      "label": "Zero Host CPU / System RAM Memory Intermediary",
      "description": "Bypassing host system RAM entirely during GPU-to-GPU transfers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s4",
      "label": "PCIe Gen5 Bus Fallback & Topology Discovery",
      "description": "Handling systems without NVLink where multi-GPU communication traverses PCIe switches.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s4_d1",
      "label": "PCIe Host Bridge & NUMA Node Alignment",
      "description": "Ensuring GPU pairs communicate across local PCIe root complex switches without traversing CPU sockets.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s4_d2",
      "label": "nvidia-smi topo -m Topology Matrix Inspection",
      "description": "Auditing multi-GPU interconnect links (NVLink vs PIX vs SYS).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s5",
      "label": "NVIDIA Grace Hopper (GH200) NVLink-C2C Chiplet Interconnect",
      "description": "Coherent 900 GB/s chiplet interconnect linking Grace ARM CPU and Hopper GPU.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s5_d1",
      "label": "Unified Cache-Coherent Memory Access",
      "description": "Allowing CPU and GPU to access shared 512GB LPDDR5X and 96GB HBM3 memory at high speed.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t1_s5_d2",
      "label": "Eliminating Explicit PCIe Host-to-Device Memory Copies",
      "description": "Running algorithms directly on unified CPU-GPU memory spaces.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2",
      "label": "GPUDirect RDMA (Remote Direct Memory Access)",
      "description": "Technology allowing network interface cards (NICs) to read/write GPU VRAM directly over InfiniBand.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s1",
      "label": "Bypassing Host CPU & System RAM (InfiniBand to GPU VRAM)",
      "description": "Transferring network packets directly between ConnectX NICs and GPU VRAM.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s1_d1",
      "label": "Zero CPU Interrupt & Copy Overhead",
      "description": "Offloading network packet transfers completely from host CPU cores.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s1_d2",
      "label": "Sub-Microsecond Inter-Node Network Latency",
      "description": "Achieving sub-microsecond latency across multi-node GPU clusters.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s2",
      "label": "PCIe Peer-to-Peer BAR1 Mapping",
      "description": "Mapping GPU VRAM memory regions into PCIe Base Address Registers (BAR1).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s2_d1",
      "label": "Physical PCIe Address Exposure to Network NICs",
      "description": "Exposing GPU VRAM physical addresses to InfiniBand host channel adapters (HCAs).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s2_d2",
      "label": "Direct DMA Engine Packet Writing",
      "description": "Writing incoming InfiniBand network packets directly into GPU VRAM buffers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s3",
      "label": "GPUDirect Storage (GDS / cuFile API)",
      "description": "Transferring data directly between NVMe storage drives and GPU VRAM.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s3_d1",
      "label": "Bypassing CPU Linux Page Cache",
      "description": "Eliminating CPU memory bounce buffers during dataset loading from NVMe SSDs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s3_d2",
      "label": "Maximizing Storage Input/Output Throughput",
      "description": "Loading massive AI datasets directly into GPU VRAM at 50+ GB/s per node.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s4",
      "label": "RoCEv2 (RDMA over Converged Ethernet) vs InfiniBand",
      "description": "Executing RDMA network transfers over modern 400G Ethernet networks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s4_d1",
      "label": "PFC (Priority Flow Control) Lossless Ethernet",
      "description": "Configuring Ethernet switches to prevent dropped packets during high-burst RDMA transfers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s4_d2",
      "label": "ECN (Explicit Congestion Notification) Congestion Control",
      "description": "Throttling transmission rates dynamically to prevent network buffer bloat.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s5",
      "label": "Multi-Node Cluster Scaling Efficiency",
      "description": "Scaling GPU training workloads across thousands of distributed nodes.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s5_d1",
      "label": "Linear Speedup Scaling Targets (> 90% Scaling Efficiency)",
      "description": "Maintaining high training throughput across 10,000+ GPU clusters.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t2_s5_d2",
      "label": "Network Congestion & Straggler Node Mitigation",
      "description": "Routing traffic around congested network switches using adaptive routing.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3",
      "label": "NCCL (NVIDIA Collective Communications Library)",
      "description": "High-performance collective communication primitives optimized for NVIDIA GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s1",
      "label": "NCCL Collective Operations (AllReduce, AllGather, ReduceScatter, Broadcast)",
      "description": "Standard multi-GPU communication operations underpinning distributed AI training.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s1_d1",
      "label": "ncclAllReduce (Gradient Summation across GPUs)",
      "description": "Summing model gradients across all GPUs and distributing results back to all GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s1_d2",
      "label": "ncclAllGather (Collecting Tensor Chunks from All GPUs)",
      "description": "Gathering distributed tensor shards from all GPUs into complete unified tensors.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s2",
      "label": "Ring-AllReduce Algorithm Mechanics",
      "description": "Executing AllReduce across logical GPU rings in 2*(N-1) step transfers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s2_d1",
      "label": "Phase 1: Scatter-Reduce (N-1 Steps)",
      "description": "Accumulating partial tensor chunk sums around logical GPU rings.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s2_d2",
      "label": "Phase 2: All-Gather (N-1 Steps)",
      "description": "Distributing final accumulated chunk sums around rings to complete AllReduce.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s2_d3",
      "label": "Optimal Bandwidth Efficiency Formula (Data Sent = 2 * (N-1)/N * Size)",
      "description": "Minimizing data transferred across interconnects regardless of GPU count N.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s3",
      "label": "Tree-AllReduce (Double Binary Tree Topology)",
      "description": "Executing AllReduce across tree topologies for low-latency communication on large GPU counts.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s3_d1",
      "label": "Logarithmic Latency Step Reduction (2 * log2(N) Steps)",
      "description": "Reducing network hop latency for small message sizes on large clusters.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s3_d2",
      "label": "Two Disjoint Binary Trees Utilization",
      "description": "Utilizing two independent binary trees to achieve 100% link bandwidth utilization.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s4",
      "label": "NCCL Kernel Fusion & CUDA Stream Integration",
      "description": "Launching NCCL communication kernels directly inside non-blocking CUDA streams.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s4_d1",
      "label": "Zero CPU Interventions during Collective Transfers",
      "description": "Executing multi-GPU communication directly via GPU-launched kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s4_d2",
      "label": "Overlapping Computation with Communication (Pipelined Execution)",
      "description": "Overlapping backward gradient computation of layer N-1 with AllReduce transfer of layer N.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s5",
      "label": "NCCL Environment Tuning Variables (NCCL_DEBUG, NCCL_IB_DISABLE)",
      "description": "Debugging and tuning NCCL performance across distributed GPU clusters.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s5_d1",
      "label": "NCCL_DEBUG=INFO Diagnostic Output",
      "description": "Inspecting selected communication topologies, NVLink counts, and InfiniBand channels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t3_s5_d2",
      "label": "NCCL_BUFFSIZE Tuning (Default 4MB Buffers)",
      "description": "Increasing communication buffer sizes to maximize network throughput for large model transfers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4",
      "label": "Distributed Parallelism Strategies (Data, Tensor, Pipeline, ZeRO)",
      "description": "Architectural patterns for partitioning massive AI models across multi-GPU clusters.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s1",
      "label": "Distributed Data Parallelism (DDP & PyTorch DDP)",
      "description": "Replicating full model parameters on every GPU and processing distinct data batches.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s1_d1",
      "label": "Independent Batch Forward Pass Execution",
      "description": "Computing forward activations and losses independently across GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s1_d2",
      "label": "Asynchronous Bucket AllReduce Gradient Sync",
      "description": "Overlapping backward pass gradient calculation with bucketed AllReduce transfers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s2",
      "label": "Megatron-LM Tensor Parallelism (Column & Row Parallel GEMM)",
      "description": "Splitting individual linear layer weight matrices across multiple GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s2_d1",
      "label": "Column-Parallel Linear Layer (Split Weights along Columns)",
      "description": "Splitting weight matrix W into [W1, W2], computing forward pass without communication.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s2_d2",
      "label": "Row-Parallel Linear Layer (Split Weights along Rows + AllReduce)",
      "description": "Splitting weight matrix W along rows, requiring single AllReduce to sum partial activations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s3",
      "label": "Pipeline Parallelism (1F1B Schedule & Bubble Minimization)",
      "description": "Partitioning model layers sequentially across pipeline GPU stages.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s3_d1",
      "label": "One-Forward-One-Backward (1F1B) Execution Schedule",
      "description": "Interleaving forward and backward micro-batch execution to bound memory usage.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s3_d2",
      "label": "Pipeline Bubble Idle Time Minimization",
      "description": "Dividing batches into micro-batches to reduce idle pipeline startup/ending bubbles.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s4",
      "label": "DeepSpeed ZeRO (Zero Redundancy Optimizer - Stage 1, 2, 3)",
      "description": "Partitioning optimizer states, gradients, and model parameters across data-parallel GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s4_d1",
      "label": "ZeRO-Stage 1 (Partition Optimizer States - 4x Memory Savings)",
      "description": "Sharding FP32 Adam optimizer states across GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s4_d2",
      "label": "ZeRO-Stage 2 (Partition Gradients - 8x Memory Savings)",
      "description": "Sharding gradients alongside optimizer states.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s4_d3",
      "label": "ZeRO-Stage 3 (Partition Parameters - Linear Memory Scaling)",
      "description": "Sharding model parameters, fetching parameters on-demand via AllGather during forward/backward passes.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s5",
      "label": "Sequence & Context Parallelism (RingAttention)",
      "description": "Partitioning long sequence lengths (e.g. 100k+ tokens) across multiple GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s5_d1",
      "label": "RingAttention Block Key-Value Passing",
      "description": "Passing Key and Value sequence blocks around logical GPU rings concurrently with attention computation.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t4_s5_d2",
      "label": "Infinite Sequence Length Scaling Limit",
      "description": "Enabling context windows limited only by total cluster memory rather than single GPU VRAM.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5",
      "label": "Multi-GPU & Interconnect Architecture Topic 5",
      "description": "Detailed first-principles mechanics for Multi-GPU & Interconnect Architecture topic 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s1",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Multi-GPU & Interconnect Architecture Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s1_d1",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s1_d2",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s2",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Multi-GPU & Interconnect Architecture Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s2_d1",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s2_d2",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s3",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Multi-GPU & Interconnect Architecture Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s3_d1",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s3_d2",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s4",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Multi-GPU & Interconnect Architecture Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s4_d1",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s4_d2",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s5",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Multi-GPU & Interconnect Architecture Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s5_d1",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t5_s5_d2",
      "label": "Multi-GPU & Interconnect Architecture Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6",
      "label": "Multi-GPU & Interconnect Architecture Topic 6",
      "description": "Detailed first-principles mechanics for Multi-GPU & Interconnect Architecture topic 6.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s1",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Multi-GPU & Interconnect Architecture Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s1_d1",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s1_d2",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s2",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Multi-GPU & Interconnect Architecture Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s2_d1",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s2_d2",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s3",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Multi-GPU & Interconnect Architecture Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s3_d1",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s3_d2",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s4",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Multi-GPU & Interconnect Architecture Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s4_d1",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s4_d2",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s5",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Multi-GPU & Interconnect Architecture Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s5_d1",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p6_t6_s5_d2",
      "label": "Multi-GPU & Interconnect Architecture Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Multi-GPU & Interconnect Architecture Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7",
      "label": "High-Level GPU Abstractions & Frameworks",
      "description": "CUDA C++ Thrust template library, Kokkos/RAJA, Triton compiler Python GPU kernels, and Numba GPU JIT.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1",
      "label": "Triton (OpenAI Python GPU Programming Framework)",
      "description": "Python-based programming language and compiler producing high-performance GPU code without C++ CUDA complexity.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s1",
      "label": "Block-Level Program Model Abstraction (@triton.jit)",
      "description": "Writing GPU kernels operating on 1D/2D block arrays rather than individual scalar threads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s1_d1",
      "label": "Automatic Thread & Warp Scheduling",
      "description": "Delegating thread indexing and warp layout generation entirely to Triton compiler.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s1_d2",
      "label": "Pythonic Syntax for High-Performance GPU Code",
      "description": "Authoring custom GPU kernels using clean Python syntax.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s2",
      "label": "Triton Block Pointer Pointer Arithmetic (tl.load / tl.store)",
      "description": "Loading and storing 2D block tensor tiles using Triton primitives.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s2_d1",
      "label": "Automatic Memory Coalescing & Masking",
      "description": "Generating optimal coalesced 128-bit memory instructions automatically.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s2_d2",
      "label": "Out-of-Bounds Boundary Predication (mask = offsets < size)",
      "description": "Handling boundary conditions seamlessly via block masks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s3",
      "label": "Triton Compiler Optimization Passes (Triton IR -> LLVM IR -> PTX)",
      "description": "Multi-stage compiler pipeline optimizing block tensor operations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s3_d1",
      "label": "Automatic Shared Memory Allocation & Tiling",
      "description": "Optimizing shared memory allocation and tile sizes automatically.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s3_d2",
      "label": "Automatic Tensor Core Instruction Target Injection",
      "description": "Emitting optimal mma.sync Tensor Core instructions for matrix multiplications.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s4",
      "label": "FlashAttention Implementation in Triton",
      "description": "Authoring state-of-the-art fused attention kernels in ~100 lines of Triton Python code.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s4_d1",
      "label": "Tiled Online Softmax Tracking",
      "description": "Tracking running max and sum exponentials inside SRAM shared memory tiles.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s4_d2",
      "label": "Outperforming Vendor cuDNN Benchmarks",
      "description": "Matching or exceeding hand-written C++ CUDA kernel performance.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s5",
      "label": "Triton Auto-Tuning Framework (@triton.autotune)",
      "description": "Benchmarking multiple tile size and warp configuration permutations automatically at runtime.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s5_d1",
      "label": "Dynamic Kernel Configuration Selection",
      "description": "Selecting optimal BLOCK_SIZE_M, BLOCK_SIZE_N, and num_warps parameters for target GPU hardware.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t1_s5_d2",
      "label": "Portable Peak Performance across GPU Generations",
      "description": "Achieving peak performance automatically on A100, H100, and RTX GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2",
      "label": "CUDA C++ Thrust Template Library",
      "description": "High-level C++ standard template library (STL) equivalent for CUDA parallel algorithms.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s1",
      "label": "thrust::device_vector & thrust::host_vector Containers",
      "description": "RAII C++ vector containers managing memory allocation and transfers between host and device.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s1_d1",
      "label": "Automatic Memory Allocation & De-allocation",
      "description": "Managing cudaMalloc and cudaFree lifecycle automatically via C++ destructors.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s1_d2",
      "label": "Implicit Memory Transfer Assignment (device_vec = host_vec)",
      "description": "Triggering background H2D/D2H memory copies via vector assignment operators.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s2",
      "label": "Thrust Parallel Algorithms (thrust::sort, thrust::reduce, thrust::transform)",
      "description": "High-level parallel algorithms executing optimal GPU kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s2_d1",
      "label": "thrust::sort_by_key (Key-Value Pair Sorting)",
      "description": "Sorting key and payload value vectors in single API calls.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s2_d2",
      "label": "thrust::inclusive_scan & exclusive_scan",
      "description": "Executing work-efficient prefix sums using optimized library kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s3",
      "label": "Custom Lambda Expressions & Functors (thrust::transform)",
      "description": "Passing custom C++ device functors to parallel Thrust algorithms.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s3_d1",
      "label": "__device__ Inline Execution Functors",
      "description": "Executing custom element-wise operations across GPU vectors.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s3_d2",
      "label": "C++14 Device Lambda Expression Support",
      "description": "Writing inline GPU device lambdas directly in algorithm call sites.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s4",
      "label": "Fancy Iterators (thrust::counting_iterator, thrust::transform_iterator)",
      "description": "Virtual iterators computing values on-the-fly without occupying physical memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s4_d1",
      "label": "thrust::counting_iterator (Sequence Generator)",
      "description": "Generating integer sequences (0, 1, 2, ...) without memory storage.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s4_d2",
      "label": "Zero-Memory Overhead Algorithm Inputs",
      "description": "Feeding generated sequences into algorithms without allocating DRAM memory.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s5",
      "label": "Thrust Execution Policies (thrust::device, thrust::seq)",
      "description": "Controlling target execution backend for Thrust algorithms.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s5_d1",
      "label": "thrust::cuda::par.on(stream) Stream Binding",
      "description": "Launching Thrust algorithm kernels directly inside specific CUDA streams.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t2_s5_d2",
      "label": "Multi-Backend Target Portability (CUDA, OpenMP, TBB)",
      "description": "Compiling identical Thrust code to run on GPUs or multi-core CPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3",
      "label": "Performance Portable Frameworks (Kokkos / RAJA)",
      "description": "C++ performance portability layers allowing single-source code to execute on NVIDIA, AMD, and Intel GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s1",
      "label": "Kokkos Execution & Memory Spaces",
      "description": "Abstractions decoupling parallel execution targets from physical memory locations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s1_d1",
      "label": "Execution Spaces (Kokkos::Cuda, Kokkos::HIP, Kokkos::OpenMP)",
      "description": "Selecting hardware execution backends at compile time.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s1_d2",
      "label": "Memory Spaces (Kokkos::CudaSpace, Kokkos::HostSpace)",
      "description": "Managing data allocation across host RAM and vendor GPU VRAM.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s2",
      "label": "RAJA Parallel Loop Abstractions (RAJA::forall)",
      "description": "Encapsulating parallel loops using customizable execution policies.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s2_d1",
      "label": "RAJA::forall<cuda_exec> Execution Policy",
      "description": "Transforming C++ loop bodies into parallel CUDA kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s2_d2",
      "label": "Zero-Overhead C++ Template Metaprogramming",
      "description": "Inlining loop bodies to match hand-written CUDA kernel performance.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s3",
      "label": "Cross-Vendor GPU Target Support (NVIDIA CUDA, AMD HIP, Intel OneAPI)",
      "description": "Targeting heterogeneous supercomputer clusters with single-source C++ codebases.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s3_d1",
      "label": "AMD HIP Source Translation Layer",
      "description": "Compiling HIP code to execute on AMD Instinct GPUs or NVIDIA GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s3_d2",
      "label": "Intel SYCL / OneAPI DPC++ Integration",
      "description": "Targeting Intel Data Center GPU Max series hardware.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s4",
      "label": "Multi-Dimensional Layout Views (Kokkos::View)",
      "description": "Multi-dimensional array abstractions adapting data layouts to target hardware.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s4_d1",
      "label": "LayoutRight (Row-Major for CPUs) vs LayoutLeft (Column-Major for GPUs)",
      "description": "Swapping array memory stride layouts automatically based on target architecture.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s4_d2",
      "label": "Eliminating Un-Coalesced Memory Access",
      "description": "Guaranteeing coalesced GPU memory reads without changing application indexing code.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s5",
      "label": "National Lab Supercomputing Deployment (DOE Exascale Systems)",
      "description": "Powering production simulation codes on Frontier, Aurora, and El Capitan supercomputers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s5_d1",
      "label": "Petaflop Physics & Climate Simulations",
      "description": "Running massive scientific workloads on multi-vendor supercomputers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t3_s5_d2",
      "label": "Long-Term Code Base Sustainability",
      "description": "Protecting scientific software investments from vendor hardware lock-in.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4",
      "label": "Numba GPU JIT & Python Array Frameworks (CuPy)",
      "description": "Compiling Python functions to native GPU machine code dynamically at runtime.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s1",
      "label": "Numba @cuda.jit Python Decorator Compilation",
      "description": "Compiling Python functions to CUDA PTX assembly using LLVM.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s1_d1",
      "label": "Just-In-Time Python Compilation to PTX",
      "description": "Translating Python AST nodes into LLVM IR and emitting native GPU code.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s1_d2",
      "label": "Direct Access to CUDA Thread Indexing (cuda.grid(1))",
      "description": "Authoring explicit CUDA thread indexing in pure Python syntax.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s2",
      "label": "CuPy NumPy-Drop-in GPU Array Library",
      "description": "GPU-accelerated array library replicating NumPy API using CUDA.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s2_d1",
      "label": "NumPy API Compatibility (import cupy as cp)",
      "description": "Replacing numpy import calls to accelerate matrix math on GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s2_d2",
      "label": "Sub-Millisecond CUDA Kernel Dispatch",
      "description": "Executing pre-compiled C++ CUDA kernels behind Python array operations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s3",
      "label": "CuPy Elementwise & Reduction Kernel Generators",
      "description": "Generating custom C++ CUDA kernels dynamically from Python mathematical expressions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s3_d1",
      "label": "cp.ElementwiseKernel Custom Operations",
      "description": "Compiling custom C++ element-wise kernels on-the-fly in Python.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s3_d2",
      "label": "Eliminating Temporary Array Memory Allocation",
      "description": "Fusing multiple NumPy array operations into single GPU kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s4",
      "label": "DLPack Interoperability Standard (Zero-Copy Data Exchange)",
      "description": "Exchanging GPU tensors between PyTorch, CuPy, TensorFlow, and JAX without memory copying.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s4_d1",
      "label": "DLPack C-Structure Memory Pointer Sharing",
      "description": "Passing raw C-struct tensor pointers across deep learning frameworks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s4_d2",
      "label": "Zero Memory Copy Overhead",
      "description": "Sharing GPU VRAM buffers across independent Python libraries instantly.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s5",
      "label": "PyTorch Custom C++ / CUDA Extension Binding (pybind11)",
      "description": "Wrapping native C++/CUDA kernels for seamless integration into PyTorch models.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s5_d1",
      "label": "pybind11 C++ Binding Boilerplate Generation",
      "description": "Exposing CUDA C++ function signatures to Python APIs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t4_s5_d2",
      "label": "torch.utils.cpp_extension JIT Compilation",
      "description": "Compiling native CUDA extensions automatically on module import.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5",
      "description": "Detailed first-principles mechanics for High-Level GPU Abstractions & Frameworks topic 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s1",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for High-Level GPU Abstractions & Frameworks Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s1_d1",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s1_d2",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s2",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for High-Level GPU Abstractions & Frameworks Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s2_d1",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s2_d2",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s3",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for High-Level GPU Abstractions & Frameworks Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s3_d1",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s3_d2",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s4",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for High-Level GPU Abstractions & Frameworks Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s4_d1",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s4_d2",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s5",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for High-Level GPU Abstractions & Frameworks Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s5_d1",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t5_s5_d2",
      "label": "High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6",
      "description": "Detailed first-principles mechanics for High-Level GPU Abstractions & Frameworks topic 6.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s1",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for High-Level GPU Abstractions & Frameworks Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s1_d1",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s1_d2",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s2",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for High-Level GPU Abstractions & Frameworks Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s2_d1",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s2_d2",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s3",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for High-Level GPU Abstractions & Frameworks Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s3_d1",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s3_d2",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s4",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for High-Level GPU Abstractions & Frameworks Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s4_d1",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s4_d2",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s5",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for High-Level GPU Abstractions & Frameworks Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s5_d1",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p7_t6_s5_d2",
      "label": "High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Level GPU Abstractions & Frameworks Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8",
      "label": "Performance Profiling & Hardware Counters",
      "description": "NVIDIA Nsight Systems / Nsight Compute profiling, PC sampling, Roofline performance models, and Warp stall diagnosis.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1",
      "label": "NVIDIA Nsight Systems System-Wide Profiling",
      "description": "System-wide performance analysis tool tracing CPU, GPU, OS, and API event interactions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s1",
      "label": "Timeline View Tracing (CPU, GPU, NVTX, CUDA APIs)",
      "description": "Visualizing temporal alignment of CPU host code, CUDA API calls, and GPU kernel execution.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s1_d1",
      "label": "Identifying CPU-Bound vs GPU-Bound Bottlenecks",
      "description": "Spotting gaps where GPU sits idle waiting for CPU host thread dispatch.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s1_d2",
      "label": "Visualizing CUDA Stream Concurrency",
      "description": "Auditing overlap between memory transfers and parallel kernel execution.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s2",
      "label": "NVTX (NVIDIA Tools Extension) Code Annotation Markers",
      "description": "Annotating application C++/Python source code with custom named color markers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s2_d1",
      "label": "nvtxRangePushA / nvtxRangePop Scoped Markers",
      "description": "Wrapping application code blocks to highlight custom phases on Nsight timelines.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s2_d2",
      "label": "PyTorch torch.cuda.nvtx.range_push Integration",
      "description": "Annotating neural network forward and backward layer passes.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s3",
      "label": "PCIe & NVLink Memory Transfer Bandwidth Tracing",
      "description": "Measuring actual Host-to-Device and Device-to-Device memory throughput.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s3_d1",
      "label": "Identifying Small Un-Pipelined H2D Transfers",
      "description": "Locating high-frequency small memory copies causing CPU driver stalls.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s3_d2",
      "label": "Auditing NVLink P2P Throughput Saturation",
      "description": "Measuring inter-GPU memory transfer rates during distributed training.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s4",
      "label": "OS Thread Scheduling & System Call Interrupt Auditing",
      "description": "Tracing OS thread context switches and blocking system calls.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s4_d1",
      "label": "Identifying CPU Core Migration Stalls",
      "description": "Detecting CPU thread migrations across NUMA nodes slowing driver submissions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s4_d2",
      "label": "Auditing Mutex Lock Contention",
      "description": "Locating multithreaded CPU lock contention blocking CUDA stream launches.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s5",
      "label": "Command Line Profiling (nsys profile --stats=true)",
      "description": "Generating automated CLI performance summaries on remote headless server clusters.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s5_d1",
      "label": "Automated CSV & SQLite Report Generation",
      "description": "Exporting raw profiling database files for automated Python analysis scripts.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t1_s5_d2",
      "label": "Top-10 Kernel Execution Summary Tables",
      "description": "Listing top time-consuming GPU kernels sorted by cumulative duration.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2",
      "label": "NVIDIA Nsight Compute Kernel-Level Profiling",
      "description": "Interactive CUDA kernel profiler analyzing low-level hardware counter performance.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s1",
      "label": "Hardware Counter Collection (ncu --set full)",
      "description": "Sampling hardware performance counters on physical Streaming Multiprocessors.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s1_d1",
      "label": "Replay Execution Re-runs",
      "description": "Re-executing kernels across multiple passes to collect detailed hardware metrics.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s1_d2",
      "label": "Sub-Instruction Level Performance Metrics",
      "description": "Measuring exact clock cycles and memory transactions per assembly instruction.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s2",
      "label": "Speed-of-Light (SOL) Compute & Memory Throughput Analysis",
      "description": "Comparing measured kernel throughput against maximum theoretical hardware limits.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s2_d1",
      "label": "SOL Compute Percentage (Percentage of Peak FLOPS)",
      "description": "Measuring percentage of maximum theoretical compute capacity utilized.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s2_d2",
      "label": "SOL Memory Percentage (Percentage of Peak HBM B/W)",
      "description": "Measuring percentage of maximum theoretical memory bandwidth utilized.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s3",
      "label": "Warp Scheduler State & Stall Reason Analysis",
      "description": "Analyzing breakdown of warp scheduler states (Eligible, Stalled, Issued).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s3_d1",
      "label": "Identifying Dominant Stall Reason (Stall Long Scoreboard vs MIO Throttle)",
      "description": "Pinpointing exact hardware causes preventing warp instruction issue.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s3_d2",
      "label": "Actionable Optimization Guidance Rules",
      "description": "Receiving automated Nsight suggestions for resolving specific warp stalls.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s4",
      "label": "Memory Workload Analysis & Cache Hit Ratios",
      "description": "Tracing memory request flow through L1, L2, and global HBM DRAM.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s4_d1",
      "label": "L1/L2 Cache Hit Rate Percentages",
      "description": "Measuring cache hit efficiency for global memory accesses.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s4_d2",
      "label": "Detecting Shared Memory Bank Conflicts",
      "description": "Counting exact multi-way bank conflicts occurring during kernel execution.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s5",
      "label": "Source / SASS Interleaved Instruction Profiling",
      "description": "Correlating hardware counters directly to lines of CUDA C++ source code.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s5_d1",
      "label": "Source Line Clock Cycle Heatmaps",
      "description": "Identifying exact lines of C++ source code consuming the most execution cycles.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t2_s5_d2",
      "label": "Register Live Range & Divergence Inspection",
      "description": "Viewing assembly-level thread mask divergence and register pressure bottlenecks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3",
      "label": "Program Counter (PC) Sampling & Micro-Architectural Bottlenecks",
      "description": "Statistical PC sampling inspecting instruction execution distribution across warps.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s1",
      "label": "Statistical PC Sampling Mechanics",
      "description": "Periodically sampling program counters of active warps across SMs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s1_d1",
      "label": "Zero Overhead Statistical Sampling",
      "description": "Collecting execution distribution metrics with minimal kernel speed penalty.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s1_d2",
      "label": "Hotspot Assembly Instruction Discovery",
      "description": "Locating exact SASS instructions where warps spend the most time.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s2",
      "label": "Stall Long Scoreboard (Global Memory Latency Wait)",
      "description": "Warps waiting for data returning from high-latency global HBM VRAM.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s2_d1",
      "label": "Identifying Memory-Bound Hotspots",
      "description": "Pinpointing instructions blocked on global memory reads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s2_d2",
      "label": "Remedy: Increasing Occupancy or Prefetching Data",
      "description": "Resolving long scoreboard stalls via async prefetching or increasing active warps.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s3",
      "label": "Stall Execution Dependency (RAW Register Hazard)",
      "description": "Warps waiting for preceding instructions to complete writing target registers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s3_d1",
      "label": "Read-After-Write (RAW) Pipeline Lags",
      "description": "Detecting instruction dependency chains preventing execution.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s3_d2",
      "label": "Remedy: Unrolling Loops to Increase ILP",
      "description": "Interleaving independent instructions to hide execution latency.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s4",
      "label": "Stall Barrier (__syncthreads() Wait)",
      "description": "Warps sitting idle at thread block barrier instructions waiting for peer threads.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s4_d1",
      "label": "Thread Work Imbalance Detection",
      "description": "Identifying load imbalances where some threads finish work much earlier than peers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s4_d2",
      "label": "Remedy: Balancing Work Distribution across Block Threads",
      "description": "Equalizing work loop iterations across threads to reduce barrier waiting.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s5",
      "label": "Stall MIO Throttle (Memory Input/Output Pipeline Saturation)",
      "description": "Warps stalled because special memory instruction queues are completely full.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s5_d1",
      "label": "Shared Memory / Constant Cache Pipe Saturation",
      "description": "Overloading internal memory pipelines with high-frequency instructions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t3_s5_d2",
      "label": "Remedy: Vectorizing Memory Instructions",
      "description": "Consolidating multiple small memory instructions into 128-bit float4 vector transfers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4",
      "label": "Automated CUDA Benchmarking & Verification Tooling",
      "description": "Building automated test and benchmarking harnesses to verify GPU kernel correctness and speed.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s1",
      "label": "Warmup Runs & Cache Flushing Protocols",
      "description": "Ensuring accurate and reproducible GPU timing measurements.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s1_d1",
      "label": "Mandatory Warmup Kernel Executions",
      "description": "Executing 5-10 warmup kernel launches to establish stable GPU clock frequencies.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s1_d2",
      "label": "L2 Cache Flushing Between Iterations",
      "description": "Clearing L2 cache contents before timing runs to prevent artificial cache hit speedups.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s2",
      "label": "High-Precision GPU Timing Harnesses",
      "description": "Measuring kernel execution times accurately using CUDA Events.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s2_d1",
      "label": "Multi-Iteration Average & Percentile Calculation",
      "description": "Recording P50, P95, and P99 latency percentiles across 100+ timing iterations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s2_d2",
      "label": "Computing Effective Bandwidth (GB/s = (Bytes_Read + Bytes_Written) / Time)",
      "description": "Calculating achieved memory throughput metrics for comparison against hardware peaks.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s3",
      "label": "Numerical Correctness & Tolerance Auditing (CPU vs GPU)",
      "description": "Verifying GPU floating point results match double-precision CPU reference calculations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s3_d1",
      "label": "Absolute & Relative Tolerance Checks (atol / rtol)",
      "description": "Verifying np.allclose(gpu_result, cpu_ref, atol=1e-5, rtol=1e-3).",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s3_d2",
      "label": "Floating Point Non-Associativity Audits",
      "description": "Managing minor numerical differences caused by parallel reduction order variations.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s4",
      "label": "CUDA Sanitizer Suite (compute-sanitizer)",
      "description": "Command-line tool suite detecting memory errors, race conditions, and un-initialized memory on GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s4_d1",
      "label": "memcheck (Out-of-Bounds & Mis-Alignment Error Detector)",
      "description": "Catching invalid memory reads/writes instantly in running CUDA kernels.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s4_d2",
      "label": "racecheck (Shared Memory Race Condition Detector)",
      "description": "Locating shared memory read-after-write hazards missing __syncthreads() barriers.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s5",
      "label": "Continuous Integration GPU Benchmark Regression Pipelines",
      "description": "Running automated performance benchmarks on CI server nodes equipped with GPUs.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s5_d1",
      "label": "Automated Performance Regression Alerts",
      "description": "Failing PR builds if kernel execution times degrade by > 5%.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t4_s5_d2",
      "label": "Tracking Hardware Efficiency Trends Over Time",
      "description": "Maintaining historical latency and FLOPS charts across software release versions.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5",
      "label": "Performance Profiling & Hardware Counters Topic 5",
      "description": "Detailed first-principles mechanics for Performance Profiling & Hardware Counters topic 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s1",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Performance Profiling & Hardware Counters Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s1_d1",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s1_d2",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s2",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Performance Profiling & Hardware Counters Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s2_d1",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s2_d2",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s3",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Performance Profiling & Hardware Counters Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s3_d1",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s3_d2",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s4",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Performance Profiling & Hardware Counters Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s4_d1",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s4_d2",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s5",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Performance Profiling & Hardware Counters Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s5_d1",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t5_s5_d2",
      "label": "Performance Profiling & Hardware Counters Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6",
      "label": "Performance Profiling & Hardware Counters Topic 6",
      "description": "Detailed first-principles mechanics for Performance Profiling & Hardware Counters topic 6.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s1",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Performance Profiling & Hardware Counters Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s1_d1",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s1_d2",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s2",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Performance Profiling & Hardware Counters Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s2_d1",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s2_d2",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s3",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Performance Profiling & Hardware Counters Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s3_d1",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s3_d2",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s4",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Performance Profiling & Hardware Counters Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s4_d1",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s4_d2",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s5",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Performance Profiling & Hardware Counters Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s5_d1",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "gpu_root_p8_t6_s5_d2",
      "label": "Performance Profiling & Hardware Counters Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Performance Profiling & Hardware Counters Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "gpu_root",
      "target": "gpu_root_p1"
    },
    {
      "source": "gpu_root_p1",
      "target": "gpu_root_p1_t1"
    },
    {
      "source": "gpu_root_p1_t1",
      "target": "gpu_root_p1_t1_s1"
    },
    {
      "source": "gpu_root_p1_t1_s1",
      "target": "gpu_root_p1_t1_s1_d1"
    },
    {
      "source": "gpu_root_p1_t1_s1",
      "target": "gpu_root_p1_t1_s1_d2"
    },
    {
      "source": "gpu_root_p1_t1",
      "target": "gpu_root_p1_t1_s2"
    },
    {
      "source": "gpu_root_p1_t1_s2",
      "target": "gpu_root_p1_t1_s2_d1"
    },
    {
      "source": "gpu_root_p1_t1_s2",
      "target": "gpu_root_p1_t1_s2_d2"
    },
    {
      "source": "gpu_root_p1_t1",
      "target": "gpu_root_p1_t1_s3"
    },
    {
      "source": "gpu_root_p1_t1_s3",
      "target": "gpu_root_p1_t1_s3_d1"
    },
    {
      "source": "gpu_root_p1_t1_s3",
      "target": "gpu_root_p1_t1_s3_d2"
    },
    {
      "source": "gpu_root_p1_t1",
      "target": "gpu_root_p1_t1_s4"
    },
    {
      "source": "gpu_root_p1_t1_s4",
      "target": "gpu_root_p1_t1_s4_d1"
    },
    {
      "source": "gpu_root_p1_t1_s4",
      "target": "gpu_root_p1_t1_s4_d2"
    },
    {
      "source": "gpu_root_p1_t1",
      "target": "gpu_root_p1_t1_s5"
    },
    {
      "source": "gpu_root_p1_t1_s5",
      "target": "gpu_root_p1_t1_s5_d1"
    },
    {
      "source": "gpu_root_p1_t1_s5",
      "target": "gpu_root_p1_t1_s5_d2"
    },
    {
      "source": "gpu_root_p1",
      "target": "gpu_root_p1_t2"
    },
    {
      "source": "gpu_root_p1_t2",
      "target": "gpu_root_p1_t2_s1"
    },
    {
      "source": "gpu_root_p1_t2_s1",
      "target": "gpu_root_p1_t2_s1_d1"
    },
    {
      "source": "gpu_root_p1_t2_s1",
      "target": "gpu_root_p1_t2_s1_d2"
    },
    {
      "source": "gpu_root_p1_t2",
      "target": "gpu_root_p1_t2_s2"
    },
    {
      "source": "gpu_root_p1_t2_s2",
      "target": "gpu_root_p1_t2_s2_d1"
    },
    {
      "source": "gpu_root_p1_t2_s2",
      "target": "gpu_root_p1_t2_s2_d2"
    },
    {
      "source": "gpu_root_p1_t2",
      "target": "gpu_root_p1_t2_s3"
    },
    {
      "source": "gpu_root_p1_t2_s3",
      "target": "gpu_root_p1_t2_s3_d1"
    },
    {
      "source": "gpu_root_p1_t2_s3",
      "target": "gpu_root_p1_t2_s3_d2"
    },
    {
      "source": "gpu_root_p1_t2",
      "target": "gpu_root_p1_t2_s4"
    },
    {
      "source": "gpu_root_p1_t2_s4",
      "target": "gpu_root_p1_t2_s4_d1"
    },
    {
      "source": "gpu_root_p1_t2_s4",
      "target": "gpu_root_p1_t2_s4_d2"
    },
    {
      "source": "gpu_root_p1_t2",
      "target": "gpu_root_p1_t2_s5"
    },
    {
      "source": "gpu_root_p1_t2_s5",
      "target": "gpu_root_p1_t2_s5_d1"
    },
    {
      "source": "gpu_root_p1_t2_s5",
      "target": "gpu_root_p1_t2_s5_d2"
    },
    {
      "source": "gpu_root_p1",
      "target": "gpu_root_p1_t3"
    },
    {
      "source": "gpu_root_p1_t3",
      "target": "gpu_root_p1_t3_s1"
    },
    {
      "source": "gpu_root_p1_t3_s1",
      "target": "gpu_root_p1_t3_s1_d1"
    },
    {
      "source": "gpu_root_p1_t3_s1",
      "target": "gpu_root_p1_t3_s1_d2"
    },
    {
      "source": "gpu_root_p1_t3",
      "target": "gpu_root_p1_t3_s2"
    },
    {
      "source": "gpu_root_p1_t3_s2",
      "target": "gpu_root_p1_t3_s2_d1"
    },
    {
      "source": "gpu_root_p1_t3_s2",
      "target": "gpu_root_p1_t3_s2_d2"
    },
    {
      "source": "gpu_root_p1_t3",
      "target": "gpu_root_p1_t3_s3"
    },
    {
      "source": "gpu_root_p1_t3_s3",
      "target": "gpu_root_p1_t3_s3_d1"
    },
    {
      "source": "gpu_root_p1_t3_s3",
      "target": "gpu_root_p1_t3_s3_d2"
    },
    {
      "source": "gpu_root_p1_t3",
      "target": "gpu_root_p1_t3_s4"
    },
    {
      "source": "gpu_root_p1_t3_s4",
      "target": "gpu_root_p1_t3_s4_d1"
    },
    {
      "source": "gpu_root_p1_t3_s4",
      "target": "gpu_root_p1_t3_s4_d2"
    },
    {
      "source": "gpu_root_p1_t3",
      "target": "gpu_root_p1_t3_s5"
    },
    {
      "source": "gpu_root_p1_t3_s5",
      "target": "gpu_root_p1_t3_s5_d1"
    },
    {
      "source": "gpu_root_p1_t3_s5",
      "target": "gpu_root_p1_t3_s5_d2"
    },
    {
      "source": "gpu_root_p1",
      "target": "gpu_root_p1_t4"
    },
    {
      "source": "gpu_root_p1_t4",
      "target": "gpu_root_p1_t4_s1"
    },
    {
      "source": "gpu_root_p1_t4_s1",
      "target": "gpu_root_p1_t4_s1_d1"
    },
    {
      "source": "gpu_root_p1_t4_s1",
      "target": "gpu_root_p1_t4_s1_d2"
    },
    {
      "source": "gpu_root_p1_t4",
      "target": "gpu_root_p1_t4_s2"
    },
    {
      "source": "gpu_root_p1_t4_s2",
      "target": "gpu_root_p1_t4_s2_d1"
    },
    {
      "source": "gpu_root_p1_t4_s2",
      "target": "gpu_root_p1_t4_s2_d2"
    },
    {
      "source": "gpu_root_p1_t4",
      "target": "gpu_root_p1_t4_s3"
    },
    {
      "source": "gpu_root_p1_t4_s3",
      "target": "gpu_root_p1_t4_s3_d1"
    },
    {
      "source": "gpu_root_p1_t4_s3",
      "target": "gpu_root_p1_t4_s3_d2"
    },
    {
      "source": "gpu_root_p1_t4",
      "target": "gpu_root_p1_t4_s4"
    },
    {
      "source": "gpu_root_p1_t4_s4",
      "target": "gpu_root_p1_t4_s4_d1"
    },
    {
      "source": "gpu_root_p1_t4_s4",
      "target": "gpu_root_p1_t4_s4_d2"
    },
    {
      "source": "gpu_root_p1_t4",
      "target": "gpu_root_p1_t4_s5"
    },
    {
      "source": "gpu_root_p1_t4_s5",
      "target": "gpu_root_p1_t4_s5_d1"
    },
    {
      "source": "gpu_root_p1_t4_s5",
      "target": "gpu_root_p1_t4_s5_d2"
    },
    {
      "source": "gpu_root_p1",
      "target": "gpu_root_p1_t5"
    },
    {
      "source": "gpu_root_p1_t5",
      "target": "gpu_root_p1_t5_s1"
    },
    {
      "source": "gpu_root_p1_t5_s1",
      "target": "gpu_root_p1_t5_s1_d1"
    },
    {
      "source": "gpu_root_p1_t5_s1",
      "target": "gpu_root_p1_t5_s1_d2"
    },
    {
      "source": "gpu_root_p1_t5",
      "target": "gpu_root_p1_t5_s2"
    },
    {
      "source": "gpu_root_p1_t5_s2",
      "target": "gpu_root_p1_t5_s2_d1"
    },
    {
      "source": "gpu_root_p1_t5_s2",
      "target": "gpu_root_p1_t5_s2_d2"
    },
    {
      "source": "gpu_root_p1_t5",
      "target": "gpu_root_p1_t5_s3"
    },
    {
      "source": "gpu_root_p1_t5_s3",
      "target": "gpu_root_p1_t5_s3_d1"
    },
    {
      "source": "gpu_root_p1_t5_s3",
      "target": "gpu_root_p1_t5_s3_d2"
    },
    {
      "source": "gpu_root_p1_t5",
      "target": "gpu_root_p1_t5_s4"
    },
    {
      "source": "gpu_root_p1_t5_s4",
      "target": "gpu_root_p1_t5_s4_d1"
    },
    {
      "source": "gpu_root_p1_t5_s4",
      "target": "gpu_root_p1_t5_s4_d2"
    },
    {
      "source": "gpu_root_p1_t5",
      "target": "gpu_root_p1_t5_s5"
    },
    {
      "source": "gpu_root_p1_t5_s5",
      "target": "gpu_root_p1_t5_s5_d1"
    },
    {
      "source": "gpu_root_p1_t5_s5",
      "target": "gpu_root_p1_t5_s5_d2"
    },
    {
      "source": "gpu_root_p1",
      "target": "gpu_root_p1_t6"
    },
    {
      "source": "gpu_root_p1_t6",
      "target": "gpu_root_p1_t6_s1"
    },
    {
      "source": "gpu_root_p1_t6_s1",
      "target": "gpu_root_p1_t6_s1_d1"
    },
    {
      "source": "gpu_root_p1_t6_s1",
      "target": "gpu_root_p1_t6_s1_d2"
    },
    {
      "source": "gpu_root_p1_t6",
      "target": "gpu_root_p1_t6_s2"
    },
    {
      "source": "gpu_root_p1_t6_s2",
      "target": "gpu_root_p1_t6_s2_d1"
    },
    {
      "source": "gpu_root_p1_t6_s2",
      "target": "gpu_root_p1_t6_s2_d2"
    },
    {
      "source": "gpu_root_p1_t6",
      "target": "gpu_root_p1_t6_s3"
    },
    {
      "source": "gpu_root_p1_t6_s3",
      "target": "gpu_root_p1_t6_s3_d1"
    },
    {
      "source": "gpu_root_p1_t6_s3",
      "target": "gpu_root_p1_t6_s3_d2"
    },
    {
      "source": "gpu_root_p1_t6",
      "target": "gpu_root_p1_t6_s4"
    },
    {
      "source": "gpu_root_p1_t6_s4",
      "target": "gpu_root_p1_t6_s4_d1"
    },
    {
      "source": "gpu_root_p1_t6_s4",
      "target": "gpu_root_p1_t6_s4_d2"
    },
    {
      "source": "gpu_root_p1_t6",
      "target": "gpu_root_p1_t6_s5"
    },
    {
      "source": "gpu_root_p1_t6_s5",
      "target": "gpu_root_p1_t6_s5_d1"
    },
    {
      "source": "gpu_root_p1_t6_s5",
      "target": "gpu_root_p1_t6_s5_d2"
    },
    {
      "source": "gpu_root",
      "target": "gpu_root_p2"
    },
    {
      "source": "gpu_root_p2",
      "target": "gpu_root_p2_t1"
    },
    {
      "source": "gpu_root_p2_t1",
      "target": "gpu_root_p2_t1_s1"
    },
    {
      "source": "gpu_root_p2_t1_s1",
      "target": "gpu_root_p2_t1_s1_d1"
    },
    {
      "source": "gpu_root_p2_t1_s1",
      "target": "gpu_root_p2_t1_s1_d2"
    },
    {
      "source": "gpu_root_p2_t1",
      "target": "gpu_root_p2_t1_s2"
    },
    {
      "source": "gpu_root_p2_t1_s2",
      "target": "gpu_root_p2_t1_s2_d1"
    },
    {
      "source": "gpu_root_p2_t1_s2",
      "target": "gpu_root_p2_t1_s2_d2"
    },
    {
      "source": "gpu_root_p2_t1",
      "target": "gpu_root_p2_t1_s3"
    },
    {
      "source": "gpu_root_p2_t1_s3",
      "target": "gpu_root_p2_t1_s3_d1"
    },
    {
      "source": "gpu_root_p2_t1_s3",
      "target": "gpu_root_p2_t1_s3_d2"
    },
    {
      "source": "gpu_root_p2_t1",
      "target": "gpu_root_p2_t1_s4"
    },
    {
      "source": "gpu_root_p2_t1_s4",
      "target": "gpu_root_p2_t1_s4_d1"
    },
    {
      "source": "gpu_root_p2_t1_s4",
      "target": "gpu_root_p2_t1_s4_d2"
    },
    {
      "source": "gpu_root_p2_t1",
      "target": "gpu_root_p2_t1_s5"
    },
    {
      "source": "gpu_root_p2_t1_s5",
      "target": "gpu_root_p2_t1_s5_d1"
    },
    {
      "source": "gpu_root_p2_t1_s5",
      "target": "gpu_root_p2_t1_s5_d2"
    },
    {
      "source": "gpu_root_p2",
      "target": "gpu_root_p2_t2"
    },
    {
      "source": "gpu_root_p2_t2",
      "target": "gpu_root_p2_t2_s1"
    },
    {
      "source": "gpu_root_p2_t2_s1",
      "target": "gpu_root_p2_t2_s1_d1"
    },
    {
      "source": "gpu_root_p2_t2_s1",
      "target": "gpu_root_p2_t2_s1_d2"
    },
    {
      "source": "gpu_root_p2_t2",
      "target": "gpu_root_p2_t2_s2"
    },
    {
      "source": "gpu_root_p2_t2_s2",
      "target": "gpu_root_p2_t2_s2_d1"
    },
    {
      "source": "gpu_root_p2_t2_s2",
      "target": "gpu_root_p2_t2_s2_d2"
    },
    {
      "source": "gpu_root_p2_t2",
      "target": "gpu_root_p2_t2_s3"
    },
    {
      "source": "gpu_root_p2_t2_s3",
      "target": "gpu_root_p2_t2_s3_d1"
    },
    {
      "source": "gpu_root_p2_t2_s3",
      "target": "gpu_root_p2_t2_s3_d2"
    },
    {
      "source": "gpu_root_p2_t2",
      "target": "gpu_root_p2_t2_s4"
    },
    {
      "source": "gpu_root_p2_t2_s4",
      "target": "gpu_root_p2_t2_s4_d1"
    },
    {
      "source": "gpu_root_p2_t2_s4",
      "target": "gpu_root_p2_t2_s4_d2"
    },
    {
      "source": "gpu_root_p2_t2",
      "target": "gpu_root_p2_t2_s5"
    },
    {
      "source": "gpu_root_p2_t2_s5",
      "target": "gpu_root_p2_t2_s5_d1"
    },
    {
      "source": "gpu_root_p2_t2_s5",
      "target": "gpu_root_p2_t2_s5_d2"
    },
    {
      "source": "gpu_root_p2",
      "target": "gpu_root_p2_t3"
    },
    {
      "source": "gpu_root_p2_t3",
      "target": "gpu_root_p2_t3_s1"
    },
    {
      "source": "gpu_root_p2_t3_s1",
      "target": "gpu_root_p2_t3_s1_d1"
    },
    {
      "source": "gpu_root_p2_t3_s1",
      "target": "gpu_root_p2_t3_s1_d2"
    },
    {
      "source": "gpu_root_p2_t3",
      "target": "gpu_root_p2_t3_s2"
    },
    {
      "source": "gpu_root_p2_t3_s2",
      "target": "gpu_root_p2_t3_s2_d1"
    },
    {
      "source": "gpu_root_p2_t3_s2",
      "target": "gpu_root_p2_t3_s2_d2"
    },
    {
      "source": "gpu_root_p2_t3",
      "target": "gpu_root_p2_t3_s3"
    },
    {
      "source": "gpu_root_p2_t3_s3",
      "target": "gpu_root_p2_t3_s3_d1"
    },
    {
      "source": "gpu_root_p2_t3_s3",
      "target": "gpu_root_p2_t3_s3_d2"
    },
    {
      "source": "gpu_root_p2_t3",
      "target": "gpu_root_p2_t3_s4"
    },
    {
      "source": "gpu_root_p2_t3_s4",
      "target": "gpu_root_p2_t3_s4_d1"
    },
    {
      "source": "gpu_root_p2_t3_s4",
      "target": "gpu_root_p2_t3_s4_d2"
    },
    {
      "source": "gpu_root_p2_t3",
      "target": "gpu_root_p2_t3_s5"
    },
    {
      "source": "gpu_root_p2_t3_s5",
      "target": "gpu_root_p2_t3_s5_d1"
    },
    {
      "source": "gpu_root_p2_t3_s5",
      "target": "gpu_root_p2_t3_s5_d2"
    },
    {
      "source": "gpu_root_p2",
      "target": "gpu_root_p2_t4"
    },
    {
      "source": "gpu_root_p2_t4",
      "target": "gpu_root_p2_t4_s1"
    },
    {
      "source": "gpu_root_p2_t4_s1",
      "target": "gpu_root_p2_t4_s1_d1"
    },
    {
      "source": "gpu_root_p2_t4_s1",
      "target": "gpu_root_p2_t4_s1_d2"
    },
    {
      "source": "gpu_root_p2_t4",
      "target": "gpu_root_p2_t4_s2"
    },
    {
      "source": "gpu_root_p2_t4_s2",
      "target": "gpu_root_p2_t4_s2_d1"
    },
    {
      "source": "gpu_root_p2_t4_s2",
      "target": "gpu_root_p2_t4_s2_d2"
    },
    {
      "source": "gpu_root_p2_t4",
      "target": "gpu_root_p2_t4_s3"
    },
    {
      "source": "gpu_root_p2_t4_s3",
      "target": "gpu_root_p2_t4_s3_d1"
    },
    {
      "source": "gpu_root_p2_t4_s3",
      "target": "gpu_root_p2_t4_s3_d2"
    },
    {
      "source": "gpu_root_p2_t4",
      "target": "gpu_root_p2_t4_s4"
    },
    {
      "source": "gpu_root_p2_t4_s4",
      "target": "gpu_root_p2_t4_s4_d1"
    },
    {
      "source": "gpu_root_p2_t4_s4",
      "target": "gpu_root_p2_t4_s4_d2"
    },
    {
      "source": "gpu_root_p2_t4",
      "target": "gpu_root_p2_t4_s5"
    },
    {
      "source": "gpu_root_p2_t4_s5",
      "target": "gpu_root_p2_t4_s5_d1"
    },
    {
      "source": "gpu_root_p2_t4_s5",
      "target": "gpu_root_p2_t4_s5_d2"
    },
    {
      "source": "gpu_root_p2",
      "target": "gpu_root_p2_t5"
    },
    {
      "source": "gpu_root_p2_t5",
      "target": "gpu_root_p2_t5_s1"
    },
    {
      "source": "gpu_root_p2_t5_s1",
      "target": "gpu_root_p2_t5_s1_d1"
    },
    {
      "source": "gpu_root_p2_t5_s1",
      "target": "gpu_root_p2_t5_s1_d2"
    },
    {
      "source": "gpu_root_p2_t5",
      "target": "gpu_root_p2_t5_s2"
    },
    {
      "source": "gpu_root_p2_t5_s2",
      "target": "gpu_root_p2_t5_s2_d1"
    },
    {
      "source": "gpu_root_p2_t5_s2",
      "target": "gpu_root_p2_t5_s2_d2"
    },
    {
      "source": "gpu_root_p2_t5",
      "target": "gpu_root_p2_t5_s3"
    },
    {
      "source": "gpu_root_p2_t5_s3",
      "target": "gpu_root_p2_t5_s3_d1"
    },
    {
      "source": "gpu_root_p2_t5_s3",
      "target": "gpu_root_p2_t5_s3_d2"
    },
    {
      "source": "gpu_root_p2_t5",
      "target": "gpu_root_p2_t5_s4"
    },
    {
      "source": "gpu_root_p2_t5_s4",
      "target": "gpu_root_p2_t5_s4_d1"
    },
    {
      "source": "gpu_root_p2_t5_s4",
      "target": "gpu_root_p2_t5_s4_d2"
    },
    {
      "source": "gpu_root_p2_t5",
      "target": "gpu_root_p2_t5_s5"
    },
    {
      "source": "gpu_root_p2_t5_s5",
      "target": "gpu_root_p2_t5_s5_d1"
    },
    {
      "source": "gpu_root_p2_t5_s5",
      "target": "gpu_root_p2_t5_s5_d2"
    },
    {
      "source": "gpu_root_p2",
      "target": "gpu_root_p2_t6"
    },
    {
      "source": "gpu_root_p2_t6",
      "target": "gpu_root_p2_t6_s1"
    },
    {
      "source": "gpu_root_p2_t6_s1",
      "target": "gpu_root_p2_t6_s1_d1"
    },
    {
      "source": "gpu_root_p2_t6_s1",
      "target": "gpu_root_p2_t6_s1_d2"
    },
    {
      "source": "gpu_root_p2_t6",
      "target": "gpu_root_p2_t6_s2"
    },
    {
      "source": "gpu_root_p2_t6_s2",
      "target": "gpu_root_p2_t6_s2_d1"
    },
    {
      "source": "gpu_root_p2_t6_s2",
      "target": "gpu_root_p2_t6_s2_d2"
    },
    {
      "source": "gpu_root_p2_t6",
      "target": "gpu_root_p2_t6_s3"
    },
    {
      "source": "gpu_root_p2_t6_s3",
      "target": "gpu_root_p2_t6_s3_d1"
    },
    {
      "source": "gpu_root_p2_t6_s3",
      "target": "gpu_root_p2_t6_s3_d2"
    },
    {
      "source": "gpu_root_p2_t6",
      "target": "gpu_root_p2_t6_s4"
    },
    {
      "source": "gpu_root_p2_t6_s4",
      "target": "gpu_root_p2_t6_s4_d1"
    },
    {
      "source": "gpu_root_p2_t6_s4",
      "target": "gpu_root_p2_t6_s4_d2"
    },
    {
      "source": "gpu_root_p2_t6",
      "target": "gpu_root_p2_t6_s5"
    },
    {
      "source": "gpu_root_p2_t6_s5",
      "target": "gpu_root_p2_t6_s5_d1"
    },
    {
      "source": "gpu_root_p2_t6_s5",
      "target": "gpu_root_p2_t6_s5_d2"
    },
    {
      "source": "gpu_root",
      "target": "gpu_root_p3"
    },
    {
      "source": "gpu_root_p3",
      "target": "gpu_root_p3_t1"
    },
    {
      "source": "gpu_root_p3_t1",
      "target": "gpu_root_p3_t1_s1"
    },
    {
      "source": "gpu_root_p3_t1_s1",
      "target": "gpu_root_p3_t1_s1_d1"
    },
    {
      "source": "gpu_root_p3_t1_s1",
      "target": "gpu_root_p3_t1_s1_d2"
    },
    {
      "source": "gpu_root_p3_t1",
      "target": "gpu_root_p3_t1_s2"
    },
    {
      "source": "gpu_root_p3_t1_s2",
      "target": "gpu_root_p3_t1_s2_d1"
    },
    {
      "source": "gpu_root_p3_t1_s2",
      "target": "gpu_root_p3_t1_s2_d2"
    },
    {
      "source": "gpu_root_p3_t1",
      "target": "gpu_root_p3_t1_s3"
    },
    {
      "source": "gpu_root_p3_t1_s3",
      "target": "gpu_root_p3_t1_s3_d1"
    },
    {
      "source": "gpu_root_p3_t1_s3",
      "target": "gpu_root_p3_t1_s3_d2"
    },
    {
      "source": "gpu_root_p3_t1",
      "target": "gpu_root_p3_t1_s4"
    },
    {
      "source": "gpu_root_p3_t1_s4",
      "target": "gpu_root_p3_t1_s4_d1"
    },
    {
      "source": "gpu_root_p3_t1_s4",
      "target": "gpu_root_p3_t1_s4_d2"
    },
    {
      "source": "gpu_root_p3_t1",
      "target": "gpu_root_p3_t1_s5"
    },
    {
      "source": "gpu_root_p3_t1_s5",
      "target": "gpu_root_p3_t1_s5_d1"
    },
    {
      "source": "gpu_root_p3_t1_s5",
      "target": "gpu_root_p3_t1_s5_d2"
    },
    {
      "source": "gpu_root_p3",
      "target": "gpu_root_p3_t2"
    },
    {
      "source": "gpu_root_p3_t2",
      "target": "gpu_root_p3_t2_s1"
    },
    {
      "source": "gpu_root_p3_t2_s1",
      "target": "gpu_root_p3_t2_s1_d1"
    },
    {
      "source": "gpu_root_p3_t2_s1",
      "target": "gpu_root_p3_t2_s1_d2"
    },
    {
      "source": "gpu_root_p3_t2",
      "target": "gpu_root_p3_t2_s2"
    },
    {
      "source": "gpu_root_p3_t2_s2",
      "target": "gpu_root_p3_t2_s2_d1"
    },
    {
      "source": "gpu_root_p3_t2_s2",
      "target": "gpu_root_p3_t2_s2_d2"
    },
    {
      "source": "gpu_root_p3_t2",
      "target": "gpu_root_p3_t2_s3"
    },
    {
      "source": "gpu_root_p3_t2_s3",
      "target": "gpu_root_p3_t2_s3_d1"
    },
    {
      "source": "gpu_root_p3_t2_s3",
      "target": "gpu_root_p3_t2_s3_d2"
    },
    {
      "source": "gpu_root_p3_t2",
      "target": "gpu_root_p3_t2_s4"
    },
    {
      "source": "gpu_root_p3_t2_s4",
      "target": "gpu_root_p3_t2_s4_d1"
    },
    {
      "source": "gpu_root_p3_t2_s4",
      "target": "gpu_root_p3_t2_s4_d2"
    },
    {
      "source": "gpu_root_p3_t2",
      "target": "gpu_root_p3_t2_s5"
    },
    {
      "source": "gpu_root_p3_t2_s5",
      "target": "gpu_root_p3_t2_s5_d1"
    },
    {
      "source": "gpu_root_p3_t2_s5",
      "target": "gpu_root_p3_t2_s5_d2"
    },
    {
      "source": "gpu_root_p3",
      "target": "gpu_root_p3_t3"
    },
    {
      "source": "gpu_root_p3_t3",
      "target": "gpu_root_p3_t3_s1"
    },
    {
      "source": "gpu_root_p3_t3_s1",
      "target": "gpu_root_p3_t3_s1_d1"
    },
    {
      "source": "gpu_root_p3_t3_s1",
      "target": "gpu_root_p3_t3_s1_d2"
    },
    {
      "source": "gpu_root_p3_t3",
      "target": "gpu_root_p3_t3_s2"
    },
    {
      "source": "gpu_root_p3_t3_s2",
      "target": "gpu_root_p3_t3_s2_d1"
    },
    {
      "source": "gpu_root_p3_t3_s2",
      "target": "gpu_root_p3_t3_s2_d2"
    },
    {
      "source": "gpu_root_p3_t3",
      "target": "gpu_root_p3_t3_s3"
    },
    {
      "source": "gpu_root_p3_t3_s3",
      "target": "gpu_root_p3_t3_s3_d1"
    },
    {
      "source": "gpu_root_p3_t3_s3",
      "target": "gpu_root_p3_t3_s3_d2"
    },
    {
      "source": "gpu_root_p3_t3",
      "target": "gpu_root_p3_t3_s4"
    },
    {
      "source": "gpu_root_p3_t3_s4",
      "target": "gpu_root_p3_t3_s4_d1"
    },
    {
      "source": "gpu_root_p3_t3_s4",
      "target": "gpu_root_p3_t3_s4_d2"
    },
    {
      "source": "gpu_root_p3_t3",
      "target": "gpu_root_p3_t3_s5"
    },
    {
      "source": "gpu_root_p3_t3_s5",
      "target": "gpu_root_p3_t3_s5_d1"
    },
    {
      "source": "gpu_root_p3_t3_s5",
      "target": "gpu_root_p3_t3_s5_d2"
    },
    {
      "source": "gpu_root_p3",
      "target": "gpu_root_p3_t4"
    },
    {
      "source": "gpu_root_p3_t4",
      "target": "gpu_root_p3_t4_s1"
    },
    {
      "source": "gpu_root_p3_t4_s1",
      "target": "gpu_root_p3_t4_s1_d1"
    },
    {
      "source": "gpu_root_p3_t4_s1",
      "target": "gpu_root_p3_t4_s1_d2"
    },
    {
      "source": "gpu_root_p3_t4",
      "target": "gpu_root_p3_t4_s2"
    },
    {
      "source": "gpu_root_p3_t4_s2",
      "target": "gpu_root_p3_t4_s2_d1"
    },
    {
      "source": "gpu_root_p3_t4_s2",
      "target": "gpu_root_p3_t4_s2_d2"
    },
    {
      "source": "gpu_root_p3_t4",
      "target": "gpu_root_p3_t4_s3"
    },
    {
      "source": "gpu_root_p3_t4_s3",
      "target": "gpu_root_p3_t4_s3_d1"
    },
    {
      "source": "gpu_root_p3_t4_s3",
      "target": "gpu_root_p3_t4_s3_d2"
    },
    {
      "source": "gpu_root_p3_t4",
      "target": "gpu_root_p3_t4_s4"
    },
    {
      "source": "gpu_root_p3_t4_s4",
      "target": "gpu_root_p3_t4_s4_d1"
    },
    {
      "source": "gpu_root_p3_t4_s4",
      "target": "gpu_root_p3_t4_s4_d2"
    },
    {
      "source": "gpu_root_p3_t4",
      "target": "gpu_root_p3_t4_s5"
    },
    {
      "source": "gpu_root_p3_t4_s5",
      "target": "gpu_root_p3_t4_s5_d1"
    },
    {
      "source": "gpu_root_p3_t4_s5",
      "target": "gpu_root_p3_t4_s5_d2"
    },
    {
      "source": "gpu_root_p3",
      "target": "gpu_root_p3_t5"
    },
    {
      "source": "gpu_root_p3_t5",
      "target": "gpu_root_p3_t5_s1"
    },
    {
      "source": "gpu_root_p3_t5_s1",
      "target": "gpu_root_p3_t5_s1_d1"
    },
    {
      "source": "gpu_root_p3_t5_s1",
      "target": "gpu_root_p3_t5_s1_d2"
    },
    {
      "source": "gpu_root_p3_t5",
      "target": "gpu_root_p3_t5_s2"
    },
    {
      "source": "gpu_root_p3_t5_s2",
      "target": "gpu_root_p3_t5_s2_d1"
    },
    {
      "source": "gpu_root_p3_t5_s2",
      "target": "gpu_root_p3_t5_s2_d2"
    },
    {
      "source": "gpu_root_p3_t5",
      "target": "gpu_root_p3_t5_s3"
    },
    {
      "source": "gpu_root_p3_t5_s3",
      "target": "gpu_root_p3_t5_s3_d1"
    },
    {
      "source": "gpu_root_p3_t5_s3",
      "target": "gpu_root_p3_t5_s3_d2"
    },
    {
      "source": "gpu_root_p3_t5",
      "target": "gpu_root_p3_t5_s4"
    },
    {
      "source": "gpu_root_p3_t5_s4",
      "target": "gpu_root_p3_t5_s4_d1"
    },
    {
      "source": "gpu_root_p3_t5_s4",
      "target": "gpu_root_p3_t5_s4_d2"
    },
    {
      "source": "gpu_root_p3_t5",
      "target": "gpu_root_p3_t5_s5"
    },
    {
      "source": "gpu_root_p3_t5_s5",
      "target": "gpu_root_p3_t5_s5_d1"
    },
    {
      "source": "gpu_root_p3_t5_s5",
      "target": "gpu_root_p3_t5_s5_d2"
    },
    {
      "source": "gpu_root_p3",
      "target": "gpu_root_p3_t6"
    },
    {
      "source": "gpu_root_p3_t6",
      "target": "gpu_root_p3_t6_s1"
    },
    {
      "source": "gpu_root_p3_t6_s1",
      "target": "gpu_root_p3_t6_s1_d1"
    },
    {
      "source": "gpu_root_p3_t6_s1",
      "target": "gpu_root_p3_t6_s1_d2"
    },
    {
      "source": "gpu_root_p3_t6",
      "target": "gpu_root_p3_t6_s2"
    },
    {
      "source": "gpu_root_p3_t6_s2",
      "target": "gpu_root_p3_t6_s2_d1"
    },
    {
      "source": "gpu_root_p3_t6_s2",
      "target": "gpu_root_p3_t6_s2_d2"
    },
    {
      "source": "gpu_root_p3_t6",
      "target": "gpu_root_p3_t6_s3"
    },
    {
      "source": "gpu_root_p3_t6_s3",
      "target": "gpu_root_p3_t6_s3_d1"
    },
    {
      "source": "gpu_root_p3_t6_s3",
      "target": "gpu_root_p3_t6_s3_d2"
    },
    {
      "source": "gpu_root_p3_t6",
      "target": "gpu_root_p3_t6_s4"
    },
    {
      "source": "gpu_root_p3_t6_s4",
      "target": "gpu_root_p3_t6_s4_d1"
    },
    {
      "source": "gpu_root_p3_t6_s4",
      "target": "gpu_root_p3_t6_s4_d2"
    },
    {
      "source": "gpu_root_p3_t6",
      "target": "gpu_root_p3_t6_s5"
    },
    {
      "source": "gpu_root_p3_t6_s5",
      "target": "gpu_root_p3_t6_s5_d1"
    },
    {
      "source": "gpu_root_p3_t6_s5",
      "target": "gpu_root_p3_t6_s5_d2"
    },
    {
      "source": "gpu_root",
      "target": "gpu_root_p4"
    },
    {
      "source": "gpu_root_p4",
      "target": "gpu_root_p4_t1"
    },
    {
      "source": "gpu_root_p4_t1",
      "target": "gpu_root_p4_t1_s1"
    },
    {
      "source": "gpu_root_p4_t1_s1",
      "target": "gpu_root_p4_t1_s1_d1"
    },
    {
      "source": "gpu_root_p4_t1_s1",
      "target": "gpu_root_p4_t1_s1_d2"
    },
    {
      "source": "gpu_root_p4_t1",
      "target": "gpu_root_p4_t1_s2"
    },
    {
      "source": "gpu_root_p4_t1_s2",
      "target": "gpu_root_p4_t1_s2_d1"
    },
    {
      "source": "gpu_root_p4_t1_s2",
      "target": "gpu_root_p4_t1_s2_d2"
    },
    {
      "source": "gpu_root_p4_t1",
      "target": "gpu_root_p4_t1_s3"
    },
    {
      "source": "gpu_root_p4_t1_s3",
      "target": "gpu_root_p4_t1_s3_d1"
    },
    {
      "source": "gpu_root_p4_t1_s3",
      "target": "gpu_root_p4_t1_s3_d2"
    },
    {
      "source": "gpu_root_p4_t1",
      "target": "gpu_root_p4_t1_s4"
    },
    {
      "source": "gpu_root_p4_t1_s4",
      "target": "gpu_root_p4_t1_s4_d1"
    },
    {
      "source": "gpu_root_p4_t1_s4",
      "target": "gpu_root_p4_t1_s4_d2"
    },
    {
      "source": "gpu_root_p4_t1",
      "target": "gpu_root_p4_t1_s5"
    },
    {
      "source": "gpu_root_p4_t1_s5",
      "target": "gpu_root_p4_t1_s5_d1"
    },
    {
      "source": "gpu_root_p4_t1_s5",
      "target": "gpu_root_p4_t1_s5_d2"
    },
    {
      "source": "gpu_root_p4",
      "target": "gpu_root_p4_t2"
    },
    {
      "source": "gpu_root_p4_t2",
      "target": "gpu_root_p4_t2_s1"
    },
    {
      "source": "gpu_root_p4_t2_s1",
      "target": "gpu_root_p4_t2_s1_d1"
    },
    {
      "source": "gpu_root_p4_t2_s1",
      "target": "gpu_root_p4_t2_s1_d2"
    },
    {
      "source": "gpu_root_p4_t2",
      "target": "gpu_root_p4_t2_s2"
    },
    {
      "source": "gpu_root_p4_t2_s2",
      "target": "gpu_root_p4_t2_s2_d1"
    },
    {
      "source": "gpu_root_p4_t2_s2",
      "target": "gpu_root_p4_t2_s2_d2"
    },
    {
      "source": "gpu_root_p4_t2",
      "target": "gpu_root_p4_t2_s3"
    },
    {
      "source": "gpu_root_p4_t2_s3",
      "target": "gpu_root_p4_t2_s3_d1"
    },
    {
      "source": "gpu_root_p4_t2_s3",
      "target": "gpu_root_p4_t2_s3_d2"
    },
    {
      "source": "gpu_root_p4_t2",
      "target": "gpu_root_p4_t2_s4"
    },
    {
      "source": "gpu_root_p4_t2_s4",
      "target": "gpu_root_p4_t2_s4_d1"
    },
    {
      "source": "gpu_root_p4_t2_s4",
      "target": "gpu_root_p4_t2_s4_d2"
    },
    {
      "source": "gpu_root_p4_t2",
      "target": "gpu_root_p4_t2_s5"
    },
    {
      "source": "gpu_root_p4_t2_s5",
      "target": "gpu_root_p4_t2_s5_d1"
    },
    {
      "source": "gpu_root_p4_t2_s5",
      "target": "gpu_root_p4_t2_s5_d2"
    },
    {
      "source": "gpu_root_p4",
      "target": "gpu_root_p4_t3"
    },
    {
      "source": "gpu_root_p4_t3",
      "target": "gpu_root_p4_t3_s1"
    },
    {
      "source": "gpu_root_p4_t3_s1",
      "target": "gpu_root_p4_t3_s1_d1"
    },
    {
      "source": "gpu_root_p4_t3_s1",
      "target": "gpu_root_p4_t3_s1_d2"
    },
    {
      "source": "gpu_root_p4_t3",
      "target": "gpu_root_p4_t3_s2"
    },
    {
      "source": "gpu_root_p4_t3_s2",
      "target": "gpu_root_p4_t3_s2_d1"
    },
    {
      "source": "gpu_root_p4_t3_s2",
      "target": "gpu_root_p4_t3_s2_d2"
    },
    {
      "source": "gpu_root_p4_t3",
      "target": "gpu_root_p4_t3_s3"
    },
    {
      "source": "gpu_root_p4_t3_s3",
      "target": "gpu_root_p4_t3_s3_d1"
    },
    {
      "source": "gpu_root_p4_t3_s3",
      "target": "gpu_root_p4_t3_s3_d2"
    },
    {
      "source": "gpu_root_p4_t3",
      "target": "gpu_root_p4_t3_s4"
    },
    {
      "source": "gpu_root_p4_t3_s4",
      "target": "gpu_root_p4_t3_s4_d1"
    },
    {
      "source": "gpu_root_p4_t3_s4",
      "target": "gpu_root_p4_t3_s4_d2"
    },
    {
      "source": "gpu_root_p4_t3",
      "target": "gpu_root_p4_t3_s5"
    },
    {
      "source": "gpu_root_p4_t3_s5",
      "target": "gpu_root_p4_t3_s5_d1"
    },
    {
      "source": "gpu_root_p4_t3_s5",
      "target": "gpu_root_p4_t3_s5_d2"
    },
    {
      "source": "gpu_root_p4",
      "target": "gpu_root_p4_t4"
    },
    {
      "source": "gpu_root_p4_t4",
      "target": "gpu_root_p4_t4_s1"
    },
    {
      "source": "gpu_root_p4_t4_s1",
      "target": "gpu_root_p4_t4_s1_d1"
    },
    {
      "source": "gpu_root_p4_t4_s1",
      "target": "gpu_root_p4_t4_s1_d2"
    },
    {
      "source": "gpu_root_p4_t4",
      "target": "gpu_root_p4_t4_s2"
    },
    {
      "source": "gpu_root_p4_t4_s2",
      "target": "gpu_root_p4_t4_s2_d1"
    },
    {
      "source": "gpu_root_p4_t4_s2",
      "target": "gpu_root_p4_t4_s2_d2"
    },
    {
      "source": "gpu_root_p4_t4",
      "target": "gpu_root_p4_t4_s3"
    },
    {
      "source": "gpu_root_p4_t4_s3",
      "target": "gpu_root_p4_t4_s3_d1"
    },
    {
      "source": "gpu_root_p4_t4_s3",
      "target": "gpu_root_p4_t4_s3_d2"
    },
    {
      "source": "gpu_root_p4_t4",
      "target": "gpu_root_p4_t4_s4"
    },
    {
      "source": "gpu_root_p4_t4_s4",
      "target": "gpu_root_p4_t4_s4_d1"
    },
    {
      "source": "gpu_root_p4_t4_s4",
      "target": "gpu_root_p4_t4_s4_d2"
    },
    {
      "source": "gpu_root_p4_t4",
      "target": "gpu_root_p4_t4_s5"
    },
    {
      "source": "gpu_root_p4_t4_s5",
      "target": "gpu_root_p4_t4_s5_d1"
    },
    {
      "source": "gpu_root_p4_t4_s5",
      "target": "gpu_root_p4_t4_s5_d2"
    },
    {
      "source": "gpu_root_p4",
      "target": "gpu_root_p4_t5"
    },
    {
      "source": "gpu_root_p4_t5",
      "target": "gpu_root_p4_t5_s1"
    },
    {
      "source": "gpu_root_p4_t5_s1",
      "target": "gpu_root_p4_t5_s1_d1"
    },
    {
      "source": "gpu_root_p4_t5_s1",
      "target": "gpu_root_p4_t5_s1_d2"
    },
    {
      "source": "gpu_root_p4_t5",
      "target": "gpu_root_p4_t5_s2"
    },
    {
      "source": "gpu_root_p4_t5_s2",
      "target": "gpu_root_p4_t5_s2_d1"
    },
    {
      "source": "gpu_root_p4_t5_s2",
      "target": "gpu_root_p4_t5_s2_d2"
    },
    {
      "source": "gpu_root_p4_t5",
      "target": "gpu_root_p4_t5_s3"
    },
    {
      "source": "gpu_root_p4_t5_s3",
      "target": "gpu_root_p4_t5_s3_d1"
    },
    {
      "source": "gpu_root_p4_t5_s3",
      "target": "gpu_root_p4_t5_s3_d2"
    },
    {
      "source": "gpu_root_p4_t5",
      "target": "gpu_root_p4_t5_s4"
    },
    {
      "source": "gpu_root_p4_t5_s4",
      "target": "gpu_root_p4_t5_s4_d1"
    },
    {
      "source": "gpu_root_p4_t5_s4",
      "target": "gpu_root_p4_t5_s4_d2"
    },
    {
      "source": "gpu_root_p4_t5",
      "target": "gpu_root_p4_t5_s5"
    },
    {
      "source": "gpu_root_p4_t5_s5",
      "target": "gpu_root_p4_t5_s5_d1"
    },
    {
      "source": "gpu_root_p4_t5_s5",
      "target": "gpu_root_p4_t5_s5_d2"
    },
    {
      "source": "gpu_root_p4",
      "target": "gpu_root_p4_t6"
    },
    {
      "source": "gpu_root_p4_t6",
      "target": "gpu_root_p4_t6_s1"
    },
    {
      "source": "gpu_root_p4_t6_s1",
      "target": "gpu_root_p4_t6_s1_d1"
    },
    {
      "source": "gpu_root_p4_t6_s1",
      "target": "gpu_root_p4_t6_s1_d2"
    },
    {
      "source": "gpu_root_p4_t6",
      "target": "gpu_root_p4_t6_s2"
    },
    {
      "source": "gpu_root_p4_t6_s2",
      "target": "gpu_root_p4_t6_s2_d1"
    },
    {
      "source": "gpu_root_p4_t6_s2",
      "target": "gpu_root_p4_t6_s2_d2"
    },
    {
      "source": "gpu_root_p4_t6",
      "target": "gpu_root_p4_t6_s3"
    },
    {
      "source": "gpu_root_p4_t6_s3",
      "target": "gpu_root_p4_t6_s3_d1"
    },
    {
      "source": "gpu_root_p4_t6_s3",
      "target": "gpu_root_p4_t6_s3_d2"
    },
    {
      "source": "gpu_root_p4_t6",
      "target": "gpu_root_p4_t6_s4"
    },
    {
      "source": "gpu_root_p4_t6_s4",
      "target": "gpu_root_p4_t6_s4_d1"
    },
    {
      "source": "gpu_root_p4_t6_s4",
      "target": "gpu_root_p4_t6_s4_d2"
    },
    {
      "source": "gpu_root_p4_t6",
      "target": "gpu_root_p4_t6_s5"
    },
    {
      "source": "gpu_root_p4_t6_s5",
      "target": "gpu_root_p4_t6_s5_d1"
    },
    {
      "source": "gpu_root_p4_t6_s5",
      "target": "gpu_root_p4_t6_s5_d2"
    },
    {
      "source": "gpu_root",
      "target": "gpu_root_p5"
    },
    {
      "source": "gpu_root_p5",
      "target": "gpu_root_p5_t1"
    },
    {
      "source": "gpu_root_p5_t1",
      "target": "gpu_root_p5_t1_s1"
    },
    {
      "source": "gpu_root_p5_t1_s1",
      "target": "gpu_root_p5_t1_s1_d1"
    },
    {
      "source": "gpu_root_p5_t1_s1",
      "target": "gpu_root_p5_t1_s1_d2"
    },
    {
      "source": "gpu_root_p5_t1",
      "target": "gpu_root_p5_t1_s2"
    },
    {
      "source": "gpu_root_p5_t1_s2",
      "target": "gpu_root_p5_t1_s2_d1"
    },
    {
      "source": "gpu_root_p5_t1_s2",
      "target": "gpu_root_p5_t1_s2_d2"
    },
    {
      "source": "gpu_root_p5_t1",
      "target": "gpu_root_p5_t1_s3"
    },
    {
      "source": "gpu_root_p5_t1_s3",
      "target": "gpu_root_p5_t1_s3_d1"
    },
    {
      "source": "gpu_root_p5_t1_s3",
      "target": "gpu_root_p5_t1_s3_d2"
    },
    {
      "source": "gpu_root_p5_t1",
      "target": "gpu_root_p5_t1_s4"
    },
    {
      "source": "gpu_root_p5_t1_s4",
      "target": "gpu_root_p5_t1_s4_d1"
    },
    {
      "source": "gpu_root_p5_t1_s4",
      "target": "gpu_root_p5_t1_s4_d2"
    },
    {
      "source": "gpu_root_p5_t1",
      "target": "gpu_root_p5_t1_s5"
    },
    {
      "source": "gpu_root_p5_t1_s5",
      "target": "gpu_root_p5_t1_s5_d1"
    },
    {
      "source": "gpu_root_p5_t1_s5",
      "target": "gpu_root_p5_t1_s5_d2"
    },
    {
      "source": "gpu_root_p5",
      "target": "gpu_root_p5_t2"
    },
    {
      "source": "gpu_root_p5_t2",
      "target": "gpu_root_p5_t2_s1"
    },
    {
      "source": "gpu_root_p5_t2_s1",
      "target": "gpu_root_p5_t2_s1_d1"
    },
    {
      "source": "gpu_root_p5_t2_s1",
      "target": "gpu_root_p5_t2_s1_d2"
    },
    {
      "source": "gpu_root_p5_t2",
      "target": "gpu_root_p5_t2_s2"
    },
    {
      "source": "gpu_root_p5_t2_s2",
      "target": "gpu_root_p5_t2_s2_d1"
    },
    {
      "source": "gpu_root_p5_t2_s2",
      "target": "gpu_root_p5_t2_s2_d2"
    },
    {
      "source": "gpu_root_p5_t2",
      "target": "gpu_root_p5_t2_s3"
    },
    {
      "source": "gpu_root_p5_t2_s3",
      "target": "gpu_root_p5_t2_s3_d1"
    },
    {
      "source": "gpu_root_p5_t2_s3",
      "target": "gpu_root_p5_t2_s3_d2"
    },
    {
      "source": "gpu_root_p5_t2",
      "target": "gpu_root_p5_t2_s4"
    },
    {
      "source": "gpu_root_p5_t2_s4",
      "target": "gpu_root_p5_t2_s4_d1"
    },
    {
      "source": "gpu_root_p5_t2_s4",
      "target": "gpu_root_p5_t2_s4_d2"
    },
    {
      "source": "gpu_root_p5_t2",
      "target": "gpu_root_p5_t2_s5"
    },
    {
      "source": "gpu_root_p5_t2_s5",
      "target": "gpu_root_p5_t2_s5_d1"
    },
    {
      "source": "gpu_root_p5_t2_s5",
      "target": "gpu_root_p5_t2_s5_d2"
    },
    {
      "source": "gpu_root_p5_t2_s5",
      "target": "gpu_root_p5_t2_s5_d3"
    },
    {
      "source": "gpu_root_p5",
      "target": "gpu_root_p5_t3"
    },
    {
      "source": "gpu_root_p5_t3",
      "target": "gpu_root_p5_t3_s1"
    },
    {
      "source": "gpu_root_p5_t3_s1",
      "target": "gpu_root_p5_t3_s1_d1"
    },
    {
      "source": "gpu_root_p5_t3_s1",
      "target": "gpu_root_p5_t3_s1_d2"
    },
    {
      "source": "gpu_root_p5_t3_s1",
      "target": "gpu_root_p5_t3_s1_d3"
    },
    {
      "source": "gpu_root_p5_t3",
      "target": "gpu_root_p5_t3_s2"
    },
    {
      "source": "gpu_root_p5_t3_s2",
      "target": "gpu_root_p5_t3_s2_d1"
    },
    {
      "source": "gpu_root_p5_t3_s2",
      "target": "gpu_root_p5_t3_s2_d2"
    },
    {
      "source": "gpu_root_p5_t3",
      "target": "gpu_root_p5_t3_s3"
    },
    {
      "source": "gpu_root_p5_t3_s3",
      "target": "gpu_root_p5_t3_s3_d1"
    },
    {
      "source": "gpu_root_p5_t3_s3",
      "target": "gpu_root_p5_t3_s3_d2"
    },
    {
      "source": "gpu_root_p5_t3",
      "target": "gpu_root_p5_t3_s4"
    },
    {
      "source": "gpu_root_p5_t3_s4",
      "target": "gpu_root_p5_t3_s4_d1"
    },
    {
      "source": "gpu_root_p5_t3_s4",
      "target": "gpu_root_p5_t3_s4_d2"
    },
    {
      "source": "gpu_root_p5_t3",
      "target": "gpu_root_p5_t3_s5"
    },
    {
      "source": "gpu_root_p5_t3_s5",
      "target": "gpu_root_p5_t3_s5_d1"
    },
    {
      "source": "gpu_root_p5_t3_s5",
      "target": "gpu_root_p5_t3_s5_d2"
    },
    {
      "source": "gpu_root_p5",
      "target": "gpu_root_p5_t4"
    },
    {
      "source": "gpu_root_p5_t4",
      "target": "gpu_root_p5_t4_s1"
    },
    {
      "source": "gpu_root_p5_t4_s1",
      "target": "gpu_root_p5_t4_s1_d1"
    },
    {
      "source": "gpu_root_p5_t4_s1",
      "target": "gpu_root_p5_t4_s1_d2"
    },
    {
      "source": "gpu_root_p5_t4",
      "target": "gpu_root_p5_t4_s2"
    },
    {
      "source": "gpu_root_p5_t4_s2",
      "target": "gpu_root_p5_t4_s2_d1"
    },
    {
      "source": "gpu_root_p5_t4_s2",
      "target": "gpu_root_p5_t4_s2_d2"
    },
    {
      "source": "gpu_root_p5_t4",
      "target": "gpu_root_p5_t4_s3"
    },
    {
      "source": "gpu_root_p5_t4_s3",
      "target": "gpu_root_p5_t4_s3_d1"
    },
    {
      "source": "gpu_root_p5_t4_s3",
      "target": "gpu_root_p5_t4_s3_d2"
    },
    {
      "source": "gpu_root_p5_t4",
      "target": "gpu_root_p5_t4_s4"
    },
    {
      "source": "gpu_root_p5_t4_s4",
      "target": "gpu_root_p5_t4_s4_d1"
    },
    {
      "source": "gpu_root_p5_t4_s4",
      "target": "gpu_root_p5_t4_s4_d2"
    },
    {
      "source": "gpu_root_p5_t4",
      "target": "gpu_root_p5_t4_s5"
    },
    {
      "source": "gpu_root_p5_t4_s5",
      "target": "gpu_root_p5_t4_s5_d1"
    },
    {
      "source": "gpu_root_p5_t4_s5",
      "target": "gpu_root_p5_t4_s5_d2"
    },
    {
      "source": "gpu_root_p5",
      "target": "gpu_root_p5_t5"
    },
    {
      "source": "gpu_root_p5_t5",
      "target": "gpu_root_p5_t5_s1"
    },
    {
      "source": "gpu_root_p5_t5_s1",
      "target": "gpu_root_p5_t5_s1_d1"
    },
    {
      "source": "gpu_root_p5_t5_s1",
      "target": "gpu_root_p5_t5_s1_d2"
    },
    {
      "source": "gpu_root_p5_t5",
      "target": "gpu_root_p5_t5_s2"
    },
    {
      "source": "gpu_root_p5_t5_s2",
      "target": "gpu_root_p5_t5_s2_d1"
    },
    {
      "source": "gpu_root_p5_t5_s2",
      "target": "gpu_root_p5_t5_s2_d2"
    },
    {
      "source": "gpu_root_p5_t5",
      "target": "gpu_root_p5_t5_s3"
    },
    {
      "source": "gpu_root_p5_t5_s3",
      "target": "gpu_root_p5_t5_s3_d1"
    },
    {
      "source": "gpu_root_p5_t5_s3",
      "target": "gpu_root_p5_t5_s3_d2"
    },
    {
      "source": "gpu_root_p5_t5",
      "target": "gpu_root_p5_t5_s4"
    },
    {
      "source": "gpu_root_p5_t5_s4",
      "target": "gpu_root_p5_t5_s4_d1"
    },
    {
      "source": "gpu_root_p5_t5_s4",
      "target": "gpu_root_p5_t5_s4_d2"
    },
    {
      "source": "gpu_root_p5_t5",
      "target": "gpu_root_p5_t5_s5"
    },
    {
      "source": "gpu_root_p5_t5_s5",
      "target": "gpu_root_p5_t5_s5_d1"
    },
    {
      "source": "gpu_root_p5_t5_s5",
      "target": "gpu_root_p5_t5_s5_d2"
    },
    {
      "source": "gpu_root_p5",
      "target": "gpu_root_p5_t6"
    },
    {
      "source": "gpu_root_p5_t6",
      "target": "gpu_root_p5_t6_s1"
    },
    {
      "source": "gpu_root_p5_t6_s1",
      "target": "gpu_root_p5_t6_s1_d1"
    },
    {
      "source": "gpu_root_p5_t6_s1",
      "target": "gpu_root_p5_t6_s1_d2"
    },
    {
      "source": "gpu_root_p5_t6",
      "target": "gpu_root_p5_t6_s2"
    },
    {
      "source": "gpu_root_p5_t6_s2",
      "target": "gpu_root_p5_t6_s2_d1"
    },
    {
      "source": "gpu_root_p5_t6_s2",
      "target": "gpu_root_p5_t6_s2_d2"
    },
    {
      "source": "gpu_root_p5_t6",
      "target": "gpu_root_p5_t6_s3"
    },
    {
      "source": "gpu_root_p5_t6_s3",
      "target": "gpu_root_p5_t6_s3_d1"
    },
    {
      "source": "gpu_root_p5_t6_s3",
      "target": "gpu_root_p5_t6_s3_d2"
    },
    {
      "source": "gpu_root_p5_t6",
      "target": "gpu_root_p5_t6_s4"
    },
    {
      "source": "gpu_root_p5_t6_s4",
      "target": "gpu_root_p5_t6_s4_d1"
    },
    {
      "source": "gpu_root_p5_t6_s4",
      "target": "gpu_root_p5_t6_s4_d2"
    },
    {
      "source": "gpu_root_p5_t6",
      "target": "gpu_root_p5_t6_s5"
    },
    {
      "source": "gpu_root_p5_t6_s5",
      "target": "gpu_root_p5_t6_s5_d1"
    },
    {
      "source": "gpu_root_p5_t6_s5",
      "target": "gpu_root_p5_t6_s5_d2"
    },
    {
      "source": "gpu_root",
      "target": "gpu_root_p6"
    },
    {
      "source": "gpu_root_p6",
      "target": "gpu_root_p6_t1"
    },
    {
      "source": "gpu_root_p6_t1",
      "target": "gpu_root_p6_t1_s1"
    },
    {
      "source": "gpu_root_p6_t1_s1",
      "target": "gpu_root_p6_t1_s1_d1"
    },
    {
      "source": "gpu_root_p6_t1_s1",
      "target": "gpu_root_p6_t1_s1_d2"
    },
    {
      "source": "gpu_root_p6_t1",
      "target": "gpu_root_p6_t1_s2"
    },
    {
      "source": "gpu_root_p6_t1_s2",
      "target": "gpu_root_p6_t1_s2_d1"
    },
    {
      "source": "gpu_root_p6_t1_s2",
      "target": "gpu_root_p6_t1_s2_d2"
    },
    {
      "source": "gpu_root_p6_t1",
      "target": "gpu_root_p6_t1_s3"
    },
    {
      "source": "gpu_root_p6_t1_s3",
      "target": "gpu_root_p6_t1_s3_d1"
    },
    {
      "source": "gpu_root_p6_t1_s3",
      "target": "gpu_root_p6_t1_s3_d2"
    },
    {
      "source": "gpu_root_p6_t1",
      "target": "gpu_root_p6_t1_s4"
    },
    {
      "source": "gpu_root_p6_t1_s4",
      "target": "gpu_root_p6_t1_s4_d1"
    },
    {
      "source": "gpu_root_p6_t1_s4",
      "target": "gpu_root_p6_t1_s4_d2"
    },
    {
      "source": "gpu_root_p6_t1",
      "target": "gpu_root_p6_t1_s5"
    },
    {
      "source": "gpu_root_p6_t1_s5",
      "target": "gpu_root_p6_t1_s5_d1"
    },
    {
      "source": "gpu_root_p6_t1_s5",
      "target": "gpu_root_p6_t1_s5_d2"
    },
    {
      "source": "gpu_root_p6",
      "target": "gpu_root_p6_t2"
    },
    {
      "source": "gpu_root_p6_t2",
      "target": "gpu_root_p6_t2_s1"
    },
    {
      "source": "gpu_root_p6_t2_s1",
      "target": "gpu_root_p6_t2_s1_d1"
    },
    {
      "source": "gpu_root_p6_t2_s1",
      "target": "gpu_root_p6_t2_s1_d2"
    },
    {
      "source": "gpu_root_p6_t2",
      "target": "gpu_root_p6_t2_s2"
    },
    {
      "source": "gpu_root_p6_t2_s2",
      "target": "gpu_root_p6_t2_s2_d1"
    },
    {
      "source": "gpu_root_p6_t2_s2",
      "target": "gpu_root_p6_t2_s2_d2"
    },
    {
      "source": "gpu_root_p6_t2",
      "target": "gpu_root_p6_t2_s3"
    },
    {
      "source": "gpu_root_p6_t2_s3",
      "target": "gpu_root_p6_t2_s3_d1"
    },
    {
      "source": "gpu_root_p6_t2_s3",
      "target": "gpu_root_p6_t2_s3_d2"
    },
    {
      "source": "gpu_root_p6_t2",
      "target": "gpu_root_p6_t2_s4"
    },
    {
      "source": "gpu_root_p6_t2_s4",
      "target": "gpu_root_p6_t2_s4_d1"
    },
    {
      "source": "gpu_root_p6_t2_s4",
      "target": "gpu_root_p6_t2_s4_d2"
    },
    {
      "source": "gpu_root_p6_t2",
      "target": "gpu_root_p6_t2_s5"
    },
    {
      "source": "gpu_root_p6_t2_s5",
      "target": "gpu_root_p6_t2_s5_d1"
    },
    {
      "source": "gpu_root_p6_t2_s5",
      "target": "gpu_root_p6_t2_s5_d2"
    },
    {
      "source": "gpu_root_p6",
      "target": "gpu_root_p6_t3"
    },
    {
      "source": "gpu_root_p6_t3",
      "target": "gpu_root_p6_t3_s1"
    },
    {
      "source": "gpu_root_p6_t3_s1",
      "target": "gpu_root_p6_t3_s1_d1"
    },
    {
      "source": "gpu_root_p6_t3_s1",
      "target": "gpu_root_p6_t3_s1_d2"
    },
    {
      "source": "gpu_root_p6_t3",
      "target": "gpu_root_p6_t3_s2"
    },
    {
      "source": "gpu_root_p6_t3_s2",
      "target": "gpu_root_p6_t3_s2_d1"
    },
    {
      "source": "gpu_root_p6_t3_s2",
      "target": "gpu_root_p6_t3_s2_d2"
    },
    {
      "source": "gpu_root_p6_t3_s2",
      "target": "gpu_root_p6_t3_s2_d3"
    },
    {
      "source": "gpu_root_p6_t3",
      "target": "gpu_root_p6_t3_s3"
    },
    {
      "source": "gpu_root_p6_t3_s3",
      "target": "gpu_root_p6_t3_s3_d1"
    },
    {
      "source": "gpu_root_p6_t3_s3",
      "target": "gpu_root_p6_t3_s3_d2"
    },
    {
      "source": "gpu_root_p6_t3",
      "target": "gpu_root_p6_t3_s4"
    },
    {
      "source": "gpu_root_p6_t3_s4",
      "target": "gpu_root_p6_t3_s4_d1"
    },
    {
      "source": "gpu_root_p6_t3_s4",
      "target": "gpu_root_p6_t3_s4_d2"
    },
    {
      "source": "gpu_root_p6_t3",
      "target": "gpu_root_p6_t3_s5"
    },
    {
      "source": "gpu_root_p6_t3_s5",
      "target": "gpu_root_p6_t3_s5_d1"
    },
    {
      "source": "gpu_root_p6_t3_s5",
      "target": "gpu_root_p6_t3_s5_d2"
    },
    {
      "source": "gpu_root_p6",
      "target": "gpu_root_p6_t4"
    },
    {
      "source": "gpu_root_p6_t4",
      "target": "gpu_root_p6_t4_s1"
    },
    {
      "source": "gpu_root_p6_t4_s1",
      "target": "gpu_root_p6_t4_s1_d1"
    },
    {
      "source": "gpu_root_p6_t4_s1",
      "target": "gpu_root_p6_t4_s1_d2"
    },
    {
      "source": "gpu_root_p6_t4",
      "target": "gpu_root_p6_t4_s2"
    },
    {
      "source": "gpu_root_p6_t4_s2",
      "target": "gpu_root_p6_t4_s2_d1"
    },
    {
      "source": "gpu_root_p6_t4_s2",
      "target": "gpu_root_p6_t4_s2_d2"
    },
    {
      "source": "gpu_root_p6_t4",
      "target": "gpu_root_p6_t4_s3"
    },
    {
      "source": "gpu_root_p6_t4_s3",
      "target": "gpu_root_p6_t4_s3_d1"
    },
    {
      "source": "gpu_root_p6_t4_s3",
      "target": "gpu_root_p6_t4_s3_d2"
    },
    {
      "source": "gpu_root_p6_t4",
      "target": "gpu_root_p6_t4_s4"
    },
    {
      "source": "gpu_root_p6_t4_s4",
      "target": "gpu_root_p6_t4_s4_d1"
    },
    {
      "source": "gpu_root_p6_t4_s4",
      "target": "gpu_root_p6_t4_s4_d2"
    },
    {
      "source": "gpu_root_p6_t4_s4",
      "target": "gpu_root_p6_t4_s4_d3"
    },
    {
      "source": "gpu_root_p6_t4",
      "target": "gpu_root_p6_t4_s5"
    },
    {
      "source": "gpu_root_p6_t4_s5",
      "target": "gpu_root_p6_t4_s5_d1"
    },
    {
      "source": "gpu_root_p6_t4_s5",
      "target": "gpu_root_p6_t4_s5_d2"
    },
    {
      "source": "gpu_root_p6",
      "target": "gpu_root_p6_t5"
    },
    {
      "source": "gpu_root_p6_t5",
      "target": "gpu_root_p6_t5_s1"
    },
    {
      "source": "gpu_root_p6_t5_s1",
      "target": "gpu_root_p6_t5_s1_d1"
    },
    {
      "source": "gpu_root_p6_t5_s1",
      "target": "gpu_root_p6_t5_s1_d2"
    },
    {
      "source": "gpu_root_p6_t5",
      "target": "gpu_root_p6_t5_s2"
    },
    {
      "source": "gpu_root_p6_t5_s2",
      "target": "gpu_root_p6_t5_s2_d1"
    },
    {
      "source": "gpu_root_p6_t5_s2",
      "target": "gpu_root_p6_t5_s2_d2"
    },
    {
      "source": "gpu_root_p6_t5",
      "target": "gpu_root_p6_t5_s3"
    },
    {
      "source": "gpu_root_p6_t5_s3",
      "target": "gpu_root_p6_t5_s3_d1"
    },
    {
      "source": "gpu_root_p6_t5_s3",
      "target": "gpu_root_p6_t5_s3_d2"
    },
    {
      "source": "gpu_root_p6_t5",
      "target": "gpu_root_p6_t5_s4"
    },
    {
      "source": "gpu_root_p6_t5_s4",
      "target": "gpu_root_p6_t5_s4_d1"
    },
    {
      "source": "gpu_root_p6_t5_s4",
      "target": "gpu_root_p6_t5_s4_d2"
    },
    {
      "source": "gpu_root_p6_t5",
      "target": "gpu_root_p6_t5_s5"
    },
    {
      "source": "gpu_root_p6_t5_s5",
      "target": "gpu_root_p6_t5_s5_d1"
    },
    {
      "source": "gpu_root_p6_t5_s5",
      "target": "gpu_root_p6_t5_s5_d2"
    },
    {
      "source": "gpu_root_p6",
      "target": "gpu_root_p6_t6"
    },
    {
      "source": "gpu_root_p6_t6",
      "target": "gpu_root_p6_t6_s1"
    },
    {
      "source": "gpu_root_p6_t6_s1",
      "target": "gpu_root_p6_t6_s1_d1"
    },
    {
      "source": "gpu_root_p6_t6_s1",
      "target": "gpu_root_p6_t6_s1_d2"
    },
    {
      "source": "gpu_root_p6_t6",
      "target": "gpu_root_p6_t6_s2"
    },
    {
      "source": "gpu_root_p6_t6_s2",
      "target": "gpu_root_p6_t6_s2_d1"
    },
    {
      "source": "gpu_root_p6_t6_s2",
      "target": "gpu_root_p6_t6_s2_d2"
    },
    {
      "source": "gpu_root_p6_t6",
      "target": "gpu_root_p6_t6_s3"
    },
    {
      "source": "gpu_root_p6_t6_s3",
      "target": "gpu_root_p6_t6_s3_d1"
    },
    {
      "source": "gpu_root_p6_t6_s3",
      "target": "gpu_root_p6_t6_s3_d2"
    },
    {
      "source": "gpu_root_p6_t6",
      "target": "gpu_root_p6_t6_s4"
    },
    {
      "source": "gpu_root_p6_t6_s4",
      "target": "gpu_root_p6_t6_s4_d1"
    },
    {
      "source": "gpu_root_p6_t6_s4",
      "target": "gpu_root_p6_t6_s4_d2"
    },
    {
      "source": "gpu_root_p6_t6",
      "target": "gpu_root_p6_t6_s5"
    },
    {
      "source": "gpu_root_p6_t6_s5",
      "target": "gpu_root_p6_t6_s5_d1"
    },
    {
      "source": "gpu_root_p6_t6_s5",
      "target": "gpu_root_p6_t6_s5_d2"
    },
    {
      "source": "gpu_root",
      "target": "gpu_root_p7"
    },
    {
      "source": "gpu_root_p7",
      "target": "gpu_root_p7_t1"
    },
    {
      "source": "gpu_root_p7_t1",
      "target": "gpu_root_p7_t1_s1"
    },
    {
      "source": "gpu_root_p7_t1_s1",
      "target": "gpu_root_p7_t1_s1_d1"
    },
    {
      "source": "gpu_root_p7_t1_s1",
      "target": "gpu_root_p7_t1_s1_d2"
    },
    {
      "source": "gpu_root_p7_t1",
      "target": "gpu_root_p7_t1_s2"
    },
    {
      "source": "gpu_root_p7_t1_s2",
      "target": "gpu_root_p7_t1_s2_d1"
    },
    {
      "source": "gpu_root_p7_t1_s2",
      "target": "gpu_root_p7_t1_s2_d2"
    },
    {
      "source": "gpu_root_p7_t1",
      "target": "gpu_root_p7_t1_s3"
    },
    {
      "source": "gpu_root_p7_t1_s3",
      "target": "gpu_root_p7_t1_s3_d1"
    },
    {
      "source": "gpu_root_p7_t1_s3",
      "target": "gpu_root_p7_t1_s3_d2"
    },
    {
      "source": "gpu_root_p7_t1",
      "target": "gpu_root_p7_t1_s4"
    },
    {
      "source": "gpu_root_p7_t1_s4",
      "target": "gpu_root_p7_t1_s4_d1"
    },
    {
      "source": "gpu_root_p7_t1_s4",
      "target": "gpu_root_p7_t1_s4_d2"
    },
    {
      "source": "gpu_root_p7_t1",
      "target": "gpu_root_p7_t1_s5"
    },
    {
      "source": "gpu_root_p7_t1_s5",
      "target": "gpu_root_p7_t1_s5_d1"
    },
    {
      "source": "gpu_root_p7_t1_s5",
      "target": "gpu_root_p7_t1_s5_d2"
    },
    {
      "source": "gpu_root_p7",
      "target": "gpu_root_p7_t2"
    },
    {
      "source": "gpu_root_p7_t2",
      "target": "gpu_root_p7_t2_s1"
    },
    {
      "source": "gpu_root_p7_t2_s1",
      "target": "gpu_root_p7_t2_s1_d1"
    },
    {
      "source": "gpu_root_p7_t2_s1",
      "target": "gpu_root_p7_t2_s1_d2"
    },
    {
      "source": "gpu_root_p7_t2",
      "target": "gpu_root_p7_t2_s2"
    },
    {
      "source": "gpu_root_p7_t2_s2",
      "target": "gpu_root_p7_t2_s2_d1"
    },
    {
      "source": "gpu_root_p7_t2_s2",
      "target": "gpu_root_p7_t2_s2_d2"
    },
    {
      "source": "gpu_root_p7_t2",
      "target": "gpu_root_p7_t2_s3"
    },
    {
      "source": "gpu_root_p7_t2_s3",
      "target": "gpu_root_p7_t2_s3_d1"
    },
    {
      "source": "gpu_root_p7_t2_s3",
      "target": "gpu_root_p7_t2_s3_d2"
    },
    {
      "source": "gpu_root_p7_t2",
      "target": "gpu_root_p7_t2_s4"
    },
    {
      "source": "gpu_root_p7_t2_s4",
      "target": "gpu_root_p7_t2_s4_d1"
    },
    {
      "source": "gpu_root_p7_t2_s4",
      "target": "gpu_root_p7_t2_s4_d2"
    },
    {
      "source": "gpu_root_p7_t2",
      "target": "gpu_root_p7_t2_s5"
    },
    {
      "source": "gpu_root_p7_t2_s5",
      "target": "gpu_root_p7_t2_s5_d1"
    },
    {
      "source": "gpu_root_p7_t2_s5",
      "target": "gpu_root_p7_t2_s5_d2"
    },
    {
      "source": "gpu_root_p7",
      "target": "gpu_root_p7_t3"
    },
    {
      "source": "gpu_root_p7_t3",
      "target": "gpu_root_p7_t3_s1"
    },
    {
      "source": "gpu_root_p7_t3_s1",
      "target": "gpu_root_p7_t3_s1_d1"
    },
    {
      "source": "gpu_root_p7_t3_s1",
      "target": "gpu_root_p7_t3_s1_d2"
    },
    {
      "source": "gpu_root_p7_t3",
      "target": "gpu_root_p7_t3_s2"
    },
    {
      "source": "gpu_root_p7_t3_s2",
      "target": "gpu_root_p7_t3_s2_d1"
    },
    {
      "source": "gpu_root_p7_t3_s2",
      "target": "gpu_root_p7_t3_s2_d2"
    },
    {
      "source": "gpu_root_p7_t3",
      "target": "gpu_root_p7_t3_s3"
    },
    {
      "source": "gpu_root_p7_t3_s3",
      "target": "gpu_root_p7_t3_s3_d1"
    },
    {
      "source": "gpu_root_p7_t3_s3",
      "target": "gpu_root_p7_t3_s3_d2"
    },
    {
      "source": "gpu_root_p7_t3",
      "target": "gpu_root_p7_t3_s4"
    },
    {
      "source": "gpu_root_p7_t3_s4",
      "target": "gpu_root_p7_t3_s4_d1"
    },
    {
      "source": "gpu_root_p7_t3_s4",
      "target": "gpu_root_p7_t3_s4_d2"
    },
    {
      "source": "gpu_root_p7_t3",
      "target": "gpu_root_p7_t3_s5"
    },
    {
      "source": "gpu_root_p7_t3_s5",
      "target": "gpu_root_p7_t3_s5_d1"
    },
    {
      "source": "gpu_root_p7_t3_s5",
      "target": "gpu_root_p7_t3_s5_d2"
    },
    {
      "source": "gpu_root_p7",
      "target": "gpu_root_p7_t4"
    },
    {
      "source": "gpu_root_p7_t4",
      "target": "gpu_root_p7_t4_s1"
    },
    {
      "source": "gpu_root_p7_t4_s1",
      "target": "gpu_root_p7_t4_s1_d1"
    },
    {
      "source": "gpu_root_p7_t4_s1",
      "target": "gpu_root_p7_t4_s1_d2"
    },
    {
      "source": "gpu_root_p7_t4",
      "target": "gpu_root_p7_t4_s2"
    },
    {
      "source": "gpu_root_p7_t4_s2",
      "target": "gpu_root_p7_t4_s2_d1"
    },
    {
      "source": "gpu_root_p7_t4_s2",
      "target": "gpu_root_p7_t4_s2_d2"
    },
    {
      "source": "gpu_root_p7_t4",
      "target": "gpu_root_p7_t4_s3"
    },
    {
      "source": "gpu_root_p7_t4_s3",
      "target": "gpu_root_p7_t4_s3_d1"
    },
    {
      "source": "gpu_root_p7_t4_s3",
      "target": "gpu_root_p7_t4_s3_d2"
    },
    {
      "source": "gpu_root_p7_t4",
      "target": "gpu_root_p7_t4_s4"
    },
    {
      "source": "gpu_root_p7_t4_s4",
      "target": "gpu_root_p7_t4_s4_d1"
    },
    {
      "source": "gpu_root_p7_t4_s4",
      "target": "gpu_root_p7_t4_s4_d2"
    },
    {
      "source": "gpu_root_p7_t4",
      "target": "gpu_root_p7_t4_s5"
    },
    {
      "source": "gpu_root_p7_t4_s5",
      "target": "gpu_root_p7_t4_s5_d1"
    },
    {
      "source": "gpu_root_p7_t4_s5",
      "target": "gpu_root_p7_t4_s5_d2"
    },
    {
      "source": "gpu_root_p7",
      "target": "gpu_root_p7_t5"
    },
    {
      "source": "gpu_root_p7_t5",
      "target": "gpu_root_p7_t5_s1"
    },
    {
      "source": "gpu_root_p7_t5_s1",
      "target": "gpu_root_p7_t5_s1_d1"
    },
    {
      "source": "gpu_root_p7_t5_s1",
      "target": "gpu_root_p7_t5_s1_d2"
    },
    {
      "source": "gpu_root_p7_t5",
      "target": "gpu_root_p7_t5_s2"
    },
    {
      "source": "gpu_root_p7_t5_s2",
      "target": "gpu_root_p7_t5_s2_d1"
    },
    {
      "source": "gpu_root_p7_t5_s2",
      "target": "gpu_root_p7_t5_s2_d2"
    },
    {
      "source": "gpu_root_p7_t5",
      "target": "gpu_root_p7_t5_s3"
    },
    {
      "source": "gpu_root_p7_t5_s3",
      "target": "gpu_root_p7_t5_s3_d1"
    },
    {
      "source": "gpu_root_p7_t5_s3",
      "target": "gpu_root_p7_t5_s3_d2"
    },
    {
      "source": "gpu_root_p7_t5",
      "target": "gpu_root_p7_t5_s4"
    },
    {
      "source": "gpu_root_p7_t5_s4",
      "target": "gpu_root_p7_t5_s4_d1"
    },
    {
      "source": "gpu_root_p7_t5_s4",
      "target": "gpu_root_p7_t5_s4_d2"
    },
    {
      "source": "gpu_root_p7_t5",
      "target": "gpu_root_p7_t5_s5"
    },
    {
      "source": "gpu_root_p7_t5_s5",
      "target": "gpu_root_p7_t5_s5_d1"
    },
    {
      "source": "gpu_root_p7_t5_s5",
      "target": "gpu_root_p7_t5_s5_d2"
    },
    {
      "source": "gpu_root_p7",
      "target": "gpu_root_p7_t6"
    },
    {
      "source": "gpu_root_p7_t6",
      "target": "gpu_root_p7_t6_s1"
    },
    {
      "source": "gpu_root_p7_t6_s1",
      "target": "gpu_root_p7_t6_s1_d1"
    },
    {
      "source": "gpu_root_p7_t6_s1",
      "target": "gpu_root_p7_t6_s1_d2"
    },
    {
      "source": "gpu_root_p7_t6",
      "target": "gpu_root_p7_t6_s2"
    },
    {
      "source": "gpu_root_p7_t6_s2",
      "target": "gpu_root_p7_t6_s2_d1"
    },
    {
      "source": "gpu_root_p7_t6_s2",
      "target": "gpu_root_p7_t6_s2_d2"
    },
    {
      "source": "gpu_root_p7_t6",
      "target": "gpu_root_p7_t6_s3"
    },
    {
      "source": "gpu_root_p7_t6_s3",
      "target": "gpu_root_p7_t6_s3_d1"
    },
    {
      "source": "gpu_root_p7_t6_s3",
      "target": "gpu_root_p7_t6_s3_d2"
    },
    {
      "source": "gpu_root_p7_t6",
      "target": "gpu_root_p7_t6_s4"
    },
    {
      "source": "gpu_root_p7_t6_s4",
      "target": "gpu_root_p7_t6_s4_d1"
    },
    {
      "source": "gpu_root_p7_t6_s4",
      "target": "gpu_root_p7_t6_s4_d2"
    },
    {
      "source": "gpu_root_p7_t6",
      "target": "gpu_root_p7_t6_s5"
    },
    {
      "source": "gpu_root_p7_t6_s5",
      "target": "gpu_root_p7_t6_s5_d1"
    },
    {
      "source": "gpu_root_p7_t6_s5",
      "target": "gpu_root_p7_t6_s5_d2"
    },
    {
      "source": "gpu_root",
      "target": "gpu_root_p8"
    },
    {
      "source": "gpu_root_p8",
      "target": "gpu_root_p8_t1"
    },
    {
      "source": "gpu_root_p8_t1",
      "target": "gpu_root_p8_t1_s1"
    },
    {
      "source": "gpu_root_p8_t1_s1",
      "target": "gpu_root_p8_t1_s1_d1"
    },
    {
      "source": "gpu_root_p8_t1_s1",
      "target": "gpu_root_p8_t1_s1_d2"
    },
    {
      "source": "gpu_root_p8_t1",
      "target": "gpu_root_p8_t1_s2"
    },
    {
      "source": "gpu_root_p8_t1_s2",
      "target": "gpu_root_p8_t1_s2_d1"
    },
    {
      "source": "gpu_root_p8_t1_s2",
      "target": "gpu_root_p8_t1_s2_d2"
    },
    {
      "source": "gpu_root_p8_t1",
      "target": "gpu_root_p8_t1_s3"
    },
    {
      "source": "gpu_root_p8_t1_s3",
      "target": "gpu_root_p8_t1_s3_d1"
    },
    {
      "source": "gpu_root_p8_t1_s3",
      "target": "gpu_root_p8_t1_s3_d2"
    },
    {
      "source": "gpu_root_p8_t1",
      "target": "gpu_root_p8_t1_s4"
    },
    {
      "source": "gpu_root_p8_t1_s4",
      "target": "gpu_root_p8_t1_s4_d1"
    },
    {
      "source": "gpu_root_p8_t1_s4",
      "target": "gpu_root_p8_t1_s4_d2"
    },
    {
      "source": "gpu_root_p8_t1",
      "target": "gpu_root_p8_t1_s5"
    },
    {
      "source": "gpu_root_p8_t1_s5",
      "target": "gpu_root_p8_t1_s5_d1"
    },
    {
      "source": "gpu_root_p8_t1_s5",
      "target": "gpu_root_p8_t1_s5_d2"
    },
    {
      "source": "gpu_root_p8",
      "target": "gpu_root_p8_t2"
    },
    {
      "source": "gpu_root_p8_t2",
      "target": "gpu_root_p8_t2_s1"
    },
    {
      "source": "gpu_root_p8_t2_s1",
      "target": "gpu_root_p8_t2_s1_d1"
    },
    {
      "source": "gpu_root_p8_t2_s1",
      "target": "gpu_root_p8_t2_s1_d2"
    },
    {
      "source": "gpu_root_p8_t2",
      "target": "gpu_root_p8_t2_s2"
    },
    {
      "source": "gpu_root_p8_t2_s2",
      "target": "gpu_root_p8_t2_s2_d1"
    },
    {
      "source": "gpu_root_p8_t2_s2",
      "target": "gpu_root_p8_t2_s2_d2"
    },
    {
      "source": "gpu_root_p8_t2",
      "target": "gpu_root_p8_t2_s3"
    },
    {
      "source": "gpu_root_p8_t2_s3",
      "target": "gpu_root_p8_t2_s3_d1"
    },
    {
      "source": "gpu_root_p8_t2_s3",
      "target": "gpu_root_p8_t2_s3_d2"
    },
    {
      "source": "gpu_root_p8_t2",
      "target": "gpu_root_p8_t2_s4"
    },
    {
      "source": "gpu_root_p8_t2_s4",
      "target": "gpu_root_p8_t2_s4_d1"
    },
    {
      "source": "gpu_root_p8_t2_s4",
      "target": "gpu_root_p8_t2_s4_d2"
    },
    {
      "source": "gpu_root_p8_t2",
      "target": "gpu_root_p8_t2_s5"
    },
    {
      "source": "gpu_root_p8_t2_s5",
      "target": "gpu_root_p8_t2_s5_d1"
    },
    {
      "source": "gpu_root_p8_t2_s5",
      "target": "gpu_root_p8_t2_s5_d2"
    },
    {
      "source": "gpu_root_p8",
      "target": "gpu_root_p8_t3"
    },
    {
      "source": "gpu_root_p8_t3",
      "target": "gpu_root_p8_t3_s1"
    },
    {
      "source": "gpu_root_p8_t3_s1",
      "target": "gpu_root_p8_t3_s1_d1"
    },
    {
      "source": "gpu_root_p8_t3_s1",
      "target": "gpu_root_p8_t3_s1_d2"
    },
    {
      "source": "gpu_root_p8_t3",
      "target": "gpu_root_p8_t3_s2"
    },
    {
      "source": "gpu_root_p8_t3_s2",
      "target": "gpu_root_p8_t3_s2_d1"
    },
    {
      "source": "gpu_root_p8_t3_s2",
      "target": "gpu_root_p8_t3_s2_d2"
    },
    {
      "source": "gpu_root_p8_t3",
      "target": "gpu_root_p8_t3_s3"
    },
    {
      "source": "gpu_root_p8_t3_s3",
      "target": "gpu_root_p8_t3_s3_d1"
    },
    {
      "source": "gpu_root_p8_t3_s3",
      "target": "gpu_root_p8_t3_s3_d2"
    },
    {
      "source": "gpu_root_p8_t3",
      "target": "gpu_root_p8_t3_s4"
    },
    {
      "source": "gpu_root_p8_t3_s4",
      "target": "gpu_root_p8_t3_s4_d1"
    },
    {
      "source": "gpu_root_p8_t3_s4",
      "target": "gpu_root_p8_t3_s4_d2"
    },
    {
      "source": "gpu_root_p8_t3",
      "target": "gpu_root_p8_t3_s5"
    },
    {
      "source": "gpu_root_p8_t3_s5",
      "target": "gpu_root_p8_t3_s5_d1"
    },
    {
      "source": "gpu_root_p8_t3_s5",
      "target": "gpu_root_p8_t3_s5_d2"
    },
    {
      "source": "gpu_root_p8",
      "target": "gpu_root_p8_t4"
    },
    {
      "source": "gpu_root_p8_t4",
      "target": "gpu_root_p8_t4_s1"
    },
    {
      "source": "gpu_root_p8_t4_s1",
      "target": "gpu_root_p8_t4_s1_d1"
    },
    {
      "source": "gpu_root_p8_t4_s1",
      "target": "gpu_root_p8_t4_s1_d2"
    },
    {
      "source": "gpu_root_p8_t4",
      "target": "gpu_root_p8_t4_s2"
    },
    {
      "source": "gpu_root_p8_t4_s2",
      "target": "gpu_root_p8_t4_s2_d1"
    },
    {
      "source": "gpu_root_p8_t4_s2",
      "target": "gpu_root_p8_t4_s2_d2"
    },
    {
      "source": "gpu_root_p8_t4",
      "target": "gpu_root_p8_t4_s3"
    },
    {
      "source": "gpu_root_p8_t4_s3",
      "target": "gpu_root_p8_t4_s3_d1"
    },
    {
      "source": "gpu_root_p8_t4_s3",
      "target": "gpu_root_p8_t4_s3_d2"
    },
    {
      "source": "gpu_root_p8_t4",
      "target": "gpu_root_p8_t4_s4"
    },
    {
      "source": "gpu_root_p8_t4_s4",
      "target": "gpu_root_p8_t4_s4_d1"
    },
    {
      "source": "gpu_root_p8_t4_s4",
      "target": "gpu_root_p8_t4_s4_d2"
    },
    {
      "source": "gpu_root_p8_t4",
      "target": "gpu_root_p8_t4_s5"
    },
    {
      "source": "gpu_root_p8_t4_s5",
      "target": "gpu_root_p8_t4_s5_d1"
    },
    {
      "source": "gpu_root_p8_t4_s5",
      "target": "gpu_root_p8_t4_s5_d2"
    },
    {
      "source": "gpu_root_p8",
      "target": "gpu_root_p8_t5"
    },
    {
      "source": "gpu_root_p8_t5",
      "target": "gpu_root_p8_t5_s1"
    },
    {
      "source": "gpu_root_p8_t5_s1",
      "target": "gpu_root_p8_t5_s1_d1"
    },
    {
      "source": "gpu_root_p8_t5_s1",
      "target": "gpu_root_p8_t5_s1_d2"
    },
    {
      "source": "gpu_root_p8_t5",
      "target": "gpu_root_p8_t5_s2"
    },
    {
      "source": "gpu_root_p8_t5_s2",
      "target": "gpu_root_p8_t5_s2_d1"
    },
    {
      "source": "gpu_root_p8_t5_s2",
      "target": "gpu_root_p8_t5_s2_d2"
    },
    {
      "source": "gpu_root_p8_t5",
      "target": "gpu_root_p8_t5_s3"
    },
    {
      "source": "gpu_root_p8_t5_s3",
      "target": "gpu_root_p8_t5_s3_d1"
    },
    {
      "source": "gpu_root_p8_t5_s3",
      "target": "gpu_root_p8_t5_s3_d2"
    },
    {
      "source": "gpu_root_p8_t5",
      "target": "gpu_root_p8_t5_s4"
    },
    {
      "source": "gpu_root_p8_t5_s4",
      "target": "gpu_root_p8_t5_s4_d1"
    },
    {
      "source": "gpu_root_p8_t5_s4",
      "target": "gpu_root_p8_t5_s4_d2"
    },
    {
      "source": "gpu_root_p8_t5",
      "target": "gpu_root_p8_t5_s5"
    },
    {
      "source": "gpu_root_p8_t5_s5",
      "target": "gpu_root_p8_t5_s5_d1"
    },
    {
      "source": "gpu_root_p8_t5_s5",
      "target": "gpu_root_p8_t5_s5_d2"
    },
    {
      "source": "gpu_root_p8",
      "target": "gpu_root_p8_t6"
    },
    {
      "source": "gpu_root_p8_t6",
      "target": "gpu_root_p8_t6_s1"
    },
    {
      "source": "gpu_root_p8_t6_s1",
      "target": "gpu_root_p8_t6_s1_d1"
    },
    {
      "source": "gpu_root_p8_t6_s1",
      "target": "gpu_root_p8_t6_s1_d2"
    },
    {
      "source": "gpu_root_p8_t6",
      "target": "gpu_root_p8_t6_s2"
    },
    {
      "source": "gpu_root_p8_t6_s2",
      "target": "gpu_root_p8_t6_s2_d1"
    },
    {
      "source": "gpu_root_p8_t6_s2",
      "target": "gpu_root_p8_t6_s2_d2"
    },
    {
      "source": "gpu_root_p8_t6",
      "target": "gpu_root_p8_t6_s3"
    },
    {
      "source": "gpu_root_p8_t6_s3",
      "target": "gpu_root_p8_t6_s3_d1"
    },
    {
      "source": "gpu_root_p8_t6_s3",
      "target": "gpu_root_p8_t6_s3_d2"
    },
    {
      "source": "gpu_root_p8_t6",
      "target": "gpu_root_p8_t6_s4"
    },
    {
      "source": "gpu_root_p8_t6_s4",
      "target": "gpu_root_p8_t6_s4_d1"
    },
    {
      "source": "gpu_root_p8_t6_s4",
      "target": "gpu_root_p8_t6_s4_d2"
    },
    {
      "source": "gpu_root_p8_t6",
      "target": "gpu_root_p8_t6_s5"
    },
    {
      "source": "gpu_root_p8_t6_s5",
      "target": "gpu_root_p8_t6_s5_d1"
    },
    {
      "source": "gpu_root_p8_t6_s5",
      "target": "gpu_root_p8_t6_s5_d2"
    }
  ]
};
