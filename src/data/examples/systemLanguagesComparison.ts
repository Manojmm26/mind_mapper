import { ComparisonWorkspaceData } from "../../services/llmService";

export const SYSTEM_LANGUAGES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Systems Programming Languages: Rust vs Go vs C++20 vs Zig",
  "domainType": "concepts",
  "overview": "A low-level systems engineering comparison evaluating memory safety mechanisms (borrow checker vs GC vs manual vs comptime), concurrency models, compilation speed, and C interop.",
  "recommendedApproach": "Use Rust for memory-safe high-performance systems and WebAssembly; use Go for cloud-native microservices and Kubernetes tooling; use Zig for lightweight C-replacement.",
  "criteria": [
    {
      "id": "c1",
      "label": "Memory Safety Model (Borrow Checker vs GC vs Manual)",
      "type": "text",
      "description": "Compile-time ownership/lifetimes vs garbage collection vs manual allocators."
    },
    {
      "id": "c2",
      "label": "Concurrency Primitives (Async/Await vs Goroutines)",
      "type": "text",
      "description": "Zero-cost async futures vs CSP goroutine channels."
    },
    {
      "id": "c3",
      "label": "Compilation Speed & Developer Velocity",
      "type": "text",
      "description": "Instant compilation speed vs heavy generic macro compiler passes."
    },
    {
      "id": "c4",
      "label": "C Interoperability & ABI Compatibility",
      "type": "text",
      "description": "Direct C header compilation and zero-overhead C calling conventions."
    },
    {
      "id": "c5",
      "label": "Runtime Overhead & Garbage Collection Pauses",
      "type": "text",
      "description": "Zero runtime footprint vs lightweight GC runtime."
    },
    {
      "id": "c6",
      "label": "Ecosystem & Industry Adoption",
      "type": "text",
      "description": "Adoption across Linux kernel, Kubernetes, web servers, and game engines."
    }
  ],
  "options": [
    {
      "id": "rust",
      "name": "Rust",
      "summary": "A language empowering everyone to build reliable and efficient software with memory safety and zero-cost abstractions.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Borrow Checker)",
          "note": "Guarantees memory safety and data-race freedom at compile time without a garbage collector."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Zero-Cost Async/Await",
          "note": "Future-based async runtime (Tokio) with zero allocation overhead."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Slower (Monomorphization)",
          "note": "Heavy macro expansion and generic monomorphization increase compile times."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "FFI Bindings",
          "note": "C-compatible FFI via extern 'C' and bindgen."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Zero GC Runtime",
          "note": "Zero runtime garbage collector; deterministic RAII memory destruction."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Rapidly Growing Standard",
          "note": "Adopted in Linux Kernel, Android, AWS Firecracker, Cloudflare, and Tokio."
        }
      },
      "tags": [
        "Rust",
        "Memory-Safe",
        "Borrow Checker",
        "Tokio",
        "Zero-GC"
      ]
    },
    {
      "id": "go",
      "name": "Go (Golang)",
      "summary": "An open-source programming language designed at Google for fast compilation and cloud-native microservices.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Garbage Collected",
          "note": "Automatic memory management via concurrent tri-color mark-sweep garbage collector."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Goroutines)",
          "note": "Lightweight CSP goroutines (2KB stack) and channels make concurrent programming intuitive."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Blazing Fast Compile",
          "note": "Compiles massive codebases to single native binaries in seconds."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Cgo",
          "note": "Cgo enables calling C code, with minor call overhead."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Lightweight GC (< 1ms)",
          "note": "Ultra-low pause concurrent GC."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Cloud-Native Dominance",
          "note": "The language powering Docker, Kubernetes, Terraform, Prometheus, and etcd."
        }
      },
      "tags": [
        "Go",
        "Golang",
        "Goroutines",
        "Kubernetes",
        "Fast Compile"
      ]
    },
    {
      "id": "zig",
      "name": "Zig",
      "summary": "A general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Explicit Allocators",
          "note": "No hidden control flow or allocators; memory allocation passed explicitly (std.mem.Allocator)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Async (Evolving)",
          "note": "Focuses on explicit control flow."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Fast Comptime",
          "note": "Comptime execution replaces macros and generics cleanly."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Unmatched C Interop",
          "note": "Directly includes and compiles C header files (.h); serves as a drop-in C/C++ compiler."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Zero GC Runtime",
          "note": "Zero runtime overhead."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Rising Star (Bun Engine)",
          "note": "Powers the Bun JavaScript runtime and modern systems tools."
        }
      },
      "tags": [
        "Zig",
        "Comptime",
        "C-Replacement",
        "Explicit Allocators",
        "Bun"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Rust for systems programming requiring guaranteed memory safety and zero GC pauses.",
    "Choose Go for cloud-native microservices, DevOps CLI tools, and web backend APIs.",
    "Choose Zig when building C-compatible libraries requiring explicit memory allocator control."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Systems Language Selection",
        "description": "Choosing the low-level programming language."
      },
      {
        "id": "p1",
        "label": "Compile-Time Memory Safety & Zero GC",
        "description": "Need borrow-checker memory safety and deterministic RAII without a garbage collector."
      },
      {
        "id": "p2",
        "label": "Cloud-Native Concurrency & Fast Compilation",
        "description": "Need goroutines, channels, fast compilation, and native Kubernetes ecosystem alignment."
      },
      {
        "id": "p3",
        "label": "C-Replacement & Explicit Allocators",
        "description": "Need comptime metaprogramming and direct C header compilation without hidden allocations."
      },
      {
        "id": "e1",
        "label": "Rust",
        "description": "Memory-safe systems language with borrow checker."
      },
      {
        "id": "e2",
        "label": "Go",
        "description": "Fast-compiling concurrent language powering cloud-native infra."
      },
      {
        "id": "e3",
        "label": "Zig",
        "description": "Modern C-replacement language with explicit allocators."
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
