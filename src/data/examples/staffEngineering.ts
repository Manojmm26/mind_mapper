import { MindMapData } from "../../services/llmService";

export const STAFF_ENGINEERING_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "staff_root",
      "label": "Staff & Principal Software Engineering Leadership",
      "description": "Rigorous first-principles blueprint of multi-year technical vision, RFC/ADR architecture decisions, technical debt quantification, build vs buy frameworks, Strangler Fig migrations, and DORA velocity metrics.",
      "type": "topic"
    },
    {
      "id": "staff_root_p1",
      "label": "System Architecture & Technical Vision",
      "description": "Multi-year technical roadmaps, Architecture Decision Records (ADR), technical debt quantification, and architectural steering.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1",
      "label": "Multi-Year Technical Roadmap Architecture",
      "description": "Developing 2-5 year architectural visions aligned with long-term business strategy.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s1",
      "label": "Current State vs Target State Gap Analysis",
      "description": "Auditing existing system architecture to identify scaling bottlenecks and technical constraints.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s1_d1",
      "label": "Identifying System Scalability Ceilings",
      "description": "Pinpointing throughput limits in current database schemas, network topologies, and service boundaries.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s1_d2",
      "label": "Defining Target Horizon Architecture",
      "description": "Designing target state architectures capable of supporting 10x-100x business growth.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s2",
      "label": "Phase Transition Migration Milestones",
      "description": "Decomposing multi-year architectural transformations into incremental risk-managed phases.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s2_d1",
      "label": "Quarterly Reversible Milestones",
      "description": "Structuring architectural phases to deliver business value every 3-6 months.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s2_d2",
      "label": "De-risking Core Infrastructure Upgrades",
      "description": "Validating new architectural components under production load before full cutover.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s3",
      "label": "Aligning Technical Vision with Business Strategy",
      "description": "Translating corporate business goals into concrete engineering imperatives.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s3_d1",
      "label": "Business Metric Mapping (ARR, CAC, Retention)",
      "description": "Demonstrating how technical architectural improvements directly drive key business outcomes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s3_d2",
      "label": "Executive Stakeholder Buy-In",
      "description": "Securing executive alignment for long-term technical investments.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s4",
      "label": "Architectural Steering Committee Governance",
      "description": "Establishing cross-team architectural review bodies to maintain technical coherence.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s4_d1",
      "label": "Weekly Architecture Review Board Meetings",
      "description": "Evaluating high-impact design proposals across organizational boundaries.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s4_d2",
      "label": "Preventing Fragmented Technology Stacks",
      "description": "Standardizing core frameworks, databases, and languages across teams.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s5",
      "label": "Communicating Architecture via Visual Diagrams (C4 Model)",
      "description": "Utilizing standardized C4 diagrams (Context, Container, Component, Code) to document systems.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s5_d1",
      "label": "Level 1 Context & Level 2 Container Diagrams",
      "description": "Rendering high-level system boundaries for executive and engineering audiences.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t1_s5_d2",
      "label": "Living Architecture Documentation",
      "description": "Maintaining version-controlled architectural diagrams alongside codebase repos.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2",
      "label": "Architecture Decision Records (ADR) & RFCs",
      "description": "Formalizing architectural decision-making processes through RFCs and version-controlled ADRs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s1",
      "label": "ADR Document Structure & Lifecycle",
      "description": "Standardized markdown template capturing Context, Decision, and Consequences.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s1_d1",
      "label": "ADR Status States (Proposed, Accepted, Rejected, Superceded)",
      "description": "Tracking decision lifecycles in Git repository docs/adr directories.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s1_d2",
      "label": "Explicit Trade-Off & Consequences Logging",
      "description": "Documenting negative trade-offs and liabilities accepted by architectural decisions.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s2",
      "label": "RFC-2119 Keyword Standards (MUST, SHOULD, MAY)",
      "description": "Enforcing precise IETF RFC language standards in technical specification documents.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s2_d1",
      "label": "Un-Ambiguous Requirement Definitions",
      "description": "Eliminating ambiguity in architectural requirements using MUST, SHOULD, and MAY keywords.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s2_d2",
      "label": "Clear Compliance Test Criteria",
      "description": "Providing unambiguous criteria for verifying architectural compliance.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s3",
      "label": "RFC Review & Consensus Gathering Process",
      "description": "Orchestrating asynchronous comment periods to collect cross-team feedback.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s3_d1",
      "label": "Time-Bounded Comment Windows (2-3 Weeks)",
      "description": "Setting clear deadlines for team feedback to prevent decision paralysis.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s3_d2",
      "label": "Resolving Architectural Debates Asynchronously",
      "description": "Addressing technical objections constructively in written comment threads.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s4",
      "label": "Superceding & Retiring Outdated ADRs",
      "description": "Updating historical ADR records as system requirements and technologies evolve.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s4_d1",
      "label": "Immutable Decision History Preservation",
      "description": "Marking old ADRs as Superceded while linking directly to new replacement ADRs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s4_d2",
      "label": "Maintaining Historical Context Traceability",
      "description": "Preserving institutional memory explaining why legacy systems were built.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s5",
      "label": "Measuring ADR Adoption & Compliance",
      "description": "Auditing codebase repositories to verify compliance with accepted ADR standards.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s5_d1",
      "label": "Automated Linter & Static Analysis Checks",
      "description": "Enforcing architectural rules using custom static analysis rules in CI.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t2_s5_d2",
      "label": "Periodic Architectural Spot Audits",
      "description": "Reviewing pull requests to ensure adherence to established ADR guidelines.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3",
      "label": "Technical Debt Quantification & Remediation",
      "description": "Measuring, categorizing, and systematically paying down technical debt.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s1",
      "label": "Technical Debt Categorization (Ward Cunningham Quadrants)",
      "description": "Classifying technical debt across Deliberate vs Inadvertent and Reckless vs Prudent axes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s1_d1",
      "label": "Prudent Deliberate Debt (Strategic Speed Traded for Debt)",
      "description": "Taking on intentional short-term debt to hit critical market deadlines.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s1_d2",
      "label": "Reckless Inadvertent Debt (Ignorance & Poor Standards)",
      "description": "Identifying low-quality code resulting from lack of engineering standards.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s2",
      "label": "Quantifying Interest Costs of Technical Debt",
      "description": "Calculating ongoing operational costs incurred by un-remediated technical debt.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s2_d1",
      "label": "Developer Velocity Friction Drag",
      "description": "Measuring extra hours required to ship features in high-debt codebases.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s2_d2",
      "label": "Incident Frequency & On-Call Burden Metrics",
      "description": "Correlating technical debt directly to production outages and on-call alerts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s3",
      "label": "Dedicated Technical Debt Budgeting (20% Rule)",
      "description": "Allocating fixed percentage of engineering bandwidth to technical debt remediation.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s3_d1",
      "label": "20% Capacity Allocation per Sprint",
      "description": "Reserving 20% of every sprint for refactoring, dependency updates, and test fixes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s3_d2",
      "label": "Product & Engineering Alignment on Debt Paydown",
      "description": "Securing product manager agreement to treat debt paydown as core backlog items.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s4",
      "label": "Technical Debt Backlog Prioritization Matrix",
      "description": "Ranking technical debt items by business impact vs remediation effort.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s4_d1",
      "label": "High-Impact Low-Effort Quick Wins",
      "description": "Fixing high-friction technical debt items during dedicated cleanup weeks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s4_d2",
      "label": "Architectural Refactoring Initiatives",
      "description": "Planning major debt remediation projects as formal multi-sprint epics.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s5",
      "label": "Static Code Analysis & Code Health Metrics",
      "description": "Utilizing SonarQube and Codeclimate to track technical debt trends over time.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s5_d1",
      "label": "Cyclomatic Complexity & Duplication Ratings",
      "description": "Monitoring code complexity metrics to prevent high-risk code additions.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t3_s5_d2",
      "label": "Automated Quality Gate Enforcement",
      "description": "Blocking PR merges if technical debt ratios exceed established thresholds.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4",
      "label": "Domain-Driven Design (DDD) & Bounded Contexts",
      "description": "Structuring complex software domains using Ubiquitous Language and Bounded Contexts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s1",
      "label": "Ubiquitous Language Definition",
      "description": "Establishing unified domain terminology shared by business experts and software engineers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s1_d1",
      "label": "Eliminating Mis-aligned Domain Terms",
      "description": "Ensuring code variable names match business domain terminology precisely.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s1_d2",
      "label": "Domain Glossary Maintenance",
      "description": "Documenting core domain terms in team knowledge repositories.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s2",
      "label": "Bounded Context Identification & Boundaries",
      "description": "Partitioning enterprise domain models into explicit, self-contained bounded contexts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s2_d1",
      "label": "Explicit Context Boundary Isolation",
      "description": "Preventing single domain models from spanning multiple functional domains.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s2_d2",
      "label": "Context Map Relationship Diagramming",
      "description": "Mapping relationships between bounded contexts (Shared Kernel, Customer-Supplier, Anti-Corruption Layer).",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s3",
      "label": "Anti-Corruption Layer (ACL) Pattern",
      "description": "Building translation layers to prevent legacy domain models from corrupting new domain designs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s3_d1",
      "label": "Translating Legacy Data Schemas",
      "description": "Converting legacy data formats into clean domain entity objects.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s3_d2",
      "label": "Insulating Microservices from Upstream Changes",
      "description": "Protecting new microservices from API modifications in legacy monoliths.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s4",
      "label": "Aggregates, Entities & Value Objects",
      "description": "Structuring internal object models within bounded contexts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s4_d1",
      "label": "Aggregate Root Boundary Enforcement",
      "description": "Enforcing transactional consistency boundaries through single Aggregate Roots.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s4_d2",
      "label": "Immutable Value Objects (Money, Email, Address)",
      "description": "Designing immutable value objects defined by attributes rather than identity.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s5",
      "label": "Domain Events & Event-Driven Decoupling",
      "description": "Emitting domain events to notify adjacent bounded contexts of state changes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s5_d1",
      "label": "Publishing Immutable Domain Events",
      "description": "Emitting events (e.g. OrderPlaced, UserRegistered) across message buses.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t4_s5_d2",
      "label": "Asynchronous Microservice Decoupling",
      "description": "Decoupling services by consuming domain events asynchronously.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5",
      "label": "System Architecture & Technical Vision Topic 5",
      "description": "Detailed first-principles mechanics for System Architecture & Technical Vision topic 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s1",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for System Architecture & Technical Vision Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s1_d1",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s1_d2",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s2",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for System Architecture & Technical Vision Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s2_d1",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s2_d2",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s3",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for System Architecture & Technical Vision Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s3_d1",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s3_d2",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s4",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for System Architecture & Technical Vision Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s4_d1",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s4_d2",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s5",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for System Architecture & Technical Vision Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s5_d1",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t5_s5_d2",
      "label": "System Architecture & Technical Vision Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6",
      "label": "System Architecture & Technical Vision Topic 6",
      "description": "Detailed first-principles mechanics for System Architecture & Technical Vision topic 6.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s1",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for System Architecture & Technical Vision Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s1_d1",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s1_d2",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s2",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for System Architecture & Technical Vision Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s2_d1",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s2_d2",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s3",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for System Architecture & Technical Vision Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s3_d1",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s3_d2",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s4",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for System Architecture & Technical Vision Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s4_d1",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s4_d2",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s5",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for System Architecture & Technical Vision Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s5_d1",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p1_t6_s5_d2",
      "label": "System Architecture & Technical Vision Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for System Architecture & Technical Vision Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2",
      "label": "Cross-Organizational Alignment & Execution",
      "description": "Executive communication, managing up, cross-team alignment, and engineering strategy buy-in.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1",
      "label": "Executive Communication & Business Case Framing",
      "description": "Communicating complex technical initiatives to non-technical executives.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s1",
      "label": "Translating Technical Risk to Financial Risk",
      "description": "Expressing architectural liabilities in terms of dollar revenue risk and downtime costs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s1_d1",
      "label": "Quantifying Outage Cost Per Hour",
      "description": "Calculating business revenue losses incurred by system outages.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s1_d2",
      "label": "Risk Probability & Exposure Modeling",
      "description": "Presenting technical risks as financial exposure metrics to executive boards.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s2",
      "label": "BLUF (Bottom Line Up Front) Executive Briefings",
      "description": "Structuring communications to present key decisions and recommendations immediately.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s2_d1",
      "label": "Concise Executive Summaries",
      "description": "Delivering core recommendations in first 30 seconds of presentations.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s2_d2",
      "label": "Supporting Appendix Data Reservation",
      "description": "Reserving deep technical data for Q&A and appendix sections.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s3",
      "label": "Return on Investment (ROI) Business Proposals",
      "description": "Building formal business cases for major infrastructure investments.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s3_d1",
      "label": "Cost-Benefit Analysis Models",
      "description": "Comparing infrastructure costs against projected efficiency gains.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s3_d2",
      "label": "Payback Period & Net Present Value (NPV) Projections",
      "description": "Presenting financial metrics required for CFO capital allocation approvals.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s4",
      "label": "Managing Executive Expectation Windows",
      "description": "Setting realistic delivery timelines for complex architectural transformations.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s4_d1",
      "label": "Under-Promising and Over-Delivering Cadence",
      "description": "Building conservative buffer margins into executive delivery roadmaps.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s4_d2",
      "label": "Proactive Early Bad News Communication",
      "description": "Notifying executives immediately when project risks threaten target dates.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s5",
      "label": "Executive Sponsor Engagement Protocols",
      "description": "Securing dedicated executive sponsors to champion major engineering initiatives.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s5_d1",
      "label": "Bi-Weekly Executive Sponsor Updates",
      "description": "Maintaining regular check-ins with executive champions to unblock organizational obstacles.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t1_s5_d2",
      "label": "Leveraging Executive Authority for Cross-Team Alignment",
      "description": "Utilizing sponsor authority to resolve cross-departmental priority conflicts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2",
      "label": "Cross-Team Alignment & Matrix Leadership",
      "description": "Leading engineering initiatives across autonomous feature teams without direct line management authority.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s1",
      "label": "Leading Through Influence vs Authority",
      "description": "Building consensus and driving execution without reporting-line control.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s1_d1",
      "label": "Building Trust Across Engineering Managers",
      "description": "Partnering with EMs to align engineering priorities with team goals.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s1_d2",
      "label": "Persuasive Technical Demonstration",
      "description": "Winning technical arguments through working prototypes and empirical data.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s2",
      "label": "Working Group & Tiger Team Assembly",
      "description": "Forming temporary cross-functional task forces to solve high-priority technical challenges.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s2_d1",
      "label": "Clear Tiger Team Charters & Scope",
      "description": "Defining explicit time-bounded goals for cross-team task forces.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s2_d2",
      "label": "Dedicated Bandwidth Allocation Guarantees",
      "description": "Securing committed engineering hours from participating team managers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s3",
      "label": "Resolving Cross-Team Architectural Conflicts",
      "description": "Mediating technical disagreements between teams with competing priorities.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s3_d1",
      "label": "First-Principles Technical Evaluation",
      "description": "Evaluating conflicting proposals against objective architectural principles.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s3_d2",
      "label": "Steel-Manning Opposing Technical Arguments",
      "description": "Demonstrating deep understanding of alternative viewpoints before deciding.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s4",
      "label": "Establishing Cross-Team Technical Standards (Guilds / Communities of Practice)",
      "description": "Creating Communities of Practice to foster knowledge sharing across organizational boundaries.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s4_d1",
      "label": "Frontend/Backend Guild Leadership",
      "description": "Organizing monthly guild meetings to share best practices and tools.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s4_d2",
      "label": "Cross-Team Code Review Swaps",
      "description": "Participating in cross-team code reviews to maintain consistency.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s5",
      "label": "Managing Inter-Team Dependency Maps",
      "description": "Mapping and tracking technical dependencies across team delivery pipelines.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s5_d1",
      "label": "Visual Dependency Matrix Graphs",
      "description": "Identifying critical path dependencies blocking major releases.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t2_s5_d2",
      "label": "Decoupling Inter-Team Dependencies via APIs",
      "description": "Replacing synchronous team dependencies with versioned API contracts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3",
      "label": "Engineering Strategy & OKR Integration",
      "description": "Integrating technical strategy into company Objectives and Key Results (OKRs).",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s1",
      "label": "Translating Technical Goals into OKR Format",
      "description": "Structuring architectural initiatives as measurable key results.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s1_d1",
      "label": "Measurable Key Result Definitions (e.g. Reduce P99 Latency from 500ms to 100ms)",
      "description": "Defining quantitative metrics to evaluate technical success.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s1_d2",
      "label": "Avoiding Activity-Based Key Results",
      "description": "Focusing key results on business and performance outcomes rather than task completion.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s2",
      "label": "Joint Engineering and Product OKR Creation",
      "description": "Co-authoring quarterly OKRs with product leadership to balance features and infrastructure.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s2_d1",
      "label": "50/50 Feature vs Infrastructure Balance",
      "description": "Ensuring technical debt and platform items are embedded in team OKRs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s2_d2",
      "label": "Shared Accountability for System Performance",
      "description": "Holding product and engineering leaders jointly accountable for uptime and speed.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s3",
      "label": "Quarterly OKR Scoring & Retrospectives",
      "description": "Evaluating OKR attainment scores and refining future goal setting.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s3_d1",
      "label": "Targeting 70% OKR Attainment Stretch Goals",
      "description": "Setting ambitious stretch targets where 70% achievement represents success.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s3_d2",
      "label": "Analyzing Root Causes of OKR Misses",
      "description": "Conducting retrospectives when critical engineering OKRs are missed.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s4",
      "label": "Cascading Strategic Technical Initiatives",
      "description": "Cascading high-level engineering strategy down to team-level backlog execution.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s4_d1",
      "label": "Mapping Team Epics to Strategic Pillars",
      "description": "Ensuring every sprint epic aligns with strategic technical pillars.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s4_d2",
      "label": "Maintaining Strategic Alignment Across Growth Stages",
      "description": "Updating technical strategy as company scale expands.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s5",
      "label": "Communicating Engineering Strategy Broader Organization",
      "description": "Publishing and presenting engineering strategy across the company.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s5_d1",
      "label": "All-Hands Technical Strategy Keynotes",
      "description": "Presenting engineering strategy at company all-hands meetings.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t3_s5_d2",
      "label": "Publishing Internal Engineering Strategy Portals",
      "description": "Maintaining accessible documentation detailing technical priorities.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4",
      "label": "Managing Up & Strategic Alignment",
      "description": "Building effective working relationships with engineering executives (VPs, CTO).",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s1",
      "label": "Proactive Information Flow & No-Surprises Rule",
      "description": "Keeping executive leaders informed of critical technical risks and progress.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s1_d1",
      "label": "Weekly Executive Briefing Emails",
      "description": "Sending concise weekly updates highlighting wins, risks, and blockers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s1_d2",
      "label": "Immediate Escalation of Critical Risks",
      "description": "Alerting CTOs instantly when major security or outage risks emerge.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s2",
      "label": "Understanding Executive Incentives & Priorities",
      "description": "Aligning technical proposals with current executive goals and pressures.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s2_d1",
      "label": "Mapping CTO & VP Engineering Success Metrics",
      "description": "Framing engineering proposals to help executives achieve their goals.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s2_d2",
      "label": "Adapting to Shifting Corporate Priorities",
      "description": "Re-aligning technical focus when company strategy pivots.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s3",
      "label": "Serving as a Trusted Technical Advisor",
      "description": "Providing objective, candid technical advice to executive decision makers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s3_d1",
      "label": "Delivering Unvarnished Technical Truths",
      "description": "Providing honest technical assessments even when inconvenient.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s3_d2",
      "label": "Evaluating Strategic M&A and Vendor Choices",
      "description": "Assisting executives in evaluating acquisition targets and vendor technology.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s4",
      "label": "Building Executive Alignment Prior to Big Meetings",
      "description": "Pre-socializing major architectural proposals before formal decision meetings.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s4_d1",
      "label": "1-on-1 Pre-Meeting Alignment Calls",
      "description": "Gathering feedback and addressing concerns individually prior to group reviews.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s4_d2",
      "label": "Ensuring Frictionless Formal Approval Meetings",
      "description": "Securing consensus ahead of time to execute efficient approval meetings.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s5",
      "label": "Managing Technical Expectations During Crises",
      "description": "Guiding executive communication during severe production incidents.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s5_d1",
      "label": "Providing Realistic Remediation Timelines",
      "description": "Resisting pressure to give unrealistic recovery estimates during outages.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t4_s5_d2",
      "label": "Focusing Incident Updates on Business Impact",
      "description": "Framing status updates around customer impact and recovery steps.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5",
      "label": "Cross-Organizational Alignment & Execution Topic 5",
      "description": "Detailed first-principles mechanics for Cross-Organizational Alignment & Execution topic 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s1",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Cross-Organizational Alignment & Execution Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s1_d1",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s1_d2",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s2",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Cross-Organizational Alignment & Execution Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s2_d1",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s2_d2",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s3",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Cross-Organizational Alignment & Execution Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s3_d1",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s3_d2",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s4",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Cross-Organizational Alignment & Execution Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s4_d1",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s4_d2",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s5",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Cross-Organizational Alignment & Execution Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s5_d1",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t5_s5_d2",
      "label": "Cross-Organizational Alignment & Execution Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6",
      "label": "Cross-Organizational Alignment & Execution Topic 6",
      "description": "Detailed first-principles mechanics for Cross-Organizational Alignment & Execution topic 6.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s1",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Cross-Organizational Alignment & Execution Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s1_d1",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s1_d2",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s2",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Cross-Organizational Alignment & Execution Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s2_d1",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s2_d2",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s3",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Cross-Organizational Alignment & Execution Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s3_d1",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s3_d2",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s4",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Cross-Organizational Alignment & Execution Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s4_d1",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s4_d2",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s5",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Cross-Organizational Alignment & Execution Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s5_d1",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p2_t6_s5_d2",
      "label": "Cross-Organizational Alignment & Execution Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cross-Organizational Alignment & Execution Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3",
      "label": "Engineering Culture & Technical Standards",
      "description": "Code review guidelines, blameless post-mortems, mentorship frameworks, and engineering career ladders.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1",
      "label": "Engineering Code Review Standards & Guidelines",
      "description": "Establishing high-quality code review practices to maintain codebase health.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s1",
      "label": "Code Review Etiquette & Constructive Feedback",
      "description": "Guidelines for delivering respectful, actionable, and educational PR feedback.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s1_d1",
      "label": "Distinguishing Nitpicks from Blocking Comments",
      "description": "Prefixing non-blocking comments with [Nit] to unblock PR merges.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s1_d2",
      "label": "Focusing Reviews on Architecture and Correctness",
      "description": "Prioritizing architectural design, security, and correctness over formatting.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s2",
      "label": "Pull Request Size Minimization (< 400 Lines)",
      "description": "Encouraging small, incremental PRs to improve review thoroughness and speed.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s2_d1",
      "label": "Smaller PR Review Speed Advantage",
      "description": "Demonstrating that PRs under 200 lines are reviewed 2x faster with higher bug detection.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s2_d2",
      "label": "Feature Flag Decoupling Strategy",
      "description": "Merging incomplete feature code behind feature flags to keep PRs small.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s3",
      "label": "Automating Code Style & Formatting via CI",
      "description": "Delegating code formatting checks entirely to automated linters and formatters.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s3_d1",
      "label": "Zero Human Discussion on Syntax Style",
      "description": "Eliminating PR debate over formatting using Prettier, ESLint, and Black in CI.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s3_d2",
      "label": "Pre-Commit Git Hooks Setup",
      "description": "Catching syntax and formatting errors locally before pushing branches.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s4",
      "label": "Code Review SLA Metrics & Reviewer Rotation",
      "description": "Tracking PR review latency to prevent developer velocity bottlenecks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s4_d1",
      "label": "Targeting Sub-4-Hour Initial Review Time",
      "description": "Setting team SLAs for completing initial PR reviews.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s4_d2",
      "label": "Automated PR Load Balancing (CODEOWNERS)",
      "description": "Distributing review requests evenly across team members using CODEOWNERS files.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s5",
      "label": "Security & Performance Checklist Audits",
      "description": "Embedding mandatory security and performance checks into PR templates.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s5_d1",
      "label": "PR Template Security Checklists",
      "description": "Verifying SQL parameterization, input sanitization, and auth checks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t1_s5_d2",
      "label": "Database Migration Safety Audits",
      "description": "Verifying non-blocking database migrations before merging backend PRs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2",
      "label": "Blameless Post-Mortem & Incident Culture",
      "description": "Fostering a psychological safety culture focused on system learning rather than human error.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s1",
      "label": "Blameless Post-Mortem Philosophy (John Allspaw)",
      "description": "Assuming human error is a symptom of systemic failure, not the root cause.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s1_d1",
      "label": "Eliminating Individual Blame Language",
      "description": "Focusing investigations on why system safeguards allowed errors to occur.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s1_d2",
      "label": "Fostering Psychological Safety for Incident Reporting",
      "description": "Encouraging engineers to report incidents promptly without fear of retribution.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s2",
      "label": "5 Whys Root Cause Analysis Methodology",
      "description": "Iteratively asking \"Why\" to trace incidents back to underlying systemic weaknesses.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s2_d1",
      "label": "Tracing Beyond Surface Human Error",
      "description": "Continuing analysis past \"engineer ran wrong command\" to underlying tool flaws.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s2_d2",
      "label": "Identifying Process and Safeguard Deficiencies",
      "description": "Discovering missing CI checks, staging tests, or monitoring alerts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s3",
      "label": "Action Item Tracking & Prevention Commitment",
      "description": "Generating SMART (Specific, Measurable, Achievable, Relevant, Time-bound) preventive action items.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s3_d1",
      "label": "High-Priority Backlog Scheduling",
      "description": "Treating post-mortem action items as top-priority sprint deliverables.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s3_d2",
      "label": "Preventing Recurrent Incident Patterns",
      "description": "Verifying system safeguards to ensure identical incidents cannot reoccur.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s4",
      "label": "Company-Wide Incident Learning Distribution",
      "description": "Publishing and discussing post-mortem reports across all engineering teams.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s4_d1",
      "label": "Monthly Engineering Learning Reviews",
      "description": "Presenting key post-mortem takeaways in company-wide engineering forums.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s4_d2",
      "label": "Public Incident Post-Mortem Publishing",
      "description": "Publishing transparent post-mortems for major customer-impacting outages.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s5",
      "label": "Chaos Engineering & GameDay Simulation Drills",
      "description": "Proactively injecting failures into systems to test resilience and team response.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s5_d1",
      "label": "Simulating Instance and Network Failures (Chaos Mesh)",
      "description": "Testing automated failovers by killing instances in staging environments.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t2_s5_d2",
      "label": "GameDay Incident Response Training",
      "description": "Training engineers on incident commander roles through simulated outages.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3",
      "label": "Mentorship, Sponsorship & Talent Growth",
      "description": "Developing technical talent through structured mentorship, sponsorship, and career guidance.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s1",
      "label": "Mentorship vs Sponsorship Distinction",
      "description": "Distinguishing skill guidance (mentorship) from active career opportunity creation (sponsorship).",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s1_d1",
      "label": "Mentorship (Private Advice and Skill Development)",
      "description": "Guiding junior engineers on technical design, debugging, and career choices.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s1_d2",
      "label": "Sponsorship (Public Advocacy and Opportunity Assignment)",
      "description": "Advocating for protégés to lead high-visibility technical initiatives.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s2",
      "label": "Structured 1-on-1 Technical Coaching Cadence",
      "description": "Conducting regular coaching sessions focused on long-term career progression.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s2_d1",
      "label": "Long-Term Career Goal Alignment",
      "description": "Discussing multi-year technical growth aspirations beyond immediate tasks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s2_d2",
      "label": "Systematic Skill Gap Identification",
      "description": "Identifying technical areas requiring development to reach next career tiers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s3",
      "label": "Technical Design Workshop Series",
      "description": "Hosting architecture review sessions to teach system design principles.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s3_d1",
      "label": "Interactive Mock System Design Audits",
      "description": "Walking through real-world system designs with mid-level engineers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s3_d2",
      "label": "De-constructing Complex Production Outages",
      "description": "Analyzing past incidents to teach resilience principles.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s4",
      "label": "Fostering Under-Represented Engineering Talent",
      "description": "Actively sponsoring and mentoring under-represented engineers to build diverse technical leadership.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s4_d1",
      "label": "Inclusive Sponsorship Programs",
      "description": "Ensuring high-impact project opportunities are distributed equitably.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s4_d2",
      "label": "Creating Inclusive Technical Discussion Spaces",
      "description": "Ensuring all team members are heard during design reviews.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s5",
      "label": "Delegating High-Impact Architecture Ownership",
      "description": "Step-by-step delegation of major architectural components to growing senior engineers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s5_d1",
      "label": "Gradual Responsibility Offloading",
      "description": "Guiding engineers as they draft initial RFCs before stepping back.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t3_s5_d2",
      "label": "Providing Safety Nets for Delegated Projects",
      "description": "Reviewing work periodically while allowing engineers to lead independently.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4",
      "label": "Engineering Career Ladders & Dual Track Paths",
      "description": "Structuring individual contributor (IC) career paths parallel to management tracks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s1",
      "label": "Dual-Ladder Progression (Management vs IC Tracks)",
      "description": "Providing parallel compensation and title progression for technical ICs and managers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s1_d1",
      "label": "Staff / Principal / Fellow IC Hierarchy",
      "description": "Establishing senior IC titles matching Director and VP management levels.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s1_d2",
      "label": "Eliminating Forced Transition to Management",
      "description": "Allowing top engineers to advance without leaving technical work.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s2",
      "label": "Defining Explicit Staff Engineering Rubrics",
      "description": "Establishing clear competency criteria for reaching Staff Engineer levels.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s2_d1",
      "label": "Four Staff Archetypes (Will Larson: Tech Lead, Architect, Solver, Right Hand)",
      "description": "Defining staff roles by technical leadership focus areas.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s2_d2",
      "label": "Scope Expectation Expansion (Team -> Multi-Team -> Org-Wide)",
      "description": "Evaluating engineers on organizational impact rather than code output.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s3",
      "label": "Calibrated Promotion Committees & Calibration Reviews",
      "description": "Participating in promotion committees to maintain consistent standards across orgs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s3_d1",
      "label": "Evidence-Based Promotion Packets",
      "description": "Reviewing peer feedback and project artifacts during promotion reviews.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s3_d2",
      "label": "Mitigating Bias in Promotion Calibration",
      "description": "Ensuring promotion standards are applied consistently across all teams.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s4",
      "label": "Continuous Performance Feedback Loops",
      "description": "Delivering real-time constructive feedback rather than waiting for annual reviews.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s4_d1",
      "label": "Immediate Post-Project Feedback",
      "description": "Providing specific feedback right after major project completions.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s4_d2",
      "label": "360-Degree Peer Feedback Reviews",
      "description": "Gathering multi-directional feedback from peers, junior engineers, and managers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s5",
      "label": "Engineering Retention & Growth Pathways",
      "description": "Creating internal mobility opportunities to retain top technical talent.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s5_d1",
      "label": "Internal Team Rotation Programs",
      "description": "Allowing engineers to rotate to new teams to gain fresh technical exposure.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t4_s5_d2",
      "label": "Sabbaticals and Technical Exploration Time",
      "description": "Granting time for senior ICs to prototype forward-looking technologies.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5",
      "label": "Engineering Culture & Technical Standards Topic 5",
      "description": "Detailed first-principles mechanics for Engineering Culture & Technical Standards topic 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s1",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Culture & Technical Standards Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s1_d1",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s1_d2",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s2",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Culture & Technical Standards Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s2_d1",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s2_d2",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s3",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Culture & Technical Standards Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s3_d1",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s3_d2",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s4",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Culture & Technical Standards Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s4_d1",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s4_d2",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s5",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Culture & Technical Standards Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s5_d1",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t5_s5_d2",
      "label": "Engineering Culture & Technical Standards Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6",
      "label": "Engineering Culture & Technical Standards Topic 6",
      "description": "Detailed first-principles mechanics for Engineering Culture & Technical Standards topic 6.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s1",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Culture & Technical Standards Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s1_d1",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s1_d2",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s2",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Culture & Technical Standards Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s2_d1",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s2_d2",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s3",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Culture & Technical Standards Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s3_d1",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s3_d2",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s4",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Culture & Technical Standards Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s4_d1",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s4_d2",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s5",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Culture & Technical Standards Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s5_d1",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p3_t6_s5_d2",
      "label": "Engineering Culture & Technical Standards Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Culture & Technical Standards Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4",
      "label": "Strategic Technology Selection & Governance",
      "description": "Build vs Buy decision frameworks, vendor evaluation matrices, and technology deprecation playbooks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1",
      "label": "Build vs Buy Decision Frameworks",
      "description": "Rigorously evaluating whether to construct custom software internally or purchase commercial vendors.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s1",
      "label": "Core vs Commodity Capability Matrix",
      "description": "Building custom software strictly for core competitive advantages while buying commodity infrastructure.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s1_d1",
      "label": "Core Competency Focus (Unique Business Value)",
      "description": "Investing internal engineering on proprietary business logic and algorithms.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s1_d2",
      "label": "Commodity Offloading (Auth, Payments, Logging)",
      "description": "Purchasing commercial SaaS for standard non-differentiating utilities (Stripe, Auth0, Datadog).",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s2",
      "label": "Total Cost of Ownership (TCO) Calculations",
      "description": "Factoring ongoing maintenance, operational overhead, and opportunity costs into build decisions.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s2_d1",
      "label": "Fully Burdened Engineering Maintenance Costs",
      "description": "Accounting for long-term engineering salaries needed to maintain custom code.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s2_d2",
      "label": "Opportunity Cost of Diverted Engineering Resources",
      "description": "Calculating business value lost by delaying core product features.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s3",
      "label": "Vendor Lock-In Risk Assessment",
      "description": "Evaluating migration difficulties and costs if commercial vendors raise prices or shut down.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s3_d1",
      "label": "Standardized Abstraction Layer Insulation",
      "description": "Wrapping vendor APIs in internal interfaces to enable future vendor swaps.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s3_d2",
      "label": "Data Export & Portability Audits",
      "description": "Verifying vendor support for bulk data exports without proprietary formatting.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s4",
      "label": "Open Source Software (OSS) vs Commercial Vendor Evaluation",
      "description": "Evaluating self-hosted open source solutions against managed cloud vendor services.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s4_d1",
      "label": "Operational Overhead of Self-Hosting OSS",
      "description": "Calculating headcount costs required to manage self-hosted Kafka or Kubernetes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s4_d2",
      "label": "Managed Cloud Service Efficiency Gains",
      "description": "Selecting managed services (AWS MSK, Confluent) to minimize operational burdens.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s5",
      "label": "Proof-of-Concept (POC) Evaluation Frameworks",
      "description": "Structuring time-boxed technical evaluations of candidate vendor solutions.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s5_d1",
      "label": "Pre-Defined Success Criteria Matrices",
      "description": "Establishing quantitative performance, cost, and API criteria before starting POCs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t1_s5_d2",
      "label": "Time-Boxed 2-Week Vendor Trials",
      "description": "Limiting POC durations to prevent drawn-out vendor evaluations.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2",
      "label": "Vendor Evaluation & Contract Negotiation",
      "description": "Assessing commercial software vendors and partnering with procurement on technical terms.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s1",
      "label": "Vendor Security & Compliance Vetting",
      "description": "Evaluating vendor security postures prior to data integration.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s1_d1",
      "label": "SOC 2 Type II & ISO 27001 Report Inspection",
      "description": "Verifying independent security audit reports for vendor infrastructure.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s1_d2",
      "label": "Penetration Test & Vulnerability Remediation Audits",
      "description": "Reviewing recent third-party penetration test summaries.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s2",
      "label": "SLA Availability & Credit Penalty Negotiation",
      "description": "Ensuring commercial vendor SLAs match internal availability commitments.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s2_d1",
      "label": "99.99% Uptime Commitment Enforcement",
      "description": "Requiring 4-nines availability SLAs for mission-critical vendors.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s2_d2",
      "label": "Meaningful Financial Penalty Credits",
      "description": "Structuring SLA breach credits to incentivize vendor reliability.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s3",
      "label": "API Rate Limits & Throughput Scaling Terms",
      "description": "Negotiating API rate limits to accommodate anticipated workload bursts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s3_d1",
      "label": "Un-capped Burst Rate Allocations",
      "description": "Securing high burst limits for peak business traffic events.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s3_d2",
      "label": "Volume Discount Overage Thresholds",
      "description": "Pre-negotiating discounted rates for usage exceeding baseline tiers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s4",
      "label": "Vendor Financial Stability & Escrow Protections",
      "description": "Mitigating risks of early-stage vendor bankruptcies or acquisitions.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s4_d1",
      "label": "Source Code Escrow Provisions",
      "description": "Securing source code escrow access rights if vendors cease operations.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s4_d2",
      "label": "Assessing Vendor Runway and Funding State",
      "description": "Evaluating vendor financial health before integrating critical dependencies.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s5",
      "label": "Annual Contract Renewal & Price Cap Controls",
      "description": "Limiting annual vendor price increases in multi-year agreements.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s5_d1",
      "label": "Capping Renewal Increases (e.g. 3-5% Max Annual Rise)",
      "description": "Negotiating caps on price increases upon contract renewal.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t2_s5_d2",
      "label": "Multi-Year Fixed Price Protection",
      "description": "Locking pricing across 3-year contract terms.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3",
      "label": "Technology Radar & Deprecation Playbooks",
      "description": "Managing technology lifecycles through adoption, experimentation, and sunset phases.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s1",
      "label": "ThoughtWorks Technology Radar Framework",
      "description": "Categorizing technologies into Adopt, Trial, Assess, and Hold rings.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s1_d1",
      "label": "Adopt Ring (Standardized Production Technologies)",
      "description": "Defining officially supported frameworks for new production services.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s1_d2",
      "label": "Hold Ring (Deprecated / Prohibited Technologies)",
      "description": "Banning new deployments of sunset or security-risky technologies.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s2",
      "label": "Graceful Sunset & Deprecation Timeline Playbooks",
      "description": "Executing multi-stage deprecations of legacy frameworks and APIs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s2_d1",
      "label": "Phased Deprecation Schedules (Notice, Warning, Sunset)",
      "description": "Providing 6-12 month advance notices before disabling legacy APIs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s2_d2",
      "label": "Automated Deprecation Warning Logs",
      "description": "Emitting warning headers and log notices for clients using deprecated endpoints.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s3",
      "label": "Brownouts & Synthetic Traffic Interruption Drills",
      "description": "Intentionally introducing temporary service interruptions to discover un-migrated clients.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s3_d1",
      "label": "Scheduled 15-Minute Brownout Windows",
      "description": "Temporarily disabling deprecated APIs to force client teams to complete migrations.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s3_d2",
      "label": "Identifying Hidden Legacy Dependencies",
      "description": "Uncovering un-documented services reliant on sunset infrastructure.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s4",
      "label": "Migration Tooling & Automated Codemods",
      "description": "Building automated migration scripts to accelerate adoption of new technologies.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s4_d1",
      "label": "AST-Based Codemod Transformation Scripts (jscodeshift)",
      "description": "Rewriting legacy API usage automatically across thousands of files.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s4_d2",
      "label": "Self-Service Migration Pull Requests",
      "description": "Generating automated PRs migrating team repositories to updated libraries.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s5",
      "label": "Post-Deprecation Cleanup & Asset De-Provisioning",
      "description": "Purging deprecated code, infrastructure, and licenses after migration completion.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s5_d1",
      "label": "De-Provisioning Un-Used Cloud Resources",
      "description": "Terminating idle database instances and servers to reduce hosting costs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t3_s5_d2",
      "label": "Removing Legacy Code Paths",
      "description": "Deleting dead code paths to simplify codebase complexity.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4",
      "label": "Architecture Governance & Standard Baselines",
      "description": "Maintaining technical standards across growing engineering organizations.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s1",
      "label": "Paved Path / Golden Path Developer Experience",
      "description": "Providing pre-configured project templates and CI pipelines for standard stacks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s1_d1",
      "label": "One-Click Production Microservice Scaffolding",
      "description": "Generating production-ready services with built-in auth, logging, and CI/CD.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s1_d2",
      "label": "Incentivizing Paved Path Adoption",
      "description": "Offering automated compliance and ops support for teams using golden paths.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s2",
      "label": "Exception & Architectural Waiver Protocols",
      "description": "Formal process for requesting temporary deviations from standard paved paths.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s2_d1",
      "label": "Time-Bounded Exception Waivers (6-12 Months)",
      "description": "Granting temporary waivers requiring teams to re-align with standards by set dates.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s2_d2",
      "label": "Evaluating Non-Standard Use Cases",
      "description": "Allowing experimentation for specialized requirements un-supported by paved paths.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s3",
      "label": "Automated Architectural Compliance Auditing",
      "description": "Scanning repositories automatically to verify security and architectural standards.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s3_d1",
      "label": "Static Analysis Linting Rules",
      "description": "Blocking builds violating core architectural boundaries or un-approved packages.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s3_d2",
      "label": "Continuous Security & License Scans",
      "description": "Scanning dependencies for CVE vulnerabilities and copyleft licenses.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s4",
      "label": "Centralized Architecture Review Boards (ARB)",
      "description": "Governing major architectural additions and structural changes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s4_d1",
      "label": "Pragmatic Non-Blocking Review Cadence",
      "description": "Executing reviews efficiently to avoid becoming developer velocity bottlenecks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s4_d2",
      "label": "Standardizing Core Data Schemas and Protocols",
      "description": "Maintaining consistent API schemas (Protobuf, OpenAPI) across services.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s5",
      "label": "Feedback Loops & Evolving Paved Paths",
      "description": "Updating paved paths continuously based on developer feedback and new requirements.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s5_d1",
      "label": "Developer Experience (DevEx) Surveys",
      "description": "Measuring friction points in golden paths to guide tooling improvements.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t4_s5_d2",
      "label": "Incorporating Battle-Tested Innovations",
      "description": "Promoting successful team innovations into official paved path standards.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5",
      "label": "Strategic Technology Selection & Governance Topic 5",
      "description": "Detailed first-principles mechanics for Strategic Technology Selection & Governance topic 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s1",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Strategic Technology Selection & Governance Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s1_d1",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s1_d2",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s2",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Strategic Technology Selection & Governance Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s2_d1",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s2_d2",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s3",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Strategic Technology Selection & Governance Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s3_d1",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s3_d2",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s4",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Strategic Technology Selection & Governance Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s4_d1",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s4_d2",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s5",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Strategic Technology Selection & Governance Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s5_d1",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t5_s5_d2",
      "label": "Strategic Technology Selection & Governance Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6",
      "label": "Strategic Technology Selection & Governance Topic 6",
      "description": "Detailed first-principles mechanics for Strategic Technology Selection & Governance topic 6.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s1",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Strategic Technology Selection & Governance Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s1_d1",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s1_d2",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s2",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Strategic Technology Selection & Governance Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s2_d1",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s2_d2",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s3",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Strategic Technology Selection & Governance Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s3_d1",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s3_d2",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s4",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Strategic Technology Selection & Governance Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s4_d1",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s4_d2",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s5",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Strategic Technology Selection & Governance Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s5_d1",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p4_t6_s5_d2",
      "label": "Strategic Technology Selection & Governance Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Strategic Technology Selection & Governance Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5",
      "label": "Enterprise Risk, Security & Compliance",
      "description": "Threat modeling, disaster recovery planning, security compliance, and auditing standards.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1",
      "label": "Threat Modeling & Architectural Security Reviews",
      "description": "Identifying security vulnerabilities and attack vectors during architectural design.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s1",
      "label": "STRIDE Threat Modeling Framework",
      "description": "Categorizing threats across Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s1_d1",
      "label": "Systematic Component Attack Surface Mapping",
      "description": "Evaluating threat categories for every data flow and system boundary.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s1_d2",
      "label": "Designing Targeted Mitigation Controls",
      "description": "Implementing mTLS, input validation, and audit logging to mitigate identified threats.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s2",
      "label": "Data Flow Diagram (DFD) Security Auditing",
      "description": "Mapping data paths to identify trust boundaries and sensitive data stores.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s2_d1",
      "label": "Identifying Trust Boundary Crossings",
      "description": "Auditing data sanitization points where data crosses network boundaries.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s2_d2",
      "label": "Tagging PII & Sensitive Data Flows",
      "description": "Tracking Personally Identifiable Information (PII) paths to enforce encryption.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s3",
      "label": "Blast Radius Minimization & Zero Trust Design",
      "description": "Designing security architectures to contain potential breaches within isolated zones.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s3_d1",
      "label": "Micro-segmentation & Least Privilege Access",
      "description": "Restricting service network access strictly to required dependencies.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s3_d2",
      "label": "Zero Trust Identity Verification (mTLS / OIDC)",
      "description": "Verifying identity and authorization for every inter-service request.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s4",
      "label": "Architectural Security Review Integration in RFCs",
      "description": "Embedding dedicated security impact sections into all technical RFCs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s4_d1",
      "label": "Mandatory Security Review Sign-Offs",
      "description": "Requiring security team approval for major data schema or auth changes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s4_d2",
      "label": "Early Vulnerability Identification",
      "description": "Catching architectural security flaws before code implementation begins.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s5",
      "label": "Red Team Attack Simulation Exercises",
      "description": "Partnering with red teams to test architectural resilience against real-world attacks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s5_d1",
      "label": "Simulated Lateral Movement Attacks",
      "description": "Testing network segmentation controls against simulated internal breaches.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t1_s5_d2",
      "label": "Fixing Architectural Security Gaps",
      "description": "Remediating systemic weaknesses exposed during red team exercises.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2",
      "label": "Disaster Recovery (DR) & Business Continuity",
      "description": "Designing fault-tolerant multi-region architectures to survive catastrophic infrastructure failures.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s1",
      "label": "Recovery Point Objective (RPO) & Recovery Time Objective (RTO)",
      "description": "Defining maximum acceptable data loss (RPO) and system downtime (RTO) targets.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s1_d1",
      "label": "RPO Targets (e.g. RPO < 1 Second for Financial Data)",
      "description": "Designing synchronous data replication to meet near-zero RPO targets.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s1_d2",
      "label": "RTO Targets (e.g. RTO < 15 Minutes for Core APIs)",
      "description": "Automating multi-region failovers to meet aggressive RTO targets.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s2",
      "label": "Active-Active vs Active-Passive Multi-Region Strategies",
      "description": "Architectural patterns for multi-region database and application deployments.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s2_d1",
      "label": "Active-Active Dual Region Serving",
      "description": "Serving live production traffic simultaneously from two geographically distant regions.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s2_d2",
      "label": "Active-Passive Failover Warm Standbys",
      "description": "Replicating data continuously to passive standby regions ready for failover.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s3",
      "label": "Automated Regional Failover & DNS Routing",
      "description": "Configuring Route53 / Cloudflare DNS health checks for automatic failovers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s3_d1",
      "label": "Health Check Failure Triggers",
      "description": "Redirecting traffic automatically when primary region health checks fail.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s3_d2",
      "label": "Preventing Split-Brain Network Conditions",
      "description": "Enforcing fence mechanisms to prevent two active regions from writing simultaneously.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s4",
      "label": "Regular Disaster Recovery Drills (Chaos Testing)",
      "description": "Simulating full-region outages periodically to test failover readiness.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s4_d1",
      "label": "Quarterly GameDay Region Kill Drills",
      "description": "Simulating region failure events to test automated failover automation.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s4_d2",
      "label": "Verifying RPO/RTO Performance Metrics",
      "description": "Measuring actual data loss and downtime during simulated outage drills.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s5",
      "label": "Backup Integrity Verification & Automated Restores",
      "description": "Automating continuous database backup verification and restore testing.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s5_d1",
      "label": "Automated Daily Test Restores",
      "description": "Restoring database backups to isolated test environments automatically.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t2_s5_d2",
      "label": "Verifying Data Integrity & Consistency",
      "description": "Executing validation test suites against restored database backups.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3",
      "label": "SOC 2, ISO 27001 & Compliance Architecture",
      "description": "Structuring system architectures to comply with enterprise security standards.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s1",
      "label": "SOC 2 Type II Trust Services Criteria",
      "description": "Implementing technical controls satisfying Security, Availability, and Confidentiality criteria.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s1_d1",
      "label": "Continuous Evidence Collection Automation (Vanta / Drata)",
      "description": "Automating compliance checks via continuous monitoring integrations.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s1_d2",
      "label": "6-12 Month Audit Tracking Windows",
      "description": "Maintaining continuous compliance evidence across long audit periods.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s2",
      "label": "Role-Based Access Control (RBAC) & Least Privilege",
      "description": "Enforcing strict access controls across infrastructure and production systems.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s2_d1",
      "label": "Just-in-Time (JIT) Production Access",
      "description": "Granting temporary short-lived production access using Teleport or Boundary.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s2_d2",
      "label": "Multi-Factor Authentication (MFA) Enforcement",
      "description": "Mandating hardware security keys (WebAuthn / YubiKey) for infrastructure access.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s3",
      "label": "Immutable Audit Logging & SIEM Integration",
      "description": "Streaming all system, database, and user actions to tamper-proof audit stores.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s3_d1",
      "label": "Append-Only Write-Once Audit Logs",
      "description": "Storing audit logs in locked S3 buckets with Object Lock enabled.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s3_d2",
      "label": "Real-Time SIEM Threat Detection (Datadog / Splunk)",
      "description": "Streaming audit logs to SIEM systems for automated security threat detection.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s4",
      "label": "Data Encryption at Rest & In Transit Standards",
      "description": "Enforcing encryption across all data stores, caches, and internal networks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s4_d1",
      "label": "KMS Envelope Encryption for Data at Rest",
      "description": "Encrypting data keys using Customer Master Keys (CMKs) in cloud KMS.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s4_d2",
      "label": "Strict mTLS 1.3 for Inter-Service Communication",
      "description": "Encrypting all internal microservice network traffic.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s5",
      "label": "GDPR & CCPA Data Privacy Architecture",
      "description": "Building technical capabilities for Right to be Forgotten and Data Portability.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s5_d1",
      "label": "Automated Data Deletion Pipelines",
      "description": "Cascading deletion requests across all production databases and backups.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t3_s5_d2",
      "label": "PII Data Pseudonymization & Tokenization",
      "description": "Tokenizing sensitive user attributes to minimize GDPR compliance scope.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4",
      "label": "Supply Chain Security & Software Composition Analysis",
      "description": "Securing third-party dependencies, container images, and CI/CD pipelines.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s1",
      "label": "Software Bill of Materials (SBOM) Generation",
      "description": "Generating comprehensive inventories of all third-party software components.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s1_d1",
      "label": "CycloneDX & SPDX Format Exports",
      "description": "Exporting machine-readable SBOMs for container images and application binaries.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s1_d2",
      "label": "Continuous Dependency Tracking",
      "description": "Tracking third-party library versions across production deployments.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s2",
      "label": "Automated Dependency Vulnerability Scanning (Trivy / Snyk)",
      "description": "Scanning third-party packages for Known Common Vulnerabilities and Exposures (CVEs).",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s2_d1",
      "label": "Blocking High/Critical CVE Merges in CI",
      "description": "Failing PR builds when dependencies contain high-severity vulnerabilities.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s2_d2",
      "label": "Automated Dependency Update PRs (Dependabot)",
      "description": "Merging automated security patch updates regularly.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s3",
      "label": "Container Base Image Hardening (Distroless / Wolfi)",
      "description": "Minimizing container attack surfaces by removing OS shells and utilities.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s3_d1",
      "label": "Distroless Minimal Container Images",
      "description": "Shipping production containers containing only application binaries and runtimes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s3_d2",
      "label": "Eliminating Package Managers and Shell Access",
      "description": "Preventing attacker execution by omitting bash, curl, and package managers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s4",
      "label": "Cryptographic Image & Artifact Signing (Cosign / Sigstore)",
      "description": "Signing build artifacts cryptographically to prevent pipeline tampering.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s4_d1",
      "label": "Keyless OIDC Artifact Signing",
      "description": "Signing container images in GitHub Actions using short-lived OIDC tokens.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s4_d2",
      "label": "Kubernetes Admission Controller Verification (Kyverno)",
      "description": "Blocking deployment of un-signed or un-verified container images.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s5",
      "label": "SLSA Provenance Framework (Levels 1-4)",
      "description": "Implementing Supply Chain Levels for Software Artifacts standards to secure pipelines.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s5_d1",
      "label": "Hermetic & Reproducible Build Pipelines",
      "description": "Executing builds in isolated environments preventing external network access.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t4_s5_d2",
      "label": "Tamper-Proof Build Lineage Attestations",
      "description": "Verifying exact source commit and pipeline run producing production binaries.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5",
      "label": "Enterprise Risk, Security & Compliance Topic 5",
      "description": "Detailed first-principles mechanics for Enterprise Risk, Security & Compliance topic 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s1",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise Risk, Security & Compliance Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s1_d1",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s1_d2",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s2",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise Risk, Security & Compliance Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s2_d1",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s2_d2",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s3",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise Risk, Security & Compliance Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s3_d1",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s3_d2",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s4",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise Risk, Security & Compliance Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s4_d1",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s4_d2",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s5",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise Risk, Security & Compliance Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s5_d1",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t5_s5_d2",
      "label": "Enterprise Risk, Security & Compliance Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6",
      "label": "Enterprise Risk, Security & Compliance Topic 6",
      "description": "Detailed first-principles mechanics for Enterprise Risk, Security & Compliance topic 6.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s1",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise Risk, Security & Compliance Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s1_d1",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s1_d2",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s2",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise Risk, Security & Compliance Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s2_d1",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s2_d2",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s3",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise Risk, Security & Compliance Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s3_d1",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s3_d2",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s4",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise Risk, Security & Compliance Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s4_d1",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s4_d2",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s5",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise Risk, Security & Compliance Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s5_d1",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p5_t6_s5_d2",
      "label": "Enterprise Risk, Security & Compliance Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise Risk, Security & Compliance Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6",
      "label": "Complex Refactoring & Legacy Migration",
      "description": "Strangler Fig pattern, Branch by Abstraction, zero-downtime database migrations, and feature flagging.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1",
      "label": "Strangler Fig Migration Pattern",
      "description": "Incrementally replacing legacy systems by routing traffic to new microservices at system boundaries.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s1",
      "label": "API Gateway Interception Layer Setup",
      "description": "Positioning API gateways in front of legacy monoliths to intercept and route requests.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s1_d1",
      "label": "Path-Based Request Routing Rules",
      "description": "Routing specific sub-paths (e.g. /api/v1/payments) to new microservices while maintaining legacy routes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s1_d2",
      "label": "Zero Downtime Incremental Migration Execution",
      "description": "Replacing monolith endpoints iteratively without high-risk big-bang cutovers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s2",
      "label": "Parallel Execution & Dark Traffic Verification",
      "description": "Duplicating incoming requests to run legacy and new services concurrently in shadow mode.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s2_d1",
      "label": "Shadow Request Mirroring (Traffic Shadowing)",
      "description": "Forwarding duplicate requests to new services without returning responses to users.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s2_d2",
      "label": "Comparing Output Result Equivalence",
      "description": "Verifying data correctness by comparing legacy and new service responses.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s3",
      "label": "Percentage-Based Traffic Splitting (Canary Cutover)",
      "description": "Ramping live user traffic to new services gradually (1% -> 5% -> 25% -> 100%).",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s3_d1",
      "label": "Monitoring Service Error Rates During Cutover",
      "description": "Tracking latency and error metrics as traffic allocation increases.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s3_d2",
      "label": "Instant Fallback Routing Safeguards",
      "description": "Reverting traffic instantly back to legacy monolith if new services fail.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s4",
      "label": "Legacy Code Path Deletion & Dead Code Removal",
      "description": "Removing legacy monolith endpoints once 100% of traffic is successfully migrated.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s4_d1",
      "label": "Tearing Down Legacy Code & Database Tables",
      "description": "Deleting deprecated monolith code paths to prevent technical debt accumulation.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s4_d2",
      "label": "De-Provisioning Legacy Infrastructure Assets",
      "description": "Terminating un-needed legacy server resources to capture cost savings.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s5",
      "label": "Strangler Fig Migration Case Studies",
      "description": "Analyzing successful enterprise migrations executed using Strangler Fig patterns.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s5_d1",
      "label": "E-Commerce Checkout Monolith Migration",
      "description": "Migrating legacy monolith ordering systems to microservice architectures.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t1_s5_d2",
      "label": "De-risking Core System Transformations",
      "description": "Demonstrating how incremental cutovers eliminate major outage risks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2",
      "label": "Branch by Abstraction Pattern",
      "description": "Refactoring internal application codebases safely by introducing abstractions over legacy modules.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s1",
      "label": "Creating Abstraction Interfaces Over Legacy Code",
      "description": "Introducing interface abstractions around legacy component implementations.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s1_d1",
      "label": "Extracting Clean Interface Contracts",
      "description": "Defining clean interface boundaries matching legacy module capabilities.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s1_d2",
      "label": "Refactoring Callers to Depend on Interfaces",
      "description": "Updating application code to call abstract interfaces rather than concrete classes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s2",
      "label": "Implementing New Component Implementations",
      "description": "Writing new optimized component implementations against newly created interfaces.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s2_d1",
      "label": "Clean Architecture Implementation",
      "description": "Building high-performance implementations using modern frameworks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s2_d2",
      "label": "Comprehensive Unit & Integration Test Coverage",
      "description": "Verifying new implementations satisfy all contract interface requirements.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s3",
      "label": "Feature Flag Toggling Between Implementations",
      "description": "Using feature flags to switch dynamically between legacy and new implementations.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s3_d1",
      "label": "In-Memory Implementation Swapping",
      "description": "Toggling active implementations using runtime feature flag evaluates.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s3_d2",
      "label": "Runtime Canary Testing in Production",
      "description": "Testing new implementations on internal users before public release.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s4",
      "label": "Removing Legacy Implementations & Abstractions",
      "description": "Cleaning up legacy code classes and unnecessary interface abstractions post-migration.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s4_d1",
      "label": "Removing Feature Flag Conditionals",
      "description": "Inlining new implementations once migration is 100% verified.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s4_d2",
      "label": "Simplifying Codebase Architecture",
      "description": "Eliminating temporary abstraction layers to keep code clean.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s5",
      "label": "Comparing Branch by Abstraction to Feature Branching",
      "description": "Understanding why Branch by Abstraction is superior to long-lived Git feature branches.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s5_d1",
      "label": "Continuous Integration Main Branch Merges",
      "description": "Merging migration code daily into main branches to avoid merge debt.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t2_s5_d2",
      "label": "Eliminating Rebase Conflicts and Drift",
      "description": "Preventing code drift by maintaining short-lived PRs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3",
      "label": "Zero-Downtime Database Schema Migrations",
      "description": "Executing database schema alterations without locking tables or interrupting live transactions.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s1",
      "label": "Expand and Contract (Parallel Run) Migration Pattern",
      "description": "Executing multi-phase schema changes supporting both old and new code versions simultaneously.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s1_d1",
      "label": "Phase 1: Expand (Add New Column / Table)",
      "description": "Adding new schema elements without modifying or deleting existing columns.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s1_d2",
      "label": "Phase 2: Dual Write (Write Both Old & New Columns)",
      "description": "Updating application code to write to both old and new schema fields.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s1_d3",
      "label": "Phase 3: Backfill Historical Data",
      "description": "Migrating historical records to new schema formats asynchronously in batches.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s1_d4",
      "label": "Phase 4: Contract (Drop Old Column / Table)",
      "description": "Removing legacy columns once all application code reads from new fields.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s2",
      "label": "Non-Blocking Online DDL Operations (gh-ost / pt-online-schema-change)",
      "description": "Executing heavy DDL table alters on large MySQL/PostgreSQL databases without locking.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s2_d1",
      "label": "Ghost Table Creation & Triggerless Sync",
      "description": "Building ghost tables and syncing updates via binary log tailing (gh-ost).",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s2_d2",
      "label": "Atomic Table Rename Swapping",
      "description": "Swapping ghost and primary tables in sub-second atomic rename operations.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s3",
      "label": "PostgreSQL Lock-Free Index Creation (CREATE INDEX CONCURRENTLY)",
      "description": "Building secondary indexes without acquiring exclusive table write locks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s3_d1",
      "label": "Multi-Pass Concurrent Index Building",
      "description": "Scanning table data across multiple passes without blocking INSERT/UPDATE queries.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s3_d2",
      "label": "Handling Invalid Index Failures",
      "description": "Cleaning up failed concurrent index builds before retrying.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s4",
      "label": "Safe Column Renaming & Type Alteration Strategies",
      "description": "Avoiding destructive column rename or type alter DDL commands.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s4_d1",
      "label": "Avoiding Direct ALTER TABLE RENAME COLUMN",
      "description": "Preventing application crashes caused by unexpected column renames.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s4_d2",
      "label": "Incremental Type Migration via Views",
      "description": "Using database views to present updated types while maintaining backward compatibility.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s5",
      "label": "Automated Migration Testing in CI/CD",
      "description": "Testing database migration scripts against production-like data snapshots in CI.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s5_d1",
      "label": "Forward and Rollback Script Verification",
      "description": "Verifying both up and down migration scripts execute cleanly without errors.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t3_s5_d2",
      "label": "Schema Drift Detection Scans",
      "description": "Scanning database schemas to ensure production matches versioned migration scripts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4",
      "label": "Feature Flag Infrastructure & Circuit Breakers",
      "description": "Decoupling code deployments from feature releases using centralized feature flags (LaunchDarkly).",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s1",
      "label": "Trunk-Based Development & Feature Flags",
      "description": "Enabling continuous main branch integration by wrapping incomplete code in feature flags.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s1_d1",
      "label": "Eliminating Long-Lived Feature Branches",
      "description": "Merging code daily behind disabled feature flags.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s1_d2",
      "label": "Decoupling Deployment from Release Business Decisions",
      "description": "Allowing product managers to trigger feature releases without engineering deployments.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s2",
      "label": "Targeted User Rollouts & Rule Evaluation",
      "description": "Evaluating feature flags based on user attributes (user_id, organization, country).",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s2_d1",
      "label": "Internal Employee Testing Rings",
      "description": "Enabling new features for internal employees before public availability.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s2_d2",
      "label": "Percentage-Based User Rollouts",
      "description": "Gradually expanding feature access to 1%, 10%, 50%, and 100% of user bases.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s3",
      "label": "Automated Circuit Breaker Triggers",
      "description": "Wrapping high-risk external integrations in automated fallback circuit breakers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s3_d1",
      "label": "Error Rate & Latency Circuit Tripping",
      "description": "Tripping circuit breakers automatically if external API error rates exceed 5%.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s3_d2",
      "label": "Fallback Graceful Degradation Paths",
      "description": "Serving cached or simplified UI views when circuit breakers trip open.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s4",
      "label": "Feature Flag Technical Debt Cleanup",
      "description": "Systematically removing stale feature flags after 100% rollout completion.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s4_d1",
      "label": "Flag Staleness Monitoring Alerts",
      "description": "Flagging feature flags that have been at 100% for > 30 days for cleanup.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s4_d2",
      "label": "Automated Flag Removal Code PRs",
      "description": "Creating cleanup tickets to delete conditional flag checks from codebases.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s5",
      "label": "High-Performance Local Flag Evaluation (SDK Streaming)",
      "description": "Streaming flag rule updates to local in-memory SDK caches for microsecond evaluation.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s5_d1",
      "label": "Sub-Millisecond In-Memory Flag Evaluation",
      "description": "Evaluating feature flags locally in memory without making network calls.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t4_s5_d2",
      "label": "Server-Sent Events (SSE) Rule Streaming",
      "description": "Streaming updated flag rules to application servers instantly upon change.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5",
      "label": "Complex Refactoring & Legacy Migration Topic 5",
      "description": "Detailed first-principles mechanics for Complex Refactoring & Legacy Migration topic 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s1",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Complex Refactoring & Legacy Migration Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s1_d1",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s1_d2",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s2",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Complex Refactoring & Legacy Migration Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s2_d1",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s2_d2",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s3",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Complex Refactoring & Legacy Migration Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s3_d1",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s3_d2",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s4",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Complex Refactoring & Legacy Migration Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s4_d1",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s4_d2",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s5",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Complex Refactoring & Legacy Migration Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s5_d1",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t5_s5_d2",
      "label": "Complex Refactoring & Legacy Migration Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6",
      "label": "Complex Refactoring & Legacy Migration Topic 6",
      "description": "Detailed first-principles mechanics for Complex Refactoring & Legacy Migration topic 6.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s1",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Complex Refactoring & Legacy Migration Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s1_d1",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s1_d2",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s2",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Complex Refactoring & Legacy Migration Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s2_d1",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s2_d2",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s3",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Complex Refactoring & Legacy Migration Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s3_d1",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s3_d2",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s4",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Complex Refactoring & Legacy Migration Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s4_d1",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s4_d2",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s5",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Complex Refactoring & Legacy Migration Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s5_d1",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p6_t6_s5_d2",
      "label": "Complex Refactoring & Legacy Migration Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Complex Refactoring & Legacy Migration Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7",
      "label": "High-Impact Incident Command & Troubleshooting",
      "description": "Root cause analysis (5 Whys), Incident Commander leadership, system bottleneck diagnosis, and post-incident reviews.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1",
      "label": "Incident Commander (IC) Role & Command Architecture",
      "description": "Structuring emergency incident response operations using standardized Incident Command Systems (ICS).",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s1",
      "label": "Clear Incident Role Segregation (IC, Tech Lead, Comms)",
      "description": "Establishing strict operational role separation during active high-severity incidents.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s1_d1",
      "label": "Incident Commander (IC - Overall Process & Decisions)",
      "description": "Directing incident response, making high-level calls, and managing response pace without debugging code.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s1_d2",
      "label": "Technical Lead (Debugging & Operations)",
      "description": "Leading hands-on troubleshooting and executing system modifications.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s1_d3",
      "label": "Communications Lead (Internal & External Status Updates)",
      "description": "Publishing regular status updates to executives, employees, and customers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s2",
      "label": "Single Source of Truth Incident Channels",
      "description": "Creating dedicated Slack/Teams channels and video bridges for every active incident.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s2_d1",
      "label": "Dedicated #incident-YYYYMMDD Channels",
      "description": "Centralizing all communications, hypotheses, and actions in single incident channels.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s2_d2",
      "label": "Automated Incident Timeline Logging",
      "description": "Bot-logging critical actions, graphs, and decisions directly into incident channels.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s3",
      "label": "Incident Severity Level Classification (Sev-0 to Sev-3)",
      "description": "Categorizing incidents based on business impact, customer blast radius, and data risk.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s3_d1",
      "label": "Sev-0 / Sev-1 (Critical Business Outage -> Executive Page)",
      "description": "Paging executive teams and mobilizing dedicated response teams for major outages.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s3_d2",
      "label": "Sev-2 / Sev-3 (Minor Feature Impairment -> Business Hours Fix)",
      "description": "Handling minor issues through standard ticket queues without off-hours paging.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s4",
      "label": "Regular Stakeholder Cadence Updates",
      "description": "Publishing status updates at predictable intervals during active incidents.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s4_d1",
      "label": "30-Minute Status Page Update Cadence",
      "description": "Updating public status pages every 30 minutes during active Sev-1 incidents.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s4_d2",
      "label": "Clear Next-Update Time Expectations",
      "description": "Setting explicit expectations for when the next status update will be posted.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s5",
      "label": "Incident De-escalation & Resolution Sign-Off",
      "description": "Formally declaring incidents resolved once systems return to stable operational health.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s5_d1",
      "label": "Verifying System Metrics Stability (15-30 Mins Watch)",
      "description": "Monitoring key health metrics for 30 minutes before declaring incident resolution.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t1_s5_d2",
      "label": "Initiating Post-Mortem Scheduling",
      "description": "Scheduling post-mortem review meetings within 48 hours of incident resolution.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2",
      "label": "System Bottleneck & Outage Diagnosis Methodology",
      "description": "Structured troubleshooting methodologies for identifying root causes during complex system outages.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s1",
      "label": "USE Method (Utilization, Saturation, Errors)",
      "description": "Brendan Gregg troubleshooting framework for analyzing hardware resources (CPU, Memory, Disk, Network).",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s1_d1",
      "label": "Utilization (Percentage of Time Resource is Busy)",
      "description": "Checking CPU and memory utilization levels across cluster nodes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s1_d2",
      "label": "Saturation (Degree of Backlogged Work Queues)",
      "description": "Checking CPU run queues, disk I/O queues, and socket backlog buffers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s1_d3",
      "label": "Errors (Count of Error Events)",
      "description": "Auditing network interface drop counters and disk I/O error logs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s2",
      "label": "RED Method (Rate, Errors, Duration)",
      "description": "Tom Wilkie service monitoring framework tailored for microservice architectures.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s2_d1",
      "label": "Rate (Request Count per Second)",
      "description": "Monitoring incoming request throughput across microservice endpoints.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s2_d2",
      "label": "Errors (Failed Request Count per Second)",
      "description": "Tracking 5xx HTTP response codes and uncaught exception rates.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s2_d3",
      "label": "Duration (Latency Distributions P50, P95, P99)",
      "description": "Analyzing latency percentile distributions to spot tail-latency spikes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s3",
      "label": "First-Principles Differential Diagnosis",
      "description": "Systematically isolating variables to narrow down root cause hypotheses.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s3_d1",
      "label": "Correlating Outage Onset with Recent Changes",
      "description": "Auditing recent deployments, feature flag toggles, and infrastructure changes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s3_d2",
      "label": "Binary Search Component Isolation",
      "description": "Bypassing sub-systems or caches to isolate failing components.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s4",
      "label": "Distributed Tracing Analysis (OpenTelemetry / Jaeger)",
      "description": "Tracing requests across microservice boundaries to locate latency bottlenecks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s4_d1",
      "label": "Trace Parent Header Propagation (traceparent)",
      "description": "Tracing request spans across HTTP and message queue boundaries.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s4_d2",
      "label": "Identifying Bottleneck Service Spans",
      "description": "Pinpointing exact microservices or database queries driving high request latency.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s5",
      "label": "Thread Dump & Memory Heap Profiling Under Outage",
      "description": "Capturing diagnostic snapshots from live production nodes experiencing issues.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s5_d1",
      "label": "Thread Dump Stack Trace Audits (jstack / pstack)",
      "description": "Identifying deadlocked threads or blocked I/O calls.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t2_s5_d2",
      "label": "Capturing Live Heap Dumps Before Node Restarts",
      "description": "Saving memory dumps to scratch storage before restarting crashing nodes for offline analysis.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3",
      "label": "Cascading Failure Prevention & Resilience",
      "description": "Architectural patterns for preventing localized component failures from triggering global outages.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s1",
      "label": "Circuit Breaker Pattern (Netflix Hystrix / Resilience4j)",
      "description": "Isolating failing external services to prevent cascading thread pool exhaustion.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s1_d1",
      "label": "Closed -> Open -> Half-Open State Transitions",
      "description": "Tripping circuit breakers open when error thresholds are crossed, protecting caller threads.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s1_d2",
      "label": "Automated Half-Open Health Probing",
      "description": "Testing downstream service recovery periodically before closing circuit breakers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s2",
      "label": "Bulkhead Pattern & Resource Isolation",
      "description": "Isolating resource pools (thread pools, connection pools) across critical services.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s2_d1",
      "label": "Dedicated Microservice Thread Pools",
      "description": "Assigning separate thread pools to different API integrations to prevent resource starvation.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s2_d2",
      "label": "Preventing Single-Tenant Noise Impact",
      "description": "Isolating high-volume tenant workloads to dedicated worker pools.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s3",
      "label": "Exponential Backoff with Full Jitter Retry Strategy",
      "description": "Preventing thundering herd problems when retrying failed network requests.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s3_d1",
      "label": "Full Jitter Formula Sleep = Random(0, Min(Cap, Base * 2^Attempt))",
      "description": "Randomizing retry intervals to prevent synchronized request spikes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s3_d2",
      "label": "Capping Maximum Retry Attempt Counts",
      "description": "Limiting retries to 3 attempts before returning error responses.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s4",
      "label": "Rate Limiting & Token Bucket Algorithms",
      "description": "Protecting backend services from traffic spikes using rate limiters.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s4_d1",
      "label": "Token Bucket / Leaky Bucket Math",
      "description": "Refilling tokens at fixed rates to smooth out bursty traffic spikes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s4_d2",
      "label": "HTTP 429 Too Many Requests Responses",
      "description": "Returning 429 status codes with Retry-After headers when rate limits are exceeded.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s5",
      "label": "Load Shedding & Graceful Degradation",
      "description": "Shedding non-essential background traffic to preserve capacity for core critical transactions.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s5_d1",
      "label": "Dropping Low-Priority Traffic (Load Shedding)",
      "description": "Rejecting analytics and search indexing requests during high CPU load.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t3_s5_d2",
      "label": "Fallback UI Degradation Paths",
      "description": "Serving cached or simplified static content when primary recommendation engines fail.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4",
      "label": "Post-Incident Action Item Execution & Tracking",
      "description": "Ensuring post-mortem corrective actions are completed to prevent incident recurrence.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s1",
      "label": "Categorizing Post-Incident Action Items",
      "description": "Classifying action items into Mitigations, Detection Improvements, and Preventive Fixes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s1_d1",
      "label": "Mitigation Fixes (Speeding Recovery Times)",
      "description": "Building automated failover and rollback scripts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s1_d2",
      "label": "Detection Fixes (Improving Time-to-Detect TTD)",
      "description": "Adding missing Prometheus alerts and log anomaly triggers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s1_d3",
      "label": "Preventive Fixes (Eliminating Root Cause Vulnerabilities)",
      "description": "Refactoring architectural code paths to prevent recurrence.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s2",
      "label": "Jira / Linear Action Item Tracking & SLAs",
      "description": "Enforcing completion deadlines for post-incident action items.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s2_d1",
      "label": "Sev-1 Action Item 14-Day SLA Deadline",
      "description": "Requiring top-priority preventive items to be completed within 2 weeks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s2_d2",
      "label": "Executive Visibility into Overdue Action Items",
      "description": "Reporting overdue post-mortem items to engineering leadership.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s3",
      "label": "Verifying Action Item Effectiveness",
      "description": "Validating that completed action items actually prevent target failure modes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s3_d1",
      "label": "Automated Chaos Test Verification",
      "description": "Executing failure injection tests to verify new safeguards work under load.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s3_d2",
      "label": "Closing Post-Mortem Feedback Loops",
      "description": "Confirming action item completion before closing post-mortem tickets.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s4",
      "label": "Trend Analysis Across Historical Incidents",
      "description": "Analyzing quarterly incident trends to identify systemic organizational risks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s4_d1",
      "label": "Categorizing Incidents by Architectural Component",
      "description": "Identifying repeat-offender services responsible for disproportionate outage counts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s4_d2",
      "label": "Investing in Problematic Infrastructure Domains",
      "description": "Allocating dedicated engineering resources to rewrite unreliable systems.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s5",
      "label": "Building Resilient Engineering Teams",
      "description": "Supporting on-call engineers and reducing operational burnout.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s5_d1",
      "label": "Tracking On-Call Page Off-Hours Frequency",
      "description": "Monitoring nighttime alert counts to protect team well-being.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t4_s5_d2",
      "label": "Compensating Heavy On-Call Shifts",
      "description": "Providing comp time and bonus incentives for demanding on-call rotations.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5",
      "description": "Detailed first-principles mechanics for High-Impact Incident Command & Troubleshooting topic 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s1",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for High-Impact Incident Command & Troubleshooting Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s1_d1",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s1_d2",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s2",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for High-Impact Incident Command & Troubleshooting Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s2_d1",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s2_d2",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s3",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for High-Impact Incident Command & Troubleshooting Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s3_d1",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s3_d2",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s4",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for High-Impact Incident Command & Troubleshooting Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s4_d1",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s4_d2",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s5",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for High-Impact Incident Command & Troubleshooting Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s5_d1",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t5_s5_d2",
      "label": "High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6",
      "description": "Detailed first-principles mechanics for High-Impact Incident Command & Troubleshooting topic 6.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s1",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for High-Impact Incident Command & Troubleshooting Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s1_d1",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s1_d2",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s2",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for High-Impact Incident Command & Troubleshooting Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s2_d1",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s2_d2",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s3",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for High-Impact Incident Command & Troubleshooting Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s3_d1",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s3_d2",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s4",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for High-Impact Incident Command & Troubleshooting Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s4_d1",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s4_d2",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s5",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for High-Impact Incident Command & Troubleshooting Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s5_d1",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p7_t6_s5_d2",
      "label": "High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for High-Impact Incident Command & Troubleshooting Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8",
      "label": "Engineering Metrics & Organizational Efficiency",
      "description": "DORA metrics (Deployment Frequency, Lead Time, CFR, MTTR), Developer Velocity Index (DVI), and SPACE framework.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1",
      "label": "DORA Four Key Metrics Architecture",
      "description": "DevOps Research and Assessment (DORA) framework measuring software delivery performance.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s1",
      "label": "Deployment Frequency (DF) Measurement",
      "description": "Measuring how often successful production code deployments occur.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s1_d1",
      "label": "Elite Performer Benchmark (Multiple Deployments per Day)",
      "description": "Shipping production updates multiple times daily using automated CI/CD.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s1_d2",
      "label": "Batch Size Reduction Impact",
      "description": "Demonstrating that smaller deployment batches increase overall deployment frequency.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s2",
      "label": "Lead Time for Changes (LTC) Measurement",
      "description": "Time elapsed from code commit to code successfully running in production.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s2_d1",
      "label": "Elite Performer Benchmark (< 1 Hour Lead Time)",
      "description": "Accelerating pipeline execution from commit to production to under 60 minutes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s2_d2",
      "label": "Identifying Pipeline Bottlenecks",
      "description": "Measuring latency across code review, CI build, staging test, and production deploy phases.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s3",
      "label": "Change Failure Rate (CFR) Measurement",
      "description": "Percentage of production deployments requiring immediate remediation (hotfixes, rollbacks).",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s3_d1",
      "label": "Elite Performer Benchmark (0-15% Change Failure Rate)",
      "description": "Maintaining low failure rates through comprehensive automated test suites.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s3_d2",
      "label": "Balancing Deployment Velocity with Quality",
      "description": "Using CFR to ensure high deployment frequency does not compromise stability.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s4",
      "label": "Mean Time to Restore (MTTR) Measurement",
      "description": "Time required to recover from production service outages.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s4_d1",
      "label": "Elite Performer Benchmark (< 1 Hour MTTR)",
      "description": "Restoring service rapidly using automated canary rollbacks and feature flags.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s4_d2",
      "label": "MTTR Breakdown (Time-to-Detect, Time-to-Diagnose, Time-to-Mitigate)",
      "description": "Optimizing monitoring alerts and runbooks to reduce recovery delays.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s5",
      "label": "Automated DORA Metric Collection Pipelines",
      "description": "Streaming Git, CI/CD, and incident data into automated DORA dashboards.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s5_d1",
      "label": "GitHub / GitLab API Webhook Integration",
      "description": "Extracting commit, PR, and deployment timestamps automatically.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t1_s5_d2",
      "label": "PagerDuty / Opsgenie Incident Integration",
      "description": "Calculating MTTR by matching incident alerts with deployment logs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2",
      "label": "SPACE Framework for Developer Productivity",
      "description": "Holistic framework (GitHub / Microsoft Research) evaluating developer productivity across 5 dimensions.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s1",
      "label": "Satisfaction & Well-Being Dimension (S)",
      "description": "Measuring developer fulfillment, burn-out risk, and tool satisfaction.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s1_d1",
      "label": "Developer Net Promoter Score (DevNPS) Surveys",
      "description": "Measuring team satisfaction with development tools and processes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s1_d2",
      "label": "Monitoring On-Call Burnout & Work-Life Balance",
      "description": "Tracking off-hours alerts and overtime to prevent engineering turnover.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s2",
      "label": "Performance Dimension (P)",
      "description": "Evaluating software outcomes and system impact rather than raw line-of-code metrics.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s2_d1",
      "label": "Focusing on System Quality and Business Value",
      "description": "Measuring customer value delivered rather than feature velocity alone.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s2_d2",
      "label": "Avoiding Perverse Lines-of-Code Metrics",
      "description": "Rejecting vanity metrics like lines of code or commit counts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s3",
      "label": "Activity Dimension (A)",
      "description": "Tracking count of completed engineering actions (PRs, builds, design docs).",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s3_d1",
      "label": "PR Merge & Review Volume Tracking",
      "description": "Monitoring code review involvement and pull request completions.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s3_d2",
      "label": "Deployment and Documentation Activity Metrics",
      "description": "Tracking design doc publication and build output counts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s4",
      "label": "Communication & Collaboration Dimension (C)",
      "description": "Evaluating team knowledge sharing, PR review speed, and cross-team alignment.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s4_d1",
      "label": "PR Review Latency & Feedback Quality",
      "description": "Measuring time elapsed for peers to receive constructive PR reviews.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s4_d2",
      "label": "Knowledge Sharing & Cross-Pollination Index",
      "description": "Tracking cross-team design reviews and documentation contributions.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s5",
      "label": "Efficiency & Flow Dimension (E)",
      "description": "Measuring uninterrupted deep work time and developer flow states.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s5_d1",
      "label": "Un-Interrupted Focus Time Hours (Target > 3 Hours/Day)",
      "description": "Protecting large blocks of uninterrupted time for deep engineering tasks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t2_s5_d2",
      "label": "Minimizing Context Switching and Meeting Overhead",
      "description": "Consolidating meetings into dedicated blocks to preserve focus time.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3",
      "label": "Developer Velocity Index (DVI / McKinsey)",
      "description": "Framework measuring how business growth correlates with developer tools, culture, and friction removal.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s1",
      "label": "Best-in-Class Developer Tooling Provisioning",
      "description": "Equipping engineers with high-performance hardware, fast CI, and modern IDEs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s1_d1",
      "label": "High-Spec Laptop Hardware Provisioning",
      "description": "Providing max-spec laptops to eliminate local compilation bottlenecks.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s1_d2",
      "label": "Cloud-Based Remote Development Environments (GitHub Codespaces)",
      "description": "Spinning up instant pre-configured cloud development environments.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s2",
      "label": "Sub-10-Minute CI Build & Test Times",
      "description": "Optimizing CI test suite execution speeds to maintain fast feedback loops.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s2_d1",
      "label": "Parallel Test Runner Sharding",
      "description": "Distributing unit and integration tests across parallel CI worker nodes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s2_d2",
      "label": "Intelligent Test Selection (Impacted Test Execution)",
      "description": "Running only tests affected by changed files in PRs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s3",
      "label": "Eliminating Administrative & Approval Friction",
      "description": "Streamlining security, architecture, and deployment approval workflows.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s3_d1",
      "label": "Self-Service Cloud Resource Provisioning (Terraform)",
      "description": "Allowing developers to spin up cloud infrastructure via self-service PRs.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s3_d2",
      "label": "Automated Security & Compliance Approvals",
      "description": "Replacing manual security review meetings with automated CI policy gates.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s4",
      "label": "Measuring Engineering Friction Points (DevEx Audits)",
      "description": "Conducting regular developer experience audits to identify velocity blockers.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s4_d1",
      "label": "Identifying Slow Build and Staging Bottlenecks",
      "description": "Surveying engineers to locate slow CI steps and flaky tests.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s4_d2",
      "label": "Dedicated DX Engineering Teams",
      "description": "Forming dedicated developer experience teams to improve internal tools.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s5",
      "label": "Correlating DVI with Business Outperformance",
      "description": "Demonstrating that high DVI scores drive 4-5x faster revenue growth.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s5_d1",
      "label": "Business Outperformance Correlation",
      "description": "Showing executives how investing in developer tools directly drives company growth.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t3_s5_d2",
      "label": "Engineering Retention Impact of High DVI",
      "description": "Retaining top engineering talent by maintaining modern, low-friction toolchains.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4",
      "label": "Flaky Test Remediation & Test Suite Health",
      "description": "Systematically identifying and quarantining non-deterministic flaky tests.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s1",
      "label": "Flaky Test Identification & Quarantine Pipelines",
      "description": "Detecting tests that pass and fail on identical code commits without changes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s1_d1",
      "label": "Automated Flaky Test Detection (10x Retry Scans)",
      "description": "Re-running failing tests 10 times in CI to detect non-deterministic behavior.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s1_d2",
      "label": "Automated Quarantine Isolation (Quarantine Test Suite)",
      "description": "Moving flaky tests to quarantine suites automatically to prevent blocking CI builds.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s2",
      "label": "Root Causes of Test Flakiness (Async Race Conditions, Timeouts)",
      "description": "Diagnosing primary coding patterns causing non-deterministic test failures.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s2_d1",
      "label": "Asynchronous State & Order Dependencies",
      "description": "Fixing tests reliant on specific async execution order or hardcoded timeouts.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s2_d2",
      "label": "Global State & Database Contention Leakage",
      "description": "Ensuring tests run in isolated transactions without polluting shared data.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s3",
      "label": "Flaky Test SLA & Engineering Ownership",
      "description": "Assigning quarantined flaky tests back to originating teams for mandatory fixes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s3_d1",
      "label": "7-Day Quarantine SLA Fix Deadline",
      "description": "Requiring teams to fix quarantined tests within 7 days or face mandatory deletion.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s3_d2",
      "label": "Tracking Flaky Test Ratios per Team",
      "description": "Reporting flaky test rates on team engineering quality dashboards.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s4",
      "label": "Test Pyramid Optimization (Unit vs Integration vs E2E)",
      "description": "Structuring test suites according to the classic testing pyramid model.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s4_d1",
      "label": "70% Unit / 20% Integration / 10% E2E Ratio Target",
      "description": "Maintaining fast unit test foundations while minimizing slow, fragile E2E tests.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s4_d2",
      "label": "Fast Execution Speed & High Reliability",
      "description": "Ensuring 90%+ of total test runs complete in under 5 minutes.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s5",
      "label": "Continuous Test Suite Refactoring & Pruning",
      "description": "Deleting redundant or low-value tests to maintain high CI execution speeds.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s5_d1",
      "label": "Pruning Duplicate End-to-End Tests",
      "description": "Replacing slow E2E tests with faster integration tests covering identical paths.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t4_s5_d2",
      "label": "Maintaining High Mutation Testing Coverage (Stryker)",
      "description": "Evaluating test suite quality using mutation testing tools.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5",
      "description": "Detailed first-principles mechanics for Engineering Metrics & Organizational Efficiency topic 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s1",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Metrics & Organizational Efficiency Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s1_d1",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s1_d2",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s2",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Metrics & Organizational Efficiency Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s2_d1",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s2_d2",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s3",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Metrics & Organizational Efficiency Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s3_d1",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s3_d2",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s4",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Metrics & Organizational Efficiency Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s4_d1",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s4_d2",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s5",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Metrics & Organizational Efficiency Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s5_d1",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t5_s5_d2",
      "label": "Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6",
      "description": "Detailed first-principles mechanics for Engineering Metrics & Organizational Efficiency topic 6.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s1",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Metrics & Organizational Efficiency Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s1_d1",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s1_d2",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s2",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Metrics & Organizational Efficiency Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s2_d1",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s2_d2",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s3",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Metrics & Organizational Efficiency Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s3_d1",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s3_d2",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s4",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Metrics & Organizational Efficiency Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s4_d1",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s4_d2",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s5",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Engineering Metrics & Organizational Efficiency Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s5_d1",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "staff_root_p8_t6_s5_d2",
      "label": "Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Engineering Metrics & Organizational Efficiency Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "staff_root",
      "target": "staff_root_p1"
    },
    {
      "source": "staff_root_p1",
      "target": "staff_root_p1_t1"
    },
    {
      "source": "staff_root_p1_t1",
      "target": "staff_root_p1_t1_s1"
    },
    {
      "source": "staff_root_p1_t1_s1",
      "target": "staff_root_p1_t1_s1_d1"
    },
    {
      "source": "staff_root_p1_t1_s1",
      "target": "staff_root_p1_t1_s1_d2"
    },
    {
      "source": "staff_root_p1_t1",
      "target": "staff_root_p1_t1_s2"
    },
    {
      "source": "staff_root_p1_t1_s2",
      "target": "staff_root_p1_t1_s2_d1"
    },
    {
      "source": "staff_root_p1_t1_s2",
      "target": "staff_root_p1_t1_s2_d2"
    },
    {
      "source": "staff_root_p1_t1",
      "target": "staff_root_p1_t1_s3"
    },
    {
      "source": "staff_root_p1_t1_s3",
      "target": "staff_root_p1_t1_s3_d1"
    },
    {
      "source": "staff_root_p1_t1_s3",
      "target": "staff_root_p1_t1_s3_d2"
    },
    {
      "source": "staff_root_p1_t1",
      "target": "staff_root_p1_t1_s4"
    },
    {
      "source": "staff_root_p1_t1_s4",
      "target": "staff_root_p1_t1_s4_d1"
    },
    {
      "source": "staff_root_p1_t1_s4",
      "target": "staff_root_p1_t1_s4_d2"
    },
    {
      "source": "staff_root_p1_t1",
      "target": "staff_root_p1_t1_s5"
    },
    {
      "source": "staff_root_p1_t1_s5",
      "target": "staff_root_p1_t1_s5_d1"
    },
    {
      "source": "staff_root_p1_t1_s5",
      "target": "staff_root_p1_t1_s5_d2"
    },
    {
      "source": "staff_root_p1",
      "target": "staff_root_p1_t2"
    },
    {
      "source": "staff_root_p1_t2",
      "target": "staff_root_p1_t2_s1"
    },
    {
      "source": "staff_root_p1_t2_s1",
      "target": "staff_root_p1_t2_s1_d1"
    },
    {
      "source": "staff_root_p1_t2_s1",
      "target": "staff_root_p1_t2_s1_d2"
    },
    {
      "source": "staff_root_p1_t2",
      "target": "staff_root_p1_t2_s2"
    },
    {
      "source": "staff_root_p1_t2_s2",
      "target": "staff_root_p1_t2_s2_d1"
    },
    {
      "source": "staff_root_p1_t2_s2",
      "target": "staff_root_p1_t2_s2_d2"
    },
    {
      "source": "staff_root_p1_t2",
      "target": "staff_root_p1_t2_s3"
    },
    {
      "source": "staff_root_p1_t2_s3",
      "target": "staff_root_p1_t2_s3_d1"
    },
    {
      "source": "staff_root_p1_t2_s3",
      "target": "staff_root_p1_t2_s3_d2"
    },
    {
      "source": "staff_root_p1_t2",
      "target": "staff_root_p1_t2_s4"
    },
    {
      "source": "staff_root_p1_t2_s4",
      "target": "staff_root_p1_t2_s4_d1"
    },
    {
      "source": "staff_root_p1_t2_s4",
      "target": "staff_root_p1_t2_s4_d2"
    },
    {
      "source": "staff_root_p1_t2",
      "target": "staff_root_p1_t2_s5"
    },
    {
      "source": "staff_root_p1_t2_s5",
      "target": "staff_root_p1_t2_s5_d1"
    },
    {
      "source": "staff_root_p1_t2_s5",
      "target": "staff_root_p1_t2_s5_d2"
    },
    {
      "source": "staff_root_p1",
      "target": "staff_root_p1_t3"
    },
    {
      "source": "staff_root_p1_t3",
      "target": "staff_root_p1_t3_s1"
    },
    {
      "source": "staff_root_p1_t3_s1",
      "target": "staff_root_p1_t3_s1_d1"
    },
    {
      "source": "staff_root_p1_t3_s1",
      "target": "staff_root_p1_t3_s1_d2"
    },
    {
      "source": "staff_root_p1_t3",
      "target": "staff_root_p1_t3_s2"
    },
    {
      "source": "staff_root_p1_t3_s2",
      "target": "staff_root_p1_t3_s2_d1"
    },
    {
      "source": "staff_root_p1_t3_s2",
      "target": "staff_root_p1_t3_s2_d2"
    },
    {
      "source": "staff_root_p1_t3",
      "target": "staff_root_p1_t3_s3"
    },
    {
      "source": "staff_root_p1_t3_s3",
      "target": "staff_root_p1_t3_s3_d1"
    },
    {
      "source": "staff_root_p1_t3_s3",
      "target": "staff_root_p1_t3_s3_d2"
    },
    {
      "source": "staff_root_p1_t3",
      "target": "staff_root_p1_t3_s4"
    },
    {
      "source": "staff_root_p1_t3_s4",
      "target": "staff_root_p1_t3_s4_d1"
    },
    {
      "source": "staff_root_p1_t3_s4",
      "target": "staff_root_p1_t3_s4_d2"
    },
    {
      "source": "staff_root_p1_t3",
      "target": "staff_root_p1_t3_s5"
    },
    {
      "source": "staff_root_p1_t3_s5",
      "target": "staff_root_p1_t3_s5_d1"
    },
    {
      "source": "staff_root_p1_t3_s5",
      "target": "staff_root_p1_t3_s5_d2"
    },
    {
      "source": "staff_root_p1",
      "target": "staff_root_p1_t4"
    },
    {
      "source": "staff_root_p1_t4",
      "target": "staff_root_p1_t4_s1"
    },
    {
      "source": "staff_root_p1_t4_s1",
      "target": "staff_root_p1_t4_s1_d1"
    },
    {
      "source": "staff_root_p1_t4_s1",
      "target": "staff_root_p1_t4_s1_d2"
    },
    {
      "source": "staff_root_p1_t4",
      "target": "staff_root_p1_t4_s2"
    },
    {
      "source": "staff_root_p1_t4_s2",
      "target": "staff_root_p1_t4_s2_d1"
    },
    {
      "source": "staff_root_p1_t4_s2",
      "target": "staff_root_p1_t4_s2_d2"
    },
    {
      "source": "staff_root_p1_t4",
      "target": "staff_root_p1_t4_s3"
    },
    {
      "source": "staff_root_p1_t4_s3",
      "target": "staff_root_p1_t4_s3_d1"
    },
    {
      "source": "staff_root_p1_t4_s3",
      "target": "staff_root_p1_t4_s3_d2"
    },
    {
      "source": "staff_root_p1_t4",
      "target": "staff_root_p1_t4_s4"
    },
    {
      "source": "staff_root_p1_t4_s4",
      "target": "staff_root_p1_t4_s4_d1"
    },
    {
      "source": "staff_root_p1_t4_s4",
      "target": "staff_root_p1_t4_s4_d2"
    },
    {
      "source": "staff_root_p1_t4",
      "target": "staff_root_p1_t4_s5"
    },
    {
      "source": "staff_root_p1_t4_s5",
      "target": "staff_root_p1_t4_s5_d1"
    },
    {
      "source": "staff_root_p1_t4_s5",
      "target": "staff_root_p1_t4_s5_d2"
    },
    {
      "source": "staff_root_p1",
      "target": "staff_root_p1_t5"
    },
    {
      "source": "staff_root_p1_t5",
      "target": "staff_root_p1_t5_s1"
    },
    {
      "source": "staff_root_p1_t5_s1",
      "target": "staff_root_p1_t5_s1_d1"
    },
    {
      "source": "staff_root_p1_t5_s1",
      "target": "staff_root_p1_t5_s1_d2"
    },
    {
      "source": "staff_root_p1_t5",
      "target": "staff_root_p1_t5_s2"
    },
    {
      "source": "staff_root_p1_t5_s2",
      "target": "staff_root_p1_t5_s2_d1"
    },
    {
      "source": "staff_root_p1_t5_s2",
      "target": "staff_root_p1_t5_s2_d2"
    },
    {
      "source": "staff_root_p1_t5",
      "target": "staff_root_p1_t5_s3"
    },
    {
      "source": "staff_root_p1_t5_s3",
      "target": "staff_root_p1_t5_s3_d1"
    },
    {
      "source": "staff_root_p1_t5_s3",
      "target": "staff_root_p1_t5_s3_d2"
    },
    {
      "source": "staff_root_p1_t5",
      "target": "staff_root_p1_t5_s4"
    },
    {
      "source": "staff_root_p1_t5_s4",
      "target": "staff_root_p1_t5_s4_d1"
    },
    {
      "source": "staff_root_p1_t5_s4",
      "target": "staff_root_p1_t5_s4_d2"
    },
    {
      "source": "staff_root_p1_t5",
      "target": "staff_root_p1_t5_s5"
    },
    {
      "source": "staff_root_p1_t5_s5",
      "target": "staff_root_p1_t5_s5_d1"
    },
    {
      "source": "staff_root_p1_t5_s5",
      "target": "staff_root_p1_t5_s5_d2"
    },
    {
      "source": "staff_root_p1",
      "target": "staff_root_p1_t6"
    },
    {
      "source": "staff_root_p1_t6",
      "target": "staff_root_p1_t6_s1"
    },
    {
      "source": "staff_root_p1_t6_s1",
      "target": "staff_root_p1_t6_s1_d1"
    },
    {
      "source": "staff_root_p1_t6_s1",
      "target": "staff_root_p1_t6_s1_d2"
    },
    {
      "source": "staff_root_p1_t6",
      "target": "staff_root_p1_t6_s2"
    },
    {
      "source": "staff_root_p1_t6_s2",
      "target": "staff_root_p1_t6_s2_d1"
    },
    {
      "source": "staff_root_p1_t6_s2",
      "target": "staff_root_p1_t6_s2_d2"
    },
    {
      "source": "staff_root_p1_t6",
      "target": "staff_root_p1_t6_s3"
    },
    {
      "source": "staff_root_p1_t6_s3",
      "target": "staff_root_p1_t6_s3_d1"
    },
    {
      "source": "staff_root_p1_t6_s3",
      "target": "staff_root_p1_t6_s3_d2"
    },
    {
      "source": "staff_root_p1_t6",
      "target": "staff_root_p1_t6_s4"
    },
    {
      "source": "staff_root_p1_t6_s4",
      "target": "staff_root_p1_t6_s4_d1"
    },
    {
      "source": "staff_root_p1_t6_s4",
      "target": "staff_root_p1_t6_s4_d2"
    },
    {
      "source": "staff_root_p1_t6",
      "target": "staff_root_p1_t6_s5"
    },
    {
      "source": "staff_root_p1_t6_s5",
      "target": "staff_root_p1_t6_s5_d1"
    },
    {
      "source": "staff_root_p1_t6_s5",
      "target": "staff_root_p1_t6_s5_d2"
    },
    {
      "source": "staff_root",
      "target": "staff_root_p2"
    },
    {
      "source": "staff_root_p2",
      "target": "staff_root_p2_t1"
    },
    {
      "source": "staff_root_p2_t1",
      "target": "staff_root_p2_t1_s1"
    },
    {
      "source": "staff_root_p2_t1_s1",
      "target": "staff_root_p2_t1_s1_d1"
    },
    {
      "source": "staff_root_p2_t1_s1",
      "target": "staff_root_p2_t1_s1_d2"
    },
    {
      "source": "staff_root_p2_t1",
      "target": "staff_root_p2_t1_s2"
    },
    {
      "source": "staff_root_p2_t1_s2",
      "target": "staff_root_p2_t1_s2_d1"
    },
    {
      "source": "staff_root_p2_t1_s2",
      "target": "staff_root_p2_t1_s2_d2"
    },
    {
      "source": "staff_root_p2_t1",
      "target": "staff_root_p2_t1_s3"
    },
    {
      "source": "staff_root_p2_t1_s3",
      "target": "staff_root_p2_t1_s3_d1"
    },
    {
      "source": "staff_root_p2_t1_s3",
      "target": "staff_root_p2_t1_s3_d2"
    },
    {
      "source": "staff_root_p2_t1",
      "target": "staff_root_p2_t1_s4"
    },
    {
      "source": "staff_root_p2_t1_s4",
      "target": "staff_root_p2_t1_s4_d1"
    },
    {
      "source": "staff_root_p2_t1_s4",
      "target": "staff_root_p2_t1_s4_d2"
    },
    {
      "source": "staff_root_p2_t1",
      "target": "staff_root_p2_t1_s5"
    },
    {
      "source": "staff_root_p2_t1_s5",
      "target": "staff_root_p2_t1_s5_d1"
    },
    {
      "source": "staff_root_p2_t1_s5",
      "target": "staff_root_p2_t1_s5_d2"
    },
    {
      "source": "staff_root_p2",
      "target": "staff_root_p2_t2"
    },
    {
      "source": "staff_root_p2_t2",
      "target": "staff_root_p2_t2_s1"
    },
    {
      "source": "staff_root_p2_t2_s1",
      "target": "staff_root_p2_t2_s1_d1"
    },
    {
      "source": "staff_root_p2_t2_s1",
      "target": "staff_root_p2_t2_s1_d2"
    },
    {
      "source": "staff_root_p2_t2",
      "target": "staff_root_p2_t2_s2"
    },
    {
      "source": "staff_root_p2_t2_s2",
      "target": "staff_root_p2_t2_s2_d1"
    },
    {
      "source": "staff_root_p2_t2_s2",
      "target": "staff_root_p2_t2_s2_d2"
    },
    {
      "source": "staff_root_p2_t2",
      "target": "staff_root_p2_t2_s3"
    },
    {
      "source": "staff_root_p2_t2_s3",
      "target": "staff_root_p2_t2_s3_d1"
    },
    {
      "source": "staff_root_p2_t2_s3",
      "target": "staff_root_p2_t2_s3_d2"
    },
    {
      "source": "staff_root_p2_t2",
      "target": "staff_root_p2_t2_s4"
    },
    {
      "source": "staff_root_p2_t2_s4",
      "target": "staff_root_p2_t2_s4_d1"
    },
    {
      "source": "staff_root_p2_t2_s4",
      "target": "staff_root_p2_t2_s4_d2"
    },
    {
      "source": "staff_root_p2_t2",
      "target": "staff_root_p2_t2_s5"
    },
    {
      "source": "staff_root_p2_t2_s5",
      "target": "staff_root_p2_t2_s5_d1"
    },
    {
      "source": "staff_root_p2_t2_s5",
      "target": "staff_root_p2_t2_s5_d2"
    },
    {
      "source": "staff_root_p2",
      "target": "staff_root_p2_t3"
    },
    {
      "source": "staff_root_p2_t3",
      "target": "staff_root_p2_t3_s1"
    },
    {
      "source": "staff_root_p2_t3_s1",
      "target": "staff_root_p2_t3_s1_d1"
    },
    {
      "source": "staff_root_p2_t3_s1",
      "target": "staff_root_p2_t3_s1_d2"
    },
    {
      "source": "staff_root_p2_t3",
      "target": "staff_root_p2_t3_s2"
    },
    {
      "source": "staff_root_p2_t3_s2",
      "target": "staff_root_p2_t3_s2_d1"
    },
    {
      "source": "staff_root_p2_t3_s2",
      "target": "staff_root_p2_t3_s2_d2"
    },
    {
      "source": "staff_root_p2_t3",
      "target": "staff_root_p2_t3_s3"
    },
    {
      "source": "staff_root_p2_t3_s3",
      "target": "staff_root_p2_t3_s3_d1"
    },
    {
      "source": "staff_root_p2_t3_s3",
      "target": "staff_root_p2_t3_s3_d2"
    },
    {
      "source": "staff_root_p2_t3",
      "target": "staff_root_p2_t3_s4"
    },
    {
      "source": "staff_root_p2_t3_s4",
      "target": "staff_root_p2_t3_s4_d1"
    },
    {
      "source": "staff_root_p2_t3_s4",
      "target": "staff_root_p2_t3_s4_d2"
    },
    {
      "source": "staff_root_p2_t3",
      "target": "staff_root_p2_t3_s5"
    },
    {
      "source": "staff_root_p2_t3_s5",
      "target": "staff_root_p2_t3_s5_d1"
    },
    {
      "source": "staff_root_p2_t3_s5",
      "target": "staff_root_p2_t3_s5_d2"
    },
    {
      "source": "staff_root_p2",
      "target": "staff_root_p2_t4"
    },
    {
      "source": "staff_root_p2_t4",
      "target": "staff_root_p2_t4_s1"
    },
    {
      "source": "staff_root_p2_t4_s1",
      "target": "staff_root_p2_t4_s1_d1"
    },
    {
      "source": "staff_root_p2_t4_s1",
      "target": "staff_root_p2_t4_s1_d2"
    },
    {
      "source": "staff_root_p2_t4",
      "target": "staff_root_p2_t4_s2"
    },
    {
      "source": "staff_root_p2_t4_s2",
      "target": "staff_root_p2_t4_s2_d1"
    },
    {
      "source": "staff_root_p2_t4_s2",
      "target": "staff_root_p2_t4_s2_d2"
    },
    {
      "source": "staff_root_p2_t4",
      "target": "staff_root_p2_t4_s3"
    },
    {
      "source": "staff_root_p2_t4_s3",
      "target": "staff_root_p2_t4_s3_d1"
    },
    {
      "source": "staff_root_p2_t4_s3",
      "target": "staff_root_p2_t4_s3_d2"
    },
    {
      "source": "staff_root_p2_t4",
      "target": "staff_root_p2_t4_s4"
    },
    {
      "source": "staff_root_p2_t4_s4",
      "target": "staff_root_p2_t4_s4_d1"
    },
    {
      "source": "staff_root_p2_t4_s4",
      "target": "staff_root_p2_t4_s4_d2"
    },
    {
      "source": "staff_root_p2_t4",
      "target": "staff_root_p2_t4_s5"
    },
    {
      "source": "staff_root_p2_t4_s5",
      "target": "staff_root_p2_t4_s5_d1"
    },
    {
      "source": "staff_root_p2_t4_s5",
      "target": "staff_root_p2_t4_s5_d2"
    },
    {
      "source": "staff_root_p2",
      "target": "staff_root_p2_t5"
    },
    {
      "source": "staff_root_p2_t5",
      "target": "staff_root_p2_t5_s1"
    },
    {
      "source": "staff_root_p2_t5_s1",
      "target": "staff_root_p2_t5_s1_d1"
    },
    {
      "source": "staff_root_p2_t5_s1",
      "target": "staff_root_p2_t5_s1_d2"
    },
    {
      "source": "staff_root_p2_t5",
      "target": "staff_root_p2_t5_s2"
    },
    {
      "source": "staff_root_p2_t5_s2",
      "target": "staff_root_p2_t5_s2_d1"
    },
    {
      "source": "staff_root_p2_t5_s2",
      "target": "staff_root_p2_t5_s2_d2"
    },
    {
      "source": "staff_root_p2_t5",
      "target": "staff_root_p2_t5_s3"
    },
    {
      "source": "staff_root_p2_t5_s3",
      "target": "staff_root_p2_t5_s3_d1"
    },
    {
      "source": "staff_root_p2_t5_s3",
      "target": "staff_root_p2_t5_s3_d2"
    },
    {
      "source": "staff_root_p2_t5",
      "target": "staff_root_p2_t5_s4"
    },
    {
      "source": "staff_root_p2_t5_s4",
      "target": "staff_root_p2_t5_s4_d1"
    },
    {
      "source": "staff_root_p2_t5_s4",
      "target": "staff_root_p2_t5_s4_d2"
    },
    {
      "source": "staff_root_p2_t5",
      "target": "staff_root_p2_t5_s5"
    },
    {
      "source": "staff_root_p2_t5_s5",
      "target": "staff_root_p2_t5_s5_d1"
    },
    {
      "source": "staff_root_p2_t5_s5",
      "target": "staff_root_p2_t5_s5_d2"
    },
    {
      "source": "staff_root_p2",
      "target": "staff_root_p2_t6"
    },
    {
      "source": "staff_root_p2_t6",
      "target": "staff_root_p2_t6_s1"
    },
    {
      "source": "staff_root_p2_t6_s1",
      "target": "staff_root_p2_t6_s1_d1"
    },
    {
      "source": "staff_root_p2_t6_s1",
      "target": "staff_root_p2_t6_s1_d2"
    },
    {
      "source": "staff_root_p2_t6",
      "target": "staff_root_p2_t6_s2"
    },
    {
      "source": "staff_root_p2_t6_s2",
      "target": "staff_root_p2_t6_s2_d1"
    },
    {
      "source": "staff_root_p2_t6_s2",
      "target": "staff_root_p2_t6_s2_d2"
    },
    {
      "source": "staff_root_p2_t6",
      "target": "staff_root_p2_t6_s3"
    },
    {
      "source": "staff_root_p2_t6_s3",
      "target": "staff_root_p2_t6_s3_d1"
    },
    {
      "source": "staff_root_p2_t6_s3",
      "target": "staff_root_p2_t6_s3_d2"
    },
    {
      "source": "staff_root_p2_t6",
      "target": "staff_root_p2_t6_s4"
    },
    {
      "source": "staff_root_p2_t6_s4",
      "target": "staff_root_p2_t6_s4_d1"
    },
    {
      "source": "staff_root_p2_t6_s4",
      "target": "staff_root_p2_t6_s4_d2"
    },
    {
      "source": "staff_root_p2_t6",
      "target": "staff_root_p2_t6_s5"
    },
    {
      "source": "staff_root_p2_t6_s5",
      "target": "staff_root_p2_t6_s5_d1"
    },
    {
      "source": "staff_root_p2_t6_s5",
      "target": "staff_root_p2_t6_s5_d2"
    },
    {
      "source": "staff_root",
      "target": "staff_root_p3"
    },
    {
      "source": "staff_root_p3",
      "target": "staff_root_p3_t1"
    },
    {
      "source": "staff_root_p3_t1",
      "target": "staff_root_p3_t1_s1"
    },
    {
      "source": "staff_root_p3_t1_s1",
      "target": "staff_root_p3_t1_s1_d1"
    },
    {
      "source": "staff_root_p3_t1_s1",
      "target": "staff_root_p3_t1_s1_d2"
    },
    {
      "source": "staff_root_p3_t1",
      "target": "staff_root_p3_t1_s2"
    },
    {
      "source": "staff_root_p3_t1_s2",
      "target": "staff_root_p3_t1_s2_d1"
    },
    {
      "source": "staff_root_p3_t1_s2",
      "target": "staff_root_p3_t1_s2_d2"
    },
    {
      "source": "staff_root_p3_t1",
      "target": "staff_root_p3_t1_s3"
    },
    {
      "source": "staff_root_p3_t1_s3",
      "target": "staff_root_p3_t1_s3_d1"
    },
    {
      "source": "staff_root_p3_t1_s3",
      "target": "staff_root_p3_t1_s3_d2"
    },
    {
      "source": "staff_root_p3_t1",
      "target": "staff_root_p3_t1_s4"
    },
    {
      "source": "staff_root_p3_t1_s4",
      "target": "staff_root_p3_t1_s4_d1"
    },
    {
      "source": "staff_root_p3_t1_s4",
      "target": "staff_root_p3_t1_s4_d2"
    },
    {
      "source": "staff_root_p3_t1",
      "target": "staff_root_p3_t1_s5"
    },
    {
      "source": "staff_root_p3_t1_s5",
      "target": "staff_root_p3_t1_s5_d1"
    },
    {
      "source": "staff_root_p3_t1_s5",
      "target": "staff_root_p3_t1_s5_d2"
    },
    {
      "source": "staff_root_p3",
      "target": "staff_root_p3_t2"
    },
    {
      "source": "staff_root_p3_t2",
      "target": "staff_root_p3_t2_s1"
    },
    {
      "source": "staff_root_p3_t2_s1",
      "target": "staff_root_p3_t2_s1_d1"
    },
    {
      "source": "staff_root_p3_t2_s1",
      "target": "staff_root_p3_t2_s1_d2"
    },
    {
      "source": "staff_root_p3_t2",
      "target": "staff_root_p3_t2_s2"
    },
    {
      "source": "staff_root_p3_t2_s2",
      "target": "staff_root_p3_t2_s2_d1"
    },
    {
      "source": "staff_root_p3_t2_s2",
      "target": "staff_root_p3_t2_s2_d2"
    },
    {
      "source": "staff_root_p3_t2",
      "target": "staff_root_p3_t2_s3"
    },
    {
      "source": "staff_root_p3_t2_s3",
      "target": "staff_root_p3_t2_s3_d1"
    },
    {
      "source": "staff_root_p3_t2_s3",
      "target": "staff_root_p3_t2_s3_d2"
    },
    {
      "source": "staff_root_p3_t2",
      "target": "staff_root_p3_t2_s4"
    },
    {
      "source": "staff_root_p3_t2_s4",
      "target": "staff_root_p3_t2_s4_d1"
    },
    {
      "source": "staff_root_p3_t2_s4",
      "target": "staff_root_p3_t2_s4_d2"
    },
    {
      "source": "staff_root_p3_t2",
      "target": "staff_root_p3_t2_s5"
    },
    {
      "source": "staff_root_p3_t2_s5",
      "target": "staff_root_p3_t2_s5_d1"
    },
    {
      "source": "staff_root_p3_t2_s5",
      "target": "staff_root_p3_t2_s5_d2"
    },
    {
      "source": "staff_root_p3",
      "target": "staff_root_p3_t3"
    },
    {
      "source": "staff_root_p3_t3",
      "target": "staff_root_p3_t3_s1"
    },
    {
      "source": "staff_root_p3_t3_s1",
      "target": "staff_root_p3_t3_s1_d1"
    },
    {
      "source": "staff_root_p3_t3_s1",
      "target": "staff_root_p3_t3_s1_d2"
    },
    {
      "source": "staff_root_p3_t3",
      "target": "staff_root_p3_t3_s2"
    },
    {
      "source": "staff_root_p3_t3_s2",
      "target": "staff_root_p3_t3_s2_d1"
    },
    {
      "source": "staff_root_p3_t3_s2",
      "target": "staff_root_p3_t3_s2_d2"
    },
    {
      "source": "staff_root_p3_t3",
      "target": "staff_root_p3_t3_s3"
    },
    {
      "source": "staff_root_p3_t3_s3",
      "target": "staff_root_p3_t3_s3_d1"
    },
    {
      "source": "staff_root_p3_t3_s3",
      "target": "staff_root_p3_t3_s3_d2"
    },
    {
      "source": "staff_root_p3_t3",
      "target": "staff_root_p3_t3_s4"
    },
    {
      "source": "staff_root_p3_t3_s4",
      "target": "staff_root_p3_t3_s4_d1"
    },
    {
      "source": "staff_root_p3_t3_s4",
      "target": "staff_root_p3_t3_s4_d2"
    },
    {
      "source": "staff_root_p3_t3",
      "target": "staff_root_p3_t3_s5"
    },
    {
      "source": "staff_root_p3_t3_s5",
      "target": "staff_root_p3_t3_s5_d1"
    },
    {
      "source": "staff_root_p3_t3_s5",
      "target": "staff_root_p3_t3_s5_d2"
    },
    {
      "source": "staff_root_p3",
      "target": "staff_root_p3_t4"
    },
    {
      "source": "staff_root_p3_t4",
      "target": "staff_root_p3_t4_s1"
    },
    {
      "source": "staff_root_p3_t4_s1",
      "target": "staff_root_p3_t4_s1_d1"
    },
    {
      "source": "staff_root_p3_t4_s1",
      "target": "staff_root_p3_t4_s1_d2"
    },
    {
      "source": "staff_root_p3_t4",
      "target": "staff_root_p3_t4_s2"
    },
    {
      "source": "staff_root_p3_t4_s2",
      "target": "staff_root_p3_t4_s2_d1"
    },
    {
      "source": "staff_root_p3_t4_s2",
      "target": "staff_root_p3_t4_s2_d2"
    },
    {
      "source": "staff_root_p3_t4",
      "target": "staff_root_p3_t4_s3"
    },
    {
      "source": "staff_root_p3_t4_s3",
      "target": "staff_root_p3_t4_s3_d1"
    },
    {
      "source": "staff_root_p3_t4_s3",
      "target": "staff_root_p3_t4_s3_d2"
    },
    {
      "source": "staff_root_p3_t4",
      "target": "staff_root_p3_t4_s4"
    },
    {
      "source": "staff_root_p3_t4_s4",
      "target": "staff_root_p3_t4_s4_d1"
    },
    {
      "source": "staff_root_p3_t4_s4",
      "target": "staff_root_p3_t4_s4_d2"
    },
    {
      "source": "staff_root_p3_t4",
      "target": "staff_root_p3_t4_s5"
    },
    {
      "source": "staff_root_p3_t4_s5",
      "target": "staff_root_p3_t4_s5_d1"
    },
    {
      "source": "staff_root_p3_t4_s5",
      "target": "staff_root_p3_t4_s5_d2"
    },
    {
      "source": "staff_root_p3",
      "target": "staff_root_p3_t5"
    },
    {
      "source": "staff_root_p3_t5",
      "target": "staff_root_p3_t5_s1"
    },
    {
      "source": "staff_root_p3_t5_s1",
      "target": "staff_root_p3_t5_s1_d1"
    },
    {
      "source": "staff_root_p3_t5_s1",
      "target": "staff_root_p3_t5_s1_d2"
    },
    {
      "source": "staff_root_p3_t5",
      "target": "staff_root_p3_t5_s2"
    },
    {
      "source": "staff_root_p3_t5_s2",
      "target": "staff_root_p3_t5_s2_d1"
    },
    {
      "source": "staff_root_p3_t5_s2",
      "target": "staff_root_p3_t5_s2_d2"
    },
    {
      "source": "staff_root_p3_t5",
      "target": "staff_root_p3_t5_s3"
    },
    {
      "source": "staff_root_p3_t5_s3",
      "target": "staff_root_p3_t5_s3_d1"
    },
    {
      "source": "staff_root_p3_t5_s3",
      "target": "staff_root_p3_t5_s3_d2"
    },
    {
      "source": "staff_root_p3_t5",
      "target": "staff_root_p3_t5_s4"
    },
    {
      "source": "staff_root_p3_t5_s4",
      "target": "staff_root_p3_t5_s4_d1"
    },
    {
      "source": "staff_root_p3_t5_s4",
      "target": "staff_root_p3_t5_s4_d2"
    },
    {
      "source": "staff_root_p3_t5",
      "target": "staff_root_p3_t5_s5"
    },
    {
      "source": "staff_root_p3_t5_s5",
      "target": "staff_root_p3_t5_s5_d1"
    },
    {
      "source": "staff_root_p3_t5_s5",
      "target": "staff_root_p3_t5_s5_d2"
    },
    {
      "source": "staff_root_p3",
      "target": "staff_root_p3_t6"
    },
    {
      "source": "staff_root_p3_t6",
      "target": "staff_root_p3_t6_s1"
    },
    {
      "source": "staff_root_p3_t6_s1",
      "target": "staff_root_p3_t6_s1_d1"
    },
    {
      "source": "staff_root_p3_t6_s1",
      "target": "staff_root_p3_t6_s1_d2"
    },
    {
      "source": "staff_root_p3_t6",
      "target": "staff_root_p3_t6_s2"
    },
    {
      "source": "staff_root_p3_t6_s2",
      "target": "staff_root_p3_t6_s2_d1"
    },
    {
      "source": "staff_root_p3_t6_s2",
      "target": "staff_root_p3_t6_s2_d2"
    },
    {
      "source": "staff_root_p3_t6",
      "target": "staff_root_p3_t6_s3"
    },
    {
      "source": "staff_root_p3_t6_s3",
      "target": "staff_root_p3_t6_s3_d1"
    },
    {
      "source": "staff_root_p3_t6_s3",
      "target": "staff_root_p3_t6_s3_d2"
    },
    {
      "source": "staff_root_p3_t6",
      "target": "staff_root_p3_t6_s4"
    },
    {
      "source": "staff_root_p3_t6_s4",
      "target": "staff_root_p3_t6_s4_d1"
    },
    {
      "source": "staff_root_p3_t6_s4",
      "target": "staff_root_p3_t6_s4_d2"
    },
    {
      "source": "staff_root_p3_t6",
      "target": "staff_root_p3_t6_s5"
    },
    {
      "source": "staff_root_p3_t6_s5",
      "target": "staff_root_p3_t6_s5_d1"
    },
    {
      "source": "staff_root_p3_t6_s5",
      "target": "staff_root_p3_t6_s5_d2"
    },
    {
      "source": "staff_root",
      "target": "staff_root_p4"
    },
    {
      "source": "staff_root_p4",
      "target": "staff_root_p4_t1"
    },
    {
      "source": "staff_root_p4_t1",
      "target": "staff_root_p4_t1_s1"
    },
    {
      "source": "staff_root_p4_t1_s1",
      "target": "staff_root_p4_t1_s1_d1"
    },
    {
      "source": "staff_root_p4_t1_s1",
      "target": "staff_root_p4_t1_s1_d2"
    },
    {
      "source": "staff_root_p4_t1",
      "target": "staff_root_p4_t1_s2"
    },
    {
      "source": "staff_root_p4_t1_s2",
      "target": "staff_root_p4_t1_s2_d1"
    },
    {
      "source": "staff_root_p4_t1_s2",
      "target": "staff_root_p4_t1_s2_d2"
    },
    {
      "source": "staff_root_p4_t1",
      "target": "staff_root_p4_t1_s3"
    },
    {
      "source": "staff_root_p4_t1_s3",
      "target": "staff_root_p4_t1_s3_d1"
    },
    {
      "source": "staff_root_p4_t1_s3",
      "target": "staff_root_p4_t1_s3_d2"
    },
    {
      "source": "staff_root_p4_t1",
      "target": "staff_root_p4_t1_s4"
    },
    {
      "source": "staff_root_p4_t1_s4",
      "target": "staff_root_p4_t1_s4_d1"
    },
    {
      "source": "staff_root_p4_t1_s4",
      "target": "staff_root_p4_t1_s4_d2"
    },
    {
      "source": "staff_root_p4_t1",
      "target": "staff_root_p4_t1_s5"
    },
    {
      "source": "staff_root_p4_t1_s5",
      "target": "staff_root_p4_t1_s5_d1"
    },
    {
      "source": "staff_root_p4_t1_s5",
      "target": "staff_root_p4_t1_s5_d2"
    },
    {
      "source": "staff_root_p4",
      "target": "staff_root_p4_t2"
    },
    {
      "source": "staff_root_p4_t2",
      "target": "staff_root_p4_t2_s1"
    },
    {
      "source": "staff_root_p4_t2_s1",
      "target": "staff_root_p4_t2_s1_d1"
    },
    {
      "source": "staff_root_p4_t2_s1",
      "target": "staff_root_p4_t2_s1_d2"
    },
    {
      "source": "staff_root_p4_t2",
      "target": "staff_root_p4_t2_s2"
    },
    {
      "source": "staff_root_p4_t2_s2",
      "target": "staff_root_p4_t2_s2_d1"
    },
    {
      "source": "staff_root_p4_t2_s2",
      "target": "staff_root_p4_t2_s2_d2"
    },
    {
      "source": "staff_root_p4_t2",
      "target": "staff_root_p4_t2_s3"
    },
    {
      "source": "staff_root_p4_t2_s3",
      "target": "staff_root_p4_t2_s3_d1"
    },
    {
      "source": "staff_root_p4_t2_s3",
      "target": "staff_root_p4_t2_s3_d2"
    },
    {
      "source": "staff_root_p4_t2",
      "target": "staff_root_p4_t2_s4"
    },
    {
      "source": "staff_root_p4_t2_s4",
      "target": "staff_root_p4_t2_s4_d1"
    },
    {
      "source": "staff_root_p4_t2_s4",
      "target": "staff_root_p4_t2_s4_d2"
    },
    {
      "source": "staff_root_p4_t2",
      "target": "staff_root_p4_t2_s5"
    },
    {
      "source": "staff_root_p4_t2_s5",
      "target": "staff_root_p4_t2_s5_d1"
    },
    {
      "source": "staff_root_p4_t2_s5",
      "target": "staff_root_p4_t2_s5_d2"
    },
    {
      "source": "staff_root_p4",
      "target": "staff_root_p4_t3"
    },
    {
      "source": "staff_root_p4_t3",
      "target": "staff_root_p4_t3_s1"
    },
    {
      "source": "staff_root_p4_t3_s1",
      "target": "staff_root_p4_t3_s1_d1"
    },
    {
      "source": "staff_root_p4_t3_s1",
      "target": "staff_root_p4_t3_s1_d2"
    },
    {
      "source": "staff_root_p4_t3",
      "target": "staff_root_p4_t3_s2"
    },
    {
      "source": "staff_root_p4_t3_s2",
      "target": "staff_root_p4_t3_s2_d1"
    },
    {
      "source": "staff_root_p4_t3_s2",
      "target": "staff_root_p4_t3_s2_d2"
    },
    {
      "source": "staff_root_p4_t3",
      "target": "staff_root_p4_t3_s3"
    },
    {
      "source": "staff_root_p4_t3_s3",
      "target": "staff_root_p4_t3_s3_d1"
    },
    {
      "source": "staff_root_p4_t3_s3",
      "target": "staff_root_p4_t3_s3_d2"
    },
    {
      "source": "staff_root_p4_t3",
      "target": "staff_root_p4_t3_s4"
    },
    {
      "source": "staff_root_p4_t3_s4",
      "target": "staff_root_p4_t3_s4_d1"
    },
    {
      "source": "staff_root_p4_t3_s4",
      "target": "staff_root_p4_t3_s4_d2"
    },
    {
      "source": "staff_root_p4_t3",
      "target": "staff_root_p4_t3_s5"
    },
    {
      "source": "staff_root_p4_t3_s5",
      "target": "staff_root_p4_t3_s5_d1"
    },
    {
      "source": "staff_root_p4_t3_s5",
      "target": "staff_root_p4_t3_s5_d2"
    },
    {
      "source": "staff_root_p4",
      "target": "staff_root_p4_t4"
    },
    {
      "source": "staff_root_p4_t4",
      "target": "staff_root_p4_t4_s1"
    },
    {
      "source": "staff_root_p4_t4_s1",
      "target": "staff_root_p4_t4_s1_d1"
    },
    {
      "source": "staff_root_p4_t4_s1",
      "target": "staff_root_p4_t4_s1_d2"
    },
    {
      "source": "staff_root_p4_t4",
      "target": "staff_root_p4_t4_s2"
    },
    {
      "source": "staff_root_p4_t4_s2",
      "target": "staff_root_p4_t4_s2_d1"
    },
    {
      "source": "staff_root_p4_t4_s2",
      "target": "staff_root_p4_t4_s2_d2"
    },
    {
      "source": "staff_root_p4_t4",
      "target": "staff_root_p4_t4_s3"
    },
    {
      "source": "staff_root_p4_t4_s3",
      "target": "staff_root_p4_t4_s3_d1"
    },
    {
      "source": "staff_root_p4_t4_s3",
      "target": "staff_root_p4_t4_s3_d2"
    },
    {
      "source": "staff_root_p4_t4",
      "target": "staff_root_p4_t4_s4"
    },
    {
      "source": "staff_root_p4_t4_s4",
      "target": "staff_root_p4_t4_s4_d1"
    },
    {
      "source": "staff_root_p4_t4_s4",
      "target": "staff_root_p4_t4_s4_d2"
    },
    {
      "source": "staff_root_p4_t4",
      "target": "staff_root_p4_t4_s5"
    },
    {
      "source": "staff_root_p4_t4_s5",
      "target": "staff_root_p4_t4_s5_d1"
    },
    {
      "source": "staff_root_p4_t4_s5",
      "target": "staff_root_p4_t4_s5_d2"
    },
    {
      "source": "staff_root_p4",
      "target": "staff_root_p4_t5"
    },
    {
      "source": "staff_root_p4_t5",
      "target": "staff_root_p4_t5_s1"
    },
    {
      "source": "staff_root_p4_t5_s1",
      "target": "staff_root_p4_t5_s1_d1"
    },
    {
      "source": "staff_root_p4_t5_s1",
      "target": "staff_root_p4_t5_s1_d2"
    },
    {
      "source": "staff_root_p4_t5",
      "target": "staff_root_p4_t5_s2"
    },
    {
      "source": "staff_root_p4_t5_s2",
      "target": "staff_root_p4_t5_s2_d1"
    },
    {
      "source": "staff_root_p4_t5_s2",
      "target": "staff_root_p4_t5_s2_d2"
    },
    {
      "source": "staff_root_p4_t5",
      "target": "staff_root_p4_t5_s3"
    },
    {
      "source": "staff_root_p4_t5_s3",
      "target": "staff_root_p4_t5_s3_d1"
    },
    {
      "source": "staff_root_p4_t5_s3",
      "target": "staff_root_p4_t5_s3_d2"
    },
    {
      "source": "staff_root_p4_t5",
      "target": "staff_root_p4_t5_s4"
    },
    {
      "source": "staff_root_p4_t5_s4",
      "target": "staff_root_p4_t5_s4_d1"
    },
    {
      "source": "staff_root_p4_t5_s4",
      "target": "staff_root_p4_t5_s4_d2"
    },
    {
      "source": "staff_root_p4_t5",
      "target": "staff_root_p4_t5_s5"
    },
    {
      "source": "staff_root_p4_t5_s5",
      "target": "staff_root_p4_t5_s5_d1"
    },
    {
      "source": "staff_root_p4_t5_s5",
      "target": "staff_root_p4_t5_s5_d2"
    },
    {
      "source": "staff_root_p4",
      "target": "staff_root_p4_t6"
    },
    {
      "source": "staff_root_p4_t6",
      "target": "staff_root_p4_t6_s1"
    },
    {
      "source": "staff_root_p4_t6_s1",
      "target": "staff_root_p4_t6_s1_d1"
    },
    {
      "source": "staff_root_p4_t6_s1",
      "target": "staff_root_p4_t6_s1_d2"
    },
    {
      "source": "staff_root_p4_t6",
      "target": "staff_root_p4_t6_s2"
    },
    {
      "source": "staff_root_p4_t6_s2",
      "target": "staff_root_p4_t6_s2_d1"
    },
    {
      "source": "staff_root_p4_t6_s2",
      "target": "staff_root_p4_t6_s2_d2"
    },
    {
      "source": "staff_root_p4_t6",
      "target": "staff_root_p4_t6_s3"
    },
    {
      "source": "staff_root_p4_t6_s3",
      "target": "staff_root_p4_t6_s3_d1"
    },
    {
      "source": "staff_root_p4_t6_s3",
      "target": "staff_root_p4_t6_s3_d2"
    },
    {
      "source": "staff_root_p4_t6",
      "target": "staff_root_p4_t6_s4"
    },
    {
      "source": "staff_root_p4_t6_s4",
      "target": "staff_root_p4_t6_s4_d1"
    },
    {
      "source": "staff_root_p4_t6_s4",
      "target": "staff_root_p4_t6_s4_d2"
    },
    {
      "source": "staff_root_p4_t6",
      "target": "staff_root_p4_t6_s5"
    },
    {
      "source": "staff_root_p4_t6_s5",
      "target": "staff_root_p4_t6_s5_d1"
    },
    {
      "source": "staff_root_p4_t6_s5",
      "target": "staff_root_p4_t6_s5_d2"
    },
    {
      "source": "staff_root",
      "target": "staff_root_p5"
    },
    {
      "source": "staff_root_p5",
      "target": "staff_root_p5_t1"
    },
    {
      "source": "staff_root_p5_t1",
      "target": "staff_root_p5_t1_s1"
    },
    {
      "source": "staff_root_p5_t1_s1",
      "target": "staff_root_p5_t1_s1_d1"
    },
    {
      "source": "staff_root_p5_t1_s1",
      "target": "staff_root_p5_t1_s1_d2"
    },
    {
      "source": "staff_root_p5_t1",
      "target": "staff_root_p5_t1_s2"
    },
    {
      "source": "staff_root_p5_t1_s2",
      "target": "staff_root_p5_t1_s2_d1"
    },
    {
      "source": "staff_root_p5_t1_s2",
      "target": "staff_root_p5_t1_s2_d2"
    },
    {
      "source": "staff_root_p5_t1",
      "target": "staff_root_p5_t1_s3"
    },
    {
      "source": "staff_root_p5_t1_s3",
      "target": "staff_root_p5_t1_s3_d1"
    },
    {
      "source": "staff_root_p5_t1_s3",
      "target": "staff_root_p5_t1_s3_d2"
    },
    {
      "source": "staff_root_p5_t1",
      "target": "staff_root_p5_t1_s4"
    },
    {
      "source": "staff_root_p5_t1_s4",
      "target": "staff_root_p5_t1_s4_d1"
    },
    {
      "source": "staff_root_p5_t1_s4",
      "target": "staff_root_p5_t1_s4_d2"
    },
    {
      "source": "staff_root_p5_t1",
      "target": "staff_root_p5_t1_s5"
    },
    {
      "source": "staff_root_p5_t1_s5",
      "target": "staff_root_p5_t1_s5_d1"
    },
    {
      "source": "staff_root_p5_t1_s5",
      "target": "staff_root_p5_t1_s5_d2"
    },
    {
      "source": "staff_root_p5",
      "target": "staff_root_p5_t2"
    },
    {
      "source": "staff_root_p5_t2",
      "target": "staff_root_p5_t2_s1"
    },
    {
      "source": "staff_root_p5_t2_s1",
      "target": "staff_root_p5_t2_s1_d1"
    },
    {
      "source": "staff_root_p5_t2_s1",
      "target": "staff_root_p5_t2_s1_d2"
    },
    {
      "source": "staff_root_p5_t2",
      "target": "staff_root_p5_t2_s2"
    },
    {
      "source": "staff_root_p5_t2_s2",
      "target": "staff_root_p5_t2_s2_d1"
    },
    {
      "source": "staff_root_p5_t2_s2",
      "target": "staff_root_p5_t2_s2_d2"
    },
    {
      "source": "staff_root_p5_t2",
      "target": "staff_root_p5_t2_s3"
    },
    {
      "source": "staff_root_p5_t2_s3",
      "target": "staff_root_p5_t2_s3_d1"
    },
    {
      "source": "staff_root_p5_t2_s3",
      "target": "staff_root_p5_t2_s3_d2"
    },
    {
      "source": "staff_root_p5_t2",
      "target": "staff_root_p5_t2_s4"
    },
    {
      "source": "staff_root_p5_t2_s4",
      "target": "staff_root_p5_t2_s4_d1"
    },
    {
      "source": "staff_root_p5_t2_s4",
      "target": "staff_root_p5_t2_s4_d2"
    },
    {
      "source": "staff_root_p5_t2",
      "target": "staff_root_p5_t2_s5"
    },
    {
      "source": "staff_root_p5_t2_s5",
      "target": "staff_root_p5_t2_s5_d1"
    },
    {
      "source": "staff_root_p5_t2_s5",
      "target": "staff_root_p5_t2_s5_d2"
    },
    {
      "source": "staff_root_p5",
      "target": "staff_root_p5_t3"
    },
    {
      "source": "staff_root_p5_t3",
      "target": "staff_root_p5_t3_s1"
    },
    {
      "source": "staff_root_p5_t3_s1",
      "target": "staff_root_p5_t3_s1_d1"
    },
    {
      "source": "staff_root_p5_t3_s1",
      "target": "staff_root_p5_t3_s1_d2"
    },
    {
      "source": "staff_root_p5_t3",
      "target": "staff_root_p5_t3_s2"
    },
    {
      "source": "staff_root_p5_t3_s2",
      "target": "staff_root_p5_t3_s2_d1"
    },
    {
      "source": "staff_root_p5_t3_s2",
      "target": "staff_root_p5_t3_s2_d2"
    },
    {
      "source": "staff_root_p5_t3",
      "target": "staff_root_p5_t3_s3"
    },
    {
      "source": "staff_root_p5_t3_s3",
      "target": "staff_root_p5_t3_s3_d1"
    },
    {
      "source": "staff_root_p5_t3_s3",
      "target": "staff_root_p5_t3_s3_d2"
    },
    {
      "source": "staff_root_p5_t3",
      "target": "staff_root_p5_t3_s4"
    },
    {
      "source": "staff_root_p5_t3_s4",
      "target": "staff_root_p5_t3_s4_d1"
    },
    {
      "source": "staff_root_p5_t3_s4",
      "target": "staff_root_p5_t3_s4_d2"
    },
    {
      "source": "staff_root_p5_t3",
      "target": "staff_root_p5_t3_s5"
    },
    {
      "source": "staff_root_p5_t3_s5",
      "target": "staff_root_p5_t3_s5_d1"
    },
    {
      "source": "staff_root_p5_t3_s5",
      "target": "staff_root_p5_t3_s5_d2"
    },
    {
      "source": "staff_root_p5",
      "target": "staff_root_p5_t4"
    },
    {
      "source": "staff_root_p5_t4",
      "target": "staff_root_p5_t4_s1"
    },
    {
      "source": "staff_root_p5_t4_s1",
      "target": "staff_root_p5_t4_s1_d1"
    },
    {
      "source": "staff_root_p5_t4_s1",
      "target": "staff_root_p5_t4_s1_d2"
    },
    {
      "source": "staff_root_p5_t4",
      "target": "staff_root_p5_t4_s2"
    },
    {
      "source": "staff_root_p5_t4_s2",
      "target": "staff_root_p5_t4_s2_d1"
    },
    {
      "source": "staff_root_p5_t4_s2",
      "target": "staff_root_p5_t4_s2_d2"
    },
    {
      "source": "staff_root_p5_t4",
      "target": "staff_root_p5_t4_s3"
    },
    {
      "source": "staff_root_p5_t4_s3",
      "target": "staff_root_p5_t4_s3_d1"
    },
    {
      "source": "staff_root_p5_t4_s3",
      "target": "staff_root_p5_t4_s3_d2"
    },
    {
      "source": "staff_root_p5_t4",
      "target": "staff_root_p5_t4_s4"
    },
    {
      "source": "staff_root_p5_t4_s4",
      "target": "staff_root_p5_t4_s4_d1"
    },
    {
      "source": "staff_root_p5_t4_s4",
      "target": "staff_root_p5_t4_s4_d2"
    },
    {
      "source": "staff_root_p5_t4",
      "target": "staff_root_p5_t4_s5"
    },
    {
      "source": "staff_root_p5_t4_s5",
      "target": "staff_root_p5_t4_s5_d1"
    },
    {
      "source": "staff_root_p5_t4_s5",
      "target": "staff_root_p5_t4_s5_d2"
    },
    {
      "source": "staff_root_p5",
      "target": "staff_root_p5_t5"
    },
    {
      "source": "staff_root_p5_t5",
      "target": "staff_root_p5_t5_s1"
    },
    {
      "source": "staff_root_p5_t5_s1",
      "target": "staff_root_p5_t5_s1_d1"
    },
    {
      "source": "staff_root_p5_t5_s1",
      "target": "staff_root_p5_t5_s1_d2"
    },
    {
      "source": "staff_root_p5_t5",
      "target": "staff_root_p5_t5_s2"
    },
    {
      "source": "staff_root_p5_t5_s2",
      "target": "staff_root_p5_t5_s2_d1"
    },
    {
      "source": "staff_root_p5_t5_s2",
      "target": "staff_root_p5_t5_s2_d2"
    },
    {
      "source": "staff_root_p5_t5",
      "target": "staff_root_p5_t5_s3"
    },
    {
      "source": "staff_root_p5_t5_s3",
      "target": "staff_root_p5_t5_s3_d1"
    },
    {
      "source": "staff_root_p5_t5_s3",
      "target": "staff_root_p5_t5_s3_d2"
    },
    {
      "source": "staff_root_p5_t5",
      "target": "staff_root_p5_t5_s4"
    },
    {
      "source": "staff_root_p5_t5_s4",
      "target": "staff_root_p5_t5_s4_d1"
    },
    {
      "source": "staff_root_p5_t5_s4",
      "target": "staff_root_p5_t5_s4_d2"
    },
    {
      "source": "staff_root_p5_t5",
      "target": "staff_root_p5_t5_s5"
    },
    {
      "source": "staff_root_p5_t5_s5",
      "target": "staff_root_p5_t5_s5_d1"
    },
    {
      "source": "staff_root_p5_t5_s5",
      "target": "staff_root_p5_t5_s5_d2"
    },
    {
      "source": "staff_root_p5",
      "target": "staff_root_p5_t6"
    },
    {
      "source": "staff_root_p5_t6",
      "target": "staff_root_p5_t6_s1"
    },
    {
      "source": "staff_root_p5_t6_s1",
      "target": "staff_root_p5_t6_s1_d1"
    },
    {
      "source": "staff_root_p5_t6_s1",
      "target": "staff_root_p5_t6_s1_d2"
    },
    {
      "source": "staff_root_p5_t6",
      "target": "staff_root_p5_t6_s2"
    },
    {
      "source": "staff_root_p5_t6_s2",
      "target": "staff_root_p5_t6_s2_d1"
    },
    {
      "source": "staff_root_p5_t6_s2",
      "target": "staff_root_p5_t6_s2_d2"
    },
    {
      "source": "staff_root_p5_t6",
      "target": "staff_root_p5_t6_s3"
    },
    {
      "source": "staff_root_p5_t6_s3",
      "target": "staff_root_p5_t6_s3_d1"
    },
    {
      "source": "staff_root_p5_t6_s3",
      "target": "staff_root_p5_t6_s3_d2"
    },
    {
      "source": "staff_root_p5_t6",
      "target": "staff_root_p5_t6_s4"
    },
    {
      "source": "staff_root_p5_t6_s4",
      "target": "staff_root_p5_t6_s4_d1"
    },
    {
      "source": "staff_root_p5_t6_s4",
      "target": "staff_root_p5_t6_s4_d2"
    },
    {
      "source": "staff_root_p5_t6",
      "target": "staff_root_p5_t6_s5"
    },
    {
      "source": "staff_root_p5_t6_s5",
      "target": "staff_root_p5_t6_s5_d1"
    },
    {
      "source": "staff_root_p5_t6_s5",
      "target": "staff_root_p5_t6_s5_d2"
    },
    {
      "source": "staff_root",
      "target": "staff_root_p6"
    },
    {
      "source": "staff_root_p6",
      "target": "staff_root_p6_t1"
    },
    {
      "source": "staff_root_p6_t1",
      "target": "staff_root_p6_t1_s1"
    },
    {
      "source": "staff_root_p6_t1_s1",
      "target": "staff_root_p6_t1_s1_d1"
    },
    {
      "source": "staff_root_p6_t1_s1",
      "target": "staff_root_p6_t1_s1_d2"
    },
    {
      "source": "staff_root_p6_t1",
      "target": "staff_root_p6_t1_s2"
    },
    {
      "source": "staff_root_p6_t1_s2",
      "target": "staff_root_p6_t1_s2_d1"
    },
    {
      "source": "staff_root_p6_t1_s2",
      "target": "staff_root_p6_t1_s2_d2"
    },
    {
      "source": "staff_root_p6_t1",
      "target": "staff_root_p6_t1_s3"
    },
    {
      "source": "staff_root_p6_t1_s3",
      "target": "staff_root_p6_t1_s3_d1"
    },
    {
      "source": "staff_root_p6_t1_s3",
      "target": "staff_root_p6_t1_s3_d2"
    },
    {
      "source": "staff_root_p6_t1",
      "target": "staff_root_p6_t1_s4"
    },
    {
      "source": "staff_root_p6_t1_s4",
      "target": "staff_root_p6_t1_s4_d1"
    },
    {
      "source": "staff_root_p6_t1_s4",
      "target": "staff_root_p6_t1_s4_d2"
    },
    {
      "source": "staff_root_p6_t1",
      "target": "staff_root_p6_t1_s5"
    },
    {
      "source": "staff_root_p6_t1_s5",
      "target": "staff_root_p6_t1_s5_d1"
    },
    {
      "source": "staff_root_p6_t1_s5",
      "target": "staff_root_p6_t1_s5_d2"
    },
    {
      "source": "staff_root_p6",
      "target": "staff_root_p6_t2"
    },
    {
      "source": "staff_root_p6_t2",
      "target": "staff_root_p6_t2_s1"
    },
    {
      "source": "staff_root_p6_t2_s1",
      "target": "staff_root_p6_t2_s1_d1"
    },
    {
      "source": "staff_root_p6_t2_s1",
      "target": "staff_root_p6_t2_s1_d2"
    },
    {
      "source": "staff_root_p6_t2",
      "target": "staff_root_p6_t2_s2"
    },
    {
      "source": "staff_root_p6_t2_s2",
      "target": "staff_root_p6_t2_s2_d1"
    },
    {
      "source": "staff_root_p6_t2_s2",
      "target": "staff_root_p6_t2_s2_d2"
    },
    {
      "source": "staff_root_p6_t2",
      "target": "staff_root_p6_t2_s3"
    },
    {
      "source": "staff_root_p6_t2_s3",
      "target": "staff_root_p6_t2_s3_d1"
    },
    {
      "source": "staff_root_p6_t2_s3",
      "target": "staff_root_p6_t2_s3_d2"
    },
    {
      "source": "staff_root_p6_t2",
      "target": "staff_root_p6_t2_s4"
    },
    {
      "source": "staff_root_p6_t2_s4",
      "target": "staff_root_p6_t2_s4_d1"
    },
    {
      "source": "staff_root_p6_t2_s4",
      "target": "staff_root_p6_t2_s4_d2"
    },
    {
      "source": "staff_root_p6_t2",
      "target": "staff_root_p6_t2_s5"
    },
    {
      "source": "staff_root_p6_t2_s5",
      "target": "staff_root_p6_t2_s5_d1"
    },
    {
      "source": "staff_root_p6_t2_s5",
      "target": "staff_root_p6_t2_s5_d2"
    },
    {
      "source": "staff_root_p6",
      "target": "staff_root_p6_t3"
    },
    {
      "source": "staff_root_p6_t3",
      "target": "staff_root_p6_t3_s1"
    },
    {
      "source": "staff_root_p6_t3_s1",
      "target": "staff_root_p6_t3_s1_d1"
    },
    {
      "source": "staff_root_p6_t3_s1",
      "target": "staff_root_p6_t3_s1_d2"
    },
    {
      "source": "staff_root_p6_t3_s1",
      "target": "staff_root_p6_t3_s1_d3"
    },
    {
      "source": "staff_root_p6_t3_s1",
      "target": "staff_root_p6_t3_s1_d4"
    },
    {
      "source": "staff_root_p6_t3",
      "target": "staff_root_p6_t3_s2"
    },
    {
      "source": "staff_root_p6_t3_s2",
      "target": "staff_root_p6_t3_s2_d1"
    },
    {
      "source": "staff_root_p6_t3_s2",
      "target": "staff_root_p6_t3_s2_d2"
    },
    {
      "source": "staff_root_p6_t3",
      "target": "staff_root_p6_t3_s3"
    },
    {
      "source": "staff_root_p6_t3_s3",
      "target": "staff_root_p6_t3_s3_d1"
    },
    {
      "source": "staff_root_p6_t3_s3",
      "target": "staff_root_p6_t3_s3_d2"
    },
    {
      "source": "staff_root_p6_t3",
      "target": "staff_root_p6_t3_s4"
    },
    {
      "source": "staff_root_p6_t3_s4",
      "target": "staff_root_p6_t3_s4_d1"
    },
    {
      "source": "staff_root_p6_t3_s4",
      "target": "staff_root_p6_t3_s4_d2"
    },
    {
      "source": "staff_root_p6_t3",
      "target": "staff_root_p6_t3_s5"
    },
    {
      "source": "staff_root_p6_t3_s5",
      "target": "staff_root_p6_t3_s5_d1"
    },
    {
      "source": "staff_root_p6_t3_s5",
      "target": "staff_root_p6_t3_s5_d2"
    },
    {
      "source": "staff_root_p6",
      "target": "staff_root_p6_t4"
    },
    {
      "source": "staff_root_p6_t4",
      "target": "staff_root_p6_t4_s1"
    },
    {
      "source": "staff_root_p6_t4_s1",
      "target": "staff_root_p6_t4_s1_d1"
    },
    {
      "source": "staff_root_p6_t4_s1",
      "target": "staff_root_p6_t4_s1_d2"
    },
    {
      "source": "staff_root_p6_t4",
      "target": "staff_root_p6_t4_s2"
    },
    {
      "source": "staff_root_p6_t4_s2",
      "target": "staff_root_p6_t4_s2_d1"
    },
    {
      "source": "staff_root_p6_t4_s2",
      "target": "staff_root_p6_t4_s2_d2"
    },
    {
      "source": "staff_root_p6_t4",
      "target": "staff_root_p6_t4_s3"
    },
    {
      "source": "staff_root_p6_t4_s3",
      "target": "staff_root_p6_t4_s3_d1"
    },
    {
      "source": "staff_root_p6_t4_s3",
      "target": "staff_root_p6_t4_s3_d2"
    },
    {
      "source": "staff_root_p6_t4",
      "target": "staff_root_p6_t4_s4"
    },
    {
      "source": "staff_root_p6_t4_s4",
      "target": "staff_root_p6_t4_s4_d1"
    },
    {
      "source": "staff_root_p6_t4_s4",
      "target": "staff_root_p6_t4_s4_d2"
    },
    {
      "source": "staff_root_p6_t4",
      "target": "staff_root_p6_t4_s5"
    },
    {
      "source": "staff_root_p6_t4_s5",
      "target": "staff_root_p6_t4_s5_d1"
    },
    {
      "source": "staff_root_p6_t4_s5",
      "target": "staff_root_p6_t4_s5_d2"
    },
    {
      "source": "staff_root_p6",
      "target": "staff_root_p6_t5"
    },
    {
      "source": "staff_root_p6_t5",
      "target": "staff_root_p6_t5_s1"
    },
    {
      "source": "staff_root_p6_t5_s1",
      "target": "staff_root_p6_t5_s1_d1"
    },
    {
      "source": "staff_root_p6_t5_s1",
      "target": "staff_root_p6_t5_s1_d2"
    },
    {
      "source": "staff_root_p6_t5",
      "target": "staff_root_p6_t5_s2"
    },
    {
      "source": "staff_root_p6_t5_s2",
      "target": "staff_root_p6_t5_s2_d1"
    },
    {
      "source": "staff_root_p6_t5_s2",
      "target": "staff_root_p6_t5_s2_d2"
    },
    {
      "source": "staff_root_p6_t5",
      "target": "staff_root_p6_t5_s3"
    },
    {
      "source": "staff_root_p6_t5_s3",
      "target": "staff_root_p6_t5_s3_d1"
    },
    {
      "source": "staff_root_p6_t5_s3",
      "target": "staff_root_p6_t5_s3_d2"
    },
    {
      "source": "staff_root_p6_t5",
      "target": "staff_root_p6_t5_s4"
    },
    {
      "source": "staff_root_p6_t5_s4",
      "target": "staff_root_p6_t5_s4_d1"
    },
    {
      "source": "staff_root_p6_t5_s4",
      "target": "staff_root_p6_t5_s4_d2"
    },
    {
      "source": "staff_root_p6_t5",
      "target": "staff_root_p6_t5_s5"
    },
    {
      "source": "staff_root_p6_t5_s5",
      "target": "staff_root_p6_t5_s5_d1"
    },
    {
      "source": "staff_root_p6_t5_s5",
      "target": "staff_root_p6_t5_s5_d2"
    },
    {
      "source": "staff_root_p6",
      "target": "staff_root_p6_t6"
    },
    {
      "source": "staff_root_p6_t6",
      "target": "staff_root_p6_t6_s1"
    },
    {
      "source": "staff_root_p6_t6_s1",
      "target": "staff_root_p6_t6_s1_d1"
    },
    {
      "source": "staff_root_p6_t6_s1",
      "target": "staff_root_p6_t6_s1_d2"
    },
    {
      "source": "staff_root_p6_t6",
      "target": "staff_root_p6_t6_s2"
    },
    {
      "source": "staff_root_p6_t6_s2",
      "target": "staff_root_p6_t6_s2_d1"
    },
    {
      "source": "staff_root_p6_t6_s2",
      "target": "staff_root_p6_t6_s2_d2"
    },
    {
      "source": "staff_root_p6_t6",
      "target": "staff_root_p6_t6_s3"
    },
    {
      "source": "staff_root_p6_t6_s3",
      "target": "staff_root_p6_t6_s3_d1"
    },
    {
      "source": "staff_root_p6_t6_s3",
      "target": "staff_root_p6_t6_s3_d2"
    },
    {
      "source": "staff_root_p6_t6",
      "target": "staff_root_p6_t6_s4"
    },
    {
      "source": "staff_root_p6_t6_s4",
      "target": "staff_root_p6_t6_s4_d1"
    },
    {
      "source": "staff_root_p6_t6_s4",
      "target": "staff_root_p6_t6_s4_d2"
    },
    {
      "source": "staff_root_p6_t6",
      "target": "staff_root_p6_t6_s5"
    },
    {
      "source": "staff_root_p6_t6_s5",
      "target": "staff_root_p6_t6_s5_d1"
    },
    {
      "source": "staff_root_p6_t6_s5",
      "target": "staff_root_p6_t6_s5_d2"
    },
    {
      "source": "staff_root",
      "target": "staff_root_p7"
    },
    {
      "source": "staff_root_p7",
      "target": "staff_root_p7_t1"
    },
    {
      "source": "staff_root_p7_t1",
      "target": "staff_root_p7_t1_s1"
    },
    {
      "source": "staff_root_p7_t1_s1",
      "target": "staff_root_p7_t1_s1_d1"
    },
    {
      "source": "staff_root_p7_t1_s1",
      "target": "staff_root_p7_t1_s1_d2"
    },
    {
      "source": "staff_root_p7_t1_s1",
      "target": "staff_root_p7_t1_s1_d3"
    },
    {
      "source": "staff_root_p7_t1",
      "target": "staff_root_p7_t1_s2"
    },
    {
      "source": "staff_root_p7_t1_s2",
      "target": "staff_root_p7_t1_s2_d1"
    },
    {
      "source": "staff_root_p7_t1_s2",
      "target": "staff_root_p7_t1_s2_d2"
    },
    {
      "source": "staff_root_p7_t1",
      "target": "staff_root_p7_t1_s3"
    },
    {
      "source": "staff_root_p7_t1_s3",
      "target": "staff_root_p7_t1_s3_d1"
    },
    {
      "source": "staff_root_p7_t1_s3",
      "target": "staff_root_p7_t1_s3_d2"
    },
    {
      "source": "staff_root_p7_t1",
      "target": "staff_root_p7_t1_s4"
    },
    {
      "source": "staff_root_p7_t1_s4",
      "target": "staff_root_p7_t1_s4_d1"
    },
    {
      "source": "staff_root_p7_t1_s4",
      "target": "staff_root_p7_t1_s4_d2"
    },
    {
      "source": "staff_root_p7_t1",
      "target": "staff_root_p7_t1_s5"
    },
    {
      "source": "staff_root_p7_t1_s5",
      "target": "staff_root_p7_t1_s5_d1"
    },
    {
      "source": "staff_root_p7_t1_s5",
      "target": "staff_root_p7_t1_s5_d2"
    },
    {
      "source": "staff_root_p7",
      "target": "staff_root_p7_t2"
    },
    {
      "source": "staff_root_p7_t2",
      "target": "staff_root_p7_t2_s1"
    },
    {
      "source": "staff_root_p7_t2_s1",
      "target": "staff_root_p7_t2_s1_d1"
    },
    {
      "source": "staff_root_p7_t2_s1",
      "target": "staff_root_p7_t2_s1_d2"
    },
    {
      "source": "staff_root_p7_t2_s1",
      "target": "staff_root_p7_t2_s1_d3"
    },
    {
      "source": "staff_root_p7_t2",
      "target": "staff_root_p7_t2_s2"
    },
    {
      "source": "staff_root_p7_t2_s2",
      "target": "staff_root_p7_t2_s2_d1"
    },
    {
      "source": "staff_root_p7_t2_s2",
      "target": "staff_root_p7_t2_s2_d2"
    },
    {
      "source": "staff_root_p7_t2_s2",
      "target": "staff_root_p7_t2_s2_d3"
    },
    {
      "source": "staff_root_p7_t2",
      "target": "staff_root_p7_t2_s3"
    },
    {
      "source": "staff_root_p7_t2_s3",
      "target": "staff_root_p7_t2_s3_d1"
    },
    {
      "source": "staff_root_p7_t2_s3",
      "target": "staff_root_p7_t2_s3_d2"
    },
    {
      "source": "staff_root_p7_t2",
      "target": "staff_root_p7_t2_s4"
    },
    {
      "source": "staff_root_p7_t2_s4",
      "target": "staff_root_p7_t2_s4_d1"
    },
    {
      "source": "staff_root_p7_t2_s4",
      "target": "staff_root_p7_t2_s4_d2"
    },
    {
      "source": "staff_root_p7_t2",
      "target": "staff_root_p7_t2_s5"
    },
    {
      "source": "staff_root_p7_t2_s5",
      "target": "staff_root_p7_t2_s5_d1"
    },
    {
      "source": "staff_root_p7_t2_s5",
      "target": "staff_root_p7_t2_s5_d2"
    },
    {
      "source": "staff_root_p7",
      "target": "staff_root_p7_t3"
    },
    {
      "source": "staff_root_p7_t3",
      "target": "staff_root_p7_t3_s1"
    },
    {
      "source": "staff_root_p7_t3_s1",
      "target": "staff_root_p7_t3_s1_d1"
    },
    {
      "source": "staff_root_p7_t3_s1",
      "target": "staff_root_p7_t3_s1_d2"
    },
    {
      "source": "staff_root_p7_t3",
      "target": "staff_root_p7_t3_s2"
    },
    {
      "source": "staff_root_p7_t3_s2",
      "target": "staff_root_p7_t3_s2_d1"
    },
    {
      "source": "staff_root_p7_t3_s2",
      "target": "staff_root_p7_t3_s2_d2"
    },
    {
      "source": "staff_root_p7_t3",
      "target": "staff_root_p7_t3_s3"
    },
    {
      "source": "staff_root_p7_t3_s3",
      "target": "staff_root_p7_t3_s3_d1"
    },
    {
      "source": "staff_root_p7_t3_s3",
      "target": "staff_root_p7_t3_s3_d2"
    },
    {
      "source": "staff_root_p7_t3",
      "target": "staff_root_p7_t3_s4"
    },
    {
      "source": "staff_root_p7_t3_s4",
      "target": "staff_root_p7_t3_s4_d1"
    },
    {
      "source": "staff_root_p7_t3_s4",
      "target": "staff_root_p7_t3_s4_d2"
    },
    {
      "source": "staff_root_p7_t3",
      "target": "staff_root_p7_t3_s5"
    },
    {
      "source": "staff_root_p7_t3_s5",
      "target": "staff_root_p7_t3_s5_d1"
    },
    {
      "source": "staff_root_p7_t3_s5",
      "target": "staff_root_p7_t3_s5_d2"
    },
    {
      "source": "staff_root_p7",
      "target": "staff_root_p7_t4"
    },
    {
      "source": "staff_root_p7_t4",
      "target": "staff_root_p7_t4_s1"
    },
    {
      "source": "staff_root_p7_t4_s1",
      "target": "staff_root_p7_t4_s1_d1"
    },
    {
      "source": "staff_root_p7_t4_s1",
      "target": "staff_root_p7_t4_s1_d2"
    },
    {
      "source": "staff_root_p7_t4_s1",
      "target": "staff_root_p7_t4_s1_d3"
    },
    {
      "source": "staff_root_p7_t4",
      "target": "staff_root_p7_t4_s2"
    },
    {
      "source": "staff_root_p7_t4_s2",
      "target": "staff_root_p7_t4_s2_d1"
    },
    {
      "source": "staff_root_p7_t4_s2",
      "target": "staff_root_p7_t4_s2_d2"
    },
    {
      "source": "staff_root_p7_t4",
      "target": "staff_root_p7_t4_s3"
    },
    {
      "source": "staff_root_p7_t4_s3",
      "target": "staff_root_p7_t4_s3_d1"
    },
    {
      "source": "staff_root_p7_t4_s3",
      "target": "staff_root_p7_t4_s3_d2"
    },
    {
      "source": "staff_root_p7_t4",
      "target": "staff_root_p7_t4_s4"
    },
    {
      "source": "staff_root_p7_t4_s4",
      "target": "staff_root_p7_t4_s4_d1"
    },
    {
      "source": "staff_root_p7_t4_s4",
      "target": "staff_root_p7_t4_s4_d2"
    },
    {
      "source": "staff_root_p7_t4",
      "target": "staff_root_p7_t4_s5"
    },
    {
      "source": "staff_root_p7_t4_s5",
      "target": "staff_root_p7_t4_s5_d1"
    },
    {
      "source": "staff_root_p7_t4_s5",
      "target": "staff_root_p7_t4_s5_d2"
    },
    {
      "source": "staff_root_p7",
      "target": "staff_root_p7_t5"
    },
    {
      "source": "staff_root_p7_t5",
      "target": "staff_root_p7_t5_s1"
    },
    {
      "source": "staff_root_p7_t5_s1",
      "target": "staff_root_p7_t5_s1_d1"
    },
    {
      "source": "staff_root_p7_t5_s1",
      "target": "staff_root_p7_t5_s1_d2"
    },
    {
      "source": "staff_root_p7_t5",
      "target": "staff_root_p7_t5_s2"
    },
    {
      "source": "staff_root_p7_t5_s2",
      "target": "staff_root_p7_t5_s2_d1"
    },
    {
      "source": "staff_root_p7_t5_s2",
      "target": "staff_root_p7_t5_s2_d2"
    },
    {
      "source": "staff_root_p7_t5",
      "target": "staff_root_p7_t5_s3"
    },
    {
      "source": "staff_root_p7_t5_s3",
      "target": "staff_root_p7_t5_s3_d1"
    },
    {
      "source": "staff_root_p7_t5_s3",
      "target": "staff_root_p7_t5_s3_d2"
    },
    {
      "source": "staff_root_p7_t5",
      "target": "staff_root_p7_t5_s4"
    },
    {
      "source": "staff_root_p7_t5_s4",
      "target": "staff_root_p7_t5_s4_d1"
    },
    {
      "source": "staff_root_p7_t5_s4",
      "target": "staff_root_p7_t5_s4_d2"
    },
    {
      "source": "staff_root_p7_t5",
      "target": "staff_root_p7_t5_s5"
    },
    {
      "source": "staff_root_p7_t5_s5",
      "target": "staff_root_p7_t5_s5_d1"
    },
    {
      "source": "staff_root_p7_t5_s5",
      "target": "staff_root_p7_t5_s5_d2"
    },
    {
      "source": "staff_root_p7",
      "target": "staff_root_p7_t6"
    },
    {
      "source": "staff_root_p7_t6",
      "target": "staff_root_p7_t6_s1"
    },
    {
      "source": "staff_root_p7_t6_s1",
      "target": "staff_root_p7_t6_s1_d1"
    },
    {
      "source": "staff_root_p7_t6_s1",
      "target": "staff_root_p7_t6_s1_d2"
    },
    {
      "source": "staff_root_p7_t6",
      "target": "staff_root_p7_t6_s2"
    },
    {
      "source": "staff_root_p7_t6_s2",
      "target": "staff_root_p7_t6_s2_d1"
    },
    {
      "source": "staff_root_p7_t6_s2",
      "target": "staff_root_p7_t6_s2_d2"
    },
    {
      "source": "staff_root_p7_t6",
      "target": "staff_root_p7_t6_s3"
    },
    {
      "source": "staff_root_p7_t6_s3",
      "target": "staff_root_p7_t6_s3_d1"
    },
    {
      "source": "staff_root_p7_t6_s3",
      "target": "staff_root_p7_t6_s3_d2"
    },
    {
      "source": "staff_root_p7_t6",
      "target": "staff_root_p7_t6_s4"
    },
    {
      "source": "staff_root_p7_t6_s4",
      "target": "staff_root_p7_t6_s4_d1"
    },
    {
      "source": "staff_root_p7_t6_s4",
      "target": "staff_root_p7_t6_s4_d2"
    },
    {
      "source": "staff_root_p7_t6",
      "target": "staff_root_p7_t6_s5"
    },
    {
      "source": "staff_root_p7_t6_s5",
      "target": "staff_root_p7_t6_s5_d1"
    },
    {
      "source": "staff_root_p7_t6_s5",
      "target": "staff_root_p7_t6_s5_d2"
    },
    {
      "source": "staff_root",
      "target": "staff_root_p8"
    },
    {
      "source": "staff_root_p8",
      "target": "staff_root_p8_t1"
    },
    {
      "source": "staff_root_p8_t1",
      "target": "staff_root_p8_t1_s1"
    },
    {
      "source": "staff_root_p8_t1_s1",
      "target": "staff_root_p8_t1_s1_d1"
    },
    {
      "source": "staff_root_p8_t1_s1",
      "target": "staff_root_p8_t1_s1_d2"
    },
    {
      "source": "staff_root_p8_t1",
      "target": "staff_root_p8_t1_s2"
    },
    {
      "source": "staff_root_p8_t1_s2",
      "target": "staff_root_p8_t1_s2_d1"
    },
    {
      "source": "staff_root_p8_t1_s2",
      "target": "staff_root_p8_t1_s2_d2"
    },
    {
      "source": "staff_root_p8_t1",
      "target": "staff_root_p8_t1_s3"
    },
    {
      "source": "staff_root_p8_t1_s3",
      "target": "staff_root_p8_t1_s3_d1"
    },
    {
      "source": "staff_root_p8_t1_s3",
      "target": "staff_root_p8_t1_s3_d2"
    },
    {
      "source": "staff_root_p8_t1",
      "target": "staff_root_p8_t1_s4"
    },
    {
      "source": "staff_root_p8_t1_s4",
      "target": "staff_root_p8_t1_s4_d1"
    },
    {
      "source": "staff_root_p8_t1_s4",
      "target": "staff_root_p8_t1_s4_d2"
    },
    {
      "source": "staff_root_p8_t1",
      "target": "staff_root_p8_t1_s5"
    },
    {
      "source": "staff_root_p8_t1_s5",
      "target": "staff_root_p8_t1_s5_d1"
    },
    {
      "source": "staff_root_p8_t1_s5",
      "target": "staff_root_p8_t1_s5_d2"
    },
    {
      "source": "staff_root_p8",
      "target": "staff_root_p8_t2"
    },
    {
      "source": "staff_root_p8_t2",
      "target": "staff_root_p8_t2_s1"
    },
    {
      "source": "staff_root_p8_t2_s1",
      "target": "staff_root_p8_t2_s1_d1"
    },
    {
      "source": "staff_root_p8_t2_s1",
      "target": "staff_root_p8_t2_s1_d2"
    },
    {
      "source": "staff_root_p8_t2",
      "target": "staff_root_p8_t2_s2"
    },
    {
      "source": "staff_root_p8_t2_s2",
      "target": "staff_root_p8_t2_s2_d1"
    },
    {
      "source": "staff_root_p8_t2_s2",
      "target": "staff_root_p8_t2_s2_d2"
    },
    {
      "source": "staff_root_p8_t2",
      "target": "staff_root_p8_t2_s3"
    },
    {
      "source": "staff_root_p8_t2_s3",
      "target": "staff_root_p8_t2_s3_d1"
    },
    {
      "source": "staff_root_p8_t2_s3",
      "target": "staff_root_p8_t2_s3_d2"
    },
    {
      "source": "staff_root_p8_t2",
      "target": "staff_root_p8_t2_s4"
    },
    {
      "source": "staff_root_p8_t2_s4",
      "target": "staff_root_p8_t2_s4_d1"
    },
    {
      "source": "staff_root_p8_t2_s4",
      "target": "staff_root_p8_t2_s4_d2"
    },
    {
      "source": "staff_root_p8_t2",
      "target": "staff_root_p8_t2_s5"
    },
    {
      "source": "staff_root_p8_t2_s5",
      "target": "staff_root_p8_t2_s5_d1"
    },
    {
      "source": "staff_root_p8_t2_s5",
      "target": "staff_root_p8_t2_s5_d2"
    },
    {
      "source": "staff_root_p8",
      "target": "staff_root_p8_t3"
    },
    {
      "source": "staff_root_p8_t3",
      "target": "staff_root_p8_t3_s1"
    },
    {
      "source": "staff_root_p8_t3_s1",
      "target": "staff_root_p8_t3_s1_d1"
    },
    {
      "source": "staff_root_p8_t3_s1",
      "target": "staff_root_p8_t3_s1_d2"
    },
    {
      "source": "staff_root_p8_t3",
      "target": "staff_root_p8_t3_s2"
    },
    {
      "source": "staff_root_p8_t3_s2",
      "target": "staff_root_p8_t3_s2_d1"
    },
    {
      "source": "staff_root_p8_t3_s2",
      "target": "staff_root_p8_t3_s2_d2"
    },
    {
      "source": "staff_root_p8_t3",
      "target": "staff_root_p8_t3_s3"
    },
    {
      "source": "staff_root_p8_t3_s3",
      "target": "staff_root_p8_t3_s3_d1"
    },
    {
      "source": "staff_root_p8_t3_s3",
      "target": "staff_root_p8_t3_s3_d2"
    },
    {
      "source": "staff_root_p8_t3",
      "target": "staff_root_p8_t3_s4"
    },
    {
      "source": "staff_root_p8_t3_s4",
      "target": "staff_root_p8_t3_s4_d1"
    },
    {
      "source": "staff_root_p8_t3_s4",
      "target": "staff_root_p8_t3_s4_d2"
    },
    {
      "source": "staff_root_p8_t3",
      "target": "staff_root_p8_t3_s5"
    },
    {
      "source": "staff_root_p8_t3_s5",
      "target": "staff_root_p8_t3_s5_d1"
    },
    {
      "source": "staff_root_p8_t3_s5",
      "target": "staff_root_p8_t3_s5_d2"
    },
    {
      "source": "staff_root_p8",
      "target": "staff_root_p8_t4"
    },
    {
      "source": "staff_root_p8_t4",
      "target": "staff_root_p8_t4_s1"
    },
    {
      "source": "staff_root_p8_t4_s1",
      "target": "staff_root_p8_t4_s1_d1"
    },
    {
      "source": "staff_root_p8_t4_s1",
      "target": "staff_root_p8_t4_s1_d2"
    },
    {
      "source": "staff_root_p8_t4",
      "target": "staff_root_p8_t4_s2"
    },
    {
      "source": "staff_root_p8_t4_s2",
      "target": "staff_root_p8_t4_s2_d1"
    },
    {
      "source": "staff_root_p8_t4_s2",
      "target": "staff_root_p8_t4_s2_d2"
    },
    {
      "source": "staff_root_p8_t4",
      "target": "staff_root_p8_t4_s3"
    },
    {
      "source": "staff_root_p8_t4_s3",
      "target": "staff_root_p8_t4_s3_d1"
    },
    {
      "source": "staff_root_p8_t4_s3",
      "target": "staff_root_p8_t4_s3_d2"
    },
    {
      "source": "staff_root_p8_t4",
      "target": "staff_root_p8_t4_s4"
    },
    {
      "source": "staff_root_p8_t4_s4",
      "target": "staff_root_p8_t4_s4_d1"
    },
    {
      "source": "staff_root_p8_t4_s4",
      "target": "staff_root_p8_t4_s4_d2"
    },
    {
      "source": "staff_root_p8_t4",
      "target": "staff_root_p8_t4_s5"
    },
    {
      "source": "staff_root_p8_t4_s5",
      "target": "staff_root_p8_t4_s5_d1"
    },
    {
      "source": "staff_root_p8_t4_s5",
      "target": "staff_root_p8_t4_s5_d2"
    },
    {
      "source": "staff_root_p8",
      "target": "staff_root_p8_t5"
    },
    {
      "source": "staff_root_p8_t5",
      "target": "staff_root_p8_t5_s1"
    },
    {
      "source": "staff_root_p8_t5_s1",
      "target": "staff_root_p8_t5_s1_d1"
    },
    {
      "source": "staff_root_p8_t5_s1",
      "target": "staff_root_p8_t5_s1_d2"
    },
    {
      "source": "staff_root_p8_t5",
      "target": "staff_root_p8_t5_s2"
    },
    {
      "source": "staff_root_p8_t5_s2",
      "target": "staff_root_p8_t5_s2_d1"
    },
    {
      "source": "staff_root_p8_t5_s2",
      "target": "staff_root_p8_t5_s2_d2"
    },
    {
      "source": "staff_root_p8_t5",
      "target": "staff_root_p8_t5_s3"
    },
    {
      "source": "staff_root_p8_t5_s3",
      "target": "staff_root_p8_t5_s3_d1"
    },
    {
      "source": "staff_root_p8_t5_s3",
      "target": "staff_root_p8_t5_s3_d2"
    },
    {
      "source": "staff_root_p8_t5",
      "target": "staff_root_p8_t5_s4"
    },
    {
      "source": "staff_root_p8_t5_s4",
      "target": "staff_root_p8_t5_s4_d1"
    },
    {
      "source": "staff_root_p8_t5_s4",
      "target": "staff_root_p8_t5_s4_d2"
    },
    {
      "source": "staff_root_p8_t5",
      "target": "staff_root_p8_t5_s5"
    },
    {
      "source": "staff_root_p8_t5_s5",
      "target": "staff_root_p8_t5_s5_d1"
    },
    {
      "source": "staff_root_p8_t5_s5",
      "target": "staff_root_p8_t5_s5_d2"
    },
    {
      "source": "staff_root_p8",
      "target": "staff_root_p8_t6"
    },
    {
      "source": "staff_root_p8_t6",
      "target": "staff_root_p8_t6_s1"
    },
    {
      "source": "staff_root_p8_t6_s1",
      "target": "staff_root_p8_t6_s1_d1"
    },
    {
      "source": "staff_root_p8_t6_s1",
      "target": "staff_root_p8_t6_s1_d2"
    },
    {
      "source": "staff_root_p8_t6",
      "target": "staff_root_p8_t6_s2"
    },
    {
      "source": "staff_root_p8_t6_s2",
      "target": "staff_root_p8_t6_s2_d1"
    },
    {
      "source": "staff_root_p8_t6_s2",
      "target": "staff_root_p8_t6_s2_d2"
    },
    {
      "source": "staff_root_p8_t6",
      "target": "staff_root_p8_t6_s3"
    },
    {
      "source": "staff_root_p8_t6_s3",
      "target": "staff_root_p8_t6_s3_d1"
    },
    {
      "source": "staff_root_p8_t6_s3",
      "target": "staff_root_p8_t6_s3_d2"
    },
    {
      "source": "staff_root_p8_t6",
      "target": "staff_root_p8_t6_s4"
    },
    {
      "source": "staff_root_p8_t6_s4",
      "target": "staff_root_p8_t6_s4_d1"
    },
    {
      "source": "staff_root_p8_t6_s4",
      "target": "staff_root_p8_t6_s4_d2"
    },
    {
      "source": "staff_root_p8_t6",
      "target": "staff_root_p8_t6_s5"
    },
    {
      "source": "staff_root_p8_t6_s5",
      "target": "staff_root_p8_t6_s5_d1"
    },
    {
      "source": "staff_root_p8_t6_s5",
      "target": "staff_root_p8_t6_s5_d2"
    }
  ]
};
