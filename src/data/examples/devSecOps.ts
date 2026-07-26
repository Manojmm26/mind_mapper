import { MindMapData } from "../../services/llmService";

export const DEVSECOPS_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "devsecops_root",
      "label": "DevSecOps & CI/CD Security Infrastructure",
      "description": "Rigorous first-principles blueprint of CI/CD runner architecture, SLSA supply chain provenance, Cosign/Sigstore keyless signing, Trivy container security, Vault secrets engines, OPA Rego policies, and Falco eBPF runtime security.",
      "type": "topic"
    },
    {
      "id": "devsecops_root_p1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration",
      "description": "Distributed build automation engines, isolated runner environments, and workflow execution graphs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1",
      "label": "GitHub Actions Runner Architecture",
      "description": "Distributed runner infrastructure executing workflow jobs in isolated virtual machines or containers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s1",
      "label": "Runner Host Agent Loop (C# / .NET Core)",
      "description": "Long-polling worker process listening for job assignments from GitHub Actions backend APIs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s1_d1",
      "label": "Long-Polling Message Queue Listeners",
      "description": "Polling HTTPS message queues to acquire queued workflow job payloads.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s1_d2",
      "label": "AES-256 Job Payload Decryption",
      "description": "Decrypting job environment parameters and secret keys using temporary session keys.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s2",
      "label": "Ephemeral Self-Hosted Runner Pools",
      "description": "Provisioning single-use runner virtual machines on Kubernetes or cloud infrastructure.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s2_d1",
      "label": "Actions Runner Controller (ARC)",
      "description": "Kubernetes operator scaling runner pods dynamically based on pending workflow queues.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s2_d2",
      "label": "Single-Job Runner Termination",
      "description": "Terminating and destroying runner pods immediately after single job completions to prevent cross-job contamination.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s3",
      "label": "Workflow Directed Acyclic Graph (DAG) Execution",
      "description": "Evaluating job dependency trees (needs: [job_a, job_b]) for parallel execution.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s3_d1",
      "label": "Job Parallelization Engine",
      "description": "Executing independent workflow jobs concurrently across parallel runner instances.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s3_d2",
      "label": "Matrix Strategy Expansion (strategy: matrix)",
      "description": "Expanding parameter matrices (e.g. Node 18, 20 x Ubuntu, macOS) into parallel jobs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s4",
      "label": "GitHub Actions Cache Mechanics (actions/cache)",
      "description": "Caching dependencies (node_modules, ~/.m2, ~/.cargo) across workflow runs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s4_d1",
      "label": "ZSTD Compressed Tar Archive Creation",
      "description": "Compressing dependency directories into tar.zst archives uploaded to GitHub storage.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s4_d2",
      "label": "Cache Key Hash Evaluation (hashFiles)",
      "description": "Computing SHA-256 hashes of lockfiles (package-lock.json) to invalidate stale caches.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s5",
      "label": "Runner Security Sandboxing & Isolation",
      "description": "Isolating workflow steps to prevent unauthorized access to host infrastructure.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s5_d1",
      "label": "Unprivileged Container User Execution",
      "description": "Running workflow step commands as non-root users inside unprivileged containers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t1_s5_d2",
      "label": "Host Mounted Docker Socket (/var/run/docker.sock) Risks",
      "description": "Mitigating root-escalation vulnerabilities associated with mounting host Docker sockets.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2",
      "label": "GitLab CI/CD & Runner Executor Types",
      "description": "Enterprise CI/CD pipeline engine supporting Docker, Kubernetes, and Shell executors.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s1",
      "label": "GitLab Runner Go Core Engine",
      "description": "Multi-threaded Go application managing concurrent job execution.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s1_d1",
      "label": "Concurrent Job Limit Controls",
      "description": "Configuring concurrent limits to constrain total simultaneous builds per runner host.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s1_d2",
      "label": "Job Register & Heartbeat Handshakes",
      "description": "Exchanging API tokens and heartbeats with GitLab Coordinators.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s2",
      "label": "Kubernetes Executor Pod Creation",
      "description": "Launching dedicated Kubernetes pods for each pipeline stage execution.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s2_d1",
      "label": "Build, Helper, and Service Containers",
      "description": "Launching helper containers to handle git clones and artifact uploads.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s2_d2",
      "label": "Sidecar Service Containers (services: [postgres, redis])",
      "description": "Provisioning ephemeral database containers linked over local loopback networks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s3",
      "label": "GitLab CI Pipeline DAG (needs: syntax)",
      "description": "Bypassing rigid stage boundaries to execute jobs as soon as prerequisites complete.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s3_d1",
      "label": "Out-of-Order Job Scheduling",
      "description": "Starting deploy jobs immediately when dependent test jobs finish without waiting for full stage completion.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s3_d2",
      "label": "Pipeline Latency Reduction (Up to 50%)",
      "description": "Shortening overall pipeline execution durations by eliminating artificial stage barriers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s4",
      "label": "CI/CD Artifact & Cache Distribution",
      "description": "Passing build outputs between stages and caching dependencies.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s4_d1",
      "label": "Object Storage Artifact Uploads",
      "description": "Streaming archived job artifacts to MinIO / S3 storage targets.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s4_d2",
      "label": "Artifact Expire In Lifecycles (artifacts: expire_in)",
      "description": "Setting automatic purging rules to delete temporary build artifacts after 7 days.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s5",
      "label": "Protected Variables & Environment Masking",
      "description": "Securing deployment credentials and API tokens inside CI/CD settings.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s5_d1",
      "label": "Protected Branch & Tag Scope Limits",
      "description": "Restricting sensitive production credentials to pipelines running on protected main branches.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t2_s5_d2",
      "label": "Regex Value Masking in Build Logs",
      "description": "Masking secret variable values in job console outputs to prevent credential leaks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3",
      "label": "Jenkins Controller / Agent Architecture",
      "description": "Extensible Java-based automation server utilizing master-agent worker nodes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s1",
      "label": "Jenkins Remoting Protocol (JNLP4 / WebSockets)",
      "description": "Communication protocol connecting Jenkins controllers to remote agent nodes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s1_d1",
      "label": "Bidirectional WebSocket Transport",
      "description": "Establishing persistent WebSocket connections through firewalls without inbound open ports.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s1_d2",
      "label": "Java Object Serialization Security Hardening",
      "description": "Hardening remoting protocols to prevent Java deserialization remote code execution vulnerabilities.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s2",
      "label": "Declarative vs Scripted Pipeline Groovy DSL",
      "description": "Writing Jenkinsfile pipelines using structured declarative blocks or imperative Groovy code.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s2_d1",
      "label": "Declarative Syntax Validation (pipeline { ... })",
      "description": "Enforcing structured pipeline blocks for agent, stages, and post execution.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s2_d2",
      "label": "Scripted Groovy CPS (Continuation-Passing Style) Engine",
      "description": "Executing arbitrary Groovy code compiled into CPS state machines for job resumption.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s3",
      "label": "Kubernetes Plugin Dynamic Agent Provisioning",
      "description": "Spinning up ephemeral Kubernetes agent pods on-demand for Jenkins jobs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s3_d1",
      "label": "JNLP Agent Container Pod Templates",
      "description": "Launching pod templates containing custom build tool containers alongside JNLP agents.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s3_d2",
      "label": "Idle Agent Pod Termination Sweeps",
      "description": "Deleting agent pods automatically after 5 minutes of idle inactivity.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s4",
      "label": "Jenkins Shared Libraries & Governance",
      "description": "Centralizing reusable pipeline code across enterprise software teams.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s4_d1",
      "label": "Global Shared Library Repositories",
      "description": "Storing common pipeline steps in version-controlled Groovy shared library repos.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s4_d2",
      "label": "Standardized Enterprise Security Baselines",
      "description": "Enforcing mandatory security scanning steps in all organization Jenkinsfiles.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s5",
      "label": "Credential Vault Integration & Secret Storage",
      "description": "Injecting credentials safely into Jenkins pipeline step execution contexts.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s5_d1",
      "label": "withCredentials() Groovy Wrapper",
      "description": "Masking environment variables and purging temporary secret files upon step completion.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t3_s5_d2",
      "label": "HashiCorp Vault Plugin Dynamic AppRole Auth",
      "description": "Authenticating agents with Vault via AppRole credentials to fetch short-lived secrets.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4",
      "label": "CI/CD Pipeline Security & Hardening",
      "description": "Securing build automation pipelines against malicious code injection and credential theft.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s1",
      "label": "PwnRequest & Pull Request Vulnerabilities",
      "description": "Exploits where untrusted fork pull requests execute malicious code in CI workflows.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s1_d1",
      "label": "pull_request_target Security Risks",
      "description": "Preventing untrusted PR code from accessing repository secrets by avoiding pull_request_target triggers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s1_d2",
      "label": "Fork PR Secret Isolation Policies",
      "description": "Restricting secret access strictly to workflows triggered by authorized internal repository branches.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s2",
      "label": "Pipeline Code Injection (Script Injection)",
      "description": "Vulnerabilities where untrusted input strings are evaluated directly in inline shell scripts.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s2_d1",
      "label": "GitHub Context String Injection Risks (${{ github.event.issue.title }})",
      "description": "Mitigating shell injection by passing context variables as environment variables instead of inline scripts.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s2_d2",
      "label": "Sanitized Environment Variable Binding",
      "description": "Binding user inputs to environment variables prior to shell script execution.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s3",
      "label": "Unpinned Third-Party Action Risks",
      "description": "Attacks where third-party CI/CD actions are compromised and updated maliciously.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s3_d1",
      "label": "Full 40-Character Commit SHA Pinning",
      "description": "Pinning third-party actions to immutable commit SHAs (e.g. uses: action@a1b2c3d...) instead of tags.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s3_d2",
      "label": "Automated Dependency Update Bots (Dependabot)",
      "description": "Updating pinned action commit SHAs automatically via pull requests.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s4",
      "label": "Hardened Pipeline Network Egress Controls",
      "description": "Restricting network access for build runners to prevent credential exfiltration.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s4_d1",
      "label": "Egress Network Firewall Whitelisting",
      "description": "Restricting runner egress traffic strictly to approved package registries (NPM, PyPI).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s4_d2",
      "label": "DNS Filtering & Exfiltration Blocking",
      "description": "Blocking outbound DNS queries to unknown domains during build steps.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s5",
      "label": "Build Environment Cleanliness & Isolation",
      "description": "Ensuring build environments start from pristine, un-tampered container states.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s5_d1",
      "label": "Ephemeral Container Destruction",
      "description": "Destroying container filesystems post-build to prevent persistent malware installation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t4_s5_d2",
      "label": "Volume Mount Read-Only Restrictions",
      "description": "Mounting source code directories with read-only permissions where applicable.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5",
      "description": "Detailed first-principles mechanics for CI/CD Pipeline Architecture & Runner Orchestration topic 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s1_d1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s1_d2",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s2",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s2_d1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s2_d2",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s3",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s3_d1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s3_d2",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s4",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s4_d1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s4_d2",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s5",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s5_d1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t5_s5_d2",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6",
      "description": "Detailed first-principles mechanics for CI/CD Pipeline Architecture & Runner Orchestration topic 6.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s1_d1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s1_d2",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s2",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s2_d1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s2_d2",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s3",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s3_d1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s3_d2",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s4",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s4_d1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s4_d2",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s5",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s5_d1",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p1_t6_s5_d2",
      "label": "CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for CI/CD Pipeline Architecture & Runner Orchestration Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2",
      "label": "Software Supply Chain Security & Attestation",
      "description": "SLSA provenance frameworks, Cosign/Sigstore keyless signing, SBOM specifications, and binary verification.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1",
      "label": "SLSA (Supply-chain Levels for Software Artifacts)",
      "description": "Security framework defining standards for software build integrity and provenance.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s1",
      "label": "SLSA Level 1: Build Script & Provenance Generation",
      "description": "Requiring automated build processes and generation of basic build provenance records.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s1_d1",
      "label": "Automated Build Tool Execution",
      "description": "Eliminating manual developer terminal builds in production releases.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s1_d2",
      "label": "Unsigned Provenance Metadata Output",
      "description": "Generating structured JSON metadata documenting build tools and sources.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s2",
      "label": "SLSA Level 2: Hosted Build Service & Signed Provenance",
      "description": "Requiring builds to run on hosted CI/CD services with cryptographically signed provenance.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s2_d1",
      "label": "Hosted CI/CD Platform Isolation",
      "description": "Executing builds on managed CI services (GitHub Actions, Google Cloud Build).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s2_d2",
      "label": "Cryptographic Provenance Signatures",
      "description": "Signing build provenance records with platform private keys.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s3",
      "label": "SLSA Level 3: Isolated Ephemeral Build Environments",
      "description": "Guaranteeing builds execute in isolated, short-lived environments immune to cross-build contamination.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s3_d1",
      "label": "Hermetic Build Execution Mandates",
      "description": "Restricting network access during compilation to prevent external code fetching.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s3_d2",
      "label": "Ephemeral Runner Container Purification",
      "description": "Ensuring build runners are created fresh and destroyed post-compilation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s4",
      "label": "SLSA Level 4: Two-Person Review & Hermetic Builds",
      "description": "Highest security level requiring strict peer code reviews and fully reproducible hermetic builds.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s4_d1",
      "label": "Mandatory Two-Person Code Review Rules",
      "description": "Requiring at least two independent developers to approve all source code commits.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s4_d2",
      "label": "Reproducible Binary Compilation Checks",
      "description": "Verifying that compiling source code independently produces bit-for-bit identical binary outputs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s5",
      "label": "in-toto Provenance Metadata Format",
      "description": "Standardized JSON format for expressing software supply chain attestations.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s5_d1",
      "label": "Statement & Subject Envelope Layout",
      "description": "Structuring in-toto statements binding subject artifact hashes to predicate build details.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t1_s5_d2",
      "label": "SLSA Predicate Type Specs (slsa.dev/provenance/v0.2)",
      "description": "Encoding build invocation parameters, material dependencies, and builder identities.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2",
      "label": "Cosign & Sigstore Keyless Signing Architecture",
      "description": "Free, public infrastructure for signing and verifying container images and software artifacts without managing private keys.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s1",
      "label": "Fulcio Certificate Authority & OIDC Binding",
      "description": "Short-lived X.509 certificate authority issuing signing certificates based on OIDC tokens.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s1_d1",
      "label": "OIDC Identity Claim Verification",
      "description": "Verifying developer or CI/CD workflow identity via OpenID Connect identity tokens.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s1_d2",
      "label": "10-Minute Ephemeral X.509 Certificates",
      "description": "Issuing short-lived signing certificates valid for only 10 minutes, eliminating private key storage.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s2",
      "label": "Rekor Transparency Log & Merkle Proofs",
      "description": "Public append-only Merkle tree log recording all signed artifact metadata.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s2_d1",
      "label": "Immutable Append-Only Signature Entries",
      "description": "Logging signed artifact hashes, Fulcio certificates, and timestamps into Rekor.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s2_d2",
      "label": "Inclusion Proof Generation & Auditability",
      "description": "Generating cryptographic Merkle path proofs verifying artifact signatures exist in public logs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s3",
      "label": "Cosign Container Image Signature Attachments",
      "description": "Attaching digital signatures directly to OCI container registries.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s3_d1",
      "label": "OCI Signature Tag Formats (sha256-xxx.sig)",
      "description": "Pushing signature payloads as distinct OCI image tags alongside target images.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s3_d2",
      "label": "Cosign Image Verification Command (cosign verify)",
      "description": "Verifying container image signatures against Rekor logs and Fulcio root CAs before deployment.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s4",
      "label": "Keyless vs Static Keypair Signing Modes",
      "description": "Comparing ephemeral OIDC keyless signing against static KMS keypair signing.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s4_d1",
      "label": "KMS Keypair Integration (AWS KMS / Vault)",
      "description": "Signing container images using hardware-protected long-term KMS keypairs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s4_d2",
      "label": "Zero Key Management Overhead of Keyless Mode",
      "description": "Eliminating risks of stolen developer private signing keys.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s5",
      "label": "Cosign Attestation Bundles (cosign attest)",
      "description": "Attaching vulnerability scan reports and SBOMs directly to container images.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s5_d1",
      "label": "OCI Attestation Tag Formats (sha256-xxx.att)",
      "description": "Storing signed SBOMs and vulnerability scans in container registries.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t2_s5_d2",
      "label": "Policy Verification Enforcement",
      "description": "Verifying that images contain valid signed SBOMs before approving deployment.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3",
      "label": "Software Bill of Materials (SBOM) Specs",
      "description": "Comprehensive inventory formats documenting all software components, libraries, and dependencies.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s1",
      "label": "SPDX (Software Package Data Exchange) Spec",
      "description": "ISO/IEC 5962:2021 standard format for communicating SBOM information.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s1_d1",
      "label": "SPDX License Expression Identifiers (e.g. Apache-2.0 OR MIT)",
      "description": "Expressing precise open-source software license terms.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s1_d2",
      "label": "Package Verification Codes & Hashes",
      "description": "Hashing component files to generate deterministic verification fingerprints.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s2",
      "label": "CycloneDX OWASP SBOM Standard",
      "description": "Lightweight SBOM standard designed specifically for application security and supply chain analysis.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s2_d1",
      "label": "Component, Service, and Dependency Graphs",
      "description": "Structuring XML/JSON inventories documenting software libraries, APIs, and direct dependencies.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s2_d2",
      "label": "Vulnerability Disclosure Report (VDR) Extensions",
      "description": "Embedding vulnerability status (known, fixed, mitigated) directly within SBOM files.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s3",
      "label": "Syft & Trivy SBOM Generation Tools",
      "description": "Scanning container images, filesystems, and archives to generate SBOM files automatically.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s3_d1",
      "label": "Package Manager Database Parsing (dpkg, rpm, npm, pip)",
      "description": "Parsing OS and language package manager metadata files to detect dependencies.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s3_d2",
      "label": "Layer-by-Layer Container Inspection",
      "description": "Extracting dependencies installed across all intermediate container image layers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s4",
      "label": "Package URL (purl) Standard Identifiers",
      "description": "Standardized URL syntax for identifying software packages across ecosystems.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s4_d1",
      "label": "purl Syntax Format (scheme:type/namespace/name@version)",
      "description": "Encoding package identities unambiguously (e.g. pkg:npm/%40angular/animation@12.3.1).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s4_d2",
      "label": "Cross-Database Vulnerability Lookup Matching",
      "description": "Matching purl identifiers against CVE and OSV vulnerability databases.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s5",
      "label": "SBOM Storage & Continuous Vulnerability Monitoring",
      "description": "Ingesting SBOM files into central security platforms to monitor for newly disclosed CVEs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s5_d1",
      "label": "Dependency-Track Platform Ingestion",
      "description": "Uploading SBOMs to OWASP Dependency-Track for continuous component analysis.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t3_s5_d2",
      "label": "Zero Rescan Dependency Alerting",
      "description": "Alerting on newly disclosed zero-day vulnerabilities instantly without re-scanning container images.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4",
      "label": "Reproducible Builds & Binary Verification",
      "description": "Ensuring that compiling given source code repeatedly produces bit-for-bit identical binary artifacts.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s1",
      "label": "Determinism Factors (Timestamps, File Paths, Ordering)",
      "description": "Eliminating environmental variables that introduce non-deterministic byte variations into binaries.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s1_d1",
      "label": "SOURCE_DATE_EPOCH Environment Standard",
      "description": "Replacing current build timestamps with fixed Unix epoch times in compiled binaries.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s1_d2",
      "label": "-ffile-prefix-map Compiler Path Normalization",
      "description": "Stripping local developer directory paths from compiled binary debug symbols.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s2",
      "label": "Diffoscope Deep Binary Comparison Tool",
      "description": "Analyzing minute structural byte differences between two independently compiled binaries.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s2_d1",
      "label": "Archive & Executable Disassembly Diffs",
      "description": "Unpacking tarballs, ELF binaries, and class files to pinpoint non-deterministic bytes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s2_d2",
      "label": "Header & Compression Variance Identification",
      "description": "Exposing non-deterministic metadata embedded by compilers and archivers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s3",
      "label": "Debian & Arch Linux Reproducible Build Initiatives",
      "description": "Verifying package repository security by rebuilding entire Linux distribution packages.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s3_d1",
      "label": "> 95% Distribution Package Reproducibility",
      "description": "Achieving bit-for-bit reproducible builds across thousands of core OS packages.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s3_d2",
      "label": "Distributed Independent Rebuilder Networks",
      "description": "Running independent rebuilder servers to verify official distribution package signatures.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s4",
      "label": "Go & Rust Deterministic Compilation Defaults",
      "description": "Language toolchains designed with built-in reproducible compilation support.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s4_d1",
      "label": "Go Compiler Trimpath Flag (-trimpath)",
      "description": "Stripping local file system paths from compiled Go binaries by default.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s4_d2",
      "label": "Rust Cargo Deterministic Build Targets",
      "description": "Ensuring deterministic compilation outputs when using identical rustc versions.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s5",
      "label": "Binary Tampering & Backdoor Prevention",
      "description": "Detecting malicious code injected by compromised build servers or compilers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s5_d1",
      "label": "Diverse Double-Compiling (DDC) Validation",
      "description": "Compiling source code with two distinct independent compilers to detect compiler backdoors.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t4_s5_d2",
      "label": "Cryptographic Hash Matching Enforcement",
      "description": "Verifying produced binary hashes match expected reproducible build target hashes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5",
      "label": "Software Supply Chain Security & Attestation Topic 5",
      "description": "Detailed first-principles mechanics for Software Supply Chain Security & Attestation topic 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s1",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Software Supply Chain Security & Attestation Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s1_d1",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s1_d2",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s2",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Software Supply Chain Security & Attestation Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s2_d1",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s2_d2",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s3",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Software Supply Chain Security & Attestation Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s3_d1",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s3_d2",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s4",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Software Supply Chain Security & Attestation Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s4_d1",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s4_d2",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s5",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Software Supply Chain Security & Attestation Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s5_d1",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t5_s5_d2",
      "label": "Software Supply Chain Security & Attestation Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6",
      "label": "Software Supply Chain Security & Attestation Topic 6",
      "description": "Detailed first-principles mechanics for Software Supply Chain Security & Attestation topic 6.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s1",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Software Supply Chain Security & Attestation Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s1_d1",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s1_d2",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s2",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Software Supply Chain Security & Attestation Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s2_d1",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s2_d2",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s3",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Software Supply Chain Security & Attestation Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s3_d1",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s3_d2",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s4",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Software Supply Chain Security & Attestation Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s4_d1",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s4_d2",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s5",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Software Supply Chain Security & Attestation Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s5_d1",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p2_t6_s5_d2",
      "label": "Software Supply Chain Security & Attestation Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Software Supply Chain Security & Attestation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3",
      "label": "Container & Image Security",
      "description": "Image scanning, Distroless minimalist bases, multi-stage optimization, and OCI layer inspection.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1",
      "label": "Trivy & Container Vulnerability Scanning",
      "description": "Comprehensive vulnerability scanner for container images, filesystems, and Git repositories.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s1",
      "label": "OS Package vs Language Library Scanning",
      "description": "Detecting vulnerabilities in operating system packages (apt, apk) and application dependencies.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s1_d1",
      "label": "OS Package DB Parsers (var/lib/dpkg, lib/apk)",
      "description": "Scanning installed system package versions against NVD and distribution security advisories.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s1_d2",
      "label": "Application Manifest Parsing (Gemfile.lock, package-lock.json)",
      "description": "Detecting vulnerable application library versions.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s2",
      "label": "Offline Vulnerability Database Synchronization",
      "description": "Downloading compressed vulnerability databases (trivy-db) for air-gapped CI/CD environments.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s2_d1",
      "label": "ORAS OCI Database Asset Distribution",
      "description": "Distributing vulnerability databases as OCI artifacts via container registries.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s2_d2",
      "label": "Daily Incremental DB Updates",
      "description": "Updating vulnerability definitions daily to capture newly published CVEs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s3",
      "label": "Severity Filtering & Exit Code Enforcement",
      "description": "Configuring vulnerability scan thresholds to fail CI/CD builds on critical findings.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s3_d1",
      "label": "--severity CRITICAL,HIGH Threshold Setup",
      "description": "Filtering scan output to focus on high-risk actionable vulnerabilities.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s3_d2",
      "label": "--exit-code 1 Pipeline Interruption",
      "description": "Failing build pipelines automatically if unmitigated critical CVEs are detected.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s4",
      "label": ".trivyignore False Positive Management",
      "description": "Suppressing specific CVE alerts with documented justification and expiration dates.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s4_d1",
      "label": "CVE-Specific Suppression Files",
      "description": "Documenting accepted vulnerability risks in version-controlled .trivyignore files.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s4_d2",
      "label": "Expiration Date Enforcement (exp: 2026-12-31)",
      "description": "Forcing suppressed CVEs to reappear after configured grace periods expire.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s5",
      "label": "Misconfiguration & Secret Scanning",
      "description": "Scanning Dockerfiles and Kubernetes manifests for security misconfigurations and leaked keys.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s5_d1",
      "label": "Built-in Rego Policy Rules",
      "description": "Detecting containers configured to run as root or lacking resource limits.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t1_s5_d2",
      "label": "High-Entropy Secret Regex Pattern Matching",
      "description": "Detecting hardcoded AWS keys, private SSH keys, and API tokens in image layers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2",
      "label": "Distroless & Minimalist Container Base Images",
      "description": "Constructing ultra-minimal container images containing strictly application code and runtime dependencies.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s1",
      "label": "Google Container Tools Distroless Images",
      "description": "Base images omitting operating system shells, package managers, and standard Unix utilities.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s1_d1",
      "label": "Zero Shell (/bin/sh, /bin/bash) Execution Environment",
      "description": "Preventing attackers from spawning interactive shell sessions during container exploits.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s1_d2",
      "label": "Zero Package Manager (apt, apk, yum) Baseline",
      "description": "Blocking attackers from installing downloading utilities (curl, wget) inside compromised containers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s2",
      "label": "Scratch Base Image (FROM scratch)",
      "description": "Empty 0-byte base image for static binaries (Go, Rust, C++).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s2_d1",
      "label": "Static C Binary Compilation (-static / musl)",
      "description": "Compiling binaries statically without dynamic C library dependencies.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s2_d2",
      "label": "CA Certificate & Timezone File Injection",
      "description": "Copying /etc/ssl/certs/ca-certificates.crt into scratch images for HTTPS TLS validation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s3",
      "label": "Chainguard Wolfi Undistricted Base Images",
      "description": "Container-native Linux distribution designed for minimal attack surfaces and daily zero-CVE updates.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s3_d1",
      "label": "apk-Based Minimal Component Packaging",
      "description": "Installing granular packages without unnecessary background system libraries.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s3_d2",
      "label": "Daily Automated CVE Patching Pipelines",
      "description": "Rebuilding and publishing updated base images daily to guarantee zero unpatched CVEs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s4",
      "label": "Attack Surface Area Reduction Metrics",
      "description": "Quantifying vulnerability reduction achieved by shrinking container image footprints.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s4_d1",
      "label": "90%+ Reduction in Scanner CVE Findings",
      "description": "Reducing CVE counts from 500+ (Ubuntu base) down to 0-2 (Distroless base).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s4_d2",
      "label": "Image Size Footprint Reduction (800MB down to 20MB)",
      "description": "Accelerating deployment speeds and container cold start creation times.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s5",
      "label": "Debugging Distroless Containers (Ephemeral Containers)",
      "description": "Debugging shell-less containers using Kubernetes ephemeral debug containers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s5_d1",
      "label": "kubectl debug Ephemeral Container Attachment",
      "description": "Attaching temporary debugging containers sharing target container process namespaces.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t2_s5_d2",
      "label": "Zero Modification Production Image Policy",
      "description": "Inspecting live running container processes without installing debug tools into production images.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3",
      "label": "Docker Multi-Stage Builds & Optimization",
      "description": "Structuring Dockerfiles to isolate build toolchains from final lightweight runtime images.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s1",
      "label": "Multi-Stage Build Target Syntax (FROM ... AS builder)",
      "description": "Defining intermediate build stages to compile code and dependencies.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s1_d1",
      "label": "COPY --from=builder Output Transfer",
      "description": "Copying only compiled binaries or dist folders into fresh, clean runtime stages.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s1_d2",
      "label": "Build Toolchain Discarding (Compilers, SDKs, Headers)",
      "description": "Leaving heavy compilers (gcc, maven, go SDK) behind in discarded build stages.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s2",
      "label": "BuildKit Cache Mount Mechanics (--mount=type=cache)",
      "description": "Persisting package manager caches across Docker builds without writing them to image layers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s2_d1",
      "label": "Target Directory Caching (--mount=type=cache,target=/root/.cache)",
      "description": "Caching compiler and package manager download directories between builds.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s2_d2",
      "label": "Zero Cache Layer Overhead",
      "description": "Preventing temporary build cache files from inflating final container image sizes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s3",
      "label": "BuildKit Secret Mounts (--mount=type=secret)",
      "description": "Passing secret credentials (SSH keys, registry tokens) into build steps safely.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s3_d1",
      "label": "In-Memory Secret File Mounts",
      "description": "Exposing secrets to RUN commands without writing secret data into intermediate image layer tarballs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s3_d2",
      "label": "Zero Secret History Leakage",
      "description": "Guaranteeing secrets do not persist in final container image layers or docker history logs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s4",
      "label": "Layer Ordering & Cache Invalidation Rules",
      "description": "Ordering Dockerfile instructions from least frequently changed to most frequently changed.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s4_d1",
      "label": "Dependency Lockfile Copying Before Source Code",
      "description": "Copying package.json before source code to preserve cached npm install layers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s4_d2",
      "label": "Layer Cache Invalidation Cascade Impact",
      "description": "Recognizing that modifying a Dockerfile instruction invalidates all subsequent layer caches.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s5",
      "label": "Non-Root User Creation & USER Directive",
      "description": "Enforcing unprivileged user execution inside Dockerfiles.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s5_d1",
      "label": "Explicit Group and User Creation (RUN groupadd -r app && useradd -r -g app app)",
      "description": "Creating dedicated system users for application execution.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t3_s5_d2",
      "label": "USER app Instruction Placement",
      "description": "Switching execution context away from root prior to container ENTRYPOINT execution.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4",
      "label": "OCI Image Format & Layer Inspection",
      "description": "Open Container Initiative image format specifications, manifest structures, and layer tarballs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s1",
      "label": "OCI Image Specification Layout",
      "description": "Standardized directory layout containing manifest, config, and layer blob files.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s1_d1",
      "label": "index.json & manifest.json Envelopes",
      "description": "Mapping target architecture platforms (amd64, arm64) to image manifests.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s1_d2",
      "label": "SHA-256 Content-Addressable Blob Storage",
      "description": "Storing image layers as content-addressable tar.gz files named by SHA-256 hashes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s2",
      "label": "Image Manifest JSON Structure",
      "description": "Metadata document listing container configuration hashes and ordered layer digests.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s2_d1",
      "label": "Config JSON Reference (config.digest)",
      "description": "Pointing to image configuration JSON specifying environment variables and entrypoints.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s2_d2",
      "label": "Ordered Layer Array (layers[])",
      "description": "Listing sequential diff layer tarballs applied to construct container filesystems.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s3",
      "label": "Dive Container Layer Inspection Tool",
      "description": "Terminal utility for exploring container image layers and discovering wasted space.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s3_d1",
      "label": "Layer-by-Layer Filesystem Tree Exploration",
      "description": "Inspecting exact file additions, modifications, and deletions per image layer.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s3_d2",
      "label": "Wasted Space Efficiency Metrics",
      "description": "Identifying duplicate files and deleted files retained in historical intermediate layers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s4",
      "label": "Union File System (Overlay2) Mechanics",
      "description": "Combining lower read-only image layers with an upper writable layer into unified root filesystems.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s4_d1",
      "label": "Lowerdir, Upperdir, Workdir, and Mergedir Folders",
      "description": "Configuring Linux overlay mount parameters for running containers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s4_d2",
      "label": "Copy-on-Write (CoW) Performance Penalties",
      "description": "Copying modified files from lower read-only layers to upper writable layers on first modification.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s5",
      "label": "Multi-Architecture OCI Image Indexes",
      "description": "Publishing single image tags supporting multiple CPU architectures (amd64, arm64, s390x).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s5_d1",
      "label": "Docker Buildx Multi-Arch Builds",
      "description": "Building multi-architecture image manifests using QEMU emulation or remote builders.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t4_s5_d2",
      "label": "Client Architecture Auto-Selection",
      "description": "Enabling container runtimes to pull matching CPU architecture layers automatically.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5",
      "label": "Container & Image Security Topic 5",
      "description": "Detailed first-principles mechanics for Container & Image Security topic 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s1",
      "label": "Container & Image Security Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Container & Image Security Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s1_d1",
      "label": "Container & Image Security Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s1_d2",
      "label": "Container & Image Security Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s2",
      "label": "Container & Image Security Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Container & Image Security Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s2_d1",
      "label": "Container & Image Security Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s2_d2",
      "label": "Container & Image Security Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s3",
      "label": "Container & Image Security Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Container & Image Security Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s3_d1",
      "label": "Container & Image Security Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s3_d2",
      "label": "Container & Image Security Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s4",
      "label": "Container & Image Security Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Container & Image Security Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s4_d1",
      "label": "Container & Image Security Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s4_d2",
      "label": "Container & Image Security Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s5",
      "label": "Container & Image Security Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Container & Image Security Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s5_d1",
      "label": "Container & Image Security Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t5_s5_d2",
      "label": "Container & Image Security Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6",
      "label": "Container & Image Security Topic 6",
      "description": "Detailed first-principles mechanics for Container & Image Security topic 6.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s1",
      "label": "Container & Image Security Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Container & Image Security Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s1_d1",
      "label": "Container & Image Security Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s1_d2",
      "label": "Container & Image Security Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s2",
      "label": "Container & Image Security Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Container & Image Security Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s2_d1",
      "label": "Container & Image Security Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s2_d2",
      "label": "Container & Image Security Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s3",
      "label": "Container & Image Security Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Container & Image Security Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s3_d1",
      "label": "Container & Image Security Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s3_d2",
      "label": "Container & Image Security Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s4",
      "label": "Container & Image Security Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Container & Image Security Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s4_d1",
      "label": "Container & Image Security Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s4_d2",
      "label": "Container & Image Security Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s5",
      "label": "Container & Image Security Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Container & Image Security Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s5_d1",
      "label": "Container & Image Security Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p3_t6_s5_d2",
      "label": "Container & Image Security Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Container & Image Security Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4",
      "label": "Static & Dynamic Code Analysis (SAST / DAST)",
      "description": "Static application security testing, dynamic scanning, IAST runtime agents, and vulnerability triaging.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1",
      "label": "SAST & Semgrep Pattern Matching",
      "description": "Lightweight static analysis engine evaluating code syntax trees using AST-based pattern matching rules.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s1",
      "label": "Abstract Syntax Tree (AST) Parsing Engine",
      "description": "Parsing source code into structured ASTs to analyze code semantics beyond regex pattern matching.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s1_d1",
      "label": "Tree-sitter Multilingual Parser Integration",
      "description": "Parsing Python, Java, Go, TypeScript, and C into standardized AST representations.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s1_d2",
      "label": "Semantic Equivalence Matching",
      "description": "Matching code patterns regardless of whitespace, variable naming, or code formatting.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s2",
      "label": "Semgrep Rule Syntax (pattern, pattern-inside, metavariable-regex)",
      "description": "Writing declarative YAML security rules matching vulnerable code structures.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s2_d1",
      "label": "Metavariable Binding ($VAR)",
      "description": "Capturing code expressions in metavariables to analyze usage across function blocks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s2_d2",
      "label": "Ellipsis Operator (...) Syntax",
      "description": "Matching arbitrary sequences of arguments or statements between target code patterns.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s3",
      "label": "Taint Analysis & Source-to-Sink Dataflow Tracking",
      "description": "Tracking untrusted user inputs (sources) as they flow into dangerous execution functions (sinks).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s3_d1",
      "label": "Taint Sources (http.Request, query_params)",
      "description": "Marking untrusted user input parameters as tainted data sources.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s3_d2",
      "label": "Taint Sinks (exec.Command, db.Exec, eval)",
      "description": "Detecting when tainted data reaches sinks without passing through sanitizer functions.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s4",
      "label": "Inline PR Commenting & CI/CD Integration",
      "description": "Posting static analysis findings directly as inline comments on Pull Requests.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s4_d1",
      "label": "Diff-Only Scanning (--focused-diff)",
      "description": "Scanning only modified code lines in PRs to deliver sub-minute scan results.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s4_d2",
      "label": "Developer Workflow Interruption Minimization",
      "description": "Providing inline code fix suggestions directly inside developer PR views.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s5",
      "label": "Custom Enterprise Security Rule Authoring",
      "description": "Authoring custom internal SAST rules to enforce company-specific security guidelines.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s5_d1",
      "label": "Deprecated Internal API Blocking",
      "description": "Failing builds if developers invoke banned internal crypto or auth functions.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t1_s5_d2",
      "label": "Mandatory Authorization Check Enforcement",
      "description": "Verifying that endpoint handlers invoke authorization middleware checks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2",
      "label": "DAST & OWASP ZAP Automated Scanning",
      "description": "Dynamic Application Security Testing scanning running web applications for vulnerabilities.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s1",
      "label": "Black-Box Dynamic Application Inspection",
      "description": "Analyzing running web applications without access to underlying source code.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s1_d1",
      "label": "Automated Web Spidering & AJAX Crawling",
      "description": "Discovering application endpoints and forms by crawling HTML and executing JavaScript.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s1_d2",
      "label": "Active Vulnerability Fuzzing Payloads",
      "description": "Injecting SQLi, XSS, and SSRF attack payloads into HTTP parameters and headers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s2",
      "label": "OWASP ZAP Automation Framework (ZAF)",
      "description": "Configuring declarative YAML automation jobs for ZAP security scans in CI/CD.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s2_d1",
      "label": "OpenAPI / Swagger Definition Import",
      "description": "Importing API schemas to target DAST fuzzing at documented REST endpoints.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s2_d2",
      "label": "Authentication Script Configuration (OAuth2 / Form Auth)",
      "description": "Configuring ZAP session scripts to authenticate as valid users before scanning.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s3",
      "label": "DAST Scan Timing & Staging Environment Setup",
      "description": "Executing automated DAST scans against ephemeral staging deployments.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s3_d1",
      "label": "Post-Deployment Pipeline Stage Execution",
      "description": "Triggering DAST scans after successful deployment to ephemeral preview environments.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s3_d2",
      "label": "Test Data Mutation & Database Reset Workflows",
      "description": "Resetting test databases post-scan to purge junk data injected by DAST fuzzing.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s4",
      "label": "DAST False Positive Triaging & Limitations",
      "description": "Managing challenges associated with high false positive rates in dynamic scanning.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s4_d1",
      "label": "Heuristic Alert Confidence Scoring (High, Medium, Low)",
      "description": "Filtering DAST alerts based on confidence and severity metrics.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s4_d2",
      "label": "Blind Vulnerability Detection Bounds",
      "description": "Recognizing DAST limitations in detecting un-triggered backend vulnerabilities.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s5",
      "label": "Headless Browser Fuzzing (Selenium / Playwright ZAP Integration)",
      "description": "Crawling modern Single Page Applications (SPAs) using headless browser automation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s5_d1",
      "label": "DOM Event Execution (Click, Hover, Submit)",
      "description": "Triggering JavaScript DOM handlers to uncover hidden API endpoints.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t2_s5_d2",
      "label": "DOM-based XSS Payload Execution Tracking",
      "description": "Detecting XSS payload execution inside browser DOM contexts.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3",
      "label": "IAST Runtime Interactive Security Agents",
      "description": "Interactive Application Security Testing combining SAST and DAST by monitoring running code from inside the runtime.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s1",
      "label": "Runtime Instrumentation Agent Architecture",
      "description": "Embedding security monitoring agents into language runtimes (JVM, CLR, Node.js).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s1_d1",
      "label": "Bytecode Instrumentation & Hooking",
      "description": "Injecting security monitoring hooks into standard library functions during class loading.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s1_d2",
      "label": "Zero Source Code Modification Integration",
      "description": "Attaching agents via JVM flags (-javaagent:iast-agent.jar) without modifying application code.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s2",
      "label": "Real-Time Dataflow & Taint Tracking inside Memory",
      "description": "Monitoring actual variable values as they travel through application memory during QA testing.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s2_d1",
      "label": "Accurate Source-to-Sink Path Verification",
      "description": "Confirming vulnerability existence only when un-sanitized user data reaches database execution calls.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s2_d2",
      "label": "Near-Zero False Positive Accuracy",
      "description": "Eliminating false positives by verifying real runtime execution paths.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s3",
      "label": "Passive Inspection During Functional QA Testing",
      "description": "Gathering security telemetry during standard automated functional and integration test suites.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s3_d1",
      "label": "Zero Dedicated Security Scan Window Required",
      "description": "Analyzing code security automatically while QA teams run standard functional tests.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s3_d2",
      "label": "Instant Developer Feedback on Exact File and Line Number",
      "description": "Reporting vulnerabilities alongside exact stack traces and source file line numbers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s4",
      "label": "IAST vs SAST vs DAST Performance Tradeoffs",
      "description": "Evaluating trade-offs between static, dynamic, and interactive analysis approaches.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s4_d1",
      "label": "Runtime Overhead Impact (5-15% CPU / Memory)",
      "description": "Managing minor runtime overheads rendering IAST ideal for QA, not production.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s4_d2",
      "label": "Code Coverage Dependency Limitations",
      "description": "Recognizing that IAST analyzes only code paths actually executed during testing.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s5",
      "label": "API Endpoint Auto-Discovery & Route Mapping",
      "description": "Mapping internal application routing structures automatically during execution.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s5_d1",
      "label": "Un-documented Endpoint Identification",
      "description": "Discovering hidden or un-documented API endpoints executed by client applications.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t3_s5_d2",
      "label": "Parameter Sanitization Coverage Auditing",
      "description": "Verifying that all input parameters pass through appropriate validation libraries.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4",
      "label": "Vulnerability Triaging & DefectDojo Management",
      "description": "Centralizing and deduplicating security findings across SAST, DAST, IAST, and container scanners.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s1",
      "label": "OWASP DefectDojo Vulnerability Aggregation",
      "description": "Open-source vulnerability management platform ingesting reports from 120+ security tools.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s1_d1",
      "label": "Automated Finding Deduplication Engine",
      "description": "Grouping identical findings reported by multiple scanners based on file, line, and CVE ID.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s1_d2",
      "label": "Unified Dashboard Severity Metrics",
      "description": "Visualizing enterprise security posture across applications and teams.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s2",
      "label": "Jira / GitHub Issue Tracking Automation",
      "description": "Creating developer tickets automatically for confirmed security findings.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s2_d1",
      "label": "Bidirectional Status Synchronization",
      "description": "Closing security findings in DefectDojo automatically when Jira tickets are marked Done.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s2_d2",
      "label": "SLA Expiration Countdown Tracking",
      "description": "Tracking remediation SLAs based on finding severity (e.g. Critical 7 days, High 30 days).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s3",
      "label": "Vulnerability Exploitability eXchange (VEX)",
      "description": "Standardized format for asserting whether an application is actually impacted by a specific CVE in its dependencies.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s3_d1",
      "label": "VEX Status Justifications (not_affected, affected, fixed)",
      "description": "Asserting that a vulnerable library function is never invoked in application code.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s3_d2",
      "label": "Scanner False Alert Suppression",
      "description": "Preventing security scanners from flagging non-exploitable CVE dependencies.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s4",
      "label": "Risk-Based Prioritization (EPSS & KEV Scores)",
      "description": "Prioritizing vulnerability remediation using real-world exploitability data.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s4_d1",
      "label": "CISA Known Exploited Vulnerabilities (KEV) Catalog",
      "description": "Prioritizing CVEs confirmed to be actively exploited in wild cyberattacks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s4_d2",
      "label": "EPSS (Exploit Prediction Scoring System) Probabilities",
      "description": "Focusing remediation on CVEs with high EPSS probability scores (> 50%).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s5",
      "label": "Security Gate Enforcement in CD Pipelines",
      "description": "Blocking deployment pipelines if unresolved security findings exceed SLA thresholds.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s5_d1",
      "label": "Quality Gate API Evaluations",
      "description": "Querying vulnerability management APIs during deployment pipeline execution.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t4_s5_d2",
      "label": "Automated Deployment Blockers",
      "description": "Aborting production deployments if active Critical vulnerabilities breach SLA windows.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5",
      "description": "Detailed first-principles mechanics for Static & Dynamic Code Analysis (SAST / DAST) topic 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s1",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s1_d1",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s1_d2",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s2",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s2_d1",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s2_d2",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s3",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s3_d1",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s3_d2",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s4",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s4_d1",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s4_d2",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s5",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s5_d1",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t5_s5_d2",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6",
      "description": "Detailed first-principles mechanics for Static & Dynamic Code Analysis (SAST / DAST) topic 6.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s1",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s1_d1",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s1_d2",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s2",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s2_d1",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s2_d2",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s3",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s3_d1",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s3_d2",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s4",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s4_d1",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s4_d2",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s5",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s5_d1",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p4_t6_s5_d2",
      "label": "Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Static & Dynamic Code Analysis (SAST / DAST) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5",
      "label": "Secrets Management & Cryptographic Transit",
      "description": "Vault KV engines, dynamic cloud credentials, transit encryption-as-a-service, and secret scanning.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1",
      "label": "HashiCorp Vault Architecture & Unsealing",
      "description": "Centralized secret management platform providing encrypted storage and access control.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s1",
      "label": "Vault Storage Barrier & Physical Encryption",
      "description": "Encrypting all Vault data before writing to persistent storage backends (Consul, Raft, Integrated Storage).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s1_d1",
      "label": "AES-256-GCM Barrier Encryption Key",
      "description": "Encrypting key-value entries with master barrier keys stored exclusively in memory.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s1_d2",
      "label": "Storage Backend Agnosticism",
      "description": "Ensuring underlying storage drivers possess zero access to plaintext secret bytes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s2",
      "label": "Shamir Secret Sharing Unseal Ceremony",
      "description": "Splitting Vault master key into N key shares requiring K shares to unseal the barrier on boot.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s2_d1",
      "label": "5 Key Shares / 3 Threshold Configuration (Default)",
      "description": "Distributing 5 key shares to distinct security custodians during initialization.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s2_d2",
      "label": "Unseal Key Reconstruction in Memory",
      "description": "Combining K valid key shares to reconstruct the master encryption key in RAM.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s3",
      "label": "Cloud Auto-Unseal (AWS KMS / GCP KMS / Vault)",
      "description": "Automating Vault unsealing using cloud Key Management Services.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s3_d1",
      "label": "KMS Encrypted Master Key Storage",
      "description": "Encrypting Vault master keys using cloud KMS keys to enable automatic unsealing upon pod restarts.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s3_d2",
      "label": "Elimination of Manual Unseal Ceremonies",
      "description": "Enabling seamless automated recovery of Vault clusters in cloud environments.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s4",
      "label": "Vault Token & Authentication Methods",
      "description": "Authenticating clients using AppRole, Kubernetes, AWS, or GitHub auth methods.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s4_d1",
      "label": "Kubernetes ServiceAccount Token Verification",
      "description": "Verifying pod ServiceAccount tokens with Kubernetes API servers to issue Vault tokens.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s4_d2",
      "label": "AppRole RoleID and SecretID Exchange",
      "description": "Authenticating CI/CD runners using AppRole credentials to acquire short-lived Vault tokens.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s5",
      "label": "Lease & TTL Auto-Revocation Engine",
      "description": "Associating lease durations with all secrets to enforce automatic revocation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s5_d1",
      "label": "Lease Renewal Calls (vault lease renew)",
      "description": "Requiring client applications to renew secret leases periodically before expiration.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t1_s5_d2",
      "label": "Automatic Secret Destruction on Expiration",
      "description": "Revoking expired secret leases automatically when clients fail to renew.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2",
      "label": "Dynamic Secrets Generation Pipelines",
      "description": "Generating short-lived credentials on-demand for databases, cloud providers, and SSH access.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s1",
      "label": "Vault Database Secrets Engine",
      "description": "Creating unique temporary SQL/NoSQL database users with automatic expiration.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s1_d1",
      "label": "Dynamic CREATE USER Statement Execution",
      "description": "Executing database statements to generate temporary users (e.g. v-app-db-123) on read requests.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s1_d2",
      "label": "Automated Revocation DROP USER Execution",
      "description": "Executing DROP USER statements automatically when lease TTLs expire.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s2",
      "label": "Vault AWS / GCP Dynamic IAM Credentials",
      "description": "Generating short-lived cloud IAM access keys or federated session tokens.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s2_d1",
      "label": "STS AssumeRole Credentials Generation",
      "description": "Issuing temporary AWS access keys with 15-minute expiration windows.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s2_d2",
      "label": "Zero Long-Lived Static IAM Keys",
      "description": "Eliminating static AWS access keys stored in application configuration files.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s3",
      "label": "Vault SSH Dynamic Key Signing CA",
      "description": "Signing developer SSH public keys with Vault CA private keys for temporal server access.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s3_d1",
      "label": "Signed Client SSH Certificate Generation",
      "description": "Issuing short-lived (5-minute) SSH certificates specifying authorized Principals and extensions.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s3_d2",
      "label": "SSHD Principals & CA Validation Config",
      "description": "Configuring server sshd_config files to trust Vault CA public keys without managing authorized_keys files.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s4",
      "label": "Dynamic Secrets Performance Caching",
      "description": "Caching dynamic secrets in application memory to reduce Vault API load.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s4_d1",
      "label": "In-Memory Lease Expiration Tracking",
      "description": "Refreshing cached secrets 60 seconds prior to lease expiration.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s4_d2",
      "label": "Vault Throttling Circuit Breakers",
      "description": "Handling Vault API degradation gracefully by using cached credentials within valid TTL windows.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s5",
      "label": "Audit Logging & Secret Access Tracking",
      "description": "Logging all secret request operations to immutable audit files.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s5_d1",
      "label": "HMAC-SHA256 Secret Value Hashing",
      "description": "Hashing secret values in audit logs to prevent exposing secrets in log files.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t2_s5_d2",
      "label": "Real-Time SIEM Audit Forwarding",
      "description": "Streaming Vault audit logs to SIEM platforms to detect anomalous secret access attempts.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3",
      "label": "Secret Scanning & Leak Prevention",
      "description": "Detecting hardcoded API keys, passwords, and tokens in source code repositories and commit histories.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s1",
      "label": "Gitleaks & Secret-Bench Regex Engine",
      "description": "Scanning Git repositories for high-entropy strings and known secret format patterns.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s1_d1",
      "label": "High Entropy Shannon Score Evaluation",
      "description": "Calculating Shannon entropy to detect random cryptographic keys and passwords.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s1_d2",
      "label": "Known Provider Regex Rules (AWS, GitHub, Slack, Stripe)",
      "description": "Matching specific prefix patterns (e.g. AKIA..., ghp_..., xoxb-...).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s2",
      "label": "Pre-Commit Hook Interception (git-leaks / pre-commit)",
      "description": "Intercepting local git commit operations to block hardcoded secrets before commit creation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s2_d1",
      "label": "Local Staged File Scanning",
      "description": "Scanning staged git diffs locally on developer workstations prior to commit completion.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s2_d2",
      "label": "Commit Abort on Secret Detection",
      "description": "Aborting commit operations automatically if secret patterns are discovered.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s3",
      "label": "Git History Rewriting & Secret Revocation",
      "description": "Purging leaked secrets permanently from full Git commit histories.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s3_d1",
      "label": "git-filter-repo & BFD Repo-Cleaner Execution",
      "description": "Rewriting git tree objects to remove leaked secret strings from historical commits.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s3_d2",
      "label": "Immediate Compromised Credential Revocation Mandate",
      "description": "Revoking leaked credentials instantly regardless of whether git history was rewritten.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s4",
      "label": "GitHub Secret Scanning & Push Protection",
      "description": "Native GitHub security feature blocking git push operations containing known secret formats.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s4_d1",
      "label": "Real-Time Push Protection Interception",
      "description": "Rejecting git push requests at GitHub edge proxies if secrets are detected.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s4_d2",
      "label": "Automated Partner Token Revocation",
      "description": "Notifying service providers (AWS, Slack) automatically to revoke leaked tokens within seconds.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s5",
      "label": "Secret Detection False Positive Management",
      "description": "Managing false positive alerts triggered by mock test keys and dummy tokens.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s5_d1",
      "label": "gitleaks.toml Whitelist Configuration",
      "description": "Configuring path and commit exclusions for legitimate test fixture files.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t3_s5_d2",
      "label": "Inline Suppression Annotations (# gitleaks:allow)",
      "description": "Annotating specific code lines to suppress false positive secret scanner alerts.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4",
      "label": "Kubernetes Secrets Architecture & Encryption",
      "description": "Storing, mounting, and securing secret data inside Kubernetes clusters.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s1",
      "label": "etcd KMS Provider Envelope Encryption",
      "description": "Encrypting Kubernetes Secret objects stored at rest inside etcd databases.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s1_d1",
      "label": "KMS v2 API Envelope Encryption",
      "description": "Encrypting secret values with local Data Encryption Keys (DEKs) wrapped by cloud KMS keys.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s1_d2",
      "label": "Zero Plaintext Secret Storage in etcd",
      "description": "Preventing raw base64 secret values from being read directly from raw etcd disk dumps.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s2",
      "label": "Secret Volume Mounts vs Environment Variables",
      "description": "Comparing security trade-offs of mounting secrets as tmpfs files vs environment variables.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s2_d1",
      "label": "tmpfs Memory Volume Mount Preference",
      "description": "Mounting secrets as in-memory tmpfs files to prevent writing secrets to persistent host node disks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s2_d2",
      "label": "Environment Variable Leakage Vulnerabilities",
      "description": "Avoiding environment variables because they are exposed in process listings and crash dumps.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s3",
      "label": "Secrets Store CSI Driver (Vault / AWS Provider)",
      "description": "Mounting external secret store items directly as volumes into Kubernetes pods.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s3_d1",
      "label": "SecretProviderClass Custom Resource Specs",
      "description": "Defining declarative rules to fetch target secrets from Vault or AWS Secrets Manager.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s3_d2",
      "label": "In-Memory Pod Volume Attachment",
      "description": "Attaching secrets as virtual tmpfs volumes without storing secret data in Kubernetes etcd.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s4",
      "label": "Sealed Secrets (Bitnami SealedSecrets Operator)",
      "description": "Encrypting Kubernetes Secrets into asymmetric custom resources safe for public Git storage.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s4_d1",
      "label": "Asymmetric Public Key Local Encryption (kubeseal)",
      "description": "Encrypting secrets locally using cluster public keys before committing to Git.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s4_d2",
      "label": "Cluster Controller Private Key Decryption",
      "description": "Decrypting SealedSecret CRDs inside the cluster using private keys accessible only to the operator.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s5",
      "label": "RBAC Access Control for Secrets",
      "description": "Restricting Kubernetes API permission to read or modify Secret resources.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s5_d1",
      "label": "Strict Role / ClusterRole Resource Binding",
      "description": "Restricting get, list, and watch permissions on secrets resources to authorized admin service accounts.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t4_s5_d2",
      "label": "Audit Logging of Secret Read Operations",
      "description": "Logging all API server secret fetch calls to audit logs to track pod secret access.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5",
      "label": "Secrets Management & Cryptographic Transit Topic 5",
      "description": "Detailed first-principles mechanics for Secrets Management & Cryptographic Transit topic 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s1",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Secrets Management & Cryptographic Transit Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s1_d1",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s1_d2",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s2",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Secrets Management & Cryptographic Transit Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s2_d1",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s2_d2",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s3",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Secrets Management & Cryptographic Transit Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s3_d1",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s3_d2",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s4",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Secrets Management & Cryptographic Transit Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s4_d1",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s4_d2",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s5",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Secrets Management & Cryptographic Transit Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s5_d1",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t5_s5_d2",
      "label": "Secrets Management & Cryptographic Transit Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6",
      "label": "Secrets Management & Cryptographic Transit Topic 6",
      "description": "Detailed first-principles mechanics for Secrets Management & Cryptographic Transit topic 6.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s1",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Secrets Management & Cryptographic Transit Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s1_d1",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s1_d2",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s2",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Secrets Management & Cryptographic Transit Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s2_d1",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s2_d2",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s3",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Secrets Management & Cryptographic Transit Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s3_d1",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s3_d2",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s4",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Secrets Management & Cryptographic Transit Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s4_d1",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s4_d2",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s5",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Secrets Management & Cryptographic Transit Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s5_d1",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p5_t6_s5_d2",
      "label": "Secrets Management & Cryptographic Transit Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secrets Management & Cryptographic Transit Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6",
      "label": "Policy-as-Code & Governance (OPA / Kyverno)",
      "description": "Declarative policy enforcement engines, Rego language specs, admission controllers, and cloud guardrails.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1",
      "label": "Open Policy Agent (OPA) & Rego Language",
      "description": "General-purpose policy engine evaluating JSON/YAML data against declarative Rego policy rules.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s1",
      "label": "Rego Declarative Query Evaluation Engine",
      "description": "Evaluating relational queries against input JSON documents to produce policy decisions.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s1_d1",
      "label": "Input JSON Document Ingestion (input)",
      "description": "Ingesting arbitrary JSON request payloads (Kubernetes admission requests, Terraform plans).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s1_d2",
      "label": "Default Deny Rule Declarations (default allow = false)",
      "description": "Enforcing secure default-deny logic in policy packages.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s2",
      "label": "Rego Rule Expressions & Comprehensions",
      "description": "Writing policy rules using sets, arrays, and object comprehensions.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s2_d1",
      "label": "Incremental Rule Definitions (deny[msg])",
      "description": "Accumulating error messages into set collections when policy violations are detected.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s2_d2",
      "label": "Every Keyword Array Iteration (every x in array)",
      "description": "Iterating over array elements to verify compliance across complex JSON documents.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s3",
      "label": "OPA Gatekeeper Kubernetes Operator",
      "description": "Integrating OPA as an admission controller using Custom Resource Definitions (CRDs).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s3_d1",
      "label": "ConstraintTemplate Custom Resource Specs",
      "description": "Defining reusable parameterized Rego policy logic templates.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s3_d2",
      "label": "Constraint Resource Instantiation",
      "description": "Instantiating specific policy constraints targeting specific Kubernetes namespaces or resources.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s4",
      "label": "OPA Performance Optimization & WebAssembly (Wasm)",
      "description": "Compiling Rego policies into WebAssembly binaries for sub-millisecond evaluation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s4_d1",
      "label": "OPA Wasm Compilation Target (opa build -t wasm)",
      "description": "Compiling Rego policies into standalone WebAssembly modules.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s4_d2",
      "label": "Sub-Millisecond Policy Evaluation Latency",
      "description": "Evaluating policies inline in API gateways and proxies with microsecond overhead.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s5",
      "label": "Conftest CLI & Local Policy Testing",
      "description": "Testing configuration files (Terraform, Dockerfile, Kubernetes) against OPA policies locally.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s5_d1",
      "label": "conftest test Command Execution",
      "description": "Running local policy checks against configuration files during CI/CD builds.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t1_s5_d2",
      "label": "Unit Testing Rego Policies (opa test)",
      "description": "Writing automated unit tests verifying policy behavior across compliance scenarios.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2",
      "label": "Kyverno Kubernetes-Native Policy Engine",
      "description": "Policy engine designed specifically for Kubernetes using familiar YAML manifest syntax.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s1",
      "label": "YAML-Native Policy Declarations (Zero Rego Requirement)",
      "description": "Authoring policy rules using standard Kubernetes resource patterns without learning new languages.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s1_d1",
      "label": "ClusterPolicy & Policy CRD Specifications",
      "description": "Defining cluster-wide or namespace-scoped validation rules in simple YAML.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s1_d2",
      "label": "Pattern & AnyPattern Matching Rules",
      "description": "Matching target resource attributes against expected YAML overlay patterns.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s2",
      "label": "Validation, Mutation, and Generation Rule Types",
      "description": "Enforcing policy rules across three core execution capabilities.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s2_d1",
      "label": "Validate Rules (Enforce vs Audit)",
      "description": "Rejecting non-compliant resource submissions or logging audit warnings.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s2_d2",
      "label": "Mutate Rules (Overlay / JSON Patch)",
      "description": "Injecting required sidecars, security contexts, or default labels automatically.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s2_d3",
      "label": "Generate Rules (Clone / Data)",
      "description": "Generating default NetworkPolicies or ResourceQuotas upon namespace creation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s3",
      "label": "Image Verification & Cosign Integration",
      "description": "Validating container image signatures directly within Kubernetes admission controllers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s3_d1",
      "label": "verifyImages Policy Rules",
      "description": "Configuring Kyverno to verify Cosign signatures and Rekor logs before approving pod creation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s3_d2",
      "label": "Keyless OIDC Issuer Whitelisting",
      "description": "Verifying that images were built and signed by authorized GitHub Actions workflows.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s4",
      "label": "CLI Testing & Policy Report CRDs",
      "description": "Scanning clusters and local manifests using the Kyverno CLI.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s4_d1",
      "label": "kyverno test Command Validation",
      "description": "Testing Kyverno policies against local test manifests in CI/CD pipelines.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s4_d2",
      "label": "PolicyReport & ClusterPolicyReport CRDs",
      "description": "Generating native Kubernetes resources summarizing cluster compliance status.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s5",
      "label": "Kyverno vs OPA Gatekeeper Selection Criteria",
      "description": "Comparing Kubernetes-native YAML simplicity against general-purpose Rego flexibility.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s5_d1",
      "label": "Kubernetes-Centric Teams Preference (Kyverno)",
      "description": "Selecting Kyverno for rapid adoption using familiar Kubernetes YAML constructs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t2_s5_d2",
      "label": "Multi-Platform Governance Preference (OPA)",
      "description": "Selecting OPA for unified policy enforcement across Terraform, APIs, and Kubernetes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3",
      "label": "Kubernetes Admission Controllers & Webhooks",
      "description": "Extending Kubernetes API server functionality using validating and mutating admission webhooks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s1",
      "label": "ValidatingAdmissionWebhook Protocol",
      "description": "Intercepting API requests to reject non-compliant resources prior to etcd persistence.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s1_d1",
      "label": "AdmissionReview Request / Response Objects",
      "description": "Receiving JSON API requests and returning allow/deny decisions with error messages.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s1_d2",
      "label": "Sub-Second API Timeout Limits (timeoutSeconds: 5)",
      "description": "Enforcing strict webhook response timeouts to prevent stalling API server operations.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s2",
      "label": "MutatingAdmissionWebhook Order Execution",
      "description": "Modifying API request objects before validation and storage.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s2_d1",
      "label": "Sequential Mutating Webhook Execution",
      "description": "Executing mutating webhooks prior to validating webhooks to allow default value injection.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s2_d2",
      "label": "JSON Patch (RFC 6902) Modification Payloads",
      "description": "Returning JSON patch arrays specifying exact attribute additions or modifications.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s3",
      "label": "Webhook Failure Policy (Fail vs Ignore)",
      "description": "Configuring API server behavior when admission webhooks are unreachable.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s3_d1",
      "label": "failurePolicy: Fail (Maximum Security)",
      "description": "Blocking all API resource creations if admission webhooks fail or time out.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s3_d2",
      "label": "failurePolicy: Ignore (Maximum Availability)",
      "description": "Bypassing admission checks if webhooks are unavailable to preserve cluster operations.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s4",
      "label": "Webhook TLS Certificate Management (cert-manager)",
      "description": "Securing API server to admission webhook communications over HTTPS.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s4_d1",
      "label": "mTLS API Server Handshake Validation",
      "description": "Validating client certificates presented by Kubernetes API servers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s4_d2",
      "label": "Automated CA Injection via cert-manager",
      "description": "Injecting CA bundles automatically into MutatingWebhookConfiguration objects.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s5",
      "label": "Admission Webhook Performance & High Availability",
      "description": "Architecting admission webhooks to prevent cluster API control plane bottlenecks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s5_d1",
      "label": "Multi-Replica Webhook Pod Deployments",
      "description": "Deploying webhook pods across multiple availability zones behind cluster services.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t3_s5_d2",
      "label": "Namespace Selector Exclusion Rules",
      "description": "Excluding kube-system namespaces from webhook checks to prevent circular bootstrap deadlocks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4",
      "label": "Cloud Security Posture Management (CSPM)",
      "description": "Continuous monitoring and compliance auditing of cloud infrastructure configurations.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s1",
      "label": "Continuous Infrastructure Misconfiguration Scanning",
      "description": "Scanning cloud environments for security deviations from CIS Benchmarks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s1_d1",
      "label": "CIS AWS / Azure / GCP Benchmark Assessments",
      "description": "Auditing cloud accounts against industry-standard security benchmark rules.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s1_d2",
      "label": "Open Storage Bucket & Public DB Detection",
      "description": "Flagging publicly accessible S3 buckets and exposed database snapshots instantly.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s2",
      "label": "Cloud Asset Discovery & Graph Inventory",
      "description": "Maintaining a real-time graph database inventory of all deployed cloud assets.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s2_d1",
      "label": "Cross-Cloud Asset Dependency Mapping",
      "description": "Mapping relationships between IAM roles, compute instances, and storage buckets.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s2_d2",
      "label": "Toxic Combination Attack Path Analysis",
      "description": "Identifying compound vulnerabilities (e.g. exposed VM + admin IAM role + unpatched CVE).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s3",
      "label": "Automated Remediation Workflows",
      "description": "Executing automated remediation scripts to fix security misconfigurations instantly.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s3_d1",
      "label": "Auto-Closing Exposed Security Group Rules",
      "description": "Revoking 0.0.0.0/0 SSH rules automatically upon creation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s3_d2",
      "label": "Event-Driven Lambda Remediation Triggers",
      "description": "Triggering AWS Lambda remediation functions from Security Hub alerts.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s4",
      "label": "Compliance Reporting Frameworks (SOC2, PCI-DSS, HIPAA)",
      "description": "Mapping cloud configuration status to regulatory compliance frameworks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s4_d1",
      "label": "Automated Evidence Collection",
      "description": "Gathering cryptographic proof of encryption and access controls for auditors.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s4_d2",
      "label": "Continuous Compliance Drift Monitoring",
      "description": "Generating continuous compliance scores across organizational cloud accounts.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s5",
      "label": "Agentless vs Agent-Based Cloud Auditing",
      "description": "Comparing API-driven agentless scanning against host-installed security agents.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s5_d1",
      "label": "Agentless Cloud API Snapshot Scanning",
      "description": "Scanning EBS volume snapshots out-of-band without installing host agent software.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t4_s5_d2",
      "label": "Zero Workload Performance Impact",
      "description": "Auditing security posture without consuming production compute resources.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5",
      "description": "Detailed first-principles mechanics for Policy-as-Code & Governance (OPA / Kyverno) topic 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s1",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s1_d1",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s1_d2",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s2",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s2_d1",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s2_d2",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s3",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s3_d1",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s3_d2",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s4",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s4_d1",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s4_d2",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s5",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s5_d1",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t5_s5_d2",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6",
      "description": "Detailed first-principles mechanics for Policy-as-Code & Governance (OPA / Kyverno) topic 6.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s1",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s1_d1",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s1_d2",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s2",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s2_d1",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s2_d2",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s3",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s3_d1",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s3_d2",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s4",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s4_d1",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s4_d2",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s5",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s5_d1",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p6_t6_s5_d2",
      "label": "Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Policy-as-Code & Governance (OPA / Kyverno) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7",
      "label": "Runtime Security & eBPF Event Auditing",
      "description": "eBPF kernel probes, Falco runtime threat detection, Tetragon syscall enforcement, and container isolation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1",
      "label": "Linux eBPF (Extended Berkeley Packet Filter)",
      "description": "Kernel technology executing sandboxed programs inside the Linux kernel without modifying kernel code.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s1",
      "label": "eBPF Verifier & Safety Guarantees",
      "description": "Static analyzer verifying that eBPF programs cannot crash or loop infinitely inside the kernel.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s1_d1",
      "label": "Bounded Loop & DAG Instruction Checks",
      "description": "Proving all program execution paths terminate within finite instruction limits.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s1_d2",
      "label": "Memory Access Range Bounds Checking",
      "description": "Preventing out-of-bounds kernel memory reads or writes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s2",
      "label": "kprobes, uprobes, and Tracepoint Attachments",
      "description": "Attaching eBPF programs to kernel functions, user-space functions, and static tracepoints.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s2_d1",
      "label": "kprobe Kernel Function Entry Hooking",
      "description": "Intercepting kernel functions (e.g. sys_enter_execve) to monitor system calls.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s2_d2",
      "label": "uprobe User-Space Function Hooking",
      "description": "Hooking user-space SSL/TLS libraries (OpenSSL, BoringSSL) to inspect unencrypted traffic.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s3",
      "label": "eBPF Maps for User-Space Data Exchange",
      "description": "Kernel data structures (Hash, Array, Ring Buffer) for sharing data between kernel and user space.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s3_d1",
      "label": "BPF Ring Buffer Event Streaming",
      "description": "Streaming high-throughput security event logs from kernel to user-space daemons.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s3_d2",
      "label": "Sub-Microsecond Kernel Overhead",
      "description": "Filtering events in kernel space to minimize data transfer overhead.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s4",
      "label": "eBPF JIT Compiler (Just-In-Time)",
      "description": "Translating eBPF bytecode into native machine instructions (x86-64, ARM64).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s4_d1",
      "label": "Native Machine Code Execution Speeds",
      "description": "Executing kernel event checks at full hardware speed.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s4_d2",
      "label": "Zero Kernel Module Compilation Overhead",
      "description": "Eliminating the need to compile custom kernel modules for security auditing.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s5",
      "label": "CO-RE (Compile Once - Run Everywhere)",
      "description": "Enabling eBPF programs to run across different kernel versions without re-compilation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s5_d1",
      "label": "BTF (BPF Type Format) Metadata Integration",
      "description": "Using BTF type information to adjust kernel structure offsets dynamically at runtime.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t1_s5_d2",
      "label": "Portable Security Agent Deployment",
      "description": "Shipping single pre-compiled eBPF binaries across heterogeneous Linux distributions.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2",
      "label": "Falco Runtime Threat Detection Engine",
      "description": "CNCF open-source runtime security tool detecting abnormal application behavior using kernel events.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s1",
      "label": "Falco System Call Event Ingestion Engine",
      "description": "Ingesting Linux system calls using eBPF probes or kernel modules.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s1_d1",
      "label": "Real-Time Syscall Stream Parsing",
      "description": "Parsing execve, open, connect, and ptrace system call events.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s1_d2",
      "label": "Container Context Enrichment (Pod Name, Namespace, Image)",
      "description": "Enriching raw syscall events with Kubernetes pod and container metadata.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s2",
      "label": "Falco Rule Syntax & Condition Filtering",
      "description": "Writing declarative security rules matching suspicious system call patterns.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s2_d1",
      "label": "Condition Expression Matching (evt.type = execve and container.id != host)",
      "description": "Filtering events based on process, user, and container attributes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s2_d2",
      "label": "Macro and List Reusability",
      "description": "Grouping allowed shell binaries or package managers into reusable lists.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s3",
      "label": "Built-in Threat Detection Rulesets",
      "description": "Detecting common runtime attack techniques out-of-the-box.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s3_d1",
      "label": "Terminal Shell Spawn in Container Alert",
      "description": "Alerting when an interactive bash/sh shell is executed inside a running container.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s3_d2",
      "label": "Sensitive Path Read (/etc/shadow, AWS creds)",
      "description": "Detecting unauthorized reads of sensitive system configuration files.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s4",
      "label": "Falco Sidekick & Notification Routing",
      "description": "Routing security alerts to Slack, Datadog, PagerDuty, or SIEM platforms.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s4_d1",
      "label": "JSON Event Payload Output",
      "description": "Formatting structured JSON security alert logs containing complete event context.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s4_d2",
      "label": "Event-Driven Response Triggering",
      "description": "Triggering Kubernetes operators to isolate or terminate compromised pods automatically.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s5",
      "label": "Falco Performance & Event Drop Management",
      "description": "Handling high-throughput kernel event streams without dropping security alerts.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s5_d1",
      "label": "Kernel Ring Buffer Sizing Tuning",
      "description": "Tuning ring buffer capacities to prevent event drops during heavy I/O spikes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t2_s5_d2",
      "label": "Syscall Event Rate Monitoring",
      "description": "Tracking event drop metrics to ensure complete security audit coverage.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3",
      "label": "Cilium Tetragon eBPF Enforcement",
      "description": "Real-time security observability and runtime enforcement platform powered by eBPF.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s1",
      "label": "In-Kernel Real-Time Attack Enforcement",
      "description": "Blocking malicious operations inside the Linux kernel before system calls complete.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s1_d1",
      "label": "Kernel Syscall Overwrite / Override (bpf_override_return)",
      "description": "Overriding system call return codes to abort unauthorized actions instantly.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s1_d2",
      "label": "Process SIGKILL Termination in Kernel",
      "description": "Terminating malicious processes in the kernel before malicious code executes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s2",
      "label": "TracingPolicy Custom Resource Definitions",
      "description": "Configuring declarative in-kernel tracing and enforcement policies for Kubernetes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s2_d1",
      "label": "Kprobe & Tracepoint Hook Specifications",
      "description": "Specifying exact kernel function hooks and arguments to monitor.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s2_d2",
      "label": "Selectors & Action Rules (Sigkill, Override)",
      "description": "Defining enforcement actions to execute when policy conditions match.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s3",
      "label": "Process Lifecycle & Namespace Tracking",
      "description": "Tracking process ancestry, binary hashes, and container namespace boundaries in real time.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s3_d1",
      "label": "Process Execution Ancestry Trees",
      "description": "Tracking parent-child process relationships to detect unauthorized child process spawns.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s3_d2",
      "label": "Binary Hash Verification at Exec Time",
      "description": "Hashing binary executables on execution to catch tampered binaries.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s4",
      "label": "File Access & Network Socket Security Policies",
      "description": "Monitoring and enforcing fine-grained file path access and network connection rules.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s4_d1",
      "label": "Sensitive Path Write Blocking",
      "description": "Preventing modification of system binaries or configuration files.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s4_d2",
      "label": "Unapproved Outbound Socket Connection Termination",
      "description": "Blocking outbound TCP socket creation to unauthorized external IP addresses.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s5",
      "label": "Tetragon vs Falco Architecture Comparison",
      "description": "Comparing in-kernel enforcement (Tetragon) against user-space alert detection (Falco).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s5_d1",
      "label": "Preventative In-Kernel Action Advantage (Tetragon)",
      "description": "Stopping attacks synchronously before harm occurs rather than alerting asynchronously.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t3_s5_d2",
      "label": "Comprehensive Ecosystem Detection Rules (Falco)",
      "description": "Leveraging extensive community rulesets for broad behavioral threat detection.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4",
      "label": "Container Sandboxing (gVisor & Kata Containers)",
      "description": "Advanced container isolation technologies providing strong virtual machine boundaries.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s1",
      "label": "gVisor User-Space Kernel Architecture",
      "description": "Interposing a user-space kernel (Sentry) between containerized applications and host Linux kernels.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s1_d1",
      "label": "Go-Based Syscall Re-implementation",
      "description": "Handling system calls in user-space Go code to prevent host kernel exploits.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s1_d2",
      "label": "Restricted Host Kernel Syscall Footprint",
      "description": "Using a tiny subset of host system calls to communicate with host hardware.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s2",
      "label": "Kata Containers Lightweight MicroVM Isolation",
      "description": "Running each container pod inside a dedicated, lightweight hardware-virtualized microVM.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s2_d1",
      "label": "QEMU / Cloud-Hypervisor Integration",
      "description": "Booting minimalist virtual machines using KVM hardware acceleration.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s2_d2",
      "label": "Hardware Memory and CPU Isolation",
      "description": "Providing full hardware isolation bounds matching traditional virtual machines.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s3",
      "label": "Container Runtime Interface (CRI) Integration",
      "description": "Configuring containerd and CRI-O to launch sandboxed containers via RuntimeClass specs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s3_d1",
      "label": "RuntimeClass Definition (runtimeHandler: gvisor / kata)",
      "description": "Selecting target sandbox runtimes per pod via Kubernetes manifests.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s3_d2",
      "label": "Multi-Tenant Cluster Isolation Support",
      "description": "Running untrusted tenant workloads safely alongside trusted internal services.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s4",
      "label": "Performance & Compatibility Tradeoffs",
      "description": "Evaluating I/O and syscall latency impacts when using container sandboxing engines.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s4_d1",
      "label": "Syscall-Heavy Workload Latency Impact",
      "description": "Managing performance overheads on applications making millions of system calls per second.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s4_d2",
      "label": "Near-Zero Latency Impact on Pure Compute Workloads",
      "description": "Achieving native performance on CPU-bound mathematical and AI workloads.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s5",
      "label": "Container Breakout Exploit Defense",
      "description": "Preventing attackers from escaping container root filesystems to compromise host nodes.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s5_d1",
      "label": "Host Kernel Exploit Neutralization",
      "description": "Shielding host kernels from vulnerabilities (Dirty COW, overlayfs exploits).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t4_s5_d2",
      "label": "Zero Shared Host Kernel Memory",
      "description": "Ensuring total memory isolation between host nodes and sandboxed container pods.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5",
      "label": "Runtime Security & eBPF Event Auditing Topic 5",
      "description": "Detailed first-principles mechanics for Runtime Security & eBPF Event Auditing topic 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s1",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Runtime Security & eBPF Event Auditing Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s1_d1",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s1_d2",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s2",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Runtime Security & eBPF Event Auditing Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s2_d1",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s2_d2",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s3",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Runtime Security & eBPF Event Auditing Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s3_d1",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s3_d2",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s4",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Runtime Security & eBPF Event Auditing Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s4_d1",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s4_d2",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s5",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Runtime Security & eBPF Event Auditing Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s5_d1",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t5_s5_d2",
      "label": "Runtime Security & eBPF Event Auditing Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6",
      "label": "Runtime Security & eBPF Event Auditing Topic 6",
      "description": "Detailed first-principles mechanics for Runtime Security & eBPF Event Auditing topic 6.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s1",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Runtime Security & eBPF Event Auditing Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s1_d1",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s1_d2",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s2",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Runtime Security & eBPF Event Auditing Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s2_d1",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s2_d2",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s3",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Runtime Security & eBPF Event Auditing Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s3_d1",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s3_d2",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s4",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Runtime Security & eBPF Event Auditing Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s4_d1",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s4_d2",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s5",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Runtime Security & eBPF Event Auditing Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s5_d1",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p7_t6_s5_d2",
      "label": "Runtime Security & eBPF Event Auditing Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Runtime Security & eBPF Event Auditing Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8",
      "label": "Vulnerability Management & Incident Response",
      "description": "CVSS vector calculations, EPSS probabilities, automated PR patching, and incident response playbooks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1",
      "label": "CVSS v3.1 Scoring & Vector Anatomy",
      "description": "Common Vulnerability Scoring System standard assessing technical severity of security flaws.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s1",
      "label": "Base Metrics Group (AV, AC, PR, UI, S, C, I, A)",
      "description": "Calculating core technical severity scores based on vulnerability characteristics.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s1_d1",
      "label": "Attack Vector (AV:N/A/L/P) & Complexity (AC:L/H)",
      "description": "Assessing network vs local access requirements and execution complexity.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s1_d2",
      "label": "Scope (S:U/C) & CIA Impact (C:H/L/N, I:H/L/N, A:H/L/N)",
      "description": "Evaluating whether vulnerabilities impact resources beyond the authorization scope.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s2",
      "label": "CVSS Mathematical Formula & Weightings",
      "description": "Computing numerical sub-scores (Exploitability, Impact) to derive overall 0.0 to 10.0 ratings.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s2_d1",
      "label": "Impact Sub-Score Calculation Equations",
      "description": "Calculating combined Confidentiality, Integrity, and Availability impact scores.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s2_d2",
      "label": "Non-Linear Base Score Scaling",
      "description": "Mapping raw sub-scores to final CVSS ratings (Critical 9.0-10.0, High 7.0-8.9).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s3",
      "label": "Temporal & Environmental Metric Adjustments",
      "description": "Adjusting severity scores based on exploit availability and specific organizational controls.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s3_d1",
      "label": "Exploit Code Maturity (E:U/P/F/H) Scaling",
      "description": "Lowering urgency when no functional exploit code exists in the public domain.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s3_d2",
      "label": "Modified Base Metrics (CR, IR, AR)",
      "description": "Adjusting scores based on internal security controls and asset criticality.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s4",
      "label": "CVSS Limitations & Context Flaws",
      "description": "Recognizing shortcomings when relying solely on base CVSS scores for patch prioritization.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s4_d1",
      "label": "CVSS Score Inflation Patterns",
      "description": "Recognizing that over 40% of published CVEs receive High or Critical ratings.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s4_d2",
      "label": "Lack of Real-World Exploitability Context",
      "description": "Failing to distinguish theoretical vulnerabilities from active zero-day attacks.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s5",
      "label": "CVSS v4.0 Specification Enhancements",
      "description": "Updated scoring standard introducing granular threat intelligence and operational context.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s5_d1",
      "label": "Supplemental Metric Group (Safety, Automatable)",
      "description": "Assessing physical safety impact and automated wormability potential.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t1_s5_d2",
      "label": "Refined Exploitability Metric Granularity",
      "description": "Improving score accuracy to reduce false urgency alerts for security teams.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2",
      "label": "EPSS & Threat-Informed Prioritization",
      "description": "Exploit Prediction Scoring System estimating the probability that a CVE will be exploited in the wild.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s1",
      "label": "EPSS Machine Learning Probability Model",
      "description": "Data-driven model predicting 30-day exploitation probability for published CVEs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s1_d1",
      "label": "Daily Probability Score Output (0.0 to 1.0 / 0% to 100%)",
      "description": "Estimating real-world exploitation likelihood updated daily.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s1_d2",
      "label": "Percentile Rank Benchmarking",
      "description": "Comparing relative threat rank of a CVE against all known vulnerabilities.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s2",
      "label": "Feature Inputs (CVE Age, Code Samples, Social Media, Scanners)",
      "description": "Training models on real-time threat intelligence data feeds.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s2_d1",
      "label": "Exploit Reference Tracking (GitHub, Metasploit, Packet Storm)",
      "description": "Monitoring public repositories for functional exploit code releases.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s2_d2",
      "label": "Security Advisory & CISA KEV Ingestion",
      "description": "Incorporating vendor advisories and government threat reports into probability models.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s3",
      "label": "EPSS vs CVSS Prioritization Matrix",
      "description": "Combining technical severity (CVSS) with real-world threat probability (EPSS).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s3_d1",
      "label": "High CVSS + High EPSS (Immediate Emergency Patching)",
      "description": "Focusing engineering resources on critical vulnerabilities with high exploitation probability.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s3_d2",
      "label": "High CVSS + Low EPSS (Standard Remediation SLA)",
      "description": "Scheduling standard patching for severe vulnerabilities lacking real-world threat activity.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s4",
      "label": "CISA Known Exploited Vulnerabilities (KEV) Catalog Integration",
      "description": "Mandatory vulnerability remediation catalog maintained by CISA.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s4_d1",
      "label": "Active Cyberattack Exploitation Verification",
      "description": "Adding CVEs to KEV list only when confirmed active exploitation is observed.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s4_d2",
      "label": "Federal Binding Operational Directive (BOD 22-01) Compliance",
      "description": "Enforcing strict 14-day remediation deadlines for all KEV catalog entries.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s5",
      "label": "Effort-to-Risk Remediation Optimization",
      "description": "Maximizing risk reduction while minimizing developer patching workload.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s5_d1",
      "label": "90%+ Reduction in Remediation Backlog",
      "description": "Filtering out non-exploitable CVEs to focus on the top 3-5% of real-world threats.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t2_s5_d2",
      "label": "Data-Driven Security SLA Policies",
      "description": "Establishing remediation SLAs bound to real-world EPSS score thresholds.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3",
      "label": "Automated PR Patching & Dependency Updates",
      "description": "Automating software dependency upgrades using bot tools (Dependabot, Renovate).",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s1",
      "label": "Renovate Bot Multi-Ecosystem Update Engine",
      "description": "Highly configurable dependency update bot supporting 90+ package managers.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s1_d1",
      "label": "Declarative renovate.json Configuration",
      "description": "Configuring update schedules, grouping rules, and auto-merge parameters.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s1_d2",
      "label": "Semantic Versioning (SemVer) Grouping",
      "description": "Grouping minor and patch updates into single consolidated Pull Requests.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s2",
      "label": "Automated CI/CD Test Suite Verification",
      "description": "Running automated unit and integration tests against dependency upgrade PRs.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s2_d1",
      "label": "Automated Regression Detection",
      "description": "Verifying that dependency updates do not break existing application behavior.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s2_d2",
      "label": "Lockfile Hash Generation Checks",
      "description": "Updating package lockfiles accurately during automated PR creation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s3",
      "label": "Auto-Merge for Minor & Patch Security Updates",
      "description": "Configuring safe auto-merging for low-risk dependency security patches.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s3_d1",
      "label": "Passing Test Suite Auto-Merge Trigger",
      "description": "Merging non-breaking patch PRs automatically when CI test pipelines pass.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s3_d2",
      "label": "Developer Burnout & Alert Fatigue Reduction",
      "description": "Eliminating manual review overhead for routine patch releases.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s4",
      "label": "Dependency Pinning & Version Lockfiles",
      "description": "Enforcing exact package version locking to prevent accidental broken builds.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s4_d1",
      "label": "Strict Version Pinning (package.json sans ^ or ~)",
      "description": "Pinning exact dependency versions to prevent unexpected transitive updates.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s4_d2",
      "label": "Lockfile Integrity Hash Checks",
      "description": "Validating cryptographic hashes of downloaded packages against lockfile records.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s5",
      "label": "Typosquatting & Malicious Package Injection Defense",
      "description": "Detecting malicious supply chain attacks targeting package manager registries.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s5_d1",
      "label": "Package Release Age Thresholds (e.g. minimum 3 days old)",
      "description": "Delaying automated updates for newly published packages to allow community security auditing.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t3_s5_d2",
      "label": "Known Maintainer & Repository Verification",
      "description": "Verifying package author identity and release signatures prior to installation.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4",
      "label": "Incident Response Playbooks & Forensics",
      "description": "Structured procedures for containing, investigating, and recovering from security breaches.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s1",
      "label": "NIST SP 800-61 Rev. 2 Incident Response Lifecycle",
      "description": "Standardized 4-phase framework: Preparation -> Detection/Analysis -> Containment/Eradication -> Post-Incident.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s1_d1",
      "label": "Preparation & Readiness Setup",
      "description": "Establishing IR team rosters, communication channels, and forensic toolkits.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s1_d2",
      "label": "Detection & Triage Verification",
      "description": "Confirming security alerts and determining incident scope and severity.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s2",
      "label": "Automated Containment & Isolation Actions",
      "description": "Isolating compromised infrastructure automatically to stop lateral movement.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s2_d1",
      "label": "Kubernetes Pod Network Isolation (NetworkPolicy Deny-All)",
      "description": "Applying strict network policies to block all inbound and outbound traffic to compromised pods.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s2_d2",
      "label": "AWS IAM Session Revocation (RevokeSecuritySelections)",
      "description": "Revoking active IAM session credentials instantly upon detecting key compromise.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s3",
      "label": "Forensic Memory & Disk Artifact Capture",
      "description": "Preserving volatile memory and disk state for post-mortem forensic analysis.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s3_d1",
      "label": "Volatile RAM Dump Acquisition (LiME / Volatility)",
      "description": "Capturing host node RAM memory before terminating compromised instances.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s3_d2",
      "label": "EBS Read-Only Volume Snapshot Creation",
      "description": "Taking instant read-only disk snapshots for offline forensic analysis.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s4",
      "label": "Chain of Custody & Forensic Evidence Integrity",
      "description": "Maintaining strict legal evidence tracking procedures during security investigations.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s4_d1",
      "label": "SHA-256 Evidence Hash Logging",
      "description": "Hashing memory dumps and disk images immediately upon capture.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s4_d2",
      "label": "Write-Once Access Control (WORM Storage)",
      "description": "Storing forensic evidence files in immutable, audit-logged S3 buckets.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s5",
      "label": "Post-Mortem & Blameless Root Cause Analysis (RCA)",
      "description": "Conducting post-incident reviews to identify systemic failures and prevent recurrence.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s5_d1",
      "label": "Blameless Culture Post-Mortem Focus",
      "description": "Focusing analysis on process and technology gaps rather than individual human errors.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t4_s5_d2",
      "label": "Actionable Remediation Backlog Tracking",
      "description": "Creating engineering tasks to fix root-cause security flaws identified during IR.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5",
      "label": "Vulnerability Management & Incident Response Topic 5",
      "description": "Detailed first-principles mechanics for Vulnerability Management & Incident Response topic 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s1",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Vulnerability Management & Incident Response Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s1_d1",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s1_d2",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s2",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Vulnerability Management & Incident Response Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s2_d1",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s2_d2",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s3",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Vulnerability Management & Incident Response Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s3_d1",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s3_d2",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s4",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Vulnerability Management & Incident Response Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s4_d1",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s4_d2",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s5",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Vulnerability Management & Incident Response Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s5_d1",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t5_s5_d2",
      "label": "Vulnerability Management & Incident Response Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6",
      "label": "Vulnerability Management & Incident Response Topic 6",
      "description": "Detailed first-principles mechanics for Vulnerability Management & Incident Response topic 6.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s1",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Vulnerability Management & Incident Response Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s1_d1",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s1_d2",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s2",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Vulnerability Management & Incident Response Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s2_d1",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s2_d2",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s3",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Vulnerability Management & Incident Response Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s3_d1",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s3_d2",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s4",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Vulnerability Management & Incident Response Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s4_d1",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s4_d2",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s5",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Vulnerability Management & Incident Response Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s5_d1",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "devsecops_root_p8_t6_s5_d2",
      "label": "Vulnerability Management & Incident Response Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Vulnerability Management & Incident Response Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "devsecops_root",
      "target": "devsecops_root_p1"
    },
    {
      "source": "devsecops_root_p1",
      "target": "devsecops_root_p1_t1"
    },
    {
      "source": "devsecops_root_p1_t1",
      "target": "devsecops_root_p1_t1_s1"
    },
    {
      "source": "devsecops_root_p1_t1_s1",
      "target": "devsecops_root_p1_t1_s1_d1"
    },
    {
      "source": "devsecops_root_p1_t1_s1",
      "target": "devsecops_root_p1_t1_s1_d2"
    },
    {
      "source": "devsecops_root_p1_t1",
      "target": "devsecops_root_p1_t1_s2"
    },
    {
      "source": "devsecops_root_p1_t1_s2",
      "target": "devsecops_root_p1_t1_s2_d1"
    },
    {
      "source": "devsecops_root_p1_t1_s2",
      "target": "devsecops_root_p1_t1_s2_d2"
    },
    {
      "source": "devsecops_root_p1_t1",
      "target": "devsecops_root_p1_t1_s3"
    },
    {
      "source": "devsecops_root_p1_t1_s3",
      "target": "devsecops_root_p1_t1_s3_d1"
    },
    {
      "source": "devsecops_root_p1_t1_s3",
      "target": "devsecops_root_p1_t1_s3_d2"
    },
    {
      "source": "devsecops_root_p1_t1",
      "target": "devsecops_root_p1_t1_s4"
    },
    {
      "source": "devsecops_root_p1_t1_s4",
      "target": "devsecops_root_p1_t1_s4_d1"
    },
    {
      "source": "devsecops_root_p1_t1_s4",
      "target": "devsecops_root_p1_t1_s4_d2"
    },
    {
      "source": "devsecops_root_p1_t1",
      "target": "devsecops_root_p1_t1_s5"
    },
    {
      "source": "devsecops_root_p1_t1_s5",
      "target": "devsecops_root_p1_t1_s5_d1"
    },
    {
      "source": "devsecops_root_p1_t1_s5",
      "target": "devsecops_root_p1_t1_s5_d2"
    },
    {
      "source": "devsecops_root_p1",
      "target": "devsecops_root_p1_t2"
    },
    {
      "source": "devsecops_root_p1_t2",
      "target": "devsecops_root_p1_t2_s1"
    },
    {
      "source": "devsecops_root_p1_t2_s1",
      "target": "devsecops_root_p1_t2_s1_d1"
    },
    {
      "source": "devsecops_root_p1_t2_s1",
      "target": "devsecops_root_p1_t2_s1_d2"
    },
    {
      "source": "devsecops_root_p1_t2",
      "target": "devsecops_root_p1_t2_s2"
    },
    {
      "source": "devsecops_root_p1_t2_s2",
      "target": "devsecops_root_p1_t2_s2_d1"
    },
    {
      "source": "devsecops_root_p1_t2_s2",
      "target": "devsecops_root_p1_t2_s2_d2"
    },
    {
      "source": "devsecops_root_p1_t2",
      "target": "devsecops_root_p1_t2_s3"
    },
    {
      "source": "devsecops_root_p1_t2_s3",
      "target": "devsecops_root_p1_t2_s3_d1"
    },
    {
      "source": "devsecops_root_p1_t2_s3",
      "target": "devsecops_root_p1_t2_s3_d2"
    },
    {
      "source": "devsecops_root_p1_t2",
      "target": "devsecops_root_p1_t2_s4"
    },
    {
      "source": "devsecops_root_p1_t2_s4",
      "target": "devsecops_root_p1_t2_s4_d1"
    },
    {
      "source": "devsecops_root_p1_t2_s4",
      "target": "devsecops_root_p1_t2_s4_d2"
    },
    {
      "source": "devsecops_root_p1_t2",
      "target": "devsecops_root_p1_t2_s5"
    },
    {
      "source": "devsecops_root_p1_t2_s5",
      "target": "devsecops_root_p1_t2_s5_d1"
    },
    {
      "source": "devsecops_root_p1_t2_s5",
      "target": "devsecops_root_p1_t2_s5_d2"
    },
    {
      "source": "devsecops_root_p1",
      "target": "devsecops_root_p1_t3"
    },
    {
      "source": "devsecops_root_p1_t3",
      "target": "devsecops_root_p1_t3_s1"
    },
    {
      "source": "devsecops_root_p1_t3_s1",
      "target": "devsecops_root_p1_t3_s1_d1"
    },
    {
      "source": "devsecops_root_p1_t3_s1",
      "target": "devsecops_root_p1_t3_s1_d2"
    },
    {
      "source": "devsecops_root_p1_t3",
      "target": "devsecops_root_p1_t3_s2"
    },
    {
      "source": "devsecops_root_p1_t3_s2",
      "target": "devsecops_root_p1_t3_s2_d1"
    },
    {
      "source": "devsecops_root_p1_t3_s2",
      "target": "devsecops_root_p1_t3_s2_d2"
    },
    {
      "source": "devsecops_root_p1_t3",
      "target": "devsecops_root_p1_t3_s3"
    },
    {
      "source": "devsecops_root_p1_t3_s3",
      "target": "devsecops_root_p1_t3_s3_d1"
    },
    {
      "source": "devsecops_root_p1_t3_s3",
      "target": "devsecops_root_p1_t3_s3_d2"
    },
    {
      "source": "devsecops_root_p1_t3",
      "target": "devsecops_root_p1_t3_s4"
    },
    {
      "source": "devsecops_root_p1_t3_s4",
      "target": "devsecops_root_p1_t3_s4_d1"
    },
    {
      "source": "devsecops_root_p1_t3_s4",
      "target": "devsecops_root_p1_t3_s4_d2"
    },
    {
      "source": "devsecops_root_p1_t3",
      "target": "devsecops_root_p1_t3_s5"
    },
    {
      "source": "devsecops_root_p1_t3_s5",
      "target": "devsecops_root_p1_t3_s5_d1"
    },
    {
      "source": "devsecops_root_p1_t3_s5",
      "target": "devsecops_root_p1_t3_s5_d2"
    },
    {
      "source": "devsecops_root_p1",
      "target": "devsecops_root_p1_t4"
    },
    {
      "source": "devsecops_root_p1_t4",
      "target": "devsecops_root_p1_t4_s1"
    },
    {
      "source": "devsecops_root_p1_t4_s1",
      "target": "devsecops_root_p1_t4_s1_d1"
    },
    {
      "source": "devsecops_root_p1_t4_s1",
      "target": "devsecops_root_p1_t4_s1_d2"
    },
    {
      "source": "devsecops_root_p1_t4",
      "target": "devsecops_root_p1_t4_s2"
    },
    {
      "source": "devsecops_root_p1_t4_s2",
      "target": "devsecops_root_p1_t4_s2_d1"
    },
    {
      "source": "devsecops_root_p1_t4_s2",
      "target": "devsecops_root_p1_t4_s2_d2"
    },
    {
      "source": "devsecops_root_p1_t4",
      "target": "devsecops_root_p1_t4_s3"
    },
    {
      "source": "devsecops_root_p1_t4_s3",
      "target": "devsecops_root_p1_t4_s3_d1"
    },
    {
      "source": "devsecops_root_p1_t4_s3",
      "target": "devsecops_root_p1_t4_s3_d2"
    },
    {
      "source": "devsecops_root_p1_t4",
      "target": "devsecops_root_p1_t4_s4"
    },
    {
      "source": "devsecops_root_p1_t4_s4",
      "target": "devsecops_root_p1_t4_s4_d1"
    },
    {
      "source": "devsecops_root_p1_t4_s4",
      "target": "devsecops_root_p1_t4_s4_d2"
    },
    {
      "source": "devsecops_root_p1_t4",
      "target": "devsecops_root_p1_t4_s5"
    },
    {
      "source": "devsecops_root_p1_t4_s5",
      "target": "devsecops_root_p1_t4_s5_d1"
    },
    {
      "source": "devsecops_root_p1_t4_s5",
      "target": "devsecops_root_p1_t4_s5_d2"
    },
    {
      "source": "devsecops_root_p1",
      "target": "devsecops_root_p1_t5"
    },
    {
      "source": "devsecops_root_p1_t5",
      "target": "devsecops_root_p1_t5_s1"
    },
    {
      "source": "devsecops_root_p1_t5_s1",
      "target": "devsecops_root_p1_t5_s1_d1"
    },
    {
      "source": "devsecops_root_p1_t5_s1",
      "target": "devsecops_root_p1_t5_s1_d2"
    },
    {
      "source": "devsecops_root_p1_t5",
      "target": "devsecops_root_p1_t5_s2"
    },
    {
      "source": "devsecops_root_p1_t5_s2",
      "target": "devsecops_root_p1_t5_s2_d1"
    },
    {
      "source": "devsecops_root_p1_t5_s2",
      "target": "devsecops_root_p1_t5_s2_d2"
    },
    {
      "source": "devsecops_root_p1_t5",
      "target": "devsecops_root_p1_t5_s3"
    },
    {
      "source": "devsecops_root_p1_t5_s3",
      "target": "devsecops_root_p1_t5_s3_d1"
    },
    {
      "source": "devsecops_root_p1_t5_s3",
      "target": "devsecops_root_p1_t5_s3_d2"
    },
    {
      "source": "devsecops_root_p1_t5",
      "target": "devsecops_root_p1_t5_s4"
    },
    {
      "source": "devsecops_root_p1_t5_s4",
      "target": "devsecops_root_p1_t5_s4_d1"
    },
    {
      "source": "devsecops_root_p1_t5_s4",
      "target": "devsecops_root_p1_t5_s4_d2"
    },
    {
      "source": "devsecops_root_p1_t5",
      "target": "devsecops_root_p1_t5_s5"
    },
    {
      "source": "devsecops_root_p1_t5_s5",
      "target": "devsecops_root_p1_t5_s5_d1"
    },
    {
      "source": "devsecops_root_p1_t5_s5",
      "target": "devsecops_root_p1_t5_s5_d2"
    },
    {
      "source": "devsecops_root_p1",
      "target": "devsecops_root_p1_t6"
    },
    {
      "source": "devsecops_root_p1_t6",
      "target": "devsecops_root_p1_t6_s1"
    },
    {
      "source": "devsecops_root_p1_t6_s1",
      "target": "devsecops_root_p1_t6_s1_d1"
    },
    {
      "source": "devsecops_root_p1_t6_s1",
      "target": "devsecops_root_p1_t6_s1_d2"
    },
    {
      "source": "devsecops_root_p1_t6",
      "target": "devsecops_root_p1_t6_s2"
    },
    {
      "source": "devsecops_root_p1_t6_s2",
      "target": "devsecops_root_p1_t6_s2_d1"
    },
    {
      "source": "devsecops_root_p1_t6_s2",
      "target": "devsecops_root_p1_t6_s2_d2"
    },
    {
      "source": "devsecops_root_p1_t6",
      "target": "devsecops_root_p1_t6_s3"
    },
    {
      "source": "devsecops_root_p1_t6_s3",
      "target": "devsecops_root_p1_t6_s3_d1"
    },
    {
      "source": "devsecops_root_p1_t6_s3",
      "target": "devsecops_root_p1_t6_s3_d2"
    },
    {
      "source": "devsecops_root_p1_t6",
      "target": "devsecops_root_p1_t6_s4"
    },
    {
      "source": "devsecops_root_p1_t6_s4",
      "target": "devsecops_root_p1_t6_s4_d1"
    },
    {
      "source": "devsecops_root_p1_t6_s4",
      "target": "devsecops_root_p1_t6_s4_d2"
    },
    {
      "source": "devsecops_root_p1_t6",
      "target": "devsecops_root_p1_t6_s5"
    },
    {
      "source": "devsecops_root_p1_t6_s5",
      "target": "devsecops_root_p1_t6_s5_d1"
    },
    {
      "source": "devsecops_root_p1_t6_s5",
      "target": "devsecops_root_p1_t6_s5_d2"
    },
    {
      "source": "devsecops_root",
      "target": "devsecops_root_p2"
    },
    {
      "source": "devsecops_root_p2",
      "target": "devsecops_root_p2_t1"
    },
    {
      "source": "devsecops_root_p2_t1",
      "target": "devsecops_root_p2_t1_s1"
    },
    {
      "source": "devsecops_root_p2_t1_s1",
      "target": "devsecops_root_p2_t1_s1_d1"
    },
    {
      "source": "devsecops_root_p2_t1_s1",
      "target": "devsecops_root_p2_t1_s1_d2"
    },
    {
      "source": "devsecops_root_p2_t1",
      "target": "devsecops_root_p2_t1_s2"
    },
    {
      "source": "devsecops_root_p2_t1_s2",
      "target": "devsecops_root_p2_t1_s2_d1"
    },
    {
      "source": "devsecops_root_p2_t1_s2",
      "target": "devsecops_root_p2_t1_s2_d2"
    },
    {
      "source": "devsecops_root_p2_t1",
      "target": "devsecops_root_p2_t1_s3"
    },
    {
      "source": "devsecops_root_p2_t1_s3",
      "target": "devsecops_root_p2_t1_s3_d1"
    },
    {
      "source": "devsecops_root_p2_t1_s3",
      "target": "devsecops_root_p2_t1_s3_d2"
    },
    {
      "source": "devsecops_root_p2_t1",
      "target": "devsecops_root_p2_t1_s4"
    },
    {
      "source": "devsecops_root_p2_t1_s4",
      "target": "devsecops_root_p2_t1_s4_d1"
    },
    {
      "source": "devsecops_root_p2_t1_s4",
      "target": "devsecops_root_p2_t1_s4_d2"
    },
    {
      "source": "devsecops_root_p2_t1",
      "target": "devsecops_root_p2_t1_s5"
    },
    {
      "source": "devsecops_root_p2_t1_s5",
      "target": "devsecops_root_p2_t1_s5_d1"
    },
    {
      "source": "devsecops_root_p2_t1_s5",
      "target": "devsecops_root_p2_t1_s5_d2"
    },
    {
      "source": "devsecops_root_p2",
      "target": "devsecops_root_p2_t2"
    },
    {
      "source": "devsecops_root_p2_t2",
      "target": "devsecops_root_p2_t2_s1"
    },
    {
      "source": "devsecops_root_p2_t2_s1",
      "target": "devsecops_root_p2_t2_s1_d1"
    },
    {
      "source": "devsecops_root_p2_t2_s1",
      "target": "devsecops_root_p2_t2_s1_d2"
    },
    {
      "source": "devsecops_root_p2_t2",
      "target": "devsecops_root_p2_t2_s2"
    },
    {
      "source": "devsecops_root_p2_t2_s2",
      "target": "devsecops_root_p2_t2_s2_d1"
    },
    {
      "source": "devsecops_root_p2_t2_s2",
      "target": "devsecops_root_p2_t2_s2_d2"
    },
    {
      "source": "devsecops_root_p2_t2",
      "target": "devsecops_root_p2_t2_s3"
    },
    {
      "source": "devsecops_root_p2_t2_s3",
      "target": "devsecops_root_p2_t2_s3_d1"
    },
    {
      "source": "devsecops_root_p2_t2_s3",
      "target": "devsecops_root_p2_t2_s3_d2"
    },
    {
      "source": "devsecops_root_p2_t2",
      "target": "devsecops_root_p2_t2_s4"
    },
    {
      "source": "devsecops_root_p2_t2_s4",
      "target": "devsecops_root_p2_t2_s4_d1"
    },
    {
      "source": "devsecops_root_p2_t2_s4",
      "target": "devsecops_root_p2_t2_s4_d2"
    },
    {
      "source": "devsecops_root_p2_t2",
      "target": "devsecops_root_p2_t2_s5"
    },
    {
      "source": "devsecops_root_p2_t2_s5",
      "target": "devsecops_root_p2_t2_s5_d1"
    },
    {
      "source": "devsecops_root_p2_t2_s5",
      "target": "devsecops_root_p2_t2_s5_d2"
    },
    {
      "source": "devsecops_root_p2",
      "target": "devsecops_root_p2_t3"
    },
    {
      "source": "devsecops_root_p2_t3",
      "target": "devsecops_root_p2_t3_s1"
    },
    {
      "source": "devsecops_root_p2_t3_s1",
      "target": "devsecops_root_p2_t3_s1_d1"
    },
    {
      "source": "devsecops_root_p2_t3_s1",
      "target": "devsecops_root_p2_t3_s1_d2"
    },
    {
      "source": "devsecops_root_p2_t3",
      "target": "devsecops_root_p2_t3_s2"
    },
    {
      "source": "devsecops_root_p2_t3_s2",
      "target": "devsecops_root_p2_t3_s2_d1"
    },
    {
      "source": "devsecops_root_p2_t3_s2",
      "target": "devsecops_root_p2_t3_s2_d2"
    },
    {
      "source": "devsecops_root_p2_t3",
      "target": "devsecops_root_p2_t3_s3"
    },
    {
      "source": "devsecops_root_p2_t3_s3",
      "target": "devsecops_root_p2_t3_s3_d1"
    },
    {
      "source": "devsecops_root_p2_t3_s3",
      "target": "devsecops_root_p2_t3_s3_d2"
    },
    {
      "source": "devsecops_root_p2_t3",
      "target": "devsecops_root_p2_t3_s4"
    },
    {
      "source": "devsecops_root_p2_t3_s4",
      "target": "devsecops_root_p2_t3_s4_d1"
    },
    {
      "source": "devsecops_root_p2_t3_s4",
      "target": "devsecops_root_p2_t3_s4_d2"
    },
    {
      "source": "devsecops_root_p2_t3",
      "target": "devsecops_root_p2_t3_s5"
    },
    {
      "source": "devsecops_root_p2_t3_s5",
      "target": "devsecops_root_p2_t3_s5_d1"
    },
    {
      "source": "devsecops_root_p2_t3_s5",
      "target": "devsecops_root_p2_t3_s5_d2"
    },
    {
      "source": "devsecops_root_p2",
      "target": "devsecops_root_p2_t4"
    },
    {
      "source": "devsecops_root_p2_t4",
      "target": "devsecops_root_p2_t4_s1"
    },
    {
      "source": "devsecops_root_p2_t4_s1",
      "target": "devsecops_root_p2_t4_s1_d1"
    },
    {
      "source": "devsecops_root_p2_t4_s1",
      "target": "devsecops_root_p2_t4_s1_d2"
    },
    {
      "source": "devsecops_root_p2_t4",
      "target": "devsecops_root_p2_t4_s2"
    },
    {
      "source": "devsecops_root_p2_t4_s2",
      "target": "devsecops_root_p2_t4_s2_d1"
    },
    {
      "source": "devsecops_root_p2_t4_s2",
      "target": "devsecops_root_p2_t4_s2_d2"
    },
    {
      "source": "devsecops_root_p2_t4",
      "target": "devsecops_root_p2_t4_s3"
    },
    {
      "source": "devsecops_root_p2_t4_s3",
      "target": "devsecops_root_p2_t4_s3_d1"
    },
    {
      "source": "devsecops_root_p2_t4_s3",
      "target": "devsecops_root_p2_t4_s3_d2"
    },
    {
      "source": "devsecops_root_p2_t4",
      "target": "devsecops_root_p2_t4_s4"
    },
    {
      "source": "devsecops_root_p2_t4_s4",
      "target": "devsecops_root_p2_t4_s4_d1"
    },
    {
      "source": "devsecops_root_p2_t4_s4",
      "target": "devsecops_root_p2_t4_s4_d2"
    },
    {
      "source": "devsecops_root_p2_t4",
      "target": "devsecops_root_p2_t4_s5"
    },
    {
      "source": "devsecops_root_p2_t4_s5",
      "target": "devsecops_root_p2_t4_s5_d1"
    },
    {
      "source": "devsecops_root_p2_t4_s5",
      "target": "devsecops_root_p2_t4_s5_d2"
    },
    {
      "source": "devsecops_root_p2",
      "target": "devsecops_root_p2_t5"
    },
    {
      "source": "devsecops_root_p2_t5",
      "target": "devsecops_root_p2_t5_s1"
    },
    {
      "source": "devsecops_root_p2_t5_s1",
      "target": "devsecops_root_p2_t5_s1_d1"
    },
    {
      "source": "devsecops_root_p2_t5_s1",
      "target": "devsecops_root_p2_t5_s1_d2"
    },
    {
      "source": "devsecops_root_p2_t5",
      "target": "devsecops_root_p2_t5_s2"
    },
    {
      "source": "devsecops_root_p2_t5_s2",
      "target": "devsecops_root_p2_t5_s2_d1"
    },
    {
      "source": "devsecops_root_p2_t5_s2",
      "target": "devsecops_root_p2_t5_s2_d2"
    },
    {
      "source": "devsecops_root_p2_t5",
      "target": "devsecops_root_p2_t5_s3"
    },
    {
      "source": "devsecops_root_p2_t5_s3",
      "target": "devsecops_root_p2_t5_s3_d1"
    },
    {
      "source": "devsecops_root_p2_t5_s3",
      "target": "devsecops_root_p2_t5_s3_d2"
    },
    {
      "source": "devsecops_root_p2_t5",
      "target": "devsecops_root_p2_t5_s4"
    },
    {
      "source": "devsecops_root_p2_t5_s4",
      "target": "devsecops_root_p2_t5_s4_d1"
    },
    {
      "source": "devsecops_root_p2_t5_s4",
      "target": "devsecops_root_p2_t5_s4_d2"
    },
    {
      "source": "devsecops_root_p2_t5",
      "target": "devsecops_root_p2_t5_s5"
    },
    {
      "source": "devsecops_root_p2_t5_s5",
      "target": "devsecops_root_p2_t5_s5_d1"
    },
    {
      "source": "devsecops_root_p2_t5_s5",
      "target": "devsecops_root_p2_t5_s5_d2"
    },
    {
      "source": "devsecops_root_p2",
      "target": "devsecops_root_p2_t6"
    },
    {
      "source": "devsecops_root_p2_t6",
      "target": "devsecops_root_p2_t6_s1"
    },
    {
      "source": "devsecops_root_p2_t6_s1",
      "target": "devsecops_root_p2_t6_s1_d1"
    },
    {
      "source": "devsecops_root_p2_t6_s1",
      "target": "devsecops_root_p2_t6_s1_d2"
    },
    {
      "source": "devsecops_root_p2_t6",
      "target": "devsecops_root_p2_t6_s2"
    },
    {
      "source": "devsecops_root_p2_t6_s2",
      "target": "devsecops_root_p2_t6_s2_d1"
    },
    {
      "source": "devsecops_root_p2_t6_s2",
      "target": "devsecops_root_p2_t6_s2_d2"
    },
    {
      "source": "devsecops_root_p2_t6",
      "target": "devsecops_root_p2_t6_s3"
    },
    {
      "source": "devsecops_root_p2_t6_s3",
      "target": "devsecops_root_p2_t6_s3_d1"
    },
    {
      "source": "devsecops_root_p2_t6_s3",
      "target": "devsecops_root_p2_t6_s3_d2"
    },
    {
      "source": "devsecops_root_p2_t6",
      "target": "devsecops_root_p2_t6_s4"
    },
    {
      "source": "devsecops_root_p2_t6_s4",
      "target": "devsecops_root_p2_t6_s4_d1"
    },
    {
      "source": "devsecops_root_p2_t6_s4",
      "target": "devsecops_root_p2_t6_s4_d2"
    },
    {
      "source": "devsecops_root_p2_t6",
      "target": "devsecops_root_p2_t6_s5"
    },
    {
      "source": "devsecops_root_p2_t6_s5",
      "target": "devsecops_root_p2_t6_s5_d1"
    },
    {
      "source": "devsecops_root_p2_t6_s5",
      "target": "devsecops_root_p2_t6_s5_d2"
    },
    {
      "source": "devsecops_root",
      "target": "devsecops_root_p3"
    },
    {
      "source": "devsecops_root_p3",
      "target": "devsecops_root_p3_t1"
    },
    {
      "source": "devsecops_root_p3_t1",
      "target": "devsecops_root_p3_t1_s1"
    },
    {
      "source": "devsecops_root_p3_t1_s1",
      "target": "devsecops_root_p3_t1_s1_d1"
    },
    {
      "source": "devsecops_root_p3_t1_s1",
      "target": "devsecops_root_p3_t1_s1_d2"
    },
    {
      "source": "devsecops_root_p3_t1",
      "target": "devsecops_root_p3_t1_s2"
    },
    {
      "source": "devsecops_root_p3_t1_s2",
      "target": "devsecops_root_p3_t1_s2_d1"
    },
    {
      "source": "devsecops_root_p3_t1_s2",
      "target": "devsecops_root_p3_t1_s2_d2"
    },
    {
      "source": "devsecops_root_p3_t1",
      "target": "devsecops_root_p3_t1_s3"
    },
    {
      "source": "devsecops_root_p3_t1_s3",
      "target": "devsecops_root_p3_t1_s3_d1"
    },
    {
      "source": "devsecops_root_p3_t1_s3",
      "target": "devsecops_root_p3_t1_s3_d2"
    },
    {
      "source": "devsecops_root_p3_t1",
      "target": "devsecops_root_p3_t1_s4"
    },
    {
      "source": "devsecops_root_p3_t1_s4",
      "target": "devsecops_root_p3_t1_s4_d1"
    },
    {
      "source": "devsecops_root_p3_t1_s4",
      "target": "devsecops_root_p3_t1_s4_d2"
    },
    {
      "source": "devsecops_root_p3_t1",
      "target": "devsecops_root_p3_t1_s5"
    },
    {
      "source": "devsecops_root_p3_t1_s5",
      "target": "devsecops_root_p3_t1_s5_d1"
    },
    {
      "source": "devsecops_root_p3_t1_s5",
      "target": "devsecops_root_p3_t1_s5_d2"
    },
    {
      "source": "devsecops_root_p3",
      "target": "devsecops_root_p3_t2"
    },
    {
      "source": "devsecops_root_p3_t2",
      "target": "devsecops_root_p3_t2_s1"
    },
    {
      "source": "devsecops_root_p3_t2_s1",
      "target": "devsecops_root_p3_t2_s1_d1"
    },
    {
      "source": "devsecops_root_p3_t2_s1",
      "target": "devsecops_root_p3_t2_s1_d2"
    },
    {
      "source": "devsecops_root_p3_t2",
      "target": "devsecops_root_p3_t2_s2"
    },
    {
      "source": "devsecops_root_p3_t2_s2",
      "target": "devsecops_root_p3_t2_s2_d1"
    },
    {
      "source": "devsecops_root_p3_t2_s2",
      "target": "devsecops_root_p3_t2_s2_d2"
    },
    {
      "source": "devsecops_root_p3_t2",
      "target": "devsecops_root_p3_t2_s3"
    },
    {
      "source": "devsecops_root_p3_t2_s3",
      "target": "devsecops_root_p3_t2_s3_d1"
    },
    {
      "source": "devsecops_root_p3_t2_s3",
      "target": "devsecops_root_p3_t2_s3_d2"
    },
    {
      "source": "devsecops_root_p3_t2",
      "target": "devsecops_root_p3_t2_s4"
    },
    {
      "source": "devsecops_root_p3_t2_s4",
      "target": "devsecops_root_p3_t2_s4_d1"
    },
    {
      "source": "devsecops_root_p3_t2_s4",
      "target": "devsecops_root_p3_t2_s4_d2"
    },
    {
      "source": "devsecops_root_p3_t2",
      "target": "devsecops_root_p3_t2_s5"
    },
    {
      "source": "devsecops_root_p3_t2_s5",
      "target": "devsecops_root_p3_t2_s5_d1"
    },
    {
      "source": "devsecops_root_p3_t2_s5",
      "target": "devsecops_root_p3_t2_s5_d2"
    },
    {
      "source": "devsecops_root_p3",
      "target": "devsecops_root_p3_t3"
    },
    {
      "source": "devsecops_root_p3_t3",
      "target": "devsecops_root_p3_t3_s1"
    },
    {
      "source": "devsecops_root_p3_t3_s1",
      "target": "devsecops_root_p3_t3_s1_d1"
    },
    {
      "source": "devsecops_root_p3_t3_s1",
      "target": "devsecops_root_p3_t3_s1_d2"
    },
    {
      "source": "devsecops_root_p3_t3",
      "target": "devsecops_root_p3_t3_s2"
    },
    {
      "source": "devsecops_root_p3_t3_s2",
      "target": "devsecops_root_p3_t3_s2_d1"
    },
    {
      "source": "devsecops_root_p3_t3_s2",
      "target": "devsecops_root_p3_t3_s2_d2"
    },
    {
      "source": "devsecops_root_p3_t3",
      "target": "devsecops_root_p3_t3_s3"
    },
    {
      "source": "devsecops_root_p3_t3_s3",
      "target": "devsecops_root_p3_t3_s3_d1"
    },
    {
      "source": "devsecops_root_p3_t3_s3",
      "target": "devsecops_root_p3_t3_s3_d2"
    },
    {
      "source": "devsecops_root_p3_t3",
      "target": "devsecops_root_p3_t3_s4"
    },
    {
      "source": "devsecops_root_p3_t3_s4",
      "target": "devsecops_root_p3_t3_s4_d1"
    },
    {
      "source": "devsecops_root_p3_t3_s4",
      "target": "devsecops_root_p3_t3_s4_d2"
    },
    {
      "source": "devsecops_root_p3_t3",
      "target": "devsecops_root_p3_t3_s5"
    },
    {
      "source": "devsecops_root_p3_t3_s5",
      "target": "devsecops_root_p3_t3_s5_d1"
    },
    {
      "source": "devsecops_root_p3_t3_s5",
      "target": "devsecops_root_p3_t3_s5_d2"
    },
    {
      "source": "devsecops_root_p3",
      "target": "devsecops_root_p3_t4"
    },
    {
      "source": "devsecops_root_p3_t4",
      "target": "devsecops_root_p3_t4_s1"
    },
    {
      "source": "devsecops_root_p3_t4_s1",
      "target": "devsecops_root_p3_t4_s1_d1"
    },
    {
      "source": "devsecops_root_p3_t4_s1",
      "target": "devsecops_root_p3_t4_s1_d2"
    },
    {
      "source": "devsecops_root_p3_t4",
      "target": "devsecops_root_p3_t4_s2"
    },
    {
      "source": "devsecops_root_p3_t4_s2",
      "target": "devsecops_root_p3_t4_s2_d1"
    },
    {
      "source": "devsecops_root_p3_t4_s2",
      "target": "devsecops_root_p3_t4_s2_d2"
    },
    {
      "source": "devsecops_root_p3_t4",
      "target": "devsecops_root_p3_t4_s3"
    },
    {
      "source": "devsecops_root_p3_t4_s3",
      "target": "devsecops_root_p3_t4_s3_d1"
    },
    {
      "source": "devsecops_root_p3_t4_s3",
      "target": "devsecops_root_p3_t4_s3_d2"
    },
    {
      "source": "devsecops_root_p3_t4",
      "target": "devsecops_root_p3_t4_s4"
    },
    {
      "source": "devsecops_root_p3_t4_s4",
      "target": "devsecops_root_p3_t4_s4_d1"
    },
    {
      "source": "devsecops_root_p3_t4_s4",
      "target": "devsecops_root_p3_t4_s4_d2"
    },
    {
      "source": "devsecops_root_p3_t4",
      "target": "devsecops_root_p3_t4_s5"
    },
    {
      "source": "devsecops_root_p3_t4_s5",
      "target": "devsecops_root_p3_t4_s5_d1"
    },
    {
      "source": "devsecops_root_p3_t4_s5",
      "target": "devsecops_root_p3_t4_s5_d2"
    },
    {
      "source": "devsecops_root_p3",
      "target": "devsecops_root_p3_t5"
    },
    {
      "source": "devsecops_root_p3_t5",
      "target": "devsecops_root_p3_t5_s1"
    },
    {
      "source": "devsecops_root_p3_t5_s1",
      "target": "devsecops_root_p3_t5_s1_d1"
    },
    {
      "source": "devsecops_root_p3_t5_s1",
      "target": "devsecops_root_p3_t5_s1_d2"
    },
    {
      "source": "devsecops_root_p3_t5",
      "target": "devsecops_root_p3_t5_s2"
    },
    {
      "source": "devsecops_root_p3_t5_s2",
      "target": "devsecops_root_p3_t5_s2_d1"
    },
    {
      "source": "devsecops_root_p3_t5_s2",
      "target": "devsecops_root_p3_t5_s2_d2"
    },
    {
      "source": "devsecops_root_p3_t5",
      "target": "devsecops_root_p3_t5_s3"
    },
    {
      "source": "devsecops_root_p3_t5_s3",
      "target": "devsecops_root_p3_t5_s3_d1"
    },
    {
      "source": "devsecops_root_p3_t5_s3",
      "target": "devsecops_root_p3_t5_s3_d2"
    },
    {
      "source": "devsecops_root_p3_t5",
      "target": "devsecops_root_p3_t5_s4"
    },
    {
      "source": "devsecops_root_p3_t5_s4",
      "target": "devsecops_root_p3_t5_s4_d1"
    },
    {
      "source": "devsecops_root_p3_t5_s4",
      "target": "devsecops_root_p3_t5_s4_d2"
    },
    {
      "source": "devsecops_root_p3_t5",
      "target": "devsecops_root_p3_t5_s5"
    },
    {
      "source": "devsecops_root_p3_t5_s5",
      "target": "devsecops_root_p3_t5_s5_d1"
    },
    {
      "source": "devsecops_root_p3_t5_s5",
      "target": "devsecops_root_p3_t5_s5_d2"
    },
    {
      "source": "devsecops_root_p3",
      "target": "devsecops_root_p3_t6"
    },
    {
      "source": "devsecops_root_p3_t6",
      "target": "devsecops_root_p3_t6_s1"
    },
    {
      "source": "devsecops_root_p3_t6_s1",
      "target": "devsecops_root_p3_t6_s1_d1"
    },
    {
      "source": "devsecops_root_p3_t6_s1",
      "target": "devsecops_root_p3_t6_s1_d2"
    },
    {
      "source": "devsecops_root_p3_t6",
      "target": "devsecops_root_p3_t6_s2"
    },
    {
      "source": "devsecops_root_p3_t6_s2",
      "target": "devsecops_root_p3_t6_s2_d1"
    },
    {
      "source": "devsecops_root_p3_t6_s2",
      "target": "devsecops_root_p3_t6_s2_d2"
    },
    {
      "source": "devsecops_root_p3_t6",
      "target": "devsecops_root_p3_t6_s3"
    },
    {
      "source": "devsecops_root_p3_t6_s3",
      "target": "devsecops_root_p3_t6_s3_d1"
    },
    {
      "source": "devsecops_root_p3_t6_s3",
      "target": "devsecops_root_p3_t6_s3_d2"
    },
    {
      "source": "devsecops_root_p3_t6",
      "target": "devsecops_root_p3_t6_s4"
    },
    {
      "source": "devsecops_root_p3_t6_s4",
      "target": "devsecops_root_p3_t6_s4_d1"
    },
    {
      "source": "devsecops_root_p3_t6_s4",
      "target": "devsecops_root_p3_t6_s4_d2"
    },
    {
      "source": "devsecops_root_p3_t6",
      "target": "devsecops_root_p3_t6_s5"
    },
    {
      "source": "devsecops_root_p3_t6_s5",
      "target": "devsecops_root_p3_t6_s5_d1"
    },
    {
      "source": "devsecops_root_p3_t6_s5",
      "target": "devsecops_root_p3_t6_s5_d2"
    },
    {
      "source": "devsecops_root",
      "target": "devsecops_root_p4"
    },
    {
      "source": "devsecops_root_p4",
      "target": "devsecops_root_p4_t1"
    },
    {
      "source": "devsecops_root_p4_t1",
      "target": "devsecops_root_p4_t1_s1"
    },
    {
      "source": "devsecops_root_p4_t1_s1",
      "target": "devsecops_root_p4_t1_s1_d1"
    },
    {
      "source": "devsecops_root_p4_t1_s1",
      "target": "devsecops_root_p4_t1_s1_d2"
    },
    {
      "source": "devsecops_root_p4_t1",
      "target": "devsecops_root_p4_t1_s2"
    },
    {
      "source": "devsecops_root_p4_t1_s2",
      "target": "devsecops_root_p4_t1_s2_d1"
    },
    {
      "source": "devsecops_root_p4_t1_s2",
      "target": "devsecops_root_p4_t1_s2_d2"
    },
    {
      "source": "devsecops_root_p4_t1",
      "target": "devsecops_root_p4_t1_s3"
    },
    {
      "source": "devsecops_root_p4_t1_s3",
      "target": "devsecops_root_p4_t1_s3_d1"
    },
    {
      "source": "devsecops_root_p4_t1_s3",
      "target": "devsecops_root_p4_t1_s3_d2"
    },
    {
      "source": "devsecops_root_p4_t1",
      "target": "devsecops_root_p4_t1_s4"
    },
    {
      "source": "devsecops_root_p4_t1_s4",
      "target": "devsecops_root_p4_t1_s4_d1"
    },
    {
      "source": "devsecops_root_p4_t1_s4",
      "target": "devsecops_root_p4_t1_s4_d2"
    },
    {
      "source": "devsecops_root_p4_t1",
      "target": "devsecops_root_p4_t1_s5"
    },
    {
      "source": "devsecops_root_p4_t1_s5",
      "target": "devsecops_root_p4_t1_s5_d1"
    },
    {
      "source": "devsecops_root_p4_t1_s5",
      "target": "devsecops_root_p4_t1_s5_d2"
    },
    {
      "source": "devsecops_root_p4",
      "target": "devsecops_root_p4_t2"
    },
    {
      "source": "devsecops_root_p4_t2",
      "target": "devsecops_root_p4_t2_s1"
    },
    {
      "source": "devsecops_root_p4_t2_s1",
      "target": "devsecops_root_p4_t2_s1_d1"
    },
    {
      "source": "devsecops_root_p4_t2_s1",
      "target": "devsecops_root_p4_t2_s1_d2"
    },
    {
      "source": "devsecops_root_p4_t2",
      "target": "devsecops_root_p4_t2_s2"
    },
    {
      "source": "devsecops_root_p4_t2_s2",
      "target": "devsecops_root_p4_t2_s2_d1"
    },
    {
      "source": "devsecops_root_p4_t2_s2",
      "target": "devsecops_root_p4_t2_s2_d2"
    },
    {
      "source": "devsecops_root_p4_t2",
      "target": "devsecops_root_p4_t2_s3"
    },
    {
      "source": "devsecops_root_p4_t2_s3",
      "target": "devsecops_root_p4_t2_s3_d1"
    },
    {
      "source": "devsecops_root_p4_t2_s3",
      "target": "devsecops_root_p4_t2_s3_d2"
    },
    {
      "source": "devsecops_root_p4_t2",
      "target": "devsecops_root_p4_t2_s4"
    },
    {
      "source": "devsecops_root_p4_t2_s4",
      "target": "devsecops_root_p4_t2_s4_d1"
    },
    {
      "source": "devsecops_root_p4_t2_s4",
      "target": "devsecops_root_p4_t2_s4_d2"
    },
    {
      "source": "devsecops_root_p4_t2",
      "target": "devsecops_root_p4_t2_s5"
    },
    {
      "source": "devsecops_root_p4_t2_s5",
      "target": "devsecops_root_p4_t2_s5_d1"
    },
    {
      "source": "devsecops_root_p4_t2_s5",
      "target": "devsecops_root_p4_t2_s5_d2"
    },
    {
      "source": "devsecops_root_p4",
      "target": "devsecops_root_p4_t3"
    },
    {
      "source": "devsecops_root_p4_t3",
      "target": "devsecops_root_p4_t3_s1"
    },
    {
      "source": "devsecops_root_p4_t3_s1",
      "target": "devsecops_root_p4_t3_s1_d1"
    },
    {
      "source": "devsecops_root_p4_t3_s1",
      "target": "devsecops_root_p4_t3_s1_d2"
    },
    {
      "source": "devsecops_root_p4_t3",
      "target": "devsecops_root_p4_t3_s2"
    },
    {
      "source": "devsecops_root_p4_t3_s2",
      "target": "devsecops_root_p4_t3_s2_d1"
    },
    {
      "source": "devsecops_root_p4_t3_s2",
      "target": "devsecops_root_p4_t3_s2_d2"
    },
    {
      "source": "devsecops_root_p4_t3",
      "target": "devsecops_root_p4_t3_s3"
    },
    {
      "source": "devsecops_root_p4_t3_s3",
      "target": "devsecops_root_p4_t3_s3_d1"
    },
    {
      "source": "devsecops_root_p4_t3_s3",
      "target": "devsecops_root_p4_t3_s3_d2"
    },
    {
      "source": "devsecops_root_p4_t3",
      "target": "devsecops_root_p4_t3_s4"
    },
    {
      "source": "devsecops_root_p4_t3_s4",
      "target": "devsecops_root_p4_t3_s4_d1"
    },
    {
      "source": "devsecops_root_p4_t3_s4",
      "target": "devsecops_root_p4_t3_s4_d2"
    },
    {
      "source": "devsecops_root_p4_t3",
      "target": "devsecops_root_p4_t3_s5"
    },
    {
      "source": "devsecops_root_p4_t3_s5",
      "target": "devsecops_root_p4_t3_s5_d1"
    },
    {
      "source": "devsecops_root_p4_t3_s5",
      "target": "devsecops_root_p4_t3_s5_d2"
    },
    {
      "source": "devsecops_root_p4",
      "target": "devsecops_root_p4_t4"
    },
    {
      "source": "devsecops_root_p4_t4",
      "target": "devsecops_root_p4_t4_s1"
    },
    {
      "source": "devsecops_root_p4_t4_s1",
      "target": "devsecops_root_p4_t4_s1_d1"
    },
    {
      "source": "devsecops_root_p4_t4_s1",
      "target": "devsecops_root_p4_t4_s1_d2"
    },
    {
      "source": "devsecops_root_p4_t4",
      "target": "devsecops_root_p4_t4_s2"
    },
    {
      "source": "devsecops_root_p4_t4_s2",
      "target": "devsecops_root_p4_t4_s2_d1"
    },
    {
      "source": "devsecops_root_p4_t4_s2",
      "target": "devsecops_root_p4_t4_s2_d2"
    },
    {
      "source": "devsecops_root_p4_t4",
      "target": "devsecops_root_p4_t4_s3"
    },
    {
      "source": "devsecops_root_p4_t4_s3",
      "target": "devsecops_root_p4_t4_s3_d1"
    },
    {
      "source": "devsecops_root_p4_t4_s3",
      "target": "devsecops_root_p4_t4_s3_d2"
    },
    {
      "source": "devsecops_root_p4_t4",
      "target": "devsecops_root_p4_t4_s4"
    },
    {
      "source": "devsecops_root_p4_t4_s4",
      "target": "devsecops_root_p4_t4_s4_d1"
    },
    {
      "source": "devsecops_root_p4_t4_s4",
      "target": "devsecops_root_p4_t4_s4_d2"
    },
    {
      "source": "devsecops_root_p4_t4",
      "target": "devsecops_root_p4_t4_s5"
    },
    {
      "source": "devsecops_root_p4_t4_s5",
      "target": "devsecops_root_p4_t4_s5_d1"
    },
    {
      "source": "devsecops_root_p4_t4_s5",
      "target": "devsecops_root_p4_t4_s5_d2"
    },
    {
      "source": "devsecops_root_p4",
      "target": "devsecops_root_p4_t5"
    },
    {
      "source": "devsecops_root_p4_t5",
      "target": "devsecops_root_p4_t5_s1"
    },
    {
      "source": "devsecops_root_p4_t5_s1",
      "target": "devsecops_root_p4_t5_s1_d1"
    },
    {
      "source": "devsecops_root_p4_t5_s1",
      "target": "devsecops_root_p4_t5_s1_d2"
    },
    {
      "source": "devsecops_root_p4_t5",
      "target": "devsecops_root_p4_t5_s2"
    },
    {
      "source": "devsecops_root_p4_t5_s2",
      "target": "devsecops_root_p4_t5_s2_d1"
    },
    {
      "source": "devsecops_root_p4_t5_s2",
      "target": "devsecops_root_p4_t5_s2_d2"
    },
    {
      "source": "devsecops_root_p4_t5",
      "target": "devsecops_root_p4_t5_s3"
    },
    {
      "source": "devsecops_root_p4_t5_s3",
      "target": "devsecops_root_p4_t5_s3_d1"
    },
    {
      "source": "devsecops_root_p4_t5_s3",
      "target": "devsecops_root_p4_t5_s3_d2"
    },
    {
      "source": "devsecops_root_p4_t5",
      "target": "devsecops_root_p4_t5_s4"
    },
    {
      "source": "devsecops_root_p4_t5_s4",
      "target": "devsecops_root_p4_t5_s4_d1"
    },
    {
      "source": "devsecops_root_p4_t5_s4",
      "target": "devsecops_root_p4_t5_s4_d2"
    },
    {
      "source": "devsecops_root_p4_t5",
      "target": "devsecops_root_p4_t5_s5"
    },
    {
      "source": "devsecops_root_p4_t5_s5",
      "target": "devsecops_root_p4_t5_s5_d1"
    },
    {
      "source": "devsecops_root_p4_t5_s5",
      "target": "devsecops_root_p4_t5_s5_d2"
    },
    {
      "source": "devsecops_root_p4",
      "target": "devsecops_root_p4_t6"
    },
    {
      "source": "devsecops_root_p4_t6",
      "target": "devsecops_root_p4_t6_s1"
    },
    {
      "source": "devsecops_root_p4_t6_s1",
      "target": "devsecops_root_p4_t6_s1_d1"
    },
    {
      "source": "devsecops_root_p4_t6_s1",
      "target": "devsecops_root_p4_t6_s1_d2"
    },
    {
      "source": "devsecops_root_p4_t6",
      "target": "devsecops_root_p4_t6_s2"
    },
    {
      "source": "devsecops_root_p4_t6_s2",
      "target": "devsecops_root_p4_t6_s2_d1"
    },
    {
      "source": "devsecops_root_p4_t6_s2",
      "target": "devsecops_root_p4_t6_s2_d2"
    },
    {
      "source": "devsecops_root_p4_t6",
      "target": "devsecops_root_p4_t6_s3"
    },
    {
      "source": "devsecops_root_p4_t6_s3",
      "target": "devsecops_root_p4_t6_s3_d1"
    },
    {
      "source": "devsecops_root_p4_t6_s3",
      "target": "devsecops_root_p4_t6_s3_d2"
    },
    {
      "source": "devsecops_root_p4_t6",
      "target": "devsecops_root_p4_t6_s4"
    },
    {
      "source": "devsecops_root_p4_t6_s4",
      "target": "devsecops_root_p4_t6_s4_d1"
    },
    {
      "source": "devsecops_root_p4_t6_s4",
      "target": "devsecops_root_p4_t6_s4_d2"
    },
    {
      "source": "devsecops_root_p4_t6",
      "target": "devsecops_root_p4_t6_s5"
    },
    {
      "source": "devsecops_root_p4_t6_s5",
      "target": "devsecops_root_p4_t6_s5_d1"
    },
    {
      "source": "devsecops_root_p4_t6_s5",
      "target": "devsecops_root_p4_t6_s5_d2"
    },
    {
      "source": "devsecops_root",
      "target": "devsecops_root_p5"
    },
    {
      "source": "devsecops_root_p5",
      "target": "devsecops_root_p5_t1"
    },
    {
      "source": "devsecops_root_p5_t1",
      "target": "devsecops_root_p5_t1_s1"
    },
    {
      "source": "devsecops_root_p5_t1_s1",
      "target": "devsecops_root_p5_t1_s1_d1"
    },
    {
      "source": "devsecops_root_p5_t1_s1",
      "target": "devsecops_root_p5_t1_s1_d2"
    },
    {
      "source": "devsecops_root_p5_t1",
      "target": "devsecops_root_p5_t1_s2"
    },
    {
      "source": "devsecops_root_p5_t1_s2",
      "target": "devsecops_root_p5_t1_s2_d1"
    },
    {
      "source": "devsecops_root_p5_t1_s2",
      "target": "devsecops_root_p5_t1_s2_d2"
    },
    {
      "source": "devsecops_root_p5_t1",
      "target": "devsecops_root_p5_t1_s3"
    },
    {
      "source": "devsecops_root_p5_t1_s3",
      "target": "devsecops_root_p5_t1_s3_d1"
    },
    {
      "source": "devsecops_root_p5_t1_s3",
      "target": "devsecops_root_p5_t1_s3_d2"
    },
    {
      "source": "devsecops_root_p5_t1",
      "target": "devsecops_root_p5_t1_s4"
    },
    {
      "source": "devsecops_root_p5_t1_s4",
      "target": "devsecops_root_p5_t1_s4_d1"
    },
    {
      "source": "devsecops_root_p5_t1_s4",
      "target": "devsecops_root_p5_t1_s4_d2"
    },
    {
      "source": "devsecops_root_p5_t1",
      "target": "devsecops_root_p5_t1_s5"
    },
    {
      "source": "devsecops_root_p5_t1_s5",
      "target": "devsecops_root_p5_t1_s5_d1"
    },
    {
      "source": "devsecops_root_p5_t1_s5",
      "target": "devsecops_root_p5_t1_s5_d2"
    },
    {
      "source": "devsecops_root_p5",
      "target": "devsecops_root_p5_t2"
    },
    {
      "source": "devsecops_root_p5_t2",
      "target": "devsecops_root_p5_t2_s1"
    },
    {
      "source": "devsecops_root_p5_t2_s1",
      "target": "devsecops_root_p5_t2_s1_d1"
    },
    {
      "source": "devsecops_root_p5_t2_s1",
      "target": "devsecops_root_p5_t2_s1_d2"
    },
    {
      "source": "devsecops_root_p5_t2",
      "target": "devsecops_root_p5_t2_s2"
    },
    {
      "source": "devsecops_root_p5_t2_s2",
      "target": "devsecops_root_p5_t2_s2_d1"
    },
    {
      "source": "devsecops_root_p5_t2_s2",
      "target": "devsecops_root_p5_t2_s2_d2"
    },
    {
      "source": "devsecops_root_p5_t2",
      "target": "devsecops_root_p5_t2_s3"
    },
    {
      "source": "devsecops_root_p5_t2_s3",
      "target": "devsecops_root_p5_t2_s3_d1"
    },
    {
      "source": "devsecops_root_p5_t2_s3",
      "target": "devsecops_root_p5_t2_s3_d2"
    },
    {
      "source": "devsecops_root_p5_t2",
      "target": "devsecops_root_p5_t2_s4"
    },
    {
      "source": "devsecops_root_p5_t2_s4",
      "target": "devsecops_root_p5_t2_s4_d1"
    },
    {
      "source": "devsecops_root_p5_t2_s4",
      "target": "devsecops_root_p5_t2_s4_d2"
    },
    {
      "source": "devsecops_root_p5_t2",
      "target": "devsecops_root_p5_t2_s5"
    },
    {
      "source": "devsecops_root_p5_t2_s5",
      "target": "devsecops_root_p5_t2_s5_d1"
    },
    {
      "source": "devsecops_root_p5_t2_s5",
      "target": "devsecops_root_p5_t2_s5_d2"
    },
    {
      "source": "devsecops_root_p5",
      "target": "devsecops_root_p5_t3"
    },
    {
      "source": "devsecops_root_p5_t3",
      "target": "devsecops_root_p5_t3_s1"
    },
    {
      "source": "devsecops_root_p5_t3_s1",
      "target": "devsecops_root_p5_t3_s1_d1"
    },
    {
      "source": "devsecops_root_p5_t3_s1",
      "target": "devsecops_root_p5_t3_s1_d2"
    },
    {
      "source": "devsecops_root_p5_t3",
      "target": "devsecops_root_p5_t3_s2"
    },
    {
      "source": "devsecops_root_p5_t3_s2",
      "target": "devsecops_root_p5_t3_s2_d1"
    },
    {
      "source": "devsecops_root_p5_t3_s2",
      "target": "devsecops_root_p5_t3_s2_d2"
    },
    {
      "source": "devsecops_root_p5_t3",
      "target": "devsecops_root_p5_t3_s3"
    },
    {
      "source": "devsecops_root_p5_t3_s3",
      "target": "devsecops_root_p5_t3_s3_d1"
    },
    {
      "source": "devsecops_root_p5_t3_s3",
      "target": "devsecops_root_p5_t3_s3_d2"
    },
    {
      "source": "devsecops_root_p5_t3",
      "target": "devsecops_root_p5_t3_s4"
    },
    {
      "source": "devsecops_root_p5_t3_s4",
      "target": "devsecops_root_p5_t3_s4_d1"
    },
    {
      "source": "devsecops_root_p5_t3_s4",
      "target": "devsecops_root_p5_t3_s4_d2"
    },
    {
      "source": "devsecops_root_p5_t3",
      "target": "devsecops_root_p5_t3_s5"
    },
    {
      "source": "devsecops_root_p5_t3_s5",
      "target": "devsecops_root_p5_t3_s5_d1"
    },
    {
      "source": "devsecops_root_p5_t3_s5",
      "target": "devsecops_root_p5_t3_s5_d2"
    },
    {
      "source": "devsecops_root_p5",
      "target": "devsecops_root_p5_t4"
    },
    {
      "source": "devsecops_root_p5_t4",
      "target": "devsecops_root_p5_t4_s1"
    },
    {
      "source": "devsecops_root_p5_t4_s1",
      "target": "devsecops_root_p5_t4_s1_d1"
    },
    {
      "source": "devsecops_root_p5_t4_s1",
      "target": "devsecops_root_p5_t4_s1_d2"
    },
    {
      "source": "devsecops_root_p5_t4",
      "target": "devsecops_root_p5_t4_s2"
    },
    {
      "source": "devsecops_root_p5_t4_s2",
      "target": "devsecops_root_p5_t4_s2_d1"
    },
    {
      "source": "devsecops_root_p5_t4_s2",
      "target": "devsecops_root_p5_t4_s2_d2"
    },
    {
      "source": "devsecops_root_p5_t4",
      "target": "devsecops_root_p5_t4_s3"
    },
    {
      "source": "devsecops_root_p5_t4_s3",
      "target": "devsecops_root_p5_t4_s3_d1"
    },
    {
      "source": "devsecops_root_p5_t4_s3",
      "target": "devsecops_root_p5_t4_s3_d2"
    },
    {
      "source": "devsecops_root_p5_t4",
      "target": "devsecops_root_p5_t4_s4"
    },
    {
      "source": "devsecops_root_p5_t4_s4",
      "target": "devsecops_root_p5_t4_s4_d1"
    },
    {
      "source": "devsecops_root_p5_t4_s4",
      "target": "devsecops_root_p5_t4_s4_d2"
    },
    {
      "source": "devsecops_root_p5_t4",
      "target": "devsecops_root_p5_t4_s5"
    },
    {
      "source": "devsecops_root_p5_t4_s5",
      "target": "devsecops_root_p5_t4_s5_d1"
    },
    {
      "source": "devsecops_root_p5_t4_s5",
      "target": "devsecops_root_p5_t4_s5_d2"
    },
    {
      "source": "devsecops_root_p5",
      "target": "devsecops_root_p5_t5"
    },
    {
      "source": "devsecops_root_p5_t5",
      "target": "devsecops_root_p5_t5_s1"
    },
    {
      "source": "devsecops_root_p5_t5_s1",
      "target": "devsecops_root_p5_t5_s1_d1"
    },
    {
      "source": "devsecops_root_p5_t5_s1",
      "target": "devsecops_root_p5_t5_s1_d2"
    },
    {
      "source": "devsecops_root_p5_t5",
      "target": "devsecops_root_p5_t5_s2"
    },
    {
      "source": "devsecops_root_p5_t5_s2",
      "target": "devsecops_root_p5_t5_s2_d1"
    },
    {
      "source": "devsecops_root_p5_t5_s2",
      "target": "devsecops_root_p5_t5_s2_d2"
    },
    {
      "source": "devsecops_root_p5_t5",
      "target": "devsecops_root_p5_t5_s3"
    },
    {
      "source": "devsecops_root_p5_t5_s3",
      "target": "devsecops_root_p5_t5_s3_d1"
    },
    {
      "source": "devsecops_root_p5_t5_s3",
      "target": "devsecops_root_p5_t5_s3_d2"
    },
    {
      "source": "devsecops_root_p5_t5",
      "target": "devsecops_root_p5_t5_s4"
    },
    {
      "source": "devsecops_root_p5_t5_s4",
      "target": "devsecops_root_p5_t5_s4_d1"
    },
    {
      "source": "devsecops_root_p5_t5_s4",
      "target": "devsecops_root_p5_t5_s4_d2"
    },
    {
      "source": "devsecops_root_p5_t5",
      "target": "devsecops_root_p5_t5_s5"
    },
    {
      "source": "devsecops_root_p5_t5_s5",
      "target": "devsecops_root_p5_t5_s5_d1"
    },
    {
      "source": "devsecops_root_p5_t5_s5",
      "target": "devsecops_root_p5_t5_s5_d2"
    },
    {
      "source": "devsecops_root_p5",
      "target": "devsecops_root_p5_t6"
    },
    {
      "source": "devsecops_root_p5_t6",
      "target": "devsecops_root_p5_t6_s1"
    },
    {
      "source": "devsecops_root_p5_t6_s1",
      "target": "devsecops_root_p5_t6_s1_d1"
    },
    {
      "source": "devsecops_root_p5_t6_s1",
      "target": "devsecops_root_p5_t6_s1_d2"
    },
    {
      "source": "devsecops_root_p5_t6",
      "target": "devsecops_root_p5_t6_s2"
    },
    {
      "source": "devsecops_root_p5_t6_s2",
      "target": "devsecops_root_p5_t6_s2_d1"
    },
    {
      "source": "devsecops_root_p5_t6_s2",
      "target": "devsecops_root_p5_t6_s2_d2"
    },
    {
      "source": "devsecops_root_p5_t6",
      "target": "devsecops_root_p5_t6_s3"
    },
    {
      "source": "devsecops_root_p5_t6_s3",
      "target": "devsecops_root_p5_t6_s3_d1"
    },
    {
      "source": "devsecops_root_p5_t6_s3",
      "target": "devsecops_root_p5_t6_s3_d2"
    },
    {
      "source": "devsecops_root_p5_t6",
      "target": "devsecops_root_p5_t6_s4"
    },
    {
      "source": "devsecops_root_p5_t6_s4",
      "target": "devsecops_root_p5_t6_s4_d1"
    },
    {
      "source": "devsecops_root_p5_t6_s4",
      "target": "devsecops_root_p5_t6_s4_d2"
    },
    {
      "source": "devsecops_root_p5_t6",
      "target": "devsecops_root_p5_t6_s5"
    },
    {
      "source": "devsecops_root_p5_t6_s5",
      "target": "devsecops_root_p5_t6_s5_d1"
    },
    {
      "source": "devsecops_root_p5_t6_s5",
      "target": "devsecops_root_p5_t6_s5_d2"
    },
    {
      "source": "devsecops_root",
      "target": "devsecops_root_p6"
    },
    {
      "source": "devsecops_root_p6",
      "target": "devsecops_root_p6_t1"
    },
    {
      "source": "devsecops_root_p6_t1",
      "target": "devsecops_root_p6_t1_s1"
    },
    {
      "source": "devsecops_root_p6_t1_s1",
      "target": "devsecops_root_p6_t1_s1_d1"
    },
    {
      "source": "devsecops_root_p6_t1_s1",
      "target": "devsecops_root_p6_t1_s1_d2"
    },
    {
      "source": "devsecops_root_p6_t1",
      "target": "devsecops_root_p6_t1_s2"
    },
    {
      "source": "devsecops_root_p6_t1_s2",
      "target": "devsecops_root_p6_t1_s2_d1"
    },
    {
      "source": "devsecops_root_p6_t1_s2",
      "target": "devsecops_root_p6_t1_s2_d2"
    },
    {
      "source": "devsecops_root_p6_t1",
      "target": "devsecops_root_p6_t1_s3"
    },
    {
      "source": "devsecops_root_p6_t1_s3",
      "target": "devsecops_root_p6_t1_s3_d1"
    },
    {
      "source": "devsecops_root_p6_t1_s3",
      "target": "devsecops_root_p6_t1_s3_d2"
    },
    {
      "source": "devsecops_root_p6_t1",
      "target": "devsecops_root_p6_t1_s4"
    },
    {
      "source": "devsecops_root_p6_t1_s4",
      "target": "devsecops_root_p6_t1_s4_d1"
    },
    {
      "source": "devsecops_root_p6_t1_s4",
      "target": "devsecops_root_p6_t1_s4_d2"
    },
    {
      "source": "devsecops_root_p6_t1",
      "target": "devsecops_root_p6_t1_s5"
    },
    {
      "source": "devsecops_root_p6_t1_s5",
      "target": "devsecops_root_p6_t1_s5_d1"
    },
    {
      "source": "devsecops_root_p6_t1_s5",
      "target": "devsecops_root_p6_t1_s5_d2"
    },
    {
      "source": "devsecops_root_p6",
      "target": "devsecops_root_p6_t2"
    },
    {
      "source": "devsecops_root_p6_t2",
      "target": "devsecops_root_p6_t2_s1"
    },
    {
      "source": "devsecops_root_p6_t2_s1",
      "target": "devsecops_root_p6_t2_s1_d1"
    },
    {
      "source": "devsecops_root_p6_t2_s1",
      "target": "devsecops_root_p6_t2_s1_d2"
    },
    {
      "source": "devsecops_root_p6_t2",
      "target": "devsecops_root_p6_t2_s2"
    },
    {
      "source": "devsecops_root_p6_t2_s2",
      "target": "devsecops_root_p6_t2_s2_d1"
    },
    {
      "source": "devsecops_root_p6_t2_s2",
      "target": "devsecops_root_p6_t2_s2_d2"
    },
    {
      "source": "devsecops_root_p6_t2_s2",
      "target": "devsecops_root_p6_t2_s2_d3"
    },
    {
      "source": "devsecops_root_p6_t2",
      "target": "devsecops_root_p6_t2_s3"
    },
    {
      "source": "devsecops_root_p6_t2_s3",
      "target": "devsecops_root_p6_t2_s3_d1"
    },
    {
      "source": "devsecops_root_p6_t2_s3",
      "target": "devsecops_root_p6_t2_s3_d2"
    },
    {
      "source": "devsecops_root_p6_t2",
      "target": "devsecops_root_p6_t2_s4"
    },
    {
      "source": "devsecops_root_p6_t2_s4",
      "target": "devsecops_root_p6_t2_s4_d1"
    },
    {
      "source": "devsecops_root_p6_t2_s4",
      "target": "devsecops_root_p6_t2_s4_d2"
    },
    {
      "source": "devsecops_root_p6_t2",
      "target": "devsecops_root_p6_t2_s5"
    },
    {
      "source": "devsecops_root_p6_t2_s5",
      "target": "devsecops_root_p6_t2_s5_d1"
    },
    {
      "source": "devsecops_root_p6_t2_s5",
      "target": "devsecops_root_p6_t2_s5_d2"
    },
    {
      "source": "devsecops_root_p6",
      "target": "devsecops_root_p6_t3"
    },
    {
      "source": "devsecops_root_p6_t3",
      "target": "devsecops_root_p6_t3_s1"
    },
    {
      "source": "devsecops_root_p6_t3_s1",
      "target": "devsecops_root_p6_t3_s1_d1"
    },
    {
      "source": "devsecops_root_p6_t3_s1",
      "target": "devsecops_root_p6_t3_s1_d2"
    },
    {
      "source": "devsecops_root_p6_t3",
      "target": "devsecops_root_p6_t3_s2"
    },
    {
      "source": "devsecops_root_p6_t3_s2",
      "target": "devsecops_root_p6_t3_s2_d1"
    },
    {
      "source": "devsecops_root_p6_t3_s2",
      "target": "devsecops_root_p6_t3_s2_d2"
    },
    {
      "source": "devsecops_root_p6_t3",
      "target": "devsecops_root_p6_t3_s3"
    },
    {
      "source": "devsecops_root_p6_t3_s3",
      "target": "devsecops_root_p6_t3_s3_d1"
    },
    {
      "source": "devsecops_root_p6_t3_s3",
      "target": "devsecops_root_p6_t3_s3_d2"
    },
    {
      "source": "devsecops_root_p6_t3",
      "target": "devsecops_root_p6_t3_s4"
    },
    {
      "source": "devsecops_root_p6_t3_s4",
      "target": "devsecops_root_p6_t3_s4_d1"
    },
    {
      "source": "devsecops_root_p6_t3_s4",
      "target": "devsecops_root_p6_t3_s4_d2"
    },
    {
      "source": "devsecops_root_p6_t3",
      "target": "devsecops_root_p6_t3_s5"
    },
    {
      "source": "devsecops_root_p6_t3_s5",
      "target": "devsecops_root_p6_t3_s5_d1"
    },
    {
      "source": "devsecops_root_p6_t3_s5",
      "target": "devsecops_root_p6_t3_s5_d2"
    },
    {
      "source": "devsecops_root_p6",
      "target": "devsecops_root_p6_t4"
    },
    {
      "source": "devsecops_root_p6_t4",
      "target": "devsecops_root_p6_t4_s1"
    },
    {
      "source": "devsecops_root_p6_t4_s1",
      "target": "devsecops_root_p6_t4_s1_d1"
    },
    {
      "source": "devsecops_root_p6_t4_s1",
      "target": "devsecops_root_p6_t4_s1_d2"
    },
    {
      "source": "devsecops_root_p6_t4",
      "target": "devsecops_root_p6_t4_s2"
    },
    {
      "source": "devsecops_root_p6_t4_s2",
      "target": "devsecops_root_p6_t4_s2_d1"
    },
    {
      "source": "devsecops_root_p6_t4_s2",
      "target": "devsecops_root_p6_t4_s2_d2"
    },
    {
      "source": "devsecops_root_p6_t4",
      "target": "devsecops_root_p6_t4_s3"
    },
    {
      "source": "devsecops_root_p6_t4_s3",
      "target": "devsecops_root_p6_t4_s3_d1"
    },
    {
      "source": "devsecops_root_p6_t4_s3",
      "target": "devsecops_root_p6_t4_s3_d2"
    },
    {
      "source": "devsecops_root_p6_t4",
      "target": "devsecops_root_p6_t4_s4"
    },
    {
      "source": "devsecops_root_p6_t4_s4",
      "target": "devsecops_root_p6_t4_s4_d1"
    },
    {
      "source": "devsecops_root_p6_t4_s4",
      "target": "devsecops_root_p6_t4_s4_d2"
    },
    {
      "source": "devsecops_root_p6_t4",
      "target": "devsecops_root_p6_t4_s5"
    },
    {
      "source": "devsecops_root_p6_t4_s5",
      "target": "devsecops_root_p6_t4_s5_d1"
    },
    {
      "source": "devsecops_root_p6_t4_s5",
      "target": "devsecops_root_p6_t4_s5_d2"
    },
    {
      "source": "devsecops_root_p6",
      "target": "devsecops_root_p6_t5"
    },
    {
      "source": "devsecops_root_p6_t5",
      "target": "devsecops_root_p6_t5_s1"
    },
    {
      "source": "devsecops_root_p6_t5_s1",
      "target": "devsecops_root_p6_t5_s1_d1"
    },
    {
      "source": "devsecops_root_p6_t5_s1",
      "target": "devsecops_root_p6_t5_s1_d2"
    },
    {
      "source": "devsecops_root_p6_t5",
      "target": "devsecops_root_p6_t5_s2"
    },
    {
      "source": "devsecops_root_p6_t5_s2",
      "target": "devsecops_root_p6_t5_s2_d1"
    },
    {
      "source": "devsecops_root_p6_t5_s2",
      "target": "devsecops_root_p6_t5_s2_d2"
    },
    {
      "source": "devsecops_root_p6_t5",
      "target": "devsecops_root_p6_t5_s3"
    },
    {
      "source": "devsecops_root_p6_t5_s3",
      "target": "devsecops_root_p6_t5_s3_d1"
    },
    {
      "source": "devsecops_root_p6_t5_s3",
      "target": "devsecops_root_p6_t5_s3_d2"
    },
    {
      "source": "devsecops_root_p6_t5",
      "target": "devsecops_root_p6_t5_s4"
    },
    {
      "source": "devsecops_root_p6_t5_s4",
      "target": "devsecops_root_p6_t5_s4_d1"
    },
    {
      "source": "devsecops_root_p6_t5_s4",
      "target": "devsecops_root_p6_t5_s4_d2"
    },
    {
      "source": "devsecops_root_p6_t5",
      "target": "devsecops_root_p6_t5_s5"
    },
    {
      "source": "devsecops_root_p6_t5_s5",
      "target": "devsecops_root_p6_t5_s5_d1"
    },
    {
      "source": "devsecops_root_p6_t5_s5",
      "target": "devsecops_root_p6_t5_s5_d2"
    },
    {
      "source": "devsecops_root_p6",
      "target": "devsecops_root_p6_t6"
    },
    {
      "source": "devsecops_root_p6_t6",
      "target": "devsecops_root_p6_t6_s1"
    },
    {
      "source": "devsecops_root_p6_t6_s1",
      "target": "devsecops_root_p6_t6_s1_d1"
    },
    {
      "source": "devsecops_root_p6_t6_s1",
      "target": "devsecops_root_p6_t6_s1_d2"
    },
    {
      "source": "devsecops_root_p6_t6",
      "target": "devsecops_root_p6_t6_s2"
    },
    {
      "source": "devsecops_root_p6_t6_s2",
      "target": "devsecops_root_p6_t6_s2_d1"
    },
    {
      "source": "devsecops_root_p6_t6_s2",
      "target": "devsecops_root_p6_t6_s2_d2"
    },
    {
      "source": "devsecops_root_p6_t6",
      "target": "devsecops_root_p6_t6_s3"
    },
    {
      "source": "devsecops_root_p6_t6_s3",
      "target": "devsecops_root_p6_t6_s3_d1"
    },
    {
      "source": "devsecops_root_p6_t6_s3",
      "target": "devsecops_root_p6_t6_s3_d2"
    },
    {
      "source": "devsecops_root_p6_t6",
      "target": "devsecops_root_p6_t6_s4"
    },
    {
      "source": "devsecops_root_p6_t6_s4",
      "target": "devsecops_root_p6_t6_s4_d1"
    },
    {
      "source": "devsecops_root_p6_t6_s4",
      "target": "devsecops_root_p6_t6_s4_d2"
    },
    {
      "source": "devsecops_root_p6_t6",
      "target": "devsecops_root_p6_t6_s5"
    },
    {
      "source": "devsecops_root_p6_t6_s5",
      "target": "devsecops_root_p6_t6_s5_d1"
    },
    {
      "source": "devsecops_root_p6_t6_s5",
      "target": "devsecops_root_p6_t6_s5_d2"
    },
    {
      "source": "devsecops_root",
      "target": "devsecops_root_p7"
    },
    {
      "source": "devsecops_root_p7",
      "target": "devsecops_root_p7_t1"
    },
    {
      "source": "devsecops_root_p7_t1",
      "target": "devsecops_root_p7_t1_s1"
    },
    {
      "source": "devsecops_root_p7_t1_s1",
      "target": "devsecops_root_p7_t1_s1_d1"
    },
    {
      "source": "devsecops_root_p7_t1_s1",
      "target": "devsecops_root_p7_t1_s1_d2"
    },
    {
      "source": "devsecops_root_p7_t1",
      "target": "devsecops_root_p7_t1_s2"
    },
    {
      "source": "devsecops_root_p7_t1_s2",
      "target": "devsecops_root_p7_t1_s2_d1"
    },
    {
      "source": "devsecops_root_p7_t1_s2",
      "target": "devsecops_root_p7_t1_s2_d2"
    },
    {
      "source": "devsecops_root_p7_t1",
      "target": "devsecops_root_p7_t1_s3"
    },
    {
      "source": "devsecops_root_p7_t1_s3",
      "target": "devsecops_root_p7_t1_s3_d1"
    },
    {
      "source": "devsecops_root_p7_t1_s3",
      "target": "devsecops_root_p7_t1_s3_d2"
    },
    {
      "source": "devsecops_root_p7_t1",
      "target": "devsecops_root_p7_t1_s4"
    },
    {
      "source": "devsecops_root_p7_t1_s4",
      "target": "devsecops_root_p7_t1_s4_d1"
    },
    {
      "source": "devsecops_root_p7_t1_s4",
      "target": "devsecops_root_p7_t1_s4_d2"
    },
    {
      "source": "devsecops_root_p7_t1",
      "target": "devsecops_root_p7_t1_s5"
    },
    {
      "source": "devsecops_root_p7_t1_s5",
      "target": "devsecops_root_p7_t1_s5_d1"
    },
    {
      "source": "devsecops_root_p7_t1_s5",
      "target": "devsecops_root_p7_t1_s5_d2"
    },
    {
      "source": "devsecops_root_p7",
      "target": "devsecops_root_p7_t2"
    },
    {
      "source": "devsecops_root_p7_t2",
      "target": "devsecops_root_p7_t2_s1"
    },
    {
      "source": "devsecops_root_p7_t2_s1",
      "target": "devsecops_root_p7_t2_s1_d1"
    },
    {
      "source": "devsecops_root_p7_t2_s1",
      "target": "devsecops_root_p7_t2_s1_d2"
    },
    {
      "source": "devsecops_root_p7_t2",
      "target": "devsecops_root_p7_t2_s2"
    },
    {
      "source": "devsecops_root_p7_t2_s2",
      "target": "devsecops_root_p7_t2_s2_d1"
    },
    {
      "source": "devsecops_root_p7_t2_s2",
      "target": "devsecops_root_p7_t2_s2_d2"
    },
    {
      "source": "devsecops_root_p7_t2",
      "target": "devsecops_root_p7_t2_s3"
    },
    {
      "source": "devsecops_root_p7_t2_s3",
      "target": "devsecops_root_p7_t2_s3_d1"
    },
    {
      "source": "devsecops_root_p7_t2_s3",
      "target": "devsecops_root_p7_t2_s3_d2"
    },
    {
      "source": "devsecops_root_p7_t2",
      "target": "devsecops_root_p7_t2_s4"
    },
    {
      "source": "devsecops_root_p7_t2_s4",
      "target": "devsecops_root_p7_t2_s4_d1"
    },
    {
      "source": "devsecops_root_p7_t2_s4",
      "target": "devsecops_root_p7_t2_s4_d2"
    },
    {
      "source": "devsecops_root_p7_t2",
      "target": "devsecops_root_p7_t2_s5"
    },
    {
      "source": "devsecops_root_p7_t2_s5",
      "target": "devsecops_root_p7_t2_s5_d1"
    },
    {
      "source": "devsecops_root_p7_t2_s5",
      "target": "devsecops_root_p7_t2_s5_d2"
    },
    {
      "source": "devsecops_root_p7",
      "target": "devsecops_root_p7_t3"
    },
    {
      "source": "devsecops_root_p7_t3",
      "target": "devsecops_root_p7_t3_s1"
    },
    {
      "source": "devsecops_root_p7_t3_s1",
      "target": "devsecops_root_p7_t3_s1_d1"
    },
    {
      "source": "devsecops_root_p7_t3_s1",
      "target": "devsecops_root_p7_t3_s1_d2"
    },
    {
      "source": "devsecops_root_p7_t3",
      "target": "devsecops_root_p7_t3_s2"
    },
    {
      "source": "devsecops_root_p7_t3_s2",
      "target": "devsecops_root_p7_t3_s2_d1"
    },
    {
      "source": "devsecops_root_p7_t3_s2",
      "target": "devsecops_root_p7_t3_s2_d2"
    },
    {
      "source": "devsecops_root_p7_t3",
      "target": "devsecops_root_p7_t3_s3"
    },
    {
      "source": "devsecops_root_p7_t3_s3",
      "target": "devsecops_root_p7_t3_s3_d1"
    },
    {
      "source": "devsecops_root_p7_t3_s3",
      "target": "devsecops_root_p7_t3_s3_d2"
    },
    {
      "source": "devsecops_root_p7_t3",
      "target": "devsecops_root_p7_t3_s4"
    },
    {
      "source": "devsecops_root_p7_t3_s4",
      "target": "devsecops_root_p7_t3_s4_d1"
    },
    {
      "source": "devsecops_root_p7_t3_s4",
      "target": "devsecops_root_p7_t3_s4_d2"
    },
    {
      "source": "devsecops_root_p7_t3",
      "target": "devsecops_root_p7_t3_s5"
    },
    {
      "source": "devsecops_root_p7_t3_s5",
      "target": "devsecops_root_p7_t3_s5_d1"
    },
    {
      "source": "devsecops_root_p7_t3_s5",
      "target": "devsecops_root_p7_t3_s5_d2"
    },
    {
      "source": "devsecops_root_p7",
      "target": "devsecops_root_p7_t4"
    },
    {
      "source": "devsecops_root_p7_t4",
      "target": "devsecops_root_p7_t4_s1"
    },
    {
      "source": "devsecops_root_p7_t4_s1",
      "target": "devsecops_root_p7_t4_s1_d1"
    },
    {
      "source": "devsecops_root_p7_t4_s1",
      "target": "devsecops_root_p7_t4_s1_d2"
    },
    {
      "source": "devsecops_root_p7_t4",
      "target": "devsecops_root_p7_t4_s2"
    },
    {
      "source": "devsecops_root_p7_t4_s2",
      "target": "devsecops_root_p7_t4_s2_d1"
    },
    {
      "source": "devsecops_root_p7_t4_s2",
      "target": "devsecops_root_p7_t4_s2_d2"
    },
    {
      "source": "devsecops_root_p7_t4",
      "target": "devsecops_root_p7_t4_s3"
    },
    {
      "source": "devsecops_root_p7_t4_s3",
      "target": "devsecops_root_p7_t4_s3_d1"
    },
    {
      "source": "devsecops_root_p7_t4_s3",
      "target": "devsecops_root_p7_t4_s3_d2"
    },
    {
      "source": "devsecops_root_p7_t4",
      "target": "devsecops_root_p7_t4_s4"
    },
    {
      "source": "devsecops_root_p7_t4_s4",
      "target": "devsecops_root_p7_t4_s4_d1"
    },
    {
      "source": "devsecops_root_p7_t4_s4",
      "target": "devsecops_root_p7_t4_s4_d2"
    },
    {
      "source": "devsecops_root_p7_t4",
      "target": "devsecops_root_p7_t4_s5"
    },
    {
      "source": "devsecops_root_p7_t4_s5",
      "target": "devsecops_root_p7_t4_s5_d1"
    },
    {
      "source": "devsecops_root_p7_t4_s5",
      "target": "devsecops_root_p7_t4_s5_d2"
    },
    {
      "source": "devsecops_root_p7",
      "target": "devsecops_root_p7_t5"
    },
    {
      "source": "devsecops_root_p7_t5",
      "target": "devsecops_root_p7_t5_s1"
    },
    {
      "source": "devsecops_root_p7_t5_s1",
      "target": "devsecops_root_p7_t5_s1_d1"
    },
    {
      "source": "devsecops_root_p7_t5_s1",
      "target": "devsecops_root_p7_t5_s1_d2"
    },
    {
      "source": "devsecops_root_p7_t5",
      "target": "devsecops_root_p7_t5_s2"
    },
    {
      "source": "devsecops_root_p7_t5_s2",
      "target": "devsecops_root_p7_t5_s2_d1"
    },
    {
      "source": "devsecops_root_p7_t5_s2",
      "target": "devsecops_root_p7_t5_s2_d2"
    },
    {
      "source": "devsecops_root_p7_t5",
      "target": "devsecops_root_p7_t5_s3"
    },
    {
      "source": "devsecops_root_p7_t5_s3",
      "target": "devsecops_root_p7_t5_s3_d1"
    },
    {
      "source": "devsecops_root_p7_t5_s3",
      "target": "devsecops_root_p7_t5_s3_d2"
    },
    {
      "source": "devsecops_root_p7_t5",
      "target": "devsecops_root_p7_t5_s4"
    },
    {
      "source": "devsecops_root_p7_t5_s4",
      "target": "devsecops_root_p7_t5_s4_d1"
    },
    {
      "source": "devsecops_root_p7_t5_s4",
      "target": "devsecops_root_p7_t5_s4_d2"
    },
    {
      "source": "devsecops_root_p7_t5",
      "target": "devsecops_root_p7_t5_s5"
    },
    {
      "source": "devsecops_root_p7_t5_s5",
      "target": "devsecops_root_p7_t5_s5_d1"
    },
    {
      "source": "devsecops_root_p7_t5_s5",
      "target": "devsecops_root_p7_t5_s5_d2"
    },
    {
      "source": "devsecops_root_p7",
      "target": "devsecops_root_p7_t6"
    },
    {
      "source": "devsecops_root_p7_t6",
      "target": "devsecops_root_p7_t6_s1"
    },
    {
      "source": "devsecops_root_p7_t6_s1",
      "target": "devsecops_root_p7_t6_s1_d1"
    },
    {
      "source": "devsecops_root_p7_t6_s1",
      "target": "devsecops_root_p7_t6_s1_d2"
    },
    {
      "source": "devsecops_root_p7_t6",
      "target": "devsecops_root_p7_t6_s2"
    },
    {
      "source": "devsecops_root_p7_t6_s2",
      "target": "devsecops_root_p7_t6_s2_d1"
    },
    {
      "source": "devsecops_root_p7_t6_s2",
      "target": "devsecops_root_p7_t6_s2_d2"
    },
    {
      "source": "devsecops_root_p7_t6",
      "target": "devsecops_root_p7_t6_s3"
    },
    {
      "source": "devsecops_root_p7_t6_s3",
      "target": "devsecops_root_p7_t6_s3_d1"
    },
    {
      "source": "devsecops_root_p7_t6_s3",
      "target": "devsecops_root_p7_t6_s3_d2"
    },
    {
      "source": "devsecops_root_p7_t6",
      "target": "devsecops_root_p7_t6_s4"
    },
    {
      "source": "devsecops_root_p7_t6_s4",
      "target": "devsecops_root_p7_t6_s4_d1"
    },
    {
      "source": "devsecops_root_p7_t6_s4",
      "target": "devsecops_root_p7_t6_s4_d2"
    },
    {
      "source": "devsecops_root_p7_t6",
      "target": "devsecops_root_p7_t6_s5"
    },
    {
      "source": "devsecops_root_p7_t6_s5",
      "target": "devsecops_root_p7_t6_s5_d1"
    },
    {
      "source": "devsecops_root_p7_t6_s5",
      "target": "devsecops_root_p7_t6_s5_d2"
    },
    {
      "source": "devsecops_root",
      "target": "devsecops_root_p8"
    },
    {
      "source": "devsecops_root_p8",
      "target": "devsecops_root_p8_t1"
    },
    {
      "source": "devsecops_root_p8_t1",
      "target": "devsecops_root_p8_t1_s1"
    },
    {
      "source": "devsecops_root_p8_t1_s1",
      "target": "devsecops_root_p8_t1_s1_d1"
    },
    {
      "source": "devsecops_root_p8_t1_s1",
      "target": "devsecops_root_p8_t1_s1_d2"
    },
    {
      "source": "devsecops_root_p8_t1",
      "target": "devsecops_root_p8_t1_s2"
    },
    {
      "source": "devsecops_root_p8_t1_s2",
      "target": "devsecops_root_p8_t1_s2_d1"
    },
    {
      "source": "devsecops_root_p8_t1_s2",
      "target": "devsecops_root_p8_t1_s2_d2"
    },
    {
      "source": "devsecops_root_p8_t1",
      "target": "devsecops_root_p8_t1_s3"
    },
    {
      "source": "devsecops_root_p8_t1_s3",
      "target": "devsecops_root_p8_t1_s3_d1"
    },
    {
      "source": "devsecops_root_p8_t1_s3",
      "target": "devsecops_root_p8_t1_s3_d2"
    },
    {
      "source": "devsecops_root_p8_t1",
      "target": "devsecops_root_p8_t1_s4"
    },
    {
      "source": "devsecops_root_p8_t1_s4",
      "target": "devsecops_root_p8_t1_s4_d1"
    },
    {
      "source": "devsecops_root_p8_t1_s4",
      "target": "devsecops_root_p8_t1_s4_d2"
    },
    {
      "source": "devsecops_root_p8_t1",
      "target": "devsecops_root_p8_t1_s5"
    },
    {
      "source": "devsecops_root_p8_t1_s5",
      "target": "devsecops_root_p8_t1_s5_d1"
    },
    {
      "source": "devsecops_root_p8_t1_s5",
      "target": "devsecops_root_p8_t1_s5_d2"
    },
    {
      "source": "devsecops_root_p8",
      "target": "devsecops_root_p8_t2"
    },
    {
      "source": "devsecops_root_p8_t2",
      "target": "devsecops_root_p8_t2_s1"
    },
    {
      "source": "devsecops_root_p8_t2_s1",
      "target": "devsecops_root_p8_t2_s1_d1"
    },
    {
      "source": "devsecops_root_p8_t2_s1",
      "target": "devsecops_root_p8_t2_s1_d2"
    },
    {
      "source": "devsecops_root_p8_t2",
      "target": "devsecops_root_p8_t2_s2"
    },
    {
      "source": "devsecops_root_p8_t2_s2",
      "target": "devsecops_root_p8_t2_s2_d1"
    },
    {
      "source": "devsecops_root_p8_t2_s2",
      "target": "devsecops_root_p8_t2_s2_d2"
    },
    {
      "source": "devsecops_root_p8_t2",
      "target": "devsecops_root_p8_t2_s3"
    },
    {
      "source": "devsecops_root_p8_t2_s3",
      "target": "devsecops_root_p8_t2_s3_d1"
    },
    {
      "source": "devsecops_root_p8_t2_s3",
      "target": "devsecops_root_p8_t2_s3_d2"
    },
    {
      "source": "devsecops_root_p8_t2",
      "target": "devsecops_root_p8_t2_s4"
    },
    {
      "source": "devsecops_root_p8_t2_s4",
      "target": "devsecops_root_p8_t2_s4_d1"
    },
    {
      "source": "devsecops_root_p8_t2_s4",
      "target": "devsecops_root_p8_t2_s4_d2"
    },
    {
      "source": "devsecops_root_p8_t2",
      "target": "devsecops_root_p8_t2_s5"
    },
    {
      "source": "devsecops_root_p8_t2_s5",
      "target": "devsecops_root_p8_t2_s5_d1"
    },
    {
      "source": "devsecops_root_p8_t2_s5",
      "target": "devsecops_root_p8_t2_s5_d2"
    },
    {
      "source": "devsecops_root_p8",
      "target": "devsecops_root_p8_t3"
    },
    {
      "source": "devsecops_root_p8_t3",
      "target": "devsecops_root_p8_t3_s1"
    },
    {
      "source": "devsecops_root_p8_t3_s1",
      "target": "devsecops_root_p8_t3_s1_d1"
    },
    {
      "source": "devsecops_root_p8_t3_s1",
      "target": "devsecops_root_p8_t3_s1_d2"
    },
    {
      "source": "devsecops_root_p8_t3",
      "target": "devsecops_root_p8_t3_s2"
    },
    {
      "source": "devsecops_root_p8_t3_s2",
      "target": "devsecops_root_p8_t3_s2_d1"
    },
    {
      "source": "devsecops_root_p8_t3_s2",
      "target": "devsecops_root_p8_t3_s2_d2"
    },
    {
      "source": "devsecops_root_p8_t3",
      "target": "devsecops_root_p8_t3_s3"
    },
    {
      "source": "devsecops_root_p8_t3_s3",
      "target": "devsecops_root_p8_t3_s3_d1"
    },
    {
      "source": "devsecops_root_p8_t3_s3",
      "target": "devsecops_root_p8_t3_s3_d2"
    },
    {
      "source": "devsecops_root_p8_t3",
      "target": "devsecops_root_p8_t3_s4"
    },
    {
      "source": "devsecops_root_p8_t3_s4",
      "target": "devsecops_root_p8_t3_s4_d1"
    },
    {
      "source": "devsecops_root_p8_t3_s4",
      "target": "devsecops_root_p8_t3_s4_d2"
    },
    {
      "source": "devsecops_root_p8_t3",
      "target": "devsecops_root_p8_t3_s5"
    },
    {
      "source": "devsecops_root_p8_t3_s5",
      "target": "devsecops_root_p8_t3_s5_d1"
    },
    {
      "source": "devsecops_root_p8_t3_s5",
      "target": "devsecops_root_p8_t3_s5_d2"
    },
    {
      "source": "devsecops_root_p8",
      "target": "devsecops_root_p8_t4"
    },
    {
      "source": "devsecops_root_p8_t4",
      "target": "devsecops_root_p8_t4_s1"
    },
    {
      "source": "devsecops_root_p8_t4_s1",
      "target": "devsecops_root_p8_t4_s1_d1"
    },
    {
      "source": "devsecops_root_p8_t4_s1",
      "target": "devsecops_root_p8_t4_s1_d2"
    },
    {
      "source": "devsecops_root_p8_t4",
      "target": "devsecops_root_p8_t4_s2"
    },
    {
      "source": "devsecops_root_p8_t4_s2",
      "target": "devsecops_root_p8_t4_s2_d1"
    },
    {
      "source": "devsecops_root_p8_t4_s2",
      "target": "devsecops_root_p8_t4_s2_d2"
    },
    {
      "source": "devsecops_root_p8_t4",
      "target": "devsecops_root_p8_t4_s3"
    },
    {
      "source": "devsecops_root_p8_t4_s3",
      "target": "devsecops_root_p8_t4_s3_d1"
    },
    {
      "source": "devsecops_root_p8_t4_s3",
      "target": "devsecops_root_p8_t4_s3_d2"
    },
    {
      "source": "devsecops_root_p8_t4",
      "target": "devsecops_root_p8_t4_s4"
    },
    {
      "source": "devsecops_root_p8_t4_s4",
      "target": "devsecops_root_p8_t4_s4_d1"
    },
    {
      "source": "devsecops_root_p8_t4_s4",
      "target": "devsecops_root_p8_t4_s4_d2"
    },
    {
      "source": "devsecops_root_p8_t4",
      "target": "devsecops_root_p8_t4_s5"
    },
    {
      "source": "devsecops_root_p8_t4_s5",
      "target": "devsecops_root_p8_t4_s5_d1"
    },
    {
      "source": "devsecops_root_p8_t4_s5",
      "target": "devsecops_root_p8_t4_s5_d2"
    },
    {
      "source": "devsecops_root_p8",
      "target": "devsecops_root_p8_t5"
    },
    {
      "source": "devsecops_root_p8_t5",
      "target": "devsecops_root_p8_t5_s1"
    },
    {
      "source": "devsecops_root_p8_t5_s1",
      "target": "devsecops_root_p8_t5_s1_d1"
    },
    {
      "source": "devsecops_root_p8_t5_s1",
      "target": "devsecops_root_p8_t5_s1_d2"
    },
    {
      "source": "devsecops_root_p8_t5",
      "target": "devsecops_root_p8_t5_s2"
    },
    {
      "source": "devsecops_root_p8_t5_s2",
      "target": "devsecops_root_p8_t5_s2_d1"
    },
    {
      "source": "devsecops_root_p8_t5_s2",
      "target": "devsecops_root_p8_t5_s2_d2"
    },
    {
      "source": "devsecops_root_p8_t5",
      "target": "devsecops_root_p8_t5_s3"
    },
    {
      "source": "devsecops_root_p8_t5_s3",
      "target": "devsecops_root_p8_t5_s3_d1"
    },
    {
      "source": "devsecops_root_p8_t5_s3",
      "target": "devsecops_root_p8_t5_s3_d2"
    },
    {
      "source": "devsecops_root_p8_t5",
      "target": "devsecops_root_p8_t5_s4"
    },
    {
      "source": "devsecops_root_p8_t5_s4",
      "target": "devsecops_root_p8_t5_s4_d1"
    },
    {
      "source": "devsecops_root_p8_t5_s4",
      "target": "devsecops_root_p8_t5_s4_d2"
    },
    {
      "source": "devsecops_root_p8_t5",
      "target": "devsecops_root_p8_t5_s5"
    },
    {
      "source": "devsecops_root_p8_t5_s5",
      "target": "devsecops_root_p8_t5_s5_d1"
    },
    {
      "source": "devsecops_root_p8_t5_s5",
      "target": "devsecops_root_p8_t5_s5_d2"
    },
    {
      "source": "devsecops_root_p8",
      "target": "devsecops_root_p8_t6"
    },
    {
      "source": "devsecops_root_p8_t6",
      "target": "devsecops_root_p8_t6_s1"
    },
    {
      "source": "devsecops_root_p8_t6_s1",
      "target": "devsecops_root_p8_t6_s1_d1"
    },
    {
      "source": "devsecops_root_p8_t6_s1",
      "target": "devsecops_root_p8_t6_s1_d2"
    },
    {
      "source": "devsecops_root_p8_t6",
      "target": "devsecops_root_p8_t6_s2"
    },
    {
      "source": "devsecops_root_p8_t6_s2",
      "target": "devsecops_root_p8_t6_s2_d1"
    },
    {
      "source": "devsecops_root_p8_t6_s2",
      "target": "devsecops_root_p8_t6_s2_d2"
    },
    {
      "source": "devsecops_root_p8_t6",
      "target": "devsecops_root_p8_t6_s3"
    },
    {
      "source": "devsecops_root_p8_t6_s3",
      "target": "devsecops_root_p8_t6_s3_d1"
    },
    {
      "source": "devsecops_root_p8_t6_s3",
      "target": "devsecops_root_p8_t6_s3_d2"
    },
    {
      "source": "devsecops_root_p8_t6",
      "target": "devsecops_root_p8_t6_s4"
    },
    {
      "source": "devsecops_root_p8_t6_s4",
      "target": "devsecops_root_p8_t6_s4_d1"
    },
    {
      "source": "devsecops_root_p8_t6_s4",
      "target": "devsecops_root_p8_t6_s4_d2"
    },
    {
      "source": "devsecops_root_p8_t6",
      "target": "devsecops_root_p8_t6_s5"
    },
    {
      "source": "devsecops_root_p8_t6_s5",
      "target": "devsecops_root_p8_t6_s5_d1"
    },
    {
      "source": "devsecops_root_p8_t6_s5",
      "target": "devsecops_root_p8_t6_s5_d2"
    }
  ]
};
