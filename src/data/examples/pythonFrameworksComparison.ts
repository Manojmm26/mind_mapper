import { ComparisonWorkspaceData } from "../../services/llmService";

export const PYTHON_FRAMEWORKS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Python Web Frameworks: FastAPI vs Django vs Flask vs Litestar",
  "domainType": "tools",
  "overview": "An architectural comparison of Python web frameworks evaluating async performance, Pydantic type validation, ORM integration, and developer velocity.",
  "recommendedApproach": "Use FastAPI for modern async microservices and AI REST APIs; use Django for batteries-included full-stack monoliths; use Litestar for high-performance enterprise ASGI applications.",
  "criteria": [
    {
      "id": "c1",
      "label": "Async (ASGI) Performance & Concurrency",
      "type": "text",
      "description": "Native async/await event loop throughput and non-blocking I/O handling."
    },
    {
      "id": "c2",
      "label": "Type Validation & OpenAPI Generation",
      "type": "text",
      "description": "Pydantic request body validation and automatic Swagger/OpenAPI docs generation."
    },
    {
      "id": "c3",
      "label": "Batteries-Included Features (ORM, Admin, Auth)",
      "type": "text",
      "description": "Built-in admin panel, ORM migrations, authentication, and session handling."
    },
    {
      "id": "c4",
      "label": "Ecosystem & Microservice Readiness",
      "type": "text",
      "description": "Ideal choice for building AI/ML inference endpoints vs monoliths."
    },
    {
      "id": "c5",
      "label": "Developer Velocity & Simplicity",
      "type": "text",
      "description": "Boilerplate required to build robust REST APIs."
    },
    {
      "id": "c6",
      "label": "Dependency Injection Architecture",
      "type": "text",
      "description": "Built-in dependency injection container for clean architecture."
    }
  ],
  "options": [
    {
      "id": "fastapi",
      "name": "FastAPI",
      "summary": "Modern, fast (high-performance) web framework for building APIs with Python 3.8+ based on standard type hints.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High (ASGI)",
          "note": "Built on Starlette and Uvicorn for asynchronous execution speed."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Pydantic v2)",
          "note": "Uses Pydantic v2 for ultra-fast C-extension request validation and automatic Swagger UI."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Minimal (Decoupled)",
          "note": "Decoupled by design; pair with SQLAlchemy 2.0 or SQLModel."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Industry Standard for AI",
          "note": "The universal framework for serving PyTorch, LangChain, and OpenAI API services."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Outstanding",
          "note": "Write typed Python functions and get validated, documented APIs instantly."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Depends System",
          "note": "Intuitive Depends() function injection for DB sessions and security."
        }
      },
      "tags": [
        "FastAPI",
        "Pydantic",
        "Async",
        "AI Standard"
      ]
    },
    {
      "id": "django",
      "name": "Django (REST Framework)",
      "summary": "The batteries-included Python web framework powering high-traffic enterprise applications.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "WSGI / Growing ASGI",
          "note": "Traditionally WSGI; Django 4.2+ adds async ORM and view capabilities."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "DRF Serializers",
          "note": "Django REST Framework (DRF) or Django Ninja provides API schemas."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Unmatched (Batteries-Included)",
          "note": "Includes Django ORM, auto-generated Admin dashboard, migrations, and Auth system."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Monolith Powerhouse",
          "note": "Proven at scale by Instagram, Pinterest, and Bitbucket."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "High Productivity",
          "note": "Rapidly build complete web platforms with built-in admin tools."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Monolithic Context",
          "note": "Relies on request-response middleware context."
        }
      },
      "tags": [
        "Django",
        "Batteries-Included",
        "Admin Panel",
        "ORM"
      ]
    },
    {
      "id": "litestar",
      "name": "Litestar (formerly Starlite)",
      "summary": "Lightweight, highly performant ASGI framework emphasizing strong typing and dependency injection.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (ASGI)",
          "note": "Optimized execution pipeline outperforming FastAPI in throughput benchmarks."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Pydantic & Attrs & Dataclasses",
          "note": "Supports Pydantic, msgspec, attrs, and native Python dataclasses."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Extensive Plugin System",
          "note": "Official plugins for SQLAlchemy, Picologging, and JWT authentication."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Enterprise ASGI",
          "note": "Designed for complex multi-layered enterprise API architectures."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Excellent",
          "note": "Clean, opinionated class-based and function-based controllers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "First-Class DI Container",
          "note": "Advanced dependency injection graph with scope management."
        }
      },
      "tags": [
        "Litestar",
        "ASGI",
        "Dependency Injection",
        "High-Speed"
      ]
    },
    {
      "id": "flask",
      "name": "Flask",
      "summary": "The classic lightweight WSGI microframework for Python.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "WSGI Synchronous",
          "note": "Synchronous WSGI framework relying on Gunicorn worker processes."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Manual / Marshmallow",
          "note": "Requires extensions (Flask-RESTful, Marshmallow) for validation."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Micro Core",
          "note": "Minimal core; developer selects ORM (Flask-SQLAlchemy) and Auth plugins."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Simple Services",
          "note": "Popular for small scripts and legacy microservices."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Very Simple",
          "note": "Minimal learning curve for single-file Python scripts."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Global Context",
          "note": "Uses Flask 'request' and 'g' thread-local objects."
        }
      },
      "tags": [
        "Flask",
        "WSGI",
        "Microframework",
        "Simple"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose FastAPI for building AI/ML microservices and modern async REST APIs.",
    "Choose Django if building a full-stack SaaS application needing an instant admin panel and ORM.",
    "Choose Litestar if needing advanced dependency injection and msgspec performance for large APIs.",
    "Benchmark async database drivers (asyncpg + SQLAlchemy 2.0) under high request concurrency."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Python Framework Selection",
        "description": "Choosing the Python web backend framework."
      },
      {
        "id": "p1",
        "label": "Async Microservices & AI Model APIs",
        "description": "Need high-speed ASGI event loop, Pydantic type validation, and automatic Swagger docs."
      },
      {
        "id": "p2",
        "label": "Full-Stack SaaS Monolith with Admin Dashboard",
        "description": "Need built-in ORM, admin panel, authentication, and database migrations."
      },
      {
        "id": "p3",
        "label": "High-Performance Enterprise Dependency Injection",
        "description": "Need clean architecture DI container and msgspec throughput for large API fleets."
      },
      {
        "id": "p4",
        "label": "Lightweight Minimalist Script / App",
        "description": "Simple WSGI microframework for small internal endpoints."
      },
      {
        "id": "e1",
        "label": "FastAPI",
        "description": "Modern async framework with Pydantic type validation."
      },
      {
        "id": "e2",
        "label": "Django",
        "description": "Batteries-included full-stack framework with built-in admin."
      },
      {
        "id": "e3",
        "label": "Litestar",
        "description": "High-speed enterprise ASGI framework with advanced DI."
      },
      {
        "id": "e4",
        "label": "Flask",
        "description": "Classic synchronous WSGI microframework."
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
        "source": "root",
        "target": "p4"
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
      },
      {
        "source": "p4",
        "target": "e4"
      }
    ]
  }
};
