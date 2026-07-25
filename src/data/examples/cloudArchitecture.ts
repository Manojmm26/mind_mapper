import { MindMapData } from "../../services/llmService";

export const CLOUD_ARCHITECTURE_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "root",
      "label": "Cloud Architecture Patterns & Multi-Cloud Design",
      "description": "Landing zones, FinOps, resilience, and IaC patterns.",
      "type": "concept"
    },
    {
      "id": "p_0",
      "label": "Landing Zone Design",
      "description": "Foundational architecture for multi-account environments.",
      "type": "topic"
    },
    {
      "id": "p_0_t_0",
      "label": "Network Topology",
      "description": "Designing global and regional network layouts.",
      "type": "topic"
    },
    {
      "id": "p_0_t_0_s_0",
      "label": "VPC Peering",
      "description": "Connecting networks without transit gateways.",
      "type": "example"
    },
    {
      "id": "p_0_t_0_s_1",
      "label": "Transit Gateway",
      "description": "Hub for massive-scale network routing.",
      "type": "example"
    },
    {
      "id": "p_0_t_0_s_2",
      "label": "PrivateLink",
      "description": "Securely accessing services without public IPs.",
      "type": "example"
    },
    {
      "id": "p_0_t_0_s_3",
      "label": "Direct Connect",
      "description": "Dedicated physical lines to on-prem data centers.",
      "type": "example"
    },
    {
      "id": "p_0_t_1",
      "label": "Multi-Account Strategy",
      "description": "Isolating workloads using AWS Organizations.",
      "type": "topic"
    },
    {
      "id": "p_0_t_1_s_0",
      "label": "OU Structure",
      "description": "Organizing by environments or business units.",
      "type": "example"
    },
    {
      "id": "p_0_t_1_s_1",
      "label": "Shared Services",
      "description": "Centralizing CI/CD, DNS, and logging accounts.",
      "type": "example"
    },
    {
      "id": "p_0_t_1_s_2",
      "label": "Sandbox Environments",
      "description": "Isolated playgrounds with strict budget limits.",
      "type": "example"
    },
    {
      "id": "p_0_t_1_s_3",
      "label": "Account Vending Machine",
      "description": "Automated provisioning of new accounts.",
      "type": "example"
    },
    {
      "id": "p_0_t_2",
      "label": "Guardrails & Policies",
      "description": "Enforcing security boundaries organization-wide.",
      "type": "topic"
    },
    {
      "id": "p_0_t_2_s_0",
      "label": "Service Control Policies",
      "description": "Restricting AWS regions or specific services.",
      "type": "example"
    },
    {
      "id": "p_0_t_2_s_1",
      "label": "Azure Policies",
      "description": "Enforcing tagging and resource types.",
      "type": "example"
    },
    {
      "id": "p_0_t_2_s_2",
      "label": "Config Rules",
      "description": "Continuous compliance checking.",
      "type": "example"
    },
    {
      "id": "p_0_t_2_s_3",
      "label": "Auto-Remediation",
      "description": "Using Lambda to fix non-compliant resources.",
      "type": "example"
    },
    {
      "id": "p_0_t_3",
      "label": "Centralized Logging",
      "description": "Aggregating telemetry across all accounts.",
      "type": "topic"
    },
    {
      "id": "p_0_t_3_s_0",
      "label": "Log Archive Account",
      "description": "Immutable S3 bucket for all CloudTrail logs.",
      "type": "example"
    },
    {
      "id": "p_0_t_3_s_1",
      "label": "SIEM Integration",
      "description": "Forwarding logs to Splunk or Datadog.",
      "type": "example"
    },
    {
      "id": "p_0_t_3_s_2",
      "label": "VPC Flow Logs",
      "description": "Monitoring network traffic patterns.",
      "type": "example"
    },
    {
      "id": "p_0_t_3_s_3",
      "label": "Log Retention Policies",
      "description": "Lifecycle rules for cost optimization.",
      "type": "example"
    },
    {
      "id": "p_1",
      "label": "IaC & Automation",
      "description": "Infrastructure as Code and deployment pipelines.",
      "type": "topic"
    },
    {
      "id": "p_1_t_0",
      "label": "Terraform Patterns",
      "description": "Managing infrastructure state and modules.",
      "type": "topic"
    },
    {
      "id": "p_1_t_0_s_0",
      "label": "State Backends",
      "description": "Using S3 and DynamoDB for state locking.",
      "type": "example"
    },
    {
      "id": "p_1_t_0_s_1",
      "label": "Module Registry",
      "description": "Publishing reusable corporate modules.",
      "type": "example"
    },
    {
      "id": "p_1_t_0_s_2",
      "label": "Workspaces",
      "description": "Managing multiple environments with one codebase.",
      "type": "example"
    },
    {
      "id": "p_1_t_0_s_3",
      "label": "Drift Detection",
      "description": "Alerting on manual console changes.",
      "type": "example"
    },
    {
      "id": "p_1_t_1",
      "label": "GitOps Provisioning",
      "description": "Using Git as the single source of truth.",
      "type": "topic"
    },
    {
      "id": "p_1_t_1_s_0",
      "label": "ArgoCD",
      "description": "Continuous delivery for Kubernetes.",
      "type": "example"
    },
    {
      "id": "p_1_t_1_s_1",
      "label": "Atlantis",
      "description": "Pull request automation for Terraform.",
      "type": "example"
    },
    {
      "id": "p_1_t_1_s_2",
      "label": "Reconciliation Loops",
      "description": "Ensuring cluster state matches Git.",
      "type": "example"
    },
    {
      "id": "p_1_t_1_s_3",
      "label": "Secret Management",
      "description": "Using Sealed Secrets or External Secrets Operator.",
      "type": "example"
    },
    {
      "id": "p_1_t_2",
      "label": "CI/CD for Infra",
      "description": "Testing and deploying infrastructure changes.",
      "type": "topic"
    },
    {
      "id": "p_1_t_2_s_0",
      "label": "Static Analysis",
      "description": "Running tfsec or Checkov on pull requests.",
      "type": "example"
    },
    {
      "id": "p_1_t_2_s_1",
      "label": "Cost Estimation",
      "description": "Using Infracost to preview cloud bills.",
      "type": "example"
    },
    {
      "id": "p_1_t_2_s_2",
      "label": "Ephemeral Environments",
      "description": "Spinning up infra per PR and tearing it down.",
      "type": "example"
    },
    {
      "id": "p_1_t_2_s_3",
      "label": "Deployment Strategies",
      "description": "Blue/Green and Canary infrastructure updates.",
      "type": "example"
    },
    {
      "id": "p_1_t_3",
      "label": "Configuration Management",
      "description": "Managing OS-level configurations.",
      "type": "topic"
    },
    {
      "id": "p_1_t_3_s_0",
      "label": "Ansible Playbooks",
      "description": "Agentless configuration via SSH.",
      "type": "example"
    },
    {
      "id": "p_1_t_3_s_1",
      "label": "Packer Images",
      "description": "Building immutable golden AMIs.",
      "type": "example"
    },
    {
      "id": "p_1_t_3_s_2",
      "label": "User Data Scripts",
      "description": "Bootstrapping instances on launch.",
      "type": "example"
    },
    {
      "id": "p_1_t_3_s_3",
      "label": "SSM Parameter Store",
      "description": "Managing runtime configuration variables.",
      "type": "example"
    },
    {
      "id": "p_2",
      "label": "Network & Identity",
      "description": "Zero-trust principles and network isolation.",
      "type": "topic"
    },
    {
      "id": "p_2_t_0",
      "label": "VPC Architecture",
      "description": "Subnetting and routing design.",
      "type": "topic"
    },
    {
      "id": "p_2_t_0_s_0",
      "label": "Public/Private Subnets",
      "description": "Isolating internal resources from the internet.",
      "type": "example"
    },
    {
      "id": "p_2_t_0_s_1",
      "label": "NAT Gateways",
      "description": "Allowing outbound internet for private subnets.",
      "type": "example"
    },
    {
      "id": "p_2_t_0_s_2",
      "label": "NACLs",
      "description": "Stateless subnet-level firewall rules.",
      "type": "example"
    },
    {
      "id": "p_2_t_0_s_3",
      "label": "Security Groups",
      "description": "Stateful instance-level firewalls.",
      "type": "example"
    },
    {
      "id": "p_2_t_1",
      "label": "IAM Zero-Trust",
      "description": "Implementing least privilege access.",
      "type": "topic"
    },
    {
      "id": "p_2_t_1_s_0",
      "label": "Role-Based Access",
      "description": "Granting permissions based on job function.",
      "type": "example"
    },
    {
      "id": "p_2_t_1_s_1",
      "label": "Attribute-Based Access",
      "description": "Using tags (ABAC) for dynamic permissions.",
      "type": "example"
    },
    {
      "id": "p_2_t_1_s_2",
      "label": "Permission Boundaries",
      "description": "Limiting the maximum permissions a role can have.",
      "type": "example"
    },
    {
      "id": "p_2_t_1_s_3",
      "label": "Just-In-Time Access",
      "description": "Temporary elevated privileges for debugging.",
      "type": "example"
    },
    {
      "id": "p_2_t_2",
      "label": "Workload Identity",
      "description": "Federating identities between cloud providers.",
      "type": "topic"
    },
    {
      "id": "p_2_t_2_s_0",
      "label": "OIDC Federation",
      "description": "GitHub Actions accessing AWS without long-lived keys.",
      "type": "example"
    },
    {
      "id": "p_2_t_2_s_1",
      "label": "IRSA",
      "description": "IAM Roles for Service Accounts in EKS.",
      "type": "example"
    },
    {
      "id": "p_2_t_2_s_2",
      "label": "SPIFFE/SPIRE",
      "description": "Universal identity for microservices.",
      "type": "example"
    },
    {
      "id": "p_2_t_2_s_3",
      "label": "Cross-Account Roles",
      "description": "Assuming roles across AWS boundaries.",
      "type": "example"
    },
    {
      "id": "p_2_t_3",
      "label": "Cloud-Native Security",
      "description": "CSPM and CWPP practices.",
      "type": "topic"
    },
    {
      "id": "p_2_t_3_s_0",
      "label": "WAF & Shield",
      "description": "Protecting against SQLi and DDoS attacks.",
      "type": "example"
    },
    {
      "id": "p_2_t_3_s_1",
      "label": "Container Scanning",
      "description": "Checking images for CVEs in ECR.",
      "type": "example"
    },
    {
      "id": "p_2_t_3_s_2",
      "label": "Macie",
      "description": "Discovering PII in S3 buckets.",
      "type": "example"
    },
    {
      "id": "p_2_t_3_s_3",
      "label": "GuardDuty",
      "description": "Threat detection based on ML and flow logs.",
      "type": "example"
    },
    {
      "id": "p_3",
      "label": "Compute Patterns",
      "description": "Selecting the right abstraction for workloads.",
      "type": "topic"
    },
    {
      "id": "p_3_t_0",
      "label": "Serverless Event-Driven",
      "description": "Building scalable systems with zero server management.",
      "type": "topic"
    },
    {
      "id": "p_3_t_0_s_0",
      "label": "AWS Lambda",
      "description": "Function-as-a-Service execution.",
      "type": "example"
    },
    {
      "id": "p_3_t_0_s_1",
      "label": "EventBridge",
      "description": "Enterprise event bus for routing.",
      "type": "example"
    },
    {
      "id": "p_3_t_0_s_2",
      "label": "Step Functions",
      "description": "Orchestrating complex serverless workflows.",
      "type": "example"
    },
    {
      "id": "p_3_t_0_s_3",
      "label": "SQS/SNS",
      "description": "Decoupling services with queues and topics.",
      "type": "example"
    },
    {
      "id": "p_3_t_1",
      "label": "Container Orchestration",
      "description": "Managing containerized microservices.",
      "type": "topic"
    },
    {
      "id": "p_3_t_1_s_0",
      "label": "Kubernetes (EKS/GKE)",
      "description": "Industry standard cluster management.",
      "type": "example"
    },
    {
      "id": "p_3_t_1_s_1",
      "label": "ECS Fargate",
      "description": "Serverless compute for containers.",
      "type": "example"
    },
    {
      "id": "p_3_t_1_s_2",
      "label": "Helm Charts",
      "description": "Packaging Kubernetes applications.",
      "type": "example"
    },
    {
      "id": "p_3_t_1_s_3",
      "label": "Service Mesh",
      "description": "Using Istio for traffic management and mTLS.",
      "type": "example"
    },
    {
      "id": "p_3_t_2",
      "label": "Edge Computing",
      "description": "Moving logic closer to the user.",
      "type": "topic"
    },
    {
      "id": "p_3_t_2_s_0",
      "label": "CloudFront Functions",
      "description": "Lightweight edge routing and header manipulation.",
      "type": "example"
    },
    {
      "id": "p_3_t_2_s_1",
      "label": "Lambda@Edge",
      "description": "Heavier compute for regional edge caches.",
      "type": "example"
    },
    {
      "id": "p_3_t_2_s_2",
      "label": "Cloudflare Workers",
      "description": "V8 isolate-based edge execution.",
      "type": "example"
    },
    {
      "id": "p_3_t_2_s_3",
      "label": "Local Zones",
      "description": "Deploying infrastructure to specific metropolitan areas.",
      "type": "example"
    },
    {
      "id": "p_3_t_3",
      "label": "Batch Processing",
      "description": "Handling large-scale asynchronous jobs.",
      "type": "topic"
    },
    {
      "id": "p_3_t_3_s_0",
      "label": "AWS Batch",
      "description": "Managing arrays of batch computing jobs.",
      "type": "example"
    },
    {
      "id": "p_3_t_3_s_1",
      "label": "EMR Clusters",
      "description": "Managed Hadoop and Spark environments.",
      "type": "example"
    },
    {
      "id": "p_3_t_3_s_2",
      "label": "Spot Instances",
      "description": "Using cheap interruptible compute for jobs.",
      "type": "example"
    },
    {
      "id": "p_3_t_3_s_3",
      "label": "Airflow (MWAA)",
      "description": "Orchestrating data pipelines.",
      "type": "example"
    },
    {
      "id": "p_4",
      "label": "FinOps & Cost Management",
      "description": "Maximizing business value of cloud spend.",
      "type": "topic"
    },
    {
      "id": "p_4_t_0",
      "label": "Cost Allocation",
      "description": "Tracking spend across the organization.",
      "type": "topic"
    },
    {
      "id": "p_4_t_0_s_0",
      "label": "Tagging Strategies",
      "description": "Enforcing CostCenter and Owner tags.",
      "type": "example"
    },
    {
      "id": "p_4_t_0_s_1",
      "label": "Cost Categories",
      "description": "Grouping linked accounts into business units.",
      "type": "example"
    },
    {
      "id": "p_4_t_0_s_2",
      "label": "Anomaly Detection",
      "description": "Alerting on sudden spikes in spending.",
      "type": "example"
    },
    {
      "id": "p_4_t_0_s_3",
      "label": "Showback Reports",
      "description": "Providing visibility into team-level costs.",
      "type": "example"
    },
    {
      "id": "p_4_t_1",
      "label": "Compute Optimization",
      "description": "Reducing the cost of running workloads.",
      "type": "topic"
    },
    {
      "id": "p_4_t_1_s_0",
      "label": "Reserved Instances",
      "description": "Committing to usage for 1-3 years.",
      "type": "example"
    },
    {
      "id": "p_4_t_1_s_1",
      "label": "Savings Plans",
      "description": "Flexible commitments across EC2 and Fargate.",
      "type": "example"
    },
    {
      "id": "p_4_t_1_s_2",
      "label": "Right-Sizing",
      "description": "Downscaling underutilized instances.",
      "type": "example"
    },
    {
      "id": "p_4_t_1_s_3",
      "label": "Graviton Processors",
      "description": "Migrating to ARM for price-performance gains.",
      "type": "example"
    },
    {
      "id": "p_4_t_2",
      "label": "Storage Optimization",
      "description": "Managing data lifecycle efficiently.",
      "type": "topic"
    },
    {
      "id": "p_4_t_2_s_0",
      "label": "S3 Intelligent Tiering",
      "description": "Auto-moving infrequent data to cheaper tiers.",
      "type": "example"
    },
    {
      "id": "p_4_t_2_s_1",
      "label": "EBS Volume Types",
      "description": "Switching from gp2 to gp3 for better value.",
      "type": "example"
    },
    {
      "id": "p_4_t_2_s_2",
      "label": "Snapshot Lifecycle",
      "description": "Deleting old orphaned EBS snapshots.",
      "type": "example"
    },
    {
      "id": "p_4_t_2_s_3",
      "label": "Glacier Deep Archive",
      "description": "Ultra-low cost long-term retention.",
      "type": "example"
    },
    {
      "id": "p_4_t_3",
      "label": "Architectural Efficiency",
      "description": "Designing for cost-effectiveness.",
      "type": "topic"
    },
    {
      "id": "p_4_t_3_s_0",
      "label": "Data Transfer Costs",
      "description": "Minimizing cross-AZ and egress traffic.",
      "type": "example"
    },
    {
      "id": "p_4_t_3_s_1",
      "label": "Serverless Scaling",
      "description": "Scaling to zero when not in use.",
      "type": "example"
    },
    {
      "id": "p_4_t_3_s_2",
      "label": "Caching Layers",
      "description": "Using ElastiCache to reduce database load.",
      "type": "example"
    },
    {
      "id": "p_4_t_3_s_3",
      "label": "VPC Endpoints",
      "description": "Avoiding NAT gateway costs for AWS API calls.",
      "type": "example"
    },
    {
      "id": "p_5",
      "label": "Resilience & DR",
      "description": "Disaster recovery and high availability strategies.",
      "type": "topic"
    },
    {
      "id": "p_5_t_0",
      "label": "DR Architectures",
      "description": "Strategies for surviving regional failures.",
      "type": "topic"
    },
    {
      "id": "p_5_t_0_s_0",
      "label": "Pilot Light",
      "description": "Core services run minimally, scaling on failover.",
      "type": "example"
    },
    {
      "id": "p_5_t_0_s_1",
      "label": "Warm Standby",
      "description": "Scaled-down copy of production ready to scale up.",
      "type": "example"
    },
    {
      "id": "p_5_t_0_s_2",
      "label": "Active-Active",
      "description": "Traffic served from multiple regions concurrently.",
      "type": "example"
    },
    {
      "id": "p_5_t_0_s_3",
      "label": "Backup & Restore",
      "description": "Lowest cost, highest RTO approach.",
      "type": "example"
    },
    {
      "id": "p_5_t_1",
      "label": "Data Replication",
      "description": "Ensuring data availability across regions.",
      "type": "topic"
    },
    {
      "id": "p_5_t_1_s_0",
      "label": "DynamoDB Global Tables",
      "description": "Multi-master cross-region replication.",
      "type": "example"
    },
    {
      "id": "p_5_t_1_s_1",
      "label": "Aurora Global Database",
      "description": "Sub-second replica lag across regions.",
      "type": "example"
    },
    {
      "id": "p_5_t_1_s_2",
      "label": "S3 Cross-Region Rep",
      "description": "Asynchronously copying buckets.",
      "type": "example"
    },
    {
      "id": "p_5_t_1_s_3",
      "label": "EBS Snapshots",
      "description": "Automated snapshot copying to DR regions.",
      "type": "example"
    },
    {
      "id": "p_5_t_2",
      "label": "Traffic Routing",
      "description": "Failing over user traffic smoothly.",
      "type": "topic"
    },
    {
      "id": "p_5_t_2_s_0",
      "label": "Route 53 Health Checks",
      "description": "DNS-level failover routing.",
      "type": "example"
    },
    {
      "id": "p_5_t_2_s_1",
      "label": "Global Accelerator",
      "description": "Anycast IP routing for fast failover.",
      "type": "example"
    },
    {
      "id": "p_5_t_2_s_2",
      "label": "Chaos Engineering",
      "description": "Using Fault Injection Simulator to test resilience.",
      "type": "example"
    },
    {
      "id": "p_5_t_2_s_3",
      "label": "Circuit Breakers",
      "description": "Failing fast to protect overloaded downstream systems.",
      "type": "example"
    },
    {
      "id": "p_5_t_3",
      "label": "RTO & RPO Targets",
      "description": "Business metrics for recovery.",
      "type": "topic"
    },
    {
      "id": "p_5_t_3_s_0",
      "label": "Recovery Time",
      "description": "How fast the system must be restored.",
      "type": "example"
    },
    {
      "id": "p_5_t_3_s_1",
      "label": "Recovery Point",
      "description": "Maximum acceptable data loss.",
      "type": "example"
    },
    {
      "id": "p_5_t_3_s_2",
      "label": "Game Days",
      "description": "Simulated disaster recovery exercises.",
      "type": "example"
    },
    {
      "id": "p_5_t_3_s_3",
      "label": "Runbooks",
      "description": "Documented manual procedures for failover.",
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
