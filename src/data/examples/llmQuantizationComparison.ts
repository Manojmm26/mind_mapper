import { ComparisonWorkspaceData } from "../../services/llmService";

export const LLM_QUANTIZATION_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "LLM Quantization Formats: AWQ vs GPTQ vs GGUF vs FP8 / INT4",
  "domainType": "concepts",
  "overview": "An AI inference engineering evaluation comparing weight-only quantization formats (AWQ vs GPTQ vs GGUF) on perplexity loss, VRAM savings, CPU/GPU runtime speed, and hardware compatibility.",
  "recommendedApproach": "Use GGUF for CPU + GPU offloading on consumer Mac/PC via Ollama/llama.cpp; use AWQ or FP8 for high-throughput GPU inference serving on vLLM.",
  "criteria": [
    {
      "id": "c1",
      "label": "Perplexity Quality Retention (vs FP16)",
      "type": "text",
      "description": "Minimal accuracy loss on LLM benchmarks compared to raw FP16 weights."
    },
    {
      "id": "c2",
      "label": "VRAM Reduction Ratio (16-bit to 4-bit)",
      "type": "text",
      "description": "Compressing 70B models from 140GB VRAM down to ~38GB VRAM."
    },
    {
      "id": "c3",
      "label": "CPU & Apple Silicon Execution (llama.cpp)",
      "type": "text",
      "description": "Running quantized models on CPU RAM and Metal Unified Memory."
    },
    {
      "id": "c4",
      "label": "High-Throughput GPU Serving Speed (vLLM / TensorRT)",
      "type": "text",
      "description": "Serving speed under batching on NVIDIA H100 / A100 GPUs."
    },
    {
      "id": "c5",
      "label": "Quantization Calibration Time & Complexity",
      "type": "text",
      "description": "Time required to calibrate and convert FP16 weights to 4-bit."
    },
    {
      "id": "c6",
      "label": "Hardware Support (NVIDIA, Apple, AMD, Intel)",
      "type": "text",
      "description": "Compatibility across GPU and CPU vendor architectures."
    }
  ],
  "options": [
    {
      "id": "gguf",
      "name": "GGUF (llama.cpp)",
      "summary": "The universal file format for storing quantized models for CPU and Apple Silicon offloading via llama.cpp.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High (Q4_K_M / Q8_0)",
          "note": "Q4_K_M and Q5_K_M quantization levels retain over 98% of FP16 perplexity quality."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Flexible 2-bit to 8-bit)",
          "note": "Offers granular K-quants (Q2_K to Q8_0) to fit exact hardware VRAM/RAM budgets."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (llama.cpp / Metal)",
          "note": "Built specifically for llama.cpp, Ollama, LM Studio, and Apple Silicon Metal acceleration."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Moderate GPU Serving",
          "note": "Great for single-user local inference; vLLM supports GGUF parsing."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Fast Conversion",
          "note": "llama.cpp convert.py tool converts models rapidly."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Universal (CPU/GPU/Mac)",
          "note": "Runs on macOS, Linux, Windows, Raspberry Pi, and Android."
        }
      },
      "tags": [
        "GGUF",
        "llama.cpp",
        "Ollama",
        "Apple Silicon",
        "CPU Offloading"
      ]
    },
    {
      "id": "awq",
      "name": "AWQ (Activation-aware Weight Quantization)",
      "summary": "Activation-aware weight quantization method protecting important weights for fast GPU inference.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Superior Quality Protection",
          "note": "Protects top 1% salient weights based on activation channels, minimizing quality degradation."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "4-bit VRAM Savings",
          "note": "Cuts VRAM usage by 70% compared to FP16."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "GPU Focused",
          "note": "Designed specifically for GPU tensor cores."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class (vLLM / TensorRT)",
          "note": "Native vLLM PagedAttention AWQ kernel delivers maximum token generation throughput."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Requires Calibration Dataset",
          "note": "Uses small calibration dataset to observe activation channels."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "NVIDIA & AMD GPUs",
          "note": "Optimized for CUDA and ROCm GPU architectures."
        }
      },
      "tags": [
        "AWQ",
        "vLLM",
        "GPU Serving",
        "Activation-Aware",
        "4-bit"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose GGUF (Q4_K_M) for local desktop testing via Ollama and Apple Silicon Mac Studio.",
    "Choose AWQ 4-bit for production serverless LLM serving on NVIDIA GPUs using vLLM.",
    "Audit model perplexity and benchmark tokens/sec before deploying quantized weights."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "LLM Quantization Selection",
        "description": "Choosing the LLM weight quantization format."
      },
      {
        "id": "p1",
        "label": "Desktop Mac/PC CPU+GPU Offloading (GGUF)",
        "description": "Need universal GGUF format for Ollama, LM Studio, and llama.cpp Metal acceleration."
      },
      {
        "id": "p2",
        "label": "Production Server GPU Serving Speed (AWQ)",
        "description": "Need activation-aware 4-bit quantization for high-throughput vLLM serving on NVIDIA GPUs."
      },
      {
        "id": "e1",
        "label": "GGUF",
        "description": "Universal file format for llama.cpp CPU/GPU offloading."
      },
      {
        "id": "e2",
        "label": "AWQ",
        "description": "Activation-aware weight quantization optimized for vLLM."
      }
    ],
    "edges": [
      {
        "source": "root",
        "target": "p1"
      },
      {
        "source": "root",
        "target": "p2"
      },
      {
        "source": "p1",
        "target": "e1"
      },
      {
        "source": "p2",
        "target": "e2"
      }
    ]
  }
};
