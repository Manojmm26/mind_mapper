import { ComparisonWorkspaceData } from "../../services/llmService";

export const CLOUD_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  topic: "Cloud Providers: AWS vs GCP vs Azure vs Cloudflare",
  domainType: "tools",
  overview: "A comprehensive comparison of leading cloud computing platforms spanning traditional infrastructure (IaaS/PaaS) and modern edge-native architectures.",
  recommendedApproach: "Adopt a primary cloud provider based on your team's expertise and existing partnerships, but leverage edge providers like Cloudflare for CDN and edge computing where latency is critical.",
  criteria: [
    { id: "c1", label: "Managed Compute & Container Services", type: "text", description: "Quality and breadth of VMs, Kubernetes, and serverless compute." },
    { id: "c2", label: "Managed Databases & Storage", type: "text", description: "Relational, NoSQL, object storage, and caching solutions." },
    { id: "c3", label: "AI/ML Platform & Foundation Models", type: "text", description: "Services for training, fine-tuning, and inferencing ML models." },
    { id: "c4", label: "CDN & Edge Network Performance", type: "text", description: "Global network presence, caching, and edge execution." },
    { id: "c5", label: "Global Infrastructure & Region Count", type: "text", description: "Physical data center locations and availability zones." },
    { id: "c6", label: "DevX, CLI Tooling & SDK Quality", type: "text", description: "Developer experience, documentation, and tooling ecosystem." },
    { id: "c7", label: "Security, Compliance & Certifications", type: "text", description: "IAM, zero trust, compliance standards support." },
    { id: "c8", label: "Pricing Model & Cost Predictability", type: "text", description: "Cost efficiency, free tiers, and predictable billing." }
  ],
  options: [
    {
      id: "aws",
      name: "AWS",
      summary: "Amazon Web Services is the market leader with the broadest set of services and deepest functionality.",
      scores: {
        "c1": { criterionId: "c1", displayValue: "Excellent", note: "EC2, EKS, and Lambda provide industry-leading compute options." },
        "c2": { criterionId: "c2", displayValue: "Excellent", note: "Aurora, DynamoDB, and S3 are robust, battle-tested solutions." },
        "c3": { criterionId: "c3", displayValue: "Very Good", note: "SageMaker is comprehensive; Bedrock provides access to leading FMs." },
        "c4": { criterionId: "c4", displayValue: "Good", note: "CloudFront is solid but traditional compared to pure edge networks." },
        "c5": { criterionId: "c5", displayValue: "Outstanding", note: "Unmatched global footprint with numerous availability zones." },
        "c6": { criterionId: "c6", displayValue: "Good", note: "CLI and SDKs are robust, though the sheer number of services can be overwhelming." },
        "c7": { criterionId: "c7", displayValue: "Excellent", note: "Deeply granular IAM and comprehensive compliance certifications." },
        "c8": { criterionId: "c8", displayValue: "Complex", note: "Extensive pricing levers, but requires strict governance to avoid cost overruns." }
      },
      tags: ["IaaS", "Market Leader", "Serverless"]
    },
    {
      id: "gcp",
      name: "Google Cloud Platform",
      summary: "GCP excels in data analytics, machine learning, and open-source (Kubernetes) native workloads.",
      scores: {
        "c1": { criterionId: "c1", displayValue: "Excellent", note: "GKE is the gold standard for managed Kubernetes." },
        "c2": { criterionId: "c2", displayValue: "Very Good", note: "Spanner and BigQuery are revolutionary for specific data workloads." },
        "c3": { criterionId: "c3", displayValue: "Outstanding", note: "Deep integration with Vertex AI and Gemini models." },
        "c4": { criterionId: "c4", displayValue: "Excellent", note: "Premium tier network routes traffic on Google's private backbone." },
        "c5": { criterionId: "c5", displayValue: "Good", note: "Strong global presence, though slightly behind AWS." },
        "c6": { criterionId: "c6", displayValue: "Very Good", note: "Clean documentation and excellent developer tools." },
        "c7": { criterionId: "c7", displayValue: "Very Good", note: "Strong default security posture and identity management." },
        "c8": { criterionId: "c8", displayValue: "Predictable", note: "Sustained use discounts and generally transparent pricing." }
      },
      tags: ["Data", "AI", "Kubernetes"]
    },
    {
      id: "azure",
      name: "Microsoft Azure",
      summary: "The preferred choice for enterprise organizations with heavy Microsoft investments and hybrid cloud needs.",
      scores: {
        "c1": { criterionId: "c1", displayValue: "Very Good", note: "Strong VM offerings and Azure Kubernetes Service (AKS)." },
        "c2": { criterionId: "c2", displayValue: "Excellent", note: "Cosmos DB offers exceptional multi-region capabilities." },
        "c3": { criterionId: "c3", displayValue: "Outstanding", note: "Exclusive partnership with OpenAI provides native GPT-4 access." },
        "c4": { criterionId: "c4", displayValue: "Good", note: "Azure Front Door and CDN are robust for enterprise." },
        "c5": { criterionId: "c5", displayValue: "Excellent", note: "Massive number of regions globally, strong enterprise reach." },
        "c6": { criterionId: "c6", displayValue: "Excellent", note: "Deep integration with Visual Studio, GitHub, and .NET ecosystem." },
        "c7": { criterionId: "c7", displayValue: "Outstanding", note: "Best-in-class compliance, closely tied to Entra ID (Active Directory)." },
        "c8": { criterionId: "c8", displayValue: "Enterprise-focused", note: "Azure Hybrid Benefit provides massive cost savings for Windows/SQL." }
      },
      tags: ["Enterprise", "Hybrid Cloud", "OpenAI"]
    },
    {
      id: "cloudflare",
      name: "Cloudflare",
      summary: "An edge-first developer platform optimized for global scale, zero cold starts, and built-in security.",
      scores: {
        "c1": { criterionId: "c1", displayValue: "Specialized", note: "Workers offer instant edge compute, but no traditional VMs/containers." },
        "c2": { criterionId: "c2", displayValue: "Emerging", note: "D1 (SQL) and R2 (Object Storage) are growing rapidly and cost-effective." },
        "c3": { criterionId: "c3", displayValue: "Good", note: "Workers AI allows easy deployment of open-source models at the edge." },
        "c4": { criterionId: "c4", displayValue: "Outstanding", note: "Massive global Anycast network; built for edge performance." },
        "c5": { criterionId: "c5", displayValue: "Unmatched (Edge)", note: "Present in hundreds of cities globally; true edge infrastructure." },
        "c6": { criterionId: "c6", displayValue: "Excellent", note: "Wrangler CLI and modern web standards focus offer superb DX." },
        "c7": { criterionId: "c7", displayValue: "Excellent", note: "Pioneers in Zero Trust and DDoS mitigation." },
        "c8": { criterionId: "c8", displayValue: "Disruptive", note: "Zero egress fees on R2; incredibly generous free tiers." }
      },
      tags: ["Edge", "Serverless", "Security"]
    }
  ],
  nextSteps: [
    "Assess current team skills and existing vendor relationships.",
    "Evaluate data residency and compliance requirements.",
    "Prototype a slice of the architecture on 2 shortlisted providers.",
    "Perform a TCO (Total Cost of Ownership) analysis factoring in egress costs."
  ],
  map: {
    nodes: [
      { id: "root", label: "Cloud Provider Decision", description: "Choosing the optimal cloud provider based on workload needs." },
      { id: "p1", label: "Enterprise Workloads", description: "Traditional line-of-business applications and Microsoft-centric stacks." },
      { id: "p2", label: "Data & AI Focus", description: "Heavy analytics, machine learning, and data pipelines." },
      { id: "p3", label: "Global Edge & Web", description: "Latency-sensitive web apps, APIs, and edge computing." },
      { id: "p4", label: "General Purpose & Scalability", description: "Broad mix of microservices, massive scale, and varied workloads." },
      { id: "p5", label: "Hybrid & Multi-Cloud", description: "Spanning on-premise and multiple cloud environments." },
      
      { id: "e1", label: "Microsoft Stack", description: ".NET, Windows Server, SQL Server environments." },
      { id: "e2", label: "Entra ID Integration", description: "Deep identity integration with existing Active Directory." },
      { id: "e3", label: "Azure Virtual Desktop", description: "Virtual desktop infrastructure for enterprise users." },
      { id: "e4", label: "Azure OpenAI", description: "Enterprise-grade generative AI services." },
      
      { id: "d1", label: "Data Warehousing", description: "Petabyte-scale analytics and querying." },
      { id: "d2", label: "BigQuery (GCP)", description: "Serverless, highly scalable enterprise data warehouse." },
      { id: "d3", label: "Kubernetes (GKE)", description: "Advanced container orchestration and management." },
      { id: "d4", label: "Vertex AI", description: "Unified ML platform for building and scaling AI models." },
      
      { id: "edge1", label: "Zero Cold Starts", description: "V8 Isolate based compute for instant response times." },
      { id: "edge2", label: "Zero Egress Fees", description: "Cost-effective object storage without bandwidth penalties." },
      { id: "edge3", label: "DDoS Protection", description: "Built-in network level protection against attacks." },
      { id: "edge4", label: "Cloudflare Workers", description: "Run JavaScript/WASM at the edge globally." },
      
      { id: "gen1", label: "Broadest Service Catalog", description: "Solutions for almost any conceivable cloud requirement." },
      { id: "gen2", label: "AWS Lambda", description: "The pioneer in event-driven serverless computing." },
      { id: "gen3", label: "Amazon S3", description: "Industry standard object storage with extreme durability." },
      { id: "gen4", label: "Market Leader Ecosystem", description: "Largest community, most third-party integrations." },
      
      { id: "m1", label: "Anthos / Google Distributed Cloud", description: "Modernize apps on-premise or in other clouds." },
      { id: "m2", label: "Azure Arc", description: "Manage servers, Kubernetes, and data services across environments." },
      { id: "m3", label: "AWS Outposts", description: "Run AWS infrastructure on-premises." },
      { id: "m4", label: "Terraform / OpenTofu", description: "Infrastructure as code for multi-cloud deployments." }
    ],
    edges: [
      { source: "root", target: "p1" },
      { source: "root", target: "p2" },
      { source: "root", target: "p3" },
      { source: "root", target: "p4" },
      { source: "root", target: "p5" },
      
      { source: "p1", target: "e1" },
      { source: "p1", target: "e2" },
      { source: "p1", target: "e3" },
      { source: "p1", target: "e4" },
      
      { source: "p2", target: "d1" },
      { source: "p2", target: "d2" },
      { source: "p2", target: "d3" },
      { source: "p2", target: "d4" },
      
      { source: "p3", target: "edge1" },
      { source: "p3", target: "edge2" },
      { source: "p3", target: "edge3" },
      { source: "p3", target: "edge4" },
      
      { source: "p4", target: "gen1" },
      { source: "p4", target: "gen2" },
      { source: "p4", target: "gen3" },
      { source: "p4", target: "gen4" },
      
      { source: "p5", target: "m1" },
      { source: "p5", target: "m2" },
      { source: "p5", target: "m3" },
      { source: "p5", target: "m4" }
    ]
  }
};
