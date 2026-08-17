# 📚 Curated Knowledge Maps & Decision Matrices Documentation

This document provides a complete, structured inventory of all **32 curated templates** available in the Mind Mapper showcase collection, along with additional standalone maps.

---

## 📊 Quick Summary & Statistics

| Metric | Details |
| :--- | :--- |
| **Total Curated Showcase Templates** | **32 Templates** |
| **Hierarchical Mind Maps** | 27 Templates |
| **Decision / Comparison Matrices** | 5 Templates |
| **Mega-Scale Maps (400–792 nodes)** | 12 Templates |
| **Standard-Scale Maps (47–132 nodes)** | 15 Templates |
| **Domain Categories** | Software & AI (9), System Design (6), Comparisons (5), Business & Strategy (3), Science (8), Engineering Culture (1) |
| **Registry File** | [`src/data/examples/index.ts`](../src/data/examples/index.ts) |

---

## 📑 Complete Template Inventory by Category

### 1. 💻 Software & AI (9 Templates)

| Template ID | Title | Type | Nodes / Scale | Tags | File Source | Description Summary |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `backend-principles` | **Backend Systems from First Principles** | Map | 432 nodes (Depth 5) | Backend, Systems, 400+ Nodes | `backend_mind_map.json` | Complete production engineering roadmap covering networking, databases, security, caching, queues, and observability from the ground up. |
| `ml-from-first-principles` | **Machine Learning from First Principles** | Map | 777 nodes (Depth 5) | ML, Deep Learning, CNNs, 777 Nodes | `mlFromFirstPrinciples.ts` | Deep masterclass covering linear algebra foundations, classical ML, CNNs, NLP & transformers, distributed training (FSDP/Megatron), MLOps, and ML safety. |
| `fullstack-web` | **Full-Stack Web Development from First Principles** | Map | 777 nodes (Depth 5) | React, Node.js, TypeScript, 777 Nodes | `fullStackWeb.ts` | Exhaustive guide covering browser rendering pipeline, CSS architecture, TypeScript type system, React Fiber, Node.js event loop, OAuth2/passkeys, and deployment. |
| `ai-engineering` | **AI & LLM Systems Masterclass** | Map | 132 nodes (Depth 4) | LLMs, RAG, Agents, Fine-Tuning | `aiEngineering.ts` | Covers Transformer math, RAG vector pipelines, Autonomous Agents, LoRA/QLoRA tuning, and vLLM inference serving. |
| `devsecops` | **DevSecOps & Platform Engineering** | Map | 122 nodes (Depth 4) | DevOps, Security, Kubernetes, GitOps | `devSecOps.ts` | CI/CD pipelines, GitOps with ArgoCD, SBOM supply chain security, SLSA attestations, Kubernetes operators, and OpenTelemetry. |
| `autonomous-robotics` | **Autonomous Driving & Robotics Systems** | Map | 777 nodes (Depth 5) | Robotics, SLAM, ROS 2, MPC, 777 Nodes | `autonomousRobotics.ts` | Denavit-Hartenberg kinematics, SE(3)/SO(3) Lie algebra, EKF/UKF sensor fusion, Graph SLAM, BEV perception, MPC trajectory planning, and ISO 26262 ASIL-D. |
| `compiler-internals` | **Compilers, Language Runtimes & Code Generation** | Map | 777 nodes (Depth 5) | Compiler, LLVM, JIT, LSP, 777 Nodes | `compilerInternals.ts` | Flex/Bison parsing, Hindley-Milner type inference, SSA intermediate representations, Chaitin-Briggs graph coloring register allocation, JIT, and LSP. |
| `gpu-computing` | **Parallel & GPU Computing from First Principles** | Map | 777 nodes (Depth 5) | CUDA, GPU, NVLink, Triton, 777 Nodes | `gpuComputing.ts` | NVIDIA Streaming Multiprocessors, SIMT execution, CUDA memory hierarchies, warp shuffles, memory coalescing, NVLink RDMA, Triton kernels, and Nsight profiling. |
| `web-frontend` | **Modern Web Frontend Architecture** | Map | 105 nodes (Depth 4) | React, Performance, Micro-frontends, SSR | `webFrontend.ts` | React Server Components, Islands Architecture, hydration strategies (SSR/SSG/ISR), Core Web Vitals, micro-frontends, and edge rendering. |

---

### 2. 🌐 System Design (6 Templates)

| Template ID | Title | Type | Nodes / Scale | Tags | File Source | Description Summary |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `computer-networks` | **Computer Networks from First Principles** | Map | 792 nodes (Depth 5) | TCP/IP, BGP, HTTP/3, QUIC, 792 Nodes | `computerNetworks.ts` | Complete internet protocol stack: physical layer, IP addressing, BGP routing, TCP/QUIC transport, HTTP/DNS/TLS application protocols, CDN edge, and network security. |
| `kubernetes-cloud-native` | **Kubernetes & Cloud-Native Ecosystem** | Map | 777 nodes (Depth 5) | Kubernetes, CNI, Istio, GitOps, 777 Nodes | `kubernetesCloudNative.ts` | OCI/containerd, control plane internals, CNI/CSI/RBAC, service mesh (Istio/Cilium), Prometheus/OpenTelemetry, and GitOps with ArgoCD/Flux. |
| `system-design` | **High-Scale Distributed Systems** | Map | 89 nodes (Depth 4) | Distributed, Kafka, Microservices, Consensus | `systemDesign.ts` | Architectural blueprint: Anycast routing, Envoy L7 load balancing, Kafka KRaft streaming, CQRS/Saga patterns, and Raft consensus protocol. |
| `social-network` | **Designing a Global Social Network** | Map | 126 nodes (Depth 4) | Social Graph, Feed Ranking, Real-Time, CDN | `socialNetwork.ts` | News feed fanout, social graph storage, sharded timelines, real-time notifications, media pipelines, and content moderation at scale. |
| `fintech-systems` | **Real-Time Payments & Fintech Systems** | Map | 127 nodes (Depth 4) | Payments, PCI-DSS, Fraud Detection, Ledger | `fintechSystems.ts` | PCI-DSS compliance, double-entry ledgers, idempotent payment processing, fraud detection ML pipelines, and regulatory AML/KYC. |
| `cloud-architecture` | **Cloud Architecture Patterns & Multi-Cloud** | Map | 127 nodes (Depth 4) | AWS, GCP, Azure, Terraform, FinOps | `cloudArchitecture.ts` | Landing zone design, Terraform IaC, VPC topology, IAM zero-trust, Serverless vs Container tradeoffs, FinOps, and disaster recovery. |

---

### 3. ⚖️ Comparisons / Decision Matrices (5 Templates)

| Template ID | Title | Type | Dimensions | Tags | File Source | Description Summary |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `db-comparison` | **PostgreSQL vs MongoDB vs Redis vs Cassandra vs ES vs ClickHouse** | Compare | 6 Options × 7 Criteria | Databases, SQL, NoSQL, Vector Search, OLAP | `dbComparison.ts` | ACID compliance, query expressiveness, sub-millisecond latency, sharding, AI vector search, and columnar OLAP throughput. |
| `cloud-comparison` | **Cloud Providers: AWS vs GCP vs Azure vs Cloudflare** | Compare | 4 Options × 8 Criteria | AWS, GCP, Azure, Cloudflare, Cloud | `cloudComparison.ts` | Compute, managed databases, AI/ML APIs, CDN edge, global regions, DevX tooling, compliance certifications, and pricing models. |
| `frontend-frameworks` | **React vs Vue vs Svelte vs SolidJS vs Astro** | Compare | 5 Options × 7 Criteria | React, Vue, Svelte, SolidJS, Astro | `frontendFrameworks.ts` | Reactivity models, bundle size, SSR/SSG support, ecosystem depth, TypeScript DX, learning curve, and Core Web Vitals performance. |
| `ml-infrastructure` | **ML Infra: SageMaker vs Vertex AI vs HuggingFace vs Modal vs Replicate** | Compare | 5 Options × 6 Criteria | ML, LLMs, GPU, SageMaker, HuggingFace | `mlInfrastructure.ts` | Hosted LLM inference, fine-tuning jobs, open-source model library, GPU hardware access, cost model, and deployment speed. |
| `message-brokers` | **Kafka vs RabbitMQ vs SQS vs NATS vs Pulsar** | Compare | 5 Options × 6 Criteria | Kafka, RabbitMQ, SQS, NATS, Streaming | `messageBrokers.ts` | Throughput & horizontal scale, message ordering, persistence & durability, fan-out patterns, exactly-once semantics, and operational complexity. |

---

### 4. 📈 Business & Strategy (3 Templates)

| Template ID | Title | Type | Nodes / Scale | Tags | File Source | Description Summary |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `startup-blueprint` | **Zero to One Startup Launch Blueprint** | Map | 56 nodes (Depth 4) | Startup, PMF, GTM, Fundraising | `startupBlueprint.ts` | Mom Test interviews, smoke test MVPs, single core value loops, Sean Ellis PMF metric, pirate metrics, and post-money SAFEs. |
| `product-management` | **Product Management Mastery** | Map | 90 nodes (Depth 4) | Product, OKRs, JTBD, Roadmap | `productManagement.ts` | Jobs-to-be-Done, Opportunity Solution Trees, OKR trees, RICE/ICE prioritization, PRD structure, product metrics, and GTM coordination. |
| `saas-growth` | **B2B SaaS Growth Playbook** | Map | 90 nodes (Depth 4) | SaaS, PLG, Growth, ARR, Churn | `saasGrowth.ts` | PLG vs SLG motion, PQLs, expansion MRR, churn early warning scores, CSM playbooks, ABM, ICP definition, and SaaS financial metrics. |

---

### 5. 🔬 Science & Deep Tech (8 Templates)

| Template ID | Title | Type | Nodes / Scale | Tags | File Source | Description Summary |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `operating-systems` | **Operating Systems Internals from First Principles** | Map | 792 nodes (Depth 5) | Linux, Kernel, Scheduling, Memory, 792 Nodes | `operatingSystems.ts` | Process/thread management, CFS scheduler, virtual memory & page tables, ext4/btrfs, io_uring, RCU synchronization, and eBPF/cgroups/namespaces. |
| `security-engineering` | **Security Engineering from First Principles** | Map | 777 nodes (Depth 5) | Security, Cryptography, Red Team, Compliance, 777 Nodes | `securityEngineering.ts` | Threat modeling (STRIDE/ATT&CK), OWASP Top 10, TLS/PKI, IAM, post-quantum cryptography, cloud security, red team, and compliance. |
| `data-engineering` | **Data Engineering & Modern Data Stack** | Map | 777 nodes (Depth 5) | Spark, dbt, Iceberg, Airflow, 777 Nodes | `dataEngineering.ts` | Kafka CDC ingestion, Spark/Flink processing, Parquet/Iceberg/Delta formats, Snowflake/BigQuery, Airflow/Dagster, dbt quality, and feature stores. |
| `bioinformatics` | **Computational Genomics & Bioinformatics** | Map | 777 nodes (Depth 5) | Genomics, AlphaFold, CRISPR, RNA-Seq, 777 Nodes | `bioinformatics.ts` | Illumina NGS & Oxford Nanopore sequencing, Burrows-Wheeler BWT FM-Index, AlphaFold3 Evoformer spatial attention, GATK variant calling, RNA-Seq, CRISPR. |
| `embedded-systems` | **Embedded Systems & Real-Time OS (RTOS)** | Map | 777 nodes (Depth 5) | Embedded, ARM, FreeRTOS, CAN Bus, 777 Nodes | `embeddedSystems.ts` | ARM Cortex-M architecture, NVIC interrupt vectoring, SPI/I2C/CAN-FD bus protocols, FreeRTOS priority inheritance mutexes, MPU, bare-metal linker scripts. |
| `quantum-computing` | **Quantum Computing Foundations** | Map | 47 nodes (Depth 4) | Quantum, Physics, Qubits, Algorithms | `quantumComputing.ts` | Hilbert state spaces, Dirac bra-kets, Bloch sphere, EPR entanglement, Hadamard/CNOT gates, Shor's algorithm, Grover's search, and transmon cryogenics. |
| `cryptography` | **Modern Cryptography & Cybersecurity Engineering** | Map | 100 nodes (Depth 4) | Cryptography, TLS, Post-Quantum, ZKPs | `cryptography.ts` | AES-GCM, TLS 1.3 handshake, post-quantum Kyber/Dilithium, Zero-Knowledge Proofs (SNARKs/STARKs), FIDO2 passkeys, and secure enclaves. |
| `neuroscience` | **Neuroscience of Learning & Memory** | Map | 90 nodes (Depth 4) | Neuroscience, Memory, Learning, Spaced Repetition | `neuroscience.ts` | LTP synaptic plasticity, hippocampal encoding, dopamine reward circuits, spaced repetition science, retrieval practice, and sleep-memory consolidation. |

---

### 6. 🏆 Engineering Culture (1 Template)

| Template ID | Title | Type | Nodes / Scale | Tags | File Source | Description Summary |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `staff-engineering` | **Staff+ Engineering Leadership** | Map | 95 nodes (Depth 4) | Leadership, ADRs, Mentoring, DORA | `staffEngineering.ts` | Technical vision writing, ADRs, RFC culture, cross-team alignment, staff project selection, mentoring/sponsorship, DORA metrics, and influence without authority. |

---

### 🌟 Additional / Standalone Templates

| Name | Type | File Source | Notes |
| :--- | :--- | :--- | :--- |
| **Pretext Portfolio Starter Map** | Mind Map | [`src/pretextPortfolioMap.ts`](../src/pretextPortfolioMap.ts) | Starter map demonstrating Pretext canvas rendering performance and feature pitch. |
