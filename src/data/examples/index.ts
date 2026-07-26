import { MindMapData, ComparisonWorkspaceData } from "../../services/llmService";
import exampleData from "../../../backend_mind_map.json";

// ── Mind Maps (existing) ───────────────────────────────────────────────────
import { AI_ENGINEERING_EXAMPLE } from "./aiEngineering";
import { SYSTEM_DESIGN_EXAMPLE } from "./systemDesign";
import { STARTUP_BLUEPRINT_EXAMPLE } from "./startupBlueprint";
import { QUANTUM_COMPUTING_EXAMPLE } from "./quantumComputing";
import { DEVSECOPS_EXAMPLE } from "./devSecOps";
import { WEB_FRONTEND_EXAMPLE } from "./webFrontend";
import { SOCIAL_NETWORK_EXAMPLE } from "./socialNetwork";
import { FINTECH_SYSTEMS_EXAMPLE } from "./fintechSystems";
import { CLOUD_ARCHITECTURE_EXAMPLE } from "./cloudArchitecture";
import { PRODUCT_MANAGEMENT_EXAMPLE } from "./productManagement";
import { CRYPTOGRAPHY_EXAMPLE } from "./cryptography";
import { STAFF_ENGINEERING_EXAMPLE } from "./staffEngineering";
import { SAAS_GROWTH_EXAMPLE } from "./saasGrowth";
import { NEUROSCIENCE_EXAMPLE } from "./neuroscience";

// ── Mega Maps (400–777 nodes) ──────────────────────────────────────────────
import { ML_FROM_FIRST_PRINCIPLES_EXAMPLE } from "./mlFromFirstPrinciples";
import { SECURITY_ENGINEERING_EXAMPLE } from "./securityEngineering";
import { FULLSTACK_WEB_EXAMPLE } from "./fullStackWeb";
import { COMPUTER_NETWORKS_EXAMPLE } from "./computerNetworks";
import { DATA_ENGINEERING_EXAMPLE } from "./dataEngineering";
import { OPERATING_SYSTEMS_EXAMPLE } from "./operatingSystems";
import { KUBERNETES_CLOUD_NATIVE_EXAMPLE } from "./kubernetesCloudNative";
import { AUTONOMOUS_ROBOTICS_EXAMPLE } from "./autonomousRobotics";
import { COMPILER_INTERNALS_EXAMPLE } from "./compilerInternals";
import { GPU_COMPUTING_EXAMPLE } from "./gpuComputing";
import { BIOINFORMATICS_EXAMPLE } from "./bioinformatics";
import { EMBEDDED_SYSTEMS_EXAMPLE } from "./embeddedSystems";

// ── Decision Matrices ──────────────────────────────────────────────────────
import { DB_COMPARISON_EXAMPLE } from "./dbComparison";
import { CLOUD_COMPARISON_EXAMPLE } from "./cloudComparison";
import { FRONTEND_FRAMEWORKS_EXAMPLE } from "./frontendFrameworks";
import { ML_INFRASTRUCTURE_EXAMPLE } from "./mlInfrastructure";
import { MESSAGE_BROKERS_EXAMPLE } from "./messageBrokers";

// ── Types ──────────────────────────────────────────────────────────────────
export type ExampleCategory =
  | "All"
  | "Software & AI"
  | "System Design"
  | "Comparisons"
  | "Business & Strategy"
  | "Science"
  | "Engineering Culture";

export interface CuratedExample {
  id: string;
  title: string;
  category: ExampleCategory;
  type: "map" | "compare";
  description: string;
  nodeCount: number | string;
  depthCount?: number;
  tags: string[];
  icon: "Cpu" | "Network" | "Scale" | "Rocket" | "Atom" | "Server" | "Shield" | "Globe" | "Cloud" | "Brain" | "BarChart" | "Layers" | "Star";
  gradient: string;
  data: MindMapData | ComparisonWorkspaceData;
}

export const CURATED_EXAMPLES: CuratedExample[] = [
  // ── Software & AI ────────────────────────────────────────────────────────
  {
    id: "backend-principles",
    title: "Backend Systems from First Principles",
    category: "Software & AI",
    type: "map",
    description: "Complete production engineering roadmap covering networking, databases, security, caching, queues, and observability from ground up.",
    nodeCount: 432,
    depthCount: 5,
    tags: ["Backend", "Systems", "400+ Nodes"],
    icon: "Server",
    gradient: "from-cyan-500 to-blue-600",
    data: exampleData as unknown as MindMapData,
  },
  {
    id: "ml-from-first-principles",
    title: "Machine Learning from First Principles",
    category: "Software & AI",
    type: "map",
    description: "777-node deep masterclass: linear algebra foundations, classical ML, CNNs, NLP & transformers, distributed training (FSDP/Megatron), MLOps, and ML safety/adversarial robustness.",
    nodeCount: 777,
    depthCount: 5,
    tags: ["ML", "Deep Learning", "CNNs", "777 Nodes"],
    icon: "Brain",
    gradient: "from-violet-500 to-purple-700",
    data: ML_FROM_FIRST_PRINCIPLES_EXAMPLE,
  },
  {
    id: "fullstack-web",
    title: "Full-Stack Web Development from First Principles",
    category: "Software & AI",
    type: "map",
    description: "777-node exhaustive guide: browser rendering pipeline, CSS architecture, TypeScript type system, React Fiber, Node.js event loop, OAuth2/passkeys, and production deployment.",
    nodeCount: 777,
    depthCount: 5,
    tags: ["React", "Node.js", "TypeScript", "777 Nodes"],
    icon: "Layers",
    gradient: "from-sky-500 to-blue-600",
    data: FULLSTACK_WEB_EXAMPLE,
  },
  {
    id: "ai-engineering",
    title: "AI & LLM Systems Masterclass",
    category: "Software & AI",
    type: "map",
    description: "Deep 132-node tree covering Transformer math, RAG vector pipelines, Autonomous Agents, LoRA/QLoRA tuning, and vLLM inference serving.",
    nodeCount: 132,
    depthCount: 4,
    tags: ["LLMs", "RAG", "Agents", "Fine-Tuning"],
    icon: "Cpu",
    gradient: "from-purple-500 to-indigo-600",
    data: AI_ENGINEERING_EXAMPLE,
  },
  {
    id: "devsecops",
    title: "DevSecOps & Platform Engineering",
    category: "Software & AI",
    type: "map",
    description: "122-node blueprint for CI/CD pipelines, GitOps with ArgoCD, SBOM supply chain security, SLSA attestations, Kubernetes operators, and OpenTelemetry observability.",
    nodeCount: 122,
    depthCount: 4,
    tags: ["DevOps", "Security", "Kubernetes", "GitOps"],
    icon: "Shield",
    gradient: "from-orange-500 to-red-600",
    data: DEVSECOPS_EXAMPLE,
  },
  {
    id: "autonomous-robotics",
    title: "Autonomous Driving & Robotics Systems",
    category: "Software & AI",
    type: "map",
    description: "777-node robotics blueprint: Denavit-Hartenberg kinematics, SE(3)/SO(3) Lie algebra, EKF/UKF sensor fusion, Graph SLAM, BEV perception, MPC trajectory planning, ROS 2, and ISO 26262 ASIL-D safety.",
    nodeCount: 777,
    depthCount: 5,
    tags: ["Robotics", "SLAM", "ROS 2", "MPC", "777 Nodes"],
    icon: "Cpu",
    gradient: "from-amber-500 to-red-600",
    data: AUTONOMOUS_ROBOTICS_EXAMPLE,
  },
  {
    id: "compiler-internals",
    title: "Compilers, Language Runtimes & Code Generation",
    category: "Software & AI",
    type: "map",
    description: "777-node compiler masterclass: Flex/Bison parsing, Hindley-Milner type inference, SSA intermediate representations, Chaitin-Briggs graph coloring register allocation, JIT compilation, and LSP server protocol.",
    nodeCount: 777,
    depthCount: 5,
    tags: ["Compiler", "LLVM", "JIT", "LSP", "777 Nodes"],
    icon: "Layers",
    gradient: "from-indigo-500 to-purple-700",
    data: COMPILER_INTERNALS_EXAMPLE,
  },
  {
    id: "gpu-computing",
    title: "Parallel & GPU Computing from First Principles",
    category: "Software & AI",
    type: "map",
    description: "777-node GPU architecture guide: NVIDIA Streaming Multiprocessors, SIMT execution, CUDA memory hierarchies, warp shuffles, memory coalescing, NVLink RDMA, Triton Python GPU kernels, and Nsight profiling.",
    nodeCount: 777,
    depthCount: 5,
    tags: ["CUDA", "GPU", "NVLink", "Triton", "777 Nodes"],
    icon: "Cpu",
    gradient: "from-emerald-500 to-green-700",
    data: GPU_COMPUTING_EXAMPLE,
  },
  {
    id: "web-frontend",
    title: "Modern Web Frontend Architecture",
    category: "Software & AI",
    type: "map",
    description: "105-node map covering React Server Components, Islands Architecture, hydration strategies (SSR/SSG/ISR), Core Web Vitals, micro-frontends, and edge rendering.",
    nodeCount: 105,
    depthCount: 4,
    tags: ["React", "Performance", "Micro-frontends", "SSR"],
    icon: "Layers",
    gradient: "from-sky-400 to-cyan-600",
    data: WEB_FRONTEND_EXAMPLE,
  },

  // ── System Design ────────────────────────────────────────────────────────
  {
    id: "computer-networks",
    title: "Computer Networks from First Principles",
    category: "System Design",
    type: "map",
    description: "792-node complete internet protocol stack: physical layer, IP addressing, BGP routing, TCP/QUIC transport, HTTP/DNS/TLS application protocols, CDN edge, and network security.",
    nodeCount: 792,
    depthCount: 5,
    tags: ["TCP/IP", "BGP", "HTTP/3", "QUIC", "792 Nodes"],
    icon: "Network",
    gradient: "from-emerald-500 to-teal-700",
    data: COMPUTER_NETWORKS_EXAMPLE,
  },
  {
    id: "kubernetes-cloud-native",
    title: "Kubernetes & Cloud-Native Ecosystem",
    category: "System Design",
    type: "map",
    description: "777-node exhaustive K8s guide: OCI/containerd, control plane internals, CNI/CSI/RBAC, service mesh (Istio/Cilium), Prometheus/OpenTelemetry observability, and GitOps with ArgoCD/Flux.",
    nodeCount: 777,
    depthCount: 5,
    tags: ["Kubernetes", "CNI", "Istio", "GitOps", "777 Nodes"],
    icon: "Cloud",
    gradient: "from-blue-500 to-indigo-700",
    data: KUBERNETES_CLOUD_NATIVE_EXAMPLE,
  },
  {
    id: "system-design",
    title: "High-Scale Distributed Systems",
    category: "System Design",
    type: "map",
    description: "89-node architectural blueprint: Anycast routing, Envoy L7 load balancing, Kafka KRaft streaming, CQRS/Saga patterns, and Raft consensus protocol.",
    nodeCount: 89,
    depthCount: 4,
    tags: ["Distributed", "Kafka", "Microservices", "Consensus"],
    icon: "Network",
    gradient: "from-emerald-400 to-teal-600",
    data: SYSTEM_DESIGN_EXAMPLE,
  },
  {
    id: "social-network",
    title: "Designing a Global Social Network",
    category: "System Design",
    type: "map",
    description: "126-node deep dive into news feed fanout, social graph storage, sharded timelines, real-time notifications, media pipelines, and content moderation at scale.",
    nodeCount: 126,
    depthCount: 4,
    tags: ["Social Graph", "Feed Ranking", "Real-Time", "CDN"],
    icon: "Globe",
    gradient: "from-violet-500 to-purple-600",
    data: SOCIAL_NETWORK_EXAMPLE,
  },
  {
    id: "fintech-systems",
    title: "Real-Time Payments & Fintech Systems",
    category: "System Design",
    type: "map",
    description: "127-node blueprint for PCI-DSS compliance, double-entry ledgers, idempotent payment processing, fraud detection ML pipelines, and regulatory AML/KYC.",
    nodeCount: 127,
    depthCount: 4,
    tags: ["Payments", "PCI-DSS", "Fraud Detection", "Ledger"],
    icon: "BarChart",
    gradient: "from-green-500 to-emerald-600",
    data: FINTECH_SYSTEMS_EXAMPLE,
  },
  {
    id: "cloud-architecture",
    title: "Cloud Architecture Patterns & Multi-Cloud",
    category: "System Design",
    type: "map",
    description: "127-node guide to landing zone design, Terraform IaC, VPC topology, IAM zero-trust, Serverless vs Container tradeoffs, FinOps, and disaster recovery strategies.",
    nodeCount: 127,
    depthCount: 4,
    tags: ["AWS", "GCP", "Azure", "Terraform", "FinOps"],
    icon: "Cloud",
    gradient: "from-blue-400 to-indigo-600",
    data: CLOUD_ARCHITECTURE_EXAMPLE,
  },

  // ── Comparisons ──────────────────────────────────────────────────────────
  {
    id: "db-comparison",
    title: "PostgreSQL vs MongoDB vs Redis vs Cassandra vs ES vs ClickHouse",
    category: "Comparisons",
    type: "compare",
    description: "6-option, 7-criteria decision matrix: ACID compliance, query expressiveness, sub-millisecond latency, sharding, AI vector search, and columnar OLAP throughput.",
    nodeCount: "6 × 7",
    tags: ["Databases", "SQL", "NoSQL", "Vector Search", "OLAP"],
    icon: "Scale",
    gradient: "from-amber-500 to-orange-600",
    data: DB_COMPARISON_EXAMPLE,
  },
  {
    id: "cloud-comparison",
    title: "Cloud Providers: AWS vs GCP vs Azure vs Cloudflare",
    category: "Comparisons",
    type: "compare",
    description: "4-provider, 8-criteria matrix: Compute, managed databases, AI/ML APIs, CDN edge, global regions, DevX tooling, compliance certifications, and pricing models.",
    nodeCount: "4 × 8",
    tags: ["AWS", "GCP", "Azure", "Cloudflare", "Cloud"],
    icon: "Cloud",
    gradient: "from-blue-500 to-sky-600",
    data: CLOUD_COMPARISON_EXAMPLE,
  },
  {
    id: "frontend-frameworks",
    title: "React vs Vue vs Svelte vs SolidJS vs Astro",
    category: "Comparisons",
    type: "compare",
    description: "5-framework, 7-criteria comparison: Reactivity models, bundle size, SSR/SSG support, ecosystem depth, TypeScript DX, learning curve, and Core Web Vitals performance.",
    nodeCount: "5 × 7",
    tags: ["React", "Vue", "Svelte", "SolidJS", "Astro"],
    icon: "Layers",
    gradient: "from-fuchsia-500 to-pink-600",
    data: FRONTEND_FRAMEWORKS_EXAMPLE,
  },
  {
    id: "ml-infrastructure",
    title: "ML Infra: SageMaker vs Vertex AI vs HuggingFace vs Modal vs Replicate",
    category: "Comparisons",
    type: "compare",
    description: "5-platform, 6-criteria matrix: Hosted LLM inference, fine-tuning jobs, open-source model library, GPU hardware access, cost model, and deployment speed.",
    nodeCount: "5 × 6",
    tags: ["ML", "LLMs", "GPU", "SageMaker", "HuggingFace"],
    icon: "Cpu",
    gradient: "from-purple-500 to-violet-600",
    data: ML_INFRASTRUCTURE_EXAMPLE,
  },
  {
    id: "message-brokers",
    title: "Kafka vs RabbitMQ vs SQS vs NATS vs Pulsar",
    category: "Comparisons",
    type: "compare",
    description: "5-broker, 6-criteria decision matrix: Throughput & horizontal scale, message ordering, persistence & durability, fan-out patterns, exactly-once semantics, and operational complexity.",
    nodeCount: "5 × 6",
    tags: ["Kafka", "RabbitMQ", "SQS", "NATS", "Streaming"],
    icon: "Network",
    gradient: "from-teal-500 to-green-600",
    data: MESSAGE_BROKERS_EXAMPLE,
  },

  // ── Business & Strategy ──────────────────────────────────────────────────
  {
    id: "startup-blueprint",
    title: "Zero to One Startup Launch Blueprint",
    category: "Business & Strategy",
    type: "map",
    description: "Battle-tested startup playbook: Mom Test interviews, smoke test MVPs, single core value loops, Sean Ellis PMF metric, pirate metrics, and post-money SAFEs.",
    nodeCount: 56,
    depthCount: 4,
    tags: ["Startup", "PMF", "GTM", "Fundraising"],
    icon: "Rocket",
    gradient: "from-pink-500 to-rose-600",
    data: STARTUP_BLUEPRINT_EXAMPLE,
  },
  {
    id: "product-management",
    title: "Product Management Mastery",
    category: "Business & Strategy",
    type: "map",
    description: "90+ node framework covering Jobs-to-be-Done, Opportunity Solution Trees, OKR trees, RICE/ICE prioritization, PRD structure, product metrics, and GTM coordination.",
    nodeCount: 90,
    depthCount: 4,
    tags: ["Product", "OKRs", "JTBD", "Roadmap"],
    icon: "Star",
    gradient: "from-yellow-500 to-amber-600",
    data: PRODUCT_MANAGEMENT_EXAMPLE,
  },
  {
    id: "saas-growth",
    title: "B2B SaaS Growth Playbook",
    category: "Business & Strategy",
    type: "map",
    description: "90+ node guide to PLG vs SLG motion, PQLs, expansion MRR, churn early warning scores, CSM playbooks, ABM, ICP definition, and SaaS financial metrics (ARR/NRR/LTV).",
    nodeCount: 90,
    depthCount: 4,
    tags: ["SaaS", "PLG", "Growth", "ARR", "Churn"],
    icon: "BarChart",
    gradient: "from-lime-500 to-green-600",
    data: SAAS_GROWTH_EXAMPLE,
  },

  // ── Science ──────────────────────────────────────────────────────────────
  {
    id: "operating-systems",
    title: "Operating Systems Internals from First Principles",
    category: "Science",
    type: "map",
    description: "792-node deep dive: process/thread management, CFS scheduler, virtual memory & page tables, ext4/btrfs file systems, io_uring, RCU synchronization, and eBPF/cgroups/namespaces.",
    nodeCount: 792,
    depthCount: 5,
    tags: ["Linux", "Kernel", "Scheduling", "Memory", "792 Nodes"],
    icon: "Cpu",
    gradient: "from-slate-600 to-gray-800",
    data: OPERATING_SYSTEMS_EXAMPLE,
  },
  {
    id: "security-engineering",
    title: "Security Engineering from First Principles",
    category: "Science",
    type: "map",
    description: "777-node comprehensive security map: threat modeling (STRIDE/ATT&CK), OWASP Top 10, TLS/PKI, IAM, post-quantum cryptography, cloud security (CSPM/SBOM), red team, and compliance (SOC2/GDPR/PCI).",
    nodeCount: 777,
    depthCount: 5,
    tags: ["Security", "Cryptography", "Red Team", "Compliance", "777 Nodes"],
    icon: "Shield",
    gradient: "from-red-600 to-rose-800",
    data: SECURITY_ENGINEERING_EXAMPLE,
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Modern Data Stack",
    category: "Science",
    type: "map",
    description: "777-node end-to-end data platform: Kafka CDC ingestion, Spark/Flink processing, Parquet/Iceberg/Delta formats, Snowflake/BigQuery warehouses, Airflow/Dagster orchestration, dbt quality, and feature stores.",
    nodeCount: 777,
    depthCount: 5,
    tags: ["Spark", "dbt", "Iceberg", "Airflow", "777 Nodes"],
    icon: "BarChart",
    gradient: "from-orange-500 to-amber-700",
    data: DATA_ENGINEERING_EXAMPLE,
  },
  {
    id: "bioinformatics",
    title: "Computational Genomics & Bioinformatics",
    category: "Science",
    type: "map",
    description: "777-node genomics guide: Illumina NGS & Oxford Nanopore sequencing, Burrows-Wheeler BWT FM-Index, AlphaFold3 Evoformer spatial attention, GATK variant calling, single-cell RNA-Seq, and CRISPR Cas9/base editing.",
    nodeCount: 777,
    depthCount: 5,
    tags: ["Genomics", "AlphaFold", "CRISPR", "RNA-Seq", "777 Nodes"],
    icon: "Atom",
    gradient: "from-teal-500 to-cyan-700",
    data: BIOINFORMATICS_EXAMPLE,
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems & Real-Time OS (RTOS)",
    category: "Science",
    type: "map",
    description: "777-node RTOS blueprint: ARM Cortex-M architecture, NVIC interrupt vectoring, SPI/I2C/CAN-FD bus protocols, FreeRTOS priority inheritance mutexes, MPU memory protection, and bare-metal linker scripts.",
    nodeCount: 777,
    depthCount: 5,
    tags: ["Embedded", "ARM", "FreeRTOS", "CAN Bus", "777 Nodes"],
    icon: "Cpu",
    gradient: "from-blue-600 to-indigo-800",
    data: EMBEDDED_SYSTEMS_EXAMPLE,
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing Foundations",
    category: "Science",
    type: "map",
    description: "47-node map: Hilbert state spaces, Dirac bra-kets, Bloch sphere, EPR entanglement, Hadamard/CNOT gates, Shor's algorithm, Grover's search, and transmon cryogenics.",
    nodeCount: 47,
    depthCount: 4,
    tags: ["Quantum", "Physics", "Qubits", "Algorithms"],
    icon: "Atom",
    gradient: "from-blue-500 to-cyan-600",
    data: QUANTUM_COMPUTING_EXAMPLE,
  },
  {
    id: "cryptography",
    title: "Modern Cryptography & Cybersecurity Engineering",
    category: "Science",
    type: "map",
    description: "100+ node deep dive: AES-GCM, TLS 1.3 handshake, post-quantum Kyber/Dilithium, Zero-Knowledge Proofs (SNARKs/STARKs), FIDO2 passkeys, and secure enclaves.",
    nodeCount: 100,
    depthCount: 4,
    tags: ["Cryptography", "TLS", "Post-Quantum", "ZKPs"],
    icon: "Shield",
    gradient: "from-red-500 to-rose-600",
    data: CRYPTOGRAPHY_EXAMPLE,
  },
  {
    id: "neuroscience",
    title: "Neuroscience of Learning & Memory",
    category: "Science",
    type: "map",
    description: "90+ node exploration of LTP synaptic plasticity, hippocampal encoding, dopamine reward circuits, spaced repetition science, retrieval practice, and sleep-memory consolidation.",
    nodeCount: 90,
    depthCount: 4,
    tags: ["Neuroscience", "Memory", "Learning", "Spaced Repetition"],
    icon: "Brain",
    gradient: "from-pink-500 to-fuchsia-600",
    data: NEUROSCIENCE_EXAMPLE,
  },

  // ── Engineering Culture ──────────────────────────────────────────────────
  {
    id: "staff-engineering",
    title: "Staff+ Engineering Leadership",
    category: "Engineering Culture",
    type: "map",
    description: "95+ node guide to technical vision writing, ADRs, RFC culture, cross-team alignment, staff project selection, mentoring/sponsorship, DORA metrics, and influence without authority.",
    nodeCount: 95,
    depthCount: 4,
    tags: ["Leadership", "ADRs", "Mentoring", "DORA"],
    icon: "Star",
    gradient: "from-indigo-500 to-violet-600",
    data: STAFF_ENGINEERING_EXAMPLE,
  },
];

export const EXAMPLE_CATEGORIES: ExampleCategory[] = [
  "All",
  "Software & AI",
  "System Design",
  "Comparisons",
  "Business & Strategy",
  "Science",
  "Engineering Culture",
];
