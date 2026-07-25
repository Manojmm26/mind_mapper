import { MindMapData } from "../../services/llmService";

export const FINTECH_SYSTEMS_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "root",
      "label": "Real-Time Payments & Fintech Systems Architecture",
      "description": "Core flows, compliance, fraud, and ledger architectures.",
      "type": "concept"
    },
    {
      "id": "p_0",
      "label": "Payment Processing",
      "description": "Core systems for orchestrating real-time flows.",
      "type": "topic"
    },
    {
      "id": "p_0_t_0",
      "label": "Idempotency",
      "description": "Idempotency keys and deduplication to prevent double charging.",
      "type": "topic"
    },
    {
      "id": "p_0_t_0_s_0",
      "label": "Key Storage",
      "description": "Using Redis for fast idempotency key lookups.",
      "type": "example"
    },
    {
      "id": "p_0_t_0_s_1",
      "label": "Client Retries",
      "description": "Handling safe retries on network failures.",
      "type": "example"
    },
    {
      "id": "p_0_t_0_s_2",
      "label": "TTL Policies",
      "description": "Expiring idempotency keys after 24 hours.",
      "type": "example"
    },
    {
      "id": "p_0_t_0_s_3",
      "label": "Collision Handling",
      "description": "Returning previous results on duplicate requests.",
      "type": "example"
    },
    {
      "id": "p_0_t_1",
      "label": "Payment Orchestration Layer",
      "description": "Routing transactions across multiple gateways and providers.",
      "type": "topic"
    },
    {
      "id": "p_0_t_1_s_0",
      "label": "Smart Routing",
      "description": "Routing based on lowest fees or highest auth rates.",
      "type": "example"
    },
    {
      "id": "p_0_t_1_s_1",
      "label": "Fallback Logic",
      "description": "Automatically failing over to secondary PSPs.",
      "type": "example"
    },
    {
      "id": "p_0_t_1_s_2",
      "label": "Gateway Integrations",
      "description": "Adapter patterns for Stripe, Adyen, and PayPal.",
      "type": "example"
    },
    {
      "id": "p_0_t_1_s_3",
      "label": "Latency Optimization",
      "description": "Parallelizing downstream calls where possible.",
      "type": "example"
    },
    {
      "id": "p_0_t_2",
      "label": "Retry & Failure Handling",
      "description": "Managing transient errors and soft declines.",
      "type": "topic"
    },
    {
      "id": "p_0_t_2_s_0",
      "label": "Exponential Backoff",
      "description": "Adding jitter to retry intervals.",
      "type": "example"
    },
    {
      "id": "p_0_t_2_s_1",
      "label": "Circuit Breakers",
      "description": "Preventing cascade failures on downstream outages.",
      "type": "example"
    },
    {
      "id": "p_0_t_2_s_2",
      "label": "Dead Letter Queues",
      "description": "Capturing permanently failed webhooks.",
      "type": "example"
    },
    {
      "id": "p_0_t_2_s_3",
      "label": "Soft vs Hard Declines",
      "description": "Distinguishing between insufficient funds and invalid cards.",
      "type": "example"
    },
    {
      "id": "p_0_t_3",
      "label": "Multi-Currency FX",
      "description": "Handling cross-border multi-currency pricing.",
      "type": "topic"
    },
    {
      "id": "p_0_t_3_s_0",
      "label": "Real-Time Rates",
      "description": "Fetching live FX spreads from providers.",
      "type": "example"
    },
    {
      "id": "p_0_t_3_s_1",
      "label": "Markup Margins",
      "description": "Applying business logic for dynamic markup.",
      "type": "example"
    },
    {
      "id": "p_0_t_3_s_2",
      "label": "Guaranteed Rates",
      "description": "Holding quoted rates for a specified window.",
      "type": "example"
    },
    {
      "id": "p_0_t_3_s_3",
      "label": "Treasury Hedging",
      "description": "Internal offsets for currency exposure.",
      "type": "example"
    },
    {
      "id": "p_1",
      "label": "Ledger & Accounting",
      "description": "Financial truth and double-entry bookkeeping.",
      "type": "topic"
    },
    {
      "id": "p_1_t_0",
      "label": "Double-Entry Ledger",
      "description": "Ensuring debits and credits always balance.",
      "type": "topic"
    },
    {
      "id": "p_1_t_0_s_0",
      "label": "Chart of Accounts",
      "description": "Hierarchical structure for financial reporting.",
      "type": "example"
    },
    {
      "id": "p_1_t_0_s_1",
      "label": "Atomicity",
      "description": "ACID transactions for ledger entries.",
      "type": "example"
    },
    {
      "id": "p_1_t_0_s_2",
      "label": "Shadow Balances",
      "description": "Tracking pending vs cleared funds.",
      "type": "example"
    },
    {
      "id": "p_1_t_0_s_3",
      "label": "Suspense Accounts",
      "description": "Holding funds during reconciliation mismatches.",
      "type": "example"
    },
    {
      "id": "p_1_t_1",
      "label": "Event Sourcing",
      "description": "Immutable streams for financial events.",
      "type": "topic"
    },
    {
      "id": "p_1_t_1_s_0",
      "label": "Kafka Event Bus",
      "description": "Publishing state changes as domain events.",
      "type": "example"
    },
    {
      "id": "p_1_t_1_s_1",
      "label": "State Projections",
      "description": "Rebuilding materialized views from logs.",
      "type": "example"
    },
    {
      "id": "p_1_t_1_s_2",
      "label": "Audit Trails",
      "description": "Immutable history of all financial mutations.",
      "type": "example"
    },
    {
      "id": "p_1_t_1_s_3",
      "label": "Event Versioning",
      "description": "Handling schema migrations in event streams.",
      "type": "example"
    },
    {
      "id": "p_1_t_2",
      "label": "Account Balances",
      "description": "High-performance balance calculations.",
      "type": "topic"
    },
    {
      "id": "p_1_t_2_s_0",
      "label": "CQRS Pattern",
      "description": "Separating balance reads from transaction writes.",
      "type": "example"
    },
    {
      "id": "p_1_t_2_s_1",
      "label": "Redis Caching",
      "description": "In-memory caches for fast balance checks.",
      "type": "example"
    },
    {
      "id": "p_1_t_2_s_2",
      "label": "Lazy Evaluation",
      "description": "Calculating historical balances on demand.",
      "type": "example"
    },
    {
      "id": "p_1_t_2_s_3",
      "label": "Snapshotting",
      "description": "Periodic checkpoints to speed up rebuilds.",
      "type": "example"
    },
    {
      "id": "p_1_t_3",
      "label": "Regulatory Reporting",
      "description": "Automating financial reporting for compliance.",
      "type": "topic"
    },
    {
      "id": "p_1_t_3_s_0",
      "label": "Basel III Compliance",
      "description": "Calculating liquidity coverage ratios.",
      "type": "example"
    },
    {
      "id": "p_1_t_3_s_1",
      "label": "Tax Withholding",
      "description": "Automated calculations for regional tax laws.",
      "type": "example"
    },
    {
      "id": "p_1_t_3_s_2",
      "label": "End of Day Processing",
      "description": "Batch aggregation for daily reporting.",
      "type": "example"
    },
    {
      "id": "p_1_t_3_s_3",
      "label": "Data Warehousing",
      "description": "Exporting immutable ledger snapshots to Snowflake.",
      "type": "example"
    },
    {
      "id": "p_2",
      "label": "Security & Compliance",
      "description": "Ensuring data privacy and regulatory adherence.",
      "type": "topic"
    },
    {
      "id": "p_2_t_0",
      "label": "PCI-DSS Compliance",
      "description": "Standards for handling sensitive card data.",
      "type": "topic"
    },
    {
      "id": "p_2_t_0_s_0",
      "label": "CHD Isolation",
      "description": "Cardholder Data Environment segregation.",
      "type": "example"
    },
    {
      "id": "p_2_t_0_s_1",
      "label": "Network Segmentation",
      "description": "Strict firewalls between CDE and corporate networks.",
      "type": "example"
    },
    {
      "id": "p_2_t_0_s_2",
      "label": "Access Controls",
      "description": "MFA and RBAC for all CDE access.",
      "type": "example"
    },
    {
      "id": "p_2_t_0_s_3",
      "label": "Vulnerability Scans",
      "description": "Regular penetration testing and ASV scans.",
      "type": "example"
    },
    {
      "id": "p_2_t_1",
      "label": "Tokenization",
      "description": "Replacing PANs with non-sensitive tokens.",
      "type": "topic"
    },
    {
      "id": "p_2_t_1_s_0",
      "label": "Network Tokens",
      "description": "EMVCo standard tokens from card networks.",
      "type": "example"
    },
    {
      "id": "p_2_t_1_s_1",
      "label": "Vault Providers",
      "description": "Using VGS or native cloud HSMs for storage.",
      "type": "example"
    },
    {
      "id": "p_2_t_1_s_2",
      "label": "Format Preserving",
      "description": "Tokens that match credit card formats.",
      "type": "example"
    },
    {
      "id": "p_2_t_1_s_3",
      "label": "Lifecycle Management",
      "description": "Handling token expiry and rotation.",
      "type": "example"
    },
    {
      "id": "p_2_t_2",
      "label": "Data Encryption",
      "description": "Protecting data at rest and in transit.",
      "type": "topic"
    },
    {
      "id": "p_2_t_2_s_0",
      "label": "TLS 1.3",
      "description": "Enforcing strict transport security.",
      "type": "example"
    },
    {
      "id": "p_2_t_2_s_1",
      "label": "Envelope Encryption",
      "description": "Using KMS to manage data encryption keys.",
      "type": "example"
    },
    {
      "id": "p_2_t_2_s_2",
      "label": "Field-Level Encryption",
      "description": "Encrypting PII before database storage.",
      "type": "example"
    },
    {
      "id": "p_2_t_2_s_3",
      "label": "Key Rotation",
      "description": "Automated cryptographic key lifecycle.",
      "type": "example"
    },
    {
      "id": "p_2_t_3",
      "label": "AML & KYC",
      "description": "Anti-money laundering and identity verification.",
      "type": "topic"
    },
    {
      "id": "p_2_t_3_s_0",
      "label": "Identity Verification",
      "description": "Document scanning and liveness checks.",
      "type": "example"
    },
    {
      "id": "p_2_t_3_s_1",
      "label": "Sanctions Screening",
      "description": "Checking against OFAC and global lists.",
      "type": "example"
    },
    {
      "id": "p_2_t_3_s_2",
      "label": "Transaction Monitoring",
      "description": "Detecting suspicious structuring or smurfing.",
      "type": "example"
    },
    {
      "id": "p_2_t_3_s_3",
      "label": "Suspicious Activity Reports",
      "description": "Automated SAR generation.",
      "type": "example"
    },
    {
      "id": "p_3",
      "label": "Fraud & Risk",
      "description": "Real-time decisioning and risk mitigation.",
      "type": "topic"
    },
    {
      "id": "p_3_t_0",
      "label": "Rule Engines",
      "description": "Deterministic logic for fraud blocking.",
      "type": "topic"
    },
    {
      "id": "p_3_t_0_s_0",
      "label": "Velocity Checks",
      "description": "Limiting transactions per hour/day.",
      "type": "example"
    },
    {
      "id": "p_3_t_0_s_1",
      "label": "IP & Geo-fencing",
      "description": "Blocking high-risk regions or Tor exit nodes.",
      "type": "example"
    },
    {
      "id": "p_3_t_0_s_2",
      "label": "BIN Blocking",
      "description": "Restricting specific bank identification numbers.",
      "type": "example"
    },
    {
      "id": "p_3_t_0_s_3",
      "label": "Custom Whitelists",
      "description": "Allowing trusted VIP customers.",
      "type": "example"
    },
    {
      "id": "p_3_t_1",
      "label": "ML Real-Time Scoring",
      "description": "Predictive models for anomaly detection.",
      "type": "topic"
    },
    {
      "id": "p_3_t_1_s_0",
      "label": "Feature Engineering",
      "description": "Aggregating historical behavior features.",
      "type": "example"
    },
    {
      "id": "p_3_t_1_s_1",
      "label": "Model Serving",
      "description": "Low-latency inference using Sagemaker or Triton.",
      "type": "example"
    },
    {
      "id": "p_3_t_1_s_2",
      "label": "Shadow Mode",
      "description": "Running new models without affecting live traffic.",
      "type": "example"
    },
    {
      "id": "p_3_t_1_s_3",
      "label": "Feedback Loops",
      "description": "Retraining models based on chargeback data.",
      "type": "example"
    },
    {
      "id": "p_3_t_2",
      "label": "Behavioral Analytics",
      "description": "Analyzing user interaction patterns.",
      "type": "topic"
    },
    {
      "id": "p_3_t_2_s_0",
      "label": "Device Fingerprinting",
      "description": "Tracking hardware and browser profiles.",
      "type": "example"
    },
    {
      "id": "p_3_t_2_s_1",
      "label": "Keystroke Dynamics",
      "description": "Measuring typing speed and patterns.",
      "type": "example"
    },
    {
      "id": "p_3_t_2_s_2",
      "label": "Navigation Analysis",
      "description": "Detecting bot-like site navigation.",
      "type": "example"
    },
    {
      "id": "p_3_t_2_s_3",
      "label": "Session Hijacking",
      "description": "Identifying anomalous account takeovers.",
      "type": "example"
    },
    {
      "id": "p_3_t_3",
      "label": "Chargeback Management",
      "description": "Handling disputes and friendly fraud.",
      "type": "topic"
    },
    {
      "id": "p_3_t_3_s_0",
      "label": "Evidence Collection",
      "description": "Automated gathering of receipts and IP logs.",
      "type": "example"
    },
    {
      "id": "p_3_t_3_s_1",
      "label": "Representment",
      "description": "Submitting dispute packages to card networks.",
      "type": "example"
    },
    {
      "id": "p_3_t_3_s_2",
      "label": "Win Rate Analytics",
      "description": "Tracking success rates across dispute types.",
      "type": "example"
    },
    {
      "id": "p_3_t_3_s_3",
      "label": "Early Warning Systems",
      "description": "Integrating with Ethoca or Verifi for alerts.",
      "type": "example"
    },
    {
      "id": "p_4",
      "label": "Open Banking",
      "description": "PSD2, Open Finance, and third-party APIs.",
      "type": "topic"
    },
    {
      "id": "p_4_t_0",
      "label": "PSD2 Guidelines",
      "description": "European payment services directive compliance.",
      "type": "topic"
    },
    {
      "id": "p_4_t_0_s_0",
      "label": "Strong Customer Auth",
      "description": "SCA enforcement for online payments.",
      "type": "example"
    },
    {
      "id": "p_4_t_0_s_1",
      "label": "Exemptions",
      "description": "Managing low-value or recurring exemptions.",
      "type": "example"
    },
    {
      "id": "p_4_t_0_s_2",
      "label": "Dynamic Linking",
      "description": "Linking auth codes to specific amounts.",
      "type": "example"
    },
    {
      "id": "p_4_t_0_s_3",
      "label": "Dedicated Interfaces",
      "description": "Providing reliable APIs for TPPs.",
      "type": "example"
    },
    {
      "id": "p_4_t_1",
      "label": "Open Finance APIs",
      "description": "Expanding beyond payments to broader financial data.",
      "type": "topic"
    },
    {
      "id": "p_4_t_1_s_0",
      "label": "Account Aggregation",
      "description": "Pulling balances across institutions.",
      "type": "example"
    },
    {
      "id": "p_4_t_1_s_1",
      "label": "Investment Data",
      "description": "Accessing portfolio and trading history.",
      "type": "example"
    },
    {
      "id": "p_4_t_1_s_2",
      "label": "Action Initiation",
      "description": "Triggering external financial workflows.",
      "type": "example"
    },
    {
      "id": "p_4_t_1_s_3",
      "label": "API Standardization",
      "description": "Adopting FDX or similar data standards.",
      "type": "example"
    },
    {
      "id": "p_4_t_2",
      "label": "OAuth & Consent",
      "description": "Managing user permissions securely.",
      "type": "topic"
    },
    {
      "id": "p_4_t_2_s_0",
      "label": "Granular Scopes",
      "description": "Restricting access to specific accounts.",
      "type": "example"
    },
    {
      "id": "p_4_t_2_s_1",
      "label": "Consent Dashboards",
      "description": "UIs for users to revoke access.",
      "type": "example"
    },
    {
      "id": "p_4_t_2_s_2",
      "label": "Token Lifetimes",
      "description": "Enforcing 90-day re-authentication rules.",
      "type": "example"
    },
    {
      "id": "p_4_t_2_s_3",
      "label": "CIBA Flow",
      "description": "Client Initiated Backchannel Authentication.",
      "type": "example"
    },
    {
      "id": "p_4_t_3",
      "label": "TPP Management",
      "description": "Third-Party Provider onboarding and monitoring.",
      "type": "topic"
    },
    {
      "id": "p_4_t_3_s_0",
      "label": "eIDAS Certificates",
      "description": "Validating QWACs and QSealCs.",
      "type": "example"
    },
    {
      "id": "p_4_t_3_s_1",
      "label": "Directory Integration",
      "description": "Syncing with national competent authorities.",
      "type": "example"
    },
    {
      "id": "p_4_t_3_s_2",
      "label": "API Quotas",
      "description": "Rate limiting based on regulatory tiers.",
      "type": "example"
    },
    {
      "id": "p_4_t_3_s_3",
      "label": "Incident Reporting",
      "description": "Notifying regulators of API downtime.",
      "type": "example"
    },
    {
      "id": "p_5",
      "label": "Settlement & Recon",
      "description": "Ensuring money actually moves and matches.",
      "type": "topic"
    },
    {
      "id": "p_5_t_0",
      "label": "Settlement Pipelines",
      "description": "Moving funds between financial institutions.",
      "type": "topic"
    },
    {
      "id": "p_5_t_0_s_0",
      "label": "Cut-off Times",
      "description": "Managing timezone and batch windows.",
      "type": "example"
    },
    {
      "id": "p_5_t_0_s_1",
      "label": "Nostro/Vostro",
      "description": "Managing correspondent banking accounts.",
      "type": "example"
    },
    {
      "id": "p_5_t_0_s_2",
      "label": "Liquidity Management",
      "description": "Ensuring adequate funding for payouts.",
      "type": "example"
    },
    {
      "id": "p_5_t_0_s_3",
      "label": "Real-Time Gross Settlement",
      "description": "Integrating with RTGS systems like Fedwire.",
      "type": "example"
    },
    {
      "id": "p_5_t_1",
      "label": "Batch Reconciliation",
      "description": "Matching internal ledgers with bank statements.",
      "type": "topic"
    },
    {
      "id": "p_5_t_1_s_0",
      "label": "Parser Engines",
      "description": "Ingesting MT940, CAMT.053, and BAI2 formats.",
      "type": "example"
    },
    {
      "id": "p_5_t_1_s_1",
      "label": "Matching Algorithms",
      "description": "One-to-one and many-to-one matching.",
      "type": "example"
    },
    {
      "id": "p_5_t_1_s_2",
      "label": "Tolerance Thresholds",
      "description": "Auto-clearing minor rounding differences.",
      "type": "example"
    },
    {
      "id": "p_5_t_1_s_3",
      "label": "Maker-Checker",
      "description": "Manual review workflows for exceptions.",
      "type": "example"
    },
    {
      "id": "p_5_t_2",
      "label": "Netting Processes",
      "description": "Reducing settlement volumes and costs.",
      "type": "topic"
    },
    {
      "id": "p_5_t_2_s_0",
      "label": "Bilateral Netting",
      "description": "Offsetting obligations between two parties.",
      "type": "example"
    },
    {
      "id": "p_5_t_2_s_1",
      "label": "Multilateral Netting",
      "description": "Clearing house models for multiple participants.",
      "type": "example"
    },
    {
      "id": "p_5_t_2_s_2",
      "label": "Interchange Calculation",
      "description": "Estimating complex card network fees.",
      "type": "example"
    },
    {
      "id": "p_5_t_2_s_3",
      "label": "Intraday Margins",
      "description": "Calculating exposure limits during the day.",
      "type": "example"
    },
    {
      "id": "p_5_t_3",
      "label": "Exception Handling",
      "description": "Resolving unmapped funds and errors.",
      "type": "topic"
    },
    {
      "id": "p_5_t_3_s_0",
      "label": "Return Items",
      "description": "Processing ACH returns or failed wires.",
      "type": "example"
    },
    {
      "id": "p_5_t_3_s_1",
      "label": "Investigation Workflows",
      "description": "Ticketing system for ops teams.",
      "type": "example"
    },
    {
      "id": "p_5_t_3_s_2",
      "label": "Good Faith Adjustments",
      "description": "Manual entries to balance ledgers.",
      "type": "example"
    },
    {
      "id": "p_5_t_3_s_3",
      "label": "Escheatment",
      "description": "Handling unclaimed property compliance.",
      "type": "example"
    }
  ],
  "edges": [
    {
      "source": "root",
      "target": "p_0"
    },
    {
      "source": "p_0",
      "target": "p_0_t_0"
    },
    {
      "source": "p_0_t_0",
      "target": "p_0_t_0_s_0"
    },
    {
      "source": "p_0_t_0",
      "target": "p_0_t_0_s_1"
    },
    {
      "source": "p_0_t_0",
      "target": "p_0_t_0_s_2"
    },
    {
      "source": "p_0_t_0",
      "target": "p_0_t_0_s_3"
    },
    {
      "source": "p_0",
      "target": "p_0_t_1"
    },
    {
      "source": "p_0_t_1",
      "target": "p_0_t_1_s_0"
    },
    {
      "source": "p_0_t_1",
      "target": "p_0_t_1_s_1"
    },
    {
      "source": "p_0_t_1",
      "target": "p_0_t_1_s_2"
    },
    {
      "source": "p_0_t_1",
      "target": "p_0_t_1_s_3"
    },
    {
      "source": "p_0",
      "target": "p_0_t_2"
    },
    {
      "source": "p_0_t_2",
      "target": "p_0_t_2_s_0"
    },
    {
      "source": "p_0_t_2",
      "target": "p_0_t_2_s_1"
    },
    {
      "source": "p_0_t_2",
      "target": "p_0_t_2_s_2"
    },
    {
      "source": "p_0_t_2",
      "target": "p_0_t_2_s_3"
    },
    {
      "source": "p_0",
      "target": "p_0_t_3"
    },
    {
      "source": "p_0_t_3",
      "target": "p_0_t_3_s_0"
    },
    {
      "source": "p_0_t_3",
      "target": "p_0_t_3_s_1"
    },
    {
      "source": "p_0_t_3",
      "target": "p_0_t_3_s_2"
    },
    {
      "source": "p_0_t_3",
      "target": "p_0_t_3_s_3"
    },
    {
      "source": "root",
      "target": "p_1"
    },
    {
      "source": "p_1",
      "target": "p_1_t_0"
    },
    {
      "source": "p_1_t_0",
      "target": "p_1_t_0_s_0"
    },
    {
      "source": "p_1_t_0",
      "target": "p_1_t_0_s_1"
    },
    {
      "source": "p_1_t_0",
      "target": "p_1_t_0_s_2"
    },
    {
      "source": "p_1_t_0",
      "target": "p_1_t_0_s_3"
    },
    {
      "source": "p_1",
      "target": "p_1_t_1"
    },
    {
      "source": "p_1_t_1",
      "target": "p_1_t_1_s_0"
    },
    {
      "source": "p_1_t_1",
      "target": "p_1_t_1_s_1"
    },
    {
      "source": "p_1_t_1",
      "target": "p_1_t_1_s_2"
    },
    {
      "source": "p_1_t_1",
      "target": "p_1_t_1_s_3"
    },
    {
      "source": "p_1",
      "target": "p_1_t_2"
    },
    {
      "source": "p_1_t_2",
      "target": "p_1_t_2_s_0"
    },
    {
      "source": "p_1_t_2",
      "target": "p_1_t_2_s_1"
    },
    {
      "source": "p_1_t_2",
      "target": "p_1_t_2_s_2"
    },
    {
      "source": "p_1_t_2",
      "target": "p_1_t_2_s_3"
    },
    {
      "source": "p_1",
      "target": "p_1_t_3"
    },
    {
      "source": "p_1_t_3",
      "target": "p_1_t_3_s_0"
    },
    {
      "source": "p_1_t_3",
      "target": "p_1_t_3_s_1"
    },
    {
      "source": "p_1_t_3",
      "target": "p_1_t_3_s_2"
    },
    {
      "source": "p_1_t_3",
      "target": "p_1_t_3_s_3"
    },
    {
      "source": "root",
      "target": "p_2"
    },
    {
      "source": "p_2",
      "target": "p_2_t_0"
    },
    {
      "source": "p_2_t_0",
      "target": "p_2_t_0_s_0"
    },
    {
      "source": "p_2_t_0",
      "target": "p_2_t_0_s_1"
    },
    {
      "source": "p_2_t_0",
      "target": "p_2_t_0_s_2"
    },
    {
      "source": "p_2_t_0",
      "target": "p_2_t_0_s_3"
    },
    {
      "source": "p_2",
      "target": "p_2_t_1"
    },
    {
      "source": "p_2_t_1",
      "target": "p_2_t_1_s_0"
    },
    {
      "source": "p_2_t_1",
      "target": "p_2_t_1_s_1"
    },
    {
      "source": "p_2_t_1",
      "target": "p_2_t_1_s_2"
    },
    {
      "source": "p_2_t_1",
      "target": "p_2_t_1_s_3"
    },
    {
      "source": "p_2",
      "target": "p_2_t_2"
    },
    {
      "source": "p_2_t_2",
      "target": "p_2_t_2_s_0"
    },
    {
      "source": "p_2_t_2",
      "target": "p_2_t_2_s_1"
    },
    {
      "source": "p_2_t_2",
      "target": "p_2_t_2_s_2"
    },
    {
      "source": "p_2_t_2",
      "target": "p_2_t_2_s_3"
    },
    {
      "source": "p_2",
      "target": "p_2_t_3"
    },
    {
      "source": "p_2_t_3",
      "target": "p_2_t_3_s_0"
    },
    {
      "source": "p_2_t_3",
      "target": "p_2_t_3_s_1"
    },
    {
      "source": "p_2_t_3",
      "target": "p_2_t_3_s_2"
    },
    {
      "source": "p_2_t_3",
      "target": "p_2_t_3_s_3"
    },
    {
      "source": "root",
      "target": "p_3"
    },
    {
      "source": "p_3",
      "target": "p_3_t_0"
    },
    {
      "source": "p_3_t_0",
      "target": "p_3_t_0_s_0"
    },
    {
      "source": "p_3_t_0",
      "target": "p_3_t_0_s_1"
    },
    {
      "source": "p_3_t_0",
      "target": "p_3_t_0_s_2"
    },
    {
      "source": "p_3_t_0",
      "target": "p_3_t_0_s_3"
    },
    {
      "source": "p_3",
      "target": "p_3_t_1"
    },
    {
      "source": "p_3_t_1",
      "target": "p_3_t_1_s_0"
    },
    {
      "source": "p_3_t_1",
      "target": "p_3_t_1_s_1"
    },
    {
      "source": "p_3_t_1",
      "target": "p_3_t_1_s_2"
    },
    {
      "source": "p_3_t_1",
      "target": "p_3_t_1_s_3"
    },
    {
      "source": "p_3",
      "target": "p_3_t_2"
    },
    {
      "source": "p_3_t_2",
      "target": "p_3_t_2_s_0"
    },
    {
      "source": "p_3_t_2",
      "target": "p_3_t_2_s_1"
    },
    {
      "source": "p_3_t_2",
      "target": "p_3_t_2_s_2"
    },
    {
      "source": "p_3_t_2",
      "target": "p_3_t_2_s_3"
    },
    {
      "source": "p_3",
      "target": "p_3_t_3"
    },
    {
      "source": "p_3_t_3",
      "target": "p_3_t_3_s_0"
    },
    {
      "source": "p_3_t_3",
      "target": "p_3_t_3_s_1"
    },
    {
      "source": "p_3_t_3",
      "target": "p_3_t_3_s_2"
    },
    {
      "source": "p_3_t_3",
      "target": "p_3_t_3_s_3"
    },
    {
      "source": "root",
      "target": "p_4"
    },
    {
      "source": "p_4",
      "target": "p_4_t_0"
    },
    {
      "source": "p_4_t_0",
      "target": "p_4_t_0_s_0"
    },
    {
      "source": "p_4_t_0",
      "target": "p_4_t_0_s_1"
    },
    {
      "source": "p_4_t_0",
      "target": "p_4_t_0_s_2"
    },
    {
      "source": "p_4_t_0",
      "target": "p_4_t_0_s_3"
    },
    {
      "source": "p_4",
      "target": "p_4_t_1"
    },
    {
      "source": "p_4_t_1",
      "target": "p_4_t_1_s_0"
    },
    {
      "source": "p_4_t_1",
      "target": "p_4_t_1_s_1"
    },
    {
      "source": "p_4_t_1",
      "target": "p_4_t_1_s_2"
    },
    {
      "source": "p_4_t_1",
      "target": "p_4_t_1_s_3"
    },
    {
      "source": "p_4",
      "target": "p_4_t_2"
    },
    {
      "source": "p_4_t_2",
      "target": "p_4_t_2_s_0"
    },
    {
      "source": "p_4_t_2",
      "target": "p_4_t_2_s_1"
    },
    {
      "source": "p_4_t_2",
      "target": "p_4_t_2_s_2"
    },
    {
      "source": "p_4_t_2",
      "target": "p_4_t_2_s_3"
    },
    {
      "source": "p_4",
      "target": "p_4_t_3"
    },
    {
      "source": "p_4_t_3",
      "target": "p_4_t_3_s_0"
    },
    {
      "source": "p_4_t_3",
      "target": "p_4_t_3_s_1"
    },
    {
      "source": "p_4_t_3",
      "target": "p_4_t_3_s_2"
    },
    {
      "source": "p_4_t_3",
      "target": "p_4_t_3_s_3"
    },
    {
      "source": "root",
      "target": "p_5"
    },
    {
      "source": "p_5",
      "target": "p_5_t_0"
    },
    {
      "source": "p_5_t_0",
      "target": "p_5_t_0_s_0"
    },
    {
      "source": "p_5_t_0",
      "target": "p_5_t_0_s_1"
    },
    {
      "source": "p_5_t_0",
      "target": "p_5_t_0_s_2"
    },
    {
      "source": "p_5_t_0",
      "target": "p_5_t_0_s_3"
    },
    {
      "source": "p_5",
      "target": "p_5_t_1"
    },
    {
      "source": "p_5_t_1",
      "target": "p_5_t_1_s_0"
    },
    {
      "source": "p_5_t_1",
      "target": "p_5_t_1_s_1"
    },
    {
      "source": "p_5_t_1",
      "target": "p_5_t_1_s_2"
    },
    {
      "source": "p_5_t_1",
      "target": "p_5_t_1_s_3"
    },
    {
      "source": "p_5",
      "target": "p_5_t_2"
    },
    {
      "source": "p_5_t_2",
      "target": "p_5_t_2_s_0"
    },
    {
      "source": "p_5_t_2",
      "target": "p_5_t_2_s_1"
    },
    {
      "source": "p_5_t_2",
      "target": "p_5_t_2_s_2"
    },
    {
      "source": "p_5_t_2",
      "target": "p_5_t_2_s_3"
    },
    {
      "source": "p_5",
      "target": "p_5_t_3"
    },
    {
      "source": "p_5_t_3",
      "target": "p_5_t_3_s_0"
    },
    {
      "source": "p_5_t_3",
      "target": "p_5_t_3_s_1"
    },
    {
      "source": "p_5_t_3",
      "target": "p_5_t_3_s_2"
    },
    {
      "source": "p_5_t_3",
      "target": "p_5_t_3_s_3"
    }
  ]
};
