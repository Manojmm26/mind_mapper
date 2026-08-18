import { TechStackProfile } from "./types";
import { RosettaParadigm, ScenarioNarrative, SqlRule } from "../examples/fullStackDotNetAngularMatrix";
import { ComparisonWorkspaceData } from "../../services/llmService";

const REACT_NODE_PARADIGMS: RosettaParadigm[] = [
  {
    "id": "di-context",
    "category": "DI & Lifecycles",
    "name": "1. Dependency & State Injection",
    "angularTitle": "React 19 Actions & useContext Hooks",
    "angularCode": "const OrderContext = createContext<OrderContextValue | null>(null);\n\nexport function useOrderService() {\n  const ctx = useContext(OrderContext);\n  if (!ctx) throw new Error(\"useOrderService must be used within OrderProvider\");\n  return ctx;\n}",
    "angularSoundbite": "React 19 utilizes Context Providers and custom Hooks to inject services and reactive state down the component tree.",
    "angularNuance": "Context updates trigger re-renders for all consuming components; split state and dispatch contexts or use fine-grained selectors.",
    "dotnetTitle": "NestJS / Express Inversion of Control Container",
    "dotnetCode": "@Injectable()\nexport class OrderService {\n  constructor(\n    private readonly repo: OrderRepository,\n    private readonly logger: LoggerService\n  ) {}\n\n  async findOrder(id: string): Promise<OrderDto> {\n    return this.repo.findById(id);\n  }\n}",
    "dotnetSoundbite": "NestJS provides full Angular-style Inversion of Control with decorator-based constructor injection for Node.js backends.",
    "dotnetNuance": "NestJS services are Singletons by default; use Scope.REQUEST only when per-request state (like multitenancy) is strictly required.",
    "runtimePhysics": "React context traverses the Fiber tree matching ContextProvider nodes. NestJS resolves dependency tokens via an internal ModuleRef graph at application bootstrap.",
    "candidateTrap": "Using Scope.REQUEST in NestJS on high-throughput routes (creates garbage collection churn per HTTP request).",
    "coreEquivalency": "React custom hooks and NestJS constructor injection provide clean separation of concerns and dependency isolation.",
    "interviewPunchline": "We maintain clean dependency boundaries: React custom hooks consume context-injected state, while NestJS IoC containers manage singleton service lifecycles on the Node.js backend.",
    "angularDossier": {
      "framework": "React 19",
      "conceptTitle": "React 19 Context Architecture & Custom Hook Encapsulation",
      "architectureOverview": "React 19 uses React Context and Custom Hooks to achieve dependency injection. Services, configuration, and shared state are provided at the root or feature layout level via Context.Provider and consumed via specialized hooks that enforce null-checks.",
      "underTheHoodMechanics": "During Fiber tree reconciliation, useContext reads the current value from the nearest matching ContextProvider Fiber node. When provider value references change, React schedules re-renders for all consumer fibers.",
      "extendedProductionCode": "interface OrderContextValue {\n  readonly orders: readonly Order[];\n  readonly loadOrders: () => Promise<void>;\n}\n\nconst OrderContext = createContext<OrderContextValue | null>(null);\n\nexport function OrderProvider({ children }: { children: ReactNode }) {\n  const [orders, setOrders] = useState<Order[]>([]);\n  const loadOrders = useCallback(async () => {\n    const data = await fetchOrders();\n    setOrders(data);\n  }, []);\n\n  const value = useMemo(() => ({ orders, loadOrders }), [orders, loadOrders]);\n  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;\n}",
      "codeExplanation": "Demonstrates clean context provider with memoized value to prevent unnecessary downstream re-renders.",
      "productionBestPractices": [
        "Always split frequently changing state contexts from stable dispatch/action contexts.",
        "Memoize context provider values with useMemo to avoid cascading consumer re-renders.",
        "Throw descriptive errors inside custom hooks if consumed outside their provider.",
        "Prefer React Server Components for zero-bundle data fetching before reaching for context.",
        "Use React 19 useActionState for form action lifecycle management."
      ],
      "seniorInterviewProbes": [
        {
          "interviewerQuestion": "Why is putting high-frequency state in React Context an anti-pattern, and what is the fix?",
          "modelLeadAnswer": "\"React Context lacks fine-grained selectors; every consumer component re-renders whenever the context value reference changes, regardless of whether that specific component consumed the changed property. For high-frequency state (like real-time trading feeds or mouse coords), we use Zustand or Valtio with fine-grained subscription selectors outside React's context tree.\"",
          "whyThisMatters": "Evaluates understanding of React Fiber reconciliation and state management scalability."
        }
      ],
      "criticalPitfallsAndAntiPatterns": [
        {
          "antiPattern": "Passing inline object literals directly to Context.Provider value prop.",
          "consequence": "Creates a new object reference on every render, triggering full consumer re-renders.",
          "remediation": "Wrap the value object in useMemo()."
        }
      ]
    },
    "dotnetDossier": {
      "framework": "Node.js & NestJS / PostgreSQL",
      "conceptTitle": "NestJS Inversion of Control (IoC) & Modular Architecture",
      "architectureOverview": "NestJS brings enterprise Inversion of Control to Node.js. Classes are marked with @Injectable() and registered in @Module() providers arrays. Dependencies are injected via constructor parameters, enabling loose coupling and testability.",
      "underTheHoodMechanics": "At bootstrap, NestJS builds a ModuleRef directed graph, evaluating parameter types via TypeScript's emitDecoratorMetadata. Singletons are instantiated once and cached in the internal container instance map.",
      "extendedProductionCode": "@Injectable()\nexport class OrderService {\n  constructor(\n    @Inject(ORDER_REPOSITORY) private readonly repo: IOrderRepository,\n    private readonly eventEmitter: EventEmitter2\n  ) {}\n\n  async processOrder(dto: CreateOrderDto): Promise<OrderDto> {\n    const order = await this.repo.save(dto);\n    this.eventEmitter.emit('order.created', order);\n    return order;\n  }\n}",
      "codeExplanation": "Shows constructor injection with custom symbol tokens for interface-based repository abstraction.",
      "productionBestPractices": [
        "Default to Singleton scope for all NestJS services.",
        "Use custom token Injection (@Inject('REPO_TOKEN')) to program against interfaces.",
        "Avoid circular module dependencies using forwardRef() as a last resort.",
        "Offload CPU-bound tasks (e.g. image processing) to Worker Threads.",
        "Use FastifyAdapter instead of default Express for 2x higher RPS throughput."
      ],
      "seniorInterviewProbes": [
        {
          "interviewerQuestion": "What is the performance consequence of using Scope.REQUEST in NestJS?",
          "modelLeadAnswer": "\"Scope.REQUEST forces NestJS to create a new instance of the service (and any downstream services in the injection tree) for every incoming HTTP request. Under 10,000 RPS, this creates hundreds of thousands of ephemeral objects, triggering heavy V8 Garbage Collection churn and increasing p99 latency by 4x. Keep services Singleton and pass request context via method parameters.\"",
          "whyThisMatters": "Validates understanding of V8 memory allocation and IoC container lifecycles in Node.js."
        }
      ],
      "criticalPitfallsAndAntiPatterns": [
        {
          "antiPattern": "Using Scope.REQUEST on database repository services.",
          "consequence": "Degrades throughput and explodes memory usage under high concurrency.",
          "remediation": "Keep repositories Singleton and inject request-scoped data (like auth tokens) via method arguments."
        }
      ]
    }
  },
  {
    "id": "reactivity-streaming",
    "category": "State & Async",
    "name": "2. Reactivity & Async Streaming",
    "angularTitle": "React 19 useActionState & useOptimistic",
    "angularCode": "const [optimisticOrders, setOptimisticOrders] = useOptimistic(\n  orders,\n  (state, newOrder: Order) => [...state, { ...newOrder, pending: true }]\n);",
    "angularSoundbite": "React 19 useOptimistic delivers instant UI updates while asynchronous Server Actions settle on the backend.",
    "angularNuance": "useOptimistic automatically rolls back when the parent transition or server action resolves or errors.",
    "dotnetTitle": "Node.js Event Loop & Server-Sent Events (SSE)",
    "dotnetCode": "@Controller('orders')\nexport class OrderStreamController {\n  constructor(private readonly eventEmitter: EventEmitter2) {}\n\n  @Sse('stream')\n  streamOrders(): Observable<MessageEvent> {\n    return fromEvent(this.eventEmitter, 'order.created').pipe(\n      map(data => ({ data } as MessageEvent))\n    );\n  }\n}",
    "dotnetSoundbite": "Node.js streams Server-Sent Events (SSE) directly over single non-blocking event loop threads with zero polling overhead.",
    "dotnetNuance": "Avoid CPU-heavy synchronous loops that block the single Node.js event loop thread during stream processing.",
    "runtimePhysics": "React 19 reconciles Concurrent Fiber trees. Node.js processes I/O non-blockingly via the libuv thread pool and epoll/kqueue polling.",
    "candidateTrap": "Blocking the Node.js event loop with CPU-heavy cryptographic operations or synchronous file system calls.",
    "coreEquivalency": "React optimistic state and Node.js non-blocking streaming provide instantaneous user feedback and low-overhead server events.",
    "interviewPunchline": "We optimize real-time streaming: React 19 useOptimistic provides instant client feedback, while Node.js libuv event loops stream asynchronous SSE events with minimal memory overhead.",
    "angularDossier": {
      "framework": "React 19",
      "conceptTitle": "React 19 Optimistic State & Server Action Transitions",
      "architectureOverview": "React 19 introduces useOptimistic and useActionState to eliminate loading spinners. When a user performs an action, the UI renders the anticipated success state immediately, syncing with server actions in the background.",
      "underTheHoodMechanics": "React wraps the update in a startTransition boundary. If the server action rejects, React catches the error and reverts the Fiber tree back to the last confirmed server snapshot.",
      "extendedProductionCode": "export function OrderForm({ onAdd }: { onAdd: (name: string) => Promise<void> }) {\n  const [state, formAction, isPending] = useActionState(async (prev: any, formData: FormData) => {\n    await onAdd(formData.get('name') as string);\n    return { success: true };\n  }, null);\n\n  return (\n    <form action={formAction}>\n      <input name=\"name\" required />\n      <button disabled={isPending}>{isPending ? 'Saving...' : 'Add Order'}</button>\n    </form>\n  );\n}",
      "codeExplanation": "Demonstrates React 19 form actions with built-in pending state management.",
      "productionBestPractices": [
        "Use useOptimistic for instant user feedback on deletions and creations.",
        "Pair form actions with useActionState for declarative validation states.",
        "Always provide error boundaries to catch rejected server actions.",
        "Ensure server actions validate inputs using Zod on the server before mutating databases."
      ],
      "seniorInterviewProbes": [
        {
          "interviewerQuestion": "How does React 19 roll back optimistic UI when a server action fails?",
          "modelLeadAnswer": "\"useOptimistic is bound to the lifespan of an asynchronous transition. React maintains the current committed base state alongside the optimistic layer. When the transition Promise rejects, React discards the optimistic delta during the next microtask and re-renders the component with the base state.\"",
          "whyThisMatters": "Validates understanding of React 19 concurrent transition mechanics."
        }
      ],
      "criticalPitfallsAndAntiPatterns": [
        {
          "antiPattern": "Calling useOptimistic outside of a startTransition or form action boundary.",
          "consequence": "Throws a runtime warning and fails to roll back on errors.",
          "remediation": "Always trigger optimistic updates inside startTransition(() => ...)."
        }
      ]
    },
    "dotnetDossier": {
      "framework": "Node.js & NestJS / PostgreSQL",
      "conceptTitle": "Node.js Libuv Event Loop & Real-Time SSE Streams",
      "architectureOverview": "Node.js uses an event-driven, single-threaded execution model backed by the libuv library for asynchronous I/O multiplexing. Server-Sent Events (SSE) enable lightweight, one-way HTTP streaming without WebSocket connection overhead.",
      "underTheHoodMechanics": "The event loop iterates through phases (timers, pending callbacks, poll, check, close). Asynchronous network I/O is offloaded to OS epoll/kqueue. Responses stream chunks directly to TCP sockets without buffering entire payloads in memory.",
      "extendedProductionCode": "@Injectable()\nexport class NotificationGateway {\n  private readonly clients = new Set<Response>();\n\n  addClient(res: Response) {\n    this.clients.add(res);\n    res.on('close', () => this.clients.delete(res));\n  }\n\n  broadcast(event: string, data: any) {\n    const payload = `event: ${event}\\ndata: ${JSON.stringify(data)}\\n\\n`;\n    this.clients.forEach(c => c.write(payload));\n  }\n}",
      "codeExplanation": "Direct Server-Sent Events broadcaster using non-blocking TCP socket writes.",
      "productionBestPractices": [
        "Never perform synchronous CPU-heavy work on the main event loop.",
        "Clean up closed socket connections in SSE endpoints to avoid memory leaks.",
        "Set appropriate keep-alive heartbeats (: ping\\n\\n) to prevent load balancer timeouts.",
        "Use Redis Pub/Sub to scale SSE broadcasts across multi-instance clusters."
      ],
      "seniorInterviewProbes": [
        {
          "interviewerQuestion": "How do you scale Server-Sent Events across 10 instances of a Node.js microservice?",
          "modelLeadAnswer": "\"Because each Node.js instance maintains TCP socket connections to a subset of clients, we connect all instances to a Redis Pub/Sub or Kafka topic. When an event occurs on Instance A, it publishes to Redis; all 10 instances receive the message from Redis and broadcast it locally to their connected SSE clients.\"",
          "whyThisMatters": "Tests distributed systems architecture and real-time scaling knowledge."
        }
      ],
      "criticalPitfallsAndAntiPatterns": [
        {
          "antiPattern": "Failing to remove disconnected client responses from the Set.",
          "consequence": "Socket descriptors leak and cause eventual EMFILE process crashes.",
          "remediation": "Always listen to response 'close' event and remove client from the set."
        }
      ]
    }
  }
];

const REACT_NODE_SCENARIOS: ScenarioNarrative[] = [
  {
    id: "node-event-loop-blocking",
    title: "1. Node.js Event Loop Latency Spike from Unbounded Crypto Hashing",
    archetype: "Production Outages & War Stories",
    coreIssue: "Under 15,000 RPS, Node.js API response times surged from 8ms to 4,500ms due to synchronous bcrypt token hashing on the main event loop.",
    tenSecondAnchor: "Synchronous CPU operations in Node.js block the single event loop thread, preventing all concurrent HTTP request processing.",
    fullScript: "Under load testing at 15,000 RPS, our Node.js microservice stopped responding to health checks. Using clinic.js and 0x flame graphs, we identified that an auth middleware was executing synchronous bcrypt.hashSync() on every request. In Node.js, the event loop is single-threaded; any synchronous computation >10ms halts all socket accepting and I/O processing. We migrated to asynchronous bcrypt with threadpool worker offloading and Argon2 via native C++ bindings, restoring event loop lag below 2ms at 20,000 RPS.",
    steeringBait: [
      "clinic.js Doctor and 0x flame graphs",
      "libuv UV_THREADPOOL_SIZE tuning",
      "Worker Threads vs Main Event Loop"
    ],
    redFlagPitfalls: [
      "Using synchronous *Sync() methods in production Node.js code.",
      "Claiming Node.js is multi-threaded for standard JavaScript code execution."
    ],
    telemetryMetrics: "Reduced event loop lag from 4.5s to 1.8ms, boosted RPS by 12x, stabilized CPU at 60%."
  }
];

const REACT_NODE_SQL_RULES: SqlRule[] = [
  {
    id: "prisma-relation-load",
    category: "EF Core & Dapper Integration",
    title: "1. Prisma Query Optimization & Connection Pool Sizing",
    badPattern: `// Inefficient Prisma N+1 query:
const users = await prisma.user.findMany({
  include: { posts: true, profile: true } // Fetches full table scans if unindexed
});`,
    optimizedPattern: `// Targeted select with indexing:
const users = await prisma.user.findMany({
  select: { id: true, email: true, profile: { select: { bio: true } } },
  where: { active: true }
});`,
    explanation: "Selecting only required fields in Prisma prevents loading unneeded database columns and enables PostgreSQL to satisfy queries via index-only scans.",
    productionImpact: "70% lower database bandwidth, sub-5ms query times across high-traffic user endpoints."
  }
];

const REACT_NODE_COMPARISON: ComparisonWorkspaceData = {
  "topic": "Full-Stack (React 19 + Node.js / NestJS + PostgreSQL) Master Architectural Matrix",
  "overview": "Comprehensive full-stack TypeScript architecture matrix evaluating trade-offs across React 19 Server Components, NestJS / libuv non-blocking event loop execution, and PostgreSQL Prisma query optimization.",
  "domainType": "approaches",
  "criteria": [
    {
      "id": "c1",
      "label": "Runtime Performance",
      "description": "Fiber reconciliation, libuv event loop lag, and asynchronous I/O multiplexing."
    },
    {
      "id": "c2",
      "label": "Architectural Parity",
      "description": "End-to-end TypeScript model sharing and middleware lifecycle symmetry."
    },
    {
      "id": "c3",
      "label": "Security & Resilience",
      "description": "Server Action validation, JWT token rotation, and Fastify rate limiting."
    },
    {
      "id": "c4",
      "label": "Data Access Efficiency",
      "description": "Prisma query selection, PostgreSQL connection pooling, and Redis caching."
    },
    {
      "id": "c5",
      "label": "Delivery Soundbite",
      "description": "Crisp 10-second confidence anchors and lead architectural soundbites."
    }
  ],
  "options": [
    {
      "id": "opt_react19",
      "label": "React 19 Frontend Architecture",
      "tagline": "React Server Components, useOptimistic, useActionState, Suspense",
      "description": "Modern React 19 architecture utilizing React Server Components for zero-bundle data fetching, useOptimistic for instant user feedback, and form actions.",
      "badge": "Frontend Lead",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "rating": 5,
          "displayValue": "Concurrent Fiber",
          "note": "Concurrent transitions and Server Components eliminate client bundle bloat."
        },
        "c2": {
          "criterionId": "c2",
          "rating": 5,
          "displayValue": "Full Parity",
          "note": "Shared TypeScript DTO contracts across client and server."
        },
        "c3": {
          "criterionId": "c3",
          "rating": 5,
          "displayValue": "Server Action Guard",
          "note": "Server Actions execute exclusively on server with Zod schema validation."
        },
        "c4": {
          "criterionId": "c4",
          "rating": 4,
          "displayValue": "Streamed Suspense",
          "note": "Incremental HTML stream chunks over HTTP without full client hydration blocking."
        },
        "c5": {
          "criterionId": "c5",
          "rating": 5,
          "displayValue": "Lead Soundbite Ready",
          "note": "React Server Components for zero-bundle data fetching; useOptimistic for instant user feedback."
        }
      }
    },
    {
      "id": "opt_nestjs",
      "label": "Node.js & NestJS Backend",
      "tagline": "IoC Container, Fastify Adapter, RxJS Event Streams, Argon2",
      "description": "High-throughput enterprise Node.js microservice architecture with NestJS Inversion of Control, Fastify engine, and libuv event loop multiplexing.",
      "badge": "Backend Lead",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "rating": 5,
          "displayValue": "Libuv Non-Blocking",
          "note": "Single-threaded event loop multiplexes 25,000 RPS with sub-2ms lag."
        },
        "c2": {
          "criterionId": "c2",
          "rating": 5,
          "displayValue": "IoC & Guards",
          "note": "Angular-style decorators and execution context guards."
        },
        "c3": {
          "criterionId": "c3",
          "rating": 5,
          "displayValue": "Stateless JWT",
          "note": "Passport JWT strategy with Argon2 password hashing."
        },
        "c4": {
          "criterionId": "c4",
          "rating": 5,
          "displayValue": "Prisma Select",
          "note": "Targeted column selection prevents unnecessary database heap allocation."
        },
        "c5": {
          "criterionId": "c5",
          "rating": 5,
          "displayValue": "Lead Soundbite Ready",
          "note": "Never block the single-threaded event loop with synchronous CPU work; offload to Worker Threads."
        }
      }
    },
    {
      "id": "opt_postgres_prisma",
      "label": "PostgreSQL & Prisma Optimization",
      "tagline": "Index-Only Scans, PgBouncer, Keyset Pagination",
      "description": "High-efficiency PostgreSQL integration with Prisma ORM, PgBouncer connection pooling, and composite B-Tree indexes.",
      "badge": "Data Architect",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "rating": 5,
          "displayValue": "Index-Only Scans",
          "note": "Covering indexes satisfy queries directly without heap page fetches."
        },
        "c2": {
          "criterionId": "c2",
          "rating": 4,
          "displayValue": "Type-Safe Prisma",
          "note": "Prisma Client auto-generates TypeScript types matching the database schema."
        },
        "c3": {
          "criterionId": "c3",
          "rating": 5,
          "displayValue": "Parameterized SQL",
          "note": "Prisma parameterizes all queries to prevent SQL injection."
        },
        "c4": {
          "criterionId": "c4",
          "rating": 5,
          "displayValue": "PgBouncer Scaling",
          "note": "PgBouncer transaction pooling allows 5,000 client connections to share 50 backend connections."
        },
        "c5": {
          "criterionId": "c5",
          "rating": 5,
          "displayValue": "Lead Soundbite Ready",
          "note": "Use keyset cursor pagination with composite indexes for O(1) page traversal across millions of rows."
        }
      }
    }
  ],
  "suggestedNextSteps": [
    "Rehearse 90-second delivery scripts in the Scenario Teleprompter tab",
    "Study the Rosetta Stone cross-framework symmetrical paradigms",
    "Review Prisma and PostgreSQL connection pooling optimization rules"
  ]
};

export const REACT_NODE_STACK: TechStackProfile = {
  id: "react-node-postgres",
  title: "React 19 ↔ Node.js (NestJS) & PostgreSQL",
  shortBadge: "⚛️ React + 🟢 Node.js",
  description: "End-to-end full-stack TypeScript stack featuring React 19 Server Components and useOptimistic with NestJS, libuv non-blocking event loops, and PostgreSQL.",
  category: "Enterprise Full-Stack",
  frontend: {
    name: "React 19",
    shortName: "React",
    iconName: "Atom",
    themeColor: "cyan",
    badgeBg: "bg-cyan-100 dark:bg-cyan-950/60",
    badgeText: "text-cyan-700 dark:text-cyan-300",
    soundbiteTag: "React 19 Architecture"
  },
  backend: {
    name: "Node.js & NestJS",
    shortName: "NestJS",
    iconName: "Server",
    themeColor: "emerald",
    badgeBg: "bg-emerald-100 dark:bg-emerald-950/60",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    soundbiteTag: "Node.js & NestJS Architecture"
  },
  database: {
    name: "PostgreSQL & Prisma",
    engine: "PostgreSQL",
    iconName: "Database"
  },
  paradigms: REACT_NODE_PARADIGMS,
  scenarios: REACT_NODE_SCENARIOS,
  sqlRules: REACT_NODE_SQL_RULES,
  comparisonData: REACT_NODE_COMPARISON
};
