import { ComparisonWorkspaceData } from "../../services/llmService";

export const E2E_TESTING_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "E2E Testing & Browser Automation Frameworks: Playwright vs Cypress vs Selenium vs Puppeteer",
  "domainType": "tools",
  "overview": "A web quality engineering comparison evaluating multi-browser automation (Chromium, Firefox, WebKit), execution speed, auto-waiting reliability, parallel worker execution, and API testing capabilities.",
  "recommendedApproach": "Use Playwright for modern multi-browser E2E testing and scraping; use Cypress for interactive component testing with time-travel debugging; use Puppeteer for lightweight Chromium automation.",
  "criteria": [
    {
      "id": "c1",
      "label": "Multi-Browser Engines (Chromium, Firefox, WebKit)",
      "type": "text",
      "description": "Testing against real Safari WebKit, Firefox, and Chromium browser engines."
    },
    {
      "id": "c2",
      "label": "Auto-Waiting & Test Flakiness Elimination",
      "type": "text",
      "description": "Built-in auto-waiting for actionability before clicking or typing."
    },
    {
      "id": "c3",
      "label": "Execution Speed & Parallel Test Isolation",
      "type": "text",
      "description": "Running tests in isolated browser contexts in parallel across CPU cores."
    },
    {
      "id": "c4",
      "label": "Network Mocking & API Interception",
      "type": "text",
      "description": "Intercepting, mocking, and stubbing HTTP network requests natively."
    },
    {
      "id": "c5",
      "label": "Time-Travel Debugging & Trace Viewer",
      "type": "text",
      "description": "Inspecting DOM snapshots, console logs, and network calls at every test step."
    },
    {
      "id": "c6",
      "label": "Language Support (TS/JS, Python, Java, C#)",
      "type": "text",
      "description": "Writing test scripts in TypeScript, Python, Java, or C#."
    }
  ],
  "options": [
    {
      "id": "playwright",
      "name": "Playwright (Microsoft)",
      "summary": "Modern end-to-end testing framework for web apps supporting fast multi-browser automation.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (All 3 Engines)",
          "note": "Executes tests natively across Chromium, Firefox, and Safari WebKit."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Flawless Auto-Waiting",
          "note": "Auto-waits for elements to be visible, enabled, and stable before performing actions."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Blazing Fast (Browser Contexts)",
          "note": "Creates lightweight isolated browser contexts in milliseconds for fast parallel execution."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Native Route Interception",
          "note": "Fulfill, abort, or mock HTTP requests seamlessly via page.route()."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Playwright Trace Viewer",
          "note": "Trace Viewer records DOM snapshots, network HAR, and video recordings for debugging."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "TS, JS, Python, Java, C#",
          "note": "First-class SDKs for TypeScript, Python, Java, and .NET."
        }
      },
      "tags": [
        "Playwright",
        "Microsoft",
        "Multi-Browser",
        "WebKit",
        "Fast"
      ]
    },
    {
      "id": "cypress",
      "name": "Cypress",
      "summary": "Developer-friendly frontend testing framework built for the modern web.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Chromium & Firefox",
          "note": "Runs inside browser; supports Chrome, Edge, Electron, and Firefox (WebKit experimental)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Built-in Retries",
          "note": "Automatic assertion retry loops."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "In-Browser Execution",
          "note": "Runs directly inside browser loop; parallelization requires Cypress Cloud or plugin."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "cy.intercept()",
          "note": "Powerful network request interception and stubbing."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class Interactive Runner",
          "note": "Time-travel DOM snapshots directly inside browser GUI during test runs."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "JavaScript / TypeScript",
          "note": "JS/TS only."
        }
      },
      "tags": [
        "Cypress",
        "Component Testing",
        "Time-Travel",
        "Interactive"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Playwright as the primary E2E testing framework for multi-browser Safari/Chrome/Firefox test automation.",
    "Use Playwright Trace Viewer in CI/CD pipelines to debug failed test runs instantly with DOM snapshots.",
    "Eliminate hardcoded sleeps (page.waitForTimeout) by relying on auto-waiting assertions."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "E2E Testing Selection",
        "description": "Choosing the web browser automation framework."
      },
      {
        "id": "p1",
        "label": "Multi-Browser WebKit/Chrome Testing & Speed",
        "description": "Need fast parallel execution across real Safari WebKit, Firefox, and Chromium with Trace Viewer."
      },
      {
        "id": "p2",
        "label": "Interactive In-Browser Component Testing",
        "description": "Need interactive browser GUI with time-travel DOM snapshots for frontend developers."
      },
      {
        "id": "e1",
        "label": "Playwright",
        "description": "Microsoft multi-browser E2E testing framework with WebKit support."
      },
      {
        "id": "e2",
        "label": "Cypress",
        "description": "Interactive developer-friendly E2E and component testing framework."
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
        "source": "p1",
        "target": "e1"
      },
      {
        "source": "p2",
        "target": "e2"
      }
    ]
  }
};
