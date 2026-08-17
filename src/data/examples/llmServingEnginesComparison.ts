import { ComparisonWorkspaceData } from "../../services/llmService";

export const LLM_SERVING_ENGINES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "LLM Inference & Model Serving Engines: vLLM vs TGI vs Ollama vs TensorRT-LLM vs Triton",
  "domainType": "tools",
  "overview": "A deep technical evaluation of LLM inference engines comparing PagedAttention memory management, continuous batching, GPU kernel optimization, quantization, and throughput.",
  "recommendedApproach": "Use vLLM for high-throughput multi-user production serving; use Ollama for frictionless local developer prototyping; use TensorRT-LLM for maximum NVIDIA hardware throughput.",
  "criteria": [
    {
      "id": "c1",
      "label": "KV Cache Memory Management (PagedAttention)",
      "type": "text",
      "description": "Virtual memory allocation for Key-Value caches preventing GPU memory fragmentation."
    },
    {
      "id": "c2",
      "label": "Continuous Batching & Token Throughput",
      "type": "text",
      "description": "Iteration-level scheduling maximizing GPU tensor core utilization."
    },
    {
      "id": "c3",
      "label": "Quantization Support (AWQ, GPTQ, FP8, GGUF)",
      "type": "text",
      "description": "Low-precision inference options (4-bit, 8-bit, FP8) to fit large models into VRAM."
    },
    {
      "id": "c4",
      "label": "OpenAI API Specification Compatibility",
      "type": "text",
      "description": "Drop-in REST API compatibility with /v1/chat/completions endpoints."
    },
    {
      "id": "c5",
      "label": "Developer Simplicity vs Hardware Customization",
      "type": "text",
      "description": "One-line CLI setup vs complex C++/NVIDIA CUDNN compilation."
    },
    {
      "id": "c6",
      "label": "Hardware Support (NVIDIA, AMD ROCm, Apple Silicon)",
      "type": "text",
      "description": "Multi-GPU tensor parallelism and cross-hardware backend support."
    }
  ],
  "options": [
    {
      "id": "vllm",
      "name": "vLLM (UC Berkeley)",
      "summary": "High-throughput, easy-to-use open-source LLM serving engine featuring PagedAttention.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Pioneer (PagedAttention)",
          "note": "PagedAttention reduces KV cache memory waste to under 4%, boosting throughput by 2-4x."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Industry Leading",
          "note": "Iteration-level continuous batching schedules requests dynamically."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Broad (AWQ, GPTQ, FP8)",
          "note": "Supports AWQ, GPTQ, SqueezeLLM, and native FP8 execution on H100s."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "100% Drop-In OpenAI API",
          "note": "Exposes standard /v1/chat/completions and /v1/completions HTTP endpoints."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "High Developer Velocity",
          "note": "Install via pip and launch server with 'vllm serve model-name'."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "NVIDIA & AMD ROCm",
          "note": "First-class support for NVIDIA GPUs and growing AMD ROCm support."
        }
      },
      "tags": [
        "PagedAttention",
        "High-Throughput",
        "OpenAI-API",
        "Standard"
      ]
    },
    {
      "id": "ollama",
      "name": "Ollama",
      "summary": "Frictionless tool to bundle, run, and manage open-source LLMs locally on macOS, Linux, and Windows.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "llama.cpp Engine",
          "note": "Uses llama.cpp KV memory management optimized for consumer hardware."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Single / Multi-User",
          "note": "Optimized for local developer iteration and desktop assistant execution."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "GGUF Quantization",
          "note": "Runs 2-bit through 8-bit GGUF quantized models effortlessly."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "OpenAI Compatible",
          "note": "Exposes native Ollama API plus /v1/chat/completions compatibility."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class Simplicity",
          "note": "'ollama run llama3' downloads, quantizes, and starts interactive chat in seconds."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Apple Silicon & NVIDIA",
          "note": "Outstanding Metal GPU acceleration on Mac M1/M2/M3/M4 chips."
        }
      },
      "tags": [
        "Local AI",
        "Apple Silicon",
        "llama.cpp",
        "GGUF"
      ]
    },
    {
      "id": "tensorrt-llm",
      "name": "NVIDIA TensorRT-LLM",
      "summary": "NVIDIA's official C++ library for compiling and maximizing LLM inference performance on NVIDIA GPUs.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Custom Paged KV Cache",
          "note": "Deeply optimized TensorRT KV memory management."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Maximum Hardware Speed",
          "note": "Custom CUDA kernels and In-Flight Batching deliver maximum token generation per second."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Advanced (FP8 / SmoothQuant)",
          "note": "Native FP8 and INT4 AWQ execution tailored for Hopper (H100/H200) architecture."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Via Triton Server",
          "note": "Integrates with Triton Inference Server for OpenAI API schemas."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "High Complexity",
          "note": "Requires compiling engine binaries (.engine) for specific GPU target architectures."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "NVIDIA Exclusive",
          "note": "Purpose-built exclusively for NVIDIA GPU hardware."
        }
      },
      "tags": [
        "NVIDIA",
        "TensorRT",
        "C++",
        "Maximum-Performance"
      ]
    },
    {
      "id": "tgi",
      "name": "Hugging Face TGI (Text Generation Inference)",
      "summary": "Production-tested LLM serving solution developed by Hugging Face.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Paged Attention + FlashAttention-2",
          "note": "Integrates FlashAttention-2 and custom PagedAttention memory pools."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very High",
          "note": "Continuous batching and token streaming over gRPC / HTTP."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "EETQ, AWQ, BitsAndBytes",
          "note": "Direct support for Hugging Face Hub quantized weights."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "OpenAI Compatible",
          "note": "Standard HTTP API matching OpenAI endpoint specifications."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Container Ready",
          "note": "Official Docker containers for instant cloud deployment."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "NVIDIA & Gaudi",
          "note": "Supports NVIDIA GPUs and Intel Gaudi accelerators."
        }
      },
      "tags": [
        "Hugging Face",
        "Production",
        "FlashAttention",
        "Docker"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use Ollama for local development, testing open-source models (Llama 3, Mistral, Qwen) on laptops.",
    "Deploy vLLM in production Kubernetes clusters for maximum multi-user token throughput.",
    "Compile models with TensorRT-LLM if running large-scale NVIDIA H100 GPU clusters.",
    "Enable FP8 quantization on H100/H200 GPUs to double token throughput while maintaining accuracy."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "LLM Serving Engine Selection",
        "description": "Choosing the inference server for open-source large language models."
      },
      {
        "id": "p1",
        "label": "High-Throughput Production Microservices",
        "description": "Need PagedAttention, continuous batching, and drop-in OpenAI API compatibility."
      },
      {
        "id": "p2",
        "label": "Local Developer Prototyping (Mac/PC)",
        "description": "Need one-click local model downloading and execution on Apple Silicon or consumer GPUs."
      },
      {
        "id": "p3",
        "label": "Maximum NVIDIA Hardware Benchmark Speed",
        "description": "Need custom CUDA kernels compiled specifically for NVIDIA H100/A100 clusters."
      },
      {
        "id": "p4",
        "label": "Hugging Face Ecosystem Integration",
        "description": "Deploying models directly from Hugging Face Hub using official containers."
      },
      {
        "id": "e1",
        "label": "vLLM",
        "description": "UC Berkeley open-source engine powered by PagedAttention."
      },
      {
        "id": "e2",
        "label": "Ollama",
        "description": "Frictionless local LLM manager based on llama.cpp."
      },
      {
        "id": "e3",
        "label": "NVIDIA TensorRT-LLM",
        "description": "NVIDIA compiled C++ engine for peak CUDA performance."
      },
      {
        "id": "e4",
        "label": "Hugging Face TGI",
        "description": "Production container serving framework built for HF Hub."
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
        "source": "root",
        "target": "p3"
      },
      {
        "source": "root",
        "target": "p4"
      },
      {
        "source": "p1",
        "target": "e1"
      },
      {
        "source": "p2",
        "target": "e2"
      },
      {
        "source": "p3",
        "target": "e3"
      },
      {
        "source": "p4",
        "target": "e4"
      }
    ]
  }
};
