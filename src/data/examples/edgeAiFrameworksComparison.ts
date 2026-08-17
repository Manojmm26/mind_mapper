import { ComparisonWorkspaceData } from "../../services/llmService";

export const EDGE_AI_FRAMEWORKS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Edge AI & On-Device LLM Inference: ONNX Runtime vs MLC LLM (WebGPU) vs Apple MLX vs TensorRT-Edge",
  "domainType": "tools",
  "overview": "An on-device AI engineering evaluation comparing WebGPU browser execution (MLC LLM), Apple Silicon Unified Memory hardware acceleration (MLX), cross-platform ONNX runtime execution, and mobile latency.",
  "recommendedApproach": "Use MLC LLM for zero-backend WebGPU in-browser LLM execution; use Apple MLX for local Mac/iOS LLM research; use ONNX Runtime for universal cross-platform edge models.",
  "criteria": [
    {
      "id": "c1",
      "label": "Execution Environment (Browser WebGPU vs Native Mobile)",
      "type": "text",
      "description": "Running inside web browser WebGPU sandbox vs native C++/Metal executable."
    },
    {
      "id": "c2",
      "label": "Hardware Acceleration (Metal / Vulkan / CUDA / NPU)",
      "type": "text",
      "description": "Leveraging Apple Unified Memory Metal, Vulkan, or Android NPU acceleration."
    },
    {
      "id": "c3",
      "label": "Quantization (int4 / int8 GGUF / AWQ)",
      "type": "text",
      "description": "Compressing 7B models down to 3.5GB RAM footprint for mobile execution."
    },
    {
      "id": "c4",
      "label": "Cross-Platform Model Export (PyTorch / Safetensors)",
      "type": "text",
      "description": "Converting Hugging Face PyTorch models into edge runtimes."
    },
    {
      "id": "c5",
      "label": "Tokens-per-Second Generation Speed",
      "type": "text",
      "description": "On-device token generation speed (tokens/sec)."
    },
    {
      "id": "c6",
      "label": "Privacy & Zero Server Cost",
      "type": "text",
      "description": "Processing user data 100% on-device without cloud API calls."
    }
  ],
  "options": [
    {
      "id": "mlc-llm",
      "name": "MLC LLM (WebGPU)",
      "summary": "Universal solution that allows any language model to be deployed natively on-device via WebGPU and TVM.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (WebGPU)",
          "note": "Executes LLMs directly in web browsers via WebGPU without any server backend."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Vulkan / Metal / WebGPU",
          "note": "Uses Apache TVM compiler to target WebGPU, Metal, Vulkan, and OpenCL."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Native 4-bit Quantization",
          "note": "Efficient 4-bit quantization allows Llama 3 8B to run smoothly on laptops and phones."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Hugging Face Model Export",
          "note": "Converts Hugging Face weights automatically."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "30+ Tokens / sec",
          "note": "High token generation throughput in browser."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "100% On-Device Privacy",
          "note": "User data never leaves the web browser."
        }
      },
      "tags": [
        "MLC LLM",
        "WebGPU",
        "In-Browser AI",
        "Apache TVM",
        "Privacy"
      ]
    },
    {
      "id": "apple-mlx",
      "name": "Apple MLX",
      "summary": "An array framework for machine learning research on Apple Silicon from Apple Machine Learning Research.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Mac & iOS Native",
          "note": "Designed specifically for Apple Silicon M-series chips and iOS."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Unified Memory)",
          "note": "Leverages Apple Silicon Unified Memory Architecture (UMA) for massive RAM bandwidth."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "MLX 4-bit / 8-bit",
          "note": "Native quantization tools for fast model loads."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "PyTorch-Like API",
          "note": "Familiar PyTorch-like Python and C++ APIs."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Blazing Fast (Mac)",
          "note": "Peak tokens/sec on Mac Studio and MacBook Pro."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Apple Open-Source",
          "note": "Open-source library created by Apple."
        }
      },
      "tags": [
        "Apple MLX",
        "Apple Silicon",
        "Metal",
        "Unified Memory",
        "Mac"
      ]
    },
    {
      "id": "onnx-runtime",
      "name": "ONNX Runtime Edge",
      "summary": "Cross-platform inference engine from Microsoft for running optimized ML models on-device.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Universal Cross-Platform",
          "note": "Runs on iOS, Android, Windows, WebAssembly, and Linux."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Execution Providers",
          "note": "Pluggable Execution Providers for CoreML, DirectML, NNAPI, and CUDA."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "ONNX Quantization",
          "note": "Converts models to int8 ONNX representations."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Universal Format",
          "note": "Pioneered open ONNX model format supported by PyTorch and TensorFlow."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "High",
          "note": "Optimized execution graphs."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "MIT License",
          "note": "Open-source project from Microsoft."
        }
      },
      "tags": [
        "ONNX Runtime",
        "Microsoft",
        "Universal",
        "Cross-Platform",
        "Edge"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use MLC LLM (WebGPU) for zero-backend in-browser AI features.",
    "Use Apple MLX for maximum performance on Apple Silicon M-series hardware.",
    "Use ONNX Runtime for universal cross-platform mobile app deployments."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Edge AI Framework Selection",
        "description": "Choosing the on-device AI inference engine."
      },
      {
        "id": "p1",
        "label": "Zero-Backend In-Browser WebGPU LLM Execution",
        "description": "Need to run LLMs directly inside web browsers using WebGPU."
      },
      {
        "id": "p2",
        "label": "Apple Silicon Unified Memory Hardware Acceleration",
        "description": "Need maximum inference throughput on Mac and iOS hardware using Metal."
      },
      {
        "id": "p3",
        "label": "Universal Cross-Platform Mobile & Desktop Execution",
        "description": "Need ONNX format for running models on iOS, Android, Windows, and Web."
      },
      {
        "id": "e1",
        "label": "MLC LLM",
        "description": "In-browser WebGPU LLM inference framework."
      },
      {
        "id": "e2",
        "label": "Apple MLX",
        "description": "Apple Silicon optimized array framework."
      },
      {
        "id": "e3",
        "label": "ONNX Runtime",
        "description": "Universal cross-platform ONNX inference engine."
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
      }
    ]
  }
};
