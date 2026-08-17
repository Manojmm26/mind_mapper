import { ComparisonWorkspaceData } from "../../services/llmService";

export const FEATURE_FLAGS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Feature Flag & Experimentation Platforms: LaunchDarkly vs Flagsmith vs PostHog vs Statsig vs Unleash",
  "domainType": "tools",
  "overview": "A DevOps and product evaluation of feature management tools comparing streaming flag evaluation latency, A/B testing stats engines, self-hosted open-source control, and SDK security.",
  "recommendedApproach": "Use LaunchDarkly for high-scale enterprise feature toggles; use PostHog or Statsig for unified product analytics and A/B experimentation; use Flagsmith or Unleash for self-hosted open-source flag management.",
  "criteria": [
    {
      "id": "c1",
      "label": "Flag Evaluation Latency & Streaming",
      "type": "text",
      "description": "In-memory SDK evaluation with SSE/streaming updates (< 1ms flag evaluation)."
    },
    {
      "id": "c2",
      "label": "A/B Testing & Statistical Experimentation Engine",
      "type": "text",
      "description": "Bayesian/Frequentist statistical analysis, sample ratio mismatch (SRM) alerts, and confidence intervals."
    },
    {
      "id": "c3",
      "label": "Self-Hosted Open Source vs SaaS",
      "type": "text",
      "description": "Deploying flag control plane on private Kubernetes vs managed SaaS."
    },
    {
      "id": "c4",
      "label": "Targeting Rules & User Segmentation",
      "type": "text",
      "description": "Complex user attribute rules, percentage rollouts, and canary deployments."
    },
    {
      "id": "c5",
      "label": "Audit Logging & RBAC Governance",
      "type": "text",
      "description": "Approval workflows, environment permissions, and compliance audit logs."
    },
    {
      "id": "c6",
      "label": "All-in-One Analytics Integration",
      "type": "text",
      "description": "Combining feature flags with session replay, product analytics, and event tracking."
    }
  ],
  "options": [
    {
      "id": "launchdarkly",
      "name": "LaunchDarkly",
      "summary": "The enterprise gold standard for feature management and continuous delivery.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "< 1ms (In-Memory SDK)",
          "note": "Evaluates flags in-memory locally with real-time SSE streaming updates."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Experimentation Engine",
          "note": "Built-in statistical engine for A/B testing and feature impact analysis."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Managed SaaS",
          "note": "Cloud SaaS platform with Relay Proxy for high-volume enterprise edge architecture."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Unmatched Targeting",
          "note": "Deep nested rule engine targeting by user ID, tenant, geo, or custom attributes."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class RBAC",
          "note": "Enterprise approval workflows, change requests, and fine-grained team roles."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Integrations",
          "note": "Integrates with Datadog, Slack, Jira, and Terraform."
        }
      },
      "tags": [
        "LaunchDarkly",
        "Enterprise",
        "Feature Flags",
        "Market Leader"
      ]
    },
    {
      "id": "posthog",
      "name": "PostHog",
      "summary": "All-in-one open-source developer product platform combining feature flags, analytics, and session replay.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Fast (Local Evaluation)",
          "note": "Local evaluation mode caches flags in memory."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Built-in Experimentation",
          "note": "Seamless A/B testing tied directly to product analytics events."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Open Source / Cloud",
          "note": "Self-host via Docker/K8s or use PostHog Cloud SaaS."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Very Good",
          "note": "Target by user properties, groups, and percentage rollouts."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Good",
          "note": "Role-based project access control."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Best-in-Class Unified",
          "note": "Unifies feature flags with product analytics, heatmaps, and session replays in one tool."
        }
      },
      "tags": [
        "PostHog",
        "All-in-One",
        "Analytics",
        "Session Replay",
        "Open-Source"
      ]
    },
    {
      "id": "flagsmith",
      "name": "Flagsmith",
      "summary": "Open-source feature flag and remote config service available self-hosted or SaaS.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Fast",
          "note": "Local evaluation mode for low latency flag checks."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "A/B Testing",
          "note": "Multivariate testing and segment experiment tracking."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "100% Open Source",
          "note": "Fully open-source core deployable via Docker-Compose or Kubernetes."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Segment Rules",
          "note": "User trait segmentation and percentage rollouts."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Very Good",
          "note": "Audit logs and organization management."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Focused Feature Flags",
          "note": "Purpose-built for feature toggles and remote config without bloat."
        }
      },
      "tags": [
        "Flagsmith",
        "Open-Source",
        "Self-Hosted",
        "Remote Config"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose LaunchDarkly for enterprise governance, strict RBAC approvals, and high-scale canary releases.",
    "Choose PostHog if you want feature flags seamlessly unified with product analytics and session replays.",
    "Choose Flagsmith or Unleash for self-hosted open-source feature flag control."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Feature Flag Platform Selection",
        "description": "Choosing feature toggle and experimentation infrastructure."
      },
      {
        "id": "p1",
        "label": "Enterprise Governance & Canary Releases",
        "description": "Need enterprise RBAC, change approval workflows, and LaunchDarkly Relay Proxy."
      },
      {
        "id": "p2",
        "label": "Unified Product Analytics & Session Replay",
        "description": "Want feature flags, A/B experiments, analytics, and session replays in a single tool."
      },
      {
        "id": "p3",
        "label": "Self-Hosted Open-Source Data Autonomy",
        "description": "Need to run feature flag control plane on private infrastructure."
      },
      {
        "id": "e1",
        "label": "LaunchDarkly",
        "description": "Enterprise market leader for feature management."
      },
      {
        "id": "e2",
        "label": "PostHog",
        "description": "All-in-one developer platform with flags, analytics, and replays."
      },
      {
        "id": "e3",
        "label": "Flagsmith",
        "description": "Open-source self-hosted feature flag and remote config engine."
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
