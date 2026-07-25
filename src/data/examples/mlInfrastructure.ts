import { ComparisonWorkspaceData, MindMapData } from "../../services/llmService";

export const ML_INFRASTRUCTURE_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "ML Infrastructure: AWS SageMaker vs Vertex AI vs HuggingFace Hub vs Modal vs Replicate",
  "domainType": "tools",
  "overview": "Comparison of modern machine learning infrastructure platforms for training and inference, covering hosted serving, model libraries, hardware access, and developer experience.",
  "recommendedApproach": "Use Modal for fast iterations and developer experience, SageMaker/Vertex for enterprise lock-in and compliance, and HuggingFace/Replicate for rapid OSS ecosystem integrations.",
  "criteria": [
    {
      "id": "c1",
      "label": "Hosted LLM Inference & Serving",
      "type": "categorical",
      "description": "Capabilities for serving large language models with optimizations like vLLM, TGI."
    },
    {
      "id": "c2",
      "label": "Fine-Tuning & Training Jobs",
      "type": "categorical",
      "description": "Support for custom training loops, distributed training, and managed fine-tuning."
    },
    {
      "id": "c3",
      "label": "Model Library & Open Source Support",
      "type": "categorical",
      "description": "Integration with open source model hubs and ease of deploying standard architectures."
    },
    {
      "id": "c4",
      "label": "GPU Access & Hardware Variety",
      "type": "text",
      "description": "Availability of specialized hardware like A100, H100, TPUs, etc."
    },
    {
      "id": "c5",
      "label": "Cost Model",
      "type": "text",
      "description": "Pricing structure: per-token vs per-second vs cold-start penalties."
    },
    {
      "id": "c6",
      "label": "API Developer Experience & Deployment Speed",
      "type": "categorical",
      "description": "How fast can a developer go from local code to production deployment."
    }
  ],
  "options": [
    {
      "id": "opt_sagemaker",
      "name": "AWS SageMaker",
      "summary": "Enterprise grade comprehensive ML platform by AWS.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High",
          "rating": 4,
          "note": "Comprehensive but complex configuration required for LLM serving."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "High",
          "rating": 5,
          "note": "Very strong training support with managed spot instances and distributed setups."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Medium",
          "rating": 3,
          "note": "Has JumpStart integrations but ecosystem is heavily AWS specific."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Extensive",
          "rating": 5,
          "note": "Access to all AWS instances, including Trainium/Inferentia and NVIDIA chips."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Instance Hourly",
          "rating": 3,
          "note": "Mostly instance based pricing, serverless inference has strict limits."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Low",
          "rating": 2,
          "note": "Steep learning curve, IAM roles, and heavy boilerplate required."
        }
      }
    },
    {
      "id": "opt_vertex",
      "name": "Google Vertex AI",
      "summary": "Google Cloud enterprise ML offering with strong TPU support.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High",
          "rating": 4,
          "note": "Excellent serving capabilities, especially for Gemini and standard models."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "High",
          "rating": 5,
          "note": "Deep integration with GCP, great pipeline tooling."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Medium",
          "rating": 3,
          "note": "Good Model Garden, but focus leans towards Google first-party models."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Extensive",
          "rating": 5,
          "note": "Top tier access to TPUs and GPUs."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Mixed",
          "rating": 3,
          "note": "Hourly instance for custom, per-token for managed APIs."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Medium",
          "rating": 3,
          "note": "Better than AWS but still involves significant GCP complexity."
        }
      }
    },
    {
      "id": "opt_hf",
      "name": "HuggingFace Hub",
      "summary": "The central hub for OSS models with managed inference.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High",
          "rating": 5,
          "note": "Inference endpoints are robust and optimized for Hub models."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Medium",
          "rating": 3,
          "note": "AutoTrain is convenient but less flexible for complex custom jobs."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "High",
          "rating": 5,
          "note": "The absolute standard for open source model distribution."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Good",
          "rating": 4,
          "note": "Decent availability of standard GPUs for endpoints."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Hourly",
          "rating": 4,
          "note": "Simple hourly pricing for dedicated endpoints, scale to zero available."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High",
          "rating": 5,
          "note": "Very easy to deploy directly from model repository."
        }
      }
    },
    {
      "id": "opt_modal",
      "name": "Modal Labs",
      "summary": "Serverless compute focused on high-performance AI workloads.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High",
          "rating": 5,
          "note": "Extremely fast cold starts and container spin up."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Medium",
          "rating": 4,
          "note": "Great for custom scripts, though not a traditional distributed training runner."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "High",
          "rating": 4,
          "note": "Bring your own container makes OSS integration trivial."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Great",
          "rating": 5,
          "note": "Easy access to A100/H100s via simple decorators."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Per-second",
          "rating": 5,
          "note": "True scale to zero with per-second billing."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High",
          "rating": 5,
          "note": "Incredible developer experience, run cloud code like local Python."
        }
      }
    },
    {
      "id": "opt_replicate",
      "name": "Replicate",
      "summary": "API first platform for running open source models.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High",
          "rating": 4,
          "note": "Very easy serving of popular models out-of-the-box."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Medium",
          "rating": 3,
          "note": "Limited fine-tuning support, mostly predefined setups."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "High",
          "rating": 5,
          "note": "Huge library of community-published models."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Good",
          "rating": 4,
          "note": "Hardware is abstracted away from user mostly."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Per-second",
          "rating": 4,
          "note": "Scale to zero, simple pricing but can get expensive at scale."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High",
          "rating": 5,
          "note": "Literally one API call to run a model."
        }
      }
    }
  ],
  "nextSteps": [
    "Evaluate workload patterns (spiky vs sustained)",
    "Run pilot on Modal and Replicate",
    "Compare TCO for SageMaker vs Vertex"
  ],
  "map": {
    "nodes": [
      {
        "id": "root_ML_Infrastructure_Selection",
        "label": "ML Infrastructure Selection",
        "description": "Core decision point for ML Infrastructure Selection",
        "type": "topic"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0",
        "label": "Use Case",
        "description": "Key pillar focusing on Use Case requirements and considerations.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t0",
        "label": "Inference",
        "description": "Topic detailing Inference under the Use Case pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t0_s0",
        "label": "Inference detail 1",
        "description": "Specific actionable detail 1 regarding Inference. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t0_s1",
        "label": "Inference detail 2",
        "description": "Specific actionable detail 2 regarding Inference. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t0_s2",
        "label": "Inference detail 3",
        "description": "Specific actionable detail 3 regarding Inference. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t0_s3",
        "label": "Inference detail 4",
        "description": "Specific actionable detail 4 regarding Inference. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t0_s4",
        "label": "Inference detail 5",
        "description": "Specific actionable detail 5 regarding Inference. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t1",
        "label": "Training",
        "description": "Topic detailing Training under the Use Case pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t1_s0",
        "label": "Training detail 1",
        "description": "Specific actionable detail 1 regarding Training. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t1_s1",
        "label": "Training detail 2",
        "description": "Specific actionable detail 2 regarding Training. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t1_s2",
        "label": "Training detail 3",
        "description": "Specific actionable detail 3 regarding Training. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t1_s3",
        "label": "Training detail 4",
        "description": "Specific actionable detail 4 regarding Training. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t1_s4",
        "label": "Training detail 5",
        "description": "Specific actionable detail 5 regarding Training. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t2",
        "label": "Fine-tuning",
        "description": "Topic detailing Fine-tuning under the Use Case pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t2_s0",
        "label": "Fine-tuning detail 1",
        "description": "Specific actionable detail 1 regarding Fine-tuning. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t2_s1",
        "label": "Fine-tuning detail 2",
        "description": "Specific actionable detail 2 regarding Fine-tuning. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t2_s2",
        "label": "Fine-tuning detail 3",
        "description": "Specific actionable detail 3 regarding Fine-tuning. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t2_s3",
        "label": "Fine-tuning detail 4",
        "description": "Specific actionable detail 4 regarding Fine-tuning. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t2_s4",
        "label": "Fine-tuning detail 5",
        "description": "Specific actionable detail 5 regarding Fine-tuning. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t3",
        "label": "Experimentation",
        "description": "Topic detailing Experimentation under the Use Case pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t3_s0",
        "label": "Experimentation detail 1",
        "description": "Specific actionable detail 1 regarding Experimentation. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t3_s1",
        "label": "Experimentation detail 2",
        "description": "Specific actionable detail 2 regarding Experimentation. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t3_s2",
        "label": "Experimentation detail 3",
        "description": "Specific actionable detail 3 regarding Experimentation. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t3_s3",
        "label": "Experimentation detail 4",
        "description": "Specific actionable detail 4 regarding Experimentation. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p0_t3_s4",
        "label": "Experimentation detail 5",
        "description": "Specific actionable detail 5 regarding Experimentation. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1",
        "label": "Scale",
        "description": "Key pillar focusing on Scale requirements and considerations.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t0",
        "label": "Prototype",
        "description": "Topic detailing Prototype under the Scale pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t0_s0",
        "label": "Prototype detail 1",
        "description": "Specific actionable detail 1 regarding Prototype. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t0_s1",
        "label": "Prototype detail 2",
        "description": "Specific actionable detail 2 regarding Prototype. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t0_s2",
        "label": "Prototype detail 3",
        "description": "Specific actionable detail 3 regarding Prototype. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t0_s3",
        "label": "Prototype detail 4",
        "description": "Specific actionable detail 4 regarding Prototype. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t0_s4",
        "label": "Prototype detail 5",
        "description": "Specific actionable detail 5 regarding Prototype. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t1",
        "label": "Production",
        "description": "Topic detailing Production under the Scale pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t1_s0",
        "label": "Production detail 1",
        "description": "Specific actionable detail 1 regarding Production. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t1_s1",
        "label": "Production detail 2",
        "description": "Specific actionable detail 2 regarding Production. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t1_s2",
        "label": "Production detail 3",
        "description": "Specific actionable detail 3 regarding Production. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t1_s3",
        "label": "Production detail 4",
        "description": "Specific actionable detail 4 regarding Production. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t1_s4",
        "label": "Production detail 5",
        "description": "Specific actionable detail 5 regarding Production. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t2",
        "label": "High QPS",
        "description": "Topic detailing High QPS under the Scale pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t2_s0",
        "label": "High QPS detail 1",
        "description": "Specific actionable detail 1 regarding High QPS. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t2_s1",
        "label": "High QPS detail 2",
        "description": "Specific actionable detail 2 regarding High QPS. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t2_s2",
        "label": "High QPS detail 3",
        "description": "Specific actionable detail 3 regarding High QPS. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t2_s3",
        "label": "High QPS detail 4",
        "description": "Specific actionable detail 4 regarding High QPS. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t2_s4",
        "label": "High QPS detail 5",
        "description": "Specific actionable detail 5 regarding High QPS. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t3",
        "label": "Batch Processing",
        "description": "Topic detailing Batch Processing under the Scale pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t3_s0",
        "label": "Batch Processing detail 1",
        "description": "Specific actionable detail 1 regarding Batch Processing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t3_s1",
        "label": "Batch Processing detail 2",
        "description": "Specific actionable detail 2 regarding Batch Processing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t3_s2",
        "label": "Batch Processing detail 3",
        "description": "Specific actionable detail 3 regarding Batch Processing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t3_s3",
        "label": "Batch Processing detail 4",
        "description": "Specific actionable detail 4 regarding Batch Processing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p1_t3_s4",
        "label": "Batch Processing detail 5",
        "description": "Specific actionable detail 5 regarding Batch Processing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2",
        "label": "Budget",
        "description": "Key pillar focusing on Budget requirements and considerations.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t0",
        "label": "Serverless",
        "description": "Topic detailing Serverless under the Budget pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t0_s0",
        "label": "Serverless detail 1",
        "description": "Specific actionable detail 1 regarding Serverless. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t0_s1",
        "label": "Serverless detail 2",
        "description": "Specific actionable detail 2 regarding Serverless. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t0_s2",
        "label": "Serverless detail 3",
        "description": "Specific actionable detail 3 regarding Serverless. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t0_s3",
        "label": "Serverless detail 4",
        "description": "Specific actionable detail 4 regarding Serverless. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t0_s4",
        "label": "Serverless detail 5",
        "description": "Specific actionable detail 5 regarding Serverless. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t1",
        "label": "Dedicated GPUs",
        "description": "Topic detailing Dedicated GPUs under the Budget pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t1_s0",
        "label": "Dedicated GPUs detail 1",
        "description": "Specific actionable detail 1 regarding Dedicated GPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t1_s1",
        "label": "Dedicated GPUs detail 2",
        "description": "Specific actionable detail 2 regarding Dedicated GPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t1_s2",
        "label": "Dedicated GPUs detail 3",
        "description": "Specific actionable detail 3 regarding Dedicated GPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t1_s3",
        "label": "Dedicated GPUs detail 4",
        "description": "Specific actionable detail 4 regarding Dedicated GPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t1_s4",
        "label": "Dedicated GPUs detail 5",
        "description": "Specific actionable detail 5 regarding Dedicated GPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t2",
        "label": "Spot Instances",
        "description": "Topic detailing Spot Instances under the Budget pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t2_s0",
        "label": "Spot Instances detail 1",
        "description": "Specific actionable detail 1 regarding Spot Instances. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t2_s1",
        "label": "Spot Instances detail 2",
        "description": "Specific actionable detail 2 regarding Spot Instances. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t2_s2",
        "label": "Spot Instances detail 3",
        "description": "Specific actionable detail 3 regarding Spot Instances. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t2_s3",
        "label": "Spot Instances detail 4",
        "description": "Specific actionable detail 4 regarding Spot Instances. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t2_s4",
        "label": "Spot Instances detail 5",
        "description": "Specific actionable detail 5 regarding Spot Instances. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t3",
        "label": "Enterprise Commit",
        "description": "Topic detailing Enterprise Commit under the Budget pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t3_s0",
        "label": "Enterprise Commit detail 1",
        "description": "Specific actionable detail 1 regarding Enterprise Commit. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t3_s1",
        "label": "Enterprise Commit detail 2",
        "description": "Specific actionable detail 2 regarding Enterprise Commit. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t3_s2",
        "label": "Enterprise Commit detail 3",
        "description": "Specific actionable detail 3 regarding Enterprise Commit. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t3_s3",
        "label": "Enterprise Commit detail 4",
        "description": "Specific actionable detail 4 regarding Enterprise Commit. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p2_t3_s4",
        "label": "Enterprise Commit detail 5",
        "description": "Specific actionable detail 5 regarding Enterprise Commit. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3",
        "label": "Ecosystem",
        "description": "Key pillar focusing on Ecosystem requirements and considerations.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t0",
        "label": "Open Source",
        "description": "Topic detailing Open Source under the Ecosystem pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t0_s0",
        "label": "Open Source detail 1",
        "description": "Specific actionable detail 1 regarding Open Source. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t0_s1",
        "label": "Open Source detail 2",
        "description": "Specific actionable detail 2 regarding Open Source. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t0_s2",
        "label": "Open Source detail 3",
        "description": "Specific actionable detail 3 regarding Open Source. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t0_s3",
        "label": "Open Source detail 4",
        "description": "Specific actionable detail 4 regarding Open Source. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t0_s4",
        "label": "Open Source detail 5",
        "description": "Specific actionable detail 5 regarding Open Source. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t1",
        "label": "Vendor Lock-in",
        "description": "Topic detailing Vendor Lock-in under the Ecosystem pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t1_s0",
        "label": "Vendor Lock-in detail 1",
        "description": "Specific actionable detail 1 regarding Vendor Lock-in. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t1_s1",
        "label": "Vendor Lock-in detail 2",
        "description": "Specific actionable detail 2 regarding Vendor Lock-in. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t1_s2",
        "label": "Vendor Lock-in detail 3",
        "description": "Specific actionable detail 3 regarding Vendor Lock-in. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t1_s3",
        "label": "Vendor Lock-in detail 4",
        "description": "Specific actionable detail 4 regarding Vendor Lock-in. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t1_s4",
        "label": "Vendor Lock-in detail 5",
        "description": "Specific actionable detail 5 regarding Vendor Lock-in. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t2",
        "label": "Custom Models",
        "description": "Topic detailing Custom Models under the Ecosystem pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t2_s0",
        "label": "Custom Models detail 1",
        "description": "Specific actionable detail 1 regarding Custom Models. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t2_s1",
        "label": "Custom Models detail 2",
        "description": "Specific actionable detail 2 regarding Custom Models. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t2_s2",
        "label": "Custom Models detail 3",
        "description": "Specific actionable detail 3 regarding Custom Models. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t2_s3",
        "label": "Custom Models detail 4",
        "description": "Specific actionable detail 4 regarding Custom Models. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t2_s4",
        "label": "Custom Models detail 5",
        "description": "Specific actionable detail 5 regarding Custom Models. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t3",
        "label": "Foundational Models",
        "description": "Topic detailing Foundational Models under the Ecosystem pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t3_s0",
        "label": "Foundational Models detail 1",
        "description": "Specific actionable detail 1 regarding Foundational Models. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t3_s1",
        "label": "Foundational Models detail 2",
        "description": "Specific actionable detail 2 regarding Foundational Models. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t3_s2",
        "label": "Foundational Models detail 3",
        "description": "Specific actionable detail 3 regarding Foundational Models. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t3_s3",
        "label": "Foundational Models detail 4",
        "description": "Specific actionable detail 4 regarding Foundational Models. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p3_t3_s4",
        "label": "Foundational Models detail 5",
        "description": "Specific actionable detail 5 regarding Foundational Models. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4",
        "label": "Hardware",
        "description": "Key pillar focusing on Hardware requirements and considerations.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t0",
        "label": "NVIDIA A100_H100",
        "description": "Topic detailing NVIDIA A100_H100 under the Hardware pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t0_s0",
        "label": "NVIDIA A100_H100 detail 1",
        "description": "Specific actionable detail 1 regarding NVIDIA A100_H100. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t0_s1",
        "label": "NVIDIA A100_H100 detail 2",
        "description": "Specific actionable detail 2 regarding NVIDIA A100_H100. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t0_s2",
        "label": "NVIDIA A100_H100 detail 3",
        "description": "Specific actionable detail 3 regarding NVIDIA A100_H100. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t0_s3",
        "label": "NVIDIA A100_H100 detail 4",
        "description": "Specific actionable detail 4 regarding NVIDIA A100_H100. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t0_s4",
        "label": "NVIDIA A100_H100 detail 5",
        "description": "Specific actionable detail 5 regarding NVIDIA A100_H100. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t1",
        "label": "TPUs",
        "description": "Topic detailing TPUs under the Hardware pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t1_s0",
        "label": "TPUs detail 1",
        "description": "Specific actionable detail 1 regarding TPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t1_s1",
        "label": "TPUs detail 2",
        "description": "Specific actionable detail 2 regarding TPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t1_s2",
        "label": "TPUs detail 3",
        "description": "Specific actionable detail 3 regarding TPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t1_s3",
        "label": "TPUs detail 4",
        "description": "Specific actionable detail 4 regarding TPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t1_s4",
        "label": "TPUs detail 5",
        "description": "Specific actionable detail 5 regarding TPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t2",
        "label": "Consumer GPUs",
        "description": "Topic detailing Consumer GPUs under the Hardware pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t2_s0",
        "label": "Consumer GPUs detail 1",
        "description": "Specific actionable detail 1 regarding Consumer GPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t2_s1",
        "label": "Consumer GPUs detail 2",
        "description": "Specific actionable detail 2 regarding Consumer GPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t2_s2",
        "label": "Consumer GPUs detail 3",
        "description": "Specific actionable detail 3 regarding Consumer GPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t2_s3",
        "label": "Consumer GPUs detail 4",
        "description": "Specific actionable detail 4 regarding Consumer GPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t2_s4",
        "label": "Consumer GPUs detail 5",
        "description": "Specific actionable detail 5 regarding Consumer GPUs. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t3",
        "label": "CPU Inference",
        "description": "Topic detailing CPU Inference under the Hardware pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t3_s0",
        "label": "CPU Inference detail 1",
        "description": "Specific actionable detail 1 regarding CPU Inference. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t3_s1",
        "label": "CPU Inference detail 2",
        "description": "Specific actionable detail 2 regarding CPU Inference. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t3_s2",
        "label": "CPU Inference detail 3",
        "description": "Specific actionable detail 3 regarding CPU Inference. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t3_s3",
        "label": "CPU Inference detail 4",
        "description": "Specific actionable detail 4 regarding CPU Inference. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_ML_Infrastructure_Selection_p4_t3_s4",
        "label": "CPU Inference detail 5",
        "description": "Specific actionable detail 5 regarding CPU Inference. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      }
    ],
    "edges": [
      {
        "source": "root_ML_Infrastructure_Selection",
        "target": "root_ML_Infrastructure_Selection_p0",
        "label": "has pillar"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0",
        "target": "root_ML_Infrastructure_Selection_p0_t0",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t0",
        "target": "root_ML_Infrastructure_Selection_p0_t0_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t0",
        "target": "root_ML_Infrastructure_Selection_p0_t0_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t0",
        "target": "root_ML_Infrastructure_Selection_p0_t0_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t0",
        "target": "root_ML_Infrastructure_Selection_p0_t0_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t0",
        "target": "root_ML_Infrastructure_Selection_p0_t0_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0",
        "target": "root_ML_Infrastructure_Selection_p0_t1",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t1",
        "target": "root_ML_Infrastructure_Selection_p0_t1_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t1",
        "target": "root_ML_Infrastructure_Selection_p0_t1_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t1",
        "target": "root_ML_Infrastructure_Selection_p0_t1_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t1",
        "target": "root_ML_Infrastructure_Selection_p0_t1_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t1",
        "target": "root_ML_Infrastructure_Selection_p0_t1_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0",
        "target": "root_ML_Infrastructure_Selection_p0_t2",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t2",
        "target": "root_ML_Infrastructure_Selection_p0_t2_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t2",
        "target": "root_ML_Infrastructure_Selection_p0_t2_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t2",
        "target": "root_ML_Infrastructure_Selection_p0_t2_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t2",
        "target": "root_ML_Infrastructure_Selection_p0_t2_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t2",
        "target": "root_ML_Infrastructure_Selection_p0_t2_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0",
        "target": "root_ML_Infrastructure_Selection_p0_t3",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t3",
        "target": "root_ML_Infrastructure_Selection_p0_t3_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t3",
        "target": "root_ML_Infrastructure_Selection_p0_t3_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t3",
        "target": "root_ML_Infrastructure_Selection_p0_t3_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t3",
        "target": "root_ML_Infrastructure_Selection_p0_t3_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p0_t3",
        "target": "root_ML_Infrastructure_Selection_p0_t3_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection",
        "target": "root_ML_Infrastructure_Selection_p1",
        "label": "has pillar"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1",
        "target": "root_ML_Infrastructure_Selection_p1_t0",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t0",
        "target": "root_ML_Infrastructure_Selection_p1_t0_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t0",
        "target": "root_ML_Infrastructure_Selection_p1_t0_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t0",
        "target": "root_ML_Infrastructure_Selection_p1_t0_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t0",
        "target": "root_ML_Infrastructure_Selection_p1_t0_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t0",
        "target": "root_ML_Infrastructure_Selection_p1_t0_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1",
        "target": "root_ML_Infrastructure_Selection_p1_t1",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t1",
        "target": "root_ML_Infrastructure_Selection_p1_t1_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t1",
        "target": "root_ML_Infrastructure_Selection_p1_t1_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t1",
        "target": "root_ML_Infrastructure_Selection_p1_t1_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t1",
        "target": "root_ML_Infrastructure_Selection_p1_t1_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t1",
        "target": "root_ML_Infrastructure_Selection_p1_t1_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1",
        "target": "root_ML_Infrastructure_Selection_p1_t2",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t2",
        "target": "root_ML_Infrastructure_Selection_p1_t2_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t2",
        "target": "root_ML_Infrastructure_Selection_p1_t2_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t2",
        "target": "root_ML_Infrastructure_Selection_p1_t2_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t2",
        "target": "root_ML_Infrastructure_Selection_p1_t2_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t2",
        "target": "root_ML_Infrastructure_Selection_p1_t2_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1",
        "target": "root_ML_Infrastructure_Selection_p1_t3",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t3",
        "target": "root_ML_Infrastructure_Selection_p1_t3_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t3",
        "target": "root_ML_Infrastructure_Selection_p1_t3_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t3",
        "target": "root_ML_Infrastructure_Selection_p1_t3_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t3",
        "target": "root_ML_Infrastructure_Selection_p1_t3_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p1_t3",
        "target": "root_ML_Infrastructure_Selection_p1_t3_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection",
        "target": "root_ML_Infrastructure_Selection_p2",
        "label": "has pillar"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2",
        "target": "root_ML_Infrastructure_Selection_p2_t0",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t0",
        "target": "root_ML_Infrastructure_Selection_p2_t0_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t0",
        "target": "root_ML_Infrastructure_Selection_p2_t0_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t0",
        "target": "root_ML_Infrastructure_Selection_p2_t0_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t0",
        "target": "root_ML_Infrastructure_Selection_p2_t0_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t0",
        "target": "root_ML_Infrastructure_Selection_p2_t0_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2",
        "target": "root_ML_Infrastructure_Selection_p2_t1",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t1",
        "target": "root_ML_Infrastructure_Selection_p2_t1_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t1",
        "target": "root_ML_Infrastructure_Selection_p2_t1_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t1",
        "target": "root_ML_Infrastructure_Selection_p2_t1_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t1",
        "target": "root_ML_Infrastructure_Selection_p2_t1_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t1",
        "target": "root_ML_Infrastructure_Selection_p2_t1_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2",
        "target": "root_ML_Infrastructure_Selection_p2_t2",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t2",
        "target": "root_ML_Infrastructure_Selection_p2_t2_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t2",
        "target": "root_ML_Infrastructure_Selection_p2_t2_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t2",
        "target": "root_ML_Infrastructure_Selection_p2_t2_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t2",
        "target": "root_ML_Infrastructure_Selection_p2_t2_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t2",
        "target": "root_ML_Infrastructure_Selection_p2_t2_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2",
        "target": "root_ML_Infrastructure_Selection_p2_t3",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t3",
        "target": "root_ML_Infrastructure_Selection_p2_t3_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t3",
        "target": "root_ML_Infrastructure_Selection_p2_t3_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t3",
        "target": "root_ML_Infrastructure_Selection_p2_t3_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t3",
        "target": "root_ML_Infrastructure_Selection_p2_t3_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p2_t3",
        "target": "root_ML_Infrastructure_Selection_p2_t3_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection",
        "target": "root_ML_Infrastructure_Selection_p3",
        "label": "has pillar"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3",
        "target": "root_ML_Infrastructure_Selection_p3_t0",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t0",
        "target": "root_ML_Infrastructure_Selection_p3_t0_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t0",
        "target": "root_ML_Infrastructure_Selection_p3_t0_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t0",
        "target": "root_ML_Infrastructure_Selection_p3_t0_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t0",
        "target": "root_ML_Infrastructure_Selection_p3_t0_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t0",
        "target": "root_ML_Infrastructure_Selection_p3_t0_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3",
        "target": "root_ML_Infrastructure_Selection_p3_t1",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t1",
        "target": "root_ML_Infrastructure_Selection_p3_t1_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t1",
        "target": "root_ML_Infrastructure_Selection_p3_t1_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t1",
        "target": "root_ML_Infrastructure_Selection_p3_t1_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t1",
        "target": "root_ML_Infrastructure_Selection_p3_t1_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t1",
        "target": "root_ML_Infrastructure_Selection_p3_t1_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3",
        "target": "root_ML_Infrastructure_Selection_p3_t2",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t2",
        "target": "root_ML_Infrastructure_Selection_p3_t2_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t2",
        "target": "root_ML_Infrastructure_Selection_p3_t2_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t2",
        "target": "root_ML_Infrastructure_Selection_p3_t2_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t2",
        "target": "root_ML_Infrastructure_Selection_p3_t2_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t2",
        "target": "root_ML_Infrastructure_Selection_p3_t2_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3",
        "target": "root_ML_Infrastructure_Selection_p3_t3",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t3",
        "target": "root_ML_Infrastructure_Selection_p3_t3_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t3",
        "target": "root_ML_Infrastructure_Selection_p3_t3_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t3",
        "target": "root_ML_Infrastructure_Selection_p3_t3_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t3",
        "target": "root_ML_Infrastructure_Selection_p3_t3_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p3_t3",
        "target": "root_ML_Infrastructure_Selection_p3_t3_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection",
        "target": "root_ML_Infrastructure_Selection_p4",
        "label": "has pillar"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4",
        "target": "root_ML_Infrastructure_Selection_p4_t0",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t0",
        "target": "root_ML_Infrastructure_Selection_p4_t0_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t0",
        "target": "root_ML_Infrastructure_Selection_p4_t0_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t0",
        "target": "root_ML_Infrastructure_Selection_p4_t0_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t0",
        "target": "root_ML_Infrastructure_Selection_p4_t0_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t0",
        "target": "root_ML_Infrastructure_Selection_p4_t0_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4",
        "target": "root_ML_Infrastructure_Selection_p4_t1",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t1",
        "target": "root_ML_Infrastructure_Selection_p4_t1_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t1",
        "target": "root_ML_Infrastructure_Selection_p4_t1_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t1",
        "target": "root_ML_Infrastructure_Selection_p4_t1_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t1",
        "target": "root_ML_Infrastructure_Selection_p4_t1_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t1",
        "target": "root_ML_Infrastructure_Selection_p4_t1_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4",
        "target": "root_ML_Infrastructure_Selection_p4_t2",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t2",
        "target": "root_ML_Infrastructure_Selection_p4_t2_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t2",
        "target": "root_ML_Infrastructure_Selection_p4_t2_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t2",
        "target": "root_ML_Infrastructure_Selection_p4_t2_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t2",
        "target": "root_ML_Infrastructure_Selection_p4_t2_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t2",
        "target": "root_ML_Infrastructure_Selection_p4_t2_s4",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4",
        "target": "root_ML_Infrastructure_Selection_p4_t3",
        "label": "includes"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t3",
        "target": "root_ML_Infrastructure_Selection_p4_t3_s0",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t3",
        "target": "root_ML_Infrastructure_Selection_p4_t3_s1",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t3",
        "target": "root_ML_Infrastructure_Selection_p4_t3_s2",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t3",
        "target": "root_ML_Infrastructure_Selection_p4_t3_s3",
        "label": "requires"
      },
      {
        "source": "root_ML_Infrastructure_Selection_p4_t3",
        "target": "root_ML_Infrastructure_Selection_p4_t3_s4",
        "label": "requires"
      }
    ]
  }
};
