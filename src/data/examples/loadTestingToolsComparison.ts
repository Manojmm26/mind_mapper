import { ComparisonWorkspaceData } from "../../services/llmService";

export const LOAD_TESTING_TOOLS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Load Testing & Performance Benchmarking Tools: k6 vs Locust vs Apache JMeter vs Artillery",
  "domainType": "tools",
  "overview": "A performance engineering comparison evaluating developer-centric load testing script languages (JS vs Python), virtual user (VU) scale, protocol support (HTTP/gRPC/WS), and CI/CD integration.",
  "recommendedApproach": "Use k6 (Grafana) for modern developer-centric JavaScript load testing scripts in CI/CD; use Locust for complex Python data workflows; use Apache JMeter for legacy enterprise GUI tests.",
  "criteria": [
    {
      "id": "c1",
      "label": "Scripting Language & DX (JS vs Python vs GUI)",
      "type": "text",
      "description": "Writing load test scenarios in modern JavaScript/Python code vs XML GUI dialogs."
    },
    {
      "id": "c2",
      "label": "Virtual User (VU) CPU Memory Efficiency",
      "type": "text",
      "description": "Memory footprint per virtual user thread (Go runtime vs Python vs Java threads)."
    },
    {
      "id": "c3",
      "label": "Protocols (HTTP/2, gRPC, WebSockets, Kafka)",
      "type": "text",
      "description": "Support for microservice protocols and real-time streaming sockets."
    },
    {
      "id": "c4",
      "label": "CI/CD Pipeline Integration & Thresholds",
      "type": "text",
      "description": "Failing CI builds automatically if 95th percentile latency exceeds threshold (http_req_duration p(95) < 200)."
    },
    {
      "id": "c5",
      "label": "Distributed Load Generation",
      "type": "text",
      "description": "Distributing load generation across multiple worker nodes for high RPS."
    },
    {
      "id": "c6",
      "label": "Metrics & Dashboard Export (Grafana / Prometheus)",
      "type": "text",
      "description": "Streaming live test metrics to Grafana, Prometheus, or Datadog."
    }
  ],
  "options": [
    {
      "id": "k6",
      "name": "Grafana k6",
      "summary": "Developer-centric open-source load testing tool written in Go with JavaScript ES6 scripting.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "JavaScript (ES6)",
          "note": "Write clean, modular test scripts in JavaScript with ES6 module imports."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Go Engine)",
          "note": "Go execution engine allocates minimal memory per Virtual User, achieving massive RPS on single machine."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "HTTP/2, gRPC, WebSockets",
          "note": "Native support for HTTP/1.1, HTTP/2, gRPC, and WebSockets."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Native CI Thresholds",
          "note": "Define pass/fail thresholds in script (e.g., 'http_req_duration': ['p(95)<500']); returns exit code 1 on failure."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "k6 Cloud & K8s Operator",
          "note": "Distribute tests via k6 Cloud SaaS or open-source k6 Kubernetes Operator."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Grafana Integration",
          "note": "Streams metrics directly to Prometheus, Grafana Cloud, Datadog, or InfluxDB."
        }
      },
      "tags": [
        "k6",
        "Grafana",
        "Go Engine",
        "JavaScript",
        "Developer-Centric"
      ]
    },
    {
      "id": "locust",
      "name": "Locust",
      "summary": "An open-source user load testing tool for Python with real-time web UI.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Pure Python Code",
          "note": "Define user behavior entirely in standard Python code using gevent greenlets."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Gevent Async",
          "note": "Uses gevent coroutines; handles thousands of concurrent users per node."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Extensible",
          "note": "Test any system using Python libraries (HTTP, gRPC, database drivers)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Headless Mode",
          "note": "Run headlessly in CI/CD pipelines with exit code validation."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Master/Worker Architecture",
          "note": "Easy master/worker distributed scaling across multiple servers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Built-in Web UI",
          "note": "Includes real-time interactive web dashboard showing live RPS graphs."
        }
      },
      "tags": [
        "Locust",
        "Python",
        "Gevent",
        "Web UI"
      ]
    },
    {
      "id": "jmeter",
      "name": "Apache JMeter",
      "summary": "The classic Java desktop application designed to load test functional behavior and measure performance.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "XML GUI Builder",
          "note": "Construct tests via complex Java desktop GUI dialogs and XML files."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Heavy Java Threads",
          "note": "Allocates OS thread per Virtual User; requires heavy RAM for high VU counts."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Universal Protocols",
          "note": "Extensive support for HTTP, FTP, JDBC, LDAP, SOAP, and JMS."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "CLI Non-GUI Mode",
          "note": "Run in non-GUI mode for build pipelines."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Distributed Mode",
          "note": "Master/slave distributed testing infrastructure."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "HTML Reports",
          "note": "Generates detailed post-test HTML reports and CSV logs."
        }
      },
      "tags": [
        "JMeter",
        "Apache",
        "Java",
        "GUI",
        "Legacy"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt k6 for modern developer-centric load testing in JavaScript integrated into CI/CD pipelines.",
    "Use Locust if your engineering team writes Python and wants a live interactive web dashboard during test runs.",
    "Define CI performance thresholds (e.g. 95% of requests must complete under 200ms) to prevent performance regressions."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Load Testing Tool Selection",
        "description": "Choosing the performance benchmarking framework."
      },
      {
        "id": "p1",
        "label": "Developer-Centric JS Scripts & CI Thresholds",
        "description": "Need Go-powered speed, clean ES6 JavaScript test scripts, and native CI pass/fail thresholds."
      },
      {
        "id": "p2",
        "label": "Python-Based User Behavior Scenarios",
        "description": "Prefer writing user flows in standard Python with live web UI graphs."
      },
      {
        "id": "p3",
        "label": "Legacy Enterprise Protocol GUI Testing",
        "description": "Need desktop GUI builder for legacy enterprise protocols (JDBC, SOAP, LDAP)."
      },
      {
        "id": "e1",
        "label": "Grafana k6",
        "description": "Go-powered JavaScript load testing engine built for CI/CD."
      },
      {
        "id": "e2",
        "label": "Locust",
        "description": "Python-based user load testing tool with live web UI."
      },
      {
        "id": "e3",
        "label": "Apache JMeter",
        "description": "Classic Java desktop GUI load testing tool."
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
